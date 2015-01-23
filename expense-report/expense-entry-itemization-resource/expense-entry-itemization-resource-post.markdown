
        <div id="main" class="container">
            <div>
                            </div>
            <div class="row">
                <div class="span12">
<div class="breadcrumbs"><a href="/">Home</a>Expense Entry Itemization Resource: POST</div>
                </div>
            </div>

            <div id="content-wrapper">
<!-- <div class="row"> -->
                <div id="content" class="span9">
            # Expense Entry Itemization Resource: POST
                    <div class="section">
                    <div id="node-483" class="node clear-block">


    
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
This resource supports the following POST actions:

    * 
        <a href="#newlistitem">Post Expense Entry Itemization </a>

## 
    <a id="newlistitem" name="newlistitem"></a>Post Expense Entry Itemization Request
<table border="1" bordercolor="#DBDBDB" cellpadding="3" cellspacing="0" width="100% ">
    <tbody>
        <tr class="GrayTableHead">
            <td>
                Description</td>
            <td>
                Supported Content Types</td>
        </tr>
        <tr>
            <td>
                Creates or updates an itemization record for the specified expense entry.
                **NOTE**: Posting expense report information is a multi-stage process. Refer to the <a href="https://developer.concur.com/node/465#process">Processes</a> section of the Expense Report Web Service page for the steps required to post new expense reports and entries.
            </td>
            <td>
                
                    * 
                        application/xml
                
            </td>
        </tr>
        <tr class="GrayTableHead">
            <td colspan="2">
                Query Parameters - Required</td>
        </tr>
        <tr>
            <td colspan="2">
                
                    * 
                        **{<em>reportId</em>**}<br />
                        The unique identifier for the expense report.
                    * 
                        **{<em>entryId</em>}/Itemization**<br />
                        The unique identifier for the expense entry and the Attendees keyword.
                
                Example:<br />
                    <span class="codeexample">https://www.concursolutions.com/api/expense/expensereport/v1.1/report/<em>{reportId}</em>/entry/<em>{entryId}</em>/<span class="codeexample">itemization
                **URI Source**: The reportId value is returned by the <a href="https://developer.concur.com/node/487">Get List of Reports</a> function, and as part of the **Report-Details-Url** element of the <a href="https://developer.concur.com/node/485"> Post Expense Report Header</a> function. The entryId value is returned in the **RpeKey** element of the <a href="https://developer.concur.com/node/487#reportdetails">Get Report Details</a> function.
            </td>
        </tr>
        <tr class="GrayTableHead">
            <td colspan="2">
                Query Parameters - Optional</td>
        </tr>
        <tr>
            <td colspan="2">
                
                    * 
                        **{<em>itemizationID</em>}**<br />
                        The unique identifier for the itemization.
                
                Example: https://www.concursolutions.com/api/expense/expensereport/v1.1/report/<em>{reportId}</em>/entry/<em>{entryId}</em>/itemization/<em>{itemizationId}</em>
                **URI Source**: The itemizationId is returned as part of the **Itemization-Url** value returned by this function.
            </td>
        </tr>
        <tr class="GrayTableHead">
            <td>
                Request Headers - Required</td>
            <td>
                Request Headers - Optional</td>
        </tr>
        <tr>
            <td width="50%">
                Authorization header with OAuth token for valid Concur user.<br />
                <br />
                The OAuth Consumer must have one of the following roles to post itemizations for expenses in reports that they do not own: Web Services Admin for Professional, or Can Administer for Standard.</td>
            <td valign="top" width="50%">
                None</td>
        </tr>
        <tr class="GrayTableHead">
            <td colspan="2">
                Content Body</td>
        </tr>
        <tr>
            <td colspan="2">
                This request contains an **ExpenseItemizations** parent element an **Itemization** parent element for each included itemization. The **Itemization** parent element has the following child elements:<br />
                <table border="1" bordercolor="#DBDBDB" cellpadding="3" cellspacing="0" width="100% ">
                    <tbody>
                        <tr class="GrayTableHead">
                            <td valign="top" width="20%">
                                Element</td>
                            <td valign="top" width="20%">
                                Required (must contain value)?</td>
                            <td valign="top" width="70%">
                                Description</td>
                        </tr>
                        <tr>
                            <td valign="top">
                                ExpKey</td>
                            <td valign="top">
                                Y</td>
                            <td valign="top">
                                The expense type key for the expense. Expense Type Keys are returned in the **ExpKey** element by the <a href="https://developer.concur.com/node/473">Get Expense Group Configuration</a> endpoint. The expense type key cannot be modified when updating expense entries.</td>
                        </tr>
                        <tr>
                            <td valign="top">
                                Description</td>
                            <td valign="top">
                                Depends on configuration</td>
                            <td valign="top">
                                The description for the expense.</td>
                        </tr>
                        <tr>
                            <td valign="top">
                                TransactionAmount</td>
                            <td valign="top">
                                Y</td>
                            <td valign="top">
                                The total amount of the itemization in the original currency, with up to three decimal places. Example: 123.654</td>
                        </tr>
                        <tr>
                            <td valign="top">
                                PostedAmount</td>
                            <td valign="top">
                                Depends on configuration</td>
                            <td valign="top">
                                The amount of the itemization in the user's reimbursement currency, with up to three decimal places. Example: 123.654. May vary from transaction amount if some of the expense is marked personal or if it has been converted to another currency. See **Notes** for more information.</td>
                        </tr>
                        <tr>
                            <td valign="top">
                                Custom1 through Custom20</td>
                            <td valign="top">
                                Depends on configuration</td>
                            <td valign="top">
                                The Expense Entry Form custom fields. Itemizations are child entries to the expense entry, and they share the custom fields. May be required depending on configuration. Refer to the <a href="https://developer.concur.com/node/465#process">Processes</a> > **Post Expense Report Data** section of Expense Report for the steps necessary to gather required field information.
                                **<font color="#FF0000">NOTE</font>**<font color="#FF0000">: If any of the custom fields are configured to contain list values, please refer to the <a href="https://developer.concur.com/node/554">Posting Custom List Items</a> page for information on how to correctly submit list item values.</font>
                            </td>
                        </tr>
                        <tr>
                            <td valign="top">
                                IsPersonal</td>
                            <td valign="top">
                                N</td>
                            <td valign="top">
                                Whether the expense entry is a personal expense. Personal expenses are not reimbursed in Concur Expense. Personal expenses cannot be itemized. Format: N</td>
                        </tr>
                        <tr>
                            <td valign="top">
                                Comment</td>
                            <td valign="top">
                                Depends on configuration</td>
                            <td valign="top">
                                The itemization comment.</td>
                        </tr>
                    </tbody>
                </table>
                <span class="codeexample">NOTES:
                
                    * 
                        The update request must include the <span class="codeexample">**ExpKey** and <span class="codeexample">**TransactionAmount** fields. All other fields only need to be included if they were updated.
                    * 
                        Update requests cannot change the **ExpKey** for an existing entry.
                    * 
                        When handling foreign currency transactions, the <span class="codeexample">**CrnCode** and <span class="codeexample">**TransactionAmount** values should indicate the original transaction amount and currency. The <span class="codeexample">**PostedAmount** value should contain the transaction amount converted into the posting currency (the user's reimbursement currency). Concur will calculate the exchange rate for the expense based on these two fields.
                
            </td>
        </tr>
    </tbody>
</table>
####
    XML Example Request
<pre class="overflow_box">
POST https://www.concursolutions.com/api/expense/expensereport/v1.1/report/nxxKgLlnROz$sQ6SKJFjLNs4OWBErcJ8yX/entry/nE0avYnILNNi9qkVyS3lYPuv4Mop4QmVs/Itemization  HTTP/1.1
Authorization: OAuth {access token}
... 

<ExpenseItemizations <span class="xml-attribute">xmlns=<span class="xml-value">&quot;<span class="xml-value">http://www.concursolutions.com/api/expense/expensereport/2011/03<span class="xml-value">&quot;>
    <Itemization>
        <ExpKey>DINNR</ExpKey>
        <Description>Dinner</Description>
        <TransactionAmount>56.00</TransactionAmount>
        <PostedAmount>56.00</PostedAmount>
        <Comment>Dinner</Comment>
        <Custom1>Dinner</Custom1>
        <Custom2>Room Service</Custom2>
        <Custom5>Too late for restaurant</Custom5>
        <IsPersonal>N</IsPersonal>
    </Itemization>
    <Itemization>
        <ExpKey>LUNCH</ExpKey>
        <Description>Lunch</Description>
        <TransactionAmount>24.64</TransactionAmount>
        <PostedAmount>24.64</PostedAmount>
        <Comment>Lunch</Comment>
        <IsPersonal>N</IsPersonal>
    </Itemization>
    <Itemization>
        <ExpKey>BRKFT</ExpKey>
        <Description>BreakFast</Description>
        <TransactionAmount>15.34</TransactionAmount>
        <PostedAmount>15.34</PostedAmount>
        <Comment>Breakfast</Comment>
        <IsPersonal>N</IsPersonal>
    </Itemization>
</ExpenseItemizations>
</pre>
## 
    Post Expense Entry Itemization Response
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
                This request will return an **ItemizationStatusList** parent element with an **ItemizationStatus** child element for each posted itemization. The **ItemizationStatus** element will contain the following child elements:
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
                                Index</td>
                            <td valign="top">
                                The entry's sequence in the request.</td>
                        </tr>
                        <tr>
                            <td valign="top">
                                Status</td>
                            <td valign="top">
                                The status of the request. Possible values are:
                                
                                    * 
                                        200: The itemization was successfully saved.
                                    * 
                                        400: The Request includes an error such as a syntax error or missing required element.
                                    * 
                                        404: The Itemization URI is in the correct syntax, but the system can't find the itemization. It may have been deleted from the system.
                                    * 
                                        500: The request has the correct syntax and refers to an existing itemization, but the system was unable to save due to a system conflict.
                                
                            </td>
                        </tr>
                        <tr>
                            <td valign="top">
                                Itemization-Url</td>
                            <td valign="top">
                                The URI to get the itemization details.</td>
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
<ItemizationStatusList <span class="xml-attribute">xmlns=<span class="xml-value">&quot;<span class="xml-value">http://www.concursolutions.com/api/expense/expensereport/2011/03<span class="xml-value">&quot; <span class="xml-attribute">xmlns:i=<span class="xml-value">&quot;<span class="xml-value">http://www.w3.org/2001/XMLSchema-instance<span class="xml-value">&quot;>
    <ItemizationStatus>
        <Index>1</Index>
        <Status>SUCCESS</Status>
        <ItemizedEntry-Details-Url>https://www.concursolutions.com/api/expense/expensereport/v1.1/report/nxxKgLlnROz3zHJBCRk$puJLmXp25RsAwp/entry/nE0avYnILNNi9qkVyS3lYPuv4Mop4QmVs/itemization/nE0avYnILN69JgpJGuSCy5qqirEfFcds4</ItemizedEntry-Details-Url>
    </ItemizationStatus>
    <ItemizationStatus>
        <Index>2</Index>
        <Status>SUCCESS</Status>
        <ItemizedEntry-Details-Url>https://www.concursolutions.com/api/expense/expensereport/v1.1/report/nxxKgLlnROz3zHJBCRk$puJLmXp25RsAwp/entry/nE0avYnILNNi9qkVyS3lYPuv4Mop4QmVs/itemization/nE0avYnILN65lGE4Zka1YOp608re6ASJb</ItemizedEntry-Details-Url>
    </ItemizationStatus>
    <ItemizationStatus>
        <Index>3</Index>
        <Status>SUCCESS</Status>
        <ItemizedEntry-Details-Url>https://www.concursolutions.com/api/expense/expensereport/v1.1/report/nxxKgLlnROz3zHJBCRk$puJLmXp25RsAwp/entry/nE0avYnILNNi9qkVyS3lYPuv4Mop4QmVs/itemization/nE0avYnILN6nw6Hi0jhAuYXAXiXNej7zb</ItemizedEntry-Details-Url>
    </ItemizationStatus>
</ItemizationStatusList> 
</pre>
<br />
