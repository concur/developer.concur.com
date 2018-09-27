---
title: Budget Adjustments
layout: reference
---

# Menu
* [Getting Started](./getting-started.html)
* [Fiscal Year](/api-reference/budget/fiscal-year.html)
* [Budget Category](/api-reference/budget/budget-category.html)
* [Budget Item](/api-reference/budget/budget-header.html)
* [Budget Tracking Field](/api-reference/budget/budget-tracking.html)
* [Budget Adjustments](/api-reference/budget/budget-adjustments.html)

# Budget Adjustments

**Preview** _This is a prerelease version of the service and is subject to change before final release._

This resource is used to add budget adjustments. Each budget item detail may have one or more budget adjustments and adjustments can be made to manually add or subtract the budget, spent or pending balances.

* [POST a list of budget adjustments](#post)
* [Schema](#schema)
  * [Budget Adjustment](#budgetAdjustment)
  * [Error Response](#errorResponse)
  * [Error Message](#errorMessage)

## Version

4.0

## <a name="post"></a>POST Budget Adjustments

Create one or more budget adjustments.  
* If the rolling adjustment feature is used, all adjustments for a given month, adjustment type, amount type, budget, and description will be combined into one adjustment.  See [Parameters](#parameters) below.
* The combination of budget item name, fiscal year name, fiscal period name, and owner email determine which budget the adjustment affects.  See [Schema](#schema) below
* The amount type determines how the adjustment affects the budget.  The budget amount adjustment reduces or increases the top-line budget amount while spent and pending amounts affect the budget balances.
* Adjustments may not be deleted or updated via the API.

### Scopes

Name | Description
---|---
`budgetitem.write`|Create/update/delete access to budget data

### Request

#### Headers

* [RFC 7235 Authorization](https://tools.ietf.org/html/rfc7235#section-4.2)
* [RFC 7231 Content-Type](https://tools.ietf.org/html/rfc7231#section-3.1.1.5)

#### <a name="parameters"></a>Parameters

Name | Type | Format | Description
---|---|---|---
`useMonthlyRollingUpdate`|`boolean`|`query`|**Required** If true, all adjustments for a given month, adjustment type, amount type & description will be rolled up to one adjustment. This is useful for an automated process that makes daily or weekly updates and doesn't want to clutter end-user dashboards.

##### URI Template

```http
POST /budget/v4/adjustments
```

#### Payload

[Array of Budget Adjustments](#budgetAdjustment)

### Response

#### Status Codes

* [200 OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) Successful call, response is in body.
* [400 Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1) The request was determined to be invalid by the server. Possibly a validation failed on the data that was sent in the payload. The response will have a list of validation errors in the body. See below for an example 400 response.
* [403 Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3) The user does not have the necessary permissions to perform the request.
* [404 Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4) The resource could not be found or does not exist
* [500 Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1) Error message in response body
* [504 Gateway Timeout](https://tools.ietf.org/html/rfc7231#section-6.6.5) Error message in response body

#### Headers

* `concur-correlationid` (Optional) is a Concur specific custom header used for technical support in the form of a [RFC 4122 A Universally Unique IDentifier (UUID) URN Namespace](https://tools.ietf.org/html/rfc4122)

#### Payload

Either "Success" or an [Error Response](#errorResponse)

### Example

#### Request

```shell
POST https://us.api.concursolutions.com/budget/v4/adjustments?useMonthlyRollingUpdate=false
Authorization: Bearer {YOUR ACCESS TOKEN}
Content-Type: application/json
Accept: application/json
```

```json
[
	{
		"budgetItemName":"API Budget-Oregon",
		"fiscalYearName": "2018",
		"budgetOwnerEmail": "m.jones@example.com",
		"fiscalPeriodName": "2018 - Q3",
		"amount": 100,
		"adjustmentType": "FUND_TRANSFER",
		"amountType": "BUDGET_AMOUNT",
		"description": "Initial July Adjustment",
		"transactionDate": "2018-07-11"
	},
	{
		"budgetItemName":"API Budget-Travel",
		"fiscalYearName": "2018",
		"budgetOwnerEmail": "m.jones@example.com",
		"fiscalPeriodName": "2018 - Q3",
		"amount": 100,
		"adjustmentType": "EXPENSE",
		"amountType": "SPENT_AMOUNT",
		"transactionDate": "2018-07-10"
	}
]
```

#### Response

##### Success Response

```shell
HTTP/1.1 200 OK
Cache-Control: no-store
Connection: keep-alive
Content-Length: 9
Content-Type: application/json;charset=utf-8
Date: Fri, 21 Sep 2018 15:24:27 GMT
Expires: Thu, 20 Sep 2018 15:24:27 GMT
Pragma: no-cache
Vary: Origin
concur-correlationid: 86a0d9fe-9e98-43c3-89d8-a2917dd844cb
```

```json
"Success"
```

##### Failure Response

```shell
HTTP/1.1 400 Bad Request
Cache-Control: no-store
Connection: close
Content-Length: 242
Content-Type: application/json;charset=utf-8
Date: Fri, 21 Sep 2018 15:29:05 GMT
Expires: Thu, 20 Sep 2018 15:29:05 GMT
Pragma: no-cache
concur-correlationid: 561ce34c-6542-4bae-82a2-aa6ccd8c6b22
```

```json
{
    "message": {  
        "status" : false,
        "errorMessageList" : [{
            "errorType" : "ERROR", "errorCode" : "BUDGET.BUDGET_PERIOD_REQUIRED","errorMessage" : "Record 1) Record 1) Budget period is missing"
        }]
    }
}
```

## <a name="schema"></a>Schema

### <a name="budgetAdjustment"></a>Budget Adjustment

Name | Type | Format | Description
---|---|---|---
`budgetItemName`|`string`|-|**Required** The name of the budget of the adjustment.
`fiscalYearName`|`string`|-|**Required** The name of the budget’s fiscal year
`fiscalPeriodName`|`string`|-|**Required** The name of the budget’s fiscal period
`ownerEmailId`|`string`|-|**Required** The user who is responsible for the budget, as configured.
`amount`| `decimal`|-|**Required** The budget currency amount to be adjusted. The amount may be a positive or negative value but it cannot be zero.
`adjustmentType`|`string`|-|**Required** The adjustment’s reference type. Valid values are BUDGET_BALANCE, FUND_TRANSFER, EXPENSE, PAYMENT_REQUEST, PURCHASE_REQUEST, REQUEST
`amountType`|`string`|-|**Required** The type of the budget’s balance to adjust. Affects which values in the budget are updated. Valid values are BUDGET_AMOUNT, SPENT_AMOUNT, PENDING_AMOUNT
`description`|`string`|-|A friendly user-friendly description of the adjustment
`transactionDate`|`date`|YYYY-MM-DD |**Required if amount type is either SPENT_AMOUNT or PENDING_AMOUNT** Must be within the fiscal period.

### <a name="errorResponse"></a>Error Response

Name | Type | Format | Description
---|---|---|---
`status`|`boolean`|-|False if there was an error
`errorMessageList`|`Array[ErrorMessages]`|-|List of all errors detected

### <a name="errorMessage"></a>Error Message

Name | Type | Format | Description
---|---|---|---
`errorType`|`String`|-|WARNING or ERROR
`errorCode`|`String`|-|Text code for this error
`errorMessage`|`String`|-|Plain language error message
