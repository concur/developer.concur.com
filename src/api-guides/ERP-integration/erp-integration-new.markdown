---
title: ERP Integrations
layout: reference
---

* [Learn](#learn)
* [Phased Development Approaches](#phases)
* [Integration](#integration)
  * [Quick Connect](#quick-connect)
  * [Company Profile](#profile)
  * [Financial posting via Extract](#integration-extract)
  * [Manage lists of Cost Object codes](#integration-manage-lists)
  * [Add and update Vendor data](#integration-vendor-data)
  * [Send Purchase Order data to Concur](#integration-purchase-order) (Invoice Only)
  * [Send Purchase Order Receipt data to Concur](#integration-purchase-order-receipt) (Invoice Only)

Thank you for your interest in an App Center Partnership to develop an ERP integration between Concur’s products and your chosen ERP brand. The App Center Certification Program requires each desired ERP Brand to be certified. The certified application must support the Expense & Invoice products for both of Concur’s Editions (Standard + Professional Edition). Unless noted as _Optional_ all portions are required.

## <a name="learn"></a>Learn

Use the following resources to get familiar with the Concur product and then submit expense reports or invoices in your own sandbox. This will better position you to conduct end-to-end testing and be able to correlate a User's experience to what you obtain via the APIs.

* **Training Toolkit** at http://www.concurtraining.com/ - These resources help you learn the Concur product basics, administration and reporting.
* **Shared Technical Services Videos** at http://www.concurtraining.com/prdeployment/sts - The videos found here will help you understand the unique types of transactions that can occur in the Expense product and their resulting impacts on the financial picture in the extract file.

## <a name="phases"></a>Phased Development Approaches

We recognize there is a likelihood of certifying the following in a phased approach. We will provide guidance on which segments can be phased together. Regardless of the phase that is pursued, both Standard & Professional Editions must be supported with each phase. You cannot go to production with support for only one of the Edition types since your sales team will not know which Edition type a prospect uses.

A typical phased approach would include:

Phase 1|Phase 2
---|---
Quick Connect|Manage lists of Cost Object codes (Basic + Advanced)
Company Profile|Add and update Vendor data (Basic + Advanced)
Financial posting via Extract|Send Purchase Order data to Concur (Advanced)
-|Send Purchase Order Receipt data to Concur (Advanced)

## <a name="integration"></a>Integration

### <a name="quick-connect"></a>Quick Connect

[Quick Connect Scope for Enterprise Apps](./api-guides/ERP-integration/quick-connect-scope-for-enterprise-apps.html)

**Quick Connect** describes the process customers use to connect their Concur site with an App Center Partner's Enterprise application. See the separate Quick Connect scope document for details to guide you through the development of this required piece to your certified application.

### <a name="profile"></a>Company Profile

The [Profile Company API v1](https://developer.concur.com/api-reference/profile-beta/company.html) provides the partner with 2 key pieces of information:

* Company `UUID` - Partner will record this value per customer connection and use it when submitting Support cases.
* `MarketingName` data element - Partner will record this value per customer. This will indicate the edition type a customer is using:
  * `CTE` or `Enterprise` means the customer is using Professional Edition.
  * `Standard` means the customer is using Standard Edition.

### <a name="integration-extract"></a>Financial posting via Extract

**Professional Edition**: Typical code flow is listed in the [Extracts v1 API ERP Integration](./api-reference/common/extracts/v1.extracts.html#erp-integration).

**Standard Edition**: Typical code flow is listed in the  [Payment Batches v1 API ERP Integration](./api-reference/expense/payment-batch/v1.payment-batches.hmtl#erp-integration)

The client may have elected to include additional functionality that could result in complex journal entries. For example, your client may allow cash advances or utilize a company-paid corporate card program where personal amounts result in an employee owing the employer. These configuration choices require more care when pulling the extract file from Concur. Click this link and locate the **“SAE Detailed Discussions”** section at the bottom of the page to review this important information: [http://www.concurtraining.com/prdeployment/sts](http://www.concurtraining.com/prdeployment/sts). Then, consult with the client to determine if their configuration will result in any of the Sample Cases described in the document’s videos.

Differences exist between Standard & Professional in regards to how the client code obtains the data / extract file so it is important to first determine the Edition Type as noted in the [Company Profile](#profile) prerequisites section.

The integration is slightly different depending on Expense or Invoice.

* **Expense**: Standard Accounting Extract
* **Invoice**: Payment Requests Accounting Extract

### <a name="integration-manage-lists"></a>Manage lists of Cost Object codes

[List Item v3 API](./api-reference/common/list-item/v3.list-item.html)

The integration is different depending on Expense or Invoice:

* **Invoice**: **Required** Use of the List API is required for the Invoice integration (e.g. for the custom list values that are part of the Vendor Master records). However, use of the API is contingent on the volume of List data. Due to capacity limitations of the List API, the mutual Client may need to manage the initial load of large volumes of data themselves via a file import. This is also true if their ongoing maintenance of List values involves a large volume. Large numbers of list values for vendors are not expected for Invoice compared to Expense.

* **Expense**: _Optional_ Use of the List API is not required for the Expense integration at this time. The mutual Client may need to manage the initial load of large volumes of data themselves via a file import due to the capacity limitations of the current List API. This is also true if their ongoing maintenance of List values involves a large volume.

The List API should be executed in an asynchronous manner. Here are two documents that illustrates asynchronous execution:

* https://spring.io/guides/gs/async-method/
* https://docs.microsoft.com/en-us/dotnet/csharp/programming-guide/concepts/async/

### <a name="integration-vendor-data"></a>Add and update Vendor data

[Vendor v3 API](./api-reference/invoice/v3.vendor.html)

Invoice Only: **Required** for the basic integration and **Required** for the advanced integration.

### <a name="integration-purchase-order"></a>Send Purchase Order data to Concur

[Purchase Order v3 API](./api-reference/invoice/v3.purchase-order.html)

Invoice Only: **Optional** for the basic integration and **Required** for the advanced integration.

### <a name="integration-purchase-order-receipt"></a>Send Purchase Order Receipt data to Concur

[Purchase Order v3 API Receipt Schema](./api-reference/invoice/v3.purchase-order.html#schema-receipt)

Invoice Only: **Optional** for the basic integration and **Required** for the advanced integration.
