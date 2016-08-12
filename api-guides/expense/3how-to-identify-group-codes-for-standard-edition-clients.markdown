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
        *	There could be more than one top level value. In the following example there is just one top-level value (US) but a couple of different values for the second level. (US1 and US2)

### Example


 	<ListItems xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
      <Items>
          <ListItem>
            <ID>gWnhB0zozs4kmKXwN4sTo1soIZX$sc2jNxCw</ID>
            <URI>https://www.concursolutions.com/api/v3.0/common/listitems/gWnhB0zozs4kmKXwN4sTo1soIZX$sc2jNxCw</URI>
            <ListID>gWoAvJ67aUk8E2Ss8iPsKNxhMNBspRBc8Zw</ListID>
            <Name>United States</Name>
            <ParentID xsi:nil="true"/>
            <Level1Code>US</Level1Code>
            <Level2Code xsi:nil="true"/>
            <Level3Code xsi:nil="true"/>
            <Level4Code xsi:nil="true"/>
            <Level5Code xsi:nil="true"/>
            <Level6Code xsi:nil="true"/>
            <Level7Code xsi:nil="true"/>
            <Level8Code xsi:nil="true"/>
            <Level9Code xsi:nil="true"/>
            <Level10Code xsi:nil="true"/>
            </ListItem>
            <ListItem>
            <ID>gWnhB0zozt$phRN78EhfQGJul9GbRIACX$swA</ID>
            <URI>https://www.concursolutions.com/api/v3.0/common/listitems/gWnhB0zozt$phRN78EhfQGJul9GbRIACX$swA</URI>
            <ListID>gWoAvJ67aUk8E2Ss8iPsKNxhMNBspRBc8Zw</ListID>
            <Name>Broker / Dealer</Name>
            <ParentID>gWnhB0zozs4kmKXwN4sTo1soIZX$sc2jNxCw</ParentID>
            <Level1Code>US</Level1Code>
            <Level2Code>US1</Level2Code>
            <Level3Code xsi:nil="true"/>
            <Level4Code xsi:nil="true"/>
            <Level5Code xsi:nil="true"/>
            <Level6Code xsi:nil="true"/>
            <Level7Code xsi:nil="true"/>
            <Level8Code xsi:nil="true"/>
            <Level9Code xsi:nil="true"/>
            <Level10Code xsi:nil="true"/>
          </ListItem>
          <ListItem>
           <ID>gWnhB0zozt$phQQD0yqipIfjjs$pQfCqXj$s7g</ID>
            <URI>https://www.concursolutions.com/api/v3.0/common/listitems/gWnhB0zozt$phQQD0yqipIfjjs$pQfCqXj$s7g</URI>
            <ListID>gWoAvJ67aUk8E2Ss8iPsKNxhMNBspRBc8Zw</ListID>
            <Name>NSAM</Name>
            <ParentID>gWnhB0zozs4kmKXwN4sTo1soIZX$sc2jNxCw</ParentID>
            <Level1Code>US</Level1Code>
            <Level2Code>US2</Level2Code>
            <Level3Code xsi:nil="true"/>
            <Level4Code xsi:nil="true"/>
            <Level5Code xsi:nil="true"/>
            <Level6Code xsi:nil="true"/>
            <Level7Code xsi:nil="true"/>
            <Level8Code xsi:nil="true"/>
            <Level9Code xsi:nil="true"/>
            <Level10Code xsi:nil="true"/>
          </ListItem>
        </Items>
      <NextPage xsi:nil="true"/>
    </ListItems>
    

