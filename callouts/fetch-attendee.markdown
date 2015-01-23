
        <div id="main" class="container">
            <div>
                            </div>
            <div class="row">
                <div class="span12">
<div class="breadcrumbs"><a href="/">Home</a>Fetch Attendee Version 2.0 Callout</div>
                </div>
            </div>

            <div id="content-wrapper">
<!-- <div class="row"> -->
                <div id="content" class="span9">
            # Fetch Attendee Version 2.0 Callout
                    <div class="section">
                    <div id="node-371" class="node clear-block">


    
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
.xml-tag {color: #0000e6}   </style>

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
            <td rowspan="3">
                The Concur Fetch Attendee version 2.0 callout allows clients to import attendee information from their internal system to Expense when a user is adding attendees to an expense. The Expense service sends the attendee search fields to an application connector, created by the client, a third-party developer, or Concur. The connector is hosted by the client or third-party developer, and has access to the attendee system of record. The connector uses the attendee information sent from Expense to search for all matching attendee records in the client&rsquo;s system. Once the connector has the list of possible matches, it sends the attendee data to Expense. The user sees the list of matches and can select the appropriate attendee for the expense.
                This callout differs from the standard Concur web services in the following ways:
                
                    * 
                        It uses an **outbound** **message** where Expense calls a public facing API endpoint provided by the application connector.<br />
                        Refer to **Callouts > <a href="https://developer.concur.com/node/25#co">Core Concepts</a>** for more information.
                    * 
                        The client or third-party developers can configure and maintain the public web service interface (the application connector), or the connector can be maintained by Concur. This documentation specifies the request and response format required by Concur.
                    * 
                        Concur provides a sample connector application that the client can install on their network and customize to interface with their system of record for attendees. Concur can also customize the connector.
                    * 
                        (Optional- Professional/Premium only) The client can choose to create their own application connector using a different language, such as PHP, if preferred.
                    * 
                        The client Expense Administrator must select the attendee types that will use this functionality during <a href="#installproc">application connector registration</a>. Once the attendee types are selected, they will be automatically configured to not allow users to create new attendees manually.
                
            </td>
            <td valign="top">
                
                    * 
                        **Expense** for Concur Professional/Premium
                    * 
                        **Expense** for Concur Standard
                    * 
                        **Expense** for Mobile
                
                
                
                
                
            </td>
        </tr>
        <tr class="GrayTableHead">
            <td>
                Product Restrictions</td>
        </tr>
        <tr>
            <td valign="top">
                Concur products are highly configurable, and not all clients will have access to all features.<br />
                <br />
                Partner developers must determine which configurations are required for their solution prior to the review process. Use the <a href="https://developer.concur.com/forums/concur-connect">Developer Forum</a> if you have questions about the configuration settings.<br />
                <br />
                Existing clients can work with Concur Advantage Technical Services to create customapplications that work with their configuration.</td>
        </tr>
        <tr class="GrayTableHead">
            <td colspan="2">
                Concur Connect Callout Details</td>
        </tr>
        <tr>
            <td colspan="2">
                Information on how to download, install, and configure the application connector is included in **Callouts > <a href="https://developer.concur.com/node/25#co">Core Concepts</a>**.</td>
        </tr>
        <tr class="GrayTableHead">
            <td colspan="2">
                Fetch Attendee Process Overview</td>
        </tr>
        <tr>
            <td colspan="2">
                The configuration process has the following steps:
                <ol>
                    * 
                        Client, third party developer, or Concur downloads, installs, configures, and customizes the application connector.
                    * 
                        (Optional- Professional/Premium only) Expense Admin creates a new attendee type to use with the connector.
                    * 
                        Client <a href="#installproc">registers</a> the application connector, selecting the attendee types that will use the connector.
                </ol>
                Once the configuration is complete, the callout uses the following process:
                <ol>
                    * 
                        The user selects the appropriate attendee type in the **Search** **Attendees** window.
                    * 
                        The user enters information into an attendee field and clicks **Search**.
                    * 
                        Expense sends the attendee search field information to the application connector. This request includes all attendee fields, with any blank values formatted as an empty string.
                    * 
                        The application connector queries the attendee system of record and returns a list of results to Expense.<br />
                        **NOTE**: The results list is limited to 100 records.<br />
                        If the connector returns a valid response that there are no search results, the user receives a message:<br />
                        <img alt="2" src="https://developer.concur.com/sites/default/files/fetchattendee_noresults.png" />
                    * 
                        Expense displays the results in the **Search Results** section of the **Search Attendees** window.<br />
                        **NOTE**: If the application connector does not respond or returns an error, the user is notified in a popup window within Expense:<br />
                        <img alt="f" src="https://developer.concur.com/sites/default/files/fetchattendee_error.png" /><br />
                        Concur will not resend the request unless the user manually initiates the search again.
                    * 
                        If the user adds the attendees to the expense entry, the attendee information is saved in Expense.
                </ol>
            </td>
        </tr>
        <tr class="GrayTableHead">
            <td colspan="2">
                Security</td>
        </tr>
        <tr>
            <td colspan="2">
                Concur will make calls to the application connector&rsquo;s endpoint using SSL. During configuration, Concur will connect to the application connector to validate that its hostname and access credentials are valid.<br />
                <br />
                In the code Concur provides for a sample application connector, credentials are stored in a web configuration file that varies by platform, such as web.xml or web.config. However, if you are hosting the connector, you can customize where and how the credentials are stored by customizing HTTPBasicAuth.java or Authentication.cs.<br />
                <br />
                Expense will not be able to connect to the application connector until a certificate signed by a Certificate Authority (CA) is installed in the application connector. You will need to install the signed certificate before Concur can access the connector.</td>
        </tr>
        <tr class="GrayTableHead">
            <td colspan="2">
                <a id="auth" name="auth"></a>Authentication</td>
        </tr>
        <tr>
            <td colspan="2">
                Authentication between Concur and the application connector is performed using HTTP Basic Auth. By default, these credentials are stored in the appropriate web configuration file for your platform, such as web.xml or web.config. These credentials are entered in Concur on the **Register Application Connector** page in** Web Services **under **Administration**.
                Refer to the **Installation > <a href="#installproc">Process</a> ** for more information.
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
                <a href="https://developer.concur.com/node/657">Version 2.0: Post Attendee Search Request </a>
            </td>
            <td valign="top">
                <a href="#installproc">Installation Process </a>
                <a href="#exp">Concur Expense Configuration </a>
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
        The client or third-party developer will create and install the application connector on their web site or a third party hosting site. The connector should be programmed to accept the requests from Concur and provide the documented responses. A sample connector is available on the <a href="https://developer.concur.com/node/10">Sample Code</a> page under Callouts, and details of the installation process are available at **Callouts** > **Core Concepts** > <a href="https://developer.concur.com/node/25#procs">Sample Connector Procedures</a>. During installation, the client or developer will select and configure an externally available endpoint on the host server for Concur to send the attendee search request to. Refer to <a href="#security">Security</a> for more information about the security requirements of the application connector.
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
                <img alt="1" src="https://developer.concur.com/sites/default/files/RegisterFetchAttendee_small.png" />
                
            
            * 
                In the **Services** section, select** Fetch Attendee**.
            * 
                Click **Configure**. The **Configure Service** window appears.<br />
                <img alt="1" src="https://developer.concur.com/sites/default/files/ConfigFetchAttendee.png" />
            * 
                Enter the endpoint that the Concur will connect to on your server. Example: /attendee/v2.0/fetch
            * 
                Select the **Active** check box if the endpoint is ready for use. Usually you will do this after you have implemented and tested the endpoint in your application connector.
            * 
                Select the attendee types that will use the application connector. These attendee types will be automatically configured to not allow users to create new attendees manually.
            * 
                Click **OK**.
            * 
                Click **Test Connection**. Concur will attempt to access the configured endpoint with the provided user credentials.
            * 
                Click **Save**. The application connector is now registered with Concur and enabled.
        </ol>
        ### 
            <a id="exp" name="exp"></a>Concur Expense Configuration
        The Expense administrator can select which attendee types use the connector when registering the application connector. These attendee types will be automatically configured to not allow users to create new attendees manually.
        **Professional/Premium only**: If desired, the administrator can create a new attendee type specifically for use with the connector.
        ### 
            <a id="responses" name="responses"></a>Responses and Errors
        Refer to the <a href="https://developer.concur.com/node/205">HTTP Codes</a> page for details of the common responses and errors.
        
        <br />
