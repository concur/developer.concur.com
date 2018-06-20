---
title: Fiscal Year
layout: reference
---


# Fiscal Year
* [Overview](#overview)
* [Retrieve all Fiscal Years](#getall)
* [Retrieve a Fiscal Year](#get)
* [Create/Update a Fiscal Year](#post)
* [Remove a Fiscal Year](#delete)
* [Schema](#schema)

### Overview

The new Budget Service API is in **Beta** . If you are interested in using the Budget Service API, then please contact your account manager for further details. 

## Version
4.0  


## <a name="getall"></a>Retrieve all Fiscal Years

    GET  /budget/v4/fiscalYear

cURL:

```shell
curl -H "Authorization: Bearer {YOUR ACCESS TOKEN}" https://us.api.concursolutions.com/budget/v4/fiscalYear
```

HTTPie:

```shell
http https://us.api.concursolutions.com/budget/v4/fiscalYear 'Authorization:Bearer {YOUR ACCESS TOKEN}'
```

### Parameters

Name | Type | Format | Description
-----|------|--------|------------			
lastModifiedAfter	|	`datetime`	|	`query`	|	Use this field if you only want fiscal years that were changed after the supplied date.  The supplied date will be interpreted in the UTC time zone.  If lastModifiedAfter is not supplied, the service will return all fiscal years, regardless of modified date.  Format: YYYY-MM-DDTHH:MM:SS (Example: 2016-03-29T16:12:20) 
includeRemoved	|	`boolean`	|	`query`	|	 If this parameter is "true", the service will return all fiscal years, including those that were previously removed.  If not supplied, this field defaults to "false". 

### Response

[Fiscal Year Array](#fiscalyear)


## <a name="get"></a>Retrieve a Fiscal Year

    GET  /budget/v4/fiscalYear/{id} 
    
cURL:

```shell
curl -H "Authorization: Bearer {YOUR ACCESS TOKEN}" https://us.api.concursolutions.com/budget/v4/fiscalYear/{id} 
```

HTTPie:

```shell
http https://us.api.concursolutions.com/budget/v4/fiscalYear/{id} 'Authorization:Bearer {YOUR ACCESS TOKEN}'
```

### Parameters

Name | Type | Format | Description
-----|------|--------|------------			
id	|	`string`	|	`path`	|	The fiscal year's key field (sync guid).

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


## <a name="post"></a>Create/Update a Fiscal year

    POST  /budget/v4/fiscalYear

```shell
curl -v -X POST https://us.api.concursolutions.com/budget/v4/fiscalYear  \
-H "Authorization: Bearer {YOUR ACCESS TOKEN}" \
-H "Content-Type: application/json" \
-d @{PATH TO YOUR FISCAL YEAR JSON}
```

HTTPie:

```shell
http POST https://us.api.concursolutions.com/budget/v4/fiscalYear \
"Authorization:Bearer {YOUR ACCESS TOKEN}" \
"Content-Type: application/json" \
< {PATH TO YOUR FISCAL YEAR JSON}
```

*Note: unless there is a need to do so, the client should only specify monthly fiscal periods when creating/updating a 
fiscal year.  The system will auto-generate the quarterly and yearly fiscal periods.*

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
    ],
    "quarterlyFiscalPeriods":[],
    "yearlyFiscalPeriods":[],
    "customFiscalPeriods":[]
  }
]
```


## <a name="delete"></a>Delete a Fiscal Year

    DELETE  /budget/v4/fiscalYear/{id}

```shell
curl -v -X DELETE https://us.api.concursolutions.com/budget/v4/fiscalYear/{id}  \
-H "Authorization: Bearer {YOUR ACCESS TOKEN}" \
-H "Content-Type: application/json" \
```

```shell
http DELETE https://us.api.concursolutions.com/budget/v4/fiscalYear/{id} \
"Authorization:Bearer {YOUR ACCESS TOKEN}" \
"Content-Type: application/json" \
```


### Parameters

Name | Type | Format | Description
-----|------|--------|------------
id	|	`string`	|	`path`	|	The fiscal years's key field (sync guid).


## <a name="schema"></a>Schema

### <a name="fiscalyear"></a>FiscalYear

Name | Type | Format | Description
-----|------|--------|------------
`currentYear`	|	`boolean`	|	-	|	Is this the current fiscal year based on the current time?  **READ ONLY**
`startDate`	|	`date`	|	-	|	**Required** The start date for this fiscal year. The distance between start date and end date may not be more than two years. Format: YYYY-MM-DD 
`endDate`	|	`date`	|	-	|	**Required** The end date for this fiscal year. The distance between start date and end date may not be more than two years.  Format: YYYY-MM-DD
`name`	|	`datetime`	|	-	|	**Required** The name of this fiscal year. Must be unique for this entity.
`status`	|	`string`	|	-	|	**Required** The status of this fiscal year. Valid values are 'OPEN', 'CLOSED' and 'REMOVED'
`syncGuid`	|	`string`	|	-	|	The budget service's key for this object.
`lastModified`  |   `datetime`  |   -   |   The UTC date and time when this object was last changed.  **READ ONLY**
`monthlyFiscalPeriods`	|	`Array[FiscalPeriod]`	|	-	|	 **Required** The list of monthly fiscal periods in this fiscal year. Fiscal periods must complete fill the parent fiscal year with no overlaps. 
`quarterlyFiscalPeriods`	|	`Array[FiscalPeriod]`	|	-	|	 The list of quarterly fiscal periods in this fiscal year.  If this parameter is not specified, quaterly fiscal periods are automatically generated based on the monthly fiscal periods supplied.  
`yearlyFiscalPeriods`	|	`Array[FiscalPeriod]`	|	-	|	 The list of yearly fiscal periods in this fiscal year.  If this parameter is not specified, one period is created that fills the fiscal year.
`customFiscalPeriods`	|	`Array[FiscalPeriod]`	|	-	|	 The list of custom fiscal periods in this fiscal year.  Custom fiscal periods are API-only and will not display on user budget dashboards.  
`fiscalPeriods`	|	`Array[FiscalPeriod]`	|	-	|	 The list of all fiscal periods in this fiscal year.  **READ ONLY**
`openAndClosedFiscalPeriods`	|	`Array[FiscalPeriod]`	|	-	|	 The list of all fiscal periods in this fiscal year, sorted by status.  **READ ONLY**

### FiscalPeriod

Name | Type | Format | Description
-----|------|--------|------------
`currentPeriod`	|	`boolean`	|	-	|	Is this the current fiscal period based on the current time?  **READ ONLY**
`startDate`	|	`date`	|	-	|	**Required** The start date for this fiscal period. Must be within the parent fiscal year. Format: YYYY-MM-DD
`endDate`	|	`date`	|	-	|	**Required** The end date for this fiscal year. Must be within the parent fiscal year. Format: YYYY-MM-DD
`name`	|	`string`	|	-	|	**Required** The name of this fiscal period. Must be unique for this entity.
`fiscalPeriodStatus`	|	`string`	|	-	|	**Required** The status of this fiscal period. Valid values are 'OPEN', 'CLOSED' and 'REMOVED'
`periodType`  | `string`    |   -   |   **Required** The type of fiscal period.  Valid values are 'MONTHLY', 'QUARTERLY', 'YEARLY', 'CUSTOM'
`fiscalYearSyncGuid`	|	`string`	|	-	|	The key of the parent fiscal year for this fiscal period.
`syncGuid`	|	`string`	|	-	|	The budget service's key for this object.
`spendDate` |   `date`  |   -   |   If the current date is after this fiscal period's start date, this field shows the current date.  **READ ONLY**
