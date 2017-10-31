---
title: API Reference
layout: reference
redirect_from:
  - /docs-and-resources/documentation/
  - /api-documentation/
---

# Quick Start Guide

If you’re new to the Concur APIs, follow these steps to make your first API call and try some of our APIs.  For App Center Partners, this overview lets you know what to expect during Development, Certification, and Support: 

Enterprise B2B apps: <https://prezi.com/p/lw0qqy51zcmd/>

User apps: coming soon


## 1. Provision your developer sandbox  


Request a sandbox to be created. There are different teams involved depending on the type of Developer:  [Sandbox Setup scenarios][1].  


## 2. Make your first API call  


Concur has several APIs you can call, depending on the data that you want to push/extract.  


Here are two main API examples:

* **The Travel/Itinerary API (v1.1)** lets you access a Concur user/company's itinerary, including hotel/flight booking info. As an example, you can mash-up the Itinerary API with a restaurant database/API to provide recommendations of places to eat near a Concur user's hotel booking.

* **The Expense API (v3.0)** allows you to get (and push) a Concur user's expense information, including expense line items, their types (e.g. food, lodging), totals, and even receipt images.  


Here's a [REST API Basics guide][2] if you're new to calling APIs.

## 3. Get your app certified
After you have completed development and testing, submit your app for [certification][8].  
**NOTE:** This only applies to developers who are building an integration across multiple clients (i.e., an app that would appear in the App Center or TMC integrations). Concur clients who are using these APIs for interaction with their own data do not need to go through certification.





[1]: /manage-apps/register.html
[2]: /docs/guides/REST-API-Basics.html
[3]: https://forum.developer.concur.com/c/sandbox
[4]: https://concursolutions.com/
[7]: /manage-apps/partner-applications.html
[8]: /manage-apps/app-certification.html
[9]: /api-reference/authentication/authentication.html#native
[10]: /api-reference/authentication/authentication.html#web
