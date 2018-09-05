---
title: Get Started
layout: reference
---

# Purchase Request

## Get Started

- [Overview](#overview)
- [Version](#version)
- [Regional Availability](#regional-availability)
- [Explore the API](#explore-the-api)
  - [Prerequisites](#prerequisites)
  - [Acquire an Access Token](#retrieve-a-user-access-token)
  - [Explore the API in JavaScript](#explore-the-api-in-javascript)

### Overview

The Purchase Request API resources allow you to create and automatically submit purchase requests for preauthorization, and retrieve the purchase request number and status using the get resource.
### Version

4.0

### Regional Availability

```
https://us.api.concursolutions.com/purchaserequest/v1/
```

```
https://emea.api.concursolutions.com/purchaserequest/v1/
```

### Explore the API

#### Prerequisites

1. [Create a sandbox](https://developer.concur.com/manage-apps/register.html) if you don't already have one.
2. Read the [Getting Started](https://developer.concur.com/api-reference/authentication/getting-started.html) section of [Authentication API](https://developer.concur.com/api-reference/authentication/apidoc.html).

Once you have registered your application, read about the [Purchase Request API endpoints](/api-reference/invoice/purchase-request-endpoints.html), or click the button to download a request collection for Postman.

<a href="https://www.getpostman.com/collections/d32c323a768d7137fadd" target="_blank" onclick="ga('send', 'event', 'Postman', 'Click', 'https://www.getpostman.com/collections/6a3a96b05489a0e23288');">
  <img src="https://run.pstmn.io/button.svg" alt="Run in Postman">
</a>

#### Retrieve a User Access Token:

Before making requests to the Purchase Request API, you must [obtain an access token from the Authentication API](https://developer.concur.com/api-reference/authentication/getting-started.html).

The response will include an `access_token` field, which contains your access token. For subsequent calls, you will need to include this access token in the `Authorization` header of your calls. An `id_token` will be also included in the response. In order to retrieve the unique ID for your user, you will have to decode this `id_token` at [jwt.io](https://jwt.io/). You will need this ID in order to post Purchase Requests.

Examples:

cURL:

```shell
curl -d "client_secret={YOUR SECRET}&client_id={YOUR CLIENT ID}&grant_type=password&username={YOUR USERNAME}&password={YOUR PASSWORD}" https://us.api.concursolutions.com/oauth2/v0/token
```

HTTPie:

```shell
http -f POST https://us.api.concursolutions.com/oauth2/v0/token client_secret={YOUR SECRET} client_id={YOUR CLIENT ID} grant_type=password username={YOUR USERNAME} password=P{YOUR PASSWORD}
```
