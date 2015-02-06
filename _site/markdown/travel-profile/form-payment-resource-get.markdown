[Source](https://developer.concur.com/travel-profile/form-payment-resource/form-payment-resource-get "Permalink to Form of Payment Resource: GET")

# Form of Payment Resource: GET

This resource supports the following GET actions:

##  Get List of Forms of Payment Request

| ----- |
|  Description |
|  This endpoint can be used by travel suppliers or travel management companies (TMC). The scope of information returned varies depending on the entity making the request.

Form of Payment contains a variety of information about the user's preferred method of payment including:

* Card display name
* Card vendor
* Credit card number
* Expiration date
* Card Owner's Name
* Billing Address
* Preferred usage

**Travel Suppliers **

This endpoint returns the OAuth consumer's preferred Form of Payment for the travel supplier's type of travel. For example, a rental car supplier may request the user's preferred form of payment for car rentals, and not hotel. 

**Travel Management Companies**

This endpoint returns the OAuth consumer's full list of default Forms of Payment, regardless of type of travel. The user must have selected the form of payment as a default for at least one travel type for it to be returned in the response. |
|  Restrictions |  Supported Accept Types |
|  This endpoint is intended for use by Travel Suppliers or Travel Management Companies, to make travel booking easier. This endpoint is only available to suppliers or TMCs who have completed the [Concur application review process][1]. Travel suppliers or TMCs must provide evidence of PCI compliance and meet other security related terms and conditions before accessing form of payment information. Compliance will be confirmed during the application review process. |   |
|  Query Parameters - Required |  Query Parameters - Optional |
|  None |  None |
|  Request Headers - Required |  Request Headers - Optional |
|  Authorization header with OAuth token for valid Concur user. |  None |

####  XML Example Request

    GET https://www.concursolutions.com/api/travelprofile/v1.0/fop/ HTTP/1.1
    Authorization: OAuth {access token}
    ...

##  Get List of Forms of Payment Response

| ----- |
|  HTTP Responses |  Supported Content Types |
|  [HTTP Status Codes][2] |   |
|  Content Body |   |
|  This request will return a **CorporateFOPResponse** parent element with the **uniqueID** attribute and a **CreditCards** parent element containing a **CreditCard** element for each included credit card. The **CreditCards** element will only appear if the user has a credit card that is available to the supplier. The **CreditCard** element has the **DisplayName** attribute and contains the following child elements:  

|  Element |  Description |
|  Vendor |  The card vendor. One of the following options: Unknown, AX, DC, DS, CA, VI, CB, ER, TP, JC, AA, DL, NW, TW, UC, UA, EC, CP, AS, PO, AWRDCR |   |
|  AccountNo |  The credit card account number. |
|  ExpDate |  The expiration date of the credit card. Format: YYYY-MM |
|  NameOnCard |  The name on the credit card. |
|  Usages |  This element contains a comma separated list of the selected uses for this card. |
|  BillingAddress |  This parent element contains the following child elements:

|  StreetAddress |  The street and unit information for the billing address. |
|  City |  The city information for the billing address. |   | |
|  StateProvince |  The state or province information for the billing address. |
|  Country |  The country information for the billing address. |
|  ZipCode |  The zip code information for the billing address. |

 |

 |

####  XML Example of Successful Response for Air Travel Supplier

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

####  XML Example of Successful Response for TMC

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

  
Last Modified: 10/8/2013 2:54 PM PDT

[1]: https://developer.concur.com/node/624
[2]: https://developer.concur.com/node/205
