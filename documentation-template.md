---
title: Cash Advance v4
layout: reference
---

The Cash Advance API can be used to Create, View and Issue Cash Advance.

> **Limitations**: This API is only available to partners who have been granted access by SAP Concur. Access to this documentation does not provide access to the API. This API is not available in Implementation environments.

* [Process Flow](#process-flow)
* [Products and Editions](#products-editions)
* [Scope Usage](#scope-usage)
* [Access Token Usage](#access-token-usage)
* [Create Cash Advance](#create-cash-advance)
* [Get Cash Advance](#get-cash-advance)
* [Issue Cash Advance](#issue-cash-advance)
* [Schema](#schema)
  * [Create Cash Advance Request](#create-cash-advance-request-schema)
    * [amount](#amount-schema)
  * [Create Cash Advance Response](#create-cash-advance-response-schema)
  * [Get Cash Advance Response](#get-cash-advance-response-schema)
    * [payment](#payment-schema)
    * [exchangeRate](#exchange-rate-schema)
    * [amountRequested](#amount-requested-schema)
    * [availableBalance](#available-balance-schema)
    * [approvalStatus](#approval-status-schema)
  * [Issue Cash Advance Request](#issue-cash-advance-request-schema)
  * [Issue Cash Advance Response](#issue-cash-advance-response-schema)
    * [status](#status-schema)
  * [Error](#schema-error)
  
## <a name="process-flow"></a>Process Flow

The below process diagram explains the working of Client code and Service interaction.

![Process Flow for Service V2](./cash-advance-process-diagram.pptx)

## <a name="products-editions"></a>Products and Editions

* Concur Expense Professional Edition
* Concur Expense Standard Edition

## <a name="scope-usage"></a>Scope Usage

Required Scopes:

Name|Description|Endpoint
---|---|---
`cashadvance.write`|Create Cash Advance.|POST
`cashadvance.read`|Get Cash Advance Information.|GET

## <a name="access-token-usage"></a>Access Token Usage

This API supports user level access tokens only.

## <a name="create-cash-advance"></a>Create Cash Advance

Creates a Cash Advance.

### Scopes

`cashadvance.write` - Refer to [Scope Usage](#scope-usage) for full details.

### Request

#### URI

##### Template

```shell
https://{datacenterURI}/cashadvance/v4/companies/{companyID}/cashadvances
```

##### Parameters

Name|Type|Format|Description
---|---|---|---
`companyID`|`string`|-|**Required** The unique identifier of the SAP Concur company. Use [Company ID](api-reference/profile/v1.company.html) to retrieve the `companyID`.

#### Headers

* [RFC 7231 Content-Type](https://tools.ietf.org/html/rfc7231#section-3.1.1.5)
* [RFC 7235 Authorization](https://tools.ietf.org/html/rfc7235#section-4.2) - Bearer Token that identifies the caller. This is the User access token.
* `concur-correlationid` is a SAP Concur specific custom header used for technical support in the form of a [RFC 4122 A Universally Unique IDentifier (UUID) URN Namespace](https://tools.ietf.org/html/rfc4122)

#### Payload

* [Create Cash Advance Request](#create-cash-advance-request-schema)

### Response

#### Status Codes

* [201 Created](https://tools.ietf.org/html/rfc7231#section-6.3.2)
* [400 Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)
* [401 Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)
* [403 Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)
* [404 Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)
* [408 Request Timeout](https://tools.ietf.org/html/rfc7231#section-6.5.7)
* [500 Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)
* [503 Service Unavailable](https://tools.ietf.org/html/rfc7231#section-6.6.4)

#### Payload

* [Create Cash Advance Response](#create-cash-advance-response-schema)

### Example

#### Request

```curl -X POST \
  https://us.api.concursolutions.com/cashadvance/v4/companies/9feee0e9-9bf2-4f01-9d8a-035712679591/cashadvances \
  -H 'Accept: application/json' \
  -H 'Authorization: Bearer {access_token}' \
  -H 'Content-Type: application/json' \
  -H 'concur-correlationid: create-cash-advance-test' \
  -d '{
  "accountCode": "employee account code",
  "amountRequested": {
    "currency": "USD",
    "amount": 100
  },
  "comment": "Cash Advance of local trips",
  "name": "Cash Advance for Chicago",
  "purpose": "Trip to home office",
  "reimbursementCurrency": "USD",
  "userId": "9FED321D-3484-49F3-A514-84CB2590DFC4"
}   '
```

#### Response

```shell
201 Created

{
    "cashAdvanceId": "C0550587A7D7DF4AB41CA8EF72F6F3D1",
    "url": "https://us.api.concursolutions.com/cashadvance/v4/companies/9feee0e9-9bf2-4f01-9d8a-035712679591/cashadvances/C0550587A7D7DF4AB41CA8EF72F6F3D1"
}
```

## <a name="get-cash-advance"></a>Get Cash Advance

Get Cash Advance.

### Scopes
`cashadvance.read` - Refer to [Scope Usage](#scope-usage) for full details.

### Request

#### URI

##### Template

```shell
https://{datacenterURI}/cashadvance/v4/companies/{companyID}/cashadvances/{cashAdvanceId}
```

##### Parameters

Name|Type|Format|Description
---|---|---|---
`companyID`|`string`|-|**Required** The unique identifier of the SAP Concur company. Use [Company ID](api-reference/profile/v1.company.html) to retrieve the `companyID`.
`cashAdvanceId`|`string`|-|**Required** Cash Advance Id.

#### Headers

* [RFC 7235 Authorization](https://tools.ietf.org/html/rfc7235#section-4.2) - Bearer Token that identifies the caller. This is the User access token.
* `concur-correlationid` is a SAP Concur specific custom header used for technical support in the form of a [RFC 4122 A Universally Unique IDentifier (UUID) URN Namespace](https://tools.ietf.org/html/rfc4122)

### Response

#### Status Codes

* [200 OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)
* [400 Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)
* [401 Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)
* [403 Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)
* [404 Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)
* [408 Request Timeout](https://tools.ietf.org/html/rfc7231#section-6.5.7)
* [500 Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)
* [503 Service Unavailable](https://tools.ietf.org/html/rfc7231#section-6.6.4)

#### Payload

* [Get Cash Advance Response](#get-cash-advance-response-schema)

### Example

#### Request

```shell
curl -X GET \
  https://us.api.concursolutions.com/cashadvance/v4/companies/9feee0e9-9bf2-4f01-9d8a-035712679591/cashadvances/C0550587A7D7DF4AB41CA8EF72F6F3D1 \
  -H 'Authorization: Bearer {access_token}' \
  -H 'concur-correlationid: create-cash-adavance-test' \
  -d '{
}'
```

#### Response

```shell
200 Created

{
    "paymentType": {
        "description": "Payment in cash",
        "paymentCode": "CASH"
    },
    "exchangeRate": {
        "operation": "MULTIPLY",
        "value": "1.00000000000000"
    },
    "amountRequested": {
        "amount": "100.000000",
        "value": "100.000000",
        "currency": "USD"
    },
    "availableBalance": {
        "amount": "0.0",
        "currency": "USD"
    },
    "approvalStatus": {
        "name": "Not Submitted",
        "code": "C_NOTF"
    },
    "cashAdvanceId": "83C46E6ADBD7D647B1AC34D1C0574E87",
    "requestDate": "2020-10-29 18:28:11.0",
    "name": "Cash Advance for Chicago",
    "purpose": "Trip to home office",
    "issuedDate": null,
    "accountCode": "employee account cod",
    "comment": "Cash Advance of local trips",
    "lastModifiedDate": "2020-10-29 18:28:11.0",
    "hasReceipts": false,
    "reimbursementCurrency": "USD"
}

```

## <a name="issue-cash-advance"></a>Issue Cash Advance

Issue a Cash Advance.

### Scopes

`cashadvance.write` - Refer to [Scope Usage](#scope-usage) for full details.

### Request

#### URI

##### Template

```shell
https://{datacenterURI}/cashadvance/v4/companies/{companyID}/cashadvances/{cashAdvanceId}/issue
```

##### Parameters

Name|Type|Format|Description
---|---|---|---
`companyID`|`string`|-|**Required** The unique identifier of the SAP Concur company. Use [Company ID](api-reference/profile/v1.company.html) to retrieve the `companyID`.
`cashAdvanceId`|`string`|-|**Required** Cash Advance Id.

#### Headers

* [RFC 7231 Content-Type](https://tools.ietf.org/html/rfc7231#section-3.1.1.5)
* [RFC 7235 Authorization](https://tools.ietf.org/html/rfc7235#section-4.2) - Bearer Token that identifies the caller. This is the User access token.
* `concur-correlationid` is a SAP Concur specific custom header used for technical support in the form of a [RFC 4122 A Universally Unique IDentifier (UUID) URN Namespace](https://tools.ietf.org/html/rfc4122)

#### Payload

* [Issue Cash Advance Request](#issue-cash-advance-request-schema)

### Response

#### Status Codes

* [201 Created](https://tools.ietf.org/html/rfc7231#section-6.3.2)
* [400 Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)
* [401 Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)
* [403 Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)
* [404 Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)
* [408 Request Timeout](https://tools.ietf.org/html/rfc7231#section-6.5.7)
* [500 Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)
* [503 Service Unavailable](https://tools.ietf.org/html/rfc7231#section-6.6.4)

#### Payload

* [Issue Cash Advance Response](#issue-cash-advance-response-schema)

### Example

#### Request

```curl -X POST \
  https://us.api.concursolutions.com/cashadvance/v4/companies/9feee0e9-9bf2-4f01-9d8a-035712679591/cashadvances/C0550587A7D7DF4AB41CA8EF72F6F3D1/issue \
  -H 'Accept: application/json' \
  -H 'Authorization: Bearer {access_token}' \
  -H 'Content-Type: application/json' \
  -H 'concur-correlationid: create-cash-adavance-test' \
  -d '{
  "accountCode": "employee account code",
  "comment": "Issuing Cash Advance of employee local trips",
  "exchangeRate": 1.00000
}   '
```

#### Response

```shell
201 Created

{
    "status": {
        "code": "C_ISSU",
        "name": "Issued"
    },
    "issuedDate": "2020-10-29"
}
```

## <a name="schema"></a>Schema

### <a name="create-cash-advance-request-schema"></a>Create Cash Advance Request

Name|Type|Format|Description
---|---|---|---
`accountCode`|`string`|-|Account Code if not provided will be read from Employee profile configuration data.
`amountRequested`|-|[amount](#amount-schema)|**Required** The amount of the cash advance.
`comment`|`string`|-|Comment while creating a cash advance.
`name`|`string`|-|**Required** Cash Advance Name.
`purpose`|`string`|-|Purpose of raising Cash Advance.
`reimbursementCurrency`|`string`|-|**Required** The 3-letter ISO 4217 currency code.
`userID`|`string`|-|**Required** The unique identifier of the SAP Concur user. Use [User Profile v1.0](api-reference/profile/v1.user.html) to retrieve the `userID`.

### <a name="amount-schema"></a>Amount

Name|Type|Format|Description
---|---|---|---
`currency`|`string`|-|**Required** The 3-letter ISO 4217 currency code.
`amount`|`number`|-|**Required** The amount value.

### <a name="create-cash-advance-response-schema"></a>Create Cash Advance Response

Name|Type|Format|Description
---|---|---|---
`cashAdvanceId`|`string`|-|Unique Cash Advance Identifier.
`url`|`string`|-|Get Cash Advance URL.

### <a name="get-cash-advance-response-schema"></a>Get Cash Advance Response

Name|Type|Format|Description
---|---|---|---
`paymentType`|-|[payment](#payment-schema)|Details on type of payment used.
`exchangeRate`|-|[exchangeRate](#exchange-rate-schema)|Details on exchange rate.
`amountRequested`|-|[amountRequested](#amount-requested-schema)|Details on amount requested.
`availableBalance`|-|[availableBalance](#available-balance-schema)|Details on available balance.
`approvalStatus`|-|[approvalStatus](#approval-status-schema)|Details on approval status.
`cashAdvanceId`|`string`|-|Unique Cash Advance Identifier.
`requestDate`|`string`|YYYY-MM-DD|This is the date on which cash advance was requested.
`name`|`string`|-|Cash Advance Name.
`purpose`|`string`|-|Purpose of raising Cash Advance.
`issuedDate`|`string`|YYYY-MM-DD|This is the date on which cash advance was issued.
`accountCode`|`string`|-|Account Code linked to the employee.
`comment`|`string`|-|Comment while creating a cash advance.
`lastModifiedDate`|`string`|YYYY-MM-DD|This is the date on which cash advance was last modified.
`hasReceipts`|`string`|-|If the cash advance has receipts.
`reimbursementCurrency`|`string`|-|The 3-letter ISO 4217 currency code.

### <a name="payment-schema"></a>payment

Name|Type|Format|Description
---|---|---|---
`description`|`string`|-|The payment method for the cash advance.
`paymentCode`|`string`|-|The ID of the payment type for the cash advance.

### <a name="exchange-rate-schema"></a>exchangeRate

Name|Type|Format|Description
---|---|---|---
`operation`|`string`|-|Exchange rate operation, Possible values: 'MULTIPLY' only.
`value`|`number`|-|Exchange rate value.

### <a name="amount-requested-schema"></a>amountRequested

Name|Type|Format|Description
---|---|---|---
`amount`|`number`|-|Requested cash advance amount.
`value`|`number`|-|Deprecated(Use amount).
`currency`|`number`|-|The 3-letter ISO 4217 currency code.

### <a name="available-balance-schema"></a>availableBalance

Name|Type|Format|Description
---|---|---|---
`amount`|`number`|-|Unsubmitted Balance.
`currency`|`number`|-|The 3-letter ISO 4217 currency code.

### <a name="approval-status-schema"></a>approvalStatus

Name|Type|Format|Description
---|---|---|---
`name`|`string`|-|Cash Advance Status Name.
`code`|`string`|-|Cash Advance Status Key.

### <a name="issue-cash-advance-request-schema"></a>Issue Cash Advance Request

Name|Type|Format|Description
---|---|---|---
`accountCode`|`string`|-|Account Code linked to the employee.
`comment`|`string`|-|Comment while issuing a cash advance.
`exchangeRate`|`number`|-|Details on exchange rate.

### <a name="issue-cash-advance-response-schema"></a>Issue Cash Advance Response

Name|Type|Format|Description
---|---|---|---
`status`|-|[status](#status-schema)|Details on type of payment used.
`issuedDate`|`string`|YYYY-MM-DD|This is the date on which cash advance was issued.

### <a name="status-schema"></a>status

Name|Type|Format|Description
---|---|---|---
`code`|`string`|-|Cash Advance Status Key.
`name`|`string`|-|Cash Advance Status Name.

### <a name="schema-error"></a>Error

Name|Type|Format|Description
---|---|---|---
`errorId`|`string`|-|The unique identifier of the error.
`errorMessage`|`string`|-|**Required** Message associated with the error.
`path`|`string`|-|The path to the resource.
`timestamp`|`string`|-|The timestamp for the error.

