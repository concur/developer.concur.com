---
title: Imaging Web Service 
layout: conceptual
---





| ----- |
|  Description |
|  The Concur Imaging web service allows clients to manage the receipt images attached to expense reports and the images attached to invoices. Clients can retrieve existing images by reportID, image ID, or invoiceID, and upload new images to a user, expense entry, report, or invoice. |
|  Works With These Concur Products |
|

* **Expense** for Concur Professional/Premium
* **Expense** for Concur Standard
* **Invoice** for Concur Professional/Premium
 |
|  Concur Connect API Structure |
|  Refer to **Web Services > [Core Concepts][1]** for:
* Detailed information regarding the format, structure and process of making calls to a Concur Web Service.
* Information on authentication and authorization for all Concur Web Services.
* Information on registering and enabling partner applications to use Concur Web Services.
 |
|  Product Restrictions |
|  Concur products are highly configurable, and not all clients will have access to all features.

Partner developers must determine which configurations are required for their solution prior to the review process. Use the [Developer Forum][2] if you have questions about the configuration settings.

Existing clients can work with Concur Advantage Technical Services to create custom applications that work with their configuration.

 |
|  Image Format |
|  The Imaging web service supports the following image formats:

* application/pdf
* image/jpg
* image/jpeg
* image/png
The maximum file size allowed is 10 MB.

**NOTE**: PDF images cannot be encrypted or password protected.

To post images, pass in the image binary data as a byte array. The following example in C# illustrates how to read the source image file as an array of bytes and pass that data into the request.

####  C# Example

    HttpWebRequest request = (HttpWebRequest)WebRequest.Create(url);
    request.Method = "POST";
    request.ContentType = "application/pdf";
    request.Headers.Add("Authorization", signature);
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

 |
|  Resources |
|

The version 3.0 documentation includes the data model and tools to send test requests to your developer sandbox.

[Version 3.0 Receipt Images ][3]

Version 1.0 documentation includes the data model and example requests and responses.

[Version 1.0 Image][4]

[Version 1.0 Image URL][5]

 |
|  Additional Information |
|

Responses and Errors

 |

##  Responses and Errors

Refer to the [HTTP Codes][6] page for details of the common responses and errors.

  


[1]: https://developer.concur.com/api-documentation/core-concepts
[2]: https://developer.concur.com/forums/concur-connect
[3]: https://www.concursolutions.com/api/docs/index.html#!/ReceiptImages
[4]: https://developer.concur.com/imaging/image-resource
[5]: https://developer.concur.com/imaging/image-url-resource
[6]: https://developer.concur.com/reference/http-codes
