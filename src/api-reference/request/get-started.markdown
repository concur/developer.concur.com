---
title: Get Started
layout: reference
---

# Request
Concur Request automates the spend request and approval process for both travel and everyday expenses, giving you the data you need to accurately track and better control spending. By increasing visibility into planned expenses and up-to-date budget data, you can make strategic spending decisions before any spending actually occurs. The Request resource provides many abilities, including Requests creation and transition into the approval workflow.

## Get Started

- [Overview](#overview)
- [Version](#version)
  - [Overview version V4.0](#overviewV4)
- [Regional Availability](#regionalavailability)
  - [With Swagger](#swagger)
  - [With Curl](#curl)
- [Explore the API](#explore-api)
  - [Prerequisites](#prerequisites)
  - [Acquire an Access Token](#token)
  - [Explore the API in JavaScript](#javascript)
    - [Retrieve a User Access Token](#retrieve-token)
    - [Post a request](#post-request)


### <a name="overview"></a>Overview

The Request V4 API exposes four different resources:

1. __Request resource__ - You can read, create, update or delete a Request and get the list of Requests.
2. __Workflow resource__ - You can perform action in the approval workflow of a Request (submit, approve, cancel...)
3. __Expense resource__ - You can read, create, update or delete an Expense, and get the list of expected Expenses for a specific Request.
4. __Travel Agency resource__ - You can get the description of a Travel Agency office.

Manage documents used for pre-spend authorizations within Concur Request.

### <a name="version"></a>Version

- 4.0
- [3.0](/api-reference-deprecated/version-three/request/request.html)
- [1.0](/api-reference-deprecated/version-one/Travel/travel-request.html)

#### <a name="overviewV4"></a>Overview of Version 4.0

Version 4.0 of Request API allows to interact with Requests, Expenses, Workflow and get Travel Agency information.
Version 4.0 of Request API works only with the new [Authentication API](/api-reference/authentication/apidoc.html).

### <a name="regionalavailability"></a>Regional Availability
#### <a name="swagger"></a>With swagger
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

#### <a name="prerequisites"></a>Prerequisites

1. [Create a sandbox](/manage-apps/register.html) if you don't already have one.
2. Read the [Getting Started](/api-reference/authentication/getting-started.html) section of [Authentication API](/api-reference/authentication/apidoc.html).

Once you have registered your application, read about the [API endpoints](/api-reference/request/endpoints.html), or click the button to download a request collection for Postman.

<a href="https://app.getpostman.com/run-collection/bfe85f4a4e435a161a8a" target="_blank" onclick="ga('send', 'event', 'Postman', 'Click', 'https://app.getpostman.com/run-collection/bfe85f4a4e435a161a8a');">
  <img src="https://run.pstmn.io/button.svg" alt="Run in Postman">
</a>

#### <a name="token"></a>Retrieve a User Access Token:

Before issuing requests to the Requests API, you must [obtain an access token from the Authentication API](/api-reference/authentication/getting-started.html).

The response will include an `access_token` field, which contains your access token. For subsequent calls, you will need to include this access token in the `Authorization` header of your calls. An `id_token` will be also included in the response. In order to retrieve the unique ID for your user, you will have to decode this `id_token` at [jwt.io](https://jwt.io/). You will need this ID in order to issue requests on the API.

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

Below are some simple NodeJS code snippets for getting a token and issuing a request on the API.

##### <a name="retrieve-token"></a>Retrieve a User Access Token:

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

##### <a name="post-request"></a>Post a request

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
        'Content-Length': Buffer.byteLength(request)
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
