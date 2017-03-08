---
title: Loyalty Program 2.0
layout: reference
---

## Description 
The loyalty program information for the user, as entered in Concur.

## Version
2.0

##URI
<samp>https://{InstanceURL}/api/travelprofile/v2.0/loyalty</samp>

## Content Types
* application/xml

## Accept Type
* application/xml

## Operations
* [Add Loyalty Program Information](#a1)
* [Possible Warnings and Response Messages](#a2)

## <a name="a1">Add Loyalty Program Information</a>
Adds the loyalty program information for the OAuth consumer. Loyalty contains information about the user's loyalty membership, including:

* Vendor
* Number

**Travel Suppliers**

If the request is sent from a travel supplier with an [OAuth token][2] for the user, they can add a new loyalty program number.

### Restrictions

This function is only available to travel suppliers who have completed the Concur application review process. Suppliers may post loyalty membership information for their loyalty programs only.

## Request

### Headers

#### Authorization header

Authorization header with OAuth token for valid Concur user. Required.

#### Accept header

application/xml

### Request body

#### Root elements
This request contains the **Loyalty** root element with a **LoyaltyMemberships** child element. The LoyaltyMemberships element has a chile **LoyaltyMembership** element for each included loyalty program. The **LoyaltyMembership** element has the following child elements:

##### LoyaltyMembership element

| Element | Type | Description |
| ------- | -------- | ----------- |
| VendorCode | string | The code for the vendor that manages the loyalty program. |
| VendorType | string | The type of vendor that manages the loyalty program. One of the following options: Air, Rail, Car, Hotel. |
| AccountNumber | string | The user's account identifier in the loyalty program. |

###  XML Example Request

```http
POST https://{InstanceURL}/api/travelprofile/v2.0/loyalty HTTP/1.1
Authorization: OAuth {access token}
...
```

```xml
<Loyalty>
    <LoyaltyMemberships>
          <LoyaltyMembership>
              <VendorCode>2R</VendorCode>
              <VendorType>Rail</VendorType>
              <AccountNumber>1234567890</AccountNumber>
          </LoyaltyMembership>
    </LoyaltyMemberships>
</Loyalty>
```

### Notes

* If the user associated with the OAuth token already has a loyalty account number for a given vendor, the only way to update that account number is through [Travel Profile API 2.0][4], or through the user's profile page

##  Response

### Content Types

application/xml

### Response body root elements

On Success:<br><br>
This request will return a **TravelProfileResponseMessage** parent element with the following child elements:

| Element | Description |
| ------- | ----------- |
| Code |  Code numbers such as: S001. The codes relate to codes found on the [Travel Profile - Possible Warnings and Error Messages][3] section |
| Message | Short success message  |

On Error:<br><br>
This request will return an **Error** root element that has a child **Message** element that contains the folowing child elements:

| Element | Description |
| ------- | ----------- |
| Code |  Code numbers such as: W018, W019. The codes relate to codes found on the [Travel Profile - Possible Warnings and Error Messages][3] section |
| Message | Short message with a description of the error |
| Field | The field/element that is causing the error |

## <a name="a2">Possible Warning and Error Messages</a>

| Error Messages | Possible Issues |
|------------|-----------------|
| `There is an error in XML document` | Missing VendorCode, VendorType, or AccountNumber, Invalid extra elements in the XML, or Other XML formatting issues |
| `You must specify at least one loyalty membership to add` | An empty list of LoyaltyMemberships is being supplied |
| `Duplicate vendor code was passed in for VendorCode: {VendorCode}.` | Passed in Memberships had duplicate VendorCodes |
| `You do not have permissions to alter memberships for VendorCode: {VendorCode}."` | Passed in Membership's VendorCode does not match Consumer's travel supplier VendorCode for the web service |
| `You do not have permissions to alter memberships for VendorType: {VendorType}.` | Passed in Membership's VendorType does not match Consumer's travel supplier VendorType for the web service |




[1]: http://concur.github.io/developer.concur.com/api-reference/authentication/oauth-20-overview
[2]: https://developer.concur.com/go-market/app-certification
[3]: https://developer.concur.com/api-reference/travel-profile/01-profile-resource.html#a4
[4]: https://developer.concur.com/api-reference/travel-profile/01-profile-resource.html
