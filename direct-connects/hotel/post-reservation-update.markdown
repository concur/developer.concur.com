
        <div id="main" class="container">
            <div>
                            </div>
            <div class="row">
                <div class="span12">
<div class="breadcrumbs"><a href="/">Home</a>Hotel - Post Reservation Update</div>
                </div>
            </div>

            <div id="content-wrapper">
<!-- <div class="row"> -->
                <div id="content" class="span9">
            # Hotel - Post Reservation Update
                    <div class="section">
                    <div id="node-527" class="node clear-block">


    
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
.STRING_LITERAL {color: #ce7b00}</style>## 
    Request
**<font color="#FF0000">NOTE</font>**<font color="#FF0000">: This function is not supported in the current version. Support may be returned in a future release.</font>
The following request is sent when the Travel user updates their reservation. The response includes the new reservation identifier.
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
https://{servername}/concur/hotel/v1/</pre>             The URI is configured by the supplier when registering the partner application. Refer to **Core Concepts ><a href="https://developer.concur.com/node/203"> Partner Applications</a> **for more information.</td>
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
The request will contain an <span class="codeexample">**OTA_HotelResModifyRQ** parent element, with the following attributes:

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

                The **OTA_<span class="codeexample">HotelResModifyRQ** element contains the following child elements:
<blockquote><table border="1" bordercolor="#DBDBDB" cellpadding="3" cellspacing="0" width="100% ">
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
                                    The point of sale information. This parent element contains the following child elements:
<table border="1" bordercolor="#DBDBDB" cellpadding="3" cellspacing="0" width="100% ">
<tbody>
<tr>
<td valign="top">
                                                    Source</td>
<td valign="top">
                                                    The source of the request. This element has the following attributes:


* 
                                                            **ISOCountry**: The country code for the Travel user's home country.
* 
                                                            **ISOCurrency**: The <a href="http://en.wikipedia.org/wiki/ISO_4217">3-letter ISO 4217 currency code</a> for the Travel user's currency.

                                                    The **Source** element has the following child element:
<table border="1" bordercolor="#DBDBDB" cellpadding="3" cellspacing="0" width="100% ">
<tbody>
<tr>
<td valign="top">
                                                                    RequestorID</td>
<td valign="top">
                                                                    The customer's identifiers. If necessary, multiple RequestorID elements can be sent.This element contains the following attributes:

* 
                                                                            **Type**: The code for the customer type.
* 
                                                                            **ID**: The identifier for the user.

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
<tr>
<td valign="top">
                                    HotelResModifies</td>
<td valign="top">
                                    This element has a **HotelResModify** child element with the following attributes:

* 
                                            **RoomStayReservation**: Whether the reservation is for a room stay. Format: true/false.
* 
                                            **CreateDateTime**: The time the reservation was originally created, in the hotel's local time zone.
* 
                                            **CreatorID**: The source of the reservation.

                                    The **HotelResModify** element contains the following child elements:
<table border="1" bordercolor="#DBDBDB" cellpadding="3" cellspacing="0" width="100% ">
<tbody>
<tr>
<td valign="top">
                                                    RoomStays</td>
<td valign="top">
                                                    This parent element contains the **RoomStay** element. Refer to the <a href="#roomstaychild">RoomStay Request Child Elements</a> table for information about child elements.</td>
</tr>
<tr>
<td valign="top">
                                                    ResGuests</td>
<td valign="top">
                                                    This parent element contains the **ResGuest** element. The **ResGuest** element has the following attributes:

* 
                                                            **ResGuestRPH**: The unique identifier for the guest.
* 
                                                            **AgeQualifyingCode**: The value for this element should be 10, which represents an Adult guest.

                                                    Refer to the <a href="#resguestchildrequest">ResGuest Request Child Elements</a> table for information about child elements.</td>
</tr>
<tr>
<td valign="top">
                                                    ResGlobalInfo</td>
<td valign="top">
                                                    This parent element contains a **HotelReservationIDs** child element. This element contains a **HotelReservationID** child element with the following attribute:

* 
                                                            **ResID_Value**: The reservation ID.

</td>
</tr>
</tbody>
</table>
</td>
</tr>
</tbody>
</table>

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
                                    This parent element contains the **RoomType** child element, with the **NumberofUnits** attribute indicating how many rooms of this type are included in the reservation.</td>
</tr>
<tr>
<td valign="top">
                                    RatePlans</td>
<td valign="top">
                                    This parent element contains the **RatePlan** child element, with the **RatePlanCode** attribute, specifying the rate plan code for the reservation.</td>
</tr>
<tr>
<td valign="top">
                                    GuestCounts</td>
<td valign="top">
                                    This parent element contains the **GuestCount** child element, with the following attributes:

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
                                    This parent element contains the **GuaranteesAccepted** element. The **GuaranteesAccepted** element contains the **GuaranteeAccepted** element. This element has the **GuaranteeTypeCode** attribute, specifying the type of guarantee placed on the reservation. The **GuaranteeAccepted** parent element has a **PaymentCard** child element for card guarantees, with the following attributes:

* 
                                            **CardCode**: The type of card.
* 
                                            **CardNumber**: The card number.

                                    The **PaymentCard** parent element has the following child elements:
<table border="1" bordercolor="#DBDBDB" cellpadding="3" cellspacing="0" width="100% ">
<tbody>
<tr>
<td valign="top">
                                                    CardHolderName</td>
<td valign="top">
                                                    The card holder's name.</td>
</tr>
<tr>
<td valign="top">
                                                    Address</td>
<td valign="top">
                                                    The billing address of the card. This parent element contains the following child elements:
<table border="1" bordercolor="#DBDBDB" cellpadding="3" cellspacing="0" width="100% ">
<tbody>
<tr>
<td valign="top">
                                                                    AddressLine</td>
<td valign="top">
                                                                    The first address line.</td>
</tr>
<tr>
<td valign="top">
                                                                    CityName</td>
<td valign="top">
                                                                    The address city.</td>
</tr>
<tr>
<td valign="top">
                                                                    PostalCode</td>
<td valign="top">
                                                                    The address postal code.</td>
</tr>
<tr>
<td valign="top">
                                                                    StateProv</td>
<td valign="top">
                                                                    The address state/province.</td>
</tr>
<tr>
<td valign="top">
                                                                    CountryName</td>
<td valign="top">
                                                                    The 2-character address country name. Format: US</td>
</tr>
</tbody>
</table>
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
                                    This element contains the **HotelCode** attribute.</td>
</tr>
<tr>
<td valign="top">
                                    Comments</td>
<td valign="top">
                                    The comments on the reservation. This parent element contains a **Comment** child element for each comment associated with the reservation.</td>
</tr>
</tbody>
</table>

<table border="1" bordercolor="#DBDBDB" cellpadding="3" cellspacing="0" width="100% ">
<tbody>
<tr class="GrayTableHead">
<td colspan="2" valign="top">
                                    <a id="resguestchildrequest" name="resguestchildrequest"></a>ResGuest Request Child Elements</td>
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
                                    This parent element contains the **ProfileInfo** child element. The **ProfileInfo** element has the **Profile** child element. The **Profile** element contains the **Customer** element. The Customer element contains the following child elements:
<table border="1" bordercolor="#DBDBDB" cellpadding="3" cellspacing="0" width="100% ">
<tbody>
<tr>
<td valign="top">
                                                    PersonName</td>
<td valign="top">
                                                    The **PersonName** element contains the following child elements:
<table border="1" bordercolor="#DBDBDB" cellpadding="3" cellspacing="0" width="100% ">
<tbody>
<tr>
<td valign="top">
                                                                    GivenName</td>
<td valign="top">
                                                                    The guest's first name.</td>
</tr>
<tr>
<td valign="top">
                                                                    Surname</td>
<td valign="top">
                                                                    The guest's last name.</td>
</tr>
</tbody>
</table>
</td>
</tr>
<tr>
<td valign="top">
                                                    Telephone</td>
<td valign="top">
                                                    This element has a **PhoneNumber** attribute containing the guest's phone number.</td>
</tr>
<tr>
<td valign="top">
                                                    Email</td>
<td valign="top">
                                                    The guest's email address.</td>
</tr>
<tr>
<td valign="top">
                                                    Address</td>
<td valign="top">
                                                    This parent element has the following child elements:
<table border="1" bordercolor="#DBDBDB" cellpadding="3" cellspacing="0" width="100% ">
<tbody>
<tr>
<td valign="top">
                                                                    AddressLine</td>
<td valign="top">
                                                                    The first address line.</td>
</tr>
<tr>
<td valign="top">
                                                                    CityName</td>
<td valign="top">
                                                                    The address city.</td>
</tr>
<tr>
<td valign="top">
                                                                    PostalCode</td>
<td valign="top">
                                                                    The address postal code.</td>
</tr>
<tr>
<td valign="top">
                                                                    StateProv</td>
<td valign="top">
                                                                    The address state/province.</td>
</tr>
<tr>
<td valign="top">
                                                                    CountryName</td>
<td valign="top">
                                                                    The 2-character address country name. Format: US</td>
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
</blockquote>
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
<OTA_HotelResModifyRQ <span class="xml-attribute">xmlns=<span class="xml-value">&quot;<span class="xml-value">http://www.opentravel.org/OTA/2003/05<span class="xml-value">&quot; <span class="xml-attribute">EchoToken=<span class="xml-value">&quot;ABC123&quot; <span class="xml-attribute">TimeStamp=<span class="xml-value">&quot;2012-01-01T19:00:00&quot; <span class="xml-attribute">PrimaryLangID=<span class="xml-value">&quot;en-us&quot; <span class="xml-attribute">xmlns:xsi=<span class="xml-value">&quot;<span class="xml-value">http://www.w3.org/2001/XMLSchema-instance<span class="xml-value">&quot; <span class="xml-attribute">xsi:schemaLocation=<span class="xml-value">&quot;<span class="xml-value">http://www.opentravel.org/OTA/2003/05<span class="xml-value"> ../Schemas/OTA_HotelResModifyRQ.xsd&quot; <span class="xml-attribute">Version=<span class="xml-value">&quot;1&quot;>
    <POS>
        <Source <span class="xml-attribute">ISOCountry=<span class="xml-value">&quot;US&quot; <span class="xml-attribute">ISOCurrency=<span class="xml-value">&quot;USD&quot;>
            <RequestorID <span class="xml-attribute">Type=<span class="xml-value">&quot;18&quot; <span class="xml-attribute">ID=<span class="xml-value">&quot;7777777&quot; /> 
        </Source>
    </POS>
    <HotelResModifies>
        <HotelResModify <span class="xml-attribute">RoomStayReservation=<span class="xml-value">&quot;true&quot; <span class="xml-attribute">CreateDateTime=<span class="xml-value">&quot;2003-03-11T17:29:00-08:00&quot; <span class="xml-attribute">CreatorID=<span class="xml-value">&quot;Expedia&quot;>
            <RoomStays>
                <RoomStay>
                    <RoomTypes>
                        <RoomType <span class="xml-attribute">NumberOfUnits=<span class="xml-value">&quot;1&quot; /> 
                    </RoomTypes>

                    <RatePlans>
                        <RatePlan <span class="xml-attribute">RatePlanCode=<span class="xml-value">&quot;2222222&quot; /> 
                    </RatePlans>
                    <GuestCounts>
                        <GuestCount <span class="xml-attribute">AgeQualifyingCode=<span class="xml-value">&quot;10&quot; <span class="xml-attribute">Count=<span class="xml-value">&quot;1&quot; /> 
                    </GuestCounts>
                    <TimeSpan <span class="xml-attribute">Start=<span class="xml-value">&quot;2012-08-15&quot; <span class="xml-attribute">End=<span class="xml-value">&quot;2010-08-16&quot; /> 
                    <Guarantee>
                        <GuaranteesAccepted>
                            <GuaranteeAccepted <span class="xml-attribute">GuaranteeTypeCode=<span class="xml-value">&quot;CC&quot;>
                                <PaymentCard <span class="xml-attribute">CardCode=<span class="xml-value">&quot;AX&quot; <span class="xml-attribute">CardNumber=<span class="xml-value">&quot;4400000000000000&quot; <span class="xml-attribute">ExpireDate=<span class="xml-value">&quot;1215&quot;>
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
                </RoomStay>
            </RoomStays>
            <ResGuests>
                <ResGuest <span class="xml-attribute">ResGuestRPH=<span class="xml-value">&quot;1&quot; <span class="xml-attribute">AgeQualifyingCode=<span class="xml-value">&quot;10&quot;>
                    <Profiles>
                        <ProfileInfo>
                            <Profile>
                                <Customer>
                                    <PersonName>
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
                <HotelReservationIDs>
                    <HotelReservationID <span class="xml-attribute">ResID_Value=<span class="xml-value">&quot;888000888&quot; /> 
                </HotelReservationIDs>
            </ResGlobalInfo>
        </HotelResModify>
    </HotelResModifies>
</OTA_HotelResModifyRQ>
</pre>## 
    Response
The supplier responds to the request by returning an updated booking identifier.
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
The response includes an **OTA_HotelResModifyRS** parent element with the following attributes:

* 
                        xmlns
* 
                        EchoToken
* 
                        TimeStamp
* 
                        xmlns:xsi
* 
                        xsi:schemaLocation
* 
                        Version

The **OTA_HotelResModifyRS** parent element contains a **Success** element if the request was successful. It also contains a **HotelResModifies** element. The **HotelResModifies** element contains the **HotelResModify** element. The **HotelResModify** element contains the **ResGlobalInfo** child elements. The **ResGlobalInfo** element contains the **HotelReservationIDs** element. The **HotelReservationIDs** element contains two **HotelReservationID** child elements with the **ResID_Value** attribute containing the reservation ID. The first **HotelReservationID** element contains the original reservation identifier, and the second one contains the new reservation ID.
</td>
</tr>
</tbody>
</table>
####
    XML Example of Successful Response
<pre class="overflow_box">
200 OK HTTPS/1.1 
Content-Length: {length of content body}

<span class="ST0"><?<span class="ST0">xml version=&quot;1.0&quot; encoding=&quot;UTF-8&quot; ?> 
<OTA_HotelResModifyRS <span class="xml-attribute">xmlns=<span class="xml-value">&quot;<span class="xml-value">http://www.opentravel.org/OTA/2003/05<span class="xml-value">&quot; <span class="xml-attribute">EchoToken=<span class="xml-value">&quot;ABC123&quot; <span class="xml-attribute">TimeStamp=<span class="xml-value">&quot;2012-01-01T19:00:00&quot; <span class="xml-attribute">xmlns:xsi=<span class="xml-value">&quot;<span class="xml-value">http://www.w3.org/2001/XMLSchema-instance<span class="xml-value">&quot; <span class="xml-attribute">xsi:schemaLocation=<span class="xml-value">&quot;<span class="xml-value">http://www.opentravel.org/OTA/2003/05<span class="xml-value"> ../Schemas/OTA_HotelResModifyRS.xsd&quot; <span class="xml-attribute">Version=<span class="xml-value">&quot;1&quot;>
    <Success /> 
    <HotelResModifies>
        <HotelResModify>
            <ResGlobalInfo>
                <HotelReservationIDs>
                    <HotelReservationID <span class="xml-attribute">ResID_Value=<span class="xml-value">&quot;888000888&quot; /> 
                    <HotelReservationID <span class="xml-attribute">ResID_Value=<span class="xml-value">&quot;999000999&quot; /> 
                </HotelReservationIDs>
            </ResGlobalInfo>
        </HotelResModify>
    </HotelResModifies>
</OTA_HotelResModifyRS>
</pre>
