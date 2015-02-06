---
title: Fetch Attendee Version 2
layout: conceptual
---





| ----- |
|  Description |  Works With These Concur Products |
|

The Concur Fetch Attendee version 2.0 callout allows clients to import attendee information from their internal system to Expense when a user is adding attendees to an expense. The Expense service sends the attendee search fields to an application connector, created by the client, a third-party developer, or Concur. The connector is hosted by the client or third-party developer, and has access to the attendee system of record. The connector uses the attendee information sent from Expense to search for all matching attendee records in the client's system. Once the connector has the list of possible matches, it sends the attendee data to Expense. The user sees the list of matches and can select the appropriate attendee for the expense.

This callout differs from the standard Concur web services in the following ways:

* It uses an **outbound** **message** where Expense calls a public facing API endpoint provided by the application connector.  
Refer to **Callouts > [Core Concepts][1]** for more information.
* The client or third-party developers can configure and maintain the public web service interface (the application connector), or the connector can be maintained by Concur. This documentation specifies the request and response format required by Concur.
* Concur provides a sample connector application that the client can install on their network and customize to interface with their system of record for attendees. Concur can also customize the connector.
* (Optional- Professional/Premium only) The client can choose to create their own application connector using a different language, such as PHP, if preferred.
* The client Expense Administrator must select the attendee types that will use this functionality during application connector registration. Once the attendee types are selected, they will be automatically configured to not allow users to create new attendees manually.
 |

* **Expense** for Concur Professional/Premium
* **Expense** for Concur Standard
* **Expense** for Mobile

 

 

 

 

 |
|  Product Restrictions |   |
|  Concur products are highly configurable, and not all clients will have access to all features.

Partner developers must determine which configurations are required for their solution prior to the review process. Use the [Developer Forum][2] if you have questions about the configuration settings.

Existing clients can work with Concur Advantage Technical Services to create custom applications that work with their configuration.

 |
|  Concur Connect Callout Details |
|  Information on how to download, install, and configure the application connector is included in **Callouts > [Core Concepts][1]**. |
|  Fetch Attendee Process Overview |
|  The configuration process has the following steps:

1. Client, third party developer, or Concur downloads, installs, configures, and customizes the application connector.
2. (Optional- Professional/Premium only) Expense Admin creates a new attendee type to use with the connector.
3. Client registers the application connector, selecting the attendee types that will use the connector.
Once the configuration is complete, the callout uses the following process:
1. The user selects the appropriate attendee type in the **Search** **Attendees** window.
2. The user enters information into an attendee field and clicks **Search**.
3. Expense sends the attendee search field information to the application connector. This request includes all attendee fields, with any blank values formatted as an empty string.
4. The application connector queries the attendee system of record and returns a list of results to Expense.  
**NOTE**: The results list is limited to 100 records.  
If the connector returns a valid response that there are no search results, the user receives a message:  
![2][3]
5. Expense displays the results in the **Search Results** section of the **Search Attendees** window.  
**NOTE**: If the application connector does not respond or returns an error, the user is notified in a popup window within Expense:  
![f][4]  
Concur will not resend the request unless the user manually initiates the search again.
6. If the user adds the attendees to the expense entry, the attendee information is saved in Expense.
 |
|  Security |
|  Concur will make calls to the application connector's endpoint using SSL. During configuration, Concur will connect to the application connector to validate that its hostname and access credentials are valid.

In the code Concur provides for a sample application connector, credentials are stored in a web configuration file that varies by platform, such as web.xml or web.config. However, if you are hosting the connector, you can customize where and how the credentials are stored by customizing HTTPBasicAuth.java or Authentication.cs.

Expense will not be able to connect to the application connector until a certificate signed by a Certificate Authority (CA) is installed in the application connector. You will need to install the signed certificate before Concur can access the connector.

 |
|  Authentication |
|  Authentication between Concur and the application connector is performed using HTTP Basic Auth. By default, these credentials are stored in the appropriate web configuration file for your platform, such as web.xml or web.config. These credentials are entered in Concur on the **Register Application Connector** page in** Web Services **under **Administration**.

Refer to the **Installation > Process ** for more information.

 |
|  Functions |  Additional Information |
|

[Version 2.0: Post Attendee Search Request ][5]

 |

Installation Process

Concur Expense Configuration

Responses and Errors

 |

[1]: https://developer.concur.com/node/25#co
[2]: https://developer.concur.com/forums/concur-connect
[3]: https://developer.concur.com/sites/default/files/fetchattendee_noresults.png
[4]: https://developer.concur.com/sites/default/files/fetchattendee_error.png
[5]: https://developer.concur.com/callouts/fetch-attendee/post-fetch-attendee
