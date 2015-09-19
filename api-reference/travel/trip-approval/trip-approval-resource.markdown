---
title: Trip Approval 
layout: reference
---


## Description
The Trip Approval resource allows clients to approve or reject trips. Clients send the unique identifier for the trip, the approver email and the workflow action to be performed (either approve or reject).

## Resource URI
<samp>https://www.concursolutions.com/api/tws/v1.0/TripApproval/DoApproval</samp>

## Supported Content Types
* application/xml

## Supported Accept Types
* application/xml

## Operations
* Update trip approval status

## Update trip approval status

Updates the specified trip as approved or rejected by the supplied approver. Can supply either the ItinLocator or the RecordLocator value.

### Request
    POST /api/tws/v1.0/TripApproval/DoApproval HTTPS 1.1
    Host: www.concursolutions.com
    Authorization: OAuth {access token}

### Content type
application/xml

### Authorization header
The Authorization header must have an OAuth token for valid Concur trip approver.

### Request body elements
The request will contain a TripApprovalRQ parent element with a TransactionId attribute. The TransactionId value is used to identify request and response pairs, and can contain any alphanumeric string that does not contain special characters. The TripApprovalRQ element contains the following child elements:

| Element | Required? | Description |
|:---------|:--------------------------------|:-------------|
| Version |	Y |	The version of the web service. Currently 1.0. |
| ItinLocator |	N |	The Itinerary Services Record Locator (also known as Itin Locator or Trip Locator). NOT the GDS record locator. If value of ItinLocator is unknown, RecordLocator element should be passed instead. |
| RecordLocator |	Y, if the ItinLocator is not sent |	The GDS record locator. Should be passed only if the ItinLocator is unknown. |
| ApproverLogin |	Y |	The Travel approver's login ID. |
| Action |	Y	| The workflow action to take. Supported values are approve, reject. |

### Response

#### Response body elements
This request will return a TripApprovalRS parent element with a matching TransactionId attribute. The TripApprovalRS element will contain the following child elements:

|  Element |  Required? |  Description |
|:----------|:---------------------------------|:--------------|
|  Version |  Y |  The version of the web service. Currently 1.0. |
|  ItinLocator |  N |  The Itinerary Services Record Locator (also known as Itin Locator or Trip Locator). NOT the GDS record locator. If value of ItinLocator is unknown, RecordLocator element should be passed instead. |
|  RecordLocator |  Y, if the ItinLocator is not sent |  The GDS record locator. Should be passed only if the ItinLocator is unknown. |
|  ApproverLogin |  Y |  The Travel approver's login ID. |
|  Action |  Y |  The workflow action to take. Supported values are approve, reject. |

### Examples

#### Example 1: Update a trip as approved with successful response

##### Request
```
POST /api/tws/v1.0/TripApproval/DoApproval HTTPS 1.1
Host: www.concursolutions.com
Authorization: OAuth {access token}
...
```  
```XML
        <TripApprovalRQ TransactionId="1cc6ea2d-c711-409e-bb51-63b2bdd485fc">
            <Version>1.0</Version>
            <ItinLocator>CQ-BB8-16JED-3ZW</ItinLocator>
            <ApproverLogin>cm@example.com</ApproverLogin>
            <Action>approve</Action>
        </TripApprovalRQ>
```
##### Response
    200 OK
    Content-Type: application/xml
```XML
        <TripApprovalRS TransactionId="1cc6ea2d-c711-409e-bb51-63b2bdd485fc">
            <Version>1.0</Version>
            <Status>success</Status>
        </TripApprovalRS>
```
#### Example 2: Update a trip as approved with error

##### Request

```
POST /api/tws/v1.0/TripApproval/DoApproval HTTPS 1.1
Host: www.concursolutions.com
Authorization: OAuth {access token}
...
```
```XML
        <TripApprovalRQ TransactionId="1cc6ea2d-c711-409e-bb51-63b2bdd485fc">
            <Version>1.0</Version>
            <ItinLocator>CQ-BB8-16JED-3ZW</ItinLocator>
            <ApproverLogin>cm@example.com</ApproverLogin>
            <Action>approve</Action>
        </TripApprovalRQ>
```
##### Response
    200 OK
    Content-Type: application/xml
```XML
        <TripApprovalRS TransactionId="1cc6ea2d-c711-409e-bb51-63b2bdd485fc">
            <Version>1.0</Version>
            <Status>failure</Status>
            <Error Code="506">No tripId found for this ItinLocator or RecordLocator.</Error>
        </TripApprovalRS>
```


###  Error Codes

|  Code |  Description |
|:-------|:--------------|
|  501 |  TripId or ItinLocator is missing. |
|  503 |  ManagerId is required. This is sometimes returned when the ApproverLogin is invalid. |
|  504 |  Action is required. |
|  505 |  Invalid Action (must be either approve or reject). |
|  506 |  No tripId found for this ItinLocator or RecordLocator. |
|  507 |  No request data. |
|  508 |  Request data is not well formatted XML. |
|  509 |  XML Validation Error. XML schema validation errors will be supplied, if available. |
|  510 |  TripLocator ir RecordLocator was not found |
|  600 |  An error occured while approving the trip. |
|  700 |  An error occured while rejecting the trip. |



