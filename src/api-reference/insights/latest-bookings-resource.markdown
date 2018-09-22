---
title: Latest Bookings 
layout: reference
---

# Latest Bookings

Gets the latest hotel and air booking for a particular user.

* [Retrieve the latest hotel and air booking for a particular user](#get)
* [Schema](#schema)

### Version
3.0

## <a name="get"></a>Retrieve the latest hotel and air booking for a particular user

    GET   /api/v3.0/insights/latestbookings/

        
### Parameters

Name | Type | Format | Description
-----|------|--------|------------			
`user`	|	`string`	|	`query`	|	The login ID of the user. The user must have the Web Services Admin (Professional) or Can Administer (Standard) user role to use this parameter.

## <a name="schema"></a>Schema


### <a name="latestbooking"></a>Latest Booking

Name | Type | Format | Description
-----|------|--------|------------
`Airlines`	|	`array`	|[Airline](#airline)	|	The latest booked airline segments.
`Hotel`	|	`Hotel`|	-	|	The latest booked hotel segment.


### <a name="airline"></a>Airline

Name | Type | Format | Description
-----|------|--------|------------
`BookingClass`	|	`string`	|	-	|	The booking class of the latest booked airline segment.
`Code`	|	`string`	|	-	|	The airline code of the latest booked airline segment.


### <a name="hotel"></a>Hotel

Name | Type | Format | Description
-----|------|--------|------------
`Location`	|	`string`	|	-	|	The IATA airport code of the location of the latest booked hotel segment.
`StarRating`	|	`Int32`	|	-	|	The star rating of the latest booked hotel segment. Possible values are from 0 - 5. Values 1 - 5 are mapped to the Northstar standard. If the value is 0, the star rating could not be found.



