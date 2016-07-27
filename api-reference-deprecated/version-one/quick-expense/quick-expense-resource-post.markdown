---
title: Post a quick expense
layout: reference
---


## Description

Posts a quick expense to Concur for the OAuth consumer. Administrative users can provide a different Concur login as owner of the expense.

**NOTE**: Documentation for the v3.0 resource is [here][1].

## Request

### Request parameters

**loginID={_loginID_}**  
The Concur login for the user that will own the quick expense. Optional.

Example:

`https://www.concursolutions.com/api/expense/expensereport/v1.0/quickexpense/?loginID={loginID}`

### Headers

#### Authorization header

The authorization header must contain an OAuth token for a valid Concur user. The OAuth Consumer must have the Web Services Admin (Professional) or Can Administer (Standard) user role to use the loginID query string.

#### Accept header

* application/xml
* application/json

## Request

The request contains a QuickExpense parent element with the following child elements.

### QuickExpense child elements

|Element Name|Required/Optional|Data Type|Description
|------------|-----------------|---------|------------|
|  CurrencyCode |required |  |  The [3-letter ISO 4217 currency code][2] for the expense transaction amount. Example: USD. |
|  TransactionAmount |required  |  |  The total amount of the expense in the original currency, with up to three decimal places. Example: 123.654 |
|  TransactionDate |required |   |  The date the expense was incurred. Format: YYYY-MM-DD |
|  ExpenseTypeCode | optional|    | The code for the expense type in the company's expense management system. Currently supports Concur Expense. The Expense Type Code is returned in the **ExpKey** element of the [Get Expense Group Configuration][3] function response. |
|  SpendCategoryCode | optional|  | The spend category code for the quick expense. The available spend category codes are consistent across all Concur products. The values are used in Concur reporting. The spend category can be used to automatically select the correct Expense Type for the entry. This functionality happens when spend categories have only one expense type included in the category. This is common with the Air, Car, and Hotel spend categories. If there are multiple expense types included in the selected spend category, the expense type will be set to Undefined so the user can select the correct expense type in the Concur user interface. Format: One of the Code values in the [Spend Category Code List][4]. Developers can view the configured Spend Category/Expense Type mappings by using the [Get Expense Group Configuration][3] function. |
|  PaymentType | optional|  | This element specifies the method of payment for the expense. Format: CASHX, CPAID, PENDC. CASHX = Cash, CPAID = Company Paid, or PENDC = Pending Card Transaction. When not supplied, the value defaults to PENDC. |
|  LocationCity | optional|   | The city where the expense was incurred. This can be used to determine the Location ID when the quick expense is converted into an expense entry.<br> **NOTES**: If you provide both the **LocationCity** and **LocationCountry** values, Concur will try to match them with the company's list of locations. If they are matched successfully, the full location details including country will be saved with the expense. If a **LocationCity** is provided, the **LocationCountry** and **LocationSubdivision** must be provided. If a country does not have subdivisions, the **LocationSubdivision** field may be omitted.|
|  LocationSubdivision | optional|  |  The state, province, or other country subdivision where the expense was incurred. This can be used to determine the Location ID when the quick expense is converted into an expense entry. Format: [ISO 3166-2:2007][5] country subdivision. |
|  LocationCountry | optional|  |  The country where the expense was incurred. This can be used to determine the Location ID when the quick expense is converted into an expense entry. Format:[ 2-letter ISO 3166-1][6] country code.<br> **NOTE**: If you provide both the **LocationCity** and **LocationCountry** values, Concur will try to match them with the company's list of locations. If they are matched successfully, the full location details including country will be saved with the expense. |
|  VendorDescription | optional|  |  This element contains the descriptive text for the vendor for the quick expense. It often matches the Merchant Name found in a credit card transaction. So, it can be helpful when matching a quick expense to an imported credit card transaction. It is mapped to the Vendor Description field in an expense entry when the quick expense is converted into an expense entry. Max Length: 64 |
|  Comment | optional|  |  A comment that describes the expense. It becomes a Comment when converted into an expense entry. Max Length: 2000 |
|  ImageBase64 | optional|  |  Binary receipt image in Base 64 encoding |

## Response

The response returns a **QuickExpenseStatus** parent element with the following child elements.

### QuickExpenseStatus child elements

|Element Name|Required/Optional|Data Type|Description
|------------|-----------------|---------|------------|
|  Status | | |  The status of the request.Either SUCCESS or FAILURE  |
|  Message | | |  When the status is FAILURE, the details of the failure appear in this element. |
|  QuickExpenseID | | |  The unique identifier for the quick expense. |

## Examples

### Example 1: XML request and response

#### XML request with required fields

```xml
    POST api/expense/expensereport/v1.0/quickexpense/?loginID=cm%40example.com HTTPS 1.1
    Host: www.concursolutions.com
    Authorization: OAuth {access token}
    ...

    <QuickExpense xmlns="http://www.concursolutions.com/api/expense/expensereport/2010/09">
        <CurrencyCode>USD</CurrencyCode>
        <TransactionAmount>321.45</TransactionAmount>
        <TransactionDate>2012-07-21</TransactionDate>
    </QuickExpense>
```

####  XML request with optional fields

```xml
    POST api/expense/expensereport/v1.0/quickexpense/?loginID=cm%40example.com HTTPS 1.1
    Host: www.concursolutions.com
    Authorization: OAuth {access token}
    ...

    <QuickExpense xmlns="http://www.concursolutions.com/api/expense/expensereport/2010/09">
        <CurrencyCode>USD</CurrencyCode>
        <TransactionAmount>321.45</TransactionAmount>
        <TransactionDate>2012-07-21</TransactionDate>
        <SpendCategoryCode>AIRFR</SpendCategoryCode>
        <LocationCity>Seattle</LocationCity>
        <LocationSubdivision>US-WA</LocationSubdivision>
        <LocationCountry>US</LocationCountry>
        <VendorDescription>Delta Airlines</VendorDescription>
        <Comment>Trip to New York</Comment>
        <PaymentType>PENDC</PaymentType>
        <ExpenseTypeCode>TRVAF</ExpenseTypeCode>
        <ImageBase64>Base 64 encoded image data</ImageBase64>
    </QuickExpense>
```

#### XML successful response

```xml
    200 OK
    Content-Type: application/xml
    <QuickExpenseStatus xmlns="http://www.concursolutions.com/api/expense/expensereport/2010/09" xmlns:i="http://www.w3.org/2001/XMLSchema-instance">
        <Message />
        <QuickExpenseID>nuIsue2$pASZPqXdQ5ge$s4XZHQqJFTysn3</QuickExpenseID>
        <Status>SUCCESS</Status>
    </QuickExpenseStatus>
```

####  XML response with error

```xml
    200 OK
    Content-Type: application/xml
    <QuickExpenseStatus xmlns="http://www.concursolutions.com/api/expense/expensereport/2010/09" xmlns:i="http://www.w3.org/2001/XMLSchema-instance">
        <Message>Missing or invalid location subdivision code.</Message>
        <QuickExpenseID>nuIsue2$pASZPqXdQ5ge$s4XZHQqJFTysn3</QuickExpenseID>
        <Status>FAILED</Status>
    </QuickExpenseStatus>
```

### Example 2: JSON request and response

####  JSON request with required fields

```json
    POST https:
    Authorization: OAuth [token]
    Content-Type: application/json; charset=utf-8
    Accept: application/json

    [
        {
            "CurrencyCode"        : "USD",
            "TransactionAmount"   : "321.45",
            "TransactionDate"     : "2012-07-21"
        }
    ]
```

####  JSON request with optional fields

```json
    POST https:
    Authorization: OAuth [token]
    Content-Type: application/json; charset=utf-8
    Accept: application/json

    [
        {
            "CurrencyCode"        : "USD",
            "TransactionAmount"   : "321.45",
            "TransactionDate"     : "2012-07-21",
            "SpendCategoryCode"   : "AIRFR",
            "PaymentType"         : "PENDC",
            "ExpenseTypeCode"     : "TRVAF",
            "ImageBase64"         : "(image in base64 encoding)",
            "LocationCity"        : "Seattle",
            "LocationSubdivision" : "US-WA",
            "LocationCountry"     : "US",
            "VendorDescription"   : "Delta Airlines",
            "Comment"             : "Trip to New York"
        }
    ]
```

####  JSON successful response

```json
    [
        {
            "QuickExpenseID":"nuIsue2$pASZPqXdQ5ge$s4XZHQqJFTysn3",
            "Status":"SUCCESS",
            "Message":""
        }
    ]
```

####  JSON response with error

```json
    [
        {
            "Error": { "Message":"Missing or invalid location subdivision code.", "Server-Time":"2012-10-16T02:18:56", "Id":"FA067608-3E83-4B3C-A421-187F2C498356" }
        }
    ]
```
  


[1]: /api-reference/expense/quick-expense/index.html#post
[2]: https://en.wikipedia.org/wiki/ISO_4217
[3]: /api-reference/expense/expense-report/expense-group-configurations.html#get
[4]: /tools-support/reference/spend-category-codes.html
[5]: https://en.wikipedia.org/wiki/ISO_3166-2:2007-04-17#I-8
[6]: https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2

