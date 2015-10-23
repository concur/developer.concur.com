---
title: Release Notes 
layout: reference
---


##  App Center Release Notes

|Release Month      	|
|---------------------|
|[October 2015](AppCenter_ReleaseNotes_Oct2015FINAL_10.16.15.pdf) |
|[September 2015](AppCenter_ReleaseNotes_Sept2015FINAL.pdf) |
|[July 2015](AppCenter_ReleaseNotes_July2015FINAL.pdf) |
|[May 2015][1-13]   |
|[April 2015][1-12] |
|[March 2015][1-11] |
|[February 2015][1-10] |
|[February 2015][1-9]	|
|[December 2014][1-8]	|
|[November 2014][1-7] |
|[October 2014][1-6]  |
|[September 2014][1-5]|
|[August 2014][1-4]	  |
|[July 2014][1-3]    	|
|[June 2014][1-2]	    |
|[May 2014][1-1]      |


##  Developer Platform Release Notes

|Release Month     	|
|-------------------|
|[August 2015](#august2015) |
|[July 2015](#july2015) |
|[May 2015][2-6]    |
|[April 2015][2-5]  |
|[February 2015][2-4] |
|[October 2014][2-3]|
|[June 2014][2-2]   |
|[May 2014][2-1]    |


##  Combined App Center and Developer Platform Release Notes

|Release Month	        |Last Updated      |
|-----------------------|------------------|
|[April 2014][3-13]     |April 4 2014      |
|[March 2014][3-12]     |March 7 2014      | 
|[February 2014][3-11]	|February 7 2014   |
|[January 2014][3-10]   |January 25 2014   |
|[December 2013][3-9]  	|December 13 2013  |
|[November 2013][3-8]   |November 8 2013   |
|[October 2013][3-7]    |October 18 2013   |
|[September 2013][3-6]  |September 20 2013 |
|[August 2013][3-5]   	|September 3 2013  |
|[July 2013][3-4]	      |July 19 2013      |
|[June 2013][3-3]	      |June 7 2013       |
|[May 2013][3-2]        |May 15 2013       |
|[April 2013][3-1]	    |April 23 2013     |



##Release Notes

###<a name="august2015"></a>August 2015  

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
	*  Card type
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

---

#### Concur Request 3.1
This service is known as Authorization Request, Concur Request, or simply Request and was formerly known as Travel Request. Concur changed the name to better align with its broader capabilities. This service is different from the legacy authorization request feature that was available within Concur Expense.

**Overview:***  
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


[1-1]:App%20Center%20Release%20Notes_client_final_May2014_0.pdf
[1-2]:App Center Release Notes_final_June2014.pdf
[1-3]:App%20Center%20Release%20Notes_final_July2014.pdf
[1-4]:App%20Center%20Release%20Notes_final_Aug2014.pdf
[1-5]:App%20Center%20Release%20Notes_final_Sep2014.pdf
[1-6]:App Center Release Notes_final_Oct102014.pdf
[1-7]:App%20Center%20Release%20Notes_final_Nov142014.pdf
[1-8]:App%20Center%20Release%20Notes_DecFinal_Dec12_2014.pdf
[1-9]:App%20Center%20Release%20Notes_Feb13_2015.pdf
[1-10]:App%20Center%20Release%20Notes_Feb27_2015.pdf
[1-11]:App%20Center%20Release%20Notes_Mar13_2015.pdf
[1-12]:App_Center_ReleaseNotes_Mar27_2015.pdf
[1-13]:AppCenter_ReleaseNotes_May2015FINAL.pdf

[2-1]:Concur Platform Client Release Notes_final_May2014.pdf
[2-2]:Concur%20Platform%20Client%20Release%20Notes_draft_June2014.pdf
[2-3]:Concur%20Platform%20Release%20Notes_final_October2014.pdf
[2-4]:Concur%20Platform%20Client%20Release%20Notes_final_February2015.pdf
[2-5]:Concur_Platform_ReleaseNotes_draft_April2015.pdf
[2-6]:API_ReleaseNotes_May2015.pdf

[3-1]:Concur%20Connect%20Client%20Facing%20Release%20Notes%20April%202013.pdf
[3-2]:Concur%20Connect%20Client%20Facing%20Release%20Notes%20May%202013.pdf
[3-3]:Concur%20Connect%20Client%20Facing%20Release%20Notes%20June%202013.pdf
[3-4]:Concur%20Connect%20Client%20Facing%20Release%20Notes%20July%202013.pdf
[3-5]:Concur%20Connect%20Client%20Facing%20Release%20Notes%20August%202013.pdf
[3-6]:Concur%20Platform%20Client%20Facing%20Release%20Notes%20September%202013.pdf
[3-7]:Concur%20Platform%20Client%20Facing%20Release%20Notes%20October%202013.pdf
[3-8]:Concur%20Platform%20Client%20Facing%20Release%20Notes%20November%202013.pdf
[3-9]:Concur%20Platform%20Client%20Facing%20Release%20Notes%20December%202013.pdf
[3-10]:Concur%20Platform%20Client%20Release%20Notes_final_Jan2014.pdf
[3-11]:Concur%20Platform%20Client%20Release%20Notes_final_Feb2014.pdf
[3-12]:Concur%20Platform%20Client%20Release%20Notes_final_March2014.pdf
[3-13]:Concur%20Platform%20Client%20Release%20Notes_final.pdf
