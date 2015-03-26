---
title: Allocations resource 
layout: resource
---


## Description

This resource can be used to retrieve information about the allocations that are associated with an entry in an expense report.

## Version

3.0

## URI

`https://www.concursolutions.com/api/v3.0/expense/allocations`

## Operations


* [Get all allocations per entry or report](#get_locations)
* [Get a single allocation by ID](#get__single_location)

## <a name="get_locations" id="get_locations">Get all allocations per entry or report</a>

### Description
Gets all allocations per entry or per report.

### Request

#### Request parameters

##### Query parameters

| Parameter | Requirement | Data Type | Description |
|------------|------------------|--------------|--------------|
|offset | optional           | string | The starting point of the next set of results, after the limit specified in the limit field has been reached. |
|limit | required           | Int32 | The number of records to return. Default value: 25 |
|reportID | optional | string | The unique identifier for the report as it appears in the Concur Expense UI. Format: A variable-length string. Maximum length: 32 characters. |
|entryID | optional | string | The unique identifier for the expense entry. |
| itemizationID | optional | string | The unique identifier for the expense itemization. |
|user | optional | string | The login ID of the user who owns the allocation. The user must have the Web Services Admin role to use this parameter. |

Example: `https://www.concursolutions.com/api/v3.0/expense/allocations?limit=25&offset={offset}&reportID={reportID}&entryID={entryID}&itemizationID={itemizationID}&user={user}`

#### Headers

##### Content type

* application/xml
* application/json

##### Authorization header

The authorization header must have an OAuth token for a valid Concur user.

The OAuth consumer must have one of the following user roles in Concur: Company Administrator or Web Services Administrator for Professional, or Can Administer for Standard. These roles allow the user to manage data for the entire company.

### Response

#### Content body
This request will return an **Allocations** parent element containing an **Items** child element. The **Items** element contains an **Allocation** child element for each allocation.

##### Allocation elements

| Element | Required/Optional | Data Type | Description |
|------------|---------------|--------------|-----------------------|
| AccountCode1 | optional | string | The primary accounting code assigned to the expense type associated with this allocation. Typically, expense types have only a primary account code. |
| AccountCode2 | optional | string | The secondary or alternative accounting code assigned to the expense type associated with this allocation. |
| Custom1 through Custom20 | optional | CustomField | Custom fields associated with the allocation. These fields may or may not have data, depending on how Expense is configured. Format: Text field. Maximum length: 64 characters. For information about the **CustomField** elements, see the **CustomField elements** table below. |
| EntryID | optional | string | The unique identifier for the expense entry. |
| ID | optional | string | The ID of the allocation. |
| IsHidden | optional | Boolean | Indicates whether the allocation is hidden. Format: true or false |
| IsPercentEdited | optional | Boolean | Indicates whether the percentage has been edited. Format: true or false |
| Percentage | optional | Decimal | The percentage of the expense that is included in this allocation. |
| URI | optional | string | The URI of the resource. |

##### CustomField elements

| Element | Required/Optional | Data Type | Description |
|------------|---------------|--------------|-----------------------|
| Code | optional | string  | For list fields, this is the list item code. |
| ListItemID |optional | string  | For list fields, this is the list item ID. |
| Type | optional | string  | The custom field type. Possible values: Amount, Boolean, ConnectedList, Date, Integer, List, Number, Text |
| Value | optional | string  | The value in the Org Unit or Custom field. For list fields, this is the name of the list item. Maximum length: 48 characters |

### Examples

#### XML example request


#### XML example of successful response


## <a name="get__single_location" id="get__single_location">Get a single allocation by ID</a>

### Description
<a name="get_locations" id="get_locations">Gets a single allocation by ID.<a>

### Request

#### Request parameters

##### Path parameters

| Parameter | Required/Optional | Data Type | Description |
|------------|------------------|--------------|--------------|
| id | required | string | The unique identifier for the allocation. |

##### Query parameters

| Parameter | Required/Optional | Data Type | Description |
|------------|------------------|--------------|--------------|
| user | optional | string | The login ID of the user who owns the allocation. The user must have the Web Services Admin role to use this parameter. |

Example: `https://www.concursolutions.com/api/v3.0/expense/allocations/{id}?user={user}`

#### Headers

##### Content type

* application/xml
* application/json

##### Authorization header

The authorization header must have an OAuth token for a valid Concur user.

The OAuth consumer must have one of the following user roles in Concur: Company Administrator or Web Services Administrator for Professional, or Can Administer for Standard. These roles allow the user to manage data for the entire company.

### Response

#### Content body
This request will return an **Allocation** element that contains details for the allocation. For more information about the **Allocation** child elements, see the **Allocation elements** table above.

### Examples

#### XML example request


#### XML example of successful response


[1]: http://concur.github.io/developer.concur.com/api-reference/expense/allocation/allocations-resource-get
