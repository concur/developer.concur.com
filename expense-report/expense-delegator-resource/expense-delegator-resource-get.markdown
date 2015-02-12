---
title: Get a list of expense delegators
layout: operation
---

## Description
Retrieves the list of users that have granted delegate permissions to the user specified in the [OAuth][1] access token.

## Request
```
GET https://www.concursolutions.com/api/expense/expensereport/v1.1/Delegators HTTP/1.1
Authorization: OAuth {access token}
...
```

### Request parameters

### Content types
application/xml

### Authorization header
Authorization header with OAuth token for valid Concur user.

## Response
```
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
```
### Response root elements

This request will return a **DelegatorsList** parent element with a **Delegator** parent element for each user that has granted delegate rights to the OAuth consumer. The **Delegator** element has the following child elements:

|  Element |  Description |
| -------- | ------------ |
|  CanApprove |  Whether the delegate is granted the right to approve expense reports on behalf of the delegator. |
|  CanPrepare |  Whether the delegate is granted the right to create expense reports on behalf of the delegator. |
|  CanSubmit |  Whether the delegate is granted the right to submit expense reports on behalf of the delegator. |
|  CanTemporaryApprove |  Whether the delegate is granted the same temporary approval rights as the delegator. |
|  CanViewReceipts |  Whether the delegate is granted the right to view receipts on behalf of the delegator. |
|  ReceiveApprovalEmails |  Whether the delegate also receives the approval emails sent to the delegator. |
|  ReceivesEmails |  Whether the delegate also receives the Concur emails sent to the delegator. |
|  DelegatorXUserID |  The user ID of the delegator. |

[1]: https://developer.concur.com/oauth-20
[2]: https://developer.concur.com/reference/http-codes
