
        <div id="main" class="container">
            <div>
                            </div>
            <div class="row">
                <div class="span12">
<div class="breadcrumbs"><a href="/">Home</a>Partner Applications</div>
                </div>
            </div>

            <div id="content-wrapper">
<!-- <div class="row"> -->
                <div id="content" class="span9">
            # Partner Applications
                    <div class="section">
                    <div id="node-203" class="node clear-block">


    
    <div class="content clear-block">
                <script>
  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

  ga('create', 'UA-41161356-1', 'concur.com');
  ga('send', 'pageview');

</script>
<div style="background: rgb(237, 235, 231);">
**Contents**
<a href="#top">Partner Applications</a><br />
        <a href="#register">Registering a Partner Application</a><br />
        <a href="#modify">Modifying a Partner Application</a><br />
        <a href="#enable">Enabling and Disabling Partner Applications</a><br />
        <a href="#userroles">User Permissions</a>
</div>
## 
    <a id="top" name="top"></a>Partner Applications
You can use the Concur Developer Platform to build a variety of applications, ranging from single-function apps to end-to-end solutions that address complex business problems. For example, you can use the <a href="https://developer.concur.com/node/370">List Item</a> Web service to build a simple app for updating a project code list in Concur. Or, you can build an end-to-end solution using the <a href="https://developer.concur.com/node/495">External Validation Callout</a> for validating a Concur expense with an external validation system. We refer generically to all these apps as <dfn>partner applications</dfn>.
The Concur Developer Platform APIs implement <a href="https://developer.concur.com/node/491">OAuth 2.0</a> to authenticate users and authorize access to their Concur data. Before you can deliver your application to end users, you must register your applicaiton with Concur to obtain the required authorization information. Partner applications that are intended for use by multiple companies must be <a href="https://developer.concur.com/node/624">reviewed</a> by Concur. The applications will not be available to other companies until Concur and the developer have completed the review process.
## 
    <a id="userroles" name="userroles"></a>Required Permissions
To register and manage partner applications, the following permissions are required:

* 
        **Web Services Administrator **: Users with this permission can enable partner applications. Users with this permission at companies that are Development Partners may also register partner applications.
* 
        **All Admin users**: Users with these permissions can enable partner applications. Users with this permission at companies that are Development Partners may also register partner applications.
* 
        **Developers: **The developer sandbox companies are configured as Development Partners, and the user that creates the sandbox is granted the Web Services Administrator permission. The developer sandbox creator can register and enable partner applications.

## 
    <a id="register" name="register"></a>Registering a Partner Application
The first action all developers need to take is to register a partner application with Concur. When you register an application, you receive the authorization keys that are necessary to make Web service calls. Refer to <a href="https://developer.concur.com/node/491">OAuth 2.0</a> for more information about authorization.
####
    To register a partner application

<ol>
* 
        On the home page, select **Administration** >** Web Services**.<br />
        **NOTE**: The **Administration** tab will not appear unless the employee has the appropriate role assigned. For more information, see <a href="#userroles">User Permissions</a>.<br />
        <img alt="" height="193" src="https://developer.concur.com/sites/default/files/Adminmenu_WS.png" width="190" />
        
* 
        The **Web Services **page appears.<br />
        <img alt="" height="376" src="https://developer.concur.com/sites/default/files/WS_Admin.png" width="730" />
        
* 
        On the** Web Services **page, click **Register Partner Application**. The **Application Registration** page appears.
        <img alt="" height="199" src="https://developer.concur.com/sites/default/files/RegPartnerApp_small.png" width="512" /><br />
        
* 
        Click **New**. The **New Partner Application** page appears.
        <img alt="" height="434" src="https://developer.concur.com/sites/default/files/NewPartnerApp_0.png" width="454" /><br />
        
* 
        Fill in the fields using the following table:
<table border="1" bordercolor="#dbdbdb" cellpadding="3" cellspacing="0" width="90%">
<tbody>
<tr class="GrayTableHead">
<td valign="top" width="97">
Field
</td>
<td valign="top" width="325">
Description
</td>
</tr>
<tr>
<td valign="top">
Name
</td>
<td valign="top">
Enter the name that should appear in the list of applications.
</td>
</tr>
<tr>
<td valign="top">
Description
</td>
<td valign="top">
Enter the description of the function of the application.
</td>
</tr>
<tr>
<td valign="top">
Visibility
</td>
<td valign="top">
This field defaults to Private. It can only be modified by Concur Internal staff. It will not be set to anything other than Private until the <a href="https://developer.concur.com/node/624">Concur Review Process</a> is complete.
</td>
</tr>
<tr>
<td valign="top">
Active
</td>
<td valign="top">
Choose whether this application is active. Inactive applications will not appear in the list of available applications.
</td>
</tr>
<tr>
<td height="162" valign="top">
APIs Used
</td>
<td valign="top">
Select the Concur Web Service APIs that this application will interface with. If the API includes sensitive data groups, they will appear as separate check boxes beneath the API. Select only the check boxes for the sensitive data that your application must have access to.<br />
                            **NOTE**: The Quick Expense Web Service requires the Expense Report Web Service scope. If the application wants to GET receipt images, it would use the Imaging Web Service, so it would also require the Imaging Web Service scope.
</td>
</tr>
</tbody>
</table>


* 
        The **Application Authorization** section displays your company domain and automatically creates a **Key** and **Secret** to use with this application. NOTE: The key and secret allow access to any company that enables this application. You MUST keep this information secret (as specified in the Concur Legal Agreement) to maintain security.
* 
        Click **OK**. The application will automatically be enabled for your company.
</ol>
<font size="-2"><a href="#top">Return to Top</a></font>
## 
    <a id="modify" name="modify"></a>Managing Partner Applications
To manage your app, use the **Administration** > **Web Services ** page. Through this page, you can register your app with Concur, enable applications, and configure the scope of data the application can access on the user's behalf.
####
    To modify a partner application

<ol>
* 
        On the **Application Registration **page, select the desired application from the list. Click **Modify**. The **Modify Partner Application** page appears.
* 
        Edit the fields as necessary.
* 
        Click **New Secret **if you need to generate a new secret to use when authenticating with this application.<br />
        **NOTE**: Once a new secret is created, any attempt to authenticate with the old secret will fail. Verify that the secret is updated in all code that creates requests. The key and secret allow access to any company that enables this application. You MUST keep this information secret (as specified in the Concur Legal Agreement) to maintain security.
* 
        Click **OK **to return to the **Application Registration** page.
</ol>
<font size="-2"><a href="#top">Return to Top</a></font>
## 
    <a id="enable" name="enable"></a>Enabling and Disabling Partner Applications
Applications are automatically enabled for your company when they are registered.
####
    To enable or disable an application

<ol>
* 
        On the **Web Services ** page, click **Enable Partner Application**. The **Enable Applications** page appears, displaying a list of available applications. Select the desired application.<br />
        <img alt="" height="131" src="https://developer.concur.com/sites/default/files/Enable_main_small.png" width="559" />

* 
        Click **Enable** to authorize the application access to Concur data on behalf of the OAuth consumer. Click **Disable** to deny access.
</ol>
<font size="-2"><a href="#top">Return to Top</a></font>
<footer>
