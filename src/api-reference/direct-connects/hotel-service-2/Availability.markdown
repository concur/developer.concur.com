---
title: Direct Connect - Hotel v2 - Availability
layout: reference
---

Message to retrieved the availability of hotels.

|SOAPAction|OTA Name|Message Structure|
|--------------|------------|-------------------|
|availability|HotelAvail|OTA_HotelAvailRQ|

---

* [Request](#request)
  * [Schema](#req-schema)
    * [Available Request Segments](#available-req-segments)
    * [Available Request Segment](#available-req-segment)
    * [Hotel Search Criteria](#hotel-search-criteria)
    * [Criterion](#criterion)
    * [Stay Date Range](#stay-date-range)
    * [Room Stay Candidates](#room-stay-cadidates)
    * [Room Stay Candidate](#room-stay-candidate)
    * [Guest Counts](#guest-counds)
    * [Guest Count](#guest-count)
* [Response](#response)
  * [Schema](#res-schema)
    * [Room Stays](#room-stays)
    * [Room Stay](#room-stay)
    * [Room Types](#room-types)
    * [Room Type](#room-type)
    * [Room Descriptions](#room-descriptions)
    * [Rate Plans](#rate-plans)
    * [Rate Plan](#rate-plan)
    * [Guarantee](#guarantee)
    * [Supported Guarantee Types](#supported-guarantee-types)
    * [Supported Guarantee Required](#supported-guarantee-required)
    * [Deadline](#deadline)
    * [Cancel Penalties](#cancel-penalties)
    * [Cancel Penalty](#cancel-penalty)
    * [Meals Included](#meal-included)
    * [Rooms Rates](#room-rates)
    * [Room Rate](#room-rate)
    * [Rates](#rates)
    * [Rate](#rate)
    * [Payment Policies](#payment-policies)
    * [Guarantee Payment](#guarantee-payment)
    * [Accepted Payments](#accepted-payments)
    * [Accepted Payment](#accepted-paytment)
    * [Payment Card](#payment-card)
    * [Total](#total)
    * [Rate Descriptions](#rate-descriptions)
    * [TPA Extensions](#tpa-extensions)
    * [Timespan](#timespan)
    * [Basic Property Info](#basic-property-info)
* [Relationship Between RoomID and RatePlanID](#relationship-roomid-rateplanid)

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
    <OTA_HotelAvailRQ xmlns="http://www.opentravel.org/OTA/2003/05" EchoToken="test_request_id" Version="5"
                      PrimaryLangID="de" AltLangID="de">
      <POS>
        <Source ISOCurrency="USD">
          <RequestorID Type="1" ID="1234567"></RequestorID>
        </Source>
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
          <TPA_Extensions>
            <SearchSessionToken>5EA6C45E55104704E4</SearchSessionToken>
          </TPA_Extensions>
        </AvailRequestSegment>
      </AvailRequestSegments>
    </OTA_HotelAvailRQ>
  </Body>
</Envelope>
```
### <a name="req-schema"></a>Schema

#### OTA_HotelAvailRQ

|Name|Type|Description|
|----------------------|-----------|--------------|
|`AvailRequestSegments`|`complex`|**Required** A collection of `AvailRequestSegment`. Each segment includes a collection of criteria that requests a bookable entity, which may include designated rate plans, room types, amenities or services. The request can be used for guest rooms or other inventory items for which availability is sought. Each segment will be presumed to have a unique date range for each request. SAP Concur will only ever send one `AvailRequestSegments`.|

#### <a name="available-request-segments"></a>AvailRequestSegments

|Name|Type|Description|
|---------------------|-----------|-------------|
|`AvailRequestSegment`|`complex`|**Required** To accommodate the ability to perform multiple requests within one message, the availability request contains the repeating element, `AvailRequestSegment`. Each segment includes a collection of criteria that requests a bookable entity, which may include designated rate plans, room types, amenities or services. The request can be used for guest rooms or other inventory items for which availability is sought. Each segment will be presumed to have a unique date range for each request. SAP Concur will only ever send one `AvailRequestSegment`.|

#### <a name="available-request-segment"></a>AvailRequestSegment

|Name|Type|Description|
|---------------------|-----------|-------------|
|`HotelSearchCriteria`|`complex`|**Required** Specified hotel search criteria. SAP Concur will send only one (1) `HotelSearchCriteria`.|
|`StayDateRange`|`complex`|Range of dates using ISO 8601.|
|`TPA_Extensions/SearchSessionToken`|`stringLength1to128`|The token obtained from [Search](/api-reference/direct-connects/hotel-service-2/Search.html) response that links the Search results to [Availability](#request) and [Reservation](/api-reference/direct-connects/hotel-service-2/Reservation.html) requests.|

#### <a name="hotel-search-criteria"></a>HotelSearchCriteria

|Name|Type|Description|
|-----------|-----------|-------------|
|`Criterion`|`complex`|**Required** Refer to `Criterion` in [Search](/api-reference/direct-connects/hotel-service-2/Search.html). Note that for Availability the `Criterion` will only have the `HotelRef` element. Other elements will not be sent. `HotelSearchCriteria` can contain multiple `Criterion` elements. Each will have a unique `HotelCode` per Availability request.|

#### <a name="criterion"></a>Criterion

|Name|Type|Description|
|---------|------------------|-------------|
|`HotelCode`|`stringLength1to16`|The code that uniquely identifies a single hotel property. The hotel code is decided by vendors.|
|`ChainCode`|`stringLength1to8`|The code that identifies a hotel chain or management group. The hotel chain code is decided between vendors. This attribute is optional if the hotel is an independent property that can be identified by the `HotelCode` attribute.|

#### <a name="stay-date-range"></a>StayDateRange

|Name|Type|Description|
|---------|-------------------|-------------|
|`Start`|`date`, or `time`, or `datetime`|**Required** The starting value of the time span.|
|`End`|`date`, or `time`, or `datetime`|**Required** The ending value of the time span.|

#### <a name="room-stay-candidates"></a>RoomStayCandidates

|Name|Type|Description|
|-------------------|-----------|-------------|
|`RoomStayCandidate`|`complex`|**Required** Element used to identify available room products.|

#### <a name="room-stay-candidate"></a>RoomStayCandidate

|Name|Type|Description|
|-------------|-----------|-------------|
|`GuestCounts`|`complex`|**Required** A collection of guest counts associated with room stay.|

#### <a name="guest-counts"></a>GuestCounts

|Name|Type|Description|
|------------|-----------|-------------|
|`GuestCount`|`complex`|**Required** A recurring element that identifies the number of guests and ages of the guests. It currently contains hardcoded values only. See `GuestCount` below. |

#### <a name="guest-count"></a>GuestCount

|Name|Type|Description|
|---------------------|-----------|-------------|
|`Count`|`integer`|**Required** SAP Concur only supports one guest. Supported values: `1` |
|`AgeQualifyingCode`|`integer`|**Required** Supported values: `10` |

---

## <a name="response"></a>Response

The maximum allowed size of `OTA_HotelAvailRS` is 5 MB. Any response that exceeds this limit shall be dropped.

```xml
<soap:Envelope xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/">
  <SOAP-ENV:Header xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/"/>
  <soap:Body>
    <OTA_HotelAvailRS xmlns="http://www.opentravel.org/OTA/2003/05" Version="5">
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
          </RoomRates>
          <TimeSpan End="2018-10-27" Start="2018-10-26"/>
          <BasicPropertyInfo ChainCode="ZZ" HotelCode="419430"/>
        </RoomStay>
      </RoomStays>
    </OTA_HotelAvailRS>
  </soap:Body>
</soap:Envelope>
```

### <a name="res-schema"></a>Schema

#### OTA_HotelAvailRS

|Name|Type|Description|
|-----------|-----------|-------------|
|`RoomStays`|`complex`|**Required** A collection of details on the room stay including time span of this room stay, and financial information related to the room stay, including guarantee, deposit, payment, and cancellation penalties.|

#### <a name="room-stays"></a>RoomStays

|Name|Type|Description|
|----------|-----------|-------------|
|`RoomStay`|`complex`|**Required** Details on the room stay including time span of this room stay, and financial information related to the room stay, including guarantee, deposit, payment, and cancellation penalties. A room stay represents one (1) hotel.|

#### <a name="room-stay"></a>RoomStay

For a description of the relationship between the `RoomID` and `RatePlanID` refer to "Relationship between RoomID and RatePlanID".

|Name|Type|Description|
|-------------------|--------------|-------------|
|`RoomTypes`|`complex`|**Required** Details on the room stay including guest counts, time span of this room stay, pointers to res guests, guest memberships, comments, and special requests pertaining to this particular room stay. Financial information related to the room stay, including guarantee, deposit, payment, and cancellation penalties.|
|`RatePlans`|`complex`|**Required** A collection of rate plans associated with a particular room stay. The rate plan element is used to contain all the rate information for a single rate plan Code (example: `RACK`) for a given date range. A given rate plan may have variable rates, over the effective period of the rate plan, this is represented by the child element rates.|
|`RoomRates`|`complex`|**Required** List of room rates.|
|`TimeSpan`|`datetimespan` |**Required** The time span which covers the room stay. The attributes of the OTA `DateTimeSpan` data type are based on the W3C base data types of `timeInstant` and `timeDuration` using ISO 8601.|
|`BasicPropertyInfo`|`complex`|Property Information for the room stay.|

#### <a name="room-types"></a>RoomTypes

|Name|Type|Description|
|----------|-----------|-------------|
|`RoomType`|`complex`|**Required** Provides details regarding rooms, usually guest rooms. The room description text will be used for each room (defined as a `RoomRate`) which specifies the same `RoomID`.|

#### <a name="room-type"></a>RoomType

|Name|Type|Description|
|-----------------|-------------------|-------------|
|`RoomID`|`stringLength1to16`|**Required** A string value representing the unique identification of a room if the request is looking for a specific room type.|
|`RoomDescription`|`complex`|Textual information regarding the room.|

#### <a name="room-description"></a>RoomDescription

|Name|Type|Description|
|---------|-------------------|-------------|
|`Text`|`stringLength1to32`|**Required** Only one (1) text element is supported. If multiple text elements are specified, the last one is used and all others are dropped. All text passed is encoded.|

#### <a name="rate-plans"></a>RatePlans

|Name|Type|Description|
|----------|-----------|-------------|
|`RatePlan`|`complex`|**Required** Defines the details of the rate plan as used in the booking process. Policies and descriptions that apply to a rate plan. Information significant to defining a rate plan.|

#### <a name="rate-plan"></a>RatePlan

|Name|Type|Description|
|----------------------|-------------------|-------------|
|`RatePlanID`|`stringLength1to64`|**Required** A text field used to indicate a special ID code that is associated with the rate and is essential in the reservation request in order to obtain the rate. Examples: Corporate ID.|
|`AvailabilityStatus`|`stringLength1to32`|**Required** Used to specify an availability status for the rate plan. Supported values: `AvailableForSale`, `ChangeDuringStay`|
|`Guarantee`|`complex`|**Required** Guarantee information that applies to the rate plan. SAP Concur only expects one (1) Guarantee element per `RatePlan`.|
|`CancelPenalties`|`complex`|**Required** Collection of cancellation penalties. If the cancel penalties are not provided SAP Concur will display: "Cancellation policy not provided by vendor".|
|`MealsIncluded`|`complex`|**Required** Defines which meals are included with this rate program.|

#### <a name="guarantee"></a>Guarantee

|Name|Type|Description|
|-----------------|-----------|-------------|
|`GuaranteeType`|`string`|**Required** The guarantee information to hold a reservation.|
|`Deadline`|`complex`|**Required** Guarantee deadline, absolute or relative.|

#### <a name="supported-guarantee-types"></a>Supported GuaranteeTypes

|GuaranteeType|Description|
|-------------------|-------------|  
|`Deposit`|In SAP Concur this value is seen as `RequiredDeposit`.|
|`DepositRequired`|In SAP Concur this value is seen as `RequiredDeposit`.|
|`CC/DC/Voucher`|In SAP Concur this value is seen as `RequiredGuarantee`.|
|`PrePay`|In SAP Concur this value is seen as `RequiredPrepay`.|
|`None`|In SAP Concur this value is seen as `Never`. No guarantee is required if user books a room with this type.|
|`GuaranteeRequired`|`RequiredGuarantee`. If the Guarantee type cannot be mapped to any accepted type, it will be set to `RequiredGuarantee`. This value is the default.|

#### <a name="supported-gurantee-required"></a>Supported GuaranteeRequired

|GuaranteeRequired|Description|
|-------------------|-------------|  
|`always`|Guarantee is required all the time independently on deposit account setting.|
|`never`|Guarantee is never required.|
|`default`|Guarantee is required if no deposit account is set up.|

#### <a name="deadline"></a>Deadline

|Name|Type|Description|
|------------------------|--------------------|-------------|
|`AbsoluteDeadline`|`time` or `datetime` |**Required** Defines the absolute deadline. Either this or the offset attributes may be used.|

#### <a name="cancel-penalties"></a>CancelPenalties

|Name|Type|Description|
|---------------|-----------|-------------|
|`CancelPenalty`|`complex`|**Required** Defines the cancellation penalty of the hotel facility.|

#### <a name="cancel-penalty"></a>CancelPenalty

|Name|Type|Description|
|--------------------|-----------|-------------|
|`PenaltyDescription`|`complex`|Text description of the penalty in a given language. This element may contain a maximum of 9 children text fields. Any excess text elements are dropped.|
|`Deadline`|`complex`|**Required** Cancellation deadline, absolute or relative. See Deadline above.|

#### <a name="penalty-description"></a>PenaltyDescription

|Name|Type|Description|
|---------|----------|-----------------------|
|`Text`|`formattedText`|**Required** Formatted text content in a given language.|

#### <a name="meals-included"></a>MealsIncluded

|Name|Type|Description|
|-------------|-----------|-------------|
|`Breakfast`|`boolean`|**Required** If `true`, indicates breakfast is included. If `false`, indicates it is excluded. In both cases this information is shown to a customer in the rate description.|

#### <a name="room-rates"></a>RoomRates

|Name|Type|Description|
|----------|-----------|-------------|
|`RoomRate`|`complex`|**Required** Contains the rate details.|

#### <a name="room-rate"></a>RoomRate

|Name|Type|Description|
|--------------|-----------|-------------|
|`RoomID`|`complex`|**Required** Room Type ID. The combination of `RoomID` and `RatePlanID` must be unique for a `RoomStay`.|
|`RatePlanID`|`complex`|**Required** Rate plan ID for which this rate is applicable for.|
|`Rates`|`complex`|**Required** Contains the rate for the given room.  SAP Concur only expects one (1) rate inside the `Rates` element.|

#### <a name="rates"></a>Rates

|Name|Type|Description|
|---------|-----------|-------------|
|`Rate`|`complex`|**Required** Contains the rate for the given room.|

#### <a name="rate"></a>Rate

|Name|Type|Description|
|-------------------|-----------|-------------|
|`PaymentPolicies`|`complex`|Payment policies for this rate.|
|`Total`|`complex`|**Required** A description of the rate.|
|`RateDescription`|`complex`|A textual description of a rate. Only one (1) Rate Description element is expected.|
|`TPA_extensions`|`complex`|TPA extensions for a rate.|

#### <a name="payment-policies"></a>PaymentPolicies

|Name|Type|Description|
|------------------|-----------|-------------|
|`GuaranteePayment`|`complex`|Element containing the guarantee payment type.|

#### <a name="guarantee-payment"></a>GuaranteePayment

|Name|Type|Description|
|------------------|-----------|-------------|
|`AcceptedPayments`|`complex`|**Required** If used, at least one (1) `AcceptedPayment` should be present.|

#### <a name="accepted-payments"></a>AcceptedPayments

|Name|Type|Description|
|-----------------|-----------|-------------|
|`AcceptedPayment`|`complex`|**Required** Accepted payment type.|

#### <a name="accepted-payment"></a>AcceptedPayment

|Name|Type|Description|
|-------------|-----------|-------------|
|`PaymentCard`|`complex`|**Required** Description of payment type.|

#### <a name="payment-card"></a>PaymentCard

|Name|Type|Description|
|----------|-----------|-------------|
|`CardType`|`string`|**Required** String representation of a card type. Examples: `Visa`, `MasterCard`|

#### <a name="total"></a>Total

|Name|Type|Description|
|-------------------|--------------|-------------|
|`AmountBeforeTax`|`string`|**Required** The total amount not including any associated tax. Examples: `sales tax`, `VAT`, `GST`|
|`AmountAfterTax`|`string`|**Required** The total amount including all associated taxes. Examples: `sales tax`, `VAT`, `GST`|
|`CurrencyCode`|`alphaLength3`|**Required** Currency code.|
|`DecimalPlaces`|`integer`|Decimal places for currency code. This is an ISO 4217 standard "minor unit" for the number of decimal places for a particular currency.|

#### <a name="rate-description"></a>RateDescription

|Name|Type|Description|
|---------|-------------------|-------------|
|`Text`|`stringLength1to32`|**Required** SAP Concur only expects one (1) text field for the rate description. Any excess text elements will be ignored.|

#### <a name="tpa-extensions"></a>TPA_Extensions

|Name|Type|Description|
|-------------------|-----------|-------------|
|`RequireSeriesCode`|`boolean`|**Required** If `true`, the CVV code is required for the given rate.|

#### <a name="timespan"></a>Timespan

|Name|Type|Description|
|---------|--------------------------|-------------|
|`Start`|`date`, `time`, or `datetime`|**Required** The starting value of the time span.|
|`End`|`date`, `time`, or `datetime`|**Required** The ending value of the time span.|

#### <a name="basic-property-info"></a>BasicPropertyInfo

|Name|Type|Description|
|----------------|-----------|-------------|
|`HotelCode`|`complex`|**Required** Refer to the `HotelRef` element described in [Search](/api-reference/direct-connects/hotel-service-2/Search.html).|
|`Address`|`complex`|Refer to [Search](/api-reference/direct-connects/hotel-service-2/Search.html).|
|`ContactNumbers`|`complex`|Refer to [Search](/api-reference/direct-connects/hotel-service-2/Search.html).|

# <a name="relationship-roomid-rateplanid"></a>Relationship between RoomID and RatePlanID

The combination of these IDs must be unique per `RoomStay`.  IDs with the same values can be redefined in multiple `RoomStays`.

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
  </RoomStays>
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
  </RoomStays>
  ...
</OTA_HotelAvailRS>
```
