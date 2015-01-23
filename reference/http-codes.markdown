
        <div id="main" class="container">
            <div>
                            </div>
            <div class="row">
                <div class="span12">
<div class="breadcrumbs"><a href="/">Home</a>HTTP Codes</div>
                </div>
            </div>

            <div id="content-wrapper">
<!-- <div class="row"> -->
                <div id="content" class="span9">
            # HTTP Codes
                    <div class="section">
                    <div id="node-205" class="node clear-block">


    
    <div class="content clear-block">
                <script>
  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

  ga('create', 'UA-41161356-1', 'concur.com');
  ga('send', 'pageview');

</script>## 
    Successful Requests
The web services return a HTTP 2xx response code when the request was successful.
    **HTTP Success Codes**:
<table border="1" bordercolor="#DBDBDB" cellpadding="3" cellspacing="0" width="100% ">
<tbody>
<tr class="GrayTableHead">
<td valign="top" width="20%">
                Success Code</td>
<td valign="top" width="10%">
                Message</td>
<td valign="top" width="70%">
                Description</td>
</tr>
<tr>
<td valign="top">
                200</td>
<td valign="top">
                OK</td>
<td valign="top">
                The request was received successfully.</td>
</tr>
</tbody>
</table>
## 
    Failed Requests
The web service should return a response within 60 seconds. If the request times out without a response, the application should wait for 5 minutes then retry the request. If the request continues to time out after a few retries, the developer should contact <a href="mailto:concurconnecttech@concur.com">concurconnecttech@concur.com</a>.
    The web service returns a 4xx or 5xx HTTP response code when there are any errors and will include the following elements:<br />
    
<table border="1" bordercolor="#DBDBDB" cellpadding="3" cellspacing="0" width="100% ">
<tbody>
<tr class="GrayTableHead">
<td valign="top" width="20%">
                Element</td>
<td valign="top" width="70%">
                Description</td>
</tr>
<tr>
<td valign="top">
                <span class="codeexample">StatusCode</td>
<td valign="top">
                The HTTP error code.</td>
</tr>
<tr>
<td valign="top">
                Content</td>
<td valign="top">
                The parent element containing the following child elements:
<table border="1" bordercolor="#DBDBDB" cellpadding="3" cellspacing="0" width="100% ">
<tbody>
<tr>
<td valign="top">
                                Error</td>
<td valign="top">
                                This element contains the following child elements:
<table border="1" bordercolor="#DBDBDB" cellpadding="3" cellspacing="0" width="100% ">
<tbody>
<tr>
<td valign="top">
                                                Message</td>
<td valign="top">
                                                The error message.</td>
</tr>
<tr>
<td valign="top">
                                                Server-Time</td>
<td valign="top">
                                                The time the error was generated, based on Concur's server's time zone.</td>
</tr>
<tr>
<td valign="top">
                                                Id</td>
<td valign="top">
                                                The ID of the error within Concur.</td>
</tr>
</tbody>
</table>
</td>
</tr>
</tbody>
</table>
</td>
</tr>
</tbody>
</table>

Refer to the individual function documentation for function-specific error formats.
    **HTTP Error Codes**:The full list of possible HTTP error codes can be found <a href="http://www.w3.org/Protocols/rfc2616/rfc2616-sec10.html">here</a>. The table below provides additional details for commonly encountered error codes.<br />
    
<table border="1" bordercolor="#DBDBDB" cellpadding="3" cellspacing="0" width="100% ">
<tbody>
<tr class="GrayTableHead">
<td valign="top" width="20%">
                Error Code</td>
<td valign="top" width="10%">
                Message</td>
<td valign="top" width="70%">
                Description</td>
</tr>
<tr>
<td valign="top">
400
</td>
<td valign="top">
Bad Request
</td>
<td valign="top">
                This response is returned if any of these conditions is true:

* 
                        The specified URI is invalid.
* 
                        The request is not formatted correctly.
* 
                        The request is missing a required field.
* 
                        The number of requests received exceed the request limit.
* 
                        The request encountered a database deadlock. In this case, the developer should resend the request a short time later.
* 
                        This error can be received if Chunked Transfer-Encoding is enabled by the developer's web server. Concur does not support Chunked Transfer-Encoding.

**Attendee Web Service**:

* 
                        The batch type parameter is not included on the URI of batch operations.
* 
                        The request contains 0 attendees.
* 
                        The request contains over 1000 attendees.

**Imaging Web Service**:

* 
                        The barcode or reportId is missing.

**Purchase Order Web Service**:

* 
                        The request contains 0 purchase orders.
* 
                        The request contains over 1000 purchase orders.

**List Item Web Service**:

* 
                        The request contains 0 list items.
* 
                        The request contains over 1000 list items.

**Payment Batch File**:

* 
                        The Batch ID specified in the URI is invalid.

**Trip Approval**:

* 
                        The request contains 0 itineraries.

**User Web Service**:

* 
                        The request contains 0 users.
* 
                        The request contains over 1000 users.

</td>
</tr>
<tr>
<td valign="top">
                401</td>
<td valign="top">
                Unauthorized</td>
<td valign="top">
                The Authorization header is not included in the request.</td>
</tr>
<tr>
<td valign="top">
                403</td>
<td valign="top">
                Forbidden</td>
<td valign="top">
                This response is returned if any of these conditions is true:

* 
                        The Authorization header is included but it fails validation. This can happen if the OAuth consumer does not have access to the Concur product required by the web service.
* 
                        The partner application associated with the oauth_consumer_key has not been allowed access to the requested company.
* 
                        The Oauth token has expired or been revoked.

</td>
</tr>
<tr>
<td valign="top">
                404</td>
<td valign="top">
                Not Found</td>
<td valign="top">
                **Extract Web Service**: The Definition ID or Job ID specified in the URI is invalid.
                **Imaging Web Service**: No image was found for the specified report Id or barcode.
                **Itinerary Web Service**: The Trip ID or Booking ID specified in the URI is invalid.
                **Payment Batch Web Service**: The Batch ID specified in the URI is invalid.</td>
</tr>
<tr>
<td valign="top">
                409</td>
<td valign="top">
                Conflict</td>
<td valign="top">
                **Extract Web Service**: A job for the specified definition is already queued or running.</td>
</tr>
<tr>
<td valign="top">
                500</td>
<td valign="top">
                Internal Server Error/Not Closed</td>
<td valign="top">
                **Expense Report Web Service**: This response is returned when the system is unable to calculate an exchange rate for a posted expense report entry.
                **Payment Batch Web Service**: The specified batch could not be closed.</td>
</tr>
<tr>
<td valign="top">
                503</td>
<td valign="top">
                Service Unavailable</td>
<td valign="top">
                This response is returned when the web service is down for maintenance. The partner application should sleep for 5 minutes then retry the request. If the request continues to fail after a few retries, the developer should contact concurconnecttech@concur.com.</td>
</tr>
</tbody>
</table>

