---
title: Cost Object Field
layout: reference
---


# Cost Object Field Definition
* [Retrieve all Cost Object Field](#getall)
* [Retrieve a Cost Object Field](#get)
* [Create/Update a Cost Object Field](#post)
* [Remove a Cost Object Field](#delete)
* [Schema](#schema)


## Version
3.0  


## <a name="getall"></a>Retrieve all Cost Object Fields

    GET  /budget/v4/costObjectField

### Parameters


## <a name="get"></a>Retrieve a Cost Object Field

    GET  /budget/v4/costObjectField/{id} 

### Parameters

Name | Type | Format | Description
-----|------|--------|------------			
id	|	`string`	|	`path`	|	The cost object field's key field (sync guid).


## <a name="post"></a>Create/Update a Cost Object Field

    POST  /budget/v4/costObjectField


### Parameters

Name | Type | Format | Description
-----|------|--------|------------
`costObjectField`	|	-	|	`body`	|	**Required** A JSON representation of a cost object field


## <a name="delete"></a>Delete a Cost Object Field

    DELETE  /budget/v4/costObjectField/{id}


### Parameters

Name | Type | Format | Description
-----|------|--------|------------
id	|	`string`	|	`path`	|	The cost object field's key field (sync guid).


## <a name="schema"></a>Schema


### CostObjectField

Name | Type | Format | Description
-----|------|--------|------------
`budgetSequenceNumber`	|	`string`	|	-	|	The sequence/order in which Cost Object field definition appears in the budget UI.
`dataType`	|	`string`	|	-	|	**Required** The data type of this field or field collection.  Valid values are LIST, MLIST, and VARCHAR
`costObjectFieldDefinitions`    |   `Array[CostObjectFieldDefinition]`  |   -   |   **Required** The list of field defintion(s) that make up this field.  Should be a single entry for VARCHAR or LIST and can be one or more entries for MLIST. 
`lastModifiedDate`	|	`datetime`	|	-	|	The last time the cost object was updated.  Date is in GMT **READ ONLY**
`status`	|	`string`	|	-	|	**Required** The status of this cost object field. Valid options are OPEN and REMOVED.
`syncGuid`	|	`string`	|	-	|	The budget service's key for this object.
`listSyncGuid` |   `string`  |   -   |    If the dataType of this item is LIST or MLIST, this is the id of the list definition from Concur's list service.


### CostObjectFieldDefinition

Name | Type | Format | Description
-----|------|--------|------------
`connectedListSequenceNumber`	|	`string`	|	-	|	 If the parent cost object field is an MLIST, this field specifies the order in which the individual field definitions should appear on the UI and the order in which they should pull their connected lists from the Concur list service.
`costObjectMappings`    |   `CostObjectMapping` |   -   |   A list of mappings from this field definition to the fields on the spending items that we want to match.
`ctrlType`	|	`string`	|	-	|   The UI control type of this cost object field definiton.  Valid values are PICK_LIST, LIST_EDIT, EDIT 	
`defaultItemKey`	|	`string`	|	-	|   The list item key value of the cost object field definition if this field is a list.	
`defaultValue`	|	`string`	|	-	|	The default value of this field.
`displayName`	|	`string`	|	-	|	**Required** The user-facing name
`hierarchyCode`	|	`string`	|	-	|	The key value that we'll use to pass in this field value in budget items and spending items. If this is not supplied, it defaults to the next available integer.
`lastModifiedDate`	|	`datetime`	|	-	|	The last time this cost object definition was updated.  Date is in GMT **READ ONLY**
`status`	|	`string`	|	-	|	**Required** The status of this cost object field. Valid options are OPEN and REMOVED.
`syncGuid`	|	`string`	|	-	|	The budget service's key for this object.

### CostObjectMapping

Name | Type | Format | Description
-----|------|--------|------------
`featureTypeCode`	|	`string`	|	-	|	 **Required** The product of the field we're mapping to.  Valid values are REQUEST, TRAVEL, EXPENSE, PAYMENT_REQUEST, and PURCHASE_REQUEST.
`lastModifiedDate`	|	`datetime`	|	-	|	The last time this cost object definition was updated.  Date is in GMT **READ ONLY**
`productFieldId`    |   `string` |   -   |   The Concur forms and fields for the id we're mapping.
`spendingItemLevel`	|	`string`	|	-	|   **Required** The location inside the feature of the field we're mapping.  Valid values are HEADER, DETAIL, and ALLOCATION
`status`	|	`string`	|	-	|	**Required** The status of this cost object mapping. Valid options are OPEN and REMOVED.
`syncGuid`	|	`string`	|	-	|	The budget service's key for this object.
