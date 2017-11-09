---
title: Descriptive Information 
layout: reference
---


# Descriptive Info

Message to retrieve descriptive details about a given hotel. This may include text and/or a number of URL pointed to hosted images.  Concur does not host any hotel images. 

| SOAPAction | OTA name             | Message structure | 
|------------|----------------------|-------------------|
| detail     | HotelDescriptiveInfo | OTA_HotelDescriptiveInfoRQ |

---

## Request

**OTA_HotelDescriptiveInfoRQ**

| Element               | Required | Data Type | Description |
|-----------------------|----------|-----------|-------------|
| HotelDescriptiveInfos | Y        | Complex   | Concur will only ever send exactly one HotelDescriptiveInfo |


**HotelDescriptiveInfos**

| Element              | Required | Data Type | Description |
|----------------------|----------|-----------|-------------|
| HotelDescriptiveInfo | Y        | Complex   | Element containing the ID of one property for which Hotel Details are requested for. |


**HotelDescriptiveInfo**

| Element     |	Required | Data Type         | Description |
|-------------|----------|-------------------|-------------|
| *ChainCode* | N        | StringLength1to8  | Optional element referencing the Hotel Chain Code. |
| *HotelCode* | Y        | StringLength1to16 | Refer to HotelCode in the Property element of the Search message. |

---


## Response


**OTA_HotelDescriptiveInfoRS**

| Element                  | Required | Data Type 	| Description |
|--------------------------|----------|-------------|-------------|
| HotelDescriptiveContents | Y        | Complex     | Contains Hote Details content which is made up of text and image URLs |

**HotelDescriptiveContents**

| Element                 |	Required | Data Type | Description |
|-------------------------|----------|-----------|-------------|
| HotelDescriptiveContent | Y        | Complex	 | Contains Hotel Details content which is made up of text and image URLs Concur only expects one HotelDescriptiveContent |

**HotelDescriptiveContent**

| Element                | Required | Data Type         | Description |
|------------------------|----------|-------------------|-------------|
| *HotelCode*            | Y        | StringLength1to8  | Refer to HotelCode in the Property element of the Search message. |
| *HotelName*            | Y        | StringLength1to32 | Concur always expects the Hotel Name to be provided. |
| TPA_Extensions         | N        | StringLength1to32 | TPA Extensions. |
| MultimediaDescriptions | N        | StringLength1to32 | Concur only expects one MultimediaDescription element. |

**TPA_Extensions**

| Element     |	Required | Data Type | Description |
|-------------|----------|-----------|-------------|
| Description | N        | Complex	 | Represents text which will be rendered in the UI in the form of a heading and a paragraph |


**Description**

| Element | Required | Data Type          | Description |
|---------|----------|--------------------|-------------|
| *name*  | Y        | StringLength1to32  | The contents of this element will be rendered as a heading on the Hotel Details page. |
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

| Element |	Required | Data Type         | Description |
|---------|----------|-------------------|-------------|
| URL     | Y        | StringLength1to32 | Contains a URL pointing to a hotel image. The URLs are used in a client-side gallery widget, which works best with .png and .jpg files. |

