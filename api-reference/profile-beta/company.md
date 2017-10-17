---
title: Company
layout: reference
---

Warning: Concur's Profile API is currentlly in **BETA** and is subject to change.


# Company
The Concur's **company** API is used to help provision and manage companies and their profile details across multiple Concur products, including Expense, Invoice, Request, and Travel.

* [Schema Definition](#scim)
* [Get Company](#get)
* [Response Codes](#codes)

### Version
1.0

## <a name="scim"></a>Schema Definition

The Company schema is inspired by the work from [SCIM](https://tools.ietf.org/wg/scim/) (System for Cross-domain Identity Management), in particular, [RFC 7643](https://tools.ietf.org/html/rfc7643) & optionally [RFC 7644](https://tools.ietf.org/html/rfc7644).

The latest version of the Company schema is always available at: [company.json](company.json).

## <a name="get"></a>Get Company

Each company in Profile is associated with a unique UUID. And your company access token will limit the company you can query for. You can use the following endpoint to lookup your company:

    GET /profile/v1/me     (access token required)


Curl example:


    curl -k -v -H "Authorization: Bearer $access-token" "https://$host/profile/v1/me"

### Company details 

Here is a sample company response.

````json
{
    "id": "59c5bfd1-1803-4ca8-b43a-df083a5c60f9",
    "schemas": [
        "com:concur:Travel:0.1",
        "com:concur:Expense:0.1"
    ],
    "internetDomain": "lqy3corexp.com",
    "companyDomain": "lqy3corexp.com",
    "name": "lqy3corexp",
    "defaultLanguage": "en-us",
    "meta": {
        "principalType": "company"
    },
    "com:concur:Expense:0.1": {
        "offeringCode": "CES",
        "marketingName": "CTE"
    },
    "addresses": [
        {
            "formatted": "\n   nil\nUS",
            "streetAddress": "",
            "locality": "",
            "region": "",
            "country": "US",
            "postalCode": null
        }
    ],
    "com:concur:Travel:0.1": {
        "active": 1,
        "offeringCode": "PROFESSIONAL",
        "isVendor": false,
        "isBillable": true,
        "contact": {
            "name": "Administrator Name",
            "phone": "123-123-1234",
            "emailAddress": null
        }
    }
}
````

## <a name="codes"></a>Response Codes

|**HTTP Status**|**Status**|**Description/Error Code**|
|---------------|----------|---------------|
|200| Success | Resource retrieved or updated|
|201| Success | Resource created|
|204| Success | Operation executed successfully, with no content returned|
|301| Moved Permanently|Resource is at a different location|
||||
|400| Bad Request||
|401| Unauthorized||
|403| Forbidden||
|404| Resource not found|
|429| Rate limit reached||
|500| Internal Error||
|503| Service Unavailable||
||||
