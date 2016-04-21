---
title: Digital Tax Invoices
layout: reference
---

# Digital Tax Invoices

The Digital Tax Invoice web service allows digital tax invoice validators to view tax invoices and update them with a validation status. This web service currently supports the Comprobante Fiscal Digital (CFD) digital tax invoice format used in Mexico. Other countries may be supported in future releases.

* [Retrieve all digital tax invoices that can be validated by the user based on the search criteria](#get)
* [Retrieve a single digital tax invoice by ID](#getID)
* [Update a specified digital tax invoice](#put)
* [Schema](#schema)

### Version
3.0

## <a name="get"></a>Retrieve all digital tax invoices that can be validated by the user based on the search criteria

    GET  /api/v3.0/expense/digitaltaxinvoices

        
### Parameters

|Name | Type | Format | Description
|-----|------|--------|------------			
|`offset`	|	`query`	|	`string`	|	The starting point of the next set of results, after the limit specified in the limit field has been reached.
|`limit`	|	`query`	|	`Int32`	|	The number of records to return. Default value: 25
|`modifiedafter`	|	`query`	|	`string`	|	A modification date for the queue record; this parameter can be used to limit the results of the GET request to the queue items that have been added since the last time the validation company queried the queue. The user must have the Web Services Admin role to use this parameter.


### Request URL

```
https://www.concursolutions.com/api/v3.0/expense/digitaltaxinvoices?limit=5
```


## <a name="getID"></a>Retrieve a single digital tax invoice by ID

    GET  /api/v3.0/expense/digitaltaxinvoices{id}


### Parameters

|Name | Type | Format | Description
|-----|------|--------|------------
|`id`	|	`path`	|	`string`	|	**Required** The ID of the digital tax invoice.


### Request URL

```
https://www.concursolutions.com/api/v3.0/expense/digitaltaxinvoices/gWj3IHRYiHZGRTDN6y4r4LN3phszY33HT%24pQ
```


## <a name="put"></a>Update a specified digital tax invoice

    PUT  /api/v3.0/expense/digitaltaxinvoices{id}


### Parameters

|Name | Type | Format | Description
|-----|------|--------|------------
|`content`	|	`body`	|	-	|	**Required** A status update for the digital tax invoice.
|`id`	|	`path`	|	`string`	|	**Required** The ID of the digital tax invoice to update.


## <a name="schema"></a>Schema


### <a name="digitaltaxinvoices"></a>Digital Tax Invoices

|Name | Type | Format | Description
|-----|------|--------|------------
|`Items`	|	`array`	|[Digital Tax Invoice](#digitaltaxinvoice)	|	The result collection.
|`NextPage`	|	`string`	-	|	The URI of the next page of results, if any.


### <a name="digitaltaxinvoice"></a>Digital Tax Invoice

|Name | Type | Format | Description
|-----|------|--------|------------
|`ConcurReceiptID`	|	`string`|	-	|	**Required** The ID of the digital tax invoice in plain text.
|`ID`	|	`string`|	-	|	The unique identifier of the resource.
|`URI`	|	`string`|	-	|	The URI to the resource.
|`AccountID`	|	`string`|	-	|	**Required** The unique identifier assigned by the validation partner to the Concur client company that owns the digital tax invoices.
|`DocumentID`	|	`string`	|-	|	**Required** The ID of the report in plain text.
|`ReceiptData`	|	`string`|	-	|	**Required** The digital tax invoice data.

### Request URL

```
https://www.concursolutions.com/api/v3.0/expense/digitaltaxinvoices/gWj3IHRYiHZGUtIO83ILhbNHqCsjMmkvj%24pQ
```
