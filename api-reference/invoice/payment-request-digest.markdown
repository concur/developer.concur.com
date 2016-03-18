---
title: Retrieve Payment Request Digests
layout: reference
---


# Retrieve Payment Request Digests

* [Retrieves all payment requests digests based on the search criteria](#get)
* [Retrieves a payment request digest based on ID](#getID)
* [Schema](#schema)

## Version
3.0  

## <a name="get"></a>Retrieves all payment requests digests based on the search criteria

    GET  /api/v3.0/invoice/paymentrequestdigests

        
### Parameters

Name | Type | Format | Description
-----|------|--------|------------			
`offset`	|	`string`	|	`query`	|	The start of the page offset.
`limit`	|	`Int32`	|	`query`	|	The number of records to return (default 1000).
`approvalStatus`	|	`string`	|	`query`	|	A code representing a Payment Request Approval Status. Use GET /invoice/localizeddata to get the available approval status codes.
`paymentStatus`	|	`string`	|	`query`	|	A code representing a Payment Request Payment Status. Use GET /invoice/localizeddata to get the available payment status codes
`vendorInvoiceNumber`	|	`string`	|	`query`	|	Vendor invoice number tied to invoice.
`createDateBefore`	|	`DateTime`	|	`query`	|	The payment request create date is before this date.Format: YYYY-MM-DD.
`createDateAfter`	|	`DateTime`	|	`query`	|	The payment request create date is after this date.Format: YYYY-MM-DD.
`userDefinedDateBefore`	|	`DateTime`	|	`query`	|	The payment request user defined date is before this date.Format: YYYY-MM-DD.
`userDefinedDateAfter`	|	`DateTime`	|	`query`	|	The payment request user defined date is after this date.Format: YYYY-MM-DD.
`submitDateBefore`	|	`DateTime`	|	`query`	|	The payment request submit date is before this date.Format: YYYY-MM-DD.
`submitDateAfter`	|	`DateTime`	|	`query`	|	The payment request submit date is after this date.Format: YYYY-MM-DD.
`paidDateBefore`	|	`DateTime`	|	`query`	|	The payment request paid date is before this date.Format: YYYY-MM-DD.
`paidDateAfter`	|	`DateTime`	|	`query`	|	The payment request paid date is after this date.Format: YYYY-MM-DD.



## <a name="getID"></a>Retrieves a payment request digest based on ID

    GET  /api/v3.0/invoice/paymentrequestdigests/{id}


### Parameters

Name | Type | Format | Description
-----|------|--------|------------
`id`	|	`string`	|	`path`	|	**Required** The payment request ID



## <a name="schema"></a>Schema


### Payment Request Digests

Name | Type | Format | Description
-----|------|--------|------------
`Items`	|	`Array`	|	[Payment Request Digest](#paymentrequestdigest)	|	The result collection.
`NextPage`	|	`string`	|	-	|	The URI of the next page of results, if any.
`PaymentRequestDigest`	|	`Array`	|	[Payment Request Digest](#paymentrequestdigest)	|	
`TotalCount`	|	`Int32`	|	-	|	


### <a name="paymentrequestdigest"></a>Payment Request Digest

Name | Type | Format | Description
-----|------|--------|------------
`ApprovalStatusCode`	|	`string`	|	-	|	**Required** A code indicating the request's approval status.
`CreateDate`	|	`string`	|	-	|	The date the request was created.
`CurrencyCode`	|	`string`	|	-	|	The 3-letter ISO 4217 currency code for the request currency. Examples: USD - US dollars; BRL - Brazilian real; CAD - Canadian dollar; CHF - Swiss franc; EUR - Euro; GBO - Pound sterling; HKD - Hong Kong dollar; INR - Indian rupee; MXN - Mexican peso; NOK - Norwegian krone; SEK - Swedish krona.
`ID`	|	`string`	|	-	|	The unique identifier of the resource.
`InvoiceNumber`	|	`string`	|	-	|	The invoice number of the Payment Request.
`IsDeleted`	|	`string`	|	-	|	A true/false value which indicates whether the request has been deleted. (Deleted requests are retained in the system for historical purposes.).
`OwnerLoginID`	|	`string`	|	-	|	The login ID of the Payment Request owner.
`OwnerName`	|	`string`	|	-	|	The name of the Payment Request owner.
`PaidDate`	|	`string`	|	-	|	The date when all journal entries in the request were integrated with or extracted to the financial system.
`PaymentRequestId`	|	`string`	|	-	|	**Required** The unique identifier of the Payment Request summarized in this digest.
`PaymentRequestUri`	|	`string`	|	-	|	**Required**  URI of the Payment Request summarized in this digest.
`PaymentStatusCode`	|	`string`	|	-	|	**Required** A code indicating the request's payment status.
`Total`	|	`string`	|	-	|	The total amount of the request.
`URI`	|	`string`	|	-	|	The URI to the resource.
`UserDefinedDate`	|	`string`	|	-	|	The invoice date as assigned by the user.
`VendorName`	|	`string`	|	-	|	**Required** The name of the vendor.


