---
title: Trip Approval Web Service 
layout: conceptual
---

## Description
The Trip Approval web service allows clients to approve or reject trips. Clients send the unique identifier for the trip, the approver email and the workflow action to be performed (either approve or reject).

## Works With These Concur Products
* **Travel** for Concur Professional/Premium
* **Travel** for Concur Standard

## Concur Connect API Structure
Refer to **Web Services > [Core Concepts][1]** for:
* Detailed information regarding the format, structure and process of making calls to a Concur Web Service.
* Information on authentication and authorization for all Concur Web Services.
* Information on registering and enabling partner applications to use Concur Web Services.

## Product Restrictions
Concur products are highly configurable, and not all clients will have access to all features.

Partner developers must determine which configurations are required for their solution prior to the application review process. Use the [Developer Forum][2] if you have questions about the configuration settings.

Existing clients can work with Concur Advantage Technical Services to create custom applications that work with their configuration.

## Resources
[Trip Approval][3]

##  Responses and Errors
Refer to the [HTTP Codes][4] page for details of the common responses and errors.

####  Error Codes

|  Code |  Description |
|-------|--------------|
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

  


[1]: https://developer.concur.com/api-documentation/core-concepts
[2]: https://developer.concur.com/forums/concur-connect
[3]: https://developer.concur.com/trip-approval/trip-approval-resource
[4]: https://developer.concur.com/reference/http-codes
