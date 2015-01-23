
        <div id="main" class="container">
            <div>
                            </div>
            <div class="row">
                <div class="span12">
<div class="breadcrumbs"><a href="/">Home</a>Booking Object Elements (TripLink)</div>
                </div>
            </div>

            <div id="content-wrapper">
<!-- <div class="row"> -->
                <div id="content" class="span9">
            # Booking Object Elements (TripLink)
                    <div class="section">
                    <div id="node-546" class="node clear-block">


    
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
TripLink - Open Booking Suppliers have access to the following elements for the different booking types. Elements are marked as required if they must be supplied for a new booking. Some fields may not appear or may display generic data if the supplier does not own the booking (refer to the field descriptions below for details).
A supplier can always see the full details of their own reservations from any itinerary or booking source.
<<a href="#air">Air</a>> <<a href="#car">Car</a>> <<a href="#hotel">Hotel</a>> <<a href="#rail">Rail</a>>
## 
        <a id="air" name="air"></a>Air Booking Elements
<table border="1" bordercolor="#dbdbdb" cellpadding="3" cellspacing="0" width="90%">
<tbody>
<tr class="GrayTableHead">
<td colspan="2" valign="top">
                    Required Elements</td>
</tr>
<tr class="GrayTableHead">
<td valign="top" width="20%">
                    Element</td>
<td valign="top" width="70%">
                    Description</td>
</tr>
<tr>
<td valign="top">
                    Vendor</td>
<td valign="top">
                    The two letter GDS vendor code. Use $$ if the code is not available. Will not appear in the response if the request is from an Open Booking Air supplier that does not own the booking.</td>
</tr>
<tr>
<td valign="top">
                    FlightNumber</td>
<td valign="top">
                    The flight number for the booking.Will not appear in the response if the request is from an Open Booking Air supplier that does not own the booking.</td>
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
The booking starting time and date, in the booking location's local time. Format: YYYY-MM-DDThh:mm:ss
                        **NOTE**: The time portion of this value will be set to T00:00:00 if the request is from a TripLink - Open Booking Air supplier that does not own the booking.
</td>
</tr>
<tr>
<td valign="top">
                    EndCityCode</td>
<td valign="top">
                    The <a href="http://www.iata.org/publications/Pages/code-search.aspx">IATA airport code</a> for the end city of the booking.</td>
</tr>
<tr>
<td valign="top">
                    EndDateLocal</td>
<td valign="top">
                    The booking ending time and date, in the booking location's local time. Format: YYYY-MM-DDThh:mm:ss
                    **NOTE**: The time portion of this value will be set to T00:00:00 if the request is from a TripLink - Open Booking Air supplier that does not own the booking.</td>
</tr>
<tr class="GrayTableHead">
<td colspan="2" valign="top">
                    Optional Elements</td>
</tr>
<tr class="GrayTableHead">
<td valign="top" width="20%">
                    Element</td>
<td valign="top" width="70%">
                    Description</td>
</tr>
<tr>
<td valign="top">
                    StartDateUtc</td>
<td valign="top">
                    The booking starting time and date, in UTC. Format: YYYY-MM-DDThh:mm:ss
                    **NOTE**: The time portion of this value will be set to T00:00:00 if the request is from a TripLink - Open Booking Air supplier that does not own the booking.</td>
</tr>
<tr>
<td valign="top">
                    StartGate</td>
<td valign="top">
                    The departure gate for the booking. Will not appear in the response if the request is from a TripLink - Open Booking Air supplier that does not own the booking.</td>
</tr>
<tr>
<td valign="top">
                    StartTerminal</td>
<td valign="top">
                    The departure terminal for the booking. Will not appear in the response if the request is from a TripLink - Open Booking Air supplier that does not own the booking.</td>
</tr>
<tr>
<td valign="top">
                    TimeZone</td>
<td valign="top">
                    The time zone of the booking. Format: One of the <a href="#tz">supported Olson or Windows Time Zones</a>.</td>
</tr>
<tr>
<td valign="top">
                    EndDateUtc</td>
<td valign="top">
                    The booking ending time and date, in UTC. Format: YYYY-MM-DDThh:mm:ss
                    **NOTE**: The time portion of this value will be set to T00:00:00 if the request is from a TripLink - Open Booking Air supplier that does not own the booking.</td>
</tr>
<tr>
<td valign="top">
                    EndGate</td>
<td valign="top">
                    The arriving gate for the booking. Will not appear in the response if the request is from a TripLink - Open Booking Air supplier that does not own the booking.</td>
</tr>
<tr>
<td valign="top">
                    EndTerminal</td>
<td valign="top">
                    The arriving terminal for the booking. Will not appear in the response if the request is from a TripLink - Open Booking Air supplier that does not own the booking.</td>
</tr>
</tbody>
</table>

## 
        <a id="car" name="car"></a>Car Booking Elements
<table border="1" bordercolor="#dbdbdb" cellpadding="3" cellspacing="0" width="90%">
<tbody>
<tr class="GrayTableHead">
<td colspan="2" valign="top">
                    Required Elements</td>
</tr>
<tr class="GrayTableHead">
<td valign="top" width="20%">
                    Element</td>
<td valign="top" width="70%">
                    Description</td>
</tr>
<tr>
<td valign="top">
                    StartDateLocal</td>
<td valign="top">
                    The booking starting time and date, in the booking location's local time. Format: YYYY-MM-DDThh:mm:ss</td>
</tr>
<tr>
<td valign="top">
                    EndDateLocal</td>
<td valign="top">
                    The booking ending time and date, in the booking location's local time. Format: YYYY-MM-DDThh:mm:ss</td>
</tr>
<tr class="GrayTableHead">
<td colspan="2" valign="top">
                    Optional Elements</td>
</tr>
<tr class="GrayTableHead">
<td valign="top" width="20%">
                    Element</td>
<td valign="top" width="70%">
                    Description</td>
</tr>
<tr>
<td valign="top">
                    EndCity</td>
<td valign="top">
                    The ending address for the booking.</td>
</tr>
<tr>
<td valign="top">
                    EndCountry</td>
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
                    StartCity</td>
<td valign="top">
                    The starting address for the booking.</td>
</tr>
<tr>
<td valign="top">
                    StartCityCode</td>
<td valign="top">
                    The <a href="http://www.iata.org/publications/Pages/code-search.aspx">IATA airport code</a> for the starting address for the booking.</td>
</tr>
<tr>
<td valign="top">
                    StartCountry</td>
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
                    StartState</td>
<td valign="top">
                    The starting address for the booking.</td>
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
                    TimeZone</td>
<td valign="top">
                    The time zone of the booking. Format: One of the <a href="#tz">supported Olson or Windows Time Zones</a>.</td>
</tr>
</tbody>
</table>

## 
        <a id="hotel" name="hotel"></a>Hotel Booking Elements
<table border="1" bordercolor="#dbdbdb" cellpadding="3" cellspacing="0" width="90%">
<tbody>
<tr class="GrayTableHead">
<td colspan="2" valign="top">
                    Required Elements</td>
</tr>
<tr class="GrayTableHead">
<td valign="top" width="20%">
                    Element</td>
<td valign="top" width="70%">
                    Description</td>
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
                    EndDateLocal</td>
<td valign="top">
                    The booking ending time and date, in the booking location's local time. Format: YYYY-MM-DDThh:mm:ss</td>
</tr>
<tr>
<td valign="top">
                    Status</td>
<td valign="top">
                    The GDS based booking status for the segment. Format: HK, HL, BK, etc.</td>
</tr>
<tr class="GrayTableHead">
<td colspan="2" valign="top">
                    Optional Elements</td>
</tr>
<tr class="GrayTableHead">
<td valign="top" width="20%">
                    Element</td>
<td valign="top" width="70%">
                    Description</td>
</tr>
<tr>
<td valign="top">
                    StartDateUtc</td>
<td valign="top">
                    The booking starting time and date, in UTC. Format: YYYY-MM-DDThh:mm:ss</td>
</tr>
<tr>
<td valign="top">
                    EndDateUtc</td>
<td valign="top">
                    The booking ending time and date, in UTC. Format: YYYY-MM-DDThh:mm:ss</td>
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
                    TimeZone</td>
<td valign="top">
                    The time zone of the booking. Format: One of the <a href="#tz">supported Olson or Windows Time Zones</a>.</td>
</tr>
</tbody>
</table>

## 
        <a id="rail" name="rail"></a>Rail Booking Elements
<table border="1" bordercolor="#dbdbdb" cellpadding="3" cellspacing="0" width="90%">
<tbody>
<tr class="GrayTableHead">
<td colspan="2" valign="top">
                    Required Elements</td>
</tr>
<tr class="GrayTableHead">
<td valign="top" width="20%">
                    Element</td>
<td valign="top" width="70%">
                    Description</td>
</tr>
<tr>
<td valign="top">
                    TrainNumber</td>
<td valign="top">
                    The number for the booked train.</td>
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
                    The starting date for this segment, in the local time of the starting point. Format: YYYY-MM-DDThh:mm:ss</td>
</tr>
<tr>
<td valign="top">
                    StartRailStation</td>
<td valign="top">
                    The code of the departing station of the booking.</td>
</tr>
<tr class="GrayTableHead">
<td colspan="2" valign="top">
                    Optional Elements</td>
</tr>
<tr class="GrayTableHead">
<td valign="top" width="20%">
                    Element</td>
<td valign="top" width="70%">
                    Description</td>
</tr>
<tr>
<td valign="top">
                    StartDateUtc</td>
<td valign="top">
                    The starting date of travel for this segment, in UTC. Format: YYYY-MM-DDThh:mm:ss</td>
</tr>
<tr>
<td valign="top">
                    StartRailStationName</td>
<td valign="top">
                    The name of the departing station of the booking.</td>
</tr>
<tr>
<td valign="top">
                    EndCityCode</td>
<td valign="top">
                    The <a href="http://www.iata.org/publications/Pages/code-search.aspx">IATA airport code</a> for the end city of the trip.</td>
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
                    EndRailStation</td>
<td valign="top">
                    The code for the arriving station of the booking.</td>
</tr>
<tr>
<td valign="top">
                    EndRailStationName</td>
<td valign="top">
                    The name of the arriving station of the booking.</td>
</tr>
<tr>
<td valign="top">
                    TimeZone</td>
<td valign="top">
                    The time zone of the booking. Format: One of the <a href="#tz">supported Olson or Windows Time Zones</a>.</td>
</tr>
</tbody>
</table>
### 
        <a id="tz" name="tz"></a>Time Zone Formats
<table border="1" bordercolor="#dbdbdb" cellpadding="3" cellspacing="0" width="90%">
<tbody>
<tr class="GrayTableHead">
<td colspan="4" valign="top">
                    Olson Time Zones</td>
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

