---
title: Budget Header
layout: reference
---

# Budget Item Header
* [Overview](#overview)
* [Retrieve all Budget Item Headers](#getall)
* [Retrieve a Budget Item Header](#get)
* [Create/Update a Budget Item Header](#post)
* [Remove a Budget Item Header](#delete)
* [Schema](#schema)

### Overview

The new Budget Service API is in Beta. If you are interested in using the Budget Service API, then please contact you account manager for further details. 

This resource is used to retrieve and update information about a budget that spans a single fiscal year.  Each budget
has multiple details that correspond to fiscal periods--months, quarters, or a single period for a yearly budget.


## Version
4.0  


## <a name="getall"></a>Retrieve all Budget Item Headers

    GET  /budget/v4/budgetItemHeader 
    
```shell
curl -H "Authorization: Bearer {YOUR ACCESS TOKEN}" https://us.api.concursolutions.com/budget/v4/budgetItemHeader  
```

HTTPie:

```shell
http https://us.api.concursolutions.com/budget/v4/budgetItemHeader 'Authorization:Bearer {YOUR ACCESS TOKEN}'
```

### Parameters

Name | Type | Format | Description
-----|------|--------|------------			
adminView	|	`boolean`	|	`query`	|	If true, returns all budgets for this entity, if false, returns only the budgets owned by the current user.  Defaults to false.
offset	|	`integer`	|	`query`	|	The start of the page offset.  Defaults to zero.

    *Note: due to response size and performance considerations, this endpoint does not return budgetItemDetails*

### Response

[Paged Budget Item Header List Schema](#budgetItemHeaderList)

### JSON Example Response

```json
{
  "totalRows":122,"offset":0,"limit":50,
  "budgetItemHeaders":[
    {
        "name":"Marketing-US-Jean Normandy",
        "isTest":false,
        "budgetItemStatusType":"OPEN",
        "description":"Marketing-US",
        "syncGuid":"72eee673-3d81-49c2-966a-b63c7a9302e6",
        "costObjects":[
          {"code":"6",
          "value":"2",
          "listKey":"1334",
          "operator":"EQUAL"}
        ],
        "periodType":"YEARLY",
        "active":true,
        "owned":false,
        "budgetAmounts":{
          "pendingAmount":1178.37697091,
          "unExpensedAmount":2310.73578092,
          "spendAmount":35.78378912,
          "availableAmount":8785.83923997,
          "unExpensedSettings":null,
          "threshold":"UNDER",
          "consumedPercent":12
        },
        "currencyCode":"EUR",
        "annualBudget":10000.00000000,
        "budgetCategory":{
          "name":"airfare",
          "description":null,
          "statusType":"OPEN",
          "syncGuid":"27451c2d-9121-44bd-b4b0-f2119d2071c7"
        },
        "owner":{
          "externalUserSyncGuid":"8002250890004822936",
          "employeeUuid":"210fe25f-e326-495c-847a-de333173f616",
          "syncGuid":"f779261d-77ce-4123-b739-d842ef6f104d",
          "name":"Jean Normandy"
         },
        "budgetApprovers":[],
        "budgetViewers":[
          {
            "externalUserSyncGuid":"5005380230004873464",
            "employeeUuid":"eb6082b0-3a9a-4e79-a350-e6e067f34969",
            "syncGuid":"7ce7dfe0-6168-4b93-bb35-386bf023acc6",
            "name":"Dan Lee"
          }
        ],
        "fiscalYear":{
          "name":"2017",
          "startDate":"2017-01-01",
          "endDate":"2017-12-31",
          "status":"OPEN",
          "syncGuid":"a4f9d57f-14ac-4f03-b5aa-4256e5cff790",
          "lastModified":"2017-03-26 20:53:19",
          "currentYear":false
        }
      },
    {"Additional budget item headers removed for brevity":"Additional budget items headers removed for brevity"}
  ],
  "href":"https://us.api.concursolutions.com/budget/v1.1/budgetItemHeader/?offset=0",
  "next":{
    "href":"http://budget-service-rqa3-budget.us-west-2.nonprod.cnqr.delivery/budget/v1.1/budgetItemHeader/?adminView=true&offset=50"
  },
  "previous":null
}
```


## <a name="get"></a>Retrieve a Budget Item Header

    GET  /budget/v4/budgetItemHeader/{id} 
    
```shell
curl -H "Authorization: Bearer {YOUR ACCESS TOKEN}" https://us.api.concursolutions.com/budget/v4/budgetItemHeader/{id} 
```

HTTPie:

```shell
http https://us.api.concursolutions.com/budget/v4/budgetItemHeader/{id}  'Authorization:Bearer {YOUR ACCESS TOKEN}'
```


### Parameters

Name | Type | Format | Description
-----|------|--------|------------			
id	|	`string`	|	`path`	|	The budget item header's key field (sync guid).

### Response

[Budget Item Header Schema](#budgetItemHeader)

### JSON Example Response

```json
  {
    "name":"Marketing-US-Jean Normandy",
    "isTest":false,
    "budgetItemStatusType":"OPEN",
    "description":"Marketing-US",
    "syncGuid":"72eee673-3d81-49c2-966a-b63c7a9302e6",
    "costObjects":[
      {"code":"6",
      "value":"2",
      "listKey":"1334",
      "operator":"EQUAL"}
    ],
    "periodType":"QUARTERLY",
    "active":true,
    "owned":false,
    "budgetAmounts":{
      "pendingAmount":6870.48165307,
      "unExpensedAmount":102126.89000000,
      "spendAmount":764.86966050,
      "availableAmount":2364.64868643,
      "unExpensedSettings":null,
      "threshold":"UNDER",
      "consumedPercent":76
    },
    "currencyCode":"EUR",
    "annualBudget":10000.00000000,
    "budgetCategory":null,
    "owner":{
      "externalUserSyncGuid":"8002250890004822936",
      "employeeUuid":"210fe25f-e326-495c-847a-de333173f616",
      "syncGuid":"f779261d-77ce-4123-b739-d842ef6f104d",
      "name":"Jean Normandy"
     },
    "budgetApprovers":[],
    "budgetViewers":[
      {
        "externalUserSyncGuid":"5005380230004873464",
        "employeeUuid":"eb6082b0-3a9a-4e79-a350-e6e067f34969",
        "syncGuid":"7ce7dfe0-6168-4b93-bb35-386bf023acc6",
        "name":"Dan Lee"
      }
    ],
    "budgetItemDetails":[
      {
        "currencyCode":"USD",
        "amount":2500.00000000,
        "syncGuid":"4c165d40-804f-4aaa-b900-a46538537f6a",
        "budgetItemDetailStatusType":"OPEN",
        "budgetAmounts":{
          "pendingAmount":6870.48165307,
          "unExpensedAmount":102126.89000000,
          "spendAmount":764.86966050,
          "availableAmount":-5135.35131357,
          "unExpensedSettings":null,
          "consumedPercent":305,
          "threshold":"OVER"
        },
        "fiscalPeriod":{
          "name":"2017 - Q1",
          "fiscalPeriodStatus":"OPEN",
          "syncGuid":"b9659f8a-4e74-4531-9e23-1222ab1507f2",
          "periodType":"QUARTERLY",
          "startDate":"2017-01-01",
          "endDate":"2017-03-31",
          "spendDate":null,
          "fiscalYearSyncGuid":"bcb41c95-2d53-4a1a-830f-7c6b01fa79da",
          "currentPeriod":false
        },
        "budgetItemBalances":[
          {
            "featureTypeCode":"PURCHASE_REQUEST",
            "featureTypeSubCode":"NONE",
            "workflowState":"SUBMITTED",
            "amount":6870.48165307,
            "syncGuid":"11cb732e-cbc4-41cb-82be-162d632d5499"
          },
          {
            "featureTypeCode":"EXPENSE",
            "featureTypeSubCode":"NONE",
            "workflowState":"PAID",
            "amount":764.86966050,
            "syncGuid":"0f09cc65-b879-4969-a8a1-9dd52c96486d"
          },
          {
            "featureTypeCode":"EXPENSE",
            "featureTypeSubCode":"ERECEIPTS",
            "workflowState":"UNSUBMITTED",
            "amount":102126.89000000,
            "syncGuid":"27c49c8a-c24d-42eb-b089-84268350ae03"
          }
        ]
      },
      {
        "currencyCode":"EUR",
        "amount":2500.00000000,
        "syncGuid":"0a2dc181-389e-4c85-bb57-e4f1a11ace4e",
        "budgetItemDetailStatusType":"OPEN",
        "budgetAmounts":{
          "pendingAmount":0,
          "unExpensedAmount":0,
          "spendAmount":0,
          "availableAmount":2500.00000000,
          "unExpensedSettings":null,
          "consumedPercent":0,
          "threshold":"UNDER"
        },
        "fiscalPeriod":{
          "name":"2017 - Q2",
          "fiscalPeriodStatus":"OPEN",
          "syncGuid":"590d4e22-40be-43cc-ac1b-01b0d0263e19",
          "periodType":"QUARTERLY",
          "startDate":"2017-04-01",
          "endDate":"2017-06-30",
          "spendDate":null,
          "fiscalYearSyncGuid":"bcb41c95-2d53-4a1a-830f-7c6b01fa79da",
          "currentPeriod":true
        },
        "budgetItemBalances":[]
      },
      {
        "Additional budget item details removed for brevity": "Additional budget item details removed for brevity"
      }
    ],
    "fiscalYear":{
      "name":"2017",
      "startDate":"2017-01-01",
      "endDate":"2017-12-31",
      "status":"OPEN",
      "syncGuid":"a4f9d57f-14ac-4f03-b5aa-4256e5cff790",
      "lastModified":"2017-03-26 20:53:19",
      "currentYear":false
    }
  }
```

## <a name="post"></a>Create/Update a Budget Item Header

    POST  /budget/v4/budgetItemHeader

```shell
curl -v -X POST https://us.api.concursolutions.com/budget/v4/budgetItemHeader  \
-H "Authorization: Bearer {YOUR ACCESS TOKEN}" \
-H "Content-Type: application/json" \
-d @{PATH TO YOUR BUDGET ITEM HEADER JSON}
```

HTTPie:

```shell
http POST https://us.api.concursolutions.com/budget/v4/budgetItemHeader \
"Authorization:Bearer {YOUR ACCESS TOKEN}" \
"Content-Type: application/json" \
< {PATH TO YOUR BUDGET ITEM HEADER JSON}
```

### Parameters

Name | Type | Format | Description
-----|------|--------|------------
`budgetItemheader`	|	-	|	`body`	|	**Required** A JSON representation of a Budget Item

### Response

Name | Type | Format | Description
-----|------|--------|------------
`success`	|	`boolean`	|	-	|
`budgetItemHeaderSyncGuid`  |   `guid`    | -   |   The key of the created/updated budget item header

### JSON Example Update POST Body

```json
  {
    "name":"Marketing-US-Jean Normandy",
    "isTest":false,
    "budgetItemStatusType":"OPEN",
    "description":"Marketing-US",
    "syncGuid":"72eee673-3d81-49c2-966a-b63c7a9302e6",
    "costObjects":[
      {"code":"6",
      "value":"2",
      "listKey":"1334",
      "operator":"EQUAL"}
    ],
    "periodType":"QUARTERLY",
    "currencyCode":"EUR",
    "budgetCategory":{
      "syncGuid":"27451c2d-9121-44bd-b4b0-f2119d2071c7"
    },
    "owner":{
      "externalUserSyncGuid":"8002250890004822936",
      "employeeUuid":"210fe25f-e326-495c-847a-de333173f616"
     },
    "budgetApprovers":[],
    "budgetViewers":[
      {
        "externalUserSyncGuid":"5005380230004873464",
        "employeeUuid":"eb6082b0-3a9a-4e79-a350-e6e067f34969"
      }
    ],
    "budgetItemDetails":[
      {
        "currencyCode":"USD",
        "amount":2500.00000000,
        "syncGuid":"4c165d40-804f-4aaa-b900-a46538537f6a",
        "budgetItemDetailStatusType":"OPEN",
        "fiscalPeriod":{
          "syncGuid":"b9659f8a-4e74-4531-9e23-1222ab1507f2"
        }
      },
      {
        "currencyCode":"EUR",
        "amount":2500.00000000,
        "syncGuid":"0a2dc181-389e-4c85-bb57-e4f1a11ace4e",
        "budgetItemDetailStatusType":"OPEN",
        "fiscalPeriod":{
          "syncGuid":"590d4e22-40be-43cc-ac1b-01b0d0263e19"
        }
      },
      {
        "currencyCode":"EUR",
        "amount":2500.00000000,
        "syncGuid":"35d7dc8a-5ec8-4d5f-ba7c-d9304f7afee3",
        "budgetItemDetailStatusType":"OPEN",
        "fiscalPeriod":{
          "syncGuid":"09cd5be1-a21d-47f2-b6b5-8d9019709327"
        }
      },
      {
        "currencyCode":"EUR",
        "amount":2500.00000000,
        "syncGuid":"4ec30f7c-e7fa-4832-9134-85bed9a85b9c",
        "budgetItemDetailStatusType":"OPEN",
        "fiscalPeriod":{
          "syncGuid":"c3beec03-a096-4a33-b7af-b49127742702"
        }
      }
    ],
    "fiscalYear":{
      "syncGuid":"a4f9d57f-14ac-4f03-b5aa-4256e5cff790"
    }
  }
```


## <a name="delete"></a>Delete a Budget Item Header

    DELETE  /budget/v4/budgetItemHeader/{id}
    
```shell
curl -v -X DELETE https://us.api.concursolutions.com/budget/v4/budgetItemHeader/{id}  \
-H "Authorization: Bearer {YOUR ACCESS TOKEN}" \
-H "Content-Type: application/json" \
```

```shell
http DELETE https://us.api.concursolutions.com/budget/v4/budgetItemHeader/{id} \
"Authorization:Bearer {YOUR ACCESS TOKEN}" \
"Content-Type: application/json" \
```



### Parameters

Name | Type | Format | Description
-----|------|--------|------------
id	|	`string`	|	`path`	|	The budget item header's key field (sync guid).

### Response

Name | Type | Format | Description
-----|------|--------|------------
`success`	|	`boolean`	|	-	|
`budgetItemHeaderSyncGuid`  |   `guid`    | -   |   The key of the created/updated budget item header


## <a name="schema"></a>Schema


### <a name="budgetItemHeaderList"></a>PagedBudgetItemHeaderList

Name | Type | Format | Description
-----|------|--------|------------
`totalRows`	|	`integer`	|	-	|	The total number of rows available
`offset`	|	`integer`	|	-	|	The starting row for this page of results (zero-based)
`limit`	|	`integer`	|	-	|	The number of results returned per page.  (maximum 50)
`budgetItemHeaders`	|	`Array[BudgetItemHeader]`	|	-	|	List of budget items 
`href`	|	`string`	|	-	|	The href for this request
`previous`	|	`integer`	|	-	|	The href for the previous page of results (null if this is the first page of results)
`next`	|	`integer`	|	-	|	The href for the next page of results (null if no results remaining)


### <a name="budgetItemHeader"></a>BudgetItemHeader

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
`currencyCode`	|	`string`	|	-	|	The 3-letter ISO 4217 currency code for the expense report currency. Examples: USD - US dollars; BRL - Brazilian real; CAD - Canadian dollar; CHF - Swiss franc; EUR - Euro; GBO - Pound sterling; HKD - Hong Kong dollar; INR - Indian rupee; MXN - Mexican peso; NOK - Norwegian krone; SEK - Swedish krona.
`fiscalPeriod`	|	`FiscalPeriod`	|	-	|	**Requred** The fiscal period for this budget amount.  Only the sync_guid is technically required for creating/updating a budget.
`syncGuid`	|	`string`	|	-	|	The key for this object.


### BudgetAmounts

Name | Type | Format | Description
-----|------|--------|------------
`availableAmount`	|	`decimal`	|	-	|	The available amount accumulated against this budget. Uses budget entity setting to determine which amounts are included to calculate available amount. **READ ONLY**
`consumedPercent`	|	`decimal`	|	-	|	The percentage of the budget that is considered used. Uses budget entity setting to determine which amounts to include. **READ ONLY**
`pendingAmount`	|	`decimal`	|	-	|	The pending amount accumulated against this budget. **READ ONLY**
`spendAmount`	|	`decimal`	|	-	|	The spent amount accumulated against this budget. **READ ONLY**
`threshold`	|	`string`	|	-	|	The indicator of whether this budget is under the alert limit (UNDER), equal to or over the alert limit, but under the control limit (ALERT), or equal to or over the control limit (OVER).  **READ ONLY**
`unexpensedAmount`  |   `decimal`   |    -  |   The amount of unexpensed items like travel bookings, quick expenses, or e-receipts **READ ONLY**
`unexpensedSettings`    |   `string`    |   -   |   An indicator for whether this company has an special setting for unexpensed items.  Example values: SHOW_UNSUBMITTED_EXPENSES_AS_PENDING, SHOW_UNSUBMITTED_EXPENSES_BALANCE, and DO_NOT_SHOW_UNSUBMITTED_EXPENSES **READ ONLY**

### BudgetPerson

Name | Type | Format | Description
-----|------|--------|------------
`externalUserSyncGuid`	|	`string`	|	-	|	**Required** The unique identifier for this user. This must match the CUUID from Concur's profile service.
`name`	|	`string`	|	-	|	The user's name.  Provided for convenience.  **READ ONLY**
`syncGuid`	|	`string`	|	-	|	The budget service's key for this object.


### BudgetCategory

Name | Type | Format | Description
-----|------|--------|------------
`description`	|	`string`	|	-	|	Not used.
`name`	|	`string`	|	-	|	 The admin-facing name for this category.
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


