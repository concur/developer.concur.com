---
title: Headers 
layout: reference
---

Concur will send the username and password in both the HTTP header and the SOAP header.  The HTTP header, please refer to <Headers page>




# HTTP Headers

Concur will send the following HTTP headers in every request.  The contents of the Authentication header will be repeated in the SOAP pay-load.


| Header name | Data Type | Description |
|----------|-----------|---------------|
| Authorization | string | A Base64 encoded string in the form of 'Basic <username:password>' |
| Soapaction | string | The message type e.g search.  The action will always be sent in lowercase |
| Content-Type | string | All communication with the HS2 API is by way of a "application/xml" content type |

Supported Soapactions:

| Soapaction | Functionality |
|----------|-----------|
| search | Used in Search requests |
| availability | Used in Availability requests |
| detail | Used in Hotel Description requests | 
| book | Used in Reservation requests | 
| read | Used in Read Itinerary requests | 
| cancel | Used in Cancel requests | 

Example HTTP Header from network capture:

```bash
Header: (http.Header) (len=4) {
	(string) (len=13) "Authorization": ([]string) (len=1 cap=1) {
	(string) (len=38) "*************************
	},
	(string) (len=12) "Content-Type": ([]string) (len=1 cap=1) {
	(string) (len=32) "application/xml; charset=\"utf-8\""
	},
	(string) (len=10) "Soapaction": ([]string) (len=1 cap=1) {
	(string) (len=6) "search"
	}
}
```

# Soap Header

The Soap header nested in the Envelope will contain an authentication element.

**authentication**

|  Element |	Required | Data Type 	|  Description |
|----------|-----------|---------------------------|-|
| userid | Y | String	| Contains the authentication details |
| password | Y | String	| Contains the authentication details |

Sample:

```xml
    <Header xmlns="http://schemas.xmlsoap.org/soap/envelope/">
        <authentication xmlns="http://www.concur.com/webservice/auth">
            <userid>testLogin123</userid>
            <password>xxxxxxxxxxxx</password>
        </authentication>
    </Header>
```
Login and password are provided by the Hotel supplier for Concur as API consumer, not per customer.


# OTA Message Headers

Every message must contain the following requiered attributes and elements.  On top of these each message may specify extra attributes and elements. Refer to a specific messages' page for details.

## Request Message Headers

Concur will always include the following attributes and the POS element in each and every message sent to a supplier.

I'm not sure if we need to add these:

xmlns="http://www.opentravel.org/OTA/2003/05"
xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"  
xsi:schemaLocation="http://www.opentravel.org/OTA/2003/05 ../Schemas/OTA_HotelAvailRQ.xsd"


xmlns probably yes.  the rest?


|  Element |	Required | Data Type 	|  Description |
|----------|-----------|---------------------------|-|
| *EchoToken* | Y | StringLength1to128	| A reference for additional message identification, assigned by the requesting host system. |
| *Timestamp* | Y | DateTimeType	| Timestmap of XYZ operation - *To be confiremd what this actually means* |
| *Version* | Y | Double	| The OpenTravel message version indicated by a decimal value. |
| *PrimaryLangID* | Y | String	| The primary language preference for the message encoded as ISO 639-1 |
| *AltLangID* | Y | String	| The alternate language for a customer or message encoded as ISO 639-1. |
| POS | Y | ComplexType	| Point of Sale (POS) identifies the party or connection channel making the request. |


**POS**

|  Element |	Required | Data Type 	|  Description |
|----------|-----------|---------------------------|-|
| Sources | Y | ComplexType	| This holds the details about the requestor.  Max Occurance 10 |


**Source**

Concur will always send the ISOCountry and ISO Currency

|  Element |	Required | Data Type 	|  Description |
|----------|-----------|---------------------------|-|
| *ISOCountry* | Y | ISO3166	| Country code |
| *ISOCurrency* | Y | AlphaLength3	| Currency Code |
| RequestorID | N | ComplexType	| An identifier of the entity making the request (e.g. ATA/IATA/ID number, Electronic Reservation Service Provider (ERSP), Association of British Travel Agents.(ABTA)) |


**RequestorID**

|  Element |	Required | Data Type 	|  Description |
|----------|-----------|---------------------------|-|
| *Type* | Y | StringLength1to32	| Concur will always send a Requestor ID type of 1 |
| *ID* | Y | StringLength1to32	| The Requestor ID |

---


## Response Message Headers

The supplier is requiered to respond with the following attributes and elements in the root of any message.  On top of these each message may specify extra attributes and elements. Refer to a specific messages' page for details.

|  Element |	Required | Data Type 	|  Description |
|----------|-----------|---------------------------|-|
| *EchoToken* | Y | StringLength1to128	| Implementer: A reference for additional message identification, assigned by the requesting host system. When a request message includes an echo token the corresponding response message MUST include an echo token with an identical value.  |
| *Timestamp* | Y | DateTimeType	| Timestmap of XYZ operation - *To be confiremd what this actually means - do we want the supplier to add a timestamp prior to sending the response to us? * |
| *Version* | Y | Double	| The OpenTravel message version indicated by a decimal value. |
| *PrimaryLangID* | Y | String	| The primary language preference for the message encoded as ISO 639-1 |
| *AltLangID* | Y | String	| The alternate language for a customer or message encoded as ISO 639-1. |
| Success / Error | Y | ComplexType | Indicates Success Or Error.  Refer to Errors page for more details regarding Error handling. |
