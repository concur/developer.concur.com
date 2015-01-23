
        <div id="main" class="container">
            <div>
                            </div>
            <div class="row">
                <div class="span12">
<div class="breadcrumbs"><a href="/">Home</a>Itinerary Web Service: TMC and Third-Party Developers</div>
                </div>
            </div>

            <div id="content-wrapper">
<!-- <div class="row"> -->
                <div id="content" class="span9">
            # Itinerary Web Service: TMC and Third-Party Developers
                    <div class="section">
                    <div id="node-510" class="node clear-block">


    
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
.xml-tag {color: #0000e6}   </style>

<a name="top"></a>
<table border="1" bordercolor="#dbdbdb" cellpadding="3" cellspacing="0" width="100%">
    <tbody>
        <tr class="GrayTableHead">
            <td colspan="2">
                Description</td>
        </tr>
        <tr>
            <td colspan="2">
                The Concur Itinerary Web Service allows Travel Management Companies (TMC) and third-party developers to view and create travel related events in the Concur Travel system. TMCs can post bookings for any travel type. This web service can also be used by third party developers to request trip information for Concur users.
                TripLink - Open Booking suppliers have access to a targeted set of itinerary and booking information. These suppliers should view the <a href="https://developer.concur.com/node/550">TripLink - Open Booking Itinerary</a> documentation.
                ### 
                    Agency Proposals
                Travel Management Companies for Concur clients with the Agency Proposal feature of Travel Request can send proposed itineraries using the Itinerary web service. Refer to the <a href="https://developer.concur.com/node/515">Post Itinerary</a> documentation for more information.
            </td>
        </tr>
        <tr class="GrayTableHead">
            <td colspan="2">
                Works With These Concur Products</td>
        </tr>
        <tr>
            <td colspan="2">
                
                    * 
                        **Travel** for Concur Professional/Premium
                    * 
                        **Travel** for Concur Standard
                    * 
                        **Travel Request ** for Concur Professional/Premium
                
            </td>
        </tr>
        <tr class="GrayTableHead">
            <td colspan="2">
                Concur Connect API Structure</td>
        </tr>
        <tr>
            <td colspan="2">
                Refer to **Web Services > <a href="https://developer.concur.com/node/25">Core Concepts</a>** for:
                
                    * 
                        Detailed information regarding the format, structure and process of making calls to a Concur Web Service.
                    * 
                        Information on authentication and authorization for all Concur Web Services.
                    * 
                        Information on registering and enabling partner applications to use Concur Web Services.
                
                Detailed descriptions of requests and responses are available in the documentation for each function. Developers can also view the <a href="https://developer.concur.com/sites/default/files/ItinServices_Public_0.xsd" target="_blank">Public Itinerary XSD</a>. Internet Explorer users should right click the link and choose Save Target As... to view the XSD.
            </td>
        </tr>
        <tr class="GrayTableHead">
            <td colspan="2">
                Product Restrictions</td>
        </tr>
        <tr>
            <td colspan="2">
                This web service is designed for use by TMCs or third party developers. . If you are a TMC or third-party developer who would like to start using this web service, please visit: <a href="http://www.concur.com/en-us/connect-platform/suppliers">http://www.concur.com/en-us/connect-platform/suppliers</a> or contact the <a href="mailto: connect@concur.com">Concur Connect Platform Team</a>.<br />
                <br />
                Concur products are highly configurable, and not all clients will have access to all features.<br />
                <br />
                Partner developers must determine which configurations are required for their solution prior to the review process. Use the <a href="https://developer.concur.com/forums/concur-connect">Developer Forum</a> if you have questions about the configuration settings.</td>
        </tr>
        <tr class="GrayTableHead">
            <td colspan="2">
                Authentication</td>
        </tr>
        <tr>
            <td colspan="2">
                The Itinerary web service supports <a href="https://developer.concur.com/node/491">OAuth 2.0</a>. The travel supplier can request or send travel bookings in two ways:
                
                    * 
                        Using an OAuth token for the user the travel booking belongs to. This token allows access to the user's data.
                    * 
                        Using an OAuth token for a user with an administrative role at the company, which allows access to company-wide information. The user that authenticates during this OAuth process must have a Concur account with one of the following user roles: Web Services Administrator for Professional, or Can Administer for Standard.
                
            </td>
        </tr>
        <tr class="GrayTableHead">
            <td>
                Resources</td>
            <td>
                Additional Information</td>
        </tr>
        <tr>
            <td>
                <a href="https://developer.concur.com/node/511">Booking</a>
                <a href="https://developer.concur.com/node/513">Itinerary</a> (Trip)
                <a href="https://developer.concur.com/node/504">Notification Subscription</a>
            </td>
            <td valign="top">
                <a href="#responses">Responses and Errors</a>
                <a href="#faq">Itinerary FAQ</a>
                <a href="https://developer.concur.com/node/555">Booking Object Elements</a>
            </td>
        </tr>
    </tbody>
</table>
## 
    <a name="reponses"></a>Responses and Errors
Refer to the <a href="https://developer.concur.com/node/205">HTTP Codes</a> page for details of the common responses and errors.
### 
    <a id="faq" name="faq"></a>Itinerary FAQ
This section includes answers to frequently asked questions about the Itinerary web service.
####
    When do I send Trips vs. Bookings?

    * 
        TMCs, OTA or partners that own or manage the entire trip on behalf of the traveler should send trips.
    * 
        Travel Suppliers such as Hotel, Car Vendors or Airlines that own only parts of the trips should send bookings.
    * 
        Posted bookings are merged with any existing trips if their dates overlap.
    * 
        Posted trips are not merged even if a trip already exists with overlapping dates.

####
    How can we save additional charges for hotel and car segments? What types of charges are supported?
<blockquote>
    The Charges element under Car and Hotel segments allow you to save additional charges using Semantics Codes. Refer to the <a href="https://developer.concur.com/sites/default/files/SemanticsAndVendorCodes.pdf" target="_blank">Semantics and Vendor Codes</a> document for more information.
</blockquote>
####
    What vendor codes can I use when sending hotel and car segments?
<blockquote>
    Refer to the <a href="https://developer.concur.com/sites/default/files/SemanticsAndVendorCodes.pdf" target="_blank">Semantics and Vendor Codes</a> document for the full list.
</blockquote>
####
    Can I view a trip posted through the Itinerary web service in the Concur UI?
<blockquote>
    Yes. The user that owns the trip will see the trip on their My Concur page. If the trip is in future it will show under the upcoming trip list. For trips ready to expense they will show in the expense report list.
</blockquote>
####
    When can atrip be expensed?
<blockquote>
    Trips can be expensed **after the trip is over** under the following conditions:
    
        * 
            The trip has a Car, Hotel or Ride segment.
        * 
            The trip has air segment with a ticket and the ticket has at least one valid ticket coupon i.e. in one of the following statuses &ndash; 'OPEN', 'USED', 'PRTD', 'CKIN'
    
    Air segments can be expensed as soon as they have a ticket with a valid coupon, if the company uses the PreExpenseAir option.
</blockquote>
####
    Why does my new booking not showing in the UI? The request returned successfully with HTTP status - 200 OK.
<blockquote>
    Posted bookings are automatically merged with any existing trip with overlapping dates. Most likely, a trip exists with the same dates, and the booking has been added to it.
</blockquote>
####
    Will posted bookings be overwritten by emailed or TripIt trips?
<blockquote>
    No.
</blockquote>
####
    Will posted bookings merge with existing Cliqbook or TripIt trips?
<blockquote>
    Yes.
</blockquote>
####
    Will posted trips merge with existing trips?
<blockquote>
    No.
</blockquote>
<blockquote>
    <font size="-2"><a href="#top">Return to Top</a></font>
</blockquote>
<br />
