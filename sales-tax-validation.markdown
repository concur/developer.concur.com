
        <div id="main" class="container">
            <div>
                            </div>
            <div class="row">
                <div class="span12">
<div class="breadcrumbs"><a href="/">Home</a>Sales Tax Validation</div>
                </div>
            </div>

            <div id="content-wrapper">
<!-- <div class="row"> -->
                <div id="content" class="span9">
            # Sales Tax Validation
                    <div class="section">
                    <div id="node-783" class="node clear-block">


    
    <div class="content clear-block">
                <script TYPE="text/JavaScript"> 
<!--
function popup(mylink, windowname)
{
if (! window.focus)return true;
var href;
if (typeof(mylink) == 'string')
   href=mylink;
else
   href=mylink.href;
window.open(href, windowname, 'width=1000,height=600,scrollbars=yes, resizable=yes');
return false;
}
//--><!--
function popup(mylink, windowname)
{
if (! window.focus)return true;
var href;
if (typeof(mylink) == 'string')
   href=mylink;
else
   href=mylink.href;
window.open(href, windowname, 'width=1000,height=600,scrollbars=yes, resizable=yes');
return false;
}
//-->
</script><style type="text/css">
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
.bullet_in {margin-left: 14px}
.p_margin_top {margin-top: 14px}
.overflow_box1 {border: 0px solid grey;
padding: .5em;
overflow: auto;
background-color: #DBDBDB;
font-family:"Courier New", Courier, monospace;
font-size:12px;
}
p {
margin-bottom: 8px;
margin-top: 8px;
font-family: wf_segoe-ui_normal,"Segoe UI","Segoe WP",Tahoma,Arial,sans-serif;
font-weight: 400;
font-size: 14px;
line-height: 1.5em;
color: #505050;
}
ul {
margin-bottom: 8px;
margin-top: 8px;
font-family: wf_segoe-ui_normal,"Segoe UI","Segoe WP",Tahoma,Arial,sans-serif;
font-weight: 400;
font-size: 14px;
line-height: 1.5em;
color: #505050;
}
ol {
margin-bottom: 8px;
margin-top: 8px;
font-family: wf_segoe-ui_normal,"Segoe UI","Segoe WP",Tahoma,Arial,sans-serif;
font-weight: 400;
font-size: 14px;
line-height: 1.5em;
color: #505050;
}
li {
margin-bottom: 8px;
margin-top: 8px;
font-family: wf_segoe-ui_normal,"Segoe UI","Segoe WP",Tahoma,Arial,sans-serif;
font-weight: 400;
font-size: 14px;
line-height: 1.5em;
color: #505050;
}
dl {
margin-bottom: 8px;
margin-top: 8px;
font-family: wf_segoe-ui_normal,"Segoe UI","Segoe WP",Tahoma,Arial,sans-serif;
font-weight: 400;
font-size: 14px;
line-height: 1.5em;
color: #505050;
}
dd {
margin-bottom: 8px;
margin-top: 8px;
font-family: wf_segoe-ui_normal,"Segoe UI","Segoe WP",Tahoma,Arial,sans-serif;
font-weight: 400;
font-size: 14px;
line-height: 1.5em;
color: #505050;
}
dt {
margin-bottom: 8px;
margin-top: 8px;
font-family: wf_segoe-ui_normal,"Segoe UI","Segoe WP",Tahoma,Arial,sans-serif;
font-weight: 400;
font-size: 14px;
line-height: 1.5em;
color: #505050;
}
h1 {
margin-bottom: 12px;
margin-top: 12px;
font-family: wf_segoe-ui_normal,"Segoe UI","Segoe WP",Tahoma,Arial,sans-serif;
font-weight: 600;
font-size: 42px;
line-height: 1.5em;
color: #505050;
}
h2 {
    margin-bottom: 12px;
    margin-top: 12px;
    font-family: wf_segoe-ui_normal,"Segoe UI","Segoe WP",Tahoma,Arial,sans-serif;
    font-weight: 400;
    font-size: 36px;
    line-height: 1.5em;
    color: rgb(0,120,201);
}
h3 {
margin: 0 0 12px;
font-family: wf_segoe-ui_light,"Segoe UI Light","Segoe WP Light","Segoe UI","Segoe WP",Tahoma,Arial,sans-serif;
font-weight: 400;
font-size: 30px;
line-height: 1.2em;
color: rgb(0,120,201);
}
h3_gray {
margin: 0 0 12px;
font-family: wf_segoe-ui_light,"Segoe UI Light","Segoe WP Light","Segoe UI","Segoe WP",Tahoma,Arial,sans-serif;
font-weight: 400;
font-size: 30px;
line-height: 1.2em;
color: #505050;
}
h4 {
    margin: 0 0 12px;
    font-family: wf_segoe-ui_light,"Segoe UI Light","Segoe WP Light","Segoe UI","Segoe WP",Tahoma,Arial,sans-serif;
    font-weight: 400;
    font-size: 24px;
    line-height: 1.2em;
    color: #3B3B3B;
}
td {
margin-bottom: 8px;
margin-top: 8px;
font-family: wf_segoe-ui_normal,"Segoe UI","Segoe WP",Tahoma,Arial,sans-serif;
font-weight: 400;
font-size: 14px;
line-height: 1.5em;
color: #505050;
}
tr {
margin-bottom: 8px;
margin-top: 8px;
font-family: wf_segoe-ui_normal,"Segoe UI","Segoe WP",Tahoma,Arial,sans-serif;
font-weight: 400;
font-size: 14px;
line-height: 1.5em;
color: #505050;
}</style>### 
    Description
<p style="font-size:14px"><span style="font-size:14px;">Validates sales tax amounts in invoces. You can use SalesTaxValidationRequest to:

* 
        <span style="font-size:14px;">Retrieve invoices for calculating taxes.
* 
        <span style="font-size:14px;">Update invoices with a calculated tax amount and tax rate based on specific invoice fields.

### 
    Version
<p style="font-size:14px"><span style="font-size:14px;">Version 3
### 
    URIs
<span><code style="font-size:14px">https://{InstanceURL}/api/v3.0/invoice/salestaxvalidationrequest</code>
### 
    Content types

* 
        <span style="font-size:14px;">application/xml
* 
        <span style="font-size:14px;">application/json

### 
    Operations

* 
        <span style="font-size:14px;"><a href="https://www.concursolutions.com/api/docs/index.html#!/SalesTaxValidationRequest/Get_offset_limit_modifiedafter_get_0">GET / invoice/salestaxvalidationrequest</a> &mdash; Get invoices for calculating tax. It supports request parameters for specifying a page offset for displaying results, limiting the number of invoices retrieved, and filtering results for invoices modified after a specific date.
* 
        <span style="font-size:14px;"><a href="https://www.concursolutions.com/api/docs/index.html#!/SalesTaxValidationRequest/Put_invoice_put_1">PUT / invoice/salestaxvalidationrequest</a> &mdash; Updates invoices with a calculated tax amount and tax rate.

### 
    Works with these Concur products

* 
        <span style="font-size:14px;">**Invoice** for Concur Professional
* 
        <span style="font-size:14px;">**Invoice** for Concur Standard


