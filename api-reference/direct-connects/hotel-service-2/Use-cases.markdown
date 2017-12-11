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

1. Primary Actor - Business traveler
2. Secondary Actor - Hotel Supplier

1.1 Business traveler performs a search for hotels given a criteria.  

1.2 The UI displays the available hotels.  The business traveler can then select a hotel with visible rates or request to get rates in case they are not present.  The Business traveler selects a hotel with rates.

1.3 The UI displays all available rates for the chosen hotel.  The Business user can see the Cancelletation Policy.  The business traveler clicks on Hotel Details.

1.4 The UI displays the hotel details including a long description.  The Business traveler closes the Hotel Details popup


1.5 The UI displays all available rates for the chosen hotel. The business traveler clicks on Rules and Cancellation Policy.

1.6 The UI displays the Rules and the Cancellation Policy for the chosen hotel.  The Business Travel closes the Rules and Cancellation Policy popuop.

1.7 The UI displays all available rates for the chosen hotel.  The Business traveler selects the top most rate.  The Trip Summary page is displayed.  The Business traveler aggress to the hotel's rate rules, restrictions and cancellation policy.  









 
# General system overview 

![./media/image1.png](./images/diagrams/hs2-sequence-diagram.png)
