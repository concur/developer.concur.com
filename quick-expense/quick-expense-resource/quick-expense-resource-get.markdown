
        <div id="main" class="container">
            <div>
                            </div>
            <div class="row">
                <div class="span12">
<div class="breadcrumbs"><a href="/">Home</a>Quick Expense Resource: GET</div>
                </div>
            </div>

            <div id="content-wrapper">
<!-- <div class="row"> -->
                <div id="content" class="span9">
            # Quick Expense Resource: GET
                    <div class="section">
                    <div id="node-508" class="node clear-block">


    
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
**NOTE**: Documentation for the v3.0 resource is <a href="https://www.concursolutions.com/api/docs/index.html#!/QuickExpenses">here</a>.

    * 
        <a href="#listofqe">Get List of Quick Expenses </a>

## 
    <a id="listofqe" name="listofqe"></a>Get List of Quick Expenses Request
<table border="1" bordercolor="#dbdbdb" cellpadding="3" cellspacing="0" width="100%">
    <tbody>
        <tr class="GrayTableHead">
            <td>
                Description</td>
            <td>
                Supported Accept Types</td>
        </tr>
        <tr>
            <td>
                Retrieves the list of quick expenses for the supplied user or for the entire company. In order to view the company-wide expense list, the OAuth Consumer must have the Web Services Admin (Professional) or Can Administer (Standard) user role.</td>
            <td>
                
                    * 
                        application/xml
                    * 
                        application/json
                
            </td>
        </tr>
        <tr class="GrayTableHead">
            <td>
                Query Parameters - Required</td>
            <td>
                Query Parameters - Optional</td>
        </tr>
        <tr>
            <td valign="top">
                None</td>
            <td>
                
                    * 
                        **loginID={<em>loginID</em>}**<br />
                        The Concur login for the user that owns the quick expenses.
                
                Example:
                https://www.concursolutions.com/api/expense/expensereport/v1.0/quickexpense/?loginID={<em>loginID</em>}
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
                **Authorization** header with OAuth token for valid Concur user.<br />
                <br />
                To view company-wide data, the OAuth consumer must have one of the following user roles in Concur: Company Administrator or Web Services Administrator for Professional, or Can Administer for Standard.</td>
            <td valign="top" width="50%">
                **Accept** header specifying which format the response should be in. Possible values are:
                
                    * 
                        application/xml
                    * 
                        application/json
                
            </td>
        </tr>
    </tbody>
</table>
####
    XML Example Request with LoginID
<pre class="overflow_box">
GET api/expense/expensereport/v1.0/quickexpense/?loginID=cm%40example.com HTTPS 1.1
Host: www.concursolutions.com
Authorization: OAuth {access token}
...
</pre>
####
    JSON Example Request
<pre class="overflow_box">
GET https:<span class="LINE_COMMENT">//<span class="LINE_COMMENT">www<span class="LINE_COMMENT">.<span class="LINE_COMMENT">concursolutions<span class="LINE_COMMENT">.<span class="LINE_COMMENT">com<span class="LINE_COMMENT">/<span class="LINE_COMMENT">api<span class="LINE_COMMENT">/<span class="LINE_COMMENT">expense<span class="LINE_COMMENT">/<span class="LINE_COMMENT">expensereport<span class="LINE_COMMENT">/<span class="LINE_COMMENT">v1<span class="LINE_COMMENT">.<span class="LINE_COMMENT">0/<span class="LINE_COMMENT">quickexpense  <span class="LINE_COMMENT">HTTP<span class="LINE_COMMENT"> 1<span class="LINE_COMMENT">.<span class="LINE_COMMENT">1
Authorization: OAuth {access token}
Accept: application/json
</pre>
## 
    Get List of Quick Expenses Response
<table border="1" bordercolor="#dbdbdb" cellpadding="3" cellspacing="0" width="100%">
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
                    * 
                        application/json
                
            </td>
        </tr>
        <tr class="GrayTableHead">
            <td colspan="2">
                Content Body</td>
        </tr>
        <tr>
            <td colspan="2">
                This request will return a **QuickExpensesList** parent element with a **QuickExpense** child element for each quick expense. The **QuickExpense** elements will have the following child elements:<br />
                <table border="1" bordercolor="#dbdbdb" cellpadding="3" cellspacing="0" width="100%">
                    <tbody>
                        <tr class="GrayTableHead">
                            <td valign="top" width="20%">
                                Element</td>
                            <td valign="top" width="70%">
                                Description</td>
                        </tr>
                        <tr>
                            <td valign="top">
                                OwnerLoginID</td>
                            <td valign="top">
                                The Concur login ID for the expense owner. Useful for system to system integration when there are expenses for multiple users.</td>
                        </tr>
                        <tr>
                            <td valign="top">
                                OwnerName</td>
                            <td valign="top">
                                The first and last name for the expense owner. Useful for system to system integration when there are expenses for multiple users.</td>
                        </tr>
                        <tr>
                            <td valign="top">
                                QuickExpenseKey</td>
                            <td valign="top">
                                The unique identifier for the quick expense.</td>
                        </tr>
                        <tr>
                            <td valign="top">
                                ExpenseTypeKey</td>
                            <td valign="top">
                                The unique identifier for the expense type associated with the quick expense.</td>
                        </tr>
                        <tr>
                            <td valign="top">
                                ExpenseTypeName</td>
                            <td valign="top">
                                The name of the expense type associated with the quick expense.</td>
                        </tr>
                        <tr>
                            <td valign="top">
                                TransactionDate</td>
                            <td valign="top">
                                The date the expense was incurred. Format: YYYY-MM-DD</td>
                        </tr>
                        <tr>
                            <td valign="top">
                                TransactionAmount</td>
                            <td valign="top">
                                The total amount of the expense in the original currency, with up to three decimal places. Example: 123.654</td>
                        </tr>
                        <tr>
                            <td valign="top">
                                CurrencyCode</td>
                            <td valign="top">
                                The <a href="http://en.wikipedia.org/wiki/ISO_4217">3-letter ISO 4217 currency code </a>for the expense transaction amount. Example: USD.</td>
                        </tr>
                        <tr>
                            <td valign="top">
                                LocationName</td>
                            <td valign="top">
                                The name of the location where the expense was incurred.</td>
                        </tr>
                        <tr>
                            <td valign="top">
                                VendorDescription</td>
                            <td valign="top">
                                This element contains the descriptive text for the vendor for the expense.</td>
                        </tr>
                        <tr>
                            <td valign="top">
                                Comment</td>
                            <td valign="top">
                                The comment for this expense.</td>
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
<QuickExpensesList>
    <QuickExpense>
        <OwnerLoginID>cm@example.com</OwnerLoginID>
        <OwnerName>Chris Miller</OwnerName>
        <QuickExpenseKey>1234567890</QuickExpenseKey>
        <ExpenseTypeKey>CARRT</ExpenseTypeKey>
        <ExpenseTypeName>Car Rental</ExpenseTypeName>
        <TransactionDate>2012-07-21</TransactionDate>
        <TransactionAmount>321.45</TransactionAmount>
        <CurrencyCode>USD</CurrencyCode>
        <LocationName>Seattle, Washington</LocationName>
        <VendorDescription>Avis</VendorDescription>
        <Comment>Trip to Seattle</Comment>
    </QuickExpense>
    <QuickExpense>
        <OwnerLoginID>cm@example.com</OwnerLoginID>
        <OwnerName>Chris Miller</OwnerName>
        <QuickExpenseKey>0987654321</QuickExpenseKey>
        <ExpenseTypeKey>MEAL910</ExpenseTypeKey>
        <ExpenseTypeName>Breakfast</ExpenseTypeName>
        <TransactionDate>2012-07-21</TransactionDate>
        <TransactionAmount>14.23</TransactionAmount>
        <CurrencyCode>USD</CurrencyCode>
        <LocationName>Seattle, Washington</LocationName>
        <VendorDescription>Starbucks</VendorDescription>
        <Comment>Trip to Seattle</Comment>
    </QuickExpense>
</QuickExpensesList>
</pre>
####
    JSON Example of Successful Response
<pre class="overflow_box">
[
    {
        <span class="STRING_LITERAL">&quot;<span class="STRING_LITERAL">OwnerLoginID<span class="STRING_LITERAL">&quot;:<span class="STRING_LITERAL">&quot;<span class="STRING_LITERAL">cm@example.com<span class="STRING_LITERAL">&quot;,
        <span class="STRING_LITERAL">&quot;<span class="STRING_LITERAL">OwnerName<span class="STRING_LITERAL">&quot;:<span class="STRING_LITERAL">&quot;<span class="STRING_LITERAL">Chris Miller<span class="STRING_LITERAL">&quot;,
        <span class="STRING_LITERAL">&quot;<span class="STRING_LITERAL">QuickExpenseKey<span class="STRING_LITERAL">&quot;:<span class="STRING_LITERAL">&quot;<span class="STRING_LITERAL">nuIsue2$pASZDo12345678oUuUh9Lb0<span class="STRING_LITERAL">&quot;,
        <span class="STRING_LITERAL">&quot;<span class="STRING_LITERAL">ExpenseTypeKey<span class="STRING_LITERAL">&quot;:<span class="STRING_LITERAL">&quot;<span class="STRING_LITERAL">CARRT<span class="STRING_LITERAL">&quot;,
        <span class="STRING_LITERAL">&quot;<span class="STRING_LITERAL">ExpenseTypeName<span class="STRING_LITERAL">&quot;:<span class="STRING_LITERAL">&quot;<span class="STRING_LITERAL">Car Rental<span class="STRING_LITERAL">&quot;,
        <span class="STRING_LITERAL">&quot;<span class="STRING_LITERAL">TransactionDate<span class="STRING_LITERAL">&quot;:<span class="STRING_LITERAL">&quot;<span class="STRING_LITERAL">2012-07-21<span class="STRING_LITERAL">&quot;,
        <span class="STRING_LITERAL">&quot;<span class="STRING_LITERAL">TransactionAmount<span class="STRING_LITERAL">&quot;:321.45000000,
        <span class="STRING_LITERAL">&quot;<span class="STRING_LITERAL">CurrencyCode<span class="STRING_LITERAL">&quot;:<span class="STRING_LITERAL">&quot;<span class="STRING_LITERAL">USD<span class="STRING_LITERAL">&quot;,
        <span class="STRING_LITERAL">&quot;<span class="STRING_LITERAL">LocationName<span class="STRING_LITERAL">&quot;:<span class="STRING_LITERAL">&quot;<span class="STRING_LITERAL">Seattle, Washington<span class="STRING_LITERAL">&quot;,
        <span class="STRING_LITERAL">&quot;<span class="STRING_LITERAL">VendorDescription<span class="STRING_LITERAL">&quot;:<span class="STRING_LITERAL">&quot;<span class="STRING_LITERAL">Avis<span class="STRING_LITERAL">&quot;,
        <span class="STRING_LITERAL">&quot;<span class="STRING_LITERAL">Comment<span class="STRING_LITERAL">&quot;:<span class="STRING_LITERAL">&quot;<span class="STRING_LITERAL">Trip to Seattle<span class="STRING_LITERAL">&quot;,
    }
]
</pre>
<br />
