---
title: Budget Tracking Field
layout: reference
---

PRE-RELEASE: SAP Concur’s Budget API is currently in PRE-RELEASE and is subject to change. An Early Adopter program is available. To become an early adopter, contact your SAP Concur Representative and have them contact Team Adaptation.

# Budget Tracking Field

- [Retrieve all Budget Tracking Field](#getall)
- [Retrieve a Budget Tracking Field](#get)
- [Create/Update a Budget Tracking Field](#post)
- [Remove a Budget Tracking Field](#delete)
- [Schema](#schema)

## Version

4.0

## <a name="getall"></a>Retrieve all Budget Tracking Fields

    GET  /budget/v4/budgetTrackingField

### Parameters

    N/A

### Response

[Budget Tracking Field Array](#budgetTrackingField)

## <a name="get"></a>Retrieve a Budget Tracking Field

    GET  /budget/v4/budgetTrackingField/{id}

### Parameters

| Name | Type     | Format | Description                                        |
| ---- | -------- | ------ | -------------------------------------------------- |
| id   | `string` | `path` | The budget tracking field's key field (sync guid). |

### Response

[Budget Tracking Field](#budgetTrackingField)

### Example JSON Response

```json
{
  "syncGuid": "2c3dc4dc-130e-4524-91d7-a20dd4bc62e4",
  "dataType": "VARCHAR",
  "listSyncGuid": null,
  "lastModifiedDate": "2018-03-22 00:54:09",
  "status": "OPEN",
  "budgetSequenceNumber": 1,
  "budgetTrackingFieldDefinitions": [
    {
      "syncGuid": "9aea2524-a04e-44dd-a85b-cfdd5ae4cbeb",
      "defaultItemKey": null,
      "displayName": "Budget Tracking Code",
      "ctrlType": "EDIT",
      "defaultValue": "TextField",
      "lastModifiedDate": "2017-03-22 00:54:09",
      "connectedListSequenceNumber": 1,
      "status": "OPEN",
      "hierarchyCode": "1"
    }
  ]
}
```

## <a name="post"></a>Create/Update a Budget Tracking Field

    POST  /budget/v4/budgetTrackingField

### Parameters

| Name                  | Type    | Format | Description                                                              |
| --------------------- | ------- | ------ | ------------------------------------------------------------------------ |
| `budgetTrackingField` | `array` | `body` | **Required** An array of JSON representations of a budget tracking field |

### Response

[Budget Tracking Field Array](#budgetTrackingField)

## <a name="delete"></a>Delete a Budget Tracking Field

    DELETE  /budget/v4/budgetTrackingField/{id}

### Parameters

| Name | Type     | Format | Description                                        |
| ---- | -------- | ------ | -------------------------------------------------- |
| id   | `string` | `path` | The budget tracking field's key field (sync guid). |

## <a name="schema"></a>Schema

### <a name="budgetTrackingField"></a>BudgetTrackingField

| Name                             | Type                                    | Format | Description                                                                                                                                                                                                                                             |
| -------------------------------- | --------------------------------------- | ------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `budgetSequenceNumber`           | `string`                                | -      | The sequence/order in which budget tracking field definition appears in the budget UI.                                                                                                                                                                  |
| `dataType`                       | `string`                                | -      | **Required** The data type of this field or field collection. This value, along with the budget tracking field definition(s) below determines how the budget tracking field will be used by admininstrators. Valid values are LIST, MLIST, and VARCHAR. |
| `budgetTrackingFieldDefinitions` | `Array[BudgetTrackingFieldDefinitions]` | -      | **Required** The list of field defintion(s) that make up this field. Should be a single entry for VARCHAR or LIST and can be one or more entries for MLIST.                                                                                             |
| `lastModifiedDate`               | `datetime`                              | -      | The last time the budget tracking was updated. Date is in GMT **READ ONLY**                                                                                                                                                                             |
| `status`                         | `string`                                | -      | **Required** The status of this budget tracking field. Valid options are OPEN and REMOVED.                                                                                                                                                              |
| `syncGuid`                       | `string`                                | -      | The budget service's key for this object.                                                                                                                                                                                                               |
| `listSyncGuid`                   | `string`                                | -      | If the dataType of this item is LIST or MLIST, this is the id of the list definition from Concur's list service.                                                                                                                                        |

### BudgetTrackingFieldDefinition

| Name                          | Type       | Format | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| ----------------------------- | ---------- | ------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `connectedListSequenceNumber` | `string`   | -      | If the parent budget tracking field is an MLIST, this field specifies the order in which the individual field definitions should appear on the UI and the order in which they should pull their connected lists from the Concur list service.                                                                                                                                                                                                                          |
| `ctrlType`                    | `string`   | -      | The UI control type of this budget tracking field definiton. This defines how the field value will be entered by administrators. This control type does not have to match the control type of the fields to which this tracking field is mapped. (For instance, one could allow budget administrators to enter free-form text by choosing EDIT even if the mapped field on the expense report form is a pre-defined list. Valid values are PICK_LIST, LIST_EDIT, EDIT. |
| `defaultItemKey`              | `string`   | -      | The list item key value of the budget tracking field definition if this field is a list.                                                                                                                                                                                                                                                                                                                                                                               |
| `defaultValue`                | `string`   | -      | The default value of this field.                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| `displayName`                 | `string`   | -      | **Required** The user-facing name                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| `hierarchyCode`               | `string`   | -      | The key value that we'll use to pass in this field value in budget items and spending items. If this is not supplied, it defaults to the next available integer.                                                                                                                                                                                                                                                                                                       |
| `lastModifiedDate`            | `datetime` | -      | The last time this budget tracking definition was updated. Date is in GMT **READ ONLY**                                                                                                                                                                                                                                                                                                                                                                                |
| `status`                      | `string`   | -      | **Required** The status of this budget tracking field. Valid options are OPEN and REMOVED.                                                                                                                                                                                                                                                                                                                                                                             |
| `syncGuid`                    | `string`   | -      | The budget service's key for this object.                                                                                                                                                                                                                                                                                                                                                                                                                              |
