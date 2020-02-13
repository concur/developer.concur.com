---
title: Quick Connect Scope for Enterprise Apps
layout: reference
---

**Quick Connect** describes the process customers use to connect their Concur site with an App Center Partner's Enterprise application. This process starts from the Partner's App Center Listing (within a customer's Concur site) and results in a company-level access token that is unique per customer.  The Partner will use each token to access company-wide data for the respective customer that has connected.  (note: The type of company-wide data is limited to the Partner application's Scopes).  The Partner's Landing Page & Concur's Authentication Service (based on OAuth2) facilitate this connection process.  This document and accompanying links guide the Partner through the development steps for the Landing Page and OAuth2.

Once the customer’s administrator clicks the Connect button within the Partner's App Center Listing page, they will be re-directed to the Partner’s Landing Page. (note: Concur manages the Listing page for the Partner). The Landing page initiates the OAuth2 Flow and will prompt the admin to take one of the following actions depending on how the Partner designed their Landing Page:

1. Sign In or Sign Up
1. Enter a Verification Code

> The customer's administrator must have the Web Services Admin permission assigned to their Concur profile in order for the administrator to see the "Connect" button on the App Center Listing page.  All other users within the customer's Concur site will see a disabled Connect button.

The links and diagram below illustrate the process to get a company-level Access Token per customer using Concur’s Authentication service:

Development Item|Resources
---|---
Authorization|[Authentication - Enterprise Business Applications](/api-reference/authentication/apidoc.html#enterprise-business-applications)
Development & Certification|[Enterprise App Development & Certification](https://prezi.com/p/lw0qqy51zcmd/)
Landing Page|To develop the **Landing Page** read the [Apps for My Business](/manage-apps/go-market-docs/app-center-ux-guidelines-enterprise.html) and / or [Apps for Me](/manage-apps/go-market-docs/app-center-ux-guidelines-consumer.html) User Experience Guidelines to learn more about certification. The Certification PM will provide you a checklist that will be adhered to during the Certification walkthrough call.
ERP applications (only)|ERP Partner Integrations - the Partner will need to develop a solution that facilitates a way for the customer / partner to refresh the OAuth2 Access Token when the customer uses an on-premise ERP system.

This diagram is part of the above presentation content:

![OAuth2.png](./OAuth2.png)
