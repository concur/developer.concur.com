---
title: ERP Integrations
layout: reference
---

* [Learn](#learn)
* [Prerequisites](#prerequisites)
  * [Quick Connect](#quick-connect)
  * [Company Profile](#profile)
* [Expense & Invoice Financial Posting via Extract File APIs](#extract)
  * [Professional Edition](#extract-pro)
  * [Standard Edition](#standard)
* [Manage Lists of Cost Object Codes](#manage-lists)
* [Vendor data – Add & Update Concur](#vendor-data)
* [Purchase Order data sent to Concur](#purchase-order)
* [Purchase Order Receipt data sent to Concur](#purchase-order-receipt)

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

## <a name="extract"></a>Expense & Invoice Financial Posting via Extract File APIs

> BASIC & ADVANCED options - applicable to both Expense + Invoice. Differences exist between Standard & Professional. Both Edition types produce extract files that you will use as part of the integration, however, there are distinct differences between them in obtaining the extract file, so it is important to first determine the Edition Type as noted above.

The client may have elected to include additional functionality that could result in complex journal entries. For example, your client may allow cash advances or utilize a company-paid corporate card program where personal amounts result in an employee owing the employer. These configuration choices require more care when pulling the extract file from Concur. Click this link and locate the “SAE Detailed Discussions” at the bottom of the page to review this important information: [http://www.concurtraining.com/prdeployment/sts](http://www.concurtraining.com/prdeployment/sts). Then, consult with the client to determine if their configuration will result in any of the Sample Cases described in the document’s videos.

### <a name="extract-pro"></a>Professional Edition

Partners with clients using Professional Edition have access to the Extracts v1 API. The typical code flow for this approach is listed [here](./api-reference/common/extracts/v1.extracts.html#erp-integration).

### <a name="extract-standard"></a>Standard Edition

Partners with clients using Standard Edition have access to the Payment Batches v1.1 API. The typical code flow for this approach is listed [here](./api-reference/expense/payment-batch/v1.payment-batches.hmtl#erp-integration)

## <a name="manage-lists"></a>Manage Lists of Cost Object Codes:

[List Item v3 API](./api-reference/common/list-item/v3.list-item.html)

## <a name="vendor-data"></a>Vendor data – Add & Update Concur:

[Vendor v3 API](./api-reference/invoice/v3.vendor.html)

## <a name="purchase-order"></a>Purchase Order data sent to Concur:

[Purchase Order v3 API](./api-reference/invoice/v3.purchase-order.html)

## <a name="purchase-order-receipt"></a>Purchase Order Receipt data sent to Concur:

ADVANCED option - applicable to both Standard + Professional Editions - Invoice only
