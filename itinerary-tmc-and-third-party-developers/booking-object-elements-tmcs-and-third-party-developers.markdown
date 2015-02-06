---
title: Booking Object Elements 
layout: conceptual
---





| ----- |
|  Core Elements - Required |
|  Element |  Description |
|  ConfirmationNumber |  The confirmation number from the vendor. |
|  EndDateLocal |  The booking ending time and date, in the booking location's local time. Format: YYYY-MM-DDThh:mm:ss |
|  StartDateLocal |  The booking starting time and date, in the booking location's local time. Format: YYYY-MM-DDThh:mm:ss |
|  Vendor |  The two letter GDS vendor code. |
|  Core Elements - Optional |   |
|  Element |  Description |
|  CancellationNumber |  The cancellation number from the vendor. This field should be set when you cancel a segment. |
|  CancellationPolicy |  The cancellation policy from the vendor. |
|  Charges |  The charges for this booking. Refer to the Charges Child Elements table. |
|  Currency |  The [3-letter ISO 4217 currency code][1] for the booking. |
|  DailyRate |  The daily rate for the booking. |
|  DateCancelledUtc |  The date the booking was cancelled, in UTC. Format: YYYY-MM-DDThh:mm:ss |
|  DateCreatedUtc |  The date the booking was created, in UTC. Format: YYYY-MM-DDThh:mm:ss |
|  DateModifiedUtc |  The date the booking was modified, in UTC. Format: YYYY-MM-DDThh:mm:ss |
|  EndCityCode |  The [IATA airport code][2] for the ending address for the booking. |
|  EndDateUtc |  The booking ending time and date, in UTC. Format: YYYY-MM-DDThh:mm:ss |
|  EndLatitude |  The latitude for the ending location of the booking. |
|  EndLongitude |  The longitude for the ending location of the booking. |
|  Notes |  Additional information about the booking. |
|  PhoneNumber |  The phone number for the user. |
|  RateCode |  The rate code for the booking. |
|  StartCityCode |  The [IATA airport code][2] for the starting address for the booking. |
|  StartDateUtc |  The booking starting time and date, in UTC. Format: YYYY-MM-DDThh:mm:ss |
|  StartLatitude |  The latitude for the starting location of the booking. |
|  StartLongitude |  The longitude for the starting location of the booking. |
|  Status |  The booking status. |
|  TimeZone |  The time zone of the booking. Format: One of the supported Olson or Windows Time Zones. |
|  TotalRate |  The total rate amount of the booking. |
|  VendorName |  The name of the vendor. When using the Unknown Vendor Code ($$), this value appears as the vendor in the itinerary. |
|  Additional Elements - Optional |   |
|  Element |  Description |
|  AirCondition |  The character code that indicates if car has air conditioner. R for AC, N for No AC |
|  Body |  The character code to indicate how many passengers the car can seat. |
|  Class |  Character code to indicate the class of the car e.g. if it is economy, full size, compact, etc. Varies by Vendor |
|  DiscountCode |  The discount code used by the company/TMC to get a discounted rate. |
|  DropoffCollectionAddress1 |  The AddressLine1 for the dropoff address when the rental service offers dropoff. |
|  DropoffCollectionAddressType |    |
|  DropoffCollectionCategory |    |
|  DropoffCollectionCity |  City for the dropoff address when the rental service offers dropoff. |
|  DropoffCollectionCityCode |  The [IATA airport code][2] for the dropoff address when the rental service offers dropoff. |
|  DropoffCollectionCountry |  The country for the dropoff address when the rental service offers dropoff. |
|  DropoffCollectionLatitude |  The latitude for the dropoff address when the rental service offers dropoff. |
|  DropoffCollectionLongitude |  The longitude for the dropoff address when the rental service offers dropoff. |
|  DropoffCollectionNumber |    |
|  DropoffCollectionPhoneNumber |  The phone number for the dropoff address when the rental service offers dropoff. |
|  DropoffCollectionPostalCode |  The postal code for the dropoff address when the rental service offers dropoff. |
|  DropoffCollectionState |  The state for the dropoff address when the rental service offers dropoff. |
|  EndAddress |  The ending address for the booking. |
|  EndAddress2 |  The ending address for the booking. |
|  EndCity |  The ending address for the booking. |
|  EndCloseTime |  The closing time for the dropoff location. |
|  EndCountry |  The ending address for the booking. |
|  EndLocation |  The dropoff location. |
|  EndOpenTime |  The opening time of the dropoff location. |
|  EndPhoneNumber |  The phone number of the dropoff location. |
|  EndPostalCode |  The ending address for the booking. |
|  EndState |  The ending address for the booking. |
|  FrequentTravelerId |  The loyalty program ID for the user. |
|  IsUpgradeAllowed |  Whether the booking can be upgraded. Format: True/False |
|  NumCars |  The number of cars rented. |
|  NumPersons |  The number of people including the driver that the rental is for. |
|  PickupDeliveryAddress1 |  The AddressLine1 for the pickup address when the rental service offers pickup. |
|  PickupDeliveryAddressType |    |
|  PickupDeliveryCategory |    |
|  PickupDeliveryCity |  The city for the pickup address when the rental service offers pickup. |
|  PickupDeliveryCityCode |  The [IATA airport code][2] for the pickup address when the rental service offers pickup. |
|  PickupDeliveryCountry |  The country for the pickup address when the rental service offers pickup. |
|  PickupDeliveryLatitude |  The latitude for the pickup address when the rental service offers pickup. |
|  PickupDeliveryLongitude |  The longitude for the pickup address when the rental service offers pickup. |
|  PickupDeliveryNumber |    |
|  PickupDeliveryPhoneNumber |  The phone number for the pickup address when the rental service offers pickup. |
|  PickupDeliveryPostalCode |  The postal code for the pickup address when the rental service offers pickup. |
|  PickupDeliveryState |  The state for the pickup address when the rental service offers pickup. |
|  RateType |  The rate type for the booking. |
|  SpecialEquipment |  Any special equipment required by the renter. |
|  SpecialInstructions |  Additional instructions regarding the booking. |
|  StartAddress |  The starting address of the booking. |
|  StartAddress2 |  The starting address for the booking. |
|  StartCity |  The starting address for the booking. |
|  StartCloseTime |  The closing time for the pickup location. |
|  StartCountry |  The starting address for the booking. |
|  StartLocation |  The starting location of the booking. |
|  StartOpenTime |  The opening time for the pickup location. |
|  StartPostalCode |  The starting address for the booking. |
|  StartState |  The starting address for the booking. |
|  Transmission |  The character code that indicates if the car has auto-transmission. A for Auto, M for Manual |
|  UpgradedDateTime |  The date and time the booking was upgraded. Format: YYYY-MM-DDThh:mm:ss |

[1]: http://en.wikipedia.org/wiki/ISO_4217
[2]: http://www.iata.org/publications/Pages/code-search.aspx
