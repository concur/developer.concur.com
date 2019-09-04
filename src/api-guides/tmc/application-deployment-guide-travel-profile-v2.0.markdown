---
title: Application and Scope Design Travel Profile v2.0 API using OAuth v2.0
layout: reference
---

This outlines the details of our Travel Profile API, providing samples and descriptions for partner application development teams.

## Travel Profile v2.0 - Purpose and Description

This endpoint provides travel profile information for a specified SAP Concur traveler. It replaces the previous version of travel profile synchronization, also known as XML Profile Sync. The Travel Profile API allows applications to pull and post information such as the user’s identity, contact information, rate preferences, and discount code preferences by travel type as well as custom fields.

## Target Audience

Audience|Description
---|---
Primary|This document is intended for SAP Concur TMC Partners who plan to develop a SAP Concur Platform Certified application to support Travel Profile v2.0 API, a replacement to Concur Travel’s XML Profile Sync and the Travel Profile v1.0 API.
Secondary| This document is also intended for SAP Concur customers who wish to develop an internal-only application to support SAP Concur Platform’s Travel Profile v2.0, a replacement to XML Profile Sync and the Travel Profile v1.0 API. Internally developed applications do not require Platform Certification, however, most the specifications in this document should be considered as “best practices” for SAP Concur application development and support.

## Prerequisites

You should have some exposure to core SAP Concur applications and services such as Concur Travel. The following list of technical knowledge and skills will aid in the development and certification of your application.

* Business travel industry experience
* Concur Travel and Expense
* Concur traveler profile/GDS Profiles/Concur XML Profile Sync
* RESTful API/XML development, OAuth 2.0, data structures
* Browse https://developer.concur.com, especially our [Profile](https://developer.concur.com/api-reference/travel-profile/00-profile-services.html) and [Get Certified](https://developer.concur.com/manage-apps/app-certification.html) pages.

## Objectives

After reviewing this document, you will have a better understanding of the following:

* How to develop SAP Concur connectors (applications) through the SAP Concur Platform.
* Features of the Travel Profile v2.0.
  * Create a traveler’s profile.
  * Retrieve a traveler’s profile.
  * Update a traveler’s profile.
  * Receive notifications of traveler profile changes (optional).
* SAP Concur Correlation_ID.
* Support Travel Profile v2.0 error conditions & messages.
* Prepare for application certification.
* Prepare for application enablement & deployment.

## Development Environment

The following is a general list of items necessary for application development:

* Professional Edition instance of Concur Travel or Concur Travel & Expense.
* Default travel configuration.
* Default agency configuration with Concur-Sabre PCC.
* Sandboxes may not have Concur Travel booking capabilities. It is available upon request.
* To POST a Travel Profile and Form of Payment within a company, that company’s instance must be “activated.”
* To access corporate discounts the application must be registered in our Travel Supplier system.
* A default development app with a unique Client ID, Client Secret, and applicable scopes. Log a case to request additional applications or scopes.
* Sandbox Admin credentials with Demo/Dev user credentials. Log a case to request additional permissions or users.
* Access to developer.concur.com for the latest information on the following:
  * [Travel Profile](https://developer.concur.com/api-reference/travel-profile/v2.profile-resource.html)
  * [Authentication](https://developer.concur.com/api-reference/authentication/company-auth.html)
* OPTIONAL: Access to RESTful development tool such as Postman or SOAPUI to review JSON/XML requests.

>**Important**: To retrieve, create, or update a traveler’s profile with program loyalty information, your application must be registered in our Travel Supplier system.

## Application Scope

### Company Level OAuth

Your application will obtain and store one company-level OAuth refresh token for *each* company that opts to use your application. You will obtain that authenticated refresh token via an authorized 24-hour single-use request token from SAP Concur. Your 24-hour request token allows you to obtain a 6-month refresh token that is keyed off a unique application identifier, application secret, and the company’s UUID. The refresh token will be used repeatedly to obtain 60-minute access (bearer) tokens that your application will use to conduct API calls to and from SAP Concur. If you plan to deploy your application across specific agencies or travel configurations within a single company, SAP Concur will provide that capability in the future via a new role or group.

![Image](media/ea79508ec925ab56050a19c3cf34dd65.png)

The following is a summary of steps necessary to obtain a company-level refresh token:

* Obtain company name and company ID (also known as CliqID).
* Authorized SAP Concur Consultants/PMs will generate 24 hour request tokens.
* Use the 24-hour request token to generate a refresh token.
* Store and reuse the `refresh_token` – a UUID4 identifier that allows your application to obtain fresh `access_tokens`.
* Use the `access_tokens` to make API calls.

### Obtain Company Level OAuth Token

#### Request

```
POST <https://us.api.concursolutions.com/oauth2/v0/token>
```

#### Header
```
Content-Type:application/x-www-form-urlencoded
```

#### Body

```
client_id:c14f2547##############e94f235c39
client_secret:1bfb####-#####################245ce
grant_type:password
username:3b#####################ecd
password:fd44###################5d331
credtype:authtoken
```
#### Response
```
{
    "expires_in": 3600,
    "scope": "openid TRVPRF PASSV COMPD EMERG TSAI TMCSP MEDIC UNUTX USER COMPANY NOTIF FOP user_read user.read company.read",
    "token_type": "Bearer",
    "access_token": "BYxVfClZpo-zw…",
    "refresh_token":"a95caa0f-249a…",
    "refresh_expires_in": 1517039403,
    "id_token": "4n7i2-e9zP9qrpc4B…",
    "geolocation": "https://us.api.concursolutions.com"
}
```

### Descriptions

* The `expires_in` value is returned in seconds. Your `access_token` is valid for 60 minutes.
* The **scopes** returned in the response are what your application has been registered to work with. Scopes are selectively enabled based on the functionality required. The values returned in the response should never change. If new scopes are added, your application will require recertification.
* The `token_type` SAP Concur returns has the value of “Bearer,” an industry standard. Bearer can be interpreted as “allow access to the bearer of this token.”
* The `access_token`, a JWT, informs SAP Concur that the bearer of the returned token has been authorized to access the SAP Concur API and perform specific actions as specified by the scopes that have been granted. The `access_token` is valid for 60 minutes from the time of the response. If necessary, you may architect your application to scale up and use multiple access tokens to spawn multiple threads.
* The `refresh_token`, also a JWT, is the unique token that contains the information required to obtain a new `access_token` or `id_token`. Refresh tokens are good for a minimum of six months and are subject to strict storage requirements to ensure they are not compromised. Refresh tokens can also be revoked. Your application is expected to overwrite or replace your stored refresh tokens in case the response returns a different `refresh_token` value.
* The value in `refresh_expires_in` is returned in epoch time. Use a library that provides conversion capability. For a UI version, see https://www.epochconverter.com.
* The `id_token`, also a JWT, is returned. For company-level or enterprise-level applications like Travel Profile, there is no need to retrieve details of the company-level authenticated user. The information stored in the ID token JWT is necessary for user-level authentication based applications such as Uber or Triplink supplier applications like Avis or Marriot.
* The value for **geolocation** should be stored as your application’s base URI. Since SAP Concur has multiple data centers, it may be required to obtain and store data from customers who are hosted in EMEA as well as the US. If your application receives **error code 16, “invalid request”, user lives elsewhere**, your application must be able to submit a second request to “us.api.concursolutions.com” or “eu1.api.concursolutions.com” and store that geolocation. The geolocation also identifies for SAP Concur geographically where the user is stored.
* Store the refresh token, access tokens, expiration date, and instance URL (geolocation) along with your internal information about the company’s profile.

>**Security Note**: DO NOT append keys and values to the Request URL. By Q2 2018, requests containing confidential keys & values will be rejected.

### Remove charset=utf-8 from Content-Type Header

Our Oauth2 implementation according to the [IETF standards](https://tools.ietf.org/html/draft-ietf-oauth-v2-31#appendix-B) requires all clients to remove the `charset=utf-8` from the content-type header.

### Scopes & Scope Management

Travel Profile applications have the following scopes registered:

* openid
* user.read
* company.read
* user_read
* FOP
* GHOST
* TRVPRF
* PASSV
* EMERG
* TSAI
* TMCSP
* MEDIC
* UNUTX
* USER
* NOTIF
* COMPD
* COMPANY

Explanations for these scopes are documented at <https://developer.concur.com/api-reference/travel-profile/v2.profile-resource.html>. If you wish to have your application include additional scopes or endpoints, you must have your application recertified.

#### Geolocations

SAP Concur has multiple datacenters:

>   US = <https://us.api.concursolutions.com>
>   EMEA = <https://emea.api.concursolutions.com>

Host Location|Geolocation/URL from refresh token based on host location of Company GUID|The URL to use for Travel Profile
---|---|---
EMEA| <https://emea.api.concursolutions.com/oauth2/v0/token> | [https://emea.api.concursolutions.com/api/travelprofile/v2.0/profile](https://emea.api.concursolutions.com/api/travel/trip/v1.1)
US| <https://us.api.concursolutions.com/oauth2/v0/token>   | <https://us.api.concursolutions.com/api/travelprofile/v2.0/profile>

## User Profile Web Service

### Get User Information

<https://developer.concur.com/api-explorer/v3-0/Users.html>

It may be necessary to use the User API to retrieve user’s login IDs or Email IDs – which the Travel Profile v2.0 Web Service uses as its matching fact for travel profile retrievals or updates. Use the following request parameters to filter your searches.

#### Retrieve All Active Users

```
GET https://us.api.concursolutions.com/users?offset=0&limit=100&isactive=true
Authorization: Bearer {access_token}
```

#### Retrieve User Information by Primary Email ID

```
GET https://www.concursolutions.com/api/v3.0/common/users?primaryEmail=dutchinw@yahoo.com&active=true HTTP/1.1
Authorization: Bearer {access_token}
Content Type:
```

#### Retrieve User Information by Login ID

```
GET https://www.concursolutions.com/api/v3.0/common/users?user=dutchinw10@sureware-connect.com&active=true HTTP/1.1
Authorization: Bearer {access_token}
```

### Recommendation: Adopt SAP Concur UUID as Traveler’s Unique Identifier

The UUID format is being used throughout the SAP Concur platform and new OAuth methodology. Your application’s client (company) identifier, client secret, and authentication tokens are all in UUID format. Even error IDs are returned in UUID format.

UUID v4 information can be found at <https://en.wikipedia.org/wiki/Universally_unique_identifier>. This tool is also useful - <https://www.uuidgenerator.net/>

UUID is now available with *every* user record stored at SAP Concur. UUIDs are automatically generated whenever an employee or traveler record is created - even during 350 record type imports. And as the standard indicates, the UUID value (which is randomly generated) is guaranteed unique at SAP Concur. Because of this uniqueness, UUID can be used as a matching-fact and *the* unique identifier at SAP Concur. You no longer need to rely on XML Sync ID or Employee ID that are often not unique and are responsible for numerous user record errors and support queries. Login ID, still unique at SAP Concur, is widely adopted by SAP Concur Platform partner applications but has not be widely adopted with XML Profile Sync.

We do not recommend using the old Sync ID associated with XML Profile Sync. We highly recommend transitioning to support SAP Concur UUID.

In 2017, UUID was exposed in the Travel Profile API and it was also made available in the PNR editing tool. The label and data in the travel profile response will look like this:

<UUID>e588fcc4-417f-4d6c-81de-6b51bfc9c90a</UUID>

SAP Concur UUID is required for the eReceipts v4 API. It is the only element supported as its matching-fact. eReceipts v4.0 does not support Login ID.

## Travel Profile v2.0 Web Service

The Travel Profile service consists of a set of resources that provide travel profile functionality for developers, travel suppliers, and travel management companies (TMCs). This Web Service is designed to replace the XML Profile Sync built into the Concur Travel product. XML Profile Sync is being deprecated. The profile web services can be used to create, update, and retrieve travel profile information for a specified traveler, or a list of travelers. The XSD (schema) for Profile API v2.0 is very similar to the existing schema for Profile Sync. The [XSD](https://www.concursolutions.com/ns/TravelUserProfile.xsd) is published on developer.concur.com. The travel profile summary XSD is available [here](https://www.concursolutions.com/ns/TravelProfileSummaryV2.xsd). A spreadsheet of specific changes between XML Profile Sync and Profile API is available upon request.

### GET Profile Information

#### Retrieve a List of Travel Profile Summaries by Last Modified Date (With Paging)

```
GET https://us.api.concursolutions.com/api/travelprofile/v2.0/summary?Page=1&LastModifiedDate=2017-10-15T06:00:00
Content-type:application/xml
Authorization: Bearer {access_token}
```

#### Retrieve traveler profile details by Login ID**

```
GET https://us.api.concursolutions.com/api/travelprofile/v2.0/profile?userid_type=login&userid_value=dutchin10@domain-connect.com
Content-type:application/xml
Authorization: Bearer {access_token}
```

#### Retrieve Travel Profile Information by UUID *(FUTURE RELEASE)*

```
GET https://us.api.concursolutions.com/api/travelprofile/v2.0/profile?uuid=636a6e64-f516-4d84-ae7e-c833c9c20cdc
Content-type:application/xml
Authorization: Bearer {access_token}
```

#### Retrieve User Information in Bulk (Limited)

```
GET https://us.api.concursolutions.com/users?offset=0&limit=100&isactive=true
Content-type:application/xml
Authorization: Bearer {access_token}
```

**Preview:**

https://developer.concur.com/api-reference/authentication/get-users31.html

### Create Travel Profile

#### Create a Basic Traveler Record

#### Request

```
POST https://us.api.concursolutions.com/api/travelprofile/v2.0/profile
Content-type:application/xml
Authorization: Bearer {access_token}
```

```
<ProfileResponse xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" Action="Create" LoginId="dutchinw10@domain-connect.com">
    <General>
        <FirstName>Dutchin</FirstName>
        <LastName>Wong10</LastName>
        <TravelConfigID>113938</TravelConfigID>
    </General>
    <Password>Welcome123</Password>
</ProfileResponse>
```
#### Response

```
<TravelProfileResponseMessage>
    <Code>S001</Code>
    <Message>Success, no errors or warnings reported</Message>
</TravelProfileResponseMessage>
```
Minimum elements required to create a new user:

* First Name
* Last Name
* Travel Configuration ID
* Login ID
* Password
* Rule Class (*uses Default Rule Class if not provided*)
* Omitted elements will be ignored and not updated.
* Empty elements of datatype string will be cleared out; nillable elements will be cleared out if set as nil. Refer to XSD for nillable elements.

>**Important** To create or update a traveler’s profile with program loyalty information, your application must be registered in our Travel Supplier system.

#### Create a Full Traveler Record

#### Request

```
POST https://us.api.concursolutions.com/api/travelprofile/v2.0/profile
Content-type:application/xml
Authorization: Bearer {access_token}
```

```
<ProfileResponse Action="Create" Status="Active" LoginId="dutchinw10@domain-connect.com">
   <General>
      <NamePrefix>Mr</NamePrefix>
      <FirstName>Dutchin</FirstName>
      <MiddleName>W</MiddleName>
      <LastName>Wong</LastName>
      <NameSuffix>Sr.</NameSuffix>
      <PreferredName />
      <JobTitle />
      <CostCenter></CostCenter>
      <CompanyEmployeeID>100011</CompanyEmployeeID>
      <Division>1000</Division>
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
         <PhoneNumber>888-883-8411</PhoneNumber>
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
      <EmailAddress Contact="true" Type="Business">dutchinw@yahoo.com</EmailAddress>
      <EmailAddress Contact="true" Type="Personal">dutchinw@yahoo.com</EmailAddress>
      <EmailAddress Contact="true" Type="Personal">dutchinw@yahoo.com</EmailAddress>
   </EmailAddresses>
   <RatePreferences>
      <AAARate>true</AAARate>
      <AARPRate>false</AARPRate>
      <GovtRate>false</GovtRate>
      <MilitaryRate>false</MilitaryRate>
   </RatePreferences>
   <DiscountCodes>
      <DiscountCode Vendor="Intercontinental Hotels Group">123456</DiscountCode>
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

#### Response

```
<TravelProfileResponseMessage>
    <Code>S001</Code>
    <Message>Success, no errors or warnings reported</Message>
</TravelProfileResponseMessage>
```

#### Update a Traveler’s Profile by Login ID *(UUID to be supported in a future release)*

#### Request

```
POST https://us.api.concursolutions.com/api/travelprofile/v2.0/profile
Content-type:application/xml
Authorization: Bearer {access_token}
```

```
<ProfileResponse Action="Update" Status="Active" LoginId="dutchinw10@domain-connect.com">
{use elements from create profile}
```

#### Response

```
<TravelProfileResponseMessage>
    <Code>S001</Code>
    <Message>Success, no errors or warnings reported</Message>
</TravelProfileResponseMessage>
```

#### Update a Traveler’s Unused Tickets

#### Request

```
POST https://us.api.concursolutions.com/api/travelprofile/v2.0/profile
Content-type:application/xml
Authorization: Bearer {access_token}
```

```
<ProfileResponse Action="Update" Status="Active" LoginId="dutchinw10@domain-connect.com">
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
            <ExpirationDate>2022-10-14</ExpirationDate>
            <Notes>TRIP CHANGE</Notes>
        </UnusedTicket>
     	</UnusedTickets>
</ProfileResponse>
```
#### Response

```
<TravelProfileResponseMessage>
    <Code>S001</Code>
    <Message>Success, no errors or warnings reported</Message>
</TravelProfileResponseMessage>
```

#### Deactivate a Traveler Profile by Login ID

#### Request

```
POST https://us.api.concursolutions.com/api/travelprofile/v2.0/profile
Content-type:application/xml
Authorization: Bearer {access_token}
```

```
<ProfileResponse Action="Update" Status="Inactive" LoginId="dutchinw10@domain-connect.com">
```

#### Response

```
<TravelProfileResponseMessage>
    <Code>S001</Code>
    <Message>Success, no errors or warnings reported</Message>
</TravelProfileResponseMessage>
```

#### Result

```
<?xml version="1.0" encoding="utf-8"?>
<ProfileResponse xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" Status="Inactive" LoginId="dutchinw03@sureware-connect.com" Unique="">
```

### Validate Your XML Against Our XSD

The Travel Profile API v2.0 incorporates internal XML validation. If you receive an error similar to, “There is an error in XML document”, it is due to an issue with your XML formatting. The request will not even reach the SAP Concur profile service because the XML issue(s) prevents the system from accepting and processing the request.

To validate your XML, a public online application is available. Launch <https://www.freeformatter.com/xml-validator-xsd.html> to validate your XML against the Travel Profile v2.0 API XSD.

In the top pane of FreeFormatter, paste your XML, and in the bottom pane paste the SAP Concur XSD (<https://www.concursolutions.com/ns/TravelUserProfile.xsd>).

Sample response:

* Cvc-complex-type.2.4.a: Invalid Content Was Found Starting With Element 'ClientName'. One Of '{NamePrefix, FirstName, MiddleName, LastName, NameSuffix, PreferredName, JobTitle, CostCenter, CompanyEmployeeID, Division, PreferredLanguage, EReceiptOptIn, HasOpenBooking, CountryCode, CompanyName, CompanyID, RuleClass, TravelConfigID, MedicalAlerts, AgencyNumber, SearchId, GDSProfileName, SabreProfileId}' Is Expected., Line '3', Column '17'.
* Cvc-enumeration-valid: Value '' Is Not Facet-valid With Respect To Enumeration '[BLML, CHML, DBML, FPML, GFML, HNML, BBML, KSML, LCML, LSML, MOML, NSML, NLML, PFML, SFML, VLML, VGML, KVML, RVML, AVML]'. It Must Be A Value From The Enumeration., Line '59', Column '26'.
* Cvc-type.3.1.3: The Value '' Of Element 'MealCode' Is Not Valid., Line '59', Column '26'.
* Cvc-enumeration-valid: Value '' Is Not Facet-valid With Respect To Enumeration '[DontCare, Economy, Compact, Intermediate, Standard, FullSize, Luxury, Premium, Mini, EconomyHybrid, CompactHybrid, IntermediateHybrid, StandardHybrid, FullSizeHybrid, MiniVan, StandardSUV, FullSizeSUV, FullSizePickup, Specialized, IntermediateSUV]'. It Must Be A Value From The Enumeration., Line '66', Column '16'.
* Cvc-type.3.1.3: The Value '' Of Element 'CarType' Is Not Valid., Line '66', Column '16'.
* Cvc-datatype-valid.1.2.1: '' Is Not A Valid Value For 'date'., Line '81', Column '20'.
* Cvc-type.3.1.3: The Value '' Of Element 'DateOfBirth' Is Not Valid., Line '81', Column '20'.

## Frequently Asked Questions

**Can I create a traveler profile with all the fields from a response?**

Yes. Be aware that there are several fields and potentially custom fields in a traveler’s profile that require that other user records such as managers or approvers exist in the system first. Therefore it may be necessary to create a traveler record with default fields before updating the rest of a traveler’s profile with additional details.

**FAQ – I tried to update a travel profile using a response from GET travel profile but I’m getting errors. What should I do?**

```
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
>   **Solution: Remove these elements from your profile POST Error:**

```
<TravelProfileResponseMessage>
    <Code>W007</Code>
    <Message>The CountryCode field is required.</Message>
    <Field>Telephones/CountryCode</Field>
    <CorrelationId>69102551-e208-4f59-8ba8-1b44d0b6842c</CorrelationId>
</TravelProfileResponseMessage>

<TravelProfileResponseMessage>
    <Code>W002</Code>
    <Message>The field CountryCode must be a string with a maximum length of 2.</Message>
    <Field>Telephones/CountryCode</Field>
    <CorrelationId>6e04c764-ccd7-4aad-82cd-33506aac73f5</CorrelationId>
</TravelProfileResponseMessage>
```

**Solution**: Ensure the correct 2 letter country code is included. When the above errors are resolved (by removing the offending elements) you may encounter one last error. Remove these nodes for loyalty programs (Air, Rail, Car). Also, make sure you specify the correct login id.

```
<SegmentTotal />
<PointsUntilNextStatus />
<SegmentsUntilNextStatus />

<Error>
    <Message>Invalid User:dutchinw@anybizbu.com</Message>
    <Server-Time>2017-09-27T15:46:57</Server-Time>
    <Id>A55930EA-D39C-463B-A12A-356F4853F27C</Id>
</Error>
```

**Error:**
```
<Error>
    <Message>
        <CannotBeChangedProfileSyncMessage>
            <Code>W011</Code>
            <Message>Cannot update Mandatory field for Corporate (Ghost) cards using this service.</Message>
            <Field>CreditCard.Segment.Mandatory</Field>
        </CannotBeChangedProfileSyncMessage>
    </Message>
    <Server-Time>2016-10-24T15:38:05</Server-Time>
    <Id>385F2AAA-94E9-40F9-A092-AB15AC18E454</Id>
</Error>
```

**Solution**: Corporate Cards and Company Ghost Cards cannot be created or updated using the FOP API. Remove Mandatory="false" from the <Segment Type> element.

### Table of Travel Profile Status Messages/Codes

When *creating* a user, you may encounter the following response error messages:

Error|Reason
---|---
Login Id: "{LoginId}" is already in use|Login Id is already assigned to a user.
Could not create a new user because either Login Id is not specified or is less than three characters|After trimming, Login Id is either empty or is less than three characters (the column in database requires a value with a length >= 3).
Could not create a new user without a User Type|User Type value is missing.
Could not create a new user without a Password|Password value is missing.
Could not create a new user without a Company Id|Company Id value is missing.
Company Id: "{CompanyId}" does not exist|Company Id could not be found in database.
Could not create a new user without a Last Name|Last Name value is missing.
Could not create a new user without a First Name|First Name value is missing.

When *updating* a user, you may encounter the following response messages:

Response Message|Code|Reason
---|---|---
Success|S001|Success
Warning| W001|Value not valid against validation regex. Usually occurs if value contains non-ASCII characters or possible script or mark-up.
Warning|W002|Value is either shorter or longer than acceptable length.
Warning|W003|Look-up value could not be found. Usually occurs if an invalid Rule Class or Org Unit name provided or a User Id does not exist/does not belong to a company.
Warning|W004|Duplicate value in company.
Warning|W005| Duplicate Login Id. Cannot assign the same login Id to multiple users.
Warning|W006|Out of allowed range. For example, a datetime value that is less than the accepted minimum for SQL.
Warning|W007|Required field not populated.
Warning|W008|A list of data was provided, but the associated Update Mode field was not populated with instructions as to what to do with that data.
Warning|W009| Account Number provided was invalid.
Warning|W010| Vendor Code provided was invalid.
Warning|W011| Field cannot be changed. For some fields, the values are only available when the profile is retrieved (i.e. Supervisor's Fax number), but cannot be changed.
Warning|W012|Either no Telephones of Type Cell are specified as Primary or too many are specified as Primary. No action done on Telephones of Type Cell.
Warning|W013|Invalid Information being passed into Custom Fields.
Warning|W014|The provided date range is invalid (i.e. start date after end date, etc.).
Warning|W015|Invalid GUID format.
Warning|W016|Too many items provided in a list (i.e. too many telephones of a certain type, too many custom fields with the same Name, et cetera).
Warning|W017|Sql error occurred.
Warning|UNKNOWN|Unexpected, but not show stopping, error occurred.

## Error Handling

**Requirement: Retain the GUID returned in all SAP Concur responses under the header “concur-correlationid”. it is a value that will be referenced to locate transactions in our logging system**.

* **Required**: Support the following HTTP error conditions/codes: <https://developer.concur.com/api-reference/http-status-codes.html>
* **Required**: Provide retry logic for timeouts and 500/503 errors.
* **Recommendation**: Provide your own unique “concur-correlationid” header and randomly generated value – inserted with a `company_id` for example. If you provide the following in your request header, SAP Concur will return the same value in the response header: concur-correlationid: 2997-e17fb88b-5b9a-41b9-b285-6da70eeba98a.
* **Recommendation**: Error logging - retain logs for a minimum of 7 days for troubleshooting and support.

## Development Support

* For travel configuration questions/support, contact Travel Solutions or your Alliance Manager.
* Review Release Notes regularly – API updates are delivered with monthly releases:
  * http://www.concurtraining.com/customers/tech_pubs/
  * http://www.concurtraining.com/customers/tech_pubs/TravelDocs/ReleaseNotes/_CCC_RN.htm
* Review content on developer.concur.com regularly.
* If you need access or permissions to “Preview” content on developer.concur.com, let us know.
* For reproducible issues, log a case via case management system to Support teams. Support will escalate to respective Platform Partner Services and R&D teams.

## Production and Application Support

* Visit https://developer.concur.com/tools-support/requesting-partner-support.html.
* Partner Support Case Management System -https://sapconcur.my.salesforce.com/secur/login_portal.jsp?orgId=00D600000007Dq3&portalId=06060000000PrEi.
* Support engineers attempt to reproduce your application’s issues using a RestUI based request/response application such as Postman or SoapUI. Our application Analysts and Engineers are not developers so .C, .JS, or any other source language files are not helpful.
* Please have the following data and identifiers available:
  * Application Identifiers:
    * Application Name (Your agency may have more than one certified application).
    * Brief application description.
    * Last 6 characters of your application’s `client_ID`.
    * DO NOT submit/paste full application IDs (keys), secrets, or OAuth tokens.
    * The UUID formatted SAP Concur Correlation ID from your response headers.
  * Company Identifiers:
    * Company Name or Customer Name (the name that SAP Concur recognizes).
    * The SAP Concur Company ID (also known as CliqID).
    * The Travel Config ID.
    * The expense entity code or entity ID.
    * The company GUID if available.
  * Identifiers of affected areas:
    * Affected user(s) if applicable
    * The employee name or employee ID.
    * The UUID if possible.
    * XML Sync ID if necessary.
    * Expense report name/ID.
    * Invoice/Payment Request name/ID.
    * Trip Itinerary name/Travel Request name/ ID.
    * Booking Segment name/source.
    * Trip ID.
    * Locator/PNR.
    * Date range.
  * Reproduction Information:
    * Provide contextual information related to the issue so engineers have an understanding of what your application was attempting to do at the time.
    * Function – retrieving data or creating/updating data.
    * Parameter(s) – by creation date, last modified date, by ID, etc.
    * Affected product areas – Imaging, expense types, dates, amounts, city codes, workflow.
  * API-transaction related information:
    * Token (never supply this via email).
    * Request URL.
    * Method (GET, POST, PUT).
    * Request Headers.
    * Request Body.
    * Response Headers.
    * Response Body.
    * Any additional log or response information relevant to the issue.

>Remember to send client or partner sensitive data such as OAuth refresh tokens, application_ids or keys, application_secrets through SAP Concur secured channels only.

## Required: Support concur-correlationID

Here is a screen shot of a typical “Body” response for retrieving a profile in Postman.

![Image](media/b08a92feee15e76a6f8f19d40377e66e.png)

Select “Headers” for the response headers. Note “concur-correlationid”. 

We require you store that response GUID when an error occurs. When you log a case, please include the concur-correlationid GUID so we can retrieve the error(s) from our internal tools/logging system. This is what response headers look like in Postman.

![Image](media/fa5691072cec8f05f6d0633e1be5cdf2.png)

Here’s what it would look like when we search for your application’s errors using the concur-correlationID GUID you captured when an error or errors occurred. It is vital for troubleshooting efficiency.

![Image](media/89cfa77b6df752d6fcbe7b90debed850.png)
