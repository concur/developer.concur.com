---
title: Entry Attendee
layout: reference
---



# Entry Attendee
* [Retrieve all entry-attendee associations owned by the user](#get)
* [Retrieve an entry-attendee association by ID](#getID)
* [Create a new entry-attendee association](#post)
* [Update a specified entry-attendee association](#put)
* [Delete a specified entry-attendee association](#delete)
* [Schema](#schema)

##Version  

3.0  
  
2.0 documentation is available [here.](/api-reference-deprecated/version-two/expense-entry-attendee/expense-entry-attendee-resource.html)


## <a name="get"></a>Retrieve all entry-attendee associations owned by the user

    GET /expense/entryattendeeassociations

        
### Parameters

Name | Type | Format | Description
-----|------|--------|------------			
`entryID`	|	`string`	|	`query`	|	The ID of the entry for which to retrieve entry-attendee associations.
`offset`	|	`string`	|	`query`	|	The starting point of the next set of results, after the limit specified in the limit field has been reached.
`limit`	|	`Int32`	|	`query`	|	The number of records to return. Default value: 25
`user`	|	`string`	|	`query`	|	The login ID of the user who owns this entry-attendee association. The user must have the Web Services Admin role to use this parameter.



## <a name="getID"></a>Retrieve an entry-attendee association by ID

    GET /expense/entryattendeeassociations/{id}


### Parameters

Name | Type | Format | Description
-----|------|--------|------------
`id`	|	`string`	|	`path`	|	**Required** The ID of the entry-attendee association.
`user`	|	`string`	|	`query`	|	The login ID of the user who owns this entry-attendee association. The user must have the Web Services Admin role to use this parameter.


## <a name="post"></a>Create a new entry-attendee association

    POST /expense/entryattendeeassociations


### Parameters

Name | Type | Format | Description
-----|------|--------|------------
`content`	|	-	|	`body`	|	**Required** The EntryAttendeeAssociation object to create.


## <a name="put"></a>Update a specified entry-attendee association

    PUT /expense/entryattendeeassociations/{id}


### Parameters

Name | Type | Format | Description
-----|------|--------|------------
`id`	|	`string`	|	`path`	|	**Required** The ID of the entry-attendee association.
`content`	|	-	|	`body`	|	**Required** The partial or complete EntryAttendeeAssociation object to update.


## <a name="delete"></a>Delete a specified entry-attendee association

    DELETE /expense/entryattendeeassociations/{id}


### Parameters

Name | Type | Format | Description
-----|------|--------|------------
`id`|````string````|`path`|**Required** The connection request ID.



## <a name="schema"></a>Schema


###<a name="EntryAttendeeAssociations"></a>Entry Attendee Associations

Name | Type | Format | Description
-----|------|--------|------------
`Items`	|	`array`	|[Entry Attendee Association](#entryattendeeassociation)	|	The result collection.
`NextPage`	|	`string`|	-	|	The URI of the next page of results, if any.


###<a name="entryattendeeassociation"></a>Entry Attendee Association

Name | Type | Format | Description
-----|------|--------|------------
`Amount`	|	`Decimal`	|	-	|	The portion of the entry transaction amount assigned to this attendee.
`AssociatedAttendeeCount`	|	`Int32`	|	-	|	The count of additional attendees associated with this attendee. A count greater than 1 means there are unnamed attendees associated with this attendee.
`AttendeeID`	|	`string`	|	-	|	The unique identifier of the associated attendee. To obtain the attendee ID value, use the GET /expense/attendees endpoint. The value of the ID element in the response is the attendee ID.
`Custom1`	|	`string`	|	-	|	The details from the Custom fields. These fields may not have data, depending on the configuration.
`Custom2`	|	`string`	|	-	|	The details from the Custom fields. These fields may not have data, depending on the configuration.
`Custom3`	|	`string`	|	-	|	The details from the Custom fields. These fields may not have data, depending on the configuration.
`Custom4`	|	`string`	|	-	|	The details from the Custom fields. These fields may not have data, depending on the configuration.
`Custom5`	|	`string`	|	-	|	The details from the Custom fields. These fields may not have data, depending on the configuration.
`EntryID`	|	`string`	|	-	|	The unique identifier of the associated entry. To obtain the attendee ID value, use the GET /expense/entries endpoint. The value of the ID element in the response is the entry ID.
`ID`	|	`string`	|	-	|	The unique identifier of the resource.
`URI`	|	`string`	|	-	|	The URI to the resource.

