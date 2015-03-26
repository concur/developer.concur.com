---
layout: conceptual
title: Itinerary FAQs
---
### When do I send trips versus bookings?

•  TMCs, OTA, or partners that own or manage the entire trip on behalf of the traveler should send trips. 
•  Travel suppliers such as hotels, car vendors or airlines that own only parts of the trips should send bookings. 
•  Posted bookings are merged with any existing trips if their dates overlap. 
•  Posted trips are not merged even if a trip already exists with overlapping dates. 

### Can other TripLink suppliers see all the booking details of my bookings?

The Itinerary Web service returns the full booking details to the supplier who will provide the booked service. Suppliers that are not the service provider will receive a subset of the possible fields. These vary by the type of booking relative to the type of supplier. For example, Air booking suppliers that are not the supplier will not see the following fields:
•  Vendor 
•  FlightNumber 
•  StartDateLocal 
•  StartDateUtc 

### How can we save additional charges for hotel and car segments? What types of charges are supported?

The Charges element under Car and Hotel segments allow you to save additional charges using Semantics Codes. Refer to the Semantics and Vendor Codes document for more information.

### What vendor codes can I use when sending hotel and car segments?

Refer to the Semantics and Vendor Codes document for the full list.

### Can I view a trip posted through the Itinerary Web service in the Concur UI? 

Yes. The user who owns the trip will see the trip on their My Concur page. If the trip is in the future, it will show under the upcoming trip list. Trips that are ready to expense will show in the expense report list.

### When can a trip be expensed?

Trips can be expensed after the trip is over under the following conditions:

•  The trip has a Car, Hotel or Ride segment. 
•  The trip has an Air segment with a ticket and the ticket has at least one valid ticket coupon, meaning the coupon is in one of the following statuses: 
•	OPEN
•	USED
•	PRTD
•	StartDateUtc

Air segments can be expensed as soon as they have a ticket with a valid coupon, if the company uses the PreExpenseAir option.

### Why is my new booking not showing in the UI? The request returned successfully with HTTP status - 200 OK.
Posted bookings are automatically merged with any existing trip with overlapping dates. Most likely, a trip exists with the same dates and the booking has been added to it.

### Will posted bookings be overwritten by emailed or TripIt trips?

No.

### Will posted bookings merge with existing Cliqbook or TripIt trips?

Yes.

### Will posted trips merge with existing trips?

No.
