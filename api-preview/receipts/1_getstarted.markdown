---
title: Get Started
layout: reference
redirect_from: /api-preview/receipts/apidoc.html
---

**PLEASE NOTE:** This page was a temporary page setup for preview purposes. Until redirect takes place, please use this [link](/api-reference/receipts/get-started.html) for the permanent location of this documentation.

# Receipts

## Get Started

- [Version](#version)
- [Regional Availability](#regional-availability)
- [Explore the API](#explore-the-api)
  - [Prerequisites](#prerequisites)
  - [Endpoints](#endpoints)
    - [Acquire a JWT](#retrieve-a-user-json-web-token-jwt)
    - [GET Service Index](#endpoint-service-index)
    - [GET Schemas](#endpoint-schemas)
    - [POST Receipts](#endpoint-post-a-receipt)
    - [GET Receipts by User ID](#endpoint-get-receipts-by-userid)
    - [GET Receipts by Receipt ID](#endpoint-get-a-receipt-by-id)
    - [GET Receipt Image by Receipt ID](#endpoint-get-receipt-image)
  - [Explore the API in JavaScript](#explore-the-api-in-javascript)

### Version

- 4.0 In preview mode and to be made active soon.
- [3.0](https://developer.concur.com/api-reference/expense/receipts/) Will be [deprecated](https://developer.concur.com/tools-support/reference/deprecation-policy.html) once 4.0 is active.

#### Overview of Version 4.0

Version 4.0 of the Receipts API offers features like more receipt types, automatic e-receipt generation in end user’s preferred language and ability for partners to provide detailed tax information. Unlike version 3.0, we are discontinuing the use of matching facts; instead the partner will have to create a receipt for a specific end user. Receipts 4.0 works only with the new Authentication API.

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
2. Read the [Getting Started](https://developer.concur.com/api-preview/auth/gettingstarted.html) section of [Authentication API](https://developer.concur.com/api-preview/auth/apidoc.html).

Once you have registered your application, read about the [API endpoints](#endpoints) below, or click the button to download a request collection for [Postman](https://www.getpostman.com/docs/introduction).
[![Run in Postman](https://run.pstmn.io/button.svg)](https://app.getpostman.com/run-collection/5782fa347917ac1568e6)

#### Endpoints

|Endpoint|Response Format|Request Summary|
|---|---|---|
|[GET /](#endpoint-service-index)|JSON|Get service index URLs|
|[GET /schemas](#endpoint-schemas)|JSON|Get currently supported receipt schemas|
|[POST /v4/users/:userId](#endpoint-post-a-receipt)|N/A|Post a receipt|
|[GET /v4/users/:userId](#endpoint-get-receipts-by-userid)|JSON|Get a user's receipts|
|[GET /v4/:receiptId](#endpoint-get-a-receipt-by-id)|JSON|Get a receipt by ID|
|[GET /v4/:receiptId/image](#endpoint-get-receipt-image)|image file|Get a receipt image.|

##### Retrieve a User JSON Web Token (JWT):

Before making requests to the Receipts API, you must [acquire a JWT from the Authentication API](https://developer.concur.com/api-preview/auth/apidoc.html#obtain_token).

The response will include an `access_token` field, which contains your JWT. For subsequent calls, you will need to include this JWT in the `Authorization` header of your calls. An `id_token` will be also included in the response. In order to retrieve the unique ID for your user, you will have to decode this `id_token` at [jwt.io](https://jwt.io/). You will need this ID in order to post receipts.

Examples:

cURL:

```
curl -d "client_secret={YOUR SECRET}&client_id={YOUR CLIENT ID}&grant_type=password&username={YOUR USERNAME}&password={YOUR PASSWORD}" https://us.api.concursolutions.com/oauth2/v0/token
```

HTTPie:

```
http -f POST https://us.api.concursolutions.com/oauth2/v0/token client_secret={YOUR SECRET} client_id={YOUR CLIENT ID} grant_type=password username={YOUR USERNAME} password=P{YOUR PASSWORD}
```

##### Endpoint: Service Index

###### _GET /_

Making a GET request to the root of the service will return a list of current endpoints. If endpoint URLs ever change, the service index will be updated. To ensure that you are using the correct URLs, the safest practice is to check the service index before every request. The response will include current URLs for all endpoints in the receipt service.

_Example Requests:_

cURL:

```
curl -H "Authorization: Bearer {YOUR JWT}" https://us.api.concursolutions.com/receipts/
```

HTTPie:

```
http https://us.api.concursolutions.com/receipts/ 'Authorization:Bearer {YOUR JWT}'
```

_Example Response:_

```
{
  "links": [
    {
      "rel": "self",
      "href": "https://us.api.concursolutions.com/receipts/v4"
    },
    {
      "rel": "receipt-get",
      "method": "GET",
      "href": "https://us.api.concursolutions.com/receipts/v4/{receiptId}"
    },
    {
      "rel": "receipt-post",
      "method": "POST",
      "href": "https://us.api.concursolutions.com/receipts/v4/users/{userId}"
    },
    {
      "rel": "receipts-get-user",
      "method": "GET",
      "href": "https://us.api.concursolutions.com/receipts/v4/users/{userId}"
    },
    {
      "rel": "schemas-get",
      "method": "GET",
      "href": "https://us.api.concursolutions.com/receipts/schemas"
    }
  ]
}
```

[Back to Top](#endpoints)

##### Endpoint: Schemas

###### _GET /schemas/:schemaId_

|Parameter|Requirement|Value|
|---|---|---|
|schemaId|optional|The ID of the schema to be returned.|

The response to a GET request to `/schemas` will have a list of JSON validation schemas for available receipt types. An array of `supportingSchemas` is also returned, but these do not represent actual receipt types.

If a schema ID is provided, then only the schema with that ID will be returned, instead of the entire schema index. The ID's of schemas are not GUUIDs, but are instead just the names of the schema with the extension `.schema.json`. For example, `car-rental-receipt.schema.json` or `air-receipt.schema.json`.

One of the receipt schemas must be included in the [link header](http://json-schema.org/latest/json-schema-core.html#anchor35) of receipt POST requests with the relationship of `describedBy`. This looks like `link: <http://schema.concursolutions.com/{RECEIPT TYPE}.schema.json>;rel=describedBy`.

_Example Requests:_

cURL for the schema index:

```
curl -H "Authorization: Bearer {YOUR JWT}" https://us.api.concursolutions.com/receipts/schemas/
```

HTTPie for the schema index:

```
http https://us.api.concursolutions.com/receipts/schemas 'Authorization:Bearer {YOUR JWT}'
```

cURL for a single schema:

```
curl -H "Authorization: Bearer {YOUR JWT}" https://us.api.concursolutions.com/receipts/schemas/car-rental-receipt.schema.json
```

HTTPie for a single schema:

```
http https://us.api.concursolutions.com/receipts/schemas/car-rental-receipt.schema.json 'Authorization:Bearer {YOUR JWT}'
```

_Example Response:_

```
{
  "receiptSchemas": [
    {
      "rel": "http://schema.concursolutions.com/air-receipt.schema.json",
      "method": "GET",
      "href": "https://us.api.concursolutions.com/receipts/schemas/air-receipt.schema.json"
    },
    {
      "rel": "http://schema.concursolutions.com/car-rental-receipt.schema.json",
      "method": "GET",
      "href": "https://us.api.concursolutions.com/receipts/schemas/car-rental-receipt.schema.json"
    },
    {
      "rel": "http://schema.concursolutions.com/general-receipt.schema.json",
      "method": "GET",
      "href": "https://us.api.concursolutions.com/receipts/schemas/general-receipt.schema.json"
    },
    {
      "rel": "http://schema.concursolutions.com/ground-transport-receipt.schema.json",
      "method": "GET",
      "href": "https://us.api.concursolutions.com/receipts/schemas/ground-transport-receipt.schema.json"
    },
    {
      "rel": "http://schema.concursolutions.com/hotel-receipt.schema.json",
      "method": "GET",
      "href": "https://us.api.concursolutions.com/receipts/schemas/hotel-receipt.schema.json"
    },
    {
      "rel": "http://schema.concursolutions.com/jpt-ic-card-receipt.schema.json",
      "method": "GET",
      "href": "https://us.api.concursolutions.com/receipts/schemas/jpt-ic-card-receipt.schema.json"
    },
    {
      "rel": "http://schema.concursolutions.com/rail-receipt.schema.json",
      "method": "GET",
      "href": "https://us.api.concursolutions.com/receipts/schemas/rail-receipt.schema.json"
    }
  ],
  "supportingSchemas": [
    {
      "rel": "http://schema.concursolutions.com/address-original.schema.json",
      "method": "GET",
      "href": "https://us.api.concursolutions.com/receipts/schemas/address-original.schema.json"
    },
    {
      "rel": "http://schema.concursolutions.com/address.schema.json",
      "method": "GET",
      "href": "https://us.api.concursolutions.com/receipts/schemas/address.schema.json"
    },
    {
      "rel": "http://schema.concursolutions.com/common.schema.json",
      "method": "GET",
      "href": "https://us.api.concursolutions.com/receipts/schemas/common.schema.json"
    },
    {
      "rel": "http://schema.concursolutions.com/discount.schema.json",
      "method": "GET",
      "href": "https://us.api.concursolutions.com/receipts/schemas/discount.schema.json"
    },
    {
      "rel": "http://schema.concursolutions.com/line-item.schema.json",
      "method": "GET",
      "href": "https://us.api.concursolutions.com/receipts/schemas/line-item.schema.json"
    },
    {
      "rel": "http://schema.concursolutions.com/location.schema.json",
      "method": "GET",
      "href": "https://us.api.concursolutions.com/receipts/schemas/location.schema.json"
    },
    {
      "rel": "http://schema.concursolutions.com/merchant.schema.json",
      "method": "GET",
      "href": "https://us.api.concursolutions.com/receipts/schemas/merchant.schema.json"
    },
    {
      "rel": "http://schema.concursolutions.com/payments.schema.json",
      "method": "GET",
      "href": "https://us.api.concursolutions.com/receipts/schemas/payments.schema.json"
    },
    {
      "rel": "http://schema.concursolutions.com/receipt-core.schema.json",
      "method": "GET",
      "href": "https://us.api.concursolutions.com/receipts/schemas/receipt-core.schema.json"
    },
    {
      "rel": "http://schema.concursolutions.com/taxes.schema.json",
      "method": "GET",
      "href": "https://us.api.concursolutions.com/receipts/schemas/taxes.schema.json"
    }
  ]
}
```

[Back to Top](#endpoints)

##### Endpoint: Post a Receipt

###### _POST /v4/users/:userId_

|Parameter|Requirement|Value|
|---|---|---|
|userId|required|The UUID of the user to whom the receipt belongs.|
|receipt|required|The JSON receipt to be posted.|
|image|optional|Image of the receipt. If an image isn't provided, one will be generated automatically from the JSON.|

Creating a receipt requires JSON data about the transaction and, optionally, an image of the receipt. If an image is not supplied with the request, Concur will automatically generate a receipt image based on the data provided. [JSON schemas](#schemas) are used to validate the format of receipt data received in POST requests.

Successful POST requests will receive a response of 201 Created. The `Location` header of the response contains a URL for your receipt. Once the receipt has been processed, it can be retrieved at this URL.

If you are not providing an image with your receipt data, the body of the request should be your receipt JSON:

Receipt images may be posted along with data. In this case, Concur will use the provided image instead of generating a new one. To post data and an image, use multipart form data. The `Content-Type:multipart/form-data` header must be set. The image should be included under the key `image`, and the receipt JSON should be included under the key `receipt`.

_Example Requests:_

cURL data without image:

```
curl -v -X POST https://us.api.concursolutions.com/receipts/v4/users/{USER ID FROM YOUR ID TOKEN} \
-H "Authorization: Bearer {YOUR JWT}" \
-H "Content-Type: application/json" \
-H "link: <http://schema.concursolutions.com/{VALIDATION SCHEMA FROM SCHEMA ENDPOINT}.schema.json>;rel=describedBy" \
-d @{PATH TO YOUR RECEIPT JSON}
```

cURL data and image:

```
curl -v -k -X POST https://us.api.concursolutions.com/receipts/v4/users/{USER ID FROM YOUR ID TOKEN} \
-H "Authorization: Bearer {YOUR JWT}" \
-H "Content-Type:multipart/form-data" \
-H "link: <http://schema.concursolutions.com/{VALIDATION SCHEMA FROM SCHEMA ENDPOINT}.schema.json>;rel=describedBy" \
-F "receipt=<{PATH TO YOUR RECEIPT JSON};type=application/json" \
-F "image=@{PATH TO YOUR IMAGE};type=image/{FILE EXTENSION OF YOUR IMAGE}"
```

HTTPie data without image:

```
http POST https://us.api.concursolutions.com/receipts/v4/users/{USER ID FROM YOUR ID TOKEN} \
"Authorization:Bearer {YOUR JWT}" \
"Content-Type: application/json" \
"link: <http://schema.concursolutions.com/{VALIDATION SCHEMA FROM SCHEMA ENDPOINT}.schema.json>;rel=describedBy" \
< {PATH TO YOUR RECEIPT JSON}
```

_Example Response:_

```
< HTTP/1.1 201 Created
< Link: <http://schema.concursolutions.com/car-rental-receipt.schema.json>; rel="describedBy"
< Location: https://us.api.concursolutions.com/receipts/v4/b0a4ab2bce8a49a08cf177cb997bf2ee
< Content-Length: 0
< Connection: keep-alive
```

[Back to Top](#endpoints)

##### Endpoint: Get a Receipt by ID

###### _GET /v4/:receiptId_

|Parameter|Requirement|Value|
|---|---|---|
|receiptId|required|The UUID of the receipt to be returned.|

Returns the JSON receipt associated with the ID in the URL.

_Example Requests:_

cURL:

```
curl -H "Authorization: Bearer {YOUR JWT}" https://us.api.concursolutions.com/receipts/v4/{RECEIPT ID}
```

HTTPie:

```
http https://us.api.concursolutions.com/receipts/v4/{RECEIPT ID} "Authorization: Bearer {YOUR JWT}"
```

_Example Response_

```
{
  "dateTimeReceived": "2016-09-28T21:41:21.087Z",
  "id": "85b76a2bf51a4ed7b8b252994d7d9e2b",
  "image": "",
  "imageId": "",
  "receipt": {
    ...Receipt JSON...
  },
  "userId": "08bdda1e-0d4f-4261-9f1b-f9b8d9f817d6",
  "validationSchema": "http://schema.concursolutions.com/car-rental-receipt.schema.json",
  "self": "https://us.api.concursolutions.com/receipts/v4/85b76a2bf51a4ed7b8b252994d7d9e2b",
  "template": "https://us.api.concursolutions.com/receipts/v4/{receiptId}"
}
```

[Back to Top](#endpoints)

##### Endpoint: Get Receipts By UserId

###### _GET /v4/users/:userId_

|Parameter|Requirement|Value|
|---|---|---|
|userId|required|The UUID of the user whose receipts will be returned.|

Returns all receipts for a given user ID.

_Example Requests:_

cURL:

```
curl -H "Authorization: Bearer {YOUR JWT}" https://us.api.concursolutions.com/receipts/v4/users/{USER ID}
```

HTTPie:

```
http https://us.api.concursolutions.com/receipts/v4/users/{USER ID} "Authorization: Bearer {YOUR JWT}"
```

_Example Response:_

```
{
  "receipts": [
    {
      "dateTimeReceived": "2016-09-28T21:41:21.087Z",
      "id": "85b76a2bf51a4ed7b8b252994d7d9e2b",
      "image": "",
      "imageId": "",
      "receipt": {
        ...Receipt JSON...
      },
      "userId": "08bdda1e-0d4f-4261-9f1b-f9b8d9f817d6",
      "validationSchema": "http://schema.concursolutions.com/car-rental-receipt.schema.json",
      "self": "https://us.api.concursolutions.com/receipts/v4/85b76a2bf51a4ed7b8b252994d7d9e2b",
      "template": "https://us.api.concursolutions.com/receipts/v4/{receiptId}"
    },
    {
      "dateTimeReceived": "2016-09-28T19:59:30.488Z",
      "id": "df8c1161d917439c9e6f141fd0d6b588",
      "image": "",
      "imageId": "",
      "receipt": {
        ...Receipt JSON...
      },
      "userId": "08bdda1e-0d4f-4261-9f1b-f9b8d9f817d6",
      "validationSchema": "http://schema.concursolutions.com/car-rental-receipt.schema.json",
      "self": "https://us.api.concursolutions.com/receipts/v4/df8c1161d917439c9e6f141fd0d6b588",
      "template": "https://us.api.concursolutions.com/receipts/v4/{receiptId}"
    },
    ...
  ]
}
```

##### Endpoint: Get Receipt Image

###### _GET /v4/:receiptId/image_

|Parameter|Requirement|Value|
|---|---|---|
|receiptId|required|The UUID of the receipt associated with the image.|

If an image or PDF document was generated by or POSTed to Receipts v4, this endpoint can return the image in the same format that it was originally received by the API. Images for receipts created with v3 of the API are _not_ accessible via this endpoint.

_Example Requests:_

cURL:

```
curl -H "Authorization: Bearer {YOUR JWT}" https://us.api.concursolutions.com/receipts/v4/{RECEIPT ID}/image
```

HTTPie:

```
http https://us.api.concursolutions.com/receipts/v4/{RECEIPT ID}/image "Authorization: Bearer {YOUR JWT}"
```

[Back to Top](#endpoints)

#### Explore the API in JavaScript

Below are some simple NodeJS code snippets for getting a token and posting a receipt.

##### Retrieve a User JSON Web Token (JWT):

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

const JWT = 'YOUR ACCESS TOKEN HERE';
const USER_ID = 'YOUR VALUE HERE';
const receipt = JSON.stringify(YOUR_RECEIPT_HERE);

const options = {
    hostname: 'us.api.concursolutions.com',
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
