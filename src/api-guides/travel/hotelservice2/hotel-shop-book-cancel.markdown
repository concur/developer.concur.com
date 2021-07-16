---
title: Direct Connect - Hotel v2 - Search, reserve, and cancel walkthrough
layout: reference
---

Basic scenario describing functionality provided by the Hotel Service v2 API incorporated into SAP Concur Travel starting from a hotel search, through to confirmation of a booking and ending with a cancellation.

* [Actors](#actors)
* [Hotel search, reserve, and cancel walkthrough](#walkthrough)
  * [Search](#search)
  * [Reserve](#reserve)
  * [Cancel](#cancel)
* [General System Overview](#sequence-diagram)

## <a name="actors"></a>Actors

1. Primary Actor - Business traveler
1. Secondary Actor - Hotel Supplier
1. Tertiary Actor - SAP Concur

## <a name="walkthrough"></a>Hotel search, reserve, and cancel walkthrough

### <a name="search"></a> Hotel Search
1. <a name="#start-shop"></a>Business traveler performs a hotel search. The criterion for the [Search](https://developer.concur.com/api-reference/direct-connects/hotel-service-2/Search.html) request will be comprised of the input in the search form, and the search radius will be obtained from the travel configuration (link to TSG).
    
    <a href='./images/general-walkthrough/search-form.png'><img style="max-width:300px" src="./images/general-walkthrough/search-form.png"/></a>
    
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
    
    [Sample search request](./sample-requests/general-walkthrough/search-rq.xml)

    [Sample search response](./sample-requests/general-walkthrough/search-rs.xml)

    Out of 100 hotels returned in the response from the Hotel Supplier, the first 10 hotels are the Most Preferred hotels within a 30km radius. The next 10 hotels are the Preferred hotels within a 30km radius. The remaining 80 hotels are hotels with no preference within a 5km radius. Note: The preference level is defined by the HotelPreference element in the TPA_Extensions, which is outlined in Search.

    Please refer to the Search [FAQ](./faq.html#search) for additional information.

2. Once the [Search](https://developer.concur.com/api-reference/direct-connects/hotel-service-2/Search.html) response is received, an [Availability](https://developer.concur.com/api-reference/direct-connects/hotel-service-2/Availability.html) request is invoked. The number of hotel codes specified in the Availability request is determined by the Number of hotels to shop setting in travel configuration settings shown below.

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

    Please refer to the Availability [FAQ](./faq.html#availability) for additional information.


3. When the [Availability](https://developer.concur.com/api-reference/direct-connects/hotel-service-2/Availability.html) response is received, the UI displays the available hotels. The business traveler can then select **View Rooms** for a hotel with a lead rate displayed, or request to **Get Rates** in case they are not present.

    <a href='./images/general-walkthrough/search-results.png'><img style="max-width:300px" src="./images/general-walkthrough/search-results.png"/></a>
    
    <a href='./images/general-walkthrough/search-results-unpriced.png'><img style="max-width:300px" src="./images/general-walkthrough/search-results-unpriced.png"/></a>

4. If a business traveler selects **Get Rates**, an additional [Availability](https://developer.concur.com/api-reference/direct-connects/hotel-service-2/Availability.html) request will be made for the selected hotel. The request will be sent with a single hotel code. The response will be used to display the lead rate, and the button will change to **View Rooms**.

    [Sample availability request for single hotel](./sample-requests/general-walkthrough/avail-rq-single.xml)

    [Sample availability response for single hotel](./sample-requests/general-walkthrough/avail-rs-single.xml)


5. Before viewing the rooms, the business traveler clicks **Hotel details** to obtain more information about the property. This results in a [HotelDescriptiveInfo](https://developer.concur.com/api-reference/direct-connects/hotel-service-2/Descriptive-info.html) request. The content from the response will be displayed in a popup window.

    <a href='./images/general-walkthrough/hotel-details.png'><img style="max-width:300px" src="./images/general-walkthrough/hotel-details.png"/></a>

    ````
    <HotelInfo>
      <Descriptions>
        <DescriptiveText>here are 88 spacious and comfortable rooms, all with High Speed Wireless Internet Access. Our king and double queen rooms have refrigerators, and there is a fitness center on-site. We are just 2 blocks from the Space Needle and Seattle Center and a short walk to Key Arena Pacific Science Center and the Seattle Opera and Ballet. Enjoy hot breakfast each morning and Seattles Best Coffee is served 24-hours daily. We are a 100 percent non-smoking hotel.</DescriptiveText>
      </Descriptions>
    </HotelInfo>
    <MultimediaDescriptions>
      <MultimediaDescription>
        <ImageItems>
          <ImageItem>
            <ImageFormat>
              <URL>https://hotelsupplier.com/C57EE13F7FFB4026877B07346B89D109/A.JPEG</URL>
            </ImageFormat>
          </ImageItem>
        </ImageItems>
      </MultimediaDescription>
    </MultimediaDescriptions>
    <TPA_Extensions>
      <Description Name="What's nearby">
        <Text>West Maui Mountains</Text>
        <Text>Oneloa Beach</Text>
      </Description>
      <Description Name="Restaurants>
        <Text>The Banyan Tree</Text>
      </Description>
    </TPA_Extensions>
    ````

    [Sample descriptive info request](./sample-requests/general-walkthrough/hoteldetail-rq.xml)

    [Sample descriptive info response](./sample-requests/general-walkthrough/hoteldetail-rs.xml)

    Please refer to the HotelDescriptiveInfo [FAQ](./faq.html#hotel-descriptive-info) for additional information.
    

6. Upon selecting View Rooms, the UI displays all available rates for the chosen hotel. 

    <a href='./images/general-walkthrough/hotel-rate-listing.png'><img style="max-width:300px" src="./images/general-walkthrough/hotel-rate-listing.png"/></a>

7. Note each rate displays a Rules and cancellation policy link. When the business traveler clicks the link, if the cancellaton details were defered as indicated by [TPA_Extensions/RateDetailsInd](https://developer.concur.com/api-reference/direct-connects/hotel-service-2/Availability.html#res-schema), a [RateDetails](https://developer.concur.com/api-reference/direct-connects/hotel-service-2/Rate-details.html) request will be invoked. The response content will be displayed in a pop-up window.

    <a href='./images/general-walkthrough/rules-and-cancellation-policy.png'><img style="max-width:300px" src="./images/general-walkthrough/rules-and-cancellation-policy.png"/></a>

    [Sample rate details request](./sample-requests/general-walkthrough/ratedetails-rq.xml)

    [Sample rate details response](./sample-requests/general-walkthrough/ratedetails-rs.xml)

    Please refer to the RateDetails [FAQ](./faq.html#availability) for additional information.

8. The UI displays all available rates for the chosen hotel. The Business traveler selects the top most rate. The Trip Summary page is displayed where the Business traveler can set the Hotel Preferences, Enter Guest information (from their profile), select the method of payment and view the total estimated price. The Rate rules and cancellation policy will be displayed as well. Like the previous step, if the cancellation details were deferred, a [RateDetails](https://developer.concur.com/api-reference/direct-connects/hotel-service-2/Rate-details.html) request will be invoked.

### <a name="reserve"></a>Hotel Reservation
9. The business traveler agrees to the rate rules, restrictions and cancellation policy and clicks **Reserve Hotel and Continue**.

    <a href='./images/general-walkthrough/review-and-reserve-hotel.png'><img style="max-width:300px" src="./images/general-walkthrough/review-and-reserve-hotel.png"/></a>


10. When the reservation request succeeds, the details of the reservation will be displayed to the business traveler

    <a href='./images/general-walkthrough/trip-confirmation.png'><img style="max-width:300px" src="./images/general-walkthrough/trip-confirmation.png"/></a>

    [Sample book request](./sample-requests/general-walkthrough/book-rq.xml)

    [Sample book response](./sample-requests/general-walkthrough/book-rs.xml)

    Please refer to the Reservation [FAQ](./faq.html#reservation) for additional information.

### <a name="cancel"></a> Hotel Cancellation
11. When the reservation details are displayed SAP Concur will invoke a [ReadItinerary](https://developer.concur.com/api-reference/direct-connects/hotel-service-2/Read-Itinerary.html) request. If a Read request does not arrive within 5 minutes for a given Reservation, then the supplier should treat that Reservation as an orphan and should thus seek to cancel it.

    [Sample read request](./sample-requests/general-walkthrough/read-rq-load-trip.xml)

    [Sample read response](./sample-requests/general-walkthrough/read-rs-load-trip.xml)

    Please refer to the ReadItinerary [FAQ](./faq.html#read-itinerary) for additional information.

12. The business traveler can view the trip in the **Upcoming Trips** tab on the main Travel page. The Business traveler clicks on the **Trip name**. The Business traveler chooses to cancel the hotel reservation, by clicking **cancel**.

    <a href='./images/general-walkthrough/trip-details.png'><img style="max-width:300px" src="./images/general-walkthrough/trip-details.png"/></a>

13. The UI shows the **Cancel Trip** pop-up where the Business traveler may choose to enter a comment. The Business traveler clicks **OK**. At this time a [ReadItinerary](https://developer.concur.com/api-reference/direct-connects/hotel-service-2/Read-Itinerary.html) request is made to reconcile differences between the local details, and the details of the reservation from the supplier.


14. The UI shows the **Rules and cancellation policy**. The Business traveler accepts the policies by checking the 'I agree ...' checkbox and clicking **Continue**. A [Cancel](https://developer.concur.com/api-reference/direct-connects/hotel-service-2/Cancel.html) request will be made.
<a href='./images/general-walkthrough/accept-cancellation-policy-before-cancelling.png'><img style="max-width:300px" src="./images/general-walkthrough/accept-cancellation-policy-before-cancelling.png"/></a>

15. The cancellation confirmation number from the response will be displayed to the business traveler.

    <a href='./images/general-walkthrough/cancel-confirmation.png'><img style="max-width:300px" src="./images/general-walkthrough/cancel-confirmation.png"/></a>


    [Sample cancel request](./sample-requests/general-walkthrough/cancel-rq.xml)

    [Sample cancel response](./sample-requests/general-walkthrough/cancel-rs.xml)

    Please refer to the Cancel [FAQ](./faq.html#cancel) for additional information.
    
    

## <a name="sequence-diagram"></a>General System Overview
![./media/image1.png](./images/diagrams/hs2-sequence-diagram.png)
