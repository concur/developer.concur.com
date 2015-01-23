
        <div id="main" class="container">
            <div>
                            </div>
            <div class="row">
                <div class="span12">
<div class="breadcrumbs"><a href="/">Home</a>User Resource: POST</div>
                </div>
            </div>

            <div id="content-wrapper">
<!-- <div class="row"> -->
                <div id="content" class="span9">
            # User Resource: POST
                    <div class="section">
                    <div id="node-404" class="node clear-block">


    
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
        <a href="#newlistitem">Post New or Updated Users </a>

## 
    <a id="newlistitem" name="newlistitem"></a>Post New or Updated Users Request
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
                Adds or updates one or more users. The batch can contain up to 500 users.<br />
                <br />
                To learn the required fields, use the <a href="https://developer.concur.com/node/407">Employee Form Field</a> resource.<br />
                <br />
                To update user passwords, use the <a href="https://developer.concur.com/node/403">User Password</a> resource.</td>
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
                Authorization header with OAuth token for valid Concur user at the company.</td>
            <td valign="top" width="50%">
                None</td>
        </tr>
        <tr class="GrayTableHead">
            <td colspan="2">
                Content Body</td>
        </tr>
        <tr>
            <td colspan="2">
                This function requires as its arguments a **batch** element containing a **UserProfile** child element for each user to be added or updated. The **UserProfile** child elements will vary depending on the form configuration, and may contain the following elements:<br />
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
                                EmpId</td>
                            <td valign="top">
                                Y</td>
                            <td valign="top">
                                The unique identifier for the user. The default value is the user's email address. Maximum 48 characters.</td>
                        </tr>
                        <tr>
                            <td valign="top">
                                FeedRecordNumber</td>
                            <td valign="top">
                                Y</td>
                            <td valign="top">
                                The record number in the current batch.</td>
                        </tr>
                        <tr>
                            <td valign="top">
                                LoginId</td>
                            <td valign="top">
                                Y</td>
                            <td valign="top">
                                The user's logon ID. The default value is the user's email address. Maximum 128 characters.</td>
                        </tr>
                        <tr>
                            <td valign="top">
                                LocaleName</td>
                            <td valign="top">
                                N</td>
                            <td valign="top">
                                The user's language locale code. Maximum 5 characters. One of the <a href="https://developer.concur.com/node/640">Supported Locales</a>. Example: United States English is en_US. The supported languages vary by company but always include en_US.</td>
                        </tr>
                        <tr>
                            <td valign="top">
                                Active</td>
                            <td valign="top">
                                N</td>
                            <td valign="top">
                                Whether the user is currently active. Format: Y/N.</td>
                        </tr>
                        <tr>
                            <td valign="top">
                                Password</td>
                            <td valign="top">
                                Y</td>
                            <td valign="top">
                                The user's password. This element can be used to enter the password for a new user, but cannot be used to update the password for an existing user.<br />
                                Maximum 255 characters.<br />
                                **NOTE**: This information is encrypted in the Concur database.</td>
                        </tr>
                        <tr>
                            <td valign="top">
                                FirstName</td>
                            <td valign="top">
                                Depends on configuration</td>
                            <td valign="top">
                                The user's first name. Maximum 32 characters.</td>
                        </tr>
                        <tr>
                            <td valign="top">
                                LastName</td>
                            <td valign="top">
                                Depends on configuration</td>
                            <td valign="top">
                                The user's last name. Maximum 32 characters.</td>
                        </tr>
                        <tr>
                            <td valign="top">
                                Mi</td>
                            <td valign="top">
                                N</td>
                            <td valign="top">
                                The user's middle initial. Maximum 1 character.</td>
                        </tr>
                        <tr>
                            <td valign="top">
                                EmailAddress</td>
                            <td valign="top">
                                Depends on configuration</td>
                            <td valign="top">
                                The user's email address. Maximum 255 characters.</td>
                        </tr>
                        <tr>
                            <td valign="top">
                                LedgerKey</td>
                            <td valign="top">
                                N</td>
                            <td valign="top">
                                The user's assigned account code ledger. Maximum 20 characters. Example: Default.</td>
                        </tr>
                        <tr>
                            <td valign="top">
                                OrgUnit1 through OrgUnit6</td>
                            <td valign="top">
                                Depends on configuration</td>
                            <td valign="top">
                                The custom organizational unit fields on the Employee form. Varies depending on configuration. Use the <a href="https://developer.concur.com/node/407">Employee Form Field</a> resource to get the list of configured fields.<br />
                                Maximum 48 characters for each field.</td>
                        </tr>
                        <tr>
                            <td valign="top">
                                Custom1 through Custom21</td>
                            <td valign="top">
                                Depends on configuration</td>
                            <td valign="top">
                                The custom fields on the Employee form. Varies depending on configuration. Use the <a href="https://developer.concur.com/node/407">Employee Form Field</a> resource to get the list of configured fields.<br />
                                    Maximum 48 characters.
                                **<font color="#ff0000">NOTE</font>**<font color="#ff0000">: If any of the custom fields are configured to contain list values, please refer to the <a href="https://developer.concur.com/node/554">Posting Custom List Items</a> page for information on how to correctly submit list item values.</font>
                            </td>
                        </tr>
                        <tr>
                            <td valign="top">
                                CtryCode</td>
                            <td valign="top">
                                Depends on configuration</td>
                            <td valign="top">
                                The<a href="http://en.wikipedia.org/wiki/ISO_3166-1_alpha-2"> ISO 3166-1 alpha-2</a> country code. Maximum 2 characters. Example: United States is US.</td>
                        </tr>
                        <tr>
                            <td valign="top">
                                CashAdvanceAccountCode</td>
                            <td valign="top">
                                Depends on configuration</td>
                            <td valign="top">
                                The user's account code for cash advances. Maximum 20 characters.</td>
                        </tr>
                        <tr>
                            <td valign="top">
                                CrnKey</td>
                            <td valign="top">
                                Depends on configuration</td>
                            <td valign="top">
                                The <a href="http://en.wikipedia.org/wiki/ISO_4217">3-letter ISO 4217 currency code</a> for the user's reimbursement currency. Maximum 3 characters. Example: United States Dollar is USD.</td>
                        </tr>
                        <tr>
                            <td valign="top">
                                CtrySubCode</td>
                            <td valign="top">
                                Depends on configuration</td>
                            <td valign="top">
                                The user's two-character country code and two-character state or province code. Maximum 2 characters. Example: Washington State, United States is US-WA.</td>
                        </tr>
                        <tr>
                            <td valign="top">
                                ExpenseUser</td>
                            <td valign="top">
                                N</td>
                            <td valign="top">
                                Whether the user has access to Expense. Format: Y/N.</td>
                        </tr>
                        <tr>
                            <td valign="top">
                                ExpenseApprover</td>
                            <td valign="top">
                                N</td>
                            <td valign="top">
                                Whether the user is an Expense approver. Format: Y/N.</td>
                        </tr>
                        <tr>
                            <td valign="top">
                                TripUser</td>
                            <td valign="top">
                                N</td>
                            <td valign="top">
                                Whether the user has access to Travel. Format: Y/N.</td>
                        </tr>
                        <tr>
                            <td valign="top">
                                InvoiceUser</td>
                            <td valign="top">
                                N</td>
                            <td valign="top">
                                Whether the user has access to Invoice. Format: Y/N.</td>
                        </tr>
                        <tr>
                            <td valign="top">
                                InvoiceApprover</td>
                            <td valign="top">
                                N</td>
                            <td valign="top">
                                Whether the user is an Invoice approver. Format: Y/N.</td>
                        </tr>
                        <tr>
                            <td valign="top">
                                ExpenseApproverEmployeeID</td>
                            <td valign="top">
                                N</td>
                            <td valign="top">
                                The employee ID of the user's Expense approver. Maximum 48 characters.If you are importing both a user and their approver, the approver should be listed before the user in the batch.</td>
                        </tr>
                        <tr>
                            <td valign="top">
                                NewLoginID</td>
                            <td valign="top">
                                N</td>
                            <td valign="top">
                                Use this element to change the Login ID for an existing employee. Maximum 128 characters.</td>
                        </tr>
                        <tr>
                            <td valign="top">
                                NewEmployeeID</td>
                            <td valign="top">
                                N</td>
                            <td valign="top">
                                Use this element to change the Employee ID for an existing employee. Maximum 48 characters.</td>
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
POST /api/user/v1.0/Users HTTPS 1.1 
Host: www.concursolutions.com
Authorization: OAuth {access token}
Content-Type: application/xml
...


<batch <span class="xml-attribute">xmlns=<span class="xml-value">&quot;<span class="xml-value">http://www.concursolutions.com/api/user/2011/02<span class="xml-value">&quot;>
    <UserProfile>
        <EmpId>345678</EmpId> 
        <FeedRecordNumber>1</FeedRecordNumber>
        <LoginId>tb@example.com</LoginId>
        <LocaleName>en_US</LocaleName> 
        <Active>Y</Active> 
        <Password>password</Password> 
        <FirstName>Terry</FirstName>
        <LastName>Brown</LastName> 
        <Mi>L</Mi> 
        <EmailAddress>tb@example.com</EmailAddress>
        <LedgerKey>DEFAULT</LedgerKey>
        <OrgUnit1>R<span class="ST0">&amp;amp;D</OrgUnit1> 
        <OrgUnit2></OrgUnit2> 
        <OrgUnit3></OrgUnit3>
        <Custom1>Redmond</Custom1> 
        <CtryCode>US</CtryCode>
        <CrnKey>USD</CrnKey>
        <CtrySubCode>US-WA</CtrySubCode> 
        <ExpenseUser>Y</ExpenseUser> 
        <ExpenseApprover>Y</ExpenseApprover> 
        <TripUser>Y</TripUser> 
        <InvoiceUser>N</InvoiceUser> 
        <InvoiceApprover>N</InvoiceApprover>
        <ExpenseApproverEmployeeID>12345</ExpenseApproverEmployeeID> 
    </UserProfile> 
    <UserProfile> 
        <EmpId>456789</EmpId> 
        <FeedRecordNumber>2</FeedRecordNumber>
        <LoginId>cm@example.com</LoginId>
        <LocaleName>en_US</LocaleName> 
        <Active>Y</Active> 
        <Password>password</Password> 
        <FirstName>Chris</FirstName>
        <LastName>Miller</LastName> 
        <Mi>T</Mi> 
        <EmailAddress>cm@example.com</EmailAddress>
        <LedgerKey>Default</LedgerKey>
        <OrgUnit1>R<span class="ST0">&amp;amp;D</OrgUnit1> 
        <OrgUnit2></OrgUnit2> 
        <OrgUnit3></OrgUnit3>
        <Custom1>Redmond</Custom1> 
        <CtryCode>US</CtryCode>
        <CrnKey>USD</CrnKey>
        <CtrySubCode>US-WA</CtrySubCode> 
        <ExpenseUser>Y</ExpenseUser> 
        <ExpenseApprover>N</ExpenseApprover> 
        <TripUser>Y</TripUser> 
        <InvoiceUser>N</InvoiceUser> 
        <InvoiceApprover>N</InvoiceApprover>
        <ExpenseApproverEmployeeID>345678</ExpenseApproverEmployeeID>
    </UserProfile> 
</batch>
</pre>
## 
    Post New or Updated Users Response
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
                This request will return a **user-batch-result** parent element with the following child elements:<br />
                <table border="1" bordercolor="#dbdbdb" cellpadding="3" cellspacing="0" width="100%">
                    <tbody>
                        <tr class="GrayTableHead">
                            <td valign="top" width="30%">
                                Element</td>
                            <td valign="top" width="70%">
                                Description</td>
                        </tr>
                        <tr>
                            <td valign="top">
                                records-succeeded</td>
                            <td valign="top">
                                The number of records processed that were successfully added or updated.</td>
                        </tr>
                        <tr>
                            <td valign="top">
                                records-failed</td>
                            <td valign="top">
                                The number of records processed that were not successfully added or updated.</td>
                        </tr>
                    </tbody>
                </table>
                <br />
                **When any users are successfully added or updated**:<br />
                <br />
                The request will return the **UserDetails** parent element with a **UserInfo** element for each successfully added or updated user. The **UserInfo** elements will contain the following child elements:<br />
                <br />
                <table border="1" bordercolor="#dbdbdb" cellpadding="3" cellspacing="0" width="100%">
                    <tbody>
                        <tr class="GrayTableHead">
                            <td valign="top" width="30%">
                                Element</td>
                            <td valign="top" width="70%">
                                Description</td>
                        </tr>
                        <tr>
                            <td valign="top">
                                EmployeeID</td>
                            <td valign="top">
                                The employee ID of the user.</td>
                        </tr>
                        <tr>
                            <td valign="top">
                                FeedRecordNumber</td>
                            <td valign="top">
                                The item number of the record in the feed.</td>
                        </tr>
                        <tr>
                            <td valign="top">
                                Status</td>
                            <td valign="top">
                                The status of the attempt to add or update the user. Should always contain the word SUCCESS.</td>
                        </tr>
                    </tbody>
                </table>
                <br />
                **When any users fail**:<br />
                <br />
                The request will return the **errors** parent element with an **error** parent element for each record failure. The **error** element will contain the following child elements:
                <table border="1" bordercolor="#dbdbdb" cellpadding="3" cellspacing="0" width="100%">
                    <tbody>
                        <tr class="GrayTableHead">
                            <td valign="top" width="30%">
                                Element</td>
                            <td valign="top" width="70%">
                                Description</td>
                        </tr>
                        <tr>
                            <td valign="top">
                                EmployeeID</td>
                            <td valign="top">
                                The ID of the user that failed.</td>
                        </tr>
                        <tr>
                            <td valign="top">
                                FeedRecordNumber</td>
                            <td valign="top">
                                The item number of the record in the feed.</td>
                        </tr>
                        <tr>
                            <td valign="top">
                                message</td>
                            <td valign="top">
                                The error message.</td>
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
<user-batch-result <span class="xml-attribute">xmlns=<span class="xml-value">&quot;<span class="xml-value">http://www.concursolutions.com/api/user/2011/02<span class="xml-value">&quot; <span class="xml-attribute">xmlns:i=<span class="xml-value">&quot;<span class="xml-value">http://www.w3.org/2001/XMLSchema-instance<span class="xml-value">&quot;> 
    <records-succeeded>1</records-succeeded> 
    <records-failed>1</records-failed> 
    <errors> 
        <error> 
            <EmployeeID>456789</EmployeeID> 
            <FeedRecordNumber>2</FeedRecordNumber> 
            <message>MISSING_REQUIRED_FIELDS:Active</message> 
        </error> 
    </errors> 
    <UserDetails> 
        <UserInfo> 
            <EmployeeID>345678</EmployeeID> 
            <FeedRecordNumber>1</FeedRecordNumber> 
            <Status>SUCCESS</Status> 
        </UserInfo> 
    </UserDetails> 
</user-batch-result> 
</pre>
<br />
