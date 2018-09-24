---
title: Fiscal Year
layout: reference
---

# Menu
* [Getting Started](./getting-started.html)
* [Fiscal Year](/api-reference/budget/fiscal-year.html)
* [Budget Category](/api-reference/budget/budget-category.html)
* [Budget Item](/api-reference/budget/budget-header.html)
* [Budget Tracking Field](/api-reference/budget/budget-tracking.html)
* [Budget Adjustments](/api-reference/budget/budget-adjustments.html)

# Fiscal Year

**Preview** _This is a prerelease version of the service and is subject to change before final release._

The Fiscal Calendar is used both for Reporting and Budget. A Fiscal Year can start and end at any date as long as the end date is after the start date and does not span more than 2 years. Fiscal Years cannot overlap. Fiscal Periods cannot overlap and are limited to 24 per fiscal year.

* [GET all Fiscal Years](#getall)
* [GET a Fiscal Year](#get)
* [POST a Fiscal Year](#post)
* [DELETE a Fiscal Year](#delete)
* [Schema](#schema)
  * [Fiscal Year](#fiscalYear)
  * [Fiscal Period](#fiscalPeriod)
  * [Error Response](#errorResponse)
  * [Error Message](#errorMessage)
  
## Version

4.0  

## <a name="getall"></a>GET all Fiscal Years

Retrieve a list of all fiscal years
* Use the lastModifiedAfter parameter if you wish to only retrieve fiscal years that were changed after a certain date.
* Use the includeRemoved parameter if you wish to retrieve all fiscal years, including those that have been deleted.  _Important: delete data that is beyond the configured retention period can not be returned._

### Scopes

Name | Description
---|---
`budgetitem.write`|Create/update/delete access to budget data
`budgetitem.read`|Read access to budget data
`fiscalyear.write`|Create/update/delete access to fiscal data
`fiscalyear.read`|Read access to fiscal data

### Request

#### Headers

* [RFC 7235 Authorization](https://tools.ietf.org/html/rfc7235#section-4.2)
* [RFC 7231 Content-Type](https://tools.ietf.org/html/rfc7231#section-3.1.1.5)

#### Parameters

N/A

##### URI Template

```http
GET  /budget/v4/fiscalYear
```
### Parameters

Name | Type | Format | Description
-----|------|--------|------------			
lastModifiedAfter	|	`datetime`	|	`query`	|	Use this field if you only want Fiscal Years that were changed after the supplied date.  The supplied date will be interpreted in the UTC time zone.  If lastModifiedAfter is not supplied, the service will return all Fiscal Years, regardless of modified date.  Format: YYYY-MM-DDTHH:MM:SS (Example: 2016-03-29T16:12:20) 
includeRemoved	|	`boolean`	|	`query`	|	 If this parameter is "true", the service will return all Fiscal Years, including those that were previously removed.  If not supplied, this field defaults to "false". 

### Response

#### Status Codes

* [200 OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) Successful call, response is in body.
* [400 Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1) The request was determined to be invalid by the server.
* [403 Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3) The user does not have the necessary permissions to perform the request.
* [500 Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1) Error message in response body
* [504 Gateway Timeout](https://tools.ietf.org/html/rfc7231#section-6.6.5) Error message in response body

#### Headers

* `concur-correlationid` (Optional) is a Concur specific custom header used for technical support in the form of a [RFC 4122 A Universally Unique IDentifier (UUID) URN Namespace](https://tools.ietf.org/html/rfc4122)

#### Payload

Array of [Fiscal Year](#fiscalYear)

### Example

#### Request
```http
GET https://us.api.concursolutions.com/budget/v4/fiscalYear?lastModifiedAfter=2017-02-27T12:30:00
Authorization: Bearer: {YOUR ACCESS TOKEN}
Content-Type: application/json
```

#### Response
```http
HTTP/1.1 200 OK
Cache-Control: max-age=604800
Content-Type: application/json
Date: Wed, 06 Jul 2020 17:33:03 GMT
Etag: "359670651"
Expires: Wed, 13 Jul 2020 17:33:03 GMT
Last-Modified: Fri, 09 Aug 2020 23:54:35 GMT
Content-Length: 2187
concur-correlationid: ffa4ae0a-f65c-4037-8bfb-8996c3fca28c
```

```json
[
    {
      "name":"2017",
      "startDate":"2017-01-01",
      "endDate":"2017-12-31",
      "status":"OPEN",
      "id":"5e58b9b1-fed6-4d36-a5a1-a1ed325931d4",
      "lastModified":"2017-03-26 20:53:19",
      "currentYear":false,
      "monthlyFiscalPeriods":[
        {
          "name":"2017 - Aug",
          "fiscalPeriodStatus":"OPEN",
          "id":"a4e94128-c7b7-4561-a57e-1512e59e4896",
          "periodType":"MONTHLY",
          "startDate":"2017-08-01",
          "endDate":"2017-08-31",
          "spendDate":null,
          "fiscalYearId":"5e58b9b1-fed6-4d36-a5a1-a1ed325931d4",
          "currentPeriod":false
        },
        {
          "name":"2017 - Jan",
          "fiscalPeriodStatus":"CLOSED",
          "id":"ab2810f5-f045-45b0-b2b2-8e84bc978e27",
          "periodType":"MONTHLY",
          "startDate":"2017-01-01",
          "endDate":"2017-01-30",
          "spendDate":null,
          "fiscalYearId":"5e58b9b1-fed6-4d36-a5a1-a1ed325931d4",
          "currentPeriod":false
        },
        {
          "Additional fiscal periods removed for brevity": "Additional fiscal periods removed for brevity"
        }
      ],
      "quarterlyFiscalPeriods":[
        {"name":"2017 - Q4",
          "fiscalPeriodStatus":"OPEN",
          "id":"655ffe9d-caca-4f2f-a4a1-e04cfb68fd6e",
          "periodType":"QUARTERLY",
          "startDate":"2017-10-01",
          "endDate":"2017-12-31",
          "spendDate":null,
          "fiscalYearId":"5e58b9b1-fed6-4d36-a5a1-a1ed325931d4",
          "currentPeriod":false
        },
        {
          "Additional fiscal periods removed for brevity": "Additional fiscal periods removed for brevity"
        }
      ],
      "yearlyFiscalPeriods":[
        {
          "name":"2017",
          "fiscalPeriodStatus":"OPEN",
          "id":"2fb8ea93-172a-47a6-9611-44eb75ad547b",
          "periodType":"YEARLY",
          "startDate":"2017-01-01",
          "endDate":"2017-12-31",
          "spendDate":null,
          "fiscalYearId":"5e58b9b1-fed6-4d36-a5a1-a1ed325931d4",
          "currentPeriod":false
        }
      ],
      "customFiscalPeriods":[]
    }
]
```

## <a name="get"></a>GET a Fiscal Year

Retrieve a single fiscal year by id.

### Scopes

Name | Description
---|---
`budgetitem.write`|Create/update/delete access to budget data
`budgetitem.read`|Read access to budget data
`fiscalyear.write`|Create/update/delete access to fiscal data
`fiscalyear.read`|Read access to fiscal data

### Request

#### Headers

* [RFC 7235 Authorization](https://tools.ietf.org/html/rfc7235#section-4.2)
* [RFC 7231 Content-Type](https://tools.ietf.org/html/rfc7231#section-3.1.1.5)

#### Parameters

Name | Type | Format | Description
-----|------|--------|------------			
id	|	`string`	|	`path`	|	The Fiscal Year's key field.

##### URI Template

```shell
GET  /budget/v4/fiscalYear/{id} 
```

### Response

#### Status Codes

* [200 OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) Successful call, response is in body.
* [400 Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1) The request was determined to be invalid by the server.
* [403 Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3) The user does not have the necessary permissions to perform the request.
* [404 Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4) The resource could not be found or does not exist
* [500 Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1) Error message in response body
* [504 Gateway Timeout](https://tools.ietf.org/html/rfc7231#section-6.6.5) Error message in response body

#### Headers

* `concur-correlationid` (Optional) is a Concur specific custom header used for technical support in the form of a [RFC 4122 A Universally Unique IDentifier (UUID) URN Namespace](https://tools.ietf.org/html/rfc4122)

#### Payload

[Fiscal Year](#fiscalYear)

### Example

#### Request
```http
GET https://us.api.concursolutions.com/budget/v4/fiscalYear/5e58b9b1-fed6-4d36-a5a1-a1ed325931d4
Authorization: Bearer: {YOUR ACCESS TOKEN}
```

#### Response
```http
HTTP/1.1 200 OK
Cache-Control: max-age=604800
Content-Type: application/json
Date: Wed, 06 Jul 2020 17:33:03 GMT
Etag: "359670651"
Expires: Wed, 13 Jul 2020 17:33:03 GMT
Last-Modified: Fri, 09 Aug 2020 23:54:35 GMT
Content-Length: 1270
concur-correlationid: 39216840-2808-4c49-8874-e9862d96fdb6
```

```json
{
  "name":"2017",
  "startDate":"2017-01-01",
  "endDate":"2017-12-31",
  "status":"OPEN",
  "id":"5e58b9b1-fed6-4d36-a5a1-a1ed325931d4",
  "lastModified":"2017-03-26 20:53:19",
  "currentYear":false,
  "monthlyFiscalPeriods":[
    {
      "name":"2017 - Aug",
      "fiscalPeriodStatus":"OPEN",
      "id":"a4e94128-c7b7-4561-a57e-1512e59e4896",
      "periodType":"MONTHLY",
      "startDate":"2017-08-01",
      "endDate":"2017-08-31",
      "spendDate":null,
      "fiscalYearId":"5e58b9b1-fed6-4d36-a5a1-a1ed325931d4",
      "currentPeriod":false
    },
    {
      "name":"2017 - Jan",
      "fiscalPeriodStatus":"CLOSED",
      "id":"ab2810f5-f045-45b0-b2b2-8e84bc978e27",
      "periodType":"MONTHLY",
      "startDate":"2017-01-01",
      "endDate":"2017-01-30",
      "spendDate":null,
      "fiscalYearId":"5e58b9b1-fed6-4d36-a5a1-a1ed325931d4",
      "currentPeriod":false
    },
    {
      "Additional fiscal periods removed for brevity": "Additional fiscal periods removed for brevity"
    }
  ],
  "quarterlyFiscalPeriods":[
    {"name":"2017 - Q4",
      "fiscalPeriodStatus":"OPEN",
      "id":"655ffe9d-caca-4f2f-a4a1-e04cfb68fd6e",
      "periodType":"QUARTERLY",
      "startDate":"2017-10-01",
      "endDate":"2017-12-31",
      "spendDate":null,
      "fiscalYearId":"5e58b9b1-fed6-4d36-a5a1-a1ed325931d4",
      "currentPeriod":false
    },
    {
      "Additional fiscal periods removed for brevity": "Additional fiscal periods removed for brevity"
    }
  ],
  "yearlyFiscalPeriods":[
    {
      "name":"2017",
      "fiscalPeriodStatus":"OPEN",
      "id":"2fb8ea93-172a-47a6-9611-44eb75ad547b",
      "periodType":"YEARLY",
      "startDate":"2017-01-01",
      "endDate":"2017-12-31",
      "spendDate":null,
      "fiscalYearId":"5e58b9b1-fed6-4d36-a5a1-a1ed325931d4",
      "currentPeriod":false
    }
  ],
  "customFiscalPeriods":[]
}
```

## <a name="post"></a>POST Fiscal Year(s)

Create or update a list of one or more fiscal years.
* Fiscal years may be created for the future or the past
* Unless there is a need to do so, the client should only specify monthly Fiscal Periods when creating/updating a Fiscal Year.  The system will auto-generate the quarterly and yearly Fiscal Periods.

### Scopes

Name | Description
---|---
`budgetitem.write`|Create/update/delete access to budget data
`fiscalyear.write`|Create/update/delete access to fiscal data

### Request

#### Headers

* [RFC 7235 Authorization](https://tools.ietf.org/html/rfc7235#section-4.2)
* [RFC 7231 Content-Type](https://tools.ietf.org/html/rfc7231#section-3.1.1.5)

#### Parameters

N/A

##### URI Template

```http
POST  /budget/v4/budgetCategory
```

#### Payload

Array of [Fiscal Year](#fiscalYear)

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

Array of [Fiscal Year](#fiscalYear) or [Error Response](#errorResponse)

### Example

#### Request
```http
POST https://us.api.concursolutions.com/budget/v4/fiscalYear
Authorization: Bearer: {YOUR ACCESS TOKEN}
```

```json
[
  {
    "name":"2017-Special",
    "startDate":"2017-01-01",
    "endDate":"2017-03-31",
    "status":"OPEN",
    "monthlyFiscalPeriods":[
      {
        "name":"2017-Special - Jan",
        "fiscalPeriodStatus":"OPEN",
        "periodType":"MONTHLY",
        "startDate":"2017-01-01",
        "endDate":"2017-01-31"
      },
      {
        "name":"2017-Special - Feb",
        "fiscalPeriodStatus":"OPEN",
        "periodType":"MONTHLY",
        "startDate":"2017-02-01",
        "endDate":"2017-02-28"
      },
      {
        "name":"2017-Special - Mar",
        "fiscalPeriodStatus":"OPEN",
        "periodType":"MONTHLY",
        "startDate":"2017-03-01",
        "endDate":"2017-03-31"
      }
    ]
  }
]
```

#### Response

##### Success Response

```http
HTTP/1.1 200 OK
Cache-Control: max-age=604800
Content-Type: application/json
Date: Wed, 06 Jul 2020 17:33:03 GMT
Etag: "359670651"
Expires: Wed, 13 Jul 2020 17:33:03 GMT
Last-Modified: Fri, 09 Aug 2020 23:54:35 GMT
Content-Length: 1270
concur-correlationid: 5c00e59f-d00c-4019-8d3d-47130d8e37b4
```

```json
[
    {
      "name":"2017-Special",
      "startDate":"2017-01-01",
      "endDate":"2017-03-31",
      "status":"OPEN",
      "id":"2edd7bd4-8f10-46e5-bf52-d553f6c7df80",
      "lastModified":"2018-03-26 20:54:11",
      "currentYear":false,
      "monthlyFiscalPeriods":[
        {
          "name":"2017-Special - Jan",
          "fiscalPeriodStatus":"OPEN",
          "periodType":"MONTHLY",
          "startDate":"2017-01-01",
          "endDate":"2017-01-31",
          "id":"1929d1d9-6c99-4635-9272-508364193f8f",
          "spendDate":null,
          "fiscalYearId":"2edd7bd4-8f10-46e5-bf52-d553f6c7df80",
          "currentPeriod":false
        },
        {
          "name":"2017-Special - Feb",
          "fiscalPeriodStatus":"OPEN",
          "periodType":"MONTHLY",
          "startDate":"2017-02-01",
          "endDate":"2017-02-28",
          "id":"41aa7452-e52a-4fd6-9c8a-5b199edeadaf",
          "spendDate":null,
          "fiscalYearId":"2edd7bd4-8f10-46e5-bf52-d553f6c7df80",
          "currentPeriod":false
        },
        {
          "name":"2017-Special - Mar",
          "fiscalPeriodStatus":"OPEN",
          "periodType":"MONTHLY",
          "startDate":"2017-03-01",
          "endDate":"2017-03-31",
          "id":"6c7d0b13-96b9-4d76-a083-4d38c96144e2",
          "spendDate":null,
          "fiscalYearId":"2edd7bd4-8f10-46e5-bf52-d553f6c7df80",
          "currentPeriod":false
        }
      ],
      "quarterlyFiscalPeriods":[
        {
          "name":"2017-Special - Q1",
          "fiscalPeriodStatus":"OPEN",
          "id":"5ce25dfd-8b2b-4fea-91eb-f8f9ad0bb896 ",
          "periodType":"QUARTERLY",
          "startDate":"2017-01-01",
          "endDate":"2017-03-31",
          "spendDate":null,
          "fiscalYearId":"2edd7bd4-8f10-46e5-bf52-d553f6c7df80",
          "currentPeriod":false
        }
      ],
      "yearlyFiscalPeriods":[
        {
          "name":"2017-Special",
          "fiscalPeriodStatus":"OPEN",
          "id":"a6bede66-4f3d-412f-a620-2a073013cb2a",
          "periodType":"YEARLY",
          "startDate":"2017-01-01",
          "endDate":"2017-03-31",
          "spendDate":null,
          "fiscalYearId":"2edd7bd4-8f10-46e5-bf52-d553f6c7df80",
          "currentPeriod":false
        }
      ],
      "customFiscalPeriods":[]
    }
]
```
##### Failure Response

```shell
HTTP/1.1 400 Bad Request
Cache-Control: no-store
Connection: close
Content-Length: 338
Content-Type: application/json;charset=utf-8
Date: Fri, 21 Sep 2018 15:27:05 GMT
Expires: Thu, 20 Sep 2018 15:27:05 GMT
Pragma: no-cache
concur-correlationid: cb061832-82eb-418e-a968-de6b4ce370ae 
```

```json
{
  "status" : false, 
  "errorMessageList" : 
  [
    {"errorType" : "ERROR", "errorCode" : "BUDGET.FISCAL_YEAR_SDATE_ERROR", "errorMessage" : "Fiscal year should have a start date"},
    {"errorType" : "ERROR", "errorCode" : "BUDGET.FISCAL_YEARS_HAVE_GAP", "errorMessage" : "Fiscal years should not have gaps between them"}
  ]
}
```

## <a name="delete"></a>Delete a Fiscal Year

Delete a fiscal year.  Fiscal years that are in use may not be deleted.

### Scopes

Name | Description
---|---
`budgetitem.write`|Create/update/delete access to budget data
`fiscalyear.write`|Create/update/delete access to fiscal data

### Request

#### Headers

* [RFC 7235 Authorization](https://tools.ietf.org/html/rfc7235#section-4.2)
* [RFC 7231 Content-Type](https://tools.ietf.org/html/rfc7231#section-3.1.1.5)

#### Parameters

Name | Type | Format | Description
-----|------|--------|------------
id	|	`string`	|	`path`	|	The Fiscal Years's key field.

##### URI Template

```http
DELETE  /budget/v4/fiscalYear/{id}
```
### Response

#### Status Codes

* [200 OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) Successful call, response is in body.
* [400 Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1) The request was determined to be invalid by the server.
* [403 Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3) The user does not have the necessary permissions to perform the request.
* [404 Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4) The resource could not be found or does not exist
* [500 Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1) Error message in response body
* [504 Gateway Timeout](https://tools.ietf.org/html/rfc7231#section-6.6.5) Error message in response body

#### Headers

* `concur-correlationid` (Optional) is a Concur specific custom header used for technical support in the form of a [RFC 4122 A Universally Unique IDentifier (UUID) URN Namespace](https://tools.ietf.org/html/rfc4122)

### Example

#### Request
```http
DELETE https://us.api.concursolutions.com/budget/v4/fiscalYear/a11cfc7c-967f-415f-9b30-23f8ce2dbf69
Authorization: Bearer: {YOUR ACCESS TOKEN}
```

#### Response
```http
HTTP/1.1 200 OK
Cache-Control: max-age=604800
Content-Type: application/json
Date: Wed, 06 Jul 2020 17:33:03 GMT
Etag: "359670651"
Expires: Wed, 13 Jul 2020 17:33:03 GMT
Last-Modified: Fri, 09 Aug 2020 23:54:35 GMT
Content-Length: 1270
concur-correlationid: eb7cf20a-3481-45a5-808c-98b8ef7fe805
```

## <a name="schema"></a>Schema

### <a name="fiscalYear"></a>FiscalYear

Name | Type | Format | Description
-----|------|--------|------------
`currentYear`	|	`boolean`	|	-	|	Is this the current Fiscal Year based on the current time?  **READ ONLY**
`startDate`	|	`date`	|	-	|	**Required** The start date for this Fiscal Year. The distance between start date and end date may not be more than two years. Format: YYYY-MM-DD 
`endDate`	|	`date`	|	-	|	**Required** The end date for this Fiscal Year. The distance between start date and end date may not be more than two years.  Format: YYYY-MM-DD
`name`	|	`datetime`	|	-	|	**Required** The name of this Fiscal Year. Must be unique for this entity.
`status`	|	`string`	|	-	|	**Required** The status of this Fiscal Year. Valid values are 'OPEN', 'CLOSED' and 'REMOVED'
`id`	|	`string`	|	-	|	The budget service's key for this object.
`lastModified`  |   `datetime`  |   -   |   The UTC date and time when this object was last changed.  **READ ONLY**
`monthlyFiscalPeriods`	|	`Array[FiscalPeriod]`	|	-	|	 **Required** The list of monthly Fiscal Periods in this Fiscal Year. Fiscal periods must complete fill the parent Fiscal Year with no overlaps. 
`quarterlyFiscalPeriods`	|	`Array[FiscalPeriod]`	|	-	|	 The list of quarterly Fiscal Periods in this Fiscal Year.  If this parameter is not specified, quaterly Fiscal Periods are automatically generated based on the monthly Fiscal Periods supplied.  
`yearlyFiscalPeriods`	|	`Array[FiscalPeriod]`	|	-	|	 The list of yearly Fiscal Periods in this Fiscal Year.  If this parameter is not specified, one period is created that fills the Fiscal Year.
`customFiscalPeriods`	|	`Array[FiscalPeriod]`	|	-	|	 The list of custom Fiscal Periods in this Fiscal Year.  Custom Fiscal Periods are API-only and will not display on user budget dashboards.  
`fiscalPeriods`	|	`Array[FiscalPeriod]`	|	-	|	 The list of all Fiscal Periods in this Fiscal Year.  **READ ONLY**
`openAndClosedFiscalPeriods`	|	`Array[FiscalPeriod]`	|	-	|	 The list of all Fiscal Periods in this Fiscal Year, sorted by status.  **READ ONLY**

### <a name="fiscalPeriod"></a>FiscalPeriod

Name | Type | Format | Description
-----|------|--------|------------
`currentPeriod`	|	`boolean`	|	-	|	Is this the current Fiscal Period based on the current time?  **READ ONLY**
`startDate`	|	`date`	|	-	|	**Required** The start date for this Fiscal Period. Must be within the parent Fiscal Year. Format: YYYY-MM-DD
`endDate`	|	`date`	|	-	|	**Required** The end date for this Fiscal Year. Must be within the parent Fiscal Year. Format: YYYY-MM-DD
`name`	|	`string`	|	-	|	**Required** The name of this Fiscal Period. Must be unique for this entity.
`fiscalPeriodStatus`	|	`string`	|	-	|	**Required** The status of this Fiscal Period. Valid values are 'OPEN', 'CLOSED' and 'REMOVED'
`periodType`  | `string`    |   -   |   **Required** The type of Fiscal Period.  Valid values are 'MONTHLY', 'QUARTERLY', 'YEARLY', 'CUSTOM'
`fiscalYearId`	|	`string`	|	-	|	The key of the parent Fiscal Year for this Fiscal Period.
`id`	|	`string`	|	-	|	The budget service's key for this object.
`spendDate` |   `date`  |   -   |   If the current date is after this Fiscal Period's start date, this field shows the current date.  **READ ONLY**

### <a name="errorResponse"></a>Error Response

Name | Type | Format | Description
---|---|---|---
`status`|`boolean`|-|False if there was an error
`errorMessageList`|`Array[ErrorMessage]`|-|List of all errors detected

### <a name="errorMessage"></a>Error Message

Name | Type | Format | Description
---|---|---|---
`errorType`|`String`|-|WARNING or ERROR
`errorCode`|`String`|-|Text code for this error
`errorMessage`|`String`|-|Plain language error message
