---
title: Request Support - Partners
layout: reference
---

[Login and open a partner support case](https://sapconcur.my.salesforce.com/secur/login_portal.jsp?orgId=00D600000007Dq3&portalId=06060000000PrEi)

**App Center Partners should never instruct a customer to log a ticket directly into Concur Customer Support**

* The Partner must log the case if the issue is related to the integration between Concur and the Partner.
* If you are an established App Center Partner and do not have log in credentials to the partner support portal please send an email to  [App Center Alliance](mailto:appcenteralliance@concur.com?Subject=Support%20Portal%20Credentials) to request.

Partner cases must include the following:

1. App Name
  1. Partners may have more than one certified app.
1. Customer Name
  1. This is the name that Concur will recognize.
  1. For Partner apps certified after September 2017, tickets must include:
    1. The Entity Code -- available via the Company Info API.
    1. The `concur-correlationId` from the API response.
1. Reproduction steps:
  1. Provide contextual information related to the issue so support engineers have an understanding of what the integration is attempting to accomplish.
1. If applicable:
  1. Employee Name
  1. Expense Report Name, Travel Request Name, Payment Request Name, etc.
  1. Transactional data such as expense type, date, amount, etc.
1. API related information:
  1. Refresh Token
    1. Never supply this via email.
  1. API Request Information
    1. URI
    1. Include Method - `GET`, `POST`, `PUT`, `POST`
    1. `POST` payload.
  1. API Response Information
    1. All HTTP Headers
    1. Response payload.
  1. Additional log information relevant to the issue.
