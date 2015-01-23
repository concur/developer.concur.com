
        <div id="main" class="container">
            <div>
                            </div>
            <div class="row">
                <div class="span12">
<div class="breadcrumbs"><a href="/">Home</a>Quick Expense Resource: POST</div>
                </div>
            </div>

            <div id="content-wrapper">
<!-- <div class="row"> -->
                <div id="content" class="span9">
            # Quick Expense Resource: POST
                    <div class="section">
                    <div id="node-509" class="node clear-block">


    
    <div class="content clear-block">
                <style type="text/css">
.overflow_box{
border: 1px solid grey;
padding: .5em;
overflow: auto;
background-color: #DBDBDB;
font-family:"New Courier", Courier, monospace;
font-size:11px;
}
.xml-attribute {color: #009900}
.xml-value {color: #ce7b00}
.ST0 {color: #00007c; font-family: Monospaced; font-weight: bold}
.xml-tag {color: #0000e6}
.STRING_LITERAL {color: #ce7b00}</style>
This resource supports the following POST actions:
**NOTE**: Documentation for the v3.0 resource is <a href="https://www.concursolutions.com/api/docs/index.html#!/QuickExpenses">here</a>.

    * 
        <a href="#newqe">Post New Quick Expense </a>

## 
    <a id="newqe" name="newqe"></a>Post New Quick Expense Request
<table border="1" bordercolor="#dbdbdb" cellpadding="3" cellspacing="0" width="100%">
    <tbody>
        <tr class="GrayTableHead">
            <td>
                Description</td>
            <td>
                Supported Content Types</td>
        </tr>
        <tr>
            <td>
                Posts a quick expense to Concur for the OAuth consumer. Administrative users can provide a different Concur login as owner of the expense.</td>
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
                None
            </td>
            <td valign="top">
                
                    * 
                        **loginID={<em>loginID</em>}**<br />
                        The Concur login for the user that will own the quick expense.
                
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
                The OAuth Consumer must have the Web Services Admin (Professional) or Can Administer (Standard) user role to use the loginID query string.</td>
            <td valign="top" width="50%">
                **Accept** header specifying which format the response should be in. Possible values are:
                
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
                This request should contain a **QuickExpense** parent element with the following child elements:
                <table border="1" bordercolor="#dbdbdb" cellpadding="3" cellspacing="0" width="100%">
                    <tbody>
                        <tr class="GrayTableHead">
                            <td colspan="2" valign="top">
                                Required Elements</td>
                        </tr>
                        <tr class="GrayTableHead">
                            <td valign="top">
                                Element</td>
                            <td valign="top">
                                Description</td>
                        </tr>
                        <tr>
                            <td>
                                CurrencyCode</td>
                            <td>
                                The <a href="http://en.wikipedia.org/wiki/ISO_4217" target="_blank">3-letter ISO 4217 currency code</a> for the expense transaction amount.<br />
                                Example: USD.</td>
                        </tr>
                        <tr>
                            <td>
                                TransactionAmount</td>
                            <td>
                                The total amount of the expense in the original currency, with up to three decimal places. Example: 123.654</td>
                        </tr>
                        <tr>
                            <td>
                                TransactionDate</td>
                            <td>
                                The date the expense was incurred. Format: YYYY-MM-DD</td>
                        </tr>
                    </tbody>
                </table>
                <br />
                <table border="1" bordercolor="#dbdbdb" cellpadding="3" cellspacing="0" width="100%">
                    <tbody>
                        <tr class="GrayTableHead">
                            <td colspan="2" valign="top">
                                Optional Elements</td>
                        </tr>
                        <tr class="GrayTableHead">
                            <td valign="top" width="20%">
                                Element</td>
                            <td valign="top" width="70%">
                                Description</td>
                        </tr>
                        <tr>
                            <td>
                                ExpenseTypeCode</td>
                            <td>
                                The code for the expense type in the company's expense management system. Currently supports Concur Expense.<br />
                                The Expense Type Code is returned in the **ExpKey** element of the <a href="https://developer.concur.com/node/473">Get Expense Group Configuration</a> function response.</td>
                        </tr>
                        <tr>
                            <td>
                                SpendCategoryCode</td>
                            <td>
                                The spend category code for the quick expense. The available spend category codes are consistent across all Concur products. The values are used in Concur reporting.<br />
                                <br />
                                The spend category can be used to automatically select the correct Expense Type for the entry. This functionality happens when spend categories have only one expense type included in the category. This is common with the Air, Car, and Hotel spend categories. If there are multiple expense types included in the selected spend category, the expense type will be set to Undefined so the user can select the correct expense type in the Concur user interface.<br />
                                <br />
                                Format: One of the Code values in the <a href="https://developer.concur.com/node/557">Spend Category Code List</a>.<br />
                                <br />
                                Developers can view the configured Spend Category/Expense Type mappings by using the <a href="https://developer.concur.com/node/473">Get Expense Group Configuration</a> function.</td>
                        </tr>
                        <tr>
                            <td>
                                PaymentType</td>
                            <td>
                                This element specifies the method of payment for the expense.<br />
                                Format: CASHX, CPAID, PENDC.<br />
                                CASHX = Cash, CPAID = Company Paid, or PENDC = Pending Card Transaction<br />
                                When not supplied, the value defaults to PENDC.</td>
                        </tr>
                        <tr>
                            <td>
                                LocationCity</td>
                            <td>
                                The city where the expense was incurred. This can be used to determine the Location ID when the quick expense is converted into an expense entry.
                                **NOTES**:
                                
                                    * 
                                        If you provide both the **LocationCity** and **LocationCountry** values, Concur will try to match them with the company's list of locations. If they are matched successfully, the full location details including country will be saved with the expense.
                                    * 
                                        If a **LocationCity** is provided, the **LocationCountry** and **LocationSubdivision** must be provided. If a country does not have subdivisions, the **LocationSubdivision** field may be omitted.
                                
                            </td>
                        </tr>
                        <tr>
                            <td>
                                LocationSubdivision</td>
                            <td>
                                The state, province, or other country subdivision where the expense was incurred. This can be used to determine the Location ID when the quick expense is converted into an expense entry.<br />
                                Format: <a href="http://en.wikipedia.org/wiki/ISO_3166-2:2007-04-17#I-8" target="_blank">ISO 3166-2:2007</a> country subdivision.</td>
                        </tr>
                        <tr>
                            <td>
                                LocationCountry</td>
                            <td>
                                The country where the expense was incurred. This can be used to determine the Location ID when the quick expense is converted into an expense entry.<br />
                                Format:<a href="http://en.wikipedia.org/wiki/ISO_3166-1_alpha-2" target="_blank"> 2-letter ISO 3166-1</a> country code.
                                **NOTE**: If you provide both the **LocationCity** and **LocationCountry** values, Concur will try to match them with the company's list of locations. If they are matched successfully, the full location details including country will be saved with the expense.
                            </td>
                        </tr>
                        <tr>
                            <td>
                                VendorDescription</td>
                            <td>
                                This element contains the descriptive text for the vendor for the quick expense. It often matches the Merchant Name found in a credit card transaction. So, it can be helpful when matching a quick expense to an imported credit card transaction. It is mapped to the Vendor Description field in an expense entry when the quick expense is converted into an expense entry.<br />
                                Max Length: 64</td>
                        </tr>
                        <tr>
                            <td>
                                Comment</td>
                            <td>
                                A comment that describes the expense. It becomes a Comment when converted into an expense entry.<br />
                                Max Length: 2000</td>
                        </tr>
                        <tr>
                            <td>
                                ImageBase64</td>
                            <td>
                                Binary receipt image in Base 64 encoding</td>
                        </tr>
                    </tbody>
                </table>
            </td>
        </tr>
    </tbody>
</table>
####
    XML Example Request with Required Fields
<pre class="overflow_box">
POST api/expense/expensereport/v1.0/quickexpense/?loginID=cm%40example.com HTTPS 1.1
Host: www.concursolutions.com
Authorization: OAuth {access token}
...

<QuickExpense <span class="xml-attribute">xmlns=<span class="xml-value">&quot;<span class="xml-value">http://www.concursolutions.com/api/expense/expensereport/2010/09<span class="xml-value">&quot;>
    <CurrencyCode>USD</CurrencyCode>
    <TransactionAmount>321.45</TransactionAmount>
    <TransactionDate>2012-07-21</TransactionDate>
</QuickExpense>

</pre>
####
    XML Example Request with Optional Fields
<pre class="overflow_box">
POST api/expense/expensereport/v1.0/quickexpense/?loginID=cm%40example.com HTTPS 1.1
Host: www.concursolutions.com
Authorization: OAuth {access token}
...

<QuickExpense <span class="xml-attribute">xmlns=<span class="xml-value">&quot;<span class="xml-value">http://www.concursolutions.com/api/expense/expensereport/2010/09<span class="xml-value">&quot;>
    <CurrencyCode>USD</CurrencyCode>
    <TransactionAmount>321.45</TransactionAmount>
    <TransactionDate>2012-07-21</TransactionDate>
    <SpendCategoryCode>AIRFR</SpendCategoryCode>
    <LocationCity>Seattle</LocationCity>
    <LocationSubdivision>US-WA</LocationSubdivision>
    <LocationCountry>US</LocationCountry>
    <VendorDescription>Delta Airlines</VendorDescription>
    <Comment>Trip to New York</Comment>
    <PaymentType>PENDC</PaymentType>
    <ExpenseTypeCode>TRVAF</ExpenseTypeCode>
    <ImageBase64>Base 64 encoded image data</ImageBase64>
</QuickExpense>
</pre>
####
    JSON Example Request with Required Fields
<pre class="overflow_box">
POST https:<span class="LINE_COMMENT">//<span class="LINE_COMMENT">www<span class="LINE_COMMENT">.<span class="LINE_COMMENT">concursolutions<span class="LINE_COMMENT">.<span class="LINE_COMMENT">com<span class="LINE_COMMENT">/<span class="LINE_COMMENT">api<span class="LINE_COMMENT">/<span class="LINE_COMMENT">expense<span class="LINE_COMMENT">/<span class="LINE_COMMENT">expensereport<span class="LINE_COMMENT">/<span class="LINE_COMMENT">v1<span class="LINE_COMMENT">.<span class="LINE_COMMENT">0/<span class="LINE_COMMENT">quickexpense  <span class="LINE_COMMENT">HTTP<span class="LINE_COMMENT"> 1<span class="LINE_COMMENT">.<span class="LINE_COMMENT">1
Authorization: OAuth [token]
Content-Type: application/json; charset=utf-8
Accept: application/json

[
    { 
        <span class="STRING_LITERAL">&quot;<span class="STRING_LITERAL">CurrencyCode<span class="STRING_LITERAL">&quot;        : <span class="STRING_LITERAL">&quot;<span class="STRING_LITERAL">USD<span class="STRING_LITERAL">&quot;,
        <span class="STRING_LITERAL">&quot;<span class="STRING_LITERAL">TransactionAmount<span class="STRING_LITERAL">&quot;   : <span class="STRING_LITERAL">&quot;<span class="STRING_LITERAL">321.45<span class="STRING_LITERAL">&quot;,
        <span class="STRING_LITERAL">&quot;<span class="STRING_LITERAL">TransactionDate<span class="STRING_LITERAL">&quot;     : <span class="STRING_LITERAL">&quot;<span class="STRING_LITERAL">2012-07-21<span class="STRING_LITERAL">&quot;
    }
]
</pre>
####
    JSON Example Request with Optional Fields
<pre class="overflow_box">
POST https:<span class="LINE_COMMENT">//<span class="LINE_COMMENT">www<span class="LINE_COMMENT">.<span class="LINE_COMMENT">concursolutions<span class="LINE_COMMENT">.<span class="LINE_COMMENT">com<span class="LINE_COMMENT">/<span class="LINE_COMMENT">api<span class="LINE_COMMENT">/<span class="LINE_COMMENT">expense<span class="LINE_COMMENT">/<span class="LINE_COMMENT">expensereport<span class="LINE_COMMENT">/<span class="LINE_COMMENT">v1<span class="LINE_COMMENT">.<span class="LINE_COMMENT">0/<span class="LINE_COMMENT">quickexpense  <span class="LINE_COMMENT">HTTP<span class="LINE_COMMENT"> 1<span class="LINE_COMMENT">.<span class="LINE_COMMENT">1
Authorization: OAuth [token]
Content-Type: application/json; charset=utf-8
Accept: application/json

[
    { 
        <span class="STRING_LITERAL">&quot;<span class="STRING_LITERAL">CurrencyCode<span class="STRING_LITERAL">&quot;        : <span class="STRING_LITERAL">&quot;<span class="STRING_LITERAL">USD<span class="STRING_LITERAL">&quot;,
        <span class="STRING_LITERAL">&quot;<span class="STRING_LITERAL">TransactionAmount<span class="STRING_LITERAL">&quot;   : <span class="STRING_LITERAL">&quot;<span class="STRING_LITERAL">321.45<span class="STRING_LITERAL">&quot;,
        <span class="STRING_LITERAL">&quot;<span class="STRING_LITERAL">TransactionDate<span class="STRING_LITERAL">&quot;     : <span class="STRING_LITERAL">&quot;<span class="STRING_LITERAL">2012-07-21<span class="STRING_LITERAL">&quot;,
        <span class="STRING_LITERAL">&quot;<span class="STRING_LITERAL">SpendCategoryCode<span class="STRING_LITERAL">&quot;   : <span class="STRING_LITERAL">&quot;<span class="STRING_LITERAL">AIRFR<span class="STRING_LITERAL">&quot;,
        <span class="STRING_LITERAL">&quot;<span class="STRING_LITERAL">PaymentType<span class="STRING_LITERAL">&quot;         : <span class="STRING_LITERAL">&quot;<span class="STRING_LITERAL">PENDC<span class="STRING_LITERAL">&quot;,
        <span class="STRING_LITERAL">&quot;<span class="STRING_LITERAL">ExpenseTypeCode<span class="STRING_LITERAL">&quot;     : <span class="STRING_LITERAL">&quot;<span class="STRING_LITERAL">TRVAF<span class="STRING_LITERAL">&quot;,
        <span class="STRING_LITERAL">&quot;<span class="STRING_LITERAL">ImageBase64<span class="STRING_LITERAL">&quot;         : <span class="STRING_LITERAL">&quot;<span class="STRING_LITERAL">(image in base64 encoding)<span class="STRING_LITERAL">&quot;,
        <span class="STRING_LITERAL">&quot;<span class="STRING_LITERAL">LocationCity<span class="STRING_LITERAL">&quot;        : <span class="STRING_LITERAL">&quot;<span class="STRING_LITERAL">Seattle<span class="STRING_LITERAL">&quot;,
        <span class="STRING_LITERAL">&quot;<span class="STRING_LITERAL">LocationSubdivision<span class="STRING_LITERAL">&quot; : <span class="STRING_LITERAL">&quot;<span class="STRING_LITERAL">US-WA<span class="STRING_LITERAL">&quot;,
        <span class="STRING_LITERAL">&quot;<span class="STRING_LITERAL">LocationCountry<span class="STRING_LITERAL">&quot;     : <span class="STRING_LITERAL">&quot;<span class="STRING_LITERAL">US<span class="STRING_LITERAL">&quot;,
        <span class="STRING_LITERAL">&quot;<span class="STRING_LITERAL">VendorDescription<span class="STRING_LITERAL">&quot;   : <span class="STRING_LITERAL">&quot;<span class="STRING_LITERAL">Delta Airlines<span class="STRING_LITERAL">&quot;,
        <span class="STRING_LITERAL">&quot;<span class="STRING_LITERAL">Comment<span class="STRING_LITERAL">&quot;             : <span class="STRING_LITERAL">&quot;<span class="STRING_LITERAL">Trip to New York<span class="STRING_LITERAL">&quot;
    }
]
</pre>
## 
    Post New Quick Expense Response
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
                This request will return a **QuickExpenseStatus** parent element with the following child elements:
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
                                Status</td>
                            <td valign="top">
                                The status of the request.Either SUCCESS or FAILURE</td>
                        </tr>
                        <tr>
                            <td valign="top">
                                Message</td>
                            <td valign="top">
                                When the status is FAILURE, the details of the failure appear in this element.</td>
                        </tr>
                        <tr>
                            <td valign="top">
                                QuickExpenseID</td>
                            <td valign="top">
                                The unique identifier for the quick expense.</td>
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
<QuickExpenseStatus <span class="xml-attribute">xmlns=<span class="xml-value">&quot;<span class="xml-value">http://www.concursolutions.com/api/expense/expensereport/2010/09<span class="xml-value">&quot; <span class="xml-attribute">xmlns:i=<span class="xml-value">&quot;<span class="xml-value">http://www.w3.org/2001/XMLSchema-instance<span class="xml-value">&quot;>
    <Message />
    <QuickExpenseID>nuIsue2$pASZPqXdQ5ge$s4XZHQqJFTysn3</QuickExpenseID>
    <Status>SUCCESS</Status>
</QuickExpenseStatus> 
</pre>
####
    XML Example of Response With Error
<pre class="overflow_box">
200 OK
Content-Type: application/xml
<QuickExpenseStatus <span class="xml-attribute">xmlns=<span class="xml-value">&quot;<span class="xml-value">http://www.concursolutions.com/api/expense/expensereport/2010/09<span class="xml-value">&quot; <span class="xml-attribute">xmlns:i=<span class="xml-value">&quot;<span class="xml-value">http://www.w3.org/2001/XMLSchema-instance<span class="xml-value">&quot;>
    <Message>Missing or invalid location subdivision code.</Message>
    <QuickExpenseID>nuIsue2$pASZPqXdQ5ge$s4XZHQqJFTysn3</QuickExpenseID>
    <Status>FAILED</Status>
</QuickExpenseStatus>
</pre>
####
    JSON Example of Successful Response
<pre class="overflow_box">
[
    {
        <span class="STRING_LITERAL">&quot;<span class="STRING_LITERAL">QuickExpenseID<span class="STRING_LITERAL">&quot;:<span class="STRING_LITERAL">&quot;<span class="STRING_LITERAL">nuIsue2$pASZPqXdQ5ge$s4XZHQqJFTysn3<span class="STRING_LITERAL">&quot;,
        <span class="STRING_LITERAL">&quot;<span class="STRING_LITERAL">Status<span class="STRING_LITERAL">&quot;:<span class="STRING_LITERAL">&quot;<span class="STRING_LITERAL">SUCCESS<span class="STRING_LITERAL">&quot;,
        <span class="STRING_LITERAL">&quot;<span class="STRING_LITERAL">Message<span class="STRING_LITERAL">&quot;:<span class="STRING_LITERAL">&quot;<span class="STRING_LITERAL">&quot;
    }
]
</pre>
####
    JSON Example of Response With Error
<pre class="overflow_box">
[
    {
        <span class="STRING_LITERAL">&quot;<span class="STRING_LITERAL">Error<span class="STRING_LITERAL">&quot;: { <span class="STRING_LITERAL">&quot;<span class="STRING_LITERAL">Message<span class="STRING_LITERAL">&quot;:<span class="STRING_LITERAL">&quot;<span class="STRING_LITERAL">Missing or invalid location subdivision code.<span class="STRING_LITERAL">&quot;, <span class="STRING_LITERAL">&quot;<span class="STRING_LITERAL">Server-Time<span class="STRING_LITERAL">&quot;:<span class="STRING_LITERAL">&quot;<span class="STRING_LITERAL">2012-10-16T02:18:56<span class="STRING_LITERAL">&quot;, <span class="STRING_LITERAL">&quot;<span class="STRING_LITERAL">Id<span class="STRING_LITERAL">&quot;:<span class="STRING_LITERAL">&quot;<span class="STRING_LITERAL">FA067608-3E83-4B3C-A421-187F2C498356<span class="STRING_LITERAL">&quot; } 
    }
]
</pre>
<br />
