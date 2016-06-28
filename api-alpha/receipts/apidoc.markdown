---
title: Receipts API 4.0 (Preview)
layout: reference
---
# Receipts API

The Receipts resource represents receipts that can be posted to Concur by a provider company on behalf of opted-in users. This resource currently spports three types of receipts:
-  General - A general purpose receipt type used for various goods or services
-  Hotel - A receipt for a hospitality service, for example a hotel stay
-  Ride - A receipt for a ride service

This page documents the Receipts 4.0 API currently in development. The information on this page is intended for reference purposes and will evolve until the API is made public.

The following API calls are explained on this page:

- [Retrieve the service index](#GetServiceIndex)
- [Create a receipt](#PostReceipt)
- [Retrieve an individual receipt](#GetReceipt)
- [Retrieve receipts for a user](#GetReceiptsForUser)
- [Schemas](#Schema)
  - [General](#General)
  - [Air](#Air)
  - [Car](#Car)
  - [Hotel](#Hotel)
  - [Ride](#Ride)
  - [Japan Public Transport](#JPT)
  - [Train](#Train)
- [Failure Codes](#FailureCodes)

## <a name="URI"></a>Base URI

`https://us.api.concursolutions.com/receipts/v4`

## <a name="GetServiceIndex"></a>Retrieve the service index

### Headers

Header | Value | Description
-------|-------|------------
`Authorization`|Json Web Token (**JWT**)|OAuth2 access token in the form of a JWT obtained by the client application from the [Authorization API](https://developer.concur.com/api-alpha/auth/apidoc.html).

### Parameters

None.

### Input

None.

### Response
```
200 OK
```

Name | Type | Format | Description
-----|------|--------|------------
`rel`|`string`|-|Abstracted name of the API.
`href`|`string`|-|Current URI for the API.
`method`|`string`|-|Method(s) to be used with the URI.

### Retrieve the Service Index example

#### Request
`curl -v https://us.api.concursolutions.com/receipts/v4 -H "Authorization: Bearer {valid JWT}"`

#### JSON example of a successful response

```
{
  "links": [
    {
      "rel": "self",
      "href": "https://us.api.concursolutions.com/receipts/v4"
    },
    {
      "rel": "receipt-get",
      "href": "https://us.api.concursolutions.com/receipts/v4/{receiptId}",
      "method": "GET"
    },
    {
      "rel": "receipt-post",
      "href": "https://us.api.concursolutions.com/receipts/v4/user/{userId}",
      "method": "POST"
    },
    {
      "rel": "receipts-get-user",
      "href": "https://us.api.concursolutions.com/receipts/v4/user/{userId}",
      "method": "GET"
    },
    {
      "rel": "schemas-get",
      "method": "GET",
      "href": "https://us.api.concursolutions.com/receipts/v4/schemas"
    }
  ]
}
```

## <a name="PostReceipt"></a>Create a receipt

Use this API call to create a v4 receipt.

### Headers

Header | Value | Description
-------|-------|------------
`content-type`|`string`|**Required** [Content-Type](http://www.w3.org/Protocols/rfc2616/rfc2616-sec14.html#sec14.17): `application/json`.
`link`|-| [Link](http://tools.ietf.org/html/rfc5988#section-5): `<http://schema.concursolutions.com/{schema-name.json}}>;rel=describedBy`. When not specified, the default is:  `http://schema.concursolutions.com/general-receipt.schema.json`. The list of available [schemas](#Schema) is below.
`Authorization`|`JWT`|OAuth2 access token in the form of a JWT obtained by the client application from the [Authorization API](https://developer.concur.com/api-alpha/auth/apidoc.html).

### Parameters

None.

### Input

A receipt specified as per one of the [schemas](#Schema) below.

### Response
```
201 Created
```

### Create a receipt example

#### Request
```
general-receipt.json
```

```
{
    "user": "{user URL}",
    "app": "{app URL}",
    "dateTime": "2016-05-23T13:40:00+0700",
    "total": "10.00",
    "currencyCode": "USD",
    "merchant": {
        "name": "General Book Store",
        "location": {
            "name": "Downtown Bellevue",
            "address": {
                "countryCode": "US"
            }
        }
    },
    "payments": [
        {
            "amount": "10.00"
        }
    ]
}
```
```
`curl -v POST https://us.api.concursolutions.com/receipts/v4/user/{userId} -d @general-receipt.json -H "Content-Type: application/json" -H "link:<http://schema.concursolutions.com/general-receipt.schema.json>;rel=describedBy" -H "Authorization: Bearer {valid JWT}"`
```

#### Example of a successful response

```
HTTP/1.1 201 Created
concur-correlationid: 0f839dfc-1537-441b-a2f0-8a574b2a2776
Link: <http://schema.concursolutions.com/general-receipt.schema.json>; rel="describedBy"
Location: https://us.api.concursolutions.com/receipts/v4/{receiptId}
Date: Mon, 23 May 2016 21:31:31 GMT
Connection: keep-alive
Content-Length: 0
```

## <a name="GetReceipt"></a>Retrieve an individual receipt

### Header

Header | Value | Description
-------|-------|------------
`Authorization`|`JWT`|OAuth2 access token in the form of a JSON Web Token (JWT) obtained by the client application from the Authorization API.

### Parameters

None.

### Input

None.

### Example of a successful response
```
200 OK
```

A receipt (including metadata) matching the [schema](#Schema) in which it was created.

### Example

#### Request

`curl -v https://us.api.concursolutions.com/receipts/v4/{receiptId} -H "Authorization: Bearer {valid JWT}`

#### Response

```
HTTP/1.1 200 OK
X-Powered-By: Express
concur-correlationid: 0f839dfc-1537-441b-a2f0-8a574b2a2776
Content-Type: application/json; charset=utf-8
Content-Length: 1152
ETag: W/"480-2083390041"
Date: Tue, 24 May 2016 23:05:44 GMT
Connection: keep-alive

{
  "dateTimeReceived": "",
  "id": "7c22adcfaf6b4622be0d4e28f7aa2f79",
  "image": null,
  "imageId": "2834476850AC36F1965F1A6555697D00",
  "receipt":{
      "app": "{app URL}",
      "dateTime": "2016-05-23T13:40:00+0700",
      "total": "10.00",
      "currencyCode": "USD",
      "merchant": {
          "name": "General Book Store",
          "location": {
              "name": "Downtown Bellevue",
              "address": {
                  "countryCode": "US"
              }
          }
      },
      "payments": [
          {
              "amount": "10.00"
          }
      ]
  }
}
```

## <a name="GetReceiptsForUser"></a>Retrieve receipts for a user

### Header

Header | Value | Description
-------|-------|------------
`Authorization`|JWT|OAuth2 access token in the form of a JSON Web Token (JWT) obtained by the client application from the [Authorization API](https://developer.concur.com/api-alpha/auth/apidoc.html).

### Parameters

None.

### Input

None.

### Response

Name | Type | Format | Description
-----|------|--------|------------
`receipts`|`body`|-|An array of most recent in descending order receipts (including metadata) matching the [schema](#Schema).
`link`|`body`|[Link](http://tools.ietf.org/html/rfc5988#section-5)|URI to the next page of results, if any.

### Retreive receipts for a user example

#### Request

`curl -v https://us.api.concursolutions.com/receipts/v4/user/{userId} -H "Authorization: Bearer {valid JWT}"`

#### JSON example of a successful response

```
{
  "receipts": [
    {
      "dateTimeReceived": "2016-05-24T22:43:39.129Z",
      "id": "d2ad6266ded44c2fa2d1ac39fef332ff",
      "image": null,
      "imageId": "5B3B39343FC63B60B7CA7D9B7B3A980A",
      "receipt": {
        "app": "http://api.concur.com/v4/app/802698dc151d421c80643d76f241c78b",
        "currencyCode": "JPY",
        "dateTime": "2014-05-05T00:00:00+09:00",
        "icCardId": "00X00C1093A4E892",
        "merchant": {
          "location": {
            "address": {
              "countryCode": "JP"
            },
            "name": "Japan"
          },
          "name": "NWICR"
        },
        "payments": [
          {
            "amount": "130"
          }
        ],
        "reference": "4e6e49c5-7aaf-4ff1-ad97-919348ed8fb3",
        "segments": [
          {
            "amount": "130",
            "dateTime": "2014-05-05T00:00:00+09:00",
            "distance": 1234,
            "fromIsCommuterPass": false,
            "fromStationCode": "02506",
            "fromStationName": "恵比寿（東京）",
            "sequenceNumber": 1,
            "toIsCommuterPass": false,
            "toStationCode": "0250D",
            "toStationName": "高田馬場"
          }
        ],
        "total": "130",
        "user": "http://api.concur.com/v4/user/123456"
      },
      "userId": "AAD27DDE-F599-4F33-B34A-4DE829420799",
      "validationSchema": "http://schema.concursolutions.com/jpt-ic-card-receipt.schema.json",
      "self": "https://receipt-api-platform-receipts-mspqaf5.concurasp.com/v4/d2ad6266ded44c2fa2d1ac39fef332ff",
      "template": "https://receipt-api-platform-receipts-mspqaf5.concurasp.com/v4/{receiptId}"
    },
    {
      "dateTimeReceived": "2016-05-24T22:43:00.480Z",
      "id": "b500aa7c452e4c21a066137088f4ae04",
      "image": null,
      "imageId": "F2E20CC2721C3A16B8E18A034626E63D",
      "receipt": {
        "app": "http://api.concur.com/v4/app/802698dc151d421c80643d76f241c78b",
        "currencyCode": "JPY",
        "dateTime": "2014-05-05T00:00:00+09:00",
        "icCardId": "00X00C1093A4E892",
        "merchant": {
          "location": {
            "address": {
              "countryCode": "JP"
            },
            "name": "Japan"
          },
          "name": "NWICR"
        },
        "payments": [
          {
            "amount": "130"
          }
        ],
        "reference": "4e6e49c5-7aaf-4ff1-ad97-919348ed8fb3",
        "segments": [
          {
            "amount": "130",
            "dateTime": "2014-05-05T00:00:00+09:00",
            "distance": 1234,
            "fromIsCommuterPass": false,
            "fromStationCode": "02506",
            "fromStationName": "恵比寿（東京）",
            "sequenceNumber": 1,
            "toIsCommuterPass": false,
            "toStationCode": "0250D",
            "toStationName": "高田馬場"
          }
        ],
        "total": "130",
        "user": "http://api.concur.com/v4/user/123456"
      },
      "userId": "AAD27DDE-F599-4F33-B34A-4DE829420799",
      "validationSchema": "http://schema.concursolutions.com/jpt-ic-card-receipt.schema.json",
      "self": "https://receipt-api-platform-receipts-mspqaf5.concurasp.com/v4/b500aa7c452e4c21a066137088f4ae04",
      "template": "https://receipt-api-platform-receipts-mspqaf5.concurasp.com/v4/{receiptId}"
    }
}
```

## <a name="Schema"></a>Schemas

### <a name="General"></a>General

Name | Type | Format | Description
-----|------|--------|------------
`core`|`object`|[`core`](#Core)|**Required** Core object for all receipts.
`lineItems`|`array`|[`lineItems`](#lineItems)|Line items specified for general receipts.

### <a name="Air"></a>Air Transport

Name | Type | Format | Description
-----|------|--------|------------
`core`|`object`|[`core`](#Core)|**Required** Core object for all receipts.
`itineraryLocator`|`string`|[`nonEmptyString`](#nonEmptyString)|Unique ID of an itinerary (also know as a trip) in Concur’s Itinerary Service.  An itinerary can contain one or more bookings from various sources.
`tickets`|`array`|[`tickets`](#tickets)|**Required**: air tickets issued.
`lineItems`|`array`|[`lineItems`](#lineItems)|**Required**: ancillary airline fees.

#### <a name="tickets"></a> Air Tickets

Name | Type | Format | Description
-----|------|--------|------------
`number`|`string`|-|**Required**: ticket number issued by the airline when the payment is made. Ticket numbers are globally unique for all ARC carriers. The first 3 digits identify the airline. The three digit code for each airline can be found [here](http://www.iata.org/about/members/Pages/airline-list.aspx?All=true). For example the ticket number for American Airlines where 001 is the airline: 0012375432602.
`recordLocator`|`string`|-|Confirmation identifier for the ticket created by the airline. For most airlines this is a 6 character alphanumeric code that is unique for a short period of time and could be reused in the future.
`issueDateTime`|`string`|[`dateTime`](#dateTime)|**Required**: date and time the ticket was issued.
`pseudoCityCode`|`string`|[`IATACityCode`](#IATACityCode)|IATA city code the ticket was issued from. For example, SEA for Seattle.
`IATAAgencyNumber`|`string`|[`IATAAgencyNumber`](#IATAAgencyNumber)|Identifying number assigned by the IATA to the agency issuing the ticket.
`agencyName`|`string`|-|Name of the agency issuing the ticket.
`passengerName`|`string`|-|Name of the passenger associated with the ticket.
`endorsements`|`string`|-|
`tourIdentifier`|`string`|-|
`linearFareConstructor`|`string`|-|
`coupons`|`array`|[`coupons`](#coupons)|**Required**: flights issued within this transaction.

#### <a name="coupons"></a> Air Coupons

Name | Type | Format | Description
-----|------|--------|------------
`originationAirportIATACode`|`string`|[`IATAAirportCode`](#IATAAirportCode)|**Required** IATA airport code of the flight's origin.
`originationDateTime`|`string`|[`dateTime`](#dateTime)|**Required**: date and time of origin.
`destinationAirportIATACode`|`string`|[`IATAAirportCode`](#IATAAirportCode)|**Required** IATA airport code of the flight's destination.
`destinationDateTime`|`string`|[`dateTime`](#dateTime)|**Required**: date and time of destination.
`flightNumber`|`string`|-|Flight identifier.
`couponNumber`|`string`|[`nonEmptyString`](#nonEmptyString)|**Required**: identifier associated with the given coupon.
`operatingAirlineCode`|`string`|[`IATAAirlineCode`](#IATAAirlineCode)|**Required** IATA code of the airline operating the flight.
`marketingCarrier`|`string`|[`flightDesignator`](#flightDesignator)|**Required**: flight designator booking the flight.
`operatingCarrier`|`string`|[`flightDesignator`](#flightDesignator)|**Required**: flight designator operating the flight.
`classOfServiceCode`|`string`|[`classOfServiceCode`](#classOfServiceCode)|**Required**: class of service per the airline's class of service codes. Most airlines use the same codes but some airlines have custom codes.
`fareBasisCode`|`string`|[`fareBasisCode`](#fareBasisCode)|**Required** Rate code the airline used to calculate the fare for this flight.
`ticketDesignatorCode`|`string`|[`ticketDesignatorCode`](#ticketDesignatorCode)|A valid ticket designator code to indicate what type of discount is applied, such as for a child or infant, or airline employee. This is a 1 to 10 alphanumeric code and can optionally include a single asterisk. Ticket designators are free-form text codes which help identify ticket types. Airlines determine which ticket designators they will use as no standards currently exist.
`fare`|`string`|[`currency`](#currency)|**Required**: fare charged for the flight.
`taxes`|`array`|[`taxes`](#taxes)|Taxes paid as part of transaction.
`lineItems`|`array`|[`lineItems`](#lineItems)|Line Items/fees specific to a leg of the trip. Eg. Baggage fees, class of service fees, priority boarding, meals.

#### <a name="Air-definitions"></a> Air Definitions

Name | Type | Description
-----|------|------------
<a name="IATAAirportCode"></a>`IATAAirportCode`|`string`|"pattern": "^[a-zA-Z]{3}$"
<a name="IATAAirlineCode"></a>`IATAAirlineCode`|`string`|"pattern": "^[a-zA-Z]{2}$"
<a name="IATACityCode"></a>`IATACityCode`|`string`|"pattern": "^[a-zA-Z]{3}$"
<a name="IATAAgencyNumber"></a>`IATAAgencyNumber`|`string`|"pattern": "^[0-9]{8}$"
<a name="flightDesignator"></a>`flightDesignator`|`string`|The two-character IATA airline designator code and flight number, for example: AA1234, DL9876. "pattern": "^[a-zA-Z0-9]{3,8}$"
<a name="classOfServiceCode"></a>`classOfServiceCode`|`string`|"pattern": "^[a-zA-Z]$"
<a name="fareBasisCode"></a>`fareBasisCode`|`string`|See [http://en.wikipedia.org/wiki/Fare_basis_code](http://en.wikipedia.org/wiki/Fare_basis_code) "pattern": "^[a-zA-Z0-9]{3,8}$"
<a name="ticketDesignatorCode"></a>`ticketDesignatorCode`|`string`|"pattern": "^[a-zA-Z0-9\\*?]{1,10}$"

### <a name="Car"></a>Rental Car

Name | Type | Format | Description
-----|------|--------|------------
`core`|`object`|[`core`](#Core)| **Required**: core object for all receipts.
`itineraryLocator`|`string`|[`nonEmptyString`](#nonEmptyString)|Unique ID of an itinerary (also know as a trip) in Concur’s Itinerary Service.  An itinerary can contain one or more bookings from various sources.
`segmentLocator`|`string`|[`nonEmptyString`](#nonEmptyString)|Unique ID of a single travel event in Concur’s Itinerary Service.  An itinerary can contain one or more bookings and each booking can contain one or more segments. The segmentLocator uniquely identifies an event like a car rental with a specific start and end date or a single air segment/sector.
`startDateTime`|`string`|[`dateTime`](#dateTime)|**Required**: rental start date and time.
`endDateTime`|`string`|[`dateTime`](#dateTime)|**Required**: rental end date and time.
`pickupLocation`|`object`|[`location`](#location)|Vehicle pick up location.
`dropoffLocation`|`object`|[`location`](#location)|Vehicle drop off location.
`rentalDays`|`integer`|[`positiveInteger`](#positiveInteger)|**Required**: total number of days for rental.
`discountCode`|`string`|-| Corporate discount code.
`discountName`|`string`|-| Corporate discount name.
`rentalAgreementNumber`|`string`|-|Agreement identifier.
`confirmationNumber`|`string`|-|Booking confirmation identifier.
`vehicle`|`object`|[`vehicle`](#vehicle)|Vehicle description.
`distance`|`object`|[`distance`](#distance)|Distance travelled.
`odometerReadingOut`|`number`|-|Odometer reading at the start of the rental period. A number with up to one decimal place is expected.
`odometerReadingIn`|`number`|-|Odometer reading at the start of the rental period. A number with up to one decimal place is expected.
`additionalDriver`|`boolean`|-|Additional approved driver (true) or not (false).
`lineItems`|`array`|[`lineItems`](#lineItems)|Break down of all car rental charges. This could include daily rate, fees, insurance, GPS rental and other add-ons.

#### <a name="vehicle"></a> Vehicle Information

Name | Type | Format | Description
-----|------|--------|------------
`registrationNumber`|`string`|-|Registration or license plate identifier.
`description`|`string`|-|Vehicle description, including year, make and model.
`classReservedCode`|`string`|[`classCode`](#classCode)|Association of Car Rental Industry Systems Standard (ACRISS) four letter car code.
`classRentedCode`|`string`|[`classCode`](#classCode)|Actual vehicle rented ACRISS identifier.
`classChargedCode`|`string`|[`classCode`](#classCode)|Car class code charged ACRISS identifier.
`categoryCode`|`string`|[`genericCode`](#genericCode)|ACRISS car category code.
`typeCode`|`string`|[`genericCode`](#genericCode)|ACRISS car type code.
`transmissionDriveCode`|`string`|[`genericCode`](#genericCode)|ACRISS car transmission/drive code.
`fuelAirConditioningCode`|`string`|[`genericCode`](#genericCode)|ACRISS car fuel/air conditioning code.
`engineSize`|`string`|[`engineSize`](#engineSize)|Engine size in cubic centimeters.
`fuelType`|`string`|-|Fuel type of the vehicle.

#### <a name="distance"></a> Rental Car Travel Distance

Name | Type | Format | Description
-----|------|--------|------------
`totalDistance`|`number`|-|Distance traveled during the rental.
`unit`|`enum`|-|**M** or **K**  indicating miles (M) or kilometers (K).

#### <a name="Car-definitions"></a> Rental Car Definitions

Name | Type | Description
-----|------|------------
<a name="classCode"></a>`classCode`|`string`|"pattern": "^[a-zA-Z]{4}$"
<a name="genericCode"></a>`genericCode`|`string`|"pattern": "^[a-zA-Z]$"
<a name="engineSize"></a>`engineSize`|`string`|"pattern": "^[0-9]{1,4}$"

### <a name="Hotel"></a>Hotel

Name | Type | Format | Description
-----|------|--------|------------
`core`|`object`|[`core`](#Core)|**Required**: core object for all receipts.
`itineraryLocator`|`string`|[`nonEmptyString`](#nonEmptyString)|Unique ID of an itinerary (also know as a trip) in Concur’s Itinerary Service.  An itinerary can contain one or more bookings from various sources.
`segmentLocator`|`string`|[`nonEmptyString`](#nonEmptyString)|Unique ID of a single travel event in Concur’s Itinerary Service.  An itinerary can contain one or more bookings and each booking can contain one or more segments. The segmentLocator uniquely identifies something like a hotel stay with a specific start and end date or a single air segment/sector.
`property`|`object`|[`property`](#property)|**Required**: physical property location information for the hotel property. This is often different than the merchant location information.
`confirmationNumber`|`string`|-|Booking identifier
`checkInDateTime`|`string`|[`dateTime`](#dateTime)|**Required**: check in date and time.
`checkOutDateTime`|`string`|[`dateTime`](#dateTime)|**Required**: check out date and time.
`guests`|`array`|[`guests`](#guests)|**Required**: guest information.
`numberInParty`|`integer`|[`positiveInteger`](#positiveInteger)|Number of individuals for the stay.
`room`|`object`|[`room`](#room)|**Required**: room details.
`nightsStayed`|`integer`|[`positiveInteger`](#positiveInteger)|**Required**: number of nights for the stay.
`lineItems`|`array`|[`lineItems`](#lineItems)|**Required**: break down of all hotel charges. This could include the daily room rate, meals and other charges.

#### <a name="property"></a> Hotel Property

Name | Type | Format | Description
-----|------|--------|------------
`name`|`string`|[`nonEmptyString`](#nonEmptyString)|**Required**: name of the hotel property where the guest stayed.
`description`|`string`|-|A brief description of the hotel.
`location`|`object`|[`location`](#location)|**Required**: location of the hotel property where the guest stayed.

#### <a name="guests"></a> Name of Guests

Name | Type | Format | Description
-----|------|--------|------------
`guestNameRecord`|`string`|-|The loyalty or membership number of the hotel guest.
`firstName`|`string`|[`nonEmptyString`](#nonEmptyString)|**Required**: first name of the guest.
`lastName`|`string`|[`nonEmptyString`](#nonEmptyString)|**Required**: last name of the guest.
`address`|`object`|[`address`](#address)|Address of the guest. It is highly recommended that the business address of the guest is provided if the hotel is provided with one. Doing so will help VAT reclamation partners who work with companies, to have compliant receipts accepted by the tax authority when filing tax reclaims.

#### <a name="room"></a> Room Information

Name | Type | Format | Description
-----|------|--------|------------
`roomNumber`|`string`|-|Room number where the guest stayed.
`roomType`|`string`|-|Type of room where the guest stayed. For example, Standard, Deluxe, etc.
`ratePlanType`|`string`|-|Name of the rate plan according to which the guest was charged.
`averageDailyRoomRate`|`string`|[`currency`](#currency)|**Required** Average of the daily room rates for the duration of the guests stay. Room rates usually differ from day to day.

### <a name="Ride"></a>Ride Information

Name | Type | Format | Description
-----|------|--------|------------
`core`|`object`|[`core`](#Core)|**Required**: core object for all receipts.
`itineraryLocator`|`string`|[`nonEmptyString`](#nonEmptyString)|Unique ID of an itinerary (also know as a trip) in Concur’s Itinerary Service.  An itinerary can contain one or more bookings from various sources.
`segmentLocator`|`string`|[`nonEmptyString`](#nonEmptyString)|Unique ID of a single travel event in Concur’s Itinerary Service.  An itinerary can contain one or more bookings and each booking can contain one or more segments. The segmentLocator uniquely identifies something like a car rental with a specific start and end date or a single air segment/sector.
`operator`|`string`|[`nonEmptyString`](#nonEmptyString)|**Required**: name of the company offering the ride service.
`terminalNumber`|`string`|-|If customer was picked at an airport, then the terminal number where picked up.
`startDateTime`|`string`|[`dateTime`](#dateTime)|**Required**: date and time of when customer was picked up.
`endDateTime`|`string`|[`dateTime`](#dateTime)|**Required**: date and time of when customer was dropped off.
`pickupLocation`|`object`|[`location`](#location)|Location where the customer was picked up.
`dropoffLocation`|`object`|[`location`](#location)|Location where the customer was dropped off.
`driverName`|`string`|-|First name of the person who drove the vehicle.
`driverNumber`|`string`|-|Unique identifier assigned by the ride company to a driver.
`vehicleNumber`|`string`|-|License plate number of the vehicle.
`lineItems`|`array`|[`lineItems`](#lineItems)|Descriptive breakdown of the fare charged. For example: base fare, distance travelled, discount and other add-ons.

### <a name="JPT"></a>Japan Public Transport (JPT)

Name | Type | Format | Description
-----|------|--------|------------
`core`|`object`|[`core`](#Core)|**Required**: core object for all receipts.
`icCardId`|`string`|[`nonEmptyString`](#nonEmptyString)|**Required**: the unique identifier for the card with a maximum length of 20 characters.
`segments`|`array`|[`icCardSegment`](#icCardSegment)|**Required**: the segments for the trip.

#### <a name="icCardSegment"></a> icCardSegment

Name | Type | Format | Description
-----|------|--------|------------
`sequenceNumber`|`integer`|-|**Required**: unique transaction identifier for every trip taken using the IC card.
`dateTime`|`string`|[`dateTime`](#dateTime)|Transaction date and time.
`fromStationCode`|`string`|-|**Required**: departure station code of the route. This code is specified to the IC Card vendor. Concur Expense has a transcoding table to Expense location codes.
`fromStationName`|`string`|-|**Required**: departure station label of the route.
`toStationCode`|`string`|-|**Required**: arrival station code of the route. This code is specified to the IC Card vendor. Concur Expense has a transcoding table to Expense location codes.
`toStationName`|`string`|-|**Required**: arrival station label of the route.
`fromIsCommuterPass`|`boolean`|-|Is the departure route included in the commuter pass subscription of the employee.
`toIsCommuterPass`|`boolean`|-|Is the arrival route included in the commuter pass subscription of the employee.
`distance`|`integer`|-|Distance between departure and arrival station.

### <a name="Train"></a>Train Information

### <a name="Core"></a>Core Train Information

Name | Type | Format | Description
-----|------|--------|------------
`user`|`string`|-|**Required**: fully qualified URL for the user identifier.
`app`|`string`|-|**Required**: fully qualified URL for the client application identifier.
`dateTime`|`string`|[`dateTime`](#dateTime)|**Required**: date and time of the transaction.
`total`|`string`|[`currency`](#currency)|**Required**: the total amount of the transaction including all lineitems and taxes.
`currencyCode`|`string`|[`currencyCode`](#currencyCode)|**Required**: currency paid to the merchant.
`merchant`|`object`|[`merchant`](#merchant)|**Required**: the merchant.
`payments`|`array`|[`payments`](#payments)|**Required**: one or more payment methods for the transaction.
`taxes`|`array`|[`taxes`](#taxes)|Taxes paid as part of transaction.
`reference`|`string`|-|The unique receipt provider or merchant identifier for this receipt or invoice. This value can also be referred to as transaction number, check number, order ID or similar.
`collectionReference`|`string`|-|Use this key to group related receipts into a collection for credits, tips or other adjustments to the original transaction and looking at groups of receipts for analysis purposes. The reference and collectionReference keys typically have separate and unique values but could be the same for the first receipt in a collection.
`taxInvoice`|`boolean`|-|A tax invoice (true) or otherwise (false).
`customData`|`object`|[`customData`](#customData)|Custom fields sent by receipt provider.

#### <a name="merchant"></a> Merchant Information

Name | Type | Format | Description
-----|------|--------|------------
`name`|`string`|[`nonEmptyString`](#nonEmptyString)|**Required**: name.
`location`|`object`|[`location`](#location)|**Required**: location and address.
`description`|`string`|-|Description.
`taxId`|`string`|-|The tax identification number assigned to the merchant by the national tax authority. In some countries this must appear on the receipt for it to be considered a tax receipt/invoice.

#### <a name="location"></a> Merchant Location

Name | Type | Format | Description
-----|------|--------|------------
`name`|`string`|-|The name for the location.
`number`|`string`|-|The identifier the company assigned to the location.
`address`|`object`|[`address`](#address)|Object describing the address.
`latitude`|`number`|[`latitude`](#latitude)|The latitude of the location.
`longitude`|`number`|[`longitude`](#longitude)|The longitude of the location.
`internetAddress`|`string`|-|World wide web address.
`emailAddress`|`string`|-|Email address.
`telephoneNumber`|`string`|-|Telephone number.
`faxNumber`|`string`|-|Fax number.

#### <a name="address"></a> Merchant Address

Name | Type | Format | Description
-----|------|--------|------------
`address`|`string`|-|Street address.
`address2`|`string`|-|Secondary street address.
`city`|`string`|-|City
`countrySubdivisionCode`|`string`|[`countrySubdivisionCode`](#countrySubdivisionCode)|1 to 3 character state, province, or other country subdivision as defined in [ISO 3166-2:2013](http://www.iso.org/iso/home/store/catalogue_ics/catalogue_detail_ics.htm?csnumber=63546). Note: The standard for ISO 3166 states the subdivision code must be preceded by the [`countryCode`](#countryCode) and a separator - client code should concatenate these keys as appropriate.
`countryCode`|`string`|[`countryCode`](#countryCode)|2 or 3 character country code as defined in [ISO 3166-2:2013](http://www.iso.org/iso/home/store/catalogue_ics/catalogue_detail_ics.htm?csnumber=63546).
`postalCode`|`string`|-|Postal code.

#### <a name="payments"></a> Payments Information

The payments array allows for one or more payment methods used in the transaction to be defined.  All payment methods defined within the array result in the value for amount in the base object of the receipt. The JSON keyword 'anyOf' which indicates at least one of the following is required and multiple can be present: [cash](#cash), [creditCard](#creditCard), [companyPaid](#companyPaid), [digitalWallet](#digitalWallet) and / or [unusedTicket](#unusedTicket).

##### <a name="cash"></a> Cash

Represents cash transactions.

Name | Type | Format | Description
-----|------|--------|------------
`amount`|`string`|[`currency`](#currency)|**Required**: amount.

##### <a name="creditCard"></a> Credit Card

Represents transactions where a credit card was used.

Name | Type | Format | Description
-----|------|--------|------------
`amount`|`string`|[`currency`](#currency)|**Required**: amount.
`cardDetail`|`object`|[`cardDetail`](#cardDetail)|**Required**: credit card information.

##### <a name="companyPaid"></a> Company Paid

This category represents transactions in which the company is billed for the transaction or a common form of payment is used within the company.

Name | Type | Format | Description
-----|------|--------|------------
`source`|`enum`|-|**Required** "GhostCard", "LodgeCard", "DirectPay", "Invoice"
`amount`|`string`|[`currency`](#currency)|**Required**: amount
`cardDetail`|`object`|[`cardDetail`](#cardDetail)|**Required**: credit card information. This object is required if the source of CompanyPaid is GhostCard.

##### <a name="digitalWallet"></a> Digital Wallet

This category represents modern forms of payment. Calling applications may often interpret this form of payment as cash.

Name | Type | Format | Description
-----|------|--------|------------
`source`|`enum`|-|**Required** "ApplePay", "GoogleWallet", "PayPal", "Square", "IntuitPay"
`amount`|`string`|[`currency`](#currency)|**Required**: amount.

##### <a name="unusedTicket"></a> Unused Ticket

This category represents the value of an unused airline ticket that is put toward the purchase of a new airline ticket.

Name | Type | Format | Description
-----|------|--------|------------
`ticketNumber`|`string`|[`nonEmptyString`](#nonEmptyString)|**Required**: the ticket number for the unused ticket value.
`amount`|`string`|[`currency`](#currency)|**Required**: amount

###### <a name="cardDetail"></a> Card Detail

Name | Type | Format | Description
-----|------|--------|------------
`cardType`|`enum`|-|**Required** "American Express","Diner’s Club","Discover","MasterCard","Visa","Carte Blanche","Enroute","Universal Air Travel","JCB","EuroCard"
`maskedNumber`|`string`|-|Last four digits of the credit card used for the transaction. Providing leading characters for masking is optional. For example: XXXXXXXXXXXX1234. For compliance purposes, do not send the full credit card number. Providing any more than the last four digits of the credit card will result in the input being rejected.
`authorizationCode`|`string`|-|Authorization code for transaction.

#### <a name="customData"></a> Custom Data

Custom data is very powerful for partnerships built around receipt data. To avoid name collisions and to make consuming custom data relatively easy it is **highly** recommended a globally unique identifier (GUID) be provided for the customDataGuid key to disambiguate data and avoid name collisions. This GUID is mutually agreed upon by both provider and consumer of the data.

Name | Type | Format | Description
-----|------|--------|------------
`customDataGuid`|`string`|-|Mutually agreed upon (provider and consumer) GUID.
-|`object`|-|Any valid JSON.

#####  JSON example of customData
```
"customData": {
	"customDataGuid": "58c8018177ef493da4e2e802fd1258ea",
	"myObject": {
		"myKey": "myValue"
	}
}
```

### <a name="lineItems"></a> Line Items

Name | Type | Format | Description
-----|------|--------|------------
`sequenceNumber`|`integer`|-|**Required**: the order the item appears in the sequence of line items when the receipts is rendered by Concur.
`dateTime`|`string`|[`dateTime`](#dateTime)|Date and time of the transaction.
`reference`|`string`|-|The item SKU, identifier or some other attribute the merchant uses to reference the item.
`issuanceCode`|`object`|[`issuanceCode`](#issuanceCode)|Airline code.
`description`|`string`|[`nonEmptyString`](#nonEmptyString)|**Required**: description for this lineItem.
`description2`|`string`|-|Additional description for this lineItem.
`semanticsCode`|`string`|-|**Required**: the Concur semantics code for the line item. See [https://developer.concur.com/api-reference/travel/itinerary/itinerary.html#semantics_codes](https://developer.concur.com/api-reference/travel/itinerary/itinerary.html#semantics_codes)
`rateType`|`enum`|-|"Per Rental","Gallon","Per Gallon","Litre","Per Litre","Hour","Per Hour","Day","Per Day","Week","Per Week","Month","Per Month","Distance"
`rate`|`string`|[`currency`](#currency)|Amount per unit.
`quantity`|`integer`|-|Decimal quantity, minimum 0.
`amount`|`string`|[`currency`](#currency)|**Required**: total amount = rate * quantity.
`taxes`|`array`|[`taxes`](#taxes)|Taxes paid as part of transaction.

##### <a name="issuanceCode"></a> Issuance Code

For more information see: [http://www.atpco.net/atpco/download/optionalsubcodes.pdf](http://www.atpco.net/atpco/download/optionalsubcodes.pdf)

Name | Type | Format | Description
-----|------|--------|------------
`group`|`string`|-|Description
`subGroup`|`string`|-|Description
`rficCode`|`string`|-|Description
`rficSubCode`|`string`|-|Description
`description`|`string`|-|Description
`description2`|`string`|-|Description
`commercialName`|`string`|-|Description

#### <a name="taxes"></a> Taxes

Name | Type | Format | Description
-----|------|--------|------------
`authority`|`string`|-|Taxing authority.
`address`|`address`|[`address`](#address)|**Required**: object describing the address.
`type`|`string`|[`nonEmptyString`](#nonEmptyString)|**Required** Concur tax type.
`rate`|`number`|-|**Required**: a positive percentage, non-zero number with up to four significant digits and up to two decimal places.
`amount`|`string`|[`currency`](#currency)|**Required**: any positive, negative, or zero number with up to 14 significant digits and up to 3 decimal places.

### <a name="Common"></a>Common

Name | Type | Format | Description
-----|------|--------|------------
<a name="dateTime"></a>`dateTime`|`string`|-|DateTime when the transaction occurred in the format specified in ISO 8601. While the standard regards time zone designators as optional, we highly recommend to use UTC + Offset. For example, 2016-04-22T12:20+0700 (12:20 PM in Pacific Time). [Pattern](#pattern-date-time)
<a name="nonEmptyString"></a>`nonEmptyString`|`string`|-|"minLength": 1, "pattern": "^(?!\\s*$).+"
<a name="countrySubdivisionCode"></a>`countrySubdivisionCode`|`string`|-|"pattern": "^[a-zA-Z0-9]{1,3}$"
<a name="currency"</a>`currency`|`string`|-|"pattern": "^[-]?\\d*\\.?\\d+$"
<a name="countryCode"></a>`countryCode`|`string`|-|"minLength": 2, "maxLength": 3,
<a name="currencyCode"></a>`currencyCode`|`string`|-|"minLength": 3, "maxLength": 3, [ISO 4217](http://en.wikipedia.org/wiki/ISO_4217) currency code for the currency paid to the merchant
<a name="latitude"></a>`latitude`|`number`|-|"minimum": -90, "maximum": 90
<a name="longitude"></a>`longitude`|`number`|-|"minimum": -180, "maximum": 180
<a name="positiveInteger"></a>`positiveInteger`|`integer`|-|"minimum": 0, "exclusiveMinimum": true

### <a name="patterns"></a>Patterns

<a name="pattern-date-time"></a>dateTime = "^[\\d]{4}(-)[\\d]{2}(-)[\\d]{2}(\\s|T)[\\d]{2}:[\\d]{2}:[\\d]{2}((\\+|-)[0-1][\\d]:?(0|3)0)?$"

### <a name="metadata"></a>Receipt Metadata

This is Concur metadata generated for a receipt at the time a POST occurs. It is only present for a GET operation and not valid for a POST operation.

Name | Type | Format | Description
-----|------|--------|------------
`id`|`string`|-|A GUID-like string identifier for the receipt.
`self`|`string`|-| The fully qualified URL of the receipt resource.
`template`|`string`|-|URL template per [https://tools.ietf.org/html/rfc6570](https://tools.ietf.org/html/rfc6570).
`dateTimeReceived`|`string`|[`dateTime`](#dateTime)|Timestamp when receipt was received by the receipt service.
`validationSchema`|`string`|-|URL to the schema used for validation.
`image`|`string`|-|URL to the image for the receipt.
`imageId`|`string`|-|Concur specific identifier for the image.

## <a name="FailureCodes"></a>Failure Codes
