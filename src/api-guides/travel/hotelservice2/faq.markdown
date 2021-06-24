---
title: Direct Connect - Hotel v2 - Frequently Asked Questions
layout: reference
---

Frequently asked questions on how the HotelService API content is leveraged in the SAP Concur Travel Hotel online booking tool.

* [General](#general)
* [Search](#search)
* [Availability & RateDetails](#availability)
* [HotelDescriptiveInfo](#hotel-descriptive-info)
* [Reservation](#reservation)
* [ReadItinerary](#read-itinerary)
* [Cancel](#cancel)

## <a name="general"></a>General


## <a name="search"></a>Search

Q: What is the maximum value possible for `Distance` and `DistanceMax`? 

A: SAP Concur can be configured to allow up to a 100 mile search radius.

***



## <a name="availability"></a>Availability & RateDetails

Q: How does SAP Concur select the `HotelRef/HotelCode` to be included in the Availability request? What is the maximum number of hotels automatically rate searched?

A: The first `n` hotels from the `Search` response will be specified in the `Availability` request. `n` is the value defined for `Number of hotels to shop` from the Travel Configuration.

*** 

Q: If a property does not have availablity based on the request, what is the expected value for the `RoomStays` element?

A: `RoomStays` is optional. When not included, it indicates the hotel is not available.

***

## <a name="hotel-descriptive-info"></a>HotelDescriptiveInfo

Q: Where is the content of `HotelInfo` displayed?

A: This text will be displayed as the last paragraph in the Hotel Details dialog.

***

Q: How should hotel descriptive info be provided via `TPA_Extensions/Description` if the sentences are greater than 64 characters in length? Should they be chunked into 20 segments? How would sections/paragraphs be represented? 

A: The Description `name` attribute is used as the header. Each `Description` corresponds to a new paragraph, and the value of each `Text` element will be concatenated to form the paragraph. This will be used as content in the Hotel Details dialog. 

*** 

## <a name="reservation"></a>Reservation

Q: What is the maximum possible length for `PersonName/GivenName` and `PersonName/Surname`? 

A: The names are defined on the Concur Travel profile and can be up to 60 characters in length.

***

## <a name="read-itinerary"></a>ReadItinerary

Q: Will `ReadItinerary` be invoked if my connection is lost during the reservation request?

A: If the connection is lost (e.g. browser closed) before the reservation request is completed, the `ReadItinerary` request will not be invoked. The request to twShopTrip.asp occurs after the reservation completes and it is for this page that the `ReadItinerary` request is invoked.

## <a name="cancel"></a>Cancel
