---
title: Application Deployment Guide Travel Profile v2.0 API Using OAuth v2.0
layout: reference
---

This document outlines the various methods of deploying applications specifically for TMCs that use the Travel Profile v2.0 API. It is applicable to all agency developed certified applications. It is also applicable to specific App Center Partners that qualify for deployments that require migration from currently connected legacy OAuth customers to our new OAuth platform. It provides methods, procedural steps, and descriptions for various client implementations and deployments.

## Target Audience

Audience|Description
---|---
**Primary** |SAP Concur TMC Partners who plan to deploy their certified applications that support Travel Profile v2.0 API. The API is a replacement to Concur Travel’s XML Profile Sync and the Travel Profile v1.0 API that is being retired in 2019. This document is intended for the implementation and/or deployment of multiple SAP Concur platform certified agency developed applications.|
**Secondary** |This document is also intended for SAP Concur teams that implement and support SAP Concur’s travel solutions. Internally developed applications (developed by DIRECT customers) do not require certification. The methods described in this document do not apply.

## Prerequisites

You should have core SAP Concur Travel & Expense application administration and support experience with administrative system permissions.

## Objectives

After reviewing this document, you will have a better understanding of the following:
* How to prepare for application enablement and deployment.
* How to prepare for client-side application connecting and verification.

## Deployment Environments

The following is a general list of items necessary for application deployment:

* Standard and Professional Edition instances of Concur Travel and/or Concur Travel & Expense.
* Default travel configurations.
* Agencies typically have two applications – one for internal development and another for production connections.
* Test applications may be linked to client sites if needed for API troubleshooting or for RESTful development tools.
* An agency may have other certified applications to support Triplink, eReceipts, and/or Agency Proposal.

## Application Connection

There are several methods available to connect to an agency’s application from a company or client instance. The following describes the connection methods:

* Company authorized application Administrators connect to the application via the partner’s publicly available listing or Administrator only listing via the SAP Concur App Center.
* Company authorized application Administrators connect to the application via the SAP Concur App Center deeplink provided to the Agency and App Center Partner upon certification. The deep link is accessible to users with SAP Concur Administrator permissions via the App Center Web Services Administrator. If the client is hosted in the EU datacenter, the hostname (domain) will be different.
* Connect to the application in bulk. App Center Technical Enablement or Travel Solutions resources can help agencies and partners activate their applications dozens or even hundreds at a time. Contact your applicable teams to request this process.

The permissions required to “Connect” to the application from the App Center or deep link are SAP Concur Administrator and/or Web Services Administrator.

>**Note**: Connecting applications does not imply actual usage. A connection from the client’s SAP Concur instance to the agency or partner application merely means that authorization was granted and authentication tokens were exchanged.

## Connect Via App Center Tile or Deep Link

### Log In to Company Sandbox

1. Remain logged in to SAP Concur, keep browser window open.
1. Close all other SAP Concur browser tabs (except HMC).
1. In same browser, open a **new** blank tab or window. Paste or launch your deep link URL.
1. If nothing appears, add **App-Center-Listing** permission to the SAP Concur Admin or Web Services Admin credential. Log out of all browser sessions and return to step 1.

![Image Description]()

### Connect Your Application

1. Open a second browser tab or session while the first session is open.
1. Paste your deep link URL into the address bar and hit **Enter**.
1. The following screen should appear, select **Connect**.
1. If the button says **Disconnect** proceed to the next section.

![Image Description]()

### Disconnect Your Application

1. Open a second browser tab or session while the first session is open.
1. Paste your deep link URL into the address bar and hit **Enter**.
1. The following screen should appear, select **Disconnect**.

![Image Description]()

### Reconnect Your Application

1. If the **Disconnect** button appears, your application is connected, a request token has been used, and a refresh token is currently in use.
1. Select **Disconnect** to deactivate the refresh OAuth token and disconnect the application.
1. Select **Connect** to obtain a new 24 hour request token and six month refresh token.
1. If the Terms & Conditions screens appear, select **I Agree**.

![Image Description]()

## Application Connection Details

At this point, the company has initiated the authentication process. Depending on the Partner’s application listing mode, the Administrator will be delivered to the Partner’s site where their landing page will collect underlying information to complete the application connection.

Here’s a sample screen from a company Sandbox – it is configured as an enterprise level application connection. Notice the connection information in the browser’s address bar. For security purposes, the connection information generated in the address bar is temporary and without application information controlled by the Agency, there is a minimum amount of risk if the **Connect** button was selected.

![Sample company sandbox screen]()

Other Agency applications that choose not to provide a **Connect** button may have an **Inquire** button that allows Administrators to request information. Here is an example from another App Center Partner:

![Sample App Center listing showing Inquire button]()

If the Agency’s application has successfully connected (obtained a refresh token), the spinning progress wheel should no longer appear, and the application page will show the app is Connected and a **Disconnect** button. Refresh the browser page to ensure final status.

![App page displaying a checkmark next to Connected and a Disconnect button]()

If the refreshed page displays a spinning progress wheel or if the page displays the **Connect** button, the application was not successfully connected. You may attempt to connect again or contact Agency representatives.

### Completing the Connection

The URL displayed above the screen will include the keys you need to connect your application to your sandbox.

* **id**: The GUID of the company accessing the application (sandbox).
* **requestToken**: The 24 hour multi-use (five times maximum) request token used to obtain a refresh token.
* **userId**: The UUID of the user who clicked the **Connect** button.

![Application screen with URL including the various keys]()

### Application Connection Via Bulk Request Token Process

TMCs don’t often post their listings on the SAP Concur App Center. If they choose to do so, their listings can be configured to be visible and available to Administrators only. Agencies often prefer to establish the connections to their applications themselves as Administrators of their sites.

Single connections to agency applications is effective for new customers or new travel implementations. This method also allows agency administrators or client administrators to disconnect applications as well.

Agency applications such as Travel Profile or eReceipts are often deployed in the hundreds or thousands and Administrators don’t want to log into every company they manage, select the application, and click the **Connect** button for hundreds of customers.

Travel Solutions and Technical Alliances has a solution for the above. It is a custom request process that requires coordination, but it is highly effective for Agencies because they will be able to connect hundreds of companies in a single instance.

Description of bulk request process:

1. The agency or partner creates a list of ACTIVE company names and company IDs. Company ID is often referred to as CliqID or Outtask company ID and it is required as part of the bulk request token process.
1. The partner can submit the list of company names and IDs via the following methods:
  * As a case created by the agency, which will be escalated as an application management request in Jira.
  * Directly as an application management request in Jira - https://wiki.concur.com/confluence/pages/viewpage.action?pageId=136171699.
  * To Travel Implementation or Travel Solutions distribution lists or forums, which will be redirected as Jiras to the application management team.
1. The agency must designate a window of time within which they will be able to execute their procedures, preferably 24-48 hours in advance, with a window of approximately 12 hours or less to complete the request token to refresh token generation process.
1. The Platform Products and Partnerships Technical Enablement team will run a tool that generates company UUIDs from the list of company IDs.
1. The agency is notified when the request token process is beginning.
1. The tool creates a list of company UUIDs – a mandatory identifier that the token generator tool will use along with a unique App ID – specific to the Agency’s application, and then generates a list of request tokens based on that application ID, that are valid for only 12 hours.
1. The list is delivered directly to the partner.
1. The partner takes the information in the .CSV file and generates refresh tokens as specified by our application authentication process.
1. It is imperative that the partner is aware that they have only 12 hours to complete the refresh token process or else the request tokens calculated as epoch time, will expire. An online tool such as https://www.epochconverter.com/ helps convert Unix timestamps to readable dates and times.
1. You have up to five times to obtain a refresh token with the 12 hour request token. If you can not successfully obtain a refresh token after five times, the request token will expire and be revoked and you must begin the process for that company’s refresh token again.
1. This method is applicable to all editions of SAP Concur Travel and SAP Concur Travel and Expense.
1. It is recommended that the .CSV is either sent via SAP Concur secured email or delivered as a password protected file. The password must be communicated in a separate email, SMS, voice, or voicemail.
1. The contents of the results file, as a .CSV will be formatted like the below:


Entity_Outtask_ID|Client_UUID|Request_Token|Timestamp|UNIX Timestamp
---|---|---|---|---
53275|46695033-5117-4ff5-8a1e-1da699d24f87|88c77f53-7903-4d76-bdca-a0bff76b540a|2018-08-20 14:43:02.017778|1534790582.017778
8770|370b6aa0-79d3-4153-b5a6-461fe736503d|f13e9500-53db-4c5a-98ad-71a79122e34b|2018-08-20 14:43:02.306342|1534790582.306342
10726|1ddca869-e997-47db-ad81-dff926b0fc88|ce5f528e-292e-4c11-9131-9e665f37b4af|2018-08-20 14:43:02.588597|1534790582.588597
188903|4f1d55df-06a3-4856-8ede-33ffb2c18b10|0ddf7d84-73e4-436c-940d-3582a317aff6|2018-08-20 14:43:02.845786|1534790582.845786
1027|355c12b6-63da-410a-a071-923e676a6dd8|1eb51ea3-b874-48ea-8da6-4ba15ebe7324|2018-08-20 14:43:03.125535|1534790583.125535
144666|4d85497a-1116-476f-a68a-b6809c62b11b|81b5ac6c-572a-406c-86f5-74dae1fa3155|2018-08-20 14:43:03.446394|1534790583.446394
91202|a2968b50-0e35-488d-8ffa-e829036db56f|eb68a5ea-64a7-42be-aeb6-27aedac059b9|2018-08-20 14:43:03.808369|1534790583.808369
249041|78edee2c-cd7b-4171-8731-336232db21ab|7f8216da-2586-4ce5-b93a-c4a32e0d2441|2018-08-20 14:43:04.142757|1534790584.142757
