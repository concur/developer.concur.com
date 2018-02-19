---
title: List Item
layout: reference
---


# List Items

The Concur List Item web service provides an automated solution to clients who would like to add, update or delete list items. 


* [Retrieve all list items based on the search criteria](#get)
* [Retrieve a list item by ID](#getID)
* [Create a new list item](#post)
* [Update a list item](#put)
* [Delete a list item](#delete)
* [Schema](#schema)


### Version
3.0

1.0 documentation is available [here](/api-reference-deprecated/version-one/list-item/index.html)

## <a name="get"></a>Retrieve all list items based on the search criteria.

    GET   /api/v3.0/common/listitems

        
### Parameters

Name | Type | Format | Description
-----|------|--------|------------			
`limit`	|	`Int32`	|	`query`	|	The number of records to return. The default is 25 and the maximum is 100.
`offset`	|	`string`	|	`query`	|	The start of the page offset. The default is from the beginning.
`listId	`|	`string`	|	`query`	|	The unique identifier for the list this item is a member.
`name`	|	`string`	|	`query`	|	The name of the listItem. Text Max length: 64.
`parentId`	|	`string`	|	`query`	|	The unique identifier of this item's parent. Is empty when there is no parent.
`level1Code`	|	`string`	|	`query`	|	The item code for the first level of the list. All lists have at least a Level1Code. Text maximum 32 characters
`level2Code`	|	`string`	|	`query`	|	The item code for the second level of the list. Empty when this level doesn't exist in the list. Text maximum 32 characters
`level3Code`	|	`string`	|	`query`	|	The item code for the third level of the list. Empty when this level doesn't exist in the list. Text maximum 32 characters
`level4Code`	|	`string`	|	`query`	|	The item code for the fourth level of the list. Empty when this level doesn't exist in the list. Text maximum 32 characters
`level5Code`	|	`string`	|	`query`	|	The item code for the fifth level of the list. Empty when this level doesn't exist in the list. Text maximum 32 characters
`level6Code`	|	`string`	|	`query`	|	The item code for the sixth level of the list. Empty when this level doesn't exist in the list. Text maximum 32 characters
`level7Code`	|	`string`	|	`query`	|	The item code for the seventh level of the list. Empty when this level doesn't exist in the list. Text maximum 32 characters
`level8Code	`|	`string`	|	`query`	|	The item code for the eighth level of the list. Empty when this level doesn't exist in the list. Text maximum 32 characters
`level9Code`	|	`string`	|	`query`	|	The item code for the ninth level of the list. Empty when this level doesn't exist in the list. Text maximum 32 characters
`level10Code`	|	`string`	|	`query`	|	The item code for the tenth level of the list. Empty when this level doesn't exist in the list. Text maximum 32 characters



## <a name="getID"></a>Retrieve a list item by ID

    GET   /api/v3.0/common/listitems/{id}


### Parameters

Name | Type | Format | Description
-----|------|--------|------------
`id`	|	`string`	|	`path`	|	**Required** The unique identifier for the listItem.
`listId	`|	`string`	|	`query`	|	The unique identifier for the list this item is a member.


## <a name="post"></a>Create a new list item

    POST   /api/v3.0/common/listitems


### Parameters

Name | Type | Format | Description
-----|------|--------|------------
`content`	|	-	|	`body`	|	**Required** List item object to create.


## <a name="put"></a>Update a list item

    PUT   /api/v3.0/common/listitems/{id}


### Parameters

Name | Type | Format | Description
-----|------|--------|------------
`id`	|	`string`	|	`path`	|	**Required** The unique identifier for the list item.
`content`	|	-	|	`body`	|	**Required** The list item object to update.


## <a name="delete"></a>Delete a list item

    DELETE   /api/v3.0/common/listitems/{id}


### Parameters

Name | Type | Format | Description
-----|------|--------|------------
`id`	|	`string`	|	`path`	|	**Required** The unique identifier of the listitem to delete
`listId`	|	`string`	|	`query`	|	**Required** The unique identifier of the list associated with a listitem to be deleted



## <a name="schema"></a>Schema


###<a name="listitems"></a>List Items

Name | Type | Format | Description
-----|------|--------|------------
`Items`	|	`array`	|	[List Item](#listitem)	|	The result collection.
`NextPage`	|	`string`	|	-	|	The URI of the next page of results, if any.


### <a name="listitem"></a>List Item

Name | Type | Format | Description
-----|------|--------|------------
`ID`	|	`string`	|	-	|	The unique identifier of the resource.
`Level10Code`	|	`string`	|	-	|	The item code for the tenth level of the list. Empty when this level doesn't exist in the list. Text maximum 32 characters
`Level1Code`	|	`string`	|	-	|	The item code for the first level of the list. All lists have at least a Level1Code. Text maximum 32 characters
`Level2Code`	|	`string`	|	-	|	The item code for the second level of the list. Empty when this level doesn't exist in the list. Text maximum 32 characters
`Level3Code`	|	`string`	|	-	|	The item code for the third level of the list. Empty when this level doesn't exist in the list. Text maximum 32 characters
`Level4Code`	|	`string`	|	-	|	The item code for the fourth level of the list. Empty when this level doesn't exist in the list. Text maximum 32 characters
`Level5Code`	|	`string`	|	-	|	The item code for the fifth level of the list. Empty when this level doesn't exist in the list. Text maximum 32 characters
`Level6Code`	|	`string`	|	-	|	The item code for the sixth level of the list. Empty when this level doesn't exist in the list. Text maximum 32 characters
`Level7Code`	|	`string`	|	-	|	The item code for the seventh level of the list. Empty when this level doesn't exist in the list. Text maximum 32 characters
`Level8Code`	|	`string`	|	-	|	The item code for the eighth level of the list. Empty when this level doesn't exist in the list. Text maximum 32 characters
`Level9Code`	|	`string`	|	-	|	The item code for the ninth level of the list. Empty when this level doesn't exist in the list. Text maximum 32 characters
`ListID`	|	`string`	|	-	|	The unique identifier for the list this item is a member.
`Name`	|	`string`	|	-	|	The name of item. Text maximum 64 characters
`ParentID`	|	`string`	|	-	|	The unique identifier of this item's parent. Is empty when there is no parent.
`URI`	|	`string`	|	-	|	The URI to the resource.


