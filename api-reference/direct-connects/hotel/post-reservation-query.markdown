---
title: Post a reservation query
layout: reference
---

## Description

This request is sent when the Travel user requests the reservation details for the supplied reservation ID. The response includes the reservation details, and is identical to the [Post New Reservation][1] response.

##  Request

### Encoding
UTF-8

### URI

The Hotel direct connect sends the relevant information to a URI that the travel supplier maintains. The standard location is:

`https://{servername}/concur/hotel/v1/`

The URI is configured by the supplier when registering the partner application. Refer to **Core Concepts** > [Partner Applications](/docs/overviews/partner-applications.html) for more information.

### Headers

#### Accept header
application/xml

#### Authorization header
Authorization header with Basic credentials. Required. Refer to the [Security](/api-reference/direct-connects/hotel.html) documentation for more information. 

### Request body

The request will contain a **OTA_ReadRQ** parent element, containing the following attributes:

* xmlns
* EchoToken
* TimeStamp
* PrimaryLangID
* xmlns:xsi
* xsi:schemaLocation
* Version

The **OTA_ReadRQ** parent element contains the following child elements:

|  Element |  Description |
|----------|--------------------|
|  POS |  The point of sale information. Contains a **Source** child element that specifies the source of the request. For information about **Source** element, see the **Source elements** table below. |
|  ReadRequests |  This element has a **ReadRequest** child element. For information about the **ReadRequest** element, see the **ReadRequest elements** table below. |

#### Source elements

The **Source** element has the following attributes:

* ISOCountry: The country code for the Travel user's home country.
* ISOCurrency: The 3-letter ISO 4217 currency code for the Travel user's currency.

The **Source** element contains the following element:

|  Element |  Description |
|----------|---------------------------------------|
|  RequestorID | The corporate identifier. If necessary, multiple **RequestorID** elements can be sent. This element has the following attributes:<br/>**Type**: The type code for the corporate identifier. Should be one of the supported [ID Type Codes](/api-reference/direct-connects/hotel.html). <br/>**ID**: The corporate identifier. <br/>**ID_Context**: The corporate identifier context.|

#### ReadRequest elements

|  Element |  Description |
|----------|---------------------------------------|
|  UniqueID |  This element has the following attributes:<br/>**ID**: The reservation identification number.<br/>**Type**: The type of reservation. |
|  Verification |  This parent element contains information that can be used to verify the owner of the reservation. For information about the **Verification** element, see the **Verification elements** table below. |

#### Verification elements

|  Element |  Description |
|----------|---------------------------------------|
|  PersonName |  This parent element contains the **GivenName** and **SurName** child elements, which should match the reservation details. |
|  TelephoneInfo |  This element has the **PhoneNumber** attribute, which contains the guest telephone number. The number should match the reservation. | 

###  XML Example Request

```xml
    POST /concur/hotel/v1 HTTPS/1.1
    Host: example.com
    Authorization: Basic ...
    Content-Type: application/xml
    Content-Length: {length of content body}

    <?xml version="1.0" encoding="utf-8" ?>
    <OTA_ReadRQ xmlns="http://www.opentravel.org/OTA/2003/05" EchoToken="ABC123" TimeStamp="2012-01-01T19:00:00" PrimaryLangID="en-us" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="http://www.opentravel.org/OTA/2003/05 ../Schemas/OTA_ReadRQ.xsd" Version="1">
        <POS>
            <Source ISOCountry="US" ISOCurrency="USD">
                <RequestorID Type="18" ID="7777777" />
            </Source>
        </POS>
        <ReadRequests>
            <ReadRequest>
                <UniqueID ID="888000888" Type="14" />
                <Verification>
                    <PersonName>
                        <GivenName>CHRIS</GivenName>
                        <Surname>MILLER</Surname>
                    </PersonName>
                    <TelephoneInfo PhoneNumber="212-555-1212" />
                </Verification>
            </ReadRequest>
        </ReadRequests>
    </OTA_ReadRQ>
```

##  Response

The supplier responds to the request by returning the details of the completed booking.

### Content Types
application/xml

### Response body

The response is identical to the response for [Post New Reservation](/api-reference/direct-connects/hotel/post-new-reservation.html). 

  

