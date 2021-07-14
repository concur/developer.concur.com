---
title: Direct Connect - Hotel v2 - Update History
layout: reference
---

History of changes in HS2 developer documentation

|Date of Change|Description|
|--------------|------------|
|June 23, 2021|More details on ReadItin response and fix to Rate/ExpireDate on RateDetails.|
|May 17, 2021|Update description for Reservation response confirmation number of type 40 to specify Hotel reservation number.|
|May 7, 2021| Add response time and content length expectations to Intro page. Add RequestorID to examples for consistency.|
|Apr 23, 2021| Correcting examples to remove elements/attributes that are not supported. Adding clarification for Reservation.PersonName.NamePrefix. Adding examples of usage for StateProv element. Clarifying expectations for imageURLs in Seach and DescriptiveInfo |
|Mar 19, 2021| Remove mention of content not being accessible to mobile app. Correction to Availability `RoomTypes` description. Correction to `RoomDescription` to indicate multiple text elements are accepted. Removed mention of offset attribute as option for `AbsoluteDeadline`|
|Mar 16, 2021| Clarify what value is sent in `GuaranteeType` in Reservation Request|
|Feb 16, 2021| New node `TPA Property Reference Info` added to the Search Response. Description update to clarify that what value is sent in `HotelLoyaltyProgram` is always sent as `ProgramCode` in `Memberbship`|
|Feb 8, 2021| Remove `PaymentPolicies` in Reservation Response. Change type `Text` to string in Descriptive Information Response. Change type and description of `Text` under `RatePlanDescription` in Availability and Rate Details Response.
|Jan 29, 2021| Clarify `NamePrefix` in Reservation Request. Make `PaymentPolicies` in Reservation Response optional|
|Jan 27, 2021| Update `Deadline` under `CancelPenalty` to optional node. Update `AbsoluteDeadline` attribute under `Deadline` to required.  Update type of `URL` in `TPA_HotelPreviewImageURI` to `string`.|
|Jan 11, 2021|`formattedText` type is replaced with `string`. No longer accepts `Deadline` node under `Guarantee` in Availability and Rate Details. Updated `ImageFormat`'s URL type. Updated `RateId` and `RatePlanId` type. Added description of `RoomRates` in Reservation. `AmountBeforeTax` is now optional in Availability and Rate Details.|
|Dec 15, 2020| Added BasicPropertyInfo and Timespan to Reservation Response Docs|
|Dec 4, 2020| Clarification of NoCancelInd and Absolute Deadline in CancelPenalty, Rate-Details and Availability|

