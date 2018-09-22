---
title: Suppliers
layout: reference
---

# Suppliers

Supplier companies provide travel services to users. The Suppliers resource can be used to retrieve information about suppliers.

* [Retrieve all suppliers based on search criteria](#get)
* [Retrieve a single supplier by ID](#getID)
* [Schema](#schema)

### Version
3.0

## <a name="get"></a>Retrieve all suppliers based on search criteria

    GET  /api/v3.0/common/suppliers/

        
### Parameters

Name | Type | Format | Description
-----|------|--------|------------			
`name`	|	`query`	|	``string``	|	Name
`address`	|	`query`	|	``string``	|	Address
`address2`	|	`query`	|	``string``	|	Address
`city`	|	`query`	|	``string``	|	City
`state`	|	`query`	|	``string``	|	State
`zip`	|	`query`	|	``string``	|	Zip
`country`	|	`query`	|	``string``	|	Country Code
`phone`	|	`query`	|	``string``	|	Phone
`mcCode	`|	`query`	|	``string``	|	MCC Code (Ex: Delta Airline - 3058)
`taxId	`|	`query`	|	``string``	|	Tax Id
`merchantType`	|	`query`	|	``string``	|	Merchant Type Code(Ex: Visa - VI, Amex - AX)
`merchantID`	|	`query`	|	``string``	|	Merchant Id
`iataCode`	|	`query`	|	``string``	|	IATA Code
`relevance`	|	`query`	|	`Int32`	|	Relevance of the Search results5



## <a name="getID"></a>Retrieve a single supplier by ID

    GET  /api/v3.0/common/suppliers/{id}


### Parameters

Name | Type | Format | Description
-----|------|--------|------------
`id`|```string```|`path`|**Required** Supplier ID.




## <a name="schema"></a>Schema


### <a name="suppliers"></a>Suppliers

Name | Type | Format | Description
-----|------|--------|------------
`Items`	|	`Array`	|	[Supplier](#supplier)	|	The result connection
`NextPage`	|	``string``	|	-	|	The URI of the next page of results, if any.


### <a name="supplier"></a>Supplier

Name | Type | Format | Description
-----|------|--------|------------
`AmadeusId`	|	`string`	|	-	|	Amadeus Id
`AustinTetra`	|	`string`	|	-	|	Austin Tetra
`BusinessName`	|	`string`	|	-	|	Name
`ChainCode`	|	`string`	|	-	|	Chain Code
`ChainName`	|	`string`	|	-	|	Chain Name
`City`	|	`string`	|	-	|	City
`CountryCode`	|	`string`	|	-	|	Country Code
`CreditCardVendorId`	|	`string`	|	-	|	Creditcard Vendor Id
`DunsNumber`	|	`string`	|	-	|	Duns Number
`Email`	|	`string`	|	-	|	Email
`Fax`	|	`string`	|	-	|	Fax
`GalileoId`	|	`string`	|	-	|	Galileo Id
`ID`	|	`string`	|	-	|	The unique identifier of the resource.
`MccCode`	|	`string`	|	-	|	MCC Code (Ex: Delta Airline - 3058)
`NorthstarId`	|	`string`	|	-	|	Northstar Id
`PegasusId`	|	`string`	|	-	|	Pegasus Id
`Phone`	|	`string`	|	-	|	Phone
`PostalCode`	|	`string`	|	-	|	Zip
`PrimaryNaics`	|	`string`	|	-	|	Primary Naics Code
`PrimarySic`	|	`string`	|	-	|	Primary Sic Code
`PropertyCode`	|	`string`	|	-	|	SUP_PARAM_PROPERTY_CODE
`SabreId`	|	`string`	|	-	|	Sabre Id
`SecondaryNaics`	|	`string`	|	-	|	Secondary Naics Code
`SecondarySic`	|	`string`	|	-	|	Secondary Sic Code
`State`	|	`string`	|	-	|	State
`StreetAddress`	|	`string`	|	-	|	Address
`StreetAddress2`	|	`string`	|	-	|	Address2
`TaxId`	|	`string`	|	-	|	Tax Id
`TollFree`	|	`string`	|	-	|	Toll Free
`URI`	|	`string`	|	-	|	The URI to the resource.
`WebUrl`	|	`string`	|	-	|	Web Address
`WorldspanId`	|	`string`	|	-	|	Worldspan Id


