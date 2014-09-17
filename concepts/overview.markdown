---
layout: page
title: Concepts
permalink: /concepts/
---

# About the Concur Platform

Our platform enables developers to build solutions that integrate with Concur’s T&E service. Data security and quality customer experiences are paramount. To that end, our platform contains the following components:

* *Core Services* feature OAuth authentication, content types in XML and JSON. 
* *Web Services/APIs* are the endpoints that Concur exposes—which can be invoked by third-party applications. The majority of third-party applications will use web services. 
* *Callouts* are web service calls that originate from Concur, which are set to external, on-premise systems called Application Connectors. Examples of callouts include the Fetch Attendee, Fetch List Item and Notification services.
* *Direct Connects* are supplier-specific APIs used to search flights, hotels, or rental cars, and book directly with suppliers. These APIs involve content or data owned by the suppliers themselves. This is unlike a GDS, which also provides an API, but has content for many suppliers.

# Cookbooks

* [Creating Financial Connectors for Concur Expense](../cookbooks/creating-financial-connectors-concur-expense/)