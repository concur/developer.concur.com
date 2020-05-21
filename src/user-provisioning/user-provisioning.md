---
title: User Provisioning Service
layout: reference
---

The User Provisioning Service will allow “callers” to provision a user in Concur instead of using Excel (existing manual process).  Once a “user” is provisioned, the user identity is properly setup in Profile, Travel and Spend. 

•	The “user” core data (name, login, password, etc.), enterprise (company ID, manager ID, etc.) & legacy data/schema (legacy ID, legacy Data etc.) will be owned by the UPS (to be more precise: Profile Cloud (new Profile API) and the rest of the “user” data will be owned by each extension (travel & spend for now)

•	The concept of “schemas” or extensions will follow the SCIM protocol

•	As part of this initiative, we will have multiple extensions to support: Travel & Spend (each team is responsible for building their extensions). 

For details you can view the following docs: 
•	https://wiki.concur.com/confluence/display/PDI/User+Provisioning+Service+-+Architecture
•	https://wiki.concur.com/confluence/display/PDI/User+Provisioning+Service+-+Design
•	https://github.concur.com/core/profile-service/blob/master/cloud/readme.user.provision.walkthrough.md

**Schema Definition**
The User schema is inspired by the work from System for Cross-domain Identity Management (SCIM), in particular:

RFC 7643 System for Cross-domain Identity Management: Core Schema
RFC 7644 System for Cross-domain Identity Management: Protocol


* [Process Flow] https://wiki.concur.com/confluence/display/PDI/User+Provisioning+Service+-+Design
* [Products and Editions]
* [Scope Usage]user.provision.write
* [Dependencies]require clients to have either a 509 or JWT certificate.  Require pub-sub, identity, travel and spend services to be running. 
* [Access Token Usage] Require a 509 certificate for internal communication and a JWT for external communication. 
* [Create a resource] https://github.concur.com/core/profile-service/blob/master/cloud/readme.user.provision.walkthrough.md
* [Obtain a representation](#obtain-representation) Not supported at this time.
* [Schema](#schema)
  * Core full Enterprise - https://github.concur.com/core/profile-service/blob/master/cloud/schema/full.profile.internal.enterprise.json

* Spend User - https://sus.qa.us-west-2.nonprod.cnqr.delivery/spend-user/schema/urn:ietf:params:scim:schemas:extension:spend:2.0:User

* Core full Enterprise - https://github.concur.com/core/profile-service/blob/master/cloud/schema/full.profile.internal.enterprise.json

* Spend Role - https://sus.qa.us-west-2.nonprod.cnqr.delivery/spend-user/schema/urn:ietf:params:scim:schemas:extension:spend:2.0:Role
* Spend Workflowpreference - https://sus.qa.us-west-2.nonprod.cnqr.delivery/spend-user/schema/urn:ietf:params:scim:schemas:extension:spend:2.0:WorkflowPreference
* Spend Approver - https://sus.qa.us-west-2.nonprod.cnqr.delivery/spend-user/schema/urn:ietf:params:scim:schemas:extension:spend:2.0:Approver
* Spend Delegate - https://sus.qa.us-west-2.nonprod.cnqr.delivery/spend-user/schema/urn:ietf:params:scim:schemas:extension:spend:2.0:Delegate
* Spend Preference - https://sus.qa.us-west-2.nonprod.cnqr.delivery/spend-user/schema/urn:ietf:params:scim:schemas:extension:spend:2.0:UserPreference
* Spend Payroll - https://sus.qa.us-west-2.nonprod.cnqr.delivery/spend-user/schema/urn:ietf:params:scim:schemas:extension:enterprise:2.0:Payroll
* Travel - https://github.concur.com/travel-profile/tps/blob/master/docs/travel-extn/scimSchema.json
  * [Error](#schema-error)
* [Definitions](#definitions)


## <a name="process-flow"></a>Process Flow

A process diagram that explains the API structure and the usage flow from the user perspective, for the most common use case. Required by SAP. We have resources to make this diagram align with corporate styles, so we need only the basic details without any specific styling.

https://wiki.concur.com/confluence/display/PDI/User+Provisioning+Service+-+Design

## <a name="products-editions"></a>Products and Editions

Delete any unsupported products or editions.

* Concur Expense Professional Edition
* Concur Expense Standard Edition
* Concur Travel Professional Edition
* Concur Travel Standard Edition
* Concur Invoice Professional Edition
* Concur Invoice Standard Edition
* Concur Request Professional Edition
* Concur Request Standard Edition

## <a name="scope-usage"></a>Scope Usage

user.provision.write

Which scopes are required to interact with this API. This includes scopes for other APIs that are required (Company Profile, etc). Contact Scopes PM to add any new scopes to the repo.

Name|Description|Endpoint
user.provision.write |Allow Companies to provision users using the company JWTs |https://us.api.concursolutions.com/provisioning/v4/provisions/
`scope`|Description|endpoint that requires this scope

## <a name="dependencies"></a>Dependencies

Any other APIfcvs that are required by the core process flow as documented in the diagram (Company Profile, User, List Item, other common APIs). Should include why they are required. Can include previous versions of this API if necessary.

## <a name="access-token-usage"></a>Access Token Usage

x509 Certificate Authentication
Allow concur internal callers through whitelisted x509 certificates
Access Token
Allow Companies to provision users using the company JWTs
The companies must have user.provision.write  scope for provisioning


## <a name="create-resource"></a>Create a resource

Description for the endpoint here.

### Scopes

user.provision.write

### Request

#### URI

##### Template

```shell
https://{region}.example.com/{service}/{version}/{storeIdentifier}?purchaseDate={purchaseDate}
```

##### Parameters

Name|Type|Format|Description
---|---|---|---
`storeIdentifier`|`string`|-|**Required** Note required when applicable.
`purchaseDate`|`string`|-|This parameter isn't required.



### Response

#### Status Codes

Delete unused codes

* [100 Continue](https://tools.ietf.org/html/rfc7231#section-6.2.1)
* [101 Switching Protocols](https://tools.ietf.org/html/rfc7231#section-6.2.2)
* [102 Processing](https://tools.ietf.org/html/rfc2518#section-10.1)
* [200 OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)
* [201 Created](https://tools.ietf.org/html/rfc7231#section-6.3.2)
* [202 Accepted](https://tools.ietf.org/html/rfc7231#section-6.3.3)
* [203 Non-Authoritative Information](https://tools.ietf.org/html/rfc7231#section-6.3.4)
* [204 No Content](https://tools.ietf.org/html/rfc7231#section-6.3.5)
* [205 Reset Content](https://tools.ietf.org/html/rfc7231#section-6.3.6)
* [206 Partial Content](https://tools.ietf.org/html/rfc7233#section-4.1)
* [207 Multi-Status](https://tools.ietf.org/html/rfc4918#section-11.1)
* [208 Already Reported](https://tools.ietf.org/html/rfc5842#section-7.1)
* [226 IM Used](https://tools.ietf.org/html/rfc3229#section-10.4.1)
* [300 Multiple Choices](https://tools.ietf.org/html/rfc7231#section-6.4.1)
* [301 Moved Permanently](https://tools.ietf.org/html/rfc7231#section-6.4.2)
* [302 Found](https://tools.ietf.org/html/rfc7231#section-6.4.3)
* [303 See Other](https://tools.ietf.org/html/rfc7231#section-6.4.4)
* [304 Not Modified](https://tools.ietf.org/html/rfc7232#section-4.1)
* [305 Use Proxy](https://tools.ietf.org/html/rfc7231#section-6.4.5)
* [307 Temporary Redirect](https://tools.ietf.org/html/rfc7231#section-6.4.7)
* [308 Permanent Redirect](https://tools.ietf.org/html/rfc7538#section-3)
* [400 Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)
* [401 Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)
* [402 Payment Required](https://tools.ietf.org/html/rfc7231#section-6.5.2)
* [403 Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)
* [404 Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)
* [405 Method Not Allowed](https://tools.ietf.org/html/rfc7231#section-6.5.5)
* [406 Not Acceptable](https://tools.ietf.org/html/rfc7231#section-6.5.6)
* [407 Proxy Authentication Required](https://tools.ietf.org/html/rfc7235#section-3.2)
* [408 Request Timeout](https://tools.ietf.org/html/rfc7231#section-6.5.7)
* [409 Conflict](https://tools.ietf.org/html/rfc7231#section-6.5.8)
* [410 Gone](https://tools.ietf.org/html/rfc7231#section-6.5.9)
* [411 Length Required](https://tools.ietf.org/html/rfc7231#section-6.5.10)
* [412 Precondition Failed](https://tools.ietf.org/html/rfc7232#section-4.2)
* [413 Payload Too Large](https://tools.ietf.org/html/rfc7231#section-6.5.11)
* [414 URI Too Long](https://tools.ietf.org/html/rfc7231#section-6.5.12)
* [415 Unsupported Media Type](https://tools.ietf.org/html/rfc7231#section-6.5.13)
* [416 Range Not Satisfiable](https://tools.ietf.org/html/rfc7233#section-4.4)
* [417 Expectation Failed](https://tools.ietf.org/html/rfc7231#section-6.5.14)
* [421 Misdirected Request](https://tools.ietf.org/html/rfc7540#section-9.1.2)
* [422 Unprocessable Entity](https://tools.ietf.org/html/rfc4918#section-11.2)
* [423 Locked](https://tools.ietf.org/html/rfc4918#section-11.3)
* [424 Failed Dependency](https://tools.ietf.org/html/rfc4918#section-11.4)
* [426 Upgrade Required](https://tools.ietf.org/html/rfc7231#section-6.5.15)
* [428 Precondition Required](https://tools.ietf.org/html/rfc6585#section-3)
* [429 Too Many Requests](https://tools.ietf.org/html/rfc6585#section-4)
* [431 Request Header Fields Too Large](https://tools.ietf.org/html/rfc6585#section-5)
* [451 Unavailable For Legal Reasons](https://tools.ietf.org/html/rfc7725#section-3)
* [500 Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)
* [501 Not Implemented](https://tools.ietf.org/html/rfc7231#section-6.6.2)
* [502 Bad Gateway](https://tools.ietf.org/html/rfc7231#section-6.6.3)
* [503 Service Unavailable](https://tools.ietf.org/html/rfc7231#section-6.6.4)
* [504 Gateway Timeout](https://tools.ietf.org/html/rfc7231#section-6.6.5)
* [505 HTTP Version Not Supported](https://tools.ietf.org/html/rfc7231#section-6.6.6)
* [506 Variant Also Negotiates](https://tools.ietf.org/html/rfc2295#section-8.1)
* [507 Insufficient Storage](https://tools.ietf.org/html/rfc4918#section-11.5)
* [508 Loop Detected](https://tools.ietf.org/html/rfc5842#section-7.2)
* [510 Not Extended](https://tools.ietf.org/html/rfc2774#section-7)
* [511 Network Authentication Required](https://tools.ietf.org/html/rfc6585#section-6)





#### Payload

* [Schema One](#schema-one)
* [Error](#schema-error)

### Example
```{
	"schemas": [
		"urn:ietf:params:scim:api:messages:2.0:BulkRequest"
	],
	"failOnErrors": 1,
	"Operations": [
		{
			"concur-correlationid": "provisioning-test",
			"method": "POST",
			"path": "/Users",
			"data": {
				"userName": "john.doe194@BravoPro7.com",
				"active": true,
				"preferredLanguage": "de-DE",
				"name": {
					"formatted": "Mr. John Doe",
					"legalName": "Mr. John Doe",
					"familyName": "Doe",
					"givenName": "John",
					"honorificPrefix": "Mr"
				},
				"gender": "Male",
				"dateOfBirth": "2018-01-01T00:00:00.000",
				"displayName": "John Doe",
				"externalId": "1234abcd56789efg",
				"nickName": "Francis",
				"preferredLanguage": "de-DE",
				"timezone": "America/Los_Angeles",
				"addresses": [
					{
					"type": "Work",
         "streetAddress": "911 Universal City Plaza",
         "locality": "Hollywood",
         "region": "CA",
         "postalCode": "91608",
         "country": "US",
         "formatted": "911 Universal City Plaza  Hollywood, CA 91608 US",
         "primary": true			
				
					}
				],
				"phoneNumbers": [
					{
						"value": "555-555-5555",
						"type": "Work"
					},
					{
						"value": "555-555-4444",
						"type": "Mobile"
					}
				],
				
				
				"emails": [
					{
						"value": "john.doe193@BravoPro7.com",
						"type": "Work",
						"display": "John Doe Test"
					}
				],
				"urn:ietf:params:scim:schemas:extension:enterprise:2.0:User": {
					"employeeNumber": "37487",
					"organization": "Universal Studios",
					"division": "Theme Park",
					"department": "Tour Operations",
					"manager": {
						"value": "eef62890-04fc-4b72-9c5e-1511497414be",
						"displayName": "John Smith"
					},
					"companyId": "4072d61f-d6a6-4553-9507-267748573f4b",
					"entitlements": [
						"Expense",
						"Invoice",
						"Locate",
						"Request",
						"Travel"
					],
					"jobTitle": "Software Engineer",
					"orgUnit": "Development",
					"costCenter": "CC01"
				},
				"urn:ietf:params:scim:schemas:extension:spend:2.0:User": {
					"reimbursementCurrency": "USD",
					"reimbursementType": "Expense Pay by Concur",
					"budgetCountryCode": "US",
					"ledgerCode": "DEFAULT",
					"country": "US",
					"stateProvince": "WA",
					"locale": "en-US"
				},
				"urn:ietf:params:scim:schemas:extension:spend:2.0:Approver": {
					"request": [
						{
							"approver": {
								"value": "aaaaaaaa-bbbb-cccc-dddd-eeeeeeeeeeee",
								"$ref": "https://www.concursoultions.co/users/approver",
								"displayName": "w.marks@sap.com",
								"employeeNumber": "Approver"
							},
							"primary": true
						}
					],
					"report": [
						{
							"approver": {
								"value": "eef62890-04fc-4b72-9c5e-1511497414be",
								"$ref": "https://www.concursoultions.com/users/approver2",
								"displayName": "craig.truzzi@sap.com",
								"employeeNumber": "Approver2"
							},
							"primary": false
						}
					]
				},
				"urn:ietf:params:scim:schemas:extension:spend:2.0:Delegate": {
					"expense": [
						{
							"canApprove": true,
							"canPrepare": true,
							"canPrepareForApproval": true,
							"canReceiveApprovalEmail": true,
							"canReceiveEmail": true,
							"canSubmit": true,
							"canSubmitTravelRequest": true,
							"canUseBi": true,
							"canViewReceipt": true,
							"delegate": {
								"value": "eef62890-04fc-4b72-9c5e-1511497414be",
								"$ref": "https://www.concursoultions/users/delegate",
								"displayName": "eddy.hung@sap.com",
								"employeeNumber": "Delegate"
							},
							"temporaryDelegatation": {
								"temporaryDelegationFromDate": "2020-02-19T03:15:00.000Z",
								"temporaryDelegationToDate": "2020-06-19T03:59:00.000Z"
							}
						}
					]
				},
				"urn:ietf:params:scim:schemas:extension:spend:2.0:WorkflowPreference": {
					"emailStatusChangeOnCashAdvance": true,
					"emailAwaitApprovalOnCashAdvance": true,
					"emailStatusChangeOnReport": true,
					"emailAwaitApprovalOnReport": true,
					"promptForApproverOnReportSubmit": true,
					"emailStatusChangeOnTravelRequest": true,
					"emailAwaitApprovalOnTravelRequest": true,
					"promptForApproverOnTravelRequestSubmit": true,
					"emailStatusChangeOnPayment": true,
					"emailAwaitApprovalOnPayment": true,
					"promptForApproverOnPaymentSubmit": true
				},
				"urn:ietf:params:scim:schemas:extension:spend:2.0:UserPreference": {
					"allowCreditCardTransArrivalEmails": true,
					"allowReceiptImageAvailEmails": true,
					"promptForCardTransactionsOnReport": true,
					"autoAddTripCardTransOnReport": true,
					"promptForReportPrintFormat": true,
					"defaultReportPrintFormat": "DETAILED",
					"showTotalOnReport": true,
					"showExpenseOnReport": "ALL",
					"showInstructHelpPanel": true,
					"showImagingIntro": true,
					"expenseAuditRequired": "REQUIRED",
					"useQuickItinAsDefault": true
				},
				"urn:ietf:params:scim:schemas:extension:travel:2.0:User": {
					"ruleClass": {
						"id": 766615,
						"ruleClass": 87654,
						"travelNameRemark": "Testing",
						"xmlProfileSyncId": 12345,
						"travelCrsName": "Testing Name",
						"groups": "testing",
						"manager": {
								"value": "eef62890-04fc-4b72-9c5e-1511497414be",
								"employeeNumber": "eef62890-04fc-4b72-9c5e-1511497414be"
							}
					}
				}
			}
		}
	]
}

#### Request

* Showing developers exactly what they can expect in request and response values when using is perhaps the simplest way to complete this portion of the documentation.
* Use triple backticks to create fenced code blocks and a language identifier for syntax highlighting.
* See [Creating and highlighting code blocks](https://help.github.com/articles/creating-and-highlighting-code-blocks/)

```shell
POST https://example.com/stores/123
Accept: application/json
```

```json
{
  "orderId": "value",
  "orderMemo": "value"
}
```

#### Response

* Ensure the headers are kept separate as a code block from the payload for ease of reading.
* Add the language identifier to any code blocks for syntax highlighting
* See the GitHub topic [Creating and highlighting code blocks](https://help.github.com/articles/creating-and-highlighting-code-blocks/) for more information.

```shell
HTTP/1.1 200 OK
Cache-Control: max-age=604800
Content-Type: application/json
Date: Wed, 06 Jul 2020 17:33:03 GMT
Etag: "359670651"
Expires: Wed, 13 Jul 2020 17:33:03 GMT
Last-Modified: Fri, 09 Aug 2020 23:54:35 GMT
Content-Length: 1270
```
*** Response:
https://github.concur.com/core/profile-service/blob/master/cloud/readme.user.provision.walkthrough.md

## <a name="obtain-representation"></a>Obtain a representation

Copy, paste and modify the template found in the [Create a resource](#create-resource) section.

## <a name="schema"></a>Schema

### <a name="schema-one"></a>Schema One

Name|Type|Format|Description
---|---|---|---
`orderId`|`string`|-|**Required** A description including required status.
`orderMemo`|`string`|-|A description. This key is not required.
`transactionTimestamp`|`string`|[dateTime](#definition-dateTime)|A key linking to a definition for the format.
`arrayOfThings`|`array`|[Schema Two](#schema-two)|A key linking to another schema for the format.

### <a name="schema-two"></a>Schema Two

Name|Type|Format|Description
---|---|---|---
`orderDetailsId`|`string`|-|A description for the key.
`aKeyForEnum`|`number`|`enum`|The value must be one of these: `1`, `2` or `3`.

### <a name="schema-error"></a>Error

Name|Type|Format|Description
---|---|---|---
`errorCode`|`string`|-|**Required** Machine readable code associated with the error which is static and never localized. Examples: `dateTimeMissing`, `OutOfMem` and `invalidUser`. These could also be UUID4 (`a1d7bb3bb19348b0858687acc9e303ec`), number (`123456`) or a URI (`https://example.com/errors/invaliduser`) which ideally provides additional information when dereferenced. Whatever form is chosen it's worth noting contextual strings are helpful to developers reading the code.
`errorMessage`|`string`|-|**Required** Message associated with the error.
`dataPath`|`string`|-|Relative data path.
`schemaPath`|`string`|-|Relative schema path.
`errors`|`array`|[`error`](#schema-error)|An array of errors. Note: this points to this schema as errors can nest.

## <a name="definitions"></a>Definitions

Name|Type|Format|Description
---|---|---|---
<a name="definition-dateTime"></a>`dateTime`|`string`|-|DateTime of where the transaction happened in format specified in ISO 8601, using UTC + Offset. For example, 2016-04-22T12:20+0700 (12:20 PM in Pacific Time).
