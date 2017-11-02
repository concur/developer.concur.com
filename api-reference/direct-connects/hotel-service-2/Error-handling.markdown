---
title: Error Handling
layout: reference
---

## Errors

Concur is able to handle HTTP errors, but the preference is for the supplier to return an OTA error whenever possible.  Concur only ever expects one OTA error per message.  Any extra errors will be ignored. 
Currently OTA Warnings are not supported and will be ignored. 

If the error is specifically related to application level errors, please do not respond with any other error types (HTTP etc.). If you have server level issues, then it is OK to respond with HTTP standard error codes.

Errors should always be returned in a response. For example:

```xml
<soap:Envelope xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/">
	<SOAP-ENV:Header xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/" />
	<soap:Body>
		<OTA_HotelSearchRS xmlns="http://www.opentravel.org/OTA/2003/05"
			xmlns:ns2="http://www.concur.com/webservice/auth" AltLangID="en"
			EchoToken="11111111-2222-3333-4444-555555555555" PrimaryLangID="en"
			Version="4">
			<Errors>
				<Error Code="322" ShortText="No availability" Type="13"</Error>
			</Errors>
		</OTA_HotelSearchRS>
	</soap:Body>
</soap:Envelope>
```

If an error is present in any message, then the content of that message is disguarded and only the error element is processed. Any text from the supplier will be logged and a Concur message will be displayed to the user.  Currently Concur does not support displaying of supplier genereted errors directly in the UI.  Concur only uses the very first Error that is returned, therefore any excess Error elements are dropped.  Any Errors without a Type attribute will automatically be treated as '1' meaning Unknown.  See the Error Types table below. 

|  Element |	Required | Data Type 	|  Description |
|----------|-----------|---------------------------|-|
| Errors | N | Complex |  Element used to hold Error elements.  Concur only ever expects one Error element. An empty Errors element will be treated as an Unknown error. |

**Errors**

|  Element |	Required | Data Type 	|  Description |
|----------|-----------|---------------------------|-|
| Error | Y | Complex | Element to describe a particual error. Extra text can be placed inside this element, however Concur expects the error message to be sent in the ShortText attribute. |


**Error**

|  Element |	Required | Data Type 	|  Description |
|----------|-----------|---------------------------|-|
| *Type* | N | String | An Error Type Code. See the Error Types below. |
| *ShortText* | Y | String | A description of the error.  The content of this attribute will be logged, but never displayed to the user. |
| *Code* | Y | String | An Error Code for a specific error. |


Concur supports the following Error Type Codes in any of the responses:

### Error Types

| Code | Name | Description |
|----------|----------------|-----------------------|
| 1	| Unknown	|	Indicates an unknown error. |
| 2	| No implementation	| Indicates that the target business system has no implementation for the intended request. | 
| 13 | Application error | Indicates that an involved backend application returned an error which is passed back in the response message. |

**Note:** The OTA Error-Type code of 4 - Authentication (Indicates the message lacks adequate security credentials.) is not expcted by Concur.  For all authentication errors Concur expects an HTTP 403.

Concur expects the following Errors under the given Error Types:

### Unknown	(Error Type Code "1")								Indicates an unknown error.
| Error Code | Description | Example |
|----------|----------------|-----------------------|
| 188 |	Transaction error | For errors not specified in other codes. Internal supplier log ID can be provided in ShortText for debugging.|

### No implementation (Error Type Code "2")
| Error Code | Description | Example |
|----------|----------------|-----------------------|
| 1 |	Not implemented | The supplier can respond with this error if the end point called is not yet implemented. |

### Application error (Error Type Code "13")
| Error Code | Description | Example |
|----------|----------------|-----------------------|
| 242 | Credit card number is invalid or missing | |
| 320 | Invalid value | Comma separated node or attribute and sent value should be provided in ShortText. Example: "StayDateRange:2019-11-33" |
| 322 | No availability | Hotel Codes should be provided in ShortText. Example: "HTL4444,HTL5555"|  
| 424 |	No hotels found which match this input | Search parameters - geocode and radius should be provided in ShortText as tokenized list: Latitude,Longitude,Radius, Unit of Meauser code. Example: "50.111,40.222,5,2" |
| 95 | Booking already cancelled | 
| 438 |	Requested rate not available | List of comma separated RatePlanID's should be provided in ShortText. Example: "111,222"  |
| 748 | Invalid corporate ID | Requestor ID should be provided in ShortText. |
| 400 | Invalid property code | List of comma separated Hotel Codes should be provided in ShortText. Example: "HTL4444,HTL5555" |
| 385 |	Invalid confirmation or cancellation number | Reservation ID should be provided in ShortText. |






