---
title: Update or Add New Users
layout: operation
---


## Description

Adds or updates one or more users. The batch can contain up to 500 users.

## Request

This resource supports the following POST actions: Post New or Updated Users Request

```
POST {InstanceURI}/api/user/v1.0/Users HTTP/1.1
Authorization: OAuth {access token}
Content-Type: application/xml
```

### Content type

* application/xml

### Authorization header

Authorization header with OAuth token for a valid Concur user.

### Request Parameters

#### Required

None

#### Optional

None

### Request body root elements

This function requires as its arguments a batch element containing a UserProfile child element for each user to be added or updated. The UserProfile child elements will vary depending on the form configuration, and may contain the following elements:


This function requires as its arguments a **UserBatch** element containing a **User** child element for each user. The **User** element must have the following elements:  

|  Element |  Required/Optional | Data Type | Description |
|:----------|:--------------------|:-----------|:-------------|
|  EmpId |  Required | string |  The unique identifier for the user. The default value is the user's email address. Maximum 48 characters. |  
|  FeedRecordNumber |  Required | int32 | The record number in the current batch. |
|  LoginId |  Required | string | The user's logon ID. The default value is the user's email address. Maximum 128 characters. |
|  LocaleName |  Optional | string | The user's language locale code. Maximum 5 characters. One of the [Supported Locales][3]. Example: United States English is en_US. The supported languages vary by company but always include en_US. |
|  Active |  Optional | string | Whether the user is currently active. Format: Y/N. |
|  Password |  Required | string | The user's password. This element can be used to enter the password for a new user, but cannot be used to update the password for an existing user.  Maximum 255 characters.  **NOTE**: This information is encrypted in the Concur database. |
|  FirstName |  Depends on configuration | string |  The user's first name. Maximum 32 characters. |
|  LastName |  Depends on configuration | string | The user's last name. Maximum 32 characters. |
|  Mi |  Optional | string | The user's middle initial. Maximum 1 character. |
|  EmailAddress |  Depends on configuration | string | The user's email address. Maximum 255 characters. |
|  LedgerKey |  Optional | string | The user's assigned account code ledger. Maximum 20 characters. Example: Default. |
|  OrgUnit1 through OrgUnit6 |  Depends on configuration | string | The custom organizational unit fields on the Employee form. Varies depending on configuration. Use the [Employee Form Field][1] resource to get the list of configured fields. Maximum 48 characters for each field. |
|  Custom1 through Custom21 |  Depends on configuration | string | The custom fields on the Employee form. Varies depending on configuration. Use the [Employee Form Field][1] resource to get the list of configured fields. Maximum 48 characters. **NOTE**: If any of the custom fields are configured to contain list values, please refer to the [Posting Custom List Items][4] page for information on how to correctly submit list item values.|
|  CtryCode |  Depends on configuration | string | The[ ISO 3166-1 alpha-2][5] country code. Maximum 2 characters. Example: United States is US. |
|  CashAdvanceAccountCode |  Depends on configuration | string | The user's account code for cash advances. Maximum 20 characters. |
|  CrnKey |  Depends on configuration |  string | The [3-letter ISO 4217 currency code][6] for the user's reimbursement currency. Maximum 3 characters. Example: United States Dollar is USD. |
|  CtrySubCode |  Depends on configuration |  string | The user's two-character country code and two-character state or province code. Maximum 2 characters. Example: Washington State, United States is US-WA. |
|  ExpenseUser |  Optional | string | Whether the user has access to Expense. Format: Y/N. |
|  ExpenseApprover |  Optional | string | Whether the user is an Expense approver. Format: Y/N. |
|  TripUser |  Optional | string |  Whether the user has access to Travel. Format: Y/N. |
|  InvoiceUser |  Optional | string | Whether the user has access to Invoice. Format: Y/N. |
|  InvoiceApprover |  Optional | string | Whether the user is an Invoice approver. Format: Y/N. |
|  ExpenseApproverEmployeeID |  Optional | string | The employee ID of the user's Expense approver. Maximum 48 characters.If you are importing both a user and their approver, the approver should be listed before the user in the batch. |
|  NewLoginID |  Optional | string | Use this element to change the Login ID for an existing employee. Maximum 128 characters. |
|  NewEmployeeID |  Optional | string | Use this element to change the Employee ID for an existing employee. Maximum 48 characters. |


## Response

This request will return a user-batch-result parent element.
 

### Response body root elements

|  Element  |  Description |
|:-----------|:--------------|
|  records-succeeded |  The number of records processed that were successfully added or updated. |   
|  records-failed |  The number of records processed that were not successfully added or updated. |

#### Records-succeeded child elements

When any users are successfully added or updated:

The request returns the **UserDetails** parent element with a **UserInfo** element for each successfully added or updated user. The **UserInfo** elements will contain the following child elements:

|  Element |  Description |
|:----------|:--------------|
|  EmployeeID |  The employee ID of the user. |
|  FeedRecordNumber |  The item number of the record in the feed. |
|  Status |  The status of the attempt to add or update the user. Should always contain the word SUCCESS. |


#### Records-failed child elements

When any users fail:

The request will return the **errors** parent element with an **error** parent element for each record failure. The **error** element will contain the following child elements:

|  Element |  Description |
|:----------|:--------------|
|  EmployeeID |  The ID of the user that failed. |
|  FeedRecordNumber |  The item number of the record in the feed. |
|  message |  The error message. |


## Examples

### Example 1: Post users  

#### **Request** 

```
POST https://www.concursolutions.com/api/user/v1.0/Users HTTP/1.1 
Authorization: OAuth {access token}
Content-Type: application/xml
<batch xmlns="http://www.concursolutions.com/api/user/2011/02">
    <UserProfile>
        <EmpId>345678</EmpId> 
        <FeedRecordNumber>1</FeedRecordNumber>
        <LoginId>tb@example.com</LoginId>
        <LocaleName>en_US</LocaleName> 
        <Active>Y</Active> 
        <Password>password</Password> 
        <FirstName>Terry</FirstName>
        <LastName>Brown</LastName> 
        <Mi>L</Mi> 
        <EmailAddress>tb@example.com</EmailAddress>
        <LedgerKey>DEFAULT</LedgerKey>
        <OrgUnit1>R&amp;D</OrgUnit1> 
        <OrgUnit2></OrgUnit2> 
        <OrgUnit3></OrgUnit3>
        <Custom1>Redmond</Custom1> 
        <CtryCode>US</CtryCode>
        <CrnKey>USD</CrnKey>
        <CtrySubCode>US-WA</CtrySubCode> 
        <ExpenseUser>Y</ExpenseUser> 
        <ExpenseApprover>Y</ExpenseApprover> 
        <TripUser>Y</TripUser> 
        <InvoiceUser>N</InvoiceUser> 
        <InvoiceApprover>N</InvoiceApprover>
        <ExpenseApproverEmployeeID>12345</ExpenseApproverEmployeeID> 
    </UserProfile> 
    <UserProfile> 
        <EmpId>456789</EmpId> 
        <FeedRecordNumber>2</FeedRecordNumber>
        <LoginId>cm@example.com</LoginId>
        <LocaleName>en_US</LocaleName> 
        <Active>Y</Active> 
        <Password>password</Password> 
        <FirstName>Chris</FirstName>
        <LastName>Miller</LastName> 
        <Mi>T</Mi> 
        <EmailAddress>cm@example.com</EmailAddress>
        <LedgerKey>Default</LedgerKey>
        <OrgUnit1>R&amp;D</OrgUnit1> 
        <OrgUnit2></OrgUnit2> 
        <OrgUnit3></OrgUnit3>
        <Custom1>Redmond</Custom1> 
        <CtryCode>US</CtryCode>
        <CrnKey>USD</CrnKey>
        <CtrySubCode>US-WA</CtrySubCode> 
        <ExpenseUser>Y</ExpenseUser> 
        <ExpenseApprover>N</ExpenseApprover> 
        <TripUser>Y</TripUser> 
        <InvoiceUser>N</InvoiceUser> 
        <InvoiceApprover>N</InvoiceApprover>
        <ExpenseApproverEmployeeID>345678</ExpenseApproverEmployeeID>
    </UserProfile> 
</batch>
```

#### **Response**

XML Example Response with Success and Failure

```
<user-batch-result xmlns="http://www.concursolutions.com/api/user/2011/02" xmlns:i="http://www.w3.org/2001/XMLSchema-instance"> 
    <records-succeeded>1</records-succeeded> 
    <records-failed>1</records-failed> 
    <errors> 
        <error> 
            <EmployeeID>456789</EmployeeID> 
            <FeedRecordNumber>2</FeedRecordNumber> 
            <message>MISSING_REQUIRED_FIELDS:Active</message> 
        </error> 
    </errors> 
    <UserDetails> 
        <UserInfo> 
            <EmployeeID>345678</EmployeeID> 
            <FeedRecordNumber>1</FeedRecordNumber> 
            <Status>SUCCESS</Status> 
        </UserInfo> 
    </UserDetails> 
</user-batch-result> 
```
 

## **See also**

To learn the required fields, use the [Employee Form Field][1] resource.

To update user passwords, use the [User Password][2] resource.

[HTTP Status Codes][7]

[User Errors][8]



[1]: https://developer.concur.com/users/employee-form-field-resource
[2]: https://developer.concur.com/users/user-password-resource
[3]: https://developer.concur.com/reference/locale-codes
[4]: https://developer.concur.com/reference/custom-list-items
[5]: http://en.wikipedia.org/wiki/ISO_3166-1_alpha-2
[6]: http://en.wikipedia.org/wiki/ISO_4217
[7]: https://developer.concur.com/reference/http-codes
[8]: https://developer.concur.com/node/401#usererrors
