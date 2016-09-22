---
layout: post
title: Update to User API Coming Soon
date: 2016-09-01
tags:
    - Release-Notes
    - Expense
    - User
references:
    - url: /api-reference/user/
      link: User
categories:
    - changelog
---


## **Coming Soon:** User API Version 1.0 Update

### Overview
In the September 2016 release, Concur will update the User API v1.0 to resolve a known issue. The User API v1.0 documentation states that the EmpId and LoginId elements are both required to create or update a user, and that the NewLoginId and NewEmployeeId elements must be used to modify the Login Id or Employee Id for an existing user. Concur is updating the User API v1.0 to enforce these requirements. Any partner application that was using the EmpId or LoginId elements to change a user’s LoginId or EmpId will no longer be able to do so.  

[User API version 1.0](https://developer.concur.com/api-reference/user/)

### Configuration / Feature Activation
Clients using the User API should contact the group in charge of their web services development and maintenance, to inform them of the upcoming changes.
