
        <div id="main" class="container">
            <div>
                            </div>
            <div class="row">
                <div class="span12">
<div class="breadcrumbs"><a href="/">Home</a>Expense Report Resource: GET Report Digests v3.0</div>
                </div>
            </div>

            <div id="content-wrapper">
<!-- <div class="row"> -->
                <div id="content" class="span9">
            # Expense Report Resource: GET Report Digests v3.0
                    <div class="section">
                    <div id="node-708" class="node clear-block">


    
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
.STRING_LITERAL {color: #ce7b00}    </style>
## 
    Description
The ReportDigests resource enables searching for expense reports using two or more search criteria and getting an expense report summary. It has two endpoints:

* 
        Get all report digests &mdash; Returns all report digests the user owns based on the specified search criteria.
* 
        Get a single report digest by ID &mdash; Returns a report digest by ID.

These endpoints supersede the <a href="https://developer.concur.com/node/694">Get List of Reports version 2.0</a> endpoint. When searching for a term at the Expense Entry level of the Expense data hierarchy (such as Expense Type or IsBillable), the search returns any report where at least one expense entry meets the search criteria.
In contrast with Get List of Reports version 2.0, where searches are done at the report level, with Get Report Digests version 3.0, searches can be done at the Expense Entry and Digest levels. When searching using multiple terms at the Expense Entry level, the search results include the set of reports that meet at least one of the entries in the search criteria. The search results include reports that have entries that match any of the specified criteria. The entries do not have to match all supplied criteria to be returned. For example, a search for Expense Type = Airfare and IsBillable = true returns reports where there is at least one entry that has airfare and at least one entry that is billable. The expense entries with airfare may not be the same expense entries that are billable. To find expense entries that are both airfare and billable, it is necessary to filter the reports in the response to find these entries.
To view company data, the user must have the **Web Services Administrator** role for Concur Professional/Premium or the **Can Administer** role for Concur Standard.
## 
    GET All Report Digests Resource
Returns all ReportDigests owned by the user based on the search criteria.
<table border="1" bordercolor="#DBDBDB" cellpadding="3" cellspacing="0" width="100% ">
<tbody>
<tr class="GrayTableHead">
<td>
                Resource URI</td>
</tr>
<tr>
<td>
                https://www.concursolutions.com/api/v3.0/expense/reportdigests/</td>
</tr>
<tr class="GrayTableHead">
<td>
                Supported Content Types</td>
</tr>
<tr>
<td>

* 
                        application/xml
* 
                        application/json

</td>
</tr>
<tr class="GrayTableHead">
<td>
                Supported Accept Types</td>
</tr>
<tr>
<td>

* 
                        application/xml
* 
                        application/json

</td>
</tr>
<tr class="GrayTableHead">
<td>
                Query Parameters</td>
</tr>
<tr>
<td>
For query parameters and element defintions, go <a href="https://www.concursolutions.com/api/docs/index.html#!/ReportDigests">here.</a>
</td>
</tr>
<tr class="GrayTableHead">
<td>
                Request and Response Examples</td>
</tr>
<tr>
<td>
                For request and response examples, go here.</td>
</tr>
</tbody>
</table>

