---
title: Transport Layer Security (TLS)
layout: reference
---

## Overview

SAP Concur is ending support for version 1.1 of the Transport Layer Security (TLS) encryption protocol. Support for the more secure version 1.2 of TLS continues. As background, the TLS protocol allows secure back and forth communications between a phone or computer and a cloud-based service. This change is currently planned for the first quarter of 2020.

SAP Concur is taking this step after careful consideration of our customers’ security and ease of upgrade to the newer, more secure version 1.2 of TLS. This end-of support plan for TLS v1.1 ensures our clients are communicating with SAP Concur solutions in a safer and more secure manner using TLS v1.2.

## What the Customer Sees

If the customer or user ensures they are using a TLS v1.2-compliant browser, there will be no change in the way users interact with SAP Concur. If the browser is not compliant, users may not be able to sign in to SAP Concur.

In general, the use of less secure TLS connections can lead to exposed data, resulting in compromised sessions across any TLS channel of communication (for example, SAP Concur services).

## Affected Connections

In general, browsers using TLS to establish inbound / outbound communication channels with SAP Concur services are affected, for example connections across:

* Users attempting to log in to SAP Concur solutions
* APIs
* Bulk upload via SFTP
* Connectors
* FTP / PGP
* SAP Integrations
* Other

The ability of a browser to comply by upgrade to TLS v1.2 will depend on the company’s support for the specific browser, for example Microsoft (Edge), Google (Chrome), and others.

## informational Banner Displayed

A banner will display when a user attempts to log in using a browser that does not support TLS v1.2 and later and thus cannot negotiate a connection. The intent is to alert the user to this change using an informational-only message.

![Example of informational banner](images/tls-image.png)

#### Configuration / Feature Activation

Transitioning to support for TLS v1.2 and later may simply require updating security settings of your browser. In most instances, the company already has the support in place and need only identify non-compliant browsers and upgrade these user’s browsers to newer versions.

Please check with the department in your company that is responsible for browser compliance and ensure they are aware of this upcoming change.
