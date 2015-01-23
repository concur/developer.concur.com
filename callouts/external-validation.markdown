
        <div id="main" class="container">
            <div>
                            </div>
            <div class="row">
                <div class="span12">
<div class="breadcrumbs"><a href="/">Home</a>External Validation Callout</div>
                </div>
            </div>

            <div id="content-wrapper">
<!-- <div class="row"> -->
                <div id="content" class="span9">
			# External Validation Callout
                    <div class="section">
                    <div id="node-495" class="node clear-block">


	
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
.STRING_LITERAL {color: #ce7b00}</style>
<a name="top"></a>
Concur clients can perform validation of expense report data externally, and based on the validation results can update expense report data or send a message to the report owner. This functionality can be used to meet a variety of business needs:

	* 
		You may need to confirm that the user entered a valid project code for the expense, and add an exception to the report if the code is incorrect.
	* 
		You may need to verify that there is available budget for the expense when it is submitted. If the budget is not available, you can modify the approved amount for the entry.
	* 
		You may need to compare the amount to a list of allowed amounts for expense types, and modify the approved amount to match the limit. You can also send an email to the report owner, letting them know that the expense was above the limit for that type.

Concur Connect provides the full set of tools you need to validate expense information and make any necessary changes. The following Callouts and Web Service endpoints can be used together:
**<a href="https://developer.concur.com/node/432">Event Notification Callout</a>**: This callout allows clients to choose to be notified through web services when certain actions take place in their Concur company. The notification provides the triggering event and the object that triggered the notification. The developer can use the object information for future web service requests.
**<a href="https://developer.concur.com/node/487#reportdetails">Get Report Details</a>**: This function retrieves the full set of information for the report. The developer can use the report header or entry detail information when validating report data.
**<a href="https://developer.concur.com/node/481">Post Expense Entry</a>**: This endpoint allows the developer to post an update to the expense entry information. For example, The validation may require that the entry amount is reduced to a specified limit. The developer would post the new amount to the Post Expense Entry Details endpoint to update the report.
**<a href="https://developer.concur.com/node/490#postreportexception">Post Expense Report Exceptions</a>**: This endpoint allows the developer to post an exception to the report, entry, itemization, or allocation levels. This endpoint can be used when the validation indicates that the report has an error. Depending on the severity of the exception, the report can stop moving through to workflow and return to the employee for review. The developer must be familiar with the exception configuration in the client's Expense company.
**<a href="https://developer.concur.com/node/490#postreportworkflow">Post Report Workflow Action</a>**: This endpoint allows the developer to make an approval decision for the report, such as Approve or Send Back to Employee.
The External Validation sequence involves communication between the user, Concur, the application connector, and the system that will be validating the data(shown here as ERP):
<img src="https://developer.concur.com/sites/default/files/EVDiagram_small.png" />
<br />
