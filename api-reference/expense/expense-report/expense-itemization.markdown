---
title: Itemizations
layout: reference
---


#  Itemizations

* [Retrieve all expense itemizations owned by the user](#get)
* [Retrieve an expense itemization by ID](#getID)
* [Create a new expense itemization](#post)
* [Update an expense itemization](#put)
* [Delete an expense itemization](#delete)
* [Schema](#schema)


## Version

3.0  

1.1 documentation is available [here](/api-reference-deprecated/version-one-one/expense-entry-itemization/expense-entry-itemization-resource.html)  



## <a name="get"></a>Retrieve all expense itemizations owned by the user

    GET  /api/v3.0/expense/itemizations

        
### Parameters

Name | Type | Format | Description
-----|------|--------|------------			
`reportID`	|	`string`	|	`query`	|	The report ID of the itemizations to be retrieved. Use the GET /expense/reportdigests function to find the report ID. Format: An alpha-numeric `string`
`entryID`	|	`string`	|	`query`	|	The entry ID for the itemizations to be retrieved. Use the GET /expense/entries endpoint to learn the valid entry ID.
`expenseTypeCode`	|	`string`	|	`query`	|	The expense type code for the itemizations to be retrieved.
`offset`	|	`string`	|	`query`	|	The starting point of the next set of results, after the limit specified in the limit field has been reached.
`limit`	|	`Int32`	|	`query`	|	The number of records to return. Default value: 25
`user`	|	`string`	|	`query`	|	The login ID of the user who owns the itemizations. The user must have the Web Services Admin role to use this parameter.


### Request URL

```
https://www.concursolutions.com/api/v3.0/expense/itemizations?limit=10&user=ALL
```

### JSON example of a successful response

```
{
  "Items": [
    {
      "EntryID": "gWidFO7ikXSy55WZOaAXv8JRfFkruCwrP4g",
      "ReportID": "F4F027007E814C1CA70E",
      "ReportOwnerID": "CAtraveler@concurconnect2.com",
      "ExpenseTypeCode": "LODTX",
      "ExpenseTypeName": "Hotel Tax",
      "SpendCategoryCode": "LODGA",
      "SpendCategoryName": "Lodging - Track Room Rate Spending",
      "TransactionDate": "2013-08-07T00:00:00",
      "TransactionAmount": 20,
      "PostedAmount": 20,
      "ApprovedAmount": 20,
      "LocationID": "gWqWg2EhaUtcIW$s2pMbTGM8W81u2qcfX94w",
      "LocationName": "Montreal, Quebec",
      "LocationSubdivision": "Quebec",
      "LocationCountry": "CA",
      "Description": "test",
      "IsPersonal": false,
      "IsBillable": false,
      "IsImageRequired": false,
      "AllocationType": "N",
      "HasComments": false,
      "HasExceptions": false,
      "LastModified": "2013-09-02T19:40:48.877",
      "OrgUnit1": null,
      "OrgUnit2": null,
      "OrgUnit3": null,
      "OrgUnit4": null,
      "OrgUnit5": null,
      "OrgUnit6": null,
      "Custom1": null,
      "Custom2": null,
      "Custom3": null,
      "Custom4": null,
      "Custom5": null,
      "Custom6": null,
      "Custom7": null,
      "Custom8": null,
      "Custom9": null,
      "Custom10": null,
      "Custom11": null,
      "Custom12": null,
      "Custom13": null,
      "Custom14": null,
      "Custom15": null,
      "Custom16": null,
      "Custom17": null,
      "Custom18": null,
      "Custom19": null,
      "Custom20": null,
      "Custom21": null,
      "Custom22": null,
      "Custom23": null,
      "Custom24": null,
      "Custom25": null,
      "Custom26": null,
      "Custom27": null,
      "Custom28": null,
      "Custom29": null,
      "Custom30": null,
      "Custom31": null,
      "Custom32": null,
      "Custom33": null,
      "Custom34": null,
      "Custom35": null,
      "Custom36": null,
      "Custom37": null,
      "Custom38": null,
      "Custom39": null,
      "Custom40": null,
      "ID": "gWidFO7ikXSy$seMkLiQismjUIYkxYzCsf4g",
      "URI": "https://www.concursolutions.com/api/v3.0/expense/itemizations/gWidFO7ikXSy$seMkLiQismjUIYkxYzCsf4g"
    }
```

## <a name="getID"></a>Retrieve an expense itemization by ID

    GET  /api/v3.0/expense/itemizations/{id}


### Parameters

Name | Type | Format | Description
-----|------|--------|------------
`id`	|	`string`	|	`path`	|	**Required** The ID of the expense itemization.
`user`	|	`string`	|	`query`	|	The login ID of the user who owns the itemizations. The user must have the Web Services Admin role to use this parameter.


### Request URL

```
https://www.concursolutions.com/api/v3.0/expense/itemizations/gWidFO7ikXV6%24pcZsso2aBN0Aad4P5i8bjCg
```

### JSON example of a successful response

```
{
  "EntryID": "gWidFO7ikXV6$sQxTtWGQsIhawC4KoyssTCg",
  "ReportID": "39BD9F7C5C3F4986A6A5",
  "ReportOwnerID": "jimadmin@concurconnect2.com",
  "ExpenseTypeCode": "LODTX",
  "ExpenseTypeName": "Hotel Tax",
  "SpendCategoryCode": "LODGA",
  "SpendCategoryName": "Lodging - Track Room Rate Spending",
  "TransactionDate": "2016-04-21T00:00:00",
  "TransactionAmount": 20,
  "PostedAmount": 20,
  "ApprovedAmount": 20,
  "LocationID": "gWqWg2EhcUKB$sottpx8eODvjn1$pWvWfG15A",
  "LocationName": "Bellevue, Washington",
  "LocationSubdivision": "Washington",
  "LocationCountry": "US",
  "Description": null,
  "IsPersonal": false,
  "IsBillable": false,
  "IsImageRequired": false,
  "AllocationType": "N",
  "HasComments": false,
  "HasExceptions": false,
  "LastModified": "2016-04-22T22:19:55.213",
  "OrgUnit1": null,
  "OrgUnit2": null,
  "OrgUnit3": null,
  "OrgUnit4": null,
  "OrgUnit5": null,
  "OrgUnit6": null,
  "Custom1": null,
  "Custom2": null,
  "Custom3": null,
  "Custom4": null,
  "Custom5": null,
  "Custom6": null,
  "Custom7": null,
  "Custom8": null,
  "Custom9": null,
  "Custom10": null,
  "Custom11": null,
  "Custom12": null,
  "Custom13": null,
  "Custom14": null,
  "Custom15": null,
  "Custom16": null,
  "Custom17": null,
  "Custom18": null,
  "Custom19": null,
  "Custom20": null,
  "Custom21": null,
  "Custom22": null,
  "Custom23": null,
  "Custom24": null,
  "Custom25": null,
  "Custom26": null,
  "Custom27": null,
  "Custom28": null,
  "Custom29": null,
  "Custom30": null,
  "Custom31": null,
  "Custom32": null,
  "Custom33": null,
  "Custom34": null,
  "Custom35": null,
  "Custom36": null,
  "Custom37": null,
  "Custom38": null,
  "Custom39": null,
  "Custom40": null,
  "ID": "gWidFO7ikXV6$pcZsso2aBN0Aad4P5i8bjCg",
  "URI": "https://www.concursolutions.com/api/v3.0/expense/itemizations/gWidFO7ikXV6$pcZsso2aBN0Aad4P5i8bjCg"
}
```


## <a name="post"></a>Create a new expense itemization

    POST  /api/v3.0/expense/itemizations


### Parameters

Name | Type | Format | Description
-----|------|--------|------------
`content`	|	-	|	`body`	|	**Required** The expense itemization object to create.


### Request URL

```
https://www.concursolutions.com/api/v3.0/expense/itemizations
```

### JSON example of a successful response

```
{
  "ID": "gWidFO7ikXV69FISvVWPbHe1Oj4FbCd0DCg",
  "URI": "https://www.concursolutions.com/api/v3.0/expense/itemizations/gWidFO7ikXV69FISvVWPbHe1Oj4FbCd0DCg"
}
```


## <a name="put"></a>Update an expense itemization

    PUT  /api/v3.0/expense/itemizations/{id}


### Parameters

Name | Type | Format | Description
-----|------|--------|------------
`id`	|	`string`	|	`path`	|	**Required** The ID of the expense itemization
`content`	|	-	|	`body`	|	**Required** The partial or complete expense itemization object to update.


### Request URL
```
https://www.concursolutions.com/api/v3.0/expense/itemizations/gWidFO7ikXV6%24pcZsso2aBN0Aad4P5i8bjCg
```

### JSON example of a successful response

```
no content
```

## <a name="delete"></a>Delete an expense itemization

    DELETE  /api/v3.0/expense/itemizations/{id}


### Parameters

Name | Type | Format | Description
-----|------|--------|------------
`id`	|	`string`	|	`path`	|	**Required** The ID of the expense itemization to delete.
`user`	|	`string`	|	`query`	|	**Required** The login ID of the user who owns the itemizations. The user must have the Web Services Admin role to use this parameter.



### Request URL

```
https://www.concursolutions.com/api/v3.0/expense/itemizations/gWidFO7ikXV6%24pcZsso2aBN0Aad4P5i8bjCg
```

### JSON example of a successful response

```
no content
```

## <a name="schema"></a>Schema


### <a name="itemizations"></a>Itemizations

Name | Type | Format | Description
-----|------|--------|------------
`Items`	|	`array`	|	[Itemization](#itemization)	|	The result collection.
`NextPage`	|	`string`	|	-	|	The URI of the next page of results, if any.


### <a name="itemization"></a>Itemization

Name | Type | Format | Description
-----|------|--------|------------
`AllocationType`	|	`string`	|	-	|	The type of allocation for the itemization. Possible values: P - partial allocation, F - full allocation, N - no allocation. Use the GET /expense/allocations function to get information about this entry's allocations.
`ApprovedAmount`	|	`Decimal`	|	-	|	The approved amount of the expense itemization, in the report currency.
`Custom1 through Custom 40`	|	`CustomField`	|	-	|	The details from the Custom fields. These fields may not have data, depending on the configuration. If the form field is configured as a List data type, the value will be the item code for this list. Use the GET /common/listitems operation to learn the item name. Maximum length: 64 characters
`Description`	|	`string`	|	-	|	The description of the expense. Maximum length: 64 characters
`EntryID`	|	`string`	|	-	|	**Required** The ID of the expense entry that is the parent for the itemization. Use the GET /expense/entries endpoint to learn the entry ID for the expense itemizations.
`ExpenseTypeCode`	|	`string`	|	-	|	**Required** The code for the expense type. Use the GET /expense/expensegroupconfigurations endpoint to learn the expense type code for expense types that are active for this report's policy.
`ExpenseTypeName`	|	`string`	|	-	|	**Required** The name of the expense type, localized to the user's language.
`HasComments`	|	`Boolean`	|	-	|	Indicates whether the expense has comments. Use the GET ExpenseEntryComments endpoint to get information about this entry's comments. Format: true or false
`HasExceptions`	|	`Boolean`	|	-	|	Indicates whether the expense has exceptions. Format: true or false
`ID`	|	`string`	|	-	|	The unique identifier of the resource.
`IsBillable`	|	`Boolean`	|	-	|	Indicates whether the itemization is billable. Format: true or false
`IsImageRequired`	|	`Boolean`	|	-	|	Indicates whether a receipt image is required for the entry. Format: true or false
`IsPersonal`	|	`Boolean`	|	-	|	Indicates whether the itemization is personal (that is, non-reimbursable). Format: true or false
`LastModified`	|	`DateTime`	|	-	|	The UTC date when the itemization was last modified.
`LocationCountry`	|	`string`	|	-	|	The country where the expense was incurred. Format: 2-letter ISO 3166-1 country code
`LocationID`	|	`string`	|	-	|	The unique identifier for the location where the expense was incurred. Use the GET /common/locations function to get information for this location.
`LocationName`	|	`string`	|	-	|	The location where the expense was incurred, usually the city name.
`LocationSubdivision`	|	`string`	|	-	|	The state, province, or other country subdivision where the expense was incurred. Format: ISO 3166-2:2007 country subdivision
`OrgUnit1 through OrgUnit6`	|	`CustomField`	|	-	|	The details from the Org Unit fields. These fields may not have data, depending on the configuration. If the form field is configured as a List data type, the value will be the item code for this list. Use the GET /common/listitems operation to learn the item name. Maximum length: 64 characters
`PostedAmount`	|	`Decimal`	|	-	|	The amount of the expense itemization, in the report currency.
`ReportID`	|	`string`	|	-	|	**Required** The ID of the report that is the parent for the itemization. Use the GET /expense/reportdigests endpoint to learn the report ID for the itemizations.
`ReportOwnerID`	|	`string`	|	-	|	**Required** The login ID for the report owner. Use the GET User Information endpoint to learn details about this user.
`SpendCategoryCode`	|	`string`	|	-	|	**Required** The code for the spending category that is specified for this itemization.
`SpendCategoryName`	|	`string`	|	-	|	**Required** The name of the spending category that is specified for this itemization, localized to the user's language.
`TransactionAmount`	|	`Decimal`	|	-	|	The amount of the expense itemization, in the transaction currency of the parent expense entry.
`TransactionDate`	|	`DateTime`	|	-	|	**Required** The date when the good or service associated with this itemization was provided. Format: YYYY-MM-DD
`URI`	|	`string`	|	-	|	The URI to the resource.

### <a name="customfield"></a>Custom Field

Name | Type | Format | Description
-----|------|--------|------------
`Code`	|	`string`	|	-	|	For list fields, this is the list item code.
`ListItemID`	|	`string`	|	-	|	For list fields, this is the list item ID.
`Type`	|	`string`	|	-	|	The custom field type. Possible values: Amount, Boolean, ConnectedList, Date, Integer, List, Number, Text
`Value`	|	`string`	|	-	|	The value in the Org Unit or Custom field. For list fields, this is the name of the list item. Maximum length: 48 characters
