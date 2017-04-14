### Get an entry image URL

```bash
# Endpoint
GET /api/image/v1.0/expenseentry/{entryId}
```

Retrieves the URL for the receipt image associated with the expense entry that matches the supplied entry ID.

#### Request

```http
GET /api/image/v1.0/expenseentry/A2C40CEE415B43B2A0BE HTTPS/1.1
Host: www.concursolutions.com
Authorization: OAuth {access token}
```

* **Path parameters**

  | Parameter | Required/Optional | Description |
  |-----------|-----------|---------------------|
  | `expenseentry/{entryId}` | required | The identifier for the desired entry, and the `expenseentry` keyword. <br><br> **URI Source**: The entryId is returned in the `RpeKey` element within the `ExpenseEntry` element of the [Get Report Details](/api-reference/expense/expense-report/expense-report-get.html) response. |

* **Headers**

  | Name | Description |
  | ---- | ----------- |
  | `Accept` | `application/xml` |
  | `Authorization` | Authorization header with OAuth token for valid Concur user. The OAuth consumer must be the owner of the report that the expense entry belongs to. |

#### Response

```http
HTTPS/1.1 200 OK
Content-Type: application/xml

<Image xmlns="http://www.concursolutions.com/api/image/2011/02"
       xmlns:i="http://www.w3.org/2001/XMLSchema-instance">
      <Id>A2C40CEE415B43B2A0BE</Id>
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
    | `Url` | The URL for the entry image. Note that special characters will be XML-encoded. You will need to unencode any special characters before using the link.|
