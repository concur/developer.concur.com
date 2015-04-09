---
title: Travel Profile Web Service
layout: conceptual
---




##  Description

The Travel Profile Web service consists of a set of resources that provide travel profile functionality customized in specific ways for developers, travel suppliers, and travel management companies (TMCs).

Developers, travel suppliers, and travel management companies (TMCs):

Travel suppliers and TMCs:

* Update travel loyalty information.
* Developers who are not registered as travel suppliers or TMCs with Concur cannot access loyalty program or discount information.

Travel suppliers:

* Subscribe to notifications for travel profile and form of payment information changes. To obtain notifications, the Concur users must grant access to their travel profile using the [Web OAuth 2.0 authorization flow][1].
* Unsubscribe to notifications for travel profile and form of payment information changes.

##  Version

1.0

##  Resources
* [Profile][2]
* [Form of Payment][3]
* [Loyalty Program][4]
* [Company Notification][5]
* [User Notification][6]


##  Configuration

To develop an application that uses Travel Profile, you must register and enable a private application in the developer's sandbox, including Travel Profile in the scope for the application. When selecting the Travel Profile scope, do not include Driver's License or Form of Payment (FOP) unless the application requires this sensitive information. After registering the application, the developer should email [ConcurConnectTech@concur.com][7] and ask to be registered as a supplier. The Travel Profile API verifies that the request is coming from a registered supplier before allowing access to the full information.

Travel supplier or TMC partner applications must complete the [Concur application review process][8] before they can access production user data. Driver's License and Form of Payment scopes require an additional level of security review to confirm the security of sensitive data. Travel suppliers can only access Form of Payment information for the type of travel that they supply. Suppliers can only update Loyalty Program information for the programs that they manage. TMCs can access all the user's Travel Profile data, regardless of vendor.


[1]: http://concur.github.io/developer.concur.com/api-reference/authentication/web-flow
[2]: http://concur.github.io/developer.concur.com/api-reference/travel/travel-profile/profile-resource
[3]: http://concur.github.io/developer.concur.com/api-reference/travel/travel-profile/form-payment-resource
[4]: http://concur.github.io/developer.concur.com/api-reference/travel/travel-profile/loyalty-program-resource
[5]: http://concur.github.io/developer.concur.com/api-reference/user/company-notification-subscription-resource
[6]: http://concur.github.io/developer.concur.com/api-reference/travel/travel-profile/user-notification-resource
[7]: mailto:ConcurConnectTech@concur.com
[8]: http://concur.github.io/developer.concur.com/manage-apps/app-certification
