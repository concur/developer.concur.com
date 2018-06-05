---
title: SAP Concur Developer Platform Release Notes - August 2015
layout: reference
---

## Form of Payment API Version 2.0

**Overview**

Concur offers a profile API, which passes profile data from Concur to third parties. With this release, we have separated the form of payment section from profile. In addition, we now support corporate ghost cards to be passed to 3rd party vendors, such as TripLink vendors and fulfillment TMCs.

In order to ensure all existing partners are not affected by this change, we are going to offer a new version of the Form of Payment API with a new endpoint.

Concur’s deprecation policy requires everyone to move off the existing version within twelve months. Once the new endpoint is in place, changes to both versions will be supported for six months. After six months, changes will only occur in the new end point (2.0).

**Please Note:** Concur will continue to add new elements/values as we see fit. It is imperative that partners are aware of this and program accordingly to avoid challenges when the new elements/values are introduced.  

**Changes in v2.0 of Travel FOP API GET**  

Below is a list of changes with version 2.0. Concur strongly recommends that vendors/partners begin coordinating with their development team to take advantage of this new endpoint.  

**Schema changes**

* New endpoint: /api/travelprofile/v2.0/FOP
* Sunset endpoint: /api/travelprofile/v1.0/FOP
* Move FOP scope out of the Travel Profile scope so it operates independently
* Concur will pass a flag to note whether the card is personal or company ghost
* New scope under the FOP scope called Company Ghost Cards
	* Card type
	* Card number
	* Card expiration date
	* Card billing address
	* Card name
	* Flag that denotes whether the card is mandatory (no other card can be used) or not
	* Flag that denotes whether the card should be the default

**Schema Additions**

* Documentation will be provided closer to the delivery date

**Configuration for Professional and Standard Travel**

To take advantage of the new version of the Form of Payment API, partners need to code to the new endpoints.

## Concur Request 3.1

This service is known as Authorization Request, Concur Request, or simply Request and was formerly known as Travel Request. Concur changed the name to better align with its broader capabilities. This service is different from the legacy authorization request feature that was available within Concur Expense.

**Overview:**

Concur is exposing a new endpoint providing the ability for a client vendor to create a Request on behalf of the actual Request user.

This new feature is for instance highly beneficial when an employee plans a trip and needs to request the authorization to travel. A Travel Request has to be created and submitted to the manager. However, as the user is on the road and plans to depart tomorrow, this individual decides to call the TMC to obtain a reservation right away. The TMC will first generate a Request on behalf of this traveler, and then associate the booking to this Request, so that the manager can easily review all the trip details and decide to approve or reject.

**Details:**

In version 3.1, the Post Request Header endpoint now has a “User” element to designate the user on behalf of which the Request will be created. The API consumer, as the Request creator, has to be granted the Proxy Logon user role.

**Effective Date:** August 2015
