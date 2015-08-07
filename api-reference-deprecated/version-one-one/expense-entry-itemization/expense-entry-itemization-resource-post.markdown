---
title: POST Expense Entry Itemization
layout: reference
---

## Description
Creates or updates an itemization record for the specified expense entry.

**NOTE**: Posting expense report information is a multi-stage process. Refer to the Processes section of the Expense Report Web Service page for the steps required to post new expense reports and entries.

## Request

### Request parameters

#### Path parameters

| Parameter |Required/Optional| Description |
|-----------------|--------|-----------------------------|
| {_reportId_} | required | The unique identifier for the expense report.|
|{_entryId_}/Itemization | required | The unique identifier for the expense entry and the Itemization keyword.|
|{_itemizationID_} | optional | The unique identifier for the itemization. |

Examples: <br/>
`https://www.concursolutions.com/api/expense/expensereport/v1.1/report/{reportId}/entry/{entryId}/itemization`<br/>
`Example: https://www.concursolutions.com/api/expense/expensereport/v1.1/report/{reportId}/entry/{entryId}/itemization/{itemizationId}`

**URI Sources**: 

* The reportId value is returned by the Get List of Reports function, and as part of the **Report-Details-Url** element of the Post Expense Report Header function. 
* The entryId value is returned in the **RpeKey** element of the Get Report Details function.
* The itemizationId is returned as part of the **Itemization-Url** value returned by this function.

### Headers

#### Authorization header

Authorization header with OAuth token for valid Concur user. Required.

The OAuth Consumer must have one of the following roles to post itemizations for expenses in reports that they do not own: Web Services Admin for Professional, or Can Administer for Standard.

#### Content-Type header
application/xml

### Request body

This request contains an **ExpenseItemizations** parent element with an **Itemization** parent element for each included itemization. The **Itemization** parent element has the following child elements.

#### Itemization elements

|  Element |  Required (must contain value)? |  Description |
| -------- | -------- | ----------- |
|  ExpKey |  Y |  The expense type key for the expense. Expense Type Keys are returned in the **ExpKey** element by the Get Expense Group Configuration endpoint. The expense type key cannot be modified when updating expense entries. |
|  Description |  Depends on configuration |  The description for the expense. |
|  TransactionAmount |  Y |  The total amount of the itemization in the original currency, with up to three decimal places. Example: 123.654 |
|  PostedAmount |  Depends on configuration |  The amount of the itemization in the user's reimbursement currency, with up to three decimal places. Example: 123.654. May vary from transaction amount if some of the expense is marked personal or if it has been converted to another currency. See **Notes** for more information. |
|  Custom1 through Custom20 |  Depends on configuration | The Expense Entry Form custom fields. Itemizations are child entries to the expense entry, and they share the custom fields. May be required depending on configuration. Refer to the Processes, **Post Expense Report Data** section of Expense Report for the steps necessary to gather required field information. <br/>**NOTE**: If any of the custom fields are configured to contain list values, please refer to the Posting Custom List Items page for information on how to correctly submit list item values.|
|  IsPersonal |  N |  Whether the expense entry is a personal expense. Personal expenses are not reimbursed in Concur Expense. Personal expenses cannot be itemized. Format: N |
|  Comment |  Depends on configuration |  The itemization comment. |

NOTES:

* The update request must include the **ExpKey** and **TransactionAmount** fields. All other fields only need to be included if they were updated.
* Update requests cannot change the **ExpKey** for an existing entry.
* When handling foreign currency transactions, the **CrnCode** and **TransactionAmount** values should indicate the original transaction amount and currency. The **PostedAmount** value should contain the transaction amount converted into the posting currency (the user's reimbursement currency). Concur will calculate the exchange rate for the expense based on these two fields.

## Response

### Response body
This request will return an **ItemizationStatusList** parent element with an **ItemizationStatus** child element for each posted itemization. The **ItemizationStatus** element will contain the following child elements.

#### ItemizationStatus elements

|  Element |  Description |
| -------- | ------------ |
|  Index |  The entry's sequence in the request. |
|  Status |  The status of the request. Possible values are: <br> 200: The itemization was successfully saved. <br> 400: The Request includes an error such as a syntax error or missing required element. <br> 404: The Itemization URI is in the correct syntax, but the system can't find the itemization. It may have been deleted from the system. <br> 500: The request has the correct syntax and refers to an existing itemization, but the system was unable to save due to a system conflict. |
|  Itemization-Url |  The URI to get the itemization details. |

## Examples

### XML example request

```xml
POST https://www.concursolutions.com/api/expense/expensereport/v1.1/report/nxxKgLlnROz$sQ6SKJFjLNs4OWBErcJ8yX/entry/nE0avYnILNNi9qkVyS3lYPuv4Mop4QmVs/Itemization  HTTP/1.1
Authorization: OAuth {access token}
 ...
    <ExpenseItemizations xmlns="http://www.concursolutions.com/api/expense/expensereport/2011/03">
        <Itemization>
            <ExpKey>DINNR</ExpKey>
            <Description>Dinner</Description>
            <TransactionAmount>56.00</TransactionAmount>
            <PostedAmount>56.00</PostedAmount>
            <Comment>Dinner</Comment>
            <Custom1>Dinner</Custom1>
            <Custom2>Room Service</Custom2>
            <Custom5>Too late for restaurant</Custom5>
            <IsPersonal>N</IsPersonal>
        </Itemization>
        <Itemization>
            <ExpKey>LUNCH</ExpKey>
            <Description>Lunch</Description>
            <TransactionAmount>24.64</TransactionAmount>
            <PostedAmount>24.64</PostedAmount>
            <Comment>Lunch</Comment>
            <IsPersonal>N</IsPersonal>
        </Itemization>
        <Itemization>
            <ExpKey>BRKFT</ExpKey>
            <Description>BreakFast</Description>
            <TransactionAmount>15.34</TransactionAmount>
            <PostedAmount>15.34</PostedAmount>
            <Comment>Breakfast</Comment>
            <IsPersonal>N</IsPersonal>
        </Itemization>
    </ExpenseItemizations>
```

### XML example response

```xml
    200 OK
    Content-Type: application/xml
    <ItemizationStatusList xmlns="http://www.concursolutions.com/api/expense/expensereport/2011/03" xmlns:i="http://www.w3.org/2001/XMLSchema-instance">
        <ItemizationStatus>
            <Index>1</Index>
            <Status>SUCCESS</Status>
            <ItemizedEntry-Details-Url>https://www.concursolutions.com/api/expense/expensereport/v1.1/report/nxxKgLlnROz3zHJBCRk$puJLmXp25RsAwp/entry/nE0avYnILNNi9qkVyS3lYPuv4Mop4QmVs/itemization/nE0avYnILN69JgpJGuSCy5qqirEfFcds4</ItemizedEntry-Details-Url>
        </ItemizationStatus>
        <ItemizationStatus>
            <Index>2</Index>
            <Status>SUCCESS</Status>
            <ItemizedEntry-Details-Url>https://www.concursolutions.com/api/expense/expensereport/v1.1/report/nxxKgLlnROz3zHJBCRk$puJLmXp25RsAwp/entry/nE0avYnILNNi9qkVyS3lYPuv4Mop4QmVs/itemization/nE0avYnILN65lGE4Zka1YOp608re6ASJb</ItemizedEntry-Details-Url>
        </ItemizationStatus>
        <ItemizationStatus>
            <Index>3</Index>
            <Status>SUCCESS</Status>
            <ItemizedEntry-Details-Url>https://www.concursolutions.com/api/expense/expensereport/v1.1/report/nxxKgLlnROz3zHJBCRk$puJLmXp25RsAwp/entry/nE0avYnILNNi9qkVyS3lYPuv4Mop4QmVs/itemization/nE0avYnILN6nw6Hi0jhAuYXAXiXNej7zb</ItemizedEntry-Details-Url>
        </ItemizationStatus>
    </ItemizationStatusList>
```


