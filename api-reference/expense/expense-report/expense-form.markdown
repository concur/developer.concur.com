---
title: Expense Form 
layout: reference
---

# Expense Form

## Description
The configured expense forms in Concur. Clients can have multiple forms configured for each form type.

## Version
1.1

## URI
`https://www.concursolutions.com/api/expense/expensereport/v1.1/report/Forms/ `

## Operations
[GET](#get)

## <a name="get"></a>Get form types or form data
This resource supports the following GET actions:

* Get Form Types
* Get Form Data

### Get Form Types

#### Description
Retrieves the list of configured form types.

#### Get Form Types Request

#### Request parameters
None.

#### Headers

##### Authorization header
Authorization header with OAuth token for valid Concur user. Required.

##### Accept header
application/xml

### Get Form Types Response

#### Content body
This request will return a **FormTypesList** parent element with a **FormType** parent element for each configured form. 

##### FormType elements

|  Element |  Description |
| -------- | ------------ |
|  Name |  The form type name. |
|  FormCode |  The form type code. |

### Get Form Types Examples

#### XML example request

```
GET https://www.concursolutions.com/api/expense/expensereport/v1.1/report/Forms HTTP/1.1
Authorization: OAuth {access token}
...
```

#### XML example of successful response

```
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
```

## Get Form Data

### Description
Retrieves the list of configured forms for the specified form type.

### Get Form Data Request

### Request parameters

#### Path parameters

| Parameter |Required/Optional| Description |
|-----------------|--------|-----------------------------|
_FormCode_ | required | The identifier for the desired form. |

Example: `https://www.concursolutions.com/api/expense/expensereport/v1.1/report/Forms/{FormCode}`

**URI Source**: The FormCode is returned in the **FormCode** element in the Get Form Types response.

#### Headers

##### Authorization header
Authorization header with OAuth token for valid Concur user.

##### Accept header
application/xml

### Get Form Data Response

#### Content body
This request will return a **FormDataList** parent element with a **FormData** parent element for each configured form. 

##### FormData elements

|  Element |  Description |
| -------- | ------------ |
|  Name |  The form name. |
|  FormId |  The form identifier. |

### Get Form Data Examples

#### XML example request

```
xml
GET https://www.concursolutions.com/api/expense/expensereport/v1.1/report/Forms/RPTINFO HTTP/1.1
Authorization: OAuth {access token}
...
```

#### XML example of successful response

```
xml
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
```





