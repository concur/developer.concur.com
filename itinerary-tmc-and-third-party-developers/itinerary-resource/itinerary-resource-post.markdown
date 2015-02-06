---
title: Itinerary Resource
layout: operation
---




This resource supports the following POST actions:

##  Post Itinerary Details Request

| ----- |
|  Description |
|

Creates a new trip or updates an existing trip. A new trip will be created if the trip dates span no existing trip and the request doesn't include a tripId. If a tripId is included in the uri it will update the specified trip. The full trip information is included in the update request, which replaces the existing trip.

This endpoint can be used to create trips for a user that is not the OAuth consumer. This is most often done when a travel supplier or Travel Management Company needs to create a trip on behalf of a user. The supplier or TMC must be registered with Concur and have a Concur account that has one of the following user roles: Web Services Administrator for Professional, or Can Administer for Standard.

###  Agency Proposals

Travel Management Companies for Concur clients with the Agency Proposal feature of Travel Request can send proposed itineraries using the Itinerary web service. The TMC will indicate that the itinerary is a proposal using the **TripStatus** element. The request must also include the **CustomAttributes** element and its child elements.

 |
|  Query Parameters - Required |  Supported Content Types |
|  None |   |
|  Query Parameters - Optional |   |
|

* **{_tripId_}**  
The identifier for the desired trip. Provided if the request is updating an existing trip.
* **userid_type=login_id&userid_value={_loginID_}**  
The Concur loginID of the user that owns the trip. Can be used when creating a new trip or updating an existing trip. The userid_type and userid_value parameters can only be used if the OAuth consumer has the user role listed above.

Examples:  
****To post a new trip for the OAuth consumer:****  
<https://www.concursolutions.com/api/travel/trip/v1.1>

****To update a trip for the OAuth consumer:****  
https://www.concursolutions.com/api/travel/trip/v1.1?tripId={_tripId_}

****To post a trip for a user other than the OAuth consumer:****  
https://www.concursolutions.com/api/travel/trip/v1.1?userid_type=login_id&userid_value={_loginID_}

 |
|  Request Headers - Required |  Request Headers - Optional |
|  Authorization header with OAuth token for valid Concur user. To post trips for users other than the OAuth consumer, the OAuth consumer must have one of the following user roles in Concur: Company Administrator or Web Services Administrator for Professional, or Can Administer for Standard. |  None |
|  Content Body |   |
|  This function requires as its arguments an **Itinerary** parent element. The parent element contains the following child elements:

|  Element |  Description |
|  Required Elements |   | |
|  TripName |  Name of the trip. Maximum length: 255 characters. |
|  TripStatus |  The status of the itinerary. One of the following:  
0 - Confirmed  
1 - Ticketed  
2 - Canceled  
6 - Proposal  
7 - Booked Proposal |
|  Required Elements for Agency Proposal |   |
|  ClientLocator |  The unique identifier for the batch of proposals. All proposals in the batch should have the same value. |
|  TravelRequestId |  The identifier for the travel request that the proposal is associated with. |
|  CustomAttributes |

This parent element has two **CustomAttribute** child elements, with the following child elements:

|  DataType |  The value for this element is **Numeric**. |
|  Name |  For the first CustomAttribute element: **ProposalBatchSize**. For the second CustomAttribute element: **ProposalSequenceIndex** |   | |
|  Data |  For the **ProposalBatchSize**: The number of proposals in the batch. Maximum: 3  
For the**ProposalSequenceIndex**: The index of the proposal in the batch of proposals. |
|  DisplayOnItinerary |  The value for this element is **true**. |
|  DisplayTitle |  This element should be empty. |
|  ExternalId |  This element should be empty. |

 |
|  Optional Elements |
|  BookedByFirstName |  First name of the trip owner. |
|  BookedByLastName |  Last name of the trip owner. |
|  Bookings |  This parent element will contain a **Booking** child element for each booking associated with this itinerary. The **Booking** child elements are detailed in the Booking Elements table. |
|  CancelComments |  User supplied comments if the trip is cancelled. 256 Characters Maximum |
|  Comments |  Comments on the itinerary. 512 Characters Maximum |
|  DateBookedLocal |  The date the trip was booked, in the local time of the booking location. Format: YYYY-MM-DDThh:mm:ss |
|  Description |  The trip description. Maximum length: 512 characters. |
|  IsPersonal |  Whether the trip is a Business or Leisure trip. |
|  ProjectName |  The associated project name for the trip. Maximum length: 255 characters. |
|  RuleViolations |  The list of rule violations associated with the itinerary. This parent element contains a <RuleViolation> child element for each associated rule violation. |

| ----- |
|  Booking Elements |
|  Element |  Description |
|  Required Elements |   |
|  BookingSource |  The name of the booking source for this booking. A booking source is a textual name the system uses to track where a booking took place. This could be a GDS, OTA, Vendor code for Supplier website, or Supplier Direct Connect API. |
|  RecordLocator |  The unique identifier for the booking. Send the value for an existing booking to update an existing trip. This value is returned in the RecordLocator element by the [Post Booking Details][1] function. |
|  Optional Elements |   |
|  BookingOwner |  Indicates the tool that supplied the booking to Concur Travel. |
|  Source |  Obsolete, supported for backward compatibility. |
|  DateBookedLocal |  The date the booking was created, in the booking location's local time. Format: YYYY-MM-DDThh:mm:ss |
|  FormOfPaymentName |  The name of the form of payment for the booking. |
|  FormOfPaymentType |  The type of the form of payment. |
|  TicketMailingAddress |  The mailing address for the booked ticket, if available. |
|  TicketPickupLocation |  The pickup location for the booked ticket, if available. |
|  TicketPickupNumber |  The confirmation number for the booked ticket, if available. |
|  AirfareQuotes |  List of stored airfare quotes for this booking. |
|  Airline Tickets |  List of airline tickets for this booking. |
|  Charges |  List of charges for this booking. |
|  MiscChargeOrders |  List of Miscellaneous AirCharges for this booking. |
|  Passengers |  This parent element contains a **Passenger** child element for each booked passenger. The **Passenger** child element contains the following child elements:

|  Required |
|  NameFirst |  The first name of the passenger. |   |
|  NameLast |  The last name of the passenger. |
|  Optional |   |
|  NameMiddle |  The middle name of the passenger. |
|  NamePrefix |  The passenger's name prefix. |
|  NameRemark |  Additional details about the passenger's name. |
|  NameSuffix |  The passenger's name suffix. |
|  NameTitle |  The passenger's name title. |
|  TextName |  The user's full name as entered in the booking tool if different from the name in the database. |
|  FrequentTravelerProgram |  Passenger's loyalty programs. |

 |
|  PassPrograms |  List of Pass Programs for this booking. |
|  PhoneNumbers |  List of Phone numbers associated with this booking. |
|  RailPayments |  List of Rail payments associated with rail segments in this booking. |
|  Segments |  This parent element will contain at least one of the following child elements: **Air**, **Car**, **Hotel**, **Dining**, **Ride**, **Rail**, **Parking**, **Event**.

Refer to [Booking Object Elements][2] for more information about the child elements contained in the booking elements.

 |
|  Delivery |  The method this booking was delivered.  |
|  WaitListSegments |  The segments that the traveler is waitlisted for this booking. |
|  Warning |  The warnings associated with the booking. |
|  WebAddresses |  List of web addresses such as emails, pickup urls, etc.. associated with this booking. |

 |

####  XML Example Request

    POST /api/travel/trip/v1.1?userid_type=login_id&userid_value=cm@example.com HTTPS 1.1
    Host: [www.concursolutions.com][3]
    Authorization: OAuth {access token}
    ...

    <Itinerary xmlns="http://www.concursolutions.com/api/travel/trip/2010/06">
        <ClientLocator>KK-CNQ-1M1P6-5HJ</ClientLocator>
        <ItinSourceName>ConcurConnectAPI</ItinSourceName>
        <TripName>Trip from Dallas to Seattle</TripName>
        <Comments />
        <StartDateLocal>2013-12-21T07:25:00</StartDateLocal>
        <EndDateLocal>2013-12-24T23:59:00</EndDateLocal>
        <BookedByFirstName>Chris</BookedByFirstName>
        <BookedByLastName>Miller</BookedByLastName>
        <Bookings>
            <Booking>
                <Segments>
                    <Car>
                        <Vendor>CQ</Vendor>
                        <Status>HK</Status>
                        <StartDateLocal>2013-12-21T12:00:00</StartDateLocal>
                        <EndDateLocal>2013-12-24T12:00:00</EndDateLocal>
                        <ConfirmationNumber>F1672664579</ConfirmationNumber>
                        <StartCityCode>SEA</StartCityCode>
                        <EndCityCode>SEA</EndCityCode>
                        <StartLocation>SEA</StartLocation>
                        <EndLocation>SEA</EndLocation>
                        <Class>E</Class>
                        <Body>C</Body>
                        <Transmission>M</Transmission>
                        <AirCondition>R</AirCondition>
                        <NumCars>1</NumCars>
                        <DiscountCode>346660</DiscountCode>
                        <DailyRate>44.0000</DailyRate>
                        <TotalRate>44.0000</TotalRate>
                        <RateType>D</RateType>
                        <Currency>USD</Currency>
                        <Charges>
                            <Fixed>
                                <Description>Dropoff Fee</Description>
                                <Currency>USD</Currency>
                                <Amount>0.0000</Amount>
                                <IsPrimary>false</IsPrimary>
                                <SemanticsCode>DROPOFFFEE</SemanticsCode>
                                <SemanticsVendorType>C</SemanticsVendorType>
                            </Fixed>
                            <RateWithAllowance>
                                <Currency>USD</Currency>
                                <Amount>44.0000</Amount>
                                <StartDateLocal>2013-12-21T12:00:00</StartDateLocal>
                                <IsPrimary>true</IsPrimary>
                                <SemanticsCode>DAYS</SemanticsCode>
                                <SemanticsVendorType>C</SemanticsVendorType>
                                <PerUnit>DAY</PerUnit>
                                <NumUnits>1.0000</NumUnits>
                                <AllowanceNumUnits>250.0000</AllowanceNumUnits>
                                <AllowanceAmount>0.2400</AllowanceAmount>
                                <AllowanceIsUnlimited>false</AllowanceIsUnlimited>
                            </RateWithAllowance>
                        </Charges>
                    </Car>
                </Segments>
                <Passengers>
                    <Passenger>
                        <NameFirst>Chris</NameFirst>
                        <NameLast>Miller</NameLast>
                    </Passenger>
                </Passengers>
                <RecordLocator>C123456789</RecordLocator>
                <BookingSource>TravelBookings.com</BookingSource>
                <DateBookedLocal>2013-11-10T13:01:00</DateBookedLocal>
                <ItinSourceName>ConcurConnectAPI</ItinSourceName>
                <PassengerCount>1</PassengerCount>
            </Booking>
            <Booking>
                <Segments>
                    <Hotel>
                        <Vendor>CQ</Vendor>
                        <Status>GK</Status>
                        <StartDateLocal>2013-12-21T23:59:00</StartDateLocal>
                        <EndDateLocal>2013-12-24T23:59:00</EndDateLocal>
                        <ConfirmationNumber>3364214265</ConfirmationNumber>
                        <RateCode>LV4</RateCode>
                        <Name>CONCUR HOTEL</Name>
                        <HotelPropertyId>CONQ</HotelPropertyId>
                        <CheckinTime>03:00 PM</CheckinTime>
                        <CheckoutTime>12:00 PM</CheckoutTime>
                        <NumPersons>1</NumPersons>
                        <NumRooms>1</NumRooms>
                        <CancellationPolicy>Cxl 1 day prior to Arrival</CancellationPolicy>
                        <DailyRate>240.3500</DailyRate>
                        <Currency>USD</Currency>
                        <RoomDescription>1 KING BED ACCESSIBLE ROOM - K1RRC</RoomDescription>
                        <Charges>
                            <Rate>
                                <Currency>USD</Currency>
                                <Amount>240.3500</Amount>
                                <StartDateLocal>2013-12-21T23:59:00</StartDateLocal>
                                <IsPrimary>false</IsPrimary>
                                <SemanticsCode>ROOMRATE</SemanticsCode>
                                <SemanticsVendorType>H</SemanticsVendorType>
                                <PerUnit>DAY</PerUnit>
                                <NumUnits>3.0000</NumUnits>
                            </Rate>
                        </Charges>
                    </Hotel>
                </Segments>
                <Passengers>
                    <Passenger>
                        <NameFirst>Chris</NameFirst>
                        <NameLast>Miller</NameLast>
                    </Passenger>
                </Passengers>
                <RecordLocator>0987654321</RecordLocator>
                <BookingSource>TravelBookings.com</BookingSource>
                <DateBookedLocal>2013-11-10T13:01:00</DateBookedLocal>
                <OriginalItinLocator>33491211</OriginalItinLocator>
                <ItinSourceName>ConcurConnectAPI</ItinSourceName>
                <PassengerCount>1</PassengerCount>
            </Booking>
        </Bookings>
    </Itinerary>

####  XML Example Request of Agency Proposal

    POST https://www.concursolutions.com/api/travel/trip/v1.1?userid_type=login_id&userid_value=cm@example.com HTTPS 1.1
    Authorization: OAuth {access token}
    ...

    <Itinerary xmlns="http://www.concursolutions.com/api/travel/trip/2010/06">
        <ClientLocator>KK-CNQ-1M1P6-5HJ</ClientLocator>
        <ItinSourceName>ConcurConnectAPI</ItinSourceName>
        <TripName>Trip from Dallas to Seattle</TripName>
        <Comments />
        <StartDateLocal>2013-12-21T07:25:00</StartDateLocal>
        <EndDateLocal>2013-12-24T23:59:00</EndDateLocal>
        <BookedByFirstName>Chris</BookedByFirstName>
        <BookedByLastName>Miller</BookedByLastName>
        <TripStatus>7</TripStatus>
        <TravelRequestId>3339</TravelRequestId>
        <CustomAttributes>
            <CustomAttribute>
                <ExternalId />
                <DataType>Numeric</DataType>
                <Name>ProposalBatchSize</Name>
                <DisplayTitle />
                <Data>3</Data>
                <DisplayOnItinerary>true</DisplayOnItinerary>
            </CustomAttribute>
            <CustomAttribute>
                <ExternalId />
                <DataType>Numeric</DataType>
                <Name>ProposalSequenceIndex</Name>
                <DisplayTitle />
                <Data>1</Data>
                <DisplayOnItinerary>true</DisplayOnItinerary>
            </CustomAttribute>
        </CustomAttributes>
        <Bookings>
            <Booking>
                <Segments>
                    <Car>
                        <Vendor>CQ</Vendor>
                        <Status>HK</Status>
                        <StartDateLocal>2013-12-21T12:00:00</StartDateLocal>
                        <EndDateLocal>2013-12-24T12:00:00</EndDateLocal>
                        <ConfirmationNumber>F1672664579</ConfirmationNumber>
                        <StartCityCode>SEA</StartCityCode>
                        <EndCityCode>SEA</EndCityCode>
                        <StartLocation>SEA</StartLocation>
                        <EndLocation>SEA</EndLocation>
                        <Class>E</Class>
                        <Body>C</Body>
                        <Transmission>M</Transmission>
                        <AirCondition>R</AirCondition>
                        <NumCars>1</NumCars>
                        <DiscountCode>346660</DiscountCode>
                        <DailyRate>44.0000</DailyRate>
                        <TotalRate>44.0000</TotalRate>
                        <RateType>D</RateType>
                        <Currency>USD</Currency>
                        <Charges>
                            <Fixed>
                                <Description>Dropoff Fee</Description>
                                <Currency>USD</Currency>
                                <Amount>0.0000</Amount>
                                <IsPrimary>false</IsPrimary>
                                <SemanticsCode>DROPOFFFEE</SemanticsCode>
                                <SemanticsVendorType>C</SemanticsVendorType>
                            </Fixed>
                            <RateWithAllowance>
                                <Currency>USD</Currency>
                                <Amount>44.0000</Amount>
                                <StartDateLocal>2013-12-21T12:00:00</StartDateLocal>
                                <IsPrimary>true</IsPrimary>
                                <SemanticsCode>DAYS</SemanticsCode>
                                <SemanticsVendorType>C</SemanticsVendorType>
                                <PerUnit>DAY</PerUnit>
                                <NumUnits>1.0000</NumUnits>
                                <AllowanceNumUnits>250.0000</AllowanceNumUnits>
                                <AllowanceAmount>0.2400</AllowanceAmount>
                                <AllowanceIsUnlimited>false</AllowanceIsUnlimited>
                            </RateWithAllowance>
                        </Charges>
                    </Car>
                </Segments>
                <Passengers>
                    <Passenger>
                        <NameFirst>Chris</NameFirst>
                        <NameLast>Miller</NameLast>
                    </Passenger>
                </Passengers>
                <RecordLocator>C123456789</RecordLocator>
                <BookingSource>TravelBookings.com</BookingSource>
                <DateBookedLocal>2013-11-10T13:01:00</DateBookedLocal>
                <ItinSourceName>ConcurConnectAPI</ItinSourceName>
                <PassengerCount>1</PassengerCount>
            </Booking>
            <Booking>
                <Segments>
                    <Hotel>
                        <Vendor>CQ</Vendor>
                        <Status>GK</Status>
                        <StartDateLocal>2013-12-21T23:59:00</StartDateLocal>
                        <EndDateLocal>2013-12-24T23:59:00</EndDateLocal>
                        <ConfirmationNumber>3364214265</ConfirmationNumber>
                        <RateCode>LV4</RateCode>
                        <Name>CONCUR HOTEL</Name>
                        <HotelPropertyId>CONQ</HotelPropertyId>
                        <CheckinTime>03:00 PM</CheckinTime>
                        <CheckoutTime>12:00 PM</CheckoutTime>
                        <NumPersons>1</NumPersons>
                        <NumRooms>1</NumRooms>
                        <CancellationPolicy>Cxl 1 day prior to Arrival</CancellationPolicy>
                        <DailyRate>240.3500</DailyRate>
                        <Currency>USD</Currency>
                        <RoomDescription>1 KING BED ACCESSIBLE ROOM - K1RRC</RoomDescription>
                        <Charges>
                            <Rate>
                                <Currency>USD</Currency>
                                <Amount>240.3500</Amount>
                                <StartDateLocal>2013-12-21T23:59:00</StartDateLocal>
                                <IsPrimary>false</IsPrimary>
                                <SemanticsCode>ROOMRATE</SemanticsCode>
                                <SemanticsVendorType>H</SemanticsVendorType>
                                <PerUnit>DAY</PerUnit>
                                <NumUnits>3.0000</NumUnits>
                            </Rate>
                        </Charges>
                    </Hotel>
                </Segments>
                <Passengers>
                    <Passenger>
                        <NameFirst>Chris</NameFirst>
                        <NameLast>Miller</NameLast>
                    </Passenger>
                </Passengers>
                <RecordLocator>0987654321</RecordLocator>
                <BookingSource>TravelBookings.com</BookingSource>
                <DateBookedLocal>2013-11-10T13:01:00</DateBookedLocal>
                <OriginalItinLocator>33491211</OriginalItinLocator>
                <ItinSourceName>ConcurConnectAPI</ItinSourceName>
                <PassengerCount>1</PassengerCount>
            </Booking>
        </Bookings>
    </Itinerary>

##  Post Itinerary Details Response

| ----- |
|  HTTP Responses |  Supported Content Types |
|  [HTTP Status Codes][4] |   |
|  Content Body |   |
|  When the trip is created successfully, the request will return the full posted trip details with the following additional elements inside the **Itinerary** parent element:

|  Element |  Description |
|  id |  The URI containing the trip ID. |   |
|  ItinLocator |  The Itinerary Locator value (trip ID without the URL). The **ItinLocator** value is used when updating an existing trip. |
|  DateModifiedUtc |  The UTC formatted date that this booking was last modified. |
|  BookedVia |  The GDS the itinerary was booked in. |
|  DateBookedLocal |  The date, in the traveler's local time, that the booking was made. |

####  Agency Proposal

The response will include the **CustomAttributes** element and its child elements if the request was an Agency Proposal.

 |

####  XML Example of Successful Response

    <Itinerary xmlns="http://www.concursolutions.com/api/travel/trip/2010/06">
        <id>https://www.concursolutions.com/api/travel/trip/v1.1/CNQR1234567890</id>
        <ItinLocator>CNQR1234567890</ItinLocator>
        <ClientLocator>KK-CNQ-1M1P6-5HJ</ClientLocator>
        <ItinSourceName>ConcurTravel</ItinSourceName>
        <TripName>Trip from Dallas to Seattle</TripName>
        <Comments />
        <StartDateLocal>2013-12-21T07:25:00</StartDateLocal>
        <EndDateLocal>2013-12-24T23:59:00</EndDateLocal>
        <DateModifiedUtc>2012-07-24T19:15:52</DateModifiedUtc>
        <BookedVia>EveryGDS</BookedVia>
        <BookedByFirstName>Chris</BookedByFirstName>
        <BookedByLastName>Miller</BookedByLastName>
        <DateBookedLocal>2012-07-24T19:15:52</DateBookedLocal>
        <Bookings>
            <Booking>
                <Segments>
                    <Car>
                        <Vendor>CQ</Vendor>
                        <Status>HK</Status>
                        <StartDateLocal>2013-12-21T12:00:00</StartDateLocal>
                        <EndDateLocal>2013-12-24T12:00:00</EndDateLocal>
                        <ConfirmationNumber>F1672664579</ConfirmationNumber>
                        <DateModifiedUtc>2012-07-24T19:15:52</DateModifiedUtc>
                        <StartCityCode>SEA</StartCityCode>
                        <EndCityCode>SEA</EndCityCode>
                        <StartLocation>SEA</StartLocation>
                        <EndLocation>SEA</EndLocation>
                        <Class>E</Class>
                        <Body>C</Body>
                        <Transmission>M</Transmission>
                        <AirCondition>R</AirCondition>
                        <NumCars>1</NumCars>
                        <DiscountCode>346660</DiscountCode>
                        <DailyRate>44.0000</DailyRate>
                        <TotalRate>44.0000</TotalRate>
                        <RateType>D</RateType>
                        <Currency>USD</Currency>
                        <Charges>
                            <Fixed>
                                <Description>Dropoff Fee</Description>
                                <Currency>USD</Currency>
                                <Amount>0.0000</Amount>
                                <IsPrimary>false</IsPrimary>
                                <SemanticsCode>DROPOFFFEE</SemanticsCode>
                                <SemanticsVendorType>C</SemanticsVendorType>
                            </Fixed>
                            <RateWithAllowance>
                                <Currency>USD</Currency>
                                <Amount>44.0000</Amount>
                                <StartDateLocal>2013-12-21T12:00:00</StartDateLocal>
                                <IsPrimary>true</IsPrimary>
                                <SemanticsCode>DAYS</SemanticsCode>
                                <SemanticsVendorType>C</SemanticsVendorType>
                                <PerUnit>DAY</PerUnit>
                                <NumUnits>1.0000</NumUnits>
                                <AllowanceNumUnits>250.0000</AllowanceNumUnits>
                                <AllowanceAmount>0.2400</AllowanceAmount>
                                <AllowanceIsUnlimited>false</AllowanceIsUnlimited>
                            </RateWithAllowance>
                        </Charges>
                    </Car>
                </Segments>
                <Passengers>
                    <Passenger>
                        <NameFirst>Chris</NameFirst>
                        <NameLast>Miller</NameLast>
                    </Passenger>
                </Passengers>
                <RecordLocator>C123456789</RecordLocator>
                <BookingSource>ConcurCars</BookingSource>
                <DateModifiedUtc>2012-07-24T19:15:52</DateModifiedUtc>
                <DateBookedLocal>2013-11-10T13:01:00</DateBookedLocal>
                <ItinSourceName>TravelSupplier</ItinSourceName>
                <PassengerCount>1</PassengerCount>
            </Booking>
            <Booking>
                <Segments>
                    <Hotel>
                        <Vendor>CQ</Vendor>
                        <Status>GK</Status>
                        <StartDateLocal>2013-12-21T23:59:00</StartDateLocal>
                        <EndDateLocal>2013-12-24T23:59:00</EndDateLocal>
                        <ConfirmationNumber>3364214265</ConfirmationNumber>
                        <DateModifiedUtc>2012-07-24T19:15:52</DateModifiedUtc>
                        <RateCode>LV4</RateCode>
                        <Name>CONCUR HOTEL</Name>
                        <HotelPropertyId>CONQ</HotelPropertyId>
                        <CheckinTime>00:00</CheckinTime>
                        <CheckoutTime>00:00</CheckoutTime>
                        <NumPersons>1</NumPersons>
                        <NumRooms>1</NumRooms>
                        <CancellationPolicy>Cxl 1 day prior to Arrival</CancellationPolicy>
                        <DailyRate>240.3500</DailyRate>
                        <Currency>USD</Currency>
                        <RoomDescription>1 KING BED ACCESSIBLE ROOM - K1RRC</RoomDescription>
                        <Charges>
                            <Rate>
                                <Currency>USD</Currency>
                                <Amount>240.3500</Amount>
                                <StartDateLocal>2013-12-21T23:59:00</StartDateLocal>
                                <IsPrimary>false</IsPrimary>
                                <SemanticsCode>ROOMRATE</SemanticsCode>
                                <SemanticsVendorType>H</SemanticsVendorType>
                                <PerUnit>DAY</PerUnit>
                                <NumUnits>3.0000</NumUnits>
                            </Rate>
                        </Charges>
                    </Hotel>
                </Segments>
                <Passengers>
                    <Passenger>
                        <NameFirst>Chris</NameFirst>
                        <NameLast>Miller</NameLast>
                    </Passenger>
                </Passengers>
                <RecordLocator>0987654321</RecordLocator>
                <BookingSource>ConcurHotel</BookingSource>
                <DateModifiedUtc>2012-07-24T19:15:52</DateModifiedUtc>
                <DateBookedLocal>2013-11-10T13:01:00</DateBookedLocal>
                <OriginalItinLocator>33491211</OriginalItinLocator>
                <ItinSourceName>ConcurTravel</ItinSourceName>
                <PassengerCount>1</PassengerCount>
            </Booking>
        </Bookings>
    </Itinerary>

####  XML Example of Successful Response for Agency Proposal

    <Itinerary xmlns="http://www.concursolutions.com/api/travel/trip/2010/06">
        <id>https://www.concursolutions.com/api/travel/trip/v1.1/CNQR1234567890</id>
        <ItinLocator>CNQR1234567890</ItinLocator>
        <ClientLocator>KK-CNQ-1M1P6-5HJ</ClientLocator>
        <ItinSourceName>ConcurTravel</ItinSourceName>
        <TripName>Trip from Dallas to Seattle</TripName>
        <Comments />
        <StartDateLocal>2013-12-21T07:25:00</StartDateLocal>
        <EndDateLocal>2013-12-24T23:59:00</EndDateLocal>
        <DateModifiedUtc>2012-07-24T19:15:52</DateModifiedUtc>
        <BookedVia>EveryGDS</BookedVia>
        <BookedByFirstName>Chris</BookedByFirstName>
        <BookedByLastName>Miller</BookedByLastName>
        <DateBookedLocal>2012-07-24T19:15:52</DateBookedLocal>
        <Bookings>
            <Booking>
                <Segments>
                    <Car>
                        <Vendor>CQ</Vendor>
                        <Status>HK</Status>
                        <StartDateLocal>2013-12-21T12:00:00</StartDateLocal>
                        <EndDateLocal>2013-12-24T12:00:00</EndDateLocal>
                        <ConfirmationNumber>F1672664579</ConfirmationNumber>
                        <DateModifiedUtc>2012-07-24T19:15:52</DateModifiedUtc>
                        <StartCityCode>SEA</StartCityCode>
                        <EndCityCode>SEA</EndCityCode>
                        <StartLocation>SEA</StartLocation>
                        <EndLocation>SEA</EndLocation>
                        <Class>E</Class>
                        <Body>C</Body>
                        <Transmission>M</Transmission>
                        <AirCondition>R</AirCondition>
                        <NumCars>1</NumCars>
                        <DiscountCode>346660</DiscountCode>
                        <DailyRate>44.0000</DailyRate>
                        <TotalRate>44.0000</TotalRate>
                        <RateType>D</RateType>
                        <Currency>USD</Currency>
                        <Charges>
                            <Fixed>
                                <Description>Dropoff Fee</Description>
                                <Currency>USD</Currency>
                                <Amount>0.0000</Amount>
                                <IsPrimary>false</IsPrimary>
                                <SemanticsCode>DROPOFFFEE</SemanticsCode>
                                <SemanticsVendorType>C</SemanticsVendorType>
                            </Fixed>
                            <RateWithAllowance>
                                <Currency>USD</Currency>
                                <Amount>44.0000</Amount>
                                <StartDateLocal>2013-12-21T12:00:00</StartDateLocal>
                                <IsPrimary>true</IsPrimary>
                                <SemanticsCode>DAYS</SemanticsCode>
                                <SemanticsVendorType>C</SemanticsVendorType>
                                <PerUnit>DAY</PerUnit>
                                <NumUnits>1.0000</NumUnits>
                                <AllowanceNumUnits>250.0000</AllowanceNumUnits>
                                <AllowanceAmount>0.2400</AllowanceAmount>
                                <AllowanceIsUnlimited>false</AllowanceIsUnlimited>
                            </RateWithAllowance>
                        </Charges>
                    </Car>
                </Segments>
                <Passengers>
                    <Passenger>
                        <NameFirst>Chris</NameFirst>
                        <NameLast>Miller</NameLast>
                    </Passenger>
                </Passengers>
                <RecordLocator>C123456789</RecordLocator>
                <BookingSource>ConcurCars</BookingSource>
                <DateModifiedUtc>2012-07-24T19:15:52</DateModifiedUtc>
                <DateBookedLocal>2013-11-10T13:01:00</DateBookedLocal>
                <ItinSourceName>TravelSupplier</ItinSourceName>
                <PassengerCount>1</PassengerCount>
            </Booking>
            <Booking>
                <Segments>
                    <Hotel>
                        <Vendor>CQ</Vendor>
                        <Status>GK</Status>
                        <StartDateLocal>2013-12-21T23:59:00</StartDateLocal>
                        <EndDateLocal>2013-12-24T23:59:00</EndDateLocal>
                        <ConfirmationNumber>3364214265</ConfirmationNumber>
                        <DateModifiedUtc>2012-07-24T19:15:52</DateModifiedUtc>
                        <RateCode>LV4</RateCode>
                        <Name>CONCUR HOTEL</Name>
                        <HotelPropertyId>CONQ</HotelPropertyId>
                        <CheckinTime>00:00</CheckinTime>
                        <CheckoutTime>00:00</CheckoutTime>
                        <NumPersons>1</NumPersons>
                        <NumRooms>1</NumRooms>
                        <CancellationPolicy>Cxl 1 day prior to Arrival</CancellationPolicy>
                        <DailyRate>240.3500</DailyRate>
                        <Currency>USD</Currency>
                        <RoomDescription>1 KING BED ACCESSIBLE ROOM - K1RRC</RoomDescription>
                        <Charges>
                            <Rate>
                                <Currency>USD</Currency>
                                <Amount>240.3500</Amount>
                                <StartDateLocal>2013-12-21T23:59:00</StartDateLocal>
                                <IsPrimary>false</IsPrimary>
                                <SemanticsCode>ROOMRATE</SemanticsCode>
                                <SemanticsVendorType>H</SemanticsVendorType>
                                <PerUnit>DAY</PerUnit>
                                <NumUnits>3.0000</NumUnits>
                            </Rate>
                        </Charges>
                    </Hotel>
                </Segments>
                <Passengers>
                    <Passenger>
                        <NameFirst>Chris</NameFirst>
                        <NameLast>Miller</NameLast>
                    </Passenger>
                </Passengers>
                <RecordLocator>0987654321</RecordLocator>
                <BookingSource>ConcurHotel</BookingSource>
                <DateModifiedUtc>2012-07-24T19:15:52</DateModifiedUtc>
                <DateBookedLocal>2013-11-10T13:01:00</DateBookedLocal>
                <OriginalItinLocator>33491211</OriginalItinLocator>
                <ItinSourceName>ConcurTravel</ItinSourceName>
                <PassengerCount>1</PassengerCount>
            </Booking>
        </Bookings>
        <CustomAttributes>
            <CustomAttribute>
                <ExternalId />
                <DataType>Numeric</DataType>
                <Name>ProposalBatchSize</Name>
                <DisplayTitle />
                <Data>3</Data>
                <DisplayOnItinerary>true</DisplayOnItinerary>
            </CustomAttribute>
            <CustomAttribute>
                <ExternalId />
                <DataType>Numeric</DataType>
                <Name>ProposalSequenceIndex</Name>
                <DisplayTitle />
                <Data>1</Data>
                <DisplayOnItinerary>true</DisplayOnItinerary>
            </CustomAttribute>
        </CustomAttributes>
    </Itinerary>

##  Post Itinerary Cancellation Request

| ----- |
|  Description |  Supported Content Types |
|  Cancels all segments in the supplied trip.

This endpoint can be used to cancel trips for a user that is not the OAuth consumer. This is most often done when a travel supplier or Travel Management Company needs to cancel a trip on behalf of a user. The supplier or TMC must be registered with Concur and have a Concur account with one of the following user roles: Web Services Administrator for Professional, or Can Administer for Standard.

 |   |
|  Query Parameters - Required |   |
|

* **cancel?{_tripId_}**  
The identifier for the desired trip and the cancel keyword.

Example:  
https://www.concursolutions.com/api/travel/trip/v1.1/cancel?tripId={_tripId_}

 |
|  Query Parameters - Optional |
|

* **userid_type=login_id&userid_value={_loginID_}**  
The Concur loginID of the user that owns the trip. The userid_type and userid_value parameters can only be used if the OAuth consumer has the user role listed above.

Example:  
https://www.concursolutions.com/api/travel/trip/v1.1/cancel?tripId={_tripId_}&userid_type=login_id&userid_value={_loginID_}

 |
|  Request Headers - Required |  Request Headers - Optional |
|  Authorization header with OAuth token for valid Concur user. The OAuth consumer must have one of the following user roles in Concur: Company Administrator or Web Services Administrator for Professional, or Can Administer for Standard. |  None |

####  XML Example Request

    POST /api/travel/trip/v1.1/cancel?tripId=CNQR1234567890 HTTPS 1.1
    Host: [www.concursolutions.com][3]
    Authorization: OAuth {access token}
    ...

##  Post Itinerary Cancellation Response

| ----- |
|  HTTP Responses |  Supported Content Types |
|  [HTTP Status Codes][4] |   |
|  Content Body |   |
|  The request will return the full trip details for the cancelled trip. The trip will contain no segments, as those are all cancelled. The response includes the following additional elements inside the **Itinerary** parent element:

|  Element |  Description |
|  id |  The URI containing the trip ID. |   |
|  ItinLocator |  The Itinerary Locator value (trip ID without the URL). |
|  ClientLocator |  The identifier for the client. |
|  DateModifiedUtc |  The UTC formatted date that this booking was last modified. |
|  BookedVia |  The GDS the itinerary was booked in. |
|  DateBookedLocal |  The date, in the traveler's local time, that the booking was made. |

 |

####  XML Example of Successful Response

    <Itinerary xmlns="http://www.concursolutions.com/api/travel/trip/2010/06">
        <id>https://www.concursolutions.com/api/travel/trip/v1.1/CNQR1234567890</id>
        <ItinLocator>CNQR1234567890</ItinLocator>
        <ClientLocator>KK-CNQ-1M1P6-5HJ</ClientLocator>
        <ItinSourceName>ConcurTravel</ItinSourceName>
        <TripName>Trip from Dallas to Seattle</TripName>
        <Comments />
        <StartDateLocal>2013-12-21T07:25:00</StartDateLocal>
        <EndDateLocal>2013-12-24T23:59:00</EndDateLocal>
        <DateModifiedUtc>2012-07-24T19:15:52</DateModifiedUtc>
        <BookedVia>EveryGDS</BookedVia>
        <BookedByFirstName>Chris</BookedByFirstName>
        <BookedByLastName>Miller</BookedByLastName>
        <DateBookedLocal>2012-07-24T19:15:52</DateBookedLocal>
        <Bookings>
            <Booking>
                <Segments/>
                <Passengers>
                    <Passenger>
                        <NameFirst>Chris</NameFirst>
                        <NameLast>Miller</NameLast>
                    </Passenger>
                </Passengers>
                <RecordLocator>C123456789</RecordLocator>
                <BookingSource>ConcurCars</BookingSource>
                <DateModifiedUtc>2012-07-24T19:15:52</DateModifiedUtc>
                <DateBookedLocal>2013-11-10T13:01:00</DateBookedLocal>
                <ItinSourceName>TravelSupplier</ItinSourceName>
                <PassengerCount>1</PassengerCount>
            </Booking>
            <Booking>
                <Segments/>
                <Passengers>
                    <Passenger>
                        <NameFirst>Chris</NameFirst>
                        <NameLast>Miller</NameLast>
                    </Passenger>
                </Passengers>
                <RecordLocator>0987654321</RecordLocator>
                <BookingSource>ConcurHotel</BookingSource>
                <DateModifiedUtc>2012-07-24T19:15:52</DateModifiedUtc>
                <DateBookedLocal>2013-11-10T13:01:00</DateBookedLocal>
                <OriginalItinLocator>33491211</OriginalItinLocator>
                <ItinSourceName>ConcurTravel</ItinSourceName>
                <PassengerCount>1</PassengerCount>
            </Booking>
        </Bookings>
    </Itinerary>



[1]: https://developer.concur.com/itinerary-tmc-and-third-party-developers/booking-resource/booking-resource-post
[2]: https://developer.concur.com/itinerary-tmc-and-third-party-developers/booking-object-elements-tmcs-and-third-party-developers
[3]: http://www.concursolutions.com "www.concursolutions.com"
[4]: https://developer.concur.com/reference/http-codes
