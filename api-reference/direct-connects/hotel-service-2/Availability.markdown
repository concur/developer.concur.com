---
title: Availability 
layout: reference
---

# Availablity

Message to retrieved the availability of hotels

| SOAPAction   | OTA name   | Message structure | 
|--------------|------------|-------------------|
| availability | HotelAvail | OTA_HotelAvailRQ  |

---

## Request

**OTA_HotelAvailRQ**

| Element              | Required | Data Type |  Description |
|----------------------|----------|-----------|--------------|
| AvailRequestSegments | Y        | Complex   | A collection of AvailRequestSegment. Each segment includes a collection of criteria that requests a book-able entity, which may include designated rate plans, room types, amenities or services, and the request can be used for guest rooms or other inventory items for which availability is sought. Each segment would be presumed to have a unique date range for each request. Concur will ever only ever send one AvailRequestSegments |


**AvailRequestSegments**

| Element             |	Required | Data Type | Description |
|---------------------|----------|-----------|-------------|
| AvailRequestSegment | Y        | Complex   | To accommodate the ability to perform multiple requests within one message, the availability request contains the repeating element, AvailRequestSegment. Each segment includes a collection of criteria that requests a book-able entity, which may include designated rate plans, room types, amenities or services, and the request can be used for guest rooms or other inventory items for which availability is sought. Each segment would be presumed to have a unique date range for each request. Concur will only ever send one AvailRequestSegment |


**AvailRequestSegment**

| Element             |	Required | Data Type | Description |
|---------------------|----------|-----------|-------------|
| HotelSearchCriteria | Y        | Complex   | Specified hotel search criteria. Concur will ever only ever send one HotelSearchCriteria. |
| StayDateRange       | N        | Complex   | Refer to StayDateRange in Search. |
| RoomStayCandidates  | N        | Complex   | List of available room products. |


**HotelSearchCriteria**

| Element   | Required | Data Type | Description |
|-----------|----------|-----------|-------------|
| Criterion | Y        | Complex   | Refer to Criterion in Search.  Note that for Availability the Criterion will only have the HotelRef element. Other elements will not be sent. HotelSearchCriteria can contain multiple Criterion elements.  Each will have a unique HotelCode per Availability request. **we will not be sending this.  Spec to be changed** |


**RoomStayCandidates**

| Element           | Required | Data Type | Description |
|-------------------|----------|-----------|-------------|
| RoomStayCandidate | Y        | Complex   | Element used to identify available room products. |


**RoomStayCandidate**

| Element     |	Required | Data Type | Description |
|-------------|----------|-----------|-------------|
| *Quantity*  | Y        | Int	     | something **to be removed** |
| GuestCounts | Y        | Complex	 | A collection of Guest Counts associated with Room Stay. **A child Guest Count element is required for each distinct age group. - the note about a child is unnessesary**|


**GuestCounts**

| Element    | Required | Data Type | Description |
|------------|----------|-----------|-------------|
| GuestCount | Y        | Complex   | A recurring element that identifies the number of guests and ages of the guests. |


**GuestCount**

| Element             | Required | Data Type | Description |
|---------------------|----------|-----------|-------------|
| *Count*             | Y        | Int	     | Concur only supports one Guest. |
| *AgeQualifyingCode* | Y        | Int       | AgeQualifyingCode="10" **we don't need this, do we?**|


---


## Response

**OTA_HotelAvailRS**

| Element   | Required | Data Type | Description |
|-----------|----------|-----------|-------------|
| RoomStays | Y        | Complex   | A collection of details on the Room Stay including Guest Counts, Time Span of this Room Stay, and financial information related to the Room Stay, including Guarantee, Deposit and Payment and Cancellation Penalties. |


**RoomStays**

| Element  | Required | Data Type | Description |
|----------|----------|-----------|-------------|
| RoomStay | Y        | Complex   | Details on the Room Stay including Guest Counts, Time Span of this Room Stay, and financial information related to the Room Stay, including Guarantee, Deposit and Payment and Cancellation Penalties. A Room stay represents exactly one hotel. |


**RoomStay**

For a description of the relationship between the RoomID and RatePlanID refer to "Relationship between RoomID and RatePlanID"

| Element           | Required | Data Type | Description |
|-------------------|----------|-----------|-------------|
| RoomTypes         | Y        | Complex      | Details on the Room Stay including Guest Counts, Time Span of this Room Stay, pointers to Res Guests, guest Memberships, Comments and Special Requests pertaining to this particular Room Stay and finally financial information related to the Room Stay, including Guarantee, Deposit and Payment and Cancellation Penalties. |
| RatePlans         | Y        | Complex      | A collection of Rate Plans associated with a particular Room Stay. The rate plan element is used to contain all the rate information for a single Rate Plan Code (eg RACK) for a given date range. A given Rate Plan may have variable rates, over the effective period of the Rate Plan, this is represented by the child element Rates.|
| RoomRates         | Y        | Complex      | List of Room Rates. |
| TimeSpan          | Y        | DateTimeSpan | The Time Span which covers the Room Stay. The attributes of the OTA DateTimeSpan data type are based on the W3C base data types of timeInstant and timeDuration using ISO 8601. |
| BasicPropertyInfo | N        | Complex      | Property Information for the Room Stay. |


**RoomTypes**

| Element  | Required | Data Type | Description |
|----------|----------|-----------|-------------|
| RoomType | Y        | Complex   | Provides details regarding rooms, usually guest rooms. The Room Description text will be used for each room (defined as a RoomRate) which specifies the same RoomID.|


**RoomType**

| Element         |	Required  | Data Type         | Description |
|-----------------|-----------|-------------------|-------------|
| *RoomID*        | Y         | StringLength1to16 | A string value representing the unique identification of a room if the request is looking for a specific room type. |
| RoomDescription | N         | Complex	          | Textual information regarding the room. |
| Amenities       | N         | Complex           | Currently not implemented. |


**RoomDescription**

| Element |	Required | Data Type 	     | Description |
|---------|----------|-------------------|-------------|
| Text    | Y        | StringLength1to32 | Only one text element is supported here.  If Multiple Text elements are specified the the last one is used and all others are dropped. All text passed is encoded. |


**RatePlans**

| Element  | Required | Data Type | Description |
|----------|----------|-----------|-------------|
| RatePlan | Y        | Complex   | Defines the details of the rate plan as used in the booking process. Policies and descriptions that apply to a rate plan. Information significant to defining a rate plan. |


**RatePlan**

| Element              | Required | Data Type         | Description |
|----------------------|----------|-------------------|-------------|
| *RatePlanID*         | Y        | StringLength1to64 | A text field used to indicate a special  ID code that is associated with the rate and is essential in the reservation request in order to obtain the rate. Examples are Corporate ID. |
| *AvailabilityStatus* | Y        | StringLength1to32 | If hotel is sold out, the Hotel supplier must return an Availability status of ClosedOut. **Even if it's sold out what other fields do we need? if any?**  |
| *PrepaidIndicator*   | Y        | Boolean	          | When true, indicates if the rate is a pre-paid rate. **false otherwise or ignored?**|
| Guarantee            | Y        | Complex	          | Guarantee information that applies to the rate plan. Concur only expects 1 Guarantee element per RatePlan |
| CancelPenalties      | Y        | Complex	          | Collection of cancellation penalties. If the Cancel Penalties are not provided Concur will display "Cancellation policy not provided by vendor" |
| MealsIncluded        | Y        | Complex	          | Defines which meals are included with this rate program. Concur expects this to be set. |


**Guarantee**

| Element         |	Required | Data Type | Description |
|-----------------|----------|-----------|-------------|
| *NonRefundable* | Y        | Boolean	 | Indicates that any pre-payment for the reservation is non refundable, therefore a 100% penalty on the pre-payment is applied, irrespective of deadline. **Do we need this? is it required?**|
| *HoldTime*      | N        | Time	     | The room will held up until this time without a guarantee. **Do we need this? is it required?** **to be removed**|
| *GuaranteeType* | Y        | String    | The guarantee information to hold a reservation. |
| Deadline        | Y        | Complex	 | Guarantee deadline, absolute or relative. |

Supported GuranteeTypes:

| GuaranteeType     | Description |
|-------------------|-------------|  
| Deposit           | In Concur this value is seen as RequiredDeposit. |
| DepositRequired   | In Concur this value is seen as RequiredDeposit .|
| CCDCVoucher       | In Concur this value is seen as RequiredGuarantee. |
| PrePay            | In Concur this value is seen as RequiredPrepay. |
| GuaranteeRequired | RequiredGuarantee. If the Guarantee type cannot be mapped to any accepted type, it will be set to RequiredGuarantee, hence this value is the default. |
 
  
**Deadline**

| Element                | Required | Data Type	| Description |
|------------------------|----------|---------------------------|-|
| *AbsoluteDeadline*     | Y        | TimeOrDateTimeType	| Defines the absolute deadline. Either this or the offset attributes may be used. |
| *OffsetDropTime*       | Y        | String	| An enumerated type indicating when the deadline drop time goes into effect. Possible values include: "BeforeArrival", "AfterBooking", "AfterConfirmation" **to be removed**|
| *OffsetTimeUnit*       | Y        | TimeUnitType	| he units of time, e.g.: days, hours, etc., that apply to the deadline. **to be removed**|
| *OffsetUnitMultiplier* | Y        | Numeric0to999	| The number of units of DeadlineTimeUnit. **to be removed**|


**CancelPenalties**

| Element       | Required | Data Type | Description |
|---------------|----------|-----------|-----------|
| CancelPenalty | Y        | Complex   | The Cancellation penalty. |


**CancelPenalty**

| Element            | Required | Data Type | Description |
|--------------------|----------|-----------|-------------|
| *NonRefundable*    | N        | Boolean	| Indicates that any pre-payment for the reservation is non refundable, therefore a 100% penalty on the pre-payment is applied, irrespective of deadline. **to be removed**|
| PenaltyDescription | N        | Complex   | Text description of the Penalty in a given language. This element may contain a maximum of 9 children Text fields.  Any excess Text elements are dropped. |
| Deadline           | Y        | Complex   | Cancellation deadline, absolute or relative. See Deadline above |


**PenaltyDescription**

| Element |	Required | Data Type 	         | Description |
|---------|----------|-----------------------|-------------|
| Text    | Y        | FormattedTextTextType | Formatted text content |


**MealsIncluded**

| Element     |	Required | Data Type | Description |
|-------------|----------|-----------|-------------|
| *Breakfast* | Y        | Boolean	 | When true, indicates breakfast is included. |
| *Dinner*    | Y        | Boolean   | When true, indicates dinner is included. |
| *Lunch*     | Y        | Boolean   | When true, indicates lunch is included. |


**RoomRates**

| Element  | Required | Data Type | Description |
|----------|----------|-----------|-------------|
| RoomRate | Y        | Complex   | Contains the rate details. |


**RoomRate**

| Element      | Required | Data Type | Description |
|--------------|----------|-----------|-------------|
| *RoomID*     | Y        | Complex   | Room Type ID.  The combination of RoomID and RatePlanID must be unique for a RoomStay. |
| *RatePlanID* | Y        | Complex   | Rate Plan ID for which this rate is applicable for. |
| Rates        | Y        | Complex	  | Contains the rate for the given room.  Concur only expects one Rate inside the Rates element. |


**Rates**

| Element |	Required | Data Type | Description |
|---------|----------|-----------|-------------|
| Rate    | Y        | Complex   | Contains the rate for the given room. |


**Rate**

| Element           | Required | Data Type | Description |
|-------------------|----------|-----------|-------------|
| *ChargeType*      | N        | Complex   | **to be removed** |
| *GuaranteedInd*   | N        | Complex   | **to be removed** |
| *NumberOfUnits*   | N        | Complex   | **to be removed** |
| *RateTimeUnit*    | N        | Complex   | **to be removed** |
| *RoomPricingType* | N        | Complex   | **to be removed** |
| *UnitMultiplier*  | N        | Complex   | **to be removed** |
| PaymentPolicies   | N        | Complex   | Payment Policies for this rate. |
| Total             | Y        | Complex   | A description of the rate. |
| RateDescription   | N        | Complex   | A textual description of a rate. At most, only one Rate Description element is expected. |
| TPA_extensions    | N        | Complex   | TPA extensions  for a rate. |


**PaymentPolicies**

| Element          | Required | Data Type | Description |
|------------------|----------|-----------|-------------|
| GuaranteePayment | N        | Complex   | Element containing the Guarantee Payment type |


**GuaranteePayment**

| Element          | Required | Data Type | Description |
|------------------|----------|-----------|-------------|
| AcceptedPayments | Y        | Complex   | If used, at least one AcceptedPayment should be present |


**AcceptedPayments**

| Element         |	Required | Data Type | Description |
|-----------------|----------|-----------|-------------|
| AcceptedPayment | Y        | Complex	 | Accepted Payment type |


**AcceptedPayment**

| Element     |	Required | Data Type | Description |
|-------------|----------|-----------|-------------|
| PaymentCard | Y        | Complex	 | Description of payment type. |


**PaymentCard**

| Element  | Required | Data Type | Description |
|----------|----------|-----------|-------------|
| CardType | Y        | String    | String representation of a Card Type eg Visa, Master Card, etc. |


**Total**

| Element           | Required | Data Type    | Description | 
|-------------------|----------|--------------|-------------|
| *AmountBeforeTax* | Y        | String       | The total amount not including any associated tax  (e.g., sales tax, VAT, GST or any associated tax). |
| *AmountAFterTax*  | Y        | String	      | The total amount including all associated taxes  (e.g., sales tax, VAT, GST or any associated tax). |
| *CurrencyCode*    | Y        | AlphaLength3 | Currency Code. |
| *DecimalPlaces*   | N        | Int	      | Decimal places for currency code. Implementer: This is an ISO 4217 standard "minor unit" for the number of decimal places for a particular currency.|


**RateDescription**

| Element |	Required | Data Type         | Description |
|---------|----------|-------------------|-------------|
| Text    | Y        | StringLength1to32 | Text field. Concur only expects one text field for the Rate Description. Any excess Text elements will be ignored. |


**TPA_Extensions**

| Element           | Required | Data Type | Description |
|-------------------|----------|-----------|-------------|
| RequireSeriesCode | Y        | Boolean   | Flag to indicate if the CVV code is required for the given rate. If used it must be set to either "true" or "false" |


**Timespan**

| Element |	Required | Data Type 	            | Description |
|---------|----------|--------------------------|-------------|
| Start   | Y        | DateOrTimeOrDateTimeType | The starting value of the time span. |
| End     | Y        | DateOrTimeOrDateTimeType | The ending value of the time span. |


**BasicPropertyInfo**

| Element        | Required | Data Type | Description |
|----------------|----------|-----------|-------------|
| *HotelCode*    | Y        | Complex   | Refer to the HotelRef element described in Search. |
| Address        | N        | Complex   | Refer to Search. |
| ContactNumbers | N        | Complex   | Refer to Search. |



# Relationship between RoomID and RatePlanID 

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


