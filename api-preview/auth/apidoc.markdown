---
title: Authentication API 
layout: reference
---


# Authentication API (Preview)

* [Overview]()
* [Tokens](#access_token)
  * [Obtaining a token](#obtain_token)
  * [Refreshing a token](#refresh_token)
  * [Token Management](#manage_token)
  * [Base URIs](#base_uri)
* Types of grants
  * [Authorization grant](#auth_grant)
  * [Password grant](#password_grant)
  * [Client Credentials grant](#client_credentials)
  * [One time password grant](#otp_grant)


## <a name="access_token"></a>Access Tokens


The Oauth2 service generates access tokens for authenticated users, applications or companies. The tokens are created using the JSON Web Token (JWT) format.
The token returned in the Oauth2 response can be used to access protected resources on Concur's services.

The Oauth2 response can, depending on grant type contain these values

Name | Type | Format | Description
-----|------|--------|------------
`expires_in`|`string`|-|The lifetime in seconds of the access token
`scope`|`string`|-|The scope of the access token as granted to the client application
`token_type`|`string`|-| The type of token returned. Value will be `Bearer`
`access_token`|`string`|-|JSON Web Token (JWT) used to access pprotected resources of Concur's services.
`refresh_token`|`string`|-|Refresh token required to request a new access token for a given user.

**Token Response**

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

## <a name="obtain_token"></a>Obtaining a token

You can obtain a token for a `principal`. There are currently three principals in the Concur universe. 

* User
* Application
* Company

**Token Lifetime**

An `accessToken` has a one hour lifetime.

In order to obtain a token, the client application needs to call the Oauth2 endpoint using various `grants` depending on the authentication scenarios required. The full list of supported scenarios is provided below:

  * [Authorization grant](#auth_grant)
  * [Password grant](#password_grant)
  * [Client Credentials grant](#client_credentials)
  * [One time password grant](#otp_grant)

## <a name="refresh_token"></a>Refreshing a token


The refresh grant is used to refresh an access_token that has expired. This grant can be used anytime a refresh_token is returned in the response of another grant request. No user interaction is required.

**Token Lifetime**

A refresh token has a **six month** lifetime. if the refresh token expires, the client application must reinitiate the authorization process. When a refresh token is used to request a new access token, both a new access token as well as a new refresh token are returned in the response.

It is recommended that the client application use the refresh grant to request a new access token as the initial step of accessing protected resources of Concur's services.

**Refreshing the token**

To request a new access token using a valid refresh token, use the Oauth2 /token endpoint. Use the `application/x-www-form-urlencoded` content type and character encoding `charset=utf-8` to specify the parameters listed below in the request body.

`POST /oauth2/v0/token`

**Parameters**

Name | Type | Format | Description
-----|------| ------ | -----------
`client_id`|`string` | `UUID` | **Required** The client applications client_id supplied by App Management
`client_secret`|`string` | `UUID` | **Required** The client applications client_secret supplied by App Management
`refresh_token`|`string` | `UUID` | **Required** An existing valid refresh token to be used to request a new access token
`scope`|`string` | | The client applications list of scopes
`grant_type`|`string` | | **Required** The grant type instructs the Oauth2 service how to process the request. For refresh token, the value must be `refresh`

**Request**

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

**Response**

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
  "scope": "app-scope",
  "token_type": "Bearer",
  "access_token": "new-access_token",
  "refresh_token": "new-refresh_token"
}

```

## <a name="manage_token"></a>Managing tokens

Refresh Tokens are 28 character strings that allow your application to obtain a fresh `accessToken` for access to Concur's APIs. 

```
1_052f3d45439c5b4c6a3cc3d037
```

It is highly recommended that you store Refresh Tokens together with your user's authorization metadata in your application every time you obtain a new `refreshToken` as they might change depending on different scenarios.

## <a name="base_uri"></a>Base URIs
Environment | URI 
-----|------
US Production |`https://us.api.concursolutions.com/oauth2/v0`
EU Production |`https://emea.api.concursolutions.com/oauth2/v0`


## <a name="auth_grant"></a>Authorization grant

The authorization grant is the regular 3-legged oauth2 grant and is defined in detail in [RFC6749 sec-4.1](https://tools.ietf.org/html/rfc6749#section-4.1). This grant requires the user to explicitly authenticate themselves and authorise the application initiating the grant. 

The users *must be* able to authenticate themselves via a Concur username & password. Users will be challenged to login by an Oauth2 HTML page.

**Who should use it**
* 3rd party "partner" websites - or - 
* non-Concur Applications - & - 
* Applications that need explicit user authentication & authorization - & -
* Applications that can securely store a code, access_token & refresh_token

**Grant details**

`GET /oauth2/v0/authorize`

Name | Type | Format | Description
-----|------| ------ | -----------
  `client_id`|`string` | `UUID` | Applications client_id supplied by App Management
  `redirect_uri`|`string` | | The redirect URI for your application to continue with the Oauth2 flow
  `scope`|`string` | | List of scopes that application is asking for
  `response_type`|`string` | | code
  `state`|`string` | | 


`POST /oauth2/v0/verify_creds`

Name | Type | Format | Description
-----|------| ------ | -----------
`loginid` | `string` | | LoginId of the user
`password` | `string` | | User's password

`POST /oauth2/v0/authorize_client`

Name | Type | Format | Description
-----|------| ------ | -----------
`allow` | `string` | | 

`POST /oauth2/v0/token`

Name | Type | Format | Description
-----|------| ------ | -----------
`client_id`|`string` | `UUID` | Applications client_id supplied by App Management
`client_secret`|`string` | `UUID` | Applications client_secret supplied by App Management
`redirect_uri`|`string` | `UUID` | `code`|`string` | | 
`grant_type`|`string` | | `authorization_code` 


## <a name="password_grant"></a>Password grant


The Password grant can be used when there is a trust relationship between the user and the application. The application either already has the user's credentials or can obtain the user's credentials by directly interacting with the user.

**Parameters**

Name | Type | Format | Description
-----|------| ------ | --------------
  `client_id`|`string` | `UUID` | Applications client_id supplied by App Management
  `client_secret`|`string` | `UUID` | Applications client_secret supplied by App Management
  `grant_type`|`string` | | Specify which grant type you expect the oauth2 service to process. for password grant, the value is `password`
  `username`|`string` | | specify the username or userId
  `password`|`string` | | specify the user's password
  `credtype`|`string` | | The credtype signifies to oauth2 which credential set is being submitted in the request. There are two supported values: `authtoken` and `password`. if omitted, oauth2 will assume the type is `password`.

**Request**

```
http
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

**Response**

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


**Response Codes**

| Http Code | Code | Error | Description                                     |
|-----------|------|------ | -------------------|
|       200 |    - | | JWT in response                                 |
|       400 |    2 | | user not found                                  |
|       400 |    5 | | password mismatch                               |
|       400 |    9 | | service account cannot logon                    |
|       400 |   10 | | user account disabled                           |
|       400 |   11 | | company account disabled                        |
|       400 |   12 | | password has been force expired                 |
|       400 |   13 | | password expired                                |
|       400 |   14 | | user is locked out                              |
|       400 |   16 | | User lives in another pod                       |
|       400 |   51 | | username is not supplied                        |
|       400 |   52 | | password is not supplied                        |
|       400 |   53 | | company is not enabled for this oauth2 client   |
|       400 |   54 | | required scope is not a subset of reg. scope    |
|       500 |    - | | internal_server_error                           |

example bad login

```
json
{
  "error": "invalid_grant",
  "error_description": "Incorrect Credentials. Please Retry",
  "code": 5
}
```

## <a name="client_credentials"></a>Client Credentials grant

Use the `application/x-www-form-urlencoded` content type and character encoding `charset=utf-8` to specify the parameters listed below in the request body.

`POST /oauth2/v0/token`

**Parameters**

Name | Type | Format | Description
-----|------| ------ | -----------
`client_id`|`string` | `UUID` | **Required** Applications client_id supplied by App Management
`client_secret`|`string` | `UUID` | **Required** Applications client_secret supplied by App Management
`grant_type`|`string` | | **Required** Specify which grant type you expect the oauth2 service to process. for client_credentials grant, the value is `client_credentials`

**Request**

```
http
POST /oauth2/v0/token HTTP/1.1
Content-Type: application/x-www-form-urlencoded; charset=utf-8
Host: us.api.concursolutions.com
Connection: close
Content-Length: 127

client_id=your-client_id&client_secret=your-client_secret&grant_type=client_credentials
```

**Response**

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


## <a name="otp_grant"></a>One Time Password grant


The One-time Password grant type leverages email, phone (text messaging), instant messaging and similar systems to provide per user access tokens to client applications. This grant type requires the following steps:

1. The calling application calls the OAuth2 service specifying the otp grant type along with required parameters.
2. The OAuth2 service generates a one time token which it sends through the messaging mechanism chosen by the application.
3. The user retrieves the token and presents it to the application. The means of having this presented to the application is the responsibility of the application.
4. The application presents this one-time token to the OAuth2 service via the token endpoint.


**Request a one-time token to be sent to the user**

Use the `application/x-www-form-urlencoded` content type and character encoding `charset=utf-8` to specify the parameters listed below in the request body.

`POST /oauth2/v0/otp`

**Parameters**

Name | Type | Format | Description
-----|------|--------|------------
`client_id`|`string`|`UUID`|**Required** The client_id as defined in the Concur application management system.
`client_secret`|`string`|`UUID`|**Required** The client_secret as set by the client owner in the Concur application management system.
`channel_handle`|`string`|-|**Required** The location (email address, phone number) where the one time token should be sent. Currently, only `email address` is valid.
`channel_type`|`string`|-|**Required** The type of messaging system to use. Currently only `email` is valid
`link`|`string`|-|*Optional* The callback URL that appears in the email for users to click to complete the auth flow.


The calling application code can also append n-number of unique client defined parameters in the URI for the purpose of connecting the one time token to the application when received by the user. The names of these parameters cannot conflict with the API defined parameters.

The following are reserved words and cannot be used as client application defined parameters:

```
/otp: "client_id" "client_secret" "channel_type" "channel_handle"
```

```
/token: "client_id" "client_secret" "channel_type" "channel_handle" "scope" "grant_type" "otp"
```

If the calling application chooses to send custom parameters, all of these exact same parameters *must be* included in subsequent API calls to acquire the access token. In other words, the URI signature, modulo the one time token parameter itself and token service specific parameters, *must match* the originating URI signature.

**Request**

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
&link=http://foo.bar.com/callback

```

**Response**

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

**OTP Response Codes**

HTTP Status | Response Code | Error | Description
------------|---------------|-------|-------------
200 | -  | otp sent |
400 | 3  | invalid_request | otp generate failed; the number of open otp requests has been exceeded
400 | 57 | invalid_request | channel_type was not supplied
400 | 58 | invalid_request | channel_handle was not supplied
400 | 61 | invalid_request | client_id is not known to us
400 | 62 | invalid_request | client_id was not supplied
400 | 63 | invalid_request | client_secret was not supplied
400 | 64 | invalid_request | bad credentials for client
403 | 60 | access_denied   |
500 | -  | internal_server_error |



**Request an access token**

The One-time Password grant requires that all of the parameters, including client application defined parameters to be sent in the request body when requesting an access token. Use the `application/x-www-form-urlencoded` content type and character encoding `charset=utf-8` to specify the parameters listed below in the request body.

`POST oauth2-service/v0/token`

**Parameters**

Name | Type | Format | Description
-----|------|--------|------------
`client_id`|`string`|`UUID`|**Required** The client_id as defined in the Concur application management system.
`client_secret`|`string`|`UUID`|**Required** The client_secret as set by the client owner in the Concur application management system.
`channel_handle`|`string`|-|**Required** The location (email address, phone number) where the one time token should be sent.
`channel_type`|`string`|-|**Required** The type of messaging system to use. Currently only `email` is valid
`scope`|`string`|-|**Required** The scope(s) requested by the client for the token.
`grant_type`|`string`|-|**Required** The grant type being used, specifically for this approach: `otp`.
`otp`|`string`|-|**Required** The one-time token provided as a result of the **Send a one time token to the user** method.
`product`|`string`|-|_optional_ defaults to Concur Travel & Expense - com.concur.cte

**Request**

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

**Response**

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
**Token Response Codes**

HTTP Status | Response Code | Error | Description
------------|---------------|-------|-------------
200 | - |  |
400 | 4 | invalid_request | otp not found
400 | 5 | invalid_request | fact verification failed
400 | 54 | invalid_scope | requested scope is not a subset of registered scope
400 | 55 | invalid_request | profile-service does not know about this email address
400 | 56 | invalid_request | otp was not supplied
400 | 57 | invalid_request | channel_type missing
400 | 58 | invalid_request | channel_handle missing
400 | 62 | invalid_request | client_id was not supplied
400 | 63 | invalid_request | client_secret was not supplied
400 | 64 | invalid_request | bad credentials for client
400 | 65 | invalid_request | grant_type was not supplied
403 | 59 | access_denied | client is administratively disabled
403 | 60 | access_denied |
500 | - | internal_server_error |

