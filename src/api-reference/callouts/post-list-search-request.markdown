---
title: Post a list search request
layout: reference
---

* [Request](#request)
  * [Request Schema](#req-schema)
  * [Request Examples](#req-examples)
* [Response](#response)
  * [Response Schema](#res-schema)
  * [Response Examples](#res-examples)

## <a name="request"></a>Request

### Supported Accept Types
application/xml

### URI
The Fetch List callout sends the attendee information to a URI for the application connector, which can be in a custom location for each client. The standard location is:

    https://{servername}/concur/list/v1.2/fetch

The URI is configured on the **Register Application Connector** page in **Web Services** under **Administration**.

### Request Headers - Required
Authorization header with Basic authorization for endpoint. Refer to [**Authentication**][1] for more information.

### Request Headers - Optional
None

### <a name="req-schema"></a>Request Schema
The request will contain a **fetch-list-request** parent element, containing the following child elements.

|  Element |  Description |
|--------------|--------------|
|`long-code`|The long code is a concatenated string containing the parent list item keys separated by a hyphen (-).|
|`short-code`|The short code is the key of the parent list item. |
|`query`|It is possible that the asterisk wildcard will be passed from Expense to the application connector. <ul><li>Asterisk only (\*) - Return all items in the list represented by the long code.</li><li>Text followed by asterisk (West\*) - Return all items beginning with the text.</li><li>Asterisk followed by text - Return all items ending with the text.</li></ul>|
|`search-by`|Indicates which list item attribute should be searched. Supported values: `TEXT`, `CODE`.<br/>**NOTE**: The application connector must support both attributes in order to properly handle wildcard searches.|
|`lang-code`|The two character code for the language of the user.|
|`num-to-return`|Expense will specify the number of items to return. The application connector must use this value to ensure that it does not return more results than requested. There is a system limit of 1000 items.|
|`protected-list-key`|Internal connector information, not used by customers.|
|`list-name`|Internal connector information, not used by customers.|
|`connector-version`|Internal connector information, not used by customers.|
|`config-options`|Internal connector information, not used by customers.|
|`code-by-level`|Indicates the code at each level in the case of a multi-level list.|

####  <a name="req-examples"></a>XML Example Request for Single Level List

The example uses the Fetch List web service to search a single level list for all projects beginning with Alph, and is configured to connect to an application connector located at www.example.com.

```http
POST /concur/list/v1.2/fetch HTTPS/1.1
Host: example.com
Authorization: Basic ...
Content-Type: application/xml; charset=utf-8
Content-Length: {length of content body}

<?xml version="1.0" ?>
<fetch-list-request>
    <long-code></long-code>
    <short-code></short-code>
    <query>Alph*</query>
    <search-by>TEXT</search-by>
    <lang-code>EN</lang-code>
    <num-to-return>500</num-to-return>
    <protected-list-key />
    <list-name />
    <connector-version />
    <config-options />
</fetch-list-request>
```

####  XML Example Request for Multi-Level List

The example uses the Fetch List web service to search a connected list for all cities under US-W-CA (United States, Western Region, California) beginning with San, and is configured to connect to an application connector located at www.example.com.

```http
POST /concur/list/v1.2/fetch HTTPS/1.1
Host: example.com
Authorization: Basic ...
Content-Type: application/xml; charset=utf-8
Content-Length: {length of content body}

<?xml version="1.0" ?>
<fetch-list-request>
    <long-code>US-W-CA</long-code>
    <short-code>CA</short-code>
    <query>San*</query>
    <search-by>TEXT</search-by>
    <lang-code>EN</lang-code>
    <num-to-return>500</num-to-return>
    <protected-list-key />
    <list-name />
    <connector-version />
    <config-options />
    <code-by-level>
        <level1>US</level1>
        <level2>W</level2>
        <level3>CA</level3>      
    </code-by-level>
 </fetch-list-request>
```

## <a name="response"></a>Response

### Supported Content Types

application/xml

### <a name="res-schema"></a>Response Schema

The application connector responds to the Fetch list web service request by returning all list items that match the search criteria.

The response will include a **fetch-list-response** parent element, with an **item** child element for each search result. If there are no search results, the **fetch-list-response** element is empty. The **item** child element contains the following child elements:

|  Element |  Description |
|---------------|--------------|
|`code` |**Required** The long code for the list item, consisting of the long code from the request combined with the short code from the response, separated by a hyphen (-). |
| `short-code` |**Required** The short code for the list item.|
| `text` |**Required** The list item text.|
| `match-value` |**Required** The value that matched the search term.|

####  <a name="res-examples"></a>XML Example of Response with Results

```http
HTTPS/1.1 200 OK
Content-Type: application/xml
Content-Length: {length of content body}

<fetch-list-response>
    <item>
        <code>US-W-CA-SF</code>
        <short-code>SF</short-code>
        <text>San Francisco</text>
        <match-value>San Francisco</match-value>
    </item>
    <item>
        <code>US-W-CA-SD</code>
        <short-code>SD</short-code>
        <text>San Diego</text>
        <match-value>San Diego</match-value>
    </item>
    <item>
        <code>US-W-CA-SJ</code>
        <short-code>SJ</short-code>
        <text>San Jose</text>
        <match-value>San Jose</match-value>
    </item>
</fetch-list-response>
```

####  XML Example of Response with No Results

```http
HTTPS/1.1 200 OK
Content-Type: application/xml

<fetch-list-response>
</fetch-list-response>
```

[1]: /api-reference/authentication/apidoc.html
