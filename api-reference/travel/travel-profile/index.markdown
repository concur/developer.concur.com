---
title: Travel Profile Web Service
layout: conceptual
---



##  Description

**NOTE: Travel Profile version 1.0 has been deprecated.**

The Travel Profile Web service consists of a set of resources that provide travel profile functionality customized in specific ways for developers, travel suppliers, and travel management companies (TMCs).

Developers, travel suppliers, and travel management companies (TMCs):

* View travel information.

Travel suppliers and TMCs:

* Update travel loyalty information.

Travel suppliers:

* Subscribe and unsubscribe to notifications for travel profile and form of payment information changes. To obtain notifications, the Concur users must grant access to their travel profile using the [Web OAuth 2.0 authorization flow][1].
* Unsubscribe to notifications for travel profile and form of payment information changes.


##  Version

2.0

##  Resources
* [Profile][2]
* [Form of Payment][3]
* [Loyalty Program][4]
* [Company Notification][5]
* [User Notification][6]


##  Configuration

The developer should email [ConcurConnectTech@concur.com][7] and ask to be registered as a supplier. The Travel Profile API verifies that the request is coming from a registered supplier before allowing access to the full information.

Travel supplier or TMC partner applications must complete the [Concur application review process][8] before they can access production user data. Travel suppliers can only access Form of Payment information for the type of travel that they supply. Suppliers can only update Loyalty Program information for the programs that they manage. TMCs can access all the user's Travel Profile data, regardless of vendor.


[1]: http://api-reference/authentication/web-flow
[2]: http://api-reference/travel/travel-profile/profile-resource
[3]: http:///api-reference/travel/travel-profile/form-payment-resource
[4]: http://api-reference/travel/travel-profile/loyalty-program-resource
[5]: http://api-reference/user/company-notification-subscription-resource
[6]: http://api-reference/travel/travel-profile/user-notification-resource
[7]: mailto:ConcurConnectTech@concur.com
[8]: http://concur.github.io/developer.concur.com/manage-apps/app-certification
