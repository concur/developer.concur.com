
        <div id="main" class="container">
            <div>
                            </div>
            <div class="row">
                <div class="span12">
<div class="breadcrumbs"><a href="/">Home</a>Itinerary Resource: GET</div>
                </div>
            </div>

            <div id="content-wrapper">
<!-- <div class="row"> -->
                <div id="content" class="span9">
            # Itinerary Resource: GET
                    <div class="section">
                    <div id="node-514" class="node clear-block">


    
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
.STRING_LITERAL {color: #ce7b00}</style>This resource supports the following GET actions:

* 
        <a href="#listofitins">Get List of Itineraries</a>
* 
        <a href="#getitindetails">Get Itinerary Details </a>

## 
    <a id="listofitins" name="listofitins"></a>Get List of Itineraries Request
<table border="1" bordercolor="#dbdbdb" cellpadding="3" cellspacing="0" width="100%">
<tbody>
<tr class="GrayTableHead">
<td colspan="2">
                Description</td>
</tr>
<tr>
<td colspan="2">
Retrieves trip summaries for the traveler specified in the OAuth token. This endpoint can also be used to get details for trips for a different user or the whole company. This is most often done when a Travel Management Company needs to get a list of trips on behalf of a user or company. During the request, a user with one of the following user roles from the user's company must authenticate through OAuth: Web Services Administrator for Professional, or Can Administer for Standard.
The response for this function can be divided into pages for easier processing.
</td>
</tr>
<tr class="GrayTableHead">
<td>
                Query Parameters - Required</td>
<td>
                Supported Accept Types</td>
</tr>
<tr>
<td>
                None</td>
<td>

* 
                        application/xml

</td>
</tr>
<tr class="GrayTableHead">
<td colspan="2">
                Query Parameters - Optional</td>
</tr>
<tr>
<td colspan="2">
                **NOTE**: If multiple query parameters are supplied, they will be combined with a logical AND. The trip must match all provided criteria to be returned in the search results.

* 
                        **startDate={<em>date</em>}**<br />
                        The URL-encoded start date (in Coordinated Universal Time, aka UTC) for the trip. Format: YYYY-MM-DD. If no query parameters are provided, the start date is set to today's date - 30 days. The request will only return trips that are ongoing during the provided dates, either starting on the date, or starting before the date and ongoing during the provided date.
* 
                        **endDate****={<em>date</em>}**<br />
                        The URL-encoded UTC end date for the trip. Format: YYYY-MM-DD. If no query parameters are provided, the end date is set to today's date + 12 months. The request will only return trips that are ongoing during the provided dates, either ending on the date, or starting before the date and ongoing during the provided date.
* 
                        **createdAfterDate****={<em>date</em>}**<br />
                        The URL-encoded UTC date for when the trip was created. The query string will return trips created on or after this date. Used with the createdbeforedate for finding trips created during a date range. Format: YYYY-MM-DD.
* 
                        **createdBeforeDate****={<em>date</em>}**<br />
                        The URL-encoded UTC date for when the trip was created. The query string will return trips created on or before this date. Used with the createdafterdate for finding trips created during a date range. Format: YYYY-MM-DD.
* 
                        **lastModifiedDate****={<em>date</em>}**<br />
                        The last modified UTC date of the trips and any their associated bookings. This query string will return only the trips where the trip or any of its associated bookings have a last modified date that is greater or equal to the supplied time. The provided date/time can be anytime between now and the first date of trip creation in the database. The format is either the date or the date and time combined.
* 
                        **bookingType={<em>type</em>}**<br />
                        The trip includes at least one booking of this type. Format: Air, Car, Dining, Hotel, Parking, Rail, or Ride
* 
                        **userid_type=login&amp;userid_value=<em>{loginID}</em>**<br />
                        The loginID is the user's Concur login ID. The userid_value of ALL can be sent to get trip summaries for all users at the company. The userid_type and userid_value parameters can only be used if the OAuth consumer has one of the user roles listed above.
* 
                        **includeMetadata=true&amp;ItemsPerPage={<em>number</em>}&amp;Page={<em>number</em>}**<br />
                        The includeMetadata query parameter combined with the ItemsPerPage and Page query parameters will cause the response to be divided into pages. The response will be wrapped in a **ConcurResponse** parent element, with both the response details and the paging metadata included. The details of the response are <a href="#paging">here</a>. If the ItemsPerPage query parameter is not sent, the response will default to 200 if the Page query parameter is sent, or 1000 if the Page query parameter is not set. If the Page query parameter is not sent, the response will default to page 1.
* 
                        **includeVirtualTrip=<em>1</em>**<br />
                        Virtual trips are segments booked offline through the Travel Request product. Set the includeVirtualTrip query parameter to 1 to include those trips in the list.
* 
                        **includeCanceledTrips=<em>{true/false}</em>**<br />
                        The includeCanceledTrips query parameter will cause the request to also return trips with a status of Canceled. When this query parameter is set to **true**, the response will include the **TripStatus** element.

Examples:<br />
                    **To get itinerary list for the entire company (OAuth consumer must have Admin user role):**<br />
                    https://www.concursolutions.com/api/travel/trip/v1.1/?startDate={<em>startdate</em>}&amp;endDate={<em>enddate</em>}<em>&amp;</em>createdAfterDate={<em>date</em>}&amp;createdBeforeDate={<em>date</em>}&amp;lastModifiedDate={<em>date</em>}&amp;bookingType={<em>type</em>}&amp;userid_type=login&amp;userid_value=ALL
                    **To get itinerary list for a single user (the OAuth consumer):**<br />
                    https://www.concursolutions.com/api/travel/trip/v1.1/?startDate={<em>startdate</em>}&amp;endDate={<em>enddate</em>}<em>&amp;</em>createdAfterDate={<em>date</em>}&amp;createdBeforeDate={<em>date</em>}&amp;lastModifiedDate={<em>date</em>}&amp;bookingType={<em>type</em>}
                    **To get itinerary list for a single user (other than the OAuth consumer):**<br />
                    https://www.concursolutions.com/api/travel/trip/v1.1/?startDate={<em>startdate</em>}&amp;endDate={<em>enddate</em>}<em>&amp;</em>createdAfterDate={<em>date</em>}&amp;createdBeforeDate={<em>date</em>}&amp;lastModifiedDate={<em>date</em>}&amp;bookingType={<em>type</em>}&amp;<span class="codeexample">userid_type=login_id&amp;userid_value={<em>loginID</em>}
</td>
</tr>
<tr class="GrayTableHead">
<td>
                Request Headers - Required</td>
<td>
                Request Headers - Optional</td>
</tr>
<tr>
<td width="50%">
                Authorization header with OAuth token for valid Concur user.</td>
<td valign="top" width="50%">
                None</td>
</tr>
</tbody>
</table>
####
    XML Example Request by Start and End Date
<pre class="overflow_box">
GET /api/travel/trip/v1.1/?startDate=2012%2F02%2F01<span class="ST0">&amp;endDate=2013%2F12%2F31 HTTP 1.1
Host: <a href="http://www.concursolutions.com" title="www.concursolutions.com">www.concursolutions.com</a>
Authorization: OAuth {access token} 
...
</pre>####
    XML Example Request by Booking Type and Start Date
<pre class="overflow_box">
GET /api/travel/trip/v1.1/?startDate=2012%2F02%2F01<span class="ST0">&amp;bookingType=Air HTTP 1.1
Host: <a href="http://www.concursolutions.com" title="www.concursolutions.com">www.concursolutions.com</a>
Authorization: OAuth {access token} 
...
</pre>####
    XML Example Request by Created Date
<pre class="overflow_box">
GET /api/travel/trip/v1.1/?createdAfterDate=2012%2F02%2F01 HTTP 1.1
Host: <a href="http://www.concursolutions.com" title="www.concursolutions.com">www.concursolutions.com</a>
Authorization: OAuth {access token}
</pre>####
    XML Example Request with Paging
<pre class="overflow_box">
GET /api/travel/trip/v1.1/?createdAfterDate=2012%2F02%2F01<span class="ST0">&amp;includeMetadata=true<span class="ST0">&amp;ItemsPerPage=2<span class="ST0">&amp;Page=1 HTTP 1.1
Host: <a href="http://www.concursolutions.com" title="www.concursolutions.com">www.concursolutions.com</a>
Authorization: OAuth {access token}
</pre>## 
    Get List of Itineraries Response
<table border="1" bordercolor="#dbdbdb" cellpadding="3" cellspacing="0" width="100%">
<tbody>
<tr class="GrayTableHead">
<td>
                HTTP Responses</td>
<td>
                Supported Content Types</td>
</tr>
<tr>
<td>
                <a href="https://developer.concur.com/node/205">HTTP Status Codes</a></td>
<td>

* 
                        application/xml

</td>
</tr>
<tr class="GrayTableHead">
<td colspan="2">
                Content Body</td>
</tr>
<tr>
<td colspan="2">
This request will return an **ItineraryInfoList** parent element with an **ItineraryInfo** child element for each trip summary for the specified traveler. Each **ItineraryInfo** element has the following child elements:
<table border="1" bordercolor="#dbdbdb" cellpadding="3" cellspacing="0" width="100%">
<tbody>
<tr class="GrayTableHead">
<td valign="top" width="20%">
                                Element</td>
<td valign="top" width="70%">
                                Description</td>
</tr>
<tr>
<td valign="top">
                                TripId</td>
<td valign="top">
                                Encrypted trip identifier value.</td>
</tr>
<tr>
<td valign="top">
                                TripName</td>
<td valign="top">
                                Name of the trip</td>
</tr>
<tr>
<td valign="top">
                                TripStatus</td>
<td valign="top">
                                The status of the trip. This element only appears if the **includeCanceledTrips** query parameter is used in the request.</td>
</tr>
<tr>
<td valign="top">
                                StartDateLocal</td>
<td valign="top">
                                The start date of the trip in the starting location&rsquo;s timezone. Format: YYYY-MM-DDThh:mm:ss.</td>
</tr>
<tr>
<td valign="top">
                                EndDateLocal</td>
<td valign="top">
                                The end date of the trip in the ending location&rsquo;s timezone. Format: YYYY-MM-DDThh:mm:ss.</td>
</tr>
<tr>
<td valign="top">
                                UserLoginId</td>
<td valign="top">
                                The user's login to Concur. Only appears when the OAuth consumer has one of the specified admin roles.</td>
</tr>
<tr>
<td valign="top">
                                DateModifiedUtc</td>
<td valign="top">
                                The UTC date that this trip was last modified. Format: YYYY-MM-DDThh:mm:ss.</td>
</tr>
<tr>
<td valign="top">
                                id</td>
<td valign="top">
                                Trip ID URI with encrypted ID.</td>
</tr>
</tbody>
</table>
**<a id="paging" name="paging"></a>Paging**
If the includeMetadata and ItemsPerPage query parameters are included in the request, the response will include a **ConnectResponse** parent element with the following elements:
<table border="1" bordercolor="#dbdbdb" cellpadding="3" cellspacing="0" width="100%">
<tbody>
<tr class="GrayTableHead">
<td valign="top" width="20%">
                                Element</td>
<td valign="top" width="70%">
                                Description</td>
</tr>
<tr>
<td valign="top">
                                Data</td>
<td valign="top">
                                This parent element contains the response as detailed above.</td>
</tr>
<tr>
<td valign="top">
                                Metadata</td>
<td valign="top">
                                This parent element contains the following elements:
<table border="1" bordercolor="#dbdbdb" cellpadding="3" cellspacing="0" width="100%">
<tbody>
<tr>
<td valign="top">
                                                Paging</td>
<td valign="top">
                                                The parent element of the paging information. Contains the following child elements:
**TotalPages**: The total number of pages the query returned.<br />
                                                    **TotalItems**: The total number of itineraries the query returned.<br />
                                                    **CurrentPage**: The page number for the set of results in the current response.<br />
                                                    **ItemsPerPage**: The number of items set to display per page.<br />
                                                    **PreviousPageURL**: The URI to the previous page of results. This element will be empty when there are no previous pages.<br />
                                                    **NextPageURL**: The URI to the next set of results. This element will be empty when there are no next pages.
</td>
</tr>
</tbody>
</table>
</td>
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
HTTP 1.1 200 OK
Content-Type: application/xml
...

<span class="ST1"><?<span class="ST1">xml version=&quot;1.0&quot; encoding=&quot;utf-8&quot;?>
<ItineraryInfoList <span class="xml-attribute">xmlns=<span class="xml-value">&quot;<span class="xml-value">http://www.concursolutions.com/api/travel/trip/2010/06<span class="xml-value">&quot; <span class="xml-attribute">xmlns:xsi=<span class="xml-value">&quot;<span class="xml-value">http://www.w3.org/2001/XMLSchema-instance<span class="xml-value">&quot; <span class="xml-attribute">xmlns:xsd=<span class="xml-value">&quot;<span class="xml-value">http://www.w3.org/2001/XMLSchema<span class="xml-value">&quot;>
    <ItineraryInfo>
        <TripId>naIzQJ0y2DBWjCIQOb2SHTsozwBsHDkdP</TripId>
        <TripName>Trip from Baltimore to New York</TripName>
        <StartDateLocal>2012-02-15T09:00:00</StartDateLocal>
        <EndDateLocal>2012-02-21T17:30:00</EndDateLocal>
        <UserLoginId>cm@example.com</UserLoginId>
        <DateModifiedUtc>2012-02-14T17:13:07</DateModifiedUtc>
        <id>https://www.concursolutions.com/api/travel/trip/v1.1/naIzQJ0y2DBWjCIQOb2SHTsozwBsHDkdP</id>
    </ItineraryInfo>
    <ItineraryInfo>
        <TripId>I2uwiJJw8r7Owl3IWlSie9WIelxhAhwiL</TripId>
        <TripName>Trip from Baltimore to Seattle</TripName>
        <StartDateLocal>2012-03-26T09:00:00</StartDateLocal>
        <EndDateLocal>2012-03-29T17:30:00</EndDateLocal>
        <DateModifiedUtc>2012-03-24T19:00:00</DateModifiedUtc>
        <UserLoginId>cm@example.com</UserLoginId>
        <id>https://www.concursolutions.com/api/travel/trip/v1.1/I2uwiJJw8r7Owl3IWlSie9WIelxhAhwiL</id>
    </ItineraryInfo>
</ItineraryInfoList>
</pre>####
    XML Example of Successful Response with Paging
<pre class="overflow_box">
HTTP 1.1 200 OK
Content-Type: application/xml
...

<ConnectResponse>
    <Metadata>
        <Paging>
            <TotalPages>38</TotalPages>
            <TotalItems>187</TotalItems>
            <CurrentPage>2</CurrentPage>
            <ItemsPerPage>2</ItemsPerPage>
            <PreviousPageURL>https://www.concursolutions.com/api/travel/trip/v1.1/?createdAfterDate=2012%2F02%2F01<span class="ST0">&amp;amp<span class="ST0">;itemsPerPage=5<span class="ST0">&amp;amp;page=3<span class="ST0">&amp;amp;includeMetaData=true</PreviousPageURL>
            <NextPageURL>https://www.concursolutions.com/api/travel/trip/v1.1/?createdAfterDate=2012%2F02%2F01<span class="ST0">&amp;amp<span class="ST0">;itemsPerPage=5<span class="ST0">&amp;amp;page=1<span class="ST0">&amp;amp;includeMetaData=true</NextPageURL>
        </Paging>
    </Metadata>
    <Data>
        <ItineraryInfoList <span class="xml-attribute">xmlns=<span class="xml-value">&quot;<span class="xml-value">http://www.concursolutions.com/api/travel/trip/2010/06<span class="xml-value">&quot; <span class="xml-attribute">xmlns:i=<span class="xml-value">&quot;<span class="xml-value">http://www.w3.org/2001/XMLSchema-instance<span class="xml-value">&quot;>
            <ItineraryInfo>
                <TripId>naIzQJ0y2DBWjCIQOb2SHTsozwBsHDkdP</TripId>
                <TripName>Trip from Baltimore to New York</TripName>
                <StartDateLocal>2012-02-15T09:00:00</StartDateLocal>
                <EndDateLocal>2012-02-21T17:30:00</EndDateLocal>
                <UserLoginId>cm@example.com</UserLoginId>
                <DateModifiedUtc>2012-02-14T17:13:07</DateModifiedUtc>
                <id>https://www.concursolutions.com/api/travel/trip/v1.1/naIzQJ0y2DBWjCIQOb2SHTsozwBsHDkdP</id>
            </ItineraryInfo>
            <ItineraryInfo>
                <TripId>I2uwiJJw8r7Owl3IWlSie9WIelxhAhwiL</TripId>
                <TripName>Trip from Baltimore to Seattle</TripName>
                <StartDateLocal>2012-03-26T09:00:00</StartDateLocal>
                <EndDateLocal>2012-03-29T17:30:00</EndDateLocal>
                <DateModifiedUtc>2012-03-24T19:00:00</DateModifiedUtc>
                <UserLoginId>cm@example.com</UserLoginId>
                <id>https://www.concursolutions.com/api/travel/trip/v1.1/I2uwiJJw8r7Owl3IWlSie9WIelxhAhwiL</id>
            </ItineraryInfo>
        </ItineraryInfoList>
    </Data>
</ConnectResponse>

</pre>## 
    <a id="getitindetails" name="getitindetails"></a>Get Itinerary Details Request
<table border="1" bordercolor="#dbdbdb" cellpadding="3" cellspacing="0" width="100%">
<tbody>
<tr class="GrayTableHead">
<td>
                Description</td>
<td>
                Supported Accept Types</td>
</tr>
<tr>
<td>
                Retrieves the details for the specified trip. By default, the OAuth consumer should be the owner of the trip. This endpoint can also be used to get details for trips that the OAuth consumer does not own. This is most often done when a Travel Management Company needs to get trip details on behalf of a user. The TMC must be registered with Concur and have a Concur account that has one of the following user roles: Web Services Administrator for Professional, or Can Administer for Standard.
                The returned elements will vary based on the following conditions:

* 
                        Some elements, such as **AirlineTickets** or **RailPayments**, will only appear for bookings of the appropriate type.
* 
                        Amount values, such as **Rate** or **Tax**, will only appear if the requestor is the source of the booking. All other suppliers will not receive the amount elements associated with the bookings.
* 
                        Some elements, such as **SabreDKNumber**, will only appear if the booking was created by the relevant GDS.
* 
                        Some elements are vendor-specific and will only appear in responses for the associated vendor.

                This documentation contains the full set of possible elements that can be returned. No itinerary can contain all of the possible elements, so the response will always be a subset of the possible returned values. For full response details, view the <a href="https://developer.concur.com/sites/default/files/ItinServices_Public_0.xsd" target="_blank">Public Itinerary XSD</a>. Internet Explorer users should right click the link and choose Save Target As... to view the XSD.
                The response can be formatted for TripIt, using the **systemformat** query string. Refer to the <a href="https://www.tripit.com/developer">TripIt API documentation</a> for the format definitions.</td>
<td>

* 
                        application/xml

</td>
</tr>
<tr class="GrayTableHead">
<td colspan="2">
                Query Parameters - Required</td>
</tr>
<tr>
<td colspan="2">

* 
                        **{<em>tripId</em>}**<br />
                        The identifier for the desired trip.

                Example:<br />
                **To get trip details for the OAuth consumer:**<br />
                https://www.concursolutions.com/api/travel/trip/v1.1/{<em>tripId</em>}
                **URI Source**: This URI is returned in the **id** element by the <a href="#listofitins">Get List of Itineraries</a> function.

</td>
</tr>
<tr class="GrayTableHead">
<td colspan="2">
                Query Parameters - Optional</td>
</tr>
<tr>
<td colspan="2">

* 
                        **userid_type=login&amp;userid_value=<em>{loginID}</em>**<br />
                        The loginID is the user's Concur login ID. The userid_value of ALL can be sent to get trip summaries for all users at the company. The userid_type and userid_value parameters can only be used if the OAuth consumer has one of the user roles listed above.
* 
                        **systemFormat=<em>{format}</em>**<br />
                        The **systemFormat** query parameter can be used to specify that the response is formatted for a different system. The supported value is **Tripit**. Refer to the <a href="https://www.tripit.com/developer">TripIt API documentation</a> for more details.

Examples:<br />
                    **To get trip details for a user other than the OAuth consumer:**<br />
                    https://www.concursolutions.com/api/travel/trip/v1.1/{<em>tripId</em>}?userid_type=login_id&amp;userid_value={<em>loginID</em>}
**To get trip details for the OAuth consumer and receive a response in the TripIt format:**<br />
                    https://www.concursolutions.com/api/travel/trip/v1.1/{<em>tripId</em>}&amp;systemFormat=Tripit
</td>
</tr>
<tr class="GrayTableHead">
<td>
                Request Headers - Required</td>
<td>
                Request Headers - Optional</td>
</tr>
<tr>
<td width="50%">
                Authorization header with OAuth token for valid Concur user. The OAuth consumer must have one of the following user roles in Concur: Company Administrator or Web Services Administrator for Professional, or Can Administer for Standard.</td>
<td valign="top" width="50%">
                None</td>
</tr>
</tbody>
</table>
####
    XML Example Request
<pre class="overflow_box">
GET /api/travel/trip/v1.1/CNQR1234567890 HTTPS 1.1
Host: <a href="http://www.concursolutions.com" title="www.concursolutions.com">www.concursolutions.com</a>
Authorization: OAuth {access token} 
...
</pre>## 
    Get Itinerary Details Response
<table border="1" bordercolor="#dbdbdb" cellpadding="3" cellspacing="0" width="100%">
<tbody>
<tr>
<td>
                HTTP Responses</td>
<td>
                Supported Content Types</td>
</tr>
<tr>
<td>
<a href="https://developer.concur.com/node/205">HTTP Status Codes</a>
</td>
<td>

* 
                        application/xml

</td>
</tr>
<tr class="GrayTableHead">
<td colspan="2">
                Content Body</td>
</tr>
<tr>
<td colspan="2">
                This request will return an **Itinerary** parent element with a subset of the following child elements:
<table border="1" bordercolor="#dbdbdb" cellpadding="3" cellspacing="0" width="100%">
<tbody>
<tr class="GrayTableHead">
<td valign="top" width="20%">
                                Element</td>
<td valign="top" width="70%">
                                Description</td>
</tr>
<tr>
<td valign="top">
                                BookedByFirstName</td>
<td valign="top">
                                The first name of the person who booked the trip.</td>
</tr>
<tr>
<td valign="top">
                                BookedByLastName</td>
<td valign="top">
                                The last name of the person who booked the trip.</td>
</tr>
<tr>
<td valign="top">
                                BookedVia</td>
<td valign="top">
                                The booking method for the trip.</td>
</tr>
<tr>
<td valign="top">
                                CancelComments</td>
<td valign="top">
                                The comments provided if the itinerary is cancelled. Maximum length: 256 characters.</td>
</tr>
<tr>
<td valign="top">
                                Comments</td>
<td valign="top">
                                Optional comments. Maximum length: 512 characters.</td>
</tr>
<tr>
<td valign="top">
                                DateBookedLocal</td>
<td valign="top">
                                The date the trip was booked, in the local time of the booking location. Format: YYYY-MM-DDThh:mm:ss</td>
</tr>
<tr>
<td valign="top">
                                DateCreatedUtc</td>
<td valign="top">
                                The date that this trip was created, in UTC. Format: YYYY-MM-DDThh:mm:ss</td>
</tr>
<tr>
<td valign="top">
                                DateModifiedUtc</td>
<td valign="top">
                                The date that this trip was last modified, in UTC. Format: YYYY-MM-DDThh:mm:ss</td>
</tr>
<tr>
<td valign="top">
                                Description</td>
<td valign="top">
                                The trip description. Maximum length: 512 characters.</td>
</tr>
<tr>
<td valign="top">
                                EndDateLocal</td>
<td valign="top">
                                The end date of the trip in the ending location&rsquo;s timezone. Format: YYYY-MM-DDThh:mm:ss</td>
</tr>
<tr>
<td valign="top">
                                EndDateUtc</td>
<td valign="top">
                                The end date of the trip, in UTC. Format: YYYY-MM-DDThh:mm:ss</td>
</tr>
<tr>
<td valign="top">
                                IsPersonal</td>
<td valign="top">
                                Whether the trip is a Business or Leisure trip. Format: true/false.</td>
</tr>
<tr>
<td valign="top">
                                ProjectName</td>
<td valign="top">
                                The associated project name for the trip. Maximum length: 255 characters.</td>
</tr>
<tr>
<td valign="top">
                                StartDateLocal</td>
<td valign="top">
                                The start date of the trip in the starting location&rsquo;s timezone. Format: YYYY-MM-DDThh:mm:ss</td>
</tr>
<tr>
<td valign="top">
                                StartDateUtc</td>
<td valign="top">
                                The start date of the trip, in UTC. Format: YYYY-MM-DDThh:mm:ss</td>
</tr>
<tr>
<td valign="top">
                                TripName</td>
<td valign="top">
                                Name of the trip. Maximum length: 255 characters.</td>
</tr>
<tr>
<td valign="top">
                                Bookings</td>
<td valign="top">
                                This parent element will contain a **Booking** child element for each booking associated with this itinerary. Refer to the <a href="#booking">Booking Child Elements</a> table.</td>
</tr>
<tr>
<td valign="top">
                                RuleViolations</td>
<td valign="top">
                                The list of rule violations associated with the itinerary. This parent element contains a **RuleViolation** child element for each associated rule violation. Refer to the <a href="https://developer.concur.com/sites/default/files/ItinServices_Public_0.xsd" target="_blank">Public Itinerary XSD</a> for more information.</td>
</tr>
<tr>
<td valign="top">
                                Status</td>
<td valign="top">
                                The status of the itinerary. One of the following:
                                0- Confirmed<br />
                                1- Ticketed by agent<br />
                                2- Canceled</td>
</tr>
</tbody>
</table>

<table border="1" bordercolor="#dbdbdb" cellpadding="3" cellspacing="0" width="100%">
<tbody>
<tr class="GrayTableHead">
<td colspan="2" valign="top">
                                <a id="booking" name="booking"></a>Booking Child Elements</td>
</tr>
<tr class="GrayTableHead">
<td valign="top" width="30%">
                                Element</td>
<td valign="top" width="70%">
                                Description</td>
</tr>
<tr>
<td valign="top">
                                BookingSource</td>
<td valign="top">
                                The name of the booking source for this booking. A booking source is a textual name the system uses to track where a booking took place.</td>
</tr>
<tr>
<td valign="top">
                                DateBookedLocal</td>
<td valign="top">
                                The date the booking was created, in the booking location's local time. Format: YYYY-MM-DDThh:mm:ss</td>
</tr>
<tr>
<td valign="top">
                                DateCreatedUtc</td>
<td valign="top">
                                The date the booking was created, in UTC. Format: YYYY-MM-DDThh:mm:ss</td>
</tr>
<tr>
<td valign="top">
                                DateModifiedUtc</td>
<td valign="top">
                                The date the booking was last modified, in UTC. Format: YYYY-MM-DDThh:mm:ss</td>
</tr>
<tr>
<td valign="top">
                                FormOfPaymentName</td>
<td valign="top">
                                The name of the form of payment for the booking.</td>
</tr>
<tr>
<td valign="top">
                                FormOfPaymentType</td>
<td valign="top">
                                The type of the form of payment.</td>
</tr>
<tr>
<td valign="top">
                                PassengerCount</td>
<td valign="top">
                                The number of passengers included in the booking.</td>
</tr>
<tr>
<td valign="top">
                                RecordLocator</td>
<td valign="top">
                                Record locator for this booking. This is often six alphameric characters but can have other formats depending on the booking source.</td>
</tr>
<tr>
<td valign="top">
                                RetrievedDateUtc</td>
<td valign="top">
                                The date the booking was last accessed, in UTC. Format: YYYY-MM-DDThh:mm:ss</td>
</tr>
<tr>
<td valign="top">
                                TicketMailingAddress</td>
<td valign="top">
                                The mailing address for the booked ticket, if any.</td>
</tr>
<tr>
<td valign="top">
                                TicketPickupLocation</td>
<td valign="top">
                                The pickup location for the booked ticket, if any.</td>
</tr>
<tr>
<td valign="top">
                                TicketPickupNumber</td>
<td valign="top">
                                The confirmation number to pick up the booked ticket, if any.</td>
</tr>
<tr>
<td valign="top">
                                AirfareQuotes</td>
<td valign="top">
                                List of stored airfare quotes. This parent element has a **Quote** child element for each airfare quote. The **Quote** parent element contains the following child elements:
<table border="1" bordercolor="#dbdbdb" cellpadding="3" cellspacing="0" width="100%">
<tbody>
<tr>
<td valign="top">
                                                BaseFare</td>
<td valign="top">
                                                The base fare of the booking quote.</td>
</tr>
<tr>
<td valign="top">
                                                BaseFareCurrency</td>
<td valign="top">
                                                The <a href="http://en.wikipedia.org/wiki/ISO_4217">3-letter ISO 4217 currency code</a> for the booking quote.</td>
</tr>
<tr>
<td valign="top">
                                                BaseFareNuc</td>
<td valign="top">
                                                The base fare in <a href="http://en.wikipedia.org/wiki/Neutral_unit_of_construction_(airlines)">NUC</a>.</td>
</tr>
<tr>
<td valign="top">
                                                BaseFareNucCurrency</td>
<td valign="top">
                                                The <a href="http://en.wikipedia.org/wiki/ISO_4217">3-letter ISO 4217 currency code</a> for the base fare in NUC.</td>
</tr>
<tr>
<td valign="top">
                                                DateCreatedUtc</td>
<td valign="top">
                                                The date the quote was created, in UTC. Format: YYYY-MM-DDThh:mm:ss</td>
</tr>
<tr>
<td valign="top">
                                                DateModifiedUtc</td>
<td valign="top">
                                                The date the quote was last modified, in UTC. Format: YYYY-MM-DDThh:mm:ss</td>
</tr>
<tr>
<td valign="top">
                                                Endorsements</td>
<td valign="top">
                                                Notes from the airline if it endorses the ticket as acceptable on a different airline.</td>
</tr>
<tr>
<td valign="top">
                                                IssueByDate</td>
<td valign="top">
                                                The date the quote must be issued by. Format: YYYY-MM-DDThh:mm:ss</td>
</tr>
<tr>
<td valign="top">
                                                TotalFare</td>
<td valign="top">
                                                The total price of the booking.</td>
</tr>
<tr>
<td valign="top">
                                                TotalFareCurrency</td>
<td valign="top">
                                                The <a href="http://en.wikipedia.org/wiki/ISO_4217">3-letter ISO 4217 currency code</a> for the total fare.</td>
</tr>
<tr>
<td valign="top">
                                                AirlineCharges</td>
<td valign="top">
                                                The charges applied by the airline. This parent element contains a **Fixed** child element for each fixed charge from the airline. Refer to the <a href="https://developer.concur.com/node/555#charges" target="_blank">Charges Child Element</a> table for the **Fixed** child elements.</td>
</tr>
<tr>
<td valign="top">
                                                Taxes</td>
<td valign="top">
                                                The taxed applied to this airline ticket. This parent element contains a **Tax** child element for each tax amount for the ticket. Refer to the <a href="#tax">Tax Child Element</a> table.</td>
</tr>
</tbody>
</table>
</td>
</tr>
<tr>
<td valign="top">
                                AirlineTickets</td>
<td valign="top">
                                List of Airline Tickets. This parent element has the following child elements:
<table border="1" bordercolor="#dbdbdb" cellpadding="3" cellspacing="0" width="100%">
<tbody>
<tr>
<td valign="top">
                                                ManualAirlineTicket</td>
<td valign="top">
                                                The manual airline ticket for the booking. Refer to the <a href="https://developer.concur.com/sites/default/files/ItinServices_Public_0.xsd" target="_blank">Public Itinerary XSD</a> for more information.</td>
</tr>
<tr>
<td valign="top">
                                                AirlineTicket</td>
<td valign="top">
                                                The airline ticket for the booking. Refer to the <a href="https://developer.concur.com/sites/default/files/ItinServices_Public_0.xsd" target="_blank">Public Itinerary XSD</a> for more information.</td>
</tr>
<tr>
<td valign="top">
                                                AirlineAdjustment</td>
<td valign="top">
                                                Any adjustment made to the booking. Refer to the <a href="https://developer.concur.com/sites/default/files/ItinServices_Public_0.xsd" target="_blank">Public Itinerary XSD</a> for more information.</td>
</tr>
</tbody>
</table>
</td>
</tr>
<tr>
<td valign="top">
                                Charges</td>
<td valign="top">
                                The charges for the booking. Refer to the <a href="https://developer.concur.com/sites/default/files/ItinServices_Public_0.xsd" target="_blank">Public Itinerary XSD</a> for more information.</td>
</tr>
<tr>
<td valign="top">
                                MiscChargeOrders</td>
<td valign="top">
                                This parent element has a **MiscellaneousChargeOrder** child element for each included miscellaneous charge. The **MiscellaneousChargeOrder** parent element has the following child elements:
<table border="1" bordercolor="#dbdbdb" cellpadding="3" cellspacing="0" width="100%">
<tbody>
<tr>
<td valign="top">
                                                DateCreatedUtc</td>
<td valign="top">
                                                The date the charge order was created, in UTC. Format: YYYY-MM-DDThh:mm:ss</td>
</tr>
<tr>
<td valign="top">
                                                DateModifiedUtc</td>
<td valign="top">
                                                The date the charge order was last modified, in UTC. Format: YYYY-MM-DDThh:mm:ss</td>
</tr>
<tr>
<td valign="top">
                                                IssueDate</td>
<td valign="top">
                                                The date the charge order was issued. Format: YYYY-MM-DDThh:mm:ss</td>
</tr>
<tr>
<td valign="top">
                                                PlatingCarrierNumericCode</td>
<td valign="top">
                                                Part of the ticket number that indicates the airline code. This is a three digit number. For example: 001=American, 005=Continental, 006=Delta, 012=Northwest</td>
</tr>
<tr>
<td valign="top">
                                                PlatingControlNumber</td>
<td valign="top">
                                                Part of the ticket number that indicates the ticket control number. Format: Ten digit number.</td>
</tr>
<tr>
<td valign="top">
                                                TotalAmount</td>
<td valign="top">
                                                The total amount of charge orders for the ticket.</td>
</tr>
<tr>
<td valign="top">
                                                TotalAmountCurrency</td>
<td valign="top">
                                                The <a href="http://en.wikipedia.org/wiki/ISO_4217">3-letter ISO 4217 currency code</a> for the total charge order amount.</td>
</tr>
</tbody>
</table>
</td>
</tr>
<tr>
<td valign="top">
                                Passengers</td>
<td valign="top">
                                This parent element has a **Passenger** child element for each included passenger. Refer to the <a href="#passenger">Passenger Child Element</a> table.</td>
</tr>
<tr>
<td valign="top">
                                PassPrograms</td>
<td valign="top">
                                This parent element has a **PassProgram** child element for each pass program associated with the booking. The **PassProgram** parent element has the following child elements:
<table border="1" bordercolor="#dbdbdb" cellpadding="3" cellspacing="0" width="100%">
<tbody>
<tr>
<td valign="top">
                                                Amount</td>
<td valign="top">
                                                The program amount.</td>
</tr>
<tr>
<td valign="top">
                                                Name</td>
<td valign="top">
                                                The program name.</td>
</tr>
<tr>
<td valign="top">
                                                Type</td>
<td valign="top">
                                                The program type.</td>
</tr>
<tr>
<td valign="top">
                                                UserFirstName</td>
<td valign="top">
                                                The first name of the passenger.</td>
</tr>
<tr>
<td valign="top">
                                                UserLastName</td>
<td valign="top">
                                                The last name of the passenger.</td>
</tr>
</tbody>
</table>
</td>
</tr>
<tr>
<td valign="top">
                                PhoneNumbers</td>
<td valign="top">
                                This parent element has a **PhoneNumberData** child element for each phone number associated with the booking. The **PhoneNumberData** parent element has the following child elements:
<table border="1" bordercolor="#dbdbdb" cellpadding="3" cellspacing="0" width="100%">
<tbody>
<tr>
<td valign="top">
                                                PassengerRPH</td>
<td valign="top">
                                                Indicates the passenger to whom this phone number belongs.</td>
</tr>
<tr>
<td valign="top">
                                                PhoneNumber</td>
<td valign="top">
                                                The passenger's phone number.</td>
</tr>
<tr>
<td valign="top">
                                                Type</td>
<td valign="top">
                                                The type of phone number.</td>
</tr>
<tr>
<td valign="top">
                                                Description</td>
<td valign="top">
                                                The description for the phone number.</td>
</tr>
</tbody>
</table>
</td>
</tr>
<tr>
<td valign="top">
                                RailPayments</td>
<td valign="top">
                                This parent element has the following child elements:
<table border="1" bordercolor="#dbdbdb" cellpadding="3" cellspacing="0" width="100%">
<tbody>
<tr>
<td valign="top">
                                                RailPayment</td>
<td valign="top">
                                                The payment information for a rail booking. Refer to the <a href="https://developer.concur.com/sites/default/files/ItinServices_Public_0.xsd" target="_blank">Public Itinerary XSD</a> for more information.</td>
</tr>
<tr>
<td valign="top">
                                                RailAdjustment</td>
<td valign="top">
                                                The amount adjusted for a rail booking. Refer to the <a href="https://developer.concur.com/sites/default/files/ItinServices_Public_0.xsd" target="_blank">Public Itinerary XSD</a> for more information.</td>
</tr>
</tbody>
</table>
</td>
</tr>
<tr>
<td valign="top">
                                Segments</td>
<td valign="top">
                                This parent element will contain at least one of the following child elements: **Air**, **Car**, **Hotel**, **Dining**, **Ride**, **Rail**, **Parking**. Refer to <a href="/node/555#bookingelements">Booking Object Elements</a> for more information about the Segment child elements.</td>
</tr>
<tr>
<td valign="top">
                                Delivery</td>
<td valign="top">
                                The method used to deliver this booking. This parent element has the following child elements:
<table border="1" bordercolor="#dbdbdb" cellpadding="3" cellspacing="0" width="100%">
<tbody>
<tr>
<td valign="top">
                                                LocationAdditionalDetails</td>
<td valign="top">
                                                Additional information about the delivery location.</td>
</tr>
<tr>
<td valign="top">
                                                AddressLine1</td>
<td valign="top">
                                                The delivery address.</td>
</tr>
<tr>
<td valign="top">
                                                AddressLine2</td>
<td valign="top">
                                                The delivery address.</td>
</tr>
<tr>
<td valign="top">
                                                City</td>
<td valign="top">
                                                The delivery address.</td>
</tr>
<tr>
<td valign="top">
                                                Country</td>
<td valign="top">
                                                The delivery address.</td>
</tr>
<tr>
<td valign="top">
                                                LocationDesc</td>
<td valign="top">
                                                Description of the delivery location.</td>
</tr>
<tr>
<td valign="top">
                                                Email</td>
<td valign="top">
                                                The delivery email contact.</td>
</tr>
<tr>
<td valign="top">
                                                Latitude</td>
<td valign="top">
                                                The delivery address.</td>
</tr>
<tr>
<td valign="top">
                                                Longitude</td>
<td valign="top">
                                                The delivery address.</td>
</tr>
<tr>
<td valign="top">
                                                LocationName</td>
<td valign="top">
                                                The name of the delivery location.</td>
</tr>
<tr>
<td valign="top">
                                                PhoneNumber</td>
<td valign="top">
                                                The phone number of the delivery contact.</td>
</tr>
<tr>
<td valign="top">
                                                ReferenceNumber</td>
<td valign="top">
                                                The reference number for the delivery.</td>
</tr>
<tr>
<td valign="top">
                                                State</td>
<td valign="top">
                                                The delivery address.</td>
</tr>
<tr>
<td valign="top">
                                                Type</td>
<td valign="top">
                                                The type of delivery address.</td>
</tr>
<tr>
<td valign="top">
                                                Zip</td>
<td valign="top">
                                                The delivery address.</td>
</tr>
</tbody>
</table>
</td>
</tr>
<tr>
<td valign="top">
                                WaitListSegments</td>
<td valign="top">
                                Information will appear in this element if the segment is on a waiting list.</td>
</tr>
<tr>
<td valign="top">
                                Warnings</td>
<td valign="top">
                                The warnings associated with the booking.</td>
</tr>
<tr>
<td valign="top">
                                WebAddresses</td>
<td valign="top">
                                List of web addresses. This parent element includes a **WebAddressData** child element for each associated web address. The **WebAddressData** element has the following child elements:
<table border="1" bordercolor="#dbdbdb" cellpadding="3" cellspacing="0" width="100%">
<tbody>
<tr>
<td valign="top">
                                                PassengerRPH</td>
<td valign="top">
                                                Indicates the passenger to whom this web address belongs.</td>
</tr>
<tr>
<td valign="top">
                                                WebAddress</td>
<td valign="top">
                                                Web address. Format: email address or URL. Maximum length: 250 characters.</td>
</tr>
<tr>
<td valign="top">
                                                Format</td>
<td valign="top">
                                                Format of the web address. Format: E=Email, U=URL, I=IM</td>
</tr>
<tr>
<td valign="top">
                                                Type</td>
<td valign="top">
                                                Type code for web address. Format: TKT, RES, BUS</td>
</tr>
<tr>
<td valign="top">
                                                Description</td>
<td valign="top">
                                                Free text describing the web address. Maximum length: 50 characters.</td>
</tr>
</tbody>
</table>
</td>
</tr>
</tbody>
</table>

<table border="1" bordercolor="#dbdbdb" cellpadding="3" cellspacing="0" width="100%">
<tbody>
<tr class="GrayTableHead">
<td colspan="2" valign="top">
                                <a id="passenger" name="passenger"></a> Passenger Child Elements</td>
</tr>
<tr class="GrayTableHead">
<td valign="top" width="30%">
                                Element</td>
<td valign="top" width="70%">
                                Description</td>
</tr>
<tr>
<td valign="top">
                                FirstNameNumber</td>
<td valign="top">
                                The number of characters in the passenger's first name.</td>
</tr>
<tr>
<td valign="top">
                                LastNameNumber</td>
<td valign="top">
                                The number of characters in the passenger's last name.</td>
</tr>
<tr>
<td valign="top">
                                NameFirst</td>
<td valign="top">
                                The passenger's first name.</td>
</tr>
<tr>
<td valign="top">
                                NameLast</td>
<td valign="top">
                                The passenger's last name.</td>
</tr>
<tr>
<td valign="top">
                                NameMiddle</td>
<td valign="top">
                                The passenger's middle name.</td>
</tr>
<tr>
<td valign="top">
                                NamePrefix</td>
<td valign="top">
                                The passenger's name prefix.</td>
</tr>
<tr>
<td valign="top">
                                NameRemark</td>
<td valign="top">
                                Additional details about the passenger's name.</td>
</tr>
<tr>
<td valign="top">
                                NameSuffix</td>
<td valign="top">
                                The passenger's name suffix.</td>
</tr>
<tr>
<td valign="top">
                                NameTitle</td>
<td valign="top">
                                The passenger's name title.</td>
</tr>
<tr>
<td valign="top">
                                TextName</td>
<td valign="top">
                                The user's full name.</td>
</tr>
<tr>
<td valign="top">
                                FrequentTravelerProgram</td>
<td valign="top">
                                The passenger's loyalty program identifier. This parent element contains the following child elements:
<table border="1" bordercolor="#dbdbdb" cellpadding="3" cellspacing="0" width="100%">
<tbody>
<tr>
<td valign="top">
                                                FrequentFlyer</td>
<td valign="top">
                                                The passenger's frequent flyer program details. This parent element has the following child elements:
<table border="1" bordercolor="#dbdbdb" cellpadding="3" cellspacing="0" width="100%">
<tbody>
<tr>
<td valign="top">
                                                                AirlineVendor</td>
<td valign="top">
                                                                The vendor of the frequent flyer program.</td>
</tr>
<tr>
<td valign="top">
                                                                Description</td>
<td valign="top">
                                                                The program description.</td>
</tr>
<tr>
<td valign="top">
                                                                DiscountProgramExpirationDate</td>
<td valign="top">
                                                                The date the discount program enrollment expires. Format: YYYY-MM-DDThh:mm:ss</td>
</tr>
<tr>
<td valign="top">
                                                                DiscountProgramType</td>
<td valign="top">
                                                                The type of discount program.</td>
</tr>
<tr>
<td valign="top">
                                                                FrequentFlyerNumber</td>
<td valign="top">
                                                                The passenger's identifier for the program.</td>
</tr>
<tr>
<td valign="top">
                                                                ProgramVendor</td>
<td valign="top">
                                                                The program vendor.</td>
</tr>
<tr>
<td valign="top">
                                                                Status</td>
<td valign="top">
                                                                The passenger's program status.</td>
</tr>
<tr>
<td valign="top">
                                                                StatusExpirationDate</td>
<td valign="top">
                                                                The expiration date for the passenger's program status.</td>
</tr>
</tbody>
</table>
</td>
</tr>
<tr>
<td valign="top">
                                                RailProgram</td>
<td valign="top">
                                                The passenger's rail loyalty program details. This parent element has the following child elements:
<table border="1" bordercolor="#dbdbdb" cellpadding="3" cellspacing="0" width="100%">
<tbody>
<tr>
<td valign="top">
                                                                Description</td>
<td valign="top">
                                                                Description of the discount program.</td>
</tr>
<tr>
<td valign="top">
                                                                DiscountProgramExpirationDate</td>
<td valign="top">
                                                                The date the discount program enrollment expires. Format: YYYY-MM-DDThh:mm:ss</td>
</tr>
<tr>
<td valign="top">
                                                                DiscountProgramType</td>
<td valign="top">
                                                                The type of discount program.</td>
</tr>
<tr>
<td valign="top">
                                                                ProgramNumber</td>
<td valign="top">
                                                                The passenger's identifier for the program.</td>
</tr>
<tr>
<td valign="top">
                                                                ProgramVendor</td>
<td valign="top">
                                                                The program vendor.</td>
</tr>
<tr>
<td valign="top">
                                                                Status</td>
<td valign="top">
                                                                The passenger's program status.</td>
</tr>
<tr>
<td valign="top">
                                                                StatusExpirationDate</td>
<td valign="top">
                                                                The expiration date for the passenger's program status.</td>
</tr>
</tbody>
</table>
</td>
</tr>
</tbody>
</table>
</td>
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
HTTP 1.1 200 OK
Content-Type: application/xml
...
    
<span class="ST0"><?<span class="ST0">xml version=&quot;1.0&quot; encoding=&quot;utf-8&quot;?>
<Itinerary <span class="xml-attribute">xmlns=<span class="xml-value">&quot;<span class="xml-value">http://www.concursolutions.com/api/travel/trip/2010/06<span class="xml-value">&quot;>
    <id>https://www.concursolutions.com/api/travel/trip/v1.1/CNQR1234567890</id>
    <ItinLocator>CNQR1234567890</ItinLocator>
    <ClientLocator>KK-CNQ-1M1P6-5HJ</ClientLocator>
    <ItinSourceName>ConcurTravel</ItinSourceName>
    <TripName>Trip from Dallas to Seattle</TripName>
    <Comments />
    <StartDateLocal>2013-12-21T07:25:00</StartDateLocal>
    <EndDateLocal>2013-12-24T23:59:00</EndDateLocal>
    <DateModifiedUtc>2012-07-24T19:15:52</DateModifiedUtc>
    <BookedVia>EveryGDS</BookedVia>
    <BookedByFirstName>Chris</BookedByFirstName>
    <BookedByLastName>Miller</BookedByLastName>
    <DateBookedLocal>2012-07-24T19:15:52</DateBookedLocal>
    <Bookings>
        <Booking>
            <Segments>
                <Car>
                    <Vendor>CQ</Vendor>
                    <Status>HK</Status>
                    <StartDateLocal>2013-12-21T12:00:00</StartDateLocal>
                    <EndDateLocal>2013-12-24T12:00:00</EndDateLocal>
                    <ConfirmationNumber>F1672664579</ConfirmationNumber>
                    <DateModifiedUtc>2012-07-24T19:15:52</DateModifiedUtc>
                    <StartCityCode>SEA</StartCityCode>
                    <EndCityCode>SEA</EndCityCode>
                    <StartLocation>SEA</StartLocation>
                    <EndLocation>SEA</EndLocation>
                    <Class>E</Class>
                    <Body>C</Body>
                    <Transmission>M</Transmission>
                    <AirCondition>R</AirCondition>
                    <NumCars>1</NumCars>
                    <DiscountCode>346660</DiscountCode>
                    <DailyRate>44.0000</DailyRate>
                    <TotalRate>44.0000</TotalRate>
                    <RateType>D</RateType>
                    <Currency>USD</Currency>
                    <Charges>
                        <Fixed>
                            <Description>Dropoff Fee</Description>
                            <Currency>USD</Currency>
                            <Amount>0.0000</Amount>
                            <IsPrimary>false</IsPrimary>
                            <SemanticsCode>DROPOFFFEE</SemanticsCode>
                            <SemanticsVendorType>C</SemanticsVendorType>
                        </Fixed>
                        <RateWithAllowance>
                            <Currency>USD</Currency>
                            <Amount>44.0000</Amount>
                            <StartDateLocal>2013-12-21T12:00:00</StartDateLocal>
                            <IsPrimary>true</IsPrimary>
                            <SemanticsCode>DAYS</SemanticsCode>
                            <SemanticsVendorType>C</SemanticsVendorType>
                            <PerUnit>DAY</PerUnit>
                            <NumUnits>1.0000</NumUnits>
                            <AllowanceNumUnits>250.0000</AllowanceNumUnits>
                            <AllowanceAmount>0.2400</AllowanceAmount>
                            <AllowanceIsUnlimited>false</AllowanceIsUnlimited>
                        </RateWithAllowance>
                    </Charges>
                </Car>
            </Segments>
            <Passengers>
                <Passenger>
                    <NameFirst>Chris</NameFirst>
                    <NameLast>Miller</NameLast>
                </Passenger>
            </Passengers>
            <RecordLocator>C123456789</RecordLocator>
            <BookingSource>ConcurCars</BookingSource>
            <DateModifiedUtc>2012-07-24T19:15:52</DateModifiedUtc>
            <DateBookedLocal>2013-11-10T13:01:00</DateBookedLocal>
            <ItinSourceName>TravelSupplier</ItinSourceName>
            <PassengerCount>1</PassengerCount>
        </Booking>
        <Booking>
            <Segments>
                <Hotel>
                    <Vendor>CQ</Vendor>
                    <Status>GK</Status>
                    <StartDateLocal>2013-12-21T23:59:00</StartDateLocal>
                    <EndDateLocal>2013-12-24T23:59:00</EndDateLocal>
                    <ConfirmationNumber>3364214265</ConfirmationNumber>
                    <DateModifiedUtc>2012-07-24T19:15:52</DateModifiedUtc>
                    <RateCode>LV4</RateCode>
                    <Name>CONCUR HOTEL</Name>
                    <HotelPropertyId>CONQ</HotelPropertyId>
                    <CheckinTime>00:00</CheckinTime>
                    <CheckoutTime>00:00</CheckoutTime>
                    <NumPersons>1</NumPersons>
                    <NumRooms>1</NumRooms>
                    <CancellationPolicy>Cxl 1 day prior to Arrival</CancellationPolicy>
                    <DailyRate>240.3500</DailyRate>
                    <Currency>USD</Currency>
                    <RoomDescription>1 KING BED ACCESSIBLE ROOM - K1RRC</RoomDescription>
                    <Charges>
                        <Rate>
                            <Currency>USD</Currency>
                            <Amount>240.3500</Amount>
                            <StartDateLocal>2013-12-21T23:59:00</StartDateLocal>
                            <IsPrimary>false</IsPrimary>
                            <SemanticsCode>ROOMRATE</SemanticsCode>
                            <SemanticsVendorType>H</SemanticsVendorType>
                            <PerUnit>DAY</PerUnit>
                            <NumUnits>3.0000</NumUnits>
                        </Rate>
                    </Charges>
                </Hotel>
            </Segments>
            <Passengers>
                <Passenger>
                    <NameFirst>Chris</NameFirst>
                    <NameLast>Miller</NameLast>
                </Passenger>
            </Passengers>
            <RecordLocator>0987654321</RecordLocator>
            <BookingSource>ConcurHotel</BookingSource>
            <DateModifiedUtc>2012-07-24T19:15:52</DateModifiedUtc>
            <DateBookedLocal>2013-11-10T13:01:00</DateBookedLocal>
            <OriginalItinLocator>33491211</OriginalItinLocator>
            <ItinSourceName>ConcurTravel</ItinSourceName>
            <PassengerCount>1</PassengerCount>
        </Booking>
    </Bookings>
</Itinerary>
</pre>####
    XML Response in TripIt Format
<pre class="overflow_box">
<span class="ST0"><?<span class="ST0">xml version=&quot;1.0&quot; encoding=&quot;utf-8&quot;?>
<Response>
    <Trip>
        <id>73014481752</id>
        <relative_url>/api/travel/trip/v1.1/73014481752</relative_url>
        <start_date>2013-08-21</start_date>
        <end_date>2013-08-24</end_date>
        <display_name>Strategy Team meeting</display_name>
        <is_private>true</is_private>
    </Trip>
    <AirObject>
        <booking_site_conf_num>RL10001005</booking_site_conf_num>
        <booking_site_name>Concur Travel</booking_site_name>
        <booking_site_phone></booking_site_phone>
        <booking_site_url>https://www.concursolutions.com</booking_site_url>
        <record_locator>4294993825</record_locator>
        <supplier_conf_num>CN10001005</supplier_conf_num>
        <supplier_contact></supplier_contact>
        <supplier_email_address></supplier_email_address>
        <supplier_name></supplier_name>
        <supplier_phone></supplier_phone>
        <supplier_url></supplier_url>
        <is_purchased>1</is_purchased>
        <notes></notes>
        <restrictions></restrictions>
        <total_cost></total_cost>
        <Segment>
            <StartDateTime>
                <date>2013-08-21</date>
                <time>07:45:00</time>
            </StartDateTime>
            <EndDateTime>
                <date>2013-08-21</date>
                <time>13:03:00</time>
            </EndDateTime>
            <start_airport_code>PHX</start_airport_code>
            <start_gate>A11</start_gate>
            <start_terminal>4</start_terminal>
            <end_airport_code>ORD</end_airport_code>
            <end_gate>F8</end_gate>
            <end_terminal>2</end_terminal>
            <marketing_airline>US</marketing_airline>
            <marketing_flight_number>1</marketing_flight_number>
            <aircraft>320</aircraft>
            <duration></duration>
            <distance>1433</distance>
            <notes></notes>
            <seats></seats>
            <service_class>Economy</service_class>
            <stops>Nonstop</stops>
        </Segment>
        <Segment>
            <StartDateTime>
                <date>2013-08-24</date>
                <time>13:55:00</time>
            </StartDateTime>
            <EndDateTime>
                <date>2013-08-24</date>
                <time>16:58:00</time>
            </EndDateTime>
            <start_airport_code>ORD</start_airport_code>
            <start_gate></start_gate>
            <start_terminal></start_terminal>
            <end_airport_code>PHX</end_airport_code>
            <end_gate></end_gate>
            <end_terminal></end_terminal>
            <marketing_airline>US</marketing_airline>
            <marketing_flight_number>1728</marketing_flight_number>
            <aircraft>A320</aircraft>
            <duration></duration>
            <distance></distance>
            <notes></notes>
            <seats></seats>
            <service_class>Economy</service_class>
            <stops> stops</stops>
        </Segment>
        <Traveler>
            <first_name>William</first_name>
            <middle_name></middle_name>
            <last_name>Never</last_name>
            <frequent_traveler_num></frequent_traveler_num>
            <frequent_traveler_supplier></frequent_traveler_supplier>
            <ticket_num></ticket_num>
        </Traveler>
    </AirObject>
</Response>  
</pre>
