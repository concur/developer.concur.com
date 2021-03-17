---
title: Spend User
layout: reference
---

{% include prerelease.html %}

Spend User Provisioning allows callers to provision a user in the SAP Concur Spend domain. This is an asynchronous downstream process from the User Provisioning Service. Currently spend user data can be created, modified and replaced with the POST, PATCH and PUT provisioning operations respectively. At this time, DELETE of spend user data is not supported. The retrival of spend user data is supported through a couple GET endpoints. One that can retrieve a filtered and paginated set of all spend users in a company. Another that can retrieve a specific spend user data using their unique identifier.

> **Limitations**: This API is only available to partners who have been granted access by SAP Concur. Access to this documentation does not provide access to the API.

- [Products and Editions](#products-editions)
- [Scope Usage](#scope-usage)
- [Dependencies](#dependencies)
- [Access Token Usage](#access-token-usage)
- Spend User Provisioning and Modification
- Spend User Retrieval
- Spend User Role Code Definition

## <a name="products-editions"></a>Products and Editions

- Concur Expense Professional Edition
- Concur Expense Standard Edition
- Concur Invoice Professional Edition
- Concur Invoice Standard Edition
- Concur Request Professional Edition
- Concur Request Standard Edition

## <a name="scope-usage"></a>Scope Usage

| Name                           | Description                    | Endpoint                |
| ------------------------------ | ------------------------------ | ----------------------- |
| `spend.user.general.read`      | View spend user information.   | `/spend/v4/Users`       |
| `spend.user.general.writeonly` | Change spend user information. | `/provisioning/v4/Bulk` |

- Note: In addition to the spend scopes, you will need the scopes listed in core user provisioning in order to provision core user data via the `/provision/v4/Bulk` endpoint.

## <a name="dependencies"></a>Dependencies

SAP Concur users must purchase Concur Expense in order to use the spend extensions to provision spend related data. This API is only available to approved early access partners. Please contact your SAP Concur representative for more information.

## <a name="access-token-usage"></a>Access Token Usage

The spend user APIs require a valid scope in order to successfully authenticate. The access token that is passed must contain a scope listed above that is specified for the API that is trying to be used.

This API supports company level access tokens.

## <a name="spend-user-provisioning"></a>Spend User Provisioning and Modification

Please refer to the spend user provisioning documentation for more information on this process.

## <a name="spend-user-retrieval"></a>Spend User Retrieval

Please refer to the spend user retrieval documentation for more information on this process.

## <a name="spend-role-scopes"></a>Spend Role Scopes

Please refer to the spend role scope documentation for more information on this process.
