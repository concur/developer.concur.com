---
title: Associating External Attendees to Expense Entries
layout: conceptual
---

## About this recipe

This recipe prescribes how to associate external attendees to expense entries in Concur Expense. It assumes you are familiar with Concur Expense and the system of record for the external attendees.  It also assumes that you have created a developer sandbox, registered your application, and that you know how to make API calls to the Concur Platform.
## APIs used in this recipe
`Base URL: https://www.concursolutions.com/api/v3.0`
*	/expense/attendees
*	/expense/entryattendeeassociations
*	/expense/attendeetypes

## Context
For certain types of expenses such as entertainment, business meals, and events, the person filing the expense report must identify all the people who participated in the event. In Concur Expense, the participants are called attendees.  Often, attendees are tracked and managed in a business system outside of Concur such as a customer-relationship management (CRM) application.  Concur Expense refers to these attendees as external attendees.
