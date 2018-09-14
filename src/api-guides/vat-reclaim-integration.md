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

The VAT Reclaim App Category streamlines the VAT recovery process for SAP-Concur customers.  The VAT Reclaim Partner's certified app will obtain Expense Report and Invoice data from our customers' Concur site by using the "Quick Connect" process and executing their app using Concur's Expense and Invoice APIs.  To be certified, the Partner must support both products: Expense & Invoice and SAP-Concur Standard Edition and Professional Edition.

The Partners's application should use the API's search parameters so the response includes only Expense Reports or Invoices that have reached the end of the approval workflow within the customer's Concur system.  Those Expense Reports and Invoices that reached the end of the approval process ("Extracted" or "Payment Confirmed") can no longer be edited within the Concur system.  The Partner's app will therefore be simplified by only obtaining data that is locked down.

## <a name="learn"></a>Learn

Use the following resources to get familiar with the Concur product and then submit expense reports or invoices in your own sandbox. This will better position you to conduct end-to-end testing and be able to correlate a User's experience to what you obtain via the APIs.

* **Training Toolkit** at [http://www.concurtraining.com/](http://www.concurtraining.com/) - These resources help you learn the Concur product basics, administration and reporting.
* **Shared Technical Services Videos** at [http://www.concurtraining.com/prdeployment/sts](http://www.concurtraining.com/prdeployment/sts) - The videos found here will help you understand the unique types of transactions that can occur in the Expense product and their resulting impacts on the financial picture in the extract file.

## <a name="integration"></a>Integration

### <a name="quick-connect"></a>Quick Connect

[Quick Connect Scope for Enterprise Apps](./quick-connect-scope-for-enterprise-apps.html)

**Quick Connect** describes the process customers use to connect their Concur site with an App Center Partner's Enterprise application. See the separate Quick Connect scope document for details to guide you through the development of this required piece to your certified application.

### <a name="profile"></a>Company Profile

[Profile Company API v1](/api-reference/profile-beta/company.html#get)

### <a name="obtain-expense-report-data-for-vat-reclaim"></a>Obtain Expense Report Data for VAT Reclaim

Concur customers' Expense and Invoice sites are typically scheduled to close out their approval workflow on a nightly basis (some close out on a weekly basis or other intervals and some close on an on-demand interval).  When the expense or invoice period is closed out within the Concur system, the process results in a compiled list of the expense reports or invoices that have been final-approved since the last time the period was closed.  This process changes the status to "Extracted".  At this point, those expense reports or invoices can no longer be edited by the User, Approver, or Administrator.
  
note: Some customers will use the Concur ACH electronic payment service or import a file that changes the status to "confirmed".  In these customers, the same payment status field is changed, so the Partner needs to run the search query twice, once for each payment status described below. i.e. it is possible that you could experience an issue when attempting to get expense reports with an "Extracted" status.  In the process of re-trying that request, the bank(s) involved in the ACH Service (or the client's own confirmation file) could at the same time update the status to "Payment Confirmed".  Therefore, the Partner should query for both Paid (aka as Extracted) and Payment Confirmed to ensure no reports were missed.  Concur is addressing this issue in our next generation of APIs.  At that time, there will be 2 distinct fields to capture the "extracted" status and the "payment confirmed" status i.e. the Extracted status will not be overwritten by the Payment Confirmed status and you will be able to make one call for the desired status at a point in time.

**There are 3 steps the Partner's app will take to obtain expense report data:**

**1. GET a list of Expense Reports.**

   [Expense Report v3 API](/api-reference/expense/expense-report/reports.html)

The search parameters should focus on reports that can no longer be edited in the SAP-Concur User interface. Use the         following search parameters:

The API request should be made for one day at a time.  This API Request will result in a list of reports that match           those search parameters. note: there could be multiple pages returned in the results so ensure your app can get every         page of results.

Repeat the above steps but use P_PAYC for the Payment Status parameter.  This is required to ensure you have obtained         all of the reports since the Payment Status field is updated in two different ways: 1st to reflect extracted, then 2nd       to reflect any confirmations of payment.

 parameter|sample value
 ---|---
 paymentStatusCode|P_PAID
 paidDateBefore|2018-01-27
 paidDateAfter|2018-01-25
    
**2. GET the Report Details for each unique Report ID that is returned in the API Request from #1**

   [GET Expense Report Details v2 API](/api-reference/expense/expense-report/expense-report-get.html)

   Insert one Report ID per API request. Make all of the requests until you obtain details for every report returned in         your search results.

**3. GET the Images**

   [Receipt Image v3 API](/api/v3.0/expense/receiptimages)

The GET Report Details API request will produce an Entry ID that will be used in this API request.  The result will           produce a URL that the Partner can use in a separate browser session to render the image.  This url is short-lived (15       minutes).  If the URL expires, then the Partner can re-try the same call to get another URI to render the image.

GET /api/v3.0/expense/receiptimages/{id}
id = Required ReceiptImage ID (use the ID from v2 GET Report Details API called, EntryImageID)
The above GET request produces this response: 
<Image xmlns="http://www.concursolutions.com/api/image/2011/02" xmlns:i="http://www.w3.org/2001/XMLSchema-instance">

<Id>sample</Id>

<Url>https://imagingupload.concursolutions.com/file/p00884704c6o/5A789811F139BC89D9C42DDE5FEE2A655BB7C2A375E9C481FA0BE92FFF690E298F119925A5C834385C8D62AE5FC4E65AC0F53E4C7273C14A4E71D4264F104882H142570AF84FBEEEC439486FE89E44D2F?id=51253775812C4750888F&e=p00884704c6o&t=AN</Url>

</Image>

copy and paste the url into a browser session to render the image.  This is a temp url.

### <a name="obtain-invoice-data-for-vat-reclaim"></a>Obtain Invoice Data for VAT Reclaim

**There are 3 steps the Partner's app will take to obtain Invoice data (slightly different than the steps for Expense):**

####1. GET a list of Payment Request Digests.**

  [Payment Request Digests v3 API](/api-reference/invoice/payment-request-digest.html)

The search parameters should focus on invoices that can no longer be edited in the SAP-Concur User interface. Use the following search parameters:

  parameter|sample value
  ---|---
  extractedDateBefore|2018-01-27
  extractedDateAfter|2018-01-25

The API request should be made for one day at a time.  This API Request will result in a list of invoices that match         those search parameters. note: there could be multiple pages returned in the results.

**2. GET the Invoice (Payment Request) Details for each unique Payment Request ID that is returned in the API Request from #1**

   [GET Payment Request {id} v3 API](/api-reference/invoice/payment-request.html#get)

Insert one Payment Request ID per API request until you obtain details for every invoice returned in your search             results.

**3. GET Images**

same as above.  Use the ReceiptImage ID obtained from the response that provides the details of the Payment Request         (Invoice)
