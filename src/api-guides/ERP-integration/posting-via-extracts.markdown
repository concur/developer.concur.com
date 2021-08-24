---
title: Financial Posting via Extracts
layout: reference
---

# Financial Posting via Extracts

An ERP user has two options to obtain data for financial journal entries into the ERP:

* Financial Integration Service (FIS) – data is returned via APIs.
* Extract files – data is written to a flat file on a batched schedule.

We recommend using data from FIS whenever possible due to the efficiency and advantages it has over batched extract files.  However, you should be familiar with how to obtain Extract files because Extract files may still be used in certain customer scenarios (for example, the data available via the Attendee Detail Extract is not yet available via API). The following explains how to obtain Extract files.

**Professional Edition**: Typical code flow is listed in the [Extracts v1 API ERP Integration](/api-reference/common/extracts/v1.extracts.html#erp-integration).

**Standard Edition**: Typical code flow is listed in the  [Payment Batches v1 API ERP Integration](/api-reference/expense/payment-batch/v1.payment-batches.html#erp-integration)

Differences exist between Standard & Professional in regards to how the client code obtains the data / extract file so it is important to first determine the Edition Type as noted in the [Company Profile](#profile) section.

The integration is slightly different depending on Expense or Invoice.

* **Expense**: Standard Accounting Extract
* **Invoice**: Payment Requests Accounting Extract

### Optional

If a customer requests that the ERP Partner obtain images to be added to their GL, use the [Image v1 API](/api-reference/image/v1.image.html#get-image-url).

The GET Report Details API request will produce an Entry ID that will be used in this API request. The result will produce a URL that the ERP Partner can use in a separate browser session to render the image. This URL is short-lived (15 minutes). If the URL expires, then the ERP Partner can retry the same call to get another URI to render the image.

> For the purposes of this API, the parameter variable {id} is acquired from the v2 GET Report Details API: `EntryID`.
