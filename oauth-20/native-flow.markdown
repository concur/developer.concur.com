---
title: OAuth 2
layout: conceptual
---




##  Overview

The Native Flow is a Concur implementation of the 2-legged OAuth authorization flow. When implementing the Native Flow, a partner application accesses the resources of a given user whithout user involvement. The partner application sends the user's Concur credentials to the Concur authorization server on behalf of the user. You want to implement the Native flow in the following situations:

* You need to get an access token while designing and testing your application.
* You need to get an access token for a given user that has the **Web Services Administrator** role, and you don't require the user to grant or deny access to the user's resources. This scenario generally applies when developing back-office integration applications.

##  Native Flow Step by Step

In the native flow, the partner application sends the user's Concur credentials. The application then receives an OAuth token to use for later requests.

1. Register your application following the steps in [Registering a Partner Application][1].
2. Retrieve the Consumer Key from the **New Partner Application** page that appears when you're registering your application.
3. Make an API call using the login ID and password or e-mail address and PIN for Concur user requesting access. The request must contain two headers:
    * An authorization HTTP header that includes the Concur credentials (Login ID and password)  of the user requesting access in the HTTP Basic Authentication format. The LoginID:Password string must be Base-64 encoded.  It must be formatted as indicated below, starting with the word Basic. If no password is used, the user name must still end with a colon.
    * A header specifying the  Consumer Key for the partner application.

The format of the call is:

        GET https://www.concursolutions.com/net2/oauth2/accesstoken.ashx
    Authorization: Basic {Base64 encoded LoginID:Password}
    X-ConsumerKey: {Consumer Key}

For example, John obtained a Consumer Key of hj7683jslks93lalkjss93 when he registered his application. John has a login ID of john_developer@hotmail.com and a password of Travel&Expense$2012. John Base64-encoded his login ID, colon, and password such that john_developer@hotmail.com:Travel&Expense$2012 became GHJHDIU38JKSHJ==. John's call looks like this:

        GET https://www.concursolutions.com/net2/oauth2/accesstoken.ashx
    Authorization: Basic GHJHDIU38JKSHJ==
    X-ConsumerKey: hj7683jslks93lalkjss93

The response looks like this:

        HTTP/1.1 200 OK
    Content Length: 200

    <?xml version="1.0"?>
    <Access_Token>
        <Token>fdjhk2382kwkajsklwe8i3932kslswl</Token>
        <Expiration_date>6/1/2014 8:00:00 AM</Expiration_date>
        <Refresh_Token>8ew$sefhj7s62ns94376nsjd62s</Refresh_Token>
    </Access_Token>

4. Retrieve the access token from the response and use it in all subsequent calls for the authenticated user. The access token is the value of the <Token> element.
5. Delete any record of the login ID and password.



[1]: https://developer.concur.com/overview/partner-applications
