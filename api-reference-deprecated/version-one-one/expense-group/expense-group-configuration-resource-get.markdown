---
title: Get expense group configuration details
layout: reference
---

## Description
Retrieves the list of Expense Polices, Expense Types and Payment Types for the Expense Group the user specified in the OAuth access token is assigned to. Each Expense Policy contains a list of valid Expense Types. The Payment Types are associated with the user's Expense Group and apply to all the returned policies. Only the payment types that are valid for the [Post Expense Entry][2] endpoint are returned.

**NOTE**: The Concur Expense product is highly configurable, and each client may have a unique set of payment types. If a payment type is not included in the response, it is not available for use with this client.

## Request

### Request parameters
None.

### Headers

#### Authorization header
Authorization header with OAuth token for valid Concur user.

#### Accept header
application/xml

## Response

### Content body
This request will return an **ExpenseGroupConfiguration** parent element. The **ExpenseGroupConfiguration** has a **PaymentTypes** child element and a **PolicyAndExpenseTypesList** child element. 

The **PaymentTypes** child element has a **PaymentType** child element for each configured payment type. The **PolicyAndExpenseTypesList** child element has a **PolicyandExpenseTypes** child element for each policy configured for this expense group. 

#### PaymentType elements

|  Element |  Description |
| -------- | ------------ |
|  PaymentTypeID |  The encrypted key for the payment type. This is the unique identifier for the payment type. |
|  PaymentTypeName |  The name of the payment type. |

#### PolicyandExpenseTypes elements

|  Element |  Description |
| -------- | ------------ |
|  PolicyKey |  The ID value of the policy. |
|  PolicyName |  The name of the policy. |
|  ExpenseTypes |  The parent element for the list of expense types in the policy. It contains an **ExpenseType** child element for each expense type in the policy. |

#### ExpenseType elements

|  Element |  Description |
| -------- | ------------ |
|  ExpKey |  The expense type key. |
|  ExpName |  The label of the expense type. |
|  ParentExpKey |  The code of the expense type's parent. |
|  ParentExpName |  The label of the expense type's parent. |
|  SpendCategory |  The spend category assigned to the expense type for reporting purposes. |

## Examples

### XML example request

```xml
GET https://www.concursolutions.com/api/expense/expensereport/v1.1/ExpenseGroupConfiguration/ HTTP/1.1
Authorization: OAuth {access token}
...
```

### XML example of successful response

```xml
    200 OK
    Content-Type: application/xml
    <ExpenseGroupConfiguration xmlns="http://www.concursolutions.com/api/expense/expensereport/2011/03" xmlns:i="http://www.w3.org/2001/XMLSchema-instance">
        <PaymentTypes>
            <PaymentType>
                <PaymentTypeID>nr74tQrD8PorkF6yvS0Sm8ZeSGsw</PaymentTypeID>
                <PaymentTypeName>Cash</PaymentTypeName>
            </PaymentType>
            <PaymentType>
                <PaymentTypeID>nr7AuTtrvkXwLOzEejFruFO$sN7eo</PaymentTypeID>
                <PaymentTypeName>Company Paid</PaymentTypeName>
            </PaymentType>
        </PaymentTypes>
        <PolicyAndExpenseTypesList>
            <PolicyAndExpenseTypes>
                <PolicyKey>ndrF8hjzl9FhH1Lvs0EuK1gi7LISbetxc</PolicyKey>
                <PolicyName>CA Expense Policy</PolicyName>
                <ExpenseTypes>
                    <ExpenseType>
                        <ExpKey>BUSPR</ExpKey>
                        <ExpName>Promotional Items</ExpName>
                        <ParentExpKey>PROMO</ParentExpKey>
                        <ParentExpName>Business Promotions</ParentExpName>
                    </ExpenseType>
                    <ExpenseType>
                        <ExpKey>TRDSH</ExpKey>
                        <ExpName>Trade Shows</ExpName>
                        <ParentExpKey>PROMO</ParentExpKey>
                        <ParentExpName>Business Promotions</ParentExpName>
                    </ExpenseType>
                    <ExpenseType>
                        <ExpKey>LOCPH</ExpKey>
                        <ExpName>Local Phone</ExpName>
                        <ParentExpKey>COMMU</ParentExpKey>
                        <ParentExpName>Communications</ParentExpName>
                    </ExpenseType>
                </ExpenseTypes>
            </PolicyAndExpenseTypes>
        </PolicyAndExpenseTypesList>
    </ExpenseGroupConfiguration>
```

[2]: /api-reference/expense/expense-report/expense-entry-itemization-resource-post.html

