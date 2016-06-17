---
title: Expense - Associating External Attendees to Expense Entries
layout: reference  
---


## About this recipe

This recipe prescribes how to associate external attendees to expense entries in Concur Expense. It assumes you are familiar with Concur Expense and the system of record for the external attendees.  It also assumes that you have created a developer sandbox, registered your application, and that you know how to make API calls to the Concur Platform.

## APIs used in this recipe

`Base URL: https://www.concursolutions.com/api/v3.0`

*	/expense/attendees
*	/expense/entryattendeeassociations
*	/expense/attendeetypes

## Context
For certain types of expenses such as entertainment, business meals, and events, the person filing the expense report must identify all the people who participated in the event. In Concur Expense, the participants are called _attendees_.  Often, attendees are tracked and managed in a business system outside of Concur such as a customer-relationship management (CRM) application.  Concur Expense refers to these attendees as _external attendees_.

## Solution summary

To successfully associate attendees to an expense entry, the attendees and the expense entry must already exist in Concur. Associating external attendees to an expense entry consists of these steps:

1. Identifying the expense entry where the attendees should be associated.
2. Determining if Concur Expense has a record of the external attendees.
3. Adding any necessary external attendees.
4. Getting the unique identifier Concur has for each attendee.
5. Associating the Concur attendees to the expense entry.

## Solution details

This section provides details of the Concur API calls you need to make to associate external attendees to expense entries.

To illustrate the solution, Figure 1 depicts the sequence of API calls a fictitious partner application (partner app) makes to the Concur Platform.  This partner app has a collection of external attendees it wants to associate to a specified expense entry.  Each external attendee has a unique identifier assigned by the system of record for the attendees called the **External ID**.

Figure 1: Sequence for Associating Attendees to an Expense Entry

In Figure 1, App refers to a partner application that makes calls to the Concur Platform.  The app has a collection of external attendees it wants to associate to a specified expense entry.  Each external attendee has a unique identifier assigned by the system of record for the attendees called the External ID.

The sequence of events is as follows:

1. The app sets up a loop that processes each attendee.
2. The app searches Concur using the External ID to determine whether it has a record for the external attendee.
3. The search result returns information that indicates whether or not Concur has a record for the attendee.
4. If Concur has it, the app gets the ID Concur assigned to the attendee from the search results.  Skip to Step 7.
5. If Concur doesn’t have it, the app needs to make an API call to the GET /expense/attendeetypes endpoint to obtain the ID for the attendee types.
6. Make an API call to the POST /expense/attendees endpoint to create an attendee in the Concur system. Use the ID value obtained in step 5 for the AttendeeTypeID.
7. Concur responds with the just created attendee’s ID.
8. The app associates the attendee with the expense entry.
9. The loop repeats Step 2 through 7 for each attendee.

The following sections provide the details for each API call.

### 1.	Identify the expense entry

The method for identifying an expense entry depends on whether the expense entry needs to be created or it already exists. Regardless of whether you create a new expense entry or you search for an existing one, you can use the GET Reports API followed by the GET Report Details API to obtain the unique identifier for the expense entry.  
 1. https://developer.concur.com/api-reference/expense/expense-report/reports.html
 2. https://developer.concur.com/api-reference-deprecated/version-two/expense-reports/expense-report-get.html

#### New Expense Entries

When creating a new expense entry, the Concur Platform returns to the developer the unique identifier for the expense entry. In some cases a developer needs to create an expense entry.  For example, in a CRM application there is an object called Sales Call that allows sales professionals to record expenses and contacts involved in a sales call they make for a prospective opportunity.  In this case the developer creates an expense entry in Concur Expense to record the expense in the sales call.  For details on how to create a new expense entry in Concur Expense, see these APIs (recipe coming soon)...  
 1. User to identify the Group value:
   1. https://developer.concur.com/api-reference/user/company-notification-subscription-resource/user.html#getUser
 2. Group Configuration to identify Policy IDs, Payment Type IDs, Expense Type code
   1. https://developer.concur.com/api-reference/expense/expense-report/expense-group-configurations.html
 3. Expense Form to identify the Form Name and Form Code
   1. https://developer.concur.com/api-reference/expense/expense-report/expense-form.html#get
 4. Obtain Form Data for each form you need to post to
   1. https://developer.concur.com/api-reference/expense/expense-report/expense-form.html#get
 5. Obtain Form Field Details to identify the fields and their corresponding attributes
   1.  https://www.concursolutions.com/api/user/v1.0/FormFields
 6. List Items for fields defined as a list
   1. List name: https://developer.concur.com/api-explorer/v3-0/Lists.html
   2. List Items within a desired list: https://developer.concur.com/api-explorer/v3-0/ListItems.html
 7. Now you should have enough informaiton to Post a new report and an entry within the report:
   1. https://developer.concur.com/api-explorer/v3-0/Reports.html
   2. https://developer.concur.com/api-explorer/v3-0/Entries.html



#### Existing Expense Entries

There are cases when the expense entry already exists.  For example, in a CRM application there is an object called an Event that includes contacts, but not expenses.  In this case, the expenses related to events come into Concur Expense as imported credit card charges.  In this situation, you can use the search capabilities in the Expense Report web service to find the relevant expense entry associated to the event. When searching for an existing expense entry the Concur Platform returns to the developer the unique identifier for the expense entry.

### 2.	Determine if Concur has a record of the external attendees

To determine if Concur has a record of external attendees, make a GET HTTPS request to the Attendees resource using the External ID search term for external attendees stored in Concur:

```
GET https://www.concursolutions.com/api/v3.0/expense/attendees?externalid={unique identifier for external attendee) HTTP/1.1
Authorization: OAuth {valid OAuth Access Token goes here}
Content-Type: {application/json or application/xml goes here}
```


Where:

**externalID** is the unique identifier record for the external attendee assigned by the system of record. If the attendee with this external ID exists, the response includes the details about the attendee including its ID.

#### Example

Here’s an example for how to look for the Concur record for an external attendee with an ID of 5575592349 in a business system outside of Concur.

Make a GET HTTP request to the attendees endpoint:

```
GET https://www.concursolutions.com/api/v3.0/expense/attendees
?externalid=5575592349 HTTP/1.1
Authorization: OAuth pBA8nW1qGJcd4AZp9sGxti374Cc=
Content-Type: application/json
```

If Concur has a record of the external attendee, its unique identifier in Concur is returned in the ID element and you can skip to step 4. If Concur does not have a record, the Items element will be empty and you need to add the external attendee in Concur as prescribed in step 3.

A successful response when Concur has a record of the external attendee looks like this:

```
json
{
    "Items":[
        {
            "AttendeeTypeCode":"HCP",
            "AttendeeTypeID":"niJ6GaAD60bAetp3vtK6$sGRgCi1s",
            "FirstName":"Emilie",
            "LastName":"Cass",
            "MiddleInitial":null,
            "Suffix":null,
            " Company":"Life Care Center of Action",
            "Title":"Gynecology and Obstetrics",
            "ExternalID":"5575592349",
            "HasExceptionsPrevYear":false,
            "HasExceptionsYTD":false,
            "Tot alAmountPrevYear":0.00000000,
            "TotalAmountYTD":0.00000000,
            "VersionNumber":1,
            "OwnerName":"System, Concur",
            "OwnerLoginID":"ConcurSystem",
            "CurrencyCode":"USD",
            "Cust om1":null,
            "Custom2":null,
            "Custom3":null,
            "Custom4":null,
            "Custom5":null,
            "Custom6":null,
            "Custom7":null,
            "Custom8":null,
            "Custom9":null,
            "Custom10":null,
            "Custom11":null,
            "Custom12":null,
            "Custom13":null,
            "Custom14":null,
            "Custom15":null,
            "Custom16":null,
            "Custom17":null,
            "Custom18":null,
            "Custom19":null,
            "Custom20":null,
            "Custom21":null,
            "Custom22":null,
            "Custom23":null,
            "Custom24":null,
            "Custom25":null,
            "ID":"nmBwIaoDagUkD8kXZGIl7B170uK9tE6pk",
            "URI":"https://rqa3-cb.concurtech.net/
api/v3.0/expense/attendees/nmBwIaoDagUkD8kXZGIl7B170uK9tE6pk"
        }
    ],
    "NextPage":null
}
```

### 3.	Add external attendees that are missing

If the attendee doesn’t exist in Concur, make a POST request to the Attendees resource to create a new attendee in Concur:

```
POST https://www.concursolutions.com/api/v3.0/expense/attendees HTTP/1.1
Authorization: OAuth {valid OAuth Access Token goes here}
Content-Type: {application/json or application/xml goes here}
```

The request content body includes the details about the attendee. For example:

```
json
{
    "AttendeeTypeID":"ID for the attendee type",
    "FirstName":"Taylor",
    "LastName":"Hernandez",
    "MiddleInitial":"E",
    "Company":"Life Care Center of Action",
    "Title":"Anaesthetics",
    "ExternalID":"6164704601"
}
```

To determine the value you need to enter for the AttendeeTypeID element in the content body of the POST request, make a GET request to the AttendeeTypes resource. For example:

```
GET https://www.concursolutions.com/api/v3.0/expense/attendeetypes HTTP/1.1
Authorization: OAuth pBA8nW1qGJcd4AZp9sGxti374Cc=
Content-Type: application/json
```

In this example, we’re looking for the attendee type ID for Business Guest attendee types. A successful response looks like this:

```
json
{
  "Items": [
    {
      "Name": "Business Guest",
      "Code": "BUSGUEST",
      "AttendeeFormID": "gWgSQwsOy6EcM7sy3esMk25cqEZM9yf9gPg",
      "DuplicateSearchFields": [
        "Title",
        "Company",
        "OwnerEmpName",
        "FirstName",
        "LastName"
      ],
      "ConnectorID": "",
      "AllowManuallyEnteredAttendees": true,
      "AllowAttendeeCountEditing": false,
      "ID": "gWjUHBxUY4iQLA9KTkbtUD6pc",
      "URI": "https://www.concursolutions.com /api/v3.0/expense/attendeetypes/gWjUHBxUY4iQLA9KTkbtUD6pc"
    },
    {
      "Name": "Employee",
      "Code": "EMPLOYEE",
      "AttendeeFormID": "gWgSQwsOy6EcM7sy3esMk25cqEZM9yf9gPg",
      "DuplicateSearchFields": [
        "Title",
        "Company",
        "OwnerEmpName",
        "FirstName",
        "LastName"
      ],
      "ConnectorID": "",
      "AllowManuallyEnteredAttendees": true,
      "AllowAttendeeCountEditing": false,
      "ID": "gWjYs6nUm$ptrgvkjvwYt2B3SN",
      "URI": " https://www.concursolutions.com/api/v3.0/expense/attendeetypes/gWjYs6nUm$ptrgvkjvwYt2B3SN"
    },
  "NextPage": null
}
```

Now we can make our POST request to the /api/v3.0/expense/attendees endpoint:

```
POST https://www.concursolutions.com/api/v3.0/expense/attendees HTTP/1.1
Authorization: OAuth pBA8nW1qGJcd4AZp9sGxti374Cc=
Content-Type: application/json
```

With this request body:

```
json
{
    "AttendeeTypeID":"ID":"gWjUHBxUY4iQLA9KTkbtUD6pc",
    "FirstName":"Taylor",
    "LastName":"Hernandez",
    "MiddleInitial":"E",
    "Company":"Life Care Center of Action",
    "Title":"Anaesthetics",
    "ExternalID":"6164704601"
}
```

A successful response looks like this:

```
json
{
    "ID":"nmBwIaoDagUvXYaxgYZp$pWlPZOvpzUfsM",
    "URI": https://www.concursolutions.com/api/v3.0/expense/attendees
           /nmBwIaoDagUvXYaxgYZp$pWlPZOvpzUfsM
}
```

### 4. Associate attendee to the expense entry

Once you obtain the ID for the attendee, make a POST request to the Entry Attendee Associations resource. To make this call, the user account associated with the OAuth 2.0 access token must have a Concur account with one of these roles: Web Services Administrator for Professional or Can Administer for Standard.

Here’s what the call looks like:

```
json
POST https://www.concursolutions.com/api/v3.0/expense /entryattendeeassociations?user=<URL Encoded Login ID for the Login ID for the owner of the expense entry> HTTP/1.1
Authorization: OAuth {valid OAuth Access Token goes here}
Content-Type: application/json
Accept: application/json
...

{
	"EntryID":"n4MrUpcqIH3ot4bFvFCNXCpk7TJOphLTH",
	"AttendeeID":"nmBwIaoDagUkD8kXZGI l7B170uK9tE6pk"
}
```


In this example, the content body for POST request has an expense entry with the unique identifier `n4MrUpcqIH3ot4bFvFCNXCpk7TJOphLTH` and the attendee with the unique identifier `nmBwIaoDagUkD8kXZGI l7B170uK9tE6pk`.



[1]: https://www.concursolutions.com/api/docs/index.html#!/Entries
[2]: https://www.concursolutions.com/api/docs/index.html#!/Entries/Post_content_user_post_2
