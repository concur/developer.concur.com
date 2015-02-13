---
title: Get a list of extract jobs
layout: operation
---

This resource supports the following GET actions:

* Get Extract Job List
* Get Extract Job Details
* Get Extract Job Status

##  Get Extract Job List

### Description
Requests a list of the last 100 extract jobs ran for the specified Extract Definition.

### Get Extract Job List Request

    GET https://www.concursolutions.com/api/expense/extract/v1.0/nYoPK$pZmcowMRUqcl5bnDAwwsMydyt$xd/job HTTP/1.1
    Authorization: OAuth {access token}
    ...

#### Request parameters
* **{_DefinitionID_}/job**<br>Required. The definition identifier and the job keyword.

Example: `https://www.concursolutions.com/api/expense/extract/v1.0/{_DefinitionID_}/job `

#### Headers

##### Authorization header
Required. Authorization header with OAuth token for valid Concur user. The OAuth consumer must have one of the following user roles in Concur: Company Administrator or Web Services Administrator for Professional, or Can Administer for Standard. These roles allow the user to manage data for the entire company.

##### Accept header
application/xml

### Get Extract Job List Response

#### Content types
application/xml

#### Root elements
This request will return a **jobs** parent element containing a **job** child element for each of the past 100 extract jobs for the extract definition. Each **job** element will contain the following child elements.

##### job child elements

| Element | Description |
| ------- | ----------- |
| id | The unique job identifier with encrypted ID. | 
| status-link | A URI for retrieving the current job status, with encrypted ID. The **status-link** value is used as the URI when requesting the job status. |
| start-time | The time, in UTC (GMT), that the job is scheduled to start. |
| stop-time | The time, in UTC (GMT), that the job finished. Not included if the job is still running. |
| status | The current status of the job. |
| file-link | A URI for retrieving the file or files produced by the job run, with encrypted ID. Not included if the job is still running. The **file-link** value is used as the URI when retrieving the extract data. |

####  XML Example of Successful Response

```
200 OK
Content-Type: application/xml
```
```xml
    <jobs xmlns="...">
        <job>
            <id>https://www.concursolutions.com/api/expense/extract/v1.0/nYoPK$pZmcowMRUqcl5bnDAwwsMydyt$xd/job/uIo87jk3SHudi$sdlYle8$peot$pD21jyd</id>
            <status-link>https://www.concursolutions.com/api/expense/extract/v1.0/nYoPK$pZmcowMRUqcl5bnDAwwsMydyt$xd/job/uIo87jk3SHudi$sdlYle8$peot$pD21jyd/status</status-link>
            <start-time>2010-01-13T18:30:02Z</start-time>
            <status>Queued</status>
        </job>
        <job>
            <id>https://www.concursolutions.com/api/expense/extract/v1.0/nYoPK$pZmcowMRUqcl5bnDAwwsMydyt$xd/job/21UwwqA3jk25Lis77jF$piiD21c89lLwEq</id>
            <status-link>https://www.concursolutions.com/api/expense/extract/v1.0/nYoPK$pZmcowMRUqcl5bnDAwwsMydyt$xd/job/21UwwqA3jk25Lis77jF$piiD21c89lLwEq/status</status-link> 
            <start-time>2010-01-13T18:30:02Z</start-time>
            <stop-time>2010-01-13T18:30:50Z</stop-time>
            <status>Complete</status>
            <file-link>https://www.concursolutions.com/api/expense/extract/v1.0/nYoPK$pZmcowMRUqcl5bnDAwwsMydyt$xd/job/21UwwqA3jk25Lis77jF$piiD21c89lLwEq/file</file-link>
        </job>
        <job>
            <id>https://www.concursolutions.com/api/expense/extract/v1.0/nYoPK$pZmcowMRUqcl5bnDAwwsMydyt$xd/job/uI77ndy0Q1szuU73XSh56lshi$p215gHs1</id>
            <status-link>https://www.concursolutions.com/api/extract/v1.0/nYoPK$pZmcowMRUqcl5bnDAwwsMydyt$xd/job/uI77ndy0Q1szuU73XSh56lshi$p215gHs1/status</status-link>
            <start-time>2010-01-12T18:30:01Z</start-time>
            <stop-time>2010-01-12T18:31:01Z</stop-time>
            <status>Complete</status>
            <file-link>https://www.concursolutions.com/api/expense/extract/v1.0/nYoPK$pZmcowMRUqcl5bnDAwwsMydyt$xd/job/uI77ndy0Q1szuU73XSh56lshi$p215gHs1/file</file-link>
        </job>
    </jobs>
```

##  Get Extract Job Details

### Description
Retrieves the details of the specified extract definition.

### Get Extract Job Details Request

    GET https://www.concursolutions.com/api/expense/extract/v1.0/{_DefinitionID_}/job/{_JobID_} HTTP/1.1
    Authorization: OAuth {access token}
    ...

#### Request parameters
 * **{_DefinitionID_**}<br>The identifier for the desired extract definition.
 * **job/{_JobID_} **<br>The identifier for the job and the job keyword.

Example: `https://www.concursolutions.com/api/expense/extract/v1.0/nYoPK$pZmcowMRUqcl5bnDAwwsMydyt$xd/job/uIo87jk3SHudi$sdlYle8$peot$pD21jyd`

#### Headers

##### Authorization header
Required. Authorization header with OAuth token for valid Concur user. The OAuth consumer must have one of the following user roles in Concur: Company Administrator or Web Services Administrator for Professional, or Can Administer for Standard. These roles allow the user to manage data for the entire company. 

##### Accept header
application/xml

### Get Extract Job Details Response

#### Content types
application/xml

#### Root elements
This request will return a **job** parent element with the following child elements.

##### job child elements

| Element | Description |
| ------- | ----------- |
| id |  The unique job identifier with encrypted ID. |
| status-link | The URI to get the current status of the job, with encrypted ID. The **status-link** value is used as the URI when requesting the job status. |
| start-time | The time, in UTC (GMT), that the job is scheduled to start. |
| stop-time | The time, in UTC (GMT), that the job finished. Not included if the job is still running. |
| status | The current status of the extract job. |
| file-link | A URI for retrieving the file or files produced by the job run, with encrypted ID. Not included if the job is still running. The **file-link** value is used as the URI when retrieving the extract data. |

####  XML Example of Successful Response

    200 OK
    Content-Type: application/xml
    <job xmlns="...">
        <id>https://www.concursolutions.com/api/expense/extract/v1.0/nYoPK$pZmcowMRUqcl5bnDAwwsMydyt$xd/job/uIo87jk3SHudi$sdlYle8$peot$pD21jyd></id>
        <status-link>https://www.concursolutions.com/api/extract/v1.0/nYoPK$pZmcowMRUqcl5bnDAwwsMydyt$xd/job/uIo87jk3SHudi$sdlYle8$peot$pD21jyd/status</status-link>
        <start-time>2010-01-12T18:30:01</start-time>
        <stop-time>2010-01-12T18:31:01</stop-time>
        <status>Complete</status>
        <file-link> https://www.concursolutions.com/api/expense/extract/v1.0/nYoPK$pZmcowMRUqcl5bnDAwwsMydyt$xd/job/uIo87jk3SHudi$sdlYle8$peot$pD21jyd/file</file-link>
    </job>

##  Get Extract Job Status

### Description
Retrieves the details of the specified extract definition.

###  Get Extract Job Status Request

    GET https://www.concursolutions.com/api/expense/extract/v1.0/{_DefinitionID_}/job/{_JobID_}/status HTTP/1.1
    Authorization: OAuth {access token}
    ...

#### Request parameters

* **{_DefinitionID_}**<br>Required. The identifier for the desired extract definition.
* **job/{_JobID_}/status**<br>The identifier for the job and the job and status keywords.

Example: `https://www.concursolutions.com/api/expense/extract/v1.0/nX8O9$pytn6vJEWvLOZxyy3GcNGyj0ZklG/job/nIJp1lR2R0LNT4XcO5fXG$s$sZmVuRTuG$ps/status`

#### Headers

##### Authorization header
Required. Authorization header with OAuth token for valid Concur user. The OAuth consumer must have one of the following user roles in Concur: Company Administrator or Web Services Administrator for Professional, or Can Administer for Standard. These roles allow the user to manage data for the entire company.

##### Accept header
application/xml

###  Get Extract Job Status Response

#### Content types
application/xml

#### Root element
This request will return a **job** parent element with the following child elements.

##### job child elements

| Element | Description |
| ------- | ----------- |
| id | The unique job identifier. |
| status-link | The URI to get the current status of the job. |
| start-time | The time, in UTC (GMT), when the job started. |
| stop-time | The time, in UTC (GMT), when the job finished. Not included if the job is still running. |
| status | The current status of the job. Format: Queued, Running, Completed, Failed |
| file-link | The URI used to retrieve the file or files produced by this job run. Not included if the job is still running. |
| id | The extract definition ID URI with encrypted ID. |

####  XML Example of Successful Response

    200 OK
    Content-Type: application/xml
    <job xmlns="http://www.concursolutions.com/api/expense/extract/2010/02" xmlns:i="http://www.w3.org/2001/XMLSchema-instance">
        <id>https://www.concursolutions.com/api/expense/extract/v1.0/nX8O9$pytn6vJEWvLOZxyy3GcNGyj0ZklG/job/nIJp1lR2R0LNT4XcO5fXG$s$sZmVuRTuG$ps</id>
        <status-link>https://www.concursolutions.com/api/expense/extract/v1.0/nX8O9$pytn6vJEWvLOZxyy3GcNGyj0ZklG/job/nIJp1lR2R0LNT4XcO5fXG$s$sZmVuRTuG$ps/status</status-link>
        <start-time>2011-08-25T14:25:22.58</start-time>
        <stop-time>2011-08-25T14:25:23.537</stop-time>
        <status>Completed</status>
        <file-link>https://www.concursolutions.com/api/expense/extract/v1.0/nX8O9$pytn6vJEWvLOZxyy3GcNGyj0ZklG/job/nIJp1lR2R0LNT4XcO5fXG$s$sZmVuRTuG$ps/file</file-link>
    </job>

