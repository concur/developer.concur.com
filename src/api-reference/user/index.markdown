---
title: User
layout: reference
---

# User

The Users resource represents a set of SAP Concur users. It is always managed as a batch of users, even if the batch contains only one user.

* [Retrieve a user's information](#getUser)
  * [Schema](#getUserSchema)
* [Retrieve all users based on search criteria](#getall)
* [Retrieve the list of required fields for creating a user](#requiredFields)
  * [Schema](#requiredFieldsSchema)
* [Update a user's account information](#createUser) - Create a User is not supported at this time.
  * [Request schema](#createUserRequestSchema)
  * [Response schema](#createUserResponseSchema)
* [Update a user's password](#updatePwd)
  * [Request schema](#updatePwdRequestSchema)
  * [Response schema](#updatePwdResponseSchema)

### Version

1.0

## Process Flow

![Process Flow for the User Resource](./create-user.png)

## <a name="getUser"></a>Retrieve a User's Information

This resource allows you to get profile information for a given user. If a request URL does not include a `?loginID` parameter then the response will be for the logged in user (and you must pass authentication information with your request).

    GET api/user/v1.0/user

### Parameters

Name|Type|Format|Description
-----|------|------|--------------
`loginID`|`string`|-|The URL-encoded SAP Concur login of the user. Optional.

### <a name="getUserSchema"></a>Get User Response Schema

Name|Type|Format|Description
-----|------|------|--------------
`loginID`|`string`|-|The user's login ID.
`Active`|`Boolean`|Y/N|Whether the user is currently active.
`FirstName`|`string`|-|The user's first name.
`LastName`|`string`|-|The user's last name.
`Mi`|`string`|-|The user's middle initial.
`EmailAddress`|`string`|-|The user's email address.
`EmpId`|`string`|-|The unique identifier for the user.
`LedgerName`|`string`|-|The user's assigned account code ledger.
`LocaleName`|`string`|-|The user's language locale code. One of the Supported Locales. Example: United States English is en_US.
`OrgUnit1 through OrgUnit6`|`string`|-|Varies depending on configuration.
`Custom1 through Custom21`|`string`|-|Varies depending on configuration. If the custom field is a list field, the data will be returned as: (list item short code) list item name. List Field Example: <Custom1>(1234) Project 1234</Custom1>
`CtryCode`|`string`|2-character country code|The user's two-digit country code.
`CashAdvanceAccountCode`|`string`|-|The user's account code for cash advances.
`CrnCode`|`string`|ISO 4217 currency code|The user's three character reimbursement currency. Example: United States Dollar is USD.
`CtrySubCode`|`string`|-|The user's two-digit country code and two-digit state or province code. Example: Washington State, United States is US-WA.
`ExpenseUser`|`Boolean`|Y/N|Whether the user has access to Expense.
`ExpenseApprover`|`Boolean`|Y/N|Whether the user is an Expense approver.
`TripUser`|`Boolean`|Y/N|Whether the user has access to Travel.
`InvoiceUser`|`Boolean`|Y/N|Whether the user has access to Invoice.
`InvoiceApprover`|`Boolean`|Y/N|Whether the user is an Invoice approver.
`ExpenseApproverEmployeeID`|`string`|-|The employee ID of the user's Expense approver. If you are importing both a user and their approver, the approver should be listed before the user in the batch.
`IsTestEmp`|`Boolean`|Y/N|Whether the user is a test user.

## <a name="getall"></a>Retrieve All Users Based on Search Criteria

Note that this is a version 3.0 API and can be found [here](/api-explorer/v3-0/Users.html).

## <a name="requiredFields"></a>Retrieve the List of Required Fields for Creating a User

Retrieves a list of configured fields on the Global employee form in SAP Concur.

    GET api/user/v1.0/FormFields

### <a name="requiredFieldsSchema"></a> Required Fields Response Schema

Name|Type|Format|Description
-----|------|------|--------------
`Id`|`string`|-|The unique field identifier.
`Label`|`string`|-|The displayed field label.
`ControlType`|`string`|-|The type of field.
`DataType`|`string`|-|The type of data the field collects.
`MaxLength`|`string`|-|The maximum length of data in the field.
`Required`|`string`|-|Whether the field is required.
`Cols`|`string`|-|The number of columns the field occupies.
`Access`|`string`|-|The end-user access to the field.
`Width`|`string`|-|The width of the field, in pixels.
`Custom`|`string`|-|Whether the field is custom.
`Sequence`|`string`|-|The sequence of the field on the form.

These elements are returned for Custom fields only:

Name|Type|Format|Description
-----|------|------|--------------
`ParentFormTypeCode`|`string`|-|This element is only populated for multi-level list fields. The type of form that the parent field (the field one level higher in the list hierarchy) is connected to.
`ParentFieldId`|`string`|-|The identifier for the field one level higher in the list hierarchy.
`IsCopyDownSourceForOtherForms`|`string`|-|Whether the field is used as a copy down source by other forms.
`ListName`|`string`|-|The name of the list associated with the field.
`HierLevel`|`string`|-|The list level of the field. If it is the second level field in a two-level list, the value would be 2.

## <a name="createUser"></a>Update a User's Account Information

Updates one or more users. The batch can contain up to 500 users.

>**NOTE**: The User API can be used to add new users, however the user accounts will not be fully configured and ready for use. Additional work to the user profiles must be completed, either with manual edits or updates via the user import, in order to complete the user profiles. There is a high degree of variability in customer configuration that is not all supported by this API. Manual edits or updates via a file import are most likely required to complete the User profiles started with this API. Only POST is supported. Please use the [Employee Import](https://www.concurtraining.com/customers/tech_pubs/Docs/_Current/SPC/Spc_Shr/Shr_SPEC_Emp_Imp.pdf) feature if the User API does not meet your needs.

    POST api/user/v1.0/users

This API requires as its arguments a `batch` element containing a `UserProfile` child element for each user to be added (in the future) or updated. The `UserProfile` child elements will vary depending on the form configuration, and may contain the following elements.

### <a name="createUserRequestSchema"></a>Update User Account Information Request Schema

Name|Type|Format|Description
-----|------|------|--------------
`EmpId`|`string`|-|Required. The unique identifier for the user. The default value is the user's email address. Maximum 48 characters.
`FeedRecordNumber`|`string`|-|Required. The record number in the current batch.
`LoginId`|`string`|-|Required. The user's login ID. The default value is the user's email address. Maximum 128 characters.
`LocaleName`|`string`|-|The user's language locale code. List of locale codes are available in the [Employee Import](https://www.concurtraining.com/customers/tech_pubs/Docs/_Current/SPC/Spc_Shr/Shr_SPEC_Emp_Imp.pdf) Appendix. One of the Supported Locales. Example: United States English is en_US. The supported languages vary by company but always include en_US. Maximum: 5 characters.
`Active`|`Boolean`|Y/N|Whether the user is currently active.
`Password`|`string`|-|Required. The user's password. This element can be used to enter the password for a new user, but cannot be used to update the password for an existing user. Maximum 255 characters.
`FirstName`|`string`|-|The user's first name. Maximum 32 characters.
`LastName`|`string`|-|The user's last name. Maximum 32 characters.
`Mi`|`string`|-|The user's middle initial. Maximum 1 character.
`EmailAddress`|`string`|-|The user's email address. Maximum 255 characters.
`LedgerKey`|`string`|-|Required for new users. The user's assigned account code ledger. Example: Default. Maximum 20 characters.
`OrgUnit1 through OrgUnit6`|`string`|-|The custom organizational unit fields on the Employee form. Varies depending on configuration. Use the Employee Form Field resource to get the list of configured fields. Maximum 48 characters for each field.
`Custom1 through Custom21`|`string`|-|The custom fields on the Employee form. Varies depending on configuration. Use the Employee Form Field resource to get the list of configured fields. Maximum 48 characters.
`CtryCode`|`string`|ISO 3166-1 alpha-2 country code|Country code, example: United States is US. Maximum 2 characters.
`CashAdvanceAccountCode`|`string`|-|The user's account code for cash advances. Maximum 20 characters.
`CrnKey`|`string`|ISO 4217 3-letter currency code|Currency code for the user's reimbursement currency. Example: United States Dollar is USD. Maximum 3 characters.
`CtrySubCode`|`string`|-|The user's two-character country code and two-character state or province code. Example: Washington State, United States is US-WA. Maximum 2 characters.
`ExpenseUser`|`Boolean`|`Y/N`|Whether the user has access to Expense.
`ExpenseApprover`|`Boolean`|`Y/N`|Whether the user is an Expense approver.
`TripUser`|`Boolean`|`Y/N`|Whether the user has access to Travel.
`InvoiceUser`|`Boolean`|`Y/N`|Whether the user has access to Invoice.
`InvoiceApprover`|`Boolean`|`Y/N`|Whether the user is an Invoice approver.
`ExpenseApproverEmployeeID`|`string`|-|The employee ID of the user's Expense approver. If you are importing both a user and their approver, the approver should be listed before the user in the batch. Maximum 48 characters.
`NewLoginID`|`string`|-|Use this element to change the Login ID for an existing employee. Maximum 128 characters.
`NewEmployeeID`|`string`|-|Use this element to change the Employee ID for an existing employee. Maximum 48 characters.

### <a name="createUserResponseSchema"></a>Update User Account Information Response Schema

Name|Type|Format|Description
-----|------|------|--------------
`records-succeeded`|`string`|-|The number of records processed that were successfully added or updated.
`records-failed`|`string`|-|The number of records processed that were not successfully added or updated.

When any users are successfully updated:

The request will return the `UserDetails` parent element with a `UserInfo` element for each successfully added or updated user. The `UserInfo` elements will contain the following child elements:

Name|Type|Format|Description
-----|------|------|--------------
`EmployeeID`|`string`|-|The employee ID of the user.
`FeedRecordNumber`|`string`|-|The item number of the record in the feed.
`Status`|`string`|-|The status of the attempt to add or update the user. Should always contain the word SUCCESS.

When any users fail:

The request will return the errors parent element with an error parent element for each record failure. The error element will contain the following child elements:

Name|Type|Format|Description
-----|------|------|--------------
`EmployeeID`|`string`|-|The employee ID of the user.
`FeedRecordNumber`|`string`|-|The item number of the record in the feed.
`Message`|`string`|-|The error message.

### Example
```xml
<batch xmlns="http://www.concursolutions.com/api/user/2011/02">
    <UserProfile>
        <LoginID>loginID</LoginID>
        <EmployeeID>employeeID</EmployeeID>
        <Active>N</Active>
        <--! Any more required fields -->
    </UserProfile>
</batch>
```

## <a name="updatePwd"></a>Update a User's Password

     POST api/user/v1.0/Users/password

Updates passwords for up to 500 users.

### <a name="updatePwdRequestSchema"></a>Update User's Password Request Schema

This function requires as its arguments a `UserBatch` element containing a User child element for each user. The `User` element must have the following elements:

Name|Type|Format|Description
-----|------|------|--------------
`LoginID`|`string`|-|Required. The user's login ID. The default value is the user's email address.
`Password`|`string`|-|The user's new password.

### <a name="updatePwdResponseSchema"></a>Update User's Password Response Schema

This request will return a `BatchResult` parent element with the following child elements:

Name|Type|Format|Description
-----|------|------|--------------
`RecordsSucceeded`|`string`|-|The number of records processed that were successfully updated.
`RecordsFailed`|`string`|-|The number of records processed that were not successfully updated.
`UserPasswordStatusList`|`string`|-|This parent element will contains a `UserPasswordStatus` element for each user.

The `UserPasswordStatus` element contains the following child elements:

Name|Type|Format|Description
-----|------|------|--------------
`LoginID`|`string`|-|The login ID of the user.
`Status`|`Boolean`|Success/Failed|The status of the attempt to update the user's password.
`Message`|`string`|-|Additional details about the success or failure of the request.

### Example

```xml
<UserBatch xmlns="http://www.concursolutions.com/api/user/2011/02">
    <User>
        <LoginID>loginID</LoginID>
        <Password>password</Password>
    </User>
</UserBatch>
```
