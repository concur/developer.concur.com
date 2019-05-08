---
title: Direct Connect - Hotel v2 - Search
layout: reference
---

# Search

Message to perform the initial search for hotels.

| SOAPAction | OTA name    | Message structure |
|------------|-------------|-------------------|
| search     | HotelSearch | OTA_HotelSearchRQ |

---

## Request

```xml
<Envelope xmlns="http://schemas.xmlsoap.org/soap/envelope/">
  <Header xmlns="http://schemas.xmlsoap.org/soap/envelope/">
    <authentication xmlns="http://www.concur.com/webservice/auth">
    <userid>user</userid>
    <password>password</password>
   </authentication>
  </Header>
  <Body xmlns="http://schemas.xmlsoap.org/soap/envelope/">
   <OTA_HotelSearchRQ xmlns="http://www.opentravel.org/OTA/2003/05" EchoToken="test_request_id" Version="4" PrimaryLangID="de" AltLangID="de" MaxResponses="100">
    <POS>
      <Source ISOCurrency="USD"></Source>
      <RequestorID Type="1" ID="47777"></RequestorID>
    </POS>
    <Criteria>
     <Criterion>
      <Position Latitude="52.520007" Longitude="13.404954"></Position>
      <RefPoint></RefPoint>
      <HotelRef HotelName="sunshine"></HotelRef>
      <Radius Distance="5" DistanceMax="30" UnitOfMeasureCode="1"></Radius>
      <StayDateRange Start="2018-09-26" End="2018-09-27"></StayDateRange>
     </Criterion>
    </Criteria>
    <TPA_Extensions>
       <CustomFields>
        <CustomField Name="OrgUnit" Value="Travel Agents"></CustomField>
       </CustomFields>
    </TPA_Extensions>
   </OTA_HotelSearchRQ>
  </Body>
 </Envelope>
```


**OTA_HotelSearchRQ**

| Element        | Required | Data Type | Description |
|----------------|----------|-----------|-------------|
| *MaxResponses* | Y        | Int       | Concur currently supports 100 search results in one message. If more than 100 results are returned Concur drops all results after the 100th entry.|
| Criteria       | Y        | Complex   | Specified hotel search criteria. |
| TPA_Extensions|  N        | Complex   | This adds Org Unit name to the Search RQ |


**Criteria**

| Element   | Required | Data Type | Description |
|-----------|----------|-----------|-------------|
| Criterion | Y        | Complex   | Child elements that identify a single search criterion by criteria type. |


**Criterion**

The criterion is used to define the search criteria.  Currently we support only one Criterion.

| Element       | Required | Data Type | Description |
|---------------|----------|-----------|-------------|
| Position      | Y        | Complex   | Used to specify the geographic coordinates of a location, expressed in notation specified by ISO standard 6709. **Required for Search request only, but optional for Availability request!** |
| HotelRef      | N        | Complex   | Indicates the detail of hotel reference information. |
| *RefPoint*     | N        | StringLength0to64   | The Reference Point element allows for a search by proximity to a designated reference point by name. |
| Radius        | N        | Complex   | Used to specify the extent of a search area. The extent is relative to an element (position, address, hotel reference, etc.) present in this ItemSearchCriterionType that specifies a location. |
| StayDateRange | Y        | Complex   | Range of dates using ISO 8601. |


**TPA_Extensions**

|   Element    | Required |      Data Type      |      Description        |
|--------------|----------|------------------|--------------------------|
| CustomFields | N        | Complex | This adds ORG unit name. |


**CustomFields**

|  Element   | Required |   Data Type    | Description |
|-------------|----------|-----------|-------------|
| CustomField | N        |           |             |
| *Name*      |          | xs:string |             |
| *Value*     |          | xs:string |             |

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

The maximum allowed size of OTA_HotelSearchRS is 1 MB. Any response that exceeds this limit shall be dropped.

```xml
<?xml version="1.0" encoding="UTF-8"?>
<soap:Envelope xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/">
  <SOAP-ENV:Header xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/"/>
  <soap:Body>
    <OTA_HotelSearchRS xmlns="http://www.opentravel.org/OTA/2003/05" xmlns:ns2="http://www.concur.com/webservice/auth" AltLangID="EN" PrimaryLangID="EN" Version="4">
      <Success/>
      <Properties>
      <Property ChainCode="AB" ChainName="1111" HotelCode="22222" HotelName="Sunshine Hotel">
          <Position Latitude="52.4567" Longitude="13.5635"/>
          <Address>
            <AddressLine>An der Wuhlheide</AddressLine>
            <CityName>Berlin</CityName>
            <PostalCode>10115</PostalCode>
            <CountryName Code="DE">Federal Republic of Germany</CountryName>
          </Address>
          <ContactNumbers>
            <ContactNumber CountryAccessCode="49" PhoneNumber="56940033" PhoneTechType="1"/>
          </ContactNumbers>
          <Award Rating="4"/>
          <HotelAmenity Code="68"/>
          <TPA_Extensions>
            <HotelPreference>not_preferred</HotelPreference>
            <TPA_HotelPreviewImageURI>
              <URL>url_to_the_picture.jpg</URL>
            </TPA_HotelPreviewImageURI>
          </TPA_Extensions>
        </Property>
      </Properties>
    </OTA_HotelSearchRS>
  </soap:Body>
</soap:Envelope>
```

**OTA_HotelSearchRS**

| Element    | Required  | Data Type    | Description |
|------------|-----------|--------------|-------------|
| Properties | Y         | Complex      | A collection of individual property information. |

**Properties**

| Element  | Required | Data Type | Description |
|----------|----------|-----------|-------------|
| Property | Y        | Complex   | A property that matches some or all of the search criteria. |


**Property**

|  Element       | Required | Data Type         | Description |
|----------------|----------|-------------------|-------------|
| ChainCode      | N        | StringLength1to32 | 2 letter GDS chain code. The code that identifies a hotel chain or management group. Used for Chain filter in UI, and for Travel Rules based on GDS codes |
| ChainName      | N        | StringLength1to32 | The name of the hotel chain (e.g., Hilton, Marriott, Hyatt, Starwood). |
| HotelCode      | Y        | StringLength1to32 | The code that uniquely identifies a single hotel property. Used in other OTA messages. |
| HotelName      | Y        | StringLength1to32 | A text field used to communicate the proper name of the hotel. |
| Position       | Y        | Complex           | Refer to Position in the Request. |
| Address        | Y        | Complex           | Public address of the hotel property. |
| ContactNumbers | N        | Complex           | Contact numbers |
| Award          | N        | Complex           | An element that identifies the hotel ratings. |
| HotelAmenity   | N        | Complex           | List of Hotel Amenities. |
| TPA_Extensions | N        | Complex           | Concur-specific extension of OTA spec. This adds support for extra property fields. |


**Address**

|  Element    | Required | Data Type |  Description |
|-------------|----------|-----------|--------------|
| AddressLine | N        | StringLength1to255   | Free form text field. Normally the screen name and number. This element may occur up to 5 times. |
| CityName    | N        | StringLength1to64   | Free form text field. Name of the city. |
| PostalCode  | N        | StringLength1to16   | Free form text field. The Postal Code. |
| StateProv   | N        | Complex   | Free form text field. Name of the state |
| CountryName | N        | Complex   | Country name (e.g., Ireland) |


**StateProv**

| Element   | Required | Data Type        | Description |
|-----------|----------|------------------|-------------|
| StateCode | N        | StringLength0to64 | The standard code or abbreviation for the state, province, or region (note the code may not be available for all states). |


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
| PhoneTechType     | N        | String            | Concur currently only supported a PhoneTechType set to "1" (phone) or "3" (fax). You can omit this field only in case you are providing one contact number. Anyway, we suggest to fill the type in all cases, it may become mandatory in the future. |


**Award**

| Element  | Required | Data Type | Description |
|----------|----------|-----------|-------------|
| *Rating* | Y        | Int       | Hotel rating should be integer number from 0 to 5, representation it's star rating. |


**HotelAmenity**

| Element | Required | Data Type    | Description |
|---------|----------|--------------|-------------|
| *Code*  | Y        | string	| Refer to OpenTravel Code List Hotel Amenity Code (HAC) |


### TPA Extensions

**TPA_Extensions**

| Element                  | Required | Data Type         | Description |
|--------------------------|----------|-------------------|-------------|
| HotelPreference          | Y        | StringLength1to32 | Preference levels supports by Concur are "not_preferred", "less_preferred", "preferred", "most_preferred". Please note, that Concur allows customers to override property preference in the system settings.  |
| TPA_HotelPreviewImageURI | Y        | Complex           | Details for an image of a given category. |


**TPA_HotelPreviewImageURI**

| Element | Required | Data Type         | Description |
|---------|----------|-------------------|-------------|
| URL     | Y        | StringLength1to32 | URL of the multimedia item for a specific format. Concur supports on one image URL in the Search Response. For the ability to display more images refer to Descriptive Info message.  The image will be used as a thumb-nail and should be limited to 70x70 pixels to prevent image artifacts by scaling. |
