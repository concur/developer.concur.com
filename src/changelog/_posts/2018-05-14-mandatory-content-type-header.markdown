---
layout: post
title: Mandatory Content-Type Header required for Oauth2 /Token Calls
date: 2018-05-14
tags:
    - Support
    - Oauth2
    - Authentication
---

In order to be compliant with the IETF Oauth2 Specification, specifically Appendix B (https://tools.ietf.org/html/draft-ietf-oauth-v2-31#appendix-B) the Authentication team will be releasing an update in the June Release (6/15/2018) that has a potential to break existing clients.

From the above date onwards, all calls to Oauth2's /token endpoint MUST have the content-type header.

`Content-Type: application/x-www-form-urlencoded`

We believe that most (if not all) clients have this header in place today, but please check just to be sure. We understand that disruptions like these are not desired but unfortunately are required from time to time to meet industry and security standards. We will minimize the frequency of these potential breaking changes and attempt to make changes like these in a more predictable manner. You can contact the Authentication team on our developer forums at : https://forum.developer.concur.com/

