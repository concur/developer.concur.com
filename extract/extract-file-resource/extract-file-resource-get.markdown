---
title: Extract File Resource
layout: operation
---

##  Get Extract File Request

| Description | Supported Accept Types |
| ----------- | ---------------------- |
| Requests the extracted data for the specified extract job. |  application/xml |

| Query Parameters - Required | Query Parameters - Optional |
| --------------------------- | --------------------------- | 
| * **{_DefinitionID_}/job**<br>The definition identifier and the job keyword.<br>* **job/{_JobID_}/file**<br>The identifier for the job and the job and file keywords.<br><br>Example: https://www.concursolutions.com/api/expense/extract/v1.0/{_DefinitionID_}/job/{_JobID_}/file |  None |

| Request Headers - Required | Request Headers - Optional |
| -------------------------- | -------------------------- | 
| Authorization header with OAuth token for valid Concur user.<br>The OAuth consumer must have one of the following user roles in Concur: Company Administrator or Web Services Administrator for Professional, or Can Administer for Standard.<br>These roles allow the user to manage data for the entire company. | None |

###  XML Example Request

    GET https://www.concursolutions.com/api/expense/extract/v1.0/nYoPK$pZmcowMRUqcl5bnDAwwsMydyt$xd/job/uIo87jk3SHudi$sdlYle8$peot$pD21jyd/file HTTP/1.1
    Authorization: OAuth {access token}
    ...

##  Get Extract File Response

| HTTP Responses | Supported Content Types |
| -------------- | ----------------------- |
|  [HTTP Status Codes][1] | text/csv<br>application/zip |

### Content Body

This request will return the extracted data in text/csv format if there was a single file produced or as a zip archive if the extract definition is configured to produce more than one file. |

###  XML Example of Response with Single Extract File

    200 OK
    Content-Type: text/csv
    100,AAA,BBBB,CCCC,...<rest of file>

###  Example of Successful Response With Multiple Extract Files

    200 OK
    Content-Type: application/zip
    <zip file contents>


[1]: https://developer.concur.com/reference/http-codes
