
        <div id="main" class="container">
            <div>
                            </div>
            <div class="row">
                <div class="span12">
<div class="breadcrumbs"><a href="/">Home</a>Payment Batch Resource: GET</div>
                </div>
            </div>

            <div id="content-wrapper">
<!-- <div class="row"> -->
                <div id="content" class="span9">
            # Payment Batch Resource: GET
                    <div class="section">
                    <div id="node-427" class="node clear-block">


    
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
        <a href="#listofbatches">Get List of Payment Batches </a>

## 
    <a id="listofbatches" name="listofbatches"></a>Get List of Payment Batches Request
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
                Retrieves the list of payment batches with an optional requested status.</td>
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
                        **batchlist/**<br />
                        The batchlist keyword.
                
                Example:<br />
                https://www.concursolutions.com/api/expense/paymentbatch/v1.1/batchlist/</td>
        </tr>
        <tr class="GrayTableHead">
            <td colspan="2">
                Query Parameters - Optional</td>
        </tr>
        <tr>
            <td colspan="2">
                
                    * 
                        **{<em>Status</em>}**<br />
                        The status of the batches. Can be either OPEN or CLOSED.
                
                <br />
                Example:<br />
                https://www.concursolutions.com/api/expense/paymentbatch/v1.1/batchlist/{<em>Status</em>}</td>
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
                The OAuth consumer must have one of the following user roles in Concur: Company Administrator or Web Services Administrator for Professional, or Can Administer for Standard.<br />
                <br />
                These roles allow the user to manage data for the entire company.</td>
            <td valign="top" width="50%">
                None</td>
        </tr>
    </tbody>
</table>
####
    XML Example Request
<pre class="overflow_box">
GET /api/expense/paymentbatch/v1.1/batchlist/OPEN HTTPS 1.1
Host: www.concursolutions.com
Authorization: OAuth {access token}
...
</pre>
## 
    Get List of Payment Batches Response
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
                
            </td>
        </tr>
        <tr class="GrayTableHead">
            <td colspan="2">
                Content Body</td>
        </tr>
        <tr>
            <td colspan="2">
                This request will return a **BatchList** parent element and a **BatchSummary** child element for each batch. The **BatchSummary** elements will have the following child elements:<br />
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
                                BatchName</td>
                            <td valign="top">
                                The batch name, as it appears in Payment Manager.</td>
                        </tr>
                        <tr>
                            <td valign="top">
                                BatchID</td>
                            <td valign="top">
                                The unique identifier for the batch.</td>
                        </tr>
                        <tr>
                            <td valign="top">
                                BatchTotal</td>
                            <td valign="top">
                                The batch total amount.</td>
                        </tr>
                        <tr>
                            <td valign="top">
                                Currency</td>
                            <td valign="top">
                                The <a href="http://en.wikipedia.org/wiki/ISO_4217">3-letter ISO 4217 currency code</a> for the batch.</td>
                        </tr>
                        <tr>
                            <td valign="top">
                                Count</td>
                            <td valign="top">
                                The number of payment demands in the batch.</td>
                        </tr>
                        <tr>
                            <td valign="top">
                                Type</td>
                            <td valign="top">
                                The payee of the batch. Either Employee or Card Program.</td>
                        </tr>
                        <tr>
                            <td valign="top">
                                PaymentMethod</td>
                            <td valign="top">
                                The reimbursement method for the batch. Either Expense Pay by Concur, Company Check (via Accounts Payable), ADP (via EPIP file), or Other Reimbursement Methods.</td>
                        </tr>
                        <tr>
                            <td valign="top">
                                Batch-URL</td>
                            <td valign="top">
                                The URL to use as a basis for other actions, such as closing the batch.</td>
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

<BatchList <span class="xml-attribute">xmlns=<span class="xml-value">&quot;<span class="xml-value">http://www.concursolutions.com/api/expense/paymentbatch/2011/11<span class="xml-value">&quot;>
    <BatchSummary>
        <BatchName>USD: Employees Batch Paid by Expense Pay</BatchName>
        <BatchID>13cb38dc-46d2-4e0c-8973-8c7667806b47</BatchID>
        <BatchTotal>334.21</BatchTotal>
        <Currency>USD</Currency>
        <Count>10</Count>
        <Type>Employee</Type>
        <PaymentMethod>Expense Pay by Concur</PaymentMethod>
        <Batch-URL>https://www.concursolutions.com/api/expense/paymentbatch/v1.1/batch/12345678901234567890</Batch-URL>
    </BatchSummary>
    <BatchSummary>
        <BatchName>USD Company Paid: Card Batch Paid by Company Check (via Accounts Payable)</BatchName>
        <BatchID>88de2u62-77sk-ldie-2j23-182733j263es</BatchID>
        <BatchTotal>123.88</BatchTotal>
        <Currency>USD</Currency>
        <Count>3</Count>
        <Type>Card Program</Type>
        <PaymentMethod>Company Check (via Accounts Payable)</PaymentMethod>
        <Batch-URL>https://www.concursolutions.com/api/expense/paymentbatch/v1.1/batch/7786363756383463637</Batch-URL>
    </BatchSummary>
    <BatchSummary>
        <BatchName>USD: Employees Batch Paid by Company Check (via Accounts Payable)</BatchName>
        <BatchID>fj8390sk-0foe-a2w3-838s-owi2188dk7ej</BatchID>
        <BatchTotal>45.87</BatchTotal>
        <Currency>USD</Currency>
        <Count>1</Count>
        <Type>Employee</Type>
        <PaymentMethod>Company Check (via Accounts Payable)</PaymentMethod>
        <Batch-URL>https://www.concursolutions.com/api/expense/paymentbatch/v1.1/batch/8873837365536353637</Batch-URL>
    </BatchSummary> 
</BatchList>
</pre>
<br />
