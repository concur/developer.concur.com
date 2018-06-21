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
-----|------|--------|------------
`useMonthlyRollingUpdate` | `boolean` | `query`   | If true, all adjustments for a given month, adjustment type, amount type & description will be rolled up to one adjustment. |

#### Payload

Name | Type | Format | Description
-----|------|--------|------------
 `adjustments` | `Array[budgetAdjustment]` | `body` | **Required** A JSON representation of a array of Adjustments |

## <a name=“schema”></a>Schema

### <a name=“budgetAdjustment”></a>Budget Adjustment

Name | Type | Format | Description  |
--- | --- | --- |--- |
`budgetItemName`   | `string`  | - | **Required** The name of the budget of the adjustment. |
`fiscalYearName`   | `string`  | - | **Required** The name of the budget’s fiscal year |
`fiscalPeriodName` | `string`  | - | **Required** The name of the budget’s fiscal period |
`ownerEmailId`     | `string`  | - | **Required** The user who is responsible for the budget, as configured. |
`amount`           | `decimal` | - | **Required** The budget currency amount to be adjusted. The amount may be a positive or negative value but it cannot be zero. |
`adjustmentType`   | `string`  | - | **Required** The adjustment’s reference type. Valid values are BUDGET_BALANCE, FUND_TRANSFER, EXPENSE, PAYMENT_REQUEST, PURCHASE_REQUEST, REQUEST |
`amountType`       | `string`  | - | **Required** The type of the budget’s balance to adjust. Valid values are BUDGET_AMOUNT, SPENT_AMOUNT, PENDING_AMOUNT |
`description`      | `string`  | - | A friendly user-friendly description of the adjustment |
`transactionDate`  | `date`    | YYYY-MM-DD | **Required if amount type is either SPENT_AMOUNT or PENDING_AMOUNT** Must be within the fiscal period. |
