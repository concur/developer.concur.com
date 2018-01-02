---
layout: post
title: ConcurSolutions SSL Certificate Renewal
date: 2018-01-02
tags:
    - API
    - Documentation
author: Mark Groves
redirect_from: 2018/01/02/concursolutions-ssl-cert-renewal.html
---

The www.concursolutions.com SSL certificate is scheduled to be renewed at the end of January. Many of Concur's older APIs are routed behind this domain (https://www.concursolutions.com/api/...).

If you happen to pin the SSL Certificate in your applications you will need to apply the new certificates before they expire on February 1st. See below for more details:

**What:**

The SSL Certificate that Concur’s APIs use is scheduled to expire on Feb. 1st, 2018.

**When:**

The renewed certificate has already been installed and is now live.  

**How:**

If your application or service pinned the expiring certificate:

* Ensure you add the below certificates to your clients before the above expiration date (Feb. 1st) or calls to Concur’s APIs will fail. 

If you didn’t pin your certificate into your application or service:

* No action, your solution will get the new certificate automatically.


**Certificate File**

There is one certificate file for working with addresses that include wwww.concursolutions.com.

* [www.concursolutions.com certificate](/blog/files/concursolutions.cert.pem)