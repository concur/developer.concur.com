---
title: Use Cases
layout: reference
---



# Use cases


Move this to use cases and define a scenario where there is no DistaneMax specified

Given the following example: <RadiusDistance="5"DistanceMax="30"UnitOfMeasureCode="2">Out of 100 returned hotels in response from Hotel Supplier first 10 hotels are Most Preferred hotels from 30 km radius. Next 10 hotels are Preferred hotels from 30kmradius.Other 80 hotels are hotels with no preference within the 5km radius. Note: The preference level is defined by the HotelPreference element in the TPA_Extensions, which is outlined below


Reservation and Read requests

Concur will follow up a Reservation Request with a Read request as soon as possible after processing the Reservation Response. If a Read request does not arrive within 5 minutes for a given Reservation, then the supplier should treat that Reservation as an orphan and should thus seek to cancel it.



Basic Flow

Configuration


Usage

Basic scenario encompassing all the functionality provided by Hotel Service 2 incorporated into Concur Travel. 

1. Primary Actor - Business traveler
2. Secondary Actor - Hotel Supplier


1.1 Business traveler performs a search for hotels given a criteria.  

1.2 The UI displays the available hotels.  The business traveler can then select a hotel with visible rates or request to View Rooms in case they are not present.  The Business traveler selects a hotel with rates.

1.3 The UI displays all available rates for the chosen hotel.  The Business user can see the Cancellation Policy.  The business traveler clicks on Hotel Details.

1.4 The UI displays the hotel details including a long description.  The Business traveler closes the Hotel Details pop-up

1.5 The UI displays all available rates for the chosen hotel. The business traveler clicks on Rules and Cancellation Policy.

1.6 The UI displays the Rules and the Cancellation Policy for the chosen hotel.  The Business Travel closes the Rules and Cancellation Policy pop-up.

1.7 The UI displays all available rates for the chosen hotel.  The Business traveler selects the top most rate.  The Trip Summary page is displayed where the Business traveler can set the Hotel Preferences, Enter Guest information (from their profile), select the method of payment and view the total estimated price.  The Business traveler agrees to the hotel's rate rules, restrictions and cancellation policy and clicks Reserve Hotel and Continue.

1.8 The UI shows the Trip overview page where the Business traveler can add items to their itinerary, review the current itinerary.  The Business traveler clicks Next.

1.9 The UI shows the Finished page where the Business traveler can review the trip overview and see the confirmation number.

1.10 The Business user can view the trip in the Upcoming Trips tab on the main Travel page.  The Business traveler clicks on the Trip name. <this needs to be Business traveler needs to confirm the booking>

1.11 The UI shows Trip Confirmation page where a summary of the reservation can be seen. This page offers completion and cancellation of the booking. The Business travel clicks Confirm Booking.

1.12 The UI shows the Trip Overview page.  The Business traveler chooses the cancel the hotel reservation, by clicking cancel.

1.13 The UI shows the Cancel Trip pop-up where the Business traveler may chooser to enter a comment. The Business traveler clicks OK.

1.14 The UI shows the Rules and cancellation policy.  The Business traveler accepts the policies by checking the 'I agree ...' button and clicking Continue

1.15 The UI shows the trip cancellation page where confirmation and cancellation numbers can be found.  <The Business traveler closes the pop-up and is now on the Trip page> -- check if the confirmation page is a pop-up and after closing where does the user end up?










 
# General system overview 

![./media/image1.png](./images/diagrams/hs2-sequence-diagram.png)
