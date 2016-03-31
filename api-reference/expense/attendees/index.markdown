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

### Version
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


###Request URL
```
https://www.concursolutions.com/api/v3.0/expense/attendees?limit=5&user=jimadmin%40concurconnect2.com
```

###XML Example of a successful response
```
<Attendees xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
  <Items>
    <Attendee>
      <ID>gWj3IHRYiHZGUtIO83ILhbNHqCsjMmkvj$pQ</ID>
      <URI>https://www.concursolutions.com/api/v3.0/expense/attendees/gWj3IHRYiHZGUtIO83ILhbNHqCsjMmkvj$pQ</URI>
      <AttendeeTypeCode>NOSHOWS</AttendeeTypeCode>
      <AttendeeTypeID>gWjYOjoCmOo2Ua$pH4qnCsQxgS8Z0E</AttendeeTypeID>
      <FirstName xsi:nil="true" />
      <LastName>No Show Attendee</LastName>
      <MiddleInitial xsi:nil="true" />
      <Suffix xsi:nil="true" />
      <Company xsi:nil="true" />
      <Title xsi:nil="true" />
      <ExternalID xsi:nil="true" />
      <HasExceptionsPrevYear>false</HasExceptionsPrevYear>
      <HasExceptionsYTD>false</HasExceptionsYTD>
      <TotalAmountPrevYear>0.00000000</TotalAmountPrevYear>
      <TotalAmountYTD>0.00000000</TotalAmountYTD>
      <VersionNumber>1</VersionNumber>
      <OwnerName>System, Concur</OwnerName>
      <OwnerLoginID>ConcurSystem</OwnerLoginID>
      <CurrencyCode>USD</CurrencyCode>
      <Custom1 xsi:nil="true" />
      <Custom2 xsi:nil="true" />
      <Custom3 xsi:nil="true" />
      <Custom4 xsi:nil="true" />
      <Custom5 xsi:nil="true" />
      <Custom6 xsi:nil="true" />
      <Custom7 xsi:nil="true" />
      <Custom8 xsi:nil="true" />
      <Custom9 xsi:nil="true" />
      <Custom10 xsi:nil="true" />
      <Custom11 xsi:nil="true" />
      <Custom12 xsi:nil="true" />
      <Custom13 xsi:nil="true" />
      <Custom14 xsi:nil="true" />
      <Custom15 xsi:nil="true" />
      <Custom16 xsi:nil="true" />
      <Custom17 xsi:nil="true" />
      <Custom18 xsi:nil="true" />
      <Custom19 xsi:nil="true" />
      <Custom20 xsi:nil="true" />
      <Custom21 xsi:nil="true" />
      <Custom22 xsi:nil="true" />
      <Custom23 xsi:nil="true" />
      <Custom24 xsi:nil="true" />
      <Custom25 xsi:nil="true" />
    </Attendee>
```


## <a name="getID"></a>Retrieve a single attendee by ID

    GET  /api/v3.0/expense/attendees/{id}


### Parameters

Name | Type | Format | Description
-----|------|--------|------------
`id`|`string`|`path`|**Required** The attendee object to create.
`user`|``string``|`query`| The login ID of the user that has added the attendee to an expense. The user who is performing this API request must have the Web Services Admin (Professional) or Can Administer (Standard) user role to use this parameter

###Request URL
```
https://www.concursolutions.com/api/v3.0/expense/attendees/gWj3IHRYiHZGRTDN6y4r4LN3phszY33HT%24pQ?user=jimadmin%40concurconnect2.com
```

###XML Example of a successful response
```
<Attendee xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
  <ID>gWj3IHRYiHZGRTDN6y4r4LN3phszY33HT$pQ</ID>
  <URI>https://www.concursolutions.com/api/v3.0/expense/attendees/gWj3IHRYiHZGRTDN6y4r4LN3phszY33HT$pQ</URI>
  <AttendeeTypeCode>BUSGUEST</AttendeeTypeCode>
  <AttendeeTypeID>gWjUHBxUY4iQLA9KTkbtUD6pc</AttendeeTypeID>
  <FirstName>Marco</FirstName>
  <LastName>Simoncelli</LastName>
  <MiddleInitial xsi:nil="true" />
  <Suffix xsi:nil="true" />
  <Company>Honda</Company>
  <Title xsi:nil="true" />
  <ExternalID>58</ExternalID>
  <HasExceptionsPrevYear>false</HasExceptionsPrevYear>
  <HasExceptionsYTD>false</HasExceptionsYTD>
  <TotalAmountPrevYear>0.00000000</TotalAmountPrevYear>
  <TotalAmountYTD>0.00000000</TotalAmountYTD>
  <VersionNumber>1</VersionNumber>
  <OwnerName>System, Concur</OwnerName>
  <OwnerLoginID>ConcurSystem</OwnerLoginID>
  <CurrencyCode>USD</CurrencyCode>
  <Custom1 xsi:nil="true" />
  <Custom2 xsi:nil="true" />
  <Custom3 xsi:nil="true" />
  <Custom4 xsi:nil="true" />
  <Custom5 xsi:nil="true" />
  <Custom6 xsi:nil="true" />
  <Custom7 xsi:nil="true" />
  <Custom8 xsi:nil="true" />
  <Custom9 xsi:nil="true" />
  <Custom10 xsi:nil="true" />
  <Custom11 xsi:nil="true" />
  <Custom12 xsi:nil="true" />
  <Custom13 xsi:nil="true" />
  <Custom14 xsi:nil="true" />
  <Custom15 xsi:nil="true" />
  <Custom16 xsi:nil="true" />
  <Custom17 xsi:nil="true" />
  <Custom18 xsi:nil="true" />
  <Custom19 xsi:nil="true" />
  <Custom20 xsi:nil="true" />
  <Custom21 xsi:nil="true" />
  <Custom22 xsi:nil="true" />
  <Custom23 xsi:nil="true" />
  <Custom24 xsi:nil="true" />
  <Custom25 xsi:nil="true" />
</Attendee>
```


## <a name="post"></a>Create a new attendee

    POST  /api/v3.0/expense/attendees


### Parameters

Name | Type | Format | Description
-----|------|--------|------------
`content`|`body`|-|**Required** The attendee object to create
`user`|``string``|`query`| The login ID of the user that has added the attendee to an expense. The user who is performing this API request must have the Web Services Admin (Professional) or Can Administer (Standard) user role to use this parameter

###Request URL
```
https://www.concursolutions.com/api/v3.0/expense/attendees?user=jimadmin%40concurconnect2.com
```

### Input
[Attendee Schema](#schema)

### Response
[Attendee Schema](#schema)


## <a name="put"></a>Update existing attendees

    PUT  /api/v3.0/expense/attendees/{id}


### Parameters

Name | Type | Format | Description
-----|------|--------|------------
`id`|`string`|`path`|**Required** The attendee ID
`content`|``body``|-|**Required** The partial or complete Attendee object to update.
`user`|``string``|`query`|The login ID of the user that has added the attendee to an expense. The user who is performing this API request must have the Web Services Admin (Professional) or Can Administer (Standard) user role to use this parameter

### Input
[Attendee Schema](#schema)

### Response
[Attendee Schema](#schema)


## <a name="delete"></a>Delete an attendee

    DELETE  /api/v3.0/expense/attendees/{id}

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

### <a name="attendees"></a>Attendees

Name | Type | Format | Description
-----|------|--------|------------
`Items`|`array`|[`Attendee`](#attendee)|The result collection.
`NextPage`|``string``|-|The URI of the next page of results, if any.

### <a name="attendee"></a>Attendee

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

### <a name="status"></a>Custom Field

Name | Type | Format | Description
-----|------|--------|------------
`Code`|``string``|-|For list fields, this is the list item code.
`ListItemID`|``string``|-|For list fields, this is the list item ID.
`Type`|``string``|-|The custom field type. Possible values: Amount, Boolean, ConnectedList, Date, Integer, List, Number, Text
`Value`|``string``|-|The value in the Org Unit or Custom field. For list fields, this is the name of the list item. Maximum length: 48 characters

###Request URL
```
https://www.concursolutions.com/api/v3.0/expense/attendees/gWj3IHRYiHZGQfry7MIhVOYtD%24ss2Jnnwj%24pQ?user=jimadmin%40concurconnect2
```

