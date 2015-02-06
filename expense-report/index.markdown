---
title: Expense Report Web Service 
layout: conceptual
---





| ----- |
| Description |
| The Concur Expense Report web service allows third-party developers and clients to send and request Expense data for specified users. Developers or clients can also request report data for the entire company. Developers or clients can send expense report information, and can request expense report and card transaction information. Developers or clients can use this data in a variety of ways, including:

* Sending expense information from a third party application to Concur
* Display on a corporate portal site
* Auditing

Developers or clients can also request expense configuration data such as expense types, policies, form types and form fields. They can use this configuration data to post expense report information to Concur.

Expense reports that are created using this web service are always assigned the default policy of the supplied user.

 |
| Works With These Concur Products  |
|

* **Expense** for Concur Professional/Premium
* **Expense** for Concur Standard
 |
| Concur Connect API Structure  |
| Refer to **Web Services > [Core Concepts][1]** for:
* Detailed information regarding the format, structure and process of making calls to a Concur Web Service.
* Information on authentication and authorization for all Concur Web Services.
* Information on registering and enabling partner applications to use Concur Web Services.
 |
| Authentication |
| The Expense Report web service supports the OAuth 2.0 authentication model. This authentication model is covered in detail in** Web Services > [OAuth with Concur][2]**. Any additional required elements for the web service requests are covered in the function documentation.  |
| Product Restrictions |
| Concur products are highly configurable, and not all clients will have access to all features.

Partner developers must determine which configurations are required for their solution prior to the review process. Use the [Developer Forum][3] if you have questions about the configuration settings.

Existing clients can work with Concur Advantage Technical Services to create custom applications that work with their configuration.

 |
| Resources |  Additional Information  |
|

[Company Card Transaction][4]

[Expense Delegator][5]

[Expense Entry][6]

[Expense Entry Attendee][7]

[Expense Entry Itemization][8]

[Expense Form][9]

[Expense Form Field][10]

[Expense Group Configuration][11] (includes Expense Policies, Expense Types and Payment Types)

[Expense Report ][12]

[Expense Report Header][13]

[Integration Status][14]

[Location][15]

 |

Introduction to Expense Reports

Responses and Errors

 |

## Introduction to Expense Reports

Concur Expense allows significant customization of the expense report experience. This flexibility means that developers seeking to work with expense report data must be aware of the following expense report configuration information:

Expense reports are composed of multiple data entry segments called forms. There are several types of forms, and there can be more than one form of each type. Each configured form can have a unique set of form fields included on it.

Form fields may be configured as Required or Optional. Some form fields are required by Concur and must always be provided.

Expense reports must contain a Report Header form and can contain one or more Expense Entry forms. The Expense Entry can also contain child forms for Attendees or Allocations.

Use the [Get Available Form Types][16], [Get Form Data][17] and [Get Form Field Details][18] functions to identify the required data for the forms.

The Expense Report web service uses the following forms:

**Report Header**: The data entry page for the summary level report information.

**Expense Entry**: The data entry page for expenses.

**Attendees**: The data entry page for additional people included in an expense. A business meal with clients is a common expense with attendees. Attendee entries are children of the expense entry.

**Allocations**: The data entry page for dividing the responsibility for an expense. Allocation entries consist of a percentage of the original expense, and the configured custom fields. Allocation entries are children of the expense entry.

Expense types are labels used to classify expenses. A policy is a container for configuration data for a group of employees. It determines which expense types the user sees when entering an expense. Use the [Get Expense Group Configuration][19] function to get the list of expense type values for the selected policy. Expense reports that are created using this web service are always assigned the default policy of the supplied user.

## Responses and Errors

Refer to the [HTTP Codes][20] page for details of the common responses and errors.

**Expense Report Specific Errors:**

| ----- |
|  Error  |  Description |
| Unable to generate default report entry form |  The supplied expense type has a configuration issue. Review your expense type, form, and policy configuration. |

  


[1]: https://developer.concur.com/api-documentation/core-concepts
[2]: https://developer.concur.com/oauth-20
[3]: https://developer.concur.com/forums/concur-connect
[4]: https://developer.concur.com/expense-report/company-card-transaction-resource
[5]: https://developer.concur.com/expense-report/expense-delegator-resource
[6]: https://developer.concur.com/expense-report/expense-entry-resource
[7]: https://developer.concur.com/expense-report/expense-entry-attendee-resource
[8]: https://developer.concur.com/expense-report/expense-entry-itemization-resource
[9]: https://developer.concur.com/expense-report/expense-form-resource
[10]: https://developer.concur.com/expense-report/expense-form-field-resource
[11]: https://developer.concur.com/expense-report/expense-group-configuration-resource
[12]: https://developer.concur.com/expense-report/expense-report-resource
[13]: https://developer.concur.com/expense-report/expense-report-header-resource
[14]: https://developer.concur.com/expense-report/integration-status-resource
[15]: https://developer.concur.com/expense-report/location-resource
[16]: https://developer.concur.com/expense-report/expense-form-resource/expense-form-resource-get
[17]: https://developer.concur.com/node/469#getformdata
[18]: https://developer.concur.com/expense-report/expense-form-field-resource/expense-form-field-resource-get
[19]: https://developer.concur.com/expense-report/expense-group-configuration-resource/expense-group-configuration-resource-get
[20]: https://developer.concur.com/reference/http-codes
