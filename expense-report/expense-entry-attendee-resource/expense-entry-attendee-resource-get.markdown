
        <div id="main" class="container">
            <div>
                            </div>
            <div class="row">
                <div class="span12">
<div class="breadcrumbs"><a href="/">Home</a>Expense Entry Attendee Resource: GET </div>
                </div>
            </div>

            <div id="content-wrapper">
<!-- <div class="row"> -->
                <div id="content" class="span9">
            # Expense Entry Attendee Resource: GET 
                    <div class="section">
                    <div id="node-586" class="node clear-block">


    
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
.STRING_LITERAL {color: #ce7b00}</style>This resource supports the following GET actions:

* 
        <a href="#listofattendees">Get Expense EntryAttendees </a>

## 
    <a id="listofattendees" name="listofattendees"></a>Get Expense Entry Attendees Request
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
                Retrieves the expense entry attendees for the specified expense entry. This function requires the v2.0 expense entry attendee resource.</td>
<td>

* 
                        application/json
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
                        **{<em>reportId</em>}**<br />
                        The unique identifier for the expense report. This value is returned in the **ReportID** element by the <a href="https://developer.concur.com/node/487#reportdetails">Get Report Details</a> function.
* 
                        **{<em>entryId</em>}/attendees**<br />
                        The unique identifier for the expense entry and the Attendees keyword. This value is returned in the **ReportEntryID** element by the <a href="https://developer.concur.com/node/487#reportdetails">Get Report Details</a> function.

Example:<br />
                    https://www.concursolutions.com/api/expense/expensereport/v2.0/report/<em>{reportId}</em>/entry<em>{entryId}</em>/attendees
</td>
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
GET https://www.concursolutions.com/api/expense/expensereport/v2.0/report/nxxKgLlnROz3zHJBCRksaas23dsfs/entry/n7We3qWw99u1KoWTMaLhSC$pXBYzQ1UDhn/attendees HTTP/1.1
Authorization: OAuth {access token}
...
</pre>####
    JSON Example Request
<pre class="overflow_box">
GET https:<span class="LINE_COMMENT">//<span class="LINE_COMMENT">www<span class="LINE_COMMENT">.<span class="LINE_COMMENT">concursolutions<span class="LINE_COMMENT">.<span class="LINE_COMMENT">com<span class="LINE_COMMENT">/<span class="LINE_COMMENT">api<span class="LINE_COMMENT">/<span class="LINE_COMMENT">expense<span class="LINE_COMMENT">/<span class="LINE_COMMENT">expensereport<span class="LINE_COMMENT">/<span class="LINE_COMMENT">v2<span class="LINE_COMMENT">.<span class="LINE_COMMENT">0/<span class="LINE_COMMENT">report<span class="LINE_COMMENT">/<span class="LINE_COMMENT">nxxKgLlnROz3zHJBCRksaas23dsfs<span class="LINE_COMMENT">/<span class="LINE_COMMENT">entry<span class="LINE_COMMENT">/<span class="LINE_COMMENT">n7We3qWw99u1KoWTMaLhSC$pXBYzQ1UDhn<span class="LINE_COMMENT">/<span class="LINE_COMMENT">Attendees <span class="LINE_COMMENT">HTTP<span class="LINE_COMMENT">/1<span class="LINE_COMMENT">.<span class="LINE_COMMENT">1
Authorization: OAuth {access token}
...
</pre>## 
    Get Expense Entry Attendees Response
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
                        application/json
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
                This request will return an **Attendees** parent element with an **Attendee** child element for each attendee. The **Attendee** element will have the following child elements:
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
                                AttendeeID</td>
<td valign="top">
                                The unique identifier for the attendee.</td>
</tr>
<tr>
<td valign="top">
                                Amount</td>
<td valign="top">
                                The portion of the Entry Transaction Amount assigned to this attendee.</td>
</tr>
<tr>
<td valign="top">
                                AssociatedAttendeeCount</td>
<td valign="top">
                                The count of attendees associated to this attendee. A count greater than 1 means there are unnamed attendees associated with this attendee.</td>
</tr>
<tr>
<td valign="top">
                                EntryAttendeeCustom1 through EntryAttendeeCustom5</td>
<td valign="top">
                                The value for Entry-Attendee custom fields 1-5. Varies based on configuration.</td>
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

<EntryAttendees <span class="xml-attribute">xmlns=<span class="xml-value">&quot;<span class="xml-value">http://www.concursolutions.com/api/expense/expensereport/2012/07<span class="xml-value">&quot; <span class="xml-attribute">xmlns:i=<span class="xml-value">&quot;<span class="xml-value">http://www.w3.org/2001/XMLSchema-instance<span class="xml-value">&quot;>
    <Attendee>
        <Amount>2422.00000000</Amount>
        <AssociatedAttendeeCount>1</AssociatedAttendeeCount>
        <AttendeeID>nFaAj0ncBso0sBd8ejqrxLHz1FfmhJ69b</AttendeeID>
        <EntryAttendeeCustom1>Medical</EntryAttendeeCustom1>
        <EntryAttendeeCustom2>North America</EntryAttendeeCustom2>
        <EntryAttendeeCustom3>Canada</EntryAttendeeCustom3>
        <EntryAttendeeCustom4>Vancouver</EntryAttendeeCustom4>
        <EntryAttendeeCustom5 <span class="xml-attribute">i:nil=<span class="xml-value">&quot;true&quot;/>
    </Attendee>
</EntryAttendees>
</pre>####
    JSON Example of Successful Response
<pre class="overflow_box">
200 OK
Content-Type: application/json

   [

    {<span class="STRING_LITERAL">&quot;<span class="STRING_LITERAL">AttendeeID<span class="STRING_LITERAL">&quot;:<span class="STRING_LITERAL">&quot;<span class="STRING_LITERAL">nFaAj0ncBs$puDs5XxZfOc6L5go8EJIueY<span class="STRING_LITERAL">&quot;,<span class="STRING_LITERAL">&quot;<span class="STRING_LITERAL">Amount<span class="STRING_LITERAL">&quot;:<span class="STRING_LITERAL">&quot;<span class="STRING_LITERAL">807.33000000<span class="STRING_LITERAL">&quot;,<span class="STRING_LITERAL">&quot;<span class="STRING_LITERAL">AttendeeCount<span class="STRING_LITERAL">&quot;:<span class="STRING_LITERAL">&quot;<span class="STRING_LITERAL">0<span class="STRING_LITERAL">&quot;,<span class="STRING_LITERAL">&quot;<span class="STRING_LITERAL">Custom1<span class="STRING_LITERAL">&quot;:<span class="STRING_LITERAL">&quot;<span class="STRING_LITERAL">Medical<span class="STRING_LITERAL">&quot;,<span class="STRING_LITERAL">&quot;<span class="STRING_LITERAL">Custom2<span class="STRING_LITERAL">&quot;:<span class="STRING_LITERAL">&quot;<span class="STRING_LITERAL">North America<span class="STRING_LITERAL">&quot;,<span class="STRING_LITERAL">&quot;<span class="STRING_LITERAL">Custom3<span class="STRING_LITERAL">&quot;:<span class="STRING_LITERAL">&quot;<span class="STRING_LITERAL">Canada<span class="STRING_LITERAL">&quot;,<span class="STRING_LITERAL">&quot;<span class="STRING_LITERAL">Custom4<span class="STRING_LITERAL">&quot;:<span class="STRING_LITERAL">&quot;<span class="STRING_LITERAL">Vancouver<span class="STRING_LITERAL">&quot;,<span class="STRING_LITERAL">&quot;<span class="STRING_LITERAL">Custom5<span class="STRING_LITERAL">&quot;:<span class="keyword">null} 
    ,

    {<span class="STRING_LITERAL">&quot;<span class="STRING_LITERAL">AttendeeID<span class="STRING_LITERAL">&quot;:<span class="STRING_LITERAL">&quot;<span class="STRING_LITERAL">nFaAj0ncBso0sBd8ejqrxLHz1FfmhJ69b<span class="STRING_LITERAL">&quot;,<span class="STRING_LITERAL">&quot;<span class="STRING_LITERAL">Amount<span class="STRING_LITERAL">&quot;:<span class="STRING_LITERAL">&quot;<span class="STRING_LITERAL">707.33000000<span class="STRING_LITERAL">&quot;,<span class="STRING_LITERAL">&quot;<span class="STRING_LITERAL">AttendeeCount<span class="STRING_LITERAL">&quot;:<span class="STRING_LITERAL">&quot;<span class="STRING_LITERAL">0<span class="STRING_LITERAL">&quot;,<span class="STRING_LITERAL">&quot;<span class="STRING_LITERAL">Custom1<span class="STRING_LITERAL">&quot;:<span class="STRING_LITERAL">&quot;<span class="STRING_LITERAL">Medical<span class="STRING_LITERAL">&quot;,<span class="STRING_LITERAL">&quot;<span class="STRING_LITERAL">Custom2<span class="STRING_LITERAL">&quot;:<span class="STRING_LITERAL">&quot;<span class="STRING_LITERAL">North America<span class="STRING_LITERAL">&quot;,<span class="STRING_LITERAL">&quot;<span class="STRING_LITERAL">Custom3<span class="STRING_LITERAL">&quot;:<span class="STRING_LITERAL">&quot;<span class="STRING_LITERAL">Canada<span class="STRING_LITERAL">&quot;,<span class="STRING_LITERAL">&quot;<span class="STRING_LITERAL">Custom4<span class="STRING_LITERAL">&quot;:<span class="STRING_LITERAL">&quot;<span class="STRING_LITERAL">Vancouver<span class="STRING_LITERAL">&quot;,<span class="STRING_LITERAL">&quot;<span class="STRING_LITERAL">Custom5<span class="STRING_LITERAL">&quot;:<span class="keyword">null} 
] 
</pre>
