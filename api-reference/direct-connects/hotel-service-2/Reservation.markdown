---
title: Reservation
layout: reference
---

# Reservation Message

Message to reserve a hotel.


|  SOAPAction |	OTA name | Message structure | 
|----------|-----------|---------------------|
| book | HotelRes | OTA_HotelResRQ |

---

## Request

**OTA_HotelResRQ**

|  Element |	Required | Data Type 	|  Description |
|----------|-----------|---------------------------|-|
| HotelReservations | Y | ComplexType | Concur will only ever send one Hotel Reservation. |


**HotelReservation**

|  Element |	Required | Data Type 	|  Description |
|----------|-----------|---------------------------|-|
| RoomStays | Y | ComplexType	| A reference to identify the booking |
| ResGuests | Y | ComplexType | List of Guests.  Concur only supports one guest |


**RoomStays**

|  Element |	Required | Data Type 	|  Description |
|----------|-----------|---------------------------|-|
| RatePlans | Y | ComplexType	| Refer to RatePlans in Availability |
| Timespan | Y | ComplexType | Refer to Time-span in Availability |
| BasicPropertyInfo | Y | ComplexType | See Availability |
| Comments | N | ComplexType | Comments from the user which are passed on to the hotel. |


**RatePlan**

|  Element |	Required | Data Type 	|  Description |
|----------|-----------|---------------------------|-|
| Guarantee | Y | ComplexType	| Refer to Guarantee in Availability |


**Guarantee**

|  Element |	Required | Data Type 	|  Description |
|----------|-----------|---------------------------|-|
| *GuaranteeType* | Y | StringLength1to32	| Refer to GuaranteeType in Availability |
| GuaranteesAccepted | Y | ComplexType | something |


**GuaranteesAccepted**

|  Element |	Required | Data Type 	|  Description |
|----------|-----------|---------------------------|-|
| *Default* | N | Boolean	|  |
| *NoCardHolderInfoReqInd* | N | Boolean	|  |
| *NameReqInd* | N | Boolean	|  |
| *AddressReqInd* | N | Boolean	|  |
| *PhoneReqInd* | N | Boolean	|  |
| *InterbankNbrReqInd* | N | Boolean	|  |
| PaymentCard | Y | ComplexType	| see Payment Card in Availability |


**PaymentCard**

|  Element |	Required | Data Type 	|  Description |
|----------|-----------|---------------------------|-|
| CardType | Y | StringLength1to32	| something |
| CardHolderName | Y | StringLength1to32	| The name on the card |
| CardNumber | Y | ComplexType	| The Card Number |


**CardNumber**

|  Element |	Required | Data Type 	|  Description |
|----------|-----------|---------------------------|-|
| PlainText | Y | StringLength1to32	| The card number.  Only one element of this type is sent.|


**Comments**

|  Element |	Required | Data Type 	|  Description |
|----------|-----------|---------------------------|-|
| Comment | Y | ComplexType	| Concur will send one Text Element per Comment element. |


**Comment**

|  Element |	Required | Data Type 	|  Description |
|----------|-----------|---------------------------|-|
| Text | Y | String	| Text representing the comment. |


**Text**

|  Element |	Required | Data Type 	|  Description |
|----------|-----------|---------------------------|-|
| *TextFormat* | Y | StringLength1to32	| Set to "Plain Text" |


**ResGuest**

|  Element |	Required | Data Type 	|  Description |
|----------|-----------|---------------------------|-|
| Profiles | Y | ComplexType	| List of Profiles. Concur will only ever send on profile. |
| GuestCounts | Y | ComplexType	| Refer to GetCounts in Availability.  |


**Profile**

|  Element |	Required | Data Type 	|  Description |
|----------|-----------|---------------------------|-|
| Customer | Y | ComplexType | Element to describer a Customer. |
| CompanyInfo | N | ComplexType	| Element to capture the company name. |


**Customer**

|  Element |	Required | Data Type 	|  Description |
|----------|-----------|---------------------------|-|
| Gender | N | String | Gender.  Concur will send either, "Male", "Female", "Unknown", "Male_NoShare", "Female_NoShare" |
| BirthDate | N | Date | Customer's birthday. |
| PersonName | N | ComplexType | Element representing a Customers name |
| Telephone | N | ComplexType	| Element representing a telephone number. |
| Email | N | StringLength1to32	| Email address |
| Address | N | ComplexType	| Refer to Address in Search |
| CitizenCountryName | N | ComplexType	| ISO3166 representation of the user's Country as defined in their Concur Profile |

**PersonName**

|  Element |	Required | Data Type 	|  Description |
|----------|-----------|---------------------------|-|
| NamePrefic | Y | StringLength1to32 | Customer's First name |
| GivenName | N | StringLength1to32 | Customer's Given name |
| Surname | Y | StringLength1to32 | Customer's Surname name |

**Telephone**

|  Element |	Required | Data Type 	|  Description |
|----------|-----------|---------------------------|-|
| PhoneNumber | Y | StringLength1to32 | A string representing a customer's phone number. |


**CitizenCountryName**

|  Element |	Required | Data Type 	|  Description |
|----------|-----------|---------------------------|-|
| Code | Y | StringLength1to32 | ISO3166 Country Code |


**CompanyInfo**

|  Element |	Required | Data Type 	|  Description |
|----------|-----------|---------------------------|-|
| CompanyName | Y | StringLength1to32 |  A string representing a customer's Company. |



### TPA Extensions

**TPA_Extensions**

|  Element |	Required | Data Type 	|  Description |
|----------|-----------|---------------------------|-|
| NotifyEmails | N | ComplexType | Email address which can be used by the vendor to contact the customer. |
| CustomFIelds | N | ComplexType | A reference to identify the booking |


**NotifyEmails**

|  Element |	Required | Data Type 	|  Description |
|----------|-----------|---------------------------|-|
| NotifyEmails | Y | StringLength1to32	| There will be one NotifyEmails element per email address in the configuration. |


**CustomFields**

|  Element |	Required | Data Type 	|  Description |
|----------|-----------|---------------------------|-|
| CustomField | Y | ComplexType	| A Custom Field in the form of a key-value pair. |


**CustomField**

|  Element |	Required | Data Type 	|  Description |
|----------|-----------|---------------------------|-|
| Name | Y | StringLength1to32	| Name of the Custom Field |
| Value | N | StringLength1to32	| Value of the Custom Field |


---


## Response

**OTA_HotelResRS**

|  Element |	Required | Data Type 	|  Description |
|----------|-----------|---------------------------|-|
| *ResResponseType* | Y | StringLength1to32	| something |
| HotelReservations | Y | ComplexType	| Concur only supports one reservation.  All extra reservations will be ignored. |


**HotelReservations**

|  Element |	Required | Data Type 	|  Description |
|----------|-----------|---------------------------|-|
| HotelReservation | Y | ComplexType | A reference to identify the booking |


**HotelReservation**

|  Element |	Required | Data Type 	|  Description |
|----------|-----------|---------------------------|-|
| UniqueID | Y | ComplexType | A reference to identify the booking max occurrence 2|
| RoomStays | Y | StringLength1to32	| Refer to RoomStays in Availability |


**UniqueID**

|  Element |	Required | Data Type 	|  Description |
|----------|-----------|---------------------------|-|
| *ID* | Y | StringLength1to32	| A reference to identify the booking |




Existing - of OTA UIT Type "14" to hold the booking UUID
New - OTA UIT Type "40" to hold the confirmation number from the supplier.







<Address>
                  <AddressLine>Rosenstr. 1 </AddressLine>
                  <CityName>Berlin</CityName>
                  <CountryName Code="DEU">Federal Republic of Germany</CountryName>
                </Address>
                <ContactNumbers>
                  <ContactNumber PhoneNumber="3024001722"/>
                </ContactNumbers>








|  Element |	Required | Data Type 	|  Description |
|----------|-----------|---------------------------|-|
| RatePlans | Y | ComplexType	| something |

