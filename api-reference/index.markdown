---
title: API Reference
layout: reference
---

# Quick Start Guide

If you’re new to the Concur APIs, follow these steps to make your first API call and try some of our APIs:


## 1. Provision your developer sandbox  


Create a sandbox using our [Sandbox Setup Wizard][1] and follow these [instructions](#provision-sandbox).  


## 2. Make your first API call  


Concur has several APIs you can call, depending on the data that you want to push/extract.  

   
Here are two main API examples:

* **The Travel/Itinerary API (v1.1)** lets you access a Concur user/company's itinerary, including hotel/flight booking info. As an example, you can mash-up the Itinerary API with a restaurant database/API to provide recommendations of places to eat near a Concur user's hotel booking.

* **The Expense API (v3.0)** allows you to get (and push) a Concur user's expense information, including expense line items, their types (e.g. food, lodging), totals, and even receipt images.  


Here's a [REST API Basics guide][2] if you're new to calling APIs.

## 3. Get your app certified
After you have completed development and testing, submit your app for [certification][8].  
**NOTE:** This only applies to developers who are building an integration across multiple clients (i.e., an app that would appear in the App Center or TMC integrations). Concur clients who are using these APIs for interaction with their own data do not need to go through certification.


## Additional Helpful Info


* [Generate an access token](#generate-access-token)
* [Associating External Attendees to Expense Entries][5]
* [Callouts and Application Connectors][6]
* [App Registration & Management][7]



### <a name="provision-sandbox"></a>Provision your developer sandbox

Before you build your first application that integrates with Concur, you should create your own virtual Concur company so that you can develop and test your app. We call this a developer sandbox, or simply a sandbox.  

#### Create your sandbox

1. [Signup for a sandbox][1].
2. The Welcome page appears, listing the APIs enabled for your partner application, your **consumer key** (known as the client ID in OAuth 2.0), your **consumer secret** (known as the secret in OAuth 2.0), and the access token tied to your account. **Important: Copy your consumer key (client ID), consumer secret (secret), and access token and keep them in a safe place. You will need them to make authenticated API requests to your sandbox.**

#### Configure your sandbox

1. Click **Get Started** to open the Setup Wizard for the sandbox. You need to select values for the fields on the Introduction page, and then click **Next**.
2. You can click **Skip** for the rest of the pages. You will be able to return and configure these pages at any time.
3. On the Reporting Configuration page, click **Done**.
4. Click **Get Started**. You are now on the My Concur page of your sandbox company.
5. To add users, create a payment method on the Employee Reimbursements page. On the Invite Users page, click **Invite Now** to activate your company.
6. The sandbox can be used with the following APIs:  

	* Attendee
	* Expense
	* Imaging
	* Itinerary
	* List Item
	* Payment Batch File
	* Travel Profile
	* User

To configure your sandbox with additional APIs, go to **Administration > Web Services** and modify your application to add more APIs. If you need assistance, or contact [Concur Support][3] for assistance.

### <a name="generate-access-token"></a>Generate An Access Token
All Concur APIs require an access token to be passed as a header.
There are several ways of generating a Concur access token, depending on your stage of development and integration scenario:

* If you're just starting with the API for quick prototyping, you will most likely use the Native Flow
* If you're adding a Concur login button on your app to handle Concur users logging in to your site/page, you should start looking at the Web Flow
* If your app will handle users logging in from the Concur site, you should start looking at the App Center Flow
For an in-depth explanation on how to choose which authorization flow to use, please refer to this page. We also cover this in detail in Authorization Flows


**Increasing your app footprint in Concur**  
We highly recommend that apps integrating with Concur support both the Web Flow and the App Center Flow. This would ensure more visibility for your app among Concur users.  

#### Native Flow

The Native Flow is used for quick prototyping and back-office integration apps.
You can find detailed information/steps about the Native Flow [here][9]  


#### Web Flow

The Web Flow is used for logging in Concur users coming from your app.  

You can find detailed information/steps about Web Flow [here][10].

#### App Center Flow

The App Center Flow is used for logging in Concur users coming from [https://concursolutions.com/][4]




[1]: /manage-apps/register.html
[2]: /docs/guides/REST-API-Basics.html
[3]: /tools-support/sandbox-configuration-assistance.html
[4]: https://concursolutions.com/
[5]: /docs/guides/index.html
[6]: /docs/overviews/index.html
[7]: /manage-apps/partner-applications.html
[8]: /manage-apps/app-certification.html
[9]: /api-reference/authentication/authentication.html#native
[10]: /api-reference/authentication/authentication.html#web
