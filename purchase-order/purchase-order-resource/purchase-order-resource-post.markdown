
        <div id="main" class="container">
            <div>
                            </div>
            <div class="row">
                <div class="span12">
<div class="breadcrumbs"><a href="/">Home</a>Purchase Order Resource: POST</div>
                </div>
            </div>

            <div id="content-wrapper">
<!-- <div class="row"> -->
                <div id="content" class="span9">
            # Purchase Order Resource: POST
                    <div class="section">
                    <div id="node-395" class="node clear-block">


    
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
This resource supports the following POST actions:

    * 
        <a href="#newlistitem">Post Purchase Order </a>

## 
    <a id="postpurchaseorder" name="postpurchaseorder"></a>Post Purchase Order Request
<table border="1" bordercolor="#dbdbdb" cellpadding="3" cellspacing="0" width="100%">
    <tbody>
        <tr class="GrayTableHead">
            <td>
                Description</td>
            <td>
                Supported Content Types</td>
        </tr>
        <tr>
            <td>
                Creates or updates one or more purchase orders. All purchase order requests are considered a batch operation, even if only one purchase order is created or updated.<br />
                <br />
                **NOTE**: Concur Invoice is vastly configurable. Use the following process to get the list of custom fields configured for the various forms:
                <ol>
                    * 
                        Use the <a href="https://developer.concur.com/node/469">Get Available Form Types</a> function to get the form codes associated with the Invoice Purchase Order header, Line Item and Allocation forms.
                    * 
                        Use the <a href="https://developer.concur.com/node/469#getformdata">Get Form Data</a> function to get the FormId for the specific forms that you wish to use.
                    * 
                        Use the <a href="https://developer.concur.com/node/471">Get Form Field Details</a> function to get the list of configured fields (including custom fields) for the forms.
                </ol>
            </td>
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
            <td valign="top">
                None</td>
            <td valign="top">
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
        <tr class="GrayTableHead">
            <td colspan="2">
                Content Body</td>
        </tr>
        <tr>
            <td colspan="2">
                This request should contain a **Batch** parent element with a **PurchaseOrder** parent element for each included purchase order. The **PurchaseOrder** element contains the following child elements:<br />
                <table border="1" bordercolor="#dbdbdb" cellpadding="3" cellspacing="0" width="100%">
                    <tbody>
                        <tr class="GrayTableHead">
                            <td valign="top" width="20%">
                                Element</td>
                            <td valign="top" width="20%">
                                Required (must contain value)?</td>
                            <td valign="top" width="70%">
                                Description</td>
                        </tr>
                        <tr>
                            <td valign="top">
                                PoNumber</td>
                            <td valign="top">
                                Y</td>
                            <td valign="top">
                                The purchase order number.</td>
                        </tr>
                        <tr>
                            <td valign="top">
                                PolicyExternalId</td>
                            <td valign="top">
                                Y</td>
                            <td valign="top">
                                This is the external identifier of the policy that should be associated to the purchase order. External id is a property of the policy within configurations.</td>
                        </tr>
                        <tr>
                            <td valign="top">
                                ExternalId</td>
                            <td valign="top">
                                Y</td>
                            <td valign="top">
                                A customer supplied value that uniquely identifies the line item within a purchase order.</td>
                        </tr>
                        <tr>
                            <td valign="top">
                                LineNumber</td>
                            <td valign="top">
                                Y</td>
                            <td valign="top">
                                The number of the line items within the purchase order.</td>
                        </tr>
                        <tr>
                            <td valign="top">
                                SupplierPartId</td>
                            <td valign="top">
                                N</td>
                            <td valign="top">
                                Any number that might help to identify the line item, it may be values such as the supplier part number or even the manufacturer number.</td>
                        </tr>
                        <tr>
                            <td valign="top">
                                CurrencyCode</td>
                            <td valign="top">
                                Y</td>
                            <td valign="top">
                                The <a href="http://en.wikipedia.org/wiki/ISO_4217">3-letter ISO 4217 currency code</a> of the currency that is associated to the purchase order.</td>
                        </tr>
                        <tr>
                            <td valign="top">
                                VendorCode</td>
                            <td valign="top">
                                Y</td>
                            <td valign="top">
                                The code that identifies the vendor that should be associated to the purchase order.</td>
                        </tr>
                        <tr>
                            <td valign="top">
                                VendorAddressCode</td>
                            <td valign="top">
                                Y</td>
                            <td valign="top">
                                The code that identifies the vendors remit address that should be associated to the purchase order.</td>
                        </tr>
                        <tr>
                            <td valign="top">
                                ShipTo</td>
                            <td valign="top">
                                Y</td>
                            <td valign="top">
                                The customer&rsquo;s shipping address, which is where the vendor should ship the goods. This parent element contains the following child elements:<br />
                                <br />
                                <table border="1" bordercolor="#cccccc" cellpadding="3" cellspacing="0">
                                    <tbody>
                                        <tr>
                                            <td>
                                                ExternalId</td>
                                            <td>
                                                A unique value supplied by the customer to identify a particular shipping or billing address. Required.</td>
                                        </tr>
                                        <tr>
                                            <td>
                                                Name</td>
                                            <td>
                                                An optional name that can be given to the shipping and billing address.</td>
                                        </tr>
                                        <tr>
                                            <td>
                                                Address1</td>
                                            <td>
                                                Address 1 of the shipping or billing address. Required.</td>
                                        </tr>
                                        <tr>
                                            <td>
                                                Address2</td>
                                            <td>
                                                Address 2 of the shipping or billing address.</td>
                                        </tr>
                                        <tr>
                                            <td>
                                                Address3</td>
                                            <td>
                                                Address 3 of the shipping or billing address.</td>
                                        </tr>
                                        <tr>
                                            <td>
                                                City</td>
                                            <td>
                                                The city of the shipping or billing address. Required.</td>
                                        </tr>
                                        <tr>
                                            <td>
                                                StateProvince</td>
                                            <td>
                                                The state or province of the shipping or billing address. Required.</td>
                                        </tr>
                                        <tr>
                                            <td>
                                                PostalCode</td>
                                            <td>
                                                The postal code of the shipping or billing address. Required.</td>
                                        </tr>
                                        <tr>
                                            <td>
                                                CountryCode</td>
                                            <td>
                                                The code of the country associated to the shipping or billing address. Required.</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </td>
                        </tr>
                        <tr>
                            <td valign="top">
                                BillTo</td>
                            <td valign="top">
                                Y</td>
                            <td valign="top">
                                The customer&rsquo;s billing address, which is where the vendor should send the bill. This parent element contains the following child elements:<br />
                                <br />
                                <table border="1" bordercolor="#cccccc" cellpadding="3" cellspacing="0">
                                    <tbody>
                                        <tr>
                                            <td>
                                                ExternalId</td>
                                            <td>
                                                A unique value supplied by the customer to identify a particular shipping or billing address. Required.</td>
                                        </tr>
                                        <tr>
                                            <td>
                                                Name</td>
                                            <td>
                                                An optional name that can be given to the shipping and billing address.</td>
                                        </tr>
                                        <tr>
                                            <td>
                                                Address1</td>
                                            <td>
                                                Address 1 of the shipping or billing address. Required.</td>
                                        </tr>
                                        <tr>
                                            <td>
                                                Address2</td>
                                            <td>
                                                Address 2 of the shipping or billing address.</td>
                                        </tr>
                                        <tr>
                                            <td>
                                                Address3</td>
                                            <td>
                                                Address 3 of the shipping or billing address.</td>
                                        </tr>
                                        <tr>
                                            <td>
                                                City</td>
                                            <td>
                                                The city of the shipping or billing address. Required.</td>
                                        </tr>
                                        <tr>
                                            <td>
                                                StateProvince</td>
                                            <td>
                                                The state or province of the shipping or billing address. Required.</td>
                                        </tr>
                                        <tr>
                                            <td>
                                                PostalCode</td>
                                            <td>
                                                The postal code of the shipping or billing address. Required.</td>
                                        </tr>
                                        <tr>
                                            <td>
                                                CountryCode</td>
                                            <td>
                                                The code of the country associated to the shipping or billing address. Required.</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </td>
                        </tr>
                        <tr>
                            <td valign="top">
                                OrderDate</td>
                            <td valign="top">
                                Y</td>
                            <td valign="top">
                                The date goods were ordered. Format YYYY-MM-DD.</td>
                        </tr>
                        <tr>
                            <td valign="top">
                                Name</td>
                            <td valign="top">
                                N</td>
                            <td valign="top">
                                A name to the overall purchase order.</td>
                        </tr>
                        <tr>
                            <td valign="top">
                                Description</td>
                            <td valign="top">
                                N</td>
                            <td valign="top">
                                A description of the overall purchase order.</td>
                        </tr>
                        <tr>
                            <td valign="top">
                                RequestedDeliveryDate</td>
                            <td valign="top">
                                N</td>
                            <td valign="top">
                                The date the purchase order instructed the vendor to deliver the goods. Format YYYY-MM-DD.</td>
                        </tr>
                        <tr>
                            <td valign="top">
                                RequestedBy</td>
                            <td valign="top">
                                N</td>
                            <td valign="top">
                                The person that requests the goods associated to the purchase order.</td>
                        </tr>
                        <tr>
                            <td valign="top">
                                PaymentTerms</td>
                            <td valign="top">
                                N</td>
                            <td valign="top">
                                The NET payment terms with a supplier.</td>
                        </tr>
                        <tr>
                            <td valign="top">
                                DiscountTerms</td>
                            <td valign="top">
                                N</td>
                            <td valign="top">
                                The NET discount terms with a supplier when discounts apply.</td>
                        </tr>
                        <tr>
                            <td valign="top">
                                DiscountPercentage</td>
                            <td valign="top">
                                N</td>
                            <td valign="top">
                                The discount from the supplier if the discount terms are met.</td>
                        </tr>
                        <tr>
                            <td valign="top">
                                Tax</td>
                            <td valign="top">
                                N</td>
                            <td valign="top">
                                The overall tax of the purchase order.</td>
                        </tr>
                        <tr>
                            <td valign="top">
                                RequestedDeliveryDate</td>
                            <td valign="top">
                                N</td>
                            <td valign="top">
                                The date the line item of the purchase order instructed the vendor to deliver the goods. Format YYYY-MM-DD</td>
                        </tr>
                        <tr>
                            <td valign="top">
                                Shipping</td>
                            <td valign="top">
                                N</td>
                            <td valign="top">
                                The overall shipping cost of the purchase order.</td>
                        </tr>
                        <tr>
                            <td valign="top">
                                ShippingDescription</td>
                            <td valign="top">
                                N</td>
                            <td valign="top">
                                Describes how the goods associated to the purchase order are going to be shipping, i.e. via FedEx.</td>
                        </tr>
                        <tr>
                            <td valign="top">
                                Custom1 through Custom 24</td>
                            <td valign="top">
                                Depends on configuration</td>
                            <td valign="top">
                                A value that can be applied to a custom field of the same name that is part of the purchase order header form.
                                **<font color="#ff0000">NOTE</font>**<font color="#ff0000">: If any of the custom fields are configured to contain list values, please refer to the <a href="https://developer.concur.com/node/554">Posting Custom List Items</a> page for information on how to correctly submit list item values.</font>
                            </td>
                        </tr>
                        <tr>
                            <td valign="top">
                                LineItem</td>
                            <td valign="top">
                                Y</td>
                            <td valign="top">
                                Details the line items that are associated to the purchase order. The request can contain one or more **LineItem** elements. Refer to the <a href="#litable">Line Item Elements</a> table for the child elements.</td>
                        </tr>
                        <tr>
                            <td valign="top">
                                Shipping Terms</td>
                            <td valign="top">
                                N</td>
                            <td valign="top">
                                The code representing shipping terms with a supplier. Maximum 10 characters.</td>
                        </tr>
                        <tr>
                            <td valign="top">
                                Shipping Method</td>
                            <td valign="top">
                                N</td>
                            <td valign="top">
                                The code representing the shipping method used by the supplier. Maximum 10 characters.</td>
                        </tr>
                        <tr>
                            <td valign="top">
                                Needed By</td>
                            <td valign="top">
                                N</td>
                            <td valign="top">
                                The date by which the purchase order must be fulfilled. Format: YYYY-MM-DD</td>
                        </tr>
                        <tr>
                            <td valign="top">
                                Account Number</td>
                            <td valign="top">
                                N</td>
                            <td valign="top">
                                The vendor account number.</td>
                        </tr>
                    </tbody>
                </table>
                <br />
                <br />
                <table border="1" bordercolor="#dbdbdb" cellpadding="3" cellspacing="0" width="100%">
                    <tbody>
                        <tr class="GrayTableHead">
                            <td colspan="3" valign="top">
                                <a id="litable" name="litable"></a>Line Item Elements</td>
                        </tr>
                        <tr class="GrayTableHead">
                            <td valign="top" width="20%">
                                Element</td>
                            <td valign="top" width="10%">
                                Required (must contain value)?</td>
                            <td valign="top" width="70%">
                                Description</td>
                        </tr>
                        <tr>
                            <td valign="top">
                                RequestedBy</td>
                            <td valign="top">
                                N</td>
                            <td valign="top">
                                The person that requests the goods associated to the line item of the purchase order.</td>
                        </tr>
                        <tr>
                            <td valign="top">
                                ExpenseType</td>
                            <td valign="top">
                                Y, if AccountCode is not supplied</td>
                            <td valign="top">
                                Expense Type of the line item. ExpenseType OR AccountCode must be supplied, but not both.</td>
                        </tr>
                        <tr>
                            <td valign="top">
                                AccountCode</td>
                            <td valign="top">
                                Y, if ExpenseType is not supplied</td>
                            <td valign="top">
                                Account Code of the line item. ExpenseType OR AccountCode must be supplied, but not both.</td>
                        </tr>
                        <tr>
                            <td valign="top">
                                Description</td>
                            <td valign="top">
                                N</td>
                            <td valign="top">
                                A description of the line item.</td>
                        </tr>
                        <tr>
                            <td valign="top">
                                Quantity</td>
                            <td valign="top">
                                Y</td>
                            <td valign="top">
                                The quantity associated to the line item.</td>
                        </tr>
                        <tr>
                            <td valign="top">
                                UnitPrice</td>
                            <td valign="top">
                                Y</td>
                            <td valign="top">
                                The price of each item of the line item.</td>
                        </tr>
                        <tr>
                            <td valign="top">
                                Tax</td>
                            <td valign="top">
                                N</td>
                            <td valign="top">
                                Any tax that is associated to the line item.</td>
                        </tr>
                        <tr>
                            <td valign="top">
                                Custom1 through Custom20</td>
                            <td valign="top">
                                Depends on configuration</td>
                            <td valign="top">
                                A value that can be applied to a custom field of the same name that is part of the purchase order line item form.</td>
                        </tr>
                        <tr>
                            <td valign="top">
                                Allocation</td>
                            <td valign="top">
                                N</td>
                            <td valign="top">
                                Details the allocations that are associated to the line item. Allocation elements can be repeated within the same line items to represent multiple allocations. This parent element contains the following child elements:<br />
                                <br />
                                <table border="1" bordercolor="#cccccc" cellpadding="3" cellspacing="0">
                                    <tbody>
                                        <tr>
                                            <td>
                                                Amount</td>
                                            <td>
                                                The total amount of the allocation. Required.</td>
                                        </tr>
                                        <tr>
                                            <td>
                                                Custom1 through Custom20</td>
                                            <td>
                                                A value that can be applied to a custom field of the same name that is part of the allocation form.</td>
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
    XML Example Request
<pre class="overflow_box">
POST /api/invoice/purchaseorder/v1.0 HTTPS 1.1
Host: www.concursolutions.com
Authorization: OAuth {access token}
...
<Batch>
    <PurchaseOrder>
        <PoNumber>PO123456</PoNumber>
        <PolicyExternalId>USPOLICY</PolicyExternalId>
        <CurrencyCode>USD</CurrencyCode>
        <VendorCode>HOMEDEPOT</VendorCode>
        <VendorAddressCode>REMITADDRMNLOC101</VendorAddressCode>    
        <ShipTo>
            <ExternalId>SHIP12345</ExternalId>
            <Name>Location 5</Name>
            <Address1>23345 South West Street</Address1>
            <Address2></Address2>
            <Address3></Address3>
            <City>Minneapolis</City>
            <StateProvince>MN</StateProvince>
            <PostalCode>554303</PostalCode>
            <CountryCode>US</CountryCode>
        </ShipTo>
        <BillTo>
            <ExternalId>BILL12345</ExternalId>
            <Name>Head Quarters</Name>
            <Address1>23345 South West Street</Address1>
            <Address2></Address2>
            <Address3></Address3>
            <City>Minneapolis</City>
            <StateProvince>MN</StateProvince>
            <PostalCode>554303</PostalCode>
            <CountryCode>US</CountryCode>
        </BillTo>       
        <OrderDate>2011-03-15</OrderDate>
        <Name>Office Depot Order</Name>
        <Description>Office Supplies</Description>
        <RequestedDeliveryDate>2011-03-17</RequestedDeliveryDate>
        <RequestedBy>Greg</RequestedBy>
        <PaymentTerms>30</PaymentTerms>
        <DiscountTerms>10</DiscountTerms>
        <DiscountPercentage>15</DiscountPercentage>
        <Tax>2.25</Tax>
        <Shipping>1.17</Shipping>
        <ShippingDescription>Shipped</ShippingDescription>
        <Custom1>Custom Value 1</Custom1>
        <Custom2>Custom Value 2</Custom2>
        <Custom3>Custom Value 3</Custom3>
        <Custom4>Custom Value 4</Custom4>
        <Custom5>Custom Value 5</Custom5>
        <Custom6>Custom Value 6</Custom6>
        <Custom7>Custom Value 7</Custom7>
        <Custom8>Custom Value 8</Custom8>
        <Custom9>Custom Value 9</Custom9>
        <Custom10>Custom Value 10</Custom10>
        <Custom11>Custom Value 11</Custom11>
        <Custom12>Custom Value 12</Custom12>
        <Custom13>Custom Value 13</Custom13>
        <Custom14>Custom Value 14</Custom14>
        <Custom15>Custom Value 15</Custom15>
        <Custom16>Custom Value 16</Custom16>
        <Custom17>Custom Value 17</Custom17>
        <Custom18>Custom Value 18</Custom18>
        <Custom19>Custom Value 19</Custom19>
        <Custom20>Custom Value 20</Custom20>
        <Custom21>Custom Value 21</Custom21>
        <Custom22>Custom Value 22</Custom22>
        <Custom23>Custom Value 23</Custom23>
        <Custom24>Custom Value 24</Custom24>
        <LineItem>
            <LineNumber>1</LineNumber>
            <ExternalId>LINE1</ExternalId>
            <SupplierPartId>ABC-DEF</SupplierPartId>
            <RequestedDeliveryDate>2011-03-17</RequestedDeliveryDate>
            <RequestedBy>Greg</RequestedBy>
            <Description>Pencils</Description>
            <Quantity>100</Quantity>
            <UnitPrice>.25</UnitPrice>
            <Tax>0.17</Tax>
            <ExpenseType>Supplies</ExpenseType>
            <AccountCode></AccountCode>
            <CreateDate>2011-03-15</CreateDate>
            <Custom1>Custom Value 1</Custom1>
            <Custom2>Custom Value 2</Custom2>
            <Custom3>Custom Value 3</Custom3>
            <Custom4>Custom Value 4</Custom4>
            <Custom5>Custom Value 5</Custom5>
            <Custom6>Custom Value 6</Custom6>
            <Custom7>Custom Value 7</Custom7>
            <Custom8>Custom Value 8</Custom8>
            <Custom9>Custom Value 9</Custom9>
            <Custom10>Custom Value 10</Custom10>
            <Custom11>Custom Value 11</Custom11>
            <Custom12>Custom Value 12</Custom12>
            <Custom13>Custom Value 13</Custom13>
            <Custom14>Custom Value 14</Custom14>
            <Custom15>Custom Value 15</Custom15>
            <Custom16>Custom Value 16</Custom16>
            <Custom17>Custom Value 17</Custom17>
            <Custom18>Custom Value 18</Custom18>
            <Custom19>Custom Value 19</Custom19>
            <Custom20>Custom Value 20</Custom20>
            <Allocation>
                <Amount>25.17</Amount>
                <Custom1>Custom Value 1</Custom1>
                <Custom2>Custom Value 2</Custom2>
                <Custom3>Custom Value 3</Custom3>
                <Custom4>Custom Value 4</Custom4>
                <Custom5>Custom Value 5</Custom5>
                <Custom6>Custom Value 6</Custom6>
                <Custom7>Custom Value 7</Custom7>
                <Custom8>Custom Value 8</Custom8>
                <Custom9>Custom Value 9</Custom9>
                <Custom10>Custom Value 10</Custom10>
                <Custom11>Custom Value 11</Custom11>
                <Custom12>Custom Value 12</Custom12>
                <Custom13>Custom Value 13</Custom13>
                <Custom14>Custom Value 14</Custom14>
                <Custom15>Custom Value 15</Custom15>
                <Custom16>Custom Value 16</Custom16>
                <Custom17>Custom Value 17</Custom17>
                <Custom18>Custom Value 18</Custom18>
                <Custom19>Custom Value 19</Custom19>
                <Custom20>Custom Value 20</Custom20>
            </Allocation>
        </LineItem>
    </PurchaseOrder>
</Batch>
</pre>
## 
    Post Purchase Order Response
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
                This request will return a** Response** parent element with the following child elements:<br />
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
                                Processed</td>
                            <td valign="top">
                                The total number of purchase orders processed in the request.</td>
                        </tr>
                        <tr>
                            <td valign="top">
                                Success</td>
                            <td valign="top">
                                The total number of successfully processed purchase orders in the request.</td>
                        </tr>
                        <tr>
                            <td valign="top">
                                Failures</td>
                            <td valign="top">
                                The total number of unsuccessfully processed purchase orders in the request.</td>
                        </tr>
                        <tr>
                            <td valign="top">
                                Results</td>
                            <td valign="top">
                                This will contain a **PurchaseOrderResult** parent element for each purchase order. The **PurchaseOrderResult** element will contain the following child elements:
                                <table border="1" bordercolor="#cccccc" cellpadding="3" cellspacing="0">
                                    <tbody>
                                        <tr>
                                            <td>
                                                PoNumber</td>
                                            <td>
                                                The purchase order number associated to the processed purchase order.</td>
                                        </tr>
                                        <tr>
                                            <td>
                                                Status</td>
                                            <td>
                                                The result of processing the purchase order. Format is SUCCESS or FAILURE.</td>
                                        </tr>
                                        <tr>
                                            <td>
                                                ErrorCode</td>
                                            <td>
                                                The code to identify why the purchase order was not processed successfully.</td>
                                        </tr>
                                        <tr>
                                            <td>
                                                LineItemExternalId</td>
                                            <td>
                                                Will display the line item external id of a line item that caused the error. If the error is related to an Allocation, this will indicate the external id of the line item that the allocation is associated with and which allocation was the cause of the error. Refer to <a href="https://developer.concur.com/node/394/#responses">Responses and Errors</a> for more information.</td>
                                        </tr>
                                        <tr>
                                            <td>
                                                FieldCode</td>
                                            <td>
                                                The code that indicates which field caused an issue. This typically only appears when a field is being validated against a field of a form type. The format of the code will be LEVEL|CODE. The possible levels are: Header, ShipTo, BillTo, LineItem, Allocation. Refer to <a href="https://developer.concur.com/node/394/#responses">Responses and Errors</a> for more information.</td>
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
    XML Example Response with Success and Failure
<pre class="overflow_box">
200 OK
Content-Type: application/xml
<Response <span class="xml-attribute">xmlns=<span class="xml-value">&quot;<span class="xml-value">http://www.concursolutions.com/api/invoice/purchaseorder/2011/03<span class="xml-value">&quot; <span class="xml-attribute">xmlns:i=<span class="xml-value">&quot;<span class="xml-value">http://www.w3.org/2001/XMLSchema-instance<span class="xml-value">&quot;>  
    <Processed>2</Processed>
    <Success>1</Success>
    <Failures>1</Failures>
    <Results>
        <PurchaseOrderResult>
            <PoNumber>AAAABBB123445</PoNumber>
            <Status>SUCCESS</Status>
        </PurchaseOrderResult>
        <PurchaseOrderResult>
            <PoNumber>KJL8978798789</PoNumber>
            <Status>FAILURE</Status>
            <ErrorCode>8000</ErrorCode>
            <ErrorMessage>The required field is missing</ErrorMessage>
            <LineItemExternalId>LINEONE</LineItemExternalId>
            <FieldCode>LineItem|Custom1</FieldCode>
        </PurchaseOrderResult>
    </Results>
</Response>
</pre>
<br />
