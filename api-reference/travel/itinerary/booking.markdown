# Booking
The Booking resource represents booking segments in the Concur Travel system. TripLink suppliers use this resource to display a subset of the full booking fields.

TOC
* Create a new air booking
* Create a new car booking
* Create a new hotel booking
* Create a new rail booking
* Retrieve a booking
* Update an existing booking
* Cancel a booking

## Create a new booking

POST /api/travel/booking/v1.0?tripId=12345678

### Parameters

Name | Type | Description
-----|------|--------------
`tripId`|`string` | The unique identifier for the trip. Supplied in order to add a booking to an existing trip.
`userid_type` | `` |
`userid_value` | `` |

### Request

Name | Type | Description
-----|------|--------------
`BookingSource`|`type` | Required The supplier's name.
`ItinSourceName`|`type` | Required The itinerary source. Format: TravelSupplier
`RecordLocator`|`type` | Required Record locator for this booking. This is often six alphameric characters but can have other formats depending on the booking source.
`DateBookedLocal`|`type` | The date the booking was created, in the booking location's local time. Format: YYYY-MM-DDThh:mm:ss.
`FormOfPaymentName`|`type` | The name of the form of payment for the booking.
`FormOfPaymentType`|`type` | The type of the form of payment.
`TicketMailingAddress` |`type` |  The mailing address for the booked ticket, if available.
`TicketPickupLocation` |`type` |   The pickup location for the booked ticket, if available.
`TicketPickupNumber` |`type` |   The confirmation number to pick up the booked ticket, if available.
`AirfareQuotes` |`type` |   List of stored airfare quotes for this booking.
`AirlineTickets` |`type` |   List of Airline Tickets for this booking.
`Charges` |`type` |   List of Charges for this booking.
`MiscChargeOrders` |`type` |   List of Miscellaneous AirCharges for this booking.
`Passengers` |`type` |  The *Passengers* element contains child element for each booked passenger. The description of each child element can be seen in a subsequent table.
`PassPrograms` |`type` |   List of Pass Programs for this booking.
`PhoneNumbers` |`type` |   List of Phone numbers associated with this booking.
`RailPayments` |`type` |   List of Rail payments associated with rail segments in this booking.
`Segments` |`type` |   List of Segments in this booking. This parent element contains one or more **Air**, **Car**, **Hotel**, **Dining**, **Ride**, **Rail**, **Parking**, or **Event** parent elements for the booking. Refer to [Booking Object Elements][1] for more information about the child elements contained in the booking elements.
`WaitListSegments` |`type` |  The segments that the traveler is waitlisted for this booking.
`Warnings` |`type` |  The warnings associated with the booking.
`WebAddresses` |`type` |  List of web addresses such as emails, pickup urls, etc.. associated with this bookings.


### Response

## Get a booking

POST /api/travel/booking/v1.0?tripId=12345678

### Parameters

Name | Type | Description
-----|------|--------------
`name`|`type` | Description.

### Input (request JSON body)

Name | Type | Description
-----|------|--------------
`name`|`type` | Description.

### Response

## Update an existing booking


POST /api/travel/booking/v1.0?tripId=12345678

### Parameters

Name | Type | Description
-----|------|--------------
`name`|`type` | Description.

### Input (request JSON body)

Name | Type | Description
-----|------|--------------
`name`|`type` | Description.

### Response

## Cancel a booking


POST /api/travel/booking/v1.0?tripId=12345678

### Parameters

Name | Type | Description
-----|------|--------------
`name`|`type` | Description.

### Input (request JSON body)

Name | Type | Description
-----|------|--------------
`name`|`type` | Description.

### Response
