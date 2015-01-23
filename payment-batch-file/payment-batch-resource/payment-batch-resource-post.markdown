
        <div id="main" class="container">
            <div>
                            </div>
            <div class="row">
                <div class="span12">
<div class="breadcrumbs"><a href="/">Home</a>Payment Batch Resource: POST</div>
                </div>
            </div>

            <div id="content-wrapper">
<!-- <div class="row"> -->
                <div id="content" class="span9">
            # Payment Batch Resource: POST
                    <div class="section">
                    <div id="node-428" class="node clear-block">


    
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
        <a href="#batchclose">Post Payment Batch Close </a>

## 
    <a id="batchclose" name="batchclose"></a>Post Payment Batch Close Request
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
                This request closes the specified batch, preventing any new expenses from entering it. After the batch closes, Concur creates the batch file containing the expense transaction information. If a batch ID for an already closed batch is sent, Concur regenerates the batch file for the specified batch.</td>
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
                        **batch/{<em>BatchID</em>}/close**<br />
                        The unique identifier for the batch, and the batch and close keywords.
                
                Example: https://www.concursolutions.com/api/expense/paymentbatch/v1.2/batch/{<em>BatchID</em>}/close
                **URI Source**: The URI is returned in the Batch-URL element of the <a href="https://developer.concur.com/node/427">Get List of Payment Batches</a> function. Do **not** use the BatchID value from the <a href="https://developer.concur.com/node/427">Get List of Payment Batches</a> function in the URI, as it contains the unencrypted batch ID.
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
                Authorization header with OAuth token for valid Concur user.<br />
                <br />
                The OAuth consumer must have one of the following user roles in Concur: Company Administrator or Web Services Administrator for Professional, or Can Administer for Standard.<br />
                <br />
                These roles allow the user to manage data for the entire company.</td>
            <td valign="top" width="50%">
                None</td>
        </tr>
    </tbody>
</table>
####
    XML Example Request
<pre class="overflow_box">
POST /api/expense/paymentbatch/v1.2/batch/12345678901234567890/close HTTPS 1.1
Host: www.concursolutions.com
Authorization: OAuth {access token}
...</pre>
## 
    Post Payment Batch Close Response
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
                The response contains a **BatchStatus** parent element with the following child elements:<br />
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
                                BatchStatus</td>
                            <td valign="top">
                                The current status of the specified batch.</td>
                        </tr>
                        <tr>
                            <td valign="top">
                                File-Url</td>
                            <td valign="top">
                                A URL for retrieving the extract file or files produced when the batch closes, with encrypted ID.</td>
                        </tr>
                        <tr>
                            <td valign="top">
                                Status</td>
                            <td valign="top">
                                The status of the request to close the batch.</td>
                        </tr>
                        <tr>
                            <td valign="top">
                                JobQueueKey</td>
                            <td valign="top">
                                The unique identifier for the batch job.</td>
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

<BatchStatus <span class="xml-attribute">xmlns=<span class="xml-value">&quot;<span class="xml-value">http://www.concursolutions.com/api/expense/paymentbatch/2011/11<span class="xml-value">&quot; <span class="xml-attribute">xmlns:i=<span class="xml-value">&quot;<span class="xml-value">http://www.w3.org/2001/XMLSchema-instance<span class="xml-value">&quot;>
    <BatchStatus>CLOSED</BatchStatus>
    <File-Url>http:// www.concursolutions.com/api/expense/paymentbatch/v1.1/batch/n$s4MtBKgvoJxAYcbggR7eD2jRU$sxYjePU/file</File-Url>
    <Status>SUCCESS</Status>
    <JobQueueKey>d$wIUEkl72LW299WTjTlskdy</JobQueueKey>
</BatchStatus>
</pre>
<br />
