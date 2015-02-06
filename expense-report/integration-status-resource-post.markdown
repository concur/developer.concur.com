---
title: Integration Status Resource
layout: operation
---




This resource supports the following POST actions:

##  Post Integration Status Request

| ----- |
|  Description |
|  **U****pdating Expense Reports **

This resource allows developers to ensure that the necessary transactions to account for expenses and arrange payment for the expenses in a specified report were created in the financial system prior to committing the expense report in Concur Expense. If they were, the developer uses this function to indicate the report was successfully integrated and move the report forward in the workflow to the Paid step. In Concur Expense, when a report arrives at the Paid workflow step the report is committed, meaning its data can't be changed and it can't be sent back in the workflow.

 |
|  Query Parameters - Required |  Query Parameters - Optional |
|

* **report/{_ReportID_}**  
The report keyword and the ReportID for the report that has been successfully integrated into the financial system. The ReportID is returned in the **ReportID** element by the [Get List of Reports][1] and the [Get Report Details][2] responses.

 

 |  None |
|  Request Headers - Required |  Request Headers - Optional |
|  Authorization header with OAuth token for valid Concur user. The OAuth consumer must have the following user role: Web Services Administrator |  None |
|  Supported Content Types |   |
|

* application/json
* application/xml
 |

####  XML Example Request

    POST https://www.concursolutions.com/api/expense/expensereport/v2.0/integrationstatus/report/nx2WRNzp18$wjehk%wqEL6EDHRwi9r$paQS1UqyL6a454QitqQ HTTP/1.1
    Authorization: OAuth {access token}
    Accept: application/xml
    ...

##  Post Report Integration Status Response

| ----- |
|  HTTP Responses |  Supported Content Types |
|  [HTTP Status Codes][3] |

* application/json
* application/xml
 |
|  Content Body |   |
|

The response will include:

An **ActionStatus** parent element (XML), or an object (JSON) with the following child elements(XML) or name/value pairs(JSON):

|  Status |  Whether the request was successful. Possible values: SUCCESS, FAILURE. |
|  Message |  Provides further details for errors. |   |

 |

####  XML Example of Successful Response

    HTTP/1.1 200 OK
    Content-Type: application/xml

    <ActionStatus xmlns="http://www.concursolutions.com/api/expense/expensereport/2011/03" xmlns:i="http://www.w3.org/2001/XMLSchema-instance">
        <Message>SUCCESS</Message>
        <Status>SUCCESS</Status>
    </ActionStatus>

####  JSON Example of Successful Response

    HTTP/1.1 200 OK
    Content-Type: application/json

    {"Status":"SUCCESS","Message":"SUCCESS"}

####  JSON Example of Response With Error

    HTTP/1.1 200 OK
    Content-Type: application/json

    {"Status":"FAILURE","Message":"To use the POST Expense Journal Entry Job Key the
        report must be at the Processing Payment or Payment Confirmed Payment Status."}



[1]: https://developer.concur.com/node/487#listofreports
[2]: https://developer.concur.com/node/487#reportdetails
[3]: https://developer.concur.com/reference/http-codes
