
        <div id="main" class="container">
            <div>
                            </div>
            <div class="row">
                <div class="span12">
<div class="breadcrumbs"><a href="/">Home</a>Company Card Transaction Resource: GET</div>
                </div>
            </div>

            <div id="content-wrapper">
<!-- <div class="row"> -->
                <div id="content" class="span9">
            # Company Card Transaction Resource: GET
                    <div class="section">
                    <div id="node-467" class="node clear-block">


    
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
        <a href="#listoftrans">Get List of Available Transactions </a>

## 
    <a id="listoftrans" name="listoftrans"></a>Get List of Available Transactions Request
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
                Retrieves a list of unassigned company card charges for the user specified in the <a href="https://developer.concur.com/node/491">OAuth</a> access token.</td>
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
GET https://www.concursolutions.com/api/expense/expensereport/v1.1/CardCharges/ HTTP/1.1
Authorization: OAuth {access token}
...
</pre>
## 
    Get List of Available Transactions Response
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
                This request will return a <span class="codeexample">**CardCharges** parent element with a <span class="codeexample">**CardCharge** child element for each transaction. The <span class="codeexample">**CardCharge** elements will have the following child elements:<br />
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
                                <span class="codeexample">CardNumber</td>
                            <td valign="top">
                                The number of the card, with all but the last four digits obscured.</td>
                        </tr>
                        <tr>
                            <td valign="top">
                                <span class="codeexample">ExpKey</td>
                            <td valign="top">
                                The code for the expense type of the transaction</td>
                        </tr>
                        <tr>
                            <td valign="top">
                                <span class="codeexample">Merchant</td>
                            <td valign="top">
                                The merchant name for the transaction.</td>
                        </tr>
                        <tr>
                            <td valign="top">
                                <span class="codeexample">ExpName</td>
                            <td valign="top">
                                The name of the expense type of the transaction.</td>
                        </tr>
                        <tr>
                            <td valign="top">
                                <span class="codeexample">TransactionAmount</td>
                            <td valign="top">
                                The amount of the card transaction.</td>
                        </tr>
                        <tr>
                            <td valign="top">
                                <span class="codeexample">TransactionCrnCode</td>
                            <td valign="top">
                                The currency code of the transaction amount.</td>
                        </tr>
                        <tr>
                            <td valign="top">
                                <span class="codeexample">TransactionDate</td>
                            <td valign="top">
                                The date of the transaction.</td>
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

<CardCharges 
    <span class="xml-attribute">xmlns=<span class="xml-value">&quot;<span class="xml-value">https://www.concursolutions.com/api/expense/expensereport/2011/03<span class="xml-value">&quot;>
    <CardCharge>
        <CardNumber>XXXXXXXX11111</CardNumber>
        <ExpKey>CARRT</ExpKey>
        <ExpName>Car Rental</ExpName>
        <Merchant>Hertz</Merchant>
        <TransactionAmount>283.88000000</TransactionAmount>
        <TransactionCrnCode>USD</TransactionCrnCode>
        <TransactionDate>2010-08-19T00:00:00</TransactionDate>
    </CardCharge>
    <CardCharge>
        <CardNumber>XXXXXXXX11111</CardNumber>
        <ExpKey>UNDEF</ExpKey>
        <ExpName>Undefined</ExpName>
        <Merchant>King Tires</Merchant>
        <TransactionAmount>274.13000000</TransactionAmount>
        <TransactionCrnCode>USD</TransactionCrnCode>
        <TransactionDate>2010-08-19T00:00:00</TransactionDate>
    </CardCharge>
</CardCharges> 
</pre>
<br />
