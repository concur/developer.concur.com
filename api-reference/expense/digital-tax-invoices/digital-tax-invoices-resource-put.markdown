---
title: Update digital tax invoice status
layout: reference
---

## Description
Updates the status of a specified digital tax invoice.

## Request

### Headers

#### Authorization header
The authorization header must contain an OAuth token for a valid Concur user. 

The OAuth consumer must have one of the following user roles in Concur: Web Services Administrator for Professional, or Can Administer for Standard. These roles allow the user to manage data for the entire company.

#### Accept header

* application/xml
* application/json

### Request body

#### Root elements

| Element | Description |
|-----------------------|-------------------------------------|
| content | A status update for the digital tax invoice. Required. The content body contains a **DigitalTaxInvoice** parent element. For information about the child elements of this parent element, see the **DigitalTaxInvoice elements** table below. |
| id | The ID of the digital tax invoice to update. Required.  |

#### DigitalTaxInvoice elements

| Element | Description |
|-----------------------|-------------------------------------|
| Comment | A comment that describes the digital tax invoice status. Maximum length: 2000 characters  |
| Status | A status that describes the digital tax invoice. Format: VALID - Valid; INVLD - Invalid; WARNG - Valid with warnings  |

## Response
The response returns the status of the request.

## Examples

###  XML example request for a valid invoice

```xml
    PUT https://www.concursolutions.com/api/v3.0/expense/DigitalTaxInvoices/3er$maDk$iw209eW9wo3WPekw9 HTTP/1.1
    Authorization: OAuth {access token}
    ...

    <DigitalTaxInvoice>
        <Status>VALID</Status>
    </DigitalTaxInvoice>
```

###  XML example request for an invalid invoice

```xml
    PUT https://www.concursolutions.com/api/v3.0/expense/DigitalTaxInvoices/3er$maDk$iw209eW9wo3WPekw9 HTTP/1.1
    Authorization: OAuth {access token}
    ...

    <DigitalTaxInvoice>
        <Comment>This certificate number is not valid</Comment>
        <Status>INVLD</Status>
    </DigitalTaxInvoice>
```

### XML example response

`200 OK`

