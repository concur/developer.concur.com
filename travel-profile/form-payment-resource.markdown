---
title: Form of Payment Resource 
layout: resource
---


## Description
The Form of Payment resource represents the form of payment a Concur user uses by default during travel. You can use this resource to obtain the following information associated with a user's preferred method of payment:

* Card display name
* Card vendor
* Credit card number
* Expiration date
* Card owner's Name
* Billing address
* Preferred usage


## Resource URI
`https://www.concursolutions.com/api/travelprofile/v1.0/fop/`

## Content types

|       Request content types      |        Accept content types      |  
|:---------------------------------|:---------------------------------|
|         application/xml          |         application/xml          |


## Who can use this resource?
This endpoint can be used by travel suppliers or travel management companies (TMC). The scope of information returned varies depending on who makes the request.

## Operations
[Get preferred method of payment details][1]

## See also
[Loyalty Program][2]   
[Travel Profile][3]

[1]: https://developer.concur.com/travel-profile/form-payment-resource/form-payment-resource-get
[2]: https://developer.concur.com/travel-profile/loyalty-program-resource
[3]: https://developer.concur.com/travel-profile/profile-resource
