---
title: ERP Integrations
layout: reference
---

* [Learn](#learn)
* [Prerequisites](#prerequisites)
  * [Quick Connect](#quick-connect)
  * [Company Profile](#profile)
* [Integration](#integration)
  * [Expense & Invoice Financial Posting via Extract File APIs](#integration-extract)
  * [Manage Lists of Cost Object Codes](#integration-manage-lists)
  * [Vendor data – Add & Update Concur](#integration-vendor-data)
  * [Purchase Order data sent to Concur](#integration-purchase-order)
  * [Purchase Order Receipt data sent to Concur](#integration-purchase-order-receipt)

Thank you for your interest in an App Center Partnership to develop an ERP integration between Concur’s products and your chosen ERP brand. The App Center Certification Program requires each desired ERP Brand to be certified. The certified application must support the Expense & Invoice products for both of Concur’s Editions (Standard + Professional Edition). Unless noted as 'Optional' all portions are required.

> Phased Approaches - We recognize there is a likelihood of certifying the following in a phased approach. We will provide guidance on which segments can be phased together. Regardless of the phase that is pursued, both Standard & Professional Editions MUST be supported with each phase. You cannot go to production with support for only one of the Edition types since your sales team will not know which Edition-type a prospect uses.

## <a name="learn"></a>Learn

Use the following resources to get familiar with the Concur product and then submit expense reports or invoices in your own sandbox. This will better position you to conduct end-to-end testing and be able to correlate a User's experience to what you obtain via the APIs.

* **Training Toolkit** at http://www.concurtraining.com/ - These resources help you learn the Concur product basics, administration and reporting.
* **Shared Technical Services Videos** at http://www.concurtraining.com/prdeployment/sts - The videos found here will help you understand the unique types of transactions that can occur in the Expense product and their resulting impacts on the financial picture in the extract file.

## <a name="prerequisites"></a>Prerequisites

### <a name="quick-connect"></a>Quick Connect

"Quick Connect" describes the process customers use to connect their Concur site with an App Center Partner's Enterprise application. See the separate Quick Connect scope document for details to guide you through the development of this required piece to your certified application.

### <a name="profile"></a>Company Profile

The Company Profile [resource](https://developer.concur.com/api-reference/profile-beta/company.html) provides the Partner with 2 key pieces of information:

1. Company UUID - Partner will record this value per customer connection and use it when submitting Support cases.
1. MarketingName data element - Partner will record this value per customer. This will indicate the Edition Type a customer is using:
  1. "CTE" or "Enterprise" values mean the customer is using Professional Edition
  1. "Standard" value means the customer is using Standard Edition


## <a name="integration"></a>Integration

### <a name="integration-extract"></a>Expense & Invoice Financial Posting via Extract File APIs

> BASIC & ADVANCED options - applicable to both Expense + Invoice. Differences exist between Standard & Professional. Both Edition types produce extract files that you will use as part of the integration, however, there are distinct differences between them in obtaining the extract file, so it is important to first determine the Edition Type as noted above.

The client may have elected to include additional functionality that could result in complex journal entries. For example, your client may allow cash advances or utilize a company-paid corporate card program where personal amounts result in an employee owing the employer. These configuration choices require more care when pulling the extract file from Concur. Click this link and locate the “SAE Detailed Discussions” at the bottom of the page to review this important information: [http://www.concurtraining.com/prdeployment/sts](http://www.concurtraining.com/prdeployment/sts). Then, consult with the client to determine if their configuration will result in any of the Sample Cases described in the document’s videos.

The integration is slightly different depending on Expense or Invoice:

* Expense: Standard Accounting Extract
* Invoice: Payment Requests Accounting Extract

#### <a name="extract-pro"></a>Professional Edition

Partners with clients using Professional Edition have access to the Extracts v1 API. The typical code flow for this approach is listed [here](./api-reference/common/extracts/v1.extracts.html#erp-integration).

#### <a name="extract-standard"></a>Standard Edition

Partners with clients using Standard Edition have access to the Payment Batches v1.1 API. The typical code flow for this approach is listed [here](./api-reference/expense/payment-batch/v1.payment-batches.hmtl#erp-integration)

### <a name="integration-manage-lists"></a>Manage Lists of Cost Object Codes:

The integration is different depending on Expense or Invoice:

* Expense: **Optional** Use of the List API is not required for the Expense integration at this time. The mutual Client may need to manage the initial load of large volumes of data themselves via a file import due to the capacity limitations of the current List API. This is also true if their ongoing maintenance of List values involves a large volume.

* Invoice: **Required** Use of the List API is required for the Invoice integration (e.g. for the custom list values that are part of the Vendor Master records). However, use of the API is contingent on the volume of List data. Due to capacity limitations of the List API, the mutual Client may need to manage the initial load of large volumes of data themselves via a file import. This is also true if their ongoing maintenance of List values involves a large volume. Large numbers of list values for vendors are not expected for Invoice compared to Expense.

[List Item v3 API](./api-reference/common/list-item/v3.list-item.html)

### <a name="integration-vendor-data"></a>Vendor data – Add & Update Concur:

[Vendor v3 API](./api-reference/invoice/v3.vendor.html)

### <a name="integration-purchase-order"></a>Purchase Order data sent to Concur

**Optional** for the basic integration and **Required** for the advanced integration.

[Purchase Order v3 API](./api-reference/invoice/v3.purchase-order.html)

**Optional** for the basic integration and **Required** for the advanced integration.

### <a name="integration-purchase-order-receipt"></a>Purchase Order Receipt data sent to Concur:

ADVANCED option - applicable to both Standard + Professional Editions - Invoice only
