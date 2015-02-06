---
title: Revoking Access Tokens 
layout: operation
---




You can use the Revoke Token endpoint to:

* Revoke a single token for a given user.
* Revoke all tokens for a user of a given application.

To revoke tokens, the OAuth consumer must have either the Web Services Administrator for Concur Professional/Premium or the Can Administrator role for Concur Standard.

###  Revoking a specific access token

To revoke a specific access token for a user, make this API call:

    POST https://www.concursolutions.com/net2/oauth2/revoketoken.ashx
    ?token={access token}
    Authorization: OAuth {access token of user with Web Services Administrator role}
    Accept: application/xml

Where:

token — Is a required parameter that specifies the access token to be revoked.

For example:

    POST https://www.concursolutions.com/net2/oauth2/revoketoken.ashx
    ?token=fdjhk2382kwkajsklwe8i3932kslswl HTTP/1.1

###  Revoking all access tokens for a user

To revoke all access tokens for a user for a given application, make this API call:

    POST https://www.concursolutions.com/net2/oauth2/revoketoken.ashx
    ?consumerKey={consumer key}
    &user={user login ID}
    Authorization: OAuth {access token of user with Web Services Administrator role}
    Accept: application/xml

Where:

consumerKey — Is a required parameter that uniquely identifies this application. The consumerKey corresponds to the OAuth 2.0 client ID.  
user — Is a required parameter that specifies the user whose tokens will be revoked.

For example:

    POST https://www.concursolutions.com/net2/oauth2/revoketoken.ashx
    ?client_id=eZByXv2X41cJlC21pSVvRi&user=Vicky HTTP/1.1

