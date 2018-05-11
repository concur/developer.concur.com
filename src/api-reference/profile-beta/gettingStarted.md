---
title: Getting Started with Profile
layout: reference
---

Warning: Concur's Profile API is currently in **BETA** and is subject to change.


[**Getting Started with Profile**](gettingStarted.html)  -  [Company API](company.html)  -  [User API](user.html)

# Getting Started with Profile
The Concur's Profile API, currently in early beta, consists a set of APIs to manage users, companies and apps within Concur. Profile API is the API for profile information for all Concur's profile data, including Enterprise applications such as Expense, Invoice, Request, and Travel, as well as Retail applications such as Hipmunk and TripIt. 

* [Security](#security)
* [Profile Endpoints](#endpoint)
* [Caveats](#caveats)

## <a name="security"></a>Security

Profile API can be accessed using following authentication methods:
* Access Token based authentication

### Access Token Authentication

An access token based authenticated call is made in the context of a principal (user/company/app).  When an access token is used, it must be supplied in the 'Authorization' HTTP header by the caller.

The access token must have scopes that are relevant for the API call. For example, in order to call the Company API correctly, the token must include the `company.read` scope or the API call will fail. Similiarly, an API call to retrieve user informatin will succeed only if the token has `user.read` scope. You will receive "access denied" error if the scope does not match the API call you are trying to make.

To obtain or refresh an access token, please refer to [the following document](/api-reference/authentication/getting-started.html).

## <a name="endpoint"></a>Profile Endpoints

The base URL for the Profile API is at:**https://host/profile/v1/**. Following production hosts are available:

|**Data Center**|**Environments**|**Host**|**Description**|
|---------------|---------------|----------|---------------|
|US | Production |https://us.api.concursolutions.com ||
|US | Production - access token | https://www-us.api.concursolutions.com | This is for clients that cannot handle the server request for x.509 cert. |
|US | Implementation | https://us-impl.api.concursolutions.com ||
|EMEA | Production | https://emea.api.concursolutions.com ||
|EMEA | Production - access token | https://www-emea.api.concursolutions.com | This is for clients that cannot handle the server request for x.509 cert.|
|EMEA | Implementation |https://emea-impl.api.concursolutions.com ||
|CHINA | Production | https://cn.api.concurcdc.cn ||
|CHINA | Production - access token | https://www-cn.api.concurcdc.cn |  This is for clients that cannot handle the server request for x.509 cert.|

Profile APIs are aware of the US and EMEA data centers. If an API call is made against a specific data center and the target resource is not stored in that data center, you will receive a "301-redirect" that points to the right location for the resource.


## <a name="caveats"></a>Caveats

Profile APIs are under early beta and are subject to change. Changes in Profile do not follow the typical notification or deprecation processes. If you want to be included in the Profile related notifications, please email [profile@concur.com](mailto:profile@concur.com).



