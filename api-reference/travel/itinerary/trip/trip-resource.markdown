---
title: Trip Resource 
layout: resource
---


## Description
The Trip resource represents itineraries in the Concur Travel system. TripLink suppliers use this resource to display a subset of the full booking fields.

## Version

1.1

## URI  

`/travel/trip/v1.1/{query_parameters}`

## Scope

In order to obtain itinerary data when making Itinerary API calls, the value of the [OAuth scope parameter][1] must be set to: `ITINER`

## Operations

* Get list of trips
* Get trip details
* Create a new trip
* Update a trip
* Cancel a trip

## See also
[Booking resource][2]



[1]: https://developer.concur.com/oauth-20/web-flow
[2]: http://concur.github.io/developer.concur.com/api-reference/travel/itinerary/booking/index.html
