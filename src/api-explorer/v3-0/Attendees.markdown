---
title: Attendees
layout: reference
reference-type: swagger
---

{% capture deprecation_content %}
* DELETE `/expense/attendees/{id}`
{% endcapture %}

{% include deprecation-alert.html deprecation_date="05/19/2016" unsupported_date="11/19/2016" content=deprecation_content %}

{% swagger /api-explorer/v3-0/Attendees.swagger2.json %}
