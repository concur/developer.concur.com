---
title: Budget Tracking
layout: reference
---

### Overview

The new Budget Tracking API is in **Pre-release**. If you are interested in using the Budget Tracking API, then please contact your account manager for further details. 

This resource is used to retrieve information about budget's tracking fields for an entity. Every entity may have a specific set of budget tracking fields and every budget may enable any or all of the budget tracking fields. If there are tracking fields associated, the  budgets get matched to the Product only when the tracking field conditions are met. 

# Budget Tracking Fields

- [Retrive all budget tracking fields for an entity](#getall)
- [Schema](#schema)

## Version

4.0  


## <a name="getall"></a>Retrieve all Budget Tracking Fields

    GET  /budget/v4/budgetTrackingField 
    
HTTPie:

```shell
http https://us.api.concursolutions.com/budget/v4/budgetTrackingField 'Authorization:Bearer {YOUR ACCESS TOKEN}'
```

### Parameters

N/A

### Response

[Budget Tracking List Schema](#budgetTrackingList)

### JSON Example Response

```json
[
   {
        "budgetTrackingFieldName": "Cost Center",
        "fieldType": "LIST",
        "listSyncGuid": "8652CDF9C12B4051B8D180E20840CE9B",
        "fieldId": "86309e0c-913c-47a5-9bcf-24a05342c718",
        "budgetSequenceNumber": 2
    },
    {
        "budgetTrackingFieldName": "Company",
        "fieldType": "VARCHAR",
        "listSyncGuid": null,
        "fieldId": "d8f911a1-f298-4c65-b06b-710d482c9c46",
        "budgetSequenceNumber": 1
    },
    {
        "budgetTrackingFieldName": "Department",
        "fieldType": "LIST",
        "listSyncGuid": "8652CDF9C12B4051B8D180E2084Q412",
        "fieldId": "c4f721cb-8fc9-48cf-993e-5ea0edefcdbd",
        "budgetSequenceNumber": 3
    },
    {
        "budgetTrackingFieldName": "Vendor",
        "fieldType": "VARCHAR",
        "listSyncGuid": null,
        "fieldId": "bcc7ba39-a3a0-4267-84f4-1d5b439cce65",
        "budgetSequenceNumber": 5
    },
    {
        "budgetTrackingFieldName": "Region",
        "fieldType": "MLIST",
        "listSyncGuid": "8652CDF9C12B4051B8D180E20840CE9B",
        "fieldId": "a2502b74-e3ce-4b30-a3a4-b6ceb68cf677",
        "budgetSequenceNumber": 6
    },
    {
        "budgetTrackingFieldName": "country",
        "fieldType": "VARCHAR",
        "listSyncGuid": null,
        "fieldId": "4ac122ad-8c0b-4076-bd41-49b09d576d5b",
        "budgetSequenceNumber": 4
    }
]
```


## <a name="schema"></a>Schema


### <a name="budgetTrackingList"></a>Budget Tracking

Name | Type | Format | Description
-----|------|--------|------------
`budgetTrackingFieldName`	|	`string`	|	-	|	The budget field tracking name 
`fieldType`	|	`string`	|	-	|	The data type of this field or field collection. Valid values are LIST, MLIST, and VARCHAR.
`listSyncGuid`	|	`string`	|	-	|	If the dataType of this item is LIST or MLIST, this is the id of the list definition from Concur's list service.
`fieldId`	|	`string`	|	-	|	The budget service's key for this object
`budgetSequenceNumber`	|	`integer`	|	-	|	The sequence or the order in which the budget tracking field appears in the budget UI.