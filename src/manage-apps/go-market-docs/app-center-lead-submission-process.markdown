---
title: SAP Concur App Center - Lead Submission Process
layout: reference
---

Last Update August 2019

* Client/Prospect Submitted Leads
  * [Step 1: Prospect Clicks on Request Information via App Center Listing](#inquire)
  * [Step 2: Request Information Form Submission](#submit)
  * [Step 3: Lead Form Submission Confirmation Email](#confirmation)
  * [Step 4: Inquiry Notification Email](#notification)
* SAP Concur Rep-Submitted Leads
  * [Step 1: Rep Clicks App Center Referral on the Client/Prospect Salesforce Contact Record](#referral)
  * [Step 2: Referral Form Submission](#refsubmit)
  * [Step 3: Referral Form Submission Confirmation Email](#refconfirm)
* [Lead Set Up Requirements](#requirements)

## Client/Prospect Submitted Leads

## <a name="inquire"></a>Step 1: Prospect Clicks on Request Information via App Center Listing

The first step is for a prospect or client to click on the Request Information button via the unique App Center listing.

**Sample App Center Request Information Link**:

![Sample App Center Request Information Link](./app-center-lead-submission-process-request-info-link.png)

Depending upon the authentication method the app is using, the Request Information link may also appear as a button as shown below:

![Sample App Center Request Information Button](./app-center-lead-submission-process-request-info-button.png)

## <a name="submit"></a>Step 2: Request Information Form Submission

After clicking Request Information the prospect is redirected to the App Center Inquiry form which is dynamic and customized for each partner. The prospect must then complete the form and submit it. After submitting the form the prospect will receive a confirmation page. Thereafter, they will be redirected back to the partner’s App Center listing.

**Sample App Center Request Information Form**:

![Sample App Center Request Information Form](./app-center-lead-submission-process-request-information-form.png)

**Sample Confirmation Page**:

![Sample Confirmation Page](./app-center-lead-submission-process-request-information-confirmation.png)

## <a name="confirmation"></a>Step 3: Lead Form Submission Confirmation Email

After submitting the form the prospect will also receive a confirmation email. If the lead was submitted by a SAP Concur employee the email confirmation will be slightly modified.

**Sample Confirmation Email**:

![Sample Confirmation Email](./app-center-lead-submission-process-confirmation-email.png)

## <a name="notification"></a>Step 4: Inquiry Notification Email

The App Center partner will receive an inquiry notification email. Partners must click on the “Accept/Reject” button to be redirected to the Accept/Reject Form for completion within 20 days of receipt.

**Sample Inquiry Notification Email**:

![Sample Inquiry Notification Email](./app-center-lead-submission-process-inquiry-notification-email.png)

**Sample Accept/Reject Form**:

![Sample Accept/Reject Form](./app-center-lead-submission-process-accept-reject-form.png)

## SAP Concur Rep-Submitted Leads

## <a name="referral"></a>Step 1: Rep Clicks App Center Referral on the Client/Prospect’s Salesforce Contact Record

The first step is for the SAP Concur sales representative to click the App Center Referral button on the contact’s Salesforce record.

**Sample Salesforce App Center Referral**:

![Sample Salesforce App Center Referral](./app-center-lead-submission-salesforce-lead-submission.png)

## <a name="refsubmit"></a>Step 2: Referral Form Submission

The representative will select the correct App Center partner and complete the referral form in Salesforce. In the Comments field, they should include any relevant information or notes for the partner. For internal tracking purposes, they will also list the SAP Concur account members involved in the conversations. The representative may also select “Contact me first” if they would like to have a discussion prior to the partner following up with the client.

**Sample Salesforce Task Information Form**:

![Sample Salesforce Task Information Form](./app-center-lead-submission-salesforce-task-information-form.png)

## <a name="ref"></a>Step 3: Referral Form Submission Confirmation Email

Partners will receive a notification email that a lead has been submitted. Unlike customer-submitted leads, there is no Accept/Reject button on rep-submitted lead notifications. Partners should instead use the following process:

* **ACCEPT**: No action is required. *Best practice – partners should reach out to the rep to let them know that their referral was received.*
* **REJECT**: If a lead is invalid because they are already a customer, or are already engaged in an open sales cycle, partners should email **concur_PartnerClientActivation@sap.com within 20 days of receipt**. *If SAP Concur does not receive a “reject email” within 20 days, the lead will be considered accepted.*

**Sample Rep-Submitted Lead Notification Email**:

![Sample Rep-Submitted Lead Notification Email](./app-center-lead-submssion-salesforce-lead-notification-email.png)

## <a name="requirements"></a>Lead Set Up Requirements

Leads will be sent to the partner from the SAP Concur marketing automation tool Marketo. To ensure receipt of all leads the following steps must be completed by the partner:

1. Verify the lead email address provided in the App Center Listing Form to receive leads is correct.
1. Provide their IT team the following details for the Concur IP address and place Concur on the safe sender list.
  1. Email From Address: appcenterreferral@sap.com
  1. From Sender: Concur App Center Referral
  1. Subject: AppCenter Inquiry Submission
  1. Domain: et.concur.com, concur.com
