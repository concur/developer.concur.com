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

Q: What are the expectations of PrimaryLangID and AltLangID?

A: Language codes are obtained from the Concur user profile setting. For possible values, see the `Canonical List of Preferred Language Values` in  [Travel Profile v2 - Resource](`https://developer.concur.com/api-reference/travel-profile/v2.profile-resource.html`). AltLangID will be set to the same value as PrimaryLangID.

***

Q: What are the expectations of ISOCurrency and returned currency?

A: For endpoints such as `Search`, `Cancel` and `Detail`, the currency code in the SOAP header is irrelevant as response content does not contain any pricing information.

For the `Availability`, `RateDetails`, and `Reservation` endpoints, the currency in the SOAP header is defined by the traveller's travel configuration.

For the `Itinerary` endpoint, the currency in the SOAP header is based on the currency recorded in the PNR. In most cases, it is the currency specified in the reservation requeest. 

If the response does not give rates in the currency requested in the request SOAP header, SAP Concur will convert the rate to the currency specifed by the travel configuration.

***

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

Q: How is AvailabilityStatus value `ChangeDuringStay` handled?

A: The AvailabilityStatus value `ChangeDuringStay` does not have an effect in the display of rates in the shop workflow. Although one may expect there to be multiple `Rate` items when AvailabilityStatus is set to ChangeDuringStay, the vendor must return just 1 Rate object to cover the full stay in the OTA_HotelAvailRS object. This is documented https://developer.concur.com/api-reference/direct-connects/hotel-service-2/Availability.html#rates.

For the RateDetails, HotelService accepts multiple `Rate` objects for the case where AvailabilityStatus is `ChangeDuringStay`, however, it is optional https://developer.concur.com/api-reference/direct-connects/hotel-service-2/Rate-details.html#rates. These details are available to the user in the Rules and Cancellation Policy dialog.

***

Q: What is the usage of EffectiveDate and ExpireDate?

A: When the AvailabilityStatus value is `ChangeDuringStay` the dates are used to indicate the start and end dates for when the rate is in effect.

For example, given

```
<Rates>
  <Rate RateTimeUnit="FullDuration" EffectiveDate=“2020-10-25" ExpireDate=“2020-10-27">
    <Total AmountAfterTax=“220.00” AmountBeforeTax=“200.00" CurrencyCode=“USD”/>
  </Rate>
  <Rate RateTimeUnit="Day" EffectiveDate=“2020-10-27" ExpireDate=“2020-10-29">
    <Total AmountAfterTax=“440.00” AmountBeforeTax=“400.00” CurrencyCode=“USD”/>
  </Rate>
</Rates>
```
Then, the nightly rate breakdown (after tax) is computed as:  
10/25: $110 (Note that RateTimeUnit is FullDuration hence the indicated amount is over 2 nights, hence $110 per night)  
10/26: $110  
10/27: $440 (Note that RateTimeUnit is Day so the indicated amount is per day)
10/28: $440

***

Q: What is the usage of `GuestCount/AgeQualifyingCode`?

A: This value indicates whether the guest is a child or adult. SAP Concur only supports the value of 10 which represents an adult guest.

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

Q: What is the difference between the value 'Committed' and 'Reserved' for ResResponseType?

A: Both indicate a successful reservation. They are treated in the same manner.

***

Q: What are the maximum lengths possible for PersonName/NamePrefix, PersonName/GivenName, and PersonName/Surname?

A: 60 characters 

***

## <a name="read-itinerary"></a>ReadItinerary

Q: Will `ReadItinerary` be invoked if my connection is lost during the reservation request?

A: If the connection is lost (e.g. browser closed) before the reservation request is completed, the `ReadItinerary` request will not be invoked. The request to twShopTrip.asp occurs after the reservation completes and it is for this page that the `ReadItinerary` request is invoked.

***

## <a name="cancel"></a>Cancel

Q: What is the expected response for an already cancelled workflow?

A: The response should match the response of a successful cancellation request.
