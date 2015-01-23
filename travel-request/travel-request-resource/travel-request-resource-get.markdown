
        <div id="main" class="container">
            <div>
                            </div>
            <div class="row">
                <div class="span12">
<div class="breadcrumbs"><a href="/">Home</a>Travel Request Resource: GET</div>
                </div>
            </div>

            <div id="content-wrapper">
<!-- <div class="row"> -->
                <div id="content" class="span9">
            # Travel Request Resource: GET
                    <div class="section">
                    <div id="node-518" class="node clear-block">


    
    <div class="content clear-block">
                This resource supports the following GET actions:
**NOTE**: The documentation for the version 3.0 Requests resource can be found <a href="https://www.concursolutions.com/api/docs/index.html#!/Requests">here</a>.

* 
        <a href="#listofrequests">Get List of Travel Requests </a>
* 
        <a href="#requestdetails">Get Travel Request Details</a>

## 
    <a id="listofrequests" name="listofrequests"></a>Get List of Travel Requests Request
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
                Retrieves a list of up to 1000 travel requests. The request can include one or multiple search terms.</td>
<td>

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
                        **requestslist**<br />
                        The requestslist keyword.

Example:<br />
                    <a href="https://www.concursolutions.com/api/travelrequest/v1.0/requestslist/" title="https://www.concursolutions.com/api/travelrequest/v1.0/requestslist/">https://www.concursolutions.com/api/travelrequest/v1.0/requestslist/</a>
</td>
</tr>
<tr class="GrayTableHead">
<td colspan="2">
                Query Parameters - Optional</td>
</tr>
<tr>
<td colspan="2">
The request can include any number of the following query parameters to refine the search.

* 
                        <a href="#status">**status={<em>status</em>}**</a>
* 
                        **<a href="#loginID">loginid={<em>loginID</em>}</a>**
* 
                        **<a href="#modifiedafter">modifiedafterdate={<em>date</em>}</a>**
* 
                        **<a href="#modifiedbefore">modifiedbeforedate={<em>date</em>}</a>**


Multiple Parameter Example:<br />
                    https://www.concursolutions.com/api/travelrequest/v1.0/requestslist/?status={<em>status</em>}&amp;loginid={<em>loginID</em>}
**<a id="status" name="status"></a>Status**:
The Status search term specifies which travel request or approval status to return. If no Status value is sent, the default Status of Active will be used.
<table border="1" bordercolor="#DBDBDB" cellpadding="3" cellspacing="0" width="90% ">
<tbody>
<tr class="GrayTableHead">
<td valign="top" width="30%">
                                Value</td>
<td valign="top" width="70%">
                                Description</td>
</tr>
<tr>
<td>
                                ACTIVE</td>
<td>
                                Returns all active travel requests.</td>
</tr>
<tr>
<td>
                                UNSUBMITTED</td>
<td>
                                Returns unsubmitted travel requests.</td>
</tr>
<tr>
<td>
                                PENDING</td>
<td>
                                Returns submitted travel requests pending approval.</td>
</tr>
<tr>
<td>
                                VALIDATED</td>
<td>
                                Returns approved travel requests.</td>
</tr>
<tr>
<td>
                                CANCELED</td>
<td>
                                Returns cancelled travel requests.</td>
</tr>
<tr>
<td>
                                CLOSED</td>
<td>
                                Returns closed travel requests.</td>
</tr>
<tr>
<td>
                                SUBMITTED</td>
<td>
                                Returns submitted travel requests.</td>
</tr>
<tr>
<td>
                                TOAPPROVE</td>
<td>
                                Returns travel requests pending approval. If you use this search term with the Login ID search term, you should supply the approver's login ID.</td>
</tr>
<tr>
<td>
                                APPROVED</td>
<td>
                                Returns approved travel requests. If you use this search term with the Login ID search term, you should supply the approver's login ID.</td>
</tr>
</tbody>
</table>
Example:<br />
                    https://www.concursolutions.com/api/travelrequest/v1.0/requestslist/?status={<em>status</em>}
**<a id="loginID" name="loginID"></a>Login ID **:
The LoginID is the Concur login for a travel request owner that is not the OAuth consumer. This limits the response to travel requests owned by the specified user. If you use this with the TOAPPROVE or APPROVED Status search term, you should send the travel request approver's login ID.
Example:<br />
                    https://www.concursolutions.com/api/travelrequest/v1.0/requestslist/?loginid={<em>loginID</em>}
**<a id="modifiedafter" name="modifiedafter"></a>Modified After Date**:
This returns travel requests in which the associated dependents (header, entries, segments, allocations, attendees, comments ) were modified after the specified date and time. This search term can be used along with other search terms to narrow the results. The date and time (if desired) should be in UTC. The format is: YYYY-MM-DDThh:mm:ss
Examples:<br />
                    https://www.concursolutions.com/api/travelrequest/v1.0/requestslist/?modifiedafterdate={<em>date</em>}<br />
                    <a href="https://www.concursolutions.com/api/travelrequest/v1.0/requestslist/?modifiedafterdate=2012-01-01T00:00:00" title="https://www.concursolutions.com/api/travelrequest/v1.0/requestslist/?modifiedafterdate=2012-01-01T00:00:00">https://www.concursolutions.com/api/travelrequest/v1.0/requestslist/?modifiedafterdate=2012-01-01T00:00:00</a>
**<a id="modifiedbefore" name="modifiedbefore"></a>Modified Before Date**:
This returns travel requests in which the associated dependents (header, entries, segments, allocations, attendees, comments ) were modified before the specified date and time.This search term can be used along with other search terms to narrow the results. The date and time (if desired) should be in UTC. The format is: YYYY-MM-DDThh:mm:ss
Examples:<br />
                    https://www.concursolutions.com/api/travelrequest/v1.0/requestslist/?modifiedbeforedate={<em>date</em>}<br />
                    <a href="https://www.concursolutions.com//api/travelrequest/v1.0/requestslist/?modifiedbeforedate=2012-01-01T00:00:00" title="https://www.concursolutions.com//api/travelrequest/v1.0/requestslist/?modifiedbeforedate=2012-01-01T00:00:00">https://www.concursolutions.com//api/travelrequest/v1.0/requestslist/?modifiedbeforedate=2012-01-01T00:00:00</a>
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
                Authorization header with OAuth token for valid Concur user.
                The OAuth Consumer must have the following role: Web Services Administrator for Professional/Premium.</td>
<td valign="top" width="50%">
                None</td>
</tr>
</tbody>
</table>
####
    XML Example Request
<pre class="overflow_box">
GET api/travelrequest/v1.0/requestslist/?status=SUBMITTED  HTTPS 1.1
Host: <a href="http://www.concursolutions.com" title="www.concursolutions.com">www.concursolutions.com</a>
Authorization: OAuth {access token}
...
</pre>## 
    Get List of Travel Requests Response
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
                This request will return a **RequestsWithCount** parent element with the **RequestsList** and **TotalCount** child elements. The **RequestsList** parent element contains a **RequestSummary** child element for each travel request. The **RequestSummary** elements will have the following child elements:
<table border="1" bordercolor="#DBDBDB" cellpadding="3" cellspacing="0" width="100% ">
<tbody>
<tr class="GrayTableHead">
<td valign="top" width="20%">
                                Element</td>
<td valign="top" width="70%">
                                Description</td>
</tr>
<tr>
<td>
                                RequestID</td>
<td>
                                The unique identifier for the travel request, which appears in the Concur UI.</td>
</tr>
<tr>
<td>
                                RequestName</td>
<td>
                                The name of the travel request.</td>
</tr>
<tr>
<td>
                                Purpose</td>
<td>
                                The purpose of the travel request.</td>
</tr>
<tr>
<td>
                                RequestCurrency</td>
<td>
                                The <a href="http://en.wikipedia.org/wiki/ISO_4217">3-letter ISO 4217 currency code</a> for the travel request currency.</td>
</tr>
<tr>
<td>
                                RequestTotal</td>
<td>
                                The total amount of the travel request.</td>
</tr>
<tr>
<td>
                                RequestDate</td>
<td>
                                The create date of the travel request.</td>
</tr>
<tr>
<td>
                                StartDate</td>
<td>
                                Start date of the travel request.</td>
</tr>
<tr>
<td>
                                EndDate</td>
<td>
                                End date of the travel request.</td>
</tr>
<tr>
<td>
                                LastComment</td>
<td>
                                The text of the most recent comment on the travel request.</td>
</tr>
<tr>
<td>
                                RequestDetailsURL</td>
<td>
                                The URL to access the travel request details.</td>
</tr>
<tr>
<td>
                                RequestUserLoginID</td>
<td>
                                The Login ID of the user this travel request belongs to.</td>
</tr>
<tr>
<td>
                                ApproverLoginID</td>
<td>
                                The Login ID of the user's travel request approver.</td>
</tr>
<tr>
<td>
                                EmployeeName</td>
<td>
                                The name of the travel request owner.</td>
</tr>
<tr>
<td>
                                ApprovalStatus</td>
<td>
                                The travel request's approval status, in the OAuth consumer's language.</td>
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
<span class="ST0"><?<span class="ST0">xml version=&quot;1.0&quot; encoding=&quot;utf-8&quot;?>
<RequestsWithCount <span class="xml-attribute">xmlns=<span class="xml-value">&quot;<span class="xml-value">http://www.concursolutions.com/api/travelrequest/2012/06<span class="xml-value">&quot; <span class="xml-attribute">xmlns:i=<span class="xml-value">&quot;<span class="xml-value">http://www.w3.org/2001/XMLSchema-instance<span class="xml-value">&quot;>
    <RequestsList>
        <RequestSummary>
            <ApprovalStatus>Submitted <span class="ST1">&amp;amp; Pending Approval</ApprovalStatus>
            <ApproverLoginID>patdavis@example.com</ApproverLoginID>
            <RequestCurrency>USD</RequestCurrency>
            <EmployeeName>Chris Miller</EmployeeName>
            <LastComment />
            <Purpose>d</Purpose>
            <RequestDate>2013-03-07T08:25:57</RequestDate>
            <RequestDetailsUrl>https://www.concursolutions.com/api/travelrequest/v1.0/requests/nf0ma53XrNuqmoVSZesQZL99xN1xIg5dX</RequestDetailsUrl>
            <RequestID>APXT</RequestID>
            <RequestName>TVR-2861-2</RequestName>
            <RequestTotal>10.00000000</RequestTotal>
            <RequestUserLoginID>chrismiller@example.com</RequestUserLoginID>
        </RequestSummary>
    </RequestsList>
    <TotalCount>1</TotalCount>
</RequestsWithCount>
</pre>## 
    <a id="requestdetails" name="requestdetails"></a>Get Travel Request Details Request
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
                Retrieves the full set of information for the travel request. Includes the travel request Header, Segment, Entry, Allocation and Cash Advance details.</td>
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
                        **requests/{<em>requestKey</em>}**<br />
                        The requests keyword and the identifier for the desired travel request.

                Example:<br />
                https://www.concursolutions.com/api/travelrequest/v1.0/requests/{<em>requestKey</em>}<br />
                **URI Source**: The URI is provided in the <span class="codeexample">**ObjectURI** element of the <a href="https://developer.concur.com/node/432">Event Notification</a> request.</td>
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
                Authorization header with OAuth token for valid Concur user. The OAuth consumer must have one of the following user roles in Concur: Company Administrator or Web Services Administrator for Professional, or Can Administer for Standard.
                These roles allow the user to manage data for the entire company.</td>
<td valign="top" width="50%">
                None</td>
</tr>
</tbody>
</table>
####
    XML Example Request
<pre class="overflow_box">
GET api/travelrequest/v1.0/requests/nxxKgLlnROz3zHJBCRksaas23dsfs  HTTPS 1.1
Host: <a href="http://www.concursolutions.com" title="www.concursolutions.com">www.concursolutions.com</a>
Authorization: OAuth {access token}
...
</pre>## 
    Get Travel Request Details Response
<table border="1" bordercolor="#DBDBDB" cellpadding="3" cellspacing="0" width="100% ">
<tbody>
<tr>
<td>
                HTTP Responses</td>
<td>
                Supported Content Types</td>
</tr>
<tr>
<td>
<a href="https://developer.concur.com/node/205">HTTP Status Codes</a>
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
                This request will return a <span class="codeexample">**TravelRequestDetails** parent element with the following child elements:
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
                                LoginID</td>
<td valign="top">
                                The Concur Login ID of the travel request owner.</td>
</tr>
<tr>
<td valign="top">
                                RequestID</td>
<td valign="top">
                                The unique key for the travel request.</td>
</tr>
<tr>
<td valign="top">
                                RequestKey</td>
<td valign="top">
                                The encrypted database key for the travel request.</td>
</tr>
<tr>
<td valign="top">
                                RequestName</td>
<td valign="top">
                                The name of the travel request.</td>
</tr>
<tr>
<td valign="top">
                                Purpose</td>
<td valign="top">
                                The information from the Purpose field.</td>
</tr>
<tr>
<td valign="top">
                                CurrencyCode</td>
<td valign="top">
                                The <a href="http://en.wikipedia.org/wiki/ISO_4217">3-letter ISO 4217 currency code</a> for the travel request currency. The travel request currency is defined as the travel request creator's default reimbursement currency.</td>
</tr>
<tr>
<td valign="top">
                                CreationDate</td>
<td valign="top">
                                The date the travel request was created.</td>
</tr>
<tr>
<td valign="top">
                                HasException</td>
<td valign="top">
                                Whether the travel request has exceptions. Format: Y/N</td>
</tr>
<tr>
<td valign="top">
                                EverSentBack</td>
<td valign="top">
                                Whether the travel request has ever been sent back to the employee. Format: Y/N</td>
</tr>
<tr>
<td valign="top">
                                EmployeeName</td>
<td valign="top">
                                The first, middle (or middle initial), and last name of the employee who created the travel request.</td>
</tr>
<tr>
<td valign="top">
                                ApprovalStatusName</td>
<td valign="top">
                                The approval status of the travel request .</td>
</tr>
<tr>
<td valign="top">
                                ApprovalStatusKey</td>
<td valign="top">
                                The approval status key.</td>
</tr>
<tr>
<td valign="top">
                                AuthorizedDate</td>
<td valign="top">
                                The date the travel request was authorized. This element has an attribute named i:nil. If the value for this element is null, the i:nil attribute will be set to true. Format: YYYY-MM-DDThh:mm:ss</td>
</tr>
<tr>
<td valign="top">
                                SubmitDate</td>
<td valign="top">
                                The date the travel request was submitted. Format: YYYY-MM-DDThh:mm:ss</td>
</tr>
<tr>
<td valign="top">
                                LastModifiedDate</td>
<td valign="top">
                                The date the travel request was last modified. Format: YYYY-MM-DDThh:mm:ss</td>
</tr>
<tr>
<td valign="top">
                                SegmentCount</td>
<td valign="top">
                                The number of segments in the travel request.</td>
</tr>
<tr>
<td valign="top">
                                Custom1 through Custom20</td>
<td valign="top">
                                The details from the Custom fields. These may not have data, depending on configuration. If the custom field is a list field, the data will be returned as: (list item short code) list item name. List Field Example: <Custom1>(1234) Project 1234</Custom1></td>
</tr>
<tr>
<td valign="top">
                                TravelRequestPolicyKey</td>
<td valign="top">
                                The unique identifier for the policy that applies to the travel request.</td>
</tr>
<tr>
<td valign="top">
                                ExpensePolicyKey</td>
<td valign="top">
                                The unique identifier of the Expense policy that is related to the travel request policy.</td>
</tr>
<tr>
<td valign="top">
                                RequestTotal</td>
<td valign="top">
                                The total amount of the travel request.</td>
</tr>
<tr>
<td valign="top">
                                TotalApprovedAmount</td>
<td valign="top">
                                The total amount of approved expenses in the travel request.</td>
</tr>
<tr>
<td valign="top">
                                TotalRemainingAmount</td>
<td valign="top">
                                The total amount remaining in the travel request.</td>
</tr>
<tr>
<td valign="top">
                                ApprovalLimitDate</td>
<td valign="top">
                                The date the travel request must be approved by. Appears only when integrated with Concur Travel.</td>
</tr>
<tr>
<td valign="top">
                                AgencyOfficeKey</td>
<td valign="top">
                                The Agency Office key.</td>
</tr>
<tr>
<td valign="top">
                                AgencyOfficeName</td>
<td valign="top">
                                The Agency Office name.</td>
</tr>
<tr>
<td valign="top">
                                StartDate</td>
<td valign="top">
                                The start date for the travel request.</td>
</tr>
<tr>
<td valign="top">
                                EndDate</td>
<td valign="top">
                                The end date for the travel request.</td>
</tr>
<tr>
<td valign="top">
                                StartTime</td>
<td valign="top">
                                The start time for the travel request.</td>
</tr>
<tr>
<td valign="top">
                                EndTime</td>
<td valign="top">
                                The end time for the travel request.</td>
</tr>
<tr>
<td valign="top">
                                ExtensionOf</td>
<td valign="top">
                                The ID of the initial travel request that this travel request is an extension of or adendum to.</td>
</tr>
<tr>
<td valign="top">
                                WorkflowActionURL</td>
<td valign="top">
                                The URL to post a workflow action to the travel request using the <a href="https://developer.concur.com/node/519#requestworkflow">Post Request Workflow Action</a> function.</td>
</tr>
<tr>
<td valign="top">
                                CommentCount</td>
<td valign="top">
                                The number of comments associated with the travel request header.</td>
</tr>
<tr>
<td valign="top">
                                CommentsList</td>
<td valign="top">
                                This parent element has a Count attribute indicating the number of comments that are included in the travel request header. It has a **Comment** child element for each comment. Refer to the <a href="#commentchild">Comment Child Elements</a> table for the full list of child elements.</td>
</tr>
<tr>
<td valign="top">
                                ExceptionCount</td>
<td valign="top">
                                The number of exceptions associated with the travel request header.</td>
</tr>
<tr>
<td valign="top">
                                ExceptionsList</td>
<td valign="top">
                                This parent element has a Count attribute indicating the number of exceptions that are included in the travel request entry. It has an **Exception** child element for each exception. Refer to the <a href="#exceptionchild">Exception Child Elements</a> table for the full list of child elements.</td>
</tr>
<tr>
<td valign="top">
                                EntriesList</td>
<td valign="top">
                                This parent element has a Count attribute indicating the number of travel request entries that are included in the travel request. It has a **RequestEntry** child element for each entry. Refer to the <a href="#requestchild">RequestEntry Child Elements</a> table for the full list of child elements.</td>
</tr>
<tr>
<td valign="top">
                                CashAdvancesList</td>
<td valign="top">
                                This parent element has a Count attribute indicating the number of cash advances that are included in the travel request. It has a **CashAdvance** child element for each cash advance. Refer to the <a href="#cashadv">CashAdvance Child Elements</a> table for the full list of child elements.</td>
</tr>
</tbody>
</table>

<table border="1" bordercolor="#DBDBDB" cellpadding="3" cellspacing="0" width="100% ">
<tbody>
<tr class="GrayTableHead">
<td colspan="2" valign="top">
                                <a id="commentchild" name="commentchild"></a>Comment Child Elements</td>
</tr>
<tr class="GrayTableHead">
<td valign="top" width="23%">
                                Element</td>
<td valign="top" width="68%">
                                Description</td>
</tr>
<tr>
<td valign="top">
                                Comment</td>
<td valign="top">
                                The text of the travel request header comment.</td>
</tr>
<tr>
<td valign="top">
                                FirstName</td>
<td valign="top">
                                The first name of the person who made the comment.</td>
</tr>
<tr>
<td valign="top">
                                LastName</td>
<td valign="top">
                                The last name of the person who made the comment.</td>
</tr>
<tr>
<td valign="top">
                                DateTime</td>
<td valign="top">
                                Time, in GMT, when the user made the comment.</td>
</tr>
</tbody>
</table>

<table border="1" bordercolor="#DBDBDB" cellpadding="3" cellspacing="0" width="100% ">
<tbody>
<tr class="GrayTableHead">
<td colspan="2" valign="top">
                                <a id="exceptionchild" name="exceptionchild"></a>Exception Child Elements</td>
</tr>
<tr class="GrayTableHead">
<td valign="top" width="23%">
                                Element</td>
<td valign="top" width="68%">
                                Description</td>
</tr>
<tr>
<td valign="top">
                                ExceptionCode</td>
<td valign="top">
                                The system exception code defined for the exception. Example: BADCODE</td>
</tr>
<tr>
<td valign="top">
                                ExceptionMessage</td>
<td valign="top">
                                The user-facing message defined for the exception.</td>
</tr>
<tr>
<td valign="top">
                                ExceptionLevel</td>
<td valign="top">
                                The numeric level associated with the exception. Example: 99</td>
</tr>
</tbody>
</table>

<table border="1" bordercolor="#DBDBDB" cellpadding="3" cellspacing="0" width="100% ">
<tbody>
<tr class="GrayTableHead">
<td colspan="2" valign="top">
                                <a id="requestchild" name="requestchild"></a>RequestEntry Child Elements</td>
</tr>
<tr class="GrayTableHead">
<td valign="top" width="23%">
                                Element</td>
<td valign="top" width="68%">
                                Description</td>
</tr>
<tr>
<td valign="top">
                                RequestEntryKey</td>
<td valign="top">
                                The unique identifier for the travel request entry.</td>
</tr>
<tr>
<td valign="top">
                                EntryDescription</td>
<td valign="top">
                                The text from the Description field for the entry.</td>
</tr>
<tr>
<td valign="top">
                                TransactionDate</td>
<td valign="top">
                                The date of the travel request entry.</td>
</tr>
<tr>
<td valign="top">
                                RequestKey</td>
<td valign="top">
                                The unique identifier for the travel request.</td>
</tr>
<tr>
<td valign="top">
                                FormKey</td>
<td valign="top">
                                The unique identifier for the travel request entry form.</td>
</tr>
<tr>
<td valign="top">
                                ExpenseTypeKey</td>
<td valign="top">
                                The unique identifier for the expense type.</td>
</tr>
<tr>
<td valign="top">
                                ExpenseTypeName</td>
<td valign="top">
                                The expense type name.</td>
</tr>
<tr>
<td valign="top">
                                ExchangeRate</td>
<td valign="top">
                                The exchange rate that applies to the entry.</td>
</tr>
<tr>
<td valign="top">
                                ForeignAmount</td>
<td valign="top">
                                The foreign currency amount of the travel request entry.</td>
</tr>
<tr>
<td valign="top">
                                ForeignCurrencyName</td>
<td valign="top">
                                The name of the currency for the foreign amount.</td>
</tr>
<tr>
<td valign="top">
                                PostedAmount</td>
<td valign="top">
                                The posted amount of the travel request entry in the travel request currency.</td>
</tr>
<tr>
<td valign="top">
                                ApprovedAmount</td>
<td valign="top">
                                The approved amount of the travel request entry in the travel request currency.</td>
</tr>
<tr>
<td valign="top">
                                RemainingAmount</td>
<td valign="top">
                                The remaining amount of the travel request entry in the travel request currency.</td>
</tr>
<tr>
<td valign="top">
                                LastModifiedDate</td>
<td valign="top">
                                The date the entry was last modified. Format: YYYY-MM-DDThh:mm:ss</td>
</tr>
<tr>
<td valign="top">
                                OrgUnit1 through OrgUnit6</td>
<td valign="top">
                                The details from the Org Unit custom fields. These may not have data, depending on configuration.</td>
</tr>
<tr>
<td valign="top">
                                Custom1 through Custom40</td>
<td valign="top">
                                The details from the Custom fields. These may not have data, depending on configuration. If the custom field is a list field, the data will be returned as: (list item short code) list item name. List Field Example: <Custom1>(1234) Project 1234</Custom1></td>
</tr>
<tr>
<td valign="top">
                                AllocationsList</td>
<td valign="top">
                                This parent element has an **Allocation** child element for each associated allocation. The **Allocation** element contains the following child elements:
<table border="1" bordercolor="#DBDBDB" cellpadding="3" cellspacing="0" width="100% ">
<tbody>
<tr>
<td valign="top">
                                                Custom1 through Custom20</td>
<td valign="top">
                                                The custom fields associated with the allocation. These may not have data, depending on your configuration. If the custom field is a list field, the data will be returned as: (list item short code) list item name. List Field Example: <Custom1>(1234) Project 1234</Custom1></td>
</tr>
<tr>
<td valign="top">
                                                AllocationKey</td>
<td valign="top">
                                                The unique identifier for the allocation.</td>
</tr>
<tr>
<td valign="top">
                                                Percentage</td>
<td valign="top">
                                                The percentage of the expense that is included in this allocation.</td>
</tr>
</tbody>
</table>
</td>
</tr>
<tr>
<td valign="top">
                                CommentCount</td>
<td valign="top">
                                The number of comments associated with the travel request entry.</td>
</tr>
<tr>
<td valign="top">
                                CommentsList</td>
<td valign="top">
                                This parent element has a Count attribute indicating the number of comments that are included in the travel request entry. It has a **Comment** child element for each comment. Refer to the <a href="#commentchild">Comment Child Elements</a> table for the full list of child elements.</td>
</tr>
<tr>
<td valign="top">
                                ExceptionCount</td>
<td valign="top">
                                The number of exceptions associated with the travel request entry.</td>
</tr>
<tr>
<td valign="top">
                                ExceptionsList</td>
<td valign="top">
                                This parent element has a Count attribute indicating the number of exceptions that are included in the travel request entry. It has an **Exception** child element for each exception. Refer to the <a href="#exceptionchild">Exception Child Elements</a> table for the full list of child elements.</td>
</tr>
<tr>
<td valign="top">
                                SegmentCount</td>
<td valign="top">
                                The number of segments associated with the travel request entry.</td>
</tr>
<tr>
<td valign="top">
                                SegmentsList</td>
<td valign="top">
                                This parent element contains a **Segment** child element for each segment associated with the travel request. Refer to the <a href="#segment">Segment Child Elements</a> table for the full list of child elements.</td>
</tr>
</tbody>
</table>

<table border="1" bordercolor="#DBDBDB" cellpadding="3" cellspacing="0" width="100% ">
<tbody>
<tr class="GrayTableHead">
<td colspan="2" valign="top">
                                <a id="segment" name="segment"></a>Segment Child Elements</td>
</tr>
<tr class="GrayTableHead">
<td valign="top" width="23%">
                                Element</td>
<td valign="top" width="68%">
                                Description</td>
</tr>
<tr>
<td valign="top">
                                SegmentKey</td>
<td valign="top">
                                The encrypted database primary key for the Segment table. The unique identifier for the segment.</td>
</tr>
<tr>
<td valign="top">
                                SegmentType</td>
<td valign="top">
                                The type of itinerary segment. Format: air, car, hotel, rail, dining, event, limo, taxi, parking, other</td>
</tr>
<tr>
<td valign="top">
                                RecordLocator</td>
<td valign="top">
                                Appears only when travel request is integrated with Concur Travel.</td>
</tr>
<tr>
<td valign="top">
                                DepartureDate</td>
<td valign="top">
                                The departure date of the segment.</td>
</tr>
<tr>
<td valign="top">
                                DepartureTime</td>
<td valign="top">
                                The departure time of the segment.</td>
</tr>
<tr>
<td valign="top">
                                ArrivalDate</td>
<td valign="top">
                                The arrival date of the segment.</td>
</tr>
<tr>
<td valign="top">
                                ArrivalTime</td>
<td valign="top">
                                The arrival time of the segment.</td>
</tr>
<tr>
<td valign="top">
                                FromLocationName</td>
<td valign="top">
                                The name of the starting location.</td>
</tr>
<tr>
<td valign="top">
                                FromLocationDetail</td>
<td valign="top">
                                The code of starting location.</td>
</tr>
<tr>
<td valign="top">
                                ToLocationName</td>
<td valign="top">
                                The name of the ending location.</td>
</tr>
<tr>
<td valign="top">
                                ToLocationDetail</td>
<td valign="top">
                                The code of the ending location.</td>
</tr>
<tr>
<td valign="top">
                                FlightNumber</td>
<td valign="top">
                                The flight number for air segments. Appears only when travel request is integrated with Concur Travel.</td>
</tr>
<tr>
<td valign="top">
                                ClassOfServiceCode</td>
<td valign="top">
                                The Class of Service Code from Concur Travel. Appears only when travel request is integrated with Concur Travel.</td>
</tr>
<tr>
<td valign="top">
                                TripLocator</td>
<td valign="top">
                                The unique identifier for the Concur Travel trip associated with this segment. Appears only when travel request is integrated with Concur Travel.</td>
</tr>
<tr>
<td valign="top">
                                SegmentLocator</td>
<td valign="top">
                                The unique identifier for Concur Travel segment associated with this segment. Appears only when travel request is integrated with Concur Travel.</td>
</tr>
<tr>
<td valign="top">
                                ExchangeRate</td>
<td valign="top">
                                The exchange rate that applies to the segment.</td>
</tr>
<tr>
<td valign="top">
                                ForeignAmount</td>
<td valign="top">
                                The foreign currency amount of the segment.</td>
</tr>
<tr>
<td valign="top">
                                ForeignCurrencyName</td>
<td valign="top">
                                The name of the currency for the foreign amount of the segment.</td>
</tr>
<tr>
<td valign="top">
                                PostedAmount</td>
<td valign="top">
                                The posted amount of the segment in the travel request currency.</td>
</tr>
<tr>
<td valign="top">
                                ApprovedAmount</td>
<td valign="top">
                                The approved amount of the segment in the travel request currency.</td>
</tr>
<tr>
<td valign="top">
                                RemainingAmount</td>
<td valign="top">
                                The remaining amount of the segment in the travel request currency.</td>
</tr>
<tr>
<td valign="top">
                                IsAgencyBooked</td>
<td valign="top">
                                Whether the air segment was agency booked. Format: Y/N.</td>
</tr>
<tr>
<td valign="top">
                                IsSelfBooked</td>
<td valign="top">
                                Whether the air segment was self booked. Format: Y/N</td>
</tr>
<tr>
<td valign="top">
                                LastModifiedDate</td>
<td valign="top">
                                The date the segment was last modified. Format: YYYY-MM-DDThh:mm:ss</td>
</tr>
<tr>
<td valign="top">
                                Custom1 through Custom40</td>
<td valign="top">
                                The custom fields associated with the segment. These may not have data, depending on your configuration. If the custom field is a list field, the data will be returned as: (list item short code) list item name. List Field Example: <Custom1>(1234) Project 1234</Custom1></td>
</tr>
<tr>
<td valign="top">
                                CommentCount</td>
<td valign="top">
                                The number of comments associated with the segment.</td>
</tr>
<tr>
<td valign="top">
                                CommentsList</td>
<td valign="top">
                                This parent element has a Count attribute indicating the number of comments that are included in the segment. It has a **Comment** child element for each comment. Refer to the <a href="#commentchild">Comment Child Elements</a> table for the full list of child elements.</td>
</tr>
<tr>
<td valign="top">
                                ExceptionCount</td>
<td valign="top">
                                The number of exceptions associated with the travel request segment.</td>
</tr>
<tr>
<td valign="top">
                                ExceptionsList</td>
<td valign="top">
                                This parent element has a Count attribute indicating the number of exceptions that are included in the travel request segment. It has an **Exception** child element for each exception. Refer to the <a href="#exceptionchild">Exception Child Elements</a> table for the full list of child elements.</td>
</tr>
</tbody>
</table>

<table border="1" bordercolor="#DBDBDB" cellpadding="3" cellspacing="0" width="100% ">
<tbody>
<tr class="GrayTableHead">
<td colspan="2" valign="top">
                                <a id="cashadv" name="cashadv"></a>CashAdvance Child Elements</td>
</tr>
<tr class="GrayTableHead">
<td valign="top">
                                Element</td>
<td valign="top">
                                Description</td>
</tr>
<tr>
<td valign="top">
                                CashAdvanceKey</td>
<td valign="top">
                                The unique identifier for the cash advance.</td>
</tr>
<tr>
<td valign="top">
                                AmountRequested</td>
<td valign="top">
                                The amount requested in the cash advance, in the currency listed in the **CurrencyCode** element.</td>
</tr>
<tr>
<td valign="top">
                                CurrencyCode</td>
<td valign="top">
                                The <a href="http://en.wikipedia.org/wiki/ISO_4217">3-letter ISO 4217 currency code</a> for the cash advance currency.</td>
</tr>
<tr>
<td valign="top">
                                CurrencyName</td>
<td valign="top">
                                The name of the currency for the cash advance.</td>
</tr>
<tr>
<td valign="top">
                                ExchangeRate</td>
<td valign="top">
                                The exchange rate that applies to the cash advance.</td>
</tr>
<tr>
<td valign="top">
                                RequestDate</td>
<td valign="top">
                                Date of cash advance request from the detailed cash advance record.</td>
</tr>
<tr>
<td valign="top">
                                IssueDate</td>
<td valign="top">
                                The issue date for the cash advance.</td>
</tr>
<tr>
<td valign="top">
                                StartingBalance</td>
<td valign="top">
                                The initial balance for the cash advance.</td>
</tr>
<tr>
<td valign="top">
                                ApprovalStatusName</td>
<td valign="top">
                                The approval status of the cash advance.</td>
</tr>
<tr>
<td valign="top">
                                ApprovalStatusKey</td>
<td valign="top">
                                The unique identifier for the approval status of the cash advance.</td>
</tr>
<tr>
<td valign="top">
                                EmployeeCurrencyCode</td>
<td valign="top">
                                The <a href="http://en.wikipedia.org/wiki/ISO_4217">3-letter ISO 4217 currency code</a> for the employee's currency (&quot;home currency&quot;).</td>
</tr>
<tr>
<td valign="top">
                                EmployeeCurrencyName</td>
<td valign="top">
                                The name of the employee's currency (&quot;home currency&quot;).</td>
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
<TravelRequestDetails <span class="xml-attribute">xmlns=<span class="xml-value">&quot;<span class="xml-value">http://www.concursolutions.com/api/travelrequest/2012/06<span class="xml-value">&quot; <span class="xml-attribute">xmlns:i=<span class="xml-value">&quot;<span class="xml-value">http://www.w3.org/2001/XMLSchema-instance<span class="xml-value">&quot;>
    <AgencyOfficeKey>1</AgencyOfficeKey>
    <AgencyOfficeName>Terrific Travel</AgencyOfficeName>
    <ApprovalLimitDate>2012-06-09T23:59:00</ApprovalLimitDate>
    <ApprovalStatusKey>Q_PEND</ApprovalStatusKey>
    <ApprovalStatusName>Submitted &amp; Pending Approval</ApprovalStatusName>
    <AuthorizedDate <span class="xml-attribute">i:nil=<span class="xml-value">&quot;true&quot; />
    <LastModifiedDate>2012-06-08T16:35:20</LastModifiedDate>
    <CashAdvancesList>
        <CashAdvance>
            <AmountRequested>400.000000</AmountRequested>
            <ApprovalStatusKey>A_NOTF</ApprovalStatusKey>
            <ApprovalStatusName>Not Submitted</ApprovalStatusName>
            <CashAdvanceKey>nu1p4xwRqDVwWEcRN5kzNh1OXXfiZ1z06</CashAdvanceKey>
            <CommentsList <span class="xml-attribute">i:type=<span class="xml-value">&quot;CommentsList&quot; />
            <CurrencyCode>USD</CurrencyCode>
            <CurrencyName>US, Dollar</CurrencyName>
            <EmployeeCurrencyCode>MXN</EmployeeCurrencyCode>
            <EmployeeCurrencyName>Mexico, Peso</EmployeeCurrencyName>
            <ExchangeRate>1.00000000000000</ExchangeRate>
            <IssueDate <span class="xml-attribute">i:nil=<span class="xml-value">&quot;true&quot; />
            <RequestDate>2012-06-08T23:35:20</RequestDate>
            <StartingBalance>0.0</StartingBalance>
        </CashAdvance>
    </CashAdvancesList>
    <CommentCount>1</CommentCount>
    <CommentsList>
        <Comments>
            <Comment>Trip for Sales meeting to Dallas</Comment>
            <DateTime>2012-06-08T16:35:20</DateTime>
            <FirstName>Chris</FirstName>
            <LastName>Miller</LastName>
        </Comments>
    </CommentsList>
    <CreationDate>2012-06-08T23:33:39</CreationDate>
    <CurrencyCode>MXN</CurrencyCode>
    <EmployeeName>Miller, Chris</EmployeeName>
    <EndDate>9/25/2012</EndDate>
    <EndTime>11:59 PM</EndTime>
    <EntriesList>
        <RequestEntry>
            <AllocationCount>3</AllocationCount>
            <AllocationsList>
                <Allocation>
                    <AllocationKey>nG$p6tMeoepRby4MJptMA6$sf4ucfZW7d5y</AllocationKey>
                    <Percentage>33.33333334</Percentage>
                    <Custom1>(7732)VIAJAR</Custom1>
                    <Custom2>(881991)NUEVOS PROYECTOS</Custom2>
                    <Custom3 />
                    <Custom4 />
                    <Custom5>(1234)Project 1234</Custom5>
                    <Custom6 />
                    <Custom7 />
                    <Custom8 />
                    <Custom9 />
                    <Custom10 />
                    <Custom12 />
                    <Custom13 />
                    <Custom14 />
                    <Custom15 />
                    <Custom16 />
                    <Custom17 />
                    <Custom18 />
                    <Custom19 />
                    <Custom20 />
                </Allocation>
                <Allocation>
                    <AllocationKey>nG$p6tMeoepRcrg7jyl$slxYxm43LBgtr0b</AllocationKey>
                    <Percentage>33.33333333</Percentage>
                    <Custom1>(7112)INFRAESTRUCTURA</Custom1>
                    <Custom2>(223817)MODELO INFORMATICO</Custom2>
                    <Custom3 />
                    <Custom4 />
                    <Custom5>(1234)Project 1234</Custom5>
                    <Custom6 />
                    <Custom7 />
                    <Custom8 />
                    <Custom9 />
                    <Custom10 />
                    <Custom12 />
                    <Custom13 />
                    <Custom14 />
                    <Custom15 />
                    <Custom16 />
                    <Custom17 />
                    <Custom18 />
                    <Custom19 />
                    <Custom20 />
                </Allocation>
                <Allocation>
                    <AllocationKey>nG$p6tMeoepRTFxjeJUFHAw$sDhH$prHfL$sd</AllocationKey>
                    <Percentage>33.33333333</Percentage>
                    <Custom1>(8826)FINANZAS</Custom1>
                    <Custom2 />
                    <Custom3 />
                    <Custom4 />
                    <Custom5>(4321)Project 4321</Custom5>
                    <Custom6 />
                    <Custom7 />
                    <Custom8 />
                    <Custom9 />
                    <Custom10 />
                    <Custom12 />
                    <Custom13 />
                    <Custom14 />
                    <Custom15 />
                    <Custom16 />
                    <Custom17 />
                    <Custom18 />
                    <Custom19 />
                    <Custom20 />
                </Allocation>
            </AllocationsList>
            <ApprovedAmount>8947.77000000</ApprovedAmount>
            <CommentsList />
            <Custom1 />
            <Custom2 />
            <Custom3 />
            <Custom4 />
            <Custom5 />
            <Custom6 />
            <Custom7 />
            <Custom8 />
            <Custom9 />
            <Custom10 />
            <Custom11 />
            <Custom12 />
            <Custom13 />
            <Custom14 />
            <Custom15 />
            <Custom16 />
            <Custom17 />
            <Custom18 />
            <Custom19 />
            <Custom20 />
            <Custom21 />
            <Custom22 />
            <Custom23 />
            <Custom24 />
            <Custom25 />
            <Custom26 />
            <Custom27 />
            <Custom28 />
            <Custom29 />
            <Custom30 />
            <Custom31 />
            <Custom32 />
            <Custom33 />
            <Custom34 />
            <Custom35 />
            <Custom36 />
            <Custom37 />
            <Custom38 />
            <Custom39 />
            <Custom40 />
            <EntryDescription />
            <ExceptionsList />
            <ExchangeRate>14.01220000000000</ExchangeRate>
            <ExpenseTypeKey>AIRFR</ExpenseTypeKey>
            <ExpenseTypeName>Boleto de Avion</ExpenseTypeName>
            <ForeignAmount>638.57000000</ForeignAmount>
            <ForeignCurrencyName>US, Dollar</ForeignCurrencyName>
            <LastModifiedDate>2012-06-08T16:35:20</LastModifiedDate>           
            <PostedAmount>8947.77000000</PostedAmount>
            <RemainingAmount>8947.77000000</RemainingAmount>
            <RequestEntryKey>ntOaeqFud4aaO6NFSxH7X3TgNk3$pyqifM</RequestEntryKey>
            <SegmentCount>2</SegmentCount>
            <SegmentsList>
                <Segment>
                    <ApprovedAmount />
                    <ArrivalDate>9/21/2012</ArrivalDate>
                    <ArrivalTime>8:55 AM</ArrivalTime>
                    <ClassOfServiceCode>S</ClassOfServiceCode>
                    <CommentsList />
                    <DepartureDate>9/21/2012</DepartureDate>
                    <DepartureTime>6:15 AM</DepartureTime>
                    <ExceptionsList />
                    <ExchangeRate />
                    <FlightNumber>1066</FlightNumber>
                    <ForeignAmount>638.57000000</ForeignAmount>
                    <ForeignCurrencyName>US, Dollar</ForeignCurrencyName>
                    <FromLocationDetail>Juarez Intl, MEXICO</FromLocationDetail>
                    <FromLocationName>Juarez Intl</FromLocationName>
                    <IsAgencyBooked>Y</IsAgencyBooked>
                    <IsSelfBooked>Y</IsSelfBooked>
                    <PostedAmount />
                    <RecordLocator />
                    <RemainingAmount />
                    <SegmentKey>nLY990POOA2TVhHrpTZH$sxmlZ1S4s5nVf</SegmentKey>
                    <SegmentLocator>1</SegmentLocator>
                    <SegmentType>Air Ticket</SegmentType>
                    <ToLocationDetail>Dallas Ft Worth Intl, Texas</ToLocationDetail>
                    <ToLocationName>Dallas Ft Worth Intl</ToLocationName>
                    <TripLocator>33519718</TripLocator>
                    <LastModifiedDate>2012-06-08T16:35:20</LastModifiedDate>
                    <Custom1 />
                    <Custom2 />
                    <Custom3 />
                    <Custom4 />
                    <Custom5 />
                    <Custom6 />
                    <Custom7 />
                    <Custom8 />
                    <Custom9 />
                    <Custom10 />
                    <Custom11 />
                    <Custom12 />
                    <Custom13 />
                    <Custom14 />
                    <Custom15 />
                    <Custom16 />
                    <Custom17 />
                    <Custom18 />
                    <Custom19 />
                    <Custom20 />
                    <Custom21 />
                    <Custom22 />
                    <Custom23 />
                    <Custom24 />
                    <Custom25 />
                    <Custom26 />
                    <Custom27 />
                    <Custom28 />
                    <Custom29 />
                    <Custom30 />
                    <Custom31 />
                    <Custom32 />
                    <Custom33 />
                    <Custom34 />
                    <Custom35 />
                    <Custom36 />
                    <Custom37 />
                    <Custom38 />
                    <Custom39 />
                    <Custom40 />
                </Segment>
                <Segment>
                    <ApprovedAmount />
                    <ArrivalDate>9/25/2012</ArrivalDate>
                    <ArrivalTime>7:50 PM</ArrivalTime>
                    <ClassOfServiceCode>S</ClassOfServiceCode>
                    <CommentsList />
                    <DepartureDate>9/25/2012</DepartureDate>
                    <DepartureTime>5:25 PM</DepartureTime>
                    <ExceptionsList />
                    <ExchangeRate />
                    <FlightNumber>481</FlightNumber>
                    <ForeignAmount>638.57000000</ForeignAmount>
                    <ForeignCurrencyName>US, Dollar</ForeignCurrencyName>
                    <FromLocationDetail>Dallas Ft Worth Intl, Texas</FromLocationDetail>
                    <FromLocationName>Dallas Ft Worth Intl</FromLocationName>
                    <IsAgencyBooked>Y</IsAgencyBooked>
                    <IsSelfBooked>Y</IsSelfBooked>
                    <PostedAmount />
                    <RecordLocator />
                    <RemainingAmount />
                    <SegmentKey>nLY990POOA2XfRkUq$sJqRGxKI3ZK0$pn54</SegmentKey>
                    <SegmentLocator>2</SegmentLocator>
                    <SegmentType>Air Ticket</SegmentType>
                    <ToLocationDetail>Juarez Intl, MEXICO</ToLocationDetail>
                    <ToLocationName>Juarez Intl</ToLocationName>
                    <TripLocator>33519718</TripLocator>
                    <LastModifiedDate>2012-06-08T16:35:20</LastModifiedDate>
                    <Custom1 />
                    <Custom2 />
                    <Custom3 />
                    <Custom4 />
                    <Custom5 />
                    <Custom6 />
                    <Custom7 />
                    <Custom8 />
                    <Custom9 />
                    <Custom10 />
                    <Custom11 />
                    <Custom12 />
                    <Custom13 />
                    <Custom14 />
                    <Custom15 />
                    <Custom16 />
                    <Custom17 />
                    <Custom18 />
                    <Custom19 />
                    <Custom20 />
                    <Custom21 />
                    <Custom22 />
                    <Custom23 />
                    <Custom24 />
                    <Custom25 />
                    <Custom26 />
                    <Custom27 />
                    <Custom28 />
                    <Custom29 />
                    <Custom30 />
                    <Custom31 />
                    <Custom32 />
                    <Custom33 />
                    <Custom34 />
                    <Custom35 />
                    <Custom36 />
                    <Custom37 />
                    <Custom38 />
                    <Custom39 />
                    <Custom40 />
                </Segment>
            </SegmentsList>
            <TransactionDate>2012-09-21T06:15:00</TransactionDate>
        </RequestEntry>
        <RequestEntry>
            <AllocationCount>3</AllocationCount>
            <AllocationsList>
                <Allocation>
                    <AllocationKey>nG$p6tMeoepROA$p19BXBVIKWPf6FyHoC2k</AllocationKey>
                    <Percentage>33.33333334</Percentage>
                    <Custom1>(7732)VIAJAR</Custom1>
                    <Custom2>(881991)NUEVOS PROYECTOS</Custom2>
                    <Custom3 />
                    <Custom4 />
                    <Custom5>(1234)Project 1234</Custom5>
                    <Custom6 />
                    <Custom7 />
                    <Custom8 />
                    <Custom9 />
                    <Custom10 />
                    <Custom12 />
                    <Custom13 />
                    <Custom14 />
                    <Custom15 />
                    <Custom16 />
                    <Custom17 />
                    <Custom18 />
                    <Custom19 />
                    <Custom20 />
                </Allocation>
                <Allocation>
                    <AllocationKey>nG$p6tMeoepRBwXZeblcbD8giw9LbZm2FT</AllocationKey>
                    <Percentage>33.33333333</Percentage>
                    <Custom1>(7112)INFRAESTRUCTURA</Custom1>
                    <Custom2>(223817)MODELO INFORMATICO</Custom2>
                    <Custom3 />
                    <Custom4 />
                    <Custom5>(1234)Project 1234</Custom5>
                    <Custom6 />
                    <Custom7 />
                    <Custom8 />
                    <Custom9 />
                    <Custom10 />
                    <Custom12 />
                    <Custom13 />
                    <Custom14 />
                    <Custom15 />
                    <Custom16 />
                    <Custom17 />
                    <Custom18 />
                    <Custom19 />
                    <Custom20 />
                </Allocation>
                <Allocation>
                    <AllocationKey>nG$p6tMeoepREmXR98pw3YLB4zFRxPasgE</AllocationKey>
                    <Percentage>33.33333333</Percentage>
                    <Custom1>(8826)FINANZAS</Custom1>
                    <Custom2 />
                    <Custom3 />
                    <Custom4 />
                    <Custom5>(4321)Project 4321</Custom5>
                    <Custom6 />
                    <Custom7 />
                    <Custom8 />
                    <Custom9 />
                    <Custom10 />
                    <Custom12 />
                    <Custom13 />
                    <Custom14 />
                    <Custom15 />
                    <Custom16 />
                    <Custom17 />
                    <Custom18 />
                    <Custom19 />
                    <Custom20 />
                </Allocation>
            </AllocationsList>
            <ApprovedAmount>4764.15000000</ApprovedAmount>
            <CommentsList />
            <Custom1 />
            <Custom2 />
            <Custom3 />
            <Custom4 />
            <Custom5 />
            <Custom6 />
            <Custom7 />
            <Custom8 />
            <Custom9 />
            <Custom10 />
            <Custom11 />
            <Custom12 />
            <Custom13 />
            <Custom14 />
            <Custom15 />
            <Custom16 />
            <Custom17 />
            <Custom18 />
            <Custom19 />
            <Custom20 />
            <Custom21 />
            <Custom22 />
            <Custom23 />
            <Custom24 />
            <Custom25 />
            <Custom26 />
            <Custom27 />
            <Custom28 />
            <Custom29 />
            <Custom30 />
            <Custom31 />
            <Custom32 />
            <Custom33 />
            <Custom34 />
            <Custom35 />
            <Custom36 />
            <Custom37 />
            <Custom38 />
            <Custom39 />
            <Custom40 />
            <EntryDescription />
            <ExceptionsList />
            <ExchangeRate>14.01220000000000</ExchangeRate>
            <ExpenseTypeKey>LODGE</ExpenseTypeKey>
            <ExpenseTypeName>Hotel/Lodging</ExpenseTypeName>
            <ForeignAmount>340.00000000</ForeignAmount>
            <ForeignCurrencyName>US, Dollar</ForeignCurrencyName>
            <LastModifiedDate>2012-06-08T16:35:20</LastModifiedDate>
            <PostedAmount>4764.15000000</PostedAmount>
            <RemainingAmount>4764.15000000</RemainingAmount>
            <RequestEntryKey>ntOaeqFud4tA34CjqKY3$pQOsBXl6Q4Qtd</RequestEntryKey>
            <SegmentCount>1</SegmentCount>
            <SegmentsList>
                <Segment>
                    <ApprovedAmount />
                    <ArrivalDate>9/25/2012</ArrivalDate>
                    <ArrivalTime>12:00 AM</ArrivalTime>
                    <ClassOfServiceCode />
                    <CommentsList />
                    <DepartureDate>9/21/2012</DepartureDate>
                    <DepartureTime>12:00 AM</DepartureTime>
                    <ExceptionsList />
                    <ExchangeRate />
                    <FlightNumber />
                    <ForeignAmount>340.00000000</ForeignAmount>
                    <ForeignCurrencyName>US, Dollar</ForeignCurrencyName>
                    <FromLocationDetail />
                    <FromLocationName />
                    <IsAgencyBooked>Y</IsAgencyBooked>
                    <IsSelfBooked>Y</IsSelfBooked>
                    <PostedAmount />
                    <RecordLocator />
                    <RemainingAmount />
                    <SegmentKey>nLY990POOA2Lqa0$pzpIwE6d0uU51z5DYo</SegmentKey>
                    <SegmentLocator>47244773465</SegmentLocator>
                    <SegmentType>Hotel Reservation</SegmentType>
                    <ToLocationDetail />
                    <ToLocationName />
                    <TripLocator>33519718</TripLocator>
                    <LastModifiedDate>2012-06-08T16:35:20</LastModifiedDate>
                    <Custom1 />
                    <Custom2 />
                    <Custom3 />
                    <Custom4 />
                    <Custom5 />
                    <Custom6 />
                    <Custom7 />
                    <Custom8 />
                    <Custom9 />
                    <Custom10 />
                    <Custom11 />
                    <Custom12 />
                    <Custom13 />
                    <Custom14 />
                    <Custom15 />
                    <Custom16 />
                    <Custom17 />
                    <Custom18 />
                    <Custom19 />
                    <Custom20 />
                    <Custom21 />
                    <Custom22 />
                    <Custom23 />
                    <Custom24 />
                    <Custom25 />
                    <Custom26 />
                    <Custom27 />
                    <Custom28 />
                    <Custom29 />
                    <Custom30 />
                    <Custom31 />
                    <Custom32 />
                    <Custom33 />
                    <Custom34 />
                    <Custom35 />
                    <Custom36 />
                    <Custom37 />
                    <Custom38 />
                    <Custom39 />
                    <Custom40 />
                </Segment>
            </SegmentsList>
            <TransactionDate>2012-09-21T23:59:00</TransactionDate>
        </RequestEntry>
    </EntriesList>
    <EntryCount>2</EntryCount>
    <EverSentBack>N</EverSentBack>
    <ExceptionsList />
    <ExpensePolicyKey>nI6NfRt2Vq7zSzFFgqVGNjeYFXkAxVGGN</ExpensePolicyKey>
    <ExtensionOf />
    <HasException>N</HasException>
    <LoginID>cmiller@example.com</LoginID>
    <Purpose>Business trip to Dallas</Purpose>
    <RequestID>337E</RequestID>
    <RequestKey>nyc7eqM$pprGNOuRIDP6BkOiJ8BntYTrR3</RequestKey>
    <RequestName>Trip from Mexico City to Dallas</RequestName>
    <RequestTotal>13711.92000000</RequestTotal>
    <StartDate>9/21/2012</StartDate>
    <StartTime>6:15 AM</StartTime>
    <SubmitDate>2012-06-08T23:36:10</SubmitDate>
    <TotalApprovedAmount>13711.92000000</TotalApprovedAmount>
    <TotalRemainingAmount>13711.92000000</TotalRemainingAmount>
    <TravelRequestPolicyKey>n$snD$psI09k6NxQAgOnwgks76hOZdyLhDs</TravelRequestPolicyKey>
    <WorkflowActionURL>https:/www.concursolutions.com/api/travelrequest/v1.0/requests/n3cC3I7NpBss5U2Aofqvxao5t3hvFEQo/WorkFlowAction</WorkflowActionURL>
    <Custom1>(7732)VIAJAR</Custom1>
    <Custom2>(881991)NUEVOS PROYECTOS</Custom2>
    <Custom3 />
    <Custom4 />
    <Custom5 />
    <Custom6 />
    <Custom7 />
    <Custom8 />
    <Custom9 />
    <Custom10 />
    <Custom11 />
    <Custom12 />
    <Custom13 />
    <Custom14 />
    <Custom15 />
    <Custom16 />
    <Custom17 />
    <Custom18 />
    <Custom19 />
    <Custom20 />
</TravelRequestDetails>
</pre>
