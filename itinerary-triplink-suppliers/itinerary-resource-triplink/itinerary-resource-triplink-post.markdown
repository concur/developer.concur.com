
        <div id="main" class="container">
            <div>
                            </div>
            <div class="row">
                <div class="span12">
<div class="breadcrumbs"><a href="/">Home</a>Itinerary Resource (TripLink): POST </div>
                </div>
            </div>

            <div id="content-wrapper">
<!-- <div class="row"> -->
                <div id="content" class="span9">
            # Itinerary Resource (TripLink): POST 
                    <div class="section">
                    <div id="node-548" class="node clear-block">


    
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
.STRING_LITERAL {color: #ce7b00}</style>If you are a TMC or third party developer, please review the alternate resource documentation <a href="https://developer.concur.com/node/515">here</a>.
This resource supports the following POST actions:

* 
        <a href="#newlistitem">Post Itinerary Details </a>
* 
        <a href="#listitemupdate">Post Itinerary Cancellation </a>

## 
    <a id="posttripdetails" name="posttripdetails"></a>Post Itinerary Details Request
<table border="1" bordercolor="#dbdbdb" cellpadding="3" cellspacing="0" width="100%">
<tbody>
<tr class="GrayTableHead">
<td colspan="2">
                Description</td>
</tr>
<tr>
<td colspan="2">
                Creates a new trip or updates an existing trip. A new trip will be created if the trip dates span no existing trip and the request doesn't include a tripId. If a tripId is included in the uri it will update the specified trip. The full trip information is included in the update request, which replaces the existing trip. TripLink - Open Booking suppliers can only update trips or bookings that they created.</td>
</tr>
<tr class="GrayTableHead">
<td>
                Query Parameters - Required</td>
<td>
                Supported Content Types</td>
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

* 
                        **{<em>tripId</em>}**<br />
                        The identifier for the desired trip. Provided if the request is updating an existing trip.

                Examples:<br />
                **To post a new trip:**<br />
                <a href="https://www.concursolutions.com/api/travel/trip/v1.1" title="https://www.concursolutions.com/api/travel/trip/v1.1">https://www.concursolutions.com/api/travel/trip/v1.1</a>
                **To update a trip:**<br />
                https://www.concursolutions.com/api/travel/trip/v1.1?tripId={<em>tripId</em>}</td>
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
<tr class="GrayTableHead">
<td colspan="2">
                Content Body</td>
</tr>
<tr>
<td colspan="2">
This function requires as its arguments an <span class="codeexample">**Itinerary** parent element. The parent element contains the following child elements:
<table border="1" bordercolor="#dbdbdb" cellpadding="3" cellspacing="0" width="100%">
<tbody>
<tr class="GrayTableHead">
<td valign="top" width="20%">
                                Element</td>
<td valign="top" width="70%">
                                Description</td>
</tr>
<tr class="GrayTableHead">
<td colspan="2" valign="top">
                                Required Elements</td>
</tr>
<tr>
<td valign="top">
                                <span class="codeexample">TripName</td>
<td valign="top">
                                Name of the trip.</td>
</tr>
<tr>
<td valign="top">
                                TripStatus</td>
<td valign="top">
                                The status of the trip.</td>
</tr>
<tr class="GrayTableHead">
<td colspan="2" valign="top">
                                Optional Elements</td>
</tr>
<tr>
<td valign="top">
                                BookedByFirstName</td>
<td valign="top">
                                First name of the trip owner.</td>
</tr>
<tr>
<td valign="top">
                                BookedByLastName</td>
<td valign="top">
                                Last name of the trip owner.</td>
</tr>
<tr>
<td valign="top">
                                <span class="codeexample">Bookings</td>
<td valign="top">
                                This parent element will contain a <span class="codeexample">**Booking** child element for each booking associated with this itinerary. The <span class="codeexample">**Booking** child elements are detailed in the <a href="#bookingelem">Booking Elements </a>table.</td>
</tr>
<tr>
<td valign="top">
                                CancelComments</td>
<td valign="top">
                                User supplied comments if the trip is cancelled. Maximum length: 256 characters</td>
</tr>
<tr>
<td valign="top">
                                <span class="codeexample">Comments</td>
<td valign="top">
                                Comments on the itinerary.</td>
</tr>
<tr>
<td valign="top">
                                DateBookedLocal</td>
<td valign="top">
                                The date the trip was booked, in the local time of the booking location. Format: YYYY-MM-DDThh:mm:ss</td>
</tr>
<tr>
<td valign="top">
                                Description</td>
<td valign="top">
                                The trip description. Maximum length: 512 characters.</td>
</tr>
<tr>
<td valign="top">
                                <span class="codeexample">EndDateLocal</td>
<td valign="top">
                                The end date of the trip in the ending location&rsquo;s timezone.</td>
</tr>
<tr>
<td valign="top">
                                IsPersonal</td>
<td valign="top">
                                Whether the trip is a Business or Leisure trip. Format: true/false</td>
</tr>
<tr>
<td valign="top">
                                <span class="codeexample">StartDateLocal</td>
<td valign="top">
                                The start date of the trip in the starting location&rsquo;s timezone.</td>
</tr>
</tbody>
</table>

### 
                    <a id="bookingelem" name="bookingelem"></a>Booking Elements
<table border="1" bordercolor="#dbdbdb" cellpadding="3" cellspacing="0" width="100%">
<tbody>
<tr class="GrayTableHead">
<td valign="top">
                                Element</td>
<td valign="top">
                                Description</td>
</tr>
<tr class="GrayTableHead">
<td colspan="2" valign="top">
                                Required Elements</td>
</tr>
<tr>
<td valign="top" width="20%">
                                <span class="codeexample">BookingSource</td>
<td valign="top" width="70%">
                                The booking vendor.</td>
</tr>
<tr>
<td valign="top">
                                RecordLocator</td>
<td valign="top">
                                The unique identifier for the booking. Send the value for an existing booking to update an existing trip. This value is returned in the RecordLocator element by the <a href="https://developer.concur.com/node/549">Post Booking Details</a> function.</td>
</tr>
<tr class="GrayTableHead">
<td colspan="2" valign="top">
                                Optional Elements</td>
</tr>
<tr>
<td valign="top">
                                Segments</td>
<td valign="top">
                                This parent element will contain at least one of the following child elements: **Air**, **Car**, **Hotel**, **Dining**, **Ride**, **Rail**, **Parking**, **Event**.
Refer to <a href="/node/546#bookingelements">Booking Object Elements</a> for more information about the child elements contained in the booking elements.
</td>
</tr>
<tr>
<td valign="top">
                                Passengers</td>
<td valign="top">
This parent element contains a **Passenger** child element for each booked passenger. The **Passenger** child element contains the following child elements:
<table border="1" bordercolor="#dbdbdb" cellpadding="3" cellspacing="0" width="100%">
<tbody>
<tr>
<td colspan="2" valign="top">
                                                Required Elements</td>
</tr>
<tr>
<td valign="top" width="20%">
                                                NameFirst</td>
<td valign="top" width="70%">
                                                The first name of the passenger.</td>
</tr>
<tr>
<td valign="top">
                                                NameLast</td>
<td valign="top">
                                                The last name of the passenger.</td>
</tr>
<tr>
<td colspan="2" valign="top">
                                                Optional Elements</td>
</tr>
<tr>
<td valign="top">
                                                NameMiddle</td>
<td valign="top">
                                                The middle name of the passenger.</td>
</tr>
<tr>
<td valign="top">
                                                NamePrefix</td>
<td valign="top">
                                                The name prefix of the passenger.</td>
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
                                                The name suffix of the passenger.</td>
</tr>
<tr>
<td valign="top">
                                                NameTitle</td>
<td valign="top">
                                                The title of the passenger.</td>
</tr>
<tr>
<td valign="top">
                                                TextName</td>
<td valign="top">
                                                The user's full name as entered in the booking tool if different from the name in the database.</td>
</tr>
<tr>
<td valign="top">
                                                FrequentTravelerProgram</td>
<td valign="top">
                                                Passenger's loyalty programs</td>
</tr>
</tbody>
</table>
</td>
</tr>
<tr>
<td valign="top">
                                <span class="codeexample">DateBookedLocal</td>
<td valign="top">
                                The date, in the traveler&rsquo;s local time, that the booking was made.</td>
</tr>
</tbody>
</table>
</td>
</tr>
</tbody>
</table>
####
    XML Example Request
<pre class="overflow_box">
POST /api/travel/trip/v1.1/ HTTPS 1.1
Host: <a href="http://www.concursolutions.com" title="www.concursolutions.com">www.concursolutions.com</a>
Authorization: OAuth {access token} 
... 
    
<Itinerary <span class="xml-attribute">xmlns=<span class="xml-value">&quot;<span class="xml-value">http://www.concursolutions.com/api/travel/trip/2010/06<span class="xml-value">&quot;>
    <TripName>Trip from Dallas to Seattle</TripName>
    <TripStatus>HK</TripStatus>
    <Comments />
    <StartDateLocal>2013-12-21T07:25:00</StartDateLocal>
    <EndDateLocal>2013-12-24T23:59:00</EndDateLocal>
    <BookedByFirstName>Chris</BookedByFirstName>
    <BookedByLastName>Miller</BookedByLastName>
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
            <BookingSource>TravelBookings.com</BookingSource>
            <DateBookedLocal>2013-11-10T13:01:00</DateBookedLocal>
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
            <BookingSource>TravelBookings.com</BookingSource>
            <DateBookedLocal>2013-11-10T13:01:00</DateBookedLocal>
        </Booking>
    </Bookings>
</Itinerary>
</pre>## 
    Post Itinerary Details Response
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
                When the trip is created successfully, the request will return the full posted trip details with the following additional elements inside the **Itinerary** parent element:
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
                                <span class="codeexample">id</td>
<td valign="top">
                                The URI containing the trip ID.</td>
</tr>
<tr>
<td valign="top">
                                <span class="codeexample">ItinLocator</td>
<td valign="top">
                                The Itinerary Locator value (trip ID without the URL). The <span class="codeexample">**ItinLocator** value is used when updating an existing trip.</td>
</tr>
<tr>
<td valign="top">
                                DateModifiedUtc</td>
<td valign="top">
                                The UTC formatted date that this booking was last modified.</td>
</tr>
<tr>
<td valign="top">
                                BookedVia</td>
<td valign="top">
                                The GDS the itinerary was booked in.</td>
</tr>
<tr>
<td valign="top">
                                <span class="codeindent1">DateBookedLocal</td>
<td valign="top">
                                The date, in the traveler&rsquo;s local time, that the booking was made.</td>
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
<Itinerary <span class="xml-attribute">xmlns=<span class="xml-value">&quot;<span class="xml-value">http://www.concursolutions.com/api/travel/trip/2010/06<span class="xml-value">&quot;>
    <id>https://www.concursolutions.com/api/travel/trip/v1.1/CNQR1234567890</id>
    <ItinLocator>CNQR1234567890</ItinLocator>
    <TripName>Trip from Dallas to Seattle</TripName>
    <TripStatus>HK</TripStatus>
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
            <BookingSource>TravelBookings.com</BookingSource>
            <DateBookedLocal>2013-11-10T13:01:00</DateBookedLocal>
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
            <BookingSource>TravelBookings.com</BookingSource>
            <DateBookedLocal>2013-11-10T13:01:00</DateBookedLocal>
        </Booking>
    </Bookings>
</Itinerary>
</pre>## 
    <a id="listitemupdate" name="listitemupdate"></a>Post Itinerary Cancellation Request
<table border="1" bordercolor="#dbdbdb" cellpadding="3" cellspacing="0" width="100%">
<tbody>
<tr class="GrayTableHead">
<td>
                Description</td>
<td>
                Supported Content Types</td>
</tr>
<tr>
<td>
                Cancels all segments in the supplied trip. TripLink - Open Booking suppliers can only cancel trips that they have created. If they did not create the trip, this request will cancel any segments in the supplied trip that they created.</td>
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
                        **cancel?{<em>tripId</em>}**<br />
                        The identifier for the desired trip and the cancel keyword.

Example:<br />
                    https://www.concursolutions.com/api/travel/trip/v1.1/cancel?tripId={<em>tripId</em>}
</td>
</tr>
<tr class="GrayTableHead">
<td colspan="2">
                Query Parameters - Optional</td>
</tr>
<tr>
<td colspan="2" valign="top">
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
                Authorization header with OAuth token for valid Concur user.</td>
<td valign="top" width="50%">
                None</td>
</tr>
</tbody>
</table>
####
    XML Example Request
<pre class="overflow_box">
POST /api/travel/trip/v1.1/cancel?tripId=CNQR1234567890 HTTPS 1.1
Host: <a href="http://www.concursolutions.com" title="www.concursolutions.com">www.concursolutions.com</a>
Authorization: OAuth {access token}
... 
</pre>## 
    Post Itinerary Cancellation Response
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
                The request will return the full trip details for the cancelled trip. The trip will contain no segments, as those are all cancelled. The response includes the following additional elements inside the **Itinerary** parent element:
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
                                id</td>
<td valign="top">
                                The URI containing the trip ID.</td>
</tr>
<tr>
<td valign="top">
                                ItinLocator</td>
<td valign="top">
                                The Itinerary Locator value (trip ID without the URL).</td>
</tr>
<tr>
<td valign="top">
                                ClientLocator</td>
<td valign="top">
                                The identifier for the client.</td>
</tr>
<tr>
<td valign="top">
                                DateModifiedUtc</td>
<td valign="top">
                                The UTC formatted date that this booking was last modified.</td>
</tr>
<tr>
<td valign="top">
                                BookedVia</td>
<td valign="top">
                                The GDS the itinerary was booked in.</td>
</tr>
<tr>
<td valign="top">
                                DateBookedLocal</td>
<td valign="top">
                                The date, in the traveler&rsquo;s local time, that the booking was made.</td>
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
    <BookedByFirstName>Chris</BookedByFirstName>
    <BookedByLastName>Miller</BookedByLastName>
    <DateBookedLocal>2012-07-24T19:15:52</DateBookedLocal>
    <Bookings>
        <Booking>
            <Segments/>
            <Passengers>
                <Passenger>
                    <NameFirst>Chris</NameFirst>
                    <NameLast>Miller</NameLast>
                </Passenger>
            </Passengers>
            <RecordLocator>C123456789</RecordLocator>
            <BookingSource>ConcurCars</BookingSource>
            <DateBookedLocal>2013-11-10T13:01:00</DateBookedLocal>
        </Booking>
        <Booking>
            <Segments/>
            <Passengers>
                <Passenger>
                    <NameFirst>Chris</NameFirst>
                    <NameLast>Miller</NameLast>
                </Passenger>
            </Passengers>
            <RecordLocator>0987654321</RecordLocator>
            <BookingSource>ConcurHotel</BookingSource>
            <DateBookedLocal>2013-11-10T13:01:00</DateBookedLocal>
            <PassengerCount>1</PassengerCount>
        </Booking>
    </Bookings>
</Itinerary>
</pre>
