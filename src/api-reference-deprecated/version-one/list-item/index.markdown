---
title: List Item Web Service 
layout: reference
---

## Description
The Concur List Item web service provides an automated solution to clients who would like to add, update or delete list items. This web service solves several business problems:

* Files are difficult to manage: The service allows clients to send the data programatically, without requiring files to be moved and managed.
* Need to work outside the Overnight Processing Period (ONP): Clients that need to make updates outside the ONP can use the List Item web service to modify their list items at any time. This allows users to quickly submit expense reports using the new values.

## Works With These Concur Products
* **Expense** for Concur Professional/Premium
* **Expense** for Concur Standard
* **Invoice** for Concur Professional/Premium
* **Invoice** for Concur Standard
* **Travel Request** for Concur Professional/Premium

## Product Restrictions
Concur products are highly configurable, and not all clients will have access to all features.

Partner developers must determine which configurations are required for their solution prior to the review process. Use the [Developer Forum](http://forum.developer.concur.com/){:target="_blank"} if you have questions about the configuration settings.

Existing clients can work with Concur Advantage Technical Services to create custom applications that work with their configuration.

## Resources
[List][3]

## Responses and errors

###  List item errors
The web service will not return a 4xx HTTP response code for a batch operation even when every item in the batch failed to be created, updated or deleted. The client must inspect the response to look for warnings or errors with individual batch items.

When there are errors with batch items, the first ten errors are returned in the <errors> element in the request response, which includes their error code, the item that caused the error, and the error message. Any additional error messages are truncated. This prevents a large volume of error data in the event of a formatting mistake.

### XML Response Error Codes

|  Error Code |  Message |
| ----- | ----- |
|  1001 |  Could not find list-item-batch element |
|  1002 |  Error parsing list item {ITEM} |
|  1003 |  Start and end dates must be specified in pairs |
|  1004 |  List item name must be specified |
|  1005 |  List item name cannot be empty |
|  1006 |  List item name exceeds 64 characters |
|  1010 |  At least one level code must be specified |
|  1011 |  Only one level code is allowed |
|  1012 |  One or more level codes were skipped |
|  1013 |  Invalid level1Code |
|  1014 |  Invalid level2Code |
|  1015 |  Invalid level3Code |
|  1016 |  Invalid level4Code |
|  1017 |  Invalid level5Code |
|  1018 |  Invalid level6Code |
|  1019 |  Invalid level7Code |
|  1020 |  Invalid level8Code |
|  1021 |  Invalid level9Code |
|  1022 |  Invalid level10Code |
|  1023 |  Invalid start date |
|  1024 |  Invalid end date |
|  1025 |  Start date must come before end date |
|  2001 |  Failed to create list item |
|  2002 |  Failed to update list item |
|  2003 |  Failed to delete list item |
|  2004 |  List item already exists in the database |
|  2005 |  List item already exists as a deleted item in the database |
|  2006 |  List item code error |
|  2007 |  List item parent does not exist |

##  Changing a List Item Level Code

The list item level code (levelxcode element) is the unique identifier for the list item. For multiple level lists, the combination of the level codes is the unique identifier. This value cannot be updated by a standard update request, as this will result in a new duplicate list value instead.  
To change a list item's level code, the original list item must be deleted (using the Post List Item Deletion request), then the new item with the updated code must be added (using the Post New List Item request).

**NOTE**: When you delete a list item, the system deactivates it, but keeps a copy in case the item has been used in any expense reports, invoices or requests. Existing reports, invoices or requests will still show the old list item. Any reports, invoices or requests created after the list item has been deleted will no longer show it in the list.

## See also
[Posting Custom List Items][4]


[3]: /api-reference-deprecated/version-one/list-item/list-resource.html
[4]: /tools-support/reference/custom-list-items.html

