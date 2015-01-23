
        <div id="main" class="container">
            <div>
                            </div>
            <div class="row">
                <div class="span12">
<div class="breadcrumbs"><a href="/">Home</a>Image Resource: POST</div>
                </div>
            </div>

            <div id="content-wrapper">
<!-- <div class="row"> -->
                <div id="content" class="span9">
            # Image Resource: POST
                    <div class="section">
                    <div id="node-391" class="node clear-block">


    
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
This resource supports the following POST actions:
**NOTE**: The documentation for the version 3.0 Receipt Images resource can be found <a href="https://www.concursolutions.com/api/docs/index.html#!/ReceiptImages">here</a>.

    * 
        <a href="#postimage">Post Receipt Image </a>
    * 
        <a href="#postimagetoentry">Post Image to Entry </a>
    * 
        <a href="#postimagetopaymentrequest">Post Image to Payment Request</a>
    * 
        <a href="#postimagetoreport">Post Image to Report</a>

## 
    <a id="postimage" name="postimage"></a>Post Receipt Image Request
<table border="1" bordercolor="#DBDBDB" cellpadding="3" cellspacing="0" width="100% ">
    <tbody>
        <tr class="GrayTableHead">
            <td>
                Description</td>
            <td>
                Supported Content Types</td>
        </tr>
        <tr>
            <td>
                Uploads a receipt image and associates it with the OAuth consumer. The user can view the image in the receipt management section of Concur.</td>
            <td>
                
                    * 
                        application/pdf
                    * 
                        image/jpg
                    * 
                        image/jpeg
                    * 
                        image/png
                
                **NOTE**: PDF images cannot be encrypted or password protected.</td>
        </tr>
        <tr class="GrayTableHead">
            <td>
                Query Parameters - Required</td>
            <td>
                Query Parameters - Optional</td>
        </tr>
        <tr>
            <td valign="top">
                
                    * 
                        **receipt**<br />
                        Keyword specifying this is a receipt image.
                
                Example: https://www.concursolutions.com/api/image/v1.0/receipt</td>
            <td valign="top">
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
        <tr class="GrayTableHead">
            <td colspan="2">
                Content Body</td>
        </tr>
        <tr>
            <td colspan="2">
                <a href="https://developer.concur.com/node/388#imageformat">Byte array</a> containing the image data.</td>
        </tr>
    </tbody>
</table>
####
    XML Example Request
<pre class="overflow_box">
POST https://www.concursolutions.com/api/image/v1.0/receipt HTTP/1.1
Authorization: OAuth {access token}
Content-Length: 65536 
Content-Type: image/jpeg 
... image ...
</pre>
## 
    Post Receipt Image Response
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
                This request will return an **Image** parent element, with the following child elements:<br />
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
                                Id</td>
                            <td valign="top">
                                The unique identifier of the image.</td>
                        </tr>
                        <tr>
                            <td valign="top">
                                Url</td>
                            <td valign="top">
                                The URL for the image. This element is empty when uploading images.</td>
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
201 Created
Content-Type: application/xml

<Image <span class="xml-attribute">xmlns=<span class="xml-value">&quot;<span class="xml-value">http://www.concursolutions.com/api/image/2011/02<span class="xml-value">&quot;
       <span class="xml-attribute">xmlns:i=<span class="xml-value">&quot;<span class="xml-value">http://www.w3.org/2001/XMLSchema-instance<span class="xml-value">&quot;>
    <Id>aBcDeMwbl34xnwdkUw5ZjDsggDl2$pyoy31$pnGaHAywmPrpbAmE</Id>
    <Url />
</Image>
</pre>
## 
    <a id="postimagetoentry" name="postimagetoentry"></a>Post Image to Entry Request
<table border="1" bordercolor="#DBDBDB" cellpadding="3" cellspacing="0" width="100% ">
    <tbody>
        <tr class="GrayTableHead">
            <td>
                Description</td>
            <td>
                Supported Content Types</td>
        </tr>
        <tr>
            <td>
                Uploads a receipt image and associates it with the expense entry that matches the supplied entry ID. Once an image is attached to the entry, you cannot append additional images.</td>
            <td>
                
                    * 
                        application/pdf
                    * 
                        image/jpg
                    * 
                        image/jpeg
                    * 
                        image/png
                
                **NOTE**: PDF images cannot be encrypted or password protected.</td>
        </tr>
        <tr class="GrayTableHead">
            <td>
                Query Parameters - Required</td>
            <td>
                Query Parameters - Optional</td>
        </tr>
        <tr>
            <td>
                
                    * 
                        **expenseentry/{<em>entryID</em>}**<br />
                        Unique identifier for the entry and **expenseentry** keyword.
                
                Example: https://www.concursolutions.com/api/image/v1.0/expenseentry/{<em>entryId</em>}</td>
            <td valign="top">
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
                Authorization header with OAuth token for valid Concur user.<br />
                <br />
                The Concur user that authenticates during the OAuth process for this request must either be the user associated with this image, or have one of the following user roles in Concur: Company Administrator or Web Services Administrator for Professional, or Can Administer for Standard.<br />
                <br />
                These administrative roles allow the user to manage data for the entire company.</td>
            <td valign="top" width="50%">
                None</td>
        </tr>
        <tr class="GrayTableHead">
            <td colspan="2">
                Content Body</td>
        </tr>
        <tr>
            <td colspan="2">
                <a href="https://developer.concur.com/node/388#imageformat">Byte array</a> containing the image data.</td>
        </tr>
    </tbody>
</table>
####
    Example Request
Containing partial 64 bit encoded string representation of image
<pre class="overflow_box">
POST https://www.concursolutions.com/api/image/v1.0/expenseentry/A2C40CEE415B43B2A0BE HTTP/1.1
Authorization: OAuth {access token}
Content-Length: 65536 
Content-Type: image/jpeg
/9j/4AAQSkZJRgABAQEAyADIAAD/2wBDAAgGBgcGBQgHBwcJCQgKDBQNDAsLDBkSEw8UHRofHh0a
HBwgJC4nICIsIxwcKDcpLDAxNDQ0Hyc5PTgyPC4zNDL/2wBDAQkJCQwLDBgNDRgyIRwhMjIyMjIy
MjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjL/wAARCAkiBqQDASIA
AhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQA
AAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3
ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWm
p6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEA
AwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSEx
BhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElK
U1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3
uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwDt/An2
Nfil8QorDyBaw/2bAiQY2R7IGQoAOBtKlcdsY7V6RXkfg26ubH9oHxxpDPHLFdW8V40h3lgVEexQ
WduAs5B7fKNoUfKPXKACiiigAooooAKKKKACiiigAooooAKKKw9X07Vb3xBoktvcxppNu8sl9F58
kUjvgeSV2Y3AMGDK52kNypIGADYgnhureK4t5Y5oJUDxyRsGV1IyCCOCCOc1JRRQAUUUUAFFFFAB
RRRQAUUUUAFY/h7xVoXiuzN1oepwXsa/fCEh48kgbkOGXO04yBnGRxWxRQAUUUUAFFFFAHF3/wAQ
205/Km8F+LpJw5Vo7fTlmCjapDb0coQdxHysSCrAgcZsL4/sy9kp0LxOouELSsdEuMWpCg7ZPlyS
Tx8m8ZHUDmusooA4vUviVp9lcLb2mg+J9Tn2B5Y7TR5g0KkkKWEoQ4Yq4BGfuN6VcuPF1/bSxxye
CvEZaT7pjW1kA+ZV5KzkDlx1xwGPRWI6iigDl4da8XXd5crD4QgtLWPb5Umpaskby5HPywpKBg+r
c5B9QNzTZNSlt2bVLS0tp95Cpa3LTqVwOSzRoQc54x2HPPFyigAooooAKKKKACiiigAooooAKKKK
ACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACo4J4bq3iuL
......
</pre>
## 
    Post Image to Entry Response
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
                This request will return an **Image** parent element, with the following child elements:<br />
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
                                Id</td>
                            <td valign="top">
                                The unique identifier of the image.</td>
                        </tr>
                        <tr>
                            <td valign="top">
                                Url</td>
                            <td valign="top">
                                The URL for the image. This element is empty when uploading images.</td>
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
201 Created
Content-Type: application/xml

<Image <span class="xml-attribute">xmlns=<span class="xml-value">&quot;<span class="xml-value">http://www.concursolutions.com/api/image/2011/02<span class="xml-value">&quot;
           <span class="xml-attribute">xmlns:i=<span class="xml-value">&quot;<span class="xml-value">http://www.w3.org/2001/XMLSchema-instance<span class="xml-value">&quot;>
    <Id>A2C40CEE415B43B2A0BE</Id>
    <Url />
</Image>
</pre>
## 
    <a id="postimagetopaymentrequest" name="postimagetopaymentrequest"></a>Post Image to Payment Request Request
<table border="1" bordercolor="#DBDBDB" cellpadding="3" cellspacing="0" width="100% ">
    <tbody>
        <tr class="GrayTableHead">
            <td>
                Description</td>
            <td>
                Supported Content Types</td>
        </tr>
        <tr>
            <td>
                Uploads an invoice image and associates it with the invoice that matches the supplied request ID. Each invoice is uniquely identified by the request ID value. Once an image is attached to the invoice, you cannot append additional images.<br />
                <br />
                **NOTE**: The Concur Invoice product is required to use this endpoint. Currently you must use the Invoice user interface to get the Request ID value.</td>
            <td>
                
                    * 
                        application/pdf
                    * 
                        image/jpg
                    * 
                        image/jpeg
                    * 
                        image/png
                
                **NOTE**: PDF images cannot be encrypted or password protected.</td>
        </tr>
        <tr class="GrayTableHead">
            <td>
                Query Parameters - Required</td>
            <td>
                Query Parameters - Optional</td>
        </tr>
        <tr>
            <td>
                
                    * 
                        **invoice/{<em>requestID</em>}**<br />
                        The identifier for the invoice and the invoice keyword.
                
                Example: https://www.concursolutions.com/api/image/v1.0/invoice/{<em>requestId</em>}</td>
            <td valign="top">
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
                Authorization header with OAuth token for valid Concur user.<br />
                <br />
                The Concur user that authenticates during the OAuth process for this request must either be the user associated with this image, or have one of the following user roles in Concur: Company Administrator or Web Services Administrator for Professional, or Can Administer for Standard.<br />
                <br />
                These administrative roles allow the user to manage data for the entire company.</td>
            <td valign="top" width="50%">
                None</td>
        </tr>
        <tr class="GrayTableHead">
            <td colspan="2">
                Content Body</td>
        </tr>
        <tr>
            <td colspan="2">
                <a href="https://developer.concur.com/node/388#imageformat">Byte array</a> containing the image data.</td>
        </tr>
    </tbody>
</table>
####
    XML Example Request
<pre class="overflow_box">
POST https://www.concursolutions.com/api/image/v1.1/invoice/884E2WRE415B43B2A0BE HTTP/1.1
Authorization: OAuth {access token}
Content-Length: 65536 
Content-Type: image/jpeg 
... image ... 
</pre>
## 
    Post Image to Payment Request Response
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
                <a href="https://developer.concur.com/node/205">HTTP Status Codes</a>
            </td>
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
                This request will return an **Image** parent element, with the following child elements:<br />
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
                                Id</td>
                            <td valign="top">
                                The unique identifier of the image.</td>
                        </tr>
                        <tr>
                            <td valign="top">
                                Url</td>
                            <td valign="top">
                                The URL for the image. This element is empty when uploading images.</td>
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
201 Created
Content-Type: application/xml

<Image <span class="xml-attribute">xmlns=<span class="xml-value">&quot;<span class="xml-value">http://www.concursolutions.com/api/image/2011/02<span class="xml-value">&quot;
       <span class="xml-attribute">xmlns:i=<span class="xml-value">&quot;<span class="xml-value">http://www.w3.org/2001/XMLSchema-instance<span class="xml-value">&quot;>
    <Id>884E2WRE415B43B2A0BE</Id>
    <Url />
</Image>
</pre>
## 
    <a id="postimagetoreport" name="postimagetoreport"></a>Post Image to Report Request
<table border="1" bordercolor="#DBDBDB" cellpadding="3" cellspacing="0" width="100% ">
    <tbody>
        <tr class="GrayTableHead">
            <td>
                Description</td>
            <td>
                Supported Content Types</td>
        </tr>
        <tr>
            <td>
                Uploads a receipt image and associates it with the report that matches the supplied report ID. If a report image already exists for the report, the new image will be appended to the existing image.</td>
            <td>
                
                    * 
                        application/pdf
                    * 
                        image/jpg
                    * 
                        image/jpeg
                    * 
                        image/png
                
                **NOTE**: PDF images cannot be encrypted or password protected.</td>
        </tr>
        <tr class="GrayTableHead">
            <td>
                Query Parameters - Required</td>
            <td>
                Query Parameters - Optional</td>
        </tr>
        <tr>
            <td>
                
                    * 
                        **report/{<em>reportID</em>**}<br />
                        The identifier for the report and the **report** keyword.
                
                Example: https://www.concursolutions.com/api/image/v1.0/report/{<em>reportId</em>}</td>
            <td valign="top">
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
                Authorization header with OAuth token for valid Concur user. The Concur user that authenticates during the OAuth process for this request must either be the user associated with this image, or have one of the following user roles in Concur: Company Administrator or Web Services Administrator for Professional, or Can Administer for Standard. These administrative roles allow the user to manage data for the entire company.</td>
            <td valign="top" width="50%">
                None</td>
        </tr>
        <tr class="GrayTableHead">
            <td colspan="2">
                Content Body</td>
        </tr>
        <tr>
            <td colspan="2">
                <a href="https://developer.concur.com/node/388#imageformat">Byte array</a> containing the image data.</td>
        </tr>
    </tbody>
</table>
####
    XML Example Request
<pre class="overflow_box">
POST https://www.concursolutions.com/api/image/v1.0/report/A2C40CEE415B43B2A0BE HTTP/1.1
Authorization: OAuth {access token}
Content-Length: 65536 
Content-Type: image/jpeg
... image ... 
</pre>
## 
    Post Image to Report Response
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
                <a href="https://developer.concur.com/node/205">HTTP Status Codes</a>
            </td>
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
                This request will return an **Image** parent element, with the following child elements:<br />
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
                                Id</td>
                            <td valign="top">
                                The unique identifier of the image.</td>
                        </tr>
                        <tr>
                            <td valign="top">
                                Url</td>
                            <td valign="top">
                                The URL for the image. This element is empty when uploading images.</td>
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
201 Created
Content-Type: application/xml

<Image <span class="xml-attribute">xmlns=<span class="xml-value">&quot;<span class="xml-value">http://www.concursolutions.com/api/image/2011/02<span class="xml-value">&quot;
       <span class="xml-attribute">xmlns:i=<span class="xml-value">&quot;<span class="xml-value">http://www.w3.org/2001/XMLSchema-instance<span class="xml-value">&quot;>
    <Id>A2C40CEE415B43B2A0BE</Id>
    <Url />
</Image>
</pre>
<br />
