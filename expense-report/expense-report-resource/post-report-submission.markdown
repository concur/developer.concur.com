
        <div id="main" class="container">
            <div>
                            </div>
            <div class="row">
                <div class="span12">
<div class="breadcrumbs"><a href="/">Home</a>Expense Report Resource: POST Report Submission</div>
                </div>
            </div>

            <div id="content-wrapper">
<!-- <div class="row"> -->
                <div id="content" class="span9">
            # Expense Report Resource: POST Report Submission
                    <div class="section">
                    <div id="node-706" class="node clear-block">


    
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
    <a id="postreportsubmit" name="postreportsubmit"></a>POST Report Submission Request
<table border="1" bordercolor="#DBDBDB" cellpadding="3" cellspacing="0" width="100% ">
<tbody>
<tr class="GrayTableHead">
<td colspan="2">
                Description</td>
</tr>
<tr>
<td colspan="2">
                Triggers the Submit workflow action for the specified report.<br />
                **Important note**: This endpoint submits the expense report as if the original report owner had submitted it. Consult your company's Expense administrator to confirm that the web service should be allowed to submit reports on behalf of users. If you wish to enforce the expense report delegate functionality, use the <a href="https://developer.concur.com/node/475">Get Expense Delegators</a> function to determine if the user in question has the correct permissions to submit on behalf of the report owner.</td>
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
                        **{<em>reportId</em>}/submit**<br />
                        The identifier for the desired report and the submit keyword.

                Example: https://www.concursolutions.com/api/expense/expensereport/v1.1/report/<em>{reportId}</em>/submit<br />
                **URI Source**: The reportId value is returned by the <a href="https://developer.concur.com/node/487">Get List of Reports</a>, and <a href="https://developer.concur.com/node/487#reportdetails">Get Report Details</a> functions, and as part of the **Report-Details-Url** element of the <a href="https://developer.concur.com/node/485">Post Expense Report Header</a> function.</td>
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
**Authorization**: This request requires an Authorization header with an OAuth token for a valid Concur user.
**X-UserID**: This request requires an additional field in the authorization header, identifying the report owner. This identifier is the Concur login for the user, and is often also the email address of the user. The field format is:<br />
                    <span class="codeexample">X-UserID: expenseuser@example.com
</td>
<td valign="top" width="50%">
                None</td>
</tr>
</tbody>
</table>
####
    XML Example Request
<pre class="overflow_box">
POST https://www.concursolutions.com/api/expense/expensereport/v1.1/report/nxxKgLlnROz$sQ6SKJFjLNs4OWBErcJ8yX/submit HTTP/1.1
Authorization: OAuth {access token}
X-UserID: <a href="mailto:cmiller@example.com">cmiller@example.com</a>
... 
</pre>## 
    POST Report Submission Response
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
                This request will return a **ReportStatus** parent element with the following child elements:
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
                                The error message. Only appears if a submission error was generated.</td>
</tr>
<tr>
<td valign="top">
                                <span class="codeexample">Status</td>
<td valign="top">
                                The status of the report submit action.</td>
</tr>
</tbody>
</table>
                If the report submission triggered an exception, a **ReportExceptions** parent element will be provided, with a **ReportException **parent element for each exception. The **ReportException** element contains the following elements:
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
                                CrnCode</td>
<td valign="top">
                                The currency code of the entry.</td>
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
                                ExceptionErrorCode</td>
<td valign="top">
                                The severity of the exception. Exceptions with ERROR as the code cannot be submitted.</td>
</tr>
<tr>
<td valign="top">
                                ExceptionVisibility</td>
<td valign="top">
                                Which users are able to see the exception.</td>
</tr>
<tr>
<td valign="top">
                                ExpKey</td>
<td valign="top">
                                The expense type key for the entry.</td>
</tr>
<tr>
<td valign="top">
                                ExpName</td>
<td valign="top">
                                The expense type name for the entry.</td>
</tr>
<tr>
<td valign="top">
                                IsCleared</td>
<td valign="top">
                                Whether the exception has been cleared by the Expense Processor.</td>
</tr>
<tr>
<td valign="top">
                                SeverityLevel</td>
<td valign="top">
                                A numeric value indicating the severity level of the exception. The value threshold is configurable.</td>
</tr>
<tr>
<td valign="top">
                                TransactionAmount</td>
<td valign="top">
                                The amount of the entry.</td>
</tr>
<tr>
<td valign="top">
                                TransactionDate</td>
<td valign="top">
                                The date of the entry.</td>
</tr>
<tr>
<td valign="top">
                                Type</td>
<td valign="top">
                                The exception type.</td>
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
<ReportStatus <span class="xml-attribute">xmlns=<span class="xml-value">&quot;<span class="xml-value">http://www.concursolutions.com/api/expense/expensereport/2011/03<span class="xml-value">&quot; <span class="xml-attribute">xmlns:i=<span class="xml-value">&quot;<span class="xml-value">http://www.w3.org/2001/XMLSchema-instance<span class="xml-value">&quot;>
    <Status>SUCCESS</Status>
</ReportStatus>
</pre>####
    <br />
