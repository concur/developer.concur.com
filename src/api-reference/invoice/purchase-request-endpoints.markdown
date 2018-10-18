---
title: Purchase Request v4
layout: reference
---

{% include prerelease.html %}

The Purchase Request API gives clients the ability to leverage external data to create Concur Invoice purchase requests for pre-authorization. Clients and Partners can build a direct connection where data can be fed to the purchase request API which will create new purchase requests in Concur. These API-created purchase requests are automatically submitted into the Concur Invoice pre-authorization workflow. Once approved, it will result in a Concur Invoice purchase order that can be transmitted to your Vendor from Concur Invoice. 

In addition a Get Status endpoint is provided that can be used to get basic information and check the status of the created purchase request. 

> **Limitations**: This API does not support users in the China data center.

* [Products and Editions](#products-editions)
* [Scope Usage](#scope-usage)
* [Dependencies](#dependencies)
* [Access Token Usage](#access-token-usage)
* [Create a new purchase request](#post)
* [Get details of purchase request](#get)
* [Schema](#create_purchase_request_schema)
* [Response schema](#create_purchase_request_schema-response)
* [Error codes](#error-codes)

## <a name="products-editions"></a>Products and Editions

* Concur Invoice Professional Edition
* Concur Invoice Standard Edition

## <a name="scope-usage"></a>Scope Usage

Name|Description|Endpoint
---|---|---
`PurchaseRequest.Read`|Read only access to purchase request data|Get details of a purchase request
`PurchaseRequest.Write`|Read and Write access to purchase request data|Create a new purchase request

## <a name="dependencies"></a>Dependencies

None

## <a name="access-token-usage"></a>Access Token Usage

This API will work with both Company or User access tokens, however a Company `access token` is recommended for integrations using this API if the end goal is for the integration to create purchase requests for multiple requestors. When using a User `access token` to create purchase requests through the API it will result in the purchase request being assigned to the user that generated the User `access token` and it will not honor the user set in the payload. A User `access token` could be used for testing to check if your payloads are good if needed. For an integration as mentioned above a Company `access token` is the best choice.   

## <a name="post"></a>Create a new purchase request  

    POST  /purchaserequest/v4/purchaserequests

Create a Purchase Request based on provided header and line item details. If the request is valid it returns back a unique identifier to look at purchase request details and creates a purchase request in back ground.

### <a name="8"></a>Parameters  

|Name | Type | Format | Description
|-----|------|--------|------------
|`Authorization`|`string`|`header`|**Required**: Bearer Token that identifies the caller. This is the company JWT
|`Content-Type`|`string`|`header`|**Required**: application/json
|`concur-correlationid`|`string`|`header`|A unique correlation id the caller of API can pass to track specific requests if needed
|`purchaseRequest`|`string`|`body`|**Required**: The details of the purchase request


### Input  

[Schema](#create_purchase_request_schema)

- Example  Input <br>
  **Note:** This is just a sample set of fields. The fields and values needing to be passed for your entity will vary based on your edition of concur and your forms and fields setup, but should include most of these common fields.

```shell
POST /purchaserequest/v4/purchaserequests
Authorization: Bearer {token}
Content-Type: application/json
```


  ```json
  {
      "description" : "New office supplies",
      "userLoginId" : "john.deo@concur",
      "policyExternalId" : "po-external-id",
      "currencyCode" : "USD",
      "notesToSupplier" : "Office space request phase 1",
      "comments" : "office supplies request",
      "custom1" : "ADVT",

      "lineItems" : [
          {
              "purchaseType" : "SERVICES",
              "vendorCode" :"VEN1",
              "vendorAddressCode" : "ADDR1",
              "description" : "monitor",
              "quantity" : "20",
              "unitPrice" : "154.4",
              "receiptType" : "QUANTITY_RECEIPT",
              "neededByDate": "2018-06-28",
              "uomCode" : "DA",
              "shipping" : "13.5",
              "tax" : "11",
              "supplierPartId" : "DAQT1",
              "url" :[
                  "http://officesupplies.com/monitor"
              ],
              "notesToVendor" : "Phase 1 request monitor",
              "comments" : "Phase 1 request for new employees for monitor",
              "custom2" : "LGVT1"
          },
          {
              "purchaseType" : "GOODS",
              "vendorCode" :"VEN1",
              "vendorAddressCode" : "ADDR1",
              "description" : "office chair",
              "quantity" : "20",
              "unitPrice" : "346.2",
              "receiptType" : "NONE",
              "neededByDate": "2018-06-28",
              "uomCode" : "DA",
              "shipping" : "15",
              "tax" : "17.5",
              "supplierPartId" : "DAQT2",
              "url" :[
                  "http://officesupplies.com/officechair"
              ],
              "notesToVendor" : "Phase 1 request office chair",
              "comments" : "Phase 1 request for new employees for office chair",
              "custom3" : "DEPT",
              "custom4" : "SALES"
          }
      ]
  }
  ```

### Response  

[Response schema](#create_purchase_request_schema-response)  


- Example - Output
 ```json
     {
        "id" : "b1e22581-ff4a-48e9-981b-2f5065579096",
        "uri": "http://us.api.concursolutions.com/purchaserequest/v4/purchaserequests/b1e22581-ff4a-48e9-981b-2f5065579096?mode=COMPACT"
     }
 ```

## <a name="get"></a>Get details of a purchase request

 ```shell
GET  /purchaserequest/v4/purchaserequests/{id}?mode=COMPACT
Authorization: Bearer {token}
Content-Type: application/json
 ```

Gets purchase request details. Currently only supported mode is COMPACT which returns basic info about the purchase request along with any exceptions if present.

### <a name="8"></a>Parameters  

|Name | Type | Format | Description
|-----|------|--------|------------
|`Authorization`|`string`|`header`|**Required**: Bearer Token that identifies the caller. This is the company JWT
|`Content-Type`|`string`|`header`|**Required**: application/json
|`concur-correlationid`|`string`|`header`|A unique correlation id the caller of API can pass to track specific requests if needed
|`mode`|`string`|`parameter`|**Required**: Specifies mode for get purchase request details. Currently supported mode COMPACT

### Input  

None

### Response


[Schema](#get_purchase_request_schema_response)

- Example - Output
 ```json
     {
        "purchaseRequestId" : "de9c0894-b807-6943-8e3f-49a707da3456",
        "purchaseRequestNumber" : "100000",
        "purchaseRequestQueueStatus" : "CREATED",
        "purchaseRequestWorkflowStatus" : "Approved"
     }
 ```


## <a name="create_purchase_request_schema"></a>Create Purchase Request Schema  

|Name | Type | Format | Description
|-----|------|--------|------------
|`userId`|`string`|-|**Required**: The employee that is requesting the items. This is UUID of the employee. Either UserId or UserEmail or UserLoginId is required to identify employee
|`userEmail`|`string`|-|**Required**: The employee that is requesting the items. This is employee's email. Either UserId or UserEmail or UserLoginId is required to identify employee
|`userLoginId`|`string`|-|**Required**: The employee that is requesting the items. This is employee's Id. Either UserId or UserEmail or UserLoginId is required to identify employee
|`description`|`string`|-|A description of the purchase request
|`policyExternalId`|`string`|-|The external identifier of the policy that should be associated with the purchase order. This will default to the default policy setup for the user group assigned to the requesting employee. This is the external Id from the policy configuration screen. Clients will need to get these ID’s from the Implementation team if they need to assign different policies than the default
|`currencyCode`|`string`|-|**Required**: The 3-letter ISO 4217 currency code of the currency that is associated with the purchase order. The values used here will be used for all items on this request. IE: USD
|`notesToSupplier`|`string`|-|Notes you want to print on the transmitted PO PDF sent to your supplier
|`comments`|`string`|-|Internal comments you want to record related to this record
|`custom1 through custom24`|`string`|-|Each custom field used should have its own row in the message. If the field is tied to a connected list, the accepted value is the Item Code setup for the list in Concur
|`lineItems`|`array`|[`LineItem`](#lineItem)|**Required**: Requested items or services related to this Purchase Request

#### <a name="lineItem"></a>LineItem  

|Name | Type | Format | Description
|-----|------|--------|------------
|`purchaseType`|`string`|-|**Required**: Can be two values "GOODS" or "SERVICES" depending on whether the item is for goods or services. Displayed as just "Type" in the UI
|`vendorCode`|`string`|-|**Required**: The code that identifies the Vendor. This value can be found in the vendor information form of Vendor Manager. This is used along with Vendor Address Code to determine the specific Vendor record
|`vendorAddressCode`|`string`|-|**Required**: The code that identifies the vendor's address. This value can be found in the vendor information form of Vendor Manager and is labeled Address Accounting Code. This is used along with Vendor Code to determine the specific Vendor record
|`description`|`string`|-|**Required**: A description of the line item
|`quantity`|`decimal`|-|**Required**: The quantity associated with the line item
|`unitPrice`|`decimal`|-|**Required**: The unit price of the line item
|`receiptType`|`string`|-|Accepted values are QUANTITY_RECEIPT or NONE. If a value is not provided the items it will default to NONE for SERVICES, or QUANTITY_RECEIPT for GOODS items based on purchase type.  If you are using Concur Receiving and need to enter Goods Receipts against the resulting PO lines use QUANTITY_RECEIPT
|`neededByDate`|`date`|-|The date by which the purchase order must be fulfilled. Format: YYYY-MM-DD
|`uoMCode`|`string`|-|Unit of Measure (UOM) code for the purchase request item. Accepted values are the UOM Codes setup in the Unit of Measure configuration. If no value is provided it will default a UOM based on the defaults for goods and services
|`shipping`|`decimal`|-|The total shipping cost for the Item
|`tax`|`decimal`|-|Tax amount that is associated with the line item
|`supplierPartId`|`string`|-|An Id value that helps to identify the line item. This could be a value such as the vendor’s part number or even the manufacturer number
|`url`|`array`|-|A valid URL related to the item. You can have multiple URL's per item
|`notesToVendor`|`string`|-|Notes related to the Item that can display on the transmitted PO PDF to the vendor
|`comments`|`string`|-|Internal comments you want to record related to this record
|`custom1 through custom20`|`string`|-|Each custom field used should have its own row in the message. If the field is tied to a connected list, the accepted value is the Item Code setup for the list in Concur

## <a name="create_purchase_request_schema-response"></a>Create Purchase Request Response Schema

|Name | Type | Format | Description
|-----|------|--------|------------
|`errors`|`array`|[`Error`](#error)|An array of errors indicating which fields have failed validation
|`id`|`string`|-|The unique purchase request reference Id if the request has passed all validations. This reference Id will be needed to look up details of purchase request creation
|`uri`|`string`|-|The URI to look up details of newly created purchase request

## <a name="get_purchase_request_schema_response"></a>Get Purchase Request Response Schema

|Name | Type | Format | Description
|-----|------|--------|------------
|`purchaseRequestId`|`string`|-|The unique purchase request reference Id obtained during create purchase request API call
|`purchaseRequestNumber`|`string`|-|The unique purchase request identifier which can be used to uniquely identify a purchase request resource in Concur application
|`purchaseRequestQueueStatus`|`string`|-|Status indicating status of creation of purchase request - **PENDING_CREATION** or **CREATED** or **CREATE_FAILED**
|`purchaseRequestWorkflowStatus`|`string`|-|Status indicating status of purchase request - **Approved** or **Pending Approval** or **Pending Cost Object Approval** or **Sent Back To Employee** or **Not Submitted** or **Submitted** or **Pending Processor Review** or **Vendor Approval** or **Approval Time Expired**
|`purchaseRequestExceptions`|`array`|[`PurchaseRequestExceptions`](#purchaseRequestExceptions)|Any exceptions and its details if present on the purchase request

#### <a name="purchaseRequestExceptions"></a>PurchaseRequestExceptions

|Name | Type | Format | Description
|-----|------|--------|------------
|`eventCode`|`string`|-|Event code of the exception example: PURCH_DETAIL_SUBMIT
|`exceptionCode`|`string`|-|The unique exception code
|`isCleared`|`boolean`|-|If exception has been cleared or not
|`prExceptionId`|`string`|-|The unique exception id of the purchase request
|`message`|`string`|-|The actual message of the exception with details

## <a name="error"></a>Error

|Name | Type | Format | Description
|-----|------|--------|------------
|`errorCode`|`string`|-|A code that indicates a specific error code indicating why a particular field had failed validation
|`errorMessage`|`string`|-|A description of the error
|`dataPath`|`string`|-|The path to the request data which has the error message

## <a name="error-codes"></a>Error Codes  

The Purchase Request API's error responses

HTTP Code: 400

| ErrorCode | Error Message
|-----|--------------
|missingRequestBody|Missing request body.
|invalidRequestBody|Passed request body is invalid.
|missingUserInfo|Either userID or userEmail or userLoginId is required.
|invalidUserInfo|Either userID or userEmail or userLoginId is invalid or does not have access to this resource.
|provideOneUserInformation|Provide either one of these user information: userId, userEmail, userLoginId.
|missingCurrencyCode|Currency Code is missing.
|invalidCurrencyCode|Currency Code is invalid.
|invalidPolicyInformation|Cannot find a PO policy with given external ID.
|missingPolicyInformation|The external identifier of the policy that should be associated with the purchase order. The external ID is a property of the policy configuration screen. Clients will need to get these ID's from the Implementation team.
|listCodeNotfound|Cannot find the List code in the system for the given value.
|missingLineItems|Line Items are missing.
|invalidPurchaseType|Purchase Type is invalid.
|missingPurchaseType|Purchase Type is required.
|missingVendorAddressCode|Vendor address code is required.
|missingVendorCode|Vendor code is required.
|invalidVendor|Vendor / Address code combination is invalid.
|missingDescription|Line item description is required.
|missingQuantity|Line item quantity is required.
|invalidQuantity|Line item quantity is invalid.
|missingUnitPrice|Unit price is required.
|invalidUnitPrice|Unit price is invalid.
|invalidDateFormat|Expected a date in the format yyyy-mm-dd. Example: 2018-03-23
