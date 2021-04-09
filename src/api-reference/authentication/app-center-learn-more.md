---
title: Learn More About Scopes
layout: reference
---

## Partner Application Scope Usage

The table below lists all the possible scopes that an SAP Concur Partner Application might have access to. Please refer to the App Center Terms and Conditions and look under the "Shared Information" dialogue. Links to API endpoints that are accessible by each scope are mapped out.

### Note:

* One scope may have access to more than one API/Endpoint.
* One scope may have both read and write access unless otherwise specified.
* The partner application does not necessarily use all the APIs that are available for a scope.

<!-- The nonbreaking spaces are here to manage the column widths -->
<!-- since the list of APIs isn't paragraph text.                -->

Scope|User Description&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|APIs
---|---|---
ATTEND|Add, update, or deactivate attendees|[Attendees](/api-reference/expense/attendees/)
BANK|Employee Banking|[Report Details-Employee Banking](/api-reference/expense/expense-report/expense-report-get.html#employeebankaccount-elements)
budgetitem.read|Grants read access to the budget resources|[Budget v4](/api-reference/budget/getting-started.html)
budgetitem.write|Grants read and write access to the budget resources|[Budget v4](/api-reference/budget/getting-started.html)
CCARD|Credit Card|[Company Card Transactions](/api-reference/expense/expense-report/company-card-transaction-resource.html), [Report Details-Card Transactions](/api-reference/expense/expense-report/expense-report-get.html#cardtransaction-elements)
COMPD|Company details|[Travel Profile v3 Company Details](/api-reference/travel-profile/v2.profile-resource.html#General), [Travel Profile v2 Custom Fields](/api-reference/travel-profile/v2.profile-resource.html#CustomFields)
company.read|Read company profile information|[Profile](/api-reference/profile/v1.getting-started.html), [Company API (Profile v1)](/api-reference/profile/v1.company.html)
company.write|Read and update company profile information|[Profile](/api-reference/profile/v1.getting-started.html), [Company API (Profile v1)](/api-reference/profile/v1.company.html)
CONFIG|Understand how to post expense information according to your company's configuration|[Expense Group Configurations](/api-reference/expense/expense-report/v1dot1.expense-group-configurations.html), [Quick Expense v4](/api-reference/expense/quick-expense/v4.quick-expense.html)
CONREQ|Use your travel profile information to get or update connection requests between SAP Concur and travel reward program partners|[Connection Requests 3.2](/api-reference/common/connection-requests/connection-requests-resource.html), [Connection Requests 3.0](/api-explorer/v3-0/ConnectionRequests.html), [Connection Requests 3.1](/api-explorer/v3-1/ConnectionRequests.html)
EMERG|Emergency Contact information|[Travel Profile v2 Emergency Contact](/api-reference/travel-profile/v2.profile-resource.html#EmergencyContact)
events.topic.read |Grants read and write access to Event Topics once subscribed|[Event Subscription Service v4](/api-reference/ess/v4.event-subscription.html)
expense.exchangerate.writeonly|Create custom exchange rates|[Exchange Rate v4](/api-reference/expense/exchange-rate/v4.exchange-rate.html)
expense.report.read|Get information about expense reports|[Comments v4](/api-reference/expense/expense-report/v4.comments.html), [Reports v4](/api-reference/expense/expense-report/v4.reports.html), [Allocations v4](/api-reference/expense/expense-report/v4.allocations.html), [Expenses v4](/api-reference/expense/expense-report/v4.expenses.html)
expense.report.readwrite|Read and write expense report headers|[Comments v4](/api-reference/expense/expense-report/v4.comments.html), [Reports v4](/api-reference/expense/expense-report/v4.reports.html), [Allocations v4](/api-reference/expense/expense-report/v4.allocations.html), [Expenses v4](/api-reference/expense/expense-report/v4.expenses.html)
expense.report.workflowstatus.write|Approve or Send Back the Report in the workflow|[Comments v4](/api-reference/expense/expense-report/v4.comments.html), [Reports v4](/api-reference/expense/expense-report/v4.reports.html)
EXPRPT|Get, add, approve, or update expense reports|[Allocations v3](/api-reference/expense/allocations/expense-allocations.html), [Expense Report Entry v2](/api-reference/expense/expense-report/expense-entry.html), [Expense Report Form Field v1.1](/api-reference/expense/expense-report/expense-form-field.html), [Expense Report Form v1.1](/api-reference/expense/expense-report/expense-form.html), [Expense Report Itemization v3](/api-reference/expense/expense-report/expense-itemization.html), [Expense Report Integration Status v2](/api-reference/expense/expense-report/integration-status.html), [Expense Report POST Exceptions v1.1](/api-reference/expense/expense-report/post-report-exceptions.html), [Expense Report POST Submission v1.1](/api-reference/expense/expense-report/post-report-submission.html), [Expense Report POST Workflow v1.1](/api-reference/expense/expense-report/post-report-workflow-action.html), [Expense Reports v3](/api-reference/expense/expense-report/v3.reports.html), [Expense Report v2](/api-reference/expense/expense-report/expense-report-get.html), [Expense Entry Itemization POST v1.1](/api-reference/expense/expense-report/v1dot1.expense-itemization.html), [Expense Entry Itemization v1.1](/api-reference/expense/expense-report/v1dot1.expense-itemization.html), [Expense Entry v1.1](/api-reference/expense/expense-report/v1dot1.expense-entry.html), [Expense Entry GET 1.1](/api-reference/expense/expense-report/v1dot1.expense-entry.html), [Expense Entry POST 1.1](/api-reference/expense/expense-report/v1dot1.expense-entry.html), [Expense Report Header v1.1](/api-reference/expense/expense-report/v1dot1.reports.html), [Expense Reports List v1.1](/api-reference/expense/expense-report/v1dot1.reports-list.html), [Expense Report v1.1 Report Details](/api-reference/expense/expense-report/v1dot1.report-full-details.html), [Expense Report v1.1 Locations](/api-reference/common/locations/v1dot1.locations.html), [Expense Report v1.1 Location](/api-reference/common/locations/v1dot1.locations.html), [Expense Report v2](/api-reference/expense/expense-report/v2.reports.html), [Expense Report v2 Reports](/api-reference/expense/expense-report/v2.reports.html)
EXTRCT|Extract expense data|[Extracts v1](/api-reference/common/extracts/v1.extracts.html)
fiscalcalendar.read|Grants read access to the fiscal calendar|[Budget v4](/api-reference/budget/getting-started.html)
fiscalcalendar.write|Grants read and write access to the fiscal calendar|[Budget v4](/api-reference/budget/getting-started.html)
identity.user.ids.read|Read user ID data|[Identity v4](/api-reference/profile/v4.identity.html)
identity.user.core.read|Read user core data|[Identity v4](/api-reference/profile/v4.identity.html)
identity.user.coresensitive.read|Read core sensitive data|[Identity v4](/api-reference/profile/v4.identity.html)
identity.user.enterprise.read|Read user enterprise data|[Identity v4](/api-reference/profile/v4.identity.html)
identity.user.coreenterprise.writeonly|Write access to all core and enterprise fields except externalID|[Identity v4](/api-reference/profile/v4.identity.html)
identity.user.externalID.writeonly|Write access to externalID only|[Identity v4](/api-reference/profile/v4.identity.html)
IMAGE|Add or get invoice and receipt images|[Receipt Image v3](/api-reference/image/v3.image.html), [Receipt Image v1](/api-reference/image/v1.image.html)
INSGHT|Access itineraries and identify missing trip segments|[Insights-Latest Bookings](/api-reference/insights/latest-bookings-resource.html), [Insights-Opportunities](/api-reference/insights/opportunities-resource.html)
invoice.providerpayment.write|Read access to pending payments, and write access to payment status|[Invoice Pay v4](/api-reference/invoice/v4.invoice-pay.html)
INVPMT|Create, Retrieve and Update for Payment Requests|[Invoice Payment Request v3](/api-reference/invoice/v3.payment-request.html), [Invoice Retrieve Payment Request Digests v3](/api-reference/invoice/v3.payment-request-digest.html)
INVPO|Create or update purchase orders|[Invoice Purchase Orders v3](/api-reference/invoice/v3.purchase-order.html)
INVTV|View tax invoices and update validation status|[Invoice Sales Tax Validation Request v3](/api-reference/invoice/v3.sales-tax-validation.html)
INVVEN|Vendors search and retrieve list of vendors|[Invoice Vendor v3](/api-reference/invoice/v3.vendor.html), [Invoice Vendor Group Swagger](/api-explorer/v3-0/VendorGroup.html), [Invoice Vendor Bank Swagger](/api-explorer/v3-0/VendorBank.html)
ITINER|Get, add, or update travel itineraries and bookings|[Itinerary Web Service](/api-reference/travel/itinerary-tmc-thirdparty/), [Travel-Booking Resource](/api-reference/travel/itinerary/booking/booking-resource.html), [Itinerary Service](/api-reference/travel/itinerary/itinerary.html), [Travel-Trips v1.1](/api-reference/travel/itinerary/trip/trip-resource.html), [Travel Services](/api-reference/travel/travel.html), [Trip Approval v1](/api-reference/travel/trip-approval/trip-approval-resource.html)
LIST|Use and update drop-down lists configured by your company|[List Item v3](/api-reference/common/list-item/v3.list-item.html), [List v1](/api-reference/common/list-item/v1.list-item.html), [List v1 Resource](/api-reference/common/list-item/v1.list-resource.html), [Get List of List v1](/api-reference/common/list-item/v1.list-resource-get.html), [Post New List v1](/api-reference/common/list-item/v1.list-resource-post.html), [Budget v4](/api-reference/budget/getting-started.html)
locate.location.read|Allows the application to only to view the SAP  Concur Locate user location|[User Location v4](/api-reference/locate/v4.userLocations.html)
locate.location.write|Allows the application to write user location information using SAP Concur Locate API service|[User Location v4](/api-reference/locate/v4.userLocations.html)
MEDIC|Medical alerts|[Travel Profile v2 Medical Alerts](/api-reference/travel-profile/v2.profile-resource.html#General)
NOTIF|Receive notifications when expense reports change|[Event Notification Callout](/api-reference/callouts/event-notification.html), [Get Notification](/api-reference/callouts/get-notifications-status.html), [Delete Notification](/api-reference/callouts/delete-notification.html), [Post Notification](/api-reference/callouts/post-event-notification.html)
PASSV|Passport visa information|[Travel Profile v2 Passport](/api-reference/travel-profile/v2.profile-resource.html#Passports), [Travel Profile v2 Visa](/api-reference/travel-profile/v2.profile-resource.html#Visas)
PAYBAT|Close and export payment batches|[Payment Batches v1.1](/api-reference/expense/payment-batch/v1.payment-batches.html)
purchaserequest.read|Allows you to retrieve purchase requests|[Purchase Request v4](/api-reference/invoice/v4.purchase-request-get-started.html)
purchaserequest.write|Allows you to create new purchase requests|[Purchase Request v4](/api-reference/invoice/v4.purchase-request-get-started.html)
quickexpense.writeonly|Write quick expense|[Quick Expense v4](/api-reference/expense/quick-expense/v4.quick-expense.html)
RCTIMG|Add or update receipt and OCR images|[Receipt Image v3](/api-reference/image/)
receipts.read|Read receipt data|[Receipts v4](/api-reference/receipts/get-started.html)
receipts.write|Read receipt data and post receipts|[Receipts v4](/api-reference/receipts/get-started.html)
receipts.writeonly|Post receipts on your behalf|[Receipts v4](/api-reference/receipts/get-started.html), [Quick Expense v4](/api-reference/expense/quick-expense/v4.quick-expense.html)
spend.list.delete|Delete capabilities for spend lists|[List v4](/api-reference/common/lists/v4.list.html)
spend.list.read|Read only access to spend list and category details|[Reports v4](/api-reference/expense/expense-report/v4.reports.html), [Allocations v4](/api-reference/expense/expense-report/v4.allocations.html), [Expenses v4](/api-reference/expense/expense-report/v4.expenses.html), [List v4](/api-reference/common/lists/v4.list.html)
spend.list.write|Read and write access to spend lists|[List v4](/api-reference/common/lists/v4.list.html)
spend.listitem.delete|Delete capabilities for spend list items|[List Item v4](/api-reference/common/list-item/v4.list-item.html)
spend.listitem.read|Read only access to spend list items listItemId|[Reports v4](/api-reference/expense/expense-report/v4.reports.html), [Allocations v4](/api-reference/expense/expense-report/v4.allocations.html), [Expenses v4](/api-reference/expense/expense-report/v4.expenses.html), [List Item v4](/api-reference/common/list-item/v4.list-item.html)
spend.listitem.write|Read and write access to spend list items|[List Item v4](/api-reference/common/list-item/v4.list-item.html)
SUPSVC|Get supplier data|[Suppliers v3](/api-reference/common/suppliers/suppliers-resource.html)
TAXINV|Get or validate digital tax invoices|[Sales Tax Validation v3](/api-reference/invoice/v3.sales-tax-validation.html)
TMCSP|TMC specific information|[Travel Profile v2 TMC](/api-reference/travel-profile/v2.profile-resource.html#General)
travelallowance.allowancedays.read|View the allowance days in an expense report|[Travel Allowance API](/api-reference/expense/travelallowance/travelallowance-days.html)
travel.receipts.read|Read travel receipt requests|[Travel Receipts](/api-reference/travel-receipts/getting-started.html), [Travel Receipts Sample](/api-reference/travel-receipts/sample.html)
travel.receipts.write|Post travel receipts|[Travel Receipts](/api-reference/travel-receipts/getting-started.html), [Travel Receipts Sample](/api-reference/travel-receipts/sample.html)
travelrequest.write|Add, update, or delete travel requests|[Request v4](/api-reference/request/v4.get-started.html)
TSAI|TSA information|[Travel Profile v2 TSA](/api-reference/travel-profile/v2.profile-resource.html#TSAInfo)
TRVPRF|Access and update Concur Travel profile information|[Travel Profile v2](/api-reference/travel-profile/v2.profile-service.html), [Travel Profile v2 Resource](/api-reference/travel-profile/v2.profile-resource.html)
TRVPTS|Access user balances and post travel points redemptions|[Travel Profile v1 Travel Points](/api-reference/travel-profile/v1.loyalty-program-resource.html)
TRVREQ|Add, update, or delete authorization requests|[Travel Request v3](/api-reference/request/v3.request.html)
TWS|Approve or reject travel itineraries|[Trip Approvals](/api-reference/travel/trip-approval/trip-approval-resource.html)
UNUTX|Unused tickets|[Travel Profile v2 Unused Tickets](/api-reference/travel-profile/v2.profile-resource.html#UnusedTickets)
USER|Add or update SAP Concur user accounts|[User v1](/api-reference/user/), [User v3](/api-explorer/v3-0/Users.html), [User v3.1](/api-reference/authentication/get-users31.html)
user.read|Read profile information|[Profile](/api-reference/profile/v1.getting-started.html), [User API (Profile v1)](/api-reference/profile/v1.user.html), [Comments v4](/api-reference/expense/expense-report/v4.comments.html), [Reports v4](/api-reference/expense/expense-report/v4.reports.html), [Allocations v4](/api-reference/expense/expense-report/v4.allocations.html), [Expenses v4](/api-reference/expense/expense-report/v4.expenses.html), [Quick Expense v4](/api-reference/expense/quick-expense/v4.quick-expense.html)
user.write|Read and update profile information|[Profile](/api-reference/profile/v1.getting-started.html), [User API (Profile v1)](/api-reference/profile/v1.user.html)
user_read|Read only access to user travel preference data|[User v1](/api-reference/user/), [User v3](/api-explorer/v3-0/Users.html), [User v3.1](/api-reference/authentication/get-users31.html)
