--
title: Set Up Developer Sandbox
layout: conceptual
---

## Set up your developer sandbox

Before you build your first application that integrates with Concur, you should create your own virtual Concur company so that you can develop and test your app. We call this a developer sandbox, or simply a sandbox. 
A sandbox is different from a Concur free trial. The free trial allows you to try Concur for 30 days and then expires. A sandbox does not expire, and has some features enabled that are specific to Concur Connect API developers.

#### To create your sandbox

1. Go to the Developer Portal at https://developer.concur.com.
2. Click the **Sign Up** button at the top right of the page.
3. Fill in the Sandbox Registration form and click **Submit**.    
Concur automatically creates a partner application for you and generates an access token for your user account.
4. The Welcome page appears, listing the APIs enabled for your partner application, your consumer key (known as the client ID in OAuth 2.0), your consumer secret (known as the secret in OAuth 2.0), and the access token tied to your account.    
Important: Copy your consumer key (client ID), consumer secret (secret), and access token and keep them in a safe place. You will need them to make authenticated API requests to your sandbox.

#### To configure your sandbox

1.	Click Get Started to open the Setup Wizard for the sandbox. 

2.	Select values for the fields on the Introduction page, and then click Next. 
Make sure to select an appropriate option under What type of industry is your company in. This is especially important for healthcare companies, because this selection controls the Attendee Type functionality in the expense entry forms. Healthcare companies should select Medical, Dentist, or Health Service.

3.	You can click Next for the rest of the pages without completing them. You will be able to return and configure these pages at any time.
   If you want to submit reports for your sandbox company during application testing, you should complete the following pages in the Setup Wizard:

* Manage Account Codes: Add codes in the Account Code/GL Code column for each expense type you plan to use.
* Employee Reimbursements: Select the options you want to use for employee reimbursements. Later, you will need to assign the reimbursement type to each user’s profile.
If you want to create users during the setup process, make sure to set up employee reimbursements first. When you create a user, you are required to assign a reimbursement type at the same time.

4.	On the final configuration page, you will see a Done button instead of a Next button. Click Done.

5.	Click Get Started. You are now on the My Concur page of your sandbox company. To return to the Setup Wizard from the home page, click Administration > Setup > Expense in the upper right corner of the page.
 
6.	The partner application that was created in your sandbox has these APIs enabled by default:

   * Expense Report
   * Imaging
   * Itinerary
   * Users

If you want to add additional APIs, follow these steps:

a.	Click Administration > Company > Web Services in the upper right corner of your My Concur page. 
b.	Click Register Partner Application.
c.	Highlight your application and click Modify. You will be able to select additional APIs from a checklist.
 If you need assistance, visit Concur’s Developer Forums or contact Concur Support.
