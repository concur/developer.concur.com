[Source](https://developer.concur.com/callouts/event-notification/get-notifications-status "Permalink to Get Notifications by Status | Developer Portal")

# Get Notifications by Status | Developer Portal

This callout supports the following GET actions:

##  Get Notifications by Status Request

| ----- |
|  Description |  Supported Content Types |
|  Retrieves the list of event notifications that are in the supplied status. |   |
|  Query Parameters - Required |  Query Parameters - Optional |
|

* **status=_{status_}**  
The desired status for the notification. Currently supports **failed**.

Example:  
https://www.concursolutions.com/api/platform/notifications/v1.0/notification?status=_status_

 |  None |
|  Request Headers - Required |  Request Headers - Optional |
|  Authorization header with OAuth token for valid Concur user.

The OAuth consumer must have one of the following user roles in Concur: Company Administrator or Web Services Administrator for Professional, or Can Administer for Standard.

 |  **Accept** header with the desired format for the response. Options are:
* application/xml
* application/json
 |

####  XML Example Request

    GET <https://www.concursolutions.com/api/platform/notifications/v1.0/notification?status=FAILED> HTTP/1.1
    Authorization: OAuth {access token}
    Accept: application/xml

##  Get Notifications by Status Response

| ----- |
|  HTTP Responses |  Supported Content Types |
|  [HTTP Status Codes][1] |

* application/xml
* application/json
 |
|  Content Body |   |
|  This request will return a **NotificationsList** parent element with a **Notification** child element for each failed notification. The **Notification** elements will have a **Failure** child element if the notification is failed. The **Failure** element has the following child elements:

|  Element |  Description |
|  Context |  Message that the callout can use to provide the developer some context for the callout. |   |
|  EventDateTime |  When the event happened. Format: YYYY-MM-DD:HH:MM:SS |
|  EventType |  The event that triggered the callout. |
|  NotificationURL |  The URL the developer calls to delete a failed notification. |
|  ObjectType |  The type of object that triggered the notification. |
|  ObjectURI |  The URI for the object. The developer can use the appropriate GET function for the Object Type. |

 |

####  XML Example of Successful Response

    HTTP/1.1 200 OK
    Content-Length: 626
    Content-Type: application/xml

    <?xml version="1.0" encoding="utf-8"?>
    <NotificationList xmlns="http://www.concursolutions.com/api/notification/2012/06" xmlns:i="http://www.w3.org/2001/XMLSchema-instance">
        <Notification>
            <Context i:nil="true" />
            <EventDateTime>2012-11-14T19:45:25</EventDateTime>
            <EventType>Report Entered Expense Report Workflow Step - REPORT SUBMITTED</EventType>
            <NotificationURI>https://www.concursolutions.com/api/platform/notifications/v1.0/notification/nOB1KNTDSWUcJPMV6dPDjNc$scu6EDbt9s</NotificationURI>
            <ObjectType>EXPRPT</ObjectType>
            <ObjectURI>https://www.concursolutions.com/api/expense/expensereport/v1.1/reportfulldetails/nxxKgLlnROzz$sHcpnRHQ$pALxamClaFfdC</ObjectURI>
        </Notification>
    </NotificationList>

####  JSON Example of Successful Response

    HTTP/1.1 200 OK
    Content-Length: 388
    Content-Type: application/json; charset=utf-8

    [
        {
            "Context":null,
            "EventDateTime":"2012-11-14T19:45:25",
            "EventType":"Report Entered Expense Report Workflow Step - REPORT SUBMITTED",
            "NotificationURI":"https://www.concursolutions.com/api/platform/notifications/v1.0/notification/nOB1KNTDSWUcJPMV6dPDjNc$scu6EDbt9s",
            "ObjectType":"EXPRPT",
            "ObjectURI":"https://www.concursolutions.com/api/expense/expensereport/v1.1/reportfulldetails/nxxKgLlnROzz$sHcpnRHQ$pALxamClaFfdC"
        }
    ]

Last Modified: 4/16/2013 4:51 PM PDT

[1]: https://developer.concur.com/node/205
