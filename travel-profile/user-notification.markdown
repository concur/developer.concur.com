
        <div id="main" class="container">
            <div>
                            </div>
            <div class="row">
                <div class="span12">
<div class="breadcrumbs"><a href="/">Home</a>Notification Subscription Resource</div>
                </div>
            </div>

            <div id="content-wrapper">
<!-- <div class="row"> -->
                <div id="content" class="span9">
            # Notification Subscription Resource
                    <div class="section">
                    <div id="node-504" class="node clear-block">


    
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
<table border="1" bordercolor="#dbdbdb" cellpadding="3" cellspacing="0" width="100%">
    <tbody>
        <tr class="GrayTableHead">
            <td colspan="2">
                Description</td>
        </tr>
        <tr>
            <td colspan="2">
                A subscription to a notification when the Concur user changes the specified features of their Concur account or data. Currently supports notifications for the following events: Itinerary change (create or update), Travel Profile basic information change, or Travel Profile Form of Payment change. This functionality is restricted to Travel Suppliers or TMCs (Travel Management Companies) who have registered with Concur.
                **NOTE**: This resource can only be accessed by partner applications that have selected the User API scope.
            </td>
        </tr>
        <tr class="GrayTableHead">
            <td colspan="2">
                Works With These Concur Products</td>
        </tr>
        <tr>
            <td colspan="2">
                
                    * 
                        **Travel** for Concur Professional/Premium
                    * 
                        **Travel** for Concur Standard
                
            </td>
        </tr>
        <tr class="GrayTableHead">
            <td colspan="2">
                Resource URI</td>
        </tr>
        <tr>
            <td colspan="2">
                To subscribe:<br />
                https://www.concursolutions.com/api/user/v1.0/subscribe<br />
                To unsubscribe:<br />
                https://www.concursolutions.com/api/user/v1.0/unsubscribe</td>
        </tr>
        <tr class="GrayTableHead">
            <td width="50%">
                Supported Content Types</td>
            <td width="50%">
                Supported Accept Types</td>
        </tr>
        <tr>
            <td>
                
                    * 
                        application/xml
                
            </td>
            <td>
                
                    * 
                        application/xml
                
            </td>
        </tr>
        <tr class="GrayTableHead">
            <td>
                Supported Verbs</td>
            <td>
                Related Resources</td>
        </tr>
        <tr>
            <td>
                <a href="https://developer.concur.com/node/505">POST</a></td>
            <td valign="top">
                <a href="https://developer.concur.com/node/511">Booking</a>
                <a href="https://developer.concur.com/node/497">Form of Payment</a>
                <a href="https://developer.concur.com/node/513">Itinerary</a>
                <a href="https://developer.concur.com/node/502">Travel Profile</a>
            </td>
        </tr>
    </tbody>
</table>
<br />
