
        <div id="main" class="container">
            <div>
                            </div>
            <div class="row">
                <div class="span12">
<div class="breadcrumbs"><a href="/">Home</a>Purchase Order </div>
                </div>
            </div>

            <div id="content-wrapper">
<!-- <div class="row"> -->
                <div id="content" class="span9">
            # Purchase Order 
                    <div class="section">
                    <div id="node-394" class="node clear-block">


    
    <div class="content clear-block">
                <script>
  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

  ga('create', 'UA-41161356-1', 'concur.com');
  ga('send', 'pageview');

</script>
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
.xml-tag {color: #0000e6}</style>
<a name="top"></a>
<table border="1" bordercolor="#dbdbdb" cellpadding="3" cellspacing="0" width="100%">
    <tbody>
        <tr class="GrayTableHead">
            <td>
                Description</td>
        </tr>
        <tr>
            <td>
                The Concur Invoice Purchase Order (PO) web service allows clients to send PO-related data in order to identify and resolve match exceptions on invoices. Clients can use this data in a variety of ways, including:
                
                    * 
                        Configuring match rules that compare the PO to the invoice
                    * 
                        Viewing the invoice and its associated PO side-by-side, to resolve exceptions
                    * 
                        Make selected updates to the PO in Concur (such as a unit price or quantity), in order to resolve exceptions
                
                The client remains the PO system-of-record. Creation, routing, and approval of POs is done only in the client system, not within Concur. The web service provides real-time access to approved PO data.</td>
        </tr>
        <tr class="GrayTableHead">
            <td>
                Works With These Concur Products</td>
        </tr>
        <tr>
            <td>
                
                    * 
                        **Invoice** for Concur Professional/Premium
                
            </td>
        </tr>
        <tr class="GrayTableHead">
            <td>
                Concur Connect API Structure</td>
        </tr>
        <tr>
            <td>
                Refer to **Web Services > <a href="https://developer.concur.com/node/25">Core Concepts</a>** for:
                
                    * 
                        Detailed information regarding the format, structure and process of making calls to a Concur Web Service.
                    * 
                        Information on authentication and authorization for all Concur Web Services.
                    * 
                        Information on registering and enabling partner applications to use Concur Web Services.
                
            </td>
        </tr>
        <tr class="GrayTableHead">
            <td>
                Product Restrictions</td>
        </tr>
        <tr>
            <td>
                You must have the Concur Invoice product to use this web service.
                Concur products are highly configurable, and not all clients will have access to all features.
                Partner developers must determine which configurations are required for their solution prior to the application review process. Use the <a href="https://developer.concur.com/forums/concur-connect">Developer Forum</a> if you have questions about the configuration settings.
                Existing clients can work with Concur Advantage Technical Services to create customapplications that work with their configuration.
            </td>
        </tr>
        <tr class="GrayTableHead">
            <td>
                Resources</td>
        </tr>
        <tr>
            <td>
                The version 3.0 documentation includes the data model and tools to send test requests to your developer sandbox.<br />
                    <br />
                    <a href="https://www.concursolutions.com/api/docs/index.html#!/PurchaseOrders" target="_blank">Version 3.0 Purchase Orders </a>
                <a href="https://www.concursolutions.com/api/docs/index.html#!/PurchaseOrderReceipts" target="_blank">Version 3.0 Purchase Order Receipts </a><br />
                    <br />
                    Version 1.0 documentation includes the data model and example requests and responses.<br />
                    <br />
                    <a href="https://developer.concur.com/node/396">Version 1.0 Purchase Order</a>
            </td>
        </tr>
        <tr class="GrayTableHead">
            <td>
                Additional Information</td>
        </tr>
        <tr>
            <td>
                <a href="#responses">Responses and Errors</a>
            </td>
        </tr>
    </tbody>
</table>
## 
    <a name="reponses"></a>Responses and Errors
Refer to the <a href="https://developer.concur.com/node/205">HTTP Codes</a> page for details of the common responses and errors.
####
    Invoice Purchase Order Errors
The web service will not return a 4xx HTTP response code for a batch operation even when every item in the batch failed to be created, updated or deleted. The client must inspect the response to look for warnings or errors with individual batch items.
**XML Response Error Codes**:
<table border="1" bordercolor="#dbdbdb" cellpadding="3" cellspacing="0" width="100%">
    <tbody>
        <tr class="GrayTableHead">
            <td valign="top" width="30%">
                Error Code</td>
            <td valign="top" width="70%">
                Message</td>
        </tr>
        <tr>
            <td valign="top">
                1000</td>
            <td valign="top">
                The PO number is missing or invalid.</td>
        </tr>
        <tr>
            <td valign="top">
                2000</td>
            <td valign="top">
                There was no vendor found for the supplied Vendor Code and Vendor Address Code.</td>
        </tr>
        <tr>
            <td valign="top">
                3000</td>
            <td valign="top">
                The Currency Code is missing or invalid.</td>
        </tr>
        <tr>
            <td valign="top">
                4000</td>
            <td valign="top">
                There was no policy found matching the supplied External Id.</td>
        </tr>
        <tr>
            <td valign="top">
                4001</td>
            <td valign="top">
                The policy does not support purchase orders.</td>
        </tr>
        <tr>
            <td valign="top">
                4002</td>
            <td valign="top">
                The policy cannot be changed on the purchase order.</td>
        </tr>
        <tr>
            <td valign="top">
                5000</td>
            <td valign="top">
                The purchase order does not contain any line items.</td>
        </tr>
        <tr>
            <td valign="top">
                5001</td>
            <td valign="top">
                The line item must contain expense type or account code, but not both.</td>
        </tr>
        <tr>
            <td valign="top">
                5002</td>
            <td valign="top">
                The line item expense type is invalid.</td>
        </tr>
        <tr>
            <td valign="top">
                5003</td>
            <td valign="top">
                The line item account code is invalid.</td>
        </tr>
        <tr>
            <td valign="top">
                5004</td>
            <td valign="top">
                The line item tax and unit price must both match positive or negative.</td>
        </tr>
        <tr>
            <td valign="top">
                5500</td>
            <td valign="top">
                The line item contains an allocation, but no allocation form is defined.</td>
        </tr>
        <tr>
            <td valign="top">
                5501</td>
            <td valign="top">
                The line item allocation amounts exceed the line item total.</td>
        </tr>
        <tr>
            <td valign="top">
                5502</td>
            <td valign="top">
                The distribution amounts for a line item must match the line item amount positive or negative.</td>
        </tr>
        <tr>
            <td valign="top">
                5503</td>
            <td valign="top">
                The distribution amounts for a line item cannot be zero.</td>
        </tr>
        <tr>
            <td valign="top">
                5600</td>
            <td valign="top">
                The external id for the line item is not unique across the purchase order.</td>
        </tr>
        <tr>
            <td valign="top">
                6000</td>
            <td valign="top">
                The Ship To Address is missing or invalid.</td>
        </tr>
        <tr>
            <td valign="top">
                6001</td>
            <td valign="top">
                The Bill To Address is missing or invalid.</td>
        </tr>
        <tr>
            <td valign="top">
                8000</td>
            <td valign="top">
                A required field is missing.</td>
        </tr>
        <tr>
            <td valign="top">
                8001</td>
            <td valign="top">
                A field&rsquo;s value exceeds the maximum length allowed.</td>
        </tr>
        <tr>
            <td valign="top">
                8002</td>
            <td valign="top">
                A field&rsquo;s value is not the correct data type.</td>
        </tr>
        <tr>
            <td valign="top">
                8003</td>
            <td valign="top">
                A field&rsquo;s value is an invalid list item.</td>
        </tr>
        <tr>
            <td valign="top">
                8004</td>
            <td valign="top">
                A field&rsquo;s value is an invalid connected list item.</td>
        </tr>
        <tr>
            <td valign="top">
                8005</td>
            <td valign="top">
                The Country Code is missing or invalid.</td>
        </tr>
        <tr>
            <td valign="top">
                8006</td>
            <td valign="top">
                A value was supplied for a field that is not part of the form.</td>
        </tr>
        <tr>
            <td valign="top">
                9999</td>
            <td valign="top">
                An unexpected error occurred.</td>
        </tr>
    </tbody>
</table>

**Field Codes**:
The following field codes are used for error codes in the 8000 range, and identify which field is causing an error. Typically field codes are used when validating an XML element's value against a form field&rsquo;s configuration for the supplied policy.
The table below lists all the field codes and at what level they are available. For example: Custom1 can point to an element at the purchase order or line item level where as PoNumber would only display for the purchase order level.
<table border="1" bordercolor="#dbdbdb" cellpadding="3" cellspacing="0" width="100%">
    <tbody>
        <tr class="GrayTableHead">
            <td valign="top">
                <center>
                    Code</center>
            </td>
            <td valign="top">
                <center>
                    Ship To / Bill To</center>
            </td>
            <td valign="top">
                <center>
                    Purchase Order</center>
            </td>
            <td valign="top">
                <center>
                    Line Item</center>
            </td>
            <td valign="top">
                <center>
                    Allocation</center>
            </td>
        </tr>
        <tr>
            <td valign="top">
                Address1</td>
            <td valign="top">
                Y</td>
            <td valign="top">
                N</td>
            <td valign="top">
                N</td>
            <td valign="top">
                N</td>
        </tr>
        <tr>
            <td valign="top">
                Address2</td>
            <td valign="top">
                Y</td>
            <td valign="top">
                N</td>
            <td valign="top">
                N</td>
            <td valign="top">
                N</td>
        </tr>
        <tr>
            <td valign="top">
                Address3</td>
            <td valign="top">
                Y</td>
            <td valign="top">
                N</td>
            <td valign="top">
                N</td>
            <td valign="top">
                N</td>
        </tr>
        <tr>
            <td valign="top">
                Amount</td>
            <td valign="top">
                N</td>
            <td valign="top">
                N</td>
            <td valign="top">
                N</td>
            <td valign="top">
                Y</td>
        </tr>
        <tr>
            <td valign="top">
                City</td>
            <td valign="top">
                Y</td>
            <td valign="top">
                N</td>
            <td valign="top">
                N</td>
            <td valign="top">
                N</td>
        </tr>
        <tr>
            <td valign="top">
                CountryCode</td>
            <td valign="top">
                Y</td>
            <td valign="top">
                N</td>
            <td valign="top">
                N</td>
            <td valign="top">
                Y</td>
        </tr>
        <tr>
            <td valign="top">
                Custom1</td>
            <td valign="top">
                N</td>
            <td valign="top">
                Y</td>
            <td valign="top">
                Y</td>
            <td valign="top">
                Y</td>
        </tr>
        <tr>
            <td valign="top">
                Custom2</td>
            <td valign="top">
                N</td>
            <td valign="top">
                Y</td>
            <td valign="top">
                Y</td>
            <td valign="top">
                Y</td>
        </tr>
        <tr>
            <td valign="top">
                Custom3</td>
            <td valign="top">
                N</td>
            <td valign="top">
                Y</td>
            <td valign="top">
                Y</td>
            <td valign="top">
                Y</td>
        </tr>
        <tr>
            <td valign="top">
                Custom4</td>
            <td valign="top">
                N</td>
            <td valign="top">
                Y</td>
            <td valign="top">
                Y</td>
            <td valign="top">
                Y</td>
        </tr>
        <tr>
            <td valign="top">
                Custom5</td>
            <td valign="top">
                N</td>
            <td valign="top">
                Y</td>
            <td valign="top">
                Y</td>
            <td valign="top">
                Y</td>
        </tr>
        <tr>
            <td valign="top">
                Custom6</td>
            <td valign="top">
                N</td>
            <td valign="top">
                Y</td>
            <td valign="top">
                Y</td>
            <td valign="top">
                Y</td>
        </tr>
        <tr>
            <td valign="top">
                Custom7</td>
            <td valign="top">
                N</td>
            <td valign="top">
                Y</td>
            <td valign="top">
                Y</td>
            <td valign="top">
                Y</td>
        </tr>
        <tr>
            <td valign="top">
                Custom8</td>
            <td valign="top">
                N</td>
            <td valign="top">
                Y</td>
            <td valign="top">
                Y</td>
            <td valign="top">
                Y</td>
        </tr>
        <tr>
            <td valign="top">
                Custom9</td>
            <td valign="top">
                N</td>
            <td valign="top">
                Y</td>
            <td valign="top">
                Y</td>
            <td valign="top">
                Y</td>
        </tr>
        <tr>
            <td valign="top">
                Custom10</td>
            <td valign="top">
                N</td>
            <td valign="top">
                Y</td>
            <td valign="top">
                Y</td>
            <td valign="top">
                Y</td>
        </tr>
        <tr>
            <td valign="top">
                Custom11</td>
            <td valign="top">
                N</td>
            <td valign="top">
                Y</td>
            <td valign="top">
                Y</td>
            <td valign="top">
                Y</td>
        </tr>
        <tr>
            <td valign="top">
                Custom12</td>
            <td valign="top">
                N</td>
            <td valign="top">
                Y</td>
            <td valign="top">
                Y</td>
            <td valign="top">
                Y</td>
        </tr>
        <tr>
            <td valign="top">
                Custom13</td>
            <td valign="top">
                N</td>
            <td valign="top">
                Y</td>
            <td valign="top">
                Y</td>
            <td valign="top">
                Y</td>
        </tr>
        <tr>
            <td valign="top">
                Custom14</td>
            <td valign="top">
                N</td>
            <td valign="top">
                Y</td>
            <td valign="top">
                Y</td>
            <td valign="top">
                Y</td>
        </tr>
        <tr>
            <td valign="top">
                Custom15</td>
            <td valign="top">
                N</td>
            <td valign="top">
                Y</td>
            <td valign="top">
                Y</td>
            <td valign="top">
                Y</td>
        </tr>
        <tr>
            <td valign="top">
                Custom16</td>
            <td valign="top">
                N</td>
            <td valign="top">
                Y</td>
            <td valign="top">
                Y</td>
            <td valign="top">
                Y</td>
        </tr>
        <tr>
            <td valign="top">
                Custom17</td>
            <td valign="top">
                N</td>
            <td valign="top">
                Y</td>
            <td valign="top">
                Y</td>
            <td valign="top">
                Y</td>
        </tr>
        <tr>
            <td valign="top">
                Custom18</td>
            <td valign="top">
                N</td>
            <td valign="top">
                Y</td>
            <td valign="top">
                Y</td>
            <td valign="top">
                Y</td>
        </tr>
        <tr>
            <td valign="top">
                Custom19</td>
            <td valign="top">
                N</td>
            <td valign="top">
                Y</td>
            <td valign="top">
                Y</td>
            <td valign="top">
                Y</td>
        </tr>
        <tr>
            <td valign="top">
                Custom20</td>
            <td valign="top">
                N</td>
            <td valign="top">
                Y</td>
            <td valign="top">
                Y</td>
            <td valign="top">
                Y</td>
        </tr>
        <tr>
            <td valign="top">
                Custom21</td>
            <td valign="top">
                N</td>
            <td valign="top">
                Y</td>
            <td valign="top">
                N</td>
            <td valign="top">
                N</td>
        </tr>
        <tr>
            <td valign="top">
                Custom22</td>
            <td valign="top">
                N</td>
            <td valign="top">
                Y</td>
            <td valign="top">
                N</td>
            <td valign="top">
                N</td>
        </tr>
        <tr>
            <td valign="top">
                Custom23</td>
            <td valign="top">
                N</td>
            <td valign="top">
                Y</td>
            <td valign="top">
                N</td>
            <td valign="top">
                N</td>
        </tr>
        <tr>
            <td valign="top">
                Custom24</td>
            <td valign="top">
                N</td>
            <td valign="top">
                Y</td>
            <td valign="top">
                N</td>
            <td valign="top">
                N</td>
        </tr>
        <tr>
            <td valign="top">
                Description</td>
            <td valign="top">
                N</td>
            <td valign="top">
                Y</td>
            <td valign="top">
                Y</td>
            <td valign="top">
                N</td>
        </tr>
        <tr>
            <td valign="top">
                DiscountPercentage</td>
            <td valign="top">
                N</td>
            <td valign="top">
                Y</td>
            <td valign="top">
                N</td>
            <td valign="top">
                N</td>
        </tr>
        <tr>
            <td valign="top">
                DiscountTerms</td>
            <td valign="top">
                N</td>
            <td valign="top">
                Y</td>
            <td valign="top">
                N</td>
            <td valign="top">
                N</td>
        </tr>
        <tr>
            <td valign="top">
                ExtermalId</td>
            <td valign="top">
                Y</td>
            <td valign="top">
                N</td>
            <td valign="top">
                Y</td>
            <td valign="top">
                N</td>
        </tr>
        <tr>
            <td valign="top">
                LineNumber</td>
            <td valign="top">
                N</td>
            <td valign="top">
                N</td>
            <td valign="top">
                Y</td>
            <td valign="top">
                N</td>
        </tr>
        <tr>
            <td valign="top">
                Name</td>
            <td valign="top">
                Y</td>
            <td valign="top">
                Y</td>
            <td valign="top">
                N</td>
            <td valign="top">
                N</td>
        </tr>
        <tr>
            <td valign="top">
                OrderDate</td>
            <td valign="top">
                N</td>
            <td valign="top">
                Y</td>
            <td valign="top">
                N</td>
            <td valign="top">
                N</td>
        </tr>
        <tr>
            <td valign="top">
                PaymentTerms</td>
            <td valign="top">
                N</td>
            <td valign="top">
                Y</td>
            <td valign="top">
                N</td>
            <td valign="top">
                N</td>
        </tr>
        <tr>
            <td valign="top">
                PoNumber</td>
            <td valign="top">
                N</td>
            <td valign="top">
                Y</td>
            <td valign="top">
                N</td>
            <td valign="top">
                N</td>
        </tr>
        <tr>
            <td valign="top">
                PostalCode</td>
            <td valign="top">
                Y</td>
            <td valign="top">
                N</td>
            <td valign="top">
                N</td>
            <td valign="top">
                N</td>
        </tr>
        <tr>
            <td valign="top">
                Quantity</td>
            <td valign="top">
                N</td>
            <td valign="top">
                N</td>
            <td valign="top">
                Y</td>
            <td valign="top">
                N</td>
        </tr>
        <tr>
            <td valign="top">
                RequestedBy</td>
            <td valign="top">
                N</td>
            <td valign="top">
                Y</td>
            <td valign="top">
                Y</td>
            <td valign="top">
                N</td>
        </tr>
        <tr>
            <td valign="top">
                RequestedDeliveryDate</td>
            <td valign="top">
                N</td>
            <td valign="top">
                Y</td>
            <td valign="top">
                Y</td>
            <td valign="top">
                N</td>
        </tr>
        <tr>
            <td valign="top">
                Shipping</td>
            <td valign="top">
                N</td>
            <td valign="top">
                Y</td>
            <td valign="top">
                N</td>
            <td valign="top">
                N</td>
        </tr>
        <tr>
            <td valign="top">
                ShippingDescription</td>
            <td valign="top">
                N</td>
            <td valign="top">
                Y</td>
            <td valign="top">
                N</td>
            <td valign="top">
                N</td>
        </tr>
        <tr>
            <td valign="top">
                StateProvince</td>
            <td valign="top">
                Y</td>
            <td valign="top">
                N</td>
            <td valign="top">
                N</td>
            <td valign="top">
                N</td>
        </tr>
        <tr>
            <td valign="top">
                SupplierPartId</td>
            <td valign="top">
                N</td>
            <td valign="top">
                N</td>
            <td valign="top">
                Y</td>
            <td valign="top">
                N</td>
        </tr>
        <tr>
            <td valign="top">
                Tax</td>
            <td valign="top">
                N</td>
            <td valign="top">
                Y</td>
            <td valign="top">
                Y</td>
            <td valign="top">
                N</td>
        </tr>
        <tr>
            <td valign="top">
                Total</td>
            <td valign="top">
                N</td>
            <td valign="top">
                Y</td>
            <td valign="top">
                Y</td>
            <td valign="top">
                N</td>
        </tr>
        <tr>
            <td valign="top">
                UnitPrice</td>
            <td valign="top">
                N</td>
            <td valign="top">
                N</td>
            <td valign="top">
                Y</td>
            <td valign="top">
                N</td>
        </tr>
    </tbody>
</table>
<font size="-2"><a href="#top">Return to Top</a></font>
<br />
