---
title: Get a list of vendors
layout: operation
---

## Description
Get a list of vendors that have sent invoices.

## Request

### Request parameters
The following query strings: limit, offset, sortDirection, sortBy, searchType, vendorCode, vendorName, taxID, buyerAccountNumber,  addressCode, address1, address2, address3, city, state, postalCode, approved, country, and a custom fields in the range [custom1, custom20]. For details on these query strings, [go here][1].


### Headers
#### Content-Type header
application/xml

### Authorization header
OAuth {access token}

## Response
Array of Vendors

### Response root elements

| Element Name | Data Type | Description |
|--------------|-----------|-------------|
| VendorCode | String |  |
| AddressCode | String |  |
| VendorName | String |  |
| Address1 | String |  |
| Address2 | String |  |
| Address3 | String |  |
| City | String |  |
| State | String |  |
| PostalCode | String |  |
| CountryCode | String |  |
| BuyerAccountNumber | String |  |
| TaxID | String |  |
| CurrencyCode | String |  |
| PaymentTermDays |  |  |
| Shippingmethod | String |  |
| ShippingTerms |  |  |
| DiscountTemsDays |  |  |
| DiscountPercentage |  |  |
| ContactFirstName | String |  |
| ContactLastName | String |  |
| ContactPhoneNumber | String |  |
| ContactEmail | String |  |
| PurchaseOrderContactFirstName | String |  |
| PurchaseOrderContactLastName | String |  |
| PurchaseOrderContactPhoneNumber | String |  |
| PurchaseOrderContactEmail | String |  |
| DefaultEmployeeID |  |  |
| DefaultExpenseTypeName | String |  |
| Custom1 |  |  |
| Custom2 |  |  |
| Custom3 |  |  |
| Custom4 |  |  |
| Custom5 |  |  |
| Custom6 |  |  |
| Custom7 |  |  |
| Custom8 |  |  |
| Custom9 |  |  |
| Custom10 |  |  |
| Custom11 |  |  |
| Custom12 |  |  |
| Custom13 |  |  |
| Custom14 |  |  |
| Custom15 | String |  |
| PaymentMethodType | String |  |

## Examples

### Request

#### Example 1: XML Example Request without Parameters

    GET <https://www.concursolutions.com/api/v3.0/invoice/vendors> HTTPS 1.1
    Authorization: OAuth {access token}
    ...

#### Example 2: XML Example Request with SearchType and Country Parameters

    GET https://www.concursolutions.com/api/v3.0/invoice/vendors/?SearchType=contains&Country=US HTTPS 1.1
    Authorization: OAuth {access token}
    ...

#### Example 3: XML Example Request with Approved Parameter

    GET <https://www.concursolutions.com/api/v3.0/invoice/vendors/?Approved=True> HTTPS 1.1
    Authorization: OAuth {access token}
    ...

### Response

#### Example 1: XML Example of Successful Response

    HTTP 1.1 200 OK
    Content-Type: application/xml
    ...

```XML
    <Vendors>
        <Vendor>
            <VendorCode>Vendor123</VendorCode>
            <AddressCode>Address123</AddressCode>
            <VendorName>VendorName</VendorName>
            <Address1>123 Main Street</Address1>
            <Address2>North</Address2>
            <Address3>Ave</Address3>
            <City>Eden Prairie</City>
            <State>Mn</State>
            <PostalCode>55344</PostalCode>
            <CountryCode>US</CountryCode>
            <BuyerAccountNumber>123</BuyerAccountNumber >
            <TaxID>123</TaxID>
            <CurrencyCode>USD</CurrencyCode>
            <PaymentTermDays>30</PaymentTermDays>
            <Shippingmethod>UPS</Shippingmethod>
            <ShippingTerms>1</ShippingTerms>
            <DiscountTemsDays>20</DiscountTemsDays>
            <DiscountPercentage>10</DiscountPercentage>
            <ContactFirstName>Chris</ContactFirstName>
            <ContactLastName>Miller</ContactLastName>
            <ContactPhoneNumber>2065556789</ContactPhoneNumber>
            <ContactEmail>cm@example.com</ContactEmail>
            <PurchaseOrderContactFirstName>Terry</PurchaseOrderContactFirstName>
            <PurchaseOrderContactLastName>Brown</PurchaseOrderContactLastName>
            <PurchaseOrderContactPhoneNumber>2065551234</PurchaseOrderContactPhoneNumber>
            <PurchaseOrderContactEmail>poemail@poemail.com</PurchaseOrderContactEmail>
            <DefaultEmployeeID>27</DefaultEmployeeID>
            <DefaultExpenseTypeName>EXPW</DefaultExpenseTypeName>
            <Custom1>Shipping></Custom1>
            <Custom2/>
            <Custom3/>
            <Custom4/>
            <Custom5/>
            <Custom6/>
            <Custom7/>
            <Custom8/>
            <Custom9/>
            <Custom10/>
            <Custom11/>
            <Custom12/>
            <Custom13/>
            <Custom14/>
            <Custom15>DepartmentA</Custom15>
            <PaymentMethodType>CLIENT</PaymentMethodType>
        </Vendor>
    </Vendors>
```
#### Example 2: XML Example of Failure Response
```XML
    <VendorResult>
        <Vendor>
            <Status>FAILURE</Status>
            <ErrorCode>6000</ErrorCode>
            <ErrorMessage>The required field missing|Limit</ErrorMessage>
        </Vendor>
    </VendorResult>
```
[1]: https://www.concursolutions.com/api/docs/index.html#!/Vendors/Get_limit_offset_sortDirection_sortBy_searchType_vendorCode_vendorName_taxID_buyerAccountNumber_addressCode_address1_address2_address3_city_state_postalCode_approved_country_custom1_custom2_custom3_custom4_custom5_custom6_custom7_custom8_custom9_custom10_custom11_custom12_custom13_custom14_custom15_custom16_custom17_custom18_custom19_custom20_get_0
