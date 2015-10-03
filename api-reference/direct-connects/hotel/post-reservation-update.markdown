---
title: Post a reservation update 
layout: reference
---

## Description

**NOTE**: This function is not supported in the current version. Support may be returned in a future release.

This request is sent when the Travel user updates their reservation. The response includes the new reservation identifier.

##  Request

###Encoding
UTF-8

###Request URI
The Hotel direct connect sends the relevant information to a URI that the travel supplier maintains. The standard location is:

`https://{servername}/concur/hotel/v1/`

The URI is configured by the supplier when registering the partner application.

### Headers

### Accept header
application/XML

#### Authorization header

Authorization header with Basic credentials.

### Request Body
The request will contain an **OTA_HotelResModifyRQ** parent element, with the following attributes:

* xmlns
* EchoToken
* TimeStamp
* PrimaryLangID
* xmlns:xsi
* xsi:schemaLocation
* Version

The **OTA_HotelResModifyRQ** element contains the following child elements:

|  Element |  Description |
|----------|---------------------------------------|
|  POS |  The point of sale information. Contains a **Source** child element that specifies the source of the request. For information about **Source** element, see the **Source elements** table below. |
| HotelResModifies | This element has a **HotelResModify** child element. For more information about this child element, see the **HotelResModify element** table below. |

#### Source elements

The **Source** element has the following attributes:

* ISOCountry: The country code for the Travel user's home country.
* ISOCurrency: The 3-letter ISO 4217 currency code for the Travel user's currency.

The **Source** element contains the following element:

|  Element |  Description |
|----------|---------------------------------------|
|  RequestorID | The customer's identifiers. If necessary, multiple **RequestorID** elements can be sent. This element has the following attributes:<br/>**Type**: The code for the customer type. <br/>**ID**: The identifier for the user. |

#### HotelResModify element

The **HotelResModify** element with the following attributes:

* **RoomStayReservation**: Whether the reservation is for a room stay. Format: true/false.
* **CreateDateTime**: The time the reservation was originally created, in the hotel's local time zone.
* **CreatorID**: The source of the reservation.

The **HotelResModify** element contains the following child elements:

|  Element |  Description |
|----------|---------------------------------------|
| RoomStays | This parent element contains the **RoomStay** element. Refer to the **RoomStay Request elements** table for information about child elements. |
|ResGuests | This parent element contains the **ResGuest** element. For more information about this child element, see the **ResGuest elements** table below. |
|  ResGlobalInfo |  This parent element contains a **HotelReservationIDs** child element. This element contains a **HotelReservationID** child element with the following attribute:<br/>**ResID_Value**: The reservation ID. |

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

#### ResGuest elements

The **ResGuest** element has the following attributes:

* **ResGuestRPH**: The unique identifier for the guest.
* **AgeQualifyingCode**: The value for this element should be 10, which represents an Adult guest.

The **ResGuest** element contains a **Profiles** child element with information about the guest's profile. The **Profiles** element contains the **ProfileInfo** child element. The **ProfileInfo** element has the **Profile** child element. The **Profile** element contains the **Customer** element. The **Customer** element contains the following child elements:

|  Element |  Description |
|----------|---------------------------------------|
|  PersonName |  This element contains the following child elements:**GivenName**: The guest's given name. <br/>**Surname**: The guest's surname. |
|  Telephone |  This element has a PhoneNumber attribute containing the guest's phone number. | 
|  Email |  The guest's email address. |
|  Address |  This parent element has the following child elements:<br/>**AddressLine**: The first address line.<br/>**CityName**: The address city. <br/>**PostalCode**: The address postal code. <br/>**StateProv**: The address state/province. <br/>**CountryName**: The 2-character address country name. Format: US |

#### PaymentCard elements

The **PaymentCard** element has the following attributes:

* **CardCode**: The type of card. 
* **CardNumber**: The card number.

The **PaymentCard** element has the following child elements:

|  Element |  Description |
|----------|---------------------------------------|
|  CardHolderName |  The card holder's name. |
|  Address |  The billing address of the card. This parent element contains the following child elements:<br/>**AddressLine**: The first address line.<br/>**CityName**: The address city. <br/>**PostalCode**: The address postal code. <br/>**StateProv**: The address state/province. <br/>**CountryName**: The 2-character address country name. Format: US |

###  XML Example Request

```xml
    POST /concur/hotel/v1 HTTPS/1.1
    Host: example.com
    Authorization: Basic ...
    Content-Type: application/xml
    Content-Length: {length of content body}

    <?xml version="1.0" encoding="UTF-8" ?>
    <OTA_HotelResModifyRQ xmlns="http://www.opentravel.org/OTA/2003/05" EchoToken="ABC123" TimeStamp="2012-01-01T19:00:00" PrimaryLangID="en-us" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="http://www.opentravel.org/OTA/2003/05 ../Schemas/OTA_HotelResModifyRQ.xsd" Version="1">
        <POS>
            <Source ISOCountry="US" ISOCurrency="USD">
                <RequestorID Type="18" ID="7777777" />
            </Source>
        </POS>
        <HotelResModifies>
            <HotelResModify RoomStayReservation="true" CreateDateTime="2003-03-11T17:29:00-08:00" CreatorID="Expedia">
                <RoomStays>
                    <RoomStay>
                        <RoomTypes>
                            <RoomType NumberOfUnits="1" />
                        </RoomTypes>

                        <RatePlans>
                            <RatePlan RatePlanCode="2222222" />
                        </RatePlans>
                        <GuestCounts>
                            <GuestCount AgeQualifyingCode="10" Count="1" />
                        </GuestCounts>
                        <TimeSpan Start="2012-08-15" End="2010-08-16" />
                        <Guarantee>
                            <GuaranteesAccepted>
                                <GuaranteeAccepted GuaranteeTypeCode="CC">
                                    <PaymentCard CardCode="AX" CardNumber="4400000000000000" ExpireDate="1215">
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
                    </RoomStay>
                </RoomStays>
                <ResGuests>
                    <ResGuest ResGuestRPH="1" AgeQualifyingCode="10">
                        <Profiles>
                            <ProfileInfo>
                                <Profile>
                                    <Customer>
                                        <PersonName>
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
                    <HotelReservationIDs>
                        <HotelReservationID ResID_Value="888000888" />
                    </HotelReservationIDs>
                </ResGlobalInfo>
            </HotelResModify>
        </HotelResModifies>
    </OTA_HotelResModifyRQ>
```

##  Response

The supplier responds to the request by returning an updated booking identifier.

### Content Types
application/xml

### Response body

The response includes an **OTA_HotelResModifyRS** parent element with the following attributes:

* xmlns
* EchoToken
* TimeStamp
* xmlns:xsi
* xsi:schemaLocation
* Version

The **OTA_HotelResModifyRS** parent element contains a **Success** element if the request was successful. It also contains a **HotelResModifies** element. The **HotelResModifies** element contains the **HotelResModify** element. The **HotelResModify** element contains the **ResGlobalInfo** child elements. The **ResGlobalInfo** element contains the **HotelReservationIDs** element. The **HotelReservationIDs** element contains two **HotelReservationID** child elements with the **ResID_Value** attribute containing the reservation ID. The first **HotelReservationID** element contains the original reservation identifier, and the second one contains the new reservation ID.

###  XML Example of Successful Response

```xml
    200 OK HTTPS/1.1
    Content-Length: {length of content body}

    <?xml version="1.0" encoding="UTF-8" ?>
    <OTA_HotelResModifyRS xmlns="http://www.opentravel.org/OTA/2003/05" EchoToken="ABC123" TimeStamp="2012-01-01T19:00:00" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="http://www.opentravel.org/OTA/2003/05 ../Schemas/OTA_HotelResModifyRS.xsd" Version="1">
        <Success />
        <HotelResModifies>
            <HotelResModify>
                <ResGlobalInfo>
                    <HotelReservationIDs>
                        <HotelReservationID ResID_Value="888000888" />
                        <HotelReservationID ResID_Value="999000999" />
                    </HotelReservationIDs>
                </ResGlobalInfo>
            </HotelResModify>
        </HotelResModifies>
    </OTA_HotelResModifyRS>
```


