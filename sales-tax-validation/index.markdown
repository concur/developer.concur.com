---
title: Sales Tax Validation 
layout: conceptual
---




##  Description

Validates sales tax amounts in invoces. You can use SalesTaxValidationRequest to:

* Retrieve invoices for calculating taxes.
* Update invoices with a calculated tax amount and tax rate based on specific invoice fields.

##  Version

3.0

##  URIs

`https://{InstanceURL}/api/v3.0/invoice/salestaxvalidationrequest`

##  Content types

* application/xml
* application/json

##  Operations
* [GET / invoice/salestaxvalidationrequest](https://www.concursolutions.com/api/docs/index.html#!/SalesTaxValidationRequest/Get_offset_limit_modifiedafter_get_0) — Get invoices for calculating tax. It supports request parameters for specifying a page offset for displaying results, limiting the number of invoices retrieved, and filtering results for invoices modified after a specific date.
* [PUT / invoice/salestaxvalidationrequest](https://www.concursolutions.com/api/docs/index.html#!/SalesTaxValidationRequest/Put_invoice_put_1) — Updates invoices with a calculated tax amount and tax rate.

##  Works with these Concur products
* **Invoice** for Concur Professional
* **Invoice** for Concur Standard
