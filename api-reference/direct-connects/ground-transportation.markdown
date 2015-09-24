---
title: Ground Transportation Direct Connect 
layout: reference
---


## Description

The Ground Transportation Direct Connect from Concur Connect provides a method for Travel users to access the inventory of ground transportation service providers. This direct connect was originally designed for use by limo service providers, but can be used with all forms of ground transportation.

Once the ground transportation supplier has developed their interface with with Concur, their inventory will begin appearing in ground transportation searches by opted-in Travel users.

This callout differs from the inbound Concur web services in the following ways:

* It uses an **outbound** **message** where Travel calls a public facing API endpoint provided by the ground transportation supplier.
* The supplier configures and maintains the public web service interface. This guide specifies the request and response format required by Concur.

**NOTE**: This direct connect was originally designed to work with Limo providers, but can support all types of ground transportation.


## Configuration

### Works With These Concur Products 
* **Travel** for Concur Professional/Premium
* **Travel** for Concur Standard

### Product restrictions

This direct connect is only available to Travel Suppliers with Ground Transportation inventory. This direct connect is not supported in the Concur mobile application.

Concur products are highly configurable, and not all clients will have access to all features.

Partner developers must determine which configurations are required for their solution prior to the review process. Use the <a href="http://forum.developer.concur.com/" target="_blank">developer forums.</a> if you have questions about the configuration settings.

### Configuration process

The configuration process has the following steps:

1. The Travel Supplier creates the application on their system that will accept the requests from Concur and return the appropriate responses.
2. The Travel Supplier creates the endpoint on their system that Concur uses to access their inventory.
3. Concur creates a production company for the travel supplier.
4. The Travel Supplier registers their application with Concur by logging in to their production company.
5. Concur configures Travel to send requests to the endpoint.
6. The Travel client opts in to the Ground Transportation callout using the Travel Configuration UI to allow their users to view and book the available inventory. Clients must contact Concur to have this setting activated

Once the configuration is complete, the callout uses the following process:

1. The user searches for ground transportation when creating an itinerary in Travel.
2. Travel sends the search details to the endpoint, using the Post Search Request.
3. The supplier returns the search results.
4. If the user chooses to reserve the ride, Travel sends the Post Sell Request.
5. The supplier returns the Post Sell Reply.

This callout can also be used to perform the following operations:

* Get the Reservation Details
* Cancel the Ground Transportation Reservation
* Update the Ground Transportation Reservation with the Supplier
* Update the Ground Transportation Reservation with Travel

## Authentication
Authentication between Concur and the application connector is performed using OAuth.

## Operations

[Cancel Reservation][4]

[Post Reservation Detail Search][5]

[Post Reservation Sell][6]

[Post Transportation Search][7]

[Update Reservation with the Supplier][8]

[Update Reservation with Travel][9]


##  GDS Sell Formats

**Sabre:**  
1 OTH LM 14MAY M GK1 DCA/PCI QA TEST/TEL 201 555 1212/RATE-$0.00/CONF-/PICKUP-209 MADISON ST SUITE 400 ALEXANDRIAVA 22314 AT 0900/DROPOFF-DCA AIRPORT AT 0915/203121365/RESERVATION L1

**Apollo**:  
1 LIM ZM GK1  DCA 09MAY-/PCI QA TEST-TEL 2015551212/RATE-$0.00/CONF-/PICKUP-209 MADISON ST SUITE 400"ALEXANDRIA"VA"22314 AT 0900/DROPOFF-DCA AIRPORT/52695871/RESERVATION L1

**Abacus:**  
1 OTH LM 14MAY M GK1 DCA/PCI QA TEST/TEL 201 555 1212/RATE-$0.00/CONF-/PICKUP-209 MADISON ST SUITE 400 ALEXANDRIAVA 22314 AT 0900/DROPOFF-DCA AIRPORT AT 0915/203121365/RESERVATION L1

**Galileo:**  
TUR ZM AK1  SEA 15DEC-/FALCON DES-TEL 8666932526/RATE-50.00 HOURLY-2 HR MIN/CONF-/PU-18400  AT 0900/DO-SEA/771297634/RES

**Amadeus:**  
2 MIS 1A HK1 LGA 13SEP-LMO CAPITAL LIMOUSINE/TEL-800 225 1656/RATE-USD24.00 FLAT/CONF-132625/PICKUP-55 WALL STREET NEW YORK NY 10005 AT 0530/DROPOFF- LGA AIRPORT AT 0600/RID-132625760

  

[4]: /api-reference/direct-connects/ground-transportation/cancel-reservation.html
[5]: /api-reference/direct-connects/ground-transportation/post-reservation-detail-search.html
[6]: /api-reference/direct-connects/ground-transportation/post-reservation-sell.html
[7]: /api-reference/direct-connects/ground-transportation/post-transportation-search.html
[8]: /api-reference/direct-connects/ground-transportation/update-reservation-supplier.html
[9]: /api-reference/direct-connects/ground-transportation/update-reservation-travel.html
[10]: /tools-support/reference/http-codes.html
