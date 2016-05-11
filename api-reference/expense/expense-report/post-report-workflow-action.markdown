---
title: Post an expense report workflow action
layout: reference
---

## Description
Posts a workflow action for the supplied expense report. The workflow action moves the expense report through the workflow process. 

### Workflow actions

The available actions are:

* **Approve**: The report successfully completes the current workflow step. The report will continue in the workflow, and may require additional approvals based on configuration. If the report was in the Processing Payment status, it will be moved to the Paid status.  
**NOTES**:
  1. Reports can't be moved from Processing Payment to Paid until all of their expense entries have been extracted or manually paid. Wait until the extract process completes for the report, then send the Approve workflow action.
  2. This API is not supported for the Processor role or expense reports pending the Processor workflow step.
* **Send Back to Employee**: The report is sent back to the employee for revision. When the user resubmits the report, it travels through the entire workflow again.
* **Recall to Employee**: This workflow action is initiated by the employee, and is only available after the report has been submitted. This workflow action may not be available to some clients due to configuration.

**WARNING:** Prior to calling this endpoint the Caller _must_ check the Approval Status found in the **ApprovalStatusName** element in the response for [Get Report Details][1] to ensure the report is at the workflow step the Caller expects.  Under no circumstance should a Caller make a call to this endpoint without being certain the report is at the workflow step the Caller expects.

### Workflow roles
Each workflow step in a workflow is associated with a workflow role. Professional clients can configure workflow steps and roles in the Workflows area of Expense Admin. The OAuth consumer is evaluated to determine which role(s) the consumer has in Concur. There are two different types of workflow roles as described in the following sections.

#### System role
The System role is used when the workflow actions can be completed programatically. Any workflow action can be completed this way, depending on the client's business process. The workflow role can be configured while adding the report workflow step. Some steps may require the System role. When using this role, the OAuth consumer must have the following user role:

* Standard/Developer Sandbox: Can Administer
* Professional: Company Admin or Web Services Administrator. 

The expense report owner must have an approver or processor assigned to them before the System role can make changes to their reports.

#### Approver role

The Approver role is used when the workflow action should be completed by a particular user. Developers who want to present a list of reports to approve and send the workflow action when the reports have been evaluated by the approver use the Approver role. This role requires that a user with the correct Concur role (Expense Approver, Authorized Approver, Cost Object Approver, or Expense Processor for Professional, or the Can Administer or Can Approve Reports roles for Standard) authenticates using Standard OAuth before supplying the workflow action. The user must also have access (be a valid approver or processor) for the supplied report ID.

## Request

### Request parameters

#### Path parameters

| Parameter |Required/Optional| Description |
|-----------------|--------|-----------------------------|
|{_workflowstepID_}/workflowaction | required | The identifier for the desired workflow step and the **workflowaction** keyword.|

Example: `https://www.concursolutions.com/api/expense/expensereport/v1.1/report/{workflowstepId}/workflowaction`

**URI Source:** The URI is returned in the WorkflowActionURL element of the [Get Report Details][1] response.

### Headers

#### Authorization header

Authorization header with OAuth token for valid Concur user. Required.

### Content-Type header

application/xml

### Request body

#### Root elements

This request should contain a **WorkflowAction** parent element with the following child elements.

#### WorkflowAction child elements

|  Element |  Required/optional |  Description |
|----------|--------------------|--------------|
|  Action |  required |  The name of the workflow action. Possible values are: **Approve** , **Send Back to Employee** , or **Recall to Employee**. Must be one of the workflow actions available for the workflow step. Consult Expense Admin >Workflow to learn details. |
|  Comment |  required, for Send Back to Employee |  Must be used with the Send Back to Employee workflow action. This comment is visible wherever report comments are available to the employee, approver, authorization request administrator, and/or processor. Max length: 2000 |

### Response

#### Response body

This request will return an **ActionStatus** parent element with the following child elements.

#### ActionStatus elements

|  Element | Description |
|----------|-------------|
|  Message |  The error message. Only appears if a workflow action error was generated. |
|  Status | The status of the report workflow action. |

## Examples

###  XML example request

```
xml
    POST https://www.concursolutions.com/api/expense/expensereport/v1.1/report/nx2WRNzp18$wjehk%wqEL6EDHRwi9r$paQS1UqyL6a454QitqQ/workflowaction HTTP/1.1
    Authorization: OAuth {access token}
    ...

    <WorkflowAction xmlns="http://www.concursolutions.com/api/expense/expensereport/2011/03">
        <Action>Approve</Action>
        <Comment>Approved via Concur Connect</Comment>
    </WorkflowAction>
```

###  XML example of successful response

```
xml
    <?xml version="1.0" encoding="utf-8"?>
    <ActionStatus xmlns="http://www.concursolutions.com/api/expense/expensereport/2011/03" xmlns:i="http://www.w3.org/2001/XMLSchema-instance">
        <Message>SUCCESS!</Message>
        <Status>SUCCESS!</Status>
    </ActionStatus>
```

###  XML example of response With error

```
xml
    <?xml version="1.0" encoding="utf-8"?>
    <ActionStatus xmlns="http://www.concursolutions.com/api/expense/expensereport/2011/03" xmlns:i="http://www.w3.org/2001/XMLSchema-instance">
        <Message>The action cannot be executed because the item has recently been changed. Please refresh your list and try again.</Message>
        <Status>FAILURE</Status>
    </ActionStatus>
```


[1]: /api-reference/expense/expense-report/reports.html#getID
[2]: https://developer.concur.com/reference/http-codes
