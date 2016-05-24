---
title: PUT Expense Entry Attendees
layout: reference
---

## Description
This allows the developer to specify which existing attendees are associated to the specified entry. It also gives the developer the option to provide the values for the Entry-Attendee association. The list of attendees in the request will replace any existing associated attendees, so the developer must include all attendees in the request. This function cannot be used to create new attendees.

**NOTE:** Find the newer version 3.0 [here.](/api-reference/expense/expense-report/expense-entry-attendee.html)

## Version
2.0

## Request

### Request parameters

#### Path parameters

| Parameter |Required/Optional| Description |
|-----------------|--------|-----------------------------|
|{_reportId_} | required | The unique identifier for the expense report. This value is returned in the ReportID element by the [Get Report Details][1] function. |
|{_entryId_}/attendees | required | The unique identifier for the expense entry and the Attendees keyword. This value is returned in the ReportEntryID element by the [Get Report Details][1] function. |

Example: `https://www.concursolutions.com/api/expense/expensereport/v2.0/report/{reportId}/entry/{entryId}/attendees`

### Headers

#### Authorization header

Authorization header with OAuth token for valid Concur user. The OAuth user must have one of the following roles in Expense:

* **Expense User**: This role allows the user to modify their own reports.
* **Web Services Administrator (Professional/Premium)**: This role allows the user to modify reports for all users.
* **Can Administer (Standard/Sandbox)**: This role allows the user to modify reports for all users.

#### Content-Type header

* application/xml
* application/json

### Request body

**XML**: The request will contain an **EntryAttendees** parent element with an **Attendee** child element for each attendee associated to the entry.

**JSON**: The request string will contain an object for each attendee associated to the entry.

The request must include all attendees associated to the entry. To detach a previously attached attendee, use a Put request excluding the attendee. The function always associates only the attendees specified in the Put. To not modify the element or name/value pair value, provide a nill (XML) or null (JSON) value, or use the same value as you received in the [Get Expense Entry Attendees][2] response.

#### Attendee elements

The **Attendee** element (XML) or **attendee** object (JSON) must contain all of the following elements(XML) or name/value pairs(JSON):

|       Element Name       | Data Type | Description |
| -----------------------  | --------- | ----------- |
| Amount     | decimal   | The portion of the Entry Transaction Amount assigned to this attendee.|
| AssociatedAttendeeCount   | int       | The count of attendees associated to this attendee. A count greater than 1 means there are unnamed attendees associated with this attendee. |
| AttendeeID            | string    | The unique identifier for the attendee.|
| EntryAttendeeCustom1     | string    | The value for Entry-Attendee custom fields 1-5. Varies based on configuration.|
| EntryAttendeeCustom2     | string    | The value for Entry-Attendee custom fields 1-5. Varies based on configuration.|
| EntryAttendeeCustom3    | string    | The value for Entry-Attendee custom fields 1-5. Varies based on configuration.|
| EntryAttendeeCustom4     | string    | The value for Entry-Attendee custom fields 1-5. Varies based on configuration.|
| EntryAttendeeCustom5     | string    | The value for Entry-Attendee custom fields 1-5. Varies based on configuration.|

## Response

### Content types

* application/xml
* application/json

## Examples

### XML example request

```
xml
    PUT https://www.concursolutions.com/api/expense/expensereport/v2.0/report/9d8ea1kole$sis293mn38dh/entry/8sle90wikl3h$halwnk$lakdjw83/attendees HHTP/1.1
    Authorization: OAuth {access token}
    ...

    <EntryAttendees xmlns="http://www.concursolutions.com/api/expense/expensereport/2012/07" xmlns:i="http://www.w3.org/2001/XMLSchema-instance">
        <Attendee>
            <Amount>2422.00000000</Amount>
            <AssociatedAttendeeCount>1</AssociatedAttendeeCount>
            <AttendeeID>nFaAj0ncBso0sBd8ejqrxLHz1FfmhJ69b</AttendeeID>
            <EntryAttendeeCustom1>fg6rt</EntryAttendeeCustom1>
            <EntryAttendeeCustom2>9808</EntryAttendeeCustom2>
            <EntryAttendeeCustom3>64564drd</EntryAttendeeCustom3>
            <EntryAttendeeCustom4>352dsxcvs</EntryAttendeeCustom4>
            <EntryAttendeeCustom5 i:nil="true"/>
        </Attendee>
    </EntryAttendees>
```    

### JSON example request

```
son
PUT https://www.concursolutions.com/api/expense/expensereport/v2.0/report/9d8ea1kole$sis293mn38dh/entry/8sle90wikl3h$halwnk$lakdjw83/attendees HHTP/1.1
Authorization: OAuth {access token}
...

    [

    {"AttendeeID":"nFaAj0ncBs$puDs5XxZfOc6L5go8EJIueY","Amount":"807.33000000","AttendeeCount":"0","Custom1":"dfg","Custom2":"7686","Custom3":"89080990-90-5464","Custom4":"56sdsd sf","Custom5":null}
    ,

    {"AttendeeID":"nFaAj0ncBso0sBd8ejqrxLHz1FfmhJ69b","Amount":"707.33000000","AttendeeCount":"0","Custom1":"fg6rt","Custom2":"9808","Custom3":"64564drd","Cust om4":"352dsxcvs","Custom5":null}
]
```

### Example response

`200 OK`


[1]: /api-reference-deprecated/version-two/expense-reports/expense-report-get.html
[2]: /api-reference-deprecated/version-two/expense-entry-attendee/expense-entry-attendee-resource-get.html
