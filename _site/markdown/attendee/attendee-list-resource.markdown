[Source](https://developer.concur.com/attendee/attendee-list-resource/attendee-list-resource-post "Permalink to Attendee List Resource: POST | Developer Portal")

# Attendee List Resource: POST

This resource supports the following POST actions:

##  Post New Attendee List Request

| ----- |
|  Description |  Supported Content Types |
|  Adds one or more attendees. This request creates attendees that are part of the Shared List, which are available to all users. This function requires the attendee resource version 1.0. |   |
|  Query Parameters - Required |  Query Parameters - Optional |
|

* **batch?type**=**{_type_}**  
The type of batch operation to complete. Should be **create**.

Example: <https://www.concursolutions.com/api/expense/attendee/v1.0/batch?type=create>

 |  None |
|  Request Headers - Required |  Request Headers - Optional |
|  Authorization header with OAuth token for valid Concur user.

The OAuth consumer must have one of the following user roles in Concur: Company Administrator or Web Services Administrator for Professional, or Can Administer for Standard.

These roles allow the user to manage data for the entire company.

 |  None |
|  Content Body |   |
|

This function requires as its arguments an **attendee-batch** element containing an **attendee** child element for each attendee to be added. All batch operations allow up to 1000 attendees per batch. If a batch request with over 1000 attendees is sent, only the first 1000 attendees in the batch will be processed.

**NOTE**: The element names are case-sensitive.  
The **attendee** elements can contain the following child elements:

|  Element |  Required (must contain value)? |  Description |
|  external-id |  Y |  This is the unique identifier for the attendee from the external (to Concur) system. Maximum 48 characters. |   |
|  type |  Y |  The attendee type code. Refer to the [Attendee Type][1] resource documentation. Maximum 8 characters. |
|  last-name |  Y |  The last name of the attendee. Maximum 132 characters. |
|  first-name |  N |  The first name of the attendee. Maximum 50 characters. |
|  company |  N |  The name of the attendee's company. Maximum 150 characters. |
|  title |  N |  The attendee's title. Maximum 32 characters. |
|  total-amount-ytd |  N |  The year to date total amount for the attendee. This sets the starting value for year to date attendee spend amount calculations. |
|  currency-code |  Y, if total-amount-ytd is supplied |  Defines the currency to be used when totaling costs for the attendee. Must be a [3-letter ISO 4217 currency code][2] for the currency. Maximum 3 characters. |
|  customx |  Y, if the field is required on the Attendee form |  There can be one element for each custom field that is configured on the attendee form. There are 20 possible custom fields for attendee forms. The numbering matches the Concur custom field numbering and is not necessarily sequential. If the attendee form has custom 1, custom 3 and custom 10 on it, the **custom1**, **custom3**, and **custom10** elements should be included. Concur Expense is vastly configurable. Use the following process to get the list of custom fields configured for the Attendee form:

1. Use the [Get Available Form Types][3] function to get the code associated with the Attendee Detail View form.
2. Use the [Get Form Data][3] function to get the FormId for the specific attendee form that you wish to use.
3. Use the [Get Form Field Details][4] function to get the list of configured fields (including custom fields) for the attendee form.

Maximum 100 characters.

 |

 |

####  XML Example Request

    POST <https://www.concursolutions.com/api/expense/attendee/v1.0/batch?type=create> HTTP/1.1
    Authorization: OAuth {access token}
    Content-Type: application/xml
    ...

    <attendee-batch xmlns="http://www.concursolutions.com/api/expense/attendee/2010/05">
        <attendee>
            <external-id>444543344</external-id>
            <type>BUSGUEST</type>
            <last-name>Miller</last-name>
            <first-name>Chris</first-name>
            <company>Len Dev</company>
            <currency-code>USD</currency-code>
            <custom1>345DERF</custom1>
        </attendee>
        <attendee>
            <external-id>444543345</external-id>
            <type>BUSGUEST</type>
            <last-name>Davis</last-name>
            <first-name>Pat</first-name>
            <company>Len Dev</company>
            <currency-code>USD</currency-code>
            <custom1>345DERK</custom1>
        </attendee>
    </attendee-batch>

##  Post New Attendee List Response

| ----- |
|  HTTP Responses |  Supported Content Types |
|  [HTTP Status Codes][5]

[Attendee List Errors][6]

 |   |
|  Content Body |   |
|  This request will return an **attendee-batch-result** parent element with the following child elements:

|  Element |  Description |
|  records-succeeded |  The number of records processed that were successfully added. |   |
|  records-failed |  The number of records processed that were not successfully added. |
|  errors |  This will contain an **error** parent element for each record failure. The **error** element will contain the following child elements:

|  code |  The code associated with the error. |
|  external-id |  The external ID of the record that failed. |   | |
|  message |  The error message. |

 |

 |

####  XML Example of Response with One Success and One Error

    200 OK
    Content-Type: application/xml
    ...
    <attendee-batch-result xmlns="http://www.concursolutions.com/api/expense/attendee/2010/05" xmlns:i="http://www.w3.org/2001/XMLSchema-instance">
        <records-succeeded>1</records-succeeded>
        <records-failed>1</records-failed>
        <errors>
            <error>
                <code>1202</code> 
                <external-id>444543345</external-id>
                <message>Missing attendee type</message>
            </error>
        </errors>
    </attendee-batch-result>

##  Post Attendee Update List Request

| ----- |
|  Description |  Supported Content Types |
|  Updates existing attendees. This request updates attendees that are part of the Shared List, which are available to all users. This function requires the attendee resource version 1.0. |   |
|  Query Parameters - Required |  Query Parameters - Optional |
|

* **batch?type**=**{_type_}**  
The type of batch operation to complete. Should be **update**.

Example: <https://www.concursolutions.com/api/expense/attendee/v1.0/batch?type=update>

 |  None |
|  Request Headers - Required |  Request Headers - Optional |
|  Authorization header with OAuth token for valid Concur user.

The OAuth consumer must have one of the following user roles in Concur: Company Administrator or Web Services Administrator for Professional, or Can Administer for Standard.

These roles allow the user to manage data for the entire company.

 |  None |
|  Content Body |   |
|  This function requires as its arguments an **attendee-batch** element containing an **attendee** child element for each attendee to be updated. All batch operations allow up to 1000 attendees per batch. If a batch request with over 1000 attendees is sent, only the first 1000 attendees in the batch will be processed.

**NOTE**: The element names are case-sensitive  
The **attendee** element contains the following child elements:

|  Element |  Required (must contain value)? |  Description |
|  external-id |  Y |  This is the unique identifier for the attendee from the external (to Concur) system. Maximum 48 characters. |   |
|  type |  N |  The attendee type code. Refer to the [Attendee Type][1] resource documentation. Maximum 8 characters. |
|  last-name |  N |  The last name of the attendee. Maximum 132 characters. |
|  first-name |  N |  The first name of the attendee. Maximum 50 characters. |
|  company |  N |  The name of the attendee's company. Maximum 150 characters. |
|  title |  N |  The attendee's title. Maximum 32 characters. |
|  total-amount-ytd |  N |  The year to date total amount for the attendee. This sets the starting value for year to date attendee spend amount calculations. |
|  currency-code |  Y |  Defines the currency to be used when totaling costs for the attendee. Must be a [3-letter ISO 4217 currency code][2] for the currency. Maximum 3 characters. |
|  customx |  Y, if the field is required on the Attendee form |  There can be one element for each custom field that is configured on the attendee form. There are 20 possible custom fields for attendee forms. The numbering matches the Concur custom field numbering and is not necessarily sequential. If the attendee form has custom 1, custom 3 and custom 10 on it, the **custom1**, **custom3**, and **custom10** elements should be included. Concur Expense is vastly configurable. Use the following process to get the list of custom fields configured for the Attendee form:

1. Use the [Get Available Form Types][3] function to get the code associated with the Attendee Detail View form.
2. Use the [Get Form Data][3] function to get the FormId for the specific attendee form that you wish to use.
3. Use the [Get Form Field Details][4] function to get the list of configured fields (including custom fields) for the attendee form.

Maximum 100 characters.

 |

 |

####  XML Example Request

    POST <https://www.concursolutions.com/api/expense/attendee/v1.0/batch?type=update> HTTP/1.1
    Authorization: OAuth {access token}
    Content-Type: application/xml
    ...
    <attendee-batch xmlns="http://www.concursolutions.com/api/expense/attendee/2010/05">
        <attendee>
            <external-id>444543344</external-id>
            <type>BUSGUEST</type>
            <last-name>Miller</last-name>
            <first-name>Chris</first-name>
            <company>Len Dev</company>
            <custom1>345DERL</custom1>
            <currency-code>USD</currency-code>
        </attendee>
    </attendee-batch>

##  Post Attendee Update List Response

| ----- |
|  HTTP Responses |  Supported Content Types |
|  [HTTP Status Codes][5]

[Attendee List Errors][6]

 |   |
|  Content Body |   |
|  This request will return an **attendee-batch-result** parent element with the following child elements:

|  Element |  Description |
|  records-succeeded |  The number of records successfully updated. |   |
|  records-failed |  The number of records that were not successfully updated. |
|  errors |  This will contain an **error** parent element for each record failure. The **error** element will contain the following child elements:

|  code |  The code associated with the error. |
|  external-id |  The external ID of the record that failed. |   | |
|  message |  The error message. |

 |

 |

####  XML Example of Successful Response

    200 OK
    Content-Type: application/xml
    ...
    <attendee-batch-result xmlns="http://www.concursolutions.com/api/expense/attendee/2010/05" xmlns:i="http://www.w3.org/2001/XMLSchema-instance">
        <records-succeeded>1</records-succeeded>
        <records-failed>0</records-failed>
    </attendee-batch-result>

##  Post Attendee Inactivation List Request

| ----- |
|  Description |  Supported Content Types |
|  Uses the update batch type to set existing attendees to Inactive. Attendees will be unavailable for new expense reports but will remain associated with existing expense reports. This function requires the attendee resource version 1.0. |   |
|  Query Parameters - Required |  Query Parameters - Optional |
|

* **batch?type**=**{_type_}**  
The type of batch operation to complete. Should be **update**.

Example: https://www.concursolutions.com/api/expense/attendee/v1.0/batch?type=update

 |  None |
|  Request Headers - Required |  Request Headers - Optional |
|  Authorization header with OAuth token for valid Concur user.

The OAuth consumer must have one of the following user roles in Concur: Company Administrator or Web Services Administrator for Professional, or Can Administer for Standard.

These roles allow the user to manage data for the entire company.

 |  None |
|  Content Body |   |
|  This function requires as it's arguments an **attendee-batch** element containing an **attendee** child element for each attendee to be inactivated. All batch operations allow up to 1000 attendees per batch. If a batch request with over 1000 attendees is sent, only the first 1000 attendees in the batch will be processed. The **attendee** elements must contain the following child elements:

|  Element |  Required (must contain value)? |  Description |
|  external-id |  Y |  This is the unique identifier for the attendee from the external (to Concur) system. Maximum 48 characters. |   |
|  inactive |  Y |  This is set to true to inactivate the attendee. Format: true/false |

 |

####  XML Example Request

    POST <https://www.concursolutions.com/api/expense/attendee/v1.0/batch?type=update> HTTP/1.1
    Authorization: OAuth {access token}
    Content-Type: application/xml
    ...
    <attendee-batch xmlns="http://www.concursolutions.com/api/expense/attendee/2010/05">
        <attendee>
            <external-id>444543344</external-id>
            <inactive>true</inactive>
        </attendee>
    </attendee-batch>

##  Post Attendee Inactivation List Response

| ----- |
|  HTTP Responses |  Supported Content Types |
|  [HTTP Status Codes][5]

[Attendee List Errors][6]

 |   |
|  Content Body |   |
|  This request will return a **list-item-batch-result** parent element with the following child elements:

|  Element |  Description |
|  records-succeeded |  The number of records successfully inactivate. |   |
|  records-failed |  The number of records processed that were not successfully inactivated. |
|  errors |  This will contain an **error** parent element for each record failure. The **error** element will contain the following child elements:

|  code |  The code associated with the error. |
|  external-id |  The external ID of the record that failed. |   | |
|  message |  The error message. |

 |

 |

####  XML Example of Successful Response

    200 OK
    Content-Type: application/xml
    ...
    <attendee-batch-result xmlns="http://www.concursolutions.com/api/expense/attendee/2010/05" xmlns:i="http://www.w3.org/2001/XMLSchema-instance">
        <records-succeeded>1</records-succeeded>
        <records-failed>0</records-failed>
    </attendee-batch-result>

Last Modified: 10/24/2013 3:09 PM PDT

[1]: https://developer.concur.com/node/375
[2]: http://en.wikipedia.org/wiki/ISO_4217
[3]: https://developer.concur.com/node/469
[4]: https://developer.concur.com/node/471
[5]: https://developer.concur.com/node/205
[6]: https://developer.concur.com/node/374#responses
