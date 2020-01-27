---
title: correlationid
layout: reference
---

The `concur-correlationid` is an SAP Concur specific custom header used for technical support in the form of a [RFC 4122 A](https://tools.ietf.org/html/rfc4122) universally unique identifier (UUID) uniform resource name (URN) namespace.

In order to assist with troubleshooting, SAP Concur responds with a unique `correlationid` in the response header. This unique code can be used during troubleshooting as it identifies the API call in the log files. You should record this information in your own API call logs as well so that you can pass this information on to the SAP Concur support team.

> **Note**: It's important to make the API call logs that include the `correlationid` available to your internal support team as they will need that information to open a support case.

Example of the `correlationid` in the response:

```
< HTTP/1.1 200 OK
< Server: cnqr-papeete
< Date: Mon, 04 Dec 2017 22:07:05 GMT
< Content-Type: application/json
< Content-Length: 2897
< Connection: keep-alive
< Concur-Correlationid: 2803b8f8-a42b-43c2-a739-b8768e4759b8
```
> **Note**: The response returned is not case sensitive so what you see in the example above, or in your own responses, may not match the header format.
