
---
title: Quick Connect Scope for Enterprise Apps
layout: reference
---

**Quick Connect** describes the process customers use to connect their Concur site with an App Center Partner's Enterprise application. This process starts from the Partner's App Center Listing (within a customer's Concur site) and results in a company-level access token that is unique per customer.  The Partner will use each token to access company-wide data for the respective customer that has connected.  (note: The type of company-wide data is limited to the Partner application's Scopes).  The Partner's Landing Page & Concur's Authentication Service (based on OAuth2) facilitate this connection process.  This document and accompanying links guide the Partner through the development steps for the Landing Page and OAuth2.

Once the customer’s administrator clicks the Connect button within the Partner's App Center Listing page, they will be re-directed to the Partner’s Landing Page. (note: Concur manages the Listing page for the Partner). The Landing page initiates the OAuth2 Flow and will prompt the admin to take one of the following actions depending on how the Partner designed their Landing Page:

1. Sign In or Sign Up
1. Enter a Verification Code or "Contact Us" option

> the customer's administrator must have the Web Services Admin permission assigned to their Concur profile in order for the administrator to see the "Connect" button on the App Center Listing page.  All other users within the customer's Concur site will see a disabled Connect button.

To develop the **Landing Page** read the guidance document, called, “App Center User Experience Guidelines” located within this page: https://developer.concur.com/manage-apps/go-to-market.html

The link and diagram below illustrate the process to get a company-level Access Token per customer using Concur’s Authentication service:

Development Item|Resources
---|---
OAuth2|https://developer.concur.com/api-reference/authentication/getting-started.html, https://developer.concur.com/api-reference/authentication/apidoc.html#password_grant, https://prezi.com/p/lw0qqy51zcmd/
Landing Page| The .pdf document called "App Center User Experience Guidelines" on the Developer portal provides all of the SAP-Concur requirements for this page to pass certification. The Certification PM will provide you a checklist that will be adhered to during the Certification walkthrough call.
ERP applications (only)|ERP Partner Integrations - the Partner will need to develop a solution that facilitates a way for the customer/Partner to Refresh the OAuth2 Access Token when the customer uses an on-premise ERP system.

Only the [Password Grant Type](https://developer.concur.com/api-reference/authentication/apidoc.html#password_grant) is available for obtaining company-level tokens (tokens that get company-wide data).

1. To begin the authentication flow, a Customer's Concur Administrator clicks on the Connect button within the App Center listing and authorizes the partner's app.  This app listing is located within customer's Concur system's App Center tab.
1. Concur's authorization service will redirect the Admin to the Partner’s Landing Page.  Partners should follow the [App Center UX Guidelines](https://developer.concur.com/manage-apps/go-market-docs/app_center_ux_guidelines.pdf) to create a web page that listens for an HTTP GET request from Concur.
1. The redirect URI will contain an id, requestToken and userId parameters.  Example: `https://{partner_redirect_URI}?id=8568a4cd-8ffc-49d6-9417-be2d69aa075f&requestToken=5l85ae5a-426f-4d6f-8af4-08648c4b696b&userId=9bdded51-00b8-4f84-8bef-6d3afe727007`
1. When the Partner application receives the redirect call, the Partner should strip the `id` and `requestToken` values from the URI and use those on a Post request to the Concur Authorization service to obtain the official Oauth2 Access Token and Refresh Token for the customer using the [password grant](https://developer.concur.com/api-reference/authentication/apidoc.html#password_grant). As explained in detail in this [presentation](https://prezi.com/p/lw0qqy51zcmd/), the Partner must have [Data Center Geo Awareness](https://developer.concur.com/api-reference/authentication/apidoc.html#base_uri) related to the token. We currently have 3 Data Centers and the API end points change based on these Data Centers so it is imperative the proper token management is followed.  Otherwise, your app will not make the correct call per Access token.
1. An access token is valid for only one hour.  The access token should be cached in memory and discarded after use.
1. After the Admin has successfully completed the login/enrollment process, the Partner should store the following elements with the customer’s profile metadata.
  * `refresh_token`: (36 characters including dashes) Valid for six months from the day and time issued.
  * `refresh_expires_in`: This is Epoch time format, convert to UTC.
  * `geolocation`: To be used when making API calls on behalf of the customer.
  * `id`: Aka `sub`, is the customer’s unique identifier (UUID).  It can be retrieved from the following sources:
    * From the re-direct URI as the id element.
    * By decoding the `id_token` returned with Access token, as the `sub` element. (See https://jwt.io)
1. It is highly recommended that Partners log the following elements:
  * `userId`: the user who clicked on the Connect button (returned in the re-direct URI)
  * `correlationid`: Concur responds with a unique code which identifies the API call in the log files.  (returned in the response header).  More details can be found here.

This diagram is part of the above presentation content:

![OAuth2.png](./OAuth2.png)
