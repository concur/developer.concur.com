---
title: Enabling and Disabling Apps from the Concur App Center
layout: reference
---

* [Enabling an App](#enable-app)
* [Connecting from the App Center](#connect-app)
* [Connecting Using a Username and Password](#name-password)
* [Disabling an App From the App Center](#disable-app)

## <a name="enable-app"></a>Enabling an App

This guide will provide the steps to enable an enterprise application, which does require administrative permissions. It will provide information on the permission required, adding the permissions for existing users, and enabling the application.

Depending on the application, there are two methods of enabling the integration:

* [Connect from the App Center](#connect-app). Note: Apps eligible for this type of connection utilize [OAuth 2.0 Company-Level Authorization](/api-reference/authentication/company-auth.html) and will have a Connect button displayed within the app listing.

![Connect from SAP Concur App Center Image](./guide-to-enabling-app-center-solutions-basic-connect-from-app-center.png)

* [Username and password](#name-password). If you do not see the Connect button, you will use this method.

## <a name="connect-app"></a>Connecting from the App Center

To enable an app the:

* Concur App Center must be enabled for your company.
* User enabling the app must be an authorized SAP Concur Administrator. If you are unsure whether you are an SAP Concur Administrator, please refer to the section [Assigning Authorized SAP Concur Administrator Permissions](#permissions)

### Step 1: Confirm the App Center Is Enabled

Activating an enterprise application requires that your company has enabled the App Center. If the App Center is enabled, you will see the “App Center” tab when logged into SAP Concur.

![SAP Concur App Center Enabled Image](./guide-to-enabling-app-center-solutions-basic-app-center-enabled.png)

If the App Center tab is unavailable, please log a ticket with the SAP Concur Helpdesk.

### Step 2: Locate the application in the App Center

To find the application, you may use the "search" option or navigate to the app by clicking on the arrows ">". Enterprise applications will be in the "Enterprise Applications" row.

![App Center Navigation](./guide-to-enabling-app-center-solutions-basic-locate-app.png)

### Step 3: Enable the App

* The authorized SAP Concur Administrator can connect to the application using the "Connect" button on the listing.

![App Center Navigation](./guide-to-enabling-app-center-solutions-basic-can-connect.png)

The full client guide covering the subsequent enablement steps can be found here:

[App Center Administration Guide](https://www.concurtraining.com/customers/tech_pubs/Docs/ConcurPremier/UG_Shr/Shr_UG_AppCenterAdmin.pdf)

**Note: This step can either be completed by your own authorized SAP Concur Administrator or you can log a ticket with the SAP Concur Helpdesk to have this step completed for you by our support team.**

If you do not have the appropriate permissions to activate the app, the Connect button will be disabled as shown below. If the Connect button is disabled, please refer to the section [Assigning Authorized SAP Concur Administrator Permissions](#permissions) below.

![SAP Concur App Center Checking Permissions Image](./guide-to-enabling-app-center-solutions-basic-check-permissions.png)



#### <a name="permissions"></a>Assigning Authorized SAP Concur Administrator Permissions
A user at your company with the appropriate permissions is required to activate the application. The instructions below provide information on adding the **Web Service Administrator** permissions for users that will be responsible for enabling and disabling enterprise applications.


##### How to assign Authorized SAP Concur Administrator Permissions in Concur Standard Edition

* Click **Administration**, and then **Expense Settings**, or **Expense & Invoice Settings**, or **Invoice Settings**.
* In the Access to Concur section, click **User Accounts**.
* Double-click the user.
* In the User Permissions section, select the **Can Administer or Travel and Expense Administrator** (depending on configuration) check box.

![Standard Enabling WS Admin Image](./guide-to-enabling-app-center-solutions-standard-wsadmin-userpermissions.png)

##### How to assign Authorized SAP Concur Administrator Permissions in Concur Professional Edition

* Click **Administration**, then **Company**, then **Company Admin**.
* Click **User Permissions** (left menu).
* Find the user who will activate the application, and select **Add** to grant Web Services Administrator Permission.

![Professional Enabling WS Admin Image](./guide-to-enabling-app-center-solutions-basic-enable-ws-admin-professional.png)



## <a name="name-password"></a>Connecting Using a Username and Password

### Step 1: Create & Transfer Credentials

> Note: This step can be completed by your own authorized SAP Concur Administrator. That individual must have the ability to authorize data sharing on behalf of your company. It is important that this Web Services Admin User Profile is not the same as any actual user of the system. **If an actual user’s credentials are utilized for this purpose and they leave the company, the applications will no longer function**.

#### How to Create a WSAdmin User Profile in Concur Standard Edition

* Click **Administration**, and then **Expense Settings**, or **Expense & Invoice Settings**, or **Invoice Settings**.
* In the Access to Concur section, click **User Accounts**.
* Click **Create/Edit User**.

![Creating a WS Admin user in standard image](./guide-to-enabling-app-center-solutions-standard-wsadmin-full.png)

The new WSAdmin User Profile in Concur Standard Edition should have the following attributes:

* **LoginID**: Include WSAdmin and the name of the application as the login id: WSAdmin-AppProviderName@YourCompanyDomain.com
* **First Name**: To easily identify this user profile later and also who the authorized user was that enabled the application, use a combination of “WSAdmin” and the first name of the administrator who is authorizing the application. Example: WSADMIN_John
* **Last Name**: Insert the last name of the authorized administrator who will enable the application.
* **Password**: Create a unique and secure password for the user.
* **Permissions**:
  * Select the **Can Administer or Travel and Expense Administrator** (depending on configuration) check box.
  * Select check boxes based on what type of data is needed for the application. The system will grant the relevant data access based on the roles that are assigned to this user. For example, if the app needs to access Travel data and the WSAdmin User Profile does not have access to travel, the app will not access travel data. Options include:
    * **Can Submit Expense Reports**
    * **Can Book Travel**
    * **Is Invoice AP User**
* Click **Save** then securely send the **Login ID** and **Password** to your app provider.

#### How to Create a WSAdmin User Profile in Concur Professional Edition:

* Click **Administration**, then **Company**, then **Company Admin**.
* Click **Add User**.

![Creating a WS Admin user in professional image](./guide-to-enabling-app-center-solutions-basic-create-ws-admin-user-professional.png)

The new WSAdmin User Profile in Concur Professional Edition should have the following attributes:

* **LoginID**: Include WSAdmin and the name of the application as the login id: WSAdmin-AppProviderName@YourCompanyDomain.com
* **Password**: Create a unique and secure password for the user.
* **First Name**: To easily identify this user profile later and also indicate who the authorized user was that enabled the application, use a combination of “WSAdmin” and the first name of the administrator who is authorizing the application. Example: WSADMIN_John
* **Last Name**: Insert the last name of the authorized administrator who will enable the application.
* **Email Address**: Use the email address of the authorized administrator.

![WS Admin user permission in professional image](./guide-to-enabling-app-center-solutions-basic-enable-ws-admin-professional-user-permission.png)

Next, while still in the **Administration** area, click **User Permissions**.

* Find the new WSAdmin User and select **Add** to grant **Web Services Administrator** permission.
* Ensure the WSAdmin profile also has the Expense User, Travel User, and Invoice User permissions or roles for apps integrating with Expense, Travel, and/or Invoice Services respectively. The system will grant the relevant data access based on the roles that are assigned to this user. For example, if the app needs to access Travel data and the WSAdmin User Profile does not have access to book travel, the app will not be able to access the necessary travel data.
* Once your new user profile has been created, transfer the login name and password securely to the app provider you are working with to create a secure data connection.

### Step 2: Enable the App

* The SAP Concur administrator who has been named in the newly created WSAdmin Profile logs into SAP Concur with the new credentials.
* Then go to **Administration > Company > Web Services > Enable Partner Application** and find the app.
* Click **Enable** and confirm the sharing of data.

![Enabling the application image](./guide-to-enabling-app-center-solutions-basic-enable-application.png)

## <a name="disable-app"></a>Disabling an App From the App Center

The administrator can disconnect from an app at any time. As soon as the app is disconnected, the integration will be stopped.

### Step 1: Select the App Listing in the App Center

* Applications can be found utilizing search or the categories filter.
* Enterprise integrations will be found in the “Enterprise Applications” section of the App Center.
* Click on the listing you would like to disconnect.

![Finding the app to disable image](./guide-to-enabling-app-center-solutions-basic-disabling-find.png)

### Step 2: Click Disconnect

* Within the app, administrators with the appropriate credentials will see the option to “disconnect”.

![Disconnecting an app image](./guide-to-enabling-app-center-solutions-basic-disabling-disconnect.png)

### Step 3: Confirm Disconnect

* Click **Yes** to confirm disconnect and complete the process.
* The “Connected” indication will no longer appear.

![Disconnecting confirmation image](./guide-to-enabling-app-center-solutions-basic-disabling-confirmation.png)
