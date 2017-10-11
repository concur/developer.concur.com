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

**OTA_HotelResRQ **

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
| Comment | Y | ComplexType	| Concur will only ever send one comment element made up of up to 9 text fields. |


**Comment**

|  Element |	Required | Data Type 	|  Description |
|----------|-----------|---------------------------|-|
| Text | Y | String	| Text representing the comment. |


**Text**

|  Element |	Required | Data Type 	|  Description |
|----------|-----------|---------------------------|-|
| Text | Y | StringLength1to32	| something |


**ResGuest**

|  Element |	Required | Data Type 	|  Description |
|----------|-----------|---------------------------|-|
| Profiles | Y | ComplexType	| something |
| GuestCounts | Y | ComplexType	| Refer to GetCounts in Availability.  |


**Profile**

|  Element |	Required | Data Type 	|  Description |
|----------|-----------|---------------------------|-|
| Customer | Y | ComplexType | something |
| CompanyInfo | Y | ComplexType	| something |


**Customer**

|  Element |	Required | Data Type 	|  Description |
|----------|-----------|---------------------------|-|
| Gender | Y | StringLength1to32 | something |
| PersonName | Y | ComplexType | something |
| Telephone | Y | ComplexType	| something |
| Email | Y | StringLength1to32	| something |
| Address | Y | ComplexType	| Refer to Address in Search |
| CitizenCountryName | Y | ComplexType	| ISO3166 representation of the user's Country as defined in their Concur Profile |

**PersonName**

|  Element |	Required | Data Type 	|  Description |
|----------|-----------|---------------------------|-|
| NamePrefic | Y | StringLength1to32 | something |
| GivenName | Y | StringLength1to32 | something |
| Surname | Y | StringLength1to32 | something |

**Telephone**

|  Element |	Required | Data Type 	|  Description |
|----------|-----------|---------------------------|-|
| PhoneNumber | Y | StringLength1to32 | something |


**CitizenCountryName**

|  Element |	Required | Data Type 	|  Description |
|----------|-----------|---------------------------|-|
| Code | Y | StringLength1to32 | ISO3166 Country Code |


**CompanyInfo**

|  Element |	Required | Data Type 	|  Description |
|----------|-----------|---------------------------|-|
| Code | Y | StringLength1to32 | something |



### TPA Extensions

**TPA_Extensions**

|  Element |	Required | Data Type 	|  Description |
|----------|-----------|---------------------------|-|
| NotifyEmails | Y | ComplexType | A reference to identify the booking |
| CustomFIelds | Y | ComplexType | A reference to identify the booking |


**NotifyEmails**

|  Element |	Required | Data Type 	|  Description |
|----------|-----------|---------------------------|-|
| NotifyEmails | Y | StringLength1to32	| something |


**CustomFields**

|  Element |	Required | Data Type 	|  Description |
|----------|-----------|---------------------------|-|
| CustomField | Y | ComplexType	| something |


**CustomField**

|  Element |	Required | Data Type 	|  Description |
|----------|-----------|---------------------------|-|
| Name | Y | StringLength1to32	| something |
| Value | Y | StringLength1to32	| something |


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

