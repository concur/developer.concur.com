# Purchase Order Receipts

* [Update a purchase order](#put)
* [Schema](#schema)



## <a name="put"></a>Update a purchase order
    PUT /invoice/purchaseorderreceipts


### Parameters
Name | Type | Format | Description
-----|------|--------|------------
`purchaseOrderReceipt'	|	-	|	`body`	|	**Required** Purchase Order Receipt information



## <a name="schema"></a>Schema


###Error
Name | Type | Format | Description
-----|------|--------|------------
`ErrorCode`	|	`string`	|	-	|	A code that indicates why the purchase order was not processed successfully.`ErrorMessage`	|	`string`	|	-	|	A description of the error.`FieldCode`	|	`string`	|	-	|	A code that indicates which field caused an issue. This code typically appears only when a field is being validated against a field of a form type. Format: LEVEL|CODE. The possible levels are: Header, ShipTo, BillTo, LineItem, Allocation. See Purchase Order Responses and Errors for more information.`LineItemExternalID`	|	`string`	|	-	|	The external ID of a line item that caused an error. If the error is related to an allocation, this field indicates the external ID of the line item that the allocation is associated with, and also indicates the allocation that caused of the error. See Purchase Order Responses and Errors for more information.`Message`	|	`string`	|	-	|	`PurchaseOrderNumber`	|	`string`	|	-	|	The purchase order number.`Status`	|	`string`	|	-	|	The result of processing the purchase order. Format: SUCCESS or FAILURE
