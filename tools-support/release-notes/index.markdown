---
title: Release Notes 
layout: reference
---


# Developer Platform Release Notes

| 2016 | 2015 | 2014 |
| ---- | ---- | ---- |
| -- | -- | -- |
| [February](#feb2016) | [February][2-4] | -- |
| [March]({{site.baseurl}}/blog/2016/03/15/march-release-notes.html) | -- | -- |
| [April](#april2016) | [April][2-5] | -- |
| -- | [May][2-6] | [May][2-1] |
| -- | -- | [June][2-2] |
| -- | [July](#july2015) | -- |
| -- | [August](#august2015) | -- |
| -- | -- | -- |
| -- | -- | [October][2-3] |
| -- | -- | -- |
| -- | -- | -- |

# App Center Release Notes

| 2016 | 2015 | 2014 |
| ---- | ---- | ---- |
| [January](AppCenter_ReleaseNotes_January_2016_FINAL.pdf) | -- | -- |
| [February](AppCenter_ReleaseNotes_February 2016_DRAFT.pdf) | [February][1-10] | -- |
| [March](AppCenter_ReleaseNotes_March 2016_FINAL.pdf) | [March][1-11] | -- |
| -- | [April][1-12] | -- |
| [May](AppCenter_ReleaseNotes_May 2016_FINAL.pdf) | [May][1-13] | [May](App_Center_Release_Notes_client_final_May2014_0.pdf) |
| [June](AppCenter_ReleaseNotes_June 2016_FINAL.pdf) | -- | [June][1-2] |
| [July](AppCenter_ReleaseNotes_July 2016_FINAL.pdf) | [July](AppCenter_ReleaseNotes_July2015FINAL.pdf) | [July][1-3] |
| [August](AppCenter_ReleaseNotes_August 2016_FINAL.pdf) | -- | [August][1-4] |
| [September DRAFT](AppCenter_ReleaseNotes_Sept 2016_DRAFT.pdf) | [September](AppCenter_ReleaseNotes_Sept2015FINAL.pdf) | [September][1-5] |
| -- | [October](AppCenter_ReleaseNotes_Oct2015FINAL_10_16_15.pdf) | [October][1-6] |
| -- | -- | [November][1-7] |
| -- | [December](AppCenter_ReleaseNotes_December2015FINAL.pdf) | [December][1-8] |


# Combined App Center and Developer Platform Release Notes

| Release Month	        |
| --------------------- |
| [April 2014][3-13]    |
| [March 2014][3-12]    |
| [February 2014][3-11]	|
| [January 2014][3-10]  |
| [December 2013][3-9]  |
| [November 2013][3-8]  |
| [October 2013][3-7]   |
| [September 2013][3-6] |
| [August 2013][3-5]  	|
| [July 2013][3-4]	    |
| [June 2013][3-3]      |
| [May 2013][3-2]       |
| [April 2013][3-1]	    |



## Release Notes

### <a name="april2016"></a>April 2016

#### Travel: Form of Payment 1.0 Deprecated
Effective May 1, 2016, Form of Payment 1.0 API will be deprecated. Issues will continue to be addressed for this API until Nov. 1, 2016. After that date, no new issues will be addressed and the API will be retired. Therefore, we encourage all current users to migrate to [version 2.0]({{site.baseurl}}/api-reference/travel/travel-profile/form-payment-resource.html) as soon as possible. Please note that after the API is in a retired state and there are three consecutive months of inactivity, the API will be decommissioned and no longer available.

Please refer to our [deprecation policy]({{site.baseurl}}/tools-support/reference/deprecation-policy.html) for definitions additional information.

-----

### <a name="feb2016"></a>February 2016

#### Travel Profile 1.0 Deprecated
Effective May 1, 2016, the Travel Profile 1.0 API will be deprecated. Issues will continue to be addressed for this API until Nov. 1, 2016. After that date, no new issues will be addressed and the API will be retired. Therefore, we encourage all current users to migrate to [version 2.0]({{site.baseurl}}/api-reference/travel/travel-profile/index.html) as soon as possible. Please note that after the API is in a retired state and there are three consecutive months of inactivity, the API will be decommissioned and no longer available.

Please refer to our [deprecation policy]({{site.baseurl}}/tools-support/reference/deprecation-policy.html) for definitions additional information.

-----

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

-----

#### Concur Request 3.1
This service is known as Authorization Request, Concur Request, or simply Request and was formerly known as Travel Request. Concur changed the name to better align with its broader capabilities. This service is different from the legacy authorization request feature that was available within Concur Expense.

**Overview:**
Concur is exposing a new endpoint providing the ability for a client vendor to create a Request on behalf of the actual Request user.

This new feature is for instance highly beneficial when an employee plans a trip and needs to request the authorization to travel. A Travel Request has to be created and submitted to the manager. However, as the user is on the road and plans to depart tomorrow, this individual decides to call the TMC to obtain a reservation right away. The TMC will first generate a Request on behalf of this traveler, and then associate the booking to this Request, so that the manager can easily review all the trip details and decide to approve or reject.

**Details:**
In version 3.1, the Post Request Header endpoint now has a “User” element to designate the user on behalf of which the Request will be created. The API consumer, as the Request creator, has to be granted the Proxy Logon user role.

**Effective Date:** August 2015

-----

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

[1-1]:App_Center_Release_Notes_client_final_May2014_0.pdf
[1-2]:App_Center_Release_Notes_final_June2014.pdf
[1-3]:App_Center_Release_Notes_final_July2014.pdf
[1-4]:App_Center_Release_Notes_final_Aug2014.pdf
[1-5]:App_Center_Release_Notes_final_Sep2014.pdf
[1-6]:App_Center_Release_Notes_final_Oct102014.pdf
[1-7]:App_Center_Release_Notes_final_Nov142014.pdf
[1-8]:App_Center_Release_Notes_DecFinal_Dec12_2014.pdf
[1-9]:App_Center_Release_Notes_Feb13_2015.pdf
[1-10]:App_Center_Release_Notes_Feb27_2015.pdf
[1-11]:App_Center_Release20_Notes_Mar13_2015.pdf
[1-12]:App_Center_ReleaseNotes_Mar27_2015.pdf
[1-13]:AppCenter_ReleaseNotes_May2015FINAL.pdf

[2-1]:Concur_Platform_Client_Release_Notes_final_May2014.pdf
[2-2]:Concur_Platform_Client_Release_Notes_draft_June2014.pdf
[2-3]:Concur_Platform_Release_Notes_final_October2014.pdf
[2-4]:Concur_Platform_Client_Release_Notes_final_February2015.pdf
[2-5]:Concur_Platform_ReleaseNotes_draft_April2015.pdf
[2-6]:API_ReleaseNotes_May2015.pdf

[3-1]:Concur_Connect_Client_Facing_Release_Notes_April_2013.pdf
[3-2]:Concur_Connect_Client_Facing_Release_Notes_May_2013.pdf
[3-3]:Concur_Connect_Client_Facing_Release_Notes_June_2013.pdf
[3-4]:Concur_Connect_Client_Facing_Release_Notes_July_2013.pdf
[3-5]:Concur_Connect_Client_Facing_Release_Notes_August_2013.pdf
[3-6]:Concur_Platform_Client_Facing_Release_Notes_September_2013.pdf
[3-7]:Concur_Platform_Client_Facing_Release_Notes_October_2013.pdf
[3-8]:Concur_Platform_Client_Facing_Release_Notes_November_2013.pdf
[3-9]:Concur_Platform_Client_Facing_Release_Notes_December_2013.pdf
[3-10]:Concur_Platform_Client_Release_Notes_final_Jan2014.pdf
[3-11]:Concur_Platform_Client_Release_Notes_final_Feb2014.pdf
[3-12]:Concur_Platform_Client_Release_Notes_final_March2014.pdf
[3-13]:Concur_Platform_Client_Release_Notes_final.pdf
