---
title: Guide to the Itinerary v1 API, TMC Edition
layout: reference
parent: TMC
nav_order: 1
---

# Guide to the Itinerary v1 API, TMC Edition
Last Revised: October 20 , 2020

This endpoint provides detailed travel itinerary information for a specified traveler or traveler’s trip ID. It compliments internal versions of travel itinerary data synchronizations to Travel Reporting tools, agency tools, or travel supplier queues. The Travel Itinerary API is publicly exposed and allows RESTful developed applications to retrieve the most recent information about a traveler’s trip regardless of booking source. Trip details include destination, departure and arrival
dates, flight details, lodging, transportation and company custom information. This version of the API was originally released in late 2012.

This guide is part of a collection designed for TMCs, to read the shared content about audience, development, authentication, and other key information see the [TMC Guide Overview]( /api-guides/tmc/tmc-overview.html).

##  Application Scopes

Development travel applications by default have the following scopes registered:

* openid
* user.read
* company.read
* FOP
* GHOST
* TRVPRF
* PASSV
* EMERG
* TSAI
* TMCSP
* MEDIC
* UNUTX
* NOTIF
* COMPD
* ITINER

Receipts (receipts.read, receipts.write, receipts.writeonly) and Travel Request scopes for development applications are available upon request.

For security purposes, production itinerary applications will have limited scopes registered. The designated scopes are:

* openid
* ITINER

Explanations for these scopes are documented here:

* https://developer.concur.com/api-reference/authentication/scopes.html#connectscopes
* https://developer.concur.com/api-reference/authentication/scopes.html#v4apiscopes

If you wish to have your application include additional scopes or endpoints, you must have your application re-certified.

## <a name="geolocation"></a>Geolocation

Host Location|Geolocation based on location of Company GUID|URL to use for Travel Itinerary
------|-----|-----
EMEA|https://emea.api.concursolutions.com/oauth2/v0/token|https://emea.api.Concursolutions.com/api/travelprofile/v2.0/profile
US|https://us.api.concursolutions.com/oauth2/v0/token|https://us.api.Concursolutions.com/api/travelprofile/v2.0/profile
PSCC|https://usg.api.Concursolutions.com/oauth2/v0/token|https://usg.api.Concursolutions.com/api/travelprofile/v2.0/profile

## User Profile Web Service

### Get User Information

https://developer.concur.com/api-explorer/v3-0/Users.html

If you are still in transition from legacy Profile Sync to the Travel Profile API, it may be necessary to use the User API to retrieve user’s login IDs or Email IDs – which the Travel Itinerary API v1.x Web Service uses as its matching fact for Travel Itinerary retrievals or updates.

### Retrieve UUID for All Active Users

GET

```
https://us.api.concursolutions.com/users?offset= 10 0&limit=100 0 &isactive=true
Authorization: Bearer {access_token}
```

### Retrieve UUID by Login ID

GET

```
https://us.api.concursolutions.com/users/?loginid=logind_id@domain
Authorization:Bearer {access_token}
```

### Retrieve UUID by Primary Email ID

GET

```
https://us.api.concursolutions.com/users/?primaryemail=email@domain.com
Authorization: Bearer {access_token}
```

RESPONSE

```
{
    "total": "1",
    "offset": 0,
    "limit": 100,
    "companyinfo": {
        "name": "Company Name, Inc",
        "address": "601 108th Ave NE \ Suite 1000",
        "city": "Bellevue",
        "state": "WA",
        "zip": "98004",
        "country": "US"
    },
    "Items": [
        {
            "Active": true,
            "CountryCode": "US",
            "CellPhoneNumber": "425-590-5000",
            "PrimaryEmail": "Email1@domain.com",
            "EmployeeID": 106,
            "ID": "### UUID ####",
            "Emails": {
                "PrimaryEmail": "Email1@domain.com",
                "VerifiedEmail": null,
                "email2": "Email2@domain.com",
                "email3": "",
                "email4": "",
                "email5": ""
            },
            "OrganizationUnit": null,
            "MiddleName": "Middle",
            "LastName": "Last
            "FirstName": "first",
            "LoginID": "login_id@domain.com"
        }
    ]
}
```

>NOTE: Store the concur-correlationid value returned in the header response for logging, troubleshooting, or case escalation purposes

>NOTE: Make note of the geolocation where the company user exists. If the user’s geolocation is unknown or incorrect, then default the request to https://us.api.concursolutions.com. An error message will return the correct geolocation for the user.

## Itinerary Web Service

The Itinerary Web Service allows Travel Management Companies (TMC), SAP Concur clients, and third-party developers to create, update and view travel related events in the Concur Travel system. TMCs may post bookings for any travel type but must register as an authorized Travel Supplier. This web service can also be used by SAP Concur clients and third-party developers to request trip information for Concur Travel users. The public Itinerary XSD can be found here. In
addition, the GetList XSD can be found here.

### Create a Basic Itinerary

https://developer.concur.com/api-reference/travel/itinerary-tmc-thirdparty/index.html#postdetails

https://developer.concur.com/api-reference/travel/itinerary/trip/trip-resource.html#postut

**REQUEST**

POST

```
{{geolocation}}
/api/travel/trip/v1.1/?userid_type=login_id&userid_value=user@domain.com

Authorization: Bearer {access_token}
```

BODY

```
<?xml version="1.0" encoding="UTF-8"?>
<Itinerary xmlns="http://www.concursolutions.com/api/travel/trip/2010/06">
   <RuleViolations />
   <ExternalLinks />
   <FormsOfId />
   <ClientLocator>XYZ123</ClientLocator>
   <ItinSourceName>AGENCY_OBT</ItinSourceName>
   <TripName>Trip from Milan to Rome2</TripName>
   <Comments />
   <StartDateLocal>2021-01-11T08:55:00</StartDateLocal>
   <EndDateLocal>2021-01-15T12:35:00</EndDateLocal>
   <StartDateUtc>2021-01-11T15:55:00</StartDateUtc>
   <EndDateUtc>2021-01-15T14:35:00</EndDateUtc>
   <TripStatus>0</TripStatus>
   <DateCreatedUtc>2020-01-06T09:05:16</DateCreatedUtc>
   <DateModifiedUtc>2020-01-06T09:05:16</DateModifiedUtc>
   <IsDemoTrip>false</IsDemoTrip>
   <ReminderEmailSent>false</ReminderEmailSent>
   <BookedByFirstName>AGENT-FIRST</BookedByFirstName>
   <BookedByLastName>AGENT-LAST</BookedByLastName>
   <IsBillable>false</IsBillable>
   <DateBookedLocal>2020-01-06T00:00:00-04:00</DateBookedLocal>
   <Bookings>
      <Booking>
         <Segments>
            <Hotel>
               <ConfirmationNumber>339920160201</ConfirmationNumber>
               <Currency>EUR</Currency>
               <DailyRate>150.0000</DailyRate>
               <DateCreatedUtc>2020-01-06T14:16:59</DateCreatedUtc>
               <DateModifiedUtc>2020-01-06T16:00:26</DateModifiedUtc>
               <EndDateLocal>2021-01-15T00:00:00</EndDateLocal>
               <Name>William Never01</Name>
               <NumPersons>1</NumPersons>
               <NumRooms>1</NumRooms>
               <RoomType>King</RoomType>
               <StartAddress>Hotel Novotel Roma Est</StartAddress>
               <StartCity>ROM</StartCity>
               <StartCountry>IT</StartCountry>
               <StartDateLocal>2021-01-11T13:59:59</StartDateLocal>
               <TotalRate>1000.0000</TotalRate>
               <Vendor>$$</Vendor>
               <VendorName>HRS</VendorName>
               <Charges>
                  <Rate>
                     <Amount>150.0000</Amount>
                     <Currency>EUR</Currency>
                     <IsPrimary>false</IsPrimary>
                     <NumUnits>4.0000</NumUnits>
                     <PerUnit>DAY</PerUnit>
                     <SemanticsCode>ROOMRATE</SemanticsCode>
                     <SemanticsVendorType>H</SemanticsVendorType>
                     <StartDateLocal>2021-01-11T14:00:00</StartDateLocal>
                  </Rate>
               </Charges>
            </Hotel>
            <Car>
               <AirCondition>R</AirCondition>
               <Body>C</Body>
               <Class>I</Class>
               <ConfirmationNumber>1252246711</ConfirmationNumber>
               <Currency>EUR</Currency>
               <DateCreatedUtc>2020-01-06T03:14:14</DateCreatedUtc>
               <DateModifiedUtc>2020-01-06T03:14:14</DateModifiedUtc>
               <DiscountCode>XZ23S17</DiscountCode>
               <EndCityCode>ROM</EndCityCode>
               <EndDateLocal>2021-01-15T09:00:00</EndDateLocal>
               <EndDateUtc>2021-01-15T17:00:00</EndDateUtc>
               <NumCars>1</NumCars>
               <PhoneNumber>8443708304</PhoneNumber>
               <RateCode>IH9564</RateCode>
               <StartCityCode>ROM</StartCityCode>
               <StartDateLocal>2021-01-11T15:00:00</StartDateLocal>
               <StartDateUtc>2021-01-15T23:00:00</StartDateUtc>
               <Status>HK</Status>
               <TotalRate>45.9100</TotalRate>
               <Transmission>A</Transmission>
               <Vendor>SX</Vendor>
               <VendorName>SIXT</VendorName>
               <Charges>
                  <RateWithAllowance>
                     <AllowanceIsUnlimited>true</AllowanceIsUnlimited>
                     <Amount>40.0000</Amount>
                     <Currency>EUR</Currency>
                     <IsPrimary>true</IsPrimary>
                     <NumUnits>1.0000</NumUnits>
                     <PerUnit>DAY</PerUnit>
                     <SemanticsCode>DAYS</SemanticsCode>
                     <SemanticsVendorType>C</SemanticsVendorType>
                     <StartDateLocal>2021-01-11T15:00:00</StartDateLocal>
                  </RateWithAllowance>
               </Charges>
            </Car>
            <Air>
               <ClassOfService>S</ClassOfService>
               <ConfirmationNumber />
               <EndCityCode>ROM</EndCityCode>
               <EndDateLocal>2021-01-15T08:30:00</EndDateLocal>
               <FlightNumber>2013</FlightNumber>
               <StartCityCode>MIL</StartCityCode>
               <StartDateLocal>2021-01-11T07:00:00</StartDateLocal>
               <Vendor>AZ</Vendor>
               <VendorName>Alitalia</VendorName>
               <ParseErrors />
               <RuleViolations />
               <Status>HK</Status>
               <VirtualCreditCardType />
               <OperatedByVendor />
               <OperatedByVendorName />
               <FareBasisCode />
               <Remarks />
               <Meals />
               <Bags />
               <PerDiemLocation />
               <IsPreferredVendor>1</IsPreferredVendor>
               <Duration>80</Duration>
               <NumStops>0</NumStops>
               <StartTerminal>LIN</StartTerminal>
               <EndTerminal>FCO</EndTerminal>
               <Miles>303</Miles>
               <Cabin />
               <AircraftCode>A320</AircraftCode>
               <Charges>
                  <Fixed>
                     <Currency>EUR</Currency>
                     <Amount>333.75</Amount>
                     <Description>Airline Price</Description>
                     <IsPaid>false</IsPaid>
                     <IsPrimary>true</IsPrimary>
                     <SemanticsVendorType>A</SemanticsVendorType>
                     <Vendor>AZ</Vendor>
                     <VendorName>Alitalia Airlines</VendorName>
                     <VendorChargeCode />
                     <SemanticsCode>SEGFEE</SemanticsCode>
                  </Fixed>
               </Charges>
               <Seats>
                  <AirSeat>
                     <PassengerRph>1</PassengerRph>
                     <Status />
                     <SeatNumber />
                  </AirSeat>
               </Seats>
            </Air>
            <Air>
               <ClassOfService>S</ClassOfService>
               <ConfirmationNumber />
               <EndCityCode>LIN</EndCityCode>
               <EndDateLocal>2021-01-15T08:20:00</EndDateLocal>
               <FlightNumber>2038</FlightNumber>
               <StartCityCode>FCO</StartCityCode>
               <StartDateLocal>2021-01-11T09:30:00</StartDateLocal>
               <Vendor>AZ</Vendor>
               <VendorName>Alitalia Airlines</VendorName>
               <ParseErrors />
               <RuleViolations />
               <Status>HK</Status>
               <VirtualCreditCardType />
               <OperatedByVendor />
               <OperatedByVendorName />
               <FareBasisCode />
               <Remarks />
               <Meals />
               <Bags />
               <PerDiemLocation />
               <IsPreferredVendor>1</IsPreferredVendor>
               <Duration>80</Duration>
               <NumStops>0</NumStops>
               <StartTerminal />
               <EndTerminal>LIN</EndTerminal>
               <Miles>303</Miles>
               <Cabin />
               <AircraftCode>A320</AircraftCode>
               <Charges>
                  <Fixed>
                     <Currency>EUR</Currency>
                     <Amount>335.75</Amount>
                     <Description>Airline Price</Description>
                     <IsPaid>false</IsPaid>
                     <IsPrimary>true</IsPrimary>
                     <SemanticsVendorType>A</SemanticsVendorType>
                     <Vendor />
                     <VendorChargeCode />
                     <SemanticsCode>SEGFEE</SemanticsCode>
                  </Fixed>
               </Charges>
               <Seats>
                  <AirSeat>
                     <PassengerRph>1</PassengerRph>
                     <Status />
                     <SeatNumber />
                  </AirSeat>
               </Seats>
            </Air>
         </Segments>
         <AirlineTickets />
         <AirfareQuotes>
            <Quote>
               <DateCreatedUtc>2020-10-06T09:05:16</DateCreatedUtc>
               <DateModifiedUtc>2020-10-06T09:05:16</DateModifiedUtc>
               <Taxes />
               <AirlineCharges />
               <TotalFare>400</TotalFare>
               <TotalFareCurrency>EUR</TotalFareCurrency>
               <BaseFare>333.75</BaseFare>
               <BaseFareCurrency>EUR</BaseFareCurrency>
            </Quote>
         </AirfareQuotes>
         <MiscChargeOrders />
         <RailPayments />
         <RailQuotes />
         <Passengers>
            <Passenger>
               <NameFirst>William</NameFirst>
               <NameLast>Never1</NameLast>
            </Passenger>
         </Passengers>
         <PhoneNumbers />
         <WebAddresses />
         <PassPrograms />
         <Remarks />
         <Charges />
         <RecordLocator>EYQA1001</RecordLocator>
         <BookingSource>POSTMAN</BookingSource>
         <DateCreatedUtc>2020-10-06T09:05:16</DateCreatedUtc>
         <DateModifiedUtc>2020-10-06T09:05:16</DateModifiedUtc>
         <DateBookedLocal>2020-10-06T00:00:00</DateBookedLocal>
         <IsCliqbookSystemOfRecord>false</IsCliqbookSystemOfRecord>
         <FormOfPaymentName />
         <ItinSourceName>API</ItinSourceName>
         <PassengerCount>1</PassengerCount>
         <CalculatedAirCharges>
            <CalculatedAirCharge>
               <Charges />
               <Text>Estimated Air Fare</Text>
               <BaseFare />
               <TotalFareCurrency>EUR</TotalFareCurrency>
               <TotalFare>333.75</TotalFare>
               <NetFare>333.75</NetFare>
               <FareType>Quote</FareType>
               <Tax />
            </CalculatedAirCharge>
         </CalculatedAirCharges>
      </Booking>
   </Bookings>
</Itinerary>

```
**RESPONSE**

200 Success

```
<?xml version="1.0" encoding="utf-8"?>
<Itinerary xmlns="http://www.concursolutions.com/api/travel/trip/2010/06">
 <id>https://www.concursolutions.com/api/travel/trip/v1.1/gWu9dRi$pEjxZkYtp0lWbN5gQkBMQfjRbbc$sbDCQ</id>
    <ItinLocator>gWu9dRi$pEjxZkYtp0lWbN5gQkBMQfjRbbc$sbDCQ</ItinLocator>
    <TripId>gWu9dRi$pEjxZkYtp0lWbN5gQkBMQfjRbbc$sbDCQ</TripId>
    <BookedByFirstName>AGENT-FIRST</BookedByFirstName>
    <BookedByLastName>AGENT-LAST</BookedByLastName>
    <ClientLocator>XYZ123</ClientLocator>
    <TripLinkLocator>NYR5ZT</TripLinkLocator>
    <DateBookedLocal>2020-10-06T00:00:00</DateBookedLocal>
    <DateCreatedUtc>2020-10-17T16:07:14</DateCreatedUtc>
    <DateModifiedUtc>2020-10-17T16:07:14</DateModifiedUtc>
    <EndDateLocal>2021-01-15T09:00:00</EndDateLocal>
    <EndDateUtc>2021-01-15T08:00:00</EndDateUtc>
    <StartDateLocal>2021-01-11T07:00:00</StartDateLocal>
    <StartDateUtc>2021-01-11T06:00:00</StartDateUtc>
    <TripName>Trip from Milan to Rome2</TripName>
    <TripStatus>0</TripStatus>
    <Bookings>
        <Booking>
            <BookingOwner>ConcurConnectAPI</BookingOwner>
            <Source>ConcurConnectAPI</Source>
            <BookingSource>POSTMAN</BookingSource>
            <DateBookedLocal>2020-10-06T00:00:00</DateBookedLocal>
            <DateCreatedUtc>2020-10-17T16:07:14</DateCreatedUtc>
            <DateModifiedUtc>2020-10-17T16:07:14</DateModifiedUtc>
            <RecordLocator>EYQA1001</RecordLocator>
            <AirfareQuotes>
                <Quote>
                    <BaseFare>333.75</BaseFare>
                    <BaseFareCurrency>EUR</BaseFareCurrency>
                    <DateCreatedUtc>2020-10-17T16:07:14</DateCreatedUtc>
                    <DateModifiedUtc>2020-10-17T16:07:14</DateModifiedUtc>
                    <TotalFare>400</TotalFare>
                    <TotalFareCurrency>EUR</TotalFareCurrency>
                </Quote>
            </AirfareQuotes>
            <Passengers>
                <Passenger>
                    <NameFirst>William</NameFirst>
                    <NameLast>Never1</NameLast>
                </Passenger>
            </Passengers>
            <Segments>
                <Hotel>
                    <ConfirmationNumber>339920160201</ConfirmationNumber>
                    <Currency>EUR</Currency>
                    <DailyRate>150.0000</DailyRate>
                    <DateCreatedUtc>2020-10-17T16:07:14</DateCreatedUtc>
                    <DateModifiedUtc>2020-10-17T16:07:14</DateModifiedUtc>
                    <EndDateLocal>2021-01-15T00:00:00</EndDateLocal>
                    <Name>William Never01</Name>
                    <NumPersons>1</NumPersons>
                    <NumRooms>1</NumRooms>
                    <RoomType>King</RoomType>
                    <StartAddress>Hotel Novotel Roma Est</StartAddress>
                    <StartCity>ROM</StartCity>
                    <StartCountry>IT</StartCountry>
                    <StartDateLocal>2021-01-11T23:59:59</StartDateLocal>
                    <TotalRate>1000.0000</TotalRate>
                    <Vendor>$$</Vendor>
                    <VendorName>HRS</VendorName>
                    <Charges>
                        <Rate>
                            <Amount>150.0000</Amount>
                            <Currency>EUR</Currency>
                            <IsPrimary>false</IsPrimary>
                            <NumUnits>4.0000</NumUnits>
                            <PerUnit>DAY</PerUnit>
                            <SemanticsCode>ROOMRATE</SemanticsCode>
                            <SemanticsVendorType>H</SemanticsVendorType>
                            <StartDateLocal>2021-01-11T14:00:00</StartDateLocal>
                        </Rate>
                    </Charges>
                </Hotel>
                <Car>
                    <AirCondition>R</AirCondition>
                    <Body>C</Body>
                    <Class>I</Class>
                    <ConfirmationNumber>1252246711</ConfirmationNumber>
                    <Currency>EUR</Currency>
                    <DateCreatedUtc>2020-10-17T16:07:14</DateCreatedUtc>
                    <DateModifiedUtc>2020-10-17T16:07:14</DateModifiedUtc>
                    <DiscountCode>XZ23S17</DiscountCode>
                    <EndCityCode>ROM</EndCityCode>
                    <EndDateLocal>2021-01-15T09:00:00</EndDateLocal>
                    <EndDateUtc>2021-01-15T08:00:00</EndDateUtc>
                    <NumCars>1</NumCars>
                    <PhoneNumber>8443708304</PhoneNumber>
                    <RateCode>IH9564</RateCode>
                    <StartCityCode>ROM</StartCityCode>
                    <StartDateLocal>2021-01-11T15:00:00</StartDateLocal>
                    <StartDateUtc>2021-01-11T14:00:00</StartDateUtc>
                    <Status>HK</Status>
                    <TotalRate>45.9100</TotalRate>
                    <Transmission>A</Transmission>
                    <Vendor>SX</Vendor>
                    <VendorName>SIXT</VendorName>
                    <Charges>
                        <RateWithAllowance>
                            <AllowanceIsUnlimited>true</AllowanceIsUnlimited>
                            <Amount>40.0000</Amount>
                            <Currency>EUR</Currency>
                            <IsPrimary>true</IsPrimary>
                            <NumUnits>1.0000</NumUnits>
                            <PerUnit>DAY</PerUnit>
                            <SemanticsCode>DAYS</SemanticsCode>
                            <SemanticsVendorType>C</SemanticsVendorType>
                            <StartDateLocal>2021-01-11T15:00:00</StartDateLocal>
                        </RateWithAllowance>
                    </Charges>
                </Car>
                <Air>
                    <AircraftCode>A320</AircraftCode>
                    <ClassOfService>S</ClassOfService>
                    <DateCreatedUtc>2020-10-17T16:07:14</DateCreatedUtc>
                    <DateModifiedUtc>2020-10-17T16:07:14</DateModifiedUtc>
                    <Duration>80</Duration>
                    <EndCityCode>ROM</EndCityCode>
                    <EndDateLocal>2021-01-15T08:30:00</EndDateLocal>
                    <EndDateUtc>2021-01-15T07:30:00</EndDateUtc>
                    <EndTerminal>FCO</EndTerminal>
                    <FlightNumber>2013</FlightNumber>
                    <IsPreferredVendor>1</IsPreferredVendor>
                    <LegId>1</LegId>
                    <Miles>303</Miles>
                    <NumStops>0</NumStops>
                    <StartCityCode>MIL</StartCityCode>
                    <StartDateLocal>2021-01-11T07:00:00</StartDateLocal>
                    <StartDateUtc>2021-01-11T06:00:00</StartDateUtc>
                    <StartTerminal>LIN</StartTerminal>
                    <Status>HK</Status>
                    <Vendor>AZ</Vendor>
                    <VendorName>Alitalia</VendorName>
                    <Charges>
                        <Fixed>
                            <Amount>333.75</Amount>
                            <Currency>EUR</Currency>
                            <Description>Airline Price</Description>
                            <IsPaid>false</IsPaid>
                            <IsPrimary>true</IsPrimary>
                            <SemanticsCode>SEGFEE</SemanticsCode>
                            <SemanticsVendorType>A</SemanticsVendorType>
                            <Vendor>AZ</Vendor>
                        </Fixed>
                    </Charges>
                    <Seats>
                        <AirSeat>
                            <PassengerRph>1</PassengerRph>
                        </AirSeat>
                    </Seats>
                </Air>
                <Air>
                    <AircraftCode>A320</AircraftCode>
                    <ClassOfService>S</ClassOfService>
                    <DateCreatedUtc>2020-10-17T16:07:14</DateCreatedUtc>
                    <DateModifiedUtc>2020-10-17T16:07:14</DateModifiedUtc>
                    <Duration>80</Duration>
                    <EndCityCode>LIN</EndCityCode>
                    <EndDateLocal>2021-01-15T08:20:00</EndDateLocal>
                    <EndDateUtc>2021-01-15T07:20:00</EndDateUtc>
                    <EndTerminal>LIN</EndTerminal>
                    <FlightNumber>2038</FlightNumber>
                    <IsPreferredVendor>1</IsPreferredVendor>
                    <LegId>2</LegId>
                    <Miles>303</Miles>
                    <NumStops>0</NumStops>
                    <StartCityCode>FCO</StartCityCode>
                    <StartDateLocal>2021-01-11T09:30:00</StartDateLocal>
                    <StartDateUtc>2021-01-11T08:30:00</StartDateUtc>
                    <Status>HK</Status>
                    <Vendor>AZ</Vendor>
                    <VendorName>Alitalia Airlines</VendorName>
                    <Charges>
                        <Fixed>
                            <Amount>335.75</Amount>
                            <Currency>EUR</Currency>
                            <Description>Airline Price</Description>
                            <IsPaid>false</IsPaid>
                            <IsPrimary>true</IsPrimary>
                            <SemanticsCode>SEGFEE</SemanticsCode>
                            <SemanticsVendorType>A</SemanticsVendorType>
                        </Fixed>
                    </Charges>
                    <Seats>
                        <AirSeat>
                            <PassengerRph>1</PassengerRph>
                        </AirSeat>
                    </Seats>
                </Air>
            </Segments>
        </Booking>
    </Bookings>
</Itinerary>
```

>**NOTE**: Submitting itinerary data with similar travel dates and trip data will result in multiple itineraries for the traveler if login_id is the only parameter used.

>**NOTE**: Store the returned TripID. This value is required for itinerary updates or cancellations.

>**NOTE**: For additional itinerary samples, please contact your Platform Enablement PM.

>**NOTE**: Store the concur-correlationid value returned in the header response for logging, troubleshooting, or case escalation purposes.

### Update an Itinerary

**REQUEST**

POST
```
{{geolocation}} /api/travel/trip/v1.1/?tripid={{stored TripID}}
userid_type=login_id&userid_value=user@domain.com

Authorization: Bearer {access_token}
```

BODY
```
<?xml version="1.0" encoding="UTF-8"?>
<Itinerary xmlns="http://www.concursolutions.com/api/travel/trip/2010/06">
   <RuleViolations />
   <ExternalLinks />
   <FormsOfId />
   <ClientLocator>XYZ123</ClientLocator>
   <ItinSourceName>AGENCY_OBT</ItinSourceName>
   <TripName>Trip from Milan to Rome UPDATED</TripName>
.
.
.
```
**RESPONSE**

200 Success

```
<<?xml version="1.0" encoding="utf-8"?>
<Itinerary xmlns="http://www.concursolutions.com/api/travel/trip/2010/06">
<id>https://www.concursolutions.com/api/travel/trip/v1.1/gWu9dRi$pEjxZlYNx0hlIfOeylb7xUY4Q96nbtow</id>
<ItinLocator>gWu9dRi$pEjxZlYNx0hlIfOeylb7xUY4Q96nbtow</ItinLocator>
<TripId>gWu9dRi$pEjxZlYNx0hlIfOeylb7xUY4Q96nbtow</TripId>
.
.
.
```

>**NOTE**: Use login ID and the original trip ID from the initial response as request parameters to update or modify an existing itinerary.

>**NOTE**: Add a date in the trip name for the traveler as an identifier. Store the last modified date value returned in the response for reporting or historical purposes.

>**NOTE**: When updating an existing itinerary, retain and resend all valid segments relevant to the original trip. Modified trip data will overwrite what was previously submitted. If a segment is not posted in a subsequent itinerary submission, that segment will not appear in Concur Travel.

### Cancel an Itinerary

**REQUEST**

POST

```
{geolocation} /api/travel/trip/v1.1/cancel?tripid={{stored TripID}}
userid_type=login_id&userid_value=user@domain.com
```
```
Authorization: Bearer {access_token}
```

BODY

```
{None}
```

**RESPONSE**


200 Success

```
<?xml version="1.0" encoding="utf-8"?>
<Message>Cancelled Successfully</Message>
```
### Retrieve a List of Trip Summaries by Date

https://developer.concur.com/api-reference/travel/itinerary-tmc-thirdparty/index.html#getlist

https://developer.concur.com/api-reference/travel/itinerary/trip/trip-resource.html#getts


>**NOTE**: Refer to the above links for variations and commonly used parameters. The samples below are specific to company level or agency level requests.

>**NOTE**: Do not submit requests for date ranges beyond one calendar month. Repeated requests for long-range dates and large response payloads will result in service errors and application or domain exclusion from Web Services

>**NOTE: Avoid monthly release nights. The calendar is available [here](https://www.concurtraining.com/customers/tech_pubs/ReleaseCalendar/2020/2020-calendar-client.pdf). Avoid weekly maintenance hours typically between 5:00 PM and 7:00 PM Pacific.

>**NOTE**: The number of requests per minute from a specific domain should not exceed 4000 requests per minute or 240,000 requests per hour to the itinerary endpoint. This threshold applies to a single agency application that may be connected to multiple enterprise organizations.

**REQUEST**

GET

```
{geolocation}/api/travel/trip/v1.1/?userid_type=login&userid_value=ALL&lastMod
ifiedDate=YYYY-MM-DDT00:00:00&includeMetadata=true&ItemsPerPage=100&Page=1

Authorization: Bearer {access_token}
```
BODY

```
{None}
```

**RESPONSE**


200 Success

```
<ConnectResponse>
    <Metadata>
        <Paging>
            <TotalItems>1</TotalItems>
            <TotalPages>1</TotalPages>
            <CurrentPage>1</CurrentPage>
            <ItemsPerPage>100</ItemsPerPage>
        </Paging>
    </Metadata>
    <Data>
        <ItineraryInfoList xmlns="http://www.concursolutions.com/api/travel/trip/2010/06" xmlns:i="http://www.w3.org/2001/XMLSchema-instance">
            <ItineraryInfo>
                <BookingSource>POSTMAN</BookingSource>
                <DateModifiedUtc>2020-10-18T22:30:09</DateModifiedUtc>
                <EndDateLocal>2021-01-15T09:00:00</EndDateLocal>
                <Passengers>William Never1</Passengers>
                <RecordLocator>XYZ123, EYQA1001</RecordLocator>
                <StartDateLocal>2021-01-11T07:00:00</StartDateLocal>
                <TravelerFirst>William</TravelerFirst>
                <TravelerLast>Never10</TravelerLast>
                <TripId>gWu9dRi$pEjxZlYNx0hlIfOeylb7xUY4Q96nbtow</TripId>
                <TripName>Trip from Milan to Rome UPDATED</TripName>
                <UserLoginId>demo10@pe30-connect.com</UserLoginId>
                <id>https://www.concursolutions.com/api/travel/trip/v1.1/gWu9dRi$pEjxZlYNx0hlIfOeylb7xUY4Q96nbtow</id>
            </ItineraryInfo>
        </ItineraryInfoList>
    </Data>
</ConnectResponse>
```

>**NOTE**: Retrieve lists of trip summaries in periodic intervals based on the last modified date value. Queue the list of trip ids returned in the response along with the last modified date. To avoid duplicate trip ids, compare and remove duplicate trips previously retrieved based on the trip’s last modified date value.

>**NOTE**: The retrieval interval should never be less than ten minutes or six requests per hour. High volume sites, over twenty thousand bookings per month, will average one thousand bookings a day or sixty trips an hour.

>**NOTE**: Avoid retrieving trip details in bulk during business hours. The best hours to retrieve itineraries are between the hours of 9:00 PM to 3:00 AM Pacific. For organizations based in Europe and some parts of the APA, retrieve trip details between the hours of 6:00 PM to 12:00 AM GMT. This will vary by country.

### Retrieve a List of Trip Summaries by Traveler

https://developer.concur.com/api-reference/travel/itinerary-tmc-thirdparty/index.html#getlist

https://developer.concur.com/api-reference/travel/itinerary/trip/trip-resource.html#getts

**REQUEST**

GET

```
{geolocation}/api/travel/trip/v1.1/?userid_type=login&userid_value=logindID@domain.com&
lastModifiedDate=YYYY-MM-DDT00:00:00&includeMetadata=true&ItemsPerPage=10&Page=1

Authorization: Bearer {access_token}
```

BODY

```
{None}
```

**RESPONSE**

200 Success

```
<ItineraryInfoList xmlns="http://www.concursolutions.com/api/travel/trip/2010/06" xmlns:i="http://www.w3.org/2001/XMLSchema-instance">
    <ItineraryInfo>
        <BookingSource>POSTMAN</BookingSource>
        <DateModifiedUtc>2020-10-18T22:30:09</DateModifiedUtc>
        <EndDateLocal>2021-01-15T09:00:00</EndDateLocal>
        <Passengers>William Never1</Passengers>
        <RecordLocator>XYZ123, EYQA1001</RecordLocator>
        <StartDateLocal>2021-01-11T07:00:00</StartDateLocal>
        <TravelerFirst>William</TravelerFirst>
        <TravelerLast>Never10</TravelerLast>
        <TripId>gWu9dRi$pEjxZlYNx0hlIfOeylb7xUY4Q96nbtow</TripId>
        <TripName>Trip from Milan to Rome UPDATED</TripName>
        <UserLoginId>demo10@pe30-connect.com</UserLoginId>
        <id>https://www.concursolutions.com/api/travel/trip/v1.1/gWu9dRi$pEjxZlYNx0hlIfOeylb7xUY4Q96nbtow</id>
    </ItineraryInfo>
</ItineraryInfoList>
```

>**NOTE**: Retrieve lists of trip summaries by login IDs in batches and periodic intervals based on overall booking volume. Queue the list of login_IDs and trip IDs by last modified date. To avoid repeatedly retrieving trip details with the same
trip ID, compare and remove duplicate trip IDs previously retrieved based on the trip’s last modified date value.

### Retrieve Trip Details

https://developer.concur.com/api-reference/travel/itinerary-tmc-thirdparty/index.html#getdetails

https://developer.concur.com/api-reference/travel/itinerary/trip/trip-resource.html#gettd

**REQUEST**

GET

```
{geolocation}/api/travel/trip/v1.1/{tripid}

Authorization: Bearer {access_token}
```

BODY

```
{None}
```

RESPONSE

200 Success

```
<?xml version="1.0" encoding="utf-8"?>
<Itinerary xmlns="http://www.concursolutions.com/api/travel/trip/2010/06">
    <id>https://www.concursolutions.com/api/travel/trip/v1.1/gWu9dRi$pEjxZlYNx0hlIfOeylb7xUY4Q96nbtow</id>
    <ItinLocator>gWu9dRi$pEjxZlYNx0hlIfOeylb7xUY4Q96nbtow</ItinLocator>
    <TripId>gWu9dRi$pEjxZlYNx0hlIfOeylb7xUY4Q96nbtow</TripId>
    <BookedByFirstName>AGENT-FIRST</BookedByFirstName>
    <BookedByLastName>AGENT-LAST</BookedByLastName>
    <ClientLocator>XYZ123</ClientLocator>
    <TripLinkLocator>MYR2UH</TripLinkLocator>
    <UserLoginId>demo10@pe30-connect.com</UserLoginId>
    <DateBookedLocal>2020-10-06T00:00:00</DateBookedLocal>
    <DateCreatedUtc>2020-10-18T22:26:53</DateCreatedUtc>
    <DateModifiedUtc>2020-10-18T22:30:09</DateModifiedUtc>
    <EndDateLocal>2021-01-15T09:00:00</EndDateLocal>
    <EndDateUtc>2021-01-15T08:00:00</EndDateUtc>
    <StartDateLocal>2021-01-11T07:00:00</StartDateLocal>
    <StartDateUtc>2021-01-11T06:00:00</StartDateUtc>
    <TripName>Trip from Milan to Rome UPDATED</TripName>
    <TripStatus>1</TripStatus>
    <Bookings>
        <Booking>
            <BookingOwner>ConcurConnectAPI</BookingOwner>
            <Source>ConcurConnectAPI</Source>
            <BookingSource>POSTMAN</BookingSource>
            <DateBookedLocal>2020-10-06T00:00:00</DateBookedLocal>
            <DateCreatedUtc>2020-10-18T22:26:53</DateCreatedUtc>
            <DateModifiedUtc>2020-10-18T22:30:09</DateModifiedUtc>
            <RecordLocator>XYZ123</RecordLocator>
            <AirfareQuotes>
                <Quote>
                    <BaseFare>333.7500</BaseFare>
                    <BaseFareCurrency>EUR</BaseFareCurrency>
                    <DateCreatedUtc>2020-10-18T22:26:53</DateCreatedUtc>
                    <DateModifiedUtc>2020-10-18T22:26:53</DateModifiedUtc>
                    <TotalFare>400.0000</TotalFare>
                    <TotalFareCurrency>EUR</TotalFareCurrency>
                </Quote>
            </AirfareQuotes>
            <Passengers>
                <Passenger>
                    <NameFirst>William</NameFirst>
                    <NameLast>Never1</NameLast>
                </Passenger>
            </Passengers>
        </Booking>
        <Booking>
            <BookingOwner>ConcurConnectAPI</BookingOwner>
            <Source>ConcurConnectAPI</Source>
            <BookingSource>POSTMAN</BookingSource>
            <DateBookedLocal>2020-10-06T00:00:00</DateBookedLocal>
            <DateCreatedUtc>2020-10-18T22:30:09</DateCreatedUtc>
            <DateModifiedUtc>2020-10-18T22:30:09</DateModifiedUtc>
            <RecordLocator>EYQA1001</RecordLocator>
            <AirfareQuotes>
                <Quote>
                    <BaseFare>333.7500</BaseFare>
                    <BaseFareCurrency>EUR</BaseFareCurrency>
                    <DateCreatedUtc>2020-10-18T22:30:09</DateCreatedUtc>
                    <DateModifiedUtc>2020-10-18T22:30:09</DateModifiedUtc>
                    <TotalFare>400.0000</TotalFare>
                    <TotalFareCurrency>EUR</TotalFareCurrency>
                </Quote>
            </AirfareQuotes>
            <Passengers>
                <Passenger>
                    <NameFirst>William</NameFirst>
                    <NameLast>Never1</NameLast>
                </Passenger>
            </Passengers>
            <Segments>
                <Hotel>
                    <ConfirmationNumber>339920160201</ConfirmationNumber>
                    <Currency>EUR</Currency>
                    <DailyRate>150.0000</DailyRate>
                    <DateCreatedUtc>2020-10-18T22:30:09</DateCreatedUtc>
                    <DateModifiedUtc>2020-10-18T22:30:09</DateModifiedUtc>
                    <EndDateLocal>2021-01-15T00:00:00</EndDateLocal>
                    <Name>William Never01</Name>
                    <NumPersons>1</NumPersons>
                    <NumRooms>1</NumRooms>
                    <RoomType>King</RoomType>
                    <StartAddress>Hotel Novotel Roma Est</StartAddress>
                    <StartCity>ROM</StartCity>
                    <StartCountry>IT</StartCountry>
                    <StartDateLocal>2021-01-11T23:59:59</StartDateLocal>
                    <TotalRate>1000.0000</TotalRate>
                    <Vendor>$$</Vendor>
                    <VendorName>HRS</VendorName>
                    <Charges>
                        <Rate>
                            <Amount>150.0000</Amount>
                            <Currency>EUR</Currency>
                            <IsPrimary>false</IsPrimary>
                            <NumUnits>4.0000</NumUnits>
                            <PerUnit>DAY</PerUnit>
                            <SemanticsCode>ROOMRATE</SemanticsCode>
                            <SemanticsVendorType>H</SemanticsVendorType>
                            <StartDateLocal>2021-01-11T14:00:00</StartDateLocal>
                        </Rate>
                    </Charges>
                </Hotel>
                <Air>
                    <AircraftCode>A320</AircraftCode>
                    <ClassOfService>S</ClassOfService>
                    <DateCreatedUtc>2020-10-18T22:30:09</DateCreatedUtc>
                    <DateModifiedUtc>2020-10-18T22:30:09</DateModifiedUtc>
                    <Duration>80</Duration>
                    <EndCityCode>ROM</EndCityCode>
                    <EndDateLocal>2021-01-15T08:30:00</EndDateLocal>
                    <EndDateUtc>2021-01-15T07:30:00</EndDateUtc>
                    <EndTerminal>FCO</EndTerminal>
                    <FlightNumber>2013</FlightNumber>
                    <IsPreferredVendor>1</IsPreferredVendor>
                    <LegId>1</LegId>
                    <Miles>303</Miles>
                    <NumStops>0</NumStops>
                    <StartCityCode>MIL</StartCityCode>
                    <StartDateLocal>2021-01-11T07:00:00</StartDateLocal>
                    <StartDateUtc>2021-01-11T06:00:00</StartDateUtc>
                    <StartTerminal>LIN</StartTerminal>
                    <Status>HK</Status>
                    <Vendor>AZ</Vendor>
                    <VendorName>Alitalia</VendorName>
                    <Charges>
                        <Fixed>
                            <Amount>333.7500</Amount>
                            <Currency>EUR</Currency>
                            <Description>Airline Price</Description>
                            <IsPaid>false</IsPaid>
                            <IsPrimary>true</IsPrimary>
                            <SemanticsCode>SEGFEE</SemanticsCode>
                            <SemanticsVendorType>A</SemanticsVendorType>
                            <Vendor>AZ</Vendor>
                        </Fixed>
                    </Charges>
                    <Seats>
                        <AirSeat>
                            <PassengerRph>1</PassengerRph>
                        </AirSeat>
                    </Seats>
                </Air>
                <Air>
                    <AircraftCode>A320</AircraftCode>
                    <ClassOfService>S</ClassOfService>
                    <DateCreatedUtc>2020-10-18T22:30:09</DateCreatedUtc>
                    <DateModifiedUtc>2020-10-18T22:30:09</DateModifiedUtc>
                    <Duration>80</Duration>
                    <EndCityCode>LIN</EndCityCode>
                    <EndDateLocal>2021-01-15T08:20:00</EndDateLocal>
                    <EndDateUtc>2021-01-15T07:20:00</EndDateUtc>
                    <EndTerminal>LIN</EndTerminal>
                    <FlightNumber>2038</FlightNumber>
                    <IsPreferredVendor>1</IsPreferredVendor>
                    <LegId>2</LegId>
                    <Miles>303</Miles>
                    <NumStops>0</NumStops>
                    <StartCityCode>FCO</StartCityCode>
                    <StartDateLocal>2021-01-11T09:30:00</StartDateLocal>
                    <StartDateUtc>2021-01-11T08:30:00</StartDateUtc>
                    <Status>HK</Status>
                    <Vendor>AZ</Vendor>
                    <VendorName>Alitalia</VendorName>
                    <Charges>
                        <Fixed>
                            <Amount>335.7500</Amount>
                            <Currency>EUR</Currency>
                            <Description>Airline Price</Description>
                            <IsPaid>false</IsPaid>
                            <IsPrimary>true</IsPrimary>
                            <SemanticsCode>SEGFEE</SemanticsCode>
                            <SemanticsVendorType>A</SemanticsVendorType>
                        </Fixed>
                    </Charges>
                    <Seats>
                        <AirSeat>
                            <PassengerRph>1</PassengerRph>
                        </AirSeat>
                    </Seats>
                </Air>
                <Car>
                    <AirCondition>R</AirCondition>
                    <Body>C</Body>
                    <Class>I</Class>
                    <ConfirmationNumber>1252246711</ConfirmationNumber>
                    <Currency>EUR</Currency>
                    <DateCreatedUtc>2020-10-18T22:30:09</DateCreatedUtc>
                    <DateModifiedUtc>2020-10-18T22:30:09</DateModifiedUtc>
                    <DiscountCode>XZ23S17</DiscountCode>
                    <EndCityCode>ROM</EndCityCode>
                    <EndDateLocal>2021-01-15T09:00:00</EndDateLocal>
                    <EndDateUtc>2021-01-15T08:00:00</EndDateUtc>
                    <NumCars>1</NumCars>
                    <PhoneNumber>8443708304</PhoneNumber>
                    <RateCode>IH9564</RateCode>
                    <StartCityCode>ROM</StartCityCode>
                    <StartDateLocal>2021-01-11T15:00:00</StartDateLocal>
                    <StartDateUtc>2021-01-11T14:00:00</StartDateUtc>
                    <Status>HK</Status>
                    <TotalRate>45.9100</TotalRate>
                    <Transmission>A</Transmission>
                    <Vendor>SX</Vendor>
                    <VendorName>Sixt</VendorName>
                    <Charges>
                        <RateWithAllowance>
                            <AllowanceIsUnlimited>true</AllowanceIsUnlimited>
                            <Amount>40.0000</Amount>
                            <Currency>EUR</Currency>
                            <IsPrimary>true</IsPrimary>
                            <NumUnits>1.0000</NumUnits>
                            <PerUnit>DAY</PerUnit>
                            <SemanticsCode>DAYS</SemanticsCode>
                            <SemanticsVendorType>C</SemanticsVendorType>
                            <StartDateLocal>2021-01-11T15:00:00</StartDateLocal>
                        </RateWithAllowance>
                    </Charges>
                </Car>
            </Segments>
        </Booking>
    </Bookings>
</Itinerary>
```

## Travel Search Events Service

The Travel Search Event Subscription Service (ESS) implements Publish/Subscribe pattern using principles of Event Driven Architecture. It allows clients and partners to be notified through web services when search travel actions take place in connected companies. When the travel search event occurs in Concur Travel, ESS sends that event to the configured endpoint with relevant information.

https://developer.concur.com/api-reference/common/ess/getting-started.html

If an agency has a need to be notified for upcoming or modified travel plans for travelers to/from a specific country or if the agency wishes to be notified if an existing itinerary is being acted upon in Concur Travel, this service is available.
Contact your Platform Enablement PM for more information.

## FAQ

Q. Can I create a travel itinerary an itinerary response?

A. Yes. Be aware that there are several fields and custom fields in an itinerary response that are not necessary with an itinerary creation. Refer to developer.concur.com for specifics.

Q. Can anyone create a travel itinerary or use the booking endpoints?

A. No, your application must be authorized and registered in our Supplier system before submitting itineraries on behalf of a traveler with your company level token. Contact your Platform Enablement PM for details.
