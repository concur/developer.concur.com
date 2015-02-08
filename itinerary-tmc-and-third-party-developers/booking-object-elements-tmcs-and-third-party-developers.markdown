---
title: Booking Object Elements 
layout: conceptual
---

## Booking Object Elements - TMCs and Third-party Developers
The booking elements contain many child elements. For ease of use, these elements are divided into the Core Elements, which are the most frequently used, and Additional Elements, which are not often used but are supported by the Itinerary web service. Some elements only appear if the travel supplier created the booking. Elements are marked as required if they must be supplied for a new booking.  

**NOTE:** TripLink - Open Booking suppliers see a targeted subset of these fields. Refer to the documentation here for the TripLink - Open Booking supplier booking object elements.

###  Air Booking Elements

####  Core Elements - Required
  
|  Element | Description |
|----------|-------------|
|  ClassOfService |  The class of the booking. |
|  ConfirmationNumber |  The record locator or confirmation number for the flight from the airline. |
|  EndCityCode |  The[ IATA airport code][1] for the end city of the booking. |
|  EndDateLocal |  The booking ending time and date, in the booking location's local time. Format: YYYY-MM-DDThh:mm:ss |
|  FlightNumber |  The flight number for the booking. |
|  StartCityCode |  The [IATA airport code][1] for the starting address for the booking. |
|  StartDateLocal |  The booking starting time and date, in the booking location's local time. Format: YYYY-MM-DDThh:mm:ss |
|  Vendor |  The two letter GDS vendor code. Use $$ when not available. |

#### Core Elements - Optional

|  Element |  Description |
|----------|-------------|
|  CancellationNumber |  The cancellation number from the vendor. This field should be set when you cancel a segment. |
|  CancellationPolicy |  The cancellation policy from the vendor. |
|  Charges |  The charges for this booking. Refer to the Charges Child Elements table. |
|  DateCancelledUtc |  The date the booking was cancelled, in UTC. Format: YYYY-MM-DDThh:mm:ss |
|  DateCreatedUtc |  The date the booking was created, in UTC. Format: YYYY-MM-DDThh:mm:ss |
|  DateModifiedUtc |  The date the booking was modified, in UTC. Format: YYYY-MM-DDThh:mm:ss |
|  EndDateUtc |  The booking ending time and date, in UTC. Format: YYYY-MM-DDThh:mm:ss |
|  EndGate |  The arrival gate for the booking. |
|  EndTerminal |  The arrival terminal for the booking. |
|  LegId |  The leg ID of the booking. Leg IDs do not change on a connection. For each unique leg ID in the trip, all flights subsequent to the first segment with the same leg ID are connections. |
|  Seats |  The seats for the booking. This parent element contains an **AirSeat** element for each included seat. The **AirSeat** element contains the following child elements: **PassengerRph** - The passenger assigned to the seat.  **SeatNumber** - The number of the seat. |
|  StartDateUtc |  The booking starting time and date, in UTC. Format: YYYY-MM-DDThh:mm:ss |
|  StartGate |  The departure gate for the booking. |
|  StartTerminal |  The departure terminal for the booking. |
|  Status |  The GDS based booking status for the segment such as HK, HL, BK, etc. |
|  TimeZone |  The time zone of the booking. Format: One of the supported Olson or Windows Time Zones. |

#### Additional Elements - Optional


|  Element |  Description |
|----------|-------------|
|  AircraftCode |  The code for the aircraft type. |
|  Bags |  The number of bags included in the booking. |
|  Cabin |  The section of the airplane for the booking. |
|  CarbonEmissionLbs |  The pounds of carbon emission for this booking. |
|  CarbonModel |  The model used to calculate the carbon emissions. |
|  CheckedBaggage |  Whether the booking includes checked baggage. |
|  Duration |  The duration of the booked flight. |
|  ETicket |  Whether the booking has an e-ticket. Format: Y/N |
|  IsOpenSegment |  Whether the segment is open. Format: True/False |
|  IsPreferredVendor |  If the airline is marked as a preferred property by the company. Format: True/False |
|  IsUpgradeAllowed |  Whether the booking can be upgraded. Format: True/False |
|  Meals |  The meals included in the booking. |
|  Miles |  The number of miles included in the booking. |
|  Notes |  Additional details about the booking. |
|  OpenSegment |  Additional information about the open segment. |
|  OperatedByFlightNumber |  Flight Number provided by the airline operating the flight on behalf of the booked airline. |
|  OperatedByVendor |  The airline operating the flight on behalf of the booked airline. |
|  OperatedByVendorName |  The name of the airline operating the flight on behalf of the booked airline. |
|  Services |  The services included in the booking. |
|  SpecialInstructions |  Additional instructions regarding the booking. |
|  UpgradedDateTime |  The date and time the booking was upgraded. Format: YYYY-MM-DDThh:mm:ss |

###  Car Booking Elements

#### Core Elements - Required

|  Element |  Description |
|----------|-------------|
|  ConfirmationNumber |  The confirmation number from the vendor. |
|  EndDateLocal |  The booking ending time and date, in the booking location's local time. Format: YYYY-MM-DDThh:mm:ss |
|  StartDateLocal |  The booking starting time and date, in the booking location's local time. Format: YYYY-MM-DDThh:mm:ss |
|  Vendor |  The two letter GDS vendor code. |

#### Core Elements - Optional

|  Element |  Description |
|----------|-------------|
|  CancellationNumber |  The cancellation number from the vendor. This field should be set when you cancel a segment. |
|  CancellationPolicy |  The cancellation policy from the vendor. |
|  Charges |  The charges for this booking. Refer to the Charges Child Elements table. |
|  Currency |  The [3-letter ISO 4217 currency code][2] for the booking. |
|  DailyRate |  The daily rate for the booking. |
|  DateCancelledUtc |  The date the booking was cancelled, in UTC. Format: YYYY-MM-DDThh:mm:ss |
|  DateCreatedUtc |  The date the booking was created, in UTC. Format: YYYY-MM-DDThh:mm:ss |
|  DateModifiedUtc |  The date the booking was modified, in UTC. Format: YYYY-MM-DDThh:mm:ss |
|  EndCityCode |  The [IATA airport code][1] for the ending address for the booking. |
|  EndDateUtc |  The booking ending time and date, in UTC. Format: YYYY-MM-DDThh:mm:ss |
|  EndLatitude |  The latitude for the ending location of the booking. |
|  EndLongitude |  The longitude for the ending location of the booking. |
|  Notes |  Additional information about the booking. |
|  PhoneNumber |  The phone number for the user. |
|  RateCode |  The rate code for the booking. |
|  StartCityCode |  The [IATA airport code][1] for the starting address for the booking. |
|  StartDateUtc |  The booking starting time and date, in UTC. Format: YYYY-MM-DDThh:mm:ss |
|  StartLatitude |  The latitude for the starting location of the booking. |
|  StartLongitude |  The longitude for the starting location of the booking. |
|  Status |  The booking status. |
|  TimeZone |  The time zone of the booking. Format: One of the supported Olson or Windows Time Zones. |
|  TotalRate |  The total rate amount of the booking. |
|  VendorName |  The name of the vendor. When using the Unknown Vendor Code ($$), this value appears as the vendor in the itinerary. |


#### Additional Elements - Optional

|  Element |  Description |
|----------|-------------|
|  AirCondition |  The character code that indicates if car has air conditioner. R for AC, N for No AC |
|  Body |  The character code to indicate how many passengers the car can seat. |
|  Class |  Character code to indicate the class of the car e.g. if it is economy, full size, compact, etc. Varies by Vendor |
|  DiscountCode |  The discount code used by the company/TMC to get a discounted rate. |
|  DropoffCollectionAddress1 |  The AddressLine1 for the dropoff address when the rental service offers dropoff. |
|  DropoffCollectionAddressType |  &nbsp; |
|  DropoffCollectionCategory |  &nbsp; |
|  DropoffCollectionCity |  City for the dropoff address when the rental service offers dropoff. |
|  DropoffCollectionCityCode |  The [IATA airport code][1] for the dropoff address when the rental service offers dropoff. |
|  DropoffCollectionCountry |  The country for the dropoff address when the rental service offers dropoff. |
|  DropoffCollectionLatitude |  The latitude for the dropoff address when the rental service offers dropoff. |
|  DropoffCollectionLongitude |  The longitude for the dropoff address when the rental service offers dropoff. |
|  DropoffCollectionNumber |  &nbsp; |
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
|  PickupDeliveryAddressType |  &nbsp; |
|  PickupDeliveryCategory |  &nbsp; |
|  PickupDeliveryCity |  The city for the pickup address when the rental service offers pickup. |
|  PickupDeliveryCityCode |  The [IATA airport code][1] for the pickup address when the rental service offers pickup. |
|  PickupDeliveryCountry |  The country for the pickup address when the rental service offers pickup. |
|  PickupDeliveryLatitude |  The latitude for the pickup address when the rental service offers pickup. |
|  PickupDeliveryLongitude |  The longitude for the pickup address when the rental service offers pickup. |
|  PickupDeliveryNumber |  &nbsp; |
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

###  Hotel Booking Elements

#### Core Elements - Required 

|  Element |  Description |
|----------|-------------|
|  ConfirmationNumber |  The confirmation number from the vendor. |
|  EndDateLocal |  The booking ending time and date, in the booking location's local time. Format: YYYY-MM-DDThh:mm:ss |
|  Name |  The hotel name for the booking. |
|  StartCityCode |  The [IATA airport code][1] for the starting address for the booking. |
|  StartDateLocal |  The booking starting time and date, in the booking location's local time. Format: YYYY-MM-DDThh:mm:ss |
|  Status |  The booking status. |
|  Vendor |  The two letter GDS vendor code. |


####  Core Elements - Optional

|  Element |  Description |
|----------|-------------|
|  CancellationNumber |  The cancellation number from the vendor. This field should be set when you cancel a segment. |
|  CancellationPolicy |  The cancellation policy from the vendor. |
|  Charges |  The charges for this booking. Refer to the Charges Child Elements table. |
|  CheckinTime |  The check in time for the hotel booking. |
|  CheckoutTime |  The check out time for the hotel booking. |
|  Currency |  The [3-letter ISO 4217 currency code][2] for the booking. |
|  DailyRate |  Average per day rate for the hotel. If the rate varies over the duration, it can be specified using the charges model. |
|  DateCancelledUtc |  The date the booking was cancelled, in UTC. Format: YYYY-MM-DDThh:mm:ss |
|  DateCreatedUtc |  The date the booking was created, in UTC. Format: YYYY-MM-DDThh:mm:ss |
|  DateModifiedUtc |  The date the booking was modified, in UTC. Format: YYYY-MM-DDThh:mm:ss |
|  EndDateUtc |  The booking ending time and date, in UTC. Format: YYYY-MM-DDThh:mm:ss |
|  HotelPropertyId |  The hotel's property ID. |
|  Notes |  Additional information about the booking. |
|  NumPersons |  The number of people the booking is for. |
|  NumRooms |  The number of rooms the booking is for. |
|  PhoneNumber |  The phone number for the booking. |
|  RateCode |  The rate code for the booking. |
|  RoomDescription |  The room description for the booking. |
|  RoomType |  The room type for the booking. |
|  SpecialInstructions |  Additional instructions regarding the booking. |
|  StartAddress |  The starting address of the booking. |
|  StartAddress2 |  The starting address for the booking. |
|  StartCity |  The starting address for the booking. |
|  StartCountry |  The starting address for the booking. |
|  StartLatitude |  The latitude for the starting location of the booking. |
|  StartLongitude |  The longitude for the starting location of the booking. |
|  StartPostalCode |  The starting address for the booking. |
|  StartState |  The starting address for the booking. |
|  StartDateUtc |  The booking starting time and date, in UTC. Format: YYYY-MM-DDThh:mm:ss |
|  TimeZone |  The time zone of the booking. Format: One of the supported Olson or Windows Time Zones. |
|  TotalRate |  The total rate amount of the booking. |

#### Additional Elements - Optional

|  Element |  Description |
|----------|-------------|
|  EndCityCode |  The [IATA airport code][1] for the ending address for the booking. |
|  DiscountCode |  The discount code for the booking. |
|  FrequentTravelerId |  The traveler’s ID for the frequent traveler reward program. |
|  HadDeposit |  Whether the booking had a deposit. Format: true/false |
|  IsUpgradeAllowed |  Whether the booking can be upgraded. Format: true/false |
|  ModificationCode |  The code for the modification to the booking. |
|  PartnerMembershipId |  The membership ID of the partner associated with the booking. |
|  PassiveType |  The type of the booking. |
|  RateAccess |  The rate access for the booking. |
|  RateType |  The rate type for the booking. |
|  UpgradedDateTime |  The date and time the booking was upgraded. Format: YYYY-MM-DDThh:mm:ss |
|  VendorFlags |  Semi-colon-delimited list of flags for free hotel service flags. E.g. free breakfast (FB), internet (FI), Parking (FP), etc. If they were all present they can be concatenated as - FB;FI;FP; |
|  VendorName |  The name of the vendor. When using the Unknown Vendor Code ($$), this value appears as the vendor in the itinerary. |

###  Dining Booking Elements

#### Core Elements - Required

|  Element |  Description |
|----------|-------------|
|  ConfirmationNumber |  The confirmation number from the vendor. |
|  Core Elements - Optional |   |
|  Element |  Description |
|  CancellationNumber |  The cancellation number from the vendor. This field should be set when you cancel a segment. |
|  Charges |  The charges for this booking. Refer to the Charges Child Elements table. |
|  DateCancelledUtc |  The date the booking was cancelled, in UTC. Format: YYYY-MM-DDThh:mm:ss |
|  DateCreatedUtc |  The date the booking was created, in UTC. Format: YYYY-MM-DDThh:mm:ss |
|  DateModifiedUtc |  The date the booking was modified, in UTC. Format: YYYY-MM-DDThh:mm:ss |
|  EndDateLocal |  The booking ending time and date, in the booking location's local time. Format: YYYY-MM-DDThh:mm:ss |
|  EndDateUtc |  The booking ending time and date, in UTC. Format: YYYY-MM-DDThh:mm:ss |
|  FrequentTravelerId |  The loyalty program ID for the user. |
|  IsUpgradeAllowed |  Whether the booking can be upgraded. Format: true/false |
|  Name |  The name of the restaurant. Maximum length: 80 |
|  Notes |  Additional information about the booking. |
|  NumPersons |  The number of persons for the booking. |
|  PhoneNumber |  The restaurant phone number. |
|  RestaurantId |  The booking vendor’s restaurant ID. Maximum length: 50 |
|  StartAddress |  The restaurant address. Maximum length: 80 |
|  StartAddress2 |  The restaurant address. Maximum length: 80 |
|  StartCity |  The restaurant address. Maximum length: 50 |
|  StartCountry |  The restaurant address. |
|  StartDateLocal |  The booking starting time and date, in the booking location's local time. Format: YYYY-MM-DDThh:mm:ss |
|  StartDateUtc |  The booking starting time and date, in UTC. Format: YYYY-MM-DDThh:mm:ss |
|  StartLatitude |  The latitude of the restaurant. |
|  StartLongitude |  The longitude of the restaurant. |
|  StartPostalCode |  The restaurant address. Maximum length: 24 |
|  StartState |  The restaurant address. Maximum length: 50 |
|  Status |  The status of the segment. |
|  TimeZone |  The time zone of the booking. Format: One of the supported Olson or Windows Time Zones. |
|  UpgradedDateTime |  The date and time the booking was upgraded. Format: YYYY-MM-DDThh:mm:ss |
|  Vendor |  The two letter GDS vendor code. |
|  VendorName |  The name of the vendor. When using the Unknown Vendor Code ($$), this value appears as the vendor in the itinerary. |

###  Ride Booking Elements

#### Core Elements - Required

|  Element |  Description |
|----------|-------------|
|  ConfirmationNumber |  The confirmation number from the vendor. |
|  EndCityCode |  The ending [IATA airport code][1] of the booking. |
|  StartCityCode |  The starting [IATA airport code][1] of the booking. |
|  Vendor |  The two letter GDS vendor code. One of the following codes Vendor codes: |

##### Vendor Codes

|  Code |  Description |
|----------|-------------|
|  $R |  RideCharge |
|   AL |  AddisonLee |  
|  DG |  DeemGroundLimo |
|  GC |  GroundScope |
|  GS |  GroundSpan |
|  LC |  Limoscom |
|  SQ |  SummitQwest |
|  SW |  SummitQwest |
|  TD |  Tandem |
|  TV |  Transvip |

#### Core Elements - Optional

|  Element |  Description |
|----------|-------------|
|  CancellationNumber |  The cancellation number from the vendor. This field should be set when you cancel a segment. |
|  CancellationPolicy |  The cancellation policy from the vendor. |
|  Currency |  The [3-letter ISO 4217 currency code][2] for the booking. |
|  DateCancelledUtc |  The date the booking was cancelled, in UTC. Format: YYYY-MM-DDThh:mm:ss |
|  DateCreatedUtc |  The date the booking was created, in UTC. Format: YYYY-MM-DDThh:mm:ss |
|  DateModifiedUtc |  The date the booking was modified, in UTC. Format: YYYY-MM-DDThh:mm:ss |
|  DropoffInstructions |  Instructions regarding the booking. |
|  Duration |  The duration of the booking. |
|  EndAddress |  The ending address of the booking. |
|  EndAddress2 |  The ending address of the booking. |
|  EndCity |  The ending address of the booking. |
|  EndCountry |  The ending address of the booking. |
|  EndDateLocal |  The booking ending time and date, in the booking location's local time. Format: YYYY-MM-DDThh:mm:ss |
|  EndDateUtc |  The booking ending time and date, in UTC. Format: YYYY-MM-DDThh:mm:ss |
|  EndLatitude |  The latitude for the ending location of the booking. |
|  EndLocation |  The ending location of the booking. |
|  EndLocationCode |  The ending location code of the booking. |
|  EndLocationName |  The ending location name of the booking. |
|  EndLongitude |  The longitude of the ending point of the booking. |
|  EndPostalCode |  The ending address of the booking. |
|  EndState |  The ending address of the booking. |
|  IsPersonal |  Whether the segment is for personal travel. Format: true/false. |
|  IsUpgradeAllowed |  Whether the booking can be upgraded. Format: true/false |
|  MeetingInstructions |  The instructions for the meeting location of the booking. |
|  Miles |  The number of miles for the booking. |
|  Name |  The name on the booking. |
|  Notes |  Additional information about the booking. |
|  NumberOfHours |  The number of hours of the booking. |
|  NumPersons |  The number of people included in the booking. |
|  OperatedByVendor |  The operated by vendor for the booking. |
|  PassiveCityCode |  The passive city code of the booking. |
|  PhoneNumber |  The ride vendor phone number. |
|  PickupInstructions |  Instructions regarding the booking. |
|  Rate |  The rate for the booking. |
|  RateDescription |  The rate description for the booking. |
|  RateNotes |  The rate notes for the booking. |
|  RateType |  The rate type for the booking. |
|  ReservationId |  The booking vendor’s reservation ID. |
|  SpecialInstructions |  The special instructions for the ride. |
|  StartAddress |  The starting address of the booking. |
|  StartAddress2 |  The starting address of the booking. |
|  StartCity |  The starting address of the booking. |
|  StartCountry |  The starting address of the booking. |
|  StartDateLocal |  The booking starting time and date, in the booking location's local time. Format: YYYY-MM-DDThh:mm:ss |
|  StartDateUtc |  The booking starting time and date, in UTC. Format: YYYY-MM-DDThh:mm:ss |
|  StartLatitude |  The latitude of the booking start location. |
|  StartLocation |  The starting location of the booking. |
|  StartLocationCode |  The code of the starting location of the booking. |
|  StartLocationName |  The name of the starting location of the booking. |
|  StartLongitude |  The longitude of the booking start location. |
|  StartPostalCode |  The starting address of the booking. |
|  StartState |  The starting address of the booking. |
|  Status |  The status of the segment. |
|  TimeZone |  The time zone of the booking. Format: One of the supported Olson or Windows Time Zones. |
|  UpgradedDateTime |  The date and time the booking was upgraded. Format: YYYY-MM-DDThh:mm:ss |
|  VendorName |  The name of the vendor. When using the Unknown Vendor Code ($$), this value appears as the vendor in the itinerary. |
|  Charges |  The charges for this booking. Refer to the Charges Child Elements table. |

###  Rail Booking Elements

#### Core Elements - Required

|  Element |  Description |
|----------|-------------|
|  ConfirmationNumber |  The confirmation number from the vendor. |
|  StartDateLocal |  The starting date of travel for this segment, in the local time of to the starting point. Format: YYYY-MM-DDThh:mm:ss |

#### Core Elements - Optional

|  Element |  Description |
|----------|-------------|
|  Amenities |  The booked amenities. |
|  Cabin |  The cabin identifier. |
|  CancellationNumber |  The cancellation number from the vendor. This field should be set when you cancel a segment. |
|  CarbonEmissionLbs |  The pounds of carbon emission for this booking. |
|  CarbonModel |  The model used to calculate the carbon emissions. |
|  ClassOfService |  The class of the booking. |
|  Currency |  The [3-letter ISO 4217 currency code][2] for the booking. |
|  DateCancelledUtc |  The date the booking was cancelled, in UTC. Format: YYYY-MM-DDThh:mm:ss |
|  DateCreatedUtc |  The date the booking was created, in UTC. Format: YYYY-MM-DDThh:mm:ss |
|  DateModifiedUtc |  The date the booking was modified, in UTC. Format: YYYY-MM-DDThh:mm:ss |
|  DiscountCode |  The discount code for the booking. |
|  Duration |  The duration of the trip booked. |
|  EndCity |  The end city for the rail trip. |
|  EndCityCode |  The [IATA airport code][1] for the end city of the trip. |
|  EndCountry |  The country code for the booking. |
|  EndDateLocal |  The booking ending time and date, in the booking location's local time. Format: YYYY-MM-DDThh:mm:ss |
|  EndDateUtc |  The booking ending time and date, in UTC. Format: YYYY-MM-DDThh:mm:ss |
|  EndLatitude |  The latitude of the ending point of the booking. |
|  EndLongitude |  The longitude of the ending point of the booking. |
|  EndPlatform |  The ending platform location of the booking. |
|  EndRailStation |  The code for the ending station of the booking. |
|  EndRailStationName |  The name of the ending station of the booking. |
|  ETicket |  The e-ticket number. |
|  FareType |  The type of fare on the rail booking. |
|  FrequentTravelerId |  The traveler’s ID for the frequent traveler reward program. |
|  IsUpgradeAllowed |  Whether the booking can be upgraded. Format: true/false |
|  LegId |  The trip leg ID. |
|  Meals |  The booked meals. |
|  Miles |  The number of miles booked. |
|  Notes |  Additional information about the booking. |
|  NumPersons |  The number of persons booked for the trip. |
|  NumStops |  The number of stops in the booking. |
|  OperatedByTrainNumber |  The train identifier of the operating vendor of the booked trip. |
|  OperatedByVendor |  The operating vendor of the booked trip. |
|  RateCode |  The vendor's code for the rate of the booking. |
|  RouteRestrictCode |  The code to restrict the route of the booking. |
|  SpecialInstructions |  The instructions for the booking. |
|  StartCity |  The starting city of the booking. |
|  StartCityCode |  The [IATA airport code][1] for the starting city of the booking. |
|  StartCountry |  The starting country of the booking. |
|  StartDateUtc |  The starting date of travel for this segment, in UTC. Format: YYYY-MM-DDThh:mm:ss |
|  StartLatitude |  The latitude of the starting location of the booking. |
|  StartLongitude |  The longitude of the starting location of the booking. |
|  StartPlatform |  The starting platform location of the booking. |
|  StartRailStation |  The code of the starting station of the booking. |
|  StartRailStationName |  The name of the starting station of the booking. |
|  Status |  The booking status. |
|  TimeZone |  The time zone of the booking. Format: One of the supported Olson or Windows Time Zones. |
|  TotalRate |  The total rate amount of the booking. |
|  TrainNumber |  The number for the booked train. |
|  TrainTypeCode |  The code for the type of train used in the booking. |
|  TrainTypeName |  The name of the type of train used in the booking. |
|  TransportMode |  The transport mode of the booking. |
|  UpgradedDateTime |  The date and time the booking was upgraded. Format: YYYY-MM-DDThh:mm:ss |
|  Vendor |  The two letter GDS vendor code. |
|  VendorName |  The name of the vendor. When using the Unknown Vendor Code ($$), this value appears as the vendor in the itinerary. |
|  WagonNumber |  The wagon number of the train car. |
|  Charges |  The charges for this booking. Refer to the Charges Child Elements table. |
|  Seats |  The booked seats. This parent element contains a **RailSeat** element for each included seat. The **RailSeat** element has the following child elements:

##### RailSeat child elements

|  Element |  Description |
|----------|-------------|
|  Amenities |  The amenities for the seat. |
|  BerthPosition |  The berth location of the seat. |   | |
|  Deck |  Which deck the seat is on. |
|  FacingForward |  Whether the seat is facing forward. |
|  FareSpaceComfort |  The space around the seat. |
|  PassengerRph |  Which passenger the seat is assigned to. |
|  SeatNumber |  The number of the seat. |
|  SeatPosition |  The location of the seat. |
|  SpaceType |  The type of space around the seat. |
|  Status |  The status of the seat booking. |
|  WagonNumber |  The number of the wagon the seat is on. |
|  WagonType |  The type of wagon the seat is on. |

###  Parking Booking Elements

#### Core Elements - Required

|  Element |  Description |
|----------|-------------|
|  ConfirmationNumber |  The confirmation number from the vendor. |
|  StartDateLocal |  The starting date of travel for this segment, in the local time of to the starting point. Format: YYYY-MM-DDThh:mm:ss |

#### Core Elements - Optional

|  Element |  Description |
|----------|-------------|
|  CancellationNumber |  The cancellation number from the vendor. This field should be set when you cancel a segment. |
|  ClassOfService |  The class of the booking. |
|  Currency |  The [3-letter ISO 4217 currency code][2] for the booking. |
|  DateCancelledUtc |  The date the booking was cancelled, in UTC. Format: YYYY-MM-DDThh:mm:ss |
|  DateCreatedUtc |  The date the booking was created, in UTC. Format: YYYY-MM-DDThh:mm:ss |
|  DateModifiedUtc |  The date the booking was modified, in UTC. Format: YYYY-MM-DDThh:mm:ss |
|  EndDateLocal |  The booking ending time and date, in the booking location's local time. Format: YYYY-MM-DDThh:mm:ss |
|  EndDateUtc |  The booking ending time and date, in UTC. Format: YYYY-MM-DDThh:mm:ss |
|  FrequentTravelerId |  The traveler’s ID for the frequent traveler reward program. |
|  IsUpgradeAllowed |  Whether the booking can be upgraded. Format: true/false |
|  Notes |  Additional information about the booking. |
|  OperatedByVendor |  The operating vendor of the booking. |
|  ParkingLocationId |  The location of the parking booking. |
|  PhoneNumber |  The parking phone number. |
|  Pin |  The PIN number for the booking. |
|  RateCode |  The vendor's code for the rate of the booking. |
|  StartAddress |  The starting address of the booking. |
|  StartAddress2 |  The starting address of the booking. |
|  StartCity |  The starting address of the booking. |
|  StartCityCode |  The [IATA airport code][1] for the starting city of the booking. |
|  StartCountry |  The starting address of the booking. |
|  StartDateUtc |  The starting date of travel for this segment, in UTC. Format: YYYY-MM-DDThh:mm:ss |
|  StartLocation |  The parking location. |
|  StartPostalCode |  The starting address of the booking. Maximum length: 24 |
|  StartState |  The starting address of the booking. Maximum length: 50 |
|  Status |  The booking status. |
|  TimeZone |  The time zone of the booking. Format: One of the supported Olson or Windows Time Zones. |
|  TotalRate |  The total rate amount of the booking. |
|  UpgradedDateTime |  The date and time the booking was upgraded. Format: YYYY-MM-DDThh:mm:ss |
|  Vendor |  The two letter GDS vendor code. |
|  VendorName |  The name of the vendor. When using the Unknown Vendor Code ($$), this value appears as the vendor in the itinerary. |
|  Charges |  The charges for this booking. Refer to the Charges Child Elements table. |

###  Travel Booking  
**NOTE**: This booking type is used by the Concur Travel Request product to store the main destination for the trip without specifying a transport type.
#### Core Elements - Required

|  Element |  Description |
|----------|-------------|
|  EndDateLocal |  The booking ending time and date, in the booking location's local time. Format: YYYY-MM-DDThh:mm:ss |
|  StartCity |  The starting address of the booking. |
|  StartCityCode |  The [IATA airport code][1] for the starting city of the booking. |
|  StartDateLocal |  The starting date of travel for this segment, in the local time of to the starting point. Format: YYYY-MM-DDThh:mm:ss |

#### Core Elements - Optional

|  Element |  Description |
|----------|-------------|
|  CancellationNumber |  The cancellation number from the vendor. This field should be set when you cancel a segment. |
|  ConfirmationNumber |  The confirmation number from the vendor. |
|  Currency |  The [3-letter ISO 4217 currency code][2] for the booking. |
|  DailyRate |  Average per day rate for the booking. If the rate varies over the duration, it can be specified using the charges model. |
|  DateCancelledUtc |  The date the booking was cancelled, in UTC. Format: YYYY-MM-DDThh:mm:ss |
|  DateCreatedUtc |  The date the booking was created, in UTC. Format: YYYY-MM-DDThh:mm:ss |
|  DateModifiedUtc |  The date the booking was modified, in UTC. Format: YYYY-MM-DDThh:mm:ss |
|  EndAddress |  The ending address of the booking. |
|  EndAddress2 |  The ending address of the booking. |
|  EndCity |  The ending address of the booking. |
|  EndCityCode |  The ending address of the booking. |
|  EndCountry |  The ending address of the booking. |
|  EndDateUtc |  The booking ending time and date, in UTC. Format: YYYY-MM-DDThh:mm:ss |
|  EndLatitude |  The latitude for the ending location of the booking. |
|  EndLocation |  The ending location of the booking. |
|  EndLongitude |  The longitude of the ending point of the booking. |
|  EndPostalCode |  The ending address of the booking. |
|  EndState |  The ending address of the booking. |
|  TransportMode |  The transport mode of the booking. |
|  Notes |  Additional information about the booking. |
|  NumPersons |  The number of persons booked for the trip. |
|  PhoneNumber |  The parking phone number. |
|  SpecialInstructions |  The instructions for the booking. |
|  StartAddress |  The starting address of the booking. |
|  StartAddress2 |  The starting address of the booking. |
|  StartCity |  The starting address of the booking. |
|  StartCityCode |  The [IATA airport code][1] for the starting city of the booking. |
|  StartCountry |  The starting address of the booking. |
|  StartDateUtc |  The starting date of travel for this segment, in UTC. Format: YYYY-MM-DDThh:mm:ss |
|  StartLatitude |  The latitude of the restaurant. |
|  StartLongitude |  The longitude of the restaurant. |
|  StartPostalCode |  The starting address of the booking. Maximum length: 24 |
|  StartState |  The starting address of the booking. Maximum length: 50 |
|  Status |  The booking status. |
|  TimeZone |  The time zone of the booking. Format: One of the supported Olson or Windows Time Zones. |
|  TotalRate |  The total rate amount of the booking. |
|  Vendor |  The two letter GDS vendor code. |
|  VendorName |  The name of the vendor. When using the Unknown Vendor Code ($$), this value appears as the vendor in the itinerary. |
|  Charges |  The charges for this booking. Refer to the Charges Child Elements table. |
|  Seats |  The seats for the booking. This parent element contains an **TravelSeat** element for each included seat. The **TravelSeat** element contains the following child elements:


####  Charges Child Elements

#####  Core Elements - Required

###### Percent - The percent of fixed charges. This parent element contains the following child elements:

|  Element |  Description |
|----------|-------------|
|  Amount |  The total amount for the rate for the booking. |
|  Currency |  The [3-letter ISO 4217 currency code][2] for the total amount. |   | |
|  Description |  The description for the rate. |
|  IsPaid |  Whether the rate has been paid. Format: true/false. |
|  IsPrimary |  Indicates whether the charge is the Primary or Main rate. For example, if one of the rates is the actual rate and the rest are penalties, the actual rate should be set as IsPrimary. Only one charge in a set should be primary. Format: true/false. |
|  SemanticsCode |  Indicates the charge category for the line item. Refer to the [Semantics and Vendor Codes][3] document for more information. |
|  SemanticsVendorType |  The vendor type: H=Hotel, C=Car, A=Air, G=Ground, R=Rail |
|  StartDateLocal |  The start date of the booking, in the user's local time. Format: YYYY-MM-DDThh:mm:ss |
|  Vendor |  The vendor for the booking charge. |
|  VendorChargeCode |  The vendor's code for the charge |

###### Fixed - The fixed charges. This parent element contains the following child elements:

|  Element |  Description |
|----------|-------------|
|  Currency |  The [3-letter ISO 4217 currency code][2] for the total amount. |   | |
|  Description |  The description for the fixed amount. |
|  IsPaid |  Whether the fixed amount has been paid. Format: true/false. |
|  IsPrimary |  Whether the fixed amount is primary. Format: true/false. |
|  SemanticsCode |  Indicates the charge category for the line item. Refer to the [Semantics and Vendor Codes][3] document for more information. |
|  SemanticsVendorType |  The vendor type: H=Hotel, C=Car, A=Air, G=Ground, R=Rail |
|  StartDateLocal |  The start date of the booking, in the user's local time. Format: YYYY-MM-DDThh:mm:ss |
|  Vendor |  The vendor applying the booking charge. |
|  VendorChargeCode |  The vendor's code for the charge. |

###### Rate - The rate for the booking. This parent element contains the following child elements:

|  Element |  Description |
|----------|-------------|
|  Amount |  The total amount for the rate for the booking. |
|  Currency |  The [3-letter ISO 4217 currency code][2] for the total amount. |   | |
|  Description |  The description for the rate. |
|  IsPaid |  Whether the rate has been paid. Format: true/false. |
|  IsPrimary |  Whether the rate is primary. Format: true/false. |
|  NumUnits |  The number of units expected for the charge. For instance, 3 days |
|  PerUnit |  The unit of measure for the charge. Values represent rates like per DAY, WEEK, or MONTH |
|  SemanticsCode |  Indicates the charge category for the line item. Refer to the [Semantics and Vendor Codes][3] document for more information. |
|  SemanticsVendorType |  The vendor type: H=Hotel, C=Car, A=Air, G=Ground, R=Rail |
|  StartDateLocal |  The start date of the booking, in the user's local time. Format: YYYY-MM-DDThh:mm:ss |
|  Vendor |  The vendor for the booking charge. |
|  VendorChargeCode |  The vendor's code for the charge. |

###### RateWithAllowance - The rate for the booking, including any travel allowances. This parent element contains the following child elements:

|  Element |  Description |
|----------|-------------|
|  AllowanceAmount |  The cost of overage fees when the allowance is exceeded. For example, if the allowance is 5000 miles, the cost could be $0.02 per mile. The overage must be in the same currency as the basic rate. |
|  AllowanceIsUnlimited |  Whether the allowance is unlimited. Format: true/false. |   | |
|  AllowanceNumUnits |  The number of units for the allowance associated with the charge. For example, 5000 miles. |
|  AllowanceUnit |  The unit of measure for the allowance associated with the charge. For example, a car weekly rate might allow 5000 miles included in the rate. |
|  Amount |  The total amount for the rate for the booking. |
|  Currency |  The [3-letter ISO 4217 currency code][2] for the total amount. |
|  Description |  The description for the rate. |
|  IsPaid |  Whether the rate has been paid. Format: true/false. |
|  IsPrimary |  Indicates whether the charge is the Primary or Main rate. For example, if one of the rates is the actual rate and the rest are penalties, the actual rate should be set as IsPrimary. Only one charge in a set should be primary. Format: true/false. |
|  NumUnits |  The number of units expected for the charge. For instance, 3 days. |
|  PerUnit |  The unit of measure for the charge. Values represent rates like per DAY, WEEK, or MONTH |
|  SemanticsCode |  Indicates the charge category for the line item. Refer to the [Semantics and Vendor Codes][3] document for more information. |
|  SemanticsVendorType |  The vendor type: H=Hotel, C=Car, A=Air, G=Ground, R=Rail |
|  StartDateLocal |  The start date of the booking, in the user's local time. Format: YYYY-MM-DDThh:mm:ss |
|  Vendor |  The vendor for the booking charge. |
|  VendorChargeCode |  The vendor's code for the charge. |

##### TravelSeat Elements

|  Element |  Description |
|----------|-------------|
|  PassengerRph |  The passenger assigned to the seat. |
|  SeatNumber |  The number of the seat. |  


###  Time Zone Formats

#### Olson Time Zones

|-------|-------|----------|-----------| 
| Africa/Cairo |  Africa/Casablanca |  Africa/Harare |  Africa/Luanda |
|  Africa/Nairobi |  Africa/Windhoek |  America/Anchorage |  America/Argentina/Buenos_Aires |
|  America/Asuncion |  America/Bahia |  America/Bogota |  America/Buenos_Aires |
|  America/Caracas |  America/Chicago |  America/Chihuahua |  America/Denver |
|  America/Godthab |  America/Guyana |  America/Halifax |  America/Indianapolis |
|  America/Los_Angeles |  America/Manaus |  America/Mexico_City |  America/Montevideo |
|  America/New_York |  America/Phoenix |  America/Regina |  America/Santiago |
|  America/Sao_Paulo |  America/St_Johns |  America/Swift_Current |  America/Tijuana |
|  Asia/Almaty |  Asia/Amman |  Asia/Baghdad |  Asia/Baku |
|  Asia/Bangkok |  Asia/Beirut |  Asia/Calcutta |  Asia/Colombo |
|  Asia/Damascus |  Asia/Dhaka |  Asia/Irkutsk |  Asia/Jerusalem |
|  Asia/Kabul |  Asia/Kamchatka |  Asia/Karachi |  Asia/Karachi |
|  Asia/Katmandu |  Asia/Krasnoyarsk |  Asia/Magadan |  Asia/Muscat |
|  Asia/Novosibirsk |  Asia/Rangoon |  Asia/Riyadh |  Asia/Seoul |
|  Asia/Shanghai |  Asia/Singapore |  Asia/Taipei |  Asia/Tbilisi |
|  Asia/Tehran |  Asia/Tokyo |  Asia/Ulaanbaatar |  Asia/Vladivostok |
|  Asia/Yakutsk |  Asia/Yekaterinburg |  Asia/Yerevan |  Atlantic/Azores |
|  Atlantic/Cape_Verde |  Atlantic/South_Georgia |  Australia/Adelaide |  Australia/Brisbane |
|  Australia/Darwin |  Australia/Hobart |  Australia/Perth |  Australia/Sydney |
|  Etc/GMT+12 |  Etc/GMT-11 |  Etc/GMT-2 |  Europe/Athens |
|  Europe/Berlin |  Europe/Helsinki |  Europe/Istanbul |  Europe/Kaliningrad |
|  Europe/London |  Europe/Minsk |  Europe/Moscow |  Europe/Paris |
|  Europe/Prague |  Europe/Sarajevo |  GMT |  GMT-1200 |
|  Indian/Mauritius |  Pacific/Apia |  Pacific/Auckland |  Pacific/Fiji |
|  Pacific/Guadalcanal |  Pacific/Guam |  Pacific/Honolulu |  Pacific/Tongatapu |
|  UTC | | |

#### Windows Time Zones 

|  Africa/Cairo |  Africa/Casablanca |  Africa/Harare |  Africa/Luanda |
|  Africa/Nairobi |  Africa/Windhoek |  America/Anchorage |  America/Argentina/Buenos_Aires |
|  America/Asuncion |  America/Bahia |  America/Bogota |  America/Buenos_Aires |
|  America/Caracas |  America/Chicago |  America/Chihuahua |  America/Denver |
|  America/Godthab |  America/Guyana |  America/Halifax |  America/Indianapolis |
|  America/Los_Angeles |  America/Manaus |  America/Mexico_City |  America/Montevideo |
|  America/New_York |  America/Phoenix |  America/Regina |  America/Santiago |
|  America/Sao_Paulo |  America/St_Johns |  America/Swift_Current |  America/Tijuana |
|  Asia/Almaty |  Asia/Amman |  Asia/Baghdad |  Asia/Baku |
|  Asia/Bangkok |  Asia/Beirut |  Asia/Calcutta |  Asia/Colombo |
|  Asia/Damascus |  Asia/Dhaka |  Asia/Irkutsk |  Asia/Jerusalem |
|  Asia/Kabul |  Asia/Kamchatka |  Asia/Karachi |  Asia/Karachi |
|  Asia/Katmandu |  Asia/Krasnoyarsk |  Asia/Magadan |  Asia/Muscat |
|  Asia/Novosibirsk |  Asia/Rangoon |  Asia/Riyadh |  Asia/Seoul |
|  Asia/Shanghai |  Asia/Singapore |  Asia/Taipei |  Asia/Tbilisi |
|  Asia/Tehran |  Asia/Tokyo |  Asia/Ulaanbaatar |  Asia/Vladivostok |
|  Asia/Yakutsk |  Asia/Yekaterinburg |  Asia/Yerevan |  Atlantic/Azores |
|  Atlantic/Cape_Verde |  Atlantic/South_Georgia |  Australia/Adelaide |  Australia/Brisbane |
|  Australia/Darwin |  Australia/Hobart |  Australia/Perth |  Australia/Sydney |
|  Etc/GMT+12 |  Etc/GMT-11 |  Etc/GMT-2 |  Europe/Athens |
|  Europe/Berlin |  Europe/Helsinki |  Europe/Istanbul |  Europe/Kaliningrad |
|  Europe/London |  Europe/Minsk |  Europe/Moscow |  Europe/Paris |
|  Europe/Prague |  Europe/Sarajevo |  GMT |  GMT-1200 |
|  Indian/Mauritius |  Pacific/Apia |  Pacific/Auckland |  Pacific/Fiji |
|  Pacific/Guadalcanal |  Pacific/Guam |  Pacific/Honolulu |  Pacific/Tongatapu |
|  UTC | | |


[1]: http://www.iata.org/publications/Pages/code-search.aspx
[2]: http://en.wikipedia.org/wiki/ISO_4217
[3]: https://developer.concur.com/sites/default/files/SemanticsAndVendorCodes.pdf
