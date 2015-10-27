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

<pre class="overflow_box">GET https://www.concursolutions.com/api/expense/expensereport/v1.1/report/nxxKgLlnROz3zHJBCRksaas23dsfs/entry/n7We3qWw99u1KoWTMaLhSC$pXBYzQ1UDhn HTTP/1.1
Authorization: OAuth {access token}
...
</pre>

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

<pre class="overflow_box">200 OK
Content-Type: application/xml
<span class="xml-tag"><ExpenseEntry</span> <span class="xml-attribute">xmlns</span>=<span class="xml-value">"</span><span class="xml-value">http://www.concursolutions.com/api/expense/expensereport/2011/03</span><span class="xml-value">"</span> <span class="xml-attribute">xmlns:i</span>=<span class="xml-value">"</span><span class="xml-value">http://www.w3.org/2001/XMLSchema-instance</span><span class="xml-value">"</span><span class="xml-tag">></span>
    <span class="xml-tag"><ApprovedAmount</span><span class="xml-tag">></span>40.00000000<span class="xml-tag"></ApprovedAmount</span><span class="xml-tag">></span>
    <span class="xml-tag"><Attendee-Url</span><span class="xml-tag">></span>https://www.concursolutions.com/api/expense/expensereport/v1.1/report/nYO0ck05r5fATbnjrMBf0d$sCIBqX8WQYw/entry/nbmTPob9qSUJWKttTEr6MLaXaPKYYPv7U/Attendees
    <span class="xml-tag"></Attendee-Url</span><span class="xml-tag">></span>
    <span class="xml-tag"><Allocation-Url</span><span class="xml-tag">></span>https://www.concursolutions.com/api/expense/expensereport/v1.1/report/nYO0ck05r5fATbnjrMBf0d$sCIBqX8WQYw/entry/nbmTPob9qSUJWKttTEr6MLaXaPKYYPv7U/Allocations<span class="xml-tag"></Allocation-Url</span><span class="xml-tag">></span>
    <span class="xml-tag"><BusinessPurpose</span> <span class="xml-tag">/></span> 
    <span class="xml-tag"><EreceiptId</span> <span class="xml-tag">/></span> 
    <span class="xml-tag"><ExchangeRate</span><span class="xml-tag">></span>1.00000000000000<span class="xml-tag"></ExchangeRate</span><span class="xml-tag">></span> 
    <span class="xml-tag"><ExpenseKey</span><span class="xml-tag">></span>BUSML<span class="xml-tag"></ExpenseKey</span><span class="xml-tag">></span> 
    <span class="xml-tag"><ExpenseName</span><span class="xml-tag">></span>OTHER<span class="xml-tag"></ExpenseName</span><span class="xml-tag">></span> 
    <span class="xml-tag"><SpendCategory</span><span class="xml-tag">></span>Miscellaneous<span class="xml-tag"></SpendCategory</span><span class="xml-tag">></span>
    <span class="xml-tag"><HasAllocation</span><span class="xml-tag">></span>N<span class="xml-tag"></HasAllocation</span><span class="xml-tag">></span> 
    <span class="xml-tag"><HasAttendees</span><span class="xml-tag">></span>Y<span class="xml-tag"></HasAttendees</span><span class="xml-tag">></span> 
    <span class="xml-tag"><HasComments</span><span class="xml-tag">></span>N<span class="xml-tag"></HasComments</span><span class="xml-tag">></span> 
    <span class="xml-tag"><HasExceptions</span><span class="xml-tag">></span>N<span class="xml-tag"></HasExceptions</span><span class="xml-tag">></span> 
    <span class="xml-tag"><HasVat</span><span class="xml-tag">></span>N<span class="xml-tag"></HasVat</span><span class="xml-tag">></span> 
    <span class="xml-tag"><ImageRequired</span><span class="xml-tag">></span>N<span class="xml-tag"></ImageRequired</span><span class="xml-tag">></span> 
    <span class="xml-tag"><IsCreditCardCharge</span><span class="xml-tag">></span>N<span class="xml-tag"></IsCreditCardCharge</span><span class="xml-tag">></span> 
    <span class="xml-tag"><IsItemized</span><span class="xml-tag">></span>N<span class="xml-tag"></IsItemized</span><span class="xml-tag">></span>
    <span class="xml-tag"><Itemizations-Url</span><span class="xml-tag">></span>https://www.concursolutions.com/api/expense/expensereport/v1.1/report/nYO0ck05r5fATbnjrMBf0d$sCIBqX8WQYw/entry/nbmTPob9qSUJWKttTEr6MLaXaPKYYPv7U/Itemization<span class="xml-tag"></Itemizations-Url</span><span class="xml-tag">></span> 
    <span class="xml-tag"><IsPersonal</span><span class="xml-tag">></span>N<span class="xml-tag"></IsPersonal</span><span class="xml-tag">></span> 
    <span class="xml-tag"><IsPersonalCardCharge</span><span class="xml-tag">></span>N<span class="xml-tag"></IsPersonalCardCharge</span><span class="xml-tag">></span> 
    <span class="xml-tag"><LastModified</span><span class="xml-tag">></span>2011-06-18T16:03:31<span class="xml-tag"></LastModified</span><span class="xml-tag">></span> 
    <span class="xml-tag"><LocationName</span> <span class="xml-tag">/></span> 
    <span class="xml-tag"><PaymentTypeKey</span><span class="xml-tag">></span>CASH<span class="xml-tag"></PaymentTypeKey</span><span class="xml-tag">></span> 
    <span class="xml-tag"><PostedAmount</span><span class="xml-tag">></span>40.00000000<span class="xml-tag"></PostedAmount</span><span class="xml-tag">></span> 
    <span class="xml-tag"><ReceiptImageId</span> <span class="xml-tag">/></span> 
    <span class="xml-tag"><ReceiptRequired</span><span class="xml-tag">></span>N<span class="xml-tag"></ReceiptRequired</span><span class="xml-tag">></span> 
    <span class="xml-tag"><ReportEntryID</span><span class="xml-tag">></span>nbmTPob9qSUJWKttTEr6MLaXaPKYYPv7U<span class="xml-tag"></ReportEntryID</span><span class="xml-tag">></span> 
    <span class="xml-tag"><ReportID</span><span class="xml-tag">></span>nYO0ck05r5fATbnjrMBf0d$sCIBqX8WQYw<span class="xml-tag"></ReportID</span><span class="xml-tag">></span>
    <span class="xml-tag"><TransactionAmount</span><span class="xml-tag">></span>40.00000000<span class="xml-tag"></TransactionAmount</span><span class="xml-tag">></span>
    <span class="xml-tag"><TransactionCurrencyName</span><span class="xml-tag">></span>US, Dollar<span class="xml-tag"></TransactionCurrencyName</span><span class="xml-tag">></span>
    <span class="xml-tag"><TransactionDate</span><span class="xml-tag">></span>2011-06-15T00:00:00<span class="xml-tag"></TransactionDate</span><span class="xml-tag">></span>
    <span class="xml-tag"><VendorDescription</span> <span class="xml-tag">/></span>
    <span class="xml-tag"><X_UserID</span><span class="xml-tag">></span>cmiller@example.com<span class="xml-tag"></X_UserID</span><span class="xml-tag">></span>
    <span class="xml-tag"><OrgUnit1</span> <span class="xml-tag">/></span>
    <span class="xml-tag"><OrgUnit2</span> <span class="xml-tag">/></span>
    <span class="xml-tag"><OrgUnit3</span> <span class="xml-tag">/></span>
    <span class="xml-tag"><OrgUnit4</span> <span class="xml-tag">/></span>
    <span class="xml-tag"><OrgUnit5</span> <span class="xml-tag">/></span>
    <span class="xml-tag"><OrgUnit6</span> <span class="xml-tag">/></span>
    <span class="xml-tag"><Custom1</span><span class="xml-tag">></span>Value<span class="xml-tag"></Custom1</span><span class="xml-tag">></span>
    <span class="xml-tag"><Custom2</span> <span class="xml-tag">/></span>
    <span class="xml-tag"><Custom3</span> <span class="xml-tag">/></span>
    <span class="xml-tag"><Custom4</span> <span class="xml-tag">/></span>
    <span class="xml-tag"><Custom5</span> <span class="xml-tag">/></span>
    <span class="xml-tag"><Custom6</span> <span class="xml-tag">/></span>
    <span class="xml-tag"><Custom7</span> <span class="xml-tag">/></span>
    <span class="xml-tag"><Custom8</span> <span class="xml-tag">/></span>
    <span class="xml-tag"><Custom9</span> <span class="xml-tag">/></span>
    <span class="xml-tag"><Custom10</span> <span class="xml-tag">/></span>
    <span class="xml-tag"><Custom11</span> <span class="xml-tag">/></span>
    <span class="xml-tag"><Custom12</span> <span class="xml-tag">/></span>
    <span class="xml-tag"><Custom13</span> <span class="xml-tag">/></span>
    <span class="xml-tag"><Custom14</span> <span class="xml-tag">/></span>
    <span class="xml-tag"><Custom15</span> <span class="xml-tag">/></span>
    <span class="xml-tag"><Custom16</span> <span class="xml-tag">/></span>
    <span class="xml-tag"><Custom17</span> <span class="xml-tag">/></span>
    <span class="xml-tag"><Custom18</span> <span class="xml-tag">/></span>
    <span class="xml-tag"><Custom19</span> <span class="xml-tag">/></span>
    <span class="xml-tag"><Custom20</span> <span class="xml-tag">/></span>
    <span class="xml-tag"><Custom21</span> <span class="xml-tag">/></span>
    <span class="xml-tag"><Custom22</span> <span class="xml-tag">/></span>
    <span class="xml-tag"><Custom23</span> <span class="xml-tag">/></span>
    <span class="xml-tag"><Custom24</span> <span class="xml-tag">/></span>
    <span class="xml-tag"><Custom25</span> <span class="xml-tag">/></span>
    <span class="xml-tag"><Custom26</span> <span class="xml-tag">/></span> 
    <span class="xml-tag"><Custom27</span> <span class="xml-tag">/></span>
    <span class="xml-tag"><Custom28</span> <span class="xml-tag">/></span>
    <span class="xml-tag"><Custom29</span> <span class="xml-tag">/></span>
    <span class="xml-tag"><Custom30</span> <span class="xml-tag">/></span>
    <span class="xml-tag"><Custom31</span> <span class="xml-tag">/></span>
    <span class="xml-tag"><Custom32</span> <span class="xml-tag">/></span>
    <span class="xml-tag"><Custom33</span> <span class="xml-tag">/></span>
    <span class="xml-tag"><Custom34</span> <span class="xml-tag">/></span>
    <span class="xml-tag"><Custom35</span> <span class="xml-tag">/></span>
    <span class="xml-tag"><Custom36</span> <span class="xml-tag">/></span>
    <span class="xml-tag"><Custom37</span> <span class="xml-tag">/></span>
    <span class="xml-tag"><Custom38</span> <span class="xml-tag">/></span>
    <span class="xml-tag"><Custom39</span> <span class="xml-tag">/></span> 
    <span class="xml-tag"><Custom40</span> <span class="xml-tag">/></span>
</ExpenseEntry</span>
