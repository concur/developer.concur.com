--- 
title: Get an entry image URL 
layout: reference 
---
 
## Description 
Retrieves the URL for the receipt image associated with the expense entry that matches the supplied entry ID. 

## Request 

### Request parameters 

#### Path parameters 

| Parameter | Required/Optional | Description | 
|-----------|-----------|---------------------| 
| expenseentry/{_entryId_} | required | The identifier for the desired entry, and the expenseentry keyword. | 

Example: `https://www.concursolutions.com/api/image/v1.0/expenseentry/{entryId}` 

**URI Source**: The entryId is returned in the **RpeKey** element within the **ExpenseEntry** element of the [Get Report Details][1] response.

### Headers 

#### Authorization header 

Authorization header with OAuth token for valid Concur user. The OAuth consumer must be the owner of the report that the expense entry belongs to.

#### Accept header 
application/xml 

## Response 

### Content-Types 
application/xml 

### Content body 
This request will return an **Image** parent element. 

####  Image elements 

| Element |  Description | 
|-----------|---------------------| 
| Id | The unique identifier of the image. | 
| Url | The URL for the entry image. Note that special characters will be XML-encoded. You will need to unencode any special characters before using the link.| 

## Examples 

### XML example request 

```xml 
GET /api/image/v1.0/expenseentry/A2C40CEE415B43B2A0BE HTTPS 1.1
Host: www.concursolutions.com
Authorization: OAuth {access token}
``` 

### XML example of successful response 

```xml 
200 OK
Content-Type: application/xml

<Image xmlns="http://www.concursolutions.com/api/image/2011/02"
           xmlns:i="http://www.w3.org/2001/XMLSchema-instance">
    <Id>A2C40CEE415B43B2A0BE</Id>
    <Url>https://api.example.com/getImage?cid=able999999&amp;val=F9B35244G86</Url>
</Image>
```

[1]: /api-reference/expense/expense-report/expense-form-resource/expense-form-resource-get.html

