---
title: Users 
layout: conceptual
---





| ----- |
|  Description |
|  The User web service allows third-party developers or clients to add, update or inactivate Concur users at any time of day. This web service provides access to the fields on the Employee Profile form.

The User web service provides a similar level of functionality to the [User Import][1] spreadsheet, with the convenience of a web service. The User web service is not intended to be a replacement for the [Employee Import][2].

The Travel Profile information can be viewed using the [Travel Profile][3] web service. Travel Suppliers can update the loyalty program information only.

 |
|  Works With These Concur Products |
|

* **Expense** for Concur Professional/Premium
* **Expense** for Concur Standard
* **Invoice** for Concur Professional/Premium
* **Invoice** for Concur Standard
* **Travel Request** for Concur Professional/Premium
 |
|  Concur Connect API Structure |
|

Refer to **Web Services > [Core Concepts][4]** for:
* Detailed information regarding the format, structure and process of making calls to a Concur Web Service.
* Information on authentication and authorization for all Concur Web Services.
* Information on registering and enabling partner applications to use Concur Web Services.
 |
|  Product Restrictions |
|  Concur products are highly configurable, and not all clients will have access to all features.

Partner developers must determine which configurations are required for their solution prior to the application review process. Use the [Developer Forum][5] if you have questions about the configuration settings.

Existing clients can work with Concur Advantage Technical Services to create custom applications that work with their configuration.

 |
|  Resources |  Additional Information |
|

[User][6]

[User Password][7]

[Employee Form Field][8]

 |

Responses and Errors

 |

##  Responses and Errors

Refer to the [HTTP Codes][9] page for details of the common responses and errors.

**User Errors **

The web service will not return a 4xx HTTP response code for a batch operation even when every item in the batch failed to be created or updated. The client must inspect the response to look for warnings or errors with individual batch items.

When there are errors with batch items, the first ten errors are returned in the <errors> element in the request response, which includes their error code, the item that caused the error, and the error message. Any additional error messages are truncated. This prevents a large volume of error data in the event of a formatting mistake.

**Error Messages**

| ----- |
|  Message |  Description |
|  Maximum User Records per Batch Exceeded |  The batch request contains over 500 records. |
|  Missing Required Parameters |  This message will be returned if:

* Fields that are required are missing.
 |
|  The Request XML is invalid |  The request XML is not properly formatted. |
|  User Creation Failed |  The user creation process failed to complete. |
|  Invalid Input: _elementname _ |  The value for the specified element is invalid. |
|  Form Fields are Invalid or Empty |  One or more of the Employee form fields are invalid or empty. |
|  Unknown Error |  The web service encountered an unknown error while processing the request. Try again later. |

Return to Top

  


[1]: http://www.concurtraining.com/customers/tech_pubs/Docs/_Current/UG_Shr/Shr_UG_User_Import.pdf
[2]: http://www.concurtraining.com/customers/tech_pubs/Docs/_Current/SPECS/Spc_Exp/ExpIESpc_Chp_4_Emp_Imp.pdf
[3]: https://developer.concur.com/travel-profile
[4]: https://developer.concur.com/api-documentation/core-concepts
[5]: https://developer.concur.com/forums/concur-connect
[6]: https://developer.concur.com/users/users-resource
[7]: https://developer.concur.com/users/user-password-resource
[8]: https://developer.concur.com/users/employee-form-field-resource
[9]: https://developer.concur.com/reference/http-codes
