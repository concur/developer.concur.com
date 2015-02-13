---
title: Get an extract file
layout: operation
---

##  Definition
Requests the extracted data for the specified extract job.

## Request

    GET https://www.concursolutions.com/api/expense/extract/v1.0/{_DefinitionID_}/job/{_JobID_}/file HTTP/1.1
    Authorization: OAuth {access token}
    ...

### Request parameters
* **{_DefinitionID_}/job**<br>Required. The definition identifier and the job keyword.<br>
* **job/{_JobID_}/file**<br>Required. The identifier for the job and the job and file keywords.

Example: `https://www.concursolutions.com/api/expense/extract/v1.0/nYoPK$pZmcowMRUqcl5bnDAwwsMydyt$xd/job/uIo87jk3SHudi$sdlYle8$peot$pD21jyd/file` 

### Headers

#### Authorization header
Required. Authorization header with OAuth token for valid Concur user. The OAuth consumer must have one of the following user roles in Concur: Company Administrator or Web Services Administrator for Professional, or Can Administer for Standard. These roles allow the user to manage data for the entire company. 

#### Accept header
application/xml

##  Response

### Content types

* text/csv
* application/zip

### Root elements

This request will return the extracted data in text/csv format if there was a single file produced or as a zip archive if the extract definition is configured to produce more than one file.

###  XML Example of Response with Single Extract File

    200 OK
    Content-Type: text/csv
    100,AAA,BBBB,CCCC,...<rest of file>

###  Example of Successful Response With Multiple Extract Files

    200 OK
    Content-Type: application/zip
    <zip file contents>

