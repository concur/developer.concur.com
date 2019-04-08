---
title: Direct Connect - Hotel v2 - Descriptive Information
layout: reference
---

# Descriptive Info

Message to retrieve descriptive details about a given hotel. This may include text and/or a number of URL pointed to hosted images. Concur does not host any hotel images.

| SOAPAction | OTA name             | Message structure |
|------------|----------------------|-------------------|
| detail     | HotelDescriptiveInfo | OTA_HotelDescriptiveInfoRQ |

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


**OTA_HotelDescriptiveInfoRQ**

| Element               | Required | Data Type | Description |
|-----------------------|----------|-----------|-------------|
| HotelDescriptiveInfos | Y        | Complex   | Collection of items for data from multiple  hotels. Concur will only ever send exactly one HotelDescriptiveInfo |


**HotelDescriptiveInfos**

| Element              | Required | Data Type | Description |
|----------------------|----------|-----------|-------------|
| HotelDescriptiveInfo | Y        | Complex   | This allows the requestor to indicate which specific information is requested if complete hotel details are not required.|


**HotelDescriptiveInfo**

| Element     | Required | Data Type         | Description |
|-------------|----------|-------------------|-------------|
| *ChainCode* | N        | StringLength1to8  | The code that identifies a hotel chain or management group. The hotel chain code is decided between vendors. This attribute is optional if the hotel is an independent property that can be identified by the HotelCode attribute. |
| *HotelCode* | Y        | StringLength1to16 | The code that uniquely identifies a single hotel property. The hotel code is decided between vendors. |

---


## Response

The maximum allowed size of OTA_HotelDescriptiveInfoRS is 150 KB. Any response that exceeds this limit shall be dropped.

```xml
<soap:Envelope xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/">
  <SOAP-ENV:Header xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/"/>
  <soap:Body>
    <OTA_HotelDescriptiveInfoRS xmlns="http://www.opentravel.org/OTA/2003/05" xmlns:ns2="http://www.concur.com/webservice/auth">
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

**OTA_HotelDescriptiveInfoRS**

| Element                  | Required | Data Type   | Description |
|--------------------------|----------|-------------|-------------|
| HotelDescriptiveContents | Y        | Complex     | Contains Hotel Details content which is made up of text and image URLs |

**HotelDescriptiveContents**

| Element                 | Required | Data Type | Description |
|-------------------------|----------|-----------|-------------|
| HotelDescriptiveContent | Y        | Complex	 | Contains Hotel Details content which is made up of text and image URLs. Concur only expects one HotelDescriptiveContent |

**HotelDescriptiveContent**

| Element                | Required | Data Type         | Description |
|------------------------|----------|-------------------|-------------|
| *HotelCode*            | Y        | StringLength1to16  | The code that uniquely identifies a single hotel property. The hotel code is decided between vendors. |
| *HotelName*            | Y        | StringLength1to128 | A text field used to communicate the proper name of the hotel. Concur always expects the Hotel Name to be provided. |
| TPA_Extensions         | N        | Complex | Concur specific extensions. |
| MultimediaDescriptions | N        | Complex | Multimedia information about a collection of multimedia objects. Concur only expects one MultimediaDescription element. |

**TPA_Extensions**

| Element     | Required | Data Type | Description |
|-------------|----------|-----------|-------------|
| Description | N        | Complex   | Represents text which will be rendered in the UI in the form of a heading and a paragraph |


**Description**

| Element | Required | Data Type          | Description |
|---------|----------|--------------------|-------------|
| *name*  | N        | StringLength1to64  | The contents of this element will be rendered as a heading on the Hotel Details page. |
| Text    | Y        | StringLength1to255 | The contents of this element will be rendered as a paragraph.  Concur expects up to a maximum of 20 Text elements per Description, which will be concatenated to into one paragraph. |


**MultimediaDescriptions**

| Element               | Required | Data Type | Description |
|-----------------------|----------|-----------|-------------|
| MultimediaDescription | N        | Complex   | Holds a list of ImageItems each representing a single hotel image. |


**MultimediaDescription**

| Element    | Required | Data Type	| Description |
|------------|----------|-----------|-------------|
| ImageItems | N        | Complex   | Holds a list of ImageItems each representing a single hotel image.  Concur expects up to a maximum of 200 ImageItem elements. |


**ImageItems**

| Element   | Required | Data Type | Description |
|-----------|----------|-----------|-------------|
| ImageItem | N        | Complex   | Use one ImageItem per hotel image. |


**ImageItem**

| Element     |	Required | Data Type | Description |
|-------------|----------|-----------|-------------|
| ImageFormat | N        | Complex	 | ImageFormat |


**ImageFormat**

| Element | Required | Data Type         | Description |
|---------|----------|-------------------|-------------|
| URL     | Y        | StringLength1to32 | Contains a URL pointing to a hotel image. The URLs are used in a client-side gallery widget, which works best with .png and .jpg files. |
