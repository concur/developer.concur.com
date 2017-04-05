---
title: Receipt Image
layout: reference
---

# Receipt Image
* [Retrieve a list of all receipt images](#get)
* [Retrieve a receipt image by ID](#getID)
* [Create a new receipt image](#post)
* [Append a receipt image](#put)
* [Delete a receipt image](#delete)
* [Schema](#schema)

### Version
3.0

1.0 documentation is available [here][4]  

1.0 Image URL documentation is available [here][5]



## <a name="get"></a>Retrieve a list of all receipt images

    GET  /api/v3.0/expense/receiptimages

        
### Parameters

Name | Type | Format | Description
-----|------|--------|------------			
`offset`	|	`string`	|	`query`	|	Starting page offset
`limit`	|	`Int32`	|	`query`	|	Number of records to return (default 25)
`user`	|	`string`	|	`query`	|	The login ID of the user. Optional. The user must have the Web Services Admin (Professional) or Can Administer (Standard) user role to use this parameter.



## <a name="getID"></a>Retrieve a receipt image by ID

    GET  /api/v3.0/expense/receiptimage/{id}


### Parameters

Name | Type | Format | Description
-----|------|--------|------------
`id`	|	`string`	|	`path`	|	**Required** ReceiptImage ID
`user`	|	`string`	|	`query`	|	The login ID of the user. Optional. The user must have the Web Services Admin (Professional) or Can Administer (Standard) user role to use this parameter.


## <a name="post"></a>Create a new receipt image

    POST  /api/v3.0/expense/receiptimages


### Parameters

Name | Type | Format | Description
-----|------|--------|------------
`user`	|	`string`	|	`query`	|	The login ID of the user. Optional. The user must have the Web Services Admin (Professional) or Can Administer (Standard) user role to use this parameter.
`image`	|	`file`	|	`body`	|	**Required** Image data file


## <a name="put"></a>Append a receipt image

    PUT  /api/v3.0/expense/receiptimage/{id}


### Parameters

Name | Type | Format | Description
-----|------|--------|------------
`id`	|	`string`	|	`path`	|	**Required** ID of the receipt image to update
`user`	|	`string`	|	`query`	|	The login ID of the user. Optional. The user must have the Web Services Admin (Professional) or Can Administer (Standard) user role to use this parameter.
`image`	|	`file`	|	`body`	|	**Required** Image data file


## <a name="delete"></a>Delete a receipt image

    DELETE  /api/v3.0/expense/receiptimage/{id}


### Parameters

Name | Type | Format | Description
-----|------|--------|------------
`id`	|	`string`	|	`path`	|	**Required** ID of the receipt image to delete
`user`	|	`string`	|	`query`	|	The login ID of the user. Optional. The user must have the Web Services Admin (Professional) or Can Administer (Standard) user role to use this parameter.



## <a name="schema"></a>Schema


### Receipt Images

Name | Type | Format | Description
-----|------|--------|------------
`Items`	|	Array	|	[Receipt Image](#receiptimage)	|	The result collection.
`NextPage`	|	string	|	-	|	The URI of the next page of results, if any.


### <a name="receiptimage"></a>Receipt Image

Name | Type | Format | Description
-----|------|--------|------------
`ID`	|	string	|	-	|	The unique identifier of the resource.
`URI`	|	string	|	-	|	The URI to the resource.






[4]: /api-reference-deprecated/version-one/Image/index.html
[5]: /api-reference-deprecated/version-one/Image/image-url-resource.html

