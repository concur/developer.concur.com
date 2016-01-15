---
title: Travel Profile 
layout: reference
---


##  Description


The Travel Profile resource represents a Concur travel profile which contains travel-relation information about a user, such as:

* Company Information (example: custom fields)
* User Information
* Contact Details
* Rate Preferences and Discount Codes
* Preferences by travel type
* Managers/Arrangers
* Passports/Visas
* TMC Specific Data
* Unused Tickets

##  Version

2.0  
1.0 can be found [here](/api-reference-deprecated/version-one/Travel/profile-resource.html)

##  URI

<code>https://{InstanceURL}/api/travelprofile/v2.0/profile</code>

##  Operations

* [Get a travel profile](#a1)

Detailed descriptions of requests and responses are available in the documentation for each HTTP method. The complete schema definition is available here: [Travel Profile XSD][3]. If you're using Internet Explorer, right click the link and choose Save Target As... to view the XSD.


## <a name="a1">Get a travel profile</a>

This endpoint provides travel profile information for the specified user. The travel profile includes information such as the user's identity, contact information, rate preferences and discount codes, preferences by travel type, and custom fields. 

###  Request parameters

All request paramenters are optional. To identify a specific user by login ID or XMLSyncID, you can specify the following request parameters:

|  Parameter Name |  Parameter Type |  Data Type |  Description |
| :----- | :----- | :----- |:-----|
|  userid_type |  Path |  `string` |  The type of user identification to use. Possible values are: **login** and **xmlsyncid** |
|  userid_value |  Path |  `string` |  The user's login ID or XMLSync ID, depending on which user type is selected. This parameter must be provided in conjunction with the **userid_type** parameter. |

### Headers

####  Content-Type header
application/xml

####  Authorization header
<samp>Authorization: OAuth {access_token}</samp>

Where access_token is the OAuth 2.0 access token of the user whose travel profile information you want to retrieve.

#### Data model
The schema for v2.0 is available [here](https://www.concursolutions.com/ns/TravelUserProfile.xsd).

####  ProfileResponse root element

The ProfileResponse root element contains the General, Telephones, Addresses, DriversLicenses, EmailAddresses, RatePreferences, DiscountCodes, Air, Car, Hotel, and CustomFields child elements. It has the attributes shown in the Data Model section.

####  General elements

The General parent element contains the following child elements. In order to receive the Cost Center, Company Employee ID, or Division data, you must enable the Company Details scope. In order to receive the Medical Alert data, you must enable the Medical Alerts scope. In order to receive the GDS Profile Name, you must enable the TMC Specific Information scope. Note: Profile fields, such as cost center and division, must be enabled and populated in the Travel site for data to return.  

|  Element Name |  Data Type |  Description |
| ----- | ----- | ----- |
|  `NamePrefix` |  `string` |  The user's name prefix. Format: Varchar(60) |
|  `FirstName` |  `string` |  The user's first name. Format: Varchar(32) |
|  `MiddleName` |  `string` |  The user's middle name. Format: Varchar(32) |
|  `LastName` |  `string` |  The user's last name. Format: Varchar(32) |
|  `NameSuffix` |  `string` |  The user's name suffix. Format: Varchar(60) |
|  `PreferredName` |  `string` |  The user's preferred name. Format: Varchar(60) |
|  `JobTitle` |  `string` |  The user's job title. Format: Nvarchar(255) |
|  `CostCenter` | `string` | The user’s cost center. Format: Varchar(255) |
|  `CompanyEmployeeID` | `string` | The user’s employee ID. Format: Varchar(255) |
|  `Division` | `string` | The user's division. Format: Varchar(255) |
|  `PreferredLanguage` |  `string` |  The user's preferred language locale. Example: United States English is en-US. Format: Varchar(20) |
|  `EReceiptOptIn` |  `string` |  Whether the user has opted in to receive e-receipts. Format: **True**\|**False** |
|  `HasOpenBooking` |  `boolean` |  Whether the user has the TripLink User (formerly Open Booking User) permission. Format: **true**\|**false** |
|  `CountryCode` |  `string` |  The country code in from the[ ISO 3166-1 alpha-2 country code][8] specification. Format: Char(2) |
|  `CompanyName` |  `string` |  The user's company name. |
|  `CompanyID` | `string` | The user's company ID. Format: Varchar(255) |
|  `RuleClass` |  `string` |  The user's rule class. Format: Varchar(255) |
|  `MedicalAlerts` | `string` |  The user's medical alerts. Format: Varchar(255) |
|  `GDSProfileName` |  `string` |  The user's GDS profile name. Format: Varchar(255) |

#### Emergency contact details

The emergency contact information provided. In order to receive this data, you must enable the Emergency Contact Information scope.  

|  Element Name |  Data Type |  Description |
| ----- | ----- | ----- |
| `Name`  |  `string`  | The emergency contact name> Format: Varchar(255) |
| `Relationship` |  `string`  | The relationship to the user. Values are: Spouse, Brother, Parent, Sister, LifePartner, Other |
| `Phone`  | `string` | The emergency contact’s phone number. This contains a “type” attribute with values of DayTime and Alternate. Format: Varchar(255) |
| `Street` |  `string` | Street Address. Format: Nvarchar(Unlimited) |
| `City` |   `string` | The city name. Format: Nvarchar(Unlimited) |
| `StateProvince` |   `string` | The state or province. Format: Nvarchar(Unlimited) |
| `CountryCode` | `string` | The country code in from the ISO 3166-1 alpha-2 country code specification.. Format: Char(2) |
| `PostalCode` | `string` | The postal code. Format: Varchar(20) |



####  Telephones elements

The Telephones parent element contains a Telephone child element for each included telephone. The Telephone element has the attributes shown in the Response Class section and contains the following child elements:

|  Element Name |  Data Type |  Description |
| :----- | :----- | :----- |
|  `ContactOptIn` |  `string` |  Whether the user has opted in to being contacted on this phone. Only appears when the phone type is Cell or Primary Mobile Phone. Format: **True**\|**False** |
|  `CountryCode` |  `string` |  The country code in from the[ ISO 3166-1 alpha-2 country code][8] specification. Format: Char(2) |
|  `PhoneNumber` |  `string` | The phone number as entered by the user, which may contain characters such as () or -. Format: Char(60) <br> **NOTE**: The user phone number may sometimes be incorrectly parsed if there are data input issues.|
|  `Extension` |  `string` |  The phone extension. Format: Varchar(60) |
|  `MobileDevice` | `string` |  The OS of the mobile device. Format: Varchar(255) |
|  `MobileName` | `string` | The name the user assigned to the mobile device. Format: Varchar(255) |



####  Addresses elements

The Addresses parent element contains an Address child element for each included address. The Address element has the attributes shown in the Response Class section and contains the following child elements:

**NOTE**: The values returned for the Address child elements are as entered by the user. The fields do not enforce formatting and may have a wide variety of values.

|  Element Name |  Data Type |  Description |
| :----- | :----- | :----- |
|  `Street` |  `string` |  Street Address. Format: Nvarchar(Unlimited)) |
|  `City` |  `string` |  The city name. Format: Nvarchar(Unlimited) |
|  `StateProvince` |  `string` |  The state or province. Format: Nvarchar(Unlimited) |
|  `CountryCode` |  `string` |  The country code in from the[ ISO 3166-1 alpha-2 country code][1] specification. Format: Char(2)|
|  `PostalCode` |  `string` |  The postal code. Format: Varchar(20) |
|  `Longitude` |  `string` |  Longitude value of Work Address. |
|  `Latitude` |  `string` |  Latitude value of Work Address. |

####  DriversLicenses elements

The DriversLicenses parent element contains a DriversLicense child element for each each included licenses. The DriversLicense element contains the following child elements:

|  Element Name |  Data Type |  Description |
| :----- | :----- | :----- |
|  `DriversLicenseNumber` |  `string` |  The user's driver license identification number. Format: Varchar(30) |
|  `IssuingCountry` |  `string` |  The country the license was issued in. Format: Char(2) |
|  `IssuingState` |  `string` |  The state the license was issued in. Format: Varchar(2) |
|  `Expiration` |  `string` |  The expiration date of the license. Format: YYYY-MM-DD |


####  Has No Passport

In order to receive this data, you must enable the Passport Visa Information scope.  

|  Element Name |  Data Type |  Description |
| :----- | :----- | :----- |
|  `HasNoPassport` |  `boolean` | Format: true|false. |


#### Passports  

A list of passports in the user's profile. In order to receive this data, you must enable the Passport Visa Information scope.  

|  Element Name |  Data Type |  Description |
| :----- | :----- | :----- |
| `PassportNumber` | `string` | The user's passport number. Format: Varchar(255 |
| `PassportNationality` | `string` | The user's passport nationality. Format: Varchar(255) |
| `PassportExpiration`  | `date/time` |  The date the user’s profile expires. Format: YYYY-MM-DD |
| `PassportDateIssued` | `date/time`  | The date the user’s profile was issued. Format: YYYY-MM-DD |
| `PassportCityIssued` | `string` |The city the user’s passport was issued in. Format: Varchar(255) |
| `PassportCountryIssued` |  `string`  |The country the user’s passport was issued in. Format: Varchar(255 |


#### Visas  

A list of visas in the user's profile. In order to receive this data, you must enable the Passport Visa Information scope.  

|  Element Name |  Data Type |  Description |
| :----- | :----- | :----- |
| `VisaNationality` | `string` | The user's visa nationality. Format: Varchar(255) |
| `VisaNumber`  | `string` | The user's visa nationality. Format: Varchar(255) |
| `VisaType`  |  `string` | The user's visa nationality. Format: Varchar(255) |
| `VisaDateIssued` | `date/time` |  The date the user’s visa was issued. Format: YYYY-MM-DD |
| `VisaExpiration` | `date/time`  | The date the user’s visa expires. Format: YYYY-MM-DD |
| `VisaCityIssued` | `string` | The city the user’s visa was issued in. Format: Varchar(255) |
| `VisaCountryIssued` |  `string` | The country the user’s visa was issued in. Format: Varchar(255) |



####  EmailAddresses elements

The EmailAddresses parent element contains a EmailAddress child element for each included email address. It contains the following child element:

|  Element Name |  Data Type |  Description |
| :----- | :----- | :----- |
|  `EmailAddress` |  `string` | The user's email address. The EmailAddress element has two attributes: Type and Contact. The Type attribute specifies the type of email address and the possible values are: Business or Personal. Format: Varchar(255) |
| `Contact attribute` | `boolean` | The Contact attribute specifies whether the email address should be used for travel notifications. Format: true|false. |


####  RatePreferences elements
The RatePreferences parent element contains the following child element:

|  Element Name |  Data Type |  Description |
| :----- | :----- | :----- |
|  `AAARate` |  `boolean` |  Whether the user is eligible for the AAA rate. Format: **true**\|**false** |
|  `AARPRate` |  `boolean` |  Whether the user is eligible for the AARP rate. Format: **true**\|**false** |
|  `GovtRate` |  `boolean` |  Whether the user is eligible for the Government rate. Format: **true**\|**false** |
|  `MilitaryRate` |  `boolean` |  Whether the user is eligible for the Military rate. Format: **true**\|**false** |

####  DiscountCodes elements

The DiscountCodes parent element contains a DiscountCode child element for each included discount code.

|  Element Name |  Data Type |  Description |
| :----- | :----- | :----- |
|  `DiscountCode` |  `string` | The discount code for the specified vendor.The DiscountCode element has a Vendor attribute that specifies the name of the vendor for the discount code.|

####  Air elements

The Air parent element contains the user's air travel preferences and contains the following child elements:

|  Element Name |  Data Type |  Description |
| :----- | :----- | :----- |
|  `AirMemberships` | `string`   | The AirMemberships element only appears if the request came from a travel supplier for this travel type, or from a TMC. This element contains [AirMembership child elements](#airmember). |
|  `Seat` |  `string` | This element contains [air seat child elements](#airseat). |
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

####  Rail elements

The Rail parent element contains the user's rail travel preferences and contains the following child elements:

|  Element Name |  Data Type |  Description |
| :----- | :----- | :----- |
| `Seat` | `string` | This element contains seat preferences. Format: **Aisle**, **Window**, **DontCare** |
| `Coach` | `string` | This element contains coach preferences. Format: **Compartment**, **Coach**, **CoachWithTable**, **DontCare** |
| `NoiseComfort` | `string` | This element cotains noise comfort preferences. Format: **QuietSpace**, **MobileSpace**, **DontCare** |
| `Bed` | `string` | This element contains bed preferences. Format: **Lower**, **MobileSpace**, **DontCare** | 
|`BedCategory` | `string` | This element contains bed category preferences. Format: **WomenOnly**, **MenOnly**, **DontCare** |
| `Berth` | `string` | This element contains berth preferences. Format: **Lower**, **Upper**, **Middle**, **DontCare** |
| `Deck` | `string` | This element contains deck preferences. Format: **Lower**, **Upper**, **DontCare** |
| `SpaceType`| `string` | This element contains space type preferences. Format: **Panorama**, **SeatWithTable**,  **Solo**, **Salon**, **Kiosk**,  **InclineSeat**, **DuoSideBySide**,  **DuoFaceToFace**,  **Club6**,  **Club4**,  **Carre**,  **DisabledCompanionSpace**, **DontCare** |
| `FareSpaceComfort` | `string` | This element contains fare space comfort preferences. Format: **DedicatedBusiness**, **Business**, **IntermediateLeisure**, **Leisure**, **StandardLeisure**, **DontCare** |
| `SpecialMeals` | `string` | This element contains special meal preferences. Format: **LowFat**, **LowSalt**, **GlutenFree**,  **Diabetic**,  **Muslim**, **Kosher**, **Vegetarian**, **VegetarianLactoOvo**, **DontCare** |
| `Contingencies` | `string` | This element contains contingencies preferences. Format: **Bike**, **WomenOnly**, **WheelchairSpace**, **DontCare** |
| `RailMemberships` | `string` | This element contains [RailMembership child elements](#rmchild) |


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



####  Car elements

The Car parent element contains the user's car travel preferences. It contains the following child elements:

|  Element Name |  Data Type |  Description |
| :----- | :----- | :----- |
|  `CarSmokingCode` |  `string` |  Smoking car preferred. Format: **S**, **N**, **O** |
|  `CarGPS` |  `boolean` |  Car GPS preference. Format: **True**\|**False**. |
|  `CarType` |  `string` |  Car type preference. Values are:  <br> Any Car Class <br> Mini Car <br> Economy <br> Economy Car Hybrid <br> Compact <br> Compact Car Hybrid <br> Intermediate <br> Intermediate Car Hybrid <br> Standard <br> Standard Car Hybrid <br> Full-size <br> Full-size Car Hybrid <br> Mini Van <br> Luxury <br> Premium <br> Intermediate SUV <br> Standard SUV <br> Full-Size SUV <br> Full-Size Pickup <br> Specialized Vehicle    |
|  `CarMemberships` | `string`  | The CarMemberships element only appears if the request came from a travel supplier for this travel type, or from a TMC. This element contains  [CarMembership child elements](#cmchild) for each included membership. |
|  `CarOther` |  `string` |  Other Car related description. Format: Char(30) |
|  `CarSkiRack` |  `string` |  Car ski rack preference. Format: **True**\|**False**. |
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

####  Hotel elements

The Hotel parent element contains the user's hotel travel preferences. It contains the following child elements:

|  Element Name |  Data Type |  Description |
| :----- | :----- | :----- |
|  `SmokingCode` |  `string` |  Smoking room preference. Values: **DontCare**, **NonSmoking**,**Smoking** |
|  `HotelMemberships` |  `string`  | This parent element only appears if the request came from a travel supplier for this travel type, or from a TMC. This element contains [HotelMembership child elements](#hmchild) for each included membership. |
|  `RoomType` |  `string` |  Hotel room preference. Values are: **DontCare**, **King**, **Queen**, **Double**, **Twin**, **Single**, *Disability** |
|  `HotelOther` |  `string` |  Other Hotel related description. Format: Varchar(30) |
|  `PreferFoamPillows` |  `boolean` |  Whether the user prefers foam pillows. Format: **True**\|**False**. |
|  `PreferCrib` |  `boolean` |  Whether the user prefers to have a crib. Format:**True**\|**False**. |
|  `PreferRollawayBed` |  `boolean` |  Whether the user prefers to have a rollaway bed. Format:**True**\|**False**. |
|  `PreferGym` |  `boolean` |  Whether the user prefers a hotel with a gym. Format:**True**\|**False**. |
|  `PreferPool` |  `boolean` |  Whether the user prefers a hotel with a pool. Format:**True**\|**False**. |
|  `PreferRestaraunt` |  `boolean` |  Whether the user prefers a hotel with a restaurant. Format:**True**\|**False**. |
|  `PreferWheelchairAccess` |  `boolean` |  Whether the user requires wheelchair access. Format: **True**\|**False**. |
|  `PreferAccessForBlind` |  `boolean` |  Whether the user requires a room with access for blind guests. Format:**True**\|**False**. |
|  `PreferRoomService` |  `boolean` |  Whether the user prefers a hotel with room service. Format:**True**\|**False**. |
|  `PreferEarlyCheckIn` |  `boolean` |  Whether the user prefers a hotel with early check in. Format:**True**\|**False**. |

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


#### CustomFields elements  
The CustomFields parent element contains a CustomField child element for each field. In order to receive this data, you must enable the Company Details scope. It contains the following child element:  

|  Element Name |  Data Type |  Description |
| :----- | :----- | :----- |
|  `CustomField` |  `string` |  The value of the custom field. Format: Varchar(255) |
|  `Name attribute` |  `string` |  The value of the custom field. Format: Varchar(255) |



#### Roles  
A list of users associated to a user:  

|  Element Name |  Data Type |  Description |
| :----- | :----- | :----- |
| `FirstName`  | `string` | The user's first name. Format: Varchar(60) |
| `LastName` |   `string ` | The user's last name. Format: Varchar(60) |
| `EmailAddress` |    `string` | The user's email address. Format: Varchar(255) |
| `Type attribute` | `string` |  The user's role. Values are: Arranger, Manager |
| `PrimaryIndicatorFlag` |  `boolean` | For arranger type, denotes the primary arranger. Format: true|false. |


#### Sponsors 

A list of sponsors associated to a user:  

|  Element Name |  Data Type |  Description |
| :----- | :----- | :----- |
| `NonEmployeeUserType` | `string` | The non-employee's user type. Values are: **Contractor**, **Student/Intern**, **Candidate for Hire**, **Invitational Traveler**, **Dependent/Spouse**, **Board Member**, **Other** |
| `SponsorName` | `string` | The sponsor’s name. Format: Varchar(255) |
| `SponsorshipStartDate`  |  `date`  |  The sponsorship start date. Format: YYYY-MM-DD |
| `SponsorshipEndDate` | `date`  |  The sponsorship end date. Format: YYYY-MM-DD |


#### Transportation Security Administration (TSA) Details  

The TSA information provided. In order to receive this data, you must enable the TSA Information scope.  

|  Element Name |  Data Type |  Description |
| :----- | :----- | :----- |
| `Gender` |  `string` | The user's gender. Values are: **Male**, **Female** |
| `DateOfBirth` | `date` |  The user’s date of birth. Format: YYYY-MM-DD |
| `NoMiddleName`  |  `boolean` | Format: true/false |
| `PreCheckNumber` | `string`| The user’s pre-check number. Format: Varchar(255) |
| `RedressNumber` | `string` | The user’s redress number. Format: Varchar(255) |



#### Unused Tickets  

A list of unused tickets associated to a user. In order to receive this data, you must enable the Unused Tickets scope.  

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

#### Southwest Unused Tickets  
A list of unused Southwest tickets associated to a user. In order to receive this data, you must enable the Unused Tickets scope.  

|  Element Name |  Data Type |  Description |
| :----- | :----- | :----- |
| `RecordLocator` | `string` | The unused ticket record locator. Format: Varchar(255) |
| `TicketAmount` |`string` | The amount of the unused ticket. Format: Varchar(255) |
| `CurrencyCode` | `string` | The currency of the unused ticket. Format: Varchar(255) |
| `ExpirationDate` | `date` | The date of expiration for the unused ticket. Format: YYYY-MM-DD |


#### Advantage Memberships  
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
GET {InstanceURI}/api/travelprofile/v2.0/profile?LastModifiedDate=2015-01-01T01:00:00 HTTP/1.1
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

The data model of the response for the GET operation.

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

The Paging parent element contains contains the paging information for the response and it contains the following child elements:

|  Element Name |  Data Type |  Description |
| :----- | :----- | :----- | :----- |
|  LoginID |  `string` |  The Concur user login ID. |
|  XMLProfileSyncID |  `string` |  TThe user's XML Profile Sync ID, if available. |
|  ProfileLastModifiedUTC |  `string` |  The date, in UTC, when the travel profile was last modified. Format: YYYY-MM-DDThh:mm:ss. |

###  Example
This example gets the list of travel profile summaries modified after January 1 2015.

####  Request

<samp>
    GET {InstanceURI}/api/travelprofile/v2.0/profile?LastModifiedDate=2015-01-01T01:00:00 HTTP/1.1
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
            <span class="xml-tag">&lt;LoginID</span><span class="xml-tag">&gt;</span>mariab@company1.com<span class="xml-tag">&lt;/LoginID</span><span class="xml-tag">&gt;</span>
            <span class="xml-tag">&lt;XmlProfileSyncID</span><span class="xml-tag">&gt;</span>`string`123<span class="xml-tag">&lt;/XmlProfileSyncID</span><span class="xml-tag">&gt;</span>
            <span class="xml-tag">&lt;ProfileLastModifiedUTC</span><span class="xml-tag">&gt;</span>2015-01-01T01:00:00<span class="xml-tag">&lt;/ProfileLastModifiedUTC</span><span class="xml-tag">&gt;</span>
        <span class="xml-tag">&lt;/ProfileSummary</span><span class="xml-tag">&gt;</span>
        <span class="xml-tag">&lt;ProfileSummary</span><span class="xml-tag">&gt;</span>
            <span class="xml-tag">&lt;LoginID</span><span class="xml-tag">&gt;</span>peterk@company1.com<span class="xml-tag">&lt;/LoginID</span><span class="xml-tag">&gt;</span>
            <span class="xml-tag">&lt;XmlProfileSyncID</span><span class="xml-tag">&gt;</span>`string`456<span class="xml-tag">&lt;/XmlProfileSyncID</span><span class="xml-tag">&gt;</span>
            <span class="xml-tag">&lt;ProfileLastModifiedUTC</span><span class="xml-tag">&gt;</span>2015-01-01T01:00:00<span class="xml-tag">&lt;/ProfileLastModifiedUTC</span><span class="xml-tag">&gt;</span>
        <span class="xml-tag">&lt;/ProfileSummary</span><span class="xml-tag">&gt;</span>
    <span class="xml-tag">&lt;/Data</span><span class="xml-tag">&gt;</span>
<span class="xml-tag">&lt;/ConnectResponse</span><span class="xml-tag">&gt;</span>

</pre>
 



[3]: https://www.concursolutions.com/ns/TravelUserProfile.xsd
[8]: http://en.wikipedia.org/wiki/ISO_3166-1_alpha-
