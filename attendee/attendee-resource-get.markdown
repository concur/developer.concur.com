---
title: Get attendees
layout: Operations
---

##  Get attendees

Retrieves the attendees matching the specified search criteria. Developers can specify one or more External IDs or the Attendee ID to search the Expense database.

## Content type

application/json, application/xml


## Query parameters - Optional

* **attendeeID**  
The unique identifier for the attendee in Concur. This information is returned in the **AttendeeID** element of the response of the [Get Report Details][1] function.

* **externalid={_externalID_}**  
The unique identifier for the attendee outside of Concur. This information is returned in the **ExternalID** element of the response of the [Get Report Details][1] function. Up to 10 external IDs can be supplied in a comma separated list.

### Examples

https://www.concursolutions.com/api/expense/v2.0/attendees/*attendeeID*

https://www.concursolutions.com/api/expense/v2.0/attendees?externalid={*externalID*}

https://www.concursolutions.com/api/expense/v2.0/attendees?externalid={_externalID1_},{_externalID2_},{_externalID3_}


## Request Headers - Required
* Authorization header with OAuth token for valid Concur user.

The OAuth consumer must have one of the following user roles in Concur: Web Services Administrator for Professional, or Can Administer for Standard.

These roles allow the user to manage data for the entire company.

###  XML Example Request with Attendee ID

    GET https://www.concursolutions.com/api/expense/v2.0/attendees/nFaAj0ncBsvkgnPMY5QWfBbbWyv$sQh2oW HTTP/1.1
    Authorization: OAuth {access token}
    ...

###  XML Example Request with External ID

    GET <https://www.concursolutions.com/api/expense/v2.0/attendees?externalid=234567> HTTP/1.1
    Authorization: OAuth {access token}
    ...

##  Get Attendee Details Response

[HTTP Status Codes][2]

### Content Body
This request will return an** Attendees** parent element containing an **Attendee** child element for each attendee. Each **Attendee** element will contain the following child elements:

| Element | Description |
|-----------------------|-------------------------------------|
|AttendeeType |  The type of attendee. Maximum 40 characters.|
|FirstName |  The attendee's first name. Maximum 50 characters.|
|LastName |  The attendee's last name. Maximum 132 characters.|
|Company |  The attendee's company name. Maximum 150 characters.|
|Title |  The attendee's title. Maximum 32 characters.|
|ExternalID |  The unique identifier for the attendee, managed outside Concur. Maximum 48 characters.|
|Custom1 through Custom20 |  The details from the Custom fields. These may not have data, depending on configuration. The custom fields may have the following child elements.  1. Type : The custom field type. Will be one of the following: Amount, Boolean, ConnectedList, Date, Integer, List, Number, Text. 2. Value - The value in the custom field. Maximum 100 characters.  3. Code - Custom list fields will include the list item code in this element
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
|  CurrencyCode |  The [3-letter ISO 4217 currency code][3] for attendee related amounts. |

####  XML Example of Successful Response

    200 OK
    Content-Type: application/xml

    ``` XML

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


[1]: https://developer.concur.com/node/487#reportdetails
[2]: https://developer.concur.com/reference/http-codes
[3]: http://en.wikipedia.org/wiki/ISO_4217
