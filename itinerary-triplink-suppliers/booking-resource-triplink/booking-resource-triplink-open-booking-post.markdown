
        <div id="main" class="container">
            <div>
                            </div>
            <div class="row">
                <div class="span12">
<div class="breadcrumbs"><a href="/">Home</a>Booking Resource: TripLink - Open Booking: POST </div>
                </div>
            </div>

            <div id="content-wrapper">
<!-- <div class="row"> -->
                <div id="content" class="span9">
            # Booking Resource: TripLink - Open Booking: POST 
                    <div class="section">
                    <div id="node-549" class="node clear-block">


    
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
.STRING_LITERAL {color: #ce7b00}</style>NOTE: If you are a TMC or third party developer, please review the alternate resource documentation <a href="https://developer.concur.com/node/512">here</a>.
This resource supports the following POST actions:

* 
        <a href="#postbookingdetails">Post Booking Details </a>
* 
        <a href="#postbookingcancel">Post Booking Cancellation</a>

## 
    <a id="postbookingdetails" name="postbookingdetails"></a>Post Booking Details Request
<table border="1" bordercolor="#dbdbdb" cellpadding="3" cellspacing="0" width="100%">
<tbody>
<tr class="GrayTableHead">
<td colspan="2">
                Description</td>
</tr>
<tr>
<td colspan="2">
                Creates a new booking or updates an existing booking. A new booking will be assigned to the specified trip, or if no trip is specified, the first itinerary that spans the booking dates. If no trip is specified and no itinerary exists that spans the booking dates, a new itinerary will be created. TripLink - Open Booking suppliers can only update bookings that they created.</td>
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
                application/xml</td>
</tr>
<tr class="GrayTableHead">
<td colspan="2">
                Query Parameters - Optional</td>
</tr>
<tr>
<td colspan="2" valign="top">

* 
                        <span class="codeexample">**tripId={<em>tripId</em>}**<br />
                        The unique identifier for the trip. Supplied in order to add a booking to an existing trip.

Examples:<br />
                    <span class="codeexample">https://www.concursolutions.com/api/travel/booking/v1.1?tripId={<em>tripId</em>}
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
<tr class="GrayTableHead">
<td colspan="2">
                Content Body</td>
</tr>
<tr>
<td colspan="2">
The request contains a **Booking** parent element with the following child elements:
<table border="1" bordercolor="#dbdbdb" cellpadding="3" cellspacing="0" width="100%">
<tbody>
<tr class="GrayTableHead">
<td colspan="2" valign="top">
                                Core Elements - Required</td>
</tr>
<tr class="GrayTableHead">
<td valign="top" width="20%">
                                Element</td>
<td valign="top" width="70%">
                                Description</td>
</tr>
<tr>
<td valign="top">
                                BookingSource</td>
<td valign="top">
                                The supplier's name.</td>
</tr>
<tr>
<td valign="top">
                                ItinSourceName</td>
<td valign="top">
                                The itinerary source. Format: TravelSupplier</td>
</tr>
<tr>
<td valign="top">
                                RecordLocator</td>
<td valign="top">
                                Record locator for this booking. This is often six alphameric characters but can have other formats depending on the booking source</td>
</tr>
<tr class="GrayTableHead">
<td colspan="2" valign="top">
                                Core Elements - Optional</td>
</tr>
<tr class="GrayTableHead">
<td valign="top">
                                Element</td>
<td valign="top">
                                Description</td>
</tr>
<tr>
<td valign="top">
                                DateBookedLocal</td>
<td valign="top">
                                The date the booking was created, in the booking location's local time. Format: YYYY-MM-DDThh:mm:ss</td>
</tr>
<tr>
<td valign="top">
                                Passengers</td>
<td valign="top">
                                This parent element contains a **Passenger** child element for each booked passenger. The **Passenger** child element contains the following child elements:
<table border="1" bordercolor="#dbdbdb" cellpadding="3" cellspacing="0" width="100%">
<tbody>
<tr class="GrayTableHead">
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
<tr class="GrayTableHead">
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
                                Segments</td>
<td valign="top">
                                List of Segments in this booking. This parent element contains one or more <span class="codeexample">**Air**, <span class="codeexample">**Car**, <span class="codeexample">**Hotel**, <span class="codeexample">**Dining**, <span class="codeexample">**Ride**, <span class="codeexample">**Rail**, <span class="codeexample">**Parking**, or <span class="codeexample">**Event** parent elements for the booking. Refer to <a href="/node/510#bookingelements">Booking Object Elements</a> for more information about the child elements contained in the booking elements.</td>
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
POST /api/travel/booking/v1.0?tripId=12345678 HTTPS 1.1
Host: <a href="http://www.concursolutions.com" title="www.concursolutions.com">www.concursolutions.com</a>
Authorization: OAuth {access token} 
... 
    
<Booking <span class="xml-attribute">xmlns:xsi=<span class="xml-value">&quot;<span class="xml-value">http://www.w3.org/2001/XMLSchema-instance<span class="xml-value">&quot; <span class="xml-attribute">xmlns:xsd=<span class="xml-value">&quot;<span class="xml-value">http://www.w3.org/2001/XMLSchema<span class="xml-value">&quot;>
    <Segments>
        <Car>
            <StartDateLocal>2013-12-21T12:00:00</StartDateLocal> 
            <EndDateLocal>2013-12-23T12:00:00</EndDateLocal> 
            <StartDateUtc>2013-12-21T20:00:00</StartDateUtc> 
            <EndDateUtc>2013-12-23T20:00:00</EndDateUtc>  
            <DateCreatedUtc>2012-07-22T11:55:42</DateCreatedUtc> 
            <DateModifiedUtc>2012-07-22T11:55:42</DateModifiedUtc> 
            <StartCityCode>SEA</StartCityCode> 
            <EndCityCode>SEA</EndCityCode> 
        </Car>
    </Segments>
    <RecordLocator>PANAMA50</RecordLocator> 
    <BookingSource>Alamo</BookingSource> 
    <DateCreatedUtc>2012-07-22T11:55:42</DateCreatedUtc>
    <ItinSourceName>TravelSupplier</ItinSourceName>
    <Passengers>
        <Passenger> 
            <NameFirst>Chris</NameFirst> 
            <NameLast>Miller</NameLast> 
        </Passenger>
    </Passengers>
</Booking>
</pre>## 
    Post Booking Details Response
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
                This function returns the full trip details, as documented in the **Response** of the <a href="https://developer.concur.com/node/547#getitindetails">Get Itinerary Details</a> function.
                If the end user updates an existing reservation which results in a new confirmation number, the old booking must be explicitly cancelled in addition to posting the new booking to Concur. If the previous booking is not cancelled, the user will see both bookings in their Concur trip list.</td>
</tr>
</tbody>
</table>
####
    XML Example of Successful Response
<pre class="overflow_box">
<Itinerary <span class="xml-attribute">xmlns=<span class="xml-value">&quot;<span class="xml-value">http://www.concursolutions.com/api/travel/trip/2010/06<span class="xml-value">&quot;>
    <id>https://www.concursolutions.com/api/travel/trip/v1.1/CNQR1234567890</id>
    <ItinLocator>CNQR1234567890</ItinLocator>
    <TripName>Trip to Seattle</TripName>
    <Comments />
    <StartDateLocal>2013-12-21T07:25:00</StartDateLocal>
    <EndDateLocal>2013-12-23T23:59:00</EndDateLocal>
    <DateModifiedUtc>2012-07-24T19:15:52</DateModifiedUtc>
    <BookedByFirstName>Chris</BookedByFirstName>
    <BookedByLastName>Miller</BookedByLastName>
    <DateBookedLocal>2012-07-24T19:15:52</DateBookedLocal>
    <Booking>
        <Segments>
            <Car>
                <StartDateLocal>2013-12-21T12:00:00</StartDateLocal> 
                <EndDateLocal>2013-12-23T12:00:00</EndDateLocal> 
                <StartDateUtc>2013-12-21T20:00:00</StartDateUtc> 
                <EndDateUtc>2013-12-23T20:00:00</EndDateUtc>  
                <DateCreatedUtc>2012-07-22T11:55:42</DateCreatedUtc> 
                <DateModifiedUtc>2012-07-22T11:55:42</DateModifiedUtc> 
                <StartCityCode>SEA</StartCityCode> 
                <EndCityCode>SEA</EndCityCode> 
            </Car>
        </Segments>
        <RecordLocator>PANAMA50</RecordLocator> 
        <BookingSource>Alamo</BookingSource> 
        <DateCreatedUtc>2012-07-22T11:55:42</DateCreatedUtc>
        <ItinSourceName>TravelSupplier</ItinSourceName>
        <Passengers>
            <Passenger> 
                <NameFirst>Chris</NameFirst> 
                <NameLast>Miller</NameLast> 
            </Passenger>
        </Passengers>
    </Booking>
</Itinerary>
</pre>## 
    <a id="postbookingcancel" name="postbookingcancel"></a>Post Booking Cancellation Request
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
                Cancels an existing booking, owned by the OAuth consumer.
**NOTE**:

* 
                        Booking records can only be updated by the booking source that created them. Concur verifies the source information before processing the request.

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
                        <span class="codeexample">**cancel?bookingSource={<em>Supplier</em>}**<br />
                        The cancel keyword and the unique identifier for the supplier, configured by Concur during the application review. The bookingSource must match the Supplier Name associated with the booking.
* 
                        <span class="codeexample">**confirmationNumber=****{<em>confnum</em>}**<br />
                        The confirmation number for the booking to cancel.

Example:<br />
                    <span class="codeexample">https://www.concursolutions.com/api/travel/booking/v1.1/cancel?bookingSource={<em>Supplier</em>}&amp;confirmationNumber={<em>confnum</em>}
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
POST /api/travel/booking/v1.1/cancel?bookingSource={FastTravel}<span class="ST0">&amp;confirmationNumber={0987654321}
Host: <a href="http://www.concursolutions.com" title="www.concursolutions.com">www.concursolutions.com</a>
Authorization: OAuth {access token} 
...
</pre>## 
    Post Booking Cancellation Response
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
                This function returns the full booking details, as specified in <a href="/node/546#bookingelements">Booking Object Elements</a>.
                If the booking is not found, the function returns a HTTP 404 error and the following element:
                **Status**: This element contains the value: NotFound.</td>
</tr>
</tbody>
</table>
####
    XML Example of Successful Response
<pre class="overflow_box">
<Booking <span class="xml-attribute">xmlns:xsi=<span class="xml-value">&quot;<span class="xml-value">http://www.w3.org/2001/XMLSchema-instance<span class="xml-value">&quot; <span class="xml-attribute">xmlns:xsd=<span class="xml-value">&quot;<span class="xml-value">http://www.w3.org/2001/XMLSchema<span class="xml-value">&quot;>
    <Segments>
        <Car>
            <StartDateLocal>2013-12-21T12:00:00</StartDateLocal> 
            <EndDateLocal>2013-12-23T12:00:00</EndDateLocal> 
            <StartDateUtc>2013-12-21T20:00:00</StartDateUtc> 
            <EndDateUtc>2013-12-23T20:00:00</EndDateUtc>  
            <DateCreatedUtc>2012-07-22T11:55:42</DateCreatedUtc> 
            <DateModifiedUtc>2012-07-22T11:55:42</DateModifiedUtc> 
            <StartCityCode>SEA</StartCityCode> 
            <EndCityCode>SEA</EndCityCode> 
        </Car>
    </Segments>
    <RecordLocator>11292837123</RecordLocator> 
    <BookingSource>FastTravel</BookingSource> 
    <DateCreatedUtc>2012-07-22T11:55:42</DateCreatedUtc> 
    <Passengers>
        <Passenger> 
            <NameFirst>Chris</NameFirst> 
            <NameLast>Miller</NameLast> 
        </Passenger>
    </Passengers>
</Booking>
</pre>
