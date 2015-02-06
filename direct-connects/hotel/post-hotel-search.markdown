---
title: Hotel 
layout: operation
---




##   Request

The following request is sent when the Travel user searches for hotels. The response includes the list of matching hotels for the given coordinates and radius. Hotel suppliers should return properties only in this area.

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
|  The request will contain a **OTA_HotelSearchRQ** parent element, containing the following attributes:
* xmlns
* EchoToken
* TimeStamp
* PrimaryLangID
* xmlns:xsi
* xsi:schemaLocation
* Version
The **OTA_HotelSearchRQ **parent element contains the following child elements:

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
|  Criteria |  The search criteria provided by the customer. This parent element contains a **Criterion** child element. The **Criterion** element contains the following child elements:

|  Position |  The hotel search center position. Position is sent all the time and is in LatLon format (degrees as float numbers). It should be used as position source for actual search. This element has two attributes:

* **Latitude**: The latitude at the center of the hotel search.
* **Longitude**: The longitude at the center of the hotel search.
 |
|  Address |  The address information for the hotel search. Optional. This element has the following child elements:

 

|  CityName |  The name of the city the user is searching in. |
|  CountryName |  This element has the **Code** attribute, containing the two character country code for the country the user is searching in. |   | |

 |
|  RefPoint |  The reference point for the search. Optional. This element has the **Name** attribute, containing the location city, state and country. Example: Redmond, WA, USA |
|  HotelRef |  The hotel information. Optional. This element can have the following attribute:

* **HotelName**: The hotel name supplied by the customer. This attribute only appears if the customer provided a name. This value should be interpreted as a "contains" style match
 |
|  Radius |  The hotel search radius from the starting position. This element has three possible attributes:

* **Distance**: The distance to search from the defined center.
* **DistanceMeasure**: The unit of measurement to use when calculating the search radius with the Distance value. Values: Miles = M, Kilometers = K. If not included, the following attribute should be used:
* **UnitOfMeasureCode**: The code for the unit of measure. Values: Miles = 2, Kilometers = 1

**NOTE**: Only return hotels within this search radius. You can use a simple box search.

 |
|  StayDateRange |  The date range to search for. Contains the **Start** and **End** attributes. Format: YYYY-MM-DD |

 |

 |

####  XML Example Request

    POST /concur/hotel/v1 HTTPS/1.1
    Host: example.com
    Authorization: Basic ...
    Content-Type: application/xml
    Content-Length: {length of content body}
    <OTA_HotelSearchRQ xmlns="http://www.opentravel.org/OTA/2003/05" EchoToken="ABC123" TimeStamp="2012-01-01T19:00:00" PrimaryLangID="en-us" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="http://www.opentravel.org/OTA/2003/05 ../Schemas/OTA_HotelSearchRQ.xsd" Version="6.000">
        <POS>
            <Source ISOCountry="US" ISOCurrency="USD">
                <RequestorID Type="4" ID="7777777" ID_Context="MyHotel" />
            </Source>
        </POS>
        <Criteria>
            <Criterion>
                <Position Latitude="45.1317" Longitude="-86.1823" />
                <Address>
                    <CityName>Empire</CityName>
                    <CountryName Code="US" />
                </Address>
                <RefPoint Name="Empire, MI, USA" />
                <HotelRef HotelName="Inn" />
                <Radius Distance="5" DistanceMeasure="M" />
                <StayDateRange Start="2012-08-15" End="2010-08-17" />
            </Criterion>
        </Criteria>
    </OTA_HotelSearchRQ>

##  Response

The supplier responds to the request by returning the list of possible search matches, with a maximum result set of 1000 results.

| ----- |

| Supported Content Types                                                                        |
| ---------------------------------------------------------------------------------------------- |
| Content Body                                                                                   |
| The response will include a **OTA_HotelSearchRS** parent element, with the following attributes:
* xmlns
* EchoToken
* TimeStamp
* xmlns:xsi
* xsi:schemaLocation
* Version
The **OTA_HotelSearchRS** parent element contains the following child elements:  

|  Element |  Required (must contain value)? |  Description |
|  Success |  N |  This element is returned if the request was successful. |   |
|  Properties |    |  This element contains a **Property** parent element for each hotel property returned. The **Property** element has the following attributes:
* **ChainCode**: Refer to the [Hotel Direct Connect Codes][4]. If ChainCode is unknown or not available, send: ZZ
* **HotelCode**: This must be unique, and will be used in future requests.
* **HotelName**: The name of the hotel.

Refer to the Property Child Elements table for information about the child elements.

 |

  

| ----- |
|  Property Child Elements |
|  Element |  Description |
|  Position |  The hotel position. This element has two attributes:

* **Latitude**: The latitude of the hotel.
* **Longitude**: The longitude of the hotel.
 |
|  Address |  The address of the hotel. Optional. Provide this element if you would like the address to display in the search results. This parent element has the following child elements:

|  StreetNmbr |  The street address of the hotel. |
|  CityName |  The city the hotel is in. |   | |
|  PostalCode |  The postal code of the hotel. |
|  CountryName |  This element has the **Code** attribute, which contains the country code of the hotel. |

 |
|  TPA_Extensions |  This parent element contains the following child elements:

|  HotelImageURI |  The link to the image associated with the hotel. A fully qualified url to the hotel image should be returned in the response. Image size must be 70 pixels wide and 72 pixels tall. Images can be no larger than 8K bytes. The image format must be gif or jpg. Images should be accessible through http and https protocols. |
|  HotelPreference |  This element includes the customer's preference level for the individual property. Refer to the [Hotel Direct Connect Codes][4] for the possible values. |   | |
|  GDS_InfoType |  This parent element has a **MasterChainCode** attribute, containing the two-letter GDS code that gives access to a number of different hotel brands owned or represented by the same chain. The **MasterChainCode** lets Concur automatically determine what advantage card numbers to send for this hotel. Refer to the [Hotel Direct Connect Codes][4]. This parent element contains a **GDS_Codes **element. This parent element contains the following child element:

|  GDS_Code |  This element has the following attributes:

* **GDS_PropertyCode**: This attribute lets Concur match against other results (to display GDS and HotelService rates as one item). The most typical one is Northstar ID. If GDS_PropertyCode is provided, GDS_Name must also be provided
* **GDS_Name**: The name of the associated GDS.
 |

 |

 |
|  StarRating |  The number of stars the hotel is rated for. Optional. Possible values: 1-5 |

 |

####  XML Example of Successful Response

    200 OK HTTPS/1.1
    Content-Length: {length of content body}

    <OTA_HotelSearchRS xmlns="http://www.opentravel.org/OTA/2003/05" EchoToken="ABC123" TimeStamp="2012-01-01T19:00:00" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="http://www.opentravel.org/OTA/2003/05 ../Schemas/OTA_HotelSearchRS.xsd" Version="6.000">
        <Success />
        <Properties>
            <Property ChainCode="ZZ" HotelCode="HTL1111" HotelName="HOTEL1">
                <Position Latitude="45.132" Longitude="-86.1823"/>
                <Address>
                    <StreetNmbr>123 Lake avenue</StreetNmbr>
                    8/33
                    <CityName>Empire</CityName>
                    <PostalCode>12345</PostalCode>
                    <CountryName Code="US"/>
                </Address>
                <TPA_Extensions>
                    <HotelImageURI>http://www.c.com/h/HTL1.gif</HotelImageURI>
                    <HotelPreference>preferred</HotelPreference>
                    <GDS_InfoType MasterChainCode="ZZ">
                        <GDS_Codes>
                            <GDS_Code GDS_PropertyCode="W1234567" GDS_Name="Worldspan"/>
                        </GDS_Codes>
                    </GDS_InfoType>
                    <StarRating>4</StarRating>
                </TPA_Extensions>
            </Property>
            <Property ChainCode="ZZ" HotelCode="HTL2222" HotelName="HOTEL2">
                <Position Latitude="45.131" Longitude="-86.1823"/>
                <Address>
                    <StreetNmbr>124 Lake avenue</StreetNmbr>
                    <CityName>Empire</CityName>
                    <PostalCode>12345</PostalCode>
                    <CountryName Code="US"/>
                </Address>
            </Property>
            <Property ChainCode="ZZ" HotelCode="HTL3333" HotelName="HOTEL3">
                <Position Latitude="45.1317" Longitude="-86.182"/>
                <Address>
                    <StreetNmbr>125 Lake avenue</StreetNmbr>
                    <CityName>Empire</CityName>
                    <PostalCode>12345</PostalCode>
                    <CountryName Code="US"/>
                </Address>
            </Property>
        </Properties>
    </OTA_HotelSearchRS>

  


[1]: https://developer.concur.com/overview/partner-applications
[2]: https://developer.concur.com/node/434#security
[3]: https://developer.concur.com/node/434#idtypes
[4]: https://developer.concur.com/sites/default/files/HotelCodes.pdf
