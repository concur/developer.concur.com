[Source](https://developer.concur.com/itinerary-triplink-suppliers "Permalink to Itinerary: TripLink Suppliers | Developer Portal")

# Itinerary: TripLink Suppliers | Developer Portal


| ----- |
|  Description |
|  The Concur Itinerary Web Service allows TripLink - Open Booking suppliers to view and create travel related events in the Concur Travel system. Suppliers can post bookings for their travel type, and get itinerary details.

This documentation is designed for use by the TripLink - Open Booking Suppliers. TMCs and third party developers should use the [TMC Itinerary Web Service][1] documentation instead.

 |
|  Works With These Concur Products |
|

* **Travel** for Concur Professional/Premium
* **Travel** for Concur Standard
* **Expense** for Concur Professional/Premium
* **Expense** for Concur Standard
 |
|  Concur Connect API Structure |
|  Refer to **Web Services > [Core Concepts][2]** for:
* Detailed information regarding the format, structure and process of making calls to a Concur Web Service.
* Information on authentication and authorization for all Concur Web Services.
* Information on registering and enabling partner applications to use Concur Web Services.

Detailed descriptions of requests and responses are available in the documentation for each function.

 |
|  Product Restrictions |
|  This web service is designed for use by TripLink - Open Booking Suppliers. If you are a TripLink - Open Booking Supplier who would like to start using this web service, please visit: <http://www.concur.com/en-us/connect-platform/suppliers> or contact the [Concur Connect Platform Team][3].

Concur products are highly configurable, and not all clients will have access to all features.

Partner developers must determine which configurations are required for their solution prior to the review process. Use the [Developer Forum][4] if you have questions about the configuration settings.

 |
|  Authentication |
|  The Itinerary web service supports [OAuth 2.0][5]. The supplier can request or send travel bookings using an OAuth token for the user the travel booking belongs to, generated with the user's involvement. |
|  Resources |  Additional Information |
|

[Booking][6]

[Itinerary][7] (Trip)

[Notification Subscription][8]

 |

Responses and Errors

Itinerary FAQ

[Booking Object Elements][9]

 |

##  Responses and Errors

Refer to the [HTTP Codes][10] page for details of the common responses and errors.

###  Itinerary FAQ

This section includes answers to frequently asked questions about the Itinerary web service.

####  Can other suppliers see all the booking details of my bookings?

> The Itinerary web service will return the full booking details to a supplier who will provide the booked service. Suppliers that are not the service provider will receive a subset of the possible fields. These vary by type of booking relative to the type of supplier:
>
> * For example, Air booking suppliers that are not the supplier will not see the following fields:
>     * Vendor, FlightNumber, StartDateLocal, and StartDateUtc

####  When do I send Itineraries vs. Bookings?

* TMCs, OTA or partners that own or manage the entire trip on behalf of the traveler should send trips.
* Travel Suppliers such as Hotel, Car Vendors, or Airlines that are the booking source for parts of the trips should send bookings.
* Posted bookings are merged with any existing trips if their dates overlap.
* Posted trips are not merged even if a trip already exists with overlapping dates.

####  What vendor codes can I use when sending air segments?

> Refer to the [Semantics and Vendor Codes][11] document for the full list.

####  Can I view a trip posted through the Itinerary web service in the Concur UI?

> Yes. The user that owns the trip will see the trip on their My Concur page. If the trip is in future it will show under the upcoming trip list. For trips ready to expense they will show in the expense report list.

####  Why does my new booking not showing in the UI? The request returned successfully with HTTP status - 200 OK.

> Posted bookings are automatically merged with any existing trip with overlapping dates. Most likely, a trip exists with the same dates, and the booking has been added to it.

####  Will posted bookings be overwritten by emailed or TripIt trips? 

> No.

####  Will posted bookings merge with existing Cliqbook or TripIt trips? 

> Yes.

####  Will posted trips merge with existing trips? 

> No.

> Return to Top

Last Modified: 10/28/2013 1:19 PM PDT

[1]: https://developer.concur.com/node/510
[2]: https://developer.concur.com/node/25
[3]: mailto: connect@concur.com
[4]: https://developer.concur.com/forums/concur-connect
[5]: https://developer.concur.com/node/491
[6]: https://developer.concur.com/node/552
[7]: https://developer.concur.com/node/551
[8]: https://developer.concur.com/node/504
[9]: https://developer.concur.com/node/546
[10]: https://developer.concur.com/node/205
[11]: https://developer.concur.com/sites/default/files/SemanticsAndVendorCodes.pdf
