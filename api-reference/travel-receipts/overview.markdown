---
title: Technical Overview
layout: reference
---

# Technical Overview

The Travel Receipts service currently offers one endpoint for retrieving receipt requests. See below for information on the optional parameters and response schema.

* [Endpoint](#endpoint)
* [Schema](#schema)

## <a name="endpoint"></a>Endpoint
						
	GET  /api/v1/receiptrequests

### Parameters

Name | Type | Format | Description
-----|------|--------|------------
`ts`	|	`integer`	|	`int64`	|	The timestamp to specify a start time (if blank, defaults to last 24 hours)
`key`	|	`string`	|	`uuid`	|	The current item key, populated from the previous response (from the 'Next' field in the response)

### Example
_cURL:_

```shell
curl -H "Authorization: Bearer {YOUR ACCESS TOKEN}" https://us.api.concursolutions.com/api/v1/receiptrequests
```
						
## <a name="schema"></a>Schema							

### Response

Name | Type | Format | Description
-----|------|--------|------------
`Items`	|	`Array`	|	[Receipt Request](#receiptrequest)	|	An array of receipt request items
`Next`	|	`string`	|	-	|	Key for the next page of results


### <a name="receiptreuqewst"></a>Receipt Request
		
Name | Type | Format | Description
-----|------|--------|------------
`ConfirmationNumber`	|	`string`	|	-	|	Confirmation number for the receipt request
`FirstName`	|	`string`	|	-	|	First name of the guest for the receipt request
`LastName`	|	`string`	|	-	|	Last name of the guest for the receipt request
`RequestDate`	|	`date-time`	|	-	|	Date of the receipt request 
`RequestID`	|	`uuid`	|	-	|	ID for the receipt request
`SegmentEndDate`	|	`date-time`	|	-	|	End date for the receipt request segment
`SegmentStartDate`	|	`date-time`	|	-	|	Start date for the receipt request segment





