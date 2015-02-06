---
title: Get a Travel Profile 
layout: operation
---




##  Description

Gets the travel profile information for the specified user. The travel profile includes information such as the user's identity, contact information, rate preferences and discount codes, preferences by travel type, and custom fields. The travel profile information returned by this GET operation depends on whether the caller is a Travel Supplier, a TMC, or a mainstream developer:

* Travel Suppliers can get only the loyalty program information and discount codes for their own loyalty and discount programs.
* TMCs can get all loyalty programs and discount codes for the specified user.
* A mainstream developer cannot get any loyalty program or discount information.

##  Request parameters

All request paramenters are optional. To identify a specific user by login ID or XMLSyncID, you can specify the following request parameters:

|  Parameter Name |  Parameter Type |  Data Type |  Description |
| ----- | ----- | ----- |:-----|
|  userid_type |  Path |  String |  The type of user identification to use. Possible values are: **login** and **xmlsyncid** |
|  userid_value |  Path |  String |  The user's login ID or XMLSync ID, depending on which user type is selected. This parameter must be provided in conjunction with the **userid_type** parameter. |

##  Content type
* application/xml

##  Authorization header

`Authorization: OAuth {access_token}`

Where access_token is the OAuth 2.0 access token of the user whose travel profile information you want to retrieve. If you want to access company-wide travel profile information, the user account associated with the OAuth 2.0 access token must have a Concur account with one of these roles: Web Services Administrator for Professional or Can Administer for Standard.

##  Data model

The data model of the response for the GET operation.

    <ProfileResponse Status="Active|Inactive" Unique="{unique identifier for the user}">
        <General>
            <NamePrefix />
            <FirstName />
            <MiddleName />
            <LastName />
            <NameSuffix />
            <PreferredName />
            <JobTitle />
            <PreferredLanguage />
            <EReceiptOptIn />
            <MarketingOptIn />
            <HasOpenBooking />
            <CountryCode />
            <CompanyName />
        </General>
        <Telephones>
            <Telephone Type="Cell|Other|Pager|Fax|Home|Work|Primary Mobile Phone">
                <CountryCode />
                <PhoneNumber />
                <Extension />
                <ContactOptIn />
            </Telephone>
        </Telephones>
        <Addresses>
            <Address Type="Home|Work">
                <AttentionLine />
                <Line1 />
                <Line2 />
                <Line3 />
                <MailStop>
                </Mailstop>
                <City />
                <StateProvince />
                <CountryCode />
                <ZipCode />
                <Longitude />
                <Latitude />
            </Address>
        </Addresses>
        <DriversLicenses>
            <DriversLicense>
                <DriversLicenseNumber />
                <IssuingCountry />
                <IssuingState />
                <Expiration />
            </DriversLicense>
        </DriversLicenses>
        <EmailAddresses>
              <EmailAddress Type="Business|Business2|Personal" Contact="true|false">
        </EmailAddresses>
        <RatePreferences>
            <AAARate />
            <AARPRate />
            <GovtRate />
            <MilitaryRate />
        </RatePreferences>
        <DiscountCodes>
            <DiscountCode Type="{vendor name}">
        </DiscountCodes>
        <Air>
            <AirSmokingCode />
            <AirMemberships>
                <AirMembership>
                    <VendorCode />
                    <AccountNo />
                    <Status />
                    <StatusBenefits />
                    <PointTotal />
                    <SegmentTotal />
                    <NextStatus />
                    <PointsUntilNextStatus />
                    <SegmentsUntilNextStatus />
                </AirMembership>
            </AirMemberships>
            <Seat>
                <InterRowPositionCode />
                <SectionPositionCode />
            </Seat>
            <Meals>
                <MealCode />
            </Meals>
            <HomeAirport />
            <DHSRedressNumber />
            <DHSKnownTravelerNumber />
            <AirOther />
        </Air>
        <Car>
            <CarSmokingCode />
            <CarGPS />
            <CarOption />
            <CarMemberships>
                <CarMembership>
                    <VendorCode />
                    <AccountNo />
                    <Status />
                    <StatusBenefits />
                    <PointTotal />
                    <SegmentTotal />
                    <NextStatus />
                    <PointsUntilNextStatus />
                    <SegmentsUntilNextStatus />
                </CarMembership>
                <CarOther />
                <CarSkiRack />
        </Car>
        <Hotel>
            <SmokingCode />
            <HotelMemberships />
            <RoomType />
            <HotelOther />
            <PreferFoamPillows />
            <PreferCrib />
            <PreferRollawayBed />
            <PreferGym />
            <preferPool />
            <preferRestaraunt />
            <preferWheelchairAccess />
            <preferAccessForBlind />
            <preferRoomService />
            <preferEarlyCheckIn />
        </Hotel>
        <CustomFields>
            <CustomField>
                <Name />
                <Value />
            </CustomField>
        </CustomFields>
    </ProfileResponse>

###  ProfileResponse root element

The ProfileResponse root element contains the General, Telephones, Addresses, DriversLicenses, EmailAddresses, RatePreferences, DiscountCodes, Air, Car, Hotel, and CustomFields child elements. It has the attributes shown in the Data Model section.

###  General elements

The General parent element contains the following child elements:

|  Element Name |  Data Type |  Description |
| ----- | ----- | :----- |
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
|  CountryCode |  String |  The country code in from the[ ISO 3166-1 alpha-2 country code][1] specification. Format: Char(2) |
|  CompanyName |  String |  The user's company name. |

  

###  Telephones elements

The Telephones parent element contains a Telephone child element for each included telephone. The Telephone element has the attributes shown in the Response Class section and contains the following child elements:

|  Element Name |  Data Type |  Description |
| ----- | ----- | :----- |
|  ContactOptIn |  String |  Whether the user has opted in to being contacted on this phone. Only appears when the phone type is Cell or Primary Mobile Phone. Format: **True**\|**False** |
|  CountryCode |  String |  The country code in from the[ ISO 3166-1 alpha-2 country code][1] specification. Format: Char(2) |
|  PhoneNumber |  String | The phone number as entered by the user, which may contain characters such as () or -. Format: Char(60) </br> **NOTE**: The user phone number may sometimes be incorrectly parsed if there are data input issues.|
|  Extension |  String |  The phone extension. Format: Varchar(60) |

  

###  Addresses elements

The Addresses parent element contains an Address child element for each included address. The Address element has the attributes shown in the Response Class section and contains the following child elements:

**NOTE**: The values returned for the Address child elements are as entered by the user. The fields do not enforce formatting and may have a wide variety of values.

|  Element Name |  Data Type |  Description |
| ----- | ----- | :----- |
|  AttentionLine |  String |  Attention Line in the address. Format: Nvarchar(Unlimited) |
|  Line1 |  String |  Address line 1. Format: Nvarchar(Unlimited) |
|  Line2 |  String |  Address line 2. Format: Nvarchar(Unlimited) |
|  Line3 |  String |  Address line 3. Format: Nvarchar(Unlimited) |
|  MailStop |  String |  Address mail stop. Format: Nvarchar(Unlimited) |
|  City |  String |  The city name. Format: Nvarchar(Unlimited) |
|  StateProvince |  String |  The state or province. Format: Nvarchar(Unlimited) |
|  CountryCode |  String |  The country code in from the[ ISO 3166-1 alpha-2 country code][1] specification. Format: Char(2) |
|  ZipCode |  String |  The zip code. Format: Varchar(20) |
|  Longitude |  String |  Longitude value of Work Address. |
|  Latitude |  String |  Latitude value of Work Address. |

 

###  DriversLicenses elements

The DriversLicenses parent element contains a DriversLicense child element for each each included licenses. The DriversLicense element contains the following child elements:

|  Element Name |  Data Type |  Description |
| ----- | ----- | :----- |
|  DriversLicenseNumber |  String |  The user's driver license identification number. Format: Varchar(30) |
|  IssuingCountry |  String |  The country the license was issued in. Format: Char(2) |
|  IssuingState |  String |  The state the license was issued in. Format: Varchar(2) |
|  Expiration |  String |  The expiration date of the license. Format: YYYY-MM-DD |

 

###  EmailAddresses elements

The EmailAddresses parent element contains a EmailAddress child element for each included email address. It contains the following child element:

|  Element Name |  Data Type |  Description |
| ----- | ----- | :----- |
|  EmailAddress |  String | The the user's email address. The EmailAddress element has two attributes: Type and Contact. The Type attribute specifies the type of email address and the possible values are: **Business**, **Business2**, **Personal**. The Contact attribute specifies whether the email address should be used for travel notifications and the possible values are **True** or **False**. Format: Varchar(255)|

 

###  RatePreferences elements

The RatePreferences parent element contains the following child element:

|  Element Name |  Data Type |  Description |
| ----- | ----- | :----- |
|  AAARate |  Boolean |  Whether the user is eligible for the AAA rate. Format: **true**\|**false** |
|  AARPRate |  Boolean |  Whether the user is eligible for the AARP rate. Format: **true**\|**false** |
|  GovtRate |  Boolean |  Whether the user is eligible for the Government rate. Format: **true**\|**false** |
|  MilitaryRate |  Boolean |  Whether the user is eligible for the Military rate. Format: **true**\|**false** |

 

###  DiscountCodes elements

The DiscountCodes parent element contains a DiscountCode child element for each included discount code.

|  Element Name |  Data Type |  Description |
| ----- | ----- | :----- |
|  DiscountCode |  String | The discount code for the specified vendor.The DiscountCode element has a Vendor attribute that specifies the name of the vendor for the discount code. Possible values are **?**. Format: ?|

 

###  Air elements

The Air parent element contains the user's air travel preferences and contains the following child elements:

|  Element Name |  Data Type |  Description |
| ----- | ----- | :----- |
|  AirSmokingCode |  String |  Whether the user wants a flight with smoking allowed. Legacy. Format: **S**, **N**, **D**. |

|  AirMemberships |    | The AirMemberships element only appears if the request came from a travel supplier for this travel type, or from a TMC. This element contains an AirMembership child element for each included membership and includes the following child elements:  [Air Memberships elements] |

|  Seat |    | This parent element contains the user's Car travel preferences. The **Car** element contains the following child elements:   [Seat elements]|

|  Meals |    | This parent element contains the MealCode child element that indicates the meal preference of the traveler. The possible values are: </br> AVML = Vegetarian Hindu Meal </br> BBML = Baby Meal  </br> BLML = Bland Meal  </br> CHML = Child Meal  </br> DBML = Diabetic Meal  </br> FPML = Fruit Platter  </br> GFML = Gluten Intolerant Meal  </br> HNML = Hindu Meal  </br> KSML = Kosher Meal  </br> LCML = Low Calorie Meal  </br> LFML = Low Fat Meal  </br> LSML = Low Salt Meal  </br> MOML = Muslim Meal  </br> NLML = Low Lactose Meal  </br> NSML = No Salt Meal  </br> PFML = Peanut Free Meal  </br> SFML = Seafood Meal  </br> SPML = Special Request Meal </br>  VGML = Vegetarian  </br> RVML = Vegetarian Raw Vegan Meal  </br> VLML = Vegetarian Lacto-Ovo  </br> VJML = Vegetarian Jain Meal  </br> VOML = Vegetarian Oriental Meal </br> </br> **Note**: Regular Meal will not return a value for this preference. |

|  HomeAirport |  String |  The user's home airport |
|  DHSRedressNumber |  String |  TSA Redress Number |
|  DHSKnownTravelerNumber |  String |  TSA Known Traveler Number |
|  AirOther |  String |  Other Air related description |

#### Air Memberships elements
|  Element Name |  Data Type |  Description |
| ----- | ----- | :----- |
|  VendorCode |  String |  The code for the vendor that manages the loyalty program.| 
|  AccountNo |  String |  The user's account identifier in the loyalty program. |
|  Status |  String |  Name of the user's current level in the loyalty program. |
|  StatusBenefits |  String |  Description of a benefit of the loyalty program at the current status. |
|  PointTotal |  String |  The user's total number of points in the loyalty program. |
|  SegmentTotal |  String |  The user's total segments in the loyalty program. |
|  NextStatus |  String |  Name or description of next higher status level in the  loyalty program. |
|  PointsUntilNextStatus |  String |  Loyalty points required to next status level. |
|  SegmentsUntilNextStatus |  String |  Booking segment to next status level. |

#### Seat elements
|  Element Name |  Data Type |  Description |
| ----- | ----- | :----- |
|  InterRowPositionCode |  String |  Preferred position in an airplane row. Format: **Window**, **Aisle**, **Middle**, **Isolated**, **DontCare**. |
|  SectionPositionCode |  String |  Preference for position in plane. Format: **F**, **B**, **R**, **D**. |

###  Car elements

The Car parent element contains the user's car travel preferences. It contains the following child elements:

|  Element Name |  Data Type |  Description |
| ----- | ----- | :----- |
|  CarSmokingCode |  String |  Smoking car preferred. Format: **S**, **N**, **O** |
|  CarGPS |  String |  Car GPS preference. Format: **True**\|**False**. |
|  CarOption |  String |  Car option preference. Format: Char(3) |
|  CarMemberships |    |

The CarMemberships element only appears if the request came from a travel supplier for this travel type, or from a TMC. This element contains a CarMembership child element for each included membership. The CarMembership element has the following child elements:

|  Element Name |  Data Type |  Description |
| ----- | ----- | :----- |
|  VendorCode |  String |  The code for the vendor that manages the loyalty program. |   | | |
|  AccountNo |  String |  The user's account identifier in the loyalty program. |
|  Status |  String |  Name of the user's current level in the loyalty program. |
|  StatusBenefits |  String |  Description of a benefit of the loyalty program at the current status.  |
|  PointTotal |  String |  The user's total number of points in the loyalty program. |
|  SegmentTotal |  String |  The user's total segments in the loyalty program. |
|  NextStatus |  String |  Name or description of next higher status level in the  loyalty program. |
|  PointsUntilNextStatus |  String |  Loyalty points required to next status level. |
|  SegmentsUntilNextStatus |  String |  Booking segment to next status level. |

 |
|  CarOther |  String |  Other Car related description. Format: Char(30) |
|  CarSkiRack |  String |  Car ski rack preference. Format: **True**\|**False**. |

 

###  Hotel elements

The Hotel parent element contains the user's hotel travel preferences. It contains the following child elements:

|  Element Name |  Data Type |  Description |
| ----- | ----- | :----- |
|  SmokingCode |  String |  Smoking room preference. Format: **S**, **N**,**D** |
|  HotelMemberships |    |

This parent element only appears if the request came from a travel supplier for this travel type, or from a TMC. This element contains a HotelMembership child element for each included membership. The HotelMembership element has the following child elements:

|  Element Name |  Data Type |  Description |
| ----- | ----- | :----- |
|  VendorCode |  String |  The code for the vendor that manages the loyalty program. |   | | |
|  AccountNo |  String |  The user's account identifier in the loyalty program. |
|  Status |  String |  Name of the user's current level in the loyalty program. |
|  StatusBenefits |  String |  Description of a benefit of the loyalty program at the current status. |
|  PointTotal |  String |  The user's total number of points in the loyalty program. |
|  SegmentTotal |  String |  The user's total segments in the loyalty program. |
|  NextStatus |  String |  Name or description of next higher status level in the  loyalty program. |
|  PointsUntilNextStatus |  String |  Loyalty points required to next status level. |
|  SegmentsUntilNextStatus |  String |  Booking segment to next status level. |

 |
|  RoomType |  String |  Hotel room preference. Values are: H, 2, K, Q, 1, T |
|  HotelOther |  String |  Other Hotel related description. Format: Varchar(30) |
|  PreferFoamPillows |  String |  Whether the user prefers foam pillows. Format: **True**\|**False**. |
|  PreferCrib |  String |  Whether the user prefers to have a crib. Format:**True**\|**False**. |
|  PreferRollawayBed |  String |  Whether the user prefers to have a rollaway bed. Format:**True**\|**False**. |
|  PreferGym |  String |  Whether the user prefers a hotel with a gym. Format:**True**\|**False**. |
|  preferPool |  String |  Whether the user prefers a hotel with a pool. Format:**True**\|**False**. |
|  preferRestaraunt |  String |  Whether the user prefers a hotel with a restaurant. Format:**True**\|**False**. |
|  preferWheelchairAccess |  String |  Whether the user requires wheelchair access. Format: **True**\|**False**. |
|  preferAccessForBlind |  String |  Whether the user requires a room with access for blind guests. Format:** True**|**False**. |
|  preferRoomService |  String |  Whether the user prefers a hotel with room service. Format:**True**\|**False**. |
|  preferEarlyCheckIn |  String |  Whether the user prefers a hotel with early check in. Format:**True**\|**False**. |

 

###  CustomFields elements

The CustomFields parent element contains child elements that specify custom fields in a travel profile.

|  Element Name |  Data Type |  Description |
| ----- | ----- | :----- |
|  CustomFields |    |

This parent element only appears if the request came from a travel supplier for this travel type or from a TMC. This element contains a CustomField child element for each custom field with the following child elements:

|  Element Name |  Data Type |  Description |
| ----- | ----- | :----- |
|  Name |  String |  The name of the custom field. For example, Employee, Cost Centre, Fund, PassportNumber, Visa, and Assistants. |   | | |
|  Value |  String |  The value of the custom field. If the value is null, the Value child element is omitted. |

 |

 

##  Examples for Travel Suppliers

###  Example 1: Get the travel profile for the user associated with the specified OAuth 2.0 access token

####  Request

    GET {InstanceURI}/api/travelprofile/v1.0/profile HTTP/1.1
    Authorization: OAuth {access token}
    ...

####  Response

    200 OK
    Content-Type: application/xml

    <ProfileResponse Status="Active" Unique="CM12345678">
        <General>
            <NamePrefix />
            <FirstName>Maria</FirstName>
            <MiddleName>X</MiddleName>
            <LastName>Black</LastName>
            <NameSuffix />
            <PreferredName />
            <JobTitle>Finance Manager</JobTitle>
            <PreferredLanguage>en-us</PreferredLanguage>
            <EReceiptOptIn>True</EReceiptOptIn>
            <MarketingOptIn>True</MarketingOptIn>
            <HasOpenBooking>true</HasOpenBooking>
            <CountryCode>US</CountryCode>
            <CompanyName>ExampleDotCom</CompanyName>
        </General>
        <Telephones>
            <Telephone Type="Work">
                <CountryCode>001</CountryCode>
                <PhoneNumber>5555551234</PhoneNumber>
                <Extension />
            </Telephone>
            <Telephone Type="Cell">
                <CountryCode>001</CountryCode>
                <PhoneNumber>4155544321</PhoneNumber>
                <Extension />
                <ContactOptIn>True</ContactOptIn>
            </Telephone>
        </Telephones>
        <Addresses>
            <Address Type="Work">
                <AttentionLine>Finance Department</AttentionLine>
                <Line1>1234 Rainy Street.</Line1>
                <Line2>Suite 442</Line2>
                <Line3 />
                <MailStop />
                <City>Seattle</City>
                <StateProvince>WA</StateProvince>
                <CountryCode>US</CountryCode>
                <ZipCode>98102</ZipCode>
                <Longitude>-77.040706000000</Longitude>
                <Latitude>38.812690000000</Latitude>
            </Address>
            <Address Type="Home">
                <AttentionLine />
                <Line1>1234 1st Ave. S</Line1>
                <Line2>Apt. 821</Line2>
                <Line3 />
                <MailStop />
                <City>Seattle</City>
                <StateProvince>WA</StateProvince>
                <CountryCode>US</CountryCode>
                <ZipCode>98102</ZipCode>
                <Longitude>-77.040706000000</Longitude>
                <Latitude>38.812690000000</Latitude>
            </Address>
        </Addresses>
        <DriversLicenses>
            <DriversLicense>
                <DriversLicenseNumber>MIL112233452</DriversLicenseNumber>
                <IssuingCountry>US</IssuingCountry>
                <IssuingState>WA</IssuingState>
                <Expiration>2018-05-22</Expiration>
            </DriversLicense>
        </DriversLicenses>
        <EmailAddresses>
            <EmailAddress Type="Business" Contact="True">mariab@example.com</EmailAddress>
        </EmailAddresses>
        <RatePreferences>
            <AAARate>true</AAARate>
            <AARPRate>false</AARPRate>
            <GovtRate>false</GovtRate>
            <MilitaryRate>false</MilitaryRate>
        </RatePreferences>
        <DiscountCodes>
            <DiscountCode Vendor="Marriott">1234567899</DiscountCode>
        </DiscountCodes>
        <Air>
            <AirSmokingCode>S</AirSmokingCode>
            <AirMemberships>
                <AirMembership>
                    <VendorCode>AA</VendorCode>
                    <AccountNo>K12345</AccountNo>
                    <Status>Normal</Status>
                    <StatusBenefits>N/A</StatusBenefits>
                    <PointTotal>1234</PointTotal>
                    <SegmentTotal>2</SegmentTotal>
                    <NextStatus>Super</NextStatus>
                    <PointsUntilNextStatus>444</PointsUntilNextStatus>
                    <SegmentsUntilNextStatus>2</SegmentsUntilNextStatus>
                <AirMembership>
            <AirMemberships>
            <Seat>
                <InterRowPositionCode>Window</InterRowPositionCode>
                <SectionPositionCode>F</SectionPositionCode>
            </Seat>
            <Meals>
                <MealCode>VGML</MealCode>
            </Meals>
            <HomeAirport>SEA</HomeAirport>
            <AirOther />
        </Air>
        <Car>
            <CarSmokingCode>N</CarSmokingCode>
            <CarGPS>True</CarGPS>
            <CarOption />
            <CarMemberships>
                <CarMembership>
                    <VendorCode>ZE</VendorCode>
                    <AccountNo>ABCDEF</AccountNo>
                    <Status>Newbie</Status>
                    <StatusBenefits>10%  discount</StatusBenefits>
                    <PointTotal>44</PointTotal>
                    <SegmentTotal>8</SegmentTotal>
                    <NextStatus>Veteran</NextStatus>
                    <PointsUntilNextStatus>55</PointsUntilNextStatus>
                    <SegmentsUntilNextStatus>12</SegmentsUntilNextStatus>
                <CarMembership>
                <CarMembership>
                    <VendorCode>XW</VendorCode>
                    <AccountNo>GHIJK</AccountNo>
                    <Status>Gold</Status>
                    <StatusBenefits>30%  discount</StatusBenefits>
                    <PointTotal>1000</PointTotal>
                    <SegmentTotal>50</SegmentTotal>
                    <NextStatus>VIP</NextStatus>
                    <PointsUntilNextStatus>500</PointsUntilNextStatus>
                    <SegmentsUntilNextStatus>25</SegmentsUntilNextStatus>
                <CarMembership>
            </CarMemberships>
            <CarOther />
            <CarSkiRack>False</CarSkiRack>
        </Car>
        <Hotel>
            <SmokingCode>N</SmokingCode>
            <HotelMemberships />
            <RoomType>K</RoomType>
            <HotelOther />
            <PreferFoamPillows>True</PreferFoamPillows>
            <PreferCrib>False</PreferCrib>
            <PreferRollawayBed>True</PreferRollawayBed>
            <PreferGym>True</PreferGym>
            <preferPool>True</preferPool>
            <preferRestaraunt>True</preferRestaraunt>
            <preferWheelchairAccess>False</preferWheelchairAccess>
            <preferAccessForBlind>False</preferAccessForBlind>
            <preferRoomService>True</preferRoomService>
            <preferEarlyCheckIn>False</preferEarlyCheckIn>
        </Hotel>
        <CustomFields>
            <CustomField>
                <Name>Employee ID</Name>
                <Value>12345</Value>
            </CustomField>
            <CustomField>
                <Name>Cost Centre</Name>
                <Value>Headquarters</Value>
            </CustomField>
            <CustomField>
                <Name>Fund</Name>
                <Value>StudentTraining</Value>
            </CustomField>
            <CustomField>
                <Name>Passport Number></Name>
                <Value>AUS1234</Value>
            </CustomField>
            <CustomField>
                <Name>Visa</Name>
                <Value>EUvisa1234</Value>
            </CustomField>
            <CustomField>
                <Name>Assistants</Name>
                <Value>John Smith</Value>
            </CustomField>
        </CustomFields>
    </ProfileResponse>

 

###  Example 2: Get the travel profile for a user with a specific login ID

####  Request

    GET https://www.concursolutions.com/api/travelprofile/v1.0/profile?
    userid_type=login&userid_value=cm@example.com HTTP/1.1
    Authorization: OAuth {access token}
    ...

####  Response

The response is the same as in Example 1.

 

##  Examples for TMCs

###  Example 3: Get the travel profile for the user associated with the specified OAuth 2.0 access token

####  Request

    GET {InstanceURI}/api/travelprofile/v1.0/profile HTTP/1.1
    Authorization: OAuth {access token}
    ...

####  Response

    200 OK
    Content-Type: application/xml

    <ProfileResponse Status="Active" Unique="CM12345678">
        <General>
            <NamePrefix />
            <FirstName>Maria</FirstName>
            <MiddleName>X</MiddleName>
            <LastName>Black</LastName>
            <NameSuffix />
            <PreferredName />
            <JobTitle>Finance Manager</JobTitle>
            <PreferredLanguage>en-us</PreferredLanguage>
            <EReceiptOptIn>True</EReceiptOptIn>
            <MarketingOptIn>True</MarketingOptIn>
            <HasOpenBooking>true</HasOpenBooking>
            <CountryCode>US</CountryCode>
            <CompanyName>ExampleDotCom</CompanyName>
        </General>
        <Telephones>
            <Telephone Type="Work">
                <CountryCode>001</CountryCode>
                <PhoneNumber>5555551234</PhoneNumber>
                <Extension />
            </Telephone>
            <Telephone Type="Cell">
                <CountryCode>001</CountryCode>
                <PhoneNumber>4155544321</PhoneNumber>
                <Extension />
                <ContactOptIn>True</ContactOptIn>
            </Telephone>
        </Telephones>
        <Addresses>
            <Address Type="Work">
                <AttentionLine>Finance Department</AttentionLine>
                <Line1>1234 Rainy Street.</Line1>
                <Line2>Suite 442</Line2>
                <Line3 />
                <MailStop />
                <City>Seattle</City>
                <StateProvince>WA</StateProvince>
                <CountryCode>US</CountryCode>
                <ZipCode>98102</ZipCode>
                <Longitude>-77.040706000000</Longitude>
                <Latitude>38.812690000000</Latitude>
            </Address>
            <Address Type="Home">
                <AttentionLine />
                <Line1>1234 1st Ave. S</Line1>
                <Line2>Apt. 821</Line2>
                <Line3 />
                <MailStop />
                <City>Seattle</City>
                <StateProvince>WA</StateProvince>
                <CountryCode>US</CountryCode>
                <ZipCode>98102</ZipCode>
                <Longitude>-77.040706000000</Longitude>
                <Latitude>38.812690000000</Latitude>
            </Address>
        </Addresses>
        <DriversLicenses>
            <DriversLicense>
                <DriversLicenseNumber>MIL112233452</DriversLicenseNumber>
                <IssuingCountry>US</IssuingCountry>
                <IssuingState>WA</IssuingState>
                <Expiration>2018-05-22</Expiration>
            </DriversLicense>
        </DriversLicenses>
        <EmailAddresses>
            <EmailAddress Type="Business" Contact="True">mariab@example.com</EmailAddress>
        </EmailAddresses>
        <RatePreferences>
            <AAARate>true</AAARate>
            <AARPRate>false</AARPRate>
            <GovtRate>false</GovtRate>
            <MilitaryRate>false</MilitaryRate>
        </RatePreferences>
        <DiscountCodes>
            <DiscountCode Vendor="Marriott">1234567899</DiscountCode>
            <DiscountCode Vendor="IHG">111222333</Discount
        </DiscountCodes>
        <Air>
            <AirSmokingCode>S</AirSmokingCode>
            <AirMemberships>
                <AirMembership>
                    <VendorCode>AA</VendorCode>
                    <AccountNo>K12345</AccountNo>
                    <Status>Normal</Status>
                    <StatusBenefits>N/A</StatusBenefits>
                    <PointTotal>1234</PointTotal>
                    <SegmentTotal>2</SegmentTotal>
                    <NextStatus>Super</NextStatus>
                    <PointsUntilNextStatus>444</PointsUntilNextStatus>
                    <SegmentsUntilNextStatus>2</SegmentsUntilNextStatus>
                <AirMembership>
            <AirMemberships>
            <Seat>
                <InterRowPositionCode>Window</InterRowPositionCode>
                <SectionPositionCode>NOPREF</SectionPositionCode>
            </Seat>
            <Meals>
                <MealCode>VGML</MealCode>
            </Meals>
            <HomeAirport>SEA</HomeAirport>
            <AirOther />
        </Air>
        <Car>
            <CarSmokingCode>N</CarSmokingCode>
            <CarGPS>True</CarGPS>
            <CarOption />
            <CarMemberships>
                <CarMembership>
                    <VendorCode>ZE</VendorCode>
                    <AccountNo>ABCDEF</AccountNo>
                    <Status>Newbie</Status>
                    <StatusBenefits>10%  discount</StatusBenefits>
                    <PointTotal>44</PointTotal>
                    <SegmentTotal>8</SegmentTotal>
                    <NextStatus>Veteran</NextStatus>
                    <PointsUntilNextStatus>55</PointsUntilNextStatus>
                    <SegmentsUntilNextStatus>12</SegmentsUntilNextStatus>
                <CarMembership>
                <CarMembership>
                    <VendorCode>XW</VendorCode>
                    <AccountNo>GHIJK</AccountNo>
                    <Status>Gold</Status>
                    <StatusBenefits>30%  discount</StatusBenefits>
                    <PointTotal>1000</PointTotal>
                    <SegmentTotal>50</SegmentTotal>
                    <NextStatus>VIP</NextStatus>
                    <PointsUntilNextStatus>500</PointsUntilNextStatus>
                    <SegmentsUntilNextStatus>25</SegmentsUntilNextStatus>
                <CarMembership>
            </CarMemberships>
            <CarOther />
            <CarSkiRack>False</CarSkiRack>
        </Car>
        <Hotel>
            <SmokingCode>N</SmokingCode>
            <HotelMemberships />
            <RoomType>K</RoomType>
            <HotelOther />
            <PreferFoamPillows>True</PreferFoamPillows>
            <PreferCrib>False</PreferCrib>
            <PreferRollawayBed>True</PreferRollawayBed>
            <PreferGym>True</PreferGym>
            <preferPool>True</preferPool>
            <preferRestaraunt>True</preferRestaraunt>
            <preferWheelchairAccess>False</preferWheelchairAccess>
            <preferAccessForBlind>False</preferAccessForBlind>
            <preferRoomService>True</preferRoomService>
            <preferEarlyCheckIn>False</preferEarlyCheckIn>
        </Hotel>
        <CustomFields>
            <CustomField>
                <Name>Employee ID</Name>
                <Value>12345</Value>
            </CustomField>
            <CustomField>
                <Name>Cost Centre</Name>
                <Value>Headquarters</Value>
            </CustomField>
            <CustomField>
                <Name>Fund</Name>
                <Value>StudentTraining</Value>
            </CustomField>
            <CustomField>
                <Name>Passport Number></Name>
                <Value>AUS1234</Value>
            </CustomField>
            <CustomField>
                <Name>Visa</Name>
                <Value>EUvisa1234</Value>
            </CustomField>
            <CustomField>
                <Name>Assistants</Name>
                <Value>John Smith</Value>
            </CustomField>
        </CustomFields>
    </ProfileResponse>

 

###  Example 4: Get the travel profile for a user with a specific login ID

####  Request

    GET https://www.concursolutions.com/api/travelprofile/v1.0/profile?
    userid_type=login&userid_value=cm@example.com HTTP/1.1
    Authorization: OAuth {access token}
    ...

####  Response

The response is the same as in Example 3.

 



[1]: http://en.wikipedia.org/wiki/ISO_3166-1_alpha-
