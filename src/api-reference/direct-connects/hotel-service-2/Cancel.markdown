---
title: Direct Connect - Hotel v2 - Cancel
layout: reference
---

# Cancel

Message used to indicate to the hotel supplier that a given reservation should be cancelled.

|SOAPAction|OTA Name|Message Structure|
|------------|----------|-------------------|
|cancel|Cancel|OTA_CancelRQ|

---

## Request

```xml
<?xml version="1.0" encoding="UTF-8"?>
<Envelope xmlns="http://schemas.xmlsoap.org/soap/envelope/">
  <Header xmlns="http://schemas.xmlsoap.org/soap/envelope/">
    <authentication xmlns="http://www.concur.com/webservice/auth">
      <userid>user</userid>
      <password>password</password>
    </authentication>
  </Header>
  <Body xmlns="http://schemas.xmlsoap.org/soap/envelope/">
    <OTA_CancelRQ xmlns="http://www.opentravel.org/OTA/2003/05" EchoToken="test_request_id" Version="3"
                  PrimaryLangID="en" AltLangID="en" CancelType="Cancel">
      <POS>
        <Source ISOCurrency="USD"></Source>
      </POS>
      <UniqueID Type="14" ID="11112222"></UniqueID>
    </OTA_CancelRQ>
  </Body>
</Envelope>
```


**OTA_CancelRQ**

|Name|Type|Description|
|---------|------------|-------------|
|`UniqueID`|`complex|**Required** Element to hold the type and the ID of the reservation to be cancelled.|

**UniqueID**

|Name|Type|Description|
|---------|------------|-------------|
|`Type`|`string`|**Required** `UniqueID` with Type=`14` identifies the reservation to cancel.|
|`ID`|`stringLength1to32`|**Required** A unique identifying value assigned by the creating system.|

---

## Response

The maximum allowed size of OTA_CancelRS is 150 KB. Any response that exceeds this limit shall be dropped.

```xml
<?xml version="1.0" encoding="UTF-8"?>
<soap:Envelope xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/">
  <SOAP-ENV:Header xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/"/>
  <soap:Body>
    <OTA_CancelRS xmlns="http://www.opentravel.org/OTA/2003/05" Version="3" Status="Cancelled">
      <Success/>
      <UniqueID ID="11112222" Type="14"/>
      <UniqueID ID="12122" Type="15"/>
    </OTA_CancelRS>
  </soap:Body>
</soap:Envelope>
```

**OTA_CancelRS**

|Name|Type|Description|
|---------|------------|-------------|
|`Status`|`string`|**Required** Supported values: `Cancelled`, `Unsuccessful`|
|`Success`|`successType|An element that is not intended to contain any data. The mere presence of a success element within the response message indicates that the incoming request message was processed successfully.|
|`UniqueID`|`string`|**Required** See `UniqueID` above. SAP Concur expects two (2) `UniqueID`s to be returned in the response. The first with an `Type` of `14` containing the original reservation number, and the second `Type` of `15` containing a confirmation number. Both elements are mandatory.|
