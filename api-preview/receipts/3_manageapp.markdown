---
title: Manage Your Client Application
layout: reference
---

# Receipts

## Manage Your Client Application

### Get a Client ID and Client Secret

A client ID and client secret is needed for every client application to call the Authentication API and get a JSON Web Token (JWT). A JWT is required to access the Receipts API. Email the following information to pdspe@concur.com and mention that you are requesting a new client ID and client secret to interact with Receipts version 4.0.

Fill in required information and email following to pdspe@concur.com

1. name: `<name of partner-app>`
2. scopes: `<list of scopes required>` (Refer to the [Required Scopes](#get-required-scopes) section)
3. allowed_grants: `<grants required>` (Refer to the Grant Types section of Authentication API)
4. redirect_uri: `<uri to redirect end user to during OAuth flow>`
5. company_id: `<concur companyId>`
6. environment: `prod`

As a best practice, your application should request the most restrictive scope that allows your application to function properly. For example, if your application is only meant to post receipts, you should request `receipts.writeonly` rather than `receipts.write`. In order to make testing easier, you may want to request a more open scope initially for your sandbox.

### Get Required Scopes

Receipts API supports the following scopes.

Scope | Description
------|------------
`receipts.writeonly` | Provides write only access to Receipts. Usually assigned to partners who provide services to our end users and want to create a receipt for the end user in Concur.
`receipts.read` | Provides read only access to Receipts. Usually assigned to partners who perform some kind of processing on the receipts created for end users.
`receipts.write` | Provides both write and read access to Receipts. As of now, cannot be assigned to partners.  

In addition to one of the above scopes, also request for the `openid` scope. Having this scope will return an `id_token` when you make a call to the Authentication API for a JWT. The decoded `id_token` has the User UUID required for posting a receipt or getting a receipt for a specific user.


