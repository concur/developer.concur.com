---
title: Access Token Resource
description: An access token is a long-lived token used to make authorized API calls.
layout: page
---

## URIs

Native Flow

	https://{InstanceURL}/net2/oauth2/accesstoken.ashx

Web Flow and Auto-Connect Flow

	https://{InstanceURL}/net2/oauth2/GetAccessToken.ashx

## HTTP Verbs

GET

## Operations

*   Get an access token with the Native Flow.
*   Get an access token with the Web Flow.
*   Get a refresh token.

## Data Model

	<Access_Token>
	    <Instance_URL>https://www.concursolutions.com</Instance_Url>
	    <Token>fdjhk2382kwkajsklwe8i3932kslswl</Token>
	    <Expiration_Date>3/30/2013 2:19:10 PM</Expiration_date>
	    <Refresh_Token>8ew$sefhj7s62ns94376nsjd62s</Refresh_Token>
	</Access_Token>


<table width="100%" border="1" cellpadding="3" cellspacing="0" bordercolor=
"#DBDBDB">
<tbody>
<tr class="GrayTableHead">
<td width="14%" valign="top">Element</td>

<td width="7%" valign="top">Data Type</td>

<td width="79%" valign="top">Description</td>
</tr>

<tr>
<td valign="top">Instance_URL

<span style="color: rgba(190,190,190,1)">required</span></td>

<td valign="top">string</td>

<td valign="top">Identifies the Concur datacenter where the
user&#8217;s data resides. For example, if the Instance_Url is
https://www.ea1.concursolutions.com, then all API calls for this user
should use this URL as a prefix in subsequent API calls</td>
</tr>

<tr>
<td valign="top">Token

<span style="color: rgba(190,190,190,1)">required</span></td>

<td valign="top">string</td>

<td valign="top">The access token value passed in the Authorization
header when making API calls. It is a long-lived token which is
currently set to expire after one year from creation. You shoud
securely store the token and use it for all subsequent API requests
until the token expires. Before it does, you should send a request to
refresh the token prior to the expiration date.</td>
</tr>

<tr>
<td valign="top">Expiration_Date

<span style="color: rgba(190,190,190,1)">required</span></td>

<td valign="top">string</td>

<td valign="top">The date and time, in Coordinated Universal Time
(UTC) when the access token expires. Format: 3/30/2013 2:19:10
PM.</td>
</tr>

<tr>
<td valign="top">Refresh_Token

<span style="color: rgba(190,190,190,1)">required</span></td>

<td valign="top">string</td>

<td valign="top">Token with a new expiration date of a year from the
refresh date. You shoud securely store the refresh token for a user
and use it for all subsequent API requests.</td>
</tr>
</tbody>
</table>

## See Also

[Revoking access tokens](https://developer.concur.com/node/718)
    
