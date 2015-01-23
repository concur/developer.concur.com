
        <div id="main" class="container">
            <div>
                            </div>
            <div class="row">
                <div class="span12">
<div class="breadcrumbs"><a href="/">Home</a>Hotel - Post New Reservation</div>
                </div>
            </div>

            <div id="content-wrapper">
<!-- <div class="row"> -->
                <div id="content" class="span9">
            # Hotel - Post New Reservation
                    <div class="section">
                    <div id="node-438" class="node clear-block">


    
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
The following request is sent when the Travel user creates a reservation for the supplied hotel. The response includes the reservation details.
<table border="1" bordercolor="#DBDBDB" cellpadding="3" cellspacing="0" width="100% ">
    <tbody>
        <tr class="GrayTableHead">
            <td>
                Supported Accept Types</td>
            <td>
                Encoding</td>
        </tr>
        <tr>
            <td>
                
                    * 
                        application/xml
                
            </td>
            <td>
                UTF-8</td>
        </tr>
        <tr class="GrayTableHead">
            <td colspan="2">
                Request URI</td>
        </tr>
        <tr>
            <td colspan="2">
                The Hotel direct connect sends the relevant information to a URI that the travel supplier maintains. The standard location is:
                <pre class="overflow_box">
https://{servername}/concur/hotel/v1/</pre>
                The URI is configured by the supplier when registering the partner application. Refer to **Core Concepts ><a href="https://developer.concur.com/node/203"> Partner Applications</a> **for more information.</td>
        </tr>
        <tr class="GrayTableHead">
            <td>
                Request Headers - Required</td>
            <td>
                Request Headers - Optional</td>
        </tr>
        <tr>
            <td width="50%">
                Authorization header with Basic credentials. Refer to the <a href="https://developer.concur.com/node/434#security">Security</a> documentation for more information.</td>
            <td valign="top" width="50%">
                None</td>
        </tr>
        <tr class="GrayTableHead">
            <td colspan="2">
                Request Body</td>
        </tr>
        <tr>
            <td colspan="2">
                The request will contain a **OTA_HotelResRQ** parent element, containing the following attributes:
                
                    * 
                        xmlns
                    * 
                        EchoToken
                    * 
                        TimeStamp
                    * 
                        PrimaryLangID
                    * 
                        xmlns:xsi
                    * 
                        xsi:schemaLocation
                    * 
                        Version
                
                The** OTA_HotelResRQ **parent element contains the following child elements:
                <table border="1" bordercolor="#DBDBDB" cellpadding="3" cellspacing="0" width="100% ">
                    <tbody>
                        <tr class="GrayTableHead">
                            <td valign="top" width="30%">
                                Element</td>
                            <td valign="top" width="70%">
                                Description</td>
                        </tr>
                        <tr>
                            <td valign="top">
                                POS</td>
                            <td valign="top">
                                The point of sale information. This parent element contains the following child element:
                                <table border="1" bordercolor="#CCCCCC" cellpadding="3" cellspacing="0">
                                    <tbody>
                                        <tr>
                                            <td>
                                                Source</td>
                                            <td>
                                                The source of the request. This element has the following attributes:
                                                
                                                    * 
                                                        **ISOCountry**: The country code for the Travel user's home country.
                                                    * 
                                                        **ISOCurrency**: The <a href="http://en.wikipedia.org/wiki/ISO_4217">3-letter ISO 4217 currency code</a> for the Travel user's currency.
                                                
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                                The **Source** element has the following child element:
                                <table border="1" bordercolor="#CCCCCC" cellpadding="3" cellspacing="0">
                                    <tbody>
                                        <tr>
                                            <td>
                                                RequestorID</td>
                                            <td>
                                                The corporate identifier. If necessary, multiple RequestorID elements can be sent. This element has the following attributes:
                                                
                                                    * 
                                                        **Type**: The type code for the corporate identifier. Should be one of the supported <a href="https://developer.concur.com/node/434#idtypes">ID Type Codes</a>.
                                                    * 
                                                        **ID**: The corporate identifier.
                                                    * 
                                                        **ID_Context**: The corporate identifier context.
                                                
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </td>
                        </tr>
                        <tr>
                            <td valign="top">
                                HotelReservations
                            </td>
                            <td valign="top">
                                This element has a **HotelReservation** child element. The **HotelReservation** element contains the following child elements:
                                <table border="1" bordercolor="#CCCCCC" cellpadding="3" cellspacing="0">
                                    <tbody>
                                        <tr>
                                            <td>
                                                RoomStays</td>
                                            <td>
                                                This parent element contains the **RoomStay** element. Refer to the <a href="#roomstaychild">RoomStay Request Child Elements</a> table for more information.</td>
                                        </tr>
                                        <tr>
                                            <td>
                                                ResGuests</td>
                                            <td>
                                                This parent element contains the **ResGuest** element. The **ResGuest** element contains the **Profiles** element. The **Profiles** element contains the **ProfileInfo** element, which contains a **Profile** child element for each guest. The **Profile** child element contains the **Customer** parent element, with the following child elements:
                                                <table border="1" bordercolor="#CCCCCC" cellpadding="3" cellspacing="0">
                                                    <tbody>
                                                        <tr>
                                                            <td>
                                                                PersonName</td>
                                                            <td>
                                                                This element contains the following child elements:
                                                                **NamePrefix**: The user's name prefix.<br />
                                                                    **GivenName**: The user's given name.<br />
                                                                    **Surname**: The user' surname.
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                Telephone</td>
                                                            <td>
                                                                This element has a PhoneNumber attribute containing the guests' phone number.</td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                Email</td>
                                                            <td>
                                                                The guest's email address.</td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                Address</td>
                                                            <td>
                                                                This parent element has the following child elements:
                                                                **AddressLine**: The first address line.<br />
                                                                    **CityName**: The address city.<br />
                                                                    **PostalCode**: The address postal code.<br />
                                                                    **StateProv**: The address state/province.<br />
                                                                    **CountryName**: The 3-character address country name. Format: USA
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                ResGlobalInfo</td>
                                            <td>
                                                This parent element contains a **Memberships** child element. This element contains a **Membership** child element with the following attributes:
                                                
                                                    * 
                                                        **ProgramCode**: The name of the membership program.
                                                    * 
                                                        **AccountID**: The account number for the membership program.
                                                
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                TPA_Extensions</td>
                                            <td>
                                                This parent elements contains a **CustomFields** element that contains a **CustomField** element for each custom field in the request. The **CustomField** elements have the following attributes:
                                                
                                                    * 
                                                        **Name**: The name of the custom field.
                                                    * 
                                                        **Type**: The type of information the custom field contains.
                                                
                                                **NOTE**: Some of the regular profile fields can be included in the **CustomField** elements. Their Type = Profile. Supported fields are: Cost Center, Employee ID, Manager, Employee Title, Organization Unit and XML Sync ID. Sharing the profile item has to be enabled for the vendor (vendor requests these values), then it can be enabled in specific travel configurations (customer wants to share the items with the vendor).
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                                <br />
                                <table border="1" bordercolor="#DBDBDB" cellpadding="3" cellspacing="0" width="100% ">
                                    <tbody>
                                        <tr class="GrayTableHead">
                                            <td colspan="2" valign="top">
                                                <a id="roomstaychild" name="roomstaychild"></a>RoomStay Request Child Elements</td>
                                        </tr>
                                        <tr class="GrayTableHead">
                                            <td valign="top" width="30%">
                                                Element</td>
                                            <td valign="top" width="70%">
                                                Description</td>
                                        </tr>
                                        <tr>
                                            <td valign="top">
                                                RoomTypes</td>
                                            <td valign="top">
                                                This parent element contains the **RoomType** child element, with the NumberofUnits attribute indicating how many rooms of this type are included in the reservation.</td>
                                        </tr>
                                        <tr>
                                            <td valign="top">
                                                RatePlans</td>
                                            <td valign="top">
                                                This parent element contains the **RatePlan **child element, with the RatePlanCode attribute, specifying the rate plan code for the reservation.</td>
                                        </tr>
                                        <tr>
                                            <td valign="top">
                                                GuestCounts</td>
                                            <td valign="top">
                                                This parent element contains the **GuestCount **child element, with the following attributes:
                                                
                                                    * 
                                                        **AgeQualifyingCode**: The value for this element should be 10, which represents an Adult guest.
                                                    * 
                                                        **Count**: The number of guests included in the request.
                                                
                                            </td>
                                        </tr>
                                        <tr>
                                            <td valign="top">
                                                TimeSpan</td>
                                            <td valign="top">
                                                This element has the following attributes:
                                                
                                                    * 
                                                        **Start**: The start date of the reservation.
                                                    * 
                                                        **End**: The end date of the reservation.
                                                
                                            </td>
                                        </tr>
                                        <tr>
                                            <td valign="top">
                                                Guarantee</td>
                                            <td valign="top">
                                                This parent element contains the **GuaranteesAccepted** element. The **GuaranteesAccepted** element contains the **GuaranteeAccepted** element. This element has the GuaranteeTypeCode attribute, specifying the type of guarantee placed on the reservation. The **GuaranteeAccepted** parent element has a **PaymentCard** child element for card guarantees, with the following attributes:
                                                
                                                    * 
                                                        **CardCode**: The type of card. Refer to the <a href="https://developer.concur.com/sites/default/files/HotelCodes.pdf">Hotel Direct Connect Codes</a>.
                                                    * 
                                                        **CardNumber**: The card number.
                                                    * 
                                                        **ExpireDate**: The expiration date. Format: MMYY
                                                    * 
                                                        **SeriesCode**: The CVV value, it should be queried and passed only if hotel requires it.
                                                
                                                The **PaymentCard** parent element has the following child elements:
                                                <table border="1" bordercolor="#CCCCCC" cellpadding="3" cellspacing="0">
                                                    <tbody>
                                                        <tr>
                                                            <td>
                                                                CardHolderName</td>
                                                            <td>
                                                                The card holder's name.</td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                Address</td>
                                                            <td>
                                                                The billing address of the card. This parent element contains the following child elements:
                                                                **AddressLine**: The first address line.<br />
                                                                    **CityName**: The address city.<br />
                                                                    **PostalCode**: The address postal code.<br />
                                                                    **StateProv**: The address state/province.<br />
                                                                    **CountryName**: The 2-character address country name. Format: US
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td valign="top">
                                                BasicPropertyInfo</td>
                                            <td valign="top">
                                                This element contains the HotelCode attribute.</td>
                                        </tr>
                                        <tr>
                                            <td valign="top">
                                                Comments</td>
                                            <td valign="top">
                                                The comments on the reservation. This parent element contains a **Comment** child element for each comment associated with the reservation.</td>
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
    XML Example Request
<pre class="overflow_box">
POST /concur/hotel/v1 HTTPS/1.1
Host: example.com
Authorization: Basic ...
Content-Type: application/xml
Content-Length: {length of content body}

<span class="ST0"><?<span class="ST0">xml version=&quot;1.0&quot; encoding=&quot;UTF-8&quot; ?> 
<OTA_HotelResRQ <span class="xml-attribute">xmlns=<span class="xml-value">&quot;<span class="xml-value">http://www.opentravel.org/OTA/2003/05<span class="xml-value">&quot; <span class="xml-attribute">EchoToken=<span class="xml-value">&quot;ABC123&quot; <span class="xml-attribute">TimeStamp=<span class="xml-value">&quot;2012-01-01T19:00:00&quot; <span class="xml-attribute">PrimaryLangID=<span class="xml-value">&quot;en-us&quot; <span class="xml-attribute">xmlns:xsi=<span class="xml-value">&quot;<span class="xml-value">http://www.w3.org/2001/XMLSchema-instance<span class="xml-value">&quot; <span class="xml-attribute">xsi:schemaLocation=<span class="xml-value">&quot;<span class="xml-value">http://www.opentravel.org/OTA/2003/05<span class="xml-value"> ../Schemas/OTA_HotelResRQ.xsd&quot; <span class="xml-attribute">Version=<span class="xml-value">&quot;1&quot;>
    <POS>
        <Source <span class="xml-attribute">ISOCountry=<span class="xml-value">&quot;US&quot; <span class="xml-attribute">ISOCurrency=<span class="xml-value">&quot;USD&quot;>
            <RequestorID <span class="xml-attribute">Type=<span class="xml-value">&quot;18&quot; <span class="xml-attribute">ID=<span class="xml-value">&quot;7777777&quot; /> 
        </Source>
    </POS>
    <HotelReservations>
        <HotelReservation>
            <RoomStays>
                <RoomStay>
                    <RoomTypes>
                        <RoomType <span class="xml-attribute">NumberOfUnits=<span class="xml-value">&quot;1&quot; /> 
                    </RoomTypes>
                    <RatePlans>
                        <RatePlan <span class="xml-attribute">RatePlanCode=<span class="xml-value">&quot;222222&quot; /> 
                    </RatePlans>
                    <GuestCounts>
                        <GuestCount <span class="xml-attribute">AgeQualifyingCode=<span class="xml-value">&quot;10&quot; <span class="xml-attribute">Count=<span class="xml-value">&quot;1&quot; /> 
                    </GuestCounts>
                    <TimeSpan <span class="xml-attribute">Start=<span class="xml-value">&quot;2012-08-15&quot; <span class="xml-attribute">End=<span class="xml-value">&quot;2010-08-17&quot; /> 
                    <Guarantee>
                        <GuaranteesAccepted>
                            <GuaranteeAccepted <span class="xml-attribute">GuaranteeTypeCode=<span class="xml-value">&quot;CC&quot;>
                                <PaymentCard <span class="xml-attribute">CardCode=<span class="xml-value">&quot;AX&quot; <span class="xml-attribute">CardNumber=<span class="xml-value">&quot;4400000000000&quot; <span class="xml-attribute">ExpireDate=<span class="xml-value">&quot;1215&quot; <span class="xml-attribute">SeriesCode=<span class="xml-value">&quot;1234&quot;>
                                    <CardHolderName>CHRIS MILLER</CardHolderName> 
                                    <Address>
                                        <AddressLine>18400 NE UNION HILL RD.</AddressLine> 
                                        <CityName>REDMOND</CityName> 
                                        <PostalCode>98052</PostalCode> 
                                        <StateProv>WA</StateProv> 
                                        <CountryName>US</CountryName> 
                                    </Address>
                                </PaymentCard>
                            </GuaranteeAccepted>
                        </GuaranteesAccepted>
                    </Guarantee>
                    <BasicPropertyInfo <span class="xml-attribute">HotelCode=<span class="xml-value">&quot;HTL1111&quot; /> 
                    <Comments>
                        <Comment>NON-SMOKING</Comment> 
                        <Comment>not close to the elevator</Comment> 
                    </Comments>
                </RoomStay>
            </RoomStays>
            <ResGuests>
                <ResGuest>
                    <Profiles>
                        <ProfileInfo>
                            <Profile>
                                <Customer>
                                    <PersonName>
                                        <NamePrefix>Mr.</NamePrefix>
                                        <GivenName>CHRIS</GivenName> 
                                        <Surname>MILLER</Surname> 
                                    </PersonName>
                                    <Telephone <span class="xml-attribute">PhoneNumber=<span class="xml-value">&quot;212-555-1212&quot; /> 
                                    <Email>cmiller@example.com</Email> 
                                    <Address>
                                        <AddressLine>18400 NE Union Hill Rd.</AddressLine> 
                                        <CityName>Redmond</CityName> 
                                        <PostalCode>98052</PostalCode> 
                                        <StateProv>WA</StateProv> 
                                        <CountryName>USA</CountryName> 
                                    </Address>
                                </Customer>
                            </Profile>
                        </ProfileInfo>
                    </Profiles>
                </ResGuest>
            </ResGuests>
            <ResGlobalInfo>
                <Memberships>
                    <Membership <span class="xml-attribute">ProgramCode=<span class="xml-value">&quot;HotelLoyaltyProgram&quot; <span class="xml-attribute">AccountID=<span class="xml-value">&quot;987654321&quot; /> 
                </Memberships>
            </ResGlobalInfo>
            <TPA_Extensions>
                <CustomFields>
                    <CustomField <span class="xml-attribute">Name=<span class="xml-value">&quot;OrgUnit&quot; <span class="xml-attribute">Type=<span class="xml-value">&quot;Profile&quot;>Sales</CustomField>
                    <CustomField <span class="xml-attribute">Name=<span class="xml-value">&quot;XmlSyncId&quot; <span class="xml-attribute">Type=<span class="xml-value">&quot;Profile&quot;>9293kks8drf6s8f</CustomField>
                </CustomFields>
            </TPA_Extensions>
        </HotelReservation>
    </HotelReservations>
</OTA_HotelResRQ>
</pre>
## 
    Response
The supplier responds to the request by returning the details of the completed booking.
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
                The response will include a **OTA_HotelResRS** parent element, with the following attributes:
                
                    * 
                        xmlns
                    * 
                        EchoToken
                    * 
                        ResResponseType: The reservation status. Refer to the <a href="https://developer.concur.com/sites/default/files/HotelCodes.pdf">Hotel Direct Connect Codes</a> for the possible values.
                    * 
                        TimeStamp
                    * 
                        xmlns:xsi
                    * 
                        xsi:schemaLocation
                    * 
                        Version
                
                The **OTA_HotelResRS** parent element contains the following child elements:<br />
                <table border="1" bordercolor="#DBDBDB" cellpadding="3" cellspacing="0" width="100% ">
                    <tbody>
                        <tr class="GrayTableHead">
                            <td valign="top" width="11%">
                                Element</td>
                            <td valign="top" width="8%">
                                Required (must contain value)?</td>
                            <td valign="top" width="81%">
                                Description</td>
                        </tr>
                        <tr>
                            <td valign="top">
                                Success</td>
                            <td valign="top">
                                N</td>
                            <td valign="top">
                                This element is returned if the request was successful.</td>
                        </tr>
                        <tr>
                            <td valign="top">
                                HotelReservations</td>
                            <td valign="top">
                                Y</td>
                            <td valign="top">
                                This element has a **HotelReservation** child element. The **HotelReservation** element contains the following child elements:
                                <table border="1" bordercolor="#CCCCCC" cellpadding="3" cellspacing="0">
                                    <tbody>
                                        <tr>
                                            <td>
                                                RoomStays</td>
                                            <td>
                                                This parent element contains the **RoomStay** element. Refer to the <a href="#roomstaychildresponse">RoomStay Response Child Elements</a> table for more information.</td>
                                        </tr>
                                        <tr>
                                            <td>
                                                ResGuests</td>
                                            <td>
                                                This parent element contains the **ResGues**t element. Refer to the <a href="#resguestchildresponse">ResGuest Response Child Elements</a> table for more information.</td>
                                        </tr>
                                        <tr>
                                            <td>
                                                ResGlobalInfo</td>
                                            <td>
                                                This parent element contains a **HotelReservationIDs** parent element, which contains a **HotelReservationID** child element with the ResID_Value attribute, identifying the reservation.</td>
                                        </tr>
                                        <tr>
                                            <td>
                                                TPA_Extensions</td>
                                            <td>
                                                This parent element contains a **VoucherURL** child element. If you need to provide some voucher or certificate of purchase, please publish it on your server and provide the URL in the **VoucherURL** element.</td>
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
                                <a id="roomstaychildresponse" name="roomstaychildresponse"></a>RoomStay Response Child Elements</td>
                        </tr>
                        <tr class="GrayTableHead">
                            <td valign="top" width="30%">
                                Element</td>
                            <td valign="top" width="70%">
                                Description</td>
                        </tr>
                        <tr>
                            <td valign="top">
                                RoomTypes</td>
                            <td valign="top">
                                This parent element contains the **RoomType** child element, with the NumberofUnits attribute indicating how many rooms of this type are included in the reservation. The **RoomType** parent element has the **RoomDescription** child element. The **RoomDescription** element contains the **Text** element describing the room.</td>
                        </tr>
                        <tr>
                            <td valign="top">
                                RatePlans</td>
                            <td valign="top">
                                This parent element contains the **RatePlan** child element, with the RatePlanCode attribute, specifying the rate plan code for the reservation. The **RatePlan** parent element has the following child elements:
                                <table border="1" bordercolor="#CCCCCC" cellpadding="3" cellspacing="0">
                                    <tbody>
                                        <tr>
                                            <td>
                                                CancelPenalties</td>
                                            <td>
                                                This element contains the **CancelPenalty** parent element. The **CancelPenalty** element contains the **PenaltyDescription** element, with a **Text** child element containing the cancellation penalty text.</td>
                                        </tr>
                                        <tr>
                                            <td>
                                                RatePlanDescription</td>
                                            <td>
                                                This element contains a **Text** child element with the text description of the rate plan.</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </td>
                        </tr>
                        <tr>
                            <td valign="top">
                                RoomRates</td>
                            <td valign="top">
                                This parent element contains the **RoomRate** element, with a RatePlanCode attribute. The **RoomRate** element contains a **Rates** parent element, with a **Rate** child element for each included rate. The **Rate** is for each day, not the total rate. The **Rate** element has the following attributes:
                                
                                    * 
                                        EffectiveDate: The starting date for the rate.
                                    * 
                                        ExpireDate: The ending date for the rate.
                                
                                The **Rate** element contains the following child elements:
                                <table border="1" bordercolor="#CCCCCC" cellpadding="3" cellspacing="0">
                                    <tbody>
                                        <tr>
                                            <td>
                                                Base</td>
                                            <td>
                                                The base rate amount. This element contains the following attributes:
                                                
                                                    * 
                                                        AmountAfterTax: The rate amount with all taxes included.
                                                    * 
                                                        CurrencyCode: The <a href="http://en.wikipedia.org/wiki/ISO_4217">3-letter ISO 4217 currency code</a> for the rate amount.
                                                
                                                The **Base** element contains the **Taxes** child element. The **Taxes** element contains a **Tax** element for each included tax, with the following attributes:
                                                
                                                    * 
                                                        Amount: The amount of the tax.
                                                    * 
                                                        CurrencyCode: The The <a href="http://en.wikipedia.org/wiki/ISO_4217">3-letter ISO 4217 currency code</a> for the tax amount.
                                                
                                                The **Tax** element contains a **TaxDescription** parent element, with a **Text** child element containing the tax description text.
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </td>
                        </tr>
                        <tr>
                            <td valign="top">
                                GuestCounts</td>
                            <td valign="top">
                                This element contains a **GuestCount** element with the following attributes:
                                
                                    * 
                                        AgeQualifyingCode: The value for this element should be 10, which represents an Adult guest.
                                    * 
                                        Count: The number of guests included in the request.
                                
                            </td>
                        </tr>
                        <tr>
                            <td valign="top">
                                TimeSpan</td>
                            <td valign="top">
                                This element has the following attributes:
                                
                                    * 
                                        Start: The start date of the reservation.
                                    * 
                                        End: The end date of the reservation.
                                
                            </td>
                        </tr>
                        <tr>
                            <td valign="top">
                                BasicPropertyInfo</td>
                            <td valign="top">
                                This element contains the HotelCode and HotelName attributes. The **BasicPropertyInfo** parent element has an **Address** child element. The **Address** element has the following child elements:
                                <table border="1" bordercolor="#CCCCCC" cellpadding="3" cellspacing="0" width="100%">
                                    <tbody>
                                        <tr>
                                            <td>
                                                AddressLine</td>
                                            <td>
                                                The first address line.</td>
                                        </tr>
                                        <tr>
                                            <td>
                                                CityName</td>
                                            <td>
                                                The address city.</td>
                                        </tr>
                                        <tr>
                                            <td>
                                                PostalCode</td>
                                            <td>
                                                The address postal code.</td>
                                        </tr>
                                        <tr>
                                            <td>
                                                CountryName</td>
                                            <td>
                                                The 3-character address country name. Format: USA</td>
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
                                <a id="resguestchildresponse" name="resguestchildresponse"></a>ResGuest Response Child Elements</td>
                        </tr>
                        <tr class="GrayTableHead">
                            <td valign="top" width="30%">
                                Element</td>
                            <td valign="top" width="70%">
                                Description</td>
                        </tr>
                        <tr>
                            <td valign="top">
                                Profiles</td>
                            <td valign="top">
                                This parent element contains the **ProfileInfo** child element. The **ProfileInfo** element has the **Profile** child element. The **Profile** element contains the **Customer** element. The **Customer** element contains the **PersonName** element. The **PersonName** element contains the following child elements:
                                <table border="1" bordercolor="#CCCCCC" cellpadding="3" cellspacing="0" width="100%">
                                    <tbody>
                                        <tr>
                                            <td>
                                                NamePrefix</td>
                                            <td>
                                                The guest's name prefix.</td>
                                        </tr>
                                        <tr>
                                            <td>
                                                GivenName</td>
                                            <td>
                                                The guest's first name.</td>
                                        </tr>
                                        <tr>
                                            <td>
                                                Surname</td>
                                            <td>
                                                The guest's last name.</td>
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
200 OK HTTPS/1.1 
Content-Length: {length of content body}

<span class="ST0"><?<span class="ST0">xml version=&quot;1.0&quot; encoding=&quot;utf-8&quot; ?> 
<OTA_HotelResRS <span class="xml-attribute">xmlns=<span class="xml-value">&quot;<span class="xml-value">http://www.opentravel.org/OTA/2003/05<span class="xml-value">&quot; <span class="xml-attribute">EchoToken=<span class="xml-value">&quot;ABC123&quot; <span class="xml-attribute">ResResponseType=<span class="xml-value">&quot;Committed&quot; <span class="xml-attribute">TimeStamp=<span class="xml-value">&quot;2012-01-01T19:00:00&quot; <span class="xml-attribute">xmlns:xsi=<span class="xml-value">&quot;<span class="xml-value">http://www.w3.org/2001/XMLSchema-instance<span class="xml-value">&quot; <span class="xml-attribute">xsi:schemaLocation=<span class="xml-value">&quot;<span class="xml-value">http://www.opentravel.org/OTA/2003/05<span class="xml-value"> ../Schemas/OTA_HotelResRS.xsd&quot; <span class="xml-attribute">Version=<span class="xml-value">&quot;1&quot;>
    <Success /> 
    <HotelReservations>
        <HotelReservation>
            <RoomStays>
                <RoomStay>
                    <RoomTypes>
                        <RoomType <span class="xml-attribute">NumberOfUnits=<span class="xml-value">&quot;1&quot;>
                            <RoomDescription>
                                <Text>Standard Room</Text> 
                            </RoomDescription>
                        </RoomType>
                    </RoomTypes>
                    <RatePlans>
                        <RatePlan <span class="xml-attribute">RatePlanCode=<span class="xml-value">&quot;2222222&quot;>
                            <CancelPenalties>
                                <CancelPenalty>
                                    <PenaltyDescription>
                                        <Text>The hotel imposes the following cancellation penalty: Cancellations or changes made after 11:59 PM on Jun 18, 2012 are subject to a 1 Night Room and Tax penalty. The property makes no refunds for no shows or early checkouts.</Text> 
                                    </PenaltyDescription>
                                </CancelPenalty>
                            </CancelPenalties>
                            <RatePlanDescription>
                                <Text>Standard Room</Text> 
                            </RatePlanDescription>
                        </RatePlan>
                    </RatePlans>
                    <RoomRates>
                        <RoomRate <span class="xml-attribute">RatePlanCode=<span class="xml-value">&quot;2222222&quot;>
                            <Rates>
                                <Rate <span class="xml-attribute">EffectiveDate=<span class="xml-value">&quot;2012-08-15&quot; <span class="xml-attribute">ExpireDate=<span class="xml-value">&quot;2012-08-17&quot;>
                                    <Base <span class="xml-attribute">AmountAfterTax=<span class="xml-value">&quot;100.00&quot; <span class="xml-attribute">CurrencyCode=<span class="xml-value">&quot;USD&quot;>
                                        <Taxes>
                                            <Tax <span class="xml-attribute">Amount=<span class="xml-value">&quot;10.00&quot; <span class="xml-attribute">CurrencyCode=<span class="xml-value">&quot;USD&quot;>
                                                <TaxDescription>
                                                    <Text>VAT</Text> 
                                                </TaxDescription>
                                            </Tax>
                                        </Taxes>
                                    </Base>
                                </Rate>
                                <Rate <span class="xml-attribute">EffectiveDate=<span class="xml-value">&quot;2012-08-15&quot; <span class="xml-attribute">ExpireDate=<span class="xml-value">&quot;2012-08-15&quot;>
                                    <Base <span class="xml-attribute">AmountAfterTax=<span class="xml-value">&quot;100.00&quot; <span class="xml-attribute">CurrencyCode=<span class="xml-value">&quot;USD&quot; /> 
                                </Rate>
                                <Rate <span class="xml-attribute">EffectiveDate=<span class="xml-value">&quot;2012-08-16&quot; <span class="xml-attribute">ExpireDate=<span class="xml-value">&quot;2012-08-16&quot;>
                                    <Base <span class="xml-attribute">AmountAfterTax=<span class="xml-value">&quot;110.00&quot; <span class="xml-attribute">CurrencyCode=<span class="xml-value">&quot;USD&quot; /> 
                                </Rate>
                            </Rates>
                        </RoomRate>
                    </RoomRates>
                    <GuestCounts>
                        <GuestCount <span class="xml-attribute">AgeQualifyingCode=<span class="xml-value">&quot;10&quot; <span class="xml-attribute">Count=<span class="xml-value">&quot;1&quot; /> 
                    </GuestCounts>
                    <TimeSpan <span class="xml-attribute">Start=<span class="xml-value">&quot;2012-08-15&quot; <span class="xml-attribute">End=<span class="xml-value">&quot;2010-08-17&quot; /> 
                    <BasicPropertyInfo <span class="xml-attribute">HotelCode=<span class="xml-value">&quot;HTL1111&quot; <span class="xml-attribute">HotelName=<span class="xml-value">&quot;Hotel Deluxe&quot;>
                        <Address>
                            <AddressLine>123 HOTEL ST</AddressLine> 
                            <CityName>HOTELTOWN</CityName> 
                            <PostalCode>12344</PostalCode> 
                            <CountryName>USA</CountryName> 
                        </Address>
                    </BasicPropertyInfo>
                </RoomStay>
            </RoomStays>
            <ResGuests>
                <ResGuest>
                    <Profiles>
                        <ProfileInfo>
                            <Profile>
                                <Customer>
                                    <PersonName>
                                        <NamePrefix>Mr.</NamePrefix>
                                        <GivenName>CHRIS</GivenName> 
                                        <Surname>MILLER</Surname> 
                                    </PersonName>
                                </Customer>
                            </Profile>
                        </ProfileInfo>
                    </Profiles>
                </ResGuest>
            </ResGuests>
            <ResGlobalInfo>
                <HotelReservationIDs>
                    <HotelReservationID <span class="xml-attribute">ResID_Value=<span class="xml-value">&quot;888000888&quot; /> 
                </HotelReservationIDs>
            </ResGlobalInfo>
            <TPA_Extensions>
                <CustomFields>
                    <CustomField <span class="xml-attribute">Name=<span class="xml-value">&quot;OrgUnit&quot; <span class="xml-attribute">Type=<span class="xml-value">&quot;Profile&quot;>Sales</CustomField>
                    <CustomField <span class="xml-attribute">Name=<span class="xml-value">&quot;XmlSyncId&quot; <span class="xml-attribute">Type=<span class="xml-value">&quot;Profile&quot;>9293kks8drf6s8f</CustomField>
                </CustomFields>
            </TPA_Extensions>
        </HotelReservation>
    </HotelReservations>
</OTA_HotelResRS>
</pre>
<br />
