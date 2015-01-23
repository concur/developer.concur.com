
        <div id="main" class="container">
            <div>
                            </div>
            <div class="row">
                <div class="span12">
<div class="breadcrumbs"><a href="/">Home</a>Revoking Access Tokens</div>
                </div>
            </div>

            <div id="content-wrapper">
<!-- <div class="row"> -->
                <div id="content" class="span9">
            # Revoking Access Tokens
                    <div class="section">
                    <div id="node-718" class="node clear-block">


    
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
.bullet_in {margin-left: 25px}
.p_margin_top {margin-top: 12px}
.overflow_box1 {
border: .5px solid grey;
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
font-size: 13px;
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
dl {
margin-bottom: 9px;
margin-top: 9px;
font-family: wf_segoe-ui_normal,"Segoe UI","Segoe WP",Tahoma,Arial,sans-serif;
font-weight: 400;
font-size: 14px;
line-height: 1.5em;
color: #505050;
}
dd {
margin-bottom: 9px;
margin-top: 9px;
font-family: wf_segoe-ui_normal,"Segoe UI","Segoe WP",Tahoma,Arial,sans-serif;
font-weight: 400;
font-size: 14px;
line-height: 1.5em;
color: #505050;
}
dt {
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
h3_gray {
margin: 0 0 12px;
font-family: wf_segoe-ui_light,"Segoe UI Light","Segoe WP Light","Segoe UI","Segoe WP",Tahoma,Arial,sans-serif;
font-weight: 400;
font-size: 30px;
line-height: 1.2em;
color: #505050;
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
font-size: 14px;
line-height: 1.5em;
color: #505050;
}
tr {
margin-bottom: 9px;
margin-top: 9px;
font-family: wf_segoe-ui_normal,"Segoe UI","Segoe WP",Tahoma,Arial,sans-serif;
font-weight: 400;
font-size: 14px;
line-height: 1.5em;
color: #505050;
}   </style>
You can use the Revoke Token endpoint to:

<li style="font-size:14px;">
        Revoke a single token for a given user.
<li style="font-size:14px;">
        Revoke all tokens for a user of a given application.

To revoke tokens, the OAuth consumer must have either the Web Services Administrator for Concur Professional/Premium or the Can Administrator role for Concur Standard.
### 
    Revoking a specific access token
To revoke a specific access token for a user, make this API call:
<pre class="overflow_box1">
POST <code>https://www.concursolutions.com/net2/oauth2/revoketoken.ashx</code>
?token={access token}
Authorization: OAuth {access token of user with Web Services Administrator role}
Accept: application/xml</pre>Where:
<var>token</var> &mdash; Is a required parameter that specifies the access token to be revoked.
For example:
<pre class="overflow_box1">
POST <code>https://www.concursolutions.com/net2/oauth2/revoketoken.ashx</code>
?<span class="ST0">token=fdjhk2382kwkajsklwe8i3932kslswl HTTP/1.1
</pre>### 
    Revoking all access tokens for a user
To revoke all access tokens for a user for a given application, make this API call:
<pre class="overflow_box1">
POST <code>https://www.concursolutions.com/net2/oauth2/revoketoken.ashx</code>
?consumerKey={consumer key}
&amp;user={user login ID}
Authorization: OAuth {access token of user with Web Services Administrator role}
Accept: application/xml</pre>Where:
<var>consumerKey</var> &mdash; Is a required parameter that uniquely identifies this application. The <var>consumerKey</var> corresponds to the OAuth 2.0 client ID.<br />
    <var>user</var> &mdash; Is a required parameter that specifies the user whose tokens will be revoked.
For example:
<pre class="overflow_box1">
POST <code>https://www.concursolutions.com/net2/oauth2/revoketoken.ashx</code>
?<span class="ST0">client_id=eZByXv2X41cJlC21pSVvRi<span class="ST0">&amp;user=Vicky HTTP/1.1
