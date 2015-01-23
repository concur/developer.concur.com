
        <div id="main" class="container">
            <div>
                            </div>
            <div class="row">
                <div class="span12">
<div class="breadcrumbs"><a href="/">Home</a>Digital Tax Invoices Resource: PUT </div>
                </div>
            </div>

            <div id="content-wrapper">
<!-- <div class="row"> -->
                <div id="content" class="span9">
			# Digital Tax Invoices Resource: PUT 
                    <div class="section">
                    <div id="node-688" class="node clear-block">


	
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
.STRING_LITERAL {color: #ce7b00}</style>This resource supports the following PUT action:

* 
		<a href="#gettravelprofile">Put Digital Tax Invoice Status </a>

## 
	<a id="gettravelprofile" name="gettravelprofile"></a>Put Digital Tax Invoice Status Request
####
	XML Example Request of Valid Invoice
<pre class="overflow_box">
PUT https://www.concursolutions.com/api/v3.0/expense/DigitalTaxInvoices/3er$maDk$iw209eW9wo3WPekw9 HTTP/1.1
Authorization: OAuth {access token}
...

<DigitalTaxInvoice>
    <Status>VALID</Status>
</DigitalTaxInvoice>
</pre>####
	XML Example Request of Invalid Invoice
<pre class="overflow_box">
PUT https://www.concursolutions.com/api/v3.0/expense/DigitalTaxInvoices/3er$maDk$iw209eW9wo3WPekw9 HTTP/1.1
Authorization: OAuth {access token}
...

<DigitalTaxInvoice>
    <Comment>This certificate number is not valid</Comment>
    <Status>INVLD</Status>
</DigitalTaxInvoice>
</pre>####
	
## 
	Put Digital Tax Invoice Status Response
####
	XML Example of Successful Response
<pre class="overflow_box">
200 OK
</pre>
