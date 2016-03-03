---
title: Travel Request
layout: reference
---

# Travel Request (Deprecated)

Concur Travel Request is designed to help businesses control expenses by requiring employees to obtain approval before incurring expenses.The Travel Request resource provides the ability to view requests and update the workflow for travel requests. 

## Version
1.0  
3.0 can be found [here](/api-reference/request/request.html)

## Product Restrictions
Concur products are highly configurable, and not all clients will have access to all features.

Partner developers must determine which configurations are required for their solution prior to the review process. Use the <a href="http://forum.developer.concur.com/" target="_blank">developer forums</a> if you have questions about the configuration settings.

Existing clients can work with Concur Advantage Technical Services to create custom applications that work with their configuration.

## Authentication
The Travel Request web service supports the OAuth 2.0 authentication model. Any additional required elements for the web service requests are covered in the function documentation.

## <a name="a1">Requests version 1.0</a>

Requests version 1.0 retrieves a list of up to 1000 travel requests. The request can include one or multiple search terms. This resource supports the following operations:

* [Get a list of travel requests](#a2)
* [Get travel request details](#a3)
* [Post a travel request header](#a4)
* [Post a travel request workflow action](#a5)

### <a name="a2">Get a list of travel requests</a>

#### Request

##### Request parameters

**requestslist**: The requestslist keyword. Required.

Example:  
`https://www.concursolutions.com/api/travelrequest/v1.0/requestslist/`

The request can include any number of the following optional query parameters to refine the search:

* **status**
* **loginid**
* **modifiedafterdate**
* **modifiedbeforedate**

Multiple parameter example:  
`https://www.concursolutions.com/api/travelrequest/v1.0/requestslist/?status={status}&loginid={loginID}`

**Status**: The **Status** search term specifies which travel request or approval status to return. If no **Status** value is sent, the default status of Active will be used.

|  Value |  Description |
|--------|---------------|
|  ACTIVE |  Returns all active travel requests.  |
|  UNSUBMITTED |  Returns unsubmitted travel requests. |
|  PENDING |  Returns submitted travel requests pending approval. |
|  VALIDATED |  Returns approved travel requests. |
|  CANCELED |  Returns cancelled travel requests. |
|  CLOSED |  Returns closed travel requests. |
|  SUBMITTED |  Returns submitted travel requests. |
|  TOAPPROVE |  Returns travel requests pending approval. If you use this search term with the Login ID search term, you should supply the approver's login ID. |
|  APPROVED |  Returns approved travel requests. If you use this search term with the Login ID search term, you should supply the approver's login ID. |

Example:  
`https://www.concursolutions.com/api/travelrequest/v1.0/requestslist/?status={status}`

**Login ID**: The LoginID is the Concur login for a travel request owner that is not the OAuth consumer. This limits the response to travel requests owned by the specified user. If you use this with the TOAPPROVE or APPROVED Status search term, you should send the travel request approver's login ID.

Example:  
`https://www.concursolutions.com/api/travelrequest/v1.0/requestslist/?loginid={loginID}`

**Modified After Date**: This returns travel requests in which the associated dependents (header, entries, segments, allocations, attendees, comments ) were modified after the specified date and time. This search term can be used along with other search terms to narrow the results. The date and time (if desired) should be in UTC. The format is: YYYY-MM-DDThh:mm:ss

Examples:  
`https://www.concursolutions.com/api/travelrequest/v1.0/requestslist/?modifiedafterdate={date}` 
`https://www.concursolutions.com/api/travelrequest/v1.0/requestslist/?modifiedafterdate=2012-01-01T00:00:00`

**Modified Before Date**: This returns travel requests in which the associated dependents (header, entries, segments, allocations, attendees, comments ) were modified before the specified date and time.This search term can be used along with other search terms to narrow the results. The date and time (if desired) should be in UTC. The format is: YYYY-MM-DDThh:mm:ss

Examples:  
`https://www.concursolutions.com/api/travelrequest/v1.0/requestslist/?modifiedbeforedate={date} `
`https://www.concursolutions.com//api/travelrequest/v1.0/requestslist/?modifiedbeforedate=2012-01-01T00:00:00`

#### Headers

##### Authorization header

The authorization header must contain an OAuth token for a valid Concur user. The OAuth Consumer must have the following role: Web Services Administrator for Professional/Premium.

##### Accept header

application/xml

#### Response

This request will return a **RequestsWithCount** parent element with the **RequestsList** and **TotalCount** child elements. The **RequestsList** parent element contains a **RequestSummary** child element for each travel request. The **RequestSummary** elements will have the following child elements.

##### RequestSummary elements

|  Element Name | Required/Optional | Data Type |  Description |
|---------------|-------------------|------------|--------------------|
|  RequestID |  |  |  The unique identifier for the travel request, which appears in the Concur UI.   |
|  RequestName | |  |  The name of the travel request. |
|  Purpose | |  |  The purpose of the travel request. |
|  RequestCurrency | |  |  The [3-letter ISO 4217 currency code][4] for the travel request currency. |
|  RequestTotal | |  |  The total amount of the travel request. |
|  RequestDate | |  |   The create date of the travel request. |
|  StartDate | |  |   Start date of the travel request. |
|  EndDate | |  |  End date of the travel request. |
|  LastComment | |  |  The text of the most recent comment on the travel request. |
|  RequestDetailsURL | |  |  The URL to access the travel request details. |
|  RequestUserLoginID | |  |  The Login ID of the user this travel request belongs to. |
|  ApproverLoginID | |  |   The Login ID of the user's travel request approver. |
|  EmployeeName | |  |  The name of the travel request owner. |
|  ApprovalStatus | |  |  The travel request's approval status, in the OAuth consumer's language. |

### <a name="a3">Get travel request details</a>

#### Request

Retrieves the full set of information for the travel request. Includes the travel request Header, Segment, Entry, Allocation and Cash Advance details.

##### Request parameters

**requests/{_requestKey_}**: The requests keyword and the identifier for the desired travel request. Required.

Example:  
`https://www.concursolutions.com/api/travelrequest/v1.0/requests/{requestKey} `

**URI Source**: The URI is provided in the **ObjectURI** element of the [Event Notification](/api-reference/callouts/event-notification.html) request.

##### Headers

###### Authorization header

The authorization header must have an OAuth token for a valid Concur user. The OAuth consumer must have one of the following user roles in Concur: Company Administrator or Web Services Administrator for Professional, or Can Administer for Standard. These roles allow the user to manage data for the entire company.

###### Accept header

application/xml

#### Response

This request will return a **TravelRequestDetails** parent element with the following child elements.

##### TravelRequestDetails elements

|  Element Name | Required/Optional | Data Type |  Description |
|---------------|-------------------|------------|--------------------|
|  LoginID | |  |  The Concur Login ID of the travel request owner.   |
|  RequestID | |  |  The unique key for the travel request. |
|  RequestKey | |  | The encrypted database key for the travel request. |
|  RequestName | |  | The name of the travel request. |
|  Purpose | |  | The information from the Purpose field. |
|  CurrencyCode | |  | The [3-letter ISO 4217 currency code][4] for the travel request currency. The travel request currency is defined as the travel request creator's default reimbursement currency. |
|  CreationDate | |  | The date the travel request was created. |
|  HasException | |  | Whether the travel request has exceptions. Format: Y/N |
|  EverSentBack | |  | Whether the travel request has ever been sent back to the employee. Format: Y/N |
|  EmployeeName | |  | The first, middle (or middle initial), and last name of the employee who created the travel request. |
|  ApprovalStatusName | |  | The approval status of the travel request . |
|  ApprovalStatusKey | |  | The approval status key. |
|  AuthorizedDate | |  | The date the travel request was authorized. This element has an attribute named i:nil. If the value for this element is null, the i:nil attribute will be set to true. Format: YYYY-MM-DDThh:mm:ss |
|  SubmitDate | |  | The date the travel request was submitted. Format: YYYY-MM-DDThh:mm:ss |
|  LastModifiedDate | |  | The date the travel request was last modified. Format: YYYY-MM-DDThh:mm:ss |
|  SegmentCount | |  | The number of segments in the travel request. |
|  Custom1 through Custom20 | |  | The details from the Custom fields. These may not have data, depending on configuration. If the custom field is a list field, the data will be returned as: (list item short code) list item name. List Field Example: `<Custom1>(1234) Project 1234</Custom1>` |
|  TravelRequestPolicyKey | |  | The unique identifier for the policy that applies to the travel request. |
|  ExpensePolicyKey | |  | The unique identifier of the Expense policy that is related to the travel request policy. |
|  RequestTotal | |  | The total amount of the travel request. |
|  TotalApprovedAmount | |  | The total amount of approved expenses in the travel request. |
|  TotalRemainingAmount | |  | The total amount remaining in the travel request. |
|  ApprovalLimitDate | |  | The date the travel request must be approved by. Appears only when integrated with Concur Travel.|
|  AgencyOfficeKey | |  | The Agency Office key. |
|  AgencyOfficeName | |  |  The Agency Office name. |
|  StartDate | |  | The start date for the travel request. |
|  EndDate | |  | The end date for the travel request. |
|  StartTime | |  | The start time for the travel request. |
|  EndTime | |  | The end time for the travel request. |
|  ExtensionOf | |  |  The ID of the initial travel request that this travel request is an extension of or adendum to. |
|  WorkflowActionURL | |  | The URL to post a workflow action to the travel request using the [Post Request Workflow Action](/api-reference-deprecated/version-one/Travel/travel-request.html#a5) function. |
|  CommentCount | |  | The number of comments associated with the travel request header. |
|  CommentsList | |  | This parent element has a Count attribute indicating the number of comments that are included in the travel request header. It has a **Comment** child element for each comment. Refer to the Comment Child Elements table for the full list of child elements. |
|  ExceptionCount | |  | The number of exceptions associated with the travel request header. |
|  ExceptionsList | |  | This parent element has a Count attribute indicating the number of exceptions that are included in the travel request entry. It has an **Exception** child element for each exception. Refer to the Exception Child Elements table for the full list of child elements. |
|  EntriesList | |  | This parent element has a Count attribute indicating the number of travel request entries that are included in the travel request. It has a **RequestEntry** child element for each entry. Refer to the RequestEntry Child Elements table for the full list of child elements. |
|  CashAdvancesList | |  | This parent element has a Count attribute indicating the number of cash advances that are included in the travel request. It has a **CashAdvance** child element for each cash advance. Refer to the CashAdvance Child Elements table for the full list of child elements. |

##### Comment elements

|  Element Name | Required/Optional | Data Type |  Description |
|---------------|-------------------|------------|--------------------|
|  Comment | | |  The text of the travel request header comment. |
|  FirstName | | |  The first name of the person who made the comment. |
|  LastName | | |  The last name of the person who made the comment. |
|  DateTime | | | Time, in GMT, when the user made the comment. |

##### Exception elements

|  Element Name | Required/Optional | Data Type |  Description |
|---------------|-------------------|------------|--------------------|
|  ExceptionCode | |  |  The system exception code defined for the exception. Example: BADCODE |
|  ExceptionMessage | |  | The user-facing message defined for the exception. |
|  ExceptionLevel | |  | The numeric level associated with the exception. Example: 99 |

##### RequestEntry elements

|  Element Name | Required/Optional | Data Type |  Description |
|---------------|-------------------|------------|--------------------|
|  RequestEntryKey | |  | The unique identifier for the travel request entry. |
|  EntryDescription | |  | The text from the Description field for the entry. |
|  TransactionDate | |  | The date of the travel request entry. |
|  RequestKey | |  | The unique identifier for the travel request. |
|  FormKey | |  | The unique identifier for the travel request entry form. |
|  ExpenseTypeKey | |  | The unique identifier for the expense type. |
|  ExpenseTypeName | |  | The expense type name. |
|  ExchangeRate | |  | The exchange rate that applies to the entry. |
|  ForeignAmount | |  | The foreign currency amount of the travel request entry. |
|  ForeignCurrencyName | |  | The name of the currency for the foreign amount. |
|  PostedAmount | |  | The posted amount of the travel request entry in the travel request currency. |
|  ApprovedAmount | |  | The approved amount of the travel request entry in the travel request currency. |
|  RemainingAmount | |  | The remaining amount of the travel request entry in the travel request currency. |
|  LastModifiedDate | |  | The date the entry was last modified. Format: YYYY-MM-DDThh:mm:ss |
|  OrgUnit1 through OrgUnit6 | |  |  The details from the Org Unit custom fields. These may not have data, depending on configuration. |
|  Custom1 through Custom40 | |  | The details from the Custom fields. These may not have data, depending on configuration. If the custom field is a list field, the data will be returned as: (list item short code) list item name. List Field Example: `<Custom1>(1234) Project 1234</Custom1>` |
|  AllocationsList | |  | This parent element has an **Allocation** child element for each associated allocation. Refer to the Allocation child elements table for the full list of child elements. |
|  CommentCount | |  | The number of comments associated with the travel request entry. |
|  CommentsList | |  | This parent element has a Count attribute indicating the number of comments that are included in the travel request entry. It has a **Comment** child element for each comment. Refer to the Comment Child Elements table for the full list of child elements. |
|  ExceptionCount | |  | The number of exceptions associated with the travel request entry. |
|  ExceptionsList | |  | This parent element has a Count attribute indicating the number of exceptions that are included in the travel request entry. It has an **Exception** child element for each exception. Refer to the Exception Child Elements table for the full list of child elements. |
|  SegmentCount | |  | The number of segments associated with the travel request entry. |
|  SegmentsList | |  | This parent element contains a **Segment** child element for each segment associated with the travel request. Refer to the Segment Child Elements table for the full list of child elements. |

##### Allocation child elements

|  Element Name | Required/Optional | Data Type |  Description |
|---------------|-------------------|------------|--------------------|
|  Custom1 through Custom20 | |  |   The custom fields associated with the allocation. These may not have data, depending on your configuration. If the custom field is a list field, the data will be returned as: (list item short code) list item name. List Field Example: `<Custom1>(1234) Project 1234</Custom1>` |
|  AllocationKey | |  |  The unique identifier for the allocation. |
|  Percentage | |  |  The percentage of the expense that is included in this allocation. |

##### Segment child elements

|  Element Name | Required/Optional | Data Type |  Description |
|---------------|-------------------|------------|--------------------|
|  SegmentKey |  | | The encrypted database primary key for the Segment table. The unique identifier for the segment. |
|  SegmentType | | |  The type of itinerary segment. Format: air, car, hotel, rail, dining, event, limo, taxi, parking, other |
|  RecordLocator |  | | Appears only when travel request is integrated with Concur Travel. |
|  DepartureDate |  | | The departure date of the segment. |
|  DepartureTime |  | | The departure time of the segment. |
|  ArrivalDate |  | | The arrival date of the segment. |
|  ArrivalTime |  | | The arrival time of the segment. |
|  FromLocationName |  | | The name of the starting location. |
|  FromLocationDetail |  | | The code of starting location. |
|  ToLocationName | | |  The name of the ending location. |
|  ToLocationDetail |  | | The code of the ending location. |
|  FlightNumber |  | | The flight number for air segments. Appears only when travel request is integrated with Concur Travel.|
|  ClassOfServiceCode |  | | The Class of Service Code from Concur Travel. Appears only when travel request is integrated with Concur Travel. |
|  TripLocator |  | | The unique identifier for the Concur Travel trip associated with this segment. Appears only when travel request is integrated with Concur Travel. |
|  SegmentLocator |  | |  The unique identifier for Concur Travel segment associated with this segment. Appears only when travel request is integrated with Concur Travel. |
|  ExchangeRate |  | | The exchange rate that applies to the segment. |
|  ForeignAmount |  | | The foreign currency amount of the segment. |
|  ForeignCurrencyName |  | | The name of the currency for the foreign amount of the segment. |
|  PostedAmount |  | | The posted amount of the segment in the travel request currency. |
|  ApprovedAmount |  | | The approved amount of the segment in the travel request currency. |
|  RemainingAmount |  | | The remaining amount of the segment in the travel request currency. |
|  IsAgencyBooked |  | | Whether the air segment was agency booked. Format: Y/N. |
|  IsSelfBooked |  | | Whether the air segment was self booked. Format: Y/N |
|  LastModifiedDate |  | | The date the segment was last modified. Format: YYYY-MM-DDThh:mm:ss |
|  Custom1 through Custom40 |  | | The custom fields associated with the segment. These may not have data, depending on your configuration. If the custom field is a list field, the data will be returned as: (list item short code) list item name. List Field Example: `<Custom1>(1234) Project 1234</Custom1>` |
|  CommentCount |  | | The number of comments associated with the segment. |
|  CommentsList |  | | This parent element has a Count attribute indicating the number of comments that are included in the segment. It has a **Comment** child element for each comment. Refer to the Comment Child Elements table for the full list of child elements. |
|  ExceptionCount | | |  The number of exceptions associated with the travel request segment. |
|  ExceptionsList |  | | This parent element has a Count attribute indicating the number of exceptions that are included in the travel request segment. It has an **Exception** child element for each exception. Refer to the Exception Child Elements table for the full list of child elements. |

#### CashAdvance child elements

|  Element Name | Required/Optional | Data Type |  Description |
|---------------|-------------------|------------|--------------------|
|  CashAdvanceKey | | |  The unique identifier for the cash advance. |
|  AmountRequested | | |   The amount requested in the cash advance, in the currency listed in the **CurrencyCode** element.|
|  CurrencyCode | | |  The [3-letter ISO 4217 currency code][4] for the cash advance currency. |
|  CurrencyName | | |  The name of the currency for the cash advance. |
|  ExchangeRate | | |  The exchange rate that applies to the cash advance. |
|  RequestDate | | |  Date of cash advance request from the detailed cash advance record. |
|  IssueDate | | |  The issue date for the cash advance. |
|  StartingBalance | | |   The initial balance for the cash advance. |
|  ApprovalStatusName | | |  The approval status of the cash advance. |
|  ApprovalStatusKey | | |  The unique identifier for the approval status of the cash advance. |
|  EmployeeCurrencyCode | | |  The [3-letter ISO 4217 currency code][4] for the employee's currency ("home currency"). |
|  EmployeeCurrencyName | | |  The name of the employee's currency ("home currency"). |

### Examples

####  Example 1: Get list of travel requests

##### Request

<samp>
    GET api/travelrequest/v1.0/requestslist/?status=SUBMITTED  HTTPS 1.1
    Host: www.concursolutions.com
    Authorization: OAuth {access token}
    ...
<\samp>

#####  Response

```XML
    <?xml version="1.0" encoding="utf-8"?>
    <RequestsWithCount xmlns="http://www.concursolutions.com/api/travelrequest/2012/06" xmlns:i="http://www.w3.org/2001/XMLSchema-instance">
        <RequestsList>
            <RequestSummary>
                <ApprovalStatus>Submitted &amp; Pending Approval</ApprovalStatus>
                <ApproverLoginID>patdavis@example.com</ApproverLoginID>
                <RequestCurrency>USD</RequestCurrency>
                <EmployeeName>Chris Miller</EmployeeName>
                <LastComment />
                <Purpose>d</Purpose>
                <RequestDate>2013-03-07T08:25:57</RequestDate>
                <RequestDetailsUrl>https://www.concursolutions.com/api/travelrequest/v1.0/requests/nf0ma53XrNuqmoVSZesQZL99xN1xIg5dX</RequestDetailsUrl>
                <RequestID>APXT</RequestID>
                <RequestName>TVR-2861-2</RequestName>
                <RequestTotal>10.00000000</RequestTotal>
                <RequestUserLoginID>chrismiller@example.com</RequestUserLoginID>
            </RequestSummary>
        </RequestsList>
        <TotalCount>1</TotalCount>
    </RequestsWithCount>
```

####  Example 2: Get travel request details

#####  Request

<samp>
    GET api/travelrequest/v1.0/requests/nxxKgLlnROz3zHJBCRksaas23dsfs  HTTPS 1.1
    Host: www.concursolutions.com
    Authorization: OAuth {access token}
    ...
<\samp>

####  Response

```xml
    <TravelRequestDetails xmlns="http://www.concursolutions.com/api/travelrequest/2012/06" xmlns:i="http://www.w3.org/2001/XMLSchema-instance">
        <AgencyOfficeKey>1</AgencyOfficeKey>
        <AgencyOfficeName>Terrific Travel</AgencyOfficeName>
        <ApprovalLimitDate>2012-06-09T23:59:00</ApprovalLimitDate>
        <ApprovalStatusKey>Q_PEND</ApprovalStatusKey>
        <ApprovalStatusName>Submitted & Pending Approval</ApprovalStatusName>
        <AuthorizedDate i:nil="true" />
        <LastModifiedDate>2012-06-08T16:35:20</LastModifiedDate>
        <CashAdvancesList>
            <CashAdvance>
                <AmountRequested>400.000000</AmountRequested>
                <ApprovalStatusKey>A_NOTF</ApprovalStatusKey>
                <ApprovalStatusName>Not Submitted</ApprovalStatusName>
                <CashAdvanceKey>nu1p4xwRqDVwWEcRN5kzNh1OXXfiZ1z06</CashAdvanceKey>
                <CommentsList i:type="CommentsList" />
                <CurrencyCode>USD</CurrencyCode>
                <CurrencyName>US, Dollar</CurrencyName>
                <EmployeeCurrencyCode>MXN</EmployeeCurrencyCode>
                <EmployeeCurrencyName>Mexico, Peso</EmployeeCurrencyName>
                <ExchangeRate>1.00000000000000</ExchangeRate>
                <IssueDate i:nil="true" />
                <RequestDate>2012-06-08T23:35:20</RequestDate>
                <StartingBalance>0.0</StartingBalance>
            </CashAdvance>
        </CashAdvancesList>
        <CommentCount>1</CommentCount>
        <CommentsList>
            <Comments>
                <Comment>Trip for Sales meeting to Dallas</Comment>
                <DateTime>2012-06-08T16:35:20</DateTime>
                <FirstName>Chris</FirstName>
                <LastName>Miller</LastName>
            </Comments>
        </CommentsList>
        <CreationDate>2012-06-08T23:33:39</CreationDate>
        <CurrencyCode>MXN</CurrencyCode>
        <EmployeeName>Miller, Chris</EmployeeName>
        <EndDate>9/25/2012</EndDate>
        <EndTime>11:59 PM</EndTime>
        <EntriesList>
            <RequestEntry>
                <AllocationCount>3</AllocationCount>
                <AllocationsList>
                    <Allocation>
                        <AllocationKey>nG$p6tMeoepRby4MJptMA6$sf4ucfZW7d5y</AllocationKey>
                        <Percentage>33.33333334</Percentage>
                        <Custom1>(7732)VIAJAR</Custom1>
                        <Custom2>(881991)NUEVOS PROYECTOS</Custom2>
                        <Custom3 />
                        <Custom4 />
                        <Custom5>(1234)Project 1234</Custom5>
                        <Custom6 />
                        <Custom7 />
                        <Custom8 />
                        <Custom9 />
                        <Custom10 />
                        <Custom12 />
                        <Custom13 />
                        <Custom14 />
                        <Custom15 />
                        <Custom16 />
                        <Custom17 />
                        <Custom18 />
                        <Custom19 />
                        <Custom20 />
                    </Allocation>
                    <Allocation>
                        <AllocationKey>nG$p6tMeoepRcrg7jyl$slxYxm43LBgtr0b</AllocationKey>
                        <Percentage>33.33333333</Percentage>
                        <Custom1>(7112)INFRAESTRUCTURA</Custom1>
                        <Custom2>(223817)MODELO INFORMATICO</Custom2>
                        <Custom3 />
                        <Custom4 />
                        <Custom5>(1234)Project 1234</Custom5>
                        <Custom6 />
                        <Custom7 />
                        <Custom8 />
                        <Custom9 />
                        <Custom10 />
                        <Custom12 />
                        <Custom13 />
                        <Custom14 />
                        <Custom15 />
                        <Custom16 />
                        <Custom17 />
                        <Custom18 />
                        <Custom19 />
                        <Custom20 />
                    </Allocation>
                    <Allocation>
                        <AllocationKey>nG$p6tMeoepRTFxjeJUFHAw$sDhH$prHfL$sd</AllocationKey>
                        <Percentage>33.33333333</Percentage>
                        <Custom1>(8826)FINANZAS</Custom1>
                        <Custom2 />
                        <Custom3 />
                        <Custom4 />
                        <Custom5>(4321)Project 4321</Custom5>
                        <Custom6 />
                        <Custom7 />
                        <Custom8 />
                        <Custom9 />
                        <Custom10 />
                        <Custom12 />
                        <Custom13 />
                        <Custom14 />
                        <Custom15 />
                        <Custom16 />
                        <Custom17 />
                        <Custom18 />
                        <Custom19 />
                        <Custom20 />
                    </Allocation>
                </AllocationsList>
                <ApprovedAmount>8947.77000000</ApprovedAmount>
                <CommentsList />
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
                <Custom21 />
                <Custom22 />
                <Custom23 />
                <Custom24 />
                <Custom25 />
                <Custom26 />
                <Custom27 />
                <Custom28 />
                <Custom29 />
                <Custom30 />
                <Custom31 />
                <Custom32 />
                <Custom33 />
                <Custom34 />
                <Custom35 />
                <Custom36 />
                <Custom37 />
                <Custom38 />
                <Custom39 />
                <Custom40 />
                <EntryDescription />
                <ExceptionsList />
                <ExchangeRate>14.01220000000000</ExchangeRate>
                <ExpenseTypeKey>AIRFR</ExpenseTypeKey>
                <ExpenseTypeName>Boleto de Avion</ExpenseTypeName>
                <ForeignAmount>638.57000000</ForeignAmount>
                <ForeignCurrencyName>US, Dollar</ForeignCurrencyName>
                <LastModifiedDate>2012-06-08T16:35:20</LastModifiedDate>
                <PostedAmount>8947.77000000</PostedAmount>
                <RemainingAmount>8947.77000000</RemainingAmount>
                <RequestEntryKey>ntOaeqFud4aaO6NFSxH7X3TgNk3$pyqifM</RequestEntryKey>
                <SegmentCount>2</SegmentCount>
                <SegmentsList>
                    <Segment>
                        <ApprovedAmount />
                        <ArrivalDate>9/21/2012</ArrivalDate>
                        <ArrivalTime>8:55 AM</ArrivalTime>
                        <ClassOfServiceCode>S</ClassOfServiceCode>
                        <CommentsList />
                        <DepartureDate>9/21/2012</DepartureDate>
                        <DepartureTime>6:15 AM</DepartureTime>
                        <ExceptionsList />
                        <ExchangeRate />
                        <FlightNumber>1066</FlightNumber>
                        <ForeignAmount>638.57000000</ForeignAmount>
                        <ForeignCurrencyName>US, Dollar</ForeignCurrencyName>
                        <FromLocationDetail>Juarez Intl, MEXICO</FromLocationDetail>
                        <FromLocationName>Juarez Intl</FromLocationName>
                        <IsAgencyBooked>Y</IsAgencyBooked>
                        <IsSelfBooked>Y</IsSelfBooked>
                        <PostedAmount />
                        <RecordLocator />
                        <RemainingAmount />
                        <SegmentKey>nLY990POOA2TVhHrpTZH$sxmlZ1S4s5nVf</SegmentKey>
                        <SegmentLocator>1</SegmentLocator>
                        <SegmentType>Air Ticket</SegmentType>
                        <ToLocationDetail>Dallas Ft Worth Intl, Texas</ToLocationDetail>
                        <ToLocationName>Dallas Ft Worth Intl</ToLocationName>
                        <TripLocator>33519718</TripLocator>
                        <LastModifiedDate>2012-06-08T16:35:20</LastModifiedDate>
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
                        <Custom21 />
                        <Custom22 />
                        <Custom23 />
                        <Custom24 />
                        <Custom25 />
                        <Custom26 />
                        <Custom27 />
                        <Custom28 />
                        <Custom29 />
                        <Custom30 />
                        <Custom31 />
                        <Custom32 />
                        <Custom33 />
                        <Custom34 />
                        <Custom35 />
                        <Custom36 />
                        <Custom37 />
                        <Custom38 />
                        <Custom39 />
                        <Custom40 />
                    </Segment>
                    <Segment>
                        <ApprovedAmount />
                        <ArrivalDate>9/25/2012</ArrivalDate>
                        <ArrivalTime>7:50 PM</ArrivalTime>
                        <ClassOfServiceCode>S</ClassOfServiceCode>
                        <CommentsList />
                        <DepartureDate>9/25/2012</DepartureDate>
                        <DepartureTime>5:25 PM</DepartureTime>
                        <ExceptionsList />
                        <ExchangeRate />
                        <FlightNumber>481</FlightNumber>
                        <ForeignAmount>638.57000000</ForeignAmount>
                        <ForeignCurrencyName>US, Dollar</ForeignCurrencyName>
                        <FromLocationDetail>Dallas Ft Worth Intl, Texas</FromLocationDetail>
                        <FromLocationName>Dallas Ft Worth Intl</FromLocationName>
                        <IsAgencyBooked>Y</IsAgencyBooked>
                        <IsSelfBooked>Y</IsSelfBooked>
                        <PostedAmount />
                        <RecordLocator />
                        <RemainingAmount />
                        <SegmentKey>nLY990POOA2XfRkUq$sJqRGxKI3ZK0$pn54</SegmentKey>
                        <SegmentLocator>2</SegmentLocator>
                        <SegmentType>Air Ticket</SegmentType>
                        <ToLocationDetail>Juarez Intl, MEXICO</ToLocationDetail>
                        <ToLocationName>Juarez Intl</ToLocationName>
                        <TripLocator>33519718</TripLocator>
                        <LastModifiedDate>2012-06-08T16:35:20</LastModifiedDate>
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
                        <Custom21 />
                        <Custom22 />
                        <Custom23 />
                        <Custom24 />
                        <Custom25 />
                        <Custom26 />
                        <Custom27 />
                        <Custom28 />
                        <Custom29 />
                        <Custom30 />
                        <Custom31 />
                        <Custom32 />
                        <Custom33 />
                        <Custom34 />
                        <Custom35 />
                        <Custom36 />
                        <Custom37 />
                        <Custom38 />
                        <Custom39 />
                        <Custom40 />
                    </Segment>
                </SegmentsList>
                <TransactionDate>2012-09-21T06:15:00</TransactionDate>
            </RequestEntry>
            <RequestEntry>
                <AllocationCount>3</AllocationCount>
                <AllocationsList>
                    <Allocation>
                        <AllocationKey>nG$p6tMeoepROA$p19BXBVIKWPf6FyHoC2k</AllocationKey>
                        <Percentage>33.33333334</Percentage>
                        <Custom1>(7732)VIAJAR</Custom1>
                        <Custom2>(881991)NUEVOS PROYECTOS</Custom2>
                        <Custom3 />
                        <Custom4 />
                        <Custom5>(1234)Project 1234</Custom5>
                        <Custom6 />
                        <Custom7 />
                        <Custom8 />
                        <Custom9 />
                        <Custom10 />
                        <Custom12 />
                        <Custom13 />
                        <Custom14 />
                        <Custom15 />
                        <Custom16 />
                        <Custom17 />
                        <Custom18 />
                        <Custom19 />
                        <Custom20 />
                    </Allocation>
                    <Allocation>
                        <AllocationKey>nG$p6tMeoepRBwXZeblcbD8giw9LbZm2FT</AllocationKey>
                        <Percentage>33.33333333</Percentage>
                        <Custom1>(7112)INFRAESTRUCTURA</Custom1>
                        <Custom2>(223817)MODELO INFORMATICO</Custom2>
                        <Custom3 />
                        <Custom4 />
                        <Custom5>(1234)Project 1234</Custom5>
                        <Custom6 />
                        <Custom7 />
                        <Custom8 />
                        <Custom9 />
                        <Custom10 />
                        <Custom12 />
                        <Custom13 />
                        <Custom14 />
                        <Custom15 />
                        <Custom16 />
                        <Custom17 />
                        <Custom18 />
                        <Custom19 />
                        <Custom20 />
                    </Allocation>
                    <Allocation>
                        <AllocationKey>nG$p6tMeoepREmXR98pw3YLB4zFRxPasgE</AllocationKey>
                        <Percentage>33.33333333</Percentage>
                        <Custom1>(8826)FINANZAS</Custom1>
                        <Custom2 />
                        <Custom3 />
                        <Custom4 />
                        <Custom5>(4321)Project 4321</Custom5>
                        <Custom6 />
                        <Custom7 />
                        <Custom8 />
                        <Custom9 />
                        <Custom10 />
                        <Custom12 />
                        <Custom13 />
                        <Custom14 />
                        <Custom15 />
                        <Custom16 />
                        <Custom17 />
                        <Custom18 />
                        <Custom19 />
                        <Custom20 />
                    </Allocation>
                </AllocationsList>
                <ApprovedAmount>4764.15000000</ApprovedAmount>
                <CommentsList />
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
                <Custom21 />
                <Custom22 />
                <Custom23 />
                <Custom24 />
                <Custom25 />
                <Custom26 />
                <Custom27 />
                <Custom28 />
                <Custom29 />
                <Custom30 />
                <Custom31 />
                <Custom32 />
                <Custom33 />
                <Custom34 />
                <Custom35 />
                <Custom36 />
                <Custom37 />
                <Custom38 />
                <Custom39 />
                <Custom40 />
                <EntryDescription />
                <ExceptionsList />
                <ExchangeRate>14.01220000000000</ExchangeRate>
                <ExpenseTypeKey>LODGE</ExpenseTypeKey>
                <ExpenseTypeName>Hotel/Lodging</ExpenseTypeName>
                <ForeignAmount>340.00000000</ForeignAmount>
                <ForeignCurrencyName>US, Dollar</ForeignCurrencyName>
                <LastModifiedDate>2012-06-08T16:35:20</LastModifiedDate>
                <PostedAmount>4764.15000000</PostedAmount>
                <RemainingAmount>4764.15000000</RemainingAmount>
                <RequestEntryKey>ntOaeqFud4tA34CjqKY3$pQOsBXl6Q4Qtd</RequestEntryKey>
                <SegmentCount>1</SegmentCount>
                <SegmentsList>
                    <Segment>
                        <ApprovedAmount />
                        <ArrivalDate>9/25/2012</ArrivalDate>
                        <ArrivalTime>12:00 AM</ArrivalTime>
                        <ClassOfServiceCode />
                        <CommentsList />
                        <DepartureDate>9/21/2012</DepartureDate>
                        <DepartureTime>12:00 AM</DepartureTime>
                        <ExceptionsList />
                        <ExchangeRate />
                        <FlightNumber />
                        <ForeignAmount>340.00000000</ForeignAmount>
                        <ForeignCurrencyName>US, Dollar</ForeignCurrencyName>
                        <FromLocationDetail />
                        <FromLocationName />
                        <IsAgencyBooked>Y</IsAgencyBooked>
                        <IsSelfBooked>Y</IsSelfBooked>
                        <PostedAmount />
                        <RecordLocator />
                        <RemainingAmount />
                        <SegmentKey>nLY990POOA2Lqa0$pzpIwE6d0uU51z5DYo</SegmentKey>
                        <SegmentLocator>47244773465</SegmentLocator>
                        <SegmentType>Hotel Reservation</SegmentType>
                        <ToLocationDetail />
                        <ToLocationName />
                        <TripLocator>33519718</TripLocator>
                        <LastModifiedDate>2012-06-08T16:35:20</LastModifiedDate>
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
                        <Custom21 />
                        <Custom22 />
                        <Custom23 />
                        <Custom24 />
                        <Custom25 />
                        <Custom26 />
                        <Custom27 />
                        <Custom28 />
                        <Custom29 />
                        <Custom30 />
                        <Custom31 />
                        <Custom32 />
                        <Custom33 />
                        <Custom34 />
                        <Custom35 />
                        <Custom36 />
                        <Custom37 />
                        <Custom38 />
                        <Custom39 />
                        <Custom40 />
                    </Segment>
                </SegmentsList>
                <TransactionDate>2012-09-21T23:59:00</TransactionDate>
            </RequestEntry>
        </EntriesList>
        <EntryCount>2</EntryCount>
        <EverSentBack>N</EverSentBack>
        <ExceptionsList />
        <ExpensePolicyKey>nI6NfRt2Vq7zSzFFgqVGNjeYFXkAxVGGN</ExpensePolicyKey>
        <ExtensionOf />
        <HasException>N</HasException>
        <LoginID>cmiller@example.com</LoginID>
        <Purpose>Business trip to Dallas</Purpose>
        <RequestID>337E</RequestID>
        <RequestKey>nyc7eqM$pprGNOuRIDP6BkOiJ8BntYTrR3</RequestKey>
        <RequestName>Trip from Mexico City to Dallas</RequestName>
        <RequestTotal>13711.92000000</RequestTotal>
        <StartDate>9/21/2012</StartDate>
        <StartTime>6:15 AM</StartTime>
        <SubmitDate>2012-06-08T23:36:10</SubmitDate>
        <TotalApprovedAmount>13711.92000000</TotalApprovedAmount>
        <TotalRemainingAmount>13711.92000000</TotalRemainingAmount>
        <TravelRequestPolicyKey>n$snD$psI09k6NxQAgOnwgks76hOZdyLhDs</TravelRequestPolicyKey>
        <WorkflowActionURL>https:/www.concursolutions.com/api/travelrequest/v1.0/requests/n3cC3I7NpBss5U2Aofqvxao5t3hvFEQo/WorkFlowAction</WorkflowActionURL>
        <Custom1>(7732)VIAJAR</Custom1>
        <Custom2>(881991)NUEVOS PROYECTOS</Custom2>
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
    </TravelRequestDetails>
```

##  <a name="a4">Post travel request header</a>

### Description
Posts the travel request header information for a new or existing travel request for the user specified in the OAuth access token. The travel request header contains classification information for the travel request.

### Request

#### Request parameters

**requests**  The requests keyword. Required.

Example: `https://www.concursolutions.com/api/travelrequest/v1.0/requests`

**{_requestID_}**: The unique identifier for the desired travel request. Supplied when updating an existing travel request. Optional.

Example:  
<samp>https://www.concursolutions.com/api/travelrequest/v1.0/requests/{requestID}</samp>

**URI Source**: The requestId value is returned by [Get Request Details](#a3) function, and the **Request-Url** element in this function.

#### Headers

##### Authorization header

Authorization header with OAuth token for valid Concur user. Required.

The OAuth consumer for this request must have the following role in Travel Request: Request User. This role allows the user to create travel requests.

##### Content-Type header

application/xml

#### Request body

This request should contain a **Request** parent element with the following child elements:

|  Element |  Required (must contain value)? |  Description |
|----------|---------------------------------|--------------|
|  Name    |  Y                              |  The travel request name. |
|  Purpose |  Depends on configuration       |  The business purpose of the travel request. Maximum length: 2000. |
|  Comment |  Depends on configuration       |  The travel request header comment. |
|  Custom1 through Custom20 |  Depends on configuration | The custom fields on the travel request Header form. May be required depending on configuration.<br/>  **NOTE**: If any of the custom fields are configured to contain list values, please refer to the [Posting Custom List Items][2] page for information on how to correctly submit list item values.|
|  StartDate |  Depends on configuration |  The start date for the travel request. Format: YYYY-MM-DD |
|  StartTime |  Depends on configuration |  The start time for the travel request. Format: hh:mm:ss |
|  EndDate   |  Depends on configuration |  The end date for the travel request. Format: YYYY-MM-DD |
|  EndTime   |  Depends on configuration |  The end time for the travel request. Format: hh:mm:ss |

**NOTE**: Refer to the Travel Request Admin user interface for the list of required fields and formats.

#### XML Example Request

```xml
    POST /api/travelrequest/v1.0/requests HTTPS 1.1
    Host: [www.concursolutions.com][3]
    Authorization: OAuth {access token}
    ...

    <Request xmlns="http://www.concursolutions.com/api/travelrequest/2012/06">
        <Name>Request for Trip to Seattle</Name>
        <Purpose>Sales team meeting</Purpose>
        <Comment>NW Regional Sales team</Comment>
        <StartDate>2012-09-30</StartDate>
        <StartTime>3:15</StartTime>
        <EndDate>2012-10-05</EndDate>
        <EndTime>15:25</EndTime>
    </Request>
```

###  Response

#### Supported Content Types
application/xml

#### Response body root elements

This request will return a **RequestStatus** parent element with the following child elements:

|  Element     |  Description |
|--------------|--------------|
|  Status      |  The status of the travel request. | 
|  Request-Url |  The URI to use when posting travel request header details to this travel request. |

If saving the travel request header triggers an exception, a **RequestExceptions** parent element will be provided, with a **RequestException** parent element for each exception. The **RequestException** element contains the following elements.

##### RequestException child elements

|  Element          |  Description |
|-------------------|--------------|
|  EventCode        |  The event that resulted in the exception. |
|  ExceptionCod     |  The company-defined exception code. |
|  ExceptionMessage |  The company-defined exception message. In the case of the system MISREQFLD exception the message will list the required fields that are missing values. |
|  ExceptionVisibility |  Which users are able to see the exception. |
|  IsCleared           |  Whether the exception has been cleared by the Request Processor. |
|  SeverityLevel       |  A numeric value indicating the severity level of the exception. The value threshold is configurable. |


#### XML Example of Response with Successful Travel Request Creation and Exception

```xml
    <RequestStatus xmlns="http://www.concursolutions.com/api/travelrequest/2012/06" xmlns:i="http://www.w3.org/2001/XMLSchema-instance">
        <Request-Details-Url>https://www.concursolutions.com/api/travelrequest/v1.0/requests/nf0ma53XrN$s6z5iKRRANn6eIsW89aTe3m</Request-Details-Url>
        <Status>SUCCESS</Status>
        <RequestExceptions>
            <RequestException>
                <EventCode />
                <ExceptionCode>MISSREQFLD</ExceptionCode>
                <ExceptionErrorCode />
                <ExceptionVisibility>1</ExceptionVisibility>
                <IsCleared>N</IsCleared>
                <Message>Missing Required Fields:Custom 02,Custom 03,Cash Advance,</Message>
                <SeverityLevel>2147483647</SeverityLevel>
                <Type />
            </RequestException>
        </RequestExceptions>
    </RequestStatus>
```

##  <a name="a5">Post travel request workflow action</a>

### Description
Posts a workflow action for the supplied travel request. The workflow action moves the travel request through the workflow process. The available actions are:

* **Approve**: The travel request is approved for the current workflow approver. The travel request will continue in the workflow, and may require additional approvals based on configuration.
* **Send Back to Employee**: The travel request is sent back to the employee for revision. This workflow action is used by the approvers and processors when they discover an error that must be corrected by the user. When the user resubmits the travel request, it goes through the entire workflow again.
* **Recall to Employee**: This workflow action is initiated by the employee, and is only available after the travel request has been submitted. This workflow action will rarely be used by developers, and may not be available to some clients due to configuration.

#### Two different workflow roles

Each workflow action is associated with a workflow role. The System role is used when the workflow actions do not require a particular user to perform the action. Developers who want to evaluate a travel request programatically then supply a workflow action use the System role.

The Approver role is used when the workflow step requires an individual to perform an action. Developers who want to present a list of travel requests to approve and send the workflow action when the travel requests have been evaluated by the approver use the Approver role. This role requires that a user with the correct Concur role (Request Approver, or Request Processor for Professional) authenticates using Standard OAuth before supplying the workflow action. The user must also have access (be a valid approver or processor) for the supplied Request Id.

### Request

#### Request parameters

**requests/{_workflowstepId_}/workflowaction**: The requests and workflowaction keywords and the unique identifier for the desired workflow step. Required.

Example: `https://www.concursolutions.com/api/travelrequest/v1.0/requests/{workflowstepId}/workflowaction`

**URI Source**: The URI is the **WorkflowStepURL** element found in the response of the [Get Request Details](#a3) endpoint. The workflowstepId must match the current workflow step of the travel request. Use the [Get Requests Details](#a3) endpoint immediately prior to sending this request to guarantee that you have the current **WorkflowStepURL**.

#### Headers

##### Authorization header

Authorization header with OAuth token for valid Concur user. Required. The OAuth consumer must have one of the following user roles in Concur: Company Administrator or Web Services Administrator for Professional, or Can Administer for Standard.

###### Content-Type header

application/xml

#### Request body

This request should contain a **WorkflowAction** parent element with the following child elements:

|  Element |  Required (must contain value)? |  Description |
|  Action |  Y |  The name of the workflow action. Possible values are: **Approve**, ** Send Back to Employee**, or **Recall to Employee**. Must be one of the workflow actions available for the workflow step. Consult Request Admin, Workflow to learn details. | 
|  Comment |  Y, for Send Back to Employee |  Must be used with the Send Back to Employee workflow action. This comment is visible wherever travel request comments are available to the employee, approver, and/or processor. |

####  XML Example Request

```xml
    POST api/travelrequest/v1.0/requests/nx2WRNzp18$wjehk%wqEL6EDHRwi9r$paQS1UqyL6a4qQ/workflowaction HTTPS 1.1
    Host: www.concursolutions.com
    Authorization: OAuth {access token}
    ...

    <WorkflowAction xmlns="http://www.concursolutions.com/api/travelrequest/2012/06">
        <Action>Approve</Action>
        <Comment>Approved via Concur Connect</Comment>
    </WorkflowAction>
```

###  Response

#### Supported Content Types
application/xml

#### Response body root elements

This request will return an **ActionStatus** parent element with the following child elements:

|  Element |  Description |
|----------|--------------|
|  Message |  The error message. Only appears if a workflow action error was generated | 
|  Status  |  The status of the travel request workflow action. |

####  XML Example of Successful Response

```xml
    <?xml version="1.0" encoding="utf-8"?>
    <ActionStatus xmlns="http://www.concursolutions.com/api/travelrequest/2012/06" xmlns:i="http://www.w3.org/2001/XMLSchema-instance">
        <Message>SUCCESS!</Message>
        <Status>SUCCESS!</Status>
    </ActionStatus>
```

###  XML Example of a Response with a Failure

```xml
    <?xml version="1.0" encoding="utf-8"?>
    <ActionStatus xmlns="http://www.concursolutions.com/api/travelrequest/2012/06" xmlns:i="http://www.w3.org/2001/XMLSchema-instance">
        <Message>The action cannot be executed because the item has recently been changed. Please refresh your list and try again.</Message>
        <Status>FAILURE</Status>
    </ActionStatus>
```

[1]: /api-reference/request/request.html
[3]: http://concur.github.io/developer.concur.com/docs/reference/http-codes
[4]: http://en.wikipedia.org/wiki/ISO_4217


