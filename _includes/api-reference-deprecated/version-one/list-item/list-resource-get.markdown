## Get a list of lists

This resource supports the following GET actions:

* Get List of Lists
* Get List Details
* Get List Items

### Get Lists

```bash
# Endpoint
GET /api/expense/list/v1.0/
```

Retrieves the list of configured lists.

#### Request

```http
GET /api/expense/list/v1.0/ HTTPS/1.1
Host: www.concursolutions.com
Authorization: OAuth {access token}
Content-Type: application/xml
```

* **Request parameters**
  * None.
* **Headers**

  | Name | Description |
  | ---- | ----------- |
  | `Content-Type` | `application/xml` |
  | `Authorization` | The authorization header must have an OAuth token for a valid Concur user. <br><br> The OAuth consumer must have one of the following user roles in Concur: Company Administrator or Web Services Administrator for Professional, or Can Administer for Standard. These roles allow the user to manage data for the entire company. |

#### Response

```http
HTTPS/1.1 200 OK
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
```

* **HTTP Responses**
  * [HTTP Status Codes](/tools-support/reference/http-codes.html)
  * [List Item Error Codes](/tools-support/reference/custom-list-items.html)
* **Root elements**
  This request will return a **`lists`** parent element containing a **`list`** child element for each configured list. The **`list`** element will contain the following child elements.  

  * **`list` child elements**

    |  Element |  Description |
    |---------|--------------|
    |  `id` |  The list URI with encrypted ID. |
    |  `items-link` |  The list item URI with encrypted ID. |
    |  `batch-link` |  The batch URI associated with this list, with encrypted ID. |
    |  `name` |  The name of the list as it appears in the user interface. |
    |  `is-vendor` |  Whether this is a vendor list. Format: true/false |
    |  `levels` |  The number of levels the list contains. |

### Get List Details

```bash
# Endpoint
GET /api/expense/list/v1.0/{listId}
```

Retrieves the list details for a specified list. Includes configuration information, not the list items.

#### Request

```http
GET /api/expense/list/v1.0/{listID} HTTPS/1.1
Host: www.concursolutions.com
Authorization: OAuth {access token}
Content-Type: application/xml
```

* **Path Parameters**

  | Parameter | Required/Optional | Description |
  |-----------|-----------|---------------------|
  | `listID` | required | The identifier for the desired list. <br><br> **URI Source**: This URI is returned in the **id** element by the Get List of Lists function. |

* **Headers**

  | Name | Description |
  | ---- | ----------- |
  | `Content-Type` | `application/xml` |
  | `Authorization` | The authorization header must have an OAuth token for a valid Concur user. <br><br> The OAuth consumer must have one of the following user roles in Concur: Company Administrator or Web Services Administrator for Professional, or Can Administer for Standard. These roles allow the user to manage data for the entire company. |

#### Response

```xml
<list xmlns="http://www.concursolutions.com/api/expense/list/2010/02" xmlns:i="http://www.w3.org/2001/XMLSchema-instance">
    <batch-link>https://www.concursolutions.com/api/expense/list/v1.0/nqd1YesaKhCWCFIhY8JeBJYf2UGdpwJ2r/batch</batch-link>
    <id>https://www.concursolutions.com/api/expense/list/v1.0/nqd1YesaKhCWCFIhY8JeBJYf2UGdpwJ2r</id>
    <is-vendor>true</is-vendor>
    <items-link>https://www.concursolutions.com/api/expense/list/v1.0/nqd1YesaKhCWCFIhY8JeBJYf2UGdpwJ2r/items</items-link>
    <levels>1</levels>
    <name>Travel Agents</name>
</list>
```

* **HTTP Responses**
  * [HTTP Status Codes](/tools-support/reference/http-codes.html)
  * [List Item Error Codes](/tools-support/reference/custom-list-items.html)
* **Content types**
  * application/xml
* **Root elements**
  This request will return a **`list`** parent element. The **`list`** element will contain the following child elements.

  * **`list` child elements**

    |  Element |  Description |
    |----------|------------|
    |  `batch-link` |  The batch URI associated with this list, with encrypted ID. |
    |  `id` |  The list URI with encrypted ID. |
    |  `is-vendor` |  Whether this is a vendor list. Format: true/false. |
    |  `items-link` |  The list item URI with encrypted ID. |
    |  `levels` |  The number of levels the list contains. |
    |  `name` |  The name of the list as it appears in the user interface. |


### Get List Items

```bash
# Endpoint
GET /api/expense/list/v1.0/{listId}/items/
```

Retrieves the list items for the specified list. A request sent without a specified parent list item code returns all level 1 list items. A request sent with a parent list item code returns all list items below that parent item. The result set can be filtered by passing in a filter string.

#### Request

* **Path Parameters**

  | Parameter | Required/Optional | Description |
  |-----------|-----------|---------------------|
  | `{listID}/items` | required | The identifier for the desired list, and the `items` keyword to indicate the request is for the list items. |
  | `{parentCode}` | optional | The parent list item code. If this is included, the request will return all items below this list item:  parent code must be URL encoded. |
  | `filter={filter}` | optional | The result filter. The string value entered will be compared against the list item name and code fields, and only matching results will be returned. |

* **Headers**

  | Name | Description |
  | ---- | ----------- |
  | `Content-Type` | `application/xml` |
  | `Authorization` | The authorization header must have an OAuth token for a valid Concur user. <br><br> The OAuth consumer must have one of the following user roles in Concur: Company Administrator or Web Services Administrator for Professional, or Can Administer for Standard. These roles allow the user to manage data for the entire company. |

> XML Example Request

```http
GET /api/expense/list/v1.0/jUwq11frTd$sweNd7s6s8O0fYi$piWwato/items/ HTTPS/1.1
Host: www.concursolutions.com
Authorization: OAuth {access token}
Content-Type: application/xml
```

> XML Example Request with Parent Code

```http
GET /api/expense/list/v1.0/jUwq11frTd$sweNd7s6s8O0fYi$piWwato/items?parentCode=US HTTPS/1.1
Host: www.concursolutions.com
Authorization: OAuth {access token}
Content-Type: application/xml
```

> XML Example Request with Filter

```http
GET /api/expense/list/v1.0/jUwq11frTd$sweNd7s6s8O0fYi$piWwato/items?filter=United HTTPS/1.1
Host: www.concursolutions.com
Authorization: OAuth {access token}
Content-Type: application/xml
```

#### Response

```xml
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
```

* **HTTP Responses**
  * [HTTP Status Codes](/tools-support/reference/http-codes.html)
  * [List Item Error Codes](/tools-support/reference/custom-list-items.html)
* **Response body root elements**
  This request will return a **`list-items`** parent element, with a **list-item** child element for each item returned. The **`list-item`** elements will contain the following child elements.

  * **`list-item` child elements**

    |  Element |  Description |
    |-----|------|
    |  name |  The list item name. |
    |  levelxcode |  The item code for all specified levels, where x is replaced with the level number. If the request is for the children of a level 2 item, the **level1code**, **level2code**, and **level3code** elements will be returned. |
    |  items-link |  The URI, including the parent code value, to request the list items beneath this list item. |
