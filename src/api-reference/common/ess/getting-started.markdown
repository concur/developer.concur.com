---
title: Getting Started
layout: reference
---

{% include prerelease.html %}

* [Overview](#ess)
* [Terminology](#ess-terminology)
* [Delivery model](#ess-delivery)
* [Access control](#access-control)
* [Subscribing](#subscribing)
* [Endpoint Requirements](#endpoint-requirements)
* [Authentication](#ess-authentication)
* [Service behavior](#ess-behavior")

# <a name="ess"></a>Event Subscription Service (ESS)

The Event Subscription Service (ESS) implements Publish/Subscribe pattern using principles of Event Driven Architecture in SAP Concur. It allows clients and partners to be notified through web services when certain actions take place in connected SAP Concur companies. When the business/system event occurs in SAP Concur, ESS sends that event to the configured endpoint with relevant information.

## <a name="ess-terminology"></a>ESS Terminology
* Event - a state of business/system object or entity. Always has EventType that represents a type of entity change or specific state in a workflow. Example: Report Created, Report Submitted, etc
* Topic - a stream of events of business/system object or entity. Example: Concur.user, Concur.expense.report, Concur.travel.request. There is always a topic owner in Concur, it can be team, product or system.
* Subscription - a topic consumer. Each subscription has a topic it is subscribed to.  
* Webhook - an ESS application that uses subscription and delivers events to the endpoint.

## <a name="ess-delivery"></a>ESS Delivery model

It is important to remember that ESS doesn't have any API that you can call for SAP Concur events, ESS delivers events to your endpoint.

* It uses an outbound callout where SAP Concur calls a public facing URL provided by client or partner, which is a web server hosted by the third-party developer or client.

* The application endpoint can also use the related web services to retrieve or send SAP Concur data. For example, an event may be generated when a request for travel is submitted. The application endpoint may then leverage data from the event, such as the request ID, to retrieve the relevant travel request record from the published Request APIs.


## <a name="access-control"></a>Access control

ESS is requiring a caller to have a proper JWT and scopes, for more details please refer <a href="https://developer.concur.com/api-reference/authentication/scopes.html">our wiki</a>
A caller must have types of scopes

* ESS API level scope "events.topic.read" is required to be able to access ESS API

* Resource level scope example "expense.request.read" is required to be able to access "expense.request" topic and to be able to create subscriptions to that topic

All required scopes can be requested for a caller Application by Partner Enablement team.


## <a name="subscribing"></a>Subscribing your endpoint

In order to begin receiving events, you must first subscribe to the relevant topic(s) for your application.

To subscribe to an event, you must work with your relevant SAP Concur technical contact; for partners, please work with your technical enablement contact. For customers, your web services consultant will subscribe on your behalf to the relevant topic(s).

## <a name="endpoint-requirements"></a>Endpoint Requirements

The Event Subscription Service provides guaranteed at least once event delivery.  This is accomplished through retrying posting of the event payload to the subscribers' endpoint until the response indicates successful receipt.  The expected acknowledgment max for a request to the subscribers' endpoint is 30 seconds.  The service will attempt posting to the endpoint and then back-off and retry until the subscriber endpoint responds with delivered or not accepted, the service will retry at least 3 days and skip to the next event after unsuccessful delivery.  SAP Concur suggests the subscriber to consider following:
* Endpoint response time requirements depend on the topic throughput. Please contact topic owner to calculate acceptable throughput, generally we recommend to keep response time as low   as possible (< 3 seconds)
* We highly recommend to implement queue behind the subscriber' endpoint in order to keep response time as low as possible   
* The subscriber must maintain reasonable uptime to support the requirements of the integration scenario.
* We multithreaded application to deliver events to your endpoint. 24 threads by default.
* Your HTTPS server endpoint must be accessible from the public web with a non-self-signed certificate.  The certificate should be signed by a known Certificate Authority and should be reachable through DNS.

### <a name="ess-authentication"></a> ESS Authentication

There are several way how you can be sure that your endpoint being accessed by our service.
* We will always use the same client x509 certificate. Common name is "CN=webhook.api.concursolutions.com,O=Concur Technologies\, Inc.,L=Bellevue,ST=Washington,C=US" and certificate serial number is "0AE315A13AB9EF8CADB9A46255C87283"
* We will always use Digital Signature, it will be supplied in request header "Concur-Signature". If you decide to use this authentication method you will need  our
<details><summary>PUBLIC KEY</summary>
<p>
```
-----BEGIN PUBLIC KEY-----
MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAxS1LsXrEWEEMPooLHa4r
osCAnmkO3HaBAk0YcsDMR6hQeuQNLqRWP65TpbfTbKWmZ22Hzep3Ekhs1qvSZgI+
iq/bnVeDhkcD+LqVQGP+7fyE0E0bO96FOzMmtbRet4wAiiE9+uw5GmZfg+fRG3yI
y2N5u5p7VHJ1RwNugrIUQjhrLvZc+lhqR/aKTxQCQ5CGAgLZIcr3FIWCWrSBMK3d
Wy3KI+qe3ZX0STrCCNxl2UFnuuAa2RZZ2j4QtWHlNkyK+UEup+cGkvpc1XrT7anL
HlbTP6jE7MqB5sJ9r2EEzrJzJZjD13UqlzvI61tTC8SKpuk5AEaSsUV7RKlKUCjB
8wIDAQAB
-----END PUBLIC KEY-----
```
</p>
</details>



### <a name="ess-behavior"></a>ESS Behavior

The Event Subscription service has the following characteristics from the subscriber perspective:

* Requests will come from us.api.concursolutions.com, emea.api.concursolutions.com or cn.api.concursolutions.com
* Connection will always be established using client x509 certificate
* Requests will always have digital signature
* Requests will be re-tried when subscriber responds with HTTP Response Code(s): 5xx, 401, 403 and 429
* Requests will not be re-tried when subscriber responds with HTTP Response Code(s):
  * 2xx – Indicates successful receipt of the event
  * 4xx – Indicates posted event is unexpected or incorrectly formatted
* Request will be retried until delivery OR event retention period expiry
* Event retention period is 72 hours from the time of event being published
* Events are not archived, but all of the event delivery attempts/responses are logged and retained for 30 days
