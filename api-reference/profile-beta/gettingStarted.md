---
title: Getting Started with Profile
layout: reference
---

Warning: Concur's Profile API is currently in **BETA** and is subject to change.


# Profile API
The Concur's Profile API consists a set of APIs to manage users, companies and apps within Concur. Profile API is `the` API for profile information for all Concur's profile data, including Enterprise applications such as Expense, Invoice, Request, and Travel, as well as Retail applications such as Hipmunk and TripIt. 

* [Profile Endpoints](#endpoint)
* [Security](#security)
* [Caveats](#caveats)

## <a name="endpoint"></a>Profile Endpoints

The base URL for the Profile API is https://host/profile/v1/. Following hosts are available for your development and production needs:

|**Data Center **|**Environments**|**Endpoint**|**Description**|
|---------------|---------------|----------|---------------|
|US | Production |https://us.api.concursolutions.com ||
|US | Production JWT only | https://www-us.api.concursolutions.com | This is for clients that cannot handle the server request for x.509 cert. |
|US | Implementation | https://us-impl.api.concursolutions.com ||
||||
|EMEA | Production | https://emea.api.concursolutions.com ||
|EMEA | Production JWT only | https://www-emea.api.concursolutions.com | This is for clients that cannot handle the server request for x.509 cert.|
|EMEA | Implementation |https://emea-impl.api.concursolutions.com ||
||||
|CHINA | Production | https://cn.api.cnqr-cn.com ||
|CHINA | Production JWT only | https://www-cn.api.cnqr-cn.com  |  This is for clients that cannot handle the server request for x.509 cert.|

Profile APIs are data center aware. If an API call is made against a specific data center and the target resource UUID is not stored in that data center, you will receive a "301-redirect" that points to the right location for the resource.


## <a name="security"></a>Security

Profile API can be accessed using 2 calling conventions. 
* JWT (JSON Web Token) authentication

### JWT Authentication

A JWT authenticated call is made in the context of a principal (user/company/app). This context is supplied by a [JWT](https://jwt.io/) representing the principal. When JTW is used, it must be supplied in the 'Authorization' HTTP header by the caller.

The JWT must have at least one of user_read, company_read, app_read or "*" in its list of scopes. If you have a JWT that does not have those scopes, profile-service will reject your call. You should consider peeking inside the JWT to extract the "sub:" claim - this is the uuid of the principal and then making a X.509 authenticated all to profile with that uuid.


## <a name="caveats"></a>Caveats

All Profile methods expect a `concur-correlationid` HTTP header from the client. You should generate a per-request unique string of at least 6 characters long and send this as the correlation id. API calls without this header will be rejected.

