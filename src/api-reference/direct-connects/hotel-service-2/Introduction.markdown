---
title: Introduction
layout: reference
---

## Disclaimer
This version is a draft only. Hotel Service 2.0 API is not final and is a subject to change.

## Description
The Hotel Services v2 Direct Connect from Concur Connect provides a method for Travel users to access hotel inventory.

The Hotel Service 2.0 API from Concur is a specification based on OTA 2015 standard for Hotel Suppliers. Please refer to XSD schema of the service and WSDL service description. This Guide provides information how the Hotel Supplier can make their content available for Concur Travel users using Hotel Service 2.0 API. Once the Hotel Supplier has developed and certified their interface with Concur, their inventory will begin appearing in hotel searches by opted-in Travel users. This API has client/server architecture, where Concur acts as client, pulling information from the Hotel Supplier, who acts as server, responding to Concur’s requests. This guide specifies the request and response format required by Concur.

This call-out differs from the in-bound Concur web services in the following ways:

* It uses an out-bound message where Concur calls a public facing API end-point provided by the hotel supplier.
* The supplier configures and maintains the public web service interface. This guide specifies the request and response format required by Concur.

## TOC

## Terminology

## Product Restrictions
Hotel Service 2 API inventory is not accessible from Concur mobile. Concur products are highly configurable, and not all clients will have access to all features.

## Process Overview

## Supported operations

Search
Availability
Hotel Description
Reservation
Read-Itinerary
Cancel

## Non-Functional Requirements

### Response Times
Concur needs to receive all responses within 55 seconds, otherwise it causes timeout. To prevent no show fees, duplicate bookings and other similar issues, Concur recommends to perform Auto-Cancel by the Hotel Supplier if ReadRQ message is not sent by Concur 5 minutes after HotelResRS message was sent to Concur. 

### Emergency technical contact
The Hotel supplier needs to provide emergency technical contact email that will be used for communication in case of blocking technical issues.

### Testing environment
To allow Concur performing testing, the Hotel Supplier needs to provide testing URL or specify properties for testing in production URL. Concur needs to be able to perform test bookings with testing credit cards.

### Security 

#### PCI DSS compliance
As sensitive data and payment card details are transferred via API, the Hotel Suppliers need to comply with PCI DSS standard. Concur is compliant with PCI DSS standard and undergoes regular security audits.

#### HTTPS
Concur prefers to use the newer TLS 1.2, however TLS 1.1 is still supported. TLS 1.0 is **not** supported. The Hotel Supplier will provide Concur HTTPS URL of its end-point. Standard HTTPS port 443 should be used.

#### Concur IP ranges

*Check with SM to see if we already have a publicly available list of IPs suppliers/vendors have to white-list.*


## URLs 
Concur will receive a single URL from the Hotel Supplier. All requests will go to that URL. 

For details of all required HTTP headers refer to Headers

Concur is using date as xs:date XML type "2017-05-01".

## Handling of HTML

CDATA and HTML code inside of XML nodes and attributes are not allowed. These data will be escaped.
The hotel suppliers should not use XML special characters - predefined entities: &, <, >, ", ' inside of ID elements like RatePlanID. 

## Message Structure

All messages to and from the HS2 API follow this structure:

### Requests

* Envelope
  * Header
  * Body
    * OTA_<message type>_RQ

**Note:** The Header element in a request must contain the Authentication element.

  
### Response

* Envelope
  * Header
  * Body
    * OTA_<message type>_RS

**Note:** The header in the response does not need the Authentication element.
