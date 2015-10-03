---
title: Post an availability search 
layout: reference
---

## Description
The following request is sent when the Travel user selects a hotel and searches for availability for a date range. The response includes the list of available rooms for the supplied date range.

##  Request

### Content type
application/xml

### Encoding
UTF-8

### URI
The Hotel direct connect sends the relevant information to a URI that the travel supplier maintains. The standard location is:

    https://{servername}/concur/hotel/v1/

The URI is configured by the supplier when registering the partner application. Refer to **Core Concepts > [Partner Applications](/docs/overviews/partner-applications.html)** for more information.

### Authorization header
Authorization header with Basic credentials.

### Request body root element
The request will contain a **OTA_HotelAvailRQ** parent element, containing the following attributes:

* xmlns
* EchoToken
* TimeStamp
* PrimaryLangID
* xmlns:xsi
* xsi:schemaLocation
* Version

The **OTA_HotelAvailRQ** parent element contains the following child elements:

|  Element Name | Required/Optional | Data Type | Description |
|---------------|-------------------|-----------|-------------|
| POS |  | Object | The point of sale information. |
| AvailRequestSegments |  | Array | This parent element contains an AvailRequestSegment element for the requested availability.|

### POS child elements

|  Element Name | Required/Optional | Data Type | Description |
|---------------|-------------------|-----------|-------------|
| Source |  | Object | The source of the request. This element has the following attributes:<br/>**ISOCountry**: The country code for the Travel user's home country.<br/>**ISOCurrency**: The [3-letter ISO 4217 currency code][4] for the Travel user's currency. |

### Source child elements

|  Element Name | Required/Optional | Data Type | Description |
|---------------|-------------------|-----------|-------------|
| RequestorID |  | Object | The corporate identifier. If necessary, multiple RequestorID elements can be sent. This element has the following attributes: <br/>**Type**: The type code for the corporate identifier. Should be one of the supported [ID Type Codes][3].<br/>**ID**: The corporate identifier.<br/>**ID_Context**: The corporate identifier context. |

### AvailRequestSegment
This parent element contains an AvailRequestSegment element for the requested availability.

|  Element Name | Required/Optional | Data Type | Description |
|---------------|-------------------|-----------|-------------|
| HotelSearchCriteria |  | Object |  |
| StayDateRange |  | Object | This element contains the following attributes: <br/>**Start**: The starting date of the requested date range. Format: YYYY-MM-DD<br/>**End**: The ending date of the requested date range. Format: YYYY-MM-DD |
| RoomStayCandidates |  | Array | This parent element contains the **RoomStayCandidate** element. This element has a Quantity attribute indicating the number of guests. Currently only one guest is supported. The **RoomStayCandidate** element has a **GuestCounts** child element containing a **GuestCount** element. The **GuestCount** element has the following attributes: <br/>**AgeQualifyingCode**: The value for this element should be 10, which represents an Adult guest.<br/>**Count**: The number of guests included in the request. |

### HotelSearchCriteria child elements

|  Element Name | Required/Optional | Data Type | Description |
|---------------|-------------------|-----------|-------------|
| Criterion |  | Object | This parent element contains a **HotelRef** element for each hotel criterion used. Multiple criterion are compared using an OR comparison. The **HotelRef** element has the following attributes: <br/>**ChainCode**: The hotel chain code. |

####  XML Example Request

```xml
    POST /concur/hotel/v1 HTTPS/1.1
    Host: example.com
    Authorization: Basic ...
    Content-Type: application/xml
    Content-Length: {length of content body}

    <?xml version="1.0" encoding="utf-8" ?>
    <OTA_HotelAvailRQ xmlns="http://www.opentravel.org/OTA/2003/05" EchoToken="ABC123" TimeStamp="2012-01-01T19:00:00" PrimaryLangID="en-us" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="http://www.opentravel.org/OTA/2003/05 ../Schemas/OTA_HotelAvailRQ.xsd" Version="1">
        <POS>
            <Source ISOCountry="US" ISOCurrency="USD">
                <RequestorID Type="18" ID="7777777" />
            </Source>
        </POS>
        <AvailRequestSegments>
            <AvailRequestSegment>
                <HotelSearchCriteria>
                    <Criterion>
                        <HotelRef ChainCode="ZZ" HotelCode="HTL1111" />
                        <HotelRef ChainCode="ZZ" HotelCode="HTL2222" />
                    </Criterion>
                </HotelSearchCriteria>
                <StayDateRange Start="2012-08-15" End="2010-08-17" />
                <RoomStayCandidates>
                    <RoomStayCandidate Quantity="1">
                        <GuestCounts>
                            <GuestCount AgeQualifyingCode="10" Count="1" />
                        </GuestCounts>
                    </RoomStayCandidate>
                </RoomStayCandidates>
            </AvailRequestSegment>
        </AvailRequestSegments>
    </OTA_HotelAvailRQ>
```

##  Response

The supplier responds to the request by returning the details of the available room.

### Content Types
application/xml

### Content Body

The response will include a **OTA_HotelAvailRS** parent element, with the following attributes:

* xmlns
* EchoToken
* TimeStamp
* xmlns:xsi
* xsi:schemaLocation
* Version

The **OTA_HotelAvailRS** parent element has the following child elements:  

|  Element Name | Required (must contain value)? | Data Type | Description |
|---------------|-------------------|-----------|-------------|
|  Success |  N |  | This element is returned if the request was successful. |
|  RoomStays |  Y | Array | This parent element contains a **RoomStay** parent element for each hotel room returned. Refer to the RoomStay Child Elements table for information about the child elements. |
|  BasicPropertyInfo |  Y |  |  This element contains the **HotelCode** attribute, which contains the code for the hotel that this rate applies to. |
|  TPA_Extensions |  N |  |  |


### RoomStay child elements

|  Element Name | Required (must contain value)? | Data Type | Description |
|---------------|-------------------|-----------|-------------|
|  RatePlans | Y |  | The room rate plan. This parent element contains the following child element: <br/>RatePlan: This element has the RatePlanCode attribute, defining the code for the room rate.  |
|  RoomRates |  |  | This parent element has a RoomRate child element. The RoomRate element has a Rates child element. |
|  BasicPropertyInfo | Y |  | This element contains the HotelCode attribute, which contains the code for the hotel that this rate applies to. |
|  TPA_Extensions | N |  | This element contains the **RequireSeriesCode** child element, which has a value of true or false. This element indicates whether CVV should be queried and sent. |

### Rates child elements

|  Element Name | Required (must contain value)? | Data Type | Description |
|---------------|-------------------|-----------|-------------|
| Rate |  | Object | The supplied rate for the stay. If there are multiple rates for the stay, you can provide multiple Rate elements. The first one will be displayed to the user, with the rest available through the policy popup. This element has the following attributes: <br/>**EffectiveDate**: The date the rate begins.<br/>**ExpireDate**: The date that the rate expires. |

### Rate child elements

|  Element Name | Required (must contain value)? | Data Type | Description |
|---------------|-------------------|-----------|-------------|
| Base |  |  | The rate details per day without tax. If the rate changes, provide the first day's rate. This element has the following attributes: <br/>**AmountBeforeTax**: The rate amount per night before tax.<br/>**AmountAfterTax**: The rate amount per night after tax.<br/>**CurrencyCode**: The [3-letter ISO 4217 currency code][4] for the room rate values. |
| RateDescription |  |  | This parent element contains the **Text** child element, which contains the description of the rate. |

### TPA_Extensions child elements

|  Element Name | Required (must contain value)? | Data Type | Description |
|---------------|-------------------|-----------|-------------|
| RequireSeriesCode |  |  | This element indicates whether CVV should be queried and sent. Format: true/false |
| GuaranteeRequired |  |  | This element indicates whether the hotel requires a credit card deposit for this reservation. Possible values are: <br/>**always**: When booking this rate, user will be asked for credit card (even if a deposit account is specified).<br/>**never**: When booking this rate, user will not be asked for credit card (even if a deposit account is not specified).<br/>**default** (or not present at all): When booking this rate, user will be asked for credit card if a deposit account is not specified. |

###  XML Example of Successful Response

```xml
    200 OK HTTPS/1.1
    Content-Length: {length of content body}

    <?xml version="1.0" encoding="utf-8" ?>
    <OTA_HotelAvailRS xmlns="http://www.opentravel.org/OTA/2003/05" EchoToken="ABC123" TimeStamp="2012-01-01T19:00:00" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="http://www.opentravel.org/OTA/2003/05 ../Schemas/OTA_HotelAvailRS.xsd" Version="1">
        <Success />
        <RoomStays>
            <RoomStay>
                <RatePlans>
                    <RatePlan RatePlanCode="2222222" />
                </RatePlans>
                <RoomRates>
                    <RoomRate>
                        <Rates>
                            <Rate EffectiveDate="2012-08-15" ExpireDate="2010-08-17">
                                <Base AmountBeforeTax="100.00" AmountAfterTax="110.00" CurrencyCode="USD" />
                                <RateDescription>
                                    <Text>CORPORATE RATE*KING</Text>
                                </RateDescription>
                            </Rate>
                        </Rates>
                    </RoomRate>
                </RoomRates>
                <BasicPropertyInfo HotelCode="HTL1111" />
            </RoomStay>
            <RoomStay>
                <RatePlans>
                    <RatePlan RatePlanCode="3333333" />
                </RatePlans>
                <RoomRates>
                    <RoomRate>
                        <Rates>
                            <Rate EffectiveDate="2012-08-15" ExpireDate="2010-08-17">
                                <Base AmountBeforeTax="100.00" AmountAfterTax="110.00" CurrencyCode="USD" />
                                <RateDescription>
                                    <Text>CORPORATE RATE*DOUBLE FREE INTERNET</Text>
                                </RateDescription>
                            </Rate>
                        </Rates>
                    </RoomRate>
                </RoomRates>
                <BasicPropertyInfo HotelCode="HTL1111" />
            </RoomStay>
            <RoomStay>
                <RatePlans>
                    <RatePlan RatePlanCode="4444444" />
                </RatePlans>
                <RoomRates>
                    <RoomRate>
                        <Rates>
                            <Rate EffectiveDate="2012-08-15" ExpireDate="2010-08-17">
                                <Base AmountBeforeTax="100.00" AmountAfterTax="110.00" CurrencyCode="USD" />
                                <RateDescription>
                                    <Text>REGULAR RATE*KING</Text>
                                </RateDescription>
                            </Rate>
                        </Rates>
                    </RoomRate>
                </RoomRates>
                <BasicPropertyInfo HotelCode="HTL2222" />
                <TPA_Extensions>
                    <RequireSeriesCode>true</RequireSeriesCode>
                    <GuaranteeRequired>always</GuaranteeRequired>
                </TPA_Extensions>
            </RoomStay>
        </RoomStays>
    </OTA_HotelAvailRS>
```
  


[1]: https://developer.concur.com/overview/partner-applications
[2]: https://developer.concur.com/node/434#security
[3]: https://developer.concur.com/node/434#idtypes
[4]: http://en.wikipedia.org/wiki/ISO_4217
[5]: https://developer.concur.com/sites/default/files/HotelCodes.pdf
