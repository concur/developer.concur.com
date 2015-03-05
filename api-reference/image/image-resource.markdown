---
title: Image Resource 
layout: resource
---

## Description
The Image resource represents a receipt image or an invoice image. The [ReceiptImages][1] version 3 API supersedes the Image resource.

## Version
1.0

## URI
`https://www.concursolutions.com/api/image/v1.0/`

## Headers

### Content-Type header
The Image resource supports the following content types:

* application/pdf
* image/jpg
* image/jpeg
* image/png

**NOTE**: PDF images cannot be encrypted or password protected.

### Accept header
application/xml

## Operations
[POST][2]

## See also
[Image URL][3]    
[ReceiptImages][1]

  

[1]: https://www.concursolutions.com/api/docs/index.html#!/ReceiptImages
[2]: https://developer.concur.com/imaging/image-resource/image-resource-post
[3]: https://developer.concur.com/imaging/image-url-resource
