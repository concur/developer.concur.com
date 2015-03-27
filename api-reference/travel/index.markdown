---
layout: conceptual
title: Travel Web Services
---

## Overview

The Travel web services consists of a set of APIs that provide programmatic access to travel data such as itineraries, travel profiles, travel form of payment information, travel requests, and travel loyalty program information. These APIs are categorized into three sets of web services:

* Itinerary
* Travel profile
* Travel requests


### [Itinerary] [1]

The Concur Itinerary web service can be used to programmatically access travel data such as trips and bookings in the Concur travel system. The Concur Travel system uses this data to match and consolidate bookings it receives from disparate sources and put these into consolidated travelers’ itineraries, providing travelers a convenient way to view their trips in a single itinerary view. Travelers can view their itineraries through mobile applications or other services.

### [Travel profile] [2]

The Travel Profile web service consists of a set of resources that provide travel profile functionality customized in specific ways for developers, travel suppliers, and travel management companies (TMCs). Depending on who is using this web service, it provides the ability to update travel loyalty information, subscribe and unsuscribe to travel profile changes, and subscribe and unsuscribe to form of payment information changes.

### [Travel requests] [3]

Concur Travel Request web service is designed to help businesses control expenses by requiring employees to obtain approval before incurring expenses. It provides the ability to view requests and update the workflow for travel requests.

### [Trip approval] [4]

The Trip Approval resource allows clients to approve or reject trips. Clients send the unique identifier for the trip, the approver email and the workflow action to be performed (either approve or reject).


[1]: http://concur.github.io/developer.concur.com/api-reference/travel/itinerary
[2]: http://concur.github.io/developer.concur.com/api-reference/travel/travel-profile
[3]: http://concur.github.io/developer.concur.com/api-reference/travel/travel-request
[4]: http://concur.github.io/developer.concur.com/api-reference/travel/trip-approval/trip-approval-resource
