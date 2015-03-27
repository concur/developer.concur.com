---
title: Trip Approval Resource 
layout: resource
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
* [Update trip approval status](#a1)

## <a name="a1">Update trip approval status</a>

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



