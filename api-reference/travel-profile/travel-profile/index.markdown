---
title: Travel Profile Services
layout: reference
---



##  Description

**NOTE: Travel Profile version 1.0 has been deprecated.**

The Travel Profile service consists of a set of resources that provide travel profile functionality customized in specific ways for developers, travel suppliers, and travel management companies (TMCs).

Developers, travel suppliers, and travel management companies (TMCs):

* View travel information.

Travel suppliers and TMCs:

* Update travel loyalty information.

Travel suppliers:

* Subscribe and unsubscribe to notifications for travel profile and form of payment information changes. To obtain notifications, the Concur users must grant access to their travel profile using the [Web authorization flow][1].
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


[1]: /api-reference/authentication/authentication.html#web
[2]: /api-reference/travel/travel-profile/profile-resource.html
[3]: /api-reference/travel/travel-profile/form-payment-resource.html
[4]: /api-reference/travel/travel-profile/loyalty-program-resource.html
[5]: /api-reference/user/company-notification-subscription-resource/index.html
[6]: /api-reference/travel/travel-profile/user-notification-resource.html
[7]: mailto:ConcurConnectTech@concur.com
[8]: /manage-apps/app-certification.html
