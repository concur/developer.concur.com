---
title: Submit an expense report
layout: reference
---

Triggers the Submit workflow action for the specified report.

**Important Note**: This endpoint submits the expense report as if the original report owner had submitted it. Consult your company's Expense administrator to confirm that the web service should be allowed to submit reports on behalf of users. If you wish to enforce the expense report delegate functionality, use the [Get Expense Delegators][1] function to determine if the user in question has the correct permissions to submit on behalf of the report owner.

* [Request](#request)
* [Response](#response)
  * [Schema](#schema)
    * [Report Exception Schema](#report-exception)
* [Examples](#examples)

## <a name="request"></a>Request

### Request Parameters

#### Path Parameters

| Parameter | Required/Optional | Description |
|---------|-------------|---------|
|{_reportKEY_}/submit | required | The identifier for the desired report and the submit keyword.|

Example: `https://www.concursolutions.com/api/expense/expensereport/v1.1/report/{reportKEY}/submit `

**URI Source**: The reportId value is returned by the [Get List of Reports][2] and [Get Report Details][3] functions, and as part of the **Report-Details-Url** element of the [Post Expense Report Header][4] function.

### Content Types
application/xml

### Authorization Header
**Authorization**: This request requires an Authorization header with an OAuth token for a valid SAP Concur user.

**X_UserID**: This request requires an additional field in the authorization header, identifying the report owner. This identifier is the SAP Concur login for the user, and is often also the email address of the user. The field format is:  
X_UserID: expenseuser@example.com

## <a name="response"></a>Response

### <a name="schema"></a>Schema
This request will return a **ReportStatus** parent element with the following child elements.

#### Report Status Elements

|  Element |  Description |
| -------- | ------------ |
|  Message |  The error message. Only appears if a submission error was generated. |
|  Status |  The status of the report submit action. |

If the report submission triggered an exception, a **ReportExceptions** parent element will be provided, with a **ReportException** parent element for each exception. The **ReportException** element contains the following elements.

#### <a name="report-exception"></a>Report Exception Schema

|  Element |  Description |
| -------- | ------------ |
|  CrnCode |  The currency code of the entry. |
|  EventCode |  The event that resulted in the exception. |
|  ExceptionCode |  The company-defined exception code. |
|  ExceptionErrorCode |  The severity of the exception. Exceptions with ERROR as the code cannot be submitted. |
|  ExceptionVisibility |  Which users are able to see the exception. |
|  ExpKey |  The expense type key for the entry. |
|  ExpName |  The expense type name for the entry. |
|  IsCleared |  Whether the exception has been cleared by the Expense Processor. |
|  SeverityLevel |  A numeric value indicating the severity level of the exception. The value threshold is configurable. |
|  TransactionAmount |  The amount of the entry. |
|  TransactionDate |  The date of the entry. |
|  Type |  The exception type. |

## <a name="examples"></a>Examples

### XML Example Request

```http
POST https://www.concursolutions.com/api/expense/expensereport/v1.1/report/nxxKgLlnROz$sQ6SKJFjLNs4OWBErcJ8yX/submit HTTP/1.1
Authorization: OAuth {access token}
X-UserID: cmiller@example.com
...
```

### XML example of Successful Response

```xml
<ReportStatus xmlns="http://www.concursolutions.com/api/expense/expensereport/2011/03" xmlns:i="http://www.w3.org/2001/XMLSchema-instance">
    <Status>SUCCESS</Status>
</ReportStatus>
```

[1]: /api-reference/expense/expense-report/expense-delegators.html#get
[2]: /api-reference/expense/expense-report/reports.html#get
[3]: /api-reference/expense/expense-report/reports.html#getID
[4]: /api-reference/expense/expense-report/reports.html#post
[6]: https://developer.concur.com/reference/http-codes
