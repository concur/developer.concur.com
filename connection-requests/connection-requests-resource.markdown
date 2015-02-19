---
title: Connection Requests Resource 
layout: resource
---




##  Description

The Connection Requests resource is used to integrate TripLink partner applications with Concur. It can be used to create, update, and manage connections between a user's Concur account and a select travel loyalty program. With Connection Requests a TripLink partner application can retrieve new connection requests and provide status for pending connections, successful connections, and failed connections. When retrieving new connections, the results can be filtered by status, page offset, and a limit for the number of records to return.

##  URI

`https://{InstanceURL}/api/v3.0/Common/ConnectionRequests`

##  HTTP Verbs

GET and PUT

##  Operations

* [GET common/connectionrequests][2]
* [GET common/connectionrequests/{id}][3]
* [PUT common/connectionrequests/{id}][4]

##  Data Model

```
    <ConnectionRequests>
        <Items>
            <ConnectionRequest>
                <DiscountCode />
                <FirstName />
                <ID />
                <LastModified />
                <LastName />
                <LoyaltyNumber />
                <Message />
                <MiddleName />
                <RequestToken />
                <Status />
                <URI />
            </ConnectionRequest>
        </Items>
        <NextPage />
    <ConnectionRequests>
```


|  Element Name | Required/Optional| Data Type |  Description |
|---------------|------------------|-----------|--------------|
|  ConnectionRequests | | |  Parent element for all items in a connection request collection. |

|  Element Name | Required/Optional| Data Type |  Description |
|---------------|------------------|-----------|--------------|
|Items |optional |  array |  The results of the connection request collection. |
|Nextpage  |optional |  string |  The URI of the next page of results, if any. |

|  Element Name | Required/Optional| Data Type |  Description |
|---------------|------------------|-----------|--------------|
|DiscountCode |optional|  string |  The user's travel vendor discount code in Concur. This element will be removed in subsequent versions of the Connections Request API. Use the [Travel Profile Resource][1] API to obtain the discount code for the user. |
|FirstName |optional |  string |  The user's first name. |
|ID  |optional |  string |  The ID of the connection request. |
|LastModified |optional |  string |  The date and time when the connection request was last modified. Format: UTC |
|  LastName  |optional |  string |  The user's last name. |
|  LoyaltyNumber |optional |  string |  The user's travel loyalty number. |
|  Message |optional |  string |  The message to post back to the user during the connection process. This element is not currently used and will be removed in subsequent versions of the Connections Request API. |
|  MiddleName |optional |  string |  The user's middle name. |
|  RequestToken |optional |  string |  The OAuth request token. |
|  Status  |optional |  string |  The status code representing the state of the connection request.|
|  URI  |optional |  string |  The resource URI. |

#### Status
The status code representing the state of the connection request.

|Code|Description|
|----|-----------|
|  CRSUC |  Status provided by partner application to indicate that the connection was successful. The travel partner has sucessfully recorded the access token, refresh token, and instance URL. |
|  CREU1 |  Loyalty number was not found. The end-user receives an e-mail with this status and what action to take to remedy the problem. |   | | |
|  CREU2 |  Loyalty number doesn't match the name. The end-user receives an e-mail with this status and what action to take to remedy the problem. |
|  CREU3 |  Your loyalty number needs verification. The end-user receives an e-mail with this status and what action to take to remedy the problem. |
|  CRPA1 |  Request token has expired. The request token was issued more than 15 minutes ago and the partner application could not exchange the request token for the access token in time. |
|  CRPA2 |  Network error occurred. The partner application could not process the API call due to a Concur network error. |
|  CRRET |  Retry connection. The partner application is requesting a new request token. |
|  **Pending** |  Connection requests are pending. Default. |
|  Processing |  Connection requests are being processed. |
|  Connected |  User's travel loyalty program and Concur account are connected. |
|  Failed |  Connection request is failed. |


##  Examples

###  Example 1: Get a list of connection requests for users who have signed up to connect automatically

Return a list of connection requests for users who wants to link their account with the TripLink partners. This example returns the default number of records which is 5.

####  Request

```
    GET https://www.concursolutions/api/v3.0/common/connectionrequests?
    Authorization: OAuth H+IumY5p1W3U1QQ/X9T4AlcboHU=
    Content-Type: application/xml
    ...
```

####  Response

```
    <ConnectionRequest xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
        <ID>nVkXk0j3Yzk4LosUofRwPOvndJDo</ID>
        <URI>https://www.concursolutions.com/api/v3.0/common/connectionrequests/nVkXk0j3Yzk4LosUofRwPOvndJDo</URI>
        <FirstName>Maria</FirstName>
        <MiddleName />
        <LastName>Smith</LastName>
        <LoyaltyNumber>23242526</LoyaltyNumber>
        <Status>pending</Status>
        <DiscountCode xsi:nil="true" />
        <RequestToken>EPCYxQ1NRMTstK61XmbdZp7effas271</RequestToken>
        <Message />
        <LastModified>2014-04-29T23:19:03</LastModified>
    </ConnectionRequest>
```

###  Example 2: Get a list of connection requests with two records

####  Request

Return a list with two connection requests.

```
    GET https://www.concursolutions.com/api/v3.0/Common/ConnectionRequests&limit=2
    ...
```

####  Response

```
    <ConnectionRequest xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
        <ID>nVkXk0j3Yzk4LosUofRwPOvndJDo</ID>
        <URI>https://www.concursolutions.com/api/v3.0/common/connectionrequests/nVkXk0j3Yzk4LosUofRwPOvndJDo</URI>
        <FirstName>Maria</FirstName>
        <MiddleName />
        <LastName>Smith</LastName>
        <LoyaltyNumber>23242526</LoyaltyNumber>
        <Status>pending</Status>
        <DiscountCode xsi:nil="true" />
        <RequestToken>EPCYxQ1NRMTstK61XmbdZp7effas271</RequestToken>
        <Message />
        <LastModified>2014-04-29T23:19:03</LastModified>
    </ConnectionRequest>
```

###  Example 3: Get a list of connection requests that are in pending state

Return a list of connection requests users who wants to link their account with the TripLink partners. This example returns the same results as example 1. The difference is in the request. Example 3 specifies explicity the value for the **status** query parameter as **pending**. Example 1 uses the default value for **status** which is **pending**.

####  Request

```
    GET https://www.concursolutions.com/api/v3.0/Common/connectionrequests&status=pending
    ...
```

####  Response

```
    <ConnectionRequest xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
        <ID>nVkXk0j3Yzk4LosUofRwPOvndJDo</ID>
        <URI>https://www.concursolutions.com/api/v3.0/common/connectionrequests/nVkXk0j3Yzk4LosUofRwPOvndJDo</URI>
        <FirstName>Maria</FirstName>
        <MiddleName />
        <LastName>Smith</LastName>
        <LoyaltyNumber>23242526</LoyaltyNumber>
        <Status>pending</Status>
        <DiscountCode xsi:nil="true" />
        <RequestToken>EPCYxQ1NRMTstK61XmbdZp7effas271</RequestToken>
        <Message />
        <LastModified>2014-04-29T23:19:03</LastModified>
    </ConnectionRequest>
```

###  Example 4: Get a list of connection requests that are in processing state

Return a list of connection requests that are being processed. The status of a connection requests is set to **processing** after Concur has generated the request token for that connection request.

```
    GET https://www.concursolutions.com/api/v3.0/Common/ConnectionRequests&status=processing
    ...
```

###  Example 5: Get a list of connection requests with a specific page offset

Return a list of connection requests based on a specific page offset.

```
    GET https://www.concursolutions.com/api/v3.0/Connectionrequest?offset=nQ4hRgi9Q9uLj32rQWtgN3Mw&limit=1
    ...
```

###  Example 6: Get a list of connection requests for a specific user

Return a list of connection requests for a specific user. You can use this example when you want to find out if your application has exceeded the maximum retries for a particular user. The maximum number of retries is 5.

```
    GET https://www.concursolutions.com/api/v3.0/ConnectionRequests/zB7hRgi9Q9uLj32rQWtgN3Mw
    ...
```

###  Example 7: Send status indicating that connection request was successful

This example illustrates how to send status to Concur to indicate that the connection request was successful and that the Concur travel partner has successfully recorded the access token, the refresh token, and the instance URL.

####  Request

```
    PUT https://www.concursolutions.com/api/v3.0/common/ConnectionRequests/nVkXk0j3Yzk4LosUofRwPOvndJDo

    <ConnectionRequest xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
        <ID>nVkXk0j3Yzk4LosUofRwPOvndJDo</ID>
        <URI>https://www.concursolutions.com/api/v3.0/common/connectionrequests/nVkXk0j3Yzk4LosUofRwPOvndJDo</URI>
        <FirstName>Maria</FirstName>
        <MiddleName />
        <LastName>Smith</LastName>
        <LoyaltyNumber>23242526</LoyaltyNumber>
        <DiscountCode xsi:nil="true" />
        <Status>CRSUC</Status>
        <RequestToken>EPCYxQ1NRMTstK61XmbdZp7effas271</RequestToken>
        <Message />
        <LastModified>2014-04-29T23:19:03</LastModified>
    </ConnectionRequest>
```

####  Response

```
    HTTP/1.1 204 No Content - For Success
```

###  Example 8: Send status inidicating that the connection request was not successful and end-user action is required

This example illustrates how to send status to Concur to indicate that the connection request was not successful and that additional end-user action is required to fix the problem.

####  Request

```
    PUT <https://www.concursolutions.com/api/v3.0/common/ConnectionRequests/> nVkXk0j3Yzk4LosUofRwPOvndJDo

    <ConnectionRequest xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
        <ID>nVkXk0j3Yzk4LosUofRwPOvndJDo</ID>
        <URI> https://www.concursolutions.com/api/v3.0/common/connectionrequests/nVkXk0j3Yzk4LosUofRwPOvndJDo</URI>
        <FirstName>Maria</FirstName>
        <MiddleName />
        <LastName>Smith</LastName>
        <LoyaltyNumber>23242526</LoyaltyNumber>
        <DiscountCode xsi:nil="true" />
        <Status>CREU1</Status>
        <RequestToken>EPCYxQ1NRMTstK61XmbdZp7effas271</RequestToken>
        <Message />
        <LastModified>2014-04-29T23:19:03</LastModified>
    </ConnectionRequest>
```

####  Response

```
    HTTP/1.1 204 No Content - For Success
```

###  Example 9: Send status inidicating that the connection request was not successful and request a retry

This example illustrates how to send status to Concur to indicate that the connection request was not successful and to request a new request token to retry the connection.

####  Request

```
    PUT <https://www.concursolutions.com/api/v3.0/common/ConnectionRequests/> nVkXk0j3Yzk4LosUofRwPOvndJDo

    <ConnectionRequest xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
        <ID>nVkXk0j3Yzk4LosUofRwPOvndJDo</ID>
        <URI> https://www.concursolutions.com/api/v3.0/common/connectionrequests/nVkXk0j3Yzk4LosUofRwPOvndJDo</URI>
        <FirstName>Maria</FirstName>
        <MiddleName />
        <LastName>Smith</LastName>
        <LoyaltyNumber>23242526</LoyaltyNumber>
        <DiscountCode xsi:nil="true" />
        <Status>CRRET</Status>
        <RequestToken>EPCYxQ1NRMTstK61XmbdZp7effas271</RequestToken>
        <Message />
        <LastModified>2014-04-29T23:19:03</LastModified>    
    </ConnectionRequest>
```

#### Response

```
HTTP/1.1 204 No Content - For Success
```

### Compatible Concur Products

*Concur Developer Sandbox
*Travel for Concur Professional
*Travel for Concur Standard
*Expense for Concur Professional
*Expense for Concur Standard
*Expense for Concur Mobile

### HTTP Status Codes

|code|description|
|-----|----|
|  200 |  Success |
|  204 |  PUT call was successful |
|  400 |  Bad request |
|  401 |  Authorization header is not in the request |
|  403 |  Forbidden. The token has expired or has been revoked. |
|  404 |  Resource not found |
|  503 |  Service unavailable or is down for maintenance |

##  See Also

Access Token resource
Connection Requests overview page for details on how to implement the Connections Request API.
Connection Requests Swagger documentation.
HTTP Codes page for details of the common responses and errors.


[1]: https://developer.concur.com/travel-profile/profile-resource/get-travel-profile
[2]: https://www.concursolutions.com/api/docs/index.html#!/ConnectionRequests/Get_offset_limit_status_get_0
[3]: https://www.concursolutions.com/api/docs/index.html#!/ConnectionRequests/Get_id_get_1
[4]: https://www.concursolutions.com/api/docs/index.html#!/ConnectionRequests/Put_id_content_put_2
