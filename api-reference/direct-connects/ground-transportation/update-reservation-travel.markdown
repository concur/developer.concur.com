---
title: Update reservation with Travel 
layout: reference
---




## Description
This request is sent when the ground transportation service provider needs to send an update to the reservation to Travel.

## Request

### URI

`https://app2.outtask.com/api/tws/v1.0/Limo/PostBack`

### Headers

#### Accept header
application/xml

#### Authorization header

Authorization header with OAuth credentials. Required. Refer to the OAuth documentation for more information.

Authorization: OAuth {OAuth access token associated with the account making the call with Web Services Administrator role} 

### Request body

The request will contain a **CC_LimoPostBackRequest** parent element, containing the following child elements: 

|  Element |  Required? |  Description |
|-------------|----------|----------------------|
|  Error |  Y |  The error information, if an error occurred. For information about the child elements of this parent element, see the **Error elements** table below.|
|  ReservationID |  N |  The identifier for the reservation. |
|  Status |  N |  The status of the reservation. The value will be one of the following:<br/>RB: Reservation Booked  <br/>RA: Reservation Accepted  <br/>RD: Reservation Declined  <br/>CB: Change Booked  <br/>CA: Change Accepted  <br/>CD: Change Declined  <br/>XB: Cancellation Requested  <br/>XA: Cancellation Accepted  <br/>XD: Cancellation Declined  <br/>RC: Reservation Closed |
|  ConfNum |  N |  The confirmation number for the reservation. |
|  CancelPolicy |  N |  The cancellation policy for the reservation. |
|  CancelNum |  N |  The cancellation number for the reservation. |
|  PrimaryPassenger |  Y |  The passenger contact name for the reservation. For information about the child elements of this parent element, see the **PrimaryPassenger elements** table below. |
|  ServiceType |  Y |  The type of service requested. Will contain one of the following values: <br/>100: Point to point  <br/>110: One way to airport  <br/>111: One way from airport  <br/>120: One way to train station  <br/>121: One way from train station  <br/>200: Hourly  <br/>300: Airport to airport |
|  ClassOfService |  N |  The requested service class. Will contain one of the following values:<br/>100: Normal  <br/>200: High  <br/>300: Highest<br/><br/>If this value is not provided by the user, it will default to 100. |
|  PickupLocation |  Y |  The pick up location. For information about the child elements of this parent element, see the **PickupLocation elements** table below. |
|  DropoffLocation |  Y |  The drop off location. For information about the child elements of this parent element, see the **DropoffLocation elements** table below. |
|  StartDateTime |  Y |  The time, in GMT, that the reservation must begin. **Format**: 2015-05-19T18:00:00 |
|  EndDateTime |  N |  The time, in GMT that the reservation will end. Provided for hourly reservations. **Format**: 2015-05-19T18:00:00 |
|  PickupInstructions |  N |  Additional instructions about the pick up request. |
|  DropoffInstructions |  N |  Additional instructions about the drop off request. |
|  LanguageCode |  Y |  The language of the traveler. Will be one of the following options: <br/>en: English  <br/>en-us: English (US)  <br/>en-gb: English (UK)  <br/>fr: French  <br/>fr-ca: French (Canadian)  <br/>de: German  <br/>pt: Portuguese  <br/>es: Spanish  <br/>nl: Dutch  <br/>it: Italian  <br/>ja: Japanese  <br/>pl: Polish  <br/>pt-br: Portuguese (Brazilian)  <br/>ru: Russian  <br/>hu: Hungarian  <br/>ko: Korean  <br/>sv: Swedish  <br/>zh-cn: Chinese  <br/>zh-tw: Traditional Chinese|
|  Currency |  Y |  The <a href="http://en.wikipedia.org/wiki/ISO_4217" target="_blank">3-letter ISO 4217 currency code</a>
 for the reservation amount. |
|  NumPassengers |  N |  The number of passengers. |
|  RequestedDriver |  N |  The name of the requested driver, if available. |
|  SpecialServiceRequest |  N |  The details of the special service request, if available. |
|  PickupServiceArrangement |  N |  The details of the pickup arrangement, if available. |
|  DropoffServiceArrangement |  N |  The details of the dropoff arrangement, if available. |
|  ExtraStopArrangement |  N |  The details of the extra stop arrangement, if available. |
|  RateInfo |  Y |  The booked rate details. Refer to the Rate Information Elements table for more information. |
|  Vehicle |  Y |  The vehicle details. For information about the child elements of this parent element, see the **Vehicle elements** table below. |
|  Vendor |  Y |  The reservation vendor. For information about the child elements of this parent element, see the **Vendor elements** table below. |
|  FormOfPayment |  Y |  The form of payment for the reservation. For information about the child elements of this parent element, see the **FormOfPayment elements** table below. |
|  RateDisclaimer |  N |  Disclaimer text about the rate. |
|  ProviderFeedback |  N |  Any additional feedback from the supplier. |
|  AccountingInfo |  N |  The accounting information for the reservation. This parent element contains one or more **AccountingField** elements: **AccountingField1** through **AccountingField5**. These fields contain detailed accounting information. |

#### Error elements

|  Element |  Description |
|-------------|----------------------|
|  ErrorCode |  The code for the error. Will contain one of the following values:<br/>100: Pickup/dropoff location related error <br/>200: Pickup/dropoff time related error  <br/>300: Other request parameters related error  <br/>400: Credential related error  <br/>500: No rate/service available  <br/>600: FOP related error  <br/>900: Unknown error |
|  ErrorSource |  The source of the error. |   
|  ErrorDescription |  The additional error information. |

#### PrimaryPassenger elements

|  Element |  Description |
|-------------|----------------------|
|  FirstName |  The contact's first name. |
|  LastName |  The contact's last name. | 
|  Phone |  The contact's phone number. |
|  Phone2 |  The contact's backup phone number. |
|  CellPhone |  The contact's cell phone number. |
|  EmailAddress |  The contact's email address. |

#### PickupLocation elements

|  Element |  Description |
|-------------|----------------------|
|  LocationType |  One of the following: 100 - Address, 200 - Airport, 300 - Train station. |
|  Airport |  Refer to the Airport Elements table. Provided if the LocationType = 200. |  
|  TrainStation |  Refer to the Train Station Elements table. Provided if the LocationType = 300. |
|  Address |  The street address of the location. Provided if the LocationType = 100. |
|  City |  The location city. |
|  State |  The location state. Preferably 2 characters, max 10 characters. |
|  Country |  The location's <a href="http://en.wikipedia.org/wiki/ISO_3166-1_alpha-2" target="_blank">2 character ISO 3166-1 alpha-2</a> country code. Example: US |
|  PostalCode |  The location postal code. |
|  ExtraNotes |  Additional notes about the location. Example: Ring doorbell, Holiday Inn, etc. |

#### DropoffLocation elements

|  Element |  Description |
|-------------|----------------------|
|  LocationType |  One of the following: 100 - Address, 200 - Airport, 300 - Train station, 400 - As directed. |
|  Airport |  Refer to the Airport Elements table. Provided if the LocationType = 200. |  
|  TrainStation |  Refer to the Train Station Elements table. Provided if the LocationType = 300. |
|  Address |  The street address of the location. Provided if the LocationType = 100. |
|  City |  The location city. |
|  State |  The location state. Preferably 2 characters, max 10 characters. |
|  Country |  The location's <a href="http://en.wikipedia.org/wiki/ISO_3166-1_alpha-2" target="_blank">2 character ISO 3166-1 alpha-2</a> country code. Example: US |
|  PostalCode |  The location postal code. |
|  ExtraNotes |  Additional notes about the location. Example: Apartment Building, gravel driveway, etc. |

#### Vehicle elements

|  Element |  Description |
|-------------|----------------------|
|  VehicleType |  One of the following values:  <br/>100: Sedan  <br/>200: Limo  <br/>250: Stretch Limo  <br/>300: SUV  <br/>350: Stretch SUV  <br/>400: Van  <br/>450: Mini-Bus  <br/>500: Motor Coach  <br/>600: Shuttle  <br/>700: Trolley  <br/>800: Carriage  <br/>900: Any |
|  Description |  The vehicle description. | 
|  MaxPassengers |  The maximum number of passengers for the car. Must be greater than zero. |
|  VehicleID |  Information to identify the specific vehicle. |

#### Vendor elements

|  Element |  Description |
|-------------|----------------------|
|  VendorCode |  The vendor code for the vendor. |
|  VendorName |  The vendor's name. |   
|  PhoneNumber |  The vendor's phone number. |

#### FormOfPayment elements

|  Element |  Description |
|-------------|----------------------|
|  CreditCard |  If present, the passenger will pay with credit card. Refer to the Reply Credit Card Elements table for the child elements. |
|  Cash |  If present, the passenger will pay cash. |  
|  Check |  If present, the passenger will pay with a check. |
|  DirectBilling |  If present, the passenger will pay through direct billing. |

#### Airport elements

|Element Name|Description|
|------------|--------------------|
|AirportCode	 |The IATA code for the airport.|
|Flight	 |The flight information. For information about the child elements of this parent element, see the **Flight elements** table below.|

#### Flight elements

|Element Name|Description|
|------------|----------------|
|CarrierCode |The airline code.|
|FlightNumber|	The flight number.|
|ArrivalDateTime| The flight arrival time. Only provided for the PickupLocation element. Format: 2015-05-19T18:00:00|
|DepartureDateTime| The flight departure time. Only provided for the DropoffLocation element. Format: 2015-05-19T18:00:00|

#### Train Station elements

|Element Name|Required/Optional|Data Type|Description|
|------------|-----------------|---------|-----------|
|StationCode|	| |The station code.|
|StationName|	| |The name of the station.|
|City | | |The city the station is located in.|
|State|	| |The state the station is located in. Preferably 2 characters, max 10 characters.|
|Train|	| |The train information. For information about the child elements of this parent element, see the **Train elements** table below. |

#### Train Child Elements

|Element Name|Description|
|------------|--------------------------|
|CarrierCode	 |The code of the train carrier.|
|CarrierName	  |The name of the train carrier.|
|TrainNumber |The train number.|
|ArrivalDateTime |The train arrival time. Only provided for the PickupLocation element. Format: 2015-05-19T18:00:00|
|DepartureDateTime |The train arrival time. Only provided for the PickupLocation element. Format: 2015-05-19T18:00:00|

#### Rate Information elements

|Element Name|Required?|Data Type|Description|
|------------|-----------------|---------|-----------|
|RateID	|Y| |The rate identifier.|
|Rate	|Y| |The BasePrice + ServiceCharge + SurCharge + Tax|
|RateTypeCode	|Y| |	The code for the rate type. Will be one of the following options: <br>F: Flat rate <br>H: Hourly <br>E: Estimated amount <br>N: Currently not available|
|CategoryCode	|N|	|Extra information that will be passed back during sell request to help identify the rate.|
|Currency	|Y|	|The 3-letter ISO 4217 currency code for the rate amount.|
|NoRateText	|N|	|Explanation of rate type. Provided if RateTypeCode = N|
|MinHours	|N|	|The minimum number of hours for the reservation.|
|DiscountType	|N|	|The type of discount applied.|
|BasePrice	|N|	|The reservation price without taxes, surcharges or service charges.|
|ServiceCharge	|N|	|The service charge for the reservation.|
|SurCharge	|N|	|This element contains the desc attribute, with text describing the reason for the surcharge. Example: `<SurCharge desc="fuel">`|
|Tax	|N|	|The reservation tax.|
|ExtraPickupCharge	|N|	|Any additional fees for the pickup service.|
|ExtraDropoffCharge	|N|	|Any additional fees for the drop off service.|
|OptionalExtraStopCharge	|N|	|The charge for any additional stops.|
|OptionalExtraTimeCharge	|N|	|The charge for each additional hour.|

#### Credit Card elements

|Element Name|Required?|Data Type|Description|
|------------|-----------------|---------|-----------|
|Type|Y|The card type.|
|Number|Y|The card number.|
|Expiration|Y|The card expiration date. Format: 2013-02-19|

### XML example request

```xml
POST /api/tws/v1.0/Limo/PostBack HTTPS/1.1
Host: app2.outtask.com/
Authorization: Basic ...
Content-Type: application/xml
Content-Length: {length of content body}

<CC_LimoPostBackRequest>
    <Error>
        <ErrorCode />
        <ErrorSource />
        <ErrorDescription />
    </Error>
    <ReservationID>1234</ReservationID>
    <Status>CB</Status>
    <ConfNum/>
    <CancelPolicy />
    <CancelNum/>
    <PrimaryPassenger>
        <FirstName>Chris</FirstName>
        <LastName>Miller</LastName>
        <Phone>5551234567</Phone>
        <Phone2>5551234568</Phone2>
        <CellPhone>5551234555</CellPhone>
        <EmailAddress>cmiller@example.com</EmailAddress>
    </PrimaryPassenger>
    <ServiceType>110</ServiceType>
    <ClassOfService />
    <PickupLocation>
        <LocationType>100</LocationType>
        <Airport>
            <AirportCode />
            <Flight>
                <CarrierCode />
                <FlightNumber />
                <ArrivalDateTime />
            </Flight>
        </Airport>
        <TrainStation>
            <StationCode />
            <StationName />
            <City />
            <State />
            <Train>
                <CarrierCode />
                <CarrierName />
                <TrainNumber />
            </Train>
        </TrainStation>
        <Address>209 Madison St #400</Address>
        <City>Alexandria</City>
        <State>VA</State>
        <Country>US</Country>
        <PostalCode>22314</PostalCode>
        <ExtraNotes />
    </PickupLocation>
    <DropoffLocation>
        <LocationType>200</LocationType>
        <Airport>
            <AirportCode>DCA</AirportCode>
            <Flight>
                <CarrierCode>UA</CarrierCode>
                <FlightNumber>333</FlightNumber>
                <DepartureDateTime>2012-02-19T11:29:00</DepartureDateTime>
            </Flight>
        </Airport>
        <TrainStation>
            <StationCode />
            <StationName />
            <City />
            <State />
            <Train>
                <CarrierCode />
                <CarrierName />
                <TrainNumber />
                <DepartureDateTime />
            </Train>
        </TrainStation>
        <Address />
        <City />
        <State />
        <Country />
        <PostalCode />
        <ExtraNotes />
    </DropoffLocation>
    <StartDateTime>2012-02-19T09:00:00</StartDateTime>
    <EndDateTime />
    <PickupInstructions>pick me up</PickupInstructions>
    <DropoffInstructions>None</DropoffInstructions>
    <LanguageCode>en-us</LanguageCode>
    <Currency>USD</Currency>
    <NumPassengers>1</NumPassengers>
    <RequestedDriver />
    <SpecialServiceRequest />
    <PickupServiceArrangement />
    <DropoffServiceArrangement />
    <ExtraStopArrangement />
    <RateInfo>
        <RateID>5</RateID>
        <Rate>42.50</Rate>
        <RateTypeCode>E</RateTypeCode>
        <CategoryCode />
        <MinHours />
        <Currency>US</Currency>
        <NoRateText />
        <DiscountType />
        <BasePrice>35.00</BasePrice>
        <ServiceCharge>5.00</ServiceCharge>
        <SurCharge desc="fuel">1.00</SurCharge>
        <Tax>1.50</Tax>
        <ExtraPickupCharge />
        <ExtraDropoffCharge />
        <OptionalExtraStopCharge />
        <OptionalExtraTimeCharge />
        <Message />
    </RateInfo>
    <RateDisclaimer />
    <Vehicle>
        <VehicleType>100</VehicleType>
        <Description>This is a Sedan.</Description>
        <MaxPassengers>1</MaxPassengers>
        <VehicleID>12</VehicleID>
    </Vehicle>
    <Vendor>
        <VendorCode>LML</VendorCode>
        <VendorName>LimoVendor</VendorName>
        <PhoneNumber>4354654654</PhoneNumber>
    </Vendor>
    <ProviderFeedback />
    <FormOfPayment>
        <Cash />
        <Check />
        <DirectBilling />
        <CreditCard>
            <Type>VI</Type>
            <Number>XXXXXXXXXXXX1111</Number>
            <Expiration>2013-02-19</Expiration>
        </CreditCard>
    </FormOfPayment>
    <AccountingInfo>
        <AccountingField1>715</AccountingField1>
        <AccountingField2>temp@outtask.com</AccountingField2>
        <AccountingField3>11</AccountingField3>
        <AccountingField4>Development</AccountingField4>
        <AccountingField5/>
    </AccountingInfo>
</CC_LimoPostBackRequest>
```

## Response

Concur responds to the supplier request with a result message.

### Content Types
application/xml

### Response body

The response will include a **CC_LimoPostBackResponse** parent element, with the following child elements:

**Successful post:**

|Element Name|Description|
|------------|--------------------------|
|Success|This element contains the message detailing the change.|

**Failed post:**

|Element Name|Description|
|------------|--------------------------|
|Version|The API version, currently 1.0.|
|Error|This element contains the error text.|

### XML example of successful response

```xml
200 OK HTTPS/1.1 
<CC_LimoPostBackResponse>
    <Success>Updated Trip Status successfully.</Success>
</CC_LimoPostBackResponse>
```

### XML example of response with error

```xml
<CC_LimoPostBackResponse>
    <Version>1.0</Version>
    <Error>This reservation does not exist in the Concur database.</Error>
</CC_LimoPostBackResponse>
```


[1]: http://en.wikipedia.org/wiki/ISO_3166-1_alpha-2
[2]: http://en.wikipedia.org/wiki/ISO_4217
