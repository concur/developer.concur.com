---
title: VAT Reclaim Integration
layout: reference
---

## VAT Reclaim Integration

* [Learn](#learn)
* [Integration](#integration)
  * [Quick Connect](#quick-connect)
  * [Company Profile](#profile)
  * [Obtain Expense Report Data for VAT Reclaim](#obtain-expense-report-data-for-vat-reclaim)
  * [Obtain Invoice Data for VAT Reclaim](#obtain-invoice-data-for-vat-reclaim)

The VAT Reclaim app category streamlines the VAT recovery process for SAP Concur customers. The VAT Reclaim Partner's certified app will obtain Expense Report and Invoice data from our customer's SAP Concur site using the "Quick Connect" process and executing their app using SAP Concur's Expense and Invoice APIs. To be certified, the Partner must support both products: Expense & Invoice with SAP Concur Standard Edition and Professional Edition.

The Partner's application should use the API's search parameters so the response includes only Expense Reports or Invoices that have reached the end of the approval workflow within the customer's SAP Concur system. Those Expense Reports and Invoices that reached the end of the approval process ("Extracted" or "Payment Confirmed") can no longer be edited within the SAP Concur system. The Partner's app will therefore be simplified by only obtaining data that is finalized.

## <a name="learn"></a>Learn

Use the following resources to get familiar with SAP Concur products and then submit expense reports or invoices in your own sandbox. This will better position you to conduct end-to-end testing and be able to correlate a user's experience to what you obtain via the APIs.

* [Training Toolkit](http://www.concurtraining.com/) - These resources help you learn the SAP Concur product basics, administration, and reporting.
* [Shared Technical Services Videos](http://www.concurtraining.com/prdeployment/sts) - The videos found here will help you understand the unique types of transactions that can occur in the Expense product and their resulting impacts on the financial picture in the extract file.

## <a name="integration"></a>Integration

### <a name="quick-connect"></a>Quick Connect

[Quick Connect Scope for Enterprise Apps](/api-guides/ERP-integration/quick-connect-scope-for-enterprise-apps.html)

**Quick Connect** describes the process customers use to connect their SAP Concur site with an App Center Partner's Enterprise application. See the Quick Connect scope document for details to guide you through the development of this required piece to your certified application.

### <a name="profile"></a>Company Profile

[Profile Company API v1](/api-reference/profile/v1.company.html#get)

### <a name="obtain-expense-report-data-for-vat-reclaim"></a>Obtain Expense Report Data for VAT Reclaim

SAP Concur customers' Expense and Invoice sites are typically scheduled to close out their approval workflow on a nightly basis (some close out on a weekly basis or other intervals and some close on an on-demand interval). When the expense or invoice period is closed out within the SAP Concur system, the process results in a compiled list of the expense reports or invoices that have been final-approved since the last time the period was closed. This process changes the status to "Extracted." At this point, those expense reports or invoices can no longer be edited by the User, Approver, or Administrator.

Customers may use the SAP Concur "Expense Pay" (ACH electronic reimbursement service) and/or a Payment Confirmation Import file process. The latter is used to update reports that do not go through the Expense Pay process. Once either of these options is successfully completed, the Payment Status of the reports gets updated from P_PAID to P_PAYC (short for payment confirmed).

> NOTE: A customer that uses Expense Pay  may not use this option to reimburse 100% of their employees. Other reimbursement options such as A/P Check or Payroll can be used. The reports reimbursed with the latter methods will remain with a Payment Status = P_PAID if the customer does not use the Payment Confirmation Import file to update those reports as confirmed. (Most customers do not use this file to update reports as "confirmed.") Reports paid via Expense Pay are always updated to P_PAYC once SAP Concur receives notice from the banks that the payments have settled. This customer scenario will include 2 different statuses across the range of expense reports (P_PAID and P_PAYC). So, a Partner should obtain the P_PAID results soon after the customer's extract runs, which is typically nightly and will be before the Expense Pay status update occurs. The challenge arises when a Partner is unable to obtain reports immediately following the extract process. If the duration of time is long enough, the Expense Pay or Payment Confirmation file process may have changed the status of some of the reports to P_PAYC.

ACTION for the Partner:

Be aware if the customer uses either of the options above. If you experience any interruption during your call to the v3 GET Reports API, one or both of the above processes may have updated the report(s) to P_PAYC by the time an interruption is resolved. This means you may have to run the GET Reports request 2 distinct times in order to obtain the complete list of reports for the desired time frame:

* Payment Status = P_PAID
* Payment Status = P_PAYC

**There are 3 steps the Partner's app will take to obtain expense report data:**

#### Step 1: GET a List of Expense Reports.

[Expense Report v3](/api-reference/expense/expense-report/v3.reports.html)

The search parameters should focus on reports that can no longer be edited in the SAP Concur User interface. Use the  search parameters below. The API request should be made for one day at a time. This API request will result in a list of reports that match those search parameters.

> Note: there could be multiple pages returned in the results. Ensure you know how to successfully make requests for each subsequent page until the last page has been reached.

parameter|sample value
---|---
paymentStatusCode|P_PAID
paidDateBefore|2018-01-27
paidDateAfter|2018-01-25

> Note: review the above content related to Expense Pay and the Payment Confirmation Extract.  You may have to run your Report v3 API query with 2 different payment status parameters.

#### Step 2: GET the Report Details

This step will be repeated for each unique Report ID that is returned in the API Request from the first step.

[GET Expense Report Details v2 API](/api-reference/expense/expense-report/expense-report-get.html)

Insert one Report ID per API request. Make all of the requests until you obtain details for every report returned in your search results.

#### Step 3: GET the Images

[Image v1 API](/api-reference/image/v1.image.html#get-image-url)

The GET Report Details API request will produce an Entry ID that will be used in this API request. The result will produce a URL that the Partner can use in a separate browser session to render the image. This URL is short-lived (15 minutes). If the URL expires, then the Partner can retry the same call to get another URI to render the image.

> For the purposes of this API, the parameter variable {id} is acquired from the v2 GET Report Details API: `EntryID`.

### <a name="obtain-invoice-data-for-vat-reclaim"></a>Obtain Invoice Data for VAT Reclaim

**There are 3 steps the Partner's app will take to obtain Invoice data (slightly different than the steps for Expense):**

#### Step 1: GET a list of Payment Request Digests

[Payment Request Digests v3 API](/api-reference/invoice/v3.payment-request-digest.html)

The search parameters should focus on invoices that can no longer be edited in the SAP Concur user interface. Use the following search parameters:

parameter|sample value
---|---
extractedDateBefore|2018-01-27
extractedDateAfter|2018-01-25

The API request should be made for one day at a time. This API Request will result in a list of invoices that match those search parameters.

> Note: there could be multiple pages returned in the results.

#### Step 2: GET the Invoice (Payment Request) Details

This step will be repeated for each unique Payment Request ID that is returned in the API Request from step one.

[GET Payment Request {id} v3 API](/api-reference/invoice/v3.payment-request.html#get)

Insert one Payment Request ID per API request until you obtain details for every invoice returned in your search results.

#### Step 3: GET Images

Same as above. Use the ReceiptImage ID obtained from the response that provides the details of the Payment Request (Invoice).
