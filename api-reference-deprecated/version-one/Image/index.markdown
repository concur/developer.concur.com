---
title: Imaging Web Service 
layout: reference
---

## Description
The Concur Imaging Web service allows clients to manage the receipt images attached to expense reports and the images attached to invoices. Clients can retrieve existing images by reportID, image ID, or invoiceID, and upload new images to a user, expense entry, report, or invoice.

## Product Restrictions
Concur products are highly configurable, and not all clients will have access to all features.

Partner developers must determine which configurations are required for their solution prior to the review process. Use the [Developer Forum](http://forum.developer.concur.com/){:target="_blank"} if you have questions about the configuration settings.

Existing clients can work with Concur Advantage Technical Services to create custom applications that work with their configuration.

## Image Format
The Imaging web service supports the following image formats:

* application/pdf
* image/jpg
* image/jpeg
* image/png

The maximum file size allowed is 10 MB.

**NOTE**: PDF images cannot be encrypted or password protected.

To post images, pass in the image binary data as a byte array. The following example in C# illustrates how to read the source image file as an array of bytes and pass that data into the request.

####  C# Example

```csharp
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
```

## See also

The version 3.0 documentation includes the data model and tools to send test requests to your developer sandbox:

[Version 3.0 Receipt Images ][3]

Version 1.0 documentation includes the data model and example requests and responses:

[Version 1.0 Image][4]

[Version 1.0 Image URL][5]



[3]: /api-reference/image/index.html
[4]: /api-reference-deprecated/version-one/Image/image-resource.html
[5]: /api-reference-deprecated/version-one/Image/image-url-resource.html

