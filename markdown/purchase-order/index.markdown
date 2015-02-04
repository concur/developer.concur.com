[Source](https://developer.concur.com/purchase-order "Permalink to Purchase Order | Developer Portal")

# Purchase Order | Developer Portal


| ----- |
|  Description |
|  The Concur Invoice Purchase Order (PO) web service allows clients to send PO-related data in order to identify and resolve match exceptions on invoices. Clients can use this data in a variety of ways, including:

* Configuring match rules that compare the PO to the invoice
* Viewing the invoice and its associated PO side-by-side, to resolve exceptions
* Make selected updates to the PO in Concur (such as a unit price or quantity), in order to resolve exceptions
The client remains the PO system-of-record. Creation, routing, and approval of POs is done only in the client system, not within Concur. The web service provides real-time access to approved PO data. |
|  Works With These Concur Products |
|

* **Invoice** for Concur Professional/Premium
 |
|  Concur Connect API Structure |
|

Refer to **Web Services > [Core Concepts][1]** for:
* Detailed information regarding the format, structure and process of making calls to a Concur Web Service.
* Information on authentication and authorization for all Concur Web Services.
* Information on registering and enabling partner applications to use Concur Web Services.
 |
|  Product Restrictions |
|

You must have the Concur Invoice product to use this web service.

Concur products are highly configurable, and not all clients will have access to all features.

Partner developers must determine which configurations are required for their solution prior to the application review process. Use the [Developer Forum][2] if you have questions about the configuration settings.

Existing clients can work with Concur Advantage Technical Services to create custom applications that work with their configuration.

 |
|  Resources |
|

The version 3.0 documentation includes the data model and tools to send test requests to your developer sandbox.

[Version 3.0 Purchase Orders ][3]

[Version 3.0 Purchase Order Receipts ][4]

Version 1.0 documentation includes the data model and example requests and responses.

[Version 1.0 Purchase Order][5]

 |
|  Additional Information |
|

Responses and Errors

 |

##  Responses and Errors

Refer to the [HTTP Codes][6] page for details of the common responses and errors.

####  Invoice Purchase Order Errors

The web service will not return a 4xx HTTP response code for a batch operation even when every item in the batch failed to be created, updated or deleted. The client must inspect the response to look for warnings or errors with individual batch items.

**XML Response Error Codes**:

| ----- |
|  Error Code |  Message |
|  1000 |  The PO number is missing or invalid. |
|  2000 |  There was no vendor found for the supplied Vendor Code and Vendor Address Code. |
|  3000 |  The Currency Code is missing or invalid. |
|  4000 |  There was no policy found matching the supplied External Id. |
|  4001 |  The policy does not support purchase orders. |
|  4002 |  The policy cannot be changed on the purchase order. |
|  5000 |  The purchase order does not contain any line items. |
|  5001 |  The line item must contain expense type or account code, but not both. |
|  5002 |  The line item expense type is invalid. |
|  5003 |  The line item account code is invalid. |
|  5004 |  The line item tax and unit price must both match positive or negative. |
|  5500 |  The line item contains an allocation, but no allocation form is defined. |
|  5501 |  The line item allocation amounts exceed the line item total. |
|  5502 |  The distribution amounts for a line item must match the line item amount positive or negative. |
|  5503 |  The distribution amounts for a line item cannot be zero. |
|  5600 |  The external id for the line item is not unique across the purchase order. |
|  6000 |  The Ship To Address is missing or invalid. |
|  6001 |  The Bill To Address is missing or invalid. |
|  8000 |  A required field is missing. |
|  8001 |  A field's value exceeds the maximum length allowed. |
|  8002 |  A field's value is not the correct data type. |
|  8003 |  A field's value is an invalid list item. |
|  8004 |  A field's value is an invalid connected list item. |
|  8005 |  The Country Code is missing or invalid. |
|  8006 |  A value was supplied for a field that is not part of the form. |
|  9999 |  An unexpected error occurred. |

 

**Field Codes**:

The following field codes are used for error codes in the 8000 range, and identify which field is causing an error. Typically field codes are used when validating an XML element's value against a form field's configuration for the supplied policy.

The table below lists all the field codes and at what level they are available. For example: Custom1 can point to an element at the purchase order or line item level where as PoNumber would only display for the purchase order level.

| ----- |
|  Code  |  Ship To / Bill To  |  Purchase Order  |  Line Item  |  Allocation  |
|  Address1 |  Y |  N |  N |  N |
|  Address2 |  Y |  N |  N |  N |
|  Address3 |  Y |  N |  N |  N |
|  Amount |  N |  N |  N |  Y |
|  City |  Y |  N |  N |  N |
|  CountryCode |  Y |  N |  N |  Y |
|  Custom1 |  N |  Y |  Y |  Y |
|  Custom2 |  N |  Y |  Y |  Y |
|  Custom3 |  N |  Y |  Y |  Y |
|  Custom4 |  N |  Y |  Y |  Y |
|  Custom5 |  N |  Y |  Y |  Y |
|  Custom6 |  N |  Y |  Y |  Y |
|  Custom7 |  N |  Y |  Y |  Y |
|  Custom8 |  N |  Y |  Y |  Y |
|  Custom9 |  N |  Y |  Y |  Y |
|  Custom10 |  N |  Y |  Y |  Y |
|  Custom11 |  N |  Y |  Y |  Y |
|  Custom12 |  N |  Y |  Y |  Y |
|  Custom13 |  N |  Y |  Y |  Y |
|  Custom14 |  N |  Y |  Y |  Y |
|  Custom15 |  N |  Y |  Y |  Y |
|  Custom16 |  N |  Y |  Y |  Y |
|  Custom17 |  N |  Y |  Y |  Y |
|  Custom18 |  N |  Y |  Y |  Y |
|  Custom19 |  N |  Y |  Y |  Y |
|  Custom20 |  N |  Y |  Y |  Y |
|  Custom21 |  N |  Y |  N |  N |
|  Custom22 |  N |  Y |  N |  N |
|  Custom23 |  N |  Y |  N |  N |
|  Custom24 |  N |  Y |  N |  N |
|  Description |  N |  Y |  Y |  N |
|  DiscountPercentage |  N |  Y |  N |  N |
|  DiscountTerms |  N |  Y |  N |  N |
|  ExtermalId |  Y |  N |  Y |  N |
|  LineNumber |  N |  N |  Y |  N |
|  Name |  Y |  Y |  N |  N |
|  OrderDate |  N |  Y |  N |  N |
|  PaymentTerms |  N |  Y |  N |  N |
|  PoNumber |  N |  Y |  N |  N |
|  PostalCode |  Y |  N |  N |  N |
|  Quantity |  N |  N |  Y |  N |
|  RequestedBy |  N |  Y |  Y |  N |
|  RequestedDeliveryDate |  N |  Y |  Y |  N |
|  Shipping |  N |  Y |  N |  N |
|  ShippingDescription |  N |  Y |  N |  N |
|  StateProvince |  Y |  N |  N |  N |
|  SupplierPartId |  N |  N |  Y |  N |
|  Tax |  N |  Y |  Y |  N |
|  Total |  N |  Y |  Y |  N |
|  UnitPrice |  N |  N |  Y |  N |

Return to Top

  
Last Modified: 10/18/2013 11:16 AM PDT

[1]: https://developer.concur.com/node/25
[2]: https://developer.concur.com/forums/concur-connect
[3]: https://www.concursolutions.com/api/docs/index.html#!/PurchaseOrders
[4]: https://www.concursolutions.com/api/docs/index.html#!/PurchaseOrderReceipts
[5]: https://developer.concur.com/node/396
[6]: https://developer.concur.com/node/205
