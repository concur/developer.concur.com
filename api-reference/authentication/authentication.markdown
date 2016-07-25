---
title: Authentication
layout: reference
---

# Authentication

* [Access tokens](#access-tokens)
	* [Verb and URIs](#verbs-and-uris)
	* [Keys and Secrets](#keys-and-secrets)
	* [Getting an access token](#getting-access-token)
	* [Refreshing an access token](#refreshing-access-token)
	* [Revoking a single access token for a given user](#revoke-single-access-token)
	* [Revoking all access tokens for a user](#revoke-all-access-tokens)  


* [Choosing an authorization flow](#choosing-authorization-flow)
	* [Native flow](#native)
	* [Web flow](#web)
	* [AppCenter flow](#app-center)
	* [Auto-Connect flow](#auto-connect)

## <a name="access-tokens"></a>Access tokens
An access token is a long-lived token used to make API calls.

### <a name="verbs-and-uris"></a>Verb and URIs
All authentication and authorization tasks use the `GET` verb and URI as noted here depending on type of application:

Type | Verb + URI
-----|-----------
Native|`GET https://{InstanceURL}/net2/oauth2/accesstoken.ashx`
Web or Auto-Connect|`GET https://{InstanceURL}/net2/oauth2/GetAccessToken.ashx`

### <a name="keys-and-secrets"></a>Keys and Secrets
The **Application Authorization** section in the **New Partner Application** page includes `Key` and `Secret` fields that are used to generate a request token which is later exchanged for an access token.

Field|URI Parameter|Description
-----|-------------|-----------
<a name="key"></a>`Key`|`client_id`|Unique identifier for the application.
<a name="secret"></a>`Secret`|`client_secret`|Unique value for the application.

### <a name="getting-access-token"></a>Getting an access token

#### Parameters

Name | Type | Format | Description
-----|------|--------|------------
`code`|`string`|`{request_token}`|**Required** The request token.
`client_id`|`string`|[`{key}`](#key)|**Required** The application key.
`client_secret`|`string`|[`{secret}`](#secret)|**Required** The application secret.

#### Input

None

#### <a name="access-token-response"></a>Response

Name | Type | Format | Description
-----|------|--------|------------
Instance_URL|`string`|-|Identifies the Concur datacenter where the user's data resides. For example, if the Instance_Url is `https://www.ea1.concursolutions.com`, then all API calls for this user should use this URL as a prefix in subsequent API calls
Token|`string`|-|The access token value passed in the Authorization header when making API calls. It is a long-lived token which is currently set to expire after one year from creation. You should securely store the token and use it for all subsequent API requests until the token expires. Before it does, you should send a request to refresh the token prior to the expiration date.
Expiration_Date|`string`|-|The Universal Coordinated Time (UTC) date and time when the access token expires.
<a name="refresh-token"></a>Refresh_Token|`string`|-|Token with a new expiration date of a year from the refresh date. You should securely store the refresh token for a user and use it for all subsequent API requests.

### <a name="refreshing-access-token"></a>Refreshing an access token

NOTE: The token being refreshed must be used to make the refresh call.


Verb + URI |
-----|
`GET https://{InstanceURL}/net2/oauth2/getaccesstoken.ashx?refresh_token={your refresh token}&client_id={your_client_id}&client_secret={your_client_secret}`|



#### Parameters

Name | Type | Format | Description
-----|------|--------|------------
`refresh_token`|`string`|[`Refresh_Token`](#refresh-token)|**Required** The refresh token.
`client_id`|`string`|[`{key}`](#key)|**Required** The application key.
`client_secret`|`string`|[`{secret}`](#secret)|**Required** The application secret.

#### Input
None

#### Response

Name | Type | Format | Description
-----|------|--------|------------
Instance_URL|`string`|-|Identifies the Concur datacenter where the user's data resides. For example, if the Instance_Url is `https://www.ea1.concursolutions.com`, then all API calls for this user should use this URL as a prefix in subsequent API calls
Token|`string`|-|The access token value passed in the Authorization header when making API calls. It is a long-lived token which is currently set to expire after one year from creation. You should securely store the token and use it for all subsequent API requests until the token expires. Before it does, you should send a request to refresh the token prior to the expiration date.
Expiration_Date|`string`|-|The Universal Coordinated Time (UTC) date and time when the access token expires.


### <a name="revoke-single-access-token"></a>Revoking a single access token for a given user

	POST https://{InstanceURL}/net2/oauth2/revoketoken.ashx

<a name="revoke-roles"></a>**Note**: To revoke tokens, the caller must have one of the following roles:

* `Web Services Administrator` for Concur Professional/Premium
* `Can Administrator` for Concur Standard.

#### Headers

Header|Format|Description
------|------|-----------
`Authorization` |<a href="https://www.w3.org/Protocols/rfc2616/rfc2616-sec14.html#sec14.8" target="_blank">https://www.w3.org/Protocols/rfc2616/rfc2616-sec14.html#sec14.8.</a> |`OAuth {access_token}` of user with proper role.

#### Parameters

Name | Type | Format | Description
-----|------|--------|------------
`token`|`string`|`{access_token}`|**Required** The token to be revoked.

#### Response

None

#### Example

	POST https://www.concursolutions.com/net2/oauth2/revoketoken.ashx?token=fdjhk2382kwkajsklwe8i3932kslswl
	Authorization: OAuth fdjhk2382kwkajsklwe8i3932kslswl

### <a name="revoke-all-access-tokens"></a>Revoking all access tokens for a user
	POST https://www.concursolutions.com/net2/oauth2/revoketoken.ashx

#### Headers

Header|Format|Description
------|------|-----------
`Authorization`|<a href="https://www.w3.org/Protocols/rfc2616/rfc2616-sec14.html#sec14.8" target="_blank">https://www.w3.org/Protocols/rfc2616/rfc2616-sec14.html#sec14.8.</a> |`OAuth {access_token}` of user with proper role.

#### Parameters

Name | Type | Format | Description
-----|------|--------|------------
`consumerKey`|`string`|[`{key}`](#key)|**Required** The key of the application.
`user`|`string`|`{user_LoginID}`|**Required** The LoginID of the user.

#### Response
w
None

#### Example

	POST https://www.concursolutions.com/net2/oauth2/revoketoken.ashx?consumerKey=eZByXv2X41cJlC21pSVvRi&user=Maria
	Authorization: OAuth fdjhk2382kwkajsklwe8i3932kslswl

## <a name="choosing-authorization-flow"></a>Choosing an authorization flow
Use this table to decide which OAuth 2.0 authorization flow to use for the application:

If you need to... | Use this flow
----------------- | -------------
Get an access token for prototyping, designing and testing an application.|[Native](#native)
Get an access token for a user with the Web Services Administrator role and don't require the user to assent (usually for back-office integration apps).|[Native](#native)
Inform the end-user how the app will access their data.|[Web](#web) or [App Center](#app-center)
Have an end-user-facing app and wish to initiate the account linking from the app, outside of the Concur App Center. **NOTE:** These apps must also support App Center Flow so your app is available in the Mobile App Center. Most end-user apps will be used predominantly on a mobile device.|[Web](#web)
Distribute the app in the Mobile App Center|[App Center](#app-center)
Distribute the app in the App Center and are **not** a TripLink supplier.|[App Center](#app-center)
Distribute the app in the App Center and **are** a TripLink supplier.|[Auto-Connect](#auto-connect)

### <a name="native"></a>Native
The request must contain the following HTTP headers:

#### Headers

Header|Format|Description
------|------|-----------
`Authorization`|<a href="https://www.w3.org/Protocols/rfc2616/rfc2616-sec14.html#sec14.8" target="_blank">https://www.w3.org/Protocols/rfc2616/rfc2616-sec14.html#sec14.8.</a>|The Base-64 encoded Concur credentials (LoginID:Password) of the user requesting access in the HTTP Basic Authentication format. If no password is used, the user name must still end with a colon.
`X-ConsumerKey`|[`{key}`](#key)|Unique identifier for the application.

#### Example

	GET {uri}
	Authorization: Basic QWxhZGRpbjpvcGVuIHNlc2FtZQ==
	X-ConsumerKey: hj7683jslks93lalkjss93

#### Response

[Access token response](#access-token-response)

### <a name="web"></a>Web
There are two types of access levels that can be enabled with web flow:

Type | Description
-----|------------
Company Level|A company can enable an application to use their data in Concur.
User Level|A user can enable apps to use their individual data.

This is determined by the type of Concur user account used in the process.

The web flow is as follows:

1. [Application redirection to the Concur website for authentication and authorization.](#application-redirection)
1. [Parse of a inbound HTTP request from the Concur system to an application specified endpoint.](#parse-inbound-http-request)
1. [Getting an access token](#getting-access-token)

#### <a name="application-redirection"></a>Application Redirection to the Concur website for authentication and authorization.

`https://www.concursolutions.com/net2/oauth2/Login.aspx?{parameters}`

##### Parameters

Name | Type | Format | Description
-----|------|--------|------------
`client_id`|`string`|[`{key}`](#key)|**Required** The application key.
`scope`|`string`|[`{scope}`](#scope)|The comma separated list of APIs for which authorization will be granted.
`redirect_uri`|`string`|-|The URI of the partner application where Concur will redirect the user after authentication and access approval.
`state`|`string`|-|  Optional partner application-defined state variable. This variable is specified by the partner application and will be returned intact by the Concur's OAuth provider when the user is redirected to the redirect URL. Values are generally passed in this parameter when the state of the value cannot be maintained by the partner application, for instance when making calls between multiple, disparate web pages. Example: The state variable can contain the ID of the user in the partner application, so that the token returned in the callback can be associated to the specified user and subsequently saved in the database of the partner application.

<a name="scope"></a>Scope | Description
------|------------
`ATTEND`|Attendee List Web Service
`CONFIG`|Expense Configuration Web Service
`ERECPT`|E-Receipts Web Service
`EXPRPT`|Expense Report Web Service, Quick Expense Web Service
`EXTRCT`|Extract Web Service
`IMAGE`|Imaging Web Service
`INSGHT`|Insights Web Service
`INVPO`|Invoice Purchase Order Web Service
`ITINER`|Itinerary Web Service
`LIST`|List Item Web Service
`MTNG`|Meeting Web Service
`PAYBAT`|Payment Batch Web Service
`TRVPRF`|Travel Profile Web Service
`TRVREQ`|Travel Request Web Service
`TWS`|Trip Approval Web Service
`USER`|User Web Service

#### <a name="parse-inbound-http-request"></a>Parse of a inbound HTTP request from the Concur system to an application specified endpoint.
`http://{redirect_uri}?{parameters}`

* If access is denied the `error` and `error_description` parameters are used.
* If access is granted the `code` parameter is used.

##### Parameters

Name | Type | Format | Description
-----|------|--------|------------
`error`|`string`|-|The name of the error.
`error_description`|`string`|-|Description of the error.
`code`|`string`|`{request_token}`|The request token.

### <a name="app-center"></a>AppCenter
The AppCenter flow is as follows:

1. Listening for an HTTP GET request from the Concur system.
	* The listener must be hosted at the URI specified in the App Center listing.
	* The request will be in this form: `GET {listener_URI}?code={request_token}`
1. Parsing the request token value from the `code` query parameter.
1. [Getting an access token](#getting-access-token)

### <a name="auto-connect"></a>Auto-Connect
The Auto-Connect flow is an authorization to support Connection Requests API calls from TripLink applications. During the Auto-Connect flow, the request token associated with a TripLink application is exchanged for an access token for the user who granted the TripLink application access to the user's Concur data.

1. Periodically getting a list of connection requests.

	`GET /common/connectionrequests`

1. For each user in the connection requests response: [Getting an access token](#getting-access-token)

1. For each connection request, call any other Concur APIs you need to match the Concur user with the user in your system. When the user is successfully matched, or when matching fails, update the connection request.

	`PUT /common/connectionrequests/{id}`

1. If you encounter an error that makes it impossible to complete the connection process, revoke the access token so the user knows that the connection attempt failed and they can try again at a later time.
