---
title: 2. How To Provision A Basic User Record Into Concur
layout: reference
---

### 2. How To Provision A Basic User Record Into Concur

This document will guide the developer through the process to successfully add a BASE User record to a Concur site.  Clients should be made aware that they will need to import additional employee data (via files) in order to make use of Concur functionality that is not covered by the basic User Provisioning process.  Clients should consult with their Concur Implementation Technical Consultant for more information.

Concur comes in 3 Editions: Standard, Professional, and Standard-to-Professional Upgrade.  A client can determine the Edition-type by having their administrator login to their Concur site.  If they see a “Setup” menu with a sub option for Expense within the Administration menu, then this is a Standard Edition site.  If the client administrator does not see the “Setup” menu with Expense as a sub menu, then they have a Professional Edition site.

The Partner can determine the Edition type by the field Label value populated in Custom21:

1. Standard Edition:

          <Id> Custom21 </Id>
          <Label> EmployeeAdministrationCountry </Label>

2. Professional Edition:

          <Id> Custom21 </Id>
          <Label> EmployeeGroup </Label>

3. Standard-to-Professional Upgrade Edition:

          <Id> Custom21 </Id>
          <Label> EmployeeGroup </Label>

          In addition, these clients will have this field & Label:

          <Id> PmtMethodCode </Id>
          <Label> ReimbursementMethod </Label>

There are subtle differences between the Editions when adding a base User record:

#### Ledger Code Value (must be exact)

1.	Standard Edition - DEFAULT is the code value to use for all Standard Edition clients. All caps.
2.	Professional Edition - The Ledger code must be obtained from Concur since the Code is not available in the API and it is not exposed to the client administrator in the Concur UI (Accounting Administration menu).

#### Custom Fields:

1.	The Partner has to identify all required fields on the Concur employee form(s), otherwise the record will fail.
  - Standard Edition – there will only be one Employee Form per client
  - Professional Edition -  the client could have 2 or more Employee Forms.
          * Note: Each employee is assigned to a Group.  The Employee Group can only have one Employee form assigned to it.  However, a single Employee Form can be assigned to more than one Group.
2.	The following concepts are the same for all 3 Edition types.  This section will help you understand the data you need to obtain from the client’s Concur site & then prepare it in a POST User API request.
  a. The Partner has to identify which required fields are defined as a List & whether or not the list is a single-level or a multi-level list:
      1. Single-level list: The field is a stand-alone field that does not have a connection to another field’s values.  For example: a small company that only classifies their employees into a Department.  The are no other segments.
      2. Multi-level list (aka “Connected List” or “Linked List”):  The field has a connection to one or more other fields’ list values.  For example: a company could classify their employees into a Company, Division, & Department.  The purpose of the connected list values reduces the likelihood of incorrect combinations of data being entered for an employee record.  In the above example, the selected Company list value will dictate which values are available for selection in the Division list, which will, in turn, dictate which values are available for selection in the Department field.

See how to determine if the Employee Form Fields are lists and connected lists below.


#### Employee Group:

1.	The employee group values are obtained from the List API results.
2.	An Employee Form is assigned to an Employee Group.  The same form can be assigned to more than one Group, but a Group cannot have more than form assigned to it.  This form dictates which fields need populated.
3.	Standard Edition Clients
  - The grouping feature may not be configured.
  - If it is configured, the Group codes will populate 2 fields: Custom21 and OrgUnit1.  The fields will be called:

            <Id> Custom21 </Id>
            <Label> EmployeeAdministrationCountry </Label>
            <Id> OrgUnit1 </Id>
            <Label> ExpensePolicyGroup </Label>
  - See the Reminder section below for a document that explains how to obtain Standard Edition Group values.
4.	Professional Edition Clients - the grouping feature will be configured for all Pro Edition clients.  Custom21 will be used and the field will be called:

            <Id> Custom21 </Id>
            <Label> EmployeeGroup </Label>
5.	Standard-to-Professional Edition Clients
- Same as #4 Pro Edition, but also consider the “Reimbursement Method” field topic highlighted below.

### Add A User

#### Step 1:	Identify the required Employee Form-Fields & Edition type

1.	Required – all required fields must be populated in the POST User request
2.	Field ID – will be used in your POST User request
3.	Edition Type:
  - Edition Type will dictate these differences in your POST Body:
          * Ledger Code
              1.	Standard Edition: DEFAULT
              2.	Pro Edition: contact pdspe@concur.com to obtain clients’ Ledger Code
          * Group Structure
              1.	Standard Edition: if used, will be a 2-level list
              2.	Pro Edition: will always be used in Custom21 only
  - If the Field Label for Custom 21 = EmployeeGroup, then this client is on Professional Edition
  - Standard Edition clients will also have this Field ID:


              <Id> PmtMethodCode </Id>
              <Label> ReimbursementMethod </Label>


<strong>URI:</strong>	https://www.concursolutions.com/api/user/v1.0/FormFields
<strong>Verb:</strong>	GET
<strong>Response:</strong> This is just an excerpt of the full response. You will need to identify all required fields in order to create a successful POST User body.

This is a Pro Edition example since it does not include a field ID = < Id > PmtMethodCode </ Id >


      <FormFieldsList xmlns="http://www.concursolutions.com/api/user/2011/02" xmlns:i="http://www.w3.org/2001/XMLSchema-instance">

          <FormField>
              <Id> Custom21 </Id> - Record the field ID to be used in your POST Body later.
              <Label> EmployeeGroup </Label> - Indicated this is a Pro Ed. See above for the other values.
              <ControlType> picklist </ControlType>
              <DataType> LIST </DataType> - This is the value if the list is a stand alone list
              <MaxLength> 48 </MaxLength>
              <Required> Y </Required> - Required field so be prepared to use this in your POST Body
              <Cols/>
              <Access> RW </Access>
              <Width/>
              <Custom> Y </Custom>
              <ParentFormTypeCode/>
              <ParentFieldId/>
              <IsCopyDownSourceForOtherForms/>
              <ListName> Employee Groups </ListName>  
              <HierLevel/>
              <Sequence> 1 </Sequence>
          </FormField>

          <FormField>
              <Id> OrgUnit1 </Id> - Record the field ID to be used in your POST Body later
              <Label> Company </Label>
              <ControlType> list_edit </ControlType>
              <DataType> MLIST </DataType> - Value if the list is a multi-level list
              <MaxLength> 48 </MaxLength>
              <Required> Y </Required>
              <Cols/>
              <Access> RW </Access>
              <Width/>
              <Custom> Y </Custom>
              <ParentFormTypeCode/>
              <ParentFieldId/>
              <IsCopyDownSourceForOtherForms> Y </IsCopyDownSourceForOtherForms>
              <ListName> Company Hierarchy </ListName>
              <HierLevel> 1 </HierLevel>
              <Sequence> 15 </Sequence>
          </FormField>

          <FormField>
              <Id> OrgUnit2 </Id>
              <Label> Division </Label>
              <ControlType> list_edit </ControlType>
              <DataType> MLIST </DataType>
              <MaxLength> 48 </MaxLength>
              <Required> Y </Required>
              <Cols/>
              <Access> RW </Access>
              <Width/>
              <Custom> Y </Custom>
              <ParentFormTypeCode> EMPINFO </ParentFormTypeCode>
              <ParentFieldId> OrgUnit1 </ParentFieldId>	Indicates this is a connected list
              <IsCopyDownSourceForOtherForms> Y </IsCopyDownSourceForOtherForms>
              <ListName> Company Hierarchy </ListName>
              <HierLevel> 2 </HierLevel> - Indicates the field is part of a connected list
              <Sequence> 16 </Sequence>
          </FormField>

          <FormField>
              <Id> OrgUnit3 </Id>
              <Label> CostCenter </Label>
              <ControlType> list_edit </ControlType>
              <DataType> MLIST </DataType> - This is the value if the list is a multi-level list
              <MaxLength> 48 </MaxLength>
              <Required> Y </Required>
              <Cols/>
              <Access> RW </Access>
              <Width/>
              <Custom> Y </Custom>
              <ParentFormTypeCode> EMPINFO </ParentFormTypeCode>
              <ParentFieldId> OrgUnit2</ParentFieldId> - Indicates the field is part of a connected list
              <IsCopyDownSourceForOtherForms> Y </IsCopyDownSourceForOtherForms>
              <ListName> Company Hierarchy </ListName>
              <HierLevel> 3 </HierLevel>
              <Sequence> 17 </Sequence>
            </FormField>

          <FormField>
              <Id> LedgerKey </Id>
              <Label> Ledger </Label>
              <ControlType> picklist </ControlType>-Ledger code doesn't get returned in the GET List API.
              <DataType> INTEGER </DataType>
              <MaxLength />
              <Required> Y </Required>
              <Col/>
              <Access> RW </Access>
              <Width/>
              <Custom> N </Custom>
              <Sequence> 18 </Sequence >
          </FormField >

          <FormField>
              <Id> LocaleName </ Id>
              <Label> Locale </ Label>
              <ControlType> edit </ ControlType>
              <DataType> VARCHAR </ DataType>
              <MaxLength> 255 </ MaxLength>
              <Required> Y </ Required>
              <Cols />
              <Access> RW </ Access>
              <Width />
              <Custom> N </ Custom>
              <Sequence> 17 </ Sequence>
          </ FormField>

      </ FormFieldsList >


#### Step 2: Identify the List values for fields that are defined as Lists

2.1	Get the list of Lists

<strong>URL:</strong> https://www.concursolutions.com/api/expense/list/v1.0/
<strong>Response:</strong>	This is a partial result….

      <list>
          <batch-link> https://www.concursolutions.com/api/expense/list/v1.0/gWuW7w9hQETSPkK$sQOSMu7HH31M2KcW587w/batch</batch-link>
          <id>https://www.concursolutions.com/api/expense/list/v1.0/gWuW7w9hQETSPkK$sQOSMu7HH31M2KcW587w</id>
          <is-vendor> false </is-vendor>
          <items-link> https://www.concursolutions.com/api/expense/list/v1.0/gWuW7w9hQETSPkK$sQOSMu7HH31M2KcW587w/items </items-link>
          <levels> 3 </levels>
          <name> Company Hierarchy </name>
      </list>

2.2	Get List Item codes for desired List ID (using the List ID provided in the response above)

<strong>URL:</strong> https://www.concursolutions.com/api/v3.0/common/listitems?limit=100&listId=gWuW7w9hQETSPkK%24sQOSMu7HH31M2KcW587w
<strong>Response:</strong>	This is a partial result….

In this example, there is a 3-level connected list. Notice how the list grows until it reaches the bottom level and then cycles through all of the values such as A-100-10 and A-100-20

    {
      "Items": [
        {
          "ListID": "gWuW7w9hQETSPkK$sQOSMu7HH31M2KcW587w",
          "Name": "Company A",
          "ParentID": null,
          "Level1Code": "A",
          "Level2Code": null,
          "Level3Code": null,
          "Level4Code": null,
          "Level5Code": null,
          "Level6Code": null,
          "Level7Code": null,
          "Level8Code": null,
          "Level9Code": null,
          "Level10Code": null,
          "ID": "gWuY7jnXOZIAI20tB6kADll$ppHW$suajWgJw",
          "URI": "https://www.concursolutions.com/api/v3.0/common/listitems/gWuY7jnXOZIAI20tB6kADll$ppHW$suajWgJw"
        },
        {
          "ListID": "gWuW7w9hQETSPkK$sQOSMu7HH31M2KcW587w",
          "Name": "ABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKL",
          "ParentID": "gWuY7jnXOZIAI20tB6kADll$ppHW$suajWgJw",
          "Level1Code": "A",
          "Level2Code": "100",
          "Level3Code": null,
          "Level4Code": null,
          "Level5Code": null,
          "Level6Code": null,
          "Level7Code": null,
          "Level8Code": null,
          "Level9Code": null,
          "Level10Code": null,
          "ID": "gWuY7jnXOZIALjNsD50f0qaQXmWxdqSOwJw",
          "URI": "https://www.concursolutions.com/api/v3.0/common/listitems/gWuY7jnXOZIALjNsD50f0qaQXmWxdqSOwJw"
        },
        {
          "ListID": "gWuW7w9hQETSPkK$sQOSMu7HH31M2KcW587w",
          "Name": "Cost Center 10",
          "ParentID": "gWuY7jnXOZIALjNsD50f0qaQXmWxdqSOwJw",
          "Level1Code": "A",
          "Level2Code": "100",
          "Level3Code": "10",
          "Level4Code": null,
          "Level5Code": null,
          "Level6Code": null,
          "Level7Code": null,
          "Level8Code": null,
          "Level9Code": null,
          "Level10Code": null,
          "ID": "gWuY7jnXOZIF9ss4i7zE5Kuzh0FGXUOKQBQ",
          "URI": "https://www.concursolutions.com/api/v3.0/common/listitems/gWuY7jnXOZIF9ss4i7zE5Kuzh0FGXUOKQBQ"
        },
        {
          "ListID": "gWuW7w9hQETSPkK$sQOSMu7HH31M2KcW587w",
          "Name": "Cost Center 20",
          "ParentID": "gWuY7jnXOZIALjNsD50f0qaQXmWxdqSOwJw",
          "Level1Code": "A",
          "Level2Code": "100",
          "Level3Code": "20",


Repeat the above until you have obtained all of the List value CODES for all of the required fields that are defined as lists.


#### Reminders:

1.	Ledger Codes:
  - Standard Edition:	DEFAULT is the value to use
  - Professional Edition:	Concur Consultant must provide
2.	Employee Group Codes
  -	Values will be part of the list data
  -	Standard Edition uses a 2-level Group structure. These fields are used:
  -	  a. Custom21
  -	  b. OrgUnit1
  -	  c. See additional document to learn how to obtain Standard Edition Group values.
3.	Other required fields
  -	All required fields must be populated in the POST User request body
4.	Reimbursement Method field for the Standard-to-Professional Edition upgrade:
  -	From above, determine the Edition type:

    Standard-to-Professional Upgrade Edition:

          <Id> Custom21 </Id>
          <Label> EmployeeGroup </Label>

    In addition, these clients will have this field & Label:

          <Id> PmtMethodCode </Id>
          <Label> ReimbursementMethod </Label>

  a. If you determine the client is a Standard to Professional Upgrade client, please contact Concur at: PDSPE@concur.com
  b. Notes:
    
    1. If a client has migrated from Standard to Professional this field can be removed only if the client has moved to the single level SAE file. If the client is still using the G/L files they used while on Standard, you can’t remove the Reimbursement Method field because those files require that field. Once the client is put on the single level SAE file, the Reimbursement Method field is no longer needed and can be removed from the Employee Form.
    
    2. If the client still uses their Standard Edition files, then this is an issue due to an outstanding issue where the POST User API does not populate the field.


#### Step 3: Post User

<strong>URL:</strong>	https://www.concursolutions.com/api/user/v1.0/Users

POST Body example:

        <batch xmlns="http://www.concursolutions.com/api/user/2011/02">
                    <UserProfile>
                        <EmpId>80 </EmpId>                                               
                        <FeedRecordNumber> 1 </FeedRecordNumber>
                        <LoginId> Simoncelli@supersic.com </LoginId>                                         
                        <Active> Y </Active>
                        <Password> welcome </Password>                                           
                        <FirstName> Marco </FirstName>
                        <LastName> Simoncelli </LastName>
                        <EmailAddres> Simoncelli@supersic.com </EmailAddress>
                        <LedgerKey> DEFAULT </LedgerKey>
                        <OrgUnit1> A </OrgUnit1>
                        <OrgUnit2> 100 </OrgUnit2>
                     <OrgUnit3> 20 </OrgUnit3>  
        <Custom21> US </Custom21>
                        <LocaleName> en_US </LocaleName>
                        <CtryCode> US </CtryCode>
                        <CrnKey> USD </CrnKey>
                        <ExpenseUser> Y </ExpenseUser>
                        <ExpenseApprover> Y </ExpenseApprover>
                        <ExpenseApproverEmployeeID> 85 </ExpenseApproverEmployeeID>
                        <PmtMethodCode> APCHECK </PmtMethodCode>
                    </UserProfile>

        Step 3.1: Post User Body for Standard Edition that Has Groups:

        <batch xmlns="http://www.concursolutions.com/api/user/2011/02">
                    <UserProfile>
                        <EmpId> 88 </EmpId>                                               
                        <FeedRecordNumber> 1 </FeedRecordNumber>
                        <LoginId> ds@DriveTheWheelsoff.com </LoginId>                                         
                        <Active> Y </Active>
                        <Password> welcome </Password>                                           
                        <FirstName> Doug </FirstName>
                        <LastName> Staab </LastName>
                        <EmailAddress> ds@DriveTheWheelsoff.com </EmailAddress>
                        <LedgerKey> DEFAULT </LedgerKey>
                        <OrgUnit1> US2 </OrgUnit1>
                        <Custom21> US </Custom21>
                        <LocaleName> en_US </LocaleName>
                        <CtryCode> US </CtryCode>
                        <CrnKey> USD </CrnKey>
                        <ExpenseUser> Y</ExpenseUser>
                        <ExpenseApprover> Y </ExpenseApprover>                              
                        <ExpenseApproverEmployeeID> </ExpenseApproverEmployeeID>
                        <PmtMethodCode> </PmtMethodCode>
                    </UserProfile>
        </batch>
