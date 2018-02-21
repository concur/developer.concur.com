---
title: Receipts
layout: reference
reference-type: swagger
---

{% capture deprecation_content %}
* POST `/common/receipts`

<br>

Going forward, please use the [v4 Receipts](/api-reference/receipts/get-started.html) for any new development and apps.
{% endcapture %}

{% include deprecation-alert.html deprecation_date="02/07/2017" unsupported_date="08/07/2017" content=deprecation_content %}

{% swagger /api-explorer/v3-0/Receipts.swagger2.json %}
