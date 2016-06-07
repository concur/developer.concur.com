---
layout: post
title: Quick Expense API Updated-Payment Type
date: 2016-03-18
tags:
    - Quick-Expense
    - Payment-Type
references:
    - url: /api-explorer/v3-0/QuickExpenses.html
      link: Quick Expenses v3
    - url: /api-reference-deprecated/version-one/quick-expense/quick-expense-resource-post.html
      link: Quick Expense POST v1
author: Sarra Loew
---

Concur has updated the Quick Expense API to correct the behavior of the PaymentTypeCode element. Prior to this release, the payment type code of a new quick expense would default to Cash, regardless of the value sent. In the March 2016 release, the Quick Expense API now applies the value sent in the PaymentTypeCode element, if the company’s configuration supports it.  

The payment types have the following configuration requirements:  

* **CASHX:** If user's group configuration has Cash as an active payment type, then the payment type will be set to Cash. If the group does not have Cash as an active payment type, and if the user's group configuration has Personal as active payment type, then the payment type will be set to Personal. If none of these payment types are active then the payment will default to the group’s default payment type. If there is no default payment type for the group, then the payment type will be set to Cash.

* **CPAID:** If user's group configuration has Company Paid as an active payment type and that payment type is set to default, then the payment type will be set to Company Paid. If the Company Paid payment type is not active then the payment will default to the group’s default payment type. If there is no default payment type for the group, then the payment type will be set to Cash.

* **PENDC:** If user's group configuration has Pending Card Transaction as an active payment type and that payment type is set to default, then the payment type will be set to Pending Card Transaction- but this will only happen if the user has at least one credit card assigned to them. If the Pending Card Transaction payment type is not active or the user does not have a credit card then the payment will default to the group’s default payment type. If there is no default payment type for the group, then the payment type will be set to Cash.  

**NOTE: The payment element is called ‘PaymentType’ in v1 Quick Expense API and it is called ‘PaymentTypeCode’ in v3.**
