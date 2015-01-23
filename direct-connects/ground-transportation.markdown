
        <div id="main" class="container">
            <div>
                            </div>
            <div class="row">
                <div class="span12">
<div class="breadcrumbs"><a href="/">Home</a>Ground Transportation Direct Connect</div>
                </div>
            </div>

            <div id="content-wrapper">
<!-- <div class="row"> -->
                <div id="content" class="span9">
            # Ground Transportation Direct Connect
                    <div class="section">
                    <div id="node-409" class="node clear-block">


    
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
<table border="1" bordercolor="#DBDBDB" cellpadding="3" cellspacing="0" width="100% ">
    <tbody>
        <tr class="GrayTableHead">
            <td>
                Description</td>
            <td>
                Works With These Concur Products</td>
        </tr>
        <tr>
            <td>
                The Ground Transportation Direct Connect from Concur Connect provides a method for Travel users to access the inventory of ground transportation service providers. This direct connect was originally designed for use by limo service providers, but can be used with all forms of ground transportation.
                Once the ground transportation supplier has developed their interface with with Concur, their inventory will begin appearing in ground transportation searches by opted-in Travel users.
                This callout differs from the inbound Concur web services in the following ways:
                
                    * 
                        It uses an **outbound** **message** where Travel calls a public facing API endpoint provided by the ground transportation supplier.
                    * 
                        The supplier configures and maintains the public web service interface. This guide specifies the request and response format required by Concur.
                
                **NOTE**: This direct connect was originally designed to work with Limo providers, but can support all types of ground transportation.
            </td>
            <td valign="top">
                
                    * 
                        **Travel** for Concur Professional/Premium
                    * 
                        **Travel** for Concur Standard
                
            </td>
        </tr>
        <tr class="GrayTableHead">
            <td>
                Concur Connect Callout Details</td>
            <td>
                Product Restrictions</td>
        </tr>
        <tr>
            <td colspan="">
                Information on how to register and configure the partner application is included in **<a href="https://developer.concur.com/node/203">Partner Applications</a>**.
            </td>
            <td>
                This direct connect is only available to Travel Suppliers with Ground Transportation inventory. This direct connect is not supported in the Concur mobile application.
                Concur products are highly configurable, and not all clients will have access to all features.
                Partner developers must determine which configurations are required for their solution prior to the review process. Use the <a href="https://developer.concur.com/forums/concur-connect">Developer Forum</a> if you have questions about the configuration settings.
            </td>
        </tr>
        <tr class="GrayTableHead">
            <td colspan="2">
                Ground Transportation Process Overview</td>
        </tr>
        <tr>
            <td colspan="2">
                The configuration process has the following steps:
                <ol>
                    * 
                        The Travel Supplier creates the application on their system that will accept the requests from Concur and return the appropriate responses.
                    * 
                        The Travel Supplier creates the endpoint on their system that Concur uses to access their inventory.
                    * 
                        Concur creates a production company for the travel supplier.
                    * 
                        The Travel Supplier registers their application with Concur by logging in to their production company.
                    * 
                        Concur configures Travel to send requests to the endpoint.
                    * 
                        The Travel client opts in to the Ground Transportation callout (within the Travel Configuration) to allow their users to view and book the available inventory.<br />
                        
                </ol>
                Once the configuration is complete, the callout uses the following process:
                <ol>
                    * 
                        The user searches for ground transportation when creating an itinerary in Travel.
                    * 
                        Travel sends the search details to the endpoint, using the Post Search Request.
                    * 
                        The supplier returns the search results.
                    * 
                        If the user chooses to reserve the ride, Travel sends the Post Sell Request.
                    * 
                        The supplier returns the Post Sell Reply.
                </ol>
                This callout can also be used to perform the following functions:
                
                    * 
                        Get the Reservation Details
                    * 
                        Cancel the Ground Transportation Reservation
                    * 
                        Update the Ground Transportation Reservation with the Supplier
                    * 
                        Update the Ground Transportation Reservation with Travel
                
            </td>
        </tr>
        <tr class="GrayTableHead">
            <td colspan="2">
                <a id="auth" name="auth"></a>Authentication</td>
        </tr>
        <tr>
            <td colspan="2">
                Authentication between Concur and the application connector is performed using OAuth. Refer to the OAuth documentation <a href="https://developer.concur.com/node/491">here</a> for more information.</td>
        </tr>
        <tr class="GrayTableHead">
            <td>
                Functions</td>
            <td>
                Additional Information</td>
        </tr>
        <tr>
            <td>
                <a href="https://developer.concur.com/node/422">Cancel Reservation</a>
                <a href="https://developer.concur.com/node/415">Post Reservation Detail Search</a>
                <a href="https://developer.concur.com/node/421">Post Reservation Sell</a>
                <a href="https://developer.concur.com/node/414">Post Transportation Search</a>
                <a href="https://developer.concur.com/node/423">Update Reservation with the Supplier</a>
                <a href="https://developer.concur.com/node/424">Update Reservation with Travel</a>
            </td>
            <td valign="top">
                <a href="#trv">Concur Travel Configuration </a>
                <a href="#responses">Responses and Errors</a>
                <a href="#GDSsellformats">GDS Sell Formats</a>
            </td>
        </tr>
    </tbody>
</table>
### 
    <a id="trv" name="trv"></a>Concur Travel Configuration
The Travel clients opt in to the Ground Transportation inventory using a setting in the Travel Configuration. Clients must contact Concur to have this setting activated.
### 
    <a id="reponses" name="reponses"></a>Responses and Errors
Refer to the <a href="https://developer.concur.com/node/205">HTTP Codes</a> page for details of the common responses and errors.
### 
    <a id="GDSsellformats" name="GDSsellformats"></a>GDS Sell Formats
**Sabre:**<br />
    1 OTH LM 14MAY M GK1 DCA/PCI QA TEST/TEL 201 555 1212/RATE-$0.00/CONF-/PICKUP-209 MADISON ST SUITE 400 ALEXANDRIAVA 22314 AT 0900/DROPOFF-DCA AIRPORT AT 0915/203121365/RESERVATION L1
**Apollo**:<br />
    1 LIM ZM GK1 DCA 09MAY-/PCI QA TEST-TEL 2015551212/RATE-$0.00/CONF-/PICKUP-209 MADISON ST SUITE 400&quot;ALEXANDRIA&quot;VA&quot;22314 AT 0900/DROPOFF-DCA AIRPORT/52695871/RESERVATION L1
**Abacus: **<br />
    1 OTH LM 14MAY M GK1 DCA/PCI QA TEST/TEL 201 555 1212/RATE-$0.00/CONF-/PICKUP-209 MADISON ST SUITE 400 ALEXANDRIAVA 22314 AT 0900/DROPOFF-DCA AIRPORT AT 0915/203121365/RESERVATION L1
**Galileo:**<br />
    TUR ZM AK1 SEA 15DEC-/FALCON DES-TEL 8666932526/RATE-50.00 HOURLY-2 HR MIN/CONF-/PU-18400 AT 0900/DO-SEA/771297634/RES
**Amadeus: **<br />
    2 MIS 1A HK1 LGA 13SEP-LMO CAPITAL LIMOUSINE/TEL-800 225 1656/RATE-USD24.00 FLAT/CONF-132625/PICKUP-55 WALL STREET NEW YORK NY 10005 AT 0530/DROPOFF- LGA AIRPORT AT 0600/RID-132625760
<br />
