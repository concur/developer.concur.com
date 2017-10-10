---
title: Get Started
layout: reference
---

# Receipts

## Get Started

- [Version](#version)
- [Regional Availability](#regional-availability)
- [Explore the API](#explore-the-api)
  - [Prerequisites](#prerequisites)
  - [Acquire an Access Token](#retrieve-a-user-access-token)
  - [Explore the API in JavaScript](#explore-the-api-in-javascript)

### Version

- 4.0
- [3.0](https://developer.concur.com/api-reference-deprecated/version-three/receipts.html) [Deprecation Notice](https://developer.concur.com/changelog/2016/11/07/receipts-version-three-deprecation.html).

#### Overview of Version 4.0

Version 4.0 of the Receipts API offers features like more receipt types, automatic e-receipt generation in end user’s preferred language and ability for partners to provide detailed tax information. Unlike version 3.0, we are discontinuing the use of matching facts; instead the partner will have to create a receipt for a specific end user. Receipts 4.0 works only with the new [Authentication API](https://developer.concur.com/api-reference/authentication/apidoc.html).

### Regional Availability

```
https://us.api.concursolutions.com/receipts/
```

```
https://emea.api.concursolutions.com/receipts/
```

### Explore the API

#### Prerequisites

1. [Create a sandbox](https://developer.concur.com/manage-apps/register.html) if you don't already have one.
2. Read the [Getting Started](https://developer.concur.com/api-reference/authentication/getting-started.html) section of [Authentication API](https://developer.concur.com/api-reference/authentication/apidoc.html).

Once you have registered your application, read about the [API endpoints](#endpoints) below, or click the button to download a request collection for Postman.

<a href="https://app.getpostman.com/run-collection/56acd8062493df1bb6de" target="_blank" onclick="ga('send', 'event', 'Postman', 'Click', 'https://app.getpostman.com/run-collection/56acd8062493df1bb6de');">
  <img src="https://run.pstmn.io/button.svg" alt="Run in Postman">
</a>

#### Retrieve a User Access Token:

Before making requests to the Receipts API, you must [obtain an access token from the Authentication API](https://developer.concur.com/api-reference/authentication/getting-started.html).

The response will include an `access_token` field, which contains your access token. For subsequent calls, you will need to include this access token in the `Authorization` header of your calls. An `id_token` will be also included in the response. In order to retrieve the unique ID for your user, you will have to decode this `id_token` at [jwt.io](https://jwt.io/). You will need this ID in order to post receipts.

Examples:

cURL:

```shell
curl -d "client_secret={YOUR SECRET}&client_id={YOUR CLIENT ID}&grant_type=password&username={YOUR USERNAME}&password={YOUR PASSWORD}" https://us.api.concursolutions.com/oauth2/v0/token
```

HTTPie:

```shell
http -f POST https://us.api.concursolutions.com/oauth2/v0/token client_secret={YOUR SECRET} client_id={YOUR CLIENT ID} grant_type=password username={YOUR USERNAME} password=P{YOUR PASSWORD}
```

#### Explore the API in JavaScript

Below are some simple NodeJS code snippets for getting a token and posting a receipt.

##### Retrieve a User Access Token:

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

##### Post a Receipt

```js
'use strict';
const https = require('https');

const ACCESS_TOKEN = 'YOUR ACCESS TOKEN HERE';
const USER_ID = 'YOUR VALUE HERE';
const receipt = JSON.stringify(YOUR_RECEIPT_HERE);

const options = {
    hostname: 'us.api.concursolutions.com',
    path: `/receipts/v4/users/${USER_ID}`,
    method: 'POST',
    headers: {
        'Authorization': `Bearer ${ACCESS_TOKEN}`,
        'Content-Type': 'application/json',
        'Content-Length': Buffer.byteLength(receipt),
        'Link': '<http://schema.concursolutions.com/general-receipt.schema.json>;rel=describedBy'
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
