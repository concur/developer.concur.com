---
title: Budget Adjustments
layout: reference
---


## Overview
The new Budget Service API is in **Beta**. If you are interested in using the Budget Service API, then please contact your account manager for further details.

This resource is used to add budget adjustments. Each budget item detail may have one or more budget adjustments and adjustments can be made to manually add or subtract the budget, spent or pending balances.

# Budget Adjustments

- [Create a list of budget adjustments](#post)
- [Schema](#schema)

## Version

4.0

## <a name=“post”></a> Create a list of Budget Adjustments

    POST /budget/v4/adjustments

#### Parameters

Name | Type | Format | Description
---|---|---|---
`useMonthlyRollingUpdate`|`boolean`|`query`|If true, all adjustments for a given month, adjustment type, amount type & description will be rolled up to one adjustment.

#### Payload

Name | Type | Format | Description
---|---|---|---
`adjustments`|`Array[budgetAdjustment]`|`body`|**Required** A JSON representation of a array of Adjustments

## <a name=“schema”></a>Schema

### <a name=“budgetAdjustment”></a>Budget Adjustment

Name | Type | Format | Description
---|---|---|---
`budgetItemName`|`string`|-|**Required** The name of the budget of the adjustment.
`fiscalYearName`|`string`|-|**Required** The name of the budget’s fiscal year
`fiscalPeriodName`|`string`|-|**Required** The name of the budget’s fiscal period
`ownerEmailId`|`string`|-|**Required** The user who is responsible for the budget, as configured.
`amount`| `decimal`|-|**Required** The budget currency amount to be adjusted. The amount may be a positive or negative value but it cannot be zero.
`adjustmentType`|`string`|-|**Required** The adjustment’s reference type. Valid values are BUDGET_BALANCE, FUND_TRANSFER, EXPENSE, PAYMENT_REQUEST, PURCHASE_REQUEST, REQUEST
`amountType`|`string`|-|**Required** The type of the budget’s balance to adjust. Valid values are BUDGET_AMOUNT, SPENT_AMOUNT, PENDING_AMOUNT
`description`|`string`|-|A friendly user-friendly description of the adjustment
`transactionDate`|`date`|YYYY-MM-DD |**Required if amount type is either SPENT_AMOUNT or PENDING_AMOUNT** Must be within the fiscal period.

### HTTP Response Codes
HTTP Error Code | Description
---|---
`200`|`OK - Successful call, response is in body.`
`400`|`Bad Request - The request was determined to be invalid by the server. Possibly a validation failed on the data that was sent in the payload. For example, a Budget Adjustment of amount 0 can not be made. The response will have a list of validation errors in the body. See below for an example 400 response.`
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
