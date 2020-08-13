---
title: Launch External URL v4
layout: reference
---
{% include prerelease.html %}

The Launch External URL callout gives clients and developers the ability to extend the functionality of the SAP Concur platform providing a means to deliver custom user interactions, or access functionality found in an external system. The client can add a Report Header, Expense Entry, or Allocation form field that is configured to use the Launch External URL callout. Concur Expense will display this field with an attached button that launches a separate browser window when clicked. The window is controlled by an application connector, created by a third-party developer or the client. The application connector is a web server that presents information in the window.

The application connector can access SAP Concur data through the web services, or can access data in an external system. Once the user has completed their actions in the window (such as performing a search or completing a wizard), they click a button such as “Done” that indicates the user has concluded their work in the window. Then application connector or user closes the window.

The application connector can use web services to send information to update field values on the Report Header, Expense Entry, or Allocation form types. The application connector may send the updates before or after the user closes the window. When the user returns to the SAP Concur platform, the page refreshes and they see the updated values only if the updates are made before the window is closed.  

This callout differs from the standard SAP Concur web services in the following ways:

*	It uses an outbound callout where Expense calls a public facing URL provided by the application connector, which is a web server hosted by the third-party developer or client. The connector domain must be on the allow list created during the configuration process.
*	The application connector can also use the web services to read or update SAP Concur data.
*	The developer or client can configure and maintain the public web service interface (the application connector), or the connector can be maintained by SAP Concur. This guide specifies the request and response format required.
*	The client Expense administrator must configure a new form field and add the field to the desired form before this service can be used.

## Prior Versions
The [Launch External URL v1](https://developer.concur.com/api-reference/callouts/launch-external-url.html) will continue to work only at the Expense Entry level. Launch External URL v1 is not available on the NextGen UI for Concur Expense.

## Contents

* [Process Flow](#process-flow)
* [Products and Editions](#products-editions)
* [Limitations](#limitations)
* [Callout Details](#callout-details)
* [V4 Launch External URL Process Overview](#leu-process-overview)
* [Security](#security)
* [Authentication](#auth)
* [Functions](#functions)
* [SAP Concur Expense Configuration](#config)
* [Responses and Errors](#responses-errors)
* [Launch External URL Form Field Configuration](#leu-field-config)
* [Application Connector Management](#app-connector)
* [Configure Launch External URL - V4 Service](#config-leu)

## <a name="process-flow"></a>Process Flow
![Process Flow for Launch External Service](./launch-external-url-v4.png)

## <a name="products-editions"></a>Products and Editions

* Concur Expense Professional Edition, running NextGen UI for Concur Expense.

## <a name="limitations"></a>Limitations

SAP Concur products are highly configurable, and not all clients will have access to all features. Partner developers must determine which configurations are required for their solution prior to the review process. Existing clients can work with SAP Concur Integration Services to create custom applications that work with their configuration.

The Launch External URL callout is not supported for expense entry bulk editing. For situations where the data needs to be the same, we recommend configuring Copy-Down of the desired data fields.

Only the Employee role can interact with the Launch External URL configured field. Approver, Expense Processor, and Expense Processor Manager roles will not have access to trigger or interact with the Launch External URL callout configured field. When the Launch External URL field is configured, the Approver, Expense Processor, and Expense Processor Manager roles should be configured as read-only or hidden.

If Expense Assistant is used to create reports and the Launch External URL field is employed at the Report Header level, clients may consider creating a mandatory field for the Report Header to ensure users interact with the Launch External URL field.

If the Launch External URL callout is used in combination with external APIs to retrieve information from the Expense Report Header, Entry, or Allocation, we recommend configuring the Expense Form to have the Launch External URL callout field follow other fields that data will be retrieved from.

The system requires certain named fields (not custom fields) to be completed before a user can trigger the Launch External URL configured field. The system will perform an abbreviated save to make the expense record available to external APIs. These are the fields required to be completed by the end user before the Launch External URL callout can be triggered (if these fields are included and configured as site required on the form):

* At the Report Header level: Report Name, Report Date, Policy, and Start/End Date.
* At the Expense Entry level: Expense Type, Amount, Transaction Date, Payment Type, and Currency.

Any audit rules configured as Save actions will not be visible to the end user until the user returns to the SAP Concur Expense application from the pop-up window.

## <a name="callout-details"></a>Callout Details
Information on how to create, install, and configure the application connector is included in [Callouts and Application Connectors](https://developer.concur.com/api-reference/callouts/callouts-application-connectors.html) and below.

## <a name="leu-process-overview"></a>Launch URL Process Overview

The configuration process has the following steps:

1. Third-party developer, client or SAP Concur downloads, installs, configures, and customizes the application connector. The application connector may make requests to the inbound web services.

2. Concur Expense registers the application connector. Be ready to supply the test and production domain information.

3. Expense Admin creates a new form field with the Launch External URL control type and adds the field to the Report Header, Expense Entry, or Allocation form(s).

Once the configuration is complete, the callout uses the following process:

1. The user clicks the button next to the read-only Launch URL form field.

2. Concur Expense launches a new browser window and sends the Report Header, Entry, or Allocation Details URI, Company Domain, Employee ID, and Unique User ID in an encoded query string to the application connector.

3. The application connector parses the query string to extract the sent data.

4. The application connector uses an SAP Concur web service to gather information. This may be Report Header, Expense Entry, or Allocation information.

5. The application connector presents a web page in the new browser window for the end user. This can be a page from a commercial application, or a custom web application.

6. The user completes the process in the external system in the browser window.

7. The application connector sends any field update information to Concur Expense using the SAP Concur web services.

8. The user or the application connector closes the window and returns to Concur Expense.

9. Concur Expense reloads the page the user came from in order to display any updated field values (if the application connector sends a value before the window is closed).

>**Note**:  Concur Expense will perform a save for the area where the user came from (Entry, Allocation, Header) before the new browser window opens and upon refresh after the window is closed.

## <a name="security"></a>Security
Concur Expense will make calls to the application connector’s endpoint using SSL. During configuration,  Concur Expense will connect to the application connector to validate that its hostname and access credentials are valid.

Concur Expense provides for a sample application connector, credentials are stored in a web configuration file that varies by platform, such as web.xml or web.config. However, if you are hosting the connector, you can customize where and how the credentials are stored by customizing HTTPBasicAuth.java or Authentication.cs.

Concur Expense will not be able to connect to the application connector until a certificate signed by a Certificate Authority (CA) is installed in the application connector. You will need to install the signed certificate before access.

## <a name="auth"></a>Authentication
Concur Expense sends requests to the application connector using anonymous authorization (no username and password are provided) over HTTPS.

The application connector can validate the authenticity of the query by generating a signature hash from the provided variables and comparing it with the passed in values, including the signature hash that Concur Expense supplies. Two of the required variables for the signature hash are username and password, which are entered in Concur Expense on the Register Application Connector page in web services under Administration. The application connector must use the same username and password pair to generate its validation signature hash.

Details on registering your client ID can be found on the [Authentication Grant](https://developer.concur.com/api-reference/authentication/apidoc.html#auth_grant) page. 

## <a name="functions"></a>Functions
Details of the URI used for the Launch External URL request can be found on the [V4 Launch External URL Request](\api-reference\callouts\launch-external-url-v4-request.html) page.

## <a name="config"></a>Concur Expense Configuration
A custom field in Expense with text data type for the Expense Report Header, Entry, or Allocation must be configured as the Launch URL control type and the form field must be added to the desired form before this callout can be used. The Launch URL control type will not appear in the list until a partner application using the Launch External URL API has been registered and enabled for the company. The administrator must select either a single-line or a multi-line control type, depending on the data that will be placed in the field.

Notes:

* The Launch External URL currently only works with Professional Edition.
* The Launch External URL is available to be configured at the Expense Report Header, Entry, or Allocations-level fields.
* This Callout cannot be used with Standard Edition clients or from a Travel or Invoice field.

## <a name="responses-errors"></a>Responses and Errors
Refer to the [HTTP Codes](https://developer.concur.com/api-reference/http-status-codes.html) page for details of the common responses and errors.  

## <a name="app-connector"></a>Application Connector Management

SAP Concur administrators use the Manage Application Connectors link on the web services page under Administration to register, test, and enable application connectors.

Information on how to create, install, and configure the application connector is included in [Callouts and Application Connectors](\api-reference\callouts\callouts-application-connectors.html).

## <a name="config-leu"></a>Configure Launch External URL - V4 Service

1. On the **Application Connector Registration** page, select the desired registration from the list.

2. Click **Modify**.

3. In the Services section, select **Launch External URL**.

4. Click **Configure**. The Configure Service window appears.

5. Enter a valid URL for the endpoint that Concur Expense will connect to on the host.

   * Confirm that the endpoint matches the actual endpoint of the remote service.
   * "Host Name" configured above plus "endpoint" will be the actual endpoint used when Concur Expense connects to the clients' application connector.


6. Select the **Active** check box if the endpoint is ready for use. Usually you will do this after you have implemented and tested the endpoint in your application connector.

7. Click **OK**. The service is configured for your host.

8. Click **Save**, to return to the Application Connector Registration page.

## <a name="leu-field-config"></a>Launch External URL Form Field Configuration

Create a new form field with the Launch External URL control type.

1. On the Administration link, select **Expense**, **Expense Admin**, and **Forms and Fields**.

2. Select Form type of the Report Header, Expense Entry, Allocation.

3. Click the **Fields** tab.

4. Select a custom field and click **Modify Field**. Enter the field information, as example shown below:

   * Field Name: Cost Object
   * Control Type: Launch URL (Single-line) or Launch URL (Multi-line)
   * Application Connector: [Name of Application Connector Registered]
  * Popup Width: 400
   * Popup Height: 400


5. Click **Save**.

6. Go to the **Forms** tab and add the **Launch URL** field to the form.

>**Note**: Make sure the Access Rights are set to Modify for the Employee role. Approver, Expense Processor, and Expense Processor Manager roles should be configured as read-only or hidden.
