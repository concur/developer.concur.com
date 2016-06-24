---
title: Form of Payment Resource 
layout: reference
---

<span style="background-color:red; font-size:24pt"> **This version (1.0) has been deprecated effective 04/01/2016**</span>  
Access a new version: [Form of Payment 2.0](/api-reference/travel-profile/02-form-payment-resource.html)

## Description
The Form of Payment resource represents the form of payment a Concur user uses by default during travel. You can use this resource to obtain information associated with a user's preferred method of payment such as card display name, credit card number, expiration date, and billiting address. **This version (1.0) has been deprecated effective 04/01/2016**  

**Click [here](/api-reference/travel/travel-profile/form-payment-resource.html) to access a newer version.**

## Version   
1.0 **Deprecated 04/01/2016**

## URI   
<samp> https://www.concursolutions.com/api/travelprofile/v1.0/fop/ </samp>

## Who can use this resource?
This endpoint can be used by travel suppliers or travel management companies (TMC). The scope of information returned varies depending on who makes the request.

## Operations
[Get preferred method of payment details](#a1)

## <a name="a1">Get preferred method of payment details</a>
This endpoint can be used by travel suppliers or travel management companies (TMC) to get the preferred method of payment details for the specified user. The scope of information returned varies depending on the entity making the request. It may include:

* Card display name
* Card vendor
* Credit card number
* Expiration date
* Card Owner's Name
* Billing Address
* Preferred usage

**Travel Suppliers**
This endpoint returns the OAuth consumer's preferred Form of Payment for the travel supplier's type of travel. For example, a rental car supplier may request the user's preferred form of payment for car rentals, and not hotel.

**Travel Management Companies**
This endpoint returns the OAuth consumer's full list of default Forms of Payment, regardless of type of travel. The user must have selected the form of payment as a default for at least one travel type for it to be returned in the response.

## Who can use this resource?
This endpoint is intended for use by Travel Suppliers or Travel Management Companies, to make travel booking easier. This endpoint is only available to suppliers or TMCs who have completed the [Concur application review process][4]. Travel suppliers or TMCs must provide evidence of PCI compliance and meet other security related terms and conditions before accessing form of payment information. Compliance will be confirmed during the application review process.

## Request


```
    GET https://www.concursolutions.com/api/travelprofile/v1.0/fop/ HTTP/1.1
    Authorization: OAuth {access token}
    ...
```

### Request parameters
None.

### Headers  

#### Authorization header   
`Authorization: OAuth {access_token}`

#### Content-Type header   
application/xml 

#### Accept header   
application/xml

##  Response

### Content Types
application/xml

### Content Body
This request will return a **CorporateFOPResponse** parent element with the **uniqueID** attribute and a **CreditCards** parent element containing a **CreditCard** element for each included credit card. The **CreditCards** element will only appear if the user has a credit card that is available to the supplier. The **CreditCard** element has the **DisplayName** attribute and contains the following child elements.

#### CreditCard element

|Element Name|Required/Optional|Data Type| Description |
|------------|-----------------|---------|-------------|
|Vendor | | |The card vendor. One of the following options: Unknown, AX, DC, DS, CA, VI, CB, ER, TP, JC, AA, DL, NW, TW, UC, UA, EC, CP, AS, PO, AWRDCR |  
|AccountNo | | |The credit card account number. |
|ExpDate |  | |The expiration date of the credit card. Format: YYYY-MM |
|NameOnCard | | |The name on the credit card. |
|Usages | | |This element contains a comma separated list of the selected uses for this card. |
|BillingAddress | | |This parent element contains information about the billing address. For information about the child elements of this parent element, see the **BillingAddress element** table below. |

#### BillingAddress element

|Element Name|Required/Optional|Data Type|Description|
|------------|-----------------|---------|-----------|
|StreetAddress | | |The street and unit information for the billing address.|
|City | | |The city information for the billing address.|   
|StateProvince | | |The state or province information for the billing address.|
|Country| | |The country information for the billing address.|
|ZipCode| | |The zip code information for the billing address.|


####  XML Example of Successful Response for Air Travel Supplier

```xml
    200 OK
    Content-Type: application/xml

    <CorporateFOPResponse UniqueID="3Dkw7WlCshi$281kedhn">
        <CreditCards>
            <CreditCard DisplayName="American Express">
                <Vendor>AX</Vendor>
                <AccountNo>123456789012345</AccountNo>
                <ExpDate>2015-05</ExpDate>
                <NameOnCard>Chris Miller</NameOnCard>
                <Usages>BusinessAir</Usages>
                <BillingAddress>
                    <StreetAddress>1234 Rainy St.</StreetAddress>
                    <City>Seattle</City>
                    <StateProvince>WA</StateProvince>
                    <Country>US</Country>
                    <ZipCode>98112</ZipCode>
                </BillingAddress>
            </CreditCard>
        </CreditCards>
    </CorporateFOPResponse>
```

####  XML Example of Successful Response for TMC

```xml
    200 OK
    Content-Type: application/xml

    <CorporateFOPResponse UniqueID="3Dkw7WlCshi$281kedhn">
        <CreditCards>
            <CreditCard DisplayName="American Express">
                <Vendor>AX</Vendor>
                <AccountNo>123456789012345</AccountNo>
                <ExpDate>2015-05</ExpDate>
                <NameOnCard>Chris Miller</NameOnCard>
                <Usages>BusinessAir,BusinessCar</Usages>
                <BillingAddress>
                    <StreetAddress>1234 Rainy St.</StreetAddress>
                    <City>Seattle</City>
                    <StateProvince>WA</StateProvince>
                    <Country>US</Country>
                    <ZipCode>98112</ZipCode>
                </BillingAddress>
            </CreditCard>
            <CreditCard DisplayName="Visa">
                <Vendor>VI</Vendor>
                <AccountNo>098765432109876</AccountNo>
                <ExpDate>2013-07</ExpDate>
                <NameOnCard>Chris Miller</NameOnCard>
                <Usages>Hotel</Usages>
                <BillingAddress>
                    <StreetAddress>1234 Rainy St.</StreetAddress>
                    <City>Seattle</City>
                    <StateProvince>WA</StateProvince>
                    <Country>US</Country>
                    <ZipCode>98112</ZipCode>
                </BillingAddress>
            </CreditCard>
        </CreditCards>
    </CorporateFOPResponse>
```


