[Source](https://developer.concur.com/company-notification-subscription-resource "Permalink to Company Notification Subscription Resource | Developer Portal")

# Company Notification Subscription Resource | Developer Portal


| ----- |
|  Description |
|

A subscription to a notification when any user in the Concur company changes the specified features of their Concur account or data. Currently supports notifications for the following events: Itinerary change (create or update), Travel Profile basic information change.

This functionality requires that the partner complete the OAuth process with an administrative user from the Concur company.

**NOTE**: This resource can only be accessed by partner applications that have selected the User API scope.

 |
|  Works With These Concur Products |
|

* **Travel** for Concur Professional/Premium
* **Travel** for Concur Standard
 |
|  Resource URI |
|  To subscribe:  
<https://www.concursolutions.com/api/company/v1.0/subscribe>  
To unsubscribe:  
https://www.concursolutions.com/api/company/v1.0/unsubscribe |

| Supported Content Types | Supported Accept Types |
| ----------------------- | ---------------------- |
| Supported Verbs         | Related Resources      |
| [POST][1]               |

[Booking][2]

[Itinerary][3]

[Travel Profile][4]

 |

Last Modified: 10/22/2013 10:24 AM PDT

[1]: https://developer.concur.com/node/566
[2]: https://developer.concur.com/node/511
[3]: https://developer.concur.com/node/513
[4]: https://developer.concur.com/node/502
