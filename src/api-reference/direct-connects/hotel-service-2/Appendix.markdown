---
title: Direct Connect - Hotel v2 - Appendix
layout: reference
---

# Search

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
   <OTA_HotelSearchRQ xmlns="http://www.opentravel.org/OTA/2003/05"
                      EchoToken="5ADE581A-8A7C-4DA5-A67B-EED4E58A80E2"
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
```xml
<search response goes here> add a complete samples folder so store the huge search response
```


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
   <OTA_HotelAvailRQ xmlns="http://www.opentravel.org/OTA/2003/05"
                     EchoToken="5ADE581A-8A7C-4DA5-A67B-EED4E58A80E2"
                     Version="5" PrimaryLangID="en" AltLangID="en">
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

```xml
<response goes here>
```

### Search results displayed

![./media/image1.png](./images/examples/search_results.png)










# Availability

Click the 'View Rooms' button on any search result will trigger a single-property request

### Request
```xml

```

### Response
```xml

```


### Availability results displayed

![./media/image1.png](./images/examples/17.png)



# Hotel Description

![./media/image1.png](./images/examples/5_link.png)

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
   <OTA_HotelDescriptiveInfoRQ xmlns="http://www.opentravel.org/OTA/2003/05"
                               EchoToken="A78F3641-8674-43F9-B58C-AD928D1A75D9"
                               Version="3" PrimaryLangID="en" AltLangID="en">
    <POS>
     <Source ISOCurrency="USD"></Source>
    </POS>
    <HotelDescriptiveInfos>
     <HotelDescriptiveInfo ChainCode="ZZ" HotelCode="419430"></HotelDescriptiveInfo>
    </HotelDescriptiveInfos>
   </OTA_HotelDescriptiveInfoRQ>
  </Body>
 </Envelope>
```

### Response
``` xml
<?xml version="1.0" encoding="UTF-8"?>
<soap:Envelope xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/">
  <SOAP-ENV:Header xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/"/>
  <soap:Body>
    <OTA_HotelDescriptiveInfoRS xmlns="http://www.opentravel.org/OTA/2003/05"
                                xmlns:ns2="http://www.concur.com/webservice/auth">
      <Success/>
      <HotelDescriptiveContents>
        <HotelDescriptiveContent ChainCode="ZZ" HotelCode="419430" HotelName="Courtyard Prague Airport">
          <HotelInfo>
            <Descriptions>
              <DescriptiveText>Prague (PRG): The Europort building which housed the hotel is located in front of the arrivial and departure halls at Prague-ruzyne Airport. The hotel will have direct access to the airport’s infrastructure and offer connections to both the walkway and transporation routes. The conveniently located Courtyard Prague Airport provides its guests upscale accommodation outside the buzzing city centre. Kept in a cosy elegant design, the comfortable rooms are fitted with coffee and tea maker and nice sitting and working area. The magnificent atrium with its modern structure and nice garden invites to stay and relax. Directly situated at Prague’s international airport, the hotel is about 16 kilometres from the city centre and the historic castle. In the nearby surroundings, guests can enjoy horseback riding, biking or kayaking. Oléo Pazzo Mediterranean Bistro is a contemporary restaurant decorated in warm and coulourful style with a show kitchen and a trendy bar. Other features are a fitness,a business center,meeting rooms.</DescriptiveText>
            </Descriptions>
          </HotelInfo>
          <MultimediaDescriptions>
            <MultimediaDescription>
              <ImageItems>
                <ImageItem>
                  <ImageFormat>
                    <URL>http://iut-foto-origin.hrsstatic.com/foto/3/8/9/8/389886/389886_fi_451616.jpg</URL>
                  </ImageFormat>
                </ImageItem>
                <ImageItem>
                  <ImageFormat>
                    <URL>http://iut-foto-origin.hrsstatic.com/foto/3/8/9/8/389886/389886_u_6302064.jpg</URL>
                  </ImageFormat>
                </ImageItem>
                <ImageItem>
                  <ImageFormat>
                    <URL>http://iut-foto-origin.hrsstatic.com/foto/3/8/9/8/389886/389886_u_451896.jpg</URL>
                  </ImageFormat>
                </ImageItem>
              </ImageItems>
            </MultimediaDescription>
          </MultimediaDescriptions>
          <TPA_Extensions>
            <Description Name="First Description">
                <Text>First line of first description.</Text>
                <Text>Second line of first description.</Text>
            </Description>
            <Description>
                <Text>Second description without name.</Text>
            </Description>
          </TPA_Extensions>
        </HotelDescriptiveContent>
      </HotelDescriptiveContents>
    </OTA_HotelDescriptiveInfoRS>
  </soap:Body>
</soap:Envelope>
```


### Hotel Details displayed

![./media/image1.png](./images/examples/5_1.png)


# Reservation

![./media/image1.png](./images/examples/4.png)
![./media/image1.png](./images/examples/6.png)

![./media/image1.png](./images/examples/6_1.png)
![./media/image1.png](./images/examples/6_2.png)

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
   <OTA_HotelResRQ xmlns="http://www.opentravel.org/OTA/2003/05"
                   EchoToken="6C85DDBD-EB62-444D-B2C3-F59BDF65BE98"
                   Version="6" PrimaryLangID="en" AltLangID="en">
    <POS>
     <Source ISOCurrency="USD"></Source>
    </POS>
    <HotelReservations>
     <HotelReservation>
      <RoomStays>
       <RoomStay>
        <RatePlans>
         <RatePlan RatePlanID="XNFYP4I">
          <Guarantee GuaranteeType="CC/DC/Voucher">
           <GuaranteesAccepted>
            <GuaranteeAccepted>
             <PaymentCard CardCode="VI" ExpireDate="1220">
              <CardType Code="VI">VISA</CardType>
              <CardHolderName>HOTELSERVICEAMADEUS TESTUSERMOCK</CardHolderName>
              <CardNumber>
               <PlainText>xxxxxxxxxxxx4111</PlainText>
              </CardNumber>
             </PaymentCard>
            </GuaranteeAccepted>
           </GuaranteesAccepted>
          </Guarantee>
         </RatePlan>
        </RatePlans>
        <TimeSpan Start="2018-02-12" End="2018-02-13"></TimeSpan>
        <BasicPropertyInfo HotelCode="419430"></BasicPropertyInfo>
       </RoomStay>
      </RoomStays>
      <ResGuests>
       <ResGuest>
        <Profiles>
         <ProfileInfo>
          <Profile>
           <Customer Gender="Unknown">
            <PersonName Language="en">
             <GivenName>HOTELSERVICEAMADEUS</GivenName>
             <Surname>TESTUSERMOCK</Surname>
            </PersonName>
            <Telephone PhoneNumber="3141011001"></Telephone>
            <Email>hrs_hs2_amadeus_mock@concurautm3.com</Email>
            <Address>
             <AddressLine>123 Sesame St.</AddressLine>
             <CityName>Alexandria</CityName>
             <PostalCode>22314</PostalCode>
             <StateProv></StateProv>
             <CountryName Code="US">USA</CountryName>
            </Address>
            <CitizenCountryName Code="US"></CitizenCountryName>
           </Customer>
           <CompanyInfo>
            <CompanyName>CONCURTECH</CompanyName>
           </CompanyInfo>
          </Profile>
         </ProfileInfo>
        </Profiles>
        <GuestCounts>
         <GuestCount Count="1"></GuestCount>
        </GuestCounts>
       </ResGuest>
      </ResGuests>
     </HotelReservation>
    </HotelReservations>
   </OTA_HotelResRQ>
  </Body>
 </Envelope>
```


### Response
```xml
<?xml version="1.0" encoding="UTF-8"?>
<soap:Envelope xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/">
  <SOAP-ENV:Header xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/"/>
  <soap:Body>
    <OTA_HotelResRS xmlns="http://www.opentravel.org/OTA/2003/05"
                    xmlns:ns2="http://www.concur.com/webservice/auth" ResResponseType="Reserved">
      <Success/>
      <HotelReservations>
        <HotelReservation>
          <UniqueID ID="88618333"/>
          <RoomStays>
            <RoomStay>
              <RatePlans>
                <RatePlan RatePlanID="EZ57LL7">
                  <CancelPenalties CancelPolicyIndicator="true">
                    <CancelPenalty>
                      <PenaltyDescription>
                        <Text>test cancel policy 1</Text>
                      </PenaltyDescription>
                    </CancelPenalty>
                    <CancelPenalty>
                      <Deadline AbsoluteDeadline="2018-02-22T18:00"/>
                    </CancelPenalty>
                  </CancelPenalties>
                </RatePlan>
              </RatePlans>
              <RoomRates>
                <RoomRate>
                  <Rates>
                    <Rate RoomPricingType="Per stay">
                      <PaymentPolicies>
                        <GuaranteePayment>
                          <AcceptedPayments>
                            <AcceptedPayment>
                              <PaymentCard CardCode="VI"/>
                            </AcceptedPayment>
                          </AcceptedPayments>
                        </GuaranteePayment>
                        <GuaranteePayment>
                          <AcceptedPayments>
                            <AcceptedPayment>
                              <PaymentCard CardCode="MC"/>
                            </AcceptedPayment>
                          </AcceptedPayments>
                        </GuaranteePayment>
                        <GuaranteePayment>
                          <AcceptedPayments>
                            <AcceptedPayment>
                              <PaymentCard CardCode="CA"/>
                            </AcceptedPayment>
                          </AcceptedPayments>
                        </GuaranteePayment>
                        <GuaranteePayment>
                          <AcceptedPayments>
                            <AcceptedPayment>
                              <PaymentCard CardCode="IK"/>
                            </AcceptedPayment>
                          </AcceptedPayments>
                        </GuaranteePayment>
                        <GuaranteePayment>
                          <AcceptedPayments>
                            <AcceptedPayment>
                              <PaymentCard CardCode="AX"/>
                            </AcceptedPayment>
                          </AcceptedPayments>
                        </GuaranteePayment>
                      </PaymentPolicies>
                      <Total AmountAfterTax="85.00" AmountBeforeTax="85.00" CurrencyCode="EUR"/>
                    </Rate>
                  </Rates>
                </RoomRate>
              </RoomRates>
              <TimeSpan End="2018-02-23" Start="2018-02-22"/>
              <BasicPropertyInfo HotelCode="50709" HotelName="Alexander Plaza">
                <Address>
                  <AddressLine>Rosenstr. 1</AddressLine>
                  <CityName>Berlin</CityName>
                  <CountryName Code="DEU">Federal Republic of Germany</CountryName>
                  <StateProv StateCode="BE">Berlin disctrict</StateProv>
                  <PostalCode>BE123</PostalCode>
                </Address>
                <ContactNumbers>
                  <ContactNumber PhoneNumber="3024001722"/>
                </ContactNumbers>
              </BasicPropertyInfo>
            </RoomStay>
          </RoomStays>
          <ResGuests>
            <ResGuest>
              <Profiles>
                <ProfileInfo>
                  <Profile>
                    <Customer>
                      <PersonName>
                        <GivenName>TESTER</GivenName>
                        <Surname>Testovic</Surname>
                      </PersonName>
                    </Customer>
                  </Profile>
                </ProfileInfo>
              </Profiles>
            </ResGuest>
          </ResGuests>
          <ResGlobalInfo>
            <Comments>
              <Comment Name="Comment 1">
                <Text>First line of Comment 1.</Text>
                <Text>Second line of Comment 1.</Text>
              </Comment>
              <Comment>
                <Text>First line of Comment 2 without name.</Text>
              </Comment>
            </Comments>
          </ResGlobalInfo>
        </HotelReservation>
      </HotelReservations>
    </OTA_HotelResRS>
  </soap:Body>
</soap:Envelope>
```


# Read

![./media/image1.png](./images/examples/7.png)
![./media/image1.png](./images/examples/8.png)
![./media/image1.png](./images/examples/9.png)

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
   <OTA_ReadRQ xmlns="http://www.opentravel.org/OTA/2003/05"
               EchoToken="4E1B8BF4-ACBD-4709-9FCC-B59EB2550086"
               Version="5.002" PrimaryLangID="en" AltLangID="en">
    <POS>
     <Source ISOCurrency="USD"></Source>
    </POS>
    <UniqueID Type="14" ID="88618333"></UniqueID>
   </OTA_ReadRQ>
  </Body>
 </Envelope>
```


### Response
```xml
<?xml version="1.0" encoding="UTF-8"?>
<soap:Envelope xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/">
  <SOAP-ENV:Header xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/"/>
  <soap:Body>
    <OTA_HotelResRS xmlns="http://www.opentravel.org/OTA/2003/05"
                    xmlns:ns2="http://www.concur.com/webservice/auth"
                    ResResponseType="Reserved">
      <Success/>
      <HotelReservations>
        <HotelReservation>
          <UniqueID ID="88621190"/>
          <RoomStays>
            <RoomStay>
              <RatePlans>
                <RatePlan RatePlanID="P4PGI5Q">
                  <CancelPenalties CancelPolicyIndicator="true">
                    <CancelPenalty>
                      <PenaltyDescription>
                        <Text>test cancel policy 1</Text>
                      </PenaltyDescription>
                    </CancelPenalty>
                    <CancelPenalty>
                      <PenaltyDescription>
                        <Text>test cancel policy 2</Text>
                      </PenaltyDescription>
                      <PenaltyDescription>
                        <Text>test cancel policy 3</Text>
                      </PenaltyDescription>
                    </CancelPenalty>
                    <CancelPenalty>
                      <Deadline AbsoluteDeadline="2018-02-22T18:00"/>
                    </CancelPenalty>
                  </CancelPenalties>
                </RatePlan>
              </RatePlans>
              <RoomRates>
                <RoomRate>
                  <Rates>
                    <Rate RoomPricingType="Per stay">
                      <PaymentPolicies>
                        <GuaranteePayment>
                          <AcceptedPayments>
                            <AcceptedPayment>
                              <PaymentCard CardCode="VI"/>
                            </AcceptedPayment>
                          </AcceptedPayments>
                        </GuaranteePayment>
                        <GuaranteePayment>
                          <AcceptedPayments>
                            <AcceptedPayment>
                              <PaymentCard CardCode="MC"/>
                            </AcceptedPayment>
                          </AcceptedPayments>
                        </GuaranteePayment>
                        <GuaranteePayment>
                          <AcceptedPayments>
                            <AcceptedPayment>
                              <PaymentCard CardCode="CA"/>
                            </AcceptedPayment>
                          </AcceptedPayments>
                        </GuaranteePayment>
                        <GuaranteePayment>
                          <AcceptedPayments>
                            <AcceptedPayment>
                              <PaymentCard CardCode="IK"/>
                            </AcceptedPayment>
                          </AcceptedPayments>
                        </GuaranteePayment>
                        <GuaranteePayment>
                          <AcceptedPayments>
                            <AcceptedPayment>
                              <PaymentCard CardCode="AX"/>
                            </AcceptedPayment>
                          </AcceptedPayments>
                        </GuaranteePayment>
                      </PaymentPolicies>
                      <Total AmountAfterTax="208.95" AmountBeforeTax="208.95" CurrencyCode="EUR"/>
                    </Rate>
                  </Rates>
                </RoomRate>
              </RoomRates>
              <TimeSpan End="2018-02-23" Start="2018-02-22"/>
              <BasicPropertyInfo ChainCode="1609" HotelCode="10517" HotelName="Radisson Blu Hotel">
                <Address>
                  <AddressLine>Karl-Liebknecht-Str. 3 </AddressLine>
                  <CityName>Berlin</CityName>
                  <CountryName Code="DEU">Federal Republic of Germany</CountryName>
                  <StateProv StateCode="BE">Berlin disctrict</StateProv>
                  <PostalCode>BE123</PostalCode>
                </Address>
                <ContactNumbers>
                  <ContactNumber PhoneNumber="30238280"/>
                </ContactNumbers>
              </BasicPropertyInfo>
            </RoomStay>
          </RoomStays>
          <ResGuests>
            <ResGuest>
              <Profiles>
                <ProfileInfo>
                  <Profile>
                    <Customer>
                      <PersonName>
                        <GivenName>TESTER</GivenName>
                        <Surname>Testovic</Surname>
                      </PersonName>
                    </Customer>
                  </Profile>
                </ProfileInfo>
              </Profiles>
            </ResGuest>
          </ResGuests>
          <ResGlobalInfo>
            <Comments>
              <Comment Name="Comment 1">
                <Text>First line of Comment 1.</Text>
                <Text>Second line of Comment 1.</Text>
              </Comment>
              <Comment>
                <Text>First line of Comment 2 without name.</Text>
              </Comment>
            </Comments>
          </ResGlobalInfo>
        </HotelReservation>
      </HotelReservations>
    </OTA_HotelResRS>
  </soap:Body>
</soap:Envelope>
```
### Itinerary displayed

![./media/image1.png](./images/examples/10_1.png)
![./media/image1.png](./images/examples/10_2.png)

# Cancel

![./media/image1.png](./images/examples/12.png)
![./media/image1.png](./images/examples/14.png)

### Request

```xml
 <Envelope xmlns="http://schemas.xmlsoap.org/soap/envelope/">
  <Header xmlns="http://schemas.xmlsoap.org/soap/envelope/">
   <authentication xmlns="http://www.concur.com/webservice/auth">
    <userid>testLogin123</userid>
    <password>txxxxxxxxxxxx;</password>
   </authentication>
  </Header>
  <Body xmlns="http://schemas.xmlsoap.org/soap/envelope/">
   <OTA_CancelRQ xmlns="http://www.opentravel.org/OTA/2003/05" CancelType="Cancel"
                 EchoToken="2186EB84-23D9-4977-B8A5-B5083C8DE228"
                 Version="3" PrimaryLangID="en" AltLangID="en">
    <POS>
     <Source ISOCurrency="USD"></Source>
    </POS>
    <UniqueID Type="14" ID="88618333"></UniqueID>
   </OTA_CancelRQ>
  </Body>
 </Envelope>
```


### Response
```xml
<?xml version="1.0" encoding="UTF-8"?>
<soap:Envelope xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/">
  <SOAP-ENV:Header xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/"/>
  <soap:Body>
    <OTA_CancelRS xmlns="http://www.opentravel.org/OTA/2003/05"
                  xmlns:ns2="http://www.concur.com/webservice/auth"
                  Status="Cancelled">
      <Success/>
      <UniqueID ID="88618333" Type="14"/>
      <UniqueID ID="27607" Type="15"/>
    </OTA_CancelRS>
  </soap:Body>
</soap:Envelope>
```

![./media/image1.png](./images/examples/15.png)
![./media/image1.png](./images/examples/16.png)
