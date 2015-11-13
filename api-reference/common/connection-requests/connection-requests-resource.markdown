---
title: Connection Requests
layout: reference
---

# Connection Requests

The Connection Requests resource is used to integrate TripLink partner applications with Concur. It can be used to create, update, and manage connections between a user's Concur account and a select travel loyalty program. With Connection Requests a TripLink partner application can retrieve new connection requests and provide status for pending connections, successful connections, and failed connections. When retrieving new connections, the results can be filtered by status, page offset, and a limit for the number of records to return.

* [Retrieve all connection requests tht match the TripLink supplier ID](#get)
* [Retrieve a connection request by ID](#getID)
* [Create a connection request on behalf of a specific user](#post)
* [Update a connection request](#put)
* [Delete an connection request](#delete)
* [Schema](#schema)


### Version
3.0

## <a name="get"></a>Retrieve all connection requests tht match the TripLink supplier ID

    GET  /api/v3.0/common/connectionrequests/

        
### Parameters

Name | Type | Format | Description
-----|------|--------|------------			
`offset`	|	``query``	|	``string``	|	The starting point of the next set of results, after the limit specified in the limit field has been reached. The default is the beginning of the page.
`limit`	|	``query``	|	``Int32``	|	The number of records to return. The default is 5 and the maximum is 10.
`status`	|	``query``	|	``string``	|	The status code representing the state of the connection request. The possible values are Pending, Processing, Connected, Failed, and Retry.



## <a name="getID"></a>Retrieve a connection request by ID

    GET  /api/v3.0/common/connectionrequests/{id}


### Parameters

Name | Type | Format | Description
-----|------|--------|------------
`id`	|	``path``	|	``string``	|	**Required** The connection request ID.
`content`	|	``body``	|	-	|	**Required** The connection request object to update.


## <a name="post"></a>Create a connection request on behalf of a specific user

    POST  /api/v3.0/common/connectionrequests/


### Parameters

Name | Type | Format | Description
-----|------|--------|------------
`user`	|	``query``	|	``string``	|	**Required** The login ID of the user for whom to create the connection request. The user must have the Web Services Admin role to use this parameter.


## <a name="put"></a>Update a connection request

    PUT  /api/v3.0/common/connectionrequests/{id}


### Parameters

Name | Type | Format | Description
-----|------|--------|------------
`id`	|	``path``	|	``string``	|	**Required** The connection request ID.
`content`	|	``body``	|	-	|	**Required** The connection request object to update.


## <a name="delete"></a>Delete a connection request

    DELETE  /api/v3.0/common/connectionrequests/{id}


### Parameters

Name | Type | Format | Description
-----|------|--------|------------
`id`|````string````|`path`|**Required** The connection request ID.



## <a name="schema"></a>Schema


###<a name="connectionrequets"></a>Connection Requests

Name | Type | Format | Description
-----|------|--------|------------
`Items`	|	``array``	|	[Connection Request](#connectionrequest)	|	The result collection.
`NextPage`	|	``string``	|		|	The URI of the next page of results, if any.


###<a name="connectionrequest"></a>Connection Request

Name | Type | Format | Description
-----|------|--------|------------
`FirstName`	|	``string``	|	-	|	The user's first name.
`ID`	|	``string``	|	-	|	The unique identifier of the resource.
`LastModified`	|	``string``	|	-	|	The date and time when the connection request was last modified. Format: UTC
`LastName`	|	``string``	|	-	|	The user's last name.
`LoyaltyNumber`	|	``string``	|	-	|	The user's travel loyalty number.
`MiddleName`	|	``string``	|	-	|	The user's middle name.
`RequestToken`	|	``string``	|	-	|	The request token.
`Status`	|	``string``	|	-	|	The status code representing the state of the connection request.
`URI`	|	``string``	|	-	|	The URI to the resource.


