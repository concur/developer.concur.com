
        <div id="main" class="container">
            <div>
                            </div>
            <div class="row">
                <div class="span12">
<div class="breadcrumbs"><a href="/">Home</a>Extract File Resource: GET</div>
                </div>
            </div>

            <div id="content-wrapper">
<!-- <div class="row"> -->
                <div id="content" class="span9">
            # Extract File Resource: GET
                    <div class="section">
                    <div id="node-387" class="node clear-block">


    
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
        <a href="#getextractfile">Get Extract File </a>

## 
    <a id="getextractfile" name="getextractfile"></a>Get Extract File Request
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
                Requests the extracted data for the specified extract job.</td>
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
                        **{<em>DefinitionID</em>}/job**<br />
                        The definition identifier and the job keyword.
                    * 
                        **job/{<em>JobID</em>}/file**<br />
                        The identifier for the job and the job and file keywords.
                
                Example: https://www.concursolutions.com/api/expense/extract/v1.0/{<em>DefinitionID</em>}/job/{<em>JobID</em>}/file</td>
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
                Authorization header with OAuth token for valid Concur user.
                The OAuth consumer must have one of the following user roles in Concur: Company Administrator or Web Services Administrator for Professional, or Can Administer for Standard.
                These roles allow the user to manage data for the entire company.
            </td>
            <td valign="top" width="50%">
                None</td>
        </tr>
    </tbody>
</table>
####
    XML Example Request
<pre class="overflow_box">
GET https://www.concursolutions.com/api/expense/extract/v1.0/nYoPK$pZmcowMRUqcl5bnDAwwsMydyt$xd/job/uIo87jk3SHudi$sdlYle8$peot$pD21jyd/file HTTP/1.1
Authorization: OAuth {access token}
...
</pre>
## 
    Get Extract File Response
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
                        text/csv
                    * 
                        application/zip
                
            </td>
        </tr>
        <tr class="GrayTableHead">
            <td colspan="2">
                Content Body</td>
        </tr>
        <tr>
            <td colspan="2">
                This request will return the extracted data in text/csv format if there was a single file produced or as a zip archive if the extract definition is configured to produce more than one file.</td>
        </tr>
    </tbody>
</table>
####
    XML Example of Response with Single Extract File
<pre class="overflow_box">
200 OK
Content-Type: text/csv
100,AAA,BBBB,CCCC,...<rest of file>
</pre>
####
    Example of Successful Response With Multiple Extract Files
<pre class="overflow_box">
200 OK
Content-Type: application/zip
<zip file contents> 
</pre>
<br />
