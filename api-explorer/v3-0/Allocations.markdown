---
title: Allocations
layout: reference
reference-type: swagger
---
##Allocations

####GET Expense Allocations
This endpoint allows users to get all allocations by the entry or by request.

#####Parameters
Parameters | Value | Description | Parameter Type | Data Type |
---------- | ----- | ----------- | -------------- | ---------
limit | | The number of records to return. The default is 25 and the maximum is 100. | query | integer |
offset | | The starting point of the next set of results, after the limit specified in the limit field has been reached. | query | string |
reportID | | The unique identifier for the report as it appears in the Concur Expense UI. Format: A variable-length string. Maximum length: 32 characters. | query | string |
entryID | | The unique identifier for the expense entry. | query | string |
itemizationID | | The unique identifier for the expense itemization. | query | string |


#####Request URL
```
https://www.concursolutions.com/api/v3.0/expense/allocations?limit=10&user=ALL
```


#####JSON Example of a successful response
```
{
  "Items": [
    {
      "EntryID": "gWidFO7ikXSy7gHnNngC12jkL7khMiREv4g",
      "Percentage": "100.00000000",
      "IsPercentEdited": false,
      "IsHidden": true,
      "AccountCode1": "1",
      "AccountCode2": null,
      "Custom1": null,
      "Custom2": null,
      "Custom3": null,
      "Custom4": null,
      "Custom5": null,
      "Custom6": null,
      "Custom7": null,
      "Custom8": null,
      "Custom9": null,
      "Custom10": null,
      "Custom11": null,
      "Custom12": null,
      "Custom13": null,
      "Custom14": null,
      "Custom15": null,
      "Custom16": null,
      "Custom17": null,
      "Custom18": null,
      "Custom19": null,
      "Custom20": null,
      "ID": "gWmudeHM8AuFikny3Hrpz$s2gaNvc0E7Xfyw",
      "URI": "https://www.concursolutions.com/api/v3.0/expense/allocations/gWmudeHM8AuFikny3Hrpz$s2gaNvc0E7Xfyw"
    },
    {
      "EntryID": "gWidFO7ikXSy41$smPkwdC5cL1aku$pSgc$p4g",
      "Percentage": "100.00000000",
      "IsPercentEdited": false,
      "IsHidden": true,
      "AccountCode1": "1",
      "AccountCode2": null,
      "Custom1": null,
      "Custom2": null,
      "Custom3": null,
      "Custom4": null,
      "Custom5": null,
      "Custom6": null,
      "Custom7": null,
      "Custom8": null,
      "Custom9": null,
      "Custom10": null,
      "Custom11": null,
      "Custom12": null,
      "Custom13": null,
      "Custom14": null,
      "Custom15": null,
      "Custom16": null,
      "Custom17": null,
      "Custom18": null,
      "Custom19": null,
      "Custom20": null,
      "ID": "gWmudeHM8AuFhxez1E72ExJPksvTH0KPPyw",
      "URI": "https://www.concursolutions.com/api/v3.0/expense/allocations/gWmudeHM8AuFhxez1E72ExJPksvTH0KPPyw"
    },
    {
      "EntryID": "gWidFO7ikXSy$seMkLiQismjUIYkxYzCsf4g",
      "Percentage": "100.00000000",
      "IsPercentEdited": false,
      "IsHidden": true,
      "AccountCode1": "1",
      "AccountCode2": "1",
      "Custom1": null,
      "Custom2": null,
      "Custom3": null,
      "Custom4": null,
      "Custom5": null,
      "Custom6": null,
      "Custom7": null,
      "Custom8": null,
      "Custom9": null,
      "Custom10": null,
      "Custom11": null,
      "Custom12": null,
      "Custom13": null,
      "Custom14": null,
      "Custom15": null,
      "Custom16": null,
      "Custom17": null,
      "Custom18": null,
      "Custom19": null,
      "Custom20": null,
      "ID": "gWmudeHM8AuFnasxxCbJqu2QZuvMgVo$pvyw",
      "URI": "https://www.concursolutions.com/api/v3.0/expense/allocations/gWmudeHM8AuFnasxxCbJqu2QZuvMgVo$pvyw"
    },
    {
      "EntryID": "gWidFO7ikXSy$pSkbKcgoBj2OiHk0JjSbv4g",
      "Percentage": "100.00000000",
      "IsPercentEdited": false,
      "IsHidden": true,
      "AccountCode1": "1",
      "AccountCode2": "1",
      "Custom1": null,
      "Custom2": null,
      "Custom3": null,
      "Custom4": null,
      "Custom5": null,
      "Custom6": null,
      "Custom7": null,
      "Custom8": null,
      "Custom9": null,
      "Custom10": null,
      "Custom11": null,
      "Custom12": null,
      "Custom13": null,
      "Custom14": null,
      "Custom15": null,
      "Custom16": null,
      "Custom17": null,
      "Custom18": null,
      "Custom19": null,
      "Custom20": null,
      "ID": "gWmudeHM8AuFmWEOw8rDHrjKzxvJxF4Ifyw",
      "URI": "https://www.concursolutions.com/api/v3.0/expense/allocations/gWmudeHM8AuFmWEOw8rDHrjKzxvJxF4Ifyw"
    },
    {
      "EntryID": "gWidFO7ikXSy8HdaIfw32sJhcmk76TjD$p4g",
      "Percentage": "100.00000000",
      "IsPercentEdited": false,
      "IsHidden": true,
      "AccountCode1": "1",
      "AccountCode2": null,
      "Custom1": null,
      "Custom2": null,
      "Custom3": null,
      "Custom4": null,
      "Custom5": null,
      "Custom6": null,
      "Custom7": null,
      "Custom8": null,
      "Custom9": null,
      "Custom10": null,
      "Custom11": null,
      "Custom12": null,
      "Custom13": null,
      "Custom14": null,
      "Custom15": null,
      "Custom16": null,
      "Custom17": null,
      "Custom18": null,
      "Custom19": null,
      "Custom20": null,
      "ID": "gWmudeHM8AuFlD9Py$p7cwkclNQvGC1JQPyw",
      "URI": "https://www.concursolutions.com/api/v3.0/expense/allocations/gWmudeHM8AuFlD9Py$p7cwkclNQvGC1JQPyw"
    },
    {
      "EntryID": "gWidFO7ikXSy9L1lJhA9bpc725k$srDz0P4g",
      "Percentage": "100.00000000",
      "IsPercentEdited": false,
      "IsHidden": true,
      "AccountCode1": "1",
      "AccountCode2": "1",
      "Custom1": null,
      "Custom2": null,
      "Custom3": null,
      "Custom4": null,
      "Custom5": null,
      "Custom6": null,
      "Custom7": null,
      "Custom8": null,
      "Custom9": null,
      "Custom10": null,
      "Custom11": null,
      "Custom12": null,
      "Custom13": null,
      "Custom14": null,
      "Custom15": null,
      "Custom16": null,
      "Custom17": null,
      "Custom18": null,
      "Custom19": null,
      "Custom20": null,
      "ID": "gWmudeHM8AuFkPVwzBLWdhJ$pnPvDTlZn$pyw",
      "URI": "https://www.concursolutions.com/api/v3.0/expense/allocations/gWmudeHM8AuFkPVwzBLWdhJ$pnPvDTlZn$pyw"
    },
    {
      "EntryID": "gWidFO7ikXSyy5IgDvRdwZdryckOXwHNf4w",
      "Percentage": "100.00000000",
      "IsPercentEdited": false,
      "IsHidden": true,
      "AccountCode1": "1",
      "AccountCode2": "1",
      "Custom1": null,
      "Custom2": null,
      "Custom3": null,
      "Custom4": null,
      "Custom5": null,
      "Custom6": null,
      "Custom7": null,
      "Custom8": null,
      "Custom9": null,
      "Custom10": null,
      "Custom11": null,
      "Custom12": null,
      "Custom13": null,
      "Custom14": null,
      "Custom15": null,
      "Custom16": null,
      "Custom17": null,
      "Custom18": null,
      "Custom19": null,
      "Custom20": null,
      "ID": "gWmudeHM8AuFr9o15Pa22RIvjqvzvWtevyg",
      "URI": "https://www.concursolutions.com/api/v3.0/expense/allocations/gWmudeHM8AuFr9o15Pa22RIvjqvzvWtevyg"
    },
    {
      "EntryID": "gWidFO7ikXSyz1gfCRhXdcIxYDkLGgX6v4w",
      "Percentage": "100.00000000",
      "IsPercentEdited": false,
      "IsHidden": true,
      "AccountCode1": "1",
      "AccountCode2": null,
      "Custom1": null,
      "Custom2": null,
      "Custom3": null,
      "Custom4": null,
      "Custom5": null,
      "Custom6": null,
      "Custom7": null,
      "Custom8": null,
      "Custom9": null,
      "Custom10": null,
      "Custom11": null,
      "Custom12": null,
      "Custom13": null,
      "Custom14": null,
      "Custom15": null,
      "Custom16": null,
      "Custom17": null,
      "Custom18": null,
      "Custom19": null,
      "Custom20": null,
      "ID": "gWmudeHM8AuFqxAK4xq8bUd1J1v2$sG9pfyg",
      "URI": "https://www.concursolutions.com/api/v3.0/expense/allocations/gWmudeHM8AuFqxAK4xq8bUd1J1v2$sG9pfyg"
    },
    {
      "EntryID": "gWidFO7ikXSzLQo2TjtSDcCx8riMg$swwv7g",
      "Percentage": "100.00000000",
      "IsPercentEdited": false,
      "IsHidden": true,
      "AccountCode1": "1",
      "AccountCode2": "1",
      "Custom1": null,
      "Custom2": null,
      "Custom3": null,
      "Custom4": null,
      "Custom5": null,
      "Custom6": null,
      "Custom7": null,
      "Custom8": null,
      "Custom9": null,
      "Custom10": null,
      "Custom11": null,
      "Custom12": null,
      "Custom13": null,
      "Custom14": null,
      "Custom15": null,
      "Custom16": null,
      "Custom17": null,
      "Custom18": null,
      "Custom19": null,
      "Custom20": null,
      "ID": "gWmudeHM8AuESUIjpDm5FUX1tdpxYYajfxw",
      "URI": "https://www.concursolutions.com/api/v3.0/expense/allocations/gWmudeHM8AuESUIjpDm5FUX1tdpxYYajfxw"
    },
    {
      "EntryID": "gWidFO7ikXSzIFR3Rg9N0T9eCKiDTOBo$p7g",
      "Percentage": "100.00000000",
      "IsPercentEdited": false,
      "IsHidden": true,
      "AccountCode1": "1",
      "AccountCode2": "1",
      "Custom1": null,
      "Custom2": null,
      "Custom3": null,
      "Custom4": null,
      "Custom5": null,
      "Custom6": null,
      "Custom7": null,
      "Custom8": null,
      "Custom9": null,
      "Custom10": null,
      "Custom11": null,
      "Custom12": null,
      "Custom13": null,
      "Custom14": null,
      "Custom15": null,
      "Custom16": null,
      "Custom17": null,
      "Custom18": null,
      "Custom19": null,
      "Custom20": null,
      "ID": "gWmudeHM8AuERBxirA2myboaT8p$sror7Pxw",
      "URI": "https://www.concursolutions.com/api/v3.0/expense/allocations/gWmudeHM8AuERBxirA2myboaT8p$sror7Pxw"
    }
  ],
  "NextPage": "https://www.concursolutions.com/api/v3.0/expense/allocations?limit=10&user=ALL&offset=gWnJOi1u7xcHthJ04VVY47cFuGqUQRtK2aA"
}
```


###GET Expense allocation by ID
This endpoint allows users to GET a single allocation using its unique ID. To obtain the ID, run an extract of GET Expense Allocations for the selected organization and select the "ID" of the specfic user for whom you want to see the specific expense allocation. Use the example below for guidance:

```
"ID": "gWmudeHM8AuERBxirA2myboaT8p$sror7Pxw",
"URI": "https://www.concursolutions.com/api/v3.0/expense/allocations/gWmudeHM8AuERBxirA2myboaT8p$sror7Pxw"
```

#####Parameters
Parameter | Value | Description | Parameter Type | Data Type |
--------- | ----- | ----------- | -------------- | --------- 
id | **Required** |The unique identifier for the allocation. | path | string
user | | The login ID of the user who owns the allocation. The user must have the Web Services Admin role to use this parameter. | queery | string


#####Request URL
```
https://www.concursolutions.com/api/v3.0/expense/allocations/gWmudeHM8AuERBxirA2myboaT8p%24sror7Pxw
```

#####JSON Example of a successful response
```
{
  "EntryID": "gWidFO7ikXSzIFR3Rg9N0T9eCKiDTOBo$p7g",
  "Percentage": "100.00000000",
  "IsPercentEdited": false,
  "IsHidden": true,
  "AccountCode1": "1",
  "AccountCode2": "1",
  "Custom1": null,
  "Custom2": null,
  "Custom3": null,
  "Custom4": null,
  "Custom5": null,
  "Custom6": null,
  "Custom7": null,
  "Custom8": null,
  "Custom9": null,
  "Custom10": null,
  "Custom11": null,
  "Custom12": null,
  "Custom13": null,
  "Custom14": null,
  "Custom15": null,
  "Custom16": null,
  "Custom17": null,
  "Custom18": null,
  "Custom19": null,
  "Custom20": null,
  "ID": "gWmudeHM8AuERBxirA2myboaT8p$sror7Pxw",
  "URI": "https://www.concursolutions.com/api/v3.0/expense/allocations/gWmudeHM8AuERBxirA2myboaT8p$sror7Pxw"
}
```


{% swagger /api-explorer/v3-0/Allocations.swagger2.json %}
