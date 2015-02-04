[Source](https://developer.concur.com/itinerary-tmc-and-third-party-developers "Permalink to Itinerary Web Service: TMC and Third-Party Developers")

# Itinerary Web Service: TMC and Third-Party Developers


| ----- |
|  Description |
|

The Concur Itinerary Web Service allows Travel Management Companies (TMC) and third-party developers to view and create travel related events in the Concur Travel system. TMCs can post bookings for any travel type. This web service can also be used by third party developers to request trip information for Concur users.

TripLink - Open Booking suppliers have access to a targeted set of itinerary and booking information. These suppliers should view the [TripLink - Open Booking Itinerary][1] documentation.

###  Agency Proposals

Travel Management Companies for Concur clients with the Agency Proposal feature of Travel Request can send proposed itineraries using the Itinerary web service. Refer to the [Post Itinerary][2] documentation for more information.

 |
|  Works With These Concur Products |
|

* **Travel** for Concur Professional/Premium
* **Travel** for Concur Standard
* **Travel Request ** for Concur Professional/Premium
 |
|  Concur Connect API Structure |
|  Refer to **Web Services > [Core Concepts][3]** for:
* Detailed information regarding the format, structure and process of making calls to a Concur Web Service.
* Information on authentication and authorization for all Concur Web Services.
* Information on registering and enabling partner applications to use Concur Web Services.

Detailed descriptions of requests and responses are available in the documentation for each function. Developers can also view the [Public Itinerary XSD][4]. Internet Explorer users should right click the link and choose Save Target As... to view the XSD.

 |
|  Product Restrictions |
|  This web service is designed for use by TMCs or third party developers. . If you are a TMC or third-party developer who would like to start using this web service, please visit: <http://www.concur.com/en-us/connect-platform/suppliers> or contact the [Concur Connect Platform Team][5].

Concur products are highly configurable, and not all clients will have access to all features.

Partner developers must determine which configurations are required for their solution prior to the review process. Use the [Developer Forum][6] if you have questions about the configuration settings.

 |
|  Authentication |
|  The Itinerary web service supports [OAuth 2.0][7]. The travel supplier can request or send travel bookings in two ways:

* Using an OAuth token for the user the travel booking belongs to. This token allows access to the user's data.
* Using an OAuth token for a user with an administrative role at the company, which allows access to company-wide information. The user that authenticates during this OAuth process must have a Concur account with one of the following user roles: Web Services Administrator for Professional, or Can Administer for Standard.
 |
|  Resources |  Additional Information |
|

[Booking][8]

[Itinerary][9] (Trip)

[Notification Subscription][10]

 |

Responses and Errors

Itinerary FAQ

[Booking Object Elements][11]

 |

##  Responses and Errors

Refer to the [HTTP Codes][12] page for details of the common responses and errors.

###  Itinerary FAQ

This section includes answers to frequently asked questions about the Itinerary web service.

####  When do I send Trips vs. Bookings?

* TMCs, OTA or partners that own or manage the entire trip on behalf of the traveler should send trips.
* Travel Suppliers such as Hotel, Car Vendors or Airlines that own only parts of the trips should send bookings.
* Posted bookings are merged with any existing trips if their dates overlap.
* Posted trips are not merged even if a trip already exists with overlapping dates.

####  How can we save additional charges for hotel and car segments? What types of charges are supported?

> The Charges element under Car and Hotel segments allow you to save additional charges using Semantics Codes. Refer to the [Semantics and Vendor Codes][13] document for more information.

####  What vendor codes can I use when sending hotel and car segments?

> Refer to the [Semantics and Vendor Codes][13] document for the full list.

####  Can I view a trip posted through the Itinerary web service in the Concur UI?

> Yes. The user that owns the trip will see the trip on their My Concur page. If the trip is in future it will show under the upcoming trip list. For trips ready to expense they will show in the expense report list.

####  When can a trip be expensed?

> Trips can be expensed **after the trip is over** under the following conditions:
>
> * The trip has a Car, Hotel or Ride segment.
> * The trip has air segment with a ticket and the ticket has at least one valid ticket coupon i.e. in one of the following statuses –  'OPEN', 'USED', 'PRTD', 'CKIN'
>
> Air segments can be expensed as soon as they have a ticket with a valid coupon, if the company uses the PreExpenseAir option.

####  Why does my new booking not showing in the UI? The request returned successfully with HTTP status - 200 OK.

> Posted bookings are automatically merged with any existing trip with overlapping dates. Most likely, a trip exists with the same dates, and the booking has been added to it.

####  Will posted bookings be overwritten by emailed or TripIt trips? 

> No.

####  Will posted bookings merge with existing Cliqbook or TripIt trips? 

> Yes.

####  Will posted trips merge with existing trips? 

> No.

> Return to Top

  
Last Modified: 12/17/2013 11:18 PM PDT

[1]: https://developer.concur.com/node/550
[2]: https://developer.concur.com/node/515
[3]: https://developer.concur.com/node/25
[4]: https://developer.concur.com/sites/default/files/ItinServices_Public_0.xsd
[5]: mailto: connect@concur.com
[6]: https://developer.concur.com/forums/concur-connect
[7]: https://developer.concur.com/node/491
[8]: https://developer.concur.com/node/511
[9]: https://developer.concur.com/node/513
[10]: https://developer.concur.com/node/504
[11]: https://developer.concur.com/node/555
[12]: https://developer.concur.com/node/205
[13]: https://developer.concur.com/sites/default/files/SemanticsAndVendorCodes.pdf
