
        <div id="main" class="container">
            <div>
                            </div>
            <div class="row">
                <div class="span12">
<div class="breadcrumbs"><a href="/">Home</a>Expense Report Header Resource: POST</div>
                </div>
            </div>

            <div id="content-wrapper">
<!-- <div class="row"> -->
                <div id="content" class="span9">
            # Expense Report Header Resource: POST
                    <div class="section">
                    <div id="node-485" class="node clear-block">


    
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
.STRING_LITERAL {color: #ce7b00}    </style>

This resource supports the following POST actions:

    * 
        <a href="#newlistitem">Post Expense Report Header </a>
    * 
        <a href="#reportheaderbatch">Post Expense Report Header Batch</a>

## 
    <a id="newlistitem" name="newlistitem"></a>Post Expense Report Header Request
<table border="1" bordercolor="#DBDBDB" cellpadding="3" cellspacing="0" width="100% ">
    <tbody>
        <tr class="GrayTableHead">
            <td colspan="2">
                Description</td>
        </tr>
        <tr>
            <td colspan="2">
                Posts the expense report header information for a new or existing report for the user specified in the <a href="https://developer.concur.com/node/491">OAuth</a> access token. If the OAuth consumer has the necessary roles, they can update reports that belong to other users. Use this function to create a report, then use the <a href="https://developer.concur.com/node/481">Post Expense Entry</a> function to send expense line items.
                **NOTES**:
                
                    * 
                        Posting expense report information is a multi-stage process. Refer to the <a href="https://developer.concur.com/node/465#process">Processes</a> section of the Expense Report Web Service page for the steps required to post new expense reports and entries.
                    * 
                        Reports with the following statuses can't be modified:
                        
                            * 
                                Processing Payment
                            * 
                                Paid
                            * 
                                Payment Confirmed
                        
                    
                
            </td>
        </tr>
        <tr class="GrayTableHead">
            <td width="50%">
                Query Parameters - Required</td>
            <td width="50%">
                Supported Content Types</td>
        </tr>
        <tr>
            <td>
                None</td>
            <td>
                
                    * 
                        application/xml
                
            </td>
        </tr>
        <tr class="GrayTableHead">
            <td colspan="2">
                Query Parameters - Optional</td>
        </tr>
        <tr>
            <td colspan="2" valign="top">
                
                    * 
                        **{<em>reportId</em>}**<br />
                        The unique identifier for the report. Only used when updating an existing report.
                
                <span class="codeexample">Example:
                <span class="codeexample">https://www.concursolutions.com/api/expense/expensereport/v1.1/report/<em>{reportId}</em>
                **URI Source**: The reportId value is returned by the <a href="https://developer.concur.com/node/487">Get List of Reports</a>, and <a href="https://developer.concur.com/node/487#reportdetails">Get Report Details</a> functions, and as part of the **Report-Details-Url** element returned by this function.
            </td>
        </tr>
        <tr class="GrayTableHead">
            <td colspan="2">
                Request Headers - Required</td>
        </tr>
        <tr>
            <td colspan="2">
                Authorization header with OAuth token for valid Concur user.<br />
                <br />
                The Concur user must have one of the following roles in Expense:
                
                    * 
                        Expense User: This role allows the user to create and modify their own reports.
                    * 
                        Web Services Administrator (Professional/Premium): This role allows the user to modify reports for all users.
                    * 
                        Can Administer (Standard): This role allows the user to modify reports for all users.
                
            </td>
        </tr>
        <tr class="GrayTableHead">
            <td colspan="2">
                Request Headers - Optional</td>
        </tr>
        <tr>
            <td colspan="2">
                None</td>
        </tr>
        <tr class="GrayTableHead">
            <td colspan="2">
                Content Body</td>
        </tr>
        <tr>
            <td colspan="2">
                This request should contain a **Report** parent element with the following child elements:<br />
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
                                <span class="codeexample">Name</td>
                            <td valign="top">
                                Y</td>
                            <td valign="top">
                                The expense report name.</td>
                        </tr>
                        <tr>
                            <td valign="top">
                                Purpose</td>
                            <td valign="top">
                                Depends on configuration</td>
                            <td valign="top">
                                The business purpose of the report. Maximum length: 500.</td>
                        </tr>
                        <tr>
                            <td valign="top">
                                Comment</td>
                            <td valign="top">
                                Depends on configuration</td>
                            <td valign="top">
                                The report header comment. Maximum length: 500.</td>
                        </tr>
                        <tr>
                            <td valign="top">
                                OrgUnit1 through OrgUnit6</td>
                            <td valign="top">
                                Depends on configuration</td>
                            <td valign="top">
                                The custom Organization Unit fields. May be required depending on configuration. Refer to the <a href="https://developer.concur.com/node/465#process">Processes</a> > **Post Expense Report Data** section of Expense Report for the steps necessary to gather required field information.</td>
                        </tr>
                        <tr>
                            <td valign="top">
                                Custom1 through Custom20</td>
                            <td valign="top">
                                Depends on configuration</td>
                            <td valign="top">
                                The custom fields on the Expense Report Header form. May be required depending on configuration. Refer to the <a href="https://developer.concur.com/node/465#process">Processes</a> > **Post Expense Report Data** section of Expense Report for the steps necessary to gather required field information.
                                **NOTE**: If any of the custom fields are configured to contain list values, please refer to the <a href="https://developer.concur.com/node/554">Posting Custom List Items</a> page for information on how to correctly submit list item values.
                            </td>
                        </tr>
                        <tr>
                            <td valign="top">
                                UserDefinedDate</td>
                            <td valign="top">
                                Depends on configuration</td>
                            <td valign="top">
                                The date the user selected for the report. Format: YYYY-MM-DD hh:mm:ss.0</td>
                        </tr>
                    </tbody>
                </table>
            </td>
        </tr>
    </tbody>
</table>
####
    XML Example of New Report Request
<pre class="overflow_box">
POST https://www.concursolutions.com/api/expense/expensereport/v1.1/report HTTP/1.1
Authorization: OAuth {access token}
...

Content-Type: application/xml
<Report <span class="xml-attribute">xmlns=<span class="xml-value">&quot;<span class="xml-value">http://www.concursolutions.com/api/expense/expensereport/2011/03<span class="xml-value">&quot;>
    <Name>January Expenses</Name>
    <Purpose>All expenses for January</Purpose>
    <Comment>Includes Client Meetings.</Comment>
    <OrgUnit1>US</OrgUnit1>
    <OrgUnit2>NW</OrgUnit2>
    <OrgUnit3>Redmond</OrgUnit3>
    <Custom1>Client</Custom1>
    <Custom2>Local</Custom2>
    <UserDefinedDate>2011-03-26 15:15:07.0</UserDefinedDate>
</Report>
</pre>
## 
    Post Expense Report Header Response
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
                The response will include a **ReportDetails** parent element. This element will contain a **ReportStatus** child element. The ReportStatus element will contain the following child elements:
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
                                The status of the request.</td>
                        </tr>
                        <tr>
                            <td valign="top">
                                Report-Details-Url</td>
                            <td valign="top">
                                The URI to use when posting report details to this report.</td>
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
<ReportDetails>
    <ReportStatus <span class="xml-attribute">xmlns=<span class="xml-value">&quot;<span class="xml-value">http://www.concursolutions.com/api/expense/expensereport/2011/03<span class="xml-value">&quot; <span class="xml-attribute">xmlns:i=<span class="xml-value">&quot;<span class="xml-value">http://www.w3.org/2001/XMLSchema-instance<span class="xml-value">&quot;>
        <Status>SUCCESS</Status>
        <Report-Details-Url>https://www.concursolutions.com/api/expense/expensereport/v1.1/report/nxxKgLlnRODp$sie8Hq1UviOJ2AbpS7dCP</Report-Details-Url>
    </ReportStatus> 
</ReportDetails>
</pre>
## 
    <a id="reportheaderbatch" name="reportheaderbatch"></a>Post Report Header Batch Request
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
                Posts a batch of expense report headers. The expense report header contains classification information for the expense report. Use this endpoint to create a batch of reports, then use the <a href="https://developer.concur.com/node/481">Post Expense Entry</a> function to send expense line items. All batch operations allow up to 1000 headers per batch. If a batch request with over 1000 headers is sent, only the first 1000 headers in the batch will be processed.
                **NOTE**: Posting expense report information is a multi-stage process. Refer to the <a href="https://developer.concur.com/node/465#process"> Processes</a> section of the Expense Report Web Service page for the steps required to post new expense reports and entries.
            </td>
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
                
                    * 
                        **batch**<br />
                        The batch keyword.
                
                Example: <span class="codeexample">https://www.concursolutions.com/api/expense/expensereport/v1.1/report/batch
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
                The Concur user must have one of the following roles in Expense:
                
                    * 
                        Expense User: This role allows the user to create and modify their own reports.
                    * 
                        Web Services Administrator (Professional/Premium): This role allows the user to create and modify reports for all users.
                    * 
                        Can Administer (Standard): This role allows the user to create and modify reports for all users.
                
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
                This request should contain a **batch** parent element with a **Report** parent element for each included report. The **Report** element contains the following child elements:<br />
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
                                <span class="codeexample">Index</td>
                            <td valign="top">
                                Y</td>
                            <td valign="top">
                                The header's location in the batch. Should start at 1 and increment sequentially. This value is used to identify the record if there is an error.</td>
                        </tr>
                        <tr>
                            <td valign="top">
                                <span class="codeexample">LoginId</td>
                            <td valign="top">
                                Y</td>
                            <td valign="top">
                                The report owner's Concur login ID.</td>
                        </tr>
                        <tr>
                            <td valign="top">
                                <span class="codeexample">Name</td>
                            <td valign="top">
                                Y</td>
                            <td valign="top">
                                The expense report name.</td>
                        </tr>
                        <tr>
                            <td valign="top">
                                <span class="codeexample">Purpose</td>
                            <td valign="top">
                                Depends on configuration</td>
                            <td valign="top">
                                The business purpose of the report. Maximum length: 500.</td>
                        </tr>
                        <tr>
                            <td valign="top">
                                <span class="codeexample">Comment</td>
                            <td valign="top">
                                Depends on configuration</td>
                            <td valign="top">
                                The report header comment. Maximum length: 500.</td>
                        </tr>
                        <tr>
                            <td valign="top">
                                <span class="codeexample">OrgUnit1 through OrgUnit6</td>
                            <td valign="top">
                                Depends on configuration</td>
                            <td valign="top">
                                The custom Organization Unit fields. May be required depending on configuration. Refer to the <a href="https://developer.concur.com/node/465#process">Processes</a> > **Post Expense Report Data** section of Expense Report for the steps necessary to gather required field information.</td>
                        </tr>
                        <tr>
                            <td valign="top">
                                <span class="codeexample">Custom1 through Custom20</td>
                            <td valign="top">
                                Depends on configuration</td>
                            <td valign="top">
                                The custom fields on the Expense Report Header form. May be required depending on configuration. Refer to the <a href="https://developer.concur.com/node/465#process">Processes</a> > **Post Expense Report Data** section of Expense Report for the steps necessary to gather required field information.
                                **NOTE**: If any of the custom fields are configured to contain list values, please refer to the <a href="https://developer.concur.com/node/554">Posting Custom List Items</a> page for information on how to correctly submit list item values.
                            </td>
                        </tr>
                        <tr>
                            <td valign="top">
                                UserDefinedDate</td>
                            <td valign="top">
                                Depends on configuration</td>
                            <td valign="top">
                                The date the user selected for the report. Format: YYYY-MM-DD hh:mm:ss.0</td>
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
POST https://www.concursolutions.com/api/expense/expensereport/v1.1/report/batch HTTP/1.1
Authorization: OAuth {access token}
...

Content-Type: application/xml
<batch <span class="xml-attribute">xmlns=<span class="xml-value">&quot;<span class="xml-value">http://www.concursolutions.com/api/expense/expensereport/2011/03<span class="xml-value">&quot;>
    <Report>
        <Index>1</Index>
        <LoginId>cmiller@example.com</LoginId>
        <Name>January Expenses</Name>
        <Purpose>All expenses for January</Purpose>
        <Comment>Includes Client Meetings.</Comment>
        <OrgUnit1>US</OrgUnit1>
        <OrgUnit2>NW</OrgUnit2>
        <OrgUnit3>Redmond</OrgUnit3>
        <Custom1>Client</Custom1>
        <Custom2>Local</Custom2>
        <UserDefinedDate>2011-01-26 12:15:00.0</UserDefinedDate>
    </Report> 
    <Report>
        <Index>2</Index>
        <LoginId>tbrown@example.com</LoginId>
        <Name>Trip to New York </Name>
        <Purpose>New York Sales Meeting </Purpose>
        <Comment></Comment>
        <OrgUnit1>US</OrgUnit1>
        <OrgUnit2></OrgUnit2>
        <OrgUnit3>Tucson</OrgUnit3>
        <Custom1>Client</Custom1>
        <Custom2>Remote</Custom2>
        <UserDefinedDate>2011-02-04 15:25:07.0</UserDefinedDate>
    </Report>
</batch>
</pre>
## 
    Post Expense Report Header Batch Response
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
                This request will return a **report-batch-result** parent element with the following child elements:<br />
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
                                records-succeeded</td>
                            <td valign="top">
                                The number of records processed that were successfully added.</td>
                        </tr>
                        <tr>
                            <td valign="top">
                                records-failed</td>
                            <td valign="top">
                                The number of records processed that were not successfully added.</td>
                        </tr>
                        <tr>
                            <td valign="top">
                                errors</td>
                            <td valign="top">
                                This will contain an **error** parent element for each record failure. The **error** element will contain the following child elements:<br />
                                <br />
                                <table border="1" bordercolor="#CCCCCC" cellpadding="3" cellspacing="0" width="100%">
                                    <tbody>
                                        <tr>
                                            <td>
                                                Index</td>
                                            <td>
                                                The header's location in the batch.</td>
                                        </tr>
                                        <tr>
                                            <td>
                                                LoginID</td>
                                            <td>
                                                The user's Concur login ID.</td>
                                        </tr>
                                        <tr>
                                            <td>
                                                message</td>
                                            <td>
                                                The error message.</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                ReportDetails</td>
                            <td>
                                This parent element will contain a **ReportStatus** child element for all report headers that did not cause an error. The **ReportStatus** element will contain the following child elements:
                                <table border="1" bordercolor="#CCCCCC" cellpadding="3" cellspacing="0" width="100%">
                                    <tbody>
                                        <tr>
                                            <td>
                                                Index</td>
                                            <td>
                                                The header's location in the batch.</td>
                                        </tr>
                                        <tr>
                                            <td>
                                                Status</td>
                                            <td>
                                                The status of the request.</td>
                                        </tr>
                                        <tr>
                                            <td>
                                                Report-Details-Url</td>
                                            <td>
                                                The URI to use when posting report details to this report.</td>
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
200 OK
Content-Type: application/xml
<report-batch-result <span class="xml-attribute">xmlns=<span class="xml-value">&quot;<span class="xml-value">http://www.concursolutions.com/api/expense/expensereport/2011/03<span class="xml-value">&quot; <span class="xml-attribute">xmlns:i=<span class="xml-value">&quot;<span class="xml-value">http://www.w3.org/2001/XMLSchema-instance<span class="xml-value">&quot;>
    <records-succeeded>1</records-succeeded>
    <records-failed>1</records-failed>
    <errors>
        <error>
            <Index>2</Index>
            <LoginID>tbrown@example.com</LoginID>
            <message>Invalid Value for:OrgUnit2</message>
        </error> 
    </errors> 
    <ReportDetails>
        <ReportStatus > 
            <Index>1</Index>  
            <Status>SUCCESS</Status>  
            <Report-Details-Url>https://www.concursolutions.com/api/expense/expensereport/v1.1/nxxKgLlnRODp$sie8Hq1UviOJ2AbpS7dCP</Report-Details-Url>
        </ReportStatus>
    </ReportDetails>
</report-batch-result>
</pre>
<br />
