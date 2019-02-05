---
title: Oauth2 Migration Best Practices
layout: reference
---

* [Old World Authentication](#old-authentication)
* [New World Authentication](#new-authentication)
  * [Oauth2](#oauth2)
  * [Getting Started](#getting-started)
  * [Token Management](#token-management)
  * [Old Auth v.s. New Auth Diagram](#old-v-new-diagram)

## <a name="old-authentication"></a>Old World Authentication

  - The old world authentication is a hybrid oauth2 implementation which has an endpoint that looks like this `/net2/oauth2/`
  - Client applications are identified by a `ConsumerKey` and `Secret` pair. Sometimes these are referred to as `client_id` and `client_secret`.
  - Access Tokens in the old world have a 12 months expiry period and refresh tokens live forever. This is typically not a good security practice and goes against the Oauth2 standards.
  - Tokens that are being used by clients today are issued for WSADMINs, meaning all tokens have administrative access.

## <a name="new-authentication"></a>New World Authentication

### <a name="oauth2"></a>1. Oauth2
  - SAP Concur's new Oauth2 implementation follows the established Oauth2 Authorization Framework RFC : https://tools.ietf.org/html/rfc6749
  - This new service has an endpoint of `/oauth2/v0/token`
  - Unlike the old world auth, access tokens have a 1 hour expiry and refresh tokens have a 6 months expiry. This is in accordance to the best practice of using short lived tokens.
  - This would mean that clients would need to perform token management.

### <a name="getting-started"></a>2. Getting Started
  - Getting clientID / clientSecret
    - Work with SAP Concur's implementation team to obtain a new oauth2 `client_id` and `client_secret` and to define the scope of client's application.
    - Process will take no longer than 48 hours.
    - Implementation Team will respond with new `client_id`, `client_secret`, company's `refreshToken` and `expiry date`.
    - Client stores and configures application with this info.
  - Client applications should store the following tokens and data in their application.
    - `Refresh Token`: This token can change although most of the time this value is the same. Client applications should treat all returned refresh tokens as new values and overwrite the stored values with the new values you get from the response.
    - `Refresh Token Expiry`: This date should be checked by a daily script and ensure that a refresh_grant is made to keep the refresh token alive indefinitely. If company policy dictates that the token should be allowed to expire, then you can skip this step. Once a refresh token has expired, clients would need to contact SAP Concur's Implementation team to get a new company token.

### <a name="token-management"></a>3. Token Management
  - Calling APIs with `accessTokens`
    - All APIs within SAP Concur require the calling application present an `accessToken` in the Header using the "Bearer" keyword.
    - Example:
      ```
        curl -k -v -H "Accept: application/json" \
        -H "Authorization: Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImtpZCI6IjE0NTU2MTQzNDYifQ.eyJhdWQiOiIqIiwic3ViIjoiaHR0cDovL21zcGNzcHJzcnFhLmNvbmN1ci5jb25jdXJ0ZWNoLm9yZzozMDAzL3Byb2ZpbGUtc2VydmljZS92MS91c2Vycy83NjAwOUFEMy1GNzdCLTREOTgtQTIxQS01NTNDOUM5MTc5RjAiLCJpc3MiOiJodHRwczovL2NvbmN1ci5jb20iLCJleHAiOjE0NzM4OTUxMjksImxlZ2FjeV9hcHBsaWNhdGlvbl9pZCI6MTUwMDA2MzY1OSwidXNlclVSSSI6Imh0dHA6Ly9tc3Bjc3Byc3JxYS5jb25jdXIuY29uY3VydGVjaC5vcmc6MzAwMy9wcm9maWxlLXNlcnZpY2UvdjEvdXNlcnMvNzYwMDlBRDMtRjc3Qi00RDk4LUEyMUEtNTUzQzlDOTE3OUYwIiwidXNlcnV1aWQiOiI3NjAwOUFEMy1GNzdCLTREOTgtQTIxQS01NTNDOUM5MTc5RjAiLCJuYmYiOjE0NzM4OTE1MjksImh0dHBzOi8vYXBpLmNvbmN1cnNvbHV0aW9ucy5jb20vYXBwIjoiaHR0cHM6Ly9hcGkuY29uY3Vyc29sdXRpb25zLmNvbS9hcHAtbWdtdC92MC9hcHBzL2UwMTBlMjVkLWI0Y2UtNGNlMy1hN2U0LWI2NzBjYjFhZGNiMCIsImh0dHBzOi8vYXBpLmNvbmN1cnNvbHV0aW9ucy5jb20vc2NvcGVzIjpbIkNDQVJEIiwiQ09NUEQiLCJVU0VSIiwidXNlcl9yZWFkIiwiRU1FUkciLCJKT0JMT0ciLCJFUkVDUFQiLCJJVElORVIiLCJGSVNWQyIsIkxJU1QiLCJQQVNTViIsIkNPTkZJRyIsIkZPUCIsIkdIT1NUIiwiQ09OUkVRIiwiVFJJUElUIiwiQ09NUEFOWSIsInByb2ZpbGUiLCJFVlMiLCJlbWFpbCIsIlRSVlBUUyIsIkFUVEVORCIsIklOVlBPIiwiTk9USUYiLCJUUlZSRVEiLCJTVVBTVkMiLCJFWFBSUFQiLCJhZGRyZXNzIiwiRVhUUkNUIiwiUEFZQkFUIiwid3Jvbmdfc2NvcGUiLCJJTlZQTVQiLCJJTUFHRSIsIlRBWElOViIsIlJDVElNRyIsIlVOVVRYIiwiVFdTIiwiVE1DU1AiLCJCQU5LIiwiSU5WVkVOIiwib3BlbmlkIiwiTVRORyIsIklOU0dIVCIsIlRSVlBSRiIsIklOVlRWIiwiTUVESUMiLCJUU0FJIl0sImlhdCI6MTQ3Mzg5MTUyOX0.QHY4Mc5A3J981-HDv7KUdgS4tUI-qnmQAxwe9J6DHxuMmYSoGEYZ0dsnLnqc2lO2iVJK6Pg3EBZTArq8_vzV2FK7tA4-IT1eCEHo1e-RWZyWLnR7P56SvZozXpY73daovSH7572HrUm21FXcyLmdaLZyo2LfFcChaghbSCjm1Jg1duH-pLPUW4d89-_pdakmyxfV3GCm2N_XQXoRhNYAAiZcG8UfxEn3TpMHJ96F2n6keJanT_Sn2Sek_sH2EmeeCpg5-jDe0fvLvr1-gY5t0ifq8QBKWHSUUIrGbQvseD6CGzfyiFUqVypN2lukfWACR-26otN50c0OzY6kgY06RA" \
        https://us.api.concursolutions.com/profile/v1/me
      ```

    - More documentation here: <https://developer.concur.com/api-reference/authentication/getting-started.html>

  - Refreshing expired `accessTokens`
    - Since `accessTokens` have a one hour expiry, clients would need to get a new `accessToken` before any API call is made.
    - In order to obtain a new `accessToken`, clients should call Oauth2 using the `refresh_grant` and providing the old `refreshToken` and other additional fields.
    - In the error handling code, clients need to handle `accessToken` expiry errors. If the `accessToken` is expired in the middle of processing, the following should happen:

        - Code should call Oauth2's `refresh_grant` to get a new `accessToken`
        - Overwrite the existing `refreshToken` with the new one.
        - Update `expiry date` for `refreshToken`
        - Retry the API call.

    - More details about refreshing tokens here: <https://developer.concur.com/api-reference/authentication/apidoc.html#refresh_token>

  - Handling errors
    - There are a few error codes that client applications should be aware of.
    - `403 Forbidden`: Requesting for tokens for users who cannot be requested for. Usually for companies that are not authorized by their administrators.
    - The bulk of errors will be returned as 400 errors and the response contains a `code` and `description`. Client applications should look for these values to determine what to do next.




    | Code | Desc               | Comment  |
    |------|--------------------|----------|
    |  05  | Incorrect credentials. | clientID / secret not correct, or authtoken/password not correct |
    |  10  | Account is disabled | |
    |  14  | Account is locked | |
    |  16  | User lives elsewhere | There will be a geolocation field in the response to this error message. Use this as the base URL and retry the call.|
    |  54  | Invalid Scope | requested scope exceeds what is permitted. |

    - for a full list, review this doc: <https://developer.concur.com/api-reference/authentication/apidoc.html#response_codes>

### <a name="old-v-new-diagram"></a>4. Old auth v.s. new auth diagram
![old v.s. new](./oldNewAuthComparion.png)
