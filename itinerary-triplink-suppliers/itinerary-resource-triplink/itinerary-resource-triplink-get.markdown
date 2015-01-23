
        <div id="main" class="container">
            <div>
                            </div>
            <div class="row">
                <div class="span12">
<div class="breadcrumbs"><a href="/">Home</a>Itinerary Resource (TripLink): GET </div>
                </div>
            </div>

            <div id="content-wrapper">
<!-- <div class="row"> -->
                <div id="content" class="span9">
            # Itinerary Resource (TripLink): GET 
                    <div class="section">
                    <div id="node-547" class="node clear-block">


    
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
.STRING_LITERAL {color: #ce7b00}</style>NOTE: If you are a TMC or third party developer, please review the alternate resource documentation <a href="https://developer.concur.com/node/514">here</a>.
This resource supports the following GET actions:

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
                Retrieves trip summaries for the traveler specified in the OAuth token.<br />
                The response for this function can be divided into pages for easier processing.</td>
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
                        The URL-encoded start date (in Coordinated Universal Time, aka UTC) for the trip. Format: YYYY/MM/DD. If no query parameters are provided, the start date is set to today's date - 30 days. The request will only return trips that are ongoing during the provided dates, either starting on the date, or starting before the date and ongoing during the provided date.
* 
                        **endDate****={<em>date</em>}**<br />
                        The URL-encoded UTC end date for the trip. Format: YYYY/MM/DD. If no query parameters are provided, the end date is set to today's date + 12 months. The request will only return trips that are ongoing during the provided dates, either ending on the date, or starting before the date and ongoing during the provided date.
* 
                        **createdAfterDate****={<em>date</em>}**<br />
                        The URL-encoded UTC date for when the trip was created. The query string will return trips created on or after this date. Used with the createdbeforedate for finding trips created during a date range. Format: YYYY/MM/DD.
* 
                        **createdBeforeDate****={<em>date</em>}**<br />
                        The URL-encoded UTC date for when the trip was created. The query string will return trips created on or before this date. Used with the createdafterdate for finding trips created during a date range. Format: YYYY/MM/DD.
* 
                        **lastModifiedDate****={<em>date</em>}**<br />
                        The last modified UTC date of the trips and any their associated bookings. This query string will return only the trips where the trip or any of its associated bookings have a last modified date that is greater or equal to the supplied time. The provided date/time can be anytime between now and the first date of trip creation in the database. The format is either the date or the date and time combined.
* 
                        **bookingType={<em>type</em>}**<br />
                        The trip includes at least one booking of this type. Format: Air, Car, Dining, Hotel, Parking, Rail, or Ride
* 
                        **includeMetadata=true&amp;ItemsPerPage={<em>number</em>}&amp;Page={<em>number</em>}**<br />
                        The includeMetadata query parameter combined with the ItemsPerPage and Page query parameters will cause the response to be divided into pages. The response will be wrapped in a **ConcurResponse** parent element, with both the response details and the paging metadata included. The details of the response are <a href="#paging">here</a>. If the ItemsPerPage query parameter is not sent, the response will default to 200 if the Page query parameter is sent, or 1000 if the Page query parameter is not set. If the Page query parameter is not sent, the response will default to page 1.
* 
                        **includeVirtualTrip=1**<br />
                        Virtual trips are segments booked offline through the Travel Request product. Set the includeVirtualTrip query parameter to 1 to include those trips in the list.
* 
                        **includeCanceledTrips=<em>{true/false}</em>**<br />
                        The includeCanceledTrips query parameter will cause the request to also return trips with a status of Canceled. When this query parameter is set to **true**, the response will include the **TripStatus** element.

Example:
                    **To get the itinerary list:**<br />
                    https://www.concursolutions.com/api/travel/trip/v1.1/?startDate={<em>startdate</em>}&amp;endDate={<em>enddate</em>}<em>&amp;</em>createdAfterDate={<em>date</em>}&amp;createdBeforeDate={<em>date</em>}&amp;lastModifiedDate={<em>date</em>}&amp;bookingType={<em>type</em>}<br />
                    
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
GET /api/travel/trip/v1.1/?createdAfterDate=2012%2F02%2F01<span class="ST0">&amp;includeMetadata=true<span class="ST0">&amp;ItemsPerPage=2 HTTP 1.1
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
                                                    **TotalItems**: The total number of itineraries the query returned.If the request did not include the ItemsPerPage query parameter, this<br />
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
Retrieves the details for the specified trip, owned by the OAuth consumer.
If the TripLink - Open Booking supplier is the booking source for a booking in the Itinerary, they will receive the full details of that booking, as documented in the TMC version of the <a href="https://developer.concur.com/node/514#getitindetails">Get Itinerary Details</a> function. Any bookings that the TripLink - Open Booking supplier was not the source of will return the subset of booking fields documented on this page.
**Air** booking suppliers will only be able to view carrier, flight number, and flight departure time information for the bookings that they own.
The response can be formatted for TripIt, using the **systemformat** query string. Refer to the <a href="https://www.tripit.com/developer">TripIt API documentation</a> for the format definitions.
Refer to the <a href="https://developer.concur.com/node/550#faq">Itinerary FAQ</a> for additional information.
</td>
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
                        **systemFormat=<em>{format}</em>**<br />
                        The **systemFormat** query parameter can be used to specify that the response is formatted for a different system. The supported value is **Tripit**. Refer to the <a href="https://www.tripit.com/developer">TripIt API documentation</a> for more details.

Example:<br />
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
                Authorization header with OAuth token for valid Concur user.</td>
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
                                id</td>
<td valign="top">
                                The complete resource URI for this trip, including the trip id.</td>
</tr>
<tr>
<td valign="top">
                                IsPersonal</td>
<td valign="top">
                                Whether the trip is a Business or Leisure trip. Format: true/false.</td>
</tr>
<tr>
<td valign="top">
                                ItinLocator</td>
<td valign="top">
                                Obsolete, supported for backward compatibility.</td>
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
                                TripId</td>
<td valign="top">
                                The unique identifier for the trip.</td>
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
                                BookingOwner</td>
<td valign="top">
                                Indicates the tool that supplied the booking to Concur Travel. One of these:
ConcurTravel<br />
                                    OpenBookingEmail<br />
                                    AmadeusETravel<br />
                                    ConcurConnectAPI<br />
                                    OpenBookingSupplier<br />
                                    TripIt
</td>
</tr>
<tr>
<td valign="top">
                                BookingSource</td>
<td valign="top">
                                The name of the booking source for this booking. A booking source is a textual name the system uses to track where a booking took place. This could be a GDS, OTA, Vendor Code for Supplier website or Supplier Direct Connect API.</td>
</tr>
<tr>
<td valign="top">
                                Source</td>
<td valign="top">
                                Obsolete, supported for backward compatibility.</td>
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
                                RecordLocator</td>
<td valign="top">
                                Record locator for this booking. This is often six alphameric characters but can have other formats depending on the booking source.</td>
</tr>
<tr>
<td valign="top">
                                Passengers</td>
<td valign="top">
                                This parent element has a **Passenger** child element for each included passenger. Refer to the <a href="#passenger">Passenger Child Element</a> table.</td>
</tr>
<tr>
<td valign="top">
                                Segments</td>
<td valign="top">
                                This parent element will contain at least one of the following child elements: **Air**, **Car**, **Hotel**, **Dining**, **Ride**, **Rail**, **Parking**. Refer to <a href="/node/546#bookingelements">Booking Object Elements</a> for more information about the Segment child elements.</td>
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
                                The passenger's loyalty program information.</td>
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
    <TripName>Trip from Dallas to Seattle</TripName>
    <TripId>CNQR1234567890</TripId>
    <CancelComments />
    <Comments />
    <StartDateLocal>2013-12-21T07:25:00</StartDateLocal>
    <StartDateUtc>2013-12-21T07:25:00</StartDateUtc>
    <EndDateLocal>2013-12-24T23:59:00</EndDateLocal>
    <EndDateUtc>2013-12-24T23:59:00</EndDateUtc>
    <DateModifiedUtc>2012-07-24T19:15:52</DateModifiedUtc>
    <BookedByFirstName>Chris</BookedByFirstName>
    <BookedByLastName>Miller</BookedByLastName>
    <DateBookedLocal>2012-07-24T19:15:52</DateBookedLocal>
    <DateCreatedUtc>2012-07-24T19:15:52</DateCreatedUtc>
    <DateModifiedUtc>2012-07-24T19:15:52</DateModifiedUtc>
    <Description />
    <IsPersonal>false</IsPersonal>
    <Bookings>
        <Booking>
            <Segments>
                <Car>
                    <StartDateLocal>2013-12-21T12:00:00</StartDateLocal>
                    <EndDateLocal>2013-12-24T12:00:00</EndDateLocal>
                    <StartCityCode>SEA</StartCityCode>
                    <EndCityCode>SEA</EndCityCode>
                </Car>
            </Segments>
            <Passengers>
                <Passenger>
                    <NameFirst>Chris</NameFirst>
                    <NameLast>Miller</NameLast>
                </Passenger>
            </Passengers>
            <RecordLocator>C123456789</RecordLocator>
            <BookingOwner>ConcurTravel</BookingOwner>
            <BookingSource>ConcurCars</BookingSource>
            <DateModifiedUtc>2012-07-24T19:15:52</DateModifiedUtc>
            <DateBookedLocal>2013-11-10T13:01:00</DateBookedLocal>
            <DateCreatedUtc>2013-11-10T13:01:00</DateCreatedUtc>
            <Source>OTA</Source>
        </Booking>
        <Booking>
            <Segments>
                <Hotel>
                    <Status>GK</Status>
                    <StartCityCode>SEA</StartCityCode>
                    <StartDateLocal>2013-12-21T23:59:00</StartDateLocal>
                    <EndDateLocal>2013-12-24T23:59:00</EndDateLocal>
                    <TimeZoneId>Pacific</TimeZoneId>
                    <DateModifiedUtc>2012-07-24T19:15:52</DateModifiedUtc>
                    <StartCity>Seattle</StartCity>
                    <StartCountry>US</StartCountry>
                </Hotel>
            </Segments>
            <Passengers>
                <Passenger>
                    <NameFirst>Chris</NameFirst>
                    <NameLast>Miller</NameLast>
                </Passenger>
            </Passengers>
            <RecordLocator>0987654321</RecordLocator>
            <BookingOwner>ConcurTravel</BookingOwner>
            <BookingSource>ConcurHotel</BookingSource>
            <DateModifiedUtc>2012-07-24T19:15:52</DateModifiedUtc>
            <DateBookedLocal>2013-11-10T13:01:00</DateBookedLocal>
            <DateCreatedUtc>2013-11-10T13:01:00</DateCreatedUtc>
            <Source>OTA</Source>
        </Booking>
    </Bookings>
</Itinerary>
</pre>
