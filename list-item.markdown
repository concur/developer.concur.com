
        <div id="main" class="container">
            <div>
                            </div>
            <div class="row">
                <div class="span12">
<div class="breadcrumbs"><a href="/">Home</a>List Item Web Service</div>
                </div>
            </div>

            <div id="content-wrapper">
<!-- <div class="row"> -->
                <div id="content" class="span9">
            # List Item Web Service
                    <div class="section">
                    <div id="node-370" class="node clear-block">


    
    <div class="content clear-block">
                <script>
  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

  ga('create', 'UA-41161356-1', 'concur.com');
  ga('send', 'pageview');

</script>
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
.xml-tag {color: #0000e6}</style>
<a name="top"></a>
<table border="1" bordercolor="#dbdbdb" cellpadding="3" cellspacing="0" width="100%">
    <tbody>
        <tr class="GrayTableHead">
            <td colspan="2">
                Description</td>
        </tr>
        <tr>
            <td colspan="2">
                The Concur List Item web service provides an automated solution to clients who would like to add, update or delete list items. This web service solves several business problems:
                
                    * 
                        Files are difficult to manage: The service allows clients to send the data programatically, without requiring files to be moved and managed.
                    * 
                        Need to work outside the Overnight Processing Period (ONP): Clients that need to make updates outside the ONP can use the List Item web service to modify their list items at any time. This allows users to quickly submit expense reports using the new values.
                
            </td>
        </tr>
        <tr class="GrayTableHead">
            <td colspan="2">
                Works With These Concur Products</td>
        </tr>
        <tr>
            <td colspan="2">
                
                    * 
                        **Expense** for Concur Professional/Premium
                    * 
                        **Expense** for Concur Standard
                    * 
                        **Invoice** for Concur Professional/Premium
                    * 
                        **Invoice** for Concur Standard
                    * 
                        **Travel Request** for Concur Professional/Premium
                
            </td>
        </tr>
        <tr class="GrayTableHead">
            <td colspan="2">
                Concur Connect API Structure</td>
        </tr>
        <tr>
            <td colspan="2">
                Refer to **Web Services > <a href="https://developer.concur.com/node/25">Core Concepts</a>** for:
                
                    * 
                        Detailed information regarding the format, structure and process of making calls to a Concur Web Service.
                    * 
                        Information on authentication and authorization for all Concur Web Services.
                    * 
                        Information on registering and enabling partner applications to use Concur Web Services.
                
            </td>
        </tr>
        <tr class="GrayTableHead">
            <td colspan="2">
                Product Restrictions</td>
        </tr>
        <tr>
            <td colspan="2">
                Concur products are highly configurable, and not all clients will have access to all features.<br />
                <br />
                Partner developers must determine which configurations are required for their solution prior to the review process. Use the <a href="https://developer.concur.com/forums/concur-connect">Developer Forum</a> if you have questions about the configuration settings.<br />
                <br />
                Existing clients can work with Concur Advantage Technical Services to create customapplications that work with their configuration.</td>
        </tr>
        <tr class="GrayTableHead">
            <td>
                Resources</td>
            <td>
                Additional Information</td>
        </tr>
        <tr>
            <td>
                <a href="https://developer.concur.com/node/333">List</a>
            </td>
            <td valign="top">
                <a href="#responses">Responses and Errors</a>
                <a href="#changecode">Changing a List Item Level Code</a>
                <a href="https://developer.concur.com/node/554">Posting Custom List Items</a>
            </td>
        </tr>
    </tbody>
</table>
## 
    <a name="reponses"></a>Responses and Errors
Refer to the <a href="https://developer.concur.com/node/205">HTTP Codes</a> page for details of the common responses and errors.
####
    List Item Errors

The web service will not return a 4xx HTTP response code for a batch operation even when every item in the batch failed to be created, updated or deleted. The client must inspect the response to look for warnings or errors with individual batch items.
When there are errors with batch items, the first ten errors are returned in the <span class="codeexample"><errors> element in the request response, which includes their error code, the item that caused the error, and the error message. Any additional error messages are truncated. This prevents a large volume of error data in the event of a formatting mistake.
<br />
    **XML Response Error Codes**:
<table border="1" bordercolor="#dbdbdb" cellpadding="3" cellspacing="0" width="90%">
    <tbody>
        <tr class="GrayTableHead">
            <td valign="top" width="30%">
                Error Code</td>
            <td valign="top" width="70%">
                Message</td>
        </tr>
        <tr>
            <td valign="top">
                1001</td>
            <td valign="top">
                Could not find list-item-batch element</td>
        </tr>
        <tr>
            <td valign="top">
                1002</td>
            <td valign="top">
                Error parsing list item {ITEM}</td>
        </tr>
        <tr>
            <td valign="top">
                1003</td>
            <td valign="top">
                Start and end dates must be specified in pairs</td>
        </tr>
        <tr>
            <td valign="top">
                1004</td>
            <td valign="top">
                List item name must be specified</td>
        </tr>
        <tr>
            <td valign="top">
                1005</td>
            <td valign="top">
                List item name cannot be empty</td>
        </tr>
        <tr>
            <td valign="top">
                1006</td>
            <td valign="top">
                List item name exceeds 64 characters</td>
        </tr>
        <tr>
            <td valign="top">
                1010</td>
            <td valign="top">
                At least one level code must be specified</td>
        </tr>
        <tr>
            <td valign="top">
                1011</td>
            <td valign="top">
                Only one level code is allowed</td>
        </tr>
        <tr>
            <td valign="top">
                1012</td>
            <td valign="top">
                One or more level codes were skipped</td>
        </tr>
        <tr>
            <td valign="top">
                1013</td>
            <td valign="top">
                Invalid level1Code</td>
        </tr>
        <tr>
            <td valign="top">
                1014</td>
            <td valign="top">
                Invalid level2Code</td>
        </tr>
        <tr>
            <td valign="top">
                1015</td>
            <td valign="top">
                Invalid level3Code</td>
        </tr>
        <tr>
            <td valign="top">
                1016</td>
            <td valign="top">
                Invalid level4Code</td>
        </tr>
        <tr>
            <td valign="top">
                1017</td>
            <td valign="top">
                Invalid level5Code</td>
        </tr>
        <tr>
            <td valign="top">
                1018</td>
            <td valign="top">
                Invalid level6Code</td>
        </tr>
        <tr>
            <td valign="top">
                1019</td>
            <td valign="top">
                Invalid level7Code</td>
        </tr>
        <tr>
            <td valign="top">
                1020</td>
            <td valign="top">
                Invalid level8Code</td>
        </tr>
        <tr>
            <td valign="top">
                1021</td>
            <td valign="top">
                Invalid level9Code</td>
        </tr>
        <tr>
            <td valign="top">
                1022</td>
            <td valign="top">
                Invalid level10Code</td>
        </tr>
        <tr>
            <td valign="top">
                1023</td>
            <td valign="top">
                Invalid start date</td>
        </tr>
        <tr>
            <td valign="top">
                1024</td>
            <td valign="top">
                Invalid end date</td>
        </tr>
        <tr>
            <td valign="top">
                1025</td>
            <td valign="top">
                Start date must come before end date</td>
        </tr>
        <tr>
            <td valign="top">
                2001</td>
            <td valign="top">
                Failed to create list item</td>
        </tr>
        <tr>
            <td valign="top">
                2002</td>
            <td valign="top">
                Failed to update list item</td>
        </tr>
        <tr>
            <td valign="top">
                2003</td>
            <td valign="top">
                Failed to delete list item</td>
        </tr>
        <tr>
            <td valign="top">
                2004</td>
            <td valign="top">
                List item already exists in the database</td>
        </tr>
        <tr>
            <td valign="top">
                2005</td>
            <td valign="top">
                List item already exists as a deleted item in the database</td>
        </tr>
        <tr>
            <td valign="top">
                2006</td>
            <td valign="top">
                List item code error</td>
        </tr>
        <tr>
            <td valign="top">
                2007</td>
            <td valign="top">
                List item parent does not exist</td>
        </tr>
    </tbody>
</table>

<font size="-2"><a href="#top">Return to Top</a></font>
## 
    <a id="changecode" name="changecode"></a>Changing a List Item Level Code
The list item level code (levelxcode element) is the unique identifier for the list item. For multiple level lists, the combination of the level codes is the unique identifier. This value cannot be updated by a standard update request, as this will result in a new duplicate list value instead.<br />
    To change a list item&rsquo;s level code, the original list item must be deleted (using the Post List Item Deletion request), then the new item with the updated code must be added (using the Post New List Item request).
**NOTE**: When you delete a list item, the system deactivates it, but keeps a copy in case the item has been used in any expense reports, invoices or requests. Existing reports, invoices or requests will still show the old list item. Any reports, invoices or requests created after the list item has been deleted will no longer show it in the list.
<font size="-2"><a href="#top">Return to Top</a></font>
