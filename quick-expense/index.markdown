---
title: Quick Expense Web Service 
layout: conceptual
---




The Quick Expense web service gives developers the ability to easily create basic expenses without requiring any client or user specific Expense configuration data. Expense applications, such as Concur Expense or Concur Connect partner applications, can consume quick expenses, providing developers a way to create expense capture applications that are product independent. The Quick Expense format is designed to be an open expense format, allowing any developer who wants to work with expense data the chance to do so.

The Quick Expense format uses the minimum required fields, so that expenses can be created with almost any amount of expense data. Optional fields allow the developer to capture any additional data that the user provides. New quick expenses are associated to either the OAuth consumer, or in the case the OAuth consumer is a Concur Expense user, the supplied Concur user ID.

The Quick Expense web service works with any Concur Connect partner application that wants to post or get quick expenses. The owner for the quick expense must be a Concur Expense user. The Quick Expense web service is different from the Expense Report web service in that quick expenses aren't associated to an expense report.

The Quick Expense web service allows developers to:

* Post an expense entry to Concur without requiring any client specific configuration data.
* Get a list of quick expenses for a company or a user.

Concur Expense consumes quick expenses posted for OAuth Consumers that are Concur Expense users. Expense users can view quick expenses or add them to expense reports these ways:

* Using the Expenses area of the Concur mobile application
* Using the Smart Expenses list when creating a new report online
* Opening the Smart Expenses list by selecting the Import menu item on an existing report
**Who Should Use This Web Service? **

Developers who gather basic expense data and untrusted receipts (such as pictures of paper receipts or emails) can use this web service to create expenses in Concur. Quick expenses can be added to an expense report in Concur or any other Concur Connect partner application. The developers can send a receipt image using the [Imaging][1] web service, then use the identifier to attach it to the expense using Quick Expense.

[1]: https://developer.concur.com/imaging
