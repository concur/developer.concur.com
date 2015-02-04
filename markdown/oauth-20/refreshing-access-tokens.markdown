[Source](https://developer.concur.com/oauth-20/refreshing-access-tokens "Permalink to Refreshing Access Tokens | Developer Portal")

# Refreshing Access Tokens | Developer Portal

To refresh a token, make this API call:

    GET <https://www.concursolutions.com/net2/oauth2/getaccesstoken.ashx>
    ?refresh_token={Refresh Token}
    &client_id={Consumer Key}&client_secret={Consumer Secret}
    Accept: application/xml

Where:

refresh_token — Is a required parameter that specifies the access token to be refreshed.

client_id — Is a required parameter that specifies the consumer key for the application.

 

Last Modified: 4/2/2014 7:15 PM PST