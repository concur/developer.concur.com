---
title: Expense Delegator Resource
layout: operation
---




This resource supports the following GET actions:

##  Get List of Delegators Request

| ----- |
|  Description |  Supported Accept Types |
|  Retrieves the list of users that have granted delegate permissions to the user specified in the [OAuth][1] access token. |   |
|  Query Parameters - Required |  Query Parameters - Optional |
|  None |  None |
|  Request Headers - Required |  Request Headers - Optional |
|  Authorization header with OAuth token for valid Concur user. |  None |

####  XML Example Request

    GET https://www.concursolutions.com/api/expense/expensereport/v1.1/Delegators HTTP/1.1
    Authorization: OAuth {access token}
    ...

##  Get List of Delegators Response

| ----- |
|  HTTP Responses |  Supported Content Types |
|  [HTTP Status Codes][2] |   |
|  Content Body |   |
|  This request will return a **DelegatorsList** parent element with a **Delegator** parent element for each user that has granted delegate rights to the OAuth consumer. The **Delegator** element has the following child elements:

|  Element |  Description |
|  CanApprove |  Whether the delegate is granted the right to approve expense reports on behalf of the delegator. |   |
|  CanPrepare |  Whether the delegate is granted the right to create expense reports on behalf of the delegator. |
|  CanSubmit |  Whether the delegate is granted the right to submit expense reports on behalf of the delegator. |
|  CanTemporaryApprove |  Whether the delegate is granted the same temporary approval rights as the delegator. |
|  CanViewReceipts |  Whether the delegate is granted the right to view receipts on behalf of the delegator. |
|  ReceiveApprovalEmails |  Whether the delegate also receives the approval emails sent to the delegator. |
|  ReceivesEmails |  Whether the delegate also receives the Concur emails sent to the delegator. |
|  DelegatorXUserID |  The user ID of the delegator. |

 |

####  XML Example of Successful Response

    200 OK
    Content-Type: application/xml

    <DelegatorsList xmlns="http://www.concursolutions.com/api/expense/expensereport/2011/03" xmlns:i="http://www.w3.org/2001/XMLSchema-instance">
        <Delegator>
            <CanApprove>N</CanApprove>
            <CanPrepare>Y</CanPrepare>
            <CanSubmit>Y</CanSubmit>
            <CanTemporaryApprove>N</CanTemporaryApprove>
            <CanViewReceipts>Y</CanViewReceipts>
            <ReceiveApprovalEmails>N</ReceiveApprovalEmails>
            <ReceivesEmails>N</ReceivesEmails>
            <DelegatorXUserID>terryb@example.com</DelegatorXUserID>
        </Delegator>
        <Delegator>
            <CanApprove>N</CanApprove>
            <CanPrepare>Y</CanPrepare>
            <CanSubmit>Y</CanSubmit>
            <CanTemporaryApprove>N</CanTemporaryApprove>
            <CanViewReceipts>N</CanViewReceipts>
            <ReceiveApprovalEmails>N</ReceiveApprovalEmails>
            <ReceivesEmails>N</ReceivesEmails>
            <DelegatorXUserID>patd@example.com</DelegatorXUserID>
        </Delegator>
    </DelegatorsList>

  


[1]: https://developer.concur.com/oauth-20
[2]: https://developer.concur.com/reference/http-codes
