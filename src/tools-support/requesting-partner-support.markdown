---
title: Request Support - Partners
layout: reference
---

[Login and open a partner support case](https://sapconcur.my.salesforce.com/secur/login_portal.jsp?orgId=00D600000007Dq3&portalId=06060000000PrEi)

**App Center Partners should never instruct a customer to log a ticket directly into SAP Concur Customer Support**

* The Partner must log the case if the issue is related to the integration between SAP Concur and the Partner.
* If you are an established App Center Partner and do not have log in credentials to the partner support portal please send an email to  [App Center Alliance](mailto:concur_appcenteralliance@sap.com?Subject=Support%20Portal%20Credentials) to request.

Partner cases must include the following:

* App Name: Partners may have more than one certified app.
* Customer Name: This is the name that SAP Concur will recognize.
* For Partner apps certified after September 2017, tickets must include:
  * The Entity Code -- available via the Company Info API.
  * The `concur-correlationId` from the API response.
* Reproduction steps:
  * Provide contextual information related to the issue so support engineers have an understanding of what the integration is attempting to accomplish.
* If applicable:
  * Employee Name
  * Expense Report Name, Travel Request Name, Payment Request Name, etc.
  * Transactional data such as expense type, date, amount, etc.
* API related information:
  * Refresh Token: Never supply this via email.
  * API Request Information
    * URI
    * Include Method - `GET`, `POST`, `PUT`, `POST`
    * `POST` payload.
  * API Response Information
    * All HTTP Headers
    * Response payload.
  * Additional log information relevant to the issue.
