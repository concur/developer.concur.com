
        <div id="main" class="container">
            <div>
                            </div>
            <div class="row">
                <div class="span12">
<div class="breadcrumbs"><a href="/">Home</a>Expense Delegator Resource: GET</div>
                </div>
            </div>

            <div id="content-wrapper">
<!-- <div class="row"> -->
                <div id="content" class="span9">
            # Expense Delegator Resource: GET
                    <div class="section">
                    <div id="node-475" class="node clear-block">


    
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
.STRING_LITERAL {color: #ce7b00}</style>
This resource supports the following GET actions:

    * 
        <a href="#delegators">Get List of Delegators </a>

## 
    <a id="delegators" name="delegators"></a>Get List of Delegators Request
<table border="1" bordercolor="#DBDBDB" cellpadding="3" cellspacing="0" width="100% ">
    <tbody>
        <tr class="GrayTableHead">
            <td>
                Description</td>
            <td>
                Supported Accept Types</td>
        </tr>
        <tr>
            <td>
                Retrieves the list of users that have granted delegate permissions to the user specified in the <a href="https://developer.concur.com/node/491">OAuth</a> access token.</td>
            <td>
                
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
                None</td>
            <td>
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
    </tbody>
</table>
####
    XML Example Request
<pre class="overflow_box">
GET https://www.concursolutions.com/api/expense/expensereport/v1.1/Delegators HTTP/1.1
Authorization: OAuth {access token}
...
</pre>
## 
    Get List of Delegators Response
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
                This request will return a **DelegatorsList** parent element with a **Delegator** parent element for each user that has granted delegate rights to the OAuth consumer. The **Delegator** element has the following child elements:
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
                                CanApprove</td>
                            <td valign="top">
                                Whether the delegate is granted the right to approve expense reports on behalf of the delegator.</td>
                        </tr>
                        <tr>
                            <td valign="top">
                                CanPrepare</td>
                            <td valign="top">
                                Whether the delegate is granted the right to create expense reports on behalf of the delegator.</td>
                        </tr>
                        <tr>
                            <td valign="top">
                                CanSubmit</td>
                            <td valign="top">
                                Whether the delegate is granted the right to submit expense reports on behalf of the delegator.</td>
                        </tr>
                        <tr>
                            <td valign="top">
                                CanTemporaryApprove</td>
                            <td valign="top">
                                Whether the delegate is granted the same temporary approval rights as the delegator.</td>
                        </tr>
                        <tr>
                            <td valign="top">
                                CanViewReceipts</td>
                            <td valign="top">
                                Whether the delegate is granted the right to view receipts on behalf of the delegator.</td>
                        </tr>
                        <tr>
                            <td valign="top">
                                ReceiveApprovalEmails</td>
                            <td valign="top">
                                Whether the delegate also receives the approval emails sent to the delegator.</td>
                        </tr>
                        <tr>
                            <td valign="top">
                                ReceivesEmails</td>
                            <td valign="top">
                                Whether the delegate also receives the Concur emails sent to the delegator.</td>
                        </tr>
                        <tr>
                            <td valign="top">
                                DelegatorXUserID</td>
                            <td valign="top">
                                The user ID of the delegator.</td>
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
200 OK
Content-Type: application/xml

<DelegatorsList <span class="xml-attribute">xmlns=<span class="xml-value">&quot;<span class="xml-value">http://www.concursolutions.com/api/expense/expensereport/2011/03<span class="xml-value">&quot; <span class="xml-attribute">xmlns:i=<span class="xml-value">&quot;<span class="xml-value">http://www.w3.org/2001/XMLSchema-instance<span class="xml-value">&quot;>
    <Delegator>
        <CanApprove>N</CanApprove>
        <CanPrepare>Y</CanPrepare>
        <CanSubmit>Y</CanSubmit>
        <CanTemporaryApprove>N</CanTemporaryApprove>
        <CanViewReceipts>Y</CanViewReceipts>
        <ReceiveApprovalEmails>N</ReceiveApprovalEmails>
        <ReceivesEmails>N</ReceivesEmails>
        <DelegatorXUserID>terryb@example.com</DelegatorXUserID>
    </Delegator>
    <Delegator>
        <CanApprove>N</CanApprove>
        <CanPrepare>Y</CanPrepare>
        <CanSubmit>Y</CanSubmit>
        <CanTemporaryApprove>N</CanTemporaryApprove>
        <CanViewReceipts>N</CanViewReceipts>
        <ReceiveApprovalEmails>N</ReceiveApprovalEmails>
        <ReceivesEmails>N</ReceivesEmails>
        <DelegatorXUserID>patd@example.com</DelegatorXUserID>
    </Delegator>
</DelegatorsList>
</pre>
<br />
