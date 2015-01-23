# Travel Request Validation Step By Step

Requests in Concur can be validated in an external system by using a combination of Concur's callouts and web services.
<img src="https://developer.concur.com/sites/default/files/TR_Diagram_small2.png" />
This guide provides a step by step overview of how to set up and use the external validation functionality for Requests. This guide does not provide instruction on the process of programming the application connector, but provides an overview of the required functionality.

## Step 1 - Create an Application Connector
The application connector is a custom web application that is installed on your company's web server. This application needs to be accessible from outside your company's network, so that Concur can send information to it, and it needs to have access to the system that you are using for validation. Concur provides some sample application connector code on the <a href="https://developer.concur.com/api-documentation/sample-code">Sample Code</a> page under Callouts. The application connector must be configured to accept the event notification requests from Concur. In later steps, you will expand the functionality of the application connector to perform additional tasks. The required connector configuration for this step is:

* You must have a current security certificate installed on the server that hosts the application connector.
* You must expose an endpoint on your web server that Concur can connect to. This endpoint can have any name or location. The default endpoint is: /concur/v1.0/notify
* You must be able to accept an HTTP POST from Concur with the event notification data. Refer to the <a href="https://developer.concur.com/node/432">Event Notification</a> information for details of the information format. You just need to store the data that Concur sends for this step.
* You must have a username and password configured for the host web server, which Concur will use when sending the HTTP POST request. This username and password is sent using <a href="https://developer.concur.com/node/25#authtoconnect">HTTP Basic Auth</a>.

Once you have the basic application connector functionality set up, you're ready to move to the next step.

## Step 2 - Configure Event Notification and Request in Concur
In this step, you will enable the Event Notification functionality in your Concur company in order to receive information about submitted Requests. Then, you will enable the Request API in order to request Request details from Concur.
**Before you begin**:

* You must have a user login with administrative privileges in Concur.
* You must know which Request workflows require the Event Notification functionality.

### Procedure: Create the Event Notification Application Connector

1. Log in to Concur as an administrative user.
1. Select **Administration** > **Web Services**.
1. Click **Manage Application Connectors**.
1. Click **New**.
1. Fill out the fields:

<table border="1" bordercolor="#DBDBDB" cellpadding="3" cellspacing="0" width="90% ">
<tbody>
<tr class="GrayTableHead">
<td valign="top" width="30%">
Field</td>
<td valign="top" width="70%">
Description</td>
</tr>
<tr>
<td valign="top">
Name</td>
<td valign="top">
Enter the name that should appear in the list of connectors.</td>
</tr>
<tr>
<td valign="top">
Description</td>
<td valign="top">
Enter the description of the function of the connector, such as what back-end system it connects to.</td>
</tr>
<tr>
<td valign="top">
Host Name</td>
<td valign="top">
Enter the hostname for the connector.<br />
Example: https://{servername}</td>
</tr>
<tr>
<td valign="top">
User Name</td>
<td valign="top">
Enter the user name required to authenticate with the host. This must be the same as the user name specified in the configuration file for the application connector, using HTTP Basic Auth.</td>
</tr>
<tr>
<td valign="top">
Password</td>
<td valign="top">
Enter the password required to authenticate with the host. This must be the same as the password specified in the configuration file for the application connector, using HTTP Basic Auth.</td>
</tr>
</tbody>
</table>

<img src="https://developer.concur.com/sites/default/files/ManageAppConnector_small.png" />

1. In the **Services** section, select **External Report Validation**.
1. Click **Configure**. The **Configure Service** window appears.<br />

<img src="https://developer.concur.com/sites/default/files/ConfigureService.png" />

1. Enter the endpoint that the Concur will connect to on your server. Example: /concur/v1.0/notify
1. Select the **Enabled** check box.
1. In the Workflows section, select the **Submit** check box for each Request workflow that requires notifications.
1. Click **OK**.
1. Click **Test Connection**. Concur will attempt to access the configured endpoint with the provided user credentials.
1. Click **Save**. The application connector is now registered with Concur and enabled.

### Procedure: Create the Request Partner Application

<ol>
1. On the** Web Services **page, click **Register Partner Application**. The **Application Registration** page appears.<br />

<img alt=" /" src="https://developer.concur.com/sites/default/files/RegPartApp_crop.png" />

1. Click **New**. The **New Partner Application** page appears.<br />

<img alt=" /" src="https://developer.concur.com/sites/default/files/NewPartnerApp_0.png" />

1. Complete all of the required fields:

<table border="1" bordercolor="#DBDBDB" cellpadding="3" cellspacing="0" width="90% ">
<tbody>
<tr class="GrayTableHead">
<td valign="top" width="97">
Field</td>
<td valign="top" width="325">
Description</td>
</tr>
<tr>
<td valign="top">
Name</td>
<td valign="top">
Enter the name that should appear in the list of applications.</td>
</tr>
<tr>
<td valign="top">
Description</td>
<td valign="top">
Enter the description of the function of the application.</td>
</tr>
<tr>
<td valign="top">
Visibility</td>
<td valign="top">
This field is only editable by Concur Internal users.</td>
</tr>
<tr>
<td valign="top">
Active</td>
<td valign="top">
Select Active.</td>
</tr>
<tr>
<td valign="top">
APIs Used</td>
<td valign="top">
Select the Request API.</td>
</tr>
</tbody>
</table>

1. The **Application Authorization** section displays your company domain and automatically creates a **Key** and **Secret** to use with this application. **<font color="#FF0000">NOTE: </font>**<font color="#FF0000">**The key and secret allow access to any company that enables this application. You MUST keep this information secret (as specified in the Concur Legal Agreement) to maintain security. **</font>
1. Record the key and secret to use later.
1. Click **OK**. The application will automatically be enabled for your company.
</ol>

You should now begin receiving notifications from Concur when your users submit Requests. In the next step, you'll use the notification data that Concur sends to get the Request information.

## Step 3 - Gather the Request Details
In this step, you will expand the application connector functionality to use the data sent by Concur in the event notification to get details about the Request. You'll use the Request details to validate the Request in a later step. The application connector must be updated to perform the following steps, using the Concur web services:

### Get OAuth Access Token
All requests to Concur web services must be authenticated using <a href="https://developer.concur.com/node/491">OAuth 2.0</a>.
After receiving an event notification, the application connector should send an HTTP GET request to the <a href="https://developer.concur.com/node/492">Get Access Token using Native Flow</a> function. This function requires the login credentials of an administrative Concur user and the Consumer Key that was generated when you created the partner application in the previous step. Refer to the <a href="https://developer.concur.com/node/492">Get Access Token using Native Flow</a> documentation for the format of the request. Concur will respond to the request with the access token required for the next web service request.

### Get Request Details
After you receive the OAuth access token, you are ready to request the Request data. The event notification information that Concur sends includes an element named <span class="codeexample"><ObjectURI>. The connector can send a GET request to the URI specified in this element, supplying the OAuth access token in the request header in the following format:

    GET api/travelrequest/v1.0/requests/nxxKgLlnROz3zHJBCRksaas23dsfs  HTTPS 1.1
    Host: <a href="http://www.concursolutions.com" title="www.concursolutions.com">www.concursolutions.com</a>
    Authorization: OAuth {access token}
    ...

Concur responds with the full Request details, which are documented in <a href="https://developer.concur.com/node/518#requestdetails">Get Request Details</a>.

## Step 4 - Validate the Request Information
In this step, the connector will perform the required validation on the Request information. This step will vary by client. The application connector must be able to access the system(s) used in the validation.
The Request data is validated by the application connector. The validation can produce one of the following results:

* The Request passed validation and can be Approved.
* The Request did not pass validation and must be returned to the employee with an informational message explaining the problem.

In the next step, the application connector will update the Request with the validation results.

## Step 5 - Update the Request Workflow
Once the Request has been validated, the application connector is ready to update it's workflow. If the Request passed validation, it should be approved, and will then travel forward in it's workflow. If the Request did not pass validation, it should be sent back to the employee, which moves it to the beginning of the workflow.

The full Request details include an element named <WorkflowStepURL>. The application connector posts the workflow action (Approve or Send Back to Employee) to this url, using the same OAuth access token in the header. Refer to the <a href="https://developer.concur.com/node/519#requestworkflow">Post Request Workflow Action</a> documentation for the request format.

Concur responds with a success or failure status, and provides additional information for failures.
The application connector has now completed the process of validating a Request, from the initial notification that a Request was submitted, to the request updating the Request workflow in Concur with the validation results.
