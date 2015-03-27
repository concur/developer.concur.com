---
layout: conceptual
title: Itinerary Web Service
---

## Overview

The Concur Itinerary web service can be used to programmatically access travel data such as trips and bookings in the Concur travel system. The Concur Travel system uses this data to match and consolidate bookings it receives from disparate sources and put these into consolidated travelers’ itineraries, providing travelers a convenient way to view their trips in a single itinerary view. Travelers can view their itineraries through mobile applications or other services. The following diagram provides a graphical overview of the Concur Itinerary web service:

## Version

Version 1.0

## Resources

[Trip] [6]

[Booking] [8]

## Concepts

### Itineraries and trips

The terms itinerary and trip are synonyms. Trip is the name used for the Concur web serice resource that represents an itinerary.

### Itinerary, booking record, and segment

* An _itinerary_ is the container for all bookings in a trip. An itinerary can have more than one booking.
* A _booking record_ is the container for all segments booked with from a source with the same unique identifier (_record locator_ or _confirmation number_). A single booking can have multiple segments.
* A _segment_ includes details about the travel booking.

## Who can use this web service?

TripLink suppliers, travel management companies (TMCs), and Concur partners can use the Concur Itinerary web service. The level of access to the data in the Concur Travel system on who is accessing it and the Concur products that have been purchased. This section lists the primary oprationss these API users can perform. For frequently-asked questions about using the Itinerary web service, see [Itinerary Web Service FAQs][1].

### Travel management companies (TMCs)

* Can view and post bookings for any travel type.
* Send new reservations that users create on the supplier's site to Concur.
* Send a notice of trip cancellations to Concur.
* Get a list of current trips for a user from Concur.
* Get the full details of user trips from Concur.
* Can view the full set of fields for their customers' itineraries because TMCs have an existing relationship with their customers.
* Can send proposed itineraries when the Agency Proposal feature of Travel Request is active.
* Can cancel bookings on behalf of a user.

### TripLink travel suppliers

* Can post bookings for their travel type.
* Get limited itinerary details.
* Get the full details of the bookings that they own, but see a limited set of fields and data for other bookings.
* Modify bookings.
* Cancel bookings for their travel type.

### Third-party developers 

* Request trip information for Concur users.
* Partner developers must determine which configurations are required for their solution prior to the review process. Use the [Developer Forum][2] if you have questions about the configuration settings.

If you are a TMC or a Concur partner developer who would like to start using this web service, please visit: [http://www.concur.com/en-us/connect-platform/suppliers][3] or contact the Concur Connect Platform Team. Concur products are highly configurable, and not all clients will have access to all features.

## Authentication and authorization

The Itinerary web service uses OAuth 2.0 for authenticating users and authorizing access to travel data.

### Authorization for TMCs

TMCs can request or send travel bookings in two ways:

* By using an OAuth token for the user the travel booking belongs to. This token allows access to the user's data.
* By using an OAuth token for a user with an administrative role at the company, which allows access to company-wide information. The user who authenticates during this OAuth process must have a Concur account with one of the following user roles: **Web Services Administrator** for Professional, or **Can Administer** for Standard.

### Authorization for TripLink suppliers

The travel supplier can request or send travel bookings by using an OAuth token for the user the travel booking belongs to, generated with the user's involvement.

## Configuration

* If you are a TMC, third-party developer, or a TripLink supplier who would like to start using this web service, please visit: [http://www.concur.com/en-us/connect-platform/suppliers][3] or contact the Concur Connect Platform Team.
* Concur products are highly configurable, and not all Concur clients will have access to all features.
* Partner developers must determine which configurations are required for their solution prior to the review process. Use the [Developer Forum][2] if you have questions about the configuration settings.

## FAQs

#### When do I send trips versus bookings?

* TMCs, OTA, or partners that own or manage the entire trip on behalf of the traveler should send trips. 
* Travel suppliers such as hotels, car vendors or airlines that own only parts of the trips should send bookings. 
* Posted bookings are merged with any existing trips if their dates overlap. 
* Posted trips are not merged even if a trip already exists with overlapping dates. 

#### Can other TripLink suppliers see all the booking details of my bookings?

The Itinerary Web service returns the full booking details to the supplier who will provide the booked service. Suppliers that are not the service provider will receive a subset of the possible fields. These vary by the type of booking relative to the type of supplier. For example, Air booking suppliers that are not the supplier will not see the following fields:
* Vendor 
* FlightNumber 
* StartDateLocal 
* StartDateUtc 

#### How can we save additional charges for hotel and car segments? What types of charges are supported?

The Charges element under Car and Hotel segments allow you to save additional charges using Semantics Codes. Refer to the Semantics and Vendor Codes document for more information.

#### What vendor codes can I use when sending hotel and car segments?

Refer to the Semantics and Vendor Codes document for the full list.

#### Can I view a trip posted through the Itinerary Web service in the Concur UI? 

Yes. The user who owns the trip will see the trip on their My Concur page. If the trip is in the future, it will show under the upcoming trip list. Trips that are ready to expense will show in the expense report list.

#### When can a trip be expensed?

Trips can be expensed after the trip is over under the following conditions:

* The trip has a Car, Hotel or Ride segment. 
* The trip has an Air segment with a ticket and the ticket has at least one valid ticket coupon, meaning the coupon is in one of the following statuses: 
* OPEN
* USED
* PRTD
* StartDateUtc

Air segments can be expensed as soon as they have a ticket with a valid coupon, if the company uses the PreExpenseAir option.

#### Why is my new booking not showing in the UI? 

The request returned successfully with HTTP status - 200 OK.
Posted bookings are automatically merged with any existing trip with overlapping dates. Most likely, a trip exists with the same dates and the booking has been added to it.

#### Will posted bookings be overwritten by emailed or TripIt trips?

No.

#### Will posted bookings merge with existing Cliqbook or TripIt trips?

Yes.

#### Will posted trips merge with existing trips?

No.

## See also

[Travel Profile] [4]

[Connection Requests][7]

[Itinerary Web Service FAQs] [1]

[Itinerary Reference] [5]



[1]: http://concur.github.io/developer.concur.com/api-reference/travel/itinerary/reference/itinerary-FAQs.html
[2]: https://developer.concur.com/forums/concur-connect
[3]: https://www.concur.com/en-us/connect-platform/suppliers
[4]: http://concur.github.io/developer.concur.com/api-reference/travel/travel-profile/index.html
[5]: http://concur.github.io/developer.concur.com/api-reference/travel/itinerary/reference/itinerary-reference.html
[6]: http://concur.github.io/developer.concur.com/api-reference/travel/itinerary/trip/trip-resource.html
[7]: http://concur.github.io/developer.concur.com/api-reference/common/connection-requests/connection-requests-resource
[8]: http://concur.github.io/developer.concur.com/api-reference/travel/itinerary-tmc-and-third-party-developers/booking-resource.html
