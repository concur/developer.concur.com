---
title: Allocations
layout: reference
---

# Allocations

This resource can be used to retrieve information about the allocations that are associated with an entry in an expense report. v3.0


* [Retrieve all allocations per entry or report](#get)
* [Retrieve a single allocation by ID](#getID)
* [Schema](#schema)

## <a name="get"></a>Retrieve all allocations per entry or report
    GET /expense/allocations
        
### Parameters

|Name | Type | Format | Description|
|-----|------|--------|------------|
|`limit`|`Int32`|`query`|The number of records to return. The default is 25 and the maximum is 100.
|`offset`|`string`|`query`|The starting point of the next set of results, after the limit specified in the limit field has been reached.
|`repordID`|`string`|`query`|The unique identifier for the report as it appears in the Concur Expense UI. Format: A variable-length string. Maximum length: 32 characters.
|`entryID`|`string`|`query`|The unique identifier for the expense entry.
|`itemizationID`|`string`|`query`|The unique identifier for the expense itemization.
|`user`|`string`|`query`|The login ID of the user who owns the allocation. The user must have the Web Services Admin role to use this parameter.|


### Response

[Allocations Schema](#schema)
## <a name="getID"></a>Retrieve a single allocation by ID
    GET /expense/allocations{id}


### Parameters

|Name | Type | Format | Description|
|-----|------|--------|------------|
|`id`|`string`|`path`|**Required** The unique identifier for the allocation.
|`user`|`string`|`query`|The login ID of the user who owns the allocation. The user must have the Web Services Admin role to use this parameter.|



## <a name="schema"></a>Schema

###<a name="vendors"></a>Allocations

|Name | Type | Format | Description|
|-----|------|--------|------------|
|`Items`|`array`|[`Allocation`](#allocations)|The result collection.
|`NextPage`|`string`|-|The URI of the next page of results, if any.|

###<a name="allocations"></a>Allocations

|Name | Type | Format | Description|
|-----|------|--------|------------ |
|`AccountNumber`|`string`|-|The primary accounting code assigned to the expense type associated with this allocation. Typically, expense types have only a primary account code.
|`AccountCode2`|`string`|-|The secondary or alternative accounting code assigned to the expense type associated with this allocation.
|`Custom1 through Custom20`|`CustomField`|-|A custom field associated with the allocation. This field may or may not have data, depending on how Expense is configured. Format: Text field. Maximum length: 64 characters.
|`EntryID`|`string`|-|The unique identifier for the expense entry.
|`ID`|`string`|-|The unique identifier of the resource.
|`IsHidden`|`Boolean`|-|Indicates whether the allocation is hidden. Format: true or false
|`IsPercentEdited`|`Boolean`|-|Indicates whether the percentage has been edited. Format: true or false
|`Percentage`|`string`|-|The percentage of the expense that is included in this allocation.
|`URI`|`string`|-|The URI to the resource.|



###<a name="status"></a>Custom Field

|Name | Type | Format | Description|
|-----|------|--------|------------|
|`Code`|`string`|-|For list fields, this is the list item code.
|`ListItemID`|`string`|-|For list fields, this is the list item ID.
|`Type`|`string`|-|The custom field type. Possible values: Amount, Boolean, ConnectedList, Date, Integer, List, Number, Text
|`Value`|`string`|-|The value in the Org Unit or Custom field. For list fields, this is the name of the list item. Maximum length: 48 characters|


