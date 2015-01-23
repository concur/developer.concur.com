
        <div id="main" class="container">
            <div>
                            </div>
            <div class="row">
                <div class="span12">
<div class="breadcrumbs"><a href="/">Home</a>Callouts and Application Connectors</div>
                </div>
            </div>

            <div id="content-wrapper">
<!-- <div class="row"> -->
                <div id="content" class="span9">
            # Callouts and Application Connectors
                    <div class="section">
                    <div id="node-667" class="node clear-block">


    
    <div class="content clear-block">
                <script>
  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

  ga('create', 'UA-41161356-1', 'concur.com');
  ga('send', 'pageview');

</script>## 
    <a id="co" name="co"></a>Callouts and Application Connectors
### 
    Overview
<blockquote>Callouts from Concur allow clients to add an interaction with an outside system to their users' Concur experience. The callouts require a web application, called an application connector, which Concur will contact when appropriate. Application connectors can be hosted on the client&rsquo;s site or on a third-party hosting site.
Third-party developers can create callouts to provide Concur clients access to information systems they manage. These developers partner with Concur to have their application connectors <a href="https://developer.concur.com/go-market/app-review">reviewed</a>. Once reviewed, applications are available for Concur clients to purchase and configure.
The available callouts are:
</blockquote>
<blockquote>
* 
            Fetch Attendee Data
* 
            Fetch List Item

<blockquote>These callouts send information out from Concur to an application connector that interfaces with a external system. The connector runs a search on the external system. The results are then returned to Concur, which presents the results to the user.
</blockquote>

* 
            Launch External URL

<blockquote>The Launch External URL callout gives clients and developers a platform to extend the functionality of Concur, providing a means to deliver custom user interactions, or access functionality found in an external system.
            The client can arrange to add an Expense Entry form field that is configured to use the Launch External URL callout to a Concur Expense Entry form.Concur Expense will display this field with an attached button that launches a separate window when clicked. The window is controlled by an application connector, created by the client, a third party developer, or Concur. The application connector is a web server that presents information in the window.
            The application connector can access Concur data through the web services, or can access data in an external system. Once the user has completed their actions in the window (such as performing a search or completing a wizard), he/she clicks a button such as &ldquo;Done&rdquo; that indicates he/she has concluded their work in the window. The application connector then closes the window.
            The application connector can use web services to send information to Concur, to update field values on the expense entry form or other form types. The application connector may send the updates before or after the user closes the window. When the user returns to Concur, the page refreshes and the user sees the current values.
</blockquote>
</blockquote>
####
    Application Connector Management
<blockquote>Concur administrators use the **Manage** **Application Connectors **link on the** Web Services **page under **Administration **to register, test and enable application connectors.
</blockquote>
### 
    <a id="specs" name="specs"></a>Specifications
### 
    <a id="installation" name="installation"></a>Prerequisites
<blockquote><h4 style="font-style: italic; font-weight: bold;">
        <a name="installsecurity"></a>Security
Concur will make calls to the application connector&rsquo;s endpoint using SSL. During configuration, Concur will connect to the application connector to validate that its hostname and access credentials are valid.
        In the code Concur provides for a <a href="https://github.com/concurtech">sample application connector</a>, credentials are stored in a web configuration file that varies by platform, such as web.xml or web.config. However, if you are hosting the connector, you can customize where and how the credentials are stored by customizing HTTPBasicAuth.java or Authentication.cs.
        Concur will not be able to connect to the application connector until a certificate signed by a Certificate Authority (CA) is installed in the application connector. If you are hosting the application connector, you will need to install the signed certificate before Concur can access the connector.
<h4 style="font-style: italic; font-weight: bold;">
        <a name="installapplication"></a>Application
Concur provides a <a href="https://github.com/concurtech">sample application</a> in Java with basic functionality that a more complex connector can be built from.
Web server configurations vary greatly, so no specific recommendations on server configuration are presented here. However, if the client chooses to use the sample connector, the web server must be able to run an application written in JDK 1.6 on Apache Tomcat 6.0.
####
        <a name="auth"></a>Authentication
    <a name="authtoconnect"></a>**Authenticating to the application connector**
Expense passes credentials using HTTP Basic Auth to authenticate with the application connector. By default, these credentials are stored in the appropriate web configuration file for your platform, such as web.xml or web.config. The steps to configure Expense with the credentials are detailed below.
### 
        <a name="download"></a>Downloading the Sample Connector
Sample connectors are available on Concur's <a href="https://github.com/concurtech">Sample Code</a> page.
</blockquote>
## 
    <a id="top" name="top"></a>Managing Application Connectors
<blockquote>Concur administrators use the **Manage Application Connectors**** **link in** Web Services** under **Administration** to** **register, test and enable application connectors.
</blockquote>
### 
    <a id="userroles" name="userroles"></a>User Permission
<blockquote>The **Web Services** links can be accessed by users with the following permission:
**Developer Sandbox or Expense/Invoice/Travel/Travel Request Standard:**
**Can Administer**: Users with this permission can register and modify application connectors.
**Expense/Invoice/Travel/Travel Request Professional:**
**Web Services Administrator **: Users with this permission at companies that are Development Partners can register and modify application connectors.
**All Admin roles**: Users with this permission at companies that are Development Partners can register and modify application connectors.
</blockquote>
### 
    <a id="access" name="access"></a>Accessing Application Connector Registration
<blockquote>The **Manage Application Connectors** link on the **Web Services **page is used to register, test and enable or disable application connectors. Only Concur Internal staff can access the **Manage Application Connectors**** **link.
<h5>
        To access Application Connector Registration:</h5>
<ol>
* 
            On the home page, select **Administration** > **Web Services**. The** Web Services **page appears.<br />
            <img alt=" /" src="https://developer.concur.com/sites/default/files/ManageAppConnectors_WSAdmin.png" />
* 
            Click **Manage Application Connectors**. The **Application Connector Registration** page appears.<br />
            <img alt=" /" src="https://developer.concur.com/sites/default/files/AppConnectorReg.png" />
</ol>
</blockquote>
### 
    <a id="register" name="register"></a>Registering an Application Connector
<blockquote>Once a development partner has configured a application connector, it must be registered with Concur.
<h5>
        To register an application connector:</h5>
<ol>
* 
            On the **Application Connector Registration** page, click **New**.<br />
            <img alt=" /" src="https://developer.concur.com/sites/default/files/AppConnector_New.png" />
* 
            In the System area, complete all of the required fields.
<table border="1" bordercolor="#dbdbdb" cellpadding="3" cellspacing="0" width="90%">
<tbody>
<tr class="GrayTableHead">
<td valign="top" width="30%">
                            Field</td>
<td valign="top" width="70%">
                            Description</td>
</tr>
<tr>
<td valign="top">
Name
</td>
<td valign="top">
Enter the name that should appear in the list of connectors.
</td>
</tr>
<tr>
<td valign="top">
Description
</td>
<td valign="top">
Enter the description of the function of the connector, such as what back-end system it might connect to.
</td>
</tr>
<tr>
<td valign="top">
Host Name
</td>
<td valign="top">
Enter the hostname for the connector.<br />
                                Example: https://{servername}
</td>
</tr>
<tr>
<td valign="top">
User Name
</td>
<td valign="top">
Enter the user name required to authenticate with the host. This must be the same as the user name specified in the configuration file for the application connector.
</td>
</tr>
<tr>
<td valign="top">
Password
</td>
<td valign="top">
Enter the password required to authenticate with the host. This must be the same as the password specified in the configuration file for the application connector.
</td>
</tr>
</tbody>
</table>

* 
            Click **Test Connection**. Concur will attempt to connect to the test connection endpoint with the supplied credentials. If you have not configured the test connection endpoint, the test will fail. Refer to the <em>Required: To add the test connection endpoint</em> section above for the test connection details.
* 
            In the **Services** section, select an outbound message or callout that the connector will interact with.
* 
            Click **Configure**. The **Configure Service** window appears.
* 
            Enter the endpoint that the Concur will connect to on the host. Example: /attendee/v1.0/find
* 
            Select the **Enabled** check box if the endpoint is ready for use. Usually you will do this after you have implemented and tested the endpoint in your application connector.
* 
            Click **Save**. The service is configured for your host.
* 
            Repeat steps 4-8 for each service to configure.
* 
            Click **Save**.
</ol>
</blockquote>
### 
    <a id="modify" name="modify"></a>Modifying an Application Connector Registration
<blockquote>Once an application connector registration has been created, the fields can be modified. Services can be enabled or disabled from the **Modify** page.
<h5>
        To modify an application connector:</h5>
<ol>
* 
            On the **Application Connector Registration **page, select the desired registration from the list.
* 
            Click **Modify**.
* 
            Edit the system fields as necessary.
* 
            Click **Test Connection** to verify your changes.
* 
            Edit the services configurations as necessary.
* 
            Click **Save **to return to the **Application Connector Registration** page.
</ol>
</blockquote>
### 
    <a id="remove" name="remove"></a>Deactivating an Application Connector Registration
<blockquote>Application connector registrations can't be removed, but can be deactivated. Connectors are deactivated by setting all the associated services to inactive.
####
        To deactivate an application connector:
<ol>
* 
            On the **Application Connector Registration** page, select the desired connector.
* 
            Click **Modify**.
* 
            Select the active Service.
* 
            Click **Configure**.
* 
            Clear the **Active** check box.
* 
            Click **OK**.
* 
            Click **Save**.
</ol>
</blockquote>
    </div>

</div>
</div>
                </div>
                
             <div id="sidebar-left" class="sidebar sidebar-left">
          <div id="block-menu-menu-concur-connect" class="block block-menu region-odd odd region-count-1 count-3">

  ####Documentation Library

  <div class="content"><ul class="menu"><li class="collapsed first"><a href="/overview" title="Documentation Roadmap
">Overview</a>
<li class="collapsed"><a href="/oauth-20" title="OAuth 2.0
">OAuth 2.0</a>
<li class="leaf"><a href="https://developer.concur.com/access-token">Web Services</a>
<li class="expanded active-trail"><a href="/callouts" title="Callouts
" class="active">Callouts</a><ul class="menu"><li class="leaf first"><a href="/callouts" title="Callouts and Application Connectors
" class="active">Callouts and Application Connectors</a>
<li class="collapsed"><a href="/callouts/event-notification" title="Event Notification
">Event Notification</a>
<li class="collapsed"><a href="/callouts/external-validation" title="External Validation
">External Validation</a>
<li class="collapsed"><a href="/callouts/fetch-attendee" title="Fetch Attendee Version 2.0
">Fetch Attendee</a>
<li class="collapsed"><a href="/callouts/fetch-list" title="Fetch List
">Fetch List</a>
<li class="collapsed last"><a href="/callouts/launch-external-url" title="Launch External URL
">Launch External URL</a>

<li class="collapsed"><a href="https://developer.concur.com/node/409/">Direct Connects</a>
<li class="collapsed"><a href="/reference/apis-product" title="Reference
">Reference</a>
<li class="leaf"><a href="/release-notes" title="Release Notes
">Release Notes</a>
<li class="leaf"><a href="/more-resources/developer-support" title="Developer Support
">Developer Support</a>
<li class="leaf"><a href="https://developer.concur.com/forums/concur-connect">Forums</a>
<li class="leaf last"><a href="/developer-support/maintenance-schedule" title="Concur Connect Platform&amp;nbsp;Maintenance Schedule
">Maintenance Schedule</a>
</div>
  
</div>
        </div>
      
      
            </div>
            
<script type="text/javascript" src="/sites/all/modules/jquery_update/replace/jquery.min.js?T"></script>
<script type="text/javascript" src="/misc/drupal.js?T"></script>
<script type="text/javascript" src="/sites/all/themes/bblayer/scripts/elqNow/eloqua-global-include.js?T"></script>
<script type="text/javascript" src="/sites/all/libraries/colorbox/colorbox/jquery.colorbox-min.js?T"></script>
<script type="text/javascript" src="/sites/all/modules/colorbox/js/colorbox.js?T"></script>
<script type="text/javascript" src="/sites/all/modules/colorbox/styles/default/colorbox_default_style.js?T"></script>
<script type="text/javascript" src="/sites/all/modules/colorbox/js/colorbox_load.js?T"></script>
<script type="text/javascript" src="/sites/all/modules/colorbox/js/colorbox_inline.js?T"></script>
<script type="text/javascript" src="/sites/all/modules/google_analytics/googleanalytics.js?T"></script>
<script type="text/javascript" src="/sites/all/modules/nice_menus/superfish/js/superfish.js?T"></script>
<script type="text/javascript" src="/sites/all/modules/nice_menus/superfish/js/jquery.bgiframe.min.js?T"></script>
<script type="text/javascript" src="/sites/all/modules/nice_menus/superfish/js/jquery.hoverIntent.minified.js?T"></script>
<script type="text/javascript" src="/sites/all/modules/nice_menus/nice_menus.js?T"></script>
<script type="text/javascript" src="/sites/all/modules/poormanscron/poormanscron.js?T"></script>
<script type="text/javascript" src="/sites/all/libraries/shadowbox/shadowbox.js?T"></script>
<script type="text/javascript" src="/sites/all/modules/shadowbox/shadowbox_auto.js?T"></script>
<script type="text/javascript" src="/sites/all/modules/views_slideshow/js/jquery.cycle.all.min.js?T"></script>
<script type="text/javascript" src="/sites/all/modules/views_slideshow/contrib/views_slideshow_singleframe/views_slideshow.js?T"></script>
<script type="text/javascript" src="/sites/all/modules/views_slideshow/contrib/views_slideshow_thumbnailhover/views_slideshow.js?T"></script>
<script type="text/javascript" src="/sites/all/modules/custom_search/js/custom_search.js?T"></script>
<script type="text/javascript" src="/sites/all/themes/bblayer/scripts/submit_animated.js?T"></script>
<script type="text/javascript" src="/sites/all/themes/bblayer/scripts/jquery-1.8.3.js?T"></script>
<script type="text/javascript" src="/sites/all/modules/clientside_validation/jquery-validate/jquery.validate.min.js?T"></script>
<script type="text/javascript" src="/sites/all/themes/bblayer/scripts/general.js?T"></script>
<script type="text/javascript">
<!--//--><![CDATA[//><!--
jQuery.extend(Drupal.settings, { "basePath": "/", "colorbox": { "transition": "elastic", "speed": "350", "opacity": "0.80", "slideshow": false, "slideshowAuto": true, "slideshowSpeed": "2500", "slideshowStart": "start slideshow", "slideshowStop": "stop slideshow", "current": "{current} of {total}", "previous": "« Prev", "next": "Next »", "close": "Close", "overlayClose": true, "maxWidth": "100%", "maxHeight": "100%" }, "googleanalytics": { "trackOutbound": 1, "trackMailto": 1, "trackDownload": 1, "trackDownloadExtensions": "7z|aac|arc|arj|asf|asx|avi|bin|csv|doc|exe|flv|gif|gz|gzip|hqx|jar|jpe?g|js|mp(2|3|4|e?g)|mov(ie)?|msi|msp|pdf|phps|png|ppt|qtm?|ra(m|r)?|sea|sit|tar|tgz|torrent|txt|wav|wma|wmv|wpd|xls|xml|z|zip" }, "nice_menus_options": { "delay": "800", "speed": "slow" }, "cron": { "basePath": "/poormanscron", "runNext": 1421872104 }, "shadowbox": { "animate": 1, "animateFade": 1, "animSequence": "wh", "auto_enable_all_images": 0, "auto_gallery": 0, "autoplayMovies": true, "continuous": 0, "counterLimit": "10", "counterType": "default", "displayCounter": 1, "displayNav": 1, "enableKeys": 1, "fadeDuration": "0.35", "handleOversize": "resize", "handleUnsupported": "link", "initialHeight": 160, "initialWidth": 320, "language": "en", "modal": false, "overlayColor": "#000", "overlayOpacity": "0.85", "players": null, "resizeDuration": "0.35", "showMovieControls": 1, "slideshowDelay": "0", "viewportPadding": 20, "useSizzle": 0 }, "custom_search": { "form_target": "_self", "solr": 0 }, "clientsideValidation": { "forms": { "search-theme-form": { "errorPlacement": "4", "errorJquerySelector": "", "customErrorFunction": "", "rules": { "search_theme_form": { "maxlength": 128, "messages": { "maxlength": "Search this site field has to have maximum 128 values." } } } } }, "general": { "errorClass": "error", "wrapper": "li", "validateTabs": 1, "scrollTo": 1, "scrollSpeed": 1000, "validateOnBlur": "1", "validateOnBlurAlways": 0, "validateOnKeyUp": "1", "validateOnSubmit": "1", "errorElement": "label" } } });
//--><!]]>
</script>
<script type="text/javascript">
<!--//--><![CDATA[//><!--

var timerId = null, timeout = 5;

function WaitUntilCustomerGUIDIsRetrieved() {

if (!!(timerId)) {

if (timeout == 0) {

return;

}

if (typeof this.GetElqCustomerGUID === "function") {
          document.forms["DevelopersOptIn"].elements["elqCustomerGUID"].value=GetElqCustomerGUID();
return;
}
timeout -= 1;
}
timerId = setTimeout("WaitUntilCustomerGUIDIsRetrieved()", 500);
return;
}
               window.onload = WaitUntilCustomerGUIDIsRetrieved;
_elqQ.push(["elqGetCustomerGUID"]);


//--><!]]>
</script>
            <script type="text/javascript" src="/sites/all/themes/bblayer/scripts/jquery.cookie.js?T"></script>
<script type="text/javascript" src="/sites/all/themes/bblayer/scripts/jquery.concur.breezeUser.js?T"></script>
<script type="text/javascript" src="/sites/all/modules/clientside_validation/clientside_validation.js?T"></script>
<script type="text/javascript">
<!--//--><![CDATA[//><!--

      Shadowbox.path = "/sites/all/libraries/shadowbox/";
      Shadowbox.init(Drupal.settings.shadowbox);
    
//--><!]]>
</script>
<script type="text/javascript">
<!--//--><![CDATA[//><!--
var _gaq = _gaq || [];_gaq.push(["_setAccount", "UA-41161356-1"]);_gaq.push(["_trackPageview"]);(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

  ga('create', 'UA-41161356-1', 'concur.com');
  ga('send', 'pageview');(function() {var ga = document.createElement("script");ga.type = "text/javascript";ga.async = true;ga.src = ("https:" == document.location.protocol ? "https://ssl" : "http://www") + ".google-analytics.com/ga.js";var s = document.getElementsByTagName("script")[0];s.parentNode.insertBefore(ga, s);})();
//--><!]]>
</script>
        </div> <!-- /main -->

        <div id="footer_wrapper">
            <div id="footer" class="container">
                <div class="row">
                    <div class="span12">
                                            </div>
                    <div class="span3">
                        <div id="block-menu_block-6" class="block block-menu_block region-odd even region-count-1 count-4">

  ####Docs &amp; Resources

  <div class="content"><div class="menu-block-6 menu-name-menu-main-menu parent-mlid-914 menu-level-1">
  <ul class="menu"><li class="leaf first menu-mlid-1524"><a href="/docs-and-resources/documentation" title="API Documentation
">API Documentation</a>
<li class="leaf menu-mlid-1888"><a href="https://developer.concur.com/docs-and-resources/tools" title="Tools
">Tools</a>
<li class="leaf menu-mlid-250"><a href="/docs-and-resources/forums" title="Forums
">Forums</a>
<li class="leaf menu-mlid-928"><a href="http://www.concur.com/blog/tag/developer" title="Blog
" target="_blank">Blog</a>
<li class="leaf menu-mlid-929"><a href="/docs-and-resources/support" title="Support
">Support</a>
<li class="leaf last menu-mlid-935"><a href="/go-market/news-and-events" title="News and Events
">News &amp; Events</a>
</div>
</div>
  
</div>
<div id="block-menu_block-5" class="block block-menu_block region-even odd region-count-2 count-5">

  ####Get Started

  <div class="content"><div class="menu-block-5 menu-name-menu-main-menu parent-mlid-913 menu-level-1">
  <ul class="menu"><li class="leaf first menu-mlid-916"><a href="/get-started/consumer-apps" title="Consumer Apps
">Consumer Apps</a>
<li class="leaf menu-mlid-917"><a href="/get-started/enterprise-apps" title="Enterprise Apps
">Enterprise Apps</a>
<li class="leaf menu-mlid-918"><a href="/get-started/open-booking" title="TripLink
">TripLink</a>
<li class="leaf menu-mlid-919"><a href="/get-started/in-company-apps" title="In-Company Apps
">In-Company Apps</a>
<li class="leaf last menu-mlid-1724"><a href="/get-started/testimonials">Testimonials</a>
</div>
</div>
  
</div>
                    </div>
                    <div class="span3">
                        <div id="block-menu_block-7" class="block block-menu_block region-odd even region-count-1 count-6">

  ####Go to Market

  <div class="content"><div class="menu-block-7 menu-name-menu-main-menu parent-mlid-931 menu-level-1">
  <ul class="menu"><li class="leaf first menu-mlid-934"><a href="/go-market/app-certification" title="App Review
">App Certification</a>
<li class="leaf menu-mlid-936"><a href="/go-market/partner-center" title="Partner Center
">Partner Center</a>
<li class="leaf last menu-mlid-1921"><a href="/go-market/partner-resources">Partner Resources</a>
</div>
</div>
  
</div>
                    </div>
                    <div class="span3">
                        <div id="block-menu-menu-stand-alone-footer-links" class="block block-menu region-odd odd region-count-1 count-7">


  <div class="content"><ul class="menu"><li class="leaf first"><a href="http://www.concur.com" target="_blank">Concur Home</a>
<li class="leaf"><a href="https://www.concur.com/blog/tag/developer" target="_blank">Concur Developer Blog</a>
<li class="leaf"><a href="https://developer.concur.com/devcon" target="_blank">The Perfect Trip DevCon</a>
<li class="leaf last"><a href="https://www.concur.com/en-us/contact" target="_blank">Contact Us</a>
</div>
  
</div>
<div id="block-block-33" class="block block-block region-even even region-count-2 count-8">


  <div class="content">
    <li class="social-links">
        <a href="http://www.facebook.com/Concur" target="_blank"><img alt="facebook" class="follow" src="/sites/all/themes/bblayer/images/icons/facebook.png" /></a> <a href="http://twitter.com/Concur" target="_blank"><img alt="twitter" class="follow" src="/sites/all/themes/bblayer/images/icons/twitter.png" /></a> <a href="http://www.linkedin.com/groups?gid=149969&amp;trk=anetsrch_name&amp;goback=%2Egdr_1258669335736_1" target="_blank"><img alt="Linked In" class="follow" src="/sites/all/themes/bblayer/images/icons/linkedin.png" /></a>
    
            <a href="http://plus.google.com/117783436561067399207/" target="_blank"><img alt="Google Plus" class="follow" src="/sites/all/themes/bblayer/images/icons/g+.png" /></a>
    

</div>
  
</div>
                    </div>
                </div>
                <div id="block-block-14" class="block block-block region-odd odd region-count-1 count-9">


  <div class="content"><p class="copyright">Copyright 2013 Concur Technologies, Inc. All rights reserved.
</div>
  
</div>
            </div> <!-- /footer -->
        </div> <!-- /footer_wrapper -->

    </body>
</html>
