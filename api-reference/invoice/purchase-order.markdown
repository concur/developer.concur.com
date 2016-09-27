---
title: Purchase Orders
layout: reference
---

# Purchase Orders
* [Create a new purchase order](#post)
* [Update purchase order line item with receipt information](#put-receipts)
* [Update an existing purchase order](#put)
* [Get an existing purchase order](#get)
* [Schema](#schema)
* [Response schema](#schema-response)
* [Receipt schema](#schema-receipt)
* [Error codes](#error-codes)

## Version
3.0  


## <a name="post"></a>Create a new purchase order  

    POST  /api/v3.0/invoice/purchaseorders  

Create or update a Purchase Order. Batch processing is not available using the Purchase Order API. Please use CES for batch updates.

### <a name="8"></a>Parameters  

|Name | Type | Format | Description
|-----|------|--------|------------
|`purchaseOrder`|-|`body` | The details of the purchase order.

### Input  

[Schema](#schema)

### Response  

[Response schema](#schema-response)

## <a name="put-receipts"></a>Update purchase order line item with receipt information  

    PUT  /api/v3.0/invoice/purchaseorderreceipts

### Parameters  

|Name | Type | Format | Description
|-----|------|--------|------------
|`purchaseOrderReceipt`|-|`body` | Purchase order receipt information.

### Input  

[Receipt schema](#schema-receipt)

### Response  

[Response schema](#schema-response)

## <a name="put"></a>Update an existing purchase order  

    PUT  /api/v3.0/invoice/purchaseorders

### Parameters  

|Name | Type | Format | Description
|-----|------|--------|------------
|`purchaseOrder`|-|`body` | The details of the purchase order.

### Input  

[Schema](#schema)

### Response  

[Response schema](#schema-response)

## <a name="get"></a>Get an existing purchase order  

    GET  /api/v3.0/invoice/purchaseorders/{id}

### Parameters  

|Name | Type | Format | Description
|-----|------|--------|------------
|`id`|`string`|{id}| The identifier for the purchase order.

### Input  

None.

### Response


[Schema](#schema)

## <a name="schema"></a>Schema  

|Name | Type | Format | Description
|-----|------|--------|------------
|`AmountWithoutVat`|`string`|-|PO_VAT_AMOUNT_WO_VAT
|`BillToAddress`|`object`|[`BillToAddress`](#bill-to-address)|**Required** The customer's billing address, which is where the vendor should send the bill.
|`CurrencyCode`|`string`|-|The 3-letter ISO 4217 currency code of the currency that is associated with the purchase order.
|`Custom1 through Custom24`|`string`|-|A value that can be applied to a custom field 1 that is part of the purchase order header form.
|`Description`|`string`|-|A description of the purchase order.
|`DiscountPercentage`|`string`|-|The discount from the vendor, if the discount terms are met.
|`DiscountTerms`|`string`|-|The net discount terms that the vendor offers, when discounts apply.
|`ID`|`string`|-|The unique identifier of the resource.
|`LineItem`|`object`|[`LineItem`](#lineItem)|**Required** The line items in a purchase order.
|`Name`|`string`|-|A name for the purchase order.
|`NeededByDate`|`string`|-|The date by which the purchase order must be fulfilled. Format: YYYY-MM-DD
|`OrderDate`|`string`|-|The date when goods were ordered. Format: YYYY-MM-DD
|`PaymentTerms`|`string`|-|The net payment terms that have been set up with a vendor.
|`PolicyExternalID`|`string`|-|The external identifier of the policy that should be associated with the purchase order. The external ID is a property of the policy in its configuration.
|`PoVendorTaxId`|`string`|-|PO_VENDOR_TAX_ID
|`ProvincialTaxId`|`string`|-|PO_PROVINCIAL_TAX_ID
|`PurchaseOrderNumber`|`string`|-|The purchase order number.
|`RequestedBy`|`string`|-|The person who requests the goods in the purchase order.
|`RequestedDeliveryDate`|`string`|-|The date the purchase order instructed the vendor to deliver the goods. Format YYYY-MM-DD
|`Shipping`|`string`|-|The total shipping cost for the purchase order.
|`ShippingDescription`|`string`|-|A description of how the goods in the purchase order will ship. For example, via FedEx.
|`ShippingMethodKey`|`string`|-|A code that represents the shipping method used by the vendor. Maximum length: 10 characters
|`ShippingTermsKey`|`string`|-|A code that represents the shipping terms that the vendor offers. Maximum length: 10 characters
|`ShipToAddress`|`object`|[`ShipToAddress`](#ship-to-address)|**Required** The customer's shipping address, which is where the vendor should ship the goods.
|`Status`|`string`|-|The current status of the purchase order.
|`Tax`|`string`|-|The total tax for the purchase order.
|`URI`|`string`|-|The URI to the resource.
|`VatAmountOne`|`string`|-|PO_VAT_AMOUNT1
|`VatAmountTwo`|`string`|-|PO_VAT_AMOUNT2
|`VatRateOne`|`string`|-|PO_VAT_RATE1
|`VatRateTwo`|`string`|-|PO_VAT_RATE2
|`VendorAccountNumber`|`string`|-|The vendor account number.
|`VendorAddressCode`|`string`|-|The code that identifies the vendor's remit address for the purchase order.
|`VendorCode`|`string`|-|The code that identifies the vendor for the purchase order.

#### <a name="bill-to-address"></a>BillToAddress  

|Name | Type | Format | Description
|-----|------|--------|------------
|`Address1`|`string`|-|**Required** Address line 1 of the shipping or billing address.
|`Address2`|`string`|-|Address line 2 of the shipping or billing address.
|`Address3`|`string`|-|Address line 3 of the shipping or billing address.
|`City`|`string`|-|**Required** The city of the shipping or billing address.
|`CountryCode`|`string`|-|**Required** The code of the country for the shipping or billing address.
|`ExternalID`|`string`|-|**Required** A unique value supplied by the customer to identify a particular shipping or billing address.
|`Name`|`string`|-|An optional name that can be given to the shipping or billing address.
|`PostalCode`|`string`|-|**Required** The postal code of the shipping or billing address.
|`State`|`string`|-|**Required** The state or province of the shipping or billing address.
|`StateProvince`|`string`|-|**Required** The state or province of the shipping or billing address.

#### <a name="lineItem"></a>LineItem  

|Name | Type | Format | Description
|-----|------|--------|------------
|`AccountCode`|`string`|-|The account code of the line item. A value must be supplied for either ExpenseType or AccountCode, but not both. This field is required if an ExpenseType value is not supplied.
|`Allocation`|`array`|[`Allocation`](#allocation)|A list of the allocations that are associated with the line item. Allocation elements can be repeated within the same line items to represent multiple allocations.
|`AmountWithoutVat`|`string`|-|PO_LI_AMOUNT_WO_VAT
|`CreateDate`|`string`|-|The date the line item was created. Format: YYYY-MM-DD
|`Custom1 through Custom20`|`string`|-|A value that can be applied to a custom field 1 that is part of the purchase order line item form.
|`Description`|`string`|-|A description of the line item.
|`ExpenseType`|`string`|-|The expense type of the line item. A value must be supplied for either ExpenseType or AccountCode, but not both. This field is required if an AccountCode value is not supplied.
|`ExternalID`|`string`|-|A customer-supplied value that uniquely identifies the line item within the purchase order.
|`IsReceiptRequired`|`string`|-|Indicates whether the line item requires a receipt. Format: true or false
|`LineNumber`|`string`|-|**Required** The line item number within the purchase order.
|`Quantity`|`string`|-|The quantity associated with the line item.
|`RequestedBy`|`string`|-|The person who requests the goods in the line item of the purchase order.
|`RequestedDeliveryDate`|`string`|-|The date the line item of the purchase order instructed the vendor to deliver the goods. Format: YYYY-MM-DD
|`SupplierPartID`|`string`|-|Any number that might help to identify the line item. This could be a value such as the vendor's part number or even the manufacturer number.
|`Tax`|`string`|-|Any tax that is associated with the line item.
|`UnitPrice`|`string`|-|The price of each item of the line item.
|`VatAmount`|`string`|-|PO_LI_VAT_AMOUNT
|`VatRate`|`string`|-|PO_LI_VAT_RATE

#### <a name="allocation"></a>Allocation  

|Name | Type | Format | Description
|-----|------|--------|------------
|`Amount`|`string`|-|**Required** The total amount of the allocation.
|`Custom1 through Custom20`|`string`|-|A value that can be applied to a custom field 1 that is part of the allocation form.
|`GrossAmount`|`string`|-|**Required** The allocation gross amount.
|`Percentage`|`string`|-|**Required** The allocation percentage.

#### <a name="ship-to-address"></a>ShipToAddress  

|Name | Type | Format | Description
|-----|------|--------|------------
|`Address1`|`string`|-|**Required** Address line 1 of the shipping or billing address.
|`Address2`|`string`|-|Address line 2 of the shipping or billing address.
|`Address3`|`string`|-|Address line 3 of the shipping or billing address.
|`City`|`string`|-|**Required** The city of the shipping or billing address.
|`CountryCode`|`string`|-|**Required** The code of the country for the shipping or billing address.
|`ExternalID`|`string`|-|**Required** A unique value supplied by the customer to identify a particular shipping or billing address.
|`Name`|`string`|-|An optional name that can be given to the shipping or billing address.
|`PostalCode`|`string`|-|**Required** The postal code of the shipping or billing address.
|`State`|`string`|-|**Required** The state or province of the shipping or billing address.
|`StateProvince`|`string`|-|**Required** The state or province of the shipping or billing address.

## <a name="schema-response"></a>Response schema  

|Name | Type | Format | Description
|-----|------|--------|------------
|`ErrorCode`|`string`|-|A code that indicates why the purchase order was not processed successfully.
|`ErrorMessage`|`string`|-|A description of the error.
|`FieldCode`|`string`|-|A code that indicates which field caused an issue. This code typically appears only when a field is being validated against a field of a form type. Format: LEVEL CODE. The possible levels are: Header, ShipTo, BillTo, LineItem, Allocation.
|`LineItemExternalID`|`string`|-|The external ID of a line item that caused an error. If the error is related to an allocation, this field indicates the external ID of the line item that the allocation is associated with, and also indicates the allocation that caused of the error.
|`Message`|`string`|-|
|`PurchaseOrderNumber`|`string`|-|The purchase order number.
|`Status`|`string`|-|The result of processing the purchase order. Format: SUCCESS or FAILURE

## <a name="schema-receipt"></a>Receipt schema  

|Name | Type | Format | Description
|-----|------|--------|------------
|`IsReceived`|`string`|-|**Required** Indicates whether the line item was received.
|`LineItemExternalID	`|`string`|-|**Required** A customer-supplied value that uniquely identifies the line item within the purchase order.
|`PurchaseOrderNumber`|`string`|-|**Required** The purchase order number.
|`ReceivedDate`|`string`|-|The date the line item was received. Format: YYYY-MM-DD
|`ReceivedQuantity`|`string`|-|The number of items that were received.

## <a name="error-codes"></a>Error codes  

The web service will not return a 4xx HTTP response code for a batch operation even when every item in the batch failed to be created, updated or deleted. The client must inspect the response to look for warnings or errors with individual batch items.

|Code | Description
|-----|--------------
|1000|The PO number is missing or invalid.
|2000|There was no vendor found for the supplied Vendor Code and Vendor Address Code.
|3000|The Currency Code is missing or invalid.
|4000|There was no policy found matching the supplied External Id.
|4001|The policy does not support purchase orders.
|4002|The policy cannot be changed on the purchase order.
|5000|The purchase order does not contain any line items.
|5001|The line item must contain expense type or account code, but not both.
|5002|The line item expense type is invalid.
|5003|The line item account code is invalid.
|5004|The line item tax and unit price must both match positive or negative.
|5500|The line item contains an allocation, but no allocation form is defined.
|5501|The line item allocation amounts exceed the line item total.
|5502|The distribution amounts for a line item must match the line item amount positive or negative.
|5503|The distribution amounts for a line item cannot be zero.
|5600|The external id for the line item is not unique across the purchase order.
|6000|The Ship To Address is missing or invalid.
|6001|The Bill To Address is missing or invalid.
|8000|A required field is missing.
|8001|A field’s value exceeds the maximum length allowed.
|8002|A field’s value is not the correct data type.
|8003|A field’s value is an invalid list item.
|8004|A field’s value is an invalid connected list item.
|8005|The Country Code is missing or invalid.
|8006|A value was supplied for a field that is not part of the form.
|9999|An unexpected error occurred.
