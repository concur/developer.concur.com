---
title: Post a transportation search
layout: reference
---




##  Description

A post transportation search request is sent when the Travel user searches for ground transportation.

## Request

### URI                                                                                

The Ground Transportation direct connect sends the relevant information to a URI that the travel supplier maintains. The standard location is:

`https://{servername}/concur/groundtransportation`

The URI is configured by the supplier when registering the partner application. 

### Headers

#### Accept header
application/xml

#### Authorization header
Authorization header with OAuth credentials.

### Request Body
The request will contain a **CC_LimoSearchRequest** parent element, containing the following child elements.

**ServiceType**: The type of service requested. Will contain one of the following values:

100: Point to point  
110: One way to airport  
111: One way from airport  
120: One way to train station  
121: One way from train station  
200: Hourly  
300: Airport to airport

**ClassOfService**: The requested service class. Will contain one of the following values:

100: Normal  
200: High  
300: Highest

If this value is not provided by the user, it will default to 100. 

**PickupLocation**: The pick up location. This parent element contains the following child elements:

#### PickupLocation elements

|  Element    |  Description |
|-----------|-----------|
|  LocationType |  One of the following: 100 - Address, 200 - Airport, 300 - Train station. |
|  Airport |  Refer to the Airport Elements table. Provided if the LocationType = 200. |
|  TrainStation |  Refer to the Train Station Elements table. Provided if the LocationType = 300. |
|  Address |  The street address of the location. Provided if the LocationType = 100. |
|  City |  The location city. |
|  State |  The location state. Preferably 2 characters, max 10 characters. |
|  Country |  The location's <a href="https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2" target="_blank">2 character ISO 3166-1 alpha-2</a> country code. Example: US |
|  PostalCode |  The location postal code. |
|  ExtraNotes |  Additional notes about the location. Example: Ring doorbell, Holiday Inn, etc. |

**DropoffLocation**: The drop off location. This parent element contains the following child elements:

#### DropoffLocation elements

|  Element    |  Description |
|-----------|-----------|
|  LocationType |  One of the following: 100 - Address, 200 - Airport, 300 - Train station. |
|  Airport |  Refer to the Airport Elements table. Provided if the LocationType = 200. | 
|  TrainStation |  Refer to the Train Station Elements table. Provided if the LocationType = 300. |
|  Address |  The street address of the location. Provided if the LocationType = 100. |
|  City |  The location city. |
|  State |  The location state. Preferably 2 characters, max 10 characters. |
|  Country |  The location's <a href="http://en.wikipedia.org/wiki/ISO_3166-1_alpha-2" target="_blank">2 character ISO 3166-1 alpha-2</a> country code. Example: US |
|  PostalCode |  The location postal code. |
|  ExtraNotes |  Additional notes about the location. Example: Apartment building, gravel driveway, etc. |

**StartDateTime**:  The time, in GMT, that the reservation must begin. **Format**: 2015-05-19T18:00:00 

**EndDateTime**:  The time, in GMT that the reservation will end. Provided for hourly reservations. **Format**: 2015-05-19T18:00:00 

**PickupInstructions**: Additional instructions about the pick up request. 

**DropoffInstructions**: Additional instructions about the drop off request. 

**LanguageCode**: The language of the traveler. Will be one of the following options:

en: English  
en-us: English (US)  
en-gb: English (UK)  
fr: French  
fr-ca: French (Canadian)  
de: German  
pt: Portuguese  
es: Spanish  
nl: Dutch  
it: Italian  
ja: Japanese  
pl: Polish  
pt-br: Portuguese (Brazilian)  
ru: Russian  
hu: Hungarian  
ko: Korean  
sv: Swedish  
zh-cn: Chinese  
zh-tw: Traditional Chinese

**Currency**: The <a href="http://en.wikipedia.org/wiki/ISO_4217" target="_blank">3-letter ISO 4217 currency code</a> for the reservation amount. 

**NumPassengers**: The number of passengers. 

**VehicleType**: The type of vehicle requested. Will be one of the following options:

100: Sedan  
200: Limo  
201: Stretch Limo  
300: SUV  
301: Stretch SUV  
400: Van  
401: Mini-Bus  
402: Bus  
500: Motor Coach  
501: Antique/Classic  
502: Trolley  
503: Carriage  
600: Shuttle  
900: Any

**DiscountCode**: The discount code information. This parent element contains the following child elements:

#### DiscountCode elements

|  Element    |  Description |
|-----------|-----------|
|  CorporateID |  The user's corporate ID. |
|  VendorCode |  The user's vendor code. | 
|  DiscountNumber |  The user's discount number. |

#### Airport Elements

**AirportCode**: The <a href="http://en.wikipedia.org/wiki/International_Air_Transport_Association_airport_code" target="_blank">IATA Code</a> for the airport.

**Flight**: The flight information. This parent element contains the following child elements:

#### Flight elements

|  Element    |  Description |
|-----------|-----------|
|  CarrierCode |  The airline code. |
|  FlightNumber |  The flight number. |  
|  ArrivalDateTime |  The flight arrival time. Only provided for the PickupLocation element. **Format**: 2015-05-19T18:00:00 |
|  DepartureDateTime |  The flight departure time. Only provided for the DropoffLocation element. **Format**: 2015-05-19T18:00:00 |

#### Train Station elements

|  Element    |  Description |
|-----------|-----------|
|  StationCode |  The station code. |
|  StationName |  The name of the station. |
|  City |  The city the station is located in. |
|  State |  The state the station is located in. Preferably 2 characters, max 10 characters. |
|  Train |  The train information. This parent element contains the following child elements.

#### Train elements

|  Element    |  Description |
|-----------|-----------|
|  CarrierCode |  The code of the train carrier. |
|  CarrierName |  The name of the train carrier. | 
|  TrainNumber |  The train number. |
|  ArrivalDateTime |  The train arrival time. Only provided for the PickupLocation element. **Format**: 2015-05-19T18:00:00 |
|  DepartureDateTime |  The train arrival time. Only provided for the PickupLocation element. **Format**: 2015-05-19T18:00:00 |

##  Response

The supplier responds to the Limo Search request by returning the details of an available reservation that matches the search criteria.

### Content Types
application/xml

### Content Body                                                                                              
The response will include a **CC_LimoSearchReply** parent element, with the following child elements:  

**Error**: The error information, if an error occurred. Required. This parent element contains the following child elements:

#### Error elements

|  Element    |  Description |
|-----------|-----------|
|  ErrorCode |  The code for the error. Will contain one of the following values:<br/>100: Pickup/dropoff location related error<br/>200: Pickup/dropoff time related error<br/>300: Other request parameters related error<br/>400: Credential related error<br/>500: No rate/service available<br/>900: Unknown error |
| ErrorSource | The source of the error. |
| ErrorDescription | The additional error information. |

**RequestData**: This parent element contains a copy of the original request data. Only the **ServiceType**, **PickupLocation**, **DropoffLocation**, and **StartDateTime** elements are required. 

**Limos**: This parent element contains a **Limo** child element with the available reservation information. Refer to the Limo Elements table for the details of the child elements of the **Limo** element. 

#### Limo elements

**RateInfo**: The rate information for the limo. Refer to the Rate Information Elements table for more information. Required.

**Vehicle**: The type of vehicle. Required. This parent element contains the following child elements:

**VehicleType**: One of the following values:

100: Sedan  
200: Limo  
250: Stretch Limo  
300: SUV  
350: Stretch SUV  
400: Van  
450: Mini-Bus  
500: Motor Coach  
600: Shuttle  
700: Trolley  
800: Carriage  
900: Any

**Description**: The detailed description of the vehicle. 

**MaxPassengers**: The maximum number of passengers allowed in the vehicle. Must be greater than zero.

**VehicleID**:  Information to identify the specific vehicle.

**Vendor**: The reservation vendor. Required. This parent element contains the following child elements:

#### Vendor elements

|  Element    |  Description |
|-----------|-----------|
|  VendorCode |  The vendor code for the vendor. |
|  VendorName |  The vendor's name. | 
|  PhoneNumber: |  The vendor's phone number. |

**AcceptedFops**: The accepted forms of payment. Required. This parent element contains the **FormOfPayment** child element. The **FormOfPayment** element contains the allowed forms of payment. The possible child elements are:

#### FormOfPayment elements

|  Element    |  Description |
|-----------|-----------|
|  CreditCard |  This element will appear if the Credit Card form of payment is accepted. Contains the **Type** child element with one of the following values: AX - American Express, CA - Master Card, VI - Visa, DS - Discover Card, DC - Diners Club |
|  Cash |  This element will appear if the Cash form of payment is accepted. | 
|  Check |  This element will appear if the Check form of payment is accepted. |
|  DirectBilling |  This element will appear if the Direct Billing form of payment is accepted. |

#### Rate Information Elements 

|  Element |  Required? |  Description |
|  RateID |  Y |  The rate identifier. |
|  Rate |  Y |  The BasePrice + ServiceCharge + SurCharge + Tax |
|  RateTypeCode |  Y |  The code for the rate type. Will be one of the following options:<br/>F: Flat rate<br/>H: Hourly<br/>E: Estimated amount<br/>N: Currently not available |
|  CategoryCode |  N |  Extra information that will be passed back during sell request to help identify the rate. |
|  Currency |  Y |  The <a href="http://en.wikipedia.org/wiki/ISO_4217" target="_blank">3-letter ISO 4217 currency code</a> for the rate amount. |
|  NoRateText |  N |  Explanation of rate type. Provided if RateTypeCode = N |
|  MinHours |  N |  The minimum number of hours for the reservation. |
|  DiscountType |  N |  The type of discount applied. |
|  BasePrice |  N |  The reservation price without taxes, surcharges or service charges. |
|  ServiceCharge |  N |  The service charge for the reservation. |
|  SurCharge |  N |  This element contains the desc attribute, with text describing the reason for the surcharge. Example: `<SurCharge desc="fuel">` |
|  Tax |  N |  The reservation tax. |
|  ExtraPickupCharge |  N |  Any additional fees for the pickup service. |
|  ExtraDropoffCharge |  N |  Any additional fees for the drop off service. |
|  OptionalExtraStopCharge |  N |  The charge for any additional stops. |
|  OptionalExtraTimeCharge |  N |  The charge for each additional hour. |

## Examples

###  XML Example Request

```xml
    POST /concur/groundtransportation HTTPS/1.1
    Host: example.com
    Authorization: Basic ...
    Content-Type: application/xml
    Content-Length: {length of content body}

    <CC_LimoSearchRequest>
        <ServiceType>110</ServiceType>
        <ClassOfService>100</ClassOfService>
        <PickupLocation>
            <LocationType>100</LocationType>
            <Airport>
                <AirportCode />
            </Airport>
            <Address>209 Madison St., Suite 400</Address>
            <City>Alexandria</City>
            <State>VA</State>
            <Country>US</Country>
            <PostalCode>22314</PostalCode>
        </PickupLocation>
        <DropoffLocation>
            <LocationType>200</LocationType>
            <Airport>
                <AirportCode>DCA</AirportCode>
            </Airport>
            <Address />
            <City />
            <State />
            <Country />
            <PostalCode />
        </DropoffLocation>
        <StartDateTime>2012-03-14T09:00</StartDateTime>
        <EndDateTime />
        <PickupInstructions />
        <DropoffInstructions />
        <LanguageCode>en-us</LanguageCode>
        <Currency>USD</Currency>
        <NumPassengers>1</NumPassengers>
        <DiscountCode />
        <VehicleType>100</VehicleType>
    </CC_LimoSearchRequest>
```

###  XML Example of Successful Response

```xml
    200 OK HTTPS/1.1
    Content-Length: {length of content body}

    <CC_LimoSearchReply size="1396" elaspedMs="782">
        <Error>
            <ErrorCode />
            <ErrorSource />
            <ErrorDescription />
        </Error>
        <RequestData>
            <ServiceType>110</ServiceType>
            <ClassOfService>100</ClassOfService>
            <PickupLocation>
                <Airport />
                <Address>209 Madison St. #400</Address>
                <City>Alexandria</City>
                <State>VA</State>
                <Country>US</Country>
                <PostalCode>22314</PostalCode>
            </PickupLocation>
            <DropoffLocation>
                <Airport>DCA</Airport>
                <Address />
                <City />
                <State />
                <Country />
                <PostalCode />
            </DropoffLocation>
            <StartDateTime>2012-02-19T09:00:00</StartDateTime>
            <EndDateTime />
            <PickupInstructions />
            <DropoffInstructions />
            <Country>US</Country>
            <NumPassengers>1</NumPassengers>
            <VehicleType>100</VehicleType>
        </RequestData>
        <Limos>
            <Limo>
                <RateInfo>
                    <RateID>1</RateID>
                    <Rate>42.50</Rate>
                    <RateTypeCode>100</RateTypeCode>
                    <CategoryCode />
                    <MinHours />
                    <Currency>USD</Currency>
                    <NoRateText />
                    <DiscountType />
                    <BasePrice>35.00</BasePrice>
                    <ServiceCharge>5.00</ServiceCharge>
                    <SurChange desc="fuel">1.00</SurChange>
                    <Tax>1.50</Tax>
                    <ExtraPickupCharge />
                    <ExtraDropoffCharge />
                    <OptionalExtraStopCharge />
                    <OptionalExtraTimeCharge />
                    <Message>Ordinary Limo</Message>
                </RateInfo>
                <Vehicle>
                    <VehicleType>Sedan</VehicleType>
                    <Description>This is a Sedan.</Description>
                    <MaxPassengers>1</MaxPassengers>
                    <VehicleID>12</VehicleID>
                </Vehicle>
                <Vendor>
                    <VendorCode>LML</VendorCode>
                    <VendorName>LimoVendor</VendorName>
                    <PhoneNumber>4354654654</PhoneNumber>
                </Vendor>
                <AcceptedFops>
                    <FormOfPayment>
                        <CreditCard>
                            <Type>VI</Type>
                        </CreditCard>
                    </FormOfPayment>
                </AcceptedFops>
            </Limo>
        </Limos>
    </CC_LimoSearchReply>
```
  


[1]: https://developer.concur.com/overview/partner-applications
[2]: https://developer.concur.com/oauth-20
[3]: https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2
[4]: https://en.wikipedia.org/wiki/ISO_4217
[5]: https://en.wikipedia.org/wiki/International_Air_Transport_Association_airport_code
