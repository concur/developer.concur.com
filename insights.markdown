
        <div id="main" class="container">
            <div>
                            </div>
            <div class="row">
                <div class="span12">
<div class="breadcrumbs"><a href="/">Home</a>Insights</div>
                </div>
            </div>

            <div id="content-wrapper">
<!-- <div class="row"> -->
                <div id="content" class="span9">
            # Insights
                    <div class="section">
                    <div id="node-644" class="node clear-block">


    
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
The Concur Insights Web service enhances the value to suppliers participating in TripLink by identifying the opportunity to market the supplier's services to users who have booked some but not all segments of a trip. Concur analyzes the trip data and provides actionable opportunities. This service eliminates the need for suppliers to collect and store trip data from Concur and eliminates the need for suppliers to do this analysis themselves.
Concur analyzes trips to determine if each trip contains all the segments that are typical for a trip based on the existing bookings.In addition, the service identifies if a travel services opportunity exists, such as dining. These are available as the Opportunity resource. Other resources will be added in future releases.
Concur TripLink partner suppliers can subscribe to notifications when Concur users that have previously granted the suppliers access to their information create or update bookings that generate insights. Suppliers can also poll regularly for new insights for their opted-in users.
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
                This Web service is designed for use by travel suppliers. If you are a travel supplier who would like to start using this web service, please contact the <a href="mailto: ConcurConnectTech@concur.com">Concur Connect Platform Team</a>.
                Concur products are highly configurable, and not all clients will have access to all features.
                Partner developers must determine which configurations are required for their solution prior to the review process. Use the <a href="https://developer.concur.com/forums/concur-connect">Developer Forum</a> if you have questions about the configuration settings.</td>
</tr>
<tr class="GrayTableHead">
<td colspan="2">
                Authentication</td>
</tr>
<tr>
<td colspan="2">
                The Insights Web service implements <a href="https://developer.concur.com/node/491">OAuth 2.0</a>. The supplier will only be able to access insights for a Concur user if the user has granted the supplier access to their Concur data.</td>
</tr>
<tr class="GrayTableHead">
<td>
                Resources</td>
<td>
                Additional Information</td>
</tr>
<tr>
<td valign="top">
<a href="https://developer.concur.com/node/645">Opportunities</a>
<a href="https://www.concursolutions.com/api/docs/index.html#!/LatestBookings">LatestBookings</a>
</td>
<td valign="top">
                <a href="#responses">Responses and Errors</a></td>
</tr>
</tbody>
</table>
## 
    <a name="reponses"></a>Responses and Errors
Refer to the <a href="https://developer.concur.com/node/205">HTTP Codes</a> page for details of the common responses and errors.

