---
title: Get Started
layout: reference
---

# Request
Concur Request automates the spend request and approval process for both travel and everyday expenses, giving you the data you need to accurately track and better control spending. By increasing visibility into planned expenses and up-to-date budget data, you can make strategic spending decisions before any spending actually occurs. The Request resource provides many abilities, including requests creation and transition into the approval workflow.

## Get Started

- [Overview](#overview)
- [Version](#version)
  - [Overview version V4.0](#overviewV4)
- [Regional Availability](#regional)
  - [With Swagger](#swagger)
  - [With Curl](#curl)
- [Explore the API](#explore-api)
  - [Prerequisites](#prerequisites)
  - [Acquire an Access Token](#token)
  - [Explore the API in JavaScript](#javascript)
    - [Retrieve a User Access Token](#retrieve-token)
    - [Post a Request](#post-request)
- [Resources](#resource)
  - [Expense](#expense-resource)
  - [Request](#request-resource)
  - [Travel Agency](#travel-agency-resource)
  - [Workflow](#workflow-resource)
- [Data Format](#data-format)
  - [Request](#request)
  - [ApprovalStatus](#status)
  - [Customfield](#customfield)
  - [Location](#location)
  - [Amount](#amount)
  - [ResourceLink](#resourcelink)
  - [RequestLink](#requestlink)
  - [Link](#link)
- [Examples](#examples)
  - [Create expense](#create-expense_examples)


### <a name="overview"></a>Overview

The Request V4 API has 5 resources:

1. __Estimate resource__ - Estimate the previsional cost of request segments.
2. __Expense resource__ - You can  select, create, update or delete an expense or show the list of expense link to a request.
3. __Request resource__ - You can select, create, update or delete a request or show a list of requests.
4. __Travel Agency resource__ - You can get the description of a travel agency office.
5. __Workflow resource__ - You can advance a request in a new authorized status.

Manage documents used for pre-spend authorizations within Concur Request.

### <a name="version"></a>Version

- 4.0
- [3.0](/api-reference-deprecated/version-three/request.html)
- [1.0](/api-reference-deprecated/version-one/Travel/travel-request.html)

#### <a name="overviewV4"></a>Overview of Version 4.0

Version 4.0 of the Requests API offers features like passive approval, Data retention, rigth to be forgotten or estimate.

It works only with the new [Authentication API](https://developer.concur.com/api-reference/authentication/apidoc.html).

### <a name="regionalavailability"></a>Regional Availability
#### <a name="sawagger"></a>With swagger
For US production
```
https://sea-raas.concurasp.com
```
For EMEA production
```
https://par-raas.concurasp.com/
```
For China production
```
https://raas.service.cnqr.io/
```
#### <a name="curl"></a>With curl
For US production
```
curl -X POST --H 'Content-Type: application/json' --H 'Accept: application/json' --header "Authorization: Bearer {YOUR ACCESS TOKEN}" -d { "name": "Your action name" } https://us.api.concursolutions.com/travelrequest/v4/...
```
For EMEA production
```
curl -X POST --H 'Content-Type: application/json' --H 'Accept: application/json' --header "Authorization: Bearer {YOUR ACCESS TOKEN}" -d { "name": "Your action name" } https://emea.api.concursolutions.com/travelrequest/v4/...
```
For China production
```
curl -X POST --H 'Content-Type: application/json' --H 'Accept: application/json' --header "Authorization: Bearer {YOUR ACCESS TOKEN}" -d { "name": "Your action name" } https://cn.api.concurdc.cn/travelrequest/v4/...
```


### <a name="explore-api"></a>Explore the API

#### <a name="prerequisites">Prerequisites

1. [Create a sandbox](https://developer.concur.com/manage-apps/register.html) if you don't already have one.
2. Read the [Getting Started](https://developer.concur.com/api-reference/authentication/getting-started.html) section of [Authentication API](https://developer.concur.com/api-reference/authentication/apidoc.html).

Once you have registered your application, read about the [API endpoints](/api-reference/receipts/endpoints.html), or click the button to download a request collection for Postman.

<a href="https://app.getpostman.com/run-collection/bfe85f4a4e435a161a8a" target="_blank" onclick="ga('send', 'event', 'Postman', 'Click', 'https://app.getpostman.com/run-collection/bfe85f4a4e435a161a8a');">
  <img src="https://run.pstmn.io/button.svg" alt="Run in Postman">
</a>

#### <a name="token">Retrieve a User Access Token:

Before making requests to the Requests API, you must [obtain an access token from the Authentication API](https://developer.concur.com/api-reference/authentication/getting-started.html).

The response will include an `access_token` field, which contains your access token. For subsequent calls, you will need to include this access token in the `Authorization` header of your calls. An `id_token` will be also included in the response. In order to retrieve the unique ID for your user, you will have to decode this `id_token` at [jwt.io](https://jwt.io/). You will need this ID in order to post requests.

Examples:

cURL:

```shell
curl -d "client_secret={YOUR SECRET}&client_id={YOUR CLIENT ID}&grant_type=password&username={YOUR USERNAME}&password={YOUR PASSWORD}" https://us.api.concursolutions.com/oauth2/v0/token
```

HTTPie:

```shell
http -f POST https://us.api.concursolutions.com/oauth2/v0/token client_secret={YOUR SECRET} client_id={YOUR CLIENT ID} grant_type=password username={YOUR USERNAME} password=P{YOUR PASSWORD}
```

#### <a name="javascript">Explore the API in JavaScript

Below are some simple NodeJS code snippets for getting a token and posting a request.

##### <a name="retrieve-token">Retrieve a User Access Token:

```js
'use strict';
const request = require('request');

request.post({
    url:'https://us.api.concursolutions.com/oauth2/v0/token',
    form: {
        client_secret: 'YOUR VALUE HERE',
        client_id: 'YOUR VALUE HERE',
        username: 'YOUR VALUE HERE',
        password: 'YOUR VALUE HERE',
        grant_type: 'password'
    }},
    (err, httpResponse, body) => {
        if(err) { console.log(err); }
        console.log('Status:', httpResponse.statusCode);
        console.log('Response:', body);
    });
```

##### <a name="post-request">Post a Request

```js
'use strict';
const https = require('https');

const ACCESS_TOKEN = 'YOUR ACCESS TOKEN HERE';
const USER_ID = 'YOUR VALUE HERE';
const request = JSON.stringify(YOUR_REQUEST_HERE);

const options = {
    hostname: 'us.api.concursolutions.com',
    path: `/travelrequest/v4/users/${USER_ID}`,
    method: 'POST',
    headers: {
        'Authorization': `Bearer ${ACCESS_TOKEN}`,
        'Content-Type': 'application/json',
        'Content-Length': Buffer.byteLength(request),
        'Link': '<https://schema.concursolutions.com/general-receipt.schema.json>;rel=describedBy'
    }
};

const req = https.request(options, (res) => {
    console.log('statusCode:', res.statusCode);
    console.log('headers:', res.headers);

    res.on('data', (data) => {
        process.stdout.write(data);
    });
});

req.write(receipt);
req.end();

req.on('error', (e) => {
    console.error(e);
});
```

### <a name="resource">Resources
Manage documents used for pre-spend authorizations within Concur Request.

#### <a name="request-resource">Request
- __Create a new request__

POST /v4/requests

*Parameters:*
| Name | Parameter Type | Data Type | Description |
| :---: | :-------: | :--------: | ------ |
| - | body | Request | Required The content of the Request to create |

*Response:*

[Request](#request)

- __Get the list of existing requests__

GET /v4/requests

*Parameters:*
No parameter

*Response:*
Name | Type | Format | Description
--- | :---: | :---: | ------
data | array | [Request](#request) | List of requests
operations | string | [RFC 5988](https://tools.ietf.org/html/rfc5988) | Pagination links to next/prev/first/last pages

- __Get the content of an existing request__

GET /v4/requests/{requestUuid}

*Parameters:*
Name | Parameter Type | Data Type | Description
--- | :---: | :---: | ------
requestUuid | path | string | Required The unique identifier of the Request

*Response:*

[Request](#request)

- __Update the content of an existing request__

PUT /v4/requests/{requestUuid}

*Parameters:*
Name | Parameter Type | Data Type | Description
--- | :---: | :---: | ------
requestUuid | path | string | Required The unique identifier of the Request
- | body | [Request](#request) | Required The content of the Request to update
*Response:*

[Request](#request)

- __Delete an existing request__

DELETE /v4/requests/{requestUuid}

*Parameters:*
Name | Parameter Type | Data Type | Description
--- | :---: | :---: | ------
requestUuid | path | string | Required The unique identifier of the Request

*Response:*
[HTTP status](#httpstatus)

- __Create an expense report linked to an approved request__

POST /v4/requests/{requestUuid}/reports

*Parameters:*
Name | Parameter Type | Data Type | Description
--- | :---: | :---: | ------
requestUuid | path | string | Required The unique identifier of the Request

*Response:*
[ResourceLink](#resourcelink)


#### <a name="workflowresource">Workflow resource

Manage workflow transitions for a Request document.
- __Move an existing request in the approval workflow__

POST /v4/requests/{requestUuid}/{action}

The HATEOAS links for actions available given the current user and state are listed in the operations of the Request resource.

    Traveler actions
        submit: initiate the approval workflow
        recall: get back the Request, usually to modify the content
        cancel: cancel the Request and attached itineraries
        close: archive the Request
        reopen: get back an archived Request
    Approver / Processor actions
        approve: move the Request to the next approval step
        sendback: reject the Request and send back to the Traveler

*Parameters:*
Name | Parameter Type | Data Type | Description
--- | :---: | :---: | ------
requestUuid | path | string | __Required__ The unique identifier of the Request
action | path | string | Required The state transition to be executed (submit, approve, recall, sendback, cancel, close or reopen)

*Response:*
[Request](#request-resource)

#### <a name="expense-resource">Expense resource

Manage expected expense entries attached to a Request document.
- __Create a new expected expense__

POST /v4/requests/{requestUuid}/expenses

*Parameters:*
Name | Parameter Type | Data Type | Description
--- | :---: | :---: | ------
requestUuid | path | string | __Required__ The unique identifier of the Request to which the expense is attached
body | object | [Expense resource](#expense-resource) | __Required__ The expense content to create

*Response:*

Get expected expenses attached to a request

GET /v4/requests/{requestUuid}/expenses

*Parameters:*
Name | Parameter Type | Data Type | Description
--- | :---: | :---: | ------
requestUuid | path | string | __Required__ The unique identifier of the Request

*Response:*
Name | Type | Format | Description
--- | :---: | :---: | ------
data | array | [Expense](#expense) | List of entries attached to a Request.
operations | string | [RFC 5988](https://tools.ietf.org/html/rfc5988) | Pagination links to next/prev/first/last page.

- __Get an existing expected expense__

GET /v4/expenses/{expenseUuid}

*Parameters:*
Name | Parameter Type | Data Type | Description
--- | :---: | :---: | ------
expenseUuid | path | string | __Required__ The unique identifier of the Expense

*Response:*
[Expense](#expense)

- __Update the content of an existing expected expense__

PUT /v4/expenses/{expenseUuid}

*Parameters:*
Name | Parameter Type | Data Type | Description
--- | :---: | :---: | ------
expenseUuid | path | string | __Required__ The unique identifier of the Expense to update
body | object | [Expense](#expense) | Required The expense content to update

*Response:*
[Expense](#expense)

- __Delete an expected expense from the request__

DELETE /v4/expenses/{expenseUuid}
*Parameters:*
Name | Parameter Type | Data Type | Description
--- | :---: | :---: | ------
expenseUuid | path | string | __Required__ The unique identifier of the Expense to delete

*Response:*
[HTTP status](#httpstatus)

#### <a name="travel-agency-resource">Travel agency resource

Manage the configuration for travel agencies integrated with Concur Request.
Get the description of a travel agency office

GET /v4/travelagencies/{agencyUuid}

*Parameters:*
Name | Parameter Type | Data Type | Description
--- | :---: | :---: | ------
agencyUuid | path | string | __Required__ The unique identifier of the Travel Agency

*Response:*
Name | Type | Format | Description
--- | :---: | :---: | ------
emailAddress | string | - | The travel agency email address
id | string | - | The travel agency unique identifier
name | string | - | The travel agency office name
proposalType | string| - | The travel agency proposal type. Possible value: CWT, CWTF, AEBT or API


### <a name="data-format">Data Format
#### <a name="request">Request
Name | Type | Format | Description |
------------- | :-------: | :--------: | ------
approvalLimitDate | timestamp | [RFC 3339](https://tools.ietf.org/html/rfc3339) | The date by which the Request must be approved. This element appears only when integrated with Concur Travel (in the format yyyy-MM-dd'T'HH:mm:ss.SSS'Z')
approvalStatus | object | [ApprovalStatus](#status) | The approval status of the Request |
| authorizedDate | timestamp | [RFC 3339](https://tools.ietf.org/html/rfc3339) | For approved request, the date at which the approval process was completed (in the format yyyy-MM-dd'T'HH:mm:ss.SSS'Z')
businessPurpose | string | - | The business purpose of the Request
closed | boolean | - | Indicates whether this request is closed
creationDate | timestamp | [RFC 3339](https://tools.ietf.org/html/rfc3339) | The date the Request was created (in the format yyyy-MM-dd'T'HH:mm:ss.SSS'Z')
comment | string | - | The last comment attached to this Request
custom1 to custom20 | object | [CustomField](#customfield) | The details from the Custom fields. These fields may not have data, depending on the configuration
endDate | date | [ISO 8601](https://www.iso.org/iso-8601-date-and-time-format.html) | The end date of the Request (in the format yyyy-MM-dd)
endTime | time | [ISO 8601](https://www.iso.org/iso-8601-date-and-time-format.html) | The end time of the Request (in the format HH:mm)
everSentBack | boolean | - | Indicates whether the Request has ever been sent back to the employee
expenses | array | [ResourceLink](#resourcelink) | Expected expenses attached to this Request
extensionOf | object | [RequestLink](#requestlink) | The Request that this Request is an extension of, or adendum to
href | string | [RFC 3986](https://tools.ietf.org/html/rfc3986) | Hyperlink to the resource for this Request
id | string | - | The unique identifier of the Request
lastModified | timestamp | [RFC 3339](https://tools.ietf.org/html/rfc3339) | The date the Request was last modified (in the format yyyy-MM-dd'T'HH:mm:ss.SSS'Z')
mainDestination | object | [ResourceLink](#resourcelink) | The main destination for Travel related Requests
name | string | - | The name of the Request
owner | object | [ResourceLink](#resourcelink) | The employee who owns the Request
policy | object | [ResourceLink](#resourcelink) | The policy that applies to the Request
requestId | string | 4 to 6 alphanumeric characters | The public key of the Request (unique per customer)
startDate | date | [ISO 8601](https://www.iso.org/iso-8601-date-and-time-format.html) | The start date of the Request (in the format yyyy-MM-dd)
startTime | time | [ISO 8601](https://www.iso.org/iso-8601-date-and-time-format.html) | The start time of the Request (in the format HH:mm)
submitDate | timestamp | [RFC 3339](https://tools.ietf.org/html/rfc3339) | The date the Request was submitted (last submit date in case of recall) (in the format yyyy-MM-dd'T'HH:mm:ss.SSS'Z')
totalApprovedAmount | object | [Amount](#amount) | The total amount of approved expenses in the Request, expressed in the reimbursement currency of the employee at the time he created the request
totalPostedAmount | object | [Amount](#amount) | The total amount of the Request, expressed in the reimbursement currency of the employee at the time he created the request
totalRemainingAmount | object | [Amount](#amount) | The total amount not included in an Expense report, expressed in the reimbursement currency of the employee at the time he created the request
travelAgency | object | [ResourceLink](#resourcelink) | The travel agency office that is managing the trip associated to this request
operations | array | [Link](#link) | Links to operations available for the request, depends on the current approval status
#### <a name="status">ApprovalStatus
Name | Type | Format | Description
--- | :---: | :---: | ------
code | string | - | The code for the approval status the Request. Possible values: NOT_SUBMITTED, SUBMITTED, APPROVED, CANCELED or SENTBACK
name | string | - | The approval status of the Request in the current user's language
#### <a name="customfield">CustomField
Name | Type | Format | Description
--- | :---: | :---: | ------
code | string | - | The short code for the list item. For non-list fields, this value will be blank
value | string | -  | The value of the non-list item. For list fields, this value will contain the name of the list item
listItemId | string | - | The unique id of the item in case of a list item
href | string | - | The link to get this list item on the list service. Empty for non-list items.
#### <a name="location">Location
Name | Type | Format | Description
--- | :---: | :---: | ------
countryCode | string | [ISO 3166-1](https://www.iso.org/iso-3166-country-codes.html) | The ISO 3166-1 country code
countrySubDivisionCode | string | [ISO 3166-2](https://www.iso.org/standard/63546.html) | The ISO 3166-2 country sub code
city | string | - | The city name
iataCode | string | - | The IATA code of the location
name | string | - | The name of the location
#### <a name="amount">Amount
Name | Type | Format | Description
--- | :---: | :---: | ------
value | number | - | Required The amount in the defined currency
currency | string | [ISO 4217:2015](#https://www.iso.org/standard/64758.html) | Required The 3-letter ISO 4217 code for the currency in which the amount is expressed
#### <a name="resourcelink">ResourceLink
Name | Type | Format | Description
--- | :---: | :---: | ------
href | string | [RFC 3986](https://tools.ietf.org/html/rfc3986) | Hyperlink to the resource
id | string |[RFC 4122](https://tools.ietf.org/html/rfc4122) | Unique identifier of the related object
template | string | - | Hyperlink template to the resource
#### <a name="requestlink">RequestLink
Name | Type | Format | Description
--- | :---: | :---: | ------
requestId | string | 4 to 6 alphanumeric characters | The public key of the Request (unique per customer)
#### <a name="link">Link
Name | Type | Format | Description
--- | :---: | :---: | ------
rel | string | [RFC 5988](https://tools.ietf.org/html/rfc5988) | Relation type as defined by the server. There are registered relation types listed in RFC 5988 6.2.2. Initial Registry Contents including pagination relation types of next, prev, first and last
href| string| [RFC 3986](https://tools.ietf.org/html/rfc3986) | Hyperlink to the resource

#### <a name="expense">Expense

Name | Type | Format | Description
--- | :---: | :---: | ------
allocations | object | [Allocation](#allocation) | The details of the allocations for this expense.
approvedAmount | object | [Amount](#amount) | The approved amount of the expense entry, in the transaction currency of the request
budgetAccrualDate | timestamp | [RFC 3339](https://tools.ietf.org/html/rfc3339) | The date to determine which budgets are affected (in the format yyyy-MM-dd'T'HH:mm:ss.SSS'Z')
businessPurpose | string | - | The business purpose of the Request entry
custom1 to custom40 | object | [CustomField](#customfield) | The details from the Custom fields. These fields may not have data, depending on the configuration
exchangeRate | object | [Exchange Rate](#exchangerate) | The exchange rate that applies to the entry
expenseType | object | [Expense Type](#expensetype) | The expense type of the entry. Required for expected expenses, automatically set for segments depending on the SegmentType code.
href | string | [RFC 3986](https://tools.ietf.org/html/rfc3986) | Hyperlink to the resource for this Request entry
id | string | - | The unique identifier of the expense entry
lastComment | string | - | The last comment (most recent) of the expense entry
lastModifiedDate | timestamp | [RFC 3339](https://tools.ietf.org/html/rfc3339) | The date when this expense was last modified
location | object | [Location](#location) | The location of the expense entry
orgUnit1 to orgUnit6 | object | [Amount](#amount) | The details from the Custom fields. These fields may not have data, depending on the configuration
postedAmount | object | [Amount](#amount) | The posted amount of the expense entry, in the transaction currency of the request
remainingAmount | object | [Amount](#amount) | The remaining amount of the expense entry, in the transaction currency of the request
transactionAmount | object | [Amount](#amount) | Required The amount of the expense entry, in the transaction currency paid to the vendor
transactionDate | timestamp | [RFC 3339](https://tools.ietf.org/html/rfc3339) | Required The date of the transaction (in the format yyyy-MM-dd'T'HH:mm:ss.SSS'Z')
travelAllowance | object | [Travel Allowance](#travelallowance) | The Travel allowance
tripData | object | [Trip Data](#tripdata) | The description of the trip
vendor | object | [Vendor](#vendor) | The vendor of the expense entry

#### <a name="allocation">Allocation
Name | Type | Format | Description
--- | :---: | :---: | ------
allocationAmount | object | [Amount](#amount) | The amount of the allocation calculated with the percentage value multiplied by the transaction amount on the expense. This amount is given in the transaction's currency and rounded to 8 decimals after decimal point.
approvedAmount | object | [Amount](#amount) | The amount of the allocation calculated with the percentage value multiplied by the approved amount on the expense. This amount is given in the user's currency and rounded to 8 decimals after decimal point.
allocationId | string | - | The unique allocation identifier
custom1 to custom20 | object | [CustomField](#customfield) | The details from the Custom fields. These fields may not have data, depending on the configuration
expenseId | string | - | The unique identifier of the expense associated with the allocation
percentEdited | boolean | - | Whether the allocation percent has been edited
percentage | number | - | The percentage of the total expense that this allocation represents
postedAmount | object | [Amount](#amount) | The amount of the allocation calculated with the percentage value multiplied by the posted amount on the expense. This amount is given in the user's currency and rounded to 8 decimals after decimal point.
systemAllocation | boolean | - | Whether the allocation is a system allocation, usually hidden from the user. If displayed to the user, should be read-only

#### <a name="exchangerate">Exchange Rate
Name | Type | Format | Description
--- | :---: | :---: | ------
operation | string | - | Exchange rate operation. Possible values are: MULTIPLY or DIVIDE
value | number | - | Exchange rate value

#### <a name="expensetype">Expense Type
Name | Type | Format | Description
--- | :---: | :---: | ------
id | string | - | Required Unique identifier of the expense type
name | string | - | Name of the expense type
href | string | [RFC 3986](https://tools.ietf.org/html/rfc3986) | Hyperlink to the resource for the expense type definition

#### <a name="travelallowance">Travel AllowanceLink
Name | Type | Format | Description
--- | :---: | :---: | ------
dailyTravelAllowanceId | string | - | The fixed daily travel allowance id associated with the expense

#### <a name="tripdata">Trip Data
Name | Type | Format | Description
--- | :---: | :---: | ------
agencyBooked | boolean | - | True if this travel is (or has to be) handled by a travel agency
legs | list | [Segment Leg](#segmentleg) | The list of the legs of the travel
tripType | string | - | Indicates the type of this trip. Should be one of "ONE_WAY", "ROUND_TRIP" or "MULTI_STOPS". IF not provided, will be detected from the given legs.
segmentType | object | [Segment Type](#segmenttype) | Required The type of the segment
selfBooked | boolean | - | True if this travel has been reserved by Concur Travel, or if Concur Travel has retrieved the trip information in the GDS

#### <a name="vendor">Vendor
Name | Type | Format | Description
--- | :---: | :---: | ------
id | string | - | The vendor identifier of the entry
name | string | - | The vendor description of the entry

#### <a name="segmentleg">Segment Leg
Name | Type | Format | Description
--- | :---: | :---: | ------
comment | string | - | Contains the last comment saved in this segment leg.
classOfService | string | - | The class of service of the segment leg. For example, in the case of an air segment, this field would contain the one-letter booking code: Y for economy class, or F for first class...
custom1 to custom40 | object | [CustomField](#customfield) | The details from the Custom fields. These fields may not have data, depending on the configuration
endDate | date | [ISO 8601](https://www.iso.org/iso-8601-date-and-time-format.html) | The date of the end of this segment leg (in the form YYYY-MM-DD). It represents the arrival date of AIRFR and TRAIN segments, check out date for HOTEL or drop off for CARRT
endLocation | object | [ResourceLink](#resourcelink) | The location where this segment leg arrives. This would be the arrival location for an air segment for example.
endLocationDetail | string | - | Details about the end location. This would contain details about the name of a hotel, or some details about a car rental agency for example.
endTime | time | [ISO 8601](https://www.iso.org/iso-8601-date-and-time-format.html) | The time for the end of this segment leg (in the form HH:MM)
id | string | - | The unique identifier of the segment leg
returnLeg | boolean | - | Indicates whether this leg is the return leg of a round trip. In case of a ROUND_TRIP, if not explicitly set, the second segment leg will be considered as the return leg.
startDate | date | [ISO 8601](https://www.iso.org/iso-8601-date-and-time-format.html) | The date of the beginning of this segment leg (in the form YYYY-MM-DD)
startLocation | object | [ResourceLink](#resourcelink) | The start location of this segment leg. This would be the departure location for an air segment for example.
startLocationDetail | string | - | Details about the start location. This would contain details about the name of a hotel, or some details about a car rental agency for example.
startTime | time | [ISO 8601](https://www.iso.org/iso-8601-date-and-time-format.html) | The time for the beginning of this segment leg (in the form HH:MM)
segmentLocator | string | - | This is the identifier for ConcurTravel segments (if applicable)
vendorName | string | - | Contains the vendor description of the segment leg.

#### <a name="segmenttype">Segment Type
Name | Type | Format | Description
--- | :---: | :---: | ------
category| enum | - | Describes the category of this segment type. Possible values are: REQ_SEG_AIRFR, REQ_SEG_CARRT, REQ_SEG_HOTEL, REQ_SEG_LIMOF, REQ_SEG_RAILF, REQ_SEG_TAXIF, REQ_SEG_MISC, REQ_SEG_PARKG, REQ_SEG_DININ, REQ_SEG_EVENT
code | string | - | __Required__ The code of the segment type. Possible values are: AIRFR, CARRT, HOTEL, LIMOF, RAILF, TAXIF, MISC, PARKG, DININ, EVENT or custom codes

It can be REQ_SEG_AIRFR / AIRFR for a regular air segment, or REQ_SEG_AIRFR / 10325 for a custom air segment.
eg.

{
    "category": "REQ_SEG_AIRFR",
    "code": "AIRFR"
}

### <a name="examples">Examples
    #### <a name="create-expense_examples">Create expense

curl -X POST --H 'Content-Type: application/json' --H 'Accept: application/json' --header "Authorization: Bearer {YOUR ACCESS TOKEN}" -d {YOUR EXPENSE JSON HERE} https://us.api.concursolutions.com/travelrequest/v4/requests/9DDC9963D1C09B48AC8F13193D607225/expenses

*Body*
```json
{
  "businessPurpose": "Test Expense creation",
  "expenseType": {
    "id": "AIRFR"
  },
  "transactionAmount": {
    "value": 100,
    "currency": "EUR"
  },
  "transactionDate": "2017-07-01T09:30:00.000Z"
}
```

*Response*
```json
{
  "href": "https://us.api.concursolutions.com/travelrequest/v4/expenses/38DB3AAE426A354EA424C0DAE7568AB2",
  "id": "38DB3AAE426A354EA424C0DAE7568AB2",
  "allocations": [
    {
      "allocationAmount": {
        "value": 64.00000000,
        "currency": "EUR"
      },
      "approvedAmount": {
        "value": 76.69600000,
        "currency": "USD"
      },
      "allocationId": "01DCE1DBC02442F08971C501CB9B8C79",
      "postedAmount": {
        "value": 76.69600000,
        "currency": "USD"
      },
      "custom1": {
        "code": "DEV",
        "listItemId": "B3F3BB730E9AC847AE6C732730CB3F7E"
      },
      "custom3": {
        "value": "Test Allocations"
      },
      "expenseId": "38DB3AAE426A354EA424C0DAE7568AB2",
      "percentage": 80,
      "percentEdited": false,
      "systemAllocation": false
    },
    {
      "allocationAmount": {
        "value": 16.00000000,
        "currency": "EUR"
      },
      "approvedAmount": {
        "value": 19.17400000,
        "currency": "USD"
      },
      "allocationId": "3910141DDD5840948E2FEF4410089511",
      "postedAmount": {
        "value": 19.17400000,
        "currency": "USD"
      },
      "custom1": {
        "code": "DEV",
        "listItemId": "B3F3BB730E9AC847AE6C732730CB3F7E"
      },
      "custom2": {
        "code": "Item 1.1",
        "listItemId": "CB17AFCA33BAF2438F281D6F92383613"
      },
      "custom3": {
        "value": "1234"
      },
      "expenseId": "38DB3AAE426A354EA424C0DAE7568AB2",
      "percentage": 20,
      "percentEdited": false,
      "systemAllocation": false
    }
  ],
  "businessPurpose": "Test Expense creation",
  "exchangeRate": {
    "value": 1.19837845659595,
    "operation": "MULTIPLY"
  },
  "expenseType": {
    "id": "AIRFR",
    "name": "Air fare",
    "href": "https://us.api.concursolutions.com/expenseconfig/v4/users/e05da31d-11a3-4e30-a41a-c8d277dd10b8/context/TRAVELER/expensetypes/AIRFR"
  },
  "transactionAmount": {
    "value": 80,
    "currency": "EUR"
  },
  "transactionDate": "2017-07-01T09:30:00.000Z",
  "tripData": {
      "segmentType": {
        "category": "REQ_SEG_AIRFR",
        "code": "AIRFR"
      },
      "legs": [
        {
          "startDate": "2017-09-05",
          "startTime": "08:00",
          "startLocation": {
            "id": "8794290E776F468F87F5A6CD69FCA006",
            "countryCode": "US",
            "city": "New York",
            "iataCode": "NYC"
          },
          "endLocation": {
            "id": "2C09DB70F92C4ADF89AE8F30FE6A711A",
            "countryCode": "US",
            "city": "Boston",
            "iataCode": "BOS"
          },
          "comment": "Trip to MIT",
          "vendorName": "Delta Airlines"
        },
        {
          "startDate": "2017-09-05",
          "startTime": "08:00",
          "startLocation": {
            "id": "2C09DB70F92C4ADF89AE8F30FE6A711A",
            "countryCode": "US",
            "city": "Boston",
            "iataCode": "BOS"
          },
          "endLocation": {
            "id": "8794290E776F468F87F5A6CD69FCA006",
            "countryCode": "US",
            "city": "New York",
            "iataCode": "NYC"
          }
        },
        "returnLeg": true
      ],
      "agencyBooked": true,
      "selfBooked": false,
      "tripType": "ROUND_TRIP"
    }
}
```
