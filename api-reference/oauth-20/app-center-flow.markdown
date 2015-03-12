---
title: App Center Flow 
layout: conceptual
---

## App Center Flow
The Concur App Center flow is a simple mechanism that enables end users to easily connect their App Center app to their Concur account. It provides the following benefits:

* Provides a seamless and simple connection flow for users.
* Is the foundation for standardizing the App Center user experience.
* Is the supported flow for all apps in the upcoming Concur Mobile App Center.
* Increases the success rate of completed connections.

This topic walks you through the App Center user experience providing guidelines along the way and then provides step-by-step instructions for implementing it programmatically.

###  What the user sees

1. In the App Center, on the **Apps for me** tab, the user navigates to an app and clicks **Learn More**.  

2. The **Listing Details** page appears:  
   <img src="Uber_Listing_appcenterflow_with_mobile.png" alt="App Center listing page" style="width:663px;height:377px">  

3. The user authorizes access to their data and clicks **Connect**.  

4. The partner page for signing in or creating an account for their loyalty program appears:  
   ![][5]  

5. If the user already has an account, the user signs in; if the user doesn’t have an account, give the user the option to create one.  

6. A page acknowledging that the user’s Concur account and partner loyalty program account are now linked appears:  
   <img src="Accounts_Linked.png" alt="accounts linked" style="width:651px;height:547px">  

7. The **App Center Listing Details** page for the partner app shows that the user is now connected with the partner app:  
   <img src="Connected_with_mobile.png" alt="connected" style="width:702px;height:456px">  


###  Implementing the App Center flow programmatically

1. Register your application by following the steps in [Registering a Partner Application][3].

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




[1]: https://developer.concur.com/overview/partner-applications
[2]: https://developer.concur.com/go-market/app-certification
[3]: https://developer.concur.com/overview/partner-applications
[4]: Uber_Listing_appcenterflow_with_mobile.png
[5]: partner_page_with_callouts.png
[6]: Accounts_Linked.png
[7]: Connected_with_mobile.png
