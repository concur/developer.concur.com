---
title: Expense Entry Itemization Resource 
layout: resource
---





## Description
Expense Entry Itemizations are children of an expense entry that subdivide the expense. A common use case for itemizations is on a hotel bill, which can have separate itemizations for room rate, room tax, and services such as laundry or minibar.

## Works With These Concur Products
* **Expense** for Concur Professional/Premium
* **Expense** for Concur Standard

## Resource URI
`https://www.concursolutions.com/api/expense/expensereport/v1.1/report/_{reportId}_/entry/_{entryId}_/itemization/_{itemizationId}_`

## Supported Content Types
application/xml

## Supported Accept Types
application/xml

## Operations
[POST][1]

## Related Resources
* [Expense Entry Attendee][2]
* [Expense Entry][3]
* [Expense Report][4]



[1]: https://developer.concur.com/expense-report/expense-entry-itemization-resource/expense-entry-itemization-resource-post
[2]: https://developer.concur.com/expense-report/expense-entry-attendee-resource
[3]: https://developer.concur.com/expense-report/expense-entry-resource
[4]: https://developer.concur.com/expense-report/expense-report-resource
