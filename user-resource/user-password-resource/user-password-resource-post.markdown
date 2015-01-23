
        <div id="main" class="container">
            <div>
                            </div>
            <div class="row">
                <div class="span12">
<div class="breadcrumbs"><a href="/">Home</a>User Password Resource: POST</div>
                </div>
            </div>

            <div id="content-wrapper">
<!-- <div class="row"> -->
                <div id="content" class="span9">
            # User Password Resource: POST
                    <div class="section">
                    <div id="node-402" class="node clear-block">


    
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
This resource supports the following POST actions:

    * 
        <a href="#newlistitem">Post User Password Update </a>

## 
    <a id="newlistitem" name="newlistitem"></a>Post User Password Update Request
<table border="1" bordercolor="#dbdbdb" cellpadding="3" cellspacing="0" width="100%">
    <tbody>
        <tr class="GrayTableHead">
            <td>
                Description</td>
            <td>
                Supported Content Types</td>
        </tr>
        <tr>
            <td>
                Updates passwords for up to 500 users.</td>
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
                Authorization header with OAuth token for valid Concur user. The OAuth consumer must have one of the following user roles in Concur:
                Professional:
                
                    * 
                        Employee Administrator
                    * 
                        User Administrator
                    * 
                        Password Manager
                    * 
                        Web Services Administrator
                
                Standard or Developer Sandbox:
                
                    * 
                        Can Administer
                    * 
                        Can Administer Expense and Travel
                
            </td>
            <td valign="top" width="50%">
                None</td>
        </tr>
        <tr class="GrayTableHead">
            <td colspan="2">
                Content Body</td>
        </tr>
        <tr>
            <td colspan="2">
                This function requires as its arguments a <span class="codeexample">**UserBatch** element containing a <span class="codeexample">**User** child element for each user. The <span class="codeexample">**User** element must have the following elements:<br />
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
                                LoginID</td>
                            <td valign="top">
                                Y</td>
                            <td valign="top">
                                The user's logon ID. The default value is the user's email address.</td>
                        </tr>
                        <tr>
                            <td valign="top">
                                Password</td>
                            <td valign="top">
                                Y</td>
                            <td valign="top">
                                The user's new password.<br />
                                **NOTE**: This information is encrypted in the Concur database.</td>
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
POST /api/user/v1.0/Users/password HTTPS 1.1 
Host: www.concursolutions.com
Authorization: OAuth {access token}
Content-Type: application/xml
...

<UserBatch <span class="xml-attribute">xmlns=<span class="xml-value">&quot;<span class="xml-value">http://www.concursolutions.com/api/user/2011/02<span class="xml-value">&quot;>
    <User>
        <LoginID>tb@example.com</LoginID>
        <Password>1234password!</Password> 
    </User> 
    <User> 
        <LoginID>cm@example.com</LoginID>
        <Password>1234password!</Password> 
    </User> 
</UserBatch>
</pre>
## 
    Post User Password Update Response
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
                <a href="https://developer.concur.com/node/205">HTTP Status Codes</a>
                <a href="https://developer.concur.com/node/401#usererrors">User Errors </a>
            </td>
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
                This request will return a <span class="codeexample">**BatchResult** parent element with the following child elements:<br />
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
                                <span class="codeexample">RecordsSucceeded</td>
                            <td valign="top">
                                The number of records processed that were successfully updated.</td>
                        </tr>
                        <tr>
                            <td valign="top">
                                <span class="codeexample">RecordsFailed</td>
                            <td valign="top">
                                The number of records processed that were not successfully updated.</td>
                        </tr>
                        <tr>
                            <td valign="top">
                                <span class="codeexample">UserPasswordStatusList</td>
                            <td valign="top">
                                <span class="codeexample">This  parent element will contains a <span class="codeexample">**UserPasswordStatus** element for each user. The <span class="codeexample">**UserPasswordStatus** element contains the following child elements:<br />
                                <br />
                                <table border="1" bordercolor="#cccccc" cellpadding="3" cellspacing="0" width="100%">
                                    <tbody>
                                        <tr>
                                            <td width="20%">
                                                <span class="codeexample">LoginID</td>
                                            <td width="70%">
                                                The login ID of the user.</td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <span class="codeexample">Status</td>
                                            <td>
                                                The status of the attempt to update the user's password. Format: Success, Failed.</td>
                                        </tr>
                                        <tr>
                                            <td>
                                                Message</td>
                                            <td>
                                                Additional details about the success or failure of the request.</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </td>
        </tr>
    </tbody>
</table>
####
    XML Example Response with Success and Failure
<pre class="overflow_box">
<BatchResult <span class="xml-attribute">xmlns=&quot;http://www.concursolutions.com/api/user/2011/02&quot; xmlns:i=&quot;http://www.w3.org/2001/XMLSchema-instance&quot;> 
    <RecordsSucceeded>1</RecordsSucceeded> 
    <RecordsFailed>1</RecordsFailed> 
    <UserPasswordStatusList>
        <UserPasswordStatus>
            <LoginID>tb@example.com</LoginID>
            <Status>Success</Status>
            <Message>Password Updated.</Message>
        </UserPasswordStatus>
        <UserPasswordStatus>
            <LoginID>cm@example.com</LoginID>
            <Status>Failed</Status>
            <Message>This employee doesn't have an Employee ID. To update the password, the user must have an Employee ID.</Message> 
        </UserPasswordStatus>
</BatchResult> 
</pre>
<br />
