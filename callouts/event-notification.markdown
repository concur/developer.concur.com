
            # Event Notification Callout
                    <div class="section">
                    <div id="node-432" class="node clear-block">


    
    <div class="content clear-block">
                <script>
  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

  ga('create', 'UA-41161356-1', 'concur.com');
  ga('send', 'pageview');

</script>
<style type="text/css">
.overflow_box{
border: 1px solid grey;
padding: .5em;
overflow: auto;
background-color: #DBDBDB;
font-family:"Courier New", Courier, monospace;
font-size:11px;
}
.xml-attribute {color: #009900}
.xml-value {color: #ce7b00}
.ST0 {color: #00007c; font-family: Monospaced; font-weight: bold}
.xml-tag {color: #0000e6}</style>
<a name="top"></a>
<table border="1" bordercolor="#DBDBDB" cellpadding="3" cellspacing="0" width="100% ">
    <tbody>
        <tr class="GrayTableHead">
            <td>
                Description</td>
            <td>
                Works With These Concur Products</td>
        </tr>
        <tr>
            <td>
                The Event Notification callout allows clients to choose to be notified through web services when certain actions take place in their Concur company. If the client uses Concur Expense, the supported events are the Expense report entering the Post-Submit or Pre-Extract workflow steps. If the client uses Concur Travel Request, the supported events are the Travel Request entering the Post-Submit or Pre-Extract workflow steps. When the event happens, Concur generates a notification and places it into the notification system queue. When the notification reaches the front of the queue, Concur sends a request to the configured endpoint with event information.
                This callout differs from the standard Concur web services in the following ways:
                
                    * 
                        It uses an **outbound** **callout** where Expense calls a public facing URL provided by the application connector, which is a web server hosted by the third-party developer or client.<br />
                        Refer to **<a href="https://developer.concur.com/node/667">Callouts and Application Connectors</a> **for more information.
                    * 
                        The application connector can also use the web services to retrieve or send Concur data.
                    * 
                        The developer or client can configure and maintain the public web service interface (the application connector), or the connector can be maintained by Concur. This guide specifies the request and response format required by Concur.
                    * 
                        Concur provides a sample connector application that the developer or client can install on their network and customize to interface with their system of record. Concur can also customize the connector.
                    * 
                        The developer or client can choose to create their own application connector using a different language, such as PHP, if preferred.
                
            </td>
            <td valign="top">
                
                    * 
                        **Expense** for Concur Professional/Premium
                    * 
                        **Request** for Concur Professional/Premium
                    * 
                        Concur Mobile
                
            </td>
        </tr>
        <tr class="GrayTableHead">
            <td colspan="2">
                Example Use Case</td>
        </tr>
        <tr>
            <td colspan="2">
                An example use of this callout is:
                <ol>
                    * 
                        A Concur user submits an expense report, triggering an Event Notification.
                    * 
                        The notification is placed in a queue and processed in a first come, first served order.
                    * 
                        When the notification gets to the front of the queue, it is sent to the endpoint specified by the developer.
                    * 
                        The application connector returns the HTTP 200 status code, and the notification is removed from the queue.
                    * 
                        The developer uses the Report information to make the <a href="https://developer.concur.com/node/487">Get Expense Report Details</a> request.
                    * 
                        The developer uses the additional information to validate some expense report information.
                    * 
                        The developer then uses the <a href="https://developer.concur.com/node/490">Post Expense Report Workflow Action</a> function to approve the report.
                </ol>
                This is one use case for the Event Notification callout, however it can be used for a wide variety of requirements.
            </td>
        </tr>
        <tr class="GrayTableHead">
            <td>
                Concur Connect Callout Details</td>
            <td>
                Product Restrictions</td>
        </tr>
        <tr>
            <td colspan="">
                Information on how to download, install, and configure the application connector is included in **<a href="https://developer.concur.com/node/667">Callouts and Application Connectors</a>**.
            </td>
            <td>
                Concur products are highly configurable, and not all clients will have access to all features.
                Partner developers must determine which configurations are required for their solution prior to the review process. Use the <a href="https://developer.concur.com/forums/concur-connect">Developer Forum</a> if you have questions about the configuration settings.
                Existing clients can work with Concur Advantage Technical Services to create customapplications that work with their configuration.
            </td>
        </tr>
        <tr class="GrayTableHead">
            <td colspan="2">
                Event Notification Process Overview</td>
        </tr>
        <tr>
            <td colspan="2">
                The configuration process has the following steps:
                <ol>
                    * 
                        Third-party developer, client or Concur downloads, installs, configures, and customizes the application connector. The application connector may make requests to the inbound web services.<br />
                        Refer to **<a href="https://developer.concur.com/node/667">Callouts and Application Connectors</a>**, **Web Services > <a href="https://developer.concur.com/node/25">Core Concepts</a>**, and the reference guides for the individual web services for more information.
                    * 
                        The developer or the Concur clients registers the application connector.<br />
                        Refer to **Installation > <a href="#installproc">Process</a> **for the detailed steps.
                </ol>
                Once the configuration is complete, the callout uses the following process:
                <ol>
                    * 
                        The configured event occurs in Concur.
                    * 
                        Concur sends the request information to the specified endpoint for the application connector.
                </ol>
            </td>
        </tr>
        <tr class="GrayTableHead">
            <td colspan="2">
                <a id="security" name="security"></a>Security</td>
        </tr>
        <tr>
            <td colspan="2">
                Concur will make calls to the application connector&rsquo;s endpoint using SSL. During configuration, Concur will connect to the application connector to validate that its hostname and access credentials are valid.
                In the code Concur provides for a sample application connector, credentials are stored in a web configuration file that varies by platform, such as web.xml or web.config. However, if you are hosting the connector, you can customize where and how the credentials are stored by customizing HTTPBasicAuth.java or Authentication.cs.
                Expense or Travel Request will not be able to connect to the application connector until a certificate signed by a Certificate Authority (CA) is installed in the application connector. If you are hosting the application connector, you will need to install the signed certificate before Concur can access the connector.
            </td>
        </tr>
        <tr class="GrayTableHead">
            <td colspan="2">
                <a id="auth" name="auth"></a>Authentication</td>
        </tr>
        <tr>
            <td colspan="2">
                Authentication between Concur and the application connector is performed using HTTP Basic Auth. By default, these credentials are stored in the appropriate web configuration file for your platform, such as web.xml or web.config. These credentials are entered in Concur on the **Register Application Connector** page in** Web Services **under **Administration**.
                Refer to the **<a href="https://developer.concur.com/node/667">Callouts and Application Connectors</a>** page for more information.
            </td>
        </tr>
        <tr class="GrayTableHead">
            <td>
                Functions</td>
            <td>
                Additional Information</td>
        </tr>
        <tr>
            <td>
                <a href="https://developer.concur.com/node/525">Delete Notification</a>
                <a href="https://developer.concur.com/node/526">Get Notifications by Status</a>
                <a href="https://developer.concur.com/node/433">Post Event Notification Request </a>
            </td>
            <td valign="top">
                <a href="#installproc">Installation Process</a>
                <a href="#responses">Responses and Errors</a>
            </td>
        </tr>
    </tbody>
</table>
### 
    <a id="installproc" name="installproc"></a>Installation Process
The installation process includes installing the application connector, and registering it with Concur.
<ol>
    * 
        The third-party developer or client will create and install the application connector on their web site or a third party hosting site. The connector should be programmed to accept the requests from Concur and provide the documented responses. A sample connector is available on the <a href="https://developer.concur.com/node/10">Sample Code</a> page under Callouts, and details of the installation process are available at **<a href="https://developer.concur.com/node/667">Callouts and Application Connectors</a>**. During installation, the developer or client will select and configure an externally available endpoint on the host server for Concur to send the event notification request to. Refer to <a href="#security">Security</a> for more information about the security requirements of the application connector.
    * 
        The client registers the application connector with Concur:
        <ol>
            * 
                Log in to Concur as an administrative user.
            * 
                Select **Administration** > **Web Services**.
            * 
                Click **Manage Application Connectors**.
            * 
                Click **New**.
            * 
                Fill out the fields:<br />
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
                                Enter the description of the function of the connector, such as what back-end system it might connect to.</td>
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
                <br />
                <img alt="1" src="https://developer.concur.com/sites/default/files/EventNotify1.png" />
            * 
                In the **Services** section, select **Send Notification**.
            * 
                Click **Configure**. The **Configure Service** window appears.<br />
                <img alt="1" src="https://developer.concur.com/sites/default/files/SendNotification.png" />
            * 
                Enter the endpoint that the Concur will connect to on your server. Example: /concur/v1.0/notify
            * 
                Select the **Enabled** check box if the endpoint is ready for use. Usually you will do this after you have implemented and tested the endpoint in your application connector.
            * 
                In the Workflows section, select the workflow step for each expense report or travel request workflow that requires notifications.
            * 
                Click **OK**.
            * 
                Click **Test Connection**. Concur will attempt to access the configured endpoint with the provided user credentials.
            * 
                Click **Save**. The application connector is now registered with Concur and enabled.
        </ol>
    
</ol>
<blockquote>
    <blockquote>
        </blockquote>
</blockquote>
### 
    <a id="reponses" name="reponses"></a>Responses and Errors
Refer to the <a href="https://developer.concur.com/node/205">HTTP Codes</a> page for details of the common responses and errors.

<br />
