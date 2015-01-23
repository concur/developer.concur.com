
        <div id="main" class="container">
            <div>
                            </div>
            <div class="row">
                <div class="span12">
<div class="breadcrumbs"><a href="/">Home</a>Payment Batch File Resource: GET</div>
                </div>
            </div>

            <div id="content-wrapper">
<!-- <div class="row"> -->
                <div id="content" class="span9">
            # Payment Batch File Resource: GET
                    <div class="section">
                    <div id="node-431" class="node clear-block">


    
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
        <a href="#batchfile">Get Payment Batch File </a>

## 
    <a id="batchfile" name="batchfile"></a>Get Payment Batch File Request
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
                Requests the expense transaction data for the specified payment batch.</td>
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
                        **{<em>BatchID</em>}/file**
                
                Example:<br />
                    https://www.concursolutions.com/api/expense/paymentbatch/v1.1/batch/<em>{BatchID}</em>/file
                **URI Source**: The URI is returned in the Batch-URL element of the <a href="https://developer.concur.com/node/427">Get List of Payment Batches</a> function. Do **not** use the BatchID value from the <a href="https://developer.concur.com/node/427">Get List of Payment Batches</a> function in the URI, as it contains the unencrypted batch ID.
            </td>
            <td valign="top">
                None
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
GET api/expense/paymentbatch/v1.1/batch/nYoPK$pZmcowMRUqcl5bnDAwwsMydyt$xd/file HTTPS 1.1
Host: www.concursolutions.com
Authorization: OAuth {access token}
...
</pre>
## 
    Get Payment Batch File Response
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
                        application/zip
                    * 
                        text/csv
                
            </td>
        </tr>
        <tr class="GrayTableHead">
            <td colspan="2">
                Content Body</td>
        </tr>
        <tr>
            <td colspan="2">
                This request will return the expense transaction data in text/csv format if there was a single file produced or as a zip archive if the batch is configured to produce more than one file. An example of a client who will receive multiple files is a client using QuickBooks, who receives one file formatted for import into QuickBooks (.IIF extension), and one file for the general ledger (.CSV extension), inside a .ZIP file.</td>
        </tr>
    </tbody>
</table>
####
    XML Example of Successful Response
<pre class="overflow_box">
Single file from batch:
200 OK
Content-Type: text/csv
100,AAA,BBBB,CCCC,...<rest <span class="xml-attribute">of file>

Multiple files from batch:
200 OK
Content-Type: application/zip
<Zip <span class="xml-attribute">File Contents>
</pre>
<br />
