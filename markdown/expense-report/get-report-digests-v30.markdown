[Source](https://developer.concur.com/expense-report/expense-report-resource/get-report-digests-v30 "Permalink to Expense Report Resource: GET Report Digests v3.0")

# Expense Report Resource: GET Report Digests v3.0

##  Description

The ReportDigests resource enables searching for expense reports using two or more search criteria and getting an expense report summary. It has two endpoints:

* Get all report digests — Returns all report digests the user owns based on the specified search criteria.
* Get a single report digest by ID — Returns a report digest by ID.

These endpoints supersede the [Get List of Reports version 2.0][1] endpoint. When searching for a term at the Expense Entry level of the Expense data hierarchy (such as Expense Type or IsBillable), the search returns any report where at least one expense entry meets the search criteria.

In contrast with Get List of Reports version 2.0, where searches are done at the report level, with Get Report Digests version 3.0, searches can be done at the Expense Entry and Digest levels.  When searching using multiple terms at the Expense Entry level, the search results include the set of reports that meet at least one of the entries in the search criteria. The search results include reports that have entries that match any of the specified criteria. The entries do not have to match all supplied criteria to be returned. For example, a search for Expense Type = Airfare and IsBillable = true returns reports where there is at least one entry that has airfare and at least one entry that is billable. The expense entries with airfare may not be the same expense entries that are billable. To find expense entries that are both airfare and billable, it is necessary to filter the reports in the response to find these entries.

To view company data, the user must have the **Web Services Administrator** role for Concur Professional/Premium or the **Can Administer** role for Concur Standard.

##  GET All Report Digests Resource

Returns all ReportDigests owned by the user based on the search criteria.

| ----- |
|  Resource URI |
|  https://www.concursolutions.com/api/v3.0/expense/reportdigests/ |
|  Supported Content Types |
|

* application/xml
* application/json
 |
|  Supported Accept Types |
|

* application/xml
* application/json
 |
|  Query Parameters |
|

For query parameters and element defintions, go [here.][2]

 |
|  Request and Response Examples |
|  For request and response examples, go here. |

 

Last Modified: 2/14/2014 12:15 PM PST

[1]: https://developer.concur.com/node/694
[2]: https://www.concursolutions.com/api/docs/index.html#!/ReportDigests
