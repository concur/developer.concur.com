---
title: Get Started
layout: reference
---

# Receipts

- [Version](#version)
- [Regional Endpoints](#regional-endpoints)
- [API Explorer](#api-explorer)
- [Code Snippets](#code-snippets)

## Version

- 4.0 In preview mode and to be made active soon.
- [3.0](https://developer.concur.com/api-reference/expense/receipts/) Will be  [deprecated](https://developer.concur.com/tools-support/reference/deprecation-policy.html) once 4.0 is active.

## Regional Endpoints

`https://us.api.concursolutions.com/receipts/`

`https://emea.api.concursolutions.com/receipts/`

## API Explorer

- [Prerequisites](#prerequisites)
- [Explore in Postman](#explore-in-postman)
- [Explore using Command Line](#explore-in-command-line)

### Prerequisites

1. [Create a sandbox](https://developer.concur.com/manage-apps/register.html) if you don't already have one.
2. Read the [Manage Your Client Application](https://developer.concur.com/api-preview/receipts/3_manageapp.html) section and get a client ID and client secret by emailing pdspe@concur.com. 

### Explore in Postman

Click on the button below to explore the Receipts API in [Postman](https://www.getpostman.com/docs/introduction). If you have never used Postman before, here is [information](https://www.youtube.com/watch?v=jBjXVrS8nXs&list=PLM-7VG-sgbtD8qBnGeQM5nvlpqB_ktaLZ&autoplay=1) on how to send requests and view responses using the Postman REST client.

[![Run in Postman](https://run.pstmn.io/button.svg)](https://app.getpostman.com/run-collection/ccb1f53f5fbd3ba26c37)

### Explore in Command Line

If you prefer to access the API via the command line, try these commands:

#### Retrieve a User JSON Web Token (JWT):

```
curl -d "client_secret={YOUR SECRET}&client_id={YOUR ID}&grant_type=password&username={YOUR USERNAME}&password={YOUR PASSWORD}" https://us.api.concursolutions.com/oauth2/v0/token
```
The response will include an `access_token` field, which contains your JWT. For subsequent calls, you will need to include this JWT in the `Authorization` header of your calls. An `id_token` will be also included in the response if you requested the openid authorization scope. In order to retrieve the unique ID for your user, you will have to decode this `id_token` at [jwt.io](https://jwt.io/). You will need this ID in order to post receipts.

#### Get the Service Index

```
curl -H "Authorization: Bearer {YOUR JWT}" https://us.api.concursolutions.com/receipts/
```
The response will include current URLs for endpoints in the receipt service.

#### Get a List of Current Receipt Schemas

```
curl -H "Authorization: Bearer {YOUR JWT}" https://us.api.concursolutions.com/receipts/schemas/
```
The response will have a list of JSON validation schemas for available receipt types. One of these schemas must be included in the [link header](http://json-schema.org/latest/json-schema-core.html#anchor35) of receipt POST requests with the relationship of `describedBy`. This looks like `link: <http://schema.concursolutions.com/{RECEIPT TYPE}.schema.json>;rel=describedBy`.

#### Post a Receipt

```
curl -v -d @{YOUR RECEIPT FILENAME}.json https://us.api.concursolutions.com/receipts/v4/users/{USER ID FROM YOUR ID TOKEN} -H "Authorization: Bearer {YOUR JWT}" -H "Content-Type: application/json" -H "link: <http://schema.concursolutions.com/general-receipt.schema.json>;rel=describedBy"
```
Successful POST requests will receive a response of 201 Created. The `Location` header of the response contains a URL for your receipt. Once the receipt has been processed, it can be retrieved at this URL.

#### Retrieve a Receipt

```
curl -H "Authorization: Bearer {YOUR JWT}" https://us.api.concursolutions.com/receipts/v4/{RECEIPT ID}
```
Returns the receipt associated with the ID in the URL.

#### Retrieve Receipts for a User

```
curl -H "Authorization: Bearer {YOUR JWT}" https://us.api.concursolutions.com/receipts/v4/{USER ID}
```
Returns all receipts for a given user ID.

## Code Snippets

Below are some simple NodeJS code snippets for getting a token and posting a receipt.

### Retrieve a User JSON Web Token (JWT)

```
'use strict';
const https = require('https');

const CLIENT_SECRET = 'YOUR VALUE HERE';
const CLIENT_ID = 'YOUR VALUE HERE';
const USERNAME = 'YOUR VALUE HERE';
const PASSWORD = 'YOUR VALUE HERE';

const options = {
    hostname: 'us.api.concursolutions.com',
    path: `/oauth2/v0/token?concur-correlationid=receipts-explorer&client_secret=${CLIENT_SECRET}&client_id=${CLIENT_ID}&grant_type=password&username=${USERNAME}&password=${PASSWORD}`,
    method: 'POST'
};

const req = https.request(options, (res) => {
    console.log('statusCode:', res.statusCode);
    console.log('headers:', res.headers);

    res.on('data', (data) => {
        process.stdout.write(data);
    });
});

req.end();

req.on('error', (e) => {
    console.error(e);
});
```

### Post a Receipt

```
'use strict';
const https = require('https');

const JWT = 'YOUR ACCESS TOKEN HERE';
const USER_ID = 'YOUR VALUE HERE';
const receipt = JSON.stringify(YOUR_RECEIPT_HERE);

const options = {
    hostname: 'us-rqa3.api.concursolutions.com',
    path: `/receipts/v4/users/${USER_ID}`,
    method: 'POST',
    headers: {
        'Authorization': `Bearer ${JWT}`,
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


