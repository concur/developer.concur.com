---
title: Guide to the Receipts v4.0 API, TMC Edition
layout: reference
---

# Guide to the Receipts v4.0 API, TMC Edition
Last Revised: October 13 , 2020

This endpoint provides partner merchants the ability to post a travel invoice on behalf of a traveler using the eReceipts API v4.0. The Receipts API v4.0 API allows RESTful developed applications to use the agency’s merchandising system to post fees, service charges, change fees, etc. as an electronic receipt (also referred to as a travel invoice) directly to the user’s account in Concur Expense. This endpoint requires OAuth v2.0 and uses UUID as the matching fact for the user.

This guide is part of a collection designed for TMCs, to read the shared content about audience, development, authentication, and other key information see the [TMC Guide Overview]( /api-guides/tmc/tmc-overview.html).

## Application Scopes

Development Receipts v4.0 API applications by default will have the following scopes registered:

* openid
* user.read
* company.read
* FOP
* GHOST
* TRVPRF
* PASSV
* EMERG
* TSAI
* TMCSP
* MEDIC
* UNUTX
* NOTIF
* COMPD
* ITINER
* receipts.read
* receipts.write

For security purposes, production Receipts API v4.0 applications will have limited scopes registered. The designated scopes are:

* openid
* user.read
* company.read
* receipts.writeonly

Explanations for scopes are documented at https://developer.concur.com/api-reference/authentication/scopes.html

If you wish to have your production application(s) include additional scopes or endpoints, you must submit a request to the technical enablement team, if additional scopes are added you must have your application re-certified.

## <a name="geolocation"></a>Geolocation

Host Location|Geolocation based on location of Company GUID|URL to use for Receipts API v4
------|-----|-----
EMEA|https://emea.api.concursolutions.com/oauth2/v0/token|https://emea.api.Concursolutions.com/receipts/v4/users/
US|https://us.api.concursolutions.com/oauth2/v0/token|https://us.api.Concursolutions.com/receipts/v4/users/
PSCC|https://usg.api.Concursolutions.com/oauth2/v0/token|https://usg.api.Concursolutions.com/receipts/v4/users/

## User Profile Web Service

### Get User Information

https://developer.concur.com/api-explorer/v3-0/Users.html

UUID is required for the Receipts v4.0 API. UUID is available via the Travel Profile v2.0 API. It may be necessary to use the User API to retrieve the user’s UUID if you are storing login ID and email ID but not yet transitioned to the Travel Profile API.

Use the following request parameters to filter your searches:

### Retrieve UUID for All Active Users

GET

```
https://us.api.concursolutions.com/users?offset= 10 0&limit=100 0 &isactive=true
Authorization: Bearer {access_token}
```

### Retrieve UUID by Login ID

GET

```
https://us.api.concursolutions.com/users/?loginid=logind_id@domain
Authorization:Bearer {access_token}
```

### Retrieve UUID by Primary Email ID

GET

```
https://us.api.concursolutions.com/users/?primaryemail=email@domain.com
Authorization: Bearer {access_token}
```

RESPONSE

```
{
    "total": "1",
    "offset": 0,
    "limit": 100,
    "companyinfo": {
        "name": "Company Name, Inc",
        "address": "601 108th Ave NE \ Suite 1000",
        "city": "Bellevue",
        "state": "WA",
        "zip": "98004",
        "country": "US"
    },
    "Items": [
        {
            "Active": true,
            "CountryCode": "US",
            "CellPhoneNumber": "425-590-5000",
            "PrimaryEmail": "Email1@domain.com",
            "EmployeeID": 106,
            "ID": "### UUID ####",
            "Emails": {
                "PrimaryEmail": "Email1@domain.com",
                "VerifiedEmail": null,
                "email2": "Email2@domain.com",
                "email3": "",
                "email4": "",
                "email5": ""
            },
            "OrganizationUnit": null,
            "MiddleName": "Middle",
            "LastName": "Last
            "FirstName": "first",
            "LoginID": "login_id@domain.com"
        }
    ]
}
```

## Receipts API v4.0 – General Type

Version 4.0 of the Receipts API offers features like more receipt types, automatic e-receipt generation in end user’s preferred language, and ability for partners to provide detailed tax information. Unlike version 3.0, we are discontinuing the use of matching facts; instead the partner will have to create a receipt for a specific enduser. Receipts 4.0 works only with the new Authentication API and uses JSON as its data interchange format.

The Receipts API supports several receipt types – documented here: https://developer.concur.com/api-reference/receipts/supported-receipt-types.html.

The available schemas for specific receipt types are reserved for Concur Travel partners, also known as Triplink Suppliers, for their specific types. Triplink Supplier partners and App Center Partners must have Triplink and App Center partnership agreements before their applications can be certified. App Center partnership agreements are also required for ground transportation and ride share receipt providers.

The General receipt type is available for Agency POS transactions as they do not fall under any of the Supplier specific receipt types. The definition is documented here: https://developer.concur.com/api-reference/receipts/supported-receipt-types.html#general-receipt.

The Receipts v 4 .0 API accepts three different formats for posting a receipt:

* **Receipt Data** - Your receipt data is stored along with a system generated receipt image file.
* **Receipt Data & Receipt Image** - Your receipt data and receipt image file are stored.
* **Receipt Image w/o Data** - Your receipt image file is stored along with some accompanying metadata.

All of the above are valid receipt resources, but the service draws a distinction between resources with data versus resources that are standalone images.

Resources of standalone images are referred to as Image-Only Receipts.

Resources with data are schema-enforced and are referred to as e-receipts. This is
the recommended method.

## Create a Receipt - General

### Create a Basic General Receipt Type

REQUEST

```
POST https://us.api.concursolutions.com/receipts/v4/users/{uuid}
```

```
Content-type:application/json
Authorization: Bearer {access_token}
```

BODY

```
"reference": "Invoice #100539586",
"dateTime": "2020-07-20T00:00:00-0800",
"total": "20.00",
"subtotal": "18.00",
"taxesTotal": "2.00",
"currencyCode": "USD",
"seller": {
   "name": "Travel Agency, Inc",
   "location": {
      "name": "Booking Fee",
      "number": "100539586",
      "latitude": 37.80062,
      "longitude": -122.40027,
      "internetAddress": "https://www.concursolutions.com/",
      "emailAddress": "https://www.concursolutions.com/",
      "telephoneNumber": "(888)555-1212",
      "faxNumber": "",
      "address": {
         "streetAddress": "601 108th Ave NE #1000",
         "addressLocality": "Bellevue ",
         "addressRegion": "WA",
         "addressCountry": "US",
         "postalCode": "98004"
      }
   }
},
"taxes": [
   {
      "authority": {
         "addressCountry": "US",
         "addressRegion": "WA"
      },
      "name": "Local Sales Tax",
      "rate": 10,
      "amount": "2.00"
   }
],
"payments": [
   {
      "amount": "20.00",
      "cardDetail": {
         "cardType": "American Express",
         "creditCardId": "1009",
         "authorizationCode": "AB987654321"
      }
   }
],
"lineItems": [
   {
      "sequenceNumber": 1,
      "reference": "",
      "description": "Invoice# 100539586 ",
      "quantity": 1,
      "unitCost": "19.00",
      "subtotal": "19.00",
      "taxesTotal": "2.00",
      "total": "20.00",
      "taxes": [
         {
            "authority": {
               "addressCountry": "US",
               "addressRegion": "WA"
            },
            "name": "Discount",
            "rate": 5,
            "amount": "-1.00"
         }
      ]
   }
]
}
```

RESPONSE

```
201 Created
```

The rendered receipt in Concur Expense as an available expense will look like this:

> **NOTE**: A “Seller Name” must be defined and submitted to your partner enablement representative as your identifier. A minimum 100x100 pixel image file of your organization’s logo should be submitted as well. The logo image will automatically be rendered onto your eReceipt upon viewing.

 > **NOTE**: Store the concur-correlationid value returned in the header response for logging, troubleshooting, or case escalation purposes.

 > **NOTE**: Make note of the geolocation where the company user exists to POST the eReceipt correctly. If the user’s geolocation is unknown or incorrect then default the request to https://us.api.concursolutions.com. The error message will return the correct geolocation for the user.

##  Embed UUID as a Remark

It may be necessary to capture the UUID of the traveler during the booking process, especially if LoginID or other unique identifiers are being used.

One method currently available is to include UUID as an element in General Remarks-Ticketing. Below is an example from the Template Editor:

```
GeneralRemark (Ticketing)
Element Prefix:B¥CTUUID-
User/UUID
```

Upon finishing, parse the UUID and use that value to post the receipt upon completion of the sales transaction or purchasing process. Refer to the PNR Finishing / Template Editor documentation here: https://www.concurtraining.com/customers/tech_pubs/TravelDocs/TSGs/PNRFinishingEditor.pdf

> **NOTE**: Only authorized and certified Agency or Concur Travel configuration specialists should consider making the suggested changes.

## Receipt Retrieval

The Receipts V4 API provides GET access to single user’s receipts that have been submitted through the API via UUID. The response will return a comprehensive list of receipts associated to the user.

Images for receipts directly associated to expense reports, entries, or requests should be obtained via the [Image v1 API](https://developer.concur.com/api-reference/image/v1.image.html). Only the rendered receipt image file will be returned. Examples of applications that should use the Image v1 API versus the Receipts v4 API include ERP integrations for financial journal entry postings, VAT reclaim integrations that obtain expense transactions to calculate VAT reclaim, project billing integrations used to substantiate expenses billed back, or business intelligence tools to track actual expenses vs budgets.

### Retrieve Receipts for the User by UUID

REQUEST

GET

```
https://us.api.concursolutions.com/receipts/v4/users/{uuid}
Content-type:application/json
Authorization: Bearer {access_token}
```

RESPONSE

200

```
{
    "receipts": [
        {
            "stateModifiedAt": "2020-10-05T15:13:14.426Z",
            "modifiedAt": "2020-10-05T15:13:14.426Z",
            "companyId": "################",
            "dateTimeReceived": "2020-10-05T15:13:14.426Z",
            "entityId": "#############",
            "validationSchema": "http://schema.concursolutions.com/general-receipt.schema.json",
            "receipt": {
                "merchant": {
                    "name": "Travel Agency, Inc",
                    "location": {
                        "number": "100539586",
                        "emailAddress": "https://www.concursolutions.com/",
                        "telephoneNumber": "(888)555-1212",
                        "address": {
                            "addressCountry": "US",
                            "addressLocality": "Bellevue ",
                            "addressRegion": "WA",
                            "streetAddress": "601 108th Ave NE #1000",
                            "postalCode": "98004"
                        },
                        "latitude": 37.80062,
                        "name": "Booking Fee",
                        "faxNumber": null,
                        "internetAddress": "https://www.concursolutions.com/",
                        "longitude": -122.40027
                    }
                },
                "reference": "Invoice #100539586",
                "dateTime": "2020-10-03T00:00:00-08:00",
                "seller": {
                    "name": "Travel Agency, Inc",
                    "location": {
                        "number": "100539586",
                        "emailAddress": "https://www.concursolutions.com/",
                        "telephoneNumber": "(888)555-1212",
                        "address": {
                            "addressCountry": "US",
                            "addressLocality": "Bellevue ",
                            "addressRegion": "WA",
                            "streetAddress": "601 108th Ave NE #1000",
                            "postalCode": "98004"
                        },
                        "latitude": 37.80062,
                        "name": "Booking Fee",
                        "faxNumber": null,
                        "internetAddress": "https://www.concursolutions.com/",
                        "longitude": -122.40027
                    }
                },
                "lineItems": [
                    {
                        "reference": null,
                        "sequenceNumber": 1,
                        "total": "20.00",
                        "quantity": 1,
                        "taxesTotal": "2.00",
                        "subtotal": "19.00",
                        "unitCost": "19.00",
                        "description": "Invoice# 100539586 ",
                        "taxes": [
                            {
                                "name": "Discount",
                                "amount": "-1.00",
                                "rate": 5,
                                "authority": {
                                    "addressCountry": "US",
                                    "addressRegion": "WA"
                                }
                            }
                        ]
                    }
                ],
                "app": "https://us.api.concursolutions.com/profile/v1/apps/dafc536c-8cf7-42be-8d40-d8f9a5a79d96",
                "total": "20.00",
                "taxesTotal": "2.00",
                "subtotal": "18.00",
                "payments": [
                    {
                        "cardDetail": {
                            "cardType": "American Express",
                            "authorizationCode": "AB987654321",
                            "creditCardId": "1009"
                        },
                        "amount": "20.00"
                    }
                ],
                "taxes": [
                    {
                        "name": "Local Sales Tax",
                        "amount": "2.00",
                        "rate": 10,
                        "authority": {
                            "addressCountry": "US",
                            "addressRegion": "WA"
                        }
                    }
                ],
                "currencyCode": "USD",
                "user": "https://us.api.concursolutions.com/profile/v1/principals/#################"
            },
            "image": "https://us.api.concursolutions.com/receipts/v4/##################/image",
            "userId": "########################",
            "id": "#######################",
            "digitizationStatus": "NO_PROCESSING_REQUIRED",
            "expense": {
                "paymentType": "CREDIT_CARD"
            },
            "self":
```

### Retrieve Receipt by Receipt ID

Individual receipts can also be retrieved by receipt ID.

REQUEST

```
GET https://us.api.concursolutions.com/receipts/v4/{receiptID}
Content-type:application/xml
Authorization: Bearer {access_token}
```

RESPONSE

200

```
{
"stateModifiedAt": "2020- 10 - 05T15:29:15.082Z",
"modifiedAt": "2020- 10 - 05T15:29:15.082Z",
"companyId": "ef#####################fd",
"dateTimeReceived": "2020- 10 - 05T15:13:14.426Z",
```

```
{
    "stateModifiedAt": "2020-10-05T15:29:15.082Z",
    "modifiedAt": "2020-10-05T15:29:15.082Z",
    "companyId": "ef#####################fd",
    "dateTimeReceived": "2020-10-05T15:13:14.426Z",
    "entityId": "p###########n",
    "validationSchema": "http://schema.concursolutions.com/general-receipt.schema.json",
    "receipt": {
        "merchant": {
            "name": "Travel Agency, Inc",
            "location": {
                "number": "100539586",
                "emailAddress": "https://www.concursolutions.com/",
                "telephoneNumber": "(888)555-1212",
                "address": {
                    "addressCountry": "US",
                    "addressLocality": "Bellevue ",
                    "addressRegion": "WA",
                    "streetAddress": "601 108th Ave NE #1000",
                    "postalCode": "98004"
                },
                "latitude": 37.80062,
                "name": "Booking Fee",
                "faxNumber": null,
                "internetAddress": "https://www.concursolutions.com/",
                "longitude": -122.40027
            }
        },
        "reference": "Invoice #100539586",
        "dateTime": "2020-10-03T00:00:00-08:00",
        "seller": {
            "name": "Travel Agency, Inc",
            "location": {
                "number": "100539586",
                "emailAddress": "https://www.concursolutions.com/",
                "telephoneNumber": "(888)555-1212",
                "address": {
                    "addressCountry": "US",
                    "addressLocality": "Bellevue ",
                    "addressRegion": "WA",
                    "streetAddress": "601 108th Ave NE #1000",
                    "postalCode": "98004"
                },
                "latitude": 37.80062,
                "name": "Booking Fee",
                "faxNumber": null,
                "internetAddress": "https://www.concursolutions.com/",
                "longitude": -122.40027
            }
        },
        "lineItems": [
            {
                "reference": null,
                "sequenceNumber": 1,
                "total": "20.00",
                "quantity": 1,
                "taxesTotal": "2.00",
                "subtotal": "19.00",
                "unitCost": "19.00",
                "description": "Invoice# 100539586 ",
                "taxes": [
                    {
                        "name": "Discount",
                        "amount": "-1.00",
                        "rate": 5,
                        "authority": {
                            "addressCountry": "US",
                            "addressRegion": "WA"
                        }
                    }
                ]
            }
        ],
        "app": "https://us.api.concursolutions.com/profile/v1/apps/##################",
        "total": "20.00",
        "taxesTotal": "2.00",
        "subtotal": "18.00",
        "payments": [
            {
                "cardDetail": {
                    "cardType": "American Express",
                    "authorizationCode": "AB987654321",
                    "creditCardId": "1009"
                },
                "amount": "20.00"
            }
        ],
        "taxes": [
            {
                "name": "Local Sales Tax",
                "amount": "2.00",
                "rate": 10,
                "authority": {
                    "addressCountry": "US",
                    "addressRegion": "WA"
                }
            }
        ],
        "currencyCode": "USD",
        "user": "https://us.api.concursolutions.com/profile/v1/principals/#############"
    },
    "image": "https://us.api.concursolutions.com/receipts/v4/d3c45f8443544e40a9289ee4ff09056b/image",
    "userId": "####################",
    "id": "######################",
    "digitizationStatus": "NO_PROCESSING_REQUIRED",
    "expense": {
        "paymentType": "CREDIT_CARD"
    },
    "self": "https://us.api.concursolutions.com/receipts/v4/d3c45f8443544e40a9289ee4ff09056b",
    "template": "https://us.api.concursolutions.com/receipts/v4/{receiptId}"
}
```

### Retrieve Image-Only Receipt by Receipt ID

From the list of receipts returned in the response for the user, URIs for receipt images are available for each of the receipts returned. Using the company-level OAuth token, you may retrieve the image-only receipt from our Imaging service in an imaging file format.

REQUEST

```
GET https://us.api.concursolutions.com/receipts/v4/{receiptID}/image

Content-type:application/xml
Authorization: Bearer {access_token}
```

RESPONSE

200

Save the response.png file that is returned using the unique Receipt ID as the identifier.

## FAQ

Q. Can anyone create receipts for traveler’s and expense reports?

A. No. Only authorized partners and certified partner applications are granted permissions and secured scopes by the App Center, Platform Enablement team, and Core Services team.

Q. Can anyone connect to an agency receipts application?

A. No. Company connections to certified partner applications can only be made by Administrators.

Q. Can I disconnect my company from an agency receipts application?

A. Yes. Company Administrators can disconnect their organization to any connected application upon request. Also, the partner receipt application can be excluded by any organization upon request. Applications in the App Center can be disabled or hidden by the App Center Administrator upon request. The App Center can also be disabled upon request.
