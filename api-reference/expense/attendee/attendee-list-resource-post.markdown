--- 
title: Create or update attendee lists 
layout: operation 
--- 



This resource supports the following POST actions:

* Post New Attendee List 
* Post Attendee Update List
* Post Attendee Inactivation List 
 
## Post new attendee list

### Description 
Adds one or more attendees. This request creates attendees that are part of the Shared List, which are available to all users. This function requires the attendee resource version 1.0.

### Request 

#### Request parameters 

##### Path parameters 

| Parameter | Required/Optional | Description | 
|-----------|-----------|---------------------| 
| batch | required | The **batch** keyword. | 

##### Query parameters 

| Parameter | Required/Optional | Description | 
|-----------|-----------|---------------------| 
| type | required | The type of batch operation to complete. Should be **create**. |

Example: `https://www.concursolutions.com/api/expense/attendee/v1.0/batch?type=create` 

#### Headers 

##### Authorization header 

Authorization header with OAuth token for valid Concur user. Required.

The OAuth consumer must have one of the following user roles in Concur: Company Administrator or Web Services Administrator for Professional, or Can Administer for Standard.

These roles allow the user to manage data for the entire company.

##### Accept header 
application/xml 

### Response 

#### Content-Types 
application/xml 

#### Content body 
This function requires as its arguments an attendee-batch element containing an attendee child element for each attendee to be added. All batch operations allow up to 1000 attendees per batch. If a batch request with over 1000 attendees is sent, only the first 1000 attendees in the batch will be processed.

NOTE: The element names are case-sensitive.

##### Image elements 

| Element |  Description | 
|-----------|---------------------| 
| Id | The unique identifier of the image. | 
| Url | The URL for the receipt image. Note that special characters will be XML-encoded. You will need to unencode any special characters before using the link.| 

## Examples 

### XML example request 



### XML example of successful response 


