---
title: Connection Requests Overview 
layout: conceptual
---




##  Overview

The Connection Requests resource is used to create, update, and manage connections between a user's Concur account and a select travel loyalty program. TripLink partner applications can implement the Connection Requests to make it easy for users to connect their Concur accounts automatically with all TripLink travel partners so that their itineraries automatically flow to their Concur accounts. With Connection Requests a TripLink partner application can retrieve new connection requests and provide status for pending connections, successful connections, and failed connections. When retrieving new connections, the results can be filtered by status, page offset, and a limit for the number of records to return.

###  End-User Experience

Users can automatically connect their Concur accounts with select Concur travel partners when the user access a TripLink application with selected partners from the Concur App Center or when they create a booking on the partner's website.

Read the [TripLink Partner UX Design guide][1] to help you streamline the process of connecting a user's Concur account to your system. This guide provides best-practices for user-centered design, examples of dos-and-don'ts, and examples of our suggested step-by-step processes that users should experience when linking their Concur account with your site.

###  Enrolling From the App Center

A user can enroll to connect his or her Concur account with select Concur travel partners from the App Center. When a user accesses a TripLink app from the Concur App Center:

1. The user sees a dialog box with a **Learn More** button to find out the benefits of automatically connecting their Concur accounts with travel loyalty programs at selected Concur travel partners:  
![][2]  
 
2. The user sees a dialog box where they can enroll to automatically connect their Concur accounts with travel loyalty programs at selected Concur travel partners:  
![][3]

####  What Happens After a User Enrolls

After a user enrolls, the user's Concur account is automatically connected to travel loyalty program(s) based on the information in the user's Concur profile. When the user books travel with the Concur travel partners they are connected to, the following occurs:

* The user's reservation information appears in Concur and the user's travel apps.
* The user's expenses flow directly into the user's expense reports if the user has Concur Expense.
* The user's negotiate rates at the user's company preferred travel partners are available.
* The user receives an e-mail with a status for new and pending connections.

###  Connection Requests API Usage Scenarios

The following table lists some common scenarios where Connection Requests can be used:

**New connection**

|  Usage scenario |  Expected result |
|-----------------|------------------|
|  User enrolls to automatically connect to Concur travel partners.|Connection request is created for all users who enrolled to automatically connect to Concur travel partners.|
|  New travel partner comes online. |Connection request created for existing travel suppliers.|
|  Request to re-create the connection request. |  Create a connection request for a specific user. |
|  Connection request failed for a given user. |  Create a connection request for a specific user. |

**Pending connections**
|  Usage scenario |  Expected result |
|-----------------|------------------|
|  Travel partner application requests a list of all connection requests |  List of pending connection requests that match the TripLink partner ID are returned. |

**Successful connections**
|  Usage scenario |  Expected result |
|-----------------|------------------|
|  Request token was successfully exchanged for the access token and the travel partner application makes a PUT call. |  Connection request status is marked as successful. |

**Failed connections**
|  Usage scenario |  Expected result |
|-----------------|------------------|
|  Connection failed because of an invalid travel loyalty number. |  Travel partner application updates the connection request with failure reason. |
|  Connection failed because of mismatched information between the user's travel loyalty information and the user's Concur profile. |  Travel partner application updates the connection request with failure reason. |

##  See Also

[Learn How to Implement the Auto-Connect Flow with Connection Requests][4]  
[Learn How to Design a compelling TripLink user experience with Connection Requests][1]




[1]: https://developer.concur.com/sites/default/files/Concur-TripLink-PartnerGuide-7.10.2014.pdf
[2]: https://developer.concur.com/sites/default/files/2014-03-31_0002_App-Center_70.png
[3]: https://developer.concur.com/sites/default/files/03-IPM-SelectBrands-NoBrandsInProfile_50.png
[4]: https://developer.concur.com/oauth-20/auto-connect-flow
