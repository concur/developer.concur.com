---
title: Employee Form Field Resource
layout: operation
---




This resource supports the following GET actions:

##  Get List of Employee Form Fields Request

| ----- |
|  Description |  Supported Accept Types |
|  Retrieves the list of fields for the Global employee form. |   |
|  Query Parameters - Required |  Query Parameters - Optional |
|  None |  None |
|  Request Headers - Required |  Request Headers - Optional |
|  Authorization header with OAuth token for valid Concur user. |  None |

####  XML Example Request

    GET /api/user/v1.0/FormFields HTTPS 1.1
    Host: www.concursolutions.com
    Authorization: OAuth {access token}
    ...

##  Get List of Employee Form Fields Response

| ----- |
|  HTTP Responses |  Supported Content Types |
|

[HTTP Status Codes][1]

[User Errors][2]

 |   |
|  Content Body |   |
|  This request will return a **FormFieldsList** parent element containing a **FormField** child element for each employee form field. Each **FormField** element will contain the following child elements:  

|  Element |  Description |
|  Id |  The unique field identifier. |   |
|  Label |  The displayed field label. |
|  ControlType |  The type of field. |
|  DataType> |  The type of data the field collects. |
|  MaxLength |  The maximum length of data in the field. |
|  Required |  Whether the field is required. |
|  Cols |  The number of columns the field occupies. |
|  Access |  The end-user access to the field. |
|  Width |  The width of the field, in pixels. |
|  Custom |  Whether the field is custom. |
|  Sequence |  The sequence of the field on the form. |
|  **These elements are returned for Custom fields only: ** |   |
|  ParentFormTypeCode |  This element is only populated for multi-level list fields. The type of form that the parent field (the field one level higher in the list hierarchy) is connected to. |
|  ParentFieldId |  The identifier for the field one level higher in the list hierarchy. |
|  IsCopyDownSourceForOtherForms |  Whether the field is used as a copy down source by other forms. |
|  ListName |  The name of the list associated with the field. |
|  HierLevel |  The list level of the field. If it is the second level field in a two-level list, the value would be 2.

 

 |

 |

####  XML Example of Successful Response

    200 OK
    Content-Type: application/xml
    <FormFieldsList xmlns="http://www.concursolutions.com/api/user/2011/02" >
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

  


[1]: https://developer.concur.com/reference/http-codes
[2]: https://developer.concur.com/node/401#usererrors
