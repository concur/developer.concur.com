
        <div id="main" class="container">
            <div>
                            </div>
            <div class="row">
                <div class="span12">
<div class="breadcrumbs"><a href="/">Home</a>Auto-Connect Flow</div>
                </div>
            </div>

            <div id="content-wrapper">
<!-- <div class="row"> -->
                <div id="content" class="span9">
            # Auto-Connect Flow
                    <div class="section">
                    <div id="node-745" class="node clear-block">


    
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
dl {
margin-bottom: 9px;
margin-top: 9px;
font-family: wf_segoe-ui_normal,"Segoe UI","Segoe WP",Tahoma,Arial,sans-serif;
font-weight: 400;
font-size: 16px;
line-height: 1.5em;
color: #505050;
}
dd {
margin-bottom: 9px;
margin-top: 9px;
font-family: wf_segoe-ui_normal,"Segoe UI","Segoe WP",Tahoma,Arial,sans-serif;
font-weight: 400;
font-size: 16px;
line-height: 1.5em;
color: #505050;
}
dt {
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
}
td {
margin-bottom: 9px;
margin-top: 9px;
font-family: wf_segoe-ui_normal,"Segoe UI","Segoe WP",Tahoma,Arial,sans-serif;
font-weight: 400;
font-size: 16px;
line-height: 1.5em;
color: #505050;
}
tr {
margin-bottom: 9px;
margin-top: 9px;
font-family: wf_segoe-ui_normal,"Segoe UI","Segoe WP",Tahoma,Arial,sans-serif;
font-weight: 400;
font-size: 16px;
line-height: 1.5em;
color: #505050;
}   </style>
## 
    Overview
The Auto-Connect flow is an authorization flow Concur implemented to support authorized Connection Requests API calls from TripLink applications. During the Auto-Connect flow, the request token associated with a TripLink application is exchanged for an access token for the user who granted the TripLink application access to the user's Concur data.
### 
    Preconditions
Before you can implement the Auto-Connect flow, you need to:

* 
        Obtain a request token by following the steps listed under <a href="https://developer.concur.com/node/203">Registering a Partner Application.</a><br />
        The **Application Authorization **section in the **New Partner Application **page includes a **Key** field and **Secret** field. This key-and-secret pair make up the request token. The value for the **Key** field is also known as the consumer key and it is the unique identifier for your application; the value for the **Secret** field is your application's client secret. The consumer key and client secret pair is the request token which is later exchanged for an access token . You must safeguard and keep this information confidential as required by the Concur Legal Agreement.


* 
        Configure your application with the Connection Request API scope:<br />
        <img alt="" height="301" src="https://developer.concur.com/sites/default/files/APIScope_register_partner_app_ConnectionsRequest_APIScope_cropped.png" width="498" />

### 
    Auto-Connect Flow Step by Step
The following diagram illustrates the Auto-Connect flow implementation steps:
<img alt="" height="373" src="https://developer.concur.com/sites/default/files/Connection Request.png" width="524" />
To implement the Auto-Connect flow, follow these steps:
<ol>
* 
        Build a service that periodically gets a list of connection requests:
<pre class="overflow_box1">
GET {InstanceURI}/api/v3.0/common/connectionrequests?
status=pending&amp;offset={offset}&amp;
limit={maximum number of connection requests to return}
Accept: {<span style="font-size: 14px; line-height: 24px; background-color: rgb(237, 235, 231);">application/xml | application/json<span style="font-size: 14px; background-color: rgb(237, 235, 231);">}</pre>You must use a token assigned to a user with the Web Service Administrator role to call the Connection Request resource.

* 
        For each user in the connection request response, exchange the request token for an access token:
<pre class="overflow_box1" style="font-size: 14px;">
GET <code>https://www.concursolutions.com/net2/oauth2/getaccesstoken.ashx?</code>
code={Request Token}&amp;client_id={consumer key}&amp;
client_secret={consumer secret}
Accept: {application/xml | application/json}
</pre>Request tokens expire after 15 minutes. Design your application to process all connection requests within this time limit. Each access token created in this step is applicable for a given user for your application only. These access tokens cannot be used for other partner applications.

* 
        For each connection request, call any other Concur APIs you need to match the Concur user with the user in your system. When the user is successfully matched, or when matching fails, update the connection request:
<pre class="overflow_box1">
PUT {Instance URI}/api/v3.0/common/connectionrequests/{ID}
Authorization: OAuth {user's access token with Web Services Administrator role}
Content-Type: {application/xml | application/json}
Accept: {application/xml | application/json}
<code>
<ConnectionRequest>
    <Message>{Optional Message}</Message>
    <Status>{Status Code}</Status>
<ConnectionRequest>
</code></pre>If you encounter an error that makes it impossible to complete the connection process, revoke the access token to the user knows that the connection attempt failed and they can try again at a later time.

</ol>

