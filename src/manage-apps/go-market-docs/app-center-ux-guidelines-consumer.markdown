---
title: SAP Concur App Center - User Experience Guidelines for "Apps for Me"
layout: reference
---

In this guide, we will help you implement the connection between an SAP Concur user's account and your application. You will find best practices for user-centered design, examples of dos-and-don’ts, and suggested steps to guide the user through the connection process.

It is not our intention to tell you what colors and fonts to use. Maintaining your brand integrity is important, and these guidelines do not interfere with that. Rather, our goal is for user to have a pleasant and consistent experience across all of our partner applications. Observing these guidelines will help ensure that our shared users have positive experiences with both of our companies as a result of our partnership.

* [A word on accessibility](#word-on-accessibility)
* [Account linking example](#design-guidelines-account-linking-example)
* [Design guidelines](#design-guidelines)
  * [Connect](#design-guidelines-connect)
    * [Connect](#design-guidelines-connect-button)
    * [Connection Request](#design-guidelines-consumer-connection-request)
  * [Accept Terms](#design-guidelines-accept-terms)
  * [Landing Page](#design-guidelines-landing-page)
  * [Account Creation](#design-guidelines-account-creation)
  * [Confirmation](#design-guidelines-confirmation)
* [Guideline Checklist](#guideline-checklist)
  * [Landing Page(s)](#guideline-checklist-landing-page)
  * [Account Creation](#guideline-checklist-account-creation)
  * [Confirmation Page](#guideline-checklist-confirmation)
  * [Disconnect](#guideline-checklist-disconnect)
* [Accessibility best practices](#accesibility-best-practices)
  * [Provide text alternatives](#accesibility-best-practices-text-alternatives)
  * [Distinguishable content](#accesibility-best-practices-distinguishable-content)
  * [Keyboard control](#accesibility-best-practices-keyboard-control)
  * [Predictable structure](#accesibility-best-practices-predictable-structure)
  * [Input assistance](#accesibility-best-practices-input-assistance)

## <a name="word-on-accessibility"></a>A word on accessibility

This guide also includes some suggestions on how to ensure your site is [Section 508 compliant](https://www.section508.gov/content/learn). At SAP Concur, we work hard to make sure our critical services are available and usable by every employee at the companies who use our products. From private companies to government agencies, we have a wide range of users with varying levels of abilities. Observing accessibility best practices in your product helps us meet our commitment to provide quality software to our entire user base.

## <a name="design-guidelines-account-linking-example"></a>Account linking example

This section provides an example of the process for an end-user (consumer) to connect their SAP Concur account with your application. Note that not all steps below will apply to all applications. This guide, however, attempts to cover the common variations.

The connection flow begins from the SAP Concur App Center. Once the user has accepted the terms of the connection, the user will be redirected to your site to connect.

**Step 1 Connect**

![Step 1 Connect](./app-center-ux-guidelines-consumer-connect.png)

**Step 2 Accept Terms**

![Step 2 Accepts Terms](./app-center-ux-guidelines-consumer-terms-and-conditions.png)

**Step 3 Landing Page**

![Step 3 Landing Page](./app-center-ux-guidelines-consumer-landing-page.png)

**Step 4 Account Creation**

![Step 4 Account Creation](./app-center-ux-guidelines-consumer-account-creation.png)

**Step 5 Confirmation**

![Step 5 Confirmation](./app-center-ux-guidelines-consumer-confirmation.png)

## <a name="design-guidelines"></a>Design guidelines

The following guidelines should be used to develop your connection user experience and will be used to evaluate your application during the [certification process](/manage-apps/app-certification.html).


### <a name="design-guidelines-connect"></a>Connect

There are two possible configurations for consumer listings:

#### <a name="design-guidelines-connect-button"></a> Connect

In this configuration **Connect** is the prominent call to action. This applies to App Center partners and TripLink suppliers without loyalty accounts. This configuration and flow is depicted above.

![Connect](./app-center-ux-guidelines-consumer-connect-button.png)

#### <a name="design-guidelines-connect-connection-request"></a>Connection Request

Connection Request applies to TripLink suppliers with loyalty accounts. For more information on this flow, please refer to the TripLink supplier guide.

![Connection Request](./app-center-ux-guidelines-consumer-connection-request.png)

### <a name="design-guidelines-accept-terms"></a>Accept Terms

The user accepts the SAP Concur Terms & Conditions. These terms apply to the use of the SAP Concur App Center and data sharing.


![Accept Terms](./app-center-ux-guidelines-consumer-terms-and-conditions-small.png)

### <a name="design-guidelines-landing-page"></a>Landing Page

This will be the first page the user sees upon redirect from SAP Concur to your application. The SAP Concur App Center will open a new window to your pre-defined redirect URI (referred to as your “Connect URI”).
This page should include your brand and the application the customer is connecting to. In addition, the page should clearly indicate that the customer is activating an integration with SAP Concur.
The first page should give the user the option to sign in with an existing account or sign up for a new account.

This page should:

* Clearly indicate the integration with SAP Concur in text
* Include links to your terms and conditions and privacy policy
* Include links to your “support” and “help” options

![Landing Page](./app-center-ux-guidelines-consumer-landing-page-small.png)

### <a name="design-guidelines-account-creation"></a>Account Creation

To encourage users to complete registration, it is recommended that this page only include necessary information to create the account.
Account details can be pre-populated in this form leveraging SAP Concur API’s. For more information, please refer to documentation on the Developer Portal. Once the user submits the form, your application will begin the authentication process. Your Partner Enablement representative will provide the technical details for implementation based on your SAP Concur integration type.

If your account creation process requires multiple steps, provide a progress indicator so the user knows what is required. If the form requires information the user may not have, allow the user to come back and complete the form at a later time and proceed with account creation.


### <a name="design-guidelines-confirmation"></a>Confirmation

Once the connection is complete, indicate that the connection was successful.

![Confirmation](./app-center-ux-guidelines-consumer-confirmation-small.png)

Users should be directed to close the window as the connection is complete and may be redirected to the application home page.


## <a name="guideline-checklist"></a>Guideline Checklist

This section provides a summarized checklist of the required and recommended components of your account linking flow. For more detail, please refer to Design Guidelines section above.

“Must” indicates required. Recommendations are provided for an optimal user experience.

### <a name="guideline-checklist-landing-page"></a>Landing Page(s)

* All pages
  * Must support a form factor of 800x600 (required)
  * Must provide back/forward navigation, where applicable. (required)
  * Should be [Section 508 Compliance](https://www.section508.gov) (strongly recommended)
  * Should include support and help options clearly throughout the process.
  * Must support major browsers and versions. The full list of SAP Concur-supported browsers is available [here](https://www.concurtraining.com/customers/tech_pubs/Docs/Z_SuppConfig/Supported_Configurations_for_Concur_Travel_and_Expense_Client-Facing.pdf). (required)
  * Should adhere to your company’s brand and marketing guidelines
  * Must include your company branding and specific application brand, if applicable (required)
* On the first page (at a minimum),
  * Must clearly indicate this is an integration with SAP Concur (required)
  * Must include links to your terms and conditions and privacy policy (required)


### <a name="guideline-checklist-account-creation"></a>Account Creation

* Should include a progress indicator (recommended)

### <a name="guideline-checklist-confirmation"></a>Confirmation Page

* Must have an indication that the connection was successful. (required)
* Must provide next steps. (required)

### <a name="guideline-checklist-disconnect"></a>Disconnect

* Users should be provided with a method to disconnect within your portal. Please see documentation for revoking a token on the Developer Portal. (strongly recommended)

## <a name="accesibility-best-practices"></a>Accessibility best practices

### <a name="accesibility-best-practices-text-alternatives"></a>Provide text alternatives

Providing text alternatives for non-text content ensures that individuals with visual impairment are still able to understand your site or application. SAP Concur recommends providing short text alternatives for images, which makes your image content nearly as accessible as your text-based content. This allows special technology such as screen readers (which assist the blind) to read your content aloud to a user with visual disabilities.

### <a name="accesibility-best-practices-distinguishable-content"></a>Distinguishable content

SAP Concur’s design focuses on making it easy for users to see and/or hear content. SAP Concur manages this challenge by:

* Clearly separating foreground from background.
* Making sure color is not used as the only visual means of conveying information, indicating an action, prompting a response or distinguishing a visual element.
* Using readable fonts, making sure any text is at least 14 points and has good contrast (a minimum of 4.5 to 1 color contrast between the text and background color is recommended).
* Providing a highly visible highlighting mechanism for links or controls when they receive keyboard focus.

These design elements help make the user experience better for all users, but especially those who are visually impaired or color-blind.

### <a name="accesibility-best-practices-keyboard-control"></a>Keyboard control
All functionality of your site or application should be operable through a keyboard interface without requiring specific timings for individual keystrokes. Providing keyboard input mechanisms helps users with visual impairments or mobility issues to use your site without having to point-and-click on objects they cannot see. The keyboard interface can be combined with mouse input or other input methods, to support all users.

### <a name="accesibility-best-practices-predictable-structure"></a>Predictable structure

SAP Concur’s design attempts to make all pages appear and operate in predictable ways. SAP Concur manages this challenge by:

* Positioning labels clearly and in close proximity to inputs
* Using consistent navigation patterns across a set of webpages

### <a name="accesibility-best-practices-input-assistance"></a>Input assistance

SAP Concur aims to help users avoid and correct mistakes by:

* Hiding optional form fields
* Validating form submissions on the server
* Re-displaying a form with a summary of errors, if necessary
* Providing error notifications as the user enters information, including error notification
information in the page title
* Highlighting or visually emphasizing errors where they occur

For further information on accessibility for you and your team, we recommend:

* [http://www.w3.org/WAI/guid-tech](http://www.w3.org/WAI/guid-tech)
* [http://www.w3.org/WAI/WCAG20/quickref/](http://www.w3.org/WAI/WCAG20/quickref/)
* [http://webaccessibility.jhu.edu/what-is-accessibility/important.html](http://webaccessibility.jhu.edu/what-is-accessibility/important.html)
