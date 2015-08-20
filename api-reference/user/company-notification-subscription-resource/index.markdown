---
title: Company Notification Subscription Resource 
layout: reference
--- 

##Description 

A subscription to a notification when any user in the Concur company changes the specified features of their Concur account or data. Currently supports notifications for the following events: Itinerary change (create or update), Travel Profile basic information change.

This functionality requires that the partner complete the OAuth process with an administrative user from the Concur company. This resource can only be accessed by partner applications that have selected the User API scope.

##Version
1.0

##URI
To subscribe:  
`https://www.concursolutions.com/api/company/v1.0/subscribe`

To unsubscribe:  
`https://www.concursolutions.com/api/company/v1.0/unsubscribe`

##Content Type
application/xml
 
##Operations
[POST](/api-reference/user/company-notification-subscription-resource/company-notification-subscription-resource-post.html)



