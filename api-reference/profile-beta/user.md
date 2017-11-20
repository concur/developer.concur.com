---
title: User
layout: reference
---

Warning: Concur's Profile API is currentlly in **BETA** and is subject to change.


[Getting Started with Profile](gettingStarted.html)  -  [Company API](company.html)  -  [**User API**](user.html)

# User
The Concur's **user** API is used to help provision and manage user accounts and profile details across multiple Concur products, including Expense, Invoice, Request, Travel and TripIt.

* [Schema Definition](#scim)
* [Get User](#get)
* [Response Codes](#response)

### Version
1.0

## <a name="scim"></a>Schema Definition

The User schema itself is defined in the [SCIM schema definition schema](http://i2.kym-cdn.com/photos/images/original/000/384/176/d2f.jpg), in particular, RFC 7643 & optionally RFC 7644.

The latest version of the User schema is always available at: [user.json](user.json).

## <a name="get"></a>Get User

Profile supports user information retrieval with access tokens. And the access token will limit the user account, as well as the user attributes, that you can query for. You can use the following endpoint to lookup your user:

    GET /profile/v1/me     (access token required)


Curl example:


    curl -k -v -H "Authorization: Bearer $access-token" "https://$host/profile/v1/me"

The above calls will retrieve general user profile information. User resource also supports a `schema` parameter to limit or expand the data returned. To limit the amount of data returned, you can use `?schema=compact`. To also retrieve expense related data, you can use `?schema=expense`. You can also provide comma delimited schema list for the parameter, such as `?schema=compact,expense`.

### User details 

Here is a sample user response, without compact, but with expense schema.

````json
{
    "active": true,
    "id": "1c1e5ec5-1abc-4edd-a92a-bc551d0dfcd7",
    "userType": "Enterprise",
    "meta": {
        "created": "2017-03-30T00:00:00.000",
        "lastModified": "2017-07-03T17:46:00.000",
        "principalType": "user",
        "resourceType": "EnterpriseUser"
    },
    "preferredLanguage": "en",
    "dateOfBirth": "1990-01-01",
    "schemas": [
        "com:concur:User:1.0",
        "com:concur:Employee:1.0",
        "com:concur:TravelPreferences:1.0",
        "com:concur:Programs:1.0",
        "com:concur:Documents:1.0",
        "com:concur:Expense:0.2"
    ],
    "gender": "Male",
    "emails": [
        {
            "value": "1@profile-58dd7cd7.com",
            "type": "Business",
            "notifications": true,
            "verified": false
        },
        {
            "value": "test.user@concur.com",
            "type": "Personal",
            "notifications": true,
            "verified": false
        }
    ],
    "com:concur:Documents:1.0": {
        "passport": [
            {
                "number": "12345678",
                "issuingCountry": "US",
                "placeIssued": "Bellevue",
                "dateIssued": "2017-06-02",
                "expiration": "2023-06-30"
            }
        ],
        "visa": [
            {
                "number": "987654321",
                "issuedByCountry": "AF",
                "placeIssued": null,
                "issuedForCountry": null,
                "dateIssued": null,
                "expiration": "2021-06-03"
            }
        ]
    },
    "addresses": [
        {
            "type": "Home",
            "streetAddress": "profile-58dd7cd7 home address",
            "locality": "Redmond",
            "region": "WA",
            "postalCode": "98052",
            "country": "US"
        },
        {
            "type": "Work",
            "streetAddress": "profile-58dd7cd7 office",
            "locality": "bellevue",
            "region": "WA",
            "postalCode": "98004",
            "country": "US"
        }
    ],
    "com:concur:Employee:1.0": {
        "companyUUID": "d63d3d33-9255-41f4-8a1c-dabd6ab08578",
        "companyInternalId": 277471,
        "employeeId": "1@profile-58dd7cd7.com",
        "jobTitle": "",
        "managerId": "ae3204d3-a94f-47ad-94ef-8234ac40e560",
        "orgUnitId": 80265
    },
    "com:concur:TravelPreferences:1.0": {
        "air": {
            "seat": {
                "interrowPosition": "Aisle",
                "sectionPosition": "Forward"
            },
            "homeAirport": "SEA",
            "meal": "BLML"
        },
        "rail": {
            "space": "DontCare",
            "meal": "DontCare",
            "bedCategory": "DontCare",
            "fareSpaceComfort": "DontCare",
            "deck": "DontCare",
            "coach": "DontCare",
            "bed": "DontCare",
            "berth": "DontCare",
            "noiseComfort": "DontCare",
            "contingency": "DontCare",
            "seat": "DontCare"
        },
        "car": {
            "smoking": "NonSmoking",
            "carType": "Mini",
            "transmission": "Automatic",
            "gpsEnabled": false,
            "skirack": false
        },
        "hotel": {
            "earlyCheckin": true,
            "remark": null,
            "pool": true,
            "roomService": true,
            "foamPillows": true,
            "accessForBlind": true,
            "accessForWheelchair": true,
            "gym": true,
            "roomType": "King",
            "restaurant": true,
            "rollawayBed": true,
            "smoking": "NonSmoking",
            "crib": true
        }
    },
    "com:concur:Programs:1.0": {
        "rail": [
            {
                "default": false,
                "pointsNext": null,
                "expiration": null,
                "nextStatus": null,
                "points": null,
                "segments": null,
                "parentChainVendorName": null,
                "vendorName": "AccesRail",
                "account": "123454321",
                "statusBenefits": null,
                "status": null,
                "segmentsNext": null,
                "parentChainVendorCode": null,
                "vendorCode": "9B"
            }
        ],
        "air": [],
        "hotel": [],
        "car": []
    },
    "com:concur:Expense:0.2": {
        "middleInitial": "T",
        "middleName": "Test",
        "loginId": "1@profile-58dd7cd7.com",
        "ledger": "DEFAULT",
        "countrySubdivision": null,
        "driverId": null,
        "cuuid": "8002699190004701412",
        "cashAdvanceAccountCode": null,
        "emailAddress": "1@profile-58dd7cd7.com",
        "employeeId": "1@profile-58dd7cd7.com",
        "firstName": "Concur",
        "reimbursementType": "APCHECK",
        "reimbursementCurrency": "USD",
        "active": true,
        "lastName": "User",
        "uuId": "1c1e5ec5-1abc-4edd-a92a-bc551d0dfcd7",
        "orgUnitData": [
            {
                "orgUnitName": "Expense Policy Group",
                "orgUnitValue": null
            }
        ],
        "customData": [
            {
                "customFieldName": "Invoice Policy Group",
                "customFieldValue": null
            },
            {
                "customFieldName": "Employee Administration Country",
                "customFieldValue": "United States"
            }
        ],
        "localeCode": "en_US",
        "countryCode": "US"
    }
}
````

## <a name="response"></a>Response Codes

|**HTTP Status**|**Status**|**Description/Error Code**|
|---------------|----------|---------------|
|200| Success | Resource retrieved or updated|
|201| Success | Resource created|
|204| Success | Operation exectuted successfully, with no content returned|
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