---
title: Purchase Request
layout: reference
---

# Purchase Request
* [Create a new purchase request](#post)
* [Get status of a purchase request](#get)
* [Schema](#create_purchase_request_schema)
* [Response schema](#create_purchase_request_schema-response)
* [Error codes](#error-codes)


## Version
4.0  


## <a name="post"></a>Create a new purchase request  

    POST  /purchaserequest/v1/purchaserequest  

Create a Purchase Request.

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
"purchaseRequest" : {
                        "userEmail" : "john.deo@concur",
                        "description" : "New office supplies",
                        "policyExternalId" : "po-external-id",
                        "currencyCode" : "USD",
                        "custom1" : "ADVT",
                        "notesToSupplier" : "Office space request phase 1",
                  
                        "lineItems" : [
                            {
                                "purchaseType" : "SRVC",
                                "vendorCode" :"VEN1",
                                "vendorAddressCode" : "ADDR1"
                                "description" : "monitor",
                                "quantity" : "20",
                                "unitPrice" : "154.4",
                                "receiptType" : "WQTY",
                                "neededByDate": "2018-06-28",
                                "uomCode" : "DA",
                                "shipping" : "13.5",
                                "tax" : "11",
                                "supplierPartID" : "DAQT1"
                                "custom2" : "LGVT1",
                                "url" :[
                                    "http://officesupplies.com/monitor", 
                                ],
                                "comments" : "Phase 1 request for new employees for monitor",
                                "comments" : "Request for new office supplies - monitor",
                            },
                            {
                                "purchaseType" : "SRVC",
                                "vendorCode" :"VEN1",
                                "vendorAddressCode" : "ADDR1"
                                "description" : "office chair",
                                "quantity" : "20",
                                "unitPrice" : "346.2",
                                "receiptType" : "WQTY",
                                "neededByDate": "2018-06-28",
                                "uomCode" : "DA",
                                "shipping" : "15",
                                "tax" : "17.5",
                                "supplierPartID" : "DAQT2"
                                "custom2" : "LGVT2",
                                "url" :[
                                    "http://officesupplies.com/officechair", 
                                ],
                                "comments" : "Phase 1 request for new employees for office chair",
                                "comments" : "Request for new office supplies - chair",
                            }
                        ]
                    }
    ```


    
### Response  

[Response schema](#create_purchase_request_schema-response)  


- Example - Output
    ```json
"purchaseRequestResponse" : {
                        "id" : "de9c0894-b807-6943-8e3f-49a707da3456"
                    }
    ```

## <a name="get"></a>Get status of a purchase request  

    POST  /purchaserequest/v1/{id}/status  

Get status of a purchase request.

### <a name="8"></a>Parameters  

|Name | Type | Format | Description
|-----|------|--------|------------
|`X_AUTH_TOKEN`|`string`|`header`|Bearer Token that identifies the caller. This is the company JWT
|`Content-Type`|`string`|`header`|application/json

### Input  

None.

### Response


[Schema](#get_purchase_request_schema_response)

- Example - Output
    ```json
"purchaseRequestStatusResponse" : {
                        "id" : "de9c0894-b807-6943-8e3f-49a707da3456",
                        "status" : "CREATED",
                        "purchaseRequestReference" : "PR100000"
                    }
    ```


## <a name="create_purchase_request_schema"></a>Create Purchase Request Schema  

|Name | Type | Format | Description
|-----|------|--------|------------
|`userID`|`string`|-|**Required**: The employee that is requesting the items. This is UUID of the employee. Either UserID or UserEmail or UserLoginID is required to identify employee
|`userEmail`|`string`|-|**Required**: The employee that is requesting the items. This is employee's email. Either UserID or UserEmail or UserLoginID is required to identify employee
|`userLoginID`|`string`|-|**Required**: The employee that is requesting the items. This is employee's login ID. Either UserID or UserEmail or UserLoginID is required to identify employee
|`description`|`string`|-|A description of the purchase request
|`policyExternalId`|`string`|-|**Required**: The external identifier of the policy that should be associated with the purchase order. The external ID is a property of the policy configuration screen. Clients will need to get these ID's from the Implementation team. 
|`currencyCode`|`string`|-|**Required**: The 3-letter ISO 4217 currency code of the currency that is associated with the purchase order. The values used here will be used for all items on this request. IE: USD 
|`Custom1 through Custom24`|`string`|-|Each custom field used should have its own row in the message. If the field is tied to a connected list, the accepted value is the Item Code setup for the list in Concur.
|`notesToSupplier`|`String `|-|Notes you want to print on the transmitted PO PDF sent to your supplier
|`lineItems`|`array`|[`LineItem`](#lineItem)|Requested items or services related to this Purchase Request

#### <a name="lineItem"></a>LineItem  

|Name | Type | Format | Description
|-----|------|--------|------------
|`purchaseType`|`string`|-|**Required**: Can be two values "GOOD" or "SRVC" depending on whether the item is for goods or services. Displayed as just "Type" in the UI. 
|`vendorCode`|`string`|-|**Required**: The code that identifies the Vendor. This value can be found in the vendor information form of Vendor Manager. This is used along with Vendor Address Code to determine the specific Vendor record. 
|`vendorAddressCode`|`string`|-|**Required**: The code that identifies the vendor's address. This value can be found in the vendor information form of Vendor Manager and is labeled Address Accounting Code. This is used along with Vendor Code to determine the specific Vendor record. 
|`description`|`string`|-|**Required**: A description of the line item.
|`quantity`|`decimal`|-|**Required**: The quantity associated with the line item.
|`unitPrice`|`decimal`|-|**Required**: The unit price of the line item.
|`receiptType`|`string`|-|Accepted values are WQTY or NONE. The items will default to None. WQTY Indicates you need to receive quantity against this item. If you are using Concur Receiving and need to enter Goods Receipts against the resulting PO lines use WQTY. 
|`neededByDate`|`date`|-|The date by which the purchase order must be fulfilled. Format: YYYY-MM-DD
|`uoMCode`|`string`|-|UOM code for the purchase request item. Accepted values are the UOM Codes setup in the Unit of Measure configuration .
|`shipping`|`decimal`|-|The total shipping cost for the Item.
|`tax`|`decimal`|-|Tax amount that is associated with the line item.
|`supplierPartID`|`string`|-|An ID value that helps to identify the line item. This could be a value such as the vendor’s part number or even the manufacturer number.
|`Custom1 through Custom20`|`string`|-|Each custom field used should have its own row in the message. If the field is tied to a connected list, the accepted value is the Item Code setup for the list in Concur.
|`url`|`string`|-|A URL related to the item. You can have multiple URL's per item. 
|`comments`|`string`|-|Internal comments you want to record related to this record. 
|`notesToVendor`|`string`|-|Notes related to the Item that can display on the transmitted PO PDF to the vendor.

## <a name="create_purchase_request_schema-response"></a>Create Purchase Request Response Schema 

|Name | Type | Format | Description
|-----|------|--------|------------
|`errors`|`array`|[`Error`](#error)|An array of errors indicating which fields have failed validation
|`id`|`string`|`-`|The unique purchase request reference Id if the request has passed all validations. This reference Id will be needed to look up status of purchase request creation.


## <a name="error"></a>Error

|Name | Type | Format | Description
|-----|------|--------|------------
|`errorCode`|`string`|`-`|A code that indicates a specific error code indicating why a particular field had failed validation
|`errorMessage`|`string`|`-`|A description of the error.  


## <a name="error-codes"></a>Error Codes  

The REST API's error responses

|Code | Description
|-----|--------------
|1000|The PO number is missing or invalid.
|2000|There was no vendor found for the supplied Vendor Code and Vendor Address Code.
|3000|The Currency Code is missing or invalid.

## <a name="get_purchase_request_schema_response"></a>Get Purchase Request Response Schema 

|Name | Type | Format | Description
|-----|------|--------|------------
|`id`|`string`|`-`|The unique purchase request reference Id obtained during create purchase request API call.
|`status`|`string`|`-`|Status indicating status of purchase request - PENDING_CREATION or CREATED or CREATE_FAILED
|`purchaseRequestReference`|`string`|`-`|The unique purchase request identifier which can be used to uniquely identify a purchase request resource in Concur application
