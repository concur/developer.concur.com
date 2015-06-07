# Quick Expenses

* [Retrieve quick expenses](#get)
* [Retrieve quick expense by ID](#getID)
* [Create a quick expense](#post)
* [Update a quick expense](#put)
* [Delete a quick expense](#delete)
* [Schema](#schema)

## <a name="get"></a>Retrieve quick expenses
    GET /expense/quickexpenses

        
### Parameters
Name | Type | Format | Description
-----|------|--------|------------			
`offset`	|	`string`	|	`query`	|	The start of the page offset.`limit`	|	`Int32`	|	`query`	|	The number of records to return (default 25).`user`	|	`string`	|	`query`	|	The login ID of the user. Optional. The user must have the Web Services Admin (Professional) or Can Administer (Standard) user role to use this parameter.



## <a name="getID"></a>Retrieve quick expense by ID
    GET /expense/quickexpenses/{id}


### Parameters
Name | Type | Format | Description
-----|------|--------|------------
`id`	|	`string`	|	`path`	|	**Required** The ID of the quick expense.`user`	|	`string`	|	`query`	|	The login ID of the user. Optional. The user must have the Web Services Admin (Professional) or Can Administer (Standard) user role to use this parameter.


## <a name="post"></a>Create a quick expense
    POST /expense/quickexpenses


### Parameters
Name | Type | Format | Description
-----|------|--------|------------
`content`	|	-	|	`body`	|	**Required** The quick expense object to be created


## <a name="put"></a>Update a quick expense
    PUT /expense/quickexpenses/{id}


### Parameters
Name | Type | Format | Description
-----|------|--------|------------
`id`	|	`string`	|	`path`	|	**Required** The ID of the quick expense`content`	|	-	|	`body`	|	**Required** Partial or complete QuickExpense object to update


## <a name="delete"></a>Delete a quick expense
    DELETE /expense/quickexpenses/{id}


### Parameters
Name | Type | Format | Description
-----|------|--------|------------
`id`	|	`string`	|	`path`	|	**Required** The ID of the quick expense to be deleted`user`	|	`string`	|	`query`	|	The login ID of the user. Optional. The user must have the Web Services Admin (Professional) or Can Administer (Standard) user role to use this parameter.



## <a name="schema"></a>Schema


###Quick Expenses
Name | Type | Format | Description
-----|------|--------|------------
Items	|	Array	|	[Quick Expense](#quickexpense)	|	The result collection.NextPage	|	string	|	-	|	The URI of the next page of results, if any.
###<a name="quickexpense"></a>Quick Expense
Name | Type | Format | Description
-----|------|--------|------------
`Comment`	|	`string`	|	-	|	A comment that describes the expense. Max Length: 2000`CurrencyCode`	|	`string`	|	-	|	The 3-letter ISO 4217 currency code for the expense transaction amount. Example: USD`ExpenseTypeCode`	|	`string`	|	-	|	The code for the expense type in the company's expense management system. Currently supports Concur Expense codes. The Expense Type Code is returned in the ExpKey element of the Get Expense Group Configuration function response.`ExpenseTypeName`	|	`string`	|	-	|	The name of the expense type associated with the quick expense.`ID`	|	`string`	|	-	|	The unique identifier of the resource.`LocationName`	|	`string`	|	-	|	The name of the location where the expense was incurred.`OwnerLoginID`	|	`string`	|	-	|	The Concur login ID for the expense owner. Useful for system to system integration when there are expenses for multiple users.`OwnerName`	|	`string`	|	-	|	The first and last name for the expense owner. Useful for system to system integration when there are expenses for multiple users.`PaymentTypeCode`	|	`string`	|	-	|	This element specifies the method of payment for the expense. Format: CASHX = Cash, CPAID = Company Paid, or PENDC = Pending Card Transaction (default)`ReceiptImageID`	|	`string`	|	-	|	The ID of the receipt image associated with this quick expense, if any.`TransactionAmount`	|	`Decimal`	|	-	|	The total amount of the expense in the original currency, with up to three decimal places. Example: 123.654`TransactionDate`	|	`DateTime`	|	-	|	The date the expense was incurred. Format: YYYY-MM-DD`URI`	|	`string`	|	-	|	The URI to the resource.`VendorDescription`	|	`string`	|	-	|	The descriptive text for the vendor for the quick expense. This often matches the Merchant Name found in a credit card transaction. Max Length: 64


