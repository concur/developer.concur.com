---
title: Purchase Request
layout: reference
---

# Purchase Request
* [Create a new purchase request](#post)
* [Get details of purchase request](#get)
* [Schema](#create_purchase_request_schema)
* [Response schema](#create_purchase_request_schema-response)
* [Error codes](#error-codes)


## Version
4.0  


## <a name="post"></a>Create a new purchase request  

    POST  /purchaserequest/v1/purchaserequests

Create a Purchase Request based on provided header and line item details. If the request is valid it returns back a unique identifier to look at purchase request details and creates a purchase request in back ground.

### <a name="8"></a>Parameters  

|Name | Type | Format | Description
|-----|------|--------|------------
|`X_AUTH_TOKEN`|`string`|`header`|Bearer Token that identifies the caller. This is the company JWT
|`Content-Type`|`string`|`header`|application/json
|`purchaseRequest`|`string`|`body`|The details of the purchase request

### Input  

[Schema](#create_purchase_request_schema)

- Example - Input
 ```json
     {
          "userEmail" : "john.deo@concur",
          "description" : "New office supplies",
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
        "uri": "http://us.api.concursolutions.com/purchaserequest/v1/purchaserequests/b1e22581-ff4a-48e9-981b-2f5065579096?mode=COMPACT"
     }
 ```

## <a name="get"></a>Get details of a purchase request

    POST  /purchaserequest/v1/purchaserequests/{id}?mode=COMPACT

Gets purchase request details. Currently only supported mode is COMPACT which return basic returns of created purchase request.

### <a name="8"></a>Parameters  

|Name | Type | Format | Description
|-----|------|--------|------------
|`X_AUTH_TOKEN`|`string`|`header`|Bearer Token that identifies the caller. This is the company JWT
|`Content-Type`|`string`|`header`|application/json
|`mode`|`string`|`parameter`|Specifies mode for get purchase request details. Currently supported mode COMPACT

### Input  

None

### Response


[Schema](#get_purchase_request_schema_response)

- Example - Output
 ```json
     {
        "purchaseRequestId" : "de9c0894-b807-6943-8e3f-49a707da3456",
        "purchaseRequestNumber" : "PR100000",
        "purchaseRequestQueueStatus" : "CREATED"
     }
 ```


## <a name="create_purchase_request_schema"></a>Create Purchase Request Schema  

|Name | Type | Format | Description
|-----|------|--------|------------
|`userId`|`string`|-|**Required**: The employee that is requesting the items. This is UUID of the employee. Either UserId or UserEmail or UserLoginId is required to identify employee
|`userEmail`|`string`|-|**Required**: The employee that is requesting the items. This is employee's email. Either UserId or UserEmail or UserLoginId is required to identify employee
|`userLoginId`|`string`|-|**Required**: The employee that is requesting the items. This is employee's Id. Either UserId or UserEmail or UserLoginId is required to identify employee
|`description`|`string`|-|A description of the purchase request
|`policyExternalId`|`string`|-|**Required**: The external identifier of the policy that should be associated with the purchase order. The external Id is a property of the policy configuration screen. Clients will need to get these ID's from the Implementation team
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
|`receiptType`|`string`|-|Accepted values are QUANTITY_RECEIPT or NONE. The items will default to NONE. QUANTITY_RECEIPT Indicates you need to receive quantity against this item. If you are using Concur Receiving and need to enter Goods Receipts against the resulting PO lines use QUANTITY_RECEIPT
|`neededByDate`|`date`|-|The date by which the purchase order must be fulfilled. Format: YYYY-MM-DD
|`uoMCode`|`string`|-|Unit of Measure (UOM) code for the purchase request item. Accepted values are the UOM Codes setup in the Unit of Measure configuration
|`shipping`|`decimal`|-|The total shipping cost for the Item
|`tax`|`decimal`|-|Tax amount that is associated with the line item
|`supplierPartId`|`string`|-|An Id value that helps to identify the line item. This could be a value such as the vendor’s part number or even the manufacturer number
|`url`|`string`|-|A URL related to the item. You can have multiple URL's per item
|`notesToVendor`|`string`|-|Notes related to the Item that can display on the transmitted PO PDF to the vendor
|`comments`|`string`|-|Internal comments you want to record related to this record
|`custom1 through custom20`|`string`|-|Each custom field used should have its own row in the message. If the field is tied to a connected list, the accepted value is the Item Code setup for the list in Concur

## <a name="create_purchase_request_schema-response"></a>Create Purchase Request Response Schema 

|Name | Type | Format | Description
|-----|------|--------|------------
|`errors`|`array`|[`Error`](#error)|An array of errors indicating which fields have failed validation
|`id`|`string`|`-`|The unique purchase request reference Id if the request has passed all validations. This reference Id will be needed to look up details of purchase request creation
|`uri`|`string`|`-`|The URI to look up details of newly created purchase request


## <a name="error"></a>Error

|Name | Type | Format | Description
|-----|------|--------|------------
|`errorCode`|`string`|`-`|A code that indicates a specific error code indicating why a particular field had failed validation
|`errorMessage`|`string`|`-`|A description of the error
|`dataPath`|`string`|`-`|The path to the request data which has the error message


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

## <a name="get_purchase_request_schema_response"></a>Get Purchase Request Response Schema 

|Name | Type | Format | Description
|-----|------|--------|------------
|`id`|`string`|`-`|The unique purchase request reference Id obtained during create purchase request API call
|`purchaseRequestNumber`|`string`|`-`|The unique purchase request identifier which can be used to uniquely identify a purchase request resource in Concur application
|`purchaseRequestQueueStatus`|`string`|`-`|Status indicating status of creation of purchase request - PENDING_CREATION or CREATED or CREATE_FAILED
