
        <div id="main" class="container">
            <div>
                            </div>
            <div class="row">
                <div class="span12">
<div class="breadcrumbs"><a href="/">Home</a>Itinerary: TripLink Suppliers </div>
                </div>
            </div>

            <div id="content-wrapper">
<!-- <div class="row"> -->
                <div id="content" class="span9">
            # Itinerary: TripLink Suppliers 
                    <div class="section">
                    <div id="node-550" class="node clear-block">


    
    <div class="content clear-block">
                <script>
  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

  ga('create', 'UA-41161356-1', 'concur.com');
  ga('send', 'pageview');

</script><style type="text/css">
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
.xml-tag {color: #0000e6}</style><a name="top"></a>
<table border="1" bordercolor="#dbdbdb" cellpadding="3" cellspacing="0" width="100%">
<tbody>
<tr class="GrayTableHead">
<td colspan="2">
                Description</td>
</tr>
<tr>
<td colspan="2">
                The Concur Itinerary Web Service allows TripLink - Open Booking suppliers to view and create travel related events in the Concur Travel system. Suppliers can post bookings for their travel type, and get itinerary details.
                This documentation is designed for use by the TripLink - Open Booking Suppliers. TMCs and third party developers should use the <a href="https://developer.concur.com/node/510">TMC Itinerary Web Service</a> documentation instead.</td>
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
                        **Expense** for Concur Professional/Premium
* 
                        **Expense** for Concur Standard

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

Detailed descriptions of requests and responses are available in the documentation for each function.
</td>
</tr>
<tr class="GrayTableHead">
<td colspan="2">
                Product Restrictions</td>
</tr>
<tr>
<td colspan="2">
                This web service is designed for use by TripLink - Open Booking Suppliers. If you are a TripLink - Open Booking Supplier who would like to start using this web service, please visit: <a href="http://www.concur.com/en-us/connect-platform/suppliers">http://www.concur.com/en-us/connect-platform/suppliers</a> or contact the <a href="mailto: connect@concur.com">Concur Connect Platform Team</a>.
                Concur products are highly configurable, and not all clients will have access to all features.
                Partner developers must determine which configurations are required for their solution prior to the review process. Use the <a href="https://developer.concur.com/forums/concur-connect">Developer Forum</a> if you have questions about the configuration settings.</td>
</tr>
<tr class="GrayTableHead">
<td colspan="2">
                Authentication</td>
</tr>
<tr>
<td colspan="2">
                The Itinerary web service supports <a href="https://developer.concur.com/node/491">OAuth 2.0</a>. The supplier can request or send travel bookings using an OAuth token for the user the travel booking belongs to, generated with the user's involvement.</td>
</tr>
<tr class="GrayTableHead">
<td>
                Resources</td>
<td>
                Additional Information</td>
</tr>
<tr>
<td>
<a href="https://developer.concur.com/node/552">Booking</a>
<a href="https://developer.concur.com/node/551">Itinerary</a> (Trip)
<a href="https://developer.concur.com/node/504">Notification Subscription</a>
</td>
<td valign="top">
<a href="#responses">Responses and Errors</a>
<a href="#faq">Itinerary FAQ</a>
<a href="https://developer.concur.com/node/546">Booking Object Elements</a>
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
    Can other suppliers see all the booking details of my bookings?
<blockquote>The Itinerary web service will return the full booking details to a supplier who will provide the booked service. Suppliers that are not the service provider will receive a subset of the possible fields. These vary by type of booking relative to the type of supplier:

* 
            For example, Air booking suppliers that are not the supplier will not see the following fields:

* 
                    Vendor, FlightNumber, StartDateLocal, and StartDateUtc



</blockquote>
####
    When do I send Itineraries vs. Bookings?

* 
        TMCs, OTA or partners that own or manage the entire trip on behalf of the traveler should send trips.
* 
        Travel Suppliers such as Hotel, Car Vendors, or Airlines that are the booking source for parts of the trips should send bookings.
* 
        Posted bookings are merged with any existing trips if their dates overlap.
* 
        Posted trips are not merged even if a trip already exists with overlapping dates.

####
    What vendor codes can I use when sending air segments?
<blockquote>Refer to the <a href="https://developer.concur.com/sites/default/files/SemanticsAndVendorCodes.pdf" target="_blank">Semantics and Vendor Codes</a> document for the full list.
</blockquote>
####
    Can I view a trip posted through the Itinerary web service in the Concur UI?
<blockquote>Yes. The user that owns the trip will see the trip on their My Concur page. If the trip is in future it will show under the upcoming trip list. For trips ready to expense they will show in the expense report list.
</blockquote>
####
    Why does my new booking not showing in the UI? The request returned successfully with HTTP status - 200 OK.
<blockquote>Posted bookings are automatically merged with any existing trip with overlapping dates. Most likely, a trip exists with the same dates, and the booking has been added to it.
</blockquote>
####
    Will posted bookings be overwritten by emailed or TripIt trips?
<blockquote>No.
</blockquote>
####
    Will posted bookings merge with existing Cliqbook or TripIt trips?
<blockquote>Yes.
</blockquote>
####
    Will posted trips merge with existing trips?
<blockquote>No.
</blockquote>
<blockquote><font size="-2"><a href="#top">Return to Top</a></font>
</blockquote>

