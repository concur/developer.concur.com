---
title: SAP Concur App Center - Frequently Asked Questions (FAQ)
layout: reference
---

![User looking at SAP Concur App Center](./app-center-client-faq-look-user-looking-at-app-center.png)

The SAP Concur App Center provides partner apps and services that extend the value of your Concur solution. These apps and services provide greater insights into your total spend, simplify travel and expenses, and bring travelers closer to the perfect business trip.

If you have SAP Concur App Center questions not covered in this document please, email [concur_AppCenterMarketing@sap.com](mailto:concur_AppCenterMarketing@sap.com).

* [What is the SAP Concur App Center?](#what)
* [Will users be downloading apps in SAP Concur?](#downloading)
* [How do I access the SAP Concur App Center?](#access)
* [Who can see the SAP Concur App Center tab?](#visibility)
* [How does SAP Concur review App Center Partners and integrations?](#review)
* [What should I do if I cannot find an application?](#filters)
* [How do I know the app I’m connecting with is secure?](#secure)
* [What is “OAuth 2.0”?](#oauth)
* [There are two sections in the App Center, “user connections” and “enterprise applications”. What’s the difference?](#user-enterprise)
* [If a company is NOT a TripLink client, will they see TripLink apps?](#triplink)
* [What actions can a user take from the App Center?](#actions)
* [What is different about the public website experience and the “In-Product” experience?](#website-and-product)
* [I’m an Administrator. What if I don’t want my users to download an app from the SAP Concur App Center?](#download)
* [I’m an Administrator. I’m not sure I want my users to see certain apps because I’m concerned that will encourage them to book out of policy – will it?](#control)
* [Can any user connect to an enterprise application?](#connect)
* [What happens if a user clicks on “Request Information” in the Enterprise Applications section?](#request-information)
* [Why do I want end-users to see “Enterprise Applications”?](#enterprise)
* [Is there a cost for the App Center?](#cost)
* [Are all of the apps listed relevant to my organization?](#relevant)
* [Is the App Center available to all countries and regions?](#regions)
* [What does the App Center look like?](#look)
* [I don't see the App Center tab. How do I enable it?](#enable-app-center)
* [I don’t see an application I’d like to have. Who can I talk to?](#request-application)
* [Who can I contact for other questions?](#contact)

## <a name="what"></a>What is the SAP Concur App Center?

The SAP Concur App Center is a listing of applications that offer pre-built integration with Concur. The SAP Concur App Center is available within Concur Solutions and at www.concur.com/appcenter. There are both apps for companies and apps for individual users:

* **Enterprise Applications (formerly Apps for My Business)**: Clients can discover turnkey business solutions that seamlessly integrate with Concur. Examples include apps like Taxback international, which helps companies reclaim Value Added Tax for international travel and industry solutions from IMS to help ensure compliance with international regulations for the Life Sciences industry.
* **User Connections (Apps for Me)**: Individual users can link user connection apps to their own Concur account. These links are created in a secure fashion, using authentication tokens, rather than through manual sharing of usernames and passwords, which is prohibited. Examples include Uber, Lyft, and a variety of apps to help users manage their expenses more efficiently. Additionally, users with TripLink will be able to link their accounts with travel suppliers like IHG or Starwood so reservations made on their websites flow automatically into Concur.

The SAP Concur App Center helps companies improve spend management and compliance while making travel and expensing easier for users. Pre-built integrations allow for easy adoption and deployment.

## <a name="downloading"></a>Will users be downloading apps in SAP Concur?

No, because our App Center is only about enabling the flow of data between Concur and other tools, there is nothing to download in Concur. If they don’t already use an app, users would need to first set up an account with that provider (and in some cases download the provider’s app on their mobile device) and then link their accounts.

## <a name="access"></a>How do I access the SAP Concur App Center?

The App Center is available on SAP Concur’s public website, the “In-Product” solution and in Concur for Mobile (only user apps).

* Public Website: [https://www.concur.com/en-us/app-center](https://www.concur.com/en-us/app-center)
* In-Product: [https://www.concursolutions.com/](https://www.concursolutions.com/)
* Concur for Mobile: Download the most recent version of the app

## <a name="visibility"></a>Who can see the SAP Concur App Center tab?

All SAP Concur users and admins. All partner listings can be found in the public and “In-Product” App Center. The App Center on Concur for Mobile currently only displays apps in the user connections category. All Concur Standard, Professional and Premium Edition clients and users have access.

## <a name="review"></a>How does SAP Concur review App Center Partners and integrations?

Each app appearing in the App Center is reviewed by Concur before clients or end users can connect with the application. SAP Concur reviews the application to confirm the following:

* The app requests permission to access only web services suitable for the purpose of the app (Enterprise Applications).
* For apps that request access to credit card information, SAP Concur confirms that the app provider is PCI compliant.
* The app does not generate unacceptable volumes of requests.
* The app does not generate unacceptable levels of error messages.
* The app’s user interface generally conforms to the app provider’s documentation.

SAP Concur ensures that the partner informs the user of the type of data they will be sharing with the partner if they connect. This provides complete transparency to the user on the data they are sharing with the partner.

## <a name="filters"></a> What should I do if I cannot find an application?

End users will only see applications that are available in their country. If an employee is searching for an application but unable to find it, it is possible the application does not support their region. You can refer to www.concur.com/appcenter and scroll down to the "regional availability" to find out where an application is avaiable.

## <a name="secure"></a>How do I know the app I’m connecting with is secure?

SAP Concur's platform enforces several layers of security:

* OAuth 2.0 is used to control information sharing so that an app cannot access information associated with a user or customer without approval from the user or customer.
* Secure Sockets Layer (SSL) is used to manage the security of data transmissions.
* App registration and formal certification ensures only known apps may integrate with Concur.

## <a name="oauth"></a>What is “OAuth 2.0”?

OAuth is an open standard for authorization. OAuth provides a method for clients to access server resources on behalf of a resource owner (such as a different client or an end-user). It also provides a process for end-users to authorize third-party access to their server resources without sharing their credentials (typically, a username and password pair), using user-agent redirections.

## <a name="user-enterprise"></a>There are two sections in the App Center, “user connections” and “enterprise applications”. What’s the difference?

**User connections** (formerly Apps for Me) are end-user apps. Users can “connect” their accounts enabling relevant data to flow between the two solutions. An example would be TripIt, an app which provides a Concur Travel integration. It’s important to note that the apps displayed on this tab are based on the client’s product configuration; for example, a user with Concur Travel only will not see expense related apps.

**Enterprise applications** (formerly Apps for My Business) are enterprise apps that need to be procured and activated by the appropriate SAP Concur administrator in an organization. In the App Center, individuals can learn about the apps that are available and send an inquiry to the partner. Once you have contracted with the partner and provided SAP Concur with a signed Letter of Authorization (provided by the partner) signifying that you authorize SAP Concur to enable the integration the app can be enabled. There will typically be a few steps to configure the integration, depending on the application type. An example would be Taxback International, which provides an Expense integration.

> Note: Some partners, such as Uber for Business, use a connection process that allows the Letter of Authorization to be agreed upon online by an administrator. Screenshots of this process appear in the answer to “Can any user connect to an enterprise application?“ on page 8 below.

## <a name="triplink"></a>If a company is NOT a TripLink client, will they see TripLink apps?

No, if a company does not have TripLink they will not see Concur TripLink apps in the “user connections” section when logged in to Concur.

## <a name="actions"></a>What actions can a user take from the App Center?

On each App Center Partner listing, a “Request Information” button will be available for users to click to complete an inquiry form that will be submitted directly to the App Center Partner; this is for apps in the enterprise category. User connection apps will have a “Login to connect” button requiring them to log into their Concur account to connect their account.

Users can also view brochures, videos, contact information and the partner’s website for both types of apps.

## <a name="website-and-product"></a>What is different about the public website experience and the “In-Product” experience?

In the “In-Product” experience, users will be able to view which end-user applications they have connected with (indicated with a green check box) and disable those integrations if desired.

![SAP Concur In Product Experience](./app-center-client-faq-in-product-experience.png)

The public website experience will not display which apps the user is connected to.

For both the “In-Product” and public website App Center, enterprise applications will only display the app listing and the option to “Request Information” with the partner.

User applications in the “in-product” App Center are also filtered by the user’s region, the SAP Concur products your company is using (Travel, Expense, and/or Invoice), and whether or not your company has purchased TripLink.

## <a name="download"></a>I’m an Administrator. What if I don’t want my users to download an app from the SAP Concur App Center?

Users cannot download apps directly from the SAP Concur App Center, it’s simply a means to open a secure gateway to share relevant data between their Concur account and their account with the partner. If you have concerns about your users being able to connect with any of the user apps, you’re able to disable them following the [App Center Administrator User Guide](https://www.concurtraining.com/customers/tech_pubs/Docs/ConcurPremier/UG_Shr/Shr_UG_AppCenterAdmin.pdf).

## <a name="control"></a>I’m an Administrator. I’m not sure I want my users to see certain apps because I’m concerned that will encourage them to book out of policy – will it?

Travel booking controls, content and search results are still defined by you. Travelers will only see TripLink supplier listings if you have enabled the TripLink service. Admins may also disable certain user applications so that users are not able to connect their accounts via the [App Center Administrator User Guide](https://www.concurtraining.com/customers/tech_pubs/Docs/ConcurPremier/UG_Shr/Shr_UG_AppCenterAdmin.pdf).

## <a name="connect"></a>Can any user connect to an enterprise application?

No, only users with administration permissions (as defined in the App Center Administration Guide) can connect to enterprise applications.

When viewing enterprise applications as an administrator, you will see the following options:

![Connect Available](./app-center-client-faq-connect-available.png)

Users that do not have administration privileges will see the below and will be unable to connect.

![Connect Unavailable](./app-center-client-faq-connect-unavailable.png)

For more information on connecting to enterprise applications as an administrator, please see the App Center Administration guide.  <!-- ToDo Broken Link -->

## <a name="request-information"></a>What happens if a user clicks on “Request Information” in the Enterprise Applications section?

If a user clicks the “Request Information” button, they will be taken to a contact form. If the form is submitted, the partner will reach out to the contact and engage with them for more information about their app. All enterprise app integrations require an authorized contract and SAP Concur Administrator engagement.

## <a name="enterprise"></a>Why do I want end-users to see “Enterprise Applications”?

By offering visibility of “Enterprise Applications” to your user-base, you may discover that there are additional needs among your traveling community for specific integrations with Concur Travel & Expense. For example, a sales person may have the need to integrate Concur Travel & Expense with a CRM or ERP system. If they see a connection is available in the App Center, they can communicate that to their company for further review of the solution.

While there may be many areas of the business that determine if an app is a good fit for their business requirements, they will always require the involvement of the SAP Concur Administrator to activate an application so there is no risk of an enterprise app being enabled without the SAP Concur Administrator’s authorization post a contract signature.

## <a name="cost"></a>Is there a cost for the App Center?

Access to the App Center is free of charge. If a company chooses to connect with an enterprise app, they first have to contract with that App Center partner directly, where there may be a cost. These transactions are between you and the partner and are not facilitated within the App Center. Some of the user connection apps will have costs associated with using that partner’s service. The users can procure the service directly from the partner but again, those transactions are not facilitated within the App Center.

## <a name="relevant"></a>Are all of the apps listed relevant to my organization?

Not necessarily. There may be enterprise applications which are relevant only for a particular vertical industry or region. Advanced filtering and search functionality are available to enable you to easily find the apps that are most relevant.

User connection apps displayed are based on the client’s product configuration; for example a user with Concur Travel only will not see expense-related apps.

## <a name="regions"></a>Is the App Center available to all countries and regions?

Yes. The App Center within the SAP Concur product is available to all countries and regions; however, the user connection apps an employee sees will be filtered to show only those available in the employee's home location and the SAP Concur products your company utilizes.

The public App Center found at [https://www.concur.com/app-center](https://www.concur.com/app-center) contains all partner applications regardless of where or with which products the app is available.

Regional availability is noted in the details page of each app listing in the App Center.

![Regions Available](./app-center-client-faq-regions-available.png)

Additionally, SAP Concur is adding regional public App Centers. So far, we have pages with specially-curated apps for Japan, the UK, and Australia, with more to come. <!-- ToDo Broken Link -->

## <a name="look"></a>What does the App Center look like?

What you’ll see in the public and in-product App Center:

![SAP Concur App Center Look - Browser](./app-center-client-faq-look-browser.png)

What you’ll see in the App Center on Concur for Mobile:

![SAP Concur App Center Look - Mobile](./app-center-client-faq-look-mobile.png)

## <a name="enable-app-center"></a>I don’t see the App Center tab. How can I turn on the App Center for my company?

If your company does not have the App Center tab enabled within Concur Solutions and would like to add it, please email [concur_AppCenterMarketing@sap.com](mailto:concur_AppCenterMarketing@sap.com) with your company name. The App Center is available for all customers and is free of charge.

## <a name="request-application"></a>I don’t see an application I’d like to have. Who can I talk to?

Please email [concur_AppCenterMarketing@sap.com](mailto:concur_AppCenterMarketing@sap.com) with your App Center Partner recommendation.

## <a name="contact"></a>Who can I contact for other questions?

If you have additional questions or would like to discuss the SAP Concur App Center, please email [concur_AppCenterMarketing@sap.com](mailto:concur_AppCenterMarketing@sap.com).
