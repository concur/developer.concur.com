---
title: Posting via Financial Integration Service
layout: reference
---

* [Learn More](#learn)
* [Quick Connect](#quick-connect)
* [API Sequence Flow](#sequence-flow)
  * [FI Sequence Flow Matrix](#matrix)
  * [Expense Pay](#expense-pay)
  * [Non-Expense Pay Payment Batches (Standard Edition and S2P)](#nonexpense-pay)
* [Imaging](#imaging)
* [Timing to Run FIS](#timing)

## <a name="learn"></a>Learn More

An ERP user has two options to obtain data for financial journal entries into the ERP:

*  Financial Integration Service (FIS) – data is returned via APIs.
*  Extract files – data is written to a flat file on a batched schedule.

We recommend using data from FIS whenever possible due to the efficiency and advantages it has over batched extract files. If a customer’s ERP requires a file you will create a file based on FIS data, not the extract.

Using FIS data for either of the above situations will simplify processes and enable FIS benefits.

FIS has these benefits over the Extract file process:

* Maintains consistency between SAP Concur solutions and the ERP:
  * FIS requires a post of the status of the ERP integration back into the SAP Concur solution, per report or invoice. If there is a failure at the ERP, the app will update the affected report or invoice with an error message. The customer will initiate corrective action from within the SAP Concur processor tool. The result is that no expense report or invoice will advance until it can be integrated into the ERP. This process is a change for existing SAP Concur customers who are not accustomed to this awareness between their ERP and SAP Concur solutions.

  * For existing SAP Concur customers, enabling FIS also requires change management discussions regarding expense reports and invoices in process during the switch. Any report created after FIS is enabled will flow to FIS and not the extract file. Reports still in process when FIS is enabled will be accounted for only via the extract file. Customers need to manage their existing integration until those reports or invoices are completely processed.

* Real-time integration into the ERP:
  * Obtain final approved spend data throughout the day and post it to the ERP instead of waiting for the file-based interval to occur once per day.
* Payment Confirmation:
  * ERP partners have the ability to post a payment status of reports into SAP Concur solutions (Expense only at this time).
  *	Expense Pay customers who use FIS only reimburse reports that have been successfully posted into their ERP. Conversely, reports processed using the SAE/extract file process have reimbursements sent to the bank independent of the customer’s financial posting.

  To see the mapping of extract files vs. FIS, review the [Standard Accounting Extract (SAE)](./standard-accounting-extract-expense.xlsx) and/or [Payment Request Accounting Extract (PRAE)](./payment-request-accounting-extract-invoice.xlsx) files.

## <a name="quick-connect"></a>Quick Connect

Quick Connect describes the process customers use to connect their SAP Concur site with an App Center Partner’s Enterprise application. See the separate [Quick Connect](./quick-connect-scope-for-enterprise-apps.html) scope document for details to guide you through the development of this required piece to your certified application.

## <a name="sequence-flow"></a>API Sequence Flow

The flow consists of calling the API in this sequence:

1. [Get Financial Transactions](/api-reference/financial-integration/v4.financial-integration.html#get-transactions) - Obtain final-approved reports (or invoices) from the FIS queue.
1. [Post Financial Transaction Acknowledgements](/api-reference/financial-integration/v4.financial-integration.html#post-acknowledgements) - Acknowledge each report or invoice has been obtained.
1. [Post Financial Transactions Confirmations](/api-reference/financial-integration/v4.financial-integration.html#post-confirmations) - Post the status of the ERP integration for each report (success or failure) back into the SAP Concur solution after integrating into the customer's ERP.
1. [Post Financial Payment Confirmations](/api-reference/financial-integration/v4.financial-integration.html#payment-confirmations) - Post the financial payment results into the SAP Concur solution.

The following are the recommended steps when you create a file based on FIS data prior to importing into the ERP:

1. You will remove any report (or invoice) from your file if it is rejected at the ERP.
1. You will then post a rejected status for that report back into the SAP Concur solution via FIS post confirmation endpoint. (see step 3 above)
1. The customer will then address any rejected reports directly in the SAP Concur solution where they will be re-processed at a later date and eventually included in FIS.
1. You will re-try your file without the rejected reports. Upon 100% successful import of the remaining reports, you will post successful statuses of those reports back into the SAP Concur solution via FIS.

The above steps will maintain consistency between the customer's ERP and their SAP Concur Spend Management service. If they cannot be performed due to error-handling logistics between you and customer, then you can post successes for the file content back into the SAP Concur solution. The customer will handle the errors directly with the ERP. However, their ERP and the SAP Concur data will not be in sync at this point.

### <a name="matrix"></a>FI Sequence Flow Matrix

The following table describes the expected events and their statuses.

Sequence|Expected Event|Concur Expense Payment Status|FIS Posting Document Status|ERP|FIS
----|----|----|----|----|----
1|Report is submitted by user and enters workflow| Submitted/Not Paid| Doesn’t exist| Doesn’t exist| NA
2|Report is “final approved” in Processor workflow step| Processing Payment| Queued and Ready| Doesn’t exist| NA
3| ERP calls FIS for “ready” posting documents| Processing Payment| Queued and Ready| Received| GET financial documents
4| ERP calls FIS to acknowledge documents retrieved| Processing Payment| Acknowledged| Acknowledged| POST acknowledge financial documents
5|ERP Sends Posting Feedback - Failed| Financial Posting Failed| Posting Failed| Posting Failed| POST Posting Feedback
6| Processor Recalls Report for Posting Corrections| Not Paid| Posting Failed| Posting Failed| N/A
7| Report is re-submitted with corrections and re-enters workflow (steps 1-4 repeat)| Submitted/Not Paid| Posting Failed| Posting Failed| N/A
8| ERP Sends Posting Feedback – Success| Paid| Posting Success| Posting Success | POST Posting Feedback
9| ERP Sends Payment Feedback (Optional)| Payment Confirmed| Payment Confirmed| Paid | POST Payment Confirmation

### <a name="expense-pay"></a>Expense Pay

*	Batch close process calls FIS to confirm if expense report is successfully posted.
*	Demand is processed and is sent to the bank if status in FIS = SUCCESS.
*	Demand is not processed and is not sent to the bank if status in FIS = FAILED.
*	These statuses are determined by the Posting Confirmation API.
*	This “check” ensures that money is only reimbursed for reports successfully posted in the ERP.
*	When reports are extracted using the SAE/extract file process, payment demands are sent to the bank independent of the customer’s financial posting.

### <a name="nonexpense-pay"></a>Non-Expense Pay Payment Batches (Universal Edition and Universal-to-Professional Upgrade Edition)

* Current extract process requires a “batch close” event to trigger the extract job and generate the extract.
* FIS flow is triggered each time a report reaches the proper workflow status and has no dependency on the status of a batch resulting in a near real-time financial posting process.

## <a name="imaging"></a>Imaging

**Expense**

Use the entryreceiptID to obtain a short-lived URL (15 minutes ttl) that can be rendered to obtain the receipt image.  

```
https://www.concursolutions.com/api/image/v1.0/report/{entryreceiptID}
```

**Invoice**

Use the requestID to obtain a URL, copy the portion up to the "?" and render the image in a separate browser.

```
https://www.concursolutions.com/api/image/v1.0/invoice/{requestID}
```

```
<Image xmlns="http://www.concursolutions.com/api/image/2011/02" xmlns:i="http://www.w3.org/2001/XMLSchema-instance">
    <Id>2A5A2971F671480083FF</Id>
 <Url>https://imaginginvoiceupload.concursolutions.com/file/p0085104gigw/92608D9780BAB1DB6CF884CE08C115AA660E198045E42357812E976AD35DB3A7B573A0549B4859A742xxxxx?id=2A5A2971F671480083FF&amp;e=p0085104gigw&amp;t=AN&amp;s=ConcurConnect</Url>
</Image>
```

## <a name="timing"></a>Timing to Run FIS

Review the timing of the FIS API requests to ensure they are not interfering with the customer administrator's ability to send an expense report (or invoice) back to the employee prior to ERP integration. This may require the development of a button in the UI of the integration to allow the customer to initiate the FIS process on demand. This would eliminate the need to coordinate the timing.

For example, the SAP Concur workflow typically includes a final approval step that is completed by Finance/Accounting. Once the accountant final-approves a report (or invoice), the report is queued into FIS. If necessary, the accountant can pull this report back and send it back to the employee for adjustment prior to ERP integration, but only if you have not yet picked up the report. So, the process should include awareness of the timing between you and your customer.
