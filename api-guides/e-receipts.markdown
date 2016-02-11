---
title: eReceipts Recipe
layout: reference
---

## Posting for eReceipt
This series of API Recipes describes API tasks associated with **Apps for Me**. Apps for Me are applications designed for individual business travelers, for example eReciepts and Traveler Awareness and Convenience apps like EZ Cater.

Travel Suppliers and Travel Management Companies will want to use the process for posting an eReceipt and can skip the **Before you begin** section which follows.

#### Before you Begin

Before a partner user can download and use an App for Me from the App Center, ensure that you have completed the following:

- Ensure your app supports Concur's [App Center flow](https://developer.concur.com/api-reference/authentication/authentication.html) so that travelers can authenticate from within Concur's Mobile app
- Ensure your app supports the ability to [connect your users to and from](https://developer.concur.com/api-reference/authentication/authentication.html#access-tokens) your Partner app or website
- Ensure your app supports the ability to [disconnect](https://developer.concur.com/api-reference/authentication/authentication.html#revoke-single-access-token) the user from their Partner account
- Ensure your app includes the ability to [refresh the Concur authentication token](https://developer.concur.com/api-reference/authentication/authentication.html#refreshing-access-token)
- Ensure your app includes the ability to respond appropriately to revoked token messages <API Guide link>
- Ensure your app has at least [two methods by which it can authenticate](https://developer.concur.com/api-reference/authentication/authentication.html#access-tokens)
Ensure that if your Partner currently generates a receipt image, (.png, .jpg,.tif. pdf or other image file) that you include it in your post to Concur*

Concur generates a standard receipt for Partners who do not tender a receipt image. The standard receipt may not include additional fees and taxes collected the user's locale like VAT.

#### Posting for eReceipt: Submitting expenses to Concur
The eReceipt endpoint allows app partners to send an eReceipt to Concur on behalf of the user. This is particularly useful if you want to provide an automated expense experience for your users. For example, Uber currently sends an eReceipt to Concur whenever a user makes a payment transaction. Instead of the user forwarding an Uber email receipt, an eReceipt is sent on his/her behalf. An eReceipt can contain the same information, if not all, of the partner's receipt.

Currently the eReceipts service supports these three types of receipts: general purpose receipts, hotel receipts for either hospitality service or accommodation and ride receipt for a ride service. It is important to remember that the Receipt Service only accepts receipts up to six months old. For more information, consult the Receipts article in the [Concur.com API Reference]( https://developer.concur.com/api-reference/expense/receipts/index.html) materials.

This diagram explains how to send an eReceipt to Concur:

<html>
<body>jekyll

<img src="images/Send_a_receipt_to_Concur.jpg" alt="Send a receipt to Concur">

</body>
</html>


#### Accessing the eReceipt API:
Unlike all the other Concur API endpoints, eReceipt requires the Concur Platform team to configure your sandbox to enable access. You can make that request from the Support Page [here](https://developer.concur.com/tools-support/support.html). Remember to include the name of the Concur representative you with whom you are working in the form.

The POST fields required for the eReceipt endpoint are located in the official Concur developer page [here](https://developer.concur.com/api-reference/expense/receipts/index.html#post), and test it out in our Swagger page [here](https://www.concursolutions.com/api/docs/index.html).

##### Important

- Use the ERECPT scope. More details [here](https://developer.concur.com/api-reference/authentication/authentication.html#web). Search Term: ERECPT.
- Use the easier Native Flow authentication for Application 2 in your sandbox to retrieve the user token
- Ensure that your dates are recent

Refer to the sample eReceipt POST body below for guidance:

```
JSON
{
  "Type": "Ride",
  "TransactionDateTime": "2014-06-16T16:03:24",
  "Amount": 88.6,
  "CurrencyCode": "USD",
  "MatchingFact": {
    "Type": "OAuth",
    "Value": "<insert access token here>"
  },
  "Merchant": {
    "Name": "RideMerchantName",
    "Location": {
      "Name": "RideMerchantLocationName",
      "Address": "RideMerchantAddress",
      "Address2": "RideMerchantAddress2",
      "City": "RideMerchantCity",
      "CountrySubdivisionCode": "WA",
      "CountryCode": "US",
      "PostalCode": "RPostalCode",
      "InternetAddress": "http://ridemerchanturl",
      "EmailAddress": "ridemerchant@email",
      "TelephoneNumber": "800-RMERCPH",
      "FaxNumber": "800-RMERCFX"
    }
  },
  "FormofPaymentCode": "CCARD",
  "PaymentCard": {
    "Type": "VI",
    "MaskedNumber": "4321",
    "AuthorizationCode": "PaymentAuthCode"
  },
  "RideDetail": {
    "StartDateTime": "2014-06-10T15:08:24.637928-07:00",
    "EndDateTime": "2014-06-10T15:48:24.637928-07:00",
    "DriverName": "RideDriverName",
    "VehicleNumber": "RideVehicleNumber",
    "DropoffLatitude": 47.4436655,
    "DropoffLongitude": -122.2982266,
    "LineItems": [
      {
        "SequenceNumber": 1,
        "Reference": "RideRefId01",
        "Description": "Ride Item 01 Description",
        "Description2": "Ride Item 01 Description2",
        "Quantity": 1,
        "Amount": 73.65
      },
      {
        "SequenceNumber": 2,
        "Reference": "RideRefId02",
        "Description": "Ride Item 02 Description",
        "Description2": "Ride Item 02 Description2",
        "Quantity": 1,
        "Amount": 4.95
      },
      {
        "SequenceNumber": 3,
        "Reference": "RideRefId03",
        "Description": "Ride Item 03 Description",
        "Description2": "Ride Item 03 Description2",
        "Quantity": 1,
        "Amount": 10
      }
    ]
  },
  "CustomFields": [
    {
      "Name": "RideCustomField01Name",
      "Value": "RideCustomField02Value"
    },
    {
      "Name": "RideCustomField02Name",
      "Value": "RideCustomField02Value"
    },
    {
      "Name": "RideCustomField03Name",
      "Value": "RideCustomField03Value"
    }
  ],
  "ImageBase64": "<insert Base64 representation of image"
}
```

Test your API in the [API Explorer](https://concurapi.readme.io/docs/post-e-receipt).

The user experience should flow like this:


<html>
<body>

<img src="images/Normal_flow.jpg" alt="Normal flow">

</body>
</html>


#### Make us better at making your experience easier.
Share a Concur API process issue we can do better. Provide us with an explanation, screen shots and your recommendation [here](http://forum.developer.concur.com/).
