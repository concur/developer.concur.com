---
title: Get suppliers
layout: operation
---


## Get all suppliers

### Description
Gets details about all suppliers that match the specified search criteria.

### Get all suppliers request

#### Request parameters

##### Query parameters

| Parameter | Required/Optional | Data Type | Description |
|------------|------------------|--------------|-----------------|
|name | optional | string | The name of the supplier company. |
|addressCode | optional | string | The address code for the supplier. |
|address | optional | string | The street address of the supplier. |
|address2 | optional | string | Line 2 of the street address of the supplier, if more than one line is needed. |
|city | optional | string | The city where the supplier is located. |
|state | optional | string | The state where the supplier is located. |
|zip | optional | string | The ZIP code or postal code for the supplier. |
|country | optional | string | The 2-letter [ISO 3166-1 country code][1] for the supplier. |
|phone | optional | string | The phone number for the supplier. |
|mcCode | optional | string | The [MCC code][2] for the supplier. For example, the MCC code for Delta Airlines is 3058. |
|taxId | optional | string | The tax ID for the supplier |
|merchantType | optional | string | The merchant type code. For example, the code for Visa is VI, and the code for American Express is AX. |
|merchantID | optional | string | The merchant ID. |
|iataCode | optional | string | The [IATA airport code][3] for the airport closest to the supplier.|
|relevance | optional | Int32 | The relevance of the search results. Default value: 70 |

Example: `https://www.concursolutions.com/api/v3.0/common/suppliers?state=WA&merchantType=hotel`

#### Headers

##### Content type

* application/xml
* application/json

##### Authorization header

The authorization header must have an OAuth token for a valid Concur user.

The OAuth consumer must have one of the following user roles in Concur: Company Administrator or Web Services Administrator for Professional, or Can Administer for Standard. These roles allow the user to manage data for the entire company.

### Get all suppliers response

#### Content body
This request will return a **Suppliers** parent element containing an **Items** child element. The **Items** element contains a **Supplier** child element for each supplier.

##### Supplier elements

The **Supplier** element contains details for the supplier.

| Element | Required/Optional | Data Type | Description |
|------------|---------------|--------------|-----------------------|
|BusinessName | optional | string | The name of the supplier company. |
|City | optional | string | The city where the supplier is located. |
|CountryCode | optional | string | The 2-letter [ISO 3166-1 country code][1] for the supplier. |
|ID | optional | string | The ID of the supplier company. |
|PostalCode | optional | string | The ZIP code or postal code for the supplier. |
|State | optional | string | The state where the supplier is located. |
|StreetAddress | optional | string | The street address of the supplier. |
|StreetAddress2 | optional | string | Line 2 of the street address of the supplier, if more than one line is needed. |
|URI | optional | string | The URI of the resource. |

## Get a single supplier by ID

### Description

Gets details about a single supplier, specified by ID.

### Get a single supplier request

#### Request parameters

##### Path parameters

| Parameter | Required/Optional | Data Type | Description |
|------------|------------------|--------------|-----------------|
|id |required | string | The ID of the supplier. |

Example: `https://www.concursolutions.com/api/v3.0/common/suppliers/{id}`

#### Headers

##### Content type

* application/xml
* application/json

##### Authorization header

The authorization header must have an OAuth token for a valid Concur user.

The OAuth consumer must have one of the following user roles in Concur: Company Administrator or Web Services Administrator for Professional, or Can Administer for Standard. These roles allow the user to manage data for the entire company.

### Get a single supplier response

#### Response body

This request will return a **Supplier** element containing details for the supplier.

#### Supplier elements

| Element | Required/Optional | Data Type | Description |
|------------|---------------|--------------|-----------------------|
| AmadeusId | optional | string | The Amadeus ID for the supplier company. |
| AustinTetra | optional | string | The Austin Tetra code for the supplier company. |
|BusinessName | optional | string | The name of the supplier company. |
| ChainCode | optional | string | The code for the chain that the supplier company belongs to. |
| ChainName | optional | string | The name of the chain that the supplier company belongs to. |
| City | optional | string | The city where the supplier is located. |
| CountryCode | optional | string | The 2-letter [ISO 3166-1 country code][1] for the supplier. |
| CreditCardVendorID | optional | string | The credit card vendor ID. |
| DunsNumber | optional | string | The DUNS number for the supplier company. |
| Email | optional | string | The email address for the supplier. |
| Fax | optional | string | The fax number for the supplier. |
| GalileoId | optional | string | The Galileo ID for the supplier company. |
| ID | optional | string | The ID of the supplier company. |
| MccCode | optional | string | The [MCC code][2] for the supplier. For example, the MCC code for Delta Airlines is 3058. |
| NorthstarId | optional | string | The [Northstar ID][4] for the supplier company. |
| PegasusId  | optional | string | The Pegasus ID for the supplier company. |
| Phone | optional | string | The phone number for the supplier. |
|PostalCode | optional | string | The ZIP code or postal code for the supplier. |
| PrimaryNaics| optional | string | The primary [NAICS code][5] for the supplier company. |
| PrimarySic | optional | string | The primary SIC code for the supplier company. |
| PropertyCode | optional | string | The property code for the supplier. |
| SabreId | optional | string | The Sabre ID for the supplier company. |
| SecondaryNaics | optional | string | The secondary [NAICS code][5] for the supplier company. |
| SecondarySic | optional | string | The secondary SIC code for the supplier company. |
|State | optional | string | The state where the supplier is located. |
|StreetAddress | optional | string | The street address of the supplier. |
|StreetAddress2 | optional | string | Line 2 of the street address of the supplier, if more than one line is needed. |
| TaxId | optional | string | The tax ID for the supplier |
| TollFree | optional | string | The toll-free phone number for the supplier. |
|URI | optional | string | The URI of the resource. |
| WebUrl | optional | string | The Web address for the supplier. |
| WorldspanId | optional | string | The Worldspan ID for the supplier company. |


## Examples

### XML example request

### XML example of successful response

[1]: http://en.wikipedia.org/wiki/ISO_3166-1_alpha-2
[2]: http://en.wikipedia.org/wiki/Merchant_category_code
[3]: http://www.iata.org/publications/Pages/code-search.aspx
[4]: http://www.northstartravelmedia.com/Data-Products/Licensing/Unique-Hotel-ID
[5]: http://www.census.gov/eos/www/naics/



