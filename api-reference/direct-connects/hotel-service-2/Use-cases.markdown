---
title: Use Cases
layout: reference
---



# Use cases


Move this to use cases and define a scenario where there is no DistaneMax specified

Given the following example: <RadiusDistance="5"DistanceMax="30"UnitOfMeasureCode="2">Out of 100 returned hotels in response from Hotel Supplier first 10 hotels are Most Preferred hotels from 30 km radius. Next 10 hotels are Preferred hotels from 30kmradius.Other 80 hotels are hotels with no preference within the 5km radius. Note: The preference level is defined by the HotelPreference element in the TPA_Extensions, which is outlined below


Reservation and Read requests

Concur will follow up a Reservation Request with a Read request as soon as possible after processing the Reservation Response. If a Read request does not arrive within 5 minutes for a given Reservation, then the supplier should treat that Reservation as an orphan and should thus seek to cancel it.





# General system overview 

![./media/image1.png](./images/diagrams/hs2-sequence-diagram.png)