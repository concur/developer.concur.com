[Source](https://developer.concur.com/callouts/external-validation "Permalink to External Validation Callout | Developer Portal")

# External Validation Callout | Developer Portal

Concur clients can perform validation of expense report data externally, and based on the validation results can update expense report data or send a message to the report owner. This functionality can be used to meet a variety of business needs:

* You may need to confirm that the user entered a valid project code for the expense, and add an exception to the report if the code is incorrect.
* You may need to verify that there is available budget for the expense when it is submitted. If the budget is not available, you can modify the approved amount for the entry.
* You may need to compare the amount to a list of allowed amounts for expense types, and modify the approved amount to match the limit. You can also send an email to the report owner, letting them know that the expense was above the limit for that type.

Concur Connect provides the full set of tools you need to validate expense information and make any necessary changes. The following Callouts and Web Service endpoints can be used together:

[**Event Notification Callout][1]**: This callout allows clients to choose to be notified through web services when certain actions take place in their Concur company. The notification provides the triggering event and the object that triggered the notification. The developer can use the object information for future web service requests.

[**Get Report Details][2]**: This function retrieves the full set of information for the report. The developer can use the report header or entry detail information when validating report data.

[**Post Expense Entry][3]**: This endpoint allows the developer to post an update to the expense entry information. For example, The validation may require that the entry amount is reduced to a specified limit. The developer would post the new amount to the Post Expense Entry Details endpoint to update the report.

[**Post Expense Report Exceptions][4]**: This endpoint allows the developer to post an exception to the report, entry, itemization, or allocation levels. This endpoint can be used when the validation indicates that the report has an error. Depending on the severity of the exception, the report can stop moving through to workflow and return to the employee for review. The developer must be familiar with the exception configuration in the client's Expense company.

[**Post Report Workflow Action][5]**: This endpoint allows the developer to make an approval decision for the report, such as Approve or Send Back to Employee.

The External Validation sequence involves communication between the user, Concur, the application connector, and the system that will be validating the data(shown here as ERP):

![][6]

  
Last Modified: 7/3/2013 3:53 PM PDT

[1]: https://developer.concur.com/node/432
[2]: https://developer.concur.com/node/487#reportdetails
[3]: https://developer.concur.com/node/481
[4]: https://developer.concur.com/node/490#postreportexception
[5]: https://developer.concur.com/node/490#postreportworkflow
[6]: https://developer.concur.com/sites/default/files/EVDiagram_small.png
