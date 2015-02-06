---
title: Close a Payment Batch 
layout: operation
---




This resource supports the following POST actions:

##  Post Payment Batch Close Request

| ----- |
|  Description |  Supported Content Types |
|  This request closes the specified batch, preventing any new expenses from entering it. After the batch closes, Concur creates the batch file containing the expense transaction information. If a batch ID for an already closed batch is sent, Concur regenerates the batch file for the specified batch. |   |
|  Query Parameters - Required |  Query Parameters - Optional |
|

* **batch/{_BatchID_}/close**  
The unique identifier for the batch, and the batch and close keywords.

Example: https://www.concursolutions.com/api/expense/paymentbatch/v1.2/batch/{_BatchID_}/close

**URI Source**: The URI is returned in the Batch-URL element of the [Get List of Payment Batches][1] function. Do **not** use the BatchID value from the [Get List of Payment Batches][1] function in the URI, as it contains the unencrypted batch ID.

 |  None |
|  Request Headers - Required |  Request Headers - Optional |
|  Authorization header with OAuth token for valid Concur user.

The OAuth consumer must have one of the following user roles in Concur: Company Administrator or Web Services Administrator for Professional, or Can Administer for Standard.

These roles allow the user to manage data for the entire company.

 |  None |

####  XML Example Request

    POST /api/expense/paymentbatch/v1.2/batch/12345678901234567890/close HTTPS 1.1
    Host: www.concursolutions.com
    Authorization: OAuth {access token}
    ...

##  Post Payment Batch Close Response

| ----- |
|  HTTP Responses |  Supported Content Types |
|  [HTTP Status Codes][2] |   |
|  Content Body |   |
|  The response contains a **BatchStatus** parent element with the following child elements:  

|  Element |  Description |
|  BatchStatus |  The current status of the specified batch. |   |
|  File-Url |  A URL for retrieving the extract file or files produced when the batch closes, with encrypted ID. |
|  Status |  The status of the request to close the batch. |
|  JobQueueKey |  The unique identifier for the batch job. |

 |

####  XML Example of Successful Response

    200 OK
    Content-Type: application/xml

    <BatchStatus xmlns="http://www.concursolutions.com/api/expense/paymentbatch/2011/11" xmlns:i="http://www.w3.org/2001/XMLSchema-instance">
        <BatchStatus>CLOSED</BatchStatus>
        <File-Url>http:// www.concursolutions.com/api/expense/paymentbatch/v1.1/batch/n$s4MtBKgvoJxAYcbggR7eD2jRU$sxYjePU/file</File-Url>
        <Status>SUCCESS</Status>
        <JobQueueKey>d$wIUEkl72LW299WTjTlskdy</JobQueueKey>
    </BatchStatus>

  


[1]: https://developer.concur.com/payment-batch-file/payment-batch-resource/get-list-payment-batches
[2]: https://developer.concur.com/reference/http-codes
