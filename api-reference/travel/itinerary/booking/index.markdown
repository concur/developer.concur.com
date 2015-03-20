---
layout: resource
title: Booking Resource
---

## Description
The Booking resource represents booking segments in the Concur Travel system. TripLink suppliers use this resource to display a subset of the full booking fields.

## Version
Version 1.1

## URI
`/travel/booking/v1.1/{query_parameters}`

## Scope

In order to obtain itinerary data when making Itinerary API calls, the value of the [OAuth scope parameter][1] must be set to: `ITINER`


## Operations

* Create a new booking
* Update an existing booking
* Cancel a booking

## See Also

[Trip resource][5]

[1]: https://developer.concur.com/oauth-20/web-flow
[5]: http://concur.github.io/developer.concur.com/api-reference/travel/itinerary/trip/trip-resource
