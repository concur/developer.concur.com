---
title: Expense Group Configurations
layout: reference
---



# Expense Group Configurations

Retrieves the list of Expense Polices, Expense Types and Payment Types for the Expense Group the user specified in the OAuth access token is assigned to. Each Expense Policy contains a list of valid Expense Types. The Payment Types are associated with the user’s Expense Group and apply to all the returned policies. Only the payment types that are valid for the Post Expense Entry endpoint are returned.

NOTE: The Concur Expense product is highly configurable, and each client may have a unique set of payment types. If a payment type is not included in the response, it is not available for use with this client.



* [Retrieve a configuration of an expense group](#get)
* [Retrieve an expense group configuration by ID](#getID)
* [Schema](#schema)
* [Make a test call using 3.0 Swagger](https://www.concursolutions.com/api/docs/index.html#!/ExpenseGroupConfigurations)


## Version
3.0

1.1 documentation is available [here](/api-reference-deprecated/version-one-one/expense-group/expense-group-configuration-resource.html)

## <a name="get"></a>Retrieve a configuration of an expense group

    GET  /api/v3.0/expense/expensegroupconfigurations

        
### Parameters

Name | Type | Format | Description
-----|------|--------|------------			
`user`	|	`string`	|	`query`	|	The login ID of the user associated with this expense group configuration. The user must have the Web Services Admin role to use this parameter.
`offset`	|	`string`	|	`query`	|	The starting point of the next set of results, after the limit specified in the limit field has been reached.
`limit`	|	`Int32`	|	`query`	|	The number of records to return Default value: 10

### Request URL

```
https://www.concursolutions.com/api/v3.0/expense/expensegroupconfigurations?user=ALL&limit=10
```

### JSON example of a successful response

```
{
  "Items": [
    {
      "Name": "United Kingdom",
      "AttendeeListFormID": "gWh2aF2cfwJElRBMIJ9ahYnTVXDIp1fQUdg",
      "AttendeeListFormName": "Default Attendee Detail View",
      "AllowUserRegisterYodlee": false,
      "AllowUserDigitalTaxInvoice": false,
      "CashAdvance": null,
      "PaymentTypes": [
        {
          "ID": "gWurF7TC$pQAT4cqT0JokiYMobzQdz",
          "Name": "Cash",
          "IsDefault": false
        },
        {
          "ID": "gWurL7jy84a4BAdqGaTNrtiABiqpM",
          "Name": "Company Paid",
          "IsDefault": false
        },
        {
          "ID": "gWvnH$pTyEPYFerdCk8rjvoSpmM4L0",
          "Name": "Pending Card Transaction",
          "IsDefault": false
        }
      ],
      "Policies": [
        {
          "ID": "gWmINGEAkRfLbo7HmBh5USB3$pS8HMWDoP2Q",
          "Name": "*Global Expense Policy",
          "IsDefault": false,
          "IsInheritable": true,
          "ExpenseTypes": [
            {
              "Code": "LODNG",
              "Name": "Hotel",
              "ExpenseCode": "LODGING"
            }
```

## <a name="getID"></a>Retrieve an expense group configuration by ID

    GET  /api/v3.0/expense/expensegroupconfigurations{id}


### Parameters

Name | Type | Format | Description
-----|------|--------|------------
`id`	|	`string`	|	`path`	|	**Required** The ID of the expense group configuration.
`user`	|	`string`	|	`query`	|	The login ID of the user associated with this expense group configuration. The user must have the Web Services Admin role to use this parameter.



## <a name="schema"></a>Schema


### <a name="ExpenseGroupConfigurations"></a>Expense Group Configurations

Name | Type | Format | Description
-----|------|--------|------------
`id`	|	`string`	|	`path`	|	**Required** The ID of the expense group configuration.
`user`	|	`string`	|	`query`	|	The login ID of the user associated with this expense group configuration. The user must have the Web Services Admin role to use this parameter.


### <a name="expensegroupconfiguration"></a>Expense Group Configuration

Name | Type | Format | Description
-----|------|--------|------------
`AllowUserDigitalTaxInvoice`	|	`Boolean`	|	-	|	Indicates whether users are allowed to upload digital tax invoices. Format: true or false
`AllowUserRegisterYodlee`	|	`Boolean`	|	-	|	Indicates whether users in the expense group are allowed to register Yodlee credit cards. Format: true or false
`AttendeeListFormID`	|	`string`	|	-	|	The unique identifier for the attendee list form.
`AttendeeListFormName`	|	`string`	|	-	|	The name of the attendee list form.
`AttendeeTypes`	|	`array`[AttendeeType]	|	-	|	The list of attendee types.
`CashAdvance`	|	`CashAdvance`	|	-	|	The amount of the cash advance.
`ID`	|	`string`	|	-	|	The unique identifier of the resource.
`Name`	|	`string`	|	-	|	The name of the expense group configuration.
`PaymentTypes`	|	`array`	|	[Payment Type](#paymenttype)	|	The list of payment types.
`Policies`	|	`array`	|	[Policy](#policy)	|	The list of policies and expense types.
`URI`	|	`string`	|	-	|	The URI to the resource.


### <a name="attendeetype"></a>Attendee Type

Name | Type | Format | Description
-----|------|--------|------------
`Code`	|	`string`	|	-	|	The attendee type code.
`Name`	|	`string`	|	-	|	The name of the attendee type.


### <a name="Cash Advance"></a>Cash Advance

Name | Type | Format | Description
-----|------|--------|------------
`AllowUserCarryBalance`	|	`Boolean`	|	-	|	Indicates whether users are allowed to carry a cash advance balance forward from one report to another. Format: true or false
`AllowUserLinkMultiple`	|	`Boolean`	|	-	|	Indicates whether users are allowed to link multiple cash advances to one expense report. Format: true or false
`AllowUserUpdateExchangeRate`	|	`Boolean`	|	-	|	Indicates whether users are allowed to update the currency exchange rate for expense entries. Format: true or false
`Name`	|	`string`	|	-	|	The name of the cash advance workflow.
`WorkflowID`	|	`string`	|	-	|	The unique identifier for the cash advance workflow. Null means there is no such workflow.

### <a name="paymenttype"></a>Payment Type

Name | Type | Format | Description
-----|------|--------|------------
`ID`	|	`string`	|	-	|	The unique identifier of the resource.
`IsDefault`	|	`Boolean`	|	-	|	Determines whether this payment type is the default. Format: true or false
`Name`	|	`string`	|	-	|	The name of the payment type.

### <a name="policy"></a>Policy

Name | Type | Format | Description
-----|------|--------|------------
`ExpenseTypes`	|	`array`	|	[ExpenseType](#expensetype)	|	The parent element for the list of expense types in the policy.
`ID`	|	`string`	|	-	|	The unique identifier of the resource.
`IsDefault`	|	`Boolean`	|	-	|	Indicates whether this policy is the default. Format: true or false
`IsInheritable`	|	`Boolean`	|	-	|	Indicates whether the descendent nodes in the Expense Feature Hierarchy are covered by this policy. Format: true or false
`Name`	|	`string`	|	-	|	The name of the policy.


### <a name="expensetype"></a>Expense Type

Name | Type | Format | Description
-----|------|--------|------------
`Code`	|	`string`	|	-	|	The code for the expense type. Expense types define expenses within an expense category. For example, Business Meal is an expense type in the MEALS category.
`ExpenseCode`	|	`string`	|	-	|	The code for the expense category. The expense category code controls the function of an expense entry. Format: OTHER - Standard, COCARMILE - Company Car, PCARMILE - Personal Car, MFUEL - Fuel For Mileage, LODGING - Lodging, MEALS - Meals, OTHERNP - Other Not Partially Approvable, JPYPTRAN - Japanese Public Transportation
`Name`	|	`string`	|	-	|	The name of the expense type.

###Request URL
```
https://www.concursolutions.com/api/v3.0/expense/expensegroupconfigurations/gWv5bj%24sPY1weV9audTTRp7PkBlea3Y6aizg
```

###JSON example of a successful response
```
{
  "Name": "United Kingdom",
  "AttendeeListFormID": "gWh2aF2cfwJElRBMIJ9ahYnTVXDIp1fQUdg",
  "AttendeeListFormName": "Default Attendee Detail View",
  "AllowUserRegisterYodlee": false,
  "AllowUserDigitalTaxInvoice": false,
  "CashAdvance": null,
  "PaymentTypes": [
    {
      "ID": "gWurF7TC$pQAT4cqT0JokiYMobzQdz",
      "Name": "Cash",
      "IsDefault": false
    },
    {
      "ID": "gWurL7jy84a4BAdqGaTNrtiABiqpM",
      "Name": "Company Paid",
      "IsDefault": false
    },
    {
      "ID": "gWvnH$pTyEPYFerdCk8rjvoSpmM4L0",
      "Name": "Pending Card Transaction",
      "IsDefault": false
    }
  ],
  "Policies": [
    {
      "ID": "gWmINGEAkRfLbo7HmBh5USB3$pS8HMWDoP2Q",
      "Name": "*Global Expense Policy",
      "IsDefault": false,
      "IsInheritable": true,
      "ExpenseTypes": [
        {
          "Code": "LODNG",
          "Name": "Hotel",
          "ExpenseCode": "LODGING"
        },
        {
          "Code": "LODTX",
          "Name": "Hotel Tax",
          "ExpenseCode": "LODGING"
        },
        {
          "Code": "LNDRY",
          "Name": "Laundry",
          "ExpenseCode": "OTHER"
        },
        {
          "Code": "AIRFR",
          "Name": "Airfare",
          "ExpenseCode": "OTHER"
        },
        {
          "Code": "01026",
          "Name": "Airline Fees",
          "ExpenseCode": "OTHER"
        },
        {
          "Code": "CARRT",
          "Name": "Car Rental",
          "ExpenseCode": "OTHER"
        },
        {
          "Code": "CARMI",
          "Name": "Company Car Mileage",
          "ExpenseCode": "COCARMILE"
        },
        {
          "Code": "GASXX",
          "Name": "Fuel",
          "ExpenseCode": "OTHER"
        },
        {
          "Code": "PARKG",
          "Name": "Parking",
          "ExpenseCode": "OTHER"
        },
        {
          "Code": "MILEG",
          "Name": "Personal Car Mileage",
          "ExpenseCode": "PCARMILE"
        },
        {
          "Code": "TRAIN",
          "Name": "Public Transport",
          "ExpenseCode": "OTHER"
        },
        {
          "Code": "TAXIX",
          "Name": "Taxi",
          "ExpenseCode": "OTHER"
        },
        {
          "Code": "TOLLS",
          "Name": "Tolls/Road Charges",
          "ExpenseCode": "OTHER"
        },
        {
          "Code": "01025",
          "Name": "Train",
          "ExpenseCode": "OTHER"
        },
        {
          "Code": "BRKFT",
          "Name": "Breakfast",
          "ExpenseCode": "OTHER"
        },
        {
          "Code": "DINNR",
          "Name": "Dinner",
          "ExpenseCode": "OTHER"
        },
        {
          "Code": "01028",
          "Name": "Individual Meals",
          "ExpenseCode": "OTHER"
        },
        {
          "Code": "LUNCH",
          "Name": "Lunch",
          "ExpenseCode": "OTHER"
        },
        {
          "Code": "BUSML",
          "Name": "Entertainment - Clients",
          "ExpenseCode": "OTHER"
        },
        {
          "Code": "01004",
          "Name": "Entertainment - Staff",
          "ExpenseCode": "OTHER"
        },
        {
          "Code": "01005",
          "Name": "Courier/Shipping/Freight",
          "ExpenseCode": "OTHER"
        },
        {
          "Code": "OFCSP",
          "Name": "Office Equipment/Hardware",
          "ExpenseCode": "OTHER"
        },
        {
          "Code": "01007",
          "Name": "Office Supplies/Software",
          "ExpenseCode": "OTHER"
        },
        {
          "Code": "POSTG",
          "Name": "Postage",
          "ExpenseCode": "OTHER"
        },
        {
          "Code": "01006",
          "Name": "Printing/Photocopying/Stationery",
          "ExpenseCode": "OTHER"
        },
        {
          "Code": "01035",
          "Name": "Business Calls",
          "ExpenseCode": "OTHER"
        },
        {
          "Code": "ONLIN",
          "Name": "Internet/Online Fees",
          "ExpenseCode": "OTHER"
        },
        {
          "Code": "CELPH",
          "Name": "Mobile/Cellular Phone",
          "ExpenseCode": "OTHER"
        },
        {
          "Code": "01036",
          "Name": "Non-Business Calls",
          "ExpenseCode": "OTHER"
        },
        {
          "Code": "LOCPH",
          "Name": "Telephone/Fax",
          "ExpenseCode": "OTHER"
        },
        {
          "Code": "BANKF",
          "Name": "Bank Fees",
          "ExpenseCode": "OTHER"
        },
        {
          "Code": "01024",
          "Name": "Currency Exchange Fees",
          "ExpenseCode": "OTHER"
        },
        {
          "Code": "01011",
          "Name": "Medical Fees",
          "ExpenseCode": "OTHER"
        },
        {
          "Code": "01008",
          "Name": "Passports/Visa Fees",
          "ExpenseCode": "OTHER"
        },
        {
          "Code": "AWRDS",
          "Name": "Gifts - Clients",
          "ExpenseCode": "OTHER"
        },
        {
          "Code": "GIFTS",
          "Name": "Gifts - Staff",
          "ExpenseCode": "OTHER"
        },
        {
          "Code": "TRDSH",
          "Name": "Marketing/Promotional Costs",
          "ExpenseCode": "OTHER"
        },
        {
          "Code": "MISCL",
          "Name": "Miscellaneous",
          "ExpenseCode": "OTHER"
        },
        {
          "Code": "01014",
          "Name": "Newspapers/Magazines/Books",
          "ExpenseCode": "OTHER"
        },
        {
          "Code": "DUESX",
          "Name": "Professional Subscriptions/Dues",
          "ExpenseCode": "OTHER"
        },
        {
          "Code": "SEMNR",
          "Name": "Seminar/Course fees",
          "ExpenseCode": "OTHER"
        },
        {
          "Code": "01009",
          "Name": "Tips/Gratuities",
          "ExpenseCode": "OTHER"
        },
        {
          "Code": "01012",
          "Name": "Tuition/Training Reimbursement",
          "ExpenseCode": "OTHER"
        },
        {
          "Code": "01010",
          "Name": "Ex Pat Expenses",
          "ExpenseCode": "OTHER"
        },
        {
          "Code": "01017",
          "Name": "Relocation Expenses",
          "ExpenseCode": "OTHER"
        },
        {
          "Code": "CSHRN",
          "Name": "Cash Advance Return",
          "ExpenseCode": "OTHERNP"
        },
        {
          "Code": "CURGL",
          "Name": "Currency Gain/Loss",
          "ExpenseCode": "OTHERNP"
        },
        {
          "Code": "01052",
          "Name": "Fixed Vehicle Reimbursement",
          "ExpenseCode": "OTHER"
        },
        {
          "Code": "01053",
          "Name": "Motus Other Amount",
          "ExpenseCode": "OTHER"
        },
        {
          "Code": "01054",
          "Name": "Variable Vehicle Reimbursement",
          "ExpenseCode": "OTHER"
        }
      ]
    },
    {
      "ID": "gWmINGEAkRfGsCKjw8DAec1dbfF$pV$sxbfpw",
      "Name": "Germany Expense Policy",
      "IsDefault": null,
      "IsInheritable": null,
      "ExpenseTypes": [
        {
          "Code": "LODNG",
          "Name": "Hotel",
          "ExpenseCode": "LODGING"
        },
        {
          "Code": "LODTX",
          "Name": "Hotel Tax",
          "ExpenseCode": "LODGING"
        },
        {
          "Code": "LNDRY",
          "Name": "Laundry",
          "ExpenseCode": "OTHER"
        },
        {
          "Code": "AIRFR",
          "Name": "Airfare",
          "ExpenseCode": "OTHER"
        },
        {
          "Code": "01026",
          "Name": "Airline Fees",
          "ExpenseCode": "OTHER"
        },
        {
          "Code": "01002",
          "Name": "Car Maintenance/Repairs ",
          "ExpenseCode": "OTHER"
        },
        {
          "Code": "CARRT",
          "Name": "Car Rental",
          "ExpenseCode": "OTHER"
        },
        {
          "Code": "GASXX",
          "Name": "Fuel",
          "ExpenseCode": "OTHER"
        },
        {
          "Code": "PARKG",
          "Name": "Parking",
          "ExpenseCode": "OTHER"
        },
        {
          "Code": "MILEG",
          "Name": "Personal Car Mileage",
          "ExpenseCode": "PCARMILE"
        },
        {
          "Code": "TRAIN",
          "Name": "Public Transport",
          "ExpenseCode": "OTHER"
        },
        {
          "Code": "TAXIX",
          "Name": "Taxi",
          "ExpenseCode": "OTHER"
        },
        {
          "Code": "TOLLS",
          "Name": "Tolls/Road Charges",
          "ExpenseCode": "OTHER"
        },
        {
          "Code": "01025",
          "Name": "Train",
          "ExpenseCode": "OTHER"
        },
        {
          "Code": "BRKFT",
          "Name": "Breakfast",
          "ExpenseCode": "OTHER"
        },
        {
          "Code": "DINNR",
          "Name": "Dinner",
          "ExpenseCode": "OTHER"
        },
        {
          "Code": "LUNCH",
          "Name": "Lunch",
          "ExpenseCode": "OTHER"
        },
        {
          "Code": "01055",
          "Name": "EBR 1190",
          "ExpenseCode": "OTHER"
        },
        {
          "Code": "01030",
          "Name": "Entertainment - External (Domestic)",
          "ExpenseCode": "OTHER"
        },
        {
          "Code": "01031",
          "Name": "Entertainment - External (Foreign)",
          "ExpenseCode": "OTHER"
        },
        {
          "Code": "01004",
          "Name": "Entertainment - Staff",
          "ExpenseCode": "OTHER"
        },
        {
          "Code": "01005",
          "Name": "Courier/Shipping/Freight",
          "ExpenseCode": "OTHER"
        },
        {
          "Code": "OFCSP",
          "Name": "Office Equipment/Hardware",
          "ExpenseCode": "OTHER"
        },
        {
          "Code": "01007",
          "Name": "Office Supplies/Software",
          "ExpenseCode": "OTHER"
        },
        {
          "Code": "POSTG",
          "Name": "Postage",
          "ExpenseCode": "OTHER"
        },
        {
          "Code": "01006",
          "Name": "Printing/Photocopying/Stationery",
          "ExpenseCode": "OTHER"
        },
        {
          "Code": "01035",
          "Name": "Business Calls",
          "ExpenseCode": "OTHER"
        },
        {
          "Code": "ONLIN",
          "Name": "Internet/Online Fees",
          "ExpenseCode": "OTHER"
        },
        {
          "Code": "CELPH",
          "Name": "Mobile/Cellular Phone",
          "ExpenseCode": "OTHER"
        },
        {
          "Code": "01036",
          "Name": "Non-Business Calls",
          "ExpenseCode": "OTHER"
        },
        {
          "Code": "LOCPH",
          "Name": "Telephone/Fax",
          "ExpenseCode": "OTHER"
        },
        {
          "Code": "BANKF",
          "Name": "Bank Fees",
          "ExpenseCode": "OTHER"
        },
        {
          "Code": "01024",
          "Name": "Currency Exchange Fees",
          "ExpenseCode": "OTHER"
        },
        {
          "Code": "01011",
          "Name": "Medical Fees",
          "ExpenseCode": "OTHER"
        },
        {
          "Code": "01008",
          "Name": "Passports/Visa Fees",
          "ExpenseCode": "OTHER"
        },
        {
          "Code": "01033",
          "Name": "Gifts <= 35€",
          "ExpenseCode": "OTHER"
        },
        {
          "Code": "01032",
          "Name": "Gifts > 35€",
          "ExpenseCode": "OTHER"
        },
        {
          "Code": "TRDSH",
          "Name": "Marketing/Promotional Costs",
          "ExpenseCode": "OTHER"
        },
        {
          "Code": "MISCL",
          "Name": "Miscellaneous",
          "ExpenseCode": "OTHER"
        },
        {
          "Code": "01014",
          "Name": "Newspapers/Magazines/Books",
          "ExpenseCode": "OTHER"
        },
        {
          "Code": "DUESX",
          "Name": "Professional Subscriptions/Dues",
          "ExpenseCode": "OTHER"
        },
        {
          "Code": "SEMNR",
          "Name": "Seminar/Course fees",
          "ExpenseCode": "OTHER"
        },
        {
          "Code": "01009",
          "Name": "Tips/Gratuities",
          "ExpenseCode": "OTHER"
        },
        {
          "Code": "01012",
          "Name": "Tuition/Training Reimbursement",
          "ExpenseCode": "OTHER"
        },
        {
          "Code": "01010",
          "Name": "Ex Pat Expenses",
          "ExpenseCode": "OTHER"
        },
        {
          "Code": "01017",
          "Name": "Relocation Expenses",
          "ExpenseCode": "OTHER"
        },
        {
          "Code": "CSHRN",
          "Name": "Cash Advance Return",
          "ExpenseCode": "OTHERNP"
        },
        {
          "Code": "CURGL",
          "Name": "Currency Gain/Loss",
          "ExpenseCode": "OTHERNP"
        }
      ]
    },
    {
      "ID": "gWmINGEAkQoarrf1JiyI8$sqI$s00T30OfIlA",
      "Name": "Italy Expense Policy",
      "IsDefault": null,
      "IsInheritable": null,
      "ExpenseTypes": [
        {
          "Code": "LODNG",
          "Name": "Hotel",
          "ExpenseCode": "LODGING"
        },
        {
          "Code": "LODTX",
          "Name": "Hotel Tax",
          "ExpenseCode": "LODGING"
        },
        {
          "Code": "LNDRY",
          "Name": "Laundry",
          "ExpenseCode": "OTHER"
        },
        {
          "Code": "AIRFR",
          "Name": "Airfare",
          "ExpenseCode": "OTHER"
        },
        {
          "Code": "01026",
          "Name": "Airline Fees",
          "ExpenseCode": "OTHER"
        },
        {
          "Code": "01002",
          "Name": "Car Maintenance/Repairs ",
          "ExpenseCode": "OTHER"
        },
        {
          "Code": "CARRT",
          "Name": "Car Rental",
          "ExpenseCode": "OTHER"
        },
        {
          "Code": "GASXX",
          "Name": "Fuel",
          "ExpenseCode": "OTHER"
        },
        {
          "Code": "PARKG",
          "Name": "Parking",
          "ExpenseCode": "OTHER"
        },
        {
          "Code": "MILEG",
          "Name": "Personal Car Mileage",
          "ExpenseCode": "PCARMILE"
        },
        {
          "Code": "TRAIN",
          "Name": "Public Transport",
          "ExpenseCode": "OTHER"
        },
        {
          "Code": "TAXIX",
          "Name": "Taxi",
          "ExpenseCode": "OTHER"
        },
        {
          "Code": "TOLLS",
          "Name": "Tolls/Road Charges",
          "ExpenseCode": "OTHER"
        },
        {
          "Code": "01025",
          "Name": "Train",
          "ExpenseCode": "OTHER"
        },
        {
          "Code": "01043",
          "Name": "Alcoholic Beverages & Softs Drinks",
          "ExpenseCode": "MEALS"
        },
        {
          "Code": "BRKFT",
          "Name": "Breakfast",
          "ExpenseCode": "OTHER"
        },
        {
          "Code": "DINNR",
          "Name": "Dinner",
          "ExpenseCode": "OTHER"
        },
        {
          "Code": "01028",
          "Name": "Individual Meals",
          "ExpenseCode": "OTHER"
        },
        {
          "Code": "01044",
          "Name": "Individual Meals - Within Municipality",
          "ExpenseCode": "MEALS"
        },
        {
          "Code": "LUNCH",
          "Name": "Lunch",
          "ExpenseCode": "OTHER"
        },
        {
          "Code": "BUSML",
          "Name": "Entertainment - Clients",
          "ExpenseCode": "OTHER"
        },
        {
          "Code": "01004",
          "Name": "Entertainment - Staff",
          "ExpenseCode": "OTHER"
        },
        {
          "Code": "01005",
          "Name": "Courier/Shipping/Freight",
          "ExpenseCode": "OTHER"
        },
        {
          "Code": "OFCSP",
          "Name": "Office Equipment/Hardware",
          "ExpenseCode": "OTHER"
        },
        {
          "Code": "POSTG",
          "Name": "Postage",
          "ExpenseCode": "OTHER"
        },
        {
          "Code": "01006",
          "Name": "Printing/Photocopying/Stationery",
          "ExpenseCode": "OTHER"
        },
        {
          "Code": "01035",
          "Name": "Business Calls",
          "ExpenseCode": "OTHER"
        },
        {
          "Code": "ONLIN",
          "Name": "Internet/Online Fees",
          "ExpenseCode": "OTHER"
        },
        {
          "Code": "CELPH",
          "Name": "Mobile/Cellular Phone",
          "ExpenseCode": "OTHER"
        },
        {
          "Code": "01036",
          "Name": "Non-Business Calls",
          "ExpenseCode": "OTHER"
        },
        {
          "Code": "LOCPH",
          "Name": "Telephone/Fax",
          "ExpenseCode": "OTHER"
        },
        {
          "Code": "BANKF",
          "Name": "Bank Fees",
          "ExpenseCode": "OTHER"
        },
        {
          "Code": "01024",
          "Name": "Currency Exchange Fees",
          "ExpenseCode": "OTHER"
        },
        {
          "Code": "01008",
          "Name": "Passports/Visa Fees",
          "ExpenseCode": "OTHER"
        },
        {
          "Code": "AWRDS",
          "Name": "Gifts - Clients",
          "ExpenseCode": "OTHER"
        },
        {
          "Code": "GIFTS",
          "Name": "Gifts - Staff",
          "ExpenseCode": "OTHER"
        },
        {
          "Code": "TRDSH",
          "Name": "Marketing/Promotional Costs",
          "ExpenseCode": "OTHER"
        },
        {
          "Code": "01014",
          "Name": "Newspapers/Magazines/Books",
          "ExpenseCode": "OTHER"
        },
        {
          "Code": "DUESX",
          "Name": "Professional Subscriptions/Dues",
          "ExpenseCode": "OTHER"
        },
        {
          "Code": "SEMNR",
          "Name": "Seminar/Course fees",
          "ExpenseCode": "OTHER"
        },
        {
          "Code": "01009",
          "Name": "Tips/Gratuities",
          "ExpenseCode": "OTHER"
        },
        {
          "Code": "01012",
          "Name": "Tuition/Training Reimbursement",
          "ExpenseCode": "OTHER"
        },
        {
          "Code": "01045",
          "Name": "Undocumented Incidentals - Domestic",
          "ExpenseCode": "OTHER"
        },
        {
          "Code": "01046",
          "Name": "Undocumented Incidentals - International",
          "ExpenseCode": "OTHER"
        },
        {
          "Code": "CSHRN",
          "Name": "Cash Advance Return",
          "ExpenseCode": "OTHERNP"
        },
        {
          "Code": "CURGL",
          "Name": "Currency Gain/Loss",
          "ExpenseCode": "OTHERNP"
        }
      ]
    },
    {
      "ID": "gWmINGEAkQoapyOLKfSdm0A9qK0ZVUvwolA",
      "Name": "US Expense Policy",
      "IsDefault": null,
      "IsInheritable": null,
      "ExpenseTypes": [
        {
          "Code": "LODNG",
          "Name": "Hotel",
          "ExpenseCode": "LODGING"
        },
        {
          "Code": "LODTX",
          "Name": "Hotel Tax",
          "ExpenseCode": "LODGING"
        },
        {
          "Code": "INCTS",
          "Name": "Incidentals",
          "ExpenseCode": "OTHER"
        },
        {
          "Code": "LNDRY",
          "Name": "Laundry",
          "ExpenseCode": "OTHER"
        },
        {
          "Code": "01057",
          "Name": "Test4",
          "ExpenseCode": "OTHER"
        },
        {
          "Code": "AIRFR",
          "Name": "Airfare",
          "ExpenseCode": "OTHER"
        },
        {
          "Code": "01026",
          "Name": "Airline Fees",
          "ExpenseCode": "OTHER"
        },
        {
          "Code": "01002",
          "Name": "Car Maintenance/Repairs ",
          "ExpenseCode": "OTHER"
        },
        {
          "Code": "CARRT",
          "Name": "Car Rental",
          "ExpenseCode": "OTHER"
        },
        {
          "Code": "CARMI",
          "Name": "Company Car Mileage",
          "ExpenseCode": "COCARMILE"
        },
        {
          "Code": "GASXX",
          "Name": "Fuel",
          "ExpenseCode": "OTHER"
        },
        {
          "Code": "PARKG",
          "Name": "Parking",
          "ExpenseCode": "OTHER"
        },
        {
          "Code": "MILEG",
          "Name": "Personal Car Mileage",
          "ExpenseCode": "PCARMILE"
        },
        {
          "Code": "TRAIN",
          "Name": "Public Transport",
          "ExpenseCode": "OTHER"
        },
        {
          "Code": "TAXIX",
          "Name": "Taxi",
          "ExpenseCode": "OTHER"
        },
        {
          "Code": "TOLLS",
          "Name": "Tolls/Road Charges",
          "ExpenseCode": "OTHER"
        },
        {
          "Code": "01025",
          "Name": "Train",
          "ExpenseCode": "OTHER"
        },
        {
          "Code": "BRKFT",
          "Name": "Breakfast",
          "ExpenseCode": "OTHER"
        },
        {
          "Code": "01027",
          "Name": "Business Meals (Attendees)",
          "ExpenseCode": "OTHER"
        },
        {
          "Code": "DINNR",
          "Name": "Dinner",
          "ExpenseCode": "OTHER"
        },
        {
          "Code": "LUNCH",
          "Name": "Lunch",
          "ExpenseCode": "OTHER"
        },
        {
          "Code": "BUSML",
          "Name": "Entertainment - Clients",
          "ExpenseCode": "OTHER"
        },
        {
          "Code": "01004",
          "Name": "Entertainment - Staff",
          "ExpenseCode": "OTHER"
        },
        {
          "Code": "01005",
          "Name": "Courier/Shipping/Freight",
          "ExpenseCode": "OTHER"
        },
        {
          "Code": "OFCSP",
          "Name": "Office Equipment/Hardware",
          "ExpenseCode": "OTHER"
        },
        {
          "Code": "01007",
          "Name": "Office Supplies/Software",
          "ExpenseCode": "OTHER"
        },
        {
          "Code": "POSTG",
          "Name": "Postage",
          "ExpenseCode": "OTHER"
        },
        {
          "Code": "01006",
          "Name": "Printing/Photocopying/Stationery",
          "ExpenseCode": "OTHER"
        },
        {
          "Code": "01035",
          "Name": "Business Calls",
          "ExpenseCode": "OTHER"
        },
        {
          "Code": "ONLIN",
          "Name": "Internet/Online Fees",
          "ExpenseCode": "OTHER"
        },
        {
          "Code": "CELPH",
          "Name": "Mobile/Cellular Phone",
          "ExpenseCode": "OTHER"
        },
        {
          "Code": "01036",
          "Name": "Non-Business Calls",
          "ExpenseCode": "OTHER"
        },
        {
          "Code": "LOCPH",
          "Name": "Telephone/Fax",
          "ExpenseCode": "OTHER"
        },
        {
          "Code": "01047",
          "Name": "Agency Booking Fees",
          "ExpenseCode": "OTHER"
        },
        {
          "Code": "BANKF",
          "Name": "Bank Fees",
          "ExpenseCode": "OTHER"
        },
        {
          "Code": "01024",
          "Name": "Currency Exchange Fees",
          "ExpenseCode": "OTHER"
        },
        {
          "Code": "01008",
          "Name": "Passports/Visa Fees",
          "ExpenseCode": "OTHER"
        },
        {
          "Code": "AWRDS",
          "Name": "Gifts - Clients",
          "ExpenseCode": "OTHER"
        },
        {
          "Code": "GIFTS",
          "Name": "Gifts - Staff",
          "ExpenseCode": "OTHER"
        },
        {
          "Code": "TRDSH",
          "Name": "Marketing/Promotional Costs",
          "ExpenseCode": "OTHER"
        },
        {
          "Code": "MISCL",
          "Name": "Miscellaneous",
          "ExpenseCode": "OTHER"
        },
        {
          "Code": "01014",
          "Name": "Newspapers/Magazines/Books",
          "ExpenseCode": "OTHER"
        },
        {
          "Code": "DUESX",
          "Name": "Professional Subscriptions/Dues",
          "ExpenseCode": "OTHER"
        },
        {
          "Code": "SEMNR",
          "Name": "Seminar/Course fees",
          "ExpenseCode": "OTHER"
        },
        {
          "Code": "01038",
          "Name": "Staff Awards/Incentives",
          "ExpenseCode": "OTHER"
        },
        {
          "Code": "01009",
          "Name": "Tips/Gratuities",
          "ExpenseCode": "OTHER"
        },
        {
          "Code": "01012",
          "Name": "Tuition/Training Reimbursement",
          "ExpenseCode": "OTHER"
        },
        {
          "Code": "CSHRN",
          "Name": "Cash Advance Return",
          "ExpenseCode": "OTHERNP"
        },
        {
          "Code": "CURGL",
          "Name": "Currency Gain/Loss",
          "ExpenseCode": "OTHERNP"
        },
        {
          "Code": "01052",
          "Name": "Fixed Vehicle Reimbursement",
          "ExpenseCode": "OTHER"
        },
        {
          "Code": "01053",
          "Name": "Motus Other Amount",
          "ExpenseCode": "OTHER"
        },
        {
          "Code": "01054",
          "Name": "Variable Vehicle Reimbursement",
          "ExpenseCode": "OTHER"
        }
      ]
    }
  ],
  "AttendeeTypes": [
    {
      "Code": "PRIVATE",
      "Name": "Attendee-Private List"
    },
    {
      "Code": "HCOCGDM",
      "Name": "Cegedim HCO Search–OneKey US"
    }
  ],
  "ID": "gWv5bj$sPY1weV9audTTRp7PkBlea3Y6aizg",
  "URI": "https://www.concursolutions.com/api/v3.0/expense/expensegroupconfigurations/gWv5bj$sPY1weV9audTTRp7PkBlea3Y6aizg"
}
```
