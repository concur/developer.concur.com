
        <div id="main" class="container">
            <div>
                            </div>
            <div class="row">
                <div class="span12">
<div class="breadcrumbs"><a href="/">Home</a>Expense Report Web Service</div>
                </div>
            </div>

            <div id="content-wrapper">
<!-- <div class="row"> -->
                <div id="content" class="span9">
			# Expense Report Web Service
                    <div class="section">
                    <div id="node-465" class="node clear-block">


	
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
.xml-tag {color: #0000e6}
</style>
<a name="top"></a>
<table width="100% "border="1" cellpadding="3" cellspacing="0" bordercolor="#DBDBDB">
<tr class="GrayTableHead">
<td colspan="2">Description</td>
</tr>
<tr>
  <td colspan="2">The  Concur  Expense Report web service allows third-party developers and clients to send and request  Expense data  for  specified users. Developers or clients can also request report data for the entire company. Developers or clients can send expense report information, and can request expense report  and card transaction information. Developers or clients can use this data in a variety of ways, including:
    
      * Sending expense information from a third party application to Concur 
        * Display on a corporate portal site
        * Auditing 
      
      Developers or clients can also request expense configuration data such as expense types, policies, form types and form fields. They can use this configuration data to post expense report information to Concur. 
    Expense reports that are created using this web service are always assigned the default policy of the supplied user. </td></tr>
<tr class="GrayTableHead">
  <td colspan="2">Works With These Concur Products </td>
</tr>
<tr>
  <td colspan="2">
    * **Expense** for Concur Professional/Premium
    * **Expense** for Concur Standard
    </td>
</tr>

<tr class="GrayTableHead">
  <td colspan="2">Concur Connect API Structure </td>
</tr>
<tr>
  <td colspan="2">Refer to **Web Services > <a href="https://developer.concur.com/node/25">Core Concepts</a>** for:
    
      * Detailed information regarding the format, structure and process of making calls to a Concur Web Service.
        *  Information on authentication and authorization for all Concur Web Services.
        * Information on registering and enabling partner applications to use Concur Web Services.
    </td></tr>
<tr class="GrayTableHead">
  <td colspan="2">Authentication</td>
</tr>
<tr>
  <td colspan="2">The  Expense Report web service supports the OAuth 2.0 authentication model. This authentication  model is covered in detail in** Web Services > <a href="https://developer.concur.com/node/491">OAuth with Concur</a>**. Any additional required elements for the web  service requests are covered in the function documentation. </td>
</tr>
<tr class="GrayTableHead">
<td colspan="2">Product Restrictions</td>
</tr>
<tr>
  <td colspan="2">Concur  products are highly configurable, and not all clients will have access to all  features.
     Partner  developers must determine which configurations are required for their solution  prior to the review process. Use the <a href="https://developer.concur.com/forums/concur-connect">Developer Forum</a> if you have  questions about the configuration settings.
     Existing  clients can work with Concur Advantage Technical Services to create customapplications  that work with their configuration. </td></tr>
<tr class="GrayTableHead">
<td>Resources</td>
<td>Additional Information </td>
</tr>
<tr>
  <td><a href="https://developer.concur.com/node/466">Company Card Transaction</a> 
    <a href="https://developer.concur.com/node/474">Expense Delegator</a> 
    <a href="https://developer.concur.com/node/479">Expense Entry</a>
    <a href="https://developer.concur.com/node/476">Expense Entry Attendee</a> <br />
      <br />
      <a href="https://developer.concur.com/node/482">Expense Entry Itemization</a> 
    <a href="https://developer.concur.com/node/468">Expense Form</a>
    <a href="https://developer.concur.com/node/470">Expense Form Field</a>
    <a href="https://developer.concur.com/node/472">Expense Group Configuration</a> (includes Expense Policies, Expense Types and Payment Types) 
     <a href="https://developer.concur.com/node/486">Expense Report </a>
    <a href="https://developer.concur.com/node/484">Expense Report Header</a> <br />
      <br />
      <a href="https://developer.concur.com/node/563">Integration Status</a> 
    <a href="https://developer.concur.com/node/488">Location</a></td>
  <td valign="top"><a href="#intro">Introduction to  Expense Reports</a>    
    <a href="#responses">Responses and Errors</a>
    <a href="#changecode"></a> </td>
</tr>
</table>

     ## <a name="intro" id="intro"></a>Introduction to Expense Reports 

       Concur Expense allows significant customization of the expense report experience. This flexibility means that developers seeking to work with expense report data must be aware of the following expense report  configuration information:
       Expense reports   are composed of multiple data entry segments called forms. There are several types of forms, and there can be more than one form of each type. Each configured form can have a unique set of form fields included on it. 
       Form fields may be configured as Required or Optional. Some form fields are required by Concur and must always be provided. 
       Expense reports must contain a Report Header form and can contain one or more Expense Entry forms. The Expense Entry can also contain child forms for Attendees or Allocations. 
       Use the <a href="https://developer.concur.com/node/469">Get Available Form Types</a>, <a href="https://developer.concur.com/node/469#getformdata">Get Form Data</a> and <a href="https://developer.concur.com/node/471">Get Form Field Details</a> functions to identify the required data for the forms. 
       The Expense Report web service uses the following forms: 
       **Report Header**: The data entry page for the summary level report information. 
       **Expense Entry**: The data entry page for expenses.
       **Attendees**: The data entry page for additional people included in an expense. A business meal with clients is a common expense with attendees. Attendee entries are children of the expense entry. 
       **Allocations**: The data entry page for dividing the responsibility for an expense. Allocation entries consist of a percentage of the original expense, and the configured custom fields. Allocation entries are children of the expense entry. 
       Expense types are labels used to classify expenses. A policy is a container for configuration data for a group of employees. It determines which expense types the user sees when entering an expense. Use the <a href="https://developer.concur.com/node/473">Get Expense Group Configuration</a> function to get the list of expense type values for the selected policy. Expense reports that are created using this web service are always assigned the default policy of the supplied user.
     ## <a name="responses" id="responses"></a>Responses and Errors <a href="#top"></a>
     Refer to the <a href="https://developer.concur.com/node/205">HTTP Codes</a> page for details of the common responses and errors.     
     **Expense Report Specific Errors:**
     <table width="100% "border="1" cellpadding="3" cellspacing="0" bordercolor="#DBDBDB">
       <tr class="GrayTableHead">
         <td width="32%" valign="top"> Error </td>
         <td width="68%" valign="top">Description</td>
       </tr>
       <tr>
         <td valign="top">Unable to generate default report entry form</td>
         <td valign="top">The supplied expense type has a configuration issue. Review your expense type, form, and policy configuration.</td>
       </tr>
     </table>          
