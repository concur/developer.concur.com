---
title: Refreshing Access Tokens 
layout: operation
---




To refresh a token, make this API call:

```
GET https://www.concursolutions.com/net2/oauth2/getaccesstoken.ashx
?refresh_token={Refresh Token}
&client_id={Consumer Key}&client_secret={Consumer Secret}
Accept: application/xml
```

Where:

_refresh_token_ — Is a required parameter that specifies the access token to be refreshed.

_client_id_ — Is a required parameter that specifies the consumer key for the application.



