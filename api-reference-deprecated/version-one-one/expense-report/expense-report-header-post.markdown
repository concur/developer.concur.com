---
title: Post an expense report header
layout: reference
---

## Post Expense Report Header

### Description

**NOTE:** Find the newer version 3.0 [here.](/api-reference/expense/expense-report/reports.html)

Posts the expense report header information for a new or existing report for the user specified in the OAuth access token. If the OAuth consumer has the necessary roles, they can update reports that belong to other users. Use this function to create a report, then use the Post Expense Entry function to send expense line items.

**NOTES**:

* Posting expense report information is a multi-stage process. 
* Reports with the following statuses can't be modified:
    * Processing Payment
    * Paid
    * Payment Confirmed

### Request

#### Request parameters

##### Path parameters

| Parameter |Required/Optional| Description |
|-----------------|--------|-----------------------------|
| {_reportId_} | optional | The unique identifier for the report. Only used when updating an existing report. |

Example: `https://www.concursolutions.com/api/expense/expensereport/v1.1/report/{reportId}`

**URI Source**: The reportId value is returned by the Get List of Reports and Get Report Details functions, and as part of the **Report-Details-Url** element returned by this function.

#### Headers

##### Authorization header

Authorization header with OAuth token for valid Concur user. Required.

The Concur user must have one of the following roles in Expense:

* Expense User: This role allows the user to create and modify their own reports.
* Web Services Administrator (Professional/Premium): This role allows the user to modify reports for all users.
* Can Administer (Standard): This role allows the user to modify reports for all users.

##### Content-Type header

application/xml

#### Content body
This request should contain a **Report** parent element with the following child elements.

##### Report elements

|  Element | Required (must contain value)? | Description |
| ---------| ------------------------------ | ----------- |
|  Name |  Y |  The expense report name.  |
|  Purpose |  Depends on configuration |  The business purpose of the report. Maximum length: 500. |
|  Comment |  Depends on configuration |  The report header comment. Maximum length: 500. |
|  OrgUnit1 through OrgUnit6 |  Depends on configuration |  The custom Organization Unit fields. May be required depending on configuration. Refer to the Processes > **Post Expense Report Data** section of Expense Report for the steps necessary to gather required field information. |
|  Custom1 through Custom20 |  Depends on configuration | The custom fields on the Expense Report Header form. May be required depending on configuration. Refer to the Processes > **Post Expense Report Data** section of Expense Report for the steps necessary to gather required field information. <br> **NOTE**: If any of the custom fields are configured to contain list values, refer to the Posting Custom List Items page for information on how to correctly submit list item values. |
|  UserDefinedDate |  Depends on configuration |  The date the user selected for the report. Format: YYYY-MM-DD hh:mm:ss.0 |

###  Post Expense Report Header Response

#### Content types 
application/xml

#### Content body
The response will include a **ReportDetails** parent element. This element will contain a **ReportStatus** child element. The **ReportStatus** element will contain the following child elements.

##### ReportStatus elements

|  Element |  Description |
| ----- | ----- |
|  Status |  The status of the request.  |
|  Report-Details-Url |  The URI to use when posting report details to this report. |

### Examples

####  XML example of new report request

```
    POST https://www.concursolutions.com/api/expense/expensereport/v1.1/report HTTP/1.1
    Authorization: OAuth {access token}
    ...

    Content-Type: application/xml
    <Report xmlns="http://www.concursolutions.com/api/expense/expensereport/2011/03">
        <Name>January Expenses</Name>
        <Purpose>All expenses for January</Purpose>
        <Comment>Includes Client Meetings.</Comment>
        <OrgUnit1>US</OrgUnit1>
        <OrgUnit2>NW</OrgUnit2>
        <OrgUnit3>Redmond</OrgUnit3>
        <Custom1>Client</Custom1>
        <Custom2>Local</Custom2>
        <UserDefinedDate>2011-03-26 15:15:07.0</UserDefinedDate>
    </Report>
```

####  XML example of successful response

```
    200 OK
    Content-Type: application/xml
    <ReportDetails>
        <ReportStatus xmlns="http://www.concursolutions.com/api/expense/expensereport/2011/03" xmlns:i="http://www.w3.org/2001/XMLSchema-instance">
            <Status>SUCCESS</Status>
            <Report-Details-Url>https://www.concursolutions.com/api/expense/expensereport/v1.1/report/nxxKgLlnRODp$sie8Hq1UviOJ2AbpS7dCP</Report-Details-Url>
        </ReportStatus>
    </ReportDetails>
```

##  Post Report Header Batch Request

###  Description
Posts a batch of expense report headers. The expense report header contains classification information for the expense report. Use this endpoint to create a batch of reports, then use the Post Expense Entry function to send expense line items. All batch operations allow up to 1000 headers per batch. If a batch request with over 1000 headers is sent, only the first 1000 headers in the batch will be processed. <br>**NOTE**: Posting expense report information is a multi-stage process. Refer to the  Processes  section of the Expense Report Web Service page for the steps required to post new expense reports and entries.

### Request

#### Request parameters

##### Path parameters

| Parameter |Required/Optional| Description |
| **batch**| required | The batch keyword. |

Example: `https://www.concursolutions.com/api/expense/expensereport/v1.1/report/batch`

#### Headers

##### Authorization header

The Concur user must have one of the following roles in Expense:

* Expense User: This role allows the user to create and modify their own reports.
* Web Services Administrator (Professional/Premium): This role allows the user to create and modify reports for all users.
* Can Administer (Standard): This role allows the user to create and modify reports for all users.

##### Content-Type header
application/xml

#### Content body
This request should contain a **batch** parent element with a **Report** parent element for each included report. The **Report** element contains the following child elements.

##### Report elements

| Element | Required (must contain value)? | Description |
| ------- | ------------------------------ | ----------- |
|  Index |  Y |  The header's location in the batch. Should start at 1 and increment sequentially. This value is used to identify the record if there is an error.   |
|  LoginId |  Y |  The report owner's Concur login ID. |
|  Name |  Y |  The expense report name. |
|  Purpose |  Depends on configuration |  The business purpose of the report. Maximum length: 500. |
|  Comment |  Depends on configuration |  The report header comment. Maximum length: 500. |
|  OrgUnit1 through OrgUnit6 |  Depends on configuration |  The custom Organization Unit fields. May be required depending on configuration. Refer to the Processes > **Post Expense Report Data** section of Expense Report for the steps necessary to gather required field information. |
|  Custom1 through Custom20 |  Depends on configuration | The custom fields on the Expense Report Header form. May be required depending on configuration. Refer to the Processes > **Post Expense Report Data** section of Expense Report for the steps necessary to gather required field information. <br> **NOTE**: If any of the custom fields are configured to contain list values, please refer to the Posting Custom List Items page for information on how to correctly submit list item values. |
|  UserDefinedDate |  Depends on configuration |  The date the user selected for the report. Format: YYYY-MM-DD hh:mm:ss.0 |

##  Post Expense Report Header Batch Response

### Content types
application/xml

### Content Body
This request will return a **report-batch-result** parent element with the following child elements.  

#### report-batch-result elements

| Element | Description |
| ------- | ----------- |
|  records-succeeded |  The number of records processed that were successfully added.  |
|  records-failed |  The number of records processed that were not successfully added. |
|  errors |  This will contain an **error** parent element for each record failure. For details about the **error** child elements, see the **error child elements** table below.|
|  ReportDetails |  This parent element will contain a **ReportStatus** child element for all report headers that did not cause an error. For details about the **ReportStatus** child elements, see the **ReportStatus child elements** table below.|

### error elements

| Element | Description |
| --------| ----------- |
| Index | The header's location in the batch |
|  LoginID |  The user's Concur login ID. | 
|  message |  The error message. |

### ReportStatus elements

| Element | Description |
| --------| ----------- |
|  Status |  The status of the request. | 
|  Report-Details-Url |  The URI to use when posting report details to this report. |

### Examples

####  XML example request

```
    POST https://www.concursolutions.com/api/expense/expensereport/v1.1/report/batch HTTP/1.1
    Authorization: OAuth {access token}
    ...

    Content-Type: application/xml
    <batch xmlns="http://www.concursolutions.com/api/expense/expensereport/2011/03">
        <Report>
            <Index>1</Index>
            <LoginId>cmiller@example.com</LoginId>
            <Name>January Expenses</Name>
            <Purpose>All expenses for January</Purpose>
            <Comment>Includes Client Meetings.</Comment>
            <OrgUnit1>US</OrgUnit1>
            <OrgUnit2>NW</OrgUnit2>
            <OrgUnit3>Redmond</OrgUnit3>
            <Custom1>Client</Custom1>
            <Custom2>Local</Custom2>
            <UserDefinedDate>2011-01-26 12:15:00.0</UserDefinedDate>
        </Report>
        <Report>
            <Index>2</Index>
            <LoginId>tbrown@example.com</LoginId>
            <Name>Trip to New York </Name>
            <Purpose>New York Sales Meeting </Purpose>
            <Comment></Comment>
            <OrgUnit1>US</OrgUnit1>
            <OrgUnit2></OrgUnit2>
            <OrgUnit3>Tucson</OrgUnit3>
            <Custom1>Client</Custom1>
            <Custom2>Remote</Custom2>
            <UserDefinedDate>2011-02-04 15:25:07.0</UserDefinedDate>
        </Report>
    </batch>
```

####  XML example response with success and failure

```
    200 OK
    Content-Type: application/xml
    <report-batch-result xmlns="http://www.concursolutions.com/api/expense/expensereport/2011/03" xmlns:i="http://www.w3.org/2001/XMLSchema-instance">
        <records-succeeded>1</records-succeeded>
        <records-failed>1</records-failed>
        <errors>
            <error>
                <Index>2</Index>
                <LoginID>tbrown@example.com</LoginID>
                <message>Invalid Value for:OrgUnit2</message>
            </error>
        </errors>
        <ReportDetails>
            <ReportStatus >
                <Index>1</Index>
                <Status>SUCCESS</Status>
                <Report-Details-Url>https://www.concursolutions.com/api/expense/expensereport/v1.1/nxxKgLlnRODp$sie8Hq1UviOJ2AbpS7dCP</Report-Details-Url>
            </ReportStatus>
        </ReportDetails>
    </report-batch-result>
```


