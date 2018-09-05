---
title: Service Name
layout: reference
---

[Terms of Use](./Terms-of-Use.markdown)

Description

* [Section](#section)
* [Schema](#schema)
  * [Stuff](#schema-stuff)

## <a name="section"></a>Section

Description

### Scopes

Name|Description
---|---
`scope`|Description

### Request

#### Headers

* [RFC 7231 Content-Type](https://tools.ietf.org/html/rfc7231#section-3.1.1.5)
* [RFC 7231 Content-Encoding](https://tools.ietf.org/html/rfc7231#section-3.1.2.2)
* [RFC 7231 Content-Language](https://tools.ietf.org/html/rfc7231#section-3.1.3.2)
* [RFC 7231 Content-Location](https://tools.ietf.org/html/rfc7231#section-3.1.4.2)
* [RFC 7230 Content-Length](https://tools.ietf.org/html/rfc7230#section-3.3.2)
* [RFC 7233 Content-Range](https://tools.ietf.org/html/rfc7233#section-4.2)
* [RFC 7230 Trailer](https://tools.ietf.org/html/rfc7230#section-4.4)
* [RFC 7230 Transfer-Encoding](https://tools.ietf.org/html/rfc7230#section-3.3.1)
* [RFC 7234 Cache-Control](https://tools.ietf.org/html/rfc7234#section-5.2)
* [RFC 7231 Expect](https://tools.ietf.org/html/rfc7231#section-5.1.1)
* [RFC 7230 Host](https://tools.ietf.org/html/rfc7230#section-5.4)
* [RFC 7231 Max-Forwards](https://tools.ietf.org/html/rfc7231#section-5.1.2)
* [RFC 7234 Pragma](https://tools.ietf.org/html/rfc7234#section-5.4)
* [RFC 7233 Range](https://tools.ietf.org/html/rfc7233#section-3.1)
* [RFC 7230 TE](https://tools.ietf.org/html/rfc7230#section-4.3)
* [RFC 7232 If-Match](https://tools.ietf.org/html/rfc7232#section-3.1)
* [RFC 7232 If-None-Match](https://tools.ietf.org/html/rfc7232#section-3.2)
* [RFC 7232 If-Modified-Since](https://tools.ietf.org/html/rfc7232#section-3.3)
* [RFC 7232 If-Unmodified-Since](https://tools.ietf.org/html/rfc7232#section-3.4)
* [RFC 7232 If-Range](https://tools.ietf.org/html/rfc7232#section-3.5)
* [RFC 7231 Accept](https://tools.ietf.org/html/rfc7231#section-5.3.2)
* [RFC 7231 Accept-Charset](https://tools.ietf.org/html/rfc7231#section-5.3.3)
* [RFC 7231 Accept-Encoding](https://tools.ietf.org/html/rfc7231#section-5.3.4)
* [RFC 7231 Accept-Language](https://tools.ietf.org/html/rfc7231#section-5.3.5)
* [RFC 7235 Authorization](https://tools.ietf.org/html/rfc7235#section-4.2)
* [RFC 7235 Proxy-Authorization](https://tools.ietf.org/html/rfc7235#section-4.4)
* [RFC 7231 From](https://tools.ietf.org/html/rfc7231#section-5.5.1)
* [RFC 7231 Referer](https://tools.ietf.org/html/rfc7231#section-5.5.2)
* [RFC 7231 User-Agent](https://tools.ietf.org/html/rfc7231#section-5.5.3)

#### Parameters

Name|Type|Format|Description
---|---|---|---
`variable`|`type`|-|**Required** Description

##### URI Template

```
https://example.com/api/{variable}
```

#### Payload

[Stuff](#schema-stuff)

### Response

#### Status Codes

* [100 Continue](https://tools.ietf.org/html/rfc7231#section-6.2.1)
* [101 Switching Protocols](https://tools.ietf.org/html/rfc7231#section-6.2.2)
* [102 Processing](https://tools.ietf.org/html/rfc2518#section-10.1)
* [200 OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)
* [201 Created](https://tools.ietf.org/html/rfc7231#section-6.3.2)
* [202 Accepted](https://tools.ietf.org/html/rfc7231#section-6.3.3)
* [203 Non-Authoritative Information](https://tools.ietf.org/html/rfc7231#section-6.3.4)
* [204 No Content](https://tools.ietf.org/html/rfc7231#section-6.3.5)
* [205 Reset Content](https://tools.ietf.org/html/rfc7231#section-6.3.6)
* [206 Partial Content](https://tools.ietf.org/html/rfc7233#section-4.1)
* [207 Multi-Status](https://tools.ietf.org/html/rfc4918#section-11.1)
* [208 Already Reported](https://tools.ietf.org/html/rfc5842#section-7.1)
* [226 IM Used](https://tools.ietf.org/html/rfc3229#section-10.4.1)
* [300 Multiple Choices](https://tools.ietf.org/html/rfc7231#section-6.4.1)
* [301 Moved Permanently](https://tools.ietf.org/html/rfc7231#section-6.4.2)
* [302 Found](https://tools.ietf.org/html/rfc7231#section-6.4.3)
* [303 See Other](https://tools.ietf.org/html/rfc7231#section-6.4.4)
* [304 Not Modified](https://tools.ietf.org/html/rfc7232#section-4.1)
* [305 Use Proxy](https://tools.ietf.org/html/rfc7231#section-6.4.5)
* [307 Temporary Redirect](https://tools.ietf.org/html/rfc7231#section-6.4.7)
* [308 Permanent Redirect](https://tools.ietf.org/html/rfc7538#section-3)
* [400 Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)
* [401 Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)
* [402 Payment Required](https://tools.ietf.org/html/rfc7231#section-6.5.2)
* [403 Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)
* [404 Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)
* [405 Method Not Allowed](https://tools.ietf.org/html/rfc7231#section-6.5.5)
* [406 Not Acceptable](https://tools.ietf.org/html/rfc7231#section-6.5.6)
* [407 Proxy Authentication Required](https://tools.ietf.org/html/rfc7235#section-3.2)
* [408 Request Timeout](https://tools.ietf.org/html/rfc7231#section-6.5.7)
* [409 Conflict](https://tools.ietf.org/html/rfc7231#section-6.5.8)
* [410 Gone](https://tools.ietf.org/html/rfc7231#section-6.5.9)
* [411 Length Required](https://tools.ietf.org/html/rfc7231#section-6.5.10)
* [412 Precondition Failed](https://tools.ietf.org/html/rfc7232#section-4.2)
* [413 Payload Too Large](https://tools.ietf.org/html/rfc7231#section-6.5.11)
* [414 URI Too Long](https://tools.ietf.org/html/rfc7231#section-6.5.12)
* [415 Unsupported Media Type](https://tools.ietf.org/html/rfc7231#section-6.5.13)
* [416 Range Not Satisfiable](https://tools.ietf.org/html/rfc7233#section-4.4)
* [417 Expectation Failed](https://tools.ietf.org/html/rfc7231#section-6.5.14)
* [421 Misdirected Request](https://tools.ietf.org/html/rfc7540#section-9.1.2)
* [422 Unprocessable Entity](https://tools.ietf.org/html/rfc4918#section-11.2)
* [423 Locked](https://tools.ietf.org/html/rfc4918#section-11.3)
* [424 Failed Dependency](https://tools.ietf.org/html/rfc4918#section-11.4)
* [426 Upgrade Required](https://tools.ietf.org/html/rfc7231#section-6.5.15)
* [428 Precondition Required](https://tools.ietf.org/html/rfc6585#section-3)
* [429 Too Many Requests](https://tools.ietf.org/html/rfc6585#section-4)
* [431 Request Header Fields Too Large](https://tools.ietf.org/html/rfc6585#section-5)
* [451 Unavailable For Legal Reasons](https://tools.ietf.org/html/rfc7725#section-3)
* [500 Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)
* [501 Not Implemented](https://tools.ietf.org/html/rfc7231#section-6.6.2)
* [502 Bad Gateway](https://tools.ietf.org/html/rfc7231#section-6.6.3)
* [503 Service Unavailable](https://tools.ietf.org/html/rfc7231#section-6.6.4)
* [504 Gateway Timeout](https://tools.ietf.org/html/rfc7231#section-6.6.5)
* [505 HTTP Version Not Supported](https://tools.ietf.org/html/rfc7231#section-6.6.6)
* [506 Variant Also Negotiates](https://tools.ietf.org/html/rfc2295#section-8.1)
* [507 Insufficient Storage](https://tools.ietf.org/html/rfc4918#section-11.5)
* [508 Loop Detected](https://tools.ietf.org/html/rfc5842#section-7.2)
* [510 Not Extended](https://tools.ietf.org/html/rfc2774#section-7)
* [511 Network Authentication Required](https://tools.ietf.org/html/rfc6585#section-6)

#### Headers

* `concur-correlationid` is a Concur specific custom header used for technical support in the form of a [RFC 4122 A Universally Unique IDentifier (UUID) URN Namespace](https://tools.ietf.org/html/rfc4122)
* [RFC 7231 Content-Type](https://tools.ietf.org/html/rfc7231#section-3.1.1.5)
* [RFC 7231 Content-Encoding](https://tools.ietf.org/html/rfc7231#section-3.1.2.2)
* [RFC 7231 Content-Language](https://tools.ietf.org/html/rfc7231#section-3.1.3.2)
* [RFC 7231 Content-Location](https://tools.ietf.org/html/rfc7231#section-3.1.4.2)
* [RFC 7230 Content-Length](https://tools.ietf.org/html/rfc7230#section-3.3.2)
* [RFC 7233 Content-Range](https://tools.ietf.org/html/rfc7233#section-4.2)
* [RFC 7230 Trailer](https://tools.ietf.org/html/rfc7230#section-4.4)
* [RFC 7230 Transfer-Encoding](https://tools.ietf.org/html/rfc7230#section-3.3.1)
* [RFC 7231 Content-Type](https://tools.ietf.org/html/rfc7231#section-3.1.1.5)
* [RFC 7234 Age](https://tools.ietf.org/html/rfc7234#section-5.1)
* [RFC 7234 Cache-Control](https://tools.ietf.org/html/rfc7234#section-5.2)
* [RFC 7234 Expires](https://tools.ietf.org/html/rfc7234#section-5.3)
* [RFC 7231 Date](https://tools.ietf.org/html/rfc7231#section-7.1.1.2)
* [RFC 7231 Location](https://tools.ietf.org/html/rfc7231#section-7.1.2)
* [RFC 7231 Retry-After](https://tools.ietf.org/html/rfc7231#section-7.1.3)
* [RFC 7231 Vary](https://tools.ietf.org/html/rfc7231#section-7.1.4)
* [RFC 7234 Warning](https://tools.ietf.org/html/rfc7234#section-5.5)
* [RFC 7232 ETag](https://tools.ietf.org/html/rfc7232#section-2.3)
* [RFC 7232 Last-Modified](https://tools.ietf.org/html/rfc7232#section-2.2)
* [RFC 7235 WWW-Authenticate](https://tools.ietf.org/html/rfc7235#section-4.1)
* [RFC 7235 Proxy-Authenticate](https://tools.ietf.org/html/rfc7235#section-4.3)
* [RFC 7233 Accept-Ranges](https://tools.ietf.org/html/rfc7233#section-2.3)
* [RFC 7231 Allow](https://tools.ietf.org/html/rfc7231#section-7.4.1)
* [RFC 7231 Server](https://tools.ietf.org/html/rfc7231#section-7.4.2)

#### Payload

[Stuff](#schema-stuff)

### Example

#### Request

```
{HTTP Method} {URI}
{Header}: {Value}
```

#### Response

```
Headers
```

```
Payload
```

## <a name="schema"></a>Schema

### <a name="schema-stuff"></a>Stuff

Name|Type|Format|Description
---|---|---|---
`name`|`type`|format|**Required** Description.

-------------

# Service v10

**Preview** _This is a prerelease version of the service and is subject to change before final release._

Include an introduction here as well as include an indented + bulleted table of contents which helps the reader navigate the various sections.

Include a [relative link](./schema/template.schema.json).

* [Sample for posting a payload](#post-a-payload)
* [Sample Schema](#schema-example)
	* [Sample Common](#schema-common)
  * [Another](#schema-another)

## <a name="post-a-payload"></a>Sample for posting a payload

Posting a payload is among the most common tasks for client code. Use this opening paragraph to explain at a high level what business activity is achieved when doing this task. Use a bulleted list to make it easier for the reader to follow. When the service receives a request:

* It will do this first.
* Then it will do this second.
* Finally it will do this thing here.

### Scopes

Name|Description
---|---
`customer`|Grants read + write access to all customer oriented resources.

### Request

#### Headers

* [RFC 7235 Authorization](https://tools.ietf.org/html/rfc7235#section-4.2)

#### Parameters

These are documentation examples and not API design guidelines -- you won't normally have request parameters for POST verb usage.

Name|Type|Format|Description
---|---|---|---
`storeIdentifier`|`string`|-|**Required** Note required when applicable.
`requestDate`|`string`|[`dateTime`](#dateTime)|This parameter isn't required. Link to format using anchor tags when applicable.

##### URI Template

```
https://example.com/api?store={storeIdentifier}&date={requestDate}
```

#### Payload

[Common](#schema-common)

### Response

#### Status Codes

* [200 OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)
* [201 Created](https://tools.ietf.org/html/rfc7231#section-6.3.2)
* [400 Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)

#### Headers

* [RFC 7231 Location](https://tools.ietf.org/html/rfc7231#section-7.1.2)

#### Payload

[Another](#schema-another)

### Example

#### Request

* Showing developers exactly what they can expect in request and response values when using is perhaps the simplest way to complete this portion of the documentation.
* Use triple backticks to create fenced code blocks.

```
GET https://example.com/stores/123
Accept: application/json
```

#### Response

* Ensure the headers are kept separate as a code block from the payload for ease of reading.
* Add the language identifier to any code blocks for syntax highlighting
* See the GitHub topic [Creating and highlighting code blocks](https://help.github.com/articles/creating-and-highlighting-code-blocks/) for more information.

```
HTTP/1.1 200 OK
Cache-Control: max-age=604800
Content-Type: application/json
Date: Wed, 06 Jul 2020 17:33:03 GMT
Etag: "359670651"
Expires: Wed, 13 Jul 2020 17:33:03 GMT
Last-Modified: Fri, 09 Aug 2020 23:54:35 GMT
Content-Length: 1270
```

```json
{
  "zeta": {
    "alpha": {
      "bravo": "charlie"
    }
  }
}
```
## <a name="schema-example"></a>Schema

### <a name="schema-common"></a>Common

Name|Type|Format|Description
---|---|---|---
<a name="dateTime"></a>`dateTime`|`string`|-|DateTime of where the transaction happened in format specified in ISO 8601. While the standard regards time zone designators as optional, we highly recommend to use UTC + Offset. For example, 2016-04-22T12:20+0700 (12:20 PM in Pacific Time).

### <a name="schema-another"></a>Another

Name|Type|Format|Description
---|---|---|---
`theRequestPayload`|`type`|JSON|**Required** The payload.
`theOtherRequestPayload`|`type`|JSON|It is possible to have multiple payloads when a multi-part post.
