---
title: Post an event notification request
layout: reference
---

##  Post Event Notification Request

### Supported Accept Types 
* application/xml

### Request URI
The Event Notification callout sends the notification to a URI for the application connector, which can be in a custom location for each client. The standard location is:

    https://{servername}/concur/v1.0/notify

The URI is configured on the **Register Application Connector** page in** Web Services** under **Administration**.


### Request Headers - Required
Authorization header with Basic authorization for endpoint. Refer to [Authentication][2] for more information. 

### Request Headers - Optional
None

### Request Body
The request will include a **Notification** parent element, with the following child elements:

|Element |Description |
|:------------|:-------------------------------------|
| EventType | The event that triggered the callout. Format: Report Entered Expense Report Workflow Step - <workflow step name>. |
| ObjectType | The type of object that triggered the notification. Currently supports Expense Report and Travel Request. Format: EXPRPT, TRAVELREQ |
| ObjectURI | The URI for the object. The developer can use the appropriate GET endpoint for the Object Type. |
| EventDateTime | When the event happened. Format: YYYY-MM-DD |
| Context | Message that the callout can use to provide the developer some context for the callout. |

###  XML Example Request

    POST /concur/v1.0/notify HTTPS /1.1
    Host: www.example.com
    Authorization: Basic Y29uY3VyOmNvbmN1cg==
    ...
    <?xml version="1.0" encoding="UTF-8" ?>
    <Notification>
        <EventType>Report Entered Expense Report Workflow Step - SUBMIT</EventType>
        <ObjectType>EXPRPT</ObjectType>
        <ObjectURI>https://www.concursolutions.com/api/expense/expensereport/v1.1/reportfulldetails/3%Rek29$wsIY12Di3LS9$gjei%KL23</ObjectURI>
        <EventDateTime>2012-05-01</EventDateTime>
        <Context/>
    </Notification>

##  Post Event Notification Response

### Supported Content Types
* application/txt

### Content Body
The application connector responds with an HTTP 200 code when it successfully receives the notification.

###  Example of Successful Response

    HTTPS 200 Success



[2]: /api-reference/callouts/event-notification.html
