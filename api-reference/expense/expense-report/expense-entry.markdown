---
title: Entries
layout: reference
---


# Entries

* [Retrieve all expense entries](#get)
* [Create a new expense entry](#post)
* [Updates an expense entry](#put)
* [Delete an expense entry](#delete)
* [Schema](#schema)

 
1.1 documentation is available [here.](/api-reference-deprecated/version-one-one/expense-entry/expense-entry-resource.html)  
  

## <a name="get"></a>Retrieve all expense entries

In order to retrieve all expense entries, you must use [version 2.0.](/api-reference-deprecated/version-two/expense-reports/expense-report-get.html)

<!--- 3.0 NOT READY
    GET /expense/entries/

        
### Parameters

Name | Type | Format | Description
-----|------|--------|------------			
`reportID`	|	`query`	|	`string`	|	The report ID of the entries to be retrieved. Use the GET /expense/reportdigests function to find the report ID. Format: An alpha-numeric GUID string.
`paymentTypeID`	|	`query`	|	`string` |	The ID of the payment type of the entries to be retrieved. Use the GET /expense/expensegroupconfigurations function to learn the payment type ID for the desired payment type.
`batchID`	|	`query`	|	`string`	|	The batch ID for the entries to be retrieved. The batch ID identifies the batch that contains the report payee associated with the entries. Use the GET Payment Batch function to learn the Payment Type ID for the desired Payment Type.
`isBillable`	|	`query`	|	`boolean`	|	Determines whether the operation retrieves entries that are billable. Format: true or false
`attendeeTypeCode`	|	`query`	|	`string`	|	The ID of the attendee type for the entries to be retrieved.
`hasAttendees`	|	`query`	|	`boolean`	|	Determines whether the operation retrieves entries that have attendees. Format: true or false
`hasVAT`	|	`query`	|	`boolean`	|	Determines whether the operation retrieves entries that have VAT details. Format: true or false
`expenseTypeCode`	|	`query`	|	`string`	|	The code for the expense type for the entries to be retrieved.
`attendeeID`	|	`query`	|	`string`	|	The attendee associated with the entries to be retrieved.
`offset`	|	`query`	|	`string`	|	The starting point of the next set of results, after the limit specified in the limit field has been reached.
`limit`	|	`query`	|	`Int32`	|	The number of records to return. Default value: 25
`user`	|	`query`	|	`string`	|	The login ID of the user who owns the entries. The user must have the Web Services Admin role to use this parameter.

-->

<!--- 3.0 NOT READY

## <a name="getID"></a>Retrieve a single expense entry by ID

    GET  /api/v3.0/expense/entries/{id}


### Parameters

Name | Type | Format | Description
-----|------|--------|------------
`id`	|	`string`	|	`path`	|	**Required** The expense entry ID.
`user`	|	`string`	|	`query`	|	The login ID of the user who owns the entries.


### Request URL

```
https://www.concursolutions.com/api/v3.0/expense/entries/gWidFO7ikXV66iSvqtG6Yd0wZ%24s4ftzvzTCg
```

### JSON example of a successful response

```
{
  "ReportID": "39BD9F7C5C3F4986A6A5",
  "ReportOwnerID": "jimadmin@concurconnect2.com",
  "ExpenseTypeCode": "GASXX",
  "ExpenseTypeName": "Fuel",
  "SpendCategoryCode": "GASXX",
  "SpendCategoryName": "Gas",
  "PaymentTypeID": "gWurF7TC$pQAT4cqT0JokiYMobzQdz",
  "PaymentTypeName": "Cash",
  "TransactionDate": "2016-04-04T00:00:00",
  "TransactionCurrencyCode": "USD",
  "TransactionAmount": 100,
  "ExchangeRate": 1,
  "PostedAmount": 100,
  "ApprovedAmount": 100,
  "VendorDescription": "Chevron",
  "VendorListItemID": "gWuY7jnXPYIMMTdjsoL547QqQ6pDvuDytvw",
  "VendorListItemName": "Chevron",
  "LocationID": null,
  "LocationName": "",
  "LocationSubdivision": null,
  "LocationCountry": null,
  "Description": null,
  "IsPersonal": false,
  "IsBillable": false,
  "IsPersonalCardCharge": false,
  "HasImage": false,
  "IsImageRequired": true,
  "ReceiptReceived": false,
  "TaxReceiptType": "N",
  "ElectronicReceiptID": null,
  "CompanyCardTransactionID": null,
  "TripID": null,
  "HasItemizations": false,
  "AllocationType": "N",
  "HasAttendees": false,
  "HasVAT": false,
  "HasAppliedCashAdvance": false,
  "HasComments": false,
  "HasExceptions": false,
  "IsPaidByExpensePay": false,
  "EmployeeBankAccountID": null,
  "Journey": null,
  "LastModified": "2016-04-22T21:50:46.893",
  "FormID": "gWvidmKNPVE38CEiyWu7DFvcS7OvCjV3Zvg",
  "OrgUnit1": null,
  "OrgUnit2": null,
  "OrgUnit3": null,
  "OrgUnit4": null,
  "OrgUnit5": null,
  "OrgUnit6": null,
  "Custom1": null,
  "Custom2": null,
  "Custom3": null,
  "Custom4": null,
  "Custom5": null,
  "Custom6": null,
  "Custom7": null,
  "Custom8": null,
  "Custom9": null,
  "Custom10": null,
  "Custom11": null,
  "Custom12": null,
  "Custom13": null,
  "Custom14": null,
  "Custom15": null,
  "Custom16": null,
  "Custom17": null,
  "Custom18": null,
  "Custom19": null,
  "Custom20": null,
  "Custom21": null,
  "Custom22": null,
  "Custom23": null,
  "Custom24": null,
  "Custom25": null,
  "Custom26": null,
  "Custom27": null,
  "Custom28": null,
  "Custom29": null,
  "Custom30": null,
  "Custom31": null,
  "Custom32": null,
  "Custom33": null,
  "Custom34": null,
  "Custom35": null,
  "Custom36": null,
  "Custom37": null,
  "Custom38": null,
  "Custom39": null,
  "Custom40": null,
  "ID": "gWidFO7ikXV66iSvqtG6Yd0wZ$s4ftzvzTCg",
  "URI": "https://www.concursolutions.com/api/v3.0/expense/entries/gWidFO7ikXV66iSvqtG6Yd0wZ$s4ftzvzTCg"
}
```

-->

## <a name="post"></a>Create a new expense entry

    POST  /api/v3.0/expense/entries/


### Parameters

Name | Type | Format | Description
-----|------|--------|------------
`content`|````body````|-|**Required** The expense entry object to create.


### Request URL

```
https://www.concursolutions.com/api/v3.0/expense/entries
```

### JSON example of a successful response

```
{
  "ID": "gWidFO7ikXV647DRpQmvCXeFNA4VPTOczCg",
  "URI": "https://www.concursolutions.com/api/v3.0/expense/entries/gWidFO7ikXV647DRpQmvCXeFNA4VPTOczCg"
}
```


## <a name="put"></a>Updates an expense entry

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

### JSON example of a successful response
```
no content
```

## <a name="delete"></a>Delete an expense entry

    DELETE  /api/v3.0/expense/entries/{id}


### Parameters

Name | Type | Format | Description
-----|------|--------|------------
`id`|````string````|`path`|**Required** The ID of the expense entry to delete.
`user`|````string````|`query`|The login ID of the user who owns the entries.


### REquest URL
```
https://www.concursolutions.com/api/v3.0/expense/entries/gWidFO7ikXV66iSvqtG6Yd0wZ%24s4ftzvzTCg
```


### JSON example of a successful response

```
no content
```

## <a name="schema"></a>Schema


### <a name="entries"></a>Entries

Name | Type | Format | Description
-----|------|--------|------------
`Items`	|	Array	|	[Entry](#entry)	|	The result collection.
`NextPage`	|	`string`	|	-	|	The URI of the next page of results, if any.


### <a name="entry"></a>Entry

Name | Type | Format | Description
-----|------|--------|------------
`AllocationType`	|	`string`	|	-	|	The type of allocations for the expense. Possible values: P - partial allocation, F - full allocation, N - no allocation. Use the GET /expense/allocations function to get information about this entry's allocations.
`ApprovedAmount`	|	`Decimal`	|	-	|	The approved amount of the expense entry, in the report currency.
`CompanyCardTransactionID`	|	`string`	|	-	|	The unique identifier for a company card transaction that is associated with this expense. Concur Expense uses the Credit Card Import job to import company card transactions. Use the GET CommpanyCardTransactions function to get information about these card transactions. This element is null when there is no company card transaction associated with this expense.
`Custom1 through Custom40`	|	`CustomField`	|	-	|	The details from the Custom fields. These fields may not have data, depending on the configuration.
`Description`	|	`string`	|	-	|	The description of the expense. Maximum length: 64 characters
`ElectronicReceiptID`	|	`string`	|	-	|	The unique identifier for an eReceipt that is associated with this expense. Use the GET eReceipts function to get information about this eReceipt. This element is null when there is no eReceipt associated with this expense.
`EmployeeBankAccountID`	|	`string`	|	-	|	The unique identifier of an employee bank account that is associated with this expense. Typically, this element is used when Expense Pay reimburses the employee for this expense. Use the GET BankAccounts function to get information about this bank account.
`ExchangeRate`	|	`Decimal`	|	-	|	The currency conversion rate that converts the transaction amount that is in the transaction currency into the posted amount that is in the report currency. This element is typically not provided. If this element is empty for transactions in a currency different than the user's reimbursement currency, Expense will use the company's configured exchange rates to determine the posted amount for the transaction. If the system is not able to determine the exchange rate, a value of 1.0 will be used.
`ExpenseTypeCode`	|	`string`	|	-	|	**Required** The code for the expense type. Use GET /expense/expensegroupconfigurations to learn the expense type code for expense types that are active for this report's policy.
`ExpenseTypeName`	|	`string`	|	-	|	**Required** The name of the expense type, localized to the user's language.
`FormID`	|	`string`	|	-	|	The ID of the form used by this expense entry.
`HasAppliedCashAdvance`	|	`Boolean`	|	-	|	Whether the entry has a cash advance applied to it. Use the GET ExpenseEntryAccountingCalculations function to get cash advance application information for this entry. Format: true or false
`HasAttendees`	|	`Boolean`	|	-	|	Indicates whether the expense has attendees. Use the GET /expense/entryattendeeassociations function to get information about this entry's attendees. Format: true or false
`HasComments`	|	`Boolean`	|	-	|	Whether the expense has comments. Use the GET ExpenseEntryComments function to get information about this entry's comments. Format: true or false
`HasExceptions`	|	`Boolean`	|	-	|	Whether the expense has exceptions. Use the GET ExpenseEntryExceptions function to get information about this entry's exceptions. Format: true or false
`HasImage`	|	`Boolean`	|	-	|	Indicates whether there is an entry image attached to the entry. Use the GET Entry Images function to get this entry image. Format: true or false
`HasItemizations`	|	`Boolean`	|	-	|	Indicates whether the expense has itemizations. Use the GET /expense/itemizations function to get information about this entry's itemizations. Format: true or false
`HasVAT`	|	`Boolean`	|	-	|	Indicates whether the entry has VAT data. Use the GET ExpenseEntryAccountingCalculations function to get VAT information for this entry. Format: true or false
`ID`	|	`string`	|	-	|	The unique identifier of the resource.
`IsBillable	`|	`Boolean`	|	-	|	Indicates whether the expense is billable. Format: true or false
`IsImageRequired`	|	`Boolean`	|	-	|	Indicates whether an entry image is required for the entry. Format: true or false
`IsPaidByExpensePay`	|	`Boolean`	|	-	|	Whether the entry is paid using the Expense Pay service. This element has a value if the report has reached the Processing Payment workflow step, because this is when Concur Expense determines whether it will be paid by Expense Pay. Format: true or false
`IsPersonal`	|	`Boolean`	|	-	|	Indicates whether the expense is personal (that is, non-reimbursable). Format: true or false
`IsPersonalCardCharge	`|	`Boolean`	|	-	|	Indicates whether the expense entry was imported from a personal card feed. Concur Expense uses the Yodlee API to import these card transactions. Format: true or false
`Journey`	|	`Journey`	|	-	|	Journey data. This element is used when the entry is a mileage expense. For expense types with an expense code that is either Company Car or Personal Car, the Journey child element is required. This element should not be used for expense types with an expense code that is neither Company Car nor Personal Car.
`LastModified`	|	`DateTime`	|	-	|	The UTC Date when the entry was last modified.
`LocationCountry`	|	`string`	|	-	|	The country where the expense was incurred. Format: 2-letter ISO 3166-1 country code
`LocationID`	|	`string`	|	-	|	The unique identifier for the location where the expense was incurred. Use the GET /common/locations function to get information for this location.
`LocationName`	|	`string`	|	-	|	The location where the expense was incurred, usually the city name.
`LocationSubdivision`	|	`string`	|	-	|	The state, province, or other country subdivision where the expense was incurred. Format: ISO 3166-2:2007 country subdivision
`OrgUnit1 through OrgUnit6`	|	`CustomField`	|	-	|	The details from the Org Unit fields. These fields may not have data, depending on the configuration.
`PaymentTypeID`	|	`string`	|	-	|	The ID of the payment type for the entry. Use GET /expense/expensegroupconfigurations to learn the payment type ID for payment types that are active for this report's expense group. For mileage expenses, use the Cash payment type. For expense types with an expense code that uses a transaction amount instead of a distance, this element is required. This element should not be used for expense types with an expense code for Company Car or Personal Car, because these two expense codes always use the Cash payment type.
`PaymentTypeName`	|	`string`	|	-	|	The name of the payment type, localized to the user's language.
`PostedAmount`	|	`Decimal`	|	-	|	The amount of the expense entry, in the report currency.
`ReceiptReceived`	|	`Boolean`	|	-	|	Indicates whether this entry has been reviewed by a processor. Format: true or false
`ReportID`	|	`string`	|	-	|	**Required** The report ID of the report where the entry will be added.
`ReportOwnerID`	|	`string`	|	-	|	**Required** The login ID of the report owner. Use the GET User Information function to learn details about this user.
`SpendCategoryCode`	|	`string`	|	-	|	**Required** The ID of the spending category that is specified for this expense entry.
`SpendCategoryName`	|	`string`	|	-	|	**Required** The name of the spending category that is specified for this expense entry, localized to the user's language.
`TaxReceiptType`	|	`string`	|	-	|	The receipt type for this entry. Possible values: T - tax receipt, R - regular receipt, N - no receipt
`TransactionAmount`	|	`Decimal`	|	-	|	The amount of the expense entry, in the transaction currency paid to the vendor.
`TransactionCurrencyCode`	|	`string`	|	-	|	The 3-letter ISO 4217 currency code for the expense entry transaction amount. This is the currency in which the vendor was paid. For expense types with an expense code that uses a transaction amount instead of a distance, this element is required. This element should not be used for expense types with an expense code for Company Car or Personal Car, because for these two expense codes the currency is always the Report Currency.
`TransactionDate`	|	`DateTime`	|	required	|	The Date when the good or service associated with this expense entry was provided. Format: YYYY-MM-DD
`TripID`	|	`string`	|	-	|	The unique identifier of a trip in the Itinerary Service that includes a travel booking associated with this expense. Use GET ItineraryDetails to get information about this trip and the travel booking. This element is null when there is no trip associated with the expense.
`URI`	|	`string`	|	-	|	The URI to the resource.
`VendorDescription`	|	`string`	|	-	|	The name of the vendor for the expense entry. Maximum length: 64 characters
`VendorListItemID`	|	`string`	|	-	|	The unique identifier for a vendor list item. Use the GET /common/lists function to get information about this list item.
`VendorListItemName`	|	`string`	|	-	|	The name of an item from a vendor list.


### <a name="customfield"></a>CustomField

Name | Type | Format | Description
-----|------|--------|------------
`Code`	|	`string`	|	-	|	For list fields, this is the list item code.
`ListItemID`	|	`string`	|	-	|	For list fields, this is the list item ID.
`Type`	|	`string`	|	-	|	The custom field type. Possible values: Amount, Boolean, ConnectedList, Date, Integer, List, Number, Text
`Value`	|	`string`	|	-	|	The value in the Org Unit or Custom field. For list fields, this is the name of the list item. Maximum length: 48 characters
						
						
### <a name="journey"></a>Journey

Name | Type | Format | Description
-----|------|--------|------------			
`BusinessDistance`	|	`Int32`	|	-	|	The portion of the journey for business use, in the report owner's unit of measure for distances. This element is required in order to post a personal car mileage expense entry, or to post a company car mileage expense when there is no PersonalDistance value. Format: positive integer. When using the Odometer elements, the sum of PersonalDistance and BusinessDistance must equal the difference between OdometerEnd and OdometerStart.
`EndLocation`	|	`string`	|	-	|	**Required** Indicates where the journey ended. This is also known as the "To Location". Maximum length: 100 characters
`NumberOfPassengers`	|	`Int32`	|	-	|	The number of people in the vehicle during the journey. Positive Integer. Used with Variable-Rate, Personal or Company Car.
`OdometerEnd`	|	`Int32`	|	-	|	The odometer reading at the end of the journey. Format: positive integer that must be greater than the OdometerStart value. This element is used with Variable-Rate and Company Car configuration types.
`OdometerStart`	|	`Int32`	|	-	|	The odometer reading at the start of the journey. Format: positive integer. This element is used with Variable-Rate and Company Car configuration types.
`PersonalDistance`	|	`Int32`	|	-	|	The portion of the journey for personal use. This element is required in order to post a company car mileage expense when there is no BusinessDistance value. Format: positive integer. When using the Odometer elements, the sum of PersonalDistance and BusinessDistance must equal the difference between OdometerEnd and OdometerStart. Used with Company Car configuration types.
`StartLocation`	|	`string`	|	-	|	**Required** Indicates where the journey started. This is also known as the "From Location". Maximum length: 100 characters
`UnitOfMeasure`	|	`string`	|	-	|	**Required** The unit of measure for distance and odometer values. Possible values: M - miles, K - kilometers


NOTE: Clients that have Car Configurations that include variable rates are not currently supported.  We only support Car Configurations that include Personal Car One-Rate definitions where Google Maps is not set as mandatory. 

