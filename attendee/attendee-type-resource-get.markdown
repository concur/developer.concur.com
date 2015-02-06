---
title: Attendee Type Resource 
layout: operation
---




This resource supports the following GET actions:

##  Get List of Attendee Types Request

| ----- |
|  Description |  Supported Content Types |
|  Retrieves the list of attendee types for the company. |   |
|  Query Parameters - Required |  Query Parameters - Optional |
|  None |  None |
|  Request Headers - Required |  Request Headers - Optional |
|  Authorization header with OAuth token for valid Concur user.

The OAuth consumer must have one of the following user roles in Concur: Company Administrator or Web Services Administrator for Professional, or Can Administer for Standard.

These roles allow the user to manage data for the entire company.

 |  None |

####  XML Example Request

    GET https://www.concursolutions.com/api/expense/attendee/v1.0/type HTTP/1.1
    Authorization: OAuth {access token}
    ...

##  Get List of Attendee Types Response

| ----- |
|  HTTP Responses |  Supported Content Types |
|  [HTTP Status Codes][1]

[Attendee List Errors][2]

 |   |
|  Content Body |   |
|  This request will return an **attendee-types** parent element containing an **attendee-type** child element for each attendee type. Each **attendee-type** element will contain the following child elements:  

|  Element |  Description |
|  type |  The attendee type code. |   |
|  name |  The attendee type name. |

 |

####  XML Example of Successful Response

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

  


[1]: https://developer.concur.com/reference/http-codes
[2]: https://developer.concur.com/node/374#responses
