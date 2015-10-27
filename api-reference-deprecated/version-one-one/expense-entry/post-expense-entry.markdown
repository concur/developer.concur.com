---
title: POST Expense Entry
layout: reference
---

## Post Expense Entry Request

## Version
1.1

**NOTE:** You can find version 3.0 [here.](/api-reference/expense/expense-report/expense-entry.html)



Description | Supported Content Types 
-----|-----
Posts an expense report entry for the specified report. Use the Post Expense Report Header function to create the report, then use this endpoint to create the expense line items. You can update existing expense entries using this endpoint.  **NOTE**: Posting new expense reports is a multi-stage process. Refer to the Processes section of the Expense Report Web Service page for the steps required to post new expense reports and entries. **NOTE**: Concur recommends that you post one expense entry per request. Future versions of this endpoint will require this behavior. | application/xml


Query Parameters - Required | Query Parameters - Optional
-----|------
**{_reportId_}/entry**  The unique identifier for the expense report and the entry keyword. Example: https://www.concursolutions.com/api/expense/expensereport/v1.1/report/_{reportId}_/entry URI Source: The reportId value is returned in the **ReportID** element by the Get List of Reports function, and as part of the **Report-Details-Url** element of the Post Expense Report Header function. | **{_entryId_}** The unique identifier for the expense entry. Example: https://www.concursolutions.com/api/expense/expensereport/v1.1/report/_{reportId}_/entry/{_entryId_}  URI Source: The entryId value is returned in the **RpeKey** element of the [Get Full Report Details v1.1](https://developer.concur.com/node/42) function, and as part of the **Report-Entry-Details-Url** value returned by this function.

Request Headers - Required | Request Headers - Optional
-----|------
Authorization header with OAuth token for valid Concur user. The OAuth Consumer must have one of the following roles to post entries for reports that they do not own: Web Services Admin for Professional, or Can Administer for Standard. | None

Content Body |
----- |
This request should contain a **ReportEntries** parent element with an **Expense** parent element for each included entry. The **Expense** element contains the following child elements: |

Element | Required (must contain value)? | Description |
----|----|----
CrnCode | Y | The 3-letter ISO 4217 currency code for the expense transaction amount. Example: USD. |
ExpKey | Y | The expense type key for the expense. Required for new or updated entries. Expense Type Keys are returned in the **ExpKey** element by the Get Expense Group Configuration function. The expense type key cannot be modified when updating expense entries. |
Description | Depends on configuration | The description for the expense, also known as business purpose. This information is returned in the **BusinessPurpose** element by the Get Report Details function. Refer to the Processes > **Post Expense Report Data** section of Expense Report for the steps necessary to gather required field information. |
TransactionDate | Y, for new entries | The date the expense was incurred. Format: YYYY-MM-DD |
TransactionAmount | Y | The total amount of the expense in the original currency, with up to three decimal places. Example: 123.654 |
LocationID | Depends on configuration | The Location code. May be required, if the City field is required. Use the Get Location function to retreive the valid values for this field. Refer to the Processes > **Post Expense Report Data** section of Expense Report for the steps necessary to gather required field information. |
OrgUnit1 through OrgUnit6 | Depends on configuration | The Expense Entry Form org unit fields. May be required depending on configuration. Refer to the Processes > **Post Expense Report Data** section of Expense Report for the steps necessary to gather required field information. |
Custom1 through Custom40 | Depends on configuration | The Expense Entry Form custom fields. May be required depending on configuration. Refer to the Processes > **Post Expense Report Data** section of Expense Report for the steps necessary to gather required field information. **<font color="#FF0000">NOTE</font>**<font color="#FF0000">: If any of the custom fields are configured to contain list values, please refer to the Posting Custom List Items page for information on how to correctly submit list item values.</font>
ExchangeRate | N | The exchange rate between the transaction and posted amounts. This element is typically not provided. If this element is empty for transactions in a currency different than the user's reimbursement currency, Expense will use the company's configured exchange rates to determine the posted amount for the transaction. If the system is not able to determine the exchange rate, the request will return an HTTP 500 error. |
Comment | Depends on configuration | The expense entry comment. Max length: 2000\. Refer to the Processes > **Post Expense Report Data** section of Expense Report for the steps necessary to gather required field information. |
VendorDescription | N, but recommended for sandbox | This element contains the descriptive text for the vendor for the entry. This field is not required to successfully post an entry, however the field is a required field for expense entries in the developer sandbox. If this field is not provided for the sandbox, you will see an exception in the user interface stating that a required field is missing. |
IsPersonal | N | Whether the expense entry is a personal expense. Personal expenses are not reimbursed in Concur Expense. Format: Y/N |
PaymentTypeID| N| The unique identifier for the payment type for the expense entry. Use the **PaymentTypeID** value from the Get Expense Group Configuration endpoint. If you do not provide this value, the payment type defaults to Cash. The supported Payment Type Codes are: Cash and Company Paid.  The Pending Card Transaction system payment type is also supported, if the client has configured their company to use it. |

**NOTES**:

*   The minimum fields required for new expense entries are: **CrnCode**, **ExpKey**, **TransactionDate**, and **TransactionAmount**. The required fields that depend on configuration will not prevent an expense entry from being saved. If you create an entry with only the minimum fields, any additional configured required fields will cause the expense entry to have an exception in the user interface. The user will have to fill in the required fields before he/she can save any updates to the entry.
*   The update request must include the **ExpKey** and **TransactionAmount** fields. All other fields only need to be included if they were updated.
*   Update requests cannot change the **ExpKey** for an existing entry.


#### XML Example Request

<pre class="overflow_box">POST https://www.concursolutions.com/api/expense/expensereport/v1.1/report/nxxKgLlnROz$sQ6SKJFjLNs4OWBErcJ8yX/entry/ HTTP/1.1
Authorization: OAuth {access token}
...

<span class="xml-tag"><ReportEntries</span> <span class="xml-attribute">xmlns</span>=<span class="xml-value">"</span><span class="xml-value">http://www.concursolutions.com/api/expense/expensereport/2011/03</span><span class="xml-value">"</span><span class="xml-tag">></span>
    <span class="xml-tag"><Expense</span><span class="xml-tag">></span>
        <span class="xml-tag"><CrnCode</span><span class="xml-tag">></span>USD<span class="xml-tag"></CrnCode</span><span class="xml-tag">></span>
        <span class="xml-tag"><ExpKey</span><span class="xml-tag">></span>BUSPR<span class="xml-tag"></ExpKey</span><span class="xml-tag">></span>
        <span class="xml-tag"><Description</span><span class="xml-tag">></span>Business Promotions<span class="xml-tag"></Description</span><span class="xml-tag">></span>
        <span class="xml-tag"><TransactionDate</span><span class="xml-tag">></span>2011-01-12<span class="xml-tag"></TransactionDate</span><span class="xml-tag">></span>
        <span class="xml-tag"><TransactionAmount</span><span class="xml-tag">></span>29.23<span class="xml-tag"></TransactionAmount</span><span class="xml-tag">></span>
        <span class="xml-tag"><Comment</span><span class="xml-tag">></span>Brochure sample<span class="xml-tag"></Comment</span><span class="xml-tag">></span>
        <span class="xml-tag"><VendorDescription</span><span class="xml-tag">></span>Kinkos<span class="xml-tag"></VendorDescription</span><span class="xml-tag">></span>
        <span class="xml-tag"><IsPersonal</span><span class="xml-tag">></span>N<span class="xml-tag"></IsPersonal</span><span class="xml-tag">></span>
    <span class="xml-tag"></Expense</span><span class="xml-tag">></span>
    <span class="xml-tag"><Expense</span><span class="xml-tag">></span>
        <span class="xml-tag"><CrnCode</span><span class="xml-tag">></span>USD<span class="xml-tag"></CrnCode</span><span class="xml-tag">></span>
        <span class="xml-tag"><ExpKey</span><span class="xml-tag">></span>BRKFT<span class="xml-tag"></ExpKey</span><span class="xml-tag">></span>
        <span class="xml-tag"><Description</span><span class="xml-tag">></span>Description<span class="xml-tag"></Description</span><span class="xml-tag">></span>
        <span class="xml-tag"><TransactionDate</span><span class="xml-tag">></span>2011-01-12<span class="xml-tag"></TransactionDate</span><span class="xml-tag">></span>
        <span class="xml-tag"><TransactionAmount</span><span class="xml-tag">></span>15.54<span class="xml-tag"></TransactionAmount</span><span class="xml-tag">></span>
        <span class="xml-tag"><Comment</span><span class="xml-tag">></span>Breakfast meeting<span class="xml-tag"></Comment</span><span class="xml-tag">></span>
        <span class="xml-tag"><VendorDescription</span><span class="xml-tag">></span>Starbucks<span class="xml-tag"></VendorDescription</span><span class="xml-tag">></span>
        <span class="xml-tag"><IsPersonal</span><span class="xml-tag">></span>N<span class="xml-tag"></IsPersonal</span><span class="xml-tag">></span>
    <span class="xml-tag"></Expense</span><span class="xml-tag">></span>
<span class="xml-tag"></ReportEntries</span><span class="xml-tag">></span>
</pre>

## Post Expense Entry Response

HTTP Responses | Supported Content Types 
----|----
HTTP Status Codes | application/xml

Content Body |
----|
This request will return a **ReportEntryStatusList** parent element with the **ReportEntryStatus** child element for each posted entry. The **ReportEntryStatus** element will contain the following child elements: |

Element | Description
----|----
Index | The entry's sequence in the request. |
Status | The status of the request. |
Message | When the status is FAILED, the details of the failure appear in this element. |
Report-Entry-Details-Url | The URI to get the expense entry details. |

 |

#### XML Example of Successful Response

<pre class="overflow_box">200 OK
Content-Type: application/xml
<span class="xml-tag"><ReportEntryStatusList</span> <span class="xml-attribute">xmlns</span>=<span class="xml-value">"</span><span class="xml-value">http://www.concursolutions.com/api/expense/expensereport/2011/03</span><span class="xml-value">"</span> <span class="xml-attribute">xmlns:i</span>=<span class="xml-value">"</span><span class="xml-value">http://www.w3.org/2001/XMLSchema-instance</span><span class="xml-value">"</span><span class="xml-tag">></span>
    <span class="xml-tag"><ReportEntryStatus</span><span class="xml-tag">></span>
        <span class="xml-tag"><Index</span><span class="xml-tag">></span>1<span class="xml-tag"></Index</span><span class="xml-tag">></span>
        <span class="xml-tag"><Status</span><span class="xml-tag">></span>SUCCESS<span class="xml-tag"></Status</span><span class="xml-tag">></span>
        <span class="xml-tag"><Report-Entry-Details-Url</span><span class="xml-tag">></span>https://www.concursolutions.com/api/expense/expensereport/v1.1/report/nxxKgLlnROz$sQ6SKJFjLNs4OWBErcJ8yX/entry/nE0avYnILN9mHdTErNSd2pH45udFoNQ$po<span class="xml-tag"></Report-Entry-Details-Url</span><span class="xml-tag">></span>
    <span class="xml-tag"></ReportEntryStatus</span><span class="xml-tag">></span>
    <span class="xml-tag"><ReportEntryStatus</span><span class="xml-tag">></span>
        <span class="xml-tag"><Index</span><span class="xml-tag">></span>2<span class="xml-tag"></Index</span><span class="xml-tag">></span>
        <span class="xml-tag"><Status</span><span class="xml-tag">></span>SUCCESS<span class="xml-tag"></Status</span><span class="xml-tag">></span>
        <span class="xml-tag"><Report-Entry-Details-Url</span><span class="xml-tag">></span>https://www.concursolutions.com/api/expense/expensereport/v1.1/report/nxxKgLlnROz$sQ6SKJFjLNs4OWBErcJ8yX/entry/awEDvYnILN9g$s6lCFX0jFBWmHAiTYYf9C<span class="xml-tag"></Report-Entry-Details-Url</span><span class="xml-tag">></span>
    <span class="xml-tag"></ReportEntryStatus</span><span class="xml-tag">></span>
<span class="xml-tag"></ReportEntryStatusList</span><span class="xml-tag">></span>  
