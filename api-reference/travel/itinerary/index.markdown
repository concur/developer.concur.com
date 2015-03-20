---
layout: conceptual
title: Itinerary
---

## Overview

The Concur Itinerary web service can be used to programmatically access travel data such as trips and bookings in the Concur travel system. The Concur Travel system uses this data to match and consolidate bookings it receives from disparate sources and put these into consolidated travelers’ itineraries, providing travelers a convenient way to view their trips in a single itinerary view. Travelers can view their itineraries through mobile applications or other services. The following diagram provides a graphical overview of the Concur Itinerary web service:

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

## Version

Version 1.0

## Resources

* Trip
* Booking

## See also

Travel Profile

[Connection Requests][7]

Itinerary Web Service FAQs

Itinerary Reference



[1]: https://developer.concur.com/draft-documentation/itinerary/itinerary-faqs
[2]: https://developer.concur.com/forums/concur-connect
[3]: https://www.concur.com/en-us/connect-platform/suppliers
[7]: http://concur.github.io/developer.concur.com/api-reference/common/connection-requests/connection-requests-resource
