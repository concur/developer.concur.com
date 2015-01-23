
        <div id="main" class="container">
            <div>
                            </div>
            <div class="row">
                <div class="span12">
<div class="breadcrumbs"><a href="/">Home</a>Company Notification Subscription Resource: POST</div>
                </div>
            </div>

            <div id="content-wrapper">
<!-- <div class="row"> -->
                <div id="content" class="span9">
            # Company Notification Subscription Resource: POST
                    <div class="section">
                    <div id="node-566" class="node clear-block">


    
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
        <a href="#itinchange">Post Company Notification Subscription for Itinerary Changes</a>
* 
        <a href="#travprofilechange">Post Company Notification Subscription for Travel Profile Changes </a>

## 
    <a id="itinchange" name="itinchange"></a>Post Company Notification Subscription for Itinerary Changes Request
<table border="1" bordercolor="#dbdbdb" cellpadding="3" cellspacing="0" width="100%">
<tbody>
<tr class="GrayTableHead">
<td colspan="2">
                Description</td>
</tr>
<tr>
<td colspan="2">
                Subscribes or unsubcribes the partner from notifications when any users in the company add, modify, or cancel an itinerary. The partner must have received authorization using <a href="https://developer.concur.com/node/491">OAuth</a> by an administrative user at the company to access the company's trip information.</td>
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
                    <span>https://www.concursolutions.com/api/company/v1.0/subscribe?type=itinerary<br />
                    To unsubscribe:<br />
                    <span>https://www.concursolutions.com/api/company/v1.0/unsubscribe?type=itinerary
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
                Authorization header with OAuth token for an administrative user at the company. The user must have one of the following user roles in Concur: Company Administrator or Web Services Administrator for Professional, or Can Administer for Standard.</td>
<td valign="top" width="50%">
                None</td>
</tr>
</tbody>
</table>
####
    XML Example Request
<pre class="overflow_box">
POST <a href="http://www.concursolutions.com/api/company/v1.0/subscribe?type=itinerary" title="http://www.concursolutions.com/api/company/v1.0/subscribe?type=itinerary">http://www.concursolutions.com/api/company/v1.0/subscribe?type=itinerary</a> HTTP/1.1 
Authorization: OAuth {access token}
...
</pre>## 
    Post Company Notification Subscription for Itinerary Changes Response
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
                The notification will be sent to the Postback URL that the partner has registered with Concur during application review. Partners can only have one postback URL for all notification types. The notification will include the **type**, **oauth_token_key**, **userid_type**, and **userid_value** query parameters, specifying the updated user:
                https://postbackurl.com?type=itinerary&amp;oauth_token_key={oauthtoken}&amp;userid_type=login&amp;userid_value=cm@example.com
                The request body will include a **Notification** parent element, with the following child elements:
<table border="1" bordercolor="#dbdbdb" cellpadding="3" cellspacing="0" width="100%">
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
                                The URI for the object. The developer can use the appropriate GET endpoint with the ObjectURI to get complete details for the trip.</td>
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
    XML Example of Successful Response
<pre class="overflow_box">
200 OK
</pre>####
    XML Example of Notification
<pre class="overflow_box">
POST  https://www.postbackurl.com?type=itinerary<span class="ST0">&amp;oauth_token_key={oauthtoken}<span class="ST0">&amp;userid_type=login<span class="ST0">&amp;userid_value=cm@example.com HTTP/1.1
                
<span class="ST1"><?<span class="ST1">xml version=&quot;1.0&quot; encoding=&quot;utf-8&quot;?> 
<Notification> 
    <ObjectType>ITINERARY</ObjectType> 
    <ObjectURI>https://www.concursolutions.com/api/travel/trip/v1.1/naIzQJ0y2DBWjCIQOb2SHTsozwBsHDkdP</ObjectURI>
    <EventDateTime>2013-02-13T08:12:35</EventDateTime> 
    <EventType>CREATE</EventType> 
    <Context/>
    <TripId>naIzQJ0y2DBWjCIQOb2SHTsozwBsHDkdP</TripId>
</Notification>
</pre>## 
    <a id="travprofilechange" name="travprofilechange"></a>Post Company Notification Subscription for Travel Profile Changes Request
<table border="1" bordercolor="#dbdbdb" cellpadding="3" cellspacing="0" width="100%">
<tbody>
<tr class="GrayTableHead">
<td colspan="2">
                Description</td>
</tr>
<tr>
<td colspan="2">
                Subscribes or unsubcribes the partner from notifications when the company's Travel Profile information changes. The partner must have received authorization using <a href="https://developer.concur.com/node/491">OAuth</a> by an administrative user at the company to access the company's trip information.
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
                    <a href="https://www.concursolutions.com/api/company/v1.0/subscribe?type=profile" title="https://www.concursolutions.com/api/company/v1.0/subscribe?type=profile">https://www.concursolutions.com/api/company/v1.0/subscribe?type=profile</a><br />
                    To unsubscribe:<br />
                    <a href="https://www.concursolutions.com/api/company/v1.0/unsubscribe?type=profile" title="https://www.concursolutions.com/api/company/v1.0/unsubscribe?type=profile">https://www.concursolutions.com/api/company/v1.0/unsubscribe?type=profile</a>
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
                Authorization header with OAuth token for an administrative user at the company. The user must have one of the following user roles in Concur: Company Administrator or Web Services Administrator for Professional, or Can Administer for Standard.</td>
<td valign="top" width="50%">
                None</td>
</tr>
</tbody>
</table>
####
    XML Example Request
<pre class="overflow_box">
POST <a href="https://www.concursolutions.com/api/company/v1.0/subscribe?type=profile" title="https://www.concursolutions.com/api/company/v1.0/subscribe?type=profile">https://www.concursolutions.com/api/company/v1.0/subscribe?type=profile</a> HTTP/1.1
Authorization: OAuth {access token}
...
</pre>## 
    Post Company Notification Subscription for Travel Profile Changes Response
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
                The notification will be sent to the Postback URL that the partner has registered with Concur during application review. Partners can only have one postback URL for all notification types. The notification will include the **type**, **oauth_token_key**, **userid_type**, and **userid_value** query parameters, specifying the updated user:
                https://postbackurl.com?type=profile&amp;oauth_token_key={oauthtoken}&amp;userid_type=login&amp;userid_value=cm@example.com
The partner can use this information to make a <a href="https://developer.concur.com/node/503">Get Travel Profile</a> request.
</td>
</tr>
</tbody>
</table>
####
    XML Example of Successful Response
<pre class="overflow_box">
200 OK
</pre>
