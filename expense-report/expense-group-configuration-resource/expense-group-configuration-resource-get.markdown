
        <div id="main" class="container">
            <div>
                            </div>
            <div class="row">
                <div class="span12">
<div class="breadcrumbs"><a href="/">Home</a>Expense Group Configuration Resource: GET</div>
                </div>
            </div>

            <div id="content-wrapper">
<!-- <div class="row"> -->
                <div id="content" class="span9">
            # Expense Group Configuration Resource: GET
                    <div class="section">
                    <div id="node-473" class="node clear-block">


    
    <div class="content clear-block">
                <style type="text/css">
.overflow_box{
border: 1px solid grey;
padding: .5em;
overflow: auto;
background-color: #DBDBDB;
font-family:"Courier New", Courier, monospace;
font-size:11px;
}
.xml-attribute {color: #009900}
.xml-value {color: #ce7b00}
.ST0 {color: #00007c; font-family: Monospaced; font-weight: bold}
.xml-tag {color: #0000e6}
.STRING_LITERAL {color: #ce7b00}</style>
This resource supports the following GET actions:

    * 
        <a href="#listoflists">Get Expense Group Configuration</a>

## 
    <a id="listoflists" name="listoflists"></a>Get Expense Group Configuration Request
<table border="1" bordercolor="#DBDBDB" cellpadding="3" cellspacing="0" width="100% ">
    <tbody>
        <tr class="GrayTableHead">
            <td>
                Description</td>
            <td>
                Supported Accept Types</td>
        </tr>
        <tr>
            <td>
                Retrieves the list of Expense Polices, Expense Types and Payment Types for the Expense Group the user specified in the <a href="https://developer.concur.com/node/491">OAuth</a> access token is assigned to. Each Expense Policy contains a list of valid Expense Types. The Payment Types are associated with the user's Expense Group and apply to all the returned policies. Only the payment types that are valid for the <a href="https://developer.concur.com/node/481">Post Expense Entry</a> endpoint are returned.
                **NOTE**: The Concur Expense product is highly configurable, and each client may have a unique set of payment types. If a payment type is not included in the response, it is not available for use with this client.
            </td>
            <td>
                
                    * 
                        application/xml
                
            </td>
        </tr>
        <tr class="GrayTableHead">
            <td>
                Query Parameters - Required</td>
            <td>
                Query Parameters - Optional</td>
        </tr>
        <tr>
            <td>
                None</td>
            <td>
                None</td>
        </tr>
        <tr class="GrayTableHead">
            <td>
                Request Headers - Required</td>
            <td>
                Request Headers - Optional</td>
        </tr>
        <tr>
            <td width="50%">
                Authorization header with OAuth token for valid Concur user.</td>
            <td valign="top" width="50%">
                None</td>
        </tr>
    </tbody>
</table>
####
    XML Example Request
<pre class="overflow_box">
GET https://www.concursolutions.com/api/expense/expensereport/v1.1/ExpenseGroupConfiguration/ HTTP/1.1
Authorization: OAuth {access token}
...
</pre>
## 
    Get Expense Group Configuration Response
<table border="1" bordercolor="#DBDBDB" cellpadding="3" cellspacing="0" width="100% ">
    <tbody>
        <tr class="GrayTableHead">
            <td>
                HTTP Responses</td>
            <td>
                Supported Content Types</td>
        </tr>
        <tr>
            <td>
                <a href="https://developer.concur.com/node/205">HTTP Status Codes</a></td>
            <td>
                
                    * 
                        application/xml
                
            </td>
        </tr>
        <tr class="GrayTableHead">
            <td colspan="2">
                Content Body</td>
        </tr>
        <tr>
            <td colspan="2">
                This request will return an **ExpenseGroupConfiguration** parent element. The **ExpenseGroupConfiguration **has a **PaymentTypes** child element and a **PolicyAndExpenseTypesList** child element. The **PaymentTypes** child element has a **PaymentType** child element for each configured payment type. The PaymentType element has the following child elements:
                <table border="1" bordercolor="#DBDBDB" cellpadding="3" cellspacing="0" width="100% ">
                    <tbody>
                        <tr class="GrayTableHead">
                            <td valign="top" width="20%">
                                Element</td>
                            <td valign="top" width="70%">
                                Description</td>
                        </tr>
                        <tr>
                            <td valign="top">
                                PaymentTypeID</td>
                            <td valign="top">
                                The encrypted key for the payment type. This is the unique identifier for the payment type.</td>
                        </tr>
                        <tr>
                            <td valign="top">
                                PaymentTypeName</td>
                            <td valign="top">
                                The name of the payment type.</td>
                        </tr>
                    </tbody>
                </table>
                The **PolicyAndExpenseTypesList **child element will have a **PolicyandExpenseTypes** child element for each policy configured for this expense group. The **PolicyAndExpenseTypes** element has the following child elements:
                <table border="1" bordercolor="#DBDBDB" cellpadding="3" cellspacing="0" width="100% ">
                    <tbody>
                        <tr class="GrayTableHead">
                            <td valign="top" width="20%">
                                Element</td>
                            <td valign="top" width="70%">
                                Description</td>
                        </tr>
                        <tr>
                            <td valign="top">
                                PolicyKey</td>
                            <td valign="top">
                                The ID value of the policy.</td>
                        </tr>
                        <tr>
                            <td valign="top">
                                PolicyName</td>
                            <td valign="top">
                                The name of the policy.</td>
                        </tr>
                        <tr>
                            <td valign="top">
                                ExpenseTypes</td>
                            <td valign="top">
                                The parent element for the list of expense types in the policy. It contains an **ExpenseType** child element for each expense type in the policy. Each ExpenseType element contains the following child elements:
                                <table border="1" bordercolor="#DBDBDB" cellpadding="3" cellspacing="0" width="100% ">
                                    <tbody>
                                        <tr>
                                            <td valign="top">
                                                ExpKey</td>
                                            <td valign="top">
                                                The expense type key.</td>
                                        </tr>
                                        <tr>
                                            <td valign="top">
                                                ExpName</td>
                                            <td valign="top">
                                                The label of the expense type.</td>
                                        </tr>
                                        <tr>
                                            <td valign="top">
                                                ParentExpKey</td>
                                            <td valign="top">
                                                The code of the expense type's parent.</td>
                                        </tr>
                                        <tr>
                                            <td valign="top">
                                                ParentExpName</td>
                                            <td valign="top">
                                                The label of the expense type's parent.</td>
                                        </tr>
                                        <tr>
                                            <td valign="top">
                                                SpendCategory</td>
                                            <td valign="top">
                                                The spend category assigned to the expense type for reporting purposes.</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </td>
        </tr>
    </tbody>
</table>
####
    XML Example of Successful Response
<pre class="overflow_box">
200 OK
Content-Type: application/xml
<ExpenseGroupConfiguration <span class="xml-attribute">xmlns=<span class="xml-value">&quot;<span class="xml-value">http://www.concursolutions.com/api/expense/expensereport/2011/03<span class="xml-value">&quot; <span class="xml-attribute">xmlns:i=<span class="xml-value">&quot;<span class="xml-value">http://www.w3.org/2001/XMLSchema-instance<span class="xml-value">&quot;>
    <PaymentTypes>
        <PaymentType>
            <PaymentTypeID>nr74tQrD8PorkF6yvS0Sm8ZeSGsw</PaymentTypeID>
            <PaymentTypeName>Cash</PaymentTypeName>
        </PaymentType>
        <PaymentType>
            <PaymentTypeID>nr7AuTtrvkXwLOzEejFruFO$sN7eo</PaymentTypeID>
            <PaymentTypeName>Company Paid</PaymentTypeName>
        </PaymentType>
    </PaymentTypes>
    <PolicyAndExpenseTypesList>
        <PolicyAndExpenseTypes>
            <PolicyKey>ndrF8hjzl9FhH1Lvs0EuK1gi7LISbetxc</PolicyKey>
            <PolicyName>CA Expense Policy</PolicyName>
            <ExpenseTypes>
                <ExpenseType>
                    <ExpKey>BUSPR</ExpKey>
                    <ExpName>Promotional Items</ExpName>
                    <ParentExpKey>PROMO</ParentExpKey>
                    <ParentExpName>Business Promotions</ParentExpName>
                </ExpenseType>
                <ExpenseType>
                    <ExpKey>TRDSH</ExpKey>
                    <ExpName>Trade Shows</ExpName>
                    <ParentExpKey>PROMO</ParentExpKey>
                    <ParentExpName>Business Promotions</ParentExpName>
                </ExpenseType>
                <ExpenseType>
                    <ExpKey>LOCPH</ExpKey>
                    <ExpName>Local Phone</ExpName>
                    <ParentExpKey>COMMU</ParentExpKey>
                    <ParentExpName>Communications</ParentExpName>
                </ExpenseType>
            </ExpenseTypes>
        </PolicyAndExpenseTypes>
    </PolicyAndExpenseTypesList>
</ExpenseGroupConfiguration>
</pre>
<br />
