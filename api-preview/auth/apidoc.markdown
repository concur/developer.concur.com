---
title: Authentication API
layout: reference
---


# Authentication API (Preview)

The information on this page will help you understand the authentication process utilized in V4 applications. It will also help you understand V4 tokens and the types of grants available to Concur partners and the trust relationships which they govern.


###   [Tokens](#access_token)
  * [Obtaining a token](#obtain_token)
  * [Refreshing a token](#refresh_token)
  * [Revoking a token](#revoke_token)
  * [Token Management](#manage_token)

###  [Types of Grants](#auth_grant)
  * [Authorization grant](#auth_grant)
  * [Implicit grant](#implicit_grant)
  * [Password grant](#password_grant)
  * [Client Credentials grant](#client_credentials)
  * [One time password grant](#otp_grant)


## <a name="access_token"></a>Access Tokens


The Oauth2 service generates access tokens for authenticated users, applications or companies. Tokens are created using the JSON Web Token (JWT) format.
The token returned in the Oauth2 response can be used to access protected resources on Concur's services.

Depending on grant type, the Oauth2 response can contain these values:

Name | Type | Format | Description
-----|------|--------|------------
`expires_in`|`string`|-|The lifetime in seconds of the access token
`scope`|`string`|-|The scope of the access token as granted to the client application
`token_type`|`string`|-| The type of token returned. Value will be `Bearer`
`access_token`|`string`|-|JSON Web Token (JWT) used to access protected resources of Concur's services
`refresh_token`|`string`|-|Refresh token required to request a new access token for a given user

###  Token Response

```
http
HTTP/1.1 200 OK
Content-Type: application/json;charset=UTF-8
Date: date-requested
Content-Length: 3397
Connection: Close
```

```
json
{
	"expires_in": "3600",
	"scope": "app-scopes",
	"token_type": "Bearer",
	"access_token": "access_token",
	"refresh_token": "refresh_token"
}
```

###  Token Lifetime

An **access token** is valid for one hour after creation.

## <a name="obtain_token"></a>Obtaining a token


* For a User
* For an Application
* For a Company

## <a name="refresh_token"></a>Refreshing a token


A **Refresh Grant** is used to refresh an expired access_token. The grant can be used anytime a refresh_token is returned in the response of another grant request. No user interaction is required.

###  Token Lifetime

A **Refresh Token** is valid for six months. The client application must reinitiate the authorization process if the refresh token has expired.  When a refresh token is used to request a new access token, both a new access token and a new refresh token are returned in the response.

Concur recommends that the client application use the refresh grant to request a new access token as the initial step of accessing protected resources of Concur's services.

###  Refreshing the token

To request a new access token using a valid refresh token, use the Oauth2 /token endpoint. Use the `application/x-www-form-urlencoded` content type and character encoding `charset=utf-8` to specify the parameters listed below in the request body.

`POST /oauth2/v0/token`

###  Parameters

Name | Type | Format | Description
-----|------| ------ | -----------
`client_id`|`string` | `UIID` | **Required:** The client applications client_id supplied by App Management
`client_secret`|`string` | `UIID` | **Required:** The client applications client_secret supplied by App Management
`refresh_token`|`string` | `UUID` | **Required:** An existing valid refresh token to be used to request a new access token
`scope`|`string` |-| The client applications list of scopes
`grant_type`|`string` |-| **Required:** The grant type instructs the Oauth2 service how to process the request. For refresh token, the value must be `refresh_token`

###  Request Body

```
http

POST /oauth2/v0/token HTTP/1.1
Content-Type: application/x-www-form-urlencoded; charset=utf-8
Host: us.api.concursolutions.com
Connection: close
Content-Length: 437

client_id=your-client_id
&client_secret=your-client_secret
&grant_type=refresh_token
&refresh_token=valid-refresh_token
&scope=app-scope

```

### JSON example of a successful response

````http
HTTP/1.1 200 OK
Content-Type: application/json;charset=UTF-8
Date: date-requested
Content-Length: 3397
Connection: Close
```

```
json

{
  "expires_in": "3600",
  "scope": "app-scope",
  "token_type": "Bearer",
  "access_token": "new-access_token",
  "refresh_token": "new-refresh_token"
}

```

## <a name="revoke_token"></a>Revoking a Token


## <a name="manage_token"></a>Managing Tokens

refresh token 28char

## <a name="auth_grant"></a>Authorization Grant


## <a name="implicit_grant"></a>Implicit Grant


## <a name="password_grant"></a>Password Grant


The **Password Grant** can be used when there is a trust relationship between the user and the application. The application either already has the user's credentials or can obtain the user's credentials by directly interacting with the user.

###  Parameters

Name | Type | Format | Description
-----|------| ------ | --------------
  `client_id`|`string` | `UIID` | Application client_id supplied by App Management
  `client_secret`|`string` | `UUID` | Application client_secret supplied by App Management
  `grant_type`|`string` |-| Specify the grant type the oauth2 service is expected to process. The value is `password` for a password grant.
  `username`|`string` |-| Specify the username, userId, or companyId to be used in the password grant request
  `password`|`string` |-| Specify the user's password, usertoken, or companytoken to be used in the password grant request
  `credtype`|`string` |-| The credtype signifies to oauth2 which credential set is submitted in the request. There are two  supported values: `authtoken` and `password`. If either is omitted, oauth2 will assume the type is `password`

###  Request Body
```http
POST /oauth2/v0/token HTTP/1.1
Content-Type: application/x-www-form-urlencoded; charset=utf-8
Host: us.api.concursolutions.com
Connection: close
Content-Length: 175

client_id=your-client_id
&client_secret=your-client_secret
&grant_type=password
&username=username
&password=password
```

###  JSON example of a successful Response

```
http
HTTP/1.1 200 OK
Content-Type: application/json;charset=UTF-8
Date: date-requested
Content-Length: 3397
Connection: Close
```

```
json
{
	"expires_in": "3600",
	"scope": "app-scopes",
	"token_type": "Bearer",
	"access_token": "access_token",
	"refresh_token": "refresh_token"
}

```


###  Response Codes

| Http Code | Code | Error | Description                                     |
|-----------|------|------ | -------------------|
|       200 |    - |-| JWT in response                                 |
|       400 |    2 |-| user not found                                  |
|       400 |    5 |-| password mismatch                               |
|       400 |    9 |-| service account cannot logon                    |
|       400 |   10 |-| user account disabled                           |
|       400 |   11 |-| company account disabled                        |
|       400 |   12 |-| password has been force expired                 |
|       400 |   13 |-| password expired                                |
|       400 |   14 |-| user is locked out                              |
|       400 |   16 |-| User lives in another pod                       |
|       400 |   51 |-| username is not supplied                        |
|       400 |   52 |-| password is not supplied                        |
|       400 |   53 |-| company is not enabled for this oauth2 client   |
|       400 |   54 |-| required scope is not a subset of reg. scope    |
|       500 |    - |-| internal_server_error                           |

###  Example of an invalid  login

```
json
{
  "error": "invalid_grant",
  "error_description": "Incorrect Credentials. Please Retry",
  "code": 5
}
```

## <a name=“client_credentials”></a>Client Credentials Grant


###  Overview


####  Requesting a client_credentials token

Use the `application/x-www-form-urlencoded` content type and character encoding `charset=utf-8` to specify the parameters listed below in the request body.

`POST /oauth2/v0/token`

###  Parameters

Name | Type | Format | Description
-----|------| ------ | -----------
`client_id`|`string` | `UIID` | **Required:** Applications client_id supplied by App Management
`client_secret`|`string` | `UUID` | **Required:** Applications client_secret supplied by App Management
`grant_type`|`string` |-| **Required:** Specify the grant type the oauth2 service is expected to process. For client_credentials grant, the value is `client_credentials`

### Request Body

```
http
POST /oauth2/v0/token HTTP/1.1
Content-Type: application/x-www-form-urlencoded; charset=utf-8
Host: us.api.concursolutions.com
Connection: close
Content-Length: 127

client_id=your-client_id&client_secret=your-client_secret&grant_type=client_credentials
```

###  JSON example of a successful response

```
json
HTTP/1.1 200 OK
Content-Type: application/json;charset=UTF-8
Date: date-requested
Content-Length: 1626
Connection: Close

{
  "expires_in": "3600",
  "scope": "scopes defined for application",
  "token_type": "Bearer",
  "access_token": "JWT"
}
```


## <a name="otp_grant"></a>One Time Password Grant


The **One-time Password Grant** uses email, phone (text), instant messaging (IM) and similar systems to provide per user access tokens to client applications. This grant type uses the following process:

1. The calling application calls the OAuth2 service specifying the otp grant type along with required parameters.
2. The OAuth2 service generates a one time token and sends it through the messaging mechanism selected by the application.
3. The user retrieves the token and presents it to the application. The means by which the token is presented to the application should be configured in the application.
4. The application presents this one-time token to the OAuth2 service via the token endpoint.


####  Request a one-time token to be sent to the user

Use the `application/x-www-form-urlencoded` content type and character encoding `charset=utf-8` to specify the parameters listed below in the request body.

`POST /oauth2/v0/otp`

###   Parameters

Name | Type | Format | Description
-----|------|--------|------------
`client_id`|`string`|`UUID`|**Required:** The client_id as defined in the Concur application management system
`client_secret`|`string`|`UUID`|**Required:** The client_secret as set by the client owner in the Concur application management system
`channel_handle`|`string`|-|**Required:** The location (email address, phone number) where the one time token should be sent. Currently, only `email address` is valid
`channel_type`|`string`|-|**Required:** The type of messaging system to use. Currently only `email` is valid


The calling application code can also append n-number of unique client defined parameters in the URI for the purpose of connecting the one time token to the application when received by the user. The names of these parameters cannot conflict with the API defined parameters.

The following are reserved words and cannot be used as client application defined parameters:

```
/otp: "client_id" "client_secret" "channel_type" "channel_handle"
```

```
/token: "client_id" "client_secret" "channel_type" "channel_handle" "scope" "grant_type" "otp"
```

If the calling application chooses to send custom parameters, all of the same parameters **must be** included in subsequent API calls to acquire the access token. In other words, the URI signature, modulo the one time token parameter itself and token service specific parameters, **must match** the originating URI signature.

###  Request Body

```
http

POST /oauth2/v0/otp HTTP/1.1
Content-Type: application/x-www-form-urlencoded; charset=utf-8
Host: us.api.concursolutions.com
Connection: close
Content-Length: 437

client_id=your-client_id
&client_secret=your-client_secret
&channel_handle=email adress
&channel_type=valid-email

```

###  JSON example of a successful response

```
http
HTTP/1.1 200 OK
Content-Type: application/json
Content-Length: 22
Date: date-requested
```

```
json
{"message":"otp sent"}
```

###  OTP Response Codes

HTTP Status | Response Code | Error | Description
------------|---------------|-------|-------------
200 | -  | otp sent | one time password sent
400 | 3  | invalid_request | one time password failed to generate; the number of open one time password requests is exceeded
400 | 57 | invalid_request | channel_type was not supplied
400 | 58 | invalid_request | channel_handle was not supplied
400 | 61 | invalid_request | client_id is not known to Concur
400 | 62 | invalid_request | client_id was not supplied
400 | 63 | invalid_request | client_secret was not supplied
400 | 64 | invalid_request | bad credentials for client
403 | 60 | access_denied   | access denied
500 | -  | internal_server_error | an internal server error occured



###   Request an access token

The One-time Password grant requires that all of the parameters, including client application defined parameters to be sent in the request body when requesting an access token. Use the `application/x-www-form-urlencoded` content type and character encoding `charset=utf-8` to specify the parameters listed below in the request body.

`POST oauth2-service/v0/token`

###   Parameters

Name | Type | Format | Description
-----|------|--------|------------
`client_id`|`string`|`UUID`|**Required:** The client_id as defined in the Concur application management system
`client_secret`|`string`|`UUID`|**Required:** The client_secret as set by the client owner in the Concur application management system
`channel_handle`|`string`|-|**Required:** The location (email address, phone number) where the one time token should be sent
`channel_type`|`string`|-|**Required:** The type of messaging system to use. Currently only `email` is valid
`scope`|`string`|-|**Required:** The scope(s) requested by the client for the token
`grant_type`|`string`|-|**Required:** The grant type being used, specifically for this approach: `otp`
`otp`|`string`|-|**Required:** The one-time token provided as a result of the **Send a one time token to the user** method
`product`|`string`|-|_optional_ defaults to Concur Travel & Expense - com.concur.cte

###   Request Body

```
http

POST /oauth2/v0/otp HTTP/1.1
Content-Type: application/x-www-form-urlencoded; charset=utf-8
Host: us.api.concursolutions.com
Connection: close
Content-Length: 437

client_id=your-client_id
&client_secret=your-client_secret
&channel_handle=email adress
&channel_type=valid-email
&scope=app_scope
&grant_type=otp
&otp=one-time-token

```

###  JSON example of a a successful response

```
http
HTTP/1.1 200 OK
Date: date-requested
Content-Length: 1490
Connection: keep-alive
```

```
json
{
	"expires_in": "3600",
	"scope": "scopes-defined",
	"token_type": "Bearer",
	"access_token": "access_token (JWT)",
	"refresh_token": "refresh_token"
}
```
###   Token Response Codes

HTTP Status | Response Code | Error | Description
------------|---------------|-------|-------------
200 | - | - | -
400 | 4 | invalid_request | one time password not found
400 | 5 | invalid_request | fact verification failed
400 | 54 | invalid_scope | requested scope is not a subset of registered scope
400 | 55 | invalid_request | profile-service does not know about this email address
400 | 56 | invalid_request | one time password was not supplied
400 | 57 | invalid_request | channel_type missing
400 | 58 | invalid_request | channel_handle missing
400 | 62 | invalid_request | client_id was not supplied
400 | 63 | invalid_request | client_secret was not supplied
400 | 64 | invalid_request | bad credentials for client
400 | 65 | invalid_request | grant_type was not supplied
403 | 59 | access_denied | client is administratively disabled
403 | 60 | access_denied | access to resources is denied
500 | - | internal_server_error | an internal server error occurred
