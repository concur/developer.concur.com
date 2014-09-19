---
layout: page
title: Get Started
permalink:
---

# Getting Started

##Code, Samples, etc
We have [samples](https://github.com/concur-samples) and [client libraries](https://github.com/concur) on GitHub, go check them out, they are public and have corresponding documentation. We also have a Swagger page [here](https://www.concursolutions.com/api/docs/index.html) that you can use to interact with our APIs with an access token, see below on how to generate one. 
##Before you start
1. Have a [registered sandbox](https://developer.concur.com/en-us/login) or sign up for one [here](https://developer.concur.com/register). 
2. Have a [clientID](https://developer.concur.com/api-documentation/oauth-20/oauth-20-basic-concepts#consumer_key)
3. Generate a token to call the APIs
4. Replace the <insert your access token here> with your token and try the examples below!

Check out the [OAuth Docs](https://developer.concur.com/api-documentation/oauth-20-0)

##Examples with curl
There are [APIs](https://developer.concur.com/docs-and-resources/documentation) for Travel, Expense, Invoice, User and many more! You can copy and paste the examples below via command line. 

##OAuth with Concur

Example of how to get an [access token](https://developer.concur.com/api-documentation/oauth-20/oauth-20-basic-concepts#access_tokens) with JSON response
	
####Request
The username and password must be base 64 encoded separated by a colon. For exaple: sample@concur.com:samplepassword. 
	
	curl https://www.concursolutions.com/net2/oauth2/accesstoken.ashx \
	-H "Authorization: Basic <Base 64 encoded sample@concur.com:password>" \
	-H "X-ConsumerKey: clientId" \
	-H "Accept: application/JSON"

####Response

	{
	  "Access_Token": {
	    "Instance_Url": "https://www.concursolutions.com/",
	    "Token": "SampleToken",
	    "Expiration_date": "9/19/2015 1:32:44 AM",
	    "Refresh_Token": "SampleRefreshToken"
	  }
	}

##Travel
Use [Itinerary](https://developer.concur.com/api-documentation/web-services/itinerary/itinerary-resource/itinerary-resource-get) to get a list of trip itineraries for the user. 
	
####Request

	curl https://www.concursolutions.com/api/travel/trip/v1.1 \
	-H "Authorization: OAuth <insert your access token here>" \
    -H "Accept: application/json"	

####Response

	[
	  {
	    "UserLoginId": "SampleUserId@concur.com",
	    "TripId": "SampleTripId",
	    "id": "https:\/\/www.concursolutions.com\/api\/travel\/trip\/v1.1\/SampleTripId",
	    "TripName": "Sample Concur Trip",
	    "StartDateLocal": "2014-10-30T03:47:14",
	    "EndDateLocal": "2014-11-30T07:47:14",
	    "DateModifiedUtc": "2014-09-18T20:32:44",
	    "TripStatus": null,
	    "TravelerFirst": "Sample",
	    "TravelerLast": "Name",
	    "BookingSource": "Sample Itinerary",
	    "Passengers": null,
	    "RecordLocator": "Sample, Air Locator"
	  }
	]

##Expense
The **Expense APIs (v3.0)** allows you to get (and push) a Concur user's expense information, including expense line items, their types (e.g. food, lodging), totals, and even receipt images.

###Use [QuickExpenses](https://www.concursolutions.com/api/docs/index.html#!/QuickExpenses) to get the list of quick expenses on the users account. 
	
###Request

	curl https://www.concursolutions.com/api/v3.0/expense/quickexpenses \
	-H "Authorization: OAuth f8gCXPLOV2RfIh0szZ6lzO8njX4=" \
    -H "Accept: application/json"

####Response

	{
	  "Items": [
	    {
	      "ExpenseTypeCode": "PARKG",
	      "PaymentTypeCode": "PENDC",
	      "TransactionDate": "2014-09-06T00:00:00",
	      "TransactionAmount": 6.29,
	      "CurrencyCode": "USD",
	      "VendorDescription": "Sample Vendor",
	      "Comment": "Sample Comment",
	      "OwnerLoginID": null,
	      "OwnerName": "Unknown",
	      "ExpenseTypeName": "Parking",
	      "LocationName": "Bellevue, Washington",
	      "ReceiptImageID": null,
	      "ID": "SampleId",
	      "URI": "https:\/\/www.concursolutions.com\/api\/v3.0\/expense\/quickexpenses\/SampleId"
	    }
	  ],
	  "NextPage": null
	}

###Use [ReceiptImages](https://www.concursolutions.com/api/docs/index.html#!/ReceiptImages) to get the list of receipts on the users account: 

####Request

	curl https://www.concursolutions.com/api/v3.0/expense/receiptimages \
	-H "Authorization: OAuth f8gCXPLOV2RfIh0szZ6lzO8njX4=" \
    -H "Accept: application/json"

####Response

	{
	  "Items": [
	    {
	      "ID": "SampleReceiptImageId",
	      "URI": "https:\/\/www.concursolutions.com\/api\/v3.0\/expense\/receiptimages\/SampleReceiptImageId"
	    },
	    {
	      "ID": "SampleReceiptImageId2",
	      "URI": "https:\/\/www.concursolutions.com\/api\/v3.0\/expense\/receiptimages\/SampleReceiptImageId2"
	    },
	    {
	      "ID": "SampleReceiptImageId3",
	      "URI": "https:\/\/www.concursolutions.com\/api\/v3.0\/expense\/receiptimages\/SampleReceiptImageId3"
	    }
	  ],
	  "NextPage": null
	}

###Use [ReportDigests](https://www.concursolutions.com/api/docs/index.html#!/ReportDigests) to get a list of reports available on a users account. 
	
####Request

	curl https://www.concursolutions.com/api/v3.0/expense/reportdigests \
    -H "Authorization: OAuth f8gCXPLOV2RfIh0szZ6lzO8njX4=" \
    -H "Accept: application/json"

####Response

	{
	  "Items": [
	    {
	      "Name": "Sample Report",
	      "Total": 56.1,
	      "CurrencyCode": "USD",
	      "Country": "US",
	      "CreateDate": "2014-09-30T11:47:24.197",
	      "UserDefinedDate": "2014-09-30T00:00:00",
	      "LastComment": "Sample Comment",
	      "OwnerLoginID": "sample@concur.com",
	      "OwnerName": "Sample User",
	      "ApprovalStatusName": "Not Submitted",
	      "ApprovalStatusCode": "A_NOTF",
	      "PaymentStatusName": "Not Paid",
	      "PaymentStatusCode": "P_NOTP",
	      "ReportHeaderLastModifiedDate": "2014-09-30T11:47:24.197",
	      "ID": "SampleID",
	      "URI": "https:\/\/www.concursolutions.com\/api\/v3.0\/expense\/reportdigests\/SampleID"
	    }
	  ],
	  "NextPage": null
	}


###Use [User](https://developer.concur.com/api-documentation/web-services/user/user-resource) to get user information about the user with the token provided. 

####Request

	curl https://www.concursolutions.com/api/user/v1.0/User/
    -H "Authorization: OAuth <insert your access token here>"
    -H "Accept: application/xml"

####Response
	
	<UserProfile 
	    xmlns="http://www.concursolutions.com/api/user/2011/02" 
	    xmlns:i="http://www.w3.org/2001/XMLSchema-instance">
	    <Active>Y</Active>
	    <CrnKey>USD</CrnKey>
	    <CtryCode>US</CtryCode>
	    <EmailAddress>SampleEmail@SampleEmail.com</EmailAddress>
	    <EmpId>10001</EmpId>
	    <ExpenseApprover>Y</ExpenseApprover>
	    <ExpenseApproverEmployeeID>SampleApprover@SampleApprover.com</ExpenseApproverEmployeeID>
	    <ExpenseUser>Y</ExpenseUser>
	    <FirstName>Sample</FirstName>
	    <InvoiceApprover>N</InvoiceApprover>
	    <InvoiceUser>N</InvoiceUser>
	    <IsTestEmp>N</IsTestEmp>
	    <LastName>Sample</LastName>
	    <LedgerName>DEFAULT</LedgerName>
	    <LocaleName>en_US</LocaleName>
	    <LoginId>sample@concur.com</LoginId>
	    <TripUser>Y</TripUser>
	</UserProfile>

Awesome! Now you've seen some examples and been able to paste them into terminal to get an idea of how we structure our responses. Interested in more concepts from Concur? Check out the [concepts page](developer.concur.com)!
	
