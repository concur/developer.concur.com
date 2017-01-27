### Get a list of locations

```http
GET /api/expense/expensereport/v1.1/Locations?city={searchstring} HTTP/1.1
Host: www.concursolutions.com
```

Retrieves a list of valid city location codes.

<aside class="notice">
  <strong>NOTE:</strong> Find the newer version 3.0 <a href="/api-reference/common/locations/locations-resource.html">here.</a>  
</aside>

#### Request

```http
GET https://www.concursolutions.com/api/expense/expensereport/v1.1/Locations?city={searchstring} HTTP/1.1
Authorization: OAuth {access token}
...
```

* **Query parameters**

  | Parameter |Required/Optional| Description |
  |-----------------|--------|-----------------------------|
  | city={searchstring} | required | The city name. The system will return all values with city names that begin with the supplied name. The city name value is not case sensitive. The value can contain the `*` wildcard. This wildcard matches any number of characters. For example, `Locations?city=old*b_o` will match the city name "Old Saybrook"

* **Headers**

  | Name | Description |
  | ---- | ----------- |
  | `Authorization` | Required. Authorization header with OAuth token for valid Concur user. |
  | `Content-Type` | `application/xml` |

#### Response

```http
HTTP/1.1 200 OK
Content-Type: application/xml

<LocationList xmlns="http://www.concursolutions.com/api/expense/expensereport/2011/03"    
xmlns:i="http://www.w3.org/2001/XMLSchema-instance">
    <Location>
        <Country>UNITED STATES</Country>
        <LocationID>nXipdPDzr4oCPylSOd91NQqQ$sqmnQrQxR</LocationID>
        <Name>Redmond</Name>
        <State>Washington</State>
    </Location>
    <Location>
        <Country>UNITED STATES</Country>
        <LocationID>8WWeksu7dEoHlsiIE$28kkj3ED8swhgGgye</LocationID>
        <Name>Redmond</Name>
        <State>Oregon</State>
    </Location>
    <Location>
        <Country>UNITED STATES</Country>
        <LocationID>Oe11hKEi$lslPncYAe2k2h7s67sdkkLEigUIF$</LocationID>
        <Name>Redmond</Name>
        <State>Utah</State>
    </Location>
</LocationList>
```

* **Content types**
  * application/xml

* **Response body**
  This request will return a `LocationsList` parent element with a `Location` parent element for each location with a City Name that contains the search text. The `Location` parent element contains the following child elements.

  * **`Location` elements**

    |  Element |  Description |
    | -------- | ------------ |
    |  Name |  The city name. |
    |  Country |  The country name for the location. |
    |  State |  The state/province name for the location. Empty if there is no corresponding state/province. |
    |  LocationID |  The unique key for the location. This value is required when posting data in the `City` element. |
