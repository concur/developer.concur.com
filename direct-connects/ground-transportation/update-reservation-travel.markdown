
        <div id="main" class="container">
            <div>
                            </div>
            <div class="row">
                <div class="span12">
<div class="breadcrumbs"><a href="/">Home</a>Ground Transportation - Update Reservation with Travel</div>
                </div>
            </div>

            <div id="content-wrapper">
<!-- <div class="row"> -->
                <div id="content" class="span9">
            # Ground Transportation - Update Reservation with Travel
                    <div class="section">
                    <div id="node-424" class="node clear-block">


    
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
## 
    Request
The following request is sent when the ground transportation service provider needs to send an update to the reservation to Travel.
<table border="1" bordercolor="#DBDBDB" cellpadding="3" cellspacing="0" width="100% ">
    <tbody>
        <tr class="GrayTableHead">
            <td colspan="2">
                Supported Accept Types</td>
        </tr>
        <tr>
            <td colspan="2">
                
                    * 
                        application/xml
                
            </td>
        </tr>
        <tr class="GrayTableHead">
            <td colspan="2">
                Request URI</td>
        </tr>
        <tr>
            <td colspan="2">
                <pre class="overflow_box">
https://app2.outtask.com/api/tws/v1.0/Limo/PostBack</pre>
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
                Authorization header with Basic credentials. The credentials are established during application review.</td>
            <td valign="top" width="50%">
                None</td>
        </tr>
        <tr class="GrayTableHead">
            <td colspan="2">
                Request Body</td>
        </tr>
        <tr>
            <td colspan="2">
                The request will contain a **CC_LimoPostBackRequest** parent element, containing the following child elements:
                <table border="1" bordercolor="#DBDBDB" cellpadding="3" cellspacing="0" width="100% ">
                    <tbody>
                        <tr class="GrayTableHead">
                            <td valign="top" width="26%">
                                Element</td>
                            <td valign="top" width="10%">
                                Required (must contain value)?</td>
                            <td valign="top" width="64%">
                                Description</td>
                        </tr>
                        <tr>
                            <td valign="top">
                                Error</td>
                            <td valign="top">
                                Y</td>
                            <td valign="top">
                                The error information, if an error occurred. This parent element contains the following child elements:<br />
                                <br />
                                <table border="1" bordercolor="#CCCCCC" cellpadding="3" cellspacing="0">
                                    <tbody>
                                        <tr>
                                            <td>
                                                ErrorCode</td>
                                            <td>
                                                The code for the error. Will contain one of the following values:
                                                <blockquote>
                                                    100: Pickup/dropoff location related error<br />
                                                    200: Pickup/dropoff time related error<br />
                                                    300: Other request parameters related error<br />
                                                    400: Credential related error<br />
                                                    500: No rate/service available<br />
                                                    600: FOP related error<br />
                                                    900: Unknown error</blockquote>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                ErrorSource</td>
                                            <td>
                                                The source of the error.</td>
                                        </tr>
                                        <tr>
                                            <td>
                                                ErrorDescription</td>
                                            <td>
                                                The additional error information.</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </td>
                        </tr>
                        <tr>
                            <td valign="top">
                                ReservationID</td>
                            <td valign="top">
                                N</td>
                            <td valign="top">
                                The identifier for the reservation.</td>
                        </tr>
                        <tr>
                            <td valign="top">
                                Status</td>
                            <td valign="top">
                                N</td>
                            <td valign="top">
                                The status of the reservation. The value will be one of the following:<br />
                                <br />
                                RB: Reservation Booked<br />
                                RA: Reservation Accepted<br />
                                RD: Reservation Declined<br />
                                CB: Change Booked<br />
                                CA: Change Accepted<br />
                                CD: Change Declined<br />
                                XB: Cancellation Requested<br />
                                XA: Cancellation Accepted<br />
                                XD: Cancellation Declined<br />
                                RC: Reservation Closed</td>
                        </tr>
                        <tr>
                            <td valign="top">
                                ConfNum</td>
                            <td valign="top">
                                N</td>
                            <td valign="top">
                                The confirmation number for the reservation.</td>
                        </tr>
                        <tr>
                            <td valign="top">
                                CancelPolicy</td>
                            <td valign="top">
                                N</td>
                            <td valign="top">
                                The cancellation policy for the reservation.</td>
                        </tr>
                        <tr>
                            <td valign="top">
                                CancelNum</td>
                            <td valign="top">
                                N</td>
                            <td valign="top">
                                The cancellation number for the reservation.</td>
                        </tr>
                        <tr>
                            <td valign="top">
                                PrimaryPassenger</td>
                            <td valign="top">
                                Y</td>
                            <td valign="top">
                                The passenger contact name for the reservation. This parent element contains the following child elements:<br />
                                <br />
                                <table border="1" bordercolor="#CCCCCC" cellpadding="3" cellspacing="0" width="100%">
                                    <tbody>
                                        <tr>
                                            <td>
                                                FirstName</td>
                                            <td>
                                                The contact's first name.</td>
                                        </tr>
                                        <tr>
                                            <td>
                                                LastName</td>
                                            <td>
                                                The contact's last name.</td>
                                        </tr>
                                        <tr>
                                            <td>
                                                Phone</td>
                                            <td>
                                                The contact's phone number.</td>
                                        </tr>
                                        <tr>
                                            <td>
                                                Phone2</td>
                                            <td>
                                                The contact's backup phone number.</td>
                                        </tr>
                                        <tr>
                                            <td>
                                                CellPhone</td>
                                            <td>
                                                The contact's cell phone number.</td>
                                        </tr>
                                        <tr>
                                            <td>
                                                EmailAddress</td>
                                            <td>
                                                The contact's email address.</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </td>
                        </tr>
                        <tr>
                            <td valign="top">
                                ServiceType</td>
                            <td valign="top">
                                Y</td>
                            <td valign="top">
                                The type of service requested. Will contain one of the following values:<br />
                                <br />
                                100: Point to point<br />
                                110: One way to airport<br />
                                111: One way from airport<br />
                                120: One way to train station<br />
                                121: One way from train station<br />
                                200: Hourly<br />
                                300: Airport to airport</td>
                        </tr>
                        <tr>
                            <td valign="top">
                                ClassOfService</td>
                            <td valign="top">
                                N</td>
                            <td valign="top">
                                The requested service class. Will contain one of the following values:<br />
                                <br />
                                100: Normal<br />
                                200: High<br />
                                300: Highest<br />
                                <br />
                                If this value is not provided by the user, it will default to 100.</td>
                        </tr>
                        <tr>
                            <td valign="top">
                                PickupLocation</td>
                            <td valign="top">
                                Y</td>
                            <td valign="top">
                                The pick up location. This parent element contains the following child elements:<br />
                                <br />
                                <table border="1" bordercolor="#CCCCCC" cellpadding="3" cellspacing="0">
                                    <tbody>
                                        <tr>
                                            <td>
                                                LocationType</td>
                                            <td>
                                                One of the following: 100 - Address, 200 - Airport, 300 - Train station.</td>
                                        </tr>
                                        <tr>
                                            <td>
                                                Airport</td>
                                            <td>
                                                Refer to the <a href="#airport">Airport Elements table</a>. Provided if the LocationType = 200.</td>
                                        </tr>
                                        <tr>
                                            <td>
                                                TrainStation</td>
                                            <td>
                                                Refer to the <a href="#train">Train Station Elements table</a>. Provided if the LocationType = 300.</td>
                                        </tr>
                                        <tr>
                                            <td>
                                                Address</td>
                                            <td>
                                                The street address of the location. Provided if the LocationType = 100.</td>
                                        </tr>
                                        <tr>
                                            <td>
                                                City</td>
                                            <td>
                                                The location city.</td>
                                        </tr>
                                        <tr>
                                            <td>
                                                State</td>
                                            <td>
                                                The location state. Preferably 2 characters, max 10 characters.</td>
                                        </tr>
                                        <tr>
                                            <td>
                                                Country</td>
                                            <td>
                                                The location's <a href="http://en.wikipedia.org/wiki/ISO_3166-1_alpha-2"> 2 character ISO 3166-1 alpha-2</a> country code. Example: US</td>
                                        </tr>
                                        <tr>
                                            <td>
                                                PostalCode</td>
                                            <td>
                                                The location postal code.</td>
                                        </tr>
                                        <tr>
                                            <td>
                                                ExtraNotes</td>
                                            <td>
                                                Additional notes about the location. Example: Ring doorbell, Holiday Inn, etc.</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </td>
                        </tr>
                        <tr>
                            <td valign="top">
                                DropoffLocation</td>
                            <td valign="top">
                                Y</td>
                            <td valign="top">
                                The drop off location. This parent element contains the following child elements:<br />
                                <br />
                                <table border="1" bordercolor="#CCCCCC" cellpadding="3" cellspacing="0">
                                    <tbody>
                                        <tr>
                                            <td>
                                                LocationType</td>
                                            <td>
                                                One of the following: 100 - Address, 200 - Airport, 300 - Train station, 400 - As directed.</td>
                                        </tr>
                                        <tr>
                                            <td>
                                                Airport</td>
                                            <td>
                                                Refer to the <a href="#airport">Airport Elements table</a>. Provided if the LocationType = 200.</td>
                                        </tr>
                                        <tr>
                                            <td>
                                                TrainStation</td>
                                            <td>
                                                Refer to the <a href="#train">Train Station Elements table</a>. Provided if the LocationType = 300.</td>
                                        </tr>
                                        <tr>
                                            <td>
                                                Address</td>
                                            <td>
                                                The street address of the location. Provided if the LocationType = 100.</td>
                                        </tr>
                                        <tr>
                                            <td>
                                                City</td>
                                            <td>
                                                The location city.</td>
                                        </tr>
                                        <tr>
                                            <td>
                                                State</td>
                                            <td>
                                                The location state. Preferably 2 characters, max 10 characters.</td>
                                        </tr>
                                        <tr>
                                            <td>
                                                Country</td>
                                            <td>
                                                The location's <a href="http://en.wikipedia.org/wiki/ISO_3166-1_alpha-2"> 2 character ISO 3166-1 alpha-2</a> country code. Example: US</td>
                                        </tr>
                                        <tr>
                                            <td>
                                                PostalCode</td>
                                            <td>
                                                The location postal code.</td>
                                        </tr>
                                        <tr>
                                            <td>
                                                ExtraNotes</td>
                                            <td>
                                                Additional notes about the location. Example: Apartment Building, gravel driveway, etc.</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </td>
                        </tr>
                        <tr>
                            <td valign="top">
                                StartDateTime</td>
                            <td valign="top">
                                Y</td>
                            <td valign="top">
                                The time, in GMT, that the reservation must begin.<br />
                                **Format**: 2015-05-19T18:00:00</td>
                        </tr>
                        <tr>
                            <td valign="top">
                                EndDateTime</td>
                            <td valign="top">
                                N</td>
                            <td valign="top">
                                The time, in GMT that the reservation will end. Provided for hourly reservations. **Format**: 2015-05-19T18:00:00</td>
                        </tr>
                        <tr>
                            <td valign="top">
                                PickupInstructions</td>
                            <td valign="top">
                                N</td>
                            <td valign="top">
                                Additional instructions about the pick up request.</td>
                        </tr>
                        <tr>
                            <td valign="top">
                                DropoffInstructions</td>
                            <td valign="top">
                                N</td>
                            <td valign="top">
                                Additional instructions about the drop off request.</td>
                        </tr>
                        <tr>
                            <td valign="top">
                                LanguageCode</td>
                            <td valign="top">
                                Y</td>
                            <td valign="top">
                                The language of the traveler. Will be one of the following options:<br />
                                <br />
                                en: English<br />
                                en-us: English (US)<br />
                                en-gb: English (UK)<br />
                                fr: French<br />
                                fr-ca: French (Canadian)<br />
                                de: German<br />
                                pt: Portuguese<br />
                                es: Spanish<br />
                                nl: Dutch<br />
                                it: Italian<br />
                                ja: Japanese<br />
                                pl: Polish<br />
                                pt-br: Portuguese (Brazilian)<br />
                                ru: Russian<br />
                                hu: Hungarian<br />
                                ko: Korean<br />
                                sv: Swedish<br />
                                zh-cn: Chinese<br />
                                zh-tw: Traditional Chinese</td>
                        </tr>
                        <tr>
                            <td valign="top">
                                Currency</td>
                            <td valign="top">
                                Y</td>
                            <td valign="top">
                                The <a href="http://en.wikipedia.org/wiki/ISO_4217">3-letter ISO 4217 currency code</a> for the reservation amount.</td>
                        </tr>
                        <tr>
                            <td valign="top">
                                NumPassengers</td>
                            <td valign="top">
                                N</td>
                            <td valign="top">
                                The number of passengers.</td>
                        </tr>
                        <tr>
                            <td valign="top">
                                RequestedDriver</td>
                            <td valign="top">
                                N</td>
                            <td valign="top">
                                The name of the requested driver, if available.</td>
                        </tr>
                        <tr>
                            <td valign="top">
                                SpecialServiceRequest</td>
                            <td valign="top">
                                N</td>
                            <td valign="top">
                                The details of the special service request, if available.</td>
                        </tr>
                        <tr>
                            <td valign="top">
                                PickupServiceArrangement</td>
                            <td valign="top">
                                N</td>
                            <td valign="top">
                                The details of the pickup arrangement, if available.</td>
                        </tr>
                        <tr>
                            <td valign="top">
                                DropoffServiceArrangement</td>
                            <td valign="top">
                                N</td>
                            <td valign="top">
                                The details of the dropoff arrangement, if available.</td>
                        </tr>
                        <tr>
                            <td valign="top">
                                ExtraStopArrangement</td>
                            <td valign="top">
                                N</td>
                            <td valign="top">
                                The details of the extra stop arrangement, if available.</td>
                        </tr>
                        <tr>
                            <td valign="top">
                                RateInfo</td>
                            <td valign="top">
                                Y</td>
                            <td valign="top">
                                The booked rate details. Refer to the <a href="#rateinfo">Rate Information Elements</a> table for more information.</td>
                        </tr>
                        <tr>
                            <td valign="top">
                                Vehicle</td>
                            <td valign="top">
                                Y</td>
                            <td valign="top">
                                The vehicle details. This parent element contains the following child elements:<br />
                                <br />
                                <table border="1" bordercolor="#CCCCCC" cellpadding="3" cellspacing="0">
                                    <tbody>
                                        <tr>
                                            <td>
                                                VehicleType</td>
                                            <td>
                                                One of the following values:<br />
                                                100: Sedan<br />
                                                200: Limo<br />
                                                250: Stretch Limo<br />
                                                300: SUV<br />
                                                350: Stretch SUV<br />
                                                400: Van<br />
                                                450: Mini-Bus<br />
                                                500: Motor Coach<br />
                                                600: Shuttle<br />
                                                700: Trolley<br />
                                                800: Carriage<br />
                                                900: Any</td>
                                        </tr>
                                        <tr>
                                            <td>
                                                Description</td>
                                            <td>
                                                The vehicle description.</td>
                                        </tr>
                                        <tr>
                                            <td>
                                                MaxPassengers</td>
                                            <td>
                                                The maximum number of passengers for the car. Must be greater than zero.</td>
                                        </tr>
                                        <tr>
                                            <td>
                                                VehicleID</td>
                                            <td>
                                                Information to identify the specific vehicle.</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </td>
                        </tr>
                        <tr>
                            <td valign="top">
                                Vendor</td>
                            <td valign="top">
                                Y</td>
                            <td valign="top">
                                The reservation vendor. This parent element contains the following child elements:<br />
                                <br />
                                <table border="1" bordercolor="#CCCCCC" cellpadding="3" cellspacing="0" width="100%">
                                    <tbody>
                                        <tr>
                                            <td>
                                                VendorCode</td>
                                            <td>
                                                The vendor code for the vendor.</td>
                                        </tr>
                                        <tr>
                                            <td>
                                                VendorName</td>
                                            <td>
                                                The vendor's name.</td>
                                        </tr>
                                        <tr>
                                            <td>
                                                PhoneNumber</td>
                                            <td>
                                                The vendor's phone number.</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </td>
                        </tr>
                        <tr>
                            <td valign="top">
                                FormOfPayment</td>
                            <td valign="top">
                                Y</td>
                            <td valign="top">
                                The form of payment for the reservation. This parent element contains one of the following child elements:<br />
                                <br />
                                <table border="1" bordercolor="#CCCCCC" cellpadding="3" cellspacing="0">
                                    <tbody>
                                        <tr>
                                            <td>
                                                CreditCard</td>
                                            <td>
                                                If present, the passenger will pay with credit card. Refer to the <a href="#cc2">Reply Credit Card Elements</a> table for the child elements.</td>
                                        </tr>
                                        <tr>
                                            <td>
                                                Cash</td>
                                            <td>
                                                If present, the passenger will pay cash.</td>
                                        </tr>
                                        <tr>
                                            <td>
                                                Check</td>
                                            <td>
                                                If present, the passenger will pay with a check.</td>
                                        </tr>
                                        <tr>
                                            <td>
                                                DirectBilling</td>
                                            <td>
                                                If present, the passenger will pay through direct billing.</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </td>
                        </tr>
                        <tr>
                            <td valign="top">
                                RateDisclaimer</td>
                            <td valign="top">
                                N</td>
                            <td valign="top">
                                Disclaimer text about the rate.</td>
                        </tr>
                        <tr>
                            <td valign="top">
                                ProviderFeedback</td>
                            <td valign="top">
                                N</td>
                            <td valign="top">
                                Any additional feedback from the supplier.</td>
                        </tr>
                        <tr>
                            <td valign="top">
                                AccountingInfo</td>
                            <td valign="top">
                                N</td>
                            <td valign="top">
                                The accounting information for the reservation. This parent element contains the following child elements:<br />
                                <br />
                                <table border="1" bordercolor="#CCCCCC" cellpadding="3" cellspacing="0" width="100%">
                                    <tbody>
                                        <tr>
                                            <td>
                                                AccountingField1 through AccountingField5</td>
                                            <td>
                                                These fields contain detailed accounting information.</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <br />
                <table border="1" bordercolor="#DBDBDB" cellpadding="3" cellspacing="0" width="100% ">
                    <tbody>
                        <tr class="GrayTableHead">
                            <td colspan="2" valign="top">
                                <a id="airport" name="airport"></a>Airport Elements</td>
                        </tr>
                        <tr class="GrayTableHead">
                            <td valign="top" width="30%">
                                Element</td>
                            <td valign="top" width="70%">
                                Description</td>
                        </tr>
                        <tr>
                            <td valign="top">
                                AirportCode</td>
                            <td valign="top">
                                The <a href="http://en.wikipedia.org/wiki/International_Air_Transport_Association_airport_code">IATA code</a> for the airport.</td>
                        </tr>
                        <tr>
                            <td valign="top">
                                Flight</td>
                            <td valign="top">
                                The flight information. This parent element contains the following child elements:<br />
                                <br />
                                <table border="1" bordercolor="#CCCCCC" cellpadding="3" cellspacing="0">
                                    <tbody>
                                        <tr>
                                            <td>
                                                CarrierCode</td>
                                            <td>
                                                The airline code.</td>
                                        </tr>
                                        <tr>
                                            <td>
                                                FlightNumber</td>
                                            <td>
                                                The flight number.</td>
                                        </tr>
                                        <tr>
                                            <td>
                                                ArrivalDateTime</td>
                                            <td>
                                                The flight arrival time. Only provided for the PickupLocation element.<br />
                                                **Format**: 2015-05-19T18:00:00</td>
                                        </tr>
                                        <tr>
                                            <td>
                                                DepartureDateTime</td>
                                            <td>
                                                The flight departure time. Only provided for the DropoffLocation element.<br />
                                                **Format**: 2015-05-19T18:00:00</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <br />
                <table border="1" bordercolor="#DBDBDB" cellpadding="3" cellspacing="0" width="100% ">
                    <tbody>
                        <tr class="GrayTableHead">
                            <td colspan="2" valign="top">
                                <a id="train" name="train"></a>Train Station Elements</td>
                        </tr>
                        <tr class="GrayTableHead">
                            <td valign="top" width="30%">
                                Element</td>
                            <td valign="top" width="70%">
                                Description</td>
                        </tr>
                        <tr>
                            <td valign="top">
                                StationCode</td>
                            <td valign="top">
                                The station code.</td>
                        </tr>
                        <tr>
                            <td valign="top">
                                StationName</td>
                            <td valign="top">
                                The name of the station.</td>
                        </tr>
                        <tr>
                            <td valign="top">
                                City</td>
                            <td valign="top">
                                The city the station is located in.</td>
                        </tr>
                        <tr>
                            <td valign="top">
                                State</td>
                            <td valign="top">
                                The state the station is located in. Preferably 2 characters, max 10 characters.</td>
                        </tr>
                        <tr>
                            <td valign="top">
                                Train</td>
                            <td valign="top">
                                The train information. This parent element contains the following child elements:<br />
                                <br />
                                <table border="1" bordercolor="#CCCCCC" cellpadding="3" cellspacing="0">
                                    <tbody>
                                        <tr>
                                            <td>
                                                CarrierCode</td>
                                            <td>
                                                The code of the train carrier.</td>
                                        </tr>
                                        <tr>
                                            <td>
                                                CarrierName</td>
                                            <td>
                                                The name of the train carrier.</td>
                                        </tr>
                                        <tr>
                                            <td>
                                                TrainNumber</td>
                                            <td>
                                                The train number.</td>
                                        </tr>
                                        <tr>
                                            <td>
                                                ArrivalDateTime</td>
                                            <td>
                                                The train arrival time. Only provided for the PickupLocation element.<br />
                                                **Format**: 2015-05-19T18:00:00</td>
                                        </tr>
                                        <tr>
                                            <td>
                                                DepartureDateTime</td>
                                            <td>
                                                The train arrival time. Only provided for the PickupLocation element.<br />
                                                **Format**: 2015-05-19T18:00:00</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <br />
                <table border="1" bordercolor="#DBDBDB" cellpadding="3" cellspacing="0" width="100% ">
                    <tbody>
                        <tr class="GrayTableHead">
                            <td colspan="3" valign="top">
                                <a id="rateinfo" name="rateinfo"></a>Rate Information Elements</td>
                        </tr>
                        <tr class="GrayTableHead">
                            <td valign="top" width="23%">
                                Element</td>
                            <td valign="top" width="3%">
                                Required (must contain value)?</td>
                            <td valign="top" width="74%">
                                Description</td>
                        </tr>
                        <tr>
                            <td valign="top">
                                RateID</td>
                            <td valign="top">
                                Y</td>
                            <td valign="top">
                                The rate identifier.</td>
                        </tr>
                        <tr>
                            <td valign="top">
                                Rate</td>
                            <td valign="top">
                                Y</td>
                            <td valign="top">
                                The BasePrice + ServiceCharge + SurCharge + Tax</td>
                        </tr>
                        <tr>
                            <td valign="top">
                                RateTypeCode</td>
                            <td valign="top">
                                Y</td>
                            <td valign="top">
                                The code for the rate type. Will be one of the following options:<br />
                                <br />
                                F: Flat rate<br />
                                H: Hourly<br />
                                E: Estimated amount<br />
                                N: Currently not available</td>
                        </tr>
                        <tr>
                            <td valign="top">
                                CategoryCode</td>
                            <td valign="top">
                                N</td>
                            <td valign="top">
                                Extra information that will be passed back during sell request to help identify the rate.</td>
                        </tr>
                        <tr>
                            <td valign="top">
                                Currency</td>
                            <td valign="top">
                                Y</td>
                            <td valign="top">
                                The <a href="http://en.wikipedia.org/wiki/ISO_4217">3-letter ISO 4217 currency code</a> for the rate amount.</td>
                        </tr>
                        <tr>
                            <td valign="top">
                                NoRateText</td>
                            <td valign="top">
                                N</td>
                            <td valign="top">
                                Explanation of rate type. Provided if RateTypeCode = N</td>
                        </tr>
                        <tr>
                            <td valign="top">
                                MinHours</td>
                            <td valign="top">
                                N</td>
                            <td valign="top">
                                The minimum number of hours for the reservation.</td>
                        </tr>
                        <tr>
                            <td valign="top">
                                DiscountType</td>
                            <td valign="top">
                                N</td>
                            <td valign="top">
                                The type of discount applied.</td>
                        </tr>
                        <tr>
                            <td valign="top">
                                BasePrice</td>
                            <td valign="top">
                                N</td>
                            <td valign="top">
                                The reservation price without taxes, surcharges or service charges.</td>
                        </tr>
                        <tr>
                            <td valign="top">
                                ServiceCharge</td>
                            <td valign="top">
                                N</td>
                            <td valign="top">
                                The service charge for the reservation.</td>
                        </tr>
                        <tr>
                            <td valign="top">
                                SurCharge</td>
                            <td valign="top">
                                N</td>
                            <td valign="top">
                                This element contains the desc attribute, with text describing the reason for the surcharge. Example: <SurCharge desc=&quot;fuel&quot;></td>
                        </tr>
                        <tr>
                            <td valign="top">
                                Tax</td>
                            <td valign="top">
                                N</td>
                            <td valign="top">
                                The reservation tax.</td>
                        </tr>
                        <tr>
                            <td valign="top">
                                ExtraPickupCharge</td>
                            <td valign="top">
                                N</td>
                            <td valign="top">
                                Any additional fees for the pickup service.</td>
                        </tr>
                        <tr>
                            <td valign="top">
                                ExtraDropoffCharge</td>
                            <td valign="top">
                                N</td>
                            <td valign="top">
                                Any additional fees for the drop off service.</td>
                        </tr>
                        <tr>
                            <td valign="top">
                                OptionalExtraStopCharge</td>
                            <td valign="top">
                                N</td>
                            <td valign="top">
                                The charge for any additional stops.</td>
                        </tr>
                        <tr>
                            <td valign="top">
                                OptionalExtraTimeCharge</td>
                            <td valign="top">
                                N</td>
                            <td valign="top">
                                The charge for each additional hour.</td>
                        </tr>
                    </tbody>
                </table>
                <br />
                <table border="1" bordercolor="#DBDBDB" cellpadding="3" cellspacing="0" width="100% ">
                    <tbody>
                        <tr class="GrayTableHead">
                            <td colspan="3" valign="top">
                                <a id="cc2" name="cc2"></a>Credit Card Elements</td>
                        </tr>
                        <tr class="GrayTableHead">
                            <td valign="top" width="34%">
                                Element</td>
                            <td valign="top" width="13%">
                                Required (must contain value)?</td>
                            <td valign="top" width="53%">
                                Description</td>
                        </tr>
                        <tr>
                            <td valign="top">
                                Type</td>
                            <td valign="top">
                                Y</td>
                            <td valign="top">
                                The card type.</td>
                        </tr>
                        <tr>
                            <td valign="top">
                                Number</td>
                            <td valign="top">
                                Y</td>
                            <td valign="top">
                                The card number.</td>
                        </tr>
                        <tr>
                            <td valign="top">
                                Expiration</td>
                            <td valign="top">
                                Y</td>
                            <td valign="top">
                                The card expiration date. **Format**: 2013-02-19</td>
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
POST /api/tws/v1.0/Limo/PostBack HTTPS/1.1
Host: app2.outtask.com/
Authorization: Basic ...
Content-Type: application/xml
Content-Length: {length of content body}

<CC_LimoPostBackRequest>
    <Error>
        <ErrorCode />
        <ErrorSource />
        <ErrorDescription />
    </Error>
    <ReservationID>1234</ReservationID>
    <Status>CB</Status>
    <ConfNum/>
    <CancelPolicy />
    <CancelNum/>
    <PrimaryPassenger>
        <FirstName>Chris</FirstName>
        <LastName>Miller</LastName>
        <Phone>5551234567</Phone>
        <Phone2>5551234568</Phone2>
        <CellPhone>5551234555</CellPhone>
        <EmailAddress>cmiller@example.com</EmailAddress>
    </PrimaryPassenger>
    <ServiceType>110</ServiceType>
    <ClassOfService />
    <PickupLocation>
        <LocationType>100</LocationType>
        <Airport>
            <AirportCode />
            <Flight>
                <CarrierCode />
                <FlightNumber />
                <ArrivalDateTime />
            </Flight>
        </Airport>
        <TrainStation>
            <StationCode />
            <StationName />
            <City />
            <State />
            <Train>
                <CarrierCode />
                <CarrierName />
                <TrainNumber />
            </Train>
        </TrainStation>
        <Address>209 Madison St #400</Address>
        <City>Alexandria</City>
        <State>VA</State>
        <Country>US</Country>
        <PostalCode>22314</PostalCode>
        <ExtraNotes />
    </PickupLocation>
    <DropoffLocation>
        <LocationType>200</LocationType>
        <Airport>
            <AirportCode>DCA</AirportCode>
            <Flight>
                <CarrierCode>UA</CarrierCode>
                <FlightNumber>333</FlightNumber>
                <DepartureDateTime>2012-02-19T11:29:00</DepartureDateTime>
            </Flight>
        </Airport>
        <TrainStation>
            <StationCode />
            <StationName />
            <City />
            <State />
            <Train>
                <CarrierCode />
                <CarrierName />
                <TrainNumber />
                <DepartureDateTime />
            </Train>
        </TrainStation>
        <Address />
        <City />
        <State />
        <Country />
        <PostalCode />
        <ExtraNotes />
    </DropoffLocation>
    <StartDateTime>2012-02-19T09:00:00</StartDateTime>
    <EndDateTime />
    <PickupInstructions>pick me up</PickupInstructions>
    <DropoffInstructions>None</DropoffInstructions>
    <LanguageCode>en-us</LanguageCode>
    <Currency>USD</Currency>
    <NumPassengers>1</NumPassengers>
    <RequestedDriver />
    <SpecialServiceRequest />
    <PickupServiceArrangement />
    <DropoffServiceArrangement />
    <ExtraStopArrangement />
    <RateInfo>
        <RateID>5</RateID>
        <Rate>42.50</Rate>
        <RateTypeCode>E</RateTypeCode>
        <CategoryCode />
        <MinHours />
        <Currency>US</Currency>
        <NoRateText />
        <DiscountType />
        <BasePrice>35.00</BasePrice>
        <ServiceCharge>5.00</ServiceCharge>
        <SurCharge <span class="xml-attribute">desc=<span class="xml-value">&quot;fuel&quot;>1.00</SurCharge>
        <Tax>1.50</Tax>
        <ExtraPickupCharge />
        <ExtraDropoffCharge />
        <OptionalExtraStopCharge />
        <OptionalExtraTimeCharge />
        <Message />
    </RateInfo>
    <RateDisclaimer />
    <Vehicle>
        <VehicleType>100</VehicleType>
        <Description>This is a Sedan.</Description>
        <MaxPassengers>1</MaxPassengers>
        <VehicleID>12</VehicleID>
    </Vehicle>
    <Vendor>
        <VendorCode>LML</VendorCode>
        <VendorName>LimoVendor</VendorName>
        <PhoneNumber>4354654654</PhoneNumber>
    </Vendor>
    <ProviderFeedback />
    <FormOfPayment>
        <Cash />
        <Check />
        <DirectBilling />
        <CreditCard>
            <Type>VI</Type>
            <Number>XXXXXXXXXXXX1111</Number>
            <Expiration>2013-02-19</Expiration>
        </CreditCard>
    </FormOfPayment>
    <AccountingInfo>
        <AccountingField1>715</AccountingField1>
        <AccountingField2>temp@outtask.com</AccountingField2>
        <AccountingField3>11</AccountingField3>
        <AccountingField4>Development</AccountingField4>
        <AccountingField5/>
    </AccountingInfo>
</CC_LimoPostBackRequest>
</pre>
## 
    Response
Concur responds to the supplier request with a result message.
<table border="1" bordercolor="#DBDBDB" cellpadding="3" cellspacing="0" width="100% ">
    <tbody>
        <tr class="GrayTableHead">
            <td colspan="2">
                Supported Content Types</td>
        </tr>
        <tr>
            <td colspan="2">
                
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
                The response will include a **CC_LimoPostBackResponse** parent element, with the following child elements:<br />
                Successful post:
                <table border="1" bordercolor="#DBDBDB" cellpadding="3" cellspacing="0" width="100% ">
                    <tbody>
                        <tr class="GrayTableHead">
                            <td valign="top" width="34%">
                                Element</td>
                            <td valign="top" width="53%">
                                Description</td>
                        </tr>
                        <tr>
                            <td valign="top">
                                Success</td>
                            <td valign="top">
                                This element contains the message detailing the change.</td>
                        </tr>
                    </tbody>
                </table>
                Failed post:
                <table border="1" bordercolor="#DBDBDB" cellpadding="3" cellspacing="0" width="100% ">
                    <tbody>
                        <tr class="GrayTableHead">
                            <td valign="top" width="34%">
                                Element</td>
                            <td valign="top" width="53%">
                                Description</td>
                        </tr>
                        <tr>
                            <td valign="top">
                                Version</td>
                            <td valign="top">
                                The API version, currently 1.0.</td>
                        </tr>
                        <tr>
                            <td valign="top">
                                Error</td>
                            <td valign="top">
                                This element contains the error text.</td>
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
200 OK HTTPS/1.1 
<CC_LimoPostBackResponse>
    <Success>Updated Trip Status successfully.</Success>
</CC_LimoPostBackResponse>
</pre>
####
    XML Example of Response with Error
<pre class="overflow_box">
<CC_LimoPostBackResponse>
    <Version>1.0</Version>
    <Error>This reservation does not exist in the Concur database.</Error>
</CC_LimoPostBackResponse>
</pre>
<br />
