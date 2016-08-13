---
title: Receipts API 4.0 (Preview)
layout: reference
---
# Receipts API

_This page documents the Receipts 4.0 API currently in development. The information on this page is intended for reference purposes and will evolve until the API is made public._

The ```Receipts``` resource represents receipts that can be posted to Concur by a partner on behalf of an end user. This resource supports following types of receipts:
 - [General](#General): A general purpose receipt type used for various goods or services.
 - [Hotel](#Hotel): A receipt for a hospitality service, for example a hotel stay.
 - [Ground Transport](#GroundTransport): A receipt for a ground transportation service, for example a taxi.
 - [Car Rental](#Car): A receipt for a car rental.
 - [Air](#Air): A receipt for air travel.
 - [Rail](#Rail): A receipt for rail travel.
 - [Japan Public Transport](#JPT): A receipt for a Japan Public Transport (JPT) train ride.

API methods:

 - [GET Service Index](#GetServiceIndex)
 - [POST a Receipt](#PostReceipt)
 - [GET Schemas](#GetSchemas)

Error Handling:

 - [Failure Codes](#FailureCodes)

## <a name="URI"></a>Base URI

`https://us.api.concursolutions.com/receipts/v4`

## <a name="GetServiceIndex"></a>GET Service Index

``` 
GET /receipts/v4 
```

The service index lists methods that the partner is allowed to call.

### Headers

Header | Description
-------|------------
`Authorization`|OAuth2 access token in the form of a JSON Web Token obtained by the client application from the [Authentication API](https://preview.developer.concur.com/api-preview/auth/apidoc.html).

### Parameters

None.

### Request Body

None.

### Response
```
200 OK
```

Name | Description
-----|------------
`rel`|Abstracted name of the API.
`method`|Method to be used with the URI.
`href`|Current URI for the API.

### Example

#### Request

`curl -v https://us.api.concursolutions.com/receipts/v4 -H "Authorization: Bearer {valid JWT}"`

#### Successful Response

```
{
  "links": [
    {
      "rel": "self",
      "href": "https://us.api.concursolutions.com/receipts/v4"
    },
    {
      "rel": "receipt-post",
      "href": "https://us.api.concursolutions.com/receipts/v4/user/{userId}",
      "method": "POST"
    },
    {
      "rel": "schemas-get",
      "method": "GET",
      "href": "https://us.api.concursolutions.com/receipts/v4/schemas"
    }
  ]
}
```

## <a name="PostReceipt"></a>POST a Receipt

```
POST /receipts/v4/users/{userId}
```

Header | Description
-------|------------
`Content-type`|**Required** [Content-Type](http://www.w3.org/Protocols/rfc2616/rfc2616-sec14.html#sec14.17): `application/json`.
`Link`|**Required** [Link](http://tools.ietf.org/html/rfc5988#section-5): `<http://schema.concursolutions.com/{schema-name.json}}>;rel=describedBy`. List of available [schemas](#Schema) is below. Use the [GET Schemas](#GetSchemas) call to retrieve the URLs for available schema types. If a receipt image is being generated on a clients behalf, we will use the schema type mentioned in this field to select the appropriate receipt template. 
`Authorization`|OAuth2 access token in the form of a JSON Web Token obtained by the client application from the [Authorization API](https://preview.developer.concur.com/api-alpha/auth/apidoc.html).

### Parameters

Name | Description
-----|------------
`userId`|The UUID of the user for whom the receipt is being posted. This can be found in the JWT that is obtained using the [Authentication API](https://preview.developer.concur.com/api-preview/auth/apidoc.html). 

### Request Body

A receipt specified as a JSON document using the format of one of the [schema](#Schema) types.

### Response
```
201 Created
```

### Example

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
curl -v POST https://us.api.concursolutions.com/receipts/v4/user/{userId} -d @general-receipt.json -H "Content-Type: application/json" -H "link:<http://schema.concursolutions.com/general-receipt.schema.json>;rel=describedBy" -H "Authorization: Bearer {valid JWT}"
```

#### Successful Response

```
HTTP/1.1 201 Created
concur-correlationid: 0f839dfc-1537-441b-a2f0-8a574b2a2776
Link: <http://schema.concursolutions.com/general-receipt.schema.json>; rel="describedBy"
Location: https://us.api.concursolutions.com/receipts/v4/{receiptId}
Date: Mon, 23 May 2016 21:31:31 GMT
Connection: keep-alive
Content-Length: 0
```

## <a name="GetSchemas"></a>GET Schemas

```
GET /receipts/v4/schemas
```

### Headers

Header | Description
-------|------------
`Authorization`|OAuth2 access token in the form of a JSON Web Token obtained by the client application from the [Authentication API](https://preview.developer.concur.com/api-preview/auth/apidoc.html).

### Parameters

None.

### Request Body

None.

### Response
```
200 OK
```

Name | Description
-----|------------
`rel`|Identifier for the schema.
`method`|Method to be used with the URI.
`href`|URL to be used to retrieve the schema.

## <a name="Schema"></a>Schemas

### <a name="General"></a>General

Name | Type | Format | Description
-----|------|--------|------------
`core`|`object`|[`core`](#Core)|**Required** Core values for all receipts. 
`lineItems`|`array`|[`lineItems`](#lineItems)|Line items specified for general receipts.

### <a name="Air"></a>Air

Name | Type | Format | Description
-----|------|--------|------------
`core`|`object`|[`core`](#Core)|**Required** Core values for all receipts.
`itineraryLocator`|`string`|[`nonEmptyString`](#nonEmptyString)|Unique ID of an itinerary (also know as a trip) in Concur’s Itinerary Service.  An itinerary can contain one or more bookings from various sources.
`tickets`|`array`|[`tickets`](#tickets)|**Required** Air tickets issued.
`lineItems`|`array`|[`lineItems`](#lineItems)|**Required** Ancillary airline fees.

#### <a name="tickets"></a>tickets

Name | Type | Format | Description
-----|------|--------|------------
`number`|`string`|-|**Required** Ticket number issued by the airline when the payment is made. Ticket numbers are globally unique for all IATA carriers. The first 3 digits identify the airline. The three digit code for each airline can be found [here](http://www.iata.org/about/members/Pages/airline-list.aspx?All=true). For example the ticket number for American Airlines where 001 is the airline: 0012375432602.
`recordLocator`|`string`|-|Confirmation identifier for the ticket created by the airline. For most airlines this is a 6 character alphanumeric code that is unique for a short period of time and could be reused in the future.
`issueDateTime`|`string`|[`dateTime`](#dateTime)|**Required** Date and time the ticket was issued.
`pseudoCityCode`|`string`|[`IATACityCode`](#IATACityCode)|IATA city code the ticket was issued from. For example, SEA for Seattle.
`IATAAgencyNumber`|`string`|[`IATAAgencyNumber`](#IATAAgencyNumber)|Identifying number assigned by the IATA to the agency issuing the ticket.
`agencyName`|`string`|-|Name of the agency issuing the ticket.
`passengerName`|`string`|-|**Required** Name of the passenger associated with the ticket.
`coupons`|`array`|[`coupons`](#coupons)|**Required** Flights issued within this transaction.

#### <a name="coupons"></a>coupons

Name | Type | Format | Description
-----|------|--------|------------
`originationAirportIATACode`|`string`|[`IATAAirportCode`](#IATAAirportCode)|**Required** IATA airport code of the flight's origin.
`originationDateTime`|`string`|[`dateTime`](#dateTime)|**Required** Date and time of origin.
`destinationAirportIATACode`|`string`|[`IATAAirportCode`](#IATAAirportCode)|**Required** IATA airport code of the flight's destination.
`destinationDateTime`|`string`|[`dateTime`](#dateTime)|**Required** Date and time of destination.
`flightNumber`|`string`|-|Flight identifier.
`couponNumber`|`string`|[`nonEmptyString`](#nonEmptyString)|**Required** Identifier associated with the given coupon.
`operatingAirlineCode`|`string`|[`IATAAirlineCode`](#IATAAirlineCode)|**Required** IATA code of the airline operating the flight.
`marketingCarrier`|`string`|[`flightDesignator`](#flightDesignator)|**Required** Flight designator booking the flight.
`operatingCarrier`|`string`|[`flightDesignator`](#flightDesignator)|**Required** Flight designator operating the flight.
`classOfServiceCode`|`string`|[`classOfServiceCode`](#classOfServiceCode)|**Required** Class of service per the airline's class of service codes. Most airlines use the same codes but some airlines have custom codes.
`fareBasisCode`|`string`|[`fareBasisCode`](#fareBasisCode)|**Required** Rate code the airline used to calculate the fare for this flight.
`ticketDesignatorCode`|`string`|[`ticketDesignatorCode`](#ticketDesignatorCode)|A valid ticket designator code to indicate what type of discount is applied, such as for a child or infant, or airline employee. This is a 1 to 10 alphanumeric code and can optionally include a single asterisk. Ticket designators are free-form text codes which help identify ticket types. Airlines determine which ticket designators they will use as no standards currently exist.
`fare`|`string`|[`currency`](#currency)|**Required** Fare charged for the flight.
`taxes`|`array`|[`taxes`](#taxes)|Taxes paid as part of transaction.
`lineItems`|`array`|[`lineItems`](#lineItems)|Line Items/fees specific to a leg of the trip. Eg. Baggage fees, class of service fees, priority boarding, meals.

### <a name="Car"></a>Car Rental

Name | Type | Format | Description
-----|------|--------|------------
`core`|`object`|[`core`](#Core)| **Required** Core values for all receipts.
`itineraryLocator`|`string`|[`nonEmptyString`](#nonEmptyString)|Unique ID of an itinerary (also know as a trip) in Concur’s Itinerary Service.  An itinerary can contain one or more bookings from various sources.
`segmentLocator`|`string`|[`nonEmptyString`](#nonEmptyString)|Unique ID of a single travel event in Concur’s Itinerary Service.  An itinerary can contain one or more bookings and each booking can contain one or more segments. The segmentLocator uniquely identifies an event like a car rental with a specific start and end date or a single air segment/sector.
`startDateTime`|`string`|[`dateTime`](#dateTime)|**Required** Rental start date and time.
`endDateTime`|`string`|[`dateTime`](#dateTime)|**Required** Rental end date and time.
`pickupLocation`|`object`|[`location`](#location)|**Required**Vehicle pick up location.
`dropoffLocation`|`object`|[`location`](#location)|**Required**Vehicle drop off location.
`rentalDays`|`integer`|[`positiveInteger`](#positiveInteger)|**Required** Total number of days for rental.
`rentalAgreementNumber`|`string`|-|Agreement identifier.
`confirmationNumber`|`string`|-|Booking confirmation identifier.
`vehicle`|`object`|[`vehicle`](#vehicle)|Vehicle description.
`distance`|`object`|[`distance`](#distance)|Distance travelled.
`odometerReadingOut`|`number`|-|Odometer reading at the start of the rental period. A number with up to one decimal place is expected.
`odometerReadingIn`|`number`|-|Odometer reading at the start of the rental period. A number with up to one decimal place is expected.
`additionalDriver`|`boolean`|-|Additional approved driver (true) or not (false).
`lineItems`|`array`|[`lineItems`](#lineItems)|Break down of all car rental charges. This could include daily rate, fees, insurance, GPS rental and other add-ons.

#### <a name="vehicle"></a>vehicle

Name | Type | Format | Description
-----|------|--------|------------
`registrationNumber`|`string`|-|Registration or license plate identifier.
`description`|`string`|-|Vehicle description, including year, make and model.
`classReservedCode`|`string`|[`acrissCarCode`](#acrissCarCode)|Association of Car Rental Industry Systems Standard (ACRISS) four letter car code.
`classRentedCode`|`string`|[`acrissCarCode`](#acrissCarCode)|Actual vehicle rented ACRISS identifier.
`classChargedCode`|`string`|[`acrissCarCode`](#acrissCarCode)|Car class code charged ACRISS identifier.
`engineSize`|`string`|[`engineSize`](#engineSize)|Engine size in cubic centimeters.

#### <a name="distance"></a>distance

Name | Type | Format | Description
-----|------|--------|------------
`totalDistance`|`number`|-|Distance traveled.
`unit`|`enum`|-|**mi** or **km**  indicating miles or kilometers.

### <a name="Hotel"></a>Hotel

Name | Type | Format | Description
-----|------|--------|------------
`core`|`object`|[`core`](#Core)|**Required** Core values for all receipts.
`itineraryLocator`|`string`|[`nonEmptyString`](#nonEmptyString)|Unique ID of an itinerary (also know as a trip) in Concur’s Itinerary Service.  An itinerary can contain one or more bookings from various sources.
`segmentLocator`|`string`|[`nonEmptyString`](#nonEmptyString)|Unique ID of a single travel event in Concur’s Itinerary Service.  An itinerary can contain one or more bookings and each booking can contain one or more segments. The segmentLocator uniquely identifies something like a hotel stay with a specific start and end date or a single air segment/sector.
`property`|`object`|[`property`](#property)|**Required** Physical property location information for the hotel property. This is often different than the merchant location information.
`confirmationNumber`|`string`|-|Booking identifier.
`checkInDateTime`|`string`|[`dateTime`](#dateTime)|**Required** Check in date and time.
`checkOutDateTime`|`string`|[`dateTime`](#dateTime)|**Required** Check out date and time.
`guests`|`array`|[`guests`](#guests)|**Required** Guest information.
`numberInParty`|`integer`|[`positiveInteger`](#positiveInteger)|Number of individuals for the stay.
`room`|`object`|[`room`](#room)|**Required** Room details.
`nightsStayed`|`integer`|[`positiveInteger`](#positiveInteger)|**Required** Number of nights for the stay.
`lineItems`|`array`|[`lineItems`](#lineItems)|**Required** Break down of all hotel charges. This could include the daily room rate, meals and other charges.

#### <a name="property"></a>property

Name | Type | Format | Description
-----|------|--------|------------
`name`|`string`|[`nonEmptyString`](#nonEmptyString)|**Required** Name of the hotel property where the guest stayed.
`description`|`string`|-|A brief description of the hotel.
`location`|`object`|[`location`](#location)|**Required** Location of the hotel property where the guest stayed.

#### <a name="guests"></a>guests

Name | Type | Format | Description
-----|------|--------|------------
`guestNameRecord`|`string`|-|The loyalty or membership number of the hotel guest.
`firstName`|`string`|[`nonEmptyString`](#nonEmptyString)|**Required** First name of the guest.
`lastName`|`string`|[`nonEmptyString`](#nonEmptyString)|**Required** Last name of the guest.
`address`|`object`|[`address`](#address)|Address of the guest. It is highly recommended that the business address of the guest is provided if the hotel is provided with one. Doing so will help VAT reclamation partners who work with companies, to have compliant receipts accepted by the tax authority when filing tax reclaims.

#### <a name="room"></a>room

Name | Type | Format | Description
-----|------|--------|------------
`roomNumber`|`string`|-|Room number where the guest stayed.
`roomType`|`string`|-|Type of room where the guest stayed. For example, Standard, Deluxe, etc.
`ratePlanType`|`string`|-|Name of the rate plan according to which the guest was charged.
`averageDailyRoomRate`|`string`|[`currency`](#currency)|**Required** Average of the daily room rates for the duration of the guests stay. Room rates usually differ from day to day.

### <a name="GroundTransport"></a>Ground Transport

Name | Type | Format | Description
-----|------|--------|------------
`core`|`object`|[`core`](#Core)|**Required**: core object for all receipts.
`itineraryLocator`|`string`|[`nonEmptyString`](#nonEmptyString)|Unique ID of an itinerary (also know as a trip) in Concur’s Itinerary Service.  An itinerary can contain one or more bookings from various sources.
`segmentLocator`|`string`|[`nonEmptyString`](#nonEmptyString)|Unique ID of a single travel event in Concur’s Itinerary Service.  An itinerary can contain one or more bookings and each booking can contain one or more segments. The segmentLocator uniquely identifies something like a car rental with a specific start and end date or a single air segment/sector.
`startDateTime`|`string`|[`dateTime`](#dateTime)|**Required** Date and time of when customer was picked up.
`endDateTime`|`string`|[`dateTime`](#dateTime)|**Required** Date and time of when customer was dropped off.
`pickupLocation`|`object`|[`location`](#location)|**Required** Location where the customer was picked up.
`dropoffLocation`|`object`|[`location`](#location)|**Required** Location where the customer was dropped off.
`driverNumber`|`string`|-|Unique identifier assigned by the ride company to a driver.
`lineItems`|`array`|[`lineItems`](#lineItems)|Descriptive breakdown of the fare charged. For example: base fare, distance travelled, discount and other add-ons.

### <a name="Rail"></a>Rail

Name | Type | Format | Description
-----|------|--------|------------
`core`|`object`|[`core`](#Core)|**Required**: core object for all receipts.
`itineraryLocator`|`string`|[`nonEmptyString`](#nonEmptyString)|Unique ID of an itinerary (also know as a trip) in Concur’s Itinerary Service.  An itinerary can contain one or more bookings from various sources.
`railTickets`|`array`|[`railTickets`](#railTickets)|**Required** Train tickets purchased in this transaction.
`lineItems`|`array`|[`lineItems`](#lineItems)|Break down of all charges which could include insurance purchased for all train tickets, paid wi-fi etc.

#### <a name="railTickets"></a>railTickets

Name | Type | Format | Description
-----|------|--------|------------
`ticketNumber`|`string`|-|Ticket number issued when the payment is made.
`recordLocator`|`string`|-|**Required** Confirmation identifier for the ticket. This code is usually unique for a short period of time and could be reused by the rail company in the future.
`issueDateTime`|`string`|[`dateTime`](#dateTime)|**Required** Date and time the ticket was issued. 
`passengerName`|`string`|-|**Required** Name of the person associated withthe ticket.
`fare`|`currency`|[`currency`](#currency)|Fare charged for a train ticket. This will be the total of all segments in this train ticket.
`segments`|`array`|[`segments`](#segments)|**Required** Segments for this train ticket.

#### <a name="segments"></a>segments

Name | Type | Format | Description
-----|------|--------|------------
`departureStation`|`string`|-|**Required** Name of the station from where the train is departing.
`departureDateTime`|`string`|[`dateTime`](#dateTime)|**Required** Date and time of departure.
`arrivalStation`|`string`|-|**Required** Name of the station where the train is arriving.
`arrivalDateTime`|`string`|[`dateTime`](#dateTime)|**Required** Date and time of arrival.
`trainNumber`|`string`|-|**Required** Train identifier.
`trainType`|`string`|-|Type of train. For example TGV or TER in France.
`classOfServiceCode`|`string`|[`classOfServiceCode`](#classOfServiceCode)|**Required** The class of travel.
`fare`|`string`|[`currency`](#currency)|Fare charged for this segment of the train ride.
`taxes`|`array`|[`taxes`](#taxes)|Taxes paid for this segment.
`lineItems`|`array`|[`lineItems`](#lineItems)|Line items specific to this segment. This could include meals, seat reservations, insurance etc.

### <a name="JPT"></a>Japan Public Transport (JPT)

Name | Type | Format | Description
-----|------|--------|------------
`core`|`object`|[`core`](#Core)|**Required** Core object for all receipts.
`icCardId`|`string`|[`nonEmptyString`](#nonEmptyString)|**Required** The unique identifier for the card with a maximum length of 20 characters.
`segments`|`array`|[`icCardSegment`](#icCardSegment)|**Required** The segments for the trip.

#### <a name="icCardSegment"></a>icCardSegment

Name | Type | Format | Description
-----|------|--------|------------
`sequenceNumber`|`integer`|-|**Required** Unique transaction identifier for every trip taken using the IC card.
`dateTime`|`string`|[`dateTime`](#dateTime)|Transaction date and time.
`fromStationCode`|`string`|-|**Required** Departure station code of the route. This code is specified to the IC Card vendor. Concur Expense has a transcoding table to Expense location codes.
`fromStationName`|`string`|-|**Required** Departure station label of the route.
`toStationCode`|`string`|-|**Required** Arrival station code of the route. This code is specified to the IC Card vendor. Concur Expense has a transcoding table to Expense location codes.
`toStationName`|`string`|-|**Required** Arrival station label of the route.
`fromIsCommuterPass`|`boolean`|-|Is the departure route included in the commuter pass subscription of the employee.
`toIsCommuterPass`|`boolean`|-|Is the arrival route included in the commuter pass subscription of the employee.
`distance`|`integer`|-|Distance between departure and arrival station.

### <a name="Core"></a>core

Name | Type | Format | Description
-----|------|--------|------------
`user`|`string`|-|**Required** Fully qualified URL for the user identifier.
`app`|`string`|-|**Required** Fully qualified URL for the client application identifier.
`dateTime`|`string`|[`dateTime`](#dateTime)|**Required** Date and time of the transaction.
`total`|`string`|[`currency`](#currency)|**Required** The total amount of the transaction including all lineitems and taxes.
`subtotal`|`string`|[`currency`](#currency)|The amount in the transaction excluding taxes.
`taxesTotal`|`string`|[`currency`](#currency)|The amount of tax paid in the transaction.
`currencyCode`|`string`|[`currencyCode`](#currencyCode)|**Required** Currency paid to the merchant.
`broker`|`object`|[`merchant`](#merchant)|The entity that facilitates the transaction between the seller and end user.
`seller`|`object`|[`merchant`](#merchant)|**Required** The entity providing service to the end user.
`payments`|`array`|[`payments`](#payments)|**Required** One or more payment methods for the transaction.
`discounts`|`array`|[`discounts`](#discounts)|The discount offered on this transaction.
`taxes`|`array`|[`taxes`](#taxes)|Taxes paid as part of transaction.
`reference`|`string`|-|The unique receipt provider or merchant identifier for this receipt or invoice. This value can also be referred to as transaction number, check number, order ID or similar.
`collectionReference`|`string`|-|Use this key to group related receipts into a collection for credits, tips or other adjustments to the original transaction and looking at groups of receipts for analysis purposes. The reference and collectionReference keys typically have separate and unique values but could be the same for the first receipt in a collection.
`taxInvoice`|`boolean`|-|A tax invoice (true) or otherwise (false).

#### <a name="merchant"></a>merchant

Name | Type | Format | Description
-----|------|--------|------------
`name`|`string`|[`nonEmptyString`](#nonEmptyString)|**Required** Name of the merchant.
`location`|`object`|[`location`](#location)|**Required** Location and address.
`description`|`string`|-|Description of the service provided by the merchant.
`taxId`|`string`|-|The tax identification number assigned to the merchant by the national tax authority. If the partner is providing a tax invoice, then providing a tax identification number is recommended.

#### <a name="discounts"></a>discounts

Name | Type | Format | Description
-----|------|--------|------------
`discountName`|`string`|-|The name of the discount.
`discountCode`|`string`|-|The code for the discount.
`discountRate`|`string`|-|The percentage of discount provided.

#### <a name="location"></a>location

Name | Type | Format | Description
-----|------|--------|------------
`name`|`string`|-|The name for the location.
`number`|`string`|-|The identifier the company assigned to this location.
`address`|`object`|[`address`](#address)|**Required** Address for this location.
`latitude`|`number`|[`latitude`](#latitude)|The latitude of the location.
`longitude`|`number`|[`longitude`](#longitude)|The longitude of the location.
`internetAddress`|`string`|-|World wide web address.
`emailAddress`|`string`|-|Email address.
`telephoneNumber`|`string`|-|Telephone number.
`faxNumber`|`string`|-|Fax number.

#### <a name="address"></a>address

Name | Type | Format | Description
-----|------|--------|------------
`streetAddress`|`string`|-|Street address.
`addressLocality`|`string`|-|City.
`addressRegion`|`string`|[`countrySubdivisionCode`](#countrySubdivisionCode)|1 to 3 character state, province, or other country subdivision as defined in ISO 3166-2:2013.
`addressCountry`|`string`|[`countryCode`](#countryCode)|**Required** 2 or 3 character country code as defined in ISO 3166-2:2013.
`postalCode`|`string`|-|Postal code.

#### <a name="payments"></a>payments

The payments array allows for one or more payment methods used in the transaction to be defined.  All payment methods defined within the array result in the value for `total` in the base object of the receipt. The JSON keyword 'anyOf' which indicates at least one of the following is required and multiple can be present: [cash](#cash), [creditCard](#creditCard), [companyPaid](#companyPaid), [digitalWallet](#digitalWallet) and / or [unusedTicket](#unusedTicket).

##### <a name="cash"></a>cash

Represents cash transactions.

Name | Type | Format | Description
-----|------|--------|------------
`amount`|`string`|[`currency`](#currency)|**Required** Amount.

##### <a name="creditCard"></a>creditCard

Represents transactions where a credit card was used.

Name | Type | Format | Description
-----|------|--------|------------
`amount`|`string`|[`currency`](#currency)|**Required** Amount.
`cardDetail`|`object`|[`cardDetail`](#cardDetail)|**Required** Credit card information.

##### <a name="companyPaid"></a>companyPaid

This category represents transactions in which the company is billed for the transaction or a common form of payment is used within the company.

Name | Type | Format | Description
-----|------|--------|------------
`source`|`enum`|-|**Required** "GhostCard", "LodgeCard", "DirectPay", "Invoice".
`amount`|`string`|[`currency`](#currency)|**Required** Amount.
`cardDetail`|`object`|[`cardDetail`](#cardDetail)|**Required** Credit card information.

##### <a name="digitalWallet"></a>digitalWallet

This category represents modern forms of payment. Calling applications may often interpret this form of payment as cash.

Name | Type | Format | Description
-----|------|--------|------------
`source`|`enum`|-|**Required** "ApplePay", "GoogleWallet", "PayPal", "Square", "IntuitPay".
`amount`|`string`|[`currency`](#currency)|**Required** Amount.

##### <a name="unusedTicket"></a>unusedTicket

This category represents the value of an unused airline ticket that is put toward the purchase of a new airline ticket.

Name | Type | Format | Description
-----|------|--------|------------
`ticketNumber`|`string`|[`nonEmptyString`](#nonEmptyString)|**Required** The ticket number for the unused ticket value.
`amount`|`string`|[`currency`](#currency)|**Required** Amount

###### <a name="cardDetail"></a>Card Detail

Name | Type | Format | Description
-----|------|--------|------------
`cardType`|`enum`|-|**Required** "American Express","Diner’s Club","Discover","MasterCard","Visa","Carte Blanche","Enroute","Universal Air Travel","JCB","EuroCard".
`creditCardId`|`string`|`creditCardId`|Last four digits of the credit card used for the transaction.
`authorizationCode`|`string`|-|Authorization code for transaction.

### <a name="lineItems"></a>lineItems

Name | Type | Format | Description
-----|------|--------|------------
`sequenceNumber`|`integer`|-|**Required** The order in which the item appears in the sequence of line items when the receipt is rendered by Concur.
`dateTime`|`string`|[`dateTime`](#dateTime)|Date and time of the transaction.
`reference`|`string`|-|The item SKU, identifier or some other attribute the merchant uses to reference the item.
`description`|`string`|[`nonEmptyString`](#nonEmptyString)|**Required** Description for this lineItem.
`additionalDescription`|`string`|-|Additional description for this lineItem.
`semanticsCode`|`string`|-|The [Concur semantics code]((https://developer.concur.com/api-reference/travel/itinerary/itinerary.html#semantics_codes) for the line item.
`unitCost`|`string`|[`currency`](#currency)|Amount per unit.
`quantity`|`integer`|-|Decimal quantity, minimum 0.
`total`|`string`|[`currency`](#currency)|**Required** The total amount paid for this line item.
`subtotal`|`string`|[`currency`](#currency)|The amount paid for the line item excluding taxes.
`taxesTotal`|`string`|[`currency`](#currency)|The amount of tax paid for this line item.
`taxes`|`array`|[`taxes`](#taxes)|Taxes paid as part of transaction.
`vatApplicable`|`boolean`|-|If lineItem was subject to a value added tax then true, if not then false.
`discounts`|`array`|[`discounts`](#discounts)|The discount offered for this line item.

#### <a name="taxes"></a>taxes

Name | Type | Format | Description
-----|------|--------|------------
`authority`|`string`|-|**Required** Name of the country or subdivision that charged the tax as per ISO 3166-2:2013.
`rate`|`number`|-|**Required** Percentage of tax charged.
`rateType`|`number`|-|The rate type for the tax charged. For value added tax this could be Zero, Standard, Reduced, etc.
`amount`|`string`|[`currency`](#currency)|**Required** Amount of tax charged in the currency paid to the merchant. Any positive, negative, or zero number with up to 14 significant digits and up to 3 decimal places.

## <a name="Common"></a>Patterns for formatting data 

Name | Type | Description
-----|------|------------
<a name="dateTime"></a>`dateTime`|`string`|DateTime when the transaction occurred in the format specified in ISO 8601. While the standard regards time zone designators as optional, we highly recommend to use UTC + Offset. For example, 2016-04-22T12:20+0700 (12:20 PM in Pacific Time).
<a name="nonEmptyString"></a>`nonEmptyString`|`string`|"minLength": 1, "pattern": "^(?!\\s*$).+"
<a name="countrySubdivisionCode"></a>`countrySubdivisionCode`|`string`|"pattern": "^[a-zA-Z0-9]{1,3}$". Refer to ISO 3166-2:2013.
<a name="countryCode"></a>`countryCode`|`string`|"minLength": 2, "maxLength": 3. Refer to ISO 3166-2:2013.
<a name="currency"></a>`currency`|`string`|"pattern": "^[-]?\\d*\\.?\\d+$"
<a name="currencyCode"></a>`currencyCode`|`string`|"minLength": 3, "maxLength": 3. ISO 4217 currency code for the currency paid to the merchant.
<a name="latitude"></a>`latitude`|`number`|"minimum": -90, "maximum": 90
<a name="longitude"></a>`longitude`|`number`|"minimum": -180, "maximum": 180
<a name="positiveInteger"></a>`positiveInteger`|`integer`|"minimum": 0, "exclusiveMinimum": true
<a name="IATAAirportCode"></a>`IATAAirportCode`|`string`|"pattern": "^[a-zA-Z]{3}$"
<a name="IATAAirlineCode"></a>`IATAAirlineCode`|`string`|"pattern": "^[a-zA-Z]{2}$"
<a name="IATACityCode"></a>`IATACityCode`|`string`|"pattern": "^[a-zA-Z]{3}$"
<a name="IATAAgencyNumber"></a>`IATAAgencyNumber`|`string`|"pattern": "^[0-9]{8}$"
<a name="flightDesignator"></a>`flightDesignatorNumber`|`string`|"pattern": "^[a-zA-Z0-9]{3,8}$"
<a name="classOfServiceCode"></a>`classOfServiceCode`|`string`|"pattern": "^[a-zA-Z]$"
<a name="fareBasisCode"></a>`fareBasisCode`|`string`|"pattern": "^[a-zA-Z0-9]{3,8}$"
<a name="ticketDesignatorCode"></a>`ticketDesignatorCode`|`string`|"pattern": "^[a-zA-Z0-9\*?]{1,10}$"
<a name="acrissCarCode"></a>`acrissCarCode`|`string`|"pattern": "^[a-zA-Z]{4}$"

## <a name="FailureCodes"></a>Failure Codes

The API signals errors using standard HTTP status codes. In case of 5xx errors, the client is expected to handle these and retry the request at a later point. 4xx errors usually indicate an incorrect request. Available failure codes and their descriptions are listed below.

Endpoint Name | Endpoint | Response Code
------------ | -------------- | -----------------
receipt-post | POST `/v4/users/{userId}` | 201 - Created
 | | 400 - User being posted to doesn't match user in the receipt
 | | 400 - Content Type can't be parsed
 | | 400 - Request body can't be parsed
 | | 400 - Invalid receipt schema
 | | 400 - Receipt failed schema validation
 | | 400 - Link header must be provided and include a URL to a known receipt schema
 | | 401 - Unauthorized to post to the user's receipts collection
 | | 403 - Credentials (JWT) were insufficient to post receipts
 | | 415 - Content Type not supported
 | | 500 - Internal Server Error
 | | 501 - Receipt type not yet supported
