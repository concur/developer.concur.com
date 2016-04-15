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

###Request URL
```
https://www.concursolutions.com/api/v3.0/expense/attendeetypes?limit=5
```

###XML Example of a successful response
```
<AttendeeTypes xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
  <Items>
    <AttendeeType>
      <ID>gWjUHBxUY4iQLA9KTkbtUD6pc</ID>
      <URI>https://www.concursolutions.com/api/v3.0/expense/attendeetypes/gWjUHBxUY4iQLA9KTkbtUD6pc</URI>
      <Name>Business Guest</Name>
      <Code>BUSGUEST</Code>
      <AttendeeFormID>gWvidmKNPVEaOg$s66rqA62OJVXfvHBMs4sw</AttendeeFormID>
      <DuplicateSearchFields>
        <DuplicateSearchField>Title</DuplicateSearchField>
        <DuplicateSearchField>Company</DuplicateSearchField>
        <DuplicateSearchField>OwnerEmpName</DuplicateSearchField>
        <DuplicateSearchField>FirstName</DuplicateSearchField>
        <DuplicateSearchField>LastName</DuplicateSearchField>
      </DuplicateSearchFields>
      <ConnectorID />
      <AllowManuallyEnteredAttendees>true</AllowManuallyEnteredAttendees>
      <AllowAttendeeCountEditing>true</AllowAttendeeCountEditing>
    </AttendeeType>
    <AttendeeType>
      <ID>gWjYs6nUm$ptrgvkjvwYt2B3SN</ID>
      <URI>https://www.concursolutions.com/api/v3.0/expense/attendeetypes/gWjYs6nUm$ptrgvkjvwYt2B3SN</URI>
      <Name>Employee</Name>
      <Code>EMPLOYEE</Code>
      <AttendeeFormID>gWvidmKNPVEz8W4lJWEPWQF1u7bqDgK3ZkA</AttendeeFormID>
      <DuplicateSearchFields>
        <DuplicateSearchField>Title</DuplicateSearchField>
        <DuplicateSearchField>OwnerEmpName</DuplicateSearchField>
        <DuplicateSearchField>FirstName</DuplicateSearchField>
        <DuplicateSearchField>LastName</DuplicateSearchField>
      </DuplicateSearchFields>
      <ConnectorID />
      <AllowManuallyEnteredAttendees>true</AllowManuallyEnteredAttendees>
      <AllowAttendeeCountEditing>false</AllowAttendeeCountEditing>
    </AttendeeType>
```


## <a name="getID"></a>Retrieve attendee types by ID

    GET  /api/v3.0/expense/attendeetypes/{id}


### Parameters

Name | Type | Format | Description
-----|------|--------|------------
`id`|`string`|`path`|**Required** The ID of the attendee type.

###Request URL
```
https://www.concursolutions.com/api/v3.0/expense/attendeetypes/gWjYs6nUm%24ptrgvkjvwYt2B3SN
```

###XML Example of a successful response
```
<AttendeeType xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
  <ID>gWjYs6nUm$ptrgvkjvwYt2B3SN</ID>
  <URI>https://www.concursolutions.com/api/v3.0/expense/attendeetypes/gWjYs6nUm$ptrgvkjvwYt2B3SN</URI>
  <Name>Employee</Name>
  <Code>EMPLOYEE</Code>
  <AttendeeFormID>gWvidmKNPVEz8W4lJWEPWQF1u7bqDgK3ZkA</AttendeeFormID>
  <DuplicateSearchFields>
    <DuplicateSearchField>Title</DuplicateSearchField>
    <DuplicateSearchField>OwnerEmpName</DuplicateSearchField>
    <DuplicateSearchField>FirstName</DuplicateSearchField>
    <DuplicateSearchField>LastName</DuplicateSearchField>
  </DuplicateSearchFields>
  <ConnectorID />
  <AllowManuallyEnteredAttendees>true</AllowManuallyEnteredAttendees>
  <AllowAttendeeCountEditing>false</AllowAttendeeCountEditing>
</AttendeeType>
```


## <a name="post"></a>Create a new attendee type

    POST  /api/v3.0/expense/attendeetypes


### Parameters

Name | Type | Format | Description
-----|------|--------|------------
`content`|-|`body`|**Required** The AttendeeType object to create.


### Input

[Attendee Schema](#schema)


###Request URL
```
https://www.concursolutions.com/api/v3.0/expense/attendeetypes
```


### Response

[Attendee Schema](#schema)


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


## <a name="delete"></a>Delete an attendee type

    DELETE  /api/v3.0/expense/attendeetypes{id}

### Parameters

Name | Type | Format | Description
-----|------|--------|------------
`id`|`string`|`path`|**Required** The ID of the attendee type to delete


###Request URL
```
https://www.concursolutions.com/api/v3.0/expense/attendeetypes/gWjeLsVUzCo9GKsE78ZtoAME9
```


### Input
[Attendee Schema](#schema)

### Response
[Attendee Schema](#schema)



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

