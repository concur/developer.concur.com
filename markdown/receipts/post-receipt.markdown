[Source](https://developer.concur.com/receipts/post-receipt "Permalink to Post a Receipt | Developer Portal")

# Post a Receipt | Developer Portal

###  Description

The Receipts POST operation is used by provider companies to post receipts for a Concur user. For more information, see [Receipts Resource][1].

Post a receipt in the Concur system for any of the following receipt types:

Note: The Receipt service only accepts receipts that are up to 6 months old. Older receipts will not be accepted.

###  Authorization header

`Authorization: OAuth {access_token}`

Where access_token is the OAuth 2.0 access token of the user at the provider company. This user must have the Web Services Admin role.

The Receipt service maps the user's OAuth 2.0 access token to the Provider ID that was given to the provider company when it registered with Concur. The Provider ID is not explicitly included in the request.

###  Data Model

Data model shown in XML:

    <Receipt>
      <Amount>Decimal?</Amount>
      <CurrencyCode>string</CurrencyCode>
      <CustomFields>
        <CustomField>
          <Name>string</Name>
          <Value>string</Value>
        </CustomField>
      </CustomFields>
      <FormofPaymentCode>string</FormofPaymentCode>
      <GeneralDetail>
        <LineItems>
          <LineItem>
            <Amount>Decimal?</Amount>
            <Date>DateTime?</Date>
            <Description>string</Description>
            <Description2>string</Description2>
            <Quantity>Int32?</Quantity>
            <Rate>Decimal?</Rate>
            <RateType>string</RateType>
            <Reference>string</Reference>
            <SequenceNumber>Int32?</SequenceNumber>
          </LineItem>
        </LineItems>
      </GeneralDetail>
      <HotelDetail>
        <AverageDailyRoomRate>Decimal?</AverageDailyRoomRate>
        <CheckinDateTime>DateTime?</CheckinDateTime>
        <CheckoutDateTime>DateTime?</CheckoutDateTime>
        <ConfirmationNumber>string</ConfirmationNumber>
        <GNR>string</GNR>
        <LineItems>
          <LineItem>
            <Amount>Decimal?</Amount>
            <Date>DateTime?</Date>
            <Description>string</Description>
            <Description2>string</Description2>
            <Quantity>Int32?</Quantity>
            <Rate>Decimal?</Rate>
            <RateType>string</RateType>
            <Reference>string</Reference>
            <SequenceNumber>Int32?</SequenceNumber>
          </LineItem>
        </LineItems>
        <NumberInParty>Int32?</NumberInParty>
        <RatePlanType>string</RatePlanType>
        <RoomNumber>string</RoomNumber>
        <RoomType>string</RoomType>
      </HotelDetail>
      <ImageBase64>string</ImageBase64>
      <MatchingFact>
        <Type>string</Type>
        <Value>string</Value>
      </MatchingFact>
      <Merchant>
        <Location>
          <Address>string</Address>
          <Address2>string</Address2>
          <City>string</City>
          <CountryCode>string</CountryCode>
          <CountrySubdivisionCode>string</CountrySubdivisionCode>
          <EmailAddress>string</EmailAddress>
          <FaxNumber>string</FaxNumber>
          <InternetAddress>string</InternetAddress>
          <Name>string</Name>
          <PostalCode>string</PostalCode>
          <TelephoneNumber>string</TelephoneNumber>
        </Location>
        <Name>string</Name>
      </Merchant>
      <PaymentCard>
        <AuthorizationCode>string</AuthorizationCode>
        <MaskedNumber>string</MaskedNumber>
        <Type>string</Type>
      </PaymentCard>
      <RideDetail>
        <DriverName>string</DriverName>
        <DropoffLatitude>Decimal?</DropoffLatitude>
        <DropoffLongitude>Decimal?</DropoffLongitude>
        <EndDateTime>DateTime?</EndDateTime>
        <LineItems>
          <LineItem>
            <Amount>Decimal?</Amount>
            <Date>DateTime?</Date>
            <Description>string</Description>
            <Description2>string</Description2>
            <Quantity>Int32?</Quantity>
            <Rate>Decimal?</Rate>
            <RateType>string</RateType>
            <Reference>string</Reference>
            <SequenceNumber>Int32?</SequenceNumber>
          </LineItem>
        </LineItems>
        <StartDateTime>DateTime?</StartDateTime>
        <VehicleNumber>string</VehicleNumber>
      </RideDetail>
      <TransactionDateTime>DateTime?</TransactionDateTime>
      <Type>string</Type>
    </Receipt>

Data model shown in JSON:

    {
      "Amount": "Decimal?",
      "CurrencyCode": "string",
      "CustomFields": [
        {
          "Name": "string",
          "Value": "string"
        }
      ],
      "FormofPaymentCode": "string",
      "GeneralDetail": {
        "LineItems": [
          {
            "Amount": "Decimal?",
            "Date": "DateTime?",
            "Description": "string",
            "Description2": "string",
            "Quantity": "Int32?",
            "Rate": "Decimal?",
            "RateType": "string",
            "Reference": "string",
            "SequenceNumber": "Int32?"
          }
        ]
      },
      "HotelDetail": {
        "AverageDailyRoomRate": "Decimal?",
        "CheckinDateTime": "DateTime?",
        "CheckoutDateTime": "DateTime?",
        "ConfirmationNumber": "string",
        "GNR": "string",
        "LineItems": [
          "LineItem"
        ],
        "NumberInParty": "Int32?",
        "RatePlanType": "string",
        "RoomNumber": "string",
        "RoomType": "string"
      },
      "ImageBase64": "string",
      "MatchingFact": {
        "Type": "string",
        "Value": "string"
      },
      "Merchant": {
        "Location": {
          "Address": "string",
          "Address2": "string",
          "City": "string",
          "CountryCode": "string",
          "CountrySubdivisionCode": "string",
          "EmailAddress": "string",
          "FaxNumber": "string",
          "InternetAddress": "string",
          "Name": "string",
          "PostalCode": "string",
          "TelephoneNumber": "string"
        },
        "Name": "string"
      },
      "PaymentCard": {
        "AuthorizationCode": "string",
        "MaskedNumber": "string",
        "Type": "string"
      },
      "RideDetail": {
        "DriverName": "string",
        "DropoffLatitude": "Decimal?",
        "DropoffLongitude": "Decimal?",
        "EndDateTime": "DateTime?",
        "LineItems": [
          "LineItem"
        ],
        "StartDateTime": "DateTime?",
        "VehicleNumber": "string"
      },
      "TransactionDateTime": "DateTime?",
      "Type": "string"
    }

####  Receipt Root Element Descriptions

| ----- |
|  Element Name |  Data Type |  Description |
|

Amount

required

 |  decimal |

The net amount of the transaction. A positive number means a payment is due. A negative number means a refund is due. Zero means no payment or refund is due.

 |
|

CurrencyCode

required

 |  string |

The [3-letter ISO 4217 currency code][2] for the currency paid to the provider.

 |
|

CustomFields

optional

 |  array [CustomField] |

The parent element for custom fields.

 |
|

FormofPaymentCode

required

 |  string |

The code for the form of payment. Possible values: CASH (The receipt owner paid with cash), CCARD (The receipt owner paid with a credit card), CPAID (Company Paid - Use this when the receipt owner's company will pay for the transaction. This option is similar to an invoice. The difference is that CPAID will be processed by Concur Expense, Concur Travel Manager, or some other expense management application.)

 |
|

GeneralDetail

required when the Type value is General

 |  GeneralDetail |

The parent element that contains the details of a general transaction.

 |
|

HotelDetail

required when the Type value is Hotel

 |  HotelDetail |

The parent element that contains the details of a hospitality service.

 |
|

ImageBase64

optional

 |  string |

The binary receipt image in Base64 encoding. This API supports PNG, JPEG, JPG, and PDF file formats.

 |
|

MatchingFact

required

 |  MatchingFact |

The parent element for information that is used to match the receipt to the Concur user who purchased goods or services from the provider. The MatchingFact object must contain either a valid access token or a Concur login ID for that user.

 |
|

Merchant

required

 |  Merchant |

The parent element for information about the provider (merchant) who is posting the receipt.

 |
|

PaymentCard

required when the FormofPaymentCode value is CCARD

 |  PaymentCard |

The parent element for information about the credit card used for payment.

 |
|

RideDetail

required when the Type value is Ride

 |  RideDetail |

The parent element that contains the details of a hired ride.

 |
|

TransactionDateTime

required

 |  DateTime |

The date and local time when the transaction happened. Format: YYYY-MM-DDThh:mm

 |
|

Type

required

 |  string |

The type of receipt. Possible values: General, Ride, Hotel

 |

####  CustomField Child Element Descriptions

| ----- |
|  Element Name |  Data Type |  Description |
|

Name

optional

 |  string |

The name of the custom field. Maximum length: 128 characters

This element is required when the CustomField parent element is specified.

 |
|

Value

optional

 |  string |

The value of the custom field. Maximum length: 256 characters

This element is required when the CustomField parent element is specified.

 |

####  GeneralDetail Child Element Descriptions

| ----- |
|  Element Name |  Data Type |  Description |
|

LineItems

optional

 |  array [LineItem] |

The parent element for the line items in the receipt. There is a LineItem child element for each line item.

 |

####  LineItem Child Element Descriptions

| ----- |
|  Element Name |  Data Type |  Description |
|

Amount

optional

 |  decimal |

The total charged amount for the line item.

This element is required when the LineItem parent element is specified.

 |
|

Date

optional

 |  DateTime |

The date and local time when the line item was charged. Format: YYYY-MM-DDThh:mm

 |
|

Description

optional

 |  string |

The item's description. Maximum length: 100 characters

This element is required when the LineItem parent element is specified.

 |
|

Description2

optional

 |  string |

Additional details about the item. In the receipt image, the secondary description appears on the line following the primary description. Maximum length: 32 characters

 |
|

Quantity

optional

 |  Int32 |

The quantity of units. Format: Any positive number

 |
|

Rate

optional

 |  decimal |

The amount charged per unit.

 |
|

RateType

optional

 |  string |

The unit of measure or rate type. Possible values: HOUR or PER HOUR, DAY or PER DAY, WEEK or PER WEEK, MONTH or PER MONTH. Maximum length: 10 characters

 |
|

Reference

optional

 |  string |

The item's SKU, identifier, or some other attribute the provider uses to reference the item. Maximum length: 32 characters

 |
|

SequenceNumber

optional

 |  Int32 |

The order in which the item appears in the sequence of line items.

This element is required when the LineItem parent element is specified.

 |

####  HotelDetail Child Element Descriptions

| ----- |
|  Element Name |  Data Type |  Description |
|

AverageDailyRoomRate

optional

 |  decimal |

The sum of the room rate for each night stayed, divided by the number of nights stayed.

This element is required when the HotelDetail parent element is specified.

 |
|

CheckinDateTime

optional

 |  DateTime |

The date and local time of the check-in. Required length: 19 characters. Format: YYYY-MM-DDThh:mm

This element is required when the HotelDetail parent element is specified.

 |
|

CheckoutDateTime

optional

 |  DateTime |

The date and local time of the check-out. Required length: 19 characters. Format: YYYY-MM-DDThh:mm

This element is required when the HotelDetail parent element is specified.

 |
|

ConfirmationNumber

optional

 |  string |

The confirmation number for the booking. Maximum length: 32 characters

 |
|

GNR

optional

 |  string |

The Guest Name Record (GNR) for the stay. Maximum length: 20 characters

 |
|

LineItems

optional

 |  array [LineItem] |

The parent element for the line items in the receipt. There is a LineItem child element for each line item.

 |
|

NumberInParty

optional

 |  Int32 |

The number of people for this stay. Minimum value: 1

 |
|

RatePlanType

optional

 |  string |

The rate plan type that is used to calculate the room rate. Possible values are rate plan types defined using hospitality industry standards. Maximum length: 50 characters

 |
|

RoomNumber

optional

 |  string |

The room number for the stay. Maximum length: 30 characters

 |
|

RoomType

optional

 |  string |

The type of room. Possible values are room types defined using hospitality industry standards, such as Single, Double, Suite, and so on. Maximum length: 50 characters

 |

####  MatchingFact Child Element Descriptions

| ----- |
|  Element Name |  Data Type |  Description |
|

Type

optional

 |  string |

The type of matching fact that is used to identify the Concur user who owns the receipt. Possible values: OAuth, Login

This element is required when the MatchingFact parent element is specified.

 |
|

Value

optional

 |  string |

The value of the matching fact. If the Type element is set to OAuth, this value must be the access token for the Concur user who owns the receipt. In this case, the access token must not be expired or revoked. If the Type element is set to Login, this value must be the login ID of the Concur user who owns the receipt.

This element is required when the MatchingFact parent element is specified.

 |

####  Merchant Child Element Descriptions

| ----- |
|  Element Name |  Data Type |  Description |
|

Location

optional

 |  Location |

The parent element for the provider's location.

This element is required when the Merchant parent element is specified.

 |
|

Name

optional

 |  string |

The name of the provider (merchant). Maximum length: 64 characters

This element is required when the Merchant parent element is specified.

 |

####  Location Child Element Descriptions

| ----- |
|  Element Name |  Data Type |  Description |
|

Address

optional

 |  string |

The provider's street address. Maximum length: 100 characters

 |
|

Address2

optional

 |  string |

The provider's secondary street address. Maximum length: 50 characters

 |
|

City

optional

 |  string |

The provider's city. Maximum length: 100 characters

 |
|

CountryCode

optional

 |  string |

The provider's country. Format: [2-letter ISO 3166-1 country code][3]

This element is required when the Location parent element is specified.

 |
|

CountrySubdivisionCode

optional

 |  string |

The provider's state, province, or other country subdivision. Format: [ISO 3166-2:2007 country subdivision][4] code YYY, where YYY is the one-to-three–character subdivision code.

 |
|

EmailAddress

optional

 |  string |

The provider's email address. Maximum length: 255 characters

 |
|

FaxNumber

optional

 |  string |

The provider's fax number. Maximum length: 32 characters

 |
|

InternetAddress

optional

 |  string |

The provider's internet address. Maximum length: 255 characters

 |
|

Name

optional

 |  string |

The name of the provider's location, such as an airport, car rental agency, property, store, or other named location. Maximum length: 100 characters

 |
|

PostalCode

optional

 |  string |

The provider's postal code. Maximum length: 20 characters

 |
|

TelephoneNumber

optional

 |  string |

The provider's telephone number. Maximum length: 100 characters

 |

####  PaymentCard Child Element Descriptions

| ----- |
|  Element Name |  Data Type |  Description |
|

AuthorizationCode

optional

 |  string |

The authorization code that the card interchange provided when it approved this purchase. Maximum length: 15 characters

 |
|

MaskedNumber

optional

 |  string |

The masked card number for the credit card. With the exception of the AX (American Express) card type, this is the last four digits of the card number. For American Express, the value can be one of these, in order of preference: a) The first six digits and the last four digits of the card number. b) The last five digits. c) The last four digits.

This element is required when the PaymentCard parent element is specified.

 |
|

Type

optional

 |  string |

The card interchange for the credit card. Possible values: AX (American Express), DC (Diner's Club), DS (Discover), CA (MasterCard), VI (Visa), CB (Carte Blanche), ER (Enroute), TP (Universal Air Travel), JC (JCB), EC (EuroCard), OTHER (other types)

This element is required when the PaymentCard parent element is specified.

 |

####  RideDetail Child Element Descriptions

| ----- |
|  Element Name |  Data Type |  Description |
|

DriverName

optional

 |  string |

The name of the driver. Maximum length: 255 characters

 |
|

DropoffLatitude

optional

 |  decimal |

The latitude of the ride end location. Range: -90 to 90.

 |
|

DropoffLongitude

optional

 |  decimal |

The longitude of the ride end location. Range: -180 to 180.

 |
|

EndDateTime

optional

 |  DateTime |

The ending date and time (local) for the ride. Required length: 19 characters. Format: YYYY-MM-DDThh:mm

This element is required when the RideDetail parent element is specified.

 |
|

LineItems

optional

 |  array [LineItem] |

The parent element for the line items in the receipt. There is a LineItem child element for each line item.

 |
|

StartDateTime

optional

 |  DateTime |

The starting date and time (local) for the ride. Required length: 19 characters. Format: YYYY-MM-DDThh:mm

This element is required when the RideDetail parent element is specified.

 |
|

VehicleNumber

optional

 |  string |

The unique identifier for the vehicle. Maximum length: 50 characters

 |

###  General Receipt Example

In this example, a customer makes purchases in a coffee shop and pays with a card that has funds loaded on it and is linked to a loyalty account. The request header contains the access token of the shop employee who processes the transaction; this value is used to retrieve the Provider ID for the business. Because the form of payment is cash, the PaymentCard element is not included in the request. The example includes several line items, for goods purchased and also for tax. The provider has the option of including line items for tax and subtotal, if desired. The matching fact that is used to match the customer (a Concur user) to the receipt is that user's login ID.

####  Request

    POST {InstanceURI}/api/v3.0/common/receipts HTTP/1.1
    Content-Type: application/json
    Authorization: OAuth {access token}

    {
        "Type": "General",
        "TransactionDateTime": "2014-11-05T09:05:00",
        "Amount": 6.89,
        "CurrencyCode": "USD",
        "FormOfPaymentCode": "CASH",
        "MatchingFact": {
    	"Type": "Login",
    	"Value": "cm@company.com"
        },
        "Merchant": {
    	"Name": "Coffee Example Co",
    	"Location": {
    		"Name": "Jamboree Center",
          "Address": "2 Jamboree Center",
          "City": "Irvine",
          "CountrySubdivisionCode": "CA",
          "CountryCode": "US",
          "CostalCode": "90273",
          "InternetAddress": "http://www.example.com",
          "EmailAddress": "info@example.com",
          "TelephoneNumber": "949-262-6240",
        }
    	"GeneralDetail": {
        "LineItems": [
                {
                    "SequenceNumber": 1,
                    "Reference": "CafeItem5",
                    "Description": "Tall latte",
                    "Quantity": 1,
                    "Amount": 3.00
                },
    			  {
                    "SequenceNumber": 2,
                    "Reference": "BakItem2",
                    "Description": "Muffin",
                    "Quantity": 1,
                    "Amount": 3.50
                },
    			  {
                    "SequenceNumber": 3,
                    "Reference": "SalesTax",
                    "Description": "Sales tax",
                    "Quantity": 1,
                    "Amount": 0.39
                }
            ]
      },

    }

####  Response

The response includes the ID of the receipt that was posted. The URI is not typically included in the response.

    {
        "ID": "73014444355",
        "URI": ""
    }

###  Hotel Receipt Example

In this example, the provider company (Acme Hotels) posts a receipt for a hotel stay in which one guest stays for one night. The request header contains the access token of the hotel employee who processes the transaction; this value is used to retrieve the Provider ID for the hotel. Because the form of payment is credit card, the PaymentCard element is required to be included in the request. Several line items are also included in this example, as well as a custom field containing information about a special request. The matching fact that is used to match the guest (a Concur user) to the receipt is that user's access token value.

####  Request

    POST {InstanceURI}/api/v3.0/common/receipts HTTP/1.1
    Content-Type: application/json
    Authorization: OAuth {access token}

    {
        "Type": "Hotel",
        "TransactionDateTime": "2014-05-05T15:05:00",
        "Amount": 221.29,
        "CurrencyCode": "USD",
        "FormOfPaymentCode": "CCARD",
        "PaymentCard": {
            "Type": "AX",
            "MaskedNumber": "1009",
        },
        "MatchingFact": {
    	"Type": "OAuth",
    	"Value": "{access token}"
        },
        "Merchant": {
    	"Name": "AcmeHotels",
    	"Location": {
    		"Name": "Jamboree Center",
          "Address": "1 Jamboree Center",
          "City": "Irvine",
          "CountrySubdivisionCode": "CA",
          "CountryCode": "US",
          "CostalCode": "90273",
          "InternetAddress": "http://www.acmehotels.com",
          "EmailAddress": "irvine@acmehotels.com",
          "TelephoneNumber": "949-262-6240",
          "FaxNumber": "949-262-6241"
        }
      },
      "HotelDetail": {
        "ConfirmationNumber": "9372034",
        "CheckInDateTime": "2014-05-05T15:05:00",
        "CheckOutDateTime": "2014-05-06T11:50:00",
        "GNR": "GAB",
        "NumberInParty": 1,
        "RoomNumber": "0427",
        "RoomType": "King",
        "RatePlanType": "Standard",
        "AverageDailyRoomRate": 172
        "LineItems": [
          {
            "SequenceNumber": 1,
            "Date": "2014-05-05T15:05:00",
            "Description": "In room dining dinner food",
            "Description2": "Room #0427 : Check #5875",
            "Quantity": 1,
            "Amount": 13.96
          },
          {
            "SequenceNumber": 2,
            "Date": "2014-05-05T15:05:00",
            "Description": "AAA Discount Rate",
            "Rate": 172,
            "RateType": "DAY",
            "Quantity": 1,
            "Amount": 172
          },
          {
            "SequenceNumber": 3,
            "Date": "2014-05-05T15:05:00",
            "Description": "CTA FEE",
            "Quantity": 1,
            "Amount": 0.13
          }
        ]
      },
      "CustomFields": [
        {
          "Name": "Special Request",
          "Value": "Feather pillows upon arrival"
        }
      ]
    }

####  Response

The response includes the ID of the receipt that was posted.

    {
        "ID": "73014444355",
        "URI": ""
    }

###  Ride Receipt Example

In this example, a ride service provider posts a receipt for a ride. The receipt contains one line item for the fare, and one for the tip. A custom field contains information about a promotion code. Because the form of payment is credit card, the PaymentCard element is required to be included in the request. The matching fact that is used to match the customer (a Concur user) to the receipt is that user's access token value.

####  Request

    POST {InstanceURI}/api/v3.0/common/receipts HTTP/1.1
    Content-Type: application/xml
    Authorization: OAuth {access token}

    <Receipt>
    	<Amount>88.6</Amount>
      <CurrencyCode>USD</CurrencyCode>
      <CustomFields>
        <CustomField>
          <Name>PromotionCode</Name>
          <Value>28894772</Value>
        </CustomField>
      </CustomFields>
      <FormofPaymentCode>CCARD</FormofPaymentCode>
      <MatchingFact>
        <Type>OAuth</Type>
        <Value>{access token}</Value>
      </MatchingFact>
      <Merchant>
        <Location>
          <Address>1234 Drive St</Address>
          <Address2>Suite 202</Address2>
          <City>Bellevue</City>
          <CountryCode>US</CountryCode>
          <CountrySubdivisionCode>WA</CountrySubdivisionCode>
          <EmailAddress>info@example.com</EmailAddress>
          <InternetAddress>http://www.example.com</InternetAddress>
          <Name>Drive Street Branch</Name>
          <PostalCode>20007</PostalCode>
          <TelephoneNumber>999-555-1234</TelephoneNumber>
        </Location>
        <Name>AcmeLimousineService</Name>
      </Merchant>
      <PaymentCard>
        <AuthorizationCode>A78339R</AuthorizationCode>
        <MaskedNumber>4321</MaskedNumber>
        <Type>VI</Type>
      </PaymentCard>
      <RideDetail>
        <DriverName>Pat Davis</DriverName>
        <DropoffLatitude>47.4436655</DropoffLatitude>
        <DropoffLongitude>-122.2982266</DropoffLongitude>
        <EndDateTime>2014-06-10T15:48:24</EndDateTime>
        <LineItems>
          <LineItem>
            <Amount>25.00</Amount>
            <Description>Fare</Description>
            <Quantity>1</Quantity>
            <Reference>RideRefId01</Reference>
            <SequenceNumber>1</SequenceNumber>
          </LineItem>
    		<LineItem>
            <Amount>5.00</Amount>
            <Description>Tip</Description>
            <Quantity>1</Quantity>
            <Reference>RideRefId02</Reference>
            <SequenceNumber>2</SequenceNumber>
          </LineItem>
        </LineItems>
        <StartDateTime>2014-06-10T15:08:24</StartDateTime>
        <VehicleNumber>9918882928</VehicleNumber>
      </RideDetail>
      <TransactionDateTime>2014-06-16T16:03:24</TransactionDateTime>
      <Type>Ride</Type>
      <ImageBase64>{image data}</ImageBase64>
    </Receipt>

####  Response

The response includes the ID of the receipt that was posted.

    <?xml version="1.0" encoding="utf-8"?>
    <Response xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
      <ID>73014444356</ID>
      <URI />
    </Response>

####  See Also

[Receipts Resource][5]

 

Last Modified: 1/30/2014 1:24 PM PST

[1]: https://developer.concur.com/node/808
[2]: http://en.wikipedia.org/wiki/ISO_4217
[3]: http://en.wikipedia.org/wiki/ISO_3166-1_alpha-2
[4]: http://en.wikipedia.org/wiki/ISO_3166-2
[5]: Receipts3.0_resource.html
