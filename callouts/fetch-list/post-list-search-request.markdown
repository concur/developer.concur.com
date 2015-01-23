
        <div id="main" class="container">
            <div>
                            </div>
            <div class="row">
                <div class="span12">
<div class="breadcrumbs"><a href="/">Home</a>Fetch List - Post List Search Request</div>
                </div>
            </div>

            <div id="content-wrapper">
<!-- <div class="row"> -->
                <div id="content" class="span9">
            # Fetch List - Post List Search Request
                    <div class="section">
                    <div id="node-444" class="node clear-block">


    
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
This callout supports the following POST actions:

    * 
        <a href="#listoflists">Post List Search </a>

## 
    <a id="listoflists" name="listoflists"></a>Post List Search Request
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
                The Fetch List callout sends the attendee information to a URI for the application connector, which can be in a custom location for each client. The standard location is:
                <pre class="overflow_box">
https://{servername}/concur/list/v1.0/fetch</pre>
                The URI is configured on the **Register Application Connector** page in** Web Services** under **Administration**.</td>
        </tr>
        <tr class="GrayTableHead">
            <td>
                Request Headers - Required</td>
            <td>
                Request Headers - Optional</td>
        </tr>
        <tr>
            <td width="50%">
                Authorization header with Basic authorization for endpoint. Refer to <a href="https://developer.concur.com/node/443#auth">**Authentication**</a> for more information.</td>
            <td valign="top" width="50%">
                None</td>
        </tr>
        <tr class="GrayTableHead">
            <td colspan="2">
                Request Body</td>
        </tr>
        <tr>
            <td colspan="2">
                The request will contain a** fetch-list-request** parent element, containing the following child elements.
                
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
                                long-code</td>
                            <td valign="top">
                                The long code is a concatenated string containing the parent list item keys separated by a hyphen (-).</td>
                        </tr>
                        <tr>
                            <td valign="top">
                                short-code</td>
                            <td valign="top">
                                The short code is the key of the parent list item.</td>
                        </tr>
                        <tr>
                            <td valign="top">
                                query</td>
                            <td valign="top">
                                It is possible that the asterisk wildcard will be passed from Expense to the application connector.
                                
                                    * 
                                        Asterisk only (*) - Return all items in the list represented by the long code.
                                    * 
                                        Text followed by asterisk (West*) - Return all items beginning with the text.
                                    * 
                                        Asterisk followed by text - Return all items ending with the text.
                                
                            </td>
                        </tr>
                        <tr>
                            <td valign="top">
                                search-by</td>
                            <td valign="top">
                                Indicates which list item attribute should be searched. Possible values are TEXT or CODE.
                                **NOTE**: The application connector must support both attributes in order to properly handle wildcard searches.
                            </td>
                        </tr>
                        <tr>
                            <td valign="top">
                                lang-code</td>
                            <td valign="top">
                                The two character code for the language of the user.</td>
                        </tr>
                        <tr>
                            <td valign="top">
                                num-to-return</td>
                            <td valign="top">
                                Expense will specify the number of items to return. The application connector must use this value to ensure that it does not return more results than requested. There is a system limit of 1000 items.</td>
                        </tr>
                    </tbody>
                </table>
            </td>
        </tr>
    </tbody>
</table>
####
    XML Example Request
The example uses the Fetch List web service to search a connected list for all cities under US-W-CA (United States, Western Region, California) beginning with San, and is configured to connect to an application connector located at www.example.com.
<pre class="overflow_box">
POST /concur/list/v1.0/fetch HTTPS/1.1
Host: example.com
Authorization: Basic ...
Content-Type: application/xml; charset=utf-8
Content-Length: {length of content body}

<span class="ST0"><?<span class="ST0">xml version=&quot;1.0&quot;?>
<fetch-list-request>
    <long-code>US-W-CA</long-code>
    <short-code>CA</short-code>
    <query>San*</query>
    <search-by>TEXT</search-by>
    <lang-code>EN</lang-code>
    <num-to-return>500</num-to-return>
</fetch-list-request>  
</pre>
## 
    Post List Search Response
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
                The application connector responds to the Fetch list web service request by returning all list items that match the search criteria.<br />
                <br />
                The response will include a **fetch-list-response** parent element, with an** item** child element for each search result. If there are no search results, the **fetch-list-response** element is empty. The **item** child element contains the following child elements:
                
                <br />
                <br />
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
                                code</td>
                            <td valign="top">
                                The long code for the list item, consisting of the long code from the request combined with the short code from the response, separated by a hyphen (-).</td>
                        </tr>
                        <tr>
                            <td valign="top">
                                short-code</td>
                            <td valign="top">
                                The short code for the list item.</td>
                        </tr>
                        <tr>
                            <td valign="top">
                                text</td>
                            <td valign="top">
                                The list item text.</td>
                        </tr>
                        <tr>
                            <td valign="top">
                                match-value</td>
                            <td valign="top">
                                The value that matched the search term.</td>
                        </tr>
                    </tbody>
                </table>
            </td>
        </tr>
    </tbody>
</table>
####
    XML Example of Response with Results
<pre class="overflow_box">
200 OK HTTPS/1.1 
Content-Length: {length of content body}

<fetch-list-response>
    <item>
        <code>US-W-CA-SF</code>
        <short-code>SF</short-code>
        <text>San Francisco</text>
        <match-value>San Francisco</match-value>
    </item>
    <item>
        <code>US-W-CA-SD</code>
        <short-code>SD</short-code>
        <text>San Diego</text>
        <match-value>San Diego</match-value>
    </item>
    <item>
        <code>US-W-CA-SJ</code>
        <short-code>SJ</short-code>
        <text>San Jose</text>
        <match-value>San Jose</match-value>
    </item>
</fetch-list-response>
</pre>
####
    XML Example of Response with No Results
<pre class="overflow_box">
200 OK HTTPS/1.1

<fetch-list-response>
</fetch-list-response>
</pre>
<br />
