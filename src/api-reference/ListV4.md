# List V4
The Lists APIs allow you to view your configured lists within SAP Concur products and create new lists. The lists are shared between multiple SAP Concur products. 

## Prior Versions

Lists V3 documentation is available [here](https://developer.concur.com/api-reference/common/lists/v3.lists.html#create-response).

## Contents 
* [Process Flow](#process-flow)
* [Products and Editions](#products-editions)
* [Scope Usage](#scope-usage)
* [Access Token Usage](#access-token-usage)
* [Get All Lists](#get-all-lists)
* [Create a New List](#create-a-new-list)
* [Update a List](#update-a-list)
* [Get a List by List ID](#get-a-list-by-list-id)
* [Get a List by Category ID](#get-a-list-by-category-id)
* [Remove a List](#remove-a-list)


## <a name="process-flow"></a>Process Flow
**Editing note:** Placeholder for diagram

User on the left, List API on the right, and diagram the request/response for the APIs.
Get all lists for a company (GET /list/v4/lists), Returns Lists
Create a new list (POST /list/v4/lists)
Get a list by id (GET /list/v4/lists/{listId}), Returns List
Update a list (PUT /list/v4/lists/{listId})
Remove a list (DELETE /list/v4/lists{listId})

## <a name="products-editions"></a>Products and Editions
* Concur Expense Professional Edition
* Concur Expense Standard Edition
* Concur Invoice Professional Edition
* Concur Invoice Standard Edition
* Concur Request Professional Edition
* Concur Request Standard Edition

## <a name="scope-usage"></a>Scope Usage
| Name        | Description           | Endpoints  |
| :-- |:-| :-|
| `spend.list.read`      | Read only access to spend lists | GET |
| `spend.list.write`      | Read and write access to spend lists | GET, POST, PUT |
| `spend.list.delete`      | Delete capabilities for spend lists | DELETE |

## <a name="access-token-usage"></a>Access Token Usage

Authentication is performed with X509 and JWT Access Tokens. This API supports both company level and user level access tokens. The user access token is authenticated on scope and user role, the user must be an Expense, Invoice, Shared or Request Configuration Administrator in order to perform POST, PUT, and DELETE actions.
**Editing note:** HOW MUCH SHOULD WE INCLUDE HERE? More detailed info at https://github.concur.com/expense-services/list-service/wiki/Authentication


# <a name="get-all-lists"></a>Get All Lists
Returns all lists for a company.


## Parameters
| Name        |Type|  Description           |
| :- |:-| :-| 
| Accept-Language | String|  **Optional:** Language code; default value is en | 
| company-uuid | String | **Optional:** Company UUID of the user (Used for x509 authorization) |
| concur-correlationid | String | **Optional:** The unique identifier of the consumer making the API calls. Minimum length: 6 characters. | 
| concur-uid | String | **Optional:** Concur Employee UUID of the caller (Used for x509 authorization) | 
| page | integer($int32) | **Optional:** Page number starting from 1. Default value is 1 | 

#### Headers

* [RFC 7231 Content-Type](https://tools.ietf.org/html/rfc7231#section-3.1.1.5)
* [RFC 7231 Accept-Language](https://tools.ietf.org/html/rfc7231#section-5.3.5)
* [RFC 7231 Accept](https://tools.ietf.org/html/rfc7231#section-5.3.2)
* [RFC 7235 Authorization](https://tools.ietf.org/html/rfc7235#section-4.2)
* [RFC 7232 If-Match](https://tools.ietf.org/html/rfc7232#section-3.1)
* [RFC 7232 If-None-Match](https://tools.ietf.org/html/rfc7232#section-3.2)


## Request
## Response

# <a name="create-a-new-list"></a> Create a New List
Creates a new list.


## Parameters
| Name        |Type|  Description           |
| :- |:-| :-| 
| company-uuid | String | **Optional:** Company UUID of the user (Used for x509 authorization) |
| concur-correlationid | String | **Optional:** The unique identifier of the consumer making the API calls. Minimum length: 6 characters. | 
| concur-uid | String | **Optional:** Concur Employee UUID of the caller (Used for x509 authorization) | 
| listRequest  |  | **Required:** List object that is created for the company |

#### Headers

* [RFC 7231 Content-Type](https://tools.ietf.org/html/rfc7231#section-3.1.1.5)
* [RFC 7231 Accept-Language](https://tools.ietf.org/html/rfc7231#section-5.3.5)
* [RFC 7231 Accept](https://tools.ietf.org/html/rfc7231#section-5.3.2)
* [RFC 7235 Authorization](https://tools.ietf.org/html/rfc7235#section-4.2)
* [RFC 7232 If-Match](https://tools.ietf.org/html/rfc7232#section-3.1)
* [RFC 7232 If-None-Match](https://tools.ietf.org/html/rfc7232#section-3.2)

## Request
## Response

# <a name="update-a-list"></a> Update a List
Update an existing list.


## Parameters
| Name        |Type|  Description           |
| :- |:-| :-| 
| Accept-Language | String|  **Optional:** Language code; default value is en | 
| company-uuid | String | **Optional:** Company UUID of the user (Used for x509 authorization) |
| concur-correlationid | String | **Optional:** The unique identifier of the consumer making the API calls. Minimum length: 6 characters. | 
| concur-uid | String | **Optional:** Concur Employee UUID of the caller (Used for x509 authorization) | 
| listId  | String ($uuid) | **Required:** The unique identifier of the list. | 
| listUpdate  |  | **Required:** List object that is updated for the company. | 

#### Headers
* [RFC 7231 Content-Type](https://tools.ietf.org/html/rfc7231#section-3.1.1.5)
* [RFC 7231 Accept-Language](https://tools.ietf.org/html/rfc7231#section-5.3.5)
* [RFC 7231 Accept](https://tools.ietf.org/html/rfc7231#section-5.3.2)
* [RFC 7235 Authorization](https://tools.ietf.org/html/rfc7235#section-4.2)
* [RFC 7232 If-Match](https://tools.ietf.org/html/rfc7232#section-3.1)
* [RFC 7232 If-None-Match](https://tools.ietf.org/html/rfc7232#section-3.2)

## Request
## Response

# <a name="get-a-list-by-list-id"></a> Get a List by List ID
Returns a list by a List ID.

## Parameters
| Name        |Type|  Description           |
| :- |:-| :-| 
| Accept-Language | String|  **Optional:** Language code; default value is en | 
| company-uuid | String | **Optional:** Company UUID of the user (Used for x509 authorization) |
| concur-correlationid | String | **Optional:** The unique identifier of the consumer making the API calls. Minimum length: 6 characters. | 
| concur-uid | String | **Optional:** Concur Employee UUID of the caller (Used for x509 authorization) | 
| listId  | String ($uuid) | **Required:** The unique identifier of the list. | 

#### Headers

* [RFC 7231 Content-Type](https://tools.ietf.org/html/rfc7231#section-3.1.1.5)
* [RFC 7231 Accept-Language](https://tools.ietf.org/html/rfc7231#section-5.3.5)
* [RFC 7231 Accept](https://tools.ietf.org/html/rfc7231#section-5.3.2)
* [RFC 7235 Authorization](https://tools.ietf.org/html/rfc7235#section-4.2)
* [RFC 7232 If-Match](https://tools.ietf.org/html/rfc7232#section-3.1)
* [RFC 7232 If-None-Match](https://tools.ietf.org/html/rfc7232#section-3.2)

## Request
## Response

# <a name="get-a-list-by-category-id"></a> Get a List by Category ID
Returns a list by a Category ID.

## Parameters
| Name        |Type|  Description           |
| :- |:-| :-| 
| Accept-Language | String|  **Optional:** Language code; default value is en | 
| categoryId | String ($uuid) | **Required:** Required parameter. The unique identifier of the category. | 
| company-uuid | String | **Optional:** Company UUID of the user (Used for x509 authorization) |
| concur-correlationid | String | **Optional:** The unique identifier of the consumer making the API calls. Minimum length: 6 characters. | 
| concur-uid | String | **Optional:** Concur Employee UUID of the caller (Used for x509 authorization) | 
| page | integer($int32) | **Optional:** Page number starting from 1. Default value is 1 | 

#### Headers

* [RFC 7231 Content-Type](https://tools.ietf.org/html/rfc7231#section-3.1.1.5)
* [RFC 7231 Accept-Language](https://tools.ietf.org/html/rfc7231#section-5.3.5)
* [RFC 7231 Accept](https://tools.ietf.org/html/rfc7231#section-5.3.2)
* [RFC 7235 Authorization](https://tools.ietf.org/html/rfc7235#section-4.2)
* [RFC 7232 If-Match](https://tools.ietf.org/html/rfc7232#section-3.1)
* [RFC 7232 If-None-Match](https://tools.ietf.org/html/rfc7232#section-3.2)


## Request
## Response

# <a name="remove-a-list"></a> Remove a List
Delete a list. 

## Parameters
| Name        |Type|  Description           |
| :- |:-| :-| 
| company-uuid | String | **Optional:** Company UUID of the user (Used for x509 authorization) |
| concur-correlationid | String | **Optional:** The unique identifier of the consumer making the API calls. Minimum length: 6 characters. | 
| concur-uid | String | **Optional:** Concur Employee UUID of the caller (Used for x509 authorization) | 
| listId  | String ($uuid) | **Required:** The unique identifier of the list. | 

#### Headers

* [RFC 7231 Content-Type](https://tools.ietf.org/html/rfc7231#section-3.1.1.5)
* [RFC 7231 Accept-Language](https://tools.ietf.org/html/rfc7231#section-5.3.5)
* [RFC 7231 Accept](https://tools.ietf.org/html/rfc7231#section-5.3.2)
* [RFC 7235 Authorization](https://tools.ietf.org/html/rfc7235#section-4.2)
* [RFC 7232 If-Match](https://tools.ietf.org/html/rfc7232#section-3.1)
* [RFC 7232 If-None-Match](https://tools.ietf.org/html/rfc7232#section-3.2)

## Request
## Response


