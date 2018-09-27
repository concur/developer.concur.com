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

### Overview

The Purchase Request API resources allow you to create and automatically submit purchase requests for preauthorization, and retrieve the purchase request number and status using the get resource.
### Version

4.0

### Regional Availability

```
https://us.api.concursolutions.com/purchaserequest/v4/
```

```
https://emea.api.concursolutions.com/purchaserequest/v4/
```

### Explore the API

#### Prerequisites

1. [Create a sandbox](https://developer.concur.com/manage-apps/register.html) if you don't already have one.
2. Read the [Getting Started](https://developer.concur.com/api-reference/authentication/getting-started.html) section of [Authentication API](https://developer.concur.com/api-reference/authentication/apidoc.html).

Once you have registered your application, read about the [Purchase Request API endpoints](/api-reference/invoice/purchase-request-endpoints.html).

#### Retrieve a User Access Token:

Before making requests to the Purchase Request API, you must [obtain an access token from the Authentication API](https://developer.concur.com/api-reference/authentication/getting-started.html).

The response will include an `access_token` field, which contains your access token. For subsequent calls, you will need to include this access token in the `Authorization` header of your calls. An `id_token` will be also included in the response. In order to retrieve the unique ID for your user, you will have to decode this `id_token` at [jwt.io](https://jwt.io/). You will need this ID in order to post Purchase Requests.

