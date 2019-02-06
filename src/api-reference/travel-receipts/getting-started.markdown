---
title: Getting Started
layout: reference
---

{% include prerelease.html %}

# Getting Started

The Travel Receipts service exposes receipt requests to inform E-Receipt partners which E-Receipts to send to SAP Concur and for which user. A partner can call the API and receive paged responses of receipt requests (a maximum of 25 receipt requests per page). When the `next` field is empty/null, the partner has reached the last page of receipt requests.

If the partner supplies a timestamp as a parameter, it is used as the start time for results. If not, the API retrieves the results from the last 24 hours.

### Version
1.0  

### Regional Availability

#### US
```
https://us.api.concursolutions.com/travelreceipts/v1/receiptrequests
```

#### EMEA
```
https://emea.api.concursolutions.com/travelreceipts/v1/receiptrequests
```

## <a name="auth"></a>Authentication
Partners must obtain an [access token from the Authentication API](/api-reference/authentication/getting-started.html).

The partner's `access_token` from the Authentication API response should then be used in the `Authorization` header of the Travel Receipts API calls. 

Note: A token needs to be fetched for each datacenter, you cannot use the same token for US and EMEA.

Examples:

cURL:

```shell
curl -d "client_secret={YOUR SECRET}&client_id={YOUR CLIENT ID}&grant_type=client_credentials" https://us.api.concursolutions.com/oauth2/v0/token
```

HTTPie:

```shell
http -f POST https://us.api.concursolutions.com/oauth2/v0/token client_secret={YOUR SECRET} client_id={YOUR CLIENT ID} grant_type=client_credentials
```


