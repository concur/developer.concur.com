The VAT Reclaim App Category helps streamline the VAT recovery process for both Concur customers and the VAT Reclaim Partner.  The VAT Reclaim Partner's certified app will obtain Expense Report and Invoice data from our customers' Concur sites by using the "Quick Connect" process and executing their app using Concur's Expense and Invoice APIs. The Partners's application should use the API's search parameters so the response includes only Expense Reports or Invoices that have reached the end of the approval workflow within the customer's Concur system.  Those Expense Reports and Invoices that reached the end of the approval process ("Extracted" or "Payment Confirmed") can no longer be edited within the Concur system.  The Partner's app will therefore be simplified by only obtaining data that is locked down.

development item|resources
---|---
quick connect|See the Quick Connect Scope document for details related to OAuth2 and the Partner's Landing Page requirements.
Expense Report (v3)|[https://developer.concur.com/api-reference/expense/expense-report/reports.html#get](https://developer.concur.com/api-reference/expense/expense-report/reports.html#get)
