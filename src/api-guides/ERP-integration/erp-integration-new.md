---
title: ERP Integrations
layout: reference
---

* [Connecting to customers](#connecting-to-customers)
* [Expense](#expense)
* [Invoice](#invoice)
* [Concur product training](#training)
* [Quick Connect](#quick-connect)
* [Company Profile](#profile)
* [Expense & Invoice Financial Posting via Extract File APIs](#extract)
  * [Professional Edition](#extract-pro)
    * [Obtain a list of extract definitions for your client](#extract-pro-obtain)
    * [Locate the desired definitions for your client](#extract-pro-locate)
    * [Record the Definition ID to use in subsequent API requests](#extract-pro-record)
    * [Obtain and record the Job_ID](#extract-pro-jobid)
    * [GET the status of the Extract File Job using this GET request](#extract-pro-status)
    * [GET the desired file using the GET request](#extract-pro-file)
  * [Standard Edition ERP Integration](#standard)
* [Manage Lists of Cost Object Codes](#manage-lists)
* [Vendor data – Add & Update Concur](#vendor-data)
* [Purchase Order data sent to Concur](#purchase-order)
* [Purchase Order Receipt data sent to Concur](#purchase-order-receipt)

Thank you for your interest in an App Center Partnership to develop an ERP integration between Concur’s products and your chosen ERP brand. The App Center Certification Program requires each desired ERP Brand to be certified. The certified application must support the Expense & Invoice products for both of Concur’s Editions (Standard + Professional Edition). The Partner can decide to pursue a Basic integration or an Advanced integration. The following table explains the high-level requirements for each type of integration. Below the table are the details for each item within the table.

Phased Approaches - We recognize there is a likelihood of certifying the following in phases and we will provide guidance to the phases available if necessary.	 

## <a name="connecting-to-customers"></a>Connecting to customers

Development Item|Resources|Basic|Advanced
---|---|---|---
Quick Connect|See the Quick Connect Scope document for details related to OAuth2 and the Partner's Landing Page requirements.|:black_circle:|:black_circle:
Company Info|Use this [resource](https://developer.concur.com/api-reference/profile-beta/company.html) for each customer to learn if they use Standard or Professional Edition.||

## <a name="expense"></a>Expense

Development Item|Resources|Basic|Advanced
---|---|---|---
Financial Postings via Extract file API|https://developer.concur.com/api-reference/common/extracts/extracts.html|:black_circle:|:black_circle:
Manage Lists of Cost Object Codes|https://developer.concur.com/api-reference/common/list-item/|:black_circle:|:black_circle:

## <a name="invoice"></a>Invoice

Development Item|Resources|Basic|Advanced
---|---|---|---
Financial Postings via Extract file API|https://developer.concur.com/api-reference/common/extracts/extracts.html|:black_circle:|:black_circle:
Manage Lists of Cost Object Codes|https://developer.concur.com/api-reference/common/list-item/|:black_circle:|:black_circle:
Vendor data – Add & Update Concur|https://developer.concur.com/api-reference/invoice/vendor.html|:black_circle:|:black_circle:
Purchase Order data sent to Concur|https://developer.concur.com/api-reference/invoice/purchase-order.html||:black_circle:
Purchase Order Receipt data sent to Concur|https://developer.concur.com/api-reference/invoice/purchase-order.html#put-receipts||:black_circle:

## <a name="training"></a>Concur product training

Use the following websites to get familiar with the Concur product and then submit expense reports or invoices in your own sandbox. This will better position you to conduct end-to-end testing and be able to correlate a User's experience to what you obtain via the APIs.

* http://www.concurtraining.com/
* http://www.concurtraining.com/prdeployment/sts - **REQUIRED** - review the videos within this link to ensure you are familiar with the unique types of transactions that can occur in the Expense product and their resulting impacts on the financial picture in the extract file.

## <a name="quick-connect"></a>Quick Connect

"Quick Connect" describes the process customers use to connect their Concur site with an App Center Partner's Enterprise application. See the separate Quick Connect scope document for details to guide you through the development of this required piece to your certified application.

## <a name="profile"></a>Company Profile

The Company Profile [resource](https://developer.concur.com/api-reference/profile-beta/company.html) provides the Partner with 2 key pieces of information:

1. Company UUID - Partner will record this value per customer connection and use it when submitting Support cases.
1. MarketingName data element - Partner will record this value per customer. This will indicate the Edition Type a customer is using:
  1. "CTE" or "Enterprise" values mean the customer is using Professional Edition
  1. "Standard" value means the customer is using Standard Edition

## <a name="extract"></a>Expense & Invoice Financial Posting via Extract File APIs
> BASIC & ADVANCED options - applicable to both Expense + Invoice. Differences exist between Standard & Professional
H
Both Edition types produce extract files that you will use as part of the integration, however, there are distinct differences between them in obtaining the extract file, so it is important to first determine the Edition Type as noted above.

The client may have elected to include additional functionality that could result in complex journal entries. For example, your client may allow cash advances or utilize a company-paid corporate card program where personal amounts result in an employee owing the employer. These configuration choices require more care when pulling the extract file from Concur. Click this link and locate the “SAE Detailed Discussions” at the bottom of the page to review this important information: [http://www.concurtraining.com/prdeployment/sts](http://www.concurtraining.com/prdeployment/sts). Then, consult with the client to determine if their configuration will result in any of the Sample Cases described in the document’s videos.

GET Extract Files for your client's financial posting into their ERP (Professional Edition and Standard Edition)

### <a name="extract-pro"></a>Professional Edition

Use the following process and the API resource to obtain extract files for your client from Concur. This is your API resource: [https://developer.concur.com/api-reference/common/extracts/extracts.html](https://developer.concur.com/api-reference/common/extracts/extracts.html)

#### <a name="extract-pro-obtain"></a>Obtain a list of extract definitions for your client

> Ensure you also develop support for the Concur Invoice extract.

XML example of a successful response:

```
HTTP/1.1 200 OK
Content-Type: application/xml
```

```xml
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
#### <a name="extract-pro-locate"></a>Locate the desired definitions for your client

You may need to obtain additional details as there may be multiple files to obtain depending on client requirements.

#### <a name="extract-pro-record"></a>Record the Definition ID to use in subsequent API requests

Successful response example:

```
HTTP/1.1 200 OK
Content-Type: application/xml
```

```xml
<definition xmlns="http://www.concursolutions.com/api/expense/extract/2010/02" xmlns:i="http://www.w3.org/2001/XMLSchema-instance">
  <id>https://www.concursolutions.com/api/expense/extract/v1.0/n59FpBJ8hN3qVWTFIrtxkOT5$pef6DmIj3</id>
  <name>AMEX Remittance - US</name>
  <job-link>https://www.concursolutions.com/api/expense/extract/v1.0/n59FpBJ8hN3qVWTFIrtxkOT5$pef6DmIj3/job</job-link>
</definition>
```

#### <a name="extract-pro-jobid"></a>Obtain and record the Job_ID

XML example of a successful response:

```
HTTP/1.1 200 OK
Content-Type: application/xml
```

```xml
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
</jobs>
```

#### <a name="extract-pro-status"></a>GET the status of the Extract File Job using this GET request

OPTIONAL: the Partner only needs to do this if the Partner is running the job, otherwise skip this step.

XML example of a successful response:

```
HTTP/1.1 200 OK
Content-Type: application/xml
```

```xml
<job xmlns="http://www.concursolutions.com/api/expense/extract/2010/02" xmlns:i="http://www.w3.org/2001/XMLSchema-instance">
  <id>https://www.concursolutions.com/api/expense/extract/v1.0/nX8O9$pytn6vJEWvLOZxyy3GcNGyj0ZklG/job/nIJp1lR2R0LNT4XcO5fXG$s$sZmVuRTuG$ps</id>
  <status-link>https://www.concursolutions.com/api/expense/extract/v1.0/nX8O9$pytn6vJEWvLOZxyy3GcNGyj0ZklG/job/nIJp1lR2R0LNT4XcO5fXG$s$sZmVuRTuG$ps/status</status-link>
  <start-time>2011-08-25T14:25:22.58</start-time>
  <stop-time>2011-08-25T14:25:23.537</stop-time>
  <status>Completed</status>
  <file-link>https://www.concursolutions.com/api/expense/extract/v1.0/nX8O9$pytn6vJEWvLOZxyy3GcNGyj0ZklG/job/nIJp1lR2R0LNT4XcO5fXG$s$sZmVuRTuG$ps/file</file-link>
</job>
```

#### <a name="extract-pro-file"></a>GET the desired file using the GET request

TBD

### <a name="standard"></a>Standard Edition ERP Integration

Use the following process and the API resource to obtain extract files for your client from Concur. This is your API resource: [https://developer.concur.com/api-reference/expense/payment-batch/payment-batches.html](https://developer.concur.com/api-reference/expense/payment-batch/payment-batches.html)

**API’s used to obtain extract files for your client**

Before you begin, you need to close the Payment Manager batch using the appropriate API’s in order for you to retrieve the files using the API below. Ask your client not to close the batch manually through the User Interface.

Navigate to [Payment Batches](https://developer.concur.com/api-reference/expense/payment-batch/payment-batches.html).

1. Obtain a list of your client’s batches by using [Get list of batches](https://developer.concur.com/api-reference/expense/payment-batch/payment-batches.html#getpaymentbatches) Example
1. Close the desired batch by using [Close a payment batch](https://developer.concur.com/api-reference/expense/payment-batch/payment-batches.html#closepaymentbatch) Example
1. Retrieve the file you want by using [Retrieve a payment batch file](https://developer.concur.com/api-reference/expense/payment-batch/payment-batches.html#getbatchfile) Example

## <a name="manage-lists"></a>Manage Lists of Cost Object Codes:

BASIC & ADVANCED options - applicable to both Standard + Professional Editions and Expense + Invoice

## <a name="vendor-data"></a>Vendor data – Add & Update Concur:

BASIC & ADVANCED options - applicable to both Standard + Professional Editions - Invoice only

## <a name="purchase-order"></a>Purchase Order data sent to Concur:

ADVANCED option - applicable to both Standard + Professional Editions - Invoice only

## <a name="purchase-order-receipt"></a>Purchase Order Receipt data sent to Concur:

ADVANCED option - applicable to both Standard + Professional Editions - Invoice only
