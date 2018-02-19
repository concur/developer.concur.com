---
title: Fiscal Year
layout: reference
---


# Fiscal Year
* [Retrieve all Fiscal Years](#getall)
* [Retrieve a Fiscal Year](#get)
* [Create/Update a Fiscal Year](#post)
* [Remove a Fiscal Year](#delete)
* [Schema](#schema)


## Version
3.0  


## <a name="getall"></a>Retrieve all Fiscal Years

    GET  /budget/v4/fiscalYear

### Parameters

Name | Type | Format | Description
-----|------|--------|------------			
lastModifiedAfter	|	`datetime`	|	`query`	|	Use this field if you only want fiscal years that were changed after the supplied date.  The supplied date will be interpreted in the UTC time zone.  If lastModifiedAfter is not supplied, the service will return all fiscal years, regardless of modified date.  Format: YYYY-MM-DDTHH:MM:SS (Example: 2016-03-29T16:12:20) 
includeRemoved	|	`boolean`	|	`query`	|	 If this parameter is "true", the service will return all fiscal years, including those that were previously removed.  If not supplied, this field defaults to "false". 


## <a name="get"></a>Retrieve a Fiscal Year

    GET  /budget/v4/fiscalYear/{id} 

### Parameters

Name | Type | Format | Description
-----|------|--------|------------			
id	|	`string`	|	`path`	|	The fiscal year's key field (sync guid).


## <a name="post"></a>Create/Update a Fiscal year

    POST  /budget/v4/fiscalYear


### Parameters

Name | Type | Format | Description
-----|------|--------|------------
`fiscalYear`	|	-	|	`body`	|	**Required** A JSON representation of a Fiscal Year


## <a name="delete"></a>Delete a Fiscal Year

    DELETE  /budget/v4/fiscalYear/{id}


### Parameters

Name | Type | Format | Description
-----|------|--------|------------
id	|	`string`	|	`path`	|	The fiscal years's key field (sync guid).


## <a name="schema"></a>Schema


### FiscalYear

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
`customFiscalPeriods`	|	`Array[FiscalPeriod]`	|	-	|	 The list of custom fiscal periods in this fiscal year.  
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
