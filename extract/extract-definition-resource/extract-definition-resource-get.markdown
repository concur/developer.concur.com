
        <div id="main" class="container">
            <div>
                            </div>
            <div class="row">
                <div class="span12">
<div class="breadcrumbs"><a href="/">Home</a>Extract Definition Resource: GET</div>
                </div>
            </div>

            <div id="content-wrapper">
<!-- <div class="row"> -->
                <div id="content" class="span9">
            # Extract Definition Resource: GET
                    <div class="section">
                    <div id="node-382" class="node clear-block">


    
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
        <a href="#getdeflist">Get Extract Definition List </a>
    * 
        <a href="#getdefdetails">Get Extract Definition Details </a>

## 
    <a id="getdeflist" name="getdeflist"></a>Get Extract Definition List Request
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
                Retrieves the list of extract definitions.</td>
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
GET https://www.concursolutions.com/api/expense/extract/v1.0/ HTTP/1.1 
Authorization: OAuth {access token}
...
</pre>
## 
    Get Extract Definition List Response
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
                This request will return a **definitions** parent element with a **definition** child element for each extract definition. Each **definition** element has the following child elements:<br />
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
                                The extract definition ID URI with encrypted ID.</td>
                        </tr>
                        <tr>
                            <td valign="top">
                                job-link</td>
                            <td valign="top">
                                The extract job URI with encrypted ID. The job-link value is used as the URI when creating the extract job data request.</td>
                        </tr>
                        <tr>
                            <td valign="top">
                                name</td>
                            <td valign="top">
                                The extract definition name.</td>
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

<definitions <span class="xml-attribute">xmlns=<span class="xml-value">&quot;<span class="xml-value">http://www.concursolutions.com/api/expense/extract/2010/02<span class="xml-value">&quot;>
    <definition>
        <id>https://www.concursolutions.com/api/expense/extract/v1.0/nYoPK$pZmcowMRUqcl5bnDAwwsMydyt$xd</id>
        <job-link>https://www.concursolutions.com/api/expense/extract/v1.0/nYoPK$pZmcowMRUqcl5bnDAwwsMydyt$xd/job</job-link>
        <name>Standard Accounting Extract</name>
    </definition>
    <definition>
        <id>https://www.concursolutions.com/api/expense/extract/v1.0/Umj$swS19lpd7Sk$phUYl67wE1ss4Q$shu</id>
        <job-link>https://www.concursolutions.com/api/expense/extract/v1.0/Umj$swS19lpd7Sk$phUYl67wE1ss4Q$shu</job-link>
        <name>European Extract</name>
    </definition>
    <definition>
        <id>https://www.concursolutions.com/api/expense/extract/v1.0/8LjhN23Hs33$piUUfy4ytTqa$sqqacYeP1</id>
        <job-link>https://www.concursolutions.com/api/expense/extract/v1.0/8LjhN23Hs33$piUUfy4ytTqa$sqqacYeP1</job-link>
        <name>Asian Extract</name>
    </definition>
</definitions>
</pre>
## 
    <a id="getdefdetails" name="getdefdetails"></a>Get Extract Definition Details Request
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
                
                Example: https://www.concursolutions.com/api/expense/extract/v1.0/{<em>DefinitionID</em>}</td>
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
GET https://www.concursolutions.com/api/expense/extract/v1.0/n59FpBJ8hN3qVWTFIrtxkOT5$pef6DmIj3 HTTP/1.1
Authorization: OAuth {access token}
...
</pre>
## 
    Get Extract Definition Details Response
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
                This request will return a single **definition** element identified by the URI, with the following child elements:<br />
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
                                The extract definition ID URI with encrypted ID.</td>
                        </tr>
                        <tr>
                            <td valign="top">
                                name</td>
                            <td valign="top">
                                The extract definition name.</td>
                        </tr>
                        <tr>
                            <td valign="top">
                                job-link</td>
                            <td valign="top">
                                The extract job URI with encrypted ID. The **job-link** value is used as the URI when creating the extract job data request.</td>
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

 <definition <span class="xml-attribute">xmlns=<span class="xml-value">&quot;<span class="xml-value">http://www.concursolutions.com/api/expense/extract/2010/02<span class="xml-value">&quot; <span class="xml-attribute">xmlns:i=<span class="xml-value">&quot;<span class="xml-value">http://www.w3.org/2001/XMLSchema-instance<span class="xml-value">&quot;>
    <id>https://www.concursolutions.com/api/expense/extract/v1.0/n59FpBJ8hN3qVWTFIrtxkOT5$pef6DmIj3</id>
    <name>AMEX Remittance - US</name>
    <job-link>https://www.concursolutions.com/api/expense/extract/v1.0/n59FpBJ8hN3qVWTFIrtxkOT5$pef6DmIj3/job</job-link>
</definition>
</pre>
<br />
