---
title: Authentication and Errors
layout: reference
---

**rename page to Error handling**


Errors



Concur is able to handle HTTP errors, but the preference is for the supplier to return an OTA error whenever possible.  Concur only ever expects one OTA error per message.  Any extra errors will be ignored. 
Currently OTA Warnings are not supported and will be ignored. 

If the error is specifically related to application level errors, please do not respond any other error types (HTTP etc.). If you have server level issues, then it is OK to respond with HTTP standard error codes.

Errors should always be returned in a response. For example:

```xml
<soap:Envelope xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/">
	<SOAP-ENV:Header xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/" />
	<soap:Body>
		<OTA_HotelSearchRS xmlns="http://www.opentravel.org/OTA/2003/05"
			xmlns:ns2="http://www.concur.com/webservice/auth" AltLangID="en"
			EchoToken="5E41B39D-8F5E-49B3-9002-7666C98ECD7C" PrimaryLangID="en"
			Version="4">
			<Errors>
				<Error Code="322" ShortText="No availability" Type="13">Unexpected
					exception occurred</Error>
			</Errors>
		</OTA_HotelSearchRS>
	</soap:Body>
</soap:Envelope>
```

If an error is present in any message, then the content of that message is disguarded and only the error element is processed. 

**How many errors do we actual handle now?**

Concur expects the following Error Codes in any of the responses: Any codes outside of this specified list will be treated as **some generic code**, which is not guranteed to be monitored. 


Concur will process error codes automatically to create error messages for users.
ShortText information should be used to provide more details for debugging purposes.

Error codes recommended for specific errors

|  OTA Code |	Description | Note |
|----------|----------------|-----------------------|
| 188 |	Transaction error - please report | For errors not specified in other codes. Internal supplier log ID can be provided in ShortText for debugging.|
| 240 |	Credit card has expired | |
| 241 |	Expiration date is invalid | |
| 242 | Credit card number is invalid or missing | |
| 310 |	Required data missing:last name | |
| 311 |	Required data missing:first name | |
| 314 |	Required data missing:country of residence | |
| 315 |	Required data missing:confirmation number | |
| 316 |	Required data missing:phone number | |
| 320 | Invalid value | Comma separated node or attribute and sent value should be provided in ShortText. Example: "StayDateRange:2019-11-33" |  
| 321 | Required field missing | Comma separated node or attribute  should be provided in ShortText. Example: "HotelCode, StayDateRange" |  
| 322 | No availability | Hotel Codes should be provided in ShortText. Example: "HTL4444,HTL5555"|  
| 351 |	Credit card guarantee not accepted at hotel |  CardType should be provided in ShortText. Example: "AmericanExpress" |
| 365 |	Error credit card | For other than specified credit card errors, no information should be sent in ShortText. |
| 385 |	Invalid confirmation or cancellation number | Reservation ID should be provided in ShortText. |
| 420 |	Need e-mail address | |
| 424 |	No hotels found which match this input |Search parameters - geocode and radius should be provided in ShortText as tokenized list: Latitude,Longitude,Radius, Unit of Meauser code. Example: "50.111,40.222,5,2" |
| 400 | Invalid property code | List of comma separated Hotel Codes should be provided in ShortText. Example: "HTL4444,HTL5555" |
| 438 |	Requested rate not available | List of comma separated RatePlanID's should be provided in ShortText. Example: "111,222"  |
| 748 | Invalid corporate ID | Requestor ID should be provided in ShortText. |

In case of request structure not parsed by the Hotel Supplier, the Protocol violation Error should be returned, with details 

```xml
<Errors>
    <Error Type=”7” ShortText="1111"/>
</Errors>
```

Error Types:

| Error Type Code | Error Type | Description |
|----------|----------------|-----------------------|
| 1	| Unknown	|	Indicates an unknown error. |
| 2	| No implementation	| Indicates that the target business system has no implementation for the intended request. | 
| 4	| Authentication | Indicates the message lacks adequate security credentials. |
| 13 |	Application error						*			Indicates that an involved backend application returned an error or warning, which is passed back in the response message.



1	Unknown	*								Indicates an unknown error.
| 188 |	Transaction error | For errors not specified in other codes. Internal supplier log ID can be provided in ShortText for debugging.|


2	No implementation	*								Indicates that the target business system has no implementation for the intended request.


4	Authentication	*								Indicates the message lacks adequate security credentials
Any authentication errors should be returned using the HTTP 403 code.


13	Application error						*			Indicates that an involved backend application returned an error or warning, which is passed back in the response message.
| 242 | Credit card number is invalid or missing | |
| 320 | Invalid value | Comma separated node or attribute and sent value should be provided in ShortText. Example: "StayDateRange:2019-11-33" |
| 322 | No availability | Hotel Codes should be provided in ShortText. Example: "HTL4444,HTL5555"|  
| 424 |	No hotels found which match this input | Search parameters - geocode and radius should be provided in ShortText as tokenized list: Latitude,Longitude,Radius, Unit of Meauser code. Example: "50.111,40.222,5,2" |
| 95 | Booking already cancelled | 


