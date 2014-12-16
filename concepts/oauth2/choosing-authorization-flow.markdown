---
title: Choosing an Authorization Flow
layout: page
---

An authorization flow is the process used to obtain an OAuth access token. Concur implements the following authorization flows:

*   [App Center Flow](https://developer.concur.com/node/712)
*   [Auto-ConnectFlow](https://developer.concur.com/node/745)
*   [Native Flow](https://developer.concur.com/node/711)
*   [Web Flow](https://developer.concur.com/node/494)

You can use this table to decide which OAuth 2.0 authorization flow to use
for your application:

If you need to ... | Use this flow
Get an access token quickly for prototyping | [Native Flow](https://developer.concur.com/node/711)
Get an access token for a user with the Web Services Administrator role, and don't require the user to assent (usually for back-office integration apps) | [Native Flow](https://developer.concur.com/node/711)
Inform the end-user how your app will access their data | [Web Flow](https://developer.concur.com/node/494) <br/> [App Center Flow](https://developer.concur.com/node/712)
Have an end-user-facing app but do not intend to distribute it in the App Center | [Web Flow](https://developer.concur.com/node/494)
Distribute your app in the App Center and are not a TripLink supplier | [App Center Flow](https://developer.concur.com/node/712)
Distribute your app in the App Center and are a TripLink supplier | [Auto-Connect Flow](https://developer.concur.com/node/745)
