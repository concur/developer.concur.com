---
title: Extract Web Service 
layout: reference
---

## Description

The Concur Extract Web Service provides an automated solution to clients who would like to request an extract of available data objects such as approved expense reports and payment requests (i.e., invoices or check requests). This web service solves several business problems:

* Files are difficult to manage: The service provides access to extract files using HTTPS to move or manage these files, providing an alternative to using a secure FTP site.
* Need for multiple extract schedules: Clients with organizational units around the globe can create and receive extracts at the times useful for their respective time zones. To accomplish this, clients will need to arrange with Concur to create a unique Extract Definition for each organizational unit that requires an extract file.
* Real-Time access to approved expense reports and payment requests: The service provides clients a way to receive extract files throughout the day including, but not limited to, outside the Overnight Processing Period (ONP).  To accomplish real-time access, the client can make requests for extracts every few minutes continuously throughout the day.

### Who should use this web service?

Developers and clients who use the Integration Administrator tool to manage their batch definitions and batch job schedules, and who use FTP to retrieve their batch files. This includes clients using Concur Professional or Premium.

Clients using Concur Small Business, Concur Standard, and the Concur Connect Developer Sandbox should refer to the [Payment Batch File ][1] web service.

### Product Restrictions

The Extract web service is not supported in the developer sandbox at this time.

Concur products are highly configurable, and not all clients will have access to all features.

Partner developers must determine which configurations are required for their solution prior to the review process. Use the [Developer Forum][3] if you have questions about the configuration settings.

Existing clients can work with Concur Advantage Technical Services to create custom applications that work with their configuration.

## Resources

* [Extract Definition][4]
* [Extract File][5]
* [Extract Job][6]


[1]: https://developer.concur.com/payment-batch
[2]: https://developer.concur.com/api-documentation/core-concepts
[3]: https://developer.concur.com/forums/concur-connect
[4]: https://developer.concur.com/extract/extract-definition-resource
[5]: https://developer.concur.com/extract/extract-file-resource
[6]: https://developer.concur.com/extract/extract-job-resource

