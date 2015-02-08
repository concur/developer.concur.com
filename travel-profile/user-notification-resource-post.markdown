---
title: User Notification Resource - POST
layout: operation
---

##  Post Notification Subscription for Itinerary Changes Request

###  Description
Subscribes or unsubcribes the travel supplier from notifications when the user adds, modifies, or cancels an itinerary. This functionality is only available to travel suppliers that have an application on the App Center tab of Concur. The supplier must also have received authorization by the user to access their trip information. 

| Query Parameters - Required | Query Parameters - Optional |
| --------------------------- | --------------------------- |
| * **type=itinerary**<br>The type of subscription.<br>**Examples**<br>To subscribe:<br>https://www.concursolutions.com/api/travelprofile/v1.0/subscribe?type=itinerary<br>To unsubscribe:<br>https://www.concursolutions.com/api/travelprofile/v1.0/unsubscribe?type=itinerary| None |

| Request Headers - Required | Request Headers - Optional |
| -------------------------- | -------------------------- |
| Authorization header with OAuth token for the desired Concur user. This token is granted as part of the [OAuth from the App Center][1] process. |  None |

###  XML Example Request for Itinerary Changes

    POST https://www.concursolutions.com/api/travelprofile/v1.0/subscribe?type=itinerary HTTP/1.1
    Authorization: OAuth {access token}
    ...

##  Post Notification Subscription for Itinerary Changes Response

### HTTP Responses
[HTTP Status Codes][2]

### Content Body
This request will return an HTTP code. Refer to [HTTP Codes][2] for more details.

### Notification Format
The notification will be sent to the Postback URL that the supplier has registered with Concur during application review. Suppliers can only have one postback URL for all notification types. The notification will include the **type** and **oauth_token_key** query parameters, specifying the OAuth information for the updated user:

https://postbackurl.com?type=Itinerary&oauth_token_key={oauth_token}

The request will include a **Notification** parent element, with the following child elements:

| Element | Description |
| ------- | ----------- |
| ObjectType | ITINERARY |
| ObjectURI | The URI for the object. The developer can use the appropriate GET endpoint with the ObjectURI to get complete details for the trip. For Itinerary, the ObjectURI value is the same as the TripId value. |
| EventDateTime | When the event happened. Format: YYYY-MM-DDThh:mm:ss |
| EventType | The type of the change. Format: CREATE, UPDATE, CANCEL |
| Context | This is not used yet but will be used in future to specify the change in the trip. Developers can use this in conjuction with EventType to decide how to process the notification. |
| TripId | The unique identifier for the trip. Format: String |

###  XML Example of Notification

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

###  XML Example of Successful Response for Itinerary Changes

    200 OK

##  Post Notification Subscription for Form of Payment Changes Request

### Description
Subscribes or unsubcribes the travel supplier from notifications when the user's Form of Payment information changes. This functionality is only available to travel suppliers that have an application on the App Center tab of Concur. The supplier must also have received authorization by the user to access their Form of Payment information.

**NOTE**: Concur will send a notification when any area of the user's Form of Payment is updated. This may include fields that are not available through the Travel Profile web service.

| Query Parameters - Required | Query Parameters - Optional |
| --------------------------- | --------------------------- |
| * **type=fop**<br>The type of subscription.<br>**Examples**<br>To subscribe:<br>https://www.concursolutions.com/api/travelprofile/v1.0/subscribe?type=fop<br>To unsubscribe:<br>https://www.concursolutions.com/api/travelprofile/v1.0/unsubscribe?type=fop| None |

| Request Headers - Required | Request Headers - Optional |
| -------------------------- | -------------------------- |
|  Authorization header with OAuth token for the desired Concur user. This token is granted as part of the [OAuth from the App Center][1] process. |  None |

###  XML Example Request

    POST https://www.concursolutions.com/api/travelprofile/v1.0/subscribe?type=fop HTTP/1.1
    Authorization: OAuth {access token}

##  Post Notification Subscription for Form of Payment Changes Response

### HTTP Responses
[HTTP Status Codes][2]

### Content Body
This request will return an HTTP code. Refer to [HTTP Codes][2] for more details.

### Notification Format
The notification will be sent to the Postback URL that the supplier has registered with Concur during application review. Suppliers can only have one postback URL for all notification types. The notification will include the **type** and **oauth_token_key** query parameters, specifying the OAuth information for the updated user:

https://postbackurl.com?type=FOP&oauth_token_key={oauth_token}

###  XML Example of Successful Response

    200 OK

##  Post Notification Subscription for Travel Profile Changes Request

### Description
Subscribes or unsubcribes the travel supplier from notifications when the user's Travel Profile information changes. This functionality is only available to travel suppliers that have an application on the App Center tab of Concur. The supplier must also have received authorization by the user to access their travel profile information.

**NOTE**: Concur will send a notification when any area of the user's Travel Profile is updated. This may include fields that are not available through the Travel Profile web service.

| Query Parameters - Required | Query Parameters - Optional |
| --------------------------- | --------------------------- |
| * **type=profile**<br>The type of subscription.<br><br>**Examples**<br>To subscribe:<br>https://www.concursolutions.com/api/travelprofile/v1.0/subscribe?type=profile<br>To unsubscribe:<br>https://www.concursolutions.com/api/travelprofile/v1.0/unsubscribe?type=profile | None |

| Request Headers - Required | Request Headers - Optional |
| -------------------------- | -------------------------- |
|  Authorization header with OAuth token for the desired Concur user. This token is granted as part of the [OAuth from the App Center][1] process. |  None |

###  XML Example Request

    POST https://www.concursolutions.com/api/travelprofile/v1.0/subscribe?type=profile HTTP/1.1
    Authorization: OAuth {access token}

##  Post Notification Subscription for Travel Profile Changes Response

### HTTP Responses
[HTTP Status Codes][2]

### Content Body
This request will return an HTTP code. Refer to [HTTP Codes][2] for more details.

### Notification Format
The notification will be sent to the Postback URL that the supplier has registered with Concur during application review. Suppliers can only have one postback URL for all notification types. The notification will include the **type** and **oauth_token_key** query parameters, specifying the OAuth information for the updated user:

https://postbackurl.com?type=Profile&oauth_token_key={oauth_token}

####  XML Example of Successful Response

    200 OK


[1]: https://developer.concur.com/oauth-20/web-flow
[2]: https://developer.concur.com/reference/http-codes
