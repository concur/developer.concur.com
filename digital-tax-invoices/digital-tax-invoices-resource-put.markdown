---
title: Digital Tax Invoices Resource
layout: operation
---

## Description
This resource supports the following PUT action:

*  Put Digital Tax Invoice Status Request

## Request

## Response

## Examples

###  XML Example Request of Valid Invoice

#### Request
    PUT https://www.concursolutions.com/api/v3.0/expense/DigitalTaxInvoices/3er$maDk$iw209eW9wo3WPekw9 HTTP/1.1
    Authorization: OAuth {access token}
    ...

    <DigitalTaxInvoice>
        <Status>VALID</Status>
    </DigitalTaxInvoice>

#### Response
    200 OK

###  XML Example Request of Invalid Invoice

#### Request
    PUT https://www.concursolutions.com/api/v3.0/expense/DigitalTaxInvoices/3er$maDk$iw209eW9wo3WPekw9 HTTP/1.1
    Authorization: OAuth {access token}
    ...

    <DigitalTaxInvoice>
        <Comment>This certificate number is not valid</Comment>
        <Status>INVLD</Status>
    </DigitalTaxInvoice>

####  Response

