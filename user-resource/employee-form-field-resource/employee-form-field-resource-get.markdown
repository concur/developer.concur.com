
        <div id="main" class="container">
            <div>
                            </div>
            <div class="row">
                <div class="span12">
<div class="breadcrumbs"><a href="/">Home</a>Employee Form Field Resource: GET</div>
                </div>
            </div>

            <div id="content-wrapper">
<!-- <div class="row"> -->
                <div id="content" class="span9">
            # Employee Form Field Resource: GET
                    <div class="section">
                    <div id="node-408" class="node clear-block">


    
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
        <a href="#listoflists">Get List of Employee Form Fields </a>

## 
    <a id="listoflists" name="listoflists"></a>Get List of Employee Form Fields Request
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
                Retrieves the list of fields for the Global employee form.</td>
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
GET /api/user/v1.0/FormFields HTTPS 1.1 
Host: www.concursolutions.com
Authorization: OAuth {access token}
... 
</pre>
## 
    Get List of Employee Form Fields Response
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
                <a href="https://developer.concur.com/node/205">HTTP Status Codes</a>
                <a href="https://developer.concur.com/node/401#usererrors">User Errors</a>
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
                This request will return a **FormFieldsList** parent element containing a **FormField** child element for each employee form field. Each **FormField** element will contain the following child elements:<br />
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
                                Id</td>
                            <td valign="top">
                                The unique field identifier.</td>
                        </tr>
                        <tr>
                            <td valign="top">
                                Label</td>
                            <td valign="top">
                                The displayed field label.</td>
                        </tr>
                        <tr>
                            <td valign="top">
                                ControlType</td>
                            <td valign="top">
                                The type of field.</td>
                        </tr>
                        <tr>
                            <td valign="top">
                                DataType></td>
                            <td valign="top">
                                The type of data the field collects.</td>
                        </tr>
                        <tr>
                            <td valign="top">
                                MaxLength</td>
                            <td valign="top">
                                The maximum length of data in the field.</td>
                        </tr>
                        <tr>
                            <td valign="top">
                                Required</td>
                            <td valign="top">
                                Whether the field is required.</td>
                        </tr>
                        <tr>
                            <td valign="top">
                                Cols</td>
                            <td valign="top">
                                The number of columns the field occupies.</td>
                        </tr>
                        <tr>
                            <td valign="top">
                                Access</td>
                            <td valign="top">
                                The end-user access to the field.</td>
                        </tr>
                        <tr>
                            <td valign="top">
                                Width</td>
                            <td valign="top">
                                The width of the field, in pixels.</td>
                        </tr>
                        <tr>
                            <td valign="top">
                                Custom</td>
                            <td valign="top">
                                Whether the field is custom.</td>
                        </tr>
                        <tr>
                            <td valign="top">
                                Sequence</td>
                            <td valign="top">
                                The sequence of the field on the form.</td>
                        </tr>
                        <tr>
                            <td colspan="2" valign="top">
                                **These elements are returned for Custom fields only: **</td>
                        </tr>
                        <tr>
                            <td valign="top">
                                ParentFormTypeCode</td>
                            <td valign="top">
                                This element is only populated for multi-level list fields. The type of form that the parent field (the field one level higher in the list hierarchy) is connected to.</td>
                        </tr>
                        <tr>
                            <td valign="top">
                                ParentFieldId</td>
                            <td valign="top">
                                The identifier for the field one level higher in the list hierarchy.</td>
                        </tr>
                        <tr>
                            <td valign="top">
                                IsCopyDownSourceForOtherForms</td>
                            <td valign="top">
                                Whether the field is used as a copy down source by other forms.</td>
                        </tr>
                        <tr>
                            <td valign="top">
                                ListName</td>
                            <td valign="top">
                                The name of the list associated with the field.</td>
                        </tr>
                        <tr>
                            <td valign="top">
                                HierLevel</td>
                            <td valign="top">
                                The list level of the field. If it is the second level field in a two-level list, the value would be 2.
                                
                            </td>
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
<FormFieldsList <span class="xml-attribute">xmlns=<span class="xml-value">&quot;<span class="xml-value">http://www.concursolutions.com/api/user/2011/02<span class="xml-value">&quot; >
    <FormField> 
        <Id>FirstName</Id>
        <Label>EmployeeFirstName</Label>
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
        <Id>LastName</Id>
        <Label>EmployeeLastName</Label>
        <ControlType>edit</ControlType>
        <DataType>VARCHAR</DataType>
        <MaxLength>32</MaxLength>
        <Required>Y</Required>
        <Cols>32</Cols>
        <Access>RW</Access>
        <Width>32</Width>
        <Custom>N</Custom> 
        <Sequence>2</Sequence>
    </FormField> 
    <FormField> 
        <Id>Mi</Id>
        <Label>MiddleInitial</Label>
        <ControlType>edit</ControlType>
        <DataType>CHAR</DataType>
        <MaxLength>1</MaxLength>
        <Required>N</Required>
        <Cols>32</Cols>
        <Access>RW</Access>
        <Width>32</Width>
        <Custom>N</Custom> 
        <Sequence>3</Sequence>
    </FormField> 
    <FormField> 
        <Id>EmpId</Id>
        <Label>EmployeeID</Label>
        <ControlType>edit</ControlType>
        <DataType>VARCHAR</DataType>
        <MaxLength>128</MaxLength>
        <Required>Y</Required>
        <Cols>32</Cols>
        <Access>RW</Access>
        <Width>32</Width>
        <Custom>N</Custom> 
        <Sequence>4</Sequence>
    </FormField> 
    <FormField> 
        <Id>LoginId</Id>
        <Label>LogonID</Label>
        <ControlType>edit</ControlType>
        <DataType>VARCHAR</DataType>
        <MaxLength>128</MaxLength>
        <Required>Y</Required>
        <Cols>32</Cols>
        <Access>RW</Access>
        <Width>32</Width>
        <Custom>N</Custom> 
        <Sequence>5</Sequence>
    </FormField> 
    <FormField>
        <Id>EmailAddress</Id>
        <Label>EmailAddress</Label>
        <ControlType>edit</ControlType>
        <DataType>VARCHAR</DataType>
        <MaxLength>255</MaxLength>
        <Required>N</Required>
        <Cols>32</Cols>
        <Access>RW</Access>
        <Width>32</Width>
        <Custom>N</Custom> 
        <Sequence>6</Sequence>
    </FormField> 
    <FormField>
        <Id>LocaleName</Id>
        <Label>Locale</Label>
        <ControlType>edit</ControlType>
        <DataType>VARCHAR</DataType>
        <MaxLength>255</MaxLength>
        <Required>Y</Required>
        <Cols>32</Cols>
        <Access>RW</Access>
        <Width>32</Width>
        <Custom>N</Custom> 
        <Sequence>7</Sequence>
    </FormField> 
    <FormField> 
        <Id>CtryCode</Id>
        <Label>Country</Label>
        <ControlType>picklist</ControlType>
        <DataType>CHAR</DataType>
        <MaxLength>2</MaxLength>
        <Required>Y</Required>
        <Cols>32</Cols>
        <Access>RW</Access>
        <Width>32</Width>
        <Custom>N</Custom> 
        <Sequence>8</Sequence>
    </FormField> 
    <FormField> 
        <Id>CtrySubCode</Id>
        <Label>State/Province</Label>
        <ControlType>edit</ControlType>
        <DataType>picklist</DataType>
        <MaxLength>6</MaxLength>
        <Required>N</Required>
        <Cols>32</Cols>
        <Access>RW</Access>
        <Width>32</Width>
        <Custom>N</Custom> 
        <Sequence>9</Sequence>
    </FormField> 
    <FormField>
        <Id>LedgerKey</Id>
        <Label>Ledger</Label>
        <ControlType>picklist</ControlType>
        <DataType>INTEGER</DataType>
        <MaxLength />
        <Required>N</Required>
        <Cols />
        <Access>RW</Access>
        <Width />
        <Custom>N</Custom> 
        <Sequence>10</Sequence>
    </FormField> 
    <FormField>
        <Id>CrnKey</Id>
        <Label>ReimbursementCurrency</Label>
        <ControlType>picklist</ControlType>
        <DataType>INTEGER</DataType>
        <MaxLength />
        <Required>Y</Required>
        <Cols>32</Cols>
        <Access>RW</Access>
        <Width>32</Width>
        <Custom>N</Custom> 
        <Sequence>11</Sequence>
    </FormField> 
    <FormField>
        <Id>CashAdvanceAccountCode</Id>
        <Label>CashAdvanceAccountCode</Label>
        <ControlType>edit</ControlType>
        <DataType>VARCHAR</DataType>
        <MaxLength>20</MaxLength>
        <Required>N</Required>
        <Cols>32</Cols>
        <Access>RW</Access>
        <Width>32</Width>
        <Custom>N</Custom> 
        <Sequence>12</Sequence>
    </FormField> 
    <FormField>
        <Id>Active</Id>
        <Label>Active</Label>
        <ControlType>checkbox</ControlType>
        <DataType>BOOLEANCHAR</DataType>
        <MaxLength>1</MaxLength>
        <Required>Y</Required>
        <Cols />
        <Access>RW</Access>
        <Width />
        <Custom>N</Custom> 
        <Sequence>13</Sequence>
    </FormField> 
    <FormField>
        <Id>OrgUnit1</Id>
        <Label>Division</Label>
        <ControlType>list_edit</ControlType>
        <DataType>MLIST</DataType>
        <MaxLength>48</MaxLength>
        <Required>N</Required>
        <Cols>32</Cols>
        <Access>RW</Access>
        <Width>32</Width>
        <Custom>Y</Custom>
        <ParentFormTypeCode />
        <ParentFieldId />
        <IsCopyDownSourceForOtherForms>Y</IsCopyDownSourceForOtherForms>
        <ListName>Employee Groups</ListName>
        <HierLevel>1</HierLevel> 
        <Sequence>14</Sequence>
    </FormField> 
    <FormField>
        <Id>OrgUnit2</Id>
        <Label>Department</Label>
        <ControlType>list_edit</ControlType>
        <DataType>MLIST</DataType>
        <MaxLength>48</MaxLength>
        <Required>N</Required>
        <Cols>32</Cols>
        <Access>RW</Access>
        <Width>32</Width>
        <Custom>Y</Custom>
        <ParentFormTypeCode>EMPINFO</ParentFormTypeCode>
        <ParentFieldId>OrgUnit1</ParentFieldId>
        <IsCopyDownSourceForOtherForms>Y</IsCopyDownSourceForOtherForms>
        <ListName>Employee Groups</ListName>
        <HierLevel>2</HierLevel> 
        <Sequence>15</Sequence>
    </FormField> 
    <FormField>
        <Id>OrgUnit3</Id>
        <Label>Team</Label>
        <ControlType>list_edit</ControlType>
        <DataType>MLIST</DataType>
        <MaxLength>48</MaxLength>
        <Required>N</Required>
        <Cols>32</Cols>
        <Access>RW</Access>
        <Width>32</Width>
        <Custom>Y</Custom>
        <ParentFormTypeCode>EMPINFO</ParentFormTypeCode>
        <ParentFieldId>OrgUnit2</ParentFieldId>
        <IsCopyDownSourceForOtherForms>Y</IsCopyDownSourceForOtherForms>
        <ListName>Employee Groups</ListName>
        <HierLevel>3</HierLevel> 
        <Sequence>16</Sequence>
    </FormField> 
    <FormField> 
        <Id>OrgUnit4</Id>
        <Label>OrgUnit4</Label>
        <ControlType>edit</ControlType>
        <DataType>VARCHAR</DataType>
        <MaxLength>48</MaxLength>
        <Required>N</Required>
        <Cols>32</Cols>
        <Access>RW</Access>
        <Width>32</Width>
        <Custom>Y</Custom>
        <ParentFormTypeCode /> 
        <ParentFieldId /> 
        <IsCopyDownSourceForOtherForms>Y</IsCopyDownSourceForOtherForms>
        <HierLevel /> 
        <Sequence>17</Sequence>
    </FormField> 
    <FormField>
        <Id>OrgUnit5</Id>
        <Label>OrgUnit5</Label>
        <ControlType>edit</ControlType>
        <DataType>VARCHAR</DataType>
        <MaxLength>48</MaxLength>
        <Required>N</Required>
        <Cols>32</Cols>
        <Access>RW</Access>
        <Width>32</Width>
        <Custom>Y</Custom>
        <ParentFormTypeCode />
        <ParentFieldId /> 
        <IsCopyDownSourceForOtherForms>Y</IsCopyDownSourceForOtherForms>
        <HierLevel /> 
        <Sequence>18</Sequence>
    </FormField> 
    <FormField> 
        <Id>Custom1</Id>
        <Label>OfficeLocation</Label>
        <ControlType>edit</ControlType>
        <DataType>VARCHAR</DataType>
        <MaxLength>48</MaxLength>
        <Required>N</Required>
        <Cols>32</Cols>
        <Access>RW</Access>
        <Width>32</Width>
        <Custom>Y</Custom>
        <ParentFormTypeCode /> 
        <ParentFieldId /> 
        <IsCopyDownSourceForOtherForms>Y</IsCopyDownSourceForOtherForms>
        <HierLevel /> 
        <Sequence>19</Sequence>
    </FormField> 
    <FormField>
        <Id>Custom2</Id>
        <Label>Custom02</Label>
        <ControlType>edit</ControlType>
        <DataType>VARCHAR</DataType>
        <MaxLength>48</MaxLength>
        <Required>N</Required>
        <Cols /> 
        <Access>RW</Access>
        <Width /> 
        <Custom>Y</Custom>
        <ParentFormTypeCode /> 
        <ParentFieldId /> 
        <IsCopyDownSourceForOtherForms>Y</IsCopyDownSourceForOtherForms>
        <HierLevel /> 
        <Sequence>20</Sequence>
    </FormField> 
    <FormField> 
        <Id>Custom3</Id>
        <Label>Custom03</Label>
        <ControlType>edit</ControlType>
        <DataType>VARCHAR</DataType>
        <MaxLength>48</MaxLength>
        <Required>N</Required>
        <Cols /> 
        <Access>RW</Access>
        <Width /> 
        <Custom>Y</Custom>
        <ParentFormTypeCode /> 
        <ParentFieldId /> 
        <IsCopyDownSourceForOtherForms>Y</IsCopyDownSourceForOtherForms>
        <HierLevel /> 
        <Sequence>21</Sequence>
    </FormField> 
    <FormField> 
        <Id>Custom4</Id>
        <Label>Custom04</Label>
        <ControlType>edit</ControlType>
        <DataType>VARCHAR</DataType>
        <MaxLength>48</MaxLength>
        <Required>N</Required>
        <Cols /> 
        <Access>RW</Access>
        <Width /> 
        <Custom>Y</Custom>
        <ParentFormTypeCode /> 
        <ParentFieldId /> 
        <IsCopyDownSourceForOtherForms>Y</IsCopyDownSourceForOtherForms>
        <HierLevel /> 
        <Sequence>22</Sequence>
    </FormField>
    <FormField> 
        <Id>Custom5</Id>
        <Label>Custom05</Label>
        <ControlType>edit</ControlType>
        <DataType>VARCHAR</DataType>
        <MaxLength>48</MaxLength>
        <Required>N</Required>
        <Cols /> 
        <Access>RW</Access>
        <Width /> 
        <Custom>Y</Custom>
        <ParentFormTypeCode /> 
        <ParentFieldId /> 
        <IsCopyDownSourceForOtherForms>Y</IsCopyDownSourceForOtherForms>
        <HierLevel /> 
        <Sequence>23</Sequence>
    </FormField>
    <FormField> 
        <Id>Custom16</Id>
        <Label>AuditGroup</Label>
        <ControlType>edit</ControlType>
        <DataType>VARCHAR</DataType>
        <MaxLength>48</MaxLength>
        <Required>N</Required>
        <Cols /> 
        <Access>RW</Access>
        <Width /> 
        <Custom>Y</Custom>
        <ParentFormTypeCode /> 
        <ParentFieldId /> 
        <IsCopyDownSourceForOtherForms /> 
        <HierLevel /> 
        <Sequence>24</Sequence>
    </FormField>
    <FormField> 
        <Id>Custom17</Id>
        <Label>APVendorID</Label>
        <ControlType>edit</ControlType>
        <DataType>VARCHAR</DataType>
        <MaxLength>48</MaxLength>
        <Required>N</Required>
        <Cols /> 
        <Access>RW</Access>
        <Width /> 
        <Custom>Y</Custom>
        <ParentFormTypeCode /> 
        <ParentFieldId /> 
        <IsCopyDownSourceForOtherForms>Y</IsCopyDownSourceForOtherForms>
        <HierLevel /> 
        <Sequence>25</Sequence>
    </FormField>
    <FormField> 
        <Id>Custom18</Id>
        <Label>DeductionCode</Label>
        <ControlType>edit</ControlType>
        <DataType>VARCHAR</DataType>
        <MaxLength>48</MaxLength>
        <Required>N</Required>
        <Cols /> 
        <Access>RW</Access>
        <Width /> 
        <Custom>Y</Custom>
        <ParentFormTypeCode /> 
        <ParentFieldId /> 
        <IsCopyDownSourceForOtherForms /> 
        <HierLevel /> 
        <Sequence>26</Sequence>
    </FormField>
    <FormField> 
        <Id>Custom19</Id>
        <Label>PayrollID</Label>
        <ControlType>edit</ControlType>
        <DataType>VARCHAR</DataType>
        <MaxLength>48</MaxLength>
        <Required>N</Required>
        <Cols /> 
        <Access>RW</Access>
        <Width /> 
        <Custom>Y</Custom>
        <ParentFormTypeCode /> 
        <ParentFieldId /> 
        <IsCopyDownSourceForOtherForms /> 
        <HierLevel /> 
        <Sequence>27</Sequence>
    </FormField>
    <FormField> 
        <Id>Custom20</Id>
        <Label>PayrollCompanyCode</Label>
        <ControlType>edit</ControlType>
        <DataType>VARCHAR</DataType>
        <MaxLength>48</MaxLength>
        <Required>N</Required>
        <Cols /> 
        <Access>RW</Access>
        <Width /> 
        <Custom>Y</Custom>
        <ParentFormTypeCode /> 
        <ParentFieldId /> 
        <IsCopyDownSourceForOtherForms /> 
        <HierLevel /> 
        <Sequence>28</Sequence>
    </FormField>
    <FormField> 
        <Id>IsTestEmp</Id>
        <Label>IsaTestUser?</Label>
        <ControlType>checkbox</ControlType>
        <DataType>BOOLEANCHAR</DataType>
        <MaxLength>1</MaxLength>
        <Required>Y</Required>
        <Cols /> 
        <Access>RW</Access>
        <Width /> 
        <Custom>N</Custom> 
        <Sequence>29</Sequence>
    </FormField>
</FormFieldsList> 
</pre>
<br />
