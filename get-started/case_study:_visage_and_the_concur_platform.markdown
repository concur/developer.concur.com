#Case Study: Visage and the Concur Platform
##Visage & Concur: Let's Make Mobile Expenses Easy for Travelers & Businesses


Today's business travelers take 461 million trips a year in the U.S. alone [^1] and believe that, on average, 42 percent of customers would eventually be lost without face-to-face meetings [^2]. Most bring their own devices (smartphones, iPads, laptops), making wireless expense management unwieldy for travelers and companies alike. That's why Visage created MobilityCentral and its "MXP" Concur plug-in for "bring-your-own-device" expense management: To aggregate data about enterprise mobility spend – for the full range of devices (company paid & employee paid/BYOD) – and deliver reporting and analytics related to mobile spend and usage.

Visage integrated with the Concur Platform to help 20K companies and 25M travelers using Concur's T&E cloud services remove the pain around managing business and travel-related mobile expenses - which often involve multiple devices, carriers, and, in some cases, denominations - while adhering to corporate policy. Their joint mission: Make life on the road even easier for travelers, and life at the home office more efficient and effective for expense managers.

---
####Hidden Costs of Mobile Phones
For international travelers, a monthly phone bill can include: a $177.18 cost per line, $50.63 in international voice roaming charges, plus $76.97 non-recurring charges [^3].

---

####Planning and Building on the Concur Platform
The entire process, from when Visage first started working with Concur on pulling mobile spend and pushing corporate spend to complete integration, took about three months. The following development tools from the Concur Developer Portal were critical: Sandbox, Documentation and Code Samples.

Venkat Prodhuturi, VP of Engineering for Visage, led the integration with Concur engineering and technical teams, and used the following APIs to perform these respective functions:

* **Expense API**
	* To map expense data from Concur with data in Visage MobilityCentral
	* To post mobile expense transactions and map back to MobilityCentral
	* To populate and post expense reports (either new or existing)


* **Imaging API**
	* To post image of billing statement or receipt from mobile device carrier

* **User API**
	* Used in conjunction with OAuth 2.0 to associate the data with the end-user

"Concur has been a great partner to work with - the technical consultants and platform team are very knowledgeable and responsive," reports Venkat. "The developer sandbox was extremely helpful, and the documentation has been great because the APIs are very well described and there are sample responses displayed. Concur is highly configurable and has different editions and customers. For a successful integration, we needed to understand the complexity of the system."

###App Testing & Certification:
The solution was built and tested for companies using Concur that either: 1) Pay mobile expenses using personal credit cards; or 2) Pay mobile expenses using corporate credit cards (but not a mix of both personal and corporate).

Visage MobilityCentral then pulls invoices from carriers and posts the associated expenses for Concur users (typically within one or two weeks). Twenty-two mobile expense types feed into Concur. Each process is tested and reviewed as part of testing and Concur app certification. Certification ensures that the product performs as intended, so it's a friction-less experience for Concur users.

"It's ideal to build a solution that's scalable," says Venkat. "This cuts down on the amount of work the client administrator or consultant needs to do to get the app off the ground. The less configuration required on both sides, the faster time it takes to build and deploy."

####Implementation: How It Works
Companies using Concur can easily learn about and deploy Visage MobilityCentral and the MXP plug-in from the new Concur App Center. The Concur Expense API pulls data from Visage MobilityCentral and automatically uploads mobile expenses so that Concur users can quickly view, sort and expense related items from their business trips.

As an enterprise-level solution, Visage MobilityCentral can easily be deployed by a company's IT or Finance team and is configured to work with all versions of Concur's Travel & Expense products.

-----

####Concur is Highly Configurable
"The development sandbox was extremely helpful, and the documentation has been great because the APIs are very well described and there are sample responses displayed. Concur is highly configurable..."

--Venkat Prodhuturi, VP of Engineering for Visage

----

####Collaboration Leads to New Solutions for Travelers
Visage continued to work with the Concur Platform team on addressing pain points and they identified a need to help Travel Management Companies (TMCs) and finance teams deal with international roaming expenses. After brainstorming with product development, Visage is planning a new offering that identifies international trips and delivers proactive notifications to help travelers plan and save on mobile expenses.


"For partners, a lot can be done on the Concur Platform and they may not be thinking about what other possibilities exist," Venkat points out. "With the Concur Platform and data available, the experience can be much richer."

###Marketing MobilityCentral
The new Visage MXP plug-in and integration with MobilityCentral offering was co-marketed with Concur and published in the Concur App Center, reaching 25M Concur users in-product and online. Visage also worked closely with Concur sales teams and clients to introduce the product through Webinars and sales meetings. As a partner, they gained exposure to Concur clients and potential leads via annual Concur events: Fusion Exchange and Fusion.

"Concur staff are open and welcoming partners," says Neil Cohen, VP of Marketing at Visage. "Where we've seen opportunities or areas to improve, Concur listens and takes recommendations that have had a positive impact on our ability to create leads."

"Our relationship with Concur has landed some important business wins, including one of our largest contracts of the year, and largest international booking in our business to date," Neil Cohen adds. "And as we work together, the number of qualified sales leads continue to increase." And companies have a brand new integrated solution for mobile expenses.

 ----

####Landing Wins
"Our relationship with Concur has landed some important business wins, including one of our largest contracts of the year, and largest international booking in our business to date."

--Neil Cohen, VP of Marketing

---
 

 

[^1]:GBTA

[^2]:Travel Effect

[^3]:Visage