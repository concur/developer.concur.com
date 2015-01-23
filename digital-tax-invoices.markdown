
        <div id="main" class="container">
            <div>
                            </div>
            <div class="row">
                <div class="span12">
<div class="breadcrumbs"><a href="/">Home</a>Digital Tax Invoices Web Service</div>
                </div>
            </div>

            <div id="content-wrapper">
<!-- <div class="row"> -->
                <div id="content" class="span9">
            # Digital Tax Invoices Web Service
                    <div class="section">
                    <div id="node-685" class="node clear-block">


    
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
The Digital Tax Invoice web service allows digital tax invoice validators to view tax invoices and update them with a validation status. This web service currently supports the Comprobante Fiscal Digital (CFD) digital tax invoice format used in Mexico. Other countries may be supported in future releases.
### 
                    Process
The Digital Tax Invoice upload feature in Concur Expense allows users in the supported countries to attach the Digital Tax Invoice (CFD) to an expense. Once the tax invoice (in XML) has been added to an expense report, the Digital Tax Invoice web service will allow third-party validators to use the Concur Platform to view and validate the tax information. The validators send their results back to Concur using the web service. The results appear in the expense report for processors and workflow steps to evaluate.
</td>
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
                        **Invoice** Professional

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
This web service is designed for use by third-party tax invoice validators. The validators must create a partner application on the Concur Platform, then the Concur client must grant access to the partner application before the validator can view their data.
Concur products are highly configurable, and not all clients will have access to all features.
Partner developers must determine which configurations are required for their solution prior to the review process. Use the <a href="https://developer.concur.com/forums/concur-connect">Developer Forum</a> if you have questions about the configuration settings
Partner applications must complete the <a href="https://developer.concur.com/node/624/">Concur application review process</a> before they can access production user data.
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
                <a href="https://developer.concur.com/node/686">Digital Tax Invoices </a></td>
<td valign="top">
<a href="#responses">Responses and Errors</a>
<a href="#expconfig">Expense Configuration</a>

</td>
</tr>
</tbody>
</table>
## 
    <a name="reponses"></a>Responses and Errors
Refer to the <a href="https://developer.concur.com/node/205">HTTP Codes</a> page for details of the common responses and errors.
## 
    <a id="expconfig" name="expconfig"></a>Concur Expense Configuration
The Digital Tax Invoice feature must be activated in Concur Expense before clients can use this feature. The feature is activated in the Group Configuration.

