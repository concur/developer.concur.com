---
title: Direct Connect - Hotel v2 - Update History
layout: reference
---

History of changes in HS2 developer documentation

|Date of Change|Description|
|--------------|------------|
|Feb 16, 2021| New node `TPA Property Reference Info` added to the Search Response. Description update to clarify that what value is sent in `HotelLoyaltyProgram` is always sent as `ProgramCode` in `Memberbship`|
|Feb 8, 2021| Remove `PaymentPolicies` in Reservation Response. Change type `Text` to string in Descriptive Information Response. Change type and description of `Text` under `RatePlanDescription` in Availability and Rate Details Response.
|Jan 29, 2021| Clarify `NamePrefix` in Reservation Request. Make `PaymentPolicies` in Reservation Response optional|
|Jan 27, 2021| Update `Deadline` under `CancelPenalty` to optional node. Update `AbsoluteDeadline` attribute under `Deadline` to required.  Update type of `URL` in `TPA_HotelPreviewImageURI` to `string`.|
|Jan 11, 2021|`formattedText` type is replaced with `string`. No longer accepts `Deadline` node under `Guarantee` in Availability and Rate Details. Updated `ImageFormat`'s URL type. Updated `RateId` and `RatePlanId` type. Added description of `RoomRates` in Reservation. `AmountBeforeTax` is now optional in Availability and Rate Details.|
|Dec 15, 2020| Added BasicPropertyInfo and Timespan to Reservation Response Docs|
|Dec 4, 2020| Clarification of NoCancelInd and Absolute Deadline in CancelPenalty, Rate-Details and Availability|

