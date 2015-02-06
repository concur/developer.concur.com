---
title: Company Notification Subscription Resource
layout: operation
---




This resource supports the following POST actions:

##  Post Company Notification Subscription for Itinerary Changes Request

| ----- |
|  Description |
|  Subscribes or unsubcribes the partner from notifications when any users in the company add, modify, or cancel an itinerary. The partner must have received authorization using [OAuth][1] by an administrative user at the company to access the company's trip information. |
|  Query Parameters - Required |  Query Parameters - Optional |
|

* **type=itinerary**  
The type of subscription.

**Examples**  
To subscribe:  
https://www.concursolutions.com/api/company/v1.0/subscribe?type=itinerary  
To unsubscribe:  
https://www.concursolutions.com/api/company/v1.0/unsubscribe?type=itinerary

 |  None |
|  Request Headers - Required |  Request Headers - Optional |
|  Authorization header with OAuth token for an administrative user at the company. The user must have one of the following user roles in Concur: Company Administrator or Web Services Administrator for Professional, or Can Administer for Standard. |  None |

####  XML Example Request

    POST <http://www.concursolutions.com/api/company/v1.0/subscribe?type=itinerary> HTTP/1.1
    Authorization: OAuth {access token}
    ...

##  Post Company Notification Subscription for Itinerary Changes Response

| ----- |
|  HTTP Responses |
|  [HTTP Status Codes][2] |
|  Content Body |
|  This request will return an HTTP code. Refer to [HTTP Codes][2] for more details. |
|  Notification Format |
|  The notification will be sent to the Postback URL that the partner has registered with Concur during application review. Partners can only have one postback URL for all notification types. The notification will include the **type**, **oauth_token_key**, **userid_type**, and **userid_value** query parameters, specifying the updated user:

https://postbackurl.com?type=itinerary&oauth_token_key={oauthtoken}&userid_type=login&userid_value=cm@example.com

The request body will include a **Notification** parent element, with the following child elements:

|  Element |  Description |
|  ObjectType |  ITINERARY |   |
|  ObjectURI |  The URI for the object. The developer can use the appropriate GET endpoint with the ObjectURI to get complete details for the trip. |
|  EventDateTime |  When the event happened. Format: YYYY-MM-DDThh:mm:ss |
|  EventType |  The type of the change. Format: CREATE, UPDATE, CANCEL |
|  Context |  This is not used yet but will be used in future to specify the change in the trip. Developers can use this in conjuction with EventType to decide how to process the notification. |
|  TripId |  The unique identifier for the trip. Format: String |

 |

####  XML Example of Successful Response

    200 OK

####  XML Example of Notification

    POST  https://www.postbackurl.com?type=itinerary&oauth_token_key={oauthtoken}&userid_type=login&userid_value=cm@example.com HTTP/1.1

    <?xml version="1.0" encoding="utf-8"?>
    <Notification>
        <ObjectType>ITINERARY</ObjectType>
        <ObjectURI>https://www.concursolutions.com/api/travel/trip/v1.1/naIzQJ0y2DBWjCIQOb2SHTsozwBsHDkdP</ObjectURI>
        <EventDateTime>2013-02-13T08:12:35</EventDateTime>
        <EventType>CREATE</EventType>
        <Context/>
        <TripId>naIzQJ0y2DBWjCIQOb2SHTsozwBsHDkdP</TripId>
    </Notification>

##  Post Company Notification Subscription for Travel Profile Changes Request

| ----- |
|  Description |
|  Subscribes or unsubcribes the partner from notifications when the company's Travel Profile information changes. The partner must have received authorization using [OAuth][1] by an administrative user at the company to access the company's trip information.

**NOTE**: Concur will send a notification when any area of the user's Travel Profile is updated. This may include fields that are not available through the Travel Profile web service.

 |
|  Query Parameters - Required |  Query Parameters - Optional |
|

* **type=profile**  
The type of subscription.

**Examples**  
To subscribe:  
<https://www.concursolutions.com/api/company/v1.0/subscribe?type=profile>  
To unsubscribe:  
<https://www.concursolutions.com/api/company/v1.0/unsubscribe?type=profile>

 |  None |
|  Request Headers - Required |  Request Headers - Optional |
|  Authorization header with OAuth token for an administrative user at the company. The user must have one of the following user roles in Concur: Company Administrator or Web Services Administrator for Professional, or Can Administer for Standard. |  None |

####  XML Example Request

    POST <https://www.concursolutions.com/api/company/v1.0/subscribe?type=profile> HTTP/1.1
    Authorization: OAuth {access token}
    ...

##  Post Company Notification Subscription for Travel Profile Changes Response

| ----- |
|  HTTP Responses |
|  [HTTP Status Codes][2] |
|  Content Body |
|  This request will return an HTTP code. Refer to [HTTP Codes][2] for more details. |
|  Notification Format |
|  The notification will be sent to the Postback URL that the partner has registered with Concur during application review. Partners can only have one postback URL for all notification types. The notification will include the **type**, **oauth_token_key**, **userid_type**, and **userid_value** query parameters, specifying the updated user:

https://postbackurl.com?type=profile&oauth_token_key={oauthtoken}&userid_type=login&userid_value=cm@example.com

The partner can use this information to make a [Get Travel Profile][3] request.

 |

####  XML Example of Successful Response

    200 OK



[1]: https://developer.concur.com/oauth-20
[2]: https://developer.concur.com/reference/http-codes
[3]: https://developer.concur.com/travel-profile/profile-resource/get-travel-profile
