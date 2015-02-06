---
title: Attendee Web Service
layout: default
---


# Attendee Web Service



##Description


The Attendee Web service allows developers to manage attendees in Concur. The Attendee resource can be used to retrieve attendee information for private or shared attendees. In future releases, the Attendee resource will be updated with additional functionality for managing all attendees in Concur.

The Attendee List resource manages attendees in batches, and can be used to add, update or inactivate attendees. This resource provides functionality similar to the Attendee List Import in Concur. Attendees added using this resource are added to the Shared Attendee List (owned by the system and available to all users).

##Works With These Concur Products 


* **Expense** for Concur Professional/Premium


##Product Restrictions
Concur products are highly configurable, and not all clients will have access to all features.

Partner developers must determine which configurations are required for their solution prior to the review process. Use the [Developer Forum][2] if you have questions about the configuration settings.

Existing clients can work with Concur Advantage Technical Services to create custom applications that work with their configuration.

##Resources


[Attendee][3]

[Attendee List][4]

[Attendee Type][5]


###Additional Information
Responses and Errors



##  Responses and Errors

Refer to the [HTTP Codes][6] page for details of the common responses and errors.

####  Attendee List Errors

The web service will not return a 4xx HTTP response code for a batch operation even when every item in the batch failed to be created or updated. The client must inspect the response to look for warnings or errors with individual batch items.

When there are errors with batch items, the first ten errors are returned in the <errors> element in the request response, which includes their error code, the item that caused the error, and the error message. Any additional error messages are truncated. This prevents a large volume of error data in the event of a formatting mistake.

  
**XML Response Error Codes**:


|  Error Code |  Message |
|--------|----------------------------------------|
|  1101 |  Could not find attendee-batch element. |
|  1102 |  Error parsing attendee record X |
|  1201 |  Missing external id for attendee record X |
|  1202 |  Missing attendee type |
|  1203 |  Missing currency code |
|  1204 |  External id too long |
|  1205 |  Attendee type too long |
|  1206 |  Invalid inactive value. |
|  1207 |  Attendee of type NOSHOWS ignored. |
|  1208 |  Invalid currency code |
|  1209 |  Missing required field X |
|  1210 |  Invalid time stamp for field X |
|  1211 |  Invalid money or money value for field X |
|  1212 |  Invalid money or numeric value for field X |
|  1213 |  Invalid integer for field X |
|  1214 |  Invalid boolean value for field X |
|  1215 |  Invalid char value for field X |
|  1216 |  Invalid varchar value for field X |
|  1217 |  Value too long for field X |
|  1218 |  Invalid attendee type |
|  1219 |  More than one value was specified for the X field in record X |
|  1221 |  Invalid code for field X |
|  1222 |  Missing code for field X |
|  1301 |  Unexpected error creating attendee |
|  1302 |  Unexpected error updating attendee |
|  1303 |  Unexpected error getting attendee type list |
|  1304 |  Unexpected error processing batch request. |
|  1305 |  Cannot update the attendee data for a non existing attendee. |

  

[1]: https://developer.concur.com/node/25
[2]: https://developer.concur.com/forums/concur-connect
[3]: https://developer.concur.com/node/593
[4]: https://developer.concur.com/node/590
[5]: https://developer.concur.com/node/375
[6]: https://developer.concur.com/node/205
