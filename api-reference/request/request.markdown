---
title: Request
layout: reference
---

# Request

Concur Request automates the spend request and approval process for both travel and everyday expenses, giving you the data you need to accurately track and better control spending. By increasing visibility into planned expenses and up-to-date budget data, you can make strategic spending decisions before any spending actually occurs. The Request resource provides many abilities, including viewing requests and transition of request into the workflow.

* [Retrieve all requests](#method1)
* [Retrieve a request by ID](#method2)
* [Submit a request by ID](#method3)
* [Schema](#schema)


### Version
3.0  
1.0 documentation is available [here](/api-reference-deprecated/version-one/Travel/travel-request.html)


## <a name="method1"></a>Retrieve all requests
						
	GET  /api/v3.0/travelrequest/requests

### Parameters

Name | Type | Format | Description
-----|------|--------|------------
`offset`	|	`string`	|	`query`	|	Starting page offset	
`limit`	|	`Int32`	|	`query`	|	Number of records to return (default 100)	
`user`	|	`string`	|	`query`	|	The login ID of the user who owns this Request. The user must have the Web Services Admin (Professional) or Can Administer (Standard) user role to use this parameter.	
`status`	|	`string`	|	`query`	|	The Status search term specifies which travel request or approval status to return. If no Status value is sent, the default Status of Active will be used.	
`modifiedAfter`	|	`DateTime`	|	`query`	|	This returns travel requests in which the associated dependents (header, entries, segments, allocations, attendees, comments ) were modified after the specified date and time. This search term can be used along with other search terms to narrow the results. The date and time (if desired) should be in UTC. The format is: YYYY-MM-DDThh:mm:ss.	
`modifiedBefore`	|	`DateTime`	|	`query`	|	This returns travel requests in which the associated dependents (header, entries, segments, allocations, attendees, comments ) were modified before the specified date and time.This search term can be used along with other search terms to narrow the results. The date and time (if desired) should be in UTC. The format is: YYYY-MM-DDThh:mm:ss.	
`withSegmentTypes`	|	`Boolean`	|	`query`	|	Pass true to populate the SegmentType field in the result.	


							
## <a name="method2"></a>Retrieve a request by ID	

	GET  /api/v3.0/travelrequest/request/{id}	

### Parameters

Name | Type | Format | Description
-----|------|--------|------------
`id`	|	`string`	|	`path`	|	**Required** The Request ID	
`user`	|	`string`	|	`query`	|	The login ID of the user. Optional. The user must have the Web Services Admin (Professional) or Can Administer (Standard) user role to use this parameter.	
							
## <a name="method3"></a>Submit a request by ID
						
	POST  /api/v3.0/travelrequest/requests/{id}/submit

### Parameters

Name | Type | Format | Description
-----|------|--------|------------
`id` | `string` | `path` | The Request ID


						
## <a name="schema"></a>Schema							

### <a name="request"></a>Request

Name | Type | Format | Description
-----|------|--------|------------
`AgencyOfficeName`	|	`string`	|	-	|	The travel agency office name.
`AllocationFormID`	|	`string`	|	-	|	The unique identifier of the Segment Form resource (See. the "Forms" resource for more information).
`ApprovalLimitDate`	|	`DateTime`	|	-	|	The date by which the Request must be approved. This element appears only when integrated with Concur Travel.
`ApprovalStatusCode`	|	`string`	|	-	|	The code for the approval status the Request.
`ApprovalStatusName`	|	`string`	|	-	|	The approval status of the Request.
`AuthorizedDate`	|	`DateTime`	|	-	|	The date the Request was authorized. Format: YYYY-MM-DDThh:mm:ss.
`CashAdvances`	|	`Array`	|	[Cash Advance](#cashadvance)	|	This parent element has a CashAdvance child element for each cash advance. See the CashAdvance model for the full list of child elements.
`Comments`	|	`Array`	|	[Comment](#comment)	|	This parent element has a Comment child element for each comment. See the Comment model for the full list of child elements.
`CreationDate`	|	`DateTime`	|	-	|	The date of the Request was created.
`CurrencyCode`	|	`string`	|	-	|	The 3-letter ISO 4217 currency code for the Request currency. The Request currency is defined as the Request creator's default reimbursement currency.
`CurrencyName`	|	`string`	|	-	|	The currency name for the Request currency. The Request currency is defined as the Request creator's default reimbursement currency.
`Custom1 through Custom20`	|	`CustomField`	|	-	|	The details from the Custom fields. These fields may not have data, depending on the configuration.
`EmployeeName`	|	`string`	|	-	|	The first, middle (or middle initial), and last name of the employee who created the Request.
`EndDate`	|	`string`	|	-	|	The end date of the Request.
`EndTime`	|	`string`	|	-	|	The end time for the Request.
`Entries`	|	`Array`	|	[Entry](#entry)	|	This parent element has a RequestEntry child element for each entry. See the RequestEntry model for the full list of child elements.
`EverSentBack`	|	`string`	|	-	|	Indicates whether the Request has ever been sent back to the employee. Format: Y/N
`Exceptions`	|	`Array`	|	[Exception](#exception)	|	This parent element has an Exception child element for each exception. See the Exception model for the full list of child elements.
`ExtensionOf`	|	`string`	|	-	|	The ID of the initial Request that this Request is an extension of or adendum to.
`HasException`	|	`string`	|	-	|	Indicates whether the Request has exceptions. Format: Y/N
`HeaderFormID`	|	`string`	|	-	|	The unique identifier of the Header Form resource (See. the "Forms" resource for more information).
`LastModifiedDate`	|	`DateTime`	|	-	|	The date the Request was last modified. Format: YYYY-MM-DDThh:mm:ss
`LoginID`	|	`string`	|	-	|	The Concur login ID of the Request owner.
`Name`	|	`string`	|	-	|	The name of the Request.
`PolicyID`	|	`string`	|	-	|	The unique identifier of the policy that applies to this Request. Maximum length 64 characters.
`PolicyName`	|	`string`	|	-	|	The name of the policy that applies to this Request.
`Purpose`	|	`string`	|	-	|	The purpose of the Request.
`RequestID`	|	`string`	|	-	|	The unique key for the Request.
`StartDate`	|	`string`	|	-	|	The start date of the Request.
`StartTime`	|	`string`	|	-	|	The start time for the Request.
`SubmitDate`	|	`DateTime`	|	-	|	The date the Request was submitted. Format: YYYY-MM-DDThh:mm:ss.
`TotalApprovedAmount`	|	`string`	|	-	|	The total amount of approved expenses in the Request.
`TotalPostedAmount`	|	`string`	|	-	|	The total amount of the Request.
`TotalRemainingAmount`	|	`string`	|	-	|	The total amount of expenses remaining in the Request.
`UserPermissions`	|	`UserPermissions`	|	-	|	The actions that the user is allowed to perform on the Request.



### <a name="cashadvance"></a>Cash Advance
		
Name | Type | Format | Description
-----|------|--------|------------
`AmountRequested`	|	`string`	|	-	|	The amount requested in the cash advance, in the currency specified in the CurrencyCode element.
`ApprovalStatusName`	|	`string`	|	-	|	The approval status of the cash advance.
`Comments`	|	`Array`	|	[Comment](#comment)	|	This parent element has a Comment child element for each comment. Refer to the Comments model for the full list of child elements.
`CurrencyCode`	|	`string`	|	-	|	The 3-letter ISO 4217 currency code for the cash advance currency.
`CurrencyName`	|	`string`	|	-	|	The name of the currency for the cash advance.
`EmployeeCurrencyCode`	|	`string`	|	-	|	The 3-letter ISO 4217 currency code for the employee's currency, also known as the home currency.
`EmployeeCurrencyName`	|	`string`	|	-	|	The name of the employee's currency, also known as the home currency.
`ExchangeRate`	|	`string`	|	-	|	The exchange rate that applies to the cash advance.
`IssueDate`	|	`DateTime`	|	-	|	The issue date for the cash advance.
`RequestDate`	|	`DateTime`	|	-	|	The date of cash advance request, obtained from the detailed cash advance record.
`StartingBalance`	|	`string`	|	-	|	The initial balance for the cash advance.


### <a name="comment"></a>Comment

Name | Type | Format | Description
-----|------|--------|------------
`AuthorFirstName`	|	`string`	|	-	|	The first name of the person who made the comment.
`AuthorLastName`	|	`string`	|	-	|	The last name of the person who made the comment.
`CommentDateTime`	|	`DateTime`	|	-	|	The time, in GMT, when the user made the comment.
`IsLatest`	|	`bool`	|	-	|	Indicates that the comment is the last one.
`Value`	|	`string`	|	-	|	The text of the Request header comment.


### Custom Field
				
Name | Type | Format | Description
-----|------|--------|------------
`Code`	|	`string`	|	-	|	For list fields, this is the list item code.
`ListItemID`	|	`string`	|	-	|	For list fields, this is the list item ID.
`Type`	|	`string`	|	-	|	The custom field type. Possible values: Amount, Boolean, ConnectedList, Date, Integer, List, Number, Text
`Value`	|	`string`	|	-	|	The value in the Org Unit or Custom field. For list fields, this is the name of the list item. Maximum length: 48 characters


### <a name="entry"></a>Entry
				
Name | Type | Format | Description
-----|------|--------|------------
`Allocations`	|	`Array`	|	[Allocation](#allocation)	|	This parent element has an Allocation child element for each associated allocation. See the Allocation model for the full list of child elements.
`ApprovedAmount`	|	`string`	|	-	|	The approved amount of the Request entry in the Request currency.
`Comments`	|	`Array`	|	[Comment](#comment)	|	This parent element has a Comment child element for each comment. See the Comments model for the full list of child elements.
`Custom1` through `Custom40`	|	`CustomField`	|	-	|	The details from the Custom fields. These fields may not have data, depending on the configuration.
`EntryDescription`	|	`string`	|	-	|	The description of the Request entry.
`EntryFormID`	|	`string`	|	-	|	The unique identifier of the Entry Form resource (See. the "Forms" resource for more information).
`Exceptions`	|	`Array`	|	[Exception](#exception)	|	This parent element has an Exception child element for each exception. See the Exception model for the full list of child elements.
`ExchangeRate`	|	`string`	|	-	|	The exchange rate that applies to the entry.
`ExpenseTypeName`	|	`string`	|	-	|	The expense type name.
`ForeignAmount`	|	`string`	|	-	|	The foreign amount of the Request entry.
`ForeignCurrencyCode`	|	`string`	|	-	|	The 3-letter ISO 4217 currency code for the foreign currency amount of the Request entry.
`ForeignCurrencyName`	|	`string`	|	-	|	The name of the currency for the foreign amount.
`LastModifiedDate`	|	`DateTime`	|	-	|	The date the entry was last modified. Format: YYYY-MM-DDThh:mm:ss
`OrgUnit1` through `OrgUnit6`	|	`CustomField`	|	-	|	The details from the Org Unit custom fields. These fields may not have data, depending on the configuration.
`PostedAmount`	|	`string`	|	-	|	The posted amount of the Request entry in the Request currency.
`RemainingAmount`	|	`string`	|	-	|	The remaining amount of the Request entry in the Request currency.
`Segments`	|	`Array`	|	[Segment](#segment)	|	This parent element has a Segment child element for each segment associated with the travel request. See the Segment model for the full list of child elements.
`TransactionDate`	|	`DateTime`	|	-	|	The date of the Request entry.
`TripType`	|	`string`	|	-	|	['ONE_WAY' or 'ROUND_TRIP' or 'MULTI_STOP'] Trip type of the air or rail segment. Possible values are: ONE_WAY, ROUND_TRIP and MULTI_STOP.


### <a name="allocation"></a>Allocation
				
Name | Type | Format | Description
-----|------|--------|------------
`Custom1` through `1Custom20`	|	`CustomField`	|	-	|	The details from the Custom fields. These fields may not have data, depending on the configuration.
`Percentage`	|	`string`	|	-	|	The percentage of the expense that is included in this allocation.



### <a name="exception"></a>Exception

Name | Type | Format | Description
-----|------|--------|------------
`Code`	|	`string`	|	-	|	The system exception code defined for the exception. Example: BADCODE
`Level`	|	`int`	|	-	|	The numeric level associated with the exception. Example: 99
`Message`	|	`string`	|	-	|	The user-facing message defined for the exception.


### <a name="segment"></a>Segment

Name | Type | Format | Description
-----|------|--------|------------
`ApprovedAmount`	|	`string`	|	-	|	The approved amount of the segment in the Request currency.
`ArrivalDate`	|	`string`	|	-	|	The arrival date of the segment.
`ArrivalTime`	|	`string`	|	-	|	The arrival time of the segment.
`ClassOfServiceCode`	|	`string`	|	-	|	The Class of Service Code from Concur Travel. Appears only when the Request is integrated with Concur Travel.
`Comments`	|	`Array`	|	[Comment](#comment)	|	The list of comments added for this segment.
`Custom1` through `Custom40`	|	`CustomField`	|	-	|	The details from the Custom fields. These fields may not have data, depending on the configuration.
`DepartureDate`	|	`string`	|	-	|	The departure date of the segment.
`DepartureTime`	|	`string`	|	-	|	The departure time of the segment.
`Exceptions`	|	`Array`	|	[Exception](#exception)	|	This parent element has an Exception child element for each exception. Refer to the Exception model for the full list of child elements.
`ExchangeRate`	|	`string`	|	-	|	The exchange rate that applies to the segment.
`FlightNumber`	|	`string`	|	-	|	The flight number for air segments. Appears only when Request is integrated with Concur Travel.
`ForeignAmount`	|	`string`	|	-	|	The foreign currency amount of the segment.
`ForeignCurrencyCode`	|	`string`	|	-	|	The 3-letter ISO 4217 currency code for the foreign currency amount of the segment.
`ForeignCurrencyName`	|	`string`	|	-	|	The name of the currency for the foreign amount of the segment.
`FormTypeCode`	|	`string`	|	-	|	The code for form type of the segment type.
`FromLocationDetail`	|	`string`	|	-	|	The code for the starting location.
`FromLocationID`	|	`string`	|	-	|	The unique identifier of the departure location. (See. the "Locations" resource for more information).
`FromLocationName`	|	`string`	|	-	|	The name of the starting location.
`IsAgencyBooked`	|	`string`	|	-	|	Indicates whether the air segment was agency booked. Format: Y/N.
`IsSelfBooked`	|	`string`	|	-	|	Indicates whether the air segment was self booked. Format: Y/N.
`LastModifiedDate`	|	`DateTime`	|	-	|	The date the segment was last modified. Format: YYYY-MM-DDThh:mm:ss
`OutboundSegmentID`	|	`string`	|	-	|	REQ_SEGMENT_OUTBOUND_ID
`PostedAmount`	|	`string`	|	-	|	The posted amount of the segment in the Request currency.
`RecordLocator`	|	`string`	|	-	|	Appears only when the Request is integrated with Concur Travel.
`RemainingAmount`	|	`string`	|	-	|	The remaining amount of the segment in the Request currency.
`SegmentFormID`	|	`string`	|	-	|	The unique identifier of the Segment Form resource (See. the "Forms" resource for more information).
`SegmentLocator`	|	`string`	|	-	|	The unique identifier for the Concur Travel segment associated with this segment. Appears only when the Request is integrated with Concur Travel.
`SegmentType`	|	`string`	|	-	|	The type of itinerary segment. Format: air, car, hotel, rail, dining, event, ground, taxi, parking, other and so on
`SegmentTypeCode`	|	`string`	|	-	|	The code for the type of itinerary segment.
`ToLocationDetail`	|	`string`	|	-	|	The code for the ending location.
`ToLocationID`	|	`string`	|	-	|	The unique identifier of the arrival location. (See. the "Locations" resource for more information).
`ToLocationName`	|	`string`	|	-	|	The name of the ending location.
`TripLocator`	|	`string`	|	-	|	The unique identifier for the Concur Travel trip associated with this segment. Appears only when the Request is integrated with Concur Travel.


### <a name="userpermissions"></a>User Permissions

Name | Type | Format | Description
-----|------|--------|------------
`Links`	|	`Array`	|	[Link](#link)	|	The actions that the user is allowed to perform on the Request.


### <a name="link"></a>Link

Name | Type | Format | Description
-----|------|--------|------------
`Action`	|	`string`	|	-	|	The action that the user is allowed to perform on the resource.
`Method`	|	`string`	|	-	|	The method of the request. Possible values: GET, POST, PUT and DELETE.
`Url`	|	`string`	|	-	|	The URL of the resource that the user can access.





