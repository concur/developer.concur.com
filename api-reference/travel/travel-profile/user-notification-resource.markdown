---
title: User Notification Resource 
layout: resource
---



## Description
A subscription to a notification when the Concur user changes the specified features of their Concur account or data. Currently supports notifications for the following events: Itinerary change (create or update), Travel Profile basic information change, or Travel Profile Form of Payment change. This functionality is restricted to Travel Suppliers or TMCs (Travel Management Companies) who have registered with Concur.

**NOTE**: This resource can only be accessed by partner applications that have selected the User API scope.

## Works With These Concur Products

* **Travel** for Concur Professional/Premium
* **Travel** for Concur Standard

## Resource URI
* To subscribe:  `https://www.concursolutions.com/api/user/v1.0/subscribe`
* To unsubscribe: `https://www.concursolutions.com/api/user/v1.0/unsubscribe`

## Headers

### Content-Type header
application/xml

### Accept header
application/xml

## Operations
[POST][1]

## Related Resources

* [Booking][2]
* [Form of Payment][3]
* [Itinerary][4]
* [Travel Profile][5]



[1]: https://developer.concur.com/travel-profile/user-notification-resource/user-notification-resource-post
[2]: https://developer.concur.com/itinerary-tmc-and-third-party-developers/booking-resource
[3]: https://developer.concur.com/travel-profile/form-payment-resource
[4]: https://developer.concur.com/itinerary-tmc-and-third-party-developers/itinerary-resource
[5]: https://developer.concur.com/travel-profile/profile-resource
