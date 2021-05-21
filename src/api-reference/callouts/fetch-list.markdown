---
title: Fetch List Callout
layout: reference
---

The Concur Fetch List callout allows clients to import list items from an internal system to Expense when a user is filling out list fields for an expense. The Expense service sends a request for list items to an application connector, created by the client, a third-party developer, or SAP Concur. The connector is hosted by the client or developer, and has access to the list item system of record. The connector uses the list information sent from Expense to search for all matching list items in the system of record. Once the connector has the list items, it sends the data to Expense. The user sees the list items and can select the appropriate item for the expense. When the user saves the expense, the list item is added to the list within Expense.

This callout differs from the inbound SAP Concur web services in the following ways:

* It uses an **outbound** **message** where Expense calls a public facing API endpoint provided by the application connector.  
* The third-party developer or client can configure and maintain the public web service interface (the application connector), or the connector can be maintained by SAP Concur. This guide specifies the request and response format required by SAP Concur.
* The client Expense administrator must configure a list (most commonly a connected list), and SAP Concur must perform database configuration on the list before this service can be used.

## Contents
* [Process Flow](#process-flow)
* [Products and Editions](#products-editions)
* [Product Restrictions](#product-restrictions)
* [Concur Expense and Fetch List Configuration](#concur-expense-config)
* [Fetch List Process Overview](#fetch-list-process-overview)
* [Security](#security)
* [Authentication](#authentication)
* [Functions](#functions)
* [Responses and Errors](#responses-errors)

### <a name="process-flow"></a>Process Flow

![A process flow diagram showing flow between SAP Concur, an application connector, and client's data source](./fetch-list-item.png)

## <a name="products-editions"></a>Products and Editions
* Concur Expense Professional Edition
* The SAP Concur Mobile App

## <a name="product-restrictions"></a>Product Restrictions
SAP Concur products are highly configurable, and not all clients will have access to all features.

Partner developers must determine which configurations are required for their solution prior to the review process.

Existing clients can work with Concur Advantage Technical Services to create custom applications that work with their configuration.

##  <a name="concur-expense-config"></a>Concur Expense and Fetch List Configuration

Expense must have a list field configured to use an external source before this callout can be used. The client creates the list, SAP Concur configures it to use the external source, and the client creates the connected list definition if necessary. If using a connected list, Expense Admin creates a connected list definition in Forms and Fields.

To configure a Fetch List callout:
1. Follow the process to create a new Application Connector (refer to [Managing Application Connectors](https://developer.concur.com/api-reference/callouts/callouts-application-connectors.html#managing-app-connectors))
2. On the Application Connector Registration page (from Manage Application Connectors), select the desired registration from the list.
3. Click Modify.
4. On the Sytem page under Services, select Fetch List.
5. Click Configure.
6. Add the details of your previously configured list(s): the List Name, List Category, Language Code, and Connected List Leve (if applicable).
7. Click Add List. (Repeat steps 6-7 until all desired lists are added.)
8. Click Active.
9. Click OK.

>**Note:** If this Fetch List callout is made inactive and then subsequently saved on the System page, any lists that have been added to this Fetch List as a Configured List will be deleted from that Fetch List service.

## <a name="fetch-list-process-overview"></a>Fetch List Process Overview
Once the configuration is complete, the callout uses the following process:

1. The user selects the external source list field while creating an expense entry.
2. Expense sends the list field information and the item codes for the previously selected levels (for connected lists) to the application connector.
3. The application connector queries the list system of record and returns the set of list items to Expense.
4. Expense displays the list items in a drop down list.
5. The user selects the desired list item and saves the expense.

## <a name="security"></a>Security
SAP Concur will make calls to the application connector's endpoint using SSL. During configuration, SAP Concur will connect to the application connector to validate that its hostname and access credentials are valid.

In the code SAP Concur provides for a sample application connector, credentials are stored in a web configuration file that varies by platform, such as web.xml or web.config. However, if you are hosting the connector, you can customize where and how the credentials are stored by customizing HTTPBasicAuth.java or Authentication.cs.

Expense will not be able to connect to the application connector until a certificate signed by a Certificate Authority (CA) is installed in the application connector. You will need to install the signed certificate before SAP Concur can access the connector.

## <a name="authentication"></a>Authentication
Authentication between SAP Concur and the application connector is performed using HTTP Basic Auth. By default, these credentials are stored in the appropriate web configuration file for your platform, such as web.xml or web.config. These credentials are entered in SAP Concur on the **Register Application Connector** page in **Web Services** under **Administration**.

## <a name="functions"></a>Functions

* [Version 1.2: Post List Search Request][3]

##  <a name="responses-errors"></a>Responses and Errors

Refer to the [HTTP Status Codes](/api-reference/http-status-codes.html) page for details of the common responses and errors.

[3]: /api-reference/callouts/post-list-search-request.html
