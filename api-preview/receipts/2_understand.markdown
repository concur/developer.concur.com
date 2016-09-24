---
title: Understand the Receipts API
layout: reference
---

# Receipts

## Understand the Receipts API

- [Overview of Version 4.0](#overview)
- [Supported Receipt Types](#supported-receipt-types)
  - [Air Receipt](#air-receipt)
  - [Car Rental Receipt](#car-rental-receipt)
  - [General Receipt](#general-receipt)
  - [Japan Public Transportation Receipt](#japan-public-transportation-receipt)
  - [Ground Transport Receipt](#ground-transport-receipt)
  - [Hotel Receipt](#hotel-receipt)
  - [Rail Receipt](#rail-receipt)
- [E-Receipt Generation](#e-receipt-generation)

### Overview

Version 4.0 of the Receipts API offers features like more receipt types, automatic e-receipt generation in end user’s preferred language and ability for partners to provide detailed tax information. Unlike version 3.0, we are discontinuing the use of matching facts; instead the partner will have to create a receipt for a specific end user. Receipts 4.0 works only with the new Authentication API. 

### Supported Receipt Types

In the tables below, a property name mentioned in __*bold italics*__ is required. If not, it is optional.

## Address-Original

Postal address schema used for JPT receipts _only_.

|Property Name|Type|Format|Description|
|---|---|---|---|
|address|string|N/A||
|address2|string|N/A||
|city|string|N/A||
|countrySubdivisionCode|string|^[a-zA-Z0-9]{1,3}$|1 to 3 character country subdivision code as defined in ISO 3166-2:2013|
|__*countryCode*__|string|country-code|2 or 3 character country code as defined in ISO 3166-2:2013|
|postalCode|string|N/A||

## Address

Common address object used by all receipt types except for the JPT IC Card receipt, which uses [Address-Original](#address-original).

|Property Name|Type|Format|Description|
|---|---|---|---|
|streetAddress|string|N/A||
|addressLocality|string|N/A|City|
|addressRegion|string|^[a-zA-Z0-9]{1,3}$|1 to 3 character country subdivision code as defined in ISO 3166-2:2013|
|__*addressCountry*__|string|country-code|2 or 3 character country code as defined in ISO 3166-2:2013|
|postalCode|string|N/A||

## Air Receipt

Schema for airline receipts.

* Includes all of [Receipt Core Definitions](#receipt-core-definitions)

|Property Name|Type|Format|Description|
|---|---|---|---|
|itineraryLocator|string|^(?!\s*$).+|Unique ID of an itinerary (also know as a trip) in Concur’s Itinerary Service. An itinerary can contain one or more bookings from various sources.|
|tickets|array|[tickets](#tickets)|Air tickets issued.|
|lineItems|array|[lineItems](#line-item)|Ancillary airline fees.|

### tickets

|Property Name|Type|Format|Description|
|---|---|---|---|
|__*number*__|string|N/A|Ticket number issued by the airline when the payment is made. Ticket numbers are globally unique for all IATA carriers. The first 3 digits identify the airline. The three digit code for each airline can be found [here](http://www.iata.org/about/members/Pages/airline-list.aspx?All=true). For example the ticket number for American Airlines where 001 is the airline: 0012375432602.|
|recordLocator|string|N/A|Confirmation identifier for the ticket created by the airline. For most airlines this is a 6 character alphanumeric code that is unique for a short period of time and could be reused in the future.|
|__*issueDateTime*__|string|date-time|Date and time the ticket was issued.|
|pseudoCityCode|string|^[a-zA-Z]{3}$|IATA city code the ticket was issued from. For example, SEA for Seattle.|
|IATAAgencyNumber|string|^[0-9]{8}$|Identifying number assigned by the IATA to the agency issuing the ticket.|
|agencyName|string|N/A|Name of the agency issuing the ticket.|
|__*passengerName*__|string|N/A|Name of the passenger associated with the ticket.|
|__*coupons*__|array|[coupons](#coupons)|Flights issued within this transaction.|

### coupons

|Property Name|Type|Format|Description|
|---|---|---|---|
|__*originationAirportIATACode*__|string|^[a-zA-Z]{3}$|IATA airport code of the flight’s origin.|
|__*originationDateTime*__|string|date-time|Date and time of origin.|
|__*destinationAirportIATACode*__|string|^[a-zA-Z]{3}$|IATA airport code of the flight’s destination.|
|__*destinationDateTime*__|string|date-time|Date and time of destination.|
|flightNumber|string|N/A|Flight identifier.|
|__*couponNumber*__|string|^(?!\s*$).+|Identifier associated with the given coupon.|
|__*operatingAirlineCode*__|string|^[a-zA-Z]{2}$|IATA code of the airline operating the flight.|
|__*marketingCarrier*__|string|^[a-zA-Z0-9]{3,8}$|Flight designator booking the flight.|
|__*operatingCarrier*__|string|^[a-zA-Z0-9]{3,8}$|Flight designator operating the flight.|
|__*classOfServiceCode*__|string|^[a-zA-Z]$|Class of service per the airline’s class of service codes. Most airlines use the same codes but some airlines have custom codes.|
|__*fareBasisCode*__|string|^[a-zA-Z0-9]{3,8}$|Rate code the airline used to calculate the fare for this flight.|
|ticketDesignatorCode|string|^[a-zA-Z0-9\*?]{1,10}$|A valid ticket designator code to indicate what type of discount is applied, such as for a child or infant, or airline employee. This is a 1 to 10 alphanumeric code and can optionally include a single asterisk. Ticket designators are free-form text codes which help identify ticket types. Airlines determine which ticket designators they will use as no standards currently exist.|
|__*fare*__|string|^[-]?\d*\.?\d+$|Fare charged for the flight.|
|taxes|array|[Taxes](#taxes)|Schema for objects that make up an array of taxes. Used in most receipt types.|
|lineItems|array|[lineItems](#line-item)|Line Items/fees specific to a leg of the trip. Eg. Baggage fees, class of service fees, priority boarding, meals.|

### Definitions

|Property Name|Type|Format|Description|
|---|---|---|---|
|IATAAirportCode|string|^[a-zA-Z]{3}$|3-letter IATA code for an airport.|
|IATAAirlineCode|string|^[a-zA-Z]{2}$|2-letter code for an airline.|
|IATACityCode|string|^[a-zA-Z]{3}$|3-letter IATA city code. For example, SEA for Seattle.|
|IATAAgencyNumber|string|^[0-9]{8}$|8-character ID number assigned by the IATA to an agency.|
|flightDesignator|string|^[a-zA-Z0-9]{3,8}$||
|classOfServiceCode|string|^[a-zA-Z]$||
|fareBasisCode|string|^[a-zA-Z0-9]{3,8}$||
|ticketDesignatorCode|string|^[a-zA-Z0-9\*?]{1,10}$||

## Car Rental Receipt

Schema for car rentals. This does not include ride services or taxis.

* Includes all of [Receipt Core Definitions](#receipt-core-definitions)

|Property Name|Type|Format|Description|
|---|---|---|---|
|itineraryLocator|string|^(?!\s*$).+|Unique ID of an itinerary (also know as a trip) in Concur’s Itinerary Service. An itinerary can contain one or more bookings from various sources.|
|segmentLocator|string|^(?!\s*$).+|Unique ID of a single travel event in Concur’s Itinerary Service. An itinerary can contain one or more bookings and each booking can contain one or more segments. The segmentLocator uniquely identifies an event like a car rental with a specific start and end date or a single air segment/sector.|
|__*startDateTime*__|string|date-time|Date representation, as defined by RFC 3339, section 5.6|
|__*endDateTime*__|string|date-time|Date representation, as defined by RFC 3339, section 5.6|
|__*pickupLocation*__|object|[Location](#location)|Schema representing a location, including geographical information and a postal address. Used in multiple receipt types.|
|__*dropoffLocation*__|object|[Location](#location)|Schema representing a location, including geographical information and a postal address. Used in multiple receipt types.|
|__*rentalDays*__|integer|N/A|Total number of days for which the car was rented.|
|rentalAgreementNumber|string|N/A|Agreement identifier.|
|confirmationNumber|string|N/A|Booking confirmation identifier.|
|vehicle|object|[vehicle](#vehicle)||
|distance|object|[distance](#distance)|Distance traveled.|
|odometerReadingOut|number|N/A|Odometer reading at the start of the rental period. A number with up to one decimal place is expected.|
|odometerReadingIn|number|N/A|Odometer reading at the end of the rental period. A number with up to one decimal place is expected.|
|additionalDriver|boolean|N/A|Additional approved driver (true) or not (false).|
|lineItems|array|[lineItems](#line-item)|Break down of all car rental charges. This could include daily rate, fees, insurance, GPS rental and other add-ons.|

### vehicle

|Property Name|Type|Format|Description|
|---|---|---|---|
|registrationNumber|string|N/A|Registration or license plate identifier.|
|description|string|N/A|Vehicle description, including year, make and model.|
|classReservedCode|string|^[a-zA-Z]{4}$|Four-letter Association of Car Rental Industry Systems Standard (ACRISS) car code.|
|classRentedCode|string|^[a-zA-Z]{4}$|Actual vehicle rented ACRISS identifier.|
|classChargedCode|string|^[a-zA-Z]{4}$|Car class code actually charged to the user.|
|engineSize|string|^[0-9]{1,4}$|Engine displacement in cubic centimeters.|

### Definitions
|Property Name|Type|Format|Description|
|---|---|---|---|
|acrissCarCode|string|^[a-zA-Z]{4}$|Four-letter Association of Car Rental Industry Systems Standard (ACRISS) car code.|
|engineSize|string|^[0-9]{1,4}$|Engine displacement in cubic centimeters.|

## Common Definitions
Shared definitions that are utilized in multiple receipt types.
###Definitions
|Property Name|Type|Format|Description|
|---|---|---|---|
|dateTime|string|date-time|The dateTime validation validates for a subset of ISO 8601 date-times. The first restriction is that the dateTime requires a date, a time (at least the hour portion), and a UTC offset. The second restriction is that the dateTime does not allow a time to be formatted in UTC time (2015-11-02T14:30Z - notice the Z) without an offset; This is because it would be impossible for us to know the original offset so we could not generate a receipt with the correct local time.|
|duration|string|^(-)?P(?:(-?[0-9,.]*)Y)?(?:(-?[0-9,.]*)M)?(?:(-?[0-9,.]*)W)?(?:(-?[0-9,.]*)D)?(?:T(?:(-?[0-9,.]*)H)?(?:(-?[0-9,.]*)M)?(?:(-?[0-9,.]*)S)?)?$|Duration of a time interval as defined in ISO 8601|
|nonEmptyString|string|^(?!\s*$).+|Non-empty string. Length must be at least 1 character.|
|addressRegion|string|^[a-zA-Z0-9]{1,3}$|1 to 3 character country subdivision code as defined in ISO 3166-2:2013|
|addressCountry|string|country-code|2 or 3 character country code as defined in ISO 3166-2:2013|
|currency|string|^[-]?\d*\.?\d+$|String representing an amount of money. Should not include a currency code or symbol, as this information is included in the currencyCode field of the receipt.|
|currencyCode|string|currency-code|3-letter currency code as defined in ISO 4217|
|latitude|number|N/A|Numeric latitude value between -90 and 90|
|longitude|number|N/A|Numeric longitude value between -180 and 180|
|positiveInteger|integer|N/A|Positive integer value of at least 1|

#### distance

|Property Name|Type|Format|Description|
|---|---|---|---|
|__*totalDistance*__|number|N/A||
|__*unit*__|N/A|N/A| Can be any of the following values: mi, km|

## Discount

Schema for discounts, such as coupons or discount codes, that could be part of a transaction.

|Property Name|Type|Format|Description|
|---|---|---|---|
|discountName|string|N/A|The name of the discount.|
|discountCode|string|N/A|The code for the discount.|
|discountRate|string|N/A|The percentage of discount provided.|

## General Receipt

General receipt type for transactions that do not fall under one of the more specific receipt types. This might include retail stores or restaurants.

* Includes all of [Receipt Core Definitions](#receipt-core-definitions)

|Property Name|Type|Format|Description|
|---|---|---|---|
|lineItems|array|[lineItems](#line-item)|Line items specified for general receipts.|

## Ground Transport Receipt

Schema for ground transportation receipts. This includes essentially all forms of non-aerial transportation, _except_ those that run on railed tracks.

* Includes all of [Receipt Core Definitions](#receipt-core-definitions)

|Property Name|Type|Format|Description|
|---|---|---|---|
|itineraryLocator|string|^(?!\s*$).+|Non-empty string. Length must be at least 1 character.|
|segmentLocator|string|^(?!\s*$).+|Non-empty string. Length must be at least 1 character.|
|classOfService|string|^(?!\s*$).+|Non-empty string. Length must be at least 1 character.|
|__*startDateTime*__|string|date-time|Date representation, as defined by RFC 3339, section 5.6|
|endDateTime|string|date-time|Date representation, as defined by RFC 3339, section 5.6|
|travelDuration|string|^(-)?P(?:(-?[0-9,.]*)Y)?(?:(-?[0-9,.]*)M)?(?:(-?[0-9,.]*)W)?(?:(-?[0-9,.]*)D)?(?:T(?:(-?[0-9,.]*)H)?(?:(-?[0-9,.]*)M)?(?:(-?[0-9,.]*)S)?)?$|Duration of a time interval as defined in ISO 8601|
|__*pickupLocation*__|object|[Location](#location)|Schema representing a location, including geographical information and a postal address. Used in multiple receipt types.|
|dropoffLocation|object|[Location](#location)|Schema representing a location, including geographical information and a postal address. Used in multiple receipt types.|
|distance|object|[distance](#distance)|Object representing a distance.|
|driverNumber|string|N/A|Unique identifier assigned by the ride company to a driver.|
|lineItems|array|[lineItems](#line-item)|Descriptive breakdown of the fare charged. For example: base fare, distance travelled, discount and other add-ons.|

## Hotel Receipt

Schema for hotel receipts.

* Includes all of [Receipt Core Definitions](#receipt-core-definitions)

|Property Name|Type|Format|Description|
|---|---|---|---|
|itineraryLocator|string|^(?!\s*$).+|Unique ID of an itinerary (also know as a trip) in Concur’s Itinerary Service. An itinerary can contain one or more bookings from various sources.|
|segmentLocator|string|^(?!\s*$).+|Unique ID of a single travel event in Concur’s Itinerary Service. An itinerary can contain one or more bookings and each booking can contain one or more segments. The segmentLocator uniquely identifies an event like a car rental with a specific start and end date or a single air segment/sector.|
|property|object|[Location](#location)|Physical property location information for the hotel property. This is often different than the merchant location information.|
|confirmationNumber|string|N/A|Booking identifier.|
|__*checkInDateTime*__|string|date-time|Date representation, as defined by RFC 3339, section 5.6|
|__*checkOutDateTime*__|string|date-time|Date representation, as defined by RFC 3339, section 5.6|
|__*guests*__|array|[guests](#guests)|Guest information.|
|numberInParty|integer|N/A|Number of individuals for the stay.|
|__*room*__|object|[room](#room)||
|__*nightsStayed*__|integer|N/A|Positive integer value of at least 1|
|__*lineItems*__|array|[lineItems](#line-item)||

### guests

|Property Name|Type|Format|Description|
|---|---|---|---|
|guestNameRecord|string|N/A|The loyalty or membership number of the hotel guest.|
|__*firstName*__|string|^(?!\s*$).+|Non-empty string. Length must be at least 1 character.|
|__*lastName*__|string|^(?!\s*$).+|Non-empty string. Length must be at least 1 character.|
|address|object|[Address](#address)|Address of the guest. It is highly recommended that the business address of the guest is provided if the hotel is provided with one. Doing so will help VAT reclamation partners who work with companies, to have compliant receipts accepted by the tax authority when filing tax reclaims.|

### property

|Property Name|Type|Format|Description|
|---|---|---|---|
|name|string|N/A|The name for the location.|
|number|string|N/A|The identifier the company assigned to this location.|
|latitude|number|N/A|Numeric latitude value between -90 and 90|
|longitude|number|N/A|Numeric longitude value between -180 and 180|
|internetAddress|string|N/A||
|emailAddress|string|N/A||
|telephoneNumber|string|N/A||
|faxNumber|string|N/A||
|__*address*__|object|[Address](#address)|Common address object used by all receipt types except for the JPT IC Card receipt, which uses [Address-Original](#address-original).|

### room

|Property Name|Type|Format|Description|
|---|---|---|---|
|roomNumber|string|N/A|Room number where the guest stayed.|
|roomType|string|N/A|Type of room where the guest stayed. For example, Standard, Deluxe, etc.|
|ratePlanType|string|N/A|Name of the rate plan according to which the guest was charged.|
|__*averageDailyRoomRate*__|string|^[-]?\d*\.?\d+$|Average of the daily room rates for the duration of the guests stay. Room rates usually differ from day to day.|

## Japan Public Transportation Receipt

Schema specifically for Japan Public Transportation (JPT) JPT IC Card receipts. Not for use with any other rail transactions.

|Property Name|Type|Format|Description|
|---|---|---|---|
|__*user*__|string|N/A||
|__*app*__|string|N/A||
|__*dateTime*__|string|date-time|Date representation, as defined by RFC 3339, section 5.6|
|__*total*__|string|^[-]?\d*\.?\d+$|String representing an amount of money. Should not include a currency code or symbol, as this information is included in the currencyCode field of the receipt.|
|subtotal|string|^[-]?\d*\.?\d+$|String representing an amount of money. Should not include a currency code or symbol, as this information is included in the currencyCode field of the receipt.|
|taxesTotal|string|^[-]?\d*\.?\d+$|String representing an amount of money. Should not include a currency code or symbol, as this information is included in the currencyCode field of the receipt.|
|__*currencyCode*__|string|currency-code|3-letter currency code as defined in ISO 4217|
|__*merchant*__|object|[merchant](#merchant)||
|__*payments*__|array|[Payments](#payments)||
|taxes|array|[Taxes](#taxes)|Schema for objects that make up an array of taxes. Used in most receipt types.|
|reference|string|N/A||
|collectionReference|string|N/A||
|taxInvoice|boolean|N/A||
|__*icCardId*__|string|N/A|The unique identifier for the card with a maximum length of 20 characters.|
|__*segments*__|array|[segments](#segments)|The segments for the trip.|

### segments

|Property Name|Type|Format|Description|
|---|---|---|---|
|__*sequenceNumber*__|integer|N/A|Unique transaction identifier for every trip taken using the IC card.|
|__*dateTime*__|string|date-time|Date representation, as defined by RFC 3339, section 5.6|
|__*fromStationCode*__|string|N/A|Departure station code of the route. This code is specified to the IC Card vendor. Concur Expense has a transcoding table to Expense location codes.|
|__*fromStationName*__|string|N/A|Departure station label of the route.|
|__*toStationCode*__|string|N/A|Arrival station code of the route. This code is specified to the IC Card vendor. Concur Expense has a transcoding table to Expense location codes.|
|__*toStationName*__|string|N/A|Arrival station label of the route.|
|fromIsCommuterPass|boolean|N/A|Whether or not the departure route is included in the commuter pass subscription of the employee.|
|toIsCommuterPass|boolean|N/A|Whether or not the arrival route is included in the commuter pass subscription of the employee.|
|distance|integer|N/A|Distance between departure and arrival station.|

####icCardSegment

|Property Name|Type|Format|Description|
|---|---|---|---|
|__*sequenceNumber*__|integer|N/A|Unique transaction identifier for every trip taken using the IC card.|
|__*dateTime*__|string|date-time|Transaction date and time.|
|__*fromStationCode*__|string|N/A|Departure station code of the route. This code is specified to the IC Card vendor. Concur Expense has a transcoding table to Expense location codes.|
|__*fromStationName*__|string|N/A|Departure station label of the route.|
|__*toStationCode*__|string|N/A|Arrival station code of the route. This code is specified to the IC Card vendor. Concur Expense has a transcoding table to Expense location codes.|
|__*toStationName*__|string|N/A|Arrival station label of the route.|
|fromIsCommuterPass|boolean|N/A|Whether or not the departure route is included in the commuter pass subscription of the employee.|
|toIsCommuterPass|boolean|N/A|Whether or not the arrival route is included in the commuter pass subscription of the employee.|
|distance|integer|N/A|Distance between departure and arrival station.|

## Line Item

Generic line item. These objects are included in arrays in most receipt types.

|Property Name|Type|Format|Description|
|---|---|---|---|
|__*sequenceNumber*__|integer|N/A|The order in which the item appears in the sequence of line items when the receipt is rendered by Concur.|
|dateTime|string|date-time|Date representation, as defined by RFC 3339, section 5.6|
|reference|string|N/A|The item SKU, identifier or some other attribute the merchant uses to reference the item.|
|__*description*__|string|^(?!\s*$).+|Non-empty string. Length must be at least 1 character.|
|additionalDescription|string|N/A||
|semanticsCode|string|^(?!\s*$).+|The [Concur semantics code](https://developer.concur.com/api-reference/travel/itinerary/itinerary.html#semantics_codes) for the line item.|
|unitCost|string|^[-]?\d*\.?\d+$|Amount per unit.|
|quantity|integer|N/A||
|__*total*__|string|^[-]?\d*\.?\d+$|String representing an amount of money. Should not include a currency code or symbol, as this information is included in the currencyCode field of the receipt.|
|subtotal|string|^[-]?\d*\.?\d+$|String representing an amount of money. Should not include a currency code or symbol, as this information is included in the currencyCode field of the receipt.|
|taxesTotal|string|^[-]?\d*\.?\d+$|String representing an amount of money. Should not include a currency code or symbol, as this information is included in the currencyCode field of the receipt.|
|taxes|array|[Taxes](#taxes)|Schema for objects that make up an array of taxes. Used in most receipt types.|
|vatApplicable|boolean|N/A|If the line item was subject to a value added tax then true, if not then false.|
|amountIncludesVat|boolean|N/A||
|discounts|array|[discounts](#discount)|The discounts offered for this line item.|

## Location

Schema representing a location, including geographical information and a postal address. Used in multiple receipt types.

|Property Name|Type|Format|Description|
|---|---|---|---|
|name|string|N/A|The name for the location.|
|number|string|N/A|The identifier the company assigned to this location.|
|latitude|number|N/A|Numeric latitude value between -90 and 90|
|longitude|number|N/A|Numeric longitude value between -180 and 180|
|internetAddress|string|N/A||
|emailAddress|string|N/A||
|telephoneNumber|string|N/A||
|faxNumber|string|N/A||
|__*address*__|object|[Address](#address)|Common address object used by all receipt types except for the JPT IC Card receipt, which uses [Address-Original](#address-original).|

## Merchant

Schema for an object representing a merchant. The broker and seller properties in all receipts use this schema.

|Property Name|Type|Format|Description|
|---|---|---|---|
|__*name*__|string|^(?!\s*$).+|Non-empty string. Length must be at least 1 character.|
|description|string|N/A|Description of the service provided by the merchant.|
|taxId|string|N/A|The tax identification number assigned to the merchant by the national tax authority. If the partner is providing a tax invoice, then providing a tax identification number is recommended.|
|__*location*__|object|[Location](#location)|Schema representing a location, including geographical information and a postal address. Used in multiple receipt types.|

## Payments

The payments array allows for one or more payment methods used in the transaction to be defined. All payment methods defined within the array result in the value for total in the base object of the receipt. The JSON keyword ‘anyOf’ indicates at least one of the following is required and multiple can be present: [cash](#cash), [creditCard](#creditcard), [companyPaid](#companypaid), [digitalWallet](#digitalwallet) and / or [unusedTicket](#unusedticket).

#### cash

|Property Name|Type|Format|Description|
|---|---|---|---|
|__*amount*__|string|^[-]?\d*\.?\d+$|String representing an amount of money. Should not include a currency code or symbol, as this information is included in the currencyCode field of the receipt.|

#### creditCard

|Property Name|Type|Format|Description|
|---|---|---|---|
|__*amount*__|string|^[-]?\d*\.?\d+$|String representing an amount of money. Should not include a currency code or symbol, as this information is included in the currencyCode field of the receipt.|
|__*cardDetail*__|object|[cardDetail](#undefined)|Credit card information.|

### cardDetail

|Property Name|Type|Format|Description|
|---|---|---|---|
|__*cardType*__|N/A|N/A| Can be any of the following values: American Express, Diner’s Club, Discover, MasterCard, Visa, Carte Blanche, Enroute, Universal Air Travel, JCB, EuroCard|
|creditCardId|string|^[0-9]{4}$|Last four digits of the credit card number to meet FACTA and PCI requirements|
|authorizationCode|string|N/A|Authorization code for transaction.|

#### companyPaid

|Property Name|Type|Format|Description|
|---|---|---|---|
|__*source*__|N/A|N/A| Can be any of the following values: GhostCard, LodgeCard, DirectPay, Invoice|
|__*amount*__|string|^[-]?\d*\.?\d+$|String representing an amount of money. Should not include a currency code or symbol, as this information is included in the currencyCode field of the receipt.|
|cardDetail|object|[cardDetail](#undefined)|Credit card information.|

### cardDetail

|Property Name|Type|Format|Description|
|---|---|---|---|
|__*cardType*__|N/A|N/A| Can be any of the following values: American Express, Diner’s Club, Discover, MasterCard, Visa, Carte Blanche, Enroute, Universal Air Travel, JCB, EuroCard|
|creditCardId|string|^[0-9]{4}$|Last four digits of the credit card number to meet FACTA and PCI requirements|
|authorizationCode|string|N/A|Authorization code for transaction.|

#### digitalWallet

|Property Name|Type|Format|Description|
|---|---|---|---|
|__*source*__|N/A|N/A| Can be any of the following values: ApplePay, AndroidPay, SamsungPay, PayPal|
|__*amount*__|string|^[-]?\d*\.?\d+$|String representing an amount of money. Should not include a currency code or symbol, as this information is included in the currencyCode field of the receipt.|

#### unusedTicket

|Property Name|Type|Format|Description|
|---|---|---|---|
|__*ticketNumber*__|string|^(?!\s*$).+|Non-empty string. Length must be at least 1 character.|
|__*amount*__|string|^[-]?\d*\.?\d+$|String representing an amount of money. Should not include a currency code or symbol, as this information is included in the currencyCode field of the receipt.|

#### cardDetail

|Property Name|Type|Format|Description|
|---|---|---|---|
|__*cardType*__|N/A|N/A| Can be any of the following values: American Express, Diner’s Club, Discover, MasterCard, Visa, Carte Blanche, Enroute, Universal Air Travel, JCB, EuroCard|
|creditCardId|string|^[0-9]{4}$|Last four digits of the credit card number to meet FACTA and PCI requirements|
|authorizationCode|string|N/A|Authorization code for transaction.|

## Rail Receipt

Schema for rail or train receipts.

* Includes all of [Receipt Core Definitions](#receipt-core-definitions)

|Property Name|Type|Format|Description|
|---|---|---|---|
|itineraryLocator|string|^(?!\s*$).+|Unique ID of an itinerary (also know as a trip) in Concur’s Itinerary Service. An itinerary can contain one or more bookings from various sources.|
|lineItems|array|[lineItems](#line-item)|Break down of all charges which could include insurance purchased for all train tickets, paid wi-fi etc.|
|__*railTickets*__|array|[railTickets](#railtickets)||

### railTickets

|Property Name|Type|Format|Description|
|---|---|---|---|
|ticketNumber|string|N/A||
|__*recordLocator*__|string|N/A|Confirmation identifier for the ticket. This code is usually unique for a short period of time and could be reused by the rail company in the future.|
|__*issueDateTime*__|string|date-time|Date and time the ticket was issued.|
|__*passengerName*__|string|N/A|Name of the person associated withthe ticket.|
|fare|string|^[-]?\d*\.?\d+$|Fare charged for a train ticket. This will be the total of all segments in this train ticket.|
|__*segments*__|array|[segments](#segments)|Segments for this train ticket.|

### segments

|Property Name|Type|Format|Description|
|---|---|---|---|
|__*departureStation*__|string|N/A|Name of the station from which the train is departing.|
|__*departureDateTime*__|string|date-time|Date representation, as defined by RFC 3339, section 5.6|
|__*arrivalStation*__|string|N/A|Name of the station where the train is arriving.|
|__*arrivalDateTime*__|string|date-time|Date representation, as defined by RFC 3339, section 5.6|
|__*trainNumber*__|string|N/A|Train identifier|
|trainType|string|N/A|Type of train. For example TGV or TER in France.|
|__*classOfServiceCode*__|string|^(?!\s*$).+|The class of travel.|
|fare|string|^[-]?\d*\.?\d+$|Fare charged for this segment of the train ride.|
|taxes|array|[Taxes](#taxes)|Taxes paid for this segment.|
|lineItems|array|[lineItems](#line-item)|Line items specific to this segment. This could include meals, seat reservations, insurance etc.|

## Receipt Core Definitions

Core values for all receipt types. All major receipt schemas include these core objects.

|Property Name|Type|Format|Description|
|---|---|---|---|
|__*dateTime*__|string|date-time|Date and time of the transaction.|
|__*total*__|string|^[-]?\d*\.?\d+$|The total amount of the transaction including all lineitems and taxes.|
|subtotal|string|^[-]?\d*\.?\d+$|The amount in the transaction excluding taxes.|
|taxesTotal|string|^[-]?\d*\.?\d+$|The amount of tax paid in the transaction.|
|__*currencyCode*__|string|currency-code|Currency paid to the merchant.|
|broker|object|[Merchant](#merchant)|The entity that facilitates the transaction between the seller and end user.|
|__*seller*__|object|[Merchant](#merchant)|The entity providing service to the end user.|
|__*payments*__|array|[Payments](#payments)||
|discounts|array|[discounts](#discount)|The discounts offered on this transaction.|
|taxes|array|[Taxes](#taxes)|Taxes paid as part of transaction.|
|reference|string|N/A|The unique receipt provider or merchant identifier for this receipt or invoice. This value can also be referred to as transaction number, check number, order ID or similar.|
|collectionReference|string|N/A|Use this key to group related receipts into a collection for credits, tips or other adjustments to the original transaction and looking at groups of receipts for analysis purposes. The reference and collectionReference keys typically have separate and unique values but could be the same for the first receipt in a collection.|
|taxInvoice|boolean|N/A|A tax invoice (true) or otherwise (false).|

### broker

|Property Name|Type|Format|Description|
|---|---|---|---|
|__*name*__|string|^(?!\s*$).+|Non-empty string. Length must be at least 1 character.|
|description|string|N/A|Description of the service provided by the merchant.|
|taxId|string|N/A|The tax identification number assigned to the merchant by the national tax authority. If the partner is providing a tax invoice, then providing a tax identification number is recommended.|
|__*location*__|object|[Location](#location)|Schema representing a location, including geographical information and a postal address. Used in multiple receipt types.|

### seller

|Property Name|Type|Format|Description|
|---|---|---|---|
|__*name*__|string|^(?!\s*$).+|Non-empty string. Length must be at least 1 character.|
|description|string|N/A|Description of the service provided by the merchant.|
|taxId|string|N/A|The tax identification number assigned to the merchant by the national tax authority. If the partner is providing a tax invoice, then providing a tax identification number is recommended.|
|__*location*__|object|[Location](#location)|Schema representing a location, including geographical information and a postal address. Used in multiple receipt types.|

## Taxes

Schema for objects that make up an array of taxes. Used in most receipt types.

|Property Name|Type|Format|Description|
|---|---|---|---|
|__*authority*__|object|[authority](#undefined)|The country or subdivision that charged the tax as per ISO 3166-2:2013.|
|name|string|N/A||
|__*rate*__|number|N/A||
|rateType|string|N/A|The rate type for the tax charged. For value added tax this could be Zero, Standard, Reduced, etc.|
|__*amount*__|string|^[-]?\d*\.?\d+$|String representing an amount of money. Should not include a currency code or symbol, as this information is included in the currencyCode field of the receipt.|

### authority

|Property Name|Type|Format|Description|
|---|---|---|---|
|__*addressCountry*__|string|country-code|2 or 3 character country code as defined in ISO 3166-2:2013|
|addressRegion|string|^[a-zA-Z0-9]{1,3}$|1 to 3 character country subdivision code as defined in ISO 3166-2:2013|

### E-Receipt Generation

An e-receipt or a receipt image is generated when only receipt data is posted. We have pre-created templates for every receipt type. The Examples section of this document shows what the template for a particular receipt type would look like and the data that would be displayed along with it. 
In addition to data, e-receipts can also display a logo of the partner’s choice. In order to do so, the partner has to do two things
 - Provide in advance a logo meeting our specifications
 - Describe your broker-seller relationships

Email pdspe@concur.com or ask a question in our [Developer Forum](https://forum.developer.concur.com/) to know more. 
