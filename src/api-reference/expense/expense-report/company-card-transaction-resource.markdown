---
title: Company Card Transactions
layout: reference
---

The corporate or credit card charges that are available for use in expense reports for the OAuth consumer.

Retrieves a list of unassigned company card charges for the user specified in the OAuth access token.

* [Request](#request)
* [Response](#response)
  * [Schema](#schema)
* [Examples](#examples)

### Version
1.1

### URI
`https://www.concursolutions.com/api/expense/expensereport/v1.1/CardCharges`

#### Operations
[GET](#get)

## <a name="request"></a>Request

### Request Parameters
None.

### Content Types
application/xml

### Authorization Header
Authorization header with OAuth token for valid SAP Concur user. Required.

## <a name="response"></a>Response

### Content Types
application/xml

### <a name="schema"></a>Schema

This request will return a **CardCharges** parent element with a **CardCharge** child element for each transaction.

#### CardCharge Child Elements

|  Element |  Description |
| -------- | ------------ |
|  CardNumber |  The number of the card, with all digits obscured OTHER than last 4 digits.  |
|  ExpKey |  The code for the expense type of the transaction |
|  Merchant |  The merchant name for the transaction. |
|  ExpName |  The name of the expense type of the transaction. |
|  TransactionAmount |  The amount of the card transaction. |
|  TransactionCrnCode |  The currency code of the transaction amount. |
|  TransactionDate |  The date of the transaction. |

## <a name="examples"></a>Examples

#### XML Example Request

```http
GET https://www.concursolutions.com/api/expense/expensereport/v1.1/CardCharges/ HTTP/1.1
Authorization: OAuth {access token}
...
```

####  XML Example of Successful Response

```http
HTTP/1.1 200 OK
Content-Type: application/xml

<CardCharges
    xmlns="https://www.concursolutions.com/api/expense/expensereport/2011/03">
    <CardCharge>
        <CardNumber>XXXXXXXXX1111</CardNumber>
        <ExpKey>CARRT</ExpKey>
        <ExpName>Car Rental</ExpName>
        <Merchant>Hertz</Merchant>
        <TransactionAmount>283.88000000</TransactionAmount>
        <TransactionCrnCode>USD</TransactionCrnCode>
        <TransactionDate>2010-08-19T00:00:00</TransactionDate>
    </CardCharge>
    <CardCharge>
        <CardNumber>XXXXXXXXX1111</CardNumber>
        <ExpKey>UNDEF</ExpKey>
        <ExpName>Undefined</ExpName>
        <Merchant>King Tires</Merchant>
        <TransactionAmount>274.13000000</TransactionAmount>
        <TransactionCrnCode>USD</TransactionCrnCode>
        <TransactionDate>2010-08-19T00:00:00</TransactionDate>
    </CardCharge>
</CardCharges>
```
