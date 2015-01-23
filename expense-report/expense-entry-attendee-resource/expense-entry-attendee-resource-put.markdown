
        <div id="main" class="container">
            <div>
                            </div>
            <div class="row">
                <div class="span12">
<div class="breadcrumbs"><a href="/">Home</a>Expense Entry Attendee Resource: PUT </div>
                </div>
            </div>

            <div id="content-wrapper">
<!-- <div class="row"> -->
                <div id="content" class="span9">
            # Expense Entry Attendee Resource: PUT 
                    <div class="section">
                    <div id="node-588" class="node clear-block">


    
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
.STRING_LITERAL {color: #ce7b00}</style>This resource supports the following PUT actions:

* 
        <a href="#newlistitem">Put Expense Entry Attendees</a>

## 
    <a id="newlistitem" name="newlistitem"></a>Put Expense Entry Attendees Request
<table border="1" bordercolor="#DBDBDB" cellpadding="3" cellspacing="0" width="100% ">
<tbody>
<tr class="GrayTableHead">
<td colspan="2">
                Description</td>
</tr>
<tr>
<td colspan="2">
This allows the developer to specify which existing attendees are associated to the specified entry. It also gives the developer the option to provide the values for the Entry-Attendee association. The list of attendees in the request will replace any existing associated attendees, so the developer must include all attendees in the request. This function cannot be used to create new attendees.
</td>
</tr>
<tr class="GrayTableHead">
<td colspan="2">
                Supported Content Types</td>
</tr>
<tr>
<td colspan="2">

* 
                        application/json
* 
                        application/xml

</td>
</tr>
<tr class="GrayTableHead">
<td colspan="2">
                Query Parameters - Required</td>
</tr>
<tr>
<td colspan="2">

* 
                        **{<em>reportId</em>}**<br />
                        The unique identifier for the expense report. This value is returned in the **ReportID** element by the <a href="https://developer.concur.com/node/487#reportdetails">Get Report Details</a> function.
* 
                        **{<em>entryId</em>}/attendees**<br />
                        The unique identifier for the expense entry and the Attendees keyword. This value is returned in the **ReportEntryID** element by the <a href="https://developer.concur.com/node/487#reportdetails">Get Report Details</a> function.

Example:<br />
                    https://www.concursolutions.com/api/expense/expensereport/v2.0/report/<em>{reportId}</em>/entry/<em>{entryId}</em>/attendees
</td>
</tr>
<tr class="GrayTableHead">
<td colspan="2">
                Query Parameters - Optional</td>
</tr>
<tr>
<td colspan="2">
None
</td>
</tr>
<tr class="GrayTableHead">
<td>
                Request Headers - Required</td>
<td>
                Request Headers - Optional</td>
</tr>
<tr>
<td width="50%">
                Authorization header with OAuth token for valid Concur user. The OAuth Consumer must have one of the following roles in Expense:
**Expense User**: This role allows the user to modify their own reports.<br />
                    **Web Services Administrator (Professional/Premium)**: This role allows the user to modify reports for all users.<br />
                    **Can Administer (Standard/Sandbox)**: This role allows the user to modify reports for all users
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
XML: The request will contain an **EntryAttendees** parent element with an **Attendee** child element for each attendee associated to the entry.
JSON: The request string will contain an object for each attendee associated to the entry.
The request must include <em>all </em>attendees associated to the entry. To detach a previously attached attendee, use a Put request excluding the attendee. The function always associates <em>only</em> the attendees specified in the Put. To not modify the element or name/value pair value, provide a nill (XML) or null (JSON) value, or use the same value as you received in the <a href="https://developer.concur.com/node/586">Get Expense Entry Attendees</a> response.
The **Attendee** element (XML) or attendee object (JSON) must contain all of the following elements(XML) or name/value pairs(JSON):
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
                                The unique identifier for the attendee. There must be a value provided. This value must match an active attendee.</td>
</tr>
<tr>
<td valign="top">
                                Amount</td>
<td valign="top">
                                The portion of the Entry Transaction Amount assigned to this attendee. This is an amount in the Transaction Currency for the expense entry. It may be used only when Concur Expense is configured to allow employees to change the amount. Refer to the client's Attendee Configuration for details.</td>
</tr>
<tr>
<td valign="top">
                                AssociatedAttendeeCount</td>
<td valign="top">
                                The count of attendees associated to this attendee. This is a Natural Number. It may be used only when Concur Expense is configured to allow employee to change the count associated with the attendee. Refer to the client's Attendee Configuration for details.</td>
</tr>
<tr>
<td valign="top">
                                EntryAttendeeCustom1 through EntryAttendeeCustom5</td>
<td valign="top">
                                The value for Entry-Attendee custom fields 1-5. It may be used only when the attendee form for the attendee's attendee type is configured to include this custom field. Refer to the client's Attendee Configuration for details.</td>
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
PUT https://www.concursolutions.com/api/expense/expensereport/v2.0/report/9d8ea1kole$sis293mn38dh/entry/8sle90wikl3h$halwnk$lakdjw83/attendees HHTP/1.1
Authorization: OAuth {access token}
...

<EntryAttendees <span class="xml-attribute">xmlns=<span class="xml-value">&quot;<span class="xml-value">http://www.concursolutions.com/api/expense/expensereport/2012/07<span class="xml-value">&quot; <span class="xml-attribute">xmlns:i=<span class="xml-value">&quot;<span class="xml-value">http://www.w3.org/2001/XMLSchema-instance<span class="xml-value">&quot;>
    <Attendee>
        <Amount>2422.00000000</Amount>
        <AssociatedAttendeeCount>1</AssociatedAttendeeCount>
        <AttendeeID>nFaAj0ncBso0sBd8ejqrxLHz1FfmhJ69b</AttendeeID>
        <EntryAttendeeCustom1>fg6rt</EntryAttendeeCustom1>
        <EntryAttendeeCustom2>9808</EntryAttendeeCustom2>
        <EntryAttendeeCustom3>64564drd</EntryAttendeeCustom3>
        <EntryAttendeeCustom4>352dsxcvs</EntryAttendeeCustom4>
        <EntryAttendeeCustom5 <span class="xml-attribute">i:nil=<span class="xml-value">&quot;true&quot;/>
    </Attendee>
</EntryAttendees>
</pre>####
    JSON Example Request
<pre class="overflow_box">
PUT https:<span class="LINE_COMMENT">//<span class="LINE_COMMENT">www<span class="LINE_COMMENT">.<span class="LINE_COMMENT">concursolutions<span class="LINE_COMMENT">.<span class="LINE_COMMENT">com<span class="LINE_COMMENT">/<span class="LINE_COMMENT">api<span class="LINE_COMMENT">/<span class="LINE_COMMENT">expense<span class="LINE_COMMENT">/<span class="LINE_COMMENT">expensereport<span class="LINE_COMMENT">/<span class="LINE_COMMENT">v2<span class="LINE_COMMENT">.<span class="LINE_COMMENT">0/<span class="LINE_COMMENT">report<span class="LINE_COMMENT">/9<span class="LINE_COMMENT">d8ea1kole$sis293mn38dh<span class="LINE_COMMENT">/<span class="LINE_COMMENT">entry<span class="LINE_COMMENT">/8<span class="LINE_COMMENT">sle90wikl3h$halwnk$lakdjw83<span class="LINE_COMMENT">/<span class="LINE_COMMENT">attendees <span class="LINE_COMMENT">HHTP<span class="LINE_COMMENT">/1<span class="LINE_COMMENT">.<span class="LINE_COMMENT">1
Authorization: OAuth {access token}
...

    [

    {<span class="STRING_LITERAL">&quot;<span class="STRING_LITERAL">AttendeeID<span class="STRING_LITERAL">&quot;:<span class="STRING_LITERAL">&quot;<span class="STRING_LITERAL">nFaAj0ncBs$puDs5XxZfOc6L5go8EJIueY<span class="STRING_LITERAL">&quot;,<span class="STRING_LITERAL">&quot;<span class="STRING_LITERAL">Amount<span class="STRING_LITERAL">&quot;:<span class="STRING_LITERAL">&quot;<span class="STRING_LITERAL">807.33000000<span class="STRING_LITERAL">&quot;,<span class="STRING_LITERAL">&quot;<span class="STRING_LITERAL">AttendeeCount<span class="STRING_LITERAL">&quot;:<span class="STRING_LITERAL">&quot;<span class="STRING_LITERAL">0<span class="STRING_LITERAL">&quot;,<span class="STRING_LITERAL">&quot;<span class="STRING_LITERAL">Custom1<span class="STRING_LITERAL">&quot;:<span class="STRING_LITERAL">&quot;<span class="STRING_LITERAL">dfg<span class="STRING_LITERAL">&quot;,<span class="STRING_LITERAL">&quot;<span class="STRING_LITERAL">Custom2<span class="STRING_LITERAL">&quot;:<span class="STRING_LITERAL">&quot;<span class="STRING_LITERAL">7686<span class="STRING_LITERAL">&quot;,<span class="STRING_LITERAL">&quot;<span class="STRING_LITERAL">Custom3<span class="STRING_LITERAL">&quot;:<span class="STRING_LITERAL">&quot;<span class="STRING_LITERAL">89080990-90-5464<span class="STRING_LITERAL">&quot;,<span class="STRING_LITERAL">&quot;<span class="STRING_LITERAL">Custom4<span class="STRING_LITERAL">&quot;:<span class="STRING_LITERAL">&quot;<span class="STRING_LITERAL">56sdsd sf<span class="STRING_LITERAL">&quot;,<span class="STRING_LITERAL">&quot;<span class="STRING_LITERAL">Custom5<span class="STRING_LITERAL">&quot;:<span class="keyword">null} 
    ,

    {<span class="STRING_LITERAL">&quot;<span class="STRING_LITERAL">AttendeeID<span class="STRING_LITERAL">&quot;:<span class="STRING_LITERAL">&quot;<span class="STRING_LITERAL">nFaAj0ncBso0sBd8ejqrxLHz1FfmhJ69b<span class="STRING_LITERAL">&quot;,<span class="STRING_LITERAL">&quot;<span class="STRING_LITERAL">Amount<span class="STRING_LITERAL">&quot;:<span class="STRING_LITERAL">&quot;<span class="STRING_LITERAL">707.33000000<span class="STRING_LITERAL">&quot;,<span class="STRING_LITERAL">&quot;<span class="STRING_LITERAL">AttendeeCount<span class="STRING_LITERAL">&quot;:<span class="STRING_LITERAL">&quot;<span class="STRING_LITERAL">0<span class="STRING_LITERAL">&quot;,<span class="STRING_LITERAL">&quot;<span class="STRING_LITERAL">Custom1<span class="STRING_LITERAL">&quot;:<span class="STRING_LITERAL">&quot;<span class="STRING_LITERAL">fg6rt<span class="STRING_LITERAL">&quot;,<span class="STRING_LITERAL">&quot;<span class="STRING_LITERAL">Custom2<span class="STRING_LITERAL">&quot;:<span class="STRING_LITERAL">&quot;<span class="STRING_LITERAL">9808<span class="STRING_LITERAL">&quot;,<span class="STRING_LITERAL">&quot;<span class="STRING_LITERAL">Custom3<span class="STRING_LITERAL">&quot;:<span class="STRING_LITERAL">&quot;<span class="STRING_LITERAL">64564drd<span class="STRING_LITERAL">&quot;,<span class="STRING_LITERAL">&quot;<span class="STRING_LITERAL">Cust om4<span class="STRING_LITERAL">&quot;:<span class="STRING_LITERAL">&quot;<span class="STRING_LITERAL">352dsxcvs<span class="STRING_LITERAL">&quot;,<span class="STRING_LITERAL">&quot;<span class="STRING_LITERAL">Custom5<span class="STRING_LITERAL">&quot;:<span class="keyword">null} 
]
</pre>## 
    Put Expense Entry Attendees Response
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
                The response will include an HTTP code</td>
</tr>
</tbody>
</table>
####
    Example of Successful Response
<pre class="overflow_box">
200 OK
</pre>
