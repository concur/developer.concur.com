---
title: Sales Tax Validation
layout: reference
---

# Sales Tax Validation
* [Get invoices for calculating tax](#get)
* [Update invoices with the calcuated tax amount and tax rate](#put)
* [Schema](#schema)
* [Status schema](#schema-status)

## Version
3.0  


## <a name="get"></a>Get invoices for calculating tax

    GET  /api/v3.0/invoice/salestaxvalidationrequest

### Parameters  

|Name | Type | Format | Description
|-----|------|--------|------------
|`offset`|`string`|`query`|The starting point of the next set of results, after the limit specified in the limit field has been reached.
|`limit`|`Int32`|`query`|The number of invoices to retrieve. Maximum value: 1000
|`modifiedafter`|`string`|`query`|A parameter that can be used to limit the results to invoices modified after the specified date.

### Input  

None.

### Response  

[Schema](#schema)

## <a name="put"></a>Update invoices with a calcuated tax amount and tax rate  

    PUT  /api/v3.0/invoice/salestaxvalidationrequest

### Parameters  

|Name | Type | Format | Description
|-----|------|--------|------------
|`invoice`|-|`body`|The tax information for the invoice that is to be updated.

### Input  

[Invoice](#invoice)

### Response  

[Status schema](#schema-status)

##<a name="schema"></a>Invoices schema  

###Invoices  

| Name | Type | Format | Description|
|-----|------|--------|------------|
| `Items`|`array`|`Invoice`|The result collection.|
| `NextPage`|`string`|-|The URI of the next page of results, if any.|
| `TotalCount`|`Int32`|-|

###<a name="invoice"></a>Invoice  

|Name | Type | Format | Description
|-----|------|--------|------------
|`BillToAddress`|`object`|[`BillToAddress`](#billToAddress)|
|`CalculatedTaxAmount`|`string`|-|The calculated tax amount for the invoice.
|`CalculatedTaxRate`|`string`|-|The calculated tax rate for the invoice.
|`Comments`|`string`|-|Comments for the invoice.
|`CountryCode`|`string`|-|The country code for the line item.
|`CurrencyCode`|`string`|-|The 3-letter ISO 4217 currency code for the invoice currency. For example, USD or CAD.
|`ID`|`string`|-|The unique identifier of the resource.
|`InvoiceAmount`|`string`|-|The invoice amount (the cost of the purchased items).
|`InvoiceDate`|`string`|-|The invoice date.
|`LineItem`|`array`|[`LineItem`](#LineItem)|The line items associated with the invoice.
|`PurchaseOrderNumber`|`string`|-|The Purchase Order number (if available) associated to the Payment Request.
|`ShippingAmount`|`string`|-|The shipping amount for the invoice.
|`ShipToAddress`|`object`|[`ShipToAddress`](#ShipToAddress)|
|`Status`|`string`|-|The status of the invoice.
|`StatusCode`|`string`|-|The status code for the invoice.
|`Tax`|`string`|-|The tax as shown on the invoice. This is the tax applied by the vendor.
|`TaxReferenceID`|`string`|-|The tax reference ID of the invoice.
|`Title`|`string`|-|The title of the invoice.
|`Total`|`string`|-|The total amount of the request.
|`URI`|`string`|-|The URI to the resource.
|`VendorInvoiceNumber`|`string`|-|The vendor invoice number that is associated with the invoice.

###<a name="billToAddress"></a>BillToAddress  

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

###<a name="LineItem"></a>LineItem  

|Name | Type | Format | Description
|-----|------|--------|------------
|`CalculatedTaxAmount`|`string`|-|The calculated tax amount for the individual line item.
|`CalculatedTaxRate`|`string`|-|The calculated tax rate for the individual line item.
|`CommodityCode`|`string`|-|The commodity code that is tied to the expense type associated with the line item.
|`CountryCode`|`string`|-|The country code for the line item.
|`CurrencyCode`|`string`|-|The currency code for the individual line item.
|`LineItemKey`|`string`|-|A value that uniquely identifies the line item.
|`Quantity`|`string`|-|The quantity for the line item.
|`Total`|`string`|-|The total amount for the line item.
|`UnitPrice`|`string`|-|The unit price for the line item.
|`Vendor`|`object`|[`InvoiceVendor`](#Vendor)|Details about the vendor for each line item.

###<a name="Vendor"></a>Vendor  

|Name | Type | Format | Description
|-----|------|--------|------------
|`Address1`|`string`|-|**Required** The Vendor Address 1.
|`Address2`|`string`|-|The Vendor Address 2.
|`Address3`|`string`|-|The Vendor Address 3.
|`City`|`string`|-|**Required** The Vendor City.
|`CountryCode`|`string`|-|**Required** The Vendor Country Code.
|`PostalCode`|`string`|-|**Required** The Vendor Postal Code / Zip.
|`State`|`string`|-|**Required** The Vendor State.
|`VendorAddressName`|`string`|-|**Required** Name for Vendor Address.
|`VendorName`|`string`|-|**Required** The name of the vendor.

###<a name="ShipToAddress"></a>ShipToAddress  

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

##<a name="schema-status"></a>Status schema  

|Name | Type | Format | Description
|-----|------|--------|------------
|`Code`|`int`|-|Code of request result
|`Comments`|`string`|-|Comments that are returned for the update request.
|`Message`|`string`|-|Message of request result
|`RecordNumber`|`int`|-|Record Number for create/update request.
|`Status`|`string`|-|The status of the update. Possible values: SUCCESS, FAILURE
|`TaxReferenceID`|`string`|-|The tax reference ID of the updated invoice.
|`Type`|`string`|-|Type request result

