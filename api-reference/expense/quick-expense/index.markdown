---
title: Quick Expense 
layout: reference
---


# Quick Expenses

* [Retrieve quick expenses](#get)
* [Retrieve quick expense by ID](#getID)
* [Create a quick expense](#post)
* [Update a quick expense](#put)
* [Delete a quick expense](#delete)
* [Schema](#schema)

### Version
3.0

1.0 documentation is available [here](/api-reference-deprecated/version-one/quick-expense/index.html)

## <a name="get"></a>Retrieve quick expenses

    GET  /api/v3.0/expense/quickexpenses

        
### Parameters

Name | Type | Format | Description
-----|------|--------|------------			
`offset`	|	`string`	|	`query`	|	The start of the page offset.
`limit`	|	`Int32`	|	`query`	|	The number of records to return (default 25).
`user`	|	`string`	|	`query`	|	The login ID of the user. Optional. The user must have the Web Services Admin (Professional) or Can Administer (Standard) user role to use this parameter.


### Request URL

```
https://www.concursolutions.com/api/v3.0/expense/quickexpenses?limit=15&user=ALL
```

### JSON example of a successful response

```
{
  "Items": [
    {
      "ExpenseTypeCode": "DINNR",
      "PaymentTypeCode": "CPAID",
      "TransactionDate": "2015-03-17T00:00:00",
      "TransactionAmount": 17.01,
      "CurrencyCode": "USD",
      "VendorDescription": "I Love Sushi",
      "Comment": "Does this default to Cash?",
      "OwnerLoginID": "user@concurconnect2.com",
      "OwnerName": "user",
      "ExpenseTypeName": "Dinner",
      "LocationName": "",
      "ReceiptImageID": null,
      "ID": "gWr6YqsUJgM3BFgTKATDDdg2d",
      "URI": "https://www.concursolutions.com/api/v3.0/expense/quickexpenses/gWr6YqsUJgM3BFgTKATDDdg2d"
    }
```
  

## <a name="getID"></a>Retrieve quick expense by ID

    GET  /api/v3.0/expense/quickexpenses/{id}


### Parameters

Name | Type | Format | Description
-----|------|--------|------------
`id`	|	`string`	|	`path`	|	**Required** The ID of the quick expense.
`user`	|	`string`	|	`query`	|	The login ID of the user. Optional. The user must have the Web Services Admin (Professional) or Can Administer (Standard) user role to use this parameter.


### Request URL

```
https://www.concursolutions.com/api/v3.0/expense/quickexpenses/gWr7QiDXTuWSO8bsFmK87bnP%24sC8fZmg
```

### JSON example of a successful response

```
{
  "ExpenseTypeCode": "DINNR",
  "PaymentTypeCode": "CPAID",
  "TransactionDate": "2015-03-17T00:00:00",
  "TransactionAmount": 17.01,
  "CurrencyCode": "USD",
  "VendorDescription": "I Love Sushi",
  "Comment": "Does this default to Cash?",
  "OwnerLoginID": "jimadmin@concurconnect2.com",
  "OwnerName": "Jim Admin",
  "ExpenseTypeName": "Dinner",
  "LocationName": "",
  "ReceiptImageID": null,
  "ID": "gWr7QiDXTuWSO8bsFmK87bnP$sC8fZmg",
  "URI": "https://www.concursolutions.com/api/v3.0/expense/quickexpenses/gWr7QiDXTuWSO8bsFmK87bnP$sC8fZmg"
}
```


## <a name="post"></a>Create a quick expense

    POST  /api/v3.0/expense/quickexpenses


### Parameters

Name | Type | Format | Description
-----|------|--------|------------
`content`	|	-	|	`body`	|	**Required** The quick expense object to be created
`Comment`	|	`string`	|		|	A comment that describes the expense. Max Length: 2000
`CurrencyCode`	|	`string`	|		|	**Required** The 3-letter ISO 4217 currency code for the expense transaction amount. Example: USD
`ExpenseTypeCode`	|	`string`	|		|	The code for the expense type in the company's expense management system. Currently supports Concur Expense codes. The Expense Type Code is returned in the ExpKey element of the Get Expense Group Configuration function response.
`LocationCity`	|	`string`	|		|	The city where the expense was incurred. This is used to determine the Location ID when the quick expense is converted into an expense entry. If you provide both the LocationCity and LocationCountry values, Concur will try to match them with the company's list of locations. If they are matched successfully, the full location details including country will be saved with the expense. If a LocationCity is provided, the LocationCountry and LocationSubdivision must be provided. If a country does not have subdivisions, the LocationSubdivision field may be omitted.
`LocationCountry`	|	`string`	|		|	The country where the expense was incurred. This is used to determine the Location ID when the quick expense is converted into an expense entry. Format: 2-letter ISO 3166-1 country code.
`LocationSubdivision`	|	`string`	|		|	The state, province, or other country subdivision where the expense was incurred. This is used to determine the Location ID when the quick expense is converted into an expense entry. Format: ISO 3166-2:2007 country subdivision.
`PaymentTypeCode`	|	`string`	|		|	This element specifies the method of payment for the expense. Format: CASHX = Cash, CPAID = Company Paid, or PENDC = Pending Card Transaction (default)
`ReceiptImageID`	|	`string`	|		|	The unique identifier for the image. The ReceiptImageID is returned in the ID element of the Post Receipt Image API response.
`SpendCategoryCode`	|	`string`	|		|	The spend category code for the quick expense. The available spend category codes are consistent across all Concur products. The values are used in Concur reporting. Format: One of the Code values in the [Spend Category Code List](/tools-support/reference/spend-category-codes.html). Note: COCRM (Company Car Mileage) and PRCAR (Personal Car Mileage) are not currently supported.
`TransactionAmount`	|	`Decimal`	|		|	**Required** The total amount of the expense in the original currency, with up to three decimal places. Example: 123.654
`TransactionDate`	|	`DateTime`	|		|	**Required**The date the expense was incurred. Format: YYYY-MM-DD
`VendorDescription`	|	`string`	|		|	The descriptive text for the vendor for the quick expense. This often matches the Merchant Name found in a credit card transaction. Max Length: 64


### Request URL

```
https://www.concursolutions.com/api/v3.0/expense/quickexpenses
```


### JSON example of a successful response

```
{
  "ID": "gWr7QiDXTuWSO8bsFmK87bnP$sC8fZmg",
  "URI": "https://www.concursolutions.com/api/v3.0/expense/quickexpenses/gWr7QiDXTuWSO8bsFmK87bnP$sC8fZmg"
}
```


## <a name="put"></a>Update a quick expense

    PUT  /api/v3.0/expense/quickexpenses/{id}


### Parameters

Name | Type | Format | Description
-----|------|--------|------------
`id`	|	`string`	|	`path`	|	**Required** The ID of the quick expense
`content`	|	-	|	`body`	|	**Required** Partial or complete QuickExpense object to update
`Comment`	|	`string`	|		|	A comment that describes the expense. Max Length: 2000
`CurrencyCode`	|	`string`	|		|	**Required** The 3-letter ISO 4217 currency code for the expense transaction amount. Example: USD
`ExpenseTypeCode`	|	`string`	|		|	The code for the expense type in the company's expense management system. Currently supports Concur Expense codes. The Expense Type Code is returned in the ExpKey element of the Get Expense Group Configuration function response.
`LocationCity`	|	`string`	|		|	The city where the expense was incurred. This is used to determine the Location ID when the quick expense is converted into an expense entry. If you provide both the LocationCity and LocationCountry values, Concur will try to match them with the company's list of locations. If they are matched successfully, the full location details including country will be saved with the expense. If a LocationCity is provided, the LocationCountry and LocationSubdivision must be provided. If a country does not have subdivisions, the LocationSubdivision field may be omitted.
`LocationCountry`	|	`string`	|		|	The country where the expense was incurred. This is used to determine the Location ID when the quick expense is converted into an expense entry. Format: 2-letter ISO 3166-1 country code.
`LocationSubdivision`	|	`string`	|		|	The state, province, or other country subdivision where the expense was incurred. This is used to determine the Location ID when the quick expense is converted into an expense entry. Format: ISO 3166-2:2007 country subdivision.
`PaymentTypeCode`	|	`string`	|		|	This element specifies the method of payment for the expense. Format: CASHX = Cash, CPAID = Company Paid, or PENDC = Pending Card Transaction (default)
`ReceiptImageID`	|	`string`	|		|	The unique identifier for the image. The ReceiptImageID is returned in the ID element of the Post Receipt Image API response.
`SpendCategoryCode`	|	`string`	|		|	The spend category code for the quick expense. The available spend category codes are consistent across all Concur products. The values are used in Concur reporting. Format: One of the Code values in the [Spend Category Code List](/tools-support/reference/spend-category-codes.html). Note: COCRM (Company Car Mileage) and PRCAR (Personal Car Mileage) are not currently supported.
`TransactionAmount`	|	`Decimal`	|		|	**Required** The total amount of the expense in the original currency, with up to three decimal places. Example: 123.654
`TransactionDate`	|	`DateTime`	|		|	**Required**The date the expense was incurred. Format: YYYY-MM-DD
`VendorDescription`	|	`string`	|		|	The descriptive text for the vendor for the quick expense. This often matches the Merchant Name found in a credit card transaction. Max Length: 64


### Request URL

```
https://www.concursolutions.com/api/v3.0/expense/quickexpenses/gWr7QiDXTuWSO8bsFmK87bnP%24sC8fZmg
```


### JSON example of a successful response
```
no content
```

## <a name="delete"></a>Delete a quick expense

    DELETE  /api/v3.0/expense/quickexpenses/{id}


### Parameters

Name | Type | Format | Description
-----|------|--------|------------
`id`	|	`string`	|	`path`	|	**Required** The ID of the quick expense to be deleted
`user`	|	`string`	|	`query`	|	The login ID of the user. Optional. The user must have the Web Services Admin (Professional) or Can Administer (Standard) user role to use this parameter.


### Request URL
```
https://www.concursolutions.com/api/v3.0/expense/quickexpenses/gWr7QiDXTuWSO8bsFmK87bnP%24sC8fZmg
```


### JSON example of a successful response
```
no content
```


## <a name="schema"></a>Schema


### Quick Expenses

Name | Type | Format | Description
-----|------|--------|------------
`Items`	|	`Array`	|	[Quick Expense](#quickexpense)	|	The result collection.
`NextPage`	|	`string`	|	-	|	The URI of the next page of results, if any.


### <a name="quickexpense"></a>Quick Expense

Name | Type | Format | Description
-----|------|--------|------------
`Comment`	|	`string`	|	-	|	A comment that describes the expense. Max Length: 2000
`CurrencyCode`	|	`string`	|	-	|	The 3-letter ISO 4217 currency code for the expense transaction amount. Example: USD
`ExpenseTypeCode`	|	`string`	|	-	|	The code for the expense type in the company's expense management system. Currently supports Concur Expense codes. The Expense Type Code is returned in the ExpKey element of the Get Expense Group Configuration function response.
`ExpenseTypeName`	|	`string`	|	-	|	The name of the expense type associated with the quick expense.
`ID`	|	`string`	|	-	|	The unique identifier of the resource.
`LocationName`	|	`string`	|	-	|	The name of the location where the expense was incurred.
`OwnerLoginID`	|	`string`	|	-	|	The Concur login ID for the expense owner. Useful for system to system integration when there are expenses for multiple users.
`OwnerName`	|	`string`	|	-	|	The first and last name for the expense owner. Useful for system to system integration when there are expenses for multiple users.
`PaymentTypeCode`	|	`string`	|	-	|	This element specifies the method of payment for the expense. Format: CASHX = Cash, CPAID = Company Paid, or PENDC = Pending Card Transaction (default)
`ReceiptImageID`	|	`string`	|	-	|	The ID of the receipt image associated with this quick expense, if any.
`TransactionAmount`	|	`Decimal`	|	-	|	The total amount of the expense in the original currency, with up to three decimal places. Example: 123.654
`TransactionDate`	|	`DateTime`	|	-	|	The date the expense was incurred. Format: YYYY-MM-DD
`URI`	|	`string`	|	-	|	The URI to the resource.
`VendorDescription`	|	`string`	|	-	|	The descriptive text for the vendor for the quick expense. This often matches the Merchant Name found in a credit card transaction. Max Length: 64
