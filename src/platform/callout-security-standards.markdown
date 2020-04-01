---
title: Callout Security Standards
layout: reference
---

* [TLS](#tls)
* [Ciphers](#ciphers)

## <a name="tls"></a>TLS

Clients that use or plan to use SAP Concur [callouts](https://developer.concur.com/api-reference/callouts/callouts-application-connectors.html) (for example, Send Notification, Launch External URL, Fetch List, and Fetch Attendee) need to ensure they meet the SAP Concur security standards. To reduce security risk for our clients and SAP Concur, clients need to ensure that the TLS version 1.1 or greater is used for the encryption protocols of the client’s endpoint. Also, clients using callouts need to ensure their callout host endpoint uses and prioritizes one or more ECDHE cipher suites with an equivalent key length greater than or equal to 2,048 bits, such as one of the ciphers listed below.

## <a name="ciphers"></a>Ciphers

EXAMPLES OF CIPHERS TO USE:

* TLS_ECDHE_RSA_WITH_AES_256_GCM_SHA384 (0xc030)
* TLS_ECDHE_RSA_WITH_AES_128_GCM_SHA256 (0xc02f)
* TLS_ECDHE_RSA_WITH_CHACHA20_POLY1305_SHA256 (0xcca8)
* TLS_ECDHE_RSA_WITH_AES_256_CBC_SHA384 (0xc028)
* TLS_ECDHE_RSA_WITH_AES_128_CBC_SHA256 (0xc027)
* TLS_ECDHE_RSA_WITH_AES_256_CBC_SHA (0xc014)
* TLS_ECDHE_RSA_WITH_AES_128_CBC_SHA (0xc013)

Existing customers will need to update their protocols if they are not compliant with the stated security standards. New companies configuring callouts will need to ensure they use security protocols and authentication methods that meet these standards. For more information about SAP Concur callouts, refer to [Callouts and Application Connectors](https://developer.concur.com/api-reference/callouts/callouts-application-connectors.html).
