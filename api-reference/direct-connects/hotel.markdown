---
title: Hotel Direct Connect 
layout: reference
---

## Description 
The Hotel Services Direct Connect from Concur Connect provides a method for Travel users to access hotel inventory.

Once the hotel supplier has developed and certified their interface with Concur, their inventory will begin appearing in hotel searches by opted-in Travel users.

This callout differs from the inbound Concur web services in the following ways:

* It uses an outbound message where Travel calls a public facing API endpoint provided by the hotel supplier.
* The supplier configures and maintains the public web service interface. This guide specifies the request and response format required by Concur.

## Works With These Concur Products
* **Travel** for Concur Professional/Premium
* **Travel** for Concur Standard

## Product Restrictions

This direct connect is only available to Travel Suppliers with Hotel inventory. This direct connect is not supported in the Concur mobile application.

Concur products are highly configurable, and not all clients will have access to all features.

Partner developers must determine which configurations are required for their solution prior to the application review process. Use the <a href="https://forum.developer.concur.com/" target="_blank">developer forum</a> if you have questions about the configuration settings.

## Hotel Process Overview
The configuration process has the following steps:

1. The Hotel Supplier creates the application on their system that will accept the requests from Concur and return the appropriate responses.
2. The Hotel Supplier creates the endpoint on their system that Concur uses to access their inventory.
3. Concur creates a production company for the hotel supplier.
4. The Hotel Supplier registers their application with Concur by logging in to their production company.
5. Concur and the Hotel Supplier validate the application:
    * The Hotel Supplier develops to the Concur API and provides a test system.
    * The Hotel Supplier provides the URIs and credentials for their test system to Concur.
    * Concur sets up the vendor in the certification systems and runs a series of tests to validate the interaction between the two systems.
    * Once certification passes, the Hotel supplier sends Concur the production URIs and credentials.
    * Concur updates the production servers with the supplier's production data and does a test booking. Upon successful completion, the supplier will be live in Concur for any customer to enable.
6. The Travel client opts in to the Hotel callout (within the Travel Configuration) to allow their users to view and book the available inventory.

Once the configuration is complete, the callout uses the following process:

1. The user searches for hotels when creating an itinerary in Travel.
2. Travel sends the search request to the endpoint, using the Post HotelSearch.
3. The supplier returns the properties.
4. Travel sends a request for rates for some of the properties using the Post HotelAvail request. The number of properties is configurable with a current maximum of 25. More than one property may be specified in each Post HotelAvail request.
5. If the user chooses to reserve a hotel room, Travel sends the Post HotelBookingRule and shows the booking and cancellation policies to the user.
6. If the user accepts the policy, Travel sends the Post HotelRes.
7. Travel will send Post HotelItin requests to show the user their reservation. This will happen whenever the user views their itinerary.

This callout can also be used to perform the following functions:

* Get Hotel Availabililty on a Property that was not priced in the original request
* Get the Reservation Details
* Modify the Hotel Reservation
* Cancel the Hotel Reservation

## Hotel URL Structure

The hotel direct connect sends the relevant information to a URL that the travel supplier maintains.  
A recommended URL structure is: `https://{servername}/concur/hotel/v1/`

The URL is provided by the supplier when registering the partner application.

You can use either one endpoint for all messages, or a dedicated one for each message type. In that case you have to follow these rules:

The only allowed difference between the endpoint URLs can be the message name (without OTA_ and RQ/RS):  

`https://{servername}/concur/hotel/v1/HotelSearch `<br/>
`https://{servername}/concur/hotel/v1/HotelAvail`

The variable part doesn't need to be at the end:  

`https://{servername}/concur/hotel/HotelSearch/v1/ ` <br/>
`https://{servername}/concur/hotel/HotelAvail/v1/`

## Security 
Concur will make calls to the application connector's endpoint using SSL. During configuration, Concur will connect to the application connector to validate that its hostname and access credentials are valid.  
Concur will not be able to connect to the application connector until a certificate signed by a Certificate Authority (CA) is installed in the application connector. If you are hosting the application connector, you will need to install the signed certificate before Concur can access the connector.  
Concur will use Http Basic authentication. The hotel supplier will need to provide credentials that Concur will send to the supplier's system for each message. 

##Outbound Messages
The Concur outbound message format is based upon a subset of the <a href="http://www.opentravel.org/Specifications/SchemaIndex.aspx?FolderName=2011B" target="_blank">OTA2011B hotel standard.</a> Please refer to the Function links below for the details of the request and response format.

Please note the following general information about this format:

* All messages are stateless; there is no session and a message may come from a different Travel IP address.
* Preferred language will be sent in all requests. Hotel suppliers should make a best effort to return the users preferred language. If the users preferred language is not supported, a default language may be used instead.
* A customer identifier will be sent in all requests. The intent of this is to provide customer specific data such as hotel preference and special customer discounts or policies.
* Gzip compression is supported in requests and responses. This is controlled through the normal http gzip protocols and is not required.
* All responses will be limited to an uncompressed size of 5MB and must return within 30 seconds.
* For Production systems, the current IP address ranges are (you need to enable all of them):  
o 12.129.29.0/24 and 12.129.32.0/22 (US data center)  
o 84.14.175.224/27 and 62.23.83.128/25 (EU data center)

## Functions 
[Post Availability Search][3]

[Post Booking Rule Search][4]

[Post Hotel Search][5]

[Post New Reservation][6]

[Post Reservation Cancellation][7]

[Post Reservation Update ][8]

[Post Reservation Query][9]


## Additional Information

[Hotel Direct Connect Codes][10]


###  Concur Travel Configuration

The Travel clients opt in to the Hotel inventory using a setting in the Travel Configuration. Clients must contact Concur to have this setting activated.

###  Versioning

In most cases, new versions of Hotel Services will involve adding support for various optional nodes and attributes in the OTA standards. These changes will be backwards compatible and should not require any mandatory changes and hotel suppliers will be upgrade automatically. In the situation where a change is implemented which cannot be made backwards compatible, suppliers will need to upgrade the Hotel Services interface by and provide a new set of hotel URIs. Concur recommends that the version of the interface be part of the hotel URI provided by the hotel suppliers.

###  Certification

The certification process will start once the vendor has completed their integration with the Concur certification systems. Certification consists of running through several use cases on the certification servers and validating that in each scenario the correct response is sent. Typically, most potential issues are being worked out during the integration process and certification can be accomplished in a day or two. An example of a use case during certification would be a user searching and booking a property several months out, viewing an itinerary, changing the dates of the property, and then cancelling the reservation.

###  Responses and Errors

For error handling we don't use any special message. Just return the appropriate response, only replace Success node with Errors and provide some error description. Please follow the OTA Code Table for error codes. Please provide as descriptive error text as possible. It will make tracing problems lot easier on both sides.

###  General Requirements

Information on format or value requirements that are used in multiple endpoints is included here.

**Codes**

All the codes used by the Hotel Direct Connect are documented in the [Hotel Direct Connect Code PDF][10].

**Corporate Identifier**

The corporate identifier will be passed as RequestorID node. The values will be configured on setup. Please keep the Type compliant with  ID Type Codes.

```xml
    <POS>
        <Source ISOCountry="US" ISOCurrency="USD">
            <RequestorID Type="4" ID="7777777" ID_Context="MyHotel" />
        </Source>
    </POS>
```

If a vendor requires additional identification of the client system (all calls to vendor will have the same value), you can provide a second RequestorID:

```xml
    <POS>
        <Source ISOCountry="US" ISOCurrency="USD">
            <RequestorID Type="4" ID="7777777" ID_Context="MyHotel" />
            <RequestorID Type="7" ID="8172927" ID_Context="WholeTravel" />
        </Source>
    </POS>
```

Please keep the Type compliant with  ID Type Codes. The supported codes for the Requestor ID Type are: 1,2,3,4,5,7,9,13,18,21

**ID Type Codes Table**

|  Code |  Description |
| ----- |-----|
|  1 |  Customer |
|  2 |  CRO (Customer Reservations Office) |
|  3 |  Corporation representative |
|  4 |  Company |
|  5 |  Travel agency |
|  6 |  Airline |
|  7 |  Wholesaler |
|  8 |  Car rental |
|  9 |  Group |
|  10 |  Hotel |
|  11 |  Tour operator |
|  12 |  Cruise line |
|  13 |  Internet broker |
|  14 |  Reservation |
|  15 |  Cancellation |
|  18 |  Other |
|  21 |  Profile |
|  25 |  Associated reservation |
|  26 |  Associated itinerary reservation |
|  27 |  Associated shared reservation |
|  32 |  Merchant |
|  33 |  Acquirer |
|  34 |  Master reference |
|  35 |  Purged master reference |
|  36 |  Parent reference |
|  37 |  Child reference |
|  38 |  Linked reference |
|  39 |  Contract |
|  40 |  Confirmation number |

  


[3]: /api-reference/direct-connects/hotel/post-availability-search.html
[4]: /api-reference/direct-connects/hotel/post-booking-rule-search.html
[5]: /api-reference/direct-connects/hotel/post-hotel-search.html
[6]: /api-reference/direct-connects/hotel/post-new-reservation.html
[7]: /api-reference/direct-connects/hotel/post-reservation-cancellation.html
[8]: /api-reference/direct-connects/hotel/post-reservation-update.html
[9]: /api-reference/direct-connects/hotel/post-reservation-query.html
[10]: /tools-support/reference/hotel-direct-connect-codes.html
