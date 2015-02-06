[Source](https://developer.concur.com/expense-report/expense-entry-attendee-resource/expense-entry-attendee-resource-get "Permalink to Expense Entry Attendee Resource: GET")

# Expense Entry Attendee Resource: GET

This resource supports the following GET actions:

##  Get Expense Entry Attendees Request

| ----- |
|  Description |  Supported Accept Types |
|  Retrieves the expense entry attendees for the specified expense entry. This function requires the v2.0 expense entry attendee resource. |

* application/json
* application/xml
 |
|  Query Parameters - Required |  Query Parameters - Optional |
|

* **{_reportId_}**  
The unique identifier for the expense report. This value is returned in the **ReportID** element by the [Get Report Details][1] function.
* **{_entryId_}/attendees**  
The unique identifier for the expense entry and the Attendees keyword. This value is returned in the **ReportEntryID** element by the [Get Report Details][1] function.

Example:  
https://www.concursolutions.com/api/expense/expensereport/v2.0/report/_{reportId}_/entry_{entryId}_/attendees

 |  None |
|  Request Headers - Required |  Request Headers - Optional |
|  Authorization header with OAuth token for valid Concur user. |  None |

####  XML Example Request

    GET https://www.concursolutions.com/api/expense/expensereport/v2.0/report/nxxKgLlnROz3zHJBCRksaas23dsfs/entry/n7We3qWw99u1KoWTMaLhSC$pXBYzQ1UDhn/attendees HTTP/1.1
    Authorization: OAuth {access token}
    ...

####  JSON Example Request

    GET https:
    Authorization: OAuth {access token}
    ...

##  Get Expense Entry Attendees Response

| ----- |
|  HTTP Responses |  Supported Content Types |
|  [HTTP Status Codes][2] |

* application/json
* application/xml
 |
|  Content Body |   |
|  This request will return an **Attendees** parent element with an **Attendee** child element for each attendee. The **Attendee** element will have the following child elements:

|  Element |  Description |
|  AttendeeID |  The unique identifier for the attendee. |   |
|  Amount |  The portion of the Entry Transaction Amount assigned to this attendee. |
|  AssociatedAttendeeCount |  The count of attendees associated to this attendee. A count greater than 1 means there are unnamed attendees associated with this attendee. |
|  EntryAttendeeCustom1 through EntryAttendeeCustom5 |  The value for Entry-Attendee custom fields 1-5. Varies based on configuration. |

 |

####  XML Example of Successful Response

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

####  JSON Example of Successful Response

    200 OK
    Content-Type: application/json

       [

        {"AttendeeID":"nFaAj0ncBs$puDs5XxZfOc6L5go8EJIueY","Amount":"807.33000000","AttendeeCount":"0","Custom1":"Medical","Custom2":"North America","Custom3":"Canada","Custom4":"Vancouver","Custom5":null}
        ,

        {"AttendeeID":"nFaAj0ncBso0sBd8ejqrxLHz1FfmhJ69b","Amount":"707.33000000","AttendeeCount":"0","Custom1":"Medical","Custom2":"North America","Custom3":"Canada","Custom4":"Vancouver","Custom5":null}
    ]

Last Modified: 9/3/2013 9:47 AM PDT

[1]: https://developer.concur.com/node/487#reportdetails
[2]: https://developer.concur.com/node/205
