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
