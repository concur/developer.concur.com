---
title: Post a booking rule search
layout: reference
---


## Description

This request is sent when the Travel user selects a rate for the hotel. The response includes the rules for the specified rate.

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

The request will contain a **OTA_HotelBookingRuleRQ** parent element, containing the following attributes:

* xmlns
* EchoToken
* TimeStamp
* PrimaryLangID
* xmlns:xsi
* xsi:schemaLocation
* Version

The **OTA_HotelBookingRuleRQ** parent element contains the following child elements:

|  Element |  Description |
|----------|---------------------------------------|
|  POS |  The point of sale information. Contains a **Source** child element that specifies the source of the request. For information about **Source** element, see the **Source elements** table below. |
|  RuleMessage |  This element has the HotelCode attribute. For information about the child element of this parent element, see the **StatusApplication elements** table below. |

#### Source elements

The **Source** element has the following attributes:

* ISOCountry: The country code for the Travel user's home country.
* ISOCurrency: The 3-letter ISO 4217 currency code for the Travel user's currency.

The **Source** element contains the following element:

|  Element |  Description |
|----------|---------------------------------------|
|  RequestorID | The corporate identifier. If necessary, multiple **RequestorID** elements can be sent. This element has the following attributes:<br/>**Type**: The type code for the corporate identifier. Should be one of the supported [ID Type Codes][3]. <br/>**ID**: The corporate identifier. <br/>**ID_Context**: The corporate identifier context.

#### StatusApplication elements

This element has the following attributes:

* **Start**: The start date of the request. Format: YYYY-MM-DD
* **End**: The end date of the request. Format: YYYY-MM-DD
* **RatePlanCode**: The rate plan code associated with the request.


####  XML Example Request

```xml
    POST /concur/hotel/v1 HTTPS/1.1
    Host: example.com
    Authorization: Basic ...
    Content-Type: application/xml
    Content-Length: {length of content body}

    <?xml version="1.0" encoding="UTF-8" ?>
    <OTA_HotelBookingRuleRQ xmlns="http://www.opentravel.org/OTA/2003/05" EchoToken="ABC123" TimeStamp="2012-01-01T19:00:00" PrimaryLangID="en-us" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="http://www.opentravel.org/OTA/2003/05 ../Schemas/OTA_HotelBookingRuleRQ.xsd" Version="1">
        <POS>
            <Source ISOCountry="US" ISOCurrency="USD">
                <RequestorID Type="18" ID="7777777" />
            </Source>
        </POS>
        <RuleMessage HotelCode="HTL1111">
            <StatusApplication Start="2012-08-15" End="2010-08-17" RatePlanCode="HTL1_1" />
        </RuleMessage>
    </OTA_HotelBookingRuleRQ>
```

##  Response

The supplier responds to the request by returning the details of the requested rate.

### Content Types
application/xml

The response will include a **OTA_HotelBookingRuleRS** parent element, with the following attributes:

* xmlns
* EchoToken
* TimeStamp
* xmlns:xsi
* xsi:schemaLocation
* Version

The **OTA_HotelBookingRuleRS** parent element contains a **Success** element if the request was successful. It also contains a **RuleMessage** element with the HotelCode and HotelName attributes. The **RuleMessage** element contains the following child elements:  

|  Element |  Required (must contain value)? |  Description |

|----------|---------|---------------------------------|
|  StatusApplication |  Y | This element contains rate details. It has the following attributes:<br/>**Start**: The start date of the request. Format: YYYY-MM-DD<br/>**End**: The end date of the request. Format: YYYY-MM-DD<br/>**RatePlanCode**: The rate plan code for the requested rate.<br/><br/>The **StatusApplication** element contains a **RoomRates** element with one **RoomRate** child element for each rate returned. For information about this element, see the **RoomRate element** table below. |
|  GuestCounts |  Y | This parent element contains a **GuestCount** element with the following attributes:<br/>**AgeQualifyingCode**: The value for this element should be 10, which represents an Adult guest.<br/>**Count**: The number of guests included in the request. |
|  BookingRules |  Y | This parent element contains a **BookingRule** element. For information about this child element, see the **BookingRule element** table below. |

#### RoomRate element

The **RoomRate** element has the following attributes:

* **Amount**: The amount of the room rate. Provide the daily rate if you are sending multiple **RoomRate** elements. If you have a single rate for the entire period (one RoomRate element), send the full price of the stay including taxes. Format: 100.00
* **CurrencyCode**: The [3-letter ISO 4217 currency code][4] for the rate amount.
* **Start**: If there are multiple daily rates, provide the start date for this rate. Format: YYYY-MM-DD
* **End**: If there are multiple daily rates, provide the end date for this rate. Format: YYYY-MM-DD

The **RoomRate** element has the following child element:

|  Element |  Description |
|----------|---------------------------------------|
|  RateDescription | This parent element contains a **Text** child element with text details of the room rate.|

#### BookingRule element

|  Element |  Description |
|----------|---------------------------------------|
|  AcceptableGuarantees | Information about acceptable guarantees. This element has an **AcceptableGuarantee** child element. For information about the **AcceptableGuarantee** element, see the **AcceptableGuarantee element** table below. |
|  CancelPenalties | This element has the **CancelPenalty** child element. The **CancelPenalty** element has the **PenaltyDescription** child element, containing a **Text** child element with the penalty description text. |
|  RequiredPaymts | This element contains the **GuaranteePayment** element, which has a PaymentCode attribute. The **GuaranteePayment** element contains the **Description** element, containing a **Text** child element with the required payment description text. |

#### AcceptableGuarantee element

The **AcceptableGuarantee** element has the GuaranteeCode attribute and the following child element:

|  Element |  Description |
|----------|---------------------------------------|
|  GuaranteeDescription |  This element has the **Text** child element, containing the description of the guarantee. |

####  XML Example of Successful Response

```xml
    200 OK HTTPS/1.1
    Content-Length: {length of content body}

    <?xml version="1.0" encoding="UTF-8" ?>
    <OTA_HotelBookingRuleRS xmlns="http://www.opentravel.org/OTA/2003/05" EchoToken="ABC123" TimeStamp="2012-01-01T19:00:00" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="http://www.opentravel.org/OTA/2003/05 ../Schemas/OTA_HotelBookingRuleRS.xsd" Version="1">
        <Success />
        <RuleMessage HotelCode="HTL1111" HotelName="HOTEL1">
            <StatusApplication Start="2012-08-15" End="2010-08-17" RatePlanCode="HTL1_1">
                <RoomRates>
                    <RoomRate Amount="100.00" CurrencyCode="USD">
                        <RateDescription>
                            <Text>Standard Room</Text>
                        </RateDescription>
                    </RoomRate>
                </RoomRates>
            </StatusApplication>
            <GuestCounts>
                <GuestCount AgeQualifyingCode="10" Count="1" />
            </GuestCounts>
            <BookingRules>
                <BookingRule>
                    <AcceptableGuarantees>
                        <AcceptableGuarantee GuaranteeCode="1">
                            <GuaranteeDescription>
                                <Text>Credit Card WILL BE CHARGED IMMEDIATELY FOR THE FULL AMOUNT of the reservation.</Text>
                            </GuaranteeDescription>
                        </AcceptableGuarantee>
                    </AcceptableGuarantees>
                    <CancelPenalties>
                        <CancelPenalty>
                            <PenaltyDescription>
                                <Text>The hotel imposes the following cancellation penalty: Cancellations or changes made after 11:59 PM on Jun 18, 2012 are subject to a 1 Night Room and Tax penalty. The property makes no refunds for no shows or early checkouts.</Text>
                            </PenaltyDescription>
                        </CancelPenalty>
                    </CancelPenalties>
                    <RequiredPaymts>
                        <GuaranteePayment PaymentCode="2">
                            <Description>
                                <Text>Prepayment required</Text>
                            </Description>
                        </GuaranteePayment>
                    </RequiredPaymts>
                </BookingRule>
            </BookingRules>
        </RuleMessage>
    </OTA_HotelBookingRuleRS>
```
  


[1]: https://developer.concur.com/overview/partner-applications
[2]: https://developer.concur.com/node/434#security
[3]: https://developer.concur.com/node/434#idtypes
[4]: http://en.wikipedia.org/wiki/ISO_4217
