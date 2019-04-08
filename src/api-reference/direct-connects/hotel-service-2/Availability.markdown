---
title: Direct Connect - Hotel v2 - Availability
layout: reference
---

{% include prerelease.html %}

Message to retrieved the availability of hotels

| SOAPAction   | OTA name   | Message structure |
|--------------|------------|-------------------|
| availability | HotelAvail | OTA_HotelAvailRQ  |

---

* [Request](#request)
  * [Schema](#)
    * [Available Request Segments](#)
    * [Available Request Segment](#)
    * [Hotel Search Criteria](#)
    * [Criterion](#)
    * [Stay Date Range](#)
    * [Room Stay Candidates](#)
    * [Room Stay Candidate](#)
    * [Guest Counts](#)
    * [Guest Count](#)
* [Response](#response)
  * [Schema](#)
    * [Room Stays](#)
    * [Room Stay](#)
    * [Room Types](#)
    * [Room Type](#)
    * [Room Descriptions](#)
    * [Rate Plans](#)
    * [Rate Plan](#)
    * [Guarantee](#)
    * [Supported Guarantee Types](#)
    * [Supported Guarantee Required](#)
    * [Deadline](#)
    * [Cancel Penalties](#)
    * [Cancel Penalty](#)
    * [Meals Included](#)
    * [Rooms Rates](#)
    * [Room Rate](#)
    * [Rates](#)
    * [Rate](#)
    * [Payment Policies](#)
    * [Guarantee Payment](#)
    * [Accepted Payments](#)
    * [Accepted Payment](#)
    * [Payment Card](#)
    * [Total](#)
    * [Rate Descriptions](#)
    * [TPA Extensions](#)
    * [Timespan](#)
    * [Basical Property Info](#)
* [Relationship Between RoomID and RatePlanID](#relationship-roomid-rateplanid)

## <a name="request"></a>Request

```xml
<?xml version="1.0" encoding="UTF-8"?>
 <Envelope xmlns="http://schemas.xmlsoap.org/soap/envelope/">
  <Header xmlns="http://schemas.xmlsoap.org/soap/envelope/">
    <authentication xmlns="http://www.concur.com/webservice/auth">
    <userid>user</userid>
    <password>password</password>
    </authentication>
  </Header>
  <Body xmlns="http://schemas.xmlsoap.org/soap/envelope/">
   <OTA_HotelAvailRQ xmlns="http://www.opentravel.org/OTA/2003/05" EchoToken="test_request_id" Version="5" PrimaryLangID="de" AltLangID="de">
    <POS>
      <Source ISOCurrency="USD"></Source>
      <RequestorID Type="1" ID="1234567"></RequestorID>
    </POS>
    <AvailRequestSegments>
     <AvailRequestSegment>
      <HotelSearchCriteria>
       <Criterion>
        <HotelRef ChainCode="ZZ" HotelCode="111222"></HotelRef>
       </Criterion>
      </HotelSearchCriteria>
      <StayDateRange Start="2018-10-26" End="2018-10-27"></StayDateRange>
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
### Schema

#### OTA_HotelAvailRQ

| Element              | Required | Data Type |  Description |
|----------------------|----------|-----------|--------------|
| AvailRequestSegments | Y        | Complex   | A collection of AvailRequestSegment. Each segment includes a collection of criteria that requests a book-able entity, which may include designated rate plans, room types, amenities or services, and the request can be used for guest rooms or other inventory items for which availability is sought. Each segment would be presumed to have a unique date range for each request. SAP Concur will ever only ever send one AvailRequestSegments |

#### AvailRequestSegments

| Element             | Required | Data Type | Description |
|---------------------|----------|-----------|-------------|
| AvailRequestSegment | Y        | Complex   | To accommodate the ability to perform multiple requests within one message, the availability request contains the repeating element, AvailRequestSegment. Each segment includes a collection of criteria that requests a book-able entity, which may include designated rate plans, room types, amenities or services, and the request can be used for guest rooms or other inventory items for which availability is sought. Each segment would be presumed to have a unique date range for each request. SAP Concur will only ever send one AvailRequestSegment |

#### AvailRequestSegment

| Element             | Required | Data Type | Description |
|---------------------|----------|-----------|-------------|
| HotelSearchCriteria | Y        | Complex   | Specified hotel search criteria. SAP Concur will send only one HotelSearchCriteria. |
| StayDateRange       | N        | Complex   | Range of dates using ISO 8601. |


#### HotelSearchCriteria

| Element   | Required | Data Type | Description |
|-----------|----------|-----------|-------------|
| Criterion | Y        | Complex   | Refer to Criterion in Search.  Note that for Availability the Criterion will only have the HotelRef element. Other elements will not be sent. HotelSearchCriteria can contain multiple Criterion elements.  Each will have a unique HotelCode per Availability request.|

#### Criterion

| Element | Required | Data Type                | Description |
|---------|----------|-------------------       |-------------|
| *HotelCode* | N        | StringLength1to16 | The code that uniquely identifies a single hotel property. The hotel code is decided by vendors. |
| *ChainCode*   | N        | StringLength1to8 | The code that identifies a hotel chain or management group. The hotel chain code is decided between vendors. This attribute is optional if the hotel is an independent property that can be identified by the HotelCode attribute. |

#### StayDateRange

| Element | Required | Data Type                | Description |
|---------|----------|-------------------       |-------------|
| *Start* | Y        | DateOrTimeOrDateTimeType | The starting value of the time span. |
| *End*   | Y        | DateOrTimeOrDateTimeType | The ending value of the time span. |

#### RoomStayCandidates

| Element           | Required | Data Type | Description |
|-------------------|----------|-----------|-------------|
| RoomStayCandidate | Y        | Complex   | Element used to identify available room products. |

#### RoomStayCandidate

| Element     | Required | Data Type | Description |
|-------------|----------|-----------|-------------|
| GuestCounts | Y        | Complex   | **Please note: this field is currently being discussed with our partners as the plan to remove GuestCounts from OTA_HotelAvailRQ**. A collection of Guest Counts associated with Room Stay. |

#### GuestCounts

| Element    | Required | Data Type | Description |
|------------|----------|-----------|-------------|
| GuestCount | Y        | Complex   | **Please note: this element is planned to be removed** A recurring element that identifies the number of guests and ages of the guests. |

#### GuestCount

| Element             | Required | Data Type | Description |
|---------------------|----------|-----------|-------------|
| *Count*             | Y        | Int	     | SAP Concur only supports one Guest thus the value is currently hard-coded to '1'. |
| *AgeQualifyingCode* | Y        | Int       | The value is currently hard-coded to '10': AgeQualifyingCode="10" |
---

## <a name="response"></a>Response

The maximum allowed size of OTA_HotelAvailRS is 5 MB. Any response that exceeds this limit shall be dropped.

```xml
<soap:Envelope xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/">
  <SOAP-ENV:Header xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/"/>
  <soap:Body>
    <OTA_HotelAvailRS xmlns="http://www.opentravel.org/OTA/2003/05" xmlns:ns2="http://www.concur.com/webservice/auth" Version="5">
      <Success/>
      <RoomStays>
        <RoomStay>
          <RoomTypes>
            <RoomType RoomID="1">
              <RoomDescription>
                <Text>Test room description.</Text>
              </RoomDescription>
            </RoomType>
          </RoomTypes>
          <RatePlans>
            <RatePlan RatePlanID="XNFYP4I" AvailabilityStatus="AvailableForSale">
              <Guarantee>
                <Deadline AbsoluteDeadline="2017-01-26T18:00:00"/>
              </Guarantee>
              <CancelPenalties>
                <CancelPenalty>
                  <Deadline AbsoluteDeadline="2017-01-26T18:00:00"/>
                  <PenaltyDescription>
                    <Text>REFUNDABLE</Text>
                    <Text>test cancel description</Text>
                  </PenaltyDescription>
                </CancelPenalty>
              </CancelPenalties>
              <MealsIncluded Breakfast="true"/>
              <RatePlanDescription>
                <Text>Test rate plan description.</Text>
              </RatePlanDescription>
            </RatePlan>
          </RatePlans>
          <RoomRates>
            <RoomRate RoomID="1" RatePlanID="XNFYP4I">
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
                  </PaymentPolicies>
                <Total AmountAfterTax="199.00" AmountBeforeTax="99.00" CurrencyCode="EUR" DecimalPlaces="2"/>
                <RateDescription>
                  <Text>Test rate description. Both before and after tax.</Text>
                </RateDescription>
                <TPA_Extensions>
							  <RequireSeriesCode>true</RequireSeriesCode>
						  </TPA_Extensions>
              </Rate>
            </Rates>
          </RoomRate>
          <TimeSpan End="2018-10-27" Start="2018-10-26"/>
          <BasicPropertyInfo ChainCode="ZZ" HotelCode="419430"/>
        </RoomStay>
      </RoomStays>
    </OTA_HotelAvailRS>
  </soap:Body>
</soap:Envelope>
```

### Schema

#### OTA_HotelAvailRS

| Element   | Required | Data Type | Description |
|-----------|----------|-----------|-------------|
| RoomStays | Y        | Complex   | A collection of details on the Room Stay including Time Span of this Room Stay, and financial information related to the Room Stay, including Guarantee, Deposit and Payment and Cancellation Penalties. |

#### RoomStays

| Element  | Required | Data Type | Description |
|----------|----------|-----------|-------------|
| RoomStay | Y        | Complex   | Details on the Room Stay including Time Span of this Room Stay, and financial information related to the Room Stay, including Guarantee, Deposit and Payment and Cancellation Penalties. A Room stay represents exactly one hotel. |

#### RoomStay

For a description of the relationship between the RoomID and RatePlanID refer to "Relationship between RoomID and RatePlanID"

| Element           | Required | Data Type    | Description |
|-------------------|----------|--------------|-------------|
| RoomTypes         | Y        | Complex      | Details on the Room Stay including Guest Counts, Time Span of this Room Stay, pointers to Res Guests, guest Memberships, Comments and Special Requests pertaining to this particular Room Stay and finally financial information related to the Room Stay, including Guarantee, Deposit and Payment and Cancellation Penalties. |
| RatePlans         | Y        | Complex      | A collection of Rate Plans associated with a particular Room Stay. The rate plan element is used to contain all the rate information for a single Rate Plan Code (eg RACK) for a given date range. A given Rate Plan may have variable rates, over the effective period of the Rate Plan, this is represented by the child element Rates.|
| RoomRates         | Y        | Complex      | List of Room Rates. |
| TimeSpan          | Y        | DateTimeSpan | The Time Span which covers the Room Stay. The attributes of the OTA DateTimeSpan data type are based on the W3C base data types of timeInstant and timeDuration using ISO 8601. |
| BasicPropertyInfo | N        | Complex      | Property Information for the Room Stay. |

#### RoomTypes

| Element  | Required | Data Type | Description |
|----------|----------|-----------|-------------|
| RoomType | Y        | Complex   | Provides details regarding rooms, usually guest rooms. The Room Description text will be used for each room (defined as a RoomRate) which specifies the same RoomID.|

#### RoomType

| Element         | Required  | Data Type         | Description |
|-----------------|-----------|-------------------|-------------|
| *RoomID*        | Y         | StringLength1to16 | A string value representing the unique identification of a room if the request is looking for a specific room type. |
| RoomDescription | N         | Complex	          | Textual information regarding the room. |

#### RoomDescription

| Element | Required | Data Type         | Description |
|---------|----------|-------------------|-------------|
| Text    | Y        | StringLength1to32 | Only one text element is supported here.  If Multiple Text elements are specified the last one is used and all others are dropped. All text passed is encoded. |

#### RatePlans

| Element  | Required | Data Type | Description |
|----------|----------|-----------|-------------|
| RatePlan | Y        | Complex   | Defines the details of the rate plan as used in the booking process. Policies and descriptions that apply to a rate plan. Information significant to defining a rate plan. |

#### RatePlan

| Element              | Required | Data Type         | Description |
|----------------------|----------|-------------------|-------------|
| *RatePlanID*         | Y        | StringLength1to64 | A text field used to indicate a special  ID code that is associated with the rate and is essential in the reservation request in order to obtain the rate. Examples are Corporate ID. |
| *AvailabilityStatus* | Y        | StringLength1to32 | Used to specify an availability status for the rate plan. Currently SAP Concur supports "AvailableForSale" and "ChangeDuringStay" |
| Guarantee            | Y        | Complex           | Guarantee information that applies to the rate plan. SAP Concur only expects 1 Guarantee element per RatePlan |
| CancelPenalties      | Y        | Complex           | Collection of cancellation penalties. If the Cancel Penalties are not provided SAP Concur will display "Cancellation policy not provided by vendor" |
| MealsIncluded        | Y        | Complex           | Defines which meals are included with this rate program. SAP Concur expects this to be set. |

#### Guarantee

| Element         | Required | Data Type | Description |
|-----------------|----------|-----------|-------------|
| *GuaranteeType* | Y        | String    | The guarantee information to hold a reservation. |
| Deadline        | Y        | Complex   | Guarantee deadline, absolute or relative. |

#### Supported GuranteeTypes

| GuaranteeType     | Description |
|-------------------|-------------|  
| Deposit           | In SAP Concur this value is seen as RequiredDeposit. |
| DepositRequired   | In SAP Concur this value is seen as RequiredDeposit .|
| CC/DC/Voucher       | In SAP Concur this value is seen as RequiredGuarantee. |
| PrePay            | In SAP Concur this value is seen as RequiredPrepay. |
| None              | In SAP Concur this value is seen as Never. No guarantee is required if user books a room with this type. |
| GuaranteeRequired | RequiredGuarantee. If the Guarantee type cannot be mapped to any accepted type, it will be set to RequiredGuarantee, hence this value is the default. |

#### Supported GuaranteeRequired

GuaranteeRequired     | Description |
|-------------------|-------------|  
| always           | Guarantee is required all the time independently on deposit account setting. |
|never| Guarantee is never required. |
| default | Guarantee is required if no deposit account is set up. |

#### Deadline

| Element                | Required | Data Type          | Description |
|------------------------|----------|--------------------|-------------|
| *AbsoluteDeadline*     | Y        | TimeOrDateTimeType | Defines the absolute deadline. Either this or the offset attributes may be used. |

#### CancelPenalties

| Element       | Required | Data Type | Description |
|---------------|----------|-----------|-------------|
| CancelPenalty | Y        | Complex   | Defines the cancellation penalty of the hotel facility. |

#### CancelPenalty

| Element            | Required | Data Type | Description |
|--------------------|----------|-----------|-------------|
| PenaltyDescription | N        | Complex   | Text description of the Penalty in a given language. This element may contain a maximum of 9 children Text fields.  Any excess Text elements are dropped. |
| Deadline           | Y        | Complex   | Cancellation deadline, absolute or relative. See Deadline above |

#### PenaltyDescription

| Element | Required | Data Type             | Description |
|---------|----------|-----------------------|-------------|
| Text    | Y        | FormattedTextTextType | Formatted text content in a given language. |

#### MealsIncluded

| Element     | Required | Data Type | Description |
|-------------|----------|-----------|-------------|
| *Breakfast* | Y        | Boolean   | When true, indicates breakfast is included, when false, indicates it is excluded. In both cases this information is showed to a customer in the rate description. |

#### RoomRates

| Element  | Required | Data Type | Description |
|----------|----------|-----------|-------------|
| RoomRate | Y        | Complex   | Contains the rate details. |

#### RoomRate

| Element      | Required | Data Type | Description |
|--------------|----------|-----------|-------------|
| *RoomID*     | Y        | Complex   | Room Type ID.  The combination of RoomID and RatePlanID must be unique for a RoomStay. |
| *RatePlanID* | Y        | Complex   | Rate Plan ID for which this rate is applicable for. |
| Rates        | Y        | Complex   | Contains the rate for the given room.  SAP Concur only expects one Rate inside the Rates element. |

#### Rates

| Element | Required | Data Type | Description |
|---------|----------|-----------|-------------|
| Rate    | Y        | Complex   | Contains the rate for the given room. |

#### Rate

| Element           | Required | Data Type | Description |
|-------------------|----------|-----------|-------------|
| PaymentPolicies   | N        | Complex   | Payment Policies for this rate. |
| Total             | Y        | Complex   | A description of the rate. |
| RateDescription   | N        | Complex   | A textual description of a rate. At most, only one Rate Description element is expected. |
| TPA_extensions    | N        | Complex   | TPA extensions  for a rate. |

#### PaymentPolicies

| Element          | Required | Data Type | Description |
|------------------|----------|-----------|-------------|
| GuaranteePayment | N        | Complex   | Element containing the Guarantee Payment type |

#### GuaranteePayment

| Element          | Required | Data Type | Description |
|------------------|----------|-----------|-------------|
| AcceptedPayments | Y        | Complex   | If used, at least one AcceptedPayment should be present |

#### AcceptedPayments

| Element         | Required | Data Type | Description |
|-----------------|----------|-----------|-------------|
| AcceptedPayment | Y        | Complex   | Accepted Payment type |

#### AcceptedPayment

| Element     | Required | Data Type | Description |
|-------------|----------|-----------|-------------|
| PaymentCard | Y        | Complex   | Description of payment type. |

#### PaymentCard

| Element  | Required | Data Type | Description |
|----------|----------|-----------|-------------|
| CardType | Y        | String    | String representation of a Card Type eg Visa, Master Card, etc. |

#### Total

| Element           | Required | Data Type    | Description |
|-------------------|----------|--------------|-------------|
| *AmountBeforeTax* | Y        | String       | The total amount not including any associated tax  (e.g., sales tax, VAT, GST or any associated tax). |
| *AmountAFterTax*  | Y        | String       | The total amount including all associated taxes  (e.g., sales tax, VAT, GST or any associated tax). |
| *CurrencyCode*    | Y        | AlphaLength3 | Currency Code. |
| *DecimalPlaces*   | N        | Int          | Decimal places for currency code. Implementer: This is an ISO 4217 standard "minor unit" for the number of decimal places for a particular currency.|

#### RateDescription

| Element |	Required | Data Type         | Description |
|---------|----------|-------------------|-------------|
| Text    | Y        | StringLength1to32 | Text field. SAP Concur only expects one text field for the Rate Description. Any excess Text elements will be ignored. |

#### TPA_Extensions

| Element           | Required | Data Type | Description |
|-------------------|----------|-----------|-------------|
| RequireSeriesCode | Y        | Boolean   | Flag to indicate if the CVV code is required for the given rate. If used it must be set to either "true" or "false" |

#### Timespan

| Element | Required | Data Type                | Description |
|---------|----------|--------------------------|-------------|
| Start   | Y        | DateOrTimeOrDateTimeType | The starting value of the time span. |
| End     | Y        | DateOrTimeOrDateTimeType | The ending value of the time span. |

#### BasicPropertyInfo

| Element        | Required | Data Type | Description |
|----------------|----------|-----------|-------------|
| *HotelCode*    | Y        | Complex   | Refer to the HotelRef element described in Search. |
| Address        | N        | Complex   | Refer to Search. |
| ContactNumbers | N        | Complex   | Refer to Search. |

# <a name="relationship-roomid-rateplanid"></a>Relationship between RoomID and RatePlanID

The combination of these IDs must be unique per RoomStay.  IDs with the same values can be redefinined in multiple RoomStays

```xml
<OTA_HotelAvailRS>
  <Success/>
<!-- Hotel #1 with 3 rates -->
  <RoomStays>
    <RoomStay>
      <RoomTypes>
        <RoomType RoomID="RT1">...</RoomType>
        <RoomType RoomID="RT2">...</RoomType>
      </RoomTypes>
      <RatePlans> <!-- Contains cancellation policy info, guarantee type etc. -->
        <RatePlan AvailabilityStatus="AvailableForSale" PrepaidIndicator="false" RatePlanID="RP1">...</RatePlan>
        <RatePlan AvailabilityStatus="AvailableForSale" PrepaidIndicator="false" RatePlanID="RP2">...</RatePlan>
        <RatePlan AvailabilityStatus="AvailableForSale" PrepaidIndicator="false" RatePlanID="RP3">...</RatePlan>
      </RatePlans>
      <RoomRates> <!-- Represents unique rate (hotel room), contains description part 1, rate cost & supported credit card etc. -->
        <RoomRate RatePlanID="RP1" RoomID="RT1">...</RoomRate>
        <RoomRate RatePlanID="RP2" RoomID="RT2">...</RoomRate> <!-- Note: RT2 is reused in two Room Rates -->
        <RoomRate RatePlanID="RP3" RoomID="RT2">...</RoomRate>
      </RoomRates>
      ...
    </RoomStay>
<!-- Hotel #2 with 2 rates -->
  <RoomStays>
    <RoomStay>
      <RoomTypes>
        <RoomType RoomID="RT1">...</RoomType>
        <RoomType RoomID="RT2">...</RoomType>
      </RoomTypes>
      <RatePlans>
        <RatePlan AvailabilityStatus="AvailableForSale" PrepaidIndicator="false" RatePlanID="RP1">...</RatePlan>
        <RatePlan AvailabilityStatus="AvailableForSale" PrepaidIndicator="false" RatePlanID="RP2">...</RatePlan>
      </RatePlans>
      <RoomRates>
        <RoomRate RatePlanID="RP1" RoomID="RT1">...</RoomRate>
        <RoomRate RatePlanID="RP2" RoomID="RT2">...</RoomRate>
      </RoomRates>
      ...
    </RoomStay>
…
</OTA_HotelAvailRS>
```
