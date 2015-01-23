# Fetch Attendee - Post Attendee Search Version 2.0

* <a href="#listoflists">Post Attendee Search </a>

## Post Attendee Search Request

<table border="1" bordercolor="#DBDBDB" cellpadding="3" cellspacing="0" width="100% ">
<tbody>
<tr class="GrayTableHead">
<td colspan="2">
Supported Accept Types</td>
</tr>
<tr>
<td colspan="2">

* application/xml

</td>
</tr>
<tr class="GrayTableHead">
<td colspan="2">
Request URI</td>
</tr>
<tr>
<td colspan="2">
The Fetch Attendee version 2.0 callout sends the attendee information to a URI for the application connector, which can be in a custom location for each client. The default is:
<pre class="overflow_box">
https://{servername}/concur/attendee/v2.0/fetch</pre>For backward compatibility, Fetch Attendee version 1.0 is used instead of version 2.0 when the URI uses v1.0 instead of v2.0. The URI is configured on the **Application Connector Registration** page under** Web Services**, **Administration**,** Manage Applications**. Refer to **<a href="https://developer.concur.com/node/371#installproc">Installation Process</a> ** for more information.
The application connector responds to the Fetch Attendee request by returning all attendees that match the search criteria. The result is limited to the maximum number of records specified in the request. If more than the maximum number of records are sent, Concur Expense displays a message in the Attendee Search window asking the user to refine their search. The authorization functionality in version 2.0 is the same as version 1.0
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
Authorization header with Basic authorization for endpoint. Refer to <a href="https://developer.concur.com/node/371#auth">**Authentication**</a> for more information.</td>
<td valign="top" width="50%">
None</td>
</tr>
<tr class="GrayTableHead">
<td colspan="2">
Request Body</td>
</tr>
<tr>
<td colspan="2">
The request body contains an **AttendeeSearchRequest** parent element with an **Attendee** child element. The **Attendee** element contains the following elements. They contain the values entered on the search form.
<table border="1" bordercolor="#DBDBDB" cellpadding="3" cellspacing="0" width="100% ">
<tbody>
<tr class="GrayTableHead">
<td valign="top" width="17%">
Element</td>
<td valign="top" width="83%">
Description</td>
</tr>
<tr>
<td valign="top">
AttendeeTypeCode</td>
<td valign="top">
Code for the attendee type assigned to this attendee. Maximum length is 8 characters.</td>
</tr>
<tr>
<td valign="top">
Company</td>
<td valign="top">
Attendee&rsquo;s company. Also used for Institution Name for Healthcare Provider attendees. Maximum length is 150 characters. Required in the response.</td>
</tr>
<tr>
<td valign="top">
Custom1 through Custom20</td>
<td valign="top">
Custom fields which vary for a given configuration. Maximum length is 100 characters. Required in the response.
For clients who purchased the HCP Connector, Custom7, Custom8, and Custom9 are mapped to the HCP Attendee Form as follows:
</td>
</tr>
<tr>
<td valign="top">
<blockquote>Custom7
</blockquote>
</td>
<td valign="top">
License number</td>
</tr>
<tr>
<td valign="top">
<blockquote>Custom8
</blockquote>
</td>
<td valign="top">
State of license</td>
</tr>
<tr>
<td valign="top">
<blockquote>Custom9
</blockquote>
</td>
<td valign="top">
Healthcare specialty description</td>
</tr>
<tr>
<td valign="top">
Custom 21 through Custom25</td>
<td valign="top">
Custom fields which vary for a given configuration. Maximum length is 100 characters. Required in the response.
For clients who purchased the HCP Connector, Custom15, Custom21, Custom22, and Custom23 are mapped to the HCP Attendee Form as follows:
</td>
</tr>
<tr>
<td valign="top">
<blockquote>Custom15
</blockquote>
</td>
<td valign="top">
Healthcare practice address</td>
</tr>
<tr>
<td valign="top">
<blockquote>Custom21
</blockquote>
</td>
<td valign="top">
Attendee taxonomy</td>
</tr>
<tr>
<td valign="top">
<blockquote>Custom22
</blockquote>
</td>
<td valign="top">
Attendee tax ID</td>
</tr>
<tr>
<td valign="top">
<blockquote>Custom23
</blockquote>
</td>
<td valign="top">
Covered recipient ID</td>
</tr>
<tr>
<td valign="top">
ExternalID</td>
<td valign="top">
Attendee&rsquo;s unique identifier outside of Concur. Maximum length is 48 characters.</td>
</tr>
<tr>
<td valign="top">
FirstName</td>
<td valign="top">
Attendee&rsquo;s first name. Maximum length is 50 characters.</td>
</tr>
<tr>
<td valign="top">
LastName</td>
<td valign="top">
Attendee&rsquo;s last name. Maximum length is 132 characters.</td>
</tr>
<tr>
<td valign="top">
MaximumNumberRecords</td>
<td valign="top">
Maximum number of records that will be returned to the user for the given search criteria.</td>
</tr>
<tr>
<td valign="top">
MiddleInitial</td>
<td valign="top">
Attendee&rsquo;s middle initial. Maximum length is 1 character.</td>
</tr>
<tr>
<td valign="top">
OwnerLoginID</td>
<td valign="top">
Concur Login ID for the report owner (not the logged in user). The developer can use the User Resource: GET endpoint to obtain user profile details that identify the user and use this information to search for attendees in the system of record for that user.</td>
</tr>
<tr>
<td valign="top">
Suffix</td>
<td valign="top">
Attendee&rsquo;s name suffix. Maximum length is 32 characters.</td>
</tr>
<tr>
<td valign="top">
Title</td>
<td valign="top">
Attendee&rsquo;s title. Maximum length is 32 characters.</td>
</tr>
</tbody>
</table>
</td>
</tr>
</tbody>
</table>

#### XML Example Request

    POST /concur/attendee/v1.0/fetch HTTPS/1.1
    Host: example.com
    Authorization: Basic ...
    Content-Type: application/xml; charset=utf-8
    Content-Length: {length of content body}

    <AttendeeSearchRequest>
        <Attendee>
            <AttendeeTypeCode>BUSGUEST</AttendeeTypeCode>
            <FirstName>Chris</FirstName>
            <MiddleInitial />
            <LastName>Miller</LastName>
            <Suffix />
            <Title>CFO</Title>
            <Company>Len Dev</Company>
            <ExternalID />
            <OwnerLoginID>cm@example.com</OwnerLoginID>
            <MaximumNumberRecords>500</MaximumNumberRecords>
            <Custom1 />
            <Custom2 />
            <Custom3 />
            <Custom4 />
            <Custom5 />
            <Custom6 />
            <Custom7 />
            <Custom8>North America</Custom8>
            <Custom9> />
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
        </Attendee>
    </AttendeeSearchRequest>

## Post Attendee Search Response

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
The response will include an **AttendeeSearchResponse** parent element, with an **Attendee** child element for each search result. The **Attendee** child element must contain all of the elements described below. The **FirstName**, **LastName**, and **ExternalID** elements must have values. All other elements must be returned in the response, however they can be empty if no data is available.
If no attendees match the search criteria, return an empty **AttendeeSearchResponse**.
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
AttendeeTypeCode</td>
<td valign="top">
The attendee type code for the attendee type assigned to this attendee. Maximum length: 8</td>
</tr>
<tr>
<td valign="top">
Company</td>
<td valign="top">
The attendee&rsquo;s company. Required in the response. Also used for Institution Name for Healthcare Provider attendees. Maximum length: 150</td>
</tr>
<tr>
<td valign="top">
Custom1 through Custom25</td>
<td valign="top">
Varies depending on configuration. Required in the response. Maximum length of Custom1 through Custom20: 100 characters. Maximum length of Custom21 through Custom25: 48 characters.<br />
The following custom fields are used with the Healthcare Provider attendees:
<table border="1" bordercolor="#CCCCCC" cellpadding="3" cellspacing="0" width="100%">
<tbody>
<tr>
<td>
Custom7</td>
<td>
License Number</td>
</tr>
<tr>
<td>
Custom8</td>
<td>
State of License</td>
</tr>
<tr>
<td>
Custom9</td>
<td>
Specialty Description</td>
</tr>
<tr>
<td>
Custom13</td>
<td>
Recipient Type/Professional Designation</td>
</tr>
<tr>
<td>
Custom14</td>
<td>
NPI Number</td>
</tr>
<tr>
<td>
Custom15</td>
<td>
Primary Practice Address Line 1</td>
</tr>
<tr>
<td>
Custom16</td>
<td>
Primary Practice Address Line 2</td>
</tr>
<tr>
<td>
Custom17</td>
<td>
Primary Practice Address Line 3</td>
</tr>
<tr>
<td>
Custom18</td>
<td>
Primary Practice City</td>
</tr>
<tr>
<td>
Custom19</td>
<td>
Primary Practice State</td>
</tr>
<tr>
<td>
Custom20</td>
<td>
Primary Practice Zip Code</td>
</tr>
<tr bordercolor="#DBDBDB">
<td valign="top">
Custom21</td>
<td valign="top">
Taxonomy. Max 48 characters.</td>
</tr>
<tr bordercolor="#DBDBDB">
<td valign="top">
Custom22</td>
<td valign="top">
Tax ID. Max 48 characters.</td>
</tr>
<tr bordercolor="#DBDBDB">
<td valign="top">
Custom23</td>
<td valign="top">
Covered Recipient ID. Max 48 characters.</td>
</tr>
</tbody>
</table>
</td>
</tr>
<tr>
<td valign="top">
ExternalID</td>
<td valign="top">
The attendee's unique identifier outside of Concur. Maximum length: 32</td>
</tr>
<tr>
<td valign="top">
FirstName</td>
<td valign="top">
The attendee&rsquo;s first name. Maximum length: 50</td>
</tr>
<tr>
<td valign="top">
LastName</td>
<td valign="top">
The attendee&rsquo;s last name. Maximum length: 132</td>
</tr>
<tr>
<td valign="top">
MiddleInitial</td>
<td valign="top">
The middle initial of the attendee. Maximum length: 1.</td>
</tr>
<tr>
<td valign="top">
Suffix</td>
<td valign="top">
The suffix of the attendee. Maximum length: 32.</td>
</tr>
<tr>
<td valign="top">
Title</td>
<td valign="top">
The attendee&rsquo;s title. Maximum length: 32</td>
</tr>
</tbody>
</table>

**NOTES**:

* When implementing the search logic, the search criteria should use logical AND between the fields, not logical OR. For example, if in the search dialog the user specifies Doe in the last name field and Acme in the company field, the connector must return only records where the Acme company has contacts with the last name of Doe. It must not return records for contacts with the last name Doe who belong to another company such as Apex.
* If the application connector does not respond or returns an error, the user is notified in a popup window within Expense. Concur will not resend the request unless the user manually initiates the search again.

</td>
</tr>
</tbody>
</table>

#### XML Example of Successful Response

    HTTPS/1.1 OK 200
    Content-Type: application/xml
    Content-Length: {length of content body}

    <AttendeeSearchResponse>
        <Attendee>
            <ExternalID>1234567890</ExternalID>
            <FirstName>Chris</FirstName>
            <MiddleInitial>T</MiddleInitial>
            <LastName>Miller</LastName>
            <Suffix/>
            <Company>Len Dev</Company>
            <AttendeeTypeCode>BUSGUEST</AttendeeTypeCode>
            <Title>CFO</Title>
            <Custom1/>
            <Custom2/>
            <Custom3/>
            <Custom4/>
            <Custom5/>
            <Custom6/>
            <Custom7>RD</Custom7>
            <Custom8>North America</Custom8>
            <Custom9>Internal Medicine</Custom9>
            <Custom10/>
            <Custom11/>
            <Custom12/>
            <Custom13/>
            <Custom14/>
            <Custom15>100 Main Street, Bellevue, WA 98040</Custom15>
            <Custom16/>
            <Custom17/>
            <Custom18/>
            <Custom19/>
            <Custom20/>
            <Custom21>Tax ID 1234</Custom21>
            <Custom22/>
            <Custom23>Patient ID 576</Custom23>
            <Custom24/>
            <Custom25/>
        </Attendee>
    </AttendeeSearchResponse>


The following example shows the expected response when no attendees match the search criteria.

    HTTPS/1.1 OK

    <span class="ST0"><?<span class="ST0">xml version=&quot;1.0&quot; encoding=&quot;utf-8&quot;?>
    <AttendeeSearchResponse/>

