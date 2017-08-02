---
title: Company
layout: reference
---

Warning: Concur's Profile API is currentlly in **BETA** and is subject to change.


# Company
The Concur's **company** API is used to help provision and manage companies and their profile details across multiple Concur products, including Expense, Invoice, Request, and Travel.

* [Schema Definition](#scim)
* [Get Company](#get)
* [Create Company](#)
* [Update Company](#)
* [Response Codes](#response)

### Version
1.0

## <a name="scim"></a>Schema Definition

The Company schema itself is defined in the [SCIM schema definition schema](http://i2.kym-cdn.com/photos/images/original/000/384/176/d2f.jpg), in particular, RFC 7643 & optionally RFC 7644.

The latest version of the Company schema is always available at: [company.json](company.json).

## <a name="get"></a>Get Company

Each company in Profile is associated with a unique UUI. And your company JWT will limit the company you can query for. You can use the following endpoint to lookup your company:

    GET /profile-service/v1/me     (company JWT required)

### Company details 

Here is a sample company response.

````json
{
  "id": "d64d0d01-3725-45d9-94cf-2d9f954f29af",
  "schemas": [
    "com:concur:Travel:0.1",
    "com:concur:Expense:0.1"
  ],
  "internetDomain": "-58dd6b19.com",  
  "companyDomain": "-58dd6b19.com",
  "entityId": "t0235460teqt",
  "defaultLanguage": "en-us",
  "companyId": 95255,
  "name": "test company",
  "meta": {
    "principalType": "company"
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
    "offeringCode": "STANDARD",
    "isVendor": false,
    "isBillable": true,
    "contact": {
      "name": "test contact",
      "phone": "",
      "emailAddress": null
    }
  },
  "com:concur:Expense:0.1": {
    "offeringCode": "DIRECT-BREEZE+",
    "marketingName": "Standard Edition"
  }
}
````

## <a name="response"></a>Response Codes

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
