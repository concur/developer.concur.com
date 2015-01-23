
        <div id="main" class="container">
            <div>
                            </div>
            <div class="row">
                <div class="span12">
<div class="breadcrumbs"><a href="/">Home</a>Integration Status Resource: POST</div>
                </div>
            </div>

            <div id="content-wrapper">
<!-- <div class="row"> -->
                <div id="content" class="span9">
            # Integration Status Resource: POST
                    <div class="section">
                    <div id="node-564" class="node clear-block">


    
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
        <a href="#newlistitem">Post Integration Status </a>

## 
    <a id="postintegrationstatus" name="postintegrationstatus"></a>Post Integration Status Request
<table border="1" bordercolor="#DBDBDB" cellpadding="3" cellspacing="0" width="100% ">
<tbody>
<tr class="GrayTableHead">
<td colspan="2">
                Description</td>
</tr>
<tr>
<td colspan="2">
                **U****pdating Expense Reports **
This resource allows developers to ensure that the necessary transactions to account for expenses and arrange payment for the expenses in a specified report were created in the financial system prior to committing the expense report in Concur Expense. If they were, the developer uses this function to indicate the report was successfully integrated and move the report forward in the workflow to the Paid step. In Concur Expense, when a report arrives at the Paid workflow step the report is committed, meaning its data can&rsquo;t be changed and it can&rsquo;t be sent back in the workflow.
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
                        **report/{<em>ReportID</em>}**<br />
                        The report keyword and the ReportID for the report that has been successfully integrated into the financial system. The ReportID is returned in the **ReportID** element by the <a href="https://developer.concur.com/node/487#listofreports">Get List of Reports</a> and the <a href="https://developer.concur.com/node/487#reportdetails">Get Report Details</a> responses.


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
                Authorization header with OAuth token for valid Concur user. The OAuth consumer must have the following user role: Web Services Administrator</td>
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
                        application/json
* 
                        application/xml

</td>
</tr>
</tbody>
</table>
####
    XML Example Request
<pre class="overflow_box">
POST https://www.concursolutions.com/api/expense/expensereport/v2.0/integrationstatus/report/nx2WRNzp18$wjehk%wqEL6EDHRwi9r$paQS1UqyL6a454QitqQ HTTP/1.1 
Authorization: OAuth {access token}
Accept: application/xml
...
</pre>## 
    Post Report Integration Status Response
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
                        application/json
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
The response will include:
An **ActionStatus** parent element (XML), or an object (JSON) with the following child elements(XML) or name/value pairs(JSON):
<table border="1" bordercolor="#DBDBDB" cellpadding="3" cellspacing="0" width="100% ">
<tbody>
<tr>
<td>
                                Status</td>
<td>
                                Whether the request was successful. Possible values: SUCCESS, FAILURE.</td>
</tr>
<tr>
<td>
                                Message</td>
<td>
                                Provides further details for errors.</td>
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
HTTP/1.1 200 OK
Content-Type: application/xml

<ActionStatus <span class="xml-attribute">xmlns=<span class="xml-value">&quot;<span class="xml-value">http://www.concursolutions.com/api/expense/expensereport/2011/03<span class="xml-value">&quot; <span class="xml-attribute">xmlns:i=<span class="xml-value">&quot;<span class="xml-value">http://www.w3.org/2001/XMLSchema-instance<span class="xml-value">&quot;>
    <Message>SUCCESS</Message>
    <Status>SUCCESS</Status>
</ActionStatus>
</pre>####
    JSON Example of Successful Response
<pre class="overflow_box">
HTTP/1.1 200 OK
Content-Type: application/json

{<span class="STRING_LITERAL">&quot;<span class="STRING_LITERAL">Status<span class="STRING_LITERAL">&quot;:<span class="STRING_LITERAL">&quot;<span class="STRING_LITERAL">SUCCESS<span class="STRING_LITERAL">&quot;,<span class="STRING_LITERAL">&quot;<span class="STRING_LITERAL">Message<span class="STRING_LITERAL">&quot;:<span class="STRING_LITERAL">&quot;<span class="STRING_LITERAL">SUCCESS<span class="STRING_LITERAL">&quot;}
</pre>####
    JSON Example of Response With Error
<pre class="overflow_box">
HTTP/1.1 200 OK
Content-Type: application/json

{<span class="STRING_LITERAL">&quot;<span class="STRING_LITERAL">Status<span class="STRING_LITERAL">&quot;:<span class="STRING_LITERAL">&quot;<span class="STRING_LITERAL">FAILURE<span class="STRING_LITERAL">&quot;,<span class="STRING_LITERAL">&quot;<span class="STRING_LITERAL">Message<span class="STRING_LITERAL">&quot;:<span class="STRING_LITERAL">&quot;To use the POST Expense Journal Entry Job Key the
    report must be at the Processing Payment or Payment Confirmed Payment Status.<span class="STRING_LITERAL">&quot;}
</pre>
