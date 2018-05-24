---
title: Release Notes
layout: reference
---

# Developer Platform Release Notes

2018|2017|2016|2015|2014
---|---|---|---|---
--|--|--|--|--
--|--|[February](#feb2016)|[February][2-4]|--
--|[March](/changelog/2017/03/20/Digital-Tax-Invoice-API-Account-Id.html)|[March Release](/blog/2016/03/15/march-release-notes.html) - [Quick Expense](/blog/2016/03/18/quick-expense-api-payment-type.html)|--|--
--|--|[April](#april2016)|[April][2-5]|--
---|--|--|[May][2-6]|[May][2-1]
--|--|--|--|[June][2-2]
--|--|--|[July](#july2015)|--
--|--|--|[August](#august2015)|--
--|--|--|--|--
--|--|--|--|[October][2-3]
--|--|[November](/changelog/2016/11/19/connect-api-deprecation-notice.html)|--|--
--|--|--|--|--

# App Center Release Notes

* [May 2018](./2018-05-14-app-center.md)
* [December 2017](./AppCenter-ReleaseNotes-December-2017-Final.pdf)
* [October 2017](./AppCenter-ReleaseNotes-October-2017-DRAFT.pdf)
* [September 2017](./AppCenter-ReleaseNotes-September-2017-DRAFT.docx)
* [August 2017](./AppCenter-ReleaseNotes-August-2017-DRAFT.pdf)
* [July 2017](./AppCenter-ReleaseNotes-July-2017-FINAL.pdf)
* [May 2017](./AppCenter-ReleaseNotes-May-2017-DRAFT.pdf)
* [February 2017](./AppCenter-ReleaseNotes-Feb-2017-FINAL.pdf)
* [January 2017](./AppCenter-ReleaseNotes-Jan-2017-FINAL.pdf)
* [December 2016](./AppCenter-ReleaseNotes-Dec-2016-FINAL.pdf)
* [November 2016](./AppCenter-ReleaseNotes-Nov-2016-FINAL.pdf)
* [October 2016](./AppCenter-ReleaseNotes-Oct-2016-FINAL.pdf)
* [September 2016](./AppCenter-ReleaseNotes-Sept-2016-FINAL.pdf)
* [August 2016](./AppCenter-ReleaseNotes-August-2016-FINAL.pdf)
* [July 2016](./AppCenter-ReleaseNotes-July-2016-FINAL.pdf)
* [June 2016](./AppCenter-ReleaseNotes-June-2016-FINAL.pdf)
* [May 2016](./AppCenter-ReleaseNotes-May-2016-FINAL.pdf)
* [March 2016](./AppCenter-ReleaseNotes-March-2016-FINAL.pdf)
* [February 2016](./AppCenter-ReleaseNotes-February-2016-DRAFT.pdf)
* [January 2016](./AppCenter-ReleaseNotes-January-2016-FINAL.pdf)
* [December 2015](./AppCenter-ReleaseNotes-December-2015-FINAL.pdf)
* [October 2015](./AppCenter-ReleaseNotes-October-2015-FINAL.pdf)
* [September 2015](./AppCenter-ReleaseNotes-September-2015-FINAL.pdf)
* [July 2015](./AppCenter-ReleaseNotes-July-2015-FINAL.pdf)
* [May 2015](AppCenter-ReleaseNotes-May-2015-FINAL.pdf)
* [March 2015 - 2](App-Center-ReleaseNotes-Mar27-2015.pdf)
* [March 2015 - 1](App-Center-Release-Notes-Mar13-2015.pdf)
* [February 2015 - 2](App-Center-Release-Notes-Feb27-2015.pdf)
* [February 2015 - 1](App-Center-Release-Notes-Feb13-2015.pdf)
* [December 2014](App-Center-Release-Notes-DecFinal-Dec12-2014.pdf)
* [November 2014](App-Center-Release-Notes-final-Nov142014.pdf)
* [October 2014](App-Center-Release-Notes-final-Oct102014.pdf)
* [September 2014](App-Center-Release-Notes-final-Sep2014.pdf)
* [August 2014](App-Center-Release-Notes-final-Aug2014.pdf)
* [July 2014](App-Center-Release-Notes-final-July2014.pdf)
* [June 2014](App-Center-Release-Notes-final-June2014.pdf)
* [May 2014](App-Center-Release-Notes-client-final-May2014.pdf)

# Combined App Center and Developer Platform Release Notes

* [April 2014][3-13]
* [March 2014][3-12]
* [February 2014][3-11]
* [January 2014][3-10]
* [December 2013][3-9]
* [November 2013][3-8]
* [October 2013][3-7]
* [September 2013][3-6]
* [August 2013][3-5]
* [July 2013][3-4]
* [June 2013][3-3]
* [May 2013][3-2]
* [April 2013][3-1]

## Release Notes

### <a name="april2016"></a>April 2016

#### Travel: Form of Payment 1.0 Deprecated
Effective May 1, 2016, Form of Payment 1.0 API will be deprecated. Issues will continue to be addressed for this API until Nov. 1, 2016. After that date, no new issues will be addressed and the API will be retired. Therefore, we encourage all current users to migrate to [version 2.0](/api-reference/travel-profile/02-form-payment-resource.html) as soon as possible. Please note that after the API is in a retired state and there are three consecutive months of inactivity, the API will be decommissioned and no longer available.

Please refer to our [deprecation policy]({{site.baseurl}}/tools-support/reference/deprecation-policy.html) for definitions additional information.

### <a name="feb2016"></a>February 2016

#### Travel Profile 1.0 Deprecated
Effective May 1, 2016, the Travel Profile 1.0 API will be deprecated. Issues will continue to be addressed for this API until Nov. 1, 2016. After that date, no new issues will be addressed and the API will be retired. Therefore, we encourage all current users to migrate to [version 2.0](/api-reference/travel-profile/01-profile-resource.html) as soon as possible. Please note that after the API is in a retired state and there are three consecutive months of inactivity, the API will be decommissioned and no longer available.

Please refer to our [deprecation policy]({{site.baseurl}}/tools-support/reference/deprecation-policy.html) for definitions additional information.

### <a name="august2015"></a>August 2015

#### Form of Payment API Version 2.0

**Overview**

Concur offers a profile API, which passes profile data from Concur to third parties. With this release, we have separated the form of payment section from profile. In addition, we now support corporate ghost cards to be passed to 3rd party vendors, such as TripLink vendors and fulfillment TMCs.

In order to ensure all existing partners are not affected by this change, we are going to offer a new version of the Form of Payment API with a new endpoint.

Concur’s deprecation policy requires everyone to move off the existing version within twelve months. Once the new endpoint is in place, changes to both versions will be supported for six months. After six months, changes will only occur in the new end point (2.0).

**Please Note:** Concur will continue to add new elements/values as we see fit. It is imperative that partners are aware of this and program accordingly to avoid challenges when the new elements/values are introduced.  

**Changes in v2.0 of Travel FOP API GET**  

Below is a list of changes with version 2.0. Concur strongly recommends that vendors/partners begin coordinating with their development team to take advantage of this new endpoint.  

**Schema changes**

* New endpoint: /api/travelprofile/v2.0/FOP
* Sunset endpoint: /api/travelprofile/v1.0/FOP
* Move FOP scope out of the Travel Profile scope so it operates independently
* Concur will pass a flag to note whether the card is personal or company ghost
* New scope under the FOP scope called Company Ghost Cards
	* Card type
	* Card number
	* Card expiration date
	* Card billing address
	* Card name
	* Flag that denotes whether the card is mandatory (no other card can be used) or not
	* Flag that denotes whether the card should be the default

**Schema Additions**

* Documentation will be provided closer to the delivery date

**Configuration for Professional and Standard Travel**

To take advantage of the new version of the Form of Payment API, partners need to code to the new endpoints.

#### Concur Request 3.1

This service is known as Authorization Request, Concur Request, or simply Request and was formerly known as Travel Request. Concur changed the name to better align with its broader capabilities. This service is different from the legacy authorization request feature that was available within Concur Expense.

**Overview:**

Concur is exposing a new endpoint providing the ability for a client vendor to create a Request on behalf of the actual Request user.

This new feature is for instance highly beneficial when an employee plans a trip and needs to request the authorization to travel. A Travel Request has to be created and submitted to the manager. However, as the user is on the road and plans to depart tomorrow, this individual decides to call the TMC to obtain a reservation right away. The TMC will first generate a Request on behalf of this traveler, and then associate the booking to this Request, so that the manager can easily review all the trip details and decide to approve or reject.

**Details:**

In version 3.1, the Post Request Header endpoint now has a “User” element to designate the user on behalf of which the Request will be created. The API consumer, as the Request creator, has to be granted the Proxy Logon user role.

**Effective Date:** August 2015

### <a name="july2015"></a>July 2015

#### Travel API

##### Travel Profile API Changes

**Overview:**

New elements added to the Travel Profile API

**Additions:**

* Rail Preferences
* Rail Loyalty Programs
* National ID

**Effective Date:** July 2015 release

**Overview:**

Changes to the APIs and Scopes for Travel Profile API in Register/Modify Partner Application

**Change 1:**

* Removed: Form of Payment scope from Travel Profile API
* Added: Form of Payment API

**Change 2:**

* Removed: Driver's License and Rate Preference
* Moved: Custom Fields under Company Details

**Effective Date:** July 2015 release

[2-1]:Concur-Platform-Client-Release-Notes-final-May2014.pdf
[2-2]:Concur-Platform-Client-Release-Notes-draft-June2014.pdf
[2-3]:Concur-Platform-Release-Notes-final-October2014.pdf
[2-4]:Concur-Platform-Client-Release-Notes-final-February2015.pdf
[2-5]:Concur-Platform-ReleaseNotes-draft-April2015.pdf
[2-6]:API-ReleaseNotes-May2015.pdf
[3-1]:Concur-Connect-Client-Facing-Release-Notes-April-2013.pdf
[3-2]:Concur-Connect-Client-Facing-Release-Notes-May-2013.pdf
[3-3]:Concur-Connect-Client-Facing-Release-Notes-June-2013.pdf
[3-4]:Concur-Connect-Client-Facing-Release-Notes-July-2013.pdf
[3-5]:Concur-Connect-Client-Facing-Release-Notes-August-2013.pdf
[3-6]:Concur-Platform-Client-Facing-Release-Notes-September-2013.pdf
[3-7]:Concur-Platform-Client-Facing-Release-Notes-October-2013.pdf
[3-8]:Concur-Platform-Client-Facing-Release-Notes-November-2013.pdf
[3-9]:Concur-Platform-Client-Facing-Release-Notes-December-2013.pdf
[3-10]:Concur-Platform-Client-Release-Notes-final-Jan2014.pdf
[3-11]:Concur-Platform-Client-Release-Notes-final-Feb2014.pdf
[3-12]:Concur-Platform-Client-Release-Notes-final-March2014.pdf
[3-13]:Concur-Platform-Client-Release-Notes-final.pdf
