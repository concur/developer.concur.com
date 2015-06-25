---
title: Get a list of lists
layout: reference
---


This resource supports the following GET actions:

* Get List of Lists
* Get List Details
* Get List Items

##  Get Lists

### Description
Retrieves the list of configured lists.

### Get Lists Request

    GET /api/expense/list/v1.0/ HTTPS 1.1
    Host: www.concursolutions.com
    Authorization: OAuth {access token}
    Content-Type: application/xml

#### Request parameters
None.

#### Headers

##### Authorization header
Authorization header with OAuth token for valid Concur user. The OAuth consumer must have one of the following user roles in Concur: Company Administrator or Web Services Administrator for Professional, or Can Administer for Standard. These roles allow the user to manage data for the entire company.

##### Accept header
application/xml

### Get Lists Response

#### HTTP Responses

* [HTTP Status Codes][1]
* [List Item Error Codes][2]

#### Root elements
This request will return a **lists** parent element containing a **list** child element for each configured list. The **list** element will contain the following child elements.  

##### list child elements

|  Element |  Description |
|---------|--------------|
|  id |  The list URI with encrypted ID. | 
|  items-link |  The list item URI with encrypted ID. |
|  batch-link |  The batch URI associated with this list, with encrypted ID. |
|  name |  The name of the list as it appears in the user interface. |
|  is-vendor |  Whether this is a vendor list. Format: true/false |
|  levels |  The number of levels the list contains. |


####  XML Example of Successful Response

    200 OK
    Content-Type: application/xml
    <lists xmlns="http://www.concursolutions.com/api/expense/list/2010/02">
        <list>
            <id>http://www.concursolutions.com/api/expense/list/v1.0/I8pq1l$rdSmdrEW23deOjPjyr4Wso0Wq$a</id>
            <batch-link>http://www.concursolutions.com/api/expense/list/v1.0/I8pq1l$rdSmdrEW23deOjPjyr4Wso0Wq$a/batch</batch-link>
            <name>Widget List</name>
            <is-vendor>false</is-vendor>
            <levels>1</levels>
            <items-link>http://www.concursolutions.com/api/expense/list/v1.0/I8pq1l$rdSmdrEW23deOjPjyr4Wso0Wq$a/items/</items-link>
        </list>
        <list>
            <id>http://www.concursolutions.com/api/expense/list/v1.0/jUwq11frTd$sweNd7s6s8O0fYi$piWwato</id>
            <batch-link>http://www.concursolutions.com/api/expense/list/v1.0/jUwq11frTd$sweNd7s6s8O0fYi$piWwato/batch</batch-link>
            <name>Organization List</name>
            <is-vendor>false</is-vendor>
            <levels>4</levels>
            <items-link>http://www.concursolutions.com/api/expense/list/v1.0/jUwq11frTd$sweNd7s6s8O0fYi$piWwato/items/</items-link>
        </list>
        <list>
            <id>http://www.concursolutions.com/api/expense/list/v1.0/4q2Hy86r45Klls$pseQEhNpz8Oxal7ytRe</id>
            <batch-link>http://www.concursolutions.com/api/expense/list/v1.0/4q2Hy86r45Klls$pseQEhNpz8Oxal7ytRe/batch</batch-link>
            <name>Airlines</name>
            <is-vendor>true</is-vendor>
            <levels>1</levels>
            <items-link>http://www.concursolutions.com/api/expense/list/v1.0/4q2Hy86r45Klls$pseQEhNpz8Oxal7ytRe/items/</items-link>
        </list>
    </lists>

##  Get List Details

###Description

Retrieves the list details for a specified list. Includes configuration information, not the list items.

### Get List Details Request

    GET /api/expense/list/v1.0/_{listID}_ HTTPS 1.1
    Host: www.concursolutions.com
    Authorization: OAuth {access token}
    Content-Type: application/xml

#### Request parameters

* **{_listID_}**<br>Required. The identifier for the desired list.<br>
Example: `https://www.concursolutions.com/api/expense/list/v1.0/nqd1YesaKhCWCFIhY8JeBJYf2UGdpwJ2r`  
* **URI Source**: This URI is returned in the **id** element by the Get List of Lists function.

#### Headers

##### Authorization header
Required. Authorization header with OAuth token for valid Concur user. The OAuth consumer must have one of the following user roles in Concur: Company Administrator or Web Services Administrator for Professional, or Can Administer for Standard. These roles allow the user to manage data for the entire company.

##### Accept header
application/xml

###  Get List Details Response

####HTTP Responses

* [HTTP Status Codes][1]
* [List Item Error Codes][2]

####Content types
application/xml

###Root elements
This request will return a **list** parent element. The **list** element will contain the following child elements.

#### list child elements

|  Element |  Description |
|----------|------------|
|  batch-link |  The batch URI associated with this list, with encrypted ID. |
|  id |  The list URI with encrypted ID. |
|  is-vendor |  Whether this is a vendor list. Format: true/false. |
|  items-link |  The list item URI with encrypted ID. |
|  levels |  The number of levels the list contains. |
|  name |  The name of the list as it appears in the user interface. |

####  XML Example of Successful Response

    <list xmlns="http://www.concursolutions.com/api/expense/list/2010/02" xmlns:i="http://www.w3.org/2001/XMLSchema-instance">
        <batch-link>https://www.concursolutions.com/api/expense/list/v1.0/nqd1YesaKhCWCFIhY8JeBJYf2UGdpwJ2r/batch</batch-link>
        <id>https://www.concursolutions.com/api/expense/list/v1.0/nqd1YesaKhCWCFIhY8JeBJYf2UGdpwJ2r</id>
        <is-vendor>true</is-vendor>
        <items-link>https://www.concursolutions.com/api/expense/list/v1.0/nqd1YesaKhCWCFIhY8JeBJYf2UGdpwJ2r/items</items-link>
        <levels>1</levels>
        <name>Travel Agents</name>
    </list>

##  Get List Items

###Description
Retrieves the list items for the specified list. A request sent without a specified parent list item code returns all level 1 list items. A request sent with a parent list item code returns all list items below that parent item. The result set can be filtered by passing in a filter string.

### Get List Items Request

#### Request parameters
* **{_listID_}/items**<br/>Required. The identifier for the desired list, and the items keyword to indicate the request is for the list items.<br/>
Example: `https://www.concursolutions.com/api/expense/list/v1.0/_{listID}_/items`
* **{_parentCode_}**<br/>Optional. The parent list item code. If this is included, the request will return all items below this list item. The parent code must be URL encoded.
* **filter={_filter_}**<br/>Optional. The result filter. The string value entered will be compared against the list item name and code fields, and only matching results will be returned.<br/>
Example: `https://www.concursolutions.com/api/expense/list/v1.0/{_listID_}/items?parentCode={_parentcode_}&filter={_filter_}`

#### Headers

##### Authorization header
Required. Authorization header with OAuth token for valid Concur user. The OAuth consumer must have one of the following user roles in Concur: Company Administrator or Web Services Administrator for Professional, or Can Administer for Standard. These roles allow the user to manage data for the entire company.

##### Accept header
application/xml

####  XML Example Request

    GET /api/expense/list/v1.0/jUwq11frTd$sweNd7s6s8O0fYi$piWwato/items/ HTTPS 1.1
    Host: www.concursolutions.com
    Authorization: OAuth {access token}
    Content-Type: application/xml

####  XML Example Request with Parent Code

    GET /api/expense/list/v1.0/jUwq11frTd$sweNd7s6s8O0fYi$piWwato/items?parentCode=US HTTPS 1.1
    Host: www.concursolutions.com
    Authorization: OAuth {access token}
    Content-Type: application/xml

####  XML Example Request with Filter

    GET /api/expense/list/v1.0/jUwq11frTd$sweNd7s6s8O0fYi$piWwato/items?filter=United HTTPS 1.1
    Host: www.concursolutions.com
    Authorization: OAuth {access token}
    Content-Type: application/xml

###  Get List Items Response

####HTTP Responses

* [HTTP Status Codes][1]
* [List Item Error Codes][2]

####Response body root elements
This request will return a **list-items** parent element, with a **list-item** child element for each item returned. The **list-item** elements will contain the following child elements.

##### list-item child elements

|  Element |  Description |
|-----|------|
|  name |  The list item name. |
|  levelxcode |  The item code for all specified levels, where x is replaced with the level number. If the request is for the children of a level 2 item, the **level1code**, **level2code**, and **level3code** elements will be returned. |
|  items-link |  The URI, including the parent code value, to request the list items beneath this list item. |


####  XML Example of Successful Response

    <list-items xmlns="http://www.concursolutions.com/api/expense/list/2010/02">
        <list-item>
            <name>United States</name>
            <level1code>US</level1code>
            <items-link>https://www.concursolutions.com/api/expense/list/v1.0/jUwq11frTd$sweNd7s6s8O0fYi$piWwato/items/US/</items-link>
        </list-item>
        <list-item>
            <name>United Kingdom</name>
            <level1code>UK</level1code>
            <items-link>https://www.concursolutions.com/api/expense/list/v1.0/jUwq11frTd$sweNd7s6s8O0fYi$piWwato/items/UK/</items-link>
        </list-item>
        <list-item>
            <name>Canada</name>
            <level1code>CA</level1code>
            <items-link>https://www.concursolutions.com/api/expense/list/v1.0/jUwq11frTd$sweNd7s6s8O0fYi$piWwato/items/CA/</items-link>
        </list-item>
        <list-item>
            <name>Mexico</name>
            <level1code>MX</level1code>
            <items-link>https://www.concursolutions.com/api/expense/list/v1.0/jUwq11frTd$sweNd7s6s8O0fYi$piWwato/items/MX/</items-link>
        </list-item>
    </list-items>

  


[1]: /tools-support/reference/http-codes.html
[2]: /tools-support/reference/custom-list-items.html
