---
title: Get Started
layout: reference
---

# Purchase Request

### Overview

The Purchase Request API service allows clients and partners to create and automatically submit purchase requests in the preauthorization workflow using the post resource. With the GET resource you can retrieve the purchase request number, resulting purchase order number, workflow status, and any exception triggered for the records created. This is valuable for clients who want to leverage external data and build a connection to directly create SAP concur purchase requests for their employees and automate the manual entry and submission of this data.


#### Limitations: 
This API is not available in the China DataCenter. 

- [Regional Availability](#regional-availability)
- [Process Flow](#process-flow)
- [Products and Editions](#products-and-editions)
- [Scope Usage](#scope-usage)
- [Dependencies](#dependencies)
- [Access Token  Usage](#access-token-usage)
    - [Retrieve a Company Access Token](#retrieve-a-company-access-token)
    - [Retrieve a User Access Token](#retrieve-a-user-access-token)


### Regional Availability

```
https://us.api.concursolutions.com/purchaserequest/v4/
```

```
https://emea.api.concursolutions.com/purchaserequest/v4/
```

### Process Flow
A process diagram that explains the API structure and the usage flow from the user perspective, for the most common use case. Required by SAP. We have resources to make this diagram align with corporate styles, so we need only the basic details without any specific styling. (Info Provided to Sarra.) 

### Products and Editions
- Concur Invoice Professional Edition 
- Concur Invoice Standard Edition

### Scope Usage

|Name | Description | Endpoint
|-----|-------------|-----------
|purchaserequest.write|Allows you to create new purchase requests|POST
|purchaserequest.read|Allows you to retrieve  purchase requests|GET


### Dependencies
SAP Concur Invoice with Concur Purchasing needs to be setup first in the application before trying to pass in data to create purchase requests using this API.   

To create purchase requests with this API, you need to supply a Vendor Code and Vendor Address Code which are available in the Vendor Manager edit screen within the application. If needed you need to synchronize or get this data from SAP Concur using webservices, you could utilize the [Vendor API](/api-reference/invoice/v3.vendor.html).

If your purchase request form in SAP Concur has required custom fields that are tied to lists you will need to pass in the Item Code value for these list items or configure them to copy down from another source such as employee. You can access List Management from the Invoice administration area to see your list items along with the Item codes if needed. If you need to synchronize or get this data from SAP Concur using webservices, you could utilize the [List Item API](/api-reference/common/list-item/v3.list-item.html).

### Access Token Usage
The Purchase request API support both company or user Access tokens however most integrations using this API will want to use Company Level Access Tokens to connect to this API.  

Once you have registered your application, read about the [Purchase Request API endpoints](/api-reference/invoice/purchase-request-endpoints.html).


### Retrieve a Company Access Token
Using Company-level access is recommended for creating an integration with this API. This method will allow your integration to create purchase requests for multiple requestors.  

For clients connecting to this API to build a custom integration you will receive client credentials and information on how to generate your company Jwt (access &refresh token) from the Web services resource assigned to assist you with Authentication.   

If you are a partner building an app center app, See the [Company Level Authentication Documentation](/api-reference/authentication/company-auth.html) for more information.


### Retrieve a User Access Token

This API also supports user tokens however any purchase requests created using a user token will only create/assign these request to the user that generated the user Jwt. This can be used for testing payload validity but an integration would typically need to use Company Jwt so it can create purchase requests for multiple requestors.
Before making requests to the Purchase Request API, you must [obtain an access token from the Authentication API](/api-reference/authentication/getting-started.html).

The response will include an `access_token` field, which contains your access token. For subsequent calls, you will need to include this access token in the `Authorization` header of your calls. An `id_token` will be also included in the response. In order to retrieve the unique ID for your user, you will have to decode this `id_token` at [jwt.io](https://jwt.io/). You will need this ID in order to post Purchase Requests.



