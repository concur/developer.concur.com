---
title: User Notification
layout: reference
---

## Description
A subscription to a notification when the Concur user changes the specified features of their Concur account or data. Currently supports notifications for the following events: Itinerary change (create or update), Travel Profile basic information change, or Travel Profile Form of Payment change. This functionality is restricted to Travel Suppliers or TMCs (Travel Management Companies) who have registered with Concur.

**NOTE**: This resource can only be accessed by partner applications that have selected the `User` API scope.

## Resource URI
* To subscribe
    <samp>https://www.concursolutions.com/api/user/v1.0/subscribe</samp>
* To unsubscribe:
    <samp>https://www.concursolutions.com/api/user/v1.0/unsubscribe</samp>

## Headers

### Content-Type header
application/xml

### Accept header
application/xml

## Operations

* [Subscribe for notifications for itinerary changes](#a1)
* [Subscribe for notifications for payment changes](#a2)
* [Subscribe for notifications for travel profile changes](#a3)

## <a name="a1">Subscribe for notifications for itinerary changes</a>
Subscribes or unsubscribes the travel supplier from notifications when the user adds, modifies, or cancels an itinerary. This functionality is only available to travel suppliers that have an application on the App Center tab of Concur. The supplier must also have received authorization by the user to access their trip information.


## Request

* To subscribe:<sample>https://www.concursolutions.com/api/travelprofile/v1.0/subscribe?type=itinerary</sample>
* To unsubscribe:<sample>https://www.concursolutions.com/api/travelprofile/v1.0/unsubscribe?type=itinerary</sample>

### Request parameters

**type=itinerary**<br>The type of subscription. Required.

### Headers

#### Authorization header

Required. Authorization header with OAuth token for the desired Concur user. This token is granted as part of the [OAuth 2.0 Web flow authorization process](/api-reference/authentication/authentication.html#web).

###  Example: Subscribe to itinerary changes

```xml
    POST https://www.concursolutions.com/api/travelprofile/v1.0/subscribe?type=itinerary HTTP/1.1
    Authorization: OAuth {access token}
    ...
```

##  Post notification subscription for itinerary changes response

### Notification format

The notification will be sent to the Postback URL that the supplier has registered with Concur during application review. Suppliers can only have one postback URL for all notification types. The notification will include the **type** and **oauth_token_key** query parameters, specifying the OAuth information for the updated user:

<samp>https://postbackurl.com?type=Itinerary&oauth_token_key={oauth_token}</samp>

### Response body root elements

The request will include a **Notification** parent element, with the following child elements:

| Element | Description |
| ------- | ----------- |
| ObjectType | ITINERARY |
| ObjectURI | The URI for the object. The developer can use the appropriate GET endpoint with the ObjectURI to get complete details for the trip. For Itinerary, the ObjectURI value is the same as the TripId value. |
| EventDateTime | When the event happened. Format: YYYY-MM-DDThh:mm:ss |
| EventType | The type of the change. Format: CREATE, UPDATE, CANCEL |
| Context | This is not used yet but will be used in future to specify the change in the trip. Developers can use this in conjunction with EventType to decide how to process the notification. |
| TripId | The unique identifier for the trip. Format: String |

###  Example: Post a of notification in XML format

```xml
    POST https://www.postbackurl.com?type=itinerary&oauth_token_key={oauthtoken} HTTP/1.1
    Authorization: OAuth {access token}

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

###  XML Example of Successful Response for Itinerary Changes

`200 OK`

##  <a name="a2">Subscribe for notifications for payment changes</a>

### Description
Subscribes or unsubscribes the travel supplier from notifications when the user's Form of Payment information changes. This functionality is only available to travel suppliers that have an application on the App Center tab of Concur. The supplier must also have received authorization by the user to access their Form of Payment information.

**NOTE**: Concur will send a notification when any area of the user's Form of Payment is updated. This may include fields that are not available through the Travel Profile web service.

### <a name="a2">Post Notification Subscription for Form of Payment Changes Request</a>

#### Request parameters

**type=fop**<br>The type of subscription. Required.

**Examples**<br>To subscribe:<br>`https://www.concursolutions.com/api/travelprofile/v1.0/subscribe?type=fop`<br>To unsubscribe:<br>`https://www.concursolutions.com/api/travelprofile/v1.0/unsubscribe?type=fop`

#### Headers

##### Authorization header
Required. Authorization header with OAuth token for the desired Concur user. This token is granted as part of the [OAuth 2.0 Web flow authorization process](/api-reference/authentication/authentication.html#web).

###  XML Example Request

```
    POST https://www.concursolutions.com/api/travelprofile/v1.0/subscribe?type=fop HTTP/1.1
    Authorization: OAuth {access token}
```

###  Post notification subscription for form of payment changes response

#### Notification Format
The notification will be sent to the Postback URL that the supplier has registered with Concur during application review. Suppliers can only have one postback URL for all notification types. The notification will include the **type** and **oauth_token_key** query parameters, specifying the OAuth information for the updated user:

`https://postbackurl.com?type=FOP&oauth_token_key={oauth_token}`

###  XML Example of successful response

`200 OK`

##  <a name="a3">Subscribe for notifications for travel profile changes</a>

Subscribes or unsubscribes the travel supplier from notifications when the user's Travel Profile information changes. This functionality is only available to travel suppliers that have an application on the App Center tab of Concur. The supplier must also have received authorization by the user to access their travel profile information.

**NOTE**: Concur will send a notification when any area of the user's Travel Profile is updated. This may include fields that are not available through the Travel Profile web service.

### Request

#### Request parameters

**type=profile**<br>The type of subscription. Required.

**Examples**<br>To subscribe:<br>`https://www.concursolutions.com/api/travelprofile/v1.0/subscribe?type=profile`<br>To unsubscribe:<br>`https://www.concursolutions.com/api/travelprofile/v1.0/unsubscribe?type=profile`

#### Headers

##### Authorization header
Required. Authorization header with OAuth token for the desired Concur user. This token is granted as part of the [OAuth 2.0 Web flow authorization process](/api-reference/authentication/authentication.html#web).

###  Request

```
    POST https://www.concursolutions.com/api/travelprofile/v1.0/subscribe?type=profile HTTP/1.1
    Authorization: OAuth {access token}
```

###  Response

#### Notification Format
The notification will be sent to the Postback URL that the supplier has registered with Concur during application review. Suppliers can only have one postback URL for all notification types. The notification will include the **type** and **oauth_token_key** query parameters, specifying the OAuth information for the updated user:

<samp>https://postbackurl.com?type=Profile&oauth_token_key={oauth_token}</samp>

####  XML Example of Successful Response

`200 OK`


