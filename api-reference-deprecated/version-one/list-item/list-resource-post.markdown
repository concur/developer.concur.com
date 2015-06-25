---
title: Post new list items
layout: reference
---



This resource supports the following POST actions:

* Post new list item
* Post list item update
* Post list item deletion

##  Post New List Item

###Description
Adds list items to an existing list.

### Post New List Item Request

#### Request parameters

* **{_listID_}**  
Required. The identifier for the desired list.
* **batch?type**=**{_type_}**
Required. The type of batch operation to complete. Should be **create**.

Example: `https://www.concursolutions.com/api/expense/list/v1.0/_{listID_}/batch?type=create`

#### Headers

##### Authorization header
Required. Authorization header with OAuth token for valid Concur user. The OAuth consumer must have one of the following user roles in Concur: Company Administrator or Web Services Administrator for Professional, or Can Administer for Standard. These roles allow the user to manage data for the entire company.

##### Accept header
application/xml

###Root elements
This function requires as its arguments a **list-item-batch** element containing a **list-item** child element for each item to be added. The **list-item** elements can contain the following child elements.

#### list-item child elements

|  Element |  Required (must contain value)? |  Description |
|---|---|
|  name |  Y |  The name of the list item as it appears in the user interface. Maximum 64 characters. |  
|  levelxcode |  Y, for each list level |There must be one element for each list level. A three level list will require the elements: **level1code**, **level2code** and **level3code**.<br><br>Maximum 32 characters for each level.<br><br>**NOTE**: The level codes for the list item are used to uniquely identify the list item. Once a list item has been created, the level codes cannot be updated. Refer to [Changing a List Item Level Code][1] for more information.|
|  start-date |  N |  The effective date when the list item should be active. Format: YYYY-MM-DD. |
|  end-date |  N |  The effective date when the list item should be inactive. Format: YYYY-MM-DD. |


####  XML Example Request For Single Level List

    POST /api/expense/list/v1.0/list/I8pq1l$rdSmdrEW23deOjPjyr4Wso0Wq$a/batch?type=create HTTPS 1.1
    Host: www.concursolutions.com
    Authorization: OAuth {access token}
    ...
    <list-item-batch xmlns="http://www.concursolutions.com/api/expense/list/2010/02">
        <list-item>
            <name>Spool</name>
            <level1code>SL</level1code>
            <start-date>2010-04-01</start-date>
            <end-date>2010-09-30</end-date>
        </list-item>
        <list-item>
            <name>Wheel</name>
            <level1code>WH</level1code>
            <start-date>2010-04-01</start-date>
            <end-date>2010-09-30</end-date>
        </list-item>
    </list-item-batch>

####  XML Example Request For Multiple Level List

    POST /api/expense/list/v1.0/list/uiT738IE$fhI223Kjd1!jfHus$/batch?type=create HTTPS 1.1
    Host: www.concursolutions.com
    Authorization: OAuth {access token}
    <list-item-batch xmlns="http://www.concursolutions.com/api/expense/list/2010/02">
        <list-item>
            <name>Beverages</name>
            <level1code>DRINKS</level1code>
        </list-item>
        <list-item>
            <name>Meal</name>
            <level1code>FOOD</level1code>
        </list-item>
        <list-item>
            <name>Non-Alcoholic</name>
            <level1code>DRINKS</level1code>
            <level2code>NALC</level2code>
        </list-item>
        <list-item>
            <name>Alcoholic</name>
            <level1code>DRINKS</level1code>
            <level2code>ALC</level2code>
        </list-item>
        <list-item>
            <name>Soft drinks</name>
            <level1code>DRINKS</level1code>
            <level2code>NALC</level2code>
            <level3code>SODA</level3code>
        </list-item>
        <list-item>
            <name>Juices</name>
            <level1code>DRINKS</level1code>
            <level2code>NALC</level2code>
            <level3code>JUICE</level3code>
        </list-item>
        <list-item>
            <name>Apple Juice</name>
            <level1code>DRINKS</level1code>
            <level2code>NALC</level2code>
            <level3code>JUICE</level3code>
            <level4code>APL</level4code>
        </list-item>
        <list-item>
            <name>Coca-Cola or Pepsi</name>
            <level1code>DRINKS</level1code>
            <level2code>NALC</level2code>
            <level3code>SODA</level3code>
            <level4code>COLA</level4code>
        </list-item>
    </list-item-batch>

###  Post New List Item Response

####HTTP Responses

* [HTTP Status Codes][2]
* [List Item Error Codes][3]

####Content Types
application/xml

####Response body root elements
This request will return a **list-item-batch-result** parent element with the following child elements.

#####list-item-batch-result child elements

|  Element |  Description |
|--------|----------|
|  records-succeeded |  The number of records processed that were successfully added.   |
|  records-failed |  The number of records processed that were not successfully added. |
|  errors |  This will contain an **error** parent element for each record failure. See the **error child elements** table below for information about the child elements|

#####error child elements

|  Element |  Description |
|--------|----------|
|  code |  The code associated with the error. Refer to [Responses and Errors][3] for the full list of possible error codes.|
|  list-item-code |  The level code of the record that failed. |
|  message |  The error message. |

####  XML Example of Successful Response

    200 OK
    Content-Type: application/xml
    <list-item-batch-result xmlns="http://www.concursolutions.com/api/expense/list/2010/02" xmlns:i="http://www.w3.org/2001/XMLSchema-instance">
        <records-succeeded>8</records-succeeded>
        <records-failed>0</records-failed>
    </list-item-batch-result>

##  Post List Item Update

###Description
Updates existing list items for a specified list. 

###Post List Item Update Request

#### Request parameters

* **{_listID_}**  
Required. The identifier for the desired list.
* **batch?type={_type_}** 
Required. The type of batch operation to complete. Should be **update**.

Example: `https://www.concursolutions.com/api/expense/list/v1.0/_{listID_}/batch?type=update`

#### Headers

##### Authorization header
Required. Authorization header with OAuth token for valid Concur user. The OAuth consumer must have one of the following user roles in Concur: Company Administrator or Web Services Administrator for Professional, or Can Administer for Standard. These roles allow the user to manage data for the entire company.

##### Accept header
application/xml

####Root elements

The request includes a **list-item-batch** element containing a **list-item** child element for each item to be updated. The **list-item** elements can contain the following child elements. 

#####list-item child elements

|  Element |  Required (must contain value)? |  Description |
|----|----|----|
|  name |  Y |  The name of the list item as it appears in the user interface. Maximum 64 characters. |   |
|  levelxcode |  Y, for each list level |  There must be one element for each list level. A three level list will require the elements: **level1code**, **level2code** and **level3code**.<br><br>Maximum 32 characters for each level.<br><br>**NOTE**: The level codes for the list item are used to uniquely identify the list item. Once a list item has been created, the level codes cannot be updated. Refer to [Changing a List Item Level Code][4] for more information.|
|  start-date |  N |  The effective date when the list item should be active. Format: YYYY-MM-DD.|
|  end-date |  N |  The effective date when the list item should be inactive. Format: YYYY-MM-DD.|


####  XML Example Request

    POST /api/expense/list/v1.0/I8pq1l$rdSmdrEW23deOjPjyr4Wso0Wq$a/batch?type=update HTTPS 1.1
    Host: www.concursolutions.com
    Authorization: OAuth {access token}
    ...
    <list-item-batch xmlns="http://www.concursolutions.com/api/expense/list/2010/02">
        <list-item>
            <name>Sprocket, Large </name>
            <level1code>SP</level1code>
            <start-date>2012-06-15</start-date>
            <end-date>2012-12-31</end-date>
        </list-item>
        <list-item>
            <name>Bushing, vulcanized inner sleeve</name>
            <level1code>BU</level1code>
            <start-date>2012-06-15</start-date>
            <end-date>2012-12-31</end-date>
        </list-item>
    </list-item-batch>

###  Post List Item Update Response

####HTTP Responses

* [HTTP Status Codes][2]
* [List Item Error Codes][3]

####Content Types
application/xml

####Response body root elements
This request will return a **list-item-batch-result** parent element with the following child elements.

#####list-item-batch-result child elements

|  Element |  Description |
|----|----|
|  records-succeeded |  The number of records processed that were successfully added.  |
|  records-failed |  The number of records processed that were not successfully added. |
| errors| This will contain an **error** parent element for each record failure. See the **error child element** table below for information about the child elements.|

#####error child elements

|Element| Description|
|-----|------|
|  code |  The code associated with the error. Refer to [Responses and Errors][3] for the full list of possible error codes.|
|  list-item-code |  The level code of the record that failed. |
|  message |  The error message. |


####  XML Example of Successful Response

    200 OK
    Content-Type: application/xml
    <list-item-batch-result xmlns="http://www.concursolutions.com/api/expense/list/2010/02" xmlns:i="http://www.w3.org/2001/XMLSchema-instance">
        <records-succeeded>2</records-succeeded>
        <records-failed>0</records-failed>
    </list-item-batch-result>

####  XML Example of a Response with a Failure

    200 OK
    Content-Type: application/xml
    <list-item-batch-result xmlns="http://www.concursolutions.com/api/expense/list/2010/02" xmlns:i="http://www.w3.org/2001/XMLSchema-instance">
        <records-succeeded>1</records-succeeded>
        <records-failed>1</records-failed>
        <errors>
            <error>
                <code>1</code>
                <list-item-code>BU</list-item-code>
                <message>List item name is too long</message>
            </error>
        </errors>
    </list-item-batch-result>

##  Post List Item Deletion

###Description
Deletes existing list items for a specified list.

###Post List Item Deletion Request

#### Request parameters

* **{_listID_}**  
Required. The identifier for the desired list.
* **batch?type={_type_}**
Required. The type of batch operation to complete. Should be **delete**.

Example: `https://www.concursolutions.com/api/expense/list/v1.0/_{listID_}/batch?type=delete`

#### Headers

##### Authorization header
Required. Authorization header with OAuth token for valid Concur user. The OAuth consumer must have one of the following user roles in Concur: Company Administrator or Web Services Administrator for Professional, or Can Administer for Standard. These roles allow the user to manage data for the entire company.

##### Accept header
application/xml

####Root elements
The request includes a **list-item-batch** element containing a **list-item** child element for each item to be updated. The **list-item** elements can contain the following child elements. 

#####list-item child elements

|  Element |  Required (must contain value)? |  Description |
|--------|-----------|-----------|
|  name |  N |  The name of the list item as it appears in the user interface. Maximum 64 characters. |
|  levelxcode |  Y, for each list level |  There must be one element for each list level. A three level list will require the elements: **level1code**, **level2code** and **level3code**.<br><br>Maximum 32 characters for each level.<br><br>**NOTE**: The level codes for the list item are used to uniquely identify the list item. Once a list item has been created, the level codes cannot be updated. Refer to [Changing a List Item Level Code][4] for more information.

####  XML Example Request

    POST /api/expense/list/v1.0/list/I8pq1l$rdSmdrEW23deOjPjyr4Wso0Wq$a/batch?type=delete HTTPS 1.1
    Host: www.concursolutions.com
    Authorization: OAuth {access token}
    ...
    <list-item-batch xmlns="http://www.concursolutions.com/api/list/2010/02">
        <list-item>
            <level1code>BU</level1code>
        </list-item>
        <list-item>
            <level1code>WH</level1code>
        </list-item>
    </list-item-batch>

###  Post List Item Deletion Response

####HTTP Responses

* [HTTP Status Codes][2]
* [List Item Error Codes][3]

####Content Types
* application/xml

####Response body root elements
This request will return a **list-item-batch-result** parent element with the following child elements.  

#####list-item-batch-result child elements

|  Element |  Description |
|-------|--------|
|  records-succeeded |  The number of records processed that were successfully added. |
|  records-failed |  The number of records processed that were not successfully added. |
| errors | This will contain an **error** parent element for each record failure. See the **error child element** table below for information about the child elements.|

#####error child elements

|  Element |  Description |
|----------|-------------|
|  code |  The code associated with the error. Refer to [Responses and Errors][3] for the full list of possible error codes.|
|  list-item-code |  The level code of the record that failed. |
|  message |  The error message. |


####  XML Example of Successful Response

    200 OK
    Content-Type: application/xml
    <list-item-batch-result xmlns="http://www.concursolutions.com/api/expense/list/2010/02" xmlns:i="http://www.w3.org/2001/XMLSchema-instance">
        <records-succeeded>2</records-succeeded>
        <records-failed>0</records-failed>
    </list-item-batch-result>

  

[1]: /api-reference-deprecated/version-one/list-item/index.html
[2]: /tools-support/reference/http-codes.html
[3]: /api-reference-deprecated/version-one/list-item/index.html
[4]: /api-reference-deprecated/version-one/list-item/index.html
