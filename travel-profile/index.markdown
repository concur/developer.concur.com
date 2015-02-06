---
title: Travel Profile 
layout: conceptual
---




###  Description

The Travel Profile Web service consists of a set of resources that provide travel profile functionality customized in specific ways for developers, travel suppliers, and travel management companies (TMCs).

Developers, travel suppliers, and travel management companies (TMCs):

Travel suppliers and TMCs:

* Update travel loyalty information.
* Developers who are not registered as travel suppliers or TMCs with Concur cannot access loyalty program or discount information.

Travel suppliers:

* Subscribe to notifications for travel profile and form of payment information changes. To obtain notifications, the Concur users must grant access to their travel profile using the [Web OAuth 2.0 authorization flow][1].
* Unsubscribe to notifications for travel profile and form of payment information changes.

###  Version

Version 1.0

###  Resources

###  Configuration

To develop an application that uses Travel Profile, you must register and enable a private application in the developer's sandbox, including Travel Profile in the scope for the application. When selecting the Travel Profile scope, do not include Driver's License or Form of Payment (FOP) unless the application requires this sensitive information. After registering the application, the developer should email [ConcurConnectTech@concur.com][2] and ask to be registered as a supplier. The Travel Profile API verifies that the request is coming from a registered supplier before allowing access to the full information.

Travel supplier or TMC partner applications must complete the [Concur application review process][3] before they can access production user data. Driver's License and Form of Payment scopes require an additional level of security review to confirm the security of sensitive data. Travel suppliers can only access Form of Payment information for the type of travel that they supply. Suppliers can only update Loyalty Program information for the programs that they manage. TMCs can access all the user's Travel Profile data, regardless of vendor.

###  Works with these Concur products

* **Travel** for Concur Professional/Premium
* **Travel** for Concur Standard
* **Expense** for Concur Professional/Premium



[1]: https://developer.concur.com/oauth-20/web-flow
[2]: mailto:ConcurConnectTech@concur.com
[3]: https://developer.concur.com/node/624/
