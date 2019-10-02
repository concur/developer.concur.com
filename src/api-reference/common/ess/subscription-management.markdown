# Event Subscription Management


## 1. Access Control (JWT)
In order to make any API call you must have a proper <a href="https://developer.concur.com/api-reference/authentication/getting-started.html">JWT</a>

Very important:
- your JWT should have `"concur.appId": "dabd27f0-23e7-415d-b5e5-19a7dbe4fb4d"` - that is used to identify you as an owner of the subscription.
- your JWT should have `"concur.type": "app"` - that stand for the level your your JWT and is made available <a href="https://developer.concur.com/api-reference/authentication/apidoc.html#client_credentials">by setting</a> `client_credentials` as one of the allowed `grant_type` in your Concur Application and .... API call  

Please provide `Concur-Correlationid: something-unique-and-valuable` as a request header for troubleshooting purposes.

## 2. Browse available topics
Before you create any subscription you need to verify that you have sufficient access to the topic. If that request returns empty you need to get in touch with your assigned contact from Concur to set proper scopes to you Concur Application Records (how do I call that and not confuse them with their endpoint/application?).

**Request**
```
GET /events/v4/topics
```
**Response**
```json
["public.test"]
```

## 3. Create a subscription
To create a subscription you need to
1. know and have sufficient access to the **topic**
1. get your receiving **endpoint** up running, <a href="https://developer.concur.com/api-reference/common/ess/getting-started.html#endpoint-requirements">endpoint
requirements</a>     
1. come up with unique name (id) of your subscription. Subscription names are globally unique, and you will get error if name is already occupied.
1. set filter to `.*` (regexp syntax), you can use it later to filter out unwanted types of events

**Request**
```
PUT /events/v4/subscriptions/webhook
```
```json
{
  "id": "my-unique-subscription-id",
  "filter": ".*",
  "topic": "public.test",
  "webHookConfig": {
    "endpoint": "https://www.concuress.com/sub/my-valid-endpoint"
  }
}
```
**Response**
```json
{"message":"Subscription 'my-unique-subscription-id' saved successfully"}
```

## 4. Verify your subscription
You can always request a configuration of your subscription. You might notice that your subscription contains some more parameters that you can not modify for security reasons, but can use them for troubleshooting purposes.
-  applicationId - identifies your Concur Application as an owner of that subscription
- companyIds - a list of UUIDs of companies that allowed your Applicaion to access their data, the process of connecting Concur company to your application is described here (where???)
- groups and scope - are used for complex access control scenarios  

**Request**
```
GET /events/v4/subscriptions/my-unique-subscription-id
```
**Response**
```json
[
    {
        "id": "my-unique-subscription-id",
        "topic": "public.test",
        "filter": ".*",
        "webHookConfig": {
            "endpoint": "https://www.concuress.com/sub/my-valid-endpoint"
        },
        "applicationId": "dabd27f0-23e7-415d-b5e5-19a7dbe4fb4d",
        "scope": "",
        "groups": [],
        "companyIds": []
    }
]
```
## 5. Browse existing subscriptions
If you happen to forget your subscription name/id, you can always retrieve all of your subscriptions by calling next endpoint:  
**Request**
```
GET /events/v4/subscriptions
```
**Response**
```json
[
    {
        "id": "my-second-unique-subscription-id",
        "topic": "public.test",
        "filter": ".*",
        "webHookConfig": {
            "endpoint": "https://www.concuress.com/sub/my-second-valid-endpoint"
        },
        "applicationId": "dabd27f0-23e7-415d-b5e5-19a7dbe4fb4d",
        "scope": "",
        "groups": [],
        "companyIds": []
    },
    {
        "id": "my-unique-subscription-id",
        "topic": "public.test",
        "filter": ".*",
        "webHookConfig": {
            "endpoint": "https://www.concuress.com/sub/my-valid-endpoint"
        },
        "applicationId": "dabd27f0-23e7-415d-b5e5-19a7dbe4fb4d",
        "scope": "",
        "groups": [],
        "companyIds": []
    }
]
```


## 6. Delete your subscription
**Request**
```
DELETE /events/v4/subscriptions/my-unique-subscription-id
```
**Response**
```json
{
    "message": "Subscription 'my-unique-subscription-id' marked for deletion"
}
```
