---
title: Get a list of payment batches
layout: reference
---



## Description
Retrieves the list of payment batches with an optional requested status. 

##  Request

### Request parameters

**batchlist/:** Required. The batchlist keyword.

**{_Status_}:** Optional. The status of the batches. Can be either OPEN or CLOSED.

Example:  
`https://www.concursolutions.com/api/expense/paymentbatch/v1.1/batchlist/OPEN `

### Headers

#### Authorization header

Required. Authorization header with OAuth token for valid Concur user. The OAuth consumer must have one of the following user roles in Concur: Company Administrator or Web Services Administrator for Professional, or Can Administer for Standard. These roles allow the user to manage data for the entire company.

#### Accept header
application/xml

####  XML Example Request

```
    GET /api/expense/paymentbatch/v1.1/batchlist/OPEN
    Host: www.concursolutions.com
    Authorization: OAuth {access token}
```    

##  Response

###Root elements
This request will return a **BatchList** parent element and a **BatchSummary** child element for each batch. The **BatchSummary** elements will have the following child elements. 

####BatchSummary child elements

Element | Description
--- | ---
BatchName |  The batch name, as it appears in Payment Manager.
BatchID |  The unique identifier for the batch.
BatchTotal |  The batch total amount.
Currency |  The [3-letter ISO 4217 currency code][2] for the batch.
Count |  The number of payment demands in the batch.
Type |  The payee of the batch. Either Employee or Card Program. 
PaymentMethod |  The reimbursement method for the batch. Either Expense Pay by Concur, Company Check (via Accounts Payable), ADP (via EPIP file), or Other Reimbursement Methods.
Batch-URL |  The URL to use as a basis for other actions, such as closing the batch. 

####  XML Example of Successful Response

```xml
    <BatchList xmlns="http://www.concursolutions.com/api/expense/paymentbatch/2011/11">
        <BatchSummary>
            <BatchName>USD: Employees Batch Paid by Expense Pay</BatchName>
            <BatchID>13cb38dc-46d2-4e0c-8973-8c7667806b47</BatchID>
            <BatchTotal>334.21</BatchTotal>
            <Currency>USD</Currency>
            <Count>10</Count>
            <Type>Employee</Type>
            <PaymentMethod>Expense Pay by Concur</PaymentMethod>
            <Batch-URL>https://www.concursolutions.com/api/expense/paymentbatch/v1.1/batch/12345678901234567890</Batch-URL>
        </BatchSummary>
        <BatchSummary>
            <BatchName>USD Company Paid: Card Batch Paid by Company Check (via Accounts Payable)</BatchName>
            <BatchID>88de2u62-77sk-ldie-2j23-182733j263es</BatchID>
            <BatchTotal>123.88</BatchTotal>
            <Currency>USD</Currency>
            <Count>3</Count>
            <Type>Card Program</Type>
            <PaymentMethod>Company Check (via Accounts Payable)</PaymentMethod>
            <Batch-URL>https://www.concursolutions.com/api/expense/paymentbatch/v1.1/batch/7786363756383463637</Batch-URL>
        </BatchSummary>
        <BatchSummary>
            <BatchName>USD: Employees Batch Paid by Company Check (via Accounts Payable)</BatchName>
            <BatchID>fj8390sk-0foe-a2w3-838s-owi2188dk7ej</BatchID>
            <BatchTotal>45.87</BatchTotal>
            <Currency>USD</Currency>
            <Count>1</Count>
            <Type>Employee</Type>
            <PaymentMethod>Company Check (via Accounts Payable)</PaymentMethod>
            <Batch-URL>https://www.concursolutions.com/api/expense/paymentbatch/v1.1/batch/8873837365536353637</Batch-URL>
        </BatchSummary>
    </BatchList>
```
  


[1]: https://developer.concur.com/reference/http-codes
[2]: http://en.wikipedia.org/wiki/ISO_4217
