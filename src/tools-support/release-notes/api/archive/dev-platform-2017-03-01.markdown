---
title: SAP Concur Developer Platform Release Notes - March 2017
layout: reference
---

* [Digital Tax Invoice APIs](/api-explorer/v3-0/DigitalTaxInvoices.html)
* [Digital Tax Invoice PUT](/api-reference/expense/digital-tax-invoices/digital-tax-invoice.html#put)

Concur has updated the Digital Tax Invoice API to stop requiring the company admin to enter an AccountID when enabling an app that uses this API. Validation partners that use the API will still see the AccountID field in the API response, however the value will be NOACCTID for new clients. Clients that enabled a Digital Tax Invoice app prior to this change will retain their AccountID value.

This update allows the Digital Tax Invoice applications to be enabled in the EMEA datacenter. The Account ID value is not used in the downstream process by the validation partners and therefore, was deemed unnecessary to store within Concur.

Concur will update the API in the March 18 2017 release, and developers currently using it will not need to make any changes.
