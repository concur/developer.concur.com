---
title: 3. How To Identify Group Codes for Standard Edition Clients
layout: reference
---

### 3. How to Identify Group Codes for Standard Edition Clients

1. Standard Edition uses a 2-level connected list for its Group Structure.
2. List Name = Employee Groups (Do not change-contact Client Support)
3. The Fields that use this 2-level list are (in this top-to-bottom order):
  - Custom21
  - OrgUnit1
  - **You will need to include valid values into the above fields when you construct your USER Post body.**

#### Steps to obtain Standard Group Codes

1.	**GET List of Lists**
  - URL: <https://www.concursolutions.com/api/expense/list/v1.0/>
  -	response:  (the following is an excerpt)
  -	Locate the List Name = Employee Groups (Do not change-contact Client Support)
  -	  Note: this is a 2-level list.
  -	Use the ID from the Items Link in your next API request….

	* <https://www.concursolutions.com/api/expense/list/v1.0/gWoAvJ67aUk8E2Ss8iPsKNxhMNBspRBc8Zw/batch>
	* <https://www.concursolutions.com/api/expense/list/v1.0/gWoAvJ67aUk8E2Ss8iPsKNxhMNBspRBc8Zw/false>
	* <https://www.concursolutions.com/api/expense/list/v1.0/gWoAvJ67aUk8E2Ss8iPsKNxhMNBspRBc8Zw/items>
    * Employee Groups (Do not change-contact Client Support)  



2.	**GET List Items within the above list by using the Items ID for the desired list.**
  -	URL: <https://www.concursolutions.com/api/v3.0/common/listitems?limit=100&listId=gWoAvJ67aUk8E2Ss8iPsKNxhMNBspRBc8Zw>
        *	Note: this ID matches the value from the 1st response
  -	Response:
        *	You will need to record the top level values and the 2nd level values.
        *	The top level value will be populated in Custom21
        *	The bottom level value will be populated in OrgUnit1
        *	There could be more than one top level value. In the following example there is just one top-level value (US)
