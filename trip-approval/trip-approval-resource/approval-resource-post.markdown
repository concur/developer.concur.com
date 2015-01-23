
        <div id="main" class="container">
            <div>
                            </div>
            <div class="row">
                <div class="span12">
<div class="breadcrumbs"><a href="/">Home</a>Approval Resource: POST</div>
                </div>
            </div>

            <div id="content-wrapper">
<!-- <div class="row"> -->
                <div id="content" class="span9">
            # Approval Resource: POST
                    <div class="section">
                    <div id="node-399" class="node clear-block">


    
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
        <a href="#newlistitem">Post Trip Approval</a>

## 
    <a id="newlistitem" name="newlistitem"></a>Post Trip Approval Request
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
                Updates the specified trip as approved or rejected by the supplied approver. Can supply either the ItinLocator or the RecordLocator value.</td>
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
                Authorization header with OAuth token for valid Concur trip approver.</td>
            <td valign="top" width="50%">
                None</td>
        </tr>
        <tr class="GrayTableHead">
            <td colspan="2">
                Content Body</td>
        </tr>
        <tr>
            <td colspan="2">
                The request will contain a **TripApprovalRQ** parent element with a TransactionId attribute. The TransactionId value is used to identify request and response pairs, and can contain any alphanumeric string that does not contain special characters. The **TripApprovalRQ** element contains the following child elements:<br />
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
                                Version</td>
                            <td valign="top">
                                Y</td>
                            <td valign="top">
                                The version of the web service. Currently 1.0.</td>
                        </tr>
                        <tr>
                            <td class="codeexample" valign="top">
                                ItinLocator</td>
                            <td valign="top">
                                N</td>
                            <td valign="top">
                                The Itinerary Services Record Locator (also known as Itin Locator or Trip Locator). NOT the GDS record locator. If value of ItinLocator is unknown, RecordLocator element should be passed instead.</td>
                        </tr>
                        <tr>
                            <td class="codeexample" valign="top">
                                RecordLocator</td>
                            <td valign="top">
                                Y, if the ItinLocator is not sent</td>
                            <td valign="top">
                                The GDS record locator. Should be passed only if the ItinLocator is unknown.</td>
                        </tr>
                        <tr>
                            <td class="codeexample" valign="top">
                                ApproverLogin</td>
                            <td valign="top">
                                Y</td>
                            <td valign="top">
                                The Travel approver's login ID.</td>
                        </tr>
                        <tr>
                            <td class="codeexample" valign="top">
                                Action</td>
                            <td valign="top">
                                Y</td>
                            <td valign="top">
                                The workflow action to take. Supported values are approve, reject.</td>
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
POST /api/tws/v1.0/TripApproval/DoApproval HTTPS 1.1
Host: www.concursolutions.com
Authorization: OAuth {access token}
...
    <TripApprovalRQ <span class="xml-attribute">TransactionId=<span class="xml-value">&quot;1cc6ea2d-c711-409e-bb51-63b2bdd485fc&quot;>
        <Version>1.0</Version>
        <ItinLocator>CQ-BB8-16JED-3ZW</ItinLocator>
        <ApproverLogin>cm@example.com</ApproverLogin>
        <Action>approve</Action>
    </TripApprovalRQ>
    </pre>
## 
    Post Trip Approval Response
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
                <a href="https://developer.concur.com/node/397#responses">Error Codes</a>
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
                This request will return a **TripApprovalRS** parent element with a matching TransactionId attribute. The **TripApprovalRS** element will contain the following child elements:<br />
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
                                Version</td>
                            <td valign="top">
                                The version of the web service. Currently 1.0.</td>
                        </tr>
                        <tr>
                            <td valign="top">
                                Status</td>
                            <td valign="top">
                                The status of the trip approval. Returns either success or failure.</td>
                        </tr>
                        <tr>
                            <td valign="top">
                                Error</td>
                            <td valign="top">
                                This element appears only when the approval failed. It contains a Code attribute that provides the error code, and a value that contains the error message. Refer to the <a href="https://developer.concur.com/node/397#responses">Error Code</a> table.</td>
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
    <TripApprovalRS <span class="xml-attribute">TransactionId=<span class="xml-value">&quot;1cc6ea2d-c711-409e-bb51-63b2bdd485fc&quot;>
        <Version>1.0</Version>
        <Status>success</Status>
    </TripApprovalRS>
    </pre>
####
    XML Example Response with Error
<pre class="overflow_box">
200 OK
Content-Type: application/xml

    <TripApprovalRS <span class="xml-attribute">TransactionId=<span class="xml-value">&quot;1cc6ea2d-c711-409e-bb51-63b2bdd485fc&quot;>
        <Version>1.0</Version>
        <Status>failure</Status>
        <Error <span class="xml-attribute">Code=<span class="xml-value">&quot;506&quot;>No tripId found for this ItinLocator or RecordLocator.</Error>
    </TripApprovalRS>

</pre>
<br />
