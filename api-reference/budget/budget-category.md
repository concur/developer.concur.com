---
title: Budget Category
layout: reference
---


# Budget Category
* [Retrieve all Budget Categories](#getall)
* [Retrieve a Budget Category](#get)
* [Create/Update a Budget Category](#post)
* [Remove a Budget Category](#delete)
* [Retrieve all valid Expense Types](#getExpTypes)
* [Schema](#schema)


## Version
3.0  


## <a name="getall"></a>Retrieve all Budget Categories

    GET  /budget/v4/budgetCategory

### Parameters


## <a name="get"></a>Retrieve a Budget Item Header

    GET  /budget/v4/budgetCategory/{id} 

### Parameters

Name | Type | Format | Description
-----|------|--------|------------			
id	|	`string`	|	`path`	|	The budget category's key field (sync guid).


## <a name="post"></a>Create/Update a Budget Category

    POST  /budget/v4/budgetCategory


### Parameters

Name | Type | Format | Description
-----|------|--------|------------
`budgetCategory`	|	-	|	`body`	|	**Required** A JSON representation of a Budget Category


## <a name="delete"></a>Delete a Budget Category

    DELETE  /budget/v4/budgetCategory/{id}


### Parameters

Name | Type | Format | Description
-----|------|--------|------------
id	|	`string`	|	`path`	|	The budget category's key field (sync guid).


## <a name="getExpTypes"></a>Retrieve all valid Expense Types

    GET  /budget/v4/budgetCategory/expenseTypes


### Parameters



## <a name="schema"></a>Schema


### BudgetCategory

Name | Type | Format | Description
-----|------|--------|------------
`description`	|	`string`	|	-	|	The friendly name for this category.
`expenseTypes`	|	`Array[ExpenseType]`	|	-	|	**Required** The list of expense types that this budget category matches. 
`name`	|	`string`	|	-	|	**Required** The admin-facing name for this category.
`statusType`	|	`string`	|	-	|	The status of this budget category. Valid values are 'OPEN' and 'REMOVED'
`syncGuid`	|	`string`	|	-	|	The budget service's key for this object.


### ExpenseType

Name | Type | Format | Description
-----|------|--------|------------
`featureTypeCode`	|	`string`	|	-	|	**Required** The type of feature that this expense type applies to, Purchase Request, Payment Request (Invoice), Expense or Travel Authorization (Possible values: 'REQUEST', 'TRAVEL', 'EXPENSE', 'PAYMENT_REQUEST', 'PURCHASE_REQUEST')
`expenseTypeCode`	|	`string`	|	-	|	**Required** The alphanumeric code that describes an expense type.  Ex: TRAVEL, AC_CATER Any string may be used, but only expense type codes returned by GET /budgetCategory/expenseType will behave properly in the Concur UI.  
`name`	|	`string`	|	-	|	The name for this expense type if it maps to an expense type set up in Concur. **READ ONLY**
`syncGuid`	|	`string`	|	-	|	The budget service's key for this object.

