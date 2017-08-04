---
title: Getting Started with Profile
layout: reference
---

Warning: Concur's Profile API is currently in **BETA** and is subject to change.


# Profile API
The Concur's Profile API, currently in early beta, consists a set of APIs to manage users, companies and apps within Concur. Profile API is the API for profile information for all Concur's profile data, including Enterprise applications such as Expense, Invoice, Request, and Travel, as well as Retail applications such as Hipmunk and TripIt. 

* [Profile Endpoints](#endpoint)
* [Security](#security)

## <a name="endpoint"></a>Profile Endpoints

The base URL for the Profile API is at:**https://host/profile/v1/**. Following hosts are available for your development and production needs:

|**Data Center**|**Environments**|**Host**|**Description**|
|---------------|---------------|----------|---------------|
|US | Production |https://us.api.concursolutions.com ||
|US | Production - access token | https://www-us.api.concursolutions.com | This is for clients that cannot handle the server request for x.509 cert. |
|US | Implementation | https://us-impl.api.concursolutions.com ||
|EMEA | Production | https://emea.api.concursolutions.com ||
|EMEA | Production - access token | https://www-emea.api.concursolutions.com | This is for clients that cannot handle the server request for x.509 cert.|
|EMEA | Implementation |https://emea-impl.api.concursolutions.com ||

|CHINA | Production | https://cn.api.cnqr-cn.com ||
|CHINA | Production - access token | https://www-cn.api.cnqr-cn.com  |  This is for clients that cannot handle the server request for x.509 cert.|

Profile APIs are data center aware. If an API call is made against a specific data center and the target resource UUID is not stored in that data center, you will receive a "301-redirect" that points to the right location for the resource.


## <a name="security"></a>Security

Profile API can be accessed using two calling conventions.
* Access Token based authentication
* X.509 cert based authentication - Not open for public at this time

### Access Token Authentication

An access token based authenticated call is made in the context of a principal (user/company/app).  When an access token is used, it must be supplied in the 'Authorization' HTTP header by the caller.

The access token must have at least one of user_read, company_read, app_read or "*" in its list of scopes. Your Profile call will fail if the access token does not allow the operation for the related principal.

To obtain or refresh an access token, please refer to [the following document](https://preview.developer.concur.com/api-reference/authentication/getting-started.html).


