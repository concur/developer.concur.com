---
title: Direct Connect - Hotel v2 - Headers
layout: reference
---

{% include prerelease.html %}

SAP Concur will send the user-name and password in both the HTTP header and the SOAP header.  IF the user-name and password generates an authentication error, then SAP Concur expects an HTTP 403 response.

* [HTTP Headers](#http)
* [Soap Header](#soap)
* [OTA Message Headers](#ota-message)
  * [Request Message Headers](#request-message)
  * [Response Message Headers](#response-message)

# <a name="http"></a>HTTP Headers

SAP Concur will send the following HTTP headers in every request.  The contents of the Authentication header will be repeated in the SOAP pay-load. Please note that some libraries used to handle the requests may be case sensitive.

| Header name    | Data Type | Description |
|----------------|-----------|-------------|
| Authorization  | String    | A Base64 encoded string in the form of 'Basic <username:password>' |
| Soapaction     | String    | The message type e.g search.  The action will always be sent in lower-case |
| Content-Type   | String    | All communication with the HS2 API is by way of a "application/xml" content type |
| Accept         | String    | SAP Concur will always set the Accept header to "application/xml". |
| Accept-Charset | String    | SAP Concur will always set the Accept-Charset header to "utf-8". |

Supported Soapactions:

| Soapaction   | Functionality |
|--------------|---------------|
| search       | Used to perform Search  |
| availability | Used to perform Availability |
| detail       | Used to perform Hotel Description |
| book         | Used to perform Reservation |
| read         | Used to perform Read Itinerary |
| cancel       | Used to perform Cancel |

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
	},
  (string) (len=6) "Accept": ([]string) (len=1 cap=1) {
  (string) (len=15) "application/xml"
	},
  (string) (len=14) "Accept-Charset": ([]string) (len=1 cap=1) {
  (string) (len=5) "utf-8"
	}
}
```

# <a name="soap"></a>Soap Header

The Soap header nested in the Envelope will contain an authentication element.

**authentication**

| Element  | Required | Data Type | Description |
|----------|----------|-----------|-------------|
| userid   | Y        | String    | Contains the authentication details |
| password | Y        | String    | Contains the authentication details |

Sample:

```xml
    <Header xmlns="http://schemas.xmlsoap.org/soap/envelope/">
        <authentication xmlns="http://www.concur.com/webservice/auth">
            <userid>testLogin123</userid>
            <password>xxxxxxxxxxxx</password>
        </authentication>
    </Header>
```
Login and password are provided by the Hotel supplier for SAP Concur as API consumer, not per customer.


# <a name="ota-message"></a>OTA Message Headers

Every message must contain the following required attributes and elements.  On top of these each message may specify extra attributes and elements. Refer to a specific messages' page for details.

## <a name="request-message"></a>Request Message Headers

| Element         | Required | Data Type          | Description |
|-----------------|----------|--------------------|-------------|
| *EchoToken*     | Y        | StringLength1to128 | A reference for additional message identification, assigned by the requesting host system. |
| *Timestamp*     | Y        | DateTimeType       | Timestmap of XYZ operation - **To be confirmed what this actually means** |
| *Version*       | Y        | Double            | The OpenTravel message version indicated by a decimal value. |
| *PrimaryLangID* | Y        | String             | The primary language preference for the message encoded as ISO 639-1 |
| *AltLangID*     | Y        | String             | The alternate language for a customer or message encoded as ISO 639-1. |
| POS             | Y        | Complex            | Point of Sale (POS) identifies the party or connection channel making the request. |


**POS**

| Element | Required | Data Type | Description |
|---------|----------|-----------|-------------|
| Sources | Y        | Complex   | This holds the details about the requestor.  Max Occurrence 10 |


**Source**

SAP Concur will always send the ISO Currency

| Element       | Required | Data Type    | Description |
|---------------|----------|--------------|-------------|
| *ISOCurrency* | Y        | AlphaLength3 | Currency Code |
| RequestorID   | N        | Complex      | An identifier of the entity making the request (e.g. ATA/IATA/ID number, Electronic Reservation Service Provider (ERSP), Association of British Travel Agents.(ABTA)) |


**RequestorID**

| Element | Required | Data Type         | Description |
|---------|----------|-------------------|-------------|
| *Type*  | Y        | StringLength1to32 | SAP Concur will always send a Requestor ID type of 1 |
| *ID*    | Y        | StringLength1to32 | The Requestor ID |

---


## <a name="response-message"></a>Response Message Headers

The supplier is required to respond with the following attributes and elements in the root of any message.  On top of these each message may specify extra attributes and elements. Refer to a specific messages' page for details.

| Element         | Required | Data Type          | Description |
|-----------------|----------|--------------------|-------------|
| *EchoToken*     | Y        | StringLength1to128 | Implementer: A reference for additional message identification, assigned by the requesting host system. When a request message includes an echo token the corresponding response message MUST include an echo token with an identical value.  |
| *Timestamp*     | Y        | DateTimeType	      | Timestmap of the response operation. |
| *Version*       | Y        | Double             | The OpenTravel message version indicated by a decimal value. |
| *PrimaryLangID* | Y        | String             | The primary language preference for the message encoded as ISO 639-1 |
| *AltLangID*     | Y        | String             | The alternate language for a customer or message encoded as ISO 639-1. |
| Success / Error | Y        | Complex            | Indicates Success Or Error.  Refer to Errors page for more details regarding Error handling. |
