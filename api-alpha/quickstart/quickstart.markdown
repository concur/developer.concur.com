---
title: Quick Start Guide
layout: reference
---

##  Quick Start Guide
If you are new to Concur APIs, follow these steps to make your first API call and try some of our other APIs.

###  Provision your developer sandbox
If you are a new Concur customer, email us at [pdspe@concur.com](pdspe@concur.com). The Concur team will configure your developer sandbox and send you information how to access our Version 4 APIs.

If you already have a developer sandbox, you can continue to use it for your Version 3 APIs (v3). To use our Version 4 APIs (v4),  email us at [pdspe@concur.com](pdspe@concur.com) for information about how to access our Version 4 APIs.


**Important: when you receive them, make a copy of your consumer key, consumer secret and access token and store them in a secure location**. You will need them to make authenticated API requests to your sandbox.

###   Register your partner application
Formerly, the first task all developers needed to complete after they configured their v3 developer sandbox, was to register their partner application with Concur.

**In the v4 developer sandbox, Concur will register a new application.**

###  Obtain a valid token for creating a receipt for a v4 developer sandbox user

Follow the steps explained in [Authentication API](https://preview.developer.concur.com/api-alpha/auth/apidoc.html) to obtain a valid token for creating a receipt for a user in your v4 developer sandbox.

###  Accessing the Receipts API

In step 4 of the registration process described in [App Registration &  Management](https://developer.concur.com/manage-apps/partner-applications.htm),  the fields available for information are named and described.

* In the APIs Used field, check the **E-Receipts Provider** checkbox.

* Send an email to [concuruser@concur.com](mailto:concuruser@concur.com) with your Company Domain name to receive your client ID and client secret for the new Authentication API

* Send an email to [pdspe@concur.com](mailto:pdspe@concur.com) with your Company Domain name to enable the new Receipts API in your sandbox

* Create or import users in your sandbox using the process explained in Step 5 of Configure your developer sandbox above

 * Refer to the [Authentication API documentation](https://preview.developer.concur.com/api-alpha/auth/apidoc.htm) to get a valid token for creating a receipt for a user in your sandbox

 * Refer to the [Receipts API documentation](https://preview.developer.concur.com/api-alpha/receipts/apidoc.html) to know how to create a receipt


Once a receipt is successfully posted, the receipt data and image can be viewed in the Available Expenses section of the [website](https://www.concursolutions.com/expense/client/default.asp).





