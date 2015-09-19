---
title: Custom List Items 
layout: reference
---




Custom list fields are included in many of the web services calls throughout Concur Connect, and they require some special consideration.

##  Value

When posting a list item, the list item **code** should be sent as the value, not the list item **name**. The code is returned in the **levelxcode** element of the [Get List Items][1] function.

##  Posting Connected List Items

There are two types of custom lists: Simple lists and Connected (multi-level) lists. If the list is a connected list, the list fields must be sent in sequential order, from parent to the lowest level child list item, as they are configured in the connected list definition.

Example: If your connected list uses Custom5 for the first level, Custom10 for the second level and Custom2 for the third level, you must send the XML elements for the custom fields in that order:

	<Custom5>FirstValueCode</Custom5>  
	<Custom10>SecondValueCode</Custom10>  
	<Custom2>ThirdValueCode</Custom2>

##  Common Issues

Developers that post custom list item values can encounter errors when they post a list item that does not exist in the Concur database. This can happen when the list item import hasn't been completed or hasn't run recently. If the posted list item code does not match an existing list item, the post may result in bad data. Use the [List Item][2] web service to ensure that the list items you are posting are present in the Concur database.

 

  


[1]: /api-reference/common/list-item/index.html#get
[2]: /api-reference/common/list-item/index.html
