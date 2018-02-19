---
title: Request Support - Partners
layout: reference
---

<a class="btn dark-blue" href="https://sapconcur.my.salesforce.com/secur/login_portal.jsp?orgId=00D600000007Dq3&portalId=06060000000PrEi" target="_blank">
  <i class="fa fa-sign-in" aria-hidden="true"></i> Partner Support Case Login
</a>

**App Center Partners should never instruct a customer to log a ticket directly into Concur Customer Support** - If the issue is related to the integration between Concur and the Partner, the Partner must log the case. If you are an established App Center Partner and do not have log in credentials to the partner support portal, please write to <a href="mailto:appcenteralliance@concur.com?Subject=Support%20Portal%20Credentials">App Center Alliance</a> with your request.

Partner cases must include the following:

1. App Name (Partners may have more than one certified app).
2. Customer Name (the name that Concur recognizes).
    1. For Partner apps certified after September 2017, tickets must include the Entity Code (via the Company Info API) & the Correlation ID from the API response.
3. Reproduction steps:
    1. provide contextual information related to the issue so our Engineers have an understanding of what your integration is attempting to do.
4. If applicable:
    1. Employee Name
    2. Expense Report Name, Travel Request Name, Payment Request Name, etc.
    3. Transactional data such as expense type, date, amount, etc.
5. API-related information:
    1. Refresh Token (never supply this via email)
    2. URL being requested
        1. include Method (GET, POST, PUT)
    3.  POST Body (if applicable)
    4. API Response
    5. Additional log information relevant to the issue (do not send more than is necessary)
