---
title: Get a report image URL
layout: reference
---
 
## Description 
Retrieves the receipt PDF file URL for the specified report ID.The URL is valid for 30 minutes after the request. If receipts have been uploaded to specific expense entries, they will all be bundled into one PDF at the report level.

## Request 

### Request parameters 

#### Path parameters 

| Parameter | Required/Optional | Description | 
|-----------|-----------|---------------------| 
|report/{_imageId_} | required | The identifier for the image and the report keyword. | 

Example: `https://www.concursolutions.com/api/image/v1.0/report/{imageId}` 

### Headers 

#### Authorization header 

Authorization header with OAuth token for valid Concur user. Required. The OAuth consumer must be the owner of the report that the image belongs to. 

#### Accept header 
application/xml 

## Response 

### Content-Types 
application/xml 

### Content body 
This request will return an **Image** parent element. 

#### Image elements 

| Element |  Description | 
|-----------|---------------------| 
| Id | The unique identifier of the image. | 
| Url | The URL for the report image. Note that special characters will be XML-encoded. You will need to unencode any special characters before using the link.| 

## Examples 

### XML example request 

```xml 
GET /api/expense/list/v1.0/nqd1YesaKhCWCFIhY8JeBJYf2UGdpwJ2r HTTPS 1.1
Host: www.concursolutions.com
Authorization: OAuth {access token}
Content-Type: application/xml   
... 
``` 

### XML example of successful response 

```xml 
200 OK
Content-Type: application/xml

<Image xmlns="http://www.concursolutions.com/api/image/2011/02" xmlns:i="http://www.w3.org/2001/XMLSchema-instance">
    <Id>A2C40CEE415B43B2A0BED</Id>
    <Url>https://api.example.com/getImage?cid=able999999&amp;val=F9B35244G86</Url>
</Image>
 
```


