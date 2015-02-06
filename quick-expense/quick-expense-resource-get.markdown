---
title: Quick Expense Resource
layout: operation
---




This resource supports the following GET actions:

**NOTE**: Documentation for the v3.0 resource is [here][1].

##  Get List of Quick Expenses Request

| ----- |
|  Description |  Supported Accept Types |
|  Retrieves the list of quick expenses for the supplied user or for the entire company. In order to view the company-wide expense list, the OAuth Consumer must have the Web Services Admin (Professional) or Can Administer (Standard) user role. |

* application/xml
* application/json
 |
|  Query Parameters - Required |  Query Parameters - Optional |
|  None |

* **loginID={_loginID_}**  
The Concur login for the user that owns the quick expenses.

Example:

https://www.concursolutions.com/api/expense/expensereport/v1.0/quickexpense/?loginID={_loginID_}

 |
|  Request Headers - Required |  Request Headers - Optional |
|  **Authorization** header with OAuth token for valid Concur user.

To view company-wide data, the OAuth consumer must have one of the following user roles in Concur: Company Administrator or Web Services Administrator for Professional, or Can Administer for Standard.

 |  **Accept** header specifying which format the response should be in. Possible values are:
* application/xml
* application/json
 |

####  XML Example Request with LoginID

    GET api/expense/expensereport/v1.0/quickexpense/?loginID=cm%40example.com HTTPS 1.1
    Host: www.concursolutions.com
    Authorization: OAuth {access token}
    ...

####  JSON Example Request

    GET https:
    Authorization: OAuth {access token}
    Accept: application/json

##  Get List of Quick Expenses Response

| ----- |
|  HTTP Responses |  Supported Content Types |
|  [HTTP Status Codes][2] |

* application/xml
* application/json
 |
|  Content Body |   |
|  This request will return a **QuickExpensesList** parent element with a **QuickExpense** child element for each quick expense. The **QuickExpense** elements will have the following child elements:  

|  Element |  Description |
|  OwnerLoginID |  The Concur login ID for the expense owner. Useful for system to system integration when there are expenses for multiple users. |   |
|  OwnerName |  The first and last name for the expense owner. Useful for system to system integration when there are expenses for multiple users. |
|  QuickExpenseKey |  The unique identifier for the quick expense. |
|  ExpenseTypeKey |  The unique identifier for the expense type associated with the quick expense. |
|  ExpenseTypeName |  The name of the expense type associated with the quick expense. |
|  TransactionDate |  The date the expense was incurred. Format: YYYY-MM-DD |
|  TransactionAmount |  The total amount of the expense in the original currency, with up to three decimal places. Example: 123.654 |
|  CurrencyCode |  The [3-letter ISO 4217 currency code ][3]for the expense transaction amount. Example: USD. |
|  LocationName |  The name of the location where the expense was incurred. |
|  VendorDescription |  This element contains the descriptive text for the vendor for the expense. |
|  Comment |  The comment for this expense. |

 |

####  XML Example of Successful Response

    200 OK
    Content-Type: application/xml
    <QuickExpensesList>
        <QuickExpense>
            <OwnerLoginID>cm@example.com</OwnerLoginID>
            <OwnerName>Chris Miller</OwnerName>
            <QuickExpenseKey>1234567890</QuickExpenseKey>
            <ExpenseTypeKey>CARRT</ExpenseTypeKey>
            <ExpenseTypeName>Car Rental</ExpenseTypeName>
            <TransactionDate>2012-07-21</TransactionDate>
            <TransactionAmount>321.45</TransactionAmount>
            <CurrencyCode>USD</CurrencyCode>
            <LocationName>Seattle, Washington</LocationName>
            <VendorDescription>Avis</VendorDescription>
            <Comment>Trip to Seattle</Comment>
        </QuickExpense>
        <QuickExpense>
            <OwnerLoginID>cm@example.com</OwnerLoginID>
            <OwnerName>Chris Miller</OwnerName>
            <QuickExpenseKey>0987654321</QuickExpenseKey>
            <ExpenseTypeKey>MEAL910</ExpenseTypeKey>
            <ExpenseTypeName>Breakfast</ExpenseTypeName>
            <TransactionDate>2012-07-21</TransactionDate>
            <TransactionAmount>14.23</TransactionAmount>
            <CurrencyCode>USD</CurrencyCode>
            <LocationName>Seattle, Washington</LocationName>
            <VendorDescription>Starbucks</VendorDescription>
            <Comment>Trip to Seattle</Comment>
        </QuickExpense>
    </QuickExpensesList>

####  JSON Example of Successful Response

    [
        {
            "OwnerLoginID":"cm@example.com",
            "OwnerName":"Chris Miller",
            "QuickExpenseKey":"nuIsue2$pASZDo12345678oUuUh9Lb0",
            "ExpenseTypeKey":"CARRT",
            "ExpenseTypeName":"Car Rental",
            "TransactionDate":"2012-07-21",
            "TransactionAmount":321.45000000,
            "CurrencyCode":"USD",
            "LocationName":"Seattle, Washington",
            "VendorDescription":"Avis",
            "Comment":"Trip to Seattle",
        }
    ]

  


[1]: https://www.concursolutions.com/api/docs/index.html#!/QuickExpenses
[2]: https://developer.concur.com/reference/http-codes
[3]: http://en.wikipedia.org/wiki/ISO_4217
