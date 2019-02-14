---
title: Delete notification requests
layout: reference
---

Delete an event notification.

* [Request](#request)
  * [Request Example](#req-example)
* [Response](#response)
  * [Schema](#schema)
  * [Response Example](#res-example)

## URI
`https://www.concursolutions.com/api/platform/notifications/v1.0/notification/`

## <a name="request"></a>Request

### Request Parameters

**notificationID**: The unique identifier for the notification. Required.

Example:  
`https://www.concursolutions.com/api/platform/notifications/v1.0/notification/{notificationID}`

**URI Source**: The URI is returned in the **NotificationUrl** element of the Response for the [Get Notifications by Status][1] function.

### Headers

#### Authorization Header

Authorization header with OAuth token for valid SAP Concur user. Required.

The OAuth consumer must have one of the following user roles in SAP Concur: Company Administrator or Web Services Administrator for Professional, or Can Administer for Standard.

#### Accept Header

* application/xml
* application/json

####  <a name="req-example"></a>XML Example Request

```http
DELETE https://www.concursolutions.com/api/platform/notifications/v1.0/notification/nOB1KNTDSV0UqiYeTsy6su$praZSogRJB6 HTTP/1.1
Authorization: OAuth {access token}
```

##  <a name="response"></a>Response

###  Content Types

* application/xml
* application/json

### <a name="schema"></a>Schema

The response returns an HTTP Status Code as follows:

|HTTP Code|Description|
|---------|-----------|
|200 Success |Notification successfully deleted.|  
|400 Bad Request|The request is malformed. Check the API document and verify the request uses the correct format.|
|403 Forbidden|The OAuth Consumer doesn't have a required role. Check the API documentation to learn the required roles.|

####  <a name="res-example"></a>Example of Successful Response

`HTTPS 200 Success`


[1]: /api-reference/callouts/get-notifications-status.html
