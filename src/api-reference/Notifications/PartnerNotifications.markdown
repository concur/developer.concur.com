---
title: Notification Platform - Partner Notifications API
layout: reference
---
{% include prerelease.html %}

The purpose of this API is to provide SAP Concur's partners the ability to message users, through the web and mobile product.

>**Sample use case:** A business traveller starts a travel booking. That user is notified that a visa is required for their trip.

* [Process Flow](#process-flow)
* [Products and Editions](#products-editions)
* [Scope Usage](#scope-usage)
* [Dependencies](#dependencies)
* [Access Token Usage](#access-token-usage)
* [Send a message](#send-message)
* [Schema](#schema)
* [Request](#notification)
* [Error](#schema-error)

## <a name="process-flow"></a>Process Flow

![ey](./ey.png)

## <a name="products-editions"></a>Products and Editions

* Concur Travel Professional Edition
* Concur Travel Standard Edition

## <a name="scope-usage"></a>Scope Usage

Name|Description|Endpoint
---|---|---
`notifications.messages.writeonly`|Write messages to the notifications platform|https://us.api.concursolutions.com/notifications/v1/messages/:user_id/session

## <a name="dependencies"></a>Dependencies

User Profile Service - Get user information by JWT

## <a name="access-token-usage"></a>Access Token Usage

A User or Company JWT token is required for this endpoint.

## <a name="send-message"></a>Send a message

The endpoint provides a way for SAP Concur partners to message users and notify them. Partners will provide details about the message they want to send, along with data to apply to the message.

### Scopes

`notifications.messages.writeonly` - Refer to [Scope Usage](#scope-usage) for full details.

### Request

#### URI

##### Template

```shell
https://us.api.concursolutions.com/notifications/v1/messages/:user_id/session
```

##### Parameters

#### Headers

* [RFC 7231 Content-Type](https://tools.ietf.org/html/rfc7231#section-3.1.1.5)
* [RFC 7235 Authorization](https://tools.ietf.org/html/rfc7235#section-4.2)
* [RFC 7231 User-Agent](https://tools.ietf.org/html/rfc7231#section-5.5.3)

#### Payload

```json
{
    "sessionId": "D5B80C53-A4D2-4949-8462-D41655F246E2",
    "message": "template-name",
    "context": {
      "url": "https://www.example.com/foo"
    }
}
```

* [Request Payload](#request-schema)

### Response

`OK`

#### Status Codes

* [200 OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)
* [400 Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)
* [401 Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)
* [403 Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)
* [404 Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)
* [500 Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)
* [503 Service Unavailable](https://tools.ietf.org/html/rfc7231#section-6.6.4)
* [504 Gateway Timeout](https://tools.ietf.org/html/rfc7231#section-6.6.5)

#### Headers

* `concur-correlationid` is a Concur specific custom header used for technical support in the form of a [RFC 4122 A Universally Unique IDentifier (UUID) URN Namespace](https://tools.ietf.org/html/rfc4122).
* [RFC 7231 Content-Type](https://tools.ietf.org/html/rfc7231#section-3.1.1.5)
* [RFC 7231 Content-Encoding](https://tools.ietf.org/html/rfc7231#section-3.1.2.2)
* [RFC 7230 Content-Length](https://tools.ietf.org/html/rfc7230#section-3.3.2)
* [RFC 7231 Content-Type](https://tools.ietf.org/html/rfc7231#section-3.1.1.5)

#### Payload

* [Request Payload](#request-schema)
* [Error](#schema-error)

### Example

In this example, the value for the header `concur-correlationid` is the `sessionId`.

#### Request

```shell
POST https://us.api.concursolutions.com/notifications/v1/messages/0E6BD8D8-A020-43C6-BBEC-B67A7021FF1C
/session
Accept: application/json
Authorization: Bearer {JWT}
content-type: application/json
concur-correlationid: D5B80C53-A4D2-4949-8462-D41655F246E2
```

```json
{
   "sessionId": "D5B80C53-A4D2-4949-8462-D41655F246E2",
   "message": "template-name",
   "context": {
     "url": "https://www.example.com/foo"
   }
}
```

#### Response

```shell
HTTP/1.1 200 OK
access-control-allow-credentials: true
access-control-allow-headers: accept,access-control-allow-origin,authorization,cache-control,content-type,dnt,if-match,if-modified-since,keep-alive,origin,user-agent,x-mx-reqtoken,x-requested-with,concur-correlationid,concur-debug,x-csrf-token,appid,userid,x-token
access-control-allow-methods: GET, POST, PUT, DELETE, PATCH, OPTIONS
Access-Control-Allow-Origin: *
access-control-expose-headers: content-length,concur-correlationid,concur-debug,etag
Cache-Control: no-cache, no-store, must-revalidate
concur-correlationid: 848618e7-5747-4970-bda7-fc7baf251f88
Connection: keep-alive
Content-Length: 794
Content-Type: application/json; charset=utf-8
Date: Thu, 24 Jan 2019 01:31:47 GMT
ETag: W/"31a-jN1nuHJQV/Csk6EGPrZumg"
sap-server: 33
Server: cnqr-Discovery-One
```

```json
OK
```

## <a name="schema"></a>Schema

### <a name="notification"></a>Request

Name|Type|Description
---|---|---
`sessionId`|`string`|**Required** The unique ID of the session
`message`|`string`|**Required** The template identifier of the message
`context.url`|`string`|The context URL to apply to the template

### <a name="schema-error"></a>Error

Name|Type|Format|Description
---|---|---|---
`errorId`|`string`|-|The unique ID of the error
`errorCode`|`string`|-|The error code
`errorMessage`|`string`|-|A message describing the error
`errors`|`array`|[`error`](#schema-error)|An array of errors
