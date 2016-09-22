---
title: Undertsand the Receipts API
layout: reference
---

# Receipts

## Understand the Receipts API

### Overview of Version 4.0

Version 4.0 of the Receipts API offers features like more receipt types, automatic e-receipt generation in end user’s preferred language and ability for partners to provide detailed tax information. Unlike version 3.0, we are discontinuing the use of matching facts; instead the partner will have to create a receipt for a specific end user. Receipts 4.0 works only with the new Authentication API. 

### Supported Receipt Types

Receipts can be of type [Air](#Air), [Car Rental](#Car Rental), [General](#General), [Ground Transport](#GroundTransport), [Hotel](#Hotel) or [Rail](#Rail).

#### <a href="Air">Air</a>

#### <a href="CarRental">Car Rental</a>

#### <a href="General">General</a>

#### <a href="GroundTransport">Ground Transport</a>

#### <a href="Hotel">Hotel</a>

#### <a href="Rail">Rail</a>

### E-Receipt Generation

An e-receipt or a receipt image is generated when only receipt data is posted. We have pre-created templates for every receipt type. The Examples section of this document shows what the template for a particular receipt type would look like and the data that would be displayed along with it. 
In addition to data, e-receipts can also display a logo of the partner’s choice. In order to do so, the partner has to do two things
 - Provide in advance a logo meeting our specifications
 - Describe your broker-seller relationships

Email pdspe@concur.com or ask a question in our [Developer Forum](https://forum.developer.concur.com/) to know more. 
