---
title: Getting Started
layout: reference
---

# Budget

## Getting Started

- [Overview](#overview)
- [Version](#version)
- [Regional Availability](#regional-availability)
- [Explore the API](#explore-the-api)
  - [Prerequisites](#prerequisites)
  - [Acquire an Access Token](#retrieve-a-user-access-token)
  - [Roles & Scopes](#roles-and-scopes)

### Overview

The new Budget Service API is in Beta. If you are interested in using the Budget Service API, then please contact your account manager for further details. 

The Budget service exposes budget and fiscal year data.  Partners may use the service endpoints to read and alter fiscal year, budget, and budget matching configuration.
Summary and detailed balance amounts are also available to read, but may not be altered via the API.

### Version
4.0  

### Regional Availability

```
https://us.api.concursolutions.com/budget/v4/
```

```
https://emea.api.concursolutions.com/budget/v4/
```

### Explore the API

#### Prerequisites

1. [Create a sandbox](https://developer.concur.com/manage-apps/register.html) if you don't already have one.
2. Read the [Getting Started](https://developer.concur.com/api-reference/authentication/getting-started.html) section of [Authentication API](https://developer.concur.com/api-reference/authentication/apidoc.html).

Once you have registered your application, read about the [Budget Category](/api-reference/budget/budget-category.html), [Fiscal Year](/api-reference/budget/fiscal-year.html), [Budget Tracking Field](/api-reference/budget/cost-object.html), and [Budget Item Header](/api-reference/budget/budget-header.html) endpoints.

#### Retrieve a User Access Token:

Before making requests to the Budget API, you must [obtain an access token from the Authentication API](https://developer.concur.com/api-reference/authentication/getting-started.html).

The response will include an `access_token` field, which contains your access token. For subsequent calls, you will need to include this access token in the `Authorization` header of your calls. An `id_token` will be also included in the response. In order to retrieve the unique ID for your user, you will have to decode this `id_token` at [jwt.io](https://jwt.io/). You will need this ID in order to access the Budget endpoints.

Examples:

cURL:

```shell
curl -d "client_secret={YOUR SECRET}&client_id={YOUR CLIENT ID}&grant_type=password&username={YOUR USERNAME}&password={YOUR PASSWORD}" https://us.api.concursolutions.com/oauth2/v0/token
```

HTTPie:

```shell
http -f POST https://us.api.concursolutions.com/oauth2/v0/token client_secret={YOUR SECRET} client_id={YOUR CLIENT ID} grant_type=password username={YOUR USERNAME} password=P{YOUR PASSWORD}
```

#### Roles and Scopes:

The user needs to have the Budget Administrator role in order to access the api. 

The GET api endpoints for fiscal year require fiscalcalendar.read or budgetitem.read scope.

POST and DELETE endpoints require fiscalcalendar.write or budgetitem.write scope.

Budget Item Header, Budget Item Category GET end points require budgetitem.read.
 
Budget Item Header, Budget Item Category POST and DELETE end points require budgetitem.write. 
