---
title: Authentication
layout: reference
---


# Authentication

### Special Note (Please Read First)
If you are an existing partner with an existing app, please read both the [Migration to Oauth2 Tokens](/api-reference/authentication/migrationguide.html) and [Getting Started](/api-reference/authentication/getting-started.html) documentation first. If you have any questions, please contact your Partner Enablement team representative before proceeding.

* [Overview]()
* [Tokens](#access_token)
  * [Obtaining a token](#obtain_token)
  * [Refreshing a token](#refresh_token)
  * [Revoking a token](#revoke_token)
  * [Token Management](#manage_token)
  * [Base URIs & Geolocation](#base_uri)
  * [ID Token](#id_token)
* Types of grants
  * [Authorization grant](#auth_grant)
  * [Password grant](#password_grant)
  * [Client Credentials grant](#client_credentials)
  * [One time password grant](#otp_grant)
* [Response Codes](#response_codes)

**Note:** The old authentication documentation can be found [here](/api-reference-deprecated/old-auth/old-auth.html)


## <a name="access_token"></a>Access Tokens


The Oauth2 service generates access tokens for authenticated users, applications or companies. The token returned in the Oauth2 response can be used to access protected resources on Concur's services.

The Oauth2 response can, depending on grant type contain these values

Name | Type | Format | Description
-----|------|--------|------------
`expires_in`|`string`|-|The lifetime in seconds of the access token
`scope`|`string`|-|The scope of the access token as granted to the client application
`token_type`|`string`|-| The type of token returned. Value will be `Bearer`
`access_token`|`string`|-|Token used to access pprotected resources of Concur's services.
`refresh_token`|`string`|-|Refresh token required to request a new access token for a given user.
`geolocation`|`string`|-|The base URL for where the user profile lives. See [base URI](#base_uri) for usage.
`id_token`|`string`|-|The OCID Token in the JSON Web Token (JWT) format that describes the user or company

**Token Response**

```http
HTTP/1.1 200 OK
Content-Type: application/json;charset=UTF-8
Date: date-requested
Content-Length: 3397
Connection: Close
```

```json
{
  "expires_in": "3600",
  "scope": "app-scopes",
  "token_type": "Bearer",
  "access_token": "access_token",
  "refresh_token": "refresh_token",
  "id_token": "ocid_token",
  "geolocation": "https://us.api.concursolutions.com"
}
```


## <a name="obtain_token"></a>Obtaining a token

You can obtain a token for three different types of principals in the Concur universe.

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

```
POST /oauth2/v0/token
```

**Parameters**

Name | Type | Format | Description
-----|------| ------ | -----------
`client_id`|`string` | `UUID` | **Required** The client applications client_id supplied by App Management
`client_secret`|`string` | `UUID` | **Required** The client applications client_secret supplied by App Management
`refresh_token`|`string` | `UUID` | **Required** An existing valid refresh token to be used to request a new access token
`scope`|`string` | | The client applications list of scopes
`grant_type`|`string` | | **Required** The grant type instructs the Oauth2 service how to process the request. For refresh token, the value must be `refresh_token`

**Request**

```http
POST /oauth2/v0/token HTTP/1.1
Content-Type: application/x-www-form-urlencoded; charset=utf-8
Host: us.api.concursolutions.com
Connection: close
Content-Length: 437

POST BODY
client_id=your-client_id
&client_secret=your-client_secret
&grant_type=refresh_token
&refresh_token=valid-refresh_token
&scope=app-scope
```

**Response**

```http
HTTP/1.1 200 OK
Content-Type: application/json;charset=UTF-8
Date: date-requested
Content-Length: 3397
Connection: Close
```

```json
{
  "expires_in": "3600",
  "scope": "app-scopes",
  "token_type": "Bearer",
  "access_token": "access_token",
  "refresh_token": "refresh_token",
  "id_token": "ocid_token",
  "geolocation": "https://us.api.concursolutions.com"
}
```

## <a name="revoke_token"></a>Revoking a token

All refresh_tokens associated to a user for an application can be revoked by calling the `https://us.api.concursolutions.com/appmgmt/v0/connections` endpoint with a `DELETE` action. You have to provide the User's `accessToken` in the Authorization Header as `Authorization: Bearer <access_token>`.

```
DELETE https://us.api.concursolutions.com/appmgmt/v0/connections
```


**Request**

```http
DELETE /appmgmt/v0/connections HTTP/1.1
Content-Type: application/json
Authorization: Bearer <access_token>
```

**Sample cURL:**

```http

curl -X DELETE -H "Authorization: Bearer <accessToken>" "https://us.api.concursolutions.com/appmgmt/v0/connections"
```

**Response**

```http
HTTP/1.1 200 OK
Content-Type: application/json
Date: date-requested
Content-Length: 9
Connection: Close

"deleted"
```


## <a name="manage_token"></a>Managing tokens

Refresh Tokens are UUID4 identifiers that allow your application to obtain a fresh `accessToken` on behalf of a user to access Concur's APIs.

```
e013335d-b4ce-4c43-a7e4-b67abc1adcb0
```

It is highly recommended that you store Refresh Tokens together with your user's authorization metadata in your application every time you obtain a new `refreshToken` as they might change depending on different scenarios.

FOR APP CENTER AND SUPPLIER PARTNERS supporting all geolocations, storing the authorization metadata, including the geolocation are REQUIRED.

## <a name="base_uri"></a>Base URIs

When making API calls, the appropriate base URI should be used. There are three different scenarios:
1. Obtaining a token for a user
2. Refreshing a token 
3. Calling other APIs 

The Base URI for obtaining a token will leverage your application's geolocation.  The Base URI for refreshing tokens and all other API calls will leverage the token's geolocation.

### <a name="base_uri_obtain_token"></a>Base URIs for Obtaining a Token 
When your application is created, you will be provided with a client ID, secret and geolocation. When obtaining a token, your application should use the base URI for the geolocation in which your application exists. 

There are two endpoints for each geolocation - one is the default (used for server-side calls) and the other should be used for client-side calls.

For example:
For geolocation of https://us.api.concursolutions.com, the following endpoints are available:

Environment | URI | Description
-----|------|------
US Production |`https://us.api.concursolutions.com/oauth2/v0` | Default for all API calls
WWW-US Production | `https://www-us.api.concursolutions.com/oauth2/v0` | Used by browsers during Authorization Code grant

> **When obtaining the token, the token's geolocation will be included in the response. The token's geolocation should be stored along with the token. The Developer's app will then be able to make subsequent calls using the correct end points per GEO location.**

### Base URIs for All Other Calls
When refreshing a token or when calling any other APIs, the token's geolocation should be used as the base URI. 

**Note:** Client-side calls should use the www- variant of the base URI.

For example: 
When obtaining a token, if the response was the below:

```http
HTTP/1.1 200 OK
Content-Type: application/json;charset=UTF-8
Date: date-requested
Content-Length: 3397
Connection: Close
```

```json
{
  "expires_in": "3600",
  "scope": "app-scopes",
  "token_type": "Bearer",
  "access_token": "access_token",
  "refresh_token": "refresh_token",
  "id_token": "ocid_token",
  "geolocation": "https://us.api.concursolutions.com"
}
```

When then calling the receipts API to post a receipt, your request should be made to https://us.api.concursolutions.com (if server side) or https://www-us.api.concursolutions.com (for clients).


## <a name="id_token"></a>ID Token

Authentication service will return an [OPENID](http://openid.net) compatible [ID token](http://openid.net/specs/openid-connect-core-1_0.html#IDToken) with every token request. This `id_token` is primarily used to describe information about a user or a company. You can obtain the userId from this token.

**Sample id_token:**

```json
{
  "aud": "e010e25d-b4ce-4ce3-a7e4-b670cb1adcb0",
  "concur.profile": "https://us.api.concursolutions.com/profile/v1/principals/76459ad3-f77b-4d98-a21a-55333c9179f0",
  "concur.version": 2,
  "concur.type": "user",
  "sub": "76459ad3-f77b-4d98-a21a-55333c9179f0",
  "iss": "https://us.api.concursolutions.com",
  "exp": 1485485529,
  "nbf": 1485481929,
  "at_hash": "351515a6482f4ee1",
  "iat": 1485481929
}
```

### Verifying an id_token
The Authentication service exposes [JWKs](https://tools.ietf.org/html/rfc7517) that can be used to validate the id_token in the form of a JWT. Validating a JWT is described in detail in [RFC 7519 - sec 7.2](https://tools.ietf.org/html/rfc7519#section-7.2)

This is the link to Concur's JSON Web Key for Oauth2. [https://www-us.api.concursolutions.com/oauth2/v0/jwks](https://www-us.api.concursolutions.com/oauth2/v0/jwks)

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
  `response_type`|`string` | | `code`
  `state`|`string` | |

With this grant, the user has two authentication options:
1. Username and password
2. One-time link using a verified email address

With both options, once the user is successfully authenticated and the user authorizes your application, the user will be redirected to the redirect_URI specified in the initial /authorize call with a temporary token appended.

`<redirect_uri>?cc=<token>`

*If the user is not successfully authenticated or does not authorize the scopes for your application, an error code and description will be appended to the redirect URI. Please refer to the [Response Codes](#response_codes) section for more information.*

Your application must then exchange the temporary token for a long-lived token using the below.

`POST /oauth2/v0/token`

Name | Type | Format | Description
-----|------| ------ | -----------
`client_id`|`string` | `UUID` | Applications client_id supplied by App Management
`client_secret`|`string` | `UUID` | Applications client_secret supplied by App Management
`redirect_uri`|`string` | | The redirect_uri that is registered for the application
`code`|`string`| `UUID`  | The authorization code provided by Auth
`grant_type`|`string` | | `authorization_code`


**NOTE**

Because of certificate issues with browser requests through Authorization Grant, callers should use the https://www-us.api.concursolutions.com base URI instead.

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

```http
POST /oauth2/v0/token HTTP/1.1
Content-Type: application/x-www-form-urlencoded; charset=utf-8
Host: us.api.concursolutions.com
Connection: close
Content-Length: 175

POST BODY
client_id=your-client_id
&client_secret=your-client_secret
&grant_type=password
&username=username
&password=password
```

**Response**

```http
HTTP/1.1 200 OK
Content-Type: application/json;charset=UTF-8
Date: date-requested
Content-Length: 3397
Connection: Close
```

```json
{
  "expires_in": "3600",
  "scope": "app-scopes",
  "token_type": "Bearer",
  "access_token": "access_token",
  "refresh_token": "refresh_token",
  "id_token": "ocid_token",
  "geolocation": "https://us.api.concursolutions.com"
}
```


example bad login

```json
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

```http
POST /oauth2/v0/token HTTP/1.1
Content-Type: application/x-www-form-urlencoded; charset=utf-8
Host: us.api.concursolutions.com
Connection: close
Content-Length: 127

POST BODY
client_id=your-client_id
&client_secret=your-client_secret
&grant_type=client_credentials
```

**Response**

```http
HTTP/1.1 200 OK
Content-Type: application/json;charset=UTF-8
Date: date-requested
Content-Length: 1626
Connection: Close
```

```json
{
  "expires_in": "3600",
  "scope": "app-scopes",
  "token_type": "Bearer",
  "access_token": "access_token",
  "geolocation": "https://us.api.concursolutions.com"
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
`name`|`string`|-|*Optional* The name of the user that appears in the email.
`company`|`string`|-|*Optional* The company or application name that appears in the email.
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

```http
POST /oauth2/v0/otp HTTP/1.1
Content-Type: application/x-www-form-urlencoded; charset=utf-8
Accept: application/json
Host: us.api.concursolutions.com
Connection: close
Content-Length: 437

POST BODY
client_id=your-client_id
&client_secret=your-client_secret
&channel_handle=email adress
&channel_type=valid-email
&link=https://example.com/callback
```

**Response**

```http
HTTP/1.1 200 OK
Content-Type: application/json
Content-Length: 22
Date: date-requested
```

```json
{
  "message": "otp sent"
}
```


**Request an access token**

The One-time Password grant requires that all of the parameters, including client application defined parameters to be sent in the request body when requesting an access token. Use the `application/x-www-form-urlencoded` content type and character encoding `charset=utf-8` to specify the parameters listed below in the request body.

`POST oauth2/v0/token`

**Parameters**

Name | Type | Format | Description
-----|------|--------|------------
`client_id`|`string`|`UUID`|**Required** The client_id as defined in the Concur application management system.
`client_secret`|`string`|`UUID`|**Required** The client_secret as set by the client owner in the Concur application management system.
`channel_handle`|`string`|-|**Required** The location (email address, phone number) where the one time token should be sent.
`channel_type`|`string`|-|**Required** The type of messaging system to use. Currently only `email` is valid
`scope`|`string`|-| The scope(s) requested by the client for the token.
`grant_type`|`string`|-|**Required** The grant type being used, specifically for this approach: `otp`.
`otp`|`string`|-|**Required** The one-time token provided as a result of the **Send a one time token to the user** method.


**Request**

```http
POST /oauth2/v0/token HTTP/1.1
Content-Type: application/x-www-form-urlencoded; charset=utf-8
Host: us.api.concursolutions.com
Connection: close
Content-Length: 437

POST BODY
client_id=your-client_id
&client_secret=your-client_secret
&channel_handle=email adress
&channel_type=valid-email
&scope=app_scope
&grant_type=otp
&otp=one-time-token
```

**Response**

```http
HTTP/1.1 200 OK
Date: date-requested
Content-Length: 1490
Connection: keep-alive
```

```json
{
  "expires_in": "3600",
  "scope": "app-scopes",
  "token_type": "Bearer",
  "access_token": "access_token",
  "refresh_token": "refresh_token",
  "id_token": "ocid_token",
  "geolocation": "https://us.api.concursolutions.com"
}
```

## <a name="response_codes"></a>Response Codes

##### HTTP Status returned by oauth2

| HTTP Status | Description                                      |
|-------------|--------------------------------------------------|
|   200       | OK - Successful call, response is in body.       |
|   400       | Bad Request `(error, error_description, code)`   |
|   401       | Unauthorized `(error, error_description, code)`  |
|   403       | Forbidden `(error, error_description, code)`     |
|   404       | Not Found `(error, error_description, code)`     |
|   500       | Server Error, error message is in body.          |
|   503       | Server Timed Out, error message is in body.      |


4xx class errors have a JSON response with the following fields

```json
{
  "code": <number>,
  "error": <error>,
  "error_description": <error_description>,
  "geolocation": <geolocation url where user lives>
}
```
##### /authorize

If the authorization or authentication are unsuccessful, your application will receive an error code and description at the redirect_uri provided. 

```Your_Redirect_Uri?
 error_code=<>
 &error_description=<>
 ```
In all cases, the friendly error description should be displayed to the user.

##### /token


| Code | Error             | Description                                            |
|------|-------------------|--------------------------------------------------------|
| 5    | `invalid_grant`   | Incorrect credentials. Please Retry                    |
| 10   | `invalid_grant`   | Account is disabled. Please contact support            |
| 11   | `invalid_grant`   | Account is disabled. Please contact support            |
| 12   | `invalid_grant`   | Logon Denied. Please contact support                   |
| 13   | `invalid_grant`   | Logon Denied. Please contact support                   |
| 14   | `invalid_grant`   | Account Locked. Please contact support                 |
| 16   | `invalid_request` | user lives elsewhere                                   |
| 19   | `invalid_grant`   | Incorrect credentials. Please Retry                    |
| 51   | `invalid_request` | username was not supplied                              |
| 52   | `invalid_request` | password was not supplied                              |
| 53   | `invalid_client`  | company is not enabled for this client                 |
| 54   | `invalid_scope`   | requested scope exceeds granted scope                  |
| 55   | `invalid_request` | we don't know this email                               |
| 56   | `invalid_request` | `otp` was not supplied                                 |
| 57   | `invalid_request` | `channel_type` missing                                 |
| 58   | `invalid_request` | `channel_handle` missing                               |
| 59   | `access_denied`   | client disabled                                        |
| 60   | `invalid_grant`   | these are not the grants you are looking for           |
| 61   | `invalid_client`  | client not found                                       |
| 62   | `invalid_request` | `client_id` was not supplied                           |
| 63   | `invalid_request` | `client_secret` was not supplied                       |
| 64   | `invalid_client`  | Incorrect credentials. Please Retry                    |
| 65   | `invalid_request` | `grant_type` was not supplied                          |
| 80   | `invalid_request` | invalid channel type                                   |
| 81   | `invalid_request` | bad channel handle                                     |
| 83   | `invalid_request` | otp not found                                          |
| 84   | `invalid_request` | fact verification failed                               |
| 85   | `invalid_request` | otp verification failed                                |
| 100  | `invalid_request` | backend does not know about this username              |
| 101  | `invalid_request` | code was not supplied                                  |
| 102  | `invalid_request` | `redirect_uri` was not supplied                        |
| 103  | `invalid_request` | code is bad or expired                                 |
| 104  | `invalid_grant`   | `redirect_uri` does not match the previous grant       |
| 105  | `invalid_grant`   | this grant was not issued to you!                      |
| 106  | `invalid_request` | `refresh_token` was not supplied                       |
| 107  | `invalid_request` | refresh disallowed for app                             |
| 108  | `invalid_grant`   | bad or expired refresh token                           |
| 109  | `invalid_request` | `loginid` was not supplied                             |
| 115  | `invalid_request` | unauthenticated client will not be issued token!       |
| 117  | `invalid_request` | nonce is mandatory for this `response_type`            |
| 118  | `invalid_request` | display is invalid                                     |
| 119  | `invalid_request` | prompt is invalid                                      |
| 119  | `invalid_request` | prompt must be set to consent for `offline_access`     |
| 120  | `invalid_request` | `credtype` is invalid     |
| 121  | `invalid_request` | `login_type` is invalid     |
| 122  | `invalid_request` | proxies supplied are invalid     |
| 123  | `invalid_request` | principal is disabled     |

##### /otp


| Code | Error             | Description                                            |
|------|-------------------|--------------------------------------------------------|
| 16   | `invalid_request` | user lives elsewhere                                   |
| 57   | `invalid_request` | `channel_type` was not supplied                        |
| 58   | `invalid_request` | `channel_handle` was not supplied                      |
| 60   | `invalid_grant`   | these are not the grants you are looking for           |
| 61   | `invalid_client`  | `client_id` is not known to us                         |
| 62   | `invalid_request` | `client_id` was not supplied                           |
| 63   | `invalid_request` | `client_secret` was not supplied                       |
| 80   | `invalid_request` | invalid channel type                                   |
| 81   | `invalid_request` | bad channel handle                                     |
| 82   | `invalid_request` | the number of open otp requests has been exceeded      |
