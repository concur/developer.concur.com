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
`AmountWithoutVat`	|	`string`	|	-	|	The net amount of the invoice (excluding VAT).
`BuyerCostCenter`	|	`string`	|	-	|	The company defined center responsible for the Payment Request.
`CheckNumber`	|	`string`	|	-	|	Check number of the payment made to the vendor.
`CompanyBillToAddressCode`	|	`string`	|	-	|	The code which identifies the company location to which the vendor billed the invoice.
`CompanyShipToAddressCode`	|	`string`	|	-	|	The code which identifies the company location to which the vendor shipped items listed in the invoice.
`CountryCode`	|	`string`	|	-	|	**Required**The country code.
`CurrencyCode`	|	`string`	|	-	|	The 3-letter ISO 4217 currency code for the expense report currency. Examples: USD - US dollars; BRL - Brazilian real; CAD - Canadian dollar; CHF - Swiss franc; EUR - Euro; GBO - Pound sterling; HKD - Hong Kong dollar; INR - Indian rupee; MXN - Mexican peso; NOK - Norwegian krone; SEK - Swedish krona.
`Custom01` through `Custom24`	|	`string`	|	-	|	The details from the Custom fields. These may not have data, depending on configuration.
`DataSource`	|	`string`	|	-	|	A code which indicates the method used to created the Payment Request. Use GET /invoice/localizeddata to translate the code into text.
`DeliverySlipNumber`	|	`string`	|	-	|	The delivery slip number associated with receiving receipt.
`Description`	|	`string`	|	-	|	User entered description of the Payment Request.
`DiscountPercentage`	|	`string`	|	-	|	The discount from the supplier if the discount terms are met.
`DiscountTerms`	|	`string`	|	-	|	The NET discount terms with a supplier when discounts apply.
`EmployeeEmailAddress`	|	`string`	|	-	|	The email address of the employee to whom the request should be assigned. Not evaluated if EmployeeLoginId or EmployeeId match an employee. This value isrequired if none of the following are provided: LedgerCode, EmployeeLoginId, EmployeeId; PurchaseOrderNumber; ExternalPolicyId.
`EmployeeId`	|	`string`	|	-	|	The company ID of the employee to whom the request should be assigned. Has precedence over EmployeeEmail; not evaluated if EmployeeLoginId matches an employee. This value is required if none of the following are provided: LedgerCode, EmployeeLoginId; EmployeeEmail; PurchaseOrderNumber; ExternalPolicyId.
`EmployeeLoginId`	|	`string`	|	-	|	The login ID of the employee to whom the request should be assigned. Has precedence over EmployeeId and EmployeeEmail. This value is required if none of the following are provided: LedgerCode, EmployeeId; EmployeeEmail; PurchaseOrderNumber; ExternalPolicyId.
`ExternalPolicyId`	|	`string`	|	-	|	The external policy ID of the Payment Request. This value is required if none of the following are provided: LedgerCode, EmployeeLoginId, EmployeeId; EmployeeEmail; PurchaseOrderNumber.
`InvoiceAmount`	|	`string`	|	-	|	**Required**User-entered value representing the total invoice amount, used to calculate amount remaining on the line item page.
`InvoiceDate`	|	`string`	|	-	|	The date the Vendor issued the Invoice.
`InvoiceNumber`	|	`string`	|	-	|	The Invoice Number from the vendor for the Payment Request.
`InvoiceReceivedDate`	|	`string`	|	-	|	The date on which the invoice was received.
`IsEmergencyCheckRun`	|	`string`	|	-	|	Is an emergency check run required(Y/N).
`IsInvoiceConfirmed`	|	`string`	|	-	|	Indicates if the Payment Request Invoice is confirmed or in a different status (true/false).
`LedgerCode`	|	`string`	|	-	|	`A code which indicates which company journal the Payment Request is assigned to. Use GET /invoice/localizeddata to obtain valid codes. This value is required if none of the following are provided: EmployeeLoginId; EmployeeId; EmployeeEmail; PurchaseOrderNumber; ExternalPolicyId.
`LineItems`	|	`Array[LineItem]`	|	-	|	The details of the Core Payment Request Line Item Identity Fields.
`Name`	|	`string`	|	-	|	**Required**The Payment Request Name.
`NotesToVendor`	|	`string`	|	-	|	Information from the customer to the vendor for special requests or handling for the ordered good or service.
`OB10BuyerId`	|	`string`	|	-	|	A unique buyer account on the OB10 network.
`OB10TransactionId`	|	`string`	|	-	|	Unique Identifier for the PR transaction (generated by OB10).
`OrgUnit01`	|	`string`	|	-	|	The details from the Organization Unit fields. These may not have data, depending on configuration.
`OrgUnit02`	|	`string`	|	-	|	The details from the Organization Unit fields. These may not have data, depending on configuration.
`OrgUnit03`	|	`string`	|	-	|	The details from the Organization Unit fields. These may not have data, depending on configuration.
`OrgUnit04`	|	`string`	|	-	|	The details from the Organization Unit fields. These may not have data, depending on configuration.
`OrgUnit05`	|	`string`	|	-	|	The details from the Organization Unit fields. These may not have data, depending on configuration.
`OrgUnit06`	|	`string`	|	-	|	The details from the Organization Unit fields. These may not have data, depending on configuration.
`PaymentAdjustmentNotes`	|	`string`	|	-	|	Notes to the vendor regarding the amount paid (underpayment due to damages, for example).
`PaymentAmount`	|	`string`	|	-	|	`Represents the amount of the payment that will be/has been made for the Invoice.
`PaymentDueDate`	|	`string`	|	-	|	The date the vendor needs to be paid by.
`PaymentTermsDays`	|	`string`	|	-	|	This number, along with type of payment terms (example: NET), determine when the invoice is expected to be paid.
`ProvincialTaxId`	|	`string`	|	-	|	The Vendor Provincial Tax ID.
`PurchaseOrderId`	|	`string`	|	-	|	The ID of the Purchase Order to which the Payment Request should be matched. This value isrequired if none of the following are provided: LedgerCode, EmployeeLoginId, EmployeeId; EmployeeEmail; ExternalPolicyId.
`ReceiptConfirmationType`	|	`string`	|	-	|	A code which indicates the receipt confirmation type for this Payment Request (Invoice Confirmation, for example). Use GET /invoice/localizeddata to translate the code into text.
`ShippingAmount`	|	`string`	|	-	|	The value for the Shipping Amount header field.
`TaxAmount`	|	`string`	|	-	|	The value for the Tax Amount header field.
`VatAmountOne`	|	`string`	|	-	|	The amount of VAT included in the invoice total. (First of two VAT amount fields available..
`VatAmountTwo`	|	`string`	|	-	|	The amount of VAT included in the invoice total. (Second of two VAT amount fields available..
`VatRateOne`	|	`string`	|	-	|	The VAT rate applied to the net invoice total. (Should relate to the first VAT amount field..
`VatRateTwo`	|	`string`	|	-	|	The VAT rate applied to the net invoice total. (Should relate to the second VAT amount field..
`VendorRemitToIdentifier`	|	`VendorIdentifier`	|	-	|	**Required**Used to identify the vendor location for payment remittance. At a minimum, the VendorCode or the combination of (VendorName, Address1 and PostalCode) are required. Use of as many fields as possible is encouraged to ensure a single vendor can be identified. If more than one vendor matches the information provided, the Payment Request creation attempt will fail.
`VendorShipFromAddressCode`	|	`string`	|	-	|	The code which identifies the location from which the vendor shipped items listed in the invoice.
`VendorTaxId`	|	`string`	|	-	|	The Vendor Tax ID.


### LineItem

Name | Type | Format | Description
-----|------|--------|------------
`Allocations`	|	`Array[Allocation]`	|	-	|	The details of the Payment Request Allocation Core Identity Fields.
`AmountWithoutVat`	|	`string`	|	-	|	The net amount of the line item (excluding VAT).
`Custom01` through `Custom20`	|	`string`	|	-	|	The details from the Custom fields. These may not have data, depending on configuration.
`Description`	|	`string`	|	-	|	Brief overview of the good or service ordered.
`ExpenseTypeCode`	|	`string`	|	-	|	A code which indicates the Expense Type for the Line Item.
`ItemCode`	|	`string`	|	-	|	Represents the item code (the unique code a vendor assigns to a good or code a vendor assigns to a good or service to identify it).
`PurchaseOrderNumber`	|	`string`	|	-	|	Purchase Order that is associated to the Line Item .
`Quantity`	|	`string`	|	-	|	Total number of goods or services ordered.
`ShipFromPostalCode`	|	`string`	|	-	|	The postal code the good or service was shipped from.
`ShipToPostalCode`	|	`string`	|	-	|	The postal code the good or service will be shipped to.
`SupplierPartId`	|	`string`	|	-	|	The unique identifier provided by the supplier that is associated with the good or service.
`Tax`	|	`string`	|	-	|	The tax associated with the line item.
`TotalPrice`	|	`string`	|	-	|	The total amount of the line item.
`UnitOfMeasure`	|	`string`	|	-	|	The code for the measurement unit used to quantify the good or service. Use GET /invoice/localizeddata to look up codes and descriptions.
`UnitPrice`	|	`string`	|	-	|	The cost for a single unit of the line item good or service.
`VatAmount`	|	`string`	|	-	|	The amount of VAT included in the line item total.
`VatRate`	|	`string`	|	-	|	The VAT rate applied to the net line item total.

### Allocation

Name | Type | Format | Description
-----|------|--------|------------
`Custom01` through `Custom07`	|	`string`	|	-	|	The details from the Custom fields. These may not have data, depending on configuration.
`Custom08`	|	`string`	|	-	|	A value that can be applied to a custom field 8 that is part of the allocation form.
`Custom09`	|	`string`	|	-	|	A value that can be applied to a custom field 9 that is part of the allocation form.
`Custom10`	|	`string`	|	-	|	A value that can be applied to a custom field 10 that is part of the allocation form.
`Custom11` through `Custom20`	|	`string`	|	-	|	The details from the Custom fields. These may not have data, depending on configuration.
`Percentage`	|	`string`	|	-	|	**Required**The percentage of the Request Line Item that the individual allocation record. All Allocations associated to a given Line Item should add up to 100.

### VendorRemitToIdentifier

Name | Type | Format | Description
-----|------|--------|------------
`Address1`	|	`string`	|	-	|	Line 1 of the street address.
`AddressCode`	|	`string`	|	-	|	The code which identifies a particular vendor location.
`Name`	|	`string`	|	-	|	The name of the vendor.
`PostalCode`	|	`string`	|	-	|	The postal / zip code.
`VendorCode`	|	`string`	|	-	|	The code which identifies a particular vendor.
