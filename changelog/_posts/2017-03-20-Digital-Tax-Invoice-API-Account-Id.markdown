---
layout: post
title: Digital Tax Invoice API – AccountID Field Changes
date: 2017-03-20
tags: 
      - Digital Tax Invoice
      - Account ID
references:
    - url: api-explorer/v3-0/DigitalTaxInvoices.html
      link: Digital Tax Invoice APIs
    - url: /api-reference/expense/digital-tax-invoices/digital-tax-invoice.html#put
      link: Digital Tax Invoice PUT 
author: Sarra Loew
redirect_from: 2017/03/20/digital-tax-invoice-account-id.html
---

Digital Tax Invoice API – AccountID Field Changes 
------------------------------------------------- 

Concur has updated the Digital Tax Invoice API to stop requiring the company admin to enter an AccountID when enabling an app that uses this API. Validation partners that use the API will still see the AccountID field in the API response, however the value will be NOACCTID for new clients. Clients that enabled a Digital Tax Invoice app prior to this change will retain their AccountID value. 

This update allows the Digital Tax Invoice applications to be enabled in the EMEA datacenter. The Account ID value is not used in the downstream process by the validation partners and therefore, was deemed unnecessary to store within Concur. 

Concur will update the API in the March 18 2017 release, and developers currently using it will not need to make any changes. 

For more information, refer to: [https://developer.concur.com/api-reference/expense/digital-tax-invoices/digital-tax-invoice.html](https://developer.concur.com/api-reference/expense/digital-tax-invoices/digital-tax-invoice.html)
