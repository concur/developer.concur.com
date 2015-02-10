---
title: Get User Information
layout: operation
---


## Description

Retrieves the profile information for the OAuth consumer or the user specified with the loginID query string.

## Request

This resource supports the following GET actions: Get User Information Request

```
GET {InstanceURI}/api/user/v1.0/User HTTP/1.1
Authorization: OAuth {access token}
```

### Accept type

* application/xml

### Authorization header

Authorization header with OAuth token for a valid Concur user.

### Request Parameters

#### Required

None

#### Optional

**{loginID}** - The URL-encoded Concur login of the user.

Example: {InstanceURI}/api/user/v1.0/User/?loginID={loginID}

The loginID parameter can only be used if the OAuth consumer has one of the following user roles:

  Standard and the developer sandbox: Can Administer

  Professional: User Admin, User Admin (Read Only), Employee Administrator, Employee Administrator (Read Only), Web Services Admin, Company Admin.

Example: https://www.concursolutions.com/api/user/v1.0/User/?loginID={loginID}


## Response

This request will return a UserProfile child element for the specified user. The UserProfile elements will vary depending on the form configuration.

### Content type

* application/xml

### Response root elements

|  Element Name |  Description |
|-------------------------|----------------------------------------------------------------------------------------------------------------|
|  LoginId |  The user's logon ID. | 
|  Active |  Whether the user is currently active. Format: Y/N. |
|  FirstName |  The user's first name. |
|  LastName |  The user's last name. |
|  Mi |  The user's middle initial. |
|  EmailAddress |  The user's email address. |
|  EmpId |  The unique identifier for the user. |
|  LedgerName |  The user's assigned account code ledger. |
|  LocaleName |  The user's language locale code. One of the [Supported Locales][3]. Example: United States English is en_US. |
|  OrgUnit1 through OrgUnit6 |  Varies depending on configuration. |
|  Custom1 through Custom21 |  Varies depending on configuration. If the custom field is a list field, the data will be returned as: (list item short code) list item name. List Field Example: <Custom1>(1234) Project 1234</Custom1> |
|  CtryCode |  The user's two-digit country code. |
|  CashAdvanceAccountCode |  The user's account code for cash advances. |
|  CrnCode |  The user's three digit reimbursement currency. Example: United States Dollar is USD. |
|  CtrySubCode |  The user's two-digit country code and two-digit state or province code. Example: Washington State, United States is US-WA. |
|  ExpenseUser |  Whether the user has access to Expense. Format: Y/N. |
|  ExpenseApprover |  Whether the user is an Expense approver. Format: Y/N. |
|  TripUser |  Whether the user has access to Travel. Format: Y/N. |
|  InvoiceUser |  Whether the user has access to Invoice. Format: Y/N. |
|  InvoiceApprover |  Whether the user is an Invoice approver. Format: Y/N. |
|  ExpenseApproverEmployeeID |  The employee ID of the user's Expense approver. If you are importing both a user and their approver, the approver should be listed before the user in the batch. |
|  IsTestEmp |  Whether the user is a test user. Format: Y/N. |

## Examples

### Example 1: Get User Information 

#### Request 

```
GET https://www.concursolutions.com/api/user/v1.0/User HTTP/1.1
Authorization: OAuth {access token}
```

#### Response 

```
200 OK
Content-Type: application/xml

<UserProfile xmlns="https://www.concursolutions.com/api/user/2011/02" xmlns:i="http://www.w3.org/2001/XMLSchema-instance">
    <LoginId>cm@example.com</LoginId>
    <FirstName>Chris</FirstName>
    <LastName>Miller</LastName>
    <Mi>T</Mi>
    <EmailAddress>cm@example.com</EmailAddress>
    <EmpId>cm@example.com</EmpId>
    <Active>Y</Active>
    <OrgUnit1>R&D</OrgUnit1>
    <OrgUnit2 />
    <OrgUnit3 />
    <OrgUnit4 />
    <OrgUnit5 />
    <OrgUnit6 />
    <Custom1>Redmond</Custom1>
    <Custom2 />
    <Custom3 />
    <Custom4 />
    <Custom5 />
    <Custom6 />
    <Custom7 />
    <Custom8 />
    <Custom9 />
    <Custom10 />
    <Custom11 />
    <Custom12 />
    <Custom13 />
    <Custom14 />
    <Custom15 />
    <Custom16 />
    <Custom17 />
    <Custom18 />
    <Custom19 />
    <Custom20 />
    <Custom21 />
    <LedgerName>Default</LedgerName>
    <LocaleName>en_US</LocaleName>
    <CtryCode>US</CtryCode>
    <CrnCode>USD</CrnCode>
    <CtrySubCode>US-WA</CtrySubCode>
    <ExpenseUser>Y</ExpenseUser>
    <ExpenseApprover>N</ExpenseApprover>
    <TripUser>Y</TripUser>
    <InvoiceUser>N</InvoiceUser>
    <InvoiceApprover>N</InvoiceApprover>
    <ExpenseApproverEmployeeID>345678</ExpenseApproverEmployeeID>
    <IsTestEmp>N</IsTestEmp>
    <CashAdvanceAccountCode />
</UserProfile>
```

### Example 2: Get User Information for loginID: cm@example.com

#### Request 

```
GET https://www.concursolutions.com/api/user/v1.0/User?loginID=cm@example.com HTTP/1.1
Authorization: OAuth {access token}
```

#### Response 

```
200 OK
Content-Type: application/xml

<UserProfile xmlns="https://www.concursolutions.com/api/user/2011/02" xmlns:i="http://www.w3.org/2001/XMLSchema-instance">
    <LoginId>cm@example.com</LoginId>
    <FirstName>Chris</FirstName>
    <LastName>Miller</LastName>
    <Mi>T</Mi>
    <EmailAddress>cm@example.com</EmailAddress>
    <EmpId>cm@example.com</EmpId>
    <Active>Y</Active>
    <OrgUnit1>R&D</OrgUnit1>
    <OrgUnit2 />
    <OrgUnit3 />
    <OrgUnit4 />
    <OrgUnit5 />
    <OrgUnit6 />
    <Custom1>Redmond</Custom1>
    <Custom2 />
    <Custom3 />
    <Custom4 />
    <Custom5 />
    <Custom6 />
    <Custom7 />
    <Custom8 />
    <Custom9 />
    <Custom10 />
    <Custom11 />
    <Custom12 />
    <Custom13 />
    <Custom14 />
    <Custom15 />
    <Custom16 />
    <Custom17 />
    <Custom18 />
    <Custom19 />
    <Custom20 />
    <Custom21 />
    <LedgerName>Default</LedgerName>
    <LocaleName>en_US</LocaleName>
    <CtryCode>US</CtryCode>
    <CrnCode>USD</CrnCode>
    <CtrySubCode>US-WA</CtrySubCode>
    <ExpenseUser>Y</ExpenseUser>
    <ExpenseApprover>N</ExpenseApprover>
    <TripUser>Y</TripUser>
    <InvoiceUser>N</InvoiceUser>
    <InvoiceApprover>N</InvoiceApprover>
    <ExpenseApproverEmployeeID>345678</ExpenseApproverEmployeeID>
    <IsTestEmp>N</IsTestEmp>
    <CashAdvanceAccountCode />
</UserProfile>
```

## See also

[HTTP Status Codes][1]

[User Errors][2]


[1]: https://developer.concur.com/reference/http-codes
[2]: https://developer.concur.com/node/401#usererrors
[3]: https://developer.concur.com/reference/locale-codes
