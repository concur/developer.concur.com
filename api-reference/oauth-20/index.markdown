---
title: OAuth 2
layout: conceptual
---




OAuth 2.0 is an authorization protocol designed to enable third-party applications (in Concur these are called partner apps) to obtain limited access to an HTTP service, either on behalf of a resource owner by orchestrating an approval interaction between the resource owner and the HTTP service, or by allowing a third-party application to obtain access on its own behalf.

In traditional client-server authentication models, the resource owner provides access to its protected resources by sharing its credentials with a third-party application. This creates several security concerns:

* Third-party applications are required to store the resource owner's credentials for future use, typically a password in clear-text.
* Servers are required to support password authentication, despite the security weaknesses inherent in passwords.
* Third-party applications gain overly broad access to the resource owner's protected resources, leaving resource owners without any ability to restrict duration or access to a limited subset of resources.
* Resource owners cannot revoke access to an individual third-party without revoking access to all third-parties, and must do so by changing their password.
* Compromise of any third-party application results in compromise of the end-user's password and all of the data protected by that password.

OAuth 2.0 addresses these limitations by introducing an authorization layer and separating the role of the client and the resource owner.

The Concur Platform APIs implements OAuth 2.0 because it provides a simple mechanism for end-users to grant a partner application access to their data (_protected resources_) without sharing their passwords. It also enables the user to grant limited access to their data in terms of scope, duration, and so on. For example, Ana (_resource owner_) can grant a travel app (_client_) access to her protected travel data stored at Concur (_resource server_), without sharing her username and password with the travel app. Instead, she authenticates directly with Concur (_authorization server_), which issues the travel app delegation-specific credentials (_access token_).

[Learn More About OAuth2.0][1]



[1]: https://developer.concur.com/oauth-20/oauth-20-overview
