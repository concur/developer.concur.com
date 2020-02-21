---
title: Guide to the Request v4.0 API, TMC Edition
layout: reference
---

* [Target Audience](#audience)
* [Prerequisites](#prerequisites)
* [Objectives](#objectives)
* [Development Environment](#environment)
* [Application Scope](#scope)
  * [Company Level OAuth](#oauth)
  * [Obtain Company Level OAuth Token](#company-oauth-token)
  * [Definitions](#definitions)
  * [Obtain Company Level Refresh Token](#company-refresh-token)
  * [Obtain Company Level Access Token](#company-access-token)
  * [Scopes & Scope Management](#scope-management)
  * [Geolocation](#geolocation)
* [Unique User ID](#unique-user)
* [Using the Request v4 API](#request-api)
  * [Traveler Plans Trip](#plan-trip)
  * [Make a Travel Request](#travel-request)
  * [Agency Receives Travel Request Notification](#agency-receives-request)
  * [Get Travel Request Information](#get-request)
* [Agency Submits Proposal](#agency-proposal)
  * [Trip Status](#trip-status)
* [Reviewing a Proposal](#review-proposal)
  * [Agencies Receive Notification of Proposal Selected by Traveler](#agency-notification)
  * [Convert Proposal to Actual PNR](#convert-proposal)
  * [Traveler Notified of Confirmed Booking and Receives Itinerary](#traveler-notified)
  * [Cancel Itinerary](#cancel)

The Request v4.0 API provides travel request information for a specified traveler. Request v4.0 allows applications to pull and post information about the traveler’s request for travel.

## <a name="audience"></a>Target Audience

Audience|Description
---|---
**Primary** |SAP Concur TMC Partners who plan to develop an SAP Concur certified application to support Request v4.0 API and agency proposal.
**Secondary** |SAP Concur customers who wish to develop an internal-only application to support Request v4.0. Internally developed applications do not require certification, however, most the specifications in this document should be considered best practices for SAP Concur application development and support.

## <a name="prerequisites"></a>Prerequisites

You should have some familiarity with core SAP Concur applications and services such as Concur Travel and Concur Request. The following list of technical knowledge and skills will aid in the development and certification of your application.

* Business travel industry experience.
* RESTful API / XML development, JSON, OAuth 2.0, and data structures.

## <a name="objectives"></a>Objectives

After reading this document, you will have a better understanding of the following:

* How to develop SAP Concur connectors (applications).
* How to support the Request v4.0 API to:
  * Create a travel request.
  * Retrieve a list of travel request summaries based on desired parameters.
  * Retrieve a traveler’s specific request.
  * Submit traveler’s proposals.
  * Review traveler’s proposals.
  * Convert an accepted proposal to a passenger name record (PNR).
  * Cancel a proposal.
* Save/store the `concur-correlationid`.
* Support travel request error conditions and messages.
* Prepare for application certification.
* Prepare for application enablement and deployment.

## Development Environment

The following is a general list of items necessary to build your application:

* Professional Edition instance of Concur Request, Concur Travel or Concur Travel & Expense.
* Default travel configuration.
* Default agency configuration with Concur-Sabre PCC.
* Sandboxes may not have SAP Concur Travel booking capabilities, this is available upon request.
* To POST a travel proposal within a company, that company’s instance must be activated.
* A default development app with a unique Client ID, Client Secret, and applicable scopes.
* Sandbox Admin credentials with Demo/Dev user credentials.
* OPTIONAL: Access to RESTful development tool such as Postman or SoapUI to review JSON/XML requests.

![Sequence Diagram](images/1-sequence-diagram-travel-requestV4.png)

## <a name="scope"></a>Application Scope

### <a name="oauth"></a>Company Level OAuth

Your application will obtain and store one company-level OAuth refresh token for each company that opts to uses your application.  You will obtain that authenticated refresh token via an authorized 24-hour single-use request token from SAP Concur. Your 24-hour request token allows you to obtain a six-month refresh token which that is keyed off a unique application identifier, application secret, and the company’s UUID.  The refresh token will be used repeatedly to obtain 60-minute access (bearer) tokens which that your application will use to conduct API calls to and from SAP Concur. If you plan to deploy your application across specific agencies or travel configurations within a single company, SAP Concur will provide that capability in the future via a new role or group.

![Company Authentication Flow Diagram](images/2-company-authentication-flow.png)

The following steps are necessary to obtain a company-level refresh token:

* Obtain company name and company ID (also known as CliqID).
* Authorized SAP Concur Consultants/PMs will generate 12-hour request tokens.
* Use the 12-hour request token to generate a refresh token. You have up to five opportunities before the request token expires.
* Store and reuse the `refresh_token` – a UUID4 identifier that allows your application to obtain fresh `access_tokens`.
* Use the `access_tokens` (also known as bearer tokens) to make API calls.

### <a name="company-oauth-token"></a>Obtain Company Level OAuth Token

#### Request

```
POST https://us.api.concursolutions.com/oauth2/v0/token
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
    "scope": "openid TRVPRF PASSV COMPD EMERG TSAI TMCSP MEDIC UNUTX USER COMPANY NOTIF FOP TRVREQ ITINER user_read user.read company.read",
    "token_type": "Bearer",
    "access_token": "BYxVfClZpo-zw…",
    "refresh_token":"a95caa0f-249a…",
    "refresh_expires_in": 1517039403,
    "id_token": "4n7i2-e9zP9qrpc4B…",
    "geolocation": "https://us.api.concursolutions.com "
}
```

### <a name="definitions"></a>Definitions

* The `expires_in` value is returned in seconds. Your `access_token` is valid for 60 minutes.
* The scopes returned in the response are what your application has been registered to work with. Scopes are selectively enabled based on the functionality required. The values returned in the response should never change. If new scopes are added, your application will require recertification.
* The `token_type` – Bearer, which SAP Concur returns, is an industry standard. Bearer can be interpreted as “allow access to the bearer of this token.”
* The `access_token`, a JWT, informs SAP Concur that the bearer of the returned token has been authorized to access the SAP Concur API and perform specific actions as specified by the scopes that have been granted. The `access_token` is valid for sixty minutes from the time of the response. If necessary, you may architect your application to scale up and use multiple access tokens to spawn multiple threads.
* The `refresh_token`, also a JWT, is the unique token that contains the information required to obtain a new `access_token` or `id_token`. Refresh tokens are good for a minimum of six months and are subject to strict storage requirements to ensure they are not compromised. Refresh tokens can also be revoked. Your application is expected to overwrite or replace your stored refresh tokens in case the response returns a different `refresh_token` value.
* The `refresh_expires_in` value is returned in epoch time. Use a library that provides conversion capability. For a UI version, navigate to https://www.epochconverter.com.
* The `id_token`, also a JWT, is returned. For company-level or enterprise-level applications like Travel Profile, there is no need to retrieve details of the company-level authenticated user. The information stored in the ID token JWT is necessary for User-level authentication based applications such as Uber or Triplink supplier applications like Avis or Marriot.
* The geolocation value should be stored as your application’s base URI. Since SAP Concur has multiple data centers, it may be required to obtain and store data from customers who are hosted in EMEA as well as the US. If your application receives error code 16, “invalid request”, user lives elsewhere, your application must be able to submit a second request to “us.api.concursolutions.com” or “eu1.api.concursolutions.com” and store that geolocation. The geolocation also identifies for SAP Concur geographically where the user is stored.
* Store the refresh token, access tokens, expiration date, and instance URL (geolocation) along with your internal information about the company’s profile.

### <a name="company-refresh-token"></a>Obtain Company Level Refresh Token

![Postman example request for company level refresh token](images/3-company-level-refresh-token.png)

* Username = Company GUID
* Password = Request token

**Important**: Do not submit any HTTP requests with the above parameters in your request headers or the request will be rejected.

![Image showing various token, including company level refresh token](images/4-company-level-refresh-token.png)

### <a name="company-access-token"></a>Obtain Company Level Access Token

Store and manage the following:

* `Token_type`
* `Refresh_token`
* `Access_token`
* Expiration date
* Geolocation
* `Refresh_token_expiration`

![Postman collection to obtain company level refresh token](images/5-company-level-refresh-token.png)

![Postman results for previous Postman call](images/6-company-level-refresh-token.png)

> **Note**: In your application, always overwrite the refresh token that is returned by SAP Concur. You can validate or compare but overwriting the `refresh_token` from SAP Concur is best. This ensures that your refresh token is always valid.

### <a name="scope-management"></a>Scopes & Scope Management

Travel applications normally have the following scopes registered:

* openid
* travelrequest.write
* user.read
* company.read
* user_read
* FOP
* GHOST
* ITINER
* TRVREQ
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

Explanations for these scopes are documented on developer.concur.com. If you wish to have your application include additional scopes or endpoints, you must have your application recertified.

### <a name="geolocation"></a>Geolocation

SAP Concur has multiple datacenters:

* US = https://us.api.concursolutions.com
* EMEA = https://emea.api.concursolutions.com

Host Location|URL from refresh token based on host location of Company GUID|URL to use for Travel Profile
---|---|---
EMEA|https://emea.api.concursolutions.com/oauth2/v0/token|https://emea.api.concursolutions.com/api/travelprofile/v2.0/profile
US|https://us.api.concursolutions.com/oauth2/v0/token|https://us.api.concursolutions.com/api/travelprofile/v2.0/profile

## <a name="unique-user"></a>Unique User ID

The UUID format is being used throughout the SAP Concur platform and new OAuth methodology. It is recommended that you adopt the SAP Concur UUID as the traveler's unique identifier. Your application’s client (company) identifier, client secret, and authentication tokens are all in UUID format. Even error IDs are returned in UUID format.

UUID v4 information can be found here: https://en.wikipedia.org/wiki/Universally_unique_identifier. This tool is also useful: https://www.uuidgenerator.net/.

UUID is now available with every user record stored at SAP Concur. UUIDs are automatically generated whenever an employee or traveler record is created - even during 350 record type imports. And as the standard indicates, the UUID value (which is randomly generated) is guaranteed unique at SAP Concur. Because of this uniqueness, UUID can be used as a matching-fact and the unique identifier at SAP Concur. You no longer need to rely on XML Sync ID or Employee ID which are often not unique and is responsible for numerous user record errors and support queries. Login ID, still unique at SAP Concur, is widely adopted by SAP Concur Platform partner applications but has not be widely adopted with XML Profile Sync.
We do not recommend using the old Sync ID associated with XML Profile Sync. We highly recommend transitioning to support SAP Concur UUID.


UUID was exposed in the Travel Profile API and it was also made available in the PNR editing tool. The label and data in the travel profile response will look like this: e588fcc4-417f-4d6c-81de-6b51bfc9c90a SAP Concur UUID is required for the Request v4 API. It is the only element supported as its matching-fact.

## <a name="request-api"></a>Using the Request v4.0 API

## <a name="plan-trip"></a>Traveler Plans Trip

The traveler has to plan few aspects of travel, before creating or submitting the travel request. Below are a few things need to be planned.

* Plan itinerary.
* Plan hotel bookings.
* Plan car rentals.
* Specify the airlines to use.

### <a name="travel-request"></a>Make a Travel Request

Once the traveler has the plan ready, they can create the travel request by using Concur Request.

#### Step 1: Log in to SAP Concur

Once logged in, click the **Request** tab:

![SAP Concur page after log in](images/7-login-page-travel-req-v4.png)

#### Step 2: Create a Travel Request

Once you are logged in, select **New Request** under the **Request** tab and fill in the traveler details.

**Request Header**: Includes details for request policy, request name, travel start date, travel end date, and purpose of the travel.

![New Request Form UI](images/8-request-header.png)

Next you'll fill in details for all the segments. This may include:

**Air Segment**

![Request UI showing air segments](images/9-air-segment.png)

**Rail Segment**

![Request UI showing rail segments](images/10-rail-segment.jpg)

**Hotel Segment**

![Request UI showing hotel segment](images/11-hotel-segment.jpg)

**Car Segment**

![Request UI showing car segment](images/12-car-segment.jpg)

Click **Submit Request**. This request will be added to your **Active Travel Requests**.

![Request UI showing all active travel requests](images/13-all-travel-requests.png)

### <a name="agency-receives-request"></a>Agency Receives Travel Request Notification

Agencies that have subscribed to ESS services will be notified, once the traveler submits the travel request. Based on the **Travel_Request_Id** the agencies fetch the travel request details for a traveler.

### <a name="get-request"></a>Get Travel Request Information

#### To fetch the traveler's request using status "Submitted" without parsing UUID.

**NOTE**: If no value for status is indicated, then by default it will return the response for “ALL ACTIVE” travel requests.

```
URI: GET
{{geolocation}}/travelrequest/v4/requests?view=SUBMITTED
Content-Type: application/json
Authorization: Bearer {{access_token}}
```

#### Response
```
 {
            "href": "https://us.api.concursolutions.com/travelrequest/v4/requests/8354DDF8F1C6374BAE25189266293CF9",
            "id": "8354DDF8F1C6374BAE25189266293CF9",
{
    "data": [
"approvalStatus": {
                "code": "SUBMITTED",
                "name": "Pending Travel Agency Update"
            },
            "approved": false,
            "businessPurpose": "Leisure Trip",
            "canceledPostApproval": false,
            "closed": false,
            "comment": "Bon voyage\n",
            "creationDate": "2019-06-03T21:14:42.000Z",
            "endDate": "2019-08-25",
            "everSentBack": false,
            "expenses": [],
            "highestExceptionLevel": "NONE",
            "name": "Dream Trip To Paris",
            "owner": {
                "href": "https://us.api.concursolutions.com/profile/v1/users/eaf089a5-1569-31ab-95d2-7ef8dc58354a",
                "id": "eaf089a5-1569-31ab-95d2-7ef8dc58354a",
                "template": "https://us.api.concursolutions.com/profile/v1/users/{id}",
                "firstName": "William",
                "middleInitial": "p",
                "lastName": "Never2"
            },
            "pendingApproval": true,
            "requestId": "3339",
            "startDate": "2019-07-26",
            "submitDate": "2019-06-03T21:29:50.000Z",
            "totalApprovedAmount": {
                "value": 12000,
                "currency": "USD"
            },
            "totalPostedAmount": {
                "value": 12000,
                "currency": "USD"
            },
            "totalRemainingAmount": {
                "value": 12000,
                "currency": "USD"
            },
            "type": {
                "code": "TRAVEL",
                "label": "Travel"
            }
        },
        {
            "href": "https://us.api.concursolutions.com/travelrequest/v4/requests/C1CDF36851BF1645ABA76C92A91DE06E",
            "id": "C1CDF36851BF1645ABA76C92A91DE06E",
            "approvalStatus": {
                "code": "SUBMITTED",
                "name": "Pending Travel Agency Update"
            },
            "approved": false,
            "businessPurpose": "Business Visit",
            "canceledPostApproval": false,
            "closed": false,
            "comment": "Book a travel\n",
            "creationDate": "2019-05-30T17:47:06.000Z",
            "endDate": "2019-07-01",
            "everSentBack": false,
            "expenses": [],
            "highestExceptionLevel": "NONE",
            "name": "Book To California",
            "owner": {
                "href": "https://us.api.concursolutions.com/profile/v1/users/eaf089a5-1569-31ab-95d2-7ef8dc58354a",
                "id": "eaf089a5-1569-31ab-95d2-7ef8dc58354a",
                "template": "https://us.api.concursolutions.com/profile/v1/users/{id}",
                "firstName": "William",
                "middleInitial": "p",
                "lastName": "Never2"
            },
            "pendingApproval": true,
            "requestId": "3336",
            "startDate": "2019-06-28",
            "submitDate": "2019-05-30T17:51:31.000Z",
            "totalApprovedAmount": {
                "value": 400,
                "currency": "USD"
            },
            "totalPostedAmount": {
                "value": 400,
                "currency": "USD"
            },
            "totalRemainingAmount": {
                "value": 400,
                "currency": "USD"
            },
            "type": {
                "code": "TRAVEL",
                "label": "Travel"
            }
        },
        {
            "href": "https://us.api.concursolutions.com/travelrequest/v4/requests/47ACF629CB38F54EAEAB227BFC4E09C8",
            "id": "47ACF629CB38F54EAEAB227BFC4E09C8",
            "approvalStatus": {
                "code": "SUBMITTED",
                "name": "Pending Travel Agency Update"
            },
            "approved": false,
            "businessPurpose": "Buisness Travel",
            "canceledPostApproval": false,
            "closed": false,
            "comment": "Travel\n",
            "creationDate": "2019-05-30T17:48:49.000Z",
            "endDate": "2019-07-01",
            "everSentBack": false,
            "expenses": [],
            "highestExceptionLevel": "NONE",
            "name": "Book to BLR",
            "owner": {
                "href": "https://us.api.concursolutions.com/profile/v1/users/eaf089a5-1569-31ab-95d2-7ef8dc58354a",
                "id": "eaf089a5-1569-31ab-95d2-7ef8dc58354a",
                "template": "https://us.api.concursolutions.com/profile/v1/users/{id}",
                "firstName": "William",
                "middleInitial": "p",
                "lastName": "Never2"
            },
            "pendingApproval": true,
            "requestId": "3337",
            "startDate": "2019-06-28",
            "submitDate": "2019-05-30T17:53:21.000Z",
            "totalApprovedAmount": {
                "value": 3000,
                "currency": "USD"
            },
            "totalPostedAmount": {
                "value": 3000,
                "currency": "USD"
            },
            "totalRemainingAmount": {
                "value": 3000,
                "currency": "USD"
            },
            "type": {
                "code": "TRAVEL",
                "label": "Travel"
            }
        },
        {
            "href": "https://us.api.concursolutions.com/travelrequest/v4/requests/4A8BA47815C5034CB5493A1F5F57351F",
            "id": "4A8BA47815C5034CB5493A1F5F57351F",
            "approvalStatus": {
                "code": "SUBMITTED",
                "name": "Pending Travel Agency Update"
            },
            "approved": false,
            "businessPurpose": "save",
            "canceledPostApproval": false,
            "closed": false,
            "creationDate": "2019-05-28T19:25:42.000Z",
            "endDate": "2019-06-12",
            "everSentBack": false,
            "expenses": [],
            "highestExceptionLevel": "NONE",
            "name": "Trip to Bangalore",
            "owner": {
                "href": "https://us.api.concursolutions.com/profile/v1/users/ba6a1658-7d6d-3659-b8a5-884319f6d724",
                "id": "ba6a1658-7d6d-3659-b8a5-884319f6d724",
                "template": "https://us.api.concursolutions.com/profile/v1/users/{id}",
                "firstName": "William",
                "middleInitial": "p",
                "lastName": "Never"
            },
            "pendingApproval": true,
            "requestId": "3334",
            "startDate": "2019-06-04",
            "submitDate": "2019-05-28T19:29:46.000Z",
            "totalApprovedAmount": {
                "value": 3000,
                "currency": "USD"
            },
            "totalPostedAmount": {
                "value": 3000,
                "currency": "USD"
            },
            "totalRemainingAmount": {
                "value": 3000,
                "currency": "USD"
            },
            "type": {
                "code": "TRAVEL",
                "label": "Travel"
            }
        }
    ],
    "operations": [
        {
            "rel": "first",
            "href": "https://us.api.concursolutions.com/v4/requests?view=ACTIVE&limit=10&start=0&sortField=startDate&sortOrder=DESC"
        },
        {
            "rel": "last",
            "href": "https://us.api.concursolutions.com/v4/requests?view=ACTIVE&limit=10&start=0&sortField=startDate&sortOrder=DESC"
        }
    ]
}
```

#### To view the traveler's profile, using "GET Travel Profile by UUID."

```
URI: GET https://us.api.concursolutions.com/api/travelprofile/v2.0/profile?uuid=eaf089a5-1569-31ab-95d2-7ef8dc58354a
Content-Type: application/xml
Authorization: Bearer {{access_token}}
```

#### Response

```
<?xml version="1.0" encoding="utf-8"?>
<ProfileResponse xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" Status="Active" LoginId="wsadmin@pe30-connect.com" Unique="">
    <General>
        <NamePrefix />
        <FirstName>William</FirstName>
        <MiddleName>pe30</MiddleName>
        <LastName>Never</LastName>
        <NameSuffix />
        <PreferredName />
        <JobTitle />
        <CompanyEmployeeID>1000100010003</CompanyEmployeeID>
        <PreferredLanguage>en</PreferredLanguage>
        <HasOpenBooking>false</HasOpenBooking>
        <CountryCode>US</CountryCode>
        <CompanyName>SAP Concur Connect TMC-130-PE</CompanyName>
        <CompanyID>283423</CompanyID>
        <RuleClass>Default Travel Class</RuleClass>
        <TravelConfigID>146793</TravelConfigID>
        <UUID>4b81eb15-da89-4964-987c-9a61ff01eb65</UUID>
    </General>
    <Addresses />
    <EmailAddresses>
        <EmailAddress Contact="true" Type="Business">wsadmin@pe30-connect.com</EmailAddress>
    </EmailAddresses>
    <RatePreferences>
        <AAARate>false</AAARate>
        <AARPRate>false</AARPRate>
        <GovtRate>false</GovtRate>
        <MilitaryRate>false</MilitaryRate>
    </RatePreferences>
    <Air>
        <AirMemberships />
        <Seat>
            <InterRowPositionCode>DontCare</InterRowPositionCode>
            <SectionPositionCode>DontCare</SectionPositionCode>
        </Seat>
        <AirOther />
    </Air>
    <Rail>
        <Seat>DontCare</Seat>
        <Coach>DontCare</Coach>
        <NoiseComfort>DontCare</NoiseComfort>
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
        <CarSmokingCode>DontCare</CarSmokingCode>
        <CarGPS>false</CarGPS>
        <CarType>DontCare</CarType>
        <CarMemberships />
        <CarOther />
        <CarSkiRack>false</CarSkiRack>
        <CarTransmission>DontCare</CarTransmission>
    </Car>
    <Hotel>
        <HotelSmokingCode>DontCare</HotelSmokingCode>
        <HotelMemberships />
        <RoomType>DontCare</RoomType>
        <PreferFoamPillows>false</PreferFoamPillows>
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
    <Roles />
    <TSAInfo />
</ProfileResponse>
```

#### To view the traveler's expenses fetch all active travel requests, using "Get TR by requests by status=ACTIVE."

```
{
   "href":"https://us.api.concursolutions.com/travelrequest/v4/requests/8354DDF8F1C6374BAE266293CF9",
"id": "8354DDF8F1C6374BAE25189266293CF9"
approvalStatus": {
                "code": "SUBMITTED",
                "name": "Pending Travel Agency Update"
 }
```

By passing the `travel_request_id` (id: "8354DDF8F1C6374BAE25189266293CF9") you can get the expenses for a traveler.

```
URI: GET https://us.api.concursolutions.com/travelrequest/v4/requests/8354DDF8F1C6374BAE25189266293CF9
Content-Type: application/json
Authorization: Bearer {{access_token}}
```

#### Response

```
{
    "href": "https://us.api.concursolutions.com/travelrequest/v4/requests/8354DDF8F1C6374BAE25189266293CF9",
    "id": "8354DDF8F1C6374BAE25189266293CF9",
    "approvalStatus": {
        "code": "SUBMITTED",
        "name": "Pending Travel Agency Update"
    },
    "approved": false,
    "businessPurpose": "Leisure Trip",
    "canceledPostApproval": false,
    "closed": false,
    "creationDate": "2019-06-03T21:14:42.000Z",
    "endDate": "2019-08-25",
    "everSentBack": false,
    "expensePolicy": {
        "href": "https://us.api.concursolutions.com/expenseconfig/v4/users/null/context/TRAVELER/policies/DC9A8A67FE220F48BB1C0C7A625FB4CB",
        "id": "DC9A8A67FE220F48BB1C0C7A625FB4CB",
        "template": "https://us.api.concursolutions.com/expenseconfig/v4/users/null/context/TRAVELER/policies/{id}"
    },
    "expenses": [
        {
            "href": "https://us.api.concursolutions.com/travelrequest/v4/expenses/04B6E512AC2FCD4FA66697D14CC964F5?userId=613cd9cd-9145-4806-ae6c-bfc7da54c9ab",
            "id": "04B6E512AC2FCD4FA66697D14CC964F5",
            "template": "https://us.api.concursolutions.com/travelrequest/v4/expenses/{id}?userId=613cd9cd-9145-4806-ae6c-bfc7da54c9ab"
        },
        {
            "href": "https://us.api.concursolutions.com/travelrequest/v4/expenses/5B1B4B514CE60243AF70F53062DFAE5B?userId=613cd9cd-9145-4806-ae6c-bfc7da54c9ab",
            "id": "5B1B4B514CE60243AF70F53062DFAE5B",
            "template": "https://us.api.concursolutions.com/travelrequest/v4/expenses/{id}?userId=613cd9cd-9145-4806-ae6c-bfc7da54c9ab"
        },
        {
            "href": "https://us.api.concursolutions.com/travelrequest/v4/expenses/B6D135D95C7E904988C6569410F8114B?userId=613cd9cd-9145-4806-ae6c-bfc7da54c9ab",
            "id": "B6D135D95C7E904988C6569410F8114B",
            "template": "https://us.api.concursolutions.com/travelrequest/v4/expenses/{id}?userId=613cd9cd-9145-4806-ae6c-bfc7da54c9ab"
        },
        {
            "href": "https://us.api.concursolutions.com/travelrequest/v4/expenses/7F06BECD2A87F64F87F346C94C7D095D?userId=613cd9cd-9145-4806-ae6c-bfc7da54c9ab",
            "id": "7F06BECD2A87F64F87F346C94C7D095D",
            "template": "https://us.api.concursolutions.com/travelrequest/v4/expenses/{id}?userId=613cd9cd-9145-4806-ae6c-bfc7da54c9ab"
        }
    ],
    "lastModified": "2019-06-03T21:29:50.000Z",
    "name": "Dream Trip To Paris",
    "owner": {
        "href": "https://us.api.concursolutions.com/profile/v1/users/613cd9cd-9145-4806-ae6c-bfc7da54c9ab",
        "id": "613cd9cd-9145-4806-ae6c-bfc7da54c9ab",
        "template": "https://us.api.concursolutions.com/profile/v1/users/{id}",
        "firstName": "William",
        "middleInitial": "p",
        "lastName": "Never2"
    },
    "pendingApproval": true,
    "policy": {
        "id": "C61AF0EA030FF243ABA2C4C115E0EA50"
    },
    "requestId": "3339",
    "startDate": "2019-07-26",
    "submitDate": "2019-06-03T21:29:50.000Z",
    "totalApprovedAmount": {
        "value": 12000,
        "currency": "USD"
    },
    "totalPostedAmount": {
        "value": 12000,
        "currency": "USD"
    },
    "totalRemainingAmount": {
        "value": 12000,
        "currency": "USD"
    },
    "travelAgency": {
        "href": "https://us.api.concursolutions.com/travelrequest/v4/travelagencies/D8E1B4B94CA13B4DA1642147B600731B",
        "id": "D8E1B4B94CA13B4DA1642147B600731B",
        "template": "https://us.api.concursolutions.com/travelrequest/v4/travelagencies/{id}"
    },
    "type": {
        "code": "TRAVEL",
        "label": "Travel"
    },
    "operations": [
        {
            "rel": "recall",
            "href": "https://us.api.concursolutions.com/travelrequest/v4/requests/8354DDF8F1C6374BAE25189266293CF9/recall?userId=613cd9cd-9145-4806-ae6c-bfc7da54c9ab"
        },
        {
            "rel": "cancel",
            "href": "https://us.api.concursolutions.com/travelrequest/v4/requests/8354DDF8F1C6374BAE25189266293CF9/cancel?userId=613cd9cd-9145-4806-ae6c-bfc7da54c9ab"
        }
    ]
}
```

#### To get the travelers request expenses, by passing `Expense_id` and `user_id`.

```
URI: GET https://us.api.concursolutions.com/travelrequest/v4/expenses/B6D135D95C7E904988C6569410F8114B?userId=613cd9cd-9145-4806-ae6c-bfc7da54c9ab
```

#### Response

```
{
    "href": "https://us.api.concursolutions.com/travelrequest/v4/expenses/B6D135D95C7E904988C6569410F8114B?userId=613cd9cd-9145-4806-ae6c-bfc7da54c9ab",
    "id": "B6D135D95C7E904988C6569410F8114B",
    "allocations": [
        {
            "allocationAmount": {
                "value": 1000,
                "currency": "USD"
            },
            "approvedAmount": {
                "value": 1000,
                "currency": "USD"
            },
            "allocationId": "52B89920BABD924B8FAAE9328B7B37C3",
            "postedAmount": {
                "value": 1000,
                "currency": "USD"
            },
            "expenseId": "B6D135D95C7E904988C6569410F8114B",
            "percentEdited": false,
            "systemAllocation": true,
            "percentage": 100
        }
    ],
    "approvedAmount": {
        "value": 1000,
        "currency": "USD"
    },
    "exchangeRate": {
        "value": 1,
        "operation": "MULTIPLY"
    },
    "expenseType": {
        "id": "CARRT",
        "name": "Car Rental",
        "href": "https://us.api.concursolutions.com/expenseconfig/v4/users/613cd9cd-9145-4806-ae6c-bfc7da54c9ab/context/TRAVELER/expensetypes/CARRT",
        "expKey": null,
        "formId": null,
        "customFormId": null,
        "hasSegment": null,
        "formType": null,
        "spendCategoryCode": null,
        "expId": null,
        "formula": null,
        "agencyVisible": null,
        "caRelated": null,
        "spendExpenseCode": null
    },
    "postedAmount": {
        "value": 1000,
        "currency": "USD"
    },
    "remainingAmount": {
        "value": 1000,
        "currency": "USD"
    },
    "transactionAmount": {
        "value": 1000,
        "currency": "USD"
    },
    "transactionDate": "2019-07-26T00:00:00.000Z",
    "tripData": {
        "agencyBooked": true,
        "selfBooked": false,
        "tripType": "ONE_WAY",
        "legs": [
            {
                "endDate": "2019-08-25",
                "endLocation": {
                    "id": "D0059541F7874D3A97F53ACD163FEB7E",
                    "countryCode": "US",
                    "countrySubDivisionCode": "US-WA",
                    "city": "Seattle",
                    "name": "Seattle",
                    "lnKey": 83926
                },
                "endTime": "01:00",
                "id": "11D37079654C4042AE5FC88D53D724F6",
                "returnLeg": false,
                "startDate": "2019-07-26",
                "startLocation": {
                    "id": "0BC6B782B77349898E2CA814F5B57C08",
                    "countryCode": "US",
                    "countrySubDivisionCode": "US-WA",
                    "city": "Seattle",
                    "name": "Seattle",
                    "lnKey": 29857
                },
                "startLocationDetail": "Airport Drop off",
                "startTime": "00:00"
            }
        ],
        "segmentType": {
            "category": "REQ_SEG_CARRT",
            "code": "CARRT"
        }
    }
}
```

#### To get the traveler's expense type details, by passing `ExpenseType_id` and `user_id`.

```
URI: GET https://us.api.concursolutions.com/expenseconfig/v4/users/613cd9cd-9145-4806-ae6c-bfc7da54c9ab/context/TRAVELER/expensetypes/01025
```

#### Response

```
{
    "expenseTypeId": "01025",
    "expenseCategoryCode": null,
    "expenseCode": "OTHER",
    "expenseCodeName": "Standard",
    "hasChildren": false,
    "isDeletable": true,
    "isDeleted": false,
    "isReadOnly": false,
    "isSystemRecord": false,
    "isUsedInItemizationConfig": false,
    "isVisibilityCodeEditable": true,
    "itemizationType": "NREQ",
    "name": "Train",
    "parentExpenseKey": "TRANS",
    "parentName": "02. Transportation",
    "showOnMobile": true,
    "spendCategoryCode": "RAILX",
    "spendCategoryName": "Train",
    "visibilityCode": "ALWAYS",
    "links": [
        {
            "rel": "self",
            "href": "https://seapr1ecs.concurasp.com/expenseconfig/v4/users/613cd9cd-9145-4806-ae6c-bfc7da54c9ab/context/TRAVELER/expensetypes/01025"
        }
    ]
}
```

## <a name="agency-proposal"></a>Agency Submits Proposals

Agencies store the Travel Request and Expense details, and use that information to create proposals that will be shared with the traveler.

TMCs can submit up to three proposals for a traveler for each travel request submitted.

Prerequisites:
*  Sign in to your SAP Concur Travel and Expense User Profile.
*  Select **Profile Settings**.
*  Select **Request Setting** then **Request Information**.
*  In the **Default Travel Agency** drop down, select the agency.

![Set the default travel agency](images/14-default-travel-agency.png)

The following fields will help you submit proposals to a traveler.

#### ProposalBatchSize

You can submit up to three proposals in a series known as **batches** per trip request. You need to pass the value in the `data` element for `ProposalBatchSize` and `ProposalSequenceIndex` for the number of proposals you are submitting in the POST.

```
<Name>ProposalBatchSize</Name>
     <DisplayTitle />
     <Data>3</Data>
     <DisplayOnItinerary>true</DisplayOnItinerary>
```
![Code example showing proposal batch size and proposal sequence index](images/15-submit-proposal.png)

Now, you can submit the proposal and see the response on the successful submission of a proposal.

You now have the `ItinLocator`, `TripId`, and `TripLinkLocator` generated.

### <a name="trip-status"></a>Trip Status

You can track our proposals submitted by using Request ID. Log the Trip ID that is returned in the response and associate those Trip IDs with the Request IDs. Proposals are submitted as itineraries. The itineraries are identified by the value in the `TripStatus` element.

A trip status of “7” indicates to our system this is a proposal.

![Code example showing the itinerary, trip ID, and trip link locator, and trip status](images/16-triplink-locator.png)

## <a name="review-proposal"></a>Reviewing a Proposal

Traveler reviews and selects one of the three proposals.

![Postman example showing proposal submission](images/17-submit-proposal-postman.png)

Once you submit the proposal successfully, you can see the **Agency Proposal** option by logging into your Concur Travel account.

You can see the proposal comparison for each category.

**Air Proposal**

![Comparison screen showing flight options](images/19-air-proposal.png)

**Car Rental Proposal**

![Comparison screen showing car rental options](images/20-car-proposal.png)

**Hotel Proposal**

![Comparison screen showing hotel options](images/21-hotel-proposal.png)

**Note**: Each travel proposal submitted, is associated with its `Travel_Request_Id` and `Trip_Id`. The traveler can select the proposals that best meets their needs.

### <a name="agency-notification"></a>Agencies Receive Notification of Proposal Selected by Traveler

Once the traveler selects one of the proposals, the agencies receives notification. It is then sent to ticketing, by setting `TripStatus` to “0 or 1.”

![Code example showing trip status](images/22-trip-status-ticketing.png)

### <a name="convert-proposal"></a>Convert Proposal to Actual PNR

Each travel proposal is submitted, based on its `Travel_Request_Id` and `Trip_Id`.

![Code example showing PNR](images/23-actual-pnr.png)

### <a name="traveler-notified"></a>Traveler Notified of Confirmed Booking and Receives Itinerary

Itinerary appears in traveler's trip library.

![SAP Concur UI showing trip details in the trip library](images/24-trip-library.png)

**Traveler's Itinerary**

![SAP Concur UI showing itinerary details](images/25-itinerary.png)

### <a name="cancel"></a>Cancel Itinerary

You can always cancel the itinerary if the traveler's needs change.
