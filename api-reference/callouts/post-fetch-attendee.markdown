---
title: Post an attendee search request
layout: reference
---




This callout supports the following POST actions:

##  Post Attendee Search Request

### Request URI

The Fetch Attendee version 2.0 callout sends the attendee information to a URI for the application connector, which can be in a custom location for each client. The default is:

`https://{servername}/concur/attendee/v2.0/fetch`

For backward compatibility, Fetch Attendee version 1.0 is used instead of version 2.0 when the URI uses v1.0 instead of v2.0. The URI is configured on the **Application Connector Registration** page under **Web Services>Administration>Manage Applications**.

The application connector responds to the Fetch Attendee request by returning all attendees that match the search criteria. The result is limited to the maximum number of records specified in the request. If more than the maximum number of records are sent, Concur Expense displays a message in the Attendee Search window asking the user to refine their search. The authorization functionality in version 2.0 is the same as version 1.0

## Headers

### Authorization header

Required. Authorization header with Basic authorization for endpoint. Refer to [Authentication][2] for more information.

## Request body

The request body contains an **AttendeeSearchRequest** parent element with an **Attendee** child element. The **Attendee** elements contain the values entered on the search form.

### Attendee elements

|  Element |  Description |
|-----|-----|
|  AttendeeTypeCode |  Code for the attendee type assigned to this attendee. Maximum length is 8 characters.   |
|  Company |  Attendee's company. Also used for Institution Name for Healthcare Provider attendees. Maximum length is 150 characters. Required in the response. |
|  Custom1 through Custom20 |Custom fields which vary for a given configuration. Maximum length is 100 characters. Required in the response.<br><br>For clients who purchased the HCP Connector, Custom7, Custom8, and Custom9 are mapped to the HCP Attendee Form as follows:<br/>Custom7: License number<br/>Custom8: State of license<br/>Custom9: Healthcare specialty description |
|  Custom 21 through Custom25 |Custom fields which vary for a given configuration. Maximum length is 100 characters. Required in the response.<br>For clients who purchased the HCP Connector, Custom15, Custom21, Custom22, and Custom23 are mapped to the HCP Attendee Form as follows:<br/>Custom15: Healthcare practice address<br/>Custom21: Attendee taxonomy<br/>Custom22: Attendee tax ID<br/>Custom23: Covered recipient ID |
|  ExternalID |  Attendee's unique identifier outside of Concur. Maximum length is 48 characters.|
|  FirstName |  Attendee's first name. Maximum length is 50 characters. |
|  LastName |  Attendee's last name. Maximum length is 132 characters. |
|  MaximumNumberRecords |  Maximum number of records that will be returned to the user for the given search criteria. |
|  MiddleInitial |  Attendee's middle initial. Maximum length is 1 character. |
|  OwnerLoginID |  Concur Login ID for the report owner (not the logged in user). The developer can use the User Resource: GET endpoint to obtain user profile details that identify the user and use this information to search for attendees in the system of record for that user. |
|  Suffix |  Attendee's name suffix. Maximum length is 32 characters. |
|  Title |  Attendee's title. Maximum length is 32 characters. |

####  XML Example Request

```
xml
    POST /concur/attendee/v1.0/fetch HTTPS/1.1
    Host: example.com
    Authorization: Basic ...
    Content-Type: application/xml; charset=utf-8
    Content-Length: {length of content body}

    <AttendeeSearchRequest>
        <Attendee>
            <AttendeeTypeCode>BUSGUEST</AttendeeTypeCode>
            <FirstName>Chris</FirstName>
            <MiddleInitial />
            <LastName>Miller</LastName>
            <Suffix />
            <Title>CFO</Title>
            <Company>Len Dev</Company>
            <ExternalID />
            <OwnerLoginID>cm@example.com</OwnerLoginID>
            <MaximumNumberRecords>500</MaximumNumberRecords>
            <Custom1 />
            <Custom2 />
            <Custom3 />
            <Custom4 />
            <Custom5 />
            <Custom6 />
            <Custom7 />
            <Custom8>North America</Custom8>
            <Custom9> />
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
                <Custom21 />
                <Custom22 />
                <Custom23 />
                <Custom24 />
                <Custom25 />
        </Attendee>
    </AttendeeSearchRequest>
```

##  Post Attendee Search Response

### Supported Content Types                                                                                                   

application/xml

### Response Body

The response will include an **AttendeeSearchResponse** parent element, with an **Attendee** child element for each search result.  

If no attendees match the search criteria, the response returns an empty **AttendeeSearchResponse**.

#### Attendee elements

The **Attendee** child element must contain all of the elements described below. The **FirstName**, **LastName**, and **ExternalID** elements must have values. All other elements must be returned in the response, however they can be empty if no data is available.

|  Element |  Description |
|-------|--------|
|  AttendeeTypeCode |  The attendee type code for the attendee type assigned to this attendee. Maximum length: 8 |
|  Company |  The attendee's company. Required in the response. Also used for Institution Name for Healthcare Provider attendees. Maximum length: 150 |
|  Custom1 through Custom25 | Varies depending on configuration. Required in the response. Maximum length of Custom1 through Custom20: 100 characters. Maximum length of Custom21 through Custom25: 48 characters. For information about Custom fields that are used by healthcare providers, see the **Custom fields for healthcare provider attendees** table below.  |
|  ExternalID |  The attendee's unique identifier outside of Concur. Maximum length: 32 |
|  FirstName |  The attendee's first name. Maximum length: 50 |
|  LastName |  The attendee's last name. Maximum length: 132 |
|  MiddleInitial |  The middle initial of the attendee. Maximum length: 1. |
|  Suffix |  The suffix of the attendee. Maximum length: 32. |
|  Title |  The attendee's title. Maximum length: 32 |

#### Custom fields for healthcare provider attendees

|Field | Description |
|------|-------|
|  Custom7 |  License Number |
|  Custom8 |  State of License |   | |
|  Custom9 |  Specialty Description |
|  Custom13 |  Recipient Type/Professional Designation |
|  Custom14 |  NPI Number |
|  Custom15 |  Primary Practice Address Line 1 |
|  Custom16 |  Primary Practice Address Line 2 |
|  Custom17 |  Primary Practice Address Line 3 |
|  Custom18 |  Primary Practice City |
|  Custom19 |  Primary Practice State |
|  Custom20 |  Primary Practice Zip Code |
|  Custom21 |  Taxonomy. Max 48 characters. |
|  Custom22 |  Tax ID. Max 48 characters. |
|  Custom23 |  Covered Recipient ID. Max 48 characters. |

**NOTES**:

* When implementing the search logic, the search criteria should use logical AND between the fields, not logical OR. For example, if in the search dialog the user specifies Doe in the last name field and Acme in the company field, the connector must return only records where the Acme company has contacts with the last name of Doe. It must not return records for contacts with the last name Doe who belong to another company such as Apex.
* If the application connector does not respond or returns an error, the user is notified in a popup window within Expense. Concur will not resend the request unless the user manually initiates the search again.
 |

####  XML Example of Successful Response

```
xml
    HTTPS/1.1 OK 200
    Content-Type: application/xml
    Content-Length: {length of content body}

    <AttendeeSearchResponse>
        <Attendee>
            <ExternalID>1234567890</ExternalID>
            <FirstName>Chris</FirstName>
            <MiddleInitial>T</MiddleInitial>
            <LastName>Miller</LastName>
            <Suffix/>
            <Company>Len Dev</Company>
            <AttendeeTypeCode>BUSGUEST</AttendeeTypeCode>
            <Title>CFO</Title>
            <Custom1/>
            <Custom2/>
            <Custom3/>
            <Custom4/>
            <Custom5/>
            <Custom6/>
            <Custom7>RD</Custom7>
            <Custom8>North America</Custom8>
            <Custom9>Internal Medicine</Custom9>
            <Custom10/>
            <Custom11/>
            <Custom12/>
            <Custom13/>
            <Custom14/>
            <Custom15>100 Main Street, Bellevue, WA 98040</Custom15>
            <Custom16/>
            <Custom17/>
            <Custom18/>
            <Custom19/>
            <Custom20/>
            <Custom21>Tax ID 1234</Custom21>
            <Custom22/>
            <Custom23>Patient ID 576</Custom23>
            <Custom24/>
            <Custom25/>
        </Attendee>
    </AttendeeSearchResponse>
```

The following example shows the expected response when no attendees match the search criteria.

```
xml
    HTTPS/1.1 OK

    <?xml version="1.0" encoding="utf-8"?>
    <AttendeeSearchResponse/>
```


[2]: /api-reference/authentication/authentication.html
