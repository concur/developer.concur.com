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
receipts.read|Read receipt data|[Get Started](/api-reference/receipts/get-started.html), [Endpoints](/api-reference/receipts/endpoints.html), [Supported Receipt Types](/api-reference/receipts/supported-receipt-types.html), [Sample Receipts](/api-reference/receipts/sample-receipts.html), [Response Codes](/api-reference/receipts/response-codes.html)
receipts.write|Read receipt data and post receipts|[Get Started](/api-reference/receipts/get-started.html), [Endpoints](/api-reference/receipts/endpoints.html), [Supported Receipt Types](/api-reference/receipts/supported-receipt-types.html), [Sample Receipts](/api-reference/receipts/sample-receipts.html), [Response Codes](/api-reference/receipts/response-codes.html)
receipts.writeonly|Post receipts on your behalf|[Get Started](/api-reference/receipts/get-started.html), [Endpoints](/api-reference/receipts/endpoints.html), [Supported Receipt Types](/api-reference/receipts/supported-receipt-types.html), [Sample Receipts](/api-reference/receipts/sample-receipts.html), [Response Codes](/api-reference/receipts/response-codes.html)
travel.receipts.read|Read travel receipt requests|[Getting Started](/api-reference/travel-receipts/getting-started.html), [Overview](/api-reference/travel-receipts/overview.html), [Sample](/api-reference/travel-receipts/sample.html)
travel.receipts.write|Post travel receipts|[Getting Started](/api-reference/travel-receipts/getting-started.html), [Overview](/api-reference/travel-receipts/overview.html), [Sample](/api-reference/travel-receipts/sample.html)
user.read|Read profile information|[Getting Started](/api-reference/profile/v1.getting-started.html), [User API (Profile v1)](/api-reference/profile/v1.user.html)
user.write|Read and update profile information|[Getting Started](/api-reference/profile/v1.getting-started.html), [User API (Profile v1)](/api-reference/profile/v1.user.html)
company.read|Read company profile information|[Getting Started](/api-reference/profile/v1.getting-started.html), [Company API (Profile v1)](/api-reference/profile/v1.company.html)
company.write|Read and update company profile information|[Getting Started](/api-reference/profile/v1.getting-started.html), [Company API (Profile v1)](/api-reference/profile/v1.company.html)
travelrequest.write|Add, update, or delete travel requests|[Getting Started](/api-reference/request/v4.get-started.html), [Endpoints](/api-reference/request/v4.endpoints.html), [Examples](/api-reference/request/v4.examples.html), [Error Codes](/api-reference/request/v4.response-codes.html)
openid|Obtain an OPENID standards-based token to describe a user|Not Avaliable
user_read|Read only access to user travel preference data|[User v1](/api-reference/user/), [User v3](/api-explorer/v3-0/Users.html), [User v3.1](/api-reference/authentication/get-users31.html)
ATTEND|Add, update, or deactivate attendees|[Attendees](/api-reference/expense/attendees/), [Attendee Types](/api-reference/expense/attendee-types/attendee-type-resource.html)
CONFIG|Understand how to post expense information according to your company's configuration|[Expense Group Configurations](/api-reference/expense/expense-report/v1dot1.expense-group-configurations.html)
CONREQ|Use your travel profile information to get or update connection requests between SAP Concur and travel reward program partners|[Connection Requests](/api-reference/common/connection-requests/connection-requests-resource.html), [Connection Requests 3.0](/api-explorer/v3-0/ConnectionRequests.html), [Connection Requests 3.1](/api-explorer/v3-1/ConnectionRequests.html), [Connection Requests 3.2](/api-explorer/v3-2/ConnectionRequests.html)
ERECPT|Post receipts and invoices|[Receipts v3](/api-reference/receipts/v3.receipts.html)
EXPRPT|Get, add, approve, or update expense reports|[Allocations v3](./api-reference/expense/allocations/expense-allocations.html), [Expense Report Entry v2](./api-reference/expense/expense-report/expense-entry.html), [Expense Report Form Field v1.1](./api-reference/expense/expense-report/expense-form-field.html), [Expense Report Form v1.1](./api-reference/expense/expense-report/expense-form.html), [Expense Report Itemization v3](./api-reference/expense/expense-report/expense-itemization.html), [Expense Report Integration Status v2](./api-reference/expense/expense-report/integration-status.html), [Expense Report POST Exceptions v1.1](./api-reference/expense/expense-report/post-report-exceptions.html), [Expense Report POST Submission v1.1](./api-reference/expense/expense-report/post-report-submission.html), [Expense Report POST Workflow v1.1](./api-reference/expense/expense-report/post-report-workflow-action.html), [Expense Reports v3](/api-reference/expense/expense-report/v3.reports.html), [Expense Report v2](./api-reference/expense/expense-report/expense-report-get.html), [Quick Expense v3](./api-reference/expense/quick-expense/v3.quick-expense.html), [Quick Expense GET v1](/api-reference/expense/quick-expense/v1.quick-expense-resource-get.html), [Quick Expense POST v1](/api-reference/expense/quick-expense/v1.quick-expense-resource-post.html), [Expense Entry Itemization POST v1.1](/api-reference/expense/expense-report/v1dot1.expense-itemization.html), [Expense Entry Itemization v1.1](/api-reference/expense/expense-report/v1dot1.expense-itemization.html), [Expense Entry v1.1](/api-reference/expense/expense-report/v1dot1.expense-entry.html), [Expense Entry GET 1.1](/api-reference/expense/expense-report/v1dot1.expense-entry.html), [Expense Entry POST 1.1](./api-reference/expense/expense-report/v1dot1.expense-entry.html), [Expense Report Header v1.1](/api-reference/expense/expense-report/v1dot1.reports.html), [Expense Reports List v1.1](/api-reference/expense/expense-report/v1dot1.reports-list.html), [Expense Report v1.1 Report Details](/api-reference/expense/expense-report/v1dot1.report-full-details.html), [Expense Report v1.1 Locations](/api-reference/common/locations/v1dot1.locations.html), [Expense Report v1.1 Location](/api-reference/common/locations/v1dot1.locations.html), [Expense Report v2](/api-reference/expense/expense-report/v2.reports.html), [Expense Report v2 Reports](/api-reference/expense/expense-report/v2.reports.html)
CCARD|Credit Card|[Company Card Transactions](/api-reference/expense/expense-report/company-card-transaction-resource.html), [Company Card Transaction Elements](/api-reference/expense/expense-report/expense-report-get.html#cardtransaction-elements)
BANK|Employee Banking|[Employee Bank Account Elements](/api-reference/expense/expense-report/expense-report-get.html#employeebankaccount-elements)
EXTRCT|Extract expense data|[Extracts v1](/api-reference/common/extracts/v1.extracts.html)
FOP|Access and update user form of payment information|[Form of Payment](/api-reference/travel-profile/v2.form-payment-resource.html)
GHOST|Ghost Cards|[Form of Payment](/api-reference/travel-profile/v2.form-payment-resource.html)
IMAGE|Add or get invoice and receipt images|[Image v3](/api-reference/image/v3.image.html), [Image v1](/api-reference/image/v1.image.html)
INSGHT|Access itineraries and identify missing trip segments|[Latest Bookings](/api-reference/insights/latest-bookings-resource.html), [Oppertunities](/api-reference/insights/opportunities-resource.html)
INVPMT|Create, Retrieve and Update for Payment Requests|[Payment Request v3](/api-reference/invoice/v3.payment-request.html), [Retrieve Payment Request Digests](/api-reference/invoice/v3.payment-request-digest.html), [Payment Request Swagger](/api-explorer/v3-0/PaymentRequest.html), [Payment Request Digest Swagger](/api-explorer/v3-0/PaymentRequestDigest.html)
INVPO|Create or update purchase orders|[Purchase Orders v3](/api-reference/invoice/v3.purchase-order.html), [Purchase Order Receipt v3 Swagger](/api-explorer/v3-0/PurchaseOrderReceipts.html), [Purchase Order v3 Swagger](/api-explorer/v3-0/PurchaseOrders.html)
INVTV|View tax invoices and update validation status|[Sales Tax Validation Request](/api-explorer/v3-0/SalesTaxValidationRequest.html)
INVVEN|Vendors search and retrieve list of vendors|[Invoice Vendor v3](/api-reference/invoice/v3.vendor.html), [Invoice Vendor Swagger](/api-explorer/v3-0/Vendors.html), [Invoice Vendor Group Swagger](/api-explorer/v3-0/VendorGroup.html), [Invoice Vendor Bank Swagger](/api-explorer/v3-0/VendorBank.html)
ITINER|Get, add, or update travel itineraries and bookings|[Itinerary Web Service](/api-reference/travel/itinerary-tmc-thirdparty/), [Booking Resource](/api-reference/travel/itinerary/booking/booking-resource.html), [Itinerary Service Overview](/api-reference/travel/itinerary/itinerary.html), [Trips](/api-reference/travel/itinerary/trip/trip-resource.html), [Travel Service](/api-reference/travel/travel.html), [Trip Approval](/api-reference/travel/trip-approval/trip-approval-resource.html)
LIST|Use and update drop-down lists configured by your company|[List v3](/api-reference/common/list-item/v3.list-item.html), [List v3 Swagger](/api-explorer/v3-0/Lists.html), [List Item v3 Swagger](/api-explorer/v3-0/ListItems.html), [List v1](/api-reference/common/list-item/v1.list-item.html), [List v1 Resource](/api-reference/common/list-item/v1.list-resource.html), [Get List of List v1](/api-reference/common/list-item/v1.list-resource-get.html), [Post New List v1](/api-reference/common/list-item/v1.list-resource-post.html)
NOTIF|Receive notifications when expense reports change|[Event Notification Callout](/api-reference/callouts/event-notification.html), [Get Notification](/api-reference/callouts/get-notifications-status.html), [Delete Notification](/api-reference/callouts/delete-notification.html), [Post Notification](/api-reference/callouts/post-event-notification.html)
PAYBAT|Close and export payment batches|[Payment Batches](/api-reference/expense/payment-batch/v1.payment-batches.html)
RCTIMG|Add or update receipt and OCR images|[Receipt Image](/api-reference/image/)
SUPSVC|Get supplier data|[Suppliers](/api-reference/common/suppliers/suppliers-resource.html)
TAXINV|Get or validate digital tax invoices|[Sales Tax Validation v3](/api-reference/invoice/v3.sales-tax-validation.html)
TRVPRF|Access and update Concur Travel profile information|[Travel Profile 2.0 Service](/api-reference/travel-profile/v2.profile-service.html), [Description](/api-reference/travel-profile/v2.profile-resource.html)
PASSV|Passport visa information|[Passport Information](/api-reference/travel-profile/v2.profile-resource.html#Passports), [Visa Information](/api-reference/travel-profile/v2.profile-resource.html#Visas)
COMPD|Company details|[Company Details](/api-reference/travel-profile/v2.profile-resource.html#General), [Custom Fields](/api-reference/travel-profile/v2.profile-resource.html#CustomFields)
EMERG|Emergency Contact information|[Emergency Contact Information](/api-reference/travel-profile/v2.profile-resource.html#EmergencyContact)
TSAI|TSA information|[TSA Information](/api-reference/travel-profile/v2.profile-resource.html#TSAInfo)
TMCSP|TMC specific information|[TMC Specific Information](/api-reference/travel-profile/v2.profile-resource.html#General)
MEDIC|Medical alerts|[Medical Alerts](/api-reference/travel-profile/v2.profile-resource.html#General)
UNUTX|Unused tickets|[Unused Tickets](/api-reference/travel-profile/v2.profile-resource.html#UnusedTickets)
TRVPTS|Access user balances and post travel points redemptions|[Travel Points](/api-reference/travel-profile/v1.loyalty-program-resource.html)
TRVREQ|Add, update, or delete authorization requests|[Travel Request v3](/api-reference/request/v3.request.html)
TWS|Approve or reject travel itineraries|[Trip Approvals](/api-reference/travel/trip-approval/trip-approval-resource.html)
USER|Add or update SAP Concur user accounts|[User v1](/api-reference/user/), [User v3](/api-explorer/v3-0/Users.html), [User v3.1](/api-reference/authentication/get-users31.html)
COMPANY|Add or update SAP Concur company accounts|Not Available
locate.location.read|Allows the application to only to view the SAP  Concur Locate user location|[User Location API](/api-reference/locate/userLocations.html)
locate.location.write|Allows the application to write user location information using SAP Concur Locate API service|[User Location API](/api-reference/locate/userLocations.html)
purchaserequest.read|Allows you to retrieve purchase requests|[Purchase Request API](/api-reference/invoice/v4.purchase-request-get-started.html)
purchaserequest.write|Allows you to create new purchase requests|[Purchase Request API](/api-reference/invoice/v4.purchase-request-get-started.html)
travelallowance.allowancedays.read|View the allowance days in an expense report|[Travel Allowance API](/api-reference/expense/travelallowance/travelallowance-days.html)
expense.report.read|Retrieve the report ID from the Expense Report API to supply to the Travel Allowance API|[Travel Allowance API](/api-reference/expense/travelallowance/travelallowance-days.html)
