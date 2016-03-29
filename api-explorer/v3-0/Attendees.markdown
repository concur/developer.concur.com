---
title: Attendees
layout: reference
reference-type: swagger
---

###Attendees

####GET Expense attendees
This endpoint allows users to GET all attendees owned by the specific user.

####Parameters 
Parameters | Value | Description | Parameter Type | Data Type
---------- | ----- | ----------- | -------------- | --------- 
externalID | | The external ID of an attendee. By entering a value for this parameter, you can limit the results to the attendees who match the specified external ID. Up to 10 comma-separated external IDs may be specified. | query | string
attendeeTypeID || The ID of an attendee type. By entering a value for this parameter, you can limit the results to the attendees who match the specified type. | query | string
offset | | The starting point of the next set of results, after the limit specified in the limit field has been reached. | query | string
limit | | The number of records to return. The default value is 25.| query | string
user | | The login ID of the user that has added the attendee to an expense. The user who is performing this API request must have the Web Services Admin (Professional) or Can Administer (Standard) user role to use this parameter.

####Request URL
```
https://www.concursolutions.com/api/v3.0/expense/attendees?user=ALL
```

####XML EXample of a successful response
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
####POST Expense Attendees
This endpoint allows a user to create a new attendee.

####Parameters 

Parameters | Value | Description | Parameter Type | Data Type
---------- | ----- | ----------- | -------------- | --------- 
Content | **Parameter content type** | The attendee object to create. | body | Model Schema - click to set a s parameter value
user | | The login ID of the user that has added the attendee to an expense. The user who is performing this API request must have the Web Services Admin (Professional) or Can Administer (Standard) user role to use this parameter. | query | string

####Request URL
```
https://www.concursolutions.com/api/v3.0/expense/attendees?user=login of web services admin
```
####XML Example of a successful response
```
Placeholder
```

#### DELETE Expense Attendees by ID
This endpoint allows users to delete specified attendees

####Parameters

Parameters | Value | Description | Parameter Type | Data Type
---------- | ----- | ----------- | -------------- | --------- 
id | | The ID of the attendee to delete. | path | string
user | | The login ID of the user that has added the attendee to an expense. The user who is performing this API request must have the Web Services Admin (Professional) or Can Administer (Standard) user role to use this parameter. | query | string

####Request URL
```
https://www.concursolutions.com/api/v3.0/expense/attendees/gWj3IHRYiHZGUtIO83ILhbNHqCsjMmkvj%24pQ
```

###GET Expense Attendees by ID
This endpoint allows users to GET a single user by their ID. The ID referred to in this endpoint is the ID generated for the attendee for the event which is obtained from the GET Expense Attendees JSON String. Consult the example below for guidance:

```
<ID>gWj3IHRYiHZGX4xP$s0YUWUyoUjss$pWV3z$pQ</ID>
      <URI>https://www.concursolutions.com/api/v3.0/expense/attendees/gWj3IHRYiHZGX4xP$s0YUWUyoUjss$pWV3z$pQ</URI>
```

####Parameters 

Parameters | Value | Description | Parameter Type | Data Type
---------- | ----- | ----------- | -------------- | --------- 
id | **Required** | The attendee ID | path | string
user | | The login ID of the user that has added the attendee to an expense. The user who is performing this API request must have the Web Services Admin (Professional) or Can Administer (Standard) user role to use this parameter. | query | string

####Request URL
```
https://www.concursolutions.com/api/v3.0/expense/attendees/gWj3IHRYiHZGUtIO83ILhbNHqCsjMmkvj%24pQ
```
####XML Example of a successful response
```
<Attendee xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
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

###PUT Expense Attendees by ID
This endpoint updates the specified attendee. Only fields provided in the supplied object are updated. Missing field are not altered.

Parameters | Value | Description | Parameter Type | Data Type
---------- | ----- | ----------- | -------------- | --------- 
id | **Required** | The attendee ID | path | string
content | **Required** | The partial or complete Attendee object to update | body | string
user | | The login ID of the user that has added the attendee to an expense. The user who is performing this API request must have the Web Services Admin (Professional) or Can Administer (Standard) user role to use this parameter. | query | string

####Request URL
```
https://www.concursolutions.com/api/v3.0/expense/attendees/gWj3IHRYiHZGUtIO83ILhbNHqCsjMmkvj%24pQ
```

####XML Example of a successful response
```
Placeholder
```

{% swagger /api-explorer/v3-0/Attendees.swagger2.json %}
