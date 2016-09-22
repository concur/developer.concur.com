---
layout: post
title: SAP HANA Cloud Platform - Expenses Analyzer for Concur
date: 2016-06-24
tags:
    - HANA
    - Analytics
    - Cloud
    - Integration
author: Ekatarina Mitova
---

## Expenses Analyzer for Concur that runs on SAP HANA Cloud Platform
Expenses Analyzer for Concur is a sample extension application for Concur written in Java, that runs on SAP HANA Cloud Platform and uses a HANA database. The purpose of the application is to show you analytical information about all expenses in your Concur company.  

The application can run either on the productive SAP HANA Cloud Platform landscape with a dedicated HANA, or the trial landscape with a multitenant database containers (MDC) database. We have prepared a guide that explains how to download, build, deploy and configure the application on the SAP HANA Cloud Platform trial landscape.  

These are the SAP HANA Cloud Platform services and features in use:

* Connectivity Service - the application uses the Connectivity Service to obtain connection to Concur.
* Persistence Service - the application uses the Persistence Service to manage its connection to the database.
* Identity Service - the application uses the Identity Service to manage its security.
* Trial MDC database - the application uses an MDC database.  

The Expenses Analyzer for Concur performs regular data replication from your Concur company into an MDC database. This data serves as a base for a HANA Analytical View. As a result, you can leverage the computing power of the MDC database, which performs analytical computations on top of expenses data from Concur.  

In short, these are the steps you need to do, to use this extension application:

1. Adjust the MDC database that it uses.
2. Build and deploy the application on SAP HANA Cloud Platform.
3. Bind the application to the MDC database.
4. Start the application.
5. Set up the application in Concur.  

All these steps are explained in more details [here](https://github.com/SAP/cloud-concur-expenses-analyzer-ext/blob/master/README.md), and you can download and test the application itself from [this GitHub repository](https://github.com/SAP/cloud-concur-expenses-analyzer-ext).
Feel free to use the comments section bellow, to give us your feedback.
 
