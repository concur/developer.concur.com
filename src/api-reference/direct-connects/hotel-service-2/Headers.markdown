---
title: Direct Connect - Hotel v2 - Headers
layout: reference
---

SAP Concur will send the user-name and password in both the HTTP header and the SOAP header. If the username and password generates an authentication error, then SAP Concur expects an HTTP 403 response.

* [HTTP Headers](#http)
  * [Troubleshooting](#troubleshooting)
* [Soap Header](#soap)
* [OTA Message Headers](#ota-message)
  * [Request Message Headers](#request-message)
  * [Response Message Headers](#response-message)

# <a name="http"></a>HTTP Headers

SAP Concur will send the following HTTP headers in every request.  The contents of the Authentication header will be repeated in the SOAP payload. Please note that some libraries used to handle the requests may be case sensitive.

|Name|Type|Description|
|----------------|-----------|-------------|
|`Authorization`|`string`|A Base64 encoded string in the form of `Basic <username:password>`.|
|`SOAPAction`|`string`|The message type. The action will always be sent in lowercase. Example: `search`|
|`Content-Type`|`string`|All communication with the HS2 API is by way of a `application/xml` content type.|
|`Accept`|`string`|SAP Concur will always set the `Accept` header to `application/xml`.|
|`Accept-Charset`|`string`|SAP Concur will always set the `Accept-Charset` header to `utf-8`.|
|`concur-correlationid`|`string`|This unique code can be used during troubleshooting as it identifies the API call in the log files.|
|`concur-traveleruuid`|`string`|UUID that identifies the traveler within concur. Only sent when available.|
|`concur-loginid`|`string`|Login ID of traveler within concur. Only sent when available.|

Supported Soapactions:

| Soapaction   | Functionality |
|--------------|---------------|
|`search`| Used to perform Search  |
|`availability`|Used to perform Availability |
|`detail`|Used to perform Hotel Description |
|`book`|Used to perform Reservation |
|`read`|Used to perform Read Itinerary |
|`cancel`|Used to perform Cancel |

## <a name="troubleshooting"></a>Troubleshooting

In order to assist with troubleshooting, SAP Concur provides a unique correlationId in the request header. The key to look for is `correlationid`. This unique code can be used during troubleshooting as it identifies the API call in the log files. You should record this information in your own API call logs as well so that you can pass this information on to the SAP Concur support team.

Example HTTP Header from network capture:

```http
Accept: application/xml
Accept-Charset: utf-8
Authorization: *******************
concur-correlationid: A75CE5BC-90BA-4BF8-8DEA-69FA2E66E936
concur-loginid: abc@concur.com
concur-traveleruuid: <valid uuid>
Content-Type: application/xml; charset="utf-8"
SOAPAction: search
Accept-Encoding: gzip
```

# <a name="soap"></a>Soap Header

The Soap header nested in the Envelope will contain an authentication element.

**authentication**

|Name|Type|Description|
|----------|-----------|-------------|
|`userid`|`string`|**Required** Contains the authentication details. |
|`password`|`string`| **Required** Contains the authentication details. |

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

|Name|Type|Description|
|-----------------|--------------------|-------------|
|`EchoToken`|`stringLength1to128`|**Required** A reference for additional message identification, assigned by the requesting host system.|
|`Version`|`double`|**Required** The OpenTravel message version indicated by a decimal value.|
|`PrimaryLangID`|`string`|**Required** The primary language preference for the message encoded as ISO 639-1.|
|`AltLangID`|`string`|**Required** The alternate language for a customer or message encoded as ISO 639-1.|
|`POS`|`complex`|**Required** Point of Sale (POS) identifies the party or connection channel making the request.|

**POS**

|Name|Type|Description|
|---------|-----------|-------------|
|`Sources`|`complex`|**Required** This holds the details about the requestor.  Max Occurrence: 10|

**Source**

SAP Concur will always send the ISO Currency.

|Name|Type|Description|
|---------------|--------------|-------------|
|`ISOCurrency`|`alphaLength3`|**Required** Currency code.|
|`RequestorID`|`complex`|An identifier of the entity making the request Examples: ATA/IATA/ID number, Electronic Reservation Service Provider (ERSP), Association of British Travel Agents (ABTA)|

**RequestorID**

|Name|Type|Description|
|---------|-------------------|-------------|
|`Type`|`stringLength1to32`|**Required** Supported value: `1`|
|`ID`|`stringLength1to32`|**Required** The requestor ID.|

---

## <a name="response-message"></a>Response Message Headers

The supplier is required to respond with the following attributes and elements in the root of any message. Each message may specify extra attributes and elements. Refer to a specific messages' page for details.

|Name|Type|Description|
|-----------------|--------------------|-------------|
|`EchoToken`|`stringLength1to128`|**Required** A reference for additional message identification, assigned by the requesting host system. When a request message includes an echo token the corresponding response message MUST include an echo token with an identical value.|
|`Timestamp`|`datetime`|**Required** Timestamp of the response operation.|
|`Version`|`double`|**Required** The OpenTravel message version indicated by a decimal value.|
|`PrimaryLangID`|`string`|**Required** The primary language preference for the message encoded as ISO 639-1.|
|`AltLangID`|`string`|**Required** The alternate language for a customer or message encoded as ISO 639-1.|
|`Success / Error`|`complex`|**Required** Indicates Success Or Error.  Refer to the [Error Handling](/api-reference/direct-connects/hotel-service-2/Error-handling.html) page for more details.|
