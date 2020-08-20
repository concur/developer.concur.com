---
title: Launch External URL Callout
layout: reference
---

The Launch External URL callout gives clients and developers a platform to extend the functionality of SAP Concur providing a means to deliver custom user interactions, or access functionality found in an external system. The client can arrange to add an Expense Entry form field that is configured to use the Launch External URL callout to a Concur Expense Entry form. Concur Expense will display this field with an attached button that launches a separate window when clicked. The window is controlled by an application connector, created by a third-party developer, the client, or SAP Concur. The application connector is a web server that presents information in the window.

The application connector can access SAP Concur data through the web services, or can access data in an external system. Once the user has completed their actions in the window (such as performing a search or completing a wizard), he/she clicks a button such as "Done" that indicates the user has concluded their work in the window. The application connector then closes the window. 

The application connector can use web services to send information to SAP Concur to update field values on the expense entry form or other form types. The application connector may send the updates before or after the user closes the window. When the user returns to SAP Concur, the page refreshes and he/she sees the updated values.

This callout differs from the standard SAP Concur web services in the following ways:

* It uses an **outbound** **callout** where Expense calls a public facing URL provided by the application connector, which is a web server hosted by the third-party developer or client. The connector domain and IP address must be whitelisted by SAP Concur during the configuration process.  
* The application connector can also use the web services to retrieve or send SAP Concur data.
* The developer or client can configure and maintain the public web service interface (the application connector), or the connector can be maintained by SAP Concur. This guide specifies the request and response format required by SAP Concur.
* The client Expense administrator must configure a new form field and add the field to the desired form before this service can be used.

## Contents
* [Process Flow](#process-flow)
* [Products and Editions](#products-editions)
* [Product Restrictions](#product-restrictions)
* [Callout Details](#concur-connect-callout-details)
* [Launch URL Process Overview](#launch-url-process-overview)
* [Security](#security)
* [Authentication](#authentication)
* [Functions](#functions)
* [Concur Expense Configuration](#concur-expense-config)
* [Responses and Errors](#responses-errors)

## <a name="process-flow"></a>Process Flow

![Process Flow for Launch External Service](./launch-external-url.png)

### <a name="products-editions"></a>Products and Editions

* Concur Expense Professional Edition

### <a name="product-restrictions"></a>Product Restrictions

This callout is not supported in the SAP Concur mobile application.

SAP Concur products are highly configurable, and not all clients will have access to all features.

Only the Employee role can interact with the Launch External URL configured field. Other roles such as the Approver and Processor are not able to trigger the pop-up window.

Partner developers must determine which configurations are required for their solution prior to the review process.

Existing clients can work with SAP Concur Integration Services to create custom applications that work with their configuration.

### <a name="concur-connect-callout-details"></a>Callout Details

Information on how to download, install, and configure the application connector is included in [Callouts and Application Connectors](/api-reference/callouts/callouts-application-connectors.html).

### <a name="launch-url-process-overview"></a>Launch URL Process Overview

The configuration process has the following steps:

1. Third-party developer, client or SAP Concur downloads, installs, configures, and customizes the application connector. The application connector may make requests to the inbound web services.  
2. SAP Concur registers the application connector. SAP Concur must add the IP address and domain of the application connector to an include list. Be ready to supply the test and production domain information.  
3. Expense Admin creates a new form field with the Launch External URL control type and adds the field to the expense entry form(s).

Once the configuration is complete, the callout uses the following process:

1. The user clicks the button next to the read-only form field.
2. Expense launches a new window and sends the Expense Entry Details URI, Company Domain, and X-User ID in an encoded query string to the application connector.
3. The application connector parses the query string to extract the sent data.
4. The application connector uses a SAP Concur web service to gather information. This may be expense entry information, user information, or other information.
5. The application connector presents a web page in the new window for the user to interact with. This can be a page from a commercial application, or a custom web application.
6. The user completes the external system process. This could be a search, a wizard, or another process.
7. The application connector sends any field update information to SAP Concur using the SAP Concur web services.
8. The user or the application connector closes the window and returns to SAP Concur.
9. SAP Concur reloads the page the user came from in order to display any updated field values.

### <a name="security"></a>Security

SAP Concur will make calls to the application connector's endpoint using SSL. During configuration, SAP Concur will connect to the application connector to validate that its hostname and access credentials are valid.

In the code SAP Concur provides for a sample application connector, credentials are stored in a web configuration file that varies by platform, such as web.xml or web.config. However, if you are hosting the connector, you can customize where and how the credentials are stored by customizing HTTPBasicAuth.java or Authentication.cs.

Expense will not be able to connect to the application connector until a certificate signed by a Certificate Authority (CA) is installed in the application connector. You will need to install the signed certificate before SAP Concur can access the connector.

### <a name="authentication"></a>Authentication

SAP Concur sends requests to the application connector using anonymous authorization (no username and password are provided) over HTTPS.

The application connector can validate the authenticity of the query by generating a signature hash from the provided variables and comparing it with the passed in values, including the signature hash that SAP Concur supplies. Two of the required variables for the signature hash are username and password, which are entered in SAP Concur on the **Register Application Connector** page in **Web Services** under **Administration**. The application connector must use the same username and password pair to generate it's validation signature hash.

### <a name="functions"></a>Functions
[Launch External URL Request][4]

###  <a name="concur-expense-config"></a>Concur Expense Configuration

An Expense text form field must be configured as the Launch URL control type and the form field must be added to the desired form before this callout can be used. The Launch URL control type will not appear in the list until a partner application using the Launch External URL API has been registered and enabled for the company. The administrator must select either a single-line or a multi-line control type, depending on the data that will be placed in the field.

**Notes:**

* **The Launch External URL currently only works with Professional Edition.**
* **It is also only available to be configured at the Expense Entry-level fields.**
* **This Callout cannot be used with Standard Edition clients or from a Travel or Invoice field.**

###  <a name="responses-errors"></a>Responses and Errors

Refer to the [HTTP Codes](/api-reference/http-status-codes.html) page for details of the common responses and errors.
 


[4]: /api-reference/callouts/launch-external-url-request.html
