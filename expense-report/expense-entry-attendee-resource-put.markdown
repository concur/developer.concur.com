---
title: Expense Entry Attendee Resource
layout: operation
---

##Description
This allows the developer to specify which existing attendees are associated to the specified entry. It also gives the developer the option to provide the values for the Entry-Attendee association. The list of attendees in the request will replace any existing associated attendees, so the developer must include all attendees in the request. This function cannot be used to create new attendees.

##Request
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

##Content type
application/xml

application/json

###Authorization header
Authorization header with OAuth token for valid Concur user. 

###Request body elements
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

##Response
    200 OK

##Examples

####Request
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

####Response
    200 OK


[1]: https://developer.concur.com/node/487#reportdetails
[2]: https://developer.concur.com/expense-report/expense-entry-attendee-resource/expense-entry-attendee-resource-get
[3]: https://developer.concur.com/reference/http-codes
