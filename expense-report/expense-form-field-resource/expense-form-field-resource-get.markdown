
        <div id="main" class="container">
            <div>
                            </div>
            <div class="row">
                <div class="span12">
<div class="breadcrumbs"><a href="/">Home</a>Expense Form Field Resource: GET</div>
                </div>
            </div>

            <div id="content-wrapper">
<!-- <div class="row"> -->
                <div id="content" class="span9">
            # Expense Form Field Resource: GET
                    <div class="section">
                    <div id="node-471" class="node clear-block">


    
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
        <a href="#getformfielddetails">Get Form Field Details</a>

## 
    <a id="getformfielddetails" name="getformfielddetails"></a>Get Form Field Details Request
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
                Retrieves the details of the configured form fields for the specified form.<br />
                <br />
                **NOTE**: When sending in requests using these fields, be sure to include the required fields from the form and any additional required fields specified in the request documentation.</td>
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
                        **{<em>FormId</em>}/Fields**<br />
                        The unique identifier for the desired form and the Fields keyword.
                
                Example:<br />
                <span class="codeexample">https://www.concursolutions.com/api/expense/expensereport/v1.1/report/Form/<em>{FormId}</em>/Fields<br />
                <br />
                **URI Source**: The FormId is returned in the <span class="codeexample">**FormId** element by the <a href="https://developer.concur.com/node/469#getformdata">Get Form Data</a> function.</td>
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
GET https://www.concursolutions.com/api/expense/expensereport/v1.1/report/Form/nAaT8$puKKO2$pEVlsXfSruLpDfZL0wVM$s7/Fields HTTP/1.1
Authorization: OAuth {access token}
...
</pre>
## 
    Get Form Field Details Response
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
                This request will return a <span class="codeexample">**FormFieldsList** parent element with a <span class="codeexample">**FormField** parent element for each configured form field. The **FormField** element has the following child elements:
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
                                <span class="codeexample">Id</td>
                            <td valign="top">
                                The form field ID.</td>
                        </tr>
                        <tr>
                            <td valign="top">
                                <span class="codeexample">Label</td>
                            <td valign="top">
                                The form field label.</td>
                        </tr>
                        <tr>
                            <td valign="top">
                                <span class="codeexample">ControlType</td>
                            <td valign="top">
                                The type of field.</td>
                        </tr>
                        <tr>
                            <td valign="top">
                                <span class="codeexample">DataType</td>
                            <td valign="top">
                                The type of data accepted by the field.</td>
                        </tr>
                        <tr>
                            <td valign="top">
                                <span class="codeexample">MaxLength</td>
                            <td valign="top">
                                The maximum length of the field value.</td>
                        </tr>
                        <tr>
                            <td valign="top">
                                <span class="codeexample">Required</td>
                            <td valign="top">
                                Whether the field is required.</td>
                        </tr>
                        <tr>
                            <td valign="top">
                                <span class="codeexample">Cols</td>
                            <td valign="top">
                                The number of columns the field contains.</td>
                        </tr>
                        <tr>
                            <td valign="top">
                                <span class="codeexample">Access</td>
                            <td valign="top">
                                The access level the specified user has to the field.</td>
                        </tr>
                        <tr>
                            <td valign="top">
                                <span class="codeexample">Width</td>
                            <td valign="top">
                                The width of the field.</td>
                        </tr>
                        <tr>
                            <td valign="top">
                                <span class="codeexample">Custom</td>
                            <td valign="top">
                                Whether the field is custom.</td>
                        </tr>
                        <tr>
                            <td valign="top">
                                <span class="codeexample">Sequence</td>
                            <td valign="top">
                                The field order on the form.</td>
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
<FormFieldsList <span class="xml-attribute">xmlns=<span class="xml-value">&quot;<span class="xml-value">https://www.concursolutions.com/api/expense/expensereport/2011/03<span class="xml-value">&quot; <span class="xml-attribute">xmlns:i=<span class="xml-value">&quot;<span class="xml-value">http://www.w3.org/2001/XMLSchema-instance<span class="xml-value">&quot;>
    <FormField>
        <Id>Name</Id>
        <Label>ReportName</Label>
        <ControlType>edit</ControlType>
        <DataType>VARCHAR</DataType>
        <MaxLength>32</MaxLength>
        <Required>Y</Required>
        <Cols>32</Cols>
        <Access>RW</Access>
        <Width>32</Width>
        <Custom>N</Custom>
        <Sequence>1</Sequence>
    </FormField>
    <FormField>
        <Id>ReportId</Id>
        <Label>ReportID</Label>
        <ControlType>static</ControlType>
        <DataType>VARCHAR</DataType>
        <MaxLength>32</MaxLength>
        <Required>Y</Required>
        <Cols />
        <Access>RO</Access>
        <Width />
        <Custom>N</Custom>
        <Sequence>2</Sequence>
    </FormField>
    <FormField>
        <Id>PolKey</Id>
        <Label>Policy</Label>
        <ControlType>picklist</ControlType>
        <DataType>INTEGER</DataType>
        <MaxLength />
        <Required>Y</Required>
        <Cols />
        <Access>RW</Access>
        <Width />
        <Custom>N</Custom>
        <Sequence>3</Sequence>
    </FormField>
    <FormField>
        <Id>EmpName</Id>
        <Label>EmployeeName</Label>
        <ControlType>static</ControlType>
        <DataType>VARCHAR</DataType>
        <MaxLength>32</MaxLength>
        <Required>Y</Required>
        <Cols />
        <Access>HD</Access>
        <Width />
        <Custom>N</Custom>
        <Sequence>4</Sequence>
    </FormField>
    <FormField>
        <Id>UserDefinedDate</Id>
        <Label>ReportDate</Label>
        <ControlType>edit</ControlType>
        <DataType>TIMESTAMP</DataType>
        <MaxLength />
        <Required>N</Required>
        <Cols />
        <Access>RW</Access>
        <Width />
        <Custom>N</Custom>
        <Sequence>5</Sequence>
    </FormField>
    <FormField>
        <Id>Purpose</Id>
        <Label>BusinessPurpose</Label>
        <ControlType>textarea</ControlType>
        <DataType>VARCHAR</DataType>
        <MaxLength>500</MaxLength>
        <Required>Y</Required>
        <Cols>32</Cols>
        <Access>RW</Access>
        <Width>32</Width>
        <Custom>N</Custom>
        <Sequence>6</Sequence>
    </FormField>
</FormFieldsList>
</pre>
<br />
