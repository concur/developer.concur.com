---
title: Authentication and Errors
layout: reference
---


Authentication

Concur will send the username and password in both the HTTP header and the SOAP header.  The HTTP header follows the best practices of username:password which is Base64 encoded.   

As authentication, Concur sends userID and password in each message SOAP header: 

**authentication**

|  Element |	Required | Data Type 	|  Description |
|----------|-----------|---------------------------|-|
| userid | Y | String	| Contains the authentication details |
| password | Y | String	| Contains the authentication details |

Sample:

```xml
    <Header xmlns="http://schemas.xmlsoap.org/soap/envelope/">
        <authentication xmlns="http://www.concur.com/webservice/auth">
            <userid>testLogin123</userid>
            <password>xxxxxxxxxxxx</password>
        </authentication>
    </Header>
```
Login and password are provided by the Hotel supplier for Concur as API consumer, not per customer.


Errors

Concur is able to handle HTTP errors, but the preference is for the supplier to return an OTA error whenever possible.  Concur only ever expects one OTA error per message.  Any extra errors will be ignored. 
Currently OTA Warnings are not supported and will be ignored. 
