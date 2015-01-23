
        <div id="main" class="container">
            <div>
                            </div>
            <div class="row">
                <div class="span12">
<div class="breadcrumbs"><a href="/">Home</a>Extract Web Service</div>
                </div>
            </div>

            <div id="content-wrapper">
<!-- <div class="row"> -->
                <div id="content" class="span9">
            # Extract Web Service
                    <div class="section">
                    <div id="node-380" class="node clear-block">


    
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
            <td colspan="2">
                Description</td>
        </tr>
        <tr>
            <td colspan="2">
                The Concur Extract Web Service provides an automated solution to clients who would like to request an extract of available data objects such as approved expense reports and payment requests (i.e., invoices or check requests). This web service solves several business problems:
                
                    * 
                        Files are difficult to manage: The service provides access to extract files using HTTPS to move or manage these files, providing an alternative to using a secure FTP site.
                    * 
                        Need for multiple extract schedules: Clients with organizational units around the globe can create and receive extracts at the times useful for their respective time zones. To accomplish this, clients will need to arrange with Concur to create a unique Extract Definition for each organizational unit that requires an extract file.
                    * 
                        Real-Time access to approved expense reports and payment requests: The service provides clients a way to receive extract files throughout the day including, but not limited to, outside the Overnight Processing Period (ONP). To accomplish real-time access, the client can make requests for extracts every few minutes continuously throughout the day.
                
                **Who should use this web service? **<br />
                <br />
                Developers and clients who use the Integration Administrator tool to manage their batch definitions and batch job schedules, and who use FTP to retrieve their batch files. This includes clients using Concur Professional or Premium.<br />
                <br />
                Clients using Concur Small Business, Concur Standard, and the Concur Connect Developer Sandbox should refer to the <a href="https://developer.concur.com/node/425">Payment Batch File </a> web service.</td>
        </tr>
        <tr class="GrayTableHead">
            <td colspan="2">
                Works With These Concur Products</td>
        </tr>
        <tr>
            <td colspan="2">
                
                    * 
                        **Expense** for Concur Professional/Premium
                    * 
                        **Invoice** for Concur Professional/Premium
                
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
                The Extract web service is not supported in the developer sandbox at this time.
                Concur products are highly configurable, and not all clients will have access to all features.
                Partner developers must determine which configurations are required for their solution prior to the review process. Use the <a href="https://developer.concur.com/forums/concur-connect">Developer Forum</a> if you have questions about the configuration settings.
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
                <a href="https://developer.concur.com/node/381">Extract Definition</a>
                <a href="https://developer.concur.com/node/386">Extract File</a>
                <a href="https://developer.concur.com/node/383">Extract Job</a>
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
<br />
