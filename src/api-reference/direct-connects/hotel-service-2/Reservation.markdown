---
title: Direct Connect - Hotel v2 - Reservation
layout: reference
---

# Reservation Message

Message to reserve a hotel.

|SOAPAction|OTA Name|Message Structure|
|------------|----------|-------------|
|book|HotelRes|OTA_HotelResRQ|

---

* [Request](#request)
  * [Schema](#req-schema)
    * [Hotel Reservation](#req-hotel-reservation)
    * [Room Stays](#req-room-stays)
    * [Guest Counts](#guest-counts)
    * [Guest Count](#guest-count)
    * [Rate Plan](#req-rate-plan)
    * [Guarantee](#guarantee)
    * [Guarantees Accepted](#guarantees-accepted)
    * [Payment Card](#payment-card)
    * [Series Code](#series-code)
    * [Comments](#comments-one)
    * [Comment](#comment-one)
    * [Text](#text)
    * [Res Guest](#res-guest)
    * [Profile](#profile)
    * [Customer](#customer)
    * [Person Name](#person-name)
    * [Telephone](#telephone)
    * [Citizen Country Name](#citizen-country-name)
    * [Company Info](#company-info)
    * [Res Global Info](#res-global-info)
    * [Memberships](#memberships)
    * [Membership](#membership)
    * [Comments](#comments-two)
    * [Comment](#comment-two)
    * [TPA Extensions](#tpa-extensions)
    * [Notify Emails](#notify-emails)
    * [Custom Fields](#custom-fields)
    * [Custom Field](#custom-field)
* [Response](#response)
  * [Schema](#res-schema)
    * [Res Response Type](#res-response-type)
    * [Hotel Reservations](#hotel-reservations)
    * [Hotel Reservation](#res-hotel-reservation)
    * [Unique ID](#unique-id)
    * [Type](#type)
    * [Room Stays](#res-room-stays)
    * [Room Stay](#room-stay)
    * [Rate Plan](#res-rate-plan)
    * [Cancel Penalty](#cancel-penalty)
    * [Penalty Description](#penalty-description)

## <a name="request"></a>Request

```xml
<Envelope xmlns="http://schemas.xmlsoap.org/soap/envelope/">
  <Header xmlns="http://schemas.xmlsoap.org/soap/envelope/">
    <authentication xmlns="http://www.concur.com/webservice/auth">
      <userid>user</userid>
      <password>password</password>
    </authentication>
  </Header>
  <Body xmlns="http://schemas.xmlsoap.org/soap/envelope/">
    <OTA_HotelResRQ xmlns="http://www.opentravel.org/OTA/2003/05" EchoToken="test_request_id" Version="6"
                    PrimaryLangID="de" AltLangID="de">
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
          <TPA_Extensions>
            <SearchSessionToken>5EA6C45E55104704E4</SearchSessionToken>
          </TPA_Extensions>
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

#### <a name="req-schema"></a>OTA_HotelResRQ

|Name|Type|Description|
|-------------------|-----------|-------------|
|`HotelReservations`|`complex`|**Required** A collection of hotel reservations. SAP Concur will only send one (1) hotel reservation.|

#### <a name="req-hotel-reservation"></a>HotelReservation

|Name|Type|Description|
|---------------|-----------|-------------|
|`RoomStays`|`complex`|**Required** A reference to identify the booking.|
|`ResGuests`|`complex`|**Required** List of guests. Supported value: `1`|
|`ResGlobalInfo`|`complex`|Contains information that affects the reservation as a whole, typically a list of reward programs (see `Memberships`) or itinerary remarks (see `Comments`).|
|`TPA_Extensions/SearchSessionToken`|`stringLength1to128`|The token obtained from [Search](/api-reference/direct-connects/hotel-service-2/Search.html) response that links the Search results to [Availability](/api-reference/direct-connects/hotel-service-2/Availability.html) and [Reservation](#request) requests.|

#### <a name="req-room-stays"></a>RoomStays

|Name|Type|Description|
|-------------------|-----------|-------------|
|`RatePlans`|`complex`|**Required** Refer to `RatePlans` in [Availability](/api-reference/direct-connects/hotel-service-2/Availability.html).|
|`Timespan`|`complex`|**Required** Refer to `Time-span` in [Availability](/api-reference/direct-connects/hotel-service-2/Availability.html).|
|`BasicPropertyInfo`|`complex`|**Required** See [Availability](/api-reference/direct-connects/hotel-service-2/Availability.html).|
|`Comments`|`complex`| Comments from the user which are passed on to the hotel.|

#### <a name="guest-counts"></a>GuestCounts

|Name|Type|Description|
|---------------|-----------|-------------|
|`GuestCounts`|`complex`|**Required** **Please note: this field is currently being discussed with our partners as the plan to remove `GuestCounts` from `OTA_HotelAvailRQ`**. A recurring element that identifies the number of guests.|

#### <a name="guest-count"></a>GuestCount

|Name|Type|Description|
|---------------|-----------|-------------|
|`Count`|`integer`|**Required** **Please note: this element is planned to be removed**. A recurring element that identifies the number of guests and ages of the guests. The number of guests. Supported value: `1`|

#### <a name="req-rate-plan"></a>RatePlan

|Name|Type|Description|
|-----------|-----------|-------------|
|`RatePlanID`|`stringLength1to64`|A text field used to provide a special ID code that is associated with the rate and is required in the reservation request in order to obtain the rate.|
|`Guarantee`|`complex`|**Required** Refer to `Guarantee` in [Availability](/api-reference/direct-connects/hotel-service-2/Availability.html).|

#### <a name="guarantee"></a>Guarantee

|Name|Type|Description|
|--------------------|-------------------|-------------|
|`GuaranteeType`|`stringLength1to32`|**Required** Refer to `GuaranteeType` in [Availability](/api-reference/direct-connects/hotel-service-2/Availability.html).|
|`GuaranteesAccepted`|`complex`|**Required** Guarantee and payment information.|

#### <a name="guarantees-accepted"></a>GuaranteesAccepted

|Name|Type|Description|
|--------------------------|-----------|-------------|
|`Default`|`boolean`|This is to indicate that the information in the model is the default (e.g. if `PaymentCard` information is completed then this would be considered the default if the boolean is `true`).|
|`NoCardHolderInfoReqInd`|`boolean`|If `true`, no credit card holder information is required. If `false`, it is required.|
|`NameReqInd`|`boolean`|If `true`, the credit card holder name is required. If `false`, it is not required.|
|`AddressReqInd`|`boolean`|If `true`, credit card holder address is required. If `false`, it is not required. |
|`PhoneReqInd`|`boolean`|If `true`, credit card holder phone number is required. If `false`, it is not required.|
|`InterbankNbrReqInd`|`boolean`|If `true`, the credit card interbank number is required. If `false`, it is not required.|
|`PaymentCard`|`complex`|**Required** Specific payment card information.|

#### <a name="payment-card"></a>PaymentCard

|Name|Type|Description|
|----------------|-------------------|-------------|
|`CardCode`|`upperCaseAlphaLength1to2`|Issuer code. Example: `MC`, `VI`, `AX`.|
|`ExpireDate`|`MMYYDate`|Indicates the ending date.|
|`CardType`|`stringLength1to32`|**Required** Payment card type. Example: `MasterCard`|
|`CardHolderName`|`stringLength1to32`|**Required** Card holder name.|
|`CardNumber`|`complex`|**Required** The card number.|
|`Address`|`complex`|**Required** Refer to `Address` in [Search](/api-reference/direct-connects/hotel-service-2/Search.html).|
|`SeriesCode`|`complex`|Verification digits.|

#### <a name="series-code"></a>SeriesCode

|Name|Type|Description|
|-----------|-------------------|-------------|
|`PlainText`|`stringLength1to32`|**Required** CVV number. Only one (1) element of this type is sent.|

#### <a name="comments-one"></a>Comments

|Name|Type|Description|
|---------|-----------|-------------|
|`Comment`|`complex`|**Required** SAP Concur will send one Text element per Comment element.|

#### <a name="comment-one"></a>Comment

|Name|Type|Description|
|---------|-----------|-------------|
|`Text`|`string`|**Required** Text representing the comment.|

#### <a name="text"></a>Text

|Name|Type| Description |
|--------------|-------------------|-------------|
|`TextFormat`|`stringLength1to32`|**Required** Supported value: `Plain text`|

#### <a name="res-guest"></a>ResGuest

|Name|Type|Description|
|-------------|-----------|-------------|
|`Profiles`|`complex`|**Required** List of Profiles. SAP Concur will only send one (1) profile.|

#### <a name="profile"></a>Profile

|Name|Type|Description|
|-------------|-----------|-------------|
|`Customer`|`complex`|**Required** Element to describer a customer.|
|`CompanyInfo`|`complex`|Element to capture the company name.|

#### <a name="customer"></a>Customer

|Name|Type|Description|
|--------------------|-------------------|-------------|
|`Gender`|`string`| Gender. Supported values: `Male`, `Female`, `Unknown`, `Male_NoShare`, `Female_NoShare`|
|`BirthDate`|`date`|Customer's birthday.|
|`PersonName`|`complex`|Element representing a customer's name.|
|`Telephone`|`complex`|Element representing a telephone number.|
|`Email`|`stringLength1to32`|Email address.|
|`Address`|`complex`|Refer to `Address` in [Search](/api-reference/direct-connects/hotel-service-2/Search.html).|
|`CitizenCountryName`|`complex`|ISO 3166 representation of the user's country as defined in their SAP Concur Profile.|

#### <a name="person-name"></a>PersonName

|Name|Type|Description|
|-------------|-------------------|-------------|
|`NamePrefix`|`stringLength1to16`|Salutation of honorific. Supported values: `Mr`, `Mrs`, `Ms`, `Miss`, `Dr`, `Rev`, `Sir`, `Lord`, `Lady`, `Dr Mr`, `Dr Mrs`, `Dr Ms`, `Prof Mr`, `Prof Mrs`, `Prof Ms`, `Prof Dr Mr`, `Prof Dr Mrs`, `Prof Dr Ms`|
|`GivenName`|`stringLength1to64`|Given name, first name or names.|
|`Surname`|`stringLength1to64`|**Required** Family name, last name. May also be used for full name if the sending system does not have the ability to separate a full name into its parts. Example: the surname element may be used to pass the full name.|

#### <a name="telephone"></a>Telephone

|Name|Type|Description|
|-------------|-------------------|-------------|
|`PhoneNumber`|`stringLength1to32`|**Required** A string representing a customer's phone number.|

#### <a name="citizen-country-name"></a>CitizenCountryName

|Name|Type|Description|
|---------|-------------------|-------------|
|`Code`|`stringLength1to32`|**Required** ISO 3166 country code.|

#### <a name="company-info"></a>CompanyInfo

|Name|Type|Description|
|-------------|-------------------|-------------|
|`CompanyName`|`stringLength1to32`|**Required** A string representing a customer's company.|

#### <a name="res-global-info"></a>ResGlobalInfo

**Note:** This structure is used in both request and response. Different elements are used in each of them.

|Name|Type|Description|
|-------------------|-----------|-------------|
|`Memberships`|`complex`|**Request Only** A collection of memberships. Provides a list of reward programs. Example: loyalty cards |
|`Comments`|`complex`|**Response Only** A collection of comments. Provides a list of arbitrary reservation comments. Example: modification code|
|`BasicPropertyInfo`|`complex`|See [Availability](/api-reference/direct-connects/hotel-service-2/Availability.html).|

#### <a name="memberships"></a>Memberships

|Name|Type|Description|
|------------|-----------|-------------|
|`Membership`|`complex`|A recurring element that identifies the type of reservation comment.|

#### <a name="membership"></a>Membership

|Name|Type|Description|
|---------------|----------|-------------|
|`ProgramCode`|`stringLength1to32`|**Required** The code or name of the reward program. Example: `HotelLoyaltyProgram`|
|`AccountID`|`stringLength1to64`|**Required** The account identification number for this particular member in this particular program.|

#### <a name="comments-two"></a>Comments

|Name|Type|Description|
|-----------|-----------|-------------|
|`Comment`|`complex`|A recurring element that carries reservation comment. Maximum elements: `9`|

#### <a name="comment-two"></a>Comment

|Name|Type|Description|
|---------------|---------|-------------|
|`Name`|`stringLength1to64`|Attribute containing comment title.|
|`Text`|`string`|**Required** Comment payload. Up to 3 Text elements in the comment. Up to 200 characters in the text.|

#### <a name="tpa-extensions"></a>TPA Extensions

|Name|Type|Description|
|--------------|---------|-------------|
|`NotifyEmails`|`complex`|Email address which can be used by the vendor to contact the customer.|
|`CustomFields`|`complex`|A reference to identify the booking.|

#### <a name="notify-emails"></a>NotifyEmails

|Name|Type|Description|
|--------------|--------- |-------------|
|`NotifyEmails`|`stringLength1to32`|**Required** There will be one (1) `NotifyEmails` element per email address in the configuration.|

#### <a name="custom-fields"></a>CustomFields

|Name|Type|Description|
|-------------|-------|-------------|
|`CustomField`|`complex`|**Required** A custom field in the form of a key-value pair.|

#### <a name="custom-field"></a>CustomField

|Name|Type|Description|
|---------|------------|-------------|
|`Name`|`stringLength1to32`|**Required** Name of the custom field.|
|`Value`|`stringLength1to32`|Value of the custom field.|

---

## <a name="response"></a>Response

The maximum allowed size of `OTA_HotelResRS` is 150 KB. Any response that exceeds this limit shall be dropped.

```xml
<soap:Envelope xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/">
  <SOAP-ENV:Header xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/"/>
  <soap:Body>
    <OTA_HotelResRS xmlns="http://www.opentravel.org/OTA/2003/05" Version="6" ResResponseType="Reserved">
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
                              <PaymentCard>
                                <CardType>VISA</CardType>
                              </PaymentCard>
                            </AcceptedPayment>
                          </AcceptedPayments>
                        </GuaranteePayment>
                        <GuaranteePayment>
                          <AcceptedPayments>
                            <AcceptedPayment>
                              <PaymentCard>
                                <CardType>Mastercard</CardType>
                              </PaymentCard>
                            </AcceptedPayment>
                          </AcceptedPayments>
                        </GuaranteePayment>
                        <GuaranteePayment>
                          <AcceptedPayments>
                            <AcceptedPayment>
                              <PaymentCard>
                                <CardType>AmericanExpress</CardType>
                              </PaymentCard>
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
                  <AddressLine>Rosenstr. 1</AddressLine>
                  <CityName>Berlin</CityName>
                  <CountryName Code="DEU">Federal Republic of Germany</CountryName>
                  <StateProv StateCode="BE">Berlin District</StateProv>
                  <PostalCode>BE123</PostalCode>
                </Address>
                <ContactNumbers>
                  <ContactNumber PhoneNumber="1111111112" PhoneTechType="1"/>
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

#### <a name="res-schema"></a>OTA_HotelResRS

|Name|Type|Description|
|---------|------------|-------------|
|`ResResponseType`|`stringLength1to32`|**Required** See the list of possible values.|
|`HotelReservations`|`complex`|**Required** SAP Concur only supports one (1) reservation. All extra reservations will be ignored.|

#### <a name="res-response-type"></a>ResResponseType

|Value|Description|
|-----------|----------|
|`Cancelled`|-|
|`Committed`|-|
|`Unsuccessful`|-|
|`Reserved`|The item is reserved.|

#### <a name="hotel-reservations"></a>HotelReservations

|Name|Type|Description|
|---------|------------|-------------|
|`HotelReservation`|`complex`|**Required** A reference to identify the booking.|

#### <a name="hotel-reservation"></a>HotelReservation

|Name|Type|Description|
|---------|------------|-------------|
|`UniqueID`|`complex`|**Required** A reference to identify the booking. Maximum occurrences: `2`|
|`RoomStays`|`complex`|**Required** A collection of details on the room stay including time span of this room stay, and financial information related to the room stay, including guarantee, deposit, payment, and cancellation penalties. |

#### <a name="unique-id"></a>UniqueID

|Name|Type|Description|
|---------|------------|-------------|
|`ID`|`stringLength1to32`|**Required** A reference to identify the booking.|
|`Type`|`stringLength1to32`|**Required** A reference to identify the type of `UniqueID`. See Type.|


#### <a name="type"></a>Type - Possible Values

|Value|Description|
|-------|-------------|
|`14`|Reservation ID used in subsequent calls (`Itinerary`, `Cancel`).|
|`15`|Cancellation number, displayed in UI, proof of cancellation. |
|`40`|Confirmation number for future use (not used now).|
|`1000`|Cancellation/modification code. This will be rendered on itinerary page and can be used to change the reservation outside of the SAP Concur system. SAP Concur-specific OTA extension. |

#### <a name="room-stays"></a>RoomStays

|Name|Type|Description|
|---------|------------|-------------|
|`RoomStay`|`complex`|**Required** Details on the room stay including time span of this room stay, pointers to res guests, comments and special requests pertaining to this particular room stay. Financial information related to the room stay, including guarantee, deposit, payment, and cancellation penalties.|

#### <a name="room-stay"></a>RoomStay

|Name|Type|Description|
|---------|------------|-------------|
|`RatePlans`|`complex`|**Required** A collection of rate plans associated with a particular room stay.|

#### <a name="rate-plan"></a>RatePlan

|Name|Type|Description|
|---------|------------|-------------|
|`CancelPenalties`|`complex`|Collection of cancellation penalties.|
|`CancelPolicyIndicator`|`boolean`|If `true`, indicates a cancel policy exists. If `false`, no cancel policy exists. Typically this indicator is used when details are not being sent.|

#### <a name="cancel-penalty"></a>CancelPenalty

|Name|Type|Description|
|---------|------------|-------------|
|`PenaltyDescription`|`complex`|Text description of the penalty in a given language. Maximum elements: `9`|

#### <a name="penalty-description"></a>PenaltyDescription

|Name|Type|Description|
|---------|------------|-------------|
|`Text`|`formattedTextTextType`|Formatted text content.|
