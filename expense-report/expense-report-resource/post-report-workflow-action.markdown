
        <div id="main" class="container">
            <div>
                            </div>
            <div class="row">
                <div class="span12">
<div class="breadcrumbs"><a href="/">Home</a>Expense Report Resource: POST Report Workflow Action</div>
                </div>
            </div>

            <div id="content-wrapper">
<!-- <div class="row"> -->
                <div id="content" class="span9">
            # Expense Report Resource: POST Report Workflow Action
                    <div class="section">
                    <div id="node-707" class="node clear-block">


    
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
.STRING_LITERAL {color: #ce7b00}</style>## 
    <a id="postreportworkflow" name="postreportworkflow"></a>POST Report Workflow Action Request
<table border="1" bordercolor="#dbdbdb" cellpadding="3" cellspacing="0" width="100%">
<tbody>
<tr class="GrayTableHead">
<td colspan="2">
                Description</td>
</tr>
<tr>
<td colspan="2">
                Posts a workflow action for the supplied expense report. The workflow action moves the expense report through the workflow process. The available actions are:

* 
                        **Approve**: The report successfully completes the current workflow step. The report will continue in the workflow, and may require additional approvals based on configuration. If the report was in the Processing Payment status, it will be moved to the Paid status.<br />
                        **NOTE**: Reports can't be moved from Processing Payment to Paid until all of their expense entries have been extracted or manually paid. Wait until the extract process completes for the report, then send the Approve workflow action.
* 
                        **Send Back to Employee**: The report is sent back to the employee for revision. When the user resubmits the report, it travels through the entire workflow again.
* 
                        **Recall to Employee**: This workflow action is initiated by the employee, and is only available after the report has been submitted. This workflow action may not be available to some clients due to configuration.

**<font color="#ff0000">WARNING: </font>**<font color="#ff0000">Prior to calling this endpoint the Caller <u>must</u> check the Approval Status found in the **ApprovalStatusName** element in the response for <a href="https://developer.concur.com/node/487#reportdetails">Get Report Details</a> to ensure the report is at the workflow step the Caller expects. Under no circumstance should a Caller make a call to this endpoint without being certain the report is at the workflow step the Caller expects.</font>
</td>
</tr>
<tr class="GrayTableHead">
<td colspan="2">
                Two Different Workflow Roles</td>
</tr>
<tr>
<td colspan="2">
                Each workflow step in a workflow is associated with a workflow role. Professional clients can configure workflow steps and roles in the Workflows area of Expense Admin. The OAuth consumer is evaluated to determine which role(s) the consumer has in Concur. There are two different types of workflow roles:
The System role is used when the workflow actions can be completed programatically. Any workflow action can be completed this way, depending on the client's business process. The workflow role can be configured while adding the report workflow step. Some steps may require the System role. When using this role, the OAuth consumer must have the following user role: Standard/Developer Sandbox: Can Administer, Professional: Company Admin or Web Services Administrator. The expense report owner must have an approver or processor assigned to them before the System role can make changes to their reports.
The Approver role is used when the workflow action should be completed by a particular user. Developers who want to present a list of reports to approve and send the workflow action when the reports have been evaluated by the approver use the Approver role. This role requires that a user with the correct Concur role (Expense Approver, Authorized Approver, Cost Object Approver, or Expense Processor for Professional, or the Can Administer or Can Approve Reports roles for Standard) authenticates using Standard OAuth before supplying the workflow action. The user must also have access (be a valid approver or processor) for the supplied report Id.
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
                        **{<em>workflowstepID</em>}/workflowaction**<br />
                        The identifier for the desired workflow step and the workflowaction keyword.

Example: <a href="https://www.concursolutions.com/api/expense/expensereport/v1.1/report/" title="https://www.concursolutions.com/api/expense/expensereport/v1.1/report/">https://www.concursolutions.com/api/expense/expensereport/v1.1/report/</a><br />
                    {<em>workflowstepId</em>}/workflowaction
**URI Source**: The URI is returned in the **WorkflowActionURL** element of the <a href="https://developer.concur.com/node/487#reportdetails">Get Report Details</a> response.
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
                Authorization header with OAuth token for valid Concur user.</td>
<td valign="top" width="50%">
                None</td>
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
<td colspan="2">
                Content Body</td>
</tr>
<tr>
<td colspan="2">
                This request should contain a **WorkflowAction** parent element with the following child elements:
<table border="1" bordercolor="#dbdbdb" cellpadding="3" cellspacing="0" width="100%">
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
                                Action</td>
<td valign="top">
                                Y</td>
<td valign="top">
                                The name of the workflow action. Possible values are: **Approve**, ** Send Back to Employee**, or** Recall to Employee**. Must be one of the workflow actions available for the workflow step. Consult Expense Admin >Workflow to learn details.</td>
</tr>
<tr>
<td valign="top">
                                Comment</td>
<td valign="top">
                                Y, for Send Back to Employee</td>
<td valign="top">
                                Must be used with the Send Back to Employee workflow action. This comment is visible wherever report comments are available to the employee, approver, authorization request administrator, and/or processor. Max length: 2000</td>
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
POST https://www.concursolutions.com/api/expense/expensereport/v1.1/report/nx2WRNzp18$wjehk%wqEL6EDHRwi9r$paQS1UqyL6a454QitqQ/workflowaction HTTP/1.1
Authorization: OAuth {access token}
...
    
<WorkflowAction <span class="xml-attribute">xmlns=<span class="xml-value">&quot;<span class="xml-value">http://www.concursolutions.com/api/expense/expensereport/2011/03<span class="xml-value">&quot;>
    <Action>Approve</Action>
    <Comment>Approved via Concur Connect</Comment>
</WorkflowAction> 
</pre>## 
    POST Report Workflow Action Response
<table border="1" bordercolor="#dbdbdb" cellpadding="3" cellspacing="0" width="100%">
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
                This request will return an **ActionStatus** parent element with the following child elements:
<table border="1" bordercolor="#dbdbdb" cellpadding="3" cellspacing="0" width="100%">
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
                                The error message. Only appears if a workflow action error was generated.</td>
</tr>
<tr>
<td valign="top">
                                <span class="codeexample">Status</td>
<td valign="top">
                                The status of the report workflow action.</td>
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
<ActionStatus <span class="xml-attribute">xmlns=<span class="xml-value">&quot;<span class="xml-value">http://www.concursolutions.com/api/expense/expensereport/2011/03<span class="xml-value">&quot; <span class="xml-attribute">xmlns:i=<span class="xml-value">&quot;<span class="xml-value">http://www.w3.org/2001/XMLSchema-instance<span class="xml-value">&quot;>
    <Message>SUCCESS!</Message>
    <Status>SUCCESS!</Status>
</ActionStatus>
</pre>####
    XML Example of Response With Error
<pre class="overflow_box">
<span class="ST0"><?<span class="ST0">xml version=&quot;1.0&quot; encoding=&quot;utf-8&quot;?>
<ActionStatus <span class="xml-attribute">xmlns=<span class="xml-value">&quot;<span class="xml-value">http://www.concursolutions.com/api/expense/expensereport/2011/03<span class="xml-value">&quot; <span class="xml-attribute">xmlns:i=<span class="xml-value">&quot;<span class="xml-value">http://www.w3.org/2001/XMLSchema-instance<span class="xml-value">&quot;>
    <Message>The action cannot be executed because the item has recently been changed. Please refresh your list and try again.</Message>
    <Status>FAILURE</Status>
</ActionStatus>
</pre>
