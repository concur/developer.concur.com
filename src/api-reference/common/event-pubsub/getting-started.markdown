---
title: Getting Started
layout: reference
---

{% include prerelease.html %}

* [Overview](#overview)
* [Subscribing](#subscribing)
* [Endpoint Requirements](#endpoint-requirements)

# <a name="overview"></a>Overview

The Event Subscription Service (ESS) allows clients and partners to choose to be notified through web services when certain actions take place in connected SAP Concur companies. When the event occurs, SAP Concur generates a notification and sends a request to the configured endpoint with event information. 

This callout differs from the standard Concur web services in the following ways:

* It uses an outbound callout where SAP Concur calls a public facing URL provided by the application connector, which is a web server hosted by the third-party developer or client. 

* The application connector can also use the related web services to retrieve or send SAP Concur data. For example, an event may be generated when a request for travel is submitted. The application connector may then leverage data from the event, such as the request ID, to retrieve the relevant travel request record from the published Request APIs.


# <a name="subscribing"></a>Subscribing

In order to begin receiving events, you must first subscribe to the relevant topic(s) for your application connector.

To subscribe to an event, you must work with your relevant SAP Concur technical contact; for partners, please work with your technical enablement contact. For customers, your web services consultant will subscribe on your behalf to the relevant topic(s).

You must provide an HTTPS server endpoint that will accept the event payload described below.

Your HTTPS server endpoint must accessible from the public web with a non-self-signed certificate.  The certificate should be signed by a known Certificate Authority and should be reachable through DNS.

# <a name="endpoint-requirements"></a>Endpoint Requirements

The Event Subscription Service provides guaranteed at least once event delivery.  This is accomplished through retrying posting of the event payload to the subscribers' endpoint until the response indicates successful receipt.  The expected acknowledgment max for a request to the subscribers' endpoint is 30 seconds.  The service will attempt posting to the endpoint and then back-off and retry until the subscriber endpoint responds with delivered or not accepted.  SAP Concur suggests the subscriber endpoint implement the following behavior characteristics:
* Ensure endpoint responds as quickly as possible (< 3 seconds)
* The subscriber must maintain reasonable uptime to support the requirements of the integration scenario
* If the subscriber must have durability of delivered events these must be persisted on the subscriber side
* If the subscriber action on the event is non-idempotent or expensive guard against a duplicate event by checking the event Id has not already been processed.

### <a name="event-subscription-service-behavior"></a>Event Subscription Service (ESS) Behavior

The Event Subscription service has the following characteristics from the subscriber perspective:

* Requests will come from us.api.concursolutions.com, emea.api.concursolutions.com or cn.api.concursolutions.com
* Requests will be re-tried when subscriber responds with HTTP Response Code(s): 5xx, 401, 403 and 429
* Requests will not be re-tried when subscriber responds with HTTP Response Code(s):
  * 2xx – Indicates successful receipt of the event
  * 4xx – Indicates posted event is unexpected or incorrectly formatted
* Request will be retried until delivery OR event retention period expiry
* Event retention period is 72 hours from the time of event being published
* Events are not archived, but of the event delivery attempts/responses are logged and retained a (period of time)

