[Source](https://developer.concur.com/travel-profile/user-notification-resource "Permalink to User Notification Resource | Developer Portal")

# User Notification Resource | Developer Portal


| ----- |
|  Description |
|

A subscription to a notification when the Concur user changes the specified features of their Concur account or data. Currently supports notifications for the following events: Itinerary change (create or update), Travel Profile basic information change, or Travel Profile Form of Payment change. This functionality is restricted to Travel Suppliers or TMCs (Travel Management Companies) who have registered with Concur.

**NOTE**: This resource can only be accessed by partner applications that have selected the User API scope.

 |
|  Works With These Concur Products |
|

* **Travel** for Concur Professional/Premium
* **Travel** for Concur Standard
 |
|  Resource URI |
|  To subscribe:  
https://www.concursolutions.com/api/user/v1.0/subscribe  
To unsubscribe:  
https://www.concursolutions.com/api/user/v1.0/unsubscribe |

| Supported Content Types | Supported Accept Types |
| ----------------------- | ---------------------- |
| Supported Verbs         | Related Resources      |
| [POST][1]               |

[Booking][2]

[Form of Payment][3]

[Itinerary][4]

[Travel Profile][5]

 |

  
Last Modified: 10/23/2013 10:22 AM PDT

[1]: https://developer.concur.com/node/505
[2]: https://developer.concur.com/node/511
[3]: https://developer.concur.com/node/497
[4]: https://developer.concur.com/node/513
[5]: https://developer.concur.com/node/502
