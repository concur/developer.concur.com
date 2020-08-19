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
  * [Response Times](#response-times)
  * [Emergency Technical Contact](#emergency-tech-contact)
  * [Testing Environment](#testing-enviro)
  * [Security](#security)
* [URLs](#urls)
* [Handling of HTML](#handling-html)
* [Message Structure](#message-structure)
  * [Requests](#requests)
  * [Responses](#responses)

## <a name="product-restrictions"></a>Product Restrictions
Hotel Service 2 API inventory is not accessible from the SAP Concur mobile app. SAP Concur products are highly configurable, and not all clients will have access to all features.

## <a name="supported-ops"></a>Supported Operations

* Search
* Availability
* Rate Details
* Hotel Description
* Reservation
* Read-Itinerary
* Cancel

## <a name="nonfunctional-requirements"></a>Non-Functional Requirements

### <a name="response-times"></a>Response Times
SAP Concur needs to receive all responses within 55 seconds, otherwise it causes timeout. To prevent no show fees, duplicate bookings and other similar issues, SAP Concur recommends to perform Auto-Cancel by the Hotel Supplier if ReadRQ message is not sent by SAP Concur 5 minutes after HotelResRS message was sent to SAP Concur.

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
