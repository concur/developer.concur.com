---
title: Travel Profile Services
layout: reference
---



##  Overview

The Travel Profile service consists of a set of resources that provide travel profile functionality customized in specific ways for developers, travel suppliers, and travel management companies (TMCs).

### [Profile][2]

These web services can be used to retrieve travel profile information for a specified user, or a list of travel profile summaries.

Available to Developers, travel suppliers, and TMCs

### [Form of Payment][3]

These web services can be used to view a user's methods of payment. The scope of information returned varies depending on who makes the request.

Available to Developers, travel suppliers, and TMCs

### [Loyalty Program][4]

This web service can be used to update loyalty information for the user as entered in Concur.

Available to Travel suppliers and TMCs.

### [Company Notification][5]

A subscription to a notification when any user in the Concur company changes the specified features of their Concur account or data. Currently supports notifications for the following events: Itinerary change (create or update), Travel Profile basic information change. To obtain notifications, the Concur users must grant access to their travel profile using the [Web authorization flow][1].

Available to Travel suppliers.

### [User Notification][6]

A subscription to a notification when the Concur user changes the specified features of their Concur account or data. Currently supports notifications for the following events: Itinerary change (create or update), Travel Profile basic information change, or Travel Profile Form of Payment change. This functionality is restricted to Travel Suppliers or TMCs (Travel Management Companies) who have registered with Concur. To obtain notifications, the Concur users must grant access to their travel profile using the [Web authorization flow][1].

Available to Travel suppliers.

##  Configuration

The developer should email [ConcurConnectTech@concur.com][7] and ask to be registered as a supplier. The Travel Profile API verifies that the request is coming from a registered supplier before allowing access to the full information.

Travel supplier or TMC partner applications must complete the [Concur application review process][8] before they can access production user data. Travel suppliers can only access Form of Payment information for the type of travel that they supply. Suppliers can only update Loyalty Program information for the programs that they manage. TMCs can access all the user's Travel Profile data, regardless of vendor.


[1]: /api-reference/authentication/authentication.html#web
[2]: /api-reference/travel-profile/01-profile-resource.html
[3]: /api-reference/travel-profile/02-form-payment-resource.html
[4]: /api-reference/travel-profile/03-loyalty-program-resource.html
[5]: /api-reference/travel-profile/04-notification-company-resource.html
[6]: /api-reference/travel-profile/05-notification-user-resource.html
[7]: mailto:ConcurConnectTech@concur.com
[8]: /manage-apps/app-certification.html
