---
title: Vendors
layout: reference
---

# Vendors
* [Retrieve an existing vendor](#get)
* [Create vendors](#post)
* [Update existing vendors](#put)
* [Delete vendors](#delete)
* [Add/Update Vendor Banking](#vendorBankPut)
* [Add Vendor Group](#vendorGroupPut)
* [Delete Vendor Group](#vendorGroupDelete)
* [Schema](#schema)

## Version
3.0  


## <a name="get"></a>Retrieve an existing vendor 

    GET  /api/v3.0/invoice/vendors

### Parameters  

Name | Type | Format | Description
-----|------|--------|------------
`limit`|`Int32`|`query`|The maximum number of items to be returned in a response. The default is 25 and cannot exceed 1000.
`offset`|`string`|`query`|Specifies the starting point for the next query when iterating through the collection response. Use with paged collections of resources.
`sortDirection`|`string`|`query`|Ascending or descending, The default value will be ascending.
`sortBy`|`string`|`query`|Field you need to the results to be sorted by. Vendor Name will be made default if no value is sent. Only fields that are added to the vendor form can be used here. Fields have to be specified by name as specified in Doc.
`searchType`|`string`|`query`|Valid Options - exact, begins, contains and ends - Applies for the entire given search parameters. The default value if not sent is exact.
`vendorCode`|`string`|`query`|Vendor Code to be searched
`vendorName`|`string`|`query`|Vendor Name to be searched
`taxID`|`string`|`query`|Tax ID to be searched
`buyerAccountNumber`|`string`|`query`|Buyer Account Number to be searched
`addressCode`|`string`|`query`|Address Code to be searched
`address1`|`string`|`query`|Address 1 to be searched
`address2`|`string`|`query`|Address 2 to be searched
`address3`|`string`|`query`|Address 3 to be searched
`city`|`string`|`query`|City to be searched
`state`|`string`|`query`|State to be searched
`postalCode`|`string`|`query`|Postal Code to be searched
`approved`|`string`|`query`|Find Approved/Un Approved Vendors , True/False
`country`|`string`|`query`|Country to be searched
`custom1`|`string`|`query`|Custom 1 to be searched
`custom2`|`string`|`query`|Custom 2 to be searched
`custom3`|`string`|`query`|Custom 3 to be searched
`custom4`|`string`|`query`|Custom 4 to be searched
`custom5`|`string`|`query`|Custom 5 to be searched
`custom6`|`string`|`query`|Custom 6 to be searched
`custom7`|`string`|`query`|Custom 7 to be searched
`custom8`|`string`|`query`|Custom 8 to be searched
`custom9`|`string`|`query`|Custom 9 to be searched
`custom10`|`string`|`query`|Custom 10 to be searched
`custom11`|`string`|`query`|Custom 11 to be searched
`custom12`|`string`|`query`|Custom 12 to be searched
`custom13`|`string`|`query`|Custom 13 to be searched
`custom14`|`string`|`query`|Custom 14 to be searched
`custom15`|`string`|`query`|Custom 15 to be searched
`custom16`|`string`|`query`|Custom 16 to be searched
`custom17`|`string`|`query`|Custom 17 to be searched
`custom18`|`string`|`query`|Custom 18 to be searched
`custom19`|`string`|`query`|Custom 19 to be searched
`custom20`|`string`|`query`|Custom 20 to be searched

### Input  

None.

### Response  

[Vendors Schema](#schema)

## <a name="post"></a>Create vendors  

    POST  /api/v3.0/invoice/vendors

### Parameters  

Name | Type | Format | Description
-----|------|--------|------------
`vendors`|-|`body`|The vendor details.
  
### Input  


[Vendors Schema](#schema)

### Response  

[Vendors Schema](#schema)

## <a name="put"></a>Update existing vendors  

    PUT  /api/v3.0/invoice/vendors

### Parameters  

Name | Type | Format | Description
-----|------|--------|------------
`vendors`|-|`body`|The vendor details.

### Input  

[Vendors Schema](#schema)

### Response  

[Vendors Schema](#schema)

## <a name="delete"></a>Delete vendor  

    DELETE  /api/v3.0/invoice/vendors

### Parameters  

Name | Type | Format | Description
-----|------|--------|------------
`vendorCode`|`string`|`query`|**Required** Vendor Code to be deleted
`addressCode`|`string`|`query`|**Required** Address Code to be deleted

### Input  

None.

### Response  

[Vendors Schema](#schema)


## <a name=vendorBankPut></a>Add/Update Vendor Banking

    PUT /api/v3.0/invoice/vendor/banks
    
### Parameters

Name | Type | Format | Description
-----|------|--------|------------
`vendorBanks`|-|`body`|The vendor banking info

### Input

[Vendor Bank Schema](#vendorbanks)

### Response

[Vendor Bank Schema](#vendorbanks)

## <a name=vendorGroupPut></a>Add Vendor Group

    PUT /api/v3.0/invoice/vendor/groups
    
### Parameters

Name | Type | Format | Description
-----|------|--------|------------
`vendorCode`|`string`|`query`|**Required** The vendor code of the vendor to update
`addressCode`|`string`|`query`|**Requred** The address code of the vendor to update
`vendorGroups`|-|`body`|The vendor group details

### Input

[Vendor Group Schema](#vendorgroups)

### Response

[Vendor Group Schema](#vendorgroups)

## <a name=vendorGroupDelete></a>Delete Vendor Group

    DELETE /api/v3.0/invoice/vendor/groups

### Parameters

Name | Type | Format | Description
-----|------|--------|------------
`vendorCode`|`string`|`query`|**Required** The vendor code of the vendor to update
`addressCode`|`string`|`query`|**Requred** The address code of the vendor to update
`groupName`|`string`|`query`|**Requred** The group name to be deleted

### Input

None.

### Response

[Vendor Group Schema](#vendorgroups)


## <a name="schema"></a>Schema

### <a name="vendors"></a>Vendors  

Name | Type | Format | Description
-----|------|--------|------------
`Items`|`array`|[`Vendor`](#vendor)|The result collection.
`NextPage`|`string`|-|The URI of the next page of results, if any.
`RequestRunSummary`|`string`|-|-|
`TotalCount`|`Int`|-|-|
`Vendor`|`array`|[`Vendor`](#vendor)|**Required** Vendor

### <a name="vendor"></a>Vendor  

Name | Type | Format | Description
-----|------|--------|------------
`AccountNumber`|`string`|-|The Buyer Account Number.
`Address1`|`string`|-|The Vendor Address 1.
`Address2`|`string`|-|The Vendor Address 2.
`Address3`|`string`|-|The Vendor Address 3.
`AddressCode`|`string`|-|**Required** The Address Code.
`AddressImportSyncID`|`string`|-|This ID is originally generated by Invoice when an employee requests a new vendor. The Employee Request Vendor Extract provides this value to positively identify the vendor address record when reimporting vendor from the client's system of record for the Vendor Master List.
`Approved`|`string`|-|Vendor Approval Status.
`City`|`string`|-|The Vendor City.
`ContactEmail`|`string`|-|The Vendor Contact Email.
`ContactFirstName`|`string`|-|The Vendor Contact First Name.
`ContactLastName`|`string`|-|The Vendor Contact Last Name.
`ContactPhoneNumber`|`string`|-|The Vendor Contact Phone Number.
`Country`|`string`|-|The Vendor Country.
`CountryCode`|`string`|-|The Vendor Country Code.
`CurrencyCode`|`string`|-|The Vendor Currency Code.
`Custom1`|`string`|-|A value that can be applied to a custom field 1 that is part of the vendor form.
`Custom10`|`string`|-|A value that can be applied to a custom field 10 that is part of the vendor form.
`Custom11`|`string`|-|A value that can be applied to a custom field 11 that is part of the vendor form.
`Custom12`|`string`|-|A value that can be applied to a custom field 12 that is part of the vendor form.
`Custom13`|`string`|-|A value that can be applied to a custom field 13 that is part of the vendor form.
`Custom14`|`string`|-|A value that can be applied to a custom field 14 that is part of the vendor form.
`Custom15`|`string`|-|A value that can be applied to a custom field 15 that is part of the vendor form.
`Custom16`|`string`|-|A value that can be applied to a custom field 16 that is part of the vendor form.
`Custom17`|`string`|-|A value that can be applied to a custom field 17 that is part of the vendor form.
`Custom18`|`string`|-|A value that can be applied to a custom field 18 that is part of the vendor form.
`Custom19`|`string`|-|A value that can be applied to a custom field 19 that is part of the vendor form.
`Custom2`|`string`|-|A value that can be applied to a custom field 2 that is part of the vendor form.
`Custom20`|`string`|-|A value that can be applied to a custom field 20 that is part of the vendor form.
`Custom3`|`string`|-|A value that can be applied to a custom field 3 that is part of the vendor form.
`Custom4`|`string`|-|A value that can be applied to a custom field 4 that is part of the vendor form.
`Custom5`|`string`|-|A value that can be applied to a custom field 5 that is part of the vendor form.
`Custom6`|`string`|-|A value that can be applied to a custom field 6 that is part of the vendor form.
`Custom7`|`string`|-|A value that can be applied to a custom field 7 that is part of the vendor form.
`Custom8`|`string`|-|A value that can be applied to a custom field 8 that is part of the vendor form.
`Custom9`|`string`|-|A value that can be applied to a custom field 9 that is part of the vendor form.
`DefaultEmployeeID`|`string`|-|The Default Employee ID of the employee connected to the vendor.
`DefaultExpenseTypeName`|`string`|-|The Default Expense Type tied to the vendor.
`DiscountPercentage`|`string`|-|The Discount Percentage.
`DiscountTermsDays`|`string`|-|The Vendor Discount Terms Days.
`ID`|`string`|-|The unique identifier of the resource.
`IsVisibleForContentExtraction`|`string`|-|Flag that indicates if the vendor will be available for OCR within Brainware
`PaymentMethodType`|`string`|-|Preferred Payment Type for Vendor.
`PaymentTerms`|`string`|-|The Vendor Payment Terms.
`PostalCode`|`string`|-|The Vendor Postal Code / Zip.
`ProvincialTaxID`|`string`|-|The Vendor Provincial Tax ID.
`PurchaseOrderContactEmail`|`string`|-|The Purchase Order Contact Email.
`PurchaseOrderContactFirstName`|`string`|-|The Purchase Order Contact First Name.
`PurchaseOrderContactLastName`|`string`|-|The Purchase Order Contact Last Name.
`PurchaseOrderContactPhoneNumber`|`string`|-|The Purchase Order Contact Phone Number.
`ShippingMethod`|`string`|-|The Vendor Shipping Method.
`ShippingTerms`|`string`|-|The Vendor Shipping Terms.
`State`|`string`|-|The Vendor State.
`StatusList`|`array`|[`Status`](#status)|**Required** Status results
`TaxID`|`string`|-|The Vendor Tax ID.
`TaxType`|`string`|-|The Vendor Tax Type.
`URI`|`string`|-|The URI to the resource.
`VendorBankList`|`array`|[`VendorBank`](#VendorBank)|The list of a vendor's active banking information. **Read-Only**
`VendorCode`|`string`|-|**Required** The vendor code of the request.
`VendorFormName`|`string`|-|The vendor form name this vendor is associated with.
`VendorGroupList`|`array`|-|The list of vendor groups by name. **Read-Only**
`VendorName`|`string`|-|The name of the vendor.
`VoucherNotes`|`string`|-|Notes sent to Vendor along with authorization to charge Card Voucher.

### <a name="vendorbanks"></a>Vendor Banking Input/Response Schema

Name | Type | Format | Description
-----|------|--------|------------
`Items`|`array`|[`VendorBank`](#VendorBank)|The result collection.
`NextPage`|`string`|-|The URI of the next page of results, if any.
`RequestRunSummary`|`string`|-|-|
`TotalCount`|`Int`|-|-|
`VendorBank`|`array`|[`VendorBank`](#VendorBank)|**Required** Vendor Banking Info


### <a name="VendorBank"></a>VendorBank

Name | Type | Format | Description
-----|------|--------|------------
`AccountNumber`|`string`|-|**Required** The account number.
`AccountType`|`enum`|-|**Required** The account type--CHCK for Checking, SAVE for Savings.
`AddressCode`|`string`|-|**Required**The Address Code.
`BankCode`|`string`|-|Bank Code
`BankName`|`string`|-|The bank name.
`BranchCode`|`string`|-|Branch Code
`BranchLocation`|`string`|-|The branch location
`CountryCode`|`string`|-|The country code.
`CurrencyAlphaCode`|`string`|-|The currency alpha Code.
`ID`|`string`|-|The unique idenitifier of this resource.
`IsActive`|`string`|-|**Required** Is information active
`NameOnAccount`|`string`|-|**Required** The name on the account.
`RoutingNumber`|`string`|-|The routing number.
`StatusList`|`array`|[`status`](#status)|Status results
`TransType`|`string`|-|The trans type.
`URI`|`string`|-|The URI to the resource.
`VendorCode`|`string`|-|**Required** The vendor code of the request.

### <a name="vendorgroups"></a>Vendor Group Input/Response Schema
Name | Type | Format | Description
-----|------|--------|------------
`Items`|`array`|[`VendorGroup`](#VendorGroup)|The result collection.
`NextPage`|`string`|-|The URI of the next page of results, if any.
`RequestRunSummary`|`string`|-|-|
`TotalCount`|`Int`|-|-|
`VendorGroup`|`array`|[`VendorGroup`](#VendorGroup)|**Required** Vendor Group List

### <a name="VendorGroup"></a>VendorGroup
Name | Type | Format | Description
-----|------|--------|------------
`ID`|`string`|-|The unique identifier of the resource.
`Name`|`string`|-|**Required** The vendor group name.
`StatusList`|`array`|[`status`](#status)|Status results.
`URI`|string|-|The URI to the resource.


### <a name="status"></a>Status  

Name | Type | Format | Description
-----|------|--------|------------
`Code`|`int`|-|Code of request result
`Message`|`string`|-|Message of request result
`RecordNumber`|`int`|-|Record Number for create/update request.
`Type`|`string`|-|Type request result
