
        <div id="main" class="container">
            <div>
                            </div>
            <div class="row">
                <div class="span12">
<div class="breadcrumbs"><a href="/">Home</a>Location Resource: GET</div>
                </div>
            </div>

            <div id="content-wrapper">
<!-- <div class="row"> -->
                <div id="content" class="span9">
            # Location Resource: GET
                    <div class="section">
                    <div id="node-489" class="node clear-block">


    
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
This resource supports the following GET actions:

    * 
        <a href="#listoflists">Get List of Locations </a>

## 
    <a id="listoflists" name="listoflists"></a>Get List of Locations Request
<table border="1" bordercolor="#DBDBDB" cellpadding="3" cellspacing="0" width="100% ">
    <tbody>
        <tr class="GrayTableHead">
            <td>
                Description</td>
            <td>
                Supported Accept Types</td>
        </tr>
        <tr>
            <td>
                Retrieves a list of valid city location codes.</td>
            <td>
                
                    * 
                        application/xml
                
            </td>
        </tr>
        <tr class="GrayTableHead">
            <td>
                Query Parameters - Required</td>
            <td>
                Query Parameters - Optional</td>
        </tr>
        <tr>
            <td>
                
                    * 
                        <span class="codeexample">**city****={<em>searchstring</em>}**<br />
                        The city name. The system will return all values with city names that begin with the supplied name. The city name value is not case sensitive. The value can contain the * wildcard. This wildcard matches any number of characters. Example: Locations?city=old*b_o will match the city name &quot;Old Saybrook&quot;
                
                Example:<br />
                https://www.concursolutions.com/api/expense/expensereport/v1.1/Locations?city={<em>searchstring</em>}</td>
            <td>
                None</td>
        </tr>
        <tr class="GrayTableHead">
            <td>
                Request Headers - Required</td>
            <td>
                Request Headers - Optional</td>
        </tr>
        <tr>
            <td width="50%">
                Authorization header with OAuth token for valid Concur user.</td>
            <td valign="top" width="50%">
                None</td>
        </tr>
    </tbody>
</table>
####
    XML Example Request
<pre class="overflow_box">
GET https://www.concursolutions.com/api/expense/expensereport/v1.1/Locations?city=Redmond HTTP/1.1
Authorization: OAuth {access token}
... 
</pre>
## 
    Get List of Locations Response
<table border="1" bordercolor="#DBDBDB" cellpadding="3" cellspacing="0" width="100% ">
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
                This request will return a **LocationsList** parent element with a **Location** parent element for each location with a City Name that contains the search text. The **Location** parent element contains the following child elements:
                <table border="1" bordercolor="#DBDBDB" cellpadding="3" cellspacing="0" width="100% ">
                    <tbody>
                        <tr class="GrayTableHead">
                            <td valign="top" width="20%">
                                Element</td>
                            <td valign="top" width="70%">
                                Description</td>
                        </tr>
                        <tr>
                            <td valign="top">
                                <span class="codeexample">Name</td>
                            <td valign="top">
                                The city name.</td>
                        </tr>
                        <tr>
                            <td valign="top">
                                <span class="codeexample">Country</td>
                            <td valign="top">
                                The country name for the location.</td>
                        </tr>
                        <tr>
                            <td valign="top">
                                <span class="codeexample">State</td>
                            <td valign="top">
                                The state/province name for the location. Empty if there is no corresponding state/province.</td>
                        </tr>
                        <tr>
                            <td valign="top">
                                <span class="codeexample">LocationID</td>
                            <td valign="top">
                                The unique key for the location. This value is required when posting data in the **City** element.</td>
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
200 OK
Content-Type: application/xml
<LocationList <span class="xml-attribute">xmlns=<span class="xml-value">&quot;<span class="xml-value">http://www.concursolutions.com/api/expense/expensereport/2011/03<span class="xml-value">&quot; <span class="xml-attribute">xmlns:i=<span class="xml-value">&quot;<span class="xml-value">http://www.w3.org/2001/XMLSchema-instance<span class="xml-value">&quot;>
    <Location>
        <Country>UNITED STATES</Country>
        <LocationID>nXipdPDzr4oCPylSOd91NQqQ$sqmnQrQxR</LocationID>
        <Name>Redmond</Name>
        <State>Washington</State>
    </Location>
    <Location>
        <Country>UNITED STATES</Country>
        <LocationID>8WWeksu7dEoHlsiIE$28kkj3ED8swhgGgye</LocationID>
        <Name>Redmond</Name>
        <State>Oregon</State>
    </Location>
    <Location>
        <Country>UNITED STATES</Country>
        <LocationID>Oe11hKEi$lslPncYAe2k2h7s67sdkkLEigUIF$</LocationID>
        <Name>Redmond</Name>
        <State>Utah</State>
    </Location>
</LocationList>
</pre>
<br />
