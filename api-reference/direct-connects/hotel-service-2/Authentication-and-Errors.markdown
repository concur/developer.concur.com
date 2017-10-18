---
title: Authentication and Errors
layout: reference
---

**rename page to Error handling**


Errors

Concur is able to handle HTTP errors, but the preference is for the supplier to return an OTA error whenever possible.  Concur only ever expects one OTA error per message.  Any extra errors will be ignored. 
Currently OTA Warnings are not supported and will be ignored. 


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

