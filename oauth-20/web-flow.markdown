
        <div id="main" class="container">
            <div>
                            </div>
            <div class="row">
                <div class="span12">
<div class="breadcrumbs"><a href="/">Home</a>OAuth 2.0 Web Flow</div>
                </div>
            </div>

            <div id="content-wrapper">
<!-- <div class="row"> -->
                <div id="content" class="span9">
            # OAuth 2.0 Web Flow
                    <div class="section">
                    <div id="node-494" class="node clear-block">


    
    <div class="content clear-block">
                
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
.xml-tag {color: #0000e6}
.overflow_box1 {border: 1px solid grey;
padding: .5em;
overflow: auto;
background-color: #edebe7;
}   </style>

<a name="top"></a>
<table border="1" bordercolor="#DBDBDB" cellpadding="3" cellspacing="0" width="100% ">
    <tbody>
        <tr class="GrayTableHead">
            <td colspan="2">
                Description</td>
        </tr>
        <tr>
            <td colspan="2">
                Companies that partner with Concur can use the Concur Connect platform to link their partner application with Concur users. The Concur user sees a list of certified partners on the App Center page, and can choose to grant the application access to their Concur information. This process uses the OAuth 2.0 Web flow.
                The user must authenticate with Concur and the partner application in order to complete the linkage between the user's Concur account and their account with the partner application's company. Once this link has been enabled, the partner application can request an OAuth token for the user. The application uses this OAuth token while making other Concur Connect web services requests.
                Partner Applications that need to access data for the entire company must initiate the OAuth Web flow with a user that can provide <a href="#enterpriseauthflow">Company Level Authentication</a>. This includes companies that have an enterprise license agreement with the company to operate on behalf of all users in the company. Example applications are:
                
                    * 
                        Expense Data Aggregation and Reporting
                    * 
                        Travel Data Aggregation and Reporting
                    * 
                        Financial System Integration
                
                Partner Applications that need to access data for individual users must initiate the OAuth Web flow with a user that can provide <a href="#userauthflow">User Level Authentication</a>. Example applications are:
                
                    * 
                        Travel Booking Tracking
                    * 
                        Expense Receipt Management
                    * 
                        Loyalty Program Management
                
                **NOTE**: This process applies only to partners that are certified to appear on the App Center tab within Concur.
            </td>
        </tr>
        <tr class="GrayTableHead">
            <td colspan="2">
                Concur App Center</td>
        </tr>
        <tr>
            <td colspan="2">
                The App Center tab appears on the primary menu in Concur. The App Center tab is where Concur users enable Concur Connect Partners to share their data between their accounts with the partner and Concur. Concur administrators can begin the inquiry process for company-wide applications on this tab. Only Concur Connect partners with certified integrations can appear on this tab.
                
                <img alt="" height="474" src="https://developer.concur.com/sites/default/files/App_Center_Latest.png" width="620" />
                **User Access Applications**
                Applications that manage data for a single user can begin the connection process from the App Center tab. This process is detailed in <a href="#userauthflow">User Level Authentication</a>.
                **Company Access Applications**
                Company-wide applications require additional steps to connect. The application listing on the App Center allows the administrative user to learn more about the application, and initiate the sales process. Once the sales process is completed by the company and partner, the partner can direct the administrator to a page that begins the <a href="#enterpriseauthflow">Company Level Authentication</a>. This page is called the **Connect Integration** page.
                **Disclaimer**: Concur reserves the right to select and display partners as is deemed fit and application review does not guarantee a listing under the App Center tab. Listings can and will be removed if deemed necessary by Concur.
            </td>
        </tr>
        <tr class="GrayTableHead">
            <td colspan="2">
                Application Review</td>
        </tr>
        <tr>
            <td colspan="2">
                Partners wishing to appear on the App Center tab work with Concur to have their application reviewed.Refer to the <a href="https://developer.concur.com/node/624/">Application Review Center</a> for more information.
            </td>
        </tr>
        <tr class="GrayTableHead">
            <td>
                Resources</td>
            <td>
                Additional Information</td>
        </tr>
        <tr>
            <td>
                <a href="https://developer.concur.com/node/493">OAuth Access Token</a>
            </td>
            <td valign="top">
                <a href="#enterpriseauthflow">Company Level Authentication </a><br />
                    <a href="#enterpriseauthflow">Company Level Authentication</a><a href="#entauthfromconnect"> from the App Center</a><br />
                    <a href="#userauthflow">User Level Authentication </a><br />
                    <a href="#concurintegration">Concur Integration Page</a><br />
                    <br />
                    <a href="#oauthstep">OAuth Web Flow Step by Step</a><br />
                    <a href="#enterpriseauthexample">Company Level Authentication Example</a><br />
                    <a href="#userauthexample">User Level Authentication Example</a>
            </td>
        </tr>
    </tbody>
</table>
## 
    <a id="enterpriseauthflow" name="enterpriseauthflow"></a>Company Level Authentication
Partner Applications that require access to data for the entire company must receive authorization from a company user with a valid administration user role (Web Services Administrator for Professional, Can Administer for Standard). Concur recommends that clients create a separate user account that is not tied to an individual for this purpose. The administrative user grants access to their Concur company once the sales process for the application has been completed by their company and the partner. The partner then directs the administrative user to a page on their site (the Connect Integration page) that begins the OAuth Web flow. Company Level Authentication has the following steps:
<ol>
    * 
        The user logs in to the partner's site. The partner should have an account configured for the user's company, in order to store the OAuth token and any other company-specific information.
    * 
        The user navigates to the partner's Connect Integration page.
    * 
        The partner's page launches the <a href="#oauthstep">OAuth 2.0 Web Flow</a> process.
    * 
        The administrative user logs in to Concur, and grants access to the company's data.
    * 
        The Partner stores the OAuth token for the user/company, and uses it in all future web service requests.
</ol>
## 
    <a id="userauthflow" name="userauthflow"></a>User Level Authentication
### 
    <a id="concurintegration" name="concurintegration"></a>Connect Integration Page
Partner Applications that require individual users to grant access to their Concur accounts must have a location on their server for this functionality. Certified Concur Connect Partners will host a private **Connect Integration** page on their website. Concur users can navigate to this page from the App Center tab within Concur. The Connect Integration page provides users a way to link their accounts on the partners&rsquo; sites to their Concur accounts. This page must have two functions:

    * 
        Allow the user to connect to Concur
    * 
        Store the user's OAuth access token on the supplier's site

Here is the flow for how Concur users navigate to a partner&rsquo;s **Connect Integration** page to provide User Level Authentication:
<ol>
    * 
        User logs into Concur.
    * 
        User clicks the App Center tab.
    * 
        User selects the partner to link accounts with.
    * 
        Concur opens a new browser window or tab and navigates to the partner&rsquo;s **Connect Integration** page.
    * 
        The user follows the instructions and steps described on the Connect Integration page to enable the account link.
</ol>
Once users arrive on the Connect Integration page, they will link to Concur.
### 
    Link to Concur
The partner will design the **Connect**** Integration** page to work with their existing site. A key part of the **Connect Integration** page is a button or link users click to connect the user&rsquo;s account on the partner&rsquo;s site to the user&rsquo;s Concur account. Clicking the **Link to Concur** button initiates the <a href="#oauthstep">OAuth 2.0 Web Flow</a> process. As part of the certification process Concur will provide the partner a Consumer Key and Consumer Secret that the partner will use in the OAuth 2.0 Web Flow.
At the end of the OAuth 2.0 Web Flow, Concur provides an OAuth Access Token the partner must store with the user&rsquo;s account on the partner&rsquo;s site.
### 
    Link to User&rsquo;s Account on Partner&rsquo;s Site
The Connect Integration page must store the Concur OAuth Access Token to the user&rsquo;s account. In order to do this, the user must have an account on the partner&rsquo;s site and be logged into their account.<br />
    This means that **<em>after</em>** the user has successfully linked to Concur, the **Connect Integration** page must present the user these options:
<ol>
    * 
        **Sign-In to your Account**, or
    * 
        **Create an Account** &ndash; this includes logging in to the new account.
</ol>
After the user either creates a new account or logs in to an existing account, the Connect Integration page stores the Concur OAuth Access Token to the user&rsquo;s account. The partner now has the access token it will use when sharing data with Concur for this user. This completes the Concur integration. The user can now close the Connect Integration page, or navigate elsewhere on the partner&rsquo;s site.
### 
    Create an Account
Some users will arrive on a partner&rsquo;s Connect Integration page and not have an account with the partner. The Connect Integration page must provide users a way to create a new account and then log in to this account.<br />
    The partner will present the user an enrollment form. Concur recommends the partner prepopulate this form with the user&rsquo;s Concur data.The User Web Service provides a way to get details that often appear on account enhancements forms such as the user&rsquo;s name, addresses, and telephone numbers.
The user completes the enrollment form to create the new account. The partner stores the OAuth access token with the newly created account.
## 
    <a id="oauthstep" name="oauthstep"></a>OAuth Web Flow Step by Step:
**Step One**:
When the user or administrator clicks the **Link to Concur** button on the Connect Integration page of the third party application, the page redirects the user to the Concur OAuth login page.
Here&rsquo;s the format for the redirection URL:
<pre class="overflow_box1">
https://www.concursolutions.com/net2/oauth2/Login.aspx?client_id=APP_KEY&amp;scope=REQUESTED_APIS&amp;redirect_uri=YOUR_REDIRECT_URI&amp;state=OPTIONAL_APP_DEFINED_STATE</pre>
<table border="1" bordercolor="#DBDBDB" cellpadding="3" cellspacing="0" width="100% ">
    <tbody>
        <tr class="GrayTableHead">
            <td valign="top" width="20%">
                Value</td>
            <td valign="top" width="70%">
                Description</td>
        </tr>
        <tr>
            <td valign="top">
                client_id</td>
            <td valign="top">
                The Consumer Key associated with the partner application. Refer to <a href="https://developer.concur.com/node/203">Partner Applications</a> for more information.</td>
        </tr>
        <tr>
            <td valign="top">
                scope</td>
            <td valign="top">
                The comma separated list of APIs to grant access to. The <a href="https://developer.concur.com/node/203">partner application registration process</a> includes defining which APIs the application uses. This value can be used to limit the list of APIs the user sees to a subset of the APIs the partner application can access. This value cannot be used to expand the list of APIs the partner application accesses. Format: USER,EXPRPT
                Possible values are:
                ATTEND: Attendee List Web Service<br />
                    CONFIG: Expense Configuration Web Service<br />
                    ERECPT: E-Receipts Web Service<br />
                    EXPRPT: Expense Report Web Service, Quick Expense Web Service<br />
                    EXTRCT: Extract Web Service<br />
                    IMAGE: Imaging Web Service<br />
                    INSGHT: Insights Web Service<br />
                    INVPO: Invoice Purchase Order Web Service<br />
                    ITINER: Itinerary Web Service<br />
                    LIST: List Item Web Service<br />
                    MTNG: Meeting Web Service<br />
                    PAYBAT: Payment Batch Web Service<br />
                    TRVPRF: Travel Profile Web Service<br />
                    TRVREQ: Travel Request Web Service<br />
                    TWS: Trip Approval Web Service<br />
                    USER: User Web Service
                **NOTE**: The Quick Expense Web Service requires the Expense Report Web Service scope. If the application wants to GET receipt images, it would use the Imaging Web Service, so it would also require the Imaging Web Service scope.
            </td>
        </tr>
        <tr>
            <td valign="top">
                redirect_uri</td>
            <td valign="top">
                The URL of the partner application where Concur will redirect the user after he/she has authenticated and approved access.</td>
        </tr>
        <tr>
            <td valign="top">
                state</td>
            <td valign="top">
                Optional partner application-defined state variable. This variable is specified by the partner application and will be returned intact by the Concur&rsquo;s OAuth provider when the user is redirected to the redirect URL. Values are generally passed in this parameter when the state of the value cannot be maintained by the partner application, for instance when making calls between multiple, disparate web pages.
                Example: The state variable can contain the ID of the user in the partner application, so that the token returned in the callback can be associated to the specified user and subsequently saved in the database of the partner application.
            </td>
        </tr>
    </tbody>
</table>
**Step Two**: If the user has an active session with Concur, the user won&rsquo;t need to re-authenticate with Concur. Instead the Concur OAuth Login page will declare the user to be authenticated. After the user is authenticated, the Concur OAuth Login page will redirect to the Concur OAuth Confirmation page.
If the user doesn&rsquo;t have an active session with Concur (because they went directly to the partner's Concur Integration page), the user will need to enter their Concur login credentials on the Concur OAuth Login page. After successfully entering these credentials the Concur OAuth Login page will declare the user to be authenticated. After the user is authenticated, the Concur OAuth Login page will redirect to the Concur OAuth Confirmation page.
**Step Three**: The OAuth Confirmation page is where the user grants the partner application access to the user&rsquo;s data (User Level Authorization), or the company's data (Company Level Authorization). The user can either Approve Access or Deny Access. The page is organized in this fashion:
<blockquote>
    **Heading **&ndash; This is the name of the partner application. The partner works with Concur to settle on an appropriate name that makes clear to the Concur user the source and nature of the partner application.
    **APIs Used** &ndash; This section makes clear what Concur data and functions the partner application will be able to access if given permission. Its purpose is to provide users the information they need to make their decision to either grant or deny access. It lists each Concur Connect API or Web Service the partner application uses along with a very brief description.
    **What is this?** &ndash; Clicking this link displays further detail about the Web Service.
</blockquote>
Here is a sample Concur OAuth Confirmation page for the Concur Salesforce Connector:
<img alt="img" src="https://developer.concur.com/sites/default/files/SalesforceConnectorOauthConf_crop.png" />
**Step Four**: The user is redirected to the URL specified in Step One. If the user approved access, it will include a code and the optional state variable.
**Step Five**: The partner application makes the following call,passing the code, Consumer Key and Consumer Secret. 
Here&rsquo;s the format for the call:
<pre class="overflow_box1">
 GET https://www.concursolutions.com/net2/oauth2/GetAccessToken.ashx?code=0987654321&amp;client_id=eZByXv2X41cJlC21pSVvRi&amp;client_secret=4EW8e72wOCM2jKL12H5s2ss HTTP 1.1</pre>
**Step Six**: Concur returns the OAuth access token and expiration date to the partner application.
**Step Seven**: The partner uses this OAuth Access Token in subsequent API calls.
## 
    <a id="enterpriseauthexample" name="enterpriseauthexample"></a>Company Level Authorization Example
An administrative user at the company Example.com would like to enable the third party AppThatSavesTheInternet application. The user has a login ID of chrismiller@example.com.
The AppThatSavesTheInternet application was registered to use the Payment Batch File API and has a Consumer Key of eZByXv2X41cJlC21pSVvRi and a Consumer Secret of 4EW8e72wOCM2jKL12H5s2ss.
The admin user has already completed the sales process to purchase the application, and is ready to connect it to their Concur company. The admin user logs in to the AppThatSavesTheInternet site, and navigates to the Connect Integration page the partner created. On this page, they click the **Connect** button. They are sent to the Concur OAuth login page URL:
<pre class="overflow_box1">
 https://www.concursolutions.com/net2/oauth2/Login.aspx?client_id=eZByXv2X41cJlC21pSVvRi&amp;scope=PAYBAT&amp;redirect_uri=http://concur2.appthatsavestheinternet.com
          </pre>
The admin user is prompted to log in to Concur. The user logs in with a special user account created for this purpose. Then he/she is presented with a page asking if he/she wants to allow the AppThatSavesTheInternet to access their company's Payment Batch information and files.
####
    Access Denied:
The user clicks **Deny**. Concur sends the user to the redirect uri, along with error details:
<pre class="overflow_box1">
 http://concur2.appthatsavestheinternet.com?error=access_denied&amp;error_description=User+denied+access
          </pre>
####
    Access Approved:
The user clicks **Approve**. Concur sends the user to the redirect uri, with the additional code value:
<pre class="overflow_box1">
 http://concur2.appthatsavestheinternet.com?code=1029384756
          </pre>
The application makes this call:
<pre class="overflow_box1">
 GET https://www.concursolutions.com/net2/oauth2/GetAccessToken.ashx?code=1029384756&amp;client_id=eZByXv2X41cJlC21pSVvRi&amp;client_secret=4EW8e72wOCM2jKL12H5s2ss</pre>
The Response is:
<pre class="overflow_box1">
 HTTP/1.1 200 OK
 ...
 <Access_Token>
     <Token>abcd1234hjkl0987qwer2468yuio1357</Token>
     <Expiration_date>3/30/2013 1:11:11 PM</Expiration_date>
 </Access_Token>
          </pre>
The application saves the OAuth token and the company information together, and uses the OAuth token on all future web service requests.
## 
    <a id="userauthexample" name="userauthexample"></a>User Level Authorization Example
An end user at the company Example.com would like to enable the third party AppThatSavesTheInternet application. The user has a login ID of terrybrown@example.com.
The AppThatSavesTheInternet application was registered to use the Travel Profile API and has a Consumer Key of eZByXv2X41cJlC21pSVvRi and a Consumer Secret of 4EW8e72wOCM2jKL12H5s2ss.
The user logs in to Concur and selects the App Center tab. For the AppThatSavesTheInternet listing, they click the **Connect** button. The user is sent to the Concur Integration page on the application's website. This page has additional details about the application. The user decides to use the application, and clicks the **Connect to Concur** button.
The application redirects the user to the Concur login page URL:
<pre class="overflow_box1">
 https://www.concursolutions.com/net2/oauth2/Login.aspx?client_id=eZByXv2X41cJlC21pSVvRi&amp;scope=TRVPRF&amp;redirect_uri=http://concur2.appthatsavestheinternet.com 
          </pre>
He/She is presented with a page asking if he/she wants to allow the partner application to access their Travel Profile information.
####
    Access Denied:
The user clicks **Deny**. Concur sends the developer to the redirect uri, along with error details:
<pre class="overflow_box1">
 http://concur2.appthatsavestheinternet.com?error=access_denied&amp;error_description=User+denied+access
          </pre>
####
    Access Approved:
The user clicks **Approve**. Concur sends the user to the redirect uri, with the additional code value:
<pre class="overflow_box1">
 http://concur2.appthatsavestheinternet.com?code=1029384756
          </pre>
The application calls the <a href="https://developer.concur.com/node/491#gettokenweb">Get Token Using Web Flow</a> function:
<pre class="overflow_box1">
 GET https://www.concursolutions.com/net2/oauth2/GetAccessToken.ashx?code=1029384756&amp;client_id=eZByXv2X41cJlC21pSVvRi&amp;client_secret=4EW8e72wOCM2jKL12H5s2ss</pre>
The Response is:
<pre class="overflow_box1">
 HTTP/1.1 200 OK
 ...
 <Access_Token>
     <Token>abcd1234hjkl0987qwer2468yuio1357</Token>
     <Expiration_date>3/30/2013 1:11:11 PM</Expiration_date>
 </Access_Token>
          </pre>
The application needs to store the OAuth token for the user. If the user does not have a user account with the application provider, they are prompted to create one. Once their user account is created, the application can store the OAuth token with it, and use it in subsequent API calls. If the user already has an account, they can log in, then the application can save the OAuth token in their account.
<br />
