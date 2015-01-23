
        <div id="main" class="container">
            <div>
                            </div>
            <div class="row">
                <div class="span12">
<div class="breadcrumbs"><a href="/">Home</a>Launch External URL Callout</div>
                </div>
            </div>

            <div id="content-wrapper">
<!-- <div class="row"> -->
                <div id="content" class="span9">
            # Launch External URL Callout
                    <div class="section">
                    <div id="node-441" class="node clear-block">


    
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
            <td rowspan="3">
                The Launch External URL callout gives clients and developers a platform to extend the functionality of Concur providing a means to deliver custom user interactions, or access functionality found in an external system. The client can arrange to add an Expense Entry form field that is configured to use the Launch External URL call out to a Concur Expense Entry form. Concur Expense will display this field with an attached button that launches a separate window when clicked. The window is controlled by an application connector, created by a third-party developer, the client, or Concur. The application connector is a web server that presents information in the window.<br />
                <br />
                The application connector can access Concur data through the web services, or can access data in an external system. Once the user has completed their actions in the window (such as performing a search or completing a wizard), he/she clicks a button such as &ldquo;Done&rdquo; that indicates the user has concluded their work in the window. The application connector then closes the window.<br />
                <br />
                The application connector can use web services to send information to Concur, to update field values on the expense entry form or other form types. The application connector may send the updates before or after the user closes the window. When the user returns to Concur, the page refreshes and he/she sees the updated values.
                This callout differs from the standard Concur web services in the following ways:
                
                    * 
                        It uses an **outbound** **callout** where Expense calls a public facing URL provided by the application connector, which is a web server hosted by the third-party developer or client. The connector domain and IP address must be whitelisted by Concur during the configuration process.<br />
                        Refer to **<a href="https://developer.concur.com/node/667">Callouts and Application Connectors</a>** for more information.
                    * 
                        The application connector can also use the web services to retrieve or send Concur data.
                    * 
                        The developer or client can configure and maintain the public web service interface (the application connector), or the connector can be maintained by Concur. This guide specifies the request and response format required by Concur.
                    * 
                        Concur provides a sample connector application that the developer or client can install on their network and customize to interface with their system of record. Concur can also customize the connector.
                    * 
                        The developer or client can choose to create their own application connector using a different language, such as PHP, if preferred.
                    * 
                        The client Expense administrator must configure a new form field and add the field to the desired form before this service can be used.
                
            </td>
            <td valign="top">
                
                    * 
                        **Expense** for Concur Professional/Premium
                
                
                
                
                
            </td>
        </tr>
        <tr class="GrayTableHead">
            <td>
                Product Restrictions</td>
        </tr>
        <tr>
            <td valign="top">
                This callout is not supported in the Concur mobile application.
                Concur products are highly configurable, and not all clients will have access to all features.
                Partner developers must determine which configurations are required for their solution prior to the review process. Use the <a href="https://developer.concur.com/forums/concur-connect">Developer Forum</a> if you have questions about the configuration settings.
                Existing clients can work with Concur Advantage Technical Services to create customapplications that work with their configuration.
            </td>
        </tr>
        <tr class="GrayTableHead">
            <td colspan="2">
                Concur Connect Callout Details</td>
        </tr>
        <tr>
            <td colspan="2">
                Information on how to download, install, and configure the application connector is included in **<a href="https://developer.concur.com/node/667">Callouts and Application Connectors</a>**.
            </td>
        </tr>
        <tr class="GrayTableHead">
            <td colspan="2">
                Launch URL Process Overview</td>
        </tr>
        <tr>
            <td colspan="2">
                The configuration process has the following steps:
                <ol>
                    * 
                        Third-party developer, client or Concur downloads, installs, configures, and customizes the application connector. The application connector may make requests to the inbound web services.<br />
                        Refer to **<a href="https://developer.concur.com/node/667">Callouts and Application Connectors</a>**, **Web Services > <a href="https://developer.concur.com/node/25">Core Concepts</a>**, and the reference guides for the individual web services for more information.
                    * 
                        Concur registers the application connector. Concur must whitelist the IP address and domain of the application connector. Be ready to supply the test and production domain information.<br />
                        Refer to **<a href="https://developer.concur.com/node/667">Callouts and Application Connectors</a> **for more information.
                    * 
                        Expense Admin creates a new form field with the Launch External URL control type and adds the field to the expense entry form(s).
                </ol>
                Once the configuration is complete, the callout uses the following process:
                <ol>
                    * 
                        The user clicks the button next to the read-only form field.
                    * 
                        Expense launches a new window and sends the Expense Entry Details URI, Company Domain, and X-User ID in an encoded query string to the application connector.
                    * 
                        The application connector parses the query string to extract the sent data.
                    * 
                        The application connector uses a Concur web service to gather information. This may be expense entry information, user information, or other information.
                    * 
                        The application connector presents a web page in the new window for the user to interact with. This can be a page from a commercial application, or a custom web application.
                    * 
                        The user completes the external system process. This could be a search, a wizard, or another process.
                    * 
                        The application connector sends any field update information to Concur using the Concur web services.
                    * 
                        The user or the application connector closes the window and returns to Concur.
                    * 
                        Concur reloads the page the user came from in order to display any updated field values.
                </ol>
            </td>
        </tr>
        <tr class="GrayTableHead">
            <td colspan="2">
                Security</td>
        </tr>
        <tr>
            <td colspan="2">
                Concur will make calls to the application connector&rsquo;s endpoint using SSL. During configuration, Concur will connect to the application connector to validate that its hostname and access credentials are valid.
                In the code Concur provides for a sample application connector, credentials are stored in a web configuration file that varies by platform, such as web.xml or web.config. However, if you are hosting the connector, you can customize where and how the credentials are stored by customizing HTTPBasicAuth.java or Authentication.cs.
                Expense will not be able to connect to the application connector until a certificate signed by a Certificate Authority (CA) is installed in the application connector. You will need to install the signed certificate before Concur can access the connector.
            </td>
        </tr>
        <tr class="GrayTableHead">
            <td colspan="2">
                <a id="auth" name="auth"></a>Authentication</td>
        </tr>
        <tr>
            <td colspan="2">
                Concur sends requests to the application connector using anonymous authorization (no username and password are provided) over HTTPS.
                The application connector can validate the authenticity of the query by generating a signature hash from the provided variables and comparing it with the passed in values, including the signature hash that Concur supplies. Two of the required variables for the signature hash are username and password, which are entered in Concur on the **Register Application Connector** page in** Web Services **under **Administration**. The application connector must use the same username and password pair to generate it's validation signature hash.
                Refer to the **<a href="https://developer.concur.com/node/667">Callouts and Application Connectors</a> **for more information.
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
                <a href="https://developer.concur.com/node/442">Launch External URL Request</a></td>
            <td valign="top">
                <a href="#exp">Concur Expense Configuration </a>
                <a href="#responses">Responses and Errors</a>
            </td>
        </tr>
    </tbody>
</table>
### 
    <a id="exp" name="exp"></a>Concur Expense Configuration
An Expense text form field must be configured as the Launch URL control type and the form field must be added to the desired form before this callout can be used. The Launch URL control type will not appear in the list until a partner application using the Launch External URL api has been registered and enabled for the company. The administrator must select either a single-line or a multi-line control type, depending on the data that will be placed in the field.
### 
    <a id="reponses" name="reponses"></a>Responses and Errors
Refer to the <a href="https://developer.concur.com/node/205">HTTP Codes</a> page for details of the common responses and errors.

<br />
