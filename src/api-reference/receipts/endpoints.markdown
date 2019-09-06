---
title: Endpoints
layout: reference
---

# Endpoints

* [Definitions of Resources](#definitions-of-resources)
  * [Supported Image Formats](#supported-image-formats)
* [General](#general)
  * [GET Service Index](#endpoint-service-index)
  * [GET Receipt Status by Receipt ID](#endpoint-get-receipt-status)
* [E-Receipts](#e-receipts)
  * [GET Schemas](#endpoint-schemas)
  * [POST Receipts](#endpoint-post-a-receipt)
  * [GET Receipts by User ID](#endpoint-get-receipts-by-userid)
  * [GET Receipts by Receipt ID](#endpoint-get-a-receipt-by-id)
  * [GET Receipt Image by Receipt ID](#endpoint-get-receipt-image)
* [Image-Only Receipts](#image-only-receipts)
  * [POST Image-Only Receipts](#endpoint-post-an-image-only-receipt)
  * [GET Image-Only Receipts by User ID](#endpoint-get-image-only-receipts-by-userid)
  * [GET Image-Only Receipt by Receipt ID](#endpoint-get-an-image-only-receipt-by-id)
  * [GET Receipt Image by Receipt ID](#endpoint-get-receipt-image-image-only)

### Definitions of Resources

* *__E-Receipt__* - A schema-enforced resource with data and, optionally, an image. If an image is not provided, one will be generated from the data resource.
* *__Image-Only Receipt__* - A standalone image without data.

> **Note**: The Receipts V4 API only provides GET access to individual or user’s receipts that have been submitted through this API, and, therefore the response will not be comprehensive of every user receipt within SAP Concur. All other images should be obtained via the [Image v1 API](https://developer.concur.com/api-reference/image/v1.image.html). Additionally, only the receipts will be returned, there will not be any corresponding entry data. Examples of Enterprise apps that should use the Image v1 API include: ERP integrations for financial journal entry postings, VAT reclaim integrations that obtain transactions to calculate VAT reclaim, project billing integrations used to substantiate expenses billed back, etc.

#### <a name="supported-image-formats"></a>Supported Image Formats

* Image size must not exceed 25MB.
* Images with any dimension exceeding 2,200 pixels will be reduced, with the longest dimension reduced to 2,200 pixels and the remaining dimensions scaled down using a fixed aspect ratio.
* Image must be one of the supported file types: image/png, image/jpg, image/jpeg, image/tiff, image/tif, image/gif, and application/pdf. Images provided in image/tiff and image/tif will be converted to a PDF document with the image embedded within.

### General

|Endpoint|Response Format|Request Summary|
|---|---|---|
|[GET /](#endpoint-service-index)|JSON|Get service index URLs|
|[GET /v4/status/:receiptId](#endpoint-get-receipt-status)|JSON|Get the status of a receipt|

##### Endpoint: Service Index

###### _GET /_

Making a GET request to the root of the service will return a list of current endpoints. If endpoint URLs ever change, the service index will be updated. To ensure that you are using the correct URLs, the safest practice is to check the service index before every request. The response will include current URLs for all endpoints in the receipt service.

_Example Requests:_

cURL:

```shell
curl -H "Authorization: Bearer {YOUR ACCESS TOKEN}" https://us.api.concursolutions.com/receipts/
```

HTTPie:

```shell
http https://us.api.concursolutions.com/receipts/ 'Authorization:Bearer {YOUR ACCESS TOKEN}'
```

_Example Response:_

```json
{
  "links": [
    {
      "rel": "self",
      "href": "https://us.api.concursolutions.com/receipts/v4"
    },
    {
      "rel": "receipt-get",
      "method": "GET",
      "href": "https://us.api.concursolutions.com/receipts/v4/{receiptId}"
    },
    {
      "rel": "receipt-post",
      "method": "POST",
      "href": "https://us.api.concursolutions.com/receipts/v4/users/{userId}"
    },
    {
      "rel": "receipts-get-user",
      "method": "GET",
      "href": "https://us.api.concursolutions.com/receipts/v4/users/{userId}"
    },
    {
      "rel": "schemas-get",
      "method": "GET",
      "href": "https://us.api.concursolutions.com/receipts/schemas"
    }
  ]
}
```

[Back to Top](#endpoints)

### E-Receipts

|Endpoint|Response Format|Request Summary|
|---|---|---|
|[GET /schemas](#endpoint-schemas)|JSON|Get currently supported receipt schemas|
|[POST /v4/users/:userId](#endpoint-post-a-receipt)|N/A|Post a receipt|
|[GET /v4/users/:userId](#endpoint-get-receipts-by-userid)|JSON|Get a user's receipts|
|[GET /v4/:receiptId](#endpoint-get-a-receipt-by-id)|JSON|Get a receipt by ID|
|[GET /v4/:receiptId/image](#endpoint-get-receipt-image)|image file|Get a receipt image.|

##### Endpoint: Schemas

###### _GET /schemas/:schemaId_

|Parameter|Requirement|Value|
|---|---|---|
|schemaId|optional|The ID of the schema to be returned.|

The response to a GET request to `/schemas` will have a list of JSON validation schemas for available receipt types. An array of `supportingSchemas` is also returned, but these do not represent actual receipt types.

If a schema ID is provided, then only the schema with that ID will be returned, instead of the entire schema index. The ID's of schemas are not UUIDs, but are instead just the names of the schema with the extension `.schema.json`. For example, `car-rental-receipt.schema.json` or `air-receipt.schema.json`.

One of the receipt schemas must be included in the [link header](http://json-schema.org/latest/json-schema-core.html#anchor35) of receipt POST requests with the relationship of `describedBy`. This looks like `link: <http://schema.concursolutions.com/{RECEIPT TYPE}.schema.json>;rel=describedBy`.

_Example Requests:_

cURL for the schema index:

```shell
curl -H "Authorization: Bearer {YOUR ACCESS TOKEN}" https://us.api.concursolutions.com/receipts/schemas/
```

HTTPie for the schema index:

```shell
http https://us.api.concursolutions.com/receipts/schemas 'Authorization:Bearer {YOUR ACCESS TOKEN}'
```

cURL for a single schema:

```shell
curl -H "Authorization: Bearer {YOUR ACCESS TOKEN}" https://us.api.concursolutions.com/receipts/schemas/car-rental-receipt.schema.json
```

HTTPie for a single schema:

```shell
http https://us.api.concursolutions.com/receipts/schemas/car-rental-receipt.schema.json 'Authorization:Bearer {YOUR ACCESS TOKEN}'
```

_Example Response:_

```json
{
  "receiptSchemas": [
    {
      "rel": "http://schema.concursolutions.com/air-receipt.schema.json",
      "method": "GET",
      "href": "https://us.api.concursolutions.com/receipts/schemas/air-receipt.schema.json"
    },
    {
      "rel": "http://schema.concursolutions.com/car-rental-receipt.schema.json",
      "method": "GET",
      "href": "https://us.api.concursolutions.com/receipts/schemas/car-rental-receipt.schema.json"
    },
    {
      "rel": "http://schema.concursolutions.com/general-receipt.schema.json",
      "method": "GET",
      "href": "https://us.api.concursolutions.com/receipts/schemas/general-receipt.schema.json"
    },
    {
      "rel": "http://schema.concursolutions.com/ground-transport-receipt.schema.json",
      "method": "GET",
      "href": "https://us.api.concursolutions.com/receipts/schemas/ground-transport-receipt.schema.json"
    },
    {
      "rel": "http://schema.concursolutions.com/hotel-receipt.schema.json",
      "method": "GET",
      "href": "https://us.api.concursolutions.com/receipts/schemas/hotel-receipt.schema.json"
    },
    {
      "rel": "http://schema.concursolutions.com/jpt-ic-card-receipt.schema.json",
      "method": "GET",
      "href": "https://us.api.concursolutions.com/receipts/schemas/jpt-ic-card-receipt.schema.json"
    },
    {
      "rel": "http://schema.concursolutions.com/rail-receipt.schema.json",
      "method": "GET",
      "href": "https://us.api.concursolutions.com/receipts/schemas/rail-receipt.schema.json"
    }
  ],
  "supportingSchemas": [
    {
      "rel": "http://schema.concursolutions.com/address-original.schema.json",
      "method": "GET",
      "href": "https://us.api.concursolutions.com/receipts/schemas/address-original.schema.json"
    },
    {
      "rel": "http://schema.concursolutions.com/address.schema.json",
      "method": "GET",
      "href": "https://us.api.concursolutions.com/receipts/schemas/address.schema.json"
    },
    {
      "rel": "http://schema.concursolutions.com/common.schema.json",
      "method": "GET",
      "href": "https://us.api.concursolutions.com/receipts/schemas/common.schema.json"
    },
    {
      "rel": "http://schema.concursolutions.com/discount.schema.json",
      "method": "GET",
      "href": "https://us.api.concursolutions.com/receipts/schemas/discount.schema.json"
    },
    {
      "rel": "http://schema.concursolutions.com/line-item.schema.json",
      "method": "GET",
      "href": "https://us.api.concursolutions.com/receipts/schemas/line-item.schema.json"
    },
    {
      "rel": "http://schema.concursolutions.com/location.schema.json",
      "method": "GET",
      "href": "https://us.api.concursolutions.com/receipts/schemas/location.schema.json"
    },
    {
      "rel": "http://schema.concursolutions.com/merchant.schema.json",
      "method": "GET",
      "href": "https://us.api.concursolutions.com/receipts/schemas/merchant.schema.json"
    },
    {
      "rel": "http://schema.concursolutions.com/payments.schema.json",
      "method": "GET",
      "href": "https://us.api.concursolutions.com/receipts/schemas/payments.schema.json"
    },
    {
      "rel": "http://schema.concursolutions.com/receipt-core.schema.json",
      "method": "GET",
      "href": "https://us.api.concursolutions.com/receipts/schemas/receipt-core.schema.json"
    },
    {
      "rel": "http://schema.concursolutions.com/taxes.schema.json",
      "method": "GET",
      "href": "https://us.api.concursolutions.com/receipts/schemas/taxes.schema.json"
    }
  ]
}
```

[Back to Top](#endpoints)

##### Endpoint: Get Receipt Status

###### GET /v4/status/:receiptId

|Parameter|Requirement|Value|
|---|---|---|
|receiptId|required|The id of the receipt associated with the image.|

This endpoint may be used to see the current processing status of a receipt.

When a successful POST request is made the ```Link``` header of the response contains a 'processing-status' URL. This processing-status URL will be available for two weeks after the initial POST and will provide information regarding the processing status of your receipt.

There are four possible top level statuses: `ACCEPTED`, `FAILED`, `PROCESSING`, and `PROCESSED`.

In additional to a high level status, information will be provided in an array of event logs. Events that may be included in the logs will be typed as `INFO`, `DEBUG`, `WARNING`, or `ERROR`.

Example event messages:

|Type|Message|
|---|---|
|INFO| Receipt accepted. Queued for processing. |
|INFO| Initiated receipt processing. (event for each attempt) |
|ERROR| Error from User Profile service. Queued for reprocessing. |
|ERROR| Error from Imaging service. Queued for reprocessing. |
|ERROR| Error during image generation or retrieval. Queued for reprocessing. |
|INFO| Receipt image generated. |
|ERROR| Processing failed. |
|INFO| Processing finished. |

_Example Requests:_

cURL:

```shell
curl -H "Authorization: Bearer {YOUR ACCESS TOKEN}" https://us.api.concursolutions.com/receipts/v4/status/{RECEIPT ID}
```

HTTPie:

```shell
http https://us.api.concursolutions.com/receipts/v4/status/{RECEIPT ID} "Authorization: Bearer {YOUR ACCESS TOKEN}"
```

_Example Response:_

```json
{
  "status": "PROCESSED",
  "logs": [
    {
      "logLevel": "INFO",
      "message": "Receipt accepted. Queued for processing.",
      "timestamp": "Mon, 08 May 2017 23:05:52 GMT"
    },
    {
      "logLevel": "INFO",
      "message": "Initiated receipt processing.",
      "timestamp": "Mon, 08 May 2017 23:05:52 GMT"
    },
    {
      "logLevel": "INFO",
      "message": "Receipt image generated.",
      "timestamp": "Mon, 08 May 2017 23:05:53 GMT"
    },
    {
      "logLevel": "INFO",
      "message": "Processing finished.",
      "timestamp": "Mon, 08 May 2017 23:05:54 GMT"
    }
  ]
}
```

[Back to Top](#endpoints)

##### Endpoint: Post a Receipt

###### _POST /v4/users/:userId_

|Parameter|Requirement|Value|
|---|---|---|
|userId|required|The id of the user to whom the receipt belongs.|
|receipt|required|The JSON receipt to be posted.|
|image|optional|Image of the receipt. If an image isn't provided, one will be generated automatically from the JSON. Refer to [Supported Image Formats](#supported-image-formats) for more information.|

Creating a receipt requires JSON data about the transaction and, optionally, an image of the receipt. If an image is not supplied with the request, SAP Concur will automatically generate a receipt image based on the data provided. [JSON schemas](https://developer.concur.com/api-reference/receipts/get-started.html#endpoint-schemas) are used to validate the format of receipt data received in POST requests.

Successful POST requests will receive a response of 201 Created. The `Location` header of the response contains a URL for your receipt. Once the receipt has been processed, it can be retrieved at this URL. The `Link` header of the response contains a processing-status URL for your receipt. More information can be found [here](#endpoint-get-receipt-status).

Helpful Notes:
- Include link as a header and make its value: “<http://schema.concursolutions.com/{receipt type}.schema.json>;rel=describedBy”
- Copy a sample receipt of that receipt type from the documentation (https://developer.concur.com/api-reference/receipts/sample-receipts.html) and post it into the body of this POST call → you can then edit this body to your specification

If you are not providing an image with your receipt data, the body of the request should be your receipt JSON.

Receipt images may be posted along with data. In this case, SAP Concur will use the provided image instead of generating a new one. To post data and an image, use multipart form data. The `Content-Type:multipart/form-data` header must be set. The image should be included under the key `image`, and the receipt JSON should be included under the key `receipt`. For information regarding image size, dimension, and type, please refer to [Supported Image Formats](#supported-image-formats).

_Example Requests:_

cURL data without image:

```shell
curl -v -X POST https://us.api.concursolutions.com/receipts/v4/users/{USER ID FROM YOUR ID TOKEN} \
-H "Authorization: Bearer {YOUR ACCESS TOKEN}" \
-H "Content-Type: application/json" \
-H "link: <http://schema.concursolutions.com/{VALIDATION SCHEMA FROM SCHEMA ENDPOINT}.schema.json>;rel=describedBy" \
-d @{PATH TO YOUR RECEIPT JSON}
```

cURL data and image:

```shell
curl -v -k -X POST https://us.api.concursolutions.com/receipts/v4/users/{USER ID FROM YOUR ID TOKEN} \
-H "Authorization: Bearer {YOUR ACCESS TOKEN}" \
-H "Content-Type:multipart/form-data" \
-H "link: <http://schema.concursolutions.com/{VALIDATION SCHEMA FROM SCHEMA ENDPOINT}.schema.json>;rel=describedBy" \
-F "receipt=<{PATH TO YOUR RECEIPT JSON};type=application/json" \
-F "image=@{PATH TO YOUR IMAGE};type={FILE MIME TYPE OF YOUR IMAGE}"
```

HTTPie data without image:

```shell
http POST https://us.api.concursolutions.com/receipts/v4/users/{USER ID FROM YOUR ID TOKEN} \
"Authorization:Bearer {YOUR ACCESS TOKEN}" \
"Content-Type: application/json" \
"link: <http://schema.concursolutions.com/{VALIDATION SCHEMA FROM SCHEMA ENDPOINT}.schema.json>;rel=describedBy" \
< {PATH TO YOUR RECEIPT JSON}
```

_Example Response:_

```http
HTTP/1.1 201 Created
Link: <http://schema.concursolutions.com/car-rental-receipt.schema.json>; rel="describedBy", <https://us.api.concursolutions.com/receipts/v4/status/b0a4ab2bce8a49a08cf177cb997bf2ee>; rel="processing-status"
Location: https://us.api.concursolutions.com/receipts/v4/b0a4ab2bce8a49a08cf177cb997bf2ee
Content-Length: 0
Connection: keep-alive
```

[Back to Top](#endpoints)

##### Endpoint: Get a Receipt by ID

###### _GET /v4/:receiptId_

|Parameter|Requirement|Value|
|---|---|---|
|receiptId|required|The id of the receipt to be returned.|

Returns the JSON receipt associated with the ID in the URL.

_Example Requests:_

cURL:

```shell
curl -H "Authorization: Bearer {YOUR ACCESS TOKEN}" https://us.api.concursolutions.com/receipts/v4/{RECEIPT ID}
```

HTTPie:

```shell
http https://us.api.concursolutions.com/receipts/v4/{RECEIPT ID} "Authorization: Bearer {YOUR ACCESS TOKEN}"
```

_Example Response_

```json
{
  "dateTimeReceived": "2016-09-28T21:41:21.087Z",
  "id": "85b76a2bf51a4ed7b8b252994d7d9e2b",
  "image": "",
  "receipt": {
    ...Receipt JSON...
  },
  "userId": "08bdda1e-0d4f-4261-9f1b-f9b8d9f817d6",
  "validationSchema": "http://schema.concursolutions.com/car-rental-receipt.schema.json",
  "self": "https://us.api.concursolutions.com/receipts/v4/85b76a2bf51a4ed7b8b252994d7d9e2b",
  "template": "https://us.api.concursolutions.com/receipts/v4/{receiptId}"
}
```

[Back to Top](#endpoints)

##### Endpoint: Get Receipts By UserId

###### _GET /v4/users/:userId_

|Parameter|Requirement|Value|
|---|---|---|
|userId|required|The id of the user whose receipts will be returned.|

Returns all receipts for a given user ID.

_Example Requests:_

cURL:

```shell
curl -H "Authorization: Bearer {YOUR ACCESS TOKEN}" https://us.api.concursolutions.com/receipts/v4/users/{USER ID}
```

HTTPie:

```shell
http https://us.api.concursolutions.com/receipts/v4/users/{USER ID} "Authorization: Bearer {YOUR ACCESS TOKEN}"
```

_Example Response:_

```json
{
  "receipts": [
    {
      "dateTimeReceived": "2016-09-28T21:41:21.087Z",
      "id": "85b76a2bf51a4ed7b8b252994d7d9e2b",
      "image": "",
      "receipt": {
        ...Receipt JSON...
      },
      "userId": "08bdda1e-0d4f-4261-9f1b-f9b8d9f817d6",
      "validationSchema": "http://schema.concursolutions.com/car-rental-receipt.schema.json",
      "self": "https://us.api.concursolutions.com/receipts/v4/85b76a2bf51a4ed7b8b252994d7d9e2b",
      "template": "https://us.api.concursolutions.com/receipts/v4/{receiptId}"
    },
    {
      "dateTimeReceived": "2016-09-28T19:59:30.488Z",
      "id": "df8c1161d917439c9e6f141fd0d6b588",
      "image": "",
      "receipt": {
        ...Receipt JSON...
      },
      "userId": "08bdda1e-0d4f-4261-9f1b-f9b8d9f817d6",
      "validationSchema": "http://schema.concursolutions.com/car-rental-receipt.schema.json",
      "self": "https://us.api.concursolutions.com/receipts/v4/df8c1161d917439c9e6f141fd0d6b588",
      "template": "https://us.api.concursolutions.com/receipts/v4/{receiptId}"
    },
    ...
  ]
}
```

[Back to Top](#endpoints)

##### Endpoint: Get Receipt Image

###### _GET /v4/:receiptId/image_

|Parameter|Requirement|Value|
|---|---|---|
|receiptId|required|The id of the receipt associated with the image.|

If an image or PDF document was generated by or POSTed to Receipts v4, this endpoint can return the image in the same format that it was originally received by the API. Images for receipts created with v3 of the API are _not_ accessible via this endpoint.

_Example Requests:_

cURL:

```shell
curl -H "Authorization: Bearer {YOUR ACCESS TOKEN}" https://us.api.concursolutions.com/receipts/v4/{RECEIPT ID}/image
```

HTTPie:

```shell
http https://us.api.concursolutions.com/receipts/v4/{RECEIPT ID}/image "Authorization: Bearer {YOUR ACCESS TOKEN}"
```

[Back to Top](#endpoints)

### Image-Only Receipts

> **Note**: This API is not designed to obtain the receipt images attached to an expense report. If you are an Enterprise Partner creating integrations that are intended to obtain final-approved Expense or Invoice data, and the accompanying receipt images that substantiate those transactions you will need to use [Image v1](https://developer.concur.com/api-reference/image/v1.image.html). These scenarios include, but are not limited to: ERP integrations for financial journal entry postings, VAT reclaim integrations that obtain transactions to calculate VAT reclaim, project billing integrations used to substantiate expenses billed back, etc.

|Endpoint|Response Format|Request Summary|
|---|---|---|
|[POST /v4/users/:userId/image-only-receipts](#endpoint-post-an-image-only-receipt)|N/A|Post an image-only receipt|
|[GET /v4/users/:userId/image-only-receipts](#endpoint-get-image-only-receipts-by-userid)|JSON|Get a user's image-only receipts|
|[GET /v4/image-only-receipts/:receiptId](#endpoint-get-an-image-only-receipt-by-id)|JSON|Get an image-only receipt by ID|

##### Endpoint: Post an Image-Only Receipt

###### _POST /v4/users/:userId/image-only-receipts_

|Parameter|Requirement|Value|
|---|---|---|
|userId|required|The id of the user to whom the receipt image belongs.|
|image|required|Image of the receipt. Refer to [Supported Image Formats](#supported-image-formats) for more information.|

Successful POST requests will receive a response of 202 Accepted. The Location header of the response contains a URL for your receipt image. Once the receipt has been processed, it can be retrieved at this URL. The Link header of the response contains a processing-status URL for your receipt image.

Helpful Notes:
- The header must include content-type with multipart/form-data as its value
- In the body, add "image" as a key and select "file" from the dropdown since you will be linking an image file. Then, choose your saved image file as the value.

For information regarding image size, dimension, and type, please refer to [Supported Image Formats](#supported-image-formats).

_Example Requests:_

cURL:

```shell
curl -v -X POST https://us.api.concursolutions.com/receipts/v4/users/{USER ID FROM YOUR ID TOKEN}/image-only-receipts \
-H "Authorization: Bearer {YOUR ACCESS TOKEN}" \
-H "Content-Type:multipart/form-data" \
-F "image=@{PATH TO YOUR IMAGE};type=image/{FILE MIME TYPE OF YOUR IMAGE}"
```

_Example Response:_

```shell
HTTP/1.1 202 Accepted
Link: <https://us.api.concursolutions.com/receipts/v4/status/b0a4ab2bce8a49a08cf177cb997bf2ee>; rel="processing-status"
Location: https://us.api.concursolutions.com/receipts/v4/images/b0a4ab2bce8a49a08cf177cb997bf2ee
Content-Length: 0
Connection: keep-alive
```

[Back to Top](#endpoints)

##### Endpoint: Get Image-Only Receipts By UserId

###### _GET /v4/users/:userId/image-only-receipts_

|Parameter|Requirement|Value|
|---|---|---|
|userId|required|The id of the user whose receipt images will be returned.|

Returns the JSON metadata of receipt images for the user ID specified in the URL. Results should be paginated in the same manner as the e-receipt endpoint.

_Example Requests:_

cURL:

```shell
curl -H "Authorization: Bearer {YOUR ACCESS TOKEN}" https://us.api.concursolutions.com/receipts/v4/users/{USER ID}/image-only-receipts
```

HTTPie:

```shell
http https://us.api.concursolutions.com/receipts/v4/users/{USER ID}/image-only-receipts "Authorization: Bearer {YOUR ACCESS TOKEN}"
```

_Example Response:_

```json
HTTP/1.1 200 OK
Content-Length: 800
Connection: keep-alive

{
	"receiptsImages": [
	    {
	        "dateTimeReceived": "Wed May 24 2017 16:14:17 GMT+00:00",
	        "id": "a90fc48e0f0a44f2bd4838fd773b07a5",
	        "image": "https://us.api.concursolutions.com/receipts/v4/image-only-receipts/a90fc48e0f0a44f2bd4838fd773b07a5/image",
	        "userId": "abcd123456efg"
	    },
	    { ... },
	],
	"next": "https://us.api.concursolutions.com/receipts/v4/users/abcd123456efg/image-only-receipts/page/1507587575592_d4721b2f3b304a9a9325fabdad5f50ad"
}
```

[Back to Top](#endpoints)

##### Endpoint: Get an Image-Only Receipt by ID

###### _GET /v4/image-only-receipts/:receiptId_

|Parameter|Requirement|Value|
|---|---|---|
|receiptId|required|The id of the receipt image to be returned.|

Returns the JSON metadata associated with the ID in the URL.

_Example Requests:_

cURL:

```shell
curl -v -X GET https://us.api.concursolutions.com/receipts/v4/image-only-receipts/{RECEIPT ID} \
-H "Authorization: Bearer {YOUR ACCESS TOKEN}"
```

HTTPie:

```shell
http https://us.api.concursolutions.com/receipts/v4/image-only-receipts/{RECEIPT ID} "Authorization: Bearer {YOUR ACCESS TOKEN}"
```

_Example Response_

```json
HTTP/1.1 200 OK
Content-Length: 272
Connection: keep-alive

{
    "dateTimeReceived": "Wed May 24 2017 16:14:17 GMT+00:00",
    "id": "a90fc48e0f0a44f2bd4838fd773b07a5",
    "image": "https://us.api.concursolutions.com/receipts/v4/image-only-receipts/a90fc48e0f0a44f2bd4838fd773b07a5/image",
    "userId": "abcd123456efg"
}
```

[Back to Top](#endpoints)

##### Endpoint: Get Receipt Image (Image-Only)

###### _GET /v4/image-only-receipts/:receiptId/image_

|Parameter|Requirement|Value|
|---|---|---|
|receiptId|required|The id of the receipt image to be returned.|

Returns the image in the same format that it was originally received by the API (image/png, image/jpg, image/jpeg, image/tiff, image/tif, image/gif, or application/pdf).

_Example Requests:_

cURL:

```shell
curl -H "Authorization: Bearer {YOUR ACCESS TOKEN}" https://us.api.concursolutions.com/receipts/v4/image-only-receipts/{RECEIPT ID}/image
```

HTTPie:

```shell
http https://us.api.concursolutions.com/receipts/v4/image-only-receipts/{RECEIPT ID}/image "Authorization: Bearer {YOUR ACCESS TOKEN}"
```

[Back to Top](#endpoints)
