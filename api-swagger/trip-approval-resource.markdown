---
title: Trip Approval
layout: reference
---

# Trip Approval

The Trip Approval resource allows clients to approve or reject trips. Clients send the unique identifier for the trip, the approver email and the workflow action to be performed (either approve or reject).

* [Schema](#schema)
* [Post Trip Approval](#post)
* [Error Messages](#error)


## <a name="schema"></a>Schema
###<a name="vendors"></a>Trip Approval
Name | Type | Format | Description
-----|------|--------|------------
`Version`|`string`|-|**Required** The version of the Web service, currently 1.0.
`ItinLocator`|`string`|-|The Itinerary Services Record Locator (also known as Itin Locator or Trip Locator). NOT the GDS record locator. If value of ItinLocator is unknown, RecordLocator element should be passed instead.
`RecordLocator`|`string`|-|**Required** if the ItinLocator is not sent. The GDS record locator. Should be passed only if the ItinLocator is unknown.
`ApproverLogin`|`string`|-|**Required** The Travel approver's login ID.
`Action`|`string`|-|**Required** The workflow action to take. Supported values are approve or reject.
## <a name="post"></a>Post Trip Approval
    POST /api/tws/v1.0/TripApproval/DoApproval
### Parameters
Name | Type | Format | Description
-----|------|--------|------------
||
### Input
[Trip Approval Schema](#schema)

### Response
[Trip Approval Schema](#schema)

##<a name="error"></a>Error Messages
Code | Description|
-----|------------|
`501`|TripId or ItinLocator is missing.
`503`|ManagerId is required. This is sometimes returned when the ApproverLogin is invalid.
`504`|Action is required.
`505`|Invalid Action (must be either approve or reject).
`506`|No tripId found for this ItinLocator or RecordLocator.
`507`|No request data.
`508`|Request data is not well formatted XML.
`509`|XML Validation Error. XML schema validation errors will be supplied, if available.
`510`|TripLocator ir RecordLocator was not found
`600`|An error occured while approving the trip.
`700`|An error occured while rejecting the trip.
