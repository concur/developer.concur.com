---
title: Payment Request
layout: reference
---


# Payment Request
* [Retrieve a Payment Request](#get)
* [Create a New Payment Request](#post)
* [Update a Payment Request](#put)
* [Schema](#schema)


## Version
3.0  


## <a name="get"></a>Retrieve a Payment Request

    GET  /api/v3.0/invoice/paymentrequest/{id}

        
### Parameters

Name | Type | Format | Description
-----|------|--------|------------			
id	|	`string`	|	path	|	**Required** Payment Request ID.


## <a name="post"></a>Create a new Payment Request

    POST  /api/v3.0/invoice/paymentrequest


### Parameters

Name | Type | Format | Description
-----|------|--------|------------
`paymentrequest`	|	-	|	`body`	|	**Required** An XML or JSON representation of a Payment Request


## <a name="put"></a>Update a Payment Request

    PUT  /api/v3.0/invoice/paymentrequest


### Parameters

Name | Type | Format | Description
-----|------|--------|------------
`paymentrequest`	|	-	|	`body`	|	**Required** An XML or JSON representation of a Payment Request




## <a name="schema"></a>Schema


### Payment Request

Name | Type | Format | Description
-----|------|--------|------------
`AmountWithoutVat`		|	`string`	|	-	|	The net amount of the invoice (excluding VAT).
`ApprovalStatus`		|	`string`	|	-	|	**Required** A code which indicates the Approval Status of the payment request.
`ApprovedByDelegate`		|	`string`	|	-	|	**Required** Was the Payment Request approved by a Delegate (true/false).
`AssignedByUsername`		|	`boolean`	|	-	|	Username of the assigning employee.
`AssignedDate`		|	`string`	|	-	|	The date the Payment Request was assigned to the current owner.
`BuyerCostCenter`		|	`string`	|	-	|	The company defined center responsible for the Payment Request.
`CalculatedAmount`		|	`string`	|	-	|	The sum of all Line Item Amounts plus Shipping Amount and Tax Amount for the payment request.
`CheckNumber`		|	`string`	|	-	|	Check number of the payment made to the vendor.
`CompanyBillToAddress`		|	`CompanyAddress`	|	-	|	The customer's billing address, which is where the vendor should bill the customer.
`CompanyShipToAddress`		|	`CompanyAddress`	|	-	|	The customer's shipping address, which is where the vendor should ship the goods.
`CountryCode`		|	`string`	|	-	|	The country code.
`CreatedByUsername`		|	`string`	|	-	|	Username of the Payment Request creator.
`CurrencyCode`		|	`string`	|	-	|	The 3-letter ISO 4217 currency code for the expense report currency. Examples: USD - US dollars; BRL - Brazilian real; CAD - Canadian dollar; CHF - Swiss franc; EUR - Euro; GBO - Pound sterling; HKD - Hong Kong dollar; INR - Indian rupee; MXN - Mexican peso; NOK - Norwegian krone; SEK - Swedish krona.
`Custom01 through Custom24`		|	`string`	|	-	|	The details from the Custom fields. These may not have data, depending on configuration.
`DataSource`		|	`string`	|	-	|	**Required** A code which indicates the method used to created the Payment Request. Use GET /invoice/localizeddata to translate the code into text.
`DeletedDate`		|	`string`	|	-	|	The date the user deleted the payment request.
`Description`		|	`string`	|	-	|	User entered description of the Payment Request.
`DiscountPercentage`		|	`string`	|	-	|	The discount from the supplier if the discount terms are met.
`DiscountTerms`		|	`string`	|	-	|	The NET discount terms with a supplier when discounts apply.
`EmployeeName`		|	`string`	|	-	|	**Required** The owner of the Payment Request.
`ExternalPolicyId`		|	`string`	|	-	|	**Required** The external policy ID.
`ExtractDate`		|	`string`	|	-	|	The date the payment request was extracted, in order to import it into an accounts payable system and generate a payment.
`FirstApprovalDate`		|	`string`	|	-	|	The date the payment request received its first approval in its approval workflow.
`FirstSubmitDate`		|	`string`	|	-	|	The date the payment request was first submitted.
`ID`		|	`string`	|	-	|	The unique identifier of the resource.
`InvoiceAmount`		|	`string`	|	-	|	User-entered value representing the total invoice amount, used to calculate amount remaining on the line item page.
`InvoiceDate`		|	`string`	|	-	|	The date the Vendor issued the Invoice.
`InvoiceNumber`		|	`string`	|	-	|	**Required** The Invoice Number from the vendor for the Payment Request.
`InvoiceReceivedDate`		|	`string`	|	-	|	The date on which the invoice was received.
`IsAssigned`		|	`string`	|	-	|	**Required** Is the Payment Request assigned (true/false).
`IsInvoiceConfirmed`		|	`string`	|	-	|	**Required** Indicates if the Payment Request Invoice is confirmed or in a different status (true/false).
`IsPaymentRequestDeleted`		|	`string`	|	-	|	**Required** Is the Payment Request deleted (true/false).
`IsPaymentRequestDuplicate`		|	`string`	|	-	|	**Required** Is the Payment Request identified as a duplicate of another existing request (true/false).
`IsTestTransaction`		|	`string`	|	-	|	**Required** Is the Payment Request a test transaction (true/false).
`LastSubmitDate`		|	`string`	|	-	|	The date the payment request was last submitted.
`LedgerCode`		|	`string`	|	-	|	**Required** A code which indicates which company journal the Payment Request is assigned to. Use GET /invoice/localizeddata to translate the code into text.
`LineItems`		|	`LineItemsCollection`	|	-	|	The details of the Core Payment Request Line Item Identity Fields.
`LineItemTotalAmount`		|	`string`	|	-	|	The sum of all Line Item Amounts.
`LineItemVatAmount`		|	`string`	|	-	|	The sum amount of VAT from all line items in the request.
`Name`		|	`string`	|	-	|	**Required** The Payment Request Name.
`NotesToVendor`		|	`string`	|	-	|	Information from the customer to the vendor for special requests or handling for the ordered good or service.
`OB10BuyerId`		|	`string`	|	-	|	A unique buyer account on the OB10 network.
`OB10TransactionId`		|	`string`	|	-	|	Unique Identifier for the PR transaction (generated by OB10).
`OrgUnit01 through OrgUnit06`		|	`string`	|	-	|	The details from the Organization Unit fields. These may not have data, depending on configuration.
`PaidAmount`		|	`string`	|	-	|	Represents the amount of the payment that will be/has been made for the Invoice.
`PaidDate`		|	`string`	|	-	|	The date payment was made to the vendor.
`PaymentAdjustmentNotes`		|	`string`	|	-	|	Notes to the vendor regarding the amount paid (underpayment due to damages, for example).
`PaymentDueDate`		|	`string`	|	-	|	The date the vendor needs to be paid by.
`PaymentMethod`		|	`string`	|	-	|	A code which indicates the method used to reimburse the vendor for the Payment Request. Use GET /invoice/localizeddata to translate the code into text.
`PaymentRequestCreatedByTestUser`		|	`string`	|	-	|	Was the Payment Request created by a Test User (true/false).
`PaymentRequestDeletedBy`		|	`string`	|	-	|	The user who deleted the Payment Request.
`PaymentStatus`		|	`string`	|	-	|	**Required** A code which indicates the Payment Status of the payment request.
`PaymentTermsDays`		|	`string`	|	-	|	This number, along with type of payment terms (example: NET), determine when the invoice is expected to be paid.
`ProvincialTaxId`		|	`string`	|	-	|	The Vendor Provincial Tax ID.
`ReceiptConfirmationType`		|	`string`	|	-	|	**Required** A code which indicates the receipt confirmation type for this Payment Request (Invoice Confirmation, for example). Use GET /invoice/localizeddata to translate the code into text.
`ShippingAmount`		|	`string`	|	-	|	The value for the Shipping Amount header field.
`SubmittedByDelegate`		|	`string`	|	-	|	**Required** Was the Payment Request created by a Delegate (true/false).
`TaxAmount`		|	`string`	|	-	|	The value for the Tax Amount header field.
`TaxCode`		|	`string`	|	-	|	The Tax Code assigned for the Request, based on the Tax Setting.
`TotalApprovedAmount`		|	`string`	|	-	|	The total amount that has been approved.
`URI`		|	`string`	|	-	|	The URI to the resource.
`UserCreationDate`		|	`string`	|	-	|	The date the Invoice user first saved the payment request.
`VatAmountOne`		|	`string`	|	-	|	The amount of VAT included in the invoice total. (First of two VAT amount fields available.)
`VatAmountTwo`		|	`string`	|	-	|	The amount of VAT included in the invoice total. (Second of two VAT amount fields available.)
`VatRateOne`		|	`string`	|	-	|	The VAT rate applied to the net invoice total. (Should relate to the first VAT amount field.)
`VatRateTwo`		|	`string`	|	-	|	The VAT rate applied to the net invoice total. (Should relate to the second VAT amount field.)
`VendorRemitAddress`		|	`VendorAddress`	|	-	|	**Required** The vendor's billing address, which is where the customer sends the payment to.
`VendorShipFromAddress`		|	`VendorAddress`	|	-	|	The vendor's shipping address, which is where the items listed in the invoice are shipped from.
`VendorTaxId`		|	`string`	|	-	|	The Vendor Tax ID.
`WorkflowCompleteDate`		|	`string`	|	-	|	The date the last step in the workflow process completed.


### Company Address

Name | Type | Format | Description
-----|------|--------|------------
`Address1`		|	`string`	|	-	|	**Required** Line 1 of the street address.
`Address2`		|	`string`	|	-	|	**Required** Line 2 of the street address
`Address3`		|	`string`	|	-	|	**Required** Line 3 of the street address
`City`		|	`string`	|	-	|	**Required** The name of the city.
`CountryCode`		|	`string`	|	-	|	**Required** The country code.
`Name`		|	`string`	|	-	|	**Required** The name given to the company location.
`PostalCode`		|	`string`	|	-	|	**Required** The postal / zip code.
`State`		|	`string`	|	-	|	**Required** The state code.


### Line Items

Name | Type | Format | Description
-----|------|--------|------------
`LineItem`		|	`Array`	|	[Payment Request Line Item](#paymentrequestlineitem)	|	The details of the Core Payment Request Line Item Identity Fields.


###<a name="paymentrequestlineitem"></a>Payment Request Line Item

Name | Type | Format | Description
-----|------|--------|------------
`Allocations`		|	`AllocationsCollection`	|	-	|	The details of the Payment Request Allocation Core Identity Fields.
`AllocationStatus`		|	`string`	|	-	|	**Required** Current amount of allocation performed on the Request Line Item (accepted values: None, Partial, Full).
`AmountWithoutVat`		|	`string`	|	-	|	The net amount of the line item (excluding VAT).
`ApprovedLineItemAmount`		|	`string`	|	-	|	The approved amount of the line item.
`Custom01 through Custom20`		|	`string`	|	-	|	The details from the Custom fields. These may not have data, depending on configuration.
`Description`		|	`string`	|	-	|	Brief overview of the good or service ordered.
`ExpenseTypeCode`		|	`string`	|	-	|	**Required** A code which indicates the Expense Type for the Line Item.
`IsMatched`		|	`string`	|	-	|	Indication that the Payment Request Line Item is associated to a Purchase Order Line Item (this is a true/false).
`IsTestUser`		|	`string`	|	-	|	Indication that the Allocation record was created by a test user (this is a true/false).
`ItemCode`		|	`string`	|	-	|	Represents the item code (the unique code a vendor assigns to a good or code a vendor assigns to a good or service to identify it).
`LineItemId`		|	`string`	|	-	|	**Required** The identifier of the payment request line item. The ID is only guaranteed to be unique for a given payment request.
`MatchedPurchaseOrderId`		|	`string`	|	-	|	The identifier of the purchase order containing the line item to which the payment request line item is matched (if any).
`MatchedPurchaseOrderLineItemId`		|	`string`	|	-	|	The identifier of the purchase order line item to which the payment request line item is matched (if any).
`Quantity`		|	`string`	|	-	|	Total number of goods or services ordered.
`RequestedLineItemAmount`		|	`string`	|	-	|	The requested amount of the line item.
`RequestLineItemNumber`		|	`string`	|	-	|	**Required** The relative location of the Line Item in relation to other Line Items in the Payment Request.
`ShipFromPostalCode`		|	`string`	|	-	|	The zip code the good or service was shipped from.
`ShipToPostalCode`		|	`string`	|	-	|	The zip code the good or service will be shipped to.
`SupplierPartId`		|	`string`	|	-	|	The unique identifier provided by the supplier that is associated with the good or service.
`Tax`		|	`string`	|	-	|	The tax associated with the line item.
`TaxCode`		|	`string`	|	-	|	The Tax Code assigned for the Line Item, based on the Tax Setting.
`TotalPrice`		|	`string`	|	-	|	**Required** The total amount of the line item.
`UnitOfMeasure`		|	`string`	|	-	|	The code for the measurement unit used to quantify the good or service. Use GET /invoice/localizeddata to look up codes and descriptions.
`UnitPrice`		|	`string`	|	-	|	**Required** The cost for a single unit of the line item good or service.
`VatAmount`		|	`string`	|	-	|	The amount of VAT included in the line item total.
`VatRate`		|	`string`	|	-	|	The VAT rate applied to the net line item total.

### Allocations

Name | Type | Format | Description
-----|------|--------|------------
`Allocation`	|	`Array`	|[Allocation](#allocation)|	The details of the Payment Request Allocation Core Identity Fields.


###<a name="allocation"></a>Allocation

Name | Type | Format | Description
-----|------|--------|------------				
`AllocationAccountCode`		|	`string`	|	-	|	The Account Code that the allocation will be assigned to.
`Custom01 through Custom20`		|	`string`	|	-	|	The details from the Custom fields. These may not have data, depending on configuration.
`IsTestUser`		|	`string`	|	-	|	Indication that the Allocation record was created by a test user (this is a true/false).
`Percentage`		|	`string`	|	-	|	**Required** The percentage of the Request Line Item that the individual allocation record. All Allocations associated to a given Line Item should add up to 100.




### Vendor Address

Name | Type | Format | Description
-----|------|--------|------------
`Address1`		|	`string`	|	-	|	**Required** Line 1 of the street address.
`Address2`		|	`string`	|	-	|	**Required** Line 2 of the street address
`Address3`		|	`string`	|	-	|	**Required** Line 3 of the street address
`City`		|	`string`	|	-	|	**Required** The name of the city.
`CountryCode`		|	`string`	|	-	|	**Required** The country code.
`DiscountTerms`		|	`string`	|	-	|	**Required** The NET discount terms with a supplier when discounts apply.
`Name`		|	`string`	|	-	|	**Required** The name of the vendor.
`PostalCode`		|	`string`	|	-	|	**Required** The postal / zip code.
`State`		|	`string`	|	-	|	**Required** The state code.


