---
title: Entries
layout: reference
reference-type: swagger
---

###Entries

####GET Expense Entries
This endpoint allows users to GET all expense entries owned by the user.


####Parameters 
Parameters | Value | Description | Parameter Type | Data Type
---------- | ----- | ----------- | -------------- | ---------
reportID | | The report ID of the entries to be retrieved. Use the GET /expense/reportdigests function to find the report ID. Format: An alpha-numeric GUID string. | query | string
paymentTypeID | | The ID of the payment type of the entries to be retrieved. Use the <a target="_blank" get_user_offset_limit_get_0"="" expensegroupconfigurations="" index.html#!="" docs="" api="" www.concursolutions.com="">GET /expense/expensegroupconfigurations function to learn the payment type ID for the desired payment type. | query | string
batchID | | The batch ID for the entries to be retrieved. The batch ID identifies the batch that contains the report payee associated with the entries. Use the GET Payment Batch function to learn the Payment Type ID for the desired Payment Type. | query | string
isBillable | true/false | Determines whether the operation retrieves entries that are billable. Format: true or false. | query | boolean
attendeeTypeCode | | The ID of the attendee type for the entries to be retrieved. | query | string
hasAttendees | true/false | Determines whether the operation retrieves entries that have attendees. Format: true or false | query | boolean
hasVAT | true/false | Determines whether the operation retrieves entries that have VAT details. Format: true or false. | query | boolean
expenseTypeCode | | The code for the expense type for the entries to be retrieved. | query | string
attendeeID | | The attendee associated with the entries to be retrieved. | query | string
offset | | The starting point of the next set of results, after the limit specified in the limit field has been reached. | query | string
limit | | The number of records to return. The default limit is 25. | query | integer
user | | The login ID of the user who owns the entries. The user must have the Web Services Admin role to use this parameter. | query | string


####Request URL
```
https://www.concursolutions.com/api/v3.0/expense/entries?isBillable=true&hasAttendees=true&hasVAT=false&limit=5&user=ALL
```


####XMLExample of a successful response
```
<Entries xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
  <Items />
  <NextPage xsi:nil="true" />
</Entries>
```


###POST Expense Entries
This endpoint allows users to create a new expense entry.


####Parameters 
Parameters | Value | Description | Parameter Type | Data Type
---------- | ----- | ----------- | -------------- | ---------
Content | **Required** - configure model schema | The entry expense object to create. | body | Model Schema
user | | The login ID of the user who owns the entries. The user must have the Web Services Admin role to use this parameter. | query | string


####Request URL
```
https://www.concursolutions.com/api/v3.0/expense/entries?user=<user_login>
```

####XML Example of a successful response
```
Placeholder
```


###DELETE Expense Entries by ID
This endpoint allows users to delete the specified expense entry.


####Parameters 
Parameters | Value | Description | Parameter Type | Data Type
---------- | ----- | ----------- | -------------- | ---------
id | **Required** | The ID of the expense entry to delete. | pathy | query
user | | the login of the user who owns the entries. The he user must have the Web Services Admin role to use this parameter. | query | string


####Request URL
```
https://www.concursolutions.com/api/v3.0/expense/entries/<ID_of_the_expense_entry?><user=Login_ID>
```


####XML Example of a successful response
```
Placeholder
```


###GET Expense Entries by ID
This endpoint allows users to GET an expense entry by ID


####Parameters 
Parameters | Value | Description | Parameter Type | Data Type
---------- | ----- | ----------- | -------------- | ---------
id | **Required** | The expense entry ID. | path | string
user | | The login ID of the user who owns the entries. The user must have the Web Services Admin role to use this parameter. | query | string


####Request URL
```
https://www.concursolutions.com/api/v3.0/expense/entries/<expense_entry_ID?><user=Login_ID>
```


####XML Example of a successful response
```
Placeholder
```


###PUT Expense Entries by ID
This endpoint allows users to update the specified expense entry. Only the fields provided in the supplied object are updated. Missing fields will not be altered.


####Parameters 
Parameters | Value | Description | Parameter Type | Data Type
---------- | ----- | ----------- | -------------- | ---------
id | **REquired** | The expense entry ID. | path | string
content | **Required** - configure model schema | The partial or complete expense entry to update. | body | Model Schema
user | | The login ID of the user who owns the entries. The user must have the Web Services Admin role to use this parameter. | query | string


####Request URL
```
https://www.concursolutions.com/api/v3.0/expense/entries/<expense_entry_ID?user=Login_ID>
```


####XML Example of a successful response
```
Placeholder
```

{% swagger /api-explorer/v3-0/Entries.swagger2.json %}
