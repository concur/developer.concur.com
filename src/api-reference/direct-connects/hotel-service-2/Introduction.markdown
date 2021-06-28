---
title: Direct Connect - Hotel v2 - Introduction
layout: reference
---

## <a name="overview"></a>Overview
The Hotel Services v2 Direct Connect provides a method for Travel users to access hotel inventory.

The Hotel Service 2.0 API from SAP Concur is a specification based on OTA 2015 standard for Hotel Suppliers. Please refer to XSD schema of the service and WSDL service description. This Guide provides information how the Hotel Supplier can make their content available for Concur Travel users using Hotel Service 2.0 API. Once the Hotel Supplier has developed and certified their interface with SAP Concur, their inventory will begin appearing in hotel searches by opted-in Travel users. This API has client/server architecture, where SAP Concur acts as client, pulling information from the Hotel Supplier, who acts as server, responding to SAP Concur’s requests. This guide specifies the request and response format required by SAP Concur.

This call-out differs from the in-bound SAP Concur web services in the following ways:

* It uses an out-bound message where SAP Concur calls a public facing API end-point provided by the hotel supplier.
* The supplier configures and maintains the public web service interface. This guide specifies the request and response format required by SAP Concur.

## Contents
* [Overview](#overview)
* [Product Restrictions](#product-restrictions)
* [Supported Operations](#supported-ops)
* [Non-Functional Requirements](#nonfunctional-requirements)
  * [Payload Limits](#payload-limits)
  * [Recommended Response Times, Timeouts, and Retries](#response-times)
  * [Maximum Connections and Throttling](#max-connections)
  * [Emergency Technical Contact](#emergency-tech-contact)
  * [Testing Environment](#testing-enviro)
  * [Security](#security)
* [URLs](#urls)
* [Handling of HTML](#handling-html)
* [Message Structure](#message-structure)
  * [Requests](#requests)
  * [Responses](#responses)

## <a name="product-restrictions"></a>Product Restrictions
SAP Concur products are highly configurable, and not all clients will have access to all features.

## <a name="supported-ops"></a>Supported Operations

* Search
* Availability
* Rate Details
* Hotel Description
* Reservation
* Read-Itinerary
* Cancel

## <a name="nonfunctional-requirements"></a>Non-Functional Requirements

### <a name="payload-limits"></a>Payload Limits

|Operation|Maximum response content-length|
|---|---|
Search|1 MB|
Availability|5 MB|
Descriptive Information|150 KB|
Rate Details|5 MB|
Reservation|150 KB|
Read Itinerary|150 KB|
Cancel|150 KB|

Responses that exceed these limits will be dropped and handled as error responses.

### <a name="response-times"></a>Recommended Response Times, Timeouts, and Retries

|Operation|Ideal response time|
|---|---|
Search|<4 seconds|
Availability|<10 seconds|
Descriptive Information|<1 second|
Rate Details|<2 seconds|
Reservation|<10 seconds|
Read Itinerary|<1 second|
Cancel|<10 seconds|

Achieving lower response times helps get information to the traveler sooner which leads to a better user experience. SAP Concur understands that not every hotel program manages their own inventory and requires relays out to other vendors and the numbers above take that scenario into consideration.

All endpoints carry a timeout of 55 seconds. No endpoints will attempt a retry in the event there is a timeout.

SAP Concur has monitoring in place for each endpoint and will open a ticket with suppliers if a significant degradation or variance of service quality is detected.

NOTE: To prevent no show fees, duplicate bookings and other similar issues, SAP Concur recommends the Hotel Supplier auto-cancel the reservation if a corresponding ReadRQ message is not sent by SAP Concur within 5 minutes after the HotelResRS message was sent to SAP Concur.


### <a name="max-connections"></a>Maximum Connections and Throttling
SAP Concur is unable to share details regarding maximum connections and/or throttling questions due to their sensitivity in nature.


### <a name="emergency-tech-contact"></a>Emergency Technical Contact
The Hotel supplier needs to provide emergency technical contact email that will be used for communication in case of blocking technical issues.

### <a name="testing-enviro"></a>Testing Environment
To allow SAP Concur performing testing, the Hotel Supplier needs to provide testing URL or specify properties for testing in production URL. SAP Concur needs to be able to perform test bookings with testing credit cards.

### <a name="security"></a>Security

#### PCI DSS Compliance
As sensitive data and payment card details are transferred via API, the Hotel Suppliers need to comply with PCI DSS standard. SAP Concur is compliant with PCI DSS standard and undergoes regular security audits.

#### HTTPS
SAP Concur requires TLS 1.2 (Transport Layer Security) SSL protocol for file transfers. The Hotel Supplier will provide SAP Concur HTTPS URL of its end-point. Standard HTTPS port 443 should be used.

## <a name="urls"></a>URLs
SAP Concur will receive a single URL from the Hotel Supplier. All requests will go to that URL.

For details of all required HTTP headers refer to Headers

SAP Concur is using date as xs:date XML type "2017-05-01".

## <a name="handling-html"></a>Handling of HTML

CDATA and HTML code inside of XML nodes and attributes are not allowed. These data will be escaped.
The hotel suppliers should not use XML special characters - predefined entities: &, <, >, ", ' inside of ID elements like RatePlanID.

## <a name="message-structure"></a>Message Structure

All messages to and from the HS2 API follow this structure:

### <a name="requests"></a>Requests

* Envelope
  * Header
  * Body
    * OTA_<message type> RQ

**Note:** The Header element in a request must contain the Authentication element.


### <a name="responses"></a>Responses

* Envelope
  * Header
  * Body
    * OTA_<message type>RS

**Note:** The header in the response does not need the Authentication element.
