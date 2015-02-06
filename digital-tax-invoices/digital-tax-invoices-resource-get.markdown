---
title: Digital Tax Invoices Resource-GET
layout: operation
---

# Get List of Digital Tax Invoices Request

## Description
This resource supports the following GET actions:

* Get List of Digital Tax Invoices  

## Request

## Response

## Examples

### XML Example Request for all Invoices  

#### Request  
    GET <https://www.concursolutions.com/api/v3.0/expense/DigitalTaxInvoices/> HTTP/1.1  
    Authorization: OAuth {access token}
    ...

#### Response  
    200 OK
    Content-Type: application/xml

    <DigitalTaxInvoices>
        <Items>
            <DigitalTaxInvoice>
                 <ID>3er$maDk$iw209eW9wo3WPekw9</ID>
                 <URI>https://www.concursolutions.com/api/v3.0/expense/DigitalTaxInvoices/3er$maDk$iw209eW9wo3WPekw9</URI>
            </DigitalTaxInvoice>
            <DigitalTaxInvoice>
                <ID>K9d$sl2Q92$foU7Dwso12J73</ID>
                <URI>https://www.concursolutions.com/api/v3.0/expense/DigitalTaxInvoices/K9d$sl2Q92$foU7Dwso12J73</URI>
            </DigitalTaxInvoice>
        </Items>
        <NextPage>2</NextPage>
    </DigitalTaxInvoices>



### XML Example Request with Offset

#### Request  
    GET <https://www.concursolutions.com/api/v3.0/expense/DigitalTaxInvoices/?offset=2> HTTP/1.1  
    Authorization: OAuth {access token}
    ...

#### Response  
    200 OK
    Content-Type: application/xml

    <DigitalTaxInvoices>
        <Items>
            <DigitalTaxInvoice>
                 <ID>3er$maDk$iw209eW9wo3WPekw9</ID>
                 <URI>https://www.concursolutions.com/api/v3.0/expense/DigitalTaxInvoices/3er$maDk$iw209eW9wo3WPekw9</URI>
            </DigitalTaxInvoice>
            <DigitalTaxInvoice>
                <ID>K9d$sl2Q92$foU7Dwso12J73</ID>
                <URI>https://www.concursolutions.com/api/v3.0/expense/DigitalTaxInvoices/K9d$sl2Q92$foU7Dwso12J73</URI>
            </DigitalTaxInvoice>
        </Items>
        <NextPage>2</NextPage>
    </DigitalTaxInvoices>


### XML Example Request with Last Modified Date (UTC)

####Request  
    GET <https://www.concursolutions.com/api/v3.0/expense/DigitalTaxInvoices/?modifiedafter=2013-10-24T01:00:00> HTTP/1.1  
    Authorization: OAuth {access token}
    ...

#### Response  
    200 OK
    Content-Type: application/xml

    <DigitalTaxInvoices>
        <Items>
            <DigitalTaxInvoice>
                 <ID>3er$maDk$iw209eW9wo3WPekw9</ID>
                 <URI>https://www.concursolutions.com/api/v3.0/expense/DigitalTaxInvoices/3er$maDk$iw209eW9wo3WPekw9</URI>
            </DigitalTaxInvoice>
            <DigitalTaxInvoice>
                <ID>K9d$sl2Q92$foU7Dwso12J73</ID>
                <URI>https://www.concursolutions.com/api/v3.0/expense/DigitalTaxInvoices/K9d$sl2Q92$foU7Dwso12J73</URI>
            </DigitalTaxInvoice>
        </Items>
        <NextPage>2</NextPage>
    </DigitalTaxInvoices>


### XML Example Request with Limit

####Request  
    GET <https://www.concursolutions.com/api/v3.0/expense/DigitalTaxInvoices/?limit=50HTTP/1.1>
    Authorization: OAuth {access token}
    ...

#### Response  
    200 OK
    Content-Type: application/xml

    <DigitalTaxInvoices>
        <Items>
            <DigitalTaxInvoice>
                <ID>3er$maDk$iw209eW9wo3WPekw9</ID>
                <URI>https://www.concursolutions.com/api/v3.0/expense/DigitalTaxInvoices/3er$maDk$iw209eW9wo3WPekw9</URI>
            </DigitalTaxInvoice>
            <DigitalTaxInvoice>
                <ID>K9d$sl2Q92$foU7Dwso12J73</ID>
                <URI>https://www.concursolutions.com/api/v3.0/expense/DigitalTaxInvoices/K9d$sl2Q92$foU7Dwso12J73</URI>
            </DigitalTaxInvoice>
        </Items>
        <NextPage>2</NextPage>
    </DigitalTaxInvoices>

# Get Digital Tax Invoice Details

## Description
This resource supports the following GET actions:

* Get Digital Tax Invoice Details

## Request

## Response

## Examples


###  Get Digital Tax Invoice Details

####  Request

    GET https://www.concursolutions.com/api/v3.0/expense/DigitalTaxInvoices/3er$maDk$iw209eW9wo3WPekw9 HTTP/1.1
    Authorization: OAuth {access token}
    ...

###  Response

    200 OK
    Content-Type: application/xml

    <DigitalTaxInvoice>
        <AccountID>0987654321</AccountID>
        <ReceiptData>
            ....Tax Invoice Fields will appear here...
        </ReceiptData>
    </DigitalTaxInvoice>

 

