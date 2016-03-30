---
title: Digital Tax Invoices
layout: reference
reference-type: swagger
---

###GET Digital Tax Invoices
This endpoint allows users to GET all digital tax invoices that can be validated by the user based on the search criteria.

####Parameters 
Parameters | Value | Description | Parameter Type | Data Type
---------- | ----- | ----------- | -------------- | ---------
offset | | The starting point of the next set of results, after the limit specified in the limit field has been reached. | query | string
limit | | The number of records to return. Default value: 25. | query | integer
modifiedafter | | A modification date for the queue record; this parameter can be used to limit the results of the GET request to the queue items that have been added since the last time the validation company queried the queue. The user must have the Web Services Admin role to use this parameter. | query | string

#####Request URL
```
https://www.concursolutions.com/api/v3.0/expense/digitaltaxinvoices?limit=5&modifiedafter=5-31-2015
```

#####XML Example of a successful response
```
<DigitalTaxInvoices xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
  <Items />
  <NextPage xsi:nil="true" />
</DigitalTaxInvoices>
```

###GET Digital Tax Invoices by ID
This endpoint allows users to GET digital tax invoices by ID.

####Parameters 
Parameters | Value | Description | Parameter Type | Data Type
---------- | ----- | ----------- | -------------- | ---------
id |**Required** | The ID of the digital tax invoice | path | string


#####Request URL
```
https://www.concursolutions.com/api/v3.0/expense/digitaltaxinvoices/<digital_tax_invoice_ID>
```

#####XML Example of a successful response
```
Placeholder
```

###PUT Digital Tax Invoices by ID
This endpoint allows users to update the specified digital tax invoice by ID.

####Parameters 
Parameters | Value | Description | Parameter Type | Data Type
---------- | ----- | ----------- | -------------- | ---------
content | **Required** | A status update for the digital tax invoice | body | Model Schema - Click to set as parameter value

####Request URL
```
https://www.concursolutions.com/api/v3.0/expense/digitaltaxinvoices/<ID_of_the_digital_tax_invoice>
```

####XML Example of a successful response
```
Placeholder
```



{% swagger /api-explorer/v3-0/DigitalTaxInvoices.swagger2.json %}
