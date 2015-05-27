---
title: Insights Web Service
layout: reference
---

##Description 

The Concur Insights Web service enhances the value to suppliers participating in TripLink by identifying the opportunity to market the supplier's services to users who have booked some but not all segments of a trip. Concur analyzes the trip data and provides actionable opportunities. This service eliminates the need for suppliers to collect and store trip data from Concur and eliminates the need for suppliers to do this analysis themselves. 

Concur analyzes trips to determine if each trip contains all the segments that are typical for a trip based on the existing bookings. In addition, the service identifies if a  travel services opportunity exists, such as dining. These are available as the Opportunity resource. Other resources will be added in future releases.

Concur TripLink partner suppliers can subscribe to notifications when Concur users that have previously granted the suppliers access to their information create or update bookings that generate insights. Suppliers can also poll regularly for new insights for their opted-in users.


##Product Restrictions
This Web service is designed for use by travel suppliers. If you are a travel supplier who would like to start using this web service, please contact the [Concur Connect Platform Team][2].

Concur products are highly configurable, and not all clients will have access to all features.

Partner developers must determine which configurations are required for their solution prior to the review process. Use the [Developer Forum][3] if you have questions about the configuration settings.

##Authentication 
The Insights Web service implements [OAuth 2.0][4]. The supplier will only be able to access insights for a Concur user if the user has granted the supplier access to their Concur data. 

##Resources 

[Opportunities][5]

[LatestBookings][6]



[2]: mailto:ConcurConnectTech@concur.com
[3]: https://developer.concur.com/forums/concur-connect
[4]: https://developer.concur.com/oauth-20
[5]: https://developer.concur.com/insights/opportunities-resource
[6]: https://www.concursolutions.com/api/docs/index.html

