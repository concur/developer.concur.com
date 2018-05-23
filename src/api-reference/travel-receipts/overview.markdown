---
title: Technical Overview
layout: reference
---

# Technical Overview

The Travel Receipts service currently offers one endpoint for retrieving receipt requests. See below for information on the optional parameters, results pagination, and response schema.

* [Endpoint](#endpoint)
* [Pagination](#pagination)
* [Schema](#schema)

## <a name="endpoint"></a>Endpoint
						
	GET  /travelreceipts/v1/receiptrequests/{ts}/{key}

### Parameters

Name | Type | Format | Description
-----|------|--------|------------
`ts`	|	`integer`	|	`int64`	|	Optional parameter for the timestamp to specify a start time (if blank, defaults to last 24 hours)
`key`	|	`string`	|	`uuid`	|	Optional parameter for the current item key, populated from the previous response (from the `next` field in the response)

### Example
_cURL:_

```shell
curl -H "Authorization: Bearer {YOUR ACCESS TOKEN}" https://us.api.concursolutions.com/travelreceipts/v1/receiptrequests
```

## <a name="pagination"></a>Pagination

The results of the API call are limited to a maximum of 25 receipt requests per page. The partner can navigate to the next page of results through the `next` field in the response. Each page keeps the same timestamp but will have a different key. The partner reached the last page of results when `next` is null/empty.

## <a name="schema"></a>Schema							

### Response

Name | Type | Format | Description
-----|------|--------|------------
`Items`	|	`Array`	|	[Receipt Request](#receiptrequest)	|	An array of Receipt Request items
`Next`	|	`string`	|	-	|	Key for the next page of results


### <a name="receiptrequest"></a>Receipt Request
		
Name | Type | Format | Description
-----|------|--------|------------
`ConfirmationNumber`	|	`string`	|	-	|	Confirmation number for the receipt request
`FirstName`	|	`string`	|	-	|	First name of the guest for the receipt request
`LastName`	|	`string`	|	-	|	Last name of the guest for the receipt request
`RequestDate`	|	`date-time`	|	ISO 8601	|	Date of the receipt request
`RequestID`	|	`uuid`	|	-	|	ID for the receipt request
`SegmentEndDate`	|	`date-time`	|	ISO 8601	|	End date for the receipt request segment
`SegmentStartDate`	|	`date-time`	|	ISO 8601	|	Start date for the receipt request segment
`Vendor`	|	`string`	|	-	|	Vendor code for the receipt request




