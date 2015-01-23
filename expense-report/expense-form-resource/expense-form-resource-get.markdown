
        <div id="main" class="container">
            <div>
                            </div>
            <div class="row">
                <div class="span12">
<div class="breadcrumbs"><a href="/">Home</a>Expense Form Resource: GET</div>
                </div>
            </div>

            <div id="content-wrapper">
<!-- <div class="row"> -->
                <div id="content" class="span9">
            # Expense Form Resource: GET
                    <div class="section">
                    <div id="node-469" class="node clear-block">


    
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
        <a href="#getformtypes">Get Form Types </a>
    * 
        <a href="#getformdata">Get Form Data </a>

## 
    <a id="getformtypes" name="getformtypes"></a>Get Form Types Request
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
                Retrieves the list of configured form types.</td>
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
                Authorization header with OAuth token for valid Concur user.</td>
            <td valign="top" width="50%">
                None</td>
        </tr>
    </tbody>
</table>
####
    XML Example Request
<pre class="overflow_box">
GET https://www.concursolutions.com/api/expense/expensereport/v1.1/report/Forms HTTP/1.1
Authorization: OAuth {access token}
...
</pre>
## 
    Get Form Types Response
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
                This request will return a **FormTypesList** parent element with a **FormType** parent element for each configured form. The FormType element has the following child elements:
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
                                Name</td>
                            <td valign="top">
                                The form type name.</td>
                        </tr>
                        <tr>
                            <td valign="top">
                                FormCode</td>
                            <td valign="top">
                                The form type code.</td>
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
<FormTypesList 
    <span class="xml-attribute">xmlns=<span class="xml-value">&quot;<span class="xml-value">http://www.concursolutions.com/api/expense/expensereport/2011/03<span class="xml-value">&quot; 
    <span class="xml-attribute">xmlns:i=<span class="xml-value">&quot;<span class="xml-value">http://www.w3.org/2001/XMLSchema-instance<span class="xml-value">&quot;>
    <FormType>
        <Name>Expense Entry</Name>
        <FormCode>ENTRYINFO</FormCode>
    </FormType>
    <FormType>
        <Name>Expense Report Header</Name>
        <FormCode>RPTINFO</FormCode>
    </FormType>
    <FormType>
        <Name>Expense Allocation</Name>
        <FormCode>ALLOCINFO</FormCode>
    </FormType>
    <FormType>
        <Name>Expense Attendee</Name>
        <FormCode>ATTNINFO</FormCode>
    </FormType>
    <FormType>
        <Name>Authorization Request Expense Category</Name>
        <FormCode>TRAVELREQENTRYINFO</FormCode>
    </FormType>
    <FormType>
        <Name>Authorization Request Header</Name>
        <FormCode>TRAVELREQINFO</FormCode>
    </FormType>
    <FormType>
        <Name>Expense Detail View</Name>
        <FormCode>EXPLISTDTL</FormCode>
    </FormType>
    <FormType>
        <Name>Attendee Detail View</Name>
        <FormCode>ATNLISTDTL</FormCode>
    </FormType>
    <FormType>
        <Name>Expense Car</Name>
        <FormCode>CARINFO</FormCode>
    </FormType>
</FormTypesList>
</pre>
## 
    <a id="getformdata" name="getformdata"></a>Get Form Data Request
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
                Retrieves the list of configured forms for the specified form type.</td>
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
                        **{<em>FormCode</em>}**<br />
                        The identifier for the desired form.
                
                Example: <span class="codeexample">https://www.concursolutions.com/api/expense/expensereport/v1.1/report/Forms/<em class="codeexample">{FormCode}</em><br />
                <br />
                **URI Source**: The FormCode is returned in the **FormCode** element in the <a href="#getformtypes">Get Form Types</a> response.</td>
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
    </tbody>
</table>
####
    XML Example Request
<pre class="overflow_box">
GET https://www.concursolutions.com/api/expense/expensereport/v1.1/report/Forms/RPTINFO HTTP/1.1
Authorization: OAuth {access token}
...
</pre>
## 
    Get Form Data Response
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
                This request will return a <span class="codeexample">**FormDataList** parent element with a <span class="codeexample">**FormData** parent element for each configured form. The FormData element has the following child elements:
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
                                <span class="codeexample">Name</td>
                            <td valign="top">
                                The form name.</td>
                        </tr>
                        <tr>
                            <td valign="top">
                                <span class="codeexample">FormId</td>
                            <td valign="top">
                                The form identifier.</td>
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
<FormDataList <span class="xml-attribute">xmlns=<span class="xml-value">&quot;<span class="xml-value">http://www.concursolutions.com/api/expense/expensereport/2011/03<span class="xml-value">&quot; <span class="xml-attribute">xmlns:i=<span class="xml-value">&quot;<span class="xml-value">http://www.w3.org/2001/XMLSchema-instance<span class="xml-value">&quot;>
    <FormData>
        <Name>Central Reconciliation Columns</Name>
        <FormId>nAaT8$puKKOG5E4R9gCMyXVrFjo9NIbmQl</FormId>
    </FormData>
    <FormData>
        <Name>Central Reconciliation Report</Name>
        <FormId>nAaT8$puKKOGmK3xvAdnAOgJ9fxaoXjyW$s</FormId>
    </FormData>
    <FormData>
        <Name>Default Report Information</Name>
        <FormId>nAaT8$puKKO2$pEVlsXfSruLpDfZL0wVM$s7</FormId>
    </FormData>
</FormDataList>
</pre>
<br />
