
        <div id="main" class="container">
            <div>
                            </div>
            <div class="row">
                <div class="span12">
<div class="breadcrumbs"><a href="/">Home</a>Loyalty Program Resource: POST</div>
                </div>
            </div>

            <div id="content-wrapper">
<!-- <div class="row"> -->
                <div id="content" class="span9">
            # Loyalty Program Resource: POST
                    <div class="section">
                    <div id="node-500" class="node clear-block">


    
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
        <a href="#loyaltyupdate">Post Loyalty Program Update </a>

## 
    <a id="loyaltyupdate" name="loyaltyupdate"></a>Post Loyalty Program Update Request
<table border="1" bordercolor="#dbdbdb" cellpadding="3" cellspacing="0" width="100%">
    <tbody>
        <tr class="GrayTableHead">
            <td colspan="2">
                Description</td>
        </tr>
        <tr>
            <td colspan="2">
                Updates the loyalty program information for the OAuth consumer. Loyalty contains a variety of information about the user&rsquo;s loyalty membership including
                
                    * 
                        Vendor
                    * 
                        Number
                    * 
                        Status
                    * 
                        Points Total
                    * 
                        Segment Total
                    * 
                        Next Status
                    * 
                        Unit to Next Status
                    * 
                        Segments to Next Status
                
                **Travel Suppliers**
                If the request is sent from a travel supplier with an <a href="https://developer.concur.com/node/491">OAuth token</a> for the user, they can set a new loyalty program number. Travel suppliers can only update their own loyalty program information.
                **Travel Management Companies **
                If the request is sent by a TMC, the request can update any loyalty program for the OAuth consumer.</td>
        </tr>
        <tr class="GrayTableHead">
            <td>
                Restrictions</td>
            <td>
                Supported Content Types</td>
        </tr>
        <tr>
            <td>
                This function is only available to travel suppliers who have completed the <a href="https://developer.concur.com/node/624">Concur application review process</a>. Suppliers may post loyalty membership information for their loyalty programs only.</td>
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
                None
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
                Authorization header with OAuth token for valid Concur user.</td>
            <td valign="top" width="50%">
                None</td>
        </tr>
        <tr class="GrayTableHead">
            <td colspan="2">
                Content Body</td>
        </tr>
        <tr>
            <td colspan="2">
                This request contains the **LoyaltyMembershipUpdate** parent element with a **Membership** child element for each included loyalty program. The **Membership** element has a **UniqueID** attribute containing the loyalty program identifier, and the following child elements:<br />
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
                                VendorCode</td>
                            <td valign="top">
                                The code for the vendor that manages the loyalty program. This element is required when the request is sent by a TMC, and is ignored when the request is sent by a travel supplier.</td>
                        </tr>
                        <tr>
                            <td valign="top">
                                VendorType</td>
                            <td valign="top">
                                The type of vendor that manages the loyalty program. Format: A, C or H
                                A &ndash; Air<br />
                                    C &ndash; Car<br />
                                    H &ndash; Hotel
                                This element is required when the request is sent by a TMC, and is ignored when the request is sent by a travel supplier.</td>
                        </tr>
                        <tr>
                            <td valign="top">
                                AccountNo</td>
                            <td valign="top">
                                The user&rsquo;s account identifier in the loyalty program.</td>
                        </tr>
                        <tr>
                            <td valign="top">
                                Status</td>
                            <td valign="top">
                                Name of the user&rsquo;s current level in the loyalty program. Examples: Gold or Premier.</td>
                        </tr>
                        <tr>
                            <td valign="top">
                                StatusBenefits</td>
                            <td valign="top">
                                Description of a benefit of the loyalty program at the at current status. Example: You are entitled to free breakfast.</td>
                        </tr>
                        <tr>
                            <td valign="top">
                                PointTotal</td>
                            <td valign="top">
                                The user&rsquo;s total number of points in the loyalty program.</td>
                        </tr>
                        <tr>
                            <td valign="top">
                                SegmentTotal</td>
                            <td valign="top">
                                The user&rsquo;s total segments in the loyalty program.</td>
                        </tr>
                        <tr>
                            <td valign="top">
                                NextStatus</td>
                            <td valign="top">
                                Name or description of next higher status level in the loyalty program.</td>
                        </tr>
                        <tr>
                            <td valign="top">
                                PointsUntilNextStatus</td>
                            <td valign="top">
                                Loyalty points required to next status level.</td>
                        </tr>
                        <tr>
                            <td valign="top">
                                SegmentsUntilNextStatus</td>
                            <td valign="top">
                                Booking segment to next status level.</td>
                        </tr>
                    </tbody>
                </table>
            </td>
        </tr>
    </tbody>
</table>
####
    XML Example Request From Travel Supplier
<pre class="overflow_box">
POST https://www.concursolutions.com/api/travelprofile/v1.0/loyalty HTTP/1.1
Authorization: OAuth {access token}
...
    
<LoyaltyMembershipUpdate>
    <Membership <span class="xml-attribute">UniqueID=<span class="xml-value">&quot;Frequent Flier&quot;>
        <AccountNo>1234567890</AccountNo>
        <Status>Gold</Status>
        <StatusBenefits>Early flight check-in.</StatusBenefits>
        <PointTotal>123456</PointTotal>
        <SegmentTotal>150</SegmentTotal>
        <NextStatus>Platinum</NextStatus>
        <PointsUntilNextStatus>100000</PointsUntilNextStatus>
        <SegmentsUntilNextStatus>100</SegmentsUntilNextStatus>
    </Membership>
    <Membership <span class="xml-attribute">UniqueID=<span class="xml-value">&quot;Business Traveler&quot;>
        <AccountNo>0987654321</AccountNo>
        <Status>Preferred</Status>
        <StatusBenefits>Free upgrade to Business Class where available.</StatusBenefits>
        <PointTotal>334002</PointTotal>
        <SegmentTotal>340</SegmentTotal>
        <NextStatus>Premier</NextStatus>
        <PointsUntilNextStatus>200998</PointsUntilNextStatus>
        <SegmentsUntilNextStatus>110</SegmentsUntilNextStatus>
    </Membership>
</LoyaltyMembershipUpdate>
</pre>
####
    XML Example Request From TMC
<pre class="overflow_box">
POST https://www.concursolutions.com/api/travelprofile/v1.0/loyalty HTTP/1.1
Authorization: OAuth {access token}
...
    
<LoyaltyMembershipUpdate>
    <Membership <span class="xml-attribute">UniqueID=<span class="xml-value">&quot;Frequent Flier&quot;>
        <VendorCode>AA</VendorCode>
        <VendorType>A</VendorType>
        <AccountNo>1234567890</AccountNo>
        <Status>Gold</Status>
        <StatusBenefits>Early flight check-in.</StatusBenefits>
        <PointTotal>123456</PointTotal>
        <SegmentTotal>150</SegmentTotal>
        <NextStatus>Platinum</NextStatus>
        <PointsUntilNextStatus>100000</PointsUntilNextStatus>
        <SegmentsUntilNextStatus>100</SegmentsUntilNextStatus>
    </Membership>
    <Membership <span class="xml-attribute">UniqueID=<span class="xml-value">&quot;Business Traveler&quot;>
        <VendorCode>TR</VendorCode>
        <VendorType>C</VendorType>
        <AccountNo>991823728</AccountNo>
        <Status>Preferred</Status>
        <StatusBenefits>Free upgrade to larger car when available.</StatusBenefits>
        <PointTotal>822311</PointTotal>
        <SegmentTotal>340</SegmentTotal>
        <NextStatus>Premier</NextStatus>
        <PointsUntilNextStatus>200998</PointsUntilNextStatus>
        <SegmentsUntilNextStatus>110</SegmentsUntilNextStatus>
    </Membership>
</LoyaltyMembershipUpdate>
</pre>
## 
    Post Loyalty Program Update Response
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
                This request will return a <span class="codeexample">**LoyaltyMembershipResponse** parent element with the following child elements:<br />
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
                                Status</td>
                            <td valign="top">
                                The status of the update request. Format: OK or ERROR</td>
                        </tr>
                        <tr>
                            <td valign="top">
                                ErrorDescription</td>
                            <td valign="top">
                                The details of the error. Only contains data if the **Status** is ERROR.</td>
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

<LoyaltyMembershipResponse>
    <Status>OK</Status>
    <ErrorDescription />
</LoyaltyMembershipResponse>
</pre>
<br />
