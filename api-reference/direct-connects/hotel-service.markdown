---
title: Hotel Direct Connect
layout: reference
---

## Disclaimer
This version is a draft only. Hotel Service 2.0 API is not final and is a subject to change.

## Description
The Hotel Services v2 Direct Connect from Concur Connect provides a method for Travel users to access hotel inventory.

The Hotel Service 2.0 API from Concur is a specification based on OTA 2015 standard for Hotel Suppliers.
Please refer to XSD schema of the service and WSDL service description.
This Guide provides information how the Hotel Supplier can make their content available for Concur Travel users using Hotel Service 2.0 API. 
Once the Hotel Supplier has developed and certified their interface with Concur, their inventory will begin appearing in hotel searches by opted-in Travel users.
This API has client/server architecture, where Concur acts as client, pulling information from the Hotel Supplier, who acts as server, responding to Concur’s requests. This guide specifies the request and response format required by Concur.


This callout differs from the inbound Concur web services in the following ways:

* It uses an outbound message where Concur calls a public facing API endpoint provided by the hotel supplier.
* The supplier configures and maintains the public web service interface. This guide specifies the request and response format required by Concur.

## Works with these Concur products
* **Travel for Concur Professional/Premium desktop**
* **Travel for Concur Standard desktop**

## Product Restrictions

Hotel Service 2 API inventory is not accessible from Concur mobile.
Concur products are highly configurable, and not all clients will have access to all features.

## API Implementation Process Overview
The configuration process has the following steps:

1.  Concur shares API specification (this guide), schema and all necessary documentation with Hotel content partner.
2.	Concur and The Hotel Supplier agrees on scope and timeline of development to Concur API specification.
3.	Concur provides range of IP addresses of sandbox endpoint for the Hotel Suppliers whitelist.
4.	The Hotel Supplier creates testing endpoint on their system that Concur uses to access their inventory. The Hotel Supplier provides the URIs and credentials for their test system to Concur.
5.	Concur creates a sandbox account for the Hotel Supplier.
6.	The Hotel Supplier creates the application on their system that will accept the requests from Concur and return the appropriate responses. During development Concur provides support by clarifying  API usage and scenarios, and by testing interim milestones. 
7.	Concur and the Hotel Supplier validate the application: Concur sets up the vendor in the certification systems and runs a series of tests to validate the interaction between the two systems.
8.	Once certification passes, the Hotel supplier sends Concur the production URIs and credentials.
9.	Concur updates the production servers with the supplier’s production data.
10.	Upon successful completion, the supplier will be live in Concur for any customer to enable.
11.	The Travel client opts in to the Hotel callout (within the Travel Configuration) to allow their users to view and book the available inventory. Travel client sets ID which will identify them at Hotel suppliers for features like Corporate rates. 

## Non-Functional Requirements

### Emergency technical contact
The Hotel supplier needs to provide emergency technical contact email that will be used for communication in case of blocking technical issues.

### Testing environment
To allow Concur performing testing, the Hotel Supplier needs to provide testing URL or specify properties for testing in production URL. Concur needs to be able to perform test bookings with testing credit cards.

### Security 
#### PCI DSS compliance
As sensitive data and payment card details are transferred via API, the Hotel Suppliers need to comply with PCI DSS standard. Concur is compliant with PCI DSS standard and undergoes regular security audits.

#### HTTPS
The Hotel Supplier needs to support secure communication of TLS 1.1 or newer. The Hotel Supplier will provide Concur HTTPS URL of its endpoint.
Standard HTTPS port 443 should be used.


#### Concur IP ranges
If Hotel Supplier is using IP whitelisting policy, Concur will use following addresses to access Supplier’s systems from.

* `12.129.29.0/24` -	Production
* `12.129.29.199` -	Production
* `12.129.29.224/28` -	Production
* `12.129.29.86` -	Production
* `12.129.32.0/22` -	Production
* `12.130.250.17` -	Production
* `12.130.251.155` -	Production
* `199.108.17.100` -	Production
* `32.58.240.145` -	Production
* `62.23.83.128/25` -	Production
* `62.23.83.135` -	Production
* `63.76.22.10` -	Production
* `84.14.175.224/27` -	Production

* `193.165.112.0/28` -	QA
* `206.173.37.128/25` -	QA
* `206.173.37.150` -	QA 
* `206.175.21.0/24` -	QA
* `206.175.21.196` -	QA
* `207.41.34.0/24` -	QA
* `207.41.34.10` -	QA
* `212.24.155.86` - QA
* `63.239.255.0/24` - QA
* `84.14.115.96/29` -	QA

#### Authentication

As authentication, Concur sends userID and password in each message SOAP header: 

```xml
<Envelope xmlns="http://schemas.xmlsoap.org/soap/envelope/"> 
    <Header xmlns="http://schemas.xmlsoap.org/soap/envelope/">
        <authentication xmlns="http://www.concur.com/webservice/auth">
            <userid>testLogin123</userid>
            <password>xxxxxxxxxxxx</password>
        </authentication>
    </Header>
</Envelope>
```
Login and password are provided by the Hotel supplier for Concur as API consumer, not per customer.

### Authentication.xsd:

```xml
<?xml version="1.0" encoding="UTF-8"?>
<xsd:schema
    xmlns:xsd="http://www.w3.org/2001/XMLSchema"
    xmlns="http://www.concur.com/webservice/auth"
    targetNamespace="http://www.concur.com/webservice/auth"
    elementFormDefault="qualified"
    version="1.0"
    id="TransactionControlHeader">
    <xsd:element name="authentication">
        <xsd:complexType>
          <xsd:sequence>
              <xsd:element name="userid" type="xsd:string"/>
              <xsd:element name="password" type="xsd:string"/>
          </xsd:sequence>
        </xsd:complexType>
    </xsd:element>
</xsd:schema>
```

### URLs and headers
Concur will receive a single URL from the Hotel Supplier. All requests will go to that URL. 
Content Type is application/xml.
To define, what operation needs to be performed, HTTP headers are used, as example:
`SOAPAction:availability.`

CDATA and HTML code inside of XML nodes and attributes are not allowed. These data will be escaped.
The hotel suppliers should not use XML special characters - predefined entities: &, <, >, ", ' inside of ID elements like RatePlanID. 

Concur is using date as xs:date XML type "2017-05-01".


### Response Times
Concur needs to receive all responses within 55 seconds, otherwise it causes timeout. To prevent no show fees, duplicate bookings and other similar issues, Concur recommends to perform Auto-Cancel by the Hotel Supplier if ReadRQ message is not sent by Concur 5 minutes after HotelResRS message was sent to Concur. 

## Supported operations
Hotel Service API 2.0 supports following operations:
1.	Search RQ and RS – to get list of hotels
2.	Descriptive Info RQ and RS – to get hotel description and photos
3.	Availability RQ and RS– to get rates for selected hotels
4.	Reservation RQ and RS – to book a selected rate
5.	Read Itinerary RQ – to get information for Itinerary. Response message in HotelResRS.
6.	Cancel RQ and RS – to cancel a reservation.


### Message flow

#### Hotel search and reservation
1.	Search. Sent after user clicks on button Search.
2.  Availability. Sent after Search message if configured, or after user clicks on Get Rates button.	
3.  Descriptive Info. Sent after user click on hotel details button or hotel thumbnail picture.
4.	Reservation. Sent after user click on Reserve button.
5.	Read Itinerary. Sent automatically after Reservation message.

#### Hotel itinerary check
1. Read Itinerary. Supplier replies with Reservation response.

#### Hotel cancel
1. Read Itinerary. Supplier replies with Reservation response.
2. Cancel. After user agrees with Cancellation policy and clicks on Cancel button.


Use cases and message structure
---------

#### Company Identification

It is possible to setup specific ID – Requestor ID - to identify Company or it's organizational subunit, a
customer that is using Concur API. Requestor IDs are issued by the Hotel
supplier and are configured by TMC or entity responsible for vendor setting in
Concur Travel. That Requestor ID allows suppliers to shape Preference Level,
specific rates etc. for customers. As not all suppliers require such features,
this is optional setting in Concur Travel.

#### Languages and Country codes

Concur will send two letter PrimaryLangID and AltLangID in ISO 639-1 format in all requests to specify in which language information is requested.
If Hotel Supplier doesn't support PrimaryLangID, AltLangID should be used.
Concur [supported languages](/tools-support/reference/hotel-direct-connect-codes.html#method5)  

Concur supports Country Codes in two-letter ISO 3166-1 alpha-2 format.


### OTA operations 

### **Hotel Search**

>   **SOAPAction:**  **search**

>   **OTA name:** HotelSearch

#### Message structure

OTA_HotelSearchRQ

|  Element |	Required	| Data Type  |  Description |
|----------|------------|--------------------------|-|
|  RequestorID |	N | String1to32	| The corporate identifier|
|  Position |	Y	| ComplexType |  The Position element contains three attributes, Latitude, Longitude, used to indicate the geographic location(s) requested by the search, expressed in notation specified by ISO standard 6709.|
|  Radius |	Y	| ComplexType | Used to specify the extent of a search area. The extent is relative to an element (position, address, hotel reference, etc.) present in this ItemSearchCriterionType that specifies a location.|
|UnitOfMeasureCode| Y | Integer| The unit of measure in a code format. Refer to OpenTravel Code List Unit of Measure Code | 
|  HotelRef |	N	| String1to32 | Indicates the detail of hotel reference information.|
|  StayDateRange |	Y | ComplexType	| Range of dates, or fixed set of dates for Availability Request.Format: YYYY-MM-DD|

OTA_HotelSearchRS

|  Element |	Required | Data Type |  Description |
|----------|-----------|---------------------------|-|
|  ChainCode |	N	 | String1to8 | 2 letter GDS chain code. The code that identifies a hotel chain or management group. Used for Chain filter in UI, and for Travel Rules based on GDS codes|
|  ChainName |	N	| String1to64 | Detailed property level information.|
|  HotelName |	Y| String1to128	|  A text field used to communicate the proper name of the hotel.|
|  HotelCode |	Y	| String1to16 |  The code that uniquely identifies a single hotel property. Used in other OTA messages.|
|  Position |	Y	 | ComplexType |  The Position element contains three attributes, Latitude, Longitude, used to indicate the geographic location(s) requested by the search, expressed in notation specified by ISO standard 6709.|
|  Address |	Y	| ComplexType | Public address of the hotel property.|
|  ContactNumber |	N	| ComplexType | Contact numbers of the hotel property|
| Award |	N	| ComplexType | An element that identifies the hotel ratings. Possible values: 1-5 |
|  Amenities | N	| ComplexType| This provides an area to pass amenity information.|
|  Policy |	N	 | ComplexType| Policy information for this hotel.|
|  HotelPreference |	N | ComplexType	| Hotel preference level set by Travel Administrator.|

#### Example request

```xml
<Envelope xmlns="http://schemas.xmlsoap.org/soap/envelope/">
    <Header xmlns="http://schemas.xmlsoap.org/soap/envelope/"/>
    <Body xmlns="http://schemas.xmlsoap.org/soap/envelope/">
        <OTA_HotelSearchRQ
          xmlns="http://www.opentravel.org/OTA/2003/05"
          EchoToken="0953A951-AD9E-4B30-A0E0-E68747381627"
          Version="4"
          PrimaryLangID="EN"
          AltLangID="EN"
          MaxResponses="100">
            <POS>
                <Source>
                    <RequestorID Type="1" ID="408748011"/>
                </Source>
            </POS>
            <Criteria>
                <Criterion>
                    <Position Latitude="52.520007" Longitude="13.404954"/>
                    <Radius Distance="5" DistanceMax="30" UnitOfMeasureCode="2"/>
                    <StayDateRange Start="2017-04-30" End="2017-05-01"/>
                </Criterion>
            </Criteria>
        </OTA_HotelSearchRQ>
    </Body>
</Envelope>
```

#### Example response

```xml
<soap:Envelope xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/">
    <SOAP-ENV:Header xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/"/>
    <soap:Body>
        <OTA_HotelSearchRS
            xmlns="http://www.opentravel.org/OTA/2003/05"
            xmlns:ns2="http://www.concur.com/webservice/auth"
            AltLangID="EN"
            PrimaryLangID="EN"
            Version="4">
            <Success/>
            <Properties>
                <Property
                    ChainCode="1609"
                    ChainName="Radisson"
                    HotelCode="ra"
                    HotelName="Radisson Blu Hotel">
                    <Position Latitude="52.51955" Longitude="13.402762"/>
                    <Address>
                        <AddressLine>Karl-Liebknecht-Str. 3 </AddressLine>
                        <CityName>Berlin</CityName>
                        <CountryName Code="DE">Federal Republic of Germany</CountryName>
                    </Address>
                    <ContactNumbers>
                        <ContactNumber
                            CountryAccessCode="49"
                            PhoneNumber="30238280"
                            PhoneTechType="1"/>
                        <ContactNumber
                            CountryAccessCode="49"
                            PhoneNumber="302382810"
                            PhoneTechType="3"/>
                    </ContactNumbers>
                    <Award Rating="5"/>
                    <HotelAmenity Code="68"/>
                    <HotelAmenity Code="198"/>
                    <HotelAmenity Code="5"/>
                    <HotelAmenity Code="76"/>
                    <HotelAmenity Code="223"/>
                    <HotelAmenity Code="79"/>
                    <HotelAmenity Code="71"/>
                    <HotelAmenity Code="101"/>
                    <HotelAmenity Code="33"/>
                    <HotelAmenity Code="165"/>
                    <HotelAmenity Code="261"/>
                    <Policy CheckInTime="14:00:00" CheckOutTime="12:00:00"/>
                    <Amenities/>
                    <TPA_Extensions>
                        <HotelPreference>not_preferred</HotelPreference>
                        <TPA_HotelPreviewImageURI>
                            <URL>example.com/hotel1.jpg</URL>
                        </TPA_HotelPreviewImageURI>
                    </TPA_Extensions>
                </Property>
            </Properties>
        </OTA_HotelSearchRS>
    </soap:Body>
</soap:Envelope>
```

#### Use case scenario:

1.  User searches for hotel by location: Airport, city, exact address or company
    location. Concur will always send Geocode for location.

    `<Position Latitude="50.867000" Longitude="7.150000"></Position>`

2.  List of 100 hotels within search radius is displayed in that location, with
    hotels names, thumbnail pictures, address, star rating.

    ![media](./hotel2/HotelSearch1.png)

    Thumbnail hotel image should be 70x70 pixels to prevent image artifacts by
    scaling.

3.  User searches for specific hotel in location by entering hotel name.

    ![./media/image2.png](./hotel2/HotelSearch3.png)

    **Important Note:** please note that only Left-side filter invokes new
    request to the Hotel Supplier. Top-side filter is performing filtering of
    already displayed results.

    ![media](./hotel2/HotelSearch2.png) 

    Specific hotel is displayed. 

    Hotel Search RQ contains hotel name as:

    ```xml
    <Criterion>
        <Position Latitude="52.520007" Longitude="13.404954"></Position> 
        <HotelRef HotelName="novotel"></HotelRef>
        <Radius Distance="5" DistanceMax="30" UnitOfMeasureCode="2"></Radius>
        <StayDateRange Start="2017-04-19" End="2017-04-20"></StayDateRange>
    </Criterion>
    ```

    Hotel Supplier only returns hotels with name matching search criteria defined by user.

   
4.  User's company has some hotels set up as Preferred at the Hotel Supplier.
    User’s company has setup in Travel Config a search radius of 30 km.

    ![media](./hotel2/HotelSearch3.png)

    User searches for hotels in 5 km radius.

    SearchRQ message has two radiuses:

    ```xml
    <Radius Distance="5" DistanceMax="30" UnitOfMeasureCode="2"></Radius>
    ```

    Out of 100 returned hotels in response from Hotel Supplier, first 10 hotels
    are Most Preferred hotels from **30 km** radius. Next 10 hotels are
    Preferred hotels from **30km** radius.

    ```xml
    <HotelPreference>preferred</HotelPreference>
    ```

    Other 80 hotels are hotels with no preference from **5km** radius.
    
5.  If there are no hotels matching search criteria, error 424 "No hotels found which match this input" should be returned by the Hotel         Supplier. Please see Errors section for details.
  
### Hotel Descriptive Info

Displays a textual description of a given hotel.
Displays photos and videos of a given hotel.

>   **SOAPAction: detail**

>   **OTA name:** HotelDescriptiveInfo

#### Message structure

OTA_HotelDescriptiveInfoRQ

|  Element |	Required | Data Type 	|  Description |
|----------|-----------|---------------------------|-|
|  RequestorID | N | String1to32	| The corporate identifier|
|  HotelCode |	Y	| String1to16 | The code that uniquely identifies a single hotel property. Used in other OTA messages.|

OTA_HotelDescriptiveInfoRS

|  Element |	Required	| Data Type	| Description |
|----------|------------|--------------------------|-|
|  HotelCode |	Y	| String1to16 |  The code that uniquely identifies a single hotel property. Used in other OTA messages.|
|  DescriptiveText |	N | String	|  Descriptive text that describes the hotel.|
|  ImageItems |	N	| URI | URL's hotel images.|


#### Example request

```xml
<Envelope xmlns="http://schemas.xmlsoap.org/soap/envelope/">
    <Header xmlns="http://schemas.xmlsoap.org/soap/envelope/"></Header>
    <Body xmlns="http://schemas.xmlsoap.org/soap/envelope/">
        <OTA_HotelDescriptiveInfoRQ
            xmlns="http://www.opentravel.org/OTA/2003/05"
            EchoToken="30708715-C77F-43A1-8B17-242568D4708C"
            Version="3">
            <HotelDescriptiveInfos>
                <HotelDescriptiveInfo ChainCode="XX" HotelCode="464844"></HotelDescriptiveInfo>
            </HotelDescriptiveInfos>
        </OTA_HotelDescriptiveInfoRQ>
    </Body>
</Envelope>
```
 
#### Example response

```xml
<OTA_HotelDescriptiveInfoRS
    xmlns="http://www.opentravel.org/OTA/2003/05"
    xmlns:ns2="http://www.concur.com/webservice/auth">
    <Success/>
    <HotelDescriptiveContents>
        <HotelDescriptiveContent ChainCode="XX" HotelCode="464844" HotelName="H2 Alexanderplatz">
            <HotelInfo>
                <Descriptions>
                    <DescriptiveText>The H2 Hotel Berlin Alexanderplatz offers design, functionality and comfort. The H2 Hotel Berlin Alexanderplatz boasts a clear price structure and a design-oriented and modern ambience.</DescriptiveText>
                </Descriptions>
            </HotelInfo>
            <MultimediaDescriptions>
                <MultimediaDescription>
                    <ImageItems>
                        <ImageItem>
                            <ImageFormat>
                                <URL>https://iut-foto-origin.hrsstatic.com/foto/4/6/4/8/464844/464844_a_2448684.jpg</URL>
                            </ImageFormat>
                        </ImageItem>
                    </ImageItems>
                </MultimediaDescription>
            </MultimediaDescriptions>
        </HotelDescriptiveContent>
    </HotelDescriptiveContents>
</OTA_HotelDescriptiveInfoRS>
```

#### Use case scenario:

1.  User searches for hotels.

    OTA\_DescriptiveInfoRQ.xml, OTA\_ DescriptiveInfoRS.xml

    On any hotel, user clicks "Hotel Details" button. A pop-up with textual hotel description is shown.

    ![media](./hotel2/OTA_DescriptiveInfo1.png)
   
2.  User clicks on hotel photo thumbnail. Gallery of hotel photos is displayed.

    ![media](./hotel2/OTA_DescriptiveInfo2.png)

### Hotel Availability

Displays detailed information about rooms available in a given hotel.

>   **SOAPAction: availability**

>   **OTA name:** HotelAvail

#### Message structure

OTA_HotelAvailRQ

|  Element |	Required	| Data Type | Description |
|----------|------------|--------------------------|-|
|  RequestorID |	N	| String1to32 | The corporate identifier|
|  ISOCurrency |	Y	| AlphaLength3 |  The currency code in which the reservation will be ticketed in ISO 4217-3 encoding.|
|  HotelCode |	Y	| String1to16 | The code that uniquely identifies a single hotel property from HotelSearchRS.|
|  StayDateRange |	Y	| ComplexType | Range of dates, or fixed set of dates for Availability Request.|
|  GuestNumber |	Y	| Integer | Number of guests for the inquiry. Concur only supports 1 guest operations.|

OTA_HotelAvailRS

|  Element |	Required	| Data Type | Description |
|----------|------------|--------------------------|-|
|  HotelCode |	Y	| String1to16 |  The code that uniquely identifies a single hotel property from HotelSearchRS.|
|  RatePlan |	Y	| ComplexType |  Other than amount-specific information about rate, like accepted guarantee, cancellation policy etc.|
|  AvailabilityStatus |	Y | ComplexType | Available or sold out indicator. |
|  GuaranteeType |	Y	| ComplexType | To specify what guarantee is required. |
|  CancelPenalties |	Y	| ComplexType | Defines the cancellation penalty of the hotel facility.|
|  RatePlanID |	Y	| String1to64 | A text field used to indicate a special ID code that is associated with the rate and is essential in the reservation request.|
|  AmountBeforeTax |	Y	| Money | The total amount not including any associated tax (e.g., sales tax, VAT, GST or any associated tax).|
|  AmountAfterTax |	Y	| Money | The total amount including all associated taxes (e.g., sales tax, VAT, GST or any associated tax). |
|  CurrencyCode |	Y	| AlphaLength3|  An ISO 4217 (3) alpha character code that specifies a monetary unit.|
|  RequireSeriesCode | Boolean |	N	|  Set to true if series code/CVV is needed for that rate. |
|  AlternateCurrencyInd |	N	| Boolean | When true, indicates the amounts are provided in an alternate currency.  |
|  RoomID |	Y	| String1to16 |  A string value representing the unique identification of a room. |
|  RoomDescription |	N	| String |  Textual information regarding the room. |
|  TimeSpan |	Y	| ComplexType| Range of dates, or fixed set of dates for Reservation Request.|

#### Example request

```xml
<?xml version="1.0" encoding="utf-8"?>
<OTA_HotelAvailRQ
    xmlns="http://www.opentravel.org/OTA/2003/05"
    EchoToken="ABC123"
    TimeStamp="2012-01-01T19:00:00"
    PrimaryLangID="en-us"
    xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"  
    xsi:schemaLocation="http://www.opentravel.org/OTA/2003/05 ../Schemas/OTA_HotelAvailRQ.xsd"
    Version="1">
    <POS>
        <Source ISOCountry="US" ISOCurrency="USD">
            <RequestorID Type="18" ID="7777777" /> 
        </Source>
    </POS>
    <AvailRequestSegments>
        <AvailRequestSegment>
            <HotelSearchCriteria>
                <Criterion>
                    <HotelRef  HotelCode="HTL1111" />
                </Criterion>	
                <Criterion>	
                    <HotelRef  HotelCode="HTL2222" />
                </Criterion>
            </HotelSearchCriteria>
            <StayDateRange Start="2012-08-15" End="2010-08-17" />
            <RoomStayCandidates>
                <RoomStayCandidate Quantity="1">
                    <GuestCounts>
                        <GuestCount Count="1" />
                    </GuestCounts>
                </RoomStayCandidate>
            </RoomStayCandidates>
        </AvailRequestSegment>
    </AvailRequestSegments>
</OTA_HotelAvailRQ>
```

#### Example response

```xml
<?xml version="1.0" encoding="utf-8"?>
<OTA_HotelAvailRS
    xmlns="http://www.opentravel.org/OTA/2003/05"
    EchoToken="ABC123"
    TimeStamp="2012-01-01T19:00:00"
    xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
    xsi:schemaLocation="http://www.opentravel.org/OTA/2003/05 ../Schemas/OTA_HotelAvailRS.xsd"
    Version="1">
    <Success />
    <RoomStays>
        <RoomStay>
            <!--RoomStay represents 1 hotel-->
            <RoomTypes>
                <RoomType RoomID="111">
                    <RoomDescription>
                        <Text>Standard room, king bed</Text>
                    </RoomDescription>
                </RoomType>
                <RoomType RoomID="222">
                    <RoomDescription>
                        <Text>Exclusive room</Text>
                    </RoomDescription>
                </RoomType>
            </RoomTypes>
            <RatePlans>
                <RatePlan
                    RatePlanID="111111"
                    AvailabilityStatus="AvailableForSale"
                    PrepaidIndicator="false">
                    <Guarantee GuaranteeType="Deposit"/>
                    <CancelPenalties>
                        <CancelPenalty NonRefundable="true">
                            <PenaltyDescription>
                                <Text>NONREFUNDABLE 100 PCT PENALTY</Text>
                            </PenaltyDescription>
                        </CancelPenalty>
                    </CancelPenalties>
                    <MealsIncluded Breakfast="false" Dinner="false" Lunch="false"/>
                </RatePlan>
                <RatePlan
                    RatePlanID="222222"
                    AvailabilityStatus="AvailableForSale"
                    PrepaidIndicator="false">
                    <Guarantee GuaranteeType="Deposit"/>
                    <CancelPenalties>
                        <CancelPenalty NonRefundable="false">
                            <PenaltyDescription>
                                <Text>Cancel 2 days before arrival</Text>
                            </PenaltyDescription>
                        </CancelPenalty>
                    </CancelPenalties>
                    <MealsIncluded Breakfast="True" Dinner="false" Lunch="false"/>
                </RatePlan>
            </RatePlans>
            <RoomRates>
                <RoomRate RoomID="111" RatePlanID="111111">
                    <Rates>
                        <Rate>
                            <Total
                                AmountBeforeTax="100.00"
                                AmountAfterTax="110.00"
                                CurrencyCode="USD" />
                            <RateDescription>
                                <Text>CORPORATE RATE*Free Wi-Fi</Text>
                            </RateDescription>
                            <TPA_Extensions>
                                <RequireSeriesCode>true</RequireSeriesCode> 
                            </TPA_Extensions>
                        </Rate>
                    </Rates>
                </RoomRate>
                <RoomRate RoomID="222" RatePlanID="222222">
                    <Rates>
                        <Rate>
                            <Total
                                AmountBeforeTax="200.00"
                                AmountAfterTax="220.00"
                                CurrencyCode="USD" />
                            <RateDescription>
                                <Text>CORPORATE RATE*Free Wi-Fi</Text>
                            </RateDescription>
                            <TPA_Extensions>
                                <RequireSeriesCode>true</RequireSeriesCode> 
                            </TPA_Extensions>
                        </Rate>
                    </Rates>
                </RoomRate>
            </RoomRates>
            <TimeSpan Start="2012-08-15" End="2010-08-17" />	
            <BasicPropertyInfo HotelCode="HTL1111" />
        </RoomStay>
        <RoomStay>
            <RoomTypes>
                <RoomType RoomID="333">
                    <RoomDescription>
                        <Text>Double room, twin bed</Text>
                    </RoomDescription>
                </RoomType>
            </RoomTypes>
            <RatePlans>
                <RatePlan
                    RatePlanID="333333"
                    AvailabilityStatus="AvailableForSale"
                    PrepaidIndicator="false">
                    <Guarantee GuaranteeType="Deposit"/>
                    <CancelPenalties>
                        <CancelPenalty NonRefundable="true">
                            <PenaltyDescription>
                                <Text>NONREFUNDABLE 100 PCT PENALTY</Text>
                            </PenaltyDescription>
                        </CancelPenalty>
                    </CancelPenalties>
                    <MealsIncluded Breakfast="false" Dinner="false" Lunch="false"/>
                </RatePlan>			
            </RatePlans>
            <RoomRates>
                <RoomRate RoomID="333" RatePlanID="333333">
                    <Rates>
                        <Rate>
                            <Total
                                AmountBeforeTax="100.00"
                                AmountAfterTax="110.00"
                                CurrencyCode="USD" />
                            <RateDescription>
                                <Text>CORPORATE RATE*Free Wi-Fi</Text>
                            </RateDescription>
                        </Rate>
                    </Rates>
                </RoomRate>
            </RoomRates>
            <TimeSpan Start="2012-08-15" End="2010-08-17" />
            <BasicPropertyInfo HotelCode="HTL2222" />
        </RoomStay>
    </RoomStays>	
</OTA_HotelAvailRS>
```

#### Use case scenario:

**NOTE:** Concur currently expects total room price for more-than-one night
stays!

RoomStay level nodes are used for individual hotels.

Individual rates must have RoomType, RatePlan, and RoomRate nodes. Multiple
nodes for different rates are in one RoomStay node per hotel – please see
OTA\_AvailRS.xml for more clarity.

1.  After the Search request, Concur will send one Avail message, based on
    “Number of hotel results to shop” setting in customer’s Travel
    Configuration; requesting multiple hotels availability. Each hotel requested
    in separate **Criterion** node. Response should be one message per multiple
    hotels as well, using **RoomStay node per hotel.** User has performed a
    hotel search. First 10-15 hotels have button “View Rooms”, the rest have
    “Show Rates” button. After click on “View Rooms” hotel UI box expands
    showing room-rates from one or multiple suppliers.

Example request:

```xml
<HotelSearchCriteria>
    <Criterion>
        <HotelRef HotelCode="HTL1111"/>
    </Criterion>
    <Criterion>
        <HotelRef HotelCode=" HTL2222"/>
    </Criterion>
</HotelSearchCriteria>
```

Example response:

```xml
<RoomStays>
    <RoomStay>
        <RoomTypes>
            <RoomType RoomID="222">
                <RoomDescription>Standard room, king bed</RoomDescription>
            </RoomType>
            <RoomType RoomID="999">
                <RoomDescription>Exclusive room</RoomDescription>
            </RoomType>
        </RoomTypes>
        <RatePlans>
            <RatePlan RatePlanID="111111" />
            <RatePlan RatePlanID="999999" />
        </RatePlans>
        <RoomRates>
            <RoomRate>
                <Rates>
                    <Rate RoomID="222" RatePlanID="111111" >
                        <Total
                            AmountBeforeTax="100.00"
                            AmountAfterTax="110.00"
                            CurrencyCode="USD" />
                        <RateDescription>
                            <Text>CORPORATE RATE*Free Wi-Fi</Text>
                        </RateDescription>
                        <TPA_Extensions>
                            <RequireSeriesCode>true</RequireSeriesCode>
                        </TPA_Extensions>
                    </Rate>
                </Rates>
            </RoomRate>
            <RoomRate>
                <Rates>
                    <Rate RoomID="999" RatePlanID="999999" >
                        <Total
                            AmountBeforeTax="200.00"
                            AmountAfterTax="220.00"
                            CurrencyCode="USD" />
                        <RateDescription>
                            <Text>CORPORATE RATE*Free Wi-Fi</Text>
                        </RateDescription>
                        <TPA_Extensions>
                            <RequireSeriesCode>true</RequireSeriesCode>
                        </TPA_Extensions>
                    </Rate>
                </Rates>
            </RoomRate>
        </RoomRates>
        <TimeSpan Start="2012-08-15" End="2010-08-17" />
        <BasicPropertyInfo HotelCode="HTL1111" />
    </RoomStay>
    <RoomStay>
        <RoomTypes>
            <RoomType RoomID="888">
                <RoomDescription>Double room, twin bed</RoomDescription>
            </RoomType>			
        </RoomTypes>
        <RatePlans>
            <RatePlan RatePlanID="222222" />
        </RatePlans>
        <RoomRates>
            <RoomRate>
                <Rates>
                    <Rate RoomID="888" RatePlanID="222222" >
                        <Total
                            AmountBeforeTax="100.00"
                            AmountAfterTax="110.00"
                            CurrencyCode="USD" />
                        <RateDescription>
                            <Text>CORPORATE RATE*Free Wi-Fi</Text>
                        </RateDescription>						
                    </Rate>
                </Rates>
            </RoomRate>
        </RoomRates>
        <TimeSpan Start="2012-08-15" End="2010-08-17" />
        <BasicPropertyInfo HotelCode="HTL2222" />
    </RoomStay>
</RoomStays>
```

2.  After user clicks on Get Rates button for not priced hotels, Avail RQ
    message will be sent for that hotel.

    ```xml
    <HotelRef HotelCode="101">
    ```

3.  The user is requiring stay for multiple nights from **2012-08-15 to
    2010-08-17.** The Hotel Supplier should return total price per stay. Concur
    will divide Total price by number of nights to display nightly price on
    Hotel Search results page.

    ```xml
    <RoomRates>
        <RoomRate>
            <Rates>
                <Rate RoomID="888" RatePlanID="222222">
                    <Total AmountBeforeTax="100.00" AmountAfterTax="110.00" CurrencyCode="USD" />
                    <RateDescription>
                        <Text>CORPORATE RATE*Free Wi-Fi</Text>
                    </RateDescription>
                </Rate>
            </Rates>
        </RoomRate>
        <StayDateRange Start="2012-08-15" End="2010-08-17" />
    </RoomRates>
    ```

4.  If hotel is sold out, the Hotel supplier should return in AvailRS:

    ```xml
    <RatePlan AvailabilityStatus="ClosedOut">
    ```

5.  Next to rate description is supplier logo, policy mark (green, red, yellow,
    gray) and button with price in user's currency. If rate needs deposit,
    "deposit required" label is shown.

6.  User clicks on Rules and Cancellation policy. Popup with cancellation policy
    text appears. Cancellation policy is take from Cancel Penalty nodes.

7.  User clicks on button with room-rate price. Trip Review page is displayed
    with rate details (average, summary and total) and cancellation policy.

    ![media](./hotel2/HotelAvail1.png)
 
### Hotel Reservation

Allows user to book a room.

>   **SOAPAction:** book

>   **OTA name:** HotelRes

#### Message structure

OTA_HotelResRQ

|  Element |	Required	| Data Type | Description |
|----------|------------|--------------------------|-|
|  RequestorID |	N	| StringLength1to32 | The corporate identifier|
|  HotelCode |	Y	| StringLength1to16 | The code that uniquely identifies a single hotel property from HotelAvailRS.|
|  Customer |	Y	| ComplexType | Guest personal information: name, surname, email, telephone etc.|
|  CompanyName |	Y	| StringLength1to32 | Customer's company name. |
|  GuestNumber |	Y	| Integer | Number of guests for the inquiry. Concur only supports 1 guest operations.|
|  TimeSpan |	Y	| ComplexType | Range of dates, or fixed set of dates for Reservation Request.|
|  RatePlanID |	Y	| StringLength1to64 | A text field used to indicate a special ID code that is associated with the rate and is essential in the reservation request.|
|  PaymentCard |	Y	| ComplexType | Guarantee payment card details: CardType, CardHolderName, ExpireDate, CardNumber, Address. |
|  Comments |	N	| String | Comments which apply to the whole Reservation. |
|  NotifyEmails |	N	| ComplexType | Email to be notified. |

OTA_HotelResRS

|  Element |	Required	| Data Type | Description |
|----------|------------|--------------------------|-|
|  ResResponseType |	Y | ComplexType	|  To specify a status to the transaction, if reservation was successful or canceled.|
|  HotelCode |	Y	| StringLength1to16 |  The code that uniquely identifies a single hotel property from HotelSearchRS.|
|  RatePlanID |	Y	| StringLength1to64 | A text field used to indicate a special ID code that is associated with the rate and is essential in the reservation request.|
|  CancelPenalties |	Y	| ComplexType | Defines the cancellation penalty of the hotel facility.|
|  Customer |	Y	| ComplexType | Guest personal information: name, surname, email, telephone etc.|
|  AmountBeforeTax |	Y	| Money| The total amount not including any associated tax (e.g., sales tax, VAT, GST or any associated tax).|
|  AmountAfterTax |	Y	| Money | The total amount including all associated taxes (e.g., sales tax, VAT, GST or any associated tax). |
|  CurrencyCode |	Y | AlphaLength3	|  An ISO 4217 (3) alpha character code that specifies a monetary unit.|
|  TimeSpan |	Y	| ComplexType | Range of dates, or fixed set of dates for Reservation Request.|
|  UniqueID |	Y	|StringLength1to32 |  A reference to identify the booking.|

#### Example request

```xml
<OTA_HotelResRQ xmlns="http://www.opentravel.org/OTA/2003/05">
    <POS>
        <Source ISOCurrency="USD">
            <RequestorID Type="1" ID="123"></RequestorID>
        </Source>
    </POS>
    <HotelReservations>
        <HotelReservation>
            <RoomStays>
                <RoomStay>
                    <RatePlans>
                        <RatePlan RatePlanID="CMY7SR3">
                            <GuaranteesAccepted>
                                <GuaranteeAccepted>
                                    <PaymentCard  CardCode="VI" ExpireDate="0920">
                                        <CardType>VISA</CardType>
                                        <CardHolderName>FIRSTNAME LASTNAME</CardHolderName>
                                        <CardNumber>
                                            <PlainText>123456784111></PlainText>
                                        </CardNumber> 
                                    </PaymentCard>
                                </GuaranteeAccepted>
                            </GuaranteesAccepted>
                            </Guarantee>
                        </RatePlan>
                    </RatePlans>
                    <TimeSpan Start="2016-11-17" End="2016-11-18"></TimeSpan>
                    <BasicPropertyInfo HotelCode="437004"></BasicPropertyInfo>
                    <Comments>
                        <Comment>
                            <Text TextFormat="PlainText">late arrival</Text>
                        </Comment>
                    </Comments>
                </RoomStay>
            </RoomStays>
            <ResGuests>
                <ResGuest>
                    <Profiles>
                        <ProfileInfo>
                            <Profile>
                                <Customer Gender="Unknown">
                                    <PersonName Language="en">
                                        <NamePrefix>MR</NamePrefix>
                                        <GivenName>John</GivenName>
                                        <Surname>Smith</Surname>
                                    </PersonName>
                                    <Telephone PhoneNumber="3141011001"/>
                                    <Email>john.smith@inc.com</Email>
                                    <Address>
                                        <AddressLine>209 Madison Street Suite 400</AddressLine>
                                        <CityName>Alexandria</CityName>
                                        <PostalCode>22314</PostalCode>
                                        <StateProv StateCode="VA"/>
                                        <CountryName Code="US">USA</CountryName>
                                    </Address>
                                    <CitizenCountryName Code="US"/>
                                </Customer>
                                <CompanyInfo>
                                    <CompanyName>CONCURTECH</CompanyName>
                                </CompanyInfo>
                            </Profile>
                        </ProfileInfo>
                    </Profiles>
                    <GuestCounts>
                        <GuestCount Count="1"/>
                    </GuestCounts>
                </ResGuest>
            </ResGuests>
        </HotelReservation>
        <TPA_Extensions>
            <NotifyEmails>
                <NotifyEmails>FIRSTNAME.LASTNAME@EXAMPLE.COM</NotifyEmails>
            </NotifyEmails>
        </TPA_Extensions>
    </HotelReservations>
</OTA_HotelResRQ>
```

#### Example response

```xml
<OTA_HotelResRS
    xmlns="http://www.opentravel.org/OTA/2003/05"
    xmlns:ns2="http://www.concur.com/webservice/auth"
    ResResponseType="Reserved">
    <Success/>
    <HotelReservations>
        <HotelReservation>
            <UniqueID ID="94514652"/>
            <RoomStays>
                <RoomStay>
                    <RatePlans>
                        <RatePlan RatePlanID="CMY7SR3">
                            <CancelPenalties CancelPolicyIndicator="true">
                                <CancelPenalty>
                                    <Deadline AbsoluteDeadline="2017-04-30T22:00"/>
                                    <PenaltyDescription>
                                        <Text>REFUNDABLE</Text>
                                    </PenaltyDescription>
                                    <PenaltyDescription>
                                        <Text>CANCEL BY 2016-11-16T22:00</Text>
                                    </PenaltyDescription>
                                </CancelPenalty>
                            </CancelPenalties>
                        </RatePlan>
                    </RatePlans>
                    <RoomRates>
                        <RoomRate>
                            <Rates>
                                <Rate RoomPricingType="Per stay">
                                    <Total
                                        AmountAfterTax="89.10"
                                        AmountBeforeTax="89.10"
                                        CurrencyCode="EUR"/>
                                </Rate>
                            </Rates>
                        </RoomRate>
                    </RoomRates>
                    <TimeSpan Start="2016-11-17" End="2016-11-18" />
                    <BasicPropertyInfo HotelCode="437004" HotelName="monbijou">
                        <Address>
                            <AddressLine>Monbijouplatz 1 </AddressLine>
                            <CityName>Berlin</CityName>
                            <CountryName Code="DE">Federal Republic of Germany</CountryName>
                        </Address>
                        <ContactNumbers>
                            <ContactNumber PhoneNumber="+1555666444"/>
                        </ContactNumbers>
                    </BasicPropertyInfo>
                </RoomStay>
            </RoomStays>
            <ResGuests>
                <ResGuest>
                    <Profiles>
                        <ProfileInfo>
                            <Profile>
                                <Customer>
                                    <PersonName>
                                        <GivenName>FIRSTNAME</GivenName>
                                        <Surname>LASTNAME</Surname>
                                    </PersonName>
                                </Customer>
                            </Profile>
                        </ProfileInfo>
                    </Profiles>
                </ResGuest>
            </ResGuests>
        </HotelReservation>
    </HotelReservations>
</OTA_HotelResRS>
```

#### Use case scenario:

1.  User clicks on in-policy (green) button with price. Trip confirmation page
    is shown. Hotel name, rate details, price per night(s), total price, and
    cancellation policy is shown.

2.  User selects his credit card, agrees with Cancellation policy and clicks Next
    button. 

3.  User picks credit card from Form of payment drop-down. Credit card details
    are sent **Guarantee/GuaranteeAccepted/PaymentCard.** Reservation message is
    sent. Once Reservation RS is returned by Hotel Supplier, trip is reserved.

    ![media](./hotel2/HotelRes1.jpg)

    ![media](./hotel2/HotelRes2.jpg)

4.  Travel administrator configures travel configuration to recieve reservation confirmation on email. Multiple emails can be configured
NotifyEmails will be sent in such reservation requests. The Hotel Supplier should send reservation confirmation to specified emails.

 
### Read

Returns detailed information about a hotel reservation.

#### Message structure

OTA_ReadRQ

|  Element |	Required	| Data Type | Description |
|----------|------------|--------------------------|-|
|  RequestorID |	N	| StringLength1to32 | The corporate identifier|
|  UniqueID |	Y	| StringLength1to32 |  A reference to identify the booking.|

#### Example request

```xml
<OTA_ReadRQ xmlns="http://www.opentravel.org/OTA/2003/05" EchoToken="DF59894F-BCCA-44CF-8B74-C0339C5DF036" Version="5.002">
    <UniqueID ID="94514652"/>
</OTA_ReadRQ>
```

Response is the same HotelResRS as for HotelResRQ.

#### Use case scenario:

Used in a process of booking a hotel to write information to Itinerary. Not
invoked by user, but by automatic Concur process. Hotel Supplier should reply
with HotelRes RS message in the same format, as for HotelResRQ. **UniqueID** from HotelResRS is used as reservation
ID.
`<UniqueID ID="88618333"></UniqueID>`

In case the reservation has been cancelled, user's Itinerary will be updated accordingly after user click on Trip details.

>   **SOAPAction: read**

>   **OTA name:** HotelRead

![media](./hotel2/HotelRead1.jpg)

### Cancel

Allows user to cancel a reservation.

>   **SOAPAction:cancel**

>   **OTA name:** Cancel

#### Message structure

OTA_CancelRQ

|  Element |	Required	| Data Type | Description |
|----------|------------|--------------------------|-|
|  RequestorID |	N	| StringLength1to32 | The corporate identifier|
|  UniqueID |	Y	| StringLength1to32 |  A reference to identify the booking.|
|	Type  | Y | Integer |  A reference to the type of object defined by the UniqueID element.  | 

OTA_CancelRS

|  Element |	Required	| Data Type | Description |
|----------|------------|--------------------------|-|
|  UniqueID |	Y	| StringLength1to32 |  A reference to identify the booking  reference.|
|  UniqueID |	Y	| StringLength1to32 |  A reference to identify the cancellation reference.|
|  Status |	Y | ComplexType |  If cancellation is successful or not.|
|	Type  | Y | Integer |  A reference to the type of object defined by the UniqueID element.  | 

#### Example request

```xml
<OTA_CancelRQ xmlns="http://www.opentravel.org/OTA/2003/05">
    <UniqueID Type="14" ID="88618333"></UniqueID>
</OTA_CancelRQ>
```

#### Example response

```xml
<OTA_CancelRS
    xmlns="http://www.opentravel.org/OTA/2003/05"
    xmlns:ns2="http://www.concur.com/webservice/auth"
    Status="Cancelled">
    <Success/>
    <UniqueID ID="88618333" Type="14"/>
    <UniqueID ID="27607" Type="15"/>
</OTA_CancelRS>
```


#### Use case scenario:

1.  User cancels his trip by hitting on Cancel button on Itinerary. Cancel RQ is
    sent by Concur.

    - **UniqueID** with **Type="14"** identifies the reservation to cancel.
   
    **Cancel response** should have two **UniqueIDs.** One is the reservation ID (same one as in request), one Cancellation Confirmation number for further dispute usage
    between user and hotel/reservation system:

    ```xml
    <UniqueID ID="88618333" Type="14"/>
    <UniqueID ID="27607" Type="15"/>
    ```
	
2.  Company has workflow setup to perform automatic cancellation. Exactly same
    Cancel RQ is sent by Concur, as in case of cancellation by user.
  
3.  When reservation has been already canceled and Concur tries to cancel it, the Hotel Supplier should reply

    ```xml
    <OTA_CancelRS
        xmlns="http://www.opentravel.org/OTA/2003/05"
        xmlns:ns2="http://www.concur.com/webservice/auth"
        PrimaryLangID="en"
        Status="Cancelled"
        Version="1">
        <Success/>
        <Warnings>
            <Warning Code="95" ShortText="Booking already cancelled "/>
        </Warnings>
        <UniqueID ID="94600593" Type="14"/>
        <UniqueID ID="48650" Type="15"/>
    </OTA_CancelRS>
    ```


Errors and Warnings
-------------------
The Hotel Supplier can use HTTP error codes for system-level errors, like HTTP 500 Internal Server Error in case of an unexpected condition was encountered and no more specific message is suitable;
HTTP 403 in case of wrong password in SOAP header. 

For application errors, the Hotel Supplier should use OTA Error codes (link) to send information about Error
and Warring in corresponding nodes of each message:

```xml
<Errors>
    <Error Type=”13” Code="424" ShortText="50.111,40.222,5,2" />
</Errors>
```

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

Other files
-----------------

* [Authentication schema](./hotel2/Authentication.xsd)
* [Concur version of the OTA schema](./hotel2/HotelService2-brief.xsd)
* [Stylesheet for the schema. Download in the same folder as .xsd file and open in web browser.](./hotel2/xs3p_better_doc.xsl)
* [OTA codelist](./hotel2/OpenTravel_CodeList_2015_07_15.xlsm)


