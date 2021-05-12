---
title: Direct Connect - Hotel v2 - Search
layout: reference
---

# Search

Message to perform the initial search for hotels.

|SOAPAction|OTA Name|Message Structure|
|------------|-------------|-------------------|
|search|HotelSearch|OTA_HotelSearchRQ|

---

* [Request](#request)
  * [Schema](#req-schema)
    * [Criteria](#criteria)
    * [Criterion](#criterion)
    * [TPA Extensions](#req-tpa-extensions)
    * [Custom Fields](#custom-fields)
    * [Position](#position)
    * [Hotel Ref](#hotel-ref)
    * [Radius](#radius)
    * [Stay Date Range](#stay-date-range)
* [Response](#response)
  * [Schema](#res-schema)
    * [Properties](#properties)
    * [Property](#property)
    * [Address](#address)
    * [State Prov](#state-prov)
    * [Country Name](#country-name)
    * [Contact Numbers](#contact-numbers)
    * [Contact Number](#contact-number)
    * [Award](#award)
    * [Hotel Amenity](#hotel-amenity)
    * [Supported Hotel Amenities](#supported-hotel-amenities)
    * [TPA Extensions](#res-tpa-extensions)
    * [TPA Hotel Preview Image URI](#tpa-hotel-preview)
    * [TPA Property Reference Info](#tpa-property-reference-info)

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
    <OTA_HotelSearchRQ xmlns="http://www.opentravel.org/OTA/2003/05" EchoToken="test_request_id" Version="4"
                       PrimaryLangID="de" AltLangID="de" MaxResponses="100">
      <POS>
        <Source ISOCurrency="USD">
          <RequestorID Type="1" ID="HTL011235"></RequestorID>
        </Source>
      </POS>
      <Criteria>
        <Criterion>
          <Position Latitude="47.61037" Longitude="-122.20067"></Position>
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

#### <a name="req-schema"></a>OTA_HotelSearchRQ

|Name|Type|Description|
|----------------|-----------|-------------|
|`MaxResponses`|`integer`|**Required** SAP Concur currently supports 100 search results in one (1) message. If more than 100 results are returned SAP Concur drops all results after the 100th entry.|
|`Criteria`|`complex`|**Required** Specified hotel search criteria.|
|`TPA_Extensions`|`complex`|This adds an Org Unit name to the Search request.|

#### <a name="criteria"></a>Criteria

|Name|Type|Description|
|-----------|-----------|-------------|
|`Criterion`|`complex`|**Required** Child elements that identify a single search criterion by criteria type.|

#### <a name="criterion"></a>Criterion

The criterion is used to define the search criteria.  Currently we support only one `Criterion`.

|Name|Type|Description|
|---------------|-----------|-------------|
|`Position`|`complex`|**Required for Search request only, but optional for Availability request.** Used to specify the geographic coordinates of a location, expressed in notation specified by ISO standard 6709.|
|`HotelRef`|`complex`|Indicates the detail of hotel reference information.|
|`RefPoint`|`stringLength0to64`|The reference point element allows for a search by proximity to a designated reference point by name.|
|`Radius`|`complex`|Used to specify the extent of a search area. The extent is relative to an element (`position`, `address`, `hotelRef`, etc.) present in this `ItemSearchCriterionType` that specifies a location.|
|`StayDateRange`|`complex`|**Required** Range of dates using ISO 8601.|

#### <a name="req-tpa-extensions"></a>TPA_Extensions

|Name|Type|Description|
|--------------|----------|--------------------------|
|`CustomFields`|`complex`|This adds Org Unit name.|

#### <a name="custom-fields"></a>CustomFields

|Name|Type|Description|
|-------------|-----------|-------------|
|`CustomField`|-|-|
|`Name`|`xs:string`|-|
|`Value`|`xs:string`|-|

#### <a name="position"></a>Position

|Name|Type|Description|
|--------------|----------|--------------------------|
|`Latitude`|`stringLength1to16`|**Required** The measure of the angular distance on a meridian north or south of the equator.|
|`Longitude`|`stringLength1to16`|**Required** The measure of the angular distance on a meridian east or west of the prime meridian.|

#### <a name="hotel-ref"></a>HotelRef

|Name|Type|Description|
|-------------|--------------------|-------------|
|`HotelName`|`stringLength1to128`|A text field used to communicate the proper name of the hotel.|

#### <a name="radius"></a>Radius

The radius element is used along with the Hotel Preference to categorize the search results.

|Name|Type|Description|
|-------------|--------------------|-------------|
|`Distance`|`stringLength1to16`|**Required** The distance from a reference point.|
|`DistanceMax`|`stringLength1to16`|Attribute indicating the distance from a reference point or Preferred (Corporate) hotels.|
|`UnitOfMeasureCode`|`stringLength1to16`|**Required** The unit of measure in a code format. Refer to OpenTravel Code List of Measure Code (UOM). SAP uses `1` for miles, `2` for kilometers.|

#### <a name="stay-date-range"></a>StayDateRange

|Name|Type|Description|
|---------|-------------------|-------------|
|`Start`|`date`, `time`, or `datetime`|**Required** The starting value of the time span.|
|`End`|`date`, `time`, or `datetime`|**Required** The ending value of the time span.|

## <a name="response"></a>Response

The maximum allowed size of `OTA_HotelSearchRS` is 1 MB. Any response that exceeds this limit will be dropped.

```xml
<?xml version="1.0" encoding="UTF-8"?>
<soap:Envelope xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/">
  <SOAP-ENV:Header xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/"/>
  <soap:Body>
    <OTA_HotelSearchRS xmlns="http://www.opentravel.org/OTA/2003/05" AltLangID="EN" PrimaryLangID="EN" Version="4">
      <Success/>
      <Properties>
        <Property ChainCode="HI" ChainName="Holiday Inn" HotelCode="22222" HotelName="Holiday Inn Express Sunshine">
          <Position Latitude="47.61038" Longitude="-122.20068"/>
          <Address>
            <AddressLine>99 East 27th Street</AddressLine>
            <CityName>Bellevue</CityName>
            <PostalCode>98009</PostalCode>
            <StateProv StateCode="WA">Washington</StateProv>
            <CountryName Code="US">United States of America</CountryName>
          </Address>
          <ContactNumbers>
            <ContactNumber PhoneNumber="+14255551234" PhoneTechType="1"/>
          </ContactNumbers>
          <Award Rating="4"/>
          <HotelAmenity Code="173"/>
          <HotelAmenity Code="255"/>
          <TPA_Extensions>
            <HotelPreference>not_preferred</HotelPreference>
            <TPA_HotelPreviewImageURI>
              <URL>https://production.example.com/hotel-image.jpg</URL>
            </TPA_HotelPreviewImageURI>
            <TPA_PropertyReferenceInfo>
              <PropertyReference ReferenceCatalogCode="1376249" ReferenceCatalogName="giata"/>
            </TPA_PropertyReferenceInfo>
          </TPA_Extensions>
        </Property>
      </Properties>
      <TPA_Extensions>
        <SearchSessionToken>5EA6C45E55104704E4</SearchSessionToken>
      </TPA_Extensions>
    </OTA_HotelSearchRS>
  </soap:Body>
</soap:Envelope>
```

#### <a name="res-schema"></a>OTA_HotelSearchRS

|Name|Type|Description|
|------------|--------------|-------------|
|`Properties`|`complex`|**Required** A collection of individual property information.|
|`TPA_Extensions/SearchSessionToken`|`stringLength1to128`|**Optional** A token that links the [Search](#response) results to [Availability](/api-reference/direct-connects/hotel-service-2/Availability.html) and [Reservation](/api-reference/direct-connects/hotel-service-2/Reservation.html) requests.|

#### <a name="properties"></a>Properties

|Name|Type|Description|
|----------|-----------|-------------|
|`Property`|`complex`|**Required** A property that matches some or all of the search criteria.|

#### <a name="property"></a>Property

|Name|Type|Description|
|----------------|-------------------|-------------|
|`ChainCode`|`stringLength1to8`|2-letter valid GDS chain code. The code that identifies a hotel chain or management group. Must be present to support filtering, preferences or travel rules base on chains|
|`ChainName`|`stringLength1to64`|The name of the hotel chain. Examples: `Hilton`, `Marriott`, `Hyatt`, `Starwood`|
|`HotelCode`|`stringLength1to16`|**Required** The code that uniquely identifies a single hotel property. Used in other OTA messages.|
|`HotelName`|`stringLength1to128`|**Required** A text field used to communicate the proper name of the hotel.|
|`Position`|`complex`|**Required** Refer to `Position` in the Request.|
|`Address`|`complex`|**Required** Public address of the hotel property.|
|`ContactNumbers`|`complex`|Property contact numbers.|
|`Award`|`complex`|An element that identifies the hotel rating.|
|`HotelAmenity`|`complex`|List of hotel amenities.|
|`TPA_Extensions`|`complex`|SAP Concur-specific extension of OTA spec. This adds support for extra property fields.|

#### <a name="address"></a>Address

|Name|Type|Description|
|-------------|-----------|--------------|
|`AddressLine`|`stringLength1to255`|The street name and number. Maximum occurrences: `5`|
|`CityName`|`stringLength1to64`|Name of the city.|
|`PostalCode`|`stringLength1to16`|The postal code.|
|`StateProv`|`complex`|Name of the state.|
|`CountryName`|`complex`|Country name. Example: `Ireland`|

#### <a name="state-prov"></a>StateProv

|Name|Type|Description|
|-----------|------------------|-------------|
|`StateCode`|`stringLength0to64`|The standard code or abbreviation for the state, province, or region (note the code may not be available for all states).|

#### <a name="country-name"></a>CountryName

|Name|Type|Description|
|---------|-------------------|-------------|
|`Code`|`stringLength0to64`|**Required** The name or ISO 3166 code of a country.|

#### <a name="contact-numbers"></a>ContactNumbers

|Name|Type|Description|
|---------------|-----------|-------------|
|`ContactNumber`|`complex`|Element which contains the `ContactNumber`. SAP Concur only accepts the first (1) `ContactNumber` of each supported type.|

#### <a name="contact-number"></a>ContactNumber

|Name|Type|Description|
|-------------------|-------------------|-------------|
|`CountryAccessCode`|`stringLength1to32`|The country code.|
|`PhoneNumber`|`stringLength1to32`|**Required** The phone number.|
|`PhoneTechType`|`string`|SAP Concur currently only supports a `PhoneTechType` set to `1` (phone) or `3` (fax). You can omit this field only in case you are providing one contact number. We suggest to fill the type in all cases, it may become mandatory in the future.|

#### <a name="award"></a>Award

|Name|Type|Description|
|----------|-----------|-------------|
|`Rating`|`integer`|**Required** Hotel rating should be an integer number from 0 to 5, representing its star rating. A rating value of 0 will be ignored and treated as N/A.|

#### <a name="hotel-amenity"></a>HotelAmenity

|Name|Type|Description|
|---------|--------------|-------------|
|`Code`|`string`|Refer to `Supported Hotel Amenities`|

#### <a name="supported-hotel-amenities"></a>Supported Hotel Amenities

|Code|Description|
|-------------------|-------------|  
|`173`|Breakfast|
|`255`|Broadband Internet|
|`228`|Business Center|
|`215`|Convention Center|
|`96`|Dry Cleaning|
|`48`|Fitness Center|
|`44`|Game Room|
|`236`|Golf Course|
|`54`|Indoor Pool|
|`289`|Kids Activities|
|`269`|Meeting Rooms|
|`198`|Non-smoking Rooms|
|`66`|Outdoor Pool|
|`224`|Pets Allowed|
|`76`|Restaurant|
|`71`|Swimming Pool|
|`233`|Tennis Court|
|`101`|Wheelchair Accessible|

#### <a name="res-tpa-extensions"></a>TPA Extensions

|Name|Type|Description|
|------------------------|-------------------|-------------|
|`HotelPreference`|`stringLength1to32`|**Required** SAP Concur allows customers to override property preference in the system settings. Supported values: `not_preferred`, `less_preferred`, `preferred`, `most_preferred`|
|`TPA_HotelPreviewImageURI`|`complex`|**Required** Details for an image of a given category.|
|`TPA_PropertyReferenceInfo`|`complex`|Alternate property ID. Required for Corporate Discount Note support|

#### <a name="tpa-hotel-preview"></a>TPA_HotelPreviewImageURI

|Name|Type|Description|
|---------|-------------------|-------------|
|`URL`|`string`|**Required** Contains an HTTPS URL pointing to a .png or .jpg hotel image file. SAP Concur supports one image URL in the Search Response. For the ability to display more images refer to Descriptive Info message. The image will be used as a thumbnail and should be limited to 70x70 pixels to prevent image artifacts by scaling. |

#### <a name="tpa-property-reference-info"></a>TPA_PropertyReferenceInfo

|Name|Type|Description|
|---------|-------------------|-------------|
|`ReferenceCatalogName`|`string`|**Required** which catalog the property reference comes from. Support `giata` only for now |
|`ReferenceCatalogCode`|`string`|**Required** alternate property id (only giata id of hotel for now) from specified reference catalog |
