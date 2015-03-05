---
title: Get a list of extract definitions
layout: operation
---


This resource supports the following GET actions:

* Get extract definition list
* Get extract definition details

## Get extract definition list

### Description
Retrieves the list of extract definitions. 

### Get extract definition list request

    GET https://www.concursolutions.com/api/expense/extract/v1.0/ HTTP/1.1
    Authorization: OAuth {access token}
    ...

#### Request parameters
None.

#### Headers

##### Authorization header
Required: Authorization header with OAuth token for valid Concur user. The OAuth consumer must have one of the following user roles in Concur: Company Administrator or Web Services Administrator for Professional, or Can Administer for Standard. These roles allow the user to manage data for the entire company.

##### Accept header
application/xml

###  Get extract definition list response

#### Content types
application/xml

#### Root elements

This request will return a **definitions** parent element with a **definition** child element for each extract definition. Each **definition** element has the following child elements.

##### definition child elements

| Element | Description |
| ------- | ----------- | 
|  id |  The extract definition ID URI with encrypted ID. | 
|  job-link |  The extract job URI with encrypted ID. The job-link value is used as the URI when creating the extract job data request. |
|  name |  The extract definition name. |

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

##  Get extract definition details 

### Description
Retrieves the details of the specified extract definition.

### Get extract definition details request

    GET https://www.concursolutions.com/api/expense/extract/v1.0/{_DefinitionID_} HTTP/1.1
    Authorization: OAuth {access token}
    ...

#### Request parameters
**{_DefinitionID_]**<br>
The identifier for the desired extract definition.
Example: `https://www.concursolutions.com/api/expense/extract/v1.0/n59FpBJ8hN3qVWTFIrtxkOT5$pef6DmIj3 `

#### Headers

##### Authorization header
Required: Authorization header with OAuth token for valid Concur user. The OAuth consumer must have one of the following user roles in Concur: Company Administrator or Web Services Administrator for Professional, or Can Administer for Standard. These roles allow the user to manage data for the entire company.

##### Accept header
application/xml

###  Get extract definition details response

#### Content types
application/xml

### Root elements
This request will return a single **definition** element identified by the URI, with the following child elements.

#### definition child elements

| Element | Description |
| ------- | ----------- |
| id |  The extract definition ID URI with encrypted ID. |
| name |  The extract definition name. |
| job-link |  The extract job URI with encrypted ID. The **job-link** value is used as the URI when creating the extract job data request. |

###  XML Example of Successful Response

    200 OK
    Content-Type: application/xml

     <definition xmlns="http://www.concursolutions.com/api/expense/extract/2010/02" xmlns:i="http://www.w3.org/2001/XMLSchema-instance">
        <id>https://www.concursolutions.com/api/expense/extract/v1.0/n59FpBJ8hN3qVWTFIrtxkOT5$pef6DmIj3</id>
        <name>AMEX Remittance - US</name>
        <job-link>https://www.concursolutions.com/api/expense/extract/v1.0/n59FpBJ8hN3qVWTFIrtxkOT5$pef6DmIj3/job</job-link>
    </definition>

