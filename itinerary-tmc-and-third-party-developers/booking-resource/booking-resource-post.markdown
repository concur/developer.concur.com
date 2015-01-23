
        <div id="main" class="container">
            <div>
                            </div>
            <div class="row">
                <div class="span12">
<div class="breadcrumbs"><a href="/">Home</a>Booking Resource: POST</div>
                </div>
            </div>

            <div id="content-wrapper">
<!-- <div class="row"> -->
                <div id="content" class="span9">
            # Booking Resource: POST
                    <div class="section">
                    <div id="node-512" class="node clear-block">


    
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
.STRING_LITERAL {color: #ce7b00}</style>
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
                Creates a new booking or updates an existing booking. A new booking will be assigned to the specified trip, or if no trip is specified, the first itinerary that spans the booking dates. If no trip is specified and no itinerary exists that spans the booking dates, a new itinerary will be created.
                This endpoint can be used to create/update bookings for a user that is not the OAuth consumer. This is most often done when a travel supplier or Travel Management Company needs to create/update a booking on behalf of a user. The supplier or TMC must be registered with Concur, and must have an account that has one of the following user roles: Web Services Administrator for Professional, or Can Administer for Standard.
            </td>
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
                    * 
                        <span class="codeexample">**userid_type=login_id&amp;userid_value={<em>loginID</em>}**<br />
                        The Concur login ID of the user who owns the booking. Only provided when the booking owner is not the OAuth consumer. Can only be used when the OAuth consumer has the required user role.
                
                Examples:<br />
                    <span class="codeexample">https://www.concursolutions.com/api/travel/booking/v1.1?tripId={<em>tripId</em>}<br />
                    <br />
                    <span class="codeexample">https://www.concursolutions.com/api/travel/booking/v1.1?userid_type=login_id&amp;userid_value={<em>loginID</em>}
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
                Authorization header with OAuth token for valid Concur user.<br />
                <br />
                In order to create or update booking for anyone other than the OAuth consumer, the OAuth consumer must have one of the following user roles in Concur: Company Administrator or Web Services Administrator for Professional, or Can Administer for Standard.</td>
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
                        <tr>
                            <td colspan="2" valign="top">
                                Core Elements - Optional</td>
                        </tr>
                        <tr>
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
                                TicketMailingAddress</td>
                            <td valign="top">
                                The mailing address for the booked ticket, if available.</td>
                        </tr>
                        <tr>
                            <td valign="top">
                                TicketPickupLocation</td>
                            <td valign="top">
                                The pickup location for the booked ticket, if available</td>
                        </tr>
                        <tr>
                            <td valign="top">
                                TicketPickupNumber</td>
                            <td valign="top">
                                The confirmation number to pick up the booked ticket, if available.</td>
                        </tr>
                        <tr>
                            <td valign="top">
                                AirfareQuotes</td>
                            <td valign="top">
                                List of stored airfare quotes for this booking.</td>
                        </tr>
                        <tr>
                            <td valign="top">
                                AirlineTickets</td>
                            <td valign="top">
                                List of Airline Tickets for this booking.</td>
                        </tr>
                        <tr>
                            <td valign="top">
                                Charges</td>
                            <td valign="top">
                                List of Charges for this booking.</td>
                        </tr>
                        <tr>
                            <td valign="top">
                                MiscChargeOrders</td>
                            <td valign="top">
                                List of Miscellaneous AirCharges for this booking.</td>
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
                                PassPrograms</td>
                            <td valign="top">
                                List of Pass Programs for this booking.</td>
                        </tr>
                        <tr>
                            <td valign="top">
                                PhoneNumbers</td>
                            <td valign="top">
                                List of Phone numbers associated with this booking.</td>
                        </tr>
                        <tr>
                            <td valign="top">
                                RailPayments</td>
                            <td valign="top">
                                List of Rail payments associated with rail segments in this booking.</td>
                        </tr>
                        <tr>
                            <td valign="top">
                                Segments</td>
                            <td valign="top">
                                List of Segments in this booking. This parent element contains one or more <span class="codeexample">**Air**, <span class="codeexample">**Car**, <span class="codeexample">**Hotel**, <span class="codeexample">**Dining**, <span class="codeexample">**Ride**, <span class="codeexample">**Rail**, <span class="codeexample">**Parking**, or <span class="codeexample">**Event** parent elements for the booking. Refer to <a href="/node/510#bookingelements">Booking Object Elements</a> for more information about the child elements contained in the booking elements.</td>
                        </tr>
                        <tr>
                            <td valign="top">
                                Delivery</td>
                            <td valign="top">
                                The method this booking was delivered.</td>
                        </tr>
                        <tr>
                            <td valign="top">
                                WaitListSegments</td>
                            <td valign="top">
                                The segments that the traveler is waitlisted for this booking.</td>
                        </tr>
                        <tr>
                            <td height="30" valign="top">
                                Warnings</td>
                            <td valign="top">
                                The warnings associated with the booking.</td>
                        </tr>
                        <tr>
                            <td valign="top">
                                WebAddresses</td>
                            <td valign="top">
                                List of web addresses such as emails, pickup urls, etc.. associated with this bookings</td>
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
Host: www.concursolutions.com
Authorization: OAuth {access token} 
... 
    
<Booking <span class="xml-attribute">xmlns:xsi=<span class="xml-value">&quot;<span class="xml-value">http://www.w3.org/2001/XMLSchema-instance<span class="xml-value">&quot; <span class="xml-attribute">xmlns:xsd=<span class="xml-value">&quot;<span class="xml-value">http://www.w3.org/2001/XMLSchema<span class="xml-value">&quot;>
    <Segments>
        <Car>
            <Vendor>AL</Vendor> 
            <VendorName>Alamo</VendorName> 
            <Status>HK</Status> 
            <StartDateLocal>2013-12-21T12:00:00</StartDateLocal> 
            <EndDateLocal>2013-12-23T12:00:00</EndDateLocal> 
            <StartDateUtc>2013-12-21T20:00:00</StartDateUtc> 
            <EndDateUtc>2013-12-23T20:00:00</EndDateUtc> 
            <ConfirmationNumber>F16726AIUS</ConfirmationNumber> 
            <DateCreatedUtc>2012-07-22T11:55:42</DateCreatedUtc> 
            <DateModifiedUtc>2012-07-22T11:55:42</DateModifiedUtc> 
            <StartCityCode>SEA</StartCityCode> 
            <EndCityCode>SEA</EndCityCode> 
            <StartLocation>SEA</StartLocation> 
            <EndLocation>SEA</EndLocation> 
            <Class>E</Class> 
            <Body>C</Body> 
            <Transmission>A</Transmission> 
            <AirCondition>R</AirCondition> 
            <NumPersons>1</NumPersons> 
            <NumCars>1</NumCars> 
            <DiscountCode>4321</DiscountCode> 
            <DailyRate>35.0000</DailyRate> 
            <TotalRate>105.0000</TotalRate> 
            <RateType>D</RateType> 
            <Currency>USD</Currency> 
        </Car>
    </Segments>
    <RecordLocator>PANAMA50</RecordLocator> 
    <BookingSource>Alamo</BookingSource> 
    <DateCreatedUtc>2012-07-22T11:55:42</DateCreatedUtc> 
    <DateModifiedUtc>2012-07-22T11:55:42</DateModifiedUtc> 
    <DateBookedLocal>2013-11-10T13:01:00</DateBookedLocal> 
    <ItinSourceName>TravelSupplier</ItinSourceName> 
    <Passengers>
        <Passenger>
            <PassengerKey>0</PassengerKey> 
            <NameFirst>Chris</NameFirst> 
            <NameLast>Miller</NameLast> 
        </Passenger>
    </Passengers>
</Booking>
</pre>
## 
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
                This function returns the full trip details, as documented in the **Response** of the <a href="https://developer.concur.com/node/514#getitindetails">Get Itinerary Details</a> function.<br />
                <br />
                If the end user updates an existing reservation which results in a new confirmation number, the old booking must be explicitly cancelled in addition to posting the new booking to Concur. If the previous booking is not cancelled, the user will see both bookings in their Concur trip list.</td>
        </tr>
    </tbody>
</table>
####
    XML Example of Successful Response
<pre class="overflow_box">
<Itinerary <span class="xml-attribute">xmlns=<span class="xml-value">&quot;<span class="xml-value">https://www.concursolutions.com/api/travel/trip/2010/06<span class="xml-value">&quot;>
    <id>https://www.concursolutions.com/api/travel/trip/v1.1/CNQR1234567890</id>
    <ItinLocator>CNQR1234567890</ItinLocator>
    <ClientLocator>KK-CNQ-1M1P6-5HJ</ClientLocator>
    <ItinSourceName>TravelSupplier</ItinSourceName>
    <TripName>Trip to Seattle</TripName>
    <Comments />
    <StartDateLocal>2013-12-21T07:25:00</StartDateLocal>
    <EndDateLocal>2013-12-23T23:59:00</EndDateLocal>
    <DateModifiedUtc>2012-07-24T19:15:52</DateModifiedUtc>
    <BookedVia>EveryGDS</BookedVia>
    <BookedByFirstName>Chris</BookedByFirstName>
    <BookedByLastName>Miller</BookedByLastName>
    <DateBookedLocal>2012-07-24T19:15:52</DateBookedLocal>
    <Booking>
        <Segments>
            <Car>
                <Vendor>AL</Vendor> 
                <VendorName>Alamo</VendorName> 
                <Status>HK</Status> 
                <StartDateLocal>2013-12-21T12:00:00</StartDateLocal> 
                <EndDateLocal>2013-12-23T12:00:00</EndDateLocal> 
                <StartDateUtc>2013-12-21T20:00:00</StartDateUtc> 
                <EndDateUtc>2013-12-23T20:00:00</EndDateUtc> 
                <ConfirmationNumber>F16726AIUS</ConfirmationNumber> 
                <DateCreatedUtc>2012-07-22T11:55:42</DateCreatedUtc> 
                <DateModifiedUtc>2012-07-22T11:55:42</DateModifiedUtc> 
                <StartCityCode>SEA</StartCityCode> 
                <EndCityCode>SEA</EndCityCode> 
                <StartLocation>SEA</StartLocation> 
                <EndLocation>SEA</EndLocation> 
                <Class>E</Class> 
                <Body>C</Body> 
                <Transmission>A</Transmission> 
                <AirCondition>R</AirCondition> 
                <NumPersons>1</NumPersons> 
                <NumCars>1</NumCars> 
                <DiscountCode>4321</DiscountCode> 
                <DailyRate>35.0000</DailyRate> 
                <TotalRate>105.0000</TotalRate> 
                <RateType>D</RateType> 
                <Currency>USD</Currency> 
            </Car>
        </Segments>
        <RecordLocator>PANAMA50</RecordLocator> 
        <BookingSource>Alamo</BookingSource> 
        <DateCreatedUtc>2012-07-22T11:55:42</DateCreatedUtc> 
        <DateModifiedUtc>2012-07-22T11:55:42</DateModifiedUtc> 
        <DateBookedLocal>2013-11-10T13:01:00</DateBookedLocal> 
        <ItinSourceName>TravelSupplier</ItinSourceName> 
        <Passengers>
            <Passenger>
                <PassengerKey>0</PassengerKey> 
                <NameFirst>Chris</NameFirst> 
                <NameLast>Miller</NameLast> 
            </Passenger>
        </Passengers>
    </Booking>
</Itinerary>
</pre>
## 
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
                Cancels an existing booking. By default, the OAuth consumer should be the owner of the booking. This endpoint can also be used to cancel bookings that the OAuth consumer does not own. This is most often done when a Travel Management Company needs to cancel bookings on behalf of a user. The TMC must be registered with Concur and have a Concur account that has one of the following user roles: Web Services Administrator for Professional, or Can Administer for Standard.
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
            <td colspan="2">
                
                    * 
                        **userid_type=login_id&amp;userid_value={<em>loginID</em>}**<br />
                        The Concur login ID of the user who owns the booking. Only provided when the booking owner is not the OAuth consumer. Can only be used when the OAuth consumer has the required user role.
                
                Example:<br />
                    https://www.concursolutions.com/api/travel/booking/v1.1/cancel?bookingSource={<em>Supplier</em>}&amp;confirmationNumber={<em>confnum</em>}&amp;userid_type=login_id&amp;userid_value={<em>loginID</em>}
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
                Authorization header with OAuth token for valid Concur user.
                The OAuth consumer must be registered as a Supplier or TMC with Concur, and must have one of the following user roles in Concur: Company Administrator or Web Services Administrator for Professional, or Can Administer for Standard.
            </td>
            <td valign="top" width="50%">
                None</td>
        </tr>
    </tbody>
</table>
####
    XML Example Request
<pre class="overflow_box">
POST /api/travel/booking/v1.1/cancel?bookingSource={FastTravel}<span class="ST0">&amp;confirmationNumber={0987654321}
Host: www.concursolutions.com
Authorization: OAuth {access token} 
...
</pre>
## 
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
                This function returns the full booking details, as specified in <a href="/node/510#bookingelements">Booking Object Elements</a>.<br />
                <br />
                If the booking is not found, the function returns a HTTP 404 error and the following element:<br />
                <br />
                **Status**: This element contains the value: NotFound.</td>
        </tr>
    </tbody>
</table>
####
    XML Example of Successful Response
<pre class="overflow_box">
<Car>
    <Vendor>ZE</Vendor>
    <Status>HK</Status>
    <StartDateLocal>2013-12-21T12:00:00</StartDateLocal>
    <EndDateLocal>2013-12-24T12:00:00</EndDateLocal>
    <TimeZoneId <span class="xml-attribute">xsi:nil=<span class="xml-value">&quot;true&quot;/>
    <StartDateUtc>2013-12-21T20:00:00</StartDateUtc>
    <EndDateUtc>2013-12-24T20:00:00</EndDateUtc>
    <ConfirmationNumber>0987654321</ConfirmationNumber>
    <CancellationNumber>1029384756</CancellationNumber>
    <DateCreatedUtc>2012-07-22T11:55:42</DateCreatedUtc>
    <DateCancelledUtc>2012-07-25T14:21:35</DateCancelledUtc>
    <DateModifiedUtc>2012-07-22T11:55:42</DateModifiedUtc>
    <UpgradedDateTime <span class="xml-attribute">xsi:nil=<span class="xml-value">&quot;true&quot;/>
    <IsUpgradeAllowed <span class="xml-attribute">xsi:nil=<span class="xml-value">&quot;true&quot;/>
    <FrequentTravelerId/>
    <StartCityCode>SEA</StartCityCode>
    <EndCityCode>SEA</EndCityCode>
    <StartLocation>SEA</StartLocation>
    <EndLocation>SEA</EndLocation>
    <Class>E</Class>
    <Body>C</Body>
    <Transmission>M</Transmission>
    <AirCondition>R</AirCondition>
    <PhoneNumber/>
    <NumPersons <span class="xml-attribute">xsi:nil=<span class="xml-value">&quot;true&quot;/>
    <NumCars>1</NumCars>
    <DiscountCode>346660</DiscountCode>
    <Charges>
        <Fixed>
            <Description>Dropoff Fee</Description>
            <Currency>USD</Currency>
            <Amount>0.0000</Amount>
            <StartDateLocal <span class="xml-attribute">xsi:nil=<span class="xml-value">&quot;true&quot;/>
            <IsPaid <span class="xml-attribute">xsi:nil=<span class="xml-value">&quot;true&quot;/>
            <SemanticsCode>DROPOFFFEE</SemanticsCode>
            <SemanticsVendorType>C</SemanticsVendorType>
        </Fixed>
        <RateWithAllowance>
            <Currency>USD</Currency>
            <Amount>44.0000</Amount>
            <StartDateLocal>2013-12-21T12:00:00</StartDateLocal>
            <IsPaid <span class="xml-attribute">xsi:nil=<span class="xml-value">&quot;true&quot;/>
            <SemanticsCode>DAYS</SemanticsCode>
            <SemanticsVendorType>C</SemanticsVendorType>
            <PerUnit>DAY</PerUnit>
            <NumUnits>1.0000</NumUnits>
            <AllowanceUnit/>
            <AllowanceNumUnits>250.0000</AllowanceNumUnits>
            <AllowanceAmount>0.2400</AllowanceAmount>
            <AllowanceIsUnlimited>false</AllowanceIsUnlimited>
        </RateWithAllowance>
    </Charges>
    <Remarks/>
    <PerDiemLocation/>
</Car>
</pre>
<br />
