---
title: Direct Connect - Hotel v2 - Reservation
layout: reference
---

# Reservation Message

Message to reserve a hotel.


| SOAPAction | OTA name | Message structure |
|------------|----------|-------------------|
| book       | HotelRes | OTA_HotelResRQ |

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
  <OTA_HotelResRQ xmlns="http://www.opentravel.org/OTA/2003/05" EchoToken="test_request_id" Version="6" PrimaryLangID="de" AltLangID="de">
   <POS>
    <Source ISOCurrency="USD">
    <RequestorID Type="4" ID="s1"></RequestorID>
    </Source>
   </POS>
   <HotelReservations>
    <HotelReservation>
     <RoomStays>
      <RoomStay>
       <RatePlans>
        <RatePlan RatePlanID="ZZZZ1117">
         <Guarantee GuaranteeType="CC/DC/Voucher">
          <GuaranteesAccepted>
           <GuaranteeAccepted>
            <PaymentCard CardCode="VI" ExpireDate="1018">
             <CardType Code="VI">VISA</CardType>
             <CardHolderName>Jane Doe</CardHolderName>
             <Address>
              <StreetNmbr>600 13TH ST NE</StreetNmbr>
              <CityName>WASHINGTON</CityName>
              <PostalCode>20002</PostalCode>
              <StateProv StateCode="DC"></StateProv>
              <CountryName>US</CountryName>
             </Address>
             <CardNumber>
               <PlainText>xxxxxxxxxxxx1234</PlainText>
             </CardNumber>
             <SeriesCode>
               <PlainText>xxx</PlainText>
             </SeriesCode>
            </PaymentCard>
           </GuaranteeAccepted>
          </GuaranteesAccepted>
         </Guarantee>
        </RatePlan>
       </RatePlans>
       <TimeSpan Start="2017-01-26" End="2017-01-27"></TimeSpan>
       <BasicPropertyInfo HotelCode="111222"></BasicPropertyInfo>
       <Comments>
        <Comment>
         <Text TextFormat="PlainText">ROLLAWAY</Text>
        </Comment>
        <Comment>
         <Text TextFormat="PlainText">FOAMPILLOWS</Text>
        </Comment>
       </Comments>
      </RoomStay>
     </RoomStays>
     <ResGuests>
      <ResGuest>
       <Profiles>
        <ProfileInfo>
         <Profile>
          <Customer Gender="Female" BirthDate="1987-05-12">
           <PersonName Language="de">
            <NamePrefix>MRS</NamePrefix>
            <GivenName>JANE</GivenName>
            <Surname>DOE</Surname>
           </PersonName>
           <Telephone PhoneNumber="703-837-6100"></Telephone>
           <Email>jane.doe@example.com</Email>
           <Address>
            <AddressLine>209 Madison St Suite 400</AddressLine>
            <CityName>Alexandria</CityName>
            <PostalCode>22314</PostalCode>
            <StateProv StateCode="VA"></StateProv>
            <CountryName Code="US">USA</CountryName>
           </Address>
           <CitizenCountryName Code="US"></CitizenCountryName>
          </Customer>
          <CompanyInfo>
           <CompanyName>SAP Concur</CompanyName>
          </CompanyInfo>
         </Profile>
        </ProfileInfo>
       </Profiles>
       <GuestCounts>
        <GuestCount Count="1"></GuestCount>
       </GuestCounts>
      </ResGuest>
     </ResGuests>
     <ResGlobalInfo>
      <Memberships>
       <Membership ProgramCode="HotelLoyaltyProgram" AccountID="1111111"></Membership>
     </Memberships>
     </ResGlobalInfo>
    </HotelReservation>
    <TPA_Extensions>
     <NotifyEmails>
      <NotifyEmails>jane.doe@example.com</NotifyEmails>
      <NotifyEmails>a@b.cz</NotifyEmails>
      <NotifyEmails>d@f.cz</NotifyEmails>
     </NotifyEmails>
     <CustomFields>
       <CustomField Name="trip1" Value="value1t"></CustomField>
       <CustomField Name="trip2" Value="value2t"></CustomField>
       <CustomField Name="user1" Value="value1u"></CustomField>
       <CustomField Name="user2"></CustomField>
     </CustomFields>
    </TPA_Extensions>
   </HotelReservations>
  </OTA_HotelResRQ>
 </Body>
</Envelope>
```

**OTA_HotelResRQ**

| Element           | Required | Data Type | Description |
|-------------------|----------|-----------|-------------|
| HotelReservations | Y        | Complex   | A collection of hotel reservations. Concur will only ever send one Hotel Reservation. |


**HotelReservation**

| Element       | Required | Data Type | Description |
|---------------|----------|-----------|-------------|
| RoomStays     | Y        | Complex   | A reference to identify the booking. |
| ResGuests     | Y        | Complex   | List of Guests.  Concur only supports one guest. |
| ResGlobalInfo | N        | Complex   | Contains various information that affects the Reservation as a whole, typically list of reward programs (see Memberships) or itinerary remarks (see Comments). |


**RoomStays**

| Element           | Required | Data Type | Description |
|-------------------|----------|-----------|-------------|
| RatePlans         | Y        | Complex   | Refer to RatePlans in Availability |
| Timespan          | Y        | Complex   | Refer to Time-span in Availability |
| BasicPropertyInfo | Y        | Complex   | See Availability |
| Comments          | N        | Complex   | Comments from the user which are passed on to the hotel. |


**GuestCounts**

| Element       | Required | Data Type | Description |
|---------------|----------|-----------|-------------|
| GuestCounts | Y | Complex| **Please note: this field is currently being discussed with our partners as the plan to remove GuestCounts from OTA_HotelAvailRQ**. A recurring element that identifies the number of guests|


**GuestCount**

| Element       | Required | Data Type | Description |
|---------------|----------|-----------|-------------|
| *Count* | Y | Int | **Please note: this element is planned to be removed**. A recurring element that identifies the number of guests and ages of the guests.The number of guests. Currently hard-coded to '1'. |


**RatePlan**

| Element   | Required | Data Type | Description |
|-----------|----------|-----------|-------------|
| *RatePlanID* | N | StringLength1to64 | A text field used to provide a special  ID code that is associated with the rate and is required in the reservation request in order to obtain the rate. |
| Guarantee | Y        | Complex   | Refer to Guarantee in Availability |


**Guarantee**

| Element            | Required | Data Type         | Description |
|--------------------|----------|-------------------|-------------|
| *GuaranteeType*    | Y        | StringLength1to32 | Refer to GuaranteeType in Availability |
| GuaranteesAccepted | Y        | Complex           | Guarantee and payment information |


**GuaranteesAccepted**

| Element                  | Required | Data Type | Description |
|--------------------------|----------|-----------|-------------|
| *Default*                | N        | Boolean   | This is to indicate that the information in the model is the default (e.g. if PaymentCard information is completed then this would be considered the default if the boolean is true). |
| *NoCardHolderInfoReqInd* | N        | Boolean   | If true, no credit card holder information is required. If false, it is required.” |
| *NameReqInd*             | N        | Boolean   | If true, the credit card holder name is required. If false, it is not required. |
| *AddressReqInd*          | N        | Boolean   | If true, credit card holder address is required. If false, it is not required. |
| *PhoneReqInd*            | N        | Boolean   | If true, credit card holder phone number is required. If false, it is not required. |
| *InterbankNbrReqInd*     | N        | Boolean   | If true, the credit card interbank number is required. If false, it is not required. |
| PaymentCard              | Y        | Complex   | Specific payment card information. |


**PaymentCard**

| Element        | Required | Data Type         | Description |
|----------------|----------|-------------------|-------------|
| *CardCode* | N | UpperCaseAlphaLength1to2 | Issuer code. Example: MC, VI, AX |
| *ExpireDate* | N | MMYYDate | Indicates the ending date. |
| CardType       | Y        | StringLength1to32 | Payment card type. Example: Mastercard |
| CardHolderName | Y        | StringLength1to32 | Card holder name. |
| CardNumber     | Y        | Complex           | The Card Number |
| Address        | Y        | Complex           | Refer to Address in Search |
| SeriesCode | N | Complex | Verification digits. |


**CardNumber**

| Element   | Required | Data Type         | Description |
|-----------|----------|-------------------|-------------|
| PlainText | Y        | StringLength1to32 | The card number.  Only one element of this type is sent.|

**SeriesCode**

| Element   | Required | Data Type         | Description |
|-----------|----------|-------------------|-------------|
| PlainText | Y        | StringLength1to32 | CVV number.  Only one element of this type is sent.|

**Comments**

| Element | Required | Data Type | Description |
|---------|----------|-----------|-------------|
| Comment | Y        | Complex   | Concur will send one Text Element per Comment element. |


**Comment**

| Element | Required | Data Type | Description |
|---------|----------|-----------|-------------|
| Text    | Y        | String    | Text representing the comment. |


**Text**

| Element      | Required | Data Type         | Description |
|--------------|----------|-------------------|-------------|
| *TextFormat* | Y        | StringLength1to32 | Set to "Plain Text" |


**ResGuest**

| Element     | Required | Data Type | Description |
|-------------|----------|-----------|-------------|
| Profiles    | Y        | Complex   | List of Profiles. Concur will only ever send on profile. |


**Profile**

| Element     | Required | Data Type | Description |
|-------------|----------|-----------|-------------|
| Customer    | Y        | Complex   | Element to describer a Customer. |
| CompanyInfo | N        | Complex   | Element to capture the company name. |


**Customer**

| Element            | Required | Data Type         | Description |
|--------------------|----------|-------------------|-------------|
| Gender             | N        | String            | Gender.  Concur will send either, "Male", "Female", "Unknown", "Male_NoShare", "Female_NoShare" |
| BirthDate          | N        | Date              | Customer's birthday. |
| PersonName         | N        | Complex           | Element representing a Customers name |
| Telephone          | N        | Complex           | Element representing a telephone number. |
| Email              | N        | StringLength1to32 | Email address |
| Address            | N        | Complex           | Refer to Address in Search |
| CitizenCountryName | N        | Complex           | ISO3166 representation of the user's Country as defined in their Concur Profile |

**PersonName**

| Element    | Required | Data Type         | Description |
|------------|----------|-------------------|-------------|
| NamePrefix | N        | StringLength1to16 | Salutation of honorific (e.g. Mr., Mrs., Ms., Miss, Dr.) |
| GivenName  | N        | StringLength1to64 | Given name, first name or names. |
| Surname    | Y        | StringLength1to64 | Family name, last name. May also be used for full name if the sending system does not have the ability to separate a full name into its parts, e.g. the surname element may be used to pass the full name. |

Supported NamePrefixes:

NamePrefix     |
|--------------|
| Mr |
|Mrs |
| Ms |
|Miss|
|Dr|
|Rev|
|Sir|
|Lord|
|Lady|
|Dr Mr|
|Dr Mrs|
|Dr Ms|
|Prof Mr|
|Prof Mrs|
|Prof Ms|
|Prof Dr Mr|
|Prof Dr Mrs|
|Prof Dr Ms|

**Telephone**

| Element     | Required | Data Type         | Description |
|-------------|----------|-------------------|-------------|
| PhoneNumber | Y        | StringLength1to32 | A string representing a customer's phone number. |


**CitizenCountryName**

| Element | Required | Data Type         | Description |
|---------|----------|-------------------|-------------|
| Code    | Y        | StringLength1to32 | ISO3166 Country Code |


**CompanyInfo**

| Element     | Required | Data Type         | Description |
|-------------|----------|-------------------|-------------|
| CompanyName | Y        | StringLength1to32 | A string representing a customer's Company. |


**ResGlobalInfo**

**Note:** This structure is used in both request and response. Different elements are used in each of them.

| Element           | Required | Data Type | Description |
|-------------------|----------|-----------|-------------|
| Memberships       | N        | Complex   | (request only) A collection of Memberships, provides a list of reward programs like e.g. loyalty cards. |
| Comments          | N        | Complex   | (response only) A collection of Comments, provides a list of arbitrary reservation comments like e.g. modification code. |
| BasicPropertyInfo | N        | Complex   | See Availability |


**Memberships**

| Element    | Required | Data Type | Description |
|------------|----------|-----------|-------------|
| Membership | N        | Complex   | A recurring element that identifies the type of reservation comment. |


**Membership**

| Element       | Required | Data Type         | Description |
|---------------|----------|-------------------|-------------|
| *ProgramCode* | Y        | StringLength1to32 | The code or name of the reward program (e.g. "HotelLoyaltyProgram"). |
| *AccountID*   | Y        | StringLength1to64 | The account identification number for this particular member in this particular program. |

**Comments**

| Element    | Required | Data Type | Description |
|------------|----------|-----------|-------------|
| Comment    | N        | Complex   | A recurring element that carries reservation comment. Up to 9 Comment elements. |

**Comment**

| Element       | Required | Data Type         | Description |
|---------------|----------|-------------------|-------------|
| *Name*        | N        | StringLength1to64 | Attribute containing comment title. |
| *Text*        | Y        | string            | Comment payload. Up to 3 Text elements in the comment. Up to 200 characters in the Text. |

### TPA Extensions

**TPA_Extensions**

| Element      | Required | Data Type | Description |
|--------------|----------|-----------|-------------|
| NotifyEmails | N        | Complex   | Email address which can be used by the vendor to contact the customer. |
| CustomFIelds | N        | Complex   | A reference to identify the booking |


**NotifyEmails**

| Element      | Required | Data Type         | Description |
|--------------|----------|------------------ |-------------|
| NotifyEmails | Y        | StringLength1to32 | There will be one NotifyEmails element per email address in the configuration. |


**CustomFields**

| Element     | Required | Data Type | Description |
|-------------|----------|-----------|-------------|
| CustomField | Y        | Complex   | A Custom Field in the form of a key-value pair. |


**CustomField**

| Element | Required | Data Type         | Description |
|---------|----------|-------------------|-------------|
| Name    | Y        | StringLength1to32 | Name of the Custom Field |
| Value   | N        | StringLength1to32 | Value of the Custom Field |


---


## Response

The maximum allowed size of OTA_HotelResRS is 150 KB. Any response that exceeds this limit shall be dropped.

```xml
<soap:Envelope xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/">
  <SOAP-ENV:Header xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/"/>
  <soap:Body>
    <OTA_HotelResRS xmlns="http://www.opentravel.org/OTA/2003/05" xmlns:ns2="http://www.concur.com/webservice/auth" ResResponseType="Reserved">
      <Success/>
      <HotelReservations>
        <HotelReservation>
          <UniqueID Type="14" ID="88618333"/>
          <UniqueID Type="1000" ID="12345"/>
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
                      <PenaltyDescription>
                        <Text>test cancel policy 2</Text>
                      </PenaltyDescription>
                      <PenaltyDescription>
                        <Text>test cancel policy 3</Text>
                      </PenaltyDescription>
                    </CancelPenalty>
                    <CancelPenalty>
                      <Deadline AbsoluteDeadline="2017-01-26T18:00"/>
                    </CancelPenalty>
                  </CancelPenalties>
                </RatePlan>
              </RatePlans>
              <RoomRates>
                <RoomRate>
                  <Rates>
                    <Rate>
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
                          <PaymentCard CardCode="MC">
                            <CardType>Mastercard</CardType>
                          </PaymentCard>
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
                      <Total AmountAfterTax="185.00" AmountBeforeTax="85.00" CurrencyCode="EUR"/>
                    </Rate>
                  </Rates>
                </RoomRate>
              </RoomRates>
              <TimeSpan End="2017-01-27" Start="2017-01-26"/>
              <BasicPropertyInfo HotelCode="50709" HotelName="Alexander Plaza">
                <Address>
                  <AddressLine>Rosenstr. 1 </AddressLine>
                  <CityName>Berlin</CityName>
                  <CountryName Code="DEU">Federal Republic of Germany</CountryName>
                  <StateProv StateCode="BE">Berlin Disctrict</StateProv>
                  <PostalCode>BE123</PostalCode>
                </Address>
                <ContactNumbers>
                  <ContactNumber PhoneNumber="1111111112"  PhoneTechType="1"/>
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
                        <GivenName>Jane</GivenName>
                        <Surname>Doe</Surname>
                      </PersonName>
                    </Customer>
                  </Profile>
                </ProfileInfo>
              </Profiles>
            </ResGuest>
          </ResGuests>
          <ResGlobalInfo>
            <Comments>
              <Comment Name="First Comment">
                <Text>First line of first comment</Text>
                <Text>Second line of first comment</Text>
              </Comment>
              <Comment>
                  <Text>Second comment without name</Text>
              </Comment>
            </Comments>
          </ResGlobalInfo>
        </HotelReservation>
      </HotelReservations>
    </OTA_HotelResRS>
  </soap:Body>
</soap:Envelope>
```

**OTA_HotelResRS**

| Element           | Required | Data Type         | Description |
|-------------------|----------|-------------------|-------------|
| *ResResponseType* | Y        | StringLength1to32 | See the list of possible values. |
| HotelReservations | Y        | Complex           | Concur only supports one reservation.  All extra reservations will be ignored. |

**ResResponseType**

| Value           | Description |
|-------------------|----------|
| Cancelled | - |
| Committed | -|
| Unsuccessful | - |
| Reserved | The item is reserved. |

**HotelReservations**

| Element          | Required | Data Type | Description |
|------------------|----------|-----------|-------------|
| HotelReservation | Y        | Complex   | A reference to identify the booking |


**HotelReservation**

| Element   | Required | Data Type         | Description |
|-----------|----------|-------------------|-------------|
| UniqueID  | Y        | Complex           | A reference to identify the booking max occurrence 2|
| RoomStays | Y        | Complex | A collection of details on the Room Stay including Time Span of this Room Stay, and financial information related to the Room Stay, including Guarantee, Deposit and Payment and Cancellation Penalties. |


**UniqueID**

| Element  | Required | Data Type         | Description |
|----------|----------|-------------------|-------------|
| *ID*     | Y        | StringLength1to32 | A reference to identify the booking |
| *Type*   | Y        | StringLength1to32 | A reference to identify the type of UniqueID, see Type - possible values below |


**Type - possible values**

| Value | Description |
|-------|-------------|
| 14    | Reservation ID used in subsequent calls (Itinerary, Cancel) |
| 15    | Cancellation number, displayed in UI, proof of cancellation |
| 40    | Confirmation number for future use (not used now) |
| 1000  | Cancellation/modification code. This one will be rendered on itinerary page and can be used to change the reservation outside of Concur system. Concur-specific OTA extension. |

**RoomStays**

| Element       | Required | Data Type | Description |
|---------------|----------|-----------|-------------|
| RoomStay | Y | Complex| Details on the Room Stay including Time Span of this Room Stay, pointers to Res Guests, Comments and Special Requests pertaining to this particular Room Stay and finally finacial information related to the Room Stay, including Guarantee, Deposit and Payment and Cancellation Penalties.|


**RoomStay**

| Element   | Required | Data Type | Description |
|-----------|----------|-----------|-------------|
| RatePlans | Y        | Complex   |  A collection of Rate Plans associated with a particular Room Stay. |

**RatePlan**

| Element   | Required | Data Type | Description |
|-----------|----------|-----------|-------------|
| CancelPenalties | N        | Complex   |  Collection of cancellation penalties. |
| *CancelPolicyIndicator* | N | Boolean | When true, indicates a cancel policy exits. When false, no cancel policy exists. Typically this indicator is used when details are not being sent. |

**CancelPenalty**

| Element   | Required | Data Type | Description |
|-----------|----------|-----------|-------------|
| PenaltyDescription | N        | Complex   |  Text description of the Penalty in a given language. Max 9 elements. |

**PenaltyDescription**

| Element   | Required | Data Type | Description |
|-----------|----------|-----------|-------------|
| Text | N        | FormattedTextTextType   |  Formatted text content. |
