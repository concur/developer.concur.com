---
title: Getting Started
layout: reference
---

## Menu

* [Getting Started](./getting-started.html)
* [Fiscal Year](/api-reference/budget/fiscal-year.html)
* [Budget Category](/api-reference/budget/budget-category.html)
* [Budget Item](/api-reference/budget/budget-header.html)
* [Budget Tracking Field](/api-reference/budget/budget-tracking.html)
* [Budget Adjustments](/api-reference/budget/budget-adjustments.html)

## Getting Started

- [Overview](#overview)
- [Version](#version)
- [Regional Availability](#regional-availability)
- [Explore the API](#explore-the-api)
  - [Prerequisites](#prerequisites)
  - [Acquire an Access Token](#retrieve-a-user-access-token)
  - [Roles & Scopes](#roles-and-scopes)

### <a name="overview"></a>Overview

{% include prerelease.html %}

The Budget service exposes budget and fiscal year data.  Partners may use the service endpoints to read and alter fiscal year, budget, budget adjustment, and budget matching configuration.
Summary and detailed balance amounts are also available to read, but may not be altered via the API.

The sequence to configure budgets is to first setup the fiscal year and then the budget categories (if applicable) before creating budget items.
Budget items may use budget tracking fields as filters. The budget tracking field can only be configured in the application UI. Also budget owner,
approver and budget viewer permissions have to be assigned to users prior to configuring budgets.

### <a name="version"></a>Version

4.0  

### <a name="regional-availability"></a>Regional Availability

```
https://us.api.concursolutions.com/budget/v4/
```

```
https://emea.api.concursolutions.com/budget/v4/
```

```
https://cn.api.concurcdc.cn/budget/v4/
```

### <a name="explore-the-api"></a>Explore the API

#### <a name="prerequisites"></a>Prerequisites

1. [Create a sandbox](https://developer.concur.com/manage-apps/register.html) if you don't already have one.
2. Read the [Getting Started](https://developer.concur.com/api-reference/authentication/getting-started.html) section of [Authentication API](https://developer.concur.com/api-reference/authentication/apidoc.html).

Once you have registered your application, read about the [Budget Category](/api-reference/budget/budget-category.html), [Fiscal Year](/api-reference/budget/fiscal-year.html), [Budget Tracking Field](/api-reference/budget/budget-trackingfield.html), [Budget Adjustment](/api-reference/budget/budget-adjustments.html) and [Budget Item Header](/api-reference/budget/budget-header.html) endpoints.

#### <a name="retrieve-a-user-access-token"></a>Retrieve a User Access Token:

Before making requests to the Budget API, you must [obtain an access token from the Authentication API](https://developer.concur.com/api-reference/authentication/getting-started.html).

The response will include an `access_token` field, which contains your access token. For subsequent calls, you will need to include this access token in the `Authorization` header of your calls. An `id_token` will be also included in the response. In order to retrieve the unique ID for your user, you will have to decode this `id_token` at [jwt.io](https://jwt.io/). You will need this ID in order to access the Budget endpoints.

Examples:

#### Request
```http
POST https://us.api.concursolutions.com/oauth2/v0/token
client_secret:{YOUR SECRET}
client_id:{YOUR CLIENT ID}
grant_type:password
username:{YOUR USERNAME}
password:{YOUR PASSWORD}
```

#### <a name="roles-and-scopes"></a>Roles and Scopes:

The user needs to have the Budget Administrator role in order to access the api.  Company-level access which does not require a user role is also available.  See the [Company Level Authentication Documentation](#https://developer.concur.com/api-reference/authentication/company-auth.html) for more information.

The GET api endpoints for Fiscal Year require fiscalcalendar.read, fiscalcalendar.write, budgetitem.read, or budgetitem.write scope.

POST and DELETE endpoints require fiscalcalendar.write or budgetitem.write scope.

Budget Item Header, Budget Item Category, and Budget Tracking Field GET end points require budgetitem.read or budgetitem.write scope.

Budget Item Header, Budget Item Category, and Budget Adjustements POST and DELETE end points require budgetitem.write.
