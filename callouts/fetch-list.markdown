
        <div id="main" class="container">
            <div>
                            </div>
            <div class="row">
                <div class="span12">
<div class="breadcrumbs"><a href="/">Home</a>Fetch List Callout</div>
                </div>
            </div>

            <div id="content-wrapper">
<!-- <div class="row"> -->
                <div id="content" class="span9">
            # Fetch List Callout
                    <div class="section">
                    <div id="node-443" class="node clear-block">


    
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
                The Concur Fetch List callout allows clients to import list items from an internal system to Expense when a user is filling out list fields for an expense. The Expense service sends a request for list items to an application connector, created by the client, a third-party developer, or Concur. The connector is hosted by the client or developer, and has access to the list item system of record. The connector uses the list information sent from Expense to search for all matching list items in the system of record. Once the connector has the list items, it sends the data to Expense. The user sees the list items and can select the appropriate item for the expense. When the user saves the expense, the list item is added to the list within Expense.
                This callout differs from the inbound Concur web services in the following ways:
                
                    * 
                        It uses an **outbound** **message** where Expense calls a public facing API endpoint provided by the application connector.<br />
                        Refer to **<a href="https://developer.concur.com/node/667">Callouts and Application Connectors</a> **for more information.
                    * 
                        The third-party developer or client can configure and maintain the public web service interface (the application connector), or the connector can be maintained by Concur. This guide specifies the request and response format required by Concur.
                    * 
                        Concur provides a sample connector application that the developer or client can install on their network and customize to interface with their system of record for list items. Concur can also customize the connector.
                    * 
                        The developer or client can choose to create their own application connector using a different language, such as PHP, if preferred.
                    * 
                        The client Expense administrator must configure a list (most commonly a connected list), and Concur must perform database configuration on the list before this service can be used.
                
            </td>
            <td valign="top">
                
                    * 
                        **Expense** for Concur Professional/Premium
                    * 
                        Concur's mobile app
                
                
                
                
                
            </td>
        </tr>
        <tr class="GrayTableHead">
            <td>
                Product Restrictions</td>
        </tr>
        <tr>
            <td valign="top">
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
                Information on how to download, install, and configure the application connector is included in **<a href="https://developer.concur.com/node/667">Callouts and Application Connectors</a>**.</td>
        </tr>
        <tr class="GrayTableHead">
            <td colspan="2">
                Fetch List Process Overview</td>
        </tr>
        <tr>
            <td colspan="2">
                The configuration process has the following steps:
                <ol>
                    * 
                        Third-party developer, client or Concur downloads, installs, configures, and customizes the application connector.<br />
                        Refer to **<a href="https://developer.concur.com/node/667">Callouts and Application Connectors</a> **for more information
                    * 
                        Concur registers the application connector.<br />
                        Refer to **<a href="https://developer.concur.com/node/667">Callouts and Application Connectors</a> **for more information
                    * 
                        Expense Admin creates a new list in List Management.
                    * 
                        Concur configures the list to search for external items.
                    * 
                        If using a connected list, Expense Admin creates a connected list definition in Forms and Fields.
                </ol>
                Once the configuration is complete, the callout uses the following process:
                <ol>
                    * 
                        The user selects the external sourcelist field while creating an expense entry.
                    * 
                        Expense sends the list field information and the item codes for the previously selected levels (for connected lists) to the application connector.
                    * 
                        The application connector queries the list system of record and returns the set of list items to Expense.
                    * 
                        Expense displays the list items in a drop down list.
                    * 
                        The user selects the desired list item and saves the expense.
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
                Authentication between Concur and the application connector is performed using HTTP Basic Auth. By default, these credentials are stored in the appropriate web configuration file for your platform, such as web.xml or web.config. These credentials are entered in Concur on the **Register Application Connector** page in **Web Services **under **Administration**.
                Refer to **<a href="https://developer.concur.com/node/667">Callouts and Application Connectors</a> **for more information.
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
                <a href="https://developer.concur.com/node/444">Post List Search Request</a></td>
            <td valign="top">
                <a href="#exp">Concur Expense Configuration </a>
                <a href="#responses">Responses and Errors</a>
            </td>
        </tr>
    </tbody>
</table>
### 
    <a id="exp" name="exp"></a>Concur Expense Configuration
Expense must have a list field configured to use an external source before this callout can be used. The client creates the list, Concur configures it to use the external source, and the client creates the connected list definition if necessary.
### 
    <a id="reponses" name="reponses"></a>Responses and Errors
Refer to the <a href="https://developer.concur.com/node/205">HTTP Codes</a> page for details of the common responses and errors.
<br />
