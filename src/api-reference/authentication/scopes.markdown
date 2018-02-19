---
title: Scopes
layout: reference
---


# List of Scopes for all Concur APIs

* [Overview]()
* [Naming Conventions](#conventions)
* [List of v4 API Scopes](#v4apiscopes)
* [Old CONNECT API Scopes](#connectscopes)

Scope is a parameter as defined in the OAuth 2.0 standards (RFC6749) to enable a client to specify the scope of the access request. The value of the scope parameter is expressed as a list of space-delimited, case-sensitive strings although some implementations of scope uses a comma-delimited format. Scopes limit access for OAuth2 tokens and do not grant any additional permission beyond that which the client already has.

Scopes apply to applications only. Scopes play a crucial part in defining the ultimate access to a resource by a User.

`User’s Roles/permissions + Claims +  App Scopes.`

## <a name="conventions"></a>Naming Conventions

Concur services follow these standard naming conventions for scopes. 

`<resource>.<sub-resource>.<action>`

`<actions>` are defined by the type of API calls that can be made. These are the known lists of actions Concur honors.

| action     | description |
| ---------- | ----------- |
| `.read` | Read only access (GET) |
| `.write` | Read AND Write access (GET, POST, UPDATE etc) |
| `.writeonly` | Write only access |

## <a name="v4apiscopes"></a>List of v4 API Scopes

These are the list of scopes for the new world v4+ APIs.

| Scopes        | Description |
|---------------|-------------|
| budgetitem.read | Read access to budget data including fiscal calendar. |
| budgetitem.write | Read and write access to budget data including fiscal calendar. |
| company.read | Read company profile |
| company.write | Read and Write company profile |
| creditcardaccount.read | Read credit card account data |
| expense.report.read | Read only access to report resource within the Concur Expense service |
| expense.report.readwrite | Read write access to report resource within the Concur Expense Report service |
| expense.report.delete | Delete only access to report resource within the Concur Expense Report service | 
| fiscalcalendar.read | Access to fiscal calendar |
| fiscalcalendar.write | Read and write access to fiscal calendar. |
| mileage.journey.read | Read-only access to mileage journey resources. |
| mileage.journey.writeonly | Write-only access to mileage journey resources. |
| mileage.vehicle.read | Read-only access to vehicle resources. |
| mileage.vehicle.writeonly | Write-only access to vehicle resources. |
| mileage.rate.read | Read-only access to rate configuration resources. |
| mileage.rate.writeonly | Write-only access to rate configuration resources. |
| openid | Return OPENID Token |
| realtimeingest.location.writeonly | Post user location object upon trip completion | 
| receipts.read | Read receipts and invoices |
| receipts.write | Read and Write receipts and invoices |
| receipts.writeonly | Write only access for receipts and invoices |
| travel.receipts.read | Read requests for travel receipts |
| travel.receipts.write | Read and Write travel receipts | 
| travelallowance.itinerary.read | Read only access to Itinerary data | 
| travelallowance.itinerary.writeonly | Write only access to Itinerary Data | 
| travelallowance.configuration.read | Read only access to Itinerary Configuration data |
| travelallowance.configuration.writeonly | Write only access to Itinerary Configuration data | 
| travelallowance.itineraryresult.read | Read only access to Itinerary Result data |
| travelrequest.write | Read and write Travel Requests |
| user.read | Read user profile |
| user.write | Read and Write user profile |



## <a name="connectscopes"></a>Old CONNECT API Scopes
These are the list of scopes for the existing CONNECT APIs (v1.0 - v3.1)

| Scope     | Description |
|-----------|-------------|
| user_read | Read user profile for old USER APIs |
| ATTEND | Attendee List - Add, Update, or Inactivate Attendees |
| CONFIG | Expense Configuration - Update Expense Feature Configuration |
| CONREQ | Connection Request - Get or update connection requests to travel reward programs |
| ERECPT | E-Receipts Provider - Post receipts and invoices, get matching facts |
| EVS | External Validation - Validate Fields Using External Systems |
| EXPRPT | Expense Report - Add, Approve, or Update Expense Reports |
| CCARD | Expense Report - Add, Approve, or Update Expense Reports |
| BANK | Expense Report - Add, Approve, or Update Expense Reports |
| EXTRCT | Extract - Request Extract of Available Data |
| FISVC | Financial Integration - Migrate transactions from Concur to external systems |
| FOP | Form of Payment - Access and update user form of payment information |
| GHOST | Form of Payment - Access and update user form of payment information |
| IMAGE | Imaging - Add or Retrieve Report and Line Item Images |
| INSGHT | Insights - Additional services marketable to users |
| INVPMT | Payment Request - Create ,Retrieve and Update for Payment Request |
| INVPO | Purchase Orders - Add or Update Purchase Orders |
| INVTV | Invoice - Tax Validation |
| INVVEN | Search, Add, Update or Delete Vendors |
| ITINER | Itinerary - Add or Update Itineraries or Bookings |
| JOBLOG | Job Log - Log Start, Detail, End and Ping |
| LIST | List Items - Add, Update, or Delete List Items |
| MTNG | Meeting - Attendee Travel Booking |
| NOTIF | Notifications - View and manage notifications |
| PAYBAT | Payment Batch - Close Batches and Request Batch Export Files |
| RCTIMG | Receipts - Add or Update Receipt and OCR Images |
| SUPSVC | Supplier Service - Get Supplier Data |
| TAXINV | Digital Tax Invoice - Get or Validate Digital Tax Invoices |
| TRVPRF | Travel Profile - Access and update user travel profile information |
| PASSV | Travel Profile - Access and update user travel profile information |
| COMPD | Travel Profile - Access and update user travel profile information |
| EMERG | Travel Profile - Access and update user travel profile information |
| TSAI | Travel Profile - Access and update user travel profile information |
| TMCSP | Travel Profile - Access and update user travel profile information |
| MEDIC | Travel Profile - Access and update user travel profile information |
| UNUTX | Travel Profile - Access and update user travel profile information |
| TRVPTS | Travel Points - Access User Balances and Post Travel Points Transactions |
| TRVREQ | Travel Request - Add, Update or Delete Travel Requests |
| TWS | Travel Approval - Approve or Reject Travel Itineraries |
| USER | Users- Add or Update User Accounts |
| COMPANY | Companies - Add or Update Company profile |
