---
title: Company Card Transactions
layout: reference
---

# Company Card Transaction

## Description

The corporate or credit card charges that are available for use in expense reports for the OAuth consumer.

## Version
1.1

## URI
`https://www.concursolutions.com/api/expense/expensereport/v1.1/CardCharges`

## Operations
[GET](#get)


## <a name="get"></a>Get company card transactions



### Description
Retrieves a list of unassigned company card charges for the user specified in the OAuth access token.

### Request

### Request parameters
None.

### Content types
application/xml

### Authorization header
Authorization header with OAuth token for valid Concur user. Required.

### Response

### Content types
application/xml

### Content body

This request will return a **CardCharges** parent element with a **CardCharge** child element for each transaction. 

#### CardCharge child elements

|  Element |  Description |
| -------- | ------------ |
|  CardNumber |  The number of the card, with all but the last four digits obscured.  |
|  ExpKey |  The code for the expense type of the transaction |
|  Merchant |  The merchant name for the transaction. |
|  ExpName |  The name of the expense type of the transaction. |
|  TransactionAmount |  The amount of the card transaction. |
|  TransactionCrnCode |  The currency code of the transaction amount. |
|  TransactionDate |  The date of the transaction. |

### Examples

### XML example request

```
xml
    GET https://www.concursolutions.com/api/expense/expensereport/v1.1/CardCharges/ HTTP/1.1
    Authorization: OAuth {access token}
    ...
```

###  XML example of successful response

```
xml
    200 OK
    Content-Type: application/xml

    <CardCharges
        xmlns="https://www.concursolutions.com/api/expense/expensereport/2011/03">
        <CardCharge>
            <CardNumber>XXXXXXXX11111</CardNumber>
            <ExpKey>CARRT</ExpKey>
            <ExpName>Car Rental</ExpName>
            <Merchant>Hertz</Merchant>
            <TransactionAmount>283.88000000</TransactionAmount>
            <TransactionCrnCode>USD</TransactionCrnCode>
            <TransactionDate>2010-08-19T00:00:00</TransactionDate>
        </CardCharge>
        <CardCharge>
            <CardNumber>XXXXXXXX11111</CardNumber>
            <ExpKey>UNDEF</ExpKey>
            <ExpName>Undefined</ExpName>
            <Merchant>King Tires</Merchant>
            <TransactionAmount>274.13000000</TransactionAmount>
            <TransactionCrnCode>USD</TransactionCrnCode>
            <TransactionDate>2010-08-19T00:00:00</TransactionDate>
        </CardCharge>
    </CardCharges>
```
  






