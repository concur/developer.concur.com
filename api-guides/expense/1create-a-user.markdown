---
title: 1. READ First
layout: reference
---

## 1. READ First

### Adding User Records:

It is critical for clients & Partners to understand the difference between establishing employee data for a base User record vs. the employee data that serves other Concur features.

Many Expense features require employee data that User Provisioning applications cannot populate since the current User API does not include those features at this time.  Therefore, the data pertaining to these features must be populated by the client using Concur specified import files. Concur Implementation staff will assist with the import file process.

The higher number of Concur features the client elects to use, the more data they will need to import via files for those features to work. Changes to base records can be accomplished via the User Provisioning app such as when an employee terminates or changes Cost Center.

•	Some Standard Edition clients may be able to completely add a user via a User Provisioning application without the need to import files if their configuration choices are very basic.
•	It is unlikely that Professional Edition clients will be able to add a user via a User Provisioning application without the need to import files for additional employee data.
•	The fields that can be populated by the User Provisioning app are specified here:
https://developer.concur.com/api-reference/user/company-notification-subscription-resource/user.html#createUser


### Availability:
  1.	Small Business – not available to App Center Partner applications
  2.	Standard Edition – see additional information below
  3.	Professional Edition – see additional information below
      - Premium Edition – same as Professional Edition
  4.	Standard to Professional (upgrade) - see additional information below

### How to Determine the Edition Type:

A client can determine the Edition-type by having their administrator login to their Concur site.  If they see a “Setup” menu and a sub option for Expense within the main, Administration menu, then this is a Standard Edition site.  If the client administrator does not see the “Expense” menu within the Setup menu, then they have a Professional Edition site.  See:



A Partner can determine the Edition type by the field Label value populated in Custom21 data element.  This data element can be obtained by making a GET request to this API:	https://www.concursolutions.com/api/user/v1.0/FormFields


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

### Import Notes across the Edition Types:

#### Standard Edition:
1.	Client must have the Expense Service enabled.  i.e. Travel-only is not supported
2.	Ledger Code:
a.	required to be part of the User Post.
b.	For all Standard Edition clients the Ledger code = DEFAULT  as of Spring 2016.  This could change as Concur adds Standard Edition functionality
3.	Employee Group:
a.	This is optional for Standard Edition clients. If it is used, then Custom21 & OrgUnit1 fields will be the fields to use.  These fields will point to a 2-level list.
b.	See appendix document to learn how to determine Group Codes for Standard Edition.
4.	Custom Fields:
a.	Partner must determine the base record custom field(s).  These fields will vary per client.
b.	Partner must determine if the custom field(s) are defined as a List field.
i.	If the field has a List, then the Partner must locate the List Code values in order to populate the List Item Code for each base employee record
ii.	The List can be configured as a multi-level list (aka “Connected List”).
c.	See next document to learn how to obtain the above data.


#### Professional Edition:
1.	Client must have the Expense Service enabled.  i.e. Travel-only is not supported
2.	Ledger Code (required for POST body)
a.	This value can vary and a Pro Edition client could have 2 or more.
b.	The Ledger code must be obtained from Concur since the Code is not available in the API and it is not exposed to the client administrator in the Concur UI (Accounting Administration menu).
i.	Contact pdspe@concur.com for the Client’s Ledger codes.
3.	Employee Group: (required for POST body)
a.	This will be used for all Pro Edition Clients.
b.	Custom21 will be used for the Expense Group value.  Custom 22 will be used for the Invoice Group value.   Both will be a List field.  Invoice is not necessary for all clients.
c.	See next document to learn how to determine the Group Codes

4.	Custom Fields:
a.	Partner must determine the base record custom field(s).  These fields will vary per client.
b.	Partner must determine if the custom field(s) are defined as a List field.
i.	If the field has a List, then the Partner must locate the List values in order to populate the List Item Code for each base employee record
ii.	The List can be configured as a multi-level list (aka “Connected List”).
c.	See next document to learn how to obtain the above data.


#### Standard-to-Professional Upgrade Edition:
1.	Same as Professional except the Reimbursement Method field:
  - See next document for more information.
2.	Partners need to contact Concur to ensure everyone is on the same page.


#### Stipulations for a BASE User Record:

1)	Reimbursement Method field 

  a)	Standard Edition - clients that have more than 1 reimbursement method (Expense Pay, Payroll, Co. Check) can provision Users but the client must import the Reimbursement values via a file (possible values are listed below).

    i)	If the client uses ADP Payroll, then the ADP payroll fields listed below must be populated manually or via an import file.

    ii)	If Expense Pay or AP Check is the single reimbursement method used by the client, then the Partner does not need to populate this data ( a blank value will populate the single, default method)
  
  b)	Standard-to-Professional Upgrade Edition - clients that continue to use the corresponding Payment Manager batches (which get populated with reports based on the values in this field) can provision Users; but the client must import these values via a file. This requires a brief consultation with the client, Partner, & Concur to ensure everyone is on the same page. E.g. this type of client may choose to use one Accounting file and therefore would not need the individual batches that these field values populate.
  
  c) Pro Edition – this field does not apply to Pro Edition at this time.
  
  d) These are the values that the client would populate via an import file:

    i)	CNQRPAY
  
    ii)	APCHECK
  
    iii) ADPPAYR
  
2)	Reimbursement via Payroll

  a) In Standard Edition, 3 ADP Payroll fields are exposed when the Payroll option is selected:

    i)	ADP Company Code

    ii)	ADP Deduction Code

    iii)	ADP File #

 b)	The above Payroll fields must also be populated by the client via an import file.



2)	Cash Advance

 a)	Not available in the current User API.  The Cash Advance Account Code will need manually entered or imported via a file.

3)	Travel Policy

  a.	All 3 Edition types -  clients that have more than one Travel Policy can provision Users but the client must populate this field manually or via an import if the client has more than one travel policy.

  b. For multi-national and large market, it is very common to have more than one travel policy.
  c. For Standard travel, there is usually only one travel policy.  Often times this field is left blank in the employee import file so users are associated with the default travel policy and then users are moved manually via User Administration
