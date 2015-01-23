
        <div id="main" class="container">
            <div>
                            </div>
            <div class="row">
                <div class="span12">
<div class="breadcrumbs"><a href="/">Home</a>List Resource: POST</div>
                </div>
            </div>

            <div id="content-wrapper">
<!-- <div class="row"> -->
                <div id="content" class="span9">
            # List Resource: POST
                    <div class="section">
                    <div id="node-362" class="node clear-block">


    
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
This resource supports the following POST actions:

    * 
        <a href="#newlistitem">Post New List Item </a>
    * 
        <a href="#listitemupdate">Post List Item Update</a>
    * 
        <a href="#listitemdelete">Post List Item Deletion</a>

## 
    <a id="newlistitem" name="newlistitem"></a>Post New List Item Request
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
                Adds list items to an existing list.</td>
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
                    * 
                        **batch?type**=**{<em>type</em>}**<br />
                        The type of batch operation to complete. Should be **create**.
                
                Example: https://www.concursolutions.com/api/expense/list/v1.0/<em>{listID</em>}/batch?type=create
            </td>
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
                Authorization header with OAuth token for valid Concur user.<br />
                <br />
                The OAuth consumer must have one of the following user roles in Concur: Company Administrator or Web Services Administrator for Professional, or Can Administer for Standard.<br />
                <br />
                These roles allow the user to manage data for the entire company.</td>
            <td valign="top" width="50%">
                None</td>
        </tr>
        <tr class="GrayTableHead">
            <td colspan="2">
                Content Body</td>
        </tr>
        <tr>
            <td colspan="2">
                This function requires as its arguments a **list-item-batch** element containing a **list-item** child element for each item to be added. The **list-item** elements can contain the following child elements:<br />
                <table border="1" bordercolor="#dbdbdb" cellpadding="3" cellspacing="0" width="100%">
                    <tbody>
                        <tr class="GrayTableHead">
                            <td valign="top" width="20%">
                                Element</td>
                            <td valign="top" width="20%">
                                Required (must contain value)?</td>
                            <td valign="top" width="70%">
                                Description</td>
                        </tr>
                        <tr>
                            <td valign="top">
                                name</td>
                            <td valign="top">
                                Y</td>
                            <td valign="top">
                                The name of the list item as it appears in the user interface. Maximum 64 characters.</td>
                        </tr>
                        <tr>
                            <td valign="top">
                                levelxcode</td>
                            <td valign="top">
                                Y, for each list level</td>
                            <td valign="top">
                                There must be one element for each list level. A three level list will require the elements: **level1code**, **level2code** and **level3code**.
                                Maximum 32 characters for each level.
                                **NOTE**: The level codes for the list item are used to uniquely identify the list item. Once a list item has been created, the level codes cannot be updated. Refer to <a href="https://developer.concur.com/node/370#changecode">Changing a List Item Level Code</a> for more information.
                            </td>
                        </tr>
                        <tr>
                            <td height="31" valign="top">
                                start-date</td>
                            <td valign="top">
                                N</td>
                            <td valign="top">
                                The effective date when the list item should be active. Format: YYYY-MM-DD.</td>
                        </tr>
                        <tr>
                            <td valign="top">
                                end-date</td>
                            <td valign="top">
                                N</td>
                            <td valign="top">
                                The effective date when the list item should be inactive. Format: YYYY-MM-DD.</td>
                        </tr>
                    </tbody>
                </table>
            </td>
        </tr>
    </tbody>
</table>
####
    XML Example Request For Single Level List
<pre class="overflow_box">
POST /api/expense/list/v1.0/list/I8pq1l$rdSmdrEW23deOjPjyr4Wso0Wq$a/batch?type=create HTTPS 1.1
Host: www.concursolutions.com
Authorization: OAuth {access token}
...
<list-item-batch <span class="xml-attribute">xmlns=<span class="xml-value">&quot;<span class="xml-value">http://www.concursolutions.com/api/expense/list/2010/02<span class="xml-value">&quot;>
    <list-item>
        <name>Spool</name>
        <level1code>SL</level1code>
        <start-date>2010-04-01</start-date>
        <end-date>2010-09-30</end-date>
    </list-item>
    <list-item>
        <name>Wheel</name>
        <level1code>WH</level1code>
        <start-date>2010-04-01</start-date>
        <end-date>2010-09-30</end-date>
    </list-item>
</list-item-batch>
</pre>
####
    XML Example Request For Multiple Level List
<pre class="overflow_box">
POST /api/expense/list/v1.0/list/uiT738IE$fhI223Kjd1!jfHus$/batch?type=create HTTPS 1.1
Host: www.concursolutions.com
Authorization: OAuth {access token}
<list-item-batch <span class="xml-attribute">xmlns=<span class="xml-value">&quot;<span class="xml-value">http://www.concursolutions.com/api/expense/list/2010/02<span class="xml-value">&quot;>
    <list-item>
        <name>Beverages</name>
        <level1code>DRINKS</level1code>
    </list-item>
    <list-item>
        <name>Meal</name>
        <level1code>FOOD</level1code>
    </list-item>
    <list-item>
        <name>Non-Alcoholic</name>
        <level1code>DRINKS</level1code>
        <level2code>NALC</level2code>
    </list-item>
    <list-item>
        <name>Alcoholic</name>
        <level1code>DRINKS</level1code>
        <level2code>ALC</level2code>
    </list-item>
    <list-item>
        <name>Soft drinks</name>
        <level1code>DRINKS</level1code>
        <level2code>NALC</level2code>
        <level3code>SODA</level3code>
    </list-item>
    <list-item>
        <name>Juices</name>
        <level1code>DRINKS</level1code>
        <level2code>NALC</level2code>
        <level3code>JUICE</level3code>
    </list-item>
    <list-item>
        <name>Apple Juice</name>
        <level1code>DRINKS</level1code>
        <level2code>NALC</level2code>
        <level3code>JUICE</level3code>
        <level4code>APL</level4code>
    </list-item>
    <list-item>
        <name>Coca-Cola or Pepsi</name>
        <level1code>DRINKS</level1code>
        <level2code>NALC</level2code>
        <level3code>SODA</level3code>
        <level4code>COLA</level4code>
    </list-item>
</list-item-batch>
</pre>
## 
    Post New List Item Response
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
                <a href="https://developer.concur.com/node/205">HTTP Status Codes</a>
                <a href="https://developer.concur.com/node/370#responses">List Item Error Codes</a>
            </td>
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
                This request will return a **list-item-batch-result** parent element with the following child elements:<br />
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
                                records-succeeded</td>
                            <td valign="top">
                                The number of records processed that were successfully added.</td>
                        </tr>
                        <tr>
                            <td valign="top">
                                records-failed</td>
                            <td valign="top">
                                The number of records processed that were not successfully added.</td>
                        </tr>
                        <tr>
                            <td valign="top">
                                errors</td>
                            <td valign="top">
                                This will contain an **error** parent element for each record failure. The **error** element will contain the following child elements:<br />
                                <br />
                                <table border="1" bordercolor="#cccccc" cellpadding="3" cellspacing="0">
                                    <tbody>
                                        <tr>
                                            <td width="20%">
                                                code</td>
                                            <td width="70%">
                                                The code associated with the error. Refer to <a href="https://developer.concur.com/node/370#responses">Responses and Errors</a> for the full list of possible error codes.</td>
                                        </tr>
                                        <tr>
                                            <td>
                                                list-item-code</td>
                                            <td>
                                                The level code of the record that failed.</td>
                                        </tr>
                                        <tr>
                                            <td>
                                                message</td>
                                            <td>
                                                The error message.</td>
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
200 OK
Content-Type: application/xml
<list-item-batch-result <span class="xml-attribute">xmlns=<span class="xml-value">&quot;<span class="xml-value">http://www.concursolutions.com/api/expense/list/2010/02<span class="xml-value">&quot; <span class="xml-attribute">xmlns:i=<span class="xml-value">&quot;<span class="xml-value">http://www.w3.org/2001/XMLSchema-instance<span class="xml-value">&quot;>
    <records-succeeded>8</records-succeeded>
    <records-failed>0</records-failed>
</list-item-batch-result>
</pre>
## 
    <a id="listitemupdate" name="listitemupdate"></a>Post List Item Update Request
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
                Updates existing list items for a specified list.</td>
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
                        **{<em>listID</em>**}<br />
                        The identifier for the desired list.
                    * 
                        **batch?type={<em>type</em>}**<br />
                        The type of batch operation to complete. Should be **update**.
                
                Example: https://www.concursolutions.com/api/expense/list/v1.0/<em>{listID</em>}/batch?type=update
            </td>
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
                Authorization header with OAuth token for valid Concur user.
                The OAuth consumer must have one of the following user roles in Concur: Company Administrator or Web Services Administrator for Professional, or Can Administer for Standard.
                These roles allow the user to manage data for the entire company.
            </td>
            <td valign="top" width="50%">
                None</td>
        </tr>
        <tr class="GrayTableHead">
            <td colspan="2">
                Content Body</td>
        </tr>
        <tr>
            <td colspan="2">
                The request includes a **list-item-batch** element containing a **list-item** child element for each item to be updated. The **list-item** elements can contain the following child elements:<br />
                <table border="1" bordercolor="#dbdbdb" cellpadding="3" cellspacing="0" width="100%">
                    <tbody>
                        <tr class="GrayTableHead">
                            <td valign="top" width="20%">
                                Element</td>
                            <td valign="top" width="20%">
                                Required (must contain value)?</td>
                            <td valign="top" width="70%">
                                Description</td>
                        </tr>
                        <tr>
                            <td height="30" valign="top">
                                name</td>
                            <td valign="top">
                                Y</td>
                            <td valign="top">
                                The name of the list item as it appears in the user interface. Maximum 64 characters.</td>
                        </tr>
                        <tr>
                            <td valign="top">
                                levelxcode</td>
                            <td valign="top">
                                Y, for each list level</td>
                            <td valign="top">
                                There must be one element for each list level. A three level list will require the elements: **level1code**, **level2code** and **level3code**.<br />
                                <br />
                                Maximum 32 characters for each level.<br />
                                <br />
                                **NOTE**: The level codes for the list item are used to uniquely identify the list item. Once a list item has been created, the level codes cannot be updated. Refer to <a href="/node/370#changecode">Changing a List Item Level Code</a> for more information.</td>
                        </tr>
                        <tr>
                            <td valign="top">
                                start-date</td>
                            <td valign="top">
                                N</td>
                            <td valign="top">
                                The effective date when the list item should be active. Format: YYYY-MM-DD.</td>
                        </tr>
                        <tr>
                            <td valign="top">
                                end-date</td>
                            <td valign="top">
                                N</td>
                            <td valign="top">
                                The effective date when the list item should be inactive. Format: YYYY-MM-DD.</td>
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
POST /api/expense/list/v1.0/I8pq1l$rdSmdrEW23deOjPjyr4Wso0Wq$a/batch?type=update HTTPS 1.1
Host: www.concursolutions.com
Authorization: OAuth {access token}
...
<list-item-batch <span class="xml-attribute">xmlns=<span class="xml-value">&quot;<span class="xml-value">http://www.concursolutions.com/api/expense/list/2010/02<span class="xml-value">&quot;>
    <list-item>
        <name>Sprocket, Large </name>
        <level1code>SP</level1code>
        <start-date>2012-06-15</start-date>
        <end-date>2012-12-31</end-date>
    </list-item> 
    <list-item>
        <name>Bushing, vulcanized inner sleeve</name>
        <level1code>BU</level1code>
        <start-date>2012-06-15</start-date>
        <end-date>2012-12-31</end-date>
    </list-item>
</list-item-batch>
</pre>
## 
    Post List Item Update Response
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
                <a href="https://developer.concur.com/node/205">HTTP Status Codes</a>
                <a href="https://developer.concur.com/node/370#responses">List Item Error Codes</a>
            </td>
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
                This request will return a **list-item-batch-result** parent element with the following child elements:<br />
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
                                records-succeeded</td>
                            <td valign="top">
                                The number of records processed that were successfully added.</td>
                        </tr>
                        <tr>
                            <td valign="top">
                                records-failed</td>
                            <td valign="top">
                                The number of records processed that were not successfully added.</td>
                        </tr>
                        <tr>
                            <td valign="top">
                                errors</td>
                            <td valign="top">
                                This will contain an **error** parent element for each record failure. The **error** element will contain the following child elements:<br />
                                <br />
                                <table border="1" bordercolor="#cccccc" cellpadding="3" cellspacing="0">
                                    <tbody>
                                        <tr>
                                            <td width="20%">
                                                code</td>
                                            <td width="70%">
                                                The code associated with the error. Refer to <a href="https://developer.concur.com/node/370#responses">Responses and Errors</a> for the full list of possible error codes.</td>
                                        </tr>
                                        <tr>
                                            <td>
                                                list-item-code</td>
                                            <td>
                                                The level code of the record that failed.</td>
                                        </tr>
                                        <tr>
                                            <td>
                                                message</td>
                                            <td>
                                                The error message.</td>
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
200 OK
Content-Type: application/xml
<list-item-batch-result <span class="xml-attribute">xmlns=<span class="xml-value">&quot;<span class="xml-value">http://www.concursolutions.com/api/expense/list/2010/02<span class="xml-value">&quot; <span class="xml-attribute">xmlns:i=<span class="xml-value">&quot;<span class="xml-value">http://www.w3.org/2001/XMLSchema-instance<span class="xml-value">&quot;>
    <records-succeeded>2</records-succeeded>
    <records-failed>0</records-failed>
</list-item-batch-result>
</pre>
####
    XML Example of a Response with a Failure
<pre class="overflow_box">
200 OK
Content-Type: application/xml
<list-item-batch-result <span class="xml-attribute">xmlns=<span class="xml-value">&quot;<span class="xml-value">http://www.concursolutions.com/api/expense/list/2010/02<span class="xml-value">&quot; <span class="xml-attribute">xmlns:i=<span class="xml-value">&quot;<span class="xml-value">http://www.w3.org/2001/XMLSchema-instance<span class="xml-value">&quot;>
    <records-succeeded>1</records-succeeded>
    <records-failed>1</records-failed>
    <errors>
        <error>
            <code>1</code>
            <list-item-code>BU</list-item-code>
            <message>List item name is too long</message>
        </error>
    </errors>
</list-item-batch-result>
</pre>
## 
    <a id="listitemdelete" name="listitemdelete"></a>Post List Item Deletion Request
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
                Deletes existing list items for a specified list.</td>
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
                    * 
                        **batch?type={<em>type</em>}**<br />
                        The type of batch operation to complete. Should be **delete**.
                
                Example: https://www.concursolutions.com/api/expense/list/v1.0/<em>{listID</em>}/batch?type=delete</td>
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
                Authorization header with OAuth token for valid Concur user.<br />
                <br />
                The OAuth consumer must have one of the following user roles in Concur: Company Administrator or Web Services Administrator for Professional, or Can Administer for Standard.<br />
                <br />
                These roles allow the user to manage data for the entire company.</td>
            <td valign="top" width="50%">
                None</td>
        </tr>
        <tr class="GrayTableHead">
            <td colspan="2">
                Content Body</td>
        </tr>
        <tr>
            <td colspan="2">
                The request includes a **list-item-batch** element containing a **list-item** child element for each item to be updated. The **list-item** elements can contain the following child elements:<br />
                <table border="1" bordercolor="#dbdbdb" cellpadding="3" cellspacing="0" width="100%">
                    <tbody>
                        <tr class="GrayTableHead">
                            <td valign="top" width="20%">
                                Element</td>
                            <td valign="top" width="20%">
                                Required (must contain value)?</td>
                            <td valign="top" width="70%">
                                Description</td>
                        </tr>
                        <tr>
                            <td valign="top">
                                name</td>
                            <td valign="top">
                                N</td>
                            <td valign="top">
                                The name of the list item as it appears in the user interface. Maximum 64 characters.</td>
                        </tr>
                        <tr>
                            <td valign="top">
                                levelxcode</td>
                            <td valign="top">
                                Y, for each list level</td>
                            <td valign="top">
                                There must be one element for each list level. A three level list will require the elements: **level1code**, **level2code** and **level3code**.** **<br />
                                <br />
                                Maximum 32 characters for each level.<br />
                                <br />
                                **NOTE**: The level codes for the list item are used to uniquely identify the list item. Once a list item has been created, the level codes cannot be updated. Refer to <a href="/node/370#changecode">Changing a List Item Level Code</a> for more information.</td>
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
POST /api/expense/list/v1.0/list/I8pq1l$rdSmdrEW23deOjPjyr4Wso0Wq$a/batch?type=delete HTTPS 1.1
Host: www.concursolutions.com
Authorization: OAuth {access token}
...
<list-item-batch <span class="xml-attribute">xmlns=<span class="xml-value">&quot;<span class="xml-value">http://www.concursolutions.com/api/list/2010/02<span class="xml-value">&quot;>
    <list-item>
        <level1code>BU</level1code>
    </list-item>
    <list-item>
        <level1code>WH</level1code>
    </list-item>
</list-item-batch>
</pre>
## 
    Post List Item Deletion Response
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
                <a href="https://developer.concur.com/node/205">HTTP Status Codes</a>
                <a href="https://developer.concur.com/node/370#responses">List Item Error Codes</a>
            </td>
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
                This request will return a **list-item-batch-result** parent element with the following child elements:<br />
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
                                records-succeeded</td>
                            <td valign="top">
                                The number of records processed that were successfully added.</td>
                        </tr>
                        <tr>
                            <td valign="top">
                                records-failed</td>
                            <td valign="top">
                                The number of records processed that were not successfully added.</td>
                        </tr>
                        <tr>
                            <td valign="top">
                                errors</td>
                            <td valign="top">
                                This will contain an **error** parent element for each record failure. The **error** element will contain the following child elements:<br />
                                <br />
                                <table border="1" bordercolor="#cccccc" cellpadding="3" cellspacing="0">
                                    <tbody>
                                        <tr>
                                            <td width="20%">
                                                code</td>
                                            <td width="70%">
                                                The code associated with the error. Refer to <a href="https://developer.concur.com/node/370#responses">Responses and Errors</a> for the full list of possible error codes.</td>
                                        </tr>
                                        <tr>
                                            <td>
                                                list-item-code</td>
                                            <td>
                                                The level code of the record that failed.</td>
                                        </tr>
                                        <tr>
                                            <td>
                                                message</td>
                                            <td>
                                                The error message.</td>
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
200 OK
Content-Type: application/xml
<list-item-batch-result <span class="xml-attribute">xmlns=<span class="xml-value">&quot;<span class="xml-value">http://www.concursolutions.com/api/expense/list/2010/02<span class="xml-value">&quot; <span class="xml-attribute">xmlns:i=<span class="xml-value">&quot;<span class="xml-value">http://www.w3.org/2001/XMLSchema-instance<span class="xml-value">&quot;>
    <records-succeeded>2</records-succeeded>
    <records-failed>0</records-failed>
</list-item-batch-result>
</pre>
<br />
