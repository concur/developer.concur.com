---
title: Payment Batches
layout: reference
---


# Payment Batches
The Payment Batch File web service provides an automated solution to clients who would like to manage their payment batches and collect their batch files.


* [Retrieve the list of payment batches](#getpaymentbatches)
* [Close a payment batch](#closepaymentbatch)
* [Retrieve a payment batch file](#getbatchfile)

### Version
1.1 for GET methods  
1.2 for POST method

## <a name="getpaymentbatches"></a>Retrieve the list of payment batches

Retrieves the list of payment batches with an optional requested status.

    GET /expense/paymentbatch/v1.1/batchlist/


### Parameters

Name | Type | Format | Description
-----|------| ------ | --------------
`batchlist`|`string` | | **Required.** The batchlist keyword.
`Status` | `Boolean` |  | The status of the batches. Can be either OPEN or CLOSED.


### Response

Name | Type | Format | Description
-----|------| ------ | --------------
`BatchName`|`string` | | The batch name, as it appears in Payment Manager.
`BatchID`|`string` | | The unique identifier for the batch.
`BatchTotal`|`Decimal` | | The batch total amount.
`Currency`|`string` | | The [3-letter ISO 4217 currency code](http://en.wikipedia.org/wiki/ISO_4217) for the batch.
`Count`|`string` | | The number of payment demands in the batch.
`Type`|`string` | | The payee of the batch. Either Employee or Card Program.
`PaymentMethod`|`string` | | The reimbursement method for the batch. Either Expense Pay by Concur, Company Check (via Accounts Payable), ADP (via EPIP file), or Other Reimbursement Methods.
`Batch-URL`|`string` | | The URL to use as a basis for other actions, such as closing the batch.


## <a name="closepaymentbatch"></a>Close a payment batch

This request closes the specified batch, preventing any new expenses from entering it. After the batch closes, Concur creates the batch file containing the expense transaction information. If a batch ID for an already closed batch is sent, Concur regenerates the batch file for the specified batch.

    POST /expense/paymentbatch/v1.2/batch/{BatchID}/closed


### Parameters

Name | Type | Format | Description
-----|------| ------ | --------------
`BatchID`|`string` | | **Required.** The unique identifier for the batch.
`close` | `string` |  | **Required.** The close keyword


### Response

Name | Type | Format | Description
-----|------| ------ | --------------
`BatchStatus`|`string` | | The current status of the specified batch.
`File-Url`|`string` | | A URL for retrieving the extract file or files produced when the batch closes, with encrypted ID.
`Status`|`string` | | The status of the request to close the batch.
`JobQueueKey`|`string` | | The unique identifier for the batch job.


## <a name="getbatchfile"></a>Retrieve a payment batch file

Requests the expense transaction data for the specified payment batch.

    GET /expense/paymentbatch/v1.1/batch/_{BatchID}_/file

### Parameters

Name | Type | Format | Description
-----|------| ------ | --------------
`BatchID`|`string` | | **Required.** URI Source: The URI is returned in the Batch-URL element of the Get List of Payment Batches function. Do not use the BatchID value from the Get List of Payment Batches function in the URI, as it contains the unencrypted batch ID.


### Response

This request will return the expense transaction data in text/csv format if there was a single file produced or as a zip archive if the batch is configured to produce more than one file. An example of a client who will receive multiple files is a client using QuickBooks, who receives one file formatted for import into QuickBooks (.IIF extension), and one file for the general ledger (.CSV extension), inside a .ZIP file.  






