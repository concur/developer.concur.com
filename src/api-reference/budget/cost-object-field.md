---
title: Budget
layout: reference
---


# Budget Tracking Field Definition
* [Retrieve all Budget Tracking Field](#getall)
* [Retrieve a Budget Tracking Field](#get)
* [Create/Update a Budget Tracking Field](#post)
* [Remove a Budget Tracking Field](#delete)
* [Schema](#schema)


## Version
4.0  


## <a name="getall"></a>Retrieve all Budget Tracking Fields

    GET  /budget/v4/costObjectField

### Parameters

    N/A
    
### Response

[Budget Tracking Field Array](#costobjectfield)


## <a name="get"></a>Retrieve a Budget Tracking Field

    GET  /budget/v4/costObjectField/{id} 

### Parameters

Name | Type | Format | Description
-----|------|--------|------------			
id	|	`string`	|	`path`	|	The budget tracking field's key field (sync guid).

### Response

[Budget Tracking Field](#costobjectfield)

### Example JSON Response

```json
{
  "syncGuid":"2c3dc4dc-130e-4524-91d7-a20dd4bc62e4",
  "dataType":"VARCHAR",
  "listSyncGuid":null,
  "lastModifiedDate":"2018-03-22 00:54:09",
  "status":"OPEN",
  "budgetSequenceNumber":1,
  "costObjectFieldDefinitions":[
    {
      "syncGuid":"9aea2524-a04e-44dd-a85b-cfdd5ae4cbeb",
      "defaultItemKey":null,
      "displayName":"Cost Tracking Code",
      "ctrlType":"EDIT",
      "defaultValue":"TextField",
      "lastModifiedDate":"2017-03-22 00:54:09",
      "connectedListSequenceNumber":1,
      "status":"OPEN",
      "hierarchyCode":"1",
      "costObjectMappings":[
        {
          "syncGuid":"8c519342-462a-4b44-931f-fcaba871e13a",
          "featureTypeCode":"PAYMENT_REQUEST",
          "spendingItemLevel":"HEADER",
          "productFieldId":"Custom4",
          "mappingValue":null,
          "mappingType":"FIELD",
          "lastModifiedDate":"2017-10-15 05:04:53",
          "status":"OPEN"
        },
        {
          "syncGuid":"6d821832-c149-4ba2-b27b-1a03576aa64d",
          "featureTypeCode":"EXPENSE",
          "spendingItemLevel":"HEADER",
          "productFieldId":"Custom5",
          "mappingValue":null,
          "mappingType":"FIELD",
          "lastModifiedDate":"2017-10-15 05:04:53",
          "status":"OPEN"
        }
      ]
    }
  ]
}
```


## <a name="post"></a>Create/Update a Budget Tracking Field

    POST  /budget/v4/costObjectField

### Parameters

Name | Type | Format | Description
-----|------|--------|------------
`costObjectField`	|	`array`	|	`body`	|	**Required** An array of JSON representations of a budget tracking field

### Response

[Budget Tracking Field Array](#costobjectfield)


## <a name="delete"></a>Delete a Budget Tracking Field

    DELETE  /budget/v4/costObjectField/{id}

### Parameters

Name | Type | Format | Description
-----|------|--------|------------
id	|	`string`	|	`path`	|	The budget tracking field's key field (sync guid).


## <a name="schema"></a>Schema


### <a name="costobjectfield"></a>CostObjectField

Name | Type | Format | Description
-----|------|--------|------------
`budgetSequenceNumber`	|	`string`	|	-	|	The sequence/order in which budget tracking field definition appears in the budget UI.
`dataType`	|	`string`	|	-	|	**Required** The data type of this field or field collection.  This value, along with the cost object field definition(s) below determines how the cost tracking field will be used by admininstrators. Valid values are LIST, MLIST, and VARCHAR.
`costObjectFieldDefinitions`    |   `Array[CostObjectFieldDefinition]`  |   -   |   **Required** The list of field defintion(s) that make up this field.  Should be a single entry for VARCHAR or LIST and can be one or more entries for MLIST. 
`lastModifiedDate`	|	`datetime`	|	-	|	The last time the budget tracking was updated.  Date is in GMT **READ ONLY**
`status`	|	`string`	|	-	|	**Required** The status of this budget tracking field. Valid options are OPEN and REMOVED.
`syncGuid`	|	`string`	|	-	|	The budget service's key for this object.
`listSyncGuid` |   `string`  |   -   |    If the dataType of this item is LIST or MLIST, this is the id of the list definition from Concur's list service.


### CostObjectFieldDefinition

Name | Type | Format | Description
-----|------|--------|------------
`connectedListSequenceNumber`	|	`string`	|	-	|	 If the parent budget tracking field is an MLIST, this field specifies the order in which the individual field definitions should appear on the UI and the order in which they should pull their connected lists from the Concur list service.
`costObjectMappings`    |   `CostObjectMapping` |   -   |   A list of mappings from this field definition to the fields on the spending items that we want to match.
`ctrlType`	|	`string`	|	-	|   The UI control type of this budget tracking field definiton.  This defines how the field value will be entered by administrators.  This control type does not have to match the control type of the fields to which this tracking field is mapped.  (For instance, one could allow budget administrators to enter free-form text by choosing EDIT even if the mapped field on the expense report form is a pre-defined list. Valid values are PICK_LIST, LIST_EDIT, EDIT. 	
`defaultItemKey`	|	`string`	|	-	|   The list item key value of the budget tracking field definition if this field is a list.	
`defaultValue`	|	`string`	|	-	|	The default value of this field.
`displayName`	|	`string`	|	-	|	**Required** The user-facing name
`hierarchyCode`	|	`string`	|	-	|	The key value that we'll use to pass in this field value in budget items and spending items. If this is not supplied, it defaults to the next available integer.
`lastModifiedDate`	|	`datetime`	|	-	|	The last time this Budget Tracking definition was updated.  Date is in GMT **READ ONLY**
`status`	|	`string`	|	-	|	**Required** The status of this Budget Tracking field. Valid options are OPEN and REMOVED.
`syncGuid`	|	`string`	|	-	|	The budget service's key for this object.

### CostObjectMapping

Name | Type | Format | Description
-----|------|--------|------------
`featureTypeCode`	|	`string`	|	-	|	 **Required** The product of the field we're mapping to.  Valid values are REQUEST, TRAVEL, EXPENSE, PAYMENT_REQUEST, and PURCHASE_REQUEST.
`lastModifiedDate`	|	`datetime`	|	-	|	The last time this Budget Tracking definition was updated.  Date is in GMT **READ ONLY**
`productFieldId`    |   `string` |   -   |   The Concur forms and fields for the id we're mapping.
`spendingItemLevel`	|	`string`	|	-	|   **Required** The location inside the feature of the field we're mapping.  Valid values are HEADER, DETAIL, and ALLOCATION
`status`	|	`string`	|	-	|	**Required** The status of this Budget Tracking mapping. Valid options are OPEN and REMOVED.
`syncGuid`	|	`string`	|	-	|	The budget service's key for this object.
`mappingType`   |   `string`    |   -   |   **Required** Determines if this mapping is to a field on a form or if it's always a constant value.  If this mapping is always set to a constant value, set this value to CONSTANT, otherwise it should be FIELD.
`mappingValue`  |   `string`    |   -   |   The constant value if mappingType is CONSTANT.  Should be null if mappingType if FIELD.
