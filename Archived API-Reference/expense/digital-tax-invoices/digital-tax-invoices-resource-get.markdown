---
title: Get digital tax invoices
layout: reference
---


This resource supports the following GET actions:

* Get List of Digital Tax Invoices 
* Get Digital Tax Invoice Details

## Get List of Digital Tax Invoices

### Description

Get a list of digital tax invoices.

### Get List of Digital Tax Invoices Request

#### Request parameters

* **offset**={*offset*}: The page offset. Optional.
* **limit**={*limit*}: The number of records to return. Required. Default value: 25.
* **modifiedafter**={*YYYY-MM-DDThh:mm:ss*}: A modification date for the queue record; this parameter can be used to limit the results of the GET request to the queue items that have been added since the last time the validation company queried the queue. 

#### Headers

##### Authorization header

Required. Authorization header with an OAuth token for a valid Concur user. The OAuth consumer must have one of the following user roles in Concur: Web Services Administrator for Professional, or Can Administer for Standard. These roles allow the user to manage data for the entire company.

##### Accept header

* application/xml
* application/json

## Get List of Digital Tax Invoices Response

The request will return a **DigitalTaxInvoices** parent element containing an **Items** child element. The **Items** element contains a **DigitalTaxInvoice** child element for each invoice.

### Examples

#### XML example request for all invoices  

```
    GET <https://www.concursolutions.com/api/v3.0/expense/DigitalTaxInvoices/> HTTP/1.1  
    Authorization: OAuth {access token}
    ...
```

#### XML example request with offset

```
    GET <https://www.concursolutions.com/api/v3.0/expense/DigitalTaxInvoices/?offset=2> HTTP/1.1  
    Authorization: OAuth {access token}
    ...
```

#### XML example request with last modified date (UTC)

```
    GET <https://www.concursolutions.com/api/v3.0/expense/DigitalTaxInvoices/?modifiedafter=2013-10-24T01:00:00> HTTP/1.1  
    Authorization: OAuth {access token}
    ...
```

### XML example request with limit

```
    GET <https://www.concursolutions.com/api/v3.0/expense/DigitalTaxInvoices/?limit=50HTTP/1.1>
    Authorization: OAuth {access token}
    ...
```

#### XML example response  
```
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
```

## Get Digital Tax Invoice Details

### Description
Get the details of a specified digital tax invoice.

### Get Digital Tax Invoice Details Request

#### Request parameters

**id**={*id*}: The ID of the digital tax invoice to retrieve. Required.

#### Headers

##### Authorization header

Required. Authorization header with an OAuth token for a valid Concur user. The OAuth consumer must have one of the following user roles in Concur: Web Services Administrator for Professional, or Can Administer for Standard. These roles allow the user to manage data for the entire company.

##### Accept header

* application/xml
* application/json

### Get Digital Tax Invoice Details Response

The request will return a **DigitalTaxInvoice** parent element containing the following child elements.

| Element | Description |
|-----------------------|-------------------------------------|
| AccountID  |  The unique identifier assigned by the validation partner to the Concur client company that owns the digital tax invoices.  |
| ReceiptData  |  The digital tax invoice data.   |

### Examples

####  XML example request

```
    GET https://www.concursolutions.com/api/v3.0/expense/DigitalTaxInvoices/3er$maDk$iw209eW9wo3WPekw9 HTTP/1.1
    Authorization: OAuth {access token}
    ...
```

####  XML example response

```
    200 OK
    Content-Type: application/xml

    <DigitalTaxInvoice>
        <AccountID>0987654321</AccountID>
        <ReceiptData>
            ....Tax Invoice Fields will appear here...
        </ReceiptData>
    </DigitalTaxInvoice>
```

