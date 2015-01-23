
        <div id="main" class="container">
            <div>
                            </div>
            <div class="row">
                <div class="span12">
<div class="breadcrumbs"><a href="/">Home</a>Digital Tax Invoices Resource: GET </div>
                </div>
            </div>

            <div id="content-wrapper">
<!-- <div class="row"> -->
                <div id="content" class="span9">
			# Digital Tax Invoices Resource: GET 
                    <div class="section">
                    <div id="node-687" class="node clear-block">


	
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
.STRING_LITERAL {color: #ce7b00}</style>This resource supports the following GET actions:

* 
		<a href="#gettravelprofile">Get List of Digital Tax Invoices</a>
* 
		<a href="#getinvdetails">Get Digital Tax Invoice Details </a>

## 
	<a id="gettravelprofile" name="gettravelprofile"></a>Get List of Digital Tax Invoices Request
####
	XML Example Request for all Invoices
<pre class="overflow_box">
GET <a href="https://www.concursolutions.com/api/v3.0/expense/DigitalTaxInvoices/" title="https://www.concursolutions.com/api/v3.0/expense/DigitalTaxInvoices/">https://www.concursolutions.com/api/v3.0/expense/DigitalTaxInvoices/</a> HTTP/1.1
Authorization: OAuth {access token}
...
</pre>####
	XML Example Request with Offset
<pre class="overflow_box">
GET <a href="https://www.concursolutions.com/api/v3.0/expense/DigitalTaxInvoices/?offset=2" title="https://www.concursolutions.com/api/v3.0/expense/DigitalTaxInvoices/?offset=2">https://www.concursolutions.com/api/v3.0/expense/DigitalTaxInvoices/?offset=2</a> HTTP/1.1
Authorization: OAuth {access token}
...
</pre>####
	XML Example Request with Last Modified Date (UTC)
<pre class="overflow_box">
GET <a href="https://www.concursolutions.com/api/v3.0/expense/DigitalTaxInvoices/?modifiedafter=2013-10-24T01:00:00" title="https://www.concursolutions.com/api/v3.0/expense/DigitalTaxInvoices/?modifiedafter=2013-10-24T01:00:00">https://www.concursolutions.com/api/v3.0/expense/DigitalTaxInvoices/?modifiedafter=2013-10-24T01:00:00</a> HTTP/1.1
Authorization: OAuth {access token}
...
</pre>####
	XML Example Request with Limit
<pre class="overflow_box">
GET <a href="https://www.concursolutions.com/api/v3.0/expense/DigitalTaxInvoices/?limit=50HTTP/1.1" title="https://www.concursolutions.com/api/v3.0/expense/DigitalTaxInvoices/?limit=50HTTP/1.1">https://www.concursolutions.com/api/v3.0/expense/DigitalTaxInvoices/?limit=50HTTP/1.1</a>
Authorization: OAuth {access token}
...
</pre>## 
	Get List of Digital Tax Invoices Response
####
	XML Example of Successful Response
<pre class="overflow_box">
200 OK
Content-Type: application/xml

<DigitalTaxInvoices>
    <Items>
        <DigitalTaxInvoice>
            <ID>3er$maDk$iw209eW9wo3WPekw9</ID>
            <URI>https://www.concursolutions.com/api/v3.0/expense/DigitalTaxInvoices/3er$maDk$iw209eW9wo3WPekw9</URI>
        </DigitalTaxInvoice>
        <DigitalTaxInvoice>
            <ID>K9d$sl2Q92$foU7Dwso12J73</ID>
            <URI>https://www.concursolutions.com/api/v3.0/expense/DigitalTaxInvoices/K9d$sl2Q92$foU7Dwso12J73</URI>
        </DigitalTaxInvoice>
    </Items>
    <NextPage>2</NextPage>
</DigitalTaxInvoices>
</pre>## 
	<a id="getinvdetails" name="getinvdetails"></a>Get Digital Tax Invoice Details Request
####
	XML Example Request
<pre class="overflow_box">
GET https://www.concursolutions.com/api/v3.0/expense/DigitalTaxInvoices/3er$maDk$iw209eW9wo3WPekw9 HTTP/1.1
Authorization: OAuth {access token}
...
</pre>## 
	Get Digital Tax Invoice Details Response
####
	XML Example of Successful Response
<pre class="overflow_box">
200 OK
Content-Type: application/xml


<DigitalTaxInvoice>
    <AccountID>0987654321</AccountID>
    <ReceiptData>
        ....Tax Invoice Fields will appear here...
    </ReceiptData>
</DigitalTaxInvoice>
</pre>

