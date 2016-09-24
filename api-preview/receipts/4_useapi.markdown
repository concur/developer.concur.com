---
title: Use the Receipts API
layout: reference
---

# Receipts

- [Get the Service Index](#get-the-service-index)
- [Create Receipts](#create-receipts)
  - [Send Receipt Data](#send-receipt-data)
  - [Send Receipt Data and Image](#send-receipt-data-and-image)
- [Get Current Receipts Schemas](#get-current-receipts-schemas)
- [Get Receipts](#get-receipts)
  - [With Receipt ID](#with-receipt-id)
  - [With User ID](#with-user-id)

## Get the Service Index

``` 
GET /receipts/v4 
```

### Headers

Header | Description
-------|------------
`Authorization`|JSON Web Token obtained by the client application from the Authentication API.

### Parameters

None.

### Request Body

None.

### Successful Response

```
200 OK
```

Name | Description
-----|------------
`rel`|Abstracted name of the API.
`method`|Method to be used with the URI.
`href`|Current URI for the API.

## Create Receipts

### Send Receipt Data

```
POST /receipts/v4/users/{userId}
```

#### Headers

Header | Description
-------|------------
`Content-type`|Specify `application/json`.
`Link`|Specify the URL of the receipt schema type. For example, specify `<http://schema.concursolutions.com/hotel-receipt.schema.json>;rel=describedBy` if posting a receipt of type hotel. If a receipt image is being generated on a partners behalf, we will use the schema type mentioned in this field to select the appropriate receipt template. List of available receipt schema types can be obtained by making the [Get Current Receipts Schemas](#get-current-receipts-schemas) call. 
`Authorization`|JSON Web Token obtained by the client application from the Authentication API.

#### Parameters

Name | Description
-----|------------
`userId`|The user ID of the user for whom the receipt is being posted. To get the user ID, make sure you have requested the `openid` scope for your client application. Then when you make a call to the Authentication API for a token, one of the fields in the response should be `id_token`. Decode the `id_token` and look for the field `useruuid`. The value of the `useruuid` field is to be provided here.

### Request Body

A receipt specified as a JSON document using the format of one of the receipt schema types.

### Successful Response

```
201 Created
```

### Send Receipt Data and Image

Coming soon

## Get Current Receipts Schemas

```
GET /receipts/v4/schemas
```

### Headers

Header | Description
-------|------------
`Authorization`|JSON Web Token obtained by the client application from the Authentication API.

### Parameters

None.

### Request Body

None.

### Successful Response

```
200 OK
```

Name | Description
-----|------------
`rel`|Identifier for the schema.
`method`|Method to be used with the URI.
`href`|URL to be used to retrieve the schema.

## Get Receipts

### With Receipt ID

```
GET /receipts/v4/{receiptId}
```

#### Headers

Header | Description
-------|------------
`Authorization`|JSON Web Token obtained by the client application from the Authentication API.

#### Parameters

Name | Description
-----|------------
`receiptId`|The response of a successful receipt post will have a `Location` header that includes a URL of where the receipt is stored. This URL has the receipt ID. 

#### Request Body

None.

#### Successful Response

```
200 OK
```

### With User ID

```
GET /receipts/v4/{userId}
```

#### Headers

Header | Description
-------|------------
`Authorization`|JSON Web Token obtained by the client application from the Authentication API.

#### Parameters

Name | Description
-----|------------
`userId`|The user ID of the user whose all receipts are being requested. To get the user ID, make sure you have requested the `openid` scope for your client application. Then when you make a call to the Authentication API for a token, one of the fields in the response should be `id_token`. Decode the `id_token` and look for the field `useruuid`. The value of the `useruuid` field is to be provided here.

#### Request Body

None.

#### Successful Response

```
200 OK
```
