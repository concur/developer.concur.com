---
title: Direct Connect - Hotel v2 - Read Itinerary
layout: reference
---

# Read Itinerary

Returns detailed information about a hotel reservation. Used in a process of booking a hotel to write information to Itinerary. Not invoked by user, but by automatic Concur process. Hotel Supplier should reply with HotelRes RS message in the same format, as for HotelResRQ.

|SOAPAction|OTA Name|Message structure|
|----------------|----------|-------------------|
|Read Itinerary|HotelRes|OTA_ReadRQ|

---

## Request

```xml
<Envelope xmlns="http://schemas.xmlsoap.org/soap/envelope/">
  <Header xmlns="http://schemas.xmlsoap.org/soap/envelope/">
    <authentication xmlns="http://www.concur.com/webservice/auth">
      <userid>user</userid>
      <password>password</password>
    </authentication>
  </Header>
  <Body xmlns="http://schemas.xmlsoap.org/soap/envelope/">
    <OTA_ReadRQ xmlns="http://www.opentravel.org/OTA/2003/05" EchoToken="test_request_id" Version="5.002"
                PrimaryLangID="de" AltLangID="de">
      <POS>
        <Source ISOCurrency="USD">
          <RequestorID Type="1" ID="123"></RequestorID>
        </Source>
      </POS>
      <UniqueID Type="14" ID="88618333"></UniqueID>
    </OTA_ReadRQ>
  </Body>
</Envelope>
```


**OTA_ReadRQ**

|Name|Type|Description|
|---------|------------|-------------|
|`UniqueID`|`complex`|**Required** A reference to identify the booking.|

**UniqueID**

|Name|Type|Description|
|---------|------------|-------------|
|`Type`|`stringLength1to32`|**Required** Supported value: `14`|
|`ID`|`stringLength1to32`|**Required** `UniqueID` from `HotelResRS` is used as reservation ID.|

---

## Response

The response to the Read Itinerary message is the same the response to the Reservation Request, which can be found under Reservation.
