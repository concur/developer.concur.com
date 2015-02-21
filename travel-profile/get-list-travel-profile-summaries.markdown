---
title: Get travel profile summaries
layout: operation
---



##  Description

Gets the list of travel profile summaries that have been updated since the specified date. The response is separated into pages.

##  Request

```
GET {InstanceURI}/api/travelprofile/v1.0/profile?LastModifiedDate=2015-01-01T01:00:00 HTTP/1.1
Authorization: OAuth {access token}
```

###  Request parameters

All request paramenters are optional. To identify a specific user by login ID or XMLSyncID, you can specify the following request parameters.

|  Parameter Name |  Required/Optional | Parameter Type |  Data Type |  Description |
| :----- | :----- | :----- | :----- | :----- |
|  LastModifiedDate | Required |  path |  string |  The date and time, in UTC, that the profiles must be updated after to be included in the response. Format: YYYY-MM-DDThh:mm:ss |
|  Page | Optional |  path |  string |  The number of pages to retrieve. If the page is outside the number of existing pages, the response elements will be empty |
|  ItemsPerPage | Optional |  path |  string |  The number of travel profiles per page. The maximum value is 200. The default value is 200. |

### Headers

####  Accept header
application/xml

####  Authorization header

`Authorization: OAuth {access_token}`

Where _access_token_ is the OAuth 2.0 access token of the user whose travel profile summaries you want to retrieve. If you want to access company-wide travel profile information, the user account associated with the OAuth 2.0 access token must have a Concur account with one of these roles: Web Services Administrator for Professional or Can Administer for Standard.

##  Data model

The data model of the response for the GET operation.

```xml
    <ConnectResponse>
        <Metadata>
            <Paging>
                <TotalPages />
                <TotalItems />
                <Page />
                <ItemsPerPage />
                <PreviousPageURL />
                <NextPageURL />
            </Paging>
        </Metadata>
        <Data>
            <ProfileSummary>
                <LoginID />
                <XmlProfileSyncID />
                <ProfileLastModifiedUTC />
            </ProfileSummary>
        </Data>
    </ConnectResponse>
```
## Response

###  ConnectResponse root element

The ConnectResponse root element contains the General, Telephones, Addresses, DriversLicenses, EmailAddresses, RatePreferences, DiscountCodes, Air, Car, Hotel, and CustomFields child elements. It has the attributes shown in the Response Class section.

###  Metadata element

The Metadata parent element contains the Paging child element.

###  Paging elements

The Paging parent element contains contains the paging information for the response and it contains the following child elements:

|  Element Name |  Data Type |  Description |
| :----- | :----- | :----- | :----- |
|  TotalPages |  String |  The total number of pages to return. |
|  TotalItems |  String |  The total number of profiles the query returned. |
|  Page |  String |  The page number for the set of results in the current response. |
|  ItemsPerPage |  String |  The number of items set to display per page. |
|  PreviousPageURL |  String |  The URI to the previous page of results. This element will be empty when there are no previous pages. |
|  NextPageURL |  String |  The URI to the next set of results. This element will be empty when there are no next pages |

###  Data element

The Data parent element contains a ProfileSummary child element for each included travel profile.

###  ProfileSummary

The Paging parent element contains contains the paging information for the response and it contains the following child elements:

|  Element Name |  Data Type |  Description |
| :----- | :----- | :----- | :----- |
|  LoginID |  String |  The Concur user login ID. |
|  XMLProfileSyncID |  String |  TThe user's XML Profile Sync ID, if available. |
|  ProfileLastModifiedUTC |  String |  The date, in UTC, when the travel profile was last modified. Format: YYYY-MM-DDThh:mm:ss. |

##  Example
This example gets the list of travel profile summaries modified after January 1 2015.

###  Request

```
    GET {InstanceURI}/api/travelprofile/v1.0/profile?LastModifiedDate=2015-01-01T01:00:00 HTTP/1.1
    Authorization: OAuth {access token}
    ...
```

###  Response

```xml
    200 OK
    Content-Type: application/xml

    <ConnectResponse>
        <Metadata>
            <Paging>
                <TotalPages>1</TotalPages>
                <TotalItems>2</TotalItems>
                <Page>1</Page>
                <ItemsPerPage>200</ItemsPerPage>
                <PreviousPageURL />
                <NextPageURL />
            </Paging>
        </Metadata>
        <Data>
            <ProfileSummary>
                <LoginID>mariab@company1.com</LoginID>
                <XmlProfileSyncID>string123</XmlProfileSyncID>
                <ProfileLastModifiedUTC>2015-01-01T01:00:00</ProfileLastModifiedUTC>
            </ProfileSummary>
            <ProfileSummary>
                <LoginID>peterk@company1.com</LoginID>
                <XmlProfileSyncID>string456</XmlProfileSyncID>
                <ProfileLastModifiedUTC>2015-01-01T01:00:00</ProfileLastModifiedUTC>
            </ProfileSummary>
        </Data>
    </ConnectResponse>
```
 

 

 
