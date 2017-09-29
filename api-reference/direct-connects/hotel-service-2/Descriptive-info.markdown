---
title: Descriptive Information 
layout: reference
---


# Descriptive Info

Message to retrive descriptive details about a given hotel. This may include text and/or a number of URL pointed to hosted images.  Concur does not host any hotel images. 

|  SOAPAction |	OTA name | Message structure | 
|----------|-----------|---------------------|
| detail | HotelDescriptiveInfo | OTA_HotelDescriptiveInfoRQ |

---

## Request

**OTA_HotelDescriptiveInfoRQ**

|  Element |	Required | Data Type 	|  Description |
|----------|-----------|---------------------------|-|
| HotelDescriptiveInfos | Y | ComplexType	| something |


**HotelDescriptiveInfos**

|  Element |	Required | Data Type 	|  Description |
|----------|-----------|---------------------------|-|
| HotelDescriptiveInfo | Y | ComplexType	| something |


**HotelDescriptiveInfo**

|  Element |	Required | Data Type 	|  Description |
|----------|-----------|---------------------------|-|
| *ChainCode* | Y | StringLength1to32	| something |
| *HotelCode* | Y | StringLength1to32	| something |

---


## Response


**OTA_HotelDescriptiveInfoRS**

|  Element |	Required | Data Type 	|  Description |
|----------|-----------|---------------------------|-|
| HotelDescriptiveContent | Y | ComplexType	| something |


**HotelDescriptiveContent**

|  Element |	Required | Data Type 	|  Description |
|----------|-----------|---------------------------|-|
| *ChainCode* | Y | StringLength1to32	| something |
| *HotelCode* | Y | StringLength1to32	| something |
| *HotelName* | Y | StringLength1to32	| something |
| TPA_Extensions | N | StringLength1to32	| something |
| MultimediaDescriptions | N | StringLength1to32	| something |

**TPA_Extensions**

|  Element |	Required | Data Type 	|  Description |
|----------|-----------|---------------------------|-|
| Description | N | ComplexType	| something |


**Description**

|  Element |	Required | Data Type 	|  Description |
|----------|-----------|---------------------------|-|
| *name* | Y | StringLength1to32	| something |
| Text | Y | StringLength1to32	| At least one Text element must be present |


**MultimediaDescriptions**

|  Element |	Required | Data Type 	|  Description |
|----------|-----------|---------------------------|-|
| MultimediaDescription | N | ComplexType	| Holds a list of ImageItems each representing a single hotlel image. |


**MultimediaDescription**

|  Element |	Required | Data Type 	|  Description |
|----------|-----------|---------------------------|-|
| ImageItems | N | ComplexType	| Holds a list of ImageItems each representing a single hotle image. |


**ImageItems**

|  Element |	Required | Data Type 	|  Description |
|----------|-----------|---------------------------|-|
| ImageItem | N | ComplexType	| Use one ImageItem per hotel image. |


**ImageItem**

|  Element |	Required | Data Type 	|  Description |
|----------|-----------|---------------------------|-|
| ImageFormat | N | ComplexType	| something |


**ImageFormat**

|  Element |	Required | Data Type 	|  Description |
|----------|-----------|---------------------------|-|
| URL | Y | StringLength1to32	| Contains a URl poiting to a hotel image. The supported image format is JPG.  |

