---
title: Auto-Connect Flow
layout: conceptual
---




##  Overview

The Auto-Connect flow is an authorization flow Concur implemented to support authorized Connection Requests API calls from TripLink applications. During the Auto-Connect flow, the request token associated with a TripLink application is exchanged for an access token for the user who granted the TripLink application access to the user's Concur data.

##  Preconditions

Before you can implement the Auto-Connect flow, you need to:

* Obtain a request token by following the steps listed under [Registering a Partner Application][1]. 
The **Application Authorization** section in the **New Partner Application** page includes a **Key** field and **Secret** field. This key-and-secret pair make up the request token. The value for the **Key** field is also known as the consumer key and it is the unique identifier for your application; the value for the **Secret** field is your application's client secret. The consumer key and client secret pair is the request token which is later exchanged for an access token . You must safeguard and keep this information confidential as required by the Concur Legal Agreement.
* Configure your application with the Connection Request API scope:  

![][2]

##  Auto-Connect Flow Step by Step

The following diagram illustrates the Auto-Connect flow implementation steps:

![][3]

To implement the Auto-Connect flow, follow these steps:

1. Build a service that periodically gets a list of connection requests:

```
GET {InstanceURI}/api/v3.0/common/connectionrequests?
status=pending&offset={offset}&
limit={maximum number of connection requests to return}
Accept: {application/xml | application/json}
```

You must use a token assigned to a user with the Web Service Administrator role to call the Connection Request resource.
2. For each user in the connection request response, exchange the request token for an access token:

```
GET https://www.concursolutions.com/net2/oauth2/getaccesstoken.ashx?
code={Request Token}&client_id={consumer key}&
client_secret={consumer secret}
Accept: {application/xml | application/json}
```

Request tokens expire after 15 minutes. Design your application to process all connection requests within this time limit. Each access token created in this step is applicable for a given user for your application only. These access tokens cannot be used for other partner applications.

3. For each connection request, call any other Concur APIs you need to match the Concur user with the user in your system. When the user is successfully matched, or when matching fails, update the connection request:

```
PUT {Instance URI}/api/v3.0/common/connectionrequests/{ID}
Authorization: OAuth {user's access token with Web Services Administrator role}
Content-Type: {application/xml | application/json}
Accept: {application/xml | application/json}

<ConnectionRequest>
        <Message>{Optional Message}</Message>
        <Status>{Status Code}</Status>
<ConnectionRequest>
```

If you encounter an error that makes it impossible to complete the connection process, revoke the access token to the user knows that the connection attempt failed and they can try again at a later time.



[1]: https://developer.concur.com/overview/partner-applications
[2]: https://developer.concur.com/sites/default/files/APIScope_register_partner_app_ConnectionsRequest_APIScope_cropped.png
[3]: https://developer.concur.com/sites/default/files/Connection_Request.png


