
        <div id="main" class="container">
            <div>
                            </div>
            <div class="row">
                <div class="span12">
<div class="breadcrumbs"><a href="/">Home</a>Extract Job Resource: POST</div>
                </div>
            </div>

            <div id="content-wrapper">
<!-- <div class="row"> -->
                <div id="content" class="span9">
            # Extract Job Resource: POST
                    <div class="section">
                    <div id="node-385" class="node clear-block">


    
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
        <a href="#newlistitem">Post Extract Job Initiation </a>

## 
    <a id="newlistitem" name="newlistitem"></a>Post Extract Job Initiation Request
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
                Initiates a new extract job for the specified extract definition.</td>
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
                
                Example: https://www.concursolutions.com/api/expense/extract/v1.0/{<em>DefinitionID</em>}/job
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
        <tr class="GrayTableHead">
            <td colspan="2">
                Content Body</td>
        </tr>
        <tr>
            <td colspan="2">
                This request requires a **definition** parent element with the following child element:<br />
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
                                id</td>
                            <td valign="top">
                                Y</td>
                            <td valign="top">
                                The unique job identifier with encrypted ID.</td>
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
POST https://www.concursolutions.com/api/expense/extract/v1.0/nYoPK$pZmcowMRUqcl5bnDAwwsMydyt$xd/job HTTP/1.1
Authorization: OAuth {access token} 
Content-Type: application/xml
...

<definition <span class="xml-attribute">xmlns=<span class="xml-value">&quot;<span class="xml-value">http://www.concursolutions.com/api/expense/extract/2010/02<span class="xml-value">&quot;>
    <id>https://www.concursolutions.com/api/expense/extract/v1.0/nYoPK$pZmcowMRUqcl5bnDAwwsMydyt$xd</id>
</definition>
</pre>
## 
    Post Extract Job Initiation Response
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
                This request will return a **job** parent element with the following child elements:<br />
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
                                id</td>
                            <td valign="top">
                                The unique job identifier with encrypted ID.</td>
                        </tr>
                        <tr>
                            <td valign="top">
                                start-time</td>
                            <td valign="top">
                                The time, in UTC (GMT), that the job is scheduled to start.</td>
                        </tr>
                        <tr>
                            <td valign="top">
                                status-link</td>
                            <td valign="top">
                                A URI for retrieving the current status of the job, with encrypted ID.</td>
                        </tr>
                        <tr>
                            <td valign="top">
                                status</td>
                            <td valign="top">
                                The current status of the job.</td>
                        </tr>
                    </tbody>
                </table>
                <br />
                If the job was successfully scheduled, the HTTP response code will be 201 Created and the Location response header will contain the URI of the newly scheduled job. The job will be scheduled to start as soon as possible. The <status> value will be Queued until the job begins. </status></td>
        </tr>
    </tbody>
</table>
####
    XML Example of Successful Response
<pre class="overflow_box">
201 Created
Location: https://www.concursolutions.com/api/expense/extract/v1.0/nYoPK$pZmcowMRUqcl5bnDAwwsMydyt$xd/job/uIo87jk3SHudi$sdlYle8$peot$pD21jyd
Content-Type: application/xml
...

<job <span class="xml-attribute">xmlns=<span class="xml-value">&quot;...&quot;>
    <id>https://www.concursolutions.com/api/expense/extract/v1.0/nYoPK$pZmcowMRUqcl5bnDAwwsMydyt$xd/job/uIo87jk3SHudi$sdlYle8$peot$pD21jyd</id>
    <status-link> https://www.concursolutions.com/api/expense/extract/v1.0/nYoPK$pZmcowMRUqcl5bnDAwwsMydyt$xd/job/uIo87jk3SHudi$sdlYle8$peot$pD21jyd/status</status-link>
    <start-time>2010-01-13T18:30:02Z</start-time>
    <status>Queued</status>
</job>
</pre>
<br />
