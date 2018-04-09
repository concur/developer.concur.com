---
title: Request endpoints
layout: reference
---

# Request endpoints

- [Resources](#resource)
  - [Request](#request-resource)
  - [Workflow](#workflow-resource)
  - [Expense](#expense-resource)
  - [Travel Agency](#travel-agency-resource)
- [Data Format](#data-format)
  - [Request](#request)
  - [ApprovalStatus](#approvalstatus)
  - [Customfield](#customfield)
  - [Location](#location)
  - [Amount](#amount)
  - [ResourceLink](#resourcelink)
  - [RequestLink](#requestlink)
  - [Link](#link)
  - [Expense](#expense)
  - [Allocation](#allocation)
  - [Exchange Rate](#exchangerate)
  - [Expense Type](#expensetype)
  - [Travel Allowance](#travelallowance)
  - [Trip Data](#tripdata)
  - [Vendor](#vendor)
  - [Segment Leg](#segmentleg)
  - [Segment Type](#segmenttype)


### <a name="resource"></a>Resources
Manage documents used for pre-spend authorizations within Concur Request.

#### <a name="request-resource"></a>Request
- __Create a new Request__

POST /v4/requests

*Parameters:*
| Name | Parameter Type | Data Type | Description |
| :---: | :-------: | :--------: | ------ |
| - | body | [Request](#request) | __Required__ The content of the Request to create |

*Response:*
| Name | Type | Format | Description
| --- | :---: | :---: | ------
| - | object | [Request](#request) | The request created


- __Get the list of existing Requests__

GET /v4/requests

*Parameters:*
| Name | Parameter Type | Data Type | Description
| --- | :---: | :---: | ------
| userId | query | string | __Optional__ The unique identifier of the User owning the Requests if not provided userId will be infered based upon the authentication token provided

*Response:*
Name | Type | Format | Description
--- | :---: | :---: | ------
data | array | [Request](#request) | List of Requests
operations | string | [RFC 5988](https://tools.ietf.org/html/rfc5988) | Pagination links to next/prev/first/last pages

- __Get the content of an existing request__

GET /v4/requests/{requestUuid}

*Parameters:*
| Name | Parameter Type | Data Type | Description
| --- | :---: | :---: | ------
| requestUuid | path | string | __Required__ The unique identifier of the Request
| userId | query | string | __Optional__ The unique identifier of the User owning the Request with unique identifier {requestUuid} if not provided userId will be infered based upon the authentication token provided

*Response:*
| Name | Type | Format | Description
| --- | :---: | :---: | ------
| - | object | [Request](#request) | The request having {requestUuid} as unique identifer



[Request](#request)

- __Update the content of an existing Request__

PUT /v4/requests/{requestUuid}

*Parameters:*
| Name | Parameter Type | Data Type | Description
| --- | :---: | :---: | ------
| requestUuid | path | string | __Required__ The unique identifier of the Request
| - | body | [Request](#request) | __Required__ The content of the Request to update

*Response:*
| Name | Type | Format | Description
| --- | :---: | :---: | ------
| - | object | [Request](#request) | The request having {requestUuid} as unique identifer after update

[Request](#request)

- __Delete an existing Request__

DELETE /v4/requests/{requestUuid}

*Parameters:*
| Name | Parameter Type | Data Type | Description
| --- | :---: | :---: | ------
| requestUuid | path | string | __Required__ The unique identifier of the Request

*Response:*
| Name | Type | Format | Description
| --- | :---: | :---: | ------
| - | - | - | No content, response code only


- __Create an expense report linked to an approved Request__

POST /v4/requests/{requestUuid}/reports

*Parameters:*
| Name | Parameter Type | Data Type | Description
| --- | :---: | :---: | ------
| requestUuid | path | string | __Required__ The unique identifier of the Request

*Response:*
| Name | Type | Format | Description
| --- | :---: | :---: | ------
| - | object | [ResourceLink](#resourcelink) | The resource link leading to the created report


#### <a name="workflow-resource"></a>Workflow resource

Manage workflow transitions for a Request document.
- __Move an existing Request in the approval workflow__

POST /v4/requests/{requestUuid}/{action}

The HATEOAS links for actions available given the current user and state are listed in the operations of the Request resource.

    Traveler actions
        submit: initiate the approval workflow
        recall: get back the Request, usually to modify the content
        cancel: cancel the Request and attached itineraries
        close: archive the Request
        reopen: get back an archived Request
    Approver / Processor actions
        approve: move the Request to the next approval step
        sendback: reject the Request and send back to the Traveler

*Parameters:*
| Name | Parameter Type | Data Type | Description
| --- | :---: | :---: | ------
| requestUuid | path | string | __Required__ The unique identifier of the Request
| action | path | string | __Required__ The state transition to be executed (submit, approve, recall, sendback, cancel, close or reopen)

*Response:*
| Name | Type | Format | Description
| --- | :---: | :---: | ------
| - | object | [Request](#request) | The request having {requestUuid} as unique identifer


#### <a name="expense-resource"></a>Expense resource

Manage expected expense entries attached to a Request document.
- __Create a new expected expense__

POST /v4/requests/{requestUuid}/expenses

*Parameters:*
| Name | Parameter Type | Data Type | Description
| --- | :---: | :---: | ------
| requestUuid | path | string | __Required__ The unique identifier of the Request to which the Expense is attached
| body | object | [Expense](#expense) | __Required__ The Expense content to create
| userId | query | string | __Optional__ The unique identifier of the User performing the request if not provided userId will be infered based upon the authentication token provided


*Response:*
| Name | Type | Format | Description
| --- | :---: | :---: | ------
| - | - | - | No content, response code only

- __Get expected Expenses attached to a Request__

GET /v4/requests/{requestUuid}/expenses

*Parameters:*
| Name | Parameter Type | Data Type | Description
| --- | :---: | :---: | ------
| requestUuid | path | string | __Required__ The unique identifier of the Request
| userId | query | string | __Optional__ The unique identifier of the User performing the request if not provided userId will be infered based upon the authentication token provided


*Response:*
| Name | Type | Format | Description
| --- | :---: | :---: | ------
| data | array | [Expense](#expense) | List of entries attached to a Request.
| operations | string | [RFC 5988](https://tools.ietf.org/html/rfc5988) | Pagination links to next/prev/first/last page.

- __Get an existing expected Expense__

GET /v4/expenses/{expenseUuid}

*Parameters:*
| Name | Parameter Type | Data Type | Description
| --- | :---: | :---: | ------
| expenseUuid | path | string | __Required__ The unique identifier of the Expense
| userId | query | string | __Optional__ The unique identifier of the User performing the request if not provided userId will be infered based upon the authentication token provided


*Response:*
| Name | Type | Format | Description
| --- | :---: | :---: | ------
| - | object | [Expense](#expense) | The Expense having {expenseUuid} as unique identifer


- __Update the content of an existing expected Expense__

PUT /v4/expenses/{expenseUuid}

*Parameters:*
| Name | Parameter Type | Data Type | Description
| --- | :---: | :---: | ------
| expenseUuid | path | string | __Required__ The unique identifier of the Expense to update
| body | object | [Expense](#expense) | __Required__ The Expense content to update
| userId | query | string | __Optional__ The unique identifier of the User performing the request if not provided userId will be infered based upon the authentication token provided

*Response:*
| Name | Type | Format | Description
| --- | :---: | :---: | ------
| - | object | [Expense](#expense) | The Expense having {expenseUuid} as unique identifer after update

- __Delete an expected Expense from the Request__

DELETE /v4/expenses/{expenseUuid}
*Parameters:*
| Name | Parameter Type | Data Type | Description
| --- | :---: | :---: | ------
| expenseUuid | path | string | __Required__ The unique identifier of the Expense to delete
| userId | query | string | __Optional__ The unique identifier of the User performing the request if not provided userId will be infered based upon the authentication token provided


*Response:*
| Name | Type | Format | Description
| --- | :---: | :---: | ------
| - | - | - | No content, response code only

#### <a name="travel-agency-resource"></a>Travel agency resource

Manage the configuration for travel agencies integrated with Concur Request.
- __Get the description of a travel agency office__

GET /v4/travelagencies/{agencyUuid}

*Parameters:*
| Name | Parameter Type | Data Type | Description
| --- | :---: | :---: | ------
| agencyUuid | path | string | __Required__ The unique identifier of the Travel Agency

*Response:*
| Name | Type | Format | Description
| --- | :---: | :---: | ------
| emailAddress | string | - | The travel agency email address
| id | string | - | The travel agency unique identifier
| name | string | - | The travel agency office name
| proposalType | string| - | The travel agency proposal type. Possible value: CWT, CWTF, AEBT or API


### <a name="data-format"></a>Data Format
#### <a name="request"></a>Request
Name | Type | Format | Description |
------------- | :-------: | :--------: | ------
approvalLimitDate | timestamp | [RFC 3339](https://tools.ietf.org/html/rfc3339) | The date by which the Request must be approved. This element appears only when integrated with Concur Travel (in the format yyyy-MM-dd'T'HH:mm:ss.SSS'Z')
approvalStatus | object | [Approval Status](#approvalstatus) | The approval status of the Request |
authorizedDate | timestamp | [RFC 3339](https://tools.ietf.org/html/rfc3339) | For approved Request, the date at which the approval process was completed (in the format yyyy-MM-dd'T'HH:mm:ss.SSS'Z')
businessPurpose | string | - | The business purpose of the Request
closed | boolean | - | Indicates whether this Request is closed
creationDate | timestamp | [RFC 3339](https://tools.ietf.org/html/rfc3339) | The date the Request was created (in the format yyyy-MM-dd'T'HH:mm:ss.SSS'Z')
comment | string | - | The last comment attached to this Request
custom1 to custom20 | object | [CustomField](#customfield) | The details from the Custom fields. These fields may not have data, depending on the configuration
endDate | date | [ISO 8601](https://www.iso.org/iso-8601-date-and-time-format.html) | The end date of the Request (in the format yyyy-MM-dd)
endTime | time | [ISO 8601](https://www.iso.org/iso-8601-date-and-time-format.html) | The end time of the Request (in the format HH:mm)
everSentBack | boolean | - | Indicates whether the Request has ever been sent back to the employee
expenses | array | [ResourceLink](#resourcelink) | Expected Expenses attached to this Request
extensionOf | object | [RequestLink](#requestlink) | The Request that this Request is an extension of, or adendum to
href | string | [RFC 3986](https://tools.ietf.org/html/rfc3986) | Hyperlink to the resource for this Request
id | string | - | The unique identifier of the Request
lastModified | timestamp | [RFC 3339](https://tools.ietf.org/html/rfc3339) | The date the Request was last modified (in the format yyyy-MM-dd'T'HH:mm:ss.SSS'Z')
mainDestination | object | [ResourceLink](#resourcelink) | The main destination for Travel related Requests
name | string | - | The name of the Request
owner | object | [ResourceLink](#resourcelink) | The employee who owns the Request
policy | object | [ResourceLink](#resourcelink) | The policy that applies to the Request
requestId | string | 4 to 6 alphanumeric characters | The public key of the Request (unique per customer)
startDate | date | [ISO 8601](https://www.iso.org/iso-8601-date-and-time-format.html) | The start date of the Request (in the format yyyy-MM-dd)
startTime | time | [ISO 8601](https://www.iso.org/iso-8601-date-and-time-format.html) | The start time of the Request (in the format HH:mm)
submitDate | timestamp | [RFC 3339](https://tools.ietf.org/html/rfc3339) | The date the Request was submitted (last submit date in case of recall) (in the format yyyy-MM-dd'T'HH:mm:ss.SSS'Z')
totalApprovedAmount | object | [Amount](#amount) | The total amount of approved Expenses in the Request, expressed in the reimbursement currency of the employee at the time he created the Request
totalPostedAmount | object | [Amount](#amount) | The total amount of the Request, expressed in the reimbursement currency of the employee at the time he created the Request
totalRemainingAmount | object | [Amount](#amount) | The total amount not included in an Expense report, expressed in the reimbursement currency of the employee at the time he created the Request
travelAgency | object | [ResourceLink](#resourcelink) | The travel agency office that is managing the trip associated to this Request
operations | array | [Link](#link) | Links to operations available for the Request, depends on the current approval status

#### <a name="approvalstatus">Approval Status
Name | Type | Format | Description
--- | :---: | :---: | ------
code | string | - | The code for the approval status the Request. Possible values: NOT_SUBMITTED, SUBMITTED, APPROVED, CANCELED or SENTBACK
name | string | - | The approval status of the Request in the current user's language

#### <a name="customfield"></a>CustomField
Name | Type | Format | Description
--- | :---: | :---: | ------
code | string | - | The short code for the list item. For non-list fields, this value will be blank
value | string | -  | The value of the non-list item. For list fields, this value will contain the name of the list item
listItemId | string | - | The unique id of the item in case of a list item
href | string | - | The link to get this list item on the list service. Empty for non-list items.

#### <a name="location"></a>Location
Name | Type | Format | Description
--- | :---: | :---: | ------
countryCode | string | [ISO 3166-1](https://www.iso.org/iso-3166-country-codes.html) | The ISO 3166-1 country code
countrySubDivisionCode | string | [ISO 3166-2](https://www.iso.org/standard/63546.html) | The ISO 3166-2 country sub code
city | string | - | The city name
iataCode | string | - | The IATA code of the location
name | string | - | The name of the location

#### <a name="amount"></a>Amount
Name | Type | Format | Description
--- | :---: | :---: | ------
value | number | - | __Required__ The amount in the defined currency
currency | string | [ISO 4217:2015](#https://www.iso.org/standard/64758.html) | __Required__ The 3-letter ISO 4217 code for the currency in which the amount is expressed

#### <a name="resourcelink"></a>Resource Link
Name | Type | Format | Description
--- | :---: | :---: | ------
href | string | [RFC 3986](https://tools.ietf.org/html/rfc3986) | Hyperlink to the resource
id | string |[RFC 4122](https://tools.ietf.org/html/rfc4122) | Unique identifier of the related object
template | string | - | Hyperlink template to the resource

#### <a name="requestlink"></a>Request Link
Name | Type | Format | Description
--- | :---: | :---: | ------
requestId | string | 4 to 6 alphanumeric characters | The public key of the Request (unique per customer)

#### <a name="link"></a>Link
Name | Type | Format | Description
--- | :---: | :---: | ------
rel | string | [RFC 5988](https://tools.ietf.org/html/rfc5988) | Relation type as defined by the server. There are registered relation types listed in RFC 5988 6.2.2. Initial Registry Contents including pagination relation types of next, prev, first and last
href| string| [RFC 3986](https://tools.ietf.org/html/rfc3986) | Hyperlink to the resource

#### <a name="expense"></a>Expense
Name | Type | Format | Description
--- | :---: | :---: | ------
allocations | object | [Allocation](#allocation) | The details of the allocations for this Expense.
approvedAmount | object | [Amount](#amount) | The approved amount of the Expense entry, in the transaction currency of the Request
budgetAccrualDate | timestamp | [RFC 3339](https://tools.ietf.org/html/rfc3339) | The date to determine which budgets are affected (in the format yyyy-MM-dd'T'HH:mm:ss.SSS'Z')
businessPurpose | string | - | The business purpose of the Request entry
custom1 to custom40 | object | [CustomField](#customfield) | The details from the Custom fields. These fields may not have data, depending on the configuration
exchangeRate | object | [Exchange Rate](#exchangerate) | The exchange rate that applies to the entry
expenseType | object | [Expense Type](#expensetype) | The Expense type of the entry. __Required__ for expected Expenses, automatically set for segments depending on the SegmentType code.
href | string | [RFC 3986](https://tools.ietf.org/html/rfc3986) | Hyperlink to the resource for this Request entry
id | string | - | The unique identifier of the Expense entry
lastComment | string | - | The last comment (most recent) of the Expense entry
lastModifiedDate | timestamp | [RFC 3339](https://tools.ietf.org/html/rfc3339) | The date when this Expense was last modified
location | object | [Location](#location) | The location of the Expense entry
orgUnit1 to orgUnit6 | object | [Amount](#amount) | The details from the Custom fields. These fields may not have data, depending on the configuration
postedAmount | object | [Amount](#amount) | The posted amount of the Expense entry, in the transaction currency of the Request
remainingAmount | object | [Amount](#amount) | The remaining amount of the Expense entry, in the transaction currency of the Request
transactionAmount | object | [Amount](#amount) | __Required__ The amount of the Expense entry, in the transaction currency paid to the vendor
transactionDate | timestamp | [RFC 3339](https://tools.ietf.org/html/rfc3339) | __Required__ The date of the transaction (in the format yyyy-MM-dd'T'HH:mm:ss.SSS'Z')
travelAllowance | object | [Travel Allowance](#travelallowance) | The Travel allowance
tripData | object | [Trip Data](#tripdata) | The description of the trip
vendor | object | [Vendor](#vendor) | The vendor of the Expense entry

#### <a name="allocation"></a>Allocation
Name | Type | Format | Description
--- | :---: | :---: | ------
allocationAmount | object | [Amount](#amount) | The amount of the allocation calculated with the percentage value multiplied by the transaction amount on the Expense. This amount is given in the transaction's currency and rounded to 8 decimals after decimal point.
approvedAmount | object | [Amount](#amount) | The amount of the allocation calculated with the percentage value multiplied by the approved amount on the Expense. This amount is given in the user's currency and rounded to 8 decimals after decimal point.
allocationId | string | - | The unique allocation identifier
custom1 to custom20 | object | [CustomField](#customfield) | The details from the Custom fields. These fields may not have data, depending on the configuration
expenseId | string | - | The unique identifier of the Expense associated with the allocation
percentEdited | boolean | - | Whether the allocation percent has been edited
percentage | number | - | The percentage of the total Expense that this allocation represents
postedAmount | object | [Amount](#amount) | The amount of the allocation calculated with the percentage value multiplied by the posted amount on the Expense. This amount is given in the user's currency and rounded to 8 decimals after decimal point.
systemAllocation | boolean | - | Whether the allocation is a system allocation, usually hidden from the user. If displayed to the user, should be read-only

#### <a name="exchangerate"></a>Exchange Rate
Name | Type | Format | Description
--- | :---: | :---: | ------
operation | string | - | Exchange rate operation. Possible values are: MULTIPLY or DIVIDE
value | number | - | Exchange rate value

#### <a name="expensetype"></a>Expense Type
Name | Type | Format | Description
--- | :---: | :---: | ------
id | string | - | __Required__ Unique identifier of the Expense type
name | string | - | Name of the Expense type
href | string | [RFC 3986](https://tools.ietf.org/html/rfc3986) | Hyperlink to the resource for the Expense type definition

#### <a name="travelallowance"></a>Travel Allowance
Name | Type | Format | Description
--- | :---: | :---: | ------
dailyTravelAllowanceId | string | - | The fixed daily travel allowance id associated with the Expense

#### <a name="tripdata"></a>Trip Data
Name | Type | Format | Description
--- | :---: | :---: | ------
agencyBooked | boolean | - | True if this travel is (or has to be) handled by a travel agency
legs | list | [Segment Leg](#segmentleg) | The list of the legs of the travel
tripType | string | - | Indicates the type of this trip. Should be one of "ONE_WAY", "ROUND_TRIP" or "MULTI_STOPS". IF not provided, will be detected from the given legs.
segmentType | object | [Segment Type](#segmenttype) | __Required__ The type of the segment
selfBooked | boolean | - | True if this travel has been reserved by Concur Travel, or if Concur Travel has retrieved the trip information in the GDS

#### <a name="vendor"></a>Vendor
Name | Type | Format | Description
--- | :---: | :---: | ------
id | string | - | The vendor identifier of the entry
name | string | - | The vendor description of the entry

#### <a name="segmentleg"></a>Segment Leg
Name | Type | Format | Description
--- | :---: | :---: | ------
comment | string | - | Contains the last comment saved in this segment leg.
classOfService | string | - | The class of service of the segment leg. For example, in the case of an air segment, this field would contain the one-letter booking code: Y for economy class, or F for first class...
custom1 to custom40 | object | [CustomField](#customfield) | The details from the Custom fields. These fields may not have data, depending on the configuration
endDate | date | [ISO 8601](https://www.iso.org/iso-8601-date-and-time-format.html) | The date of the end of this segment leg (in the form YYYY-MM-DD). It represents the arrival date of AIRFR and TRAIN segments, check out date for HOTEL or drop off for CARRT
endLocation | object | [ResourceLink](#resourcelink) | The location where this segment leg arrives. This would be the arrival location for an air segment for example.
endLocationDetail | string | - | Details about the end location. This would contain details about the name of a hotel, or some details about a car rental agency for example.
endTime | time | [ISO 8601](https://www.iso.org/iso-8601-date-and-time-format.html) | The time for the end of this segment leg (in the form HH:MM)
id | string | - | The unique identifier of the segment leg
returnLeg | boolean | - | Indicates whether this leg is the return leg of a round trip. In case of a ROUND_TRIP, if not explicitly set, the second segment leg will be considered as the return leg.
startDate | date | [ISO 8601](https://www.iso.org/iso-8601-date-and-time-format.html) | The date of the beginning of this segment leg (in the form YYYY-MM-DD)
startLocation | object | [ResourceLink](#resourcelink) | The start location of this segment leg. This would be the departure location for an air segment for example.
startLocationDetail | string | - | Details about the start location. This would contain details about the name of a hotel, or some details about a car rental agency for example.
startTime | time | [ISO 8601](https://www.iso.org/iso-8601-date-and-time-format.html) | The time for the beginning of this segment leg (in the form HH:MM)
segmentLocator | string | - | This is the identifier for ConcurTravel segments (if applicable)
vendorName | string | - | Contains the vendor description of the segment leg.

#### <a name="segmenttype"></a>Segment Type
Name | Type | Format | Description
--- | :---: | :---: | ------
category| enum | - | Describes the category of this segment type. Possible values are: REQ_SEG_AIRFR, REQ_SEG_CARRT, REQ_SEG_HOTEL, REQ_SEG_LIMOF, REQ_SEG_RAILF, REQ_SEG_TAXIF, REQ_SEG_MISC, REQ_SEG_PARKG, REQ_SEG_DININ, REQ_SEG_EVENT
code | string | - | __Required__ The code of the segment type. Possible values are: AIRFR, CARRT, HOTEL, LIMOF, RAILF, TAXIF, MISC, PARKG, DININ, EVENT or custom codes

It can be REQ_SEG_AIRFR / AIRFR for a regular air segment, or REQ_SEG_AIRFR / 10325 for a custom air segment.
eg.

{
    "category": "REQ_SEG_AIRFR",
    "code": "AIRFR"
}
