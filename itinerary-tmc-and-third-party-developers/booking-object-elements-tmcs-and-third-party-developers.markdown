
        <div id="main" class="container">
            <div>
                            </div>
            <div class="row">
                <div class="span12">
<div class="breadcrumbs"><a href="/">Home</a>Booking Object Elements - TMCs and Third-party Developers</div>
                </div>
            </div>

            <div id="content-wrapper">
<!-- <div class="row"> -->
                <div id="content" class="span9">
            # Booking Object Elements - TMCs and Third-party Developers
                    <div class="section">
                    <div id="node-555" class="node clear-block">


    
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
.STRING_LITERAL {color: #ce7b00}</style><blockquote>
The booking elements contain many child elements. For ease of use, these elements are divided into the Core Elements, which are the most frequently used, and Additional Elements, which are not often used but are supported by the Itinerary web service. Some elements only appear if the travel supplier created the booking. Elements are marked as required if they must be supplied for a new booking.
**NOTE**: TripLink - Open Booking suppliers see a targeted subset of these fields. Refer to the documentation <a href="https://developer.concur.com/node/546">here</a> for the TripLink - Open Booking supplier booking object elements.

<<a href="#air">Air</a>> <<a href="#car">Car</a>> <<a href="#dining">Dining</a>> <<a href="#hotel">Hotel</a>> <<a href="#parking">Parking</a>> <<a href="#rail">Rail</a>> <<a href="#ride">Ride</a>><<a href="#travel">Travel</a>>

### 
        <a id="air" name="air"></a>Air Booking Elements
<table border="1" bordercolor="#dbdbdb" cellpadding="3" cellspacing="0" width="90%">
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
                    ClassOfService</td>
<td valign="top">
                    The class of the booking.</td>
</tr>
<tr>
<td valign="top">
                    ConfirmationNumber</td>
<td valign="top">
                    The record locator or confirmation number for the flight from the airline.</td>
</tr>
<tr>
<td valign="top">
                    EndCityCode</td>
<td valign="top">
                    The<a href="http://www.iata.org/publications/Pages/code-search.aspx"> IATA airport code</a> for the end city of the booking.</td>
</tr>
<tr>
<td valign="top">
                    EndDateLocal</td>
<td valign="top">
                    The booking ending time and date, in the booking location's local time. Format: YYYY-MM-DDThh:mm:ss</td>
</tr>
<tr>
<td valign="top">
                    FlightNumber</td>
<td valign="top">
                    The flight number for the booking.</td>
</tr>
<tr>
<td valign="top">
                    StartCityCode</td>
<td valign="top">
                    The <a href="http://www.iata.org/publications/Pages/code-search.aspx">IATA airport code</a> for the starting address for the booking.</td>
</tr>
<tr>
<td valign="top">
                    StartDateLocal</td>
<td valign="top">
                    The booking starting time and date, in the booking location's local time. Format: YYYY-MM-DDThh:mm:ss</td>
</tr>
<tr>
<td valign="top">
                    Vendor</td>
<td valign="top">
                    The two letter GDS vendor code. Use $$ when not available.</td>
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
                    CancellationNumber</td>
<td valign="top">
                    The cancellation number from the vendor. This field should be set when you cancel a segment.</td>
</tr>
<tr>
<td valign="top">
                    CancellationPolicy</td>
<td valign="top">
                    The cancellation policy from the vendor.</td>
</tr>
<tr>
<td valign="top">
                    Charges</td>
<td valign="top">
                    The charges for this booking. Refer to the <a href="#charges">Charges Child Elements</a> table.</td>
</tr>
<tr>
<td valign="top">
                    DateCancelledUtc</td>
<td valign="top">
                    The date the booking was cancelled, in UTC. Format: YYYY-MM-DDThh:mm:ss</td>
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
                    The date the booking was modified, in UTC. Format: YYYY-MM-DDThh:mm:ss</td>
</tr>
<tr>
<td valign="top">
                    EndDateUtc</td>
<td valign="top">
                    The booking ending time and date, in UTC. Format: YYYY-MM-DDThh:mm:ss</td>
</tr>
<tr>
<td valign="top">
                    EndGate</td>
<td valign="top">
                    The arrival gate for the booking.</td>
</tr>
<tr>
<td valign="top">
                    EndTerminal</td>
<td valign="top">
                    The arrival terminal for the booking.</td>
</tr>
<tr>
<td valign="top">
                    LegId</td>
<td valign="top">
                    The leg ID of the booking. Leg IDs do not change on a connection. For each unique leg ID in the trip, all flights subsequent to the first segment with the same leg ID are connections.</td>
</tr>
<tr>
<td valign="top">
                    Seats</td>
<td valign="top">
                    The seats for the booking. This parent element contains an **AirSeat** element for each included seat. The **AirSeat** element contains the following child elements:
<table border="1" bordercolor="#dbdbdb" cellpadding="3" cellspacing="0" width="100%">
<tbody>
<tr>
<td valign="top">
                                    PassengerRph</td>
<td valign="top">
                                    The passenger assigned to the seat.</td>
</tr>
<tr>
<td valign="top">
                                    SeatNumber</td>
<td valign="top">
                                    The number of the seat.</td>
</tr>
</tbody>
</table>
</td>
</tr>
<tr>
<td valign="top">
                    StartDateUtc</td>
<td valign="top">
                    The booking starting time and date, in UTC. Format: YYYY-MM-DDThh:mm:ss</td>
</tr>
<tr>
<td valign="top">
                    StartGate</td>
<td valign="top">
                    The departure gate for the booking.</td>
</tr>
<tr>
<td valign="top">
                    StartTerminal</td>
<td valign="top">
                    The departure terminal for the booking.</td>
</tr>
<tr>
<td valign="top">
                    Status</td>
<td valign="top">
                    The GDS based booking status for the segment such as HK, HL, BK, etc.</td>
</tr>
<tr>
<td valign="top">
                    TimeZone</td>
<td valign="top">
                    The time zone of the booking. Format: One of the <a href="#tz">supported Olson or Windows Time Zones</a>.</td>
</tr>
<tr class="GrayTableHead">
<td colspan="2" valign="top">
                    Additional Elements - Optional</td>
</tr>
<tr class="GrayTableHead">
<td valign="top">
                    Element</td>
<td valign="top">
                    Description</td>
</tr>
<tr>
<td valign="top">
                    AircraftCode</td>
<td valign="top">
                    The code for the aircraft type.</td>
</tr>
<tr>
<td valign="top">
                    Bags</td>
<td valign="top">
                    The number of bags included in the booking.</td>
</tr>
<tr>
<td valign="top">
                    Cabin</td>
<td valign="top">
                    The section of the airplane for the booking.</td>
</tr>
<tr>
<td valign="top">
                    CarbonEmissionLbs</td>
<td valign="top">
                    The pounds of carbon emission for this booking.</td>
</tr>
<tr>
<td valign="top">
                    CarbonModel</td>
<td valign="top">
                    The model used to calculate the carbon emissions.</td>
</tr>
<tr>
<td valign="top">
                    CheckedBaggage</td>
<td valign="top">
                    Whether the booking includes checked baggage.</td>
</tr>
<tr>
<td valign="top">
                    Duration</td>
<td valign="top">
                    The duration of the booked flight.</td>
</tr>
<tr>
<td valign="top">
                    ETicket</td>
<td valign="top">
                    Whether the booking has an e-ticket. Format: Y/N</td>
</tr>
<tr>
<td valign="top">
                    IsOpenSegment</td>
<td valign="top">
                    Whether the segment is open. Format: True/False</td>
</tr>
<tr>
<td valign="top">
                    IsPreferredVendor</td>
<td valign="top">
                    If the airline is marked as a preferred property by the company. Format: True/False</td>
</tr>
<tr>
<td valign="top">
                    IsUpgradeAllowed</td>
<td valign="top">
                    Whether the booking can be upgraded. Format: True/False</td>
</tr>
<tr>
<td valign="top">
                    Meals</td>
<td valign="top">
                    The meals included in the booking.</td>
</tr>
<tr>
<td valign="top">
                    Miles</td>
<td valign="top">
                    The number of miles included in the booking.</td>
</tr>
<tr>
<td valign="top">
                    Notes</td>
<td valign="top">
                    Additional details about the booking.</td>
</tr>
<tr>
<td valign="top">
                    OpenSegment</td>
<td valign="top">
                    Additional information about the open segment.</td>
</tr>
<tr>
<td valign="top">
                    OperatedByFlightNumber</td>
<td valign="top">
                    Flight Number provided by the airline operating the flight on behalf of the booked airline.</td>
</tr>
<tr>
<td valign="top">
                    OperatedByVendor</td>
<td valign="top">
                    The airline operating the flight on behalf of the booked airline.</td>
</tr>
<tr>
<td valign="top">
                    OperatedByVendorName</td>
<td valign="top">
                    The name of the airline operating the flight on behalf of the booked airline.</td>
</tr>
<tr>
<td valign="top">
                    Services</td>
<td valign="top">
                    The services included in the booking.</td>
</tr>
<tr>
<td valign="top">
                    SpecialInstructions</td>
<td valign="top">
                    Additional instructions regarding the booking.</td>
</tr>
<tr>
<td valign="top">
                    UpgradedDateTime</td>
<td valign="top">
                    The date and time the booking was upgraded. Format: YYYY-MM-DDThh:mm:ss</td>
</tr>
</tbody>
</table>

####
        <a id="car" name="car"></a>Car Booking Elements
<table border="1" bordercolor="#dbdbdb" cellpadding="3" cellspacing="0" width="90%">
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
                    ConfirmationNumber</td>
<td valign="top">
                    The confirmation number from the vendor.</td>
</tr>
<tr>
<td valign="top">
                    EndDateLocal</td>
<td valign="top">
                    The booking ending time and date, in the booking location's local time. Format: YYYY-MM-DDThh:mm:ss</td>
</tr>
<tr>
<td valign="top">
                    StartDateLocal</td>
<td valign="top">
                    The booking starting time and date, in the booking location's local time. Format: YYYY-MM-DDThh:mm:ss</td>
</tr>
<tr>
<td valign="top">
                    Vendor</td>
<td valign="top">
                    The two letter GDS vendor code.</td>
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
                    CancellationNumber</td>
<td valign="top">
                    The cancellation number from the vendor. This field should be set when you cancel a segment.</td>
</tr>
<tr>
<td valign="top">
                    CancellationPolicy</td>
<td valign="top">
                    The cancellation policy from the vendor.</td>
</tr>
<tr>
<td valign="top">
                    Charges</td>
<td valign="top">
                    The charges for this booking. Refer to the <a href="#charges">Charges Child Elements</a> table.</td>
</tr>
<tr>
<td valign="top">
                    Currency</td>
<td valign="top">
                    The <a href="http://en.wikipedia.org/wiki/ISO_4217">3-letter ISO 4217 currency code</a> for the booking.</td>
</tr>
<tr>
<td valign="top">
                    DailyRate</td>
<td valign="top">
                    The daily rate for the booking.</td>
</tr>
<tr>
<td valign="top">
                    DateCancelledUtc</td>
<td valign="top">
                    The date the booking was cancelled, in UTC. Format: YYYY-MM-DDThh:mm:ss</td>
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
                    The date the booking was modified, in UTC. Format: YYYY-MM-DDThh:mm:ss</td>
</tr>
<tr>
<td valign="top">
                    EndCityCode</td>
<td valign="top">
                    The <a href="http://www.iata.org/publications/Pages/code-search.aspx">IATA airport code</a> for the ending address for the booking.</td>
</tr>
<tr>
<td valign="top">
                    EndDateUtc</td>
<td valign="top">
                    The booking ending time and date, in UTC. Format: YYYY-MM-DDThh:mm:ss</td>
</tr>
<tr>
<td valign="top">
                    EndLatitude</td>
<td valign="top">
                    The latitude for the ending location of the booking.</td>
</tr>
<tr>
<td valign="top">
                    EndLongitude</td>
<td valign="top">
                    The longitude for the ending location of the booking.</td>
</tr>
<tr>
<td valign="top">
                    Notes</td>
<td valign="top">
                    Additional information about the booking.</td>
</tr>
<tr>
<td valign="top">
                    PhoneNumber</td>
<td valign="top">
                    The phone number for the user.</td>
</tr>
<tr>
<td valign="top">
                    RateCode</td>
<td valign="top">
                    The rate code for the booking.</td>
</tr>
<tr>
<td valign="top">
                    StartCityCode</td>
<td valign="top">
                    The <a href="http://www.iata.org/publications/Pages/code-search.aspx">IATA airport code</a> for the starting address for the booking.</td>
</tr>
<tr>
<td valign="top">
                    StartDateUtc</td>
<td valign="top">
                    The booking starting time and date, in UTC. Format: YYYY-MM-DDThh:mm:ss</td>
</tr>
<tr>
<td valign="top">
                    StartLatitude</td>
<td valign="top">
                    The latitude for the starting location of the booking.</td>
</tr>
<tr>
<td valign="top">
                    StartLongitude</td>
<td valign="top">
                    The longitude for the starting location of the booking.</td>
</tr>
<tr>
<td valign="top">
                    Status</td>
<td valign="top">
                    The booking status.</td>
</tr>
<tr>
<td valign="top">
                    TimeZone</td>
<td valign="top">
                    The time zone of the booking. Format: One of the <a href="#tz">supported Olson or Windows Time Zones</a>.</td>
</tr>
<tr>
<td valign="top">
                    TotalRate</td>
<td valign="top">
                    The total rate amount of the booking.</td>
</tr>
<tr>
<td valign="top">
                    VendorName</td>
<td valign="top">
                    The name of the vendor. When using the Unknown Vendor Code ($$), this value appears as the vendor in the itinerary.</td>
</tr>
<tr class="GrayTableHead">
<td colspan="2" valign="top">
                    Additional Elements - Optional</td>
</tr>
<tr class="GrayTableHead">
<td valign="top">
                    Element</td>
<td valign="top">
                    Description</td>
</tr>
<tr>
<td valign="top">
                    AirCondition</td>
<td valign="top">
                    The character code that indicates if car has air conditioner. R for AC, N for No AC</td>
</tr>
<tr>
<td valign="top">
                    Body</td>
<td valign="top">
                    The character code to indicate how many passengers the car can seat.</td>
</tr>
<tr>
<td valign="top">
                    Class</td>
<td valign="top">
                    Character code to indicate the class of the car e.g. if it is economy, full size, compact, etc. Varies by Vendor</td>
</tr>
<tr>
<td valign="top">
                    DiscountCode</td>
<td valign="top">
                    The discount code used by the company/TMC to get a discounted rate.</td>
</tr>
<tr>
<td valign="top">
                    DropoffCollectionAddress1</td>
<td valign="top">
                    The AddressLine1 for the dropoff address when the rental service offers dropoff.</td>
</tr>
<tr>
<td valign="top">
                    DropoffCollectionAddressType</td>
<td valign="top">
                    </td>
</tr>
<tr>
<td valign="top">
                    DropoffCollectionCategory</td>
<td valign="top">
                    </td>
</tr>
<tr>
<td valign="top">
                    DropoffCollectionCity</td>
<td valign="top">
                    City for the dropoff address when the rental service offers dropoff.</td>
</tr>
<tr>
<td valign="top">
                    DropoffCollectionCityCode</td>
<td valign="top">
                    The <a href="http://www.iata.org/publications/Pages/code-search.aspx">IATA airport code</a> for the dropoff address when the rental service offers dropoff.</td>
</tr>
<tr>
<td valign="top">
                    DropoffCollectionCountry</td>
<td valign="top">
                    The country for the dropoff address when the rental service offers dropoff.</td>
</tr>
<tr>
<td valign="top">
                    DropoffCollectionLatitude</td>
<td valign="top">
                    The latitude for the dropoff address when the rental service offers dropoff.</td>
</tr>
<tr>
<td valign="top">
                    DropoffCollectionLongitude</td>
<td valign="top">
                    The longitude for the dropoff address when the rental service offers dropoff.</td>
</tr>
<tr>
<td valign="top">
                    DropoffCollectionNumber</td>
<td valign="top">
                    </td>
</tr>
<tr>
<td valign="top">
                    DropoffCollectionPhoneNumber</td>
<td valign="top">
                    The phone number for the dropoff address when the rental service offers dropoff.</td>
</tr>
<tr>
<td valign="top">
                    DropoffCollectionPostalCode</td>
<td valign="top">
                    The postal code for the dropoff address when the rental service offers dropoff.</td>
</tr>
<tr>
<td valign="top">
                    DropoffCollectionState</td>
<td valign="top">
                    The state for the dropoff address when the rental service offers dropoff.</td>
</tr>
<tr>
<td valign="top">
                    EndAddress</td>
<td valign="top">
                    The ending address for the booking.</td>
</tr>
<tr>
<td valign="top">
                    EndAddress2</td>
<td valign="top">
                    The ending address for the booking.</td>
</tr>
<tr>
<td valign="top">
                    EndCity</td>
<td valign="top">
                    The ending address for the booking.</td>
</tr>
<tr>
<td valign="top">
                    EndCloseTime</td>
<td valign="top">
                    The closing time for the dropoff location.</td>
</tr>
<tr>
<td valign="top">
                    EndCountry</td>
<td valign="top">
                    The ending address for the booking.</td>
</tr>
<tr>
<td valign="top">
                    EndLocation</td>
<td valign="top">
                    The dropoff location.</td>
</tr>
<tr>
<td valign="top">
                    EndOpenTime</td>
<td valign="top">
                    The opening time of the dropoff location.</td>
</tr>
<tr>
<td valign="top">
                    EndPhoneNumber</td>
<td valign="top">
                    The phone number of the dropoff location.</td>
</tr>
<tr>
<td valign="top">
                    EndPostalCode</td>
<td valign="top">
                    The ending address for the booking.</td>
</tr>
<tr>
<td valign="top">
                    EndState</td>
<td valign="top">
                    The ending address for the booking.</td>
</tr>
<tr>
<td valign="top">
                    FrequentTravelerId</td>
<td valign="top">
                    The loyalty program ID for the user.</td>
</tr>
<tr>
<td valign="top">
                    IsUpgradeAllowed</td>
<td valign="top">
                    Whether the booking can be upgraded. Format: True/False</td>
</tr>
<tr>
<td valign="top">
                    NumCars</td>
<td valign="top">
                    The number of cars rented.</td>
</tr>
<tr>
<td valign="top">
                    NumPersons</td>
<td valign="top">
                    The number of people including the driver that the rental is for.</td>
</tr>
<tr>
<td valign="top">
                    PickupDeliveryAddress1</td>
<td valign="top">
                    The AddressLine1 for the pickup address when the rental service offers pickup.</td>
</tr>
<tr>
<td valign="top">
                    PickupDeliveryAddressType</td>
<td valign="top">
                    </td>
</tr>
<tr>
<td valign="top">
                    PickupDeliveryCategory</td>
<td valign="top">
                    </td>
</tr>
<tr>
<td valign="top">
                    PickupDeliveryCity</td>
<td valign="top">
                    The city for the pickup address when the rental service offers pickup.</td>
</tr>
<tr>
<td valign="top">
                    PickupDeliveryCityCode</td>
<td valign="top">
                    The <a href="http://www.iata.org/publications/Pages/code-search.aspx">IATA airport code</a> for the pickup address when the rental service offers pickup.</td>
</tr>
<tr>
<td valign="top">
                    PickupDeliveryCountry</td>
<td valign="top">
                    The country for the pickup address when the rental service offers pickup.</td>
</tr>
<tr>
<td valign="top">
                    PickupDeliveryLatitude</td>
<td valign="top">
                    The latitude for the pickup address when the rental service offers pickup.</td>
</tr>
<tr>
<td valign="top">
                    PickupDeliveryLongitude</td>
<td valign="top">
                    The longitude for the pickup address when the rental service offers pickup.</td>
</tr>
<tr>
<td valign="top">
                    PickupDeliveryNumber</td>
<td valign="top">
                    </td>
</tr>
<tr>
<td valign="top">
                    PickupDeliveryPhoneNumber</td>
<td valign="top">
                    The phone number for the pickup address when the rental service offers pickup.</td>
</tr>
<tr>
<td valign="top">
                    PickupDeliveryPostalCode</td>
<td valign="top">
                    The postal code for the pickup address when the rental service offers pickup.</td>
</tr>
<tr>
<td valign="top">
                    PickupDeliveryState</td>
<td valign="top">
                    The state for the pickup address when the rental service offers pickup.</td>
</tr>
<tr>
<td valign="top">
                    RateType</td>
<td valign="top">
                    The rate type for the booking.</td>
</tr>
<tr>
<td valign="top">
                    SpecialEquipment</td>
<td valign="top">
                    Any special equipment required by the renter.</td>
</tr>
<tr>
<td valign="top">
                    SpecialInstructions</td>
<td valign="top">
                    Additional instructions regarding the booking.</td>
</tr>
<tr>
<td valign="top">
                    StartAddress</td>
<td valign="top">
                    The starting address of the booking.</td>
</tr>
<tr>
<td valign="top">
                    StartAddress2</td>
<td valign="top">
                    The starting address for the booking.</td>
</tr>
<tr>
<td valign="top">
                    StartCity</td>
<td valign="top">
                    The starting address for the booking.</td>
</tr>
<tr>
<td valign="top">
                    StartCloseTime</td>
<td valign="top">
                    The closing time for the pickup location.</td>
</tr>
<tr>
<td valign="top">
                    StartCountry</td>
<td valign="top">
                    The starting address for the booking.</td>
</tr>
<tr>
<td valign="top">
                    StartLocation</td>
<td valign="top">
                    The starting location of the booking.</td>
</tr>
<tr>
<td valign="top">
                    StartOpenTime</td>
<td valign="top">
                    The opening time for the pickup location.</td>
</tr>
<tr>
<td valign="top">
                    StartPostalCode</td>
<td valign="top">
                    The starting address for the booking.</td>
</tr>
<tr>
<td valign="top">
                    StartState</td>
<td valign="top">
                    The starting address for the booking.</td>
</tr>
<tr>
<td valign="top">
                    Transmission</td>
<td valign="top">
                    The character code that indicates if the car has auto-transmission. A for Auto, M for Manual</td>
</tr>
<tr>
<td valign="top">
                    UpgradedDateTime</td>
<td valign="top">
                    The date and time the booking was upgraded. Format: YYYY-MM-DDThh:mm:ss</td>
</tr>
</tbody>
</table>

####
        <a id="hotel" name="hotel"></a>Hotel Booking Elements
<table border="1" bordercolor="#dbdbdb" cellpadding="3" cellspacing="0" width="90%">
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
                    ConfirmationNumber</td>
<td valign="top">
                    The confirmation number from the vendor.</td>
</tr>
<tr>
<td valign="top">
                    EndDateLocal</td>
<td valign="top">
                    The booking ending time and date, in the booking location's local time. Format: YYYY-MM-DDThh:mm:ss</td>
</tr>
<tr>
<td valign="top">
                    Name</td>
<td valign="top">
                    The hotel name for the booking.</td>
</tr>
<tr>
<td valign="top">
                    StartCityCode</td>
<td valign="top">
                    The <a href="http://www.iata.org/publications/Pages/code-search.aspx">IATA airport code</a> for the starting address for the booking.</td>
</tr>
<tr>
<td valign="top">
                    StartDateLocal</td>
<td valign="top">
                    The booking starting time and date, in the booking location's local time. Format: YYYY-MM-DDThh:mm:ss</td>
</tr>
<tr>
<td valign="top">
                    Status</td>
<td valign="top">
                    The booking status.</td>
</tr>
<tr>
<td valign="top">
                    Vendor</td>
<td valign="top">
                    The two letter GDS vendor code.</td>
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
                    CancellationNumber</td>
<td valign="top">
                    The cancellation number from the vendor. This field should be set when you cancel a segment.</td>
</tr>
<tr>
<td valign="top">
                    CancellationPolicy</td>
<td valign="top">
                    The cancellation policy from the vendor.</td>
</tr>
<tr>
<td valign="top">
                    Charges</td>
<td valign="top">
                    The charges for this booking. Refer to the <a href="#charges">Charges Child Elements</a> table.</td>
</tr>
<tr>
<td valign="top">
                    CheckinTime</td>
<td valign="top">
                    The check in time for the hotel booking.</td>
</tr>
<tr>
<td valign="top">
                    CheckoutTime</td>
<td valign="top">
                    The check out time for the hotel booking.</td>
</tr>
<tr>
<td valign="top">
                    Currency</td>
<td valign="top">
                    The <a href="http://en.wikipedia.org/wiki/ISO_4217">3-letter ISO 4217 currency code</a> for the booking.</td>
</tr>
<tr>
<td valign="top">
                    DailyRate</td>
<td valign="top">
                    Average per day rate for the hotel. If the rate varies over the duration, it can be specified using the charges model.</td>
</tr>
<tr>
<td valign="top">
                    DateCancelledUtc</td>
<td valign="top">
                    The date the booking was cancelled, in UTC. Format: YYYY-MM-DDThh:mm:ss</td>
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
                    The date the booking was modified, in UTC. Format: YYYY-MM-DDThh:mm:ss</td>
</tr>
<tr>
<td valign="top">
                    EndDateUtc</td>
<td valign="top">
                    The booking ending time and date, in UTC. Format: YYYY-MM-DDThh:mm:ss</td>
</tr>
<tr>
<td valign="top">
                    HotelPropertyId</td>
<td valign="top">
                    The hotel's property ID.</td>
</tr>
<tr>
<td valign="top">
                    Notes</td>
<td valign="top">
                    Additional information about the booking.</td>
</tr>
<tr>
<td valign="top">
                    NumPersons</td>
<td valign="top">
                    The number of people the booking is for.</td>
</tr>
<tr>
<td valign="top">
                    NumRooms</td>
<td valign="top">
                    The number of rooms the booking is for.</td>
</tr>
<tr>
<td valign="top">
                    PhoneNumber</td>
<td valign="top">
                    The phone number for the booking.</td>
</tr>
<tr>
<td valign="top">
                    RateCode</td>
<td valign="top">
                    The rate code for the booking.</td>
</tr>
<tr>
<td valign="top">
                    RoomDescription</td>
<td valign="top">
                    The room description for the booking.</td>
</tr>
<tr>
<td valign="top">
                    RoomType</td>
<td valign="top">
                    The room type for the booking.</td>
</tr>
<tr>
<td valign="top">
                    SpecialInstructions</td>
<td valign="top">
                    Additional instructions regarding the booking.</td>
</tr>
<tr>
<td valign="top">
                    StartAddress</td>
<td valign="top">
                    The starting address of the booking.</td>
</tr>
<tr>
<td valign="top">
                    StartAddress2</td>
<td valign="top">
                    The starting address for the booking.</td>
</tr>
<tr>
<td valign="top">
                    StartCity</td>
<td valign="top">
                    The starting address for the booking.</td>
</tr>
<tr>
<td valign="top">
                    StartCountry</td>
<td valign="top">
                    The starting address for the booking.</td>
</tr>
<tr>
<td valign="top">
                    StartLatitude</td>
<td valign="top">
                    The latitude for the starting location of the booking.</td>
</tr>
<tr>
<td valign="top">
                    StartLongitude</td>
<td valign="top">
                    The longitude for the starting location of the booking.</td>
</tr>
<tr>
<td valign="top">
                    StartPostalCode</td>
<td valign="top">
                    The starting address for the booking.</td>
</tr>
<tr>
<td valign="top">
                    StartState</td>
<td valign="top">
                    The starting address for the booking.</td>
</tr>
<tr>
<td valign="top">
                    StartDateUtc</td>
<td valign="top">
                    The booking starting time and date, in UTC. Format: YYYY-MM-DDThh:mm:ss</td>
</tr>
<tr>
<td valign="top">
                    TimeZone</td>
<td valign="top">
                    The time zone of the booking. Format: One of the <a href="#tz">supported Olson or Windows Time Zones</a>.</td>
</tr>
<tr>
<td valign="top">
                    TotalRate</td>
<td valign="top">
                    The total rate amount of the booking.</td>
</tr>
<tr class="GrayTableHead">
<td colspan="2" valign="top">
                    Additional Elements - Optional</td>
</tr>
<tr class="GrayTableHead">
<td valign="top">
                    Element</td>
<td valign="top">
                    Description</td>
</tr>
<tr>
<td valign="top">
                    EndCityCode</td>
<td valign="top">
                    The <a href="http://www.iata.org/publications/Pages/code-search.aspx">IATA airport code</a> for the ending address for the booking.</td>
</tr>
<tr>
<td valign="top">
                    DiscountCode</td>
<td valign="top">
                    The discount code for the booking.</td>
</tr>
<tr>
<td valign="top">
                    FrequentTravelerId</td>
<td valign="top">
                    The traveler&rsquo;s ID for the frequent traveler reward program.</td>
</tr>
<tr>
<td valign="top">
                    HadDeposit</td>
<td valign="top">
                    Whether the booking had a deposit. Format: true/false</td>
</tr>
<tr>
<td valign="top">
                    IsUpgradeAllowed</td>
<td valign="top">
                    Whether the booking can be upgraded. Format: true/false</td>
</tr>
<tr>
<td valign="top">
                    ModificationCode</td>
<td valign="top">
                    The code for the modification to the booking.</td>
</tr>
<tr>
<td valign="top">
                    PartnerMembershipId</td>
<td valign="top">
                    The membership ID of the partner associated with the booking.</td>
</tr>
<tr>
<td valign="top">
                    PassiveType</td>
<td valign="top">
                    The type of the booking.</td>
</tr>
<tr>
<td valign="top">
                    RateAccess</td>
<td valign="top">
                    The rate access for the booking.</td>
</tr>
<tr>
<td valign="top">
                    RateType</td>
<td valign="top">
                    The rate type for the booking.</td>
</tr>
<tr>
<td valign="top">
                    UpgradedDateTime</td>
<td valign="top">
                    The date and time the booking was upgraded. Format: YYYY-MM-DDThh:mm:ss</td>
</tr>
<tr>
<td valign="top">
                    VendorFlags</td>
<td valign="top">
                    Semi-colon-delimited list of flags for free hotel service flags. E.g. free breakfast (FB), internet (FI), Parking (FP), etc. If they were all present they can be concatenated as - FB;FI;FP;</td>
</tr>
<tr>
<td valign="top">
                    VendorName</td>
<td valign="top">
                    The name of the vendor. When using the Unknown Vendor Code ($$), this value appears as the vendor in the itinerary.</td>
</tr>
</tbody>
</table>

####
        <a id="dining" name="dining"></a>Dining Booking Elements
<table border="1" bordercolor="#dbdbdb" cellpadding="3" cellspacing="0" width="90%">
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
                    ConfirmationNumber</td>
<td valign="top">
                    The confirmation number from the vendor.</td>
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
                    CancellationNumber</td>
<td valign="top">
                    The cancellation number from the vendor. This field should be set when you cancel a segment.</td>
</tr>
<tr>
<td valign="top">
                    Charges</td>
<td valign="top">
                    The charges for this booking. Refer to the <a href="#charges">Charges Child Elements</a> table.</td>
</tr>
<tr>
<td valign="top">
                    DateCancelledUtc</td>
<td valign="top">
                    The date the booking was cancelled, in UTC. Format: YYYY-MM-DDThh:mm:ss</td>
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
                    The date the booking was modified, in UTC. Format: YYYY-MM-DDThh:mm:ss</td>
</tr>
<tr>
<td valign="top">
                    EndDateLocal</td>
<td valign="top">
                    The booking ending time and date, in the booking location's local time. Format: YYYY-MM-DDThh:mm:ss</td>
</tr>
<tr>
<td valign="top">
                    EndDateUtc</td>
<td valign="top">
                    The booking ending time and date, in UTC. Format: YYYY-MM-DDThh:mm:ss</td>
</tr>
<tr>
<td valign="top">
                    FrequentTravelerId</td>
<td valign="top">
                    The loyalty program ID for the user.</td>
</tr>
<tr>
<td valign="top">
                    IsUpgradeAllowed</td>
<td valign="top">
                    Whether the booking can be upgraded. Format: true/false</td>
</tr>
<tr>
<td valign="top">
                    Name</td>
<td valign="top">
                    The name of the restaurant. Maximum length: 80</td>
</tr>
<tr>
<td valign="top">
                    Notes</td>
<td valign="top">
                    Additional information about the booking.</td>
</tr>
<tr>
<td valign="top">
                    NumPersons</td>
<td valign="top">
                    The number of persons for the booking.</td>
</tr>
<tr>
<td valign="top">
                    PhoneNumber</td>
<td valign="top">
                    The restaurant phone number.</td>
</tr>
<tr>
<td valign="top">
                    RestaurantId</td>
<td valign="top">
                    The booking vendor&rsquo;s restaurant ID. Maximum length: 50</td>
</tr>
<tr>
<td valign="top">
                    StartAddress</td>
<td valign="top">
                    The restaurant address. Maximum length: 80</td>
</tr>
<tr>
<td valign="top">
                    StartAddress2</td>
<td valign="top">
                    The restaurant address. Maximum length: 80</td>
</tr>
<tr>
<td valign="top">
                    StartCity</td>
<td valign="top">
                    The restaurant address. Maximum length: 50</td>
</tr>
<tr>
<td valign="top">
                    StartCountry</td>
<td valign="top">
                    The restaurant address.</td>
</tr>
<tr>
<td valign="top">
                    StartDateLocal</td>
<td valign="top">
                    The booking starting time and date, in the booking location's local time. Format: YYYY-MM-DDThh:mm:ss</td>
</tr>
<tr>
<td valign="top">
                    StartDateUtc</td>
<td valign="top">
                    The booking starting time and date, in UTC. Format: YYYY-MM-DDThh:mm:ss</td>
</tr>
<tr>
<td valign="top">
                    StartLatitude</td>
<td valign="top">
                    The latitude of the restaurant.</td>
</tr>
<tr>
<td valign="top">
                    StartLongitude</td>
<td valign="top">
                    The longitude of the restaurant.</td>
</tr>
<tr>
<td valign="top">
                    StartPostalCode</td>
<td valign="top">
                    The restaurant address. Maximum length: 24</td>
</tr>
<tr>
<td valign="top">
                    StartState</td>
<td valign="top">
                    The restaurant address. Maximum length: 50</td>
</tr>
<tr>
<td valign="top">
                    Status</td>
<td valign="top">
                    The status of the segment.</td>
</tr>
<tr>
<td valign="top">
                    TimeZone</td>
<td valign="top">
                    The time zone of the booking. Format: One of the <a href="#tz">supported Olson or Windows Time Zones</a>.</td>
</tr>
<tr>
<td valign="top">
                    UpgradedDateTime</td>
<td valign="top">
                    The date and time the booking was upgraded. Format: YYYY-MM-DDThh:mm:ss</td>
</tr>
<tr>
<td valign="top">
                    Vendor</td>
<td valign="top">
                    The two letter GDS vendor code.</td>
</tr>
<tr>
<td valign="top">
                    VendorName</td>
<td valign="top">
                    The name of the vendor. When using the Unknown Vendor Code ($$), this value appears as the vendor in the itinerary.</td>
</tr>
</tbody>
</table>

####
        <a id="ride" name="ride"></a>Ride Booking Elements
<table border="1" bordercolor="#dbdbdb" cellpadding="3" cellspacing="0" width="90%">
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
                    ConfirmationNumber</td>
<td valign="top">
                    The confirmation number from the vendor.</td>
</tr>
<tr>
<td valign="top">
                    EndCityCode</td>
<td valign="top">
                    The ending <a href="http://www.iata.org/publications/Pages/code-search.aspx">IATA airport code</a> of the booking.</td>
</tr>
<tr>
<td valign="top">
                    StartCityCode</td>
<td valign="top">
                    The starting <a href="http://www.iata.org/publications/Pages/code-search.aspx">IATA airport code</a> of the booking.</td>
</tr>
<tr>
<td valign="top">
                    Vendor</td>
<td valign="top">
                    The two letter GDS vendor code. One of the following codes:
<table border="1" bordercolor="#dbdbdb" cellpadding="3" cellspacing="0" width="100%">
<tbody>
<tr>
<td>
                                    $R</td>
<td>
                                    RideCharge</td>
</tr>
<tr>
<td>
                                    AL</td>
<td>
                                    AddisonLee</td>
</tr>
<tr>
<td>
                                    DG</td>
<td>
                                    DeemGroundLimo</td>
</tr>
<tr>
<td>
                                    GC</td>
<td>
                                    GroundScope</td>
</tr>
<tr>
<td>
                                    GS</td>
<td>
                                    GroundSpan</td>
</tr>
<tr>
<td>
                                    LC</td>
<td>
                                    Limoscom</td>
</tr>
<tr>
<td>
                                    SQ</td>
<td>
                                    SummitQwest</td>
</tr>
<tr>
<td>
                                    SW</td>
<td>
                                    SummitQwest</td>
</tr>
<tr>
<td>
                                    TD</td>
<td>
                                    Tandem</td>
</tr>
<tr>
<td>
                                    TV</td>
<td>
                                    Transvip</td>
</tr>
</tbody>
</table>
</td>
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
                    CancellationNumber</td>
<td valign="top">
                    The cancellation number from the vendor. This field should be set when you cancel a segment.</td>
</tr>
<tr>
<td valign="top">
                    CancellationPolicy</td>
<td valign="top">
                    The cancellation policy from the vendor.</td>
</tr>
<tr>
<td valign="top">
                    Currency</td>
<td valign="top">
                    The <a href="http://en.wikipedia.org/wiki/ISO_4217">3-letter ISO 4217 currency code</a> for the booking.</td>
</tr>
<tr>
<td valign="top">
                    DateCancelledUtc</td>
<td valign="top">
                    The date the booking was cancelled, in UTC. Format: YYYY-MM-DDThh:mm:ss</td>
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
                    The date the booking was modified, in UTC. Format: YYYY-MM-DDThh:mm:ss</td>
</tr>
<tr>
<td valign="top">
                    DropoffInstructions</td>
<td valign="top">
                    Instructions regarding the booking.</td>
</tr>
<tr>
<td valign="top">
                    Duration</td>
<td valign="top">
                    The duration of the booking.</td>
</tr>
<tr>
<td valign="top">
                    EndAddress</td>
<td valign="top">
                    The ending address of the booking.</td>
</tr>
<tr>
<td valign="top">
                    EndAddress2</td>
<td valign="top">
                    The ending address of the booking.</td>
</tr>
<tr>
<td valign="top">
                    EndCity</td>
<td valign="top">
                    The ending address of the booking.</td>
</tr>
<tr>
<td valign="top">
                    EndCountry</td>
<td valign="top">
                    The ending address of the booking.</td>
</tr>
<tr>
<td valign="top">
                    EndDateLocal</td>
<td valign="top">
                    The booking ending time and date, in the booking location's local time. Format: YYYY-MM-DDThh:mm:ss</td>
</tr>
<tr>
<td valign="top">
                    EndDateUtc</td>
<td valign="top">
                    The booking ending time and date, in UTC. Format: YYYY-MM-DDThh:mm:ss</td>
</tr>
<tr>
<td valign="top">
                    EndLatitude</td>
<td valign="top">
                    The latitude for the ending location of the booking.</td>
</tr>
<tr>
<td valign="top">
                    EndLocation</td>
<td valign="top">
                    The ending location of the booking.</td>
</tr>
<tr>
<td valign="top">
                    EndLocationCode</td>
<td valign="top">
                    The ending location code of the booking.</td>
</tr>
<tr>
<td valign="top">
                    EndLocationName</td>
<td valign="top">
                    The ending location name of the booking.</td>
</tr>
<tr>
<td valign="top">
                    EndLongitude</td>
<td valign="top">
                    The longitude of the ending point of the booking.</td>
</tr>
<tr>
<td valign="top">
                    EndPostalCode</td>
<td valign="top">
                    The ending address of the booking.</td>
</tr>
<tr>
<td valign="top">
                    EndState</td>
<td valign="top">
                    The ending address of the booking.</td>
</tr>
<tr>
<td valign="top">
                    IsPersonal</td>
<td valign="top">
                    Whether the segment is for personal travel. Format: true/false.</td>
</tr>
<tr>
<td valign="top">
                    IsUpgradeAllowed</td>
<td valign="top">
                    Whether the booking can be upgraded. Format: true/false</td>
</tr>
<tr>
<td valign="top">
                    MeetingInstructions</td>
<td valign="top">
                    The instructions for the meeting location of the booking.</td>
</tr>
<tr>
<td valign="top">
                    Miles</td>
<td valign="top">
                    The number of miles for the booking.</td>
</tr>
<tr>
<td valign="top">
                    Name</td>
<td valign="top">
                    The name on the booking.</td>
</tr>
<tr>
<td valign="top">
                    Notes</td>
<td valign="top">
                    Additional information about the booking.</td>
</tr>
<tr>
<td valign="top">
                    NumberOfHours</td>
<td valign="top">
                    The number of hours of the booking.</td>
</tr>
<tr>
<td valign="top">
                    NumPersons</td>
<td valign="top">
                    The number of people included in the booking.</td>
</tr>
<tr>
<td valign="top">
                    OperatedByVendor</td>
<td valign="top">
                    The operated by vendor for the booking.</td>
</tr>
<tr>
<td valign="top">
                    PassiveCityCode</td>
<td valign="top">
                    The passive city code of the booking.</td>
</tr>
<tr>
<td valign="top">
                    PhoneNumber</td>
<td valign="top">
                    The ride vendor phone number.</td>
</tr>
<tr>
<td valign="top">
                    PickupInstructions</td>
<td valign="top">
                    Instructions regarding the booking.</td>
</tr>
<tr>
<td valign="top">
                    Rate</td>
<td valign="top">
                    The rate for the booking.</td>
</tr>
<tr>
<td valign="top">
                    RateDescription</td>
<td valign="top">
                    The rate description for the booking.</td>
</tr>
<tr>
<td valign="top">
                    RateNotes</td>
<td valign="top">
                    The rate notes for the booking.</td>
</tr>
<tr>
<td valign="top">
                    RateType</td>
<td valign="top">
                    The rate type for the booking.</td>
</tr>
<tr>
<td valign="top">
                    ReservationId</td>
<td valign="top">
                    The booking vendor&rsquo;s reservation ID.</td>
</tr>
<tr>
<td valign="top">
                    SpecialInstructions</td>
<td valign="top">
                    The special instructions for the ride.</td>
</tr>
<tr>
<td valign="top">
                    StartAddress</td>
<td valign="top">
                    The starting address of the booking.</td>
</tr>
<tr>
<td valign="top">
                    StartAddress2</td>
<td valign="top">
                    The starting address of the booking.</td>
</tr>
<tr>
<td valign="top">
                    StartCity</td>
<td valign="top">
                    The starting address of the booking.</td>
</tr>
<tr>
<td valign="top">
                    StartCountry</td>
<td valign="top">
                    The starting address of the booking.</td>
</tr>
<tr>
<td valign="top">
                    StartDateLocal</td>
<td valign="top">
                    The booking starting time and date, in the booking location's local time. Format: YYYY-MM-DDThh:mm:ss</td>
</tr>
<tr>
<td valign="top">
                    StartDateUtc</td>
<td valign="top">
                    The booking starting time and date, in UTC. Format: YYYY-MM-DDThh:mm:ss</td>
</tr>
<tr>
<td valign="top">
                    StartLatitude</td>
<td valign="top">
                    The latitude of the booking start location.</td>
</tr>
<tr>
<td valign="top">
                    StartLocation</td>
<td valign="top">
                    The starting location of the booking.</td>
</tr>
<tr>
<td valign="top">
                    StartLocationCode</td>
<td valign="top">
                    The code of the starting location of the booking.</td>
</tr>
<tr>
<td valign="top">
                    StartLocationName</td>
<td valign="top">
                    The name of the starting location of the booking.</td>
</tr>
<tr>
<td valign="top">
                    StartLongitude</td>
<td valign="top">
                    The longitude of the booking start location.</td>
</tr>
<tr>
<td valign="top">
                    StartPostalCode</td>
<td valign="top">
                    The starting address of the booking.</td>
</tr>
<tr>
<td valign="top">
                    StartState</td>
<td valign="top">
                    The starting address of the booking.</td>
</tr>
<tr>
<td valign="top">
                    Status</td>
<td valign="top">
                    The status of the segment.</td>
</tr>
<tr>
<td valign="top">
                    TimeZone</td>
<td valign="top">
                    The time zone of the booking. Format: One of the <a href="#tz">supported Olson or Windows Time Zones</a>.</td>
</tr>
<tr>
<td valign="top">
                    UpgradedDateTime</td>
<td valign="top">
                    The date and time the booking was upgraded. Format: YYYY-MM-DDThh:mm:ss</td>
</tr>
<tr>
<td valign="top">
                    VendorName</td>
<td valign="top">
                    The name of the vendor. When using the Unknown Vendor Code ($$), this value appears as the vendor in the itinerary.</td>
</tr>
<tr>
<td valign="top">
                    Charges</td>
<td valign="top">
                    The charges for this booking. Refer to the <a href="#charges">Charges Child Elements</a> table.</td>
</tr>
</tbody>
</table>

    <a id="rail" name="rail"></a>
### 
        Rail Booking
<table border="1" bordercolor="#dbdbdb" cellpadding="3" cellspacing="0" width="90%">
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
                    ConfirmationNumber</td>
<td valign="top">
                    The confirmation number from the vendor.</td>
</tr>
<tr>
<td valign="top">
                    StartDateLocal</td>
<td valign="top">
                    The starting date of travel for this segment, in the local time of to the starting point. Format: YYYY-MM-DDThh:mm:ss</td>
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
                    Amenities</td>
<td valign="top">
                    The booked amenities.</td>
</tr>
<tr>
<td valign="top">
                    Cabin</td>
<td valign="top">
                    The cabin identifier.</td>
</tr>
<tr>
<td valign="top">
                    CancellationNumber</td>
<td valign="top">
                    The cancellation number from the vendor. This field should be set when you cancel a segment.</td>
</tr>
<tr>
<td valign="top">
                    CarbonEmissionLbs</td>
<td valign="top">
                    The pounds of carbon emission for this booking.</td>
</tr>
<tr>
<td valign="top">
                    CarbonModel</td>
<td valign="top">
                    The model used to calculate the carbon emissions.</td>
</tr>
<tr>
<td valign="top">
                    ClassOfService</td>
<td valign="top">
                    The class of the booking.</td>
</tr>
<tr>
<td valign="top">
                    Currency</td>
<td valign="top">
                    The <a href="http://en.wikipedia.org/wiki/ISO_4217">3-letter ISO 4217 currency code</a> for the booking.</td>
</tr>
<tr>
<td valign="top">
                    DateCancelledUtc</td>
<td valign="top">
                    The date the booking was cancelled, in UTC. Format: YYYY-MM-DDThh:mm:ss</td>
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
                    The date the booking was modified, in UTC. Format: YYYY-MM-DDThh:mm:ss</td>
</tr>
<tr>
<td valign="top">
                    DiscountCode</td>
<td valign="top">
                    The discount code for the booking.</td>
</tr>
<tr>
<td valign="top">
                    Duration</td>
<td valign="top">
                    The duration of the trip booked.</td>
</tr>
<tr>
<td valign="top">
                    EndCity</td>
<td valign="top">
                    The end city for the rail trip.</td>
</tr>
<tr>
<td valign="top">
                    EndCityCode</td>
<td valign="top">
                    The <a href="http://www.iata.org/publications/Pages/code-search.aspx">IATA airport code</a> for the end city of the trip.</td>
</tr>
<tr>
<td valign="top">
                    EndCountry</td>
<td valign="top">
                    The country code for the booking.</td>
</tr>
<tr>
<td valign="top">
                    EndDateLocal</td>
<td valign="top">
                    The booking ending time and date, in the booking location's local time. Format: YYYY-MM-DDThh:mm:ss</td>
</tr>
<tr>
<td valign="top">
                    EndDateUtc</td>
<td valign="top">
                    The booking ending time and date, in UTC. Format: YYYY-MM-DDThh:mm:ss</td>
</tr>
<tr>
<td valign="top">
                    EndLatitude</td>
<td valign="top">
                    The latitude of the ending point of the booking.</td>
</tr>
<tr>
<td valign="top">
                    EndLongitude</td>
<td valign="top">
                    The longitude of the ending point of the booking.</td>
</tr>
<tr>
<td valign="top">
                    EndPlatform</td>
<td valign="top">
                    The ending platform location of the booking.</td>
</tr>
<tr>
<td valign="top">
                    EndRailStation</td>
<td valign="top">
                    The code for the ending station of the booking.</td>
</tr>
<tr>
<td valign="top">
                    EndRailStationName</td>
<td valign="top">
                    The name of the ending station of the booking.</td>
</tr>
<tr>
<td valign="top">
                    ETicket</td>
<td valign="top">
                    The e-ticket number.</td>
</tr>
<tr>
<td valign="top">
                    FareType</td>
<td valign="top">
                    The type of fare on the rail booking.</td>
</tr>
<tr>
<td valign="top">
                    FrequentTravelerId</td>
<td valign="top">
                    The traveler&rsquo;s ID for the frequent traveler reward program.</td>
</tr>
<tr>
<td valign="top">
                    IsUpgradeAllowed</td>
<td valign="top">
                    Whether the booking can be upgraded. Format: true/false</td>
</tr>
<tr>
<td valign="top">
                    LegId</td>
<td valign="top">
                    The trip leg ID.</td>
</tr>
<tr>
<td valign="top">
                    Meals</td>
<td valign="top">
                    The booked meals.</td>
</tr>
<tr>
<td valign="top">
                    Miles</td>
<td valign="top">
                    The number of miles booked.</td>
</tr>
<tr>
<td valign="top">
                    Notes</td>
<td valign="top">
                    Additional information about the booking.</td>
</tr>
<tr>
<td valign="top">
                    NumPersons</td>
<td valign="top">
                    The number of persons booked for the trip.</td>
</tr>
<tr>
<td valign="top">
                    NumStops</td>
<td valign="top">
                    The number of stops in the booking.</td>
</tr>
<tr>
<td valign="top">
                    OperatedByTrainNumber</td>
<td valign="top">
                    The train identifier of the operating vendor of the booked trip.</td>
</tr>
<tr>
<td valign="top">
                    OperatedByVendor</td>
<td valign="top">
                    The operating vendor of the booked trip.</td>
</tr>
<tr>
<td valign="top">
                    RateCode</td>
<td valign="top">
                    The vendor's code for the rate of the booking.</td>
</tr>
<tr>
<td valign="top">
                    RouteRestrictCode</td>
<td valign="top">
                    The code to restrict the route of the booking.</td>
</tr>
<tr>
<td valign="top">
                    SpecialInstructions</td>
<td valign="top">
                    The instructions for the booking.</td>
</tr>
<tr>
<td valign="top">
                    StartCity</td>
<td valign="top">
                    The starting city of the booking.</td>
</tr>
<tr>
<td valign="top">
                    StartCityCode</td>
<td valign="top">
                    The <a href="http://www.iata.org/publications/Pages/code-search.aspx">IATA airport code</a> for the starting city of the booking.</td>
</tr>
<tr>
<td valign="top">
                    StartCountry</td>
<td valign="top">
                    The starting country of the booking.</td>
</tr>
<tr>
<td valign="top">
                    StartDateUtc</td>
<td valign="top">
                    The starting date of travel for this segment, in UTC. Format: YYYY-MM-DDThh:mm:ss</td>
</tr>
<tr>
<td valign="top">
                    StartLatitude</td>
<td valign="top">
                    The latitude of the starting location of the booking.</td>
</tr>
<tr>
<td valign="top">
                    StartLongitude</td>
<td valign="top">
                    The longitude of the starting location of the booking.</td>
</tr>
<tr>
<td valign="top">
                    StartPlatform</td>
<td valign="top">
                    The starting platform location of the booking.</td>
</tr>
<tr>
<td valign="top">
                    StartRailStation</td>
<td valign="top">
                    The code of the starting station of the booking.</td>
</tr>
<tr>
<td valign="top">
                    StartRailStationName</td>
<td valign="top">
                    The name of the starting station of the booking.</td>
</tr>
<tr>
<td valign="top">
                    Status</td>
<td valign="top">
                    The booking status.</td>
</tr>
<tr>
<td valign="top">
                    TimeZone</td>
<td valign="top">
                    The time zone of the booking. Format: One of the <a href="#tz">supported Olson or Windows Time Zones</a>.</td>
</tr>
<tr>
<td valign="top">
                    TotalRate</td>
<td valign="top">
                    The total rate amount of the booking.</td>
</tr>
<tr>
<td valign="top">
                    TrainNumber</td>
<td valign="top">
                    The number for the booked train.</td>
</tr>
<tr>
<td valign="top">
                    TrainTypeCode</td>
<td valign="top">
                    The code for the type of train used in the booking.</td>
</tr>
<tr>
<td valign="top">
                    TrainTypeName</td>
<td valign="top">
                    The name of the type of train used in the booking.</td>
</tr>
<tr>
<td valign="top">
                    TransportMode</td>
<td valign="top">
                    The transport mode of the booking.</td>
</tr>
<tr>
<td valign="top">
                    UpgradedDateTime</td>
<td valign="top">
                    The date and time the booking was upgraded. Format: YYYY-MM-DDThh:mm:ss</td>
</tr>
<tr>
<td valign="top">
                    Vendor</td>
<td valign="top">
                    The two letter GDS vendor code.</td>
</tr>
<tr>
<td valign="top">
                    VendorName</td>
<td valign="top">
                    The name of the vendor. When using the Unknown Vendor Code ($$), this value appears as the vendor in the itinerary.</td>
</tr>
<tr>
<td valign="top">
                    WagonNumber</td>
<td valign="top">
                    The wagon number of the train car.</td>
</tr>
<tr>
<td valign="top">
                    Charges</td>
<td valign="top">
                    The charges for this booking. Refer to the <a href="#charges">Charges Child Elements</a> table.</td>
</tr>
<tr>
<td valign="top">
                    Seats</td>
<td valign="top">
                    The booked seats. This parent element contains a **RailSeat** element for each included seat. The **RailSeat** element has the following child elements:
<table border="1" bordercolor="#dbdbdb" cellpadding="3" cellspacing="0" width="90%">
<tbody>
<tr>
<td valign="top">
                                    Amenities</td>
<td valign="top">
                                    The amenities for the seat.</td>
</tr>
<tr>
<td valign="top">
                                    BerthPosition</td>
<td valign="top">
                                    The berth location of the seat.</td>
</tr>
<tr>
<td valign="top">
                                    Deck</td>
<td valign="top">
                                    Which deck the seat is on.</td>
</tr>
<tr>
<td valign="top">
                                    FacingForward</td>
<td valign="top">
                                    Whether the seat is facing forward.</td>
</tr>
<tr>
<td valign="top">
                                    FareSpaceComfort</td>
<td valign="top">
                                    The space around the seat.</td>
</tr>
<tr>
<td valign="top">
                                    PassengerRph</td>
<td valign="top">
                                    Which passenger the seat is assigned to.</td>
</tr>
<tr>
<td valign="top">
                                    SeatNumber</td>
<td valign="top">
                                    The number of the seat.</td>
</tr>
<tr>
<td valign="top">
                                    SeatPosition</td>
<td valign="top">
                                    The location of the seat.</td>
</tr>
<tr>
<td valign="top">
                                    SpaceType</td>
<td valign="top">
                                    The type of space around the seat.</td>
</tr>
<tr>
<td valign="top">
                                    Status</td>
<td valign="top">
                                    The status of the seat booking.</td>
</tr>
<tr>
<td valign="top">
                                    WagonNumber</td>
<td valign="top">
                                    The number of the wagon the seat is on.</td>
</tr>
<tr>
<td valign="top">
                                    WagonType</td>
<td valign="top">
                                    The type of wagon the seat is on.</td>
</tr>
</tbody>
</table>
</td>
</tr>
</tbody>
</table>

    <a id="parking" name="parking"></a>
### 
        Parking Booking
<table border="1" bordercolor="#dbdbdb" cellpadding="3" cellspacing="0" width="90%">
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
                    ConfirmationNumber</td>
<td valign="top">
                    The confirmation number from the vendor.</td>
</tr>
<tr>
<td valign="top">
                    StartDateLocal</td>
<td valign="top">
                    The starting date of travel for this segment, in the local time of to the starting point. Format: YYYY-MM-DDThh:mm:ss</td>
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
                    CancellationNumber</td>
<td valign="top">
                    The cancellation number from the vendor. This field should be set when you cancel a segment.</td>
</tr>
<tr>
<td valign="top">
                    ClassOfService</td>
<td valign="top">
                    The class of the booking.</td>
</tr>
<tr>
<td valign="top">
                    Currency</td>
<td valign="top">
                    The <a href="http://en.wikipedia.org/wiki/ISO_4217">3-letter ISO 4217 currency code</a> for the booking.</td>
</tr>
<tr>
<td valign="top">
                    DateCancelledUtc</td>
<td valign="top">
                    The date the booking was cancelled, in UTC. Format: YYYY-MM-DDThh:mm:ss</td>
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
                    The date the booking was modified, in UTC. Format: YYYY-MM-DDThh:mm:ss</td>
</tr>
<tr>
<td valign="top">
                    EndDateLocal</td>
<td valign="top">
                    The booking ending time and date, in the booking location's local time. Format: YYYY-MM-DDThh:mm:ss</td>
</tr>
<tr>
<td valign="top">
                    EndDateUtc</td>
<td valign="top">
                    The booking ending time and date, in UTC. Format: YYYY-MM-DDThh:mm:ss</td>
</tr>
<tr>
<td valign="top">
                    FrequentTravelerId</td>
<td valign="top">
                    The traveler&rsquo;s ID for the frequent traveler reward program.</td>
</tr>
<tr>
<td valign="top">
                    IsUpgradeAllowed</td>
<td valign="top">
                    Whether the booking can be upgraded. Format: true/false</td>
</tr>
<tr>
<td valign="top">
                    Notes</td>
<td valign="top">
                    Additional information about the booking.</td>
</tr>
<tr>
<td valign="top">
                    OperatedByVendor</td>
<td valign="top">
                    The operating vendor of the booking.</td>
</tr>
<tr>
<td valign="top">
                    ParkingLocationId</td>
<td valign="top">
                    The location of the parking booking.</td>
</tr>
<tr>
<td valign="top">
                    PhoneNumber</td>
<td valign="top">
                    The parking phone number.</td>
</tr>
<tr>
<td valign="top">
                    Pin</td>
<td valign="top">
                    The PIN number for the booking.</td>
</tr>
<tr>
<td valign="top">
                    RateCode</td>
<td valign="top">
                    The vendor's code for the rate of the booking.</td>
</tr>
<tr>
<td valign="top">
                    StartAddress</td>
<td valign="top">
                    The starting address of the booking.</td>
</tr>
<tr>
<td valign="top">
                    StartAddress2</td>
<td valign="top">
                    The starting address of the booking.</td>
</tr>
<tr>
<td valign="top">
                    StartCity</td>
<td valign="top">
                    The starting address of the booking.</td>
</tr>
<tr>
<td valign="top">
                    StartCityCode</td>
<td valign="top">
                    The <a href="http://www.iata.org/publications/Pages/code-search.aspx">IATA airport code</a> for the starting city of the booking.</td>
</tr>
<tr>
<td valign="top">
                    StartCountry</td>
<td valign="top">
                    The starting address of the booking.</td>
</tr>
<tr>
<td valign="top">
                    StartDateUtc</td>
<td valign="top">
                    The starting date of travel for this segment, in UTC. Format: YYYY-MM-DDThh:mm:ss</td>
</tr>
<tr>
<td valign="top">
                    StartLocation</td>
<td valign="top">
                    The parking location.</td>
</tr>
<tr>
<td valign="top">
                    StartPostalCode</td>
<td valign="top">
                    The starting address of the booking. Maximum length: 24</td>
</tr>
<tr>
<td valign="top">
                    StartState</td>
<td valign="top">
                    The starting address of the booking. Maximum length: 50</td>
</tr>
<tr>
<td valign="top">
                    Status</td>
<td valign="top">
                    The booking status.</td>
</tr>
<tr>
<td valign="top">
                    TimeZone</td>
<td valign="top">
                    The time zone of the booking. Format: One of the <a href="#tz">supported Olson or Windows Time Zones</a>.</td>
</tr>
<tr>
<td valign="top">
                    TotalRate</td>
<td valign="top">
                    The total rate amount of the booking.</td>
</tr>
<tr>
<td valign="top">
                    UpgradedDateTime</td>
<td valign="top">
                    The date and time the booking was upgraded. Format: YYYY-MM-DDThh:mm:ss</td>
</tr>
<tr>
<td valign="top">
                    Vendor</td>
<td valign="top">
                    The two letter GDS vendor code.</td>
</tr>
<tr>
<td valign="top">
                    VendorName</td>
<td valign="top">
                    The name of the vendor. When using the Unknown Vendor Code ($$), this value appears as the vendor in the itinerary.</td>
</tr>
<tr>
<td valign="top">
                    Charges</td>
<td valign="top">
                    The charges for this booking. Refer to the <a href="#charges">Charges Child Elements</a> table.</td>
</tr>
</tbody>
</table>

        <a id="travel" name="travel"></a>
### 
        Travel Booking
**NOTE**: This booking type is used by the Concur Travel Request product to store the main destination for the trip without specifying a transport type.
<table border="1" bordercolor="#dbdbdb" cellpadding="3" cellspacing="0" width="90%">
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
                    EndDateLocal</td>
<td valign="top">
                    The booking ending time and date, in the booking location's local time. Format: YYYY-MM-DDThh:mm:ss</td>
</tr>
<tr>
<td valign="top">
                    StartCity</td>
<td valign="top">
                    The starting address of the booking.</td>
</tr>
<tr>
<td valign="top">
                    StartCityCode</td>
<td valign="top">
                    The <a href="http://www.iata.org/publications/Pages/code-search.aspx">IATA airport code</a> for the starting city of the booking.</td>
</tr>
<tr>
<td valign="top">
                    StartDateLocal</td>
<td valign="top">
                    The starting date of travel for this segment, in the local time of to the starting point. Format: YYYY-MM-DDThh:mm:ss</td>
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
                    CancellationNumber</td>
<td valign="top">
                    The cancellation number from the vendor. This field should be set when you cancel a segment.</td>
</tr>
<tr>
<td valign="top">
                    ConfirmationNumber</td>
<td valign="top">
                    The confirmation number from the vendor.</td>
</tr>
<tr>
<td valign="top">
                    Currency</td>
<td valign="top">
                    The <a href="http://en.wikipedia.org/wiki/ISO_4217">3-letter ISO 4217 currency code</a> for the booking.</td>
</tr>
<tr>
<td valign="top">
                    DailyRate</td>
<td valign="top">
                    Average per day rate for the booking. If the rate varies over the duration, it can be specified using the charges model.</td>
</tr>
<tr>
<td valign="top">
                    DateCancelledUtc</td>
<td valign="top">
                    The date the booking was cancelled, in UTC. Format: YYYY-MM-DDThh:mm:ss</td>
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
                    The date the booking was modified, in UTC. Format: YYYY-MM-DDThh:mm:ss</td>
</tr>
<tr>
<td valign="top">
                    EndAddress</td>
<td valign="top">
                    The ending address of the booking.</td>
</tr>
<tr>
<td valign="top">
                    EndAddress2</td>
<td valign="top">
                    The ending address of the booking.</td>
</tr>
<tr>
<td valign="top">
                    EndCity</td>
<td valign="top">
                    The ending address of the booking.</td>
</tr>
<tr>
<td valign="top">
                    EndCityCode</td>
<td valign="top">
                    The ending address of the booking.</td>
</tr>
<tr>
<td valign="top">
                    EndCountry</td>
<td valign="top">
                    The ending address of the booking.</td>
</tr>
<tr>
<td valign="top">
                    EndDateUtc</td>
<td valign="top">
                    The booking ending time and date, in UTC. Format: YYYY-MM-DDThh:mm:ss</td>
</tr>
<tr>
<td valign="top">
                    EndLatitude</td>
<td valign="top">
                    The latitude for the ending location of the booking.</td>
</tr>
<tr>
<td valign="top">
                    EndLocation</td>
<td valign="top">
                    The ending location of the booking.</td>
</tr>
<tr>
<td valign="top">
                    EndLongitude</td>
<td valign="top">
                    The longitude of the ending point of the booking.</td>
</tr>
<tr>
<td valign="top">
                    EndPostalCode</td>
<td valign="top">
                    The ending address of the booking.</td>
</tr>
<tr>
<td valign="top">
                    EndState</td>
<td valign="top">
                    The ending address of the booking.</td>
</tr>
<tr>
<td valign="top">
                    TransportMode</td>
<td valign="top">
                    The transport mode of the booking.</td>
</tr>
<tr>
<td valign="top">
                    Notes</td>
<td valign="top">
                    Additional information about the booking.</td>
</tr>
<tr>
<td valign="top">
                    NumPersons</td>
<td valign="top">
                    The number of persons booked for the trip.</td>
</tr>
<tr>
<td valign="top">
                    PhoneNumber</td>
<td valign="top">
                    The parking phone number.</td>
</tr>
<tr>
<td valign="top">
                    SpecialInstructions</td>
<td valign="top">
                    The instructions for the booking.</td>
</tr>
<tr>
<td valign="top">
                    StartAddress</td>
<td valign="top">
                    The starting address of the booking.</td>
</tr>
<tr>
<td valign="top">
                    StartAddress2</td>
<td valign="top">
                    The starting address of the booking.</td>
</tr>
<tr>
<td valign="top">
                    StartCity</td>
<td valign="top">
                    The starting address of the booking.</td>
</tr>
<tr>
<td valign="top">
                    StartCityCode</td>
<td valign="top">
                    The <a href="http://www.iata.org/publications/Pages/code-search.aspx">IATA airport code</a> for the starting city of the booking.</td>
</tr>
<tr>
<td valign="top">
                    StartCountry</td>
<td valign="top">
                    The starting address of the booking.</td>
</tr>
<tr>
<td valign="top">
                    StartDateUtc</td>
<td valign="top">
                    The starting date of travel for this segment, in UTC. Format: YYYY-MM-DDThh:mm:ss</td>
</tr>
<tr>
<td valign="top">
                    StartLatitude</td>
<td valign="top">
                    The latitude of the restaurant.</td>
</tr>
<tr>
<td valign="top">
                    StartLongitude</td>
<td valign="top">
                    The longitude of the restaurant.</td>
</tr>
<tr>
<td valign="top">
                    StartPostalCode</td>
<td valign="top">
                    The starting address of the booking. Maximum length: 24</td>
</tr>
<tr>
<td valign="top">
                    StartState</td>
<td valign="top">
                    The starting address of the booking. Maximum length: 50</td>
</tr>
<tr>
<td valign="top">
                    Status</td>
<td valign="top">
                    The booking status.</td>
</tr>
<tr>
<td valign="top">
                    TimeZone</td>
<td valign="top">
                    The time zone of the booking. Format: One of the <a href="#tz">supported Olson or Windows Time Zones</a>.</td>
</tr>
<tr>
<td valign="top">
                    TotalRate</td>
<td valign="top">
                    The total rate amount of the booking.</td>
</tr>
<tr>
<td valign="top">
                    Vendor</td>
<td valign="top">
                    The two letter GDS vendor code.</td>
</tr>
<tr>
<td valign="top">
                    VendorName</td>
<td valign="top">
                    The name of the vendor. When using the Unknown Vendor Code ($$), this value appears as the vendor in the itinerary.</td>
</tr>
<tr>
<td valign="top">
                    Charges</td>
<td valign="top">
                    The charges for this booking. Refer to the <a href="#charges">Charges Child Elements</a> table.</td>
</tr>
<tr>
<td valign="top">
                    Seats</td>
<td valign="top">
                    The seats for the booking. This parent element contains an **TravelSeat** element for each included seat. The **TravelSeat** element contains the following child elements:
<table border="1" bordercolor="#dbdbdb" cellpadding="3" cellspacing="0" width="100%">
<tbody>
<tr>
<td valign="top">
                                    PassengerRph</td>
<td valign="top">
                                    The passenger assigned to the seat.</td>
</tr>
<tr>
<td valign="top">
                                    SeatNumber</td>
<td valign="top">
                                    The number of the seat.</td>
</tr>
</tbody>
</table>
</td>
</tr>
</tbody>
</table>
<a id="charges" name="charges"></a>
### 
        Charges Child Elements
<table border="1" bordercolor="#dbdbdb" cellpadding="3" cellspacing="0" width="90%">
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
                    Percent</td>
<td valign="top">
                    The percent of fixed charges. This parent element contains the following child elements:
<table border="1" bordercolor="#dbdbdb" cellpadding="3" cellspacing="0" width="100%">
<tbody>
<tr>
<td valign="top" width="20%">
                                    Amount</td>
<td valign="top" width="70%">
                                    The total amount for the rate for the booking.</td>
</tr>
<tr>
<td valign="top">
                                    Currency</td>
<td valign="top">
                                    The <a href="http://en.wikipedia.org/wiki/ISO_4217">3-letter ISO 4217 currency code</a> for the total amount.</td>
</tr>
<tr>
<td valign="top">
                                    Description</td>
<td valign="top">
                                    The description for the rate.</td>
</tr>
<tr>
<td valign="top">
                                    IsPaid</td>
<td valign="top">
                                    Whether the rate has been paid. Format: true/false.</td>
</tr>
<tr>
<td valign="top">
                                    IsPrimary</td>
<td valign="top">
                                    Indicates whether the charge is the Primary or Main rate. For example, if one of the rates is the actual rate and the rest are penalties, the actual rate should be set as IsPrimary. Only one charge in a set should be primary. Format: true/false.</td>
</tr>
<tr>
<td valign="top">
                                    SemanticsCode</td>
<td valign="top">
                                    Indicates the charge category for the line item. Refer to the <a href="https://developer.concur.com/sites/default/files/SemanticsAndVendorCodes.pdf" target="_blank">Semantics and Vendor Codes</a> document for more information.</td>
</tr>
<tr>
<td valign="top">
                                    SemanticsVendorType</td>
<td valign="top">
                                    The vendor type: H=Hotel, C=Car, A=Air, G=Ground, R=Rail</td>
</tr>
<tr>
<td valign="top">
                                    StartDateLocal</td>
<td valign="top">
                                    The start date of the booking, in the user's local time. Format: YYYY-MM-DDThh:mm:ss</td>
</tr>
<tr>
<td valign="top">
                                    Vendor</td>
<td valign="top">
                                    The vendor for the booking charge.</td>
</tr>
<tr>
<td valign="top">
                                    VendorChargeCode</td>
<td valign="top">
                                    The vendor's code for the charge</td>
</tr>
</tbody>
</table>
</td>
</tr>
<tr>
<td valign="top">
                    Fixed</td>
<td valign="top">
                    The fixed charges. This parent element contains the following child elements:
<table border="1" bordercolor="#dbdbdb" cellpadding="3" cellspacing="0" width="100%">
<tbody>
<tr>
<td valign="top" width="20%">
                                    Amount</td>
<td valign="top" width="70%">
                                    The total amount of the fixed cost for the booking.</td>
</tr>
<tr>
<td valign="top">
                                    Currency</td>
<td valign="top">
                                    The <a href="http://en.wikipedia.org/wiki/ISO_4217">3-letter ISO 4217 currency code</a> for the total amount.</td>
</tr>
<tr>
<td valign="top">
                                    Description</td>
<td valign="top">
                                    The description for the fixed amount.</td>
</tr>
<tr>
<td valign="top">
                                    IsPaid</td>
<td valign="top">
                                    Whether the fixed amount has been paid. Format: true/false.</td>
</tr>
<tr>
<td valign="top">
                                    IsPrimary</td>
<td valign="top">
                                    Whether the fixed amount is primary. Format: true/false.</td>
</tr>
<tr>
<td valign="top">
                                    SemanticsCode</td>
<td valign="top">
                                    Indicates the charge category for the line item. Refer to the <a href="https://developer.concur.com/sites/default/files/SemanticsAndVendorCodes.pdf" target="_blank">Semantics and Vendor Codes</a> document for more information.</td>
</tr>
<tr>
<td valign="top">
                                    SemanticsVendorType</td>
<td valign="top">
                                    The vendor type: H=Hotel, C=Car, A=Air, G=Ground, R=Rail</td>
</tr>
<tr>
<td valign="top">
                                    StartDateLocal</td>
<td valign="top">
                                    The start date of the booking, in the user's local time. Format: YYYY-MM-DDThh:mm:ss</td>
</tr>
<tr>
<td valign="top">
                                    Vendor</td>
<td valign="top">
                                    The vendor applying the booking charge.</td>
</tr>
<tr>
<td valign="top">
                                    VendorChargeCode</td>
<td valign="top">
                                    The vendor's code for the charge.</td>
</tr>
</tbody>
</table>
</td>
</tr>
<tr>
<td valign="top">
                    Rate</td>
<td valign="top">
                    The rate for the booking. This parent element contains the following child elements:
<table border="1" bordercolor="#dbdbdb" cellpadding="3" cellspacing="0" width="100%">
<tbody>
<tr>
<td valign="top" width="20%">
                                    Amount</td>
<td valign="top" width="70%">
                                    The total amount for the rate for the booking.</td>
</tr>
<tr>
<td valign="top">
                                    Currency</td>
<td valign="top">
                                    The <a href="http://en.wikipedia.org/wiki/ISO_4217">3-letter ISO 4217 currency code</a> for the total amount.</td>
</tr>
<tr>
<td valign="top">
                                    Description</td>
<td valign="top">
                                    The description for the rate.</td>
</tr>
<tr>
<td valign="top">
                                    IsPaid</td>
<td valign="top">
                                    Whether the rate has been paid. Format: true/false.</td>
</tr>
<tr>
<td valign="top">
                                    IsPrimary</td>
<td valign="top">
                                    Whether the rate is primary. Format: true/false.</td>
</tr>
<tr>
<td valign="top">
                                    NumUnits</td>
<td valign="top">
                                    The number of units expected for the charge. For instance, 3 days</td>
</tr>
<tr>
<td valign="top">
                                    PerUnit</td>
<td valign="top">
                                    The unit of measure for the charge. Values represent rates like per DAY, WEEK, or MONTH</td>
</tr>
<tr>
<td valign="top">
                                    SemanticsCode</td>
<td valign="top">
                                    Indicates the charge category for the line item. Refer to the <a href="https://developer.concur.com/sites/default/files/SemanticsAndVendorCodes.pdf" target="_blank">Semantics and Vendor Codes</a> document for more information.</td>
</tr>
<tr>
<td valign="top">
                                    SemanticsVendorType</td>
<td valign="top">
                                    The vendor type: H=Hotel, C=Car, A=Air, G=Ground, R=Rail</td>
</tr>
<tr>
<td valign="top">
                                    StartDateLocal</td>
<td valign="top">
                                    The start date of the booking, in the user's local time. Format: YYYY-MM-DDThh:mm:ss</td>
</tr>
<tr>
<td valign="top">
                                    Vendor</td>
<td valign="top">
                                    The vendor for the booking charge.</td>
</tr>
<tr>
<td valign="top">
                                    VendorChargeCode</td>
<td valign="top">
                                    The vendor's code for the charge.</td>
</tr>
</tbody>
</table>
</td>
</tr>
<tr>
<td valign="top">
                    RateWithAllowance</td>
<td valign="top">
                    The rate for the booking, including any travel allowances. This parent element contains the following child elements:
<table border="1" bordercolor="#dbdbdb" cellpadding="3" cellspacing="0" width="100%">
<tbody>
<tr>
<td valign="top" width="20%">
                                    AllowanceAmount</td>
<td valign="top" width="70%">
                                    The cost of overage fees when the allowance is exceeded. For example, if the allowance is 5000 miles, the cost could be $0.02 per mile. The overage must be in the same currency as the basic rate.</td>
</tr>
<tr>
<td valign="top">
                                    AllowanceIsUnlimited</td>
<td valign="top">
                                    Whether the allowance is unlimited. Format: true/false.</td>
</tr>
<tr>
<td valign="top">
                                    AllowanceNumUnits</td>
<td valign="top">
                                    The number of units for the allowance associated with the charge. For example, 5000 miles.</td>
</tr>
<tr>
<td valign="top">
                                    AllowanceUnit</td>
<td valign="top">
                                    The unit of measure for the allowance associated with the charge. For example, a car weekly rate might allow 5000 miles included in the rate.</td>
</tr>
<tr>
<td valign="top">
                                    Amount</td>
<td valign="top">
                                    The total amount for the rate for the booking.</td>
</tr>
<tr>
<td valign="top">
                                    Currency</td>
<td valign="top">
                                    The <a href="http://en.wikipedia.org/wiki/ISO_4217">3-letter ISO 4217 currency code</a> for the total amount.</td>
</tr>
<tr>
<td valign="top">
                                    Description</td>
<td valign="top">
                                    The description for the rate.</td>
</tr>
<tr>
<td valign="top">
                                    IsPaid</td>
<td valign="top">
                                    Whether the rate has been paid. Format: true/false.</td>
</tr>
<tr>
<td valign="top">
                                    IsPrimary</td>
<td valign="top">
                                    Indicates whether the charge is the Primary or Main rate. For example, if one of the rates is the actual rate and the rest are penalties, the actual rate should be set as IsPrimary. Only one charge in a set should be primary. Format: true/false.</td>
</tr>
<tr>
<td valign="top">
                                    NumUnits</td>
<td valign="top">
                                    The number of units expected for the charge. For instance, 3 days.</td>
</tr>
<tr>
<td valign="top">
                                    PerUnit</td>
<td valign="top">
                                    The unit of measure for the charge. Values represent rates like per DAY, WEEK, or MONTH</td>
</tr>
<tr>
<td valign="top">
                                    SemanticsCode</td>
<td valign="top">
                                    Indicates the charge category for the line item. Refer to the <a href="https://developer.concur.com/sites/default/files/SemanticsAndVendorCodes.pdf" target="_blank">Semantics and Vendor Codes</a> document for more information.</td>
</tr>
<tr>
<td valign="top">
                                    SemanticsVendorType</td>
<td valign="top">
                                    The vendor type: H=Hotel, C=Car, A=Air, G=Ground, R=Rail</td>
</tr>
<tr>
<td valign="top">
                                    StartDateLocal</td>
<td valign="top">
                                    The start date of the booking, in the user's local time. Format: YYYY-MM-DDThh:mm:ss</td>
</tr>
<tr>
<td valign="top">
                                    Vendor</td>
<td valign="top">
                                    The vendor for the booking charge.</td>
</tr>
<tr>
<td valign="top">
                                    VendorChargeCode</td>
<td valign="top">
                                    The vendor's code for the charge.</td>
</tr>
</tbody>
</table>
</td>
</tr>
</tbody>
</table>
### 
        <a id="tz" name="tz"></a>Time Zone Formats
<table border="1" bordercolor="#dbdbdb" cellpadding="3" cellspacing="0" width="100%">
<tbody>
<tr class="GrayTableHead">
<td colspan="4" valign="top">
                    Olson Time Zones</td>
</tr>
<tr>
<td valign="top" width="20%">
                    Africa/Cairo</td>
<td valign="top" width="70%">
                    Africa/Casablanca</td>
<td valign="top" width="70%">
                    Africa/Harare</td>
<td valign="top" width="70%">
                    Africa/Luanda</td>
</tr>
<tr>
<td valign="top">
                    Africa/Nairobi</td>
<td valign="top">
                    Africa/Windhoek</td>
<td valign="top">
                    America/Anchorage</td>
<td valign="top">
                    America/Argentina/Buenos_Aires</td>
</tr>
<tr>
<td valign="top">
                    America/Asuncion</td>
<td valign="top">
                    America/Bahia</td>
<td valign="top">
                    America/Bogota</td>
<td valign="top">
                    America/Buenos_Aires</td>
</tr>
<tr>
<td valign="top">
                    America/Caracas</td>
<td valign="top">
                    America/Chicago</td>
<td valign="top">
                    America/Chihuahua</td>
<td valign="top">
                    America/Denver</td>
</tr>
<tr>
<td valign="top">
                    America/Godthab</td>
<td valign="top">
                    America/Guyana</td>
<td valign="top">
                    America/Halifax</td>
<td valign="top">
                    America/Indianapolis</td>
</tr>
<tr>
<td valign="top">
                    America/Los_Angeles</td>
<td valign="top">
                    America/Manaus</td>
<td valign="top">
                    America/Mexico_City</td>
<td valign="top">
                    America/Montevideo</td>
</tr>
<tr>
<td valign="top">
                    America/New_York</td>
<td valign="top">
                    America/Phoenix</td>
<td valign="top">
                    America/Regina</td>
<td valign="top">
                    America/Santiago</td>
</tr>
<tr>
<td valign="top">
                    America/Sao_Paulo</td>
<td valign="top">
                    America/St_Johns</td>
<td valign="top">
                    America/Swift_Current</td>
<td valign="top">
                    America/Tijuana</td>
</tr>
<tr>
<td valign="top">
                    Asia/Almaty</td>
<td valign="top">
                    Asia/Amman</td>
<td valign="top">
                    Asia/Baghdad</td>
<td valign="top">
                    Asia/Baku</td>
</tr>
<tr>
<td valign="top">
                    Asia/Bangkok</td>
<td valign="top">
                    Asia/Beirut</td>
<td valign="top">
                    Asia/Calcutta</td>
<td valign="top">
                    Asia/Colombo</td>
</tr>
<tr>
<td valign="top">
                    Asia/Damascus</td>
<td valign="top">
                    Asia/Dhaka</td>
<td valign="top">
                    Asia/Irkutsk</td>
<td valign="top">
                    Asia/Jerusalem</td>
</tr>
<tr>
<td valign="top">
                    Asia/Kabul</td>
<td valign="top">
                    Asia/Kamchatka</td>
<td valign="top">
                    Asia/Karachi</td>
<td valign="top">
                    Asia/Karachi</td>
</tr>
<tr>
<td valign="top">
                    Asia/Katmandu</td>
<td valign="top">
                    Asia/Krasnoyarsk</td>
<td valign="top">
                    Asia/Magadan</td>
<td valign="top">
                    Asia/Muscat</td>
</tr>
<tr>
<td valign="top">
                    Asia/Novosibirsk</td>
<td valign="top">
                    Asia/Rangoon</td>
<td valign="top">
                    Asia/Riyadh</td>
<td valign="top">
                    Asia/Seoul</td>
</tr>
<tr>
<td valign="top">
                    Asia/Shanghai</td>
<td valign="top">
                    Asia/Singapore</td>
<td valign="top">
                    Asia/Taipei</td>
<td valign="top">
                    Asia/Tbilisi</td>
</tr>
<tr>
<td valign="top">
                    Asia/Tehran</td>
<td valign="top">
                    Asia/Tokyo</td>
<td valign="top">
                    Asia/Ulaanbaatar</td>
<td valign="top">
                    Asia/Vladivostok</td>
</tr>
<tr>
<td valign="top">
                    Asia/Yakutsk</td>
<td valign="top">
                    Asia/Yekaterinburg</td>
<td valign="top">
                    Asia/Yerevan</td>
<td valign="top">
                    Atlantic/Azores</td>
</tr>
<tr>
<td valign="top">
                    Atlantic/Cape_Verde</td>
<td valign="top">
                    Atlantic/South_Georgia</td>
<td valign="top">
                    Australia/Adelaide</td>
<td valign="top">
                    Australia/Brisbane</td>
</tr>
<tr>
<td valign="top">
                    Australia/Darwin</td>
<td valign="top">
                    Australia/Hobart</td>
<td valign="top">
                    Australia/Perth</td>
<td valign="top">
                    Australia/Sydney</td>
</tr>
<tr>
<td valign="top">
                    Etc/GMT+12</td>
<td valign="top">
                    Etc/GMT-11</td>
<td valign="top">
                    Etc/GMT-2</td>
<td valign="top">
                    Europe/Athens</td>
</tr>
<tr>
<td valign="top">
                    Europe/Berlin</td>
<td valign="top">
                    Europe/Helsinki</td>
<td valign="top">
                    Europe/Istanbul</td>
<td valign="top">
                    Europe/Kaliningrad</td>
</tr>
<tr>
<td valign="top">
                    Europe/London</td>
<td valign="top">
                    Europe/Minsk</td>
<td valign="top">
                    Europe/Moscow</td>
<td valign="top">
                    Europe/Paris</td>
</tr>
<tr>
<td valign="top">
                    Europe/Prague</td>
<td valign="top">
                    Europe/Sarajevo</td>
<td valign="top">
                    GMT</td>
<td valign="top">
                    GMT-1200</td>
</tr>
<tr>
<td valign="top">
                    Indian/Mauritius</td>
<td valign="top">
                    Pacific/Apia</td>
<td valign="top">
                    Pacific/Auckland</td>
<td valign="top">
                    Pacific/Fiji</td>
</tr>
<tr>
<td valign="top">
                    Pacific/Guadalcanal</td>
<td valign="top">
                    Pacific/Guam</td>
<td valign="top">
                    Pacific/Honolulu</td>
<td valign="top">
                    Pacific/Tongatapu</td>
</tr>
<tr>
<td valign="top">
                    UTC</td>
<td valign="top">

</td>
<td valign="top">

</td>
<td valign="top">

</td>
</tr>
<tr class="GrayTableHead">
<td colspan="4" valign="top">
                    Windows Time Zones</td>
</tr>
<tr>
<td valign="top">
                    Africa/Cairo</td>
<td valign="top">
                    Africa/Casablanca</td>
<td valign="top">
                    Africa/Harare</td>
<td valign="top">
                    Africa/Luanda</td>
</tr>
<tr>
<td valign="top">
                    Africa/Nairobi</td>
<td valign="top">
                    Africa/Windhoek</td>
<td valign="top">
                    America/Anchorage</td>
<td valign="top">
                    America/Argentina/Buenos_Aires</td>
</tr>
<tr>
<td valign="top">
                    America/Asuncion</td>
<td valign="top">
                    America/Bahia</td>
<td valign="top">
                    America/Bogota</td>
<td valign="top">
                    America/Buenos_Aires</td>
</tr>
<tr>
<td valign="top">
                    America/Caracas</td>
<td valign="top">
                    America/Chicago</td>
<td valign="top">
                    America/Chihuahua</td>
<td valign="top">
                    America/Denver</td>
</tr>
<tr>
<td valign="top">
                    America/Godthab</td>
<td valign="top">
                    America/Guyana</td>
<td valign="top">
                    America/Halifax</td>
<td valign="top">
                    America/Indianapolis</td>
</tr>
<tr>
<td valign="top">
                    America/Los_Angeles</td>
<td valign="top">
                    America/Manaus</td>
<td valign="top">
                    America/Mexico_City</td>
<td valign="top">
                    America/Montevideo</td>
</tr>
<tr>
<td valign="top">
                    America/New_York</td>
<td valign="top">
                    America/Phoenix</td>
<td valign="top">
                    America/Regina</td>
<td valign="top">
                    America/Santiago</td>
</tr>
<tr>
<td valign="top">
                    America/Sao_Paulo</td>
<td valign="top">
                    America/St_Johns</td>
<td valign="top">
                    America/Swift_Current</td>
<td valign="top">
                    America/Tijuana</td>
</tr>
<tr>
<td valign="top">
                    Asia/Almaty</td>
<td valign="top">
                    Asia/Amman</td>
<td valign="top">
                    Asia/Baghdad</td>
<td valign="top">
                    Asia/Baku</td>
</tr>
<tr>
<td valign="top">
                    Asia/Bangkok</td>
<td valign="top">
                    Asia/Beirut</td>
<td valign="top">
                    Asia/Calcutta</td>
<td valign="top">
                    Asia/Colombo</td>
</tr>
<tr>
<td valign="top">
                    Asia/Damascus</td>
<td valign="top">
                    Asia/Dhaka</td>
<td valign="top">
                    Asia/Irkutsk</td>
<td valign="top">
                    Asia/Jerusalem</td>
</tr>
<tr>
<td valign="top">
                    Asia/Kabul</td>
<td valign="top">
                    Asia/Kamchatka</td>
<td valign="top">
                    Asia/Karachi</td>
<td valign="top">
                    Asia/Karachi</td>
</tr>
<tr>
<td valign="top">
                    Asia/Katmandu</td>
<td valign="top">
                    Asia/Krasnoyarsk</td>
<td valign="top">
                    Asia/Magadan</td>
<td valign="top">
                    Asia/Muscat</td>
</tr>
<tr>
<td valign="top">
                    Asia/Novosibirsk</td>
<td valign="top">
                    Asia/Rangoon</td>
<td valign="top">
                    Asia/Riyadh</td>
<td valign="top">
                    Asia/Seoul</td>
</tr>
<tr>
<td valign="top">
                    Asia/Shanghai</td>
<td valign="top">
                    Asia/Singapore</td>
<td valign="top">
                    Asia/Taipei</td>
<td valign="top">
                    Asia/Tbilisi</td>
</tr>
<tr>
<td valign="top">
                    Asia/Tehran</td>
<td valign="top">
                    Asia/Tokyo</td>
<td valign="top">
                    Asia/Ulaanbaatar</td>
<td valign="top">
                    Asia/Vladivostok</td>
</tr>
<tr>
<td valign="top">
                    Asia/Yakutsk</td>
<td valign="top">
                    Asia/Yekaterinburg</td>
<td valign="top">
                    Asia/Yerevan</td>
<td valign="top">
                    Atlantic/Azores</td>
</tr>
<tr>
<td valign="top">
                    Atlantic/Cape_Verde</td>
<td valign="top">
                    Atlantic/South_Georgia</td>
<td valign="top">
                    Australia/Adelaide</td>
<td valign="top">
                    Australia/Brisbane</td>
</tr>
<tr>
<td valign="top">
                    Australia/Darwin</td>
<td valign="top">
                    Australia/Hobart</td>
<td valign="top">
                    Australia/Perth</td>
<td valign="top">
                    Australia/Sydney</td>
</tr>
<tr>
<td valign="top">
                    Etc/GMT+12</td>
<td valign="top">
                    Etc/GMT-11</td>
<td valign="top">
                    Etc/GMT-2</td>
<td valign="top">
                    Europe/Athens</td>
</tr>
<tr>
<td valign="top">
                    Europe/Berlin</td>
<td valign="top">
                    Europe/Helsinki</td>
<td valign="top">
                    Europe/Istanbul</td>
<td valign="top">
                    Europe/Kaliningrad</td>
</tr>
<tr>
<td valign="top">
                    Europe/London</td>
<td valign="top">
                    Europe/Minsk</td>
<td valign="top">
                    Europe/Moscow</td>
<td valign="top">
                    Europe/Paris</td>
</tr>
<tr>
<td valign="top">
                    Europe/Prague</td>
<td valign="top">
                    Europe/Sarajevo</td>
<td valign="top">
                    GMT</td>
<td valign="top">
                    GMT-1200</td>
</tr>
<tr>
<td valign="top">
                    Indian/Mauritius</td>
<td valign="top">
                    Pacific/Apia</td>
<td valign="top">
                    Pacific/Auckland</td>
<td valign="top">
                    Pacific/Fiji</td>
</tr>
<tr>
<td valign="top">
                    Pacific/Guadalcanal</td>
<td valign="top">
                    Pacific/Guam</td>
<td valign="top">
                    Pacific/Honolulu</td>
<td valign="top">
                    Pacific/Tongatapu</td>
</tr>
<tr>
<td valign="top">
                    UTC</td>
<td valign="top">

</td>
<td valign="top">

</td>
<td valign="top">

</td>
</tr>
</tbody>
</table>
</blockquote>

