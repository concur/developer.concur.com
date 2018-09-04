---
title: Expense - Professional Edition & Standard Edition
layout: reference
---
## ERP Integration - This Guide is applicable to both Expense and Invoice ERP Integrations. All App Center ERP Partners must be able to support both Expense and Invoice for both product lines: Standard Edition and Professional Edition.

This API Recipe describes API tasks associated with ERP Financial Integration. This App is intended for financial integration companies or finance leaders who want to streamline the processes once Expense Reports (or Invoice Payment Requests) in Concur have been final-approved and are ready to be integrated into the client's financial system.

Review the following presentations to understand what to expect during development, certification, and your role in support of your app:
<https://prezi.com/p/lw0qqy51zcmd/>

This presentation explains how to support our multiple Data Centers: <https://prezi.com/view/8QcMUM2rHcvXQQIOUiwy/>

Before a partner can obtain expense report or invoice data from Concur, ensure that you have completed the following:

- Ensure your app has been certified by Concur
- Ensure your app can authenticate with Concur. See authentication docs [here](/api-reference/authentication/apidoc.html).
- Ensure your app includes the ability to [refresh the Concur authentication token](/api-reference/authentication/apidoc.html#refresh_token)
- Ensure your app includes the ability to respond appropriately to [revoked token messages](/api-reference/authentication/apidoc.html#revoke_token)

#### Professional Edition ERP Integration
Professional Edition ERP Integration assumes that you are working for or on behalf of a Financial Integration Company. The client we support in common may have elected to include additional functionality that could result in complex journal entries. For example, your client may allow cash advances or utilize a company-paid corporate card program where personal amounts result in an employee owing the employer. These configuration choices require more care when pulling the extract file from Concur. Click this link and locate the "SAE Detailed Discussions" at the bottom of the page to review this important information: <http://www.concurtraining.com/prdeployment/sts>. Then, consult with the client to determine if their configuration will result in any of the Sample Cases described in the document's videos.

#### Standard Edition vs. Professional Edition
Consult with your client so they can inform you if they are using Standard or Professional Edition of the Concur Service.  Both editions produce extract files that you will use as part of the integration, however, there are distinct differences between them in obtaining the extract files.  If the client is unsure of the Edition-type, Standard Edition will have a "Setup" menu option within the Administration menu as displayed to an administrative user.  Professional Edition will not have a "Setup" menu within the Administration menu.  There is also a Company Info API that you can include in your app that will allow you to determine the Edition Type from the response.  This API's response also includes the entity code corresponding to the Concur customer. Store this value so you can include it for faster Support case resolution.

##### Get Extract Files for your client

Use the following process and their associated API to obtain extract files for your client from Concur:

Navigate to [Extracts v1](https://developer.concur.com/api-reference/common/extracts/v1.extracts.html).

Professional Edition:

1.  Obtain a list extract definitions for your client.

    Your GET request looks like the example for the Expense extract (ensure you also develop support for the Concur Invoice extract):

    ```http
    GET https://www.concursolutions.com/api/expense/extract/v1.0/ HTTP/1.1
    Authorization: OAuth {access token}
    ```

    XML example of a successful response:

    ```http
    HTTP/1.1 200 OK
    Content-Type: application/xml

    <definitions xmlns="http://www.concursolutions.com/api/expense/extract/2010/02">
        <definition>
            <id>https://www.concursolutions.com/api/expense/extract/v1.0/nYoPK$pZmcowMRUqcl5bnDAwwsMydyt$xd</id>
            <job-link>https://www.concursolutions.com/api/expense/extract/v1.0/nYoPK$pZmcowMRUqcl5bnDAwwsMydyt$xd/job</job-link>
            <name>Standard Accounting Extract</name>
        </definition>
        <definition>
            <id>https://www.concursolutions.com/api/expense/extract/v1.0/Umj$swS19lpd7Sk$phUYl67wE1ss4Q$shu</id>
            <job-link>https://www.concursolutions.com/api/expense/extract/v1.0/Umj$swS19lpd7Sk$phUYl67wE1ss4Q$shu</job-link>
            <name>European Extract</name>
        </definition>
        <definition>
            <id>https://www.concursolutions.com/api/expense/extract/v1.0/8LjhN23Hs33$piUUfy4ytTqa$sqqacYeP1</id>
            <job-link>https://www.concursolutions.com/api/expense/extract/v1.0/8LjhN23Hs33$piUUfy4ytTqa$sqqacYeP1</job-link>
            <name>Asian Extract</name>
        </definition>
    </definitions>
    ```

2.  Locate the desired definitions for your client. You may need to obtain additional details as there may be multiple files to obtain depending on client requirements. You should record the Definition ID to use in subsequent APIs because doing so eliminates a common step. Your GET extract definitions details request looks like the example

    Your GET request looks like the example:

    ```http
    GET https://www.concursolutions.com/api/expense/extract/v1.0/{DefinitionID} HTTP/1.1
    Authorization: OAuth {access token}
    ```

    XML example of a successful response:

    ```http
    HTTP/1.1 200 OK
    Content-Type: application/xml

    <definition xmlns="http://www.concursolutions.com/api/expense/extract/2010/02" xmlns:i="http://www.w3.org/2001/XMLSchema-instance">
        <id>https://www.concursolutions.com/api/expense/extract/v1.0/n59FpBJ8hN3qVWTFIrtxkOT5$pef6DmIj3</id>
        <name>AMEX Remittance - US</name>
        <job-link>https://www.concursolutions.com/api/expense/extract/v1.0/n59FpBJ8hN3qVWTFIrtxkOT5$pef6DmIj3/job</job-link>
    </definition>
    ```

3.  Obtain and record the Job_ID using this GET request: https://www.concursolutions.com/api/expense/extract/v1.0/{DefinitionID}/job.
This will request a list of the last 100 extract jobs run for the specified extract definition.

    XML example of a Job ID GET request:

    ```http
    GET https://www.concursolutions.com/api/expense/extract/v1.0/nYoPK$pZmcowMRUqcl5bnDAwwsMydyt$xd/job HTTP/1.1
    Authorization: OAuth {access token}
    ...
    ```

    XML example of a successful response:

    ```http
    HTTP/1.1 200 OK
    Content-Type: application/xml

    <jobs xmlns="...">
        <job>
            <id>https://www.concursolutions.com/api/expense/extract/v1.0/nYoPK$pZmcowMRUqcl5bnDAwwsMydyt$xd/job/uIo87jk3SHudi$sdlYle8$peot$pD21jyd</id>
            <status-link>https://www.concursolutions.com/api/expense/extract/v1.0/nYoPK$pZmcowMRUqcl5bnDAwwsMydyt$xd/job/uIo87jk3SHudi$sdlYle8$peot$pD21jyd/status</status-link>
            <start-time>2010-01-13T18:30:02Z</start-time>
            <status>Queued</status>
        </job>
        <job>
            <id>https://www.concursolutions.com/api/expense/extract/v1.0/nYoPK$pZmcowMRUqcl5bnDAwwsMydyt$xd/job/21UwwqA3jk25Lis77jF$piiD21c89lLwEq</id>
            <status-link>https://www.concursolutions.com/api/expense/extract/v1.0/nYoPK$pZmcowMRUqcl5bnDAwwsMydyt$xd/job/21UwwqA3jk25Lis77jF$piiD21c89lLwEq/status</status-link>
            <start-time>2010-01-13T18:30:02Z</start-time>
            <stop-time>2010-01-13T18:30:50Z</stop-time>
            <status>Complete</status>
            <file-link>https://www.concursolutions.com/api/expense/extract/v1.0/nYoPK$pZmcowMRUqcl5bnDAwwsMydyt$xd/job/21UwwqA3jk25Lis77jF$piiD21c89lLwEq/file</file-link>
        </job>
        <job>
            <id>https://www.concursolutions.com/api/expense/extract/v1.0/nYoPK$pZmcowMRUqcl5bnDAwwsMydyt$xd/job/uI77ndy0Q1szuU73XSh56lshi$p215gHs1</id>
            <status-link>https://www.concursolutions.com/api/extract/v1.0/nYoPK$pZmcowMRUqcl5bnDAwwsMydyt$xd/job/uI77ndy0Q1szuU73XSh56lshi$p215gHs1/status</status-link>
            <start-time>2010-01-12T18:30:01Z</start-time>
            <stop-time>2010-01-12T18:31:01Z</stop-time>
            <status>Complete</status>
            <file-link>https://www.concursolutions.com/api/expense/extract/v1.0/nYoPK$pZmcowMRUqcl5bnDAwwsMydyt$xd/job/uI77ndy0Q1szuU73XSh56lshi$p215gHs1/file</file-link>
        </job>
    </jobs>
    ```

4.  GET the status of the Extract File Job using this GET request:

    ```http
    GET https://www.concursolutions.com/api/expense/extract/v1.0/{DefinitionID}/job/{JobID}/status HTTP/1.1
    Authorization: OAuth {access token}
    ...
    ```

    XML example of a successful response:

    ```http
    HTTP/1.1 200 OK
    Content-Type: application/xml

    <job xmlns="http://www.concursolutions.com/api/expense/extract/2010/02" xmlns:i="http://www.w3.org/2001/XMLSchema-instance">
        <id>https://www.concursolutions.com/api/expense/extract/v1.0/nX8O9$pytn6vJEWvLOZxyy3GcNGyj0ZklG/job/nIJp1lR2R0LNT4XcO5fXG$s$sZmVuRTuG$ps</id>
        <status-link>https://www.concursolutions.com/api/expense/extract/v1.0/nX8O9$pytn6vJEWvLOZxyy3GcNGyj0ZklG/job/nIJp1lR2R0LNT4XcO5fXG$s$sZmVuRTuG$ps/status</status-link>
        <start-time>2011-08-25T14:25:22.58</start-time>
        <stop-time>2011-08-25T14:25:23.537</stop-time>
        <status>Completed</status>
        <file-link>https://www.concursolutions.com/api/expense/extract/v1.0/nX8O9$pytn6vJEWvLOZxyy3GcNGyj0ZklG/job/nIJp1lR2R0LNT4XcO5fXG$s$sZmVuRTuG$ps/file</file-link>
    </job>
    ```

5.  GET the desired file using this GET request:

    ```http
    GET https://www.concursolutions.com/api/expense/extract/v1.0/{DefinitionID}/job/{JobID}/file HTTP/1.1
    Authorization: OAuth {access token}
    ...
    ```

    XML example of a successful response for a single extract file:

    ```http
    HTTP/1.1 200 OK
    Content-Type: text/csv

    100,AAA,BBBB,CCCC,...<rest of file>
    ```

    XML example of a successful response for multiple extract files:

    ```http
    HTTP/1.1 200 OK
    Content-Type: application/zip

    <zip file contents>
    ```

#### Standard Edition ERP Integration

Standard Edition ERP Integration assumes that you are working for or on behalf of a Financial Integration Company. Once your app is certified, and you have obtained a signed letter of agreement from a client, you can obtain that client’s expense report data through the extract file produced by Concur’s service.

#### API’s used to obtain extract files for your client
Before you begin, you need to close the Payment Manager batch using the appropriate API’s in order for you to retrieve the files using the API below. Ask your client not to close the batch manually through the User Interface.

  Navigate to [Payment Batches](./api-reference/expense/payment-batch/v1.payment-batches.html).

  1.  **Obtain a list of your client’s batches** by using [Get list of batches](./api-reference/expense/payment-batch/v1.payment-batches.html#getpaymentbatches)
    Example

          GET /expense/paymentbatch/v1.1/batch/_{BatchID}_/file

  2.  **Close the desired batch** by using [Close a payment batch](./api-reference/expense/payment-batch/v1.payment-batches.html#closepaymentbatch)
    Example


          POST /expense/paymentbatch/v1.2/batch/{BatchID}/close

  3.  **Retrieve the file you want** by using [Retrieve a payment batch file](./api-reference/expense/payment-batch/v1.payment-batches.html#getbatchfile)
    Example

          GET /expense/paymentbatch/v1.1/batch/_{BatchID}_/file

#### Make us better at making your experience easier.
Share a Concur API process issue we can do better. Provide us with an explanation, screen shots and your recommendation [here](https://forum.developer.concur.com/).
