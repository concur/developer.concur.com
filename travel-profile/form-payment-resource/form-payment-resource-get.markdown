
        <div id="main" class="container">
            <div>
                            </div>
            <div class="row">
                <div class="span12">
<div class="breadcrumbs"><a href="/">Home</a>Form of Payment Resource: GET</div>
                </div>
            </div>

            <div id="content-wrapper">
<!-- <div class="row"> -->
                <div id="content" class="span9">
            # Form of Payment Resource: GET
                    <div class="section">
                    <div id="node-498" class="node clear-block">


    
    <div class="content clear-block">
                <style type="text/css">
.overflow_box{
border: 1px solid grey;
padding: .5em;
overflow: auto;
background-color: #DBDBDB;
font-family:"Courier New", Courier, monospace;
font-size:11px;
}
.xml-attribute {color: #009900}
.xml-value {color: #ce7b00}
.ST0 {color: #00007c; font-family: Monospaced; font-weight: bold}
.xml-tag {color: #0000e6}
.STRING_LITERAL {color: #ce7b00}</style>
This resource supports the following GET actions:

    * 
        <a href="#fop">Get List of Forms of Payment</a>

## 
    <a id="fop" name="fop"></a>Get List of Forms of Payment Request
<table border="1" bordercolor="#dbdbdb" cellpadding="3" cellspacing="0" width="100%">
    <tbody>
        <tr class="GrayTableHead">
            <td colspan="2">
                Description</td>
        </tr>
        <tr>
            <td colspan="2">
                This endpoint can be used by travel suppliers or travel management companies (TMC). The scope of information returned varies depending on the entity making the request.
                Form of Payment contains a variety of information about the user&rsquo;s preferred method of payment including:
                
                    * 
                        Card display name
                    * 
                        Card vendor
                    * 
                        Credit card number
                    * 
                        Expiration date
                    * 
                        Card Owner&rsquo;s Name
                    * 
                        Billing Address
                    * 
                        Preferred usage
                
                **Travel Suppliers **
                This endpoint returns the OAuth consumer's preferred Form of Payment for the travel supplier's type of travel. For example, a rental car supplier may request the user&rsquo;s preferred form of payment for car rentals, and not hotel.
                **Travel Management Companies**
                This endpoint returns the OAuth consumer's full list of default Forms of Payment, regardless of type of travel. The user must have selected the form of payment as a default for at least one travel type for it to be returned in the response.</td>
        </tr>
        <tr class="GrayTableHead">
            <td>
                Restrictions</td>
            <td>
                Supported Accept Types</td>
        </tr>
        <tr>
            <td>
                This endpoint is intended for use by Travel Suppliers or Travel Management Companies, to make travel booking easier. This endpoint is only available to suppliers or TMCs who have completed the <a href="https://developer.concur.com/node/624">Concur application review process</a>. Travel suppliers or TMCs must provide evidence of PCI compliance and meet other security related terms and conditions before accessing form of payment information. Compliance will be confirmed during the application review process.</td>
            <td>
                
                    * 
                        application/xml
                
            </td>
        </tr>
        <tr class="GrayTableHead">
            <td>
                Query Parameters - Required</td>
            <td>
                Query Parameters - Optional</td>
        </tr>
        <tr>
            <td>
                None</td>
            <td>
                None</td>
        </tr>
        <tr class="GrayTableHead">
            <td>
                Request Headers - Required</td>
            <td>
                Request Headers - Optional</td>
        </tr>
        <tr>
            <td width="50%">
                Authorization header with OAuth token for valid Concur user.</td>
            <td valign="top" width="50%">
                None</td>
        </tr>
    </tbody>
</table>
####
    XML Example Request
<pre class="overflow_box">
GET https://www.concursolutions.com/api/travelprofile/v1.0/fop/ HTTP/1.1
Authorization: OAuth {access token}
...
</pre>
## 
    Get List of Forms of Payment Response
<table border="1" bordercolor="#dbdbdb" cellpadding="3" cellspacing="0" width="100%">
    <tbody>
        <tr class="GrayTableHead">
            <td>
                HTTP Responses</td>
            <td>
                Supported Content Types</td>
        </tr>
        <tr>
            <td>
                <a href="https://developer.concur.com/node/205">HTTP Status Codes</a></td>
            <td>
                
                    * 
                        application/xml
                
            </td>
        </tr>
        <tr class="GrayTableHead">
            <td colspan="2">
                Content Body</td>
        </tr>
        <tr>
            <td colspan="2">
                This request will return a <span class="codeexample">**CorporateFOPResponse** parent element with the **uniqueID** attribute and a **CreditCards** parent element containing a **CreditCard** element for each included credit card. The **CreditCards** element will only appear if the user has a credit card that is available to the supplier. The **CreditCard** element has the **DisplayName** attribute and contains the following child elements:<br />
                <table border="1" bordercolor="#dbdbdb" cellpadding="3" cellspacing="0" width="100%">
                    <tbody>
                        <tr class="GrayTableHead">
                            <td valign="top" width="20%">
                                Element</td>
                            <td valign="top" width="70%">
                                Description</td>
                        </tr>
                        <tr>
                            <td valign="top">
                                Vendor</td>
                            <td valign="top">
                                The card vendor. One of the following options: Unknown, AX, DC, DS, CA, VI, CB, ER, TP, JC, AA, DL, NW, TW, UC, UA, EC, CP, AS, PO, AWRDCR</td>
                        </tr>
                        <tr>
                            <td valign="top">
                                AccountNo</td>
                            <td valign="top">
                                The credit card account number.</td>
                        </tr>
                        <tr>
                            <td class="codeexample" valign="top">
                                ExpDate</td>
                            <td valign="top">
                                The expiration date of the credit card. Format: YYYY-MM</td>
                        </tr>
                        <tr>
                            <td valign="top">
                                NameOnCard</td>
                            <td valign="top">
                                The name on the credit card.</td>
                        </tr>
                        <tr>
                            <td valign="top">
                                Usages</td>
                            <td valign="top">
                                This element contains a comma separated list of the selected uses for this card.</td>
                        </tr>
                        <tr>
                            <td valign="top">
                                BillingAddress</td>
                            <td valign="top">
                                This parent element contains the following child elements:
                                <table border="1" bordercolor="#dbdbdb" cellpadding="3" cellspacing="0" width="100%">
                                    <tbody>
                                        <tr>
                                            <td valign="top">
                                                StreetAddress</td>
                                            <td valign="top">
                                                The street and unit information for the billing address.</td>
                                        </tr>
                                        <tr>
                                            <td valign="top">
                                                City</td>
                                            <td valign="top">
                                                The city information for the billing address.</td>
                                        </tr>
                                        <tr>
                                            <td valign="top">
                                                StateProvince</td>
                                            <td valign="top">
                                                The state or province information for the billing address.</td>
                                        </tr>
                                        <tr>
                                            <td valign="top">
                                                Country</td>
                                            <td valign="top">
                                                The country information for the billing address.</td>
                                        </tr>
                                        <tr>
                                            <td valign="top">
                                                ZipCode</td>
                                            <td valign="top">
                                                The zip code information for the billing address.</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </td>
        </tr>
    </tbody>
</table>
####
    XML Example of Successful Response for Air Travel Supplier
<pre class="overflow_box">
200 OK
Content-Type: application/xml

<CorporateFOPResponse <span class="xml-attribute">UniqueID=<span class="xml-value">&quot;3Dkw7WlCshi$281kedhn&quot;>
    <CreditCards>
        <CreditCard <span class="xml-attribute">DisplayName=<span class="xml-value">&quot;American Express&quot;>
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
</pre>
####
    XML Example of Successful Response for TMC
<pre class="overflow_box">
200 OK
Content-Type: application/xml

<CorporateFOPResponse <span class="xml-attribute">UniqueID=<span class="xml-value">&quot;3Dkw7WlCshi$281kedhn&quot;>
    <CreditCards>
        <CreditCard <span class="xml-attribute">DisplayName=<span class="xml-value">&quot;American Express&quot;>
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
        <CreditCard <span class="xml-attribute">DisplayName=<span class="xml-value">&quot;Visa&quot;>
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
</pre>
<br />
