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
  * [Send Purchase Order data to SAP Concur](#integration-purchase-order) (Invoice Only)
  * [Send Purchase Order Receipt data to SAP Concur](#integration-purchase-order-receipt) (Invoice Only)

Thank you for your interest in an App Center Partnership to develop an ERP integration between SAP Concur’s products and your chosen ERP brand. The App Center Certification Program requires each desired ERP Brand to be certified. The certified application must support the Expense & Invoice products for both of SAP Concur’s Editions (Standard + Professional Edition). Unless noted as _Optional_ all portions are required.

## <a name="learn"></a>Learn

Use the following resources to get familiar with the SAP Concur product and then submit expense reports or invoices in your own sandbox. This will better position you to conduct end-to-end testing and be able to correlate a User's experience to what you obtain via the APIs.

* **Shared Technical Services Videos** at [http://www.concurtraining.com/prdeployment/sts](http://www.concurtraining.com/prdeployment/sts) - The videos found here will help you understand the unique types of transactions that can occur in the Expense product and their resulting impacts on the financial picture in the extract file.

## <a name="phases"></a>Phased Development Approaches

There is a likelihood the ERP integration components will need to be certified in a phased approach. If necessary, the phases are to be completed as specified below. Standard and Professional Editions must be supported with each phase. You cannot go to production with support for only one of the edition types since you will not know which edition type customers will use. The phases are to be done in this sequence and must include:

Phase 1|Phase 2
---|---
Quick Connect|Manage lists of Cost Object codes
Company Profile|Add and update Vendor data
Financial posting via Financial Integration Service|Send Purchase Order data to SAP Concur
-|Send Purchase Order Receipt data to SAP Concur

## <a name="integration"></a>Integration

### <a name="quick-connect"></a>Quick Connect

[Quick Connect Scope for Enterprise Apps](./quick-connect-scope-for-enterprise-apps.html)

**Quick Connect** describes the process customers use to connect their SAP Concur site with an App Center Partner's Enterprise application. See the separate Quick Connect scope document for details to guide you through the development of this required piece to your certified application.

### <a name="profile"></a>Company Profile

[Profile Company API v1 ERP Integration](/api-reference/profile/v1.company.html#erp-integration)

### <a name="integration-extract"></a>Financial posting via Extract

**Professional Edition**: Typical code flow is listed in the [Extracts v1 API ERP Integration](/api-reference/common/extracts/v1.extracts.html#erp-integration).

**Standard Edition**: Typical code flow is listed in the  [Payment Batches v1 API ERP Integration](/api-reference/expense/payment-batch/v1.payment-batches.html#erp-integration)

Differences exist between Standard & Professional in regards to how the client code obtains the data / extract file so it is important to first determine the Edition Type as noted in the [Company Profile](#profile) section.

The integration is slightly different depending on Expense or Invoice.

* **Expense**: Standard Accounting Extract
* **Invoice**: Payment Requests Accounting Extract

#### Optional

If a customer requests that the ERP Partner obtain images to be added to their GL, use the [Image v1 API](/api-reference/image/v1.image.html#get-image-url).

The GET Report Details API request will produce an Entry ID that will be used in this API request. The result will produce a URL that the ERP Partner can use in a separate browser session to render the image. This URL is short-lived (15 minutes). If the URL expires, then the ERP Partner can retry the same call to get another URI to render the image.

> For the purposes of this API, the parameter variable {id} is acquired from the v2 GET Report Details API: `EntryID`.

### <a name="integration-manage-lists"></a>Manage lists of Cost Object codes

[List Item v3 API](/api-reference/common/list-item/v3.list-item.html)

The integration is different depending on Expense or Invoice:

* **Invoice**: **Required** Use of the List API is required for the Invoice integration (e.g. for the custom list values that are part of the Vendor Master records).

* **Expense**: _Optional_ Use of the List API is not required for the Expense integration at this time.

The List API should be executed in an asynchronous manner. Here are two documents that illustrates asynchronous execution:

* [https://spring.io/guides/gs/async-method/](https://spring.io/guides/gs/async-method/)
* [https://docs.microsoft.com/en-us/dotnet/csharp/programming-guide/concepts/async/](https://docs.microsoft.com/en-us/dotnet/csharp/programming-guide/concepts/async/)

### <a name="integration-vendor-data"></a>Add and update Vendor data

[Vendor v3 API](/api-reference/invoice/v3.vendor.html)

Invoice Only: **Required** for the basic integration and **Required** for the advanced integration.

### <a name="integration-purchase-order"></a>Send Purchase Order data to SAP Concur

[Purchase Order v3 API](/api-reference/invoice/v3.purchase-order.html)

Invoice Only: **Optional** for the basic integration and **Required** for the advanced integration.

### <a name="integration-purchase-order-receipt"></a>Send Purchase Order Receipt data to SAP Concur

[Purchase Order v3 API Receipt Schema](/api-reference/invoice/v3.purchase-order.html#schema-receipt)

Invoice Only: **Optional** for the basic integration and **Required** for the advanced integration.

* **Training Toolkit** at [http://www.concurtraining.com/](http://www.concurtraining.com/) - These resources help you learn the SAP Concur product basics, administration and reporting.
