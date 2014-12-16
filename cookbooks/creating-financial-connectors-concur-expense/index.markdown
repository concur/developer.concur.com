---
layout: page
title: Creating Financial Connectors for Concur Expense
permalink:
---

## Overview
The Financial Integration Platform part of Concur Connect makes it easier for developers to create packaged connectors that integrate Concur Expense with financial systems. The process consists of completing the following five steps:

1. Polling for reports ready for processing.
1. Retrieving details about each report.
1. Organizing the report payees on the report.
1. Creating the necessary transactions in the financial system.
1. Committing the report.

This tutorial will explain how to accomplish each of these steps.

> NOTE: This tutorial assumes that you are familiar with Concur Expense and the financial system. It also assumes the reader created a developer sandbox and understands the basics of making partner applications and making API calls to the Concur Connect Platform.

## Introduction
The following ideas are helpful for understanding how to integrate Concur expense reports with one or more financial systems.

### Financial Integration Types
There are a variety of financial systems to integrate with Concur expense report data. The most common types of financial systems are:

* *Accounting*: Used to create the accounting transactions that account for the expenses in the report.
* *Payment*: Used to create payables in an Accounts Payable system or payment demands in payment system that either reimburses employees or pay card issuers.
* *Remittance*: Used to create the remittance for a payment; most commonly a credit card remittance sent to a card issuer.
* *Taxation*: Used to track VAT items in a taxation system.

With an expense report there are two key accounting events: accounting for the expenses, and paying employees and card issuers. These events tie to the Accounting and Payment integrations respectively. The simplest situation involves the AP module of an ERP or accounting software handling both events, combining the Accounting and Payment integrations. The result is only one financial system and one type of financial transaction to integrate. For clarity, this tutorial will cover only this simple situation.

This tutorial will cover only the most common integration situations. It excludes the following:

* Report payees paid by a payment service such as Expense Pay
* Offsets to employee reimbursements due to cash advances
* Offsets to employee reimbursement due to personal usage of company paid cards

### Transaction Processing
The core of successful financial integration is the notion of transaction processing.  This is a methodology where transactions must be successfully created for the various financials systems prior to committing an expense report in Concur.  If any transactions can’t be created, the report can be rolled back, allowing the report to be returned to an administrator or report owner to fix.  
This is important, as once a report is committed in Concur it no longer can be sent backward in the workflow or have its data changed. In other words, the report becomes locked.

Concur Expense commits a report when the report transitions from the Processing Payment or Final Approval workflow step to the Processed or Paid workflow step. This process updates the Payment Status of the report, to either Paid or Extracted, and the report is officially committed.

The following diagram illustrates the sequence of events involved with the transaction processing methodology. The example uses an ERP as the financial system where the packaged connector will create AP transactions to pay employees and card issuers.

![Transaction Processing Sequence](financialconnectordiagram.png)

The actors are:

* *Processor* – the administrator that approves the report for payment
* *Concur* – the Concur Connect Platform
* *Connector* – the packaged connector
* *ERP* – the financial system

The sequence of events is:

1. Processor approves the report for payment, the final step in the report workflow. The report has an Approval Status of Final Approval. The report’s Payment Status is Unpaid.
1. The Connector asks Concur to give it a list of reports at Final Approval that are Unpaid.
1. Concur provides this list of reports.
1. For each report, the Connector asks Concur for its details.
1. Concur provides the report’s details.
1. The Connector creates the necessary transactions in the financial system.
1. The financial system tells the Connector it successfully created the transactions.
1. The Connector directs Concur to commit the report.

#### Unit of Work – Expense Report
An important consideration in transaction processing is the smallest unit of work where transactions can be committed or rolled back. With a Concur expense report the smallest unit of work is the expense report .  

Expense reports that can’t have the necessary transactions created in the financial system are defined as a remedial action report. 

#### Remedial Action
The remedial action report can be sent back, either to the Expense Processor or the Report Owner, for remedial action. Whether it goes to the Processor, who typically is someone in Accounting or Finance, or the Owner depends on the type of error and who is best suited to fix it.

Once the Processor or Owner fixes the error, the report is resubmitted and/or approved.  Once it reaches final approval, the connector can attempt to integrate the report with the financial system.

Let’s take a look at the steps for processing reports where all expense entries will be integrated with only an Accounts Payables financial system. The AP system handles both the Accounting and Payment integration types.

## Step 1 – Poll for Reports Ready for Processing
In building your connector, the first step is creating a polling routine that asks Concur to provide a list of reports ready for processing every few minutes. The polling call will include a search term for the time when the routine last successfully received a response from this call.
Here is what the HTTP call would look like:

	HTTP Request Type: GET
	URI: https://www.concursolutions.com/api/expense/expensereport/v2.0/Reports/?status=PROCESSING&modifiedafterdate=2013-01-01T00:00:00

Here the status is Processing, meaning reports ready for processing, and modifiedafterdate is the date and time of the last successful poll. This date and time uses the UTC format.
If successful, the response includes any reports ready for processing. You should store the time you received this successful call to use in your next poll.

## Step Two – Get Report Details
The next step is to request the details for each report you received in Step One. Call Get Report Details for each report using the <ReportDetailsURL> element in the Response for Get List of Reports. Here’s what the call would look like:

	HTTP Request Type: GET
	URI: https://www.concursolutions.com/api/expense/expensereport/v2.0/report/{reportID}

The response includes all the details about the report, including those necessary for financial integration.

## Step Three – Organize Report into Payees
An expense report will have one or more payees that are owed money. Each payee in a report is called a report payee. Typically, a report has one report payee for the employee and one for the credit card issuer. You will need to create a payables transaction in the AP system for each report payee.

To organize by report payees, group all expense entries by the Payment Type Name found in the <JournalEntry> parent element: 

For an employee payee, group all the journal entries where the <PayeePaymentTypeName> in the <JournalEntry> is Employee.
For card issuer payees, group all the journal entries where the <PayeePaymentTypeName> in the <JournalEntry> is the payment type name for the issuer’s credit card.

Once you have grouped the expense entries by report payee, the connector is ready to create transactions in the financial system.

## Step Four – Create Financial Transaction by Integration Type
For each report payee, create the necessary transactions for each type of integration your connector needs to complete. In our example, you would create an AP or Bill transaction (a.k.a. a payable) in the AP system for each report payee. Creating an AP transaction involves these actions:

Creating the payable using a liability account.
Offsetting the liability account with the expense accounts noted by the Account Code in the journal entries associated to the expense entries covered in the report payee.
Creating any distributions noted by the Allocation elements.
The connector must note whether the financial system is able to create all the necessary transactions for every report payee in the expense report. 

### Transaction Problems and Who Can Fix Them
If a financial system can’t create a transaction, determine where the problem is in the expense entries for the report payee. Next, consider who at the company is best suited to fix the problem: an administrator or the report owner.  
Here are some common error types and who would be best suited to fix the error.

Chart of Account: The problem may be that the account code Concur has for a particular expense type is no longer valid in the Chart of Accounts. Clearly, the report owner can’t fix this. Only an administrator in Accounting or Finance would be able to fix it.

Project Code: The Project the report owner selected when creating an expense in Concur may have expired in the Professional Services automation module of the ERP. Because it is expired, the AP module of the ERP won’t allow a new AP transaction to reference it. An accounting administrator can’t fix this because he or she won’t know what alternative Project should apply. Only the report owner can fix this.

In the next step we’ll cover how to get this remedial action report fixed.

## Step Five – Commit or Rollback Transactions

### Successful Financial Integration
For the expense reports that were successfully used to create transactions in the financial system, use the Post Integration Status function.
This API will mark the <JR_Key> element for all the journal entries for the specified report with a code that indicates the API handled the integration for the journal entry.
Here’s what the call would look like:

	HTTP Request Type: POST
	URI: https://www.concursolutions.com/api/expense/expensereport/v2.0/integrationstatus/report/{ReportID}

The ReportID is found in the <ReportID> element of the Response for Get Report Details.
Post Integration Status will move the report forward in the workflow to the Paid payment status, thus committing the report in Concur Expense. If necessary, you should commit the transactions in the financial system, ensuring that both the financial system and Concur have committed.

### Failed Financial Integration
For expense reports that were not successfully used to create transactions in the financial system, the report becomes a remedial action report. The connector should rollback (delete) any transaction it was able to create in the financial system for the report, as the entire report must be returned to Concur. 

Depending on why the financial system wasn’t able to create transactions, send the remedial action report to either the Expense Processor or Report Owner.  

If the problem must be fixed by an administrator, recall it to the Processor.  Otherwise, send it to the Report Owner. Use the Post Expense Report Workflow Action using the Recall to Processor or Send Back action. Provide a comment that explains why the report was recalled or sent back. Once you have sent the report back, you can update the report with comments about the problem data. 
If the problem relates to the entire report (this is rare), use Post Expense Report Header to provide a comment clarifying what needs to be fixed.

If the problem relates to specific expense entries (this is typical), use Post Expense Entry to provide a comment for each expense entry with the problem.

## Repeat Steps Two through Five
Repeat Steps Two through Five for the remainder of reports returned in Step One.  
Once your connector processes all the reports, it can start the process anew. It calls Get Reports List using the time stamp previously saved for the last successful call.

## Conclusion
This tutorial outlined the five steps a packaged connector would follow to integrate approved expense reports into an AP system. It used the simple situation where an AP system handles the accounting and payment integration types.
