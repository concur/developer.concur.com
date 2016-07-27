---
title: API Guides
layout: reference
---

# Concur App Development Guides

These guides are intended to help you gain a better understanding of our APIs in specific use cases and workflows. Please read the Getting Started section below first.  

As we are currently in the process of creating more documents of this type, please feel free to provide us with feedback and suggestions in our [Developer Forums](https://forum.developer.concur.com/c/apis/api-guides).


# Getting Started With Partner Applications

* [Applications](#method1)
* [Registering a Partner Application in your sandbox (or for clients building their own app in their production site)](#method2)
* [Managing Partner Applications](#method3)
* [Enabling and Disabling Partner Applications](#method4)


## <a name="method1"></a>Applications

Your company (be it an existing Concur client or a software development company pursuing a certified Concur App Center application) can use the Concur Developer Platform to build a variety of applications, ranging from single-function apps to end-to-end solutions.  

Concur's APIs implement OAuth 2.0 to authenticate users and authorize access to their Concur data. To go from your idea to users using your app in conjunction with Concur follow these steps:

1. Register for a sandbox:  https://developer.concur.com/manage-apps/register.html  Note: The sandbox that is created from the self-registration process above produces a Standard Edition sandbox.  It is recommended that any potential App Center Partners that are developing an "App for My Business" request a Professional Edition sandbox as well. To request a Professional Edition sandbox please contact bizdev@concur.com.  (Clients interested in developing an app for their own use, can follow the steps below to enable an app in their own production instance. This requires the client to purchase "Web Services").
2. Read the desired Recipes & related API docs and begin developing your app.  (see the Guides listed on the left margin)
3. Fully test your app in your sandbox.  This will ensure your integration not only works, but the end user experience in the Concur UI adds value (if applicable).
4. Note to the developer pursuing a certified App Center App: Once your testing is complete, the Concur Partner Enablement team will guide you through the Certification process. (also see: https://developer.concur.com/manage-apps/app-certification.html)  Then, we will supply the production App Key (this will be different from your sandbox). Your application will not be available to Concur clients or their users until Concur and the developer have completed the certification process.  Publication in our App Center will follow shortly afterwards via the work you do with our App Center Marketing team ( AppCenterMarketing@concur.com )
  
## <a name="method2"></a>Registering a Partner Application in your sandbox (or for clients building their own app in their production site)

The app in the system-generated sandbox should already be registered, so read further only if you need to add an app or change the existing app. [for clients building their own app, you can assign the role yourselves in your own site].

To register partner applications in your sandbox, the following permissions are required:

* **Web Services Administrator:** (Professional Edition) or "Can Administer" (Standard Edition) Users with either of these permissions can enable partner applications in the respective sandbox type.  The "Can Administer" permission is automatically set when you self-register for a Standard Edition sandbox.  The Web Services Administrator permission will be given to you if you request a Professional Edition sandbox.
* On the home page, select Administration > Web Services. NOTE: The Administration tab will not appear unless the employee has the appropriate role assigned.
* You will be on the Web Services page.
* On the Web Services page, click Register Partner Application. The Application Registration page appears.
* Click New. The New Partner Application page appears.
* Fill in the fields using the following table:

Field | Description 
-----|------ 
`Name`	| Enter the name that should appear in the list of applications.
`Description` | Enter the description of the function of the application.
`Visibility` | This field defaults to Private. It can only be modified by Concur Internal staff. It will not be set to anything other than Private until the Concur Review Process is complete.
`Active` | Choose whether this application is active.
`APIs Used` | Select the Concur Web Service APIs that are relevant to your app. If the API includes sensitive data groups, they will appear as separate check boxes beneath the API. Select only the check boxes for the sensitive data that your application must have access to. **NOTE:** The Quick Expense Web Service requires the Expense Report Web Service scope. If the application wants to GET receipt images, it would use the Imaging Web Service, so it would also require the Imaging Web Service scope.

* The Application Authorization section displays your company domain and automatically creates a Key and Secret to use with this application.

## <a name="method3"></a>Managing Partner Applications

To manage your app, use the Administration > Web Services page. Through this page, you can register your app with Concur, enable applications, and configure the scope of data the application can access on the user's behalf.  

### To modify an application:  

1. On the Application Registration page, select the desired application from the list. Click Modify. The Modify Partner Application page appears.
2. Edit the fields as necessary.
3. Click New Secret if you need to generate a new secret to use when authenticating with this application. **NOTE:** Once a new secret is created, any attempt to authenticate with the old secret will fail. Verify that the secret is updated in all code that creates requests. The key and secret allow access to any company that enables this application. You MUST keep this information secret (as specified in the Concur Legal Agreement) to maintain security.
4. Click OK to return to the Application Registration page.

## <a name="method4"></a>Enabling and Disabling Partner Applications

### To enable or disable an application  

1. On the Web Services page, click Enable Partner Application. The Enable Applications page appears, displaying a list of available applications. Select the desired application.
2. Click Enable to authorize the application access to Concur data on behalf of the OAuth consumer. Click Disable to deny access.

