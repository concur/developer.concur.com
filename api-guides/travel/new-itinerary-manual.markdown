---
title: Itinerary - Add a New Itinerary Manually
layout: reference
---

## API Recipes: API Tasks
This series of API Recipes describes API tasks associated with Apps for Travel Management Companies, (TMC), Travel Suppliers and business who need to get data about their employees' travel related booking.  This recipe assumes you are a current Concur customer or platform partner.

#### Before you begin
Review the following checklist to ensure you are able to perform the task in this recipe. To see reference information, click the link in the bullet point.

- Understand the [Oath 2.0 process](https://developer.concur.com/api-reference/authentication/authentication.html)
- Be able to access the [Get Trips API](https://developer.concur.com/api-reference/travel/itinerary/trip/trip-resource.html#postnt)
- Ensure you have a definition [XSD](https://developer.concur.com/api-reference/travel/itinerary/ItinServices_Public_0.xsd), usable for architecting your solution

#### Manually add a new itinerary
Manually adding a new itinerary will give you the means to perform a range of secondary tasks like pulling trip information to associate a hotel reservation done through Concur with a rental car reservation done through the rental car agency's website. It can be used to expose that data to an app in the App Center like Visage, an app that pushes international travel alerts.

Using the following process, you can easily create trips in your sandbox for test purposes.

1. Log into your sandbox.
2. Click the **Travel** tab.


      <html>
      <body>
      <img src="/api-guides/images/Concur_admin_console_num.JPG" alt="Add New Reservation">
      </body>
      </html>

      
3. In Travel Alerts, click the **Upcoming Trips** tab.
4. Click **Add new Itinerary manually**.The **Add New Reservation** dialog appears.
5. **Select Create New Trip** from the drop down, **Add Reservation to Trip**.


      <html>
      <body>
      <img src="/api-guides/images/Create_new_trip_num.JPG" alt="Create new trip">
      </body>
      </html>


6. Select from: **Add Flight**, **Add Car**, **Add Hotel** or **Add Rail** (not shown). Enter the appropriate test data by using the drop down features or by using the free form fields.


    <html>
    <body>
    <img src="/api-guides/images/Add_New_Reservation_num.JPG" alt="Add New Reservation">
    </body>
    </html>


Fields marked with * are required.
7. Click **Save and Close** to save your data.
8. Click **Trip Library** to see your manually created itinerary.

#### Refer to the sample GET Itinerary Details body below for guidance:

###### XML Example Request with Paging:

```
GET /api/travel/trip/v1.1/?createdAfterDate=2012%2F02%2F01&includeMetadata=true&ItemsPerPage=2&Page=1 HTTP 1.1
Host: [www.concursolutions.com][1]
Authorization: OAuth {access token}
```

###### XML example of a successful response with Paging:

```
HTTP 1.1 200 OK
Content-Type: application/xml
...

<ConnectResponse>
    <Metadata>
        <Paging>
            <TotalPages>38</TotalPages>
            <TotalItems>187</TotalItems>
            <CurrentPage>2</CurrentPage>
            <ItemsPerPage>2</ItemsPerPage>
            <PreviousPageURL>https://www.concursolutions.com/api/travel/trip/v1.1/?createdAfterDate=2012%2F02%2F01&amp;itemsPerPage=5&amp;page=3&amp;includeMetaData=true</PreviousPageURL>
            <NextPageURL>https://www.concursolutions.com/api/travel/trip/v1.1/?createdAfterDate=2012%2F02%2F01&amp;itemsPerPage=5&amp;page=1&amp;includeMetaData=true</NextPageURL>
        </Paging>
    </Metadata>
    <Data>
        <ItineraryInfoList xmlns="http://www.concursolutions.com/api/travel/trip/2010/06" xmlns:i="http://www.w3.org/2001/XMLSchema-instance">
            <ItineraryInfo>
                <TripId>naIzQJ0y2DBWjCIQOb2SHTsozwBsHDkdP</TripId>
                <TripName>Trip from Baltimore to New York</TripName>
                <StartDateLocal>2012-02-15T09:00:00</StartDateLocal>
                <EndDateLocal>2012-02-21T17:30:00</EndDateLocal>
                <UserLoginId>cm@example.com</UserLoginId>
                <DateModifiedUtc>2012-02-14T17:13:07</DateModifiedUtc>
                <id>https://www.concursolutions.com/api/travel/trip/v1.1/naIzQJ0y2DBWjCIQOb2SHTsozwBsHDkdP</id>
            </ItineraryInfo>
            <ItineraryInfo>
                <TripId>I2uwiJJw8r7Owl3IWlSie9WIelxhAhwiL</TripId>
                <TripName>Trip from Baltimore to Seattle</TripName>
                <StartDateLocal>2012-03-26T09:00:00</StartDateLocal>
                <EndDateLocal>2012-03-29T17:30:00</EndDateLocal>
                <DateModifiedUtc>2012-03-24T19:00:00</DateModifiedUtc>
                <UserLoginId>cm@example.com</UserLoginId>
                <id>https://www.concursolutions.com/api/travel/trip/v1.1/I2uwiJJw8r7Owl3IWlSie9WIelxhAhwiL</id>
            </ItineraryInfo>
        </ItineraryInfoList>
    </Data>
</ConnectResponse>
```

###### Test your API in your tool of choice. A successful response will look like this:

```
HTTP 1.1 200 OK
Content-Type: application/xml
...

<?xml version="1.0" encoding="utf-8"?>
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
```

#### Make us better at making your experience easier.
Share a Concur API process issue we can do better. Provide us with an explanation, screen shots and your recommendation [here](http://forum.developer.concur.com/).
