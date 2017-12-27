---
title: Appendix
layout: reference
---




![./media/image1.png](./images/examples/search.png)

```xml
<?xml version="1.0" encoding="UTF-8"?>
 <Envelope xmlns="http://schemas.xmlsoap.org/soap/envelope/">
  <Header xmlns="http://schemas.xmlsoap.org/soap/envelope/">
   <authentication xmlns="http://www.concur.com/webservice/auth">
    <userid>testLogin123</userid>
    <password>txxxxxxxxxxxx;</password>
   </authentication>
  </Header>
  <Body xmlns="http://schemas.xmlsoap.org/soap/envelope/">
   <OTA_HotelSearchRQ xmlns="http://www.opentravel.org/OTA/2003/05" EchoToken="5ADE581A-8A7C-4DA5-A67B-EED4E58A80E2" Version="4" PrimaryLangID="en" AltLangID="en" MaxResponses="100">
    <POS>
     <Source ISOCurrency="USD"></Source>
    </POS>
    <Criteria>
     <Criterion>
      <Position Latitude="52.559720" Longitude="13.287780"></Position>
      <RefPoint></RefPoint>
      <Radius Distance="5" DistanceMax="30" UnitOfMeasureCode="1"></Radius>
      <StayDateRange Start="2018-02-12" End="2018-02-13"></StayDateRange>
     </Criterion>
    </Criteria>
   </OTA_HotelSearchRQ>
  </Body>
 </Envelope>
 ```