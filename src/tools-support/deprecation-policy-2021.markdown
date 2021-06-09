---
title: API Lifecycle & Deprecation Policy
layout: reference

---
{% include new-policy.html %}

# API Lifecycle & Deprecation Policy

The API Lifecycle & Deprecation Policy is part of our [API terms and conditions of use.](/Terms-of-Use.html) We may make periodic updates to this policy, at which time we will notify those who have agreements with us.

## API Version Status  

* **Active:** An active API version is the most current and fully supported API. It is the recommended version for everyone to use.
* **Deprecated:** A deprecated API version has been superseded by a newer API version.  New apps will be denied access to deprecated APIs.
* **Decommissioned:** A decommissioned API version is no longer available on production.

## API Lifespan and State Change

* **Minimum Lifespan:** We will provide a minimum lifespan for active APIs of 24 months in the active or deprecated status before announcing a decommissioned state.
*	**Deprecated -> Decommissioned:** Once an API transitions from an active to deprecated status, we will maintain the API in the deprecated state for a minimum of 12 months before transitioning the API to decommissioned state.
*	**Decommissioned:** Decommissioned APIs are no longer supported and any and all documentation may be deleted at our discretion.  
*	**Exceptions:** There may be exceptions where we are not able to satisfy the foregoing minimum lifespan or minimum deprecated state duration. This is including but not limited to:
    * Where required by law or regulatory authority.
    * Where required by a third party licensor.
    * To address a security risk.
    * To address a claim by a third party of intellectual property infringement.
    * Where the associated SAP Concur product has entered end of life.
    * Due to business reasons.    

## API Version Status Table

Active|Deprecated|Decommissioned
---|---|---
**API is live in production.**| **API is live in production.** | API is no longer available in production.
**Documentation:** Available for review two weeks prior to launch. Posted on day of launch. | **Documentation:** Deprecated status indicated and posted on day of deprecation. | **Documentation:** N/A
**Support:** Updated with bug fixes and new features are available. | **Support:** Updated with bug fixes for a minimum of 12 months. | **Support:** None.
**Release Notes:** Notify two weeks prior to launch. Announce availability when in production.| **Release Notes:** Notify 90 days prior to deprecation. Announce when deprecated. Time period is at least 12 months in this status. | **Release Notes:** Notify 90 days prior to decommissioning.
