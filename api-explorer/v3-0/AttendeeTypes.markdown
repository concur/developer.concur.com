---
title: Attendee Types
layout: reference
reference-type: swagger
---

##Attendee Types

####GET Expense for attendee types
This endpoint allows users to GET all active attendee types for the company.

#####Model Schema
```

{
  "Items": {
    "AllowAttendeeCountEditing": true,
    "AllowManuallyEnteredAttendees": true,
    "AttendeeFormID": "string",
    "Code": "string",
    "ConnectorID": "string",
    "DuplicateSearchFields": [
      "string"
    ],
    "ID": "string",
    "Name": "string",
    "URI": "string"
  },
  "NextPage": "string"
}
```

####Parameters
Parameter | Value | Description | Parameter Type | Data Type
--------- | ----- | ----------- | -------------- | ---------
offset | | The starting point of the next set of results, after the limit specified in the limit field has been reached. | query | string
Limit | | The number of records to return. The default value is 25. | query | integer

#####Request URL
```
https://www.concursolutions.com/api/v3.0/expense/attendeetypes?limit=15
```

#####XML Sample of a successful response
```
{
  "Items": [
    {
      "Name": "Business Guest",
      "Code": "BUSGUEST",
      "AttendeeFormID": "gWvidmKNPVEaOg$s66rqA62OJVXfvHBMs4sw",
      "DuplicateSearchFields": [
        "Title",
        "Company",
        "OwnerEmpName",
        "FirstName",
        "LastName"
      ],
      "ConnectorID": "",
      "AllowManuallyEnteredAttendees": true,
      "AllowAttendeeCountEditing": true,
      "ID": "gWjUHBxUY4iQLA9KTkbtUD6pc",
      "URI": "https://www.concursolutions.com/api/v3.0/expense/attendeetypes/gWjUHBxUY4iQLA9KTkbtUD6pc"
    },
    {
      "Name": "Employee",
      "Code": "EMPLOYEE",
      "AttendeeFormID": "gWvidmKNPVEz8W4lJWEPWQF1u7bqDgK3ZkA",
      "DuplicateSearchFields": [
        "Title",
        "OwnerEmpName",
        "FirstName",
        "LastName"
      ],
      "ConnectorID": "",
      "AllowManuallyEnteredAttendees": true,
      "AllowAttendeeCountEditing": false,
      "ID": "gWjYs6nUm$ptrgvkjvwYt2B3SN",
      "URI": "https://www.concursolutions.com/api/v3.0/expense/attendeetypes/gWjYs6nUm$ptrgvkjvwYt2B3SN"
    },
    {
      "Name": "Spouse/Partner",
      "Code": "SPOUSE",
      "AttendeeFormID": "gWvidmKNPVEz$pDBkLVUQhf6aQablwQ7vJkA",
      "DuplicateSearchFields": [
        "Company",
        "OwnerEmpName",
        "FirstName",
        "LastName"
      ],
      "ConnectorID": "",
      "AllowManuallyEnteredAttendees": true,
      "AllowAttendeeCountEditing": false,
      "ID": "gWjeLsVUzCo9GKsE78ZtoAME9",
      "URI": "https://www.concursolutions.com/api/v3.0/expense/attendeetypes/gWjeLsVUzCo9GKsE78ZtoAME9"
    },
    {
      "Name": "Healthcare Professional",
      "Code": "HCP",
      "AttendeeFormID": "gWvidmKNPVEH7wO$pDpD9$pk6xVlyJ4EjwIdA",
      "DuplicateSearchFields": [
        "Title",
        "Custom18",
        "ExternalId",
        "FirstName",
        "LastName",
        "Custom7",
        "Custom14",
        "Custom15",
        "Custom16",
        "Custom17",
        "Custom19",
        "Custom8",
        "Custom20"
      ],
      "ConnectorID": "",
      "AllowManuallyEnteredAttendees": true,
      "AllowAttendeeCountEditing": false,
      "ID": "gWjYOjoOorT3dhpHGto5H$poJuoa0m",
      "URI": "https://www.concursolutions.com/api/v3.0/expense/attendeetypes/gWjYOjoOorT3dhpHGto5H$poJuoa0m"
    },
    {
      "Name": "Cegedim HCP Search-OneKey US",
      "Code": "HCPCGDM",
      "AttendeeFormID": "gWvidmKNPVDSKcgxbk8YONZtExDByBhz0Ww",
      "DuplicateSearchFields": [
        "ExternalId"
      ],
      "ConnectorID": "gWh$sv385JxfDWJGeyFYDIs$s$sXOIk",
      "AllowManuallyEnteredAttendees": false,
      "AllowAttendeeCountEditing": false,
      "ID": "gWjYOjoSwDzKJB3GveyY2ET9CMd18",
      "URI": "https://www.concursolutions.com/api/v3.0/expense/attendeetypes/gWjYOjoSwDzKJB3GveyY2ET9CMd18"
    },
    {
      "Name": "Cegedim HCO Search–OneKey US",
      "Code": "HCOCGDM",
      "AttendeeFormID": "gWvidmKNPVDSFud0Rqt4l9Y9AUDxOyVKkWg",
      "DuplicateSearchFields": [
        "ExternalId"
      ],
      "ConnectorID": "",
      "AllowManuallyEnteredAttendees": false,
      "AllowAttendeeCountEditing": false,
      "ID": "gWjYOjoW1gl1OXFG6j3OQhbaWAc1i",
      "URI": "https://www.concursolutions.com/api/v3.0/expense/attendeetypes/gWjYOjoW1gl1OXFG6j3OQhbaWAc1i"
    },
    {
      "Name": "Attendee-Private List",
      "Code": "PRIVATE",
      "AttendeeFormID": "gWvidmKNPVDT41eeGdRditSNnfFm89hoUVw",
      "DuplicateSearchFields": [
        "OwnerEmpName",
        "FirstName",
        "LastName"
      ],
      "ConnectorID": "",
      "AllowManuallyEnteredAttendees": true,
      "AllowAttendeeCountEditing": false,
      "ID": "gWjYOjoa7Fe0HsTGEk417OCzqUf1A",
      "URI": "https://www.concursolutions.com/api/v3.0/expense/attendeetypes/gWjYOjoa7Fe0HsTGEk417OCzqUf1A"
    },
    {
      "Name": "API Post",
      "Code": "APIPOST",
      "AttendeeFormID": "gWvidmKNPVDeOTHFReDuFmz9pN8b0FDs0KQ",
      "DuplicateSearchFields": [
        "ExternalId"
      ],
      "ConnectorID": "",
      "AllowManuallyEnteredAttendees": false,
      "AllowAttendeeCountEditing": true,
      "ID": "gWjYOjoiKUfOusvFXCN2Y51azcR30",
      "URI": "https://www.concursolutions.com/api/v3.0/expense/attendeetypes/gWjYOjoiKUfOusvFXCN2Y51azcR30"
    },
    {
      "Name": "Govt Sponsored/Controlled",
      "Code": "GOVTSPON",
      "AttendeeFormID": "gWvidmKNPVEH7wO$pDpD9$pk6xVlyJ4EjwIdA",
      "DuplicateSearchFields": [
        "ExternalId",
        "FirstName",
        "LastName"
      ],
      "ConnectorID": "",
      "AllowManuallyEnteredAttendees": true,
      "AllowAttendeeCountEditing": false,
      "ID": "gWjYOjomP3Jxp6dFC$pIg$sc99nQQ3q",
      "URI": "https://www.concursolutions.com/api/v3.0/expense/attendeetypes/gWjYOjomP3Jxp6dFC$pIg$sc99nQQ3q"
    }
  ],
  "NextPage": null
}
```


####Post Expense for Attendee Types
This endpoint allows users to create a new attendee type

#####Parameters
Parameter | Value | Description | Parameter Type | Data Type
--------- | ----- | ----------- | -------------- | ---------
content | Required - Parameter content type | The Attendee type object to create. | body | Model - Model Schema. (Click to set as parameter value.) |

#####Request URL
```
https://www.concursolutions.com/api/v3.0/expense/attendeetypes
```
#####XML Example of a successful response
```
Placeholder
```


####Delete Expense attendee types by ID
This endpoint allows the user to DELETE a specified attendee type.

#####Parameters
Parameter | Value | Description | Parameter Type | Data Type |
--------- | ----- | ----------- | -------------- | --------- |
id | Required | The ID of the attendee type to delete. | path | string

#####Request URL
```
https://www.concursolutions.com/api/v3.0/expense/attendeetypes/<attendee type ID>
```
#####XML Example of a successful response
```
Placeholder
```


####Get Expense attendee types by ID
This endpoint allows users to GET an attendee type by ID.

#####Parameters
Parameter | Value | Description | Parameter Type | Data Type |
--------- | ----- | ----------- | -------------- | --------- |
id | required | The id of the attendee type. | path | string |

#####Request URL
```
https://www.concursolutions.com/api/v3.0/expense/attendeetypes/<attendee type id>
```
#####XML Example of a successful response
```
Placeholder
```


####Put Expense attendee types by id
This endpoint allows users to update the specified attendee type. Only the fields provided in the supplied object will be updated. Missing fields will not be altered.

#####Parameters
Parameter | Value | Description | Parameter Type | Data Type |
--------- | ----- | ----------- | -------------- | --------- |
id | Value Required | The ID of the attendee type. | path | string |
content | Parameter content type | The partial or complete AttendeeType object to update. | body | Model Schema (Click to set as parameter value.) |

#####Request URL
```
https://www.concursolutions.com/api/v3.0/expense/attendeetypes/<attendee type id>
```

#####XML Example of a successful response
```
Placeholder
```



{% swagger /api-explorer/v3-0/AttendeeTypes.swagger2.json %}
