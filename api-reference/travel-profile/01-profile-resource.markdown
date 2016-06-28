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
* [Get a list of travel profile summaries](#a2)

Detailed descriptions of requests and responses are available in the documentation for each HTTP method.

## <a name="a1">Get a travel profile</a>

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

#### Data model
The complete schema definition is available here: [Travel Profile XSD][3].

####  ProfileResponse root element

The ProfileResponse root element contains:

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

| Element Name | Data Type | Description |  Scope |
| ----- | ----- | ----- | ----- |
|  `NamePrefix` |  `string` |  The user's name prefix. Format: nvarchar(60) | |
|  `FirstName` |  `string` |  The user's first name. Format: nvarchar(60) | |
|  `MiddleName` |  `string` |  The user's middle name. Format: nvarchar(60) | |
|  `LastName` |  `string` |  The user's last name. Format: nvarchar(60) | |
|  `NameSuffix` |  `string` |  The user's name suffix. Format: nvarchar(60) | |
|  `PreferredName` |  `string` |  The user's preferred name. Format: nvarchar(60) | |
|  `JobTitle` |  `string` |  The user's job title. Format: nvarchar(255) | |
|  `CostCenter` | `string` | The user’s cost center. Format: nvarchar(25) | Company Details |
|  `CompanyEmployeeID` | `string` | The user’s employee ID. Format: nvarchar(48) | Company Details |
|  `Division` | `string` | The user's division. Format: nvarchar(60) | Company Details |
|  `PreferredLanguage` |  `string` |  The user's preferred language locale. Example: United States English is en-US. Format: varchar(20) | |
|  `EReceiptOptIn` |  `boolean` |  Whether the user has opted in to receive e-receipts. Format: **true**\|**false** | |
|  `HasOpenBooking` |  `boolean` |  Whether the user has the TripLink User (formerly Open Booking User) permission. Format: **true**\|**false** | |
|  `CountryCode` |  `string` |  The country code in from the[ ISO 3166-1 alpha-2 country code][8] specification. Format: char(2) | |
|  `CompanyName` |  `string` |  The user's company name. Format: nvarchar(255) | |
|  `CompanyID` | `string` | The user's company ID. Format: varchar(255) | |
|  `RuleClass` |  `string` |  The user's rule class. Format: nvarchar(60) | |
|  `MedicalAlerts` | `string` |  The user's medical alerts. Format: nvarchar(255) | Medical Alerts |
|  `GDSProfileName` |  `string` |  The user's GDS profile name. Format: varchar(60) | TMC Specific |

***

#### <a name="EmergencyContact"></a>EmergencyContact elements

The emergency contact information provided.
* Emergency Contact Information scope must be enabled to receive the data.

|  Element Name |  Data Type |  Description |
| ----- | ----- | ----- |
| `Name`  |  `string`  | The emergency contact name> Format: nvarchar(255) |
| `Relationship` |  `string`  | The relationship to the user. Values are: Spouse, Brother, Parent, Sister, LifePartner, Other |
| `Phone`  | `string` | The emergency contact’s phone number. This contains a “type” attribute with values of DayTime and Alternate. Format: nvarchar(60) |
| `Street` |  `string` | Street Address. Format: nvarchar(max) |
| `City` |   `string` | The city name. Format: nvarchar(30) |
| `StateProvince` |   `string` | The state or province. Format: nvarchar(30) |
| `CountryCode` | `string` | The country code in from the ISO 3166-1 alpha-2 country code specification. Format: char(2) |
| `PostalCode` | `string` | The postal code. Format: nvarchar(20) |

***

####  <a name="Telephones"></a>Telephones elements

The Telephones parent element contains a Telephone child element for each included telephone. The Telephone element has the attributes shown in the Response Class section and contains the following child elements:

|  Element Name |  Data Type |  Description |
| :----- | :----- | :----- |
|  `Type attribute` | `string` | Type of phone. Values are: Home, Work, Fax, Pager, Other, and Cell |
|  `ContactOptIn attribute` |  `boolean` |  Whether the user has opted in to being contacted on this phone. Only appears when the phone type is Cell. Format: **true**\|**false** |
|  `PrimaryMobile attribute` | `boolean` | This is the user's preferred mobile device. Format: **true**\|**false** |
|  `CountryCode` |  `string` |  The country code in from the[ ISO 3166-1 alpha-2 country code][8] specification. Format: Char(2) |
|  `PhoneNumber` |  `string` | The phone number as entered by the user, which may contain characters such as () or -. Format: nvarchar(60) <br> **NOTE**: The user phone number may sometimes be incorrectly parsed if there are data input issues.|
|  `Extension` |  `string` |  The phone extension. Format: nvarchar(60) |
|  `MobileDevice` | `string` |  The OS of the mobile device. Format: varchar(25) |
|  `MobileName` | `string` | The name the user assigned to the mobile device. Format: nvarchar(255) |

***

####  <a name="Addresses"></a>Addresses elements

The Addresses parent element contains an Address child element for each included address. The Address element has the attributes shown in the Response Class section and contains the following child elements:

* **NOTE**: The values returned for the Address child elements are as entered by the user. The fields do not enforce formatting and may have a wide variety of values.

|  Element Name |  Data Type |  Description |
| :----- | :----- | :----- |
| `Type attribute` | `string` | Address type. Values are: Home or Work |
|  `Street` |  `string` |  Street Address. Format: nvarchar(max)) |
|  `City` |  `string` |  The city name. Format: nvarchar(30) |
|  `StateProvince` |  `string` |  The state or province. Format: nvarchar(30) |
|  `CountryCode` |  `string` |  The country code in from the[ ISO 3166-1 alpha-2 country code][1] specification. Format: char(2)|
|  `PostalCode` |  `string` |  The postal code. Format: nvarchar(20) |
|  `Longitude` |  `string` |  Longitude value of Work Address. |
|  `Latitude` |  `string` |  Latitude value of Work Address. |

***

#### <a name="NationalIDs"></a>NationalIDs elements

The NationalIDs parent element contains a NationalID child element for each included National ID. The NationalID element contains the following child elements:

|  Element Name |  Data Type |  Description |
| :----- | :----- | :----- |
|  `NationalIDNumber` |  `string` |  The user's national identification number. Format: nvarchar(100) |
|  `IssuingCountry` |  `string` |  The country the national ID was issued in. Format: varchar(2) |
|  `Expiration` |  `date` |  The expiration date of the national ID. Format: YYYY-MM-DD |

***

####  <a name="DriversLicenses"></a>DriversLicenses elements

The DriversLicenses parent element contains a DriversLicense child element for each included licenses. The DriversLicense element contains the following child elements:

|  Element Name |  Data Type |  Description |
| :----- | :----- | :----- |
|  `DriversLicenseNumber` |  `string` |  The user's driver license identification number. Format: nvarchar(100) |
|  `IssuingCountry` |  `string` |  The country the license was issued in. Format: varchar(2) |
|  `IssuingState` |  `string` |  The state the license was issued in. Format: nvarchar(30) |
|  `Expiration` |  `date` |  The expiration date of the license. Format: YYYY-MM-DD |

***

####  <a name="HasNoPassport"></a>HasNoPassport element

In order to receive this data, you must enable the Passport Visa Information scope.

|  Element Name |  Data Type |  Description |
| :----- | :----- | :----- |
|  `HasNoPassport` |  `boolean` | Format: **true**\|**false**. |

***

#### <a name="Passports"></a>Passports elements

A list of passports in the user's profile.
* Passport Visa Information scope must be enabled to receive the data.

|  Element Name |  Data Type |  Description |
| :----- | :----- | :----- |
| `PassportNumber` | `string` | The user's passport number. Format: nvarchar(100) |
| `PassportNationality` | `string` | The user's passport nationality. Format: char(2) |
| `PassportExpiration`  | `date` |  The date the user’s passport expires. Format: YYYY-MM-DD |
| `PassportDateIssued` | `date`  | The date the user’s passport was issued. Format: YYYY-MM-DD |
| `PassportCityIssued` | `string` |The city the user’s passport was issued in. Format: nvarchar(60) |
| `PassportCountryIssued` |  `string`  |The country the user’s passport was issued in. Format: char(2) |

***

#### <a name="Visas"></a>Visas elements

A list of visas in the user's profile.
* Passport Visa Information scope must be enabled to receive the data.

|  Element Name |  Data Type |  Description |
| :----- | :----- | :----- |
| `VisaNationality` | `string` | The user's visa nationality. Format: char(2) |
| `VisaNumber`  | `string` | The user's visa nationality. Format: nvarchar(100) |
| `VisaType`  |  `string` | The user's visa nationality. Format: varchar(10) |
| `VisaDateIssued` | `date` |  The date the user’s visa was issued. Format: YYYY-MM-DD |
| `VisaExpiration` | `date`  | The date the user’s visa expires. Format: YYYY-MM-DD |
| `VisaCityIssued` | `string` | The city the user’s visa was issued in. Format: nvarchar(60) |
| `VisaCountryIssued` |  `string` | The country the user’s visa was issued in. Format: char(2) |

***

####  <a name="EmailAddresses"></a>EmailAddresses elements

The EmailAddresses parent element contains an EmailAddress child element for each included email address. It contains the following child element:

|  Element Name |  Data Type |  Description |
| :----- | :----- | :----- |
|  `EmailAddress` |  `string` | The user's email address. Format: Varchar(255) |
| `Contact attribute` | `boolean` | The Contact attribute specifies whether the email address should be used for travel notifications. Format: **true**\|**false**. |
| `Type attribute` | `string` | The type of email address. Values are: Business or Personal. |

***

#### <a name="RatePreferences"></a>RatePreferences elements
The RatePreferences parent element contains the following child element:

|  Element Name |  Data Type |  Description |
| :----- | :----- | :----- |
|  `AAARate` |  `boolean` | Whether the user is eligible for the AAA rate. Format: **true**\|**false** |
|  `AARPRate` |  `boolean` | Whether the user is eligible for the AARP rate. Format: **true**\|**false** |
|  `GovtRate` |  `boolean` | Whether the user is eligible for the Government rate. Format: **true**\|**false** |
|  `MilitaryRate` |  `boolean` | Whether the user is eligible for the Military rate. Format: **true**\|**false** |

***

#### <a name="DiscountCodes"></a>DiscountCodes elements

The DiscountCodes parent element contains a DiscountCode child element for each included discount code.

|  Element Name |  Data Type |  Description |
| :----- | :----- | :----- |
|  `DiscountCode` |  `string` | The discount code for the specified vendor. |
| `Vendor attribute` | `string` | Specifies the name of the vendor for the discount code. |

***

#### <a name="Air"></a>Air elements

The Air parent element contains the user's air travel preferences and contains the following child elements:

|  Element Name |  Data Type |  Description |
| :----- | :----- | :----- |
|  `AirMemberships` |    | The AirMemberships element only appears if the request came from a travel supplier for this travel type, or from a TMC. This element contains [AirMembership child elements](#airmember). |
|  `Seat` |   | This element contains [air seat child elements](#airseat). |
|  `Meals` | `string`   | This parent element contains the MealCode child element that indicates the meal preference of the traveler. The possible values are: <br> Regular Meal (DEFAULT VALUE) <br> BBML = Baby Meal  <br> BLML = Bland Meal  <br> CHML = Child Meal  <br> DBML = Diabetic Meal  <br> FPML = Fruit Platter  <br> GFML = Gluten Intolerant Meal  <br> HNML = Hindu Meal  <br> KSML = Kosher Meal  <br> LCML = Low Calorie Meal  <br> LSML = Low Salt Meal  <br> MOML = Muslim Meal  <br> NLML = Low Lactose Meal  <br> NSML = No Salt Meal  <br> PFML = Peanut Free Meal  <br> SFML = Seafood Meal  <br>  VGML = Vegetarian  <br> RVML = Vegetarian Raw Vegan Meal  <br> KVML = Vegetarian Kosher <br> VLML = Vegetarian Lacto-Ovo  <br> **Note**: Regular Meal will not return a value for this preference. |
|  `HomeAirport` |  `string` |  The user's home airport |
|  `AirOther` |  `string` |  Other Air related description |

##### <a name="airmember"></a>Air Memberships elements

|  Element Name |  Data Type |  Description |
| :----- | :----- | :----- |
|  `VendorCode` |  `string` |  The code for the vendor that manages the loyalty program.| 
|  `AccountNo` |  `string` |  The user's account identifier in the loyalty program. |
|  `Status` |  `string` |  Name of the user's current level in the loyalty program. |
|  `StatusBenefits` |  `string` |  Description of a benefit of the loyalty program at the current status. |
|  `PointTotal` |  `string` |  The user's total number of points in the loyalty program. |
|  `SegmentTotal` |  `string` |  The user's total segments in the loyalty program. |
|  `NextStatus` |  `string` |  Name or description of next higher status level in the  loyalty program. |
|  `PointsUntilNextStatus` |  `string` |  Loyalty points required to next status level. |
|  `SegmentsUntilNextStatus` |  `string` |  Booking segment to next status level. |

##### <a name="airseat"></a>Seat elements

|  Element Name |  Data Type |  Description |
| :----- | :----- | :----- |
|  `InterRowPositionCode` |  `string` |  Preferred position in an airplane row. Format: **Window**, **Aisle**, **Middle**, **DontCare**. |
|  `SectionPositionCode` |  `string` |  Preference for position in plane. Format: **Bulkhead**, **Forward**, **Rear**, **ExitRow**, **DontCare**. |

***

####  <a name="Rail"></a>Rail elements

The Rail parent element contains the user's rail travel preferences and contains the following child elements:

|  Element Name |  Data Type |  Description |
| :----- | :----- | :----- |
| `Seat` | `string` | This element contains seat preferences. Format: **Aisle**, **Window**, **DontCare** |
| `Coach` | `string` | This element contains coach preferences. Format: **Compartment**, **Coach**, **CoachWithTable**, **DontCare** |
| `NoiseComfort` | `string` | This element cotains noise comfort preferences. Format: **QuietSpace**, **MobileSpace**, **DontCare** |
| `Bed` | `string` | This element contains bed preferences. Format: **Lower**, **Upper**, **Middle**, **DontCare** | 
|`BedCategory` | `string` | This element contains bed category preferences. Format: **WomenOnly**, **MenOnly**, **DontCare** |
| `Berth` | `string` | This element contains berth preferences. Format: **Lower**, **Upper**, **Middle**, **DontCare** |
| `Deck` | `string` | This element contains deck preferences. Format: **Lower**, **Upper**, **DontCare** |
| `SpaceType`| `string` | This element contains space type preferences. Format: **Panorama**, **SeatWithTable**,  **Solo**, **Salon**, **Kiosk**,  **InclineSeat**, **DuoSideBySide**,  **DuoFaceToFace**,  **Club6**,  **Club4**,  **Carre**,  **DisabledCompanionSpace**, **DontCare** |
| `FareSpaceComfort` | `string` | This element contains fare space comfort preferences. Format: **DedicatedBusiness**, **Business**, **IntermediateLeisure**, **Leisure**, **StandardLeisure**, **DontCare** |
| `SpecialMeals` | `string` | This element contains special meal preferences. Format: **LowFat**, **LowSalt**, **GlutenFree**,  **Diabetic**,  **Muslim**, **Kosher**, **Vegetarian**, **VegetarianLactoOvo**, **DontCare** |
| `Contingencies` | `string` | This element contains contingencies preferences. Format: **Bike**, **WomenOnly**, **WheelchairSpace**, **DontCare** |
| `RailMemberships` |  | This element contains [RailMembership child elements](#rmchild) |


##### <a name="rmchild"></a>Rail Membership elements

|  Element Name |  Data Type |  Description |
| :----- | :----- | :----- |
|  `VendorCode` |  `string` |  The code for the vendor that manages the loyalty program. |
|  `AccountNo` |  `string` |  The user's account identifier in the loyalty program. |
|  `Status` |  `string` |  Name of the user's current level in the loyalty program. |
|  `StatusBenefits` |  `string` |  Description of a benefit of the loyalty program at the current status.  |
|  `PointTotal` |  `string` |  The user's total number of points in the loyalty program. |
|  `SegmentTotal` |  `string` |  The user's total segments in the loyalty program. |
|  `NextStatus` |  `string` |  Name or description of next higher status level in the  loyalty program. |
|  `PointsUntilNextStatus` |  `string` |  Loyalty points required to next status level. |
|  `SegmentsUntilNextStatus` |  `string` |  Booking segment to next status level. |

***

####  <a name="Car"></a>Car elements

The Car parent element contains the user's car travel preferences. It contains the following child elements:

|  Element Name |  Data Type |  Description |
| :----- | :----- | :----- |
|  `CarSmokingCode` |  `string` |  Smoking car preferred. Format: **DontCare**, **NonSmoking**, **Smoking** |
|  `CarGPS` |  `boolean` |  Car GPS preference. Format: **true**\|**false**. |
|  `CarType` |  `string` |  Car type preference. Values are:  <br> DontCare <br> Mini <br> Economy <br> EconomyHybrid <br> Compact <br> CompactHybrid <br> Intermediate <br> IntermediateHybrid <br> Standard <br> StandardHybrid <br> FullSize <br> FullSizeHybrid <br> MiniVan <br> Luxury <br> Premium <br> StandardSUV <br> IntermediateSUV <br> FullSizeSUV <br> FullSizePickup <br> Specialized    |
|  `CarMemberships` |   | The CarMemberships element only appears if the request came from a travel supplier for this travel type, or from a TMC. This element contains  [CarMembership child elements](#cmchild) for each included membership. |
|  `CarOther` |  `string` |  Other Car related description. Format: varchar(30) |
|  `CarSkiRack` |  `boolean` |  Car ski rack preference. Format: **true**\|**false**. |
|  `CarTransmission` | `string` | Car transmission type. Values are: **DontCare**, **Automatic**, **Manual**

##### <a name="cmchild"></a>Car Memberships elements

|  Element Name |  Data Type |  Description |
| :----- | :----- | :----- |
|  `VendorCode` |  `string` |  The code for the vendor that manages the loyalty program. | 
|  `AccountNo` |  `string` |  The user's account identifier in the loyalty program. |
|  `Status` |  `string` |  Name of the user's current level in the loyalty program. |
|  `StatusBenefits` |  `string` |  Description of a benefit of the loyalty program at the current status.  |
|  `PointTotal` |  `string` |  The user's total number of points in the loyalty program. |
|  `SegmentTotal` |  `string` |  The user's total segments in the loyalty program. |
|  `NextStatus` |  `string` |  Name or description of next higher status level in the  loyalty program. |
|  `PointsUntilNextStatus` |  `string` |  Loyalty points required to next status level. |
|  `SegmentsUntilNextStatus` |  `string` |  Booking segment to next status level. |

***

####  <a name="Hotel"></a>Hotel elements

The Hotel parent element contains the user's hotel travel preferences. It contains the following child elements:

|  Element Name |  Data Type |  Description |
| :----- | :----- | :----- |
|  `SmokingCode` |  `string` |  Smoking room preference. Values: **DontCare**, **NonSmoking**,**Smoking** |
|  `HotelMemberships` |    | This parent element only appears if the request came from a travel supplier for this travel type, or from a TMC. This element contains [HotelMembership child elements](#hmchild) for each included membership. |
|  `RoomType` |  `string` |  Hotel room preference. Values are: **DontCare**, **King**, **Queen**, **Double**, **Twin**, **Single**, **Disability** |
|  `HotelOther` |  `string` |  Other Hotel related description. Format: varchar(30) |
|  `PreferFoamPillows` |  `boolean` |  Whether the user prefers foam pillows. Format: **true**\|**false**. |
|  `PreferCrib` |  `boolean` |  Whether the user prefers to have a crib. Format:**true**\|**false**. |
|  `PreferRollawayBed` |  `boolean` |  Whether the user prefers to have a rollaway bed. Format:**true**\|**false**. |
|  `PreferGym` |  `boolean` |  Whether the user prefers a hotel with a gym. Format:**true**\|**false**. |
|  `PreferPool` |  `boolean` |  Whether the user prefers a hotel with a pool. Format:**true**\|**false**. |
|  `PreferRestaraunt` |  `boolean` |  Whether the user prefers a hotel with a restaurant. Format:**true**\|**false**. |
|  `PreferWheelchairAccess` |  `boolean` |  Whether the user requires wheelchair access. Format: **true**\|**false**. |
|  `PreferAccessForBlind` |  `boolean` |  Whether the user requires a room with access for blind guests. Format:**true**\|**false**. |
|  `PreferRoomService` |  `boolean` |  Whether the user prefers a hotel with room service. Format:**true**\|**false**. |
|  `PreferEarlyCheckIn` |  `boolean` |  Whether the user prefers a hotel with early check in. Format:**true**\|**false**. |

##### <a name="hmchild"></a>Hotel Memberships elements

|  Element Name |  Data Type |  Description |
| :----- | :----- | :----- |
|  `VendorCode` |  `string` |  The code for the vendor that manages the loyalty program. |
|  `AccountNo` |  `string` |  The user's account identifier in the loyalty program. |
|  `Status` |  `string` |  Name of the user's current level in the loyalty program. |
|  `StatusBenefits` |  `string` |  Description of a benefit of the loyalty program at the current status. |
|  `PointTotal` |  `string` |  The user's total number of points in the loyalty program. |
|  `SegmentTotal` |  `string` |  The user's total segments in the loyalty program. |
|  `NextStatus` |  `string` |  Name or description of next higher status level in the  loyalty program. |
|  `PointsUntilNextStatus` |  `string` |  Loyalty points required to next status level. |
|  `SegmentsUntilNextStatus` |  `string` |  Booking segment to next status level. |

***

#### <a name="CustomFields"></a>CustomFields elements
The CustomFields parent element contains a CustomField child element for each field.
* Company Details scope must be enabled to receive the data.

|  Element Name |  Data Type |  Description |
| :----- | :----- | :----- |
|  `CustomField` |  `string` |  The value of the custom field. Format: varchar(255) |
|  `Name attribute` |  `string` |  The value of the custom field. Format: varchar(255) |

***

#### <a name="Roles"></a>Roles elements
A list of users associated to a user:

|  Element Name |  Data Type |  Description |
| :----- | :----- | :----- |
| `FirstName`  | `string` | The user's first name. Format: varchar(60) |
| `LastName` |   `string ` | The user's last name. Format: varchar(60) |
| `EmailAddress` |    `string` | The user's email address. Format: varchar(255) |
| `Type attribute` | `string` |  The user's role. Values are: Arranger, Manager |
| `PrimaryIndicatorFlag attribute` |  `boolean` | For arranger type, denotes the primary arranger. Format: **true**\|**false**. |

***

#### <a name="Sponsors"></a>Sponsors

A list of sponsors associated to a user:

|  Element Name |  Data Type |  Description |
| :----- | :----- | :----- |
| `NonEmployeeUserType` | `string` | The non-employee's user type. Values are: **Contractor**, **Student/Intern**, **Candidate for Hire**, **Invitational Traveler**, **Dependent/Spouse**, **Board Member**, **Other** |
| `SponsorName` | `string` | The sponsor’s name. Format: varchar(255) |
| `SponsorshipStartDate`  |  `date`  |  The sponsorship start date. Format: YYYY-MM-DD |
| `SponsorshipEndDate` | `date`  |  The sponsorship end date. Format: YYYY-MM-DD |

***

#### <a name="TSAInfo"></a>TSAInfo elements

The Transportation Security Administration (TSA) Details provided.
* TSA Information scope must be enabled to receive the data.

|  Element Name |  Data Type |  Description |
| :----- | :----- | :----- |
| `Gender` |  `string` | The user's gender. Values are: **Male**, **Female** |
| `DateOfBirth` | `date` |  The user’s date of birth. Format: YYYY-MM-DD |
| `NoMiddleName`  |  `boolean` | Format: true/false |
| `PreCheckNumber` | `string`| The user’s pre-check number. Format: varchar(255) |
| `RedressNumber` | `string` | The user’s redress number. Format: varchar(255) |

***

#### <a name="UnusedTickets"></a>UnusedTickets elements

A list of unused tickets associated to a user
* Unused Tickets scope must be enabled to receive the data.

|  Element Name |  Data Type |  Description |
| :----- | :----- | :----- |
| `Carrier` |  `string` | The vendor’s name. Format: Varchar(255) |
| `TicketNumber`  |  `string` | The unused ticket number. Format: Varchar(255) |
| `RecordLocator`  | `string` | The unused ticket record locator. Format: Varchar(255) |
| `BaseFare` |   `string` | The base fare of the unused ticket. Format: Varchar(255) |
| `Taxes`  | `string` | The taxes for the unused ticket. Format: Varchar(255) |
| `Fees`  |  `string` | The fees for the unused ticket. Format: Varchar(255) |
| `Currency`   | `string`|  The currency of the unused ticket. Format: Varchar(255) |
| `TicketType` | `string` | The type of unused ticket. Format: Varchar(255 |
| `IssueDate` |  `date`   | The date of issue for the unused ticket. Format: YYYY-MM-DD |
| `ExpirationDate` | `date` | The date of expiration for the unused ticket. Format: YYYY-MM-DD |
| `Notes`  | `string` | Notes associated to that unused ticket. Format: Varchar(255) |

***

#### <a name="SouthwestUnusedTickets"></a>SouthwestUnusedTickets elements

A list of unused Southwest tickets associated to a user.
* Unused Tickets scope must be enabled to receive the data.

|  Element Name |  Data Type |  Description |
| :----- | :----- | :----- |
| `RecordLocator` | `string` | The unused ticket record locator. Format: Varchar(255) |
| `TicketAmount` |`string` | The amount of the unused ticket. Format: Varchar(255) |
| `CurrencyCode` | `string` | The currency of the unused ticket. Format: Varchar(255) |
| `ExpirationDate` | `date` | The date of expiration for the unused ticket. Format: YYYY-MM-DD |

***

#### <a name="AdvantageMemberships"></a>AdvantageMemberships elements
A list of advantage memberships associated to a user:

|  Element Name |  Data Type |  Description |
| :----- | :----- | :----- |
| `VendorCode` | `string` | The code for the vendor that manages the membership program. Format: Varchar(255) |
| `VendorType` | `string` | The vendor type. Values are: **Air**, **Rail**, **Car**, **Hotel** |
| `ProgramNumber` | `string` | The membership program number. Format: Varchar(255) |
| `DiscountPercentage`| `date` | The amount of discount provided. Format: Varchar(255) |
| `ClassOfService` |  `string` | The class of service required. Format: Varchar(255) |
| `OriginCode` | `string` | The origin code. Format: Varchar(255) |
| `DestinationCode` | `string` | The destination code. Format: Varchar(255) |
| `ProgramCode` | `string` | The program code. Format: Varchar(255) |
| `ExpirationDate` | `date` | Expiration date. Format: YYYY-MM-DDThe program code. Format: Varchar(255) |
| `OptionCode` |  `string` |  The option code. Format: Varchar(255) |
| `ProgramName` | `string` | The program name. Format: Varchar(255) |
| `OriginStationCode` | `string` | The origin station code. Format: Varchar(255) |
| `DestinationStationCode` | `string` | The destination station code. Format: Varchar(255) |

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


## <a name="a2">Get a list of travel profile summaries</a>

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
[8]: http://en.wikipedia.org/wiki/ISO_3166-1_alpha-
