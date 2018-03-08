---
title: Sign in with Concur
layout: reference
---


# Sign in with Concur

* [Introduction](#introduction)
* [Benefits](#benefits)
* [Use Cases](#use_cases)
* [How it Works](#how_it_works)
* [Getting Started](#getting_started)
* [Error Handling](#error_handling)
  * [Authorization Declined](#authorization_declined)
  * [Application is disabled](#application_is_disabled)
* [Advanced](#advanced)
  * [Enterprise Applications](#enterprise_applications)
  * [TripLink Configurations](#triplink_configurations)
  * [Supported Languages](#supported_languages)

## <a name="introduction"></a>Introduction

Streamline user onboarding with **Sign in with Concur** – a new feature that allows new users to log on to a partner application using their Concur credentials. Similar to the single sign-on feature provided by Facebook and other social applications, Sign in with Concur reduces the time and effort involved in setting up an account with our partner apps.

## <a name="benefits"></a>Benefits

_For partners_

- Streamlines account set-up: User's profile is pre-validated, including basic PII information plus travel preferences
- Simplifies development and integration: Quickly obtain authentication tokens for the user and call Concur's APIs

_For users_

- Quick and hassle-free way to sign up for a new app
- Secure: User's Concur credentials are never shared with partners



## <a name="use_cases"></a>Use Cases

Sign in with Concur solves access and support issues for all of our various types of partner integrations:



_Consumer applications_

Business travelers use in-policy providers but may not have an existing loyalty account. Gain access to the network of business travelers and expense users of Concur by simplifying their first purchase.



_Front office applications_

Travel and Expense Policy administrators reduce the company's cost via volume purchasing through your application or service; reduce your integration and support overhead as well by removing the need to manage individual user accounts associate with those customers.



_Back office applications_

- Automate the process of provisioning users for your application using data from Concur.

- Simplify log in and support for users that log in infrequently by leveraging Concur's authentication.

# <a name="how_it_works"></a>How it Works


_Select_ **Sign in with Concur** _from the site login menu_


 ![login screen sample](sign_in_with_concur_images/login_screen_sample.png)
 

_Pick Authentication Option_

Single-sign on users can utilize the "Send a link to my email" option.


 ![sign in](sign_in_with_concur_images/authorization_grant_sign_in.png)
 

_If the user selects "One-time Link":_

_Enter Email address_


 ![sign in email option](sign_in_with_concur_images/authorization_grant_sign_in_email.png)
 

_Confirmation page_


 ![email confirmation](sign_in_with_concur_images/authorization_grant_email_confirmation.png)
 

_Email example_


![email sample](sign_in_with_concur_images/authorization_grant_email_sample.png)


_If the user selects "Enter Concur Credentials":_


 ![sign in username and password option](sign_in_with_concur_images/authorization_grant_username_password.png)



_Complete!_

_For both authentication flows, once authorized, the account is provisioned and user is logged in_


 ![sign in complete](sign_in_with_concur_images/sign_in_with_concur_complete.png)

# <a name="getting_started"></a>Getting Started

**1. Obtain your Application clientID and clientSecret**

Before you can integrate **Sign in with Concur** into your application, you need to register your application with Concur. You can do this by contacting your Partner Enablement Manager or Partner Account Manager. Once you have registered an application, you will receive a `clientId` and `clientSecret`. The `clientId` is a unique UUID4 identifier for your application, and the `clientSecret` is your application password. You will be using this credential to obtain tokens either for the application itself, or on behalf of a user.

**2. Add the button to your application**

The first script adds the Concur style library to your page and the second applies the style to your button.

```
<script

        data-client-id=[yourClientID]

        data-redirect-uri=[yourRedirectURI]

        data-oauth-uri="https://www-us.api.concursolutions.com"

        src="https://static.concursolutions.com/nui/oauth/v3/concur-signin.js"></script>

<div style="float:right">

        <div id="concur-signin"></div>

    </div>
```



Clicking this button renders the Sign in with Concur screen which presents two options to the user for signing in: 
1) using Concur credentials 
OR 
2) using a link sent via email. 

Option 2 is designed for users who do not want to use passwords or those that do not have passwords such as Single Sign On (SSO) users.

 ![sign in email option](sign_in_with_concur_images/authorization_grant_sign_in_email.png)

**3. Handle Authorization Completion**

When users choose the email option, an email will be sent to the user that contains the `redirect_uri` chosen by the partner in Step 1. If the user selects the username and password option, after accepting the scopes, the user is also sent to the `redirect_uri` provided.

There will also be a temporary one-time use code which is appended to this `redirect_uri`. For example, if our redirect URI is https://www.hipmunk.com/auth/concur/callback, the code will be returned as:

        ```
        https://www.hipmunk.com/auth/concur/callback?cc=<token>
        ```

The call to this `redirect_uri` will contain a temporary code `cc` which should be used to obtain an official oauth2 `accesstoken` and `refreshtoken`.

The response for a successful call will look like this:

```
**HTTP/** 1.1200 **OK**

Content-Type: application/json;charset=UTF-8

Date: date-requested

Content-Length: 3397

Connection: Close

{

  "expires_in":"3600",

  "scope":"app-scope",

  "token_type":"Bearer",

  "access_token":"new-access_token",

  "refresh_token":"new-refresh_token",

  "refresh_expiry":"refresh_token_expiry",

  "geolocation":"https://us.api.concursolutions.com"

}
```



**4. Retrieve User Profile information**

Once the partner completes the oauth2 flow, they receive an `access_token` and `refresh_token`. Using the `access_token` and within the hour lifetime of the token, the partner has the ability to call Concur's APIs.Your application may call Concur's Profile API to obtain user information in order to provision an account in the partner's application.

*TripLink Suppliers see the appendix for more details.*

Here's an example to retrieve profile information for a User in the Production environment using cURL ( [Base URIs for other Environments](/api-reference/authentication/apidoc.html#base_uri)):

```
curl -k -v -H "Accept: application/json"\

-H "Authorization: Bearer …ypN2lukfWACR-26otN50c0OzY6kgY06RA"\

https://us.api.concursolutions.com/profile/v1/me
```


The response from the Profile service will be a compact version of the User profile. The schema can be found [here](/api-reference/profile-beta/user.json).

**5. Create user's account and log user into partner application immediately for a seamless user experience.**



Once the user is logged in, your application must determine whether an existing account exists. Your application can do so by pulling user information from the application and SAP Concur profile.

#### Existing Accounts

**For users connected to SAP Concur** through the Concur App Center or otherwise, your application can match the SAP Concur unique user ID.

#### New SAP Concur Accounts

**For users with existing, non-SAP Concur accounts** , the unique user information in your application can be matched with information in SAP Concur (e.g. email address).

**If the user does not have an existing account** , your application must provision a user account. In this case, the partner maintains the user's profile over time. This is beneficial as it allows the app to post data for the user following the initial session. For example, it allows users make changes to a reservation and receive updates within SAP Concur and/or receive receipts for services charged after delivery such as hotel stays.

In all cases, the user's token, geolocation and user UUID should be stored.  As applications vary in the information required to create a new user record and utilize the service, your application should leverage data from the user profile endpoint where possible.

# <a name="account_maintenance"></a>Account Maintenance

Once the account is provisioned or matched, the application must:

- Maintain the tokens for future use. To maintain the connection, please see the  [token refresh documentation](/api-reference/authentication/apidoc.html#refresh_token).
- [Provide the option to disconnect](/api-reference/authentication/apidoc.html#revoke_token)
- Keep the user signed in. If your application has a valid (not expired) refresh token, the user should remain signed in. Your application may create a cookie with the refresh token to bypass sign in on future visits.

# <a name="error_handling"></a>Error Handling

In all cases, the error description provided by Concur should be displayed to the user.

The following covers special cases that require additional handling.

## <a name="authorization_declined"></a>Authorization Declined

In the case the user leaves the sign in process or sign in is unsuccessful, the user will be redirected to the following:

```
Your_Redirect_Uri?

 error_code=user_denied

 &error_description=The+user+denied+your+request.
```

Apps should then provide the user with alternative connection methods:

- Log in by creating an account
- Attempt Sign in with Concur with an alternate credential



## <a name="application_is_disabled"></a>Application is disabled

Customers have the option to disable applications for their users. In these cases, the user will be redirected to the following:

```
Your_Redirect_Uri?

 error_code=

 &error_description=
```

In this case, the user will not be able to access your application using Sign in with Concur. The error description should be displayed to the user and the user given alternate sign in methods (e.g. create an account).

# <a name="advanced"></a>Advanced

This section covers guidelines for specific Sign in with Concur implementations.

## <a name="enterprise_applications"></a>Enterprise Applications

Company-wide integrations are unique in that your application will interact with Concur both on a batch level (POST for multiple employees) but also allow individuals to sign in to the service without creating a new account.

When an application supports enterprise integrations, the user's account should be associated with the company's information (company UUID) so that the company token can be used to process batch transactions.



## <a name="triplink_configurations"></a>TripLink Configurations

Depending on the products the customer has enabled, integrations and features available with Sign in with Concur vary. The following defines the scopes that are applicable product combinations. Your application must support each of the below potential scope configurations:

- Travel Users
  - TripLink Access:
    - Travel Profile
    - Client Discount Code
    - User form of Payment
    - Ghost Card
    - Itinerary
    - E-Receipt
  - Non-Triplink Access:
    - Travel Profile
    - E-receipt
- Expense Only Access:* 
  - E-receipt

* Special Note: For TripLink Suppliers that support the [Travel Receipts API](https://developer.concur.com/api-reference/travel-receipts/getting-started.html), this API does not support Expense only users. It is recommended that e-receipts be posted for these or all users via the [Receipts API](https://developer.concur.com/api-reference/receipts/get-started.html).

To determine which permissions the user has access to, **each time a user signs in** \*, your application should:

1. **Call the User Profile API to get the user's permissions.**

  A user can have one or more permissions that will dictate the scopes applicable to that user.

  ```
  curl -k -v -H "Accept: application/json"\

  -H "Authorization: Bearer …ypN2lukfWACR-26otN50c0OzY6kgY06RA"\

  https://us.api.concursolutions.com/api/user/v1.0/user
  ```

  The detailed response can be found here: [/api-reference/user/](/api-reference/user/) (snippet below).

  | **Name** | **Type** | **Format** | **Description** |
  | --- | --- | --- | --- |
  | ExpenseUser | string |   | Whether the user has access to Expense. Format: Y/N. |
  | TripUser | string |   | Whether the user has access to Travel. Format: Y/N. |

  The response will indicate whether the is an Expense or Travel user.

  **If an expense user only** , only the e-receipts scope is applicable and the user will not be eligible for other travel         discounts or automated itinerary creation in Concur.

  **If a travel user, use the token to call the** [**Travel Profile API**](/api-reference/travel-profile/01-profile-            resource.html) **.**

  Within this response, is the "HasOpenBooking" parameter; if "true" the user is eligible for TripLink.

  If the user has travel only, they will not receive e-receipts.

2. **Store the user permissions information. (optional)**

  The user's permissions can then be used to determine which scopes and APIs are applicable for updates to an existing booking   and/or e-receipts.

  * The user's permissions can change at any time. It is recommended that the permissions be checked each time the user logs       in to determine whether new functionality is available to the user. *

## <a name="supported_languages"></a>Supported Languages

The following language codes are supported in by Sign in with Concur.

| **Code** | **Name** |
| --- | --- |
| en | English (US) |
