
        <div id="main" class="container">
            <div>
                            </div>
            <div class="row">
                <div class="span12">
<div class="breadcrumbs"><a href="/">Home</a>Quick Expense Web Service</div>
                </div>
            </div>

            <div id="content-wrapper">
<!-- <div class="row"> -->
                <div id="content" class="span9">
            # Quick Expense Web Service
                    <div class="section">
                    <div id="node-506" class="node clear-block">


    
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
                The Quick Expense web service gives developers the ability to easily create basic expenses without requiring any client or user specific Expense configuration data. Expense applications, such as Concur Expense or Concur Connect partner applications, can consume quick expenses, providing developers a way to create expense capture applications that are product independent.The Quick Expense format is designed to be an open expense format, allowing any developer who wants to work with expense data the chance to do so.
                The Quick Expense format uses the minimum required fields, so that expenses can be created with almost any amount of expense data. Optional fields allow the developer to capture any additional data that the user provides. New quick expenses are associated to either the OAuth consumer, or in the case the OAuth consumer is a Concur Expense user, the supplied Concur user ID.
                The Quick Expense web service works with any Concur Connect partner application that wants to post or get quick expenses. The owner for the quick expense must be a Concur Expense user. The Quick Expense web service is different from the Expense Report web service in that quick expenses aren&rsquo;t associated to an expense report.
                The Quick Expense web service allows developers to:
                <ul type="disc">
                    * 
                        Post an expense entry to Concur without requiring any client specific configuration data.
                    * 
                        Get a list of quick expenses for a company or auser.
                
                Concur Expense consumes quick expenses posted for OAuth Consumers that are Concur Expense users.Expense users can view quick expenses or add them to expense reports these ways:
                
                    * 
                        Using the Expenses area of the Concur mobile application
                    * 
                        Using the Smart Expenses list when creating a new report online
                    * 
                        Opening the Smart Expenses list by selecting the Import menu item on an existing report
                
                **Who Should Use This Web Service? **<br />
                <br />
                Developers who gather basic expense data and untrusted receipts (such as pictures of paper receipts or emails) can use this web service to create expenses in Concur. Quick expenses can be added to an expense report in Concur or any other Concur Connect partner application. The developers can send a receipt image using the <a href="https://developer.concur.com/node/388">Imaging</a> web service, then use the identifier to attach it to the expense using Quick Expense.</td>
        </tr>
        <tr class="GrayTableHead">
            <td>
                Works With These Concur Products</td>
        </tr>
        <tr>
            <td>
                
                    * 
                        **Expense** for Concur Professional/Premium
                    * 
                        **Expense** for Concur Standard
                
                This web service does not require Concur Expense.
            </td>
        </tr>
        <tr class="GrayTableHead">
            <td>
                Concur API Structure</td>
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
                Authentication</td>
        </tr>
        <tr>
            <td>
                The Quick Expense web service supports the OAuth 2.0 authentication model. This authentication model is covered in detail in** Web Services > <a href="https://developer.concur.com/node/491">OAuth with Concur</a>**. Any additional required elements for the web service requests are covered in the API documentation.</td>
        </tr>
        <tr class="GrayTableHead">
            <td>
                Resources</td>
        </tr>
        <tr>
            <td>
                The version 3.0 documentation includes the data model and tools to send test requests to your developer sandbox.<br />
                <br />
                <a href="https://www.concursolutions.com/api/docs/index.html#!/QuickExpenses" target="_blank">Version 3.0 Quick Expenses</a><br />
                <br />
                Version 1.0 documentation includes the data model and example requests and responses.<br />
                <br />
                <a href="https://developer.concur.com/node/507">Version 1.0 Quick Expense</a></td>
        </tr>
    </tbody>
</table>
## 
    <a name="reponses"></a>Responses and Errors
Refer to the <a href="https://developer.concur.com/node/205">HTTP Codes</a> page for details of the common responses and errors.
<br />
