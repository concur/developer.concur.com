
        <div id="main" class="container">
            <div>
                            </div>
            <div class="row">
                <div class="span12">
<div class="breadcrumbs"><a href="/">Home</a>Custom List Items</div>
                </div>
            </div>

            <div id="content-wrapper">
<!-- <div class="row"> -->
                <div id="content" class="span9">
            # Custom List Items
                    <div class="section">
                    <div id="node-554" class="node clear-block">


    
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
.xml-tag {color: #0000e6}   </style>
Custom list fields are included in many of the web services calls throughout Concur Connect, and they require some special consideration.
####
    Value
When posting a list item, the list item **code** should be sent as the value, not the list item **name**. The code is returned in the **levelxcode** element of the <a href="https://developer.concur.com/node/343">Get List Items</a> function.
####
    Posting Connected List Items
There are two types of custom lists: Simple lists and Connected (multi-level) lists. If the list is a connected list, the list fields must be sent in sequential order, from parent to the lowest level child list item, as they are configured in the connected list definition.
    Example: If your connected list uses Custom5 for the first level, Custom10 for the second level and Custom2 for the third level, you must send the XML elements for the custom fields in that order:
    <Custom5>FirstValueCode</Custom5><br />
    <Custom10>SecondValueCode</Custom10><br />
    <Custom2>ThirdValueCode</Custom2>
####
    Common Issues
Developers that post custom list item values can encounter errors when they post a list item that does not exist in the Concur database. This can happen when the list item import hasn't been completed or hasn't run recently. If the posted list item code does not match an existing list item, the post may result in bad data. Use the <a href="https://developer.concur.com/node/370">List Item</a> web service to ensure that the list items you are posting are present in the Concur database.

<footer><br />
