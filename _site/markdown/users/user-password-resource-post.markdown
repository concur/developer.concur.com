[Source](https://developer.concur.com/users/user-password-resource/user-password-resource-post "Permalink to User Password Resource: POST | Developer Portal")

# User Password Resource: POST | Developer Portal

This resource supports the following POST actions:

##  Post User Password Update Request

| ----- |
|  Description |  Supported Content Types |
|  Updates passwords for up to 500 users. |   |
|  Query Parameters - Required |  Query Parameters - Optional |
|  None |  None |
|  Request Headers - Required |  Request Headers - Optional |
|  Authorization header with OAuth token for valid Concur user. The OAuth consumer must have one of the following user roles in Concur:

Professional:

* Employee Administrator
* User Administrator
* Password Manager
* Web Services Administrator

Standard or Developer Sandbox:

* Can Administer
* Can Administer Expense and Travel
 |  None |
|  Content Body |   |
|  This function requires as its arguments a **UserBatch** element containing a **User** child element for each user. The **User** element must have the following elements:  

|  Element |  Required (must contain value)? |  Description |
|  LoginID |  Y |  The user's logon ID. The default value is the user's email address. |   |
|  Password |  Y |  The user's new password.  
**NOTE**: This information is encrypted in the Concur database. |

 |

####  XML Example Request

    POST /api/user/v1.0/Users/password HTTPS 1.1
    Host: www.concursolutions.com
    Authorization: OAuth {access token}
    Content-Type: application/xml
    ...

    <UserBatch xmlns="http://www.concursolutions.com/api/user/2011/02">
        <User>
            <LoginID>tb@example.com</LoginID>
            <Password>1234password!</Password>
        </User>
        <User>
            <LoginID>cm@example.com</LoginID>
            <Password>1234password!</Password>
        </User>
    </UserBatch>

##  Post User Password Update Response

| ----- |
|  HTTP Responses |  Supported Content Types |
|

[HTTP Status Codes][1]

[User Errors ][2]

 |   |
|  Content Body |   |
|  This request will return a **BatchResult** parent element with the following child elements:  

|  Element |  Description |
|  RecordsSucceeded |  The number of records processed that were successfully updated. |   |
|  RecordsFailed |  The number of records processed that were not successfully updated. |
|  UserPasswordStatusList |  This  parent element will contains a **UserPasswordStatus** element for each user. The **UserPasswordStatus** element contains the following child elements:

|  LoginID |  The login ID of the user. |
|  Status |  The status of the attempt to update the user's password. Format: Success, Failed. |   | |
|  Message |  Additional details about the success or failure of the request. |

 |

 |

####  XML Example Response with Success and Failure

    <BatchResult xmlns="http://www.concursolutions.com/api/user/2011/02" xmlns:i="http://www.w3.org/2001/XMLSchema-instance">
        <RecordsSucceeded>1</RecordsSucceeded>
        <RecordsFailed>1</RecordsFailed>
        <UserPasswordStatusList>
            <UserPasswordStatus>
                <LoginID>tb@example.com</LoginID>
                <Status>Success</Status>
                <Message>Password Updated.</Message>
            </UserPasswordStatus>
            <UserPasswordStatus>
                <LoginID>cm@example.com</LoginID>
                <Status>Failed</Status>
                <Message>This employee doesn't have an Employee ID. To update the password, the user must have an Employee ID.</Message>
            </UserPasswordStatus>
    </BatchResult>

  
Last Modified: 10/31/2013 12:59 PM PDT

[1]: https://developer.concur.com/node/205
[2]: https://developer.concur.com/node/401#usererrors
