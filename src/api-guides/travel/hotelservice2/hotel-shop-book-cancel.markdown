---
title: Direct Connect - Hotel v2 - Search, Reserve, and Cancel Walkthrough
layout: reference
---

# Direct Connect - Hotel v2 - Search, Reserve, and Cancel Walkthrough

Basic scenario describing functionality provided by the Hotel Service v2 API incorporated into SAP Concur Travel starting from a hotel search, through to confirmation of a booking and ending with a cancellation.

* [Actors](#actors)
* [Hotel search, reserve, and cancel walkthrough](#walkthrough)
  * [Search](#search)
  * [Reserve](#reserve)
  * [Cancel](#cancel)
* [General System Overview](#sequence-diagram)

## <a name="actors"></a>Actors

1. Primary Actor - Business traveler (or travel arranger)
1. Secondary Actor - Hotel Supplier
1. Tertiary Actor - SAP Concur

## <a name="walkthrough"></a>Hotel Search, Reserve, and Cancel Walkthrough

### <a name="search"></a> Hotel Search
1. <a name="#start-shop"></a>Business traveler performs a hotel search. The criterion for the [Search](https://developer.concur.com/api-reference/direct-connects/hotel-service-2/Search.html) request will be comprised of the input in the search form, and the search radius will be obtained from the travel configuration.

    <a href='./images/general-walkthrough/search-form.png'><img style="max-width:300px" src="./images/general-walkthrough/search-form.png"/></a>
    *Hotel Search*

    <a href='./images/general-walkthrough/travel-config-radius.png'><img style="max-width:300px" src="./images/general-walkthrough/travel-config-radius.png"/></a>
    *Travel Configuration*

    Sample search request:

    ```
    <Criteria>
      <Criterion>
        <Position Latitude="47.606209" Longitude="-122.332071"></Position>
        <RefPoint></RefPoint>
        <HotelRef HotelName="Downtown"></HotelRef>
        <Radius Distance="5" DistanceMax="30" UnitOfMeasureCode="1"></Radius>
        <StayDateRange Start="2021-09-28" End="2021-10-01"></StayDateRange>
      </Criterion>
    </Criteria>
    ```

    `Distance` is defined by the radius value from the hotel search form, and `DistanceMax` is defined by the Search Radius for Corporate Hotels on the travel configuration.

    [Sample search request](./sample-requests/general-walkthrough/search-rq.xml)

    [Sample search response](./sample-requests/general-walkthrough/search-rs.xml)

    Out of 100 returned hotels in the response from the Hotel Supplier, the response may contain the 10 `most_preferred` hotels within a 30 mile radius, the 10 `preferred` hotels within a 30 mile radius, and the 10 `less_preferred` hotels within a 30 mile radius. The remaining 70 hotels would be `not_preferred` hotels within a 5 mile radius. Note: The preference level is defined by the `HotelPreference` element in the TPA_Extensions, which is outlined in Search.

    Please refer to the [FAQ](./faq.html#search) for additional information regarding Search.

2. Once the [Search](https://developer.concur.com/api-reference/direct-connects/hotel-service-2/Search.html) response is received, an [Availability](https://developer.concur.com/api-reference/direct-connects/hotel-service-2/Availability.html) request is invoked. The number of hotel codes specified in the Availability request is determined by the Number of hotels to shop setting in travel configuration settings shown below. Up to 100 hotels can be included in the Availability request.

    <a href='./images/general-walkthrough/travel-config-hotels-to-shop.png'><img style="max-width:300px" src="./images/general-walkthrough/travel-config-hotels-to-shop.png"/></a>

    ````
    <AvailRequestSegments>
      <AvailRequestSegment>
        <HotelSearchCriteria>
          <Criterion>
            <HotelRef ChainCode="PF" HotelCode="HP070213"></HotelRef>
          </Criterion>
          <Criterion>
            <HotelRef ChainCode="ZZ" HotelCode="HH910312"></HotelRef>
          </Criterion>
          <Criterion>
            <HotelRef ChainCode="TL" HotelCode="HT030025"></HotelRef>
          </Criterion>
          <Criterion>
            <HotelRef ChainCode="CU" HotelCode="HH871486"></HotelRef>
          </Criterion>
          <Criterion>
            <HotelRef ChainCode="LQ" HotelCode="HL031350"></HotelRef>
          </Criterion>
        </HotelSearchCriteria>
      </AvailRequestSegment>
    </AvailRequestSegments>
    ````

    [Sample availability request](./sample-requests/general-walkthrough/avail-rq.xml)

    [Sample availability response](./sample-requests/general-walkthrough/avail-rs.xml)

    Please refer to the [FAQ](./faq.html#availability) for additional information regarding Availability.

3. When the [Availability](https://developer.concur.com/api-reference/direct-connects/hotel-service-2/Availability.html) response is received, the UI displays the available hotels. Hotels included in the Availability response will display a lead rate and the **View Rooms** button, or Not Available, based on the provider's response. The business traveler can then select **View Rooms** for a hotel with a lead rate displayed, or request to **Get Rates** in case they are not present.

    <a href='./images/general-walkthrough/search-results.png'><img style="max-width:300px" src="./images/general-walkthrough/search-results.png"/></a>

    <a href='./images/general-walkthrough/search-results-unpriced.png'><img style="max-width:300px" src="./images/general-walkthrough/search-results-unpriced.png"/></a>

4. If a business traveler selects **Get Rates**, an additional [Availability](https://developer.concur.com/api-reference/direct-connects/hotel-service-2/Availability.html) request will be made for the selected hotel. The request will be sent with a single hotel code. The response will be used to display the lead rate, and the button will change to **View Rooms**. Parallel Availability requests should be supported as the UI allows users to click **Get Rates** on multiple hotels without blocking.

    [Sample availability request for single hotel](./sample-requests/general-walkthrough/avail-rq-single.xml)

    [Sample availability response for single hotel](./sample-requests/general-walkthrough/avail-rs-single.xml)


5. Before viewing the rooms, the business traveler clicks **Hotel details** to obtain more information about the property. This results in a [HotelDescriptiveInfo](https://developer.concur.com/api-reference/direct-connects/hotel-service-2/Descriptive-info.html) request. The content from the response will be displayed in a popup window.

    <a href='./images/general-walkthrough/hotel-details.png'><img style="max-width:300px" src="./images/general-walkthrough/hotel-details.png"/></a>

    [Sample descriptive info request](./sample-requests/general-walkthrough/hoteldetail-rq.xml)

    [Sample descriptive info response](./sample-requests/general-walkthrough/hoteldetail-rs.xml)

    Please refer to the [FAQ](./faq.html#hotel-descriptive-info) for additional information regarding `HotelDescriptiveInfo`.

6. Upon selecting View Rooms, the UI displays all available rates for the chosen hotel.

    <a href='./images/general-walkthrough/hotel-rate-listing.png'><img style="max-width:300px" src="./images/general-walkthrough/hotel-rate-listing.png"/></a>

7. Note each rate displays a Rules and cancellation policy link. When the business traveler clicks the link, if the cancellation details were deferred as indicated by [TPA_Extensions/RateDetailsInd](https://developer.concur.com/api-reference/direct-connects/hotel-service-2/Availability.html#res-schema), a [RateDetails](https://developer.concur.com/api-reference/direct-connects/hotel-service-2/Rate-details.html) request will be invoked. The response content will be displayed in a pop-up window.

    <a href='./images/general-walkthrough/rules-and-cancellation-policy.png'><img style="max-width:300px" src="./images/general-walkthrough/rules-and-cancellation-policy.png"/></a>

    [Sample rate details request](./sample-requests/general-walkthrough/ratedetails-rq.xml)

    [Sample rate details response](./sample-requests/general-walkthrough/ratedetails-rs.xml)

    Please refer to the [FAQ](./faq.html#availability) for additional information regarding `RateDetails`.

8. The business traveler closes the “Rules and cancellation policy” pop-up window and selects a rate. The Trip Summary page is displayed where the Business traveler can set the Hotel Preferences, Enter Guest information (from their profile), select the method of payment and view the total estimated price. The Rate rules and cancellation policy will be displayed as well. Like the previous step, if the cancellation details were deferred, a [RateDetails](https://developer.concur.com/api-reference/direct-connects/hotel-service-2/Rate-details.html) request will be invoked.

### <a name="reserve"></a>Hotel Reservation
9. The business traveler agrees to the rate rules, restrictions and cancellation policy and clicks **Reserve Hotel and Continue**.

    <a href='./images/general-walkthrough/review-and-reserve-hotel.png'><img style="max-width:300px" src="./images/general-walkthrough/review-and-reserve-hotel.png"/></a>


10. When the reservation request succeeds, the details of the reservation will be displayed to the business traveler

    <a href='./images/general-walkthrough/trip-confirmation.png'><img style="max-width:300px" src="./images/general-walkthrough/trip-confirmation.png"/></a>

    [Sample book request](./sample-requests/general-walkthrough/book-rq.xml)

    [Sample book response](./sample-requests/general-walkthrough/book-rs.xml)

    Please refer to the [FAQ](./faq.html#reservation) for additional information regarding Reservation.

11. When the reservation details are displayed SAP Concur will invoke a [ReadItinerary](https://developer.concur.com/api-reference/direct-connects/hotel-service-2/Read-Itinerary.html) request. If a Read request does not arrive within 5 minutes for a given Reservation, then the supplier should treat that Reservation as an orphan and should thus seek to cancel it. The business traveler completes their reservation by confirming the booking.

    [Sample read request](./sample-requests/general-walkthrough/read-rq-load-trip.xml)

    [Sample read response](./sample-requests/general-walkthrough/read-rs-load-trip.xml)

    Please refer to the [FAQ](./faq.html#read-itinerary) for additional information regarding `ReadItinerary`.
### <a name="view"></a> View Reservation

12. The business traveler can view the trip listed in the **Trip Library**. From this view, the traveler could choose to cancel the entire trip. However, to view the details, the Business traveler clicks on the **trip name**.

    <a href='./images/general-walkthrough/trip-library.png'><img style="max-width:300px" src="./images/general-walkthrough/trip-library.png"/></a>
    *Trip Library*

    <a href='./images/general-walkthrough/trip-details.png'><img style="max-width:300px" src="./images/general-walkthrough/trip-details.png"/></a>
    *Trip Details*

### <a name="cancel"></a> Hotel Cancellation

13. The Business traveler chooses to cancel the hotel reservation, by clicking **cancel** in the hotel segment of the trip details.


14. The UI shows the **Cancel Trip** pop-up where the Business traveler may choose to enter a comment. The Business traveler clicks **OK**. At this time a [ReadItinerary](https://developer.concur.com/api-reference/direct-connects/hotel-service-2/Read-Itinerary.html) request is made to reconcile differences between the local details, and the details of the reservation from the supplier.


15. The UI shows the **Rules and cancellation policy**. The Business traveler accepts the policies by checking the 'I agree ...' checkbox and clicking **Continue**. A [Cancel](https://developer.concur.com/api-reference/direct-connects/hotel-service-2/Cancel.html) request will be made.
<a href='./images/general-walkthrough/accept-cancellation-policy-before-cancelling.png'><img style="max-width:300px" src="./images/general-walkthrough/accept-cancellation-policy-before-cancelling.png"/></a>

16. The cancellation confirmation number from the response will be displayed to the business traveler.

    <a href='./images/general-walkthrough/cancel-confirmation.png'><img style="max-width:300px" src="./images/general-walkthrough/cancel-confirmation.png"/></a>


    [Sample cancel request](./sample-requests/general-walkthrough/cancel-rq.xml)

    [Sample cancel response](./sample-requests/general-walkthrough/cancel-rs.xml)

    Please refer to the [FAQ](./faq.html#cancel) for additional information regarding Cancel.

## <a name="sequence-diagram"></a>General System Overview
![./media/image1.png](./images/diagrams/hs2-sequence-diagram.png)
