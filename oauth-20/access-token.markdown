---
title: Access Token 
layout: resource
---



##  Description

An access token is a long-lived token used to make authorized API calls.

##  URIs

Native Flow
:  `https://{InstanceURL}/net2/oauth2/accesstoken.ashx`

Web Flow and Auto-Connect Flow
:  `https://{InstanceURL}/net2/oauth2/GetAccessToken.ashx`

##  Operations

* [Get an access token with the Native Flow][2]
* [Get an access token with the Web Flow][3]
* [Get a refresh token][2]

##  Data Model

    <Access_Token>
        <Instance_URL>https://www.concursolutions.com</Instance_Url>
        <Token>fdjhk2382kwkajsklwe8i3932kslswl</Token>
        <Expiration_Date>3/30/2013 2:19:10 PM</Expiration_date>
        <Refresh_Token>8ew$sefhj7s62ns94376nsjd62s</Refresh_Token>
    </Access_Token>

| Element | Required/Optional | Data Type | Description  |
| ------- | ----------------- | --------- | ------------ |
|  Instance_URL |  required | string |  Identifies the Concur datacenter where the user's data resides. For example, if the Instance_Url is <https://www.ea1.concursolutions.com>, then all API calls for this user should use this URL as a prefix in subsequent API calls |
|  Token  | required |  string |  The access token value passed in the Authorization header when making API calls. It is a long-lived token which is currently set to expire after one year from creation. You shoud securely store the token and use it for all subsequent API requests until the token expires. Before it does, you should send a request to refresh the token prior to the expiration date. |
|  Expiration_Date  | required |  string |  The date and time, in Coordinated Universal Time (UTC) when the access token expires. Format: 3/30/2013 2:19:10 PM. |
|  Refresh_Token  | required |  string |  Token with a new expiration date of a year from the refresh date. You shoud securely store the refresh token for a user and use it for all subsequent API requests. |

###  See Also

[Revoking access tokens][1].



[1]: https://developer.concur.com/oauth-20/working-access-tokens/revoking-access-tokens
[2]: https://developer.concur.com/oauth-20/native-flow
[3]: https://developer.concur.com/oauth-20/web-flow
