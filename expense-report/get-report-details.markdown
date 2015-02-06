---
title: Expense Report Resource
layout: operation
---




This request will return a **ReportDetails** parent element with the following child elements:  

| ----- |
|  Element |  Description |
|  UserLoginID |  The user ID of the report owner. Maximum 128 characters. |   |
|  EmployeeName |  The name of the employee who created the report. Maximum 66 characters. |
|  ReportID |  The unique identifier for the report, which appears in the Concur Expense UI. Maximum 32 character varchar. |
|  ReportKey |  The unencrypted unique identifier for the report, that appears on the report header. The element appears only if the OAuth consumer has the Web Services Admin role in Concur. Maximum 48 characters. |
|  ReportName |  The name of the report. Maximum 40 characters. |
|  Purpose |  The information from the Business Purpose field. |
|  ReportDate |  The date from the report header. Format: YYYY-MM-DDThh:mm:ss |
|  CreationDate |  The date the report was created. Format: YYYY-MM-DDThh:mm:ss |
|  SubmitDate |  The date the report was submitted. Maximum 10 characters. |
|  PaidDate |  The date the report was extracted for payment. This element has an attribute named i:nil. If the value for this element is null, the i:nil attribute will be set to true. Format: YYYY-MM-DDThh:mm:ss |
|  CurrencyCode |  The [3-letter ISO 4217 currency code][1] for the expense report currency. The expense report currency is defined as the report creator's default reimbursement currency. |
|  ReportTotal |  The total amount of the report. Maximum 23 characters. |
|  PersonalExpenses |  The total amount of expenses marked as personal. Maximum 23 characters. |
|  AmountDueEmployee |

The total amount due to the employee for the report. Maximum 23 characters.

 |
|  AmountDueCompanyCard |  The total amount due to the company card for the report. Maximum 23 characters. |
|  TotalClaimedAmount |  The total amount of all non-personal expenses in the report. Maximum 23 characters. |
|  TotalApprovedAmount |  The total amount of approved expenses in the report. Maximum 23 characters. |
|  ApprovalStatusCode |  The approval status code for the report. |
|  ApprovalStatusName |  The approval status name for the report. |
|  PaymentStatusCode |  The unique identifier for the payment status of the report. |
|  PaymentStatusName |  The payment status of the report. |
|  OrgUnit1 through OrgUnit6 |  The details from the Org Unit custom fields. These may not have data, depending on configuration. Maximum 48 characters for each field. |
|  Custom1 through Custom20 |  The details from the Custom fields. These may not have data, depending on configuration. If report owner information is stored in these fields, it may be outdated. Refer to the **ReportOwner** parent element for the current owner information. The custom fields may have the following child elements:  

|  Type |  The custom field type. Will be one of the following:

Amount, Boolean, ConnectedList, Date, Integer, List, Number, Text

 |
|  Value |  The value in the custom field. Maximum 48 characters. |   | |
|  Code |  Custom list fields will include the list item code in this element. |

 |
|  LedgerName |  The name of the expense report ledger. Maximum 20 characters. |
|  PolicyID |  The unique identifier of the policy that applies to this report. Maximum 64 characters. |
|  EverSentBack |  Whether the report has ever been sent back to the employee. Format: Y/N |
|  HasException |  Whether the report has exceptions. Format: Y/N  |
|  WorkflowActionURL |  The URL to post a workflow action to the report using the [Post Report Workflow Action][2] function. |
|  ExpenseEntriesList |  This parent element has an **ExpenseEntry** child element for each entry. Refer to the Expense Entry Child Elements table for more information. |
|  ReportImageURL |  The URL to access the image associated with the report. This URL is valid for 30 minutes after the web service call. |
|  Country |  The report country. Maximum 2 characters. Format: [The ISO 3166-1 alpha-2 country code][3]. Example: United States is US. |
|  CountrySubdivision |  The report country subdivision. Format: [ISO 3166-2:2007 country subdivision][4]. |
|  ProcessingPaymentDate |  The date that the report completed all approvals and was ready to be extracted for payment  
Format: YYYY-MM-DD |
|  ReceiptsReceived |  If Y, then this report has its receipt receipt confirmed by the Expense Processor. Format: Y/N |
|  ReportOwner |  This parent element includes details about the employee who is the report owner. It saves the caller from calling the [Get User Information][5] function to get employee information commonly used in accounting integration. The **ReportOwner** element includes the most recent information about the report owner, at the time the report is requested. The **ReportOwner** parent element includes the following child elements:

|  EmployeeCustom21 |  The report owner's group ID. Maximum 48 characters. |
|  EmployeeID |  Employee ID often also serves as the employee's **Vendor ID** for AP system integrations or **Payroll ID** for Payroll integrations. Maximum 48 characters. |   | |
|  EmployeeOrgUnit1 through EmployeeOrgUnit6 |  The report owner's organizational unit information. Maximum 48 characters for each field. |
|  FirstName |  The report owner's first name. Maximum 32 characters. |
|  LastName |  The report owner's last name. Maximum 32 characters. |
|  MiddleInitial |  The report owner's middle initial. Maximum 1 character. |
|  ReimbursementMethodCode |  The report owner's reimbursement method code, as defined in the employee's Profile. |

 |
|  EmployeeBankAccount |  This parent element includes the bank account data found on the **Bank Information** page in Profile. This data is used in **Payment System** integrations where the payment system reimburses the employee via this bank account. The **EmployeeBankAccount** parent element contains the following child elements:

|  BankNumber |  The bank identification number entered on the Bank Information page. Maximum 11 characters. |
|  BankName |  The bank name entered on the Bank Information page. Maximum 48 characters. |   | |
|  BranchLocation |  The branch location entered on the Bank Information page. Maximum 30 characters. |
|  AccountNumber |  The bank account number entered on the Bank Information page. Maximum 100 characters. |
|  AccountName |  The name on the account entered on the Bank Information page. |
|  PostalAddressLine1 |  The postal address line 1 entered on the Bank Information page. Maximum 48 characters. |
|  PostalAddressLine2 |  The postal address line 2 entered on the Bank Information page. Maximum 48 characters. |
|  PostalAddressCity |  The postal address city entered on the Bank Information page. Maximum 24 characters. |
|  PostalAddressRegion |  The postal address region entered on the Bank Information page. Maximum 24 characters. |
|  PostalAddressCode |  The postal address code entered on the Bank Information page. Maximum 20 characters. |
|  PostalAddressCountry |  The postal address country entered on the Bank Information page. Maximum 2 characters. Format: The [The ISO 3166-1 alpha-2 country code][3]. Example: United States is US. |

 |

  

| ----- |
|  Expense Entry Child Elements |
|  Element |  Description |
|  ReportEntryID |  The ID of the report entry. Maximum 13 characters. |
|  ExpenseTypeID |  The expense type ID for the expense entry. Expense Type IDs are returned in the **ExpKey** element by the [Get Expense Group Configuration][6] endpoint. |
|  ExpenseTypeName |  The expense type name. Maximum 64 characters. |
|  SpendCategory |  The spend category specified for this expense type. Varies by client, used in reporting. |
|  PaymentTypeCode |  The code for the payment type. Maximum 4 characters. |
|  PaymentTypeName |  The name for the payment type. Maximum 80 characters. |
|  TransactionDate |  The date of the expense entry. Maximum 10 characters. Format: YYYY-MM-DD |
|  TransactionCurrencyName |  The name of the transaction currency. Example: US, Dollar |
|  ExchangeRate |  The exchange rate that applies to the entry. Maximum 23 characters. |
|  TransactionAmount |  The amount of the expense entry in the original transaction currency. Maximum 23 characters. |
|  PostedAmount |  The amount of the expense entry in the user's reimbursement currency. The user's reimbursement currency is returned in the **CrnCode** element for the report. Maximum 23 characters. |
|  ApprovedAmount |  The approved amount of the expense entry in the user's reimbursement currency.The user's reimbursement currency is returned in the **CrnCode** element for the report. Maximum 23 characters. |
|  BusinessPurpose |  The text from the Business Purpose field of the entry. Maximum 64 characters. |
|  VendorDescription |  The vendor name of the expense entry, which can be entered manually by the user or imported from the card transaction Merchant Name field. Maximum 64 characters. |
|  LocationName |  The location for the expense entry, usually the city name. |
|  LocationSubdivision |  The location's State, Province, or Country Subdivision. Maximum 6 characters. |
|  LocationCountry |  The location's Country. Maximum 2 characters. |
|  OrgUnit1 through OrgUnit |  The details from the Org Unit custom fields. These may not have data, depending on configuration. Maximum 48 characters for each field. |
|  Custom1 through Custom40 |  The details from the Custom fields. These may not have data, depending on configuration. The custom fields may have the following child elements:  

|  Type |  The custom field type. Will be one of the following:

Amount, Boolean, ConnectedList, Date, Integer, List, Number, Text

 |
|  Value |  The value in the custom field. Maximum 48 characters. |   | |
|  Code |  Custom list fields will include the list item code in this element. |

 |
|  FormID |  The ID for the expense entry form. |
|  EntryImageID |  The unique identifier for the image associated with the entry. |
|  HasVat |  Whether the entry contains VAT data. Maximum 1 character. Format: Y/N |
|  HasComments |  Whether the expense entry has comments. Maximum 1 character. Format: Y/N |
|  CommentCount |  The number of comments associated with the expense entry. |
|  IsItemized |  Whether the expense entry is itemized. Maximum 1 character. Format: Y/N |
|  HasExceptions |  Whether the expense entry has exceptions. Maximum 1 character. Format: Y/N |
|  IsPersonal |  Whether the expense entry is marked as personal. Maximum 1 character. Format: Y/N |
|  HasAttendees |  Whether the expense entry has attendees. Maximum 1 character. Format: Y/N |
|  HasAllocation |  Defines the amount of allocations for the expense. Maximum 1 character. Possible values are: P, for partial allocation, F, for full allocation, or N, for no allocation. |
|  IsCreditCardCharge |  Whether the expense came from a credit card feed. Maximum 1 character. Format: Y/N |
|  IsPersonalCardCharge |  Whether the expense came from a personal card feed. Maximum 1 character. Format: Y/N |
|

ReceiptRequired

 |

Whether the original receipt is required for the entry. Maximum 1 character. Format: Y/N

 |
|  ImageRequired |  Whether a receipt image is required for the entry. Maximum 1 character. Format: Y/N |
|  E-ReceiptID |  The ID for the attached e-receipt, if available. |
|  LastModifiedDate |  The date the expense entry was last changed. Maximum 19 characters. Format: YYYY-MM-DDThh:mm:ss |
|  ItemizationsList |  The list of itemizations for the expense entry. This parent element will have at least one **Itemization** child element. If the expense entry is not itemized, the **Itemization** will contain the same values as the entry. If the expense entry has itemizations, there will be one **Itemization** child element for each itemization. Refer to the Itemization Entry Details Child Elements table for more information.

**NOTE**: There are a few rare cases where the **ItemizationsList** will be null. This happens when a report entry has a payment type code that is not **IBCP with offsets** or **CBCP** and there is a Regular or Child expense entry with an Approved Amount equal to zero. The expense entry will have a Null **ItemizationsList**.

 |
|  ReportEntryVendorName |  Vendor name the employee selected from the Vendor list field. Maximum 64 characters. |
|  ReportEntryReceiptReceived |  If Y, then this entry has been marked as reviewed by a processor. Maximum 1 character. Format: Y/N |
|  ReportEntryReceiptType |  Maximum 1 character. One of these:  
T = tax receipt  
R= regular receipt  
N = no receipt |
|  CardTransaction |  This parent element includes the card transaction data found in the card transaction associated to this expense entry. This data is used in **Payment System** integrations where the payment system reimburses the card issuer for the indicated card account. Refer to the Card Transaction Child Elements field. |
|  ExpensePay |  Whether the entry was paid using the Expense Pay service. This element have a value if the report has reached the Processing Payment workflow step. Format: Yes/No |

  

| ----- |
|  Itemization Entry Details Child Elements |
|  Element |  Description |
|  ItemType |  The type of itemization. If the expense entry does not have any itemizations, this will be set to Regular. If the expense entry contains itemizations, each one will be set to Child. |
|  ItemizationID |  The unique identifier for the itemization. Maximum 19 characters. |
|  ExpenseTypeID |  The expense type ID for the itemization. |
|  ExpenseTypeName |  The expense type for the itemization. Maximum 64 characters. |
|  TransactionDate |  The date of the transaction. Maximum 10 characters. Format: YYYY-MM-DD |
|  TransactionAmount |  The amount for the itemization in the expense currency. Maximum 23 characters. |
|  PostedAmount |  The amount for the itemization in the user's reimbursement currency. The user's reimbursement currency is returned in the **CrnCode** element for the report. Maximum 23 characters. |
|  ApprovedAmount |  The approved amount of the itemization in the user's reimbursement currency. The user's reimbursement currency is returned in the **CrnCode** element for the report. Maximum 23 characters. |
|  BusinessPurpose |  The business purpose field from the report header. |
|  OrgUnit1 through OrgUnit6 |  The details from the Org Unit custom fields. These may not have data, depending on configuration. Maximum 48 characters for each field. |
|  Custom1 through Custom40 |  The custom fields associated with the itemization. These may not have data, depending on your configuration. The custom fields may have the following child elements:  

|  Type |  The custom field type. Will be one of the following:

Amount, Boolean, ConnectedList, Date, Integer, List, Number, Text

 |
|  Value |  The value in the custom field. Maximum 48 characters. |   | |
|  Code |  Custom list fields will include the list item code in this element. |

 |
|  HasComments |  Whether the itemization has comments. Maximum 1 character. Format: Y/N |
|  CommentCount |  The number of comments associated with the itemization. |
|  IsPersonal |  Whether the itemization is personal. Maximum 1 character. Format: Y/N |
|  LastModified |  The UTC date when the itemization was last modified. Maximum 19 characters. Format: YYYY-MM-DDThh:mm:ss |
|  AttendeesList |  This parent element contains one **Attendee** element for each associated attendee. The **Attendee** element contains the following child elements:

|  AttendeeType |  The type of attendee. Maximum 40 characters. |
|  FirstName |  The attendee's first name. Maximum 50 characters. |   | |
|  LastName |  The attendee's last name. Maximum 132 characters. |
|  Company |  The attendee's company name. Maximum 150 characters. |
|  Title |  The attendee's title. Maximum 32 characters. |
|  ExternalID |  The unique identifier for the attendee, managed outside Concur. Maximum 48 characters. |
|  Custom1 through Custom20 |  The details from the Custom fields. These may not have data, depending on configuration. The custom fields may have the following child elements:  

|  Type |  The custom field type. Will be one of the following:

Amount, Boolean, ConnectedList, Date, Integer, List, Number, Text

 |
|  Value |  The value in the custom field. Maximum 100 characters. |   | |
|  Code |  Custom list fields will include the list item code in this element. |

 |
|  HasExceptionsPrevYear |  Whether the attendee has exceptions in the previous year, based on yearly total limits for attendees. Maximum 1 character. Format: Y/N |
|  HasExceptionsYTD |  Whether the attendee has exceptions in the current year, based on yearly total limits for attendees. Maximum 1 character. Format: Y/N |
|  IsDeleted |  Whether the attendee is marked as deleted. Maximum 1 character. Format: Y/N |
|  OwnerName |  The name of the employee that owns the attendee record. |
|  TotalAmountPrevYear |  The total amount spent on the attendee in the previous calendar year. |
|  TotalAmountYTD |  The total amount spent on the attendee in the current calendar year. |
|  VersionNumber |  The attendee's version number. |
|  AttendeeID |  Attendee unique identifier within Concur. |
|  AttendeeTypeCode |  The unique identifier for the attendee type. |
|  AttendeeOwnerID |  The unique identifier for the person or system that owns the attendee. |
|  CurrencyCode |  The [3-letter ISO 4217 currency code][1] for attendee related amounts. |

 |
|  AllocationsList |  This parent element contains at least one **Allocation** element. It will contain multiple **Allocation** elements if there are multiple allocations for the itemization. Refer to the Allocations List Child Elements table. |

  

| ----- |
|  Allocations List Child Elements |
|  Element |  Description |
|  AllocationID |  The unique alphanumeric identifier for the allocation. Maximum 13 characters. |
|  Percentage |  The percentage of the expense that is included in this allocation. Maximum 11 characters. |
|  AccountCode1 |  The primary accounting code assigned to the expense type associated with this allocation. Typically, expense types have only this primary account code. |
|  AccountCode2 |

The secondary or alternative  accounting code assigned to the expense type associated with this allocation. In rare cases some expense types include this accounting code to handle special cases. One example of these special cases is when using travel allowance, where one expense would use the primary account code for the allowed amount, and the alternative account code for the overage. Another example is personal use of a company car.

Refer to the _Expense__: Account Codes Setup Guide_ for more information on how Concur Expense determines which accounting codes to use.

 |
|  Custom1 through Custom20 |  The custom fields associated with the allocation. These may not have data, depending on your configuration. The custom fields may have the following child elements:  

|  Type |  The custom field type. Will be one of the following:

Amount, Boolean, ConnectedList, Date, Integer, List, Number, Text

 |
|  Value |  The value in the custom field. Maximum 48 characters. |   | |
|  Code |  Custom list fields will include the list item code in this element. |

 |
|  JournalEntriesList |  This parent element contains at least one **JournalEntry** child element. It contains multiple **JournalEntry** elements if the allocation has multiple journal entries. The **JournalEntry** element contains the following child elements:

|  JournalID |  Unique identifier for the journal entry. |
|  PayerPaymentTypeName |

Payer payment type. Maximum 64 characters.  
One of these:  
Company = Company  
Employee = Employee  
Payment Type for the Credit Card Payment Type

 |   | |
|  PayerPaymentTypeCode |  Payment code name for the payer. Maximum 80 characters. |
|  PayeePaymentTypeName |  Payee payment type. Maximum 64 characters.  
One of these:  
Company = Company  
Employee = Employee  
Payment Type for the Credit Card Payment Type |
|  PayeePaymentCode |  Payment code name for the payee. Maximum 80 characters. |
|  AccountCode |  The account code Concur Expense determines should apply to this journal entry.  For journal entries associated to an allocation, Concur Expense uses the business logic described in the _Expense: Account Codes Setup Guide_ to determine whether the primary or secondary account code should apply.  When there is no allocation associated to the journal entry, Concur Expense uses clearing account codes for Credit Card and Cash Advance for personal use of a company paid expense or a cash advance issued to an employee respectively. Maximum 48 characters.

**NOTE**: The developer should almost always use this accounting code when creating financial transactions in financial systems.  In some situations a developer may need to use the accounting codes in the Allocation parent element. 

 |
|  DebitOrCredit |  Maximum 2 characters. Either:  
DR = Debit  
CR = credit |
|  Amount |  Value, as credit or debit, of the amount to be exchanged between the payer and payee for this expense account code (not an absolute value) Maximum 23 characters.  
EXAMPLES: Value of zero, credit, or debit, as the following:  
0 (Zero) "0"  
\+ (Plus / Debit) "+50.00"  
\- (Minus / Credit) "-50.00" |
|  JobRunKey |  Either the unique identifier for job run for the accounting extract that processed this journal, or a static value indicating the journal was processed by Manual Pay, Expense Pay, or some other system. |

 |
|  VATDataList |  This parent element contains one **VATData** element for each VAT line item. This element will be empty if there are no VAT line items. The **VATData** parent element contains the following child elements:

|  TaxName |  Tax authority name. Maximum 50 characters. |
|  TaxAuthorityLabel |  5-digit code that appears on the expense entry pages. Maximum 5 characters. |   | |
|  TaxTransactionAmount |  Calculated tax amount for this expense in the spend currency. Maximum 23 characters. |
|  TaxPostedAmount |  Calculated tax amount for this expense entry in the reimbursement currency. Maximum 23 characters. |
|  Source |  Specifies how the tax data was derived. Maximum 4 characters. One of these:  
CARD= Provided from company card  
USER = Entered by employee  
SYST = Calculated by system  
PROC = Entered by processor |
|  TaxReclaimTransactionAmount |  Calculated amount of tax eligible for reclaim in the spend currency. Maximum 23 characters. |
|  TaxReclaimPostedAmount |  Calculated amount of tax eligible for reclaim in the reimbursement currency. Maximum 23 characters. |

 |

  

| ----- |
|  Card Transaction Child Elements |
|  Element |  Description |
|  AccountNumber |  Credit card number used for this expense. Maximum 255 characters. |
|  CardDescription |  The name on the credit card used for this expense. Maximum 255 characters. |
|  CardTypeCode |  Type of credit card. |
|  TransactionReferenceNumber |  Reference number from the credit card vendor. Maximum 64 characters. |
|  TransactionCCTType |  Transaction type supplied by card vendor. Maximum 3 characters. One of these:  
ANF = Annual Fees  
CAV = Cash Advance  
CCF = Cash and Check Fees  
CHG = Other Bank Charges and Fees  
FNC = Finance Charges  
LAF = Late Fees  
NSF = Insufficient Funds Check Fees  
PAY = Payment  
RPE = Credit Card Transaction |
|  TransactionID |  Calculated value assigned to this card entry during the import process. Maximum 32 characters. |
|  TransactionAmount |  Amount of the charge in the spend currency. Maximum 23 characters. |
|  TaxAmount |  Amount of tax on the transaction amount (if provided by card vendor). Maximum 23 characters. |
|  TransactionAlphaCode |  Currency code for the spend currency. Maximum 3 characters. Format: [ISO 4217 3 digit alpha code][1] |
|  PostedAmount |  Amount of the charge in the billing currency of the card. Maximum 23 characters. |
|  PostedAlphaCode |  Currency code for the card billing currency. Maximum 3 characters. Format: [ISO 4217 3 digit alpha code][1] |
|  TransactionDate |  Date the charge was made at the merchant. Maximum 10 characters. |
|  PostedDate |  Date the charge was posted to the credit card account. Maximum 10 characters. |
|  Description |  Description of the charge from the merchant. Maximum 42 characters. |
|  MasterCardCode |  Merchant code sent from the credit card vendor. Maximum 5 characters. |
|  TransactionMerchantName |  Name of the merchant. Maximum 50 characters. |
|  MerchantCity |  Merchant city. Maximum 40 characters. |
|  MerchantState |  Merchant State/Province. Maximum 32 characters. |
|  MerchantCountryCode |  Merchant country location code. Format: 2 digit alpha code |
|  MerchantReferenceNumber |  Merchant reference number passed from the merchant to the card. Maximum 15 characters. |
|  ExchangeRateFromBillingToEmployeeCurrency |  Currency exchange rate used between the credit card billing currency and the employee's reimbursement currency. Maximum 23 characters. |
|  BillingAmount |  Amount due to the company card from the employee or company (depending on who is responsible for the bill) for this detail row. Maximum 23 characters. |

 |

[1]: http://en.wikipedia.org/wiki/ISO_4217
[2]: https://developer.concur.com/expense-report/expense-report-resource/post-report-exceptions
[3]: http://en.wikipedia.org/wiki/ISO_3166-1_alpha-2
[4]: http://en.wikipedia.org/wiki/ISO_3166-2
[5]: https://developer.concur.com/users/users-resource/user-resource-get
[6]: https://developer.concur.com/expense-report/expense-group-configuration-resource/expense-group-configuration-resource-get
