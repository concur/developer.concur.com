---
layout: conceptual
title: Itinerary Web Service
---

## Description
The Concur Itinerary Web service can be used to view and create itineraries, trips, and bookings in the Concur Travel system. The itineraries in Concur Travel can contain more than one trip, and trips can contain multiple bookings.

The level of access to Concur Itinerary information depends on type of company that is trying to access the information and the Concur products that have been purchased:

* Travel Management Companies (TMC):
  * Can view and post bookings for any travel type.
  * Can view the full set of fields for their customers' itineraries because TMCs have an existing relationship with their customers.
  * Can send proposed itineraries using the Itinerary Web service, when the Agency Proposal feature of Travel Request is active. Refer to the [Post Itinerary][1] documentation for more information.
* TripLink Travel Suppliers:
  * Can post bookings for their travel type and get limited itinerary details. Suppliers can always see the full details of the bookings that they own, but see a limited set of fields and data for other bookings. Refer to the [TripLink - Open Booking][2] resources for more information.
* Third-Party Developers:
  * Can request trip information for Concur users.

## Version  
1.0

## Resources

* [Trip][7]
* [Booking][8]

## Configuration
Detailed descriptions of requests and responses are available in the documentation for each function. Developers can also view the [Public Itinerary XSD][3]. Internet Explorer users should right-click the link and choose **Save Target As...** to view the XSD.

Concur products are highly configurable, and not all clients will have access to all features. Partner developers must determine which configurations are required for their solution prior to the review process. Use the [Developer Forum][6] if you have questions about the configuration settings.

If you would like to start using this Web service, please visit [Concur Connect for Suppliers][5] or contact the Concur Connect Platform Team.

## Authentication
The Itinerary Web service supports [OAuth 2.0][4]. 

### Authentication for TMCs and Third-Party Developers
The travel supplier can request or send travel bookings in two ways:

* By using an OAuth token for the user the travel booking belongs to. This token allows access to the user's data.
* By using an OAuth token for a user with an administrative role at the company, which allows access to company-wide information. The user who authenticates during this OAuth process must have a Concur account with one of the following user roles: Web Services Administrator for Professional, or Can Administer for Standard.

### Authentication for TripLink Suppliers
The travel supplier can request or send travel bookings by using an OAuth token for the user the travel booking belongs to, generated with the user's involvement.

## Itinerary FAQ

**When do I send trips versus bookings?**

* TMCs, OTA, or partners that own or manage the entire trip on behalf of the traveler should send trips.
* Travel suppliers such as hotels, car vendors or airlines that own only parts of the trips should send bookings.
* Posted bookings are merged with any existing trips if their dates overlap.
* Posted trips are not merged even if a trip already exists with overlapping dates.

** Can other suppliers see all the booking details of my bookings? (For TripLink Suppliers only)**

The Itinerary Web service returns the full booking details to the supplier who will provide the booked service. Suppliers that are not the service provider will receive a subset of the possible fields. These vary by the type of booking relative to the type of supplier. For example, Air booking suppliers that are not the supplier will not see the following fields:

* Vendor, FlightNumber, StartDateLocal, and StartDateUtc

**How can we save additional charges for hotel and car segments? What types of charges are supported?**

The Charges element under Car and Hotel segments allow you to save additional charges using Semantics Codes. Refer to the [Semantics and Vendor Codes][9] document for more information.

**What vendor codes can I use when sending hotel and car segments?**

Refer to the [Semantics and Vendor Codes][9] document for the full list.

**Can I view a trip posted through the Itinerary Web service in the Concur UI?**

Yes. The user who owns the trip will see the trip on their My Concur page. If the trip is in the future, it will show under the upcoming trip list. Trips that are ready to expense will show in the expense report list.

**When can a trip be expensed?**

Trips can be expensed **after the trip is over** under the following conditions:

* The trip has a Car, Hotel or Ride segment.
* The trip has an Air segment with a ticket and the ticket has at least one valid ticket coupon, meaning the coupon is in one of the following statuses: OPEN, USED, PRTD, CKIN.

Air segments can be expensed as soon as they have a ticket with a valid coupon, if the company uses the PreExpenseAir option.

**Why is my new booking not showing in the UI? The request returned successfully with HTTP status - 200 OK.**

Posted bookings are automatically merged with any existing trip with overlapping dates. Most likely, a trip exists with the same dates and the booking has been added to it.

**Will posted bookings be overwritten by emailed or TripIt trips?** 

No.

**Will posted bookings merge with existing Cliqbook or TripIt trips?** 

Yes.

**Will posted trips merge with existing trips?** 

No.



[1]:https://developer.concur.com/itinerary-tmc-and-third-party-developers/itinerary-resource/itinerary-resource-post
[2]:https://developer.concur.com/itinerary-triplink-suppliers/booking-resource-triplink/booking-resource-triplink-open-booking-post
[3]:https://developer.concur.com/sites/default/files/ItinServices_Public_0.xsd
[4]:https://developer.concur.com/oauth-20
[5]:http://www.concur.com/en-us/connect-platform/suppliers
[6]:https://developer.concur.com/docs-and-resources/forums
[9]:https://developer.concur.com/sites/default/files/SemanticsAndVendorCodes.pdf
