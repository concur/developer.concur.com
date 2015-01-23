
        <div id="main" class="container">
            <div>
                            </div>
            <div class="row">
                <div class="span12">
<div class="breadcrumbs"><a href="/">Home</a>User Web Service</div>
                </div>
            </div>

            <div id="content-wrapper">
<!-- <div class="row"> -->
                <div id="content" class="span9">
            # User Web Service
                    <div class="section">
                    <div id="node-401" class="node clear-block">


    
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
                The User web service allows third-party developers or clients to add, update or inactivate Concur users at any time of day. This web service provides access to the fields on the Employee Profile form.<br />
                <br />
                The User web service provides a similar level of functionality to the <a href="http://www.concurtraining.com/customers/tech_pubs/Docs/_Current/UG_Shr/Shr_UG_User_Import.pdf" target="_blank">User Import</a> spreadsheet, with the convenience of a web service. The User web service is not intended to be a replacement for the <a href="http://www.concurtraining.com/customers/tech_pubs/Docs/_Current/SPECS/Spc_Exp/ExpIESpc_Chp_4_Emp_Imp.pdf" target="_blank">Employee Import</a>.<br />
                <br />
                The Travel Profile information can be viewed using the <a href="https://developer.concur.com/node/496">Travel Profile</a> web service. Travel Suppliers can update the loyalty program information only.</td>
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
                        **Expense** for Concur Standard
                    * 
                        **Invoice** for Concur Professional/Premium
                    * 
                        **Invoice** for Concur Standard
                    * 
                        **Travel Request** for Concur Professional/Premium
                
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
                Concur products are highly configurable, and not all clients will have access to all features.<br />
                <br />
                Partner developers must determine which configurations are required for their solution prior to the application review process. Use the <a href="https://developer.concur.com/forums/concur-connect">Developer Forum</a> if you have questions about the configuration settings.<br />
                <br />
                Existing clients can work with Concur Advantage Technical Services to create customapplications that work with their configuration.</td>
        </tr>
        <tr class="GrayTableHead">
            <td>
                Resources</td>
            <td>
                Additional Information</td>
        </tr>
        <tr>
            <td>
                <a href="https://developer.concur.com/node/405">User</a>
                <a href="https://developer.concur.com/node/403">User Password</a>
                <a href="https://developer.concur.com/node/407">Employee Form Field</a>
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
**<a id="usererrors" name="usererrors"></a>User Errors **
The web service will not return a 4xx HTTP response code for a batch operation even when every item in the batch failed to be created or updated. The client must inspect the response to look for warnings or errors with individual batch items.<br />
    <br />
    When there are errors with batch items, the first ten errors are returned in the <span class="codeexample"><errors> element in the request response, which includes their error code, the item that caused the error, and the error message. Any additional error messages are truncated. This prevents a large volume of error data in the event of a formatting mistake.
**Error Messages**
<table border="1" bordercolor="#dbdbdb" cellpadding="3" cellspacing="0" width="90%">
    <tbody>
        <tr class="GrayTableHead">
            <td valign="top" width="30%">
                Message</td>
            <td valign="top" width="70%">
                Description</td>
        </tr>
        <tr>
            <td valign="top">
                Maximum User Records per Batch Exceeded</td>
            <td valign="top">
                The batch request contains over 500 records.</td>
        </tr>
        <tr>
            <td valign="top">
                Missing Required Parameters</td>
            <td valign="top">
                This message will be returned if:
                
                    * 
                        Fields that are required are missing.
                
            </td>
        </tr>
        <tr>
            <td valign="top">
                The Request XML is invalid</td>
            <td valign="top">
                The request XML is not properly formatted.</td>
        </tr>
        <tr>
            <td valign="top">
                User Creation Failed</td>
            <td valign="top">
                The user creation process failed to complete.</td>
        </tr>
        <tr>
            <td valign="top">
                Invalid Input: <em>elementname </em></td>
            <td valign="top">
                The value for the specified element is invalid.</td>
        </tr>
        <tr>
            <td valign="top">
                Form Fields are Invalid or Empty</td>
            <td valign="top">
                One or more of the Employee form fields are invalid or empty.</td>
        </tr>
        <tr>
            <td valign="top">
                Unknown Error</td>
            <td valign="top">
                The web service encountered an unknown error while processing the request. Try again later.</td>
        </tr>
    </tbody>
</table>
<font size="-2"><a href="#top">Return to Top</a></font>
<br />
