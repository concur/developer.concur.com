[Source](https://developer.concur.com/expense-report/expense-report-header-resource/expense-report-header-resource-post "Permalink to Expense Report Header Resource: POST")

# Expense Report Header Resource: POST

This resource supports the following POST actions:

##  Post Expense Report Header Request

| ----- |
|  Description |
|  Posts the expense report header information for a new or existing report for the user specified in the [OAuth][1] access token. If the OAuth consumer has the necessary roles, they can update reports that belong to other users. Use this function to create a report, then use the [Post Expense Entry][2] function to send expense line items.

**NOTES**:

* Posting expense report information is a multi-stage process. Refer to the [Processes][3] section of the Expense Report Web Service page for the steps required to post new expense reports and entries.
* Reports with the following statuses can't be modified:
    * Processing Payment
    * Paid
    * Payment Confirmed
 |
|  Query Parameters - Required |  Supported Content Types |
|  None |   |
|  Query Parameters - Optional |   |
|

* **{_reportId_}**  
The unique identifier for the report. Only used when updating an existing report.

Example:

https://www.concursolutions.com/api/expense/expensereport/v1.1/report/_{reportId}_

**URI Source**: The reportId value is returned by the [Get List of Reports][4], and [Get Report Details][5] functions, and as part of the **Report-Details-Url** element returned by this function.

 |
|  Request Headers - Required |
|  Authorization header with OAuth token for valid Concur user.

The Concur user must have one of the following roles in Expense:

* Expense User: This role allows the user to create and modify their own reports.
* Web Services Administrator (Professional/Premium): This role allows the user to modify reports for all users.
* Can Administer (Standard): This role allows the user to modify reports for all users.
 |
|  Request Headers - Optional |
|  None |
|  Content Body |
|  This request should contain a **Report** parent element with the following child elements:  

|  Element |  Required (must contain value)? |  Description |
|  Name |  Y |  The expense report name. |   |
|  Purpose |  Depends on configuration |  The business purpose of the report. Maximum length: 500. |
|  Comment |  Depends on configuration |  The report header comment. Maximum length: 500. |
|  OrgUnit1 through OrgUnit6 |  Depends on configuration |  The custom Organization Unit fields. May be required depending on configuration. Refer to the [Processes][3] > **Post Expense Report Data** section of Expense Report for the steps necessary to gather required field information. |
|  Custom1 through Custom20 |  Depends on configuration |

The custom fields on the Expense Report Header form. May be required depending on configuration. Refer to the [Processes][3] > **Post Expense Report Data** section of Expense Report for the steps necessary to gather required field information.

**NOTE**: If any of the custom fields are configured to contain list values, please refer to the [Posting Custom List Items][6] page for information on how to correctly submit list item values.

 |
|  UserDefinedDate |  Depends on configuration |  The date the user selected for the report. Format: YYYY-MM-DD hh:mm:ss.0 |

 |

####  XML Example of New Report Request

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

##  Post Expense Report Header Response

| ----- |
|  HTTP Responses |  Supported Content Types |
|  [HTTP Status Codes][7] |   |
|  Content Body |   |
|  The response will include a **ReportDetails** parent element. This element will contain a **ReportStatus** child element. The ReportStatus element will contain the following child elements:

|  Element |  Description |
|  Status |  The status of the request. |   |
|  Report-Details-Url |  The URI to use when posting report details to this report. |

 |

####  XML Example of Successful Response

    200 OK
    Content-Type: application/xml
    <ReportDetails>
        <ReportStatus xmlns="http://www.concursolutions.com/api/expense/expensereport/2011/03" xmlns:i="http://www.w3.org/2001/XMLSchema-instance">
            <Status>SUCCESS</Status>
            <Report-Details-Url>https://www.concursolutions.com/api/expense/expensereport/v1.1/report/nxxKgLlnRODp$sie8Hq1UviOJ2AbpS7dCP</Report-Details-Url>
        </ReportStatus>
    </ReportDetails>

##  Post Report Header Batch Request

| ----- |
|  Description |  Supported Content Types |
|

Posts a batch of expense report headers. The expense report header contains classification information for the expense report. Use this endpoint to create a batch of reports, then use the [Post Expense Entry][2] function to send expense line items. All batch operations allow up to 1000 headers per batch. If a batch request with over 1000 headers is sent, only the first 1000 headers in the batch will be processed.

**NOTE**: Posting expense report information is a multi-stage process. Refer to the [ Processes][3]  section of the Expense Report Web Service page for the steps required to post new expense reports and entries.

 |   |
|  Query Parameters - Required |  Query Parameters - Optional |
|

Example: https://www.concursolutions.com/api/expense/expensereport/v1.1/report/batch

 |  None |
|  Request Headers - Required |  Request Headers - Optional |
|  The Concur user must have one of the following roles in Expense:

* Expense User: This role allows the user to create and modify their own reports.
* Web Services Administrator (Professional/Premium): This role allows the user to create and modify reports for all users.
* Can Administer (Standard): This role allows the user to create and modify reports for all users.
 |  None |
|  Content Body |   |
|  This request should contain a **batch** parent element with a **Report** parent element for each included report. The **Report** element contains the following child elements:  

|  Element |  Required (must contain value)? |  Description |
|  Index |  Y |  The header's location in the batch. Should start at 1 and increment sequentially. This value is used to identify the record if there is an error. |   |
|  LoginId |  Y |  The report owner's Concur login ID. |
|  Name |  Y |  The expense report name. |
|  Purpose |  Depends on configuration |  The business purpose of the report. Maximum length: 500. |
|  Comment |  Depends on configuration |  The report header comment. Maximum length: 500. |
|  OrgUnit1 through OrgUnit6 |  Depends on configuration |  The custom Organization Unit fields. May be required depending on configuration. Refer to the [Processes][3] > **Post Expense Report Data** section of Expense Report for the steps necessary to gather required field information. |
|  Custom1 through Custom20 |  Depends on configuration |

The custom fields on the Expense Report Header form. May be required depending on configuration. Refer to the [Processes][3] > **Post Expense Report Data** section of Expense Report for the steps necessary to gather required field information.

**NOTE**: If any of the custom fields are configured to contain list values, please refer to the [Posting Custom List Items][6] page for information on how to correctly submit list item values.

 |
|  UserDefinedDate |  Depends on configuration |  The date the user selected for the report. Format: YYYY-MM-DD hh:mm:ss.0 |

 |

####  XML Example Request

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

##  Post Expense Report Header Batch Response

| ----- |
|  HTTP Responses |  Supported Content Types |
|  [HTTP Status Codes][7] |   |
|  Content Body |   |
|  This request will return a **report-batch-result** parent element with the following child elements:  

|  Element |  Description |
|  records-succeeded |  The number of records processed that were successfully added. |   |
|  records-failed |  The number of records processed that were not successfully added. |
|  errors |  This will contain an **error** parent element for each record failure. The **error** element will contain the following child elements:

|  Index |  The header's location in the batch. |
|  LoginID |  The user's Concur login ID. |   | |
|  message |  The error message. |

 |
|  ReportDetails |  This parent element will contain a **ReportStatus** child element for all report headers that did not cause an error. The **ReportStatus** element will contain the following child elements:

|  Index |  The header's location in the batch. |
|  Status |  The status of the request. |   | |
|  Report-Details-Url |  The URI to use when posting report details to this report. |

 |

 |

####  XML Example Response with Success and Failure

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

  
Last Modified: 4/25/2014 11:22 PM PST

[1]: https://developer.concur.com/node/491
[2]: https://developer.concur.com/node/481
[3]: https://developer.concur.com/node/465#process
[4]: https://developer.concur.com/node/487
[5]: https://developer.concur.com/node/487#reportdetails
[6]: https://developer.concur.com/node/554
[7]: https://developer.concur.com/node/205
