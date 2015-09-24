---
title: Cancel a reservation
layout: reference
---

## Description
The Cancel Reservation operation is sent to the supplier to cancel a travel reservation on behalf of a user. The Ground Transportation direct connect sends the relevant information to a URI that the travel supplier maintains.  The standard location is: `https://{servername}/concur/groundtransportation`. This URI is configured by the supplier when registering the partner application.

## Request

### URI
`/concur/groundtransportation`

### Headers

#### Content-Type header (optional)
* application/xml  

#### Accept header (optional)
* application/xml  

#### Authorization header (required)

The Authorization header must include Base64 encoded basic authentication credentials (login ID and password). The login and password are established when the application connector is registered.

'Authorization: Basic {Base64 encoded LoginID:Password}'

### Request Body

The request containa a `CC_LimoCancelRequest` parent element with the child elements listed in the following table:

|  Element |  Required/Optional |  Description |
|:---------|:------------------|:--------------|
| ReservationID | Required |The unique identifier for the reservation.

#### Example Request
```XML
  POST /concur/groundtransportation HTTPS/1.1
  Host: example.com
  Authorization: Basic ...
  Content-Type: application/xml
  Content-Length: {length of content body}


  <CC_LimoCancelRequest>
      <ReservationID>1234</ReservationID>
  </CC_LimoCancelRequest>
```

## Response
The supplier responds to the request by supplying the full reservation details, with the updated status.

### Content Type

* application/xml

### Content Body
The response will include a CC_LimoCancelReply parent element, with the following child elements:


|  Element |  Required? |  Description |
|:---------|:------------------|:--------------|
|  Error |  Y |  The error information, if an error occurred. This parent element contains the following child elements:<br>**ErrorCode:**  The code for the error. Will contain one of the following values:<br><br> 400: Credential related error <br> 800: Reservation cannot be cancelled <br>900: Unknown error  <br>**ErrorSource:** The source of the error.<br>**ErrorDescription:**The additional error information.|
|  ReservationID |  N |  The identifier for the reservation. |
|  Status |  N |  The status of the reservation. The value will be one of the following:<br>XB: Cancellation Requested  <br>XA: Cancellation Accepted  <br>XD: Cancellation Declined|
|  ConfNum |  N |  The confirmation number for the reservation. |
|  CancelPolicy |  N |  The cancellation policy for the reservation. |
|  CancelNum |  N |  The cancellation number for the reservation. |
|  PrimaryPassenger |  Y |  The passenger contact name for the reservation. This parent element contains the following child elements:<br>** FirstName:** The contact's first name.<br>**LastName:** The contact's last name.<br>**Phone:** The contact's phone number.<br>**Phone2:** The contact's backup phone number.<br>**CellPhone:** The contact's cell phone number.<br>**EmailAddress:** The contact's email address.|
|  ServiceType |  Y |  The type of service requested. Will contain one of the following values:<br>100: Point to point  <br>110: One way to airport  <br>111: One way from airport  <br>120: One way to train station  <br>121: One way from train station  <br>200: Hourly  <br>300: Airport to airport|
|  ClassOfService |  N |  The requested service class. Will contain one of the following values:<br>100: Normal  <br>200: High  <br>300: Highest  <br>If this value is not provided by the user, it will default to 100.|
|  PickupLocation |  Y |  The pick up location. This parent element contains the following child elements:<br>LocationType  One of the following: 100 - Address, 200 - Airport, 300 - Train station.<br>Airport Refer to the Airport Elements table. Provided if the LocationType = 200.<br>TrainStation  Refer to the Train Station Elements table. Provided if the LocationType = 300.<br>Address The street address of the location. Provided if the LocationType = 100.<br>City The location city.<br>State The location state. Preferably 2 characters, max 10 characters.<br>Country  The location's 2 character ISO 3166-1 alpha-2 country code. Example: US<br>PostalCode The location postal code.<br>ExtraNotes Additional notes about the location. Example: Ring doorbell, Holiday Inn, etc. |
|  DropoffLocation |  Y |  The drop off location. This parent element contains the following child elements:<br>LocationType  One of the following: 100 - Address, 200 - Airport, 300 - Train station, 400 - As directed.<br>Airport  Refer to the Airport Elements table. Provided if the<br>LocationType = 200.<br>TrainStation Refer to the Train Station Elements table. Provided if the LocationType = 300.<br>Address The street address of the location. Provided if the LocationType = 100.<br>City The location city.<br>State The location state.<br>Country  The location's 2 character ISO 3166-1 alpha-2 country code.<br>Example: US<br>PostalCode  The location postal code.<br>ExtraNotes Additional notes about the location. Example: Apartment Building, gravel driveway, etc.|
|  StartDateTime |  Y |  The time, in GMT, that the reservation must begin.  **Format**: 2015-05-19T18:00:00 |
|  EndDateTime |  N |  The time, in GMT that the reservation will end. Provided for hourly reservations. **Format**: 2015-05-19T18:00:00 |
|  PickupInstructions |  N |  Additional instructions about the pick up request. |
|  DropoffInstructions |  N |  Additional instructions about the drop off request. |
|  LanguageCode |  Y |  The language of the traveler. Will be one of the following options:<br>en: English  <br>en-us: English (US)  <br>en-gb: English (UK)  <br>fr: French  <br>fr-ca: French (Canadian)  <br>de: German  <br>pt: Portuguese  <br>es: Spanish  <br>nl: Dutch  <br>it: Italian  <br>ja: Japanese  <br>pl: Polish  <br>pt-br: Portuguese (Brazilian)  <br>ru: Russian  <br>hu: Hungarian  <br>ko: Korean  <br>sv: Swedish  <br>zh-cn: Chinese  <br>zh-tw: Traditional Chinese|
|  Currency |  Y |  The <a href="http://en.wikipedia.org/wiki/ISO_4217" target="_blank">3-letter ISO 4217 currency code</a> for the reservation amount. |
|  NumPassengers |  N |  The number of passengers. |
|  RequestedDriver |  N |  The name of the requested driver, if available. |
|  SpecialServiceRequest |  N |  The details of the special service request, if available. |
|  PickupServiceArrangement |  N |  The details of the pickup arrangement, if available. |
|  DropoffServiceArrangement |  N |  The details of the dropoff arrangement, if available. |
|  ExtraStopArrangement |  N |  The details of the extra stop arrangement, if available. |
|  RateInfo |  Y |  The booked rate details. Refer to the Rate Information Elements table for more information. |
|  Vehicle |  Y |  The vehicle details. This parent element contains the following child elements:<br>VehicleType One of the following values:<br>100: Sedan  <br>200: Limo  <br>250: Stretch Limo  <br>300: SUV  <br>350: Stretch SUV  <br>400: Van  <br>450: Mini-Bus  <br>500: Motor Coach  <br>600: Shuttle  <br>700: Trolley  <br>800: Carriage  <br>900: Any<br>Description: The vehicle description.<br>MaxPassengers: The maximum number of passengers for the vehicle. Must be greater than zero.<br>VehicleID: Information to identify the specific vehicle. |
|  Vendor |  Y |  The reservation vendor. This parent element contains the following child elements:<br>VendorCode:  The vendor code for the vendor. <br>VendorName:  The vendor's name.<br>PhoneNumber:  The vendor's phone number. |
|  FormOfPayment |  Y |  The form of payment for the reservation. This parent element contains one of the following child elements:<br>CreditCard:  If present, the passenger will pay with credit card. Refer to the Reply Credit Card Elements table for the child elements.<br>Cash:  If present, the passenger will pay cash.<br>Check:  If present, the passenger will pay with a check.<br>DirectBilling:  If present, the passenger will pay through direct billing. |
|  RateDisclaimer |  N |  Disclaimer text about the rate. |
|  ProviderFeedback |  N |  Any additional feedback from the supplier. |
|  AccountingInfo |  N |  The accounting information for the reservation. This parent element contains the following child elements:<br>AccountingField1  through AccountingField5<br>These fields contain detailed accounting information. |

##Rate Information Elements
|Element  |Required?| Description|
|---|:---:|---|
|RateID |Y  |The rate identifier.|
|Rate|  Y |The BasePrice + ServiceCharge + SurCharge + Tax|
|RateTypeCode |Y  |The code for the rate type. Will be one of the following options:<br>F: Flat rate<br>H: Hourly<br>E: Estimated amount<br>N: Currently not available|
|CategoryCode |N  |Extra information that will be passed back during sell request to help identify the rate.|
|Currency|  Y |The 3-letter ISO 4217 currency code for the rate amount.|
|NoRateText|  N |Explanation of rate type. Provided if RateTypeCode = N|
|MinHours |N  |The minimum number of hours for the reservation.|
|DiscountType|  N |The type of discount applied.|
|BasePrice| N |The reservation price without taxes, surcharges or service charges.|
|ServiceCharge| N |The service charge for the reservation.|
|SurCharge  |N  |This element contains the desc attribute, with text describing the reason for the surcharge. Example: <SurCharge desc="fuel">|
|Tax  |N  |The reservation tax.|
|ExtraPickupCharge| N|  Any additional fees for the pickup service.|
|ExtraDropoffCharge  |N |Any additional fees for the drop off service.|
|OptionalExtraStopCharge| N|  The charge for any additional stops.|
|OptionalExtraTimeCharge  |N| The charge for each additional hour.|

##Reply Credit Card Elements
|Element  |Required?  |Description|
|----|:----:|----|
|Type |Y  |The card type.|
|Number |Y  |The card number.|
|Expiration |Y  |The card expiration date. Format: 2013-02-19|

## Example of Successful Response
```XML
  200 OK HTTPS/1.1
  Content-Length: {length of content body}
  
  <CC_LimoCancelReply>
      <Error>
          <ErrorCode />
          <ErrorSource />
          <ErrorDescription />
      </Error>
      <ReservationID>1234</ReservationID>
      <Status>XB</Status>
      <ConfNum>4444</ConfNum>
      <CancelPolicy />
      <CancelNum>55555</CancelNum>
      <PrimaryPassenger>
          <FirstName>Chris</FirstName>
          <LastName>Miller</LastName>
          <Phone>5551234567</Phone>
          <Phone2>5551234568</Phone2>
          <CellPhone>5551234569</CellPhone>
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
                  <ArrivalDateTime />
              </Train>
          </TrainStation>
          <Address>209 Madison St</Address>
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
  </CC_LimoCancelReply>
```
[1]: http://en.wikipedia.org/wiki/ISO_3166-1_alpha-2
[2]: http://en.wikipedia.org/wiki/ISO_4217
