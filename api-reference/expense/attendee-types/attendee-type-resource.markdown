---
title: Attendee Type
layout: reference
---


# Attendee Types

The Attendee Type resource represents the type of attendee as configured in Concur.

* [Retrieve all attendees types](#get)
* [Retrieve attendee types by ID](#getID)
* [Create a new attendee type](#post)
* [Update existing attendee type](#put)
* [Delete an attendee type](#delete)
* [Schema](#schema)

### Version
3.0

1.0 documentation is available [here](/api-reference-deprecated/version-one/attendee-types/attendee-type-resource.html)

## <a name="get"></a>Retrieve all attendees types

    GET  /api/v3.0/expense/attendeetypes/

        
### Parameters

Name | Type | Format | Description
-----|------|--------|------------			
`offset`	|	``string``	|	`query`	|	The starting point of the next set of results, after the limit specified in the limit field has been reached.
`limit`	|	`Int32`	|	`query`	|	The number of records to return. Default value: 25


### Request URL

```
https://www.concursolutions.com/api/v3.0/expense/attendeetypes?limit=10
```


### JSON example of a successful response

```
{
  "Items": [
    {
      "Name": "Business Guest",
      "Code": "BUSGUEST",
      "AttendeeFormID": "gWvidmKNPVEaOg$s66rqA62OJVXfvHBMs4sw",
      "DuplicateSearchFields": [
        "Title",
        "Company",
        "OwnerEmpName",
        "FirstName",
        "LastName"
      ],
      "ConnectorID": "",
      "AllowManuallyEnteredAttendees": true,
      "AllowAttendeeCountEditing": true,
      "ID": "gWjUHBxUY4iQLA9KTkbtUD6pc",
      "URI": "https://www.concursolutions.com/api/v3.0/expense/attendeetypes/gWjUHBxUY4iQLA9KTkbtUD6pc"
    },
    {
      "Name": "Healthcare Professional",
      "Code": "HCP",
      "AttendeeFormID": "gWvidmKNPVEH7wO$pDpD9$pk6xVlyJ4EjwIdA",
      "DuplicateSearchFields": [
        "Title",
        "Custom18",
        "ExternalId",
        "FirstName",
        "LastName",
        "Custom7",
        "Custom14",
        "Custom15",
        "Custom16",
        "Custom17",
        "Custom19",
        "Custom8",
        "Custom20"
      ],
      "ConnectorID": "",
      "AllowManuallyEnteredAttendees": true,
      "AllowAttendeeCountEditing": false,
      "ID": "gWjYOjoOorT3dhpHGto5H$poJuoa0m",
      "URI": "https://www.concursolutions.com/api/v3.0/expense/attendeetypes/gWjYOjoOorT3dhpHGto5H$poJuoa0m"
    }
```


## <a name="getID"></a>Retrieve attendee types by ID

    GET  /api/v3.0/expense/attendeetypes/{id}


### Parameters

Name | Type | Format | Description
-----|------|--------|------------
`id`|`string`|`path`|**Required** The ID of the attendee type.

### Request URL

```
https://www.concursolutions.com/api/v3.0/expense/attendeetypes/gWjYOjoOorT3dhpHGto5H%24poJuoa0m
```


### JSON example of a successful response

```
{
  "Name": "Healthcare Professional",
  "Code": "HCP",
  "AttendeeFormID": "gWvidmKNPVEH7wO$pDpD9$pk6xVlyJ4EjwIdA",
  "DuplicateSearchFields": [
    "Title",
    "Custom18",
    "ExternalId",
    "FirstName",
    "LastName",
    "Custom7",
    "Custom14",
    "Custom15",
    "Custom16",
    "Custom17",
    "Custom19",
    "Custom8",
    "Custom20"
  ],
  "ConnectorID": "",
  "AllowManuallyEnteredAttendees": true,
  "AllowAttendeeCountEditing": false,
  "ID": "gWjYOjoOorT3dhpHGto5H$poJuoa0m",
  "URI": "https://www.concursolutions.com/api/v3.0/expense/attendeetypes/gWjYOjoOorT3dhpHGto5H$poJuoa0m"
}
```


## <a name="post"></a>Create a new attendee type

    POST  /api/v3.0/expense/attendeetypes


### Parameters

Name | Type | Format | Description
-----|------|--------|------------
`content`|-|`body`|**Required** The AttendeeType object to create.


### Input

[Attendee Schema](#schema)

### Response

[Attendee Schema](#schema)


### Request URL

```
https://www.concursolutions.com/api/v3.0/expense/attendeetypes
```


### JSON example of a successful response

```
{
  "ID": "gWjYOj4JuT5VB$paQnF31149$sKgaM$p",
  "URI": "https://www.concursolutions.com/api/v3.0/expense/attendeetypes/gWjYOj4JuT5VB$paQnF31149$sKgaM$p"
}
```


## <a name="put"></a>Update existing attendee type

    PUT  /api/v3.0/expense/attendeetypes/{id}


### Parameters

Name | Type | Format | Description
-----|------|--------|------------
`id`|`string`|`path`|**Required** The ID of the attendee type.
`content`|-|`body`|**Required** The partial or complete Attendee object to update.

### Input

[Attendee Schema](#schema)

### Response

[Attendee Schema](#schema)

### Request URL

```
https://www.concursolutions.com/api/v3.0/expense/attendeetypes/gWjYOjoa7Fe0HsTGEk417OCzqUf1A
```


## <a name="delete"></a>Delete an attendee type

    DELETE  /api/v3.0/expense/attendeetypes{id}

### Parameters

Name | Type | Format | Description
-----|------|--------|------------
`id`|`string`|`path`|**Required** The ID of the attendee type to delete


### Input
[Attendee Schema](#schema)

### Response
[Attendee Schema](#schema)

### Request URL

```
https://www.concursolutions.com/api/v3.0/expense/attendeetypes/gWjYOjomP3Jxp6dFC%24pIg%24sc99nQQ3q
```


## <a name="schema"></a>Schema


### <a name="attendeetype"></a>Attendee Type

Name | Type | Format | Description
-----|------|--------|------------
`AllowAttendeeCountEditing`	|	`boolean`	|	-	|	Determines whether users are allowed to edit the count for this attendee type. Format: true or false
`AllowManuallyEnteredAttendees`	|	`boolean`	|	-	|	Determines whether users are allowed to add attendees for this attendee type. Format: true or false
`AttendeeFormID`	|	`string`	|	-	|	The unique identifier for the attendee form for this attendee type.
`Code`	|	`string`	|	-	|	A code that indicates the type of attendee. Examples: EMPLOYEE, SPOUSE, BUSGUEST. Maximum length: 40 characters
`ConnectorID`	|	`string`	|	-	|	The unique identifier for the Application Connector that is the data source for this attendee type. When this field is empty, the Expense database is the data source.
`DuplicateSearchFields`	|	`Array`	|	AttendeeType	|	The list of Attendee field IDs used by the Add Attendee user interface to alert users that the attendee they want to add is a possible duplicate. This parent element has a DuplicateSearchField child element for each field ID.
`ID`	|	`string`	|	-	|	The unique identifier of the resource.
`Name`	|	`string`	|	-	|	The name for the attendee type. This name must be unique. Maximum length: 40 characters
`URI`	|	`string`	|	-	|	The URI to the resource.

