---
title: Form of Payment
layout: reference
---


## Description
The Form of Payment Web service consists of a set of resources that provide form of payment details customized in specific ways for developers, travel suppliers, and travel management companies (TMCs).

Developers, travel suppliers, and travel management companies (TMCs):

* View user’s personal methods of payment
* View user’s corporate methods of payment 
* Will only be included if Corporate Ghost Card scope has been enabled


## Version
2.0
[Version 1.0](/api-reference-deprecated/version-one/Travel/form-payment-resource.html) has been **deprecated**

## URI
    https://{InstanceURL}/api/travelprofile/v2.0/fop

## Who can use this resource?
This endpoint can be used by travel suppliers or travel management companies (TMC). The scope of information returned varies depending on who makes the request.

## Operations
[Get preferred method of payment details](#a1)

## <a name="a1">Get preferred method of payment details</a>
This endpoint can be used by travel suppliers or travel management companies (TMC) to get the preferred method of payment details for the specified user. The scope of information returned varies depending on the entity making the request.

## Data Model

The schema for v2.0 is available [here.](https://www.concursolutions.com/ns/FormOfPayment.xsd)

The root element contains the following attribute:

Name | Type | Format | Description
-----|------|--------|------------
`unique`    |   `string`  |   `-` |   The user’s unique identifier, associated with loyalty information if accessed by a vendor who has provided that information.


## CreditCard Elements

Name | Type | Format | Description |
------------|-----------------|---------|-------------|
`DisplayName` | `string` |`-` |Display name associated with the card.|


The CreditCard element contains the following child elements:

Name | Type | Format | Description |
------------|-----------------|---------|-------------|
`Vendor` |`string` |`-` |The card vendor. One of the following options: Unknown, AmericanExpress, DinersClub, Discover, MasterCard, Visa, CarteBlanche, Enroute, UniversalAirTravel, JCB, AmericanAirlines, DeltaEquity, NorthwestAirlines, TWAGetaway, UnitedTravelCard, UnitedCreditCard, EuroCard, CanadianAirlines, AlaskaAirBarter, PurchaseOrder, AwardCredit, Debit, ChinaUnionPay, Cash, CompanyPaid, CreditCard |
`AccountNo` | `string`|`-` |The credit card account number. |
`ExpDate` |`date/time`|`-` |The expiration date of the credit card. Format: YYYY-MM |
`NameOnCard` | `string` |`-` |The name on the credit card. **Business Cards only.** |
`UsageType`|`string` |`-` |For what purpose the card is to be used, which will be one of the following values: **Corporate** , **Business** |
`BillingAddress` |`string`|`-` |This parent element contains information about the billing address. For information about the child elements of this parent element, see the **BillingAddress element** table below. |
`Segments`|`string`|`-` |A list of segments with which the card may be used. For information about the child elements of this parent element, see the **Segment element** table below

#### BillingAddress element

Element Name|Required/Optional|Data Type|Description|
------------|-----------------|---------|-----------|
`StreetAddress` | `string`|`-`  |The street and unit information for the billing address.|
`City` | `string`| `-` |The city information for the billing address.|
`StateProvince` | `string`| `-` |The state or province information for the billing address.|
`Country`| `string`|`-`  |The country information for the billing address.|
`ZipCode`| `string`| `-` | The zip code information for the billing address.|

#### Segments element

Element Name|Required/Optional|Data Type|Description|
------------|-----------------|---------|-----------|
`Type` | `string`|`-`  |Type of Segment, which will be one of the following values: Air, Rail, Hotel, Car, Ground|
`Mandatory` | `boolean`| `-` |A Boolean that notes if this card must be used for payment for this segment type. **Corporate Ghost Cards only.** |
`Default` | `boolean`| `-` |A Boolean that notes if this card has a default use for payment for this segment type. |


### Examples for Travel Suppliers

#### Example 1: Get forms of payment for the user associated with the specified OAuth 2.0 access token
**Request**

```
GET {InstanceURI}/api/travelprofile/v2.0/fop HTTP/1.1
Authorization: OAuth {access token}
...
```

#### Examples for TMCs
**Request**

```
GET {InstanceURI}/api/travelprofile/v2.0/fop HTTP/1.1
Authorization: OAuth {access token}
...
```


