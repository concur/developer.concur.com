---
title: v3 to v4 Migration Guide
layout: reference
---

## Receipts- Migrating from v3 to v4

###  What is new and different?

- If you are migrating from version 3 to version 4, you will need to use a new [Authentication API](https://preview.developer.concur.com/api-alpha/auth/apidoc.html).

- In version 4, there are no matching facts. Partners post receipts for specific users.

- Version 4 allows partners the increased benefit of being able to provide rich receipt data.

  - We have made receipts for hotels distinct from those for car rental agencies because the information provided in each of them is not the same.
  
  - To allow different partners to provide data that makes sense to them and to our end users, we designed receipt schemas. A schema is defined for specific receipt types: Air, Car Rental, Hotel, Ground Transport, Japan Public Transport and General.
  
  - Our open schema format allows for new receipt types to be easily added. 

- Version 4 allows our partners to easily supply Value Added Tax information.

- A receipt image is automatically generated if only receipt data is posted. The image can be used by our end users when creating their expense reports.

  - If provided by the partner, generated receipt images have their brand logo.

  - Receipt images are generated in the end user's preferred language.

- During our early release, partners can post receipt data only. Soon, we will allow the posting of receipt data and image.

## Receipts v3 to v4 - How do the field mappings change?

The following tables illustrate how the Receipt fields you are familiar with in version 3 map to version 4.


####  Receipts

V3 Name  | V4 Mapping
------   | ------------
Amount   | Core.total
CurrencyCode  | Core.currencyCode
CustomFields  | Core. customData
FormofPaymentCode  | Core.payments
GeneralDetail  | General
HotelDetail  | Hotel
ImageBase64  | V4 will allow partners to POST receipt data and image.
MatchingFact  | V4 discontinues the concept of matching facts. Receipts will be created for a specific user who will be mentioned in Core.user
Merchant  | Core.merchant
PaymentCard  | Core.payments
RideDetail  |  Ride
TransactionDateTime  | Core.dateTime
Type  | When posting a receipt, use the link header to mention the specific receipt schema type.

####  General Detail

V3 Name  | V4 Mapping
------  | -----------
LineItems  | lineItems

####  Hotel Detail

 V3 Name  | V4 Mapping
 ------  | ------------
 AverageDailyRoomRate  | Hotel.room.averageDailyRoomRate
CheckinDateTime  | Hotel.checkInDateTime
CheckoutDateTime  | Hotel.checkoutDateTime
ConfirmationNumber  | Hotel.confirmationNumber
GNR  | Hotel.guests.guestNameRecord
Line Items  | Hotel.lineItems
NumberInParty  | Hotel.numberInParty
RatePlanType  | Hotel.room.ratePlanType
RoomNumber  | Hotel.room.roomNumber
RoomType  | Hotel.roomType


####  Ride Detail

V3 Name  | V4 Mapping
------- | -------------
DriverName  | Ride.driverName
DropoffLatitude  | Ride.dropOffLocation
DropoffLongitude  | Ride.dropOffLocation
EndDateTime  | Ride.endDateTime
LineItems  | Ride.lineItems
StartDatetime  | Ride.startDateTime
VehicleNumber  | Ride.vehicleNumber

####  Custom Field

 V3 Name  | V4 Mapping
 ------- | -------------
 Name  | Core.customeDataGuid
 Value  | Core.customData.<fieldNameChosenByClient>

####  Line Item

 V3 Name  | V4 Mapping
 ------- | -------------
 Amount  | lineItems.amount
 Date  | lineItems.date.Time
 Description  | lineItems.description
 Description2  | lineItems.description2
 Quantity  | lineItems.quantity
 Rate  | lineItems.rate
 RateType  | lineItems.rateType
 Reference  | lineItems.reference
 SequenceNumber  | lineItems.sequenceNumber


####  Matching Facts

V3 Name  | V4 Mapping
------- | -------------
Type  | N/A to v4
Value  | N/A to v4


####  Merchant

 V3 Name  | V4 Mapping
 ------- | -------------
 Location  | Core.merchant.location
 Name  | Core.merchant.name
 

####  Location

 V3 Name  | V4 Mapping
 ------- | -------------
Address  | location.address.address
Address2  | location.address.address2
City  | location.address.city
CountryCode  | location.address.countryCode
CountrySubdivisionCode  | location.address.countrySubdivisionCode
EmailAddress  | location.emailAddress
FaxNumber  | location.faxNumber
InternetAddress  | location.internetAddress
Name  | location.name
PostalCode  | location.address.postalCode
TelephoneNumber  | location.telephoneNumber


####  Payment Card

V3 Name  |  V4 Mapping
------- | -------------
AuthorizationCode  | cardDetail.Core.payments.cardDetail.authorizationCode
MaskedNumber  | cardDetail.Core.payments.cardDetail.maskedNumber
type  | cardDetail.Core.payments.cardDetail.cardType
