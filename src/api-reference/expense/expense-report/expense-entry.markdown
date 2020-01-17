---
title: Entries
layout: reference
---

* [Retrieve All Expense Entries](#get)
* [Create a New Expense Entry](#post)
* [Update an Expense Entry](#put)
* [Delete an Expense Entry](#delete)
* [Schema](#schema)
  * [Entry](#entry)
  * [Custom Field](#custom-field)
  * [Journey](#journey)

The SAP Concur Expense Entries API is used to manage expense reports and their entries in SAP Concur. It allows for the synchronizing and reconciliation of expense related information with your internal systems and reporting modules.

1.1 documentation is available [here.](/api-reference/expense/expense-report/v1dot1.expense-entry.html)  

## <a name="get"></a>Retrieve All Expense Entries

[Version 2.0](/api-reference/expense/expense-report/expense-report-get.html), covers a wider range of partner scenarios and is recommended as the first step. However, depending on  the entries you need to retrieve, using a combination of version 2.0 and version 3.0 should be considered. To see examples, review the [VAT Reclaim](/api-guides/vat-reclaim/vat-reclaim-guide.html) integration guide.

## <a name="post"></a>Create a New Expense Entry

    POST  /api/v3.0/expense/entries

### Parameters

Name | Type | Format | Description
-----|------|--------|------------
`content`|````body````|-|**Required** The expense entry object to create.
`user`|````string````|`query`|The login ID of the user who owns the entries.

### Request URL

```
https://www.concursolutions.com/api/v3.0/expense/entries
```

### JSON Example of a Successful Response

```json
{
  "ID": "gWidFO7ikXV647DRpQmvCXeFNA4VPTOczCg",
  "URI": "https://www.concursolutions.com/api/v3.0/expense/entries/gWidFO7ikXV647DRpQmvCXeFNA4VPTOczCg"
}
```

## <a name="put"></a>Updates an Expense Entry

    PUT  /api/v3.0/expense/entries/{id}

### Parameters

Name | Type | Format | Description
-----|------|--------|------------
`id`|````string````|`path`|**Required** The expense entry ID.
`content`|````body````|-|**Required** The partial or complete expense entry object to update.

### Request URL
```
https://www.concursolutions.com/api/v3.0/expense/entries/gWidFO7ikXV66iSvqtG6Yd0wZ%24s4ftzvzTCg
```

## <a name="delete"></a>Delete an Expense Entry

    DELETE  /api/v3.0/expense/entries/{id}

### Parameters

Name | Type | Format | Description
-----|------|--------|------------
`id`|````string````|`path`|**Required** The ID of the expense entry to delete.
`user`|````string````|`query`|The login ID of the user who owns the entries.

### Request URL
```
https://www.concursolutions.com/api/v3.0/expense/entries/gWidFO7ikXV66iSvqtG6Yd0wZ%24s4ftzvzTCg
```

## <a name="schema"></a>Schema

### <a name="entries"></a>Entries

Name | Type | Format | Description
-----|------|--------|------------
`Items`	|	`array`	|	[Entry](#entry)	|	The result collection.
`NextPage`	|	`string`	|	-	|	The URI of the next page of results, if any.

### <a name="entry"></a>Entry

Name | Type | Format | Description
-----|------|--------|------------
`AllocationType`	|	`string`	|	-	|	The type of allocations for the expense. Supported values: `P` - partial allocation, `F` - full allocation, `N` - no allocation. Use the GET /expense/allocations function to get information about this entry's allocations.
`ApprovedAmount`	|	`decimal`	|	-	|	The approved amount of the expense entry, in the report currency.
`CompanyCardTransactionID`	|	`string`	|	-	|	The unique identifier for a company card transaction that is associated with this expense. Concur Expense uses the Credit Card Import job to import company card transactions. Use the GET CompanyCardTransactions function to get information about these card transactions. This element is null when there is no company card transaction associated with this expense.
`Custom1 through Custom40`	|	`customField`	|	-	|	The details from the Custom fields. These fields may not have data, depending on the configuration.
`Description`	|	`string`	|	-	|	The description of the expense. Maximum length: 64 characters
`ElectronicReceiptID`	|	`string`	|	-	|	The unique identifier for an eReceipt that is associated with this expense. Use the GET eReceipts function to get information about this eReceipt. This element is null when there is no eReceipt associated with this expense.
`EmployeeBankAccountID`	|	`string`	|	-	|	The unique identifier of an employee bank account that is associated with this expense. Typically, this element is used when Expense Pay reimburses the employee for this expense. Use the GET BankAccounts function to get information about this bank account.
`ExchangeRate`	|	`decimal`	|	-	|	The currency conversion rate that converts the transaction amount that is in the transaction currency into the posted amount that is in the report currency. This element is typically not provided. If this element is empty for transactions in a currency different than the user's reimbursement currency, Expense will use the company's configured exchange rates to determine the posted amount for the transaction. If the system is not able to determine the exchange rate, a value of 1.0 will be used.
`ExpenseTypeCode`	|	`string`	|	-	|	**Required** The code for the expense type. Use GET /expense/expensegroupconfigurations to learn the expense type code for expense types that are active for this report's policy.
`ExpenseTypeName`	|	`string`	|	-	|	The name of the expense type, localized to the user's language.
`FormID`	|	`string`	|	-	|	The ID of the form used by this expense entry.
`HasAppliedCashAdvance`	|	`boolean`	|	`true` / `false`	|	Whether the entry has a cash advance applied to it.
`HasAttendees`	|	`boolean`	|	`true` / `false`	|	Indicates whether the expense has attendees. Use the GET /expense/entryattendeeassociations function to get information about this entry's attendees.
`HasComments`	|	`boolean`	|	`true` / `false`	|	Whether or not the expense entry has comments.
`HasExceptions`	|	`boolean`	|	`true` / `false`	|	Whether the expense has exceptions. Use the GET ExpenseEntryExceptions function to get information about this entry's exceptions.
`HasImage`	|	`boolean`	|	`true` / `false`	|	Indicates whether there is an entry image attached to the entry. Use the GET Entry Images function to get this entry image.
`HasItemizations`	|	`boolean`	|	`true` / `false`	|	Indicates whether the expense has itemizations. Use the GET /expense/itemizations function to get information about this entry's itemizations.
`HasVAT`	|	`boolean`	|	`true` / `false`	|	Indicates whether the entry has VAT data.
`ID`	|	`string`	|	-	|	The unique identifier of the resource.
`IsBillable	`|	`boolean`	|	`true` / `false`	|	Indicates whether the expense is billable.
`IsImageRequired`	|	`boolean`	|	`true` / `false`	|	Indicates whether an entry image is required for the entry.
`IsPaidByExpensePay`	|	`boolean`	|	`true` / `false`	|	Whether the entry is paid using the Expense Pay service. This element has a value if the report has reached the Processing Payment workflow step, because this is when Concur Expense determines whether it will be paid by Expense Pay.
`IsPersonal`	|	`boolean`	|	`true` / `false`	|	Indicates whether the expense is personal (that is, non-reimbursable).
`IsPersonalCardCharge	`|	`boolean`	|	`true` / `false`	|	Indicates whether the expense entry was imported from a personal card feed. Concur Expense uses the Yodlee API to import these card transactions.
`Journey`	|	`journey`	|	-	|	Journey data. This element is used when the entry is a mileage expense. For expense types with an expense code that is either Company Car or Personal Car, the Journey child element is required. This element should not be used for expense types with an expense code that is neither Company Car nor Personal Car.
`LastModified`	|	`dateTime`	|	-	|	The UTC date when the entry was last modified.
`LocationCountry`	|	`string`	|	-	|	The 2-letter ISO 3166-1 country code where the expense was incurred.
`LocationID`	|	`string`	|	-	|	The unique identifier for the location where the expense was incurred. Use the GET /common/locations function to get information for this location.
`LocationName`	|	`string`	|	-	|	The location where the expense was incurred, usually the city name.
`LocationSubdivision`	|	`string`	|	-	|	The ISO 3166-2:2007 country subdivision state, province, or other country subdivision where the expense was incurred.
`OrgUnit1 through OrgUnit6`	|	`customField`	|	-	|	The details from the Org Unit fields. These fields may not have data, depending on the configuration.
`PaymentTypeID`	|	`string`	|	-	|	**Required** The ID of the payment type for the entry. Use GET /expense/expensegroupconfigurations to learn the payment type ID for payment types that are active for this report's expense group. For mileage expenses, use the Cash payment type. For expense types with an expense code that uses a transaction amount instead of a distance, this element is required. This element should not be used for expense types with an expense code for Company Car or Personal Car, because these two expense codes always use the Cash payment type.
`PaymentTypeName`	|	`string`	|	-	|	The name of the payment type, localized to the user's language.
`PostedAmount`	|	`decimal`	|	-	|	The amount of the expense entry, in the report currency.
`ReceiptReceived`	|	`boolean`	|	`true` / `false`	|	Indicates whether this entry has been reviewed by a processor. Format: true or false
`ReportID`	|	`string`	|	-	|	**Required** The report ID of the report where the entry will be added.
`ReportOwnerID`	|	`string`	|	-	|	The login ID of the report owner. Use the GET User Information function to learn details about this user.
`SpendCategoryCode`	|	`string`	|	-	|	The ID of the spending category that is specified for this expense entry.
`SpendCategoryName`	|	`string`	|	-	|	The name of the spending category that is specified for this expense entry, localized to the user's language.
`TaxReceiptType`	|	`string`	|	-	|	The receipt type for this entry. Supported values: `T` - tax receipt, `R` - regular receipt, `N` - no receipt
`TransactionAmount`	|	`decimal`	|	-	|	**Required** The amount of the expense entry, in the transaction currency paid to the vendor.
`TransactionCurrencyCode`	|	`string`	|	-	|	**Required** The 3-letter ISO 4217 currency code for the expense entry transaction amount. This is the currency in which the vendor was paid. For expense types with an expense code that uses a transaction amount instead of a distance, this element is required. This element should not be used for expense types with an expense code for Company Car or Personal Car, because for these two expense codes the currency is always the Report Currency.
`TransactionDate`	|	`dateTime`	|	`YYYY-MM-DD`	|	**Required** The date when the good or service associated with this expense entry was provided.
`TripID`	|	`string`	|	-	|	The unique identifier of a trip in the Itinerary Service that includes a travel booking associated with this expense. Use GET ItineraryDetails to get information about this trip and the travel booking. This element is null when there is no trip associated with the expense.
`URI`	|	`string`	|	-	|	The URI to the resource.
`VendorDescription`	|	`string`	|	-	|	The name of the vendor for the expense entry. Maximum length: 64 characters
`VendorListItemID`	|	`string`	|	-	|	The unique identifier for a vendor list item. Use the GET /common/lists function to get information about this list item.
`VendorListItemName`	|	`string`	|	-	|	The name of an item from a vendor list.

### <a name="custom-field"></a>CustomField

Name | Type | Format | Description
-----|------|--------|------------
`Code`	|	`string`	|	-	|	For list fields, this is the list item code.
`ListItemID`	|	`string`	|	-	|	For list fields, this is the list item ID.
`Type`	|	`string`	|	-	|	The custom field type. Supported values: `Amount`, `Boolean`, `ConnectedList`, `Date`, `Integer`, `List`, `Number`, `Text`
`Value`	|	`string`	|	-	|	The value in the Org Unit or Custom field. For list fields, this is the name of the list item. Maximum length: 48 characters

### <a name="journey"></a>Journey

Name | Type | Format | Description
-----|------|--------|------------			
`BusinessDistance`	|	`Int32`	|	-	|	The portion of the journey for business use, in the report owner's unit of measure for distances. This element is required in order to post a personal car mileage expense entry, or to post a company car mileage expense when there is no `PersonalDistance` value. When using the Odometer elements, the sum of `PersonalDistance` and `BusinessDistance` must equal the difference between `OdometerEnd` and `OdometerStart`.
`EndLocation`	|	`string`	|	-	|	**Required** Indicates where the journey ended. This is also known as the "To Location". Maximum length: 100 characters
`NumberOfPassengers`	|	`Int32`	|	-	|	The number of people in the vehicle during the journey. Used with Variable-Rate, Personal or Company Car.
`OdometerEnd`	|	`Int32`	|	-	|	The odometer reading at the end of the journey. The value must be greater than the `OdometerStart` value. This element is used with Variable-Rate and Company Car configuration types.
`OdometerStart`	|	`Int32`	|	-	|	The odometer reading at the start of the journey. This element is used with Variable-Rate and Company Car configuration types.
`PersonalDistance`	|	`Int32`	|	-	|	The portion of the journey for personal use. This element is required in order to post a company car mileage expense when there is no `BusinessDistance` value. When using the Odometer elements, the sum of `PersonalDistance` and `BusinessDistance` must equal the difference between `OdometerEnd` and `OdometerStart`. Used with Company Car configuration types.
`StartLocation`	|	`string`	|	-	|	**Required** Indicates where the journey started. This is also known as the "From Location". Maximum length: 100 characters
`UnitOfMeasure`	|	`string`	|	-	|	**Required** The unit of measure for distance and odometer values. Supported values: `M` - miles, `K` - kilometers

**NOTE:** Clients that have Car Configurations that include variable rates or custom mileage expense type codes are not supported. We only support Car Configurations that include Personal Car One-Rate definitions, using the default mileage expense type code (MILEG) where Google Maps is not set as mandatory.
