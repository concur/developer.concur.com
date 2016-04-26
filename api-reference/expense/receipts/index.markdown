---
title: Receipts 
layout: reference
---


# Receipts

The Receipts resource represents receipts that can be posted to Concur by a provider company on behalf of opted-in users. This resource currently supports three types of receipts:

* General — A general-purpose receipt type that can be used for various goods or services
* Hotel — A receipt for a hospitality service, such as a hotel stay
* Ride — A receipt for a ride service


**Notes:**  

* Receipts currently can't be Posted to users whose data is hosted in Concur's EU datacenter.  Only users whose data is hosted in the US datacenter can receive e-receipts.  
* The Receipt Service only accepts receipts that are up to 6 months old. Older receipts will not be accepted.
* Unlike all the other Concur API endpoints, the e-receipt requires the Concur Platform team to configure your sandbox to enable access. You can send a request using the [Sandbox Configuration Assistance form](/tools-support/sandbox-configuration-assistance.html). Please include the name of the Concur representative you're working with in the details section of the form.


* [Create a new receipt](#post)
* [Schema](#schema)

### Version
3.0


## <a name="post"></a>Create a new receipt

    POST  /api/v3.0/common/receipts


### Parameters

Name | Type | Format | Description
-----|------|--------|------------
`content`	|	-	|	`body`	|	The receipt object to create


## <a name="schema"></a>Schema


### Response

Name | Type | Format | Description
-----|------|--------|------------
`ID`	|	``string``	|	-	|	
`URI`	|	``string``	|	-	|	


### Receipt

Name | Type | Format | Description
-----|------|--------|------------	
`Amount`	|	`Decimal`	|	-	|	**Required** The net amount of the transaction. A positive number means a payment is due. A negative number means a refund is due. Zero means no payment or refund is due. Range: -922,337,203,685,477 to 922,337,203,685,477
`CurrencyCode`	|	`string`	|	-	|	**Required** The 3-letter ISO 4217 currency code for the currency paid to the provider.
`CustomFields`	|	`Array`	|	[Custom Field](#customfield)	|	The parent element for custom fields.
`FormofPaymentCode`	|	`string`	|	-	|	**Required** The code for the form of payment. Possible values: CASH (Cash), CCARD (Credit Card), CPAID (Company Paid)
``GeneralDetail``	|	`GeneralDetail`	|	-	|	The details of a general transaction. This element is required when the Type value is General.
``HotelDetail``	|	`HotelDetail`	|	-	|	The details of a hospitality service. This element is required when the Type value is Hotel.
`ImageBase64`	|	`string`	|	-	|	The binary receipt image in Base64 encoding. This API supports PNG, JPEG, JPG, and PDF file formats.
``MatchingFact``	|	`MatchingFact`	|	-	|	**Required** The parent element for information that is used to match the receipt to the Concur user who initiated the transaction. The `MatchingFact` object must contain either a valid access token or a Concur login ID.
`Merchant`	|	`Merchant`	|	-	|	**Required** The parent element for information about the provider who is posting the receipt.
`PaymentCard`	|	`PaymentCard`	|	-	|	The parent element for the credit card used for payment. This element is required when the FormofPaymentCode value is CCARD.
`RideDetail`	|	`RideDetail`	|	-	|	The details of a hired ride. This element is required when the Type value is Ride.
`TransactionDateTime`	|	`DateTime`	|	-	|	**Required** The date and time when the transaction happened (in Local Time). Format: YYYY-MM-DDThh:mm
`Type`	|	`string`	|	-	|	**Required** The type of receipt. Possible values: General, Ride, Hotel		

### <a name="customfield"></a>Custom Field	

Name | Type | Format | Description
-----|------|--------|------------							
`Name`	|	`string`	|	-	|	**Required** The name of the custom field. Maximum length: 128 characters
`Value`	|	`string`	|	-	|	**Required** The value of the custom field. Maximum length: 256 characters

### General Detail	

Name | Type | Format | Description
-----|------|--------|------------						
`LineItems`	|	`Array`	|	[Line Item](#lineitem)	|	The parent element for the line items in the receipt. There is a LineItem child element for each line item.


### <a name="lineitem"></a>Line Item	

Name | Type | Format | Description
-----|------|--------|------------						
`Amount`	|	`Decimal`	|	-	|	**Required** The total charged amount for the line item. Range: -922,337,203,685,477 to 922,337,203,685,477
`Date`	|	`DateTime`	|	-	|	The date and time when the line item was charged (in Local Time). Format: YYYY-MM-DDThh:mm
`Description`	|	`string`	|	-	|	**Required** The item's description. Maximum length: 100 characters
`Description2`	|	`string`	|	-	|	Additional details about the item. In the receipt image, the secondary description appears on the line following the primary description. Maximum length: 32 characters
`Quantity`	|	`Int32`	|	-	|	The quantity of units. Format: Any positive number
`Rate`	|	`Decimal`	|	-	|	The amount charged per unit. Range: -922,337,203,685,477 to 922,337,203,685,477
`RateType`	|	`string`	|	-	|	The unit of measure or rate type. Possible values: HOUR or PER HOUR, DAY or PER DAY, WEEK or PER WEEK, MONTH or PER MONTH. Maximum length: 10 characters
`Reference`	|	`string`	|	-	|	The item's SKU, identifier, or some other attribute the provider uses to reference the item. Maximum length: 32 characters
`SequenceNumber`	|	`Int32`	|	-	|	**Required** The order in which the item appears in the sequence of line items.


### Hotel Detail	

Name | Type | Format | Description
-----|------|--------|------------						
`AverageDailyRoomRate`	|	`Decimal`	|	-	|	**Required** The sum of the room rate for each night stayed, divided by the number of nights stayed. Range: -922,337,203,685,477 to 922,337,203,685,477
`CheckinDateTime`	|	`DateTime`	|	-	|	**Required** The check-in date and time (in Local Time). Format: YYYY-MM-DDThh:mm
`CheckoutDateTime`	|	`DateTime`	|	-	|	**Required** The check-out date and time (in Local Time). Format: YYYY-MM-DDThh:mm
`ConfirmationNumber`	|	`string`	|	-	|	The confirmation number for the booking. Maximum length: 32 characters
`GNR`	|	`string`	|	-	|	The Guest Name Record (GNR) for the stay. Maximum length: 20 characters
`LineItems`	|	`Array`	|	[Line Item](#lineitem)	|	The parent element for the line items in the receipt. There is a LineItem child element for each line item.
`NumberInParty`	|	`Int32`	|	-	|	The number of people for this stay.
`RatePlanType`	|	`string`	|	-	|	The rate plan type that is used to calculate the room rate. Possible values are rate plan types defined using hospitality industry standards. Maximum length: 50 characters
`RoomNumber`	|	`string`	|	-	|	The room number for the stay. Maximum length: 15 characters
`RoomType`	|	`string`	|	-	|	The type of room. Possible values are room types defined using hospitality industry standards, such as Single, Double, Suite, and so on. Maximum length: 50 characters


### Matching Fact

Name | Type | Format | Description
-----|------|--------|------------						
`Type`	|	`string`	|	-	|	**Required** The type of matching fact that is used to identify the Concur user who owns the receipt. Possible values: OAuth, Login
`Value`	|	`string`	|	-	|	**Required** The value of the matching fact. If the Type element is set to OAuth, this value must be the access token for the Concur user who owns the receipt. In this case, the access token must not be expired or revoked. If the Type element is set to Login, this value must be the login ID of the Concur user who owns the receipt.


### Merchant

Name | Type | Format | Description
-----|------|--------|------------							
`Location`	|	`Location`	|	-	|	**Required** The parent element for the provider location.
`Name`	|	`string`	|	-	|	**Required** The name of the provider (``Merchant`). Maximum length: 64 characters


### Location

Name | Type | Format | Description
-----|------|--------|------------							
`Address`	|	`string`	|	-	|	The provider's street address. Maximum length: 100 characters
`Address2`	|	`string`	|	-	|	The provider's secondary street address. Maximum length: 50 characters
`City`	|	`string`	|	-	|	The provider's city. Maximum length: 100 characters
`CountryCode`	|	`string`	|	-	|	**Required** The provider's country. Format: 2-letter ISO 3166-1 country code
`CountrySubdivisionCode`	|	`string`	|	-	|	The provider's state, province, or other country subdivision. Format: ISO 3166-2:2007 country subdivision code YYY, where YYY is the one-to-threeÐcharacter subdivision code
`EmailAddress`	|	`string`	|	-	|	The provider's email address. Maximum length: 255 characters
`FaxNumber`	|	`string`	|	-	|	The provider's fax number. Maximum length: 32 characters
`InternetAddress`	|	`string`	|	-	|	The provider's Web address. Maximum length: 255 characters
`Name`	|	`string`	|	-	|	The name of the provider's location, such as an airport, car rental agency, property, store, or other named location. Maximum length: 100 characters
`PostalCode`	|	`string`	|	-	|	The provider's postal code. Maximum length: 20 characters
`TelephoneNumber`	|	`string`	|	-	|	The provider's telephone number. Maximum length: 100 characters



### Payment Card	

Name | Type | Format | Description
-----|------|--------|------------				
`AuthorizationCode`	|	`string`	|	-	|	The authorization code that the card interchange provided when it approved this purchase. Maximum length: 15 characters
`MaskedNumber`	|	`string`	|	-	|	**Required** The masked card number for the credit card. With the exception of the AX (American Express) card type, this is the last four digits of the card number. For American Express, the value can be one of these, in order of preference: a) The first six digits and the last four digits of the card number. b) The last five digits. c) The last four digits.
	`type`|	`string`	|-	|		**Required** The card interchange for the credit card. Possible values: AX (American Express), DC (Diner's Club), DS (Discover), CA (MasterCard), VI (Visa), CB (Carte Blanche), ER (Enroute), TP (Universal Air Travel), JC (JCB), EC (EuroCard), OTHER (other types)



### Ride Detail	
	
Name | Type | Format | Description
-----|------|--------|------------					
`DriverName`	|	`string`	|	-	|	The name of the driver. Maximum length: 255 characters
`DropoffLatitude`	|	`Decimal`	|	-	|	The latitude of the ride end location. Range: -90 to 90
`DropoffLongitude`	|	`Decimal`	|	-	|	The longitude of the ride end location. Range: -180 to 180
`EndDateTime`	|	`DateTime`	|	-	|	**Required** The ending date and time for the ride (in Local Time). Format: YYYY-MM-DDThh:mm
`LineItems`	|	`Array`	|	[Line Item](#lineitem)	|	The parent element for the line items in the receipt. There is a LineItem child element for each line item.
`StartDateTime`	|	`DateTime`	|	-	|	**Required** The starting date and time for the ride (in Local Time). Format: YYYY-MM-DDThh:mm
`VehicleNumber`	|	`string`	|	-	|	The unique identifier for the vehicle. Maximum length: 50 characters


### Request URL

```
https://www.concursolutions.com/api/v3.0/common/receipts
```


### JSON example of a successful response

```
{
  "ID": "270583561310",
  "URI": ""
}
```
