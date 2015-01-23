
        <div id="main" class="container">
            <div>
                            </div>
            <div class="row">
                <div class="span12">
<div class="breadcrumbs"><a href="/">Home</a>Launch External URL Request</div>
                </div>
            </div>

            <div id="content-wrapper">
<!-- <div class="row"> -->
                <div id="content" class="span9">
            # Launch External URL Request
                    <div class="section">
                    <div id="node-442" class="node clear-block">


    
    <div class="content clear-block">
                This callout supports the following GET actions:

    * 
        <a href="#getexturl">Get External URL Request </a>

## 
    <a id="getexturl" name="getexturl"></a>Get External URL Request
<table border="1" bordercolor="#DBDBDB" cellpadding="3" cellspacing="0" width="100% ">
    <tbody>
        <tr class="GrayTableHead">
            <td>
                Description</td>
        </tr>
        <tr>
            <td>
                Concur will send a request with the information in an encoded query string when the user clicks the button.</td>
        </tr>
        <tr class="GrayTableHead">
            <td>
                Request URI</td>
        </tr>
        <tr>
            <td>
                The Launch External URL callout launches the URI for the application connector, which can be in a custom location for each client. The standard location is:
                <pre class="overflow_box">
https://{servername}/concur/form/v1.0/get</pre>
                The URI is configured on the **Register Application Connector** page in** Web Services** under **Administration**.<br />
                <br />
                The full URI for the request includes the following query string values:
                <pre class="overflow_box">
https://{servername}/concur/form/v1.0/get?xcompanydomain={URL-encoded company domain}
    <span class="ST0">&amp;xuserid={URL-encoded login ID of interactive user}
    <span class="ST0">&amp;itemurl={URL-encoded url to item}
    <span class="ST0">&amp;nonce={URL-encoded timestamp}
    <span class="ST0">&amp;signature={URL-encoded signature hash}
</pre>
            </td>
        </tr>
        <tr class="GrayTableHead">
            <td>
                Request Query Parameters</td>
        </tr>
        <tr>
            <td>
                <table border="1" bordercolor="#DBDBDB" cellpadding="3" cellspacing="0" width="100% ">
                    <tbody>
                        <tr class="GrayTableHead">
                            <td valign="top" width="30%">
                                Value</td>
                            <td valign="top" width="70%">
                                Description</td>
                        </tr>
                        <tr>
                            <td valign="top">
                                xcompanydomain</td>
                            <td valign="top">
                                The company domain.</td>
                        </tr>
                        <tr>
                            <td valign="top">
                                xuserid</td>
                            <td valign="top">
                                The Concur user ID of the logged-in user. This may be an expense delegate instead of the report owner. To get the report owner ID, use the itemurl to get the details of the expense entry, then use those details to get the associated report details, including the report owner ID.</td>
                        </tr>
                        <tr>
                            <td valign="top">
                                itemurl</td>
                            <td valign="top">
                                The URL-encoded URI to access the item the field appears on. An example would be the expense entry URI used by the Expense Report web service.</td>
                        </tr>
                        <tr>
                            <td valign="top">
                                nonce</td>
                            <td valign="top">
                                The URL-encoded GUID used to generate the signature.</td>
                        </tr>
                        <tr>
                            <td valign="top">
                                signature</td>
                            <td valign="top">
                                The URL-encoded signature hash.</td>
                        </tr>
                    </tbody>
                </table>
            </td>
        </tr>
        <tr class="GrayTableHead">
            <td>
                Authenticating the Request</td>
        </tr>
        <tr>
            <td>
                To authenticate the request, the developer of the page in the app connector will need to generate an auth signature and compare it with the one passed in the query string.<br />
                <br />
                When the request is received by the connector:
                <ol>
                    * 
                        Obtain the username and password for the application connector. How you do this will be specific to your implementation.
                    * 
                        Parse and URL decode the following from the query string:
                        <ol>
                            * 
                                xcompanydomain
                            * 
                                xuserid (used for subsequent web service call)
                            * 
                                itemurl
                            * 
                                nonce
                            * 
                                signature (used to authenticate and verify the request)
                        </ol>
                    
                    * 
                        Base64-decode the provided signature.
                    * 
                        Calculate your own base signature string by appending the values as such:<br />
                        {xcompanydomain} + {xuserid} + {itemurl} + {connector username} + {connector password} + {nonce}
                    * 
                        Use HMacSHA1 to generate a signature hash using the base signature string. To generate the key, concatenate the lower-case value for {connector username} and the exact {connector password}. For example, if the connector user name is JohnDoe, and the password is password, the key would be johndoepassword.
                    * 
                        Compare the generated signature hash with the signature hash provided in the request query string.
                </ol>
                If the signature hashes match the you know the credentials are valid and the request has not been tampered with.
                **NOTES:**
                
                    * 
                        You can store the nonce to help prevent replay attacks if necessary.
                    * 
                        The order of the query parameters is not important, but the values in the base signature string must be combined in the correct order to generate the signature hash correctly.
                
            </td>
        </tr>
    </tbody>
</table>
####
    XML Example Request
<pre class="overflow_box">
GET https://{URL to your custom connector and endpoint}
?xcompanydomain={URL-encoded company domain}
    <span class="ST0">&amp;xuserid={URL-encoded login ID of interactive user}
    <span class="ST0">&amp;itemurl={URL-encoded url to item}
    <span class="ST0">&amp;nonce={URL-encoded timestamp}
    <span class="ST0">&amp;signature={URL-encoded signature hash}
</pre>
## 
    Get External URL Response
<table border="1" bordercolor="#DBDBDB" cellpadding="3" cellspacing="0" width="100% ">
    <tbody>
        <tr class="GrayTableHead">
            <td>
                Content Body</td>
        </tr>
        <tr>
            <td>
                The application connector does not directly respond to the Launch External URL request. The application connector completes any updates to Concur using the Inbound Web Services. The Launch External URL functionality monitors the external window, and when the window is closed, it redraws the form the user launched from to display any updated values.<br />
                <br />
                The following example shows how the Launch External URL web service is used to bring an external system value into an Expense Entry form field. The following configuration has already been completed:
                
                    * 
                        The Project ID field has been configured as a Launch URL form field control type.
                    * 
                        The Project ID field has been added to the expense entry form.
                    * 
                        The application connector has been configured to use the expense type of the entry and the user ID to search for the correct Project IDs and present them to the user.
                
                <img alt=" /" src="/sites/default/files/LaunchExtURL_small.png" />
            </td>
        </tr>
    </tbody>
</table>
<br />
