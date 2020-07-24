---
title: Direct Connect - Hotel v2 - Descriptive Information
layout: reference
---

# Descriptive Info

Message to retrieve descriptive details about a given hotel. This may include text and/or a number of URL pointed to hosted images. Concur does not host any hotel images.

|SOAPAction|OTA Name|Message Structure|
|------------|----------------------|-------------------|
|detail|HotelDescriptiveInfo|OTA_HotelDescriptiveInfoRQ|

---

* [Request](#request)
  * [Schema](#req-schema)
    * [Hotel Descriptive Infos](#hotel-desc-infos)
    * [Hotel Descriptive Info](#hotel-desc-info)
* [Response](#response)
  * [Schema](#res-schema)
    * [Hotel Descriptive Contents](#hotel-desc-contents)
    * [Hotel Descriptive Content](#hotel-desc-content)
    * [TPA Extensions](#tpa-extensions)
    * [Description](#description)
    * [Multimedia Descriptions](#multi-descs)
    * [Multimedia Description](#multi-desc)
    * [Image Items](#image-items)
    * [Image Item](#image-item)
    * [Image Format](#image-format)

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
    <OTA_HotelDescriptiveInfoRQ xmlns="http://www.opentravel.org/OTA/2003/05" EchoToken="test_request_id" Version="3" PrimaryLangID="de" AltLangID="de">
      <POS>
        <Source ISOCurrency="USD">
          <RequestorID Type="1" ID="123"></RequestorID>
        </Source>
      </POS>
      <HotelDescriptiveInfos>
        <HotelDescriptiveInfo ChainCode="AB" HotelCode="2575"></HotelDescriptiveInfo>
      </HotelDescriptiveInfos>
    </OTA_HotelDescriptiveInfoRQ>
  </Body>
</Envelope>
 ```

#### <a name="req-schema"></a>OTA_HotelDescriptiveInfoRQ

|Name|Type|Description|
|-----------------------|-----------|-------------|
|`HotelDescriptiveInfos`|`complex`|**Required** Collection of items for data from multiple  hotels. SAP Concur will only ever send one (1) `HotelDescriptiveInfo`.|

#### <a name="hotel-desc-infos"></a> HotelDescriptiveInfos

|Name|Type|Description|
|----------------------|-----------|-------------|
|`HotelDescriptiveInfo`|`complex`|**Required** This allows the requestor to indicate which specific information is requested if complete hotel details are not required.|

#### <a name="hotel-desc-info"></a>HotelDescriptiveInfo

|Name|Type|Description|
|-------------|-------------------|-------------|
|`ChainCode`|`stringLength1to8`|The code that identifies a hotel chain or management group. The hotel chain code is decided between vendors. This attribute is optional if the hotel is an independent property that can be identified by the `HotelCode` attribute.|
|`HotelCode`|`stringLength1to16`|**Required** The code that uniquely identifies a single hotel property. The hotel code is decided between vendors.|

## <a name="response"></a>Response

The maximum allowed size of `OTA_HotelDescriptiveInfoRS` is 150 KB. Any response that exceeds this limit will be dropped.

```xml
<soap:Envelope xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/">
  <SOAP-ENV:Header xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/"/>
  <soap:Body>
    <OTA_HotelDescriptiveInfoRS xmlns="http://www.opentravel.org/OTA/2003/05" Version="3">
      <Success/>
      <HotelDescriptiveContents>
        <HotelDescriptiveContent ChainCode="ZZ" HotelCode="2575" HotelName="Torbräu">
          <HotelInfo>
            <Descriptions>
              <DescriptiveText>Hotel description</DescriptiveText>
            </Descriptions>
          </HotelInfo>
          <MultimediaDescriptions>
            <MultimediaDescription>
              <ImageItems>
                <ImageItem>
                  <ImageFormat>
                    <URL>http://image_path.jpg</URL>
                  </ImageFormat>
                </ImageItem>
              </ImageItems>
            </MultimediaDescription>
          </MultimediaDescriptions>
          <TPA_Extensions>
            <Description Name="This will be a header">
              <Text>First line of first description.</Text>
              <Text>Second line of first description.</Text>
            </Description>
            <Description>
              <Text>Second description without name.</Text>
            </Description>
          </TPA_Extensions>
        </HotelDescriptiveContent>
      </HotelDescriptiveContents>
    </OTA_HotelDescriptiveInfoRS>
  </soap:Body>
</soap:Envelope>
```

#### <a name="res-schema"></a>OTA_HotelDescriptiveInfoRS

|Name|Type|Description|
|--------------------------|-------------|-------------|
|`HotelDescriptiveContents`|`complex`|**Required** Contains hotel details content which is made up of text and image URLs.|

#### <a name="hotel-desc-contents"></a>HotelDescriptiveContents

|Name|Type|Description|
|-------------------------|-----------|-------------|
|`HotelDescriptiveContent`|`complex|**Required** Contains hotel details content which is made up of text and image URLs. SAP Concur expects one (1) `HotelDescriptiveContent`.|

#### <a name="hotel-desc-content"></a>HotelDescriptiveContent

|Name|Type|Description|
|------------------------|-------------------|-------------|
|`HotelCode`|`stringLength1to16`|**Required** The code that uniquely identifies a single hotel property. The hotel code is decided between vendors.|
|`HotelName`|`stringLength1to128`|**Required** A text field used to communicate the proper name of the hotel. SAP Concur always expects the Hotel Name to be provided.|
|`TPA_Extensions`|`complex`|SAP Concur specific extensions.|
|`MultimediaDescriptions`|`complex`|Multimedia information about a collection of multimedia objects. SAP Concur expects one (1) `MultimediaDescription` element.|

#### <a name="tpa-extensions"></a>TPA_Extensions

|Name|Type|Description|
|-------------|----------|-------------|
|`Description`|`complex`|Represents text which will be rendered in the UI in the form of a heading and a paragraph.|

#### <a name="description"></a>Description

|Name|Type|Description|
|---------|--------------------|-------------|
|`name`|`stringLength1to64`|The contents of this element will be rendered as a heading on the hotel details page.|
|`Text`|`stringLength1to255`|**Required** The contents of this element will be rendered as a paragraph. SAP Concur expects a maximum of 20 text elements per description, which will be concatenated to into one (1) paragraph.|

#### <a name="multi-descs"></a>MultimediaDescriptions

|Name|Type|Description|
|----------------------|-----------|-------------|
|`MultimediaDescription`|`complex`|Holds a list of `ImageItems`, each representing a single hotel image.|

#### <a name="multi-desc"></a>MultimediaDescription

|Name|Type|Description|
|------------|-----------|-------------|
|`ImageItems`|`complex`|Holds a list of `ImageItem`, each representing a single hotel image. SAP Concur expects up to a maximum of 200 `ImageItem` elements.|

#### <a name="image-items"></a>ImageItems

|Name|Type|Description|
|-----------|-----------|-------------|
|`ImageItem`|`complex`|One (1) `ImageItem` per hotel image.|

#### <a name="image-item"></a>ImageItem

|Name|Type|Description|
|-------------|-----------|-------------|
|`ImageFormat`|`complex`|Format of image.|

#### <a name="image-format"></a>ImageFormat

|Name|Type|Description|
|---------|-------------------|-------------|
|`URL`|`stringLength1to32`|**Required** Contains a HTTPS URL pointing to a hotel image. The URLs are used in a client-side gallery widget, which works best with `.png` and `.jpg` files.|
