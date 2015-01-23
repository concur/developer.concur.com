
        <div id="main" class="container">
            <div>
                            </div>
            <div class="row">
                <div class="span12">
<div class="breadcrumbs"><a href="/">Home</a>Hotel Direct Connect</div>
                </div>
            </div>

            <div id="content-wrapper">
<!-- <div class="row"> -->
                <div id="content" class="span9">
            # Hotel Direct Connect
                    <div class="section">
                    <div id="node-434" class="node clear-block">


    
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
                The Hotel Services Direct Connect from Concur Connect provides a method for Travel users to access hotel inventory.<br />
                <br />
                Once the hotel supplier has developed and certified their interface with Concur, their inventory will begin appearing in hotel searches by opted-in Travel users.<br />
                <br />
                This callout differs from the inbound Concur web services in the following ways:
                
                    * 
                        It uses an outbound message where Travel calls a public facing API endpoint provided by the hotel supplier.
                    * 
                        The supplier configures and maintains the public web service interface. This guide specifies the request and response format required by Concur.
                
            </td>
            <td valign="top">
                
                    * 
                        **Travel** for Concur Professional/Premium
                    * 
                        **Travel** for Concur Standard
                
            </td>
        </tr>
        <tr class="GrayTableHead">
            <td colspan="2">
                Product Restrictions</td>
        </tr>
        <tr>
            <td colspan="2">
                This direct connect is only available to Travel Suppliers with Hotel inventory. This direct connect is not supported in the Concur mobile application.<br />
                <br />
                Concur products are highly configurable, and not all clients will have access to all features.<br />
                <br />
                Partner developers must determine which configurations are required for their solution prior to the application review process. Use the <a href="https://developer.concur.com/forums/concur-connect">Developer Forum</a> if you have questions about the configuration settings.</td>
        </tr>
        <tr class="GrayTableHead">
            <td colspan="2">
                Hotel Process Overview</td>
        </tr>
        <tr>
            <td colspan="2">
                The configuration process has the following steps:
                <ol>
                    * 
                        The Hotel Supplier creates the application on their system that will accept the requests from Concur and return the appropriate responses.
                    * 
                        The Hotel Supplier creates the endpoint on their system that Concur uses to access their inventory.
                    * 
                        Concur creates a production company for the hotel supplier.
                    * 
                        The Hotel Supplier registers their application with Concur by logging in to their production company.
                    * 
                        Concur and the Hotel Supplier validate the application:
                        
                            * 
                                The Hotel Supplier develops to the Concur API and provides a test system.
                            * 
                                The Hotel Supplier provides the URIs and credentials for their test system to Concur.
                            * 
                                Concur sets up the vendor in the certification systems and runs a series of tests to validate the interaction between the two systems.
                            * 
                                Once certification passes, the Hotel supplier sends Concur the production URIs and credentials.
                            * 
                                Concur updates the production servers with the supplier&rsquo;s production data and does a test booking. Upon successful completion, the supplier will be live in Concur for any customer to enable.
                        
                    
                    * 
                        The Travel client opts in to the Hotel callout (within the Travel Configuration) to allow their users to view and book the available inventory.
                </ol>
                Once the configuration is complete, the callout uses the following process:
                <ol>
                    * 
                        The user searches for hotels when creating an itinerary in Travel.
                    * 
                        Travel sends the search request to the endpoint, using the Post HotelSearch.
                    * 
                        The supplier returns the properties.
                    * 
                        Travel sends a request for rates for some of the properties using the Post HotelAvail request. The number of properties is configurable with a current maximum of 25. More than one property may be specified in each Post HotelAvail request.
                    * 
                        If the user chooses to reserve a hotel room, Travel sends the Post HotelBookingRule and shows the booking and cancellation policies to the user.
                    * 
                        If the user accepts the policy, Travel sends the Post HotelRes.
                    * 
                        Travel will send Post HotelItin requests to show the user their reservation. This will happen whenever the user views their itinerary.
                </ol>
                This callout can also be used to perform the following functions:
                
                    * 
                        Get Hotel Availabililty on a Property that was not priced in the original request
                    
                    * 
                        Get the Reservation Details
                    
                    * 
                        Modify the Hotel Reservation
                    
                    * 
                        Cancel the Hotel Reservation
                    
                
            </td>
        </tr>
        <tr class="GrayTableHead">
            <td colspan="2">
                Hotel URL Structure</td>
        </tr>
        <tr>
            <td colspan="2">
                The hotel direct connect sends the relevant information to a URL that the travel supplier maintains.<br />
                    A recommended URL structure is: https://{servername}/concur/hotel/v1/<br />
                    <br />
                    The URL is provided by the supplier when registering the partner application.<br />
                    <br />
                    You can use either one endpoint for all messages, or a dedicated one for each message type. In that case you have to follow these rules:
                The only allowed difference between the endpoint URLs can be the message name (without OTA_ and RQ/RS):<br />
                    https://{servername}/concur/hotel/v1/HotelSearch<br />
                    https://{servername}/concur/hotel/v1/HotelAvail
                The variable part doesn&rsquo;t need to be at the end:<br />
                    https://{servername}/concur/hotel/HotelSearch/v1/<br />
                    https://{servername}/concur/hotel/HotelAvail/v1/
            </td>
        </tr>
        <tr class="GrayTableHead">
            <td colspan="2">
                <a id="security" name="security"></a>Security</td>
        </tr>
        <tr>
            <td colspan="2">
                Concur will make calls to the application connector&rsquo;s endpoint using SSL. During configuration, Concur will connect to the application connector to validate that its hostname and access credentials are valid.<br />
                Concur will not be able to connect to the application connector until a certificate signed by a Certificate Authority (CA) is installed in the application connector. If you are hosting the application connector, you will need to install the signed certificate before Concur can access the connector.<br />
                Concur will use Http Basic authentication. The hotel supplier will need to provide credentials that Concur will send to the supplier&rsquo;s system for each message.</td>
        </tr>
        <tr class="GrayTableHead">
            <td colspan="2">
                <a id="auth" name="auth"></a>Outbound Messages</td>
        </tr>
        <tr>
            <td colspan="2">
                The Concur outbound message format is based upon a subset of the <a href="http://www.opentravel.org/Specifications/SchemaIndex.aspx?FolderName=2011B">OTA2011B hotel standard</a>. Please refer to the Function links below for the details of the request and response format.<br />
                <br />
                Please note the following general information about this format:
                
                    * 
                        All messages are stateless; there is no session and a message may come from a different Travel IP address.
                    * 
                        Preferred language will be sent in all requests. Hotel suppliers should make a best effort to return the users preferred language. If the users preferred language is not supported, a default language may be used instead.
                    * 
                        A customer identifier will be sent in all requests. The intent of this is to provide customer specific data such as hotel preference and special customer discounts or policies.
                    * 
                        Gzip compression is supported in requests and responses. This is controlled through the normal http gzip protocols and is not required.
                    * 
                        All responses will be limited to an uncompressed size of 5MB and must return within 30 seconds.
                    * 
                        For Production systems, the current IP address ranges are (you need to enable all of them):<br />
                        o 12.129.29.0/24 and 12.129.32.0/22 (US data center)<br />
                        o 84.14.175.224/27 and 62.23.83.128/25 (EU data center)
                
            </td>
        </tr>
        <tr class="GrayTableHead">
            <td>
                Functions</td>
            <td>
                Additional Information</td>
        </tr>
        <tr>
            <td>
                <a href="https://developer.concur.com/node/435">Post Availability Search</a>
                <a href="https://developer.concur.com/node/436">Post Booking Rule Search</a>
                <a href="https://developer.concur.com/node/437">Post Hotel Search</a>
                <a href="https://developer.concur.com/node/438">Post New Reservation</a>
                <a href="https://developer.concur.com/node/440">Post Reservation Cancellation</a>
                <a href="https://developer.concur.com/node/527">Post Reservation Update </a>
                <a href="https://developer.concur.com/node/439">Post Reservation Query</a>
                
            </td>
            <td valign="top">
                <a href="#trv">Concur Travel Configuration </a>
                <a href="#versioning">Versioning</a>
                <a href="#certification">Certification</a>
                <a href="#responses">Responses and Errors</a>
                <a href="#generalreqs">General Requirements </a>
                <a href="https://developer.concur.com/sites/default/files/HotelCodes.pdf">Hotel Direct Connect Codes (PDF)</a>
                
            </td>
        </tr>
    </tbody>
</table>
### 
    <a id="trv" name="trv"></a>Concur Travel Configuration
The Travel clients opt in to the Hotel inventory using a setting in the Travel Configuration. Clients must contact Concur to have this setting activated.
### 
    <a id="versioning" name="versioning"></a>Versioning
In most cases, new versions of Hotel Services will involve adding support for various optional nodes and attributes in the OTA standards. These changes will be backwards compatible and should not require any mandatory changes and hotel suppliers will be upgrade automatically. In the situation where a change is implemented which cannot be made backwards compatible, suppliers will need to upgrade the Hotel Services interface by and provide a new set of hotel URIs. Concur recommends that the version of the interface be part of the hotel URI provided by the hotel suppliers.
### 
    <a id="certification" name="certification"></a>Certification
The certification process will start once the vendor has completed their integration with the Concur certification systems. Certification consists of running through several use cases on the certification servers and validating that in each scenario the correct response is sent. Typically, most potential issues are being worked out during the integration process and certification can be accomplished in a day or two. An example of a use case during certification would be a user searching and booking a property several months out, viewing an itinerary, changing the dates of the property, and then cancelling the reservation.
### 
    <a id="reponses" name="reponses"></a>Responses and Errors
For error handling we don&rsquo;t use any special message. Just return the appropriate response, only replace Success node with Errors and provide some error description. Please follow the OTA Code Table for error codes. Please provide as descriptive error text as possible. It will make tracing problems lot easier on both sides.
### 
    <a id="generalreqs" name="generalreqs"></a>General Requirements
Information on format or value requirements that are used in multiple endpoints is included here.
**Codes**
All the codes used by the Hotel Direct Connect are documented in the <a href="https://developer.concur.com/sites/default/files/HotelCodes.pdf">Hotel Direct Connect Code PDF</a>.
**Corporate Identifier**
The corporate identifier will be passed as RequestorID node. The values will be configured on setup. Please keep the Type compliant with <a href="#idtype"> ID Type Codes</a>.
<pre class="overflow_box">
<POS>
    <Source <span class="xml-attribute">ISOCountry=<span class="xml-value">&quot;US&quot; <span class="xml-attribute">ISOCurrency=<span class="xml-value">&quot;USD&quot;>
        <RequestorID <span class="xml-attribute">Type=<span class="xml-value">&quot;4&quot; <span class="xml-attribute">ID=<span class="xml-value">&quot;7777777&quot; <span class="xml-attribute">ID_Context=<span class="xml-value">&quot;MyHotel&quot; />
    </Source>
</POS>
</pre>
If a vendor requires additional identification of the client system (all calls to vendor will have the same value), you can provide a second RequestorID:
<pre class="overflow_box">
<POS>
    <Source <span class="xml-attribute">ISOCountry=<span class="xml-value">&quot;US&quot; <span class="xml-attribute">ISOCurrency=<span class="xml-value">&quot;USD&quot;>
        <RequestorID <span class="xml-attribute">Type=<span class="xml-value">&quot;4&quot; <span class="xml-attribute">ID=<span class="xml-value">&quot;7777777&quot; <span class="xml-attribute">ID_Context=<span class="xml-value">&quot;MyHotel&quot; />
        <RequestorID <span class="xml-attribute">Type=<span class="xml-value">&quot;7&quot; <span class="xml-attribute">ID=<span class="xml-value">&quot;8172927&quot; <span class="xml-attribute">ID_Context=<span class="xml-value">&quot;WholeTravel&quot; />
    </Source>
</POS>
</pre>
Please keep the Type compliant with <a href="#idtype"> ID Type Codes</a>. The supported codes for the Requestor ID Type are: 1,2,3,4,5,7,9,13,18,21
<a id="idtypes" name="idtypes"></a>**ID Type Codes Table**
<blockquote>
    <table border="1" bordercolor="#DBDBDB" cellpadding="3" cellspacing="0" width="100% ">
        <tbody>
            <tr class="GrayTableHead">
                <td valign="top" width="30%">
                    Code</td>
                <td valign="top" width="70%">
                    Description</td>
            </tr>
            <tr>
                <td valign="top">
                    1</td>
                <td valign="top">
                    Customer</td>
            </tr>
            <tr>
                <td valign="top">
                    2</td>
                <td valign="top">
                    CRO (Customer Reservations Office)</td>
            </tr>
            <tr>
                <td valign="top">
                    3</td>
                <td valign="top">
                    Corporation representative</td>
            </tr>
            <tr>
                <td valign="top">
                    4</td>
                <td valign="top">
                    Company</td>
            </tr>
            <tr>
                <td valign="top">
                    5</td>
                <td valign="top">
                    Travel agency</td>
            </tr>
            <tr>
                <td valign="top">
                    6</td>
                <td valign="top">
                    Airline</td>
            </tr>
            <tr>
                <td valign="top">
                    7</td>
                <td valign="top">
                    Wholesaler</td>
            </tr>
            <tr>
                <td valign="top">
                    8</td>
                <td valign="top">
                    Car rental</td>
            </tr>
            <tr>
                <td valign="top">
                    9</td>
                <td valign="top">
                    Group</td>
            </tr>
            <tr>
                <td valign="top">
                    10</td>
                <td valign="top">
                    Hotel</td>
            </tr>
            <tr>
                <td valign="top">
                    11</td>
                <td valign="top">
                    Tour operator</td>
            </tr>
            <tr>
                <td valign="top">
                    12</td>
                <td valign="top">
                    Cruise line</td>
            </tr>
            <tr>
                <td valign="top">
                    13</td>
                <td valign="top">
                    Internet broker</td>
            </tr>
            <tr>
                <td valign="top">
                    14</td>
                <td valign="top">
                    Reservation</td>
            </tr>
            <tr>
                <td valign="top">
                    15</td>
                <td valign="top">
                    Cancellation</td>
            </tr>
            <tr>
                <td valign="top">
                    18</td>
                <td valign="top">
                    Other</td>
            </tr>
            <tr>
                <td valign="top">
                    21</td>
                <td valign="top">
                    Profile</td>
            </tr>
            <tr>
                <td valign="top">
                    25</td>
                <td valign="top">
                    Associated reservation</td>
            </tr>
            <tr>
                <td valign="top">
                    26</td>
                <td valign="top">
                    Associated itinerary reservation</td>
            </tr>
            <tr>
                <td valign="top">
                    27</td>
                <td valign="top">
                    Associated shared reservation</td>
            </tr>
            <tr>
                <td valign="top">
                    32</td>
                <td valign="top">
                    Merchant</td>
            </tr>
            <tr>
                <td valign="top">
                    33</td>
                <td valign="top">
                    Acquirer</td>
            </tr>
            <tr>
                <td valign="top">
                    34</td>
                <td valign="top">
                    Master reference</td>
            </tr>
            <tr>
                <td valign="top">
                    35</td>
                <td valign="top">
                    Purged master reference</td>
            </tr>
            <tr>
                <td valign="top">
                    36</td>
                <td valign="top">
                    Parent reference</td>
            </tr>
            <tr>
                <td valign="top">
                    37</td>
                <td valign="top">
                    Child reference</td>
            </tr>
            <tr>
                <td valign="top">
                    38</td>
                <td valign="top">
                    Linked reference</td>
            </tr>
            <tr>
                <td valign="top">
                    39</td>
                <td valign="top">
                    Contract</td>
            </tr>
            <tr>
                <td valign="top">
                    40</td>
                <td valign="top">
                    Confirmation number</td>
            </tr>
        </tbody>
    </table>
</blockquote>
<br />
