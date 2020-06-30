---
title: Launch External URL Request v4
layout: reference
---
{% include prerelease.html %}

# Request

SAP Concur will send a request with the information in an encoded query string when the user clicks the field configured to use the Launch External URL callout.

## URI

The Launch External URL V4 callout launches the URI for the application connector, which can be in a custom location for each client. The standard location is:

`GET https://{servername}/launchexternalurl/v4/form`

The URI is configured on the Register Application Connector page in Web Services under Administration and Company.

The full URI for the request includes the following query string values:

   `GET https://{servername}/launchexternalurl/v4/form`


           logged_in_user_id= {URL-encoded SAP Concur Unique Identifier of interactive user}
           report_owner_user_id={URL-encoded SAP Concur Unique Identifier of report owner}
           report_owner_employee_id= {URL-encoded Employee ID (provided by the Client) of report owner}
           company_domain={URL-encoded company domain}
           item_url={URL-encoded URL to Header / Entry / Allocation}
           custom_field_launched_from={Custom Launch External URL form field ID.}
           expense_ids={URL encoded SAP Concur Entry ID (comma separated) available only for Allocation}
           source={HEADER/ENTRY/ALLOCATION}
           is_mobile={Indicates request from mobile UI}
           signature={URL-encoded signature hash}
           nonce={URL-encoded signature hash}
           client_auth_code = (URL encoded temporary client authorization code)

         

### Definitions 

| Value        | Description    | 
| :-- |:--| 
| company_domain| The client company’s domain.| 
| logged_in_user_id      | The SAP Concur Universal Unique Identifier (UUID) of the user that is logged into SAP Concur. For example, this may be an expense delegate instead of the report owner.      | 
| report_owner_user_id |  The SAP Concur Universal Unique Identifier (UUID) of the report owner (whom the report is concerning).       | 
| report_owner_employee_id |  The client’s Employee ID of the report owner.      | 
| item_url|  The URL-encoded URI to access the item where the field appears. This URL can be used to get the details of the header, Expense Entry or Allocation.      | 
| custom_field_launched_from |  The custom Launch External URL form field ID.      | 
| expense_ids | The SAP Concur Entry ID, only used for requests from the Expense Allocation level.      | 
| source |  Context of where the request was made from, either the Expense Report Header, Entry, or Allocation level.      | 
| nonce |  The URL-encoded GUID used to generate the signature.      | 
| signature |  The URL-encoded signature hash.      |
| is_mobile |  True or false indicating if the end-user is coming from the web-based instance of SAP Concur or mobile. This allows the client to display different UI for mobile devices.      | 
| client_auth_code |  URL encoded temporary client authorization code. This will allow to call oAuth service to get a refresh and access token to access item_url.      | 

 

# Authentication

To authenticate the request, the developer of the page in the application connector will need to generate an auth signature and compare it with the one passed in the query string.

When the request is received by the connector:

1. Obtain the username and password for the application connector. How you do this will be specific to your implementation.

2. Parse and URL decode the following from the query string:
     1.	logged_in_user_id
     2.	custom_field_launched_from
     3.	expense_ids
     4.	source
     5.	company_domain
     6.	report_owner_user_id
     7.	report_owner_employee_id
     8.	item_url
     9.	nonce
     10.	signature (used to authenticate and verify the request)
     11.	is_mobile
     12.	client_auth_code

3. Base64-decode the provided signature.

4. Calculate your own base signature string by appending the values as such:
{company_domain} + {logged_in_user_id} + {report_owner_user_id} + {report_owner_employee_id} +  {item_url} + {connector username} + {connector password} + {nonce}

5. Use HMacSHA1 to generate a signature hash using the base signature string. To generate the key, concatenate the lower-case value for {connector username} and the exact {connector password}. For example, if the connector username is JohnDoe, and the password is password, the key would be johndoepassword.

6. Compare the generated signature hash with the signature hash provided in the request query string. If the signature hashes match, then you know the credentials are valid and the request has not been tampered with.

**NOTES:**

* You can store the nonce to help prevent replay attacks if necessary.

* The order of the query parameters is not important, but the values in the base signature string must be combined in the correct order to generate the signature hash correctly.

# URL Example Request
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
           expense_ids={URL-encoded expense IDs if the request came from allocations}


## Response

**Content Body**

The application connector does not directly respond to the Launch External URL request. The application connector completes any updates to SAP Concur using the Inbound Web Services. The Launch External URL functionality monitors the external window, and when the window is closed, it redraws the form the user launched from to display any updated values.
