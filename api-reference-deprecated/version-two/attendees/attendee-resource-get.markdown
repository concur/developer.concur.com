---
title: Get attendees
layout: reference
---


##  Description

Retrieves the attendees matching the specified search criteria. Developers can specify one or more External IDs or the Attendee ID to search the Expense database.

## Request

### Request parameters

#### Path parameters

| Parameter |Required/Optional| Description |
|-----------------|--------|-----------------------------|
|attendeeID  | optional  |The unique identifier for the attendee in Concur. This information is returned in the **AttendeeID** element of the response of the [Get Report Details][1] function.|

Example: `https://www.concursolutions.com/api/expense/v2.0/attendees/{attendeeID}`

#### Query parameters

| Parameter |Required/Optional| Description |
|-----------------|--------|-----------------------------|
| externalid  | optional |The unique identifier for the attendee outside of Concur. This information is returned in the **ExternalID** element of the response of the [Get Report Details][1] function. Up to 10 external IDs can be supplied in a comma separated list.|

Example: `https://www.concursolutions.com/apiexpense/v2.0/attendees?externalid={externalID}`<br/>
Example: `https://www.concursolutions.com/apiexpense/v2.0/attendees?externalid={externalID1},{externalID2},{externalID3}`

### Headers

#### Authorization header

Authorization header with OAuth 2.0 access token for a Concur user. Required.

To manage data for an entire conpany, the Concur account associated with the access token must have one of these roles:

* Web Services Administrator for Professional
* Can Administer for Standard.

#### Content-Type header

* application/json       
* application/xml

##  Get Attendee Details Response

### Content Types

* application/json       
* application/xml

### Content Body
This request will return an **Attendees** parent element containing an **Attendee** child element for each attendee. 

#### Attendee elements

| Element | Description |
|-----------------------|-------------------------------------|
|AttendeeType |  The type of attendee. Maximum 40 characters.|
|FirstName |  The attendee's first name. Maximum 50 characters.|
|LastName |  The attendee's last name. Maximum 132 characters.|
|Company |  The attendee's company name. Maximum 150 characters.|
|Title |  The attendee's title. Maximum 32 characters.|
|ExternalID |  The unique identifier for the attendee, managed outside Concur. Maximum 48 characters.|
|Custom1 through Custom20 |  The details from the Custom fields. These may not have data, depending on configuration. For information about the child elements of this parent element, see the **Custom child elements** table below. |
|  HasExceptionsPrevYear |  Whether the attendee has exceptions in the previous year, based on yearly total limits for attendees. Maximum 1 character. Format: Y/N |
|  HasExceptionsYTD |  Whether the attendee has exceptions in the current year, based on yearly total limits for attendees. Maximum 1 character. Format: Y/N |
|  IsDeleted |  Whether the attendee is marked as deleted. Maximum 1 character. Format: Y/N |
|  OwnerEmpName |  The name of the employee that owns the attendee record. |
|  TotalAmountPrevYear |  The total amount spent on the attendee in the previous calendar year. |
|  TotalAmountYTD |  The total amount spent on the attendee in the current calendar year. |
|  VersionNumber |  The attendee's version number. |
|  AttendeeID |  Attendee unique identifier within Concur. |
|  AttendeeTypeCode |  The unique identifier for the attendee type. |
|  AttendeeOwnerID |  The unique identifier for the person or system that owns the attendee. |
|  CurrencyCode |  The [3-letter ISO 4217 currency code](http://en.wikipedia.org/wiki/ISO_4217){:target="_blank"} for attendee related amounts. |

#### Custom elements

| Element | Description |
|-----------------------|-------------------------------------|
| Type | The custom field type. Will be one of the following: Amount, Boolean, ConnectedList, Date, Integer, List, Number, Text.  |
|Value |  The value in the custom field. Maximum 100 characters.  |
| Code |  Custom list fields will include the list item code in this element.  |

## Examples

###  XML Example Request with Attendee ID

```
    GET https://www.concursolutions.com/api/expense/v2.0/attendees/nFaAj0ncBsvkgnPMY5QWfBbbWyv$sQh2oW HTTP/1.1
    Authorization: OAuth {access token}
    ...
```

###  XML Example Request with External ID

```
    GET https://www.concursolutions.com/api/expense/v2.0/attendees?externalid=234567 HTTP/1.1
    Authorization: OAuth {access token}
    ...
```

####  XML Example of Successful Response

```
xml
    200 OK
    Content-Type: application/xml

    <Attendees xmlns="http://www.concursolutions.com/api/expense/expensereport/2012/07" xmlns:i="http://www.w3.org/2001/XMLSchema-instance">
        <Attendee>
            <AttendeeType>BUSGUEST</AttendeeType>
            <FirstName>Chris</FirstName>
            <LastName>Miller</LastName>
            <Company />
            <Title />
            <ExternalID>234567</ExternalID>
            <Custom1 />
            <Custom2 />
            <Custom3 />
            <Custom4 />
            <Custom5 />
            <Custom6 />
            <Custom7 />
            <Custom8 />
            <Custom9 />
            <Custom10 />
            <Custom11 />
            <Custom12 />
            <Custom13 />
            <Custom14 />
            <Custom15 />
            <Custom16 />
            <Custom17 />
            <Custom18 />
            <Custom19 />
            <Custom20 />
            <HasExceptionsPrevYear>N</HasExceptionsPrevYear>
            <HasExceptionsYTD>N</HasExceptionsYTD>
            <IsDeleted>N</IsDeleted>
            <OwnerEmpName>Davis, Pat</OwnerEmpName>
            <TotalAmountPrevYear>0.00000000</TotalAmountPrevYear>
            <TotalAmountYTD>0.00000000</TotalAmountYTD>
            <VersionNumber>1</VersionNumber>
            <AttendeeID>nFaAj0ncBsvkgnPMY5QWfBbbWyv$sQh2oW</AttendeeID>
            <AttendeeTypeCode>BUSGUEST</AttendeeTypeCode>
            <AttendeeOwnerID>pd123456</AttendeeOwnerID>
            <CurrencyCode>USD</CurrencyCode>
        </Attendee>
    </Attendees>  
```


[1]: /api-reference-deprecated/version-two/expense-reports/expense-report-get.html
