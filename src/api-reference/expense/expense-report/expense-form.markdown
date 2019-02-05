---
title: Expense Form
layout: reference
---

The configured expense forms in SAP Concur. Clients can have multiple forms configured for each form type.

* [Get Form Types](#get-form-types)
  * [Request](#types-req)
  * [Response](#types-res)
    * [Get Form Types Schema](#types-schema)
  * [Examples](#types-examples)
* [Get Form Data](#get-form-data)
  * [Request](#data-req)
  * [Response](#data-res)
    * [Get Form Data Schema](#data-schema)
  * [Examples](#data-examples)

### Version
1.1

### URI
`https://www.concursolutions.com/api/expense/expensereport/v1.1/report/Forms/ `

### Operations
[GET](#get)

## <a name="get-form-types"></a>Get Form Types

Retrieves the list of configured form types.

### <a name="types-req"></a>Request

#### Request Parameters
None.

#### Headers

##### Authorization Header
Authorization header with OAuth token for valid SAP Concur user. Required.

##### Accept Header
application/xml

### <a name="types-res"></a>Response

#### <a name="types-schema"></a>Get Form Types Schema
This request will return a **FormTypesList** parent element with a **FormType** parent element for each configured form.

##### FormType Elements

|  Element |  Description |
| -------- | ------------ |
|  Name |  The form type name. |
|  FormCode |  The form type code. |

### <a name="types-examples"></a>Examples

#### XML Example Request

```http
GET https://www.concursolutions.com/api/expense/expensereport/v1.1/report/Forms HTTP/1.1
Authorization: OAuth {access token}
...
```

#### XML Example of Successful Response

```http
HTTP/1.1 200 OK
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

## <a name="get-form-data"></a>Get Form Data

Retrieves the list of configured forms for the specified form type.

### <a name="data-req"></a>Request

### Request Parameters

| Parameter |Required/Optional| Description |
|-----------------|--------|-----------------------------|
FormCode | required | The identifier for the desired form. |

Example: `https://www.concursolutions.com/api/expense/expensereport/v1.1/report/Forms/{FormCode}`

**URI Source**: The FormCode is returned in the **FormCode** element in the Get Form Types response.

#### Headers

##### Authorization Header
Authorization header with OAuth token for valid SAP Concur user.

##### Accept Header
application/xml

### <a name="data-res"></a>Response

#### <a name="data-schema"></a>Get Form Data Schema
This request will return a **FormDataList** parent element with a **FormData** parent element for each configured form.

##### FormData Elements

|  Element |  Description |
| -------- | ------------ |
|  Name |  The form name. |
|  FormId |  The form identifier. |

### <a name="data-examples"></a>Examples

#### XML Example Request

```http
GET https://www.concursolutions.com/api/expense/expensereport/v1.1/report/Forms/RPTINFO HTTP/1.1
Authorization: OAuth {access token}
...
```

#### XML Example of Successful Response

```http
HTTP/1.1 200 OK
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
