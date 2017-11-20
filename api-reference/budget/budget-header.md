---
title: Budget Header
layout: reference
---


# Budget Item Header
* [Retrieve all Budget Item Headers](#getall)
* [Retrieve a Budget Item Header](#get)
* [Create/Update a Budget Item Header](#post)
* [Remove a Budget Item Header](#delete)
* [Schema](#schema)


## Version
3.0  


## <a name="getall"></a>Retrieve all Budget Item Headers

    GET  /budget/v4/budgetItemHeader 

### Parameters

Name | Type | Format | Description
-----|------|--------|------------			
adminView	|	`boolean`	|	`query`	|	If true, returns all budgets for this entity, if false, returns only the budgets owned by the current user.  Defaults to false.
offset	|	`integer`	|	`query`	|	The start of the page offset.  Defaults to zero.


## <a name="get"></a>Retrieve a Budget Item Header

    GET  /budget/v4/budgetItemHeader/{id} 

### Parameters

Name | Type | Format | Description
-----|------|--------|------------			
id	|	`string`	|	`path`	|	The budget item header's key field (sync guid).


## <a name="post"></a>Create/Update a Budget Item Header

    POST  /budget/v4/budgetItemHeader


### Parameters

Name | Type | Format | Description
-----|------|--------|------------
`budgetItemheader`	|	-	|	`body`	|	**Required** A JSON representation of a Budget Item


## <a name="delete"></a>Delete a Budget Item Header

    DELETE  /budget/v4/budgetItemHeader/{id}


### Parameters

Name | Type | Format | Description
-----|------|--------|------------
id	|	`string`	|	`path`	|	The budget item header's key field (sync guid).


## <a name="schema"></a>Schema


### BudgetItemHeader

Name | Type | Format | Description
-----|------|--------|------------
`active`	|	`boolean`	|	-	|	Indicates if this budget should be displayed on user screens **READ ONLY**
`annualBudget`	|	`decimal`	|	-	|	The total budget amount and accumulated balances for this budget header. **READ ONLY** 
`budgetAmounts`	|	`Array[BudgetAmounts]`	|	-	|	The accumulated budget amounts for this budget.  **READ ONLY**
`budgetApprovers`	|	`Array[BudgetPerson]`	|	-	|	The users who can approve spending for this budget.  If approvers exist, the spending item only matches this budget if one of the approvers is the submitter or is above the submitter in the manager hierarchy.
`budgetCategory`	|	`BudgetCategory`	|	-	|	The budget category for this budget item.  If a budget category is present, spending items must match one of the expense types in the budget category in order to match this budget.
`budgetItemDetails`	|	`Array[BudgetItemDetail]`	|	-	|	**Required** Specify the budget information for each fiscal period in the fiscal year.
`budgetItemStatusType`	|	`string`	|	-	|	The status of this budget item. Valid values are 'OPEN', 'CLOSED', and 'REMOVED' (Closed means no spending may be attached to this budget.)
`budgetViewers`	|	`Array[BudgetPerson]`	|	-	|	The users who can view this budget
`costObjects`	|	`Array[CostObjectValue]`	|	-	|	The cost object list for matching spending items.
`currencyCode`	|	`string`	|	-	|	The 3-letter ISO 4217 currency code for the expense report currency. Examples: USD - US dollars; BRL - Brazilian real; CAD - Canadian dollar; CHF - Swiss franc; EUR - Euro; GBO - Pound sterling; HKD - Hong Kong dollar; INR - Indian rupee; MXN - Mexican peso; NOK - Norwegian krone; SEK - Swedish krona.
`description`	|	`string`	|	-	|	**Required** The user-friendly name for this budget.
`fiscalYear`	|	`FiscalYear`	|	-	|	**Requred** The fiscal year for this budget.  Only the sync_guid is technically required for creating/updating a budget.
`isTest`	|	`boolean`	|	-	|	The test flag for the budget item.  If true, this budget will only match spending submitted by test users.
`name`	|	`string`	|	-	|	**Required** The admin-facing name for this budget.
`owned`	|	`string`	|	-	|	A flag indicating if the current user is the owner of this budget.  **READ ONLY**
`owner`	|	`BudgetPerson`	|	-	|	**Required** The user who is ultimately responsible for this budget.  He/she may approve spending for the budget.
`periodType`	|	`string`	|	-	|	The type of period within the fiscal year that this budget's details use. **READ ONLY**
`syncGuid`	|	`string`	|	-	|	The key for this object.


### BudgetItemDetail

Name | Type | Format | Description
-----|------|--------|------------
`amount`	|	`decimal`	|	-	|	**Required** The budget currency amount allocated to this fiscal period.  May be zero.
`budgetAmounts`	|	`Array[BudgetAmounts]`	|	-	|	The accumulated budget numbers for this budget.  **READ ONLY**
`budgetItemBalances`	|	`Array[BudgetItemBalance]`	|	-	|	Shows the break-out of budget spending by product and workflow state.  **READ ONLY**
`budgetItemDetailStatusType`	|	`string`	|	-	|	The status of this budget item. Valid values are 'OPEN', 'CLOSED', and 'REMOVED' (Closed means no spending may be attached to this budget.)
`budgetName`	|	`string`	|	-	|	-
`currencyCode`	|	`string`	|	-	|	The 3-letter ISO 4217 currency code for the expense report currency. Examples: USD - US dollars; BRL - Brazilian real; CAD - Canadian dollar; CHF - Swiss franc; EUR - Euro; GBO - Pound sterling; HKD - Hong Kong dollar; INR - Indian rupee; MXN - Mexican peso; NOK - Norwegian krone; SEK - Swedish krona.
`fiscalYear`	|	`FiscalPeriod`	|	-	|	**Requred** The fiscal period for this budget amount.  Only the sync_guid is technically required for creating/updating a budget.
`syncGuid`	|	`string`	|	-	|	The key for this object.


### BudgetAmounts

Name | Type | Format | Description
-----|------|--------|------------
`availableAmount`	|	`decimal`	|	-	|	The available amount accumulated against this budget. Uses budget entity setting to determine which amounts are included to calculate available amount. **READ ONLY**
`consumedPercent`	|	`decimal`	|	-	|	The percentage of the budget that is considered used. Uses budget entity setting to determine which amounts to include. **READ ONLY**
`pendingAmount`	|	`decimal`	|	-	|	The pending amount accumulated against this budget. **READ ONLY**
`spendAmount`	|	`decimal`	|	-	|	The spent amount accumulated against this budget. **READ ONLY**
`threshold`	|	`string`	|	-	|	The indicator of whether this budget is under the alert limit (UNDER), equal to or over the alert limit, but under the control limit (ALERT), or equal to or over the control limit (OVER).  **READ ONLY**


### BudgetPerson

Name | Type | Format | Description
-----|------|--------|------------
`externalUserSyncGuid`	|	`string`	|	-	|	**Required** The unique identifier for this user. This must match the CUUID from Concur's profile service.
`name`	|	`string`	|	-	|	The user's name.  Provided for convenience.  **READ ONLY**
`syncGuid`	|	`string`	|	-	|	The budget service's key for this object.


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


### CostObjectValue

Name | Type | Format | Description
-----|------|--------|------------
`code`	|	`string`	|	-	|	**Required** The code for the cost object field.
`value`	|	`string`	|	-	|	The value for the cost object field. Blank or null mean that we 
`listKey`	|	`string`	|	-	|	When setting up the budget, specify the listKey that maps to the value of this list in the concur list service.


### BudgetItemBalance

Name | Type | Format | Description
-----|------|--------|------------
`amount`	|	`decimal`	|	-	|	The balance amount. **READ ONLY**
`featureTypeCode`	|	`string`	|	-	|	The product type for this balance. Valid values are 'REQUEST', 'TRAVEL', 'EXPENSE', 'PAYMENT_REQUEST'  **READ ONLY** 
`workflowState`	|	`string`	|	-	|	Valid values are 'UNSUBMITTED', 'UNSUBMITTED_HELD', 'SUBMITTED', 'APPROVED', 'PROCESSED', 'PAID' **READ ONLY**
`syncGuid`	|	`string`	|	-	|	The budget service's key for this object.


### FiscalYear

Name | Type | Format | Description
-----|------|--------|------------
`currentYear`	|	`boolean`	|	-	|	Is this the current fiscal year based on the current time?  **READ ONLY**
`startDate`	|	`date`	|	-	|	**Required** The start date for this fiscal year. The distance between start date and end date may not be more than two years. Format: YYYY-MM-DD 
`endDate`	|	`date`	|	-	|	**Required** The end date for this fiscal year. The distance between start date and end date may not be more than two years.  Format: YYYY-MM-DD
`name`	|	`datetime`	|	-	|	**Required** The name of this fiscal year. Must be unique for this entity.
`status`	|	`string`	|	-	|	**Required** The status of this fiscal year. Valid values are 'OPEN', 'CLOSED' and 'REMOVED'
`syncGuid`	|	`string`	|	-	|	The budget service's key for this object.
`lastModified`  |   `datetime`  |   -   |   The UTC date and time when this object was last changed.  **READ ONLY**
`monthlyFiscalPeriods`	|	`Array[FiscalPeriod]`	|	-	|	 **Required** The list of monthly fiscal periods in this fiscal year. Fiscal periods must complete fill the parent fiscal year with no overlaps. 
`quarterlyFiscalPeriods`	|	`Array[FiscalPeriod]`	|	-	|	 The list of quarterly fiscal periods in this fiscal year.  If this parameter is not specified, quaterly fiscal periods are automatically generated based on the monthly fiscal periods supplied.  
`yearlyFiscalPeriods`	|	`Array[FiscalPeriod]`	|	-	|	 The list of yearly fiscal periods in this fiscal year.  If this parameter is not specified, one period is created that fills the fiscal year.
`customFiscalPeriods`	|	`Array[FiscalPeriod]`	|	-	|	 The list of custom fiscal periods in this fiscal year.  
`fiscalPeriods`	|	`Array[FiscalPeriod]`	|	-	|	 The list of all fiscal periods in this fiscal year.  **READ ONLY**
`openAndClosedFiscalPeriods`	|	`Array[FiscalPeriod]`	|	-	|	 The list of all fiscal periods in this fiscal year, sorted by status.  **READ ONLY**

### FiscalPeriod

Name | Type | Format | Description
-----|------|--------|------------
`currentPeriod`	|	`boolean`	|	-	|	Is this the current fiscal period based on the current time?  **READ ONLY**
`startDate`	|	`date`	|	-	|	**Required** The start date for this fiscal period. Must be within the parent fiscal year. Format: YYYY-MM-DD
`endDate`	|	`date`	|	-	|	**Required** The end date for this fiscal year. Must be within the parent fiscal year. Format: YYYY-MM-DD
`name`	|	`string`	|	-	|	**Required** The name of this fiscal period. Must be unique for this entity.
`fiscalPeriodStatus`	|	`string`	|	-	|	**Required** The status of this fiscal period. Valid values are 'OPEN', 'CLOSED' and 'REMOVED'
`periodType`  | `string`    |   -   |   **Required** The type of fiscal period.  Valid values are 'MONTHLY', 'QUARTERLY', 'YEARLY', 'CUSTOM'
`fiscalYearSyncGuid`	|	`string`	|	-	|	The key of the parent fiscal year for this fiscal period.
`syncGuid`	|	`string`	|	-	|	The budget service's key for this object.
`spendDate` |   `date`  |   -   |   If the current date is after this fiscal period's start date, this field shows the current date.  **READ ONLY**
