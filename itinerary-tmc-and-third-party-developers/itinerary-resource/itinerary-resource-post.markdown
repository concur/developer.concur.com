
        <div id="main" class="container">
            <div>
                            </div>
            <div class="row">
                <div class="span12">
<div class="breadcrumbs"><a href="/">Home</a>Itinerary Resource: POST</div>
                </div>
            </div>

            <div id="content-wrapper">
<!-- <div class="row"> -->
                <div id="content" class="span9">
            # Itinerary Resource: POST
                    <div class="section">
                    <div id="node-515" class="node clear-block">


    
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
.STRING_LITERAL {color: #ce7b00}</style>This resource supports the following POST actions:

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
Creates a new trip or updates an existing trip. A new trip will be created if the trip dates span no existing trip and the request doesn't include a tripId. If a tripId is included in the uri it will update the specified trip. The full trip information is included in the update request, which replaces the existing trip.
                    This endpoint can be used to create trips for a user that is not the OAuth consumer. This is most often done when a travel supplier or Travel Management Company needs to create a trip on behalf of a user. The supplier or TMC must be registered with Concur and have a Concur account that has one of the following user roles: Web Services Administrator for Professional, or Can Administer for Standard.
### 
                    Agency Proposals
Travel Management Companies for Concur clients with the Agency Proposal feature of Travel Request can send proposed itineraries using the Itinerary web service. The TMC will indicate that the itinerary is a proposal using the **TripStatus** element. The request must also include the **CustomAttributes** element and its child elements.
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
* 
                        **userid_type=login_id&amp;userid_value={<em>loginID</em>}**<br />
                        The Concur loginID of the user that owns the trip. Can be used when creating a new trip or updating an existing trip. The userid_type and userid_value parameters can only be used if the OAuth consumer has the user role listed above.

                Examples:<br />
                **<span class="codeexample">**To post a new trip for the OAuth consumer:****<br />
                <a href="https://www.concursolutions.com/api/travel/trip/v1.1" title="https://www.concursolutions.com/api/travel/trip/v1.1">https://www.concursolutions.com/api/travel/trip/v1.1</a>
                **<span class="codeexample">**To update a trip for the OAuth consumer:****<br />
                https://www.concursolutions.com/api/travel/trip/v1.1?tripId={<em>tripId</em>}
                ****To post a trip for a user other than the OAuth consumer:****<br />
                https://www.concursolutions.com/api/travel/trip/v1.1?userid_type=login_id&amp;userid_value={<em>loginID</em>}</td>
</tr>
<tr class="GrayTableHead">
<td>
                Request Headers - Required</td>
<td>
                Request Headers - Optional</td>
</tr>
<tr>
<td width="50%">
                Authorization header with OAuth token for valid Concur user. To post trips for users other than the OAuth consumer, the OAuth consumer must have one of the following user roles in Concur: Company Administrator or Web Services Administrator for Professional, or Can Administer for Standard.</td>
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
                                Name of the trip. Maximum length: 255 characters.</td>
</tr>
<tr>
<td valign="top">
                                TripStatus</td>
<td valign="top">
                                The status of the itinerary. One of the following:<br />
                                0 - Confirmed<br />
                                1 - Ticketed<br />
                                2 - Canceled<br />
                                6 - Proposal<br />
                                7 - Booked Proposal</td>
</tr>
<tr class="GrayTableHead">
<td colspan="2" valign="top">
                                Required Elements for Agency Proposal</td>
</tr>
<tr>
<td valign="top">
                                ClientLocator</td>
<td valign="top">
                                The unique identifier for the batch of proposals. All proposals in the batch should have the same value.</td>
</tr>
<tr>
<td valign="top">
                                TravelRequestId</td>
<td valign="top">
                                The identifier for the travel request that the proposal is associated with.</td>
</tr>
<tr>
<td valign="top">
                                CustomAttributes</td>
<td valign="top">
This parent element has two **CustomAttribute** child elements, with the following child elements:
<table border="1" bordercolor="#dbdbdb" cellpadding="3" cellspacing="0" width="100%">
<tbody>
<tr>
<td valign="top">
                                                DataType</td>
<td valign="top">
                                                The value for this element is **Numeric**.</td>
</tr>
<tr>
<td valign="top" width="20%">
                                                Name</td>
<td valign="top" width="70%">
                                                For the first CustomAttribute element: **ProposalBatchSize**. For the second CustomAttribute element: **ProposalSequenceIndex**</td>
</tr>
<tr>
<td height="96" valign="top">
                                                Data</td>
<td valign="top">
                                                For the **ProposalBatchSize**: The number of proposals in the batch. Maximum: 3<br />
                                                For the**ProposalSequenceIndex**: The index of the proposal in the batch of proposals.</td>
</tr>
<tr>
<td valign="top">
                                                DisplayOnItinerary</td>
<td valign="top">
                                                The value for this element is **true**.</td>
</tr>
<tr>
<td valign="top">
                                                DisplayTitle</td>
<td valign="top">
                                                This element should be empty.</td>
</tr>
<tr>
<td valign="top">
                                                ExternalId</td>
<td valign="top">
                                                This element should be empty.</td>
</tr>
</tbody>
</table>
</td>
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
                                User supplied comments if the trip is cancelled. 256 Characters Maximum</td>
</tr>
<tr>
<td valign="top">
                                <span class="codeexample">Comments</td>
<td valign="top">
                                Comments on the itinerary. 512 Characters Maximum</td>
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
                                IsPersonal</td>
<td valign="top">
                                Whether the trip is a Business or Leisure trip.</td>
</tr>
<tr>
<td valign="top">
                                ProjectName</td>
<td valign="top">
                                The associated project name for the trip. Maximum length: 255 characters.</td>
</tr>
<tr>
<td valign="top">
                                RuleViolations</td>
<td valign="top">
                                The list of rule violations associated with the itinerary. This parent element contains a <RuleViolation> child element for each associated rule violation.</td>
</tr>
</tbody>
</table>

<table border="1" bordercolor="#dbdbdb" cellpadding="3" cellspacing="0" width="100%">
<tbody>
<tr class="GrayTableHead">
<td colspan="2" valign="top">
                                <a id="bookingelem" name="bookingelem"></a>Booking Elements</td>
</tr>
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
                                <span class="codeexample">BookingSource</td>
<td valign="top">
                                The name of the booking source for this booking. A booking source is a textual name the system uses to track where a booking took place. This could be a GDS, OTA, Vendor code for Supplier website, or Supplier Direct Connect API.</td>
</tr>
<tr>
<td valign="top">
                                RecordLocator</td>
<td valign="top">
                                The unique identifier for the booking. Send the value for an existing booking to update an existing trip. This value is returned in the RecordLocator element by the <a href="https://developer.concur.com/node/512">Post Booking Details</a> function.</td>
</tr>
<tr class="GrayTableHead">
<td colspan="2" valign="top">
                                Optional Elements</td>
</tr>
<tr>
<td valign="top">
                                BookingOwner</td>
<td valign="top">
                                Indicates the tool that supplied the booking to Concur Travel.</td>
</tr>
<tr>
<td valign="top">
                                Source</td>
<td valign="top">
                                Obsolete, supported for backward compatibility.</td>
</tr>
<tr>
<td valign="top">
                                <span class="codeexample">DateBookedLocal</td>
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
                                The pickup location for the booked ticket, if available.</td>
</tr>
<tr>
<td valign="top">
                                TicketPickupNumber</td>
<td valign="top">
                                The confirmation number for the booked ticket, if available.</td>
</tr>
<tr>
<td valign="top">
                                AirfareQuotes</td>
<td valign="top">
                                List of stored airfare quotes for this booking.</td>
</tr>
<tr>
<td valign="top">
                                Airline Tickets</td>
<td valign="top">
                                List of airline tickets for this booking.</td>
</tr>
<tr>
<td valign="top">
                                Charges</td>
<td valign="top">
                                List of charges for this booking.</td>
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
                                                Required</td>
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
                                                Optional</td>
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
                                                The user's full name as entered in the booking tool if different from the name in the database.</td>
</tr>
<tr>
<td valign="top">
                                                FrequentTravelerProgram</td>
<td valign="top">
                                                Passenger's loyalty programs.</td>
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
                                This parent element will contain at least one of the following child elements: **Air**, **Car**, **Hotel**, **Dining**, **Ride**, **Rail**, **Parking**, **Event**.
Refer to <a href="https://developer.concur.com/node/555">Booking Object Elements</a> for more information about the child elements contained in the booking elements.
</td>
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
<td valign="top">
                                Warning</td>
<td valign="top">
                                The warnings associated with the booking.</td>
</tr>
<tr>
<td valign="top">
                                WebAddresses</td>
<td valign="top">
                                List of web addresses such as emails, pickup urls, etc.. associated with this booking.</td>
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
POST /api/travel/trip/v1.1?userid_type=login_id<span class="ST0">&amp;userid_value=cm@example.com HTTPS 1.1
Host: <a href="http://www.concursolutions.com" title="www.concursolutions.com">www.concursolutions.com</a>
Authorization: OAuth {access token} 
... 
    
<Itinerary <span class="xml-attribute">xmlns=<span class="xml-value">&quot;<span class="xml-value">http://www.concursolutions.com/api/travel/trip/2010/06<span class="xml-value">&quot;>
    <ClientLocator>KK-CNQ-1M1P6-5HJ</ClientLocator>
    <ItinSourceName>ConcurConnectAPI</ItinSourceName>
    <TripName>Trip from Dallas to Seattle</TripName>
    <Comments />
    <StartDateLocal>2013-12-21T07:25:00</StartDateLocal>
    <EndDateLocal>2013-12-24T23:59:00</EndDateLocal>
    <BookedByFirstName>Chris</BookedByFirstName>
    <BookedByLastName>Miller</BookedByLastName>
    <Bookings>
        <Booking>
            <Segments>
                <Car>
                    <Vendor>CQ</Vendor>
                    <Status>HK</Status>
                    <StartDateLocal>2013-12-21T12:00:00</StartDateLocal>
                    <EndDateLocal>2013-12-24T12:00:00</EndDateLocal>
                    <ConfirmationNumber>F1672664579</ConfirmationNumber>
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
            <BookingSource>TravelBookings.com</BookingSource>
            <DateBookedLocal>2013-11-10T13:01:00</DateBookedLocal>
            <ItinSourceName>ConcurConnectAPI</ItinSourceName>
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
                    <RateCode>LV4</RateCode>
                    <Name>CONCUR HOTEL</Name>
                    <HotelPropertyId>CONQ</HotelPropertyId>
                    <CheckinTime>03:00 PM</CheckinTime>
                    <CheckoutTime>12:00 PM</CheckoutTime>
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
            <BookingSource>TravelBookings.com</BookingSource>
            <DateBookedLocal>2013-11-10T13:01:00</DateBookedLocal>
            <OriginalItinLocator>33491211</OriginalItinLocator>
            <ItinSourceName>ConcurConnectAPI</ItinSourceName>
            <PassengerCount>1</PassengerCount>
        </Booking>
    </Bookings>
</Itinerary>
</pre>####
    XML Example Request of Agency Proposal
<pre class="overflow_box">
POST https://www.concursolutions.com/api/travel/trip/v1.1?userid_type=login_id<span class="ST0">&amp;userid_value=cm@example.com HTTPS 1.1
Authorization: OAuth {access token} 
... 
    
<Itinerary <span class="xml-attribute">xmlns=<span class="xml-value">&quot;<span class="xml-value">http://www.concursolutions.com/api/travel/trip/2010/06<span class="xml-value">&quot;>
    <ClientLocator>KK-CNQ-1M1P6-5HJ</ClientLocator>
    <ItinSourceName>ConcurConnectAPI</ItinSourceName>
    <TripName>Trip from Dallas to Seattle</TripName>
    <Comments />
    <StartDateLocal>2013-12-21T07:25:00</StartDateLocal>
    <EndDateLocal>2013-12-24T23:59:00</EndDateLocal>
    <BookedByFirstName>Chris</BookedByFirstName>
    <BookedByLastName>Miller</BookedByLastName> 
    <TripStatus>7</TripStatus> 
    <TravelRequestId>3339</TravelRequestId> 
    <CustomAttributes>
        <CustomAttribute>
            <ExternalId /> 
            <DataType>Numeric</DataType> 
            <Name>ProposalBatchSize</Name> 
            <DisplayTitle /> 
            <Data>3</Data> 
            <DisplayOnItinerary>true</DisplayOnItinerary> 
        </CustomAttribute> 
        <CustomAttribute>
            <ExternalId /> 
            <DataType>Numeric</DataType> 
            <Name>ProposalSequenceIndex</Name> 
            <DisplayTitle /> 
            <Data>1</Data> 
            <DisplayOnItinerary>true</DisplayOnItinerary> 
        </CustomAttribute>
    </CustomAttributes>
    <Bookings>
        <Booking>
            <Segments>
                <Car>
                    <Vendor>CQ</Vendor>
                    <Status>HK</Status>
                    <StartDateLocal>2013-12-21T12:00:00</StartDateLocal>
                    <EndDateLocal>2013-12-24T12:00:00</EndDateLocal>
                    <ConfirmationNumber>F1672664579</ConfirmationNumber>
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
            <BookingSource>TravelBookings.com</BookingSource>
            <DateBookedLocal>2013-11-10T13:01:00</DateBookedLocal>
            <ItinSourceName>ConcurConnectAPI</ItinSourceName>
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
                    <RateCode>LV4</RateCode>
                    <Name>CONCUR HOTEL</Name>
                    <HotelPropertyId>CONQ</HotelPropertyId>
                    <CheckinTime>03:00 PM</CheckinTime>
                    <CheckoutTime>12:00 PM</CheckoutTime>
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
            <BookingSource>TravelBookings.com</BookingSource>
            <DateBookedLocal>2013-11-10T13:01:00</DateBookedLocal>
            <OriginalItinLocator>33491211</OriginalItinLocator>
            <ItinSourceName>ConcurConnectAPI</ItinSourceName>
            <PassengerCount>1</PassengerCount>
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
####
                    Agency Proposal
The response will include the **CustomAttributes** element and its child elements if the request was an Agency Proposal.
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
    XML Example of Successful Response for Agency Proposal
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
    <CustomAttributes>
        <CustomAttribute>
            <ExternalId /> 
            <DataType>Numeric</DataType> 
            <Name>ProposalBatchSize</Name> 
            <DisplayTitle /> 
            <Data>3</Data> 
            <DisplayOnItinerary>true</DisplayOnItinerary> 
        </CustomAttribute> 
        <CustomAttribute>
            <ExternalId /> 
            <DataType>Numeric</DataType> 
            <Name>ProposalSequenceIndex</Name> 
            <DisplayTitle /> 
            <Data>1</Data> 
            <DisplayOnItinerary>true</DisplayOnItinerary> 
        </CustomAttribute>
    </CustomAttributes>
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
                Cancels all segments in the supplied trip.
                This endpoint can be used to cancel trips for a user that is not the OAuth consumer. This is most often done when a travel supplier or Travel Management Company needs to cancel a trip on behalf of a user. The supplier or TMC must be registered with Concur and have a Concur account with one of the following user roles: Web Services Administrator for Professional, or Can Administer for Standard.</td>
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
<td colspan="2">

* 
                        **userid_type=login_id&amp;userid_value={<em>loginID</em>}**<br />
                        The Concur loginID of the user that owns the trip. The userid_type and userid_value parameters can only be used if the OAuth consumer has the user role listed above.

Example:<br />
                    https://www.concursolutions.com/api/travel/trip/v1.1/cancel?tripId={<em>tripId</em>}&amp;userid_type=login_id&amp;userid_value={<em>loginID</em>}
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
    <BookedVia>EveryGDS</BookedVia>
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
            <DateModifiedUtc>2012-07-24T19:15:52</DateModifiedUtc>
            <DateBookedLocal>2013-11-10T13:01:00</DateBookedLocal>
            <ItinSourceName>TravelSupplier</ItinSourceName>
            <PassengerCount>1</PassengerCount>
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
            <DateModifiedUtc>2012-07-24T19:15:52</DateModifiedUtc>
            <DateBookedLocal>2013-11-10T13:01:00</DateBookedLocal>
            <OriginalItinLocator>33491211</OriginalItinLocator>
            <ItinSourceName>ConcurTravel</ItinSourceName>
            <PassengerCount>1</PassengerCount>
        </Booking>
    </Bookings>
</Itinerary>
</pre>
