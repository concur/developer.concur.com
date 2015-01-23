
        <div id="main" class="container">
            <div>
                            </div>
            <div class="row">
                <div class="span12">
<div class="breadcrumbs"><a href="/">Home</a>OAuth 2.0</div>
                </div>
            </div>

            <div id="content-wrapper">
<!-- <div class="row"> -->
                <div id="content" class="span9">
            # OAuth 2.0
                    <div class="section">
                    <div id="node-491" class="node clear-block">


    
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
.xml-tag {color: #0000e6}
.bullet_in {margin-left: 25px}
.p_margin_top {margin-top: 14px}
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
font-size: 14px;
line-height: 1.5em;
color: #505050;
}
ul {
margin-bottom: 9px;
margin-top: 9px;
font-family: wf_segoe-ui_normal,"Segoe UI","Segoe WP",Tahoma,Arial,sans-serif;
font-weight: 400;
font-size: 14px;
line-height: 1.5em;
color: #505050;
}
ol {
margin-bottom: 9px;
margin-top: 9px;
font-family: wf_segoe-ui_normal,"Segoe UI","Segoe WP",Tahoma,Arial,sans-serif;
font-weight: 400;
font-size: 14px;
line-height: 1.5em;
color: #505050;
}
li {
margin-bottom: 9px;
margin-top: 9px;
font-family: wf_segoe-ui_normal,"Segoe UI","Segoe WP",Tahoma,Arial,sans-serif;
font-weight: 400;
font-size: 14px;
line-height: 1.5em;
color: #505050;
}
h1 {
margin-bottom: 9px;
margin-top: 9px;
font-family: wf_segoe-ui_normal,"Segoe UI","Segoe WP",Tahoma,Arial,sans-serif;
font-weight: 600;
font-size: 46px;
line-height: 1.5em;
color: #505050;
}
h2 {
    margin-bottom: 9px;
    margin-top: 9px;
    font-family: wf_segoe-ui_normal,"Segoe UI","Segoe WP",Tahoma,Arial,sans-serif;
    font-weight: 400;
    font-size: 38px;
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

<span style="font-size:14px;">OAuth 2.0 is an authorization protocol designed to enable third-party applications (in Concur these are called partner apps) to obtain limited access to an HTTP service, either on behalf of a resource owner by orchestrating an approval interaction between the resource owner and the HTTP service, or by allowing a third-party application to obtain access on its own behalf.
<span style="font-size:14px;">In traditional client-server authentication models, the resource owner provides access to its protected resources by sharing its credentials with a third-party application. This creates several security concerns:

    * 
        <span style="font-size:14px;">Third-party applications are required to store the resource owner's credentials for future use, typically a password in clear-text.
    * 
        <span style="font-size:14px;">Servers are required to support password authentication, despite the security weaknesses inherent in passwords.
    * 
        <span style="font-size:14px;">Third-party applications gain overly broad access to the resource owner's protected resources, leaving resource owners without any ability to restrict duration or access to a limited subset of resources.
    * 
        <span style="font-size:14px;">Resource owners cannot revoke access to an individual third-party without revoking access to all third-parties, and must do so by changing their password.
    * 
        <span style="font-size:14px;">Compromise of any third-party application results in compromise of the end-user's password and all of the data protected by that password.

<span style="font-size:14px;">OAuth 2.0 addresses these limitations by introducing an authorization layer and separating the role of the client and the resource owner.
<span style="font-size:14px;">The Concur Platform APIs implements OAuth 2.0 because it provides a simple mechanism for end-users to grant a partner application access to their data (<em>protected resources</em>) without sharing their passwords. It also enables the user to grant limited access to their data in terms of scope, duration, and so on. For example, Ana (<em>resource owner</em>) can grant a travel app (<em>client</em>) access to her protected travel data stored at Concur (<em>resource server</em>), without sharing her username and password with the travel app. Instead, she authenticates directly with Concur (<em>authorization server</em>), which issues the travel app delegation-specific credentials (<em>access token</em>).
<p class="learn-more"><span style="font-size:14px;"><a href="https://developer.concur.com/node/720">Learn More About OAuth2.0</a>
