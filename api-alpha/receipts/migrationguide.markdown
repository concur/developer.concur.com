---
title: v3 to v4 Migration Guide
layout: reference
---

## Receipts- Migrating from v3 to v4

###  What is new and different?

- If you are migrating from version 3 to version 4, you will need to use a new [Authorization API](https://preview.developer.concur.com/api-alpha/auth/apidoc.html).

- In version 4, there are no matching facts. Clients post receipts for specific users.

- Version 4 allows clients the increased benefit of being able to provide rich data.

 - We have made receipts for hotels distinct from those from rental cars agencies because we understand the difference in information provided in both.

 - To allow different vendors to provide data that makes sense to them and to our customers, we designed receipt schemas. A schema is defined for specific receipt types: Air, Auto Rental, Hotel, Taxi, Train, Japan Public Transport, and General.
 - Our open schema format allows for new receipt types to be easily added.


- Version 4 allows our clients to easily supply Value Added Tax information.

- For our clients with specified schema types, a receipt image is automatically generated when posting receipt data. The image can be
  used by our customers when creating their expense reports.

  - If provided by the partner, generated receipt images have their brand logo.

  - Receipt images are generated in the customer's preferred language.


- During our early release, clients can post receipt data only. Soon after the initial release, we will allow the posting of receipt data and image.

## Receipts v3 to v4 - How do the field mappings change?

The following tables illustrate how the Receipt fields you are familiar with in version 3 map to version 4.


####  Receipts

Name  |  Type  |  Format  |  Description  | V4 Mapping
------   |  -----  |  --------  |  -------------  |  ------------
Amount   |  -  |  Decimal  | Required The net amount of the transaction. A positive number means a payment is due. A negative number means a refund is due. Zero means no payment or refund is due. Range: -922,337,203,685,477 to 922,337,203,685,477  | Core.total
CurrencyCode  |  string  |  -  | Required The 3-letter ISO 4217 currency code for the currency paid to the provider.  | Core.currencyCode
CustomFields  |  Array  |  [Custom Field](https://developer.concur.com/api-reference/expense/receipts/#customfield)  |  The parent element for custom fields  | Core. customData
FormofPaymentCode  |  string  | -  | Required The code for the form of payment. Possible values: CASH (Cash), CCARD (Credit Card), CPAID (Company Paid)  | Core.payments
GeneralDetail  |  GeneralDetail  |  -  | The details of a general transaction. This element is required when the Type value is General.  | General
HotelDetail  |  HotelDetail  |  -  | The details of a hospitality service. This element is required when the Type value is Hotel.  |  Hotel
ImageBase64  |  string  |  -  |  The binary receipt image in Base64 encoding. This API supports PNG, JPEG, JPG, and PDF file formats.   |  Coming soon
MatchingFact  |  MatchingFact  |  -  | Required The parent element for information that is used to match the receipt to the Concur user who initiated the transaction. The MatchingFact object must contain either a valid access token or a Concur login ID.  |   v4 discontinues the concept of matching facts. Receipts will be created for a specific user who will be mentioned in Core.user
Merchant  |  Merchant  |  -  |  Required The parent element for information about the provider who is posting the receipt.  | Core.merchant
PaymentCard  |  PaymentCard  |  -  | The parent element for the credit card used for payment. This element is required when the FormofPaymentCode value is CCARD.  | Core.payments
RideDetail  |  RideDetail  |  -  |  The details of a hired ride. This element is required when the Type value is Ride.  |  Ride
TransactionDateTime  |  DateTime  |  -  |  Required The date and time when the transaction happened (in Local Time). Format: YYYY-MM-DDThh:mm  |  Core.dateTime
Type  |  string  |  -  |   Required The type of receipt. Possible values: General, Ride, Hotel  |  When posting a receipt, use the link header to mention the specific receipt schema type.



####  General Detail

Name  |  Type  |  Format  |  Description  | v4 Mapping
------  |  ----  |  ------  |  -----------  |  -----------
LineItems  |  Array  |  [Line Item](https://developer.concur.com/api-reference/expense/receipts/#lineitem)  |  The parent element for the line items in the receipt. There is a LineItem child element for each line item.  |  lineItems



####  Hotel Detail

 Name  |  Type  | Format  |  Description  |  v4 Mapping
 ------  |  -----   |  -------  |  -------------  |  ------------
 AverageDailyRoomRate  | Decimal  |  -  |  Required The sum of the room rate for each night stayed, divided by the number of nights stayed. Range: -922,337,203,685,477 to 922,337,203,685,477  |  Hotel.room.averageDailyRoomRate
CheckinDateTime  | DateTime  |  -  |  Required The check-in date and time (in Local Time). Format: YYYY-MM-DDThh:mm  | Hotel.checkInDateTime
CheckoutDateTime  |  DateTime  | -  |   Required The check-out date and time (in Local Time). Format: YYYY-MM-DDThh:mm  |  Hotel.checkoutDateTime
ConfirmationNumber  |  string  |  -  |  The confirmation number for the booking. Maximum length: 32 characters  |  Hotel.confirmationNumber
GNR  |  string  |  -  |  The Guest Name Record (GNR) for the stay. Maximum length: 20 characters  | Hotel.guests.guestNameRecord
Line Items  |  Array  |  [Line Item](https://developer.concur.com/api-reference/expense/receipts/#lineitem)  |  The parent element for the line items in the receipt. There is a LineItem child element for each line item.  |  Hotel.lineItems
NumberInParty  |  Int32  | -  | The number of people for this stay  | Hotel.numberInParty
RatePlanType  |  string  | -  |  The rate plan type that is used to calculate the room rate. Possible values are rate plan types defined using hospitality industry standards. Maximum length: 50 characters  |  Hotel.room.ratePlanType
RoomNumber  |  String  | -  | The room number for the stay. Maximum length: 15 characters  |  Hotel.room.roomNumber
RoomType  |  string  | -  |  The type of room. Possible values are room types defined using hospitality industry standards, such as Single, Double, Suite, and so on. Maximum length: 50 characters  |  Hotel.roomType




####  Ride Detail

Name  | Type  |  Format  |  Description  |  v4 Mapping
------- |  ----- |  --------  |  -------------  |  -------------
DriverName  |  string  |  -  | The name of the driver. Maximum length: 255 characters  |  Ride.driverName
DropoffLatitude  |  Decimal  |  -  |  The latitude of the ride end location. Range: -90 to 90  |  Ride.dropOffLocation
DropoffLongitude  |  Decimal  |  -  |  The longitude of the ride end location. Range -180 to 180  |  Ride.dropOffLocation
EndDateTime  |  DateTime  |  -  |  Required The ending date and time for the ride (in Local Time). Format: YYYY-MM-DDThh:mm  | Ride.endDateTime
LineItems  |  Array  |  [Line Item](https://developer.concur.com/api-reference/expense/receipts/#lineitem)  |  The parent element for the line items in the receipt. There is a LineItem child element for each line item.  |  Ride.lineItems
StartDatetime  |  DateTime  |  -  |  **Required**: the starting date and time for the ride (in Local Time). Format: YYYY-MM-DDThh:mm  | Ride.startDateTime
VehicleNumber  |  string  |  -  |  The unique identifier for the vehicle. Maximum length: 50 characters  |  Ride.vehicleNumber



####  Custom Field

 Name  |  Type  |  Format  |  Description  |  v4 Mapping
 ------- |  ------ |  --------  |  ------------   |  -------------
 Name  | string  | -  |  **Required**: the name of the custom field. Maximum length: 128 characters.  |   Core.customeDataGuid
 Value  |  string  |  -  |  **Required**: the value of the custome field. Maximum length 256 characters.  | Core.customData.<fieldNameChosenByClient>




####  Line Item

 Name  |  Type  |   Format  |  Description  |  v4 Mapping
 ------- |  ------  |  --------  |  ------------- |  -------------
 Amount  |  Decimal  |  -  |  **Required**: the total charged amount for the line item. Range: -922,337,203,685,477 to 922,337,203,685,477  |  lineItems.amount
 Date  |  DateTime  |  -  |  The date and time when the line item was charged (in Local Time). Format: YYYY-MM-DDThh:mm  |  lineItems.date.Time
 Description  |  string  |  -  |  **Required**: the item’s description. Maximum length: 100 characters  |   lineItems.description
 Description2  |  string  |  -  |  Additional details about the item. In the receipt image, the secondary description appears on the line following the primary description. Maximum length: 32 characters  |  lineItems.description2
 Quantity  |  Int32  |  -  |  The quantity of units. Format: any positive number.  |  lineItems.quantity
 Rate  | Decimal  | -  |  The amount charged per unit. Range: -922,337,203,685,477 to 922,337,203,685,477  |  lineItems.rate
 RateType  | string  |  -  |  The unit of measure or rate type. Possible values: HOUR or PER HOUR, DAY or PER DAY, WEEK or PER WEEK, MONTH or PER MONTH. Maximum length: 10 characters  | lineItems.rateType
 Reference  |  string  |  - |  The item’s SKU, identifier, or some other attribute the provider uses to reference the item. Maximum length: 32 characters  |  lineItems.reference
 SequenceNumber  |  Int32  |  -  |  **Required**: the order in which the item appears in the sequence of line items.




####  Matching Facts

Name  |  Type  |   Format  |  Description  |  v4 Mapping
------- |  ------  |  --------  |  ------------- |  -------------
Type  |  string  |  -  | **Required**: the type of matching fact that is used to identify the Concur user who owns the receipt. Possible values: OAuth, Login  |  N/A to v4
Value  |  string  |  -  |  **Required**: the value of the matching fact. If the Type element is set to OAuth, this value must be the access token for the Concur user who owns the receipt. In this case, the access token must not be expired or revoked. If the Type element is set to Login, this value must be the login ID of the Concur user who owns the receipt.  |  N/A to v4




####  Merchant

 Name  |  Type  |   Format  |  Description  |  v4 Mapping
 ------- |  ------  |  --------  |  ------------- |  -------------
 Location  |  Location  |  -  |  **Required**: the parent element for the provider location.  |  Core.merchant.location
 Name  |  string  -  |  **Required**: the name of the provider (``Merchant`). Maximum length: 64 characters  |  Core.merchant.name




####  Location

 Name  |  Type  |   Format  |  Description  |  v4 Mapping
 ------- |  ------  |  --------  |  ------------- |  -------------
Address  |  string  |  -  |  The provider’s street address. Maximum length: 100 characters  | location.address.address
Address2  |  string  | -  |  The provider’s secondary street address. Maximum length: 50 characters  |  location.address.address2
City  |  string  |  -  |   The provider’s city. Maximum length: 100 characters  |  location.address.city
CountryCode  |  string  |  -  |  **Required**: the provider’s country. Format: 2-letter ISO 3166-1 country code  | location.address.countryCode
CountrySubdivisionCode  |  string  | -  |  The provider’s state, province, or other country subdivision. Format: ISO 3166-2:2007 country subdivision code YYY, where YYY is the one-to-threeÐcharacter subdivision code  |   location.address.countrySubdivisionCode
EmailAddress  |  string  |  -  |  The provider’s email address. Maximum length: 255 characters  |  location.emailAddress
FaxNumber  |  string  |  -  |  The provider’s fax number. Maximum length: 32 characters  | location.faxNumber
InternetAddress  |  string  |  -  |  The provider’s Web address. Maximum length: 255 characters  |  location.internetAddress
Name  |  string  |  -  |  The name of the provider’s location, such as an airport, car rental agency, property, store, or other named location. Maximum length: 100 characters  |  location.name
PostalCode  |  string  |  -  |  The provider’s postal code. Maximum length: 20 characters  | location.address.postalCode
TelephoneNumber  |  string  |  -  |   The provider’s telephone number. Maximum length: 100 characters  | location.telephoneNumber




####  Payment Card

Name  |  Type  |   Format  |  Description  |  v4 Mapping
------- |  ------  |  --------  |  ------------- |  -------------
AuthorizationCode  |  string  |  -  |  The authorization code that the card interchange provided when it approved this purchase. Maximum length: 15 characters  | cardDetail.Core.payments.cardDetail.authorizationCode
MaskedNumber  |  string  |  -  |  **Required**: the masked card number for the credit card. With the exception of the AX (American Express) card type, this is the last four digits of the card number. For American Express, the value can be one of these, in order of preference: a) The first six digits and the last four digits of the card number. b) The last five digits. c) The last four digits.  | cardDetail.Core.payments.cardDetail.maskedNumber
type  |  string  |  -  |  **Required**: the card interchange for the credit card. Possible values: AX (American Express), DC (Diner’s Club), DS (Discover), CA (MasterCard), VI (Visa), CB (Carte Blanche), ER (Enroute), TP (Universal Air Travel), JC (JCB), EC (EuroCard), OTHER (other types)  |  cardDetail.Core.payments.cardDetail.cardType


## FAQs
- Why do I have to use a new Authentication API?
- Why are matching facts no longer required when creating a receipt?
- How does rich data improve customer experience?
- How is a receipt image generated?
