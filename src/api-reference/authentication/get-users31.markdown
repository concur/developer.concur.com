---
title: GET Users Bulk API
layout: reference
---


# PREVIEW - Get Users Bulk API

## THIS IS AN EXPERIMENTAL API. PLEASE DO NOT USE WITHOUT PRIOR AUTHORIZATION FROM THE CORE-SERVICES TEAM IN CONCUR. ##

* [Overview]()
* [Obtain Company Token](#company)
* [Calling /users Bulk API](#usersbulk)


## <a name="company"></a>Obtain Company Token

Company is a top-level principal within Concur and you would be able to obtain an access token and a refresh token on a Company's behalf just like you would be able to with a User. Only one authorization flow is currently available for obtaining tokens for a Company, which is the [Password grant](/api-reference/authentication/apidoc.html#password_grant).

Instructions for obtaining a Company Token is here : https://developer.concur.com/api-reference/authentication/company-auth.html 

## <a name="usersbulk"></a>Calling /users Bulk API

Once you have the Company Token, you would call the `/users/` endpoint to retrieve a list of users that belong to that company.

This endpoint will also return basic company information together with the list of users.


`GET /users/`

**Query Parameters**

Name | Type | Format | Description
-----|------| ------ | -----------
`offset`|`string` |  | **Optional** The offset to begin returning the list of users
`limit`|`string` |  | **Optional** The number of user records to return in that call. Max: 1000
`<name_of_filter>`|`string` |  | **Optional** Filters results based on the desired field. Possible filters are : `isactive` `loginid` `lastname` `employeeid` `primaryemail` `countrycode`. 

* Note: All query parameters must be lower-case and are CASE-SENSITIVE. If you pass an invalid query parameter, you will receive a 400 Bad Request, invalid query params.

**Request**

```http

GET /users HTTP/1.1
Content-Type: application/x-www-form-urlencoded; charset=utf-8
Host: us.api.concursolutions.com

```

Sample Curl:

```shell
curl -v -X GET -H "Authorization: Bearer $token" \
-H "Accept: application/json" \
'https://us.api.concursolutions.com/users/?offset=0&limit=100&isactive=true'
```

successful call, responds with

```json
200 OK
{
  "total": 2,
  "offset": 0,
  "limit": 100,
  "company": {
    "name": "Company Name LLC",
    "address": "601 108th ave NE",
    "city": "Bellevue",
    "state": "WA",
    "zip": "98004",
    "country": "US"
  },
  "Items": [
    {
      "Active": true,
      "CountryCode": "US",
      "CellPhoneNumber": "5551234567",
      "PrimaryEmail": "johndoe@gmail.com",
      "EmployeeID": "johndoe@gmail.com",
      "ID": "99BFFFC3-C0BE-44FF-A441-AE1FFFFFF75B8",
      "Emails": ["PrimaryEmail", "VerifiedEmail", "email2", "email3", "email4", "email5"],
      "OrganizationUnit": null,
      "MiddleName": "",
      "LastName": "Doe",
      "FirstName": "John",
      "LoginID": "johndoe@gmail.com"
    },
    {
      "Active": true,
      "CountryCode": "US",
      "CellPhoneNumber": null,
      "PrimaryEmail": "janedoe@gmail.com",
      "EmployeeID": "janedoe@gmail.com",
      "ID": "55FFF504-C7B8-49FF-9E15-6248FFFFFCDB",
      "Emails": ["PrimaryEmail", "VerifiedEmail", "email2", "email3", "email4", "email5"],
      "OrganizationUnit": null,
      "MiddleName": "",
      "LastName": "Doe",
      "FirstName": "Jane",
      "LoginID": "janedoe@gmail.com"
    }
  ]
}
```

* `total` - is the total number of users within the company.

