[Source](https://developer.concur.com/receipts "Permalink to Receipts | Developer Portal")

# Receipts | Developer Portal

###  Description

The Receipts resource represents receipts that can be posted to Concur by a provider company on behalf of opted-in users. This resource currently supports three types of receipts:

* General — A general-purpose receipt type that can be used for various goods or services
* Hotel — A receipt for a hospitality service, such as a hotel stay
* Ride — A receipt for a ride service

**Note:** The Receipt Service only accepts receipts that are up to 6 months old. Older receipts will not be accepted.

###  Authentication and data access

Receipt providers must be registered with Concur before using the Receipts resource. In order to post receipts, an employee of the receipt provider authenticates with the provider's Concur company. This employee must have the Web Services Administrator role. The employee's OAuth 2.0 access token is used by the Receipt Service to map the partner application to the Provider ID that uniquely identifies the provider company. The Provider ID is not supplied directly in the post request.

After authentication, the provider employee can post a receipt to Concur on behalf of an opted-in user. The applications that consume receipts can send their list of opted-in users to the Receipt Service, and the receipt providers can request the opted-in user information.

In order to match the receipt to the opted-in user who initiated the transaction, the receipt provider includes a matching fact in the request. The Receipt Service supports using either the user's Concur Login ID or the user's OAuth 2.0 access token as the matching fact. The receipt provider has access only to the matching fact details for the user, and does not have access to the user's consumer applications.

###  Who should use this resource?

####  Providers

The Receipts resource is available only to receipt providers that can supply trusted receipts. The data in trusted receipts must meet these parameters:

* The source is the vendor (the supplier or merchant) the good or service was purchased from.
* The data can't be tampered with between the vendor creating it and an auditor reading it.

If you are not certain that the receipt data you collect is trusted, it most likely is not. Only vendors and certified receipt aggregators can create a trusted receipt or invoice. If you collect untrusted receipts, such as images of paper receipts or emails, you should use the [Quick Expense][1] Web service to supply those receipts along with the expense details.

Receipt providers must contact Concur and request a review in order to gain access to the service. Partner developers must determine which configurations are required for their solution prior to the review process. Use the Developer Forum if you have questions about the configuration settings.

###  Version

Version 3.0

###  URI

`https://{InstanceURL}/api/v3.0/common/receipts`

###  Content types

* application/json
* application/xml

###  Operations

###  Works with these Concur products

* **Expense** for Concur Professional/Premium
* **Expense** for Concur Standard/Developer Sandbox
* **Expense** for Concur Small Business

###  See Also

 

 

Last Modified: 1/28/2015 2:11 PM PST

[1]: https://developer.concur.com/quick-expense
