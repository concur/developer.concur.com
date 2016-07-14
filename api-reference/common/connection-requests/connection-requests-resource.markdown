---
title: Connection Requests
layout: reference
---

# Connection Requests

The Connection Requests resource is used to integrate TripLink partner applications with Concur. It can be used to create, update, and manage connections between a user's Concur account and a select travel loyalty program. With Connection Requests a TripLink partner application can retrieve new connection requests in order to match users who want to connect to the supplier with the user's account in the supplier system. After the request is retreived, the supplier is expected to provide a status if the connetion was successful connections or failed. When retrieving new connections, the results can be filtered by status, page offset, and a limit for the number of records to return.

In version 3.1, connection requests can also associate users to either loyalty programs, Concur verified e-mail addresses, or both of these factors. Concur verified emails are email addresses where a user has taken additional steps to confirm an email belongs to them by entering a verifiication code within the Concur UI after receiving this in their email. Verified emails have uniqueness across all user accounts in the Concur system.

The use of loyalty numbers and/or verified emails to identify users is based on the business agreement between Concur and the TripLink supplier and will be discussed during the TripLink integration kick-off process. Email or loyalty number will not be returned in the connection request if the supplier is not using these factors in their process to to match a user in their system to a Concur user.

Concur's recommendation for suppliers is to match users requesting to conenct utilizing last name and loyalty number only. Or in the case of suppliers without loyalty numbers to use verfied email and the last name of the user only. The first name and middle name fields have proved to generate a high degree of failures when utilized due to issues like Nicknames within the supplier systems. 

* [Retrieve all connection requests that match the TripLink supplier ID](#get)
* [Retrieve a connection request by ID](#getID)
* [Create a connection request on behalf of a specific user](#post)
* [Update a connection request](#put)
* [Schema 3.0](#schema)
* [Schema 3.1](#schema31)


### Version
3.0, 3.1

## <a name="get"></a>Retrieve all connection requests tht match the TripLink supplier ID

    GET  /api/v3.0/common/connectionrequests/
    GET  /api/v3.1/common/connectionrequests/

        
### Parameters

Name | Type | Format | Description
-----|------|--------|------------			
`offset`	|	``query``	|	``string``	|	The starting point of the next set of results, after the limit specified in the limit field has been reached. The default is the beginning of the page.
`limit`	|	``query``	|	``Int32``	|	The number of records to return. The default is 5 and the maximum is 10.
`status`	|	``query``	|	``string``	|	The status code representing the state of the connection request. The possible values are Pending, Processing, Connected, Failed, and Retry.



## <a name="getID"></a>Retrieve a connection request by ID

    GET  /api/v3.0/common/connectionrequests/{id}
    GET  /api/v3.1/common/connectionrequests/{id}


### Parameters

Name | Type | Format | Description
-----|------|--------|------------
`id`	|	``path``	|	``string``	|	**Required** The connection request ID.


## <a name="post"></a>Create a connection request on behalf of a specific user

    POST  /api/v3.0/common/connectionrequests/
    POST  /api/v3.1/common/connectionrequests/


### Parameters

Name | Type | Format | Description
-----|------|--------|------------
`user`	|	``query``	|	``string``	|	**Required** The login ID of the user for whom to create the connection request. The user must have the Web Services Admin role to use this parameter.


## <a name="put"></a>Update a connection request

    PUT  /api/v3.0/common/connectionrequests/{id}
    PUT  /api/v3.1/common/connectionrequests/{id}


### Parameters

Name | Type | Format | Description
-----|------|--------|------------
`id`	|	``path``	|	``string``	|	**Required** The connection request ID.
`content`	|	``body``	|	-	|	**Required** The connection request object to update.

## <a name="schema"></a>Schema 3.0


### <a name="connectionrequets"></a>Connection Requests

Name | Type | Format | Description
-----|------|--------|------------
`Items`	|	``array``	|	[Connection Request](#connectionrequest)	|	The result collection.
`NextPage`	|	``string``	|		|	The URI of the next page of results, if any.


### <a name="connectionrequest"></a>Connection Request

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

## <a name="schema31"></a>Schema 3.1


### <a name="connectionrequets31"></a>Connection Requests

Name | Type | Format | Description
-----|------|--------|------------
`Items`	|	``array``	|	[Connection Request](#connectionrequest31)	|	The result collection.
`NextPage`	|	``string``	|		|	The URI of the next page of results, if any.


### <a name="connectionrequest31"></a>Connection Request

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
`EmailAddresses`	|	``UserEmailAddresses``	|	[User Email Addresses](#useremailaddresses)	|	Email addresses associated with the user.


### <a name="useremailaddresses"></a>User Email Addresses

Name | Type | Format | Description
-----|------|--------|------------
`Email1`	|	``string``	|	-	|	The user's verified email address.
`Email2`	|	``string``	|	-	|	The user's verified email address.
`Email3`	|	``string``	|	-	|	The user's verified email address.
`Email4`	|	``string``	|	-	|	The user's verified email address.
`Email5`	|	``string``	|	-	|	The user's verified email address.


