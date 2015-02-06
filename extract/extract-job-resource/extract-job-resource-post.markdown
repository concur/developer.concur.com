---
title: Extract Job Resource
layout: resource
---

##  Post Extract Job Initiation Request

Initiates a new extract job for the specified extract definition.

## Query Parameters - Required

* **{_DefinitionID_}/job**  
The definition identifier and the job keyword.

##URI
https://www.concursolutions.com/api/expense/extract/v1.0/{_DefinitionID_}/job

## Content type
* application/xml


## Request Headers - Required
Authorization header with OAuth token for valid Concur user.

The OAuth consumer must have one of the following user roles in Concur: Company Administrator or Web Services Administrator for Professional, or Can Administer for Standard.

These roles allow the user to manage data for the entire company.

## Content Body
This request requires a **definition** parent element with the following child element:  

|  Element |  Required (must contain value)? |  Description |
|--------------|-------------------------------------------|-------------------|
|  id |  Y |  The unique job identifier with encrypted ID.

###  XML Example Request

    POST https://www.concursolutions.com/api/expense/extract/v1.0/nYoPK$pZmcowMRUqcl5bnDAwwsMydyt$xd/job HTTP/1.1
    Authorization: OAuth {access token}
    Content-Type: application/xml
    ...

    <definition xmlns="http://www.concursolutions.com/api/expense/extract/2010/02">
        <id>https://www.concursolutions.com/api/expense/extract/v1.0/nYoPK$pZmcowMRUqcl5bnDAwwsMydyt$xd</id>
    </definition>

##  Post Extract Job Initiation Response

[HTTP Status Codes][1] 


### Content Body
This request will return a **job** parent element with the following child elements:  

|  Element |  Description |
|-------------|------------------|
|  id |  The unique job identifier with encrypted ID. | 
|  start-time |  The time, in UTC (GMT), that the job is scheduled to start. |
|  status-link |  A URI for retrieving the current status of the job, with encrypted ID. |
|  status |  The current status of the job. |

  
If the job was successfully scheduled, the HTTP response code will be 201 Created and the Location response header will contain the URI of the newly scheduled job. The job will be scheduled to start as soon as possible. The  value will be Queued until the job begins.  |

####  XML Example of Successful Response

    201 Created
    Location: https://www.concursolutions.com/api/expense/extract/v1.0/nYoPK$pZmcowMRUqcl5bnDAwwsMydyt$xd/job/uIo87jk3SHudi$sdlYle8$peot$pD21jyd
    Content-Type: application/xml
    ...

    <job xmlns="...">
        <id>https://www.concursolutions.com/api/expense/extract/v1.0/nYoPK$pZmcowMRUqcl5bnDAwwsMydyt$xd/job/uIo87jk3SHudi$sdlYle8$peot$pD21jyd</id>
        <status-link> https://www.concursolutions.com/api/expense/extract/v1.0/nYoPK$pZmcowMRUqcl5bnDAwwsMydyt$xd/job/uIo87jk3SHudi$sdlYle8$peot$pD21jyd/status</status-link>
        <start-time>2010-01-13T18:30:02Z</start-time>
        <status>Queued</status>
    </job>

  


[1]: https://developer.concur.com/reference/http-codes
