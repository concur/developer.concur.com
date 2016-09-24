---
title: Handle Response Codes
layout: reference
---

# Receipts

## Handle Response Codes

### <a href="Success">Success Codes</a>

|Code|Message|Information|
|---|---|---|
|200|OK|Your GET request succeeded.|
|201|Created|Your POST request succeeded. Please note that even though your request passed validation, the service still needs to create your receipt. Because of this processing time, your receipt might not be available for retrieval immediately.|

### <a href="Failure">Failure Codes</a>

|Code|Message|Response Body|Information|
|---|---|---|---|
|400|Bad Request|`validationErrors` JSON object|An error occurred while validating your post against the JSON schema. The `validationErrors` object will contain detailed information about what caused the validation to fail.|
|||Request body could not be parsed| This means that the body of your request was empty, or there was an error parsing it.|
|||Link header must be provided and include a URL to a known receipt schema|The link header cannot be null or empty, and must include one of the supported receipt type JSON schemas followed by `;rel=describedBy`. A list of supported schemas can be retrieved from the `/schemas` endpoint of this service.|
|||The specified receipt schema is not valid|The schema specified in the link header was valid, but an error occurred when the service attempted to fetch the schema internally.|
|401|Unauthorized|User ID in the URL must match the ID in the sub claim of the JWT|This response occurs when the JWT used for authentication is valid, but doesn't match the correct user. When using a user JWT, the request must be to a URL for the same user that is represented in the JWT. For more information on the process of obtaining a JWT, see the [Authentication service documentation](https://preview.developer.concur.com/api-preview/auth/apidoc.html).|
|403|Forbidden|None|Authentication failed for some reason. A 403 will be returned if there is no JWT in the `Authorization` header of the request, or if the JWT is invalid or expired. This response is also for cases where the JWT does not include the scope required to fulfill the request. For more information on JWTs and scopes, see the [Authentication service documentation](https://preview.developer.concur.com/api-preview/auth/apidoc.html).|
|404|Not Found|None|The receipt(s) you requested could not be found. Check that the receipt and/or user ID that you used are correct.|
|415|Unsupported Media Type|Specified Content-Type is not supported|The receipt service currently supports receipt data formatted as JSON. The `Content-Type` header must have the value `application/json` or the request will fail.|
|||Invalid image type| Images must be `.png`, `.jpg`, `.jpeg`, `.tiff`, or `.gif`. |
|500|Internal Server Error|Internal error|This response is for generic internal server errors. Something went wrong, and we're probably already trying to fix it!|
|||Unable to save receipt into the database|An error occurred while trying to update the state of the receipt.|
|||Could not get available receipts|An error occurred while trying to fetch receipts for a user by state.|
