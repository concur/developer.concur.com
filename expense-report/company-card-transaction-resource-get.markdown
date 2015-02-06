---
title: Company Card Transaction Resource
layout: operation
---




This resource supports the following GET actions:

##  Get List of Available Transactions Request

| ----- |
|  Description |  Supported Accept Types |
|  Retrieves a list of unassigned company card charges for the user specified in the [OAuth][1] access token. |   |
|  Query Parameters - Required |  Query Parameters - Optional |
|  None |  None |
|  Request Headers - Required |  Request Headers - Optional |
|  Authorization header with OAuth token for valid Concur user. |  None |

####  XML Example Request

    GET https://www.concursolutions.com/api/expense/expensereport/v1.1/CardCharges/ HTTP/1.1
    Authorization: OAuth {access token}
    ...

##  Get List of Available Transactions Response

| ----- |
|  HTTP Responses |  Supported Content Types |
|  [HTTP Status Codes][2] |   |
|  Content Body |   |
|  This request will return a **CardCharges** parent element with a **CardCharge** child element for each transaction. The **CardCharge** elements will have the following child elements:  

|  Element |  Description |
|  CardNumber |  The number of the card, with all but the last four digits obscured. |   |
|  ExpKey |  The code for the expense type of the transaction |
|  Merchant |  The merchant name for the transaction. |
|  ExpName |  The name of the expense type of the transaction. |
|  TransactionAmount |  The amount of the card transaction. |
|  TransactionCrnCode |  The currency code of the transaction amount. |
|  TransactionDate |  The date of the transaction. |

 |

####  XML Example of Successful Response

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

  


[1]: https://developer.concur.com/oauth-20
[2]: https://developer.concur.com/reference/http-codes
