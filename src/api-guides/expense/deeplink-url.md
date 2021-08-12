---
title: Deeplink URL Integration
layout: reference
---

The Deeplink URL integration provides the ability for a user in a third party website or portal to access the resource in Concur Expense. This is useful when the user needs to navigate to the Concur Solutions website or the Concur Mobile app to complete their operation on the resource or requires more insights on the resource than that provided in the third party website or portal.  

{% include prerelease.html %}

> **Limitations**: This integration is only available to partners who have been granted access by SAP Concur and to customers who either user username/password or SSO SAML2 implementation for autheticating into Concur Solutions. Access to this documentation does not provide access to the integration.   

* [Scope Usage](#scope-usage)
* [Datacenter Availability](#datacenter-availability)
* [Integration Details](#integration-details)
* [Process Flow](#process-flow)

## <a name="scope-usage"></a>Scope Usage

Required Scopes:

| Name|Description|Endpoint|
| ---|---|---|
|`expense.report.read`| Get information about expense reports.|GET|
|`expense.report.readwrite`|Read and write expense report headers.|PATCH|
|`user.read`|Get User Information, necessary for `userID`.|GET|

## <a name="datacenter-availability"></a>Datacenter Availability

This functionality is available to SAP Concur clients hosted in the US and EMEA datacenter only. SAP Concur clients must purchase Concur Expense in order to use this integration capability. 

## <a name="integration-details"></a>Integration Details

**URL Structure:** 
```shell 
https://www.concursolutions.com/goto/expense-report/{reportID}?companyUUID={companyUUID}&context={CONTEXT}
```

|Name|Type|Format|Description|
|---|---|---|---|
|`reportID`|`string`|PATH|**Required** The 20-character unique identifier of the report that is being read.|
|`companyUUID`|`string`|QUERY|**Optional** The unique identifier of the company, in UUID format, to which the expense report belongs to.|
|`context`|string|QUERY|**Optional** The access level of the SAP Concur user, which determines the form fields they can view/modify. Supported values: TRAVELER, MANAGER or PROCESSOR.|

When the deep link URL is generated without the company UUID, the user will be prompted with a Concur sign in page to provide Concur login ID (which they may or may not know) in order to deduce the company UUID. Then, the user will be subsequently prompted with the identity provider(IdP) sign in page to provide the appropriate login ID, which is actually used for authentication purposes.
Example: 
```shell
https://www.concursolutions.com/goto/expense-report/474EB203C0DE4F08A517?companyUUID=ae4a796a-68da-4b80-b508-36022e2bacef
```

Currently, this deep link URL will support the feature to access SAP Concur solutions via SSO or username/password authetication when launched from third party applications. When clicked, this link will:
**On Web UI:** Enable the user to access the specific report whose summary or link they were viewing in the third-party application.
**On Mobile UI:** Enable the user to access the specific report whose summary they were viewing in the third-party application’s mobile app

**Pre-requisites:** 
* The user must already exist as an active user in the SAP Concur solution with a Concur Expense role such as Expense User, Expense Manager or Expense Processor 
*	If multiple identity providers(IdPs) are in use, the user may be required to select the correct IdP or provide the login credentials prior to the SSO process within the SAP Concur solution. 



Details required for integration.

## <a name="process-flow"></a>Process Flow

![Process Flow for Deeplink URL for an Expense Report](./Deeplink-url.png)
