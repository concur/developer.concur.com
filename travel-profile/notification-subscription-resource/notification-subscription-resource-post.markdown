
        <div id="main" class="container">
            <div>
                            </div>
            <div class="row">
                <div class="span12">
<div class="breadcrumbs"><a href="/">Home</a>Notification Subscription Resource: POST</div>
                </div>
            </div>

            <div id="content-wrapper">
<!-- <div class="row"> -->
                <div id="content" class="span9">
            # Notification Subscription Resource: POST
                    <div class="section">
                    <div id="node-505" class="node clear-block">


    
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
.STRING_LITERAL {color: #ce7b00}    </style>
This resource supports the following POST actions:

* 
        <a href="#itinchange">Post Notification Subscription for Itinerary Changes</a>
* 
        <a href="#fopchange">Post Notification Subscription for Form of Payment Changes </a>
* 
        <a href="#travprofilechange">Post Notification Subscription for Travel Profile Changes </a>

## 
    <a id="itinchange" name="itinchange"></a>Post Notification Subscription for Itinerary Changes Request
<table border="1" bordercolor="#dbdbdb" cellpadding="3" cellspacing="0" width="100%">
<tbody>
<tr class="GrayTableHead">
<td colspan="2">
                Description</td>
</tr>
<tr>
<td colspan="2">
                Subscribes or unsubcribes the travel supplier from notifications when the user adds, modifies, or cancels an itinerary. This functionality is only available to travel suppliers that have an application on the App Center tab of Concur. The supplier must also have received authorization by the user to access their trip information.</td>
</tr>
<tr class="GrayTableHead">
<td>
                Query Parameters - Required</td>
<td>
                Query Parameters - Optional</td>
</tr>
<tr>
<td>

* 
                        **type=itinerary**<br />
                        The type of subscription.

**Examples**<br />
                    To subscribe:<br />
                    <span>https://www.concursolutions.com/api/travelprofile/v1.0/subscribe?type=itinerary<br />
                    To unsubscribe:<br />
                    <span>https://www.concursolutions.com/api/travelprofile/v1.0/unsubscribe?type=itinerary
</td>
<td valign="top">
                None</td>
</tr>
<tr class="GrayTableHead">
<td>
                Request Headers - Required</td>
<td>
                Request Headers - Optional</td>
</tr>
<tr>
<td width="50%">
                Authorization header with OAuth token for the desired Concur user. This token is granted as part of the <a href="https://developer.concur.com/node/494">OAuth from the App Center</a> process.</td>
<td valign="top" width="50%">
                None</td>
</tr>
</tbody>
</table>
####
    XML Example Request for Itinerary Changes
<pre class="overflow_box">
POST https://www.concursolutions.com/api/<span>travelprofile/v1.0/subscribe?type=itinerary HTTP/1.1
Authorization: OAuth {access token}
...
</pre>## 
    Post Notification Subscription for Itinerary Changes Response
<table border="1" bordercolor="#dbdbdb" cellpadding="3" cellspacing="0" width="100%">
<tbody>
<tr class="GrayTableHead">
<td colspan="2">
                HTTP Responses</td>
</tr>
<tr>
<td colspan="2">
                <a href="https://developer.concur.com/node/205">HTTP Status Codes</a></td>
</tr>
<tr class="GrayTableHead">
<td colspan="2">
                Content Body</td>
</tr>
<tr>
<td colspan="2">
                This request will return an HTTP code. Refer to <a href="https://developer.concur.com/node/205">HTTP Codes</a> for more details.</td>
</tr>
<tr class="GrayTableHead">
<td colspan="2">
                Notification Format</td>
</tr>
<tr>
<td colspan="2">
                The notification will be sent to the Postback URL that the supplier has registered with Concur during application review. Suppliers can only have one postback URL for all notification types. The notification will include the **type** and **oauth_token_key** query parameters, specifying the OAuth information for the updated user:
                https://postbackurl.com?type=Itinerary&amp;oauth_token_key={oauth_token}
                The request will include a **Notification** parent element, with the following child elements:
<table border="1" bordercolor="#dbdbdb" cellpadding="3" cellspacing="0" width="90%">
<tbody>
<tr class="GrayTableHead">
<td valign="top" width="30%">
                                Element</td>
<td valign="top" width="70%">
                                Description</td>
</tr>
<tr>
<td valign="top">
                                ObjectType</td>
<td valign="top">
                                ITINERARY</td>
</tr>
<tr>
<td valign="top">
                                ObjectURI</td>
<td valign="top">
                                The URI for the object. The developer can use the appropriate GET endpoint with the ObjectURI to get complete details for the trip. For Itinerary, the ObjectURI value is the same as the TripId value.</td>
</tr>
<tr>
<td valign="top">
                                EventDateTime</td>
<td valign="top">
                                When the event happened.Format: YYYY-MM-DDThh:mm:ss</td>
</tr>
<tr>
<td valign="top">
                                EventType</td>
<td valign="top">
                                The type of the change. Format: CREATE, UPDATE, CANCEL</td>
</tr>
<tr>
<td valign="top">
                                Context</td>
<td valign="top">
                                This is not used yet but will be used in future to specify the change in the trip. Developers can use this in conjuction with EventType to decide how to process the notification.</td>
</tr>
<tr>
<td valign="top">
                                TripId</td>
<td valign="top">
                                The unique identifier for the trip. Format: String</td>
</tr>
</tbody>
</table>
</td>
</tr>
</tbody>
</table>
####
    XML Example of Notification
<pre class="overflow_box">
POST https://www.postbackurl.com?type=itinerary<span class="ST0">&amp;oauth_token_key={oauthtoken} HTTP/1.1
Authorization: OAuth {access token}
                
<span class="ST1"><?<span class="ST1">xml version=&quot;1.0&quot; encoding=&quot;utf-8&quot;?> 
<Notification> 
    <ObjectType>ITINERARY</ObjectType> 
    <ObjectURI>https://www.concursolutions.com/api/travel/trip/v1.1/naIzQJ0y2DBWjCIQOb2SHTsozwBsHDkdP</ObjectURI>
    <EventDateTime>2013-02-13T08:12:35</EventDateTime> 
    <EventType>CREATE</EventType> 
    <Context/> 
    <TripId>naIzQJ0y2DBWjCIQOb2SHTsozwBsHDkdP</TripId>
</Notification>
</pre>####
    XML Example of Successful Response for Itinerary Changes
<pre class="overflow_box">
200 OK
</pre>## 
    <a id="fopchange" name="fopchange"></a>Post Notification Subscription for Form of Payment Changes Request
<table border="1" bordercolor="#dbdbdb" cellpadding="3" cellspacing="0" width="100%">
<tbody>
<tr class="GrayTableHead">
<td colspan="2">
                Description</td>
</tr>
<tr>
<td colspan="2">
                Subscribes or unsubcribes the travel supplier from notifications when the user's Form of Payment information changes. This functionality is only available to travel suppliers that have an application on the App Center tab of Concur. The supplier must also have received authorization by the user to access their Form of Payment information.
                **NOTE**: Concur will send a notification when any area of the user&rsquo;s Form of Payment is updated. This may include fields that are not available through the Travel Profile web service.</td>
</tr>
<tr class="GrayTableHead">
<td>
                Query Parameters - Required</td>
<td>
                Query Parameters - Optional</td>
</tr>
<tr>
<td>

* 
                        **type=fop**<br />
                        The type of subscription.

**Examples**<br />
                    To subscribe:<br />
                    https://www.concursolutions.com/api/<span>travelprofile/v1.0/subscribe?type=fop<br />
                    To unsubscribe:<br />
                    https://www.concursolutions.com/api/<span>travelprofile/v1.0/unsubscribe?type=fop
</td>
<td valign="top">
                None</td>
</tr>
<tr class="GrayTableHead">
<td>
                Request Headers - Required</td>
<td>
                Request Headers - Optional</td>
</tr>
<tr>
<td width="50%">
                Authorization header with OAuth token for the desired Concur user. This token is granted as part of the <a href="https://developer.concur.com/node/494">OAuth from the App Center</a> process.</td>
<td valign="top" width="50%">
                None</td>
</tr>
</tbody>
</table>
####
    XML Example Request
<pre class="overflow_box">
POST https://www.concursolutions.com/api/<span>travelprofile/v1.0/subscribe?type=fop HTTP/1.1
Authorization: OAuth {access token}
</pre>## 
    Post Notification Subscription for Form of Payment Changes Response
<table border="1" bordercolor="#dbdbdb" cellpadding="3" cellspacing="0" width="100%">
<tbody>
<tr class="GrayTableHead">
<td colspan="2">
                HTTP Responses</td>
</tr>
<tr>
<td colspan="2">
                <a href="https://developer.concur.com/node/205">HTTP Status Codes</a></td>
</tr>
<tr class="GrayTableHead">
<td colspan="2">
                Content Body</td>
</tr>
<tr>
<td colspan="2">
                This request will return an HTTP code. Refer to <a href="https://developer.concur.com/node/205">HTTP Codes</a> for more details.</td>
</tr>
<tr class="GrayTableHead">
<td colspan="2">
                Notification Format</td>
</tr>
<tr>
<td colspan="2">
                The notification will be sent to the Postback URL that the supplier has registered with Concur during application review. Suppliers can only have one postback URL for all notification types. The notification will include the **type** and **oauth_token_key** query parameters, specifying the OAuth information for the updated user:
                https://postbackurl.com?type=FOP&amp;oauth_token_key={oauth_token}</td>
</tr>
</tbody>
</table>
####
    XML Example of Successful Response
<pre class="overflow_box">
200 OK
</pre>## 
    <a id="travprofilechange" name="travprofilechange"></a>Post Notification Subscription for Travel Profile Changes Request
<table border="1" bordercolor="#dbdbdb" cellpadding="3" cellspacing="0" width="100%">
<tbody>
<tr class="GrayTableHead">
<td colspan="2">
                Description</td>
</tr>
<tr>
<td colspan="2">
                Subscribes or unsubcribes the travel supplier from notifications when the user's Travel Profile information changes. This functionality is only available to travel suppliers that have an application on the App Center tab of Concur. The supplier must also have received authorization by the user to access their travel profile information.
                **NOTE**: Concur will send a notification when any area of the user&rsquo;s Travel Profile is updated. This may include fields that are not available through the Travel Profile web service.</td>
</tr>
<tr class="GrayTableHead">
<td>
                Query Parameters - Required</td>
<td>
                Query Parameters - Optional</td>
</tr>
<tr>
<td>

* 
                        **type=profile**<br />
                        The type of subscription.

**Examples**<br />
                    To subscribe:<br />
                    https://www.concursolutions.com/api/<span>travelprofile/v1.0/subscribe?type=profile<br />
                    To unsubscribe:<br />
                    https://www.concursolutions.com/api/<span>travelprofile/v1.0/unsubscribe?type=profile
</td>
<td valign="top">
                None</td>
</tr>
<tr class="GrayTableHead">
<td>
                Request Headers - Required</td>
<td>
                Request Headers - Optional</td>
</tr>
<tr>
<td width="50%">
                Authorization header with OAuth token for the desired Concur user. This token is granted as part of the <a href="https://developer.concur.com/node/494">OAuth from the App Center</a> process.</td>
<td valign="top" width="50%">
                None</td>
</tr>
</tbody>
</table>
####
    XML Example Request
<pre class="overflow_box">
POST https://www.concursolutions.com/api/<span>travelprofile/v1.0/subscribe?type=profile HTTP/1.1
Authorization: OAuth {access token}
</pre>## 
    Post Notification Subscription for Travel Profile Changes Response
<table border="1" bordercolor="#dbdbdb" cellpadding="3" cellspacing="0" width="100%">
<tbody>
<tr class="GrayTableHead">
<td colspan="2">
                HTTP Responses</td>
</tr>
<tr>
<td colspan="2">
                <a href="https://developer.concur.com/node/205">HTTP Status Codes</a></td>
</tr>
<tr class="GrayTableHead">
<td colspan="2">
                Content Body</td>
</tr>
<tr>
<td colspan="2">
                This request will return an HTTP code. Refer to <a href="https://developer.concur.com/node/205">HTTP Codes</a> for more details.</td>
</tr>
<tr class="GrayTableHead">
<td colspan="2">
                Notification Format</td>
</tr>
<tr>
<td colspan="2">
                The notification will be sent to the Postback URL that the supplier has registered with Concur during application review. Suppliers can only have one postback URL for all notification types. The notification will include the **type** and **oauth_token_key** query parameters, specifying the OAuth information for the updated user:
                https://postbackurl.com?type=Profile&amp;oauth_token_key={oauth_token}</td>
</tr>
</tbody>
</table>
####
    XML Example of Successful Response
<pre class="overflow_box">
200 OK
</pre>
