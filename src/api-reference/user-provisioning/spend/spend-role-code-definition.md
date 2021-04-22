---
title: Spend Role Codes
layout: reference
---

{% include prerelease.html %}

## Menu

* [Getting Started](./v4.spend-user-get-started.html)
* [Spend User Provisioning](./v4.spend-user-provisioning.html)
* [Spend User Retrieval](./v4.spend-user-retrieval.html)

## Spend Role Codes

* [Column Description](#column-description)
* [Expense Product Roles](#expense-roles)
* [Request Product Roles](#request-roles)
* [Invoice (Payment) Product Roles](#invoice-roles)
* [Reporting Product Roles](#reporting-roles)

### <a name="column-description"></a>Column Description

|Role Code|Role Full Name|Description|Group-Aware|Product Area|
|---|---|---|---|---|
The role code value that can be used for provisioning with the `Spend Role Extension`.|The full name of the role.|The usage of the role.|When assigning this role, one or more groups must be given.|Shared with two or more SAP Concur products.|

---

### <a name="expense-roles"></a>Expense Product Roles

|Role Code|Role Full Name|Description|Group-Aware|Product Area|
|---|---|---|---|---|
|`SHD_APP_CENTER_ADMIN`|App Center Listing Administrator|The user assigned this role can submit App Center listings. This role is only assigned by SAP Concur to certain App Center partners.|N|Y|
|`EXP_ATTENDEE_ADMIN`|Attendee Administrator|The user assigned this role can view, modify, and activate or inactivate any attendee record in the system.|Y|Y|
|`EXP_ATTENDEE_ADMIN_RO`|Attendee Administrator (Read only)|The user assigned this role is considered a read-only auditor. The user can access and view but not modify and activate or inactivate an attendee record in the system.|Y|Y|
|`SHD_AUTHORIZED_APPROVER`|Authorized Approver|This is special approver role. The user assigned this role can approve, with a specified limit, specific expense reports.|N|N|
|`N/A`|Account Code Administrator|**NOTE:** This field is not supported.|N|N|
|`EXP_AUTH_REQUEST_ADMIN`|Authorization Request Administrator|The user assigned this role can view and update authorization requests in Authorization Administrator.|Y|N|
|`EXP_AUTH_REQUEST_APPROVER`|Authorization Request Approver|The user assigned this role can approve authorization requests in Expense Reports.|N|N|
|`SHD_BILLING_ATTRIBUTES_USER`|Billing Attributes User|The user assigned this role can manage billing related settings for the entity.|N|Y|
|`SHD_BUDGET_ADMIN`|Budget Administrator|**For Budget Insight (Legacy):** The user assigned this role can set budget amounts and assign budget approvers.<br>**For Budget:** The user assigned this role can configure the Fiscal Calendar, Budget Categories, Budget Tracking Fields, Budget Items, and Budget Settings. <br>The Budget Administrator can see the budget amounts as configured in the Budget Items, but not the budget actuals as is shown in the dashboards. Budget Administrators have access to all budget items within an entity.|N|Y|
|`SHD_BUDGET_APPROVER`|Budget Approver/Manager| **For Budget Insight (Legacy):** The user assigned this role can review and approve expense reports using real-time budget figures.<br>**For Budget:** The user assigned this role can approve invoices, purchase requests, and expense reports and can view budgets in the budget dashboards. <br>The Budget Approver does not have access to the budget configuration information.|N|Y|
|`SHD_BUDGET_OWNER`|Budget Owner|The user assigned this role owns the budget and can view budgets in the dashboards. The Budget Owner does not have access to the budget configuration information.|N|Y|
|`SHD_BUDGET_VIEWER`|Budget Viewer|The user assigned this role views budgets in the dashboards. There can be one or several budget viewers. The Budget Viewer does not have access to the budget configuration information.|N|Y|
|`EXP_PCARD_ADMIN`|Card Program Administrator|The user assigned this role manages the company's purchase card program and statement periods.|Y|N|
|`EXP_PROCESSOR_CR`|Central Reconciliation Processor|The user assigned this role processes (matches) invoice transactions associated with requests generated within the Request product.|Y|N|
|`TRAVEL_USER`|Cliqbook User| The user assigned this role can integrate with Cliqbook service.|N|N|
|`EXP_CONFIG_ADMIN_CLIENT`|Client Expense Administrator|**This custom role is not available to all clients; availability is based on the client configuration.** This field combines permissions from the Expense Configuration Administrator role and the Shared Configuration Administrator. The user assigned this role can access these options (some may allow add/edit; some may be view-only): Accounting administration, audit rules, car configuration, email reminders, exceptions, expense types, locations, policies, travel allowance, workflows.|Y|N|
|`STATEMENT_APPROVER`|Company Bill Statement Approver|The user assigned this role approves statement reports. This user must also be assigned the **Expense Approver** role.|N|N|
|`STATEMENT_PROCESSOR`|Company Bill Statement Processor|The user assigned this role views and updates statement reports in Expense Processor. This user must also be assigned the **Expense Processor** role.|Y|N|
|`STATEMENT_PROCESSOR_AUDITOR`|Company Bill Statement Processor (Audit)|The user assigned this role views statement reports in Expense Processor in read-only format. This user must also be assigned the **Expense Processor (Audit)** role.|N|-|
|`STATEMENT_PROCESSOR_ADMIN`|Company Bill Statement Processor Manager|The user assigned this role views, updates, and deletes statement reports in Expense Processor. This user must also be assigned the **Expense Processor Manager** role.|Y|N|
|`STATEMENT_USER`|Company Bill Statement User|The user assigned this role reviews and submits the purchasing card transactions in the statement reports. This user must also be assigned the **Expense User** role.|N|N|
|`SHD_COMPANY_INFO_ADMIN`|Company Info Administrator|The user assigned this role can update the **Company Info** section of the home page.|N|Y|
|`N/A`|Concur Mobile User|**NOTE:** This field is not supported.|N|N/A|
|`SHD_COST_OBJECT_APPROVER`|Cost Object Approver|This is special approver role, which is not assigned the same way as other roles.|N|N|
|`SHD_DATA_RETENTION_ADMIN`|Data Retention Administrator|The user assigned this role views and configures the data retention policy for the company and can hold and purge individual users.|N|Y|
|`N/A`|Digital Compliance Administrator|**NOTE:** This field is not supported.|N|N|
|`SHD_EMPLOYEE_ADMIN`|Employee Administrator|The user assigned this role can add and manage employees, including assigning roles, delegates, and preferences. The user can only assign the basic user roles (Expense User, Travel User), using the check boxes on the User Details page. They may also view and optionally edit and register cars on behalf of a user.|Y|Y|
|`SHD_EMPLOYEE_ADMIN_RO`|Employee Administrator (Read Only)|The user assigned this role is considered a read-only auditor. The user can view but not add or edit employee records.|N|Y|
|`N/A`|Employee Maintenance|**NOTE:** This field is not supported.|Y|Y|
|`EXP_APPROVER`|Expense Approver|The user assigned this role can approve expense reports within an assigned group.|N|N|
|`EXP_CASHADVANCE_ADMIN`|Expense Cash Advance Administrator|The user assigned this role can view, issue, and manage cash advance requests.|Y|N|
|`EXP_CARD_ADMIN`|Expense Company Card Administrator|The user assigned this role can assign and unassign company cards, and map expense types to merchant category codes.|Y|N|
|`EXP_CONFIG_ADMIN`|Expense Configuration Administrator|**This role is intended to be assigned to and used by SAP Concur internal staff only, with few exceptions.** The user assigned this role can fully manage (add, edit, delete) Expense group configurations, Policies, Expense-based forms and fields, validations, and vendor lists, Expense report and authorized approver workflows, Audit rules, Expense types and expense categories, Payment types, Account codes, Exceptions, Car configuration and reimbursement, Receipt handling, including payment hold, scan configurations, receipt limits, and receipt imaging, Email reminders, Reimbursement currencies, Offline settings, Configuration change log (view only), Taxability and Deductibility Calculation Service.<br>**NOTE:** A user cannot be assigned the **EXP_CONFIG_ADMIN** and the **EXP_CONFIG_ADMIN_RO**.|Y|N|
|`EXP_CONFIG_ADMIN_RO`|Expense Configuration Administrator (Restricted)|The user assigned this role can fully manage (add, edit, delete) vendor list items, authorized approvers, audit rules, account codes, exceptions, personal and company car rates, receipt handling including receipt limits, payment hold, and scan configurations, email reminders, configuration change log (view only), taxability and deductibility calculation service.|Y|N|
|`EXP_PROCESSOR`|Expense Processor|The user assigned this role can view and update expense reports within Expense Processor. <br>The `Access for Processor` field limits the reports the processor can view to all reports excluding returned reports, all reports including returned reports, or only reports pending processor step and beyond. <br>**NOTE:** The user should only be assigned one of the Expense Processor roles. If the user is assigned multiple Expense Processor roles, the role with the greatest level of access will be applied. The levels of access, from highest to lowest, are: Expense Processor Manager (1), Expense Processor (2), Expense Processor (Audit) (3).|Y|N|
|`EXP_PROCESSOR_AUDIT`|Expense Processor (Audit)|The user assigned this role can view expense reports within Expense Processor. <br>**NOTE:** The user should only be assigned one of the Expense Processor roles. If the user is assigned multiple Expense Processor roles, the role with the greatest level of access will be applied. The levels of access, from highest to lowest, are: Expense Processor Manager (1), Expense Processor (2), Expense Processor (Audit) (3).|Y|N|
|`EXP_PROCESSOR_ADMIN`|Expense Processor Manager|The user assigned this role can view, update, and delete expense reports within Expense Processor. The `Access for Processor` field limits the reports the processor can view all reports excluding returned reports, all reports including returned reports, or only reports pending processor step and beyond. <br>**NOTE:** The user should only be assigned one of the Expense Processor roles. If the user is assigned multiple Expense Processor roles, the role with the greatest level of access will be applied. The levels of access, from highest to lowest, are: Expense Processor Manager (1), Expense Processor (2), Expense Processor (Audit) (3).|Y|N|
|`EXP_PROXY_USER`|Expense Proxy Logon|The user assigned this role can log on to Expense and act as a proxy user for other employees within an assigned group.|Y|N|
|`EXP_RECEIPT_PROCESSOR`|Expense Receipt Processor|The user assigned this role can update the receipt status for an expense report.|N|N|
|`N/A`|Expense Type Administrator|**NOTE:** This field is not supported.|N|N|
|`EXP_USER`|Expense User|The user assigned this role can create and submit expense reports and cash advances if those features are used by the user's company.|N|N|
|`EXP_EMPLOYEE_ADMIN`|Employee Admin Permission on Expense Hierarchy|Can grant Expense Hierarchy Nodes permission to users in the Employee Admin.<br>**NOTE**: Each user assigned Employee admin must also be assigned permissions for reporting (BI), expense, and payment (Invoice). These additional permissions govern the roles the employee administrator can assign for the employees in his or her assigned groups.|Y|N|
|`EXP_FIND_ATTENDEES_USER`|Employee (while finding attendees)| Role code to determine the field access while searching attendees.|N|N|
|`EXP_EXTRACT_ADMIN`|Extract Administrator|Special role assigned by the SAP Concur Implementation department to clients who are transitioning from the Standard Edition to the Professional Edition. This role provides access to the File Export Configuration tool.|N|N|
|`N/A`|Expense Processor(Concur Audit)|**NOTE:** This field is not supported.|N|N|
|`EXP_FB_TAX_ADMIN`|Fringe Benefits Tax Administrator|Along with the Tax Administration role, the user assigned this role can manage fringe-benefit tax.|N|N
|`SHD_IMPORT_EXTRACT_ADMIN_RO`|Import/Extract Monitor (formerly Integration Administrator - Restricted)|A user assigned this role can view details of import, extract, archive, and reporting consolidation jobs, job schedule, system logs. Depending on configuration, this user may also be able to upload import files, and download extract files.|N|Y|
|`SHD_PASSWORD_ADMIN`|Password Manager|The user assigned this role can update passwords for Expense users. <br>User will have read only access to the following fields on the User Details page in User Administration: Title, First Name, Middle Name, Nickname, Last Name, Suffix, and Email.<br>**Preventing Access**: A module property is available to restrict this role from changing password. Please contact SAP Concur directly to have the Password Access Restriction feature activated.<br>**NOTE:** The users with Expense and either Travel or Invoice have one password for all applications. When any of the Password Manager roles changes a password, it changes for all.|Y|Y|
|`EXP_REIMBURSEMENT_AUDITOR`|Reimbursement Auditor|A user assigned this role can view Expense Pay functionality: Funding Accounts, Batch Configurations, Card Programs, Expense Pay Settings, Current and Historical Batch List, Daily Funding and Returned Amounts, Payment Demand List, Report Payees List, and Employee Banking Status|N|Y|
|`EXP_REIMBURSEMENT_APPROVER`|Reimbursement Manager|A user assigned this role can fully manage (add, edit, delete) Expense Pay functionality: Funding Accounts, Batch Configurations, Card Programs, and Expense Pay Settings. <br>In addition, a user assigned this role can view the following Expense Pay details: Current and Historical Batch List, Daily Funding and Returned Amounts, Payment Demand List, and Report Payees List. <br>Only global Reimbursement Managers can create and view payment demands: Employee Banking Status|Y|Y|
|`SHD_ROLE_ADMIN`|Role Administrator|A user assigned this role is granted access to the **Expense, Invoice,** and **Request** tabs through User Permissions.|Y|Y|
|`N/A`|Role Builder|**This role is intended to be assigned to and used by SAP Concur internal staff only.**|N|Y|
|`SHD_CONFIG_ADMIN`|Shared Configuration Administrator|**This role is intended to be assigned to and used by SAP Concur internal staff only, with few exceptions.** The user assigned this role can fully manage (add, edit, delete) Feature hierarchies for Expense Reports and Vendor Invoices, Employee group configurations, including assignment of the employee form, Employee forms and fields, validations, and custom and connected lists, Expense and payment delegate configurations, Reimbursement currencies, Imaging settings, Accounting structure (ledgers), Localization tasks, Configuration change log (view only). Hierarchy segment values are used to identify the hierarchy node for which this employee has approval rights. If blank, resolves to the global group.<br>**NOTE:** A user cannot be assigned the **SHD_CONFIG_ADMIN** and the **SHD_CONFIG_ADMIN_RO**.|Y|Y|
|`SHD_CONFIG_ADMIN_RO`|Shared Configuration Administrator (Restricted)|The user assigned this role can access locations (add or edit), view, add, edit, and delete custom list items, and view the configuration change log.|Y|Y|
|`SHD_TAX_ADMIN`|Tax Administrator|The user assigned this role can fully manage (add, edit, delete) value added tax (VAT) tax configurations, and rates.|N|N|
|`SHD_TAX_ADMIN_RO`|Tax Administrator (Restricted)|The user assigned this role can view tax configurations.|N|N|
|`SHD_TRAINING_ADMIN`|Training Administrator|The user assigned this role can access the Training Administration tool to configure client-preferred Training landing page and the contents and contact information that displays.|N|Y|
|`N/A`|Travel and Expense Pilot User|**Do not use: this role is retired.**|N/A|N/A|
|`EXP_TRAVEL_AND_EXPENSE_USER`|Travel and Expense User|**NOTE:** This field is not supported.|N|Y|
|`N/A`|UI Preview|**NOTE:** This field is not supported.|N|Y|
|`SHD_WEB_SERVICES_ADMIN`|Web Services Administrator|The user assigned this role can access the **Partner Application Administration** page to register or enable partner applications to access the company’s data using the SAP Concur web services. The partner applications are required for some integrations, and do not appear in the SAP Concur App Center. They may also access the **Manage User Apps** page to restrict the User applications in the SAP Concur App Center for their company's users, as well as Enable Enterprise partner applications within the SAP Concur App Center.|N|SAP Concur Connect|

### <a name="request-roles"></a>Request Product Roles

|Role Code|Role Full Name|Description|Group-Aware|Product Area|
|---|---|---|---|---|
|`SHD_DATA_RETENTION_ADMIN`|Data Retention Administrator|The user assigned this role views and configures the data retention policy for the company and can hold and purge individual users.|N|Y|
|`REQ_PROCESSOR_ADMIN`|Request Administrator|**This is one of the Request processor roles.**<br>The user assigned this role can view and fully manage virtually all requests.|Y|N|
|`REQ_APPROVER`|Request Approver|The user assigned this role can approve requests within their assigned group.|N|N|
|`REQ_PROCESSOR_AUDIT`|Request Auditor|**This is one of the Request processor roles.**<br>This is a read-only role. The SAP Concur client can assign this role to TMCs, to its own internal travel agent(s), or to any other user that needs read-only access to requests.|Y|N|
|`REQ_CONFIG_ADMIN`|Request Configuration Administrator|**This role is intended to be assigned to and used by SAP Concur internal staff only, with few exceptions.**<br>The user assigned this role can fully manage (add, edit, delete) all **request-related** features on the Request Admin menu.<br>**NOTE:** A user cannot be assigned the **REQ_CONFIG_ADMIN** and the **REQ_CONFIG_ADMIN_RO**.|Y|N|
|`REQ_CONFIG_ADMIN_RO`|Request Configuration Administrator (restricted)|The user assigned this role can fully manage (add, edit, delete) list management, locations, segment types, and travel agency offices|Y|N|
|`REQ_EVENT_ADMIN`|Request Event Manager|The user assigned this role can create a primary event request for multiple event attendees.<br>This role must be assigned with the Request Proxy Logon role.|N|N|
|`REQ_PROXY_USER`|Request Proxy Logon|The user assigned this role can log on to Request and act as a proxy user for other employees within an assigned group.|Y|N|
|`REQ_USER`|Request User|The user assigned this role can create and submit requests.|N|N|
|`REQ_RISK_ADMIN`|Risk Manager|This permission appears only if Request is integrated with Concur Risk Management. The user assigned this role can process requests waiting for Risk Manager processing and view submitted requests with risk.<br>**NOTE**: A user cannot be assigned this role and one of the other Request processor roles.|Y|N|
|`REQ_PROCESSOR`|TMC Agent|**This is one of the Request processor roles.**<br>The SAP Concur client assigns this role to one or more agents of its Travel Management Company (TMC) or to the client's internal travel agent(s). In some regions, it is appropriate for the TMC Agent to access the request after the user submits it but before the approver receives it. This way, the TMC Agent can add/edit the segment amounts – ensuring accuracy for the request approver.|Y|N|

### <a name="invoice-roles"></a>Invoice (Payment) Product Roles

|Role Code|Role Full Name|Description|Group-Aware|Product Area|
|---|---|---|---|---|
|`SHD_BUDGET_ADMIN`|Budget Administrator|The user assigned this role can configure the Fiscal Calendar, Budget Categories, Budget Tracking Fields, Budget Items, and Budget Settings. The Budget Administrator can see the budget amounts as configured in the Budget Items, but not the budget actuals as is shown in the dashboards. Budget Administrators have access to all budget items within an entity.|N|Y|
|`SHD_BUDGET_APPROVER`|Budget Approver/Manager|The user assigned this role can approve invoices, purchase requests, and expense reports and can view budgets in the budget dashboards. The Budget Approver does not have access to the budget configuration information.|N|Y|
|`SHD_BUDGET_OWNER`|Budget Owner|The user assigned this role owns the budget and can view budgets in the dashboards. The Budget Owner does not have access to the budget configuration information.|N|Y|
|`SHD_BUDGET_VIEWER`|Budget Viewer|The user assigned this role views budgets in the dashboards. There can be one or several budget viewers. The Budget Viewer does not have access to the budget configuration information.|N|Y|
|`INV_PURCH_RECEIVER`|Central Receiver|The user assigned this role can add, edit, and delete purchase order receipts and receipt images. However, they cannot transmit or process purchase orders or invoices.|Y|N|
|`INV_IC_VERIFIER`|Client Managed Capture Verifier|The user assigned this role can verify the output of invoices in the client-managed version of Capture Processing.|N|N|
|`SHD_DATA_RETENTION_ADMIN`|Data Retention Administrator|The user is assigned this role views and configures the data retention policy for the company and can hold and purge individual users.|N|Y|
|`INV_EMPLOYEE_ADMIN`|Employee Admin Permission on Invoice Hierarchy|The user assigned this role can grant Invoice Hierarchy Nodes permission to users in the Employee Admin.<br>**NOTE**: Each user assigned employee admin must also be assigned permissions for reporting (BI), expense, and payment (Invoice). These additional permissions govern the roles the employee administrator can assign for the employees in his or her assigned groups.|Y|N|
|`INV_AP_USER`|Invoice AP User|The user assigned this role can create, assign, and reassign invoices. They can also reassign a different policy to an invoice and restore deleted invoices.|Y|N|
|`INV_APPROVER`|Invoice Approver|The user assigned this role can to approve invoices within an assigned group.|N|N|
|`INV_CONFIG_ADMIN`|Invoice(Payment) Configuration Administrator|**This role is intended to be assigned to and used by SAP Concur internal staff only, with few exceptions.**<br>The user assigned this role can fully manage (add, edit, delete) Invoice group configurations, Policies, Invoice-based forms, fields, and validations, Invoice and authorized approver workflows, Audit rules, Expense types, Account codes and account code hierarchy, Exceptions, Image handling, including scan configurations, invoice imaging, vendor imaging, Email reminders, Company Info, Configuration change log (view only).<br>**NOTE:** A user cannot be assigned the **INV_CONFIG_ADMIN** and the **INV_CONFIG_ADMIN_RO**.|Y|N|
|`INV_CONFIG_ADMIN_RO`|Invoice (Payment) Configuration Administrator (Restricted)|The user assigned this role can fully manage (add, edit, delete) authorized approvers, audit rules, account codes, exceptions, expense types, scan configurations, email reminders, and configuration change log (view only).|Y|N|
|`N/A`|Invoice Full User|**NOTE:** This field is not supported.|N|N|
|`N/A`|Invoice Pilot User|**NOTE:** This field is not supported.|N|N|
|`INV_PMT_MANAGER`|Invoice Payment Manager|A user assigned this role can fully manage (add, edit, delete) Invoice Pay functionality. This user can monitor and adjust Invoice Pay batches and invoices scheduled for payment and define the Checking and ACH funding accounts that are used for payment.|N|N|
|`INV_IMAGE_PROCESSOR`|Invoice Image Processor|The user assigned this role can update the status of receipt and invoice images.|N|N|
|`INV_PROCESSOR`|Invoice(Payment) Processor|The user assigned this role an view and update invoices within Invoice Processor. They may also assign or reassign invoices, and restore deleted invoices. <br>**NOTE**: The user should only be assigned one of the Invoice Processor roles. If the user is assigned multiple Invoice Processor roles, the role with the least level of access will be applied. The levels of access, from highest to lowest, are: Invoice Processor Manager (1), Invoice Processor (2), Invoice Processor (Audit) (3)|Y|N|
|`INV_PROCESSOR_AUDIT`|Invoice(Payment) Processor (Audit)|The user assigned this role can view invoices within Invoice Processor. <br>**NOTE**: A user cannot be assigned the Processor Audit role and any other Invoice (Payment) processor role.|Y|N|
|`INV_PROCESSOR_MANAGER`|Invoice(Payment) Processor Manager|The user assigned this role can view, update, and delete invoices within Invoice Processor.<br>**NOTE**: A user cannot be assigned the Invoice (Payment) Processor Manager role and an audit role.|Y|N|
|`INV_PROXY_USER`|Invoice(Payment) Proxy Logon|The user assigned this role can log on to Vendor Invoices and act as a proxy user for other employees within an assigned group.|Y|N|
|`INV_PURCH_USER`|Invoice Purchasing User|The user assigned this role cannot create and submit invoices but can be granted rights to change form field values to adjust totals, etc. in Invoice Purchase Order.<br>**NOTE:** This role is available only to users of Invoice.|N|N|
|`INV_RECEIPT_PROCESSOR`|Invoice(Payment) Receipt Processor|The user assigned this role can view and update invoices in Invoice Received status within Invoice Processor.|Y|N|
|`INV_TAX_ADMIN`|Invoice Tax Administrator|The user assigned this role can configure and activate the Tax Administration tool.|N|N|
|`INV_PMT_USER`|Invoice User|The user assigned this role can create and submit invoices.|N|N|
|`INV_VENDOR_ADMIN`|Invoice Vendor Manager|The user assigned this role can work with vendors, including approving new vendors, working with the master list, and mapping vendors.|Y|N|
|`INV_PURCH_ORDER_PROCESSOR`|Purchase Order Processor|The user assigned this role can process purchase orders in the Purchase Request module.|Y|N|
|`INV_PURCH_ORDER_PROCESSOR_AUDIT`|Purchase Order Processor (Audit)|The user assigned this role can view purchase orders within the purchase order processor and can view receipts within the purchase order processor. receipts.|Y|N|
|`INV_PURCH_REQ_APPROVER`|Purchase Request Approver|The user assigned this role can approve purchase requests in the Purchase Request module.|N|N|
|`INV_PURCH_REQ_PROCESSOR`|Purchase Request Processor|The user assigned this role can process purchase requests in the Purchase Request module.|Y|N|
|`INV_PURCH_REQ_PROCESSOR_AUDIT`|Purchase Request Processor (Audit)|The user assigned this role can view purchase requests within the purchase request processor.|Y|N|
|`INV_PURCH_REQ_PROXY_USER`|Purchase Request Proxy Logon|The user assigned this role can log on to Purchase Request and act as a proxy user for other employees within an assigned group.<br>**NOTE**: This role may proxy for any user assigned the Purchase Request User role.|Y|N|
|`INV_PURCH_REQ_USER`|Purchase Request User|The user assigned this role can create purchase requests in the Purchase Request module.|N|N|
|`INV_RECEIPT_USER`|Receipt User|The user assigned this role can enter, update, and delete receipt data for their own purchase orders.|N|N|

### <a name="reporting-roles"></a>Reporting Product Roles

|Role Code|Role Full Name|Description|Group-Aware|Product Area|
|---|---|---|---|---|
|`BUDGET_REPORTING_USER`|Budget Role for Cognos|The user assigned this role can access the Budget module in the Analysis/Intelligence data model.|Y|N|
|`REPORTING_CAS_ANALYST`|CAS Analyst|**NOTE: Do not use. This role is retired.**|Y|N|
|`REPORTING_BUSINESS_AUTHOR`|Cognos Business Author|The user assigned this role can use Analysis/Intelligence to view data for reports submitted at all hierarchical levels within their assigned groups (as well as any data not group-related). The user is assigned the Business license type, which restricts the features to which they have access. They may also run existing reports, create new reports or modify existing basic reports using the basic tool, Query Studio. <br>**NOTE**: A user cannot be assigned this role and the **Cognos Professional Author** or **Cognos Consumer roles**, only one of these three may be assigned.|Y|N|
|`REPORTING_CONSUMER`|Cognos Consumer|The user assigned this role can use Analysis/Intelligence to view data for reports submitted at all hierarchical levels within their assigned groups (as well as any data not group-related). The user is assigned the Consumer license type, which further restricts the features to which they have access. They may also run existing reports, with read-only access. <br>**NOTE**: A user cannot be assigned this role and the **Cognos Professional Author** or **Cognos Business Author roles**, only one of these three may be assigned.|Y|N|
|`REPORTING_PRO_AUTHOR`|Cognos Professional Author|The user assigned this role can use Analysis/Intelligence to view data for reports submitted at all hierarchical levels (no group assignment required). The user is assigned the Professional license type, which allows access to all features. They may also run existing reports, create new reports or modify existing basic reports using the basic tool, Query Studio, and create new reports or modify existing basic reports using the advanced tool, Report Studio. They can also schedule automatic report runs.|Y|N|
|`REPORTING_CONFIG_ADMIN`|Consolidation Configuration Administrator|This role is used by companies using the Reporting Database that wish to consolidate the data from the current version and previous versions.<br>The user assigned this role can map expense types and custom fields to a single consolidated definition, and adjust other consolidation settings. <br>**NOTE:** This role does not include access to Analysis/Intelligence.|N|N|
|`REPORTING_HIST_DATA_USER`|Cognos Hist Data Access|Cognos Hist Data Access.|N|N|
|`REPORTING_DASHBOARD_USER`|Dashboard User|**NOTE: Do not use. This role is retired.**|N|N|
|`REPORTING_EMPLOYEE_ADMIN`|Employee Admin Permission on Reporting Hierarchy|The user assigned this role can grant Reporting Hierarchy Nodes permission to users in the Employee Admin.<br>**NOTE**: Each user assigned Employee admin must also be assigned permissions for reporting (BI), expense, and payment (Invoice). These additional permissions govern the roles the employee administrator can assign for the employees in his or her assigned groups.|Y|N|
