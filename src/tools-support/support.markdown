---
title: Support Options
layout: reference

redirect_from:
  - /docs-and-resources/support/index.html
  - /tools-support/requesting-partner-support.html
---

## Support Scenarios

>**Note**: For issues with a partner app, please contact the partner’s support desk. If they can’t resolve the issue they will file an SAP Concur support ticket.

* **Partners** have two choices depending on the scenario.
  * Non-technical issues contact your Alliance Manager or the [Alliance Team](mailto:concur_AppCenterAlliance@sap.com).
  * For technical issues [log a support case](#log-a-support-case).
* **Company Administrators** access the [FAQ and other resources](https://www.concur.com/en-us/support) to get the help you need.
* **Individual Users** of SAP Concur products should request assistance from their company's internal help desk or their company's SAP Concur administrator.

## Maintenance Schedule and Service Status

The SAP Concur platform undergoes routine maintenance each weekend, and releases updates monthly. During these periods, the service may be unavailable. Unplanned maintenance is performed rarely, and limited to high priority fixes. During downtime, any request to the SAP Concur Platform will receive an HTTP 503 error code. To check the current status see [Service Status](https://open.concur.com) where a message will be posted during planned maintenance.

#### Monthly Release Schedule

For details regarding planned releases, see the [SAP Concur Release Calendar](https://www.concurtraining.com/customers/tech_pubs/ReleaseCalendar/_ReleaseCalendar_client.htm).

## <a name="log-a-support-case"></a>How To Log a Support Case

If you are an existing partner and need support from SAP Concur, please click the link below to open a support case. If you do not have login credentials to the partner support portal, please email [App Center Alliance](mailto:concur_appcenteralliance@sap.com?Subject=Support%20Portal%20Credentials) to request them.

[Login and open a partner support case](https://sapconcur.my.salesforce.com/secur/login_portal.jsp?orgId=00D600000007Dq3&portalId=06060000000PrEi)

Partner cases must include the following:

* App Name: Partners may have more than one certified app.
* Customer Name: This is the name that SAP Concur will recognize.
* For Partner apps certified after September 2017, tickets must include:
  * The `CompanyUUID` -- available via the Company Info API.
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
