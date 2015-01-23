
        <div id="main" class="container">
            <div>
                            </div>
            <div class="row">
                <div class="span12">
<div class="breadcrumbs"><a href="/">Home</a>User Resource: GET</div>
                </div>
            </div>

            <div id="content-wrapper">
<!-- <div class="row"> -->
                <div id="content" class="span9">
            # User Resource: GET
                    <div class="section">
                    <div id="node-406" class="node clear-block">


    
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
        <a href="#getuserinfo">Get User Information </a>

## 
    <a id="getuserinfo" name="getuserinfo"></a>Get User Information Request
<table border="1" bordercolor="#dbdbdb" cellpadding="3" cellspacing="0" width="100%">
    <tbody>
        <tr class="GrayTableHead">
            <td>
                Description</td>
            <td>
                Supported Accept Types</td>
        </tr>
        <tr>
            <td>
                Retrieves the profile information for the OAuth consumer or the user specified with the loginID query string.</td>
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
            <td valign="top">
                None</td>
            <td>
                
                    * 
                        **{<em>loginID</em>}**<br />
                        The URL-encoded Concur login of the user.
                
                Example: https://www.concursolutions.com/api/user/v1.0/User/?loginID={<em>loginID</em>}
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
                Authorization header with OAuth token for valid Concur user.<br />
                <br />
                This **loginID** query string can only be used if the OAuth consumer has one of the following user roles:<br />
                <br />
                Standard and the developer sandbox: Can Administer<br />
                <br />
                Professional: User Admin, User Admin (Read Only), Employee Administrator, Employee Administrator (Read Only), Web Services Admin, Company Admin.</td>
            <td valign="top" width="50%">
                None</td>
        </tr>
    </tbody>
</table>
####
    XML Example Request
<pre class="overflow_box">
GET https://www.concursolutions.com/api/user/v1.0/User/ HTTPS 1.1
Authorization: OAuth {access token}
...
</pre>
####
    XML Example Request with Supplied User
<pre class="overflow_box">
GET https://www.concursolutions.com/api/user/v1.0/User/?loginID=cm%40example.com HTTPS 1.1
Authorization: OAuth {access token}
...
</pre>
## 
    Get User Information Response
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
                <a href="https://developer.concur.com/node/401#usererrors">User Errors</a>
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
                This request will return a **UserProfile** child element for the specified user. The **UserProfile** elements will vary depending on the form configuration, and may contain the following child elements:<br />
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
                                LoginId</td>
                            <td valign="top">
                                The user's logon ID.</td>
                        </tr>
                        <tr>
                            <td valign="top">
                                Active</td>
                            <td valign="top">
                                Whether the user is currently active. Format: Y/N.</td>
                        </tr>
                        <tr>
                            <td valign="top">
                                FirstName</td>
                            <td valign="top">
                                The user's first name.</td>
                        </tr>
                        <tr>
                            <td valign="top">
                                LastName</td>
                            <td valign="top">
                                The user's last name.</td>
                        </tr>
                        <tr>
                            <td valign="top">
                                Mi</td>
                            <td valign="top">
                                The user's middle initial.</td>
                        </tr>
                        <tr>
                            <td valign="top">
                                EmailAddress</td>
                            <td valign="top">
                                The user's email address.</td>
                        </tr>
                        <tr>
                            <td valign="top">
                                EmpId</td>
                            <td valign="top">
                                The unique identifier for the user.</td>
                        </tr>
                        <tr>
                            <td valign="top">
                                LedgerName</td>
                            <td valign="top">
                                The user's assigned account code ledger.</td>
                        </tr>
                        <tr>
                            <td valign="top">
                                LocaleName</td>
                            <td valign="top">
                                The user's language locale code. One of the <a href="https://developer.concur.com/node/640">Supported Locales</a>. Example: United States English is en_US.</td>
                        </tr>
                        <tr>
                            <td valign="top">
                                OrgUnit1 through OrgUnit6</td>
                            <td valign="top">
                                Varies depending on configuration.</td>
                        </tr>
                        <tr>
                            <td valign="top">
                                Custom1 through Custom21</td>
                            <td valign="top">
                                Varies depending on configuration. If the custom field is a list field, the data will be returned as: (list item short code) list item name. List Field Example: <Custom1>(1234) Project 1234</Custom1></td>
                        </tr>
                        <tr>
                            <td valign="top">
                                CtryCode</td>
                            <td valign="top">
                                The user's two-digit country code.</td>
                        </tr>
                        <tr>
                            <td valign="top">
                                CashAdvanceAccountCode</td>
                            <td valign="top">
                                The user's account code for cash advances.</td>
                        </tr>
                        <tr>
                            <td valign="top">
                                CrnCode</td>
                            <td valign="top">
                                The user's three digit reimbursement currency. Example: United States Dollar is USD.</td>
                        </tr>
                        <tr>
                            <td valign="top">
                                CtrySubCode</td>
                            <td valign="top">
                                The user's two-digit country code and two-digit state or province code. Example: Washington State, United States is US-WA.</td>
                        </tr>
                        <tr>
                            <td valign="top">
                                ExpenseUser</td>
                            <td valign="top">
                                Whether the user has access to Expense. Format: Y/N.</td>
                        </tr>
                        <tr>
                            <td valign="top">
                                ExpenseApprover</td>
                            <td valign="top">
                                Whether the user is an Expense approver. Format: Y/N.</td>
                        </tr>
                        <tr>
                            <td valign="top">
                                TripUser</td>
                            <td valign="top">
                                Whether the user has access to Travel. Format: Y/N.</td>
                        </tr>
                        <tr>
                            <td valign="top">
                                InvoiceUser</td>
                            <td valign="top">
                                Whether the user has access to Invoice. Format: Y/N.</td>
                        </tr>
                        <tr>
                            <td valign="top">
                                InvoiceApprover</td>
                            <td valign="top">
                                Whether the user is an Invoice approver. Format: Y/N.</td>
                        </tr>
                        <tr>
                            <td valign="top">
                                ExpenseApproverEmployeeID</td>
                            <td valign="top">
                                The employee ID of the user's Expense approver. If you are importing both a user and their approver, the approver should be listed before the user in the batch.</td>
                        </tr>
                        <tr>
                            <td valign="top">
                                IsTestEmp</td>
                            <td valign="top">
                                Whether the user is a test user. Format: Y/N.</td>
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

<UserProfile <span class="xml-attribute">xmlns=<span class="xml-value">&quot;<span class="xml-value">https://www.concursolutions.com/api/user/2011/02<span class="xml-value">&quot; <span class="xml-attribute">xmlns:i=<span class="xml-value">&quot;<span class="xml-value">http://www.w3.org/2001/XMLSchema-instance<span class="xml-value">&quot;>
    <LoginId>cm@example.com</LoginId>
    <FirstName>Chris</FirstName>
    <LastName>Miller</LastName>
    <Mi>T</Mi>
    <EmailAddress>cm@example.com</EmailAddress>
    <EmpId>cm@example.com</EmpId>
    <Active>Y</Active>
    <OrgUnit1>R<span class="ST0">&amp;D</OrgUnit1>
    <OrgUnit2 />
    <OrgUnit3 />
    <OrgUnit4 />
    <OrgUnit5 />
    <OrgUnit6 />
    <Custom1>Redmond</Custom1>
    <Custom2 />
    <Custom3 />
    <Custom4 />
    <Custom5 />
    <Custom6 />
    <Custom7 />
    <Custom8 />
    <Custom9 />
    <Custom10 />
    <Custom11 />
    <Custom12 />
    <Custom13 />
    <Custom14 />
    <Custom15 />
    <Custom16 />
    <Custom17 />
    <Custom18 />
    <Custom19 />
    <Custom20 />
    <Custom21 />
    <LedgerName>Default</LedgerName>
    <LocaleName>en_US</LocaleName>
    <CtryCode>US</CtryCode>
    <CrnCode>USD</CrnCode>
    <CtrySubCode>US-WA</CtrySubCode>
    <ExpenseUser>Y</ExpenseUser>
    <ExpenseApprover>N</ExpenseApprover>
    <TripUser>Y</TripUser>
    <InvoiceUser>N</InvoiceUser>
    <InvoiceApprover>N</InvoiceApprover>
    <ExpenseApproverEmployeeID>345678</ExpenseApproverEmployeeID>
    <IsTestEmp>N</IsTestEmp>
    <CashAdvanceAccountCode />
</UserProfile>
</pre>
<br />
