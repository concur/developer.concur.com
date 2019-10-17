---
title: GET Users Bulk API
layout: reference
---

{% include prerelease.html %}

* [Obtain Company Token](#company)
* [Calling Users Bulk API](#usersbulk)
* [Schema](#schema)

## <a name="company"></a>Obtain Company Token

Company is a top-level principal within SAP Concur and you would be able to obtain an access token and a refresh token on a company's behalf just like you would be able to with a user. Only one authorization flow is currently available for obtaining tokens for a company, which is the [Password grant](/api-reference/authentication/apidoc.html#password_grant).

For more information and instructions for obtaining a Company Token, please review the [Company Level Authentication](/https://developer.concur.com/api-reference/authentication/company-auth.html)

## <a name="usersbulk"></a>Calling Users Bulk API

This endpoint will retrieve a list of users that belong to a company and return basic company information together with the list of users.

### Request

#### URI

##### Template

```http
GET  /users/
```

#### Parameters

Name | Type | Format | Description
-----|------| ------ | -----------
`total`|`string` | - |The total number of users within the company.
`offset`|`string` | - |The offset to begin returning the list of users.
`limit`|`string` | - |The number of user records to return in that call. Maximum: 1000
`<name_of_filter>`|`string` | - |Filters results based on the desired field. Supported values: `isactive`, `loginid`, `lastname`, `employeeid`, `primaryemail`, `countrycode`, `id`

### Example

#### Request

```http

GET /users HTTP/1.1
Content-Type: application/x-www-form-urlencoded
Host: us.api.concursolutions.com

```

##### Sample Curl:

```shell
curl -v -X GET -H "Authorization: Bearer $token" \
-H "Accept: application/json" \
'https://us.api.concursolutions.com/users/?offset=0&limit=100&isactive=true'
```

#### Response

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

## <a name="schema"></a>Schema

Property Name|Type|Format|Description
---|---|---|---
`Items`|`array`|[`User`](#user)	|**Required** Contains the Client, Users, Locations, Source Partner and Transaction.
`NextPage`|`string`|-|The URI of the next page of results, if any.

### <a name="user"></a>User

Property Name|Type|Format|Description
---|---|---|---
`Active`|`boolean`|-|Indicates whether the user is currently active or not.
`CellPhoneNumber`|`string`|-|The cell phone number of the user.
`EmployeeID`|`string`|-|The employee ID of the user.
`FirstName`|`string`|-|The first name of the user.
`ID`|`string`|-|The unique identifier of the resource.
`LastName`|`string`|-|The last name of the user.
`LoginID`|`string`|-|The login ID of the user.
`MiddleName`|`string`|-|The middle name of the user.
`OrginzationUnit`|`string`|-|The organization unit of the user.
`PrimaryEmail`|`string`|-|The primary email of the user.
`URI`|`string`|-|The URI to the resource.
