---
title: Launch an external URL request
layout: reference
---


### Description
Concur will send a request with the information in an encoded query string when the user clicks the button.

### Request URI
The Launch External URL callout launches the URI for the application connector, which can be in a custom location for each client. The standard location is:

`https://{servername}/concur/form/v1.0/get`

The URI is configured on the **Register Application Connector** page in **Web Services** under **Administration**.

The full URI for the request includes the following query string values:

```
    https://{servername}/concur/form/v1.0/get?xcompanydomain={URL-encoded company domain}
        &xuserid={URL-encoded login ID of interactive user}
        &itemurl={URL-encoded url to item}
        &nonce={URL-encoded timestamp}
        &signature={URL-encoded signature hash}
```

### Request Query Parameters

| Value | Description |
|-------|-------------|
|  xcompanydomain |  The company domain. |  
|  xuserid |  The Concur user ID of the logged-in user. This may be an expense delegate instead of the report owner. To get the report owner ID, use the itemurl to get the details of the expense entry, then use those details to get the associated report details, including the report owner ID. |
|  itemurl |  The URL-encoded URI to access the item the field appears on. An example would be the expense entry URI used by the Expense Report web service. |
|  nonce |  The URL-encoded GUID used to generate the signature. |
|  signature |  The URL-encoded signature hash. |

### Authenticating the Request
To authenticate the request, the developer of the page in the app connector will need to generate an auth signature and compare it with the one passed in the query string.

When the request is received by the connector:

1. Obtain the username and password for the application connector. How you do this will be specific to your implementation.
2. Parse and URL decode the following from the query string:
    1. xcompanydomain
    2. xuserid (used for subsequent web service call)
    3. itemurl
    4. nonce
    5. signature (used to authenticate and verify the request)
3. Base64-decode the provided signature.
4. Calculate your own base signature string by appending the values as such:  
{xcompanydomain} + {xuserid} + {itemurl} + {connector username} + {connector password} + {nonce}
5. Use HMacSHA1 to generate a signature hash using the base signature string. To generate the key, concatenate the lower-case value for {connector username} and the exact {connector password}. For example, if the connector user name is JohnDoe, and the password is password, the key would be johndoepassword.
6. Compare the generated signature hash with the signature hash provided in the request query string.
If the signature hashes match then you know the credentials are valid and the request has not been tampered with.

**NOTES:**

* You can store the nonce to help prevent replay attacks if necessary.
* The order of the query parameters is not important, but the values in the base signature string must be combined in the correct order to generate the signature hash correctly.
 |

####  XML Example Request

```xml
    GET https://{URL to your custom connector and endpoint}
    ?xcompanydomain={URL-encoded company domain}
        &xuserid={URL-encoded login ID of interactive user}
        &itemurl={URL-encoded url to item}
        &nonce={URL-encoded timestamp}
        &signature={URL-encoded signature hash}
```

##  Get External URL Response

### Content Body
The application connector does not directly respond to the Launch External URL request. The application connector completes any updates to Concur using the Inbound Web Services. The Launch External URL functionality monitors the external window, and when the window is closed, it redraws the form the user launched from to display any updated values.

The following example shows how the Launch External URL web service is used to bring an external system value into an Expense Entry form field. The following configuration has already been completed:

* The Project ID field has been configured as a Launch URL form field control type.
* The Project ID field has been added to the expense entry form.
* The application connector has been configured to use the expense type of the entry and the user ID to search for the correct Project IDs and present them to the user.
