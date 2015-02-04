[Source](https://developer.concur.com/extract/extract-file-resource/extract-file-resource-get "Permalink to Extract File Resource: GET | Developer Portal")

# Extract File Resource: GET | Developer Portal

This resource supports the following GET actions:

##  Get Extract File Request

| ----- |
|  Description |  Supported Accept Types |
|  Requests the extracted data for the specified extract job. |   |
|  Query Parameters - Required |  Query Parameters - Optional |
|

* **{_DefinitionID_}/job**  
The definition identifier and the job keyword.
* **job/{_JobID_}/file**  
The identifier for the job and the job and file keywords.
Example: https://www.concursolutions.com/api/expense/extract/v1.0/{_DefinitionID_}/job/{_JobID_}/file |  None |
|  Request Headers - Required |  Request Headers - Optional |
|  Authorization header with OAuth token for valid Concur user.

The OAuth consumer must have one of the following user roles in Concur: Company Administrator or Web Services Administrator for Professional, or Can Administer for Standard.

These roles allow the user to manage data for the entire company.

 |  None |

####  XML Example Request

    GET https://www.concursolutions.com/api/expense/extract/v1.0/nYoPK$pZmcowMRUqcl5bnDAwwsMydyt$xd/job/uIo87jk3SHudi$sdlYle8$peot$pD21jyd/file HTTP/1.1
    Authorization: OAuth {access token}
    ...

##  Get Extract File Response

| ----- |
|  HTTP Responses |  Supported Content Types |
|  [HTTP Status Codes][1] |   |
|  Content Body |   |
|  This request will return the extracted data in text/csv format if there was a single file produced or as a zip archive if the extract definition is configured to produce more than one file. |

####  XML Example of Response with Single Extract File

    200 OK
    Content-Type: text/csv
    100,AAA,BBBB,CCCC,...<rest of file>

####  Example of Successful Response With Multiple Extract Files

    200 OK
    Content-Type: application/zip
    <zip file contents>

  
Last Modified: 4/17/2013 10:28 AM PDT

[1]: https://developer.concur.com/node/205
