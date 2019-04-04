---
title: Company Level Authentication
layout: reference
---

* [Overview]()
* [Company](#company)
* [Obtaining a one-time auth token](#obtain_token)
* [Response Codes](#response_codes)

## <a name="company"></a>Company

Company is a top-level principal within Concur and you would be able to obtain an access token and a refresh token on a Company's behalf just like you would be able to with a User. Only one authorization flow is currently available for obtaining tokens for a Company, which is the [Password grant](/api-reference/authentication/apidoc.html#password_grant) using a temporary auth token received from the App Center.

## <a name="obtain_token"></a>Obtaining an auth token

To begin the authentication flow for a company, one must first obtain a temporary auth token through AppCenter's interface. AppCenter will request for a temporary auth token and hand it off to the partner, who will then in turn use [Password grant](/api-reference/authentication/apidoc.html#password_grant) to exchange the temporary auth token for a full access token and refresh token for the company.

Auth tokens are valid only for 12 hours.  Partners have 12 hours to exchange the auth token for a refresh and access token, and can use this auth token multiple times within the 12 hours in case of network failure.

This auth flow diagram describes this handshake:

**Company Authentication Flow Sequence Diagram**

![Company Authentication Flow Sequence Diagram](company_auth_diagram.png)

AppCenter will call this endpoint to obtain an `authToken`.

```
POST /profile-service/v1/keys/principals/<companyId>/authtoken/
```

Sample Curl:

```shell
curl -E appcenter.p12:. -H 'concur-correlationid: githbuwiki' -XPOST https://us.api.concursolutions.com/profile-service/v1/keys/principals/08BCCA1E-0D4F-4261-9F1B-F778D96617D6/authtoken/
```

```shell
200 OK
```

```json
{
  "status": "PASS",
  "code": 0,
  "errormsg": "",
  "token": "<authToken>"
}
```

**AppCenter redirects User to Client's auth handler URI (Connect URL) and passing in the authToken**

```shell
301 Redirect https://client.app.url?id=$company_uuid&requestToken=$request_token&userID=$user_uuid
```

At this point, the user should be prompted to sign in to your application. If the user doesn't not have account, the user should have the ability to create one. For applications that have user read scope, the User UUID can be used to pre-populate the account creation forms. Please see the [App Center User Experience guidelines](/manage-apps/go-market-docs/app-center-ux-guidelines-enterprise.html) for more information.

**Client app calls Oauth2 password grant to get an access token for the company**

Name|Type|Format|Description
---|---|---|---
`client_id`|`string`|`UIID`|Applications client_id supplied by App Management
`client_secret`|`string`|`UUID`|Applications client_secret supplied by App Management
`grant_type`|`string`|-|Specify which grant type you expect the oauth2 service to process. For password grant, the value is `password`
`username`|`string`|-|specify the `companyId` to be used in the password grant request. The `id` above.
`password`|`string`|-|specify the `authToken` to be used in the password grant request. The `requestToken` above.
`credtype`|`string`|-|The credtype signifies to oauth2 which credential set is being submitted in the request. The value: `authtoken`.

## Example

### Request

```shell
POST /oauth2/v0/token HTTP/1.1
Content-Type: application/x-www-form-urlencoded
Host: us.api.concursolutions.com
Connection: close
Content-Length: 175

client_id=your-client_id
&client_secret=your-client_secret
&grant_type=password
&username=<companyId>
&password=<authtoken>
&credtype=authtoken
```

### Response

**Success**

```shell
HTTP/1.1 200 OK
Content-Type: application/json
Date: date-requested
Content-Length: 3397
Connection: Close
```

```json
{
  "expires_in": "3600",
  "scope": "app_scopes",
  "token_type": "Bearer",
  "access_token": "access_token",
  "refresh_token": "refresh_token",
  "geolocation":"https://us.api.concursolutions.com"
}
```

**Failure**

```json
{
  "error": "invalid_grant",
  "error_description": "Incorrect Credentials. Please Retry",
  "code": 5
}
```

## <a name="response_codes"></a>Response Codes

##### HTTP Status Code returned by oauth2

HTTP Status Code|Description
---|---
200|OK - Successful call, response is in body.
400|Bad Request `(error, error_description, code)`
401|Unauthorized `(error, error_description, code)`
403|Forbidden `(error, error_description, code)`
404|Not Found `(error, error_description, code)`
500|Server Error, error message is in body.
503|Server Timed Out, error message is in body.

4xx class errors have a JSON response with the following fields

```json
{
  "code": "<number>",
  "error": "<error>",
  "error_description": "<error_description>"
}
```

##### /token

Code|Error|Description
---|---|---
5|`invalid_grant`|Incorrect credentials. Please Retry
10|`invalid_grant`|Account is disabled. Please contact support
11|`invalid_grant`|Account is disabled. Please contact support
12|`invalid_grant`|Logon Denied. Please contact support
13|`invalid_grant`|Logon Denied. Please contact support
14|`invalid_grant`|Account Locked. Please contact support
16|`invalid_request`|user lives elsewhere
19|`invalid_grant`|Incorrect credentials. Please Retry
51|`invalid_request`|username was not supplied
52|`invalid_request`|password was not supplied
53|`invalid_client`|company is not enabled for this client
54|`invalid_scope`|requested scope exceeds granted scope
55|`invalid_request`|we don't know this email
56|`invalid_request`|`otp` was not supplied
57|`invalid_request`|`channel_type` missing
58|`invalid_request`|`channel_handle` missing
59|`access_denied`|client disabled
60|`invalid_grant`|these are not the grants you are looking for
61|`invalid_client`|client not found
62|`invalid_request`|`client_id` was not supplied
63|`invalid_request`|`client_secret` was not supplied
64|`invalid_client`|Incorrect credentials. Please Retry
65|`invalid_request`|`grant_type` was not supplied
80|`invalid_request`|invalid channel type
81|`invalid_request`|bad channel handle
83|`invalid_request`|otp not found
84|`invalid_request`|fact verification failed
85|`invalid_request`|otp verification failed
100|`invalid_request`|backend does not know about this username
101|`invalid_request`|code was not supplied
102|`invalid_request`|`redirect_uri` was not supplied
103|`invalid_request`|code is bad or expired
104|`invalid_grant`|`redirect_uri` does not match the previous grant
105|`invalid_grant`|this grant was not issued to you!
106|`invalid_request`|`refresh_token` was not supplied
107|`invalid_request`|refresh disallowed for app
108|`invalid_grant`|bad or expired refresh token
109|`invalid_request`|`loginid` was not supplied
115|`invalid_request`|unauthenticated client will not be issued token!
117|`invalid_request`|nonce is mandatory for this `response_type`
118|`invalid_request`|display is invalid
119|`invalid_request`|prompt is invalid
119|`invalid_request`|prompt must be set to consent for `offline_access`
