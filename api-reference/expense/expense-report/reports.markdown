---
title: Reports
layout: reference
---


# Reports

* [Retrieve reports owned by the user based on search criteria](#get)
* [Retrieve a report by ID](#getID)
* [Create a new report](#post)
* [Update a report](#put)
* [Schema](#schema)

## Version
3.0  
2.0 Retrieve (GET) Report can be found [here](/api-reference-deprecated/version-two/expense-reports/expense-report-resource.html)  
1.1 Create and update (POST) Report Header can be found [here](/api-reference-deprecated/version-one-one/expense-report/expense-report-header-resource.html)


## <a name="get"></a>Retrieve reports owned by the user based on search criteria

    GET /expense/reports

        
### Parameters

Name | Type | Format | Description
-----|------|--------|------------			
`offset`	|	`string`	|	`query`	|	Starting page offset
`limit`	|	`Int32`	|	`query`	|	Number of records to return (default 25)
`user`	|	`string`	|	`query`	|	Optional. The login ID of the report owner(s) to use when searching for reports. If the value is set to LoginID, reports for the report owner with this login ID value are returned. If the value is set to ALL, reports for all report owners are returned. If this parameter is not specified, reports for the OAuth Consumer are returned. The access token owner (OAuth Consumer) must have the Web Services Admin role to use this parameter.
`approvalStatusCode`	|	`string`	|	`query`	|	The status code for the Approval Status. The values can include Concur Expense standard codes or custom codes. The Concur Expense standard code values are: A_AAFH - Report submission triggered an anomaly and fraud check; A_ACCO - Report is pending reviews; A_APPR - Report has been approved; A_EXTV - Report is pending external validation; A_FILE - Report has been submitted; A_NOTF - Report has not been submitted; A_PBDG - Report approval is pending Budget approval; A_PECO - Report approval is pending Cost object approval; A_PEND - Report is pending manager approval; A_PVAL - Report is pending prepayment validation; A_RESU - Report needs to be resubmitted; A_RHLD - Report submission is pending receipt images; A_TEXP - Report expired in approval queue. For custom codes, contact Concur Developer Support.
`paymentStatusCode`	|	`string`	|	`query`	|	The payment status code for the report. The values can include Concur Expense standard codes or custom codes. The Concur Expense standard code values are: P_HOLD - Report payment is on hold; P_NOTP - Report has not been paid; P_PAID - Report has been paid; P_PAYC - Payment is confirmed. Some or all of the report expenses have been paid; P_PROC - Report is in process to be paid. For custom codes, contact Concur Developer Support.
`currencyCode`	|	`string`	|	`query`	|	The 3-letter ISO 4217 currency code for the report currency. Example: USD.
`paymentType`	|	`string`	|	`query`	|	The unique identifier for the payment type that is the payment type for at least one expense entry in the report. Use PaymentTypeID from Response of GET Expense Group Configurations V3 to obtain valid payment types.
`reimbursementMethod`	|	`string`	|	`query`	|	The method the report owner will be reimbursed. VALUES: ADPPAYR - ADP Payroll; APCHECK - AP (Company Check); CNQRPAY - Expense Pay; PMTSERV - Other Payment Service. NOTE: PAY_PAL is NOT supported.
`approverLoginID`	|	`string`	|	`query`	|	The login ID for the report approver that is the current approver assigned to the report.
`expenseTypeCode`	|	`string`	|	`query`	|	The expense type code that is the expense type for at least one expense entry in the report. Use ExpenseTypeCode from Response of GET Expense Group Configurations V3.
`attendeeTypeCode`	|	`string`	|	`query`	|	The report contains expense entries that have attendees of the specified type.
`countryCode`	|	`string`	|	`query`	|	The report country. Maximum 2 characters. Format: The ISO 3166-1 alpha-2 country code. Example: United States is US.
`batchID`	|	`string`	|	`query`	|	The unique identifier for a payment batch where there is at least one report payee within the report. Use the BatchID from Response of GET Payment Batch List.
`vendorName`	|	`string`	|	`query`	|	The Vendor Description that is the vendor for at least one expense entry in the report.
`hasVAT`	|	`Boolean`	|	`query`	|	Determines if the report has at least one expense entry with VAT details. FORMAT: true or false.
`hasImages`	|	`Boolean`	|	`query`	|	Determines if the report has at least one expense entry with an entry image or if there is a report image for this report. FORMAT: true or false.
`hasAttendees`	|	`Boolean`	|	`query`	|	Determines if the report has at least one expense entry with an attendee. FORMAT: true or false.
`hasBillableExpenses`	|	`Boolean`	|	`query`	|	The IsBillable flag for at least one expense entry in the report. FORMAT: true or false.
`isTestUser`	|	`Boolean`	|	`query`	|	The report owner is a test user using the report for testing purposes in a non-production envirnment. FORMAT: true or false.
`expenseGroupConfigID`	|	`string`	|	`query`	|	The unique identifier for the expense group configuration associated to the report's expense group. Use the ID from the Response of the Expense Group Configurations V3.
`costObject`	|	`string`	|	`query`	|	The list item code for an allocation field for at least allocation in the report.
`entryTransactionDateBefore`	|	`DateTime`	|	`query`	|	The entry transaction date for at least one expense entry in the report is before this date.Format: YYYY-MM-DD
`entryTransactionDateAfter`	|	`DateTime`	|	`query`	|	The entry transaction date for at least one expense entry in the report is after this date.Format: YYYY-MM-DD
`createDateBefore`	|	`DateTime`	|	`query`	|	The report create date is before this date.Format: YYYY-MM-DD
`createDateAfter`	|	`DateTime`	|	`query`	|	The report create date is after this date.Format: YYYY-MM-DD
`userDefinedDateBefore`	|	`DateTime`	|	`query`	|	The report user defined date is before this date.Format: YYYY-MM-DD
`userDefinedDateAfter`	|	`DateTime`	|	`query`	|	The report user defined date is after this date.Format: YYYY-MM-DD
`submitDateBefore`	|	`DateTime`	|	`query`	|	The report submit date is before this date.Format: YYYY-MM-DD
`submitDateAfter`	|	`DateTime`	|	`query`	|	The report submit date is after this date.Format: YYYY-MM-DD
`processingPaymentDateBefore`	|	`DateTime`	|	`query`	|	The report processing payment date is before this date.Format: YYYY-MM-DD
`processingPaymentDateAfter`	|	`DateTime`	|	`query`	|	The report processing payment date is after this date. Format: YYYY-MM-DD
`paidDateBefore`	|	`DateTime`	|	`query`	|	The report paid date is before this date.Format: YYYY-MM-DD
`paidDateAfter`	|	`DateTime`	|	`query`	|	The report paid date is after this date.Format: YYYY-MM-DD
`modifiedDateBefore`	|	`DateTime`	|	`query`	|	The report modified date is before this date.Format: YYYY-MM-DD
`modifiedDateAfter`	|	`DateTime`	|	`query`	|	The report modified date is after this date.Format: YYYY-MM-DD



## <a name="getID"></a>Retrieve a report by ID

    GET /expense/report/{id}


### Parameters

Name | Type | Format | Description
-----|------|--------|------------
`id`	|	`string`	|	`path`	|	**Required** Report ID
`user`	|	`string`	|	`query`	|	Optional. The login ID of the report owner(s) to use when searching for reports. If the value is set to LoginID, reports for the report owner with this login ID value are returned. If the value is set to ALL, reports for all report owners are returned. If this parameter is not specified, reports for the OAuth Consumer are returned. The access token owner (OAuth Consumer) must have the Web Services Admin role to use this parameter.


## <a name="post"></a>Create a new report

    POST /expense/report


### Parameters

Name | Type | Format | Description
-----|------|--------|------------
`content`	|	-	|	`body`	|	**Required** Report object to create

## <a name="put"></a>Update a report
    PUT /expense/report/{id}


### Parameters

Name | Type | Format | Description
-----|------|--------|------------
`id`	|	`string`	|	`path`	|	**Required** The unique identifier for the report.
`content`	|		|	`body`	|	**Required** The report object to update



## <a name="schema"></a>Schema


###Reports

Name | Type | Format | Description
-----|------|--------|------------
`Items`	|	``array``	|	[Report](#reports)	|	The result collection.
`NextPage`	|	``string``	|	-	|	The URI of the next page of results, if any.




###<a name="report"></a>Report

Name | Type | Format | Description
-----|------|--------|------------
`AmountDueCompanyCard`	|	`Decimal`	|	-	|	The total amount due to the company card for the report. Maximum 23 characters.
`AmountDueEmployee`	|	`Decimal`	|	-	|	The total amount due to the employee for the report. Maximum 23 characters.
`ApprovalStatusCode`	|	`string`	|	-	|	The approval status code for the report.
`ApprovalStatusName`	|	`string`	|	-	|	The report's approval status, in the OAuth consumer's language.
`ApproverLoginID`	|	`string`	|	-	|	The Login ID of the report owner's expense approver.
`ApproverName`	|	`string`	|	-	|	The name of the report owner's expense approver.
`Country`	|	`string`	|	-	|	The report country. Maximum 2 characters. Format: The ISO 3166-1 alpha-2 country code. Example: United States is US.
`CountrySubdivision`	|	`string`	|	-	|	The report country subdivision. Format: ISO 3166-2:2007 country subdivision.
`CreateDate`	|	`DateTime`	|	-	|	The date the report was created.
`CurrencyCode`	|	`string`	|	-	|	The 3-letter ISO 4217 currency code for the expense report currency. Examples: USD - US dollars; BRL - Brazilian real; CAD - Canadian dollar; CHF - Swiss franc; EUR - Euro; GBO - Pound sterling; HKD - Hong Kong dollar; INR - Indian rupee; MXN - Mexican peso; NOK - Norwegian krone; SEK - Swedish krona.
`Custom1 thorugh Custom20`	|	`CustomField`	|	-	|	The details from the Custom fields. These may not have data, depending on configuration.
`EverSentBack`	|	`Boolean`	|	-	|	Whether the report has ever been sent back to the employee. Format: Y/N
`HasException`	|	`Boolean`	|	-	|	Whether the report has exceptions. Format: Y/N
`ID`	|	`string`	|	-	|	The unique identifier of the resource.
`LastComment`	|	`string`	|	-	|	The text of the most recent comment on the report.
`LastModifiedDate`	|	`DateTime`	|	-	|	The date the report header was last modified.
`LedgerName`	|	`string`	|	-	|	The name of the expense report ledger. Maximum 20 characters.
`Name`	|	`string`	|	-	|	The name of the report.
`OrgUnit1 through OrgUnit6`	|	`CustomField`	|	-	|	The details from the Org Unit fields. These may not have data, depending on configuration.
`OwnerLoginID`	|	`string`	|	-	|	The Login ID of the user this report belongs to.
`OwnerName`	|	`string`	|	-	|	The name of the expense report owner.
`PaidDate`	|	`DateTime`	|	-	|	The date when all journal entries in the report was integrated with or extracted to the financial system.
`PaymentStatusCode`	|	`string`	|	-	|	The code for the payment status of the report.
`PaymentStatusName`	|	`string`	|	-	|	The report's payment status, in the OAuth consumer's language.
`PersonalAmount`	|	`Decimal`	|	-	|	The total amount of expenses marked as personal. Maximum 23 characters.
`PolicyID`	|	`string`	|	-	|	The unique identifier of the policy that applies to this report. Maximum 64 characters.
`ProcessingPaymentDate`	|	`DateTime`	|	-	|	The date that the report completed all approvals and was ready to be extracted for payment.
`ReceiptsReceived`	|	`Boolean`	|	-	|	If Y, then this report has its receipt receipt confirmed by the Expense Processor. Format: Y/N
`SubmitDate`	|	`DateTime`	|	-	|	The date the report was submitted.
`Total`	|	`Decimal`	|	-	|	The total amount of the report.
`TotalApprovedAmount`	|	`Decimal`	|	-	|	The total amount of approved expenses in the report. Maximum 23 characters.
`TotalClaimedAmount`	|	`Decimal`	|	-	|	The total amount of all non-personal expenses in the report. Maximum 23 characters.
`URI`	|	`string`	|	-	|	The URI to the resource.
`UserDefinedDate`	|	`DateTime`	|	-	|	The date of the report assigned by the user.
`WorkflowActionUrl`	|	`string`	|	-	|	The URL to post a workflow action to the report using the Post Report Workflow Action function..



###Custom Field

Name | Type | Format | Description
-----|------|--------|------------
`Code`	|	`string`	|	-	|	For list fields, this is the list item code.
`ListItemID`	|	`string`	|	-	|	For list fields, this is the list item ID.
`Type`	|	`string`	|	-	|	The custom field type. Possible values: Amount, Boolean, ConnectedList, Date, Integer, List, Number, Text
`Value`	|	`string`	|	-	|	The value in the Org Unit or Custom field. For list fields, this is the name of the list item. Maximum length: 48 characters
