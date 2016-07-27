'use strict'

var _ = require('underscore');
var path = require('path');
var util = require('util');
var logger = require('@concur/concur-utils').logging.fromConfig({ 
  applicationName: 'Concur Swagger Converter',
  loggerLevel: process.env.LOGGER_LEVEL });
var program = require('commander');
var fs = require('fs');
var url = require('url');
var _str = require("underscore.string"); 

program
  .version('1.0.0')
  .usage('[options] <file ...>')
  .option('-o, --output [file]', 'Output file or directory')
  .parse(process.argv);

logger.trace(util.format('output file: %s', program.output));
logger.trace(util.format('file(s) to parse: %s', program.args));

var truth = function(){
  return true;
};

var nontruth = _.negate(truth);

var swaggerTypes = {
  'integer': { type: 'integer', format: 'int32' },
  'long': { type: 'integer', format: 'int64' },
  'float': { type: 'number', format: 'float' },
  'double': { type: 'number', format: 'double' },
  'string': { type: 'string' },
  'byte': { type: 'string', format: 'byte' },
  'binary': { type: 'string', format: 'binary' },
  'boolean': { type: 'boolean' },
  'date': { type: 'string', format: 'date' },
  'dateTime': { type: 'string', format: 'date-time' },
  'password': { type: 'string', format: 'password' }
};

var dotNetSwaggerTypeMap = {
  'Int32': swaggerTypes.integer,
  'Int32?': swaggerTypes.integer,
  'string': swaggerTypes.string,
  'Boolean?': swaggerTypes.boolean,
  'bool': swaggerTypes.boolean,
  'Decimal?': swaggerTypes.double,
  'Decimal': swaggerTypes.double,
  'DateTime?': swaggerTypes.dateTime,
  'int': swaggerTypes.integer,
  'datetime': swaggerTypes.dateTime
};

var scrubTypeName = function(typeName){
  // overreaches in that it replaces all occurences; at present, though there are no swagger or json schema types that have '?' in the middle of the type name
  return typeName.replace('?','').toLowerCase();
};

var mapSwaggerType = function(concurSwagger, concurSwaggerTypeInfo){
  // is the type a reference to a definition?
  if(concurSwagger.models && concurSwagger.models[concurSwaggerTypeInfo.typeName])
    return { 
      "$ref": "#/definitions/" + concurSwaggerTypeInfo.typeName,
      isDefinitionRef: truth
    };

  if(concurSwaggerTypeInfo.isArray())
    return { 
      type: 'array',
      "items": mapSwaggerType(concurSwagger, { isArray: nontruth, typeName: concurSwaggerTypeInfo.typeName }),
      isDefinitionRef: nontruth
    };

  let t = _.has(dotNetSwaggerTypeMap, concurSwaggerTypeInfo.typeName) 
    ? dotNetSwaggerTypeMap[concurSwaggerTypeInfo.typeName] 
    : { type: scrubTypeName(concurSwaggerTypeInfo.typeName) };
  t.isDefinitionRef = nontruth;
  return t;
};

// TODO: refactor out the duplication?
var isArray = function(typeName){
  return typeName.toLowerCase() ===  'array';
};

var getConcurSwaggerModelType = function(model){
  return {
    isArray: _.partial(isArray, model.type),
    typeName: isArray(model.type) // for an array, the type name will come from either $ref or type
      ? model.items['$ref'] || model.items.type 
      : model.type
  }
};

var getConcurSwaggerParameterType = function(parameter){
  return {
    isArray: _.partial(isArray, parameter.dataType),
    typeName: isArray(parameter.dataType) ? parameter.items['$ref'] : parameter.dataType
  }
};

var mapSwaggerParams = function(swaggerParameters){
  return _.map(swaggerParameters, swaggerParameter => {
    let param = { 
      name: swaggerParameter.name,
      'in': swaggerParameter.paramType,
      description: swaggerParameter.description,
      required: swaggerParameter.required 
    };

    let paramType = swaggerTypeMapper(getConcurSwaggerParameterType(swaggerParameter));

    param = param['in'] === 'body' 
      ? _.extend(param, { schema: paramType})
      : _.extend(param, paramType);

    return param; 
  });
};

var mapSwaggerMethods = function(concurSwaggerApiOperations){
  return _.reduce(concurSwaggerApiOperations, (memo, concurSwaggerApiOperation) => {
    // add only the first instance of a method name
    if(_.has(memo, concurSwaggerApiOperation.httpMethod.toLowerCase()))
      return memo;
    memo[concurSwaggerApiOperation.httpMethod.toLowerCase()] = {
      tags: [ 'Resources' ],
      summary: concurSwaggerApiOperation.summary,
      description: concurSwaggerApiOperation.notes,
      parameters: mapSwaggerParams(concurSwaggerApiOperation.parameters),
      responses: {
          200: {
            description: 'Success',
            schema: { '$ref': '#/definitions/' + concurSwaggerApiOperation.responseClass }
          }  
        }
    };
    return memo;
  }, {});
};

var mapSwaggerPaths = function(concurSwaggerApis){
  return _.reduce(concurSwaggerApis, (memo, concurSwaggerApi) => {
    memo[concurSwaggerApi.path] = memo[concurSwaggerApi.path] 
      ? _.extend(memo[concurSwaggerApi.path], mapSwaggerMethods(concurSwaggerApi.operations))
      : mapSwaggerMethods(concurSwaggerApi.operations);

    return memo;
  }, {});
};

var truthyKeys = function(){
  let keys = arguments;

  return function(value, key, object){
    return _.contains(keys, key) && _.isString(value);
  }
}

var mapSwaggerDefinitions = function(concurSwaggerModels){
  return _.mapObject(concurSwaggerModels, (val, key) => {
    return { 
      properties: _.mapObject(val.properties, (val, key) => {
        let t = swaggerTypeMapper(getConcurSwaggerModelType(val));
debugger;
        if(!t.isDefinitionRef())
          t = _.extend(t, _.pick(val, truthyKeys('description')));
        return _.clone(t);
      })
    };
  });
};

var swaggerTypeMapper = null;

var mapSwagger2 = function(concurSwagger){
  // TODO: refactor as this creates a module variable and side-effect
  swaggerTypeMapper = _.partial(mapSwaggerType, concurSwagger)

  let basePathUrl = url.parse(concurSwagger.basePath);
  let validSwagger = {
    swagger: concurSwagger.swaggerVersion,
    host: 'www.concursolutions.com',
    basePath: basePathUrl.path,
    schemes: [
      'https'
    ],
    produces: [
      'application/json',
      'application/xml'
    ],
    consumes: [
      'application/json',
      'application/xml'
    ],
    info: {
      title: _.map(_str.words(_str.humanize(concurSwagger.resourcePath)), w => { return _str.capitalize(w); }).join(' '),
      description: '',
      version: concurSwagger.apiVersion
    },
    tags: [{
      name: 'Resources',
      description: ''
    }],
    paths: mapSwaggerPaths(concurSwagger.apis),
    definitions: mapSwaggerDefinitions(concurSwagger.models)
  };
  return validSwagger;
};

var convertFile = function(file){
  fs.readFile(file, (err, data) => {
    if(err){
      logger.error(err);
      return;
    }

    let concurSwagger = JSON.parse(data);
    let validSwagger = mapSwagger2(concurSwagger);

    console.log(JSON.stringify(validSwagger));
  });
};

_.each(program.args, convertFile);
