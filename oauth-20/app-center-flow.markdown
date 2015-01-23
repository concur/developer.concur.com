
        <div id="main" class="container">
            <div>
                            </div>
            <div class="row">
                <div class="span12">
<div class="breadcrumbs"><a href="/">Home</a>App Center Flow</div>
                </div>
            </div>

            <div id="content-wrapper">
<!-- <div class="row"> -->
                <div id="content" class="span9">
            # App Center Flow
                    <div class="section">
                    <div id="node-712" class="node clear-block">


    
    <div class="content clear-block">
                <script>
  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

  ga('create', 'UA-41161356-1', 'concur.com');
  ga('send', 'pageview');

</script><style type="text/css">
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
.bullet_in {margin-left: 25px}
.p_margin_top {margin-top: 12px}
.overflow_box1 {border: .5px solid grey;
padding: .5em;
overflow: auto;
background-color: #edebe7;
font-family:"Courier New", Courier, monospace;
font-size:14px;
}
p {
margin-bottom: 9px;
margin-top: 9px;
font-family: wf_segoe-ui_normal,"Segoe UI","Segoe WP",Tahoma,Arial,sans-serif;
font-weight: 400;
font-size: 16px;
line-height: 1.5em;
color: #505050;
}
ul {
margin-bottom: 9px;
margin-top: 9px;
font-family: wf_segoe-ui_normal,"Segoe UI","Segoe WP",Tahoma,Arial,sans-serif;
font-weight: 400;
font-size: 16px;
line-height: 1.5em;
color: #505050;
}
ol {
margin-bottom: 9px;
margin-top: 9px;
font-family: wf_segoe-ui_normal,"Segoe UI","Segoe WP",Tahoma,Arial,sans-serif;
font-weight: 400;
font-size: 16px;
line-height: 1.5em;
color: #505050;
}
li {
margin-bottom: 9px;
margin-top: 9px;
font-family: wf_segoe-ui_normal,"Segoe UI","Segoe WP",Tahoma,Arial,sans-serif;
font-weight: 400;
font-size: 16px;
line-height: 1.5em;
color: #505050;
}
h1 {
margin-bottom: 9px;
margin-top: 9px;
font-family: wf_segoe-ui_normal,"Segoe UI","Segoe WP",Tahoma,Arial,sans-serif;
font-weight: 600;
font-size: 64px;
line-height: 1.5em;
color: #505050;
}
h2 {
    margin-bottom: 9px;
    margin-top: 9px;
    font-family: wf_segoe-ui_normal,"Segoe UI","Segoe WP",Tahoma,Arial,sans-serif;
    font-weight: 400;
    font-size: 42px;
    line-height: 1.5em;
    color: rgb(0,120,201);
}
h3 {
margin: 0 0 12px;
font-family: wf_segoe-ui_light,"Segoe UI Light","Segoe WP Light","Segoe UI","Segoe WP",Tahoma,Arial,sans-serif;
font-weight: 400;
font-size: 30px;
line-height: 1.2em;
color: rgb(0,120,201);
}
h4 {
    margin: 0 0 12px;
    font-family: wf_segoe-ui_light,"Segoe UI Light","Segoe WP Light","Segoe UI","Segoe WP",Tahoma,Arial,sans-serif;
    font-weight: 400;
    font-size: 24px;
    line-height: 1.2em;
    color: #3B3B3B;
}   </style>
The Concur App Center Flow is a simplified authorization mechanism optimized for App Center users who are already logged into Concur and want to connect their App Center app to their Concur account and authorize access to their personal information.
## 
    Preconditions
Before the App Center Web Flow can be implemented for end-users, the following preconditions must be in place:
<h5>
    Developer</h5>

* 
        In a Concur Sandbox Company (developer sandbox), the developer registers the application and selects the required APIs. This determines the scope of the end-user&rsquo;s data that the application can access on behalf of the end user. For more information on how to register a partner application, see <a href="https://developer.concur.com/api-documentation/web-services/core-concepts/partner-applications#register">Registering a Partner Application</a>.
* 
        Once the developer has registered the application, a consumer key and a client secret are automatically generated and displayed in the Key and <b>Secret</b> fields of the <b>Modify</b> <b>Partner</b> page.
* 
        Because application listings are not published until after an application has been certified, complete end-to-end App Center Flow cannot be replicated in a sandbox environment. The developer may simulate the initial steps of App Center flow by obtaining a request token using the request URI documented in Step 1 below and continuing to step 4 below to obtain the access token.

<h5>
    End User</h5>

* 
        The end user is logged in to Concur.
* 
        End users can only access and update their own information.

<h5>
    Concur</h5>

* 
        To deploy the app in a production environment, Concur certifies the partner application. For more information on the Concur App Certification process, see <a href="https://developer.concur.com/go-market/app-certification"> App Certification</a>
* 
        After the partner application is certified, Concur registers the partner application, creates a listing for the application in the Concur App Center, and enables the app listing.

## 
    App Center Flow Step-by-Step
<ol>
* 
        <span style="font-size: 16px; line-height: 1.5em;">Register your application following the steps in<a href="https://developer.concur.com/node/203" style="font-size: 16px; line-height: 1.5em;">Registering a Partner Application</a><span style="font-size: 16px; line-height: 1.5em;">.
* 
        <span style="font-size: 16px; line-height: 24px;">Create a web page that listens for an HTTP GET request from Concur. This can be a servlet, MVC controller, ASHX or ASPX file, etc. This page must be hosted at the URI you specify in your App Center listing. The URI is specified in the redirect_url query parameter in step 3.
* 
        <span style="font-size: 16px; line-height: 24px;">When your application receives the redirect call, parse the value from the code query parameter which was passed from the App Center. This is the request token for the user:
<pre class="overflow_box1">
GET {redirect_page_URI}?code={request_token}
</pre>
* 
        <span style="font-size: 16px; line-height: 24px;">Make an API call from your application to exchange the request token for an access token:
<pre class="overflow_box1">
<span style="font-size: 16px; line-height: 24px;">
GET <code>https://www.concursolutions.com/net2/oauth2/getaccesstoken.ashx</code>
?code={request_token}
&amp;client_id={consumer_key}
&amp;client_secret={consumer_secret}
Accept: application/xml</pre>
        <span style="font-size: 16px; line-height: 24px;">For example:
<pre class="overflow_box1">
<span style="font-size: 16px; line-height: 24px;">
GET <code>https://www.concursolutions.com/net2/oauth2/getaccesstoken.ashx
?code=0_XI1GL5BTe05Wr76W0bkK3hPg2sF7gcZ
&amp;client_id=VDV5Y532NafpmDLtbve7Md
&amp;client_secret=3ukkqMSIPORvMmXQqQ7QFJnDckLzmO5Z
Accept: application/xml</code></pre>
</ol>
If you encounter an error that makes it impossible to complete the connection process, revoke the access token to the user knows that the connection attempt failed and they can try again at a later time.

<footer>
