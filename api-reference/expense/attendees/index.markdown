---
title: Attendees
layout: reference
---


# Attendees
* [Retrieve all attendees owned by the specified user](#get)
* [Retrieve a single attendee by ID](#getID)
* [Create a new attendee](#post)
* [Update existing attendees](#put)
* [Delete an attendee](#delete)
* [Schema](#schema)
* [Make a test call using 3.0 Swagger](https://www.concursolutions.com/api/docs/index.html#!/Attendees)

###Version
3.0

2.0 documentation is available [here](/api-reference-deprecated/version-two/attendees/index.html)

## <a name="get"></a>Retrieve all attendees owned by the specified user

    GET  /api/v3.0/expense/attendees	

        
### Parameters

Name | Type | Format | Description
-----|------|--------|------------			
`externalID`	|	``string``	|	`query`	|	The external ID of an attendee. By entering a value for this parameter, you can limit the results to the attendees who match the specified external ID. Up to 10 comma-separated external IDs may be specified.
`attendeeTypeID`	|	``string``	|	`query`	|	The ID of an attendee type. By entering a value for this parameter, you can limit the results to the attendees who match the specified type.
`offset`	|	``string``	|	`query`	|	The starting point of the next set of results, after the limit specified in the limit field has been reached.
`limit`	|	`Int32`	|	`query`	|	The number of records to return. Default value: 25
`user`|``string``|`query`| The login ID of the user that has added the attendee to an expense. The user who is performing this API request must have the Web Services Admin (Professional) or Can Administer (Standard) user role to use this parameter



## <a name="getID"></a>Retrieve a single attendee by ID

    GET  /api/v3.0/expense/attendees{id}


### Parameters

Name | Type | Format | Description
-----|------|--------|------------
`id`|`string`|`path`|**Required** The attendee object to create.
`user`|``string``|`query`| The login ID of the user that has added the attendee to an expense. The user who is performing this API request must have the Web Services Admin (Professional) or Can Administer (Standard) user role to use this parameter



## <a name="post"></a>Create a new attendee

    POST  /api/v3.0/expense/attendees


### Parameters

Name | Type | Format | Description
-----|------|--------|------------
`content`|`body`|-|**Required** The attendee object to create
`user`|``string``|`query`| The login ID of the user that has added the attendee to an expense. The user who is performing this API request must have the Web Services Admin (Professional) or Can Administer (Standard) user role to use this parameter


### Input
[Attendee Schema](#schema)

### Response
[Attendee Schema](#schema)


## <a name="put"></a>Update existing attendees

    PUT  /api/v3.0/expense/attendees{id}


### Parameters

Name | Type | Format | Description
-----|------|--------|------------
`id`|`body`|`path`|**Required** The attendee ID
`content`|``path``|-|**Required** The partial or complete Attendee object to update.
`user`|``string``|`query`|The login ID of the user that has added the attendee to an expense. The user who is performing this API request must have the Web Services Admin (Professional) or Can Administer (Standard) user role to use this parameter

### Input
[Attendee Schema](#schema)

### Response
[Attendee Schema](#schema)


## <a name="delete"></a>Delete an attendee

    DELETE  /api/v3.0/expense/attendees{id}

### Parameters

Name | Type | Format | Description
-----|------|--------|------------
`id`|`string`|`path`|**Required** The ID of the attendee to delete.
`user`|``string``|`query`| The login ID of the user that has added the attendee to an expense. The user who is performing this API request must have the Web Services Admin (Professional) or Can Administer (Standard) user role to use this parameter.

### Input
[Attendee Schema](#schema)

### Response
[Attendee Schema](#schema)



## <a name="schema"></a>Schema

###<a name="attendees"></a>Attendees

Name | Type | Format | Description
-----|------|--------|------------
`Items`|`array`|[`Attendee`](#attendee)|The result collection.
`NextPage`|``string``|-|The URI of the next page of results, if any.

###<a name="attendee"></a>Attendee

Name | Type | Format | Description
-----|------|--------|------------
`AttendeeTypeCode`	|	``string``	|	-	|	A code that indicates the type of attendee. Examples: EMPLOYEE, SPOUSE, BUSGUEST. Maximum length: 40 characters
`AttendeeTypeID`	|	``string``	|	-	|	The ID of the attendee type. To obtain the attendee type ID value, use the GET /expense/attendeetypes endpoint. The value of the ID element in the response is the attendee type ID.
`Company`	|	``string``	|	-	|	The name of the attendee's company. Maximum length: 150 characters
`CurrencyCode`	|	`string`	|	-	|	The 3-letter ISO 4217 currency code for monetary amounts related to an attendee.
`Custom1 through Custom25`	|	`CustomField`	|	-	|	A custom field associated with the attendee. This field may or may not have data, depending on how Expense is configured.
`ExternalID`	|	`string`	|	-	|	A unique identifier for the attendee, assigned outside of Concur. Maximum length: 48 characters
`FirstName`	|	`string`	|	-	|	The attendee's first name. Maximum length: 50 characters
`HasExceptionsPrevYear`	|	`Boolean`	|	-	|	Determines whether the attendee had exceptions in the previous year, based on yearly total limits for attendees. Format: true or false
`HasExceptionsYTD`	|	`Boolean`	|	-	|	Determines whether the attendee has exceptions in the current year, based on yearly total limits for attendees. Format: true or false
`ID`	|	`string`	|	-	|	The unique identifier of the resource.
`LastName`	|	`string`	|	-	|	The attendee's last name. Maximum length: 132 characters
`MiddleInitial`	|	`string`	|	-	|	The attendee's middle initial. Maximum length: 1 character
`OwnerLoginID`	|	`string`	|	-	|	The login ID of the user who owns the attendee record.
`OwnerName`	|	`string`	|	-	|	The name of the user who owns the attendee record.
`Suffix`	|	`string`	|	-	|	The attendee's name suffix. Maximum length: 32 characters
`Title`	|	`string`	|	-	|	The attendee's title. Maximum length: 32 characters
`TotalAmountPrevYear`	|	`Decimal`	|	-	|	The total amount spent on the attendee in the previous calendar year.
`otalAmountYTD`	|	`Decimal`	|	-	|	The total amount spent on the attendee in the current calendar year.
`URI`	|	`string`	|	-	|	The URI to the resource.
`VersionNumber`	|	`Int32`	|	-	|	The attendee's version number.

###<a name="status"></a>Custom Field

Name | Type | Format | Description
-----|------|--------|------------
`Code`|``string``|-|For list fields, this is the list item code.
`ListItemID`|``string``|-|For list fields, this is the list item ID.
`Type`|``string``|-|The custom field type. Possible values: Amount, Boolean, ConnectedList, Date, Integer, List, Number, Text
`Value`|``string``|-|The value in the Org Unit or Custom field. For list fields, this is the name of the list item. Maximum length: 48 characters



