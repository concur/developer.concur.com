### Get a receipt image URL

```bash
# Endpoint
GET /api/image/v1.0/receipt/{imageId}
```

Retrieves the URL for the specified receipt image. The URL is valid for 30 minutes after the request.

#### Request

```http
GET /api/image/v1.0/receipt/aBcDeMwbl34xnwdkUw5ZjDsggDl2$pyoy31$pnGaHAywmPrpbAmE HTTPS/1.1
Host: www.concursolutions.com  
Authorization: OAuth {access token}   
...
```

* **Path parameters**

  | Parameter | Required/Optional | Description |
  |-----------|-----------|---------------------|
  | `receipt/{imageId}` | required | The identifier for the image and the `receipt` keyword. |

* **Headers**

  | Name | Description |
  | ---- | ----------- |
  | `Accept` | application/xml |
  | `Authorization` | Authorization header with OAuth token for valid Concur user. Required. The OAuth consumer must be the owner of the report that the image belongs to. |

#### Response

```http
HTTPS/1.1 200 OK
Content-Type: application/xml

<Image xmlns="http://www.concursolutions.com/api/image/2011/02"
       xmlns:i="http://www.w3.org/2001/XMLSchema-instance">
    <Id>aBcDeMwbl34xnwdkUw5ZjDsggDl2$pyoy31$pnGaHAywmPrpbAmE</Id>  
    <Url>https://api.example.com/getImage?cid=able999999&amp;val=F9B35244G86</Url>
</Image>  
```

* **Content-Types**
  * application/xml
* **Content body**
  This request will return an **`Image`** parent element.

  * **`Image` elements**

    | Element |  Description |
    |-----------|---------------------|
    | `Id` | The unique identifier of the image. |
    | `Url` | The URL for the receipt image. Note that special characters will be XML-encoded. You will need to unencode any special characters before using the link.|
