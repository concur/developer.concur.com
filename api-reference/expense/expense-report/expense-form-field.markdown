---
title: Expense Form Field
layout: reference
---

# Expense form field

## Description
The configured fields for the specified expense form.

## Version
1.1

## URI
`https://www.concursolutions.com/api/expense/expensereport/v1.1/report/Form/_{FormId}_/Fields`

## Operations
[GET](#get)

## <a name="get"></a>Get a list of form fields

### Description
Retrieves the details of the configured form fields for the specified form.

**NOTE**: When sending in requests using these fields, be sure to include the required fields from the form and any additional required fields specified in the request documentation.

### Request

#### Request parameters

#### Path parameters

| Parameter |Required/Optional| Description |
|-----------------|--------|-----------------------------|
|{_FormId_}/Fields | required | The unique identifier for the desired form and the Fields keyword. |

Example: `https://www.concursolutions.com/api/expense/expensereport/v1.1/report/Form/{FormId}/Fields`

**URI Source**: The FormId is returned in the **FormId** element by the Get Form Data function.

### Headers

#### Authorization header
Authorization header with OAuth token for valid Concur user. Required.

#### Accept header
application/xml

### Response

### Content body
This request will return a **FormFieldsList** parent element with a **FormField** parent element for each configured form field. 

#### FormField elements

|  Element |  Description |
| -------- | ------------ |
|  Id |  The form field ID. |
|  Label |  The form field label. |
|  ControlType |  The type of field. |
|  DataType |  The type of data accepted by the field. |
|  MaxLength |  The maximum length of the field value. |
|  Required |  Whether the field is required. |
|  Cols |  The number of columns the field contains. |
|  Access |  The access level the specified user has to the field. |
|  Width |  The width of the field. |
|  Custom |  Whether the field is custom. |
|  Sequence |  The field order on the form. |

### Examples

### XML example request

```
xml
GET https://www.concursolutions.com/api/expense/expensereport/v1.1/report/Form/nAaT8$puKKO2$pEVlsXfSruLpDfZL0wVM$s7/Fields HTTP/1.1
Authorization: OAuth {access token}
...
```

### XML example of successful response

```
xml
    200 OK
    Content-Type: application/xml
    <FormFieldsList xmlns="https://www.concursolutions.com/api/expense/expensereport/2011/03" xmlns:i="http://www.w3.org/2001/XMLSchema-instance">
        <FormField>
            <Id>Name</Id>
            <Label>ReportName</Label>
            <ControlType>edit</ControlType>
            <DataType>VARCHAR</DataType>
            <MaxLength>32</MaxLength>
            <Required>Y</Required>
            <Cols>32</Cols>
            <Access>RW</Access>
            <Width>32</Width>
            <Custom>N</Custom>
            <Sequence>1</Sequence>
        </FormField>
        <FormField>
            <Id>ReportId</Id>
            <Label>ReportID</Label>
            <ControlType>static</ControlType>
            <DataType>VARCHAR</DataType>
            <MaxLength>32</MaxLength>
            <Required>Y</Required>
            <Cols />
            <Access>RO</Access>
            <Width />
            <Custom>N</Custom>
            <Sequence>2</Sequence>
        </FormField>
        <FormField>
            <Id>PolKey</Id>
            <Label>Policy</Label>
            <ControlType>picklist</ControlType>
            <DataType>INTEGER</DataType>
            <MaxLength />
            <Required>Y</Required>
            <Cols />
            <Access>RW</Access>
            <Width />
            <Custom>N</Custom>
            <Sequence>3</Sequence>
        </FormField>
        <FormField>
            <Id>EmpName</Id>
            <Label>EmployeeName</Label>
            <ControlType>static</ControlType>
            <DataType>VARCHAR</DataType>
            <MaxLength>32</MaxLength>
            <Required>Y</Required>
            <Cols />
            <Access>HD</Access>
            <Width />
            <Custom>N</Custom>
            <Sequence>4</Sequence>
        </FormField>
        <FormField>
            <Id>UserDefinedDate</Id>
            <Label>ReportDate</Label>
            <ControlType>edit</ControlType>
            <DataType>TIMESTAMP</DataType>
            <MaxLength />
            <Required>N</Required>
            <Cols />
            <Access>RW</Access>
            <Width />
            <Custom>N</Custom>
            <Sequence>5</Sequence>
        </FormField>
        <FormField>
            <Id>Purpose</Id>
            <Label>BusinessPurpose</Label>
            <ControlType>textarea</ControlType>
            <DataType>VARCHAR</DataType>
            <MaxLength>500</MaxLength>
            <Required>Y</Required>
            <Cols>32</Cols>
            <Access>RW</Access>
            <Width>32</Width>
            <Custom>N</Custom>
            <Sequence>6</Sequence>
        </FormField>
    </FormFieldsList>
```



