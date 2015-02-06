---
title: Hotel 
layout: operation
---




##   Request

The following request is sent when the Travel user cancels their reservation. The response includes the reservation cancellation code.

| ----- |
|  Supported Accept Types |  Encoding |
|   |  UTF-8 |
|  Request URI |   |
|  The Hotel direct connect sends the relevant information to a URI that the travel supplier maintains. The standard location is:

    https://{servername}/concur/hotel/v1/

The URI is configured by the supplier when registering the partner application. Refer to **Core Concepts >[ Partner Applications][1] **for more information. |
|  Request Headers - Required |  Request Headers - Optional |
|  Authorization header with Basic credentials. Refer to the [Security][2] documentation for more information. |  None |
|  Request Body |   |
|  The request will contain a **OTA_CancelRQ** parent element, containing the following attributes:
* CancelType: The value should be "Cancel"
* xmlns
* EchoToken
* TimeStamp
* PrimaryLangID
* xmlns:xsi
* xsi:schemaLocation
* Version

The **OTA_CancelRQ **parent element contains the following child elements:

|  Element |  Description |
|  POS |  The point of sale information. This parent element contains the following child element:

|  Source |  The source of the request. This element has the following attributes:  |

The **Source** element has the following child element:

| ----- |
|  RequestorID |  The corporate identifier. If necessary, multiple RequestorID elements can be sent. This element has the following attributes:

* **Type**: The type code for the corporate identifier. Should be one of the supported [ID Type Codes][3].
* **ID**: The corporate identifier.
* **ID_Context**: The corporate identifier context.
 |

 |
|  UniqueID |  This element has the following attributes:

* **ID**: The reservation identification number.
* **Type**: The type of reservation.
 |

 |

####  XML Example Request

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

##  Response

The supplier responds to the request by returning the details of the completed booking.

| ----- |

| Supported Content Types                                                               |
| ------------------------------------------------------------------------------------- |
| Content Body                                                                          |
| The response includes an **OTA_CancelRS** parent element with the following attributes:
* Status: The value should be "Cancelled"
* xmlns
* EchoToken
* TimeStamp
* xmlns:xsi
* xsi:schemaLocation
* Version
The **OTA_CancelRS **parent element contains a **Success** element if the request was successful. It also contains the following child elements:

|  UniqueID |  This parent element has the following attributes:

* **ID**: The ID of the cancelled reservation.
* **Type**: Any number can be supplied in this attribute.
 |
|  CancelInfoRS |  This element has a **UniqueID** child element with the following attributes:
* **ID**: The hotel cancellation number.
* **Type**: Value for cancellation number should be 15, confirmation number 14.
 |   |

 |

####  XML Example Request

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

  


[1]: https://developer.concur.com/overview/partner-applications
[2]: https://developer.concur.com/node/434#security
[3]: https://developer.concur.com/node/434#idtypes
