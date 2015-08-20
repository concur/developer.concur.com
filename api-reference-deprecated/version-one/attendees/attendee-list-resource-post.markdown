---
title: Attendee List Resource Post
layout: reference
---


This resource supports the following POST actions:

* Post New Attendee List 
* Post Attendee Update List
* Post Attendee Inactivation List 
 
## Post new attendee list

### Description 
Adds one or more attendees. This request creates attendees that are part of the Shared List, which are available to all users. This function requires the attendee resource version 1.0.

### Request 

#### Request parameters 

##### Path parameters 

| Parameter | Required/Optional | Description | 
|-----------|-----------|---------------------| 
| batch | required | The **batch** keyword. | 

##### Query parameters 

| Parameter | Required/Optional | Description | 
|-----------|-----------|---------------------| 
| type | required | The type of batch operation to complete. Should be **create**. |

Example: `https://www.concursolutions.com/api/expense/attendee/v1.0/batch?type=create` 

#### Headers 

##### Authorization header 

Authorization header with OAuth token for valid Concur user. Required.

The OAuth consumer must have one of the following user roles in Concur: Company Administrator or Web Services Administrator for Professional, or Can Administer for Standard.

These roles allow the user to manage data for the entire company.

##### Accept header 
application/xml 

#### Request body 
This function requires as its arguments an **attendee-batch** element containing an **attendee** child element for each attendee to be added. All batch operations allow up to 1000 attendees per batch. If a batch request with over 1000 attendees is sent, only the first 1000 attendees in the batch will be processed.

NOTE: The element names are case-sensitive.

##### attendee elements 

| Element | Required/Optional | Description | 
|-----------|-----------|--------------------| 
|external-id  | required  | This is the unique identifier for the attendee from the external (to Concur) system. Maximum 48 characters. |
| type | required  | The attendee type code. Refer to the [Attendee Type][1] resource documentation. Maximum 8 characters. |
| last-name | required  | The last name of the attendee. Maximum 132 characters. |
| first-name | optional  | The first name of the attendee. Maximum 50 characters. |
| company | optional  | The name of the attendee’s company. Maximum 150 characters. |
| title | optional  | The attendee's title. Maximum 32 characters. |
| total-amount-ytd | optional  | The year to date total amount for the attendee. This sets the starting value for year to date attendee spend amount calculations. |
| currency-code | required, if total-amount-ytd is supplied | Defines the currency to be used when totaling costs for the attendee. Must be a [3-letter ISO 4217 currency code][2] for the currency. Maximum 3 characters. |
| customx | required, if the field is required on the Attendee form  | There can be one element for each custom field that is configured on the attendee form. There are 20 possible custom fields for attendee forms. The numbering matches the Concur custom field numbering and is not necessarily sequential. If the attendee form has custom 1, custom 3 and custom 10 on it, the custom1, custom3, and custom10 elements should be included. Concur Expense is vastly configurable. Use the following process to get the list of custom fields configured for the Attendee form:<br/>1. Use the [Get Available Form Types][3] function to get the code associated with the Attendee Detail View form.<br/>2. Use the [Get Form Data][4] function to get the FormId for the specific attendee form that you wish to use.<br/>3. Use the [Get Form Field Details][5] function to get the list of configured fields (including custom fields) for the attendee form.<br/><br/>Maximum 100 characters. |

### Response 

#### Content-Types 
application/xml 

#### HTTP errors

[Attendee List Errors][6]

#### Response body

This request will return an **attendee-batch-result** parent element.

##### attendee-batch-result elements

| Element | Description | 
|-----------|--------------------| 
| records-succeeded | The number of records processed that were successfully added. |
| records-failed | The number of records processed that were not successfully added. |
| errors | This will contain an **error** parent element for each record failure. |

##### error elements

| Element | Description | 
|-----------|--------------------| 
| code | The code associated with the error. |
| external-id | The external ID of the record that failed. |
| message | The error message. |

## Examples 

### XML example request 

```
xml
POST https://www.concursolutions.com/api/expense/attendee/v1.0/batch?type=create HTTP/1.1
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
```
### XML example of successful response 

```xml
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
```

## Post attendee update list

### Description
Updates existing attendees. This request updates attendees that are part of the Shared List, which are available to all users. This function requires the attendee resource version 1.0.

### Request 

#### Request parameters 

##### Path parameters 

| Parameter | Required/Optional | Description | 
|-----------|-----------|---------------------| 
| batch | required | The **batch** keyword. | 

##### Query parameters 

| Parameter | Required/Optional | Description | 
|-----------|-----------|---------------------| 
| type | required | The type of batch operation to complete. Should be **update**. |

Example: `https://www.concursolutions.com/api/expense/attendee/v1.0/batch?type=update` 

#### Headers 

##### Authorization header 

Authorization header with OAuth token for valid Concur user. Required.

The OAuth consumer must have one of the following user roles in Concur: Company Administrator or Web Services Administrator for Professional, or Can Administer for Standard. These roles allow the user to manage data for the entire company.

##### Accept header 
application/xml 

#### Request body 
This function requires as its arguments an **attendee-batch** element containing an **attendee** child element for each attendee to be updated. All batch operations allow up to 1000 attendees per batch. If a batch request with over 1000 attendees is sent, only the first 1000 attendees in the batch will be processed.

NOTE: The element names are case-sensitive.

##### attendee elements 

| Element | Required/Optional | Description | 
|-----------|-----------|--------------------| 
|external-id  | required  | This is the unique identifier for the attendee from the external (to Concur) system. Maximum 48 characters. |
| type | required  | The attendee type code. Refer to the [Attendee Type][1] resource documentation. Maximum 8 characters. |
| last-name | required  | The last name of the attendee. Maximum 132 characters. |
| first-name | optional  | The first name of the attendee. Maximum 50 characters. |
| company | optional  | The name of the attendee’s company. Maximum 150 characters. |
| title | optional  | The attendee's title. Maximum 32 characters. |
| total-amount-ytd | optional  | The year to date total amount for the attendee. This sets the starting value for year to date attendee spend amount calculations. |
| currency-code | required, if total-amount-ytd is supplied | Defines the currency to be used when totaling costs for the attendee. Must be a [3-letter ISO 4217 currency code][2] for the currency. Maximum 3 characters. |
| customx | required, if the field is required on the Attendee form  | There can be one element for each custom field that is configured on the attendee form. There are 20 possible custom fields for attendee forms. The numbering matches the Concur custom field numbering and is not necessarily sequential. If the attendee form has custom 1, custom 3 and custom 10 on it, the custom1, custom3, and custom10 elements should be included. Concur Expense is vastly configurable. Use the following process to get the list of custom fields configured for the Attendee form:<br/>1. Use the [Get Available Form Types][3] function to get the code associated with the Attendee Detail View form.<br/>2. Use the [Get Form Data][4] function to get the FormId for the specific attendee form that you wish to use.<br/>3. Use the [Get Form Field Details][5] function to get the list of configured fields (including custom fields) for the attendee form.<br/><br/>Maximum 100 characters. |

### Response 

#### Content-Types 
application/xml 

#### HTTP errors

[Attendee List Errors][6]

#### Response body

This request will return an **attendee-batch-result** parent element.

##### attendee-batch-result elements

| Element | Description | 
|-----------|--------------------| 
| records-succeeded | The number of records processed that were successfully updated. |
| records-failed | The number of records processed that were not successfully updated. |
| errors | This will contain an **error** parent element for each record failure. |

##### error elements

| Element | Description | 
|-----------|--------------------| 
| code | The code associated with the error. |
| external-id | The external ID of the record that failed. |
| message | The error message. |

## Examples 

### XML example request 

```
ml
POST https://www.concursolutions.com/api/expense/attendee/v1.0/batch?type=update HTTP/1.1
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
```

### XML example of successful response

```
xml
200 OK
Content-Type: application/xml
...
<attendee-batch-result xmlns="http://www.concursolutions.com/api/expense/attendee/2010/05" xmlns:i="http://www.w3.org/2001/XMLSchema-instance">
    <records-succeeded>1</records-succeeded>
    <records-failed>0</records-failed>
</attendee-batch-result>
```

## Post an attendee inactivation list

### Description 
Uses the update batch type to set existing attendees to Inactive. Attendees will be unavailable for new expense reports but will remain associated with existing expense reports. This function requires the attendee resource version 1.0.

### Request 

#### Request parameters 

##### Path parameters 

| Parameter | Required/Optional | Description | 
|-----------|-----------|---------------------| 
| batch | required | The **batch** keyword. | 

##### Query parameters 

| Parameter | Required/Optional | Description | 
|-----------|-----------|---------------------| 
| type | required | The type of batch operation to complete. Should be **update**. |

Example: `https://www.concursolutions.com/api/expense/attendee/v1.0/batch?type=update` 

#### Headers 

##### Authorization header 

Authorization header with OAuth token for valid Concur user. Required.

The OAuth consumer must have one of the following user roles in Concur: Company Administrator or Web Services Administrator for Professional, or Can Administer for Standard. These roles allow the user to manage data for the entire company.

##### Accept header 
application/xml 

#### Request body 
This function requires as its arguments an **attendee-batch** element containing an **attendee** child element for each attendee to be inactivated. All batch operations allow up to 1000 attendees per batch. If a batch request with over 1000 attendees is sent, only the first 1000 attendees in the batch will be processed.

NOTE: The element names are case-sensitive.

##### attendee elements 

| Element | Required/Optional | Description | 
|-----------|-----------|--------------------| 
|external-id  | required  | This is the unique identifier for the attendee from the external (to Concur) system. Maximum 48 characters. | 
| inactive | required | This is set to true to inactivate the attendee. Format: true/false |

### Response 

#### Content-Types 
application/xml 

#### HTTP errors

[Attendee List Errors][6]

#### Response body

This request will return an **list-item-batch-result** parent element.

##### list-item-batch-result elements

| Element | Description | 
|-----------|--------------------| 
| records-succeeded | The number of records processed that were successfully inactivated. |
| records-failed | The number of records processed that were not successfully inactivated. |
| errors | This will contain an **error** parent element for each record failure. |

##### error elements

| Element | Description | 
|-----------|--------------------| 
| code | The code associated with the error. |
| external-id | The external ID of the record that failed. |
| message | The error message. |

## Examples 

### XML example request 

```
xml
POST https://www.concursolutions.com/api/expense/attendee/v1.0/batch?type=update HTTP/1.1 
Authorization: OAuth {access token} 
Content-Type: application/xml
...
<attendee-batch xmlns="http://www.concursolutions.com/api/expense/attendee/2010/05">
    <attendee>
        <external-id>444543344</external-id>
        <inactive>true</inactive>
    </attendee>
</attendee-batch>
```

### XML example of successful response

```
xml
200 OK
Content-Type: application/xml
...
<attendee-batch-result xmlns="http://www.concursolutions.com/api/expense/attendee/2010/05" xmlns:i="http://www.w3.org/2001/XMLSchema-instance">
    <records-succeeded>1</records-succeeded>
    <records-failed>0</records-failed>
</attendee-batch-result>
```

[1]: https://developer.concur.com/attendee/attendee-type-resource
[2]: http://en.wikipedia.org/wiki/ISO_4217
[3]: https://developer.concur.com/expense-report/expense-form-resource/expense-form-resource-get
[4]: https://developer.concur.com/expense-report/expense-form-resource/expense-form-resource-get
[5]: https://developer.concur.com/expense-report/expense-form-field-resource/expense-form-field-resource-get
[6]: https://developer.concur.com/attendee
