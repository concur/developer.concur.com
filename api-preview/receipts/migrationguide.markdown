---
title: v3 to v4 Migration Guide
layout: reference
---

# Receipts - Migrating from Version 3 to Version 4

##  What is new and different?

- If you are migrating from V3 to V4, you will need to use a new [Authentication API](https://developer.concur.com/api-preview/auth/apidoc.html).

- In V4, there are no matching facts. Partners post receipts for specific users.

- V4 allows partners the increased benefit of being able to provide rich receipt data.

  - We have made receipts for hotels distinct from those for car rental agencies because the information provided in each of them is not the same.
  
  - To allow different partners to provide data that makes sense to them and to our end users, we designed receipt schemas. A schema is defined for specific receipt types: Air, Car Rental, Hotel, Ground Transport, Rail and General.
  
  - Our open schema format allows for new receipt types to be easily added. 

- V4 allows our partners to easily supply Value Added Tax information.

- A receipt image is automatically generated if only receipt data is posted. The image can be used by our end users when creating their expense reports.

  - If provided by the partner, generated receipt images have their brand logo.

  - Receipt images are generated in the end user's preferred language.

- During our early release, partners can post receipt data only. Soon, we will allow the posting of receipt data and image.

## How do the field mappings change?

The following tables illustrate how the Receipt fields you are familiar with in V3 map to V4.


####  Receipts

V3 Name  | V4 Mapping
------   | ------------
`Amount`   | `core.total`
`CurrencyCode`  | `core.currencyCode`
`CustomFields`  | N/A to V4
`FormofPaymentCode`  | `core.payments`
`GeneralDetail`  | `General`
`HotelDetail` | `Hotel`
`ImageBase64`  | V4 will allow partners to POST receipt data and image.
`MatchingFact`  | V4 discontinues the concept of matching facts. Receipt will be created for a specific user whose UUID is mentioned in the post URL.
`Merchant`  | `core.seller` or `core.broker`
`PaymentCard`  | `core.payments`
`RideDetail`  |  `GroundTransport`
`TransactionDateTime`  | `core.dateTime`
`Type`  | When posting a receipt, use the link header to mention the specific receipt schema type.

####  General Detail

V3 Name  | V4 Mapping
------  | -----------
`LineItems`  | `lineItems`

####  Hotel Detail

 V3 Name  | V4 Mapping
 ------  | ------------
`AverageDailyRoomRate`  | `Hotel.room.averageDailyRoomRate`
`CheckinDateTime`  | `Hotel.checkInDateTime`
`CheckoutDateTime ` | `Hotel.checkoutDateTime`
`ConfirmationNumber`  | `Hotel.confirmationNumber`
`GNR`  | `Hotel.guests.guestNameRecord`
`Line Items`  | `Hotel.lineItems`
`NumberInParty`  | `Hotel.numberInParty`
`RatePlanType`  | `Hotel.room.ratePlanType`
`RoomNumber`  | `Hotel.room.roomNumber`
`RoomType`  | `Hotel.roomType`


####  Ride Detail

V3 Name  | V4 Mapping
------- | -------------
`DriverName`  | N/A to V4
`DropoffLatitude`  | `GroundTransport.dropOffLocation`
`DropoffLongitude`  | `GroundTransport.dropOffLocation`
`EndDateTime`  | `GroundTransport.endDateTime`
`LineItems` | `GroundTransport.lineItems`
`StartDatetime`  | `GroundTransport.startDateTime`
`VehicleNumber`  | N/A to V4

####  Custom Field

 V3 Name  | V4 Mapping
 ------- | -------------
 `Name`  | N/A to V4
 `Value`  | N/A to V4

####  Line Item

 V3 Name  | V4 Mapping
 ------- | -------------
 `Amount`  | `lineItems.total`
 `Date`  | `lineItems.dateTime`
 `Description`  | `lineItems.description`
 `Description2`  | `lineItems.additionalDescription`
 `Quantity`  | `lineItems.quantity`
 `Rate`  | `lineItems.unitCost`
 `RateType`  | N/A to V4
 `Reference`  | `lineItems.reference`
 `SequenceNumber`  | `lineItems.sequenceNumber`


####  Matching Facts

V3 Name  | V4 Mapping
------- | -------------
`Type`  | N/A to v4
`Value`  | N/A to v4


####  Merchant

 V3 Name  | V4 Mapping
 ------- | -------------
 `Location`  | `core.broker.location` or `core.seller.location`
 `Name` | `core.broker.name` or `core.seller.name`
 

####  Location

 V3 Name  | V4 Mapping
 ------- | -------------
`Address`  | `location.address.streetAddress`
`Address2`  | N/A to V4
`City`  | `location.address.addressLocality`
`CountryCode` | `location.address.addressCountry`
`CountrySubdivisionCode`  | `location.address.addressRegion`
`EmailAddress`  | `location.emailAddress`
`FaxNumber`  | `location.faxNumber`
`InternetAddress`  | `location.internetAddress`
`Name`  | `location.name`
`PostalCode`  | `location.address.postalCode`
`TelephoneNumber`  | `location.telephoneNumber`


####  Payment Card

V3 Name  |  V4 Mapping
------- | -------------
`AuthorizationCode`  | `core.payments.cardDetail.authorizationCode`
`MaskedNumber`  | `core.payments.cardDetail.creditCardId`
`type`  | `core.payments.cardDetail.cardType`
