
        <div id="main" class="container">
            <div>
                            </div>
            <div class="row">
                <div class="span12">
<div class="breadcrumbs"><a href="/">Home</a>Extract Job Resource: GET</div>
                </div>
            </div>

            <div id="content-wrapper">
<!-- <div class="row"> -->
                <div id="content" class="span9">
            # Extract Job Resource: GET
                    <div class="section">
                    <div id="node-384" class="node clear-block">


    
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
        <a href="#getjoblist">Get Extract Job List </a>
    * 
        <a href="#getjobdetails">Get Extract Job Details</a>
    * 
        <a href="#getjobstatus">Get Extract Job Status</a>

## 
    <a id="getjoblist" name="getjoblist"></a>Get Extract Job List Request
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
                Requests a list of the last 100 extract jobs ran for the specified Extract Definition.</td>
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
GET https://www.concursolutions.com/api/expense/extract/v1.0/nYoPK$pZmcowMRUqcl5bnDAwwsMydyt$xd/job HTTP/1.1
Authorization: OAuth {access token}
...
</pre>
## 
    Get Extract Job List Response
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
                This request will return a **jobs** parent element containing a **job** child element for each of the past 100 extract jobs for the extract definition. Each **job** element will contain the following child elements:<br />
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
                                status-link</td>
                            <td valign="top">
                                A URI for retrieving the current job status, with encrypted ID. The **status-link** value is used as the URI when requesting the job status.</td>
                        </tr>
                        <tr>
                            <td valign="top">
                                start-time</td>
                            <td valign="top">
                                The time, in UTC (GMT), that the job is scheduled to start.</td>
                        </tr>
                        <tr>
                            <td valign="top">
                                stop-time</td>
                            <td valign="top">
                                The time, in UTC (GMT), that the job finished. Not included if the job is still running.</td>
                        </tr>
                        <tr>
                            <td valign="top">
                                status</td>
                            <td valign="top">
                                The current status of the job.</td>
                        </tr>
                        <tr>
                            <td valign="top">
                                file-link</td>
                            <td valign="top">
                                A URI for retrieving the file or files produced by the job run, with encrypted ID. Not included if the job is still running. The **file-link** value is used as the URI when retrieving the extract data.</td>
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
<jobs <span class="xml-attribute">xmlns=<span class="xml-value">&quot;...&quot;>
    <job>
        <id>https://www.concursolutions.com/api/expense/extract/v1.0/nYoPK$pZmcowMRUqcl5bnDAwwsMydyt$xd/job/uIo87jk3SHudi$sdlYle8$peot$pD21jyd</id>
        <status-link>https://www.concursolutions.com/api/expense/extract/v1.0/nYoPK$pZmcowMRUqcl5bnDAwwsMydyt$xd/job/uIo87jk3SHudi$sdlYle8$peot$pD21jyd/status</status-link>
        <start-time>2010-01-13T18:30:02Z</start-time>
        <status>Queued</status>
    </job>
    <job>
        <id>https://www.concursolutions.com/api/expense/extract/v1.0/nYoPK$pZmcowMRUqcl5bnDAwwsMydyt$xd/job/21UwwqA3jk25Lis77jF$piiD21c89lLwEq</id>
        <status-link>https://www.concursolutions.com/api/expense/extract/v1.0/nYoPK$pZmcowMRUqcl5bnDAwwsMydyt$xd/job/21UwwqA3jk25Lis77jF$piiD21c89lLwEq/status</status-link>
        <start-time>2010-01-13T18:30:02Z</start-time>
        <stop-time>2010-01-13T18:30:50Z</stop-time>
        <status>Complete</status>
        <file-link>https://www.concursolutions.com/api/expense/extract/v1.0/nYoPK$pZmcowMRUqcl5bnDAwwsMydyt$xd/job/21UwwqA3jk25Lis77jF$piiD21c89lLwEq/file</file-link>
    </job>
    <job>
        <id>https://www.concursolutions.com/api/expense/extract/v1.0/nYoPK$pZmcowMRUqcl5bnDAwwsMydyt$xd/job/uI77ndy0Q1szuU73XSh56lshi$p215gHs1</id>
        <status-link>https://www.concursolutions.com/api/extract/v1.0/nYoPK$pZmcowMRUqcl5bnDAwwsMydyt$xd/job/uI77ndy0Q1szuU73XSh56lshi$p215gHs1/status</status-link>
        <start-time>2010-01-12T18:30:01Z</start-time>
        <stop-time>2010-01-12T18:31:01Z</stop-time>
        <status>Complete</status>
        <file-link>https://www.concursolutions.com/api/expense/extract/v1.0/nYoPK$pZmcowMRUqcl5bnDAwwsMydyt$xd/job/uI77ndy0Q1szuU73XSh56lshi$p215gHs1/file</file-link>
    </job>
</jobs>
</pre>
## 
    <a id="getjobdetails" name="getjobdetails"></a>Get Extract Job Details Request
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
                Retrieves the details of the specified extract definition.</td>
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
                        **{<em>DefinitionID</em>**}<br />
                        The identifier for the desired extract definition.
                    * 
                        **job/{<em>JobID</em>} **<br />
                        The identifier for the job and the job keyword.
                
                Example: https://www.concursolutions.com/api/expense/extract/v1.0/{<em>DefinitionID</em>}/job/{<em>JobID</em>}</td>
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
                Authorization header with OAuth token for valid Concur user. The OAuth consumer must have one of the following user roles in Concur: Company Administrator or Web Services Administrator for Professional, or Can Administer for Standard.
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
GET https://www.concursolutions.com/api/expense/extract/v1.0/nYoPK$pZmcowMRUqcl5bnDAwwsMydyt$xd/job/uIo87jk3SHudi$sdlYle8$peot$pD21jyd HTTP/1.1
Authorization: OAuth {access token}
...
</pre>
## 
    Get Extract Job Details Response
<table border="1" bordercolor="#DBDBDB" cellpadding="3" cellspacing="0" width="100% ">
    <tbody>
        <tr>
            <td>
                HTTP Responses</td>
            <td>
                Supported Content Types</td>
        </tr>
        <tr>
            <td>
                <a href="https://developer.concur.com/node/205">HTTP Status Codes</a>
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
                                status-link</td>
                            <td valign="top">
                                The URI to get the current status of the job, with encrypted ID. The **status-link** value is used as the URI when requesting the job status.</td>
                        </tr>
                        <tr>
                            <td valign="top">
                                start-time</td>
                            <td valign="top">
                                The time, in UTC (GMT), that the job is scheduled to start.</td>
                        </tr>
                        <tr>
                            <td valign="top">
                                stop-time</td>
                            <td valign="top">
                                The time, in UTC (GMT), that the job finished. Not included if the job is still running.</td>
                        </tr>
                        <tr>
                            <td valign="top">
                                status</td>
                            <td valign="top">
                                The current status of the extract job.</td>
                        </tr>
                        <tr>
                            <td valign="top">
                                file-link</td>
                            <td valign="top">
                                A URI for retrieving the file or files produced by the job run, with encrypted ID. Not included if the job is still running. The **file-link** value is used as the URI when retrieving the extract data.</td>
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
<job <span class="xml-attribute">xmlns=<span class="xml-value">&quot;...&quot;>
    <id>https://www.concursolutions.com/api/expense/extract/v1.0/nYoPK$pZmcowMRUqcl5bnDAwwsMydyt$xd/job/uIo87jk3SHudi$sdlYle8$peot$pD21jyd></id>
    <status-link>https://www.concursolutions.com/api/extract/v1.0/nYoPK$pZmcowMRUqcl5bnDAwwsMydyt$xd/job/uIo87jk3SHudi$sdlYle8$peot$pD21jyd/status</status-link>
    <start-time>2010-01-12T18:30:01</start-time>
    <stop-time>2010-01-12T18:31:01</stop-time>
    <status>Complete</status>
    <file-link> https://www.concursolutions.com/api/expense/extract/v1.0/nYoPK$pZmcowMRUqcl5bnDAwwsMydyt$xd/job/uIo87jk3SHudi$sdlYle8$peot$pD21jyd/file</file-link>
</job>
</pre>
## 
    <a id="getjobstatus" name="getjobstatus"></a>Get Extract Job Status Request
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
                Retrieves the details of the specified extract definition.</td>
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
                        **{<em>DefinitionID</em>**}<br />
                        The identifier for the desired extract definition.
                    * 
                        **job/{<em>JobID</em>}/status **<br />
                        The identifier for the job and the job and status keywords.
                
                Example: https://www.concursolutions.com/api/expense/extract/v1.0/{<em>DefinitionID</em>}/job/{<em>JobID</em>}/status</td>
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
                Authorization header with OAuth token for valid Concur user. The OAuth consumer must have one of the following user roles in Concur: Company Administrator or Web Services Administrator for Professional, or Can Administer for Standard.
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
GET https://www.concursolutions.com/api/expense/extract/v1.0/nX8O9$pytn6vJEWvLOZxyy3GcNGyj0ZklG/job/nIJp1lR2R0LNT4XcO5fXG$s$sZmVuRTuG$ps/status HTTP/1.1
Authorization: OAuth {access token}
...
</pre>
## 
    Get Extract Job Status Response
<table border="1" bordercolor="#DBDBDB" cellpadding="3" cellspacing="0" width="100% ">
    <tbody>
        <tr>
            <td>
                HTTP Responses</td>
            <td>
                Supported Content Types</td>
        </tr>
        <tr>
            <td>
                <a href="https://developer.concur.com/node/205">HTTP Status Codes</a>
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
                                The unique job identifier.</td>
                        </tr>
                        <tr>
                            <td valign="top">
                                status-link</td>
                            <td valign="top">
                                The URI to get the current status of the job.</td>
                        </tr>
                        <tr>
                            <td valign="top">
                                start-time</td>
                            <td valign="top">
                                The time, in UTC (GMT), when the job started.</td>
                        </tr>
                        <tr>
                            <td valign="top">
                                stop-time</td>
                            <td valign="top">
                                The time, in UTC (GMT), when the job finished. Not included if the job is still running.</td>
                        </tr>
                        <tr>
                            <td valign="top">
                                status</td>
                            <td valign="top">
                                The current status of the job. Format: Queued, Running, Completed, Failed</td>
                        </tr>
                        <tr>
                            <td valign="top">
                                file-link</td>
                            <td valign="top">
                                The URI used to retrieve the file or files produced by this job run. Not included if the job is still running.</td>
                        </tr>
                        <tr>
                            <td valign="top">
                                id</td>
                            <td valign="top">
                                The extract definition ID URI with encrypted ID.</td>
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
<job <span class="xml-attribute">xmlns=<span class="xml-value">&quot;<span class="xml-value">http://www.concursolutions.com/api/expense/extract/2010/02<span class="xml-value">&quot; <span class="xml-attribute">xmlns:i=<span class="xml-value">&quot;<span class="xml-value">http://www.w3.org/2001/XMLSchema-instance<span class="xml-value">&quot;>
    <id>https://www.concursolutions.com/api/expense/extract/v1.0/nX8O9$pytn6vJEWvLOZxyy3GcNGyj0ZklG/job/nIJp1lR2R0LNT4XcO5fXG$s$sZmVuRTuG$ps</id>
    <status-link>https://www.concursolutions.com/api/expense/extract/v1.0/nX8O9$pytn6vJEWvLOZxyy3GcNGyj0ZklG/job/nIJp1lR2R0LNT4XcO5fXG$s$sZmVuRTuG$ps/status</status-link>
    <start-time>2011-08-25T14:25:22.58</start-time>
    <stop-time>2011-08-25T14:25:23.537</stop-time>
    <status>Completed</status>
    <file-link>https://www.concursolutions.com/api/expense/extract/v1.0/nX8O9$pytn6vJEWvLOZxyy3GcNGyj0ZklG/job/nIJp1lR2R0LNT4XcO5fXG$s$sZmVuRTuG$ps/file</file-link>
</job>
</pre>
<br />
