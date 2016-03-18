---
title: GET List of Reports
layout: reference
---

# Expense Report Resource: GET List of Reports v2.0

## Versioning Summary
The Get List of Reports version 2.0 endpoint of the Expense Report resource is now DEPRECATED.

It has been superseded by two GET endpoints of a new resource called ReportDigests which can be used to search for expense reports using two or more search criteria and getting an expense report summary. The ReportDigests GET endpoints are:  

* Get all report digests — Returns all report digests the user owns based on the specified search criteria.
* Get a single report digest by ID — Returns a report digest by ID.  

For more information on the ReportDigests resource, see the Expense Report Resource: GET page.

## Description
The Get List of Reports version 2.0 endpoint can be used to get a list of reports for an entire company.

### Get List of Reports Request
**Description**
Retrieves a list of up to 1000 reports to be used in financial and accounting system integration. This endpoint can be used to get a list of reports for the entire company.
Developers that are creating financial system integration may want to use the following search terms to get sets of reports ready for payment from Concur.  

* The BatchID search term specifies the payment batch that the reports are included in. The search term returns all reports included in the specified batch, regardless of time or user. This search term is used with Concur clients who have the Standard Expense and Concurforce products.
* The JobKey search term specifies the accounting extract that the reports are included in. The search term returns all reports included in the specified extract job or batch, regardless of time or user. This search term is used with Concur clients who have the Professional and Premium Expense products.  

Developers can also use one or more of the following search terms to find reports.  

* The HasAttendees search term returns reports that have one or more expense entries with associated attendees.
* The Status search term specifies which report payment or approval status to return. If no Status value is sent, the default Status of Active will be used.
* The PaymentTypeID search term specifies the payment method for the report entries. The report must have at least one entry with the specified payment type. The possible payment types are returned in the PaymentTypeID element by the Get Expense Group Configuration endpoint.
* The ReportCurrency search term returns all reports with the specified reimbursement currency.
* The ReimbursementMethod search term returns reports that are set to be paid by the specified reimbursement method.
* The ReportCountry search term specifies the country indicated on the report.
* The LoginID search term specifies a report owner that is not the OAuth Consumer.
* The ModifiedAfterDate or ModifiedBeforeDate search terms return reports modified after or before a certain date and time.  

**Supported Accept Types**
* application/xml  

**Query Parameters - Optional**  
* BatchID
* HasAttendees
* Job Key
* Status
* ReportCurrency
* PaymentTypeID
* ReimbursementMethod
* Report Country
* LoginID
* ModifiedAfterDate
* ModifiedBeforeDate  

**Batch ID:** The BatchID identifies which payment batch the reports are included in. The BatchID value is returned in the BatchID element in the Response of the Get Payment Batch List endpoint. This search term is used with Concur clients who have the Standard Expense and Concurforce products.  

**HasAttendees:** The HasAttendees query parameter returns reports that have one or more expense entries with attendees. The HasAttendees parameter supports the true value only.  

**Job Key:** The Jobkey identifies which accounting extract or payment batch the reports are included in. The Jobkey value is returned in the id element in the Response of the Post Extract Job Request endpoint, or the jobkey element in the Response of the Post Payment Batch Close endpoint. The View value, if provided, is ignored. This search term is used with Concur clients who have the Professional and Premium Expense products.  

**Status:** The Status value is designed to be used when retrieving reports for the entire company. It can be used only by OAuth consumers with the Web Services Admin role in Concur. If a request is sent by the Web Services Admin that does not contain a Status value, the Active status will be used. The possible status values are:

Value | Description
-----|------
ACTIVE	| Returns unsubmitted and unpaid (payment status is not Paid) reports.
UNSUBMITTED	| Returns unsubmitted reports.
PENDING	| Returns submitted reports pending approval.
ACCOUNTINGREVIEW	| Returns approved reports pending accounting review. These reports are waiting for the Processor to approve the report.
PROCESSING	| Returns processed reports pending financial integration. These reports have an Approval Status of Final Approval and a Payment Status of Unpaid.
INTEGRATED	| Returns reports with financial integration completed. These reports have a Payment Status of Paid.
PENDINGEXTERNALVALIDATION	| Returns reports that are at the Pending External Validation workflow step. This workflow step can be added after report submission and before the report is extracted for payment.
PAYMENTCONFIRMED	| Returns reports with confirmed payments. These reports have a Payment Status of Payment Confirmed. 

**Report Currency:** The ReportCurrency identifies the reimbursement currency of the report. This value matches the reimbursement currency of the user who submitted the report. Format: 3-letter ISO 4217 currency code. Example: USD  

**Payment Type ID:** The PaymentTypeID identifies the payment method for entries in the report. At least one entry in the report must have the specified payment type for the report to appear in the list. The possible payment types are returned in the PaymentTypeID element by the Get Expense Group Configuration function. The Payment Type Name of Cash signifies that the employee will be reimbursed directly for the expense.  

**Reimbursement Method:** The ReimbursementMethod identifies the process that the report will be reimbursed with. When using the Reimbursement Method search term, it is recommended to also use the PaymentTypeID search term, where the Payment Type Name = Cash. While it's not required to use Payment Type Name = Cash, doing so delivers results that are relevant for employee reimbursement. The possible ReimbursementMethod values are:

* ADPPAY - ADP Payroll (via EPIP file)
* APCHECK - Company Check (via Accounts Payable)
* CNQRPAY - Expense Pay by Concur
* PMTSERV - Other reimbursement method  

**NOTE:** The ReimbursementMethod search term is not available for Concur Premier- Professional and Premium clients.  

**Report Country:** The Report Country search term returns all reports for the specified country. Format: The 2-letter ISO 3166-1 alpha-2 country code for report's country. Example: US  

**Login ID:** The LoginID is the Concur login for a report owner that is not the OAuth consumer. This limits the response to reports owned by the specified user.  

**Modified After Date:** This returns reports including their associated dependents (entries, itemizations, allocations, and attendees) that were modified after the specified date and time. This search term can be used along with other search terms to narrow the results. The date and time (if desired) should be in UTC. The format is: YYYY-MM-DDThh:mm:ss  
  
/api/expense/expensereport/v2.0/Reports/?modifiedafterdate=2012-01-01T00:00:00  
  
**Modified Before Date:** This returns reports including their associated dependents (entries, itemizations, allocations, and attendees) that were modified before the specified date and time. This search term can be used along with other search terms to narrow the results. The date and time (if desired) should be in UTC. The format is: YYYY-MM-DDThh:mm:ss  
  
/api/expense/expensereport/v2.0/Reports/?modifiedbeforedate=2012-01-01T00:00:00  
  
Request Headers - Required | Request Headers - Optional
-----|------
Authorization header with OAuth token for valid Concur user. The OAuth consumer must have one of the following user roles in Concur: Company Administrator or Web Services Administrator for Professional, or Can Administer for Standard. These roles allow the user to manage data for the entire company | none

#### XML Example Request by Status
```
GET https://www.concursolutions.com/api/expense/expensereport/v2.0/Reports/?status=PROCESSING  HTTP/1.1
Authorization: OAuth {access token} 
...
```
#### XML Example Request by BatchID
```
GET https://www.concursolutions.com/api/expense/expensereport/v2.0/Reports/?batchid=5jj374sh$W2Lsa9y28w12  HTTP/1.1
Authorization: OAuth {access token} 
...
```
#### XML Example Request for Reports with Attendees
```
GET https://www.concursolutions.com/api/expense/expenserepo/v2.0/Reports/?HasAttendees=true HTTP/1.1
Authorization: OAuth {access token} 
...
```
#### XML Example Request by Job Key
```
GET https://www.concursolutions.com/api/expense/expensereport/v2.0/Reports/?jobkey=5jj374sh9y28w12  HTTP/1.1
Authorization: OAuth {access token} 
...
```
#### XML Example Request by Report Currency
```
GET https://www.concursolutions.com/api/expense/expensereport/v2.0/Reports/?ReportCurrency=USD  HTTP/1.1
Authorization: OAuth {access token} 
...
```
#### XML Example Request by Payment Type ID
```
GET https://www.concursolutions.com/api/expense/expensereport/v2.0/Reports/?PaymentTypeID=nr74tQrD8PorkF6yvS0Sm8ZeSGsw  HTTP/1.1
Authorization: OAuth {access token} 
...
```
#### XML Example Request by Reimbursement Method and Payment Type
```
GET https://www.concursolutions.com/api/expense/expensereport/v2.0/Reports/?ReimbursementMethod=CNQRPAY&PaymentTypeID=nr74tQrD8PorkF6yvS0Sm8ZeSGsw  HTTP/1.1
Authorization: OAuth {access token} 
...
```
#### XML Example Request by Report Country
```
GET https://www.concursolutions.com/api/expense/expensereport/v2.0/Reports/?reportcountry=US  HTTP/1.1
Authorization: OAuth {access token} 
...
```
#### XML Example Request by Login ID
```
GET https://www.concursolutions.com/api/expense/expensereport/v2.0/Reports/?loginid=cm@example.com  HTTP/1.1
Authorization: OAuth {access token} 
...
```
#### XML Example Request by Modified Date
```
GET https://www.concursolutions.com/api/expense/expenserepo/v2.0/Reports/?modifiedafterdate=2012-01-01T00:00:00 HTTP/1.1
Authorization: OAuth {access token} 
...
```

### Get List of Reports Response

HTTP Responses | Supported Content Types
-----|------
HTTP Status Codes | * application/xml

**Content Body:** This request will return a ReportsList parent element with a ReportSummary child element for each report. The ReportSummary elements will have the following child elements:  

Element | Description
-----|------
ReportName	| The name of the report. Maximum 40 characters.
ReportID	| The unique identifier for the report, which appears in the Concur Expense UI. Maximum 40 character varchar.
ReportCurrency	| The 3-letter ISO 4217 currency code for the expense report currency. Maximum 3 characters.
ReportTotal	| The total amount of the report. Maximum 23 characters.
ReportDate	| The create date of the report. Maximum 10 characters.
LastComment	| The text of the most recent comment on the report.
ReportDetailsURL	| The URL to access the report details.
ExpenseUserLoginID	| The Login ID of the user this report belongs to. Maximum 128 characters.
ApproverLoginID	| The Login ID of the user's expense approver. Maximum 128 characters.
EmployeeName	| The name of the expense report owner. Maximum 66 characters.
ApprovalStatus	| The report's approval status, in the OAuth consumer's language.
PaymentStatus	| The report's payment status, in the OAuth consumer's language.
ApprovalURL	| The URL the user can use to log in to Concur to approve the report. This element appears when requesting the TOAPPROVE view, and does not appear when using the Jobkey or BatchID search terms

NOTE: The ApprovalURL provides a link to Expense that can be used with SSO. The link can be put into a browser window, then the approver is automatically logged into Expense and the expense report opens if:  

The company uses a Concur-supported SSO platform (and does not use the Enforce option)  
- and -  
The approver is currently on the company network or is using VPN  
  
Otherwise, when the approver clicks the link, the Expense login page appears. The approver logs in and follows the normal steps for approving reports.  

#### XML Example of Successful Response
```
200 OK
Content-Type: application/xml

<ReportsList 
    xmlns="http://www.concursolutions.com/api/expense/expensereport/2012/06">
    <ReportSummary>
        <ReportName>Client Meeting</ReportName>
        <ReportId>J20sh19D8lW2h8Dhs490ie</ReportId>
        <ReportTotal>175.23000000</ReportTotal>
        <ReportCurrency>USD</ReportCurrency>
        <ReportDate>2012-07-12T19:22:35</ReportDate>
        <LastComment>Dinner and drinks</LastComment>
        <Report-Full-Details-Url>https://www.concursolutions.com/api/expense/expensereport/v2.0/report/J20sh19D8lW2h8Dhs490ie</Report-Full-Details-Url>
        <ExpenseUserLoginID>cmiller@example.com</ExpenseUserLoginID>
        <ApproverLoginID>tbrown@example.com</ApproverLoginID>
        <EmployeeName>Chris Miller</EmployeeName>
        <ApprovalStatus>Final Approval</ApprovalStatus>
        <PaymentStatus>Unpaid</PaymentStatus>
    </ReportSummary>
    <ReportSummary>
        <ReportName>Trip to Seattle</ReportName>
        <ReportId>k1jDJ82H2h9as826h8hh2lk</ReportId>
        <ReportTotal>1212.72000000</ReportTotal>
        <ReportCurrency>USD</ReportCurrency>
        <ReportDate>2012-07-17T08:11:56</ReportDate>
        <LastComment></LastComment> 
        <Report-Full-Details-Url>https://www.concursolutions.com/api/expense/expensereport/v2.0/report/k1jDJ82H2h9as826h8hh2lk</Report-Full-Details-Url>
        <ExpenseUserLoginID>tbrown@example.com</ExpenseUserLoginID>
        <ApproverLoginID>pdavis@example.com</ApproverLoginID>
        <EmployeeName>Terry Brown</EmployeeName>
        <ApprovalStatus>Final Approval</ApprovalStatus>
        <PaymentStatus>Unpaid</PaymentStatus>
    </ReportSummary>
</ReportsList>
```

### Get Report Details Request

Description | Supported Accept Types
-----|------
Retrieves the full set of information for the report. Includes the Report Header, Entry, Attendee, Itemization and Allocation details. NOTE: Some elements will appear only if the OAuth consumer has the Web Services Admin role. These include: The ReportKey element, the employee's credit card information, and the employee's bank account information, VAT information, Journal entries. Connectors that utilize this information go through a review process with Concur that includes verification of secure data handling. | * application/xml  
  
Query Parameters - Required | Query Parameters - Optional
-----|------
{reportId} The identifier for the desired report. Example: https://www.concursolutions.com/api/expense/expensereport/v2.0/report/{reportId} URI Source: The ReportId is returned in the ReportId element of the Get List of Reports function. | None
  
Request Headers - Required | Request Headers - Optional
-----|------
Authorization header with OAuth token for valid Concur user. The OAuth consumer must have one of the following user roles in Concur: Company Administrator or Web Services Administrator for Professional, or Can Administer for Standard. These roles allow the user to manage data for the entire company. | None

#### XML Example Request
```
GET https://www.concursolutions.com/api/expense/expensereport/v2.0/report/n6ujbuLd1Arwe45lT7As3ThJYJf2dAsrrEW HTTP/1.1
Authorization: OAuth {access token} 
...
```

### Get Report Details Response

HTTP Responses | Supported Content Types
-----|------
HTTP Status Codes | * application/xm
  
**Content Body:** This request will return a ReportDetails parent element with the following child elements: 

Element | Description
-----|------
UserLoginID	| The user ID of the report owner. Maximum 128 characters.
EmployeeName	| The name of the employee who created the report. Maximum 66 characters.
ReportID	| The unique identifier for the report, which appears in the Concur Expense UI. Maximum 32 character varchar.
ReportKey	| The unencrypted unique identifier for the report, that appears on the report header. The element appears only if the OAuth consumer has the Web Services Admin role in Concur. Maximum 48 characters.
ReportName	| The name of the report. Maximum 40 characters. Purpose	The information from the Business Purpose field.
ReportDate	| The date from the report header. Format: YYYY-MM-DDThh:mm:ss
CreationDate	| The date the report was created. Format: YYYY-MM-DDThh:mm:ss
SubmitDate	| The date the report was submitted. Maximum 10 characters.
PaidDate	| The date the report was extracted for payment. This element has an attribute named i:nil. If the value for this element is null, the i:nil attribute will be set to true. Format: YYYY-MM-DDThh:mm:ss
CurrencyCode	| The 3-letter ISO 4217 currency code for the expense report currency. The expense report currency is defined as the report creator's default reimbursement currency.
ReportTotal	| The total amount of the report. Maximum 23 characters.
PersonalExpenses	| The total amount of expenses marked as personal. Maximum 23 characters.
AmountDueEmployee	| The total amount due to the employee for the report. Maximum 23 characters.
AmountDueCompanyCard	| The total amount due to the company card for the report. Maximum 23 characters.
TotalClaimedAmount	| The total amount of all non-personal expenses in the report. Maximum 23 characters.
TotalApprovedAmount	| The total amount of approved expenses in the report. Maximum 23 characters.
ApprovalStatusCode	| The approval status code for the report.
ApprovalStatusName	| The approval status name for the report.
PaymentStatusCode	| The unique identifier for the payment status of the report.
PaymentStatusName	| The payment status of the report.
OrgUnit1 through OrgUnit6	| The details from the Org Unit custom fields. These may not have data, depending on configuration. Maximum 48 characters for each field.
Custom1 through Custom20	| The details from the Custom fields. These may not have data, depending on configuration. If report owner information is stored in these fields, it may be outdated. Refer to the ReportOwner parent element for the current owner information. The custom fields may have the following child elements: Type (The custom field type. Will be one of the following: Amount, Boolean, ConnectedList, Date, Integer, List, Number, Text), Value (The value in the custom field. Maximum 48 characters.), Code (Custom list fields will include the list item code in this element.)
LedgerName	| The name of the expense report ledger. Maximum 20 characters.
PolicyID	| The unique identifier of the policy that applies to this report. Maximum 64 characters.
EverSentBack	| Whether the report has ever been sent back to the employee. Format: Y/N
HasException	| Whether the report has exceptions. Format: Y/N
WorkflowActionURL	| The URL to post a workflow action to the report using the Post Report Workflow Action function.
ExpenseEntriesList	| This parent element has an ExpenseEntry child element for each entry. Refer to the Expense Entry Child Elements table for more information.
ReportImageURL	| The URL to access the image associated with the report. This URL is valid for 30 minutes after the web service call.
Country	| The report country. Maximum 2 characters. Format: The ISO 3166-1 alpha-2 country code. Example: United States is US.
CountrySubdivision	| The report country subdivision. Format: ISO 3166-2:2007 country subdivision.
ProcessingPaymentDate	| The date that the report completed all approvals and was ready to be extracted for payment. Format: YYYY-MM-DD
ReceiptsReceived	| If Y, then this report has its receipt receipt confirmed by the Expense Processor. Format: Y/N
ReportOwner	| This parent element includes details about the employee who is the report owner. It saves the caller from calling the Get User Information function to get employee information commonly used in accounting integration. The ReportOwner element includes the most recent information about the report owner, at the time the report is requested. The ReportOwner parent element includes the following child elements: EmployeeCustom21 (The report owner's group ID. Maximum 48 characters.), EmployeeID	(Employee ID often also serves as the employee's Vendor ID for AP system integrations or Payroll ID for Payroll integrations. Maximum 48 characters.), EmployeeOrgUnit1 through EmployeeOrgUnit6 (The report owner's organizational unit information. Maximum 48 characters for each field. FirstName (The report owner's first name. Maximum 32 characters.), LastName (The report owner's last name. Maximum 32 characters.), MiddleInitial (The report owner's middle initial. Maximum 1 character.), ReimbursementMethodCode (The report owner's reimbursement method code, as defined in the employee's Profile.)
EmployeeBankAccount	| This parent element includes the bank account data found on the Bank Information page in Profile. This data is used in Payment System integrations where the payment system reimburses the employee via this bank account. The EmployeeBankAccount parent element contains the following child elements: BankNumber (The bank identification number entered on the Bank Information page. Maximum 11 characters.), BankName (The bank name entered on the Bank Information page. Maximum 48 characters.), BranchLocation (The branch location entered on the Bank Information page. Maximum 30 characters.), AccountNumber (The bank account number entered on the Bank Information page. Maximum 100 characters.), AccountName (The name on the account entered on the Bank Information page.), PostalAddressLine1 (The postal address line 1 entered on the Bank Information page. Maximum 48 characters.), PostalAddressLine2 (The postal address line 2 entered on the Bank Information page. Maximum 48 characters.), PostalAddressCity (The postal address city entered on the Bank Information page. Maximum 24 characters.), PostalAddressRegion (The postal address region entered on the Bank Information page. Maximum 24 characters.), PostalAddressCode (The postal address code entered on the Bank Information page. Maximum 20 characters.), PostalAddressCountry	(The postal address country entered on the Bank Information page. Maximum 2 characters. Format: The The ISO 3166-1 alpha-2 country code. Example: United States is US.)

  
#### Expense Entry Child Elements

Element | Description
-----|------
ReportEntryID	| The ID of the report entry. Maximum 13 characters.
ExpenseTypeID	| The expense type ID for the expense entry. Expense Type IDs are returned in the ExpKey element by the Get Expense Group Configuration endpoint.
ExpenseTypeName	| The expense type name. Maximum 64 characters.
SpendCategory	| The spend category specified for this expense type. Varies by client, used in reporting.
PaymentTypeCode	| The code for the payment type. Maximum 4 characters.
PaymentTypeName	| The name for the payment type. Maximum 80 characters.
TransactionDate	| The date of the expense entry. Maximum 10 characters. Format: YYYY-MM-DD
TransactionCurrencyName	| The name of the transaction currency. Example: US, Dollar
ExchangeRate	| The exchange rate that applies to the entry. Maximum 23 characters.
TransactionAmount	| The amount of the expense entry in the original transaction currency. Maximum 23 characters.
PostedAmount	| The amount of the expense entry in the user's reimbursement currency. The user's reimbursement currency is returned in the CrnCode element for the report. Maximum 23 characters.
ApprovedAmount	| The approved amount of the expense entry in the user's reimbursement currency.The user's reimbursement currency is returned in the CrnCode element for the report. Maximum 23 characters.
BusinessPurpose	| The text from the Business Purpose field of the entry. Maximum 64 characters.
VendorDescription	| The vendor name of the expense entry, which can be entered manually by the user or imported from the card transaction Merchant Name field. Maximum 64 characters.
LocationName	| The location for the expense entry, usually the city name.
LocationSubdivision	| The location's State, Province, or Country Subdivision. Maximum 6 characters.
LocationCountry	| The location's Country. Maximum 2 characters.
OrgUnit1 through OrgUnit	| The details from the Org Unit custom fields. These may not have data, depending on configuration. Maximum 48 characters for each field.
Custom1 through Custom40	| The details from the Custom fields. These may not have data, depending on configuration. The custom fields may have the following child elements: Type (The custom field type. Will be one of the following: Amount, Boolean, ConnectedList, Date, Integer, List, Number, Text), Value (The value in the custom field. Maximum 48 characters.), Code (Custom list fields will include the list item code in this element.)
FormID	| The ID for the expense entry form.
EntryImageID	| The unique identifier for the image associated with the entry.
HasVat	| Whether the entry contains VAT data. Maximum 1 character. Format: Y/N
HasComments	| Whether the expense entry has comments. Maximum 1 character. Format: Y/N
CommentCount	| The number of comments associated with the expense entry.
IsItemized	| Whether the expense entry is itemized. Maximum 1 character. Format: Y/N
HasExceptions	| Whether the expense entry has exceptions. Maximum 1 character. Format: Y/N
IsPersonal	| Whether the expense entry is marked as personal. Maximum 1 character. Format: Y/N
HasAttendees	| Whether the expense entry has attendees. Maximum 1 character. Format: Y/N
HasAllocation	| Defines the amount of allocations for the expense. Maximum 1 character. Possible values are: P, for partial allocation, F, for full allocation, or N, for no allocation.
IsCreditCardCharge	| Whether the expense came from a credit card feed. Maximum 1 character. Format: Y/N
IsPersonalCardCharge	| Whether the expense came from a personal card feed. Maximum 1 character. Format: Y/N
ReceiptRequired | Whether the original receipt is required for the entry. Maximum 1 character. Format: Y/N
ImageRequired	| Whether a receipt image is required for the entry. Maximum 1 character. Format: Y/N
E-ReceiptID	| The ID for the attached e-receipt, if available.
LastModifiedDate	| The date the expense entry was last changed. Maximum 19 characters. Format: YYYY-MM-DDThh:mm:ss
ItemizationsList	| The list of itemizations for the expense entry. This parent element will have at least one Itemization child element. If the expense entry is not itemized, the Itemization will contain the same values as the entry. If the expense entry has itemizations, there will be one Itemization child element for each itemization. Refer to the Itemization Entry Details Child Elements table for more information. NOTE: There are a few rare cases where the ItemizationsList will be null. This happens when a report entry has a payment type code that is not IBCP with offsets or CBCP and there is a Regular or Child expense entry with an Approved Amount equal to zero. The expense entry will have a Null ItemizationsList.
ReportEntryVendorName	| Vendor name the employee selected from the Vendor list field. Maximum 64 characters.
ReportEntryReceiptReceived	| If Y, then this entry has been marked as reviewed by a processor. Maximum 1 character. Format: Y/N
ReportEntryReceiptType	| Maximum 1 character. One of these: T = tax receipt, R = regular receipt, N = no receipt
CardTransaction	| This parent element includes the card transaction data found in the card transaction associated to this expense entry. This data is used in Payment System integrations where the payment system reimburses the card issuer for the indicated card account. Refer to the Card Transaction Child Elements field.
ExpensePay	| Whether the entry was paid using the Expense Pay service. This element have a value if the report has reached the Processing Payment workflow step. Format: Yes/No

#### <a name="CE"></a>Itemization Entry Details Child Elements

Element | Description
-----|------
ItemType	| The type of itemization. If the expense entry does not have any itemizations, this will be set to Regular. If the expense entry contains itemizations, each one will be set to Child.
ItemizationID	| The unique identifier for the itemization. Maximum 19 characters.
ExpenseTypeID	| The expense type ID for the itemization.
ExpenseTypeName	| The expense type for the itemization. Maximum 64 characters.
TransactionDate	| The date of the transaction. Maximum 10 characters. Format: YYYY-MM-DD
TransactionAmount	| The amount for the itemization in the expense currency. Maximum 23 characters.
PostedAmount	| The amount for the itemization in the user's reimbursement currency. The user's reimbursement currency is returned in the CrnCode element for the report. Maximum 23 characters.
ApprovedAmount	| The approved amount of the itemization in the user's reimbursement currency. The user's reimbursement currency is returned in the CrnCode element for the report. Maximum 23 characters.
BusinessPurpose	| The business purpose field from the report header.
OrgUnit1 through OrgUnit6	| The details from the Org Unit custom fields. These may not have data, depending on configuration. Maximum 48 characters for each field.
Custom1 through Custom40	| The custom fields associated with the itemization. These may not have data, depending on your configuration. The custom fields may have the following child elements: Type (The custom field type. Will be one of the following: Amount, Boolean, ConnectedList, Date, Integer, List, Number, Text), Value (The value in the custom field. Maximum 48 characters.), Code (Custom list fields will include the list item code in this element.)
HasComments	| Whether the itemization has comments. Maximum 1 character. Format: Y/N
CommentCount	| The number of comments associated with the itemization.
IsPersonal	| Whether the itemization is personal. Maximum 1 character. Format: Y/N
LastModified	| The UTC date when the itemization was last modified. Maximum 19 characters. Format: YYYY-MM-DDThh:mm:ss
AttendeesList	| This parent element contains one Attendee element for each associated attendee. The Attendee element contains [child elements](#CE1)
AllocationsList	| This parent element contains at least one Allocation element. It will contain multiple Allocation elements if there are multiple allocations for the itemization.


####  <a name="CE1"></a>Attendee List Child Elements

Element | Description
-----|------
AttendeeType	| The type of attendee. Maximum 40 characters.
FirstName	| The attendee's first name. Maximum 50 characters.
LastName	| The attendee's last name. Maximum 132 characters.
Company	| The attendee's company name. Maximum 150 characters.
Title	| The attendee's title. Maximum 32 characters.
ExternalID	| The unique identifier for the attendee, managed outside Concur. Maximum 48 characters.
Custom1 through Custom20	| The details from the Custom fields. These may not have data, depending on configuration. The custom fields may have the following child elements: Type (The custom field type. Will be one of the following: Amount, Boolean, ConnectedList, Date, Integer, List, Number, Text), Value (The value in the custom field. Maximum 100 characters.), Code	(Custom list fields will include the list item code in this element.)
HasExceptionsPrevYear	| Whether the attendee has exceptions in the previous year, based on yearly total limits for attendees. Maximum 1 character. Format: Y/N
HasExceptionsYTD	| Whether the attendee has exceptions in the current year, based on yearly total limits for attendees. Maximum 1 character. Format: Y/N
IsDeleted	| Whether the attendee is marked as deleted. Maximum 1 character. Format: Y/N
OwnerName	| The name of the employee that owns the attendee record.
TotalAmountPrevYear	| The total amount spent on the attendee in the previous calendar year.
TotalAmountYTD	| The total amount spent on the attendee in the current calendar year.
VersionNumber	| The attendee's version number.
AttendeeID	| Attendee unique identifier within Concur.
AttendeeTypeCode	| The unique identifier for the attendee type.
AttendeeOwnerID	| The unique identifier for the person or system that owns the attendee.
CurrencyCode	| The 3-letter ISO 4217 currency code for attendee related amounts.

#### Allocations List Child Elements

Element | Description
-----|------
AllocationID	| The unique alphanumeric identifier for the allocation. Maximum 13 characters.
Percentage	| The percentage of the expense that is included in this allocation. Maximum 11 characters.
AccountCode1	| The primary accounting code assigned to the expense type associated with this allocation. Typically, expense types have only this primary account code.
AccountCode2	| The secondary or alternative  accounting code assigned to the expense type associated with this allocation. In rare cases some expense types include this accounting code to handle special cases. One example of these special cases is when using travel allowance, where one expense would use the primary account code for the allowed amount, and the alternative account code for the overage. Another example is personal use of a company car. Refer to the Expense: Account Codes Setup Guide for more information on how Concur Expense determines which accounting codes to use.
Custom1 through Custom20	| The custom fields associated with the allocation. These may not have data, depending on your configuration. The custom fields may have the following child elements: Type	(The custom field type. Will be one of the following: Amount, Boolean, ConnectedList, Date, Integer, List, Number, Text), Value	(The value in the custom field. Maximum 48 characters.), Code (Custom list fields will include the list item code in this element.)
JournalEntriesList	| This parent element contains at least one JournalEntry child element. It contains multiple JournalEntry elements if the allocation has multiple journal entries. The JournalEntry element contains [child elements](#CE2)
VATDataList	| This parent element contains one VATData element for each VAT line item. This element will be empty if there are no VAT line items. The VATData parent element contains [child elements](#CE3)


####  <a name="CE2"></a>JournalEntry Child Elements

Element | Description
-----|------
JournalID	| Unique identifier for the journal entry.
PayerPaymentTypeName | Payer payment type. Maximum 64 characters. One of these: Company = Company, Employee = Employee, Payment Type for the Credit Card Payment Type
PayerPaymentTypeCode	| Payment code name for the payer. Maximum 80 characters.
PayeePaymentTypeName	| Payee payment type. Maximum 64 characters. One of these: Company = Company, Employee = Employee Payment Type for the Credit Card Payment Type
PayeePaymentCode	| Payment code name for the payee. Maximum 80 characters.
AccountCode	| The account code Concur Expense determines should apply to this journal entry.  For journal entries associated to an allocation, Concur Expense uses the business logic described in the Expense: Account Codes Setup Guide to determine whether the primary or secondary account code should apply.  When there is no allocation associated to the journal entry, Concur Expense uses clearing account codes for Credit Card and Cash Advance for personal use of a company paid expense or a cash advance issued to an employee respectively. Maximum 48 characters. NOTE: The developer should almost always use this accounting code when creating financial transactions in financial systems.  In some situations a developer may need to use the accounting codes in the Allocation parent element.
DebitOrCredit	| Maximum 2 characters. Either: DR = Debit, CR = credit
Amount	| Value, as credit or debit, of the amount to be exchanged between the payer and payee for this expense account code (not an absolute value) Maximum 23 characters. EXAMPLES: Value of zero, credit, or debit, as the following: 0 (Zero) "0", + (Plus / Debit) "+50.00", - (Minus / Credit) "-50.00"
JobRunKey	| Either the unique identifier for job run for the accounting extract that processed this journal, or a static value indicating the journal was processed by Manual Pay, Expense Pay, or some other system.

####  <a name="CE3"></a>VATData Child Elements

Element | Description
-----|------
TaxName	| Tax authority name. Maximum 50 characters.
TaxAuthorityLabel	| 5-digit code that appears on the expense entry pages. Maximum 5 characters.
TaxTransactionAmount	| Calculated tax amount for this expense in the spend currency. Maximum 23 characters.
TaxPostedAmount	| Calculated tax amount for this expense entry in the reimbursement currency. Maximum 23 characters.
Source	| Specifies how the tax data was derived. Maximum 4 characters. One of these: CARD= Provided from company card, USER = Entered by employee, SYST = Calculated by system, PROC = Entered by processor
TaxReclaimTransactionAmount	| Calculated amount of tax eligible for reclaim in the spend currency. Maximum 23 characters.
TaxReclaimPostedAmount	| Calculated amount of tax eligible for reclaim in the reimbursement currency. Maximum 23 characters.

#### Card Transaction Child Elements

Element | Description
-----|------
AccountNumber	| Credit card number (not encrypted) used for this expense. Maximum 255 characters.
CardDescription	| The name on the credit card used for this expense. Maximum 255 characters.
CardTypeCode	| Type of credit card.
TransactionReferenceNumber	| Reference number from the credit card vendor. Maximum 64 characters.
TransactionCCTType	| Transaction type supplied by card vendor. Maximum 3 characters. One of these: ANF = Annual Fees, CAV = Cash Advance, CCF = Cash and Check Fees, CHG = Other Bank Charges and Fees, FNC = Finance Charges, LAF = Late Fees, NSF = Insufficient Funds Check Fees, PAY = Payment, RPE = Credit Card Transaction
TransactionID	| Calculated value assigned to this card entry during the import process. Maximum 32 characters.
TransactionAmount	| Amount of the charge in the spend currency. Maximum 23 characters.
TaxAmount	| Amount of tax on the transaction amount (if provided by card vendor). Maximum 23 characters.
TransactionAlphaCode	| Currency code for the spend currency. Maximum 3 characters. Format: ISO 4217 3 digit alpha code
PostedAmount	| Amount of the charge in the billing currency of the card. Maximum 23 characters.
PostedAlphaCode	| Currency code for the card billing currency. Maximum 3 characters. Format: ISO 4217 3 digit alpha code
TransactionDate	| Date the charge was made at the merchant. Maximum 10 characters.
PostedDate	| Date the charge was posted to the credit card account. Maximum 10 characters.
Description	| Description of the charge from the merchant. Maximum 42 characters.
MasterCardCode	| Merchant code sent from the credit card vendor. Maximum 5 characters.
TransactionMerchantName	| Name of the merchant. Maximum 50 characters.
MerchantCity	| Merchant city. Maximum 40 characters.
MerchantState	| Merchant State/Province. Maximum 32 characters.
MerchantCountryCode	| Merchant country location code. Format: 2 digit alpha code
MerchantReferenceNumber	| Merchant reference number passed from the merchant to the card. Maximum 15 characters.
ExchangeRateFromBillingToEmployeeCurrency	| Currency exchange rate used between the credit card billing currency and the employee's reimbursement currency. Maximum 23 characters.
BillingAmount	| Amount due to the company card from the employee or company (depending on who is responsible for the bill) for this detail row. Maximum 23 characters.

#### XML Example of Successful Response
```
200 OK
Content-Type: application/xml

<?xml version="1.0" encoding="utf-8"?>
<ReportDetails xmlns="http://www.concursolutions.com/api/expense/expensereport/2012/07" xmlns:i="http://www.w3.org/2001/XMLSchema-instance">
    <UserLoginID>cm@example.com</UserLoginID>
    <EmployeeName>Miller, Chris</EmployeeName>
    <ReportID>425FE2ADB4954FCA90CD</ReportID>
    <ReportName>Client Meeting</ReportName>
    <Purpose>Sales meeting</Purpose>
    <ReportDate>2013-01-10T00:00:00</ReportDate>
    <CreationDate>2013-01-11T01:58:20</CreationDate>
    <SubmitDate>0001-01-01T00:00:00</SubmitDate>
    <PaidDate i:nil="true" />
    <CurrencyCode>USD</CurrencyCode>
    <ReportTotal>50.00000000</ReportTotal>
    <PersonalExpenses>0.00000000</PersonalExpenses>
    <AmountDueEmployee>50.00000000</AmountDueEmployee>
    <AmountDueCompanyCard>0.00000000</AmountDueCompanyCard>
    <TotalClaimedAmount>50.00000000</TotalClaimedAmount>
    <TotalApprovedAmount>50.00000000</TotalApprovedAmount>
    <ApprovalStatusCode>A_NOTF</ApprovalStatusCode>
    <ApprovalStatusName>Not Submitted</ApprovalStatusName>
    <PaymentStatusCode>P_NOTP</PaymentStatusCode>
    <PaymentStatusName>Not Paid</PaymentStatusName>
    <OrgUnit1>Sales</OrgUnit1>
    <OrgUnit2 />
    <OrgUnit3 />
    <OrgUnit4 />
    <OrgUnit5 />
    <OrgUnit6 />
    <Custom1 />
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
    <LedgerName>Corporate</LedgerName>
    <PolicyID>ndrF8hjzl9FtFUdfaBwVvXP$sD1vDpRKNf</PolicyID>
    <EverSentBack>N</EverSentBack>
    <HasException>N</HasException>
    <WorkflowActionURL />
    <ExpenseEntriesList>
        <ExpenseEntry>
            <ReportEntryID>nE0avYnILN9mHdTErNSd2pH45udFoNQ$po</ReportEntryID>
            <ExpenseTypeID>BUSML</ExpenseTypeID>
            <ExpenseTypeName>Business Meal (attendees)</ExpenseTypeName>
            <SpendCategory>Entertainment</SpendCategory>
            <PaymentTypeCode>CASH</PaymentTypeCode>
            <PaymentTypeName>Cash</PaymentTypeName>
            <TransactionDate>2013-01-10T00:00:00</TransactionDate>
            <TransactionCurrencyName>US, Dollar</TransactionCurrencyName>
            <ExchangeRate>1.00000000000000</ExchangeRate>
            <TransactionAmount>50.00000000</TransactionAmount>
            <PostedAmount>50.00000000</PostedAmount>
            <ApprovedAmount />
            <BusinessPurpose />
            <VendorDescription />
            <LocationName>Washington</LocationName>
            <LocationSubdivision>US-DC</LocationSubdivision>
            <LocationCountry>US</LocationCountry>
            <OrgUnit1>Sales</OrgUnit1>
            <OrgUnit2 />
            <OrgUnit3 />
            <OrgUnit4 />
            <OrgUnit5 />
            <OrgUnit6 />
            <Custom1 />
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
            <FormID>nAaT8$puKKOhs7h2wespCW7vyyxJAJcyb5</FormID>
            <EntryImageID />
            <HasVat>N</HasVat>
            <HasComments>N</HasComments>
            <CommentCount>0</CommentCount>
            <IsItemized>Y</IsItemized>
            <HasExceptions>N</HasExceptions>
            <IsPersonal>N</IsPersonal>
            <HasAttendees>Y</HasAttendees>
            <HasAllocation>N</HasAllocation>
            <IsCreditCardCharge>N</IsCreditCardCharge>
            <IsPersonalCardCharge>N</IsPersonalCardCharge>
            <ReceiptRequired>N</ReceiptRequired>
            <ImageRequired>N</ImageRequired>
            <E-ReceiptID />
            <LastModified>2013-01-11T01:59:52</LastModified>
            <ItemizationsList>
                <Itemization>
                    <ItemType>Regular</ItemType>
                    <ItemizationID>nE0avYnILN9mHdTErNSd2pH45udFoNQ$po</ItemizationID>
                    <ExpenseTypeID>BUSML</ExpenseTypeID>
                    <ExpenseTypeName>Business Meal (attendees)</ExpenseTypeName>
                    <TransactionDate>2013-01-10T00:00:00</TransactionDate>
                    <TransactionAmount>50.00000000</TransactionAmount>
                    <PostedAmount>50.00000000</PostedAmount>
                    <ApprovedAmount />
                    <BusinessPurpose />
                    <OrgUnit1>Sales</OrgUnit1>
                    <OrgUnit2 />
                    <OrgUnit3 />
                    <OrgUnit4 />
                    <OrgUnit5 />
                    <OrgUnit6 />
                    <Custom1 />
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
                    <HasComments>N</HasComments>
                    <CommentCount>0</CommentCount>
                    <IsPersonal>N</IsPersonal>
                    <LastModified>2013-01-11T01:59:52</LastModified>
                    <AllocationsList />
                    <AttendeesList>
                        <Attendee>
                            <AttendeeType>BUSGUEST</AttendeeType>
                            <FirstName>Pat</FirstName>
                            <LastName>Davis</LastName>
                            <Company />
                            <Title />
                            <ExternalID />
                            <Custom1 />
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
                            <HasExceptionsPrevYear>N</HasExceptionsPrevYear>
                            <HasExceptionsYTD>N</HasExceptionsYTD>
                            <IsDeleted>N</IsDeleted>
                            <OwnerEmpName>Miller, Chris</OwnerEmpName>
                            <TotalAmountPrevYear>0.00000000</TotalAmountPrevYear>
                            <TotalAmountYTD>0.00000000</TotalAmountYTD>
                            <VersionNumber>1</VersionNumber>
                            <AttendeeID>nFaAj038Hw$plfUD8be0I45wTx8$sMlTd$pP</AttendeeID>
                            <AttendeeTypeCode>BUSGUEST</AttendeeTypeCode>
                            <AttendeeOwnerID>cm@example.com</AttendeeOwnerID>
                            <CurrencyCode>USD</CurrencyCode>
                        </Attendee>
                    </AttendeesList>
                </Itemization>
                <Itemization>
                    <ItemType>Child</ItemType>
                    <ItemizationID>nE0avYnILN9g$s6lCFX0jFBWmHAiTYYf9C</ItemizationID>
                    <ExpenseTypeID>BRKFT</ExpenseTypeID>
                    <ExpenseTypeName>Breakfast</ExpenseTypeName>
                    <TransactionDate>2013-01-10T00:00:00</TransactionDate>
                    <TransactionAmount>50.00000000</TransactionAmount>
                    <PostedAmount>50.00000000</PostedAmount>
                    <ApprovedAmount>50.00000000</ApprovedAmount>
                    <BusinessPurpose />
                    <OrgUnit1>Sales</OrgUnit1>
                    <OrgUnit2 />
                    <OrgUnit3 />
                    <OrgUnit4 />
                    <OrgUnit5 />
                    <OrgUnit6 />
                    <Custom1 />
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
                    <HasComments>N</HasComments>
                    <CommentCount>0</CommentCount>
                    <IsPersonal>N</IsPersonal>
                    <LastModified>2013-01-11T01:59:52</LastModified>
                    <AllocationsList>
                        <Allocation>
                            <AllocationID>ngYn5SB4OUXgRV6P8VgsQQr88SaKYvbqz</AllocationID>
                            <Percentage>100.00000000%</Percentage>
                            <AccountCode1>AC_BRKFT1</AccountCode1>
                            <AccountCode2>AC_BRKFT2</AccountCode2>
                            <Custom1 />
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
                            <VATDataList />
                        </Allocation>
                    </AllocationsList>
                    <AttendeesList />
                </Itemization>
            </ItemizationsList>
            <UserLoginID>cm@example.com</UserLoginID>
        </ExpenseEntry>
    </ExpenseEntriesList>
    <Country>US</Country>
    <CountrySubdivision></CountrySubdivision>
    <ProcessingPaymentDate></ProcessingPaymentDate>
    <ReceiptsReceived>Y</ReceiptsReceived>
    <ReportOwner>
        <EmployeeID>cm@example.com</EmployeeID>
        <LastName>Chris</LastName>
        <FirstName>Miller</FirstName>
        <MiddleInitial></MiddleInitial>
        <EmployeeCustom21></EmployeeCustom21>
        <EmployeeOrgUnit1></EmployeeOrgUnit1>
        <EmployeeOrgUnit2></EmployeeOrgUnit2>
        <EmployeeOrgUnit3></EmployeeOrgUnit3>
        <EmployeeOrgUnit4></EmployeeOrgUnit4>
        <EmployeeOrgUnit5></EmployeeOrgUnit5>
        <EmployeeOrgUnit6></EmployeeOrgUnit6>
        <ReimbursementMethodCode>CNQRPAY</ReimbursementMethodCode>
    </ReportOwner>
</ReportDetails>
```






