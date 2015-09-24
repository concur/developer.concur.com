---
title: Partner Applications
layout: reference
---


# Partner Applications

* [Partner Applications](#method1)
* [Required Permissions](#methodA)
* [Registering a Partner Application](#method2)
* [Modifying a Partner Application](#method3)
* [Enabling and Disabling Partner Applications](#method4)



## <a name="method1"></a>Partner Applications

You can use the Concur Developer Platform to build a variety of applications, ranging from single-function apps to end-to-end solutions that address complex business problems. For example, you can use the List Item Web service to build a simple app for updating a project code list in Concur. Or, you can build an end-to-end solution using the External Validation Callout for validating a Concur expense with an external validation system. We refer generically to all these apps as partner applications.  

The Concur Developer Platform APIs implement OAuth 2.0 to authenticate users and authorize access to their Concur data. Before you can deliver your application to end users, you must register your applicaiton with Concur to obtain the required authorization information. Partner applications that are intended for use by multiple companies must be reviewed by Concur. The applications will not be available to other companies until Concur and the developer have completed the review process.

## <a name="methodA"></a>Required Permissions

To register and manage partner applications, the following permissions are required:

* **Web Services Administrator:** Users with this permission can enable partner applications. Users with this permission at companies that are Development Partners may also register partner applications.  
* **All Admin users:** Users with these permissions can enable partner applications. Users with this permission at companies that are Development Partners may also register partner applications.  
* **Developers:** The developer sandbox companies are configured as Development Partners, and the user that creates the sandbox is granted the Web Services Administrator permission. The developer sandbox creator can register and enable partner applications.  


## <a name="method2"></a>Registering a Partner Application

The first action all developers need to take is to register a partner application with Concur. When you register an application, you receive the authorization keys that are necessary to make Web service calls.  

### To register a partner application

<ol>
<li>On the home page, select Administration > Web Services. NOTE: The Administration tab will not appear unless the employee has the appropriate role assigned.</li>
<li>You will be on the Web Services page.</li>
<li>On the Web Services page, click Register Partner Application. The Application Registration page appears.</li>
<li>Click New. The New Partner Application page appears.</li>
<li>Fill in the fields using the following table:</li>  


Field | Description
-----|------
`Name`	| Enter the name that should appear in the list of applications.
`Description` | Enter the description of the function of the application.
`Visibility` | This field defaults to Private. It can only be modified by Concur Internal staff. It will not be set to anything other than Private until the Concur Review Process is complete.
`Active` | Choose whether this application is active. Inactive applications will not appear in the list of available applications.
`APIs Used` | Select the Concur Web Service APIs that this application will interface with. If the API includes sensitive data groups, they will appear as separate check boxes beneath the API. Select only the check boxes for the sensitive data that your application must have access to. **NOTE:** The Quick Expense Web Service requires the Expense Report Web Service scope. If the application wants to GET receipt images, it would use the Imaging Web Service, so it would also require the Imaging Web Service scope.

<li> The Application Authorization section displays your company domain and automatically creates a Key and Secret to use with this application. NOTE: The key and secret allow access to any company that enables this application. You MUST keep this information secret (as specified in the Concur Legal Agreement) to maintain security.</li>
<li>Click OK. The application will automatically be enabled for your company.</li>


## <a name="method3"></a>Managing Partner Applications

To manage your app, use the Administration > Web Services page. Through this page, you can register your app with Concur, enable applications, and configure the scope of data the application can access on the user's behalf.

### To modify a partner application:  

1. On the Application Registration page, select the desired application from the list. Click Modify. The Modify Partner Application page appears.
2. Edit the fields as necessary.
3. Click New Secret if you need to generate a new secret to use when authenticating with this application. **NOTE:** Once a new secret is created, any attempt to authenticate with the old secret will fail. Verify that the secret is updated in all code that creates requests. The key and secret allow access to any company that enables this application. You MUST keep this information secret (as specified in the Concur Legal Agreement) to maintain security.
4. Click OK to return to the Application Registration page.


## <a name="method4"></a>Enabling and Disabling Partner Applications

### To enable or disable an application  

1. On the Web Services page, click Enable Partner Application. The Enable Applications page appears, displaying a list of available applications. Select the desired application.
2. Click Enable to authorize the application access to Concur data on behalf of the OAuth consumer. Click Disable to deny access.
