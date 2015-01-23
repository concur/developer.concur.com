
        <div id="main" class="container">
            <div>
                            </div>
            <div class="row">
                <div class="span12">
<div class="breadcrumbs"><a href="/">Home</a>Travel Request Resource: POST</div>
                </div>
            </div>

            <div id="content-wrapper">
<!-- <div class="row"> -->
                <div id="content" class="span9">
            # Travel Request Resource: POST
                    <div class="section">
                    <div id="node-519" class="node clear-block">


    
    <div class="content clear-block">
                <style type="text/css">
.overflow_box{
border: 1px solid grey;
padding: .5em;
overflow: auto;
background-color: #DBDBDB;
font-family:"Courier New", Courier, monospace;
font-size:11px;
}
.xml-attribute {color: #009900}
.xml-value {color: #ce7b00}
.ST0 {color: #00007c; font-family: Monospaced; font-weight: bold}
.xml-tag {color: #0000e6}
.STRING_LITERAL {color: #ce7b00}</style>This resource supports the following POST actions:

* 
        <a href="#postrequestheader">Post Travel Request Header </a>
* 
        <a href="#requestworkflow">Post Travel Request Workflow Action</a>

## 
    <a id="postrequestheader" name="postrequestheader"></a>Post Travel Request Header Request
<table border="1" bordercolor="#DBDBDB" cellpadding="3" cellspacing="0" width="100% ">
<tbody>
<tr class="GrayTableHead">
<td>
                Description</td>
<td>
                Supported Content Types</td>
</tr>
<tr>
<td>
                Posts the travel request header information for a new or existing travel request for the user specified in the OAuth access token. The travel request header contains classification information for the travel request.</td>
<td>

* 
                        application/xml

</td>
</tr>
<tr class="GrayTableHead">
<td colspan="2">
                Query Parameters - Required</td>
</tr>
<tr>
<td colspan="2">

* 
                        **requests**<br />
                        The requests keyword.

Example: <a href="https://www.concursolutions.com/api/travelrequest/v1.0/requests" title="https://www.concursolutions.com/api/travelrequest/v1.0/requests">https://www.concursolutions.com/api/travelrequest/v1.0/requests</a>
</td>
</tr>
<tr class="GrayTableHead">
<td colspan="2">
                Query Parameters - Optional</td>
</tr>
<tr>
<td colspan="2">

* 
                        **{<em>requestID</em>}**<br />
                        The unique identifier for the desired travel request. Supplied when updating an existing travel request.

Example:<br />
                    https://www.concursolutions.com/api/travelrequest/v1.0/requests/{<em>requestID</em>}<br />
                    **URI Source**: The requestId value is returned by <a href="https://developer.concur.com/node/518#requestdetails">Get Request Details</a> function, and the **Request-Url** element in this function.
</td>
</tr>
<tr class="GrayTableHead">
<td>
                Request Headers - Required</td>
<td>
                Request Headers - Optional</td>
</tr>
<tr>
<td width="50%">
                Authorization header with OAuth token for valid Concur user.
                The OAuth consumer for this request must have the following role in Travel Request: Request User. This role allows the user to create travel requests.</td>
<td valign="top" width="50%">
                None</td>
</tr>
<tr class="GrayTableHead">
<td colspan="2">
                Content Body</td>
</tr>
<tr>
<td colspan="2">
                This request should contain a <span class="codeexample">**Request** parent element with the following child elements:
<table border="1" bordercolor="#DBDBDB" cellpadding="3" cellspacing="0" width="100% ">
<tbody>
<tr class="GrayTableHead">
<td valign="top" width="20%">
                                Element</td>
<td valign="top" width="20%">
                                Required (must contain value)?</td>
<td valign="top" width="70%">
                                Description</td>
</tr>
<tr>
<td>
                                Name</td>
<td>
                                Y</td>
<td>
                                The travel request name.</td>
</tr>
<tr>
<td>
                                Purpose</td>
<td>
                                Depends on configuration</td>
<td>
                                The business purpose of the travel request. Maximum length: 2000.</td>
</tr>
<tr>
<td>
                                Comment</td>
<td>
                                Depends on configuration</td>
<td>
                                The travel request header comment.</td>
</tr>
<tr>
<td>
                                Custom1 through Custom20</td>
<td>
                                Depends on configuration</td>
<td>
The custom fields on the travel request Header form. May be required depending on configuration.
**<font color="#FF0000">NOTE</font>**<font color="#FF0000">: If any of the custom fields are configured to contain list values, please refer to the <a href="https://developer.concur.com/node/554">Posting Custom List Items</a> page for information on how to correctly submit list item values.</font>
</td>
</tr>
<tr>
<td>
                                StartDate</td>
<td>
                                Depends on configuration</td>
<td>
                                The start date for the travel request. Format: YYYY-MM-DD</td>
</tr>
<tr>
<td>
                                StartTime</td>
<td>
                                Depends on configuration</td>
<td>
                                The start time for the travel request. Format: hh:mm:ss</td>
</tr>
<tr>
<td>
                                EndDate</td>
<td>
                                Depends on configuration</td>
<td>
                                The end date for the travel request. Format: YYYY-MM-DD</td>
</tr>
<tr>
<td>
                                EndTime</td>
<td>
                                Depends on configuration</td>
<td>
                                The end time for the travel request. Format: hh:mm:ss</td>
</tr>
</tbody>
</table>

**NOTE**:

* 
                        Refer to the Travel Request Admin user interface for the list of required fields and formats.

</td>
</tr>
</tbody>
</table>
####
    XML Example Request
<pre class="overflow_box">
POST /api/travelrequest/v1.0/requests HTTPS 1.1
Host: <a href="http://www.concursolutions.com" title="www.concursolutions.com">www.concursolutions.com</a>
Authorization: OAuth {access token}
...
    
<Request <span class="xml-attribute">xmlns=<span class="xml-value">&quot;<span class="xml-value">http://www.concursolutions.com/api/travelrequest/2012/06<span class="xml-value">&quot;>
    <Name>Request for Trip to Seattle</Name>
    <Purpose>Sales team meeting</Purpose>
    <Comment>NW Regional Sales team</Comment>
    <StartDate>2012-09-30</StartDate>
    <StartTime>3:15</StartTime>
    <EndDate>2012-10-05</EndDate>
    <EndTime>15:25</EndTime>
</Request>
</pre>## 
    Post Request Header Response
<table border="1" bordercolor="#DBDBDB" cellpadding="3" cellspacing="0" width="100% ">
<tbody>
<tr class="GrayTableHead">
<td>
                HTTP Responses</td>
<td>
                Supported Content Types</td>
</tr>
<tr>
<td>
                <a href="https://developer.concur.com/node/205">HTTP Status Codes</a></td>
<td>

* 
                        application/xml

</td>
</tr>
<tr class="GrayTableHead">
<td colspan="2">
                Content Body</td>
</tr>
<tr>
<td colspan="2">
                This request will return a <span class="codeexample">**RequestStatus** parent element with the following child elements:
<table border="1" bordercolor="#DBDBDB" cellpadding="3" cellspacing="0" width="100% ">
<tbody>
<tr class="GrayTableHead">
<td valign="top" width="20%">
                                Element</td>
<td valign="top" width="70%">
                                Description</td>
</tr>
<tr>
<td valign="top">
                                Status</td>
<td valign="top">
                                The status of the travel request.</td>
</tr>
<tr>
<td valign="top">
                                Request-Url</td>
<td valign="top">
                                The URI to use when posting travel request header details to this travel request.</td>
</tr>
</tbody>
</table>

                If saving the travel request header triggers an exception, a **RequestExceptions** parent element will be provided, with a **RequestException** parent element for each exception. The **RequestException** element contains the following elements:
<table border="1" bordercolor="#DBDBDB" cellpadding="3" cellspacing="0" width="100% ">
<tbody>
<tr class="GrayTableHead">
<td valign="top" width="20%">
                                Element</td>
<td valign="top" width="70%">
                                Description</td>
</tr>
<tr>
<td valign="top">
                                EventCode</td>
<td valign="top">
                                The event that resulted in the exception.</td>
</tr>
<tr>
<td valign="top">
                                ExceptionCode</td>
<td valign="top">
                                The company-defined exception code.</td>
</tr>
<tr>
<td valign="top">
                                ExceptionMessage</td>
<td valign="top">
                                The company-defined exception message. In the case of the system MISREQFLD exception the message will list the required fields that are missing values.</td>
</tr>
<tr>
<td valign="top">
                                ExceptionVisibility</td>
<td valign="top">
                                Which users are able to see the exception.</td>
</tr>
<tr>
<td valign="top">
                                IsCleared</td>
<td valign="top">
                                Whether the exception has been cleared by the Request Processor.</td>
</tr>
<tr>
<td valign="top">
                                SeverityLevel</td>
<td valign="top">
                                A numeric value indicating the severity level of the exception. The value threshold is configurable.</td>
</tr>
</tbody>
</table>
</td>
</tr>
</tbody>
</table>
####
    XML Example of Response with Successful Travel Request Creation and Exception
<pre class="overflow_box">
<RequestStatus <span class="xml-attribute">xmlns=<span class="xml-value">&quot;<span class="xml-value">http://www.concursolutions.com/api/travelrequest/2012/06<span class="xml-value">&quot; <span class="xml-attribute">xmlns:i=<span class="xml-value">&quot;<span class="xml-value">http://www.w3.org/2001/XMLSchema-instance<span class="xml-value">&quot;>
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
</pre>## 
    <a id="requestworkflow" name="requestworkflow"></a>Post Travel Request Workflow Action Request
<table border="1" bordercolor="#DBDBDB" cellpadding="3" cellspacing="0" width="100% ">
<tbody>
<tr class="GrayTableHead">
<td colspan="2">
                Description</td>
</tr>
<tr>
<td colspan="2">
                Posts a workflow action for the supplied travel request. The workflow action moves the travel request through the workflow process. The available actions are:

* 
                        **Approve**: The travel request is approved for the current workflow approver. The travel request will continue in the workflow, and may require additional approvals based on configuration.
* 
                        **Send Back to Employee**: The travel request is sent back to the employee for revision. This workflow action is used by the approvers and processors when they discover an error that must be corrected by the user. When the user resubmits the travel request, it goes through the entire workflow again.
* 
                        **Recall to Employee**: This workflow action is initiated by the employee, and is only available after the travel request has been submitted. This workflow action will rarely be used by developers, and may not be available to some clients due to configuration.

**Two different workflow roles**
Each workflow action is associated with a workflow role. The System role is used when the workflow actions do not require a particular user to perform the action. Developers who want to evaluate a travel request programatically then supply a workflow action use the System role.
The Approver role is used when the workflow step requires an individual to perform an action. Developers who want to present a list of travel requests to approve and send the workflow action when the travel requests have been evaluated by the approver use the Approver role. This role requires that a user with the correct Concur role (Request Approver, or Request Processor for Professional) authenticates using Standard OAuth before supplying the workflow action. The user must also have access (be a valid approver or processor) for the supplied Request Id.
</td>
</tr>
<tr class="GrayTableHead">
<td colspan="2">
                Supported Content Types</td>
</tr>
<tr>
<td colspan="2">

* 
                        application/xml

</td>
</tr>
<tr class="GrayTableHead">
<td>
                Query Parameters - Required</td>
<td>
                Query Parameters - Optional</td>
</tr>
<tr>
<td>

* 
                        **requests/{<em>workflowstepId</em>}/workflowaction**<br />
                        The requests and workflowaction keywords and the unique identifier for the desired workflow step.

Example: https://www.concursolutions.com/api/travelrequest/v1.0/requests/{<em>workflowstepId</em>}/workflowaction<br />
                    **URI Source**: The URI is the **WorkflowStepURL** element found in the response of the <a href="https://developer.concur.com/node/518#requestdetails">Get Request Details</a> endpoint. The workflowstepId must match the current workflow step of the travel request. Use the <a href="https://developer.concur.com/node/518#requestdetails">Get Requests Details</a> endpoint immediately prior to sending this request to guarantee that you have the current **WorkflowStepURL**.
</td>
<td valign="top">
                None</td>
</tr>
<tr class="GrayTableHead">
<td>
                Request Headers - Required</td>
<td>
                Request Headers - Optional</td>
</tr>
<tr>
<td width="50%">
                **Authorization** header with OAuth token for valid Concur user. The OAuth consumer must have one of the following user roles in Concur: Company Administrator or Web Services Administrator for Professional, or Can Administer for Standard.</td>
<td valign="top" width="50%">
                None</td>
</tr>
<tr class="GrayTableHead">
<td colspan="2">
                Content Body</td>
</tr>
<tr>
<td colspan="2">
                This request should contain a <span class="codeexample">**WorkflowAction** parent element with the following child elements:
<table border="1" bordercolor="#DBDBDB" cellpadding="3" cellspacing="0" width="100% ">
<tbody>
<tr class="GrayTableHead">
<td valign="top" width="20%">
                                Element</td>
<td valign="top" width="20%">
                                Required (must contain value)?</td>
<td valign="top" width="70%">
                                Description</td>
</tr>
<tr>
<td valign="top">
                                <span class="codeexample">Action</td>
<td valign="top">
                                Y</td>
<td valign="top">
                                The name of the workflow action. Possible values are: **Approve**, ** Send Back to Employee**, or **Recall to Employee**. Must be one of the workflow actions available for the workflow step. Consult Request Admin, Workflow to learn details.</td>
</tr>
<tr>
<td valign="top">
                                <span class="codeexample">Comment</td>
<td valign="top">
                                Y, for Send Back to Employee</td>
<td valign="top">
                                Must be used with the Send Back to Employee workflow action. This comment is visible wherever travel request comments are available to the employee, approver, and/or processor.</td>
</tr>
</tbody>
</table>
</td>
</tr>
</tbody>
</table>
####
    XML Example Request
<pre class="overflow_box">
POST api/travelrequest/v1.0/requests/nx2WRNzp18$wjehk%wqEL6EDHRwi9r$paQS1UqyL6a4qQ/workflowaction HTTPS 1.1
Host: <a href="http://www.concursolutions.com" title="www.concursolutions.com">www.concursolutions.com</a>
Authorization: OAuth {access token}
...
    
<WorkflowAction <span class="xml-attribute">xmlns=<span class="xml-value">&quot;<span class="xml-value">http://www.concursolutions.com/api/travelrequest/2012/06<span class="xml-value">&quot;>
    <Action>Approve</Action>
    <Comment>Approved via Concur Connect</Comment>
</WorkflowAction> 
</pre>## 
    Post Request Workflow Action Response
<table border="1" bordercolor="#DBDBDB" cellpadding="3" cellspacing="0" width="100% ">
<tbody>
<tr class="GrayTableHead">
<td>
                HTTP Responses</td>
<td>
                Supported Content Types</td>
</tr>
<tr>
<td>
                <a href="https://developer.concur.com/node/205">HTTP Status Codes</a></td>
<td>

* 
                        application/xml

</td>
</tr>
<tr class="GrayTableHead">
<td colspan="2">
                Content Body</td>
</tr>
<tr>
<td colspan="2">
                This request will return an <span class="codeexample">**ActionStatus** parent element with the following child elements:
<table border="1" bordercolor="#DBDBDB" cellpadding="3" cellspacing="0" width="100% ">
<tbody>
<tr class="GrayTableHead">
<td valign="top" width="20%">
                                Element</td>
<td valign="top" width="70%">
                                Description</td>
</tr>
<tr>
<td valign="top">
                                <span class="codeexample">Message</td>
<td valign="top">
                                The error message. Only appears if a workflow action error was generated</td>
</tr>
<tr>
<td valign="top">
                                <span class="codeexample">Status</td>
<td valign="top">
                                The status of the travel request workflow action.</td>
</tr>
</tbody>
</table>
</td>
</tr>
</tbody>
</table>
####
    XML Example of Successful Response
<pre class="overflow_box">
<span class="ST0"><?<span class="ST0">xml version=&quot;1.0&quot; encoding=&quot;utf-8&quot;?>
<ActionStatus <span class="xml-attribute">xmlns=<span class="xml-value">&quot;<span class="xml-value">http://www.concursolutions.com/api/travelrequest/2012/06<span class="xml-value">&quot; <span class="xml-attribute">xmlns:i=<span class="xml-value">&quot;<span class="xml-value">http://www.w3.org/2001/XMLSchema-instance<span class="xml-value">&quot;>
    <Message>SUCCESS!</Message>
    <Status>SUCCESS!</Status>
</ActionStatus>
</pre>####
    XML Example of a Response with a Failure
<pre class="overflow_box">
<span class="ST0"><?<span class="ST0">xml version=&quot;1.0&quot; encoding=&quot;utf-8&quot;?>
<ActionStatus <span class="xml-attribute">xmlns=<span class="xml-value">&quot;<span class="xml-value">http://www.concursolutions.com/api/travelrequest/2012/06<span class="xml-value">&quot; <span class="xml-attribute">xmlns:i=<span class="xml-value">&quot;<span class="xml-value">http://www.w3.org/2001/XMLSchema-instance<span class="xml-value">&quot;>
    <Message>The action cannot be executed because the item has recently been changed. Please refresh your list and try again.</Message>
    <Status>FAILURE</Status>
</ActionStatus>
</pre>
