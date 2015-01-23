
        <div id="main" class="container">
            <div>
                            </div>
            <div class="row">
                <div class="span12">
<div class="breadcrumbs"><a href="/">Home</a>List Resource: GET</div>
                </div>
            </div>

            <div id="content-wrapper">
<!-- <div class="row"> -->
                <div id="content" class="span9">
            # List Resource: GET
                    <div class="section">
                    <div id="node-343" class="node clear-block">


    
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
        <a href="#listoflists">Get List of Lists</a>
    * 
        <a href="#listdetails">Get List Details</a>
    * 
        <a href="#listitems">Get List Items</a>

## 
    <a id="listoflists" name="listoflists"></a>Get List of Lists Request
<table border="1" bordercolor="#dbdbdb" cellpadding="3" cellspacing="0" width="100%">
    <tbody>
        <tr class="GrayTableHead">
            <td>
                Description</td>
            <td>
                Supported Content Types</td>
        </tr>
        <tr>
            <td>
                Retrieves the list of configured lists.</td>
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
                None</td>
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
                Authorization header with OAuth token for valid Concur user.<br />
                <br />
                The OAuth consumer must have one of the following user roles in Concur: Company Administrator or Web Services Administrator for Professional, or Can Administer for Standard.<br />
                <br />
                These roles allow the user to manage data for the entire company.</td>
            <td valign="top" width="50%">
                None</td>
        </tr>
    </tbody>
</table>
####
    XML Example Request
<pre class="overflow_box">
GET /api/expense/list/v1.0/ HTTPS 1.1
Host: www.concursolutions.com
Authorization: OAuth {access token}
Content-Type: application/xml
</pre>
## 
    Get List of Lists Response
<table border="1" bordercolor="#dbdbdb" cellpadding="3" cellspacing="0" width="100%">
    <tbody>
        <tr class="GrayTableHead">
            <td>
                HTTP Responses</td>
            <td>
                Supported Content Types</td>
        </tr>
        <tr>
            <td>
                <a href="https://developer.concur.com/node/205">HTTP Status Codes</a><br />
                <br />
                <a href="https://developer.concur.com/node/370#responses">List Item Error Codes</a></td>
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
                This request will return a** lists** parent element containing a **list** child element for each configured list. The**list** element will contain the following child elements:<br />
                <table border="1" bordercolor="#dbdbdb" cellpadding="3" cellspacing="0" width="100%">
                    <tbody>
                        <tr class="GrayTableHead">
                            <td valign="top" width="20%">
                                Element</td>
                            <td valign="top" width="70%">
                                Description</td>
                        </tr>
                        <tr>
                            <td valign="top">
                                id</td>
                            <td valign="top">
                                The list URI with encrypted ID.</td>
                        </tr>
                        <tr>
                            <td valign="top">
                                items-link</td>
                            <td valign="top">
                                The list item URI with encrypted ID.</td>
                        </tr>
                        <tr>
                            <td valign="top">
                                batch-link</td>
                            <td valign="top">
                                The batch URI associated with this list, with encrypted ID.</td>
                        </tr>
                        <tr>
                            <td valign="top">
                                name</td>
                            <td valign="top">
                                The name of the list as it appears in the user interface.</td>
                        </tr>
                        <tr>
                            <td valign="top">
                                is-vendor</td>
                            <td valign="top">
                                Whether this is a vendor list. Format: true/false</td>
                        </tr>
                        <tr>
                            <td valign="top">
                                levels</td>
                            <td valign="top">
                                The number of levels the list contains.</td>
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
<lists <span class="xml-attribute">xmlns=<span class="xml-value">&quot;<span class="xml-value">http://www.concursolutions.com/api/expense/list/2010/02<span class="xml-value">&quot;>
    <list>
        <id>http://www.concursolutions.com/api/expense/list/v1.0/I8pq1l$rdSmdrEW23deOjPjyr4Wso0Wq$a</id>
        <batch-link>http://www.concursolutions.com/api/expense/list/v1.0/I8pq1l$rdSmdrEW23deOjPjyr4Wso0Wq$a/batch</batch-link>
        <name>Widget List</name>
        <is-vendor>false</is-vendor>
        <levels>1</levels>
        <items-link>http://www.concursolutions.com/api/expense/list/v1.0/I8pq1l$rdSmdrEW23deOjPjyr4Wso0Wq$a/items/</items-link>
    </list>
    <list>
        <id>http://www.concursolutions.com/api/expense/list/v1.0/jUwq11frTd$sweNd7s6s8O0fYi$piWwato</id>
        <batch-link>http://www.concursolutions.com/api/expense/list/v1.0/jUwq11frTd$sweNd7s6s8O0fYi$piWwato/batch</batch-link>
        <name>Organization List</name>
        <is-vendor>false</is-vendor>
        <levels>4</levels>
        <items-link>http://www.concursolutions.com/api/expense/list/v1.0/jUwq11frTd$sweNd7s6s8O0fYi$piWwato/items/</items-link>
    </list>
    <list>
        <id>http://www.concursolutions.com/api/expense/list/v1.0/4q2Hy86r45Klls$pseQEhNpz8Oxal7ytRe</id>
        <batch-link>http://www.concursolutions.com/api/expense/list/v1.0/4q2Hy86r45Klls$pseQEhNpz8Oxal7ytRe/batch</batch-link>
        <name>Airlines</name>
        <is-vendor>true</is-vendor>
        <levels>1</levels>
        <items-link>http://www.concursolutions.com/api/expense/list/v1.0/4q2Hy86r45Klls$pseQEhNpz8Oxal7ytRe/items/</items-link>
    </list>
</lists>
</pre>
## 
    <a id="listdetails" name="listdetails"></a>Get List Details Request
<table border="1" bordercolor="#dbdbdb" cellpadding="3" cellspacing="0" width="100%">
    <tbody>
        <tr class="GrayTableHead">
            <td>
                Description</td>
            <td>
                Supported Content Types</td>
        </tr>
        <tr>
            <td>
                Retrieves the list details for a specified list. Includes configuration information, not the list items.</td>
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
                        **{<em>listID</em>}**<br />
                        The identifier for the desired list.
                
                Example: https://www.concursolutions.com/api/expense/list/v1.0/<em>{listID}</em><br />
                **URI Source**: This URI is returned in the **id** element by the <a href="#getlistoflists">Get List of Lists</a> function.</td>
            <td valign="top">
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
                Authorization header with OAuth token for valid Concur user. The OAuth consumer must have one of the following user roles in Concur: Company Administrator or Web Services Administrator for Professional, or Can Administer for Standard.<br />
                <br />
                These roles allow the user to manage data for the entire company.</td>
            <td valign="top" width="50%">
                None</td>
        </tr>
    </tbody>
</table>
####
    XML Example Request
<pre class="overflow_box">
GET /api/expense/list/v1.0/nqd1YesaKhCWCFIhY8JeBJYf2UGdpwJ2r HTTPS 1.1
Host: www.concursolutions.com
Authorization: OAuth {access token}
Content-Type: application/xml
</pre>
## 
    Get List Details Response
<table border="1" bordercolor="#dbdbdb" cellpadding="3" cellspacing="0" width="100%">
    <tbody>
        <tr>
            <td>
                HTTP Responses</td>
            <td>
                Supported Content Types</td>
        </tr>
        <tr>
            <td>
                <a href="https://developer.concur.com/node/205">HTTP Status Codes</a><br />
                <br />
                <a href="https://developer.concur.com/node/370#responses">List Item Error Codes</a></td>
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
                This request will return a** list** parent element. The**list** element will contain the following child elements:<br />
                <table border="1" bordercolor="#dbdbdb" cellpadding="3" cellspacing="0" width="100%">
                    <tbody>
                        <tr class="GrayTableHead">
                            <td valign="top" width="20%">
                                Element</td>
                            <td valign="top" width="70%">
                                Description</td>
                        </tr>
                        <tr>
                            <td valign="top">
                                batch-link</td>
                            <td valign="top">
                                The batch URI associated with this list, with encrypted ID.</td>
                        </tr>
                        <tr>
                            <td valign="top">
                                id</td>
                            <td valign="top">
                                The list URI with encrypted ID.</td>
                        </tr>
                        <tr>
                            <td valign="top">
                                is-vendor</td>
                            <td valign="top">
                                Whether this is a vendor list. Format: true/false.</td>
                        </tr>
                        <tr>
                            <td valign="top">
                                items-link</td>
                            <td valign="top">
                                The list item URI with encrypted ID.</td>
                        </tr>
                        <tr>
                            <td valign="top">
                                levels</td>
                            <td valign="top">
                                The number of levels the list contains.</td>
                        </tr>
                        <tr>
                            <td valign="top">
                                name</td>
                            <td valign="top">
                                The name of the list as it appears in the user interface.</td>
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
<list <span class="xml-attribute">xmlns=<span class="xml-value">&quot;<span class="xml-value">http://www.concursolutions.com/api/expense/list/2010/02<span class="xml-value">&quot; <span class="xml-attribute">xmlns:i=<span class="xml-value">&quot;<span class="xml-value">http://www.w3.org/2001/XMLSchema-instance<span class="xml-value">&quot;>
    <batch-link>https://www.concursolutions.com/api/expense/list/v1.0/nqd1YesaKhCWCFIhY8JeBJYf2UGdpwJ2r/batch</batch-link>
    <id>https://www.concursolutions.com/api/expense/list/v1.0/nqd1YesaKhCWCFIhY8JeBJYf2UGdpwJ2r</id>
    <is-vendor>true</is-vendor>
    <items-link>https://www.concursolutions.com/api/expense/list/v1.0/nqd1YesaKhCWCFIhY8JeBJYf2UGdpwJ2r/items</items-link>
    <levels>1</levels>
    <name>Travel Agents</name>
</list>
</pre>
## 
    <a id="listitems" name="listitems"></a>Get List Items Request
<table border="1" bordercolor="#dbdbdb" cellpadding="3" cellspacing="0" width="100%">
    <tbody>
        <tr class="GrayTableHead">
            <td>
                Description</td>
            <td>
                Supported Content Types</td>
        </tr>
        <tr>
            <td>
                Retrieves the list items for the specified list. A request sent without a specified parent list item code returns all level 1 list items. A request sent with a parent list item code returns all list items below that parent item. The result set can be filtered by passing in a filter string.</td>
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
                        **{<em>listID</em>}/items**<br />
                        The identifier for the desired list, and the items keyword to indicate the request is for the list items.
                
                Example: https://www.concursolutions.com/api/expense/list/v1.0/<em>{listID}</em>/items</td>
            <td>
                
                    * 
                        **{<em>parentCode</em>**}<br />
                        The parent list item code. If this is included, the request will return all items below this list item. The parent code must be URL encoded.
                    * 
                        **filter={<em>filter</em>}**<br />
                        The result filter. The string value entered will be compared against the list item name and code fields, and only matching results will be returned.
                
                Example: https://www.concursolutions.com/api/expense/list/v1.0/{<em>listID</em>}/items?parentCode={<em>parentcode</em>}&amp;filter={<em>filter</em>}</td>
        </tr>
        <tr class="GrayTableHead">
            <td>
                Request Headers - Required</td>
            <td>
                Request Headers - Optional</td>
        </tr>
        <tr>
            <td width="50%">
                Authorization header with OAuth token for valid Concur user.<br />
                <br />
                The OAuth consumer must have one of the following user roles in Concur: Company Administrator or Web Services Administrator for Professional, or Can Administer for Standard.<br />
                <br />
                These roles allow the user to manage data for the entire company.</td>
            <td valign="top" width="50%">
                None</td>
        </tr>
    </tbody>
</table>
####
    XML Example Request
<pre class="overflow_box">
GET /api/expense/list/v1.0/jUwq11frTd$sweNd7s6s8O0fYi$piWwato/items/ HTTPS 1.1
Host: www.concursolutions.com
Authorization: OAuth {access token}
Content-Type: application/xml
</pre>
####
    XML Example Request with Parent Code
<pre class="overflow_box">
GET /api/expense/list/v1.0/jUwq11frTd$sweNd7s6s8O0fYi$piWwato/items?parentCode=US HTTPS 1.1
Host: www.concursolutions.com
Authorization: OAuth {access token}
Content-Type: application/xml
</pre>
####
    XML Example Request with Filter
<pre class="overflow_box">
GET /api/expense/list/v1.0/jUwq11frTd$sweNd7s6s8O0fYi$piWwato/items?filter=United HTTPS 1.1
Host: www.concursolutions.com
Authorization: OAuth {access token}
Content-Type: application/xml
</pre>
## 
    Get List Items Response
<table border="1" bordercolor="#dbdbdb" cellpadding="3" cellspacing="0" width="100%">
    <tbody>
        <tr class="GrayTableHead">
            <td>
                HTTP Responses</td>
            <td>
                Supported Content Types</td>
        </tr>
        <tr>
            <td>
                <a href="https://developer.concur.com/node/205">HTTP Status Codes</a><br />
                <br />
                <a href="https://developer.concur.com/node/370#responses">List Item Error Codes</a></td>
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
                This request will return a **list-items** parent element, with a** list-item** child element for each item returned.The**list-item** elements will contain the following child elements:<br />
                <table border="1" bordercolor="#dbdbdb" cellpadding="3" cellspacing="0" width="100%">
                    <tbody>
                        <tr class="GrayTableHead">
                            <td valign="top" width="20%">
                                Element</td>
                            <td valign="top" width="70%">
                                Description</td>
                        </tr>
                        <tr>
                            <td valign="top">
                                name</td>
                            <td valign="top">
                                The list item name.</td>
                        </tr>
                        <tr>
                            <td valign="top">
                                levelxcode</td>
                            <td valign="top">
                                The item code for all specified levels, where x is replaced with the level number. If the request is for the children of a level 2 item, the** level1code**, **level2code**, and** level3code** elements will be returned.</td>
                        </tr>
                        <tr>
                            <td valign="top">
                                items-link</td>
                            <td valign="top">
                                The URI, including the parent code value, to request the list items beneath this list item.</td>
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
<list-items <span class="xml-attribute">xmlns=<span class="xml-value">&quot;<span class="xml-value">http://www.concursolutions.com/api/expense/list/2010/02<span class="xml-value">&quot;>
    <list-item>
        <name>United States</name>
        <level1code>US</level1code>
        <items-link>https://www.concursolutions.com/api/expense/list/v1.0/jUwq11frTd$sweNd7s6s8O0fYi$piWwato/items/US/</items-link>
    </list-item>
    <list-item>
        <name>United Kingdom</name>
        <level1code>UK</level1code>
        <items-link>https://www.concursolutions.com/api/expense/list/v1.0/jUwq11frTd$sweNd7s6s8O0fYi$piWwato/items/UK/</items-link>
    </list-item>
    <list-item>
        <name>Canada</name>
        <level1code>CA</level1code>
        <items-link>https://www.concursolutions.com/api/expense/list/v1.0/jUwq11frTd$sweNd7s6s8O0fYi$piWwato/items/CA/</items-link>
    </list-item>
    <list-item>
        <name>Mexico</name>
        <level1code>MX</level1code>
        <items-link>https://www.concursolutions.com/api/expense/list/v1.0/jUwq11frTd$sweNd7s6s8O0fYi$piWwato/items/MX/</items-link>
    </list-item>
</list-items>
</pre>
<br />
