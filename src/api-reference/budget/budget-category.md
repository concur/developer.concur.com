---
title: Budget Category
layout: reference
---

# Menu
* [Getting Started](#overview)
* [Fiscal Year](#overview)
* [Budget Item](#overview)

# Budget Category - Beta
* [Overview](#overview)
* [Retrieve all Budget Categories](#getall)
* [Retrieve a Budget Category](#get)
* [Create/Update a Budget Category](#post)
* [Remove a Budget Category](#delete)
* [Retrieve all valid Expense Types](#getExpTypes)
* [Schema](#schema)

## Overview

The new Budget Service API is in **Beta**. If you are interested in using the Budget Service API, then please contact your account manager for further details. 


This resource is used to retrieve and update budget categories which are collections of expense types used for budget
matching.  Each budget item header may have one Budget Category.  If it does, only line items with expense types 
contained in that Budget Category will be accumulated to the budget. 


## Version
4.0  


## <a name="getall"></a>Retrieve all Budget Categories

    GET  /budget/v4/budgetCategory

HTTPie:

```shell
http https://us.api.concursolutions.com/budget/v4/budgetCategory 'Authorization:Bearer {YOUR ACCESS TOKEN}'
```

### Parameters

    N/A
    
### Response

[Budget Category Array](#budgetcategory)


## <a name="get"></a>Retrieve a Budget Category

    GET  /budget/v4/budgetCategory/{id} 
    
HTTPie:

```shell
http https://us.api.concursolutions.com/budget/v4/budgetCategory/{id}  'Authorization:Bearer {YOUR ACCESS TOKEN}'
```


### Parameters

Name | Type | Format | Description
-----|------|--------|------------			
id	|	`string`	|	`path`	|	The budget category's key field (sync guid).

### Response

[Budget Category](#budgetcategory)

### Example JSON Response

```json
{
  "name":"Marketing and Outreach",
  "description":null,
  "statusType":"OPEN",
  "syncGuid":"36047f6c-6cf6-443d-a952-39efb012acdb",
  "expenseTypes":[
    {
      "featureTypeCode":"PURCHASE_REQUEST",
      "expenseTypeCode":"MKTG",
      "syncGuid":"f35827a8-7981-4a5b-bfc3-da7ebb4665ff",
      "name":null
    },
    {
      "featureTypeCode":"EXPENSE",
      "expenseTypeCode":"SEMNR",
      "syncGuid":"30f16783-e50e-4ab4-b6fb-f66cc75956f2",
      "name":null
    },
    {
      "featureTypeCode":"PURCHASE_REQUEST",
      "expenseTypeCode":"ADVT",
      "syncGuid":"64a04928-37b0-49c8-99e8-c346e6d47825",
      "name":null
    }
  ]
} 
```

## <a name="post"></a>Create/Update a Budget Category

    POST  /budget/v4/budgetCategory


HTTPie:

```shell
http POST https://us.api.concursolutions.com/budget/v4/budgetCategory \
"Authorization:Bearer {YOUR ACCESS TOKEN}" \
"Content-Type: application/json" \
< {PATH TO YOUR BUDGET CATAEGORY JSON}
```



### Parameters

Name | Type | Format | Description
-----|------|--------|------------
`budgetCategory`	|	-	|	`body`	|	**Required** A JSON representation of a Budget Category

### Response

[Budget Category](#budgetcategory)


## <a name="delete"></a>Delete a Budget Category

    DELETE  /budget/v4/budgetCategory/{id}
    
HTTPie:

```shell
http DELETE https://us.api.concursolutions.com/budget/v4/budgetCategory/{id} \
"Authorization:Bearer {YOUR ACCESS TOKEN}" \
"Content-Type: application/json" \
```


### Parameters

Name | Type | Format | Description
-----|------|--------|------------
id	|	`string`	|	`path`	|	The budget category's key field (sync guid).


## <a name="getExpTypes"></a>Retrieve all valid Expense Types

    GET  /budget/v4/budgetCategory/expenseTypes

    *Note: The list for REQUEST expense types is identical to the list for EXPENSE expense types and similarly 
    PURCHASE_REQUEST is identical to PAYMENT_REQUEST.  Due to response size and performance concerns, only EXPENSE and
    PAYMENT_REQUEST are returned and the caller should assume that identical expense types exist for REQUEST and 
    PURCHASE_REQUEST.* 
    
### Parameters

### Response

[Expense Type Array](#expensetype)

### Example JSON Response

```json
[
  {
    "featureTypeCode":"EXPENSE",
    "expenseTypeCode":"AIRFR",
    "syncGuid":null,
    "name":"Airfare"
  },
  {
    "featureTypeCode":"EXPENSE",
    "expenseTypeCode":"AIRTX",
    "syncGuid":null,
    "name":"Airfare Ticket Tax"
  },
  {
    "featureTypeCode":"PAYMENT_REQUEST",
    "expenseTypeCode":"CATER",
    "syncGuid":null,
    "name":"Catering"
  }
]
```


## <a name="schema"></a>Schema


### <a name="budgetcategory"></a>BudgetCategory

Name | Type | Format | Description
-----|------|--------|------------
`description`	|	`string`	|	-	|	The friendly name for this category.
`expenseTypes`	|	`Array[ExpenseType]`	|	-	|	**Required** The list of expense types that this budget category matches. 
`name`	|	`string`	|	-	|	**Required** The admin-facing name for this category.
`statusType`	|	`string`	|	-	|	The status of this budget category. Valid values are 'OPEN' and 'REMOVED'
`syncGuid`	|	`string`	|	-	|	The budget service's key for this object.


### <a name="expensetype"></a>ExpenseType

Name | Type | Format | Description
-----|------|--------|------------
`featureTypeCode`	|	`string`	|	-	|	**Required** The type of feature that this expense type applies to, Purchase Request, Payment Request (Invoice), Expense or Travel Authorization (Possible values: 'REQUEST', 'TRAVEL', 'EXPENSE', 'PAYMENT_REQUEST', 'PURCHASE_REQUEST')
`expenseTypeCode`	|	`string`	|	-	|	**Required** The alphanumeric code that describes an expense type.  Ex: TRAVEL, AC_CATER Any string may be used, but only expense type codes returned by GET /budgetCategory/expenseType will behave properly in the Concur UI.  
`name`	|	`string`	|	-	|	The name for this expense type if it maps to an expense type set up in Concur. **READ ONLY**
`syncGuid`	|	`string`	|	-	|	The budget service's key for this object.  (If this field is not supplied, the service will use an existing expense type entry if one exists.

### HTTP Response Codes
HTTP Error Code | Description
---|---
`200`|`OK - Successful call, response is in body.`
`400`|`Bad Request - The request was determined to be invalid by the server. Possibly a validation failed on the data that was sent in the payload. For example, a Budget Category must have a name. The response will have a list of validation errors in the body. See below for an example 400 response.`
`401`|`Unauthorized - The user could not be authenticated.`
`403`|`Forbidden - The user does not have the necessary permissions to perform the request`
`404`|`Not Found - The resource could not be found or does not exist`
`500`|`Server Error - Error message in response body`
`503`|`Server Timeout - Error message in response body`


### Example 400 Response

**Response**

```http
HTTP/1.1 400 Bad Request
Content-Type: application/json
```
```json
{
  "status" : false, 
  "errorMessageList" : 
  [
    {"errorType" : "ERROR", "errorCode" : "BUDGET.BUDGET_PERIOD_REQUIRED", "errorMessage" : "Budget period is missing"},
    {"errorType" : "ERROR", "errorCode" : "BUDGET.AMOUNT_TYPE_REQUIRED", "errorMessage" : "Amount type is required"},
    {"errorType" : "ERROR", "errorCode" : "BUDGET.CANNOT_ADJUST_ZERO", "errorMessage" : "An Adjustment with zero amount cannot be made"}
  ]
}
```

