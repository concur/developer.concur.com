
        <div id="main" class="container">
            <div>
                            </div>
            <div class="row">
                <div class="span12">
<div class="breadcrumbs"><a href="/">Home</a>Expense Report Resource: POST Report Exceptions</div>
                </div>
            </div>

            <div id="content-wrapper">
<!-- <div class="row"> -->
                <div id="content" class="span9">
            # Expense Report Resource: POST Report Exceptions
                    <div class="section">
                    <div id="node-490" class="node clear-block">


    
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

## 
    <a id="postreportexception" name="postreportexception"></a>POST Report Exceptions Request
<table border="1" bordercolor="#DBDBDB" cellpadding="3" cellspacing="0" width="100% ">
    <tbody>
        <tr class="GrayTableHead">
            <td colspan="2">
                Description</td>
        </tr>
        <tr>
            <td colspan="2">
                Posts an exception to the report, and associates it with one of the following data levels: Report Header, Entry, Itemization, Allocation. This endpoint requires familiarity with the company's exception code configuration.</td>
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
                        **{<em>reportKey</em>}/Exceptions**<br />
                        The identifier for the desired report and the exceptions keyword.
                
                Example: <span class="codeexample">https://www.concursolutions.com/api/expense/expensereport/v1.1/report/<em>{reportKey</em>}/Exceptions
                **URI Source**: The reportKey value is returned in the <span class="codeexample">**RptKey** element by the <a href="https://developer.concur.com/node/487#reportdetails">Get Report Details</a> response.
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
                This request should contain an **Exceptions** parent element with an **Exception** parent element for each exception included in the report. The **Exception** element contains the following child elements:<br />
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
                                Index</td>
                            <td>
                                Y</td>
                            <td>
                                The exception's location in a batch of exceptions. Should start at 1 and increment sequentially. This value is used to identify the record if there is an error.</td>
                        </tr>
                        <tr>
                            <td>
                                ObjectType</td>
                            <td>
                                Y</td>
                            <td>
                                The type of object to assign the exception. Format: Report, Entry, or Allocation. When sending a Report level exception, the ObjectType and ObjectId can be null, as the report key is supplied in the URI.</td>
                        </tr>
                        <tr>
                            <td>
                                ObjectId</td>
                            <td>
                                Y</td>
                            <td>
                                The unique identifier for the object to associate with the exception. Returned by the <a href="https://developer.concur.com/node/487#reportdetails">Get Report Details</a> function. Must be the value from one of the following fields:<br />
                                <br />
                                Entry or Itemization: Use the **RpeKey**.<br />
                                Allocation: Use **AllocationKey**.<br />
                                Report Header: Null value. When sending a Report level exception, the ObjectType and ObjectId can be null, as the report key is supplied in the URI.</td>
                        </tr>
                        <tr>
                            <td>
                                ExceptionCode</td>
                            <td>
                                Y</td>
                            <td>
                                The Exception Code for the exception to assign to the object. Must be a configured exception code in Expense. Example: <span class="codeindent1">NODATE</td>
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
POST https://www.concursolutions.com/api/expense/expensereport/v1.1/report/3FK118eIJ844Uwl0HF32/Exceptions HTTP/1.1
Authorization: OAuth {access token}
...

Content-Type: application/xml
<Exceptions <span class="xml-attribute">xmlns=<span class="xml-value">&quot;<span class="xml-value">http://www.concursolutions.com/api/expense/expensereport/2011/03<span class="xml-value">&quot; <span class="xml-attribute">xmlns:i=<span class="xml-value">&quot;<span class="xml-value">http://www.w3.org/2001/XMLSchema-instance<span class="xml-value">&quot; >
    <Exception>
        <Index>1</Index>
        <ObjectType>Report</ObjectType>
        <ObjectId>nxxKgLlnRODp$sie8Hq1UviOJ2AbpS7dCP</ObjectId>
        <ExceptionCode>APPRVTO</ExceptionCode>
    </Exception>
    <Exception>
        <Index>2</Index>
        <ObjectType>Entry</ObjectType>
        <ObjectId>nxxKgLlnRODp$sie8Hq1UviOJ2deAbpS7dC0</ObjectId>
        <ExceptionCode>APPRVTO</ExceptionCode>
    </Exception>
</Exceptions> 
</pre>
## 
    POST Report Exceptions Response
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
                This request will return an **exception-result** parent element with the following child elements:
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
                                exceptions-succeeded</td>
                            <td valign="top">
                                The number of exceptions processed that were successfully assigned.</td>
                        </tr>
                        <tr>
                            <td valign="top">
                                exceptions-failed</td>
                            <td valign="top">
                                The number of exceptions processed that were not successfully added.</td>
                        </tr>
                        <tr>
                            <td valign="top">
                                errors</td>
                            <td valign="top">
                                This will contain an **error** parent element for each record failure. The **error** element will contain the following child elements:
                                <table border="1" bordercolor="#DBDBDB" cellpadding="3" cellspacing="0" width="100% ">
                                    <tbody>
                                        <tr>
                                            <td valign="top">
                                                Index</td>
                                            <td valign="top">
                                                The exception's location in the batch.</td>
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
                        <tr>
                            <td valign="top">
                                ExceptionDetails</td>
                            <td valign="top">
                                This parent element will contain an **ExceptionInfo** parent element for all exceptions that did not cause an error, and will contain the following child elements:
                                <table border="1" bordercolor="#DBDBDB" cellpadding="3" cellspacing="0" width="100% ">
                                    <tbody>
                                        <tr>
                                            <td valign="top">
                                                Index</td>
                                            <td valign="top">
                                                The exception's location in the batch.</td>
                                        </tr>
                                        <tr>
                                            <td valign="top">
                                                Status</td>
                                            <td valign="top">
                                                The status of the request.</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </td>
                        </tr>
                    </tbody>
                </table>
                **HTTP Codes:**<br />
                One of the following HTTP codes will be received after sending the response:
                <table border="1" bordercolor="#DBDBDB" cellpadding="3" cellspacing="0" width="100% ">
                    <tbody>
                        <tr class="GrayTableHead">
                            <td valign="top" width="20%">
                                HTTP Code</td>
                            <td valign="top" width="70%">
                                Result</td>
                        </tr>
                        <tr>
                            <td>
                                200 OK</td>
                            <td>
                                The request was successful.</td>
                        </tr>
                        <tr>
                            <td>
                                400 Bad Request</td>
                            <td>
                                The request had one of the following problems:<br />
                                
                                    * 
                                        Missing required element
                                    * 
                                        Invalid exception code
                                    * 
                                        Invalid object type
                                    * 
                                        Invalid object ID
                                
                            </td>
                        </tr>
                    </tbody>
                </table>
            </td>
        </tr>
    </tbody>
</table>
####
    XML Example of Response With Success and Failure
<pre class="overflow_box">
200 OK
Content-Type: application/xml
<exception-result <span class="xml-attribute">xmlns=<span class="xml-value">&quot;<span class="xml-value">http://www.concursolutions.com/api/expense/expensereport/2011/03<span class="xml-value">&quot; <span class="xml-attribute">xmlns:i=<span class="xml-value">&quot;<span class="xml-value">http://www.w3.org/2001/XMLSchema-instance<span class="xml-value">&quot;>
    <exceptions-succeeded>1</exceptions-succeeded>
    <exceptions-failed>1</exceptions-failed>
    <errors>
        <error>
            <Index>2</Index>
            <message>Invalid Exception Code</message>
        </error>
    </errors>
    <ExceptionDetails>
        <ExceptionInfo>
            <Index>1</Index>
            <Status>Success</Status>
        </ExceptionInfo>
    </ExceptionDetails>
</exception-result>
</pre>
<br />
