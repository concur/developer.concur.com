---
title: Expense Form Resource
layout: operation
---




This resource supports the following GET actions:

##  Get Form Types Request

| ----- |
|  Description |  Supported Accept Types |
|  Retrieves the list of configured form types. |   |
|  Query Parameters - Required |  Query Parameters - Optional |
|  None |  None |
|  Request Headers - Required |  Request Headers - Optional |
|  Authorization header with OAuth token for valid Concur user. |  None |

####  XML Example Request

    GET https://www.concursolutions.com/api/expense/expensereport/v1.1/report/Forms HTTP/1.1
    Authorization: OAuth {access token}
    ...

##  Get Form Types Response

| ----- |
|  HTTP Responses |  Supported Content Types |
|  [HTTP Status Codes][1] |   |
|  Content Body |   |
|  This request will return a **FormTypesList** parent element with a **FormType** parent element for each configured form. The FormType element has the following child elements:

|  Element |  Description |
|  Name |  The form type name. |   |
|  FormCode |  The form type code. |

 |

####  XML Example of Successful Response

    200 OK
    Content-Type: application/xml
    <FormTypesList
        xmlns="http://www.concursolutions.com/api/expense/expensereport/2011/03"
        xmlns:i="http://www.w3.org/2001/XMLSchema-instance">
        <FormType>
            <Name>Expense Entry</Name>
            <FormCode>ENTRYINFO</FormCode>
        </FormType>
        <FormType>
            <Name>Expense Report Header</Name>
            <FormCode>RPTINFO</FormCode>
        </FormType>
        <FormType>
            <Name>Expense Allocation</Name>
            <FormCode>ALLOCINFO</FormCode>
        </FormType>
        <FormType>
            <Name>Expense Attendee</Name>
            <FormCode>ATTNINFO</FormCode>
        </FormType>
        <FormType>
            <Name>Authorization Request Expense Category</Name>
            <FormCode>TRAVELREQENTRYINFO</FormCode>
        </FormType>
        <FormType>
            <Name>Authorization Request Header</Name>
            <FormCode>TRAVELREQINFO</FormCode>
        </FormType>
        <FormType>
            <Name>Expense Detail View</Name>
            <FormCode>EXPLISTDTL</FormCode>
        </FormType>
        <FormType>
            <Name>Attendee Detail View</Name>
            <FormCode>ATNLISTDTL</FormCode>
        </FormType>
        <FormType>
            <Name>Expense Car</Name>
            <FormCode>CARINFO</FormCode>
        </FormType>
    </FormTypesList>

##  Get Form Data Request

| ----- |
|  Description |  Supported Accept Types |
|  Retrieves the list of configured forms for the specified form type. |   |
|  Query Parameters - Required |  Query Parameters - Optional |
|

* **{_FormCode_}**  
The identifier for the desired form.
Example: https://www.concursolutions.com/api/expense/expensereport/v1.1/report/Forms/_{FormCode}_

**URI Source**: The FormCode is returned in the **FormCode** element in the Get Form Types response.

 |  None |
|  Request Headers - Required |  Request Headers - Optional |
|  Authorization header with OAuth token for valid Concur user. |  None |

####  XML Example Request

    GET https://www.concursolutions.com/api/expense/expensereport/v1.1/report/Forms/RPTINFO HTTP/1.1
    Authorization: OAuth {access token}
    ...

##  Get Form Data Response

| ----- |
|  HTTP Responses |  Supported Content Types |
|

[HTTP Status Codes][1]

 |   |
|  Content Body |   |
|  This request will return a **FormDataList** parent element with a **FormData** parent element for each configured form. The FormData element has the following child elements:

|  Element |  Description |
|  Name |  The form name. |   |
|  FormId |  The form identifier. |

 |

####  XML Example of Successful Response

    200 OK
    Content-Type: application/xml
    <FormDataList xmlns="http://www.concursolutions.com/api/expense/expensereport/2011/03" xmlns:i="http://www.w3.org/2001/XMLSchema-instance">
        <FormData>
            <Name>Central Reconciliation Columns</Name>
            <FormId>nAaT8$puKKOG5E4R9gCMyXVrFjo9NIbmQl</FormId>
        </FormData>
        <FormData>
            <Name>Central Reconciliation Report</Name>
            <FormId>nAaT8$puKKOGmK3xvAdnAOgJ9fxaoXjyW$s</FormId>
        </FormData>
        <FormData>
            <Name>Default Report Information</Name>
            <FormId>nAaT8$puKKO2$pEVlsXfSruLpDfZL0wVM$s7</FormId>
        </FormData>
    </FormDataList>

  


[1]: https://developer.concur.com/reference/http-codes
