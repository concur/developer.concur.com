
        <div id="main" class="container">
            <div>
                            </div>
            <div class="row">
                <div class="span12">
<div class="breadcrumbs"><a href="/">Home</a>OAuth 2.0 Overview</div>
                </div>
            </div>

            <div id="content-wrapper">
<!-- <div class="row"> -->
                <div id="content" class="span9">
            # OAuth 2.0 Overview
                    <div class="section">
                    <div id="node-720" class="node clear-block">


    
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
.overflow_box1 
{border: .5px solid grey;
padding: .5em;
overflow: auto;
background-color: #edebe7;
font-family:"Courier New", Courier, monospace;
font-size:13px;
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
font-size: 13px;
line-height: 1.5em;
color: #505050;
}
ol {
margin-bottom: 9px;
margin-top: 9px;
font-family: wf_segoe-ui_normal,"Segoe UI","Segoe WP",Tahoma,Arial,sans-serif;
font-weight: 400;
font-size: 13px;
line-height: 1.5em;
color: #505050;
}
li {
margin-bottom: 9px;
margin-top: 9px;
font-family: wf_segoe-ui_normal,"Segoe UI","Segoe WP",Tahoma,Arial,sans-serif;
font-weight: 400;
font-size: 13px;
line-height: 1.5em;
color: #505050;
}
dl {
margin-bottom: 9px;
margin-top: 9px;
font-family: wf_segoe-ui_normal,"Segoe UI","Segoe WP",Tahoma,Arial,sans-serif;
font-weight: 400;
font-size: 13px;
line-height: 1.5em;
color: #505050;
}
dd {
margin-bottom: 9px;
margin-top: 9px;
font-family: wf_segoe-ui_normal,"Segoe UI","Segoe WP",Tahoma,Arial,sans-serif;
font-weight: 400;
font-size: 13px;
line-height: 1.5em;
color: #505050;
}
dt {
margin-bottom: 9px;
margin-top: 9px;
font-family: wf_segoe-ui_normal,"Segoe UI","Segoe WP",Tahoma,Arial,sans-serif;
font-weight: 400;
font-size: 13px;
line-height: 1.5em;
color: #505050;
}
h1 {
margin-bottom: 9px;
margin-top: 9px;
font-family: wf_segoe-ui_normal,"Segoe UI","Segoe WP",Tahoma,Arial,sans-serif;
font-weight: 600;
font-size: 36px;
line-height: 1.5em;
color: #505050;
}
h2 {
    margin-bottom: 9px;
    margin-top: 9px;
    font-family: wf_segoe-ui_normal,"Segoe UI","Segoe WP",Tahoma,Arial,sans-serif;
    font-weight: 400;
    font-size: 30px;
    line-height: 1.5em;
    color: rgb(0,120,201);
}
h3 {
margin: 0 0 12px;
font-family: wf_segoe-ui_light,"Segoe UI Light","Segoe WP Light","Segoe UI","Segoe WP",Tahoma,Arial,sans-serif;
font-weight: 400;
font-size: 24px;
line-height: 1.2em;
color: rgb(0,120,201);
}
h4 {
    margin: 0 0 12px;
    font-family: wf_segoe-ui_light,"Segoe UI Light","Segoe WP Light","Segoe UI","Segoe WP",Tahoma,Arial,sans-serif;
    font-weight: 400;
    font-size: 14px;
    line-height: 1.2em;
    color: #3B3B3B;
}   </style>
####
    Contents
####
    <a href="#top">Overview</a><br />
    <a href="#what_is_oauth">What Is Oauth?</a><br />
    <a href="#OAuthActors">OAuth 2.0 Actors</a><br />
    <a href="#partner_app">Partner Applications</a><br />
    <a href="#protected_resources">Protected Resources</a><br />
    <a href="#access_tokens">Access Tokens</a><br />
    <a href="#request_tokens">Request Tokens</a><br />
    <a href="#consumer_key">Consumer Secret, Key, and Redirect URI</a><br />
    <a href="#access_levels">Access Levels</a><br />
    <a href="#authorization_flow">Authorization Flow</a><br />
    <a href="#authorization_endpoints">Authorization Endpoints</a><br />
    <a href="#authorized_calls">Making Authorized Concur API Calls</a>
## 
    <a id="top" name="top"></a>Overview
This topic describes fundamental OAuth2.0 concepts. If you are alreadyfamiliar with OAuth 2.0, you can skip this topic. If you are not familiar with OAuth 2.0 and don&rsquo;t have time to read the <a href="http://tools.ietf.org/html/draft-ietf-oauth-v2-23">OAuth 2.0 specification</a> in detail, this topic will give you the foundation you need for understanding how authorization and authentication is implemented in the Concur Platform APIs.
## 
    <a id="what_is_oauth" name="what_is_oauth"></a>What is OAuth?
OAuth provides a simple mechanism for end-users to grant a third party access to their data (resources) without sharing their passwords. It also enables the user to grant limited access to their data in terms of scope, duration, and so on. For example, a user (resource owner) can grant a travel application access to their Concur travel profile information without sharing his or her user name and password with the travel application. Instead, the user authenticates directly with Concur which issues the travel application delegation-specific credentials for accessing the user's data.
## 
    <a id="OAuthActors" name="OAuthActors"></a>OAuth 2.0 Actors
<dl style="font-size: 16px;">
<dt>
        Client</dt>
<dd>
        An application making requests to access protected resources on behalf of the resource owner and with its authorization. This role is defined independently from how it is implemented. It has the same meaning whether is is implemented as an application that executes on a server computer, a desktop computer, or a mobile device). In Concur, the client is referred to as a <em><a href="https://developer.concur.com/node/203">partner application</a></em>**.**</dd>
<dt>
        Resource owner</dt>
<dd>
        An entity capable of granting access to a protected resource. This is generally an end user.</dd>
<dt>
        Resource server</dt>
<dd>
        A server hosting the protected resources of the resource owner, capable of accepting and responding to API requests using access tokens.</dd>
<dt>
        Authorization server</dt>
<dd>
        A server issuing access tokens to the client after successfully authenticating the resource owner and obtaining authorization.</dd>
</dl>
## 
    <a id="partner_app" name="partner_app"></a>Partner Applications
You can use the Concur Developer Platform to build a variety of applications, ranging from single-function apps to end-to-end solutions that address complex business problems. For example, you can use the List Item web service to build a simple app for updating a project code list in Concur. Or, you can build an end-to-end solution using the External Validation callout for validating a Concur expense with an external validation system. We refer generically to all these apps as <em>partner applications</em> or <em>partner app</em> for short. For more information on partner applications, go to <a href="https://developer.concur.com/node/203">Partner Applications</a>.
Before a partner application can request access to resources on a Concur resource server, the partner app must first register with the Concur authorization server. The registration is a one-time task. Once registered, the registration remains valid, unless Concur revokes the partner app registration.
## 
    <a id="protected_resources" name="protected_resources"></a>Protected Resources
In client-server authentication models, the client uses its credentials to access its resources hosted by the server. In the OAuth model, the client, which is not the resource owner but is acting on its behalf, requests access to resources controlled by the resource owner but hosted by the server. In order for the client to access resources, it first has to obtain permission from the resource owner. This permission is expressed in the form of a <em>token</em> and matching shared-<em>secret</em>. The purpose of the token is to make it unnecessary for the resource owner to share its credentials with the client. Unlike the resource owner credentials, tokens can be issued with a restricted scope and limited lifetime, and revoked at any time.A protected resource is a resource stored on (or provided by) the server which requires authentication in order to access it. Protected resources are owned or controlled by the resource owner. Anyone requesting access to a protected resource must be authorized to do so by the resource owner (enforced by the server). A protected resource can be data (photos, documents, contacts), services (posting a blog item, transferring funds), or any resource requiring access restrictions.
## 
    <a id="access_tokens2" name="access_tokens"></a>Access Tokens
In the OAuth 2.0 model, access to protected resources is done using <em>access tokens</em> &mdash;an object with a specific scope, lifetime, and other access attributes. OAuth access tokens are sometimes compared to valet keys. In the same way as a valet key gives restricted access to a car, allowing a valet to drive it but not open the trunk or the glove compartment, the access token allows a client application restricted access to a user&rsquo;s data at a resource server via tokens issued by an authorization server in response to the user authorizing access.
With OAuth 2.0, a third-party application does not use the resource owner's credentials to access protected resources. Instead, the third-party application obtains an <em>access token</em>. Access tokens are issued to third-party clients by an authorization server with the approval of the resource owner. The client uses the access token to access the protected resources hosted by the resource server.
## 
    <a id="request_tokens" name="request_tokens"></a>Request Tokens
In the OAuth 2.0 model, a request token, termed <em>code</em> in Concur, is a short-lived token used to obtain a long-lived access token which is used to authorize API calls. You create a request token using the consumer key and secret you obtained from the **New Partner Application** dialog while registering your application with Concur. The request token is used to obtain the access token. Optionally, the request token can include one or more scopes that determine the level of access the application can have to the user's data.
## 
    <a id="consumer_key" name="consumer_key"></a>Consumer Secret, Key, and Redirect URI
At registration the partner app application is assigned a <em>key</em> (called client ID in the OAuth 2.0 specification) and a <em>secret</em> by the Concur authorization server. The key and secret is unique to the partner application on the Concur authorization server where it was registered. Whenever the partner app requests access to resources stored in Concur, the partner app needs to authenticate itself by sending along the key and the secret to the Concur authorization server.
The consumer key and secret are provided by Concur when you register your application (see <a href="https://developer.concur.com/node/203">Registering a Partner Application</a>) and are used to obtain an accesstoken. You must keep the consumer key and secret in a safe place as specified in the Concur Legal Agreement.
The redirect URI is the the partner application URL where Concur redirects users after they have granted the partner application access to their resources with either the <a href="https://developer.concur.com/node/494">Web Flow</a> or the <a href="https://developer.concur.com/node/712">App Center Flow</a>.
## 
    <a id="access_levels" name="access_levels"></a>Access Levels
The role of the resource owner determines what data a user can access. Currently, the Concur implementation of the OAuth access token can grant access to information (resources) of a given user or information for the entire company.
### 
    User Authentication
Resource owners without the required administrative roles can only access and update their own information.
### 
    Company Authentication
Resource owners with one of the following administrative roles can manage data for the entire company:

* 
        <span style="font-size: 13px; line-height: 1.5em;">Professional/Premium: Web Services Administrator
* 
        <span style="font-size: 13px; line-height: 1.5em;">Standard/Sandbox: Can Administer

Concur recommends that clients create a separate user account that is not tied to an individual. Any additional role-related functionality will be specified in the request/response details for each API.
## 
    <a id="authorization_flow" name="authorization_flow"></a>Authorization Flow
OAuth 2.0 provides a redirection-based authorization flow in which users are redirected to the server to provide access to their protected resources. This flow involves three basic steps to request and grant access to resources:
<ol>
* 
        <span style="font-size: 13px; line-height: 1.5em;">User (resource owner) logs in to authorization server.
* 
        <span style="font-size: 13px; line-height: 1.5em;">Authorization server requests the resource owner to grant or deny access to the resource.
* 
        <span style="font-size: 13px; line-height: 1.5em;">Obtaining token credentials.
</ol>
OAuth 2.0 defines three endpoints:

* 
        <span style="font-size: 13px; line-height: 1.5em;">Authorization endpoint
* 
        <span style="font-size: 13px; line-height: 1.5em;">Token endpoint
* 
        <span style="font-size: 13px; line-height: 1.5em;">Redirection endpoint

The number of legs used to describe an OAuth request typically refers to the number of parties involved. When there are three paties: a client, a resource server, and a resource owner, the flow is described as 3-legged; when the client is also the resource owner (that is, acting on behalf of itself), it is described as 2-legged.
### 
    3-Legged OAuth Flow
3-legged OAuth describes the main use case OAuth was originally designed for: a user (resource owner) wants to give a client access to a server without sharing his/her credentials. For example, a Concur user (resource owner) who wants to give a travel partner application (client) access to his/her Concur account (resource server).
The 3-legged OAuth authhorization flow is depicted in the following figure:
<img alt="" height="726" src="https://developer.concur.com/sites/default/files/OAuth-Authorization-Flow.png" width="539" />
The high-level process is as follows:
<ol>
* 
        <span style="font-size: 13px; line-height: 1.5em;">The user (resource owner) accesses the client (Concur partner application).
* 
        <span style="font-size: 13px; line-height: 1.5em;">The client asks the resource owner to log in.
* 
        <span style="font-size: 13px; line-height: 1.5em;">The resource owner logs in.
* 
        <span style="font-size: 13px; line-height: 1.5em;">The authorization server asks the user if he or she wants to grant the client access to the user's protected resources.
* 
        <span style="font-size: 13px; line-height: 1.5em;">The user grants or denies access.
* 
        <span style="font-size: 13px; line-height: 1.5em;">If the user grants access, the authorization server sends the authorization code.
* 
        <span style="font-size: 13px; line-height: 1.5em;">The user accesses the client application using the rederict URI.
* 
        <span style="font-size: 13px; line-height: 1.5em;">The client sends the authorization code, client ID, and secret (together known as the request token) to the authorization server to exchange it for an access token.
* 
        <span style="font-size: 13px; line-height: 1.5em;">The authorization server sends the client an access token in exchange for the request token.
* 
        <span style="font-size: 13px; line-height: 1.5em;">The client sends a confirmation to the user that he or she is logged in.
</ol>
The Concur Web Flow, App Center Flow, and Auto-Connect Flow are 3-legged OAuth2.0 implementations.
### 
    2-Legged OAuth Flow
2-legged OAuth is used when the client accesses resources on a server without user involvement. The Concur implementation of the 2-legged OAuth flow is called the Native Flow.
## 
    <a id="authorization_endpoints" name="authorization_endpoints"></a>Authorization Endpoints
An endpoint is typically a URI on a web server such as the address of a Java application, JSP page, PHP page, ASP.NET page and so on. The authorization endpoint and token endpoint are both located on the authorization server and the redirection endpoint is located in the client.
<dl style="font-size: 16px;">
<dt>
        Authorization Endpoint</dt>
<dd>
        The authorization endpoint is the endpoint on the authorization server where the resource owner logs in and grants authorization to the client application</dd>
<dt>
        Token Endpoint</dt>
<dd>
        The token endpoint is the endpoint on the authorization server where the client application exchanges the authorization code, client ID and client secret, for an access token.</dd>
<dt>
        Redirect Endpoint</dt>
<dd>
        The redirect endpoint is the endpoint in the client application where the resource owner is redirected to, after having granted authorization at the authorization endpoint.</dd>
</dl>
## 
    <a id="authorized_calls" name="authorized_calls"></a>Making Authorized Concur API Calls
To make authorized calls to Concur Platform APIs, follow these steps:
<ol>
* 
        <span style="font-size: 13px; line-height: 1.5em;">Register your application with Concur to obtain a consumer key and client secret by following the steps listed under <a href="https://developer.concur.com/node/203" style="font-size: 13px; line-height: 1.5em;">Registering a Partner Application.</a><span style="font-size: 13px; line-height: 1.5em;"> The <strong style="font-size: 13px; line-height: 1.5em;">Application Authorization **<span style="font-size: 13px; line-height: 1.5em;">section in the <strong style="font-size: 13px; line-height: 1.5em;">New Partner Application **<span style="font-size: 13px; line-height: 1.5em;">page includes a <strong style="font-size: 13px; line-height: 1.5em;">Key**<span style="font-size: 13px; line-height: 1.5em;"> and <strong style="font-size: 13px; line-height: 1.5em;">Secret**<span style="font-size: 13px; line-height: 1.5em;"> field. The value for the <strong style="font-size: 13px; line-height: 1.5em;">Key**<span style="font-size: 13px; line-height: 1.5em;"> field is the consumer key and it is the unique identifier for your application. The value for the <strong style="font-size: 13px; line-height: 1.5em;">Secret**<span style="font-size: 13px; line-height: 1.5em;"> field is your application's client secret. The consumer key and client secret are used to obtain an access token that is used to allow access to resources for any company where your application is enabled. You must safeguard and keep this information confidential, as required by the Concur Legal Agreement.
* 
        <span style="font-size: 13px; line-height: 1.5em;">Implement the appropriate flow in your application to obtain an access token as explained in <a href="https://developer.concur.com/node/738" style="font-size: 13px; line-height: 1.5em;">Choosing an Authorization Flow</a><span style="font-size: 13px; line-height: 1.5em;">.
</ol>


<footer>
