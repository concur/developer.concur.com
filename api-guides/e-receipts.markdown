---
title: eReceipts Recipe
layout: reference
---



## eReceipts Recipe


At Concur, e-receipts are digital representations of receipts with both a receipt image and structured data. The e-receipts come from pre-authorized and trusted merchants and are transmitted to Concur using our **Receipt** API (not email) on behalf of individual users who have connected their accounts/profiles between Concur and the merchant in advance.

### Getting Started

**New App Center Partners:**  Your Company must have entered into a commercial agreement with Concur.  If you have not yet entered into said agreement with Concur, click [here](https://developer.concur.com/why-concur.html) to contact our business development team

**Existing App**  **Center Partners:**  The Concur Platform team will need to configure your existing sandbox among other things to enable access.  You can make that request by contacting your [Alliance Manager](mailto:AppCenterAlliance@concur.com?subject=Receipts%20v4%20Migration%20Request).


### User Connections / Authentication

The below Authentication Methods are available to obtain an access token.  Password Grant and either Authorization or One-Time Password Grants are required for Certification:

- [Password Grant](https://developer.concur.com/api-reference/authentication/apidoc.html#password_grant) – Connect from the Concur App Center.
- [Authorization Grant](https://developer.concur.com/api-reference/authentication/apidoc.html#auth_grant) – Connect from the Partner App.
- [One-Time Password Grant](https://developer.concur.com/api-reference/authentication/apidoc.html#otp_grant) – Connect from the Partner App utilizing Email.


#### App Center Flow - Connecting from Concur Web / Mobile App Center

1. To begin the authentication flow, a request (temporary) token is obtained via the Concur AppCenter interface.
2. A logged-in Concur user clicks on the Connect button on the App listing in the App Center and authorizes your app to post data.   App Listing Example below:

![appflow_listing](https://user-images.githubusercontent.com/30883242/33037315-24acf7e4-cdff-11e7-835a-c18c27af9c2d.png)

3. Concur&#39;s authorization service will redirect the user to your landing page.  Please follow the [App Center Design Guidelines](https://developer.concur.com/manage-apps/go-market-docs/app_center_ux_guidelines.pdf) to create a web page that listens for an HTTP GET request from Concur.
4. The redirect URI will contain an **id** and **requestToken** parameters.  Example:  https://www.abcd.com/token?id=8568a4cd-8ffc-49d6-9417-be2d69aa075f&amp;requestToken=5l85ae5a-426f-4d6f-8af4-08648c4b696b
5. When your application receives the redirect call strip the **id** and **requestToken** values from the URI and use those on a Post request to the Concur Authorization service to obtain the official oauth2 accesstoken and refreshtoken for the user using the [password grant](https://developer.concur.com/api-reference/authentication/apidoc.html#password_grant) while being Geo Aware.
6. Decode the **id\_token** to obtain the **sub** value and store this value as the user **id** (see [https://jwt.io](https://jwt.io) )
7. An access token is valid only for one hour.  The access token should be cached in memory and discarded after use.
8. After the user has successfully completed the login/enrollment process, store the following with the user&#39;s profile in your database.
   - refresh\_token: (36 characters including dashes) valid for six months from the day and time issued.
   - refresh\_expires\_in: This is Epoch time format, convert to UTC.
   - geolocation:  to be used when making API calls on behalf of the user.
   - Sub: (36 characters including dashes) user **id** value provided on the redirect URI.  The user **id** will be used to post receipts to the user&#39;s Concur account.


#### Web Flow - Connecting from the Partner Web / Mobile App

1. Partner App-User clicks on **Link to Concur** button within the Partner&#39;s website/mobile App.  Partner Web/Mobile Connection Example below:

![webflow_auth](https://user-images.githubusercontent.com/30883242/33037320-2a7a8330-cdff-11e7-81f5-ed17a24de8b9.png)

2. Your Application will make a call to the Concur Authorization service.  Example: GET /oauth2/v0/authorize?client\_id={your-app-clientId}&amp;redirect\_uri={your-app-redirect-uri}&amp;response\_type=code
3. The Concur Authorization service will prompt the user with two options: &quot;Username/Password&quot; or &quot;Send a link to my email&quot;.

![signin](https://user-images.githubusercontent.com/30883242/33037330-30f07ec2-cdff-11e7-88f5-cac05ddd1463.png)

4. Handling the username/password option:
   - When users choose the username/password option, the authorization service will prompt the user to enter their concur credentials.
   - After successfully logging in, the user&#39;s page will be redirected to the partner&#39;s redirect URI with a query parameter containing a one-time use code and user&#39;s geolocation which will be used to obtain an official oauth2 accesstoken and refreshtoken.  Example: _ _https://{partner\_redirect\_URI}/?code=code-964c24ea-9200-45e7-a5ae-15e9cef0d445&amp;{user&#39;s geolocation}
5. Handling the email option:
   - The email option is designed for users who do not want to use passwords or those that do not have passwords such as Single Sign-On (SSO) users.
   - Email is sent IF provides his/her **primary** Concur email address (email1).
   - After user clicks on the &quot;Sign in with Concur&quot; link within the email, he/she will be redirected to the partner&#39;s redirect URI with a query parameter containing a one-time use code and user&#39;s geolocation which will be used to obtain an official oauth2 accesstoken and refreshtoken.  Example: https://{partner\_redirect\_URI}/?code=code-964c24ea-9200-45e7-a5ae-15e9cef0d445&amp;{user&#39;s geolocation}

![otl email2](https://user-images.githubusercontent.com/30883242/33038302-2fe9ef88-ce02-11e7-8fc4-baa89afdbe32.png)

6. When your application receives the redirect call with the code and user&#39;s GeoLocation, strip the **code** value and user&#39;s **geolocation** from the redirect URI to use on a Post request to the Concur Authorization service to obtain an official oauth2 accesstoken and refreshtoken using the [authorization grant](https://developer.concur.com/api-reference/authentication/apidoc.html#auth_grant).
7. Decode the **id\_token** to obtain the **sub** value and store this value as the user **id** (see [https://jwt.io](https://jwt.io) )
8. An access token is valid only for one hour.  The access token should be cached in memory and discarded after use.
9. Store the following with the user&#39;s profile in your database.
   - refresh\_token: (36 characters including dashes) valid for six months from the day and time issued.
   - refresh\_expires\_in: This is Epoch time format, convert to UTC.
   - geolocation:  to be used when making API calls on behalf of the user.
   - Sub: (36 characters including dashes) user **id** value provided on the redirect URI.  The user **id** will be used to post receipts to the user&#39;s Concur account.
10. Confirm visually to the user that their partner-App account has been successfully linked with their Concur account, and that the receipts will be posted to the user&#39;s Concur account after payment.


#### One Time Password Flow - Connecting from the Partner Web / Mobile App via One-Time Password (Email)

1. Partner App-User enters their email address associated with the Concur profile within the Partner&#39;s website/mobile App.  Partner OTP Connection Example below:

![otpflow](https://user-images.githubusercontent.com/30883242/33037384-59a53d58-cdff-11e7-9d81-049c25c4f766.png)

2.  User clicks on Link/Connect button. Note: User may have more than 1 email associated with his/her Concur profile.  The email address used for this method should be the email address listed as Email1 on the user&#39;s Concur profile.
3. Your Application will make a call to the Concur Authorization service to trigger the OTP email using OTP grant while being Geo Aware.

![otp emaiil](https://user-images.githubusercontent.com/30883242/33037392-6107d65a-cdff-11e7-8124-a03c67edefdc.png)



4. After user clicks on the &quot;Sign in with Concur&quot; link within the email, he/she will be redirected to the partner&#39;s redirect URI with a query parameter containing a one-time token &#39;otl&#39; that will be used to obtain an official oauth2 accesstoken and refreshtoken.  Example: https://{partner\_redirect\_URI}&amp;otl= **7add4621f00b47e1aa2d8a61739c97e6**
5. When your application receives the redirect call with the one-time token, strip the token value from the redirect URI and use that token on a Post request to the Concur Authorization service to obtain an official oauth2 accesstoken and refreshtoken using the [OTP grant](https://developer.concur.com/api-reference/authentication/apidoc.html#otp_grant) while being Geo Aware.
6. Decode the **id\_token** to obtain the **sub** value and store this value as the user **id** (see [https://jwt.io](https://jwt.io) )
7. An access token is valid only for one hour.  The access token should be cached in memory and discarded after use.
8. Store the following with the user&#39;s profile in your database.
   - refresh\_token: (36 characters including dashes) valid for six months from the day and time issued.
   - refresh\_expires\_in: This is Epoch time format, convert to UTC.
   - geolocation:  to be used when making API calls on behalf of the user.
   - Sub: (36 characters including dashes) user **id** value provided on the redirect URI.  The user **id** will be used to post receipts to the user&#39;s Concur account.
9. Confirm visually to the user that their partner-App account has been successfully linked with their Concur account, and that the receipts will be posted to the user&#39;s Concur account after payment.


### Posting E-Receipts


Getting Started with Receipts v4 documentation can be found [here](https://developer.concur.com/api-reference/receipts/get-started.html).

- Select a [Supported Receipt type](https://developer.concur.com/api-reference/receipts/supported-receipt-types.html) that best fits your industry and retrieve the list [schemas](https://developer.concur.com/api-reference/receipts/get-started.html) for the available receipt types.
- To ensure that you are using the correct endpoint URLs, the safest practice is to check the service index before every request.   [Get service Index](https://developer.concur.com/api-reference/receipts/get-started.html#endpoint-service-index)
- If your app currently generates a receipt image, (.png, .jpg,.tif, .pdf or other image file), you can include it in your post to Concur.
- Concur generates a standard receipt for Partners who do not tender a receipt image.
- Concur will display your App Logo on standard generated receipts (size 100x100 px)

#### Post an E-Receipt after payment has been made

1. Obtain a fresh access token for the user using [refresh grant](https://developer.concur.com/api-reference/authentication/apidoc.html#refresh_token).
2. You will need the user **Id** previously stored in the user&#39;s profile to post receipts on his/her behalf.
3. Post receipt using the [Post Receipt](https://developer.concur.com/api-reference/receipts/get-started.html#endpoint-post-a-receipt) endpoint
4. You should store the Concur\_Correlation\_ID and the Location Link from the response headers even for successful responses, this will facilitate support efforts in case of a missing receipt from User&#39;s Concur account.


### Token Management

#### Refreshing Tokens

1. You will obtain a fresh accesstoken before making API calls on behalf of your users using the [refresh grant](https://developer.concur.com/api-reference/authentication/apidoc.html#refresh_token).
2. A user&#39;s refreshtoken is valid for six months.
3. The below elements are returned with the new Access Token, replace previously stored values for the user in your database:
   - **refresh\_token** _(Replace)_
   - **refresh\_expires\_in** _(Replace)_
4. If the user does not log in for six months his/her refresh token will expire and the user&#39;s Partner account and Concur account will be de-linked.

#### Migrating Tokens (Applies to existing Partners/existing Apps Only)

Existing applications that use the deprecated /net2/oauth2 framework need to move to support the new Oauth2 Bearer Tokens.

Applications will need to [migrate](https://developer.concur.com/api-reference/authentication/migrationguide.html) their existing users who already have connected to it to obtain new Oauth2 tokens without requiring users to reauthorize.  This can be done by exchanging an old access token for a new refresh token.

1. Obtain an Application Token using the [client credentials grant](https://developer.concur.com/api-reference/authentication/apidoc.html#client_credentials).
2. Once you have obtained the Application Token, exchange Old for New Refresh Tokens by calling the [ExchangeRefreshToken](https://developer.concur.com/api-reference/authentication/migrationguide.html#exchangetoken) endpoint.
3. Use the new refreshtoken to obtain a new accesstoken using the [refresh grant](https://developer.concur.com/api-reference/authentication/apidoc.html#refresh_token).
4. Decode the **id\_token** to obtain the **sub** value and store this value as the user **id** (see [https://jwt.io](https://jwt.io) )
5. An access token is valid only for one hour.  The access token should be cached in memory and discarded after use.
6. Store the following with the user&#39;s profile in your database.
   - refresh\_token: (36 characters including dashes) valid for six months from the day and time issued.
   - refresh\_expires\_in: This is Epoch time format, convert to UTC.
   - geolocation:  to be used when making API calls on behalf of the user.
   - Sub: (36 characters including dashes) user **id** value provided on the redirect URI.  The user **id** will be used to post receipts to the user&#39;s Concur account.

#### Revoking Tokens

To [revoke](https://developer.concur.com/api-reference/authentication/apidoc.html#revoke_token) a user&#39;s refresh\_token call the connections endpoint with a DELETE action while being Geo Aware.


### Being Geo Aware

#### Concur has multiple datacenters:

US = https://us.api.concursolutions.com

EMEA = https://emea.api.concursolutions.com

China = https://apa1.concurcdc.cn

You will need to be aware of the geolocation where the user exists in and make the call to the APIs correctly.  If there is a case where you will not / do not know the user&#39;s geolocation, then you should make the API call using the default US Base URI [https://us.api.concursolutions.com](https://us.api.concursolutions.com)and expect a geolocation error which will return the correct geoLocation for the user.  Sample of Error below:

![error2](https://user-images.githubusercontent.com/30883242/33038487-cd5e3b8e-ce02-11e7-89d8-0e4870422528.jpg)

#### Make us better at making your experience easier.
Share a Concur API process issue we can do better. Provide us with an explanation, screen shots and your recommendation [here](http://forum.developer.concur.com/).




