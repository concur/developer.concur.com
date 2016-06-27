---
title: Company Notification
layout: reference
---

## Description

A subscription to a notification when any user in the Concur company changes the specified features of their Concur account or data. Currently supports notifications for the following events: Itinerary change (create or update), Travel Profile basic information change.

This functionality requires that the partner complete the OAuth process with an administrative user from the Concur company. This resource can only be accessed by partner applications that have selected the User API scope.

## Version
1.0

## URI
To subscribe:
`https://www.concursolutions.com/api/company/v1.0/subscribe`

To unsubscribe:
`https://www.concursolutions.com/api/company/v1.0/unsubscribe`

## Content Type
application/xml

## Operations

* [Post Company Notification Subscription for Itinerary Changes](#a1)
* [Post Company Notification Subscription for Payment Changes](#a2)
* [Post Company Notification Subscription for Travel Profile Changes](#a3)

##  <a name="a1">Post Company Notification Subscription for Itinerary Changes</a>

### Description

Subscribes or unsubscribes the partner from notifications when any users in the company add, modify, or cancel an itinerary. The partner must have received authorization using OAuth by an administrative user at the company to access the company's trip information.

###  Post Company Notification Subscription for Itinerary Changes Request

#### Headers

#### Request parameters

**type=itinerary** <br>Required. The type of subscription.

**Examples**<br>To subscribe:<br>`https://www.concursolutions.com/api/company/v1.0/subscribe?type=itinerary`<br>To unsubscribe:<br>`https://www.concursolutions.com/api/company/v1.0/unsubscribe?type=itinerary`

##### Authorization header

Required. Authorization header with OAuth token for an administrative user at the company. The user must have one of the following user roles in Concur: Company Administrator or Web Services Administrator for Professional, or Can Administer for Standard.

####  XML Example Request

```
POST http://www.concursolutions.com/api/company/v1.0/subscribe?type=itinerary HTTP/1.1
    Authorization: OAuth {access token}
    ...
```

###  Post Company Notification Subscription for Itinerary Changes Response

#### Notification Format

The notification will be sent to the Postback URL that the partner has registered with Concur during application review. Partners can only have one postback URL for all notification types. The notification will include the **type**, **oauth_token_key**, **userid_type**, and **userid_value** query parameters, specifying the updated user:

`https://postbackurl.com?type=itinerary&oauth_token_key={oauthtoken}&userid_type=login&userid_value=cm@example.com`

#### Response body root elements

The response body will include a **Notification** parent element, with the following child elements.

| Element | Description |
| ------- | ----------- |
|  ObjectType |  ITINERARY |
|  ObjectURI |  The URI for the object. The developer can use the appropriate GET endpoint with the ObjectURI to get complete details for the trip. |
|  EventDateTime |  When the event happened. Format: YYYY-MM-DDThh:mm:ss |
|  EventType |  The type of the change. Format: CREATE, UPDATE, CANCEL |
|  Context |  This is not used yet but will be used in future to specify the change in the trip. Developers can use this in conjunction with EventType to decide how to process the notification. |
|  TripId |  The unique identifier for the trip. Format: String |

####  XML Example of Successful Response

`200 OK`

####  XML Example of Notification

```
POST https://www.postbackurl.com?type=itinerary&oauth_token_key={oauthtoken}&userid_type=login&userid_value=cm@example.com HTTP/1.1

    <?xml version="1.0" encoding="utf-8"?>
    <Notification>
        <ObjectType>ITINERARY</ObjectType>
        <ObjectURI>https://www.concursolutions.com/api/travel/trip/v1.1/naIzQJ0y2DBWjCIQOb2SHTsozwBsHDkdP</ObjectURI>
        <EventDateTime>2013-02-13T08:12:35</EventDateTime>
        <EventType>CREATE</EventType>
        <Context/>
        <TripId>naIzQJ0y2DBWjCIQOb2SHTsozwBsHDkdP</TripId>
    </Notification>
```

##  <a name="a2">Post Company Notification Subscription for Payment Changes</a>

### Description

Subscribes or unsubscribes the partner from notifications when the company's Payment information changes. The partner must have received authorization using OAuth by an administrative user at the company to access the company's form of payment information.

###  Post Company Notification Subscription for Payment Changes Request

#### Headers

#### Request parameters

**type=fop**<br>The type of subscription. Required.

**Examples**<br>To subscribe:<br>`https://www.concursolutions.com/api/company/v1.0/subscribe?type=fop`<br>To unsubscribe:<br>`https://www.concursolutions.com/api/company/v1.0/unsubscribe?type=fop`

#### Headers

##### Authorization header
Required. Authorization header with OAuth token for the desired Concur user. This token is granted as part of the [OAuth 2.0 Web flow authorization process](/api-reference/authentication/authentication.html#web).

###  XML Example Request

```
    POST https://www.concursolutions.com/api/company/v1.0/subscribe?type=fop HTTP/1.1
    Authorization: OAuth {access token}
```

###  Post notification subscription for form of payment changes response

#### Notification Format
The notification will be sent to the Postback URL that the supplier has registered with Concur during application review. Suppliers can only have one postback URL for all notification types. The notification will include the **type** and **oauth_token_key** query parameters, specifying the OAuth information for the updated user:

`https://postbackurl.com?type=FOP&oauth_token_key={oauth_token}`

###  XML Example of successful response

`200 OK`


##  <a name="a3">Post Company Notification Subscription for Travel Profile Changes</a>

### Description

Subscribes or unsubscribes the partner from notifications when the company's Travel Profile information changes. The partner must have received authorization using OAuth by an administrative user at the company to access the company's trip information.

**NOTE**: Concur will send a notification when any area of the user's Travel Profile is updated. This may include fields that are not available through the Travel Profile web service.

###  Post Company Notification Subscription for Travel Profile Changes Request

#### Headers

##### Request parameters

**type=profile**<br>Required. The type of subscription.

**Examples**<br>To subscribe:<br>`https://www.concursolutions.com/api/company/v1.0/subscribe?type=profile`<br>To unsubscribe:<br>`https://www.concursolutions.com/api/company/v1.0/unsubscribe?type=profile`

##### Authorization header

Required. Authorization header with OAuth token for an administrative user at the company. The user must have one of the following user roles in Concur: Company Administrator or Web Services Administrator for Professional, or Can Administer for Standard.

####  XML Example Request

```
    POST <https://www.concursolutions.com/api/company/v1.0/subscribe?type=profile> HTTP/1.1
    Authorization: OAuth {access token}
    ...
```

###  Post Company Notification Subscription for Travel Profile Changes Response

#### Notification Format

The notification will be sent to the Postback URL that the partner has registered with Concur during application review. Partners can only have one postback URL for all notification types. The notification will include the **type**, **oauth_token_key**, **userid_type**, and **userid_value** query parameters, specifying the updated user:

`https://postbackurl.com?type=profile&oauth_token_key={oauthtoken}&userid_type=login&userid_value=cm@example.com`

The partner can use this information to make a Get Travel Profile request.

####  XML Example of Successful Response

`200 OK`

[1]: https://developer.concur.com/oauth-20
[2]: https://developer.concur.com/reference/http-codes
[3]: https://developer.concur.com/travel-profile/profile-resource/get-travel-profile
