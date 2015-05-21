---
title: Digital Tax Invoices Web Service
layout: conceptual
---

## Description
The Digital Tax Invoice web service allows digital tax invoice validators to view tax invoices and update them with a validation status. This web service currently supports the Comprobante Fiscal Digital (CFD) digital tax invoice format used in Mexico. Other countries may be supported in future releases.

##  Process
The Digital Tax Invoice upload feature in Concur Expense allows users in the supported countries to attach the Digital Tax Invoice (CFD) to an expense. Once the tax invoice (in XML) has been added to an expense report, the Digital Tax Invoice web service will allow third-party validators to use the Concur Platform to view and validate the tax information. The validators send their results back to Concur using the web service. The results appear in the expense report for processors and workflow steps to evaluate. 

## Product Restrictions

This web service is designed for use by third-party tax invoice validators. The validators must create a partner application on the Concur Platform, then the Concur client must grant access to the partner application before the validator can view their data.

Concur products are highly configurable, and not all clients will have access to all features.

Partner developers must determine which configurations are required for their solution prior to the review process. Use the [Developer Forum][2] if you have questions about the configuration settings

Partner applications must complete the [Concur application review process][3] before they can access production user data.

## Resources
[Digital Tax Invoices ][4]

##  Concur Expense Configuration
The Digital Tax Invoice feature must be activated in Concur Expense before clients can use this feature. The feature is activated in the Group Configuration.


[1]: https://developer.concur.com/api-documentation/core-concepts
[2]: https://developer.concur.com/forums/concur-connect
[3]: https://developer.concur.com/node/624/
[4]: https://developer.concur.com/digital-tax-invoices/digital-tax-invoices-resource

