---
title: Get a list of expense entry attendees
layout: operation
--- 

##Description
Retrieves the expense entry attendees for the specified expense entry. This function requires the v2.0 expense entry attendee resource.

##Request

### XML request

```
    GET https://www.concursolutions.com/api/expense/expensereport/v2.0/report/nxxKgLlnROz3zHJBCRksaas23dsfs/entry/n7We3qWw99u1KoWTMaLhSC$pXBYzQ1UDhn/attendees HTTP/1.1
    Authorization: OAuth {access token}
    ...
```

### JSON request

```
GET https://www.concursolutions.com/api/expense/expensereport/v2.0/report/nxxKgLlnROz3zHJBCRksaas23dsfs/entry/n7We3qWw99u1KoWTMaLhSC$pXBYzQ1UDhn/Attendees HTTP/1.1
Authorization: OAuth {access token}
...
```

###Request parameters

* **{reportId}**  
The unique identifier for the expense report. This value is returned in the **ReportID** element by the [Get Report Details][1] function. Required.
* **{entryId}/attendees**  
The unique identifier for the expense entry and the Attendees keyword. This value is returned in the **ReportEntryID** element by the [Get Report Details][1] function. Required.

Example: `https://www.concursolutions.com/api/expense/expensereport/v2.0/report/{reportId}/entry{entryId}/attendees`

###Accept headers

* application/xml
* application/json

###Authorization header
Authorization header with OAuth token for valid Concur user.

##Response

### XML response

```xml
    200 OK
    Content-Type: application/xml

    <EntryAttendees xmlns="http://www.concursolutions.com/api/expense/expensereport/2012/07" xmlns:i="http://www.w3.org/2001/XMLSchema-instance">
        <Attendee>
            <Amount>2422.00000000</Amount>
            <AssociatedAttendeeCount>1</AssociatedAttendeeCount>
            <AttendeeID>nFaAj0ncBso0sBd8ejqrxLHz1FfmhJ69b</AttendeeID>
            <EntryAttendeeCustom1>Medical</EntryAttendeeCustom1>
            <EntryAttendeeCustom2>North America</EntryAttendeeCustom2>
            <EntryAttendeeCustom3>Canada</EntryAttendeeCustom3>
            <EntryAttendeeCustom4>Vancouver</EntryAttendeeCustom4>
            <EntryAttendeeCustom5 i:nil="true"/>
        </Attendee>
    </EntryAttendees>
```

### JSON response

```json
200 OK
Content-Type: application/json

   [

    {"AttendeeID":"nFaAj0ncBs$puDs5XxZfOc6L5go8EJIueY","Amount":"807.33000000","AttendeeCount":"0","Custom1":"Medical","Custom2":"North America","Custom3":"Canada","Custom4":"Vancouver","Custom5":null} 
    ,

    {"AttendeeID":"nFaAj0ncBso0sBd8ejqrxLHz1FfmhJ69b","Amount":"707.33000000","AttendeeCount":"0","Custom1":"Medical","Custom2":"North America","Custom3":"Canada","Custom4":"Vancouver","Custom5":null} 
] 
```

###Response root elements

|       Element Name      |   Required/Optional  | Data Type | Description |
| ----------------------- | -------------------- | --------- | ----------- |
| Amount                  |                      | decimal   | The portion of the Entry Transaction Amount assigned to this attendee.|
| AssociatedAttendeeCount |                      | int       | The count of attendees associated to this attendee. A count greater than 1 means there are unnamed attendees associated with this attendee.            |
| AttendeeID              |                      | string    | The unique identifier for the attendee.|
| EntryAttendeeCustom1    |                      | string    | The value for Entry-Attendee custom fields 1-5. Varies based on configuration.|
| EntryAttendeeCustom2    |                      | string    | The value for Entry-Attendee custom fields 1-5. Varies based on configuration.|
| EntryAttendeeCustom3    |                      | string    | The value for Entry-Attendee custom fields 1-5. Varies based on configuration.|
| EntryAttendeeCustom4    |                      | string    | The value for Entry-Attendee custom fields 1-5. Varies based on configuration.|
| EntryAttendeeCustom5    |                      | string    | The value for Entry-Attendee custom fields 1-5. Varies based on configuration.|

[1]: https://developer.concur.com/node/487#reportdetails
[2]: https://developer.concur.com/reference/http-codes
