---
title: E-Receipts Integration Guide
layout: reference
---

At SAP Concur, e-receipts are digital representations of receipts with both a receipt image and structured data. The e-receipts come from pre-authorized and trusted merchants and are transmitted to SAP Concur using our **Receipt** API (not email) on behalf of individual users who have connected their accounts/profiles between SAP Concur and the merchant in advance.

## Getting Started

**New App Center Partners:**  Your Company must have entered into a commercial agreement with SAP Concur. If you have not yet entered into said agreement with SAP Concur, review the information on the [Build App Center Solutions](https://developer.concur.com/solutions/app-center.html) page.

**Existing App Center Partners:**  The SAP Concur Platform team will need to configure your existing sandbox, among other things to enable access.  You can make that request by contacting your [Alliance Manager](mailto:concur_AppCenterAlliance@sap.com?
subject=Receipts%20v4%20Migration%20Request).

## User Connections / Authentication

The below Authentication Methods are available to obtain an access token. Password Grant or Authorization Grant or One-Time Password Grant is required for Certification:

* [Password Grant](/api-reference/authentication/apidoc.html#password-grant) - Connect from the SAP Concur App Center.
* [Authorization Grant](/api-reference/authentication/apidoc.html#auth-grant) - Connect from the Partner App.
* [One-Time Password Grant](/api-reference/authentication/apidoc.html#otp-grant) - Connect from the Partner App using email.

### App Center Flow - Connecting from SAP Concur Web / Mobile App Center

1. To begin the authentication flow, a request (temporary) token is obtained via the SAP Concur AppCenter interface.
2. A logged-in SAP Concur user clicks on the Connect button on the App listing in the App Center and authorizes your app to post data.   App Listing Example below:

    ![Example App Center listing](/assets/img/api-guides/e-receipts/appflow-listing.png)

3. The SAP Concur authorization service will redirect the user to your landing page. Please follow the [App Center Design Guidelines](/manage-apps/go-market-docs/app-center-ux-guidelines-consumer.html) to create a web page that listens for an HTTP GET request from SAP Concur.
4. The redirect URI will contain an `id` and `requestToken` parameters.
`Example:   https://{partner-redirect-URI}?id=8568a4cd-8ffc-49d6-9417-be2d69aa075f&requestToken=5l85ae5a-426f-4d6f-8af4-08648c4b696b`
5. When your application receives the redirect call strip the `id` and `requestToken` values from the URI and use those on a Post request to the SAP Concur Authorization service to obtain the official OAuth2 `accessToken` and `refreshToken` for the user using the [password grant](/api-reference/authentication/apidoc.html#password-grant) while [being geo aware](#being-geo-aware).
6. Decode the `id_token` to obtain the `sub` value and store this value as the user `id` (see [https://jwt.io](https://jwt.io)).
7. An access token is valid only for one hour. The access token should be cached in memory and discarded after use.
8. After the user has successfully completed the login/enrollment process, store the following with the user's profile in your database.
   * `refresh_token`: (36 characters including dashes) valid for six months from the day and time issued.
   * `refresh_expires_in`: This is Epoch time format, convert to UTC.
   * `geolocation`:  to be used when making API calls on behalf of the user.
   * `sub`: (36 characters including dashes) user `id` value provided on the redirect URI.  The user `id` will be used to post receipts to the user's SAP Concur account.

### Web Flow - Connecting from the Partner Web or Mobile App

1. Partner App-User clicks on **Link to Concur** button within the Partner's website or mobile App.  Partner Web or Mobile Connection Example below:

    ![Example of what an App Center partner might display on their own site to allow their users to connect their user account at the partner with their account at Concur, using the web flow.](/assets/img/api-guides/e-receipts/webflow-auth.png)

2. Your Application will make a call to the SAP Concur Authorization service.  
`Example: GET /oauth2/v0/authorize?client\_id={your-app-clientId}&redirect\_uri={partner_redirect_URI}&response\_type=code`
3. The SAP Concur Authorization service will prompt the user with two options: "Username/Password" or "Send a link to my email."

    ![Concur authentication prompt for the user, after they have chosen to connect their account at the partner site with their Concur account. They have two options, Send a link to my email, or enter their username to authenticate.](/assets/img/api-guides/e-receipts/signin.png)

4. Handling the username/password option:
   * When users choose the username/password option, the authorization service will prompt the user to enter their concur credentials.
   * After successfully logging in, the user's page will be redirected to the partner's redirect URI with a query parameter containing a one-time use code and user's geolocation which will be used to obtain an official OAuth2 `accessToken` and `refreshToken`.
`Example: https://{partner\_redirect\_URI}?{geolocation}&code=code-964c24ea-9200-45e7-a5ae-15e9cef0d445`
5. Handling the email option:
   * The email option is designed for users who do not want to use passwords or those that do not have passwords such as single sign-on (SSO) users.
   * Email is sent IF provides his/her **primary** SAP Concur email address (email1).
   * After user clicks on the "Sign in with Concur" link within the email, he/she will be redirected to the partner's redirect URI with a query parameter containing a one-time use code and user's geolocation which will be used to obtain an official OAuth2 `accessToken` and `refreshToken`.
`Example: https://{partner\_redirect\_URI}?{geolocation}&code=code-964c24ea-9200-45e7-a5ae-15e9cef0d445`

    ![Example email that is sent if the user chooses Send a link to my email.](/assets/img/api-guides/e-receipts/otp-email2.png)

6. When your application receives the redirect call with the code and user's GeoLocation, strip the `code` value and user's `geolocation` from the redirect URI to use on a Post request to the SAP Concur Authorization service to obtain an official OAuth2 `accessToken` and `refreshToken` using the [authorization grant](/api-reference/authentication/apidoc.html#auth-grant).
7. Decode the `id_token` to obtain the `sub` value and store this value as the user `id` (see [https://jwt.io](https://jwt.io)).
8. An access token is valid only for one hour. The access token should be cached in memory and discarded after use.
9. Store the following with the user's profile in your database.
   * `refresh_token`: (36 characters including dashes) valid for six months from the day and time issued.
   * `refresh_expires_in`: This is Epoch time format, convert to UTC.
   * `geolocation`:  to be used when making API calls on behalf of the user.
   * `sub`: (36 characters including dashes) user `id` value provided on the redirect URI.  The user `id` will be used to post receipts to the user's SAP Concur account.
10. Confirm visually to the user that their partner-App account has been successfully linked with their SAP Concur account, and that the receipts will be posted to the user's SAP Concur account after payment.

### One Time Password Flow - Connecting from the Partner Web or Mobile App via One-Time Password (Email)

1. Partner App-User enters their email address associated with the SAP Concur profile within the Partner's website or mobile App. Partner one time password (OTP) Connection Example below:

    ![Example of what an App Center partner might display on their own site to allow their users to connect their user account at the partner with their account at Concur, using the one time password flow.](/assets/img/api-guides/e-receipts/otpflow.png)

2.  User clicks on Link/Connect button. Note: User may have more than one email associated with their SAP Concur profile. The email address used for this method should be the email address listed as Email1 on the user's SAP Concur profile.
3. Your Application will make a call to the SAP Concur Authorization service to trigger the OTP email using [OTP grant](/api-reference/authentication/apidoc.html#otp-grant) while [being geo aware](#being-geo-aware).

    ![Concur authentication prompt for the user, after they have chosen to connect their account at the partner site with their Concur account, using the one time password flow.](/assets/img/api-guides/e-receipts/otp-email.png)

4. After user clicks on the "Sign in with Concur" link within the email, they will be redirected to the partner's redirect URI with a query parameter containing a one-time token `otl` that will be used to obtain an official OAuth2 `accessToken` and `refreshToken`.  
`Example: https://{partner\_redirect\_URI}&otl=7add4621f00b47e1aa2d8a61739c97e6`
5. When your application receives the redirect call with the one-time token, strip the token value from the redirect URI and use that token on a Post request to the SAP Concur Authorization service to obtain an official OAuth2 `accessToken` and `refreshToken` using the [OTP grant](/api-reference/authentication/apidoc.html#otp-grant) while [being geo aware](#being-geo-aware).
6. Decode the `id_token` to obtain the`sub` value and store this value as the user`id` (see [https://jwt.io](https://jwt.io)).
7. An access token is valid only for one hour. The access token should be cached in memory and discarded after use.
8. Store the following with the users profile in your database.
   * `refresh_token`: (36 characters including dashes) valid for six months from the day and time issued.
   * `refresh_expires_in`: This is Epoch time format, convert to UTC.
   * `geolocation`:  to be used when making API calls on behalf of the user.
   * `sub`: (36 characters including dashes) user `id` value provided on the redirect URI. The user `id` will be used to post receipts to the user's SAP Concur account.
9. Confirm visually to the user that their partner-App account has been successfully linked with their SAP Concur account, and that the receipts will be posted to the user's SAP Concur account after payment.

## Posting E-Receipts

Getting Started with Receipts v4 documentation can be found [here](/api-reference/receipts/get-started.html).

* Select a [Supported Receipt type](/api-reference/receipts/supported-receipt-types.html) that best fits your industry and retrieve the list [schemas](/api-reference/receipts/get-started.html) for the available receipt types.
* To ensure that you are using the correct endpoint URLs, the safest practice is to check the service index before every request. [Get service Index](/api-reference/receipts/endpoints.html#endpoint-service-index)
* If your app currently generates a receipt image, (.png, .jpg, .tif, .pdf, or other image file), you can include it in your post to SAP Concur.
* SAP Concur generates a standard receipt for Partners who do not provide a receipt image.
* SAP Concur will display your App Logo on standard generated receipts (size 100x100 px).

### Post an E-Receipt After Payment Has Been Made

1. Obtain a fresh access token for the user using [refresh grant](/api-reference/authentication/apidoc.html#refresh_token).
2. You will need the user `Id` previously stored in the user's profile to post receipts on their behalf.
3. Post receipt using the [Post Receipt](/api-reference/receipts/endpoints.html#endpoint-post-a-receipt) endpoint.
4. You should store the `concur-correlationid` and the Location Link from the response headers even for successful responses, this will facilitate support efforts in case of a missing receipt from User's SAP Concur account.

## Token Management

### Refreshing Tokens

1. You will obtain a fresh accesstoken before making API calls on behalf of your users using the [refresh grant](/api-reference/authentication/apidoc.html#refresh-token).
2. A `refreshToken` is valid for six months.
3. The below elements are returned with the new access token, replace previously stored values for the user in your database:
   * `refresh_token` _(Replace)_
   * `refresh_expires_in` _(Replace)_
4. If the user does not log in for six months the refresh token will expire and the user's Partner account and SAP Concur account will be de-linked.

### Migrating Tokens (Applies to Existing Partners/Existing Apps Only)

Existing applications that use the deprecated /net2/oauth2 framework need to move to support the new OAuth2 Bearer Tokens.

Applications will need to [migrate](/api-reference/authentication/migrationguide.html) their existing users who already have connected to it to obtain new OAuth2 tokens without requiring users to reauthorize. This can be done by exchanging an old access token for a new refresh token.

1. Obtain an Application Token using the [client credentials grant](/api-reference/authentication/apidoc.html#client-credentials).
2. Once you have obtained the Application Token, exchange Old for New Refresh Tokens by calling the [ExchangeRefreshToken](/api-reference/authentication/migrationguide.html#exchangetoken) endpoint.
3. Use the new refreshtoken to obtain a new accesstoken using the [refresh grant](/api-reference/authentication/apidoc.html#refresh-token).
4. Decode the `id_token` to obtain the `sub` value and store this value as the user `id` (see [https://jwt.io](https://jwt.io)).
5. An access token is valid only for one hour. The access token should be cached in memory and discarded after use.
6. Store the following with the user's profile in your database.
   * `refresh_token`: (36 characters including dashes) valid for six months from the day and time issued.
   * `refresh_expires_in`: This is Epoch time format, convert to UTC.
   * `geolocation`:  to be used when making API calls on behalf of the user.
   * `sub`: (36 characters including dashes) user `id` value provided on the redirect URI. The user `id` will be used to post receipts to the user's SAP Concur account.

### Revoking Tokens

To [revoke](/api-reference/authentication/apidoc.html#revoke-token) a user's refresh\_token call the connections endpoint with a DELETE action while [being geo aware](#being-geo-aware).

## <a name="being-geo-aware"></a> Being Geo Aware

### SAP Concur Has Multiple Datacenters

US = `https://us.api.concursolutions.com`

EMEA = `https://emea.api.concursolutions.com`

China = `https://cn.api.concurcdc.cn`

You will need to be aware of the geolocation where the user exists in and make the call to the APIs correctly. If there is a case where you will not or do not know the users geolocation, then you should make the API call using the default US Base URI `https://us.api.concursolutions.com` and expect a geolocation error which will return the correct geoLocation for the user. For more information see [Base URIs](/platform/base-uris.html).

Sample of Error below:

  ![Example of the HTTP error returned if the user is located in a different datacenter.](/assets/img/api-guides/e-receipts/error2.jpg)
