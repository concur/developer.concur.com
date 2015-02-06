---
title: Extract Definition Resource
layout: operation
---




This resource supports the following GET actions:

##  Get Extract Definition List Request

| ----- |
|  Description |  Supported Accept Types |
|  Retrieves the list of extract definitions. |   |
|  Query Parameters - Required |  Query Parameters - Optional |
|  None |  None |
|  Request Headers - Required |  Request Headers - Optional |
|  Authorization header with OAuth token for valid Concur user.

The OAuth consumer must have one of the following user roles in Concur: Company Administrator or Web Services Administrator for Professional, or Can Administer for Standard.

These roles allow the user to manage data for the entire company.

 |  None |

####  XML Example Request

    GET https://www.concursolutions.com/api/expense/extract/v1.0/ HTTP/1.1
    Authorization: OAuth {access token}
    ...

##  Get Extract Definition List Response

| ----- |
|  HTTP Responses |  Supported Content Types |
|  [HTTP Status Codes][1] |   |
|  Content Body |   |
|  This request will return a **definitions** parent element with a **definition** child element for each extract definition. Each **definition** element has the following child elements:  

|  Element |  Description |
|  id |  The extract definition ID URI with encrypted ID. |   |
|  job-link |  The extract job URI with encrypted ID. The job-link value is used as the URI when creating the extract job data request. |
|  name |  The extract definition name. |

 |

####  XML Example of Successful Response

    200 OK
    Content-Type: application/xml

    <definitions xmlns="http://www.concursolutions.com/api/expense/extract/2010/02">
        <definition>
            <id>https://www.concursolutions.com/api/expense/extract/v1.0/nYoPK$pZmcowMRUqcl5bnDAwwsMydyt$xd</id>
            <job-link>https://www.concursolutions.com/api/expense/extract/v1.0/nYoPK$pZmcowMRUqcl5bnDAwwsMydyt$xd/job</job-link>
            <name>Standard Accounting Extract</name>
        </definition>
        <definition>
            <id>https://www.concursolutions.com/api/expense/extract/v1.0/Umj$swS19lpd7Sk$phUYl67wE1ss4Q$shu</id>
            <job-link>https://www.concursolutions.com/api/expense/extract/v1.0/Umj$swS19lpd7Sk$phUYl67wE1ss4Q$shu</job-link>
            <name>European Extract</name>
        </definition>
        <definition>
            <id>https://www.concursolutions.com/api/expense/extract/v1.0/8LjhN23Hs33$piUUfy4ytTqa$sqqacYeP1</id>
            <job-link>https://www.concursolutions.com/api/expense/extract/v1.0/8LjhN23Hs33$piUUfy4ytTqa$sqqacYeP1</job-link>
            <name>Asian Extract</name>
        </definition>
    </definitions>

##  Get Extract Definition Details Request

| ----- |
|  Description |  Supported Accept Types |
|  Retrieves the details of the specified extract definition. |   |
|  Query Parameters - Required |  Query Parameters - Optional |
|

* **{_DefinitionID_**}  
The identifier for the desired extract definition.
Example: https://www.concursolutions.com/api/expense/extract/v1.0/{_DefinitionID_} |  None |
|  Request Headers - Required |  Request Headers - Optional |
|  Authorization header with OAuth token for valid Concur user. The OAuth consumer must have one of the following user roles in Concur: Company Administrator or Web Services Administrator for Professional, or Can Administer for Standard.

These roles allow the user to manage data for the entire company.

 |  None |

####  XML Example Request

    GET https://www.concursolutions.com/api/expense/extract/v1.0/n59FpBJ8hN3qVWTFIrtxkOT5$pef6DmIj3 HTTP/1.1
    Authorization: OAuth {access token}
    ...

##  Get Extract Definition Details Response

| ----- |
|  HTTP Responses |  Supported Content Types |
|

[HTTP Status Codes][1]

 |   |
|  Content Body |   |
|  This request will return a single **definition** element identified by the URI, with the following child elements:  

|  Element |  Description |
|  id |  The extract definition ID URI with encrypted ID. |   |
|  name |  The extract definition name. |
|  job-link |  The extract job URI with encrypted ID. The **job-link** value is used as the URI when creating the extract job data request. |

 |

####  XML Example of Successful Response

    200 OK
    Content-Type: application/xml

     <definition xmlns="http://www.concursolutions.com/api/expense/extract/2010/02" xmlns:i="http://www.w3.org/2001/XMLSchema-instance">
        <id>https://www.concursolutions.com/api/expense/extract/v1.0/n59FpBJ8hN3qVWTFIrtxkOT5$pef6DmIj3</id>
        <name>AMEX Remittance - US</name>
        <job-link>https://www.concursolutions.com/api/expense/extract/v1.0/n59FpBJ8hN3qVWTFIrtxkOT5$pef6DmIj3/job</job-link>
    </definition>

  


[1]: https://developer.concur.com/reference/http-codes
