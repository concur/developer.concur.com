---
title: Direct Connect - Hotel v2 - Virtual Payment Solution
layout: reference
---

The goal of this document is to establish the flow for virtual / alternative payment methods in conjunction with booking hotels via Concur’s hotel API (HS2).   While doing so, it seeks to minimize complexity of implementation that often arises when configuration work needs to be done on both ends (Concur and supplier side).
Since the payment solution is typically handled on suppliers’ side, the supplier should control which form of payment will be made available in Concur for each specific client and property by passing the form of payment to Concur. Concur will then offer the accepted payment method to users in the booking flow.

### SETUP ON HOTEL SUPPLIER SIDE

The payment agreement is typically made with the hotel supplier. There are multiple potential options which could be:

- AirPlus Company Account or Amex BTA payment
- Virtual card payment e.g. Amex vPay or AirPlus AIDA
- Central Billing or billback agreements

All mentioned payment methods are normally set up on hotel supplier side to ensure the payment method will be part of the reservation to the hotel and to guarantee acceptance at the hotel. Furthermore, the hotel supplier takes care of invoicing.


### SETUP ON CONCUR SIDE

To make sure that the user can use the payment option that is set up on hotel supplier side the client needs to be identified at hotel supplier side. This happens with a client ID (Requestor ID). Requestor ID needs to be set up in Concur on a company (configuration) level.

### BOOKING FLOW

**1.	Search request**

Requestor ID is sent with OTA_HotelSearchRQ. Requestor IDs can only be supported on travel configuration level.


**2.	Response from hotel supplier in OTA_HotelAvailRS**

Virtual payment will be marked by the hotel supplier under Concur’s Availability endpoint, OTA_HotelAvailRS (as documented in the SAP Concur Developer Center for Direct Connect: Hotel Service 2). The element to be used will be ‘GuaranteeType’ and its value should be set to ‘none’.


**3.	Display of payment options in Concur on Review and Reserve page**

When guarantee type is set to ‘none’ the FOP selection will not be triggered in the Review and Reserve page, allowing the user to proceed with the reservation without having to specify a payment method.

![./media/image1.png](./images/examples/No_guarantee.png)



**4.	Descriptive Billing Data**

For Company Account payment or virtual payment, descriptive billing data is required. Descriptive billing data is typically profile data (e.g. cost center or employee ID) or custom trip fields (e.g. project number). Those fields need to be mapped to reference data fields in Concur so that it can be sent to the hotel supplier with the reservation. Descriptive billing data can be transmitted independently from the payment solution set up at hotel supplier. The field names can be individually defined by HotelService supplier. A client individual naming of custom fields will not be supported.

Org units can also be integrated in this workflow.  If enabled, they will be made available through our OTA_HotelResRQ call.


**5.	Reservation**

After the user has selected a rate with GuaranteeType marked as ‘none’ the reservation request will be sent with OTA_HotelResRQ. The OTA_HotelResRQ also contains descriptive billing information.
