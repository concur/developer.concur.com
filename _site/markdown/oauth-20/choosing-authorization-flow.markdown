[Source](https://developer.concur.com/oauth-20/choosing-authorization-flow "Permalink to Choosing an Authorization Flow | Developer Portal")

# Choosing an Authorization Flow | Developer Portal

An authorization flow is the process used to obtain an OAuth access token. Concur implements the following authorization flows:

You can use this table to decide which OAuth 2.0 authorization flow to use for your application:

| ----- |
|  If you need to .... |  Use this flow |
|  Get an access token quickly for prototyping. |

[Native Flow][1]

 |
|  Get an access token for a user with the Web Services Administrator role, and don't require the user to assent (usually for back-office integration apps). |  [Native Flow][1] |
|  Inform the end-user how your app will access their data. |

[Web Flow][2]  
[App Center Flow][3]

 |
|  Have an end-user-facing app but do not intend to distribute it in the App Center. |  [Web Flow][2] |
|  Distribute your app in the App Center and are not a TripLink supplier. |  [App Center Flow][3] |
|  Distribute your app in the App Center and are a TripLink supplier. |  [Auto-Connect Flow][4] |

 

Last Modified: 6/10/2014 9:05 PM PST

[1]: https://developer.concur.com/node/711
[2]: https://developer.concur.com/node/494
[3]: https://developer.concur.com/node/712
[4]: https://developer.concur.com/node/745
