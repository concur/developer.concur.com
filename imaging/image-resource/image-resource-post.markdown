---
title: Image Resource
layout: operation
---

## Description
Uploads a receipt image and associates it with the OAuth consumer. The user can view the image in the receipt management section of Concur.
**NOTE**: The documentation for the version 3.0 Receipt Images resource can be found [here][1].

## Request
```
POST https://www.concursolutions.com/api/image/v1.0/receipt HTTP/1.1
Authorization: OAuth {access token}
Content-Length: 65536
Content-Type: image/jpeg
... image ...
```
###  Post Image to Entry Request
Uploads a receipt image and associates it with the expense entry that matches the supplied entry ID. Once an image is attached to the entry, you cannot append additional images.
```
Containing partial 64 bit encoded string representation of image

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
```
###  Post Image to Payment Request Request
Uploads an invoice image and associates it with the invoice that matches the supplied request ID. Each invoice is uniquely identified by the request ID value. Once an image is attached to the invoice, you cannot append additional images.
**NOTE**: The Concur Invoice product is required to use this endpoint. Currently you must use the Invoice user interface to get the Request ID value.
```
POST https://www.concursolutions.com/api/image/v1.1/invoice/884E2WRE415B43B2A0BE HTTP/1.1
Authorization: OAuth {access token}
Content-Length: 65536
Content-Type: image/jpeg
... image ...
```

###  Post Image to Report Request
Uploads a receipt image and associates it with the report that matches the supplied report ID. If a report image already exists for the report, the new image will be appended to the existing image.
```
    POST https://www.concursolutions.com/api/image/v1.0/report/A2C40CEE415B43B2A0BE HTTP/1.1
    Authorization: OAuth {access token}
    Content-Length: 65536
    Content-Type: image/jpeg
    ... image ...
```

### Request parameters
* **receipt**  
Keyword specifying this is a receipt image.
Example: https://www.concursolutions.com/api/image/v1.0/receipt
* **expenseentry/{_entryID_}**  
Unique identifier for the entry and **expenseentry** keyword.
Example: https://www.concursolutions.com/api/image/v1.0/expenseentry/{_entryId_}
* **invoice/{_requestID_}**  
The identifier for the invoice and the invoice keyword.
Example: https://www.concursolutions.com/api/image/v1.0/invoice/{_requestId_}
* **report/{_reportID_**}  
The identifier for the report and the **report** keyword.
Example: https://www.concursolutions.com/api/image/v1.0/report/{_reportId_}

### Content types
* application/pdf
* image/jpg
* image/jpeg
* image/png
**NOTE**: PDF images cannot be encrypted or password protected.
[Byte array][2] containing the image data.

### Authorization header
Authorization header with OAuth token for valid Concur user.
The Concur user that authenticates during the OAuth process for this request must either be the user associated with this image, or have one of the following user roles in Concur: Company Administrator or Web Services Administrator for Professional, or Can Administer for Standard.

These administrative roles allow the user to manage data for the entire company.

## Response
### Post Receipt Image Response
```
    201 Created
    Content-Type: application/xml

    <Image xmlns="http://www.concursolutions.com/api/image/2011/02"
           xmlns:i="http://www.w3.org/2001/XMLSchema-instance">
        <Id>aBcDeMwbl34xnwdkUw5ZjDsggDl2$pyoy31$pnGaHAywmPrpbAmE</Id>
        <Url />
    </Image>
```
###  Post Image to Entry Response
```
    201 Created
    Content-Type: application/xml

    <Image xmlns="http://www.concursolutions.com/api/image/2011/02"
               xmlns:i="http://www.w3.org/2001/XMLSchema-instance">
        <Id>A2C40CEE415B43B2A0BE</Id>
        <Url />
    </Image>
```
###  Post Image to Payment Request Response
```
201 Created
    Content-Type: application/xml

    <Image xmlns="http://www.concursolutions.com/api/image/2011/02"
           xmlns:i="http://www.w3.org/2001/XMLSchema-instance">
        <Id>884E2WRE415B43B2A0BE</Id>
        <Url />
    </Image>
```
###  Post Image to Report Response
```
201 Created
    Content-Type: application/xml

    <Image xmlns="http://www.concursolutions.com/api/image/2011/02"
           xmlns:i="http://www.w3.org/2001/XMLSchema-instance">
        <Id>A2C40CEE415B43B2A0BE</Id>
        <Url />
    </Image>
```

### Response root elements

|  Element |  Description |
| -------- | ------------ |
|  Id |  The unique identifier of the image. |
|  Url |  The URL for the image. This element is empty when uploading images. |

[1]: https://www.concursolutions.com/api/docs/index.html#!/ReceiptImages
[2]: https://developer.concur.com/node/388#imageformat
[3]: https://developer.concur.com/reference/http-codes
