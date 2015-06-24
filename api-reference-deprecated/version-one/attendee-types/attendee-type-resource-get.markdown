---
title: Get attendee types
layout: reference
---


## Description
Retrieves the list of attendee types for the company.

## Request

### Request parameters

None.

### Headers

#### Content type
application/xml

#### Authorization header

The authorization header must have an OAuth token for a valid Concur user.

The OAuth consumer must have one of the following user roles in Concur: Company Administrator or Web Services Administrator for Professional, or Can Administer for Standard. These roles allow the user to manage data for the entire company.

## Response

* [HTTP Status Codes][1]
* [Attendee List Errors][2]

### Content body
This request will return an **attendee-types** parent element containing an **attendee-type** child element for each attendee type. 

#### attendee-type elements

| Element | Description |
|:------------|:-----------------------|
| type | The attendee type code. |
| name | The attendee type name. |


## Examples

### XML Example Request

```xml
    GET https://www.concursolutions.com/api/expense/attendee/v1.0/type HTTP/1.1 
    Authorization: OAuth {access token}
```

### XML Example of Successful Response

```XML
    200 OK
    Content-Type: application/xml

    <attendee-types xmlns="http://www.concursolutions.com/api/expense/attendee/2010/05" xmlns:i="http://www.w3.org/2001/XMLSchema-instance">
      <attendee-type>
        <type>BUSGUEST</type>
        <name>Business Guest</name>
      </attendee-type>
      <attendee-type>
        <type>EMPLOYEE</type>
        <name>Employee</name>
      </attendee-type>
    </attendee-types>
```

[1]: /tools-support/reference/http-codes.html
[2]: /api-reference-deprecated/version-two/attendees/index.html
