
        <div id="main" class="container">
            <div>
                            </div>
            <div class="row">
                <div class="span12">
<div class="breadcrumbs"><a href="/">Home</a>Hotel - Post Reservation Cancellation</div>
                </div>
            </div>

            <div id="content-wrapper">
<!-- <div class="row"> -->
                <div id="content" class="span9">
            # Hotel - Post Reservation Cancellation
                    <div class="section">
                    <div id="node-440" class="node clear-block">


    
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
The following request is sent when the Travel user cancels their reservation. The response includes the reservation cancellation code.
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
                The request will contain a **OTA_CancelRQ** parent element, containing the following attributes:
                
                    * 
                        CancelType: The value should be &quot;Cancel&quot;
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
                
                The **OTA_CancelRQ **parent element contains the following child elements:
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
                            <td>
                                UniqueID</td>
                            <td>
                                This element has the following attributes:
                                
                                    * 
                                        **ID**: The reservation identification number.
                                    * 
                                        **Type**: The type of reservation.
                                
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
<OTA_CancelRQ <span class="xml-attribute">CancelType=<span class="xml-value">&quot;Cancel&quot; <span class="xml-attribute">xmlns=<span class="xml-value">&quot;<span class="xml-value">http://www.opentravel.org/OTA/2003/05<span class="xml-value">&quot; <span class="xml-attribute">EchoToken=<span class="xml-value">&quot;ABC123&quot; <span class="xml-attribute">TimeStamp=<span class="xml-value">&quot;2012-01-01T19:00:00&quot; <span class="xml-attribute">PrimaryLangID=<span class="xml-value">&quot;en-us&quot; <span class="xml-attribute">xmlns:xsi=<span class="xml-value">&quot;<span class="xml-value">http://www.w3.org/2001/XMLSchema-instance<span class="xml-value">&quot; <span class="xml-attribute">xsi:schemaLocation=<span class="xml-value">&quot;<span class="xml-value">http://www.opentravel.org/OTA/2003/05<span class="xml-value"> ../Schemas/OTA_CancelRQ.xsd&quot; <span class="xml-attribute">Version=<span class="xml-value">&quot;1&quot;>
    <POS>
        <Source <span class="xml-attribute">ISOCountry=<span class="xml-value">&quot;US&quot; <span class="xml-attribute">ISOCurrency=<span class="xml-value">&quot;USD&quot;>
            <RequestorID <span class="xml-attribute">Type=<span class="xml-value">&quot;18&quot; <span class="xml-attribute">ID=<span class="xml-value">&quot;7777777&quot; /> 
        </Source>
    </POS>
    <UniqueID <span class="xml-attribute">ID=<span class="xml-value">&quot;888000888&quot; <span class="xml-attribute">Type=<span class="xml-value">&quot;14&quot; /> 
</OTA_CancelRQ>
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
                The response includes an **OTA_CancelRS** parent element with the following attributes:
                
                    * 
                        Status: The value should be &quot;Cancelled&quot;
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
                
                The **OTA_CancelRS **parent element contains a **Success** element if the request was successful. It also contains the following child elements:
                <table border="1" bordercolor="#CCCCCC" cellpadding="3" cellspacing="0" width="100%">
                    <tbody>
                        <tr>
                            <td>
                                UniqueID</td>
                            <td>
                                This parent element has the following attributes:
                                
                                    * 
                                        **ID**: The ID of the cancelled reservation.
                                    * 
                                        **Type**: Any number can be supplied in this attribute.
                                
                            </td>
                        </tr>
                        <tr>
                            <td>
                                CancelInfoRS</td>
                            <td>
                                This element has a **UniqueID** child element with the following attributes:
                                
                                    * 
                                        **ID**: The hotel cancellation number.
                                    * 
                                        **Type**: Value for cancellation number should be 15, confirmation number 14.
                                
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
200 OK HTTPS/1.1 
Content-Length: {length of content body}

<span class="ST0"><?<span class="ST0">xml version=&quot;1.0&quot; encoding=&quot;utf-8&quot; ?> 
<OTA_CancelRS <span class="xml-attribute">Status=<span class="xml-value">&quot;Cancelled&quot; <span class="xml-attribute">xmlns=<span class="xml-value">&quot;<span class="xml-value">http://www.opentravel.org/OTA/2003/05<span class="xml-value">&quot; <span class="xml-attribute">EchoToken=<span class="xml-value">&quot;ABC123&quot; <span class="xml-attribute">TimeStamp=<span class="xml-value">&quot;2012-01-01T19:00:00&quot; <span class="xml-attribute">xmlns:xsi=<span class="xml-value">&quot;<span class="xml-value">http://www.w3.org/2001/XMLSchema-instance<span class="xml-value">&quot; <span class="xml-attribute">xsi:schemaLocation=<span class="xml-value">&quot;<span class="xml-value">http://www.opentravel.org/OTA/2003/05<span class="xml-value"> ../Schemas/OTA_CancelRS.xsd&quot; <span class="xml-attribute">Version=<span class="xml-value">&quot;1&quot;>
    <Success /> 
    <UniqueID <span class="xml-attribute">ID=<span class="xml-value">&quot;888000888&quot; <span class="xml-attribute">Type=<span class="xml-value">&quot;14&quot; /> 
    <CancelInfoRS> 
        <UniqueID <span class="xml-attribute">ID=<span class="xml-value">&quot;1010010000&quot; <span class="xml-attribute">Type=<span class="xml-value">&quot;14&quot; /> 
    </CancelInfoRS>
</OTA_CancelRS>
</pre>
<br />
