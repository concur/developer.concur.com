---
title: Create an exception to a report
layout: reference
---

##  Description

Posts an exception to the report, and associates it with one of the following data levels: Report Header, Entry, Itemization, Allocation. This endpoint requires familiarity with the company's exception code configuration.

## Request

### Request parameters

#### Path parameters

| Parameter |Required/Optional| Description |
|-----------------|--------|-----------------------------|
|{_reportKey_}/Exceptions| required | The identifier for the desired report and the exceptions keyword.|

Example: `https://www.concursolutions.com/api/expense/expensereport/v1.1/report/{reportKey}/Exceptions`

**URI Source**: The reportKey value is returned in the **RptKey** element by the [Get Report Details][1] response.

### Headers

#### Authorization header

Authorization header with OAuth token for valid Concur user. Required.

#### Content-Type header
application/xml

### Content Body
This request should contain an **Exceptions** parent element with an **Exception** parent element for each exception included in the report. The **Exception** element contains the following child elements:  

#### Exception elements

|Element | Required (must contain value)? | Description |
--- | --- | ---
Index | Y | The exception's location in a batch of exceptions. Should start at 1 and increment sequentially. This value is used to identify the record if there is an error. 
ObjectType | Y | The type of object to assign the exception. Format: Report, Entry, or Allocation. When sending a Report level exception, the ObjectType and ObjectId can be null, as the report key is supplied in the URI.
ObjectId | Y | The unique identifier for the object to associate with the exception. Returned by the [Get Report Details][1] function. Must be the value from one of the following fields:<br/>&nbsp;&nbsp;&nbsp;Entry or Itemization: Use the **RpeKey**.<br/>&nbsp;&nbsp;&nbsp;Allocation: Use **AllocationKey**.<br/>&nbsp;&nbsp;&nbsp;Report Header: Null value. When sending a Report level exception, the ObjectType and ObjectId can be null, as the report key is supplied in the URI.
ExceptionCode | Y | The Exception Code for the exception to assign to the object. Must be a configured exception code in Expense. Example: NODATE

##  Response

### Content Types
application/xml

### Content Body
This request will return an **exception-result** parent element.

#### exception-result elements

Element | Description
--- | ---
exceptions-succeeded | The number of exceptions processed that were successfully assigned. 
exceptions-failed | The number of exceptions processed that were not successfully added.
errors | This will contain an **error** parent element for each record failure. The **error** element will contain the following child elements:<br/>&nbsp;&nbsp;&nbsp;Index: The exception's location in the batch.<br/>&nbsp;&nbsp;&nbsp;message: The error message.
ExceptionDetails |This parent element will contain an **ExceptionInfo** parent element for all exceptions that did not cause an error, and will contain the following child elements:<br/>&nbsp;&nbsp;&nbsp;Index: The exception's location in the batch.<br/>&nbsp;&nbsp;&nbsp;Status: The status of the request.

## Examples

###  XML Example Request

```
xml
    POST https://www.concursolutions.com/api/expense/expensereport/v1.1/report/3FK118eIJ844Uwl0HF32/Exceptions
    Authorization: OAuth {access token}
    Content-Type: application/xml
    <Exceptions xmlns="http://www.concursolutions.com/api/expense/expensereport/2011/03" xmlns:i="http://www.w3.org/2001/XMLSchema-instance">
        <Exception>
            <Index>1</Index>
            <ObjectType>Report</ObjectType>
            <ObjectId>nxxKgLlnRODp$sie8Hq1UviOJ2AbpS7dCP</ObjectId>
            <ExceptionCode>APPRVTO</ExceptionCode>
        </Exception>
        <Exception>
            <Index>2</Index>
            <ObjectType>Entry</ObjectType>
            <ObjectId>nxxKgLlnRODp$sie8Hq1UviOJ2deAbpS7dC0</ObjectId>
            <ExceptionCode>APPRVTO</ExceptionCode>
        </Exception>
    </Exceptions>
    ```

### XML Example of Response With Success and Failure

```
xml
    <exception-result xmlns="http://www.concursolutions.com/api/expense/expensereport/2011/03" xmlns:i="http://www.w3.org/2001/XMLSchema-instance">
        <exceptions-succeeded>1</exceptions-succeeded>
        <exceptions-failed>1</exceptions-failed>
        <errors>
            <error>
                <Index>2</Index>
                <message>Invalid Exception Code</message>
            </error>
        </errors>
        <ExceptionDetails>
            <ExceptionInfo>
                <Index>1</Index>
                <Status>Success</Status>
            </ExceptionInfo>
        </ExceptionDetails>
    </exception-result>
```
  


[1]: /api-reference/expense/expense-report/reports.html#getID
[2]: https://developer.concur.com/reference/http-codes
