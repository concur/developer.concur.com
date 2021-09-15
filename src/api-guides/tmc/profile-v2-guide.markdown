---
title: Guide to the Travel Profile v2 API, TMC Edition
layout: reference
parent: TMC
nav_order: 2
---

# Guide to the Travel Profile v2 API, TMC Edition
 Last Revised: April 08, 2021

This endpoint provides travel profile information for a specified traveler. It replaces the previous version of travel profile synchronization known as XML Profile Sync or XML Sync. While XML Profile sync is internal to the Concur Travel
offering, the travel profile APIs are publicly exposed and allows RESTful developed applications to pull and post information such as the traveler’s identity, contact information, rate preferences, discount codes by travel type, as well as custom fields. The 2.0 version of the API was originally released in late 2016. The updated 2.1 version of the API, specific to TMCs, was released in December 2019.

This guide is part of a collection designed for TMCs, to read the shared content about audience, development, authentication, and other key information see the [TMC Guide Overview]( /api-guides/tmc/tmc-overview.html).

## <a name="access-control"></a>Travel Access Control Service

User profile information:

---|User level tokens from ZZZ Company|Compay level tokens from ZZZ Company|Agency A’s company level token from ZZZ Company|Agency B’s company level token from ZZZ Company
---|---|---|---|---
Travel Profile Summary|Unrestricted Agency A and Agency B data accessible|Unrestricted Agency A and Agency B data accessible|Agency A profiles only|Agency B profiles only
Travel Profile POST|Unrestricted Agency A and Agency B data accessible|Unrestricted Agency A and Agency B data accessible|Agency A profile only|Agency B profile only
Travel Profile GET|Unrestricted Agency A and Agency B data accessible|Unrestricted Agency A and Agency B data accessible|Agency A profiles only|Agency B profiles only
Form of Payment POST|Unrestricted Agency A and Agency B data accessible|Unrestricted Agency A and Agency B data accessible|Agency A FOP only|Agency B FOP only
Form of Payment GET|Unrestricted Agency A and Agency B data accessible|Unrestricted Agency A and Agency B data accessible|Agency A FOP only|Agency B FOP only

## Application Scopes

Travel Profile applications by default have the following scopes registered:

 * openid
 * user.read
 * company.read
 * FOP
 * GHOST
 * TRVPRF
 * PASSV
 * EMERG
 * TSAI
 * TMCSP
 * MEDIC
 * UNUTX
 * NOTIF
 * COMPD

Itinerary (ITINER) and Receipts (receipts.read, receipts.write) scopes for DEV applications available upon request. Explanations for these scopes are documented at [List of Connect API Scopes](https://developer.concur.com/api-reference/authentication/scopes.html#connectscopes). If you wish to have your application include additional scopes or endpoints, you must have your application re-certified.

## <a name="geolocation"></a>Geolocation

Host Location|Geolocation based on location of Company GUID|URL to use for Travel Profile
------|-----|-----
EMEA|https://emea.api.concursolutions.com/oauth2/v0/token|https://emea.api.Concursolutions.com/api/travelprofile/v2.0/profile
US|https://us.api.concursolutions.com/oauth2/v0/token|https://us.api.Concursolutions.com/api/travelprofile/v2.0/profile
PSCC|https://usg.api.Concursolutions.com/oauth2/v0/token|https://usg.api.Concursolutions.com/api/travelprofile/v2.0/profile

## User Profile Web Service

### Get User Information

https://developer.concur.com/api-explorer/v3-0/Users.html

If you are still in transition from legacy Profile Sync to the Travel Profile API, it may be necessary to use the User API to retrieve user’s login IDs or Email IDs – which the Travel Itinerary API v1.x Web Service uses as its matching fact for Travel Itinerary retrievals or updates.

Use the following request parameters to filter your searches:

#### Retrieve All Active Users

GET

```
https://us.api.Concursolutions.com/users?offset=0&limit=100&isactive=true
Authorization: Bearer {access_token}
```

#### Retrieve User Information by Primary Email ID

GET

```
https://www.Concursolutions.com/api/v3.0/common/users?primaryEmail=dutchinw@yahoo.com&active=true HTTP/1.

Authorization: Bearer {access_token}
Content Type:
```

#### Retrieve User Information by Login ID

GET

```
https://www.Concursolutions.com/api/v3.0/common/users?user=dutchinw10@sureware-connect.com&active=true HTTP/1.
Authorization: Bearer {access_token}
```

## Travel Profile v2.0 Web Service

The Travel Profile service consists of a set of resources that provide travel profile functionality for developers, travel suppliers, and travel management companies (TMCs). This Web Service is designed to replace the XML Profile Sync built into the Concur Travel product. XML Profile Sync is being deprecated. The profile web services can be used to create, update, and retrieve travel profile information for a specified traveler, or a list of travelers.

The XSD (schema) for Profile API v2.0 is very similar to the existing schema for Profile Sync. The XSD is published on developer.concur.com. The travel profile summary XSD is available here. A spreadsheet of specific changes between XML Profile Sync and Profile API is available upon request.

### GET Profile Information

>**NOTE**: Our development organization has enforced the inclusion of the LastModifiedDate parameter. Users who omit LastModifiedDate, will receive an error. For users who would like to get profile summaries for all of their users, they can set LastModifiedDate to 1900-01-01T12:00:00.

#### Retrieve a List of Travel Profile Summaries by Last Modified Date (with Paging)

GET

```
{{geolocation}}
/api/travelprofile/v2.0/summary?Status="Active"&Page=1&LastModifiedDate=202 0-02-19T00:00:00&userid_type=login&userid_value=ALL&includeMetadata=true&ItemsPe rPage=200
Content-type:application/xml
Authorization: Bearer {access_token}
```

#### Retrieve a List of Travel Profile Summaries by Last Modified Date and Config ID (with Paging)

GET

```
GET
{{geolocation}}
/api/travelprofile/v2.0/summary?Status="Active"&Page=1&LastModifiedDate=202 0-02-19T00:00:00&travelConfigs=100,200,3000&userid_type=login&userid_value=ALL&includeMetadata=true&ItemsPerPage=200

Content-type:application/xml
Authorization: Bearer {access_token}
```

#### Retrieve Traveler Profile Details by Login ID

GET

```
https://us.api.Concursolutions.com/api/travelprofile/v2.0/profile?userid_type=login&userid_value=dutchin10@domain-connect.com

Content-type:application/xml
Authorization: Bearer {access_token}
```

#### Retrieve Travel Profile Information by UUID (FUTURE RELEASE)

GET

```
https://us.api.Concursolutions.com/api/travelprofile/v2.0/profile?uuid=636a6e64-f516-4d84-ae7e-c833c9c20cdc

Content-type:application/xml
Authorization: Bearer {access_token}
```

#### Retrieve User Information in Bulk (Limited)

GET

```
https://us.api.Concursolutions.com/users?offset=0&limit=100&isactive=true

Content-type:application/xml
Authorization: Bearer {access_token}
Preview: https://developer.concur.com/api-reference/authentication/get-users31.html
```

## Create Travel Profile

### Create a Basic Traveler Record

#### REQUEST

POST

```
https://us.api.Concursolutions.com/api/travelprofile/v2.0/profile

Content-type:application/xml
Authorization: Bearer {access_token}
```

BODY

```
<?xml version="1.0" encoding="UTF-8"?>
<ProfileResponse xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" Action="Create" LoginId="dutchinw10@domain-connect.com">
  <General>
    <FirstName>Dutchin</FirstName>
    <LastName>Wong10</LastName>
    <TravelConfigID>113938</TravelConfigID>
  </General>
  <Password>Welcome123</Password>
</ProfileResponse>
```

#### RESPONSE

```
<?xml version="1.0" encoding="UTF-8"?>
<TravelProfileResponseMessage>
  <Code>S001</Code>
  <Message>Success, no errors or warnings reported</Message>
</TravelProfileResponseMessage>
```
### Minimum Elements Required to Create a New User

* First Name
* Last Name
* Travel Configuration ID
* Login ID
* Password
* Rule Class (uses Default Rule Class if not provided).
* Omitted elements will be ignored and not updated.
* Empty elements of datatype string will be cleared out; nillable elements will be cleared out if set as nil. Refer to XSD for nillable elements.

>**NOTE**: To create or update a traveler’s profile with program loyalty information, your application must be registered in our Travel Supplier system. A default rule class must be defined, or the user record may be orphaned.

### Create a Full Traveler Record

#### REQUEST

POST

```
https://us.api.Concursolutions.com/api/travelprofile/v2.0/profile

Content-type:application/xml
Authorization: Bearer {access_token}
```

BODY

```
<?xml version="1.0" encoding="UTF-8"?>
<ProfileResponse Action="Create" Status="Active"LoginId="dutchinw10@domain-connect.com">
  <General>
    <NamePrefix>Mr</NamePrefix>
    <FirstName>Dutchin</FirstName>
    <MiddleName>W</MiddleName>
    <LastName>Wong</LastName>
    <NameSuffix>Sr.</NameSuffix>
    <PreferredName />
    <JobTitle />
    <CostCenter>
    </CostCenter>
    <CompanyEmployeeID>100011</CompanyEmployeeID>
    <Division> 1000 </Division>
    <PreferredLanguage>en</PreferredLanguage>
    <EReceiptOptIn>true</EReceiptOptIn>
    <RuleClass>Default Travel Class</RuleClass>
    <TravelConfigID>113938</TravelConfigID>
    <GDSProfileName>DUTCHINW10/2</GDSProfileName>
  </General>
  <EmergencyContact>
    <Name>Heather Wong</Name>
    <Relationship>Spouse</Relationship>
    <Phones>
      <Phone Type="DayTime">425-999-8665</Phone>
      <Phone Type="Alternate">425-999-9695</Phone>
    </Phones>
    <Address>
      <Street>601 108th Ave Suite 1000 </Street>
      <City>Bellevue</City>
      <StateProvince>WA</StateProvince>
      <PostalCode>98004</PostalCode>
      <CountryCode>US</CountryCode>
    </Address>
  </EmergencyContact>
  <Telephones>
    <Telephone Type="Home">
      <CountryCode>US</CountryCode>
      <PhoneNumber>888-883 -8411</PhoneNumber>
      <Extension />
    </Telephone>
    <Telephone Type="Work">
      <CountryCode>US</CountryCode>
      <PhoneNumber>4255905248</PhoneNumber>
      <Extension />
    </Telephone>
    <Telephone Type="Cell" ContactOptIn="false" PrimaryMobile="true">
      <CountryCode>US</CountryCode>
      <PhoneNumber>4255905248</PhoneNumber>
      <Extension />
      <MobileDevice>Unknown</MobileDevice>
    </Telephone>
    <Telephone Type="Work">
      <CountryCode>01</CountryCode>
      <PhoneNumber>4255905248</PhoneNumber>
      <Extension />
    </Telephone>
  </Telephones>
  <Addresses>
    <Address Type="Home">
      <Street>601 108th Ave #1000</Street>
      <City>Bellevue</City>
      <StateProvince>WA</StateProvince>
      <PostalCode>98045</PostalCode>
      <CountryCode>US</CountryCode>
    </Address>
    <Address Type="Work">
      <Street>601 108th Ave #1000</Street>
      <City>Bellevue</City>
      <StateProvince>WA</StateProvince>
      <PostalCode>98004</PostalCode>
      <CountryCode>US</CountryCode>
    </Address>
  </Addresses>
  <HasNoPassport>true</HasNoPassport>
  <EmailAddresses>
    <EmailAddress Contact="true"Type="Business">dutchinw@yahoo.com</EmailAddress>
    <EmailAddress Contact="true"Type="Personal">dutchinw@yahoo.com</EmailAddress>
    <EmailAddress Contact="true"Type="Personal">dutchinw@yahoo.com</EmailAddress>
  </EmailAddresses>
  <RatePreferences>
    <AAARate>true</AAARate>
    <AARPRate>false</AARPRate>
    <GovtRate>false</GovtRate>
    <MilitaryRate>false</MilitaryRate>
  </RatePreferences>
  <DiscountCodes>
    <DiscountCode Vendor="Intercontinental HotelsGroup">123456</DiscountCode>
    <DiscountCode Vendor="American Airlines" />
    <DiscountCode Vendor="JetBlue" />
    <DiscountCode Vendor="Delta" />
    <DiscountCode Vendor="Enterprise" />
    <DiscountCode Vendor="Airtran Air" />
    <DiscountCode Vendor="United" />
    <DiscountCode Vendor="US Airways" />
    <DiscountCode Vendor="Southwest" />
    <DiscountCode Vendor="Hertz" />
    <DiscountCode Vendor="Avis" />
    <DiscountCode Vendor="National" />
  </DiscountCodes>
  <Air>
    <AirMemberships>
      <AirMembership>
        <VendorCode>AS</VendorCode>
        <AccountNo>59128856</AccountNo>
      </AirMembership>
    </AirMemberships>
    <Seat>
      <InterRowPositionCode>Aisle</InterRowPositionCode>
      <SectionPositionCode>Forward</SectionPositionCode>
    </Seat>
    <AirOther />
  </Air>
  <Rail>
    <Seat>Window</Seat>
    <Coach>CoachWithTable</Coach>
    <NoiseComfort>MobileSpace</NoiseComfort>
    <Bed>DontCare</Bed>
    <BedCategory>DontCare</BedCategory>
    <Berth>DontCare</Berth>
    <Deck>DontCare</Deck>
    <SpaceType>DontCare</SpaceType>
    <FareSpaceComfort>DontCare</FareSpaceComfort>
    <SpecialMeals>DontCare</SpecialMeals>
    <Contingencies>DontCare</Contingencies>
    <RailMemberships />
  </Rail>
  <Car>
    <CarSmokingCode>NonSmoking</CarSmokingCode>
    <CarGPS>false</CarGPS>
    <CarType>Standard</CarType>
    <CarMemberships>
      <CarMembership>
        <VendorCode>ZI</VendorCode>
        <AccountNo>9WZ25K</AccountNo>
        <Status>PREFERRED</Status>
      </CarMembership>
    </CarMemberships>
    <CarOther />
    <CarSkiRack>false</CarSkiRack>
    <CarTransmission>Automatic</CarTransmission>
  </Car>
  <Hotel>
    <HotelSmokingCode>NonSmoking</HotelSmokingCode>
    <HotelMemberships>
      <HotelMembership>
        <VendorCode>SW</VendorCode>
        <AccountNo>713399498</AccountNo>
      </HotelMembership>
      <HotelMembership>
        <VendorCode>6C</VendorCode>
        <AccountNo>283629903</AccountNo>
      </HotelMembership>
    </HotelMemberships>
    <RoomType>King</RoomType>
    <PreferFoamPillows>true</PreferFoamPillows>
    <PreferCrib>false</PreferCrib>
    <PreferRollawayBed>false</PreferRollawayBed>
    <PreferGym>false</PreferGym>
    <PreferPool>false</PreferPool>
    <PreferRestaurant>false</PreferRestaurant>
    <PreferWheelchairAccess>false</PreferWheelchairAccess>
    <PreferAccessForBlind>false</PreferAccessForBlind>
    <PreferRoomService>false</PreferRoomService>
    <PreferEarlyCheckIn>false</PreferEarlyCheckIn>
  </Hotel>
  <CustomFields />
  <Roles />
  <TSAInfo>
    <Gender>Male</Gender>
    <DateOfBirth>1900-01-01</DateOfBirth>
    <NoMiddleName>false</NoMiddleName>
    <PreCheckNumber />
    <RedressNumber />
  </TSAInfo>
  <Password>Welcome123</Password>
</ProfileResponse>
```

#### RESPONSE

```
<?xml version="1.0" encoding="UTF-8"?>
<TravelProfileResponseMessage>
  <Code>S001</Code>
  <Message>Success, no errors or warnings reported</Message>
</TravelProfileResponseMessage>
```

>**NOTE**: The Preferred Language field has an allowed list of canonical values. Any value that is not on this list, will be returned as an empty string beginning in April 2021. Any value that is not on this list will be written to the SAP Concur profile as an empty string beginning in May 2021 and a warning will be returned.


The Preferred Language field allowed list is:

![Preferred language list](images/profile-preferred-language.png)

### Update a Traveler’s Unused Tickets

#### REQUEST

POST

```
https://us.api.Concursolutions.com/api/travelprofile/v2.0/profile

Content-type:application/xml
Authorization: Bearer {access_token}
```

BODY

```
<?xml version="1.0" encoding="UTF-8"?>
<ProfileResponse Action="Update" Status="Active"LoginId="dutchinw10@domain-connect.com">
  <UnusedTickets>
    <UnusedTicket>
      <Carrier>UA</Carrier>
      <TicketNumber>HETJUNCRHT</TicketNumber>
      <RecordLocator>L64A17</RecordLocator>
      <BaseFare>731.50</BaseFare>
      <Taxes>82.42</Taxes>
      <Fees>148.42</Fees>
      <Currency>USD</Currency>
      <TicketType>W</TicketType>
      <IssueDate>2017-10-13</IssueDate>
      <ExpirationDate>2022-10- 14</ExpirationDate>
      <Notes>TRIP CHANGE</Notes>
    </UnusedTicket>
  </UnusedTickets>
</ProfileResponse>

```

##### RESPONSE

```
<?xml version="1.0" encoding="UTF-8"?>
<TravelProfileResponseMessage>
  <Code>S001</Code>
  <Message>Success, no errors or warnings reported</Message>
</TravelProfileResponseMessage>

```
#### Deactivate a Traveler Profile by Login ID

##### REQUEST

POST

```
https://us.api.Concursolutions.com/api/travelprofile/v2.0/profile

Content-type:application/xml
Authorization: Bearer {access_token}
```

BODY

```
<?xml version="1.0" encoding="UTF-8"?>
<ProfileResponse Action="Update" Status="Inactive"LoginId="dutchinw10@domain-connect.com">```
```

##### RESPONSE

```
<?xml version="1.0" encoding="UTF-8"?>
<TravelProfileResponseMessage>
  <Code>S001</Code>
  <Message>Success, no errors or warnings reported</Message>
</TravelProfileResponseMessage>
```

RESULT

```
<?xml version="1.0" encoding="UTF-8"?>
<ProfileResponse xmlns:xsd="http://www.w3.org/2001/XMLSchema"
xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" Status="Inactive"LoginId="dutchinw03@sureware-connect.com" Unique="">
```

## Validate Your XML Against Our XSD

The Travel Profile API v2.0 incorporates internal XML validation. If you receive the error message here is an error in XML document, it is due to an issue with your XML formatting. The request will not even reach the SAP Concur profile service because the XML issue(s) prevents the system from accepting and processing the request.

To validate your XML, a public online application is available. Launch https://www.freeformatter.com/xml-validator-xsd.html to validate your XML against the Travel Profile v2.0 API XSD. In the top pane of FreeFormatter, paste your XML, and in the bottom pane paste our XSD (https://www.Concursolutions.com/ns/TravelUserProfile.xsd).


Sample response:

```
Cvc-complex-type.2.4.a: Invalid Content Was Found Starting With Element
'ClientName'. One Of '{NamePrefix, FirstName, MiddleName, LastName,
NameSuffix, PreferredName, JobTitle, CostCenter, CompanyEmployeeID,
Division, PreferredLanguage, EReceiptOptIn, HasOpenBooking, CountryCode,
CompanyName, CompanyID, RuleClass, TravelConfigID, MedicalAlerts,
AgencyNumber, SearchId, GDSProfileName, SabreProfileId}' Is Expected., Line
'3', Column '17'.
Cvc-enumeration-valid: Value '' Is Not Facet-valid With Respect To
Enumeration '[BLML, CHML, DBML, FPML, GFML, HNML, BBML, KSML, LCML, LSML,
MOML, NSML, NLML, PFML, SFML, VLML, VGML, KVML, RVML, AVML]'. It Must Be A
Value From The Enumeration., Line '59', Column '26'.
Cvc-type.3.1.3: The Value '' Of Element 'MealCode' Is Not Valid., Line
'59', Column '26'.
Cvc-enumeration-valid: Value '' Is Not Facet-valid With Respect To
Enumeration '[DontCare, Economy, Compact, Intermediate, Standard, FullSize,
Luxury, Premium, Mini, EconomyHybrid, CompactHybrid, IntermediateHybrid,
StandardHybrid, FullSizeHybrid, MiniVan, StandardSUV, FullSizeSUV,
FullSizePickup, Specialized, IntermediateSUV]'. It Must Be A Value From The
Enumeration., Line '66', Column '16'.
Cvc-type.3.1.3: The Value '' Of Element 'CarType' Is Not Valid., Line '66',
Column '16'.
Cvc-datatype-valid.1.2.1: '' Is Not A Valid Value For 'date'., Line '81',
Column '20'.
Cvc-type.3.1.3: The Value '' Of Element 'DateOfBirth' Is Not Valid., Line
'81', Column '20'.
```

## Form of Payment Web Service

>**NOTE**: To retrieve, create, or update a traveler’s form of payment, your application must be registered in our Travel Supplier system.

### Create a Form of Payment by Login ID

#### REQUEST

POST

```
https://www.Concursolutions.com/api/travelprofile/v2.0/fop
Content-type:application/xml
Authorization: Bearer {access_token}
```

BODY

```
<?xml version="1.0" encoding="UTF-8"?>
<CorporateFOPResponse xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"LoginId="dutchinw10@domain-connect.com">
  <CreditCards>
    <CreditCard DisplayName="My Visa Card">
      <Vendor>Visa</Vendor>
      <AccountNo>4XXXXXXXXXXXXXXXXXX1</AccountNo>
      <ExpDate>2021-09</ExpDate>
      <NameOnCard>SAP Concur Developer</NameOnCard>
      <UsageType>Business</UsageType>
      <BillingAddress>
        <StreetAddress>123 Home St</StreetAddress>
        <City>Bellevue</City>
        <StateProvince>WA</StateProvince>
        <Country>US</Country>
        <ZipCode>98006</ZipCode>
      </BillingAddress>
      <Segments>
        <Segment Type="Air" Default="false" />
        <Segment Type="Hotel" Default="false" />
        <Segment Type="Car" Default="false" />
        <Segment Type="Rail" Default="false" />
      </Segments>
    </CreditCard>
  </CreditCards>
</CorporateFOPResponse>
```

##### RESPONSE

```
<?xml version="1.0" encoding="UTF-8"?>
<TravelProfileResponseMessage>
  <Code>S001</Code>
  <Message>Success, no errors or warnings reported</Message>
</TravelProfileResponseMessage>

```
### Update Form of Payment by Login ID

##### REQUEST

POST

```
https://www.Concursolutions.com/api/travelprofile/v2.0/fop
Content-type:application/xml
Authorization: Bearer {access_token}
```

BODY

```
<?xml version="1.0" encoding="UTF-8"?>
<CorporateFOPResponse xmlns:xsi="http://www.w3.org/2001/XMLSchema- instance"LoginId="dutchinw10@domain-connect.com">
  <CreditCards>
    <CreditCard DisplayName="AMEX Corporate">
      <Vendor>AmericanExpress</Vendor>
      <AccountNo>3XXXXXXXXXXXXXXXXXXXX1</AccountNo>
      <ExpDate>2021-07</ExpDate>
      <NameOnCard>Dutchin Wong</NameOnCard>
      <UsageType>Business</UsageType>
      <BillingAddress>
        <StreetAddress>601 108th Ave Suite 1000</StreetAddress>
        <City>Bellevue</City>
        <StateProvince>WA</StateProvince>
        <Country>US</Country>
        <ZipCode>98004</ZipCode>
      </BillingAddress>
      <Segments>
        <Segment Type="Air" Default="true" />
        <Segment Type="Hotel" Default="true" />
        <Segment Type="Car" Default="true" />
        <Segment Type="Rail" Default="true" />
      </Segments>
    </CreditCard>
    <CreditCard DisplayName="British Airways Visa">
      <Vendor>Visa</Vendor>
      <AccountNo>4###################1</AccountNo>
      <ExpDate>2022-05</ExpDate>
      <NameOnCard>Dutchin Wong</NameOnCard>
      <UsageType>Business</UsageType>
      <BillingAddress>
        <StreetAddress>601 108th Ave Suite 1000</StreetAddress>
        <City>Bellevue</City>
        <StateProvince>WA</StateProvince>
        <Country>US</Country>
        <ZipCode>98004</ZipCode>
      </BillingAddress>
      <Segments>
        <Segment Type="Air" Default="false" />
        <Segment Type="Hotel" Default="false" />
        <Segment Type="Car" Default="false" />
        <Segment Type="Rail" Default="false" />
      </Segments>
    </CreditCard>
    <CreditCard DisplayName="Alaska BofA Visa">
      <Vendor>Visa</Vendor>
      <AccountNo> 4####################1</AccountNo>
      <ExpDate>2022-04</ExpDate>
      <NameOnCard>Dutchin Wong</NameOnCard>
      <UsageType>Business</UsageType>
      <BillingAddress>
        <StreetAddress>601 108th Ave Suite 1000</StreetAddress>
        <City>Bellevue</City>
        <StateProvince>WA</StateProvince>
        <Country>US</Country>
        <ZipCode>98004</ZipCode>
      </BillingAddress>
      <Segments>
        <Segment Type="Air" Default="true" />
        <Segment Type="Hotel" Default="true" />
        <Segment Type="Car" Default="true" />
        <Segment Type="Rail" Default="true" />
      </Segments>
    </CreditCard>
    <CreditCard DisplayName="BECU Mastercard">
      <Vendor>MasterCard</Vendor>
      <AccountNo>5XXXXXXXXXXXXXXXXXX</AccountNo>
      <ExpDate>2022-05</ExpDate>
      <NameOnCard>Dutchin Wong</NameOnCard>
      <UsageType>Business</UsageType>
      <BillingAddress>
        <StreetAddress>601 108th Ave Suite 1000</StreetAddress>
        <City>Bellevue</City>
        <StateProvince>WA</StateProvince>
        <Country>US</Country>
        <ZipCode>98004</ZipCode>
      </BillingAddress>
      <Segments>
        <Segment Type="Air" Default="false" />
        <Segment Type="Hotel" Default="false" />
        <Segment Type="Car" Default="false" />
        <Segment Type="Rail" Default="false" />
      </Segments>
    </CreditCard>
  </CreditCards>
</CorporateFOPResponse>
```

##### RESPONSE

```
<?xml version="1.0" encoding="UTF-8"?>
<TravelProfileResponseMessage>
  <Code>S001</Code>
  <Message>Success, no errors or warnings reported</Message>
</TravelProfileResponseMessage>

```
#### Form of Payment Update Functionality

Existing credit cards are identified by a credit card number and a vendor (for example, Mastercard, Visa). With the FOP API, functionality for updating credit cards remains the same as XML Profile Sync. If there are no changes to the traveler’s payment types, the application must provide all payment types to the traveler’s profile otherwise the payment types will be removed.

For example, if the partner provides a list with credit cards A, B, D, & E and the SAP Concur database contained credit cards A, B, C, & D, credit cards A, B, & D would be ignored (updated if there were changes) and the platform would remove card C from the database. Only card E would be added to the database.

The best practice for this web service is to retrieve the traveler’s form of payments, compare it to any existing source, and then update it. Even if the traveler wishes to only add/update a single credit card via the UI, the partner must provide all the existing credit cards for the traveler, which they should have received when they initially retrieved the profile. Use the following matrix as guidance.

![Form of payment matrix](images/profile-matrix.png)

>**NOTE**: The traveler may have multiple credit cards in their profile, each with indicators of whether the card is a ghost card (Corporate) or personal card (Business), Mandatory or Default. Corporate cards or ghost cards cannot be created or updated via the API.

## FAQ

Q. Can I create a traveler profile with all the fields from a response?

A. Yes. Be aware that there are several fields and potentially custom fields in a traveler’s profile that require that other user records such as managers or approvers exist in the system first. Therefore it may be necessary to create a traveler record with default fields before updating the rest of a traveler’s profile with additional details.

Q. I tried to update a travel profile using a response from GET travel profile but I’m getting errors. What should I do?

A.

```
<?xml version="1.0" encoding="UTF-8"?>
<Error>
  <Message>
    <TravelProfileResponseMessage>
      <Code>E001</Code>
      <Message>Cannot update this element: General/HasOpenBooking</Message>
      <Field>General/HasOpenBooking</Field>
    </TravelProfileResponseMessage>
    <TravelProfileResponseMessage>
      <Code>E001</Code>
      <Message>Cannot update this element: General/CountryCode</Message>
      <Field>General/CountryCode</Field>
    </TravelProfileResponseMessage>
    <TravelProfileResponseMessage>
      <Code>E001</Code>
      <Message>Cannot update this element: General/CompanyName</Message>
      <Field>General/CompanyName</Field>
    </TravelProfileResponseMessage>
    <TravelProfileResponseMessage>
      <Code>E001</Code>
      <Message>Cannot update this element: General/CompanyID</Message>
      <Field>General/CompanyID</Field>
    </TravelProfileResponseMessage>
    <TravelProfileResponseMessage>
      <Code>E001</Code>
      <Message>Cannot update this element: General/AgencyNumber</Message>
      <Field>General/AgencyNumber</Field>
    </TravelProfileResponseMessage>
  </Message>
  <Server-Time>2017-09-19T16:41:39</Server-Time>
<Id>D3772078-980A-48F7-BF7E-81D6AA04F047</Id>
</Error>
```

**SOLUTION**: Remove the above elements from your profile POST

**ERROR**:

```
<?xml version="1.0" encoding="UTF-8"?>
<TravelProfileResponseMessage>
  <Code>W007</Code>
  <Message>The CountryCode field is required.</Message>
  <Field>Telephones/CountryCode</Field>
  <CorrelationId>69102551-e208-4f59-8ba8-1b44d0b6842c</CorrelationId>
</TravelProfileResponseMessage>
```
```
<?xml version="1.0" encoding="UTF-8"?>
<TravelProfileResponseMessage>
  <Code>W002</Code>
  <Message>The field CountryCode must be a string with a maximum lengthof 2.</Message>
  <Field>Telephones/CountryCode</Field>
  <CorrelationId>6e04c764-ccd7-4aad-82cd-33506aac73f5</CorrelationId>
</TravelProfileResponseMessage>
```

**SOLUTION** : Ensure the correct 2 letter country code is included. When the above errors are resolved (by removing the offending elements) you may encounter one last error. Remove these nodes for loyalty programs (Air, Rail, Car). Also, make sure you specify the correct login id.

```
<SegmentTotal />
<PointsUntilNextStatus />
<SegmentsUntilNextStatus />
```
```
<Error>
<Message>Invalid User:dutchinw@anybizbu.com</Message>
<Server-Time>2017-09-27T15:46:57</Server-Time>
<Id>A55930EA-D39C-463B-A12A-356F4853F27C</Id>
</Error>
```

**ERROR**:

```      
<Error>
<Message>
<CannotBeChangedProfileSyncMessage>
<Code>W011</Code>
<Message>Cannot update Mandatory field for Corporate (Ghost) cards
using this service.</Message>
<Field>CreditCard.Segment.Mandatory</Field>
</CannotBeChangedProfileSyncMessage>
</Message>
<Server-Time>2016-10-24T15:38:05</Server-Time>
<Id>385F2AAA-94E9-40F9-A092-AB15AC18E454</Id>
</Error>
```

**SOLUTION**: Corporate Cards and Company Ghost Cards cannot be created or updated using the FOP API. Remove Mandatory="false" from the <Segment Type> element.

##  Travel Profile Error Messages and Codes

### Error Messages

When creating a user, you may encounter the following response error messages:

Error|Reason
-----|-----
Login Id: "{LoginId}" is already in use. |Login Id is already assigned to a user.
Could not create a new user because either Login Id is not specified or is less than three characters.| After trimming, Login Id is either empty or is less than three characters (the column in database requires a value with a length >= 3).
Could not create a new user without a User Type.|User Type value is missing.
Could not create a new user without a Password.|Password value is missing.
Could not create a new user without a Company Id.|Company Id value is missing.
Company Id: "{CompanyId}" does not exist.|Company Id could not be found in database.
Could not create a new user without a Last Name.|Last Name value is missing.
Could not create a new user without a First Name.|First Name value is missing.

### Error Codes

When updating a user, you may encounter the following response messages:

Response Message|Code|Reason
-----|-----|-----
Success|S001|Success
Warning|W001|Value not valid against validation regex. Usually occurs if value contains non-ASCII characters or possible script or mark-up.
Warning|W002|Value is either shorter or longer than acceptable length.
Warning|W003|Look-up value could not be found. Usually occurs if an invalid Rule Class or Org Unit name provided or a User Id does not exist/does not belong to a company.
Warning|W004|Duplicate value in company.
Warning|W005|Duplicate Login Id. Cannot assign the same login Id to multiple users.
Warning|W006|Out of allowed range. For example, a datetime value that is less than the accepted minimum for SQL.
Warning|W007|Required field not populated.
Warning|W008|A list of data was provided, but the associated Update Mode field was not populated with instructions as to what to do with that data.
Warning|W009|Account Number provided was invalid.
Warning| W010|Vendor Code provided was invalid.
Warning|W011|Field cannot be changed. For some fields, the values are only available when the profile is retrieved (i.e. Supervisor's Fax number) but cannot be changed.
Warning|W012|Either no Telephones of Type Cell are specified as Primary or too many are specified as Primary. No action done on Telephones of Type Cell.
Warning|W013|Invalid Information being passed into Custom Fields.
Warning|W014|The provided date range is invalid (i.e. start date after end date, etc.)
Warning|W015|Invalid GUID format.
Warning|W016|Too many items provided in a list (i.e. too many telephones of a certain type, too many custom fields with the same Name, et cetera).
Warning|W017|SQL error occurred.
Warning|UNKNOWN|Unexpected, but not show stopping, error occurred.
