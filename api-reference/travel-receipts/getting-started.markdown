---
title: Getting Started
layout: reference
---

# Getting Started

The Travel Receipts service exposes receipt requests to inform E-Receipt partners which E-Receipts to send to SAP Concur and for which user. A user can call the API and receive paged responses of receipt requests (a maximum of 25 receipt requests per page). When the `next` field is empty/null, the user has reached the last page of receipt requests.

If the user supplies a timestamp as a parameter, it is used as the start time for results. If not, the API retrieves the results from the last 24 hours.

### Version
1.0  

## <a name="auth"></a>Authentication
Users must obtain an [access token from the Authentication API](/api-reference/authentication/getting-started.html).

The user's `access_token` from the Authentication API response should then be used in the `Authorization` header of the Travel Receipts API calls.




