
        <div id="main" class="container">
            <div>
                            </div>
            <div class="row">
                <div class="span12">
<div class="breadcrumbs"><a href="/">Home</a>Hotel - Post Hotel Search</div>
                </div>
            </div>

            <div id="content-wrapper">
<!-- <div class="row"> -->
                <div id="content" class="span9">
            # Hotel - Post Hotel Search
                    <div class="section">
                    <div id="node-437" class="node clear-block">


    
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
The following request is sent when the Travel user searches for hotels. The response includes the list of matching hotels for the given coordinates and radius. Hotel suppliers should return properties only in this area.
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
                The request will contain a **OTA_HotelSearchRQ** parent element, containing the following attributes:
                
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
                
                The **OTA_HotelSearchRQ **parent element contains the following child elements:
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
                                Criteria</td>
                            <td valign="top">
                                The search criteria provided by the customer. This parent element contains a **Criterion** child element. The **Criterion** element contains the following child elements:
                                <table border="1" bordercolor="#CCCCCC" cellpadding="3" cellspacing="0">
                                    <tbody>
                                        <tr>
                                            <td>
                                                Position</td>
                                            <td>
                                                The hotel search center position. Position is sent all the time and is in LatLon format (degrees as float numbers). It should be used as position source for actual search. This element has two attributes:
                                                
                                                    * 
                                                        **Latitude**: The latitude at the center of the hotel search.
                                                    * 
                                                        **Longitude**: The longitude at the center of the hotel search.
                                                
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                Address</td>
                                            <td>
                                                The address information for the hotel search. Optional. This element has the following child elements:
                                                
                                                <table border="1" bordercolor="#CCCCCC" cellpadding="3" cellspacing="0">
                                                    <tbody>
                                                        <tr>
                                                            <td>
                                                                CityName</td>
                                                            <td>
                                                                The name of the city the user is searching in.</td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                CountryName</td>
                                                            <td>
                                                                This element has the **Code** attribute, containing the two character country code for the country the user is searching in.</td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                RefPoint</td>
                                            <td>
                                                The reference point for the search. Optional. This element has the **Name** attribute, containing the location city, state and country. Example: Redmond, WA, USA</td>
                                        </tr>
                                        <tr>
                                            <td>
                                                HotelRef</td>
                                            <td>
                                                The hotel information. Optional. This element can have the following attribute:
                                                
                                                    * 
                                                        **HotelName**: The hotel name supplied by the customer. This attribute only appears if the customer provided a name. This value should be interpreted as a &quot;contains&quot; style match
                                                
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                Radius</td>
                                            <td>
                                                The hotel search radius from the starting position. This element has three possible attributes:
                                                
                                                    * 
                                                        **Distance**: The distance to search from the defined center.
                                                    * 
                                                        **DistanceMeasure**: The unit of measurement to use when calculating the search radius with the Distance value. Values: Miles = M, Kilometers = K. If not included, the following attribute should be used:
                                                    * 
                                                        **UnitOfMeasureCode**: The code for the unit of measure. Values: Miles = 2, Kilometers = 1
                                                
                                                **NOTE**: Only return hotels within this search radius. You can use a simple box search.
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                StayDateRange</td>
                                            <td>
                                                The date range to search for. Contains the **Start** and **End** attributes. Format: YYYY-MM-DD</td>
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
<OTA_HotelSearchRQ <span class="xml-attribute">xmlns=<span class="xml-value">&quot;<span class="xml-value">http://www.opentravel.org/OTA/2003/05<span class="xml-value">&quot; <span class="xml-attribute">EchoToken=<span class="xml-value">&quot;ABC123&quot; <span class="xml-attribute">TimeStamp=<span class="xml-value">&quot;2012-01-01T19:00:00&quot; <span class="xml-attribute">PrimaryLangID=<span class="xml-value">&quot;en-us&quot; <span class="xml-attribute">xmlns:xsi=<span class="xml-value">&quot;<span class="xml-value">http://www.w3.org/2001/XMLSchema-instance<span class="xml-value">&quot; <span class="xml-attribute">xsi:schemaLocation=<span class="xml-value">&quot;<span class="xml-value">http://www.opentravel.org/OTA/2003/05<span class="xml-value"> ../Schemas/OTA_HotelSearchRQ.xsd&quot; <span class="xml-attribute">Version=<span class="xml-value">&quot;6.000&quot;>
    <POS>
        <Source <span class="xml-attribute">ISOCountry=<span class="xml-value">&quot;US&quot; <span class="xml-attribute">ISOCurrency=<span class="xml-value">&quot;USD&quot;>
            <RequestorID <span class="xml-attribute">Type=<span class="xml-value">&quot;4&quot; <span class="xml-attribute">ID=<span class="xml-value">&quot;7777777&quot; <span class="xml-attribute">ID_Context=<span class="xml-value">&quot;MyHotel&quot; />
        </Source>
    </POS>
    <Criteria>
        <Criterion>
            <Position <span class="xml-attribute">Latitude=<span class="xml-value">&quot;45.1317&quot; <span class="xml-attribute">Longitude=<span class="xml-value">&quot;-86.1823&quot; />
            <Address>
                <CityName>Empire</CityName>
                <CountryName <span class="xml-attribute">Code=<span class="xml-value">&quot;US&quot; />
            </Address>
            <RefPoint <span class="xml-attribute">Name=<span class="xml-value">&quot;Empire, MI, USA&quot; />
            <HotelRef <span class="xml-attribute">HotelName=<span class="xml-value">&quot;Inn&quot; />
            <Radius <span class="xml-attribute">Distance=<span class="xml-value">&quot;5&quot; <span class="xml-attribute">DistanceMeasure=<span class="xml-value">&quot;M&quot; />
            <StayDateRange <span class="xml-attribute">Start=<span class="xml-value">&quot;2012-08-15&quot; <span class="xml-attribute">End=<span class="xml-value">&quot;2010-08-17&quot; />
        </Criterion>
    </Criteria>
</OTA_HotelSearchRQ>  
</pre>
## 
    Response
The supplier responds to the request by returning the list of possible search matches, with a maximum result set of 1000 results.
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
                The response will include a **OTA_HotelSearchRS** parent element, with the following attributes:
                
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
                
                The **OTA_HotelSearchRS** parent element contains the following child elements:<br />
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
                                Properties</td>
                            <td valign="top">
                                </td>
                            <td valign="top">
                                This element contains a **Property** parent element for each hotel property returned. The **Property** element has the following attributes:
                                
                                    * 
                                        **ChainCode**: Refer to the <a href="https://developer.concur.com/sites/default/files/HotelCodes.pdf">Hotel Direct Connect Codes</a>. If ChainCode is unknown or not available, send: ZZ
                                    * 
                                        **HotelCode**: This must be unique, and will be used in future requests.
                                    * 
                                        **HotelName**: The name of the hotel.
                                
                                Refer to the <a href="#propertychild">Property Child Elements</a> table for information about the child elements.
                            </td>
                        </tr>
                    </tbody>
                </table>
                <br />
                <table border="1" bordercolor="#DBDBDB" cellpadding="3" cellspacing="0" width="100% ">
                    <tbody>
                        <tr class="GrayTableHead">
                            <td colspan="2" valign="top">
                                <a id="propertychild" name="propertychild"></a>Property Child Elements</td>
                        </tr>
                        <tr class="GrayTableHead">
                            <td valign="top" width="30%">
                                Element</td>
                            <td valign="top" width="70%">
                                Description</td>
                        </tr>
                        <tr>
                            <td valign="top">
                                Position</td>
                            <td valign="top">
                                The hotel position. This element has two attributes:
                                
                                    * 
                                        **Latitude**: The latitude of the hotel.
                                    * 
                                        **Longitude**: The longitude of the hotel.
                                
                            </td>
                        </tr>
                        <tr>
                            <td valign="top">
                                Address</td>
                            <td valign="top">
                                The address of the hotel. Optional. Provide this element if you would like the address to display in the search results. This parent element has the following child elements:
                                <table border="1" bordercolor="#CCCCCC" cellpadding="3" cellspacing="0">
                                    <tbody>
                                        <tr>
                                            <td>
                                                StreetNmbr</td>
                                            <td>
                                                The street address of the hotel.</td>
                                        </tr>
                                        <tr>
                                            <td>
                                                CityName</td>
                                            <td>
                                                The city the hotel is in.</td>
                                        </tr>
                                        <tr>
                                            <td>
                                                PostalCode</td>
                                            <td>
                                                The postal code of the hotel.</td>
                                        </tr>
                                        <tr>
                                            <td>
                                                CountryName</td>
                                            <td>
                                                This element has the **Code** attribute, which contains the country code of the hotel.</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </td>
                        </tr>
                        <tr>
                            <td valign="top">
                                TPA_Extensions</td>
                            <td valign="top">
                                This parent element contains the following child elements:
                                <table border="1" bordercolor="#CCCCCC" cellpadding="3" cellspacing="0">
                                    <tbody>
                                        <tr>
                                            <td>
                                                HotelImageURI</td>
                                            <td>
                                                The link to the image associated with the hotel. A fully qualified url to the hotel image should be returned in the response. Image size must be 70 pixels wide and 72 pixels tall. Images can be no larger than 8K bytes. The image format must be gif or jpg. Images should be accessible through http and https protocols.</td>
                                        </tr>
                                        <tr>
                                            <td>
                                                HotelPreference</td>
                                            <td>
                                                This element includes the customer's preference level for the individual property. Refer to the <a href="https://developer.concur.com/sites/default/files/HotelCodes.pdf">Hotel Direct Connect Codes</a> for the possible values.</td>
                                        </tr>
                                        <tr>
                                            <td>
                                                GDS_InfoType</td>
                                            <td>
                                                This parent element has a **MasterChainCode** attribute, containing the two-letter GDS code that gives access to a number of different hotel brands owned or represented by the same chain. The **MasterChainCode** lets Concur automatically determine what advantage card numbers to send for this hotel. Refer to the <a href="https://developer.concur.com/sites/default/files/HotelCodes.pdf">Hotel Direct Connect Codes</a>. This parent element contains a **GDS_Codes **element. This parent element contains the following child element:
                                                <table border="1" bordercolor="#CCCCCC" cellpadding="3" cellspacing="0">
                                                    <tbody>
                                                        <tr>
                                                            <td>
                                                                GDS_Code</td>
                                                            <td>
                                                                This element has the following attributes:
                                                                
                                                                    * 
                                                                        **GDS_PropertyCode**: This attribute lets Concur match against other results (to display GDS and HotelService rates as one item). The most typical one is Northstar ID. If GDS_PropertyCode is provided, GDS_Name must also be provided
                                                                    * 
                                                                        **GDS_Name**: The name of the associated GDS.
                                                                
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
                                StarRating</td>
                            <td valign="top">
                                The number of stars the hotel is rated for. Optional. Possible values: 1-5</td>
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

<OTA_HotelSearchRS <span class="xml-attribute">xmlns=<span class="xml-value">&quot;<span class="xml-value">http://www.opentravel.org/OTA/2003/05<span class="xml-value">&quot; <span class="xml-attribute">EchoToken=<span class="xml-value">&quot;ABC123&quot; <span class="xml-attribute">TimeStamp=<span class="xml-value">&quot;2012-01-01T19:00:00&quot; <span class="xml-attribute">xmlns:xsi=<span class="xml-value">&quot;<span class="xml-value">http://www.w3.org/2001/XMLSchema-instance<span class="xml-value">&quot; <span class="xml-attribute">xsi:schemaLocation=<span class="xml-value">&quot;<span class="xml-value">http://www.opentravel.org/OTA/2003/05<span class="xml-value"> ../Schemas/OTA_HotelSearchRS.xsd&quot; <span class="xml-attribute">Version=<span class="xml-value">&quot;6.000&quot;>
    <Success />
    <Properties>
        <Property <span class="xml-attribute">ChainCode=<span class="xml-value">&quot;ZZ&quot; <span class="xml-attribute">HotelCode=<span class="xml-value">&quot;HTL1111&quot; <span class="xml-attribute">HotelName=<span class="xml-value">&quot;HOTEL1&quot;>
            <Position <span class="xml-attribute">Latitude=<span class="xml-value">&quot;45.132&quot; <span class="xml-attribute">Longitude=<span class="xml-value">&quot;-86.1823&quot;/>
            <Address>
                <StreetNmbr>123 Lake avenue</StreetNmbr>
                8/33
                <CityName>Empire</CityName>
                <PostalCode>12345</PostalCode>
                <CountryName <span class="xml-attribute">Code=<span class="xml-value">&quot;US&quot;/>
            </Address>
            <TPA_Extensions>
                <HotelImageURI>http://www.c.com/h/HTL1.gif</HotelImageURI>
                <HotelPreference>preferred</HotelPreference>
                <GDS_InfoType <span class="xml-attribute">MasterChainCode=<span class="xml-value">&quot;ZZ&quot;>
                    <GDS_Codes>
                        <GDS_Code <span class="xml-attribute">GDS_PropertyCode=<span class="xml-value">&quot;W1234567&quot; <span class="xml-attribute">GDS_Name=<span class="xml-value">&quot;Worldspan&quot;/>
                    </GDS_Codes>
                </GDS_InfoType>
                <StarRating>4</StarRating>
            </TPA_Extensions>
        </Property>
        <Property <span class="xml-attribute">ChainCode=<span class="xml-value">&quot;ZZ&quot; <span class="xml-attribute">HotelCode=<span class="xml-value">&quot;HTL2222&quot; <span class="xml-attribute">HotelName=<span class="xml-value">&quot;HOTEL2&quot;>
            <Position <span class="xml-attribute">Latitude=<span class="xml-value">&quot;45.131&quot; <span class="xml-attribute">Longitude=<span class="xml-value">&quot;-86.1823&quot;/>
            <Address>
                <StreetNmbr>124 Lake avenue</StreetNmbr>
                <CityName>Empire</CityName>
                <PostalCode>12345</PostalCode>
                <CountryName <span class="xml-attribute">Code=<span class="xml-value">&quot;US&quot;/>
            </Address>
        </Property>
        <Property <span class="xml-attribute">ChainCode=<span class="xml-value">&quot;ZZ&quot; <span class="xml-attribute">HotelCode=<span class="xml-value">&quot;HTL3333&quot; <span class="xml-attribute">HotelName=<span class="xml-value">&quot;HOTEL3&quot;>
            <Position <span class="xml-attribute">Latitude=<span class="xml-value">&quot;45.1317&quot; <span class="xml-attribute">Longitude=<span class="xml-value">&quot;-86.182&quot;/>
            <Address>
                <StreetNmbr>125 Lake avenue</StreetNmbr>
                <CityName>Empire</CityName>
                <PostalCode>12345</PostalCode>
                <CountryName <span class="xml-attribute">Code=<span class="xml-value">&quot;US&quot;/>
            </Address>
        </Property>
    </Properties>
</OTA_HotelSearchRS>
</pre>
<br />
