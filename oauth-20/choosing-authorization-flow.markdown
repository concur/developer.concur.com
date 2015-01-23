
        <div id="main" class="container">
            <div>
                            </div>
            <div class="row">
                <div class="span12">
<div class="breadcrumbs"><a href="/">Home</a>Choosing an Authorization Flow</div>
                </div>
            </div>

            <div id="content-wrapper">
<!-- <div class="row"> -->
                <div id="content" class="span9">
            # Choosing an Authorization Flow
                    <div class="section">
                    <div id="node-738" class="node clear-block">


    
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
.bullet_in {margin-left: 25px}
.p_margin_top {margin-top: 12px}
.overflow_box1 {border: .5px solid grey;
padding: .5em;
overflow: auto;
background-color: #edebe7;
font-family:"Courier New", Courier, monospace;
font-size:14px;
}
p {
margin-bottom: 9px;
margin-top: 9px;
font-family: wf_segoe-ui_normal,"Segoe UI","Segoe WP",Tahoma,Arial,sans-serif;
font-weight: 400;
font-size: 16px;
line-height: 1.5em;
color: #505050;
}
ul {
margin-bottom: 9px;
margin-top: 9px;
font-family: wf_segoe-ui_normal,"Segoe UI","Segoe WP",Tahoma,Arial,sans-serif;
font-weight: 400;
font-size: 16px;
line-height: 1.5em;
color: #505050;
}
ol {
margin-bottom: 9px;
margin-top: 9px;
font-family: wf_segoe-ui_normal,"Segoe UI","Segoe WP",Tahoma,Arial,sans-serif;
font-weight: 400;
font-size: 16px;
line-height: 1.5em;
color: #505050;
}
li {
margin-bottom: 9px;
margin-top: 9px;
font-family: wf_segoe-ui_normal,"Segoe UI","Segoe WP",Tahoma,Arial,sans-serif;
font-weight: 400;
font-size: 16px;
line-height: 1.5em;
color: #505050;
}
dl {
margin-bottom: 9px;
margin-top: 9px;
font-family: wf_segoe-ui_normal,"Segoe UI","Segoe WP",Tahoma,Arial,sans-serif;
font-weight: 400;
font-size: 16px;
line-height: 1.5em;
color: #505050;
}
dd {
margin-bottom: 9px;
margin-top: 9px;
font-family: wf_segoe-ui_normal,"Segoe UI","Segoe WP",Tahoma,Arial,sans-serif;
font-weight: 400;
font-size: 16px;
line-height: 1.5em;
color: #505050;
}
dt {
margin-bottom: 9px;
margin-top: 9px;
font-family: wf_segoe-ui_normal,"Segoe UI","Segoe WP",Tahoma,Arial,sans-serif;
font-weight: 400;
font-size: 16px;
line-height: 1.5em;
color: #505050;
}
h1 {
margin-bottom: 9px;
margin-top: 9px;
font-family: wf_segoe-ui_normal,"Segoe UI","Segoe WP",Tahoma,Arial,sans-serif;
font-weight: 600;
font-size: 64px;
line-height: 1.5em;
color: #505050;
}
h2 {
    margin-bottom: 9px;
    margin-top: 9px;
    font-family: wf_segoe-ui_normal,"Segoe UI","Segoe WP",Tahoma,Arial,sans-serif;
    font-weight: 400;
    font-size: 42px;
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
h4 {
    margin: 0 0 12px;
    font-family: wf_segoe-ui_light,"Segoe UI Light","Segoe WP Light","Segoe UI","Segoe WP",Tahoma,Arial,sans-serif;
    font-weight: 400;
    font-size: 24px;
    line-height: 1.2em;
    color: #3B3B3B;
}
td {
margin-bottom: 9px;
margin-top: 9px;
font-family: wf_segoe-ui_normal,"Segoe UI","Segoe WP",Tahoma,Arial,sans-serif;
font-weight: 400;
font-size: 16px;
line-height: 1.5em;
color: #505050;
}
tr {
margin-bottom: 9px;
margin-top: 9px;
font-family: wf_segoe-ui_normal,"Segoe UI","Segoe WP",Tahoma,Arial,sans-serif;
font-weight: 400;
font-size: 16px;
line-height: 1.5em;
color: #505050;
}</style>An authorization flow is the process used to obtain an OAuth access token. Concur implements the following authorization flows:

* 
        <a href="https://developer.concur.com/node/712">App Center Flow</a>
* 
        <a href="https://developer.concur.com/node/745">Auto-Connect Flow</a>
* 
        <a href="https://developer.concur.com/node/711">Native Flow</a>
* 
        <a href="https://developer.concur.com/node/494">Web Flow</a>

You can use this table to decide which OAuth 2.0 authorization flow to use for your application:
<table border="1" bordercolor="#dbdbdb" cellpadding="3" cellspacing="0" width="93%">
<tbody>
<tr class="GrayTableHead">
<td font-size="18px" width="72%">
                If you need to ....</td>
<td width="28%">
                Use this flow</td>
</tr>
<tr>
<td>
                Get an access token quickly for prototyping.</td>
<td>
<a href="https://developer.concur.com/node/711">Native Flow</a>
</td>
</tr>
<tr>
<td>
                Get an access token for a user with the Web Services Administrator role, and don&rsquo;t require the user to assent (usually for back-office integration apps).</td>
<td>
                <a href="https://developer.concur.com/node/711">Native Flow</a></td>
</tr>
<tr>
<td>
                Inform the end-user how your app will access their data.</td>
<td>
<a href="https://developer.concur.com/node/494">Web Flow</a><br />
                    <a href="https://developer.concur.com/node/712">App Center Flow</a>
</td>
</tr>
<tr>
<td>
                Have an end-user-facing app but do not intend to distribute it in the App Center.</td>
<td>
                <a href="https://developer.concur.com/node/494">Web Flow</a></td>
</tr>
<tr>
<td>
                Distribute your app in the App Center and are not a TripLink supplier.</td>
<td>
                <a href="https://developer.concur.com/node/712">App Center Flow</a></td>
</tr>
<tr>
<td>
                Distribute your app in the App Center and are a TripLink supplier.</td>
<td>
                <a href="https://developer.concur.com/node/745">Auto-Connect Flow</a></td>
</tr>
</tbody>
</table>

