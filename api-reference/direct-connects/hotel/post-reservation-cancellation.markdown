---
title: Post a reservation cancellation 
layout: reference
---


## Description

This request is sent when the Travel user cancels their reservation. The response includes the reservation cancellation code.

##  Request

### Encoding
UTF-8

### URI

The Hotel direct connect sends the relevant information to a URI that the travel supplier maintains. The standard location is:

`https://{servername}/concur/hotel/v1/`

The URI is configured by the supplier when registering the partner application. Refer to **Core Concepts > [Partner Applications](/docs/overviews/partner-applications.html)** for more information. 

### Request headers

#### Accept header
application/xml

#### Authorization header

Authorization header with Basic credentials. Required.

### Request body

The request will contain a **OTA_CancelRQ** parent element, containing the following attributes:

* CancelType: The value should be "Cancel"
* xmlns
* EchoToken
* TimeStamp
* PrimaryLangID
* xmlns:xsi
* xsi:schemaLocation
* Version

The **OTA_CancelRQ** parent element contains the following child elements:

|  Element |  Description |
|----------|---------------------------------------|
|  POS |  The point of sale information. Contains a **Source** child element that specifies the source of the request. For information about **Source** element, see the **Source elements** table below. |
|  UniqueID |  This element has the following attributes:<br/>**ID**: The reservation identification number.<br/>**Type**: The type of reservation. |

#### Source elements

The **Source** element specifies the source of the request. It has the following attributes:

* ISOCountry: The country code for the Travel user's home country.
* ISOCurrency: The 3-letter ISO 4217 currency code for the Travel user's currency.

The **Source** element contains the following element:

|  Element |  Description |
|----------|---------------------------------------|
|  RequestorID | The corporate identifier. If necessary, multiple **RequestorID** elements can be sent. This element has the following attributes:<br/>**Type**: The type code for the corporate identifier. Should be one of the supported [ID Type Codes][3]. <br/>**ID**: The corporate identifier. <br/>**ID_Context**: The corporate identifier context. |

####  XML Example Request

```xml
    POST /concur/hotel/v1 HTTPS/1.1
    Host: example.com
    Authorization: Basic ...
    Content-Type: application/xml
    Content-Length: {length of content body}

    <?xml version="1.0" encoding="utf-8" ?>
    <OTA_CancelRQ CancelType="Cancel" xmlns="http://www.opentravel.org/OTA/2003/05" EchoToken="ABC123" TimeStamp="2012-01-01T19:00:00" PrimaryLangID="en-us" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="http://www.opentravel.org/OTA/2003/05 ../Schemas/OTA_CancelRQ.xsd" Version="1">
        <POS>
            <Source ISOCountry="US" ISOCurrency="USD">
                <RequestorID Type="18" ID="7777777" />
            </Source>
        </POS>
        <UniqueID ID="888000888" Type="14" />
    </OTA_CancelRQ>
```

##  Response

The supplier responds to the request by returning the details of the completed booking.

### Content Types
application/xml

### Response body

The response includes an **OTA_CancelRS** parent element with the following attributes:

* Status: The value should be "Cancelled"
* xmlns
* EchoToken
* TimeStamp
* xmlns:xsi
* xsi:schemaLocation
* Version

The **OTA_CancelRS** parent element contains a **Success** element if the request was successful. It also contains the following child elements:

|  Element |  Description |
|----------|---------------------------------------|
|  UniqueID |  This parent element has the following attributes:<br/>**ID**: The ID of the cancelled reservation.<br/>**Type**: Any number can be supplied in this attribute. |
|  CancelInfoRS |  This element has a **UniqueID** child element with the following attributes:<br/>**ID**: The hotel cancellation number.<br/>**Type**: Value for cancellation number should be 15, confirmation number 14.|  

###  XML Example Request

```xml
    200 OK HTTPS/1.1
    Content-Length: {length of content body}

    <?xml version="1.0" encoding="utf-8" ?>
    <OTA_CancelRS Status="Cancelled" xmlns="http://www.opentravel.org/OTA/2003/05" EchoToken="ABC123" TimeStamp="2012-01-01T19:00:00" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="http://www.opentravel.org/OTA/2003/05 ../Schemas/OTA_CancelRS.xsd" Version="1">
        <Success />
        <UniqueID ID="888000888" Type="14" />
        <CancelInfoRS>
            <UniqueID ID="1010010000" Type="14" />
        </CancelInfoRS>
    </OTA_CancelRS>
```
  


[1]: https://developer.concur.com/overview/partner-applications
[2]: https://developer.concur.com/node/434#security
[3]: https://developer.concur.com/node/434#idtypes
