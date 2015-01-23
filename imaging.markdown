
        <div id="main" class="container">
            <div>
                            </div>
            <div class="row">
                <div class="span12">
<div class="breadcrumbs"><a href="/">Home</a>Imaging Web Service</div>
                </div>
            </div>

            <div id="content-wrapper">
<!-- <div class="row"> -->
                <div id="content" class="span9">
            # Imaging Web Service
                    <div class="section">
                    <div id="node-388" class="node clear-block">


    
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
            <td>
                Description</td>
        </tr>
        <tr>
            <td>
                The Concur Imaging web service allows clients to manage the receipt images attached to expense reports and the images attached to invoices. Clients can retrieve existing images by reportID, image ID, or invoiceID, and upload new images to a user, expense entry, report, or invoice.</td>
        </tr>
        <tr class="GrayTableHead">
            <td>
                Works With These Concur Products</td>
        </tr>
        <tr>
            <td>
                
                    * 
                        **Expense** for Concur Professional/Premium
                    * 
                        **Expense** for Concur Standard
                    * 
                        **Invoice** for Concur Professional/Premium
                
            </td>
        </tr>
        <tr class="GrayTableHead">
            <td>
                Concur Connect API Structure</td>
        </tr>
        <tr>
            <td>
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
            <td>
                Product Restrictions</td>
        </tr>
        <tr>
            <td>
                Concur products are highly configurable, and not all clients will have access to all features.<br />
                <br />
                Partner developers must determine which configurations are required for their solution prior to the review process. Use the <a href="https://developer.concur.com/forums/concur-connect">Developer Forum</a> if you have questions about the configuration settings.<br />
                <br />
                Existing clients can work with Concur Advantage Technical Services to create customapplications that work with their configuration.</td>
        </tr>
        <tr class="GrayTableHead">
            <td>
                <a id="imageformat" name="imageformat"></a>Image Format</td>
        </tr>
        <tr>
            <td>
                The Imaging web service supports the following image formats:
                
                    * 
                        application/pdf
                    * 
                        image/jpg
                    * 
                        image/jpeg
                    * 
                        image/png
                
                The maximum file size allowed is 10 MB.<br />
                <br />
                **NOTE**: PDF images cannot be encrypted or password protected.<br />
                <br />
                To post images, pass in the image binary data as a byte array. The following example in C# illustrates how to read the source image file as an array of bytes and pass that data into the request.
                ####
                    C# Example
                <pre class="overflow_box">
HttpWebRequest request = (HttpWebRequest)WebRequest.Create(url);
request.Method = &quot;POST&quot;;
request.ContentType = &quot;application/pdf&quot;;
request.Headers.Add(&quot;Authorization&quot;, signature);
.
.
.
using (FileStream fs = new FileStream(pathToImageFile, FileMode.Open, FileAccess.Read))
{
    using (BinaryReader br = new BinaryReader(fs))
    {
        byte[] image = br.ReadBytes((int)fs.Length);
        request.ContentLength = image.Length;

        Stream ds = request.GetRequestStream();
        ds.Write(image, 0, image.Length);
        ds.Close();
    }
}

HttpWebResponse webresponse = request.GetResponse(); 
</pre>
            </td>
        </tr>
        <tr class="GrayTableHead">
            <td>
                Resources</td>
        </tr>
        <tr>
            <td>
                The version 3.0 documentation includes the data model and tools to send test requests to your developer sandbox.<br />
                    <br />
                    <a href="https://www.concursolutions.com/api/docs/index.html#!/ReceiptImages" target="_blank">Version 3.0 Receipt Images </a><br />
                    <br />
                    Version 1.0 documentation includes the data model and example requests and responses.
                <a href="https://developer.concur.com/node/389">Version 1.0 Image</a>
                <a href="https://developer.concur.com/node/393">Version 1.0 Image URL</a>
            </td>
        </tr>
        <tr class="GrayTableHead">
            <td>
                Additional Information</td>
        </tr>
        <tr>
            <td>
                <a href="#responses">Responses and Errors</a>
            </td>
        </tr>
    </tbody>
</table>
## 
    <a name="reponses"></a>Responses and Errors
Refer to the <a href="https://developer.concur.com/node/205">HTTP Codes</a> page for details of the common responses and errors.
<br />
