[Source](https://developer.concur.com/trip-approval/trip-approval-resource/approval-resource-post "Permalink to Approval Resource: POST | Developer Portal")

# Approval Resource: POST | Developer Portal

This resource supports the following POST actions:

##  Post Trip Approval Request

| ----- |
|  Description |  Supported Content Types |
|  Updates the specified trip as approved or rejected by the supplied approver. Can supply either the ItinLocator or the RecordLocator value. |   |
|  Query Parameters - Required |  Query Parameters - Optional |
|  None |  None |
|  Request Headers - Required |  Request Headers - Optional |
|  Authorization header with OAuth token for valid Concur trip approver. |  None |
|  Content Body |   |
|  The request will contain a **TripApprovalRQ** parent element with a TransactionId attribute. The TransactionId value is used to identify request and response pairs, and can contain any alphanumeric string that does not contain special characters. The **TripApprovalRQ** element contains the following child elements:  

|  Element |  Required (must contain value)? |  Description |
|  Version |  Y |  The version of the web service. Currently 1.0. |   |
|  ItinLocator |  N |  The Itinerary Services Record Locator (also known as Itin Locator or Trip Locator). NOT the GDS record locator. If value of ItinLocator is unknown, RecordLocator element should be passed instead. |
|  RecordLocator |  Y, if the ItinLocator is not sent |  The GDS record locator. Should be passed only if the ItinLocator is unknown. |
|  ApproverLogin |  Y |  The Travel approver's login ID. |
|  Action |  Y |  The workflow action to take. Supported values are approve, reject. |

 |

####  XML Example Request

    POST /api/tws/v1.0/TripApproval/DoApproval HTTPS 1.1
    Host: www.concursolutions.com
    Authorization: OAuth {access token}
    ...
        <TripApprovalRQ TransactionId="1cc6ea2d-c711-409e-bb51-63b2bdd485fc">
            <Version>1.0</Version>
            <ItinLocator>CQ-BB8-16JED-3ZW</ItinLocator>
            <ApproverLogin>cm@example.com</ApproverLogin>
            <Action>approve</Action>
        </TripApprovalRQ>

##  Post Trip Approval Response

| ----- |
|  HTTP Responses |  Supported Content Types |
|

[HTTP Status Codes][1]

[Error Codes][2]

 |   |
|  Content Body |   |
|  This request will return a **TripApprovalRS** parent element with a matching TransactionId attribute. The **TripApprovalRS** element will contain the following child elements:  

|  Element |  Description |
|  Version |  The version of the web service. Currently 1.0. |   |
|  Status |  The status of the trip approval. Returns either success or failure. |
|  Error |  This element appears only when the approval failed. It contains a Code attribute that provides the error code, and a value that contains the error message. Refer to the [Error Code][2] table. |

 |

####  XML Example of Successful Response

    200 OK
    Content-Type: application/xml
        <TripApprovalRS TransactionId="1cc6ea2d-c711-409e-bb51-63b2bdd485fc">
            <Version>1.0</Version>
            <Status>success</Status>
        </TripApprovalRS>

####  XML Example Response with Error

    200 OK
    Content-Type: application/xml

        <TripApprovalRS TransactionId="1cc6ea2d-c711-409e-bb51-63b2bdd485fc">
            <Version>1.0</Version>
            <Status>failure</Status>
            <Error Code="506">No tripId found for this ItinLocator or RecordLocator.</Error>
        </TripApprovalRS>

  
Last Modified: 4/18/2013 2:50 PM PDT

[1]: https://developer.concur.com/node/205
[2]: https://developer.concur.com/node/397#responses
