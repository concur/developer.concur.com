---
title: Migrating old tokens to new Oauth2 Bearer Tokens
layout: reference
---

* [Base URIs](#base_uris)
* [Exchanging a Token](#exchangetoken)
* [Response Codes](#response_codes)

Existing applications that use the [Pre-2017 Authorization (Deprecated)](/api-reference/authentication/authorization-pre-2017.html) framework need to move to support the new Oauth2 Bearer Tokens. Applications will need to migrate their existing users who already have connected to it to obtain new Oauth2 tokens without requiring users to reauthorize. This can be done by exchanging an old access token for a new refresh token.

## <a name="base_uris"></a>Base URIs

When making API calls, the appropriate base URI for the user's geolocation should be used. See the [Base URIs](/platform/base-uris.html) page for the full list.

## <a name="exchangetoken"></a>Exchanging a Token

In order to support new Oauth2, applications need to exchange old access token for new `accessToken` and `refreshToken` pair. Once obtained, applications should store these `refreshTokens` as part of users authorization data.

The new Oauth2 `accessToken` has a one hour lifetime. Once expired, applications would need to call Oauth2's `/v0/token` endpoint using a `refresh_grant`, passing in the user's `refreshtoken` to obtain a fresh `accessToken`.

This is significantly different from how the deprecated /net2/Oauth2's method of handling access tokens. Partner's would have to store the new Oauth2 `refreshToken` instead of the old access token. Before making a call to any of Concur's new v4 APIs, it is advisable to request for a new `accessToken` before making the API call.

**Step 1: Obtain Application Token**
Clients can exchange OLD tokens for NEW Oauth2 tokens by calling the `exchangeRefreshToken/me` endpoint. In order to call this endpoint, you would first need to obtain an Application Token by calling the `/v0/token` endpoint with the [client_credentials](https://developer.concur.com/api-reference/authentication/apidoc.html#client_credentials) grant.

The endpoint also supports a parameter called "returnType=companyToken"  This parameter allows a partner who already has what is known as a "WSAdmin" token for a client, to exchange that token for a Company level refresh token.

**Step 2: Call exchangeRefreshToken**

`POST /appmgmt/v0/legacyApps/{OLDConsumerKey}/exchangeRefreshToken/me`

If you are exchanging a WSAdmin token for a new Company level refresh token:

`POST /appmgmt/v0/legacyApps/{OLDConsumerKey}/exchangeRefreshToken/me?returnType=companyToken`

**Request Header**

Name | Type | Format | Description
-----|------| ------ | -----------
`Authorization`|`string` | `Bearer <accessToken>` | **Required** The NEW client_credentials accessToken.

**Request Body**

Name | Type | Format | Description
-----|------| ------ | -----------
`token`|`string` |  | **Required** The OLD refreshToken
`secret`|`string` |  | **Required** The NEW application client_secret

Sample Curl:

```shell
curl -H 'Authorization: Bearer <accessToken>' -d '{"token": "1_oaCof444CaiNXg1FFG$Perr19qIo", "secret": "12345"}' -X POST https://us.api.concursolutions.com/appmgmt/v0/legacyApps/Bwu0mvTHtKYAnBb3Pgu9AW/exchangeRefreshToken/me
```

successful call, responds with

```json
200 OK
{
  "token": "8c844478-745c-4c45-adf7-1e2777a50dbf",
  "created": 1479407196809,
  "expired": 1494959196809,
  "scopes": [
    "EXPRPT",
    "LIST",
    "BANK",
    "CCARD"
  ],
  "context": "{\"userid\":\"7934467f-dcd1-4631-ba34-3ebd28343e8f\",\"cid\":\"3a55c75e-ac1e-4515-845c-0a4978452828\",\"ptype\":\"user\",\"userURI\":\"https://us.api.concursolutions.com/profile-service/v1/users/7934467f-dcd1-4631-ba34-3ebd28343e8f\",\"scope\":\"EXPRPT LIST BANK CCARD\"}"
}
```

Sample Curl for WSAdmin token exchange for Company level refreh token:

```shell
curl -H 'Authorization: Bearer <accessToken>' -d '{"token": "1_oaCof444CaiNXg1FFG$Perr19qIo", "secret": "12345"}' -X POST https://us.api.concursolutions.com/appmgmt/v0/legacyApps/Bwu0mvTHtKYAnBb3Pgu9AW/exchangeRefreshToken/me?returnType=companyToken
```

successful call, responds with

```json
200 OK
{
  "token": "8c844478-745c-4c45-adf7-1e2777a50dbf",
  "created": 1479407196809,
  "expired": 1494959196809,
  "scopes": [
    "EXPRPT",
    "LIST",
    "BANK",
    "CCARD"
  ],
  "context": "{\"userid\":\"7934467f-dcd1-4631-ba34-3ebd28343e8f\",\"cid\":\"3a55c75e-ac1e-4515-845c-0a4978452828\",\"ptype\":\"company\",\"userURI\":\"https://us.api.concursolutions.com/profile-service/v1/users/7934467f-dcd1-4631-ba34-3ebd28343e8f\",\"scope\":\"EXPRPT LIST BANK CCARD\"}"
}
```

**Step 3: Obtain New Access Token**

Once you have the NEW `refreshToken` from the response (`8c844478-745c-4c45-adf7-1e2777a50dbf`) you can then proceed to call `/v0/token` using the refresh grant to obtain a NEW Oauth2 `accessToken`.

Sample Curl:

```shell
curl -X POST 'https://us.api.concursolutions.com/oauth2/v0/token' -d 'client_id=3a55c75e-ac1e-4515-845c-0a4978452828&client_secret=12345&grant_type=refresh_token&refresh_token=8c844478-745c-4c45-adf7-1e2777a50dbf'
```

successful call, responds with:

```json
200 OK
{
  "expires_in": 3600,
  "scope": "EXPRPT LIST BANK CCARD",
  "token_type": "Bearer",
  "access_token": "eyJ0...demo...eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImtpZCI6IjE0NTU2MTQzNDYifQ.eyJjb25jdXIuc2NvcGVzIjpbIkVYUFJQVCIsIkxJU1QiLCJCQU5LIiwiQ0NBUkQiXSwiYXVkIjoiKiIsImNvbmN1ci5wcm9maWxlIjoiaHR0cHM6Ly91cy1ycWEzLmFwaS5jb25jdXJzb2x1dGlvbnMuY29tL3Byb2ZpbGUvdjEvcHJpY2lwYWxzLzc5NmI0NjdmLWRjZDEtNDYzMS1iYTg1LTNlYmQyOGIzNmU4ZiIsImNvbmN1ci52ZXJzaW9uIjoyLCJjb25jdXIudHlwZSI6InVzZXIiLCJjb25jdXIuYXBwIjoiaHR0cHM6Ly91cy1ycWEzLmFwaS5jb25jdXJzb2x1dGlvbnMuY29tL3Byb2ZpbGUvdjEvYXBwcy9lMDEwZTI1ZC1iNGNlLTRjZTMtYTdlNiLCJzdWIiOiI3OTZiNDY3Zi1kY2QxLTQ2MzEtYmE4NS0zZWJkMjhiMzZlOGYiLCJpc3MiOiJodHRwczovL3VzLXJxYTMuYXBpLmNvbmN1cnNvbHV0aW9ucy5jb20iLCJleHAiOjE0Nzk0MTU4NjksImxlZ2FjeV9hcHBsaWNhdGlvbl9pZCI6MTUwMDA2MzY1OSwidXNlclVSSSI6Imh0dHBzOi8vdXMtcnFhMy5hcGkuY29uY3Vyc29sdXRpb25zLmNvbS9wcm9maWxlLXNlcnZpY2UvdjEvdXNlcnMvNzk2YjQ2N2YtZGNkMS00NjMxLWJhODUtM2ViZDI4YjM2ZThmIiwidXNlcnV1aWQiOiI3OTZiNDY3Zi1kY2QxLTQ2MzEtYmE4NS0zZWJkMjhiMzZlOGYiLCJuYmYiOjE0Nzk0MTIyNjksImh0dHBzOi8vYXBpLmNvbmN1cnNvbHV0aW9ucyiaHR0cHM6Ly91cy1ycWEzLmFwaS5jb25jdXJzb2x1dGlvbnMuY29tL3Byb2ZpbGUvdjEvYXBwcy9lMDEwZTI1ZC1iNGNlLTRjZTMtYTdlNC1iNjcwY2IxYWRjYjAiLCJodHRwczovL2FwaS5jb25jdXJzb2x1dGlvbnMuY29tL3Njb3BlcyI6WyJFWFBSUFQiLCJMSVNUIiwiQkFOSyIsIkNDQVJEIl0sImlhdCI6MTQ3OTQxMjI2OX0.I4EeqKZbpfFonitGBZnLBb20NwMjZNNp5e1d3-BRsepEcJSVCVYIV9HAB2EkkopvoLJsAittiZgD0iDwuh2WVgUt_c4QGzNc_-rXRtCIeKyPQRvxUZNQ7y5RTqEQFNo7hrtXiNZ-yV30zlbijP-12XU5Cu4n2VXgRKxvcCUr5j0RcovUc6O0aOR7VTzj4ZbiDdijOEtmKWGluAYyfIlz8XF2aErAB5Jff2fr9UvgHgtbleYV7eBSesvd9hJEk4S-OAtmFoJwLDECLtLcBKyeHnPEe7LmkLYShcflWG2_tYk4ysPIMG6ne5kRNxJKsDbkMItjpXhujBEGi7YIPWtFWQ",
  "refresh_token": "31456dcd-b46a-4292-b2d3-f97033338487",
  "geolocation": "https://us.api.concursolutions.com"
}
```



## <a name="response_codes"></a>Response Codes

##### HTTP Status returned by exchangeAccessToken

| HTTP Status | Description                                      |
|-------------|--------------------------------------------------|
|   200       | OK - Successful call, response is in body.       |
|   400       | Bad Request - see list of responses below.       |
|   404       | Not Found                                        |
|   500       | Server Error, error message is in body.          |
|   503       | Server Timed Out, error message is in body.      |

##### exchangeAccessToken Response Codes

|   CODE        | Description                                      |
|---------------|--------------------------------------------------|
| OK            | OK - Successful call, response is in body.       |
| INVALIDSCOPES | One or more scopes requested are not a subset of the allowed scopes.                                                            |
| INVALIDAPP    | Application is invalid                           |
| INVALIDTOKEN  | Bad or expired token                             |
| UNAUTHORIZED  | Invalid credentials                              |

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
  "error_description": <error_description>
}
```

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
