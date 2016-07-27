---
title: Profile Resource 
layout: reference
---

<span style="background-color:red; font-size:24pt"> **This version (1.0) has been deprecated effective 04/01/2016**</span>  
Access a new version: [Travel Profile Version 2.0](/api-reference/travel-profile/01-profile-resource.html)

##  Description

The Travel Profile resource represents a Concur travel profile which contains travel-relation information about a user, such as:

* Identity
* Contact information
* Rate preferences and discount codes
* Preferences by travel type

##  Version

1.0

##  URI

<samp>https://{InstanceURL}/api/travelprofile/v1.0/profile</samp>

##  Operations

* [Get a travel profile](#a1)
* [Get a list of travel profile summaries](#a2)

## <a name="a1">Get a travel profile</a>

Gets the travel profile information for the specified user. The travel profile includes information such as the user's identity, contact information, rate preferences and discount codes, preferences by travel type, and custom fields. The travel profile information returned by this GET operation depends on whether the caller is a Travel Supplier, a TMC, or a mainstream developer:

* Travel Suppliers can get only the loyalty program information and discount codes for their own loyalty and discount programs.
* TMCs can get all loyalty programs and discount codes for the specified user.
* A mainstream developer cannot get any loyalty program or discount information.

###  Request parameters

All request paramenters are optional. To identify a specific user by login ID or XMLSyncID, you can specify the following request parameters:

|  Parameter Name |  Parameter Type |  Data Type |  Description |
| :----- | :----- | :----- |:-----|
|  userid_type |  Path |  String |  The type of user identification to use. Possible values are: **login** and **xmlsyncid** |
|  userid_value |  Path |  String |  The user's login ID or XMLSync ID, depending on which user type is selected. This parameter must be provided in conjunction with the **userid_type** parameter. |

### Headers

####  Content-Type header
application/xml

####  Authorization header
<samp>Authorization: OAuth {access_token}</samp>

Where *access_token* is the OAuth 2.0 access token of the user whose travel profile information you want to retrieve. If you want to access company-wide travel profile information, the user account associated with the OAuth 2.0 access token must have a Concur account with one of these roles: Web Services Administrator for Professional or Can Administer for Standard.

###  Data model

The data model of the response for the GET operation.
<html>
<head>
<style type="text/css">
<!--
pre {color: #000000; background-color: #ffffff; font-family: Menlo,Monaco,Consolas,"Courier New";}
.xml-attribute {color: #009900}
.xml-value {color: #ce7b00}
.xml-tag {color: #0000e6}
-->
</style>
</head>
<pre>
<span class="xml-tag">&lt;ProfileResponse</span> <span class="xml-attribute">Status</span>=<span class="xml-value">&quot;Active|Inactive&quot;</span> <span class="xml-attribute">Unique</span>=<span class="xml-value">&quot;{unique identifier for the user}&quot;</span><span class="xml-tag">&gt;</span>
    <span class="xml-tag">&lt;General</span><span class="xml-tag">&gt;</span>
        <span class="xml-tag">&lt;NamePrefix</span> <span class="xml-tag">/&gt;</span>
        <span class="xml-tag">&lt;FirstName</span> <span class="xml-tag">/&gt;</span>
        <span class="xml-tag">&lt;MiddleName</span> <span class="xml-tag">/&gt;</span>
        <span class="xml-tag">&lt;LastName</span> <span class="xml-tag">/&gt;</span>
        <span class="xml-tag">&lt;NameSuffix</span> <span class="xml-tag">/&gt;</span>
        <span class="xml-tag">&lt;PreferredName</span> <span class="xml-tag">/&gt;</span>
        <span class="xml-tag">&lt;JobTitle</span> <span class="xml-tag">/&gt;</span>
        <span class="xml-tag">&lt;PreferredLanguage</span> <span class="xml-tag">/&gt;</span>
        <span class="xml-tag">&lt;EReceiptOptIn</span> <span class="xml-tag">/&gt;</span>
        <span class="xml-tag">&lt;MarketingOptIn</span> <span class="xml-tag">/&gt;</span>
        <span class="xml-tag">&lt;HasOpenBooking</span> <span class="xml-tag">/&gt;</span>
        <span class="xml-tag">&lt;CountryCode</span> <span class="xml-tag">/&gt;</span>
        <span class="xml-tag">&lt;CompanyName</span> <span class="xml-tag">/&gt;</span>
    <span class="xml-tag">&lt;/General</span><span class="xml-tag">&gt;</span>
    <span class="xml-tag">&lt;Telephones</span><span class="xml-tag">&gt;</span>
        <span class="xml-tag">&lt;Telephone</span> <span class="xml-attribute">Type</span>=<span class="xml-value">&quot;Cell|Other|Pager|Fax|Home|Work|Primary Mobile Phone&quot;</span><span class="xml-tag">&gt;</span>
            <span class="xml-tag">&lt;ContactOptIn</span> <span class="xml-tag">/&gt;</span>
            <span class="xml-tag">&lt;CountryCode</span> <span class="xml-tag">/&gt;</span>
            <span class="xml-tag">&lt;PhoneNumber</span> <span class="xml-tag">/&gt;</span>
            <span class="xml-tag">&lt;Extension</span> <span class="xml-tag">/&gt;</span>
        <span class="xml-tag">&lt;/Telephone</span><span class="xml-tag">&gt;</span>
    <span class="xml-tag">&lt;/Telephones</span><span class="xml-tag">&gt;</span>
    <span class="xml-tag">&lt;Addresses</span><span class="xml-tag">&gt;</span>
        <span class="xml-tag">&lt;Address</span> <span class="xml-attribute">Type</span>=<span class="xml-value">&quot;Home|Work|Billing|Other&quot;</span><span class="xml-tag">&gt;</span>
            <span class="xml-tag">&lt;AttentionLine</span> <span class="xml-tag">/&gt;</span>
            <span class="xml-tag">&lt;Line1</span> <span class="xml-tag">/&gt;</span>
            <span class="xml-tag">&lt;Line2</span> <span class="xml-tag">/&gt;</span>
            <span class="xml-tag">&lt;Line3</span> <span class="xml-tag">/&gt;</span>
            <span class="xml-tag">&lt;MailStop</span><span class="xml-tag">&gt;</span>
            <span class="xml-tag">&lt;/Mailstop</span><span class="xml-tag">&gt;</span>
            <span class="xml-tag">&lt;City</span> <span class="xml-tag">/&gt;</span>
            <span class="xml-tag">&lt;StateProvince</span> <span class="xml-tag">/&gt;</span>
            <span class="xml-tag">&lt;CountryCode</span> <span class="xml-tag">/&gt;</span>
            <span class="xml-tag">&lt;ZipCode</span> <span class="xml-tag">/&gt;</span>
            <span class="xml-tag">&lt;Laditude</span> <span class="xml-tag">/&gt;</span>
            <span class="xml-tag">&lt;Longitude</span> <span class="xml-tag">/&gt;</span>
        <span class="xml-tag">&lt;/Address</span><span class="xml-tag">&gt;</span>
    <span class="xml-tag">&lt;/Addresses</span><span class="xml-tag">&gt;</span>
    <span class="xml-tag">&lt;DriversLicenses</span><span class="xml-tag">&gt;</span>
        <span class="xml-tag">&lt;DriversLicense</span><span class="xml-tag">&gt;</span>
            <span class="xml-tag">&lt;DriversLicenseNumber</span> <span class="xml-tag">/&gt;</span>
            <span class="xml-tag">&lt;IssuingCountry</span> <span class="xml-tag">/&gt;</span>
            <span class="xml-tag">&lt;IssuingState</span> <span class="xml-tag">/&gt;</span>
            <span class="xml-tag">&lt;Expiration</span> <span class="xml-tag">/&gt;</span>
        <span class="xml-tag">&lt;/DriversLicense</span><span class="xml-tag">&gt;</span>
    <span class="xml-tag">&lt;/DriversLicenses</span><span class="xml-tag">&gt;</span>
    <span class="xml-tag">&lt;EmailAddresses</span><span class="xml-tag">&gt;</span>
        <span class="xml-tag">&lt;EmailAddress</span> <span class="xml-tag">/&gt;</span>
    <span class="xml-tag">&lt;/EmailAddresses</span><span class="xml-tag">&gt;</span>
    <span class="xml-tag">&lt;RatePreferences</span><span class="xml-tag">&gt;</span>
        <span class="xml-tag">&lt;AAARate</span> <span class="xml-tag">/&gt;</span>
        <span class="xml-tag">&lt;AARPRate</span> <span class="xml-tag">/&gt;</span>
        <span class="xml-tag">&lt;GovtRate</span> <span class="xml-tag">/&gt;</span>
        <span class="xml-tag">&lt;MilitaryRate</span> <span class="xml-tag">/&gt;</span>
    <span class="xml-tag">&lt;/RatePreferences</span><span class="xml-tag">&gt;</span>
    <span class="xml-tag">&lt;DiscountCodes</span><span class="xml-tag">&gt;</span>
        <span class="xml-tag">&lt;DiscountCode</span> <span class="xml-tag">/&gt;</span>
    <span class="xml-tag">&lt;/DiscountCodes</span><span class="xml-tag">&gt;</span>
    <span class="xml-tag">&lt;Air</span><span class="xml-tag">&gt;</span>
        <span class="xml-tag">&lt;AirSmokingCode</span> <span class="xml-tag">/&gt;</span>
        <span class="xml-tag">&lt;AirMemberships</span><span class="xml-tag">&gt;</span>
            <span class="xml-tag">&lt;AirMembership</span><span class="xml-tag">&gt;</span>
                <span class="xml-tag">&lt;VendorCode</span> <span class="xml-tag">/&gt;</span>
                <span class="xml-tag">&lt;AccountNo</span> <span class="xml-tag">/&gt;</span>
                <span class="xml-tag">&lt;Status</span> <span class="xml-tag">/&gt;</span>
                <span class="xml-tag">&lt;StatusBenefits</span> <span class="xml-tag">/&gt;</span>
                <span class="xml-tag">&lt;PointTotal</span> <span class="xml-tag">/&gt;</span>
                <span class="xml-tag">&lt;SegmentTotal</span> <span class="xml-tag">/&gt;</span>
                <span class="xml-tag">&lt;NextStatus</span> <span class="xml-tag">/&gt;</span>
                <span class="xml-tag">&lt;PointsUntilNextStatus</span> <span class="xml-tag">/&gt;</span>
                <span class="xml-tag">&lt;SegmentsUntilNextStatus</span> <span class="xml-tag">/&gt;</span>
            <span class="xml-tag">&lt;/AirMembership</span><span class="xml-tag">&gt;</span>
        <span class="xml-tag">&lt;/AirMemberships</span><span class="xml-tag">&gt;</span>
        <span class="xml-tag">&lt;Seat</span><span class="xml-tag">&gt;</span>
            <span class="xml-tag">&lt;InterRowPositionCode</span> <span class="xml-tag">/&gt;</span>
            <span class="xml-tag">&lt;SectionPositionCode</span> <span class="xml-tag">/&gt;</span>
        <span class="xml-tag">&lt;/Seat</span><span class="xml-tag">&gt;</span>
        <span class="xml-tag">&lt;Meals</span><span class="xml-tag">&gt;</span>
            <span class="xml-tag">&lt;MealCode</span> <span class="xml-tag">/&gt;</span>
        <span class="xml-tag">&lt;/Meals</span><span class="xml-tag">&gt;</span>
        <span class="xml-tag">&lt;HomeAirport</span> <span class="xml-tag">/&gt;</span>
        <span class="xml-tag">&lt;AirOther</span> <span class="xml-tag">/&gt;</span>
        <span class="xml-tag">&lt;DHSRedressNumber</span> <span class="xml-tag">/&gt;</span>
        <span class="xml-tag">&lt;DHSKnownTravelerNumber</span> <span class="xml-tag">/&gt;</span>
    <span class="xml-tag">&lt;/Air</span><span class="xml-tag">&gt;</span>
    <span class="xml-tag">&lt;Car</span><span class="xml-tag">&gt;</span>
        <span class="xml-tag">&lt;CarSmokingCode</span> <span class="xml-tag">/&gt;</span>
        <span class="xml-tag">&lt;CarGPS</span> <span class="xml-tag">/&gt;</span>
        <span class="xml-tag">&lt;CarOption</span> <span class="xml-tag">/&gt;</span>
        <span class="xml-tag">&lt;CarMemberships</span><span class="xml-tag">&gt;</span>
            <span class="xml-tag">&lt;CarMembership</span><span class="xml-tag">&gt;</span>
                <span class="xml-tag">&lt;VendorCode</span> <span class="xml-tag">/&gt;</span>
                <span class="xml-tag">&lt;AccountNo</span> <span class="xml-tag">/&gt;</span>
                <span class="xml-tag">&lt;Status</span> <span class="xml-tag">/&gt;</span>
                <span class="xml-tag">&lt;StatusBenefits</span> <span class="xml-tag">/&gt;</span>
                <span class="xml-tag">&lt;PointTotal</span> <span class="xml-tag">/&gt;</span>
                <span class="xml-tag">&lt;SegmentTotal</span> <span class="xml-tag">/&gt;</span>
                <span class="xml-tag">&lt;NextStatus</span> <span class="xml-tag">/&gt;</span>
                <span class="xml-tag">&lt;PointsUntilNextStatus</span> <span class="xml-tag">/&gt;</span>
                <span class="xml-tag">&lt;SegmentsUntilNextStatus</span> <span class="xml-tag">/&gt;</span>
            <span class="xml-tag">&lt;/CarMembership</span><span class="xml-tag">&gt;</span>
            <span class="xml-tag">&lt;CarOther</span> <span class="xml-tag">/&gt;</span>
            <span class="xml-tag">&lt;CarSkiRack</span> <span class="xml-tag">/&gt;</span>
    <span class="xml-tag">&lt;/Car</span><span class="xml-tag">&gt;</span>
    <span class="xml-tag">&lt;Hotel</span><span class="xml-tag">&gt;</span>
        <span class="xml-tag">&lt;SmokingCode</span> <span class="xml-tag">/&gt;</span>
        <span class="xml-tag">&lt;HotelMemberships</span> <span class="xml-tag">/&gt;</span>
        <span class="xml-tag">&lt;RoomType</span> <span class="xml-tag">/&gt;</span>
        <span class="xml-tag">&lt;HotelOther</span> <span class="xml-tag">/&gt;</span>
        <span class="xml-tag">&lt;preferFoamPillows</span> <span class="xml-tag">/&gt;</span>
        <span class="xml-tag">&lt;preferCrib</span> <span class="xml-tag">/&gt;</span>
        <span class="xml-tag">&lt;preferRollawayBed</span> <span class="xml-tag">/&gt;</span>
        <span class="xml-tag">&lt;preferGym</span> <span class="xml-tag">/&gt;</span>
        <span class="xml-tag">&lt;preferPool</span> <span class="xml-tag">/&gt;</span>
        <span class="xml-tag">&lt;preferRestaurant</span> <span class="xml-tag">/&gt;</span>
        <span class="xml-tag">&lt;preferWheelchairAccess</span> <span class="xml-tag">/&gt;</span>
        <span class="xml-tag">&lt;preferAccessForBlind</span> <span class="xml-tag">/&gt;</span>
        <span class="xml-tag">&lt;preferRoomService</span> <span class="xml-tag">/&gt;</span>
        <span class="xml-tag">&lt;preferEarlyCheckIn</span> <span class="xml-tag">/&gt;</span>
    <span class="xml-tag">&lt;/Hotel</span><span class="xml-tag">&gt;</span>
    <span class="xml-tag">&lt;CustomFields</span><span class="xml-tag">&gt;</span>
        <span class="xml-tag">&lt;CustomField</span><span class="xml-tag">&gt;</span>
            <span class="xml-tag">&lt;Name</span> <span class="xml-tag">/&gt;</span>
            <span class="xml-tag">&lt;Value</span> <span class="xml-tag">/&gt;</span>
        <span class="xml-tag">&lt;/CustomField</span><span class="xml-tag">&gt;</span>
    <span class="xml-tag">&lt;/CustomFields</span><span class="xml-tag">&gt;</span>
<span class="xml-tag">&lt;/ProfileResponse</span><span class="xml-tag">&gt;</span>
</pre>
</html>

####  ProfileResponse root element

The ProfileResponse root element contains the General, Telephones, Addresses, DriversLicenses, EmailAddresses, RatePreferences, DiscountCodes, Air, Car, Hotel, and CustomFields child elements. It has the attributes shown in the Data Model section.

####  General elements

The General parent element contains the following child elements:

|  Element Name |  Data Type |  Description |
| :----- | :----- | :----- |
|  NamePrefix |  String |  The user's name prefix. Format: Varchar(60) |
|  FirstName |  String |  The user's first name. Format: Varchar(32) |
|  MiddleName |  String |  The user's middle name. Format: Varchar(32) |
|  LastName |  String |  The user's last name. Format: Varchar(32) |
|  NameSuffix |  String |  The user's name suffix. Format: Varchar(60) |
|  PreferredName |  String |  The user's preferred name. Format: Varchar(60) |
|  JobTitle |  String |  The user's job title. Format: Nvarchar(255) |
|  PreferredLanguage |  String |  The user's preferred language locale. Example: United States English is en-US. Format: Varchar(20) |
|  EReceiptOptIn |  String |  Whether the user has opted in to receive e-receipts. Format: **True**\|**False** |
|  MarketingOptIn |  String |  Whether the user has opted in to receive marketing information. Format: **True**\|**False** |
|  HasOpenBooking |  Boolean |  Whether the user has the TripLink User (formerly Open Booking User) permission. Format: **true**\|**false** |
|  CountryCode |  String |  The country code in from the[ ISO 3166-1 alpha-2 country code][8] specification. Format: Char(2) |
|  CompanyName |  String |  The user's company name. |

####  Telephones elements

The Telephones parent element contains a Telephone child element for each included telephone. The Telephone element has the attributes shown in the Response Class section and contains the following child elements:

|  Element Name |  Data Type |  Description |
| :----- | :----- | :----- |
|  ContactOptIn |  String |  Whether the user has opted in to being contacted on this phone. Only appears when the phone type is Cell or Primary Mobile Phone. Format: **True**\|**False** |
|  CountryCode |  String |  The country code in from the[ ISO 3166-1 alpha-2 country code][8] specification. Format: Char(2) |
|  PhoneNumber |  String | The phone number as entered by the user, which may contain characters such as () or -. Format: Char(60) <br> **NOTE**: The user phone number may sometimes be incorrectly parsed if there are data input issues.|
|  Extension |  String |  The phone extension. Format: Varchar(60) |

####  Addresses elements

The Addresses parent element contains an Address child element for each included address. The Address element has the attributes shown in the Response Class section and contains the following child elements:

**NOTE**: The values returned for the Address child elements are as entered by the user. The fields do not enforce formatting and may have a wide variety of values.

|  Element Name |  Data Type |  Description |
| :----- | :----- | :----- |
|  AttentionLine |  String |  Attention Line in the address. Format: Nvarchar(Unlimited) |
|  Line1 |  String |  Address line 1. Format: Nvarchar(Unlimited) |
|  Line2 |  String |  Address line 2. Format: Nvarchar(Unlimited) |
|  Line3 |  String |  Address line 3. Format: Nvarchar(Unlimited) |
|  MailStop |  String |  Address mail stop. Format: Nvarchar(Unlimited) |
|  City |  String |  The city name. Format: Nvarchar(Unlimited) |
|  StateProvince |  String |  The state or province. Format: Nvarchar(Unlimited) |
|  CountryCode |  String |  The country code in from the[ ISO 3166-1 alpha-2 country code][1] specification. Format: Char(2)|
|  ZipCode |  String |  The zip code. Format: Varchar(20) |
|  Longitude |  String |  Longitude value of Work Address. |
|  Latitude |  String |  Latitude value of Work Address. |

####  DriversLicenses elements

The DriversLicenses parent element contains a DriversLicense child element for each each included licenses. The DriversLicense element contains the following child elements:

|  Element Name |  Data Type |  Description |
| :----- | :----- | :----- |
|  DriversLicenseNumber |  String |  The user's driver license identification number. Format: Varchar(30) |
|  IssuingCountry |  String |  The country the license was issued in. Format: Char(2) |
|  IssuingState |  String |  The state the license was issued in. Format: Varchar(2) |
|  Expiration |  String |  The expiration date of the license. Format: YYYY-MM-DD |

####  EmailAddresses elements

The EmailAddresses parent element contains a EmailAddress child element for each included email address. It contains the following child element:

|  Element Name |  Data Type |  Description |
| :----- | :----- | :----- |
|  EmailAddress |  String | The the user's email address. The EmailAddress element has two attributes: Type and Contact. The Type attribute specifies the type of email address and the possible values are: **Business**, **Business2**, **Personal**. The Contact attribute specifies whether the email address should be used for travel notifications and the possible values are **True** or **False**. Format: Varchar(255)|

####  RatePreferences elements
The RatePreferences parent element contains the following child element:

|  Element Name |  Data Type |  Description |
| :----- | :----- | :----- |
|  AAARate |  Boolean |  Whether the user is eligible for the AAA rate. Format: **true**\|**false** |
|  AARPRate |  Boolean |  Whether the user is eligible for the AARP rate. Format: **true**\|**false** |
|  GovtRate |  Boolean |  Whether the user is eligible for the Government rate. Format: **true**\|**false** |
|  MilitaryRate |  Boolean |  Whether the user is eligible for the Military rate. Format: **true**\|**false** |

####  DiscountCodes elements

The DiscountCodes parent element contains a DiscountCode child element for each included discount code.

|  Element Name |  Data Type |  Description |
| :----- | :----- | :----- |
|  DiscountCode |  String | The discount code for the specified vendor.The DiscountCode element has a Vendor attribute that specifies the name of the vendor for the discount code.|

####  Air elements

The Air parent element contains the user's air travel preferences and contains the following child elements:

|  Element Name |  Data Type |  Description |
| :----- | :----- | :----- |
|  AirSmokingCode |  String |  Whether the user wants a flight with smoking allowed. Legacy. Format: **S**, **N**, **D**. |
|  AirMemberships | Membership   | The AirMemberships element only appears if the request came from a travel supplier for this travel type, or from a TMC. This element contains an AirMembership child element for each included membership and includes the following child elements: |
|  Seat |    | This parent element contains the user's Car travel preferences. The **Car** element contains the following child elements: |
|  Meals |    | This parent element contains the MealCode child element that indicates the meal preference of the traveler. The possible values are: <br> AVML = Vegetarian Hindu Meal <br> BBML = Baby Meal  <br> BLML = Bland Meal  <br> CHML = Child Meal  <br> DBML = Diabetic Meal  <br> FPML = Fruit Platter  <br> GFML = Gluten Intolerant Meal  <br> HNML = Hindu Meal  <br> KSML = Kosher Meal  <br> LCML = Low Calorie Meal  <br> LFML = Low Fat Meal  <br> LSML = Low Salt Meal  <br> MOML = Muslim Meal  <br> NLML = Low Lactose Meal  <br> NSML = No Salt Meal  <br> PFML = Peanut Free Meal  <br> SFML = Seafood Meal  <br> SPML = Special Request Meal <br>  VGML = Vegetarian  <br> RVML = Vegetarian Raw Vegan Meal  <br> VLML = Vegetarian Lacto-Ovo  <br> VJML = Vegetarian Jain Meal  <br> VOML = Vegetarian Oriental Meal <br> <br> **Note**: Regular Meal will not return a value for this preference. |
|  HomeAirport |  String |  The user's home airport |
|  DHSRedressNumber |  String |  TSA Redress Number |
|  DHSKnownTravelerNumber |  String |  TSA Known Traveler Number |
|  AirOther |  String |  Other Air related description |

##### Air Memberships elements

|  Element Name |  Data Type |  Description |
| :----- | :----- | :----- |
|  VendorCode |  String |  The code for the vendor that manages the loyalty program.| 
|  AccountNo |  String |  The user's account identifier in the loyalty program. |
|  Status |  String |  Name of the user's current level in the loyalty program. |
|  StatusBenefits |  String |  Description of a benefit of the loyalty program at the current status. |
|  PointTotal |  String |  The user's total number of points in the loyalty program. |
|  SegmentTotal |  String |  The user's total segments in the loyalty program. |
|  NextStatus |  String |  Name or description of next higher status level in the  loyalty program. |
|  PointsUntilNextStatus |  String |  Loyalty points required to next status level. |
|  SegmentsUntilNextStatus |  String |  Booking segment to next status level. |

##### Seat elements

|  Element Name |  Data Type |  Description |
| :----- | :----- | :----- |
|  InterRowPositionCode |  String |  Preferred position in an airplane row. Format: **Window**, **Aisle**, **Middle**, **Isolated**, **DontCare**. |
|  SectionPositionCode |  String |  Preference for position in plane. Format: **F**, **B**, **R**, **D**. |

####  Car elements

The Car parent element contains the user's car travel preferences. It contains the following child elements:

|  Element Name |  Data Type |  Description |
| :----- | :----- | :----- |
|  CarSmokingCode |  String |  Smoking car preferred. Format: **S**, **N**, **O** |
|  CarGPS |  String |  Car GPS preference. Format: **True**\|**False**. |
|  CarOption |  String |  Car option preference. Format: Char(3) |
|  CarMemberships | Membership   | The CarMemberships element only appears if the request came from a travel supplier for this travel type, or from a TMC. This element contains a CarMembership child element for each included membership. The CarMembership element has the following child elements: |
|  CarOther |  String |  Other Car related description. Format: Char(30) |
|  CarSkiRack |  String |  Car ski rack preference. Format: **True**\|**False**. |

##### Car Memberships elements

|  Element Name |  Data Type |  Description |
| :----- | :----- | :----- |
|  VendorCode |  String |  The code for the vendor that manages the loyalty program. |   | | |
|  AccountNo |  String |  The user's account identifier in the loyalty program. |
|  Status |  String |  Name of the user's current level in the loyalty program. |
|  StatusBenefits |  String |  Description of a benefit of the loyalty program at the current status.  |
|  PointTotal |  String |  The user's total number of points in the loyalty program. |
|  SegmentTotal |  String |  The user's total segments in the loyalty program. |
|  NextStatus |  String |  Name or description of next higher status level in the  loyalty program. |
|  PointsUntilNextStatus |  String |  Loyalty points required to next status level. |
|  SegmentsUntilNextStatus |  String |  Booking segment to next status level. |

####  Hotel elements

The Hotel parent element contains the user's hotel travel preferences. It contains the following child elements:

|  Element Name |  Data Type |  Description |
| :----- | :----- | :----- |
|  SmokingCode |  String |  Smoking room preference. Format: **S**, **N**,**D** |
|  HotelMemberships |    | This parent element only appears if the request came from a travel supplier for this travel type, or from a TMC. This element contains a HotelMembership child element for each included membership. The HotelMembership element has the following child elements: |
|  RoomType |  String |  Hotel room preference. Values are: H, 2, K, Q, 1, T |
|  HotelOther |  String |  Other Hotel related description. Format: Varchar(30) |
|  PreferFoamPillows |  String |  Whether the user prefers foam pillows. Format: **True**\|**False**. |
|  PreferCrib |  String |  Whether the user prefers to have a crib. Format:**True**\|**False**. |
|  PreferRollawayBed |  String |  Whether the user prefers to have a rollaway bed. Format:**True**\|**False**. |
|  PreferGym |  String |  Whether the user prefers a hotel with a gym. Format:**True**\|**False**. |
|  preferPool |  String |  Whether the user prefers a hotel with a pool. Format:**True**\|**False**. |
|  preferRestaraunt |  String |  Whether the user prefers a hotel with a restaurant. Format:**True**\|**False**. |
|  preferWheelchairAccess |  String |  Whether the user requires wheelchair access. Format: **True**\|**False**. |
|  preferAccessForBlind |  String |  Whether the user requires a room with access for blind guests. Format:**True**\|**False**. |
|  preferRoomService |  String |  Whether the user prefers a hotel with room service. Format:**True**\|**False**. |
|  preferEarlyCheckIn |  String |  Whether the user prefers a hotel with early check in. Format:**True**\|**False**. |

##### Hotel Memberships elements

|  Element Name |  Data Type |  Description |
| :----- | :----- | :----- |
|  VendorCode |  String |  The code for the vendor that manages the loyalty program. |   | | |
|  AccountNo |  String |  The user's account identifier in the loyalty program. |
|  Status |  String |  Name of the user's current level in the loyalty program. |
|  StatusBenefits |  String |  Description of a benefit of the loyalty program at the current status. |
|  PointTotal |  String |  The user's total number of points in the loyalty program. |
|  SegmentTotal |  String |  The user's total segments in the loyalty program. |
|  NextStatus |  String |  Name or description of next higher status level in the  loyalty program. |
|  PointsUntilNextStatus |  String |  Loyalty points required to next status level. |
|  SegmentsUntilNextStatus |  String |  Booking segment to next status level. |

####  CustomFields elements
The CustomFields parent element contains child elements that specify custom fields in a travel profile. It contains a CustomField child element for each custom field. To retrieve this information, the **Travel Profile**, **Custom Fields** scope must be selected in the **Register Partner Application** page under **Web Services**.

#### CustomField child elements
For each custom field, the CustomField element has a Name and Value child element.

|  Element Name |  Data Type |  Description |
| :----- | :----- | :----- |
|  Name |  String |  The name of the custom field. For example, Employee, Cost Centre, Fund, PassportNumber, Visa, and Assistants. |
|  Value |  String |  The value of the custom field. If the value is null, the Value child element is omitted. |
 

###  Examples for Travel Suppliers

###  Example 1: Get the travel profile for the user associated with the specified OAuth 2.0 access token

#####  Request

    GET {InstanceURI}/api/travelprofile/v1.0/profile HTTP/1.1
    Authorization: OAuth {access token}
    ...

#####  Response

<pre>
200 OK
Content-Type: application/xml    

<span class="xml-tag">&lt;ProfileResponse</span> <span class="xml-attribute">Status</span>=<span class="xml-value">&quot;Active&quot;</span> <span class="xml-attribute">Unique</span>=<span class="xml-value">&quot;CM12345678&quot;</span><span class="xml-tag">&gt;</span>
    <span class="xml-tag">&lt;General</span><span class="xml-tag">&gt;</span>
        <span class="xml-tag">&lt;NamePrefix</span> <span class="xml-tag">/&gt;</span>
        <span class="xml-tag">&lt;FirstName</span><span class="xml-tag">&gt;</span>Maria<span class="xml-tag">&lt;/FirstName</span><span class="xml-tag">&gt;</span>
        <span class="xml-tag">&lt;MiddleName</span><span class="xml-tag">&gt;</span>X<span class="xml-tag">&lt;/MiddleName</span><span class="xml-tag">&gt;</span>
        <span class="xml-tag">&lt;LastName</span><span class="xml-tag">&gt;</span>Black<span class="xml-tag">&lt;/LastName</span><span class="xml-tag">&gt;</span>
        <span class="xml-tag">&lt;NameSuffix</span> <span class="xml-tag">/&gt;</span>
        <span class="xml-tag">&lt;PreferredName</span> <span class="xml-tag">/&gt;</span>
        <span class="xml-tag">&lt;JobTitle</span><span class="xml-tag">&gt;</span>Finance Manager<span class="xml-tag">&lt;/JobTitle</span><span class="xml-tag">&gt;</span>
        <span class="xml-tag">&lt;PreferredLanguage</span><span class="xml-tag">&gt;</span>en-us<span class="xml-tag">&lt;/PreferredLanguage</span><span class="xml-tag">&gt;</span>
        <span class="xml-tag">&lt;EReceiptOptIn</span><span class="xml-tag">&gt;</span>True<span class="xml-tag">&lt;/EReceiptOptIn</span><span class="xml-tag">&gt;</span>
        <span class="xml-tag">&lt;MarketingOptIn</span><span class="xml-tag">&gt;</span>True<span class="xml-tag">&lt;/MarketingOptIn</span><span class="xml-tag">&gt;</span>
        <span class="xml-tag">&lt;HasOpenBooking</span><span class="xml-tag">&gt;</span>true<span class="xml-tag">&lt;/HasOpenBooking</span><span class="xml-tag">&gt;</span>
        <span class="xml-tag">&lt;CountryCode</span><span class="xml-tag">&gt;</span>US<span class="xml-tag">&lt;/CountryCode</span><span class="xml-tag">&gt;</span>
        <span class="xml-tag">&lt;CompanyName</span><span class="xml-tag">&gt;</span>ExampleDotCom<span class="xml-tag">&lt;/CompanyName</span><span class="xml-tag">&gt;</span>
    <span class="xml-tag">&lt;/General</span><span class="xml-tag">&gt;</span>
    <span class="xml-tag">&lt;Telephones</span><span class="xml-tag">&gt;</span>
        <span class="xml-tag">&lt;Telephone</span> <span class="xml-attribute">Type</span>=<span class="xml-value">&quot;Work&quot;</span><span class="xml-tag">&gt;</span>
            <span class="xml-tag">&lt;CountryCode</span><span class="xml-tag">&gt;</span>001<span class="xml-tag">&lt;/CountryCode</span><span class="xml-tag">&gt;</span>
            <span class="xml-tag">&lt;PhoneNumber</span><span class="xml-tag">&gt;</span>5555551234<span class="xml-tag">&lt;/PhoneNumber</span><span class="xml-tag">&gt;</span>
            <span class="xml-tag">&lt;Extension</span> <span class="xml-tag">/&gt;</span>
        <span class="xml-tag">&lt;/Telephone</span><span class="xml-tag">&gt;</span>
        <span class="xml-tag">&lt;Telephone</span> <span class="xml-attribute">Type</span>=<span class="xml-value">&quot;Cell&quot;</span><span class="xml-tag">&gt;</span>
            <span class="xml-tag">&lt;CountryCode</span><span class="xml-tag">&gt;</span>001<span class="xml-tag">&lt;/CountryCode</span><span class="xml-tag">&gt;</span>
            <span class="xml-tag">&lt;PhoneNumber</span><span class="xml-tag">&gt;</span>4155544321<span class="xml-tag">&lt;/PhoneNumber</span><span class="xml-tag">&gt;</span>
            <span class="xml-tag">&lt;Extension</span> <span class="xml-tag">/&gt;</span>
            <span class="xml-tag">&lt;ContactOptIn</span><span class="xml-tag">&gt;</span>True<span class="xml-tag">&lt;/ContactOptIn</span><span class="xml-tag">&gt;</span>
        <span class="xml-tag">&lt;/Telephone</span><span class="xml-tag">&gt;</span>
    <span class="xml-tag">&lt;/Telephones</span><span class="xml-tag">&gt;</span>
    <span class="xml-tag">&lt;Addresses</span><span class="xml-tag">&gt;</span>
        <span class="xml-tag">&lt;Address</span> <span class="xml-attribute">Type</span>=<span class="xml-value">&quot;Work&quot;</span><span class="xml-tag">&gt;</span>
            <span class="xml-tag">&lt;AttentionLine</span><span class="xml-tag">&gt;</span>Finance Department<span class="xml-tag">&lt;/AttentionLine</span><span class="xml-tag">&gt;</span>
            <span class="xml-tag">&lt;Line1</span><span class="xml-tag">&gt;</span>1234 Rainy Street.<span class="xml-tag">&lt;/Line1</span><span class="xml-tag">&gt;</span>
            <span class="xml-tag">&lt;Line2</span><span class="xml-tag">&gt;</span>Suite 442<span class="xml-tag">&lt;/Line2</span><span class="xml-tag">&gt;</span>
            <span class="xml-tag">&lt;Line3</span> <span class="xml-tag">/&gt;</span>
            <span class="xml-tag">&lt;MailStop</span> <span class="xml-tag">/&gt;</span>
            <span class="xml-tag">&lt;City</span><span class="xml-tag">&gt;</span>Seattle<span class="xml-tag">&lt;/City</span><span class="xml-tag">&gt;</span>
            <span class="xml-tag">&lt;StateProvince</span><span class="xml-tag">&gt;</span>WA<span class="xml-tag">&lt;/StateProvince</span><span class="xml-tag">&gt;</span>
            <span class="xml-tag">&lt;CountryCode</span><span class="xml-tag">&gt;</span>US<span class="xml-tag">&lt;/CountryCode</span><span class="xml-tag">&gt;</span>
            <span class="xml-tag">&lt;ZipCode</span><span class="xml-tag">&gt;</span>98102<span class="xml-tag">&lt;/ZipCode</span><span class="xml-tag">&gt;</span>
            <span class="xml-tag">&lt;Longitude</span><span class="xml-tag">&gt;</span>-77.040706000000<span class="xml-tag">&lt;/Longitude</span><span class="xml-tag">&gt;</span>
            <span class="xml-tag">&lt;Latitude</span><span class="xml-tag">&gt;</span>38.812690000000<span class="xml-tag">&lt;/Latitude</span><span class="xml-tag">&gt;</span>
        <span class="xml-tag">&lt;/Address</span><span class="xml-tag">&gt;</span>
        <span class="xml-tag">&lt;Address</span> <span class="xml-attribute">Type</span>=<span class="xml-value">&quot;Home&quot;</span><span class="xml-tag">&gt;</span>
            <span class="xml-tag">&lt;AttentionLine</span> <span class="xml-tag">/&gt;</span>
            <span class="xml-tag">&lt;Line1</span><span class="xml-tag">&gt;</span>1234 1st Ave. S<span class="xml-tag">&lt;/Line1</span><span class="xml-tag">&gt;</span>
            <span class="xml-tag">&lt;Line2</span><span class="xml-tag">&gt;</span>Apt. 821<span class="xml-tag">&lt;/Line2</span><span class="xml-tag">&gt;</span>
            <span class="xml-tag">&lt;Line3</span> <span class="xml-tag">/&gt;</span>
            <span class="xml-tag">&lt;MailStop</span> <span class="xml-tag">/&gt;</span>
            <span class="xml-tag">&lt;City</span><span class="xml-tag">&gt;</span>Seattle<span class="xml-tag">&lt;/City</span><span class="xml-tag">&gt;</span>
            <span class="xml-tag">&lt;StateProvince</span><span class="xml-tag">&gt;</span>WA<span class="xml-tag">&lt;/StateProvince</span><span class="xml-tag">&gt;</span>
            <span class="xml-tag">&lt;CountryCode</span><span class="xml-tag">&gt;</span>US<span class="xml-tag">&lt;/CountryCode</span><span class="xml-tag">&gt;</span>
            <span class="xml-tag">&lt;ZipCode</span><span class="xml-tag">&gt;</span>98102<span class="xml-tag">&lt;/ZipCode</span><span class="xml-tag">&gt;</span>
            <span class="xml-tag">&lt;Longitude</span><span class="xml-tag">&gt;</span>-77.040706000000<span class="xml-tag">&lt;/Longitude</span><span class="xml-tag">&gt;</span>
            <span class="xml-tag">&lt;Latitude</span><span class="xml-tag">&gt;</span>38.812690000000<span class="xml-tag">&lt;/Latitude</span><span class="xml-tag">&gt;</span>
        <span class="xml-tag">&lt;/Address</span><span class="xml-tag">&gt;</span>
    <span class="xml-tag">&lt;/Addresses</span><span class="xml-tag">&gt;</span>
    <span class="xml-tag">&lt;DriversLicenses</span><span class="xml-tag">&gt;</span>
        <span class="xml-tag">&lt;DriversLicense</span><span class="xml-tag">&gt;</span>
            <span class="xml-tag">&lt;DriversLicenseNumber</span><span class="xml-tag">&gt;</span>MIL112233452<span class="xml-tag">&lt;/DriversLicenseNumber</span><span class="xml-tag">&gt;</span>
            <span class="xml-tag">&lt;IssuingCountry</span><span class="xml-tag">&gt;</span>US<span class="xml-tag">&lt;/IssuingCountry</span><span class="xml-tag">&gt;</span>
            <span class="xml-tag">&lt;IssuingState</span><span class="xml-tag">&gt;</span>WA<span class="xml-tag">&lt;/IssuingState</span><span class="xml-tag">&gt;</span>
            <span class="xml-tag">&lt;Expiration</span><span class="xml-tag">&gt;</span>2018-05-22<span class="xml-tag">&lt;/Expiration</span><span class="xml-tag">&gt;</span>
        <span class="xml-tag">&lt;/DriversLicense</span><span class="xml-tag">&gt;</span>
    <span class="xml-tag">&lt;/DriversLicenses</span><span class="xml-tag">&gt;</span>
    <span class="xml-tag">&lt;EmailAddresses</span><span class="xml-tag">&gt;</span>
        <span class="xml-tag">&lt;EmailAddress</span> <span class="xml-attribute">Type</span>=<span class="xml-value">&quot;Business&quot;</span> <span class="xml-attribute">Contact</span>=<span class="xml-value">&quot;True&quot;</span><span class="xml-tag">&gt;</span>mariab@example.com<span class="xml-tag">&lt;/EmailAddress</span><span class="xml-tag">&gt;</span>
    <span class="xml-tag">&lt;/EmailAddresses</span><span class="xml-tag">&gt;</span>
    <span class="xml-tag">&lt;RatePreferences</span><span class="xml-tag">&gt;</span>
        <span class="xml-tag">&lt;AAARate</span><span class="xml-tag">&gt;</span>true<span class="xml-tag">&lt;/AAARate</span><span class="xml-tag">&gt;</span>
        <span class="xml-tag">&lt;AARPRate</span><span class="xml-tag">&gt;</span>false<span class="xml-tag">&lt;/AARPRate</span><span class="xml-tag">&gt;</span>
        <span class="xml-tag">&lt;GovtRate</span><span class="xml-tag">&gt;</span>false<span class="xml-tag">&lt;/GovtRate</span><span class="xml-tag">&gt;</span>
        <span class="xml-tag">&lt;MilitaryRate</span><span class="xml-tag">&gt;</span>false<span class="xml-tag">&lt;/MilitaryRate</span><span class="xml-tag">&gt;</span>
    <span class="xml-tag">&lt;/RatePreferences</span><span class="xml-tag">&gt;</span>
    <span class="xml-tag">&lt;DiscountCodes</span><span class="xml-tag">&gt;</span>
        <span class="xml-tag">&lt;DiscountCode</span> <span class="xml-attribute">Vendor</span>=<span class="xml-value">&quot;Marriott&quot;</span><span class="xml-tag">&gt;</span>1234567899<span class="xml-tag">&lt;/DiscountCode</span><span class="xml-tag">&gt;</span>
    <span class="xml-tag">&lt;/DiscountCodes</span><span class="xml-tag">&gt;</span>
    <span class="xml-tag">&lt;Air</span><span class="xml-tag">&gt;</span>
        <span class="xml-tag">&lt;AirSmokingCode</span><span class="xml-tag">&gt;</span>S<span class="xml-tag">&lt;/AirSmokingCode</span><span class="xml-tag">&gt;</span>
        <span class="xml-tag">&lt;AirMemberships</span><span class="xml-tag">&gt;</span>
            <span class="xml-tag">&lt;AirMembership</span><span class="xml-tag">&gt;</span>
                <span class="xml-tag">&lt;VendorCode</span><span class="xml-tag">&gt;</span>AA<span class="xml-tag">&lt;/VendorCode</span><span class="xml-tag">&gt;</span>
                <span class="xml-tag">&lt;AccountNo</span><span class="xml-tag">&gt;</span>K12345<span class="xml-tag">&lt;/AccountNo</span><span class="xml-tag">&gt;</span>
                <span class="xml-tag">&lt;Status</span><span class="xml-tag">&gt;</span>Normal<span class="xml-tag">&lt;/Status</span><span class="xml-tag">&gt;</span>
                <span class="xml-tag">&lt;StatusBenefits</span><span class="xml-tag">&gt;</span>N/A<span class="xml-tag">&lt;/StatusBenefits</span><span class="xml-tag">&gt;</span>
                <span class="xml-tag">&lt;PointTotal</span><span class="xml-tag">&gt;</span>1234<span class="xml-tag">&lt;/PointTotal</span><span class="xml-tag">&gt;</span>
                <span class="xml-tag">&lt;SegmentTotal</span><span class="xml-tag">&gt;</span>2<span class="xml-tag">&lt;/SegmentTotal</span><span class="xml-tag">&gt;</span>
                <span class="xml-tag">&lt;NextStatus</span><span class="xml-tag">&gt;</span>Super<span class="xml-tag">&lt;/NextStatus</span><span class="xml-tag">&gt;</span>
                <span class="xml-tag">&lt;PointsUntilNextStatus</span><span class="xml-tag">&gt;</span>444<span class="xml-tag">&lt;/PointsUntilNextStatus</span><span class="xml-tag">&gt;</span>
                <span class="xml-tag">&lt;SegmentsUntilNextStatus</span><span class="xml-tag">&gt;</span>2<span class="xml-tag">&lt;/SegmentsUntilNextStatus</span><span class="xml-tag">&gt;</span>
                <span class="xml-tag">&lt;AirMembership</span><span class="xml-tag">&gt;</span>
                    <span class="xml-tag">&lt;AirMemberships</span><span class="xml-tag">&gt;</span>
                        <span class="xml-tag">&lt;Seat</span><span class="xml-tag">&gt;</span>
                            <span class="xml-tag">&lt;InterRowPositionCode</span><span class="xml-tag">&gt;</span>Window<span class="xml-tag">&lt;/InterRowPositionCode</span><span class="xml-tag">&gt;</span>
                            <span class="xml-tag">&lt;SectionPositionCode</span><span class="xml-tag">&gt;</span>F<span class="xml-tag">&lt;/SectionPositionCode</span><span class="xml-tag">&gt;</span>
                        <span class="xml-tag">&lt;/Seat</span><span class="xml-tag">&gt;</span>
                        <span class="xml-tag">&lt;Meals</span><span class="xml-tag">&gt;</span>
                            <span class="xml-tag">&lt;MealCode</span><span class="xml-tag">&gt;</span>VGML<span class="xml-tag">&lt;/MealCode</span><span class="xml-tag">&gt;</span>
                        <span class="xml-tag">&lt;/Meals</span><span class="xml-tag">&gt;</span>
                        <span class="xml-tag">&lt;HomeAirport</span><span class="xml-tag">&gt;</span>SEA<span class="xml-tag">&lt;/HomeAirport</span><span class="xml-tag">&gt;</span>
                        <span class="xml-tag">&lt;AirOther</span> <span class="xml-tag">/&gt;</span>
    <span class="xml-tag">&lt;/Air</span><span class="xml-tag">&gt;</span>
    <span class="xml-tag">&lt;Car</span><span class="xml-tag">&gt;</span>
        <span class="xml-tag">&lt;CarSmokingCode</span><span class="xml-tag">&gt;</span>N<span class="xml-tag">&lt;/CarSmokingCode</span><span class="xml-tag">&gt;</span>
        <span class="xml-tag">&lt;CarGPS</span><span class="xml-tag">&gt;</span>True<span class="xml-tag">&lt;/CarGPS</span><span class="xml-tag">&gt;</span>
        <span class="xml-tag">&lt;CarOption</span> <span class="xml-tag">/&gt;</span>
        <span class="xml-tag">&lt;CarMemberships</span><span class="xml-tag">&gt;</span>
            <span class="xml-tag">&lt;CarMembership</span><span class="xml-tag">&gt;</span>
                <span class="xml-tag">&lt;VendorCode</span><span class="xml-tag">&gt;</span>ZE<span class="xml-tag">&lt;/VendorCode</span><span class="xml-tag">&gt;</span>
                <span class="xml-tag">&lt;AccountNo</span><span class="xml-tag">&gt;</span>ABCDEF<span class="xml-tag">&lt;/AccountNo</span><span class="xml-tag">&gt;</span>
                <span class="xml-tag">&lt;Status</span><span class="xml-tag">&gt;</span>Newbie<span class="xml-tag">&lt;/Status</span><span class="xml-tag">&gt;</span>
                <span class="xml-tag">&lt;StatusBenefits</span><span class="xml-tag">&gt;</span>10%  discount<span class="xml-tag">&lt;/StatusBenefits</span><span class="xml-tag">&gt;</span>
                <span class="xml-tag">&lt;PointTotal</span><span class="xml-tag">&gt;</span>44<span class="xml-tag">&lt;/PointTotal</span><span class="xml-tag">&gt;</span>
                <span class="xml-tag">&lt;SegmentTotal</span><span class="xml-tag">&gt;</span>8<span class="xml-tag">&lt;/SegmentTotal</span><span class="xml-tag">&gt;</span>
                <span class="xml-tag">&lt;NextStatus</span><span class="xml-tag">&gt;</span>Veteran<span class="xml-tag">&lt;/NextStatus</span><span class="xml-tag">&gt;</span>
                <span class="xml-tag">&lt;PointsUntilNextStatus</span><span class="xml-tag">&gt;</span>55<span class="xml-tag">&lt;/PointsUntilNextStatus</span><span class="xml-tag">&gt;</span>
                <span class="xml-tag">&lt;SegmentsUntilNextStatus</span><span class="xml-tag">&gt;</span>12<span class="xml-tag">&lt;/SegmentsUntilNextStatus</span><span class="xml-tag">&gt;</span>
                <span class="xml-tag">&lt;CarMembership</span><span class="xml-tag">&gt;</span>
                    <span class="xml-tag">&lt;CarMembership</span><span class="xml-tag">&gt;</span>
                        <span class="xml-tag">&lt;VendorCode</span><span class="xml-tag">&gt;</span>XW<span class="xml-tag">&lt;/VendorCode</span><span class="xml-tag">&gt;</span>
                        <span class="xml-tag">&lt;AccountNo</span><span class="xml-tag">&gt;</span>GHIJK<span class="xml-tag">&lt;/AccountNo</span><span class="xml-tag">&gt;</span>
                        <span class="xml-tag">&lt;Status</span><span class="xml-tag">&gt;</span>Gold<span class="xml-tag">&lt;/Status</span><span class="xml-tag">&gt;</span>
                        <span class="xml-tag">&lt;StatusBenefits</span><span class="xml-tag">&gt;</span>30%  discount<span class="xml-tag">&lt;/StatusBenefits</span><span class="xml-tag">&gt;</span>
                        <span class="xml-tag">&lt;PointTotal</span><span class="xml-tag">&gt;</span>1000<span class="xml-tag">&lt;/PointTotal</span><span class="xml-tag">&gt;</span>
                        <span class="xml-tag">&lt;SegmentTotal</span><span class="xml-tag">&gt;</span>50<span class="xml-tag">&lt;/SegmentTotal</span><span class="xml-tag">&gt;</span>
                        <span class="xml-tag">&lt;NextStatus</span><span class="xml-tag">&gt;</span>VIP<span class="xml-tag">&lt;/NextStatus</span><span class="xml-tag">&gt;</span>
                        <span class="xml-tag">&lt;PointsUntilNextStatus</span><span class="xml-tag">&gt;</span>500<span class="xml-tag">&lt;/PointsUntilNextStatus</span><span class="xml-tag">&gt;</span>
                        <span class="xml-tag">&lt;SegmentsUntilNextStatus</span><span class="xml-tag">&gt;</span>25<span class="xml-tag">&lt;/SegmentsUntilNextStatus</span><span class="xml-tag">&gt;</span>
                        <span class="xml-tag">&lt;CarMembership</span><span class="xml-tag">&gt;</span>
        <span class="xml-tag">&lt;/CarMemberships</span><span class="xml-tag">&gt;</span>
        <span class="xml-tag">&lt;CarOther</span> <span class="xml-tag">/&gt;</span>
        <span class="xml-tag">&lt;CarSkiRack</span><span class="xml-tag">&gt;</span>False<span class="xml-tag">&lt;/CarSkiRack</span><span class="xml-tag">&gt;</span>
    <span class="xml-tag">&lt;/Car</span><span class="xml-tag">&gt;</span>
    <span class="xml-tag">&lt;Hotel</span><span class="xml-tag">&gt;</span>
        <span class="xml-tag">&lt;SmokingCode</span><span class="xml-tag">&gt;</span>N<span class="xml-tag">&lt;/SmokingCode</span><span class="xml-tag">&gt;</span>
        <span class="xml-tag">&lt;HotelMemberships</span> <span class="xml-tag">/&gt;</span>
        <span class="xml-tag">&lt;RoomType</span><span class="xml-tag">&gt;</span>K<span class="xml-tag">&lt;/RoomType</span><span class="xml-tag">&gt;</span>
        <span class="xml-tag">&lt;HotelOther</span> <span class="xml-tag">/&gt;</span>
        <span class="xml-tag">&lt;PreferFoamPillows</span><span class="xml-tag">&gt;</span>True<span class="xml-tag">&lt;/PreferFoamPillows</span><span class="xml-tag">&gt;</span>
        <span class="xml-tag">&lt;PreferCrib</span><span class="xml-tag">&gt;</span>False<span class="xml-tag">&lt;/PreferCrib</span><span class="xml-tag">&gt;</span>
        <span class="xml-tag">&lt;PreferRollawayBed</span><span class="xml-tag">&gt;</span>True<span class="xml-tag">&lt;/PreferRollawayBed</span><span class="xml-tag">&gt;</span>
        <span class="xml-tag">&lt;PreferGym</span><span class="xml-tag">&gt;</span>True<span class="xml-tag">&lt;/PreferGym</span><span class="xml-tag">&gt;</span>
        <span class="xml-tag">&lt;preferPool</span><span class="xml-tag">&gt;</span>True<span class="xml-tag">&lt;/preferPool</span><span class="xml-tag">&gt;</span>
        <span class="xml-tag">&lt;preferRestaraunt</span><span class="xml-tag">&gt;</span>True<span class="xml-tag">&lt;/preferRestaraunt</span><span class="xml-tag">&gt;</span>
        <span class="xml-tag">&lt;preferWheelchairAccess</span><span class="xml-tag">&gt;</span>False<span class="xml-tag">&lt;/preferWheelchairAccess</span><span class="xml-tag">&gt;</span>
        <span class="xml-tag">&lt;preferAccessForBlind</span><span class="xml-tag">&gt;</span>False<span class="xml-tag">&lt;/preferAccessForBlind</span><span class="xml-tag">&gt;</span>
        <span class="xml-tag">&lt;preferRoomService</span><span class="xml-tag">&gt;</span>True<span class="xml-tag">&lt;/preferRoomService</span><span class="xml-tag">&gt;</span>
        <span class="xml-tag">&lt;preferEarlyCheckIn</span><span class="xml-tag">&gt;</span>False<span class="xml-tag">&lt;/preferEarlyCheckIn</span><span class="xml-tag">&gt;</span>
    <span class="xml-tag">&lt;/Hotel</span><span class="xml-tag">&gt;</span>
    <span class="xml-tag">&lt;CustomFields</span><span class="xml-tag">&gt;</span>
        <span class="xml-tag">&lt;CustomField</span><span class="xml-tag">&gt;</span>
            <span class="xml-tag">&lt;Name</span><span class="xml-tag">&gt;</span>Employee ID<span class="xml-tag">&lt;/Name</span><span class="xml-tag">&gt;</span>
            <span class="xml-tag">&lt;Value</span><span class="xml-tag">&gt;</span>12345<span class="xml-tag">&lt;/Value</span><span class="xml-tag">&gt;</span>
        <span class="xml-tag">&lt;/CustomField</span><span class="xml-tag">&gt;</span>
        <span class="xml-tag">&lt;CustomField</span><span class="xml-tag">&gt;</span>
            <span class="xml-tag">&lt;Name</span><span class="xml-tag">&gt;</span>Cost Centre<span class="xml-tag">&lt;/Name</span><span class="xml-tag">&gt;</span>
            <span class="xml-tag">&lt;Value</span><span class="xml-tag">&gt;</span>Headquarters<span class="xml-tag">&lt;/Value</span><span class="xml-tag">&gt;</span>
        <span class="xml-tag">&lt;/CustomField</span><span class="xml-tag">&gt;</span>
        <span class="xml-tag">&lt;CustomField</span><span class="xml-tag">&gt;</span>
            <span class="xml-tag">&lt;Name</span><span class="xml-tag">&gt;</span>Fund<span class="xml-tag">&lt;/Name</span><span class="xml-tag">&gt;</span>
            <span class="xml-tag">&lt;Value</span><span class="xml-tag">&gt;</span>StudentTraining<span class="xml-tag">&lt;/Value</span><span class="xml-tag">&gt;</span>
        <span class="xml-tag">&lt;/CustomField</span><span class="xml-tag">&gt;</span>
        <span class="xml-tag">&lt;CustomField</span><span class="xml-tag">&gt;</span>
            <span class="xml-tag">&lt;Name</span><span class="xml-tag">&gt;</span>Passport Number&gt;<span class="xml-tag">&lt;/Name</span><span class="xml-tag">&gt;</span>
            <span class="xml-tag">&lt;Value</span><span class="xml-tag">&gt;</span>AUS1234<span class="xml-tag">&lt;/Value</span><span class="xml-tag">&gt;</span>
        <span class="xml-tag">&lt;/CustomField</span><span class="xml-tag">&gt;</span>
        <span class="xml-tag">&lt;CustomField</span><span class="xml-tag">&gt;</span>
            <span class="xml-tag">&lt;Name</span><span class="xml-tag">&gt;</span>Visa<span class="xml-tag">&lt;/Name</span><span class="xml-tag">&gt;</span>
            <span class="xml-tag">&lt;Value</span><span class="xml-tag">&gt;</span>EUvisa1234<span class="xml-tag">&lt;/Value</span><span class="xml-tag">&gt;</span>
        <span class="xml-tag">&lt;/CustomField</span><span class="xml-tag">&gt;</span>
        <span class="xml-tag">&lt;CustomField</span><span class="xml-tag">&gt;</span>
            <span class="xml-tag">&lt;Name</span><span class="xml-tag">&gt;</span>Assistants<span class="xml-tag">&lt;/Name</span><span class="xml-tag">&gt;</span>
            <span class="xml-tag">&lt;Value</span><span class="xml-tag">&gt;</span>John Smith<span class="xml-tag">&lt;/Value</span><span class="xml-tag">&gt;</span>
        <span class="xml-tag">&lt;/CustomField</span><span class="xml-tag">&gt;</span>
    <span class="xml-tag">&lt;/CustomFields</span><span class="xml-tag">&gt;</span>
<span class="xml-tag">&lt;/ProfileResponse</span><span class="xml-tag">&gt;</span>

</pre>

####  Example 2: Get the travel profile for a user with a specific login ID

####  Request

    GET https://www.concursolutions.com/api/travelprofile/v1.0/profile?
    userid_type=login&userid_value=cm@example.com HTTP/1.1
    Authorization: OAuth {access token}
    ...

#####  Response

The response is the same as in Example 1.

 

###  Examples for TMCs

####  Example 3: Get the travel profile for the user associated with the specified OAuth 2.0 access token

#####  Request

    GET {InstanceURI}/api/travelprofile/v1.0/profile HTTP/1.1
    Authorization: OAuth {access token}
    ...

#####  Response

<pre>
    200 OK
    Content-Type: application/xml    

    <span class="xml-tag">&lt;ProfileResponse</span> <span class="xml-attribute">Status</span>=<span class="xml-value">&quot;Active&quot;</span> <span class="xml-attribute">Unique</span>=<span class="xml-value">&quot;CM12345678&quot;</span><span class="xml-tag">&gt;</span>
        <span class="xml-tag">&lt;General</span><span class="xml-tag">&gt;</span>
            <span class="xml-tag">&lt;NamePrefix</span> <span class="xml-tag">/&gt;</span>
            <span class="xml-tag">&lt;FirstName</span><span class="xml-tag">&gt;</span>Maria<span class="xml-tag">&lt;/FirstName</span><span class="xml-tag">&gt;</span>
            <span class="xml-tag">&lt;MiddleName</span><span class="xml-tag">&gt;</span>X<span class="xml-tag">&lt;/MiddleName</span><span class="xml-tag">&gt;</span>
            <span class="xml-tag">&lt;LastName</span><span class="xml-tag">&gt;</span>Black<span class="xml-tag">&lt;/LastName</span><span class="xml-tag">&gt;</span>
            <span class="xml-tag">&lt;NameSuffix</span> <span class="xml-tag">/&gt;</span>
            <span class="xml-tag">&lt;PreferredName</span> <span class="xml-tag">/&gt;</span>
            <span class="xml-tag">&lt;JobTitle</span><span class="xml-tag">&gt;</span>Finance Manager<span class="xml-tag">&lt;/JobTitle</span><span class="xml-tag">&gt;</span>
            <span class="xml-tag">&lt;PreferredLanguage</span><span class="xml-tag">&gt;</span>en-us<span class="xml-tag">&lt;/PreferredLanguage</span><span class="xml-tag">&gt;</span>
            <span class="xml-tag">&lt;EReceiptOptIn</span><span class="xml-tag">&gt;</span>True<span class="xml-tag">&lt;/EReceiptOptIn</span><span class="xml-tag">&gt;</span>
            <span class="xml-tag">&lt;MarketingOptIn</span><span class="xml-tag">&gt;</span>True<span class="xml-tag">&lt;/MarketingOptIn</span><span class="xml-tag">&gt;</span>
            <span class="xml-tag">&lt;HasOpenBooking</span><span class="xml-tag">&gt;</span>true<span class="xml-tag">&lt;/HasOpenBooking</span><span class="xml-tag">&gt;</span>
            <span class="xml-tag">&lt;CountryCode</span><span class="xml-tag">&gt;</span>US<span class="xml-tag">&lt;/CountryCode</span><span class="xml-tag">&gt;</span>
            <span class="xml-tag">&lt;CompanyName</span><span class="xml-tag">&gt;</span>ExampleDotCom<span class="xml-tag">&lt;/CompanyName</span><span class="xml-tag">&gt;</span>
        <span class="xml-tag">&lt;/General</span><span class="xml-tag">&gt;</span>
        <span class="xml-tag">&lt;Telephones</span><span class="xml-tag">&gt;</span>
            <span class="xml-tag">&lt;Telephone</span> <span class="xml-attribute">Type</span>=<span class="xml-value">&quot;Work&quot;</span><span class="xml-tag">&gt;</span>
                <span class="xml-tag">&lt;CountryCode</span><span class="xml-tag">&gt;</span>001<span class="xml-tag">&lt;/CountryCode</span><span class="xml-tag">&gt;</span>
                <span class="xml-tag">&lt;PhoneNumber</span><span class="xml-tag">&gt;</span>5555551234<span class="xml-tag">&lt;/PhoneNumber</span><span class="xml-tag">&gt;</span>
                <span class="xml-tag">&lt;Extension</span> <span class="xml-tag">/&gt;</span>
            <span class="xml-tag">&lt;/Telephone</span><span class="xml-tag">&gt;</span>
            <span class="xml-tag">&lt;Telephone</span> <span class="xml-attribute">Type</span>=<span class="xml-value">&quot;Cell&quot;</span><span class="xml-tag">&gt;</span>
                <span class="xml-tag">&lt;CountryCode</span><span class="xml-tag">&gt;</span>001<span class="xml-tag">&lt;/CountryCode</span><span class="xml-tag">&gt;</span>
                <span class="xml-tag">&lt;PhoneNumber</span><span class="xml-tag">&gt;</span>4155544321<span class="xml-tag">&lt;/PhoneNumber</span><span class="xml-tag">&gt;</span>
                <span class="xml-tag">&lt;Extension</span> <span class="xml-tag">/&gt;</span>
                <span class="xml-tag">&lt;ContactOptIn</span><span class="xml-tag">&gt;</span>True<span class="xml-tag">&lt;/ContactOptIn</span><span class="xml-tag">&gt;</span>
            <span class="xml-tag">&lt;/Telephone</span><span class="xml-tag">&gt;</span>
        <span class="xml-tag">&lt;/Telephones</span><span class="xml-tag">&gt;</span>
        <span class="xml-tag">&lt;Addresses</span><span class="xml-tag">&gt;</span>
            <span class="xml-tag">&lt;Address</span> <span class="xml-attribute">Type</span>=<span class="xml-value">&quot;Work&quot;</span><span class="xml-tag">&gt;</span>
                <span class="xml-tag">&lt;AttentionLine</span><span class="xml-tag">&gt;</span>Finance Department<span class="xml-tag">&lt;/AttentionLine</span><span class="xml-tag">&gt;</span>
                <span class="xml-tag">&lt;Line1</span><span class="xml-tag">&gt;</span>1234 Rainy Street.<span class="xml-tag">&lt;/Line1</span><span class="xml-tag">&gt;</span>
                <span class="xml-tag">&lt;Line2</span><span class="xml-tag">&gt;</span>Suite 442<span class="xml-tag">&lt;/Line2</span><span class="xml-tag">&gt;</span>
                <span class="xml-tag">&lt;Line3</span> <span class="xml-tag">/&gt;</span>
                <span class="xml-tag">&lt;MailStop</span> <span class="xml-tag">/&gt;</span>
                <span class="xml-tag">&lt;City</span><span class="xml-tag">&gt;</span>Seattle<span class="xml-tag">&lt;/City</span><span class="xml-tag">&gt;</span>
                <span class="xml-tag">&lt;StateProvince</span><span class="xml-tag">&gt;</span>WA<span class="xml-tag">&lt;/StateProvince</span><span class="xml-tag">&gt;</span>
                <span class="xml-tag">&lt;CountryCode</span><span class="xml-tag">&gt;</span>US<span class="xml-tag">&lt;/CountryCode</span><span class="xml-tag">&gt;</span>
                <span class="xml-tag">&lt;ZipCode</span><span class="xml-tag">&gt;</span>98102<span class="xml-tag">&lt;/ZipCode</span><span class="xml-tag">&gt;</span>
                <span class="xml-tag">&lt;Longitude</span><span class="xml-tag">&gt;</span>-77.040706000000<span class="xml-tag">&lt;/Longitude</span><span class="xml-tag">&gt;</span>
                <span class="xml-tag">&lt;Latitude</span><span class="xml-tag">&gt;</span>38.812690000000<span class="xml-tag">&lt;/Latitude</span><span class="xml-tag">&gt;</span>
            <span class="xml-tag">&lt;/Address</span><span class="xml-tag">&gt;</span>
            <span class="xml-tag">&lt;Address</span> <span class="xml-attribute">Type</span>=<span class="xml-value">&quot;Home&quot;</span><span class="xml-tag">&gt;</span>
                <span class="xml-tag">&lt;AttentionLine</span> <span class="xml-tag">/&gt;</span>
                <span class="xml-tag">&lt;Line1</span><span class="xml-tag">&gt;</span>1234 1st Ave. S<span class="xml-tag">&lt;/Line1</span><span class="xml-tag">&gt;</span>
                <span class="xml-tag">&lt;Line2</span><span class="xml-tag">&gt;</span>Apt. 821<span class="xml-tag">&lt;/Line2</span><span class="xml-tag">&gt;</span>
                <span class="xml-tag">&lt;Line3</span> <span class="xml-tag">/&gt;</span>
                <span class="xml-tag">&lt;MailStop</span> <span class="xml-tag">/&gt;</span>
                <span class="xml-tag">&lt;City</span><span class="xml-tag">&gt;</span>Seattle<span class="xml-tag">&lt;/City</span><span class="xml-tag">&gt;</span>
                <span class="xml-tag">&lt;StateProvince</span><span class="xml-tag">&gt;</span>WA<span class="xml-tag">&lt;/StateProvince</span><span class="xml-tag">&gt;</span>
                <span class="xml-tag">&lt;CountryCode</span><span class="xml-tag">&gt;</span>US<span class="xml-tag">&lt;/CountryCode</span><span class="xml-tag">&gt;</span>
                <span class="xml-tag">&lt;ZipCode</span><span class="xml-tag">&gt;</span>98102<span class="xml-tag">&lt;/ZipCode</span><span class="xml-tag">&gt;</span>
                <span class="xml-tag">&lt;Longitude</span><span class="xml-tag">&gt;</span>-77.040706000000<span class="xml-tag">&lt;/Longitude</span><span class="xml-tag">&gt;</span>
                <span class="xml-tag">&lt;Latitude</span><span class="xml-tag">&gt;</span>38.812690000000<span class="xml-tag">&lt;/Latitude</span><span class="xml-tag">&gt;</span>
            <span class="xml-tag">&lt;/Address</span><span class="xml-tag">&gt;</span>
        <span class="xml-tag">&lt;/Addresses</span><span class="xml-tag">&gt;</span>
        <span class="xml-tag">&lt;DriversLicenses</span><span class="xml-tag">&gt;</span>
            <span class="xml-tag">&lt;DriversLicense</span><span class="xml-tag">&gt;</span>
                <span class="xml-tag">&lt;DriversLicenseNumber</span><span class="xml-tag">&gt;</span>MIL112233452<span class="xml-tag">&lt;/DriversLicenseNumber</span><span class="xml-tag">&gt;</span>
                <span class="xml-tag">&lt;IssuingCountry</span><span class="xml-tag">&gt;</span>US<span class="xml-tag">&lt;/IssuingCountry</span><span class="xml-tag">&gt;</span>
                <span class="xml-tag">&lt;IssuingState</span><span class="xml-tag">&gt;</span>WA<span class="xml-tag">&lt;/IssuingState</span><span class="xml-tag">&gt;</span>
                <span class="xml-tag">&lt;Expiration</span><span class="xml-tag">&gt;</span>2018-05-22<span class="xml-tag">&lt;/Expiration</span><span class="xml-tag">&gt;</span>
            <span class="xml-tag">&lt;/DriversLicense</span><span class="xml-tag">&gt;</span>
        <span class="xml-tag">&lt;/DriversLicenses</span><span class="xml-tag">&gt;</span>
        <span class="xml-tag">&lt;EmailAddresses</span><span class="xml-tag">&gt;</span>
            <span class="xml-tag">&lt;EmailAddress</span> <span class="xml-attribute">Type</span>=<span class="xml-value">&quot;Business&quot;</span> <span class="xml-attribute">Contact</span>=<span class="xml-value">&quot;True&quot;</span><span class="xml-tag">&gt;</span>mariab@example.com<span class="xml-tag">&lt;/EmailAddress</span><span class="xml-tag">&gt;</span>
        <span class="xml-tag">&lt;/EmailAddresses</span><span class="xml-tag">&gt;</span>
        <span class="xml-tag">&lt;RatePreferences</span><span class="xml-tag">&gt;</span>
            <span class="xml-tag">&lt;AAARate</span><span class="xml-tag">&gt;</span>true<span class="xml-tag">&lt;/AAARate</span><span class="xml-tag">&gt;</span>
            <span class="xml-tag">&lt;AARPRate</span><span class="xml-tag">&gt;</span>false<span class="xml-tag">&lt;/AARPRate</span><span class="xml-tag">&gt;</span>
            <span class="xml-tag">&lt;GovtRate</span><span class="xml-tag">&gt;</span>false<span class="xml-tag">&lt;/GovtRate</span><span class="xml-tag">&gt;</span>
            <span class="xml-tag">&lt;MilitaryRate</span><span class="xml-tag">&gt;</span>false<span class="xml-tag">&lt;/MilitaryRate</span><span class="xml-tag">&gt;</span>
        <span class="xml-tag">&lt;/RatePreferences</span><span class="xml-tag">&gt;</span>
        <span class="xml-tag">&lt;DiscountCodes</span><span class="xml-tag">&gt;</span>
            <span class="xml-tag">&lt;DiscountCode</span> <span class="xml-attribute">Vendor</span>=<span class="xml-value">&quot;Marriott&quot;</span><span class="xml-tag">&gt;</span>1234567899<span class="xml-tag">&lt;/DiscountCode</span><span class="xml-tag">&gt;</span>
            <span class="xml-tag">&lt;DiscountCode</span> <span class="xml-attribute">Vendor</span>=<span class="xml-value">&quot;IHG&quot;</span><span class="xml-tag">&gt;</span>111222333<span class="xml-tag">&lt;/Discount</span>
        <span class="xml-tag">&lt;/DiscountCodes</span><span class="xml-tag">&gt;</span>
        <span class="xml-tag">&lt;Air</span><span class="xml-tag">&gt;</span>
            <span class="xml-tag">&lt;AirSmokingCode</span><span class="xml-tag">&gt;</span>S<span class="xml-tag">&lt;/AirSmokingCode</span><span class="xml-tag">&gt;</span>
            <span class="xml-tag">&lt;AirMemberships</span><span class="xml-tag">&gt;</span>
                <span class="xml-tag">&lt;AirMembership</span><span class="xml-tag">&gt;</span>
                    <span class="xml-tag">&lt;VendorCode</span><span class="xml-tag">&gt;</span>AA<span class="xml-tag">&lt;/VendorCode</span><span class="xml-tag">&gt;</span>
                    <span class="xml-tag">&lt;AccountNo</span><span class="xml-tag">&gt;</span>K12345<span class="xml-tag">&lt;/AccountNo</span><span class="xml-tag">&gt;</span>
                    <span class="xml-tag">&lt;Status</span><span class="xml-tag">&gt;</span>Normal<span class="xml-tag">&lt;/Status</span><span class="xml-tag">&gt;</span>
                    <span class="xml-tag">&lt;StatusBenefits</span><span class="xml-tag">&gt;</span>N/A<span class="xml-tag">&lt;/StatusBenefits</span><span class="xml-tag">&gt;</span>
                    <span class="xml-tag">&lt;PointTotal</span><span class="xml-tag">&gt;</span>1234<span class="xml-tag">&lt;/PointTotal</span><span class="xml-tag">&gt;</span>
                    <span class="xml-tag">&lt;SegmentTotal</span><span class="xml-tag">&gt;</span>2<span class="xml-tag">&lt;/SegmentTotal</span><span class="xml-tag">&gt;</span>
                    <span class="xml-tag">&lt;NextStatus</span><span class="xml-tag">&gt;</span>Super<span class="xml-tag">&lt;/NextStatus</span><span class="xml-tag">&gt;</span>
                    <span class="xml-tag">&lt;PointsUntilNextStatus</span><span class="xml-tag">&gt;</span>444<span class="xml-tag">&lt;/PointsUntilNextStatus</span><span class="xml-tag">&gt;</span>
                    <span class="xml-tag">&lt;SegmentsUntilNextStatus</span><span class="xml-tag">&gt;</span>2<span class="xml-tag">&lt;/SegmentsUntilNextStatus</span><span class="xml-tag">&gt;</span>
                <span class="xml-tag">&lt;AirMembership</span><span class="xml-tag">&gt;</span>
            <span class="xml-tag">&lt;AirMemberships</span><span class="xml-tag">&gt;</span>
            <span class="xml-tag">&lt;Seat</span><span class="xml-tag">&gt;</span>
                <span class="xml-tag">&lt;InterRowPositionCode</span><span class="xml-tag">&gt;</span>Window<span class="xml-tag">&lt;/InterRowPositionCode</span><span class="xml-tag">&gt;</span>
                <span class="xml-tag">&lt;SectionPositionCode</span><span class="xml-tag">&gt;</span>NOPREF<span class="xml-tag">&lt;/SectionPositionCode</span><span class="xml-tag">&gt;</span>
            <span class="xml-tag">&lt;/Seat</span><span class="xml-tag">&gt;</span>
            <span class="xml-tag">&lt;Meals</span><span class="xml-tag">&gt;</span>
                <span class="xml-tag">&lt;MealCode</span><span class="xml-tag">&gt;</span>VGML<span class="xml-tag">&lt;/MealCode</span><span class="xml-tag">&gt;</span>
            <span class="xml-tag">&lt;/Meals</span><span class="xml-tag">&gt;</span>
            <span class="xml-tag">&lt;HomeAirport</span><span class="xml-tag">&gt;</span>SEA<span class="xml-tag">&lt;/HomeAirport</span><span class="xml-tag">&gt;</span>
            <span class="xml-tag">&lt;AirOther</span> <span class="xml-tag">/&gt;</span>
        <span class="xml-tag">&lt;/Air</span><span class="xml-tag">&gt;</span>
        <span class="xml-tag">&lt;Car</span><span class="xml-tag">&gt;</span>
            <span class="xml-tag">&lt;CarSmokingCode</span><span class="xml-tag">&gt;</span>N<span class="xml-tag">&lt;/CarSmokingCode</span><span class="xml-tag">&gt;</span>
            <span class="xml-tag">&lt;CarGPS</span><span class="xml-tag">&gt;</span>True<span class="xml-tag">&lt;/CarGPS</span><span class="xml-tag">&gt;</span>
            <span class="xml-tag">&lt;CarOption</span> <span class="xml-tag">/&gt;</span>
            <span class="xml-tag">&lt;CarMemberships</span><span class="xml-tag">&gt;</span>
                <span class="xml-tag">&lt;CarMembership</span><span class="xml-tag">&gt;</span>
                    <span class="xml-tag">&lt;VendorCode</span><span class="xml-tag">&gt;</span>ZE<span class="xml-tag">&lt;/VendorCode</span><span class="xml-tag">&gt;</span>
                    <span class="xml-tag">&lt;AccountNo</span><span class="xml-tag">&gt;</span>ABCDEF<span class="xml-tag">&lt;/AccountNo</span><span class="xml-tag">&gt;</span>
                    <span class="xml-tag">&lt;Status</span><span class="xml-tag">&gt;</span>Newbie<span class="xml-tag">&lt;/Status</span><span class="xml-tag">&gt;</span>
                    <span class="xml-tag">&lt;StatusBenefits</span><span class="xml-tag">&gt;</span>10%  discount<span class="xml-tag">&lt;/StatusBenefits</span><span class="xml-tag">&gt;</span>
                    <span class="xml-tag">&lt;PointTotal</span><span class="xml-tag">&gt;</span>44<span class="xml-tag">&lt;/PointTotal</span><span class="xml-tag">&gt;</span>
                    <span class="xml-tag">&lt;SegmentTotal</span><span class="xml-tag">&gt;</span>8<span class="xml-tag">&lt;/SegmentTotal</span><span class="xml-tag">&gt;</span>
                    <span class="xml-tag">&lt;NextStatus</span><span class="xml-tag">&gt;</span>Veteran<span class="xml-tag">&lt;/NextStatus</span><span class="xml-tag">&gt;</span>
                    <span class="xml-tag">&lt;PointsUntilNextStatus</span><span class="xml-tag">&gt;</span>55<span class="xml-tag">&lt;/PointsUntilNextStatus</span><span class="xml-tag">&gt;</span>
                    <span class="xml-tag">&lt;SegmentsUntilNextStatus</span><span class="xml-tag">&gt;</span>12<span class="xml-tag">&lt;/SegmentsUntilNextStatus</span><span class="xml-tag">&gt;</span>
                <span class="xml-tag">&lt;CarMembership</span><span class="xml-tag">&gt;</span>
                <span class="xml-tag">&lt;CarMembership</span><span class="xml-tag">&gt;</span>
                    <span class="xml-tag">&lt;VendorCode</span><span class="xml-tag">&gt;</span>XW<span class="xml-tag">&lt;/VendorCode</span><span class="xml-tag">&gt;</span>
                    <span class="xml-tag">&lt;AccountNo</span><span class="xml-tag">&gt;</span>GHIJK<span class="xml-tag">&lt;/AccountNo</span><span class="xml-tag">&gt;</span>
                    <span class="xml-tag">&lt;Status</span><span class="xml-tag">&gt;</span>Gold<span class="xml-tag">&lt;/Status</span><span class="xml-tag">&gt;</span>
                    <span class="xml-tag">&lt;StatusBenefits</span><span class="xml-tag">&gt;</span>30%  discount<span class="xml-tag">&lt;/StatusBenefits</span><span class="xml-tag">&gt;</span>
                    <span class="xml-tag">&lt;PointTotal</span><span class="xml-tag">&gt;</span>1000<span class="xml-tag">&lt;/PointTotal</span><span class="xml-tag">&gt;</span>
                    <span class="xml-tag">&lt;SegmentTotal</span><span class="xml-tag">&gt;</span>50<span class="xml-tag">&lt;/SegmentTotal</span><span class="xml-tag">&gt;</span>
                    <span class="xml-tag">&lt;NextStatus</span><span class="xml-tag">&gt;</span>VIP<span class="xml-tag">&lt;/NextStatus</span><span class="xml-tag">&gt;</span>
                    <span class="xml-tag">&lt;PointsUntilNextStatus</span><span class="xml-tag">&gt;</span>500<span class="xml-tag">&lt;/PointsUntilNextStatus</span><span class="xml-tag">&gt;</span>
                    <span class="xml-tag">&lt;SegmentsUntilNextStatus</span><span class="xml-tag">&gt;</span>25<span class="xml-tag">&lt;/SegmentsUntilNextStatus</span><span class="xml-tag">&gt;</span>
                <span class="xml-tag">&lt;CarMembership</span><span class="xml-tag">&gt;</span>
            <span class="xml-tag">&lt;/CarMemberships</span><span class="xml-tag">&gt;</span>
            <span class="xml-tag">&lt;CarOther</span> <span class="xml-tag">/&gt;</span>
            <span class="xml-tag">&lt;CarSkiRack</span><span class="xml-tag">&gt;</span>False<span class="xml-tag">&lt;/CarSkiRack</span><span class="xml-tag">&gt;</span>
        <span class="xml-tag">&lt;/Car</span><span class="xml-tag">&gt;</span>
        <span class="xml-tag">&lt;Hotel</span><span class="xml-tag">&gt;</span>
            <span class="xml-tag">&lt;SmokingCode</span><span class="xml-tag">&gt;</span>N<span class="xml-tag">&lt;/SmokingCode</span><span class="xml-tag">&gt;</span>
            <span class="xml-tag">&lt;HotelMemberships</span> <span class="xml-tag">/&gt;</span>
            <span class="xml-tag">&lt;RoomType</span><span class="xml-tag">&gt;</span>K<span class="xml-tag">&lt;/RoomType</span><span class="xml-tag">&gt;</span>
            <span class="xml-tag">&lt;HotelOther</span> <span class="xml-tag">/&gt;</span>
            <span class="xml-tag">&lt;PreferFoamPillows</span><span class="xml-tag">&gt;</span>True<span class="xml-tag">&lt;/PreferFoamPillows</span><span class="xml-tag">&gt;</span>
            <span class="xml-tag">&lt;PreferCrib</span><span class="xml-tag">&gt;</span>False<span class="xml-tag">&lt;/PreferCrib</span><span class="xml-tag">&gt;</span>
            <span class="xml-tag">&lt;PreferRollawayBed</span><span class="xml-tag">&gt;</span>True<span class="xml-tag">&lt;/PreferRollawayBed</span><span class="xml-tag">&gt;</span>
            <span class="xml-tag">&lt;PreferGym</span><span class="xml-tag">&gt;</span>True<span class="xml-tag">&lt;/PreferGym</span><span class="xml-tag">&gt;</span>
            <span class="xml-tag">&lt;preferPool</span><span class="xml-tag">&gt;</span>True<span class="xml-tag">&lt;/preferPool</span><span class="xml-tag">&gt;</span>
            <span class="xml-tag">&lt;preferRestaraunt</span><span class="xml-tag">&gt;</span>True<span class="xml-tag">&lt;/preferRestaraunt</span><span class="xml-tag">&gt;</span>
            <span class="xml-tag">&lt;preferWheelchairAccess</span><span class="xml-tag">&gt;</span>False<span class="xml-tag">&lt;/preferWheelchairAccess</span><span class="xml-tag">&gt;</span>
            <span class="xml-tag">&lt;preferAccessForBlind</span><span class="xml-tag">&gt;</span>False<span class="xml-tag">&lt;/preferAccessForBlind</span><span class="xml-tag">&gt;</span>
            <span class="xml-tag">&lt;preferRoomService</span><span class="xml-tag">&gt;</span>True<span class="xml-tag">&lt;/preferRoomService</span><span class="xml-tag">&gt;</span>
            <span class="xml-tag">&lt;preferEarlyCheckIn</span><span class="xml-tag">&gt;</span>False<span class="xml-tag">&lt;/preferEarlyCheckIn</span><span class="xml-tag">&gt;</span>
        <span class="xml-tag">&lt;/Hotel</span><span class="xml-tag">&gt;</span>
        <span class="xml-tag">&lt;CustomFields</span><span class="xml-tag">&gt;</span>
            <span class="xml-tag">&lt;CustomField</span><span class="xml-tag">&gt;</span>
                <span class="xml-tag">&lt;Name</span><span class="xml-tag">&gt;</span>Employee ID<span class="xml-tag">&lt;/Name</span><span class="xml-tag">&gt;</span>
                <span class="xml-tag">&lt;Value</span><span class="xml-tag">&gt;</span>12345<span class="xml-tag">&lt;/Value</span><span class="xml-tag">&gt;</span>
            <span class="xml-tag">&lt;/CustomField</span><span class="xml-tag">&gt;</span>
            <span class="xml-tag">&lt;CustomField</span><span class="xml-tag">&gt;</span>
                <span class="xml-tag">&lt;Name</span><span class="xml-tag">&gt;</span>Cost Centre<span class="xml-tag">&lt;/Name</span><span class="xml-tag">&gt;</span>
                <span class="xml-tag">&lt;Value</span><span class="xml-tag">&gt;</span>Headquarters<span class="xml-tag">&lt;/Value</span><span class="xml-tag">&gt;</span>
            <span class="xml-tag">&lt;/CustomField</span><span class="xml-tag">&gt;</span>
            <span class="xml-tag">&lt;CustomField</span><span class="xml-tag">&gt;</span>
                <span class="xml-tag">&lt;Name</span><span class="xml-tag">&gt;</span>Fund<span class="xml-tag">&lt;/Name</span><span class="xml-tag">&gt;</span>
                <span class="xml-tag">&lt;Value</span><span class="xml-tag">&gt;</span>StudentTraining<span class="xml-tag">&lt;/Value</span><span class="xml-tag">&gt;</span>
            <span class="xml-tag">&lt;/CustomField</span><span class="xml-tag">&gt;</span>
            <span class="xml-tag">&lt;CustomField</span><span class="xml-tag">&gt;</span>
                <span class="xml-tag">&lt;Name</span><span class="xml-tag">&gt;</span>Passport Number&gt;<span class="xml-tag">&lt;/Name</span><span class="xml-tag">&gt;</span>
                <span class="xml-tag">&lt;Value</span><span class="xml-tag">&gt;</span>AUS1234<span class="xml-tag">&lt;/Value</span><span class="xml-tag">&gt;</span>
            <span class="xml-tag">&lt;/CustomField</span><span class="xml-tag">&gt;</span>
            <span class="xml-tag">&lt;CustomField</span><span class="xml-tag">&gt;</span>
                <span class="xml-tag">&lt;Name</span><span class="xml-tag">&gt;</span>Visa<span class="xml-tag">&lt;/Name</span><span class="xml-tag">&gt;</span>
                <span class="xml-tag">&lt;Value</span><span class="xml-tag">&gt;</span>EUvisa1234<span class="xml-tag">&lt;/Value</span><span class="xml-tag">&gt;</span>
            <span class="xml-tag">&lt;/CustomField</span><span class="xml-tag">&gt;</span>
            <span class="xml-tag">&lt;CustomField</span><span class="xml-tag">&gt;</span>
                <span class="xml-tag">&lt;Name</span><span class="xml-tag">&gt;</span>Assistants<span class="xml-tag">&lt;/Name</span><span class="xml-tag">&gt;</span>
                <span class="xml-tag">&lt;Value</span><span class="xml-tag">&gt;</span>John Smith<span class="xml-tag">&lt;/Value</span><span class="xml-tag">&gt;</span>
            <span class="xml-tag">&lt;/CustomField</span><span class="xml-tag">&gt;</span>
        <span class="xml-tag">&lt;/CustomFields</span><span class="xml-tag">&gt;</span>
    <span class="xml-tag">&lt;/ProfileResponse</span><span class="xml-tag">&gt;</span>

</pre>
 

####  Example 4: Get the travel profile for a user with a specific login ID

#####  Request

    GET https://www.concursolutions.com/api/travelprofile/v1.0/profile?
    userid_type=login&userid_value=cm@example.com HTTP/1.1
    Authorization: OAuth {access token}
    ...

#####  Response

The response is the same as in Example 3.

## <a name="a2">Get a list of travel profile summaries</a>

Gets the list of travel profile summaries that have been updated since the specified date. The response is separated into pages.

###  Request

<samp>
GET {InstanceURI}/api/travelprofile/v1.0/profile?LastModifiedDate=2015-01-01T01:00:00 HTTP/1.1
Authorization: OAuth {access token}
</samp>

####  Request parameters

All request paramenters are optional. To identify a specific user by login ID or XMLSyncID, you can specify the following request parameters.

|  Parameter Name |  Required/Optional | Parameter Type |  Data Type |  Description |
| :----- | :----- | :----- | :----- | :----- |
|  LastModifiedDate | Required |  path |  string |  The date and time, in UTC, that the profiles must be updated after to be included in the response. Format: YYYY-MM-DDThh:mm:ss |
|  Page | Optional |  path |  string |  The number of pages to retrieve. If the page is outside the number of existing pages, the response elements will be empty |
|  ItemsPerPage | Optional |  path |  string |  The number of travel profiles per page. The maximum value is 200. The default value is 200. |

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
|  TotalPages |  String |  The total number of pages to return. |
|  TotalItems |  String |  The total number of profiles the query returned. |
|  Page |  String |  The page number for the set of results in the current response. |
|  ItemsPerPage |  String |  The number of items set to display per page. |
|  PreviousPageURL |  String |  The URI to the previous page of results. This element will be empty when there are no previous pages. |
|  NextPageURL |  String |  The URI to the next set of results. This element will be empty when there are no next pages |

####  Data element

The Data parent element contains a ProfileSummary child element for each included travel profile.

####  ProfileSummary

The Paging parent element contains contains the paging information for the response and it contains the following child elements:

|  Element Name |  Data Type |  Description |
| :----- | :----- | :----- | :----- |
|  LoginID |  String |  The Concur user login ID. |
|  XMLProfileSyncID |  String |  TThe user's XML Profile Sync ID, if available. |
|  ProfileLastModifiedUTC |  String |  The date, in UTC, when the travel profile was last modified. Format: YYYY-MM-DDThh:mm:ss. |

###  Example
This example gets the list of travel profile summaries modified after January 1 2015.

####  Request

<samp>
    GET {InstanceURI}/api/travelprofile/v1.0/profile?LastModifiedDate=2015-01-01T01:00:00 HTTP/1.1
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
            <span class="xml-tag">&lt;XmlProfileSyncID</span><span class="xml-tag">&gt;</span>string123<span class="xml-tag">&lt;/XmlProfileSyncID</span><span class="xml-tag">&gt;</span>
            <span class="xml-tag">&lt;ProfileLastModifiedUTC</span><span class="xml-tag">&gt;</span>2015-01-01T01:00:00<span class="xml-tag">&lt;/ProfileLastModifiedUTC</span><span class="xml-tag">&gt;</span>
        <span class="xml-tag">&lt;/ProfileSummary</span><span class="xml-tag">&gt;</span>
        <span class="xml-tag">&lt;ProfileSummary</span><span class="xml-tag">&gt;</span>
            <span class="xml-tag">&lt;LoginID</span><span class="xml-tag">&gt;</span>peterk@company1.com<span class="xml-tag">&lt;/LoginID</span><span class="xml-tag">&gt;</span>
            <span class="xml-tag">&lt;XmlProfileSyncID</span><span class="xml-tag">&gt;</span>string456<span class="xml-tag">&lt;/XmlProfileSyncID</span><span class="xml-tag">&gt;</span>
            <span class="xml-tag">&lt;ProfileLastModifiedUTC</span><span class="xml-tag">&gt;</span>2015-01-01T01:00:00<span class="xml-tag">&lt;/ProfileLastModifiedUTC</span><span class="xml-tag">&gt;</span>
        <span class="xml-tag">&lt;/ProfileSummary</span><span class="xml-tag">&gt;</span>
    <span class="xml-tag">&lt;/Data</span><span class="xml-tag">&gt;</span>
<span class="xml-tag">&lt;/ConnectResponse</span><span class="xml-tag">&gt;</span>

</pre>
 




[3]: https://www.concursolutions.com/ns/PanamaUserProfile.xsd
[4]: http://concur.github.io/developer.concur.com/api-reference/travel/travel-profile/form-payment-resource
[5]: http://concur.github.io/developer.concur.com/api-reference/travel/travel-profile/loyalty-program-resource
[6]: http://concur.github.io/developer.concur.com/api-reference/user/company-notification-subscription-resource
[7]: http://concur.github.io/developer.concur.com/api-reference/travel/travel-profile/user-notification-resource
[8]: https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2
