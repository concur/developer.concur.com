---
title: Direct Connect - Hotel v2 - Use Cases
layout: reference
---

{% include prerelease.html %}

Basic scenario encompassing all the functionality provided by Hotel Service 2 incorporated into Concur Travel starting from a hotel search, through to confirmation of a booking and ending with a cancellation.

* [Actors](#actors)
* [Use Case](#use-case)
* [Search Criteria](#search-criteria)
* [Reservation and Read Requests](#reservation-read-requests)
* [General System Overview](#general-system-overview)

### <a name="actors"></a>Actors

1. Primary Actor - Business traveler
1. Secondary Actor - Hotel Supplier

### <a name="use-case"></a>Use Case

1. Business traveler performs a search for hotels given a criteria.  

1. The UI displays the available hotels.  The business traveler can then select a hotel with visible rates or request to View Rooms in case they are not present.  The Business traveler selects a hotel with rates.

1. The UI displays all available rates for the chosen hotel.  The Business user can see the Cancellation Policy.  The business traveler clicks on Hotel Details.

1. The UI displays the hotel details including a long description.  The Business traveler closes the Hotel Details pop-up

1. The UI displays all available rates for the chosen hotel. The business traveler clicks on Rules and Cancellation Policy.

1. The UI displays the Rules and the Cancellation Policy for the chosen hotel.  The Business Travel closes the Rules and Cancellation Policy pop-up.

1. The UI displays all available rates for the chosen hotel.  The Business traveler selects the top most rate.  The Trip Summary page is displayed where the Business traveler can set the Hotel Preferences, Enter Guest information (from their profile), select the method of payment and view the total estimated price.  The Business traveler agrees to the hotel's rate rules, restrictions and cancellation policy and clicks Reserve Hotel and Continue.

1. The UI shows the Trip Details page where the Business traveler can add items to their itinerary and review the current itinerary.  The Business traveler clicks Next.

1. The UI shows the Trip Booking Information page where the Business traveler can add trip details.  The Business traveler clicks Next.

1. The UI shows the Trip Confirmation page where the Business traveler can confirm the booking on cancel it.  The Business traveler clicks Confirm Booking.

1. The UI shows the Finished page where the Business traveler can review the trip overview and see the confirmation number along with the trip locator.

1. The Business user can view the trip in the Upcoming Trips tab on the main Travel page.  The Business traveler clicks on the Trip name.

1. The UI shows the Trip Overview page.  The Business traveler chooses the cancel the hotel reservation, by clicking cancel.

1. The UI shows the Cancel Trip pop-up where the Business traveler may chooser to enter a comment. The Business traveler clicks OK.

1. The UI shows the Rules and cancellation policy.  The Business traveler accepts the policies by checking the 'I agree ...' button and clicking Continue

1. The UI shows the trip cancellation page where confirmation and cancellation numbers can be found.  The Business traveler closes the pop-up.


## <a name="search-criteria"></a>Search Criteria

Given the following example:

`<RadiusDistance="5" DistanceMax="30" UnitOfMeasureCode="2">`

Out of 100 returned hotels in response from the Hotel Supplier first 10 hotels are Most Preferred hotels within the 30km radius. The next 10 hotels are Preferred hotels from 30km radius. The remaining 80 hotels are hotels with no preference within the 5km radius. Note: The preference level is defined by the HotelPreference element in the TPA_Extensions, which is outlined in Search.


## <a name="reservation-read-requests"></a>Reservation and Read Requests

SAP Concur will follow up a Reservation Request with a Read request as soon as possible after processing the Reservation Response. If a Read request does not arrive within 5 minutes for a given Reservation, then the supplier should treat that Reservation as an orphan and should thus seek to cancel it.


# <a name="general-system-overview"></a>General System Overview

![./media/image1.png](./images/diagrams/hs2-sequence-diagram.png)
