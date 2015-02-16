---
title: Payment Batch File Resource 
layout: resource
---


## Description

The expense transaction data for a closed payment batch. Each batch file represents a combination of a payee (employee or card issuer) and a reimbursement method (Company Check, ADP, etc). Works With These Concur Products

* **Expense** for Concur Professional/Premium
* **Expense** for Concur Standard

## Resource URI

`https://www.concursolutions.com/api/expense/paymentbatch/v1.1/batch/{_BatchID_}/file`

## Headers

### Content-Type header
application/xml

### Accept header
application/xml

##Operations

[GET][1]

##Related Resources

[Payment Batch][2]

[1]: https://developer.concur.com/payment-batch-file/payment-batch-file-resource/get-payment-batch-file
[2]: https://developer.concur.com/payment-batch/payment-batch-resource
