---
title: Quick Start Guide
layout: reference
---

##  Quick Start Guide
If you are new to Concur APIs, follow these steps to make your first API call and try some of our other APIs.

###  Provision your developer sandbox
Create a developer sandbox using the [Sandbox Registration](https://developer.concur.com/manage-apps/register.html) process. Read through the additional information at the bottom of the online form so you understand what happens after you complete the form and click **Submit**.

If you already have a developer sandbox, you can skip this initial step and (placeholder for what a current customer need do at this point.)

####  Create your developer sandbox
After you click **Submit**, the Welcome page renders. On this page are the following:

* The list of APIs enabled for your application

* Your **consumer key**

* Your **consumer secret**

* The access token to your account

**Important: Make a copy of your consumer key, consumer secret and access token and store them in a secure location**. You will need them to make authenticated API requests to your sandbox.

####  Configure your developer sandbox
  1. Click **Get Started** on the Welcome page to open the setup wizard.
  2. Select appropriate values for the fields on the Introduction page and click **Next**.

    An option to select **Skip** is provided if you want to avoid the previous step and move forward in the setup process. You can return at anytime to enter values in the fields on any of the pages.
    
  3. Click **Done** on the Reporting Configuration page.
  
  4. Click **Get Started**. This brings you to the My Concur page of your developer sandbox.
  5. Create a payment method on the Employee Reimbursements page to add users. Click **Invite Now** to activate your company in the developer sandbox.


###   Register your partner application
The first task all developers need to complete after they configure their developer sandbox is to register their partner application with Concur.

Read the information provided at [App Registration &  Management](https://developer.concur.com/manage-apps/partner-applications.htm) to register. manage, modify or delete a partner application.

###  Accessing the E-Receipts Provider API

In step 4 of the registration process described in [App Registration &  Management](https://developer.concur.com/manage-apps/partner-applications.htm),  the fields available for information are named and described.

* In the APIs Used field, check the **E-Receipts Provider** checkbox.
    - If the checkbox is unavailable or greyed out because you lack permission to access it, send an email to [concuruser@concur.com](mailto:concuruser@concur.com) requesting access


* Send an email to [concuruser@concur.com](mailto:concuruser@concur.com) with your Company Domain name to receive your client ID and client secret for the new Authentication API

* Send an email to [pdspe@concur.com](mailto:pdspe@concur.com) with your Company Domain name to enable the new Receipts API in your sandbox

* Create or import users in your sandbox using the process explained in Step 5 of Configure your developer sandbox above

*  Refer to the [Authentication API documentation](https://preview.developer.concur.com/api-alpha/auth/apidoc.htm) to get a valid token for creating a receipt for a user in your sandbox

*  Refer to the [Receipts API documentation](https://preview.developer.concur.com/api-alpha/receipts/apidoc.html) to know how to create a receipt


 Once a receipt is successfully posted, the receipt data and image can be viewed in the Available Expenses section of the website.





