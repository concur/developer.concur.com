---
title: Travel Request Resource
layout: operation
---




This resource supports the following POST actions:


#  Post Travel Request Header Request

## Description
Posts the travel request header information for a new or existing travel request for the user specified in the OAuth access token. The travel request header contains classification information for the travel request.

### Supported Content Types
* application/xml

## Query Parameters - Required
* **requests**  The requests keyword.
Example: <https://www.concursolutions.com/api/travelrequest/v1.0/requests>

## Query Parameters - Optional
* **{_requestID_}**  
The unique identifier for the desired travel request. Supplied when updating an existing travel request.

Example:  
https://www.concursolutions.com/api/travelrequest/v1.0/requests/{_requestID_}  
**URI Source**: The requestId value is returned by [Get Request Details][1] function, and the **Request-Url** element in this function.

## Request Headers - Required
* Authorization header with OAuth token for valid Concur user.

The OAuth consumer for this request must have the following role in Travel Request: Request User. This role allows the user to create travel requests.

## Request Headers - Optional
* None

## Content Body
This request should contain a **Request** parent element with the following child elements:

|  Element |  Required (must contain value)? |  Description |
|----------|---------------------------------|--------------|
|  Name    |  Y                              |  The travel request name. |
|  Purpose |  Depends on configuration       |  The business purpose of the travel request. Maximum length: 2000. |
|  Comment |  Depends on configuration       |  The travel request header comment. |
|  Custom1 through Custom20 |  Depends on configuration | The custom fields on the travel request Header form. May be required depending on configuration.  **NOTE**: If any of the custom fields are configured to contain list values, please refer to the [Posting Custom List Items][2] page for information on how to correctly submit list item values.|
|  StartDate |  Depends on configuration |  The start date for the travel request. Format: YYYY-MM-DD |
|  StartTime |  Depends on configuration |  The start time for the travel request. Format: hh:mm:ss |
|  EndDate   |  Depends on configuration |  The end date for the travel request. Format: YYYY-MM-DD |
|  EndTime   |  Depends on configuration |  The end time for the travel request. Format: hh:mm:ss |

**NOTE**:
* Refer to the Travel Request Admin user interface for the list of required fields and formats.

## XML Example Request

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

#  Post Request Header Response

## HTTP Responses
* [HTTP Status Codes][4]

## Supported Content Types
* application/xml

## Content Body
This request will return a **RequestStatus** parent element with the following child elements:

|  Element     |  Description |
|--------------|--------------|
|  Status      |  The status of the travel request. | 
|  Request-Url |  The URI to use when posting travel request header details to this travel request. |

If saving the travel request header triggers an exception, a **RequestExceptions** parent element will be provided, with a **RequestException** parent element for each exception. The **RequestException** element contains the following elements:

|  Element          |  Description |
|-------------------|--------------|
|  EventCode        |  The event that resulted in the exception. |
|  ExceptionCod     |  The company-defined exception code. |
|  ExceptionMessage |  The company-defined exception message. In the case of the system MISREQFLD exception the message will list the required fields that are missing values. |
|  ExceptionVisibility |  Which users are able to see the exception. |
|  IsCleared           |  Whether the exception has been cleared by the Request Processor. |
|  SeverityLevel       |  A numeric value indicating the severity level of the exception. The value threshold is configurable. |


## XML Example of Response with Successful Travel Request Creation and Exception

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

#  Post Travel Request Workflow Action Request

## Description
Posts a workflow action for the supplied travel request. The workflow action moves the travel request through the workflow process. The available actions are:
* **Approve**: The travel request is approved for the current workflow approver. The travel request will continue in the workflow, and may require additional approvals based on configuration.
* **Send Back to Employee**: The travel request is sent back to the employee for revision. This workflow action is used by the approvers and processors when they discover an error that must be corrected by the user. When the user resubmits the travel request, it goes through the entire workflow again.
* **Recall to Employee**: This workflow action is initiated by the employee, and is only available after the travel request has been submitted. This workflow action will rarely be used by developers, and may not be available to some clients due to configuration.

**Two different workflow roles**

Each workflow action is associated with a workflow role. The System role is used when the workflow actions do not require a particular user to perform the action. Developers who want to evaluate a travel request programatically then supply a workflow action use the System role.

The Approver role is used when the workflow step requires an individual to perform an action. Developers who want to present a list of travel requests to approve and send the workflow action when the travel requests have been evaluated by the approver use the Approver role. This role requires that a user with the correct Concur role (Request Approver, or Request Processor for Professional) authenticates using Standard OAuth before supplying the workflow action. The user must also have access (be a valid approver or processor) for the supplied Request Id.

 |

| Supported Content Types     |
| --------------------------- |
| Query Parameters - Required | Query Parameters - Optional |
* **requests/{_workflowstepId_}/workflowaction**  
The requests and workflowaction keywords and the unique identifier for the desired workflow step.

Example: https://www.concursolutions.com/api/travelrequest/v1.0/requests/{_workflowstepId_}/workflowaction  
**URI Source**: The URI is the **WorkflowStepURL** element found in the response of the [Get Request Details][1] endpoint. The workflowstepId must match the current workflow step of the travel request. Use the [Get Requests Details][1] endpoint immediately prior to sending this request to guarantee that you have the current **WorkflowStepURL**.

 |  None |
|  Request Headers - Required |  Request Headers - Optional |
|  **Authorization** header with OAuth token for valid Concur user. The OAuth consumer must have one of the following user roles in Concur: Company Administrator or Web Services Administrator for Professional, or Can Administer for Standard. |  None |
|  Content Body |   |
|  This request should contain a **WorkflowAction** parent element with the following child elements:

|  Element |  Required (must contain value)? |  Description |
|  Action |  Y |  The name of the workflow action. Possible values are: **Approve**, ** Send Back to Employee**, or **Recall to Employee**. Must be one of the workflow actions available for the workflow step. Consult Request Admin, Workflow to learn details. |   |
|  Comment |  Y, for Send Back to Employee |  Must be used with the Send Back to Employee workflow action. This comment is visible wherever travel request comments are available to the employee, approver, and/or processor. |

 |

####  XML Example Request

    POST api/travelrequest/v1.0/requests/nx2WRNzp18$wjehk%wqEL6EDHRwi9r$paQS1UqyL6a4qQ/workflowaction HTTPS 1.1
    Host: [www.concursolutions.com][3]
    Authorization: OAuth {access token}
    ...

    <WorkflowAction xmlns="http://www.concursolutions.com/api/travelrequest/2012/06">
        <Action>Approve</Action>
        <Comment>Approved via Concur Connect</Comment>
    </WorkflowAction>

##  Post Request Workflow Action Response

| ----- |
|  HTTP Responses |  Supported Content Types |
|  [HTTP Status Codes][4] |   |
|  Content Body |   |
|  This request will return an **ActionStatus** parent element with the following child elements:

|  Element |  Description |
|  Message |  The error message. Only appears if a workflow action error was generated |   |
|  Status |  The status of the travel request workflow action. |

 |

####  XML Example of Successful Response

    <?xml version="1.0" encoding="utf-8"?>
    <ActionStatus xmlns="http://www.concursolutions.com/api/travelrequest/2012/06" xmlns:i="http://www.w3.org/2001/XMLSchema-instance">
        <Message>SUCCESS!</Message>
        <Status>SUCCESS!</Status>
    </ActionStatus>

####  XML Example of a Response with a Failure

    <?xml version="1.0" encoding="utf-8"?>
    <ActionStatus xmlns="http://www.concursolutions.com/api/travelrequest/2012/06" xmlns:i="http://www.w3.org/2001/XMLSchema-instance">
        <Message>The action cannot be executed because the item has recently been changed. Please refresh your list and try again.</Message>
        <Status>FAILURE</Status>
    </ActionStatus>



[1]: https://developer.concur.com/node/518#requestdetails
[2]: https://developer.concur.com/reference/custom-list-items
[3]: http://www.concursolutions.com "www.concursolutions.com"
[4]: https://developer.concur.com/reference/http-codes
