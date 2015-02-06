[Source](https://developer.concur.com/payment-batch-file/payment-batch-file-resource/get-payment-batch-file "Permalink to Get a Payment Batch File")

# Get a Payment Batch File

This resource supports the following GET actions:

##  Get Payment Batch File Request

| ----- |
|  Description |  Supported Accept Types |
|  Requests the expense transaction data for the specified payment batch. |   |
|  Query Parameters - Required |  Query Parameters - Optional |
|

Example:  
https://www.concursolutions.com/api/expense/paymentbatch/v1.1/batch/_{BatchID}_/file

**URI Source**: The URI is returned in the Batch-URL element of the [Get List of Payment Batches][1] function. Do **not** use the BatchID value from the [Get List of Payment Batches][1] function in the URI, as it contains the unencrypted batch ID.

 |

None

 |
|  Request Headers - Required |  Request Headers - Optional |
|  Authorization header with OAuth token for valid Concur user.

The OAuth consumer must have one of the following user roles in Concur: Company Administrator or Web Services Administrator for Professional, or Can Administer for Standard.

These roles allow the user to manage data for the entire company.

 |  None |

####  XML Example Request

    GET api/expense/paymentbatch/v1.1/batch/nYoPK$pZmcowMRUqcl5bnDAwwsMydyt$xd/file HTTPS 1.1
    Host: www.concursolutions.com
    Authorization: OAuth {access token}
    ...

##  Get Payment Batch File Response

| ----- |
|  HTTP Responses |  Supported Content Types |
|  [HTTP Status Codes][2] |   |
|  Content Body |   |
|  This request will return the expense transaction data in text/csv format if there was a single file produced or as a zip archive if the batch is configured to produce more than one file. An example of a client who will receive multiple files is a client using QuickBooks, who receives one file formatted for import into QuickBooks (.IIF extension), and one file for the general ledger (.CSV extension), inside a .ZIP file. |

####  XML Example of Successful Response

    Single file from batch:
    200 OK
    Content-Type: text/csv
    100,AAA,BBBB,CCCC,...<rest of file>

    Multiple files from batch:
    200 OK
    Content-Type: application/zip
    <Zip File Contents>

  
Last Modified: 9/3/2013 9:43 AM PDT

[1]: https://developer.concur.com/node/427
[2]: https://developer.concur.com/node/205
