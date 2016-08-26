---
title: Travel Profile
layout: reference
---


##  Description


The Travel Profile resource represents a Concur travel profile which contains travel-related information about a user.

##  Version

2.0
[Version 1.0](/api-reference-deprecated/version-one/Travel/profile-resource.html) has been **deprecated**

##  Operations

* [Get a travel profile](#a1)
* [Create/Update a travel profile](#a2)
* [Travel Profile Elements](#a3)
* [Possible Warning and Error Messages](#a4)
* [Get a list of travel profile summaries](#a5)

Detailed descriptions of requests and responses are available in the documentation for each HTTP method.

## <a name="a1">Get a Travel Profile</a>

This endpoint provides travel profile information for the specified user. The travel profile includes information such as the user's identity, contact information, rate preferences and discount codes, preferences by travel type, and custom fields.

###  URI

<code>https://{InstanceURL}/api/travelprofile/v2.0/profile</code>

###  Request parameters

All request parameters are optional. To identify a specific user by Login ID or XML Sync ID, you can specify the following request parameters:

|  Parameter Name |  Parameter Type |  Data Type |  Description |
| :----- | :----- | :----- |:-----|
|  userid_type |  Path |  `string` |  The type of user identification to use. Possible values are: **login** and **xmlsyncid** |
|  userid_value |  Path |  `string` |  The user's Login ID or XML Sync ID, depending on which user type is selected. This parameter must be provided in conjunction with the **userid_type** parameter. |

### Headers

####  Content-Type header
application/xml

####  Authorization header
<samp>Authorization: OAuth {access_token}</samp>

Where access_token is the OAuth 2.0 access token of the user whose travel profile information you want to retrieve.

## <a name="a2">Create/Update Travel Profile</a>

Creating/Updating a Profile uses the same model as what is retrieved.

### Helpful Tips
* Minimum elements required to create a new user include:
	* FirstName
	* LastName
	* TravelConfigID
	* LoginID
	* Password
	* <i>RuleClass (uses Default Rule Class if not provided)</i>
* Omitted elements will be ignored and not updated
* Empty elements of datatype string will be cleared out; nillable elements will be cleared out if set as nil refer to XSD for nillable elements.

### Headers

####  Content-Type header
application/xml

####  Authorization header
<samp>Authorization: OAuth {access_token}</samp>

Where access_token is the OAuth 2.0 access token of the user whose travel profile information you want to retrieve or update.

## <a name="a3">Travel Profile Elements</a>

#### Data model
The complete schema definition is available here: [Travel Profile XSD][3].
<i>Concur reserves the right to change the XSD.  Reading/writing strictly to the XSD will result in breakage as new XML elements are added.</i>

####  Profile root element

The Profile root element contains:

* [General](#General)
* [EmergencyContact](#EmergencyContact)
* [Telephones](#Telephones)
* [Addresses](#Addresses)
* [NationalIDs](#NationalIDs)
* [DriversLicenses](#DriversLicenses)
* [HasNoPassport](#HasNoPassport)
* [Passports](#Passports)
* [Visas](#Visas)
* [EmailAddresses](#EmailAddresses)
* [RatePreferences](#RatePreferences)
* [DiscountCodes](#DiscountCodes)
* [Air](#Air)
* [Rail](#Rail)
* [Car](#Car)
* [Hotel](#Hotel)
* [CustomFields](#CustomFields)
* [Roles](#Roles)
* [Sponsors](#Sponsors)
* [TSAInfo](#TSAInfo)
* [UnusedTickets](#UnusedTickets)
* [SouthwestUnusedTickets](#SouthwestUnusedTickets)
* [AdvantageMemberships](#AdvantageMemberships)

***

####  <a name="General"></a>General elements

The General parent element contains the following child elements.

* Some elements require specific scopes be enabled to receive the data, refer to the table below.
* Profile fields, such as cost center and division, must be enabled and populated in the Travel site for data to return. 

| Element Name | Data Type | Description |  Update |  Create | Comments |
| ----- | ----- | ----- | ----- | ----- | ----- |
|  `NamePrefix` |  `string` |  The user's name prefix. Format: nvarchar(60) | |  | |
|  `FirstName` |  `string` |  The user's first name. Format: nvarchar(60) | | Required | |
|  `MiddleName` |  `string` |  The user's middle name. Format: nvarchar(60) | | | |
|  `LastName` |  `string` |  The user's last name. Format: nvarchar(60) | | Required | |
|  `NameSuffix` |  `string` |  The user's name suffix. Format: nvarchar(60) | |  | |
|  `PreferredName` |  `string` |  The user's preferred name. Format: nvarchar(60) | |  | |
|  `JobTitle` |  `string` |  The user's job title. Format: nvarchar(255) | | | |
|  `CostCenter` | `string` | The user’s cost center. Format: nvarchar(25) | | | Requires Company Details scope. |
|  `CompanyEmployeeID` | `string` | The user’s employee ID. Format: nvarchar(48) | | | Requires Company Details Scope.  Must be unique in the company. |
|  `Division` | `string` | The user's division. Format: nvarchar(60) | || Requires Company Details scope.  Must already be setup in the company configuration. |
|  `PreferredLanguage` |  `string` |  The user's preferred language locale. Example: United States English is en-US. Format: varchar(20) | |  | |
|  `EReceiptOptIn` |  `boolean` |  Whether the user has opted in to receive e-receipts. Format: **true**\|**false** | |  |
|  `HasOpenBooking` |  `boolean` |  Whether the user has the TripLink User (formerly Open Booking User) permission. Format: **true**\|**false** | Cannot Update | | |
|  `CountryCode` |  `string` |  The country code in from the[ ISO 3166-1 alpha-2 country code][8] specification. Format: char(2) | Cannot Update | | |
|  `CompanyName` |  `string` |  The user's company name. Format: nvarchar(255) | Cannot Update | | |
|  `CompanyID` | `string` | The user's company ID. Format: varchar(255) | Cannot Update | | |
|  `RuleClass` |  `string` |  The user's rule class. Format: nvarchar(60) | | | Must already be setup in the company. |
|  `TravelConfigID` | `string` | The user's TravelConfig. Format: varchar(255) | | Required | |
|  `MedicalAlerts` | `string` |  The user's medical alerts. Format: nvarchar(255) | | | Requires Medical Alerts Scope. |
|  `AgencyNumber` | `string` | The TravelConfig’s Agency IATA Number. Format: varchar(255) | Cannot Update | | |
|  `SearchID` | `string` | The user's Search ID. Format: varchar(64) | | | |
|  `GDSProfileName` |  `string` |  The user's GDS profile name. Format: varchar(60) | | | Requires TMC Specific scope.|

* **NOTE**:  If MiddleName is provided, the NoMiddleName flag in TSAInfo section is set to false.

***

#### <a name="EmergencyContact"></a>EmergencyContact elements

The emergency contact information provided.
* Emergency Contact Information scope must be enabled to receive the data.

|  Element Name |  Data Type |  Description |  Update |  Create | Comments |
| ----- | ----- | ----- | ----- | ----- | ----- |
| `Name`  |  `string`  | The emergency contact name Format: nvarchar(255) | | | |
| `Relationship` |  `string`  | The relationship to the user. Values are: Spouse, Brother, Parent, Sister, LifePartner, Other | | | |
| `Phone`  | `list` |  | | | If multiple values of the same telephone type are provided, only the last one will be saved.  See below for the list elements.|
| `Address` |  `Address` | Street Address. Format: nvarchar(max) | | | |


#### Address Elements

|  Element Name |  Data Type |  Description |  Update |  Create | Comments |
| ----- | ----- | ----- | ----- | ----- | ----- |
| `Street` |  `string` | Street Address. Format: nvarchar(max) | | | |
| `City` |   `string` | The city name. Format: nvarchar(30) | | | |
| `StateProvince` |   `string` | The state or province. Format: nvarchar(30) | | | |
| `CountryCode` | `string` | The country code in from the ISO 3166-1 alpha-2 country code specification. Format: char(2) | | | |
| `PostalCode` | `string` | The postal code. Format: nvarchar(20) | | | |


#### Phone List Elements

|  Element Name |  Data Type |  Description |  Update |  Create | Comments |
| ----- | ----- | ----- | ----- | ----- | ----- |
| `PhoneNumber`  | `string` | The emergency contact’s phone number.  Format: nvarchar(60) | | | No unicode characters. |
| `Type`  | `string` | This contains a “type” attribute with values of DayTime or Alternate.  | Required | Required | |

***

####  <a name="Telephones"></a>Telephones elements

The Telephones parent element contains a Telephone child element for each included telephone. The Telephone element has the attributes shown in the Response Class section and contains the following child elements:

|  Element Name |  Data Type |  Description |  Update |  Create | Comments |
| ----- | ----- | ----- | ----- | ----- | ----- |
|  `Type attribute` | `string` | Type of phone. Values are: Home, Work, Fax, Pager, Other, and Cell | required | required ||
|  `ContactOptIn attribute` |  `boolean` |  Whether the user has opted in to being contacted on this phone. Only appears when the phone type is Cell. Format: **true**\|**false** | | | |
|  `PrimaryMobile attribute` | `boolean` | This is the user's preferred mobile device. Format: **true**\|**false** | | | |
|  `CountryCode` |  `string` |  The country code in from the[ ISO 3166-1 alpha-2 country code][8] specification. Format: Char(2) | required (Cell) | required (Cell)|Required for Cell types.
|  `PhoneNumber` |  `string` | The phone number as entered by the user, which may contain characters such as () or -. Format: nvarchar(60) <br> | required (Cell) | required (Cell)| Required for Cell types. |
|  `Extension` |  `string` |  The phone extension. Format: nvarchar(60) | | | |
|  `MobileDevice` | `string` |  The OS of the mobile device. Values are:<br> Android Phone<br> Android Tablet<br> Blackberry<br> iOS Phone<br> iOS Tablet<br> Not a smartphone<br> Other iOS device<br> Other smartphone<br> Unknown<br> Window Mobile | | | |
|  `MobileName` | `string` | The name the user assigned to the mobile device. Format: nvarchar(255) | | | |

* **NOTES**:
 * Telephone Types Other, Pager, Fax, Home, Work, Work2
 	* Ignores CountryCode, DeviceName, DeviceType, ContactOptIn, IsPrimaryMobile
	 * Only Work (NOT Work2) uses Extension
 	* Only a single number can be kept for each of these types. If more than one of each type is provided, W016 warning message is returned.
 * Multiple cell phones can be updated, but will sync to the list provided.  Cell phones missing from that list that currently associate with the user will be deleted.
 * PrimaryMobile:
	* If there is not exactly 1 PrimaryMobile specified in changing cell phones, then all cell phone changes will be rejected. If only 1 Cell Phone is provided, it is marked as Primary.

***

####  <a name="Addresses"></a>Addresses elements

The Addresses parent element contains an Address child element for each included address. The Address element has the attributes shown in the Response Class section and contains the following child elements:

* **NOTE**: The values returned for the Address child elements are as entered by the user. The fields do not enforce formatting and may have a wide variety of values.

|  Element Name |  Data Type |  Description |  Update |  Create | Comments |
| ----- | ----- | ----- | ----- | ----- | ----- |
| `Type attribute` | `string` | Address type. Values are: Home or Work | required | required | If multiple values are provided for either address type, the last one will be the one saved in the creation/update. |
|  `Street` |  `string` |  Street Address. Format: nvarchar(max)) | | | |
|  `City` |  `string` |  The city name. Format: nvarchar(30) | | | |
|  `StateProvince` |  `string` |  The state or province. Format: nvarchar(30) | | | ISO Validation Coming Soon |
|  `CountryCode` |  `string` |  The country code in from the [ISO 3166-1 alpha-2 country code][1] specification. Format: char(2)| | | |
|  `PostalCode` |  `string` |  The postal code. Format: nvarchar(20) | | | |
|  `Longitude` |  `string` |  Longitude value of Work Address. | Cannot Update | | |
|  `Latitude` |  `string` |  Latitude value of Work Address. | Cannot Update | | |

***

#### <a name="NationalIDs"></a>NationalIDs elements

The NationalIDs parent element contains a NationalID child element for each included National ID. The NationalID element contains the following child elements:

|  Element Name |  Data Type |  Description |  Update |  Create | Comments |
| ----- | ----- | ----- | ----- | ----- | ----- |
|  `NationalIDNumber` |  `string` |  The user's national identification number. Format: nvarchar(100) | | | No unicode accepted.  Only saves one national ID value. If multiple are provided, W016 warning message is returned. |
|  `IssuingCountry` |  `string` |  The country the national ID was issued in. Format: varchar(2) | | | |
|  `Expiration` |  `date` |  The expiration date of the national ID. Format: YYYY-MM-DD | | | Min - 01/01/1753, Max - 12/31/9999 |

* **NOTE**:  Only one National ID can be accepted.

***

####  <a name="DriversLicenses"></a>DriversLicenses elements

The DriversLicenses parent element contains a DriversLicense child element for each included licenses.

* The DriversLicense element contains the following child elements:

|  Element Name |  Data Type |  Description |  Update |  Create | Comments |
| ----- | ----- | ----- | ----- | ----- | ----- |
|  `DriversLicenseNumber` |  `string` |  The user's driver license identification number. Format: nvarchar(100) | | | Only saves one Drivers License Number value. If multiple are provided, W016 warning message is returned. |
|  `IssuingCountry` |  `string` |  The country the license was issued in. Format: varchar(2) | | | |
|  `IssuingState` |  `string` |  The state the license was issued in. Format: nvarchar(30) | | | |
|  `Expiration` |  `date` |  The expiration date of the license. Format: YYYY-MM-DD | | | Min - 01/01/1753, Max - 12/31/9999 |

* **NOTE**:  Only one Drivers License can be accepted.

***

####  <a name="HasNoPassport"></a>HasNoPassport element

A flag which is triggered automatically when adding a new passport to a user.

* Passport Visa Information scope must be enabled to receive or update the data.

|  Element Name |  Data Type |  Description |  Update |  Create | Comments |
| ----- | ----- | ----- | ----- | ----- | ----- |
|  `HasNoPassport` |  `boolean` | Format: **true**\|**false**. | | If passport value added, then this value becomes false. |


***

#### <a name="Passports"></a>Passports elements

A list of passports in the user's profile:

 * Passport Visa Information scope must be enabled to receive the data.

|  Element Name |  Data Type |  Description |  Update |  Create | Comments |
| ----- | ----- | ----- | ----- | ----- | ----- |
| `PassportNumber` | `string` | The user's passport number. Format: nvarchar(100) | Required | Required | |
| `PassportNationality` | `string` | The user's passport nationality. Format: char(2) | Required | Required | |
| `PassportExpiration`  | `date` |  The date the user’s passport expires. Format: YYYY-MM-DD | | | Min - 01/01/1900, Max - 06/06/2079 |
| `PassportDateIssued` | `date`  | The date the user’s passport was issued. Format: YYYY-MM-DD | | | Min - 01/01/1900, Max - 06/06/2079|
| `PassportCityIssued` | `string` |The city the user’s passport was issued in. Format: nvarchar(60) | | | |
| `PassportCountryIssued` |  `string`  |The country code in from the [ISO 3166-1 alpha-2 country code][1] specification. Format: char(2) | | | |

* **NOTE**: there can only be 2 passports associated to a user.  If more than two passports are provided, W016 warning message is returned.

***

#### <a name="Visas"></a>Visas elements

A list of visas in the user's profile.

* Passport Visa Information scope must be enabled to receive or update the data.

|  Element Name |  Data Type |  Description |  Update |  Create | Comments |
| ----- | ----- | ----- | ----- | ----- | ----- |
| `VisaNationality` | `string` | The user's visa nationality. Format: char(2) | Required | Required | |
| `VisaNumber`  | `string` | The user's visa nationality. Format: nvarchar(100) | Required | Required | |
| `VisaType`  |  `string` | The user's visa type. Values are Unknown, SingleEntry, DoubleEntry, MultiEntry, ESTA, ETA, and SchengenVisa. | | | |
| `VisaDateIssued` | `date` |  The date the user’s visa was issued. Format: YYYY-MM-DD | | | Min - 01/01/1900 Max - 06/06/2079 |
| `VisaExpiration` | `date`  | The date the user’s visa expires. Format: YYYY-MM-DD | | | Min -01/01/1900 Max - 06/06/2079 |
| `VisaCityIssued` | `string` | The city the user’s visa was issued in. Format: nvarchar(60) | | | |
| `VisaCountryIssued` |  `string` | The country code in from the [ISO 3166-1 alpha-2 country code][1] specification. Format: char(2) | | | |

* **NOTE**:  Visas will sync with existing visas.  Any existing Visas not provided in the list will be deleted.

***

####  <a name="EmailAddresses"></a>EmailAddresses elements

The EmailAddresses parent element contains an EmailAddress child element for each included email address. It contains the following child element:

|  Element Name |  Data Type |  Description |  Update |  Create | Comments |
| ----- | ----- | ----- | ----- | ----- | ----- |
|  `EmailAddress` |  `string` | The user's email address. Format: Varchar(255) | | | |
| `Contact attribute` | `boolean` | The Contact attribute specifies whether the email address should be used for travel notifications. Format: **true**\|**false**. | | |
| `Type attribute` | `string` | The type of email address. Values are: Business, Personal, Supervisor, TravelArranger, Business2, Other1, and Other2. | Required | Required | Supervisor and TravelArranger cannot be updated. Only 1 of each type is allowed. W016 Error is returned |

***

#### <a name="RatePreferences"></a>RatePreferences elements
The RatePreferences parent element contains the following child element:

|  Element Name |  Data Type |  Description |  Update |  Create | Comments |
| ----- | ----- | ----- | ----- | ----- | ----- |
|  `AAARate` |  `boolean` | Whether the user is eligible for the AAA rate. Format: **true**\|**false** | | |
|  `AARPRate` |  `boolean` | Whether the user is eligible for the AARP rate. Format: **true**\|**false** | | |
|  `GovtRate` |  `boolean` | Whether the user is eligible for the Government rate. Format: **true**\|**false** | | |
|  `MilitaryRate` |  `boolean` | Whether the user is eligible for the Military rate. Format: **true**\|**false** | | | |

***

#### <a name="DiscountCodes"></a>DiscountCodes elements

The DiscountCodes parent element contains a DiscountCode child element for each included discount code.

|  Element Name |  Data Type |  Description |  Update |  Create | Comments |
| ----- | ----- | ----- | ----- | ----- | ----- |
|  `DiscountCode` |  `string` | The discount code for the specified vendor. | | | unable to update |
| `Vendor attribute` | `string` | Specifies the name of the vendor for the discount code. | | | unable to update |

* **NOTE:** Discount code elements are not available to create or update.

***

#### <a name="Air"></a>Air elements

The Air parent element contains the user's air travel preferences and contains the following child elements:

|  Element Name |  Data Type |  Description |  Update |  Create | Comments |
| ----- | ----- | ----- | ----- | ----- | ----- |
|  `AirMemberships` |    | The AirMemberships element only appears if the request came from a travel supplier for this travel type, or from a TMC. This element contains [AirMembership child elements](#airmember). | | | |
|  `Seat` |   | This element contains [air seat child elements](#airseat). | | | |
|  `Meals` | `string`   | This parent element contains the MealCode child element that indicates the meal preference of the traveler. The possible values are: <br> Regular Meal (DEFAULT VALUE) <br> BBML = Baby Meal  <br> BLML = Bland Meal  <br> CHML = Child Meal  <br> DBML = Diabetic Meal  <br> FPML = Fruit Platter  <br> GFML = Gluten Intolerant Meal  <br> HNML = Hindu Meal  <br> KSML = Kosher Meal  <br> LCML = Low Calorie Meal  <br> LSML = Low Salt Meal  <br> MOML = Muslim Meal  <br> NLML = Low Lactose Meal  <br> NSML = No Salt Meal  <br> PFML = Peanut Free Meal  <br> SFML = Seafood Meal  <br>  VGML = Vegetarian  <br> RVML = Vegetarian Raw Vegan Meal  <br> KVML = Vegetarian Kosher <br> VLML = Vegetarian Lacto-Ovo  <br> | | | |
|  `HomeAirport` |  `string` |  The user's home airport. varchar(3) | | | Must be an existing IATA code. |
|  `AirOther` |  `string` |  Other Air related description | | | |

##### <a name="airmember"></a>Air Memberships elements

|  Element Name |  Data Type |  Description |  Update |  Create | Comments |
| ----- | ----- | ----- | ----- | ----- | ----- |
|  `VendorCode` |  `string` |  The code for the vendor that manages the loyalty program. varchar(2)| Required | Required | Must be a valid VendorCode for the membership type. |
|  `AccountNo` |  `string` |  The user's account identifier in the loyalty program. varchar(60) | Required | Required | |
|  `Status` |  `string` |  Name of the user's current level in the loyalty program. varchar (100) | | | |
|  `StatusBenefits` |  `string` |  Description of a benefit of the loyalty program at the current status. | | | |
|  `PointTotal` |  `string` |  The user's total number of points in the loyalty program. | | | |
|  `SegmentTotal` |  `string` |  The user's total segments in the loyalty program. | | | |
|  `NextStatus` |  `string` |  Name or description of next higher status level in the  loyalty program. | | | |
|  `PointsUntilNextStatus` |  `string` |  Loyalty points required to next status level. | | | |
|  `SegmentsUntilNextStatus` |  `string` |  Booking segment to next status level. | | | |
|  `IsSenator` | `boolean` | Lufthansa specific field. Format: **true**\|**false** | | | |


##### <a name="airseat"></a>Seat elements

|  Element Name |  Data Type |  Description |  Update |  Create | Comments |
| ----- | ----- | ----- | ----- | ----- | ----- |
|  `InterRowPositionCode` |  `string` |  Preferred position in an airplane row. Format: **Window**, **Aisle**, **Middle**, **DontCare**. | | | | 
|  `SectionPositionCode` |  `string` |  Preference for position in plane. Format: **Bulkhead**, **Forward**, **Rear**, **ExitRow**, **DontCare**. | | | |

***

####  <a name="Rail"></a>Rail elements

The Rail parent element contains the user's rail travel preferences and contains the following child elements:

|  Element Name |  Data Type |  Description |  Update |  Create | Comments |
| ----- | ----- | ----- | ----- | ----- | ----- |
| `Seat` | `string` | This element contains seat preferences. Format: **Aisle**, **Window**, **DontCare** | | | |
| `Coach` | `string` | This element contains coach preferences. Format: **Compartment**, **Coach**, **CoachWithTable**, **DontCare** | | | |
| `NoiseComfort` | `string` | This element cotains noise comfort preferences. Format: **QuietSpace**, **MobileSpace**, **DontCare** | | | |
| `Bed` | `string` | This element contains bed preferences. Format: **Lower**, **Upper**, **Middle**, **DontCare** | | | |
|`BedCategory` | `string` | This element contains bed category preferences. Format: **WomenOnly**, **MenOnly**, **DontCare** | | | |
| `Berth` | `string` | This element contains berth preferences. Format: **Lower**, **Upper**, **Middle**, **DontCare** | | | |
| `Deck` | `string` | This element contains deck preferences. Format: **Lower**, **Upper**, **DontCare** | | | |
| `SpaceType`| `string` | This element contains space type preferences. Format: **Panorama**, **SeatWithTable**,  **Solo**, **Salon**, **Kiosk**,  **InclineSeat**, **DuoSideBySide**,  **DuoFaceToFace**,  **Club6**,  **Club4**,  **Carre**,  **DisabledCompanionSpace**, **DontCare** | | | |
| `FareSpaceComfort` | `string` | This element contains fare space comfort preferences. Format: **DedicatedBusiness**, **Business**, **IntermediateLeisure**, **Leisure**, **StandardLeisure**, **DontCare** | | | |
| `SpecialMeals` | `string` | This element contains special meal preferences. Format: **LowFat**, **LowSalt**, **GlutenFree**,  **Diabetic**,  **Muslim**, **Kosher**, **Vegetarian**, **VegetarianLactoOvo**, **DontCare** | | | |
| `Contingencies` | `string` | This element contains contingencies preferences. Format: **Bike**, **WomenOnly**, **WheelchairSpace**, **DontCare** | | | |
| `RailMemberships` |  | This element contains [RailMembership child elements](#rmchild) | | | | |


##### <a name="rmchild"></a>Rail Membership elements

|  Element Name |  Data Type |  Description |  Update |  Create | Comments |
| ----- | ----- | ----- | ----- | ----- | ----- |
|  `VendorCode` |  `string` |  The code for the vendor that manages the loyalty program. varchar(2)| Required | Required | Must be a Valid Vendor Code for the Membership Type. |
|  `AccountNo` |  `string` |  The user's account identifier in the loyalty program. varchar(60) | Required | Required | See Below. |
|  `Status` |  `string` |  Name of the user's current level in the loyalty program. varchar (100) | | | |
|  `StatusBenefits` |  `string` |  Description of a benefit of the loyalty program at the current status. | | | |
|  `PointTotal` |  `string` |  The user's total number of points in the loyalty program. | | | |
|  `SegmentTotal` |  `string` |  The user's total segments in the loyalty program. | | | |
|  `Expiration` |  `DateTime` |  The user's expiration date in the loyalty program.  Min - 01/01/1753, Max - 12/31/9999 | | | | |
|  `NextStatus` |  `string` |  Name or description of next higher status level in the  loyalty program. | | | |
|  `PointsUntilNextStatus` |  `string` |  Loyalty points required to next status level. | | | |
|  `SegmentsUntilNextStatus` |  `string` |  Booking segment to next status level. | | | |
|  `BahnCardClass` |  `string` |  Bahn card class. Valid values are First and Second. | | | |
|  `BahnCardType` |  `string` |  Bahn card type. Valid values include NA (for non-rail programs), Card25, Card50, Card100, Business25. and Business50.. | | | |



***

####  <a name="Car"></a>Car elements

The Car parent element contains the user's car travel preferences. It contains the following child elements:

|  Element Name |  Data Type |  Description |  Update |  Create | Comments |
| ----- | ----- | ----- | ----- | ----- | ----- |
|  `CarSmokingCode` |  `string` |  Smoking car preferred. Format: **DontCare**, **NonSmoking**, **Smoking** | | | |
|  `CarGPS` |  `boolean` |  Car GPS preference. Format: **true**\|**false**. | | | |
|  `CarType` |  `string` |  Car type preference. Values are:  <br> DontCare <br> Mini <br> Economy <br> EconomyHybrid <br> Compact <br> CompactHybrid <br> Intermediate <br> IntermediateHybrid <br> Standard <br> StandardHybrid <br> FullSize <br> FullSizeHybrid <br> MiniVan <br> Luxury <br> Premium <br> StandardSUV <br> IntermediateSUV <br> FullSizeSUV <br> FullSizePickup <br> Specialized | | | |
|  `CarMemberships` |   | The CarMemberships element only appears if the request came from a travel supplier for this travel type, or from a TMC. This element contains  [CarMembership child elements](#cmchild) for each included membership. | | | |
|  `CarOther` |  `string` |  Other Car related description. Format: varchar(30) | | | |
|  `CarSkiRack` |  `boolean` |  Car ski rack preference. Format: **true**\|**false**. | | |
|  `CarTransmission` | `string` | Car transmission type. Values are: **DontCare**, **Automatic**, **Manual** | | | |

##### <a name="cmchild"></a>Car Memberships elements

|  Element Name |  Data Type |  Description |  Update |  Create | Comments |
| ----- | ----- | ----- | ----- | ----- | ----- |
|  `VendorCode` |  `string` |  The code for the vendor that manages the loyalty program. varchar(2)| Required | Required | Must be a Valid Vendor Code for the Membership Type. |
|  `AccountNo` |  `string` |  The user's account identifier in the loyalty program. varchar(60) | Required | Required | See Below. |
|  `Status` |  `string` |  Name of the user's current level in the loyalty program. varchar (100) | | | |
|  `StatusBenefits` |  `string` |  Description of a benefit of the loyalty program at the current status. | | | |
|  `PointTotal` |  `string` |  The user's total number of points in the loyalty program. | | | |
|  `SegmentTotal` |  `string` |  The user's total segments in the loyalty program. | | | |
|  `Expiration` |  `DateTime` |  The user's expiration date in the loyalty program.  | | | Min - 01/01/1753, Max - 12/31/9999 | 
|  `NextStatus` |  `string` |  Name or description of next higher status level in the  loyalty program. | | | |
|  `PointsUntilNextStatus` |  `string` |  Loyalty points required to next status level. | | |  |
|  `SegmentsUntilNextStatus` |  `string` |  Booking segment to next status level. | | | |


***

####  <a name="Hotel"></a>Hotel elements

The Hotel parent element contains the user's hotel travel preferences. It contains the following child elements:

|  Element Name |  Data Type |  Description |  Update |  Create | Comments |
| ----- | ----- | ----- | ----- | ----- | ----- |
|  `SmokingCode` |  `string` |  Smoking room preference. Values: **DontCare**, **NonSmoking**,**Smoking** | | | |
|  `HotelMemberships` |    | This parent element only appears if the request came from a travel supplier for this travel type, or from a TMC. This element contains [HotelMembership child elements](#hmchild) for each included membership. | | | |
|  `RoomType` |  `string` |  Hotel room preference. Values are: **DontCare**, **King**, **Queen**, **Double**, **Twin**, **Single**, **Disability** | | | |
|  `HotelOther` |  `string` |  Other Hotel related description. Format: varchar(30) | | | |
|  `PreferFoamPillows` |  `boolean` |  Whether the user prefers foam pillows. Format: **true**\|**false**. | | |
|  `PreferCrib` |  `boolean` |  Whether the user prefers to have a crib. Format:**true**\|**false**. | | | 
|  `PreferRollawayBed` |  `boolean` |  Whether the user prefers to have a rollaway bed. Format:**true**\|**false**. | | | 
|  `PreferGym` |  `boolean` |  Whether the user prefers a hotel with a gym. Format:**true**\|**false**. | | | 
|  `PreferPool` |  `boolean` |  Whether the user prefers a hotel with a pool. Format:**true**\|**false**. | | |
|  `PreferRestaraunt` |  `boolean` |  Whether the user prefers a hotel with a restaurant. Format:**true**\|**false**. | | |
|  `PreferWheelchairAccess` |  `boolean` |  Whether the user requires wheelchair access. Format: **true**\|**false**. | | |
|  `PreferAccessForBlind` |  `boolean` |  Whether the user requires a room with access for blind guests. Format:**true**\|**false**. | | |
|  `PreferRoomService` |  `boolean` |  Whether the user prefers a hotel with room service. Format:**true**\|**false**. | | |
|  `PreferEarlyCheckIn` |  `boolean` |  Whether the user prefers a hotel with early check in. Format:**true**\|**false**. | | | |

##### <a name="hmchild"></a>Hotel Memberships elements

|  Element Name |  Data Type |  Description |  Update |  Create | Comments |
| ----- | ----- | ----- | ----- | ----- | ----- |
|  `VendorCode` |  `string` |  The code for the vendor that manages the loyalty program. varchar(2)| Required | Required | Must be a Valid Vendor Code for the Membership Type. |
|  `AccountNo` |  `string` |  The user's account identifier in the loyalty program. varchar(60) | Required | Required | See Below. |
|  `Status` |  `string` |  Name of the user's current level in the loyalty program. varchar (100) | | | |
|  `StatusBenefits` |  `string` |  Description of a benefit of the loyalty program at the current status. | | | |
|  `PointTotal` |  `string` |  The user's total number of points in the loyalty program. | | | |
|  `SegmentTotal` |  `string` |  The user's total segments in the loyalty program. | | | |
|  `Expiration` |  `DateTime` |  The user's expiration date in the loyalty program. | | | Min - 01/01/1753, Max - 12/31/9999 |


***

#### <a name="CustomFields"></a>CustomFields elements
The CustomFields parent element contains a CustomField child element for each field.
* Company Details scope must be enabled to receive the data.

|  Element Name |  Data Type |  Description |  Update |  Create | Comments |
| ----- | ----- | ----- | ----- | ----- | ----- |
|  `CustomField` |  `string` |  The value of the custom field. Format: varchar(255) | | | |
|  `Name attribute` |  `string` |  The name of the custom field. Format: varchar(255) | Required | Required | |

***

#### <a name="Roles"></a>Roles elements
A list of users associated to a user:

|  Element Name |  Data Type |  Description |  Update |  Create | Comments |
| ----- | ----- | ----- | ----- | ----- | ----- |
| `FirstName`  | `string` | The Arranger/Manager's first name. Format: varchar(60) | Cannot Update | | |
| `LastName` |   `string ` | The Arranger/Manager's last name. Format: varchar(60) | Cannot Update | | |
| `EmailAddress` |    `string` | The Arranger/Manager's email address. Format: varchar(255) | Cannot Update | | |
| `LoginId` | `string` | The Login Id for Arranger/Manager | Required | Required | |
| `Type attribute` | `string` |  The Arranger/Manager's role. Values are: Arranger, Manager | Required | Required | |
| `PrimaryIndicatorFlag attribute` |  `boolean` | For Arrangers type, denotes the primary arranger. Format: **true**\|**false**. | |||

* **NOTES**: 
	* FirstName, LastName, and Email cannot be updated.
	* Managers and Arrangers must be in the same company of the user to be assigned.
	* If the PrimaryIndicatorFlag is sent in as true, the arranger will be marked as primary.
	* New arrangers will be marked as Travel arrangers only.
	* If multiple primary arrangers are provided, W016 warning message is returned.
	* If multiple managers are provided, W016 warning message is returned.

***

#### <a name="Sponsors"></a>Sponsors

A list of sponsors associated to a user:

|  Element Name |  Data Type |  Description |  Update |  Create | Comments |
| ----- | ----- | ----- | ----- | ----- | ----- |
| `NonEmployeeUserType` | `string` | The non-employee's user type. Values are: **Contractor**, **Student/Intern**, **Candidate for Hire**, **Invitational Traveler**, **Dependent/Spouse**, **Board Member**, **Other** | Required | Required | |
| `SponsorName` | `string` | The sponsor’s name. Format: varchar(255) | Cannot Update | | |
| `SponsorshipStartDate`  |  `date`  |  The sponsorship start date. Format: YYYY-MM-DD | Required | Required | |
| `SponsorshipEndDate` | `date`  |  The sponsorship end date. Format: YYYY-MM-DD | Required | Required | |
| `LoginID` | `string` | The sponsor’s name. Format: varchar(255) | Required | Required | |

* **NOTES**:
	* The Company must allow sponsored users, and the Sponsoring User must have the “Sponsor” role to be added to the list of sponsors
	* The Sponsoring User must be associated with the same company as the Sponsored User.
	* If the association to the Sponsoring User already exists, than the data will be updated
	* SponsorshipEndDate must be after SponsorshipStartDate

***

#### <a name="TSAInfo"></a>TSAInfo elements

The Transportation Security Administration (TSA) Details provided.
* TSA Information scope must be enabled to receive the data.

|  Element Name |  Data Type |  Description |  Update |  Create | Comments |
| ----- | ----- | ----- | ----- | ----- | ----- |
| `Gender` |  `string` | The user's gender. Values are: **Male**, **Female** | | | |
| `DateOfBirth` | `date` |  The user’s date of birth. Format: YYYY-MM-DD.  Min - 01/01/1900, Max - 	06/06/2079 | | | |
| `NoMiddleName`  |  `boolean` | Format: true/false | | | |
| `PreCheckNumber` | `string`| The user’s pre-check number. Format: varchar(255) | | | |
| `RedressNumber` | `string` | The user’s redress number. Format: varchar(255) | | | |

* **NOTE**: NoMiddleName: If the profile has a middle name, NoMiddleName overrides to false

***

#### <a name="UnusedTickets"></a>UnusedTickets elements

A list of unused tickets associated to a user
* Unused Tickets scope must be enabled to receive the data.

|  Element Name |  Data Type |  Description |  Update |  Create | Comments |
| ----- | ----- | ----- | ----- | ----- | ----- |
| `Carrier` |  `string` | The vendor’s name. Format: Varchar(255) | Required | Required | |
| `TicketNumber`  |  `string` | The unused ticket number. Format: Varchar(255) | Required | Required | |
| `RecordLocator`  | `string` | The unused ticket record locator. Format: Varchar(6) | | | |
| `BaseFare` |   `string` | The base fare of the unused ticket. Format: Varchar(255) | | | |
| `Taxes`  | `string` | The taxes for the unused ticket. Format: Varchar(255) | | | |
| `Fees`  |  `string` | The fees for the unused ticket. Format: Varchar(255) | | | |
| `Currency`   | `string`|  The currency of the unused ticket. Format: Varchar(3) | | | |
| `TicketType` | `string` | The type of unused ticket. Format: Varchar(1) | | | |
| `IssueDate` |  `date`   | The date of issue for the unused ticket. Format: YYYY-MM-DD. | | | Min - 01/01/1753, Max - 12/31/9999 |
| `ExpirationDate` | `date` | The date of expiration for the unused ticket. Format: YYYY-MM-DD. | | | Min - 01/01/1753, Max - 12/31/9999 |
| `Notes`  | `string` | Notes associated to that unused ticket. Format: Varchar(255) | | | |

***

#### <a name="SouthwestUnusedTickets"></a>SouthwestUnusedTickets elements

A list of unused Southwest tickets associated to a user.
* Unused Tickets scope must be enabled to receive the data.

|  Element Name |  Data Type |  Description |  Update |  Create | Comments |
| ----- | ----- | ----- | ----- | ----- | ----- |
| `RecordLocator` | `string` | The unused ticket record locator. Format: Varchar(255) | Required | | |
| `TicketAmount` |`string` | The amount of the unused ticket. Format: Varchar(255) | | | |
| `Currency`   | `string`|  The currency of the unused ticket. Format: Varchar(3) | | | |
| `ExpirationDate` | `date` | The date of expiration for the unused ticket. Format: YYYY-MM-DD. | | | Min - 01/01/1753, Max - 12/31/9999 |

***

#### <a name="AdvantageMemberships"></a>AdvantageMemberships elements
A list of advantage memberships associated to a user:

|  Element Name |  Data Type |  Description |  Update |  Create | Comments |
| ----- | ----- | ----- | ----- | ----- | ----- |
| `VendorCode` | `string` | The code for the vendor that manages the membership program. Format: Varchar(2) | Required | Required | |
| `VendorType` | `string` | The vendor type. Values are: **Air**, **Rail**, **Car**, **Hotel** | Required | Required | |
| `ProgramNumber` | `string` | The membership program number. Format: Varchar(20) | Required | Required | |
| `OriginCode` | `string` | The origin code. Format: Varchar(12) | | | |
| `DestinationCode` | `string` | The destination code. Format: Varchar(12) | | | |
| `ProgramCode` | `string` | The program code. Format: Varchar(20) | Required | Required | |
| `ExpirationDate` | `date` | Expiration date. Format: YYYY-MM-DD.  Min - 01/01/1900, Max - 06/06/2079  | | | |
| `OptionCode` |  `string` |  The option code. Format: Varchar(20) | | | |
| `ProgramName` | `string` | The program name. Format: Varchar(20) | Cannot Update | | |

* **NOTE**:  Multiple memberships for the same VendorType, VendorCode, ProgramCode, and CardNumber are identified and a warning is thrown.

***

## <a name="a4">Possible Warnings and Error Messages</a>

The codes and types of messages that can be returned on updates and creates:

| CODE | Message Type | Notes | Example |
| ----- | ----- | ----- | ----- |
| S001 | Success | Process completed successfully | Success, no errors or warnings reported |
| E001 | No Access | User does not have access | |
| E002 | Required Field Missing | The field noted is required for updates or creates, no changes were made | |
| W001 | Invalid Regex | The given data does not match the expected regex | |
| W002 | Invalid Length | The given data is too long or too short | |
| W003 | Not Found In Company | The given user was not found in the company | |
| W004 | Duplicate Entry | The given data is duplicated and not allowed | |
| W005 | Duplicate LoginId | The given LoginID is duplicated | |
| W006 | Out of Range | The given data is out of range | |
| W007 | Field is Required | The given field cannot be cleared | |
| W009 | Invalid Account Number | Account Number check failed due to length, Luhn, etc. | |
| W010 | Invalid Vendor Code | Vendor Code given is invalid | |
| W011 | Cannot Change | The given field cannot be altered | |
| W012 | Primary Cell Number Error | Data violates 1 primary cell phone requirement | |
| W013 | Invalid Custom Field | The data provided is invalid for the custom field | |
| W014 | Invalid Date Range | The data provided is outside of acceptable date range | |
| W015 | Invalid GUID | The GUID is invalid | |
| W016 | Too Many Items | There are too many items in the given list | |
| W017 | No Access to VendorCode | The user lacks access to the given vendor code | |

***

##  Examples for Travel Suppliers

###  Example 1: Get the travel profile for the user associated with the specified OAuth 2.0 access token

####  Request

    GET {InstanceURI}/api/travelprofile/v2.0/profile HTTP/1.1
    Authorization: OAuth {access token}
    ...


####  Example 2: Get the travel profile for a user with a specific login ID

#####  Request

    GET https://www.concursolutions.com/api/travelprofile/v2.0/profile?
    userid_type=login&userid_value=cm@example.com HTTP/1.1
    Authorization: OAuth {access token}
    ...

####  Examples for TMCs

####  Example 3: Get the travel profile for the user associated with the specified OAuth 2.0 access token

#####  Request

    GET {InstanceURI}/api/travelprofile/v2.0/profile HTTP/1.1
    Authorization: OAuth {access token}
    ...


####  Example 4: Get the travel profile for a user with a specific login ID

#####  Request

    GET https://www.concursolutions.com/api/travelprofile/v2.0/profile?
    userid_type=login&userid_value=cm@example.com HTTP/1.1
    Authorization: OAuth {access token}
    ...

#### Update and Create Examples Coming Soon


## <a name="a5">Get a list of travel profile summaries</a>

This endpoint provides a list of travel profile summaries that have been updated since the specified date. The response is separated into pages.

###  Request

<code>
GET {InstanceURI}/api/travelprofile/v2.0/summary?LastModifiedDate=2015-01-01T01:00:00 HTTP/1.1
Authorization: OAuth {access token}
</code>

####  Request parameters

All request paramenters are optional. Available request parameters are as follows:

|  Parameter Name |  Required/Optional | Parameter Type |  Data Type |  Description |
| :----- | :----- | :----- | :----- | :----- |
|  LastModifiedDate | Required |  path |  `string` |  The date and time, in UTC, that the profiles must be updated after to be included in the response. Format: YYYY-MM-DDThh:mm:ss |
|  Page | Optional |  path |  `string` |  The number of pages to retrieve. If the page is outside the number of existing pages, the response elements will be empty |
|  ItemsPerPage | Optional |  path |  `string` |  The number of travel profiles per page. The maximum value is 200. The default value is 200. |

#### Headers

#####  Accept header
application/xml

#####  Authorization header

<samp>Authorization: OAuth {access_token}</samp>

Where _access_token_ is the OAuth 2.0 access token of the user whose travel profile summaries you want to retrieve. If you want to access company-wide travel profile information, the user account associated with the OAuth 2.0 access token must have a Concur account with one of these roles: Web Services Administrator for Professional or Can Administer for Standard.

###  Data model

The data model of the response for the GET operation. The complete schema definition is also available here: [Travel Profile Summary V2 XSD][4]

<pre>
<span class="xml-tag">&lt;ConnectResponse</span><span class="xml-tag">&gt;</span>
    <span class="xml-tag">&lt;Metadata</span><span class="xml-tag">&gt;</span>
        <span class="xml-tag">&lt;Paging</span><span class="xml-tag">&gt;</span>
            <span class="xml-tag">&lt;TotalPages</span> <span class="xml-tag">/&gt;</span>
            <span class="xml-tag">&lt;TotalItems</span> <span class="xml-tag">/&gt;</span>
            <span class="xml-tag">&lt;Page</span> <span class="xml-tag">/&gt;</span>
            <span class="xml-tag">&lt;ItemsPerPage</span> <span class="xml-tag">/&gt;</span>
            <span class="xml-tag">&lt;PreviousPageURL</span> <span class="xml-tag">/&gt;</span>
            <span class="xml-tag">&lt;NextPageURL</span> <span class="xml-tag">/&gt;</span>
        <span class="xml-tag">&lt;/Paging</span><span class="xml-tag">&gt;</span>
    <span class="xml-tag">&lt;/Metadata</span><span class="xml-tag">&gt;</span>
    <span class="xml-tag">&lt;Data</span><span class="xml-tag">&gt;</span>
        <span class="xml-tag">&lt;ProfileSummary</span><span class="xml-tag">&gt;</span>
            <span class="xml-tag">&lt;Status</span> <span class="xml-tag">/&gt;</span>
            <span class="xml-tag">&lt;LoginID</span> <span class="xml-tag">/&gt;</span>
            <span class="xml-tag">&lt;XmlProfileSyncID</span> <span class="xml-tag">/&gt;</span>
            <span class="xml-tag">&lt;ProfileLastModifiedUTC</span> <span class="xml-tag">/&gt;</span>
        <span class="xml-tag">&lt;/ProfileSummary</span><span class="xml-tag">&gt;</span>
    <span class="xml-tag">&lt;/Data</span><span class="xml-tag">&gt;</span>
<span class="xml-tag">&lt;/ConnectResponse</span><span class="xml-tag">&gt;</span>

</pre>

### Response

####  ConnectResponse root element

The ConnectResponse root element contains the General, Telephones, Addresses, DriversLicenses, EmailAddresses, RatePreferences, DiscountCodes, Air, Car, Hotel, and CustomFields child elements. It has the attributes shown in the Response Class section.

####  Metadata element

The Metadata parent element contains the Paging child element.

####  Paging elements

The Paging parent element contains contains the paging information for the response and it contains the following child elements:

|  Element Name |  Data Type |  Description |
| :----- | :----- | :----- | :----- |
|  TotalPages |  `string` |  The total number of pages to return. |
|  TotalItems |  `string` |  The total number of profiles the query returned. |
|  Page |  `string` |  The page number for the set of results in the current response. |
|  ItemsPerPage |  `string` |  The number of items set to display per page. |
|  PreviousPageURL |  `string` |  The URI to the previous page of results. This element will be empty when there are no previous pages. |
|  NextPageURL |  `string` |  The URI to the next set of results. This element will be empty when there are no next pages |

####  Data element

The Data parent element contains a ProfileSummary child element for each included travel profile.

####  ProfileSummary

The ProfileSummary element contains the profile information for the response and it contains the following child elements:

|  Element Name |  Data Type |  Description |
| :----- | :----- | :----- | :----- |
|  Status |  `string` |  Current status of the user: Active or Inactive. |
|  LoginID |  `string` |  The Concur user login ID. |
|  XMLProfileSyncID |  `string` |  TThe user's XML Profile Sync ID, if available. |
|  ProfileLastModifiedUTC |  `string` |  The date, in UTC, when the travel profile was last modified. Format: YYYY-MM-DDThh:mm:ss. |

###  Example
This example gets the list of travel profile summaries modified after January 1 2015.

####  Request

<samp>
    GET {InstanceURI}/api/travelprofile/v2.0/summary?LastModifiedDate=2015-01-01T01:00:00 HTTP/1.1
    Authorization: OAuth {access token}
    ...
</samp>

####  Response

<pre>
200 OK
Content-Type: application/xml

<span class="xml-tag">&lt;ConnectResponse</span><span class="xml-tag">&gt;</span>
    <span class="xml-tag">&lt;Metadata</span><span class="xml-tag">&gt;</span>
        <span class="xml-tag">&lt;Paging</span><span class="xml-tag">&gt;</span>
            <span class="xml-tag">&lt;TotalPages</span><span class="xml-tag">&gt;</span>1<span class="xml-tag">&lt;/TotalPages</span><span class="xml-tag">&gt;</span>
            <span class="xml-tag">&lt;TotalItems</span><span class="xml-tag">&gt;</span>2<span class="xml-tag">&lt;/TotalItems</span><span class="xml-tag">&gt;</span>
            <span class="xml-tag">&lt;Page</span><span class="xml-tag">&gt;</span>1<span class="xml-tag">&lt;/Page</span><span class="xml-tag">&gt;</span>
            <span class="xml-tag">&lt;ItemsPerPage</span><span class="xml-tag">&gt;</span>200<span class="xml-tag">&lt;/ItemsPerPage</span><span class="xml-tag">&gt;</span>
            <span class="xml-tag">&lt;PreviousPageURL</span> <span class="xml-tag">/&gt;</span>
            <span class="xml-tag">&lt;NextPageURL</span> <span class="xml-tag">/&gt;</span>
        <span class="xml-tag">&lt;/Paging</span><span class="xml-tag">&gt;</span>
    <span class="xml-tag">&lt;/Metadata</span><span class="xml-tag">&gt;</span>
    <span class="xml-tag">&lt;Data</span><span class="xml-tag">&gt;</span>
        <span class="xml-tag">&lt;ProfileSummary</span><span class="xml-tag">&gt;</span>
            <span class="xml-tag">&lt;Status</span><span class="xml-tag">&gt;</span>Active<span class="xml-tag">&lt;/Status</span><span class="xml-tag">&gt;</span>
            <span class="xml-tag">&lt;LoginID</span><span class="xml-tag">&gt;</span>mariab@company1.com<span class="xml-tag">&lt;/LoginID</span><span class="xml-tag">&gt;</span>
            <span class="xml-tag">&lt;XmlProfileSyncID</span><span class="xml-tag">&gt;</span>`string`123<span class="xml-tag">&lt;/XmlProfileSyncID</span><span class="xml-tag">&gt;</span>
            <span class="xml-tag">&lt;ProfileLastModifiedUTC</span><span class="xml-tag">&gt;</span>2015-01-01T01:00:00<span class="xml-tag">&lt;/ProfileLastModifiedUTC</span><span class="xml-tag">&gt;</span>
        <span class="xml-tag">&lt;/ProfileSummary</span><span class="xml-tag">&gt;</span>
        <span class="xml-tag">&lt;ProfileSummary</span><span class="xml-tag">&gt;</span>
            <span class="xml-tag">&lt;Status</span><span class="xml-tag">&gt;</span>Inactive<span class="xml-tag">&lt;/Status</span><span class="xml-tag">&gt;</span>
            <span class="xml-tag">&lt;LoginID</span><span class="xml-tag">&gt;</span>peterk@company1.com<span class="xml-tag">&lt;/LoginID</span><span class="xml-tag">&gt;</span>
            <span class="xml-tag">&lt;XmlProfileSyncID</span><span class="xml-tag">&gt;</span>`string`456<span class="xml-tag">&lt;/XmlProfileSyncID</span><span class="xml-tag">&gt;</span>
            <span class="xml-tag">&lt;ProfileLastModifiedUTC</span><span class="xml-tag">&gt;</span>2015-01-01T01:00:00<span class="xml-tag">&lt;/ProfileLastModifiedUTC</span><span class="xml-tag">&gt;</span>
        <span class="xml-tag">&lt;/ProfileSummary</span><span class="xml-tag">&gt;</span>
    <span class="xml-tag">&lt;/Data</span><span class="xml-tag">&gt;</span>
<span class="xml-tag">&lt;/ConnectResponse</span><span class="xml-tag">&gt;</span>

</pre>
 



[3]: https://www.concursolutions.com/ns/TravelUserProfile.xsd
[4]: https://www.concursolutions.com/ns/TravelProfileSummaryV2.xsd
[8]: https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2
