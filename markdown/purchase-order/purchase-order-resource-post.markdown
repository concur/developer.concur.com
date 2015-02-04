[Source](https://developer.concur.com/purchase-order/purchase-order-resource/purchase-order-resource-post "Permalink to Purchase Order Resource: POST | Developer Portal")

# Purchase Order Resource: POST | Developer Portal

This resource supports the following POST actions:

##  Post Purchase Order Request

| ----- |
|  Description |  Supported Content Types |
|  Creates or updates one or more purchase orders. All purchase order requests are considered a batch operation, even if only one purchase order is created or updated.

**NOTE**: Concur Invoice is vastly configurable. Use the following process to get the list of custom fields configured for the various forms:

1. Use the [Get Available Form Types][1] function to get the form codes associated with the Invoice Purchase Order header, Line Item and Allocation forms.
2. Use the [Get Form Data][2] function to get the FormId for the specific forms that you wish to use.
3. Use the [Get Form Field Details][3] function to get the list of configured fields (including custom fields) for the forms.
 |   |
|  Query Parameters - Required |  Query Parameters - Optional |
|  None |  None |
|  Request Headers - Required |  Request Headers - Optional |
|  Authorization header with OAuth token for valid Concur user. |  None |
|  Content Body |   |
|  This request should contain a **Batch** parent element with a **PurchaseOrder** parent element for each included purchase order. The **PurchaseOrder** element contains the following child elements:  

|  Element |  Required (must contain value)? |  Description |
|  PoNumber |  Y |  The purchase order number. |   |
|  PolicyExternalId |  Y |  This is the external identifier of the policy that should be associated to the purchase order. External id is a property of the policy within configurations. |
|  ExternalId |  Y |  A customer supplied value that uniquely identifies the line item within a purchase order. |
|  LineNumber |  Y |  The number of the line items within the purchase order. |
|  SupplierPartId |  N |  Any number that might help to identify the line item, it may be values such as the supplier part number or even the manufacturer number. |
|  CurrencyCode |  Y |  The [3-letter ISO 4217 currency code][4] of the currency that is associated to the purchase order. |
|  VendorCode |  Y |  The code that identifies the vendor that should be associated to the purchase order. |
|  VendorAddressCode |  Y |  The code that identifies the vendors remit address that should be associated to the purchase order. |
|  ShipTo |  Y |  The customer's shipping address, which is where the vendor should ship the goods. This parent element contains the following child elements:

|  ExternalId |  A unique value supplied by the customer to identify a particular shipping or billing address. Required. |
|  Name |  An optional name that can be given to the shipping and billing address. |   | | |
|  Address1 |  Address 1 of the shipping or billing address. Required. |
|  Address2 |  Address 2 of the shipping or billing address. |
|  Address3 |  Address 3 of the shipping or billing address. |
|  City |  The city of the shipping or billing address. Required. |
|  StateProvince |  The state or province of the shipping or billing address. Required. |
|  PostalCode |  The postal code of the shipping or billing address. Required. |
|  CountryCode |  The code of the country associated to the shipping or billing address. Required. |

 |
|  BillTo |  Y |  The customer's billing address, which is where the vendor should send the bill. This parent element contains the following child elements:

|  ExternalId |  A unique value supplied by the customer to identify a particular shipping or billing address. Required. |
|  Name |  An optional name that can be given to the shipping and billing address. |   | | |
|  Address1 |  Address 1 of the shipping or billing address. Required. |
|  Address2 |  Address 2 of the shipping or billing address. |
|  Address3 |  Address 3 of the shipping or billing address. |
|  City |  The city of the shipping or billing address. Required. |
|  StateProvince |  The state or province of the shipping or billing address. Required. |
|  PostalCode |  The postal code of the shipping or billing address. Required. |
|  CountryCode |  The code of the country associated to the shipping or billing address. Required. |

 |
|  OrderDate |  Y |  The date goods were ordered. Format YYYY-MM-DD. |
|  Name |  N |  A name to the overall purchase order. |
|  Description |  N |  A description of the overall purchase order. |
|  RequestedDeliveryDate |  N |  The date the purchase order instructed the vendor to deliver the goods. Format YYYY-MM-DD. |
|  RequestedBy |  N |  The person that requests the goods associated to the purchase order. |
|  PaymentTerms |  N |  The NET payment terms with a supplier. |
|  DiscountTerms |  N |  The NET discount terms with a supplier when discounts apply. |
|  DiscountPercentage |  N |  The discount from the supplier if the discount terms are met. |
|  Tax |  N |  The overall tax of the purchase order. |
|  RequestedDeliveryDate |  N |  The date the line item of the purchase order instructed the vendor to deliver the goods. Format YYYY-MM-DD |
|  Shipping |  N |  The overall shipping cost of the purchase order. |
|  ShippingDescription |  N |  Describes how the goods associated to the purchase order are going to be shipping, i.e. via FedEx. |
|  Custom1 through Custom 24 |  Depends on configuration |

A value that can be applied to a custom field of the same name that is part of the purchase order header form.

**NOTE**: If any of the custom fields are configured to contain list values, please refer to the [Posting Custom List Items][5] page for information on how to correctly submit list item values.

 |
|  LineItem |  Y |  Details the line items that are associated to the purchase order. The request can contain one or more **LineItem** elements. Refer to the Line Item Elements table for the child elements. |
|  Shipping Terms |  N |  The code representing shipping terms with a supplier. Maximum 10 characters. |
|  Shipping Method |  N |  The code representing the shipping method used by the supplier. Maximum 10 characters. |
|  Needed By |  N |  The date by which the purchase order must be fulfilled. Format: YYYY-MM-DD |
|  Account Number |  N |  The vendor account number. |

| ----- |
|  Line Item Elements |
|  Element |  Required (must contain value)? |  Description |
|  RequestedBy |  N |  The person that requests the goods associated to the line item of the purchase order. |
|  ExpenseType |  Y, if AccountCode is not supplied |  Expense Type of the line item.  ExpenseType OR AccountCode must be supplied, but not both. |
|  AccountCode |  Y, if ExpenseType is not supplied |  Account Code of the line item. ExpenseType OR AccountCode must be supplied, but not both. |
|  Description |  N |  A description of the line item. |
|  Quantity |  Y |  The quantity associated to the line item. |
|  UnitPrice |  Y |  The price of each item of the line item. |
|  Tax |  N |  Any tax that is associated to the line item. |
|  Custom1 through Custom20 |  Depends on configuration |  A value that can be applied to a custom field of the same name that is part of the purchase order line item form. |
|  Allocation |  N |  Details the allocations that are associated to the line item. Allocation elements can be repeated within the same line items to represent multiple allocations. This parent element contains the following child elements:

|  Amount |  The total amount of the allocation. Required. |
|  Custom1 through Custom20 |  A value that can be applied to a custom field of the same name that is part of the allocation form. |   | | |

 |

 |

####  XML Example Request

    POST /api/invoice/purchaseorder/v1.0 HTTPS 1.1
    Host: www.concursolutions.com
    Authorization: OAuth {access token}
    ...
    <Batch>
        <PurchaseOrder>
            <PoNumber>PO123456</PoNumber>
            <PolicyExternalId>USPOLICY</PolicyExternalId>
            <CurrencyCode>USD</CurrencyCode>
            <VendorCode>HOMEDEPOT</VendorCode>
            <VendorAddressCode>REMITADDRMNLOC101</VendorAddressCode>
            <ShipTo>
                <ExternalId>SHIP12345</ExternalId>
                <Name>Location 5</Name>
                <Address1>23345 South West Street</Address1>
                <Address2></Address2>
                <Address3></Address3>
                <City>Minneapolis</City>
                <StateProvince>MN</StateProvince>
                <PostalCode>554303</PostalCode>
                <CountryCode>US</CountryCode>
            </ShipTo>
            <BillTo>
                <ExternalId>BILL12345</ExternalId>
                <Name>Head Quarters</Name>
                <Address1>23345 South West Street</Address1>
                <Address2></Address2>
                <Address3></Address3>
                <City>Minneapolis</City>
                <StateProvince>MN</StateProvince>
                <PostalCode>554303</PostalCode>
                <CountryCode>US</CountryCode>
            </BillTo>
            <OrderDate>2011-03-15</OrderDate>
            <Name>Office Depot Order</Name>
            <Description>Office Supplies</Description>
            <RequestedDeliveryDate>2011-03-17</RequestedDeliveryDate>
            <RequestedBy>Greg</RequestedBy>
            <PaymentTerms>30</PaymentTerms>
            <DiscountTerms>10</DiscountTerms>
            <DiscountPercentage>15</DiscountPercentage>
            <Tax>2.25</Tax>
            <Shipping>1.17</Shipping>
            <ShippingDescription>Shipped</ShippingDescription>
            <Custom1>Custom Value 1</Custom1>
            <Custom2>Custom Value 2</Custom2>
            <Custom3>Custom Value 3</Custom3>
            <Custom4>Custom Value 4</Custom4>
            <Custom5>Custom Value 5</Custom5>
            <Custom6>Custom Value 6</Custom6>
            <Custom7>Custom Value 7</Custom7>
            <Custom8>Custom Value 8</Custom8>
            <Custom9>Custom Value 9</Custom9>
            <Custom10>Custom Value 10</Custom10>
            <Custom11>Custom Value 11</Custom11>
            <Custom12>Custom Value 12</Custom12>
            <Custom13>Custom Value 13</Custom13>
            <Custom14>Custom Value 14</Custom14>
            <Custom15>Custom Value 15</Custom15>
            <Custom16>Custom Value 16</Custom16>
            <Custom17>Custom Value 17</Custom17>
            <Custom18>Custom Value 18</Custom18>
            <Custom19>Custom Value 19</Custom19>
            <Custom20>Custom Value 20</Custom20>
            <Custom21>Custom Value 21</Custom21>
            <Custom22>Custom Value 22</Custom22>
            <Custom23>Custom Value 23</Custom23>
            <Custom24>Custom Value 24</Custom24>
            <LineItem>
                <LineNumber>1</LineNumber>
                <ExternalId>LINE1</ExternalId>
                <SupplierPartId>ABC-DEF</SupplierPartId>
                <RequestedDeliveryDate>2011-03-17</RequestedDeliveryDate>
                <RequestedBy>Greg</RequestedBy>
                <Description>Pencils</Description>
                <Quantity>100</Quantity>
                <UnitPrice>.25</UnitPrice>
                <Tax>0.17</Tax>
                <ExpenseType>Supplies</ExpenseType>
                <AccountCode></AccountCode>
                <CreateDate>2011-03-15</CreateDate>
                <Custom1>Custom Value 1</Custom1>
                <Custom2>Custom Value 2</Custom2>
                <Custom3>Custom Value 3</Custom3>
                <Custom4>Custom Value 4</Custom4>
                <Custom5>Custom Value 5</Custom5>
                <Custom6>Custom Value 6</Custom6>
                <Custom7>Custom Value 7</Custom7>
                <Custom8>Custom Value 8</Custom8>
                <Custom9>Custom Value 9</Custom9>
                <Custom10>Custom Value 10</Custom10>
                <Custom11>Custom Value 11</Custom11>
                <Custom12>Custom Value 12</Custom12>
                <Custom13>Custom Value 13</Custom13>
                <Custom14>Custom Value 14</Custom14>
                <Custom15>Custom Value 15</Custom15>
                <Custom16>Custom Value 16</Custom16>
                <Custom17>Custom Value 17</Custom17>
                <Custom18>Custom Value 18</Custom18>
                <Custom19>Custom Value 19</Custom19>
                <Custom20>Custom Value 20</Custom20>
                <Allocation>
                    <Amount>25.17</Amount>
                    <Custom1>Custom Value 1</Custom1>
                    <Custom2>Custom Value 2</Custom2>
                    <Custom3>Custom Value 3</Custom3>
                    <Custom4>Custom Value 4</Custom4>
                    <Custom5>Custom Value 5</Custom5>
                    <Custom6>Custom Value 6</Custom6>
                    <Custom7>Custom Value 7</Custom7>
                    <Custom8>Custom Value 8</Custom8>
                    <Custom9>Custom Value 9</Custom9>
                    <Custom10>Custom Value 10</Custom10>
                    <Custom11>Custom Value 11</Custom11>
                    <Custom12>Custom Value 12</Custom12>
                    <Custom13>Custom Value 13</Custom13>
                    <Custom14>Custom Value 14</Custom14>
                    <Custom15>Custom Value 15</Custom15>
                    <Custom16>Custom Value 16</Custom16>
                    <Custom17>Custom Value 17</Custom17>
                    <Custom18>Custom Value 18</Custom18>
                    <Custom19>Custom Value 19</Custom19>
                    <Custom20>Custom Value 20</Custom20>
                </Allocation>
            </LineItem>
        </PurchaseOrder>
    </Batch>

##  Post Purchase Order Response

| ----- |
|  HTTP Responses |  Supported Content Types |
|  [HTTP Status Codes][6] |   |
|  Content Body |   |
|  This request will return a** Response** parent element with the following child elements:  

|  Element |  Description |
|  Processed |  The total number of purchase orders processed in the request. |   |
|  Success |  The total number of successfully processed purchase orders in the request. |
|  Failures |  The total number of unsuccessfully processed purchase orders in the request. |
|  Results |  This will contain a **PurchaseOrderResult** parent element for each purchase order. The **PurchaseOrderResult** element will contain the following child elements:

|  PoNumber |  The purchase order number associated to the processed purchase order. |
|  Status |  The result of processing the purchase order. Format is SUCCESS or FAILURE. |   | |
|  ErrorCode |  The code to identify why the purchase order was not processed successfully. |
|  LineItemExternalId |  Will display the line item external id of a line item that caused the error. If the error is related to an Allocation, this will indicate the external id of the line item that the allocation is associated with and which allocation was the cause of the error. Refer to [Responses and Errors][7] for more information. |
|  FieldCode |  The code that indicates which field caused an issue. This typically only appears when a field is being validated against a field of a form type. The format of the code will be LEVEL|CODE. The possible levels are: Header, ShipTo, BillTo, LineItem, Allocation. Refer to [Responses and Errors][7] for more information. |

 |

 |

####  XML Example Response with Success and Failure

    200 OK
    Content-Type: application/xml
    <Response xmlns="http://www.concursolutions.com/api/invoice/purchaseorder/2011/03" xmlns:i="http://www.w3.org/2001/XMLSchema-instance">
        <Processed>2</Processed>
        <Success>1</Success>
        <Failures>1</Failures>
        <Results>
            <PurchaseOrderResult>
                <PoNumber>AAAABBB123445</PoNumber>
                <Status>SUCCESS</Status>
            </PurchaseOrderResult>
            <PurchaseOrderResult>
                <PoNumber>KJL8978798789</PoNumber>
                <Status>FAILURE</Status>
                <ErrorCode>8000</ErrorCode>
                <ErrorMessage>The required field is missing</ErrorMessage>
                <LineItemExternalId>LINEONE</LineItemExternalId>
                <FieldCode>LineItem|Custom1</FieldCode>
            </PurchaseOrderResult>
        </Results>
    </Response>

  
Last Modified: 5/20/2013 12:23 PM PDT

[1]: https://developer.concur.com/node/469
[2]: https://developer.concur.com/node/469#getformdata
[3]: https://developer.concur.com/node/471
[4]: http://en.wikipedia.org/wiki/ISO_4217
[5]: https://developer.concur.com/node/554
[6]: https://developer.concur.com/node/205
[7]: https://developer.concur.com/node/394/#responses
