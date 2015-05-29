---
title: Choosing an Authorization Flow 
layout: reference
---

An authorization flow is the process used to obtain an OAuth access token. Concur implements the following authorization flows:

* [Auto-Connect Flow][4]
* [Native Flow][1]
* [Web Flow][2]

You can use this table to decide which OAuth 2.0 authorization flow to use for your application:

| If you need to... | Use this flow |
| ----------------- | ------------- |
|  Get an access token quickly for prototyping. | [Native Flow][1] |
|  Get an access token for a user with the Web Services Administrator role, and don't require the user to assent (usually for back-office integration apps). | [Native Flow][1] |
|  Inform the end-user how your app will access their data. | [Web Flow][2] |
|  Have an end-user-facing app but do not intend to distribute it in the App Center. |  [Web Flow][2] |
|  Distribute your app in the App Center and are a TripLink supplier. |  [Auto-Connect Flow][4] |


[1]: /api-reference/authentication/native-flow.html
[2]: /api-reference/authentication/web-flow.html
[4]: /api-reference/authentication/auto-connect-flow.html
