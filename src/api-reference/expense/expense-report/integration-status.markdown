---
title: Integration Status
layout: reference
---

The integration status of the supplied object. Currently supports expense reports.

This resource allows developers to ensure that the necessary transactions to account for expenses and arrange payment for the expenses in a specified report were created in the financial system prior to committing the expense report in Concur Expense. If they were, the developer uses this function to indicate the report was successfully integrated and move the report forward in the workflow to the Paid step. In Concur Expense, when a report arrives at the Paid workflow step the report is committed, meaning its data can't be changed and it can't be sent back in the workflow.

* [Request](#request)
* [Response](#response)
  * [Schema](#res-schema)
* [Examples](#examples)

### URI
`https://www.concursolutions.com/api/expense/expensereport/v2.0/integrationstatus/`

### Operations
[POST](#post)

## <a name="request"></a>Request

### Request Parameters

#### Path Parameters

| Parameter |Required/Optional| Description |
|-----------------|--------|-----------------------------|
| report/{ReportID} | required | The report keyword and the ReportID for the report that has been successfully integrated into the financial system. The ReportID is returned in the **ReportID** element by the Get List of Reports and the Get Report Details responses.

### Headers

#### Authorization Header
Authorization header with OAuth token for valid SAP Concur user. Required. The OAuth consumer must have the following user role: Web Services Administrator

#### Content-Type Header
* application/json
* application/xml

## <a name="response"></a>Response

### Content Types

* application/xml
* application/json

### <a name="res-schema"></a>Schema

The response will include an **ActionStatus** parent element (XML), or an object (JSON) with the following child elements (XML) or name/value pairs (JSON).

#### ActionStatus elements

|Element | Description |
|--- | --- |
| Status | Whether the request was successful. Possible values: SUCCESS, FAILURE. |
| Message | Provides further details for errors. |

##  <a name="examples"></a>Examples

### XML Example Request

```http
POST https://www.concursolutions.com/api/expense/expensereport/v2.0/integrationstatus/report/nx2WRNzp18$wjehk%wqEL6EDHRwi9r$paQS1UqyL6a454QitqQ HTTP/1.1
Authorization: OAuth {access token}
Accept: application/xml
...
```

### XML Example of Successful Response

```http
HTTP/1.1 200 OK
Content-Type: application/xml

<ActionStatus xmlns="http://www.concursolutions.com/api/expense/expensereport/2011/03" xmlns:i="http://www.w3.org/2001/XMLSchema-instance">
    <Message>SUCCESS</Message>
    <Status>SUCCESS</Status>
</ActionStatus>
```

###  JSON Example of Successful Response

```http
HTTP/1.1 200 OK
Content-Type: application/json

{
  "Status": "SUCCESS",
  "Message": "SUCCESS"
}
```

###  JSON Example of Response with Error

```http
HTTP/1.1 200 OK
Content-Type: application/json

{
  "Status": "FAILURE",
  "Message": "To use the POST Expense Journal Entry Job Key the report must be at the Processing Payment or Payment Confirmed Payment Status."
}
```
