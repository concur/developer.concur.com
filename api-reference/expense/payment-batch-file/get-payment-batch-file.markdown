---
title: Get a payment batch file
layout: reference
---


## Description 
Requests the expense transaction data for the specified payment batch. 

##  Get Payment Batch File Request

### Request parameters

**{_BatchID_}/file:** Required.

**URI Source:** The URI is returned in the Batch-URL element of the [Get List of Payment Batches][1] function. Do **not** use the BatchID value from the [Get List of Payment Batches][1] function in the URI, as it contains the unencrypted batch ID.

Example:  
`https://www.concursolutions.com/api/expense/paymentbatch/v1.1/batch/_{BatchID}_/file`

### Headers

#### Authorization header
Required. Authorization header with OAuth token for valid Concur user. The OAuth consumer must have one of the following user roles in Concur: Company Administrator or Web Services Administrator for Professional, or Can Administer for Standard. These roles allow the user to manage data for the entire company.

#### Accept header

* application/zip
* text/csv

####  Example Request

    GET api/expense/paymentbatch/v1.1/batch/nYoPK$pZmcowMRUqcl5bnDAwwsMydyt$xd/file 
    Host: www.concursolutions.com
    Authorization: OAuth {access token}


##  Get Payment Batch File Response

This request will return the expense transaction data in text/csv format if there was a single file produced or as a zip archive if the batch is configured to produce more than one file. An example of a client who will receive multiple files is a client using QuickBooks, who receives one file formatted for import into QuickBooks (.IIF extension), and one file for the general ledger (.CSV extension), inside a .ZIP file.

### Content types

* application/zip
* text/csv

###  Example of Successful Response

    Single file from batch:
    200 OK
    Content-Type: text/csv
    100,AAA,BBBB,CCCC,...<rest of file>
    Multiple files from batch:
    200 OK
    Content-Type: application/zip
    <Zip File Contents>

  

[1]: https://developer.concur.com/payment-batch-file/payment-batch-resource/get-list-payment-batches

