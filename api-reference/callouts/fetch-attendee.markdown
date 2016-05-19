---
title: Fetch Attendee Version 2 Callout
layout: reference
---


## Description    

The Concur Fetch Attendee version 2.0 callout allows clients to import attendee information from their internal system to Expense when a user is adding attendees to an expense. The Expense service sends the attendee search fields to an application connector, created by the client, a third-party developer, or Concur. The connector is hosted by the client or third-party developer, and has access to the attendee system of record. The connector uses the attendee information sent from Expense to search for all matching attendee records in the client's system. Once the connector has the list of possible matches, it sends the attendee data to Expense. The user sees the list of matches and can select the appropriate attendee for the expense.

This callout differs from the standard Concur web services in the following ways:

* It uses an **outbound message** where Expense calls a public facing API endpoint provided by the application connector.  
Refer to **Callouts >** [Core Concepts][1] for more information.
* The client or third-party developers can configure and maintain the public web service interface (the application connector), or the connector can be maintained by Concur. This documentation specifies the request and response format required by Concur.
* Concur provides a sample connector application that the client can install on their network and customize to interface with their system of record for attendees. Concur can also customize the connector.
* (Optional- Professional/Premium only) The client can choose to create their own application connector using a different language, such as PHP, if preferred.
* The client Expense Administrator must select the attendee types that will use this functionality during application connector registration. Once the attendee types are selected, they will be automatically configured to not allow users to create new attendees manually.

### Works With These Concur Products

* **Expense** for Concur Professional/Premium
* **Expense** for Concur Standard
* **Expense** for Mobile


### Product Restrictions    
* Concur products are highly configurable, and not all clients will have access to all features.

* Partner developers must determine which configurations are required for their solution prior to the review process. Use the [Developer Forum][2] if you have questions about the configuration settings.

* Existing clients can work with Concur Advantage Technical Services to create custom applications that work with their configuration.


## Concur Connect Callout Details
Information on how to download, install, and configure the application connector is included in **Callouts >** [Core Concepts][1].

## Fetch Attendee Process Overview
The configuration process has the following steps:

1. Client, third party developer, or Concur downloads, installs, configures, and customizes the application connector.
2. (Optional- Professional/Premium only) Expense Admin creates a new attendee type to use with the connector.
3. Client registers the application connector, selecting the attendee types that will use the connector.
Once the configuration is complete, the callout uses the following process:
	1. The user selects the appropriate attendee type in the **Search Attendees** window.
	2. The user enters information into an attendee field and clicks **Search**.
	3. Expense sends the attendee search field information to the application connector. This request includes all attendee fields, with any blank values formatted as an empty string.
	4. The application connector queries the attendee system of record and returns a list of results to Expense.  
**NOTE**: The results list is limited to 100 records.  
	5. Expense displays the results in the **Search Results** section of the **Search Attendees** window.  
**NOTE**: If the application connector does not respond or returns an error, the user is notified in a popup window within Expense.
Concur will not resend the request unless the user manually initiates the search again.
	6. If the user adds the attendees to the expense entry, the attendee information is saved in Expense.

### Security
  Concur will make calls to the application connector's endpoint using SSL. During configuration, Concur will connect to the application connector to validate that its hostname and access credentials are valid.

In the code Concur provides for a sample application connector, credentials are stored in a web configuration file that varies by platform, such as web.xml or web.config. However, if you are hosting the connector, you can customize where and how the credentials are stored by customizing HTTPBasicAuth.java or Authentication.cs.

Expense will not be able to connect to the application connector until a certificate signed by a Certificate Authority (CA) is installed in the application connector. You will need to install the signed certificate before Concur can access the connector.


### Authentication
  Authentication between Concur and the application connector is performed using HTTP Basic Auth. By default, these credentials are stored in the appropriate web configuration file for your platform, such as web.xml or web.config. These credentials are entered in Concur on the **Register Application Connector** page in **Web Services** under **Administration**.

Refer to the **Installation Process** for more information.


### Functions

[Version 2.0: Post Attendee Search Request][5]

## Installation Process
The installation process includes installing the application connector, and registering it with Concur.

Fist, the client or third-party developer will create and install the application connector on their web site or a third party hosting site. The connector should be programmed to accept the requests from Concur and provide the documented responses. A sample connector is available on the Sample Code page under Callouts, and details of the installation process are available at **Callouts > Core Concepts > Sample Connector Procedures**.

During installation, the client or developer will select and configure an externally available endpoint on the host server for Concur to send the attendee search request to. Refer to Security for more information about the security requirements of the application connector.

The client then registers the application connector with Concur:  

1. Log in to Concur as an administrative user.  
2. Select Administration > Web Services.  
3. Click Manage Application Connectors.  
4. Click New.  
5. Fill out the fields:  

   |Field	|Description|
   |------|------------|
   |Name|Enter the name that should appear in the list of connectors.|
   |Description|Enter the description of the function of the connector, such as what back-endsystem it might connect to.|
   |Host Name|Enter the hostname for the connector. Example: `https://{servername}`|
   |User Name|Enter the user name required to authenticate with the host. This must be the same as the user name specified in the configuration file for the application connector, using HTTP Basic Auth.|
   |Password|Enter the password required to authenticate with the host. This must be the same as the password specified in the configuration file for the application connector, using HTTP Basic Auth.1.0|  
6. In the Services section, select Fetch Attendee.  
7. Click Configure. The Configure Service window appears.  
8. Enter the endpoint that the Concur will connect to on your server. Example: /attendee/v2.0/fetch  
9. Select the Active check box if the endpoint is ready for use. Usually you will do this after you have implemented and tested the endpoint in your application connector.  
10. Select the attendee types that will use the application connector. These attendee types will be automatically configured to not allow users to create new attendees manually.  
11. Click OK.
12. Click Test Connection. Concur will attempt to access the configured endpoint with the provided user credentials.
13. Click Save. The application connector is now registered with Concur and enabled.

### Concur Expense Configuration
The Expense administrator can select which attendee types use the connector when registering the application connector. These attendee types will be automatically configured to not allow users to create new attendees manually.

**Professional/Premium only:** If desired, the administrator can create a new attendee type specifically for use with the connector.

### Responses and Errors
Refer to the HTTP Codes page for details of the common responses and errors.


[1]: /docs/guides/REST-API-Basics.html
[2]: http://forum.developer.concur.com/
[5]: /api-reference/expense/attendees/index.html
