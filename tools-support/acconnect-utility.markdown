---
title: acconnect Utility
layout: conceptual
---

acconnect is a command-line tool that obtains a request token for the specified user by using the App Center flow.

##Requirements

The following are the system requirements for this tool:

* Windows XP or later Windows operating system. If you're using Mac OS X, you will need to run a Windows VM such as Parallels Desktop in order to use the tool
* You must be an administrator on the local computer.

##Syntax

**acconnect.exe** [environment] consumerKey consumerSecret scope username password redirectURL

environment

Optional. If the environment argument isn't specified, the environment will default to the production environment. The environment argument can also be one of the following:
* **PROD** – Production environment.
* **RQA[n]** – Where [n] is the number of the RQA environment you want to use for authentication.
* [custom-url] – A custom URL, for example to a development VM.
consumerKey

Required. Specifies the consumer key for the application.
consumerSecret

Required. Specifies the consumer secret for the application.
scope

Required. Specifies the Web service for which you want to obtain the access token. If you need an access token for multiple Web services, you can specify multiple values and separate each with a comma. For example, to obtain a token that allows you to access the Expense Report and Imaging Web services, you would set your scope as:
EXPRPT,IMAGE

username

Required. The username of the specified user.
password

Required. The password of the specified user.
redirectUrl

Required. The URL of the partner application page that receives the request token. The redirect URL must be enclosed in quotes.
##Example

This example creates a request token in a production environment for the specified user. The token allows access to the Expense Report Web service.

	acconnect.exe VJbNf8skImcf79QOV2Zfz8 M6nNN433aaXh9W4kNJQVP85DpPd3JYGV EXPRPT john@connect5 password1 "http://www.partner.com/rewardsclub/us/en/home?language=fr_FR"
