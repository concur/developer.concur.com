---
title: HTTP Codes 
layout: reference
---




##  Successful Requests

The web services return a HTTP 2xx response code when the request was successful.

**HTTP Success Codes**:

|  Success Code |  Message |  Description |
|----|-----|----|
|  200 |  OK |  The request was received successfully. |

##  Failed Requests

The web service should return a response within 60 seconds. If the request times out without a response, the application should wait for 5 minutes then retry the request. If the request continues to time out after a few retries, the developer should contact [concurconnecttech@concur.com][1].

The web service returns a 4xx or 5xx HTTP response code when there are any errors and will include the following elements:  

|  Element |  Description |
| ----- |----|
|  StatusCode |  The HTTP error code. |
| Content | A parent element that contains an **Error** child element.

### Error elements

|  Element |  Description |
| ----- |----|
|  Message |  The error message. |
|  Server-Time |  The time the error was generated, based on Concur's server's time zone. | 
|  Id |  The ID of the error within Concur. |

Refer to the individual function documentation for function-specific error formats.

### HTTP Error Codes

The full list of possible HTTP error codes can be found [here][2]. The table below provides additional details for commonly encountered error codes.  

|  Error Code |  Message |  Description |
|-----|------|------|
|400|Bad Request|  This response is returned if any of these conditions is true:<br><br>* The specified URI is invalid.<br>* The request is not formatted correctly.<br>* The request is missing a required field.<br>* The number of requests received exceed the request limit.<br>* The request encountered a database deadlock. In this case, the developer should resend the request a short time later.<br>* This error can be received if Chunked Transfer-Encoding is enabled by the developer's web server. Concur does not support Chunked Transfer-Encoding.<br><br>**Attendee Web Service**:<br><br>* The batch type parameter is not included on the URI of batch operations.<br>* The request contains 0 attendees.<br>* The request contains over 1000 attendees.<br><br>**Imaging Web Service**:<br><br>* The barcode or reportId is missing.<br><br>**Purchase Order Web Service**:<br><br>* The request contains 0 purchase orders.<br>* The request contains over 1000 purchase orders.<br><br>**List Item Web Service**:<br><br>* The request contains 0 list items.<br>* The request contains over 1000 list items.<br><br>**Payment Batch File**:<br><br>* The Batch ID specified in the URI is invalid.<br><br>**Trip Approval**:<br><br>* The request contains 0 itineraries.<br><br>**User Web Service**:<br><br>* The request contains 0 users.<br>* The request contains over 1000 users.|
|  401 |  Unauthorized |  The Authorization header is not included in the request. |
|  403 |  Forbidden |  This response is returned if any of these conditions is true:<br><br>* The Authorization header is included but it fails validation. This can happen if the OAuth consumer does not have access to the Concur product required by the web service.<br>* The partner application associated with the oauth_consumer_key has not been allowed access to the requested company.<br>* The Oauth token has expired or been revoked.<br> |
|  404 |  Not Found |  **Extract Web Service**: The Definition ID or Job ID specified in the URI is invalid.<br><br>**Imaging Web Service**: No image was found for the specified report Id or barcode.<br><br>**Itinerary Web Service**: The Trip ID or Booking ID specified in the URI is invalid.<br><br>**Payment Batch Web Service**: The Batch ID specified in the URI is invalid.<br><br> |
|  409 |  Conflict |  **Extract Web Service**: A job for the specified definition is already queued or running. |
|  500 |  Internal Server Error/Not Closed |  **Expense Report Web Service**: This response is returned when the system is unable to calculate an exchange rate for a posted expense report entry.<br>**Payment Batch Web Service**: The specified batch could not be closed.|
|  503 |  Service Unavailable |  This response is returned when the web service is down for maintenance. The partner application should sleep for 5 minutes then retry the request. If the request continues to fail after a few retries, the developer should contact concurconnecttech@concur.com. |



[1]: mailto:concurconnecttech@concur.com
[2]: https://www.w3.org/Protocols/rfc2616/rfc2616-sec10.html
