---
layout: post
title: Inactive User Tokens causing problems with Expense Reports
date: 2017-10-02
tags:
    - Expense Report API
    - Tokens
    - Inactive User
    - Journal Entries
author: Loke Tan
---

**What:**
In July we observed an issue where clients who were calling Concur's `/expense/expensereport/v2.0/report` endpoint were not getting the `JournalEntriesList` section. 

**Cause:**
The reason this section is not returned is because clients are calling this API with an access token for a user or a wsadmin user that is marked as INACTIVE in Concur. 

**Fix:**
In order to rectify this problem, clients need to use a token for a user that is ACTIVE in Concur. If this is a WSADMIN account, our suggestion is to create a new WSADMIN that is active and use this user's access token for future calls.



* [Old Auth Documentation](https://developer.concur.com/api-reference-deprecated/old-auth/old-auth.html) 