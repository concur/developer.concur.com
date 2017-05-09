---
title: Hotel Direct Connect
layout: reference
---
##Disclaimer
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
7.	Concur and the Hotel Supplier validate the application: 
o	Concur sets up the vendor in the certification systems and runs a series of tests to validate the interaction between the two systems.
8.	Once certification passes, the Hotel supplier sends Concur the production URIs and credentials.
9.	Concur updates the production servers with the supplier’s production data.
10.	Upon successful completion, the supplier will be live in Concur for any customer to enable.
11.	The Travel client opts in to the Hotel callout (within the Travel Configuration) to allow their users to view and book the available inventory. Travel client sets ID which will identify them at Hotel suppliers for features like Corporate rates. 

## Non-Functional Requirements

### Emergency technical contact
The Hotel supplier needs to provide emergency technical contact email that will be used for communication in case of blocking technical issues.
###Testing environment
To allow Concur performing testing, the Hotel Supplier needs to provide testing URL or specify properties for testing in production URL. Concur needs to be able to perform test bookings with testing credit cards.
###Security 
####PCI DSS compliance
As sensitive data and payment card details are transferred via API, the Hotel Suppliers need to comply with PCI DSS standard. Concur is compliant with PCI DSS standard and undergoes regular security audits.
####HTTPS
The Hotel Supplier needs to support secure communication of TLS 1.1 or newer. The Hotel Supplier will provide Concur HTTPS URL of its endpoint.
Standard HTTPS port 443 should be used.
####Concur IP ranges
If Hotel Supplier is using IP whitelisting policy, Concur will use following addresses to access Supplier’s systems from.

12.129.29.0/24 -	Production
12.129.29.199 -	Production
12.129.29.224/28 -	Production
12.129.29.86 -	Production
12.129.32.0/22 -	Production
12.130.250.17 -	Production
12.130.251.155 -	Production
193.165.112.0/28 -	q&a and development
199.108.17.100 -	Production
206.173.37.128/25 -	q&a and development
206.173.37.150 -	q&a and development
206.175.21.0 /24 -	q&a and development
206.175.21.196 -	q&a and development
207.41.34.0/24 -	q&a and development
207.41.34.10 -	q&a and development
212.24.155.86 - q&a and development
32.58.240.145 -	production
62.23.83.128/25 -	production
62.23.83.135 -	production
63.239.255.0/24 - q&a and development
63.76.22.10 -	production
84.14.115.96/29 -	q&a and development
84.14.175.224/27 -	production



####Authentication
Hotel supplier authenticates itself to Concur by public certificate in SSL communication.
Concur authenticates itself for Hotel Supplier using userID and password in each message SOAP header. 

```<Envelope xmlns="http://schemas.xmlsoap.org/soap/envelope/"> 
<Header xmlns="http://schemas.xmlsoap.org/soap/envelope/">
 <authentication xmlns="http://www.concur.com/webservice/auth">
 <userid>testLogin123</userid>
 <password>xxxxxxxxxxxx</password> 
</authentication>
 </Header>```

###Authentication.xsd:
```<?xml version="1.0" encoding="UTF-8"?>
<xsd:schema xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns="http://www.concur.com/webservice/auth" targetNamespace="http://www.concur.com/webservice/auth" elementFormDefault="qualified" version="1.0" id="TransactionControlHeader">
	<xsd:element name="authentication">
		<xsd:complexType>
			<xsd:sequence>
				<xsd:element name="userid" type="xsd:string"/>
				<xsd:element name="password" type="xsd:string"/>
			</xsd:sequence>
		</xsd:complexType>
	</xsd:element>
</xsd:schema>```

###URLs and headers
Concur will receive a single URL from the Hotel Supplier. All requests will go to that URL. 
Content Type is application/xml.
To define, what operation needs to be performed, HTTP headers are used, as example:
```SOAPAction:availability.```

CDATA and HTML code inside of XML nodes and attributes are not allowed. These data will be escaped.
The hotel suppliers should not use XML special characters - predifined entities: &, <, >, ", ' inside of ID elements like RatePlanID. 

Concur is using date as xs:date XML type "2017-05-01".


###Response Times
Concur needs to receive all responses within 55 seconds, otherwise it causes timeout. To prevent no show fees, duplicate bookings and other similar issues, Concur recommends to perform Auto-Cancel by the Hotel Supplier is ReadRQ message is not sent by Concur 5 minutes after HotelResRS message was sent to Concur. 

##Supported operations
Hotel Service API 2.0 supports following operations:
1.	Search RQ and RS – to get list of hotels
2.	Descriptive Info RQ and RS – to get hotel description and photos
3.	Availability RQ and RS– to get rates for selected hotels
4.	Reservation RQ and RS – to book a selected rate
5.	Read Itinerary RQ – to get information for Itinerary. Response message in HotelResRS.
6.	Cancel RQ and RS – to cancel a reservation.


###Message flow

####Hotel search and reservation
1.	Search. Sent after user clicks on button Search.
2.  Availability. Sent after Search message if configured, or after user clicks on Get Rates button.	
3.  Descriptive Info. Sent after user click on hotel details button or hotel thumbnail picture.
4.	Reservation. Sent after user click on Reserve button.
5.	Read Itinerary. Sent automatically after Reservation message.

####Hotel itinerary check
1. Read Itinerary. Supplier replies with Reservation response.

####Hotel cancel
1. Read Itinerary. Supplier replies with Reservation response.
2. Cancel. After user agrees with Cancelation policy and clicks on Cancel button.


Use cases and message structure
---------

#### Company Identification

It is possible to setup specific ID – Requestor ID - to identify Company or it's organizational subunit, a
customer that is using Concur API. Requestor IDs are issued by the Hotel
supplier and are configured by TMC or entity responsible for vendor setting in
Concur Travel. That Requestor ID allows suppliers to shape Preference Level,
specific rates etc. for customers. As not all suppliers require such features,
this is optional setting in Concur Travel.

####Color coding for message structure diagrams:
Green for mandatory fields in HS2.0
Yellow for optional fields in HS2.0
Purple for future versions of HS
Gray for not supported nodes and attributes


### OTA operations 

### **Hotel Search**

>   **SOAPAction:**  **search**

>   **OTA name:** HotelSearch

#### Message structure


OTA_HotelSearchRQ
|  Element |	Required	|  Description |
|----------|---------------------------------------|
|  RequestorID |	N	| The corporate identifier|
|  Position |	Y	|  The Position element contains three attributes, Latitude, Longitude, used to indicate the geographic location(s) requested by the search, expressed in notation specified by ISO standard 6709.|
|  Radius |	Y	| Used to specify the extent of a search area. The extent is relative to an element (position, address, hotel reference, etc.) present in this ItemSearchCriterionType that specifies a location.|
|UnitOfMeasureCode| Y | The unit of measure in a code format. Refer to OpenTravel Code List Unit of Measure Code | 
|  HotelRef |	N	| Indicates the detail of hotel reference information.|
|  StayDateRange |	Y	| Range of dates, or fixed set of dates for Availability Request.|

OTA_HotelSearchRS
|  Element |	Required	|  Description |
|----------|---------------------------------------|
|  ChainCode |	N	| 2 letter GDS chain code. The code that identifies a hotel chain or management group. Used for Chain filter in UI, and for Travel Rules based on GDS codes|
|  ChainName |	N	| Detailed property level information.|
|  HotelName |	Y	|  A text field used to communicate the proper name of the hotel.|
|  HotelCode |	Y	|  The code that uniquely identifies a single hotel property. Used in other OTA messages.|
|  Position |	Y	|  The Position element contains three attributes, Latitude, Longitude, used to indicate the geographic location(s) requested by the search, expressed in notation specified by ISO standard 6709.|
|  Address |	Y	| Public address of the hotel property.|
|  ContactNumber |	N	| Contact numbers of the hotel property|
| Award |	N	| An element that identifies the hotel ratings. |
|  Amenities |	N	| This provides an area to pass amenity information.|
|  Policy |	N	| Policy information for this hotel.|
|  HotelPreference |	N	| Hotel preference level set by Travel Administrator.|

####Example request
```
<Envelope xmlns="http://schemas.xmlsoap.org/soap/envelope/">
	<Header xmlns="http://schemas.xmlsoap.org/soap/envelope/"/>
	<Body xmlns="http://schemas.xmlsoap.org/soap/envelope/">
		<OTA_HotelSearchRQ xmlns="http://www.opentravel.org/OTA/2003/05" EchoToken="0953A951-AD9E-4B30-A0E0-E68747381627" Version="4" PrimaryLangID="EN" AltLangID="EN" MaxResponses="100">
			<POS>
				<Source>
					<RequestorID Type="1" ID="408748011"/>
				</Source>
			</POS>
			<Criteria>
				<Criterion>
					<Position Latitude="52.520007" Longitude="13.404954"/>
					<RefPoint/>
					<Radius Distance="5" DistanceMax="30" UnitOfMeasureCode="2"/>
					<StayDateRange Start="2017-04-30" End="2017-05-01"/>
				</Criterion>
			</Criteria>
		</OTA_HotelSearchRQ>
	</Body>
</Envelope>
```
####Example response
```
<soap:Envelope xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/">
	<SOAP-ENV:Header xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/"/>
	<soap:Body>
		<OTA_HotelSearchRS xmlns="http://www.opentravel.org/OTA/2003/05" xmlns:ns2="http://www.concur.com/webservice/auth" AltLangID="EN" PrimaryLangID="EN" Version="4">
			<Success/>
			<Properties>
				<Property ChainCode="1609" ChainName="Radisson" HotelCode="ra" HotelName="Radisson Blu Hotel">
					<Position Latitude="52.51955" Longitude="13.402762"/>
					<Address>
						<AddressLine>Karl-Liebknecht-Str. 3 </AddressLine>
						<CityName>Berlin</CityName>
						<CountryName Code="DE">Federal Republic of Germany</CountryName>
					</Address>
					<ContactNumbers>
						<ContactNumber CountryAccessCode="49" PhoneNumber="30238280" PhoneTechType="1"/>
						<ContactNumber CountryAccessCode="49" PhoneNumber="302382810" PhoneTechType="3"/>
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
</soap:Envelope>```

#### Use case scenario:

1.  User searches for hotel by location: Airport, city, exact address or company
    location. Concur will always send Geocode for location.

```<Position Latitude="50.867000" Longitude="7.150000"></Position>```

2.  List of 100 hotels within search radius is displayed in that location, with
    hotels names, thumbnail pictures, address, star rating.

![media](HotelSearch1.png)

  Thumbnail hotel image should be 70x70 pixels to prevent image artifacts by
  scaling.

3.  User searches for specific hotel in location by entering hotel name.

   [./media/image2.png](./media/image2.png)

   **Important Note:** please note that only Left-side filter invokes new
   request to the Hotel Supplier. Top-side filter is performing filtering of
   already displayed results.

 ![media](HotelSearch2.png) 

   Specific hotel is displayed. 

   Hotel Search RQ contains hotel name as:

```
<Criterion>
 <Position Latitude="52.520007" Longitude="13.404954"></Position> 
 <HotelRef HotelName="novotel"></HotelRef>
 <Radius Distance="5" DistanceMax="30" UnitOfMeasureCode="2"></Radius>
 <StayDateRange Start="2017-04-19" End="2017-04-20"></StayDateRange>
</Criterion>``` 

Hotel Supplier only returns hotels with name matching search criteria defined by user.

   
4.  User's company has some hotels set up as Preferred at the Hotel Supplier.
    User’s company has setup in Travel Config a search radius of 30 km.

![media](HotelSearch3.png)

   User searches for hotels in 5 km radius.

   SearchRQ message has two radiuses:

```<Radius Distance="5" DistanceMax="30" UnitOfMeasureCode="2"></Radius>```

   Out of 100 returned hotels in response from Hotel Supplier, first 10 hotels
   are Most Preferred hotels from **30 km** radius. Next 10 hotels are
   Preferred hotels from **30km** radius.

```<HotelPreference>preferred</HotelPreference>```

  Other 80 hotels are hotels with no preference from **5km** radius.
  
### Hotel Descriptive Info

Displays a textual description of a given hotel.
Displays photos and videos of a given hotel.

>   **SOAPAction: detail**

>   **OTA name:** HotelDescriptiveInfo

####Message structure


OTA_HotelDescriptiveInfoRQ
|  Element |	Required	|  Description |
|----------|---------------------------------------|
|  RequestorID |	N	| The corporate identifier|
|  HotelCode |	Y	| The code that uniquely identifies a single hotel property. Used in other OTA messages.|

OTA_HotelDescriptiveInfoRS
|  Element |	Required	|  Description |
|----------|---------------------------------------|
|  HotelCode |	Y	|  The code that uniquely identifies a single hotel property. Used in other OTA messages.|
|  DescriptiveText |	N	|  Descriptive text that describes the hotel.|
|  ImageItems |	N	| URL's hotel images.|


####Example request
```
<Envelope xmlns="http://schemas.xmlsoap.org/soap/envelope/">
  <Header xmlns="http://schemas.xmlsoap.org/soap/envelope/"></Header>
  <Body xmlns="http://schemas.xmlsoap.org/soap/envelope/">
   <OTA_HotelDescriptiveInfoRQ xmlns="http://www.opentravel.org/OTA/2003/05" EchoToken="30708715-C77F-43A1-8B17-242568D4708C" Version="3">
    <HotelDescriptiveInfos>
     <HotelDescriptiveInfo ChainCode="XX" HotelCode="464844"></HotelDescriptiveInfo>
    </HotelDescriptiveInfos>
   </OTA_HotelDescriptiveInfoRQ>
  </Body>
 </Envelope>
```
 
####Example response
```
<OTA_HotelDescriptiveInfoRS xmlns="http://www.opentravel.org/OTA/2003/05" xmlns:ns2="http://www.concur.com/webservice/auth">
<Success/>
<HotelDescriptiveContents>
<HotelDescriptiveContent ChainCode="XX" HotelCode="464844" HotelName="H2 Alexanderplatz">
<HotelInfo><Descriptions><DescriptiveText> The H2 Hotel Berlin Alexanderplatz offers design, functionality and comfort. The H2 Hotel Berlin Alexanderplatz boasts a clear price structure and a design-oriented and modern ambience. </DescriptiveText>
</Descriptions>
</HotelInfo>
<MultimediaDescriptions>
<MultimediaDescription>
<ImageItems>
<ImageItem><ImageFormat><URL>https://iut-foto-origin.hrsstatic.com/foto/4/6/4/8/464844/464844_a_2448684.jpg</URL></ImageFormat></ImageItem>
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

  On any hotel, user clicks "Hotel Details" button.

   A pop-up with textual hotel description is shown.

   ![media](HotelDescriptiveInfo1.png)
   
2.  User clicks on hotel photo thumbnail. Gallery of hotel photos is displayed.

![media](HotelDescriptiveInfo2.png)

### Hotel Availability

Displays detailed information about rooms available in a given hotel.

>   **SOAPAction: availability**

>   **OTA name:** HotelAvail

####Message structure


OTA_HotelAvailRQ
|  Element |	Required	|  Description |
|----------|---------------------------------------|
|  RequestorID |	N	| The corporate identifier|
|  ISOCurrency |	Y	|  The currency code in which the reservation will be ticketed in ISO 4217-3 encoding.|
|  HotelCode |	Y	| The code that uniquely identifies a single hotel property from HotelSearchRS.|
|  StayDateRange |	Y	| Range of dates, or fixed set of dates for Availability Request.|
|  GuestNumber |	Y	| Number of guests for the inquiry. Concur only supports 1 guest operations.|

OTA_HotelAvailRS
|  Element |	Required	|  Description |
|----------|---------------------------------------|
|  HotelCode |	Y	|  The code that uniquely identifies a single hotel property from HotelSearchRS.|
|  RatePlan |	Y	| other than amout-specific information about rate, like accepted guarantee, cancelation policy etc.|
|  AvailabilityStatus |	Y | Available or sold out indicator. |
|  GuaranteeType |	Y	| To specify what guarantee is required. |
|  CancelPenalties |	Y	| Defines the cancellation penalty of the hotel facility.|
|  RatePlanID |	Y	| A text field used to indicate a special ID code that is associated with the rate and is essential in the reservation request.|
|  AmountBeforeTax |	Y	| The total amount not including any associated tax (e.g., sales tax, VAT, GST or any associated tax).|
|  AmountAfterTax |	Y	| The total amount including all associated taxes (e.g., sales tax, VAT, GST or any associated tax). |
|  CurrencyCode |	Y	|  An ISO 4217 (3) alpha character code that specifies a monetary unit.|
|  RequireSeriesCode |	N	|  Set to true if series code/CVV is needed for that rate. |
|  AlternateCurrencyInd |	N	| When true, indicates the amounts are provided in an alternate currency.  |
|  RoomID |	Y	|  A string value representing the unique identification of a room. |
|  RoomDescription |	N	|  Textual information regarding the room. |
|  TimeSpan |	Y	| Range of dates, or fixed set of dates for Reservation Request.|

#### Example request
```
<?xml version="1.0" encoding="utf-8"?>
<OTA_HotelAvailRQ xmlns="http://www.opentravel.org/OTA/2003/05" EchoToken="ABC123" TimeStamp="2012-01-01T19:00:00" PrimaryLangID="en-us"
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
						<GuestCount  Count="1" />
					</GuestCounts>
				</RoomStayCandidate>
			</RoomStayCandidates>
		</AvailRequestSegment>
	</AvailRequestSegments>
</OTA_HotelAvailRQ>
```
####Example response
```
<?xml version="1.0" encoding="utf-8"?>
<OTA_HotelAvailRS xmlns="http://www.opentravel.org/OTA/2003/05" EchoToken="ABC123" TimeStamp="2012-01-01T19:00:00"
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
				<RatePlan RatePlanID="111111" AvailabilityStatus="AvailableForSale" PrepaidIndicator="false" >
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
				<RatePlan RatePlanID="222222" AvailabilityStatus="AvailableForSale" PrepaidIndicator="false">
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
							<Total AmountBeforeTax="100.00" AmountAfterTax="110.00" CurrencyCode="USD" />
							<RateDescription>
								<Text>CORPORATE RATE*Free Wi-Fi</Text>
							</RateDescription>
						<TPA_Extensions>
							<RequireSeriesCode>true</RequireSeriesCode> 
						</TPA_Extensions>	
						</Rate>
					</Rates>
					<TPA_Extensions>
						<RequireSeriesCode>true</RequireSeriesCode> 
					</TPA_Extensions>
				</RoomRate>
				<RoomRate RoomID="222" RatePlanID="222222">
					<Rates>
						<Rate>
							<Total AmountBeforeTax="200.00" AmountAfterTax="220.00" CurrencyCode="USD" />
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
				<RatePlan RatePlanID="333333" AvailabilityStatus="AvailableForSale" PrepaidIndicator="false">
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
							<Total AmountBeforeTax="100.00" AmountAfterTax="110.00" CurrencyCode="USD" />
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
	<RoomStays>	
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

```
<HotelSearchCriteria>
 <Criterion>
	<HotelRef HotelCode="HTL1111"/>
</Criterion>
<Criterion>
	<HotelRef HotelCode=" HTL2222"/>
</Criterion>
```

Example response:
```
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
						<Total AmountBeforeTax="100.00" AmountAfterTax="110.00" CurrencyCode="USD" />
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
						<Total AmountBeforeTax="200.00" AmountAfterTax="220.00" CurrencyCode="USD" />
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
						<Total AmountBeforeTax="100.00" AmountAfterTax="110.00" CurrencyCode="USD" />
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
```

2.  After user clicks on Get Rates button for not priced hotels, Avail RQ
    message will be sent for that hotel.

   ```<HotelRef HotelCode="101">```

3.  The user is requiring stay for multiple nights from **2012-08-15 to
    2010-08-17.** The Hotel Supplier should return total price per stay. Concur
    will divide Total price by number of nights to display nightly price on
    Hotel Search results page.
```
	<RoomRates>
			<RoomRate>
				<Rates>
					<Rate RoomID="888" RatePlanID="222222" >
				**		<Total AmountBeforeTax="100.00" AmountAfterTax="110.00" CurrencyCode="USD" />**
						<RateDescription>
							<Text>CORPORATE RATE*Free Wi-Fi</Text>
						</RateDescription>						
					</Rate>
				</Rates>
			</RoomRate>
		**	<StayDateRange Start="2012-08-15" End="2010-08-17" />**
		</RoomRates>
```
4.  If hotel is sold out, the Hotel supplier should return in AvailRS:

```<RatePlan AvailabilityStatus="ClosedOut">```

5.  Next to rate description is supplier logo, policy mark (green, red, yellow,
    gray) and button with price in user's currency. If rate needs deposit,
    "deposit required" label is shown.



6.  User clicks on Rules and Cancelation policy. Popup with cancelation policy
    text appears. Cancelation policy is take from Cancel Penalty nodes.

7.  User clicks on button with room-rate price. Trip Review page is displayed
    with rate details (average, summary and total) and cancelation policy.

![media](HotelAvail1.png)
 
### Hotel Reservation

Allows user to book a room.

>   **SOAPAction:** book

>   **OTA name:** HotelRes

####Message structure


OTA_HotelResRQ
|  Element |	Required	|  Description |
|----------|---------------------------------------|
|  RequestorID |	N	| The corporate identifier|
|  HotelCode |	Y	| The code that uniquely identifies a single hotel property from HotelAvailRS.|
|  Customer |	Y	| Guest personal information: name, surname, email, telephone etc.|
|  CompanyName |	Y	| Customer's company name. |
|  GuestNumber |	Y	| Number of guests for the inquiry. Concur only supports 1 guest operations.|
|  TimeSpan |	Y	| Range of dates, or fixed set of dates for Reservation Request.|
|  RatePlanID |	Y	| A text field used to indicate a special ID code that is associated with the rate and is essential in the reservation request.|
|  PaymentCard |	Y	| Guarantee payment card details: CardType, CardHolderName, ExpireDate, CardNumber, Address. |
|  Comments |	N	| Comments which apply to the whole Reservation. |
|  NotifyEmails |	N	| Email to be notified. |


OTA_HotelResRS
|  Element |	Required	|  Description |
|----------|---------------------------------------|
|  ResResponseType |	Y	|  To specify a status to the transaction, if reservation was successful or canceled.|
|  HotelCode |	Y	|  The code that uniquely identifies a single hotel property from HotelSearchRS.|
|  RatePlanID |	Y	| A text field used to indicate a special ID code that is associated with the rate and is essential in the reservation request.|
|  CancelPenalties |	Y	| Defines the cancellation penalty of the hotel facility.|
|  Customer |	Y	| Guest personal information: name, surname, email, telephone etc.|
|  AmountBeforeTax |	Y	| The total amount not including any associated tax (e.g., sales tax, VAT, GST or any associated tax).|
|  AmountAfterTax |	Y	| The total amount including all associated taxes (e.g., sales tax, VAT, GST or any associated tax). |
|  CurrencyCode |	Y	|  An ISO 4217 (3) alpha character code that specifies a monetary unit.|
|  TimeSpan |	Y	| Range of dates, or fixed set of dates for Reservation Request.|
|  UniqueID |	Y	|  A reference to identify the booking.|

####Example request
```
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
						<CardHolderName>FIRSTNAME TESTUSERRULES</CardHolderName>
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
								<GivenName>FIRSTNAME</GivenName>
								<Surname>TESTUSERRULES</Surname>
							</PersonName>
							<Telephone PhoneNumber="3141011001"/>
							<Email>lukas.knotek@concur.com</Email>
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

####Example response
```
<OTA_HotelResRS xmlns="http://www.opentravel.org/OTA/2003/05" xmlns:ns2="http://www.concur.com/webservice/auth" ResResponseType="Reserved">
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
											<Total AmountAfterTax="89.10" AmountBeforeTax="89.10" CurrencyCode="EUR"/>
										</Rate>
									</Rates>
								</RoomRate>
							</RoomRates>
							<TimeSpan Start="2016-11-17" End="2016-11-18" />
							<BasicPropertyInfo HotelCode="437004" HotelName="monbijou">
								<Address>
									<AddressLine>Monbijouplatz 1 </AddressLine>
									<CityName>Berlin</CityName>
									<CountryName Code="DEU">Federal Republic of Germany</CountryName>
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
												<Surname>TESTUSERRULES</Surname>
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
    cancelation policy is shown.

2.  User selects his credit card, agrees with Cancelation policy and clicks Next
    button. 

3.  User picks credit card from Form of payment drop-down. Credit card details
    are sent **Guarantee/GuaranteeAccepted/PaymentCard.** Reservation message is
    sent. Once Reservation RS is returned by Hotel Supplier, trip is reserved.

![media](HotelRes1.jpg)

![media](HotelRes2.jpg)

 
### Read

Returns detailed information about a hotel reservation.

####Message structure


OTA_ReadRQ
|  Element |	Required	|  Description |
|----------|---------------------------------------|
|  RequestorID |	N	| The corporate identifier|
|  UniqueID |	Y	|  A reference to identify the booking.|

####Example request
```
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
```<UniqueID ID="88618333"></UniqueID> ```

In case the reservation has been cancelled, user's Itinerary will be updated accordingly after user click on Trip details.

>   **SOAPAction: read**

>   **OTA name:** HotelRead

![media](HotelRead1.jpg)

### Cancel

Allows user to cancel a reservation.

>   **SOAPAction:cancel**

>   **OTA name:** Cancel

####Message structure


OTA_CancelRQ
|  Element |	Required	|  Description |
|----------|---------------------------------------|
|  RequestorID |	N	| The corporate identifier|
|  UniqueID |	Y	|  A reference to identify the booking.|
|	Type  | Y |  A reference to the type of object defined by the UniqueID element.  | 

OTA_CancelRS
|  Element |	Required	|  Description |
|----------|---------------------------------------|
|  UniqueID |	Y	|  A reference to identify the booking  reference.|
|  UniqueID |	Y	|  A reference to identify the cancelation reference.|
|  Status |	Y |  If cancelation is successful or not.|
|	Type  | Y |  A reference to the type of object defined by the UniqueID element.  | 

####Example request 
```
   <OTA_CancelRQ xmlns="http://www.opentravel.org/OTA/2003/05">
      <UniqueID Type="14" ID="88618333"></UniqueID>
    </OTA_CancelRQ>
 ```

####Example response
  ```
  <OTA_CancelRS xmlns="http://www.opentravel.org/OTA/2003/05" xmlns:ns2="http://www.concur.com/webservice/auth" Status="Cancelled">
      <Success/>
      <UniqueID ID="88618333" Type="14"/>
      <UniqueID ID="27607" Type="15"/>
    </OTA_CancelRS>
```


#### Use case scenario:

1.  User cancels his trip by hitting on Cancel button on Itinerary. Cancel RQ is
    sent by Concur.

-   **UniqueID** with **Type="14"** identifies the reservation to cancel.
   
   **Cancel response** should have two **UniqueIDs.** One is the reservation ID (same one as in request), one Cancelation Confirmation number for further dispute usage
    between user and hotel/reservation system:


    ```
	<UniqueID ID="88618333" Type="14"/>
    <UniqueID ID="27607" Type="15"/>```
	
	
2.  Company has workflow setup to perform automatic cancelation. Exactly same
    Cancel RQ is sent by Concur, as in case of cancelation by user.


Errors and Warnings
-------------------
The Hotel Supplier can use HTTP error codes for system-level errors, like HTTP 500 Internal Server Error in case of an unexpected condition was encountered and no more specific message is suitable;
HTTP 403 in case of wrong password in SOAP header. 

For application errors, the Hotel Supplier should use OTA Error codes (link) to send information about Error
and Warring in corresponding nodes of each message:

```
<Errors>
				<Error  Type=”13” Code="322" ShortText="1111"/>
			</Errors>
```
Concur will process error codes automatically to create errror messages for users.
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
| 320 | Invalid value | Comma separated node or attribute and sent value should be provided in ShortText. |  
| 321 | Required field missing | Comma separated node or attribute and sent value  should be provided in ShortText. |  
| 322 | No availability | Hotel Codes should be provided in ShortText. |  
| 351 |	Credit card guarantee not accepted at hotel |  PaymentCardType should be provided in ShortText. |
| 365 |	Error credit card | For other than specified credit card errors, no information should be sent in ShortText. |
| 385 |	Invalid confirmation or cancellation number | Reservation ID should be provided in ShortText. |
| 420 |	Need e-mail address | |
| 424 |	No hotels found which match this input |Search parameters - geocode and radius should be provided in ShortText as tokenized list: GEOCODE:xxx,RADIUS:yyy |
| 400 | Invalid property code | List of comma separated Hotel Codes should be provided in ShortText.  |
| 438 |	Requested rate not available | List of comma separated RatePlanID's should be provided in ShortText. |
| 748 | Invalid corporate ID | Requestor ID should be provided in ShortText. |

In case of request structure not parsed by the Hotel Supplier, the Protocol violation Error should be returned, with details 
```
<Errors>
				<Error  Type=”7” ShortText="1111"/>
			</Errors>
```

Other files
-----------------
Authentication schema

![media](Authentication.xsd)

Concur version of the OTA schema

![media](HotelService2-brief.xsd)

Stylesheet for the schema. Download in the same folder as .xsd file and open in web browser.
![media](xs3p_better_doc.xsl)

OTA codelist

![media](OpenTravel_CodeList_2015_07_15.xlsm)

