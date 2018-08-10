---
title: Fiscal Year
layout: reference
---

# Menu
* [Getting Started](#overview)
* [Budget Category](#overview)
* [Budget Item](#overview)

# Fiscal Year - Beta
* [Overview](#overview)
* [Retrieve all Fiscal Years](#getall)
* [Retrieve a Fiscal Year](#get)
* [Create/Update a Fiscal Year](#post)
* [Remove a Fiscal Year](#delete)
* [Schema](#schema)

### Overview

The new Budget Service API is in **Beta** . If you are interested in using the Budget Service API, then please contact your account manager for further details.
The Fiscal Calendar is used both for Reporting and Budget. A Fiscal Year can start and end at any date as long as the end date is after the start date and 
does not span more than 2 years. Fiscal Years cannot overlap. Fiscal Periods cannot overlap and are limited to 24 per fiscal year.

## Version
4.0  


## <a name="getall"></a>Retrieve all Fiscal Years

    GET  /budget/v4/fiscalYear

HTTPie:

```shell
http https://us.api.concursolutions.com/budget/v4/fiscalYear 'Authorization:Bearer {YOUR ACCESS TOKEN}'
```

### Parameters

Name | Type | Format | Description
-----|------|--------|------------			
lastModifiedAfter	|	`datetime`	|	`query`	|	Use this field if you only want Fiscal Years that were changed after the supplied date.  The supplied date will be interpreted in the UTC time zone.  If lastModifiedAfter is not supplied, the service will return all Fiscal Years, regardless of modified date.  Format: YYYY-MM-DDTHH:MM:SS (Example: 2016-03-29T16:12:20) 
includeRemoved	|	`boolean`	|	`query`	|	 If this parameter is "true", the service will return all Fiscal Years, including those that were previously removed.  If not supplied, this field defaults to "false". 

### Response

[Fiscal Year Array](#fiscalyear)


## <a name="get"></a>Retrieve a Fiscal Year

    GET  /budget/v4/fiscalYear/{id} 

HTTPie:

```shell
http https://us.api.concursolutions.com/budget/v4/fiscalYear/{id} 'Authorization:Bearer {YOUR ACCESS TOKEN}'
```

### Parameters

Name | Type | Format | Description
-----|------|--------|------------			
id	|	`string`	|	`path`	|	The Fiscal Year's key field (sync guid).

### Response

[Fiscal Year Schema](#fiscalyear)

### Example JSON Response

```json
{
  "name":"2017",
  "startDate":"2017-01-01",
  "endDate":"2017-12-31",
  "status":"OPEN",
  "syncGuid":"5e58b9b1-fed6-4d36-a5a1-a1ed325931d4",
  "lastModified":"2017-03-26 20:53:19",
  "currentYear":false,
  "monthlyFiscalPeriods":[
    {
      "name":"2017 - Aug",
      "fiscalPeriodStatus":"OPEN",
      "syncGuid":"a4e94128-c7b7-4561-a57e-1512e59e4896",
      "periodType":"MONTHLY",
      "startDate":"2017-08-01",
      "endDate":"2017-08-31",
      "spendDate":null,
      "fiscalYearSyncGuid":"5e58b9b1-fed6-4d36-a5a1-a1ed325931d4",
      "currentPeriod":false
    },
    {
      "name":"2017 - Jan",
      "fiscalPeriodStatus":"CLOSED",
      "syncGuid":"ab2810f5-f045-45b0-b2b2-8e84bc978e27",
      "periodType":"MONTHLY",
      "startDate":"2017-01-01",
      "endDate":"2017-01-30",
      "spendDate":null,
      "fiscalYearSyncGuid":"5e58b9b1-fed6-4d36-a5a1-a1ed325931d4",
      "currentPeriod":false
    },
    {
      "Additional fiscal periods removed for brevity": "Additional fiscal periods removed for brevity"
    }
  ],
  "quarterlyFiscalPeriods":[
    {"name":"2017 - Q4",
      "fiscalPeriodStatus":"OPEN",
      "syncGuid":"655ffe9d-caca-4f2f-a4a1-e04cfb68fd6e",
      "periodType":"QUARTERLY",
      "startDate":"2017-10-01",
      "endDate":"2017-12-31",
      "spendDate":null,
      "fiscalYearSyncGuid":"5e58b9b1-fed6-4d36-a5a1-a1ed325931d4",
      "currentPeriod":false
    },
    {
      "Additional fiscal periods removed for brevity": "Additional fiscal periods removed for brevity"
    }
  ],
  "yearlyFiscalPeriods":[
    {
      "name":"2020",
      "fiscalPeriodStatus":"OPEN",
      "syncGuid":"2fb8ea93-172a-47a6-9611-44eb75ad547b",
      "periodType":"YEARLY",
      "startDate":"2017-01-01",
      "endDate":"2017-12-31",
      "spendDate":null,
      "fiscalYearSyncGuid":"5e58b9b1-fed6-4d36-a5a1-a1ed325931d4",
      "currentPeriod":false
    }
  ],
  "customFiscalPeriods":[]
}
```


## <a name="post"></a>Create/Update a Fiscal Year

    POST  /budget/v4/fiscalYear

HTTPie:

```shell
http POST https://us.api.concursolutions.com/budget/v4/fiscalYear \
"Authorization:Bearer {YOUR ACCESS TOKEN}" \
"Content-Type: application/json" \
< {PATH TO YOUR FISCAL YEAR JSON}
```

*Note: unless there is a need to do so, the client should only specify monthly Fiscal Periods when creating/updating a 
Fiscal Year.  The system will auto-generate the quarterly and yearly Fiscal Periods.*

### Parameters

Name | Type | Format | Description
-----|------|--------|------------
`fiscalYear`	|	`array`	|	`body`	|	**Required** A JSON representation of a Fiscal Year

### Response

[Fiscal Year Array](#fiscalyear)

### Example JSON Create POST Body

```json
[
  {
    "name":"2017-Special",
    "startDate":"2017-01-01",
    "endDate":"2017-03-31",
    "status":"OPEN",
    "currentYear":false,
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
        "name":"2017-Special - Feb",
        "fiscalPeriodStatus":"OPEN",
        "periodType":"MONTHLY",
        "startDate":"2017-03-01",
        "endDate":"2017-03-31"
      }
    ]
  }
]
```


## <a name="delete"></a>Delete a Fiscal Year

    DELETE  /budget/v4/fiscalYear/{id}

```shell
http DELETE https://us.api.concursolutions.com/budget/v4/fiscalYear/{id} \
"Authorization:Bearer {YOUR ACCESS TOKEN}" \
"Content-Type: application/json" \
```


### Parameters

Name | Type | Format | Description
-----|------|--------|------------
id	|	`string`	|	`path`	|	The Fiscal Years's key field (sync guid).


## <a name="schema"></a>Schema

### <a name="fiscalyear"></a>FiscalYear

Name | Type | Format | Description
-----|------|--------|------------
`currentYear`	|	`boolean`	|	-	|	Is this the current Fiscal Year based on the current time?  **READ ONLY**
`startDate`	|	`date`	|	-	|	**Required** The start date for this Fiscal Year. The distance between start date and end date may not be more than two years. Format: YYYY-MM-DD 
`endDate`	|	`date`	|	-	|	**Required** The end date for this Fiscal Year. The distance between start date and end date may not be more than two years.  Format: YYYY-MM-DD
`name`	|	`datetime`	|	-	|	**Required** The name of this Fiscal Year. Must be unique for this entity.
`status`	|	`string`	|	-	|	**Required** The status of this Fiscal Year. Valid values are 'OPEN', 'CLOSED' and 'REMOVED'
`syncGuid`	|	`string`	|	-	|	The budget service's key for this object.
`lastModified`  |   `datetime`  |   -   |   The UTC date and time when this object was last changed.  **READ ONLY**
`monthlyFiscalPeriods`	|	`Array[FiscalPeriod]`	|	-	|	 **Required** The list of monthly Fiscal Periods in this Fiscal Year. Fiscal periods must complete fill the parent Fiscal Year with no overlaps. 
`quarterlyFiscalPeriods`	|	`Array[FiscalPeriod]`	|	-	|	 The list of quarterly Fiscal Periods in this Fiscal Year.  If this parameter is not specified, quaterly Fiscal Periods are automatically generated based on the monthly Fiscal Periods supplied.  
`yearlyFiscalPeriods`	|	`Array[FiscalPeriod]`	|	-	|	 The list of yearly Fiscal Periods in this Fiscal Year.  If this parameter is not specified, one period is created that fills the Fiscal Year.
`customFiscalPeriods`	|	`Array[FiscalPeriod]`	|	-	|	 The list of custom Fiscal Periods in this Fiscal Year.  Custom Fiscal Periods are API-only and will not display on user budget dashboards.  
`fiscalPeriods`	|	`Array[FiscalPeriod]`	|	-	|	 The list of all Fiscal Periods in this Fiscal Year.  **READ ONLY**
`openAndClosedFiscalPeriods`	|	`Array[FiscalPeriod]`	|	-	|	 The list of all Fiscal Periods in this Fiscal Year, sorted by status.  **READ ONLY**

### FiscalPeriod

Name | Type | Format | Description
-----|------|--------|------------
`currentPeriod`	|	`boolean`	|	-	|	Is this the current Fiscal Period based on the current time?  **READ ONLY**
`startDate`	|	`date`	|	-	|	**Required** The start date for this Fiscal Period. Must be within the parent Fiscal Year. Format: YYYY-MM-DD
`endDate`	|	`date`	|	-	|	**Required** The end date for this Fiscal Year. Must be within the parent Fiscal Year. Format: YYYY-MM-DD
`name`	|	`string`	|	-	|	**Required** The name of this Fiscal Period. Must be unique for this entity.
`fiscalPeriodStatus`	|	`string`	|	-	|	**Required** The status of this Fiscal Period. Valid values are 'OPEN', 'CLOSED' and 'REMOVED'
`periodType`  | `string`    |   -   |   **Required** The type of Fiscal Period.  Valid values are 'MONTHLY', 'QUARTERLY', 'YEARLY', 'CUSTOM'
`fiscalYearSyncGuid`	|	`string`	|	-	|	The key of the parent Fiscal Year for this Fiscal Period.
`syncGuid`	|	`string`	|	-	|	The budget service's key for this object.
`spendDate` |   `date`  |   -   |   If the current date is after this Fiscal Period's start date, this field shows the current date.  **READ ONLY**

### Errors
HTTP Error Code | Description
---|---
`200`|`OK - Successful call, response is in body.`
`400`|`Bad Request - The request was determined to be invalid by the server. Possibly a validation failed on the data that was sent in the payload. For example, a new Fiscal Year must not have gaps in between other existing Fiscal Years. The response will have a list of validation errors in the body. See below for an example 400 response.`
`401`|`Unauthorized - The user could not be authenticated.`
`403`|`Forbidden - The user does not have the necessary permissions to perform the request`
`404`|`Not Found - The resource could not be found or does not exist`
`500`|`Server Error - Error message in response body`
`503`|`Server Timeout - Error message in response body`

### Example 400 Response with JSON

**Response**

```http
HTTP/1.1 400 Bad Request
Content-Type: application/json
```
```json
{
  "status" : false, 
  "errorMessageList" : 
  [
    {"errorType" : "ERROR", "errorCode" : "BUDGET.FISCAL_YEARS_HAVE_GAP", "errorMessage" : "Fiscal years should not have gaps between them"},
    {"errorType" : "ERROR", "errorCode" : "BUDGET.FISCAL_YEAR_NAME", "errorMessage" : "Fiscal Year Name is missing"},
    {"errorType" : "ERROR", "errorCode" : "BUDGET.FISCAL_PERIOD_TYPE_YEARLY_IN_USE", "errorMessage" : "Fiscal period type 'YEARLY' is in use and can not be removed"}
  ]
}
```
