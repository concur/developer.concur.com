---
title: Connection Requests
layout: reference
reference-type: swagger
---
##Connection Requests

###GET Common Connection Requests
This endpoint allows users to GET all connection requests that match the TriLink supplier ID.

####Parameters 
Parameters | Value | Description | Parameter Type | Data Type
---------- | ----- | ----------- | -------------- | ---------
offset | | The starting point of the next set of results, after the limit specified in the limit field has been reached. The default is the beginning of the page. | query | string
limit | | The number of records to return. The default is 5 and the maximum is 10. | query | string
Status | | The status code representing the state of the connection request. The possible values are Pending, Processing, Connected, Failed, and Retry. | query | string

####Request URL
```
https://www.concursolutions.com/api/v3.0/common/connectionrequests?limit=10&status=Connected
```

####XML Example of a successful response
```
Placeholder
```

###POST Common Connection Requests
This endpoint allows users to create a connection request on the on behalf of the specified user.

####Parameters 
Parameters | Value | Description | Parameter Type | Data Type
---------- | ----- | ----------- | -------------- | ---------
user | | The login ID of the user for whom to create the connection request. The user must have the Web Services Admin role to use this parameter. | query | string

####Request URL
```
https://www.concursolutions.com/api/v3.0/common/connectionrequests?user=<Web Services Admin Login>
```

####XML Example of successful response
```
Placeholder
```

###DELETE Common Connection Requests by ID
This endpoint allows users to delete connection requests by ID.

####Parameters 
Parameters | Value | Description | Parameter Type | Data Type
---------- | ----- | ----------- | -------------- | ---------
id |**Required** | The conection request ID. | path | string

####Request URL
```
https://www.concursolutions.com/api/v3.0/common/connectionrequests/<connection_request_id>
```

####XML Example of successful response
```
Placeholder
```

###GET Common Connection Requests By ID
This endpoint allows a user to GET a common connection request by ID.

####Parameters 
Parameters | Value | Description | Parameter Type | Data Type
---------- | ----- | ----------- | -------------- | ---------
id |**Required** | The conection request ID. | path | string

####Request URL
```
https://www.concursolutions.com/api/v3.0/common/connectionrequests/<connection_request_id>
```

####XML Example of successful response
```
Placeholder
```

###PUT Common Connection Requests by ID
This endpoint allows a user to update the specified connection request. Only the fields provided in the supplied object are updated. Missing fields will not be altered.

####Parameters 
Parameters | Value | Description | Parameter Type | Data Type
---------- | ----- | ----------- | -------------- | ---------
id | **Required** | The connection request ID | path | string
content | **Required** | The connection request object to update | body | Model Schema - Click to set as parameter value

####Request URL
```
https://www.concursolutions.com/api/v3.0/common/connectionrequests/<connection_request_id>
```

####XML Example of successful response
```
Placeholder
```
```

{% swagger /api-explorer/v3-0/ConnectionRequests.swagger2.json %}
