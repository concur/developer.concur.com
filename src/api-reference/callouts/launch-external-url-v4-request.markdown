---
title: Launch External URL Request v4
layout: reference
---
{% include prerelease.html %}

* [Launch External URL Request v4](#request)
* [URI](#uri)
* [Definitions](#definitions)
* [Authentication](#auth)
* [URL Example Request](#url-request)
* [Response](#response)

## <a name="request"></a>Launch External URL Request v4

Concur Expense will send a request with the information in an encoded query string when the user clicks the field configured to use the Launch External URL callout.

## <a name="uri"></a>URI

The Launch External URL V4 callout launches the URI for the application connector, which can be in a custom location for each client. The standard location is:

`GET https://{servername}/launchexternalurl/v4/form`

The URI is configured on the Register Application Connector page in Web Services under Administration and Company.

The full URI for the request includes the following query string values:

   `GET https://{servername}/launchexternalurl/v4/form`


     logged_in_user_id={URL-encoded SAP Concur Unique Identifier of interactive user}
     report_owner_user_id={URL-encoded SAP Concur Unique Identifier of report owner}
     report_owner_employee_id={URL-encoded Employee ID (provided by the Client) of report owner}
     company_domain={URL-encoded company domain}
     item_url={URL-encoded URL to Header / Entry / Allocation}
     custom_field_launched_from={Custom Launch External URL form field ID.}
     expense_ids={URL encoded SAP Concur Entry ID (comma separated) available only for Allocation}
     source={HEADER/ENTRY/ALLOCATION}
     is_mobile={Indicates request from mobile UI}
     signature={URL-encoded signature hash}
     nonce={URL-encoded signature hash}
     client_auth_code={URL encoded temporary client authorization code}
     language_code={URL encoded language code of the logged in user}

## <a name="definitions"></a>Definitions

Value | Description  
--- |---
`company_domain`| The client company’s domain.
`logged_in_user_id`  | The SAP Concur Universal Unique Identifier (UUID) of the user that is logged into Concur Expense. For example, this may be an expense delegate instead of the report owner.
`report_owner_user_id` |  The SAP Concur Universal Unique Identifier (UUID) of the report owner.
`report_owner_employee_id` |  The client’s Employee ID of the report owner.
`item_url`|  The URL-encoded URI to access the item where the field appears. This URL can be used to get the details of the header, Expense Entry, or Allocation.
`custom_field_launched_from` |  The custom Launch External URL form field ID.
`expense_ids` | Concur Expense Entry ID, only used for requests from the Expense Allocation level.
`source` |  Context of where the request was made from, either the Expense Report Header, Entry, or Allocation level.
`nonce` |  The URL-encoded GUID used to generate the `signature`.  
`signature` |  The URL-encoded signature hash.
`is_mobile` |  True or false indicating if the end-user is coming from the web-based instance of Concur Expense or mobile. This allows the client to display different UI for mobile devices.
`client_auth_code` |  URL encoded temporary client authorization code. This will allow to call OAuth service to get a refresh and access token to access `item_url`.
`language_code` |  Language code of the logged in user. Length between two to five characters. Default is "en". The code may be xx-XX (e.g., en-GB for British English), where xx indicates the base language and correlates to ISO 639-1, and XX specifies the local dialect, if applicable. SAP Concur supported languages are [here](https://www.concurtraining.com/customers/tech_pubs/SupportedLanguages-client/SupportedLanguages-client.pdf). Information on language identifiers can be found [here](https://www.concurtraining.com/customers/tech_pubs/Docs/_Current/SPC/Spc_Shr/Shr_SPEC_Emp_Imp.pdf) in the appendix (Note: a hyphen is the expected separator for this API for languages with dialects, e.g., en-GB).

## <a name="auth"></a>Authentication

To authenticate the request, the developer of the page in the application connector will need to generate an authentication signature and compare it with the one passed in the query string.

When the request is received by the connector:

1. Obtain the username and password for the application connector. How you do this will be specific to your implementation.

2. Parse and URL decode the following from the query string:
     *	`logged_in_user_id`
     *	`custom_field_launched_from`
     *	`expense_ids`
     *	`source`
     *	`company_domain`
     *	`report_owner_user_id`
     *	`report_owner_employee_id`
     *	`item_url`
     *	`nonce`
     *	`signature` (used to authenticate and verify the request)
     *	`is_mobile`
     *	`client_auth_code`
     *	`language_code`


3. Base64-decode the provided signature.

4. Calculate your own base signature string by appending the values as such:
{company_domain} + {logged_in_user_id} + {report_owner_user_id} + {report_owner_employee_id} +  {item_url} + {connector username} + {connector password} + {nonce}

5. Use HMacSHA1 to generate a signature hash using the base signature string. To generate the key, concatenate the lower-case value for {connector username} and the exact {connector password}. For example, if the connector username is JohnDoe, and the password is password, the key would be johndoepassword.

6. Compare the generated signature hash with the signature hash provided in the request query string. If the signature hashes match, then you know the credentials are valid and the request has not been tampered with.

**NOTES:**

* You can store the nonce to help prevent replay attacks if necessary.
* The order of the query parameters is not important, but the values in the base signature string must be combined in the correct order to generate the signature hash correctly.

## <a name="url-request"></a>URL Example Request
`GET https://{URL to your custom connector and endpoint}`

    ?logged_in_user_id={URL-encoded login ID of interactive user}&
    report_owner_user_id={URL-encoded login ID of the report owner}&
    company_domain={URL-encoded company domain}&
    report_owner_employee_id={URL-encoded client’s Employee ID of the report owner}&
    item_url={URL-encoded url to item}&
    is_mobile={boolean}&
    custom_field_launched_from={URL-encoded custom field identifier}&
    signature={URL-encoded signature hash}&
    nonce={URL-encoded GUID used to generate the signature}&
    client_auth_code={URL-encoded auth code}&
    source={URL-encoded location of the report}&
    expense_ids={URL-encoded expense IDs if the request came from allocations}&
    language_code={URL-encoded language code of the logged in user}

## <a name="response"></a>Response

**Content Body**

The application connector does not directly respond to the Launch External URL request. The application connector completes any updates to Concur Expense using the inbound web services. The Launch External URL functionality monitors the external window, and when the window is closed, it redraws the form the user launched from to display any updated values.
