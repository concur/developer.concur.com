# Expense Group Cofigurations
* [Retrieve a configuration of an expense group](#get)
* [Retrieve an expense group configuration by ID](#getID)
* [Schema](#schema)

## <a name="get"></a>Retrieve a configuration of an expense group
    GET  /expense/expensegroupconfigurations

        
### Parameters
Name | Type | Format | Description
-----|------|--------|------------			
`user`	|	`string`	|	`query`	|	The login ID of the user associated with this expense group configuration. The user must have the Web Services Admin role to use this parameter.`offset`	|	`string`	|	`query`	|	The starting point of the next set of results, after the limit specified in the limit field has been reached.`limit`	|	`Int32`	|	`query`	|	The number of records to return Default value: 10



## <a name="getID"></a>Retrieve an expense group configuration by ID
    GET  /expense/expensegroupconfigurations{id}


### Parameters
Name | Type | Format | Description
-----|------|--------|------------
`id`	|	`string`	|	`path`	|	**Required** The ID of the expense group configuration.`user`	|	`string`	|	`query`	|	The login ID of the user associated with this expense group configuration. The user must have the Web Services Admin role to use this parameter.



## <a name="schema"></a>Schema


###<a name="ExpenseGroupConfigurations"></a>Expense Group Configurations
Name | Type | Format | Description
-----|------|--------|------------
`id`	|	`string`	|	`path`	|	**Required** The ID of the expense group configuration.`user`	|	`string`	|	`query`	|	The login ID of the user associated with this expense group configuration. The user must have the Web Services Admin role to use this parameter.
###<a name="expensegroupconfiguration"></a>Expense Group Configuration
Name | Type | Format | Description
-----|------|--------|------------
`AllowUserDigitalTaxInvoice`	|	`Boolean`	|	-	|	Indicates whether users are allowed to upload digital tax invoices. Format: true or false`AllowUserRegisterYodlee`	|	`Boolean`	|	-	|	Indicates whether users in the expense group are allowed to register Yodlee credit cards. Format: true or false`AttendeeListFormID`	|	`string`	|	-	|	The unique identifier for the attendee list form.`AttendeeListFormName`	|	`string`	|	-	|	The name of the attendee list form.`AttendeeTypes`	|	`array`[AttendeeType]	|	-	|	The list of attendee types.`CashAdvance`	|	`CashAdvance`	|	-	|	The amount of the cash advance.`ID`	|	`string`	|	-	|	The unique identifier of the resource.`Name`	|	`string`	|	-	|	The name of the expense group configuration.`PaymentTypes`	|	`array`	|	[Payment Type](#paymenttype)	|	The list of payment types.`Policies`	|	`array`	|	[Policy](#policy)	|	The list of policies and expense types.`URI`	|	`string`	|	-	|	The URI to the resource.
###<a name="attendeetype"></a>Attendee Type
Name | Type | Format | Description
-----|------|--------|------------
`Code`	|	`string`	|	-	|	The attendee type code.`Name`	|	`string`	|	-	|	The name of the attendee type.


###<a name="Cash Advance"></a>Cash Advance
Name | Type | Format | Description
-----|------|--------|------------
`AllowUserCarryBalance`	|	`Boolean`	|	-	|	Indicates whether users are allowed to carry a cash advance balance forward from one report to another. Format: true or false`AllowUserLinkMultiple`	|	`Boolean`	|	-	|	Indicates whether users are allowed to link multiple cash advances to one expense report. Format: true or false`AllowUserUpdateExchangeRate`	|	`Boolean`	|	-	|	Indicates whether users are allowed to update the currency exchange rate for expense entries. Format: true or false`Name`	|	`string`	|	-	|	The name of the cash advance workflow.`WorkflowID`	|	`string`	|	-	|	The unique identifier for the cash advance workflow. Null means there is no such workflow.
###<a name="paymenttype"></a>Payment Type
Name | Type | Format | Description
-----|------|--------|------------
`ID`	|	`string`	|	-	|	The unique identifier of the resource.`IsDefault`	|	`Boolean`	|	-	|	Determines whether this payment type is the default. Format: true or false`Name`	|	`string`	|	-	|	The name of the payment type.

###<a name="policy"></a>Policy
Name | Type | Format | Description
-----|------|--------|------------
`ExpenseTypes`	|	`array`	|	[ExpenseType](#expensetype)	|	The parent element for the list of expense types in the policy.`ID`	|	`string`	|	-	|	The unique identifier of the resource.`IsDefault`	|	`Boolean`	|	-	|	Indicates whether this policy is the default. Format: true or false`IsInheritable`	|	`Boolean`	|	-	|	Indicates whether the descendent nodes in the Expense Feature Hierarchy are covered by this policy. Format: true or false`Name`	|	`string`	|	-	|	The name of the policy.


###<a name="expensetype"></a>Expense Type
Name | Type | Format | Description
-----|------|--------|------------
`Code`	|	`string`	|	-	|	The code for the expense type. Expense types define expenses within an expense category. For example, Business Meal is an expense type in the MEALS category.`ExpenseCode`	|	`string`	|	-	|	The code for the expense category. The expense category code controls the function of an expense entry. Format: OTHER - Standard, COCARMILE - Company Car, PCARMILE - Personal Car, MFUEL - Fuel For Mileage, LODGING - Lodging, MEALS - Meals, OTHERNP - Other Not Partially Approvable, JPYPTRAN - Japanese Public Transportation`Name`	|	`string`	|	-	|	The name of the expense type.

