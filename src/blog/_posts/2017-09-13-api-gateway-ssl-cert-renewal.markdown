---
layout: post
title: API Gateway SSL Certificate Renewal
date: 2017-09-13
tags:
    - API
    - Documentation
author: Mark Groves
redirect_from: 2017/09/13/api-gateway-ssl-cert-renewal.html
---

Many of Concur's APIs are behind our API Gateway. If you happen to pin the SSL Certificate in your applications you will need to apply the new certificates before they expire on October 3rd. See below for more details:

**What:**

The SSL Certificate that Concur’s API Gateway uses is scheduled to expire on Oct. 3rd, 2017. 

**When:**

We will be switching to the updated certificates on October 2nd 2017 at 11:30 AM PST. 

**How:**

If your application or service pinned the expiring certificate:

* Ensure you add the below certificates to your clients before the above switch over date (Oct. 2nd) or calls to Concur’s APIs that are behind the API Gateway will fail. 
* Note: there are three bundles below, one for www-*.api.concursolutions.com, one for *.api.concursolutions.com and the CA Chain Certificate.

If you didn’t pin your certificate into your application or service:

* No action, your solution will get the new certificate on Oct. 2nd. 


**Certificate Files**

There are two certificate files below, one for working with addresses that include www-*.api.concursolutions.com and one that works for addresses that include *.api.concursolutions.com. The third file is the CA Chain for verifying the certificates. 

* [www.x.api](/blog/files/www.x.cert.pem) - For www-us.api, www-eu, www-us-impl and www-eu-impl
* [x.api](/blog/files/x.api.cert.pem) - For us.api, emea.api, us-impl.api, and eu-impl.api
* [CA Chain Cert](/blog/files/ca_chain.cert.pem) - common CA Chain file. 
