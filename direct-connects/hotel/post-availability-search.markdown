
        <div id="main" class="container">
            <div>
                            </div>
            <div class="row">
                <div class="span12">
<div class="breadcrumbs"><a href="/">Home</a>Hotel - Post Availability Search</div>
                </div>
            </div>

            <div id="content-wrapper">
<!-- <div class="row"> -->
                <div id="content" class="span9">
            # Hotel - Post Availability Search
                    <div class="section">
                    <div id="node-435" class="node clear-block">


    
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
The following request is sent when the Travel user selects a hotel and searches for availability for a date range. The response includes the list of available rooms for the supplied date range.
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
                The request will contain a **OTA_HotelAvailRQ** parent element, containing the following attributes:
                
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
                
                The **OTA_HotelAvailRQ** parent element contains the following child elements:
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
                                AvailRequestSegments</td>
                            <td valign="top">
                                This parent element contains an **AvailRequestSegment** element for the requested availability. The **AvailRequestSegment** parent element contains the following child elements:
                                <table border="1" bordercolor="#CCCCCC" cellpadding="3" cellspacing="0">
                                    <tbody>
                                        <tr>
                                            <td>
                                                HotelSearchCriteria</td>
                                            <td>
                                                This parent element contains the following child element:
                                                <table border="1" bordercolor="#CCCCCC" cellpadding="3" cellspacing="0">
                                                    <tbody>
                                                        <tr>
                                                            <td>
                                                                Criterion</td>
                                                            <td>
                                                                This parent element contains a **HotelRef** element for each hotel criterion used. Multiple criterion are compared using an OR comparison. The **HotelRef** element has the following attributes:
                                                                
                                                                    * 
                                                                        **ChainCode**: The hotel chain code. Refer to the <a href="https://developer.concur.com/sites/default/files/HotelCodes.pdf">Hotel Direct Connect Codes</a>.
                                                                    * 
                                                                        **HotelCode**: The code for the hotel within the chain.
                                                                
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                StayDateRange</td>
                                            <td>
                                                This element contains the following attributes:
                                                
                                                    * 
                                                        **Start**: The starting date of the requested date range. **Format**: YYYY-MM-DD
                                                    * 
                                                        **End**: The ending date of the requested date range. **Format**: YYYY-MM-DD
                                                
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                RoomStayCandidates</td>
                                            <td>
                                                This parent element contains the **RoomStayCandidate** element. This element has a Quantity attribute indicating the number of guests. Currently only one guest is supported. The **RoomStayCandidate** element has a **GuestCounts** child element containing a **GuestCount** element. The **GuestCount** element has the following attributes:
                                                
                                                    * 
                                                        **AgeQualifyingCode**: The value for this element should be 10, which represents an Adult guest.
                                                    * 
                                                        **Count**: The number of guests included in the request.
                                                
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
    XML Example Request
<pre class="overflow_box">
POST /concur/hotel/v1 HTTPS/1.1
Host: example.com
Authorization: Basic ...
Content-Type: application/xml
Content-Length: {length of content body}

<span class="ST0"><?<span class="ST0">xml version=&quot;1.0&quot; encoding=&quot;utf-8&quot; ?> 
<OTA_HotelAvailRQ <span class="xml-attribute">xmlns=<span class="xml-value">&quot;<span class="xml-value">http://www.opentravel.org/OTA/2003/05<span class="xml-value">&quot; <span class="xml-attribute">EchoToken=<span class="xml-value">&quot;ABC123&quot; <span class="xml-attribute">TimeStamp=<span class="xml-value">&quot;2012-01-01T19:00:00&quot; <span class="xml-attribute">PrimaryLangID=<span class="xml-value">&quot;en-us&quot; <span class="xml-attribute">xmlns:xsi=<span class="xml-value">&quot;<span class="xml-value">http://www.w3.org/2001/XMLSchema-instance<span class="xml-value">&quot; <span class="xml-attribute">xsi:schemaLocation=<span class="xml-value">&quot;<span class="xml-value">http://www.opentravel.org/OTA/2003/05<span class="xml-value"> ../Schemas/OTA_HotelAvailRQ.xsd&quot; <span class="xml-attribute">Version=<span class="xml-value">&quot;1&quot;>
    <POS>
        <Source <span class="xml-attribute">ISOCountry=<span class="xml-value">&quot;US&quot; <span class="xml-attribute">ISOCurrency=<span class="xml-value">&quot;USD&quot;>
            <RequestorID <span class="xml-attribute">Type=<span class="xml-value">&quot;18&quot; <span class="xml-attribute">ID=<span class="xml-value">&quot;7777777&quot; /> 
        </Source>
    </POS>
    <AvailRequestSegments>
        <AvailRequestSegment>
            <HotelSearchCriteria>
                <Criterion> 
                    <HotelRef <span class="xml-attribute">ChainCode=<span class="xml-value">&quot;ZZ&quot; <span class="xml-attribute">HotelCode=<span class="xml-value">&quot;HTL1111&quot; /> 
                    <HotelRef <span class="xml-attribute">ChainCode=<span class="xml-value">&quot;ZZ&quot; <span class="xml-attribute">HotelCode=<span class="xml-value">&quot;HTL2222&quot; /> 
                </Criterion>
            </HotelSearchCriteria>
            <StayDateRange <span class="xml-attribute">Start=<span class="xml-value">&quot;2012-08-15&quot; <span class="xml-attribute">End=<span class="xml-value">&quot;2010-08-17&quot; /> 
            <RoomStayCandidates>
                <RoomStayCandidate <span class="xml-attribute">Quantity=<span class="xml-value">&quot;1&quot;>
                    <GuestCounts>
                        <GuestCount <span class="xml-attribute">AgeQualifyingCode=<span class="xml-value">&quot;10&quot; <span class="xml-attribute">Count=<span class="xml-value">&quot;1&quot; /> 
                    </GuestCounts>
                </RoomStayCandidate>
            </RoomStayCandidates>
        </AvailRequestSegment>
    </AvailRequestSegments>
</OTA_HotelAvailRQ>
</pre>
## 
    Response
The supplier responds to the request by returning the details of the available room.
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
                The response will include a **OTA_HotelAvailRS** parent element, with the following attributes:
                
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
                
                The **OTA_HotelAvailRS** parent element has the following child elements:<br />
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
                                RoomStays</td>
                            <td valign="top">
                                Y</td>
                            <td valign="top">
                                This parent element contains a **RoomStay** parent element for each hotel room returned. Refer to the <a href="#roomchild">RoomStay Child Elements</a> table for information about the child elements.
                            </td>
                        </tr>
                        <tr>
                            <td valign="top">
                                BasicPropertyInfo</td>
                            <td valign="top">
                                Y</td>
                            <td valign="top">
                                This element contains the **HotelCode** attribute, which contains the code for the hotel that this rate applies to.</td>
                        </tr>
                        <tr>
                            <td valign="top">
                                TPA_Extensions</td>
                            <td valign="top">
                                N</td>
                            <td valign="top">
                                This element contains the following child elements:
                                <table border="1" bordercolor="#CCCCCC" cellpadding="3" cellspacing="0">
                                    <tbody>
                                        <tr>
                                            <td>
                                                RequireSeriesCode</td>
                                            <td>
                                                This element indicates whether CVV should be queried and sent. Format: true/false
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                GuaranteeRequired</td>
                                            <td>
                                                This element indicates whether the hotel requires a credit card deposit for this reservation. Possible values are:
                                                
                                                    * 
                                                        **always**: When booking this rate, user will be asked for credit card (even if a deposit account is specified).
                                                    * 
                                                        **never: **When booking this rate, user will not be asked for credit card (even if a deposit account is not specified).
                                                    * 
                                                        **default **(or not present at all): When booking this rate, user will be asked for credit card if a deposit account is not specified.
                                                
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
                            <td colspan="3" valign="top">
                                <a id="roomchild" name="roomchild"></a>RoomStay Child Elements</td>
                        </tr>
                        <tr class="GrayTableHead">
                            <td valign="top" width="18%">
                                Element</td>
                            <td valign="top" width="10%">
                                Required (must contain value)?</td>
                            <td valign="top" width="72%">
                                Description</td>
                        </tr>
                        <tr>
                            <td valign="top">
                                RatePlans</td>
                            <td valign="top">
                                Y</td>
                            <td valign="top">
                                The room rate plan. This parent element contains the following child element:
                                <table border="1" bordercolor="#CCCCCC" cellpadding="3" cellspacing="0">
                                    <tbody>
                                        <tr>
                                            <td>
                                                RatePlan</td>
                                            <td>
                                                This element has the RatePlanCode attribute, defining the code for the room rate.</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </td>
                        </tr>
                        <tr>
                            <td valign="top">
                                RoomRates</td>
                            <td valign="top">
                                </td>
                            <td valign="top">
                                This parent element has a **RoomRate** child element. The **RoomRate** element a **Rates** child element. The **Rates** element contains the following child element:
                                <table border="1" bordercolor="#CCCCCC" cellpadding="3" cellspacing="0">
                                    <tbody>
                                        <tr>
                                            <td>
                                                Rate</td>
                                            <td>
                                                The supplied rate for the stay. If there are multiple rates for the stay, you can provide multiple **Rate** elements. The first one will be displayed to the user, with the rest available through the policy popup. This element has the following attributes:
                                                
                                                    * 
                                                        **EffectiveDate**: The date the rate begins.
                                                    * 
                                                        **ExpireDate**: The date that the rate expires.
                                                
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                                The **Rate** element has the following child elements:
                                <table border="1" bordercolor="#CCCCCC" cellpadding="3" cellspacing="0">
                                    <tbody>
                                        <tr>
                                            <td>
                                                Base</td>
                                            <td>
                                                The rate details per day without tax. If the rate changes, provide the first day's rate. This element has the following attributes:
                                                
                                                    * 
                                                        **AmountBeforeTax**: The rate amount per night before tax.
                                                    * 
                                                        **AmountAfterTax**: The rate amount per night after tax.
                                                    * 
                                                        **CurrencyCode**: The <a href="http://en.wikipedia.org/wiki/ISO_4217">3-letter ISO 4217 currency code</a> for the room rate values.
                                                
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                RateDescription</td>
                                            <td>
                                                This parent element contains the **Text** child element, which contains the description of the rate.</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </td>
                        </tr>
                        <tr>
                            <td valign="top">
                                BasicPropertyInfo</td>
                            <td valign="top">
                                Y</td>
                            <td valign="top">
                                This element contains the HotelCode attribute, which contains the code for the hotel that this rate applies to.
                            </td>
                        </tr>
                        <tr>
                            <td valign="top">
                                TPA_Extensions</td>
                            <td valign="top">
                                N</td>
                            <td valign="top">
                                This element contains the **RequireSeriesCode** child element, which has a value of true or false. This element indicates whether CVV should be queried and sent.</td>
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
<OTA_HotelAvailRS <span class="xml-attribute">xmlns=<span class="xml-value">&quot;<span class="xml-value">http://www.opentravel.org/OTA/2003/05<span class="xml-value">&quot; <span class="xml-attribute">EchoToken=<span class="xml-value">&quot;ABC123&quot; <span class="xml-attribute">TimeStamp=<span class="xml-value">&quot;2012-01-01T19:00:00&quot; <span class="xml-attribute">xmlns:xsi=<span class="xml-value">&quot;<span class="xml-value">http://www.w3.org/2001/XMLSchema-instance<span class="xml-value">&quot; <span class="xml-attribute">xsi:schemaLocation=<span class="xml-value">&quot;<span class="xml-value">http://www.opentravel.org/OTA/2003/05<span class="xml-value"> ../Schemas/OTA_HotelAvailRS.xsd&quot; <span class="xml-attribute">Version=<span class="xml-value">&quot;1&quot;>
    <Success />
    <RoomStays>
        <RoomStay>
            <RatePlans>
                <RatePlan <span class="xml-attribute">RatePlanCode=<span class="xml-value">&quot;2222222&quot; />
            </RatePlans>
            <RoomRates>
                <RoomRate>
                    <Rates>
                        <Rate <span class="xml-attribute">EffectiveDate=<span class="xml-value">&quot;2012-08-15&quot; <span class="xml-attribute">ExpireDate=<span class="xml-value">&quot;2010-08-17&quot;>
                            <Base <span class="xml-attribute">AmountBeforeTax=<span class="xml-value">&quot;100.00&quot; <span class="xml-attribute">AmountAfterTax=<span class="xml-value">&quot;110.00&quot; <span class="xml-attribute">CurrencyCode=<span class="xml-value">&quot;USD&quot; />
                            <RateDescription>
                                <Text>CORPORATE RATE*KING</Text>
                            </RateDescription>
                        </Rate>
                    </Rates>
                </RoomRate>
            </RoomRates>
            <BasicPropertyInfo <span class="xml-attribute">HotelCode=<span class="xml-value">&quot;HTL1111&quot; />
        </RoomStay>
        <RoomStay>
            <RatePlans>
                <RatePlan <span class="xml-attribute">RatePlanCode=<span class="xml-value">&quot;3333333&quot; />
            </RatePlans>
            <RoomRates>
                <RoomRate>
                    <Rates>
                        <Rate <span class="xml-attribute">EffectiveDate=<span class="xml-value">&quot;2012-08-15&quot; <span class="xml-attribute">ExpireDate=<span class="xml-value">&quot;2010-08-17&quot;>
                            <Base <span class="xml-attribute">AmountBeforeTax=<span class="xml-value">&quot;100.00&quot; <span class="xml-attribute">AmountAfterTax=<span class="xml-value">&quot;110.00&quot; <span class="xml-attribute">CurrencyCode=<span class="xml-value">&quot;USD&quot; />
                            <RateDescription>
                                <Text>CORPORATE RATE*DOUBLE FREE INTERNET</Text>
                            </RateDescription>
                        </Rate>
                    </Rates>
                </RoomRate>
            </RoomRates>
            <BasicPropertyInfo <span class="xml-attribute">HotelCode=<span class="xml-value">&quot;HTL1111&quot; />
        </RoomStay>
        <RoomStay>
            <RatePlans>
                <RatePlan <span class="xml-attribute">RatePlanCode=<span class="xml-value">&quot;4444444&quot; />
            </RatePlans>
            <RoomRates>
                <RoomRate>
                    <Rates>
                        <Rate <span class="xml-attribute">EffectiveDate=<span class="xml-value">&quot;2012-08-15&quot; <span class="xml-attribute">ExpireDate=<span class="xml-value">&quot;2010-08-17&quot;>
                            <Base <span class="xml-attribute">AmountBeforeTax=<span class="xml-value">&quot;100.00&quot; <span class="xml-attribute">AmountAfterTax=<span class="xml-value">&quot;110.00&quot; <span class="xml-attribute">CurrencyCode=<span class="xml-value">&quot;USD&quot; />
                            <RateDescription>
                                <Text>REGULAR RATE*KING</Text>
                            </RateDescription>
                        </Rate>
                    </Rates>
                </RoomRate>
            </RoomRates>
            <BasicPropertyInfo <span class="xml-attribute">HotelCode=<span class="xml-value">&quot;HTL2222&quot; />
            <TPA_Extensions>
                <RequireSeriesCode>true</RequireSeriesCode>
                <GuaranteeRequired>always</GuaranteeRequired>
            </TPA_Extensions>
        </RoomStay>
    </RoomStays>
</OTA_HotelAvailRS>
</pre>
<br />
