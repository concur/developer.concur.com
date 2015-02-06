---
title: Delete Notification 
layout: operation
---




This callout supports the following DELETE actions:

##  Delete Notification Request

| ----- |

| Supported Accept Types |
| ---------------------- |
| Request URI            |

<https://www.concursolutions.com/api/platform/notifications/v1.0/notification/>

 |
|  Query Parameters - Required |  Query Parameters - Optional |
|

* notificationID  
The unique identifier for the notification.

Example:  
https://www.concursolutions.com/api/platform/notifications/v1.0/notification/_{notificationID}_

URI Source: The URI is returned in the **NotificationUrl** element of the Response for the [Get Notifications by Status][1] function.

 |  None |
|  Request Headers - Required |  Request Headers - Optional |
|  **Authorization** header with OAuth token for valid Concur user.

The OAuth consumer must have one of the following user roles in Concur: Company Administrator or Web Services Administrator for Professional, or Can Administer for Standard.

 |  **Accept** header with the desired format for the response. Options are:
* application/xml
* application/json
 |

####  XML Example Request

    DELETE https://www.concursolutions.com/api/platform/notifications/v1.0/notification/nOB1KNTDSV0UqiYeTsy6su$praZSogRJB6 HTTP/1.1
    Authorization: OAuth {access token}

##  Delete Notification Response

| ----- |
|  Supported Content Types |
|

* application/xml
* application/json
 |
|  Content Body |
|  The response returns an HTTP Status Code as follows:

|  HTTP Code |  Description |
|  200 Success |  Notification successfully deleted. |   |
|  400 Bad Request |  The request is malformed. Check the API document and verify the request uses the correct format. |
|  403 Forbidden |  The OAuth Consumer doesn't have a required role. Check the API documentation to learn the required roles. |

 |

####  Example of Successful Response

    HTTPS 200 Success



[1]: https://developer.concur.com/callouts/event-notification/get-notifications-status
