
        <div id="main" class="container">
            <div>
                            </div>
            <div class="row">
                <div class="span12">
<div class="breadcrumbs"><a href="/">Home</a>Trip Approval Web Service</div>
                </div>
            </div>

            <div id="content-wrapper">
<!-- <div class="row"> -->
                <div id="content" class="span9">
            # Trip Approval Web Service
                    <div class="section">
                    <div id="node-397" class="node clear-block">


    
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
            <td colspan="2">
                Description</td>
        </tr>
        <tr>
            <td colspan="2">
                The Trip Approval web service allows clients to approve or reject trips. Clients send the unique identifier for the trip, the approver email and the workflow action to be performed (either approve or reject).</td>
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
                
            </td>
        </tr>
        <tr class="GrayTableHead">
            <td colspan="2">
                Product Restrictions</td>
        </tr>
        <tr>
            <td colspan="2">
                Concur products are highly configurable, and not all clients will have access to all features.
                Partner developers must determine which configurations are required for their solution prior to the application review process. Use the <a href="https://developer.concur.com/forums/concur-connect">Developer Forum</a> if you have questions about the configuration settings.
                Existing clients can work with Concur Advantage Technical Services to create customapplications that work with their configuration.
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
                <a href="https://developer.concur.com/node/398">Trip Approval</a>
            </td>
            <td valign="top">
                <a href="#responses">Responses and Errors</a>
                
            </td>
        </tr>
    </tbody>
</table>
## 
    <a name="reponses"></a>Responses and Errors
Refer to the <a href="https://developer.concur.com/node/205">HTTP Codes</a> page for details of the common responses and errors.
####
    Error Codes
<table border="1" bordercolor="#DBDBDB" cellpadding="3" cellspacing="0" width="100% ">
    <tbody>
        <tr class="GrayTableHead">
            <td colspan="2" valign="top">
                <a id="errorcodes" name="errorcodes"></a>Error Code Table</td>
        </tr>
        <tr class="GrayTableHead">
            <td valign="top" width="30%">
                Code</td>
            <td valign="top" width="70%">
                Description</td>
        </tr>
        <tr>
            <td valign="top">
                501</td>
            <td valign="top">
                TripId or ItinLocator is missing.</td>
        </tr>
        <tr>
            <td valign="top">
                503</td>
            <td valign="top">
                ManagerId is required. This is sometimes returned when the ApproverLogin is invalid.</td>
        </tr>
        <tr>
            <td valign="top">
                504</td>
            <td valign="top">
                Action is required.</td>
        </tr>
        <tr>
            <td valign="top">
                505</td>
            <td valign="top">
                Invalid Action (must be either approve or reject).</td>
        </tr>
        <tr>
            <td valign="top">
                506</td>
            <td valign="top">
                No tripId found for this ItinLocator or RecordLocator.</td>
        </tr>
        <tr>
            <td valign="top">
                507</td>
            <td valign="top">
                No request data.</td>
        </tr>
        <tr>
            <td valign="top">
                508</td>
            <td valign="top">
                Request data is not well formatted XML.</td>
        </tr>
        <tr>
            <td valign="top">
                509</td>
            <td valign="top">
                XML Validation Error. XML schema validation errors will be supplied, if available.</td>
        </tr>
        <tr>
            <td valign="top">
                510</td>
            <td valign="top">
                TripLocator ir RecordLocator was not found</td>
        </tr>
        <tr>
            <td valign="top">
                600</td>
            <td valign="top">
                An error occured while approving the trip.</td>
        </tr>
        <tr>
            <td valign="top">
                700</td>
            <td valign="top">
                An error occured while rejecting the trip.</td>
        </tr>
    </tbody>
</table>
<br />
