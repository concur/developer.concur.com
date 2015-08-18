---
title: Extract File
layout: reference
---

# Extract File  


## Description
The extracted data for the specified extract job. Formatted according to the associated extract definition.

## Version
1.0

## URI
`https://www.concursolutions.com/api/expense/extract/v1.0/{DefinitionID}/job/{JobID}/file `


## Operations
[GET](#get)


## <a name="get"></a>Get an extract file

###  Definition
Requests the extracted data for the specified extract job.

### Request

```xml
    GET https://www.concursolutions.com/api/expense/extract/v1.0/{DefinitionID}/job/{JobID}/file HTTP/1.1
    Authorization: OAuth {access token}
    ...
```

### Request parameters

#### Path parameters

| Parameter |Required/Optional| Description |
|-----------------|--------|-----------------------------|
| {_DefinitionID_}/job | Required. | The definition identifier and the job keyword. |
| job/{_JobID_}/file | Required. | The identifier for the job and the job and file keywords. |

Example: `https://www.concursolutions.com/api/expense/extract/v1.0/nYoPK$pZmcowMRUqcl5bnDAwwsMydyt$xd/job/uIo87jk3SHudi$sdlYle8$peot$pD21jyd/file` 

### Headers

#### Authorization header
Required. Authorization header with OAuth token for valid Concur user. The OAuth consumer must have one of the following user roles in Concur: Company Administrator or Web Services Administrator for Professional, or Can Administer for Standard. These roles allow the user to manage data for the entire company. 

#### Content-Type header
application/xml

###  Response

### Content types

* text/csv
* application/zip

### Response body

This request will return the extracted data in text/csv format if there was a single file produced or as a zip archive if the extract definition is configured to produce more than one file.

### Examples

###  XML example of response with single extract file

```xml
    200 OK
    Content-Type: text/csv
    100,AAA,BBBB,CCCC,...<rest of file>
```

###  XML example of successful response with multiple extract files

```xml
    200 OK
    Content-Type: application/zip
    <zip file contents>
```
