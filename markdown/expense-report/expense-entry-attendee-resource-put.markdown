[Source](https://developer.concur.com/expense-report/expense-entry-attendee-resource/expense-entry-attendee-resource-put "Permalink to Expense Entry Attendee Resource: PUT")

# Expense Entry Attendee Resource: PUT

This resource supports the following PUT actions:

##  Put Expense Entry Attendees Request

| ----- |
|  Description |
|

This allows the developer to specify which existing attendees are associated to the specified entry. It also gives the developer the option to provide the values for the Entry-Attendee association. The list of attendees in the request will replace any existing associated attendees, so the developer must include all attendees in the request. This function cannot be used to create new attendees.

 |
|  Supported Content Types |
|

* application/json
* application/xml
 |
|  Query Parameters - Required |
|

* **{_reportId_}**  
The unique identifier for the expense report. This value is returned in the **ReportID** element by the [Get Report Details][1] function.
* **{_entryId_}/attendees**  
The unique identifier for the expense entry and the Attendees keyword. This value is returned in the **ReportEntryID** element by the [Get Report Details][1] function.

Example:  
https://www.concursolutions.com/api/expense/expensereport/v2.0/report/_{reportId}_/entry/_{entryId}_/attendees

 |
|  Query Parameters - Optional |
|

None

 |
|  Request Headers - Required |  Request Headers - Optional |
|  Authorization header with OAuth token for valid Concur user. The OAuth Consumer must have one of the following roles in Expense:

**Expense User**: This role allows the user to modify their own reports.  
**Web Services Administrator (Professional/Premium)**: This role allows the user to modify reports for all users.  
**Can Administer (Standard/Sandbox)**: This role allows the user to modify reports for all users

 |  None |
|  Content Body |   |
|

XML: The request will contain an **EntryAttendees** parent element with an **Attendee** child element for each attendee associated to the entry.

JSON: The request string will contain an object for each attendee associated to the entry.

The request must include _all _attendees associated to the entry. To detach a previously attached attendee, use a Put request excluding the attendee. The function always associates _only_ the attendees specified in the Put. To not modify the element or name/value pair value, provide a nill (XML) or null (JSON) value, or use the same value as you received in the [Get Expense Entry Attendees][2] response.

The **Attendee** element (XML) or attendee object (JSON) must contain all of the following elements(XML) or name/value pairs(JSON):

|  Element |  Description |
|  AttendeeID |  The unique identifier for the attendee. There must be a value provided. This value must match an active attendee. |   |
|  Amount |  The portion of the Entry Transaction Amount assigned to this attendee. This is an amount in the Transaction Currency for the expense entry. It may be used only when Concur Expense is configured to allow employees to change the amount. Refer to the client's Attendee Configuration for details. |
|  AssociatedAttendeeCount |  The count of attendees associated to this attendee. This is a Natural Number. It may be used only when Concur Expense is configured to allow employee to change the count associated with the attendee. Refer to the client's Attendee Configuration for details. |
|  EntryAttendeeCustom1 through EntryAttendeeCustom5 |  The value for Entry-Attendee custom fields 1-5. It may be used only when the attendee form for the attendee's attendee type is configured to include this custom field. Refer to the client's Attendee Configuration for details. |

 |

####  XML Example Request

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

####  JSON Example Request

    PUT https:
    Authorization: OAuth {access token}
    ...

        [

        {"AttendeeID":"nFaAj0ncBs$puDs5XxZfOc6L5go8EJIueY","Amount":"807.33000000","AttendeeCount":"0","Custom1":"dfg","Custom2":"7686","Custom3":"89080990-90-5464","Custom4":"56sdsd sf","Custom5":null}
        ,

        {"AttendeeID":"nFaAj0ncBso0sBd8ejqrxLHz1FfmhJ69b","Amount":"707.33000000","AttendeeCount":"0","Custom1":"fg6rt","Custom2":"9808","Custom3":"64564drd","Cust om4":"352dsxcvs","Custom5":null}
    ]

##  Put Expense Entry Attendees Response

| ----- |
|  HTTP Responses |  Supported Content Types |
|  [HTTP Status Codes][3] |

* application/json
* application/xml
 |
|  Content Body |   |
|  The response will include an HTTP code |

####  Example of Successful Response

    200 OK

Last Modified: 9/3/2013 10:39 AM PDT

[1]: https://developer.concur.com/node/487#reportdetails
[2]: https://developer.concur.com/node/586
[3]: https://developer.concur.com/node/205
