[Source](https://developer.concur.com/direct-connects/hotel/post-booking-rule-search "Permalink to Hotel - Post Booking Rule Search")

# Hotel - Post Booking Rule Search

##  Request

The following request is sent when the Travel user selects a rate for the hotel. The response includes the rules for the specified rate.

| ----- |
|  Supported Accept Types |  Encoding |
|   |  UTF-8 |
|  Request URI |   |
|  The Hotel direct connect sends the relevant information to a URI that the travel supplier maintains. The standard location is:

    https://{servername}/concur/hotel/v1/

The URI is configured by the supplier when registering the partner application. Refer to **Core Concepts >[ Partner Applications][1] **for more information. |
|  Request Headers - Required |  Request Headers - Optional |
|  Authorization header with Basic credentials. Refer to the [Security][2] documentation for more information. |  None |
|  Request Body |   |
|

The request will contain a **OTA_HotelBookingRuleRQ** parent element, containing the following attributes:
* xmlns
* EchoToken
* TimeStamp
* PrimaryLangID
* xmlns:xsi
* xsi:schemaLocation
* Version

The** OTA_HotelBookingRuleRQ **parent element contains the following child elements:

|  Element |  Description |
|  POS |  The point of sale information. This parent element contains the following child element:

|  Source |

The source of the request. This element has the following attributes:

 |

The **Source** element has the following child element:

| ----- |
|  RequestorID |

The corporate identifier. If necessary, multiple **RequestorID** elements can be sent. This element has the following attributes:
* **Type**: The type code for the corporate identifier. Should be one of the supported [ID Type Codes][3].
* **ID**: The corporate identifier.
* **ID_Context**: The corporate identifier context.
 |

 |
|  RuleMessage |  This element has the HotelCode attribute and the following child element:

|  StatusApplication |

This element has the following attributes:

* **Start**: The start date of the request. Format: YYYY-MM-DD
* **End**: The end date of the request. Format: YYYY-MM-DD
* **RatePlanCode**: The rate plan code associated with the request.
 |

 |

 |

####  XML Example Request

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

##  Response

The supplier responds to the request by returning the details of the requested rate.

| ----- |

| Supported Content Types |
| ----------------------- |
| Content Body            |

The response will include a **OTA_HotelBookingRuleRS** parent element, with the following attributes:
* xmlns
* EchoToken
* TimeStamp
* xmlns:xsi
* xsi:schemaLocation
* Version
The **OTA_HotelBookingRuleRS** parent element contains a **Success** element if the request was successful. It also contains a **RuleMessage** element with the HotelCode and HotelName attributes. The **RuleMessage** element contains the following child elements:  

|  Element |  Required (must contain value)? |  Description |
|  StatusApplication |  Y |

This element contains rate details. It has the following attributes:

* **Start**: The start date of the request. Format: YYYY-MM-DD
* **End**: The end date of the request. Format: YYYY-MM-DD
* **RatePlanCode**: The rate plan code for the requested rate.

The **StatusApplication** element has the following child element:

|  RoomRates |

This parent element contains one **RoomRate** element for each rate returned. The **RoomRate** element has the following attributes:
* **Amount**: The amount of the room rate. Provide the daily rate if you are sending multiple **RoomRate** elements. If you have a single rate for the entire period (one RoomRate element), send the full price of the stay including taxes. Format: 100.00
* **CurrencyCode**: The [3-letter ISO 4217 currency code][4] for the rate amount.
* **Start**: If there are multiple daily rates, provide the start date for this rate. Format: YYYY-MM-DD
* **End**: If there are multiple daily rates, provide the end date for this rate. Format: YYYY-MM-DD

The **RoomRate** element has the following child element:

|  RateDescription |

This parent element contains the following child element:

**Text**: The text details of the room rate.

 |

 |

 |
|  GuestCounts |  Y |

This parent element contains a **GuestCount** element with the following attributes:
* **AgeQualifyingCode**: The value for this element should be 10, which represents an Adult guest.
* **Count**: The number of guests included in the request.
 |
|  BookingRules |  Y |

This parent element contains a **BookingRule** element with the following child elements:

|  AcceptableGuarantees |

This element has an **AcceptableGuarantee** child element. This element has the GuaranteeCode attribute and the following child element:

|  GuaranteeDescription |  This element has the **Text** child element, containing the description of the guarantee. |

 |
|  CancelPenalties |

This element has the **CancelPenalty** child element. The **CancelPenalty** element has the **PenaltyDescription** child element with the following child element:

|  Text |  The penalty description text. |

 |
|  RequiredPaymts |

This element contains the **GuaranteePayment** element, which has a PaymentCode attribute. The **GuaranteePayment** element contains the **Description** element, which contains the following child element:

|  Text |  The required payment description text. |

 |

 |

 |

####  XML Example of Successful Response

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

  
Last Modified: 9/11/2013 10:09 AM PDT

[1]: https://developer.concur.com/node/203
[2]: https://developer.concur.com/node/434#security
[3]: https://developer.concur.com/node/434#idtypes
[4]: http://en.wikipedia.org/wiki/ISO_4217
