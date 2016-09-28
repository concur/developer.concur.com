---
title: Getting Started
layout: reference
---

# Getting Started

Concur's new Oauth2 framework is a very simple way to implement a Unified Token Authentication mechanism within your application. Here is a four step guide to helping you get up to speed and making calls to Concur's API.


## 1. Obtain your Application clientID and clientSecret 
Before you can obtain a JSON Web Token (JWT), you need to register an application with Concur. You can do this by contacting your Partner Enablement Manager or Partner Account Manager. Once you have registered an application, you will receive a `clientId` and `clientSecret`. The `clientId` is a unique UUID4 identifier for your application, and the `clientSecret` is your application's password. You will be using this credential to obtain tokens either for the application itself, or on behalf of a user. 

## 2. Obtaining an Access Token
In order for an application to call a Concur API, you need to obtain an `accessToken` on behalf of a principal, the most common principal is the `user`. There are multiple ways of obtaining an `accessToken` through the various grants ([Password](???), [Authorization](???), [Implicit](???), [Client Credentials](???)) . Here is the simplest example how you would obtain an `accessToken` for a principal by using the `password` grant.

The `password` grant flow is used when you need to authenticate a user, using its `username` and `password`. Note, the user you're requesting an `accessToken` for needs to be in the same environment as your application (eg. us, emea). Typically this is used by apps that have a login screen where the user's credentials are captured or stored. 

The first time you request for an `accessToken` a `refreshToken` is also returned. There are certain conditions where a `refreshToken` is not returned. This is used to get a new `accessToken` when one as expired. (see below for more info)

Example shell script using cURL to obtain an `accessToken`:

```
oauth2_base=https://us.api.concursolutions.com/oauth2
username=<concur_username> eg. john.doe@gmail.com
password=<password> eg. password1
client_id=<clientId> eg. e01f725d-b4ce-4ce3-a664-b670cb5876cb0
client_secret=<clientSecret> eg. 35c3bd92-fcb8-405e-a886-47ff3fba5664
curl -X POST -H 'concur-correlationid: nameofapp' "$oauth2_base/v0/token" --data 'username=$username&password=$password&grant_type=password&client_secret=$client_secret&client_id=$client_id'
```

Full docs: https://developer.concur.com/api-preview/auth/apidoc.html#password_grant

## 3. Calling an API with the accessToken
Once you have the `accessToken` in the form of a JWT (JSON Web Token), you need to supply this in an Authorization header in the form of `Authorization: Bearer <accessToken>` when making a HTTPS REST call. The `accessToken` is a large string that looks something like this:

```
eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImtpZCI6IjE0NTU2MTQzNDYifQ.eyJhdWQiOiIqIiwic3ViIjoiaHR0cDovL21zcGNzcHJzcnFhLmNvbmN1ci5jb25jdXJ0ZWNoLm9yZzozMDAzL3Byb2ZpbGUtc2VydmljZS92MS91c2Vycy83NjAwOUFEMy1GNzdCLTREOTgtQTIxQS01NTNDOUM5MTc5RjAiLCJpc3MiOiJodHRwczovL2NvbmN1ci5jb20iLCJleHAiOjE0NzM4OTUxMjksImxlZ2FjeV9hcHBsaWNhdGlvbl9pZCI6MTUwMDA2MzY1OSwidXNlclVSSSI6Imh0dHA6Ly9tc3Bjc3Byc3JxYS5jb25jdXIuY29uY3VydGVjaC5vcmc6MzAwMy9wcm9maWxlLXNlcnZpY2UvdjEvdXNlcnMvNzYwMDlBRDMtRjc3Qi00RDk4LUEyMUEtNTUzQzlDOTE3OUYwIiwidXNlcnV1aWQiOiI3NjAwOUFEMy1GNzdCLTREOTgtQTIxQS01NTNDOUM5MTc5RjAiLCJuYmYiOjE0NzM4OTE1MjksImh0dHBzOi8vYXBpLmNvbmN1cnNvbHV0aW9ucy5jb20vYXBwIjoiaHR0cHM6Ly9hcGkuY29uY3Vyc29sdXRpb25zLmNvbS9hcHAtbWdtdC92MC9hcHBzL2UwMTBlMjVkLWI0Y2UtNGNlMy1hN2U0LWI2NzBjYjFhZGNiMCIsImh0dHBzOi8vYXBpLmNvbmN1cnNvbHV0aW9ucy5jb20vc2NvcGVzIjpbIkNDQVJEIiwiQ09NUEQiLCJVU0VSIiwidXNlcl9yZWFkIiwiRU1FUkciLCJKT0JMT0ciLCJFUkVDUFQiLCJJVElORVIiLCJGSVNWQyIsIkxJU1QiLCJQQVNTViIsIkNPTkZJRyIsIkZPUCIsIkdIT1NUIiwiQ09OUkVRIiwiVFJJUElUIiwiQ09NUEFOWSIsInByb2ZpbGUiLCJFVlMiLCJlbWFpbCIsIlRSVlBUUyIsIkFUVEVORCIsIklOVlBPIiwiTk9USUYiLCJUUlZSRVEiLCJTVVBTVkMiLCJFWFBSUFQiLCJhZGRyZXNzIiwiRVhUUkNUIiwiUEFZQkFUIiwid3Jvbmdfc2NvcGUiLCJJTlZQTVQiLCJJTUFHRSIsIlRBWElOViIsIlJDVElNRyIsIlVOVVRYIiwiVFdTIiwiVE1DU1AiLCJCQU5LIiwiSU5WVkVOIiwib3BlbmlkIiwiTVRORyIsIklOU0dIVCIsIlRSVlBSRiIsIklOVlRWIiwiTUVESUMiLCJUU0FJIl0sImlhdCI6MTQ3Mzg5MTUyOX0.QHY4Mc5A3J981-HDv7KUdgS4tUI-qnmQAxwe9J6DHxuMmYSoGEYZ0dsnLnqc2lO2iVJK6Pg3EBZTArq8_vzV2FK7tA4-IT1eCEHo1e-RWZyWLnR7P56SvZozXpY73daovSH7572HrUm21FXcyLmdaLZyo2LfFcChaghbSCjm1Jg1duH-pLPUW4d89-_pdakmyxfV3GCm2N_XQXoRhNYAAiZcG8UfxEn3TpMHJ96F2n6keJanT_Sn2Sek_sH2EmeeCpg5-jDe0fvLvr1-gY5t0ifq8QBKWHSUUIrGbQvseD6CGzfyiFUqVypN2lukfWACR-26otN50c0OzY6kgY06RA
```

Armed with the `accesstoken` you can start making calls to Concur's API. Here's an example to retrieve profile information for a user in the Production environment using cURL ([Base URIs for other Environments](https://developer.concur.com/api-preview/auth/apidoc.html#base_uri)):

> curl -k -v -H "Accept: application/json" -H "Authorization: Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImtpZCI6IjE0NTU2MTQzNDYifQ.eyJhdWQiOiIqIiwic3ViIjoiaHR0cDovL21zcGNzcHJzcnFhLmNvbmN1ci5jb25jdXJ0ZWNoLm9yZzozMDAzL3Byb2ZpbGUtc2VydmljZS92MS91c2Vycy83NjAwOUFEMy1GNzdCLTREOTgtQTIxQS01NTNDOUM5MTc5RjAiLCJpc3MiOiJodHRwczovL2NvbmN1ci5jb20iLCJleHAiOjE0NzM4OTUxMjksImxlZ2FjeV9hcHBsaWNhdGlvbl9pZCI6MTUwMDA2MzY1OSwidXNlclVSSSI6Imh0dHA6Ly9tc3Bjc3Byc3JxYS5jb25jdXIuY29uY3VydGVjaC5vcmc6MzAwMy9wcm9maWxlLXNlcnZpY2UvdjEvdXNlcnMvNzYwMDlBRDMtRjc3Qi00RDk4LUEyMUEtNTUzQzlDOTE3OUYwIiwidXNlcnV1aWQiOiI3NjAwOUFEMy1GNzdCLTREOTgtQTIxQS01NTNDOUM5MTc5RjAiLCJuYmYiOjE0NzM4OTE1MjksImh0dHBzOi8vYXBpLmNvbmN1cnNvbHV0aW9ucy5jb20vYXBwIjoiaHR0cHM6Ly9hcGkuY29uY3Vyc29sdXRpb25zLmNvbS9hcHAtbWdtdC92MC9hcHBzL2UwMTBlMjVkLWI0Y2UtNGNlMy1hN2U0LWI2NzBjYjFhZGNiMCIsImh0dHBzOi8vYXBpLmNvbmN1cnNvbHV0aW9ucy5jb20vc2NvcGVzIjpbIkNDQVJEIiwiQ09NUEQiLCJVU0VSIiwidXNlcl9yZWFkIiwiRU1FUkciLCJKT0JMT0ciLCJFUkVDUFQiLCJJVElORVIiLCJGSVNWQyIsIkxJU1QiLCJQQVNTViIsIkNPTkZJRyIsIkZPUCIsIkdIT1NUIiwiQ09OUkVRIiwiVFJJUElUIiwiQ09NUEFOWSIsInByb2ZpbGUiLCJFVlMiLCJlbWFpbCIsIlRSVlBUUyIsIkFUVEVORCIsIklOVlBPIiwiTk9USUYiLCJUUlZSRVEiLCJTVVBTVkMiLCJFWFBSUFQiLCJhZGRyZXNzIiwiRVhUUkNUIiwiUEFZQkFUIiwid3Jvbmdfc2NvcGUiLCJJTlZQTVQiLCJJTUFHRSIsIlRBWElOViIsIlJDVElNRyIsIlVOVVRYIiwiVFdTIiwiVE1DU1AiLCJCQU5LIiwiSU5WVkVOIiwib3BlbmlkIiwiTVRORyIsIklOU0dIVCIsIlRSVlBSRiIsIklOVlRWIiwiTUVESUMiLCJUU0FJIl0sImlhdCI6MTQ3Mzg5MTUyOX0.QHY4Mc5A3J981-HDv7KUdgS4tUI-qnmQAxwe9J6DHxuMmYSoGEYZ0dsnLnqc2lO2iVJK6Pg3EBZTArq8_vzV2FK7tA4-IT1eCEHo1e-RWZyWLnR7P56SvZozXpY73daovSH7572HrUm21FXcyLmdaLZyo2LfFcChaghbSCjm1Jg1duH-pLPUW4d89-_pdakmyxfV3GCm2N_XQXoRhNYAAiZcG8UfxEn3TpMHJ96F2n6keJanT_Sn2Sek_sH2EmeeCpg5-jDe0fvLvr1-gY5t0ifq8QBKWHSUUIrGbQvseD6CGzfyiFUqVypN2lukfWACR-26otN50c0OzY6kgY06RA" https://us.api.concursolutions.com/profile/v1/me

and the response will look like:

```
{
  "addresses": [
    {
      "type": "Home",
      "streetAddress": "",
      "locality": "",
      "region": "",
      "postalCode": "",
      "country": "US"
    },
    {
      "type": "Work",
      "streetAddress": "",
      "locality": "",
      "region": "",
      "postalCode": "",
      "country": "US"
    }
  ],
  "com:concur:internal:product:Identifiers:1.0": {
    "cteUsername": "taso@taso-sandbox.com",
    "expenseIds": {
      "guuid": "8002019270063595416",
      "entityId": "d0023488znta"
    },
    "travelIds": {
      "userId": 85663431,
      "companyId": "63E447F6-A6A7-4B70-A951-10F45d693B43",
      "companyInternalId": 222458,
      "setId": 91157361,
      "ruleClassId": 394103,
      "travelConfigId": 0
    }
  },
  "meta": {
    "created": "2016-06-08T00:00:00.000",
    "lastModified": "2016-08-22T14:32:00.000",
    "resourceType": "EnterpriseUser"
  },
  "displayName": "Taso",
  "name": {
    "formatted": "Lyristis, Taso ",
    "familyName": "Lyristis",
    "givenName": "Taso",
    "middleName": "",
    "honorificPrefix": "",
    "honorificSuffix": ""
  },
  "phoneNumbers": [
    {
      "type": "Home",
      "value": "tel:+1-4251231244",
      "primary": false,
      "notifications": false,
      "countryCode": "US",
      "countryISDCode": "1"
    },
    {
      "type": "Work",
      "value": "tel:+1-4251231234;ext=",
      "primary": false,
      "notifications": false,
      "countryCode": "US",
      "countryISDCode": "1"
    }
  ],
  "com:concur:Employee:1.0": {
    "employeeId": "taso@taso-sandbox.com",
    "jobTitle": "",
    "managerId": null,
    "orgUnitId": null
  },
  "dateOfBirth": null,
  "schemas": [
    "com:concur:User:1.0",
    "com:concur:internal:product:Identifiers:1.0",
    "com:concur:Employee:1.0"
  ],
  "active": true,
  "id": "e01f725d-b4ce-4ce3-a664-b670cb5876cb0",
  "com:concur:TravelPreferences:1.0": {
    "air": {
      "seat": {
        "interrowPosition": null,
        "sectionPosition": null
      },
      "meal": "DontCare",
      "homeAirport": null
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
      "smoking": "DontCare",
      "carType": "DontCare",
      "transmission": "DontCare",
      "gpsEnabled": false,
      "skirack": false
    },
    "hotel": {
      "earlyCheckin": false,
      "remark": null,
      "pool": false,
      "roomService": false,
      "foamPillows": false,
      "accessForBlind": false,
      "accessForWheelchair": false,
      "gym": false,
      "roomType": "DontCare",
      "restaurant": false,
      "rollawayBed": false,
      "smoking": "DontCare",
      "crib": false
    }
  },
  "gender": null,
  "emails": [
    {
      "value": "taso@taso-sandbox.com",
      "type": "Business",
      "notifications": true
    }
  ],
  "userType": "Enterprise"
}
```

Full docs: https://developer.concur.com/api-reference/user/

### 4. Access Token expiry and obtaining a fresh one
Access Tokens have a default __One hour__ lifetime. In order to obtain a fresh `accessToken` you need to call the auth endpoint using the `refresh_grant`. This will return a brand new `accessToken` AND a brand new `refreshToken`. Refresh Tokens have a default __6 month__ lifetime. Clients will typically store the `refreshToken` together with the other user metadata like login information and unique identifiers.

Here's an example of a cURL call to obtain a new `accesstoken`

```
curl -X POST 'https://us.api.concursolutions.com/oauth2/v0/token' --data 'client_id=$client_id&client_secret=$client_secret&grant_type=refresh&refresh_token=<old refresh token>'
```

FULL DOCS: https://developer.concur.com/api-preview/auth/apidoc.html#refresh_token

Now that you've made your first call, read up more about Concur's wide ranging APIs and how they can enhance your application or solve your business needs.

https://developer.concur.com/api-reference/index.html

