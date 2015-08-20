---
title: Expense Delegators
layout: reference
---

# Expense delegators

## Description
Users that have granted delegate permissions to the another Expense user.

## Version
1.1

## URI
`https://www.concursolutions.com/api/expense/expensereport/v1.1/Delegators`

## Operations
[GET](#get)  
 


## <a name="get"></a>Get expense delegators


### Description
Retrieves the list of users that have granted delegate permissions to the user specified in the OAuth access token.

### Request

#### Request parameters
None.

### Headers

#### Authorization header
Authorization header with OAuth token for valid Concur user. Required.

### Accept header
application/xml

### Response

#### Content Types
application/xml

#### Content body

This request will return a **DelegatorsList** parent element with a **Delegator** parent element for each user that has granted delegate rights to the OAuth consumer. 

#### Delegator elements

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

### Examples

#### XML Example Request

```
xml
GET https://www.concursolutions.com/api/expense/expensereport/v1.1/Delegators HTTP/1.1
Authorization: OAuth {access token}
...
```

### XML example of successful response

```
xml
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




