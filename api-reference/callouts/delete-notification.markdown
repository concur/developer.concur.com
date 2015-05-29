---
title: Delete notification requests
layout: reference
---


## Description
Delete an event notification.

## URI
`https://www.concursolutions.com/api/platform/notifications/v1.0/notification/`

##  Request

### Request parameters

**notificationID**: The unique identifier for the notification. Required.

Example:  
`https://www.concursolutions.com/api/platform/notifications/v1.0/notification/{notificationID}`

**URI Source**: The URI is returned in the **NotificationUrl** element of the Response for the [Get Notifications by Status][1] function.

### Headers

#### Authorization header

Authorization header with OAuth token for valid Concur user. Required.

The OAuth consumer must have one of the following user roles in Concur: Company Administrator or Web Services Administrator for Professional, or Can Administer for Standard.

#### Accept header

* application/xml
* application/json

####  XML Example Request

```xml
DELETE https://www.concursolutions.com/api/platform/notifications/v1.0/notification/nOB1KNTDSV0UqiYeTsy6su$praZSogRJB6 HTTP/1.1
Authorization: OAuth {access token}
```

##  Response

##  Content Types

* application/xml
* application/json

### Response Body

The response returns an HTTP Status Code as follows:

|HTTP Code|Description|
|---------|-----------|
|200 Success |Notification successfully deleted.|  
|400 Bad Request|The request is malformed. Check the API document and verify the request uses the correct format.|
|403 Forbidden|The OAuth Consumer doesn't have a required role. Check the API documentation to learn the required roles.|

####  Example of Successful Response

`HTTPS 200 Success`


[1]: /api-reference/callouts/get-notifications-status.html