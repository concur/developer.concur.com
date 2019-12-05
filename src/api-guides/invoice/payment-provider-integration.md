---
title: Payment Provider Integration
layout: reference
---

> Note: The scopes related to this documentation are currently limited to Early Access developers at this time.  Once the Early Access phase has been completed, all developers that are interested in pursuing this integration will be given the scope in their Development app.

* [Integration](#integration)
* [Quick Connect](#quick-connect)
* [Company Profile](#profile)
* [Topics to complete prior to obtaining invoices](#Topics-to-complete-prior-to-obtaining-invoices)
* [Update Vendor Payment Method field](#Update-Vendor-Payment-Method-field)
* [Overview, Scopes, and Obtaining Invoices pending payment](#Overview-Scopes-and-Obtaining-Invoices-pending-payment)
* [Discounts on invoices](#Discounts)
* [Updating a payment with status](#Updating-a-payment-with-status)
* [Learn](#learn)

The Payment Provider App Category streamlines the Invoice Payment process for SAP-Concur customers. The Payment Provider Partner's certified app will obtain Invoice data from our customers' Concur site by using the "Quick Connect" process and executing their app using Concur's Invoice APIs. To be certified, the Partner must support both Editions of SAP-Concur Invoice: Standard Edition and Professional Edition.

## <a name="integration"></a>Integration

### <a name="quick-connect"></a>Quick Connect

[Quick Connect Scope for Enterprise Apps](./quick-connect-scope-for-enterprise-apps.html)

**Quick Connect** describes the process customers use to connect their Concur site with an App Center Partner's Enterprise application. See the separate Quick Connect scope document for details to guide you through the development of this required piece to your certified application.

### <a name="profile"></a>Company Profile

[Profile Company API v1](/api-reference/profile/v1.company.html#get)

### <a name="Topics-to-complete-prior-to-obtaining-invoices"></a>Topics to complete prior to obtaining invoices

**These topics should be completed prior to obtaining Invoices pending payment:**

#### Topic 1: Update the field called, "Payment Method Type" within the SAP-Concur Invoice Vendor record

In order to pay a customer's invoices, the SAP-Concur Invoice Vendor record must have the value of **PAYPVD** populated within the "Payment Method Type" field.  This can be populated in 3 ways, one of which is via API.  The Partner and customer need to agree who will be responsible for updating the Vendors initially and on an on-going basis. Here are the methods the Vendor (aka Supplier) record can be updated:

Option|Technique|Owner responsible for update
---|---|---
Option 1|File import-On-Demand Import via an Excel template within the SAP-Concur Invoice product|Customer completes
Option 2|File import-Scheduled Import via a csv file|Customer completes
Option 3|App integration|Customer and Partner need to coordinate since Vendor master data most likely resides in their ERP

### <a name="Update-Vendor-Payment-Method-field"></a>Update Vendor Payment Method field

[Vendor Update API v3](/api-reference/invoice/v3.vendor.html#put)

#### Topic 2: Customer ensures the Vendor Contact Email addresses exist within the SAP-Concur Invoice Vendor record for the Vendors that the Partner will pay

Confirm that the customer adminsitrator has created a Concur Audit Rule to require the Vendor (Supplier) email address has been populated for those Vendor invoices that will be paid via this integration. The Customer can take the following steps to create the Audit Rule:

#### Audit Rule step 1:

1. Navigate to the Administration menu, then Invoice, then Audit Rules.
1. Click New
1. Enter the information as appropriate (see below)
1. Click Next

```
Name:         Vendor Supplier Contact Email
Event:        Payment Request Submit
Editable By:  This depends on the customer configuration
Applies To:   This depends on the customer configuration
Active:       Yes
```

#### Audit Rule step 2: Create Condition

```
Data Object:  Vendor Remittance Address
Field:        Contact Email
Operator:     Is Blank
Operator:     And
Data Object:  Request
Field:        Pay Method Type
Operator:     Equal
Value:        Payment Provider
```

Click Next

#### Audit Rule step 3:

> The Exception Level can be adjusted if desired.  99 is a hard stop rule.

Click New

```
Exception Code:   EMAIL
Exception Level:  99
Message:          The Vendor Email Address is required for all invoices that are from Vendors that will be paid by the Partner.
Editable By:      This depends on the customer configuration
```

### <a name="Overview-Scopes-and-Obtaining-Invoices-pending-payment"></a>Overview Scopes and Obtaining Invoices pending payment

[Overview, Scopes, an Obtaining Invoices pending payment](/api-reference/invoice/v1.invoice-pay.html)

### <a name="Discounts"></a>Discounts on invoices

[Payment Request Reference](/api-reference/invoice/v3.payment-request.html#get) and [Payment Request Explorer](/api-explorer/v3-0/PaymentRequest.html)

If the customer wants invoices paid early in order to take advantage of the Vendor's discount terms, the customer and partner will need to work together. The customer will need to configure search queries within the administrative tool called, "Invoice Processor". The search parameters will based on invoice due date and Payment Method Type field.  The search query parameters need to include enough days to allow the customer and partner to meet the invoice terms. Once the customer administrator final-approves those invoices, the Partner will be able to obtain the invoices that are pending payment. In order to obtain the discount terms, the Partner will have to use the GET Payment Request API using the invoice ID from the GET Payments response.

> Note: the customer and partner need to discuss how the customer manages the discounts within the SAP-Concur Invoice product. The customer may elect to adjust the invoice amount field and then add credited line items within the invoice to reflect the discount.  In this case, the partner will **not** need to compute the discount and will just use the value in the Invoice Amount field.

### <a name="Updating-a-payment-with-status"></a>Updating a payment with status

[Updating a payment with status](/api-reference/invoice/v4.invoice-pay.html#schema-payment-update)

## <a name="learn"></a>Learn

Use the following resources to get familiar with the Concur product and then submit expense reports or invoices in your own sandbox. This will better position you to conduct end-to-end testing and be able to correlate a User's experience to what you obtain via the APIs.

* **Training Toolkit** at [http://www.concurtraining.com/](http://www.concurtraining.com/) - These resources help you learn the Concur product basics, administration and reporting.
