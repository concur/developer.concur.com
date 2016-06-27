---
title: Loyalty Program
layout: reference
---



## Description
The loyalty program information for the user, as entered in Concur.

## Version
1.0

## URI
<samp>https://www.concursolutions.com/api/travelprofile/v1.0/loyalty</samp>

## Content types
* application/xml

## Accept types
* application/xml

## Operations
* [Update loyalty program information](#a1)

## <a name="a1">Update loyalty program information</a>
Updates the loyalty program information for the OAuth consumer. Loyalty contains a variety of information about the user's loyalty membership, including:

* Vendor
* Number
* Status
* Points Total
* Segment Total
* Next Status
* Unit to Next Status
* Segments to Next Status

**Travel Suppliers**

If the request is sent from a travel supplier with an [OAuth token][4] for the user, they can set a new loyalty program number. Travel suppliers can only update their own loyalty program information.

**Travel Management Companies**

If the request is sent by a TMC, the request can update any loyalty program for the OAuth consumer.

### Restrictions

This function is only available to travel suppliers who have completed the [Concur application review process][2]. Suppliers may post loyalty membership information for their loyalty programs only.

## Request

### Headers

#### Authorization header

Authorization header with OAuth token for valid Concur user. Required.

#### Accept header

application/xml

### Request body

#### Root elements
This request contains the **LoyaltyMembershipUpdate** parent element with a **Membership** child element for each included loyalty program. The **Membership** element has a **UniqueID** attribute containing the loyalty program identifier, and the following child elements.

##### Membership element

| Element | Description |
| ------- | ----------- |
| VendorCode | The code for the vendor that manages the loyalty program. This element is required when the request is sent by a TMC, and is ignored when the request is sent by a travel supplier. |
| VendorType | The type of vendor that manages the loyalty program. Format: A, C or H<br>A – Air<br>C – Car<br>H – Hotel<br>This element is required when the request is sent by a TMC, and is ignored when the request is sent by a travel supplier. |
| AccountNo | The user's account identifier in the loyalty program. |
| Status | Name of the user's current level in the loyalty program.  Examples: Gold or Premier. |
| StatusBenefits | Description of a benefit of the loyalty program at the at current status. Example: You are entitled to free breakfast. |
| PointTotal | The user's total number of points in the loyalty program. |
| SegmentTotal | The user's total segments in the loyalty program. |
| NextStatus | Name or description of next higher status level in the  loyalty program. |
| PointsUntilNextStatus | Loyalty points required to next status level. |
| SegmentsUntilNextStatus | Booking segment to next status level. |

###  XML Example Request From Travel Supplier

```
    POST https://www.concursolutions.com/api/travelprofile/v1.0/loyalty HTTP/1.1
    Authorization: OAuth {access token}
    ...
```

```xml
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
```

###  XML Example Request From TMC

```
    POST https://www.concursolutions.com/api/travelprofile/v1.0/loyalty HTTP/1.1
    Authorization: OAuth {access token}
    ...
```

```xml
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
```

##  Response

### Content Types

application/xml

###  Response body root elements

This request will return a **LoyaltyMembershipResponse** parent element with the following child elements:

| Element | Description |
| ------- | ----------- |
|  Status |  The status of the update request. Format: OK or ERROR |
|  ErrorDescription |  The details of the error. Only contains data if the **Status** is ERROR. |

###  XML Example of Successful Response

```xml
    200 OK
    Content-Type: application/xml

    <LoyaltyMembershipResponse>
        <Status>OK</Status>
        <ErrorDescription />
    </LoyaltyMembershipResponse>
```

[1]: http://concur.github.io/developer.concur.com/api-reference/authentication/oauth-20-overview
[4]: https://developer.concur.com/go-market/app-certification
