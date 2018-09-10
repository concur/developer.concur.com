---
title: GET Expense Entry
layout: reference
---

## <a id="listoflists" name="listoflists"></a>Get Expense Entry Details Request

## Version
1.0
**NOTE:** You can find version 3.0 [here.](/api-reference/expense/expense-report/expense-entry.html)


Description | Supported Accept Types
-----|------
Retrieves the details for the specified expense entry | application/xml

Query Parameters - Required | Query Parameters - Optional
-----|------
**{_reportId_}** The unique identifier for the expense report. | **{_entryId_}** The unique identifier for the expense entry.

Request Headers - Required | Request Headers - Optional
-----|------
Authorization header with OAuth token for valid Concur user. | none



#### XML Example Request

```http
GET https://www.concursolutions.com/api/expense/expensereport/v1.1/report/nxxKgLlnROz3zHJBCRksaas23dsfs/entry/n7We3qWw99u1KoWTMaLhSC$pXBYzQ1UDhn HTTP/1.1
Authorization: OAuth {access token}
...
```

## Get Expense Entry Details Response

This request will return an **ExpenseEntry** parent element with the following child elements:


Element | Description
-----|-----
ApprovedAmount | The approved amount of the entry in the user's reimbursement currency. The Get Report Details function returns the report currency, which is the user's reimbursement currency, in the **CrnCode** element.
Attendee-Url | The URL to the attendees list for the entry. |
Allocation-Url | The URL to the allocations list for the entry. |
BusinessPurpose | The business purpose field from the report header. |
EreceiptId | The ID for the attached e-receipt, if available. |
ExchangeRate | The exchange rate that applies to the entry. |
ExpenseKey | The expense type key for the entry. Use the Get Expense Group Configuration endpoint to get the full list of expense types. |
ExpenseName | The expense type for the entry. |
SpendCategory | The spend category specified for this expense type. Varies by client, used in reporting. |
HasAllocation | Defines the amount of allocations for the expense. Possible values are: P, for partial allocation, F, for full allocation, or N, for no allocation. |
HasAttendees | Whether the expense has attendees. |
HasComments | Whether the expense has comments. |
HasExceptions | Whether the expense has exceptions. |
HasVat | Whether the expense has VAT data. |
ImageRequired | Whether a receipt image is required for the entry. |
IsCreditCardCharge | Whether the expense came from a credit card feed. |
IsItemized | Whether the expense has itemizations. |
Itemizations-Url | The URL to the itemization list. |
IsPersonal | Whether the expense is personal. |
IsPersonalCardCharge | Whether the expense came from a personal card feed. |
LastModified | The UTC date when the entry was last modified. |
LocationName | The location for the expense entry, usually the city name. |
OrgUnit1 through OrgUnit6 | The details from the Org Unit custom fields. These may not have data, depending on configuration. |
PaymentTypeKey | The key for the payment type for the entry. Use the Get Expense Group Configuration function to map the payment type key to the payment type name. |
PostedAmount | The amount of the expense entry in the user's reimbursement currency. <span class="codeexample">The Get Report Details function returns the report currency, which is the user's reimbursement currency, in the</span> **CrnCode** <span class="codeexample">element.</span> |
ReceiptImageId | The ID for the receipt image attached to the entry. |
ReceiptRequired | Whether the original receipt is required for the entry. |
ReportEntryID | The ID of the report entry. |
ReportID | The unique key of the report the entry is in. |
TransactionAmount | The amount of the expense entry in the original transaction currency. |
TransactionCurrencyName | The currency name of the expense entry transaction amount. |
TransactionDate | The date of the expense entry. |
VendorDescription | The vendor name of the expense entry, which can be entered manually by the user or imported from the card transaction Merchant Name field. |
X_UserID | The user ID associated with the entry. |
Custom1 through Custom40 | The details from the Custom fields. These may not have data, depending on configuration. If the custom field is a list field, the data will be returned as: (list item short code) list item name. List Field Example: <Custom1>(1234) Project 1234</Custom1> |


#### XML Example of Successful Response

```http
HTTP/1.1 200 OK
Content-Type: application/xml

<ExpenseEntry xmlns="http://www.concursolutions.com/api/expense/expensereport/2011/03" xmlns:i="http://www.w3.org/2001/XMLSchema-instance">
    <ApprovedAmount>40.00000000</ApprovedAmount>
    <Attendee-Url>https://www.concursolutions.com/api/expense/expensereport/v1.1/report/nYO0ck05r5fATbnjrMBf0d$sCIBqX8WQYw/entry/nbmTPob9qSUJWKttTEr6MLaXaPKYYPv7U/Attendees
    </Attendee-Url>
    <Allocation-Url>https://www.concursolutions.com/api/expense/expensereport/v1.1/report/nYO0ck05r5fATbnjrMBf0d$sCIBqX8WQYw/entry/nbmTPob9qSUJWKttTEr6MLaXaPKYYPv7U/Allocations</Allocation-Url>
    <BusinessPurpose />
    <EreceiptId />
    <ExchangeRate>1.00000000000000</ExchangeRate>
    <ExpenseKey>BUSML</ExpenseKey>
    <ExpenseName>OTHER</ExpenseName>
    <SpendCategory>Miscellaneous</SpendCategory>
    <HasAllocation>N</HasAllocation>
    <HasAttendees>Y</HasAttendees>
    <HasComments>N</HasComments>
    <HasExceptions>N</HasExceptions>
    <HasVat>N</HasVat>
    <ImageRequired>N</ImageRequired>
    <IsCreditCardCharge>N</IsCreditCardCharge>
    <IsItemized>N</IsItemized>
    <Itemizations-Url>https://www.concursolutions.com/api/expense/expensereport/v1.1/report/nYO0ck05r5fATbnjrMBf0d$sCIBqX8WQYw/entry/nbmTPob9qSUJWKttTEr6MLaXaPKYYPv7U/Itemization</Itemizations-Url>
    <IsPersonal>N</IsPersonal>
    <IsPersonalCardCharge>N</IsPersonalCardCharge>
    <LastModified>2011-06-18T16:03:31</LastModified>
    <LocationName />
    <PaymentTypeKey>CASH</PaymentTypeKey>
    <PostedAmount>40.00000000</PostedAmount>
    <ReceiptImageId />
    <ReceiptRequired>N</ReceiptRequired>
    <ReportEntryID>nbmTPob9qSUJWKttTEr6MLaXaPKYYPv7U</ReportEntryID>
    <ReportID>nYO0ck05r5fATbnjrMBf0d$sCIBqX8WQYw</ReportID>
    <TransactionAmount>40.00000000</TransactionAmount>
    <TransactionCurrencyName>US, Dollar</TransactionCurrencyName>
    <TransactionDate>2011-06-15T00:00:00</TransactionDate>
    <VendorDescription />
    <X_UserID>cmiller@example.com</X_UserID>
    <OrgUnit1 />
    <OrgUnit2 />
    <OrgUnit3 />
    <OrgUnit4 />
    <OrgUnit5 />
    <OrgUnit6 />
    <Custom1>Value</Custom1>
    <Custom2 />
    <Custom3 />
    <Custom4 />
    <Custom5 />
    <Custom6 />
    <Custom7 />
    <Custom8 />
    <Custom9 />
    <Custom10 />
    <Custom11 />
    <Custom12 />
    <Custom13 />
    <Custom14 />
    <Custom15 />
    <Custom16 />
    <Custom17 />
    <Custom18 />
    <Custom19 />
    <Custom20 />
    <Custom21 />
    <Custom22 />
    <Custom23 />
    <Custom24 />
    <Custom25 />
    <Custom26 />
    <Custom27 />
    <Custom28 />
    <Custom29 />
    <Custom30 />
    <Custom31 />
    <Custom32 />
    <Custom33 />
    <Custom34 />
    <Custom35 />
    <Custom36 />
    <Custom37 />
    <Custom38 />
    <Custom39 />
    <Custom40 />
</ExpenseEntry>
```
