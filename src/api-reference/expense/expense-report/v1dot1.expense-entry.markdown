---
title: Expense Entry v1.1
layout: reference

redirect_from:
  - /api-reference-deprecated/version-one-one/expense-entry/expense-entry-resource.html
  - /api-reference-deprecated/version-one-one/expense-entry/get-expense-entry.html
  - /api-reference-deprecated/version-one-one/expense-entry/post-expense-entry.html
---

{% include deprecation-alert.html %}

An expense entry in an expense report.

**NOTE:** You can find version 3.0 [here](/api-reference/expense/expense-report/expense-entry.html)

## URI

```
https://www.concursolutions.com/api/expense/expensereport/v1.1/report/{reportId}/entry/{entryId}
```

## <a id="listoflists" name="listoflists"></a>Get Expense Entry Details Request

Retrieves the details for the specified expense entry

### Supported Accept Types

application/xml

### Parameters

Query Parameter|Description
-----|------
`{_reportId_}`|**Reqired** The unique identifier for the expense report.
`{_entryId_}`|The unique identifier for the expense entry.

### Request Headers

* Authorization header with OAuth token for valid Concur user.

### XML Example Request

```shell
GET https://www.concursolutions.com/api/expense/expensereport/v1.1/report/nxxKgLlnROz3zHJBCRksaas23dsfs/entry/n7We3qWw99u1KoWTMaLhSC$pXBYzQ1UDhn HTTP/1.1
Authorization: OAuth {access token}
```

### Response

This request will return an **ExpenseEntry** parent element with the following child elements:

Element|Description
---|---
ApprovedAmount|The approved amount of the entry in the user's reimbursement currency. The Get Report Details function returns the report currency, which is the user's reimbursement currency, in the **CrnCode** element.
Attendee-Url|The URL to the attendees list for the entry.
Allocation-Url|The URL to the allocations list for the entry.
BusinessPurpose|The business purpose field from the report header.
EreceiptId|The ID for the attached e-receipt, if available.
ExchangeRate|The exchange rate that applies to the entry.
ExpenseKey|The expense type key for the entry. Use the Get Expense Group Configuration endpoint to get the full list of expense types.
ExpenseName|The expense type for the entry.
SpendCategory|The spend category specified for this expense type. Varies by client, used in reporting.
HasAllocation|Defines the amount of allocations for the expense. Possible values are: P, for partial allocation, F, for full allocation, or N, for no allocation.
HasAttendees|Whether the expense has attendees.
HasComments|Whether the expense has comments.
HasExceptions|Whether the expense has exceptions.
HasVat|Whether the expense has VAT data.
ImageRequired|Whether a receipt image is required for the entry.
IsCreditCardCharge|Whether the expense came from a credit card feed.
IsItemized|Whether the expense has itemizations.
Itemizations-Url|The URL to the itemization list.
IsPersonal|Whether the expense is personal.
IsPersonalCardCharge|Whether the expense came from a personal card feed.
LastModified|The UTC date when the entry was last modified.
LocationName|The location for the expense entry, usually the city name.
OrgUnit1 through OrgUnit6|The details from the Org Unit custom fields. These may not have data, depending on configuration.
PaymentTypeKey|The key for the payment type for the entry. Use the Get Expense Group Configuration function to map the payment type key to the payment type name.
PostedAmount|The amount of the expense entry in the user's reimbursement currency. <span class="codeexample">The Get Report Details function returns the report currency, which is the user's reimbursement currency, in the</span> **CrnCode** <span class="codeexample">element.</span>
ReceiptImageId|The ID for the receipt image attached to the entry.
ReceiptRequired|Whether the original receipt is required for the entry.
ReportEntryID|The ID of the report entry.
ReportID|The unique key of the report the entry is in.
TransactionAmount|The amount of the expense entry in the original transaction currency.
TransactionCurrencyName|The currency name of the expense entry transaction amount.
TransactionDate|The date of the expense entry.
VendorDescription|The vendor name of the expense entry, which can be entered manually by the user or imported from the card transaction Merchant Name field.
X_UserID|The user ID associated with the entry.
Custom1 through Custom40|The details from the Custom fields. These may not have data, depending on configuration. If the custom field is a list field, the data will be returned as: (list item short code) list item name. List Field Example: <Custom1>(1234) Project 1234</Custom1>

### XML Example of Successful Response

```shell
HTTP/1.1 200 OK
Content-Type: application/xml
```

```xml
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

## Post Expense Entry Request

Posts an expense report entry for the specified report. Use the Post Expense Report Header function to create the report, then use this endpoint to create the expense line items. You can update existing expense entries using this endpoint.

**NOTE**: Posting new expense reports is a multi-stage process. Refer to the Processes section of the Expense Report Web Service page for the steps required to post new expense reports and entries.

**NOTE**: Concur recommends that you post one expense entry per request. Future versions of this endpoint will require this behavior.

### Supported Content Types

application/xml

### Parameters

Query Parameters - Required|Query Parameters - Optional
-----|------
`{_reportId_}/entry`|**Required** The unique identifier for the expense report and the entry keyword. Example: `https://www.concursolutions.com/api/expense/expensereport/v1.1/report/_{reportId}_/entry`. <br><br>URI Source: The reportId value is returned in the **ReportID** element by the Get List of Reports function, and as part of the **Report-Details-Url** element of the Post Expense Report Header function.
`{_entryId_}`|The unique identifier for the expense entry. Example: `https://www.concursolutions.com/api/expense/expensereport/v1.1/report/_{reportId}_/entry/{_entryId_}`. <br><br>URI Source: The entryId value is returned in the **RpeKey** element of the [Expense Report Full Details v1.1](/api-reference/expense/expense-report/v1dot1.report-full-details.html) function, and as part of the **Report-Entry-Details-Url** value returned by this function.

### Request Headers

* Authorization header with OAuth token for valid Concur user. The OAuth Consumer must have one of the following roles to post entries for reports that they do not own: Web Services Admin for Professional, or Can Administer for Standard.

### Payload

This request should contain a **ReportEntries** parent element with an **Expense** parent element for each included entry. The **Expense** element contains the following child elements:

Element|Required (must contain value)?|Description
---|---|---
CrnCode|Y|The 3-letter ISO 4217 currency code for the expense transaction amount. Example: USD.
ExpKey|Y|The expense type key for the expense. Required for new or updated entries. Expense Type Keys are returned in the **ExpKey** element by the Get Expense Group Configuration function. The expense type key cannot be modified when updating expense entries.
Description|Depends on configuration|The description for the expense, also known as business purpose. This information is returned in the **BusinessPurpose** element by the Get Report Details function. Refer to the Processes > **Post Expense Report Data** section of Expense Report for the steps necessary to gather required field information.
TransactionDate|Y, for new entries|The date the expense was incurred. Format: YYYY-MM-DD
TransactionAmount|Y|The total amount of the expense in the original currency, with up to three decimal places. Example: 123.654
LocationID|Depends on configuration|The Location code. May be required, if the City field is required. Use the Get Location function to retreive the valid values for this field. Refer to the Processes > **Post Expense Report Data** section of Expense Report for the steps necessary to gather required field information.
OrgUnit1 through OrgUnit6|Depends on configuration|The Expense Entry Form org unit fields. May be required depending on configuration. Refer to the Processes > **Post Expense Report Data** section of Expense Report for the steps necessary to gather required field information.
Custom1 through Custom40|Depends on configuration|The Expense Entry Form custom fields. May be required depending on configuration. Refer to the Processes > **Post Expense Report Data** section of Expense Report for the steps necessary to gather required field information. **<font color="#FF0000">NOTE</font>**<font color="#FF0000">: If any of the custom fields are configured to contain list values, please refer to the Posting Custom List Items page for information on how to correctly submit list item values.</font>
ExchangeRate|N|The exchange rate between the transaction and posted amounts. This element is typically not provided. If this element is empty for transactions in a currency different than the user's reimbursement currency, Expense will use the company's configured exchange rates to determine the posted amount for the transaction. If the system is not able to determine the exchange rate, the request will return an HTTP 500 error.
Comment|Depends on configuration|The expense entry comment. Max length: 2000\. Refer to the Processes > **Post Expense Report Data** section of Expense Report for the steps necessary to gather required field information.
VendorDescription|N, but recommended for sandbox|This element contains the descriptive text for the vendor for the entry. This field is not required to successfully post an entry, however the field is a required field for expense entries in the developer sandbox. If this field is not provided for the sandbox, you will see an exception in the user interface stating that a required field is missing.
IsPersonal|N|Whether the expense entry is a personal expense. Personal expenses are not reimbursed in Concur Expense. Format: Y/N
PaymentTypeID|N|The unique identifier for the payment type for the expense entry. Use the **PaymentTypeID** value from the Get Expense Group Configuration endpoint. If you do not provide this value, the payment type defaults to Cash. The supported Payment Type Codes are: Cash and Company Paid.  The Pending Card Transaction system payment type is also supported, if the client has configured their company to use it.

**NOTES**

* The minimum fields required for new expense entries are: **CrnCode**, **ExpKey**, **TransactionDate**, and **TransactionAmount**. The required fields that depend on configuration will not prevent an expense entry from being saved. If you create an entry with only the minimum fields, any additional configured required fields will cause the expense entry to have an exception in the user interface. The user will have to fill in the required fields before he/she can save any updates to the entry.
* The update request must include the **ExpKey** and **TransactionAmount** fields. All other fields only need to be included if they were updated.
* Update requests cannot change the **ExpKey** for an existing entry.

### XML Example Request

```shell
POST https://www.concursolutions.com/api/expense/expensereport/v1.1/report/nxxKgLlnROz$sQ6SKJFjLNs4OWBErcJ8yX/entry/ HTTP/1.1
Authorization: OAuth {access token}
Content-Type: application/xml
```

```xml
<ReportEntries xmlns="http://www.concursolutions.com/api/expense/expensereport/2011/03">
  <Expense>
    <CrnCode>USD</CrnCode>
    <ExpKey>BUSPR</ExpKey>
    <Description>Business Promotions</Description>
    <TransactionDate>2011-01-12</TransactionDate>
    <TransactionAmount>29.23</TransactionAmount>
    <Comment>Brochure sample</Comment>
    <VendorDescription>Kinkos</VendorDescription>
    <IsPersonal>N</IsPersonal>
  </Expense>
  <Expense>
    <CrnCode>USD</CrnCode>
    <ExpKey>BRKFT</ExpKey>
    <Description>Description</Description>
    <TransactionDate>2011-01-12</TransactionDate>
    <TransactionAmount>15.54</TransactionAmount>
    <Comment>Breakfast meeting</Comment>
    <VendorDescription>Starbucks</VendorDescription>
    <IsPersonal>N</IsPersonal>
  </Expense>
</ReportEntries>
```

### Response

#### Supported Content Types

application/xml

#### Payload

This request will return a **ReportEntryStatusList** parent element with the **ReportEntryStatus** child element for each posted entry. The **ReportEntryStatus** element will contain the following child elements:

Element|Description
---|---
Index|The entry's sequence in the request.
Status|The status of the request.
Message|When the status is FAILED, the details of the failure appear in this element.
Report-Entry-Details-Url|The URI to get the expense entry details.

#### XML Example of Successful Response

```shell
HTTP/1.1 200 OK
Content-Type: application/xml
```

```xml
<ReportEntryStatusList xmlns="http://www.concursolutions.com/api/expense/expensereport/2011/03" xmlns:i="http://www.w3.org/2001/XMLSchema-instance">
  <ReportEntryStatus>
    <Index>1</Index>
    <Status>SUCCESS</Status>
    <Report-Entry-Details-Url>https://www.concursolutions.com/api/expense/expensereport/v1.1/report/nxxKgLlnROz$sQ6SKJFjLNs4OWBErcJ8yX/entry/nE0avYnILN9mHdTErNSd2pH45udFoNQ$po</Report-Entry-Details-Url>
  </ReportEntryStatus>
  <ReportEntryStatus>
    <Index>2</Index>
    <Status>SUCCESS</Status>
    <Report-Entry-Details-Url>https://www.concursolutions.com/api/expense/expensereport/v1.1/report/nxxKgLlnROz$sQ6SKJFjLNs4OWBErcJ8yX/entry/awEDvYnILN9g$s6lCFX0jFBWmHAiTYYf9C</Report-Entry-Details-Url>
  </ReportEntryStatus>
</ReportEntryStatusList>
```
