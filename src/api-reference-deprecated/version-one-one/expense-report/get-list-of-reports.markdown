---
title: Get List of Reports v1.1
layout: reference
---


# Get List of Reports (v1.1)
Retrieves a list of reports. This endpoint can be used to view reports for one user, or to view recent reports for the entire company. If you get reports for one user, you can view reports owned by the user specified in the OAuth access token. If you choose to get all the reports for the company, you must use the LastModified date query string to view reports for a 24 hour period. You can provide an optional View to target search results. If no view or date string is provided, the web service will return all Recent reports for the specified user. If the `LastModified` query string is provided, the results do not filter based on the specified user. This endpoint can support frequent requests, where the developer tracks the previous date/time that the endpoint was called, and uses that as the date/time for the next request.

## Request

### HTTP Request Type: 
GET  

### URI: 
`https://www.concursolutions.com/api/expense/expensereport/v1.1/ReportsList/{_View_}`

### Request Media Type: 
application/xml


### URI Details: 
This URI can be appended with the following optional report View values:

| Value | Description |
| ------ | ------------ |
| `RECENT` | Returns all reports that have been modified in the last 31 days for the specified user. |
| `ACTIVE` | Returns all unsubmitted and unpaid (payment status is not Paid) reports for the specified user. |
| `UNSUBMITTED` | Returns all unsubmitted reports for the specified user. |
| `PENDING` | Returns all pending reports for the specified user. |
| `APPROVED` | Returns all approved reports for the specified user. |
| `PROCESSED` | Returns all processed reports for the specified user. |
| `PAID` | Returns all paid reports for the specified user. |
| `PAYMENTCONFIRMED` | Returns all paid reports for the specified user. |
| `FORTHISMONTH` | Returns all reports with a create date in this month by the specified user. |
| `FORLASTMONTH` | Returns all reports with a create date in the previous month by the specified user. |
| `FORTHISQUARTER` | Returns all reports with a create date in this calendar quarter by the specified user. |
| `FORLASTQUARTER` | Returns all reports with a create date in the previous calendar quarter by the specified user. |
| `FORTHISYEAR` | Returns all reports with a create date in this year by the specified user. |
| `FORLASTYEAR` | Returns all reports with a create date in in the past year by the specified user. |
| `TOAPPROVE` | Returns all reports pending approval from the specified user. |
| `APPROVEDTHISMONTH` | Returns all reports approved or pending approval from the specified user in the current month. |
| `APPROVEDLASTMONTH` | Returns all reports approved by the specified user in the current month. |
| `APPROVEDTHISQUARTER` | Returns all reports approved or pending approval from the specified user in the current calendar quarter. |
| `APPROVEDLASTQUARTER` | Returns all reports approved by the specified user in the previous calendar quarter. |
| `APPROVEDTHISYEAR` | Returns all reports approved or pending approval from the specified user in the current calendar year. |
| `APPROVEDLASTYEAR` | Returns all reports approved by the specified user in the previous calendar year. |

This request can include an optional query string specifying the last modified date (in [Coordinated Universal Time](https://en.wikipedia.org/wiki/Coordinated_Universal_Time), aka UTC) of the reports. This query string will return the reports modified within 24 hours after the supplied date. You can provide the time in UTC, and the query will return the reports with a last modified date that is greater (up to 24 hours after the time) or equal to the supplied time. The provided date/time can be any time between now and the first date of expense report creation in the database. The format is either the date or the date and time combined:

`/api/expense/expensereport/v1.1/reportslist/UNSUBMITTED/LastModified?date=2011-07-06T12:23:00`

or

`/api/expense/expensereport/v1.1/reportslist/UNSUBMITTED/LastModified?date=2011-07-06`

The LastModified query string is supported only with the following statuses: ALL, ACTIVE, UNSUBMITTED, APPROVED, PENDING, PROCESSED, PAID, PAYMENTCONFIRMED, RECENT, TOAPPROVE

NOTES:

*   The LastModified query string returns reports for all users, ignoring the user account specified in the OAuth access token.
*   The ApprovalURL element does not appear when using the LastModified query.

## Response

### Response Media Type: 
application/xml  

### Return Value: 
This request will return a `ReportsList` parent element with an xmlns version attribute and a `ReportSummary` child element for each report. The `ReportSummary` elements will have the following child elements:

| Value | Description |
| ------ | ------------ |
| `ApprovalURL` | The URL the user can use to log in to Concur to approve the report. This element appears when requesting the TOAPPROVE status, and does not appear when using the DateModified query. This URL works only when the company does not use Concur SSO with the Enforce option. 
| `ReportName` | The name of the report.
| `ReportId` | The unique identifier for the report, which appears in the Concur Expense UI.
| `ReportTotal` | The total amount of the report.
| `ReportCurrency`| The [3-letter ISO 4217 currency code](https://en.wikipedia.org/wiki/ISO_4217) for the expense report currency.
| `ReportDate` | The create date of the report.
| `LastComment` | The text of the most recent comment on the report.
| `Report-Details-Url` | The URL to access the report summary details.
| `Report-Full-Details-Url` | The URL to access the full report details.
| `ExpenseUserXUserID` | The User ID of the user this report belongs to.
| `ApproverXUserID`  | The User ID of the user's expense approver.
| `EmployeeName` | The name of the expense report owner. Format: Firstname Lastname

### Remarks:
 The `ApprovalURL` provides a link to Expense that can be used with SSO in most circumstances. The link can be put into a browser window, then the approver is automatically logged into Expense **_and_** the expense report opens **_if_**:

The company uses a Concur-supported SSO platform (and does **not** use the Enforce option)  
 - **_and_** -  
The approver is currently on the company network or is using VPN

Otherwise, when the approver clicks the link, the Expense login page appears. The approver logs in and follows the normal steps for approving reports.

  

Last Modified: 2/13/2014 5:39 PM PST
