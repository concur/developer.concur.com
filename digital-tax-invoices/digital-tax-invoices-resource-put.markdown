---
title: Digital Tax Invoices Resource
layout: operation
---




This resource supports the following PUT action:

##  Put Digital Tax Invoice Status Request

####  XML Example Request of Valid Invoice

    PUT https://www.concursolutions.com/api/v3.0/expense/DigitalTaxInvoices/3er$maDk$iw209eW9wo3WPekw9 HTTP/1.1
    Authorization: OAuth {access token}
    ...

    <DigitalTaxInvoice>
        <Status>VALID</Status>
    </DigitalTaxInvoice>

####  XML Example Request of Invalid Invoice

    PUT https://www.concursolutions.com/api/v3.0/expense/DigitalTaxInvoices/3er$maDk$iw209eW9wo3WPekw9 HTTP/1.1
    Authorization: OAuth {access token}
    ...

    <DigitalTaxInvoice>
        <Comment>This certificate number is not valid</Comment>
        <Status>INVLD</Status>
    </DigitalTaxInvoice>

####   

##  Put Digital Tax Invoice Status Response

####  XML Example of Successful Response

    200 OK

