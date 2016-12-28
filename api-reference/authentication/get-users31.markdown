---
title: GET Users Bulk API
layout: reference
---


# PREVIEW - Get Users Bulk API

* [Overview]()
* [Obtain Company Token](#company)
* [Calling /users Bulk API](#usersbulk)


## <a name="company"></a>Obtain Company Token

Company is a top-level principal within Concur and you would be able to obtain an access token and a refresh token on a Company's behalf just like you would be able to with a User. Only one authorization flow is currently available for obtaining tokens for a Company, which is the [Password grant](#password_grant).

Instructions for obtaining a Company Token is here : https://developer.concur.com/api-reference/authentication/company-auth.html 

## <a name="usersbulk"></a>Calling /users Bulk API

Once you have the Company Token, you would call the `/users` endpoint to retrieve a list of users that belong to that company.


`GET /users`

**Parameters**

Name | Type | Format | Description
-----|------| ------ | -----------
`offset`|`string` |  | **Optional** The offset to begin returning the list of users
`limit`|`string` |  | **Optional** The maximum number of user records to return


**Request**

```http

GET /users HTTP/1.1
Content-Type: application/x-www-form-urlencoded; charset=utf-8
Host: us.api.concursolutions.com

offset=0
&limit=100

```

Sample Curl:

```
curl -X GET -H "Authorization: Bearer $company_token" -H "Accept: application/json" "https://us.api.concursolutions.com/users?offset=0&limit=100"
```

successful call, responds with

```json
200 OK
{
  "total": 2,
  "offset": 0,
  "limit": 100,
  "Items": [
    {
      "Active": true,
      "CellPhoneNumber": "5551234567",
      "PrimaryEmail": "johndoe@gmail.com",
      "EmployeeID": "johndoe@gmail.com",
      "ID": "99BFFFC3-C0BE-44FF-A441-AE1FFFFFF75B8",
      "OrganizationUnit": null,
      "MiddleName": "",
      "LastName": "Doe",
      "FirstName": "John",
      "LoginID": "johndoe@gmail.com"
    },
    {
      "Active": true,
      "CellPhoneNumber": null,
      "PrimaryEmail": "janedoe@gmail.com",
      "EmployeeID": "",
      "ID": "55FFF504-C7B8-49FF-9E15-6248FFFFFCDB",
      "OrganizationUnit": null,
      "MiddleName": "",
      "LastName": "Doe",
      "FirstName": "Jane",
      "LoginID": "janedoe@gmail.com"
    }
  ]
}
```



