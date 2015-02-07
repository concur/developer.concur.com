---
title: Ground Transportation - Post Reservation Detail Search
layout: operation
---

## Request
The following request is sent to the supplier when the Travel user selects a ground transportation reservation to get additional details.

## URI
The Ground Transportation direct connect sends the relevant information to a URI that the travel supplier maintains. The standard location is:
`https://{servername}/concur/groundtransportation`

The URI is configured by the supplier when registering the partner application.

## Request Headers - Required
Authorization header with OAuth credentials. Refer to the OAuth documentation for more information.

## Request Headers - Optional
None

## Request Body
The request will contain a CC_LimoReservationDetailRequest parent element, containing the following child element:

|Element Name|Required/Optional|Data Type|Description|
| ---------- | --------------- |-------- |-----------|
|ReservationID| | |The unique identifier for the reservation. Returned in the ReservationID element by the response of the Post Reservation Sell function.|


####XML Example Request

```
POST /concur/groundtransportation HTTPS/1.1
Host: example.com
Authorization: Basic ...
Content-Type: application/xml
Content-Length: {length of content body}

<CC_LimoReservationDetailRequest>
 <ReservationID>1234</ReservationID>
</CC_LimoReservationDetailRequest>
```

## Response
The supplier responds to the request by supplying the full reservation details.

### Content Type
application/xml

### Content Body
The response will include a CC_LimoReservationDetailReply parent element, with the following child elements:

|Element Name|Required/Optional|Data Type|Description|
|------------|-----------------|---------|-----------|
|Error |Y | |The error information, if an error occurred. This parent element contains the following [child elements](#error):
|ReservationID |N | |  The identifier for the reservation. |
|Status |N | |The status of the reservation. The value will be one of the following: RB: Reservation Pending RA: Reservation Accepted (Reserved) RD: Reservation Declined XB: Cancellation Pending XA: Cancellation Confirmed (Cancelled) XD: Cancellation Declined|
|ConfNum |N |  |The confirmation number for the reservation. |
|CancelPolicy |N |  |The cancellation policy for the reservation. |
|CancelNum |N |  |The cancellation number for the reservation. |
|PrimaryPassenger |Y |  |The passenger contact name for the reservation. This parent element contains the following [child elements](#PrimaryPassenger)|
|ServiceType | Y | |The type of service requested. Will contain one of the following values:
100: Point to point  110: One way to airport  111: One way from airport  120: One way to train station  121: One way from train station  200: Hourly  300: Airport to airport|
|ClassOfService |  N |  |The requested service class. Will contain one of the following values: 100: Normal 200: High 300: Highest If this value is not provided by the user, it will default to 100.|
|PickupLocation |Y | |The pick up location. This parent element contains the following [child elements](#PickupLocation)|
|DropoffLocation |  Y |  |The drop off location. This parent element contains the following [child elements](#DropoffLocation)|
|StartDateTime |  Y |  |The time, in GMT, that the reservation must begin.  **Format**: 2015-05-19T18:00:00 |
|EndDateTime |  N |  |The time, in GMT that the reservation will end. Provided for hourly reservations. **Format**: 2015-05-19T18:00:00 |
|PickupInstructions |  N |  |Additional instructions about the pick up request. |
|DropoffInstructions |  N |  |Additional instructions about the drop off request. |
|LanguageCode |  Y |  |The language of the traveler. Will be one of the following options: <br>en: English <br>en-us: English (US) <br>en-gb: English (UK)  <br>fr: French <br>fr-ca: French (Canadian) <br>de: German <br>pt: Portuguese <br>es: Spanish <br>nl: Dutch <br>it: Italian <br>ja: Japanese <br>pl: Polish  <br>bt-br: Portuguese (Brazilian)  <br>ru: Russian  <br>hu: Hungarian  <br>ko: Korean <br>sv: Swedish <br>zh-cn: Chinese <br>zh-tw: Traditional Chinese|
| Currency |  Y |  |The [3-letter ISO 4217 currency code][2] for the reservation amount. |
| NumPassengers |  N |  |The number of passengers. |
| RequestedDriver |  N |  |The name of the requested driver, if available. |
| SpecialServiceRequest |  N |  |The details of the special service request, if available. |
| PickupServiceArrangement |  N |  |The details of the pickup arrangement, if available. |
| DropoffServiceArrangement |  N |  |The details of the dropoff arrangement, if available. |
| ExtraStopArrangement |  N |  |The details of the extra stop arrangement, if available. |
| RateInfo |  Y |  |The booked rate details. Refer to the Rate Information Elements table for more information. |
| Vehicle |  Y |  |The vehicle details. This parent element contains the following [child elements](#vehicle)|
| Vendor |  Y |  |The reservation vendor. This parent element contains the following [child elements](#vendor)|
| FormOfPayment |  Y |  |The form of payment for the reservation. This parent element contains one of the following [child elements](#formofpayment)|
| RateDisclaimer |  N |  |Disclaimer text about the rate. |
| ProviderFeedback |  N |  |Any additional feedback from the supplier. |
|  AccountingInfo |  N |  |The accounting information for the reservation. This parent element contains the following child elements: AccountingField1  through AccountingField5|


#### Error Child Elements <a name="Error"></a>
|Element Name|Required/Optional|Data Type|Description|
| ---------- | --------------- |-------- |-----------|
|  ErrorCode | | |The code for the error. Will contain one of the following values:  
400: Credential related error  
700: Reservation not available  
900: Unknown error |
|ErrorSource | | |The source of the error. |
|ErrorDescription| | |The additional error information. |

#### PrimaryPassenger Child Element <a name="PrimaryPassenger"></a>
|Element Name|Required/Optional|Data Type|Description|
|------------|-----------------|---------|-----------|
|FirstName |  | |The contact's first name. |
|LastName | | | The contact's last name. |
|Phone | | |The contact's phone number. |
|Phone2 | | |The contact's backup phone number. |
|CellPhone | | |The contact's cell phone number.|
|EmailAddress | | |The contact's email address. |

###PickupLocation <a name="PickupLocation"></a>
|Element Name|Required/Optional|Data Type|Description|
|------------|-----------------|---------|-----------|
| LocationType |  | |One of the following: 100 - Address, 200 - Airport, 300 - Train station. |
| Airport |  | |Refer to the Airport Elements table. Provided if the LocationType = 200. |   | | |
| TrainStation |  | |Refer to the Train Station Elements table. Provided if the LocationType = 300. |
| Address |  | |The street address of the location. Provided if the LocationType = 100. |
| City |  | |The location city. |
| State |  | |The location state. Preferably 2 characters, max 10 characters. |
| Country |  | |The location's [ 2 character ISO 3166-1 alpha-2][1] country code. Example: US |
| PostalCode |  | |The location postal code. |
| ExtraNotes |  | |Additional notes about the location. Example: Ring doorbell, Holiday Inn, etc. |

###PickupLocation <a name="DropoffLocation"></a>
|Element Name|Required/Optional|Data Type|Description|
|------------|-----------------|---------|-----------|
|LocationType | | |One of the following: 100 - Address, 200 - Airport, 300 - Train station, 400 - As directed. |
| Airport |  | |Refer to the Airport Elements table. Provided if the LocationType = 200. |   | | |
| TrainStation |  | |Refer to the Train Station Elements table. Provided if the LocationType = 300. |
| Address |  | |The street address of the location. Provided if the LocationType = 100. |
| City |  | |The location city. |
| State |  | |The location state. Preferably 2 characters, max 10 characters. |
| Country |  | |The location's [ 2 character ISO 3166-1 alpha-2][1] country code. Example: US |
| PostalCode |  | |The location postal code. |
| ExtraNotes |  | |Additional notes about the location. Example: Apartment Building, gravel driveway, etc. |

### Vehicle Child Elements <a name="vehicle"></a>

|Element Name|Required/Optional|Data Type|Description|
|------------|-----------------|---------|-----------|
| VehicleType|  | |One of the following values: <br>100: Sedan <br>200: Limo  <br>250: Stretch Limo <br>300: SUV  <br>350: Stretch SUV <br>400: Van  <br>450: Mini-Bus <br>500: Motor Coach <br>600: Shuttle <br>700: Trolley <br>800: Carriage <br>900: Any|
| Description |  | |The vehicle description. |
| MaxPassengers |  | |The maximum number of passengers for the vehicle. Must be greater than zero. |
| VehicleID |  | |Information to identify the specific vehicle.|


#### Vendor Child Elements <a name="vendor"></a>

|Element Name|Required/Optional|Data Type|Description|
|------------|-----------------|---------|-----------|
| VendorCode |  | |The vendor code for the vendor. |
| VendorName |  | |The vendor's name. |
| PhoneNumber |  | |The vendor's phone number. |


### FormOfPayment Child Elements <a name="formofpaymetn"></a>

|Element Name|Required/Optional|Data Type|Description|
|------------|-----------------|---------|-----------|
|CreditCard | | |If present, the passenger will pay with credit card. Refer to the Reply Credit Card Elements table for the child elements. |
|Cash |  | |If present, the passenger will pay cash. |   | | |
|Check |  | |If present, the passenger will pay with a check. |
|DirectBilling |  | |If present, the passenger will pay through direct billing. |

## Rate Information Elements


[1]: http://en.wikipedia.org/wiki/ISO_3166-1_alpha-2
[2]: http://en.wikipedia.org/wiki/ISO_4217
