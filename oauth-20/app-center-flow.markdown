---
title: App Center Flow 
layout: conceptual
---

The Concur App Center Flow is a simplified authorization mechanism optimized for App Center users who are already logged into Concur and want to connect their App Center app to their Concur account and authorize access to their personal information.

##  Preconditions

Before the App Center Web Flow can be implemented for end-users, the following preconditions must be in place:

###  Developer

* In a Concur Sandbox Company (developer sandbox), the developer registers the application and selects the required APIs. This determines the scope of the end-user's data that the application can access on behalf of the end user. For more information on how to register a partner application, see [Registering a Partner Application][1].
* Once the developer has registered the application, a consumer key and a client secret are automatically generated and displayed in the Key and **Secret** fields of the **Modify** **Partner** page.
* Because application listings are not published until after an application has been certified, complete end-to-end App Center Flow cannot be replicated in a sandbox environment. The developer may simulate the initial steps of App Center flow by obtaining a request token using the request URI documented in Step 1 below and continuing to step 4 below to obtain the access token.

###  End User

* The end user is logged in to Concur.
* End users can only access and update their own information.

###  Concur

* To deploy the app in a production environment, Concur certifies the partner application. For more information on the Concur App Certification process, see [App Certification][2].
* After the partner application is certified, Concur registers the partner application, creates a listing for the application in the Concur App Center, and enables the app listing.

##  App Center Flow Step-by-Step

1. Register your application following the steps in [Registering a Partner Application][3].

2. Create a web page that listens for an HTTP GET request from Concur. This can be a servlet, MVC controller, ASHX or ASPX file, etc. This page must be hosted at the URI you specify in your App Center listing. The URI is specified in the redirect_url query parameter in step 3.

3. When your application receives the redirect call, parse the value from the code query parameter which was passed from the App Center. This is the request token for the user:

    GET {redirect_page_URI}?code={request_token}

4. Make an API call from your application to exchange the request token for an access token:
    GET https://www.concursolutions.com/net2/oauth2/getaccesstoken.ashx
    ?code={request_token}
    &client_id={consumer_key}
    &client_secret={consumer_secret}
    Accept: application/xml

For example:

    GET https://www.concursolutions.com/net2/oauth2/getaccesstoken.ashx
    ?code=0_XI1GL5BTe05Wr76W0bkK3hPg2sF7gcZ
    &client_id=VDV5Y532NafpmDLtbve7Md
    &client_secret=3ukkqMSIPORvMmXQqQ7QFJnDckLzmO5Z
    Accept: application/xml

If you encounter an error that makes it impossible to complete the connection process, revoke the access token to the user knows that the connection attempt failed and they can try again at a later time.


[1]: https://developer.concur.com/overview/partner-applications
[2]: https://developer.concur.com/go-market/app-certification
[3]: https://developer.concur.com/overview/partner-applications
