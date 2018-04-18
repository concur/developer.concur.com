---
title: Response Codes
layout: reference
---

# Request

## Response Codes

### Success Codes

|Code|Message|Information|
|---|---|---|
|200|OK|Your GET request succeeded.|
|201|Created|Your POST request succeeded.|

### Failure Codes

|Code|Message|Response Body|Information|Wrong input example|
|---|---|---|---|---|
|400|Bad Request|`badParam` the request has bad parameter(s) {requestName}|The name of the request doesn't have the expected format|POST /v4/requests -d {"requestName":"test"}|
|400|Bad Request|`invalidJson` invalid json structure|An input JSON structure couldn't be parsed|POST /v4/requests -d {name:"test"}|
|400|Bad Request|`invalidDate` error while parsing date value {dateValue}|A date or datetime value couldn't be parsed|POST /v4/requests -d {"startDate":"2017-01"}|
|400|Bad Request|`invalidUuid` for concur-correlationid {correlationId}|The concur correlation id of the request is not a valid UUID||
|400|Bad Request|`invalidUuid` {requestName}|The name of the request doesn't have the expected format|GET /v4/requests/123|
|400|Bad Request|`invalidLocation` the location cannot be resolved, please provide either {iataCode} or {countryCode} and {cityName}|Required location input is missing|POST /v4/requests -d `{"mainDestination": {"city":"Paris"}}|
|400|Bad Request|`invalidLocation` the location cannot be resolved, no location found for iataCode={iataCode}|No location found matching the iataCode provided||
|400|Bad Request|`invalidLocation` the location cannot be resolved, no city found for countryCode={countryCode} and cityName={cityName}|No location found matching the country code and city name provided||
|400|Bad Request|`invalidLocation` the location cannot be resolved, multiple locations available for countryCode={countryCode} and cityName={cityName}|Multiple locations found matching the country code and city name provided||
|400|Bad Request|`invalidPolicy` invalid policy id||POST /v4/requests -d {"policy": {"id":"ABC"}} where ABC is not a valid policy for the current user|
|400|Bad Request|`listValidationError` validation of list items failed||POST /v4/requests -d {"custom1":{"code":"CONCUR"}} where CONCUR is not a valid value for the field custom1|
|400|Bad Request|`missingRequiredField` at least 1 required field has an empty value|A request with no value on a mandatory field has been submitted||
|400|Bad Request|`blockingException` at least 1 blocking exception|A request with a blocking exception has been submitted||
|400|Bad Request|`multiLegNotAllowed` cannot save a multi leg, multi-leg is not enabled for this entity|The multi leg support is not allowed for the entity||
|400|Bad Request|`reportTemplateNotFound` failed to retrieve report template|The multi leg support is not allowed for the entity||
|401|Unauthorized|`invalidUser` the request's user is invalid|invalid or non existent authorization HTTP header||
|403|Forbidden|`permissionDenied` permission denied|User approving his own request, or without approver/processor role||
|403|Forbidden|`requestStatusNotApproved` the request is not approved or canceled after approval|||
|403|Forbidden|`userIsNotAllowed` User is not allowed to access this resource|||
|403|Forbidden|`requestStartDateInTheFuture` report cannot be create from an approved request before request start|||
|404|Not Found|`notFound` resource not found|You tried to get a non-existing request|GET /v4/requests/AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA|
|408|Request Timeout|`timeOut` timeout has occurred|||
|500|Internal Server Error|`timeOut` timeout has occburred|||
|500|Internal Server Error|`createReportError` error while creating an expense report|||
|500|Internal Server Error|`internalServerError` internal server error|||
|500|Internal Server Error|`associateReportError` error while associating a report to a request|||
|503|Service Unavailable|`circuitBreaker` Circuit Breaker is open, please try again on a different node|The server node might be unavailable, be retrying the request you may reach a healthy node||
|503|Service Unavailable|`entityOffline` Entity is offline, please try again later.|||
