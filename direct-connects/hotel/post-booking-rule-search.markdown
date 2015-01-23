
        <div id="main" class="container">
            <div>
                            </div>
            <div class="row">
                <div class="span12">
<div class="breadcrumbs"><a href="/">Home</a>Hotel - Post Booking Rule Search</div>
                </div>
            </div>

            <div id="content-wrapper">
<!-- <div class="row"> -->
                <div id="content" class="span9">
            # Hotel - Post Booking Rule Search
                    <div class="section">
                    <div id="node-436" class="node clear-block">


    
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
The following request is sent when the Travel user selects a rate for the hotel. The response includes the rules for the specified rate.
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
                The request will contain a **OTA_HotelBookingRuleRQ** parent element, containing the following attributes:
                
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
                
                The** OTA_HotelBookingRuleRQ **parent element contains the following child elements:
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
                                                The corporate identifier. If necessary, multiple **RequestorID** elements can be sent. This element has the following attributes:
                                                
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
                                RuleMessage</td>
                            <td valign="top">
                                This element has the HotelCode attribute and the following child element:
                                <table border="1" bordercolor="#CCCCCC" cellpadding="3" cellspacing="0">
                                    <tbody>
                                        <tr>
                                            <td>
                                                StatusApplication</td>
                                            <td>
                                                This element has the following attributes:
                                                
                                                    * 
                                                        **Start**: The start date of the request. Format: YYYY-MM-DD
                                                    * 
                                                        **End**: The end date of the request. Format: YYYY-MM-DD
                                                    * 
                                                        **RatePlanCode**: The rate plan code associated with the request.
                                                
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

<span class="ST0"><?<span class="ST0">xml version=&quot;1.0&quot; encoding=&quot;UTF-8&quot; ?> 
<OTA_HotelBookingRuleRQ <span class="xml-attribute">xmlns=<span class="xml-value">&quot;<span class="xml-value">http://www.opentravel.org/OTA/2003/05<span class="xml-value">&quot; <span class="xml-attribute">EchoToken=<span class="xml-value">&quot;ABC123&quot; <span class="xml-attribute">TimeStamp=<span class="xml-value">&quot;2012-01-01T19:00:00&quot; <span class="xml-attribute">PrimaryLangID=<span class="xml-value">&quot;en-us&quot; <span class="xml-attribute">xmlns:xsi=<span class="xml-value">&quot;<span class="xml-value">http://www.w3.org/2001/XMLSchema-instance<span class="xml-value">&quot; <span class="xml-attribute">xsi:schemaLocation=<span class="xml-value">&quot;<span class="xml-value">http://www.opentravel.org/OTA/2003/05<span class="xml-value"> ../Schemas/OTA_HotelBookingRuleRQ.xsd&quot; <span class="xml-attribute">Version=<span class="xml-value">&quot;1&quot;>
    <POS>
        <Source <span class="xml-attribute">ISOCountry=<span class="xml-value">&quot;US&quot; <span class="xml-attribute">ISOCurrency=<span class="xml-value">&quot;USD&quot;>
            <RequestorID <span class="xml-attribute">Type=<span class="xml-value">&quot;18&quot; <span class="xml-attribute">ID=<span class="xml-value">&quot;7777777&quot; /> 
        </Source>
    </POS>
    <RuleMessage <span class="xml-attribute">HotelCode=<span class="xml-value">&quot;HTL1111&quot;>
        <StatusApplication <span class="xml-attribute">Start=<span class="xml-value">&quot;2012-08-15&quot; <span class="xml-attribute">End=<span class="xml-value">&quot;2010-08-17&quot; <span class="xml-attribute">RatePlanCode=<span class="xml-value">&quot;HTL1_1&quot; /> 
    </RuleMessage>
</OTA_HotelBookingRuleRQ>
</pre>
## 
    Response
The supplier responds to the request by returning the details of the requested rate.
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
                The response will include a **OTA_HotelBookingRuleRS** parent element, with the following attributes:
                
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
                
                The **OTA_HotelBookingRuleRS** parent element contains a **Success** element if the request was successful. It also contains a **RuleMessage** element with the HotelCode and HotelName attributes. The **RuleMessage** element contains the following child elements:<br />
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
                                StatusApplication</td>
                            <td valign="top">
                                Y</td>
                            <td valign="top">
                                This element contains rate details. It has the following attributes:
                                
                                    * 
                                        **Start**: The start date of the request. Format: YYYY-MM-DD
                                    * 
                                        **End**: The end date of the request. Format: YYYY-MM-DD
                                    * 
                                        **RatePlanCode**: The rate plan code for the requested rate.
                                
                                The **StatusApplication** element has the following child element:
                                <table border="1" bordercolor="#CCCCCC" cellpadding="3" cellspacing="0">
                                    <tbody>
                                        <tr>
                                            <td>
                                                RoomRates</td>
                                            <td>
                                                This parent element contains one **RoomRate** element for each rate returned. The **RoomRate** element has the following attributes:
                                                
                                                    * 
                                                        **Amount**: The amount of the room rate. Provide the daily rate if you are sending multiple **RoomRate** elements. If you have a single rate for the entire period (one RoomRate element), send the full price of the stay including taxes. Format: 100.00
                                                    * 
                                                        **CurrencyCode**: The <a href="http://en.wikipedia.org/wiki/ISO_4217">3-letter ISO 4217 currency code</a> for the rate amount.
                                                    * 
                                                        **Start**: If there are multiple daily rates, provide the start date for this rate. Format: YYYY-MM-DD
                                                    * 
                                                        **End**: If there are multiple daily rates, provide the end date for this rate. Format: YYYY-MM-DD
                                                
                                                The **RoomRate** element has the following child element:
                                                <table border="1" bordercolor="#CCCCCC" cellpadding="3" cellspacing="0" width="100%">
                                                    <tbody>
                                                        <tr>
                                                            <td>
                                                                RateDescription</td>
                                                            <td>
                                                                This parent element contains the following child element:
                                                                **Text**: The text details of the room rate.
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
                                GuestCounts</td>
                            <td valign="top">
                                Y</td>
                            <td valign="top">
                                This parent element contains a **GuestCount** element with the following attributes:
                                
                                    * 
                                        **AgeQualifyingCode**: The value for this element should be 10, which represents an Adult guest.
                                    * 
                                        **Count**: The number of guests included in the request.
                                
                            </td>
                        </tr>
                        <tr>
                            <td valign="top">
                                BookingRules</td>
                            <td valign="top">
                                Y</td>
                            <td valign="top">
                                This parent element contains a **BookingRule** element with the following child elements:
                                <table border="1" bordercolor="#CCCCCC" cellpadding="3" cellspacing="0">
                                    <tbody>
                                        <tr>
                                            <td>
                                                AcceptableGuarantees</td>
                                            <td>
                                                This element has an **AcceptableGuarantee** child element. This element has the GuaranteeCode attribute and the following child element:
                                                <table border="1" bordercolor="#CCCCCC" cellpadding="3" cellspacing="0">
                                                    <tbody>
                                                        <tr>
                                                            <td>
                                                                GuaranteeDescription</td>
                                                            <td>
                                                                This element has the **Text** child element, containing the description of the guarantee.</td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                CancelPenalties</td>
                                            <td>
                                                This element has the **CancelPenalty** child element. The **CancelPenalty** element has the **PenaltyDescription** child element with the following child element:
                                                <table border="1" bordercolor="#CCCCCC" cellpadding="3" cellspacing="0" width="100%">
                                                    <tbody>
                                                        <tr>
                                                            <td>
                                                                Text</td>
                                                            <td>
                                                                The penalty description text.</td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                RequiredPaymts</td>
                                            <td>
                                                This element contains the **GuaranteePayment** element, which has a PaymentCode attribute. The **GuaranteePayment** element contains the **Description** element, which contains the following child element:
                                                <table border="1" bordercolor="#CCCCCC" cellpadding="3" cellspacing="0" width="100%">
                                                    <tbody>
                                                        <tr>
                                                            <td>
                                                                Text</td>
                                                            <td>
                                                                The required payment description text.</td>
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
<OTA_HotelBookingRuleRS <span class="xml-attribute">xmlns=<span class="xml-value">&quot;<span class="xml-value">http://www.opentravel.org/OTA/2003/05<span class="xml-value">&quot; <span class="xml-attribute">EchoToken=<span class="xml-value">&quot;ABC123&quot; <span class="xml-attribute">TimeStamp=<span class="xml-value">&quot;2012-01-01T19:00:00&quot; <span class="xml-attribute">xmlns:xsi=<span class="xml-value">&quot;<span class="xml-value">http://www.w3.org/2001/XMLSchema-instance<span class="xml-value">&quot; <span class="xml-attribute">xsi:schemaLocation=<span class="xml-value">&quot;<span class="xml-value">http://www.opentravel.org/OTA/2003/05<span class="xml-value"> ../Schemas/OTA_HotelBookingRuleRS.xsd&quot; <span class="xml-attribute">Version=<span class="xml-value">&quot;1&quot;>
    <Success /> 
    <RuleMessage <span class="xml-attribute">HotelCode=<span class="xml-value">&quot;HTL1111&quot; <span class="xml-attribute">HotelName=<span class="xml-value">&quot;HOTEL1&quot;>
        <StatusApplication <span class="xml-attribute">Start=<span class="xml-value">&quot;2012-08-15&quot; <span class="xml-attribute">End=<span class="xml-value">&quot;2010-08-17&quot; <span class="xml-attribute">RatePlanCode=<span class="xml-value">&quot;HTL1_1&quot;>
            <RoomRates>
                <RoomRate <span class="xml-attribute">Amount=<span class="xml-value">&quot;100.00&quot; <span class="xml-attribute">CurrencyCode=<span class="xml-value">&quot;USD&quot;>
                    <RateDescription>
                        <Text>Standard Room</Text> 
                    </RateDescription>
                </RoomRate>
            </RoomRates>
        </StatusApplication>
        <GuestCounts>
            <GuestCount <span class="xml-attribute">AgeQualifyingCode=<span class="xml-value">&quot;10&quot; <span class="xml-attribute">Count=<span class="xml-value">&quot;1&quot; /> 
        </GuestCounts>
        <BookingRules>
            <BookingRule>
                <AcceptableGuarantees>
                    <AcceptableGuarantee <span class="xml-attribute">GuaranteeCode=<span class="xml-value">&quot;1&quot;>
                        <GuaranteeDescription>
                            <Text>Credit Card WILL BE CHARGED IMMEDIATELY FOR THE FULL AMOUNT of the reservation.</Text> 
                        </GuaranteeDescription>
                    </AcceptableGuarantee>
                </AcceptableGuarantees>
                <CancelPenalties> 
                    <CancelPenalty> 
                        <PenaltyDescription>
                            <Text>The hotel imposes the following cancellation penalty: Cancellations or changes made after 11:59 PM on Jun 18, 2012 are subject to a 1 Night Room and Tax penalty. The property makes no refunds for no shows or early checkouts.</Text> 
                        </PenaltyDescription>
                    </CancelPenalty>
                </CancelPenalties> 
                <RequiredPaymts> 
                    <GuaranteePayment <span class="xml-attribute">PaymentCode=<span class="xml-value">&quot;2&quot;> 
                        <Description>
                            <Text>Prepayment required</Text> 
                        </Description>
                    </GuaranteePayment>
                </RequiredPaymts>
            </BookingRule>
        </BookingRules>
    </RuleMessage>
</OTA_HotelBookingRuleRS>
</pre>
<br />
