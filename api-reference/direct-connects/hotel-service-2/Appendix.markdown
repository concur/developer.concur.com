---
title: Appendix
layout: reference
---

#Search

### UI

![./media/image1.png](./images/examples/search.png)

### Request
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
   <OTA_HotelSearchRQ xmlns="http://www.opentravel.org/OTA/2003/05" EchoToken="5ADE581A-8A7C-4DA5-A67B-EED4E58A80E2" 
                      Version="4" PrimaryLangID="en" AltLangID="en" MaxResponses="100">
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
 
### Response



The initial Search request is followed up by an multi-property Availability request.  In the example request below Concur requests the availability for 13 properties.  This could because the initial search only yielded 13 properties or the configuration per vendor is set to request availability for a maximum of 13 properties. 

### Request

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
   <OTA_HotelAvailRQ xmlns="http://www.opentravel.org/OTA/2003/05" EchoToken="5ADE581A-8A7C-4DA5-A67B-EED4E58A80E2" Version="5" PrimaryLangID="en" AltLangID="en">
    <POS>
     <Source ISOCurrency="USD"></Source>
    </POS>
    <AvailRequestSegments>
     <AvailRequestSegment>
      <HotelSearchCriteria>
       <Criterion>
        <HotelRef ChainCode="ZZ" HotelCode="50709"></HotelRef>
       </Criterion>
       <Criterion>
        <HotelRef ChainCode="ZZ" HotelCode="468159"></HotelRef>
       </Criterion>
       <Criterion>
        <HotelRef ChainCode="ZZ" HotelCode="584875"></HotelRef>
       </Criterion>
       <Criterion>
        <HotelRef ChainCode="ZZ" HotelCode="765336"></HotelRef>
       </Criterion>
       <Criterion>
        <HotelRef ChainCode="ZZ" HotelCode="70346"></HotelRef>
       </Criterion>
       <Criterion>
        <HotelRef ChainCode="ZZ" HotelCode="52198"></HotelRef>
       </Criterion>
       <Criterion>
        <HotelRef ChainCode="ZZ" HotelCode="697768"></HotelRef>
       </Criterion>
       <Criterion>
        <HotelRef ChainCode="ZZ" HotelCode="14411"></HotelRef>
       </Criterion>
       <Criterion>
        <HotelRef ChainCode="ZZ" HotelCode="436533"></HotelRef>
       </Criterion>
       <Criterion>
        <HotelRef ChainCode="ZZ" HotelCode="459980"></HotelRef>
       </Criterion>
       <Criterion>
        <HotelRef ChainCode="ZZ" HotelCode="419430"></HotelRef>
       </Criterion>
       <Criterion>
        <HotelRef ChainCode="ZZ" HotelCode="92103"></HotelRef>
       </Criterion>
       <Criterion>
        <HotelRef ChainCode="ZZ" HotelCode="252272"></HotelRef>
       </Criterion>
      </HotelSearchCriteria>
      <StayDateRange Start="2018-02-12" End="2018-02-13"></StayDateRange>
      <RoomStayCandidates>
       <RoomStayCandidate>
        <GuestCounts>
         <GuestCount AgeQualifyingCode="10" Count="1"></GuestCount>
        </GuestCounts>
       </RoomStayCandidate>
      </RoomStayCandidates>
     </AvailRequestSegment>
    </AvailRequestSegments>
   </OTA_HotelAvailRQ>
  </Body>
 </Envelope>
```

### Response










### Search results displayed

![./media/image1.png](./images/examples/search_results.png)










# Availability

Click the 'View Rooms' button on any search result will trigger a single-property request



