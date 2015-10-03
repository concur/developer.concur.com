---
title: Post a new reservation 
layout: reference
---


## Description

This request is sent when the Travel user creates a reservation for the supplied hotel. The response includes the reservation details.

##  Request

### Encoding
UTF-8

### URI

The Hotel direct connect sends the relevant information to a URI that the travel supplier maintains. The standard location is:

`https://{servername}/concur/hotel/v1/`

The URI is configured by the supplier when registering the partner application. Refer to **Core Concepts** > [Partner Applications](/docs/overviews/partner-applications.html) for more information.

### Headers

#### Accept header
application/xml

#### Authorization header
Authorization header with Basic credentials. Required.

### Request body

The request will contain a **OTA_HotelResRQ** parent element, containing the following attributes:

* xmlns
* EchoToken
* TimeStamp
* PrimaryLangID
* xmlns:xsi
* xsi:schemaLocation
* Version

The **OTA_HotelResRQ** parent element contains the following child elements:

|  Element |  Description |
|----------|---------------------------------------|
|  POS |  The point of sale information. Contains a **Source** child element that specifies the source of the request. For information about **Source** element, see the **Source elements** table below. |
| HotelReservations |  This element has a **HotelReservation** child element. For information about the **HotelReservation** element, see the **HotelReservation elements** table below. |

#### Source elements

The **Source** element has the following attributes:

* ISOCountry: The country code for the Travel user's home country.
* ISOCurrency: The 3-letter ISO 4217 currency code for the Travel user's currency.

The **Source** element contains the following element:

|  Element |  Description |
|----------|---------------------------------------|
|  RequestorID | The corporate identifier. If necessary, multiple **RequestorID** elements can be sent. This element has the following attributes:<br/>**Type**: The type code for the corporate identifier. Should be one of the supported [ID Type Codes][3]. <br/>**ID**: The corporate identifier. <br/>**ID_Context**: The corporate identifier context.|

#### HotelReservation elements

|  Element |  Description |
|----------|---------------------------------------|
|  RoomStays |  This parent element contains the **RoomStay** child element. For information about the **RoomStay** element, see the **RoomStay elements** table below. |
|  ResGuests |  This parent element contains the **ResGuest** element. The **ResGuest** element contains the **Profiles** element. The **Profiles** element contains the **ProfileInfo** element, which contains a **Profile** child element for each guest. The **Profile** child element contains the **Customer** parent element; for information about the **Customer** element, see the **Customer elements** table below. |
|  ResGlobalInfo |  This parent element contains a **Memberships** child element. This element contains a **Membership** child element with the following attributes:<br/>**ProgramCode**: The name of the membership program.<br/>**AccountID**: The account number for the membership program. |
|  TPA_Extensions |  This parent elements contains a **CustomFields** element that contains a **CustomField** element for each custom field in the request. The **CustomField** elements have the following attributes:<br/>**Name**: The name of the custom field.<br/>**Type**: The type of information the custom field contains.<br/><br/>**NOTE**: Some of the regular profile fields can be included in the **CustomField** elements. Their Type = Profile. Supported fields are: Cost Center, Employee ID, Manager, Employee Title, Organization Unit and XML Sync ID. Sharing the profile item has to be enabled for the vendor (vendor requests these values), then it can be enabled in specific travel configurations (customer wants to share the items with the vendor). |

#### RoomStay Request elements

|  Element |  Description |
|----------|---------------------------------------|
|  RoomTypes |  This parent element contains the **RoomType** child element, with the NumberofUnits attribute indicating how many rooms of this type are included in the reservation. |
|  RatePlans |  This parent element contains the **RatePlan** child element, with the RatePlanCode attribute, specifying the rate plan code for the reservation. |
|  GuestCounts |  This parent element contains the **GuestCount** child element, with the following attributes:<br/>**AgeQualifyingCode**: The value for this element should be 10, which represents an Adult guest.<br/>**Count**: The number of guests included in the request. |
|  TimeSpan |  This element has the following attributes:<br/>**Start**: The start date of the reservation.<br/>**End**: The end date of the reservation. |
|  Guarantee |  This parent element contains the **GuaranteesAccepted** element. The **GuaranteesAccepted** element contains the **GuaranteeAccepted** element. This element has the GuaranteeTypeCode attribute, specifying the type of guarantee placed on the reservation. The **GuaranteeAccepted** parent element has a **PaymentCard** child element for card guarantees; for information about this child element, see the **PaymentCard elements** table below. |
|  BasicPropertyInfo |  This element contains the HotelCode attribute. |
|  Comments |  The comments on the reservation. This parent element contains a **Comment** child element for each comment associated with the reservation. |

#### Customer elements

|  Element |  Description |
|----------|---------------------------------------|
|  PersonName |  This element contains the following child elements:<br/>**NamePrefix**: The user's name prefix.<br/>**GivenName**: The user's given name. <br/>**Surname**: The user' surname. |
|  Telephone |  This element has a PhoneNumber attribute containing the guests' phone number. |   | |
|  Email |  The guest's email address. |
|  Address |  This parent element has the following child elements:<br/>**AddressLine**: The first address line.<br/>**CityName**: The address city. <br/>**PostalCode**: The address postal code. <br/>**StateProv**: The address state/province. <br/>**CountryName**: The 3-character address country name. Format: USA |

#### PaymentCard elements

The **PaymentCard** element has the following attributes:

* **CardCode**: The type of card.
* **CardNumber**: The card number.
* **ExpireDate**: The expiration date. Format: MMYY
* **SeriesCode**: The CVV value, it should be queried and passed only if hotel requires it.

The **PaymentCard** element has the following child elements:

|  Element |  Description |
|----------|---------------------------------------|
|  CardHolderName |  The card holder's name. |
|  Address |  The billing address of the card. This parent element contains the following child elements:<br/>**AddressLine**: The first address line.<br/>**CityName**: The address city. <br/>**PostalCode**: The address postal code. <br/>**StateProv**: The address state/province. <br/>**CountryName**: The 2-character address country name. Format: US |

####  XML Example Request

```xml
    POST /concur/hotel/v1 HTTPS/1.1
    Host: example.com
    Authorization: Basic ...
    Content-Type: application/xml
    Content-Length: {length of content body}

    <?xml version="1.0" encoding="UTF-8" ?>
    <OTA_HotelResRQ xmlns="http://www.opentravel.org/OTA/2003/05" EchoToken="ABC123" TimeStamp="2012-01-01T19:00:00" PrimaryLangID="en-us" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="http://www.opentravel.org/OTA/2003/05 ../Schemas/OTA_HotelResRQ.xsd" Version="1">
        <POS>
            <Source ISOCountry="US" ISOCurrency="USD">
                <RequestorID Type="18" ID="7777777" />
            </Source>
        </POS>
        <HotelReservations>
            <HotelReservation>
                <RoomStays>
                    <RoomStay>
                        <RoomTypes>
                            <RoomType NumberOfUnits="1" />
                        </RoomTypes>
                        <RatePlans>
                            <RatePlan RatePlanCode="222222" />
                        </RatePlans>
                        <GuestCounts>
                            <GuestCount AgeQualifyingCode="10" Count="1" />
                        </GuestCounts>
                        <TimeSpan Start="2012-08-15" End="2010-08-17" />
                        <Guarantee>
                            <GuaranteesAccepted>
                                <GuaranteeAccepted GuaranteeTypeCode="CC">
                                    <PaymentCard CardCode="AX" CardNumber="4400000000000" ExpireDate="1215" SeriesCode="1234">
                                        <CardHolderName>CHRIS MILLER</CardHolderName>
                                        <Address>
                                            <AddressLine>18400 NE UNION HILL RD.</AddressLine>
                                            <CityName>REDMOND</CityName>
                                            <PostalCode>98052</PostalCode>
                                            <StateProv>WA</StateProv>
                                            <CountryName>US</CountryName>
                                        </Address>
                                    </PaymentCard>
                                </GuaranteeAccepted>
                            </GuaranteesAccepted>
                        </Guarantee>
                        <BasicPropertyInfo HotelCode="HTL1111" />
                        <Comments>
                            <Comment>NON-SMOKING</Comment>
                            <Comment>not close to the elevator</Comment>
                        </Comments>
                    </RoomStay>
                </RoomStays>
                <ResGuests>
                    <ResGuest>
                        <Profiles>
                            <ProfileInfo>
                                <Profile>
                                    <Customer>
                                        <PersonName>
                                            <NamePrefix>Mr.</NamePrefix>
                                            <GivenName>CHRIS</GivenName>
                                            <Surname>MILLER</Surname>
                                        </PersonName>
                                        <Telephone PhoneNumber="212-555-1212" />
                                        <Email>cmiller@example.com</Email>
                                        <Address>
                                            <AddressLine>18400 NE Union Hill Rd.</AddressLine>
                                            <CityName>Redmond</CityName>
                                            <PostalCode>98052</PostalCode>
                                            <StateProv>WA</StateProv>
                                            <CountryName>USA</CountryName>
                                        </Address>
                                    </Customer>
                                </Profile>
                            </ProfileInfo>
                        </Profiles>
                    </ResGuest>
                </ResGuests>
                <ResGlobalInfo>
                    <Memberships>
                        <Membership ProgramCode="HotelLoyaltyProgram" AccountID="987654321" />
                    </Memberships>
                </ResGlobalInfo>
                <TPA_Extensions>
                    <CustomFields>
                        <CustomField Name="OrgUnit" Type="Profile">Sales</CustomField>
                        <CustomField Name="XmlSyncId" Type="Profile">9293kks8drf6s8f</CustomField>
                    </CustomFields>
                </TPA_Extensions>
            </HotelReservation>
        </HotelReservations>
    </OTA_HotelResRQ>
```

##  Response

The supplier responds to the request by returning the details of the completed booking.

### Content Types
application/xml

### Response body

The response will include a **OTA_HotelResRS** parent element, with the following attributes:

* xmlns
* EchoToken
* ResResponseType: The reservation status.
* TimeStamp
* xmlns:xsi
* xsi:schemaLocation
* Version

The **OTA_HotelResRS** parent element contains the following child elements:  

|  Element |  Required? |  Description |
|----------|---------------|-----------------------------------|
|  Success |  N |  This element is returned if the request was successful. |  
|  HotelReservations |  Y |  This element has a **HotelReservation** child element. For information about the **HotelReservation** element, see the **HotelReservation elements** table below. |

#### HotelReservation elements

|  Element |  Description |
|----------|---------------------------------------|
|  RoomStays |  This parent element contains the **RoomStay** child element. For information about the **RoomStay** element, see the **RoomStay Response elements** table below. |
|  ResGuests |  This parent element contains the **ResGuest** element. For information about the **ResGuest** element, see the **ResGuest Response elements** table below. |
|  ResGlobalInfo |  This parent element contains a **HotelReservationIDs** parent element, which contains a **HotelReservationID** child element with the ResID_Value attribute, identifying the reservation. |
|  TPA_Extensions |  This parent element contains a **VoucherURL** child element. If you need to provide some voucher or certificate of purchase, please publish it on your server and provide the URL in the **VoucherURL** element. |

#### RoomStay Response elements

|  Element |  Description |
|----------|---------------------------------------|
|  RoomTypes |  This parent element contains the **RoomType** child element, with the NumberofUnits attribute indicating how many rooms of this type are included in the reservation. The **RoomType** parent element has the **RoomDescription** child element. The **RoomDescription** element contains the **Text** element describing the room. |
|  RatePlans |  This parent element contains the **RatePlan** child element, with the RatePlanCode attribute, specifying the rate plan code for the reservation. For information about the **RatePlan** element, see the **RatePlan elements** table below. |
|  RoomRates |  This parent element contains the **RoomRate** element, with a RatePlanCode attribute. The **RoomRate** element contains a **Rates** parent element, with a **Rate** child element for each included rate. The **Rate** is for each day, not the total rate. For information about the **Rate** element, see the **Rate elements** table below. |
|  GuestCounts |  This element contains a **GuestCount** element with the following attributes:<br/>**AgeQualifyingCode**: The value for this element should be 10, which represents an Adult guest.<br/>**Count**: The number of guests included in the request. |
|  TimeSpan |  This element has the following attributes:<br/>**Start**: The start date of the reservation.<br/>**End**: The end date of the reservation. |
|  BasicPropertyInfo |  This element contains the HotelCode and HotelName attributes. The **BasicPropertyInfo** parent element has an **Address** child element. For information about the **Address** element, see the **Address elements** table below. |

#### RatePlan elements

|  Element |  Description |
|----------|---------------------------------------|
|  CancelPenalties |  This element contains the **CancelPenalty** parent element. The **CancelPenalty** element contains the **PenaltyDescription** element, with a **Text** child element containing the cancellation penalty text. |
|  RatePlanDescription |  This element contains a **Text** child element with the text description of the rate plan. |

#### Rate elements

The **Rate** element has the following attributes:

* EffectiveDate: The starting date for the rate.
* ExpireDate: The ending date for the rate.

The **Rate** element contains the following child elements:

|  Element |  Description |
|----------|---------------------------------------|
|  Base |  The base rate amount. This element contains the following attributes:<br/>**AmountAfterTax**: The rate amount with all taxes included.<br/>**CurrencyCode**: The 3-letter ISO 4217 currency code for the rate amount.<br/><br/>The **Base** element contains the **Taxes** child element. The **Taxes** element contains a **Tax** element for each included tax, with the following attributes:<br/>**Amount**: The amount of the tax.<br/>**CurrencyCode**: The The 3-letter ISO 4217 currency code for the tax amount.<br/><br/>The **Tax** element contains a **TaxDescription** parent element, with a **Text** child element containing the tax description text. |

#### Address elements

|  Element |  Description |
|----------|---------------------------------------|
|  AddressLine |  The first address line. |
|  CityName |  The address city. | 
|  PostalCode |  The address postal code. |
|  CountryName |  The 3-character address country name. Format: USA |

#### ResGuest Response elements

The *ResGuest* response parent element contains the **ProfileInfo** child element. The **ProfileInfo** element has the **Profile** child element. The **Profile** element contains the **Customer** element. The **Customer** element contains the **PersonName** element. The **PersonName** element contains the following child elements:

|  Element |  Description |
|----------|---------------------------------------|
|  NamePrefix |  The guest's name prefix. |
|  GivenName |  The guest's first name. | 
|  Surname |  The guest's last name. |

###  XML Example of Successful Response

```xml
    200 OK HTTPS/1.1
    Content-Length: {length of content body}

    <?xml version="1.0" encoding="utf-8" ?>
    <OTA_HotelResRS xmlns="http://www.opentravel.org/OTA/2003/05" EchoToken="ABC123" ResResponseType="Committed" TimeStamp="2012-01-01T19:00:00" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="http://www.opentravel.org/OTA/2003/05 ../Schemas/OTA_HotelResRS.xsd" Version="1">
        <Success />
        <HotelReservations>
            <HotelReservation>
                <RoomStays>
                    <RoomStay>
                        <RoomTypes>
                            <RoomType NumberOfUnits="1">
                                <RoomDescription>
                                    <Text>Standard Room</Text>
                                </RoomDescription>
                            </RoomType>
                        </RoomTypes>
                        <RatePlans>
                            <RatePlan RatePlanCode="2222222">
                                <CancelPenalties>
                                    <CancelPenalty>
                                        <PenaltyDescription>
                                            <Text>The hotel imposes the following cancellation penalty: Cancellations or changes made after 11:59 PM on Jun 18, 2012 are subject to a 1 Night Room and Tax penalty. The property makes no refunds for no shows or early checkouts.</Text>
                                        </PenaltyDescription>
                                    </CancelPenalty>
                                </CancelPenalties>
                                <RatePlanDescription>
                                    <Text>Standard Room</Text>
                                </RatePlanDescription>
                            </RatePlan>
                        </RatePlans>
                        <RoomRates>
                            <RoomRate RatePlanCode="2222222">
                                <Rates>
                                    <Rate EffectiveDate="2012-08-15" ExpireDate="2012-08-17">
                                        <Base AmountAfterTax="100.00" CurrencyCode="USD">
                                            <Taxes>
                                                <Tax Amount="10.00" CurrencyCode="USD">
                                                    <TaxDescription>
                                                        <Text>VAT</Text>
                                                    </TaxDescription>
                                                </Tax>
                                            </Taxes>
                                        </Base>
                                    </Rate>
                                    <Rate EffectiveDate="2012-08-15" ExpireDate="2012-08-15">
                                        <Base AmountAfterTax="100.00" CurrencyCode="USD" />
                                    </Rate>
                                    <Rate EffectiveDate="2012-08-16" ExpireDate="2012-08-16">
                                        <Base AmountAfterTax="110.00" CurrencyCode="USD" />
                                    </Rate>
                                </Rates>
                            </RoomRate>
                        </RoomRates>
                        <GuestCounts>
                            <GuestCount AgeQualifyingCode="10" Count="1" />
                        </GuestCounts>
                        <TimeSpan Start="2012-08-15" End="2010-08-17" />
                        <BasicPropertyInfo HotelCode="HTL1111" HotelName="Hotel Deluxe">
                            <Address>
                                <AddressLine>123 HOTEL ST</AddressLine>
                                <CityName>HOTELTOWN</CityName>
                                <PostalCode>12344</PostalCode>
                                <CountryName>USA</CountryName>
                            </Address>
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
                                            <NamePrefix>Mr.</NamePrefix>
                                            <GivenName>CHRIS</GivenName>
                                            <Surname>MILLER</Surname>
                                        </PersonName>
                                    </Customer>
                                </Profile>
                            </ProfileInfo>
                        </Profiles>
                    </ResGuest>
                </ResGuests>
                <ResGlobalInfo>
                    <HotelReservationIDs>
                        <HotelReservationID ResID_Value="888000888" />
                    </HotelReservationIDs>
                </ResGlobalInfo>
                <TPA_Extensions>
                    <CustomFields>
                        <CustomField Name="OrgUnit" Type="Profile">Sales</CustomField>
                        <CustomField Name="XmlSyncId" Type="Profile">9293kks8drf6s8f</CustomField>
                    </CustomFields>
                </TPA_Extensions>
            </HotelReservation>
        </HotelReservations>
    </OTA_HotelResRS>
```
  


[1]: https://developer.concur.com/overview/partner-applications
[2]: https://developer.concur.com/node/434#security
[3]: https://developer.concur.com/node/434#idtypes
[4]: https://developer.concur.com/sites/default/files/HotelCodes.pdf
