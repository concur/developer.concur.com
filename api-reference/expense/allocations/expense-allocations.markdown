---
title: Allocations
layout: reference
---

# Allocations

This resource can be used to retrieve information about the allocations that are associated with an entry in an expense report. v3.0


* [Retrieve all allocations per entry or report](#get)
* [Retrieve a single allocation by ID](#getID)
* [Schema](#schema)

### Version
3.0

## <a name="get"></a>Retrieve all allocations per entry or report

    GET  /api/v3.0/expense/allocations
        
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

###Request URL
```
https://www.concursolutions.com/api/v3.0/expense/allocations?limit=5&user=ALL
```

###XML Example of a successful response
```
<Allocations xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
  <Items>
    <Allocation>
      <ID>gWmudeHM8AuFikny3Hrpz$s2gaNvc0E7Xfyw</ID>
      <URI>https://www.concursolutions.com/api/v3.0/expense/allocations/gWmudeHM8AuFikny3Hrpz$s2gaNvc0E7Xfyw</URI>
      <EntryID>gWidFO7ikXSy7gHnNngC12jkL7khMiREv4g</EntryID>
      <Percentage>100.00000000</Percentage>
      <IsPercentEdited>false</IsPercentEdited>
      <IsHidden>true</IsHidden>
      <AccountCode1>1</AccountCode1>
      <AccountCode2 xsi:nil="true" />
      <Custom1 xsi:nil="true" />
      <Custom2 xsi:nil="true" />
      <Custom3 xsi:nil="true" />
      <Custom4 xsi:nil="true" />
      <Custom5 xsi:nil="true" />
      <Custom6 xsi:nil="true" />
      <Custom7 xsi:nil="true" />
      <Custom8 xsi:nil="true" />
      <Custom9 xsi:nil="true" />
      <Custom10 xsi:nil="true" />
      <Custom11 xsi:nil="true" />
      <Custom12 xsi:nil="true" />
      <Custom13 xsi:nil="true" />
      <Custom14 xsi:nil="true" />
      <Custom15 xsi:nil="true" />
      <Custom16 xsi:nil="true" />
      <Custom17 xsi:nil="true" />
      <Custom18 xsi:nil="true" />
      <Custom19 xsi:nil="true" />
      <Custom20 xsi:nil="true" />
    </Allocation>
```


## <a name="getID"></a>Retrieve a single allocation by ID

    GET  /api/v3.0/expense/allocations/{id}


### Parameters

|Name | Type | Format | Description|
|-----|------|--------|------------|
|`id`|`string`|`path`|**Required** The unique identifier for the allocation.
|`user`|`string`|`query`|The login ID of the user who owns the allocation. The user must have the Web Services Admin role to use this parameter.|

###Request URL
```
https://www.concursolutions.com/api/v3.0/expense/allocations/gWmudeHM8AuFhxez1E72ExJPksvTH0KPPyw?user=<Web_Services_Admin_Login>
```

###XML Example of a successful response
```
<Allocation xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
  <ID>gWmudeHM8AuFhxez1E72ExJPksvTH0KPPyw</ID>
  <URI>https://www.concursolutions.com/api/v3.0/expense/allocations/gWmudeHM8AuFhxez1E72ExJPksvTH0KPPyw</URI>
  <EntryID>gWidFO7ikXSy41$smPkwdC5cL1aku$pSgc$p4g</EntryID>
  <Percentage>100.00000000</Percentage>
  <IsPercentEdited>false</IsPercentEdited>
  <IsHidden>true</IsHidden>
  <AccountCode1>1</AccountCode1>
  <AccountCode2 xsi:nil="true" />
  <Custom1 xsi:nil="true" />
  <Custom2 xsi:nil="true" />
  <Custom3 xsi:nil="true" />
  <Custom4 xsi:nil="true" />
  <Custom5 xsi:nil="true" />
  <Custom6 xsi:nil="true" />
  <Custom7 xsi:nil="true" />
  <Custom8 xsi:nil="true" />
  <Custom9 xsi:nil="true" />
  <Custom10 xsi:nil="true" />
  <Custom11 xsi:nil="true" />
  <Custom12 xsi:nil="true" />
  <Custom13 xsi:nil="true" />
  <Custom14 xsi:nil="true" />
  <Custom15 xsi:nil="true" />
  <Custom16 xsi:nil="true" />
  <Custom17 xsi:nil="true" />
  <Custom18 xsi:nil="true" />
  <Custom19 xsi:nil="true" />
  <Custom20 xsi:nil="true" />
</Allocation>
```

## <a name="schema"></a>Schema

### <a name="vendors"></a>Allocations

|Name | Type | Format | Description|
|-----|------|--------|------------|
|`Items`|`array`|[`Allocation`](#allocations)|The result collection.
|`NextPage`|`string`|-|The URI of the next page of results, if any.|

### <a name="allocations"></a>Allocations

|Name | Type | Format | Description|
|-----|------|--------|------------ |
|`AccountNumber`|`string`|-|The primary accounting code assigned to the expense type associated with this allocation. Typically, expense types have only a primary account code.
|`AccountCode2`|`string`|-|The secondary or alternative accounting code assigned to the expense type associated with this allocation.
|`Custom1 through Custom20`|`CustomFieldExtension`|-|A custom field associated with the allocation. This field may or may not have data, depending on how Expense is configured. Format: Text field. Maximum length: 64 characters.
|`EntryID`|`string`|-|The unique identifier for the expense entry.
|`ID`|`string`|-|The unique identifier of the resource.
|`IsHidden`|`Boolean`|-|Indicates whether the allocation is hidden. Format: true or false
|`IsPercentEdited`|`Boolean`|-|Indicates whether the percentage has been edited. Format: true or false
|`Percentage`|`string`|-|The percentage of the expense that is included in this allocation.
|`URI`|`string`|-|The URI to the resource.|



### <a name="status"></a>Custom Field

|Name | Type | Format | Description|
|-----|------|--------|------------|
|`Code`|`string`|-|For list fields, this is the list item code.
|`Label`|`string`|-|The label value for the custom field.
|`ListItemID`|`string`|-|For list fields, this is the list item ID.
|`Sequence`|`integer`|-|The sequence value for this custom field i.e. the order in which this field appears on the form.
|`Type`|`string`|-|The custom field type. Possible values: Amount, Boolean, ConnectedList, Date, Integer, List, Number, Text
|`Value`|`string`|-|The value in the Org Unit or Custom field. For list fields, this is the name of the list item. Maximum length: 48 characters|


