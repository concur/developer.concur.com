---
title: Create A User
layout: reference
---

## Create A User

### Adding User Records:

It is critical for clients & Partners to understand the difference between establishing employee data for a base User record vs. the employee data that serves other Concur features.

Many Expense features require employee data that User Provisioning applications cannot populate since the current User API does not include those features at this time.  Therefore, the data pertaining to these features must be populated by the client using Concur specified import files. Concur Implementation staff will assist with the import file process.

The higher number of Concur features the client elects to use, the more data they will need to import via files for those features to work. Changes to base records can be accomplished via the User Provisioning app such as when an employee terminates or changes Cost Center.

  - Some Standard Edition clients may be able to completely add a user via a User Provisioning application without the need to import files if their configuration choices are very basic.
  - It is unlikely that Professional Edition clients will be able to add a user via a User Provisioning application without the need to import files for additional employee data.
  - The fields that can be populated by the User Provisioning app are specified here:
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
    - < Id > Custom21 </ Id >
    - < Label > EmployeeAdministrationCountry </ Label >
  2. Professional Edition:
    - < Id > Custom21 </ Id >
    - < Label > EmployeeGroup </ Label >
  3. Standard-to-Professional Upgrade Edition:
    -	< Id > Custom21 </ Id >
    -	< Label > EmployeeGroup </ Label >
    -	In addition, these clients will have this field & Label:
    -	< Id > PmtMethodCode </ Id >
    -	 < Label > ReimbursementMethod </ Label >

### Import Notes across the Edition Types:

#### Standard Edition:
1.	Client must have the Expense Service enabled.  i.e. Travel-only is not supported
2.	Ledger Code:
  - required to be part of the User Post.
  - For all Standard Edition clients the Ledger code = DEFAULT
3.	Employee Group:
  - This is optional for Standard Edition clients. If it is used, then Custom21 & OrgUnit1 fields will be the fields to use.  These fields will point to a 2-level list.
  - See appendix document to learn how to determine Group Codes for Standard Edition.
4.	Custom Fields:
  - Partner must determine the base record custom field(s).  These fields will vary per client.
  - Partner must determine if the custom field(s) are defined as a List field.
          * If the field has a List, then the Partner must locate the List Code values in order to populate the List Item Code for each base employee record
          * The List can be configured as a multi-level list (aka “Connected List”).
  - See Appendix document to learn how to obtain the above data.

#### Professional Edition:
1.	Client must have the Expense Service enabled.  i.e. Travel-only is not supported
2.	Ledger Code (required for POST body)
  - This value can vary and a Pro Edition client could have 2 or more.
  - The Ledger code must be obtained from Concur since the Code is not available in the API and it is not exposed to the client administrator in the Concur UI (Accounting Administration menu).
          * Contact pdspe@concur.com for the Client’s Ledger codes.
3.	Employee Group: (required for POST body)
  - This will be used for all Pro Edition Clients.
  - Custom21 will be used for the Expense Group value.  Custom 22 will be used for the Invoice Group value.   Both will be a List field.  Invoice is not necessary for all clients.
  - See appendix document to learn how to determine the Group Codes
4.	Custom Fields:
  - Partner must determine the base record custom field(s).  These fields will vary per client.
  - Partner must determine if the custom field(s) are defined as a List field.
          * If the field has a List, then the Partner must locate the List values in order to populate the List Item Code for each base employee record
          * The List can be configured as a multi-level list (aka “Connected List”).
  - See Appendix document to learn how to obtain the above data.

#### Standard-to-Professional Upgrade Edition:
1.	Same as Professional except the Reimbursement Method field:
  - See Appendix document for more information.
2.	Partners need to contact Concur to ensure everyone is on the same page.

#### Appendix:	How to Provision a Base User Record

See attached document for the APIs to use and the steps to take in your app to successfully post a base user record.

#### Reminder:

Communicate to the client the likelihood that they will need to import files to accommodate the Expense features that they have elected to use.

Standard Edition clients that are not using extended features can use the User Provisioning app to add records without having to import additional data.  However, even some Standard Edition features require additional file imports or manually added information in Concur by the client.
