---
title: Loyalty Program Resource
layout: operation
---




This resource supports the following POST actions:

##  Post Loyalty Program Update Request

| ----- |
|  Description |
|  Updates the loyalty program information for the OAuth consumer. Loyalty contains a variety of information about the user's loyalty membership including

* Vendor
* Number
* Status
* Points Total
* Segment Total
* Next Status
* Unit to Next Status
* Segments to Next Status

**Travel Suppliers**

If the request is sent from a travel supplier with an [OAuth token][1] for the user, they can set a new loyalty program number. Travel suppliers can only update their own loyalty program information.

**Travel Management Companies **

If the request is sent by a TMC, the request can update any loyalty program for the OAuth consumer. |
|  Restrictions |  Supported Content Types |
|  This function is only available to travel suppliers who have completed the [Concur application review process][2]. Suppliers may post loyalty membership information for their loyalty programs only. |   |
|  Query Parameters - Required |  Query Parameters - Optional |
|

None

 |  None |
|  Request Headers - Required |  Request Headers - Optional |
|  Authorization header with OAuth token for valid Concur user. |  None |
|  Content Body |   |
|  This request contains the **LoyaltyMembershipUpdate** parent element with a **Membership** child element for each included loyalty program. The **Membership** element has a **UniqueID** attribute containing the loyalty program identifier, and the following child elements:  

|  Element |  Description |
|  VendorCode |  The code for the vendor that manages the loyalty program. This element is required when the request is sent by a TMC, and is ignored when the request is sent by a travel supplier. |   |
|  VendorType |  The type of vendor that manages the loyalty program. Format: A, C or H

A – Air  
C – Car  
H – Hotel

This element is required when the request is sent by a TMC, and is ignored when the request is sent by a travel supplier. |
|  AccountNo |  The user's account identifier in the loyalty program. |
|  Status |  Name of the user's current level in the loyalty program.  Examples: Gold or Premier. |
|  StatusBenefits |  Description of a benefit of the loyalty program at the at current status.  Example: You are entitled to free breakfast. |
|  PointTotal |  The user's total number of points in the loyalty program. |
|  SegmentTotal |  The user's total segments in the loyalty program. |
|  NextStatus |  Name or description of next higher status level in the  loyalty program. |
|  PointsUntilNextStatus |  Loyalty points required to next status level. |
|  SegmentsUntilNextStatus |  Booking segment to next status level. |

 |

####  XML Example Request From Travel Supplier

    POST https://www.concursolutions.com/api/travelprofile/v1.0/loyalty HTTP/1.1
    Authorization: OAuth {access token}
    ...

    <LoyaltyMembershipUpdate>
        <Membership UniqueID="Frequent Flier">
            <AccountNo>1234567890</AccountNo>
            <Status>Gold</Status>
            <StatusBenefits>Early flight check-in.</StatusBenefits>
            <PointTotal>123456</PointTotal>
            <SegmentTotal>150</SegmentTotal>
            <NextStatus>Platinum</NextStatus>
            <PointsUntilNextStatus>100000</PointsUntilNextStatus>
            <SegmentsUntilNextStatus>100</SegmentsUntilNextStatus>
        </Membership>
        <Membership UniqueID="Business Traveler">
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

####  XML Example Request From TMC

    POST https://www.concursolutions.com/api/travelprofile/v1.0/loyalty HTTP/1.1
    Authorization: OAuth {access token}
    ...

    <LoyaltyMembershipUpdate>
        <Membership UniqueID="Frequent Flier">
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
        <Membership UniqueID="Business Traveler">
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

##  Post Loyalty Program Update Response

| ----- |
|  HTTP Responses |  Supported Content Types |
|  [HTTP Status Codes][3] |   |
|  Content Body |   |
|  This request will return a **LoyaltyMembershipResponse** parent element with the following child elements:  

|  Element |  Description |
|  Status |  The status of the update request. Format: OK or ERROR |   |
|  ErrorDescription |  The details of the error. Only contains data if the **Status** is ERROR. |

 |

####  XML Example of Successful Response

    200 OK
    Content-Type: application/xml

    <LoyaltyMembershipResponse>
        <Status>OK</Status>
        <ErrorDescription />
    </LoyaltyMembershipResponse>

  


[1]: https://developer.concur.com/oauth-20
[2]: https://developer.concur.com/go-market/app-certification
[3]: https://developer.concur.com/reference/http-codes
