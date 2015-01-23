
        <div id="main" class="container">
            <div>
                            </div>
            <div class="row">
                <div class="span12">
<div class="breadcrumbs"><a href="/">Home</a>OAuth 2.0 Native Flow</div>
                </div>
            </div>

            <div id="content-wrapper">
<!-- <div class="row"> -->
                <div id="content" class="span9">
            # OAuth 2.0 Native Flow
                    <div class="section">
                    <div id="node-711" class="node clear-block">


    
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
}</style>## 
    Overview
The Native Flow is a Concur implementation of the 2-legged OAuth authorization flow. When implementing the Native Flow, a partner application accesses the resources of a given user whithout user involvement. The partner application sends the user's Concur credentials to the Concur authorization server on behalf of the user. You want to implement the Native flow in the following situations:

* 
        You need to get an access token while designing and testing your application.
* 
        You need to get an access token for a given user that has the **Web Services Administrator** role, and you don&rsquo;t require the user to grant or deny access to the user's resources. This scenario generally applies when developing back-office integration applications.

## 
    Native Flow Step by Step
In the native flow, the partner application sends the user's Concur credentials. The application then receives an OAuth token to use for later requests.
<ol>
* 
        Register your application following the steps in <a href="https://developer.concur.com/node/203">Registering a Partner Application</a>.
* 
        Retrieve the Consumer Key from the **New Partner Application** page that appears when you're registering your application.
* 
        Make an API call using the login ID and password or e-mail address and PIN for Concur user requesting access. The request must contain two headers:
<ul class="bullet_in">
<li class="p_margin_top" type="disc">
                An authorization HTTP header that includes the Concur credentials (Login ID and password) of the user requesting access in the HTTP Basic Authentication format. The LoginID:Password string must be Base-64 encoded. It must be formatted as indicated below, starting with the word Basic. If no password is used, the user name must still end with a colon.
<li type="disc">
                A header specifying the Consumer Key for the partner application.

<p class="p_margin_top">The format of the call is:
<pre class="overflow_box1">
GET <code>https://www.concursolutions.com/net2/oauth2/accesstoken.ashx</code>
Authorization: Basic {Base64 encoded LoginID:Password}
X-ConsumerKey: {Consumer Key}
</pre>For example, John obtained a Consumer Key of <samp>hj7683jslks93lalkjss93</samp> when he registered his application. John has a login ID of <samp>john_developer@hotmail.com</samp> and a password of <samp>Travel&amp;Expense$2012</samp>. John Base64-encoded his login ID, colon, and password such that <samp>john_developer@hotmail.com:Travel&amp;Expense$2012</samp> became <samp>GHJHDIU38JKSHJ==</samp>. John's call looks like this:
<pre class="overflow_box1">
GET <code>https://www.concursolutions.com/net2/oauth2/accesstoken.ashx</code>
Authorization: Basic GHJHDIU38JKSHJ==
X-ConsumerKey: hj7683jslks93lalkjss93
</pre>The response looks like this:
<pre class="overflow_box1">
HTTP/1.1 200 OK
Content Length: 200

<span class="ST0"><?<span class="ST0">xml version=&quot;1.0&quot;?>
<Access_Token>
    <Token>fdjhk2382kwkajsklwe8i3932kslswl</Token>
    <Expiration_date>6/1/2014 8:00:00 AM</Expiration_date>
    <Refresh_Token>8ew$sefhj7s62ns94376nsjd62s</Refresh_Token>
</Access_Token>
</pre>
* 
        Retrieve the access token from the response and use it in all subsequent calls for the authenticated user. The access token is the value of the <samp><Token></samp> element.
* 
        Delete any recordof the login ID and password.
</ol>
