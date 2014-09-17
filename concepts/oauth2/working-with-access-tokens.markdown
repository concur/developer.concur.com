---
title: Working with Access Tokens
layout: page
---

# Working with Access Tokens
There are three main operations you can perform with access tokens:

## Getting access tokens

You can get an access token using any of the following  OAuth authorization flows:

*   [App Center Flow](https://developer.concur.com/node/712)
*   [Auto-Connect Flow](https://developer.concur.com/node/745)
*   [Native Flow](https://developer.concur.com/node/711)
*   [Web Flow](https://developer.concur.com/node/494)

See [Choosing an Authorization Flow ](https://developer.concur.com/node/738)for guidance on when to use each authorization flow.

## Refreshing access tokens

To refresh a token, make this API call:

	GET [https://www.concursolutions.com/net2/oauth2/getaccesstoken.ashx](https://www.concursolutions.com/net2/oauth2/getaccesstoken.ashx "https://www.concursolutions.com/net2/oauth2/getaccesstoken.ashx")
	?refresh_token={Refresh Token}
	&client_id={Consumer Key}&client_secret={Consumer Secret}
	Accept: application/xml

Where:

*refresh_token* — Is a required parameter that specifies the access token to be refreshed.
*client_id* — Is a required parameter that specifies the consumer key for the application.

## Revoking access tokens

You can use the Revoke Token endpoint to:

*   Revoke a single token for a given user.
*   Revoke all tokens for a user of a given application.

To revoke tokens, the OAuth consumer must have either the Web Services Administrator for Concur Professional/Premium or the Can Administrator role for Concur Standard.

### Revoking a specific access token

To revoke a specific access token for a user, make this API call:

	POST https://www.concursolutions.com/net2/oauth2/revoketoken.ashx
	?token={access token}
	Authorization: OAuth {access token of user with Web Services Administrator role}
	Accept: application/xml

Where:

*token* — Is a required parameter that specifies the access token to be revoked.

For example:

	POST https://www.concursolutions.com/net2/oauth2/revoketoken.ashx
	?token=fdjhk2382kwkajsklwe8i3932kslswl HTTP/1.1

### Revoking all access tokens for a user

To revoke all access tokens for a user for a given application, make this API call:

	POST https://www.concursolutions.com/net2/oauth2/revoketoken.ashx
	?client_id={consumer key}
	&user={user login ID}
	Authorization: OAuth OAuth {access token of user with Web Services Administrator role}
	Accept: application/xml

Where:

*client_id* — Is a required parameter that specifies the consumer key for the application.

*user* — Is a required parameter that specifies the login ID of the user whose access tokens are being revoked.

For example:

	POST https://www.concursolutions.com/net2/oauth2/revoketoken.ashx
	?client_id=eZByXv2X41cJlC21pSVvRi&user=Vicky HTTP/1.1