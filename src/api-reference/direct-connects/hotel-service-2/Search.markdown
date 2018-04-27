---
title: Search 
layout: reference
---

# Search

Message to perform the initial search for hotels.

| SOAPAction | OTA name    | Message structure | 
|------------|-------------|-------------------|
| search     | HotelSearch | OTA_HotelSearchRQ |

---

## Request

**OTA_HotelSearchRQ**

| Element        | Required | Data Type | Description |
|----------------|----------|-----------|-------------|
| *MaxResponses* | Y        | Int       | Concur currently supports 100 search results in one message. If more than 100 results are returned Concur drops all results after the 100th entry.|
| Criteria       | Y        | Complex   | Specified hotel search criteria. |


**Criteria**

| Element   | Required | Data Type | Description |
|-----------|----------|-----------|-------------|
| Criterion | Y        | Complex   | Child elements that identify a single search criterion by criteria type. |


**Criterion**

The criterion is used to define the search criteria.  Currently we support only one Criterion.

| Element       | Required | Data Type | Description |
|---------------|----------|-----------|-------------|
| Position      | Y*       | Complex   | Used to specify the geographic coordinates of a location, expressed in notation specified by ISO standard 6709. **Required for Search request only, but optional for Availability reqeust!** |
| HotelRef      | N        | Complex   | Indicates the detail of hotel reference information. |
| Radius        | N        | Complex   | Used to specify the extent of a search area. The extent is relative to an element (position, address, hotel reference, etc.) present in this ItemSearchCriterionType that specifies a location. |
| StayDateRange | Y        | Complex   | Range of dates using ISO 8601, or fixed set of dates for Availability Request. |


**Position**

| Element     | Required | Data Type         | Description |
|-------------|----------|-------------------|-------------|
| *Latitude*  | Y        | StringLength1to16 | The measure of the angular distance on a meridian north or south of the equator. |
| *Longitude* | Y        | StringLength1to16 | The measure of the angular distance on a meridian east or west of the prime meridian. |


**HotelRef**

| Element     | Required | Data Type          | Description |
|-------------|----------|--------------------|-------------|
| *HotelName* | N        | StringLength1to128 | A text field used to communicate the proper name of the hotel. |
| *HotelCode* | N        | StringLength1to16  | The code that uniquely identifies a single hotel property. The hotel code is decided between vendors. |


**Radius**

The radius element is used along with the Hotel Preference to categorize the search results. 

| Element             | Required | Data Type                | Description |
|---------------------|----------|--------------------------|-------------|
| *Distance*          | Y        | NumericStringLength1to16 | The distance from a reference point. |
| *DistanceMax*       | N        | NumericStringLength1to16 | Attribute indicating the distance from a reference point for Preferred (Corporate) hotels. |
| *UnitOfMeasureCode* | Y        | NumericStringLength1to16 | The unit of measure in a code format. Refer to OpenTravel Code List Unit of Measure Code (UOM). Concur uses "1" for miles, "2" for kilometers. |


**StayDateRange**

| Element | Required | Data Type                | Description |
|---------|----------|-------------------       |-------------|
| *Start* | Y        | DateOrTimeOrDateTimeType | The starting value of the time span. |
| *End*   | Y        | DateOrTimeOrDateTimeType | The ending value of the time span. |


---


## Response

**OTA_HotelSearchRS**

| Element    | Required  | Data Type    | Description |
|------------|-----------|--------------|-------------|
| Properties | Y         | Complex      | Detailed property level information. |

**Properties**

| Element  | Required | Data Type | Description |
|----------|----------|-----------|-------------|
| Property | Y        | Complex   | A property that matches some or all of the search criteria. |


**Property**

|  Element       | Required | Data Type         | Description |
|----------------|----------|-------------------|-------------|
| ChainCode      | N        | StringLength1to32 | 2 letter GDS chain code. The code that identifies a hotel chain or management group. Used for Chain filter in UI, and for Travel Rules based on GDS codes |
| ChainName      | N        | StringLength1to32 | Detailed property level information. |
| HotelCode      | Y        | StringLength1to32 | The code that uniquely identifies a single hotel property. Used in other OTA messages. |
| HotelName      | Y        | StringLength1to32 | A text field used to communicate the proper name of the hotel. |
| Position       | Y        | Complex           | Refer to Position in the Request. |
| Address        | Y        | Complex           | Public address of the hotel property. |
| ContactNumbers | N        | Complex           | Contact numbers |
| Award          | N        | Complex           | An element that identifies the hotel ratings. |
| HotelAmenity   | N        | Complex           | List of Hotel Amenities. |
| Policy         | N        | Complex           | **Not used to be removed** |
| Amenities      | N        | Complex           | **Not used to be removed** |
| TPA_Extensions | N        | Complex           | See TPA Extensions below |


**Address**

|  Element    | Required | Data Type |  Description |
|-------------|----------|-----------|--------------|
| AddressLine | N        | Complex   | Free form text field. Normally the screen name and number. This element may occur up to 5 times. |
| CityName    | N        | Complex   | Free form text field. Name of the city. |
| PostalCode  | N        | Complex   | Free form text field. The Postal Code. |
| StateProv   | N        | Complex   | Free form text field. Name of the state |
| CountryName | N        | Complex   | Country name (e.g., Ireland) |


**StateProv**

| Element   | Required | Data Type        | Description |
|-----------|----------|------------------|-------------|
| StateCode | N        | StringLength1to8 | The standard code or abbreviation for the state, province, or region (note the code may not be available for all states). |


**CountryName**

| Element | Required | Data Type         | Description |
|---------|----------|-------------------|-------------|
| Code    | Y        | StringLength0to64 | The name or ISO 3166 code of a country (e.g. as used in an address or to specify citizenship of a traveller). |


**ContactNumbers**

| Element       | Required | Data Type | Description |
|---------------|----------|-----------|-------------|
| ContactNumber | N        | Complex   | Element which contains the ContactNumber. Concur only accepts one (first) ContactNumber of each supported type. |


**ContactNumber**

| Element           | Required | Data Type         | Description |
|-------------------|----------|-------------------|-------------|
| CountryAccessCode | N        | StringLength1to32 | The Country code. |
| PhoneNumber       | Y        | StringLength1to32 | The phone number. |
| PhoneTechType     | N        | String            | Concur currently only supports a PhoneTechType set to "1" (phone) or "3" (fax). You can omit this field only in case you are providing one contact number. Anyway, we suggest to fill the type in all cases, it may become mandatory in the future. |


**Award**

| Element  | Required | Data Type | Description |
|----------|----------|-----------|-------------|
| *Rating* | Y        | Int       | Hotel rating should be integer number from 0 to 5, representation it's star rating. |


**HotelAmenity - to be removed**

| Element | Required | Data Type    | Description |
|---------|----------|--------------|-------------|
| *Code*  | Y        | OTA_CodeType	| Refer to OpenTravel Code List Hotel Amenity Code (HAC) |


**Policy - to be removed**

| Element        | Required | Data Type         | Description |
|----------------|----------|-------------------|-------------|
| *CheckInTime*  | Y        | StringLength1to32	| **to be decided** |
| *CheckOutTime* | Y        | StringLength1to32	| **to be decided** |


### TPA Extensions

**TPA_Extensions**

| Element                  | Required | Data Type         | Description |
|--------------------------|----------|-------------------|-------------|
| HotelPreference          | Y        | StringLength1to32 | A reference to identify the booking |
| TPA_HotelPreviewImageURI | Y        | Complex           | A reference to identify the booking |


**TPA_HotelPreviewImageURI**

| Element | Required | Data Type         | Description |
|---------|----------|-------------------|-------------|
| URL     | Y        | StringLength1to32 | Concur supports on one image URL in the Search Response.  For the ability to display more images refer to Descriptive Info.  The image will be used as a thumb-nail and should be limited to 70x70 pixels to prevent image artifacts by scaling. |

