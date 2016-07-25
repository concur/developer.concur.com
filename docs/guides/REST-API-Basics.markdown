---
title: REST API Basics
layout: reference
---


* [Uniform Resource Identifier (URI)](#uri)
* [HTTP Methods](#methods)
* [HTTP Message Header](#header)
* [HTTP Entity](#entity)
* [JSON](#json)

## <a name="uri"></a>Uniform Resource Identifier (URI)

[https://www.w3.org/Protocols/rfc2616/rfc2616-sec3.html#sec3.2](https://www.w3.org/Protocols/rfc2616/rfc2616-sec3.html#sec3.2)

`http://phosiere.com`

## <a name="methods"></a>HTTP Methods

[https://www.w3.org/Protocols/rfc2616/rfc2616-sec9.html](https://www.w3.org/Protocols/rfc2616/rfc2616-sec9.html)

Method | Description
-------|------------|
GET|Retrieve whatever information (in the form of an entity) is identified by the URI.
POST|Request the server to accept the entity in the request. Server determines response URI.
PUT| Request the server to store the entity under the supplied URI.
DELETE|Requests the server to delete the resource identified by the URI.

Others: OPTIONS, HEAD, TRACE, CONNECT

`get http://phosiere.com`  

## <a name="header"></a>HTTP Message Header  


[https://www.w3.org/Protocols/rfc2616/rfc2616-sec14.html](https://www.w3.org/Protocols/rfc2616/rfc2616-sec14.html)

### Request  


```
  GET / HTTP/1.1
  User-Agent: curl/7.37.1
  Host: phosiere.com
  Accept: */*
```

### Response  


```
  HTTP/1.1 200 OK
  Cache-Control: private
  Content-Type: text/html; charset=utf-8
  Server: Microsoft-IIS/8.0
  X-AspNet-Version: 2.0.50727
  X-Powered-By: ASP.NET
  Date: Tue, 19 May 2015 22:45:47 GMT
  Content-Length: 83
```

## <a name="entity"></a>HTTP Entity

[https://www.w3.org/Protocols/rfc2616/rfc2616-sec7.html#sec7](https://www.w3.org/Protocols/rfc2616/rfc2616-sec7.html#sec7)  


```
  <html>
    <head>
      <title>Phosière</title>
    </head>
    <body>
    Coming soon...
    </body>
  </html>
```

## <a name="json"></a>JSON

[http://json-schema.org/example1.html](http://json-schema.org/example1.html)

### Schema  

```
  {
      "$schema": "http://json-schema.org/draft-04/schema#",
      "title": "Product set",
      "type": "array",
      "items": {
          "title": "Product",
          "type": "object",
          "properties": {
              "id": {
                  "description": "The unique identifier for a product",
                  "type": "number"
              },
              "name": {
                  "type": "string"
              },
              "price": {
                  "type": "number",
                  "minimum": 0,
                  "exclusiveMinimum": true
              },
              "tags": {
                  "type": "array",
                  "items": {
                      "type": "string"
                  },
                  "minItems": 1,
                  "uniqueItems": true
              },
              "dimensions": {
                  "type": "object",
                  "properties": {
                      "length": {"type": "number"},
                      "width": {"type": "number"},
                      "height": {"type": "number"}
                  },
                  "required": ["length", "width", "height"]
              },
              "warehouseLocation": {
                  "description": "Coordinates of the warehouse with the product",
                  "$ref": "http://json-schema.org/geo"
              }
          },
          "required": ["id", "name", "price"]
      }
  }
```

Resource located at http://json-schema.org/geo:  


```
  {
      "$schema": "http://json-schema.org/draft-04/schema#",
      "description": "A geographical coordinate",
      "type": "object",
      "properties": {
          "latitude": { "type": "number" },
          "longitude": { "type": "number" }
      }
  }
```

### Data  


```
  [
      {
          "id": 2,
          "name": "An ice sculpture",
          "price": 12.50,
          "tags": ["cold", "ice"],
          "dimensions": {
              "length": 7.0,
              "width": 12.0,
              "height": 9.5
          },
          "warehouseLocation": {
              "latitude": -78.75,
              "longitude": 20.4
          }
      },
      {
          "id": 3,
          "name": "A blue mouse",
          "price": 25.50,
          "dimensions": {
              "length": 3.1,
              "width": 1.0,
              "height": 1.0
          },
          "warehouseLocation": {
              "latitude": 54.4,
              "longitude": -32.7
          }
      }
  ]
```

### Documentation

#### Product

Name | Type | Format | Description
-----|------|--------|------------
`id`|`number`|-|**Required** Unique identifier for a product
`name`|`string`|-|**Required** Name of the product
`price`|`number`|[`price`](#price)|**Required** Cost of the product
`tags`|`arrary`|`string`|Tags attached to the product
`dimensions`|`object`|[`dimensions`](#dimensions)|Measurements of the product
`warehouseLocation`|`object`|[`warehouseLocation`](#warehouseLocation)|Coordinates of the warehouse with the product

##### <a name="dimensions"></a>dimensions

Name | Type | Format | Description
-----|------|--------|------------
`length`|`number`|-|**Required** Length
`width`|`number`|-|**Required** Width
`height`|`number`|-|**Required** Height

##### <a name="warehouseLocation"></a>warehouseLocation

Name | Type | Format | Description
-----|------|--------|------------
`latitude`|`number`|-|Latitude
`longitude`|`number`|-|Longitude

##### Common

Name | Description
-----|------------
<a name="price"></a>`price`|"minimum": 0, "exclusiveMinimum": true
