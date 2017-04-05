---
title: Event Notification Callout 
layout: reference
---

## Description
The Event Notification callout allows clients to choose to be notified through web services when certain actions take place in their Concur company. If the client uses Concur Expense, the supported events are the Expense report entering the Post-Submit or Pre-Extract workflow steps. If the client uses Concur Travel Request, the supported events are the Travel Request entering the Post-Submit or Pre-Extract workflow steps. When the event happens, Concur generates a notification and places it into the notification system queue. When the notification reaches the front of the queue, Concur sends a request to the configured endpoint with event information.

This callout differs from the standard Concur web services in the following ways:

* It uses an **outbound** **callout** where Expense calls a public facing URL provided by the application connector, which is a web server hosted by the third-party developer or client. Refer to [Callouts and Application Connectors for more information](/api-reference/callouts/callouts-application-connectors.html).
* The application connector can also use the web services to retrieve or send Concur data.
* The developer or client can configure and maintain the public web service interface (the application connector), or the connector can be maintained by Concur. This guide specifies the request and response format required by Concur.
* The developer or client can choose to create their own application connector using a different language, such as PHP, if preferred.


## Works With These Concur Products
* **Expense** for Concur Professional/Premium
* **Request** for Concur Professional/Premium
* Concur Mobile

## Example Use Case

An example use of this callout is:

1. A Concur user submits an expense report, triggering an Event Notification.
2. The notification is placed in a queue and processed in a first come, first served order.
3. When the notification gets to the front of the queue, it is sent to the endpoint specified by the developer.
4. The application connector returns the HTTP 200 status code, and the notification is removed from the queue.
5. The developer uses the Report information to make the [Get Expense Report Details][2] request.
6. The developer uses the additional information to validate some expense report information.
7. The developer then uses the [Post Expense Report Exceptions][3] function to approve the report.

This is one use case for the Event Notification callout, however it can be used for a wide variety of requirements.

## Product Restrictions
Concur products are highly configurable, and not all clients will have access to all features.

Partner developers must determine which configurations are required for their solution prior to the review process. Use the [Developer Forum](http://forum.developer.concur.com/){:target="_blank"} if you have questions about the configuration settings.

Existing clients can work with Concur Advantage Technical Services to create custom applications that work with their configuration.

## Event Notification Process Overview

The configuration process has the following steps:

1. Third-party developer, client or Concur downloads, installs, configures, and customizes the application connector. The application connector may make requests to the inbound web services.  
 
2. The developer or the Concur clients registers the application connector.  
  Refer to **Installation \> Process **for the detailed steps.

Once the configuration is complete, the callout uses the following process:

1. The configured event occurs in Concur.
2. Concur sends the request information to the specified endpoint for the application connector.

## Security
Concur will make calls to the application connector's endpoint using SSL. During configuration, Concur will connect to the application connector to validate that its hostname and access credentials are valid.

In the code Concur provides for a sample application connector, credentials are stored in a web configuration file that varies by platform, such as web.xml or web.config. However, if you are hosting the connector, you can customize where and how the credentials are stored by customizing HTTPBasicAuth.java or Authentication.cs.

Expense or Travel Request will not be able to connect to the application connector until a certificate signed by a Certificate Authority (CA) is installed in the application connector. If you are hosting the application connector, you will need to install the signed certificate before Concur can access the connector.

## Authentication
Authentication between Concur and the application connector is performed using HTTP Basic Auth. By default, these credentials are stored in the appropriate web configuration file for your platform, such as web.xml or web.config. These credentials are entered in Concur on the **Register Application Connector** page in **Web Services** under **Administration**.

Refer to the **Callouts and Application Connectors** page for more information.

## Functions
[Delete Notification][9]  

[Get Notifications by Status][10]  

[Post Event Notification Request ][11]  


### Installation Process
The installation process includes installing the application connector, and registering it with Concur.

1. The third-party developer or client will create and install the application connector on their web site or a third party hosting site. The connector should be programmed to accept the requests from Concur and provide the documented responses. 
2. The client registers the application connector with Concur:
   1. Log in to Concur as an administrative user.
   2. Select **Administration** \> **Web Services**.
   3. Click **Manage Application Connectors**.
   4. Click **New**.
   5. Fill out the fields:     
   
   
  |  Field       |  Description |
  |--------------|--------------|
  |  Name        |  Enter the name that should appear in the list of connectors.| 
  |  Description |  Enter the description of the function of the connector, such as what back-end system it might connect to. |
  |  Host Name   |  Enter the hostname for the connector. Example: https://{servername} |
  |  User Name   |  Enter the user name required to authenticate with the host. This must be the same as the user name specified in the configuration file for the application connector, using HTTP Basic Auth. |
  |  Password    |  Enter the password required to authenticate with the host. This must be the same as the password specified in the configuration file for the application connector, using HTTP Basic Auth. |



   6. In the **Services** section, select **Send Notification**.
   7. Click **Configure**. The **Configure Service** window appears.    
   8. Enter the endpoint that the Concur will connect to on your server. Example: /concur/v1.0/notify
   9. Select the **Enabled** check box if the endpoint is ready for use. Usually you will do this after you have implemented and tested the endpoint in your application connector.
   10. In the Workflows section, select the workflow step for each expense report or travel request workflow that requires notifications.
   11. Click **OK**.
   12. Click **Test Connection**. Concur will attempt to access the configured endpoint with the provided user credentials.
   13. Click **Save**. The application connector is now registered with Concur and enabled.

### Responses and Errors
Refer to the [HTTP Codes][16] page for details of the common responses and errors.

 

  
[2]:  /api-reference/expense/expense-report/reports.html
[3]:  /api-reference/expense/expense-report/post-report-exceptions.html
[4]:  /docs/overviews/index.html
[5]:  http://forum.developer.concur.com/
[6]:  /docs/overviews/index.html
[7]:  https://developer.concur.com/api-documentation/core-concepts
[8]:  /docs/overviews/index.html
[9]:  /api-reference/callouts/delete-notification.html
[10]: /api-reference/callouts/get-notifications-status.html
[11]: /api-reference/callouts/post-event-notification.html
[12]: /callouts/event-notification#installproc
[13]: /callouts/event-notification#responses
[14]: https://github.com/concurtech
[15]: /docs/overviews/index.html
[16]: /tools-support/reference/http-codes.html

